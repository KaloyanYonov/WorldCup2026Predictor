import Team from "./Team";
import type { teamProps } from "./Team";

type RankableTeamProps = {
  team: teamProps;
  selectedRank: number | null;
  onSelectRank: (rank: number) => void;
};

export default function RankableTeam({
  team,
  selectedRank,
  onSelectRank
}: RankableTeamProps) {
  return (
    <div className="flex items-center justify-between p-2 border rounded bg-white shadow-sm">
      
      <Team {...team} />
      <div className="flex gap-2 ml-4">
        {[1, 2, 3, 4].map((rank) => (
          <button
            key={rank}
            onClick={() => onSelectRank(rank)}
            className={`
              w-8 h-8 flex items-center justify-center rounded-full border text-sm
              transition-all duration-200
              ${
                selectedRank === rank
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 hover:bg-blue-200"
              }
            `}
          >
            {rank}
          </button>
        ))}
      </div>
    </div>
  );
}
