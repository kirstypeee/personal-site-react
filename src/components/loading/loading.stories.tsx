import { BounceLoading } from "./bounceLoading";
import type { Meta } from "@storybook/react";
import { SimpleLoading } from "./simpleLoading";

const meta: Meta = {
  title: "Components/LoadingIndicator",
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const SimpleLoadingIndicator = () => {
  return <SimpleLoading size={50} />;
};

export const BounceLoadingIndicator = () => {
  return <BounceLoading size={12} />;
};

export default meta;
