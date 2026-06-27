import type { Participant } from "../types";
import ParticipantItem from "./ParticipantItem";

interface Props {
  participants: Participant[];
  onRemove: (id: string) => void;
}

export default function ParticipantList({
  participants,
  onRemove,
}: Props) {
  if (participants.length === 0) {
    return (
      <div className="rounded border border-dashed p-4 text-center text-gray-400">
        참가자가 없습니다.
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-2">
      {participants.map((participant) => (
        <ParticipantItem
          key={participant.id}
          participant={participant}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
