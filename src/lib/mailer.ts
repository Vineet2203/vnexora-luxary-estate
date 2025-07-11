// src/lib/mailer.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export const sendMail = async (to: string, subject: string, html: string) => {
  return transporter.sendMail({
    from: `"Website Contact" <${process.env.NODEMAILER_USER}>`,
    to,
    subject,
    html,
  });
};
