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
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
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
