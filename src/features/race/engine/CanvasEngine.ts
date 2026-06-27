import { Camera } from "./Camera";
import { RunnerManager } from "./runner/RunnerManager";
import {
  GrassRenderer,
  RunnerRenderer,
  TrackRenderer,
} from "./renderer";

export class CanvasEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  /**
   * Animation
   */
  private animationId = 0;

  /**
   * Engine
   */
  private camera = new Camera();

  /**
   * Renderer
   */
  private grassRenderer = new GrassRenderer();
  private trackRenderer = new TrackRenderer();
  private runnerRenderer = new RunnerRenderer();

  /**
   * Runner
   */
  private runnerManager = new RunnerManager();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas Context 생성 실패");
    }

    this.ctx = context;
  }

  /**
   * 참가자 설정
   */
  public setParticipants(
    participants: {
      id: string;
      name: string;
    }[]
  ) {
    this.runnerManager.setParticipants(participants);
  }

  /**
   * 게임 시작
   */
  start() {
    this.loop();
  }

  /**
   * 게임 종료
   */
  stop() {
    cancelAnimationFrame(this.animationId);
  }

  /**
   * 게임 루프
   */
  private loop = () => {
    this.update();
    this.render();

    this.animationId = requestAnimationFrame(this.loop);
  };

  /**
   * 업데이트
   */
  private update() {
    this.camera.update();
  }

  /**
   * 화면 렌더링
   */
  private render() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    /**
     * Grass
     */
    this.grassRenderer.draw(
      this.ctx,
      this.canvas.width,
      this.canvas.height
    );

    /**
     * Track
     */
    this.trackRenderer.draw(
      this.ctx,
      this.canvas.width,
      this.canvas.height
    );

    /**
     * Runner
     */
    this.runnerRenderer.draw(
      this.ctx,
      this.runnerManager
    );
  }
}
