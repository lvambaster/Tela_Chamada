import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import img_1 from './img_1.png';
import img_2 from './img_2.png';
import img_3 from './img_3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function View() {
  const [saveValue, setSaveValue] = useState([]);
  const [removedName, setRemovedName] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [timerWidth, setTimerWidth] = useState(100);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // Função para atualizar a lista de clientes ao verificar mudanças no localStorage
  useEffect(() => {
    const updateList = () => {
      const savedData = JSON.parse(localStorage.getItem('cliente')) || [];
      setSaveValue(savedData);
  
      const removedData = localStorage.getItem('removedName');
      if (removedData) {
        setRemovedName(removedData); // Atualiza o nome exibido
      }
  
      const trigger = localStorage.getItem('triggerAnimation');
      if (trigger === 'true') {
        setShowAnimation(true);
        localStorage.removeItem('triggerAnimation');

        // Iniciar barra de tempo e desabilitar remoção
        localStorage.setItem('disableRemove', 'true');
        let width = 100;
        const interval = setInterval(() => {
          width -= 1.43;
          setTimerWidth(width);
        }, 100); // Reduzir a cada 100ms

        setTimeout(() => {
          clearInterval(interval);
          setShowAnimation(false);
          localStorage.setItem('disableRemove', 'false'); // Habilitar remoção
          setTimerWidth(100); // Resetar barra
        }, 7000); // Exibir por 10 segundos
      }
    };
  
    updateList();
    const interval = setInterval(updateList, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {showAnimation && (
        <div className="fixed-animation">
          <div className="timer-bar" style={{ width: `${timerWidth}%` }} />
          <h1 className="animation-text">
            <div>FICOU PRONTO</div>
            {removedName}
          </h1>
        </div>
      )}

      <div className="divlogo">
        <img src={logo} className="imglogo" alt='logo'/>
      </div>

      <div className='container_2'>
        <div className='section_2'>
          <h1 className='prepapedido'>PREPARANDO PEDIDO</h1>
          <ul className='lista'>
            {saveValue.map((cliente) => (
              <li key={cliente.id}>{cliente.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='container_1'>
        <div className='section_1'>
          <h1>SEU PEDIDO ESTÁ PRONTO</h1>
          <h1 className='nome'>{removedName ? removedName : ""}</h1>
        </div>
      </div>

      <div>
        <div style={{ width: "30%", margin: "0 auto" }} className='container'>
          <Slider {...settings}>
            <div className='divimg1'>
              <img src={img_1} alt="Imagem 1" style={{ width: "100%" }} className='img1' />
            </div>
            <div className='divimg2'>
              <img src={img_2} alt="Imagem 2" style={{ width: "100%" }} className='img2' />
            </div>
            <div className='divimg3'>
              <img src={img_3} alt="Imagem 3" style={{ width: "100%" }} className='img3' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default View;