import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

const prisma = new PrismaClient();

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const whatsapp = data.get('whatsapp') as string | null;
    const contactOther = data.get('contactOther') as string | null;
    const coverLetter = data.get('coverLetter') as string;
    const resumeFile = data.get('resumeUrl') as File;
    const rawPortfolio = data.get('portfolioUrl');
    const portfolioUrl = typeof rawPortfolio === 'string' ? rawPortfolio : null;

    
    // Add this log before validation
    console.log({
      firstName,
      lastName,
      email,
      phone,
      whatsapp,
      contactOther,
      coverLetter,
      resumeFile,
      portfolioUrl,
    });

    // Validation check
    if (!firstName || !lastName || !email || !phone || !resumeFile || !coverLetter) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    // Upload resume to Supabase Storage
    const fileExt = resumeFile.name.split('.').pop();
    const fileName = `${Date.now()}_${resumeFile.name}`;
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());

    const { data: uploadData, error: uploadError} = await supabase.storage
      .from('resume')
      .upload(fileName, fileBuffer, {
        contentType: resumeFile.type,
        upsert: true,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { success: false, error: 'Failed to upload resume.' },
        { status: 500 }
      );
    }

    const resumeUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/resumes/${fileName}`;

    // Store data in database
    const created = await prisma.careerApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        whatsapp,
        contactOther,
        portfolioUrl,
        coverLetter,
        resumeUrl: resumeUrl,
      },
    });

    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    console.error('Career form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
