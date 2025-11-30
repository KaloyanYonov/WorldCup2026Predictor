import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type IntercontinentalBracketProps = {
  name: string;
  playInMatch: { team1: teamProps; team2: teamProps };
  seededTeam: teamProps;
  finalWinner: teamProps | null;
  onFinalWinner: (winner: teamProps | null) => void;
};

export default function IntercontinentalBracket({
  name,
  playInMatch,
  seededTeam,
  finalWinner,
  onFinalWinner,
}: IntercontinentalBracketProps) {
  const [playInWinner, setPlayInWinner] = useState<teamProps | null>(null);
  const [error, setError] = useState("");

  function handleFinalPick(team: teamProps) {
    if (!playInWinner) {
      setError("Please select the play-in winner first.");
      return;
    }
    setError("");
    onFinalWinner(team);
  }

  return (
    <div className="flex flex-col rounded-lg p-6 bg-[#fbf6ef] items-center my-10">
      <h2 className="font-bold text-lg mb-7">Pathway {name}</h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
        <div className="relative flex flex-col items-end">

          <Match
            team1={playInMatch.team1}
            team2={playInMatch.team2}
            onPickTeam1={() => { setPlayInWinner(playInMatch.team1); setError(""); }}
            onPickTeam2={() => { setPlayInWinner(playInMatch.team2); setError(""); }}
          />

          <div className="absolute right-0 top-[33%] w-[30px] h-[3px] bg-gray-300"></div>
          <div className="absolute right-0 bottom-[33%] w-[30px] h-[3px] bg-gray-300"></div>
          <div className="absolute right-0 top-[33%] h-[33%] w-[2px] bg-gray-300"></div>

          <div className="absolute right-[-60px] top-1/2 w-[60px] h-[2px] bg-gray-300"></div>
        </div>


        <div className="relative flex flex-col items-center mx-7 my-6 mb-11">
          <div className="text-center text-lg">Final</div>

          <Match
            team1={playInWinner ?? { name: "TBD", flag: "https://t3.ftcdn.net/jpg/06/16/17/88/360_F_616178830_rySDz4kA4m5l7tiWta1O0qLAFhFqw2eS.jpg" }}
            team2={seededTeam}
            onPickTeam1={() => playInWinner && handleFinalPick(playInWinner)}
            onPickTeam2={() => handleFinalPick(seededTeam)}
          />


        </div>


        </div>


      {finalWinner ? (
        <div className="mt-6 p-2 rounded-lg font-bold text-lg">
          <p className="text-center">Winner of this Path:</p>
          <img src={finalWinner.flag} className="w-25 pt-3 h-auto mx-auto" />
          <p className="text-center p-4">{finalWinner.name}</p>
        </div>
      ) : (
        error && <p className="text-red-600 font-semibold mt-4">{error}</p>
      )}
    </div>
  );
}
