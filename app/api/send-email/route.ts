import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMail } from "@/lib/mailer";
import {
  getAdminNotificationHtml,
  getClientThankYouHtml,
} from "@/lib/email-templates";
import { contactInputSchema } from "@/lib/validations/contact";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate input using Zod schema
    const validationResult = contactInputSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, MobileNo } = validationResult.data;

    // 1. Trigger email sending in background (Fire-and-forget)
    // We do NOT await these promises so the response is fast
    const adminHtml = getAdminNotificationHtml(name, email, message, MobileNo);
    const clientHtml = getClientThankYouHtml(name, message);

    const emailPromises = [
      sendMail({
        to: siteConfig.contactInfo.email,
        subject: "New Connection Request from Portfolio",
        html: adminHtml,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nMobileNo: ${
          MobileNo || "N/A"
        }`,
      }),
      sendMail({
        to: email,
        subject: "Thank you for contacting me",
        html: clientHtml,
        text: `Hi ${name},\n\nThank you for contacting me. I’ve received your message and will respond shortly.\n\nRegards,\nPrabhat Saini`,
      }),
    ];

    // Catch any errors in the background tasks so they don't cause unhandled rejections
    // Catch any errors in the background tasks so they don't cause unhandled rejections
    try {
      await Promise.all(emailPromises);
    } catch (err) {
      console.error("Error sending emails:", err);
    }

    // 2. Insert data into the database (Synchronous - Await this)
    await prisma.connectionRequest.create({
      data: {
        connectorName: name,
        connectorEmail: email,
        message: message,
        MobileNo: MobileNo,
      },
    });

    return NextResponse.json(
      { message: "SUCCESS", data: null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
