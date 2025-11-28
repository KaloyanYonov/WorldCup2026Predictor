import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type IntercontinentalBracketProps = {
  name: string;
  playInMatch: {
    team1: teamProps;
    team2: teamProps;
  };
  seededTeam: teamProps; // for DR Congo and Iraq
};



export default function IntercontinentalBracket({name,
  playInMatch,
  seededTeam,
}: IntercontinentalBracketProps) {
  const [playInWinner, setPlayInWinner] = useState<teamProps | null>(null);
  const [finalWinner, setFinalWinner] = useState<teamProps | null>(null);
  const [error, setError] = useState<string>("");
  
  
  function handleFinalPick(team: teamProps) {
  if (!playInWinner) {
    setError("Please select a semifinal winner first.");
    return;
  }

  setError("");
  setFinalWinner(team);
}



  return (
    <div className="flex flex-col rounded-lg p-6 bg-[#ead7c3] items-center my-10">

      <h2 className="font-bold text-lg mb-7">Pathway {name}</h2>

      <div className="grid grid-cols-3 items-center gap-6 w-full max-w-4xl">

        <div className="flex flex-col items-end">
          <Match
            team1={playInMatch.team1}
            team2={playInMatch.team2}
            onPickTeam1={() => {setPlayInWinner(playInMatch.team1); setError("");}}
            onPickTeam2={() => {setPlayInWinner(playInMatch.team2); setError("")}}
          />

        </div>

        <div className="flex flex-col items-center">
          <div className="text-center font-bold text-lg mb-2">Final</div>

          <Match
            team1={playInWinner ?? { name: "TBD", flag: "" }}
            team2={seededTeam}
            onPickTeam1={() => handleFinalPick(playInWinner!)}
            onPickTeam2={() => handleFinalPick(seededTeam)}
          />

          
        </div>

        
      </div>


      {finalWinner ? (
        <div className="mt-6 p-2 rounded-lg font-bold text-lg">
          <p className="text-center">Winner of this Path:</p>
          <img src={finalWinner.flag} className="w-30 pt-3 h-auto mx-auto" />
          <p className="text-center p-4">{finalWinner.name}</p>
        </div>
      ) : (
        error && <p className="text-red-600 font-semibold mt-4">{error}</p>
      )}
    </div>
  );
}
