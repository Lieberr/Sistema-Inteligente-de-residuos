export function LoginFooter({
  onRequestAccess,
}: {
  onRequestAccess: () => void;
}) {
  return (
    <div className="mt-6 border-t border-[var(--line)] pt-5 text-center text-xs text-[var(--muted)] max-[380px]:text-left">
      Sua empresa ainda não utiliza o EcoTrack?{" "}
      <button
        type="button"
        onClick={onRequestAccess}
        className="font-semibold text-[#176b4d] transition-colors hover:text-[#115b40] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f9b70] focus-visible:ring-offset-2"
      >
        Solicitar acesso
      </button>
    </div>
  );
}