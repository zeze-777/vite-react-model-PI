//import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate para navegação
import logo from '../../../assets/logo_pedrao_vazado.png';
import './home.css';

export const Home = () => {
  const navigate = useNavigate(); // Inicializando o hook de navegação

  // Função para redirecionar para a página de login (Painel Cozinha)
  const goToLogin = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src={logo} alt="Logo do Restaurante" className="logo" />
      </div>
      <div className="buttons-container">
        <button className="home-button" onClick={goToLogin}>Painel Cozinha</button>
        <button className="home-button">Painel Caixa</button> {/* Sem funcionalidade */}
      </div>
    </div>
  );
};

