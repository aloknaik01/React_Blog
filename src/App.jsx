import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Register from "./pages/auth/Register.jsx";
import { Toaster } from "react-hot-toast";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
          }}
        />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
