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
            {/* https://player.vimeo.com/video/736496299/ca17777277 */}
           
            <iframe
              src="https://player.vimeo.com/video/735631173?h=b9d8c148bf"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>

          </Fade>
        </div>
      </div>
    </div>
  );
}
