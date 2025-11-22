import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type BracketProps = {
    match1: {
        team1: teamProps;
        team2: teamProps;
    };
    match2: {
        team1: teamProps;
        team2: teamProps;
    };
};

export default function Bracket({ match1, match2 }: BracketProps) {
    const [winner1, setWinner1] = useState<teamProps | null>(null);
    const [winner2, setWinner2] = useState<teamProps | null>(null);
    const [bracketWinner, setBracketWinner] = useState<teamProps | null>(null);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="font-bold text-xl mb-2">Match 1</h2>
                <Match 
                    team1={match1.team1} 
                    team2={match1.team2}
                    onPickTeam1={() => setWinner1(match1.team1)}
                    onPickTeam2={() => setWinner1(match1.team2)}
                />
            </div>
            <div>
                <h2 className="font-bold text-xl mb-2">Match 2</h2>
                <Match 
                    team1={match2.team1} 
                    team2={match2.team2}
                    onPickTeam1={() => setWinner2(match2.team1)}
                    onPickTeam2={() => setWinner2(match2.team2)}
                />
            </div>
            <div>
                <h2 className="font-bold text-xl mt-6">Final</h2>

                {winner1 && winner2 ? (
                    <Match
                        team1={winner1}
                        team2={winner2}
                        onPickTeam1={() => setBracketWinner(winner1)}
                        onPickTeam2={() => setBracketWinner(winner2)}
                    />
                ) : (
                    <p className="text-gray-500">Pick semifinal winners to enable the final.</p>
                )}
            </div>
            {bracketWinner && (
                <div className="mt-4 p-3 bg-green-200 rounded-xl">
                    <h3 className="font-bold">Bracket Winner:</h3>
                    <p>{bracketWinner.name}</p>
                </div>
            )}
        </div>
    );
}
