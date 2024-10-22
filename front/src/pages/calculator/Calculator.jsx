import React, { useState } from "react";
import "./Calculator.css";
import Header from "../../components/header/Header";

const Calculator = () => {
    const [valorInicial, setValorInicial] = useState(0);
    const [prazo, setPrazo] = useState(0);
    const [juro, setJuro] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [calculos, setCalculos] = useState([]);

    const calcular = () => {
        let res = valorInicial * Math.pow((1 * juro / 100), prazo);
        setResultado(res);
        let novoIten = { id: calculos.length, valorInicial: valorInicial, prazo: prazo, juro: juro, final: res };
        setCalculos([...calculos, novoIten]);
    }

    return (
        <div>
            <Header label=" - Formulario" />
            <div className="corpo">
                <h2>Formulario</h2>
                <label>Valor Inicial</label>
                <input value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />
                <label>Prazo em Meses</label>
                <input value={prazo} onChange={(e) => setPrazo(e.target.value)} />
                <label>Juro Mensal</label>
                <input value={juro} onChange={(e) => setJuro(e.target.value)} />
                {resultado > 0 && <span>O valor final será de {resultado}</span>}
                <button className="botao-calcular" onClick={calcular}>Calcular</button>
                {calculos.length > 0 && <div> <table border='1'>
                    <thead>
                        <tr>
                            <th>
                                Valor Inicial
                            </th>
                            <th>
                                Prazo
                            </th>
                            <th>
                                Juro Mensal
                            </th>
                            <th>
                                Valor Final
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {calculos.map(calc => <tr key={calc.id}>
                            <td>
                                {calc.valorInicial}
                            </td>
                            <td>
                                {calc.prazo}
                            </td>
                            <td>
                                {calc.juro}
                            </td>
                            <td>
                                {calc.final}
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
                    <button className="botao-calcular" onClick={() => setCalculos([])}>Limpar</button>
                </div>}
            </div>
        </div>
    );

};

export default Calculator