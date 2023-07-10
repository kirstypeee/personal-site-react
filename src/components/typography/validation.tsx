import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

export const Validation = styled.span<{ $validation: boolean }>`
position: absolute;
bottom: ${({ $validation }) => ($validation ? "-20px" : "0px")};
color: ${theme.colors.error};
padding-left: ${theme.shape.borderRadius}px;
font-size: ${theme.font.small}px;
transition: 0.2s ease;
z-index: -1;
`;
