import React, { useEffect } from "react";

import CarouselH from "react-elastic-carousel";
import { Fade, Zoom } from "react-reveal";
import imgDepoimentos1 from "../../../assets/img/Depoimentos1.png";
import imgDepoimentos2 from "../../../assets/img/Depoimentos2.png";
import imgDepoimentos3 from "../../../assets/img/Depoimentos3.png";
import imgDepoimentos4 from "../../../assets/img/Depoimentos4.png";
import imgDepoimentos5 from "../../../assets/img/Depoimentos5.png";
import imgDepoimentos6 from "../../../assets/img/Depoimentos6.png";
import imgDepoimentos7 from "../../../assets/img/Depoimentos7.png";
import "./index.css";

export function Horizontal() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 970, itemsToShow: 1.5},
    { width: 1300, itemsToShow: 2 },
    { width: 1600, itemsToShow: 2 },
    { width: 1610, itemsToShow: 2.5 },
  ];



  const [currentItem, setCurrentItem] = React.useState(0);
  const onCurrentChange = current => {
    setCurrentItem(current.index)
  }

 useEffect(() => {

 console.log( document.querySelectorAll('.divCarousel0, .rec-carousel-wrapper .rec-pagination button'))

  }, [])

  
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


      <CarouselH breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={50} showArrows={false} >
        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel " src={imgDepoimentos1} alt="" />
        </div>
        </Zoom>

        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgDepoimentos2} alt="" />
        </div>
        </Zoom>

        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgDepoimentos3} alt="" />
        </div>
        </Zoom>

        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgDepoimentos4} alt="" />
        </div>
        </Zoom>

        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgDepoimentos5} alt="" />
        </div>
        </Zoom>

        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgDepoimentos6} alt="" />
        </div>
        </Zoom>

        <Zoom>
        <div className="carouselDivLogoCliente">
          <img className="imgHorizontalCarousel" src={imgDepoimentos7} alt="" />
        </div>
        </Zoom>
      </CarouselH>
    </>
  );
}
