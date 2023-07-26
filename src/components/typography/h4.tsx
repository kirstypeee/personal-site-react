import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const H4 = styled.h4`
  font-family: "Inconsolata", monospace;
  color: ${theme.colors.typography.primary};
  font-weight: 200;
  font-size: ${theme.font.large};
  font-size: ${theme.font.responsive.large};
`;
