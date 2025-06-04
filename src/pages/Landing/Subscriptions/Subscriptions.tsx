import React from 'react';

type Subscription = {
  title: string;
  description: string;
  price: string;
  image: string;
};

const subscriptions: Subscription[] = [
  {
    title: '5-a-side Matches',
    description: '⚽ 5-a-side Matches',
    price: '₦3,500.00',
    image: '/src/assets/images/team.webp',
  },
  {
    title: 'Weekend Mini-Tournament',
    description: 'Weekend Mini-Tournament',
    price: '₦5,000.00',
    image: '/src/assets/images/tourney.webp',
  },
  {
    title: 'Open Group Match (7-a-side)',
    description: 'Open Group Match (7-a-side)',
    price: '₦2,500.00',
    image: '/src/assets/images/field.webp',
  },
  {
    title: '2v2 Duels',
    description: '⚽ 2v2 Duels',
    price: '₦2,000.00',
    image: '/src/assets/images/2v2.webp',
  },
];

export default function Subscriptions() {
  return (
    <section className="py-16 px-6 bg-secondary text-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl uppercase font-bold mb-4">SoccerZone Subscriptions</h2>
        <p className="text-lg max-w-2xl text-primary mx-auto">
          SoccerZone offers flexible subscriptions open to both our members and the wider community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {subscriptions.map((sub, index) => (
          <div key={index} className=" rounded-md shadow-2xl overflow-hidden flex flex-col items-center p-2">
            <img src={sub.image} alt={sub.title} className="w-full h-68 object-cover mb-4 rounded-t-md" />
            <h3 className="text-xl font-semibold mb-2">{sub.title}</h3>
            <p className="text-gray-700 mb-4">{sub.description}</p>
            <p className="text-primary font-bold text-lg">{sub.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
