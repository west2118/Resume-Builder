import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { resumeId, template, resumeData } = body;

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };

    const userId = decoded.id;

    // --------------------------
    // UPDATE EXISTING RESUME
    // --------------------------
    if (resumeId) {
      await prisma.experience.deleteMany({ where: { resumeId } });
      await prisma.education.deleteMany({ where: { resumeId } });
      await prisma.skill.deleteMany({ where: { resumeId } });
      await prisma.project.deleteMany({ where: { resumeId } });
      await prisma.certification.deleteMany({ where: { resumeId } });

      await prisma.resume.update({
        where: { id: resumeId },
        data: {
          template,
          fullName: resumeData.personal.fullName,
          jobTitle: resumeData.personal.jobTitle,
          email: resumeData.personal.email,
          phone: resumeData.personal.phone,
          location: resumeData.personal.location,
          summary: resumeData.summary,

          experiences: { create: resumeData.experience },
          education: { create: resumeData.education },
          skills: {
            create: resumeData.skills.map((s: string) => ({ name: s })),
          },
          projects: { create: resumeData.projects },
          certifications: { create: resumeData.certifications },
        },
      });

      return NextResponse.json({ message: "Updated" });
    }

    // --------------------------
    // CREATE NEW RESUME
    // --------------------------
    const newResume = await prisma.resume.create({
      data: {
        template,
        fullName: resumeData.personal.fullName,
        jobTitle: resumeData.personal.jobTitle,
        email: resumeData.personal.email,
        phone: resumeData.personal.phone,
        location: resumeData.personal.location,
        summary: resumeData.summary,

        user: {
          connect: { id: userId },
        },

        experiences: { create: resumeData.experience },
        education: { create: resumeData.education },
        skills: {
          create: resumeData.skills.map((s: string) => ({ name: s })),
        },
        projects: { create: resumeData.projects },
        certifications: { create: resumeData.certifications },
      },
    });

    return NextResponse.json({
      message: "Created",
      resumeId: newResume.id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
