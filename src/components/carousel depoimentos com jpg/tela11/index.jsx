import React, { useState } from "react";
import "./index.css";
import { GoPlus } from "react-icons/go";
import btGrade from "../../../assets/img/img (6).png";
import { Fade } from "react-reveal";

export function Drop() {
  const [abrirMenu, setAbrirMenu] = useState(-1);
  const optons = [
    {
      titulo: "• Visão geral do Teams e do Microsoft 365 👁️",

      conteudo:
        "Nós é quem somos os protagonistas, não as ferramentas. Vamos introduzir conceitos modernos de trabalho e abordaremos as principais funções do Teams e do 365.",
    },
    {
      titulo: "• Reuniões e calendário 📅",

      conteudo:
        "Menos reuniões, mais comunicação assíncrona. Abordaremos os calendários e as reuniões virtuais. Mostraremos que as reuniões devem ser momentos sagrados, e por isso devemos usar todos os recursos a nosso favor.",
    },
    {
      titulo: "• Gerenciando tarefas e projetos ✅",

      conteudo:
        "As metodologias ágeis vieram para ficar. Abordaremos como o Planner pode ajudar a gerenciar tarefas, projetos e rotinas diárias. Também mostraremos que dar visibilidade às tarefas em equipe pode desbloquear a inteligência coletiva.",
    },
    {
      titulo: "• Adoção e mudança de cultura na organização 🚀",

      conteudo:
        "Mudança de cultura é uma maratona, e não uma corrida de 100m! Uma coisa é aprender a mexer no Teams e conhecer os recursos disponíveis do 365. Outra coisa bem diferente é a jornada de transformação digital nas organizações. Daremos dicas de como começar essa jornada.",
    },
  ];

  function fnAbrir(i) {
    if (abrirMenu === i) setAbrirMenu(-1);
    if (abrirMenu !== i) setAbrirMenu(i);
  }

  return (
    <>
      <div className="div11">
        <Fade left>
          <div className="div11Content">
            <p className="p11-1">
              São mais de 5 horas de conteúdo bem distribuídos em 12 módulos +
              material de apoio.
            </p>
            <p className="p11-2">
              Quase 90 vídeos curtinhos e objetivos, que no final vão te ajudar
              a reiventar a forma que você e sua equipe se comunicam.
            </p>

            <a href="https://solotecnologia.sharepoint.com/:b:/s/CursoTeamspira/EUFWgm4r7JdHhE2N7RgTB4UBEmjuj5BfcKUBFK9O6TY-0A?e=OqRDt5" target={'_blanck'}>
              <div className="divBtGrade">
                <img
                  width={40}
                  className="px-1 mr-3 "
                  src={btGrade}
                  alt="botão"
                />{" "}
                <span className="bt11 m-0">Grade completa do Teamspira</span>
              </div>
            </a>
          </div>
        </Fade>

        <div className="menuTodo">
          {optons.map((e, i) => (
            <div key={i} className="menu">
              <Fade right delay={400 * i}>
                <div className="menuTitulo" onClick={() => fnAbrir(i)}>
                  <div className="divPlus">
                    <GoPlus
                      className={abrirMenu === i ? "plus plusActive" : "plus"}
                    />
                  </div>
                  <p className="tituloDrop">{e.titulo}</p>
                </div>
              </Fade>
              {abrirMenu === i ? (
                <div className="menuConteudoExterno">
                  <Fade top duration={200}>
                    <div className="menuConteudo">
                      <p className="tituloDrop">{e.conteudo}</p>
                    </div>
                  </Fade>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
