import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      return await authService.login(credentials);
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.error || "Login failed");
    }
  }
);

// Get current session user
export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkAPI) => {
  try {
    const data = await authService.getMe();
    return data.user || data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.error || "Not authenticated");
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
      return thunkAPI.rejectWithValue(err?.message || "Not authenticated");
    }
  }
);

//Register Thunk
export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      return await authService.register(credentials);
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.error);
    }
  }
);
