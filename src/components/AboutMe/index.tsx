import { Button } from "../Button";
import resume from "../../assets/files/Lucas de Moraes - Fullstack.pdf";

export function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-poppins antialiased font-extrabold text-2xl tracking-tighter">
        Sobre mim
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Me conheça melhor
      </span>
      <div className="w-full max-w-5xl items-center flex flex-col">
        <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-9">
          E aí, muito prazer! Sou Lucas de Moraes Souza, desenvolvedor
          full-stack apaixonado por tecnologia. Atuo na área desde 2021 e estou
          constantemente buscando me especializar. Já trabalhei como front-end,
          back-end, e atualmente integro ambas as áreas.
        </span>
        <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-9">
          Tenho experiência em diferentes segmentos do desenvolvimento. Já
          participei de projetos como e-commerces, dashboards financeiros, e
          sistemas para clínicas médicas com funcionalidades de agendamento e
          consultas. Além disso, possuo conhecimentos em desenvolvimento mobile
          e já criei aplicativos para Android e iOS.
        </span>
        <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-9">
          Vamos conversar? Entre em contato, ficarei feliz em trocar ideias com
          você e, melhor ainda, trabalharmos juntos!
        </span>
      </div>

      <div className="mt-8">
        <a href={resume} download="Lucas_Moraes_Souza_Curriculo.pdf">
          <Button text="Baixar currículo" />
        </a>
      </div>
    </div>
  );
}
