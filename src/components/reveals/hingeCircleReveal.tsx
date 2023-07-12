import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const CoverCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${theme.colors.primary.dark};
  background-color: ${theme.colors.primary.dark};
  box-shadow: ${theme.neoShadow.primary.dark};
  transition: all 1s ease;
  transform-origin: 50% 15px;
  z-index: 1;
  cursor: pointer;
`;

const HiddenCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.colors.paper};
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0px;
    background-image: radial-gradient(
        circle at center,
        ${theme.colors.primary.dark} 5px,
        transparent 5px
      ),
      radial-gradient(
        circle at center,
        ${theme.colors.primary.dark} 5px,
        transparent 5px
      );
    background-size: 20px 20px;
    background-position: top center;
    background-repeat: no-repeat;
    z-index: 2;
  }
`;

const RevealWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  &:hover #cover {
    transform: rotate(160deg);
  }
`;

export const HingeCircleReveal: React.FC = () => {
  return (
    <RevealWrapper>
      <HiddenCircle>
        <CoverCircle id="cover" />
      </HiddenCircle>
    </RevealWrapper>
  );
};
