"use client";

import { useEffect, useRef } from "react";
import { CanvasEngine } from "../engine/CanvasEngine";

export default function RaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const engine = new CanvasEngine(canvas);

    engine.start();

    return () => {
      engine.stop();
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <canvas
        ref={canvasRef}
        className="aspect-video w-full"
      />
    </div>
  );
}
