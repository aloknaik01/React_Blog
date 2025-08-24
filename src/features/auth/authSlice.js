import { createSlice } from "@reduxjs/toolkit";
import { loginUser, fetchMe, logoutUser, registerUser } from "./authThunks";

const initialState = {
  user: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  response: null,
  isAuthenticated: false,
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    forceLogout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    setInitialized: (state) => {
      state.isInitialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login User
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
        state.isAuthenticated = false;
        state.user = null;
        state.isInitialized = true;
      })

      // Fetch Me
      .addCase(fetchMe.pending, (state) => {
        if (!state.isInitialized) {
          state.status = "loading";
        }
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = "succeeded";
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "idle";
        state.isInitialized = true;
        state.error = action.payload;
      })

      // Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "idle";
        state.error = null;
      })

      // Register User
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.response = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = {
          status: action.payload?.status,
          message: action.payload?.message,
        };
        state.error = null;
        state.user = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.response = action.payload;
        state.error = action.payload;
      });
  },
});

export const { forceLogout, clearError, setInitialized } = authSlice.actions;
export default authSlice.reducer;
