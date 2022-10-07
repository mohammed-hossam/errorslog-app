import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { ProjectsList } from "@features/projects";
// type Props = {}

const ProjectsPage: NextPage = () => {
  return (
    <Layout
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectsList />
    </Layout>
  );
};

export default ProjectsPage;
