"use client";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureSection({ title, cn, photographer, imageUrl, reversed = false, link = "#" }) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-center gap-8 max-w-6xl w-full my-10`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.div variants={itemVariants} className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="w-full md:w-1/2 text-white text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-1">CN : {cn}</p>
        <p className="text-lg mb-1">Photo by : {photographer}</p>
        <p className="text-sm text-gray-400 mb-6">
          Image © By Lifes’Cos All rights reserved
        </p>
        <AnimatedButton href={link}>Details →</AnimatedButton>
      </motion.div>
    </motion.div>
  );
}