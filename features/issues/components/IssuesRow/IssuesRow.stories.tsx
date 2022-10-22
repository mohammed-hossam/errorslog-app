import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IssuesRow } from "./index";
import { ProjectLanguage } from "@features/projects/components/ProjectsCard/ProjectsCard";
import { IssueLevel } from "@features/issues/types/issue.types";

export default {
  title: "Issues/IssuesRow",
  component: IssuesRow,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IssuesRow>;

const Template: ComponentStory<typeof IssuesRow> = (props) => (
  <div>
    <IssuesRow {...props} />
    <IssuesRow {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  projectLanguage: ProjectLanguage.react,
  issue: {
    id: "c9613c41-32f0-435e-aef2-b17ce758431b",
    projectId: "6d5fff43-d691-445d-a41a-7d0c639080e6",
    name: "TypeError",
    message: "Cannot read properties of undefined (reading 'length')",
    stack:
      "Cannot read properties of undefined (reading 'length') \n at eval (webpack-internal:///./pages/index.tsx:37:7) \n at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n development.js:157:27)",
    level: IssueLevel.error,
    numEvents: 105,
    numUsers: 56,
  },
};
Default.parameters = {
  viewMode: "docs",
};
