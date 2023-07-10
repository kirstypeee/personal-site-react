import { H1 } from "../../components/typography/h1";
import { H2 } from "../../components/typography/h2";
import React from "react";
import { ReactComponent as UnderConstruction } from "../../assets/under_construction.svg";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";
import { useAppSelector } from "../../hooks/storeHooks";

const BackgroundStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${theme.shape.padding}px;
  height: calc(100vh - ${theme.shape.padding}px * 2);
  background-color: ${theme.colors.primary.dark};
`;

const ImageWrapper = styled.div`
  margin-bottom: 3rem;
  & svg {
    width: 80vw;
    max-width: 700px;
    height: fit-content;
  }
`;

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <BackgroundStyles>
      <H1>
        Welc<span className="flicker">o</span>me, {user.name}
      </H1>
      <ImageWrapper>
        <UnderConstruction />
      </ImageWrapper>
      <H2>This site is under construction</H2>
    </BackgroundStyles>
  );
};
