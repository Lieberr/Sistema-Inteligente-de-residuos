import { Icon } from "@/components/ui/Icon";

export function EcoVisual() {
  return (
    <div className="relative z-10 w-full max-w-[620px] rounded-[14px] border border-white/10 bg-[#153127] p-5 shadow-[0_18px_45px_rgba(3,15,10,0.16)] sm:p-7">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-[#b9cec5] sm:text-sm">
          Visão operacional
        </span>

        <b className="rounded bg-[#40b182]/15 px-2 py-1 text-[9px] font-semibold text-[#6ac69d] sm:text-[10px]">
          Ambiente monitorado
        </b>
      </div>

      {/* Métrica */}
      <div className="mt-5 flex items-center gap-3 rounded-lg bg-[#19392d] p-4">
        <Icon
          name="box"
          size={22}
          color="#54bd8f"
        />

        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-[#86a398]">
            Rastreabilidade
          </span>

          <strong className="text-xs font-semibold text-[#e9f2ee] sm:text-sm">
            Da coleta à destinação
          </strong>
        </div>
      </div>

      {/* Representação da rota */}
      <div className="relative my-5 h-[90px] overflow-hidden bg-[linear-gradient(rgba(151,184,170,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(151,184,170,0.06)_1px,transparent_1px)] bg-[length:32px_32px] sm:h-[100px]">
        <div className="absolute inset-x-[8%] top-1/2 -translate-y-1/2 rotate-[-4deg] border-t-2 border-dashed border-[#3c735d]" />

        <i className="absolute left-[8%] top-[53%] size-2 rounded-full bg-[#4bb987] shadow-[0_0_0_4px_rgba(75,185,135,0.12)]" />

        <i className="absolute left-1/2 top-[42%] size-2 rounded-full bg-[#4bb987] shadow-[0_0_0_4px_rgba(75,185,135,0.12)]" />

        <i className="absolute right-[8%] top-[35%] size-2 rounded-full bg-[#4bb987] shadow-[0_0_0_4px_rgba(75,185,135,0.12)]" />

        <div className="absolute left-[46%] top-[24%] text-[#82d3af]">
          <Icon name="truck" size={19} />
        </div>
      </div>

      {/* Rodapé */}
      <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-[10px] text-[#819e91] min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
        <span className="flex items-center gap-2">
          <i className="size-2 rounded-full bg-[#4bb987]" />
          Operação conectada
        </span>

        <span>Indicadores consolidados</span>
      </div>
    </div>
  );
}