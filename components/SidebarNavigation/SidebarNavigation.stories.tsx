import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SidebarNavigation } from "./SidebarNavigation";
import { Routes } from "@config/routes";

export default {
  title: "UI/SidebarNavigation",
  component: SidebarNavigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarNavigation>;

const Template: ComponentStory<typeof SidebarNavigation> = () => (
  <SidebarNavigation />
);

export const Default = Template.bind({});
Default.parameters = {
  //we can set this paramters here or as we did in the mocks both seem to work fine
  route: Routes.alerts,
};
