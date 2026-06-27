export class TrackRenderer {
  private readonly TRACK_MARGIN_X = 120;
  private readonly TRACK_HEIGHT = 500;
  private readonly LANE_COUNT = 8;
  private readonly START_ZONE_WIDTH = 50;

  draw(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    const top = (height - this.TRACK_HEIGHT) / 2;
    const left = this.TRACK_MARGIN_X;
    const trackWidth = width - this.TRACK_MARGIN_X * 2;
    const laneHeight = this.TRACK_HEIGHT / this.LANE_COUNT;

    /**
     * 트랙 바닥
     */
    ctx.fillStyle = "#B44D35";
    ctx.fillRect(
      left,
      top,
      trackWidth,
      this.TRACK_HEIGHT
    );

    /**
     * 시작 영역
     */
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fillRect(
      left,
      top,
      this.START_ZONE_WIDTH,
      this.TRACK_HEIGHT
    );

    /**
     * 위 / 아래 테두리
     */
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(left + trackWidth, top);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(left, top + this.TRACK_HEIGHT);
    ctx.lineTo(left + trackWidth, top + this.TRACK_HEIGHT);
    ctx.stroke();

    /**
     * 레인
     */
    ctx.strokeStyle = "rgba(255,255,255,0.65)";
    ctx.lineWidth = 2;

    for (let i = 1; i < this.LANE_COUNT; i++) {
      const y = top + laneHeight * i;

      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(left + trackWidth, y);
      ctx.stroke();
    }

    /**
     * START 라인
     */
    const startLineX = left + this.START_ZONE_WIDTH;

    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 8;

    ctx.beginPath();
    ctx.moveTo(startLineX, top);
    ctx.lineTo(startLineX, top + this.TRACK_HEIGHT);
    ctx.stroke();

    /**
     * START 텍스트
     */
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 30px Arial";

    ctx.fillText(
      "START",
      left,
      top - 18
    );
  }
}
