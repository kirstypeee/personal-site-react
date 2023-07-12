import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const Body1 = styled.span`
  font-family: "Inconsolata", monospace;
  color: ${theme.colors.typography.primary};
  font-weight: 200;
  font-size: ${theme.font.medium};
  font-size: ${theme.font.responsive.medium};
`;
