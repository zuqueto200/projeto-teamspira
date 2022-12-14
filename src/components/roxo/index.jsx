import React from "react";
import "./index.css";
import Cverde from "../../assets/img/img (11).png";
import DetalheVermelho from "../../assets/img/img (15).png";
import Skate from "../../assets/img/img (14).png";
import LogoSolo from "../../assets/img/img (1).png";
import Pulse from "react-reveal/Pulse";
import { Bounce, Rotate } from "react-reveal";

export function Roxo() {
  return (
    <div className="divRoxo0">
      <p className="pRoxo1">Pra quem é este curso</p>
      <p className="pRoxo1-1">
        Equipes ou pessoas que queiram melhorar a{" "}
        <span className="pRoxoVerde">qualidade da comunicação</span> no seu
        ambiente de trabalho.
      </p>
      <p className="pRoxo2 mb-5">E imprescindível para:</p>

      <div className="divContainerRoxo">
        <Bounce>
          <div className="divRoxo margemX ">
            <p className="pRoxo">
              Quem trabalha diretamente com{" "}
              <span className="pRoxoVerde">comunicação nas empresas.</span>
            </p>
          </div>
        </Bounce>
        <Bounce>
          <div className="divRoxo margemX margemY">
            <p className="pRoxo">
              Para líderes de{" "}
              <span className="pRoxoVerde">equipes remotas e distribuídas.</span>
            </p>
          </div>
        </Bounce>
        <Bounce>
          <div className="divRoxo margemX ">
            <p className="pRoxo">
              Pessoas envolvidas em{" "}
              <span className="pRoxoVerde">
                projetos de transformação digital.
              </span>
            </p>
          </div>
        </Bounce>
        <Bounce>
          <div className="divRoxo margemX margemY">
            <p className="pRoxo">
              Profissionais de RH que{" "}
              <span className="pRoxoVerde m">
                trabalham com onboarding e cultura.
              </span>
            </p>
          </div>
        </Bounce>
      </div>

      <div className="divBranco">
        <img className="cVerde" src={Cverde} alt="" />

        <img className="detalheVermelho" src={DetalheVermelho} alt="" />
        <Pulse>
          <p className="pSolo">Quem é a Solo?</p>
          <p className="pSoloText">
            A Solo atua no mercado de ITSM desde 2007.
            <br />
            <strong>
              Nosso propósito é reunir tecnologia, pessoas e cultura para
              construir espaços de trabalho modernos e mais flexíveis.{" "}
            </strong>
          </p>
        </Pulse>

        <img className="skate" src={Skate} alt="" />
        <Rotate>
          <img className="logoSolo" width={84} src={LogoSolo} alt="" />
        </Rotate>
        <p className="pSoloContato m-0 mt-4">
          <strong>Contato:</strong>
        </p>
        <a href="mailto:minuteams@solo.st" className="pSoloContatoEmail mb-5">
          minuteams@solo.st
        </a>
      </div>
    </div>
  );
}
