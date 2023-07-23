import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const Divider = styled.div`
  margin: ${theme.shape.margin}px;
  margin: ${theme.shape.responsive.margin};
  border-radius: 5px;
  background: #ffffff;
  height: 5px;
  box-shadow: ${theme.neoShadow.paperInset};
`;
