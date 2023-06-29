import { UserDetails, registerUser } from "../../store/user";

import { LandingForm } from "./landingForm";
import React from "react";
import { useAppDispatch } from "../../hooks/storeHooks";

export const LandingFormPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (user: UserDetails) => {
    dispatch(registerUser(user));
  };
  return <LandingForm onSubmit={onSubmit} />;
};
