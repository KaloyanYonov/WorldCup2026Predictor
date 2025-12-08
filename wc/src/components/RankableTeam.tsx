import Team from "./Team";
import type { teamProps } from "./Team";

type RankableTeamProps = {
  team: teamProps;
  selectedRank: number | null;
  onSelectRank: (rank: number) => void;
};

const rankColors: Record<number,string> = {
  1: "bg-yellow-400",
  2: "bg-gray-400",       
  3: "bg-amber-700" ,      
  4: "bg-red-600",    
};

export default function RankableTeam({
  team,
  selectedRank,
  onSelectRank,
}: RankableTeamProps) {
  return (
    <div className="flex bg-[#1b1b1b] items-center justify-between p-2 border border-yellow-100 rounded shadow-sm">
      <Team {...team}/>

      <div className="flex gap-2 ml-4">
        {[1, 2, 3, 4].map((rank) => {
          const isSelected = selectedRank === rank;

          return (
            <button
              key={rank}
              onClick={() => onSelectRank(rank)}
              className={`
                w-8 h-8 flex items-center justify-center rounded border-yellow-100 border text-sm transition-all duration-200
                ${isSelected ? rankColors[rank] : "bg-[#1b1b1b] hover:bg-[#343434]"}
              `}
            >
              {rank}
            </button>
          );
        })}
      </div>
    </div>
  );
}
