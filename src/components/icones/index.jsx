import React from "react";
import "./index.css";
import imgIcones from "../../assets/img/img (8).png";
import imgIconesCirculo from "../../assets/img/img (30).png";

export function Icones() {
  return (
    <div className="divIcones0">
      <p className="pIcones1">
        Você tem impressão que não usa nem 10% do que o Microsoft 365 oferece?
      </p>

      <div className="bannerFundo">
        <img className="iconesBanner" src={imgIcones} alt="icones microsoft" />
        <img
          className="iconesBannerCirculo"
          src={imgIconesCirculo}
          alt="icones microsoft"
        />

        <p className="pIcones2">
          A gente mostra como esses apps juntos podem transformar seus hábitos
          de comunicação com a sua equipe.
        </p>
      </div>
    </div>
  );
}
