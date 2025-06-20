'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CareerForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.resume) {
      alert('Resume is required');
      return;
    }

    const body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key as keyof typeof formData] as any);
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/career', {
        method: 'POST',
        body,
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          whatsapp: '',
          portfolio: '',
          coverLetter: '',
          resume: null,
        });
      } else {
        alert('Submission failed. Try again.');
      }
    } catch (err) {
      alert('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="career">
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-3xl font-bold text-[#432c15] text-center">Join Our Team</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input" />
        <input name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
        <input name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" />
      </div>
      <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp (Optional)" className="input" />
      <input name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Portfolio URL (Optional)" className="input" />
      <textarea name="coverLetter" rows={4} value={formData.coverLetter} onChange={handleChange} placeholder="Why do you want to work with us?" className="input" />

      <div>
        <label className="block mb-1 font-medium">Upload Resume <span className="text-red-500">*</span></label>
        <input type="file" accept=".pdf,.jpg,.jpeg,.txt" onChange={handleFileChange} className="input" required />
      </div>

      <button type="submit" disabled={submitting} className="w-full bg-[#705C2E] text-white py-3 rounded-lg hover:bg-[#926d3f] transition">
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>

      {success && <p className="text-green-600 text-center mt-4">Application submitted successfully!</p>}
    </form>
    </section>
  );
};

export default CareerForm;
