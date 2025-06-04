import React, { useRef, useState, useEffect } from "react";

type Player = {
  name: string;
  position: string;
  image: string;
  number: string;
};

const players: Player[] = [
  {
    name: "Chance Lynch",
    position: "Winger",
    image: "/src/assets/images/chelseaGuy.webp",
    number: "11",
  },
  {
    name: "Cristiano Ronaldo",
    position: "Forward",
    image: "/src/assets/images/cristiano.webp",
    number: "7",
  },
  {
    name: "Feyenoord Star",
    position: "Midfielder",
    image: "/src/assets/images/feyenord.webp",
    number: "8",
  },
  {
    name: "France Player",
    position: "Defender",
    image: "/src/assets/images/france.webp",
    number: "4",
  },
  {
    name: "Olivier Giroud",
    position: "Forward",
    image: "/src/assets/images/giroud.webp",
    number: "9",
  },
  {
    name: "Man City Player",
    position: "Midfielder",
    image: "/src/assets/images/mancity.webp",
    number: "21",
  },
  {
    name: "Man U Player",
    position: "Defender",
    image: "/src/assets/images/manU.webp",
    number: "5",
  },
  {
    name: "Lionel Messi",
    position: "Forward",
    image: "/src/assets/images/messi.webp",
    number: "10",
  },
  {
    name: "Jadon Sancho",
    position: "Winger",
    image: "/src/assets/images/sancho.webp",
    number: "25",
  },
  {
    name: "Tottenham Player",
    position: "Midfielder",
    image: "/src/assets/images/tottenham.webp",
    number: "23",
  },
];

export default function Squad() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const totalScrollWidth = scrollWidth / 2; // since we duplicate players
    if (scrollLeft >= totalScrollWidth) {
      scrollRef.current.scrollLeft = scrollLeft - totalScrollWidth;
    }
    const progress = ((scrollLeft % totalScrollWidth) / totalScrollWidth) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", handleScroll);
      return () => current.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    handleScroll();
  };

  return (
    <div className=" bg-primary">
      <div className="w-[80%] md:w-[65%] items mx-auto py-[5rem] ">
        <h2 className="text-l uppercase md:text-3xl text-button font-bold mb-2 md:mb-6 text-center">
          Squad
        </h2>
        <h2 className="text-3xl md:text-5xl text-white uppercase font-bold mb-6 md:mb-19 text-center">
          The First Team
        </h2>
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex overflow-x-auto space-x-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {[...players, ...players].map((player, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/1 md:w-1/5 snap-center rounded flex flex-col items-start"
            >
              <div className="relative w-full overflow-hidden rounded-md">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-[100%] h-82 object-cover object-top transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="absolute top-2 left-2 text-white text-5xl font-bold px-2 py-1 rounded-sm">
                  {player.number}
                </div>
              </div>
              <h3 className="text-xl text-white font-semibold mt-4">
                {player.name}
              </h3>
              <p className="text-button">{player.position}</p>
            </div>
          ))}
        </div>
        <div className="h-2  bg-gray-800 rounded mt-4">
          <div
            className="h-2 rounded"
            style={{
              width: `${scrollProgress}%`,
              backgroundColor: "#00a650",
              minWidth: "4px",
              boxShadow: "0 0 5px #2563eb",
              transition: "width 0.2s ease",
            }}
          />
        </div>
        <button className="items-center bg-button px-6 py-2 rounded-[20px] text-white mt-6 ">
          View All Players
        </button>
      </div>
    </div>
  );
}
