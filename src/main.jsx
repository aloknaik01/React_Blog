import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./indexx.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Register from "./pages/auth/Register.jsx";
import { Toaster } from "react-hot-toast";
import Header from "./components/Headder/Header.jsx";
import Navbar from "./components/Headder/Nav/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
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
  </StrictMode>
);
