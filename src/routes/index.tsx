import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Ref, createRef } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useOutlet,
} from "react-router-dom";

import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { HomePage } from "../pages/home/homePage";
import { LandingFormPage } from "../pages/landing/landingFormPage";
import { ProtectedRoute } from "./protectedRoute";
import { styled } from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

const routes = [
  {
    path: "/",
    element: <LandingFormPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
];

const Routes: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef }: { nodeRef: Ref<HTMLDivElement> | undefined } = routes.find(
    (route) => route.path === location.pathname
  ) ?? { nodeRef: undefined };
  return (
    <SwitchTransition mode="in-out">
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={300}
        classNames={"page"}
        unmountOnExit
      >
        {(state) => (
          <Page ref={nodeRef} className="page">
            {currentOutlet}
          </Page>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
