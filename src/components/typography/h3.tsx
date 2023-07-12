import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const H3 = styled.h3`
  font-family: "Open Sans Condensed";
  color: ${theme.colors.typography.secondary};
  font-weight: 200;
  text-wrap: nowrap;
  font-size: ${theme.font.medium};
  font-size: ${theme.font.responsive.medium};
  text-transform: uppercase;
`;
