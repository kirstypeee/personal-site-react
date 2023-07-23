import styled, { keyframes } from "styled-components";

import { ArrowButton } from "../../components/button/arrowButton";
import { Body1 } from "../../components/typography/body1";
import { BounceLoading } from "../../components/loading/bounceLoading";
import { Card } from "../../components/card/card";
import { CheckIcon } from "../../components/icons/checkIcon";
import { Divider } from "../../components/decorations/divider";
import { Fieldset } from "../../components/form/fieldset";
import { Form } from "../../components/form/form";
import { FormControl } from "../../components/form/formControl";
import { H2 } from "../../components/typography/h2";
import { H3 } from "../../components/typography/h3";
import React from "react";
import { Row } from "../../components/layout/row";
import { TextInput } from "../../components/input/textInput";
import { UserDetails } from "../../store/user";
import { isEmpty } from "lodash";
import { theme } from "../../theming/defaultTheme";
import { useAppSelector } from "../../hooks/storeHooks";

const STAR_COUNT = 200;

const BackgroundStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    360deg,
    ${theme.colors.primary.dark} 0%,
    ${theme.colors.primary.main} 75%,
    ${theme.colors.primary.light} 100%
  );
  overflow: hidden;
  position: relative;
  padding: ${theme.shape.padding}px;
  height: calc(100vh - ${theme.shape.padding}px * 2);
  width: calc(100vw - 16px * 2);
`;

const TextWrapper = styled.div`
  padding: ${theme.shape.padding}px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.shape.padding}px;
  margin: ${theme.shape.margin}px 0;
  margin: ${theme.shape.responsive.margin} 0;
  border: 1px solid ${theme.colors.border};
  border-radius: 30px;
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }`;

const scaleAnimation = keyframes`
  0% {
    transform: scale3d(0.4, 0.4, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1);
  }

  100% {
    transform: scale3d(0.4, 0.4, 1);
  }`;

type StarProps = {
  delay: number;
  duration: number;
};
const Star = styled.div<StarProps>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  mix-blend-mode: screen;
  background-image: radial-gradient(#f3e9f8, #f3e9f8 10%, #f3e9f800 56%);
  animation: ${fadeAnimation} 200ms infinite, ${scaleAnimation} 2s infinite;
  animation-delay: ${({ delay }) => delay}ms;
  animation-duration: ${({ duration }) => duration}ms;
`;

type StarContainerProps = {
  size: number;
  startPositionY: number;
  startPositionX: number;
};
const StarContainer = styled.div<StarContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(
    ${({ startPositionX, startPositionY }) =>
      startPositionX + "vw," + startPositionY + "vh"}
  );
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

interface LandingFormProps {
  onSubmit: (user: UserDetails) => void;
}

export const LandingForm: React.FC<LandingFormProps> = ({ onSubmit }) => {
  const [name, setName] = React.useState<string>("");
  const [company, setCompany] = React.useState<string>("");

  const user = useAppSelector((state) => state.user);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const size = Math.random() * 8;
      const delay = Math.random() * 4000;
      const duration = Math.random() * 9000;
      const startPositionY = Math.random() * 100;
      const startPositionX = Math.random() * 100;
      stars.push(
        <StarContainer
          size={size}
          startPositionY={startPositionY}
          startPositionX={startPositionX}
        >
          <Star delay={delay} duration={duration} />
        </StarContainer>
      );
    }
    return stars;
  };

  const submitUserDetails = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, company });
  };
  return (
    <BackgroundStyles>
      {process.env.NODE_ENV !== "development" && renderStars()}
      <Card
        width="50%"
        minWidth="320px"
        elevation={5}
        content={
          <>
            <TextWrapper>
              <H2>Hey I'm Kirsty</H2>
              <H2>Software Developer</H2>
              <Body1>
                I specialise in building (and sometimes designing) web
                applications. I'm a creative at heart, I hope this site
                showcases my skills and brings a little joy in to your day. I
                enjoyed making it
              </Body1>
            </TextWrapper>
            <Divider />
            <Form
              content={
                <Fieldset>
                  <FormControl>
                    <TextInput
                      label="Name"
                      id="name"
                      value={name}
                      onChange={setName}
                      validation={user.error?.toString()}
                    />
                  </FormControl>
                  <FormControl>
                    <TextInput
                      label="Company"
                      id="company"
                      value={company}
                      onChange={setCompany}
                      validation={user.error?.toString()}
                    />
                  </FormControl>
                  <FormControl alignItems="flex-end">
                    {user.submitting ? (
                      <BounceLoading size={8} />
                    ) : (
                      <ArrowButton
                        type="submit"
                        disabled={isEmpty(name) || isEmpty(company)}
                      />
                    )}
                  </FormControl>
                </Fieldset>
              }
              onSubmit={submitUserDetails}
            />
            <Divider />
            <Row $width="auto">
              <IconWrapper>
                <CheckIcon color={theme.colors.disabled} />
                <H3>All Code</H3>
              </IconWrapper>
              <IconWrapper>
                <CheckIcon color={theme.colors.disabled} />
                <H3>No component libraries</H3>
              </IconWrapper>
              <IconWrapper>
                <CheckIcon color={theme.colors.disabled} />
                <H3>Custom icons</H3>
              </IconWrapper>
            </Row>
          </>
        }
      />
    </BackgroundStyles>
  );
};
