import { useState } from "react";
import Match from "./Match";
import type { teamProps } from "./Team";

type IntercontinentalBracketProps = {
    playInMatch: {
        team1: teamProps;
        team2: teamProps;
    };
    seededTeam: teamProps;
};

export default function IntercontinentalBracket({ playInMatch, seededTeam }: IntercontinentalBracketProps) {
    const [playInWinner, setPlayInWinner] = useState<teamProps | null>(null);
    const [bracketWinner, setBracketWinner] = useState<teamProps | null>(null);

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-bold text-xl mb-2">Play-in Match</h2>

                <Match
                    team1={playInMatch.team1}
                    team2={playInMatch.team2}
                    onPickTeam1={() => setPlayInWinner(playInMatch.team1)}
                    onPickTeam2={() => setPlayInWinner(playInMatch.team2)}
                />
            </div>

            <div>
                <h2 className="font-bold text-xl mt-4">Final Round</h2>

                {playInWinner ? (
                    <Match
                        team1={playInWinner}
                        team2={seededTeam}
                        onPickTeam1={() => setBracketWinner(playInWinner)}
                        onPickTeam2={() => setBracketWinner(seededTeam)}
                    />
                ) : (
                    <p className="text-gray-500">Pick a winner from the play-in match.</p>
                )}
            </div>

            {bracketWinner && (
                <div className="mt-4 p-3 bg-green-200 rounded-xl">
                    <h3 className="font-bold">Winner of this Path:</h3>
                    <p>{bracketWinner.name}</p>
                </div>
            )}
        </div>
    );
}
