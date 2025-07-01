// components/AppointmentModal.tsx
'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

export default function AppointmentModal({ onClose }: { onClose: () => void }) {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Appointment:', { date, selectedTime, formData });
    onClose(); // Close after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-white p-8 rounded-lg max-w-xl w-full space-y-6 relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold">×</button>

        {!date && (
          <>
            <h2 className="text-2xl font-semibold text-center">Select a Date</h2>
            <Calendar onClickDay={(value) => setDate(value)} />
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
                  className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
                >
                  {slot}
                </button>
              ))}
            </div>
          </>
        )}

        {selectedTime && (
          <>
            <h2 className="text-xl text-center">Enter Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Confirm Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
