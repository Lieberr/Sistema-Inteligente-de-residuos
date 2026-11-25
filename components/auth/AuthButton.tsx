import type { ReactNode } from "react";

type AuthButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
};

export function AuthButton({
  children,
  onClick,
  loading = false,
  secondary = false,
  disabled = false,
  type = "button",
}: AuthButtonProps) {
  const baseStyles =
    "inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#cce5d9] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

  const variantStyles = secondary
    ? "border-[#ccd6d0] bg-white text-[#202925] hover:bg-[#f7f9f8]"
    : "border-[#176b4d] bg-[#176b4d] text-white hover:border-[#115b40] hover:bg-[#115b40]";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles}`}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
        />
      )}

      {loading ? "Processando..." : children}
    </button>
  );
}