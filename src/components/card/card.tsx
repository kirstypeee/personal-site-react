import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface CardProps {
  elevation?: number;
  header?: React.ReactNode;
  content?: React.ReactNode;
  width?: string;
}

const CardStyles = styled.div<CardProps>`
  z-index: 1;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${theme.colors.paper};
  width: ${({ width }) => width || "100%"};
  transition: ${theme.elevation.transition};
  box-shadow: ${({ elevation }) =>
    elevation ? theme.elevation[elevation].boxShadow : "none"};
`;

const CardHeader = styled.div`
  padding: ${theme.shape.padding}px;
  border-bottom: 1px solid ${theme.colors.border};
`;

const CardContent = styled.div`
  padding: ${theme.shape.padding}px;
`;

export const Card: React.FC<CardProps> = ({
  header,
  content,
  elevation,
  width,
}) => {
  return (
    <CardStyles width={width} elevation={elevation}>
      {header && <CardHeader>{header}</CardHeader>}
      {content && <CardContent>{content}</CardContent>}
    </CardStyles>
  );
};
