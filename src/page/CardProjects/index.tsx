import React, { useEffect } from "react";
import {
  Button,
  Contact,
  ContainerContact,
  ContainerProjects,
  Project,
  Title,
  Card,
} from "./styles";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import GithubIcon from "../../assets/icons/github.svg";
import EmailIcon from "../../assets/icons/email.svg";

interface ICardProjects extends React.HTMLAttributes<HTMLDivElement> {
  refCard: React.RefObject<HTMLDivElement>;
}

const CardProjects = ({ refCard, ...rest }: ICardProjects) => {
  const BASE_URL = "https://docs.google.com/uc?id=";

  const projects = [
    {
      id: 4,
      nome: "Site Responsivo",
      description:
        "Projeto de site criado durante o curso de HTML, CSS e JS na Udemy pelo instrutor Daniel Tapias Morales",
      tecnologias: ["HTML", "CSS"],
      URL_GITHUB:
        "https://github.com/matheusbalbino1/exercicios-praticos/tree/main/16-siteresponsivo",
      URL_PAGE:
        "https://matheusbalbino1.github.io/exercicios-praticos/16-siteresponsivo/index",
      ID_IMAGEM: "1UvvvOBI229P_sXKgJ969UqHGBI7kYvmF",
    },
    {
      id: 6,
      nome: "Site Gameflix",
      description:
        "Projeto feito para um teste de empresa, utilizei uma API para enviar e-mails",
      tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
      URL_GITHUB: "https://github.com/matheusbalbino1/lojaComprarAdesivo",
      URL_PAGE: "https://matheusbalbino1.github.io/lojaComprarAdesivo/",
      ID_IMAGEM: "1yR6TmM4ILQULdX-7CGjk6w7sTmBzjYdh",
    },
    {
      id: 7,
      nome: "Site Matheus Veículos",
      description:
        "Site pessoal, na página Admin é possível filtrar os veículos e adiciona-los ao Json-Server",
      tecnologias: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      URL_GITHUB: "https://github.com/matheusbalbino1/siteloja-reactjs",
      URL_PAGE: "https://matheusbalbino1.github.io/siteloja-reactjs",
      ID_IMAGEM: "1Bxaqj1N6FswOZHsMa4BaW0XMkPeKu9N_",
    },
  ];

  const contacts = [
    {
      id: 1,
      name: "matheus-balbino-4a2456195",
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/matheus-balbino-4a2456195/",
    },
    {
      id: 2,
      name: "matheusbalbino1",
      icon: GithubIcon,
      link: "https://github.com/matheusbalbino1",
    },
    {
      id: 3,
      name: "matheusbalbinodeoliveira3@gmail.com",
      icon: EmailIcon,
    },
  ];

  return (
    <Card {...rest} ref={refCard}>
      <Title>Projects</Title>
      <ContainerProjects>
        {projects.map((project) => (
          <Project key={project.ID_IMAGEM}>
            <img src={`${BASE_URL + project.ID_IMAGEM}`} alt="" />
            <Button id="button-github">
              <a href={project.URL_GITHUB} target="_blank">
                GITHUB
              </a>
            </Button>
          </Project>
        ))}
      </ContainerProjects>
      <ContainerContact>
        {contacts.map((contact) => (
          <Contact key={contact.id}>
            <img src={contact.icon} />
            <a href={contact?.link} target="_blank">
              {contact.name}
            </a>
          </Contact>
        ))}
      </ContainerContact>
    </Card>
  );
};

export default CardProjects;
