"use client";

import { useState, type FormEvent } from "react";

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

export function LoginScreen({
  navigate,
}: {
  navigate: (page: AuthPage) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);

  const [errors, setErrors] = useState<LoginErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateLogin(email, password);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Integre aqui a chamada de autenticação da sua API.
  };

  return (
    <AuthShell institutional>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="
          w-full max-w-[560px] px-0 py-6
          min-[601px]:rounded-[14px]
          min-[601px]:border min-[601px]:border-[#e0e6e2]
          min-[601px]:bg-white
          min-[601px]:p-8
          min-[601px]:shadow-[0_12px_36px_rgba(18,38,31,0.07)]
          min-[901px]:p-[clamp(36px,4vw,58px)]
        "
      >
        <LoginHeading />

        <div className="flex flex-col gap-[18px] sm:gap-5">
          {/* Erro de autenticação */}
          {errors.credentials && (
            <CredentialsError message={errors.credentials} />
          )}

          {/* E-mail */}
          <AuthField
            label="E-mail corporativo"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="nome@empresa.com.br"
            error={errors.email}
          />

          {/* Senha */}
          <AuthField
            label="Senha"
            type={show ? "text" : "password"}
            value={password}
            onChange={setPassword}
            placeholder="Digite sua senha"
            error={errors.password}
            action={
              <button
                type="button"
                onClick={() => setShow((value) => !value)}
                aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  rounded px-1.5 py-1
                  text-xs font-semibold
                  text-[#176b4d]
                  transition-colors
                  hover:text-[#115b40]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#2f9b70]
                "
              >
                {show ? "Ocultar" : "Mostrar"}
              </button>
            }
          />

          {/* Opções de acesso */}
          <LoginOptions
            remember={remember}
            onRememberChange={setRemember}
            onForgotPassword={() => navigate("recover")}
          />

          {/* Entrar */}
          <AuthButton type="submit">
            Entrar
          </AuthButton>

          {/* Informações demonstrativas */}
          <LoginDemoAccess />
        </div>

        {/* Solicitação de acesso */}
        <LoginFooter
          onRequestAccess={() => navigate("register")}
        />
      </form>
    </AuthShell>
  );
}