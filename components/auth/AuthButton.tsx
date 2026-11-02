import type { ReactNode } from "react";

type AuthButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
};

export function AuthButton({ children, onClick, loading = false, secondary = false, disabled = false, type = "button" }: AuthButtonProps) {
  return (
    <button type={type} className={`auth-button ${secondary ? "secondary" : ""}`} disabled={disabled || loading} onClick={onClick}>
      {loading && <i />}
      {loading ? "Processando..." : children}
    </button>
  );
}