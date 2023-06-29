import { ArrowButton as ArrowButtonComponent } from "./arrowButton";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof ArrowButtonComponent> = {
  title: "Components/Button",
  component: ArrowButtonComponent,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const ArrowButton = () => {
  return <ArrowButtonComponent type="button" onClick={() => {}} />;
};

export default meta;
