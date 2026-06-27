"use client";

import { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

export default function ParticipantInput({ onAdd }: Props) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    const trimmed = name.trim();

    if (!trimmed) return;

    onAdd(trimmed);
    setName("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="
          flex-1
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition

          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
        placeholder="참가자 이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return;

          if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
          }
        }}
      />

      <button
        className="rounded-md bg-blue-600 px-4 text-white"
        onClick={handleAdd}
      >
        추가
      </button>
    </div>
  );
}
