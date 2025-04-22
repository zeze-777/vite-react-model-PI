import { ModalProps} from "./types";
import { api } from "../../../lib/axios";


export const DelOrdersModal = ({ pedido, onClose }: ModalProps) => {
  if (!pedido) return null;

  const upStatus = async () => {
    await api.delete("/del-order", {
      data: {
        id: pedido.id,
        table:pedido.table
      }
    });
    onClose();
    window.location.reload();
  };
  return (
    <div className="bd-modal">
      <div className="ct-modal">
        <h3>
          Exclusão De Pedidos
        </h3>
        <p className="p-description"><strong>ID:</strong> {pedido.id}</p>
        <p className="p-description"><strong>Mesa:</strong> {pedido.table}</p>
        <div className="p-description p-order">
          <p className="listOrders delOrders" style={{ marginTop: "5px", paddingLeft: "20px" }}>
            Tem Certeza que deseja Excluir o pedido?
          </p>
        </div>
        <div className="ct-btn">
          <button className="btn-modal btn-delModal" onClick={upStatus}>Excluir</button>
          <button className="btn-modal btn-fechar" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};