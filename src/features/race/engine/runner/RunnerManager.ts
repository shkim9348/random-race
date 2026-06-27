import { Runner } from "../types/Runner";
import { createRunner } from "./RunnerFactory";

export class RunnerManager {
  private runners: Runner[] = [];

  /**
   * 참가자 목록으로 Runner 생성
   */
  setParticipants(
    participants: {
      id: string;
      name: string;
    }[]
  ) {
    this.runners = participants.map((participant, index) =>
      createRunner(
        participant.id,
        participant.name,
        index
      )
    );
  }

  /**
   * Runner 목록 반환
   */
  getRunners() {
    return this.runners;
  }
}
