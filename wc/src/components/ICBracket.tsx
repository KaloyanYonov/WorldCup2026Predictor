import { useState } from "react";
import type { teamProps } from "./Team";
import Team from "./Team";

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

  function TeamBtn({
    team,
    isSelected,
    onClick,
  }: {
    team: teamProps;
    isSelected: boolean;
    onClick: () => void;
  }) {
    return (
      <button onClick={onClick} className="active:scale-95 transition-transform text-left w-full">
        <div
          className={`border rounded p-2 transition-colors ${
            isSelected
              ? "border-yellow-400 bg-yellow-400/10"
              : "border-double border-yellow-200 bg-[#1B1B1B] hover:bg-[#252525]"
          }`}
        >
          <Team {...team} />
        </div>
      </button>
    );
  }

  return (
    <div className="flex flex-col rounded-lg p-6 bg-[#242124] items-center my-10 w-full">
      <h2 className="font-bold text-lg mb-8">Pathway {name}</h2>

      <div className="flex flex-col items-center w-full max-w-xs">

        <div className="w-full">
          <p className="text-[11px] uppercase tracking-widest text-gray-500 text-center mb-3">
            Play-in
          </p>
          <div className="flex flex-col gap-2">
            <TeamBtn
              team={playInMatch.team1}
              isSelected={playInWinner?.name === playInMatch.team1.name}
              onClick={() => { setPlayInWinner(playInMatch.team1); setError(""); }}
            />
            <TeamBtn
              team={playInMatch.team2}
              isSelected={playInWinner?.name === playInMatch.team2.name}
              onClick={() => { setPlayInWinner(playInMatch.team2); setError(""); }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center my-4">
          <div className="w-px h-4 bg-gray-500"></div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 px-3 py-0.5 border border-gray-700 rounded-full my-1">
            winner advances
          </p>
          <div className="w-px h-4 bg-gray-500"></div>
        </div>

        <div className="w-full">
          <p className="text-[11px] uppercase tracking-widest text-gray-500 text-center mb-3">
            Final
          </p>
          <div className="flex flex-col gap-2">
            <TeamBtn
              team={playInWinner ?? { name: "TBD", flag: "" }}
              isSelected={finalWinner?.name === playInWinner?.name && !!playInWinner}
              onClick={() => playInWinner && handleFinalPick(playInWinner)}
            />
            <TeamBtn
              team={seededTeam}
              isSelected={finalWinner?.name === seededTeam.name}
              onClick={() => handleFinalPick(seededTeam)}
            />
          </div>
        </div>

      </div>

      {error && (
        <p className="text-red-400 font-semibold mt-5 text-sm animate-[fadeIn_0.2s_ease-out_forwards]">
          {error}
        </p>
      )}

      {finalWinner && (
        <div className="mt-6 animate-[fadeIn_0.4s_ease-out_forwards] text-center font-bold">
          <p className="text-yellow-200 text-sm uppercase tracking-widest">Winner of this Path</p>
          <img src={finalWinner.flag} className="w-20 pt-3 h-auto mx-auto rounded" />
          <p className="pt-3 text-lg">{finalWinner.name}</p>
        </div>
      )}
    </div>
  );
}
