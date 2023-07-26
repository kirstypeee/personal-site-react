import { styled } from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const Body2 = styled.span`
  font-family: "Inconsolata", monospace;
  color: ${theme.colors.typography.secondary};
  font-weight: 200;
  font-size: ${theme.font.small};
  font-size: ${theme.font.responsive.small};
`;
