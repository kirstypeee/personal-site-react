import React, { useState } from "react";

import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface CircleProps {
  $grow: boolean;
}

const CoverCircle = styled.div<CircleProps>`
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
  ${({ $grow }) => $grow ? `
  display: none;
  ` : ''}
`;

const HiddenCircle = styled.div<CircleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(9, 9, 9, 1) 100%
  );
  transition: width 300ms ease-in, height 300ms ease-in;
  box-shadow: ${theme.neoShadow.primary.darkInset};
  cursor: pointer;
  ${({ $grow }) => $grow ? `
  width: 1000vw;
  height: 1000vh;
  ` : ''}
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

interface HingeCircleRevealProps {
  onClick: () => void;
}
export const HingeCircleReveal: React.FC<HingeCircleRevealProps> = ({ onClick }) => {
  const [grow, setGrow] = useState(false)

  const startTransition = () => {
    setGrow(true);
    setTimeout(() => {
      onClick();
    }, 200)
  }

  return (
    <RevealWrapper>
      <HiddenCircle $grow={grow} onClick={startTransition}>
        <CoverCircle id="cover" $grow={grow} />
      </HiddenCircle>
    </RevealWrapper>
  );
};
