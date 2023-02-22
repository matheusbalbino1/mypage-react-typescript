import styled from "styled-components";

export const Card = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: #ffffff30;
  backdrop-filter: blur(5px);
  border-radius: 0.5rem;
  border: 2px solid #ffffff40;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ContainerImg = styled.div`
  max-width: 13rem;
  border-radius: 100%;
  width: 100%;
  > img {
    width: 100%;
    border-radius: 100%;
    border: 4px solid #ffffff;
    @media (max-width: 900px) {
      width: 70%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (max-width: 300px) {
      width: 70%;
    }
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ContainerInfos = styled.section`
  width: 100%;
  color: #fff;
`;

export const ContainerTechs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.5rem;
  }
`;

export const Techs = styled.p`
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  > img {
    margin-right: 0.5rem;
    width: 40px;
    height: 40px;
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90px;
  }
  @media (max-width: 900px) {
    font-size: 1.1rem;
    > img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const TextInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: "Roboto";
  color: #ffffff60;
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const TextTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Roboto";
  margin: 0.5rem 0;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
