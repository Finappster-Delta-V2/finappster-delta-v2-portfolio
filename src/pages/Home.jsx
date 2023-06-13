import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-8 bg-slate-800 text-white md:flex-row md:space-y-0 md:space-x-40">
        <motion.div
          className="text-4xl md:text-8xl"
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
        >
          Delta V2 <br />
          <p className="mt-6 ml-4 text-2xl">2022-2023</p>
        </motion.div>
        <motion.div
          className="h-96 w-96 overflow-hidden rounded-full object-cover drop-shadow-2xl"
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <img
            className="w-full"
            src="/public/assets/image/jameson.jpg"
            alt="Image 1"
          />
        </motion.div>
      </div>
      <div className="h-screen"></div>
    </>
  );
};
