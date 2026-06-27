import { Runner } from "./Runner";

export class RunnerManager {
  runners: Runner[] = [];

  constructor() {
    this.createSampleRunner();
  }

  private createSampleRunner() {
    const colors = [
      "#ff595e",
      "#1982c4",
      "#6a4c93",
      "#8ac926",
      "#ffca3a",
    ];

    for (let i = 0; i < 20; i++) {
      this.runners.push(
        new Runner(
          crypto.randomUUID(),
          `Runner ${i + 1}`,
          170,
          330 + i * 22,
          colors[i % colors.length]
        )
      );
    }
  }
}
