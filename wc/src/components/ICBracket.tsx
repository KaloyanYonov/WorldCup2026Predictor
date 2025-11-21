import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type IntercontinentalBracketProps = {
  playInMatch: {
    team1: teamProps;
    team2: teamProps;
  };
  seededTeam: teamProps; // this is for Congo and Iraq
};

export default function IntercontinentalBracket({ playInMatch, seededTeam }: IntercontinentalBracketProps) {
  const [winner, setWinner] = useState<teamProps | null>(null);

  return (
    <div className="flex flex-col gap-6">

      <div>
        <h2 className="font-bold text-xl mb-2">Play-in Match</h2>

        <Match team1={playInMatch.team1} team2={playInMatch.team2} />

        <div className="flex gap-4 mt-2">
          <button 
            onClick={() => setWinner(playInMatch.team1)} 
            className="px-3 py-1 bg-gray-400 rounded">
            Pick {playInMatch.team1.name}
          </button>

          <button 
            onClick={() => setWinner(playInMatch.team2)} 
            className="px-3 py-1 bg-gray-400 rounded">
            Pick {playInMatch.team2.name}
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mt-4">Final Round</h2>

        {winner ? (
          <Match team1={winner} team2={seededTeam} />
        ) : (
          <p className="text-gray-500">Pick a winner from the play-in match.</p>
        )}
      </div>

    </div>
  );
}
