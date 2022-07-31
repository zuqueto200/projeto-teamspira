import React from "react";
import "./index.css";
import BarraDesk from "../../assets/img/barraDesk.png";
import BarraMobile from "../../assets/img/barraMobile.png";

export function BarraComprar() {
  return (
    <div className="divBarraComprar0">
      <img className="barraCompraDesk" src={BarraDesk} alt="barra valor" />
      <img className="barraCompraMobile " src={BarraMobile} alt="barra valor" />
    </div>
  );
}
