import React from "react";
import { Home } from "./components/home";
import { BarraComprar } from "./components/barra comprar";
import { UmVideo } from "./components/um videos";
import { Icones } from "./components/icones";
import { Remota } from "./components/remota";
import { CarouselVideos } from "./components/carousel videos";
import { Tablet } from "./components/tablet";
import { CarouselImagemJpg } from "./components/carousel depoimentos com jpg";
import { Roxo } from "./components/roxo";
import { Footer } from "./components/footer";
export default function App() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Home />
      </div>
      <div className="d-flex justify-content-center">
        <UmVideo />
      </div>
      <div className="d-flex justify-content-center">
        <Icones />
      </div>
      <div className="d-flex justify-content-center">
        <Remota />
      </div>
      <div className="d-flex justify-content-center">
        <CarouselVideos />
      </div>
      <div className="d-flex justify-content-center">
        <Tablet />
      </div>

      <div className="d-flex justify-content-center">
        <CarouselImagemJpg />
      </div>

      <div className="d-flex justify-content-center">
        <Roxo />
      </div>

      <div className="d-flex justify-content-center">
        <Footer />
      </div>

      <div className="d-flex justify-content-center">
        <BarraComprar />
      </div>
    </>
  );
}
