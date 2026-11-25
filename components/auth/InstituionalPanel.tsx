import { AuthBrand } from "./AuthBrand";
import { EcoVisual } from "./EcoVisual";

export function InstitutionalPanel() {
  return (
    <section className="relative hidden min-h-[100dvh] flex-col overflow-hidden bg-[#10271f] p-[clamp(36px,5vw,84px)] text-white min-[901px]:flex">
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-48 size-[420px] rounded-full border border-[#71b99b]/10 shadow-[0_0_0_70px_rgba(113,185,155,0.025),0_0_0_140px_rgba(113,185,155,0.018)]"
      />

      {/* Identidade visual */}
      <AuthBrand dark />

      {/* Texto institucional */}
      <div className="relative z-10 mb-8 mt-auto max-w-[620px]">
        <span className="mb-4 block text-[10px] font-bold tracking-[0.15em] text-[#58bd91]">
          GESTÃO AMBIENTAL INTEGRADA
        </span>

        <h2 className="max-w-[600px] text-[clamp(35px,3.2vw,52px)] font-semibold leading-[1.15] tracking-[-0.035em]">
          Dados claros para uma operação mais sustentável.
        </h2>

        <p className="mt-5 max-w-[560px] text-[clamp(13px,1.05vw,16px)] leading-[1.7] text-[#a9beb5]">
          Centralize suas operações, acompanhe seus indicadores e transforme
          dados em decisões mais sustentáveis.
        </p>
      </div>

      {/* Visualização operacional */}
      <EcoVisual />

      {/* Rodapé institucional */}
      <div className="relative z-10 mt-auto pt-8 text-[10px] text-[#688579]">
        EcoTrack · Tecnologia para operações ambientais responsáveis
      </div>
    </section>
  );
}