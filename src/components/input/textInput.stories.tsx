import { useEffect, useState } from "react";
import { userEvent, within } from "@storybook/testing-library";

import { TextInput as Input } from "./textInput";
import type { Meta } from "@storybook/react";
import { expect } from "@storybook/jest";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: Input,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const TextInput = () => {
  const [email, setEmail] = useState("");
  return <Input label="Email" id="email" value={email} onChange={setEmail} />;
};

const TextInputWithValidationComponent = () => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setValidation("Please enter a valid email");
    }, 10);

    return () => clearTimeout(timeout);
  }, [validation]);
  return (
    <Input
      label="Email"
      id="email"
      value={email}
      onChange={setEmail}
      validation={validation}
      required={true}
    />
  );
};
export const TextInputWithValidation = {
  render: () => <TextInputWithValidationComponent />,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("email"), "email@provider.com123");

    // 👇 Assert DOM structure
    await expect(canvas.getByText("Email *")).toBeInTheDocument();
  },
};

export default meta;
