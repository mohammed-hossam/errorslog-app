import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProjectsCardProps } from "../components/ProjectsCard";

async function getProjects() {
  const { data } = await axios.get("https://prolog-api.profy.dev/project");
  console.log(data);
  return data;
}

function useProjects() {
  return useQuery<ProjectsCardProps[], Error>(["ProjectsData"], getProjects);
}

export default useProjects;
