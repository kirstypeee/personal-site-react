import type { Meta } from "@storybook/react";
import { SocialsRow } from "./socialsRow";
import { Toolbar } from "./toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Toolbar",
  parameters: {
    backgrounds: {
      default: "isabelline",
      values: [{ name: "isabelline", value: "#F4F0EC" }],
    },
  },
};

export const ToolbarComponent = () => {
  return <Toolbar title="Welcome, Test!" endContent={SocialsRow()} />;
};

export default meta;
