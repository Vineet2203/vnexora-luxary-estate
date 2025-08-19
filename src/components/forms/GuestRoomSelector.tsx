'use client';

import { useState, useEffect } from 'react';

type Room = { adults: number; children: number };

interface GuestRoomSelectorProps {
  onChange?: (summary: string, rooms: Room[]) => void;
}

export default function GuestRoomSelector({ onChange }: GuestRoomSelectorProps) {
  const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0 }]);
  const [open, setOpen] = useState(false);

  // Generate summary like: "6 Adults, 2 Children - 3 Rooms"
  const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
  const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
  const summary = `${totalAdults} Adult${
    totalAdults > 1 ? 's' : ''
  }, ${totalChildren} Child${
    totalChildren !== 1 ? 'ren' : ''
  } - ${rooms.length} Room${rooms.length > 1 ? 's' : ''}`;

  useEffect(() => {
    if (onChange) {
      onChange(summary, rooms);
    }
  }, [summary, rooms, onChange]);

  const updateRoom = (idx: number, key: keyof Room, delta: number) => {
    setRooms((prev) =>
      prev.map((room, i) =>
        i === idx
          ? {
              ...room,
              [key]: Math.max(key === 'adults' ? 1 : 0, room[key] + delta),
            }
          : room
      )
    );
  };

  const addRoom = () =>
    setRooms((prev) => [...prev, { adults: 2, children: 0 }]);
  const removeRoom = (idx: number) =>
    setRooms((prev) =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== idx)
    );

  return (
    <div className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        className="w-full border border-gray-300 rounded text-left py-2 px-3" // Added padding for consistency
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {summary}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border z-50 p-4"
        >
          {rooms.map((room, idx) => (
            <div className="mb-4 last:mb-0" key={idx}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold">Room {idx + 1}</span>
                {rooms.length > 1 && (
                  <button
                    className="text-xs text-red-500"
                    type="button"
                    onClick={() => removeRoom(idx)}
                    aria-label={`Remove Room ${idx + 1}`}
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Adults */}
              <div className="flex items-center mb-2">
                <label className="w-16" htmlFor={`adults-room-${idx}`}>
                  Adult
                </label>
                <button
                  type="button"
                  className="w-7 h-7 border rounded font-bold mr-2 disabled:opacity-50"
                  onClick={() => updateRoom(idx, 'adults', -1)}
                  disabled={rooms[idx].adults <= 1}
                  aria-label="Decrease number of adults"
                >
                  -
                </button>
                <span id={`adults-room-${idx}`}>{rooms[idx].adults}</span>
                <button
                  type="button"
                  className="w-7 h-7 border rounded font-bold ml-2"
                  onClick={() => updateRoom(idx, 'adults', 1)}
                  aria-label="Increase number of adults"
                >
                  +
                </button>
              </div>

              {/* Children */}
              <div className="flex items-center">
                <label className="w-16" htmlFor={`children-room-${idx}`}>
                  Child
                  <span className="ml-1 text-xs text-gray-500">(0-12 yrs)</span>
                </label>
                <button
                  type="button"
                  className="w-7 h-7 border rounded font-bold mr-2 disabled:opacity-50"
                  onClick={() => updateRoom(idx, 'children', -1)}
                  disabled={rooms[idx].children <= 0}
                  aria-label="Decrease number of children"
                >
                  -
                </button>
                <span id={`children-room-${idx}`}>{rooms[idx].children}</span>
                <button
                  type="button"
                  className="w-7 h-7 border rounded font-bold ml-2"
                  onClick={() => updateRoom(idx, 'children', 1)}
                  aria-label="Increase number of children"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addRoom}
            className="text-blue-600 mt-2 text-sm font-medium hover:underline"
            aria-label="Add another room"
          >
            + Add Another Room
          </button>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-[#705C2E] hover:bg-[#5e4f2a] text-white font-semibold py-2 px-5 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}