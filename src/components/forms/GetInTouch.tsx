'use client';

import React, { useState } from 'react';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    interest: '',
    firstName: '',
    lastName: '',
    country: 'India',
    city: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to receive offers before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          interest: '',
          firstName: '',
          lastName: '',
          country: 'India',
          city: '',
          email: '',
          phone: '',
          message: '',
          agree: false,
        });
      } else {
        alert('Submission failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      className="pt-20 pb-5 px-2 w-full mx-auto shadow-lg space-y-12 relative"
      style={{
        background: 'linear-gradient(100deg, rgba(248, 243, 217, 0.82) 0%,rgba(191, 162, 132, 0.72) 25%, rgba(165, 158, 147, 0.57) 50%, rgba(227, 210, 192, 0.64) 75%, rgba(227, 195, 159, 0.9))',
        opacity: 0.9,
        backgroundBlendMode: 'multiply',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-6 rounded-xl shadow-lg space-y-6"
        style={{
          background: 'rgba(215, 227, 226, 0.3)',
          backdropFilter: 'blur(8px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(120%)',
          border: '1px solid rgba(184, 197, 197, 0.75)',
        }}
      >
        <h2 className="text-3xl font-bold text-[#432c15] text-center">How Can We Help You?</h2>

        <input
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
          placeholder="Let us know your area of interest"
          className="input"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="input"
          />
          <input
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="input"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select name="country" value={formData.country} onChange={handleChange} className="input">
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            {/* Add more countries as needed */}
          </select>

          <select name="city" value={formData.city} onChange={handleChange} className="input">
            <option value="">Select City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Dubai">Dubai</option>
            {/* Add more cities as needed */}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="input"
          />
          <input
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input"
          />
        </div>

        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please let us know how we can assist you"
          className="input"
        />

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-sm">
            I agree to receive offers from The First Group and its subsidiaries
          </label>
        </div>

        <p className="text-sm text-gray-800">
          By registering, you agree to receive communications from us regarding our product offerings,
          from which you have the option to unsubscribe. Your information is kept confidential and will
          not be shared with third parties. You can{' '}
          <a href="/privacy-policy" className="text-blue-600 underline">
            view our privacy policy here.
          </a>
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#705C2E] text-white py-3 rounded-lg hover:bg-[#926d3f] transition"
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>

        {success && <p className="text-green-600 text-center mt-4">Your request has been submitted!</p>}
      </form>
    </main>
  );
};

export default GetInTouchForm;
