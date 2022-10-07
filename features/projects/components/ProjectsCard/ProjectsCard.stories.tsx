import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectLanguage, ProjectsCard, ProjectStatus } from "./ProjectsCard";

export default {
  title: "Projects/ProjectsCard",
  component: ProjectsCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProjectsCard>;

const Template: ComponentStory<typeof ProjectsCard> = (props) => (
  <div style={{ width: 500, padding: 50 }}>
    <ProjectsCard {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "xzy",
  name: "Frontend - Web",
  language: ProjectLanguage.react,
  numIssues: 420,
  numEvents24h: 721,
  status: ProjectStatus.critical,
};
// Default.parameters = {
//   viewMode: "docs",
// };
