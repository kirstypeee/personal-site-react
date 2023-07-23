import { ReactComponent as BloggerLogo } from "../../assets/blogger.svg";
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";
import { Row } from "../layout/row";
import { styled } from "styled-components";
import { theme } from "../../theming/defaultTheme";

interface LinkProps {
  $scale: number;
}
const StyledLink = styled.a<LinkProps>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${theme.colors.paperContrast};
    transform: scale(${({ $scale }) => $scale});
  }
`;
export const SocialsRow = () => {
  return (
    <Row $width="auto">
      <StyledLink
        href="https://github.com/kirstypeee"
        target="_blank"
        $scale={0.85}
      >
        <GithubLogo />
      </StyledLink>
      <StyledLink
        $scale={1}
        href="https://www.linkedin.com/in/kirstypurcell/"
        target="_blank"
      >
        <LinkedInLogo />
      </StyledLink>
      <StyledLink
        $scale={0.8}
        href="https://kirstydev.blogspot.com/"
        target="_blank"
      >
        <BloggerLogo />
      </StyledLink>
    </Row>
  );
};
