import api from "../../api/axiosInstance";

const authService = {
  async login(data) {
    const res = await api.post("/auth/login.php", data);

    return res.data;
  },
  async me() {
    const res = await api.get("/auth/me");
    return res.data;
  },
  async logout() {
    const res = await api.get("/auth/logout.php");
    return res.data;
  },
};

export default authService;
