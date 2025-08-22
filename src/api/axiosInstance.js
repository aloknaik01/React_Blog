import axios from "axios";
import { forceLogout } from "../features/auth/authSlice";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
});

// Request interceptor
api.interceptors.request.use((config) => {
  return config;
});

// Response interceptor -
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      if (window.__REDUX_STORE__) {
        window.__REDUX_STORE__.dispatch(forceLogout());
      }

      // Redirect to login
      if (
        typeof window !== "undefined" &&
        !window.location.pathname.includes("/login")
      ) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error?.response?.data || error);
  }
);

export default api;
