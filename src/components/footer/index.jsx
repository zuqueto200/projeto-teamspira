import React from "react";
import "./index.css";
import Victor from "../../assets/img/img (13).png";
import Marcelo from "../../assets/img/img (16).png";
import AspasAbre from "../../assets/img/aspasAbre.png";
import AspasFecha from "../../assets/img/aspasFecha.png";

export function Footer() {
  return (
    <div className="divFooter">
      <p className="pFooter1">
        Os teams workspaces tem um lugar central na nova cultura de trabalho.
      </p>
      <p className="pFooter2">
        <img className="aspasAbre mr-3" src={AspasAbre} alt="aspas" /> Esses
        espaços empoderam as pessoas, pois abrem caminhos para o trabalho
        autônomo de equipes, para o desenvolvimento da cultura organizacional,
        para a criatividade e para a inovação.
        <img className="aspasFecha ml-3" src={AspasFecha} alt="aspas" />
      </p>

      <img className="fotoPerfil" src={Victor} alt="foto" />
      <p className="pFooter3 mb-0">Victor Costa</p>
      <p className="pFooter4">
        Especialista em transformação digital da Solo e instrutor no Teamspira
      </p>

      <p className="pFooter1">Mas e agora que remoto virou híbrido?</p>

      <p className="pFooter2">
        <img className="aspasAbre mr-3" src={AspasAbre} alt="aspas" />{" "}
        Comportamento remoto no trabalho é pra sempre. Podem dar outro nome, mas
        sempre será sobre a mudança na forma como nos comunicamos e colaboramos
        em equipe. Seja no híbrido, no remoto, no home office ou no presencial.
        Além de aprender sobre ferramentas, o Teamspira também mostra como novos
        hábitos de comunicação desenvolvem naturalmente o seu comportamento
        remoto no trabalho.
        <img className="aspasFecha ml-3" src={AspasFecha} alt="aspas" />
      </p>

      <img className="fotoPerfil" src={Marcelo} alt="foto" />
      <p className="pFooter3 mb-0">Marcelo Bacchi</p>
      <p className="pFooter4">
        Sócio co-fundador da Solo e mentor do Minuteams
      </p>
    </div>
  );
}
