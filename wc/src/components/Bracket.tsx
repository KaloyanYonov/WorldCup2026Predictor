import Team from "./Team";
import type { teamProps } from "./Team";


type BracketProps = {
  team1: teamProps;
  team2: teamProps;
};

export default function Bracket({ team1, team2 }: BracketProps) {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg">
      <Team {...team1} />
      <Team {...team2} />
    </div>
  );
}
