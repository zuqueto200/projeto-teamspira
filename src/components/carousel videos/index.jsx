import "./index.css";
import React from "react";
import Carousel from "react-elastic-carousel";
import { Zoom } from "react-reveal";

export function CarouselVideos() {
  return (
    <div className="divCarousel0">
      <div className="divCarousel1">
        <Zoom>
          <p className="pCarouselVideos1">
            Materialize boas práticas de comunicação síncrona e assíncrona.
          </p>
        </Zoom>

        <Carousel className="containerCarousel">
          <div className="CarouselRes">
            {/* MOD3_ITEM7 (Comunicação síncrona x assíncrona)
            https://vimeo.com/736497229/d28d119a11 */}
            <iframe
              src="https://player.vimeo.com/video/735631173?h=b9d8c148bf"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            {/* MOD3_ITEM12 (Brincando com emojis)
            https://vimeo.com/736497951/1cbd974f7f */}
            <iframe
              src="https://player.vimeo.com/video/735631173?h=b9d8c148bf"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            {/* MOD5_ITEM4 (Reuniões comuns x Reuniões nos canais)
            https://vimeo.com/736498760/4f32a500f9 */}
            <iframe
              src="https://player.vimeo.com/video/735631173?h=b9d8c148bf"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            {/* MOD8_ITEM3 (To-Do x Planner x Tasks By Planner)
            https://vimeo.com/736501855/b919585f9f */}
            <iframe
              src="https://player.vimeo.com/video/735631173?h=b9d8c148bf"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="CarouselRes">
            {/* MOD7_ITEM6 (Colaboração de arquivos de forma assíncrona)
            https://vimeo.com/736502822/de368a2acc */}
            <iframe
              src="https://player.vimeo.com/video/735631173?h=b9d8c148bf"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
