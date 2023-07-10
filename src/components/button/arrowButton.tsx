import React from "react";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface ArrowButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const StyledButton = styled.button<ArrowButtonProps>`
  padding: 4px 16px;
  align-items: center;
  display: flex;
  border: none;
  background: none;
  border-radius: 24px;
  transition: all ease 0.3s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ disabled }) =>
    disabled
      ? ""
      : `&:hover svg {
    transform: scale(1.2);
    filter: drop-shadow(${theme.elevation[1].dropShadow});
  }`}
`;

const Icon = styled.svg`
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  transition: all 1s;
  transform-origin: 50% 50%;
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
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        stroke={disabled ? theme.colors.disabled : theme.colors.primary.dark}
      >
        <line id="arrow-line" x1="0" y1="12" x2="21" y2="12"></line>
        <polyline id="arrow-head" points="16 6, 22 12, 16 18"></polyline>
      </Icon>
    </StyledButton>
  );
};
