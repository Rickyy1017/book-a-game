import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type MatchResult = {
  id: number;
  date: string;
  score: string;
  status: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamImg: string;
  awayTeamImg: string;
};

type MatchResultsContextType = {
  matchResults: MatchResult[];
  addMatch: (match: Omit<MatchResult, 'id'>) => void;
  removeMatch: (id: number) => void;
};

const MatchResultsContext = createContext<MatchResultsContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'matchResults';

const initialMatchResults: MatchResult[] = [
  {
    id: 1,
    date: "April 17, 2025",
    score: "5 - 4",
    status: "Full Time",
    homeTeam: "Manchester City",
    awayTeam: "Tottenham",
    homeTeamImg: "/src/assets/images/mancity.webp",
    awayTeamImg: "/src/assets/images/tottenham.webp",
  },
  {
    id: 2,
    date: "October 18, 2019",
    score: "4 - 2",
    status: "Full Time",
    homeTeam: "FC Manchester",
    awayTeam: "Tottenham",
    homeTeamImg: "/src/assets/images/manU.webp",
    awayTeamImg: "/src/assets/images/tottenham.webp",
  },
  {
    id: 3,
    date: "June 12, 2023",
    score: "4 - 1",
    status: "Full Time",
    homeTeam: "Westham United",
    awayTeam: "Feyenord",
    homeTeamImg: "/src/assets/images/westham.webp",
    awayTeamImg: "/src/assets/images/feyenord.webp",
  },
];

export const MatchResultsProvider = ({ children }: { children: ReactNode }) => {
  const [matchResults, setMatchResults] = useState<MatchResult[]>(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialMatchResults;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(matchResults));
  }, [matchResults]);

  const addMatch = (match: Omit<MatchResult, 'id'>) => {
    setMatchResults((prev) => [
      ...prev,
      { ...match, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
  };

  const removeMatch = (id: number) => {
    setMatchResults((prev) => prev.filter((match) => match.id !== id));
  };

  return (
    <MatchResultsContext.Provider value={{ matchResults, addMatch, removeMatch }}>
      {children}
    </MatchResultsContext.Provider>
  );
};

export const useMatchResults = () => {
  const context = useContext(MatchResultsContext);
  if (!context) {
    throw new Error('useMatchResults must be used within a MatchResultsProvider');
  }
  return context;
};
