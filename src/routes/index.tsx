import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePage } from "../pages/home/homePage";
import { LandingFormPage } from "../pages/landing/landingFormPage";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index={true} element={<LandingFormPage />} />
        <Route path="home" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};
