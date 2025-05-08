// Criando a Pagina de Login - Formulario

import { useState } from "react";
import { FaUser,FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { api } from "../../../lib/axios";
import logo from '../../../assets/logo_pedrao_vazado.png';
import "./login.css";


export function Login() {
        
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSumit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        
        const resp = await api.post('/login',{
            email: username,
            password: password
        });  
        
        if(resp.data.user.success === true){
            navigate('/pedidos');
        } else {
            navigate('*');
        }
    }

    return (
         
        <div className="container">
             <img src={logo} alt="Logo" className="logo" /> 
            <form onSubmit={handleSumit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>

                <div className='input-field'>
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                            Lembra de mim
                    </label>
                    <div>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
                <div className='error'></div>
            </form>
        </div>
    );   
}