export function LoginDemoAccess() {
  return (
    <div className="login-demo-access">
      <strong>Acessos empresariais separados</strong>
      <span>Gestor, Operador e Consulta utilizam credenciais individuais.</span>
      <span>Senhas e tokens nunca são exibidos nesta interface.</span>
      <span>A administração global permanece separada em /admin.</span>
    </div>
  );
}