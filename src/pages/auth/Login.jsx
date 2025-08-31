import { useEffect, useState } from "react";
import Authentication from "../../assets/Authentication.gif";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { loginUser } from "../../features/auth/authThunks";
import { clearError } from "../../features/auth/authSlice";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { status, error, isAuthenticated } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, location]);

  // Clear errors when component mounts
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(clearError());
  }, [dispatch, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const isLoading = status === "loading";
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="w-full max-w-3xl bg-[var(--bg-secondary)] shadow-lg m-8 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side (Form) */}
        <div className="flex flex-col justify-center p-8 sm:p-12 text-[var(--text-primary)]">
          <h2 className="text-3xl font-bold ">Welcome back</h2>
          <p className="text-[var(--text-secondary)] mt-2">
            Please enter your details
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 w-full px-4 py-2 border border-[var(--text-secondary)] rounded-lg
               text-[var(--text-primary)]
               focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm ">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 w-full px-4 py-2 border border-[var(--text-secondary)] rounded-lg
               text-[var(--text-primary)]
               focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div className="text-sm ">
              <Link to="#" className="text-[var(--btn-hover)] hover:underline">
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-black py-2 rounded-lg hover:bg-[var(--btn-hover)]  transition"
              disabled={isLoading}
            >
              Sign in
            </button>

            <p className="text-center text-sm text-[var(--text-secondary)]">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-[var(--btn-hover)] hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side (Illustration) */}
        <div className="hidden md:flex items-center justify-center bg-[#ffd119] p-8">
          <img src={Authentication} alt="Illustration" className="max-w-md w-full" />
        </div>
      </div>
    </div>
  );
}
