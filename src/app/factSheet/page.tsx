'use client';

import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const hotels = [
  {
    city: "Bangalore",
    hotels: [
      {
        name: "Hotel Fountain Tree By TGI",
        address: "Sri Krishna Arcade, 9th Cross Road, Sarakki Industrial Layout, 3rd Phase, JP Nagar, Bengaluru, Karnataka - 560078",
        temperature: "Jan - Dec (18°C - 39°C)",
        airportDistance: "42 km from Bangalore Airport",
        reservations: ["+91 80 6188 5555", "1800 258 3100", "+91 90 2522 1663"],
        emails: ["reservations@tgihotels.com", "fountaintree@tgihotels.com"],
        mapLink: "https://maps.google.com/?q=Sri+Krishna+Arcade,+JP+Nagar,+Bangalore",
        pdf: "/pdfs/factsheets/fountaintree.pdf",
      },
      {
        name: "De Venetian by TGI",
        address: "No. 605, AESS Layout, Kundalahalli, Brookefield, Bangalore, Karnataka - 560037",
        temperature: "Jan - Dec (18°C - 39°C)",
        airportDistance: "45.3 km from Bangalore Airport",
        reservations: ["+91 80 6812 3677", "1800 258 3100", "+91 90 2522 1663"],
        emails: ["devenetian@tgihotels.com"],
        mapLink: "https://maps.google.com/?q=De+Venetian+by+TGI,+Brookefield,+Bangalore",
        pdf: "/pdfs/factsheets/devenetian.pdf",
      },
      {
        name: "Hotel Langford Keys By TGI",
        address: "35/2, Langford Cross Road, Shanti Nagar, Bangalore, Karnataka - 560025",
        temperature: "Jan - Dec (18°C - 39°C)",
        airportDistance: "37.4 km from Bangalore Airport",
        reservations: ["+91 80 4142 6795", "1800 258 3100", "+91 90 2522 1663"],
        emails: ["langfordkeys@tgihotels.com"],
        mapLink: "https://maps.google.com/?q=Langford+Keys+by+TGI,+Bangalore",
        pdf: "/pdfs/factsheets/langfordkeys.pdf",
      },
    ],
  },
  {
    city: "Bhopal",
    hotels: [
      {
        name: "TGI Insignia",
        address: "Ganesh Nagar Colony, Hoshangabad Road, Near Aashima Mall, Bawadiakala, Bhopal, Madhya Pradesh - 462011",
        temperature: "Jan - Dec (27°C - 10°C)",
        airportDistance: "21.8 km from Bhopal Airport",
        reservations: ["+91 93 9951 7041"],
        emails: ["reservation.tgiinsignia@gmail.com", "reservations@tgihotels.com", "crs@tgihotels.com"],
        mapLink: "https://maps.google.com/?q=TGI+Insignia,+Bhopal",
        pdf: "/pdfs/factsheets/insignia.pdf",
      },
    ],
  },
];

export default function FactSheetPage() {
  return (
    <main className="w-full bg-[#f7f5f1] font-sans">
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-[#432c15] text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Fact Sheet</h1>
          <p className="mt-4 text-lg">Quick reference guide to our properties</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        {hotels.map((region, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-[#432c15] border-b border-[#ccc] pb-2 mb-6">
              {region.city}
            </h2>
            {region.hotels.map((hotel, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="flex justify-between flex-wrap gap-4 items-center">
                  <h3 className="text-xl font-bold text-[#432c15]">{hotel.name}</h3>
                  <div className="flex gap-2">
                    <a
                      href={hotel.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 text-sm bg-[#432c15] text-white rounded hover:bg-[#5b3a1d]"
                    >
                      <FaMapMarkerAlt /> Map
                    </a>
                    <a
                      href={hotel.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 text-sm bg-[#432c15] text-white rounded hover:bg-[#5b3a1d]"
                    >
                      <FaFilePdf /> Download
                    </a>
                  </div>
                </div>

                <p className="mt-2 text-sm text-gray-700">{hotel.address}</p>

                <div className="mt-4 space-y-1 text-sm">
                  <p><strong>Temperature:</strong> {hotel.temperature}</p>
                  <p><strong>Distance From Airport:</strong> {hotel.airportDistance}</p>
                </div>

                <div className="mt-4">
                  <p className="font-medium text-[#432c15] mb-1">Reservations:</p>
                  <ul className="ml-4 list-disc text-sm">
                    {hotel.reservations.map((r, idx) => (
                      <li key={idx}><FaPhone className="inline mr-1 text-gray-500" /> {r}</li>
                    ))}
                  </ul>
                </div>

                {hotel.emails && (
                  <div className="mt-2">
                    <p className="font-medium text-[#432c15] mb-1">Email:</p>
                    <ul className="ml-4 list-disc text-sm">
                      {hotel.emails.map((e, idx) => (
                        <li key={idx}><FaEnvelope className="inline mr-1 text-gray-500" /> {e}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
