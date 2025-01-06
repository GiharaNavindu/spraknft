import { motion } from "framer-motion";
import React from "react";
import Hero1 from "../components/Hero1.jsx";
import BestSellers from "../pages/BestSellers.jsx";
import HotProducts from "../pages/HotProducts.jsx";

const HeroPage = () => (
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
);

export default HeroPage;
