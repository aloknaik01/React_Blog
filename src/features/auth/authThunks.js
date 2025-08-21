import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

export const loginThunk = createAsyncThunk('auth/login', async (payload) => {
  await authService.login(payload);     
  const me = await authService.me();    
  return { user: me };
});

export const loadProfileThunk = createAsyncThunk('auth/me', async () => {
  const me = await authService.me();
  return me;
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  try { await authService.logout(); } finally { 
    console.log("Logged out")
   }
  return true;
});


