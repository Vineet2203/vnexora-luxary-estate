'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function TermsAndConditions() {
  return (
    <main className={`min-h-screen p-6 md:p-16 bg-[#f7f5f1] text-black ${poppins.className}`}>
      <h1 className="text-3xl font-bold text-[#432c15] mb-6">Terms & Conditions</h1>

      <p className="mb-4">Effective Date: 22/07/2025</p>
      <p className="mb-4">Entity: VNEXORA Luxury Estate Private Limited</p>

      <section className="space-y-4 max-w-4xl">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>By using www.vnexora.com, you accept these terms. If not, please refrain from using our website or services.</p>

        <h2 className="text-xl font-semibold">2. Who We Are</h2>
        <p>VNEXORA is a hospitality consulting firm offering feasibility studies, hotel management, and more.</p>

        <h2 className="text-xl font-semibold">3. Use of Website</h2>
        <p>Only lawful, non-malicious use is permitted. No unauthorized commercial use allowed.</p>

        <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
        <p>All content is owned by VNEXORA or licensed. Do not reproduce or distribute without written permission.</p>

        <h2 className="text-xl font-semibold">5. Service Descriptions</h2>
        <p>Descriptions are indicative and subject to change. Engagements are formal only after written agreements.</p>

        <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
        <p>VNEXORA is not responsible for the content or policies of external sites linked from our site.</p>

        <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
        <p>We are not liable for damages from using or being unable to use our website or relying on its content.</p>

        <h2 className="text-xl font-semibold">8. Indemnification</h2>
        <p>You agree to hold VNEXORA harmless from any legal issues arising from misuse of the website.</p>

        <h2 className="text-xl font-semibold">9. Modifications to Terms</h2>
        <p>We may change these terms at any time. Continued use constitutes acceptance of those changes.</p>

        <h2 className="text-xl font-semibold">10. Governing Law</h2>
        <p>All matters are governed by the laws of India under the jurisdiction of courts in Varanasi, Uttar Pradesh.</p>

        <h2 className="text-xl font-semibold">11. Contact Information</h2>
        <p>Email: <a href="mailto:connect@vnexora.com" className="text-blue-600 underline">connect@vnexora.com</a></p>
        <p>Phone: +91-8318195911</p>
      </section>
    </main>
  );
}