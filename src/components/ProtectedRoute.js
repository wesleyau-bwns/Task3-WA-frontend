import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { isAuthReady } from "../utils/tokenService";

export default function ProtectedRoute({
  children,
  allowedPermissions = [],
  requireAll = false,
}) {
  const { user, loading, fetchUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Fetch user data if token exists but user data isn't loaded yet
    if (isAuthReady() && !user && !loading) {
      fetchUser();
    }
  }, [user, loading, fetchUser]);

  // Redirect to sign-in if no token is available
  if (!isAuthReady()) return <Navigate to="/" replace />;

  // Show loading indicator while fetching user data
  if (loading || !user) return null;

  // Check permissions if specified
  if (allowedPermissions.length > 0) {
    const hasPermission = requireAll
      ? allowedPermissions.every((p) => user.permissions?.includes(p))
      : allowedPermissions.some((p) => user.permissions?.includes(p));

    if (!hasPermission) {
      console.log("[ProtectedRoute] Unauthorized access:", {
        path: location.pathname,
        userPermissions: user.permissions,
        allowedPermissions,
      });

      return <Navigate to="/unauthorized" replace />;
    }
  }

  // Render protected content once user is authenticated
  return children;
}
