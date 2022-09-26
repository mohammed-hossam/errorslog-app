import { Routes } from "../../config/routes";
import { Story as StoryType } from "@storybook/react";

type Params = {
  route: string;
};

let route = Routes.issues;
export function useRouter() {
  if (route) {
    return {
      pathname: route,
    };
  }
}

// The decorator to be used in ./storybook/preview to apply the mock to all stories

export function decorator(
  Story: StoryType,
  { parameters }: { parameters: Params }
) {
  if (parameters && parameters.route) {
    route = parameters.route;
  }
  return <Story />;
}
