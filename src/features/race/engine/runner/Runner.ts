export interface Runner {
  id: string;

  name: string;

  color: string;

  x: number;

  y: number;

  speed: number;

  acceleration: number;

  maxSpeed: number;

  finished: boolean;

  rank?: number;
}
