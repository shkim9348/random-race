"use client";

import { useEffect, useRef } from "react";

import { CanvasEngine } from "../engine/CanvasEngine";
import { useParticipantStore } from "@/store/participantStore";

export default function RaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const participants = useParticipantStore(
    (state) => state.participants
  );

  const engineRef = useRef<CanvasEngine | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new CanvasEngine(canvasRef.current);

    engine.start();

    engineRef.current = engine;

    return () => engine.stop();
  }, []);

  useEffect(() => {
    engineRef.current?.setParticipants(participants);
  }, [participants]);

  return (
    <canvas
      ref={canvasRef}
      width={1400}
      height={700}
      className="w-full rounded-xl border bg-green-700"
    />
  );
}
