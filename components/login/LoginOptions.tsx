import { Icon } from "@/components/ui/Icon";

type LoginOptionsProps = {
  remember: boolean;
  onRememberChange: (value: boolean) => void;
  onForgotPassword: () => void;
};

export function LoginOptions({ remember, onRememberChange, onForgotPassword }: LoginOptionsProps) {
  return (
    <div className="auth-options">
      <label className="auth-check">
        <input type="checkbox" checked={remember} onChange={(event) => onRememberChange(event.target.checked)} />
        <i>
          <Icon name="check" size={11} />
        </i>
        <span>Manter conectado</span>
      </label>
      <button type="button" className="auth-link" onClick={onForgotPassword}>
        Esqueci minha senha
      </button>
    </div>
  );
}