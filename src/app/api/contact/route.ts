// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import { sendMail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();
    await Contact.create(data); // Save to MongoDB first

    const userSubject = 'Thanks for contacting us!';
    const hrSubject = `New Contact Submission from ${data.firstName} ${data.lastName}`;

    const userHtml = `
      <p>Hi ${data.firstName},</p>
      <p>Thanks for getting in touch with us. We’ve received your message and will respond shortly.</p>
    `;

    const hrHtml = `
      <h3>New Inquiry Submitted</h3>
      <ul>
        <li><b>Name:</b> ${data.firstName} ${data.lastName}</li>
        <li><b>Email:</b> ${data.email}</li>
        <li><b>Phone:</b> ${data.phone}</li>
        <li><b>Interest:</b> ${data.interest}</li>
        <li><b>Country:</b> ${data.country}</li>
        <li><b>City:</b> ${data.city}</li>
        <li><b>Message:</b> ${data.message}</li>
        <li><b>Agreed to offers:</b> ${data.agree ? 'Yes' : 'No'}</li>
      </ul>
    `;

    // Send emails after response (non-blocking)
    Promise.all([
      sendMail(data.email, userSubject, userHtml),
      sendMail(process.env.HR_EMAIL!, hrSubject, hrHtml),
    ]).catch((err) => console.error('Email sending error:', err));

    // ✅ Immediately respond to user — no email delay
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
