import React from "react";
import "./index.css";
import tablet from "../../assets/img/img (17).png";
import { Fade } from "react-reveal";
 
export function Tablet() {
  return (
    <div className="divTablet0">
      <Fade left>

      <p className="pTablet1">
        Organize e proteja o seu tempo de trabalho para uma vida melhor.
      </p>
      </Fade>

        <Fade right>
      <p className="pTablet3">
        <strong>Período de foco.</strong> Mude seus hábitos e encontre
        equilíbrio com o Viva Insights e o MyAnalytics.
      </p>
        </Fade>

      <div className="divTablet1">
        <Fade left>

        <div className="d-flex align-items-end">
          <img className="imgTablet" src={tablet} alt="tablet" />
        </div>
        </Fade>
        <div className="d-flex align-items-start">
        <Fade right>

          <p className="pTablet2">
            <strong>Período de foco.</strong> Mude seus hábitos e encontre
            equilíbrio com o Viva Insights e o MyAnalytics.
          </p>
        </Fade>
        </div>
      </div>
    </div>
  );
}
