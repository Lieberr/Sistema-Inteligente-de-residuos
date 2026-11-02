import type { ReactNode } from "react";
import {Icon} from '@/components/ui/Icon'
import { AuthBrand } from "./AuthBrand";
import { InstitutionalPanel } from "./InstituionalPanel";

export function AuthShell({ children, institutional = false }: { children: ReactNode; institutional?: boolean }) {
  return (
    <main className={`auth-shell ${institutional ? "with-institutional" : ""}`}>
      {institutional && <InstitutionalPanel />}
      <section className="auth-main">
        <div className="auth-mobile-brand">
          <AuthBrand />
        </div>
        {children}
        <div className="auth-prototype-note">
          <Icon name="check" size={13} />
          Ambiente demonstrativo conectado ao Payload. Dados operacionais permanecem fictÃcios.
        </div>
      </section>
    </main>
  );
}