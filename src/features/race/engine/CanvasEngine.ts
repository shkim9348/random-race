import { Camera } from "./Camera";
import { GrassRenderer, TrackRenderer } from "./renderer";

export class CanvasEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private animationId = 0;

  private camera = new Camera();

  private grass = new GrassRenderer();
  private track = new TrackRenderer();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas Context 생성 실패");
    }

    this.ctx = context;
  }

  start() {
    this.loop();
  }

  stop() {
    cancelAnimationFrame(this.animationId);
  }

  private loop = () => {
    this.update();
    this.render();

    this.animationId = requestAnimationFrame(this.loop);
  };

  private update() {
    this.camera.update();
  }

  private render() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.grass.draw(
      this.ctx,
      this.canvas.width,
      this.canvas.height
    );

    this.track.draw(
      this.ctx,
      this.canvas.width,
      this.canvas.height
    );
  }
}
