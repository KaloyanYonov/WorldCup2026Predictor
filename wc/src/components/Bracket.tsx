import { useState } from "react";
import type { teamProps } from "./Team";
import Team from "./Team";

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
      <button onClick={onClick} className="active:scale-95 transition-transform text-left">
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

  /* Connector arm — two halves create ┐┘ or ┌└ shapes */
  function ArmRight() {
    return (
      <div className="flex flex-col w-5 shrink-0 self-stretch">
        <div className="flex-1 border-t-2 border-r-2 border-yellow-200/25 rounded-tr-sm"></div>
        <div className="flex-1 border-b-2 border-r-2 border-yellow-200/25 rounded-br-sm"></div>
      </div>
    );
  }

  function ArmLeft() {
    return (
      <div className="flex flex-col w-5 shrink-0 self-stretch">
        <div className="flex-1 border-t-2 border-l-2 border-yellow-200/25 rounded-tl-sm"></div>
        <div className="flex-1 border-b-2 border-l-2 border-yellow-200/25 rounded-bl-sm"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-lg p-5 bg-[#242124] items-center my-5 overflow-x-auto">
      <h2 className="font-bold text-lg mb-6">Path {name}</h2>

      {/* Section labels — separate row so columns below have equal height */}
      <div className="flex items-center justify-center w-full mb-2 text-[11px] uppercase tracking-widest text-gray-500">
        <div className="flex-1 text-center">Semi-final</div>
        {/* spacer matching connector width: arm (w-5) + line (w-6) = ~44px × 2 sides */}
        <div className="w-[88px] shrink-0"></div>
        <div className="flex-1 text-center">Final</div>
        <div className="w-[88px] shrink-0"></div>
        <div className="flex-1 text-center">Semi-final</div>
      </div>

      {/* Bracket row — all three columns have the same height */}
      <div className="flex items-center justify-center">

        {/* Left semi + right arm */}
        <div className="flex items-stretch">
          <div className="flex flex-col gap-2 p-2">
            <TeamBtn
              team={match1.team1}
              isSelected={winner1?.name === match1.team1.name}
              onClick={() => setWinner1(match1.team1)}
            />
            <TeamBtn
              team={match1.team2}
              isSelected={winner1?.name === match1.team2.name}
              onClick={() => setWinner1(match1.team2)}
            />
          </div>
          <ArmRight />
          <div className="w-6 border-t-2 border-yellow-200/25 self-center shrink-0"></div>
        </div>

        {/* Final — no label here, so height = 2 buttons = same as semis */}
        <div className="flex flex-col gap-2 p-2 shrink-0">
          <TeamBtn
            team={winner1 ?? { name: "TBD", flag: "" }}
            isSelected={finalWinner?.name === winner1?.name && !!winner1}
            onClick={() => winner1 && handleFinalPick(winner1)}
          />
          <TeamBtn
            team={winner2 ?? { name: "TBD", flag: "" }}
            isSelected={finalWinner?.name === winner2?.name && !!winner2}
            onClick={() => winner2 && handleFinalPick(winner2)}
          />
        </div>

        {/* Left arm + right semi */}
        <div className="flex items-stretch">
          <div className="w-6 border-t-2 border-yellow-200/25 self-center shrink-0"></div>
          <ArmLeft />
          <div className="flex flex-col gap-2 p-2">
            <TeamBtn
              team={match2.team1}
              isSelected={winner2?.name === match2.team1.name}
              onClick={() => setWinner2(match2.team1)}
            />
            <TeamBtn
              team={match2.team2}
              isSelected={winner2?.name === match2.team2.name}
              onClick={() => setWinner2(match2.team2)}
            />
          </div>
        </div>

      </div>

      {finalWinner && (
        <div className="mt-4 animate-[fadeIn_0.4s_ease-out_forwards] text-center font-bold">
          <p className="text-yellow-200 text-sm uppercase tracking-widest">Winner of Path {name}</p>
          <img src={finalWinner.flag} className="w-20 mx-auto pt-3 rounded" />
          <p className="pt-3 text-lg">{finalWinner.name}</p>
        </div>
      )}
    </div>
  );
}
