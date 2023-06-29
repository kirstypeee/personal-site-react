import React from "react";
import styled from "styled-components";

interface FormProps {
  onSubmit: () => void;
  content: React.ReactNode;
}

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form: React.FC<FormProps> = ({ onSubmit, content }) => {
  return <FormStyles onSubmit={onSubmit}>{content}</FormStyles>;
};
