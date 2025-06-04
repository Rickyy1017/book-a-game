import bgImage from "../../../assets/images/bg.jpeg";
import "./Banner.css";

const rightColumnItems = [
  {
    title: "Football World Cup Finals",
    date: "Monday, September 10, 2018",
  },
  {
    title: "The Team that You Support!",
    date: "Friday, September 14, 2018",
  },
  {
    title: "Why Soccer is the Best Sport",
    date: "Saturday, September 22, 2018",
  },
];

export default function Banner() {
  return (
    <div
      className="relative  bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     
      <div className="absolute inset-0 bg-blue-900 opacity-15 pointer-events-none"></div>

      <div className=" h-[100vh] pt-[20rem] text-secondary  ">
        <div className="  flex justify-between ">
          <div>{/* <h1>nodpowenvioewn</h1> */}</div>
          {/* {rightColumnItems.map((item, index) => (
            <section key={index} className="mb-8 flex flex-col ">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400">{item.date}</p>
            </section>
          ))} */}
        </div>

        <div id="welcome" className="relative flex  w-full justify-between px-10 text-white">
          {/* Left column: Welcome section */}
          <div className=" flex ">
            <div id="soccer" className="flex flex-col  justify-center     font-semibold">
              <p className="text-green-500 text-xl uppercase mb-2">
                Welcome to SoccerZone
              </p>
              <h1
                id="feel"
                className="text-[5rem] uppercase font-bold leading-tight"
              >
                Book your game.
                
                Fill the field.
              </h1>
              <p id="soccer-p" className="mt-4  text-[18px] text-gray-300">
                Whether you want to gather your friends for a weekend game or
                host a high-energy, crowd-filled tournament, SoccerZone is your
                go-to destination for planning, booking, and ticketing—all in
                one place.
              </p>
              <button id="player" className="mt-6 bg-button hover:text-[#00a650] text-[20px] hover:bg-white cursor-pointer px-10 py-3 rounded-full font-semibold w-fit ">
                Check Out Our Players
              </button>
            </div>
          </div>
          <div id="match" className=" w-full">
            <h1 id="next-match" className="border-l-6 text-primary bg-secondary font-semibold text-2xl mt-[22rem] text-right p-6  ">
              Next Match
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
