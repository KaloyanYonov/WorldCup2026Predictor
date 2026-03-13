import Team from "./Team"
import type { teamProps } from "./Team"

export type matchProps = {
    team1: teamProps;
    team2: teamProps;
    onPickTeam1?: () => void;
    onPickTeam2?: () => void;
    selectedTeam?: teamProps | null;
};

export default function Match({ team1, team2, onPickTeam1, onPickTeam2, selectedTeam }: matchProps) {
    const team1Selected = selectedTeam?.name === team1.name;
    const team2Selected = selectedTeam?.name === team2.name;

    return (
        <div className="flex flex-col gap-3 p-4 px-6 bg-transparent">

            <button onClick={onPickTeam1} className="active:scale-95 transition-transform">
                <div className={`border rounded p-2 transition-colors ${
                    team1Selected
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-double border-yellow-200 bg-[#1B1B1B] hover:bg-[#252525]"
                }`}>
                    <Team {...team1} />
                </div>
            </button>

            <button onClick={onPickTeam2} className="active:scale-95 transition-transform">
                <div className={`border rounded p-2 transition-colors ${
                    team2Selected
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-double border-yellow-200 bg-[#1B1B1B] hover:bg-[#252525]"
                }`}>
                    <Team {...team2} />
                </div>
            </button>

        </div>
    );
}
