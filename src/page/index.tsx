import { ContainerCircles, ContainerMain } from "./styles";
import CardProjects from "./CardProjects";
import { useEffect, useRef, useState } from "react";
import CardProfile from "./CardProfile";

const Page = () => {
  const [currentCard, setCurrentCard] = useState<"perfil" | "projects">(
    "perfil"
  );
  const [infoCard, setInfoCard] = useState({ width: 0, height: 0 });
  const refCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInfoCard({
      width: refCard?.current?.offsetWidth || 0,
      height: refCard?.current?.offsetHeight || 0,
    });
    window.addEventListener("resize", (e) => {
      setInfoCard({
        width: refCard?.current?.offsetWidth || 0,
        height: refCard?.current?.offsetHeight || 0,
      });
    });
    document.addEventListener("click", (e) => {
      console.log("CLICKOU");
      console.log(e?.composedPath() || e.target);
      if (
        (e?.composedPath() || e.target).some(
          (el: any) => el?.id === "button-github"
        )
      ) {
        return;
      }
      setCurrentCard((state) => state);
    });
  }, []);

  return (
    <ContainerMain>
      <ContainerCircles width={infoCard.width} height={infoCard.height}>
        {currentCard === "perfil" && <CardProfile refCard={refCard} />}
        {currentCard === "projects" && <CardProjects refCard={refCard} />}
      </ContainerCircles>
    </ContainerMain>
  );
};

export default Page;
