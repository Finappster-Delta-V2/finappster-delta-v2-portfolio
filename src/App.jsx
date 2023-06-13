import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";

import { Home } from "./pages/Home";
import { Proposal } from "./pages/Proposal";
import { PlanningControl } from "./pages/PlanningControl";
import { ResearchUpskilling } from "./pages/ResearchUpskilling";
import { TeamworkCommunication } from "./pages/TeamworkCommunication";
import { DevActivityQA } from "./pages/DevActivityQA";

const NavbarWrapper = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/proposal",
        element: <Proposal />,
      },
      {
        path: "/planning",
        element: <PlanningControl />,
      },
      {
        path: "/research",
        element: <ResearchUpskilling />,
      },
      {
        path: "/teamwork",
        element: <TeamworkCommunication />,
      },
      {
        path: "/dev",
        element: <DevActivityQA />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
