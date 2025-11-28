import Team from "./Team";
import type { teamProps } from "./Team";

export type groupProps = {
  name: string;
  teams: teamProps[];
};

export default function Group({ name, teams }: groupProps) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      <h2 className="font-bold text-xl mb-5">Group {name}</h2>

      <div className="flex flex-col gap-2">
        {teams.map((t, i) => (
          <Team key={i} {...t} />
        ))}
      </div>
    </div>
  );
}
