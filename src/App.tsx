import { AppRoutes } from "./routes";
import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import { theme } from "./theming/defaultTheme";

const AppStyles = styled.div`
  font-family: ${theme.font.families};
`;

const App: React.FC = () => {
  WebFont.load({
    google: {
      families: theme.font.families.split(","),
    },
  });

  return (
    <AppStyles>
      <AppRoutes />
    </AppStyles>
  );
};

export default App;
