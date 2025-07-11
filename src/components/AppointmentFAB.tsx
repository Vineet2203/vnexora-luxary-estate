'use client';

import { useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import AppointmentModal from './AppointmentModel';

const AppointmentFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-black flex items-center gap-2 px-4 py-4 rounded-full shadow-lg hover:bg-white-800 transition group"
      >
        <FaVideo className="text-xl" />
        <span className="hidden group-hover:inline text-sm font-medium">Schedule Video Call</span>
      </button>

      {isOpen && <AppointmentModal onClose={() => setIsOpen(false)} type="video" />}
    </>
  );
};

export default AppointmentFAB;
