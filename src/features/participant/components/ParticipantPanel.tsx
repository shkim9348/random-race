"use client";

import ParticipantInput from "./ParticipantInput";
import ParticipantList from "./ParticipantList";
import { useParticipant } from "../hooks/useParticipant";

export default function ParticipantPanel() {
  const {
    participants,
    addParticipant,
    removeParticipant,
  } = useParticipant();

  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">
        참가자 관리
      </h2>

      <ParticipantInput onAdd={addParticipant} />

      <ParticipantList
        participants={participants}
        onRemove={removeParticipant}
      />
    </section>
  );
}
