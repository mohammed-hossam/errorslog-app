import React from "react";
import { ProjectsCard } from "../ProjectsCard";
import styled from "styled-components";
import { breakpoint, space } from "@styles/theme";
import useProjects from "../../customHooks/useProjects";

// type Props = {};

function ProjectsList() {
  const { isLoading, isError, data: projectsData, error } = useProjects();
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {projectsData &&
        projectsData.map((project) => {
          return (
            <li key={project.id}>
              <ProjectsCard {...project} />
            </li>
          );
        })}
    </List>
  );
}

export default ProjectsList;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};
  list-style: none;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;
