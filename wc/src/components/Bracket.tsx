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
    <div className="flex flex-col rounded-lg p-5 bg-[#f8fafc] items-center my-5">
      <h2 className="font-bold text-lg mb-4">Path {name}</h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-5xl">

        <div className="relative flex flex-col items-end">

          <Match
            team1={match1.team1}
            team2={match1.team2}
            onPickTeam1={() => setWinner1(match1.team1)}
            onPickTeam2={() => setWinner1(match1.team2)}
          />
          <div className="absolute right-0 top-[33%] h-[3px] w-[30px] bg-gray-300"></div>
          <div className="absolute right-0 bottom-[33%] h-[3px] w-[30px] bg-gray-300"></div>
          <div className="absolute right-0 top-[33%] h-[33%] w-[2px] bg-gray-300"></div>

          <div className="absolute right-[-70px] top-1/2 h-[3px] w-[70px] bg-gray-300"></div>

        </div>

        <div className="flex flex-col items-center relative m-7 mb-14">

          <div className="text-center text-lg">Final</div>

          <Match
            team1={winner1 ?? { name: "TBD", flag: "https://t3.ftcdn.net/jpg/06/16/17/88/360_F_616178830_rySDz4kA4m5l7tiWta1O0qLAFhFqw2eS.jpg" }}
            team2={winner2 ?? { name: "TBD", flag: "https://t3.ftcdn.net/jpg/06/16/17/88/360_F_616178830_rySDz4kA4m5l7tiWta1O0qLAFhFqw2eS.jpg" }}
            onPickTeam1={() => winner1 && handleFinalPick(winner1)}
            onPickTeam2={() => winner2 && handleFinalPick(winner2)}
          />
        </div>


        <div className="relative flex flex-col items-start">
          <Match
            team1={match2.team1}
            team2={match2.team2}
            onPickTeam1={() => setWinner2(match2.team1)}
            onPickTeam2={() => setWinner2(match2.team2)}
          />

          <div className="absolute left-0 top-[33%] h-[3px] w-[30px] bg-gray-300"></div>
          <div className="absolute left-0 bottom-[33%] h-[3px] w-[30px] bg-gray-300"></div>

          <div className="absolute left-0 top-[33%] h-[33%] w-[2px] bg-gray-300"></div>

          <div className="absolute left-[-70px] top-1/2 h-[3px] w-[70px] bg-gray-300"></div>

        </div>

      </div>

      {finalWinner && (
        <div className="p-2 bg-transparent rounded-lg text-center font-bold ">
          <p>Winner of Path {name}</p>
          <img src={finalWinner.flag} className="w-25 mx-auto pt-3" />
          <p className="text-center p-4">{finalWinner.name}</p>
        </div>
      )}
    </div>
  );
}
