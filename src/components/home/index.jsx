import React from "react";
import "./index.css";
import img1 from "../../assets/img/img (18).png";
import img2 from "../../assets/img/img (10).png";
import img3 from "../../assets/img/img (5).png";

export function Home() {
  return (
    <div className="divHome0">
      <div className="divHome2">
        <img className="imgHome1" src={img1} alt="logo principal" />
        <p className="pHome1">
          O primeiro e único curso online sobre tecnologia de comunicação pra
          quem trabalha em um workspace como o Teams.
        </p>
        <p className="pHome2">
          Existe vida além de todos aqueles chats que você tem que responder na
          hora, dos e-mails que você marca como não lido e das reuniões diárias
          que você não aguenta mais.
        </p>
      </div>

      <img className="imgHome2" src={img2} alt="imagem decorativa" />
      <div className="divHome1  ">
        <img
          className="imgHome3"
          src={img3}
          width="100%"
          alt="imagem decorativa"
        />
      </div>
    </div>
  );
}
