'use client';

import React, { useState } from 'react';
//import { useRouter } from 'next/navigation';

const CareerForm = () => {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    portfolioUrl: '',
    coverLetter: '',
    resumeUrl: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, resumeUrl: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.resumeUrl) {
      alert('Resume is required');
      return;
    }

    const body = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof typeof formData];
      if (value instanceof Blob || typeof value === 'string') {
        body.append(key, value);
      } else if (value !== null && value !== undefined) {
        body.append(key, String(value));
      }
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
          portfolioUrl: '',
          coverLetter: '',
          resumeUrl: null,
        });
      } else {
        alert('Submission failed. Try again.');
      }
    } catch (err) {
      alert('Something went wrong.');
      console.error(err);} 
    finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      className="pt-30 pb-5 px-2 w-full mx-auto shadow-lg space-y-16 relative"
      style={{
      background: 'linear-gradient(100deg, rgba(248, 243, 217, 0.82) 0%,rgba(191, 162, 132, 0.72) 25%, rgba(165, 158, 147, 0.57) 50%, rgba(227, 210, 192, 0.64) 75%, rgba(227, 195, 159, 0.9))',
      opacity: 0.9,
      backgroundBlendMode: 'multiply',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-6 rounded-xl shadow-lg space-y-4"
        style={{
          background: 'rgba(215, 227, 226, 0.3)',
          backdropFilter: 'blur(8px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(120%)',
          boxShadow: '0 8px 32px 0 rgba(49, 55, 142, 0.25)',
          border: '1px solid rgba(184, 197, 197, 0.75)',
        }}
      >
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
        <input name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} placeholder="Portfolio URL (Optional)" className="input" />
        <textarea name="coverLetter" rows={4} value={formData.coverLetter} onChange={handleChange} placeholder="Why do you want to work with us?" className="input" />

        <div>
          <label className="block mb-1 font-medium">Upload Resume <span className="text-red-500">*</span></label>
          <input
        type="file"
        name="resumeUrl"
        accept=".pdf,.jpg,.jpeg,.txt"
        onChange={handleFileChange}
        className="input"
        required
          />
        </div>

        <button type="submit" disabled={submitting} className="w-full bg-[#705C2E] text-white py-3 rounded-lg hover:bg-[#926d3f] transition">
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>

        {success && <p className="text-green-600 text-center mt-4">Application submitted successfully!</p>}
      </form>
    </main>
    
  );
};

export default CareerForm;
