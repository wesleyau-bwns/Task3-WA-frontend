import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import SignIn from "./pages/SignIn";
import UnauthorizedPage from "./pages/Unauthorized";
import Dashboard from "./layout/Dashboard";

import { refreshToken } from "./api/endpoints/auth";
import { clearTokens, markAuthReady } from "./utils/tokenService";
import { ALL_PAGES } from "./constants/pages";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    refreshToken()
      .catch(() => clearTokens())
      .finally(() => {
        markAuthReady();
        setReady(true);
      });
  }, []);

  if (!ready) return null;

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SignIn />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedPermissions={["view-dashboard"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        {ALL_PAGES.map((page) => {
          return (
            <Route
              key={page.path || "index"}
              index={!page.path}
              path={page.path || undefined}
              element={
                <ProtectedRoute allowedPermissions={page.allowedPermissions}>
                  <page.component />
                </ProtectedRoute>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
