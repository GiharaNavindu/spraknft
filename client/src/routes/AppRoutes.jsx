import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Sidebar from "../components/SideBar.jsx";
import HeroPage from "../pages/HeroPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HeroPage />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Sidebar />
        </ProtectedRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default AppRoutes;
