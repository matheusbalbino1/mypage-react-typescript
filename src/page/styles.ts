import styled, { keyframes } from "styled-components";
import React from "react";

export const ContainerMain = styled.main`
  background-image: radial-gradient(circle at center, red 0, blue);
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  @media (max-width: 900px) {
    padding: 1rem;
    min-height: 100vh;
    height: auto;
  }
`;

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const ContainerCircles = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  &::after {
    content: "";
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background-image: linear-gradient(to top, #ef00f4, #001aff);
    position: absolute;
    top: calc(50% - ${({ height }) => (height || 0) / 2}px - 3rem);
    right: calc(50% - ${({ width }) => (width || 0) / 2}px + 3.5rem);
    z-index: 1;
    animation: ${rotate} 10s ease-in-out infinite;
    @media (max-width: 900px) {
      width: 7rem;
      height: 7rem;
      top: calc(50% - ${({ height }) => (height || 0) / 2}px - 0.5rem);
    }
  }
  &::before {
    content: "";
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background-image: linear-gradient(to top, #ef00f4, #001aff);
    position: absolute;
    bottom: calc(50% - ${({ height }) => (height || 0) / 2}px - 3rem);
    left: calc(50% - ${({ width }) => (width || 0) / 2}px + 3.5rem);
    z-index: 1;
    animation: ${rotate} 6s ease-in-out reverse infinite;
    @media (max-width: 900px) {
      width: 7rem;
      height: 7rem;
      bottom: calc(50% - ${({ height }) => (height || 0) / 2}px - 0.5rem);
    }
  }
`;
