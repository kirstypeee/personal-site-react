import { styled } from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const Row = styled.div<{ $width: string }>`
  display: flex;
  width: ${({ $width }) => $width};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 ${theme.shape.margin}px;
  margin: 0 ${theme.shape.responsive.margin};
`;
