import axios from "axios";
import {
  getAccessToken,
  isTokenExpired,
  clearTokens,
} from "../utils/tokenService";
import { refreshToken } from "./endpoints/auth";

const api = axios.create({
  baseURL: "https://developers.minxpay.com/ws6/BPSP-DEMO/backend/public",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // IMPORTANT for refresh cookie
});

// REQUEST interceptor
api.interceptors.request.use(async (config) => {
  // Skip auth endpoints
  if (
    config.url.includes("/api/auth/login") ||
    config.url.includes("/api/auth/refresh")
  ) {
    return config;
  }

  let token = getAccessToken();

  if (token && isTokenExpired()) {
    try {
      // console.log("Refreshing access token...");
      const data = await refreshToken();
      token = data.access_token;
    } catch (err) {
      clearTokens();
      window.location.href = process.env.PUBLIC_URL || "/";
      return Promise.reject(err);
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearTokens();
      window.location.href = process.env.PUBLIC_URL || "/";
    }
    return Promise.reject(error);
  }
);

export default api;
