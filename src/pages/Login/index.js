import React from "react";
import './index.css'
import logo from './logo.png';

function Log() {
  return (
    <div className="logsen">
     
        <div className="div1">
          <div className="container1">
            <h1>LOGIN</h1>
            
                  <label className="Login"> Usuario:<br/>
                    <input name="Login"
                    placeholder="Nome de Usuario ou Email"
                       /><br/>
                  </label>
            
                  <label className="Senha"> Senha:<br/>
                    <input
                    placeholder="Digite sua Senha"
                       /><br/><br/>
                  </label>
                     <div className="buttondiv" ><button className="buttonlogin">Acessar</button></div>
          </div>
        </div>
        <div className="div2">
            <img src={logo} className="imglogo" alt="logrede"/>
        </div>
      

            

    </div>
  );
}

export default Log;