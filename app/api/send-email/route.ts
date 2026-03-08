import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMail } from "@/lib/mailer";
import {
  getAdminNotificationHtml,
  getClientThankYouHtml,
} from "@/lib/email-templates";
import { contactInputSchema } from "@/lib/validations/contact";
import { siteConfig } from "@/config/site";
import { HTTP_STATUS, API_MESSAGES } from "@/lib/constants/api";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate input using Zod schema
    const validationResult = contactInputSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: API_MESSAGES.contact.validationFailed,
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: HTTP_STATUS.BAD_REQUEST }
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
      { message: API_MESSAGES.contact.success, data: null },
      { status: HTTP_STATUS.OK }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: API_MESSAGES.contact.sendError },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
