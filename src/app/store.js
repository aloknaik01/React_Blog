import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import postsReducer from "@/features/posts/postsSlice";
import categoriesReducer from "@/features/categories/categoriesSlice";
import commentsReducer from "@/features/comments/commentsSlice";

// Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    categories: categoriesReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
