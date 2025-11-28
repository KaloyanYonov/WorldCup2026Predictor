import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type BracketProps = {
  name : string;
  match1: { team1: teamProps; team2: teamProps };
  match2: { team1: teamProps; team2: teamProps };
};

export default function Bracket({ name ,match1, match2 }: BracketProps) {
  const [winner1, setWinner1] = useState<teamProps | null>(null);
  const [winner2, setWinner2] = useState<teamProps | null>(null);
  const [finalWinner, setFinalWinner] = useState<teamProps | null>(null);

  return (
    <>

        <div className="flex flex-col rounded-lg p-6 bg-[#ead7c3] items-center my-10">
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
                onPickTeam1={() => winner1 && setFinalWinner(winner1)}
                onPickTeam2={() => winner2 && setFinalWinner(winner2)}
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
            Winner of this Path: {<img src={finalWinner.flag} alt="" className="w-25 pt-3 mx-auto"/>}
            <p className="text-center p-4">{finalWinner.name}</p>
            </div>
        )}
        </div>
        </>

    );
}

