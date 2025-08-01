'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function PrivacyPolicy() {
  return (
    <main className={`min-h-screen p-6 md:p-16 bg-[#f7f5f1] text-black ${poppins.className}`}>
      <h1 className="text-3xl font-bold text-[#432c15] mb-6">Privacy Policy</h1>

      <p className="mb-4">Effective Date: 22/07/2025</p>
      <p className="mb-4">Entity: VNEXORA Luxury Estate Private Limited</p>

      <section className="space-y-4 max-w-4xl">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>VNEXORA values your privacy. This Privacy Policy outlines how we collect, use, protect, and share information when you visit our website, connect with us, or use our services...</p>

        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li><strong>Personal Information:</strong> name, phone, email, etc.</li>
          <li><strong>Technical Data:</strong> IP, device info, browser type.</li>
          <li><strong>Business Information:</strong> project details shared voluntarily.</li>
        </ul>

        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
        <p>Your data helps us respond to inquiries, improve our services, send updates, and create proposals...</p>

        <h2 className="text-xl font-semibold">4. Cookies & Tracking Tools</h2>
        <p>We use cookies to track user behavior. You can disable them, but some features might not work properly.</p>

        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <p>We use industry-standard practices, but no online system is 100% secure.</p>

        <h2 className="text-xl font-semibold">6. Third-Party Sharing</h2>
        <p>We share data with service providers and legal bodies only when necessary and with consent.</p>

        <h2 className="text-xl font-semibold">7. Your Rights & Choices</h2>
        <ul className="list-disc list-inside">
          <li>Access or delete your data</li>
          <li>Correct inaccuracies</li>
          <li>Opt out of marketing emails</li>
        </ul>

        <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
        <p>We don’t knowingly collect information from individuals under 18.</p>

        <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
        <p>We may update this document as needed. The effective date will reflect the latest version.</p>

        <h2 className="text-xl font-semibold">10. Contact Us</h2>
        <p>Email: <a href="mailto:connect@vnexora.com" className="text-blue-600 underline">connect@vnexora.com</a></p>
        <p>Phone: +91-8318195911</p>
      </section>
    </main>
  );
}