import { Card } from "../../components/card/card";
import { GithubContributions } from "../../features/github/githubContributions";
import { GridContainer } from "../../components/layout/grid";
import { H3 } from "../../components/typography/h3";
import React from "react";
import { SocialsRow } from "../../components/toolbar/socialsRow";
import { Toolbar } from "../../components/toolbar/toolbar";
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
  background-color: ${theme.colors.paper};
`;

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const user = useAppSelector((state) => state.user);

  return (
    <BackgroundStyles>
      <Toolbar title={`Welcome, ${user.user.name}`} endContent={SocialsRow()} />
      <GridContainer>
        <Card header={<H3>Data visualisation</H3>} content={<GithubContributions/>} outlined={true} />
        <Card header={<H3>Third party integration</H3>} outlined={true} />
        <Card header={<H3>Test metrics</H3>} outlined={true} />
        <Card header={<H3>Blog</H3>} outlined={true} />
      </GridContainer>
    </BackgroundStyles>
  );
};
