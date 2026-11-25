import { Icon } from "@/components/ui/Icon";

type LoginOptionsProps = {
  remember: boolean;
  onRememberChange: (value: boolean) => void;
  onForgotPassword: () => void;
};

export function LoginOptions({
  remember,
  onRememberChange,
  onForgotPassword,
}: LoginOptionsProps) {
  return (
    <div className="flex flex-col gap-3 min-[421px]:flex-row min-[421px]:items-center min-[421px]:justify-between">
      <label className="group flex cursor-pointer items-center gap-2.5 text-xs text-[#56625c]">
        <input
          type="checkbox"
          checked={remember}
          onChange={(event) => onRememberChange(event.target.checked)}
          className="peer sr-only"
        />

        <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border border-[#cbd5cf] bg-white text-transparent transition-all peer-checked:border-[#176b4d] peer-checked:bg-[#176b4d] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-[#d9eee5]">
          <Icon name="check" size={12} />
        </span>

        <span>Manter conectado</span>
      </label>

      <button
        type="button"
        onClick={onForgotPassword}
        className="self-start text-xs font-semibold text-[#176b4d] transition-colors hover:text-[#115b40] hover:underline min-[421px]:self-auto"
      >
        Esqueci minha senha
      </button>
    </div>
  );
}