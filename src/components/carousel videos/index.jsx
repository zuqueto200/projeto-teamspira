import "./index.css";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import { Zoom } from "react-reveal";
import { click } from "@testing-library/user-event/dist/click";

export function CarouselVideos() {
  const [reset0, setReset0] = useState(true);
  const [reset1, setReset1] = useState(true);
  const [reset2, setReset2] = useState(true);
  const [reset3, setReset3] = useState(true);
  const [reset4, setReset4] = useState(true);
  const [posicao, setPosicao] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      var ativo = ref.current.state.activeIndex;
      setPosicao(ativo);
    }, 10);
    return () => clearInterval(intervalId);
  }, [posicao]);

  useEffect(() => {
    if (posicao == 0) {
      setTimeout(() => {
        setReset1(false);
        setReset2(false);
        setReset3(false);
        setReset4(false);
        resetTime();
      }, 550);
    }
    if (posicao == 1) {
      setTimeout(() => {
        setReset0(false);
        setReset2(false);
        setReset3(false);
        setReset4(false);
        resetTime();
      }, 550);
    }
    if (posicao == 2) {
      setTimeout(() => {
        setReset0(false);
        setReset1(false);
        setReset3(false);
        setReset4(false);
        resetTime();
      }, 550);
    }
    if (posicao == 3) {
      setTimeout(() => {
        setReset0(false);
        setReset1(false);
        setReset2(false);
        setReset4(false);
        resetTime();
      }, 550);
    }
    if (posicao == 4) {
      setTimeout(() => {
        setReset0(false);
        setReset1(false);
        setReset2(false);
        setReset3(false);
        resetTime();
      }, 550);
    }
    console.log(posicao);
  }, [posicao]);

  function resetTime() {
    setTimeout(() => {
      setReset0(true);
      setReset1(true);
      setReset2(true);
      setReset3(true);
      setReset4(true);
    }, 10);
  }

  useEffect(() => {
    let video = document.querySelector(".rec");
    video.addEventListener("click", () => {});
  }, [ref]);

  return (
    <div className="divCarousel0">
      <div className="divCarousel1">
        <Zoom>
          <p className="pCarouselVideos1">
            Materialize boas práticas de comunicação síncrona e assíncrona.
          </p>
        </Zoom>

        <Carousel
          className="containerCarousel"
          enableMouseSwipe={true}
          showArrows={true}
          ref={ref}
        >
          <div className="CarouselRes">
            {reset0 && (
              <iframe
                className="myVideoPlayer"
                src="https://player.vimeo.com/video/736497229?h=d28d119a11"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="CarouselRes">
            {reset1 && (
              <iframe
                src="https://player.vimeo.com/video/736497951?h=1cbd974f7f"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="CarouselRes">
            {reset2 && (
              <iframe
                src="https://player.vimeo.com/video/736498760?h=4f32a500f9"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="CarouselRes">
            {reset3 && (
              <iframe
                src="https://player.vimeo.com/video/736501855?h=b919585f9f"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="CarouselRes">
            {reset4 && (
              <iframe
                src="https://player.vimeo.com/video/736502822?h=de368a2acc"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
