import api from "../../api/axiosInstance";

const login = async (credentials) => {
  const res = await api.post("/auth/login.php", credentials);
  return res.data;
};

const getMe = async () => {
  const res = await api.get("/auth/fetchMe.php");
  return res.data;
};

const logout = async () => {
  const res = await api.post("/auth/logout.php");
  return res.data;
};

const authService = { login, getMe, logout };
export default authService;
