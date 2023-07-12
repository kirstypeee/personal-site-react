import styled, { keyframes } from "styled-components";

import React from "react";
import { Row } from "../layout/row";
import { theme } from "../../theming/defaultTheme";

const BALL_COUNT = 5;

const bounceAnimation = keyframes`
   0%, 100% {
    transform: translateY(0) scale(1);
    background-color:  ${theme.colors.primary.main};
} 
   50% {
    transform: translateY(-100%) scale(1.5);
     background-color:  ${theme.colors.primary.lightest};
    } 
   
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
        <StyledLoaderBall key={`ball-${i}`}  $size={size} $delay={i * (1 / (BALL_COUNT + 1))} />
      );
    }
    return balls;
  };
  return <Row $width={`${size * BALL_COUNT + size / 2 * BALL_COUNT}px`}>{render()}</Row>;
};
