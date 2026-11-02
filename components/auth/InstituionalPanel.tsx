import { AuthBrand } from "./AuthBrand";
import { EcoVisual } from "./EcoVisual";

export function InstitutionalPanel() {
  return (
    <section className="auth-institutional">
      <AuthBrand dark />
      <div className="institutional-copy">
        <span>GESTÃO AMBIENTAL INTEGRADA</span>
        <strong>Dados claros para uma operação mais sustentável.</strong>
        <p>Centralize suas operações, acompanhe seus indicadores e transforme dados em decisões mais sustentáveis.</p>
      </div>
      <EcoVisual />
      <div className="institutional-foot">EcoTrack · Tecnologia para operações ambientais responsáveis</div>
    </section>
  );
}