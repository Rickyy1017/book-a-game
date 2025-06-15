import React from "react";
import { useMatchResults } from "../../../context/MatchResultsContext";

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
    <div className="p-6 shadow-md bg-white  text-gray-900 w-full max-w-2xl m-auto flex items-center justify-between space-x-6 h-46">
      <div className="flex flex-col items-center">
        <img src={homeTeamImg} alt={homeTeam} className="h-22 object-contain" />
        <span  className="text-sm font-bold mt-1">{homeTeam}</span>
      </div>
      <div className="flex flex-col items-center justify-center text-center px-2">
        <p className=" text-sm md:text-l font-semibold md:font-bold">{date}</p>
        <p className=" md:text-2xl text-xl mt-4 mb-4 font-bold">{score}</p>
        <p className=" md:text-xl text-sm text-primary font-semibold">{status}</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={awayTeamImg} alt={awayTeam} className="h-22 object-contain" />
        <span className="text-sm font-bold mt-1">{awayTeam}</span>
      </div>
    </div>
  );
};

export default function Results() {
  const { matchResults } = useMatchResults();

  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 p-8 bg-secondary gap-6">
      {matchResults.map((match, index) => (
        <MatchResultCard key={index} {...match} />
      ))}
      <div className=" order-[-1] md:order-1 ">
        <h1 className=" font-semibold text-2xl text-button ">RESULTS</h1>
        <p className=" text-primary uppercase font-bold text-4xl ">  The Last Match</p>
      
      </div>
    </div>
  );
}
