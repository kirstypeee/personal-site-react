import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface CardProps {
  outlined?: boolean;
  elevation?: number;
  header?: React.ReactNode;
  content?: React.ReactNode;
  width?: string;
  minWidth?: string;
}

interface CardStyleProps {
  $elevation?: number;
  $width?: string;
  $minWidth?: string;
  $outlined?: boolean;
}

const CardStyles = styled.div<CardStyleProps>`
  z-index: 1;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${theme.colors.paper};
  width: ${({ $width }) => $width || "100%"};
  min-width: ${({ $minWidth }) => $minWidth || "none"};
  transition: ${theme.elevation.transition};
  box-shadow: ${({ $elevation }) =>
    $elevation ? theme.elevation[$elevation].boxShadow : "none"};
  border: ${({ $outlined }) =>
    $outlined ? `1px solid ${theme.colors.paperContrast}` : "none"};
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
  minWidth,
  outlined,
}) => {
  return (
    <CardStyles
      $minWidth={minWidth}
      $width={width}
      $elevation={elevation}
      $outlined={outlined}
    >
      {header && <CardHeader>{header}</CardHeader>}
      {content && <CardContent>{content}</CardContent>}
    </CardStyles>
  );
};
