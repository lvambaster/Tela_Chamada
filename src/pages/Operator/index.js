import React, { useState, useEffect } from "react";
import './style.css';

function Operator() {
  const [lançar, setLançar] = useState('');
  const [saveValue, setSaveValue] = useState([]);

  // Carregar dados do localStorage ao montar o componente
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('cliente')) || [];
    setSaveValue(savedData);
  }, []);

  // Adicionar novo cliente ao estado e localStorage
  const handleLocalStorage = () => {
    if (lançar.trim() !== '') {
      const newEntry = { id: Date.now(), name: lançar }; // Criar um objeto único para cada entrada
      const newValue = [...saveValue, newEntry];
      setSaveValue(newValue);
      localStorage.setItem('cliente', JSON.stringify(newValue));
      setLançar('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleLocalStorage();
    }
  };

  // Remover cliente e salvar o nome removido no localStorage
  const handleRemove = (id, name) => {
    const updatedValue = saveValue.filter((item) => item.id !== id); // Remover pelo ID
    setSaveValue(updatedValue);
    localStorage.setItem('cliente', JSON.stringify(updatedValue));

    // Salvar o nome removido para a página View
    localStorage.setItem('removedName', name);

    // Definir indicador de animação
    localStorage.setItem('triggerAnimation', 'true');
  };

  return (
    <div className="containerfundo">
      <div className="painelcontainer">
        <div className="divpainel">
          <section className="lançador">
            <h1>PAINEL DE CONTROLE</h1>
            <label>Preparando Pedido</label>
            <input
              placeholder="Digite o nome do pedido"
              value={lançar}
              onKeyDown={handleEnter}
              onChange={(e) => setLançar(e.target.value)}
            />
            <button onClick={handleLocalStorage}>Lançar</button>
          </section>
        </div>
        <div>
          <section className="lisoperator">
            <h1>PREPARANDO PEDIDO</h1>
            <ul className="prepalist">
              {saveValue.map((cliente) => (
                <li className="lista" key={cliente.id}>
                  {cliente.name}
                  <button onClick={() => handleRemove(cliente.id, cliente.name)}>OK!</button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Operator;
