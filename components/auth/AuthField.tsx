import type { ReactNode } from "react";

type AuthFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
  action?: ReactNode;
};

export function AuthField({ label, value, onChange, type = "text", placeholder, error, optional, action }: AuthFieldProps) {
  return (
    <label className={`auth-field ${error ? "has-error" : ""}`}>
      <span>
        {label}
        {optional && <em>Opcional</em>}
      </span>
      <div className="auth-input-wrap">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
        />
        {action}
      </div>
      {error && <small>{error}</small>}
    </label>
  );
}