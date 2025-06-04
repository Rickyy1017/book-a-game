import React from 'react';
import bgDark from '/src/assets/images/bg-dark.jpeg';

export default function AboutUs() {
  return (
    <section
      className="  text-white bg-cover  bg-center items-center bg-no-repeat md:min-h-screen flex  "
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      <div className="max-w-4xl mx-auto h-fit mr-[2px]  bg-transparent  bg-opacity-60 p-8 rounded">
        <h3 className="text-xl uppercase text-button md:text-[30px] font-bold mb-2">About</h3>
        <h2 className="text-3xl uppercase md:text-8xl font-bold mb-6">About SoccerZone</h2>
        <p className="text-sm md:text-2xl mb-8">
          At SoccerZone, we’re more than just a platform—we’re the home of football action. With our privately-owned, premium football field, players, teams, and organizers can book matches with ease, create competitive events, and even generate match tickets for their fans and followers.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition">
          Read More
        </button>
      </div>
    </section>
  );
}
