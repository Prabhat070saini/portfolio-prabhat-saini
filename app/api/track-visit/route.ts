import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { HTTP_STATUS, API_MESSAGES, ANONYMOUS_IP } from "@/lib/constants/api";

export async function POST(request: NextRequest) {
  try {
    // Get IP address from headers, fallback to anonymous
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ipAddress = forwarded?.split(",")[0]?.trim() || realIp || ANONYMOUS_IP;

    // Upsert visitor record - increment count if exists, create if not
    const visitor = await prisma.visitorTracking.upsert({
      where: { ipAddress },
      update: {
        visitCount: { increment: 1 },
        lastVisitAt: new Date(),
      },
      create: {
        ipAddress,
        visitCount: 1,
      },
    });

    return NextResponse.json(
      {
        message: API_MESSAGES.tracking.success,
        visitCount: visitor.visitCount,
      },
      { status: HTTP_STATUS.OK }
    );
  } catch (error) {
    console.error("Error tracking visit:", error);
    return NextResponse.json(
      { error: API_MESSAGES.tracking.trackError },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function GET() {
  try {
    // Get total visits and unique visitors
    const stats = await prisma.visitorTracking.aggregate({
      _sum: { visitCount: true },
      _count: { ipAddress: true },
    });

    const recentVisitors = await prisma.visitorTracking.findMany({
      orderBy: { lastVisitAt: "desc" },
      take: 10,
      select: {
        ipAddress: true,
        visitCount: true,
        firstVisitAt: true,
        lastVisitAt: true,
      },
    });

    return NextResponse.json(
      {
        message: API_MESSAGES.tracking.fetchSuccess,
        totalVisits: stats._sum.visitCount || 0,
        uniqueVisitors: stats._count.ipAddress || 0,
        recentVisitors,
      },
      { status: HTTP_STATUS.OK }
    );
  } catch (error) {
    console.error("Error fetching visitor stats:", error);
    return NextResponse.json(
      { error: API_MESSAGES.tracking.fetchError },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
