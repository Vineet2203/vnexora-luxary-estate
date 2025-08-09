'use client';

import React, { useState } from "react";
import { BsRobot } from "react-icons/bs"; // chatbot icon
import { Dialog } from "@headlessui/react"; // for modal (optional but cleaner UI)

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatbotClick = () => {
    setIsOpen(true);
    // Or use alert("Coming soon!") if you don’t want a modal
  };

  return (
    <>
      <button
            onClick={handleChatbotClick}
            className="fixed bottom-4 right-20 z-10 backdrop-blur bg-white/10 text-white p-1 rounded-full shadow-lg hover:bg-white/20 transition-all cursor-pointer"
            >
            <BsRobot size={48} className="text-yellow-400" />
            </button>


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">Our chatbot feature is under development!</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;