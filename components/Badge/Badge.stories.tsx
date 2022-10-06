import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "./Badge";
import { BadgeSize, BadgeColor } from "./Badge";

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ size, color }) => (
  <div style={{ padding: "2em" }}>
    <Badge size={size} color={color}>
      label
    </Badge>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.sm,
  color: BadgeColor.primary,
};
