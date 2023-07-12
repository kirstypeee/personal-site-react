import { HingeCircleReveal } from "./hingeCircleReveal";
import type { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Components/Reveals",
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#F4F0EC" }],
    },
  },
};

export const Hinge = () => {
  return <HingeCircleReveal />;
};

export default meta;
