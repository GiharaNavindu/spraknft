import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Hero1 from "./components/Hero1.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Sidebar from "./components/SideBar.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import HotProducts from "./pages/HotProducts.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = (token, username) => {
    console.log("User logged in:", username);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-pink-500 border-solid rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="app-container flex flex-col min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero1 />
                <HotProducts />
                <BestSellers />
              </motion.div>
            }
          />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("token") ? (
                <Sidebar />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
