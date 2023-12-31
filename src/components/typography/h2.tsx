import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const H2 = styled.h2`
  font-family: "Open Sans Condensed";
  color: ${theme.colors.typography.secondary};
  font-weight: 200;
  font-size: ${theme.font.large};
  font-size: ${theme.font.responsive.large};
  text-transform: uppercase;
`;
