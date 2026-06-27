export default function ControlPanel() {
  return (
    <div className="flex justify-center">

      <button
        className="
          rounded-2xl
          bg-green-600

          px-10
          py-4

          text-lg
          font-bold
          text-white

          shadow-lg

          transition-all

          hover:-translate-y-1
          hover:bg-green-700

          active:translate-y-0
          active:scale-95
        "
      >
        경기 시작
      </button>

    </div>
  );
}
