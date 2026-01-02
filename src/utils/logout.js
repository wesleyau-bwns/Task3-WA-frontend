import { clearTokens } from "./tokenService";
import { logoutRequest } from "../api/endpoints/auth";

export const logout = async () => {
  try {
    await logoutRequest();
  } catch (err) {
    // Still proceed with local logout
  } finally {
    clearTokens();
    window.location.href = process.env.PUBLIC_URL || "/";
  }
};
