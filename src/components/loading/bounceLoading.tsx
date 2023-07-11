import styled, { keyframes } from "styled-components";

import React from "react";
import { theme } from "../../theming/defaultTheme";

const BALL_COUNT = 5;

const bounceAnimation = keyframes`
   0%, 100% {
    transform: translateY(0) scale(1);
    background-color:  ${theme.colors.primary.main};
} 
   50% {
    transform: translateY(-20px) scale(1.5);
     background-color:  ${theme.colors.primary.lightest};
    } 
   
`;

const Row = styled.div`
  display: flex;
  padding: 2rem;
  width: calc(12px * ${BALL_COUNT} + 6px * ${BALL_COUNT});
  align-items: center;
  justify-content: space-between;
`;

const StyledLoaderBall = styled.div<{ $delay: number; $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  animation-name: ${bounceAnimation};
  animation-duration: 1s;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
`;

interface SimpleLoadingProps {
  size: number;
}

export const BounceLoading: React.FC<SimpleLoadingProps> = ({ size }) => {
  const render = () => {
    const balls = [];
    for (let i = 0; i < BALL_COUNT; i++) {
      balls.push(
        <StyledLoaderBall $size={size} $delay={i * (1 / (BALL_COUNT + 1))} />
      );
    }
    return balls;
  };
  return <Row>{render()}</Row>;
};
