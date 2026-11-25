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

export function AuthField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  optional,
  action,
}: AuthFieldProps) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold text-[#3d4943]">
      <span className="flex items-center justify-between gap-2">
        {label}

        {optional && (
          <em className="text-[10px] font-normal not-italic text-[#8a958f]">
            Opcional
          </em>
        )}
      </span>

      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          className={`
            h-[52px] w-full rounded-md border bg-white px-4 text-sm font-medium
            text-[#202925] outline-none transition-all duration-200
            placeholder:font-normal placeholder:text-[#a1aaa5]
            focus:border-[#338765] focus:ring-4 focus:ring-[#e8f3ee]
            ${action ? "pr-20" : ""}
            ${
              error
                ? "border-[#b95050] bg-[#fffafa]"
                : "border-[#d9e0dc]"
            }
          `}
        />

        {action}
      </div>

      {error && (
        <small className="text-[11px] font-medium leading-relaxed text-[#a83d3d]">
          {error}
        </small>
      )}
    </label>
  );
}