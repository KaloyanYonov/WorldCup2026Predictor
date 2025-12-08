import Team from "./Team"
import type { teamProps } from "./Team"

export type matchProps = {
    team1: teamProps;
    team2: teamProps;
    onPickTeam1?: () => void;
    onPickTeam2?: () => void;
};

export default function Match({ team1, team2, onPickTeam1, onPickTeam2 }: matchProps) {
    return (
        <div className="flex flex-col gap-4 p-10 bg-transparent">

            <button onClick={onPickTeam1} className="active:scale-95 transition-transform">
                <div className="border border-double border-yellow-200 rounded p-2 bg-[#1B1B1B]">
                    <Team {...team1} />
                </div>
            </button>

            <button onClick={onPickTeam2} className="active:scale-95 transition-transform">
                <div className="border border-double border-yellow-200 rounded p-2 bg-[#1B1B1B]">
                    <Team {...team2} />
                </div>
            </button>

        </div>
    );
}
