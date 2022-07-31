import React from "react";

import CarouselH from "react-elastic-carousel";
import imgCarousel1 from "../../../assets/img/logoClientesCarousel.jpg";
import "./index.css";

export function Horizontal() {
  const breakPointsH = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 1.5 },
    { width: 600, itemsToShow: 1.5, itemsToScroll: 1, pagination: false },
    { width: 900, itemsToShow: 1.5, itemsToScroll: 2 },
    { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 2 },
    { width: 1750, itemsToShow: 2.5 },
  ];

  return (
    <>
      <div className="divCarouselImage1">
        <p className="pCarouselDepoimentosTela1">
          O que dizem dos nossos treinamentos.
        </p>
        <p className="pCarouselDepoimentosTela2">
          O Teamspira e os treinamentos in company da Solo capacitam pessoas e
          equipes que utilizam o Teams e o Microsoft 365 como ferramentas de
          comunicação e colaboração. Treinamos times e organizações de forma
          100% remota em todo o Brasil.
        </p>
      </div>

      <CarouselH breakPoints={breakPointsH}>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel " src={imgCarousel1} alt="" />
        </div>

        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgCarousel1} alt="" />
        </div>

        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgCarousel1} alt="" />
        </div>

        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgCarousel1} alt="" />
        </div>
      </CarouselH>
    </>
  );
}
