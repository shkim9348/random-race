"use client";

import { Participant } from "@/store/participantStore";

interface Props {
  participant: Participant;
  onRemove: (id: string) => void;
}

export default function ParticipantItem({
  participant,
  onRemove,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
      <span>{participant.name}</span>

      <button
        onClick={() => onRemove(participant.id)}
        className="rounded-lg p-2 text-red-500 hover:bg-red-50"
      >
        ✕
      </button>
    </div>
  );
}
