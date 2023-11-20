import PerfilImg from "../../assets/images/perfil.jpg";
import HtmlIcon from "../../assets/icons/html.svg";
import JsIcon from "../../assets/icons/javascript.svg";
import ReactIcon from "../../assets/icons/react.svg";
import TsIcon from "../../assets/icons/typescript.svg";
import RestIcon from "../../assets/icons/rest.svg";
import PythonIcon from "../../assets/icons/python.svg";
import AngularIcon from "../../assets/icons/angular.svg";
import {
  Card,
  ContainerHeader,
  ContainerImg,
  ContainerInfos,
  ContainerTechs,
  Techs,
  TextInfo,
  TextTitle,
} from "./styles";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  refCard: React.RefObject<HTMLDivElement>;
}

const CardProfile = ({ refCard, ...rest }: ICard) => {
  const techs = [
    {
      name: "Html",
      icon: HtmlIcon,
    },
    {
      name: "Javascript",
      icon: JsIcon,
    },
    {
      name: "Typescript",
      icon: TsIcon,
    },
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "Redux",
      icon: ReactIcon,
    },
    {
      name: "Material UI",
      icon: ReactIcon,
    },
    {
      name: "Styled-components",
      icon: ReactIcon,
    },
    {
      name: "Axios",
      icon: ReactIcon,
    },
    {
      name: "RestAPI",
      icon: RestIcon,
    },
    {
      name: "Python",
      icon: PythonIcon,
    },
    {
      name: "Django",
      icon: PythonIcon,
    },
    {
      name: "Django Rest Framework",
      icon: PythonIcon,
    },
    {
      name: "Angular",
      icon: AngularIcon,
    },
  ];

  return (
    <Card ref={refCard} {...rest}>
      <ContainerHeader>
        <ContainerInfos>
          <TextInfo>Olá, eu sou</TextInfo>
          <TextTitle>Matheus Balbino</TextTitle>
          <TextInfo>Desenvolvedor Web Frontend</TextInfo>
        </ContainerInfos>
        <ContainerImg>
          <img src={PerfilImg} />
        </ContainerImg>
      </ContainerHeader>
      <ContainerTechs>
        {techs.map((tech) => (
          <Techs key={tech.name}>
            <img src={tech.icon} alt={`${tech.name} icon`} />
            {tech.name}
          </Techs>
        ))}
      </ContainerTechs>
    </Card>
  );
};

export default CardProfile;
