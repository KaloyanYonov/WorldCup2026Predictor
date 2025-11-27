import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type IntercontinentalBracketProps = {
  playInMatch: {
    team1: teamProps;
    team2: teamProps;
  };
  seededTeam: teamProps; // for DR Congo and Iraq
};

export default function IntercontinentalBracket({
  playInMatch,
  seededTeam,
}: IntercontinentalBracketProps) {
  const [playInWinner, setPlayInWinner] = useState<teamProps | null>(null);
  const [finalWinner, setFinalWinner] = useState<teamProps | null>(null);

  return (
    <div className="flex flex-col items-center my-10">

      <h2 className="font-bold text-lg mb-4">Intercontinental Path</h2>

      <div className="grid grid-cols-3 items-center gap-6 w-full max-w-4xl">

        <div className="flex flex-col items-end">
          <Match
            team1={playInMatch.team1}
            team2={playInMatch.team2}
            onPickTeam1={() => setPlayInWinner(playInMatch.team1)}
            onPickTeam2={() => setPlayInWinner(playInMatch.team2)}
          />

          <p className="text-sm mt-2">Play-In</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center font-bold text-lg mb-2">Final</div>

          <Match
            team1={playInWinner ?? { name: "TBD", flag: "" }}
            team2={seededTeam}
            onPickTeam1={() => playInWinner && setFinalWinner(playInWinner)}
            onPickTeam2={() => setFinalWinner(seededTeam)}
          />

          
        </div>

        
      </div>

      {finalWinner && playInWinner ? (
        <div className="mt-6 p-3 bg-green-200 ml-150 rounded-lg font-bold text-lg">
          Winner of this Path: {finalWinner.name} 
        </div>
      ) : <p>Plase select a winner in the semifinal before proceeding.</p>} 
    </div>
  );
}
