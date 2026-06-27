import type { Participant } from "../types";

interface Props {
  participant: Participant;
  onRemove: (id: string) => void;
}

export default function ParticipantItem({
  participant,
  onRemove,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded border p-2">
      <span>{participant.name}</span>

      <button
        className="text-red-500"
        onClick={() => onRemove(participant.id)}
      >
        ✕
      </button>
    </div>
  );
}
