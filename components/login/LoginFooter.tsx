export function LoginFooter({ onRequestAccess }: { onRequestAccess: () => void }) {
  return (
    <div className="auth-card-foot">
      Sua empresa ainda nÃ£o utiliza o EcoTrack?{" "}
      <button type="button" className="auth-link" onClick={onRequestAccess}>
        Solicitar acesso
      </button>
    </div>
  );
}