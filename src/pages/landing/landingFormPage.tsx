import React, { useEffect } from "react";
import { UserDetails, registerUser } from "../../store/user";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

import { LandingForm } from "./landingForm";
import { useNavigate } from "react-router-dom";

export const LandingFormPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (user: UserDetails) => {
    dispatch(registerUser(user));
  };

  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.success) {
      navigate("home");
    }
  }, [navigate, user]);

  return <LandingForm onSubmit={onSubmit} />;
};
