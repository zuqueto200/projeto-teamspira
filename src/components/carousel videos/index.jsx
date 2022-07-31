import "./index.css";
import React from "react";
import Carousel from "react-elastic-carousel";

export function CarouselVideos() {
  return (
    <div className="divCarousel0">
      <div className="divCarousel1">
        <p className="pCarouselVideos1">
          Materialize boas práticas de comunicação síncrona e assíncrona
        </p>

        <Carousel className="containerCarousel">
          <div className="CarouselRes">
            <iframe
              title="video carousel"
              src="https://www.youtube.com/embed/WHPEKLQID4U"
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              title="video carousel"
              src="https://www.youtube.com/embed/WHPEKLQID4U"
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              title="video carousel"
              src="https://www.youtube.com/embed/WHPEKLQID4U"
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              title="video carousel"
              src="https://www.youtube.com/embed/WHPEKLQID4U"
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              title="video carousel"
              src="https://www.youtube.com/embed/WHPEKLQID4U"
            ></iframe>
          </div>
          <div className="CarouselRes">
            <iframe
              title="video carousel"
              src="https://www.youtube.com/embed/WHPEKLQID4U"
              // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
