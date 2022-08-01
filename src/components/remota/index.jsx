import React from "react";
import "./index.css";
import remoto1 from "../../assets/img/img (4).png";
import remoto2 from "../../assets/img/img (3).png";
import remoto3 from "../../assets/img/img (2).png";
import remoto4 from "../../assets/img/img (20).png";
import { Fade } from "react-reveal";

export function Remota() {
  return (
    <div className="divRemota0">
      <Fade left>
        <p className="pRemoto1">
          Conheça novos recursos de comunicação enquanto aprende sobre cultura
          remota de trabalho
        </p>
      </Fade>
      <Fade right>
        <div className="divContainerRemoto">
          <div className="divRemotoCard mx-4 ">
            <img className="remotoCard" src={remoto1} alt="icones microsoft" />
            <p className="pRemoto">Menos E-mails e Whatsapp</p>
          </div>

          <div className="divRemotoCard mx-4 my-4">
            <img className="remotoCard" src={remoto2} alt="icones microsoft" />
            <p className="pRemoto">Menos reuniões</p>
          </div>

          <div className="divRemotoCard mx-4">
            <img className="remotoCard" src={remoto3} alt="icones microsoft" />
            <p className="pRemoto">
              Mais colaboração e conexão entre as pessoas
            </p>
          </div>

          <div className="divRemotoCard mx-4 my-4">
            <img className="remotoCard" src={remoto4} alt="icones microsoft" />
            <p className="pRemoto">
              Equilíbrio entre produtividade e bem-estar
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
