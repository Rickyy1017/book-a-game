
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import BackToTopButton from '../../components/BackToTopButton';
import { useMatchResults } from '../../context/MatchResultsContext';

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

type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
};

type BlogPost = {
  id: number;
  title: string;
  content: string;
};

type TeamInfo = {
  id: number;
  name: string;
  description: string;
};

type LiveGoal = {
  id: number;
  match: string;
  scorer: string;
  minute: number;
};

type User = {
  id: number;
  username: string;
  role: 'admin' | 'user' | 'guest';
};

const initialStandings: TeamStanding[] = [
  { pos: 1, club: "FC Manchester", p: 38, w: 25, d: 4, l: 2, f: 106, a: 27, gd: 75, pts: 50 },
  { pos: 2, club: "West Ham United", p: 31, w: 23, d: 4, l: 2, f: 106, a: 24, gd: 75, pts: 50 },
  { pos: 3, club: "Blackburn", p: 29, w: 26, d: 4, l: 2, f: 106, a: 25, gd: 74, pts: 50 },
  { pos: 4, club: "Tottenham", p: 28, w: 24, d: 4, l: 2, f: 106, a: 26, gd: 73, pts: 45 },
  { pos: 5, club: "Feyenoord", p: 34, w: 24, d: 4, l: 2, f: 106, a: 30, gd: 72, pts: 45 },
];

export default function Admin() {
  const { user } = useAuth();
  const { addMatch, matchResults, removeMatch } = useMatchResults();

  const [standings, setStandings] = useState<TeamStanding[]>(initialStandings);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const [teams, setTeams] = useState<TeamInfo[]>([]);
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");

  const [liveGoals, setLiveGoals] = useState<LiveGoal[]>([]);
  const [liveGoalMatch, setLiveGoalMatch] = useState("");
  const [liveGoalScorer, setLiveGoalScorer] = useState("");
  const [liveGoalMinute, setLiveGoalMinute] = useState(0);

  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState<"admin" | "user" | "guest">("user");

  if (!user || user.role !== 'admin') {
    return (
      <div className="p-8 text-center text-red-600">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  const updateStandings = (match: Match) => {
    // Update local standings state as before
    setStandings((prevStandings) => {
      const newStandings = prevStandings.map((team) => {
        if (team.club === match.homeTeam) {
          const p = team.p + 1;
          const f = team.f + match.homeScore;
          const a = team.a + match.awayScore;
          const gd = f - a;
          let w = team.w;
          let d = team.d;
          let l = team.l;
          let pts = team.pts;
          if (match.homeScore > match.awayScore) {
            w += 1;
            pts += 3;
          } else if (match.homeScore === match.awayScore) {
            d += 1;
            pts += 1;
          } else {
            l += 1;
          }
          return { ...team, p, w, d, l, f, a, gd, pts };
        } else if (team.club === match.awayTeam) {
          const p = team.p + 1;
          const f = team.f + match.awayScore;
          const a = team.a + match.homeScore;
          const gd = f - a;
          let w = team.w;
          let d = team.d;
          let l = team.l;
          let pts = team.pts;
          if (match.awayScore > match.homeScore) {
            w += 1;
            pts += 3;
          } else if (match.awayScore === match.homeScore) {
            d += 1;
            pts += 1;
          } else {
            l += 1;
          }
          return { ...team, p, w, d, l, f, a, gd, pts };
        }
        return team;
      });

      newStandings.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.f - a.f;
      });

      return newStandings.map((team, index) => ({ ...team, pos: index + 1 }));
    });
  };

  const handleAddMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeTeam || !awayTeam || homeTeam === awayTeam) {
      alert("Please select different teams for home and away.");
      return;
    }
    const newMatch: Match = {
      id: 0, // id will be assigned in context
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
    };
    updateStandings(newMatch);
    addMatch({
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      score: `${homeScore} - ${awayScore}`,
      status: "Full Time",
      homeTeam,
      awayTeam,
      homeTeamImg: `/src/assets/images/${homeTeam.toLowerCase().replace(/ /g, '')}.webp`,
      awayTeamImg: `/src/assets/images/${awayTeam.toLowerCase().replace(/ /g, '')}.webp`,
    });
    setHomeTeam("");
    setAwayTeam("");
    setHomeScore(0);
    setAwayScore(0);
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-button font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add Match Result</h2>
        <form onSubmit={handleAddMatch} className="mb-6 flex flex-col gap-4">
          <select
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Home Team</option>
            {standings.map((team) => (
              <option key={team.club} value={team.club}>
                {team.club}
              </option>
            ))}
          </select>
          <select
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Away Team</option>
            {standings.map((team) => (
              <option key={team.club} value={team.club}>
                {team.club}
              </option>
            ))}
          </select>
          <input
            type="number"
            min={0}
            value={homeScore}
            onChange={(e) => setHomeScore(parseInt(e.target.value) || 0)}
            className="border p-2 rounded"
            placeholder="Home Team Score"
            required
          />
          <input
            type="number"
            min={0}
            value={awayScore}
            onChange={(e) => setAwayScore(parseInt(e.target.value) || 0)}
            className="border p-2 rounded"
            placeholder="Away Team Score"
            required
          />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
            Add Match
          </button>
        </form>
        <div>
          <h3 className="text-xl font-semibold mb-2">Existing Matches</h3>
          <ul>
            {matchResults.map((match) => (
              <li key={match.id} className="mb-2 flex justify-between items-center border p-2 rounded">
                <span>{match.date} - {match.homeTeam} {match.score} {match.awayTeam}</span>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => removeMatch(match.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other sections remain unchanged */}

    </div>
  );
}
