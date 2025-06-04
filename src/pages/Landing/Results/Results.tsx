import React from "react";
import mancity from "../../../assets/images/mancity.webp";
import tottenham from "../../../assets/images/tottenham.webp";
import manU from "../../../assets/images/manU.webp";
import west from "../../../assets/images/westham.webp";
import feyenord from "../../../assets/images/feyenord.webp";

import "./Result.css"

type MatchResultCardProps = {
  date: string;
  score: string;
  status: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamImg: string;
  awayTeamImg: string;
};

const MatchResultCard: React.FC<MatchResultCardProps> = ({
  date,
  score,
  status,
  homeTeam,
  awayTeam,
  homeTeamImg,
  awayTeamImg,
}) => {
  return (
    <div className="p-6 shadow-md bg-white text-gray-900 w-full max-w-xl m-auto flex items-center justify-between space-x-6 h-46">
      <div id="home" className="flex flex-col items-center">
        <img src={homeTeamImg} alt={homeTeam} className="h-22 object-contain" />
        <span className="text-sm font-bold mt-1">{homeTeam}</span>
      </div>
      <div className="flex flex-col items-center justify-center text-center px-2">
        <p id="date" className="text-l font-bold">{date}</p>
        <p id="score" className="text-4xl mt-4 mb-4 font-bold">{score}</p>
        <p className="text-m font-semibold">{status}</p>
      </div>
      <div id="home" className="flex flex-col items-center">
        <img src={awayTeamImg} alt={awayTeam} className="h-22 object-contain" />
        <span className="text-sm font-bold mt-1">{awayTeam}</span>
      </div>
    </div>
  );
};

const matchResults = [
  {
    date: "April 17, 2025",
    score: "5 - 4",
    status: "Full Time",
    homeTeam: "Manchester City",
    awayTeam: "Tottenham",
    homeTeamImg: mancity,
    awayTeamImg: tottenham,
  },
  {
    date: "October 18, 2019",
    score: "4 - 2",
    status: "Full Time",
    homeTeam: "FC Manchester",
    awayTeam: "Tottenham",
    homeTeamImg: manU,
    awayTeamImg: tottenham,
  },
  {
    date: "June 12, 2023",
    score: "4 - 1",
    status: "Full Time",
    homeTeam: "Westham United",
    awayTeam: "Feyenord",
    homeTeamImg: west,
    awayTeamImg: feyenord,
  },
];

export default function Results() {
  return (
    <div id="grid" className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4 p-8 bg-secondary gap-6">
      {matchResults.map((match, index) => (
        <MatchResultCard key={index} {...match} />
      ))}
      <div className="results">
        <h1 className=" font-semibold text-2xl text-button ">RESULTS</h1>
        <p className=" text-primary uppercase font-bold text-4xl ">  The Last Match</p>
      
      </div>
    </div>
  );
}
