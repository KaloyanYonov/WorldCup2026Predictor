import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type BracketProps = {
  match1: {
    team1: teamProps;
    team2: teamProps;
  };
  match2: {
    team1: teamProps;
    team2: teamProps;
  };
};

export default function Bracket({ match1, match2 }: BracketProps) {
  const [winner1, setWinner1] = useState<teamProps | null>(null);
  const [winner2, setWinner2] = useState<teamProps | null>(null);

  return (
    <div className="flex flex-col gap-8">

      <div>
        <h2 className="font-bold text-xl mb-2">Match 1</h2>

        <Match team1={match1.team1} team2={match1.team2} />

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setWinner1(match1.team1)}
            className="px-3 py-1 bg-gray-400 rounded"
          >
            Pick {match1.team1.name}
          </button>

          <button
            onClick={() => setWinner1(match1.team2)}
            className="px-3 py-1 bg-gray-400 rounded"
          >
            Pick {match1.team2.name}
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mb-2">Match 2</h2>

        <Match team1={match2.team1} team2={match2.team2} />

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setWinner2(match2.team1)}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            Pick {match2.team1.name}
          </button>

          <button
            onClick={() => setWinner2(match2.team2)}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            Pick {match2.team2.name}
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mt-6">Final</h2>

        {winner1 && winner2 ? (
          <Match team1={winner1} team2={winner2} />
        ) : (
          <p className="text-gray-500">Select winners from both matches to generate the final.</p>
        )}
      </div>
    </div>
  );
}
