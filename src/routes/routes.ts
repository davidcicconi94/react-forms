import Answers from "../pages/Answers";
import Form from "../pages/Form";

interface Route {
  path: string;
  to: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Form,
    name: "Form",
  },
  {
    path: "/answers",
    to: "/answers",
    Component: Answers,
    name: "Answers",
  },
];
