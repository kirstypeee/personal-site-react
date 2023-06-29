import React from "react";
import styled from "styled-components";

interface FieldsetProps {
  children: React.ReactNode;
}

const FieldsetStyles = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  border: none;
`;

export const Fieldset: React.FC<FieldsetProps> = ({ children }) => {
  return <FieldsetStyles>{children}</FieldsetStyles>;
};
