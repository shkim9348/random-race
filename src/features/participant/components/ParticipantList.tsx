"use client";

import { useParticipantStore } from "@/store/participantStore";
import ParticipantItem from "./ParticipantItem";

export default function ParticipantList() {
  const participants = useParticipantStore(
    (state) => state.participants
  );

  const removeParticipant = useParticipantStore(
    (state) => state.removeParticipant
  );

  return (
    <div className="h-full overflow-y-auto pr-2">
      {participants.length === 0 ? (
        <div className="text-center text-slate-400">
          참가자를 추가해주세요.
        </div>
      ) : (
        <div className="space-y-2">
          {participants.map((participant) => (
            <ParticipantItem
              key={participant.id}
              participant={participant}
              onRemove={removeParticipant}
            />
          ))}
        </div>
      )}
    </div>
  );
}
