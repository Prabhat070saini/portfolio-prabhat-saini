import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { feedbackInputSchema } from "@/lib/validations/feedback";
import { HTTP_STATUS, API_MESSAGES, ANONYMOUS_IP } from "@/lib/constants/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input using Zod schema
    const validationResult = feedbackInputSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: API_MESSAGES.feedback.validationFailed,
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: HTTP_STATUS.BAD_REQUEST }
      );
    }

    const { name, contact, feedback } = validationResult.data;

    // Get IP address to link with visitor, fallback to anonymous
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ipAddress = forwarded?.split(",")[0]?.trim() || realIp || ANONYMOUS_IP;

    // Find existing visitor by IP address
    let visitorId: number | null = null;
    const visitor = await prisma.visitorTracking.findUnique({
      where: { ipAddress },
    });
    visitorId = visitor?.id || null;

    // Save feedback to database with visitor relation
    await prisma.feedback.create({
      data: {
        name,
        contact,
        feedback,
        visitorId,
      },
    });

    return NextResponse.json(
      { message: API_MESSAGES.feedback.success },
      { status: HTTP_STATUS.CREATED }
    );
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json(
      { error: API_MESSAGES.feedback.submitError },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        visitor: {
          select: {
            ipAddress: true,
            visitCount: true,
            firstVisitAt: true,
            lastVisitAt: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: API_MESSAGES.feedback.fetchSuccess,
        data: feedbacks,
      },
      { status: HTTP_STATUS.OK }
    );
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return NextResponse.json(
      { error: API_MESSAGES.feedback.fetchError },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
