export function LoginDemoAccess() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-[#d9e8e1] bg-[#f7fbf9] p-4">
      <strong className="text-xs font-semibold text-[#176b4d]">
        Acessos empresariais separados
      </strong>

      <span className="text-[11px] leading-relaxed text-[#69736d]">
        Gestor, Operador e Consulta utilizam credenciais individuais.
      </span>

      <span className="text-[11px] leading-relaxed text-[#69736d]">
        Senhas e tokens nunca são exibidos nesta interface.
      </span>

      <span className="text-[11px] leading-relaxed text-[#69736d]">
        A administração global permanece separada em /admin.
      </span>
    </div>
  );
}