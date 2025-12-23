import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMail } from "@/lib/mailer";
import {
  getAdminNotificationHtml,
  getClientThankYouHtml,
} from "@/lib/email-templates";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Trigger email sending in background (Fire-and-forget)
    // We do NOT await these promises so the response is fast
    const adminHtml = getAdminNotificationHtml(name, email, message);
    const clientHtml = getClientThankYouHtml(name, message);

    const emailPromises = [
      sendMail({
        to: "prabhat07saini@gmail.com",
        subject: "New Connection Request from Portfolio",
        html: adminHtml,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }),
      sendMail({
        to: email,
        subject: "Thank you for contacting me",
        html: clientHtml,
        text: `Hi ${name},\n\nThank you for contacting me. I’ve received your message and will respond shortly.\n\nRegards,\nPrabhat Saini`,
      }),
    ];

    // Catch any errors in the background tasks so they don't cause unhandled rejections
    Promise.all(emailPromises).catch((err) =>
      console.error("Error causing background emails to fail:", err)
    );

    // 2. Insert data into the database (Synchronous - Await this)
    const newRequest = await prisma.connectionRequest.create({
      data: {
        connectorName: name,
        connectorEmail: email,
        message: message,
      },
    });

    return NextResponse.json(
      { message: "Request saved and emails queued", data: newRequest },
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
