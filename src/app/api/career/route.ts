// src/app/api/career/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const whatsapp = data.get('whatsapp') as string | null;
    const contactOther = data.get('contactOther') as string | null;
    const resumeUrl = data.get('resumeUrl') as string;
    const portfolioUrl = data.get('portfolioUrl') as string | null;
    const coverLetter = data.get('coverLetter') as string;

    if (!firstName || !lastName || !email || !phone || !resumeUrl || !coverLetter) {
      return NextResponse.json({ success: false, error: 'Required fields are missing.' }, { status: 400 });
    }

    const created = await prisma.careerApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        whatsapp,
        contactOther,
        resumeUrl,
        portfolioUrl,
        coverLetter,
      },
    });

    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    console.error('Career form error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

