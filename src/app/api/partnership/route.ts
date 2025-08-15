import connectDB from '@/lib/db';
import Partnership from '@/models/Partnership';
import { sendMail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    await connectDB();

    const { fullName, email, phone, city, propertyType, propertySize } = await req.json();

    // Save to MongoDB
    const newEntry = new Partnership({
      fullName,
      email,
      phone,
      city,
      propertyType,
      propertySize,
    });
    await newEntry.save();

    // Notify Sir
    await sendMail(
      'vnexora345@gmail.com', 
      'New Partnership Inquiry',
      `
        <h3>New Partnership Request</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Property Size:</strong> ${propertySize}</p>
      `
    );

    // Send Confirmation to User
    await sendMail(
      email, // user's email
      'We Received Your Partnership Request',
      `
        <h3>Thank you, ${fullName}!</h3>
        <p>We have received your partnership inquiry. Our team will contact you soon.</p>
        <p>Details you submitted:</p>
        <ul>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>Property Type:</strong> ${propertyType}</li>
          <li><strong>Property Size:</strong> ${propertySize}</li>
        </ul>
        <p>Regards,<br>Elite Hotel Partnerships</p>
      `
    );

    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
