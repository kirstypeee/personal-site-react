import { device, theme } from "../../theming/defaultTheme";

import { styled } from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
  grid-auto-rows: minmax(0px, auto);
  grid-gap: ${theme.shape.margin}px;
`;
