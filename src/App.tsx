import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Team from "./pages/Team";
import Manifesto from "./pages/Manifesto";
import Projects from "./pages/Projects";

// 1. Definiere deine Routen (Welche URL zeigt welche Seite?)
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/manifesto",
    element: <Manifesto />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  // 2. Gib den Router an die App weiter
  return <RouterProvider router={router} />;
}

export default App;
