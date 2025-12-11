import type { teamProps } from "./Team";
import { useState } from "react";
import RankableTeam from "./RankableTeam";

export type groupProps = {
  name: string;
  teams: teamProps[];
  isGroupFinished?: (thirdPlace: teamProps) => void;
};

export default function Group({ name, teams, isGroupFinished }: groupProps) {
  const [rankings, setRankings] = useState<{ [team: string]: number | null }>(
    Object.fromEntries(teams.map((t) => [t.name, null]))
  );

  function setRank(teamName: string, rank: number) {
    setRankings((prev) => {
      const updated: { [k: string]: number | null } = { ...prev };

      for (const key of Object.keys(updated)) {
        if (updated[key] === rank) {
          updated[key] = null;
        }
      }

      updated[teamName] = rank;

      const allAssigned = Object.values(updated).every((v) => v !== null);

      if (allAssigned && isGroupFinished) {
        const thirdTeamName = Object.keys(updated).find(
          (k) => updated[k] === 3
        );

        if (thirdTeamName) {
          const thirdTeam = teams.find((t) => t.name === thirdTeamName);
          if (thirdTeam) {
            isGroupFinished(thirdTeam);
          }
        }
      }

      return updated;
    });
  }

  return (
    <div className="w-full p-4 sm:p-5 border border-yellow-200 rounded-lg bg-[#1B1B1B] shadow">
      <h2 className="font-bold text-lg sm:text-xl mb-5">Group {name}</h2>

      <div className="flex flex-col gap-3">
        {teams.map((t) => (
          <RankableTeam
            key={t.name}
            team={t}
            selectedRank={rankings[t.name]}
            onSelectRank={(r) => setRank(t.name, r)}
          />
        ))}
      </div>
    </div>
  );
}
