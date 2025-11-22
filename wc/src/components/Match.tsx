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
        <div className="flex flex-col gap-4 p-4 border rounded-lg bg-white">
            <button onClick={onPickTeam1}>
                <Team {...team1} />
            </button>
            <button onClick={onPickTeam2}>
                <Team {...team2} />
            </button>
        </div>
    );
}
