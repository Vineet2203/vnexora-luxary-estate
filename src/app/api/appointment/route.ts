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

    // 1️⃣ Save appointment to DB
    let newAppointment;
    try {
      newAppointment = await Appointment.create({
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
    } catch (dbError) {
      console.error("❌ DB Save Error:", dbError);
      return NextResponse.json(
        { success: false, error: 'Failed to save appointment' },
        { status: 500 }
      );
    }

    // 2️⃣ Prepare emails
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

    // 3️⃣ Send email to user
    try {
      await sendMail(email, 'Your Appointment Confirmation', userHtml);
    } catch (userMailError) {
      console.error("⚠️ Failed to send confirmation email to user:", userMailError);
    }

    // 4️⃣ Send email to HR (only if HR_EMAIL is set)
    const hrEmail = process.env.HR_EMAIL;
    if (!hrEmail) {
      console.warn("⚠️ HR_EMAIL environment variable is missing. Skipping HR email.");
    } else {
      try {
        await sendMail(hrEmail, 'New Appointment Scheduled', hrHtml);
      } catch (hrMailError) {
        console.error("⚠️ Failed to send email to HR:", hrMailError);
      }
    }

    // 5️⃣ Always return success if DB save worked
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("🔥 Appointment POST fatal error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
