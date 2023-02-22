import styled, { keyframes } from "styled-components";

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

export const ContainerProjects = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 0 0 8px 8px;
  background-color: #171515;
  cursor: pointer;
  > a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #ffffff60;
  @media (max-width: 1300px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ContainerContact = styled.div`
  margin-top: 1rem;
  @media (max-width: 1300px) {
    margin-left: 1%;
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff80;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  > img {
    margin-right: 0.5rem;
    width: 30px;
    height: 30px;
    opacity: 0.6;
  }
  > a {
    color: #ffffff80;
    text-decoration: none;
  }
  @media (max-width: 920px) {
    > a {
      word-break: break-all;
    }
  }
`;
