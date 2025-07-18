// /app/api/career/[id]/resume/route.ts
import { NextRequest } from 'next/server';
import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import Career from '@/models/Career';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database connection is not established.");
    }
    const bucket = new GridFSBucket(db, { bucketName: 'resumes' });

    // Extract id from the URL
    const urlParts = req.nextUrl.pathname.split('/');
    const id = urlParts[urlParts.length - 2]; // /career/[id]/resume

    const career = await Career.findById(id);
    if (!career || !career.resumeFileId) {
      return new Response('Resume not found', { status: 404 });
    }

    const downloadStream = bucket.openDownloadStream(career.resumeFileId);

    const stream = new ReadableStream({
      start(controller) {
        downloadStream.on('data', (chunk) => controller.enqueue(chunk));
        downloadStream.on('end', () => controller.close());
        downloadStream.on('error', (err) => controller.error(err));
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${career.resumeFilename}"`,
      },
    });
  } catch (error) {
    console.error('Resume download error:', error);
    return new Response('Server error', { status: 500 });
  }
}
