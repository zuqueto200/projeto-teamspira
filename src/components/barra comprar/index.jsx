import React, { useEffect, useState } from "react";
import "./index.css";
import BarraDesk from "../../assets/img/barraDesk.png";
import BarraMobile from "../../assets/img/barraMobile.png";

export function BarraComprar() {

 


  const [scrollPosition, setScrollPosition] = useState(false);
 
    
    useEffect(() => {

      window.addEventListener('scroll', ()=>window.pageYOffset > 2700 && setScrollPosition(true)); 
     
    }, []);
    
    
    
    
    return ( 
      
      <a href="https://cursos.solotecnologia.com.br/checkout/bdn6kx">

 


      <div className={scrollPosition ? "divBarraComprar0" : ''}  >
        <img className="barraCompraDesk" src={BarraDesk} alt="barra valor" />
        <img
          className="barraCompraMobile "
          src={BarraMobile}
          alt="barra valor"
        />
      </div> 
    </a>
    
  );
}
