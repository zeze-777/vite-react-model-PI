import { TableData } from "./types";
import { api } from "../../../lib/axios";

interface ModalProps {
  pedido: TableData | null;
  onClose: () => void;
}

export const Modal = ({ pedido, onClose }: ModalProps) => {
  if (!pedido) return null;

  const upStatus = async () => {
    await api.post("/status", {
      Id: pedido.id,
      newStatus: "Em Preparação",
    });

    onClose();
    window.location.reload();
  };

  return (
    <div className="bd-modal">
      <div className="ct-modal">
        <h3 style={{ marginBottom: "14px", color: "#C9A33C" }}>
          Detalhes do Pedido
        </h3>
        <p className="p-description"><strong>ID:</strong> {pedido.id}</p>
        <p className="p-description"><strong>Mesa:</strong> {pedido.table}</p>

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
          <button className="btn-modal" onClick={upStatus}>{pedido.status}</button>
          <button className="btn-modal" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};