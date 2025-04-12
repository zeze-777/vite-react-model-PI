//import React, { useState } from 'react';

import { useState } from "react";

// Definindo o tipo do Pedido
type Pedido = {
  id: string;
  mesa: string;
  produto: string;
  status: string;
};

// Componente do Modal
const Modal = ({
  pedido,
  onClose,
}: {
  pedido: Pedido | null;
  onClose: () => void;
}) => {
  if (!pedido) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
          color: '#333333',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3 style={{ marginBottom: '15px', color: '#C9A33C' }}>Detalhes do Pedido</h3>
        <p><strong>ID:</strong> {pedido.id || '---'}</p>
        <p><strong>Mesa:</strong> {pedido.mesa || '---'}</p>
        <p><strong>Produto:</strong> {pedido.produto || '---'}</p>
        <p><strong>Status:</strong> {pedido.status || '---'}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#C9A33C',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

// Componente da Tabela
const Tabela = () => {
  const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);

  const linhasVazias: Pedido[] = Array.from({ length: 10 }, (_, index) => ({
    id: `PD-${index + 1}`,
    mesa: `M-${index + 1}`,
    produto: '',
    status: '',
  }));

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", width: '100%' }}>
      <h2 style={{ marginLeft: '120px', color: '#333333' }}>Pedidos</h2>
      <table
        style={{
          width: '85%',
          margin: '20px auto',
          borderCollapse: 'collapse',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <thead
          style={{
            backgroundColor: '#EDE9E3',
            color: '#333',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          <tr>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>ID Pedido</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Mesa</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Produto</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '12px 15px', textAlign: 'center', width: '150px'}}>Detalhes do Pedido</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#ffffff', color: '#333333', fontSize: '14px' }}>
          {linhasVazias.map((linha, index) => (
            <tr key={index}>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ccc' }}>{linha.id}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ccc' }}>{linha.mesa}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ccc' }}>{linha.produto || '---'}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ccc' }}>{linha.status || '---'}</td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
                <button
                  onClick={() => setPedidoSelecionado(linha)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '50px',
                    backgroundColor: '#C9A33C',
                    color: 'white',
                    border: 'none',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  Ver Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal pedido={pedidoSelecionado} onClose={() => setPedidoSelecionado(null)} />
    </div>
  );
};

// Componente principal
export function Pedidos() {
  return (
    <div
      style={{
        backgroundColor: '#FDFBF6',
        minHeight: '100vh',
        padding: '30px 0',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1
        style={{
          color: '#D2691E',
          fontFamily: "'Brush Script MT', cursive",
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Pedrão Restaurante & Grill
      </h1>
      <Tabela />
    </div>
  );
}
