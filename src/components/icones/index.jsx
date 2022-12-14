import React, { useEffect, useRef } from "react";
import "./index.css";
import imgIcones from "../../assets/img/img (8).png";
import imgMobile from "../../assets/img/Apps-Mobile.png";
import { Fade, Flip } from "react-reveal";
import { BarraComprar } from "../barra comprar";

export function Icones() {

 

  return (
    <div className="divIcones0">
      <Flip bottom>
        <p className="pIcones1">
          Você tem impressão que não usa nem 10% do que o Microsoft 365 oferece?
        </p>
      </Flip>

      <div className="bannerFundo" >
        <img className="iconesBanner" src={imgIcones} alt="icones microsoft" />
        <img
          className="iconesBannerCirculo"
          src={imgMobile}
          alt="icones microsoft"
        />
        <Fade bottom>
          <p className="pIcones2">
            A gente mostra como esses apps juntos podem transformar seus hábitos
            de comunicação com a sua equipe.
          </p>
        </Fade>
      </div>
    
    </div>
  );
}
