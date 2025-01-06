import { motion } from "framer-motion";
import React from "react";

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen bg-black">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-t-4 border-pink-500 border-solid rounded-full"
    />
  </div>
);

export default LoadingScreen;
