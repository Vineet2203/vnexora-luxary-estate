import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { sendMail } from '@/lib/mailer';
import Appointment from '@/models/Appointment';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      type,
      date,
      time,
      Fname,
      Lname,
      email,
      phone,
      subject,
      address,
      platform,
    } = body;

    const newAppointment = await Appointment.create({
      type,
      date,
      time,
      Fname,
      Lname,
      email,
      phone,
      subject,
      address,
      platform,
    });

    // HTML for user
    const userHtml = `
      <h2>Hi ${Fname},</h2>
      <p>Your <strong>${type}</strong> meeting has been successfully scheduled.</p>
      <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      ${platform ? `<p><strong>Platform:</strong> ${platform}</p>` : ''}
      ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
      <br/>
      <p>We’ll get back to you shortly if needed.</p>
      <p>Thanks,<br/>Team Vnexora</p>
    `;

    // HTML for HR
    const hrHtml = `
      <h2>New Appointment Scheduled</h2>
      <p><strong>Name:</strong> ${Fname} ${Lname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      ${platform ? `<p><strong>Platform:</strong> ${platform}</p>` : ''}
      ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
    `;

    // Send to user
    await sendMail(email, 'Your Appointment Confirmation', userHtml);

    const hrEmail = process.env.HR_EMAIL;
    if (!hrEmail) {
      throw new Error('HR_EMAIL environment variable is not set.');
    }

    // Send to HR
    await sendMail(hrEmail, 'New Appointment Scheduled', hrHtml);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
