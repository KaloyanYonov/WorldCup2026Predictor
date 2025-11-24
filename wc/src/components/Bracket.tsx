import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";
import Header from "./Header";

type BracketProps = {
  match1: { team1: teamProps; team2: teamProps };
  match2: { team1: teamProps; team2: teamProps };
};

export default function Bracket({ match1, match2 }: BracketProps) {
  const [winner1, setWinner1] = useState<teamProps | null>(null);
  const [winner2, setWinner2] = useState<teamProps | null>(null);
  const [finalWinner, setFinalWinner] = useState<teamProps | null>(null);

  return (
    <>
    <Header/>

        <div className="flex flex-col items-center my-10">
        <h2 className="font-bold text-lg mb-4">BRACKET</h2>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 w-full max-w-5xl">

            <div className="flex flex-col items-end">
            <Match
                team1={match1.team1}
                team2={match1.team2}
                onPickTeam1={() => setWinner1(match1.team1)}
                onPickTeam2={() => setWinner1(match1.team2)}
            />

            <p className="text-sm mt-2">SF1</p>
            </div>

            <div className="flex flex-col items-center">
            <div className="text-center font-bold text-lg mb-2">FINAL</div>

            <Match
                team1={winner1 ?? { name: "TBD", flag: "" }}
                team2={winner2 ?? { name: "TBD", flag: "" }}
                onPickTeam1={() => winner1 && setFinalWinner(winner1)}
                onPickTeam2={() => winner2 && setFinalWinner(winner2)}
            />

            {finalWinner && (
                <div className="mt-2 px-4 py-1 bg-yellow-300 rounded-lg font-semibold">
                {finalWinner.name} selected
                </div>
            )}
            </div>

            <div className="flex flex-col items-start">
            <Match
                team1={match2.team1}
                team2={match2.team2}
                onPickTeam1={() => setWinner2(match2.team1)}
                onPickTeam2={() => setWinner2(match2.team2)}
            />

            <p className="text-sm mt-2">SF2</p>
            </div>
        </div>

        {finalWinner && (
            <div className="mt-6 p-3 bg-green-200 rounded-lg font-bold text-lg">
            Winner of this Path: {finalWinner.name}
            </div>
        )}
        </div>
        </>

    );
}

