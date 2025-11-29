import Match from "./Match";
import { useState } from "react";
import type { teamProps } from "./Team";

type BracketProps = {
  name: string;
  match1: { team1: teamProps; team2: teamProps };
  match2: { team1: teamProps; team2: teamProps };
  finalWinner: teamProps | null;         
  onFinalWinner: (team: teamProps | null) => void; 
};

export default function Bracket({ name, match1, match2, finalWinner, onFinalWinner }: BracketProps) {
  const [winner1, setWinner1] = useState<teamProps | null>(null);
  const [winner2, setWinner2] = useState<teamProps | null>(null);

  function handleFinalPick(team: teamProps) {
    if (!winner1 || !winner2) return;
    onFinalWinner(team);
  }

  return (
    <div className="flex flex-col rounded-lg p-6 bg-[#fbf6ef] items-center my-10">
      <h2 className="font-bold text-lg mb-4">Path {name}</h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 w-full max-w-5xl">

        <div className="flex flex-col items-end">
          <Match
            team1={match1.team1}
            team2={match1.team2}
            onPickTeam1={() => setWinner1(match1.team1)}
            onPickTeam2={() => setWinner1(match1.team2)}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center font-bold text-lg mb-2">FINAL</div>

          <Match
            team1={winner1 ?? { name: "TBD", flag: "" }}
            team2={winner2 ?? { name: "TBD", flag: "" }}
            onPickTeam1={() => winner1 && handleFinalPick(winner1)}
            onPickTeam2={() => winner2 && handleFinalPick(winner2)}
          />
        </div>

        <div className="flex flex-col items-start">
          <Match
            team1={match2.team1}
            team2={match2.team2}
            onPickTeam1={() => setWinner2(match2.team1)}
            onPickTeam2={() => setWinner2(match2.team2)}
          />
        </div>
      </div>

      {finalWinner && (
        <div className="mt-2 p-2 bg-transparent rounded-lg text-center font-bold text-sm">
          <p>Winner of Path {name}</p>
          <img src={finalWinner.flag} className="w-20 mx-auto pt-3" />
          <p className="text-center p-4">{finalWinner.name}</p>
        </div>
      )}
    </div>
  );
}
