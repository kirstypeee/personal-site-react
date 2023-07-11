import styled, { keyframes } from "styled-components";

import { ArrowButton } from "../../components/button/arrowButton";
import { Card } from "../../components/card/card";
import { Fieldset } from "../../components/form/fieldset";
import { Form } from "../../components/form/form";
import { FormControl } from "../../components/form/formControl";
import React from "react";
import { SimpleLoading } from "../../components/loading/simpleLoading";
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
                    <SimpleLoading size={20} />
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
        }
      />
    </BackgroundStyles>
  );
};
