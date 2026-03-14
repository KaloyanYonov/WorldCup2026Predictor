import Team from "./Team";
import type { teamProps } from "./Team";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type RankableTeamProps = {
  team: teamProps;
  rank: number;
};

const rankStyles: Record<number, { label: string; color: string }> = {
  1: { label: "1st", color: "text-yellow-400" },
  2: { label: "2nd", color: "text-gray-300" },
  3: { label: "3rd", color: "text-amber-600" },
  4: { label: "4th", color: "text-red-500" },
};

export default function RankableTeam({ team, rank }: RankableTeamProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: team.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    zIndex: isDragging ? 10 : undefined,
  };

  const { label, color } = rankStyles[rank] ?? { label: `${rank}`, color: "text-white" };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex bg-[#1b1b1b] items-center justify-between p-2 border border-yellow-100 rounded shadow-sm"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing mr-3 text-yellow-200/40 hover:text-yellow-200/70 transition-colors select-none text-lg leading-none"
        title="Drag to reorder"
      >
        ⠿
      </div>

      <div className="flex-1">
        <Team {...team} />
      </div>

      <span className={`ml-4 text-sm font-bold tabular-nums ${color}`}>
        {label}
      </span>
    </div>
  );
}
