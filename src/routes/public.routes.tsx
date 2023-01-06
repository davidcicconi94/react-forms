import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ name, path, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
