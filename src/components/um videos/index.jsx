import React from "react";
import { Fade } from "react-reveal";
import "./index.css";

export function UmVideo() {
  return (
    <div className="divUmVideo0">
      <Fade left>
        <p className="pUmVideo1">
          Transforme-se na maior inspiração do seu time usando o Teams.
        </p>
      </Fade>

      <div className="containerUmVideo">
        <div className="umVideoRes">
          <Fade right>
            <iframe
              src="https://player.vimeo.com/video/736496299?h=ca17777277"
              width="640"
              height="360"
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </Fade>
        </div>
      </div>
    </div>
  );
}
