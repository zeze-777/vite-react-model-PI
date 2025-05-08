import { ModalProps} from "./types";
import { api } from "../../../lib/axios";


export const ModalOrders = ({ pedido, onClose }: ModalProps) => {
  if (!pedido) return null;

  const upStatus = async () => {

    let newStatus ='';

    if(pedido.status ==='Pendente'){      
      newStatus = 'Em Preparação'

    } else if(pedido.status ==='Em Preparação') {
        newStatus = 'Finalizado';
    }else{return ;}

    await api.post("/status", {
      Id: pedido.id,
      newStatus: newStatus
    });
    onClose();
    window.location.reload();
  };

  return (
    <div className="bd-modal">
      <div className="ct-modal">
        <h3>
          Detalhes do Pedido
        </h3>
        <p className="p-description p-ID"><strong>ID:</strong> {pedido.id}</p>
        <p className="p-description p-Mesa"><strong>Mesa:</strong> {pedido.table}</p>

        <div className="p-description p-order">
          <strong>Pedido:</strong>
          <ul className="listOrders" style={{ marginTop: "5px", paddingLeft: "20px" }}>
            {pedido.order.length > 0 ? (
              pedido.order.map((item, index) => (
                <li key={index}>
                  {item.item} ({item.quantity}:unid.)
                </li>
              ))
            ) : (<li>---</li>)}
          </ul>
        </div>
        <p className="p-description p-order">
          <strong>Status:</strong> {pedido.status}
        </p>

        <div className="ct-btn">
        {pedido.status !== 'Finalizado' && (
            <button className="btn-modal" onClick={upStatus}>
              {pedido.status === 'Pendente' && 'Preparar Pedido'}
              {pedido.status === 'Em Preparação' && 'Finalizar Pedido'}
            </button>
          )}
          <button className="btn-modal-Fechar" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};