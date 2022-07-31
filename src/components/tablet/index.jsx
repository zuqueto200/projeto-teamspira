import React from "react";
import "./index.css";
import tablet from "../../assets/img/img (17).png";
 
export function Tablet() {
  return (
    <div className="divTablet0">
      <p className="pTablet1">
        Organize e proteja o seu tempo de trabalho para uma vida melhor.
      </p>

      <p className="pTablet3">
        <strong>Período de foco.</strong> Mude seus hábitos e encontre
        equilíbrio com o Viva Insights e o MyAnalytics.
      </p>

      <div className="divTablet1">
        <div className="d-flex align-items-end">
          <img className="imgTablet" src={tablet} alt="tablet" />
        </div>
        <div className="d-flex align-items-start">
          <p className="pTablet2">
            <strong>Período de foco.</strong> Mude seus hábitos e encontre
            equilíbrio com o Viva Insights e o MyAnalytics.
          </p>
        </div>
      </div>
    </div>
  );
}
