"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function Box4() {
  return (
    <div className="pb-40">
      <motion.div
        // KEYFRAMES
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
          transition: {
            duration: 2,
          },
        }}
        className=" w-72 h-72 bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
}

export default Box4;
