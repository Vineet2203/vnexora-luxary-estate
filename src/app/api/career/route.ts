import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import connectDB from '@/lib/db';
import Career from '@/models/Career';
import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import nodemailer from 'nodemailer';

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();

    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'whatsapp',
      'coverLetter', 'resumeUrl', 'positionType', 'department',
    ];

    const missingFields = requiredFields.filter((field) => !formData.get(field));
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const whatsapp = (formData.get('whatsapp') as string) || '';
    const portfolioUrl = (formData.get('portfolioUrl') as string) || '';
    const coverLetter = formData.get('coverLetter') as string;
    const file = formData.get('resumeUrl') as File;
    const positionType = formData.get('positionType') as string;
    const department = formData.get('department') as string;
    const otherDepartment = (formData.get('otherDepartment') as string) || '';

    // ✅ Validate resume file
    if (!file || typeof file === 'string' || file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File size exceeds 2MB limit' }, { status: 400 });
    }

    // ✅ Upload to MongoDB GridFS
    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database connection is not established.");
    }
    const bucket = new GridFSBucket(db, { bucketName: 'resumes' });

    const uploadStream = bucket.openUploadStream(file.name, {
      contentType: file.type,
    });

    stream.pipe(uploadStream);

    const fileId: mongoose.Types.ObjectId = await new Promise((resolve, reject) => {
      uploadStream.on('finish', () => resolve(uploadStream.id as mongoose.Types.ObjectId));
      uploadStream.on('error', (err) => reject(err));
    });

    // ✅ Save to DB
    await Career.create({
      firstName,
      lastName,
      email,
      phone,
      whatsapp,
      portfolioUrl,
      coverLetter,
      resumeFileId: fileId,
      resumeFilename: file.name,
      positionType,
      department,
      otherDepartment,
      createdAt: new Date(),
    });

    // ✅ Send emails (non-blocking)
    Promise.all([
      transporter.sendMail({
        from: `"Vnexora" <${process.env.NODEMAILER_USER}>`,
        to: email,
        subject: 'Application Received – Thank You!',
        html: `
          <p>Thank you for applying for <strong>${positionType}</strong> in <strong>${department}${department === 'Others' ? ' - ' + otherDepartment : ''}</strong>.</p>
        `,
      }),

      transporter.sendMail({
        from: `"Career Portal" <${process.env.NODEMAILER_USER}>`,
        to: process.env.HR_EMAIL!,
        subject: `New Application from ${firstName} ${lastName}`,
        html: `
          <h3>New Candidate Applied</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Portfolio:</strong> ${portfolioUrl || 'N/A'}</p>
          <p><strong>Cover Letter:</strong></p>
          <p>${coverLetter}</p>
          <p><strong>Resume:</strong> Stored in internal DB (GridFS)</p>
          <p><strong>Position:</strong> ${positionType}</p>
          <p><strong>Department:</strong> ${department}${department === 'Others' ? ' - ' + otherDepartment : ''}</p>
          <p>Applied At: ${new Date().toLocaleString()}</p>
        `,
      }),
    ]).catch((err) => console.error('Email sending error:', err));

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Career submission error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process application',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
