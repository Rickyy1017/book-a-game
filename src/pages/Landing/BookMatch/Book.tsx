import { div } from 'framer-motion/client';
import React from 'react';

export default function Book() {
  return (
   <div className=' bg-secondary py-4 md:py-[7rem]'>
     <div className="flex flex-col   w-full md:w-[80%] m-auto md:flex-row md:flex justify-center items-start gap-10 mt-10 px-2 md:px-6">
      {/* Book an appointment */}
      <div className="w-full md:flex-1 p-1 md:p-6 rounded  flex flex-col">
        <h2 className="text-2xl text-black uppercase  lg:text-4xl border-b pb-6 font-bold mb-4">Book an appointment</h2>
        <p className="text-gray-700 text-xs md:text-sm lg:text-lg">
          Booking an appointment helps us manage the field efficiently and ensures you get a smooth, stress-free experience. It guarantees your preferred time slot, helps us prepare the field and any extras you may need, and allows us to offer the best service to you and your team. Secure your spot in advance and let us handle the rest!
        </p>
      </div>

      {/* Book a match */}
      <div className="w-full md:flex-1  p-1 md:p-6 rounded  flex flex-col">
        <h2 className="text-2xl text-black uppercase  lg:text-4xl border-b pb-6 font-bold mb-4">Book a match</h2>
        <p className="text-gray-700 mb-6 text-xs md:text-sm lg:text-lg">
          Planning a game, tournament, or special gathering? Book an event to reserve our premium field or space for your occasion. This helps us prepare the venue to suit your needs and ensures availability, so your event runs smoothly without last-minute hassles. Lock in your date and let us provide the perfect setting for your activity!
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded cursor-pointer hover:border hover:bg-[#f4f4f4] hover:text-green-600 transition-colors w-max">
          Check Out Available Matches
        </button>
      </div>
    </div>
   </div>
  );
}
