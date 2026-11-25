const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LoginErrors = Record<string, string>;

export function validateLogin(
  email: string,
  password: string
): LoginErrors {
  const errors: LoginErrors = {};

  if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Informe um e-mail corporativo válido.";
  }

  if (password.length < 8) {
    errors.password = "A senha deve ter pelo menos 8 caracteres.";
  }

  return errors;
}