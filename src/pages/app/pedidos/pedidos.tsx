//import React, { useState } from 'react';

import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { TableData } from "./types";
import { Modal } from "./modalPedidos";
import './pedios.css'


const Tabela = () => {
  const [pedidoSelecionado, setPedidoSelecionado] = useState<TableData | null>(null);
  const [excluiPedidos, setExcluiPedidos] = useState<TableData>(null);
  const [dados, setDados] = useState<TableData[]>([]);

  useEffect(() => {
    const fetchTables = async () => {
       
        const response = await api.get('/pytable');
        setDados(response.data.pyTable);      
    };

    fetchTables();
  }, []);
  
 
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", width: '100%' }}>
      <h2 style={{ marginLeft: '120px', color: '#333333' }}>Pedidos</h2>
      <table className="ct-table">
        <thead>
          <tr>
            <th>Data Pedido</th>
            <th>Hora Pedido</th>
            <th>ID Pedido</th>
            <th >Mesa</th>
            <th>Garçon</th>
            <th>Status</th>
            <th style={{ }}>Detalhes do Pedido</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado, index) => (
            <tr key={index}>
              <td>{new Date(dado.createdAt).toLocaleDateString('pt-BR')}</td>
              <td>{new Date(dado.createdAt).toLocaleTimeString('pt-BR')}</td>
              <td>PD-{dado.id}</td>
              <td>{dado.table}</td>
              <td>{ dado.waiter}</td>
              <td>{dado.status || '---'}</td>
              <td className="td-btn">
                <button className="ct-btn-table" onClick={() => setPedidoSelecionado(dado)}>
                  Ver Detalhes
                </button>
                <button className="ct-btn-table btn-del" onClick={() => setExcluiPedidos(dado)}><img src="./src/assets/lixeira.png" alt="Deletar" style={{ width: '20px', height: '20px', marginRight: '8px' }} />Excluir Pedido</button>
              </td>
            </tr>
          ))} 
        </tbody>      
      </table>
      <Modal pedido={pedidoSelecionado} onClose={() => setPedidoSelecionado(null)} />
    </div>
  );
};

export function Pedidos() {
  return (
    <div className="container-table">
      <h1 className="title-table">
        Pedrão Restaurante & Grill
      </h1>
      <Tabela />
    </div>
  );
}
