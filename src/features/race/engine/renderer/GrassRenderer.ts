export class GrassRenderer {
  draw(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    // 기본 잔디색
    ctx.fillStyle = "#6fbf73";
    ctx.fillRect(0, 0, width, height);

    // 잔디 질감
    ctx.strokeStyle = "rgba(255,255,255,0.03)";
    ctx.lineWidth = 1;

    for (let i = 0; i < height; i += 12) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
  }
}
