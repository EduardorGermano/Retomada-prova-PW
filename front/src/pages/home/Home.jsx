import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { Router, useNavigate } from 'react-router-dom';




const Home = () => {
    const navigate = useNavigate();

    return(
        <div >
            <Header/>
            <div className="corpo">
                <h2>Ola você esta acessando esta pagina no dia</h2>
                <button className="botao-formulario" onClick={()=>(navigate("Calculadora"))} >Calculadora de Investimento</button>
            </div>
        </div>
    );
};

export default Home;