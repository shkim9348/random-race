import ParticipantInput from "./ParticipantInput";
import ParticipantList from "./ParticipantList";

export default function ParticipantPanel() {
  return (
    <section
      className="
        flex
        h-[500px]
        flex-col
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        참가자 관리
      </h2>

      <ParticipantInput />

      <div className="mt-6 flex-1 overflow-hidden">
        <ParticipantList />
      </div>
    </section>
  );
}
