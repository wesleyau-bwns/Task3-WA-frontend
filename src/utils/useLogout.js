import { useAuth } from "../contexts/AuthContext";
import { clearTokens } from "./tokenService";
import { logoutRequest } from "../api/endpoints/auth";
import { BASENAME } from "../config";

export const useLogout = () => {
  const { setUser } = useAuth();

  const logout = async () => {
    try {
      await logoutRequest();
    } catch (err) {
      // Still proceed with local logout
    } finally {
      clearTokens();
      setUser(null);
      window.location.href = `${window.location.origin}${BASENAME}/login`;
    }
  };

  return logout;
};
