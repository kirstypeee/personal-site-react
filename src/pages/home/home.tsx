import { H1 } from "../../components/typography/h1";
import { HingeCircleReveal } from "../../components/reveals/hingeCircleReveal";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";
import { useAppSelector } from "../../hooks/storeHooks";

const BackgroundStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: ${theme.shape.padding}px;
  height: calc(100vh - ${theme.shape.padding}px * 2);
  width: calc(100vw - 16px * 2);
  background-color: ${theme.colors.primary.dark};
`;

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <BackgroundStyles>
      <H1>
        Welc<span className="flicker">o</span>me, {user.name}
      </H1>
      <HingeCircleReveal />
    </BackgroundStyles>
  );
};
