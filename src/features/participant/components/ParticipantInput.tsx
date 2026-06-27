"use client";

import { useState } from "react";
import { useParticipantStore } from "@/store/participantStore";

export default function ParticipantInput() {
  const [name, setName] = useState("");

  const addParticipant = useParticipantStore(
    (state) => state.addParticipant
  );

  const handleAdd = () => {
    if (!name.trim()) return;

    addParticipant(name.trim());

    setName("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={name}
        placeholder="참가자 이름"
        className="
          flex-1
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          focus:border-blue-500
        "
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing || e.keyCode === 229) {
            return;
          }

          if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
          }
        }}
      />

      <button
        onClick={handleAdd}
        className="
          rounded-xl
          bg-blue-600
          px-5
          py-3
          font-semibold
          text-white
          hover:bg-blue-700
        "
      >
        추가
      </button>
    </div>
  );
}
