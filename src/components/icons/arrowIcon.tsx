import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  transition: all 1s;
  transform-origin: 50% 50%;
`;

export const ArrowIcon: React.FC<{ color: string }> = ({ color }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke={color}
  >
    <line id="arrow-line" x1="0" y1="12" x2="21" y2="12"></line>
    <polyline id="arrow-head" points="16 6, 22 12, 16 18"></polyline>
  </Icon>
);
