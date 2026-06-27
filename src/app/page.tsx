import { ParticipantPanel } from "@/features/participant";
import { ControlPanel, RaceCanvas } from "@/features/race";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              🏃🏻‍♂️ Random Race
            </h1>

            <p className="text-sm text-slate-500">
              Pick a random winner with a fun race.
            </p>
          </div>

        </div>
      </header>

      {/* Content */}
      <div className="mx-auto flex max-w-7xl gap-6 p-6">

        {/* Sidebar */}
        <aside className="w-80 shrink-0">
          <ParticipantPanel />
        </aside>

        {/* Canvas */}
        <section className="flex-1">
          <RaceCanvas />
        </section>

      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-8">
        <ControlPanel />
      </footer>

    </main>
  );
}
