import Answers from "../pages/Answers";
import Form from "../pages/Form";
import LandignPage from "../pages/LandignPage";

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
    Component: LandignPage,
    name: "Landing Page",
  },
  {
    path: "/form",
    to: "/form",
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
