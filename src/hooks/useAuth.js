import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../features/auth/authThunks";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    // Load user profile on app initialization
    if (!auth.isInitialized && auth.status === "idle") {
      dispatch(fetchMe());
    }
  }, [dispatch, auth.isInitialized, auth.status]);

  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    status: auth.status,
    error: auth.error,
    isLoading: auth.status === "loading",
    isInitialized: auth.isInitialized,
  };
};
