import { ParticipantPanel } from "@/features/participant";
import { RaceCanvas, ControlPanel } from "@/features/race";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 p-8">
      <ParticipantPanel />

      <RaceCanvas />

      <ControlPanel />
    </main>
  );
}
