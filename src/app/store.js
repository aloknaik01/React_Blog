import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// Make store globally available for axios interceptor
if (typeof window !== 'undefined') {
  window.__REDUX_STORE__ = store;
}

export const RootState = store.getState;
export const AppDispatch = store.dispatch;