import { styled } from "styled-components";

export const Row = styled.div<{ $width: string }>`
  display: flex;
  width: ${({ $width }) => $width};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
