import React, { useEffect, useState } from "react";
import "./index.css";
import BarraDesk from "../../assets/img/barraDesk.png";
import BarraMobile from "../../assets/img/barraMobile.png";
import { Fade } from "react-reveal";
var mobi = false;
var desk = false;

export function BarraComprar() {
  // const [mobi, setMobi] = useState(false);
  // const [desk, setDesk] = useState(false);

  function deskMobi(e) {
    if (e.target.scrollingElement.scrollTop > 1500) {
      document.querySelector(".mobimobi").classList.remove("sumir");
    }
    if (e.target.scrollingElement.scrollTop > 2000) {
      document.querySelector(".deskdesk").classList.remove("sumir");
    }

    // console.log(e.target.scrollingElement.scrollTop )
    // console.log(mobi)
  }

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      deskMobi(e);
    });
  }, [deskMobi]);

  return (
    <div className="mobiDesk ">
      <div className="deskdesk sumir">
        <a href="https://cursos.solotecnologia.com.br/checkout/bdn6kx">
          <Fade right>
            <img
              className="barraCompraDesk"
              src={BarraDesk}
              alt="barra valor"
            />
          </Fade>
        </a>
      </div>

      <div className="mobimobi sumir">
        <a href="https://cursos.solotecnologia.com.br/checkout/bdn6kx">
          <Fade right>
            <img
              className="barraCompraMobile "
              src={BarraMobile}
              alt="barra valor"
            />
          </Fade>
        </a>
      </div>
    </div>
  );
}
