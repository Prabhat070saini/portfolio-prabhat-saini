import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    let downloadLink = activeResume.resumeLink;

    // Direct download logic for Google Drive
    if (
      downloadLink.includes("drive.google.com") &&
      downloadLink.includes("/file/d/")
    ) {
      const fileIdMatch = downloadLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        downloadLink = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
      }
    }

    return NextResponse.redirect(downloadLink);
  } catch (error) {
    console.error("Error fetching resume:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
