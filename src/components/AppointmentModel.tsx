'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ArrowLeft } from 'lucide-react';


type AppointmentType = 'video' | 'office' | 'site';

interface AppointmentModalProps {
  onClose: () => void;
  type: AppointmentType;
}

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
    aria-label="Go back"
  >
    <ArrowLeft className="w-5 h-5 text-[#705C2E]" />
  </button>
);

const timeSlots = [
  '10:00am - 10:30am', '11:00am - 11:30am', '11:30am - 12:00noon',
  '12:00noon - 12:30pm', '12:30pm - 1:00pm', '2:00pm - 2:30pm',
  '3:00pm - 3:30pm', '4:00 - 4:30pm', '4:30pm - 5:00pm'
];

export default function AppointmentModal({ onClose, type }: AppointmentModalProps) {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Appointment:', { type, date, selectedTime, formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1000] flex items-center justify-center px-4 py-8 overflow-auto">
      <div className="bg-white/50 p-10 rounded-2xl shadow-2xl max-w-2xl w-full space-y-6 relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold">×</button>

        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Schedule a Meeting</h2>
          <p className="text-black text-sm text-center">
            You selected: <strong>{type.toUpperCase()} meeting</strong>
          </p>
        </div>

        {!date && (
          <>
            <h2 className="text-2xl font-semibold text-center">Select a Date</h2>
            <div className="w-full">
              <Calendar onClickDay={(value) => setDate(value)} />
            </div>
          </>
        )}

        {date && !selectedTime && (
          <>
            <h2 className="text-xl text-center">Choose a Time Slot for {date.toDateString()}</h2>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer"
                >
                  {slot}
                </button>
              ))}
            </div>
          </>
        )}

        {selectedTime && (
          <>
            <div className="absolute top-4 left-4 z-10">
              <BackButton onClick={() => { setSelectedTime(''); setDate(null); }} />
            </div>

            <h2 className="text-2xl font-semibold text-center">Enter Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              {type === 'video' && (
  <div>
    <p className="font-medium mb-1">Video Call Platform</p>
    <div className="flex gap-4">
      {['WhatsApp', 'Zoom', 'Google Meet'].map((method) => (
        <label key={method} className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-100">
          <input type="radio" name="meeting" value={method} required />
          <span>{method}</span>
        </label>
      ))}
    </div>
  </div>
)}

{type === 'office' && (
  <div className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
  <p className="text-base text-black font-semibold mb-2">Office Address</p>
  <p>Vnexora Luxury Estate Pvt. Ltd. 5th Floor, CDC Building, AIC, BHU Campus,</p>
  <p>Varanasi - 221005</p>
  <p className="mt-2">📞 +91 7980829403</p>
  <p>📞 +91 8318195911</p>
  <p className="mt-2">Gmail: connect@vnexora.com</p>
</div>

)}

{type === 'site' && (
  <div>
    <textarea
      required
      placeholder=" Enter the full address of the site."
      className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={3}
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
  </div>
)}


              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <textarea
                placeholder="Please share anything that will help prepare for our meeting."
                className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />

              <button
                type="submit"
                className="w-full bg-[#705C2E] text-white py-2 rounded-md hover:bg-[#926d3f] transition cursor-pointer"
              >
                Schedule Event
              </button>

              
            </form>
          </>
        )}
      </div>
    </div>
  );
}
