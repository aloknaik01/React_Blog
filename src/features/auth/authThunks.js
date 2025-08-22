import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const data = await authService.login(credentials);
      console.log("Login response:", data);
      return data.user || data; // Handle both response formats
    } catch (err) {
      console.error("Login error:", err);
      return thunkAPI.rejectWithValue(err?.message || "Login failed");
    }
  }
);

// Get current session user
export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkAPI) => {
  try {
    const data = await authService.getMe();
    return data.user || data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.message || "Not authenticated");
  }
});

// Logout thunk
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await authService.logout();
      return true;
    } catch (err) {
      console.warn("Logout failed but clearing state:", err);
      return thunkAPI.rejectWithValue(err?.message || "Not authenticated");
    }
  }
);
