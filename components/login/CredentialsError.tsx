import { Icon } from "@/components/ui/Icon";

export function CredentialsError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-center gap-2 rounded-md border border-[#efd9d9] bg-[#fffafa] px-3 py-3 text-sm font-medium text-[#a83d3d]"
    >
      <Icon name="warning" size={16} />
      <span>{message}</span>
    </div>
  );
}