export class Runner {
  id: string;

  name: string;

  x: number;

  y: number;

  color: string;

  constructor(
    id: string,
    name: string,
    x: number,
    y: number,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.color = color;
  }
}
