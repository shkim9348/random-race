"use client";

import { useState } from "react";
import type { Participant } from "../types";

export function useParticipant() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const addParticipant = (name: string) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    const participant: Participant = {
      id: crypto.randomUUID(),
      name: trimmedName,
    };

    setParticipants((prev) => [...prev, participant]);
  };

  const removeParticipant = (id: string) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    participants,
    addParticipant,
    removeParticipant,
  };
}
