import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+917980829403"; 
  const message = "Hello, I need some information regarding vnexora!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 z-10 right-4 bg-green-500/80 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={48} className="text-green-200" />
    </a>
  );
};

export default WhatsAppButton;
