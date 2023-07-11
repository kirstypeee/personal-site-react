import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const H2 = styled.h2`
  font-family: "Open Sans Condensed";
  color: ${theme.colors.typography.secondary};
  font-weight: 200;
  font-size: 2vw;
  font-size: clamp(1rem, 2vw, 2rem);
`;
