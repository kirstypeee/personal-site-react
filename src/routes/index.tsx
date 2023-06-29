import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { LandingFormPage } from "../pages/landing/landingFormPage";
import { ProtectedRoute } from "./protectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index={true} element={<LandingFormPage />} />
        <Route path="home" element={<ProtectedRoute>HOME</ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
