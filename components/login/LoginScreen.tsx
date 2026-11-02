'use client'

import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "../auth/AuthShell";
import { AuthField } from "../auth/AuthField";
import { AuthButton } from "../auth/AuthButton";
import type { AuthPage } from "../auth/types";
import { CredentialsError } from "./CredentialsError";
import { LoginDemoAccess } from "./LoginDemoAccess";
import { LoginFooter } from "./LoginFooter";
import { LoginHeading } from "./LoginHeading";
import { LoginOptions } from "./LoginOptions";
import { validateLogin, type LoginErrors } from "./ValidateLogin";

export function LoginScreen({ navigate }: { navigate: (page: AuthPage) => void }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  

  return (
    <AuthShell institutional>
      <form className="auth-card login-card">
        <LoginHeading />
        <div className="auth-form">
          {errors.credentials && <CredentialsError message={errors.credentials} />}
          <AuthField
            label="E-mail corporativo"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="nome@empresa.com.br"
            error={errors.email}
          />
          <AuthField
            label="Senha"
            type={show ? "text" : "password"}
            value={password}
            onChange={setPassword}
            placeholder="Digite sua senha"
            error={errors.password}
            action={
              <button type="button" className="field-action" onClick={() => setShow((value) => !value)}>
                {show ? "Ocultar" : "Mostrar"}
              </button>
            }
          />
          <LoginOptions remember={remember} onRememberChange={setRemember} onForgotPassword={() => navigate("recover")} />
          <AuthButton type="submit" loading={loading}>
            Entrar
          </AuthButton>
          <LoginDemoAccess />
        </div>
        <LoginFooter onRequestAccess={() => navigate("register")} />
      </form>
    </AuthShell>
  );
}