import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const activeResume = await prisma.resume.findFirst({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!activeResume || !activeResume.resumeLink) {
      return NextResponse.json(
        { error: "No active resume found" },
        { status: 404 }
      );
    }

    return NextResponse.redirect(activeResume.resumeLink);
  } catch (error) {
    console.error("Error fetching resume:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
