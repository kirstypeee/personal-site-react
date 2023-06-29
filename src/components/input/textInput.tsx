import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface TextInputProps {
  label: React.ReactNode;
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  validation?: string;
}

const InputField = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.shape.padding}px;
  height: ${theme.shape.inputHeight}px;
  width: calc(100% - 2 * ${theme.shape.padding}px);
  background: ${theme.colors.paper};
  outline: none;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${theme.colors.borderHover};
  }
  &:focus {
    border-color: ${theme.colors.borderFocus};
  }
  &:focus ~ label {
    top: 0;
    left: 15px;
    padding: 0 2px;
    background: ${theme.colors.paper};
    font-size: ${theme.font.small}px;
  }
`;
const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.1s ease;
`;
const StyledValidation = styled.span<{ validation: boolean }>`
  position: absolute;
  bottom: ${({ validation }) => (validation ? "-20px" : "0px")};
  color: ${theme.colors.error};
  padding-left: ${theme.shape.borderRadius}px;
  font-size: ${theme.font.small}px;
  transition: 0.2s ease;
  z-index: -1;
`;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  onChange,
  validation,
  required,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputField>
      <StyledInput
        required={required}
        id={id}
        type="text"
        onChange={handleChange}
        value={value}
        data-testid={id}
      />
      <StyledLabel htmlFor={id}>
        {label}
        {required && " *"}
      </StyledLabel>
      <StyledValidation validation={Boolean(validation)}>
        {validation}
      </StyledValidation>
    </InputField>
  );
};
