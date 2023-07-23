import React, { useEffect, useState } from "react";

import { H2 } from "../typography/h2";
import { styled } from "styled-components";
import { theme } from "../../theming/defaultTheme";

const StyledToolbar = styled.div`
  display: flex;
  width: calc(100% - ${theme.shape.padding}px);
  align-items: center;
  justify-content: space-between;
  padding-left: ${theme.shape.padding}px;
  background-color: ${theme.colors.paper};
  position: absolute;
  top: 0;
`;

const ToolbarPadding = styled.div<{ $height?: number }>`
  position: relative;
  height: ${({ $height }) => $height ?? 70}px;
`;

interface ToolbarProps {
  title: string;
  endContent: React.ReactElement;
}
export const Toolbar: React.FC<ToolbarProps> = ({ title, endContent }) => {
  const [height, setHeight] = useState(
    document.getElementById("toolbar")?.offsetHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setHeight(document.getElementById("toolbar")?.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <StyledToolbar id="toolbar">
        <H2>{title}</H2>
        {endContent}
      </StyledToolbar>
      <ToolbarPadding $height={height} />
    </>
  );
};
