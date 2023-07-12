import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  transition: all 1s;
  transform-origin: 50% 50%;
  margin-right: 5px;
`;

export const CheckIcon: React.FC<{ color: string }> = ({ color }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke={color}
  >
    <circle cx="50%" cy="50%" r="10" />
    <polyline points="7 14, 10 17, 17 8" />
  </Icon>
);
