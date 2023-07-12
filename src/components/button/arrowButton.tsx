import { ArrowIcon } from "../icons/arrowIcon";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface ArrowButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const StyledButton = styled.button<ArrowButtonProps>`
  padding: 8px;
  align-items: center;
  display: flex;
  border: none;
  background: none;
  border-radius: 24px;
  transition: all ease 0.3s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 50%;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff;
  ${({ disabled }) =>
    disabled
      ? `
    background: none;
box-shadow:  none;
    `
      : `&:hover svg {
    transform: scale(1.2);
    filter: drop-shadow(${theme.elevation[1].dropShadow});
  }`}
`;

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  type,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="g-recaptcha"
      data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      data-callback="onSubmit"
      data-action="submit"
    >
      <ArrowIcon
        color={disabled ? theme.colors.disabled : theme.colors.neon.main}
      />
    </StyledButton>
  );
};
