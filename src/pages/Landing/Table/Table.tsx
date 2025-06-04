import React from "react";

type TeamStanding = {
  pos: number;
  club: string;
  p: number;
  w: number;
  d: number;
  l: number;
  f: number;
  a: number;
  gd: number;
  pts: number;
};

const standings: TeamStanding[] = [
  {
    pos: 1,
    club: "FC Manchester",
    p: 38,
    w: 25,
    d: 4,
    l: 2,
    f: 106,
    a: 27,
    gd: 75,
    pts: 50,
  },
  {
    pos: 1,
    club: "West Ham United",
    p: 31,
    w: 23,
    d: 4,
    l: 2,
    f: 106,
    a: 24,
    gd: 75,
    pts: 50,
  },
  {
    pos: 3,
    club: "Blackburn",
    p: 29,
    w: 26,
    d: 4,
    l: 2,
    f: 106,
    a: 25,
    gd: 74,
    pts: 50,
  },
  {
    pos: 4,
    club: "Tottenham",
    p: 28,
    w: 24,
    d: 4,
    l: 2,
    f: 106,
    a: 26,
    gd: 73,
    pts: 45,
  },
  {
    pos: 5,
    club: "Feyenoord",
    p: 34,
    w: 24,
    d: 4,
    l: 2,
    f: 106,
    a: 30,
    gd: 72,
    pts: 45,
  },
];

export default function Table() {
  return (
    <div className="flex flex-col mt-[5rem] mb-[5rem] items-center ">
      <h2 className="text-md text-primary md:text-5xl font-bold mb-4 text-center">
        Table
      </h2>
      <h2 className="text-xl md:text-5xl font-bold mb-6 text-center">
        Premier League
      </h2>
      <div className="overflow-x-auto w-full md:w-[80%] px-2 md:px-6">
        <table className=" w-full  border-gray-300 text-xs md:text-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-left">Pos</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-left">Club</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">P</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">W</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">D</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">L</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">F</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">A</th>
              <th className="px-1 py-0.5 md:px-6 md:py-4 text-center">GD</th>
              <th className=" px-6 py-4 text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr key={team.pos + team.club} className="hover:bg-gray-100">
                <td className="border-b border-gray-300 px-6 py-4">
                  {team.pos}
                </td>
                <td className="border-b border-gray-300 font-semibold px-2 py-1">
                  <span className="cursor-pointer hover:text-green-600">
                    {team.club}
                  </span>
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.p}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.w}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.d}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.l}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.f}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.a}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.gd}
                </td>
                <td className="border-b border-gray-300 px-2 py-1 text-center">
                  {team.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
