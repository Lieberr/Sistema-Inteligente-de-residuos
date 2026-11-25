import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

import { AuthBrand } from "./AuthBrand";
import { InstitutionalPanel } from "./InstituionalPanel";

export function AuthShell({
  children,
  institutional = false,
}: {
  children: ReactNode;
  institutional?: boolean;
}) {
  return (
    <main
      className={`
        grid min-h-[100dvh] w-full grid-cols-1 overflow-x-hidden
        bg-[#f5f7f6] text-[#202925]
        ${institutional ? "min-[901px]:grid-cols-2" : ""}
      `}
    >
      {institutional && <InstitutionalPanel />}

      <section className="relative flex min-h-[100dvh] min-w-0 flex-col items-center justify-center bg-white px-[18px] pb-10 pt-[78px] sm:px-8 sm:pb-16 sm:pt-24 min-[601px]:bg-[#f5f7f6] min-[901px]:px-[clamp(36px,5vw,80px)] min-[901px]:py-12">
        {/* Marca para dispositivos menores */}
        <div className="absolute left-[18px] top-5 z-10 sm:left-8 sm:top-6 min-[901px]:hidden">
          <AuthBrand />
        </div>

        {/* Conteúdo da autenticação */}
        <div className="flex w-full flex-col items-center">
          {children}
        </div>

        {/* Aviso do ambiente demonstrativo */}
        <div className="relative mt-6 flex max-w-[560px] items-center justify-center gap-2 text-center text-[10px] leading-relaxed text-[#7b8580] min-[901px]:absolute min-[901px]:bottom-5 min-[901px]:left-1/2 min-[901px]:mt-0 min-[901px]:-translate-x-1/2 min-[901px]:whitespace-nowrap">
          <Icon name="check" size={14} />

          <span>
            Ambiente demonstrativo conectado ao Payload. Dados operacionais
            permanecem fictícios.
          </span>
        </div>
      </section>
    </main>
  );
}