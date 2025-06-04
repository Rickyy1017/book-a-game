import React from 'react';

const testimonials = [
  {
    name: 'Chidi O',
    role: 'Coach',
    image: '/src/assets/images/chidi.webp',
    text: 'SoccerZone made it so easy to organize my tournament. Posting and managing the event was smooth. Great platform!',
  },
  {
    name: 'Amina B',
    role: 'Manager',
    image: '/src/assets/images/amina.webp',
    text: 'I registered for a match in minutes. Everything worked perfectly. Just wish there was a mobile app!',
  },
  {
    name: 'Uche M.',
    role: 'Support',
    image: '/src/assets/images/uche.webp',
    text: 'Best tool for managing football events. Easy to use and reliable. Love the event dashboard!',
  },
];

export default function Choose() {
  return (
    <section className="py-16 px-6 my-[2rem] md:my-[6rem] bg-white text-gray-900 max-w-7xl mx-auto">
      <h3 className="text-xl font-bold mb-8 md:text-3xl uppercase text-center">Why They Choose SoccerZone</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, image, text }, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <p className="italic mb-4">"{text}"</p>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
