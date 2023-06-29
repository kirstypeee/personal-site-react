import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface FormControlProps {
  children: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
}

const FormControlStyles = styled.div<FormControlProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  margin: ${theme.shape.margin}px;
`;

export const FormControl: React.FC<FormControlProps> = ({
  children,
  alignItems,
  justifyContent,
}) => {
  return (
    <FormControlStyles alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </FormControlStyles>
  );
};
