import { Icon } from "@/components/ui/Icon";

export function EcoVisual() {
  return (
    <div className="eco-visual">
      <div className="eco-visual-head">
        <span>Visão operacional</span>
        <b>Ambiente monitorado</b>
      </div>
      <div className="eco-visual-metric">
        <Icon name="box" size={18} />
        <div>
          <span>Rastreabilidade</span>
          <strong>Da coleta à destinação</strong>
        </div>
      </div>
      <div className="eco-visual-route">
        <i />
        <i />
        <i />
        <b>
          <Icon name="truck" size={15} />
        </b>
      </div>
      <div className="eco-visual-foot">
        <span>
          <i />
          Operação conectada
        </span>
        <span>Indicadores consolidados</span>
      </div>
    </div>
  );
}