import type { teamProps } from "./Team";
import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import RankableTeam from "./RankableTeam";

export type groupProps = {
  name: string;
  teams: teamProps[];
  isGroupFinished?: (groupName: string, thirdPlace: teamProps) => void;
};

export default function Group({ name, teams, isGroupFinished }: groupProps) {
  const [orderedTeams, setOrderedTeams] = useState<teamProps[]>(teams);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  // Report initial 3rd place on mount
  useEffect(() => {
    if (isGroupFinished && orderedTeams.length >= 3) {
      isGroupFinished(name, orderedTeams[2]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = orderedTeams.findIndex((t) => t.name === active.id);
    const newIndex = orderedTeams.findIndex((t) => t.name === over.id);
    const newOrder = arrayMove(orderedTeams, oldIndex, newIndex);
    setOrderedTeams(newOrder);

    if (isGroupFinished && newOrder.length >= 3) {
      isGroupFinished(name, newOrder[2]);
    }
  }

  return (
    <div className="w-full p-4 sm:p-5 border border-yellow-200 rounded-lg bg-[#1B1B1B] shadow">
      <h2 className="font-bold text-lg sm:text-xl mb-5">Group {name}</h2>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={orderedTeams.map((t) => t.name)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-3">
            {orderedTeams.map((t, i) => (
              <RankableTeam key={t.name} team={t} rank={i + 1} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
