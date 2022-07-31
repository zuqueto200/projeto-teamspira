import React from "react";

import Carousel from "react-elastic-carousel";
import imgCarouselVertical1 from "../../../assets/img/vertical (1).png";
import imgCarouselVertical2 from "../../../assets/img/vertical (2).png";
import imgCarouselVertical3 from "../../../assets/img/vertical (3).png";
import imgCarouselVertical4 from "../../../assets/img/vertical (4).png";
import "./index.css";

export function Vertical() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 1.5 },
    { width: 600, itemsToShow: 1.5, itemsToScroll: 1, pagination: false },
    { width: 970, itemsToShow: 1.5, itemsToScroll: 2 },
    { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 2.5 },
    { width: 1750, itemsToShow: 2.5 },
  ];

  return (
    <>
      <p className="pCarouselDepoimentosTela3">
        Inspire-se com exemplos reais e transforme seus hábitos de comunicação
      </p>

      <Carousel breakPoints={breakPoints}>
        <div>
          <img
            className="imgVerticalCarousel"
            src={imgCarouselVertical1}
            alt=""
          />
        </div>

        <div>
          <img
            className="imgVerticalCarousel"
            src={imgCarouselVertical2}
            alt=""
          />
        </div>

        <div>
          <img
            className="imgVerticalCarousel"
            src={imgCarouselVertical3}
            alt=""
          />
        </div>

        <div>
          <img
            className="imgVerticalCarousel"
            src={imgCarouselVertical4}
            alt=""
          />
        </div>
      </Carousel>
    </>
  );
}
