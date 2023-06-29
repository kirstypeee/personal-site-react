import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";
import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    backgrounds: {
      default: "isabelline",
      values: [{ name: "isabelline", value: "#F4F0EC" }],
    },
  },
};

const TestContent = () => {
  return (
    <img
      alt="Randomised to show card with content"
      src="https://picsum.photos/200"
    />
  );
};

const TestTitle = () => {
  return <span>Card title</span>;
};

export default meta;
type Story = StoryObj<typeof Card>;

const FlatCardContent = () => {
  return <span>Flat Card</span>;
};
export const FlatCard: Story = {
  args: {
    content: <FlatCardContent />,
  },
};

const RaisedCardContent = () => {
  return <span>Raised Card</span>;
};
export const RaisedCard: Story = {
  args: {
    elevation: 1,
    content: <RaisedCardContent />,
  },
};

export const CardWithContent: Story = {
  args: { content: <TestContent />, width: "fit-content" },
};

export const CardWithTitle: Story = {
  args: { header: <TestTitle />, content: <TestContent /> },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    const titleElement = canvas.getByText("Card title");

    const contentElement = canvas.getByAltText(
      "Randomised to show card with content"
    );

    // 👇 Assert DOM structure
    await expect(titleElement).toBeInTheDocument();
    await expect(contentElement).toBeInTheDocument();
  },
};
