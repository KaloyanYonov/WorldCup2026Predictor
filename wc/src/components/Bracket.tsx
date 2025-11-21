import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type BracketProps = {
  semifinal1: {
    team1: teamProps;
    team2: teamProps;
  };
  semifinal2: {
    team1: teamProps;
    team2: teamProps;
  };
};

export default function Bracket({ semifinal1, semifinal2 }: BracketProps) {

  const [winner1, setWinner1] = useState<teamProps | null>(null);
  const [winner2, setWinner2] = useState<teamProps | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold text-xl mb-2">Semifinal 1</h2>

        <button onClick={() => setWinner1(semifinal1.team1)}>
          <Match team1={semifinal1.team1} team2={semifinal1.team2} />
        </button>

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setWinner1(semifinal1.team1)}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            Pick {semifinal1.team1.name}
          </button>

          <button
            onClick={() => setWinner1(semifinal1.team2)}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            Pick {semifinal1.team2.name}
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mb-2">Semifinal 2</h2>

        <div>
          <button onClick={() => setWinner2(semifinal2.team1)}>
            <Match team1={semifinal2.team1} team2={semifinal2.team2} />
          </button>
        </div>

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setWinner2(semifinal2.team1)}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            Pick {semifinal2.team1.name}
          </button>

          <button
            onClick={() => setWinner2(semifinal2.team2)}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            Pick {semifinal2.team2.name}
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mt-6">Final</h2>

        {winner1 && winner2 ? (
          <Match team1={winner1} team2={winner2} />
        ) : (
          <p className="text-gray-500">Select winners to generate the final.</p>
        )}
      </div>
    </div>
  );
}
