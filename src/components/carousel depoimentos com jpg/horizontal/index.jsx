import React, { useEffect, useRef } from "react";

import CarouselH from "react-elastic-carousel";
import { Fade, Zoom } from "react-reveal";
import imgDepoimentos1 from "../../../assets/img/1.png";
import imgDepoimentos2 from "../../../assets/img/2.png";
import imgDepoimentos3 from "../../../assets/img/3.png";
import imgDepoimentos4 from "../../../assets/img/4.png";
import imgDepoimentos5 from "../../../assets/img/5.png";
import imgDepoimentos6 from "../../../assets/img/6.png";
import imgDepoimentos7 from "../../../assets/img/7.png";
import "./index.css";

export function Horizontal() {
  
  const itemsPerPage = 1
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(7 / itemsPerPage)
  let resetTimeout;

  useEffect(() => {
    console.log( );
  }, []);

  return (
    <>
      <div className="divCarouselImage1">
        <Fade left>
          <p className="pCarouselDepoimentosTela1">
            O que dizem dos nossos treinamentos
          </p>
        </Fade>
        <Fade right>
          <p className="pCarouselDepoimentosTela2">
            O Teamspira e os treinamentos in company da Solo capacitam pessoas e
            equipes que utilizam o Teams e o Microsoft 365 como ferramentas de
            comunicação e colaboração. Treinamos times e organizações de forma
            100% remota em todo o Brasil.
          </p>
        </Fade>
      </div>


      <CarouselH
    ref={carouselRef}
    preventDefaultTouchmoveEvent={true}

    showArrows={false}
    enableAutoPlay
    autoPlaySpeed={5000} // same time
    onNextEnd={({ index }) => {
         clearTimeout(resetTimeout)
         if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
               carouselRef.current.goTo(0)
           }, 5000) // same time
         }
    }}
    itemsToShow={itemsPerPage}
>


      {/* <CarouselH
        enableAutoPlay={true}
        autoPlaySpeed={50}
        showArrows={false}
        ref={ref}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
      > */}
        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel "
              src={imgDepoimentos1}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel"
              src={imgDepoimentos2}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel"
              src={imgDepoimentos3}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel"
              src={imgDepoimentos4}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel"
              src={imgDepoimentos5}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel"
              src={imgDepoimentos6}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div className="carouselDivLogoCliente">
            <img
              className="imgHorizontalCarousel"
              src={imgDepoimentos7}
              alt=""
            />
          </div>
        </Zoom>
      </CarouselH>
    </>
  );
}
