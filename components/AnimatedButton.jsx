"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton({ children, href = "#", ...props }) {
  return (
    <Link href={href}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
      {...props}
    >
      {children}
    </motion.button>
    </Link>
  );
}