import React from "react";

import Carousel from "react-elastic-carousel";
import { Zoom } from "react-reveal";
import imgCarouselVertical1 from "../../../assets/img/vertical (1).png";
import imgCarouselVertical2 from "../../../assets/img/vertical (2).png";
import imgCarouselVertical3 from "../../../assets/img/vertical (3).png";
import imgCarouselVertical4 from "../../../assets/img/vertical (4).png";
import imgCarouselVertical5 from "../../../assets/img/vertical (5).png";
import "./index.css";

export function Vertical() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 1 },
    { width: 600, itemsToShow: 1},
    { width: 970, itemsToShow: 1.5},
    { width: 1300, itemsToShow: 2 },
    { width: 1600, itemsToShow: 2 },
    { width: 1610, itemsToShow: 2.5 },
  ];

  return (
    <>
      <p className="pCarouselDepoimentosTela3">
        Inspire-se com exemplos reais e transforme seus hábitos de comunicação.
      </p>

      <Carousel breakPoints={breakPoints}>
        <Zoom>
          <div>
            <img
              className="imgVerticalCarousel"
              src={imgCarouselVertical1}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div>
            <img
              className="imgVerticalCarousel"
              src={imgCarouselVertical2}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div>
            <img
              className="imgVerticalCarousel"
              src={imgCarouselVertical3}
              alt=""
            />
          </div>
        </Zoom>

        <Zoom>
          <div>
            <img
              className="imgVerticalCarousel"
              src={imgCarouselVertical4}
              alt=""
            />
          </div>
        </Zoom>
        
        <Zoom>
          <div>
            <img
              className="imgVerticalCarousel"
              src={imgCarouselVertical5}
              alt=""
            />
          </div>
        </Zoom>
      </Carousel>
    </>
  );
}
