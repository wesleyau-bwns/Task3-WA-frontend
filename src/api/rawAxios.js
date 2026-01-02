import axios from "axios";
import { getDeviceId } from "../utils/device";

const rawApi = axios.create({
  baseURL: "https://developers.minxpay.com/ws6/BPSP-DEMO/backend/public",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // IMPORTANT for refresh cookie
});

rawApi.interceptors.request.use((config) => {
  config.headers["X-Device-Id"] = getDeviceId();
  return config;
});

export default rawApi;
