import { Runner } from "../types/Runner";

const COLORS = [
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#eab308",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#f97316",
];

export function createRunner(
  id: string,
  name: string,
  index: number
): Runner {
  return {
    id,
    name,

    color: COLORS[index % COLORS.length],

    x: 120,

    y: 0,

    speed: 0,

    acceleration: 0,

    maxSpeed: 0,

    finished: false,
  };
}
