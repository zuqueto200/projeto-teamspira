import "./index.css";
import React from "react";
import Carousel from "react-elastic-carousel";
import { Zoom } from "react-reveal";

export function CarouselVideos() {
 

  

// style={{ pointerEvents: blockSlider ? 'none' : 'auto' }}
  return (
    <div className="divCarousel0">
      <div className="divCarousel1">
        <Zoom>
          <p className="pCarouselVideos1">
            Materialize boas práticas de comunicação síncrona e assíncrona.
          </p>
        </Zoom>

        <Carousel className="containerCarousel" enableMouseSwipe={true} showArrows={true}>


          <div className="CarouselRes">


            <iframe  
              src="https://player.vimeo.com/video/736497229?h=d28d119a11"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              src="https://player.vimeo.com/video/736497951?h=1cbd974f7f"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              src="https://player.vimeo.com/video/736498760?h=4f32a500f9"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              src="https://player.vimeo.com/video/736501855?h=b919585f9f"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              src="https://player.vimeo.com/video/736502822?h=de368a2acc"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
