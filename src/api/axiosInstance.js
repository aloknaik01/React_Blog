import axios from "axios";
import { store } from "@/app/store";
import { forceLogout } from "@/features/auth/authSlice";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
});

api.interceptors.request.use((config) => config);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      store.dispatch(forceLogout());
    }
    return Promise.reject(error?.response?.data || error);
  }
);

export default api;
