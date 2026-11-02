export function AuthBrand({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`auth-brand ${dark ? "dark" : ""}`}>
      <div className="auth-brand-mark">E</div>
      <div>
        <strong>EcoTrack</strong>
        <span>Gestão inteligente de resíduos</span>
      </div>
    </div>
  );
}