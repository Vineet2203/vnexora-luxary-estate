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
     console.log("✅ Custom submit triggered");
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
         <input className="input"
              name= "India"
              value="India"
            />

         <select
  name="city"
  value={formData.city}
  onChange={handleChange}
  className="input"
>
  <option value="">Select City</option>
  <option value="Agartala">Agartala</option>
  <option value="Agra">Agra</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Aizawl">Aizawl</option>
  <option value="Ajmer">Ajmer</option>
  <option value="Aligarh">Aligarh</option>
  <option value="Allahabad">Allahabad</option>
  <option value="Amritsar">Amritsar</option>
  <option value="Anand">Anand</option>
  <option value="Asansol">Asansol</option>
  <option value="Aurangabad">Aurangabad</option>
  <option value="Bareilly">Bareilly</option>
  <option value="Belgaum">Belgaum</option>
  <option value="Bengaluru">Bengaluru</option>
  <option value="Berhampur">Berhampur</option>
  <option value="Bhatinda">Bhatinda</option>
  <option value="Bhavnagar">Bhavnagar</option>
  <option value="Bhilai">Bhilai</option>
  <option value="Bhilwara">Bhilwara</option>
  <option value="Bhopal">Bhopal</option>
  <option value="Bhubaneswar">Bhubaneswar</option>
  <option value="Bikaner">Bikaner</option>
  <option value="Bilaspur">Bilaspur</option>
  <option value="Bokaro">Bokaro</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Chennai">Chennai</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Cuttack">Cuttack</option>
  <option value="Darbhanga">Darbhanga</option>
  <option value="Dehradun">Dehradun</option>
  <option value="Delhi">Delhi</option>
  <option value="Dhanbad">Dhanbad</option>
  <option value="Dibrugarh">Dibrugarh</option>
  <option value="Durgapur">Durgapur</option>
  <option value="Erode">Erode</option>
  <option value="Faridabad">Faridabad</option>
  <option value="Firozabad">Firozabad</option>
  <option value="Gandhinagar">Gandhinagar</option>
  <option value="Gangtok">Gangtok</option>
  <option value="Ghaziabad">Ghaziabad</option>
  <option value="Goa (Panaji)">Goa (Panaji)</option>
  <option value="Gorakhpur">Gorakhpur</option>
  <option value="Guntur">Guntur</option>
  <option value="Gurugram">Gurugram</option>
  <option value="Guwahati">Guwahati</option>
  <option value="Gwalior">Gwalior</option>
  <option value="Haldwani">Haldwani</option>
  <option value="Hubballi">Hubballi</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Imphal">Imphal</option>
  <option value="Indore">Indore</option>
  <option value="Itanagar">Itanagar</option>
  <option value="Jabalpur">Jabalpur</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Jalandhar">Jalandhar</option>
  <option value="Jammu">Jammu</option>
  <option value="Jamnagar">Jamnagar</option>
  <option value="Jamshedpur">Jamshedpur</option>
  <option value="Jhansi">Jhansi</option>
  <option value="Jodhpur">Jodhpur</option>
  <option value="Junagadh">Junagadh</option>
  <option value="Kakinada">Kakinada</option>
  <option value="Kalaburagi">Kalaburagi</option>
  <option value="Kanpur">Kanpur</option>
  <option value="Karimnagar">Karimnagar</option>
  <option value="Karnal">Karnal</option>
  <option value="Kochi">Kochi</option>
  <option value="Kohima">Kohima</option>
  <option value="Kolhapur">Kolhapur</option>
  <option value="Kolkata">Kolkata</option>
  <option value="Kollam">Kollam</option>
  <option value="Kota">Kota</option>
  <option value="Kozhikode">Kozhikode</option>
  <option value="Kurnool">Kurnool</option>
  <option value="Kurukshetra">Kurukshetra</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Ludhiana">Ludhiana</option>
  <option value="Madurai">Madurai</option>
  <option value="Mangaluru">Mangaluru</option>
  <option value="Mathura">Mathura</option>
  <option value="Meerut">Meerut</option>
  <option value="Moradabad">Moradabad</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Muzaffarpur">Muzaffarpur</option>
  <option value="Mysuru">Mysuru</option>
  <option value="Nagercoil">Nagercoil</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Nanded">Nanded</option>
  <option value="Nashik">Nashik</option>
  <option value="Navi Mumbai">Navi Mumbai</option>
  <option value="Noida">Noida</option>
  <option value="Panipat">Panipat</option>
  <option value="Patiala">Patiala</option>
  <option value="Patna">Patna</option>
  <option value="Pondicherry">Pondicherry</option>
  <option value="Prayagraj">Prayagraj</option>
  <option value="Pune">Pune</option>
  <option value="Raipur">Raipur</option>
  <option value="Rajahmundry">Rajahmundry</option>
  <option value="Rajkot">Rajkot</option>
  <option value="Ranchi">Ranchi</option>
  <option value="Raurkela">Raurkela</option>
  <option value="Rewa">Rewa</option>
  <option value="Rohtak">Rohtak</option>
  <option value="Rourkela">Rourkela</option>
  <option value="Sagar">Sagar</option>
  <option value="Salem">Salem</option>
  <option value="Sambalpur">Sambalpur</option>
  <option value="Satna">Satna</option>
  <option value="Shillong">Shillong</option>
  <option value="Shimla">Shimla</option>
  <option value="Silchar">Silchar</option>
  <option value="Siliguri">Siliguri</option>
  <option value="Solapur">Solapur</option>
  <option value="Srinagar">Srinagar</option>
  <option value="Surat">Surat</option>
  <option value="Thane">Thane</option>
  <option value="Thanjavur">Thanjavur</option>
  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
  <option value="Thrissur">Thrissur</option>
  <option value="Tiruchirappalli">Tiruchirappalli </option>
  <option value="Tirunelveli">Tirunelveli</option>
  <option value="Tirupati">Tirupati</option>
  <option value="Udaipur">Udaipur</option>
  <option value="Ujjain">Ujjain</option>
  <option value="Vadodara">Vadodara</option>
  <option value="Varanasi">Varanasi</option>
  <option value="Vasai-Virar">Vasai-Virar</option>
  <option value="Vijayawada">Vijayawada</option>
  <option value="Visakhapatnam">Visakhapatnam</option>
  <option value="Warangal">Warangal</option>
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
