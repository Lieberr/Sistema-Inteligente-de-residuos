import { Icon } from "@/components/ui/Icon";

export function CredentialsError({ message }: { message: string }) {
  return (
    <div className="auth-credentials-error">
      <Icon name="warning" size={14} />
      {message}
    </div>
  );
}