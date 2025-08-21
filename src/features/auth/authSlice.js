// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, loadProfileThunk } from './authThunks';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    forceLogout: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (b) => {
    b.addCase(loginThunk.pending, (s) => { s.status = 'loading'; s.error = null; })
     .addCase(loginThunk.fulfilled, (s, a) => { s.status = 'succeeded'; s.user = a.payload.user; })
     .addCase(loginThunk.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload || 'Login failed'; })
     .addCase(loadProfileThunk.fulfilled, (s, a) => { s.user = a.payload; })
     .addCase(logoutThunk.fulfilled, (s) => { s.user = null; });
  }
});

export const { forceLogout } = slice.actions;
export default slice.reducer;
