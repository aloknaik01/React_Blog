import { useEffect, useState } from "react";
import login from "../../assets/login.webp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { registerUser } from "../../features/auth/authThunks";
import { clearError } from "../../features/auth/authSlice";
import toast from "react-hot-toast";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { status, error, isAuthenticated, response } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, location]);

  // Clear errors when component mounts
  useEffect(() => {
    if (response != null && response?.message?.length > 1 ) {
      toast.success(response?.message);
    }

    if (error) {
      toast.error(error);
    }

    if (status == "succeeded") {
      navigate("/login");
    }

    dispatch(clearError());
  }, [dispatch, error, status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  const isLoading = status === "loading";
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl bg-white shadow-lg m-8 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side (Form) */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-gray-500 mt-2">Please enter your details</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium   text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                className=" mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side (Illustration) */}
        <div className="hidden md:flex items-center justify-center bg-purple-100 p-8">
          <img src={login} alt="Illustration" className="max-w-md w-full" />
        </div>
      </div>
    </div>
  );
}
