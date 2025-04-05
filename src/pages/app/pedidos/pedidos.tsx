import { useState } from 'react';

// Definição do tipo Pedido
type Pedido = {
  id: string;
  mesa: string;
  produto: string;
  status: string;
};

const Modal = ({ pedido, onClose }: { pedido: Pedido | null; onClose: () => void }) => {
  if (!pedido) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: '#2C2C2C',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)'
      }}>
        <h3>Detalhes do Pedido</h3>
        <p><strong>ID:</strong> {pedido.id || '---'}</p>
        <p><strong>Mesa:</strong> {pedido.mesa || '---'}</p>
        <p><strong>Produto:</strong> {pedido.produto || '---'}</p>
        <p><strong>Status:</strong> {pedido.status || '---'}</p>
        <button onClick={onClose} style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#5E2A37',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>Fechar</button>
      </div>
    </div>
  );
};

const Tabela = () => {
  const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
  
  const linhasVazias: Pedido[] = new Array(10).fill({
    id: '',
    mesa: '',
    produto: '',
    status: '',
  });

  return (
    <div className="tabela-container" style={{ fontFamily: "'Inter, sans-serif" }}>
    <h2 style={{marginLeft: '120px', color: '#D1D1D1'}}>Pedidos</h2>
      <table style={{ width: '85%', margin: '20px auto', borderCollapse: 'collapse', borderRadius: '8px', boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#2C2C2C', color: '#fff', fontSize: '16px', fontWeight: '600' }}>
          <tr>
            <th style={{ width: '300px', padding: '12px 15px', borderBottom: '1px solid #444', textAlign: 'left' }}>ID Pedido</th>
            <th style={{ width: '300px', padding: '12px 15px', borderBottom: '1px solid #444', textAlign: 'left' }}>Mesa</th>
            <th style={{ width: '600px', padding: '12px 15px', borderBottom: '1px solid #444', textAlign: 'left' }}>Produto</th>
            <th style={{ width: '400px', padding: '12px 15px', borderBottom: '1px solid #444', textAlign: 'left' }}>Status</th>
            <th style={{ textAlign: 'center' }}>Detalhes do Pedido</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#2C2C2C', color: '#333', fontSize: '14px' }}>
          {linhasVazias.map((linha, index) => (
            <tr key={index}>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #444' }}>{linha.id || '---'}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #444' }}>{linha.mesa || '---'}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #444' }}>{linha.produto || '---'}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #444' }}>{linha.status || '---'}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #444', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setPedidoSelecionado(linha)} style={{ width: '75px', height: '30px', borderRadius: '50px', backgroundColor: '#5E2A37', color: 'white', border: 'none', fontSize: '10px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Ver Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pedidoSelecionado && <Modal pedido={pedidoSelecionado} onClose={() => setPedidoSelecionado(null)} />}
    </div>
  );
};



export function Pedidos() {
  return (
    <div style={{ backgroundColor: '#181818', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#DC143C', fontFamily: "'Brush Script MT', cursive" }}>Pedrão Restaurante & Grill</h1>
      <Tabela />
    </div>
  );
}
