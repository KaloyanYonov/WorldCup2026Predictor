import { useState, useEffect } from "react";
import type { teamProps } from "./Team";
import Team from "./Team";
import ConfirmButton from "./ConfirmButton";
import CancelButton from "./CancelButton";

type ThirdPlaceProps = {
    teams: teamProps[];
    maxQualifiers: number;
    onChange: (ordered: teamProps[]) => void;
};

export default function ThirdPlace({
    teams,
    maxQualifiers,
    onChange,
}: ThirdPlaceProps) {
    const [selectedOrder, setSelectedOrder] = useState<string[]>([]);

    useEffect(() => {
        const orderedTeams: teamProps[] = [];
        for (const name of selectedOrder) {
            const team = teams.find((t) => t.name === name);
            if (team) {
                orderedTeams.push(team);
            }
        }
        onChange(orderedTeams);
    }, [selectedOrder, teams, onChange]);

    function toggleTeam(teamName: string) {
        setSelectedOrder((prev) => {
            const exists = prev.includes(teamName);

            if (exists) {
                return prev.filter((n) => n !== teamName);
            }

            if (prev.length >= maxQualifiers) {
                return prev;
            }

            return [...prev, teamName];
        });
    }

    function getRankIndex(teamName: string): number {
        return selectedOrder.indexOf(teamName);
    }

    function confirm() { }
    function cancel() { }

    return (
        <div className="w-full absolute max-w-5xl mx-auto mb-16 mt-4 p-4 border border-yellow-300 rounded-lg bg-[#111111]">
            <h3 className="font-semibold text-lg mb-2 text-yellow-100">
                Select best 3rd-placed teams (click in order)
            </h3>
            <p className="text-sm text-gray-300 mb-4">
                Selected: {selectedOrder.length} / {maxQualifiers}
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {teams.map((team) => {
                    const rankIndex = getRankIndex(team.name);
                    const isSelected = rankIndex !== -1;

                    const rankLabel = isSelected ? String(rankIndex + 1) : "";

                    let borderClass = "border-gray-600";
                    if (isSelected) {
                        borderClass = "border-yellow-400";
                    }

                    return (
                        <button
                            key={team.name}
                            type="button"
                            onClick={() => toggleTeam(team.name)}
                            className={
                                "relative text-left p-2 rounded-md border bg-transparent hover:bg-[#252525] transition " +
                                borderClass
                            }
                        >
                            {rankLabel !== "" && (
                                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 text-black text-xs flex items-center justify-center font-bold">
                                    {rankLabel}
                                </span>
                            )}

                            <Team {...team} />

                        </button>
                    );
                })}
                <CancelButton onCancel={cancel}/>
                <ConfirmButton onConfirm={confirm} />
            </div>
        </div>
    );
}
