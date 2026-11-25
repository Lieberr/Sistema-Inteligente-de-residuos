export function AuthBrand({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 ${
        dark ? "text-white" : "text-[#202925]"
      }`}
    >
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#2f9b70] text-lg font-bold text-white shadow-inner shadow-white/10">
        E
      </div>

      <div className="flex flex-col gap-1">
        <strong className="text-base font-semibold tracking-tight">
          EcoTrack
        </strong>

        <span
          className={`text-[10px] ${
            dark ? "text-[#8fa89d]" : "text-[#69736d]"
          }`}
        >
          Gestão inteligente de resíduos
        </span>
      </div>
    </div>
  );
}