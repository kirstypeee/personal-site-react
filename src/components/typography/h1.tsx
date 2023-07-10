import styled, { keyframes } from "styled-components";

import { theme } from "../../theming/defaultTheme";

const flicker = keyframes`
      0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
      opacity: .99;
      }
      20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
          opacity: 0.4;
      }
  `;

export const H1 = styled.h1`
  font-family: "Tilt Neon";
  font-size: 5rem;
  color: ${theme.colors.neon.light};
  text-shadow: 1px 0px 4px ${theme.colors.neon.light},
    2px 0px 4px ${theme.colors.neon.light},
    3px 0px 4px ${theme.colors.neon.light},
    2px 0px 3px ${theme.colors.neon.main},
    2px 3px 15px ${theme.colors.neon.main}, 2px 0px 15px, 5px 0px 125px,
    20px 0vw 200px ${theme.colors.neon.main},
    40px 0vw 200px ${theme.colors.neon.main};
  text-transform: uppercase;
  & .flicker {
    animation: ${flicker} 1s linear infinite;
  }
`;
