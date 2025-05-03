"use client";
import { motion } from "framer-motion";

export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
      {...props}
    >
      {children}
    </motion.button>
  );
}