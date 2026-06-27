import { RunnerManager } from "../runner/RunnerManager";

export class RunnerRenderer {
  draw(
    ctx: CanvasRenderingContext2D,
    manager: RunnerManager
  ) {
    const runners = manager.getRunners();

    /**
     * 한 줄에 표시할 최대 인원
     */
    const maxColumn = 10;

    /**
     * 간격
     */
    const gapX = 80;
    const gapY = 36;

    runners.forEach((runner, index) => {
      const col = index % maxColumn;
      const row = Math.floor(index / maxColumn);

      const x = 80 + col * gapX;
      const y = 120 + row * gapY;

      /**
       * Runner
       */
      ctx.fillStyle = runner.color;

      ctx.fillRect(
        runner.x + x,
        runner.y + y,
        8,
        8
      );

      /**
       * Name
       */
      ctx.fillStyle = "#ffffff";
      ctx.font = "12px Arial";

      ctx.fillText(
        runner.name,
        runner.x + x + 12,
        runner.y + y + 8
      );
    });
  }
}
