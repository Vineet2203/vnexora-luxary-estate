// /src/app/wedding/page.tsx 

'use client';

import { useState } from "react";
import Image from "next/image";
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

// // GuestRoomSelector component included inline for full completeness,
// // --> message by Akshat
// // if worked then needed to be imported from a separate file like `GuestRoomSelector.tsx` in `src/components/forms/GuestRoomSelector.tsx`  
// type Room = { adults: number; children: number };

// function GuestRoomSelector({
//   onChange,
// }: {
//   onChange?: (summary: string, rooms: Room[]) => void;
// }) {
//   const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0 }]);
//   const [open, setOpen] = useState(false);

//   // Generate summary like: "6 Adults, 2 Children - 3 Rooms"
//   const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
//   const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
//   const summary = `${totalAdults} Adult${totalAdults > 1 ? "s" : ""}, ${totalChildren} Child${totalChildren !== 1 ? "ren" : ""} - ${rooms.length} Room${rooms.length > 1 ? "s" : ""}`;

//   if (onChange) onChange(summary, rooms);

//   const updateRoom = (idx: number, key: keyof Room, delta: number) => {
//     setRooms((prev) =>
//       prev.map((room, i) =>
//         i === idx
//           ? {
//               ...room,
//               [key]: Math.max(key === "adults" ? 1 : 0, room[key] + delta),
//             }
//           : room
//       )
//     );
//   };

//   const addRoom = () => setRooms((prev) => [...prev, { adults: 2, children: 0 }]);
//   const removeRoom = (idx: number) =>
//     setRooms((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== idx)));

//   return (
//     <div className="relative w-full">
//       {/* Trigger */}
//       <button
//         type="button"
//         className="w-full   border border-gray-300 rounded text-left"
//         onClick={() => setOpen((o) => !o)}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//       >
//         {summary}
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div
//           role="listbox"
//           className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border z-60 p-4"
//         >
//           {rooms.map((room, idx) => (
//             <div className="mb-4 last:mb-0" key={idx}>
//               <div className="flex justify-between items-center mb-1">
//                 <span className="font-semibold">Room {idx + 1}</span>
//                 {rooms.length > 1 && (
//                   <button
//                     className="text-xs text-red-500"
//                     type="button"
//                     onClick={() => removeRoom(idx)}
//                     aria-label={`Remove Room ${idx + 1}`}
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>

//               {/* Adults */}
//               <div className="flex items-center mb-2">
//                 <label className="w-16" htmlFor={`adults-room-${idx}`}>
//                   Adult
//                 </label>
//                 <button
//                   type="button"
//                   className="w-7 h-7 border rounded font-bold mr-2 disabled:opacity-50"
//                   onClick={() => updateRoom(idx, "adults", -1)}
//                   disabled={rooms[idx].adults <= 1}
//                   aria-label="Decrease number of adults"
//                 >
//                   -
//                 </button>
//                 <span id={`adults-room-${idx}`}>{rooms[idx].adults}</span>
//                 <button
//                   type="button"
//                   className="w-7 h-7 border rounded font-bold ml-2"
//                   onClick={() => updateRoom(idx, "adults", 1)}
//                   aria-label="Increase number of adults"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Children */}
//               <div className="flex items-center">
//                 <label className="w-16" htmlFor={`children-room-${idx}`}>
//                   Child
//                   <span className="ml-1 text-xs text-gray-500">(0-12 yrs)</span>
//                 </label>
//                 <button
//                   type="button"
//                   className="w-7 h-7 border rounded font-bold mr-2 disabled:opacity-50"
//                   onClick={() => updateRoom(idx, "children", -1)}
//                   disabled={rooms[idx].children <= 0}
//                   aria-label="Decrease number of children"
//                 >
//                   -
//                 </button>
//                 <span id={`children-room-${idx}`}>{rooms[idx].children}</span>
//                 <button
//                   type="button"
//                   className="w-7 h-7 border rounded font-bold ml-2"
//                   onClick={() => updateRoom(idx, "children", 1)}
//                   aria-label="Increase number of children"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={addRoom}
//             className="text-blue-600 mt-2 text-sm font-medium hover:underline"
//             aria-label="Add another room"
//           >
//             + Add Another Room
//           </button>

//           <div className="flex justify-end mt-4">
//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               className="bg-gold-600 hover:bg-gold-700 text-white font-semibold py-2 px-5 rounded"
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default function HotelsPage() {
  const [city, setCity] = useState("");
  const [hotel, setHotel] = useState("");
  const [dates, setDates] = useState({ from: "", to: "" });

  // Cities and Hotels (adjust these as needed)
  const cities = ["Varanasi"];
  const hotels = [
    "Vnexora Prince Diamond, Varanasi",
  ];

  return (
    <main className={`w-full mx-auto space-y-16 px-0 relative bg-[#f7f5f1] wedding-page ${poppins.className}`}>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center pb-32">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Videos/hotels.mp4"
          autoPlay
          loop 
          muted
          playsInline
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-10 z-10"/> */}
        
        {/* Main Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-[#f5e8d7] z-20 pointer-events-none">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${playfair.className}`}>Our Hotels</h1>
        </div>
        {/* Floating Booking Bar Overlay */}
        <div className="absolute left-1/2 bottom-0 z-50 transform -translate-x-1/2 w-full">
          <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-lg flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-between py-6 px-6 md:px-10">
            {/* City Dropdown */}
            <div className="flex-1 w-full px-2">
              <label htmlFor="city" className="block text-xs font-semibold text-gray-700 mb-1">
                City
              </label>
              <select
                id="city"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            {/* Hotel Dropdown */}
            <div className="flex-1 w-full px-2">
              <label htmlFor="hotel" className="block text-xs font-semibold text-gray-700 mb-1">
                Hotel
              </label>
              <select
                id="hotel"
                className="w-full py-2 px-3 border border-gray-300 rounded"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
              >
                <option value="">Select Hotel</option>
                {hotels.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Pickers */}
            <div className="flex-1 w-full flex gap-2 px-2">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fromDate" className="block text-xs font-semibold text-gray-700 mb-1">
                  From
                </label>
                <input
                  type="date"
                  id="fromDate"
                  className="py-2 px-3 border border-gray-300 rounded"
                  value={dates.from}
                  onChange={(e) => setDates((d) => ({ ...d, from: e.target.value }))}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="toDate" className="block text-xs font-semibold text-gray-700 mb-1">
                  To
                </label>
                <input
                  type="date"
                  id="toDate"
                  className="py-2 px-3 border border-gray-300 rounded"
                  value={dates.to}
                  onChange={(e) => setDates((d) => ({ ...d, to: e.target.value }))}
                />
              </div>
            </div>

            {/* Guest/Room Selector
            <div className="flex-1 w-full px-2" style={{ position: "relative", zIndex: 60 }}>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Guests</label>
              <GuestRoomSelector onChange={(summary) => setGuestSummary(summary)} />
            </div> */}

           {/* Book Now Button */}
                <div className="flex-shrink-0 mt-3 md:mt-0 px-2 w-full md:w-auto">
                <a
                    href="https://cd5czc-3000.csb.app/"
                    target="_blank"  // 🔹 remove this if you want it in same tab
                    rel="noopener noreferrer"
                    className="bg-[#123456] hover:bg-[#ff3020] transition-colors text-white font-semibold py-3 px-8 rounded-lg shadow-lg w-full text-center block"
                >
                Book Now
                </a>
                </div>
                </div>
          </div>
        </section>
      </main>
  );
}