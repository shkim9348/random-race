import { RunnerManager } from "../runner/RunnerManager";

export class RunnerRenderer {
  draw(
    ctx: CanvasRenderingContext2D,
    manager: RunnerManager
  ) {
    manager.runners.forEach((runner) => {
      /**
       * 몸통
       */
      ctx.fillStyle = runner.color;

      ctx.fillRect(
        runner.x,
        runner.y,
        8,
        8
      );

      /**
       * 이름
       */

      ctx.font = "14px Arial";

      ctx.fillStyle = "#ffffff";

      ctx.fillText(
        runner.name,
        runner.x + 12,
        runner.y + 8
      );
    });
  }
}
