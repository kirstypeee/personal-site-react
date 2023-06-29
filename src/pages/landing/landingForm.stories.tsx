import { LandingForm as LandingFormComponent } from "./landingForm";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof LandingFormComponent> = {
  title: "Pages/Landing Page",
  component: LandingFormComponent,
};

export const LandingForm = () => {
  return <LandingFormComponent onSubmit={() => {}} />;
};

export default meta;
