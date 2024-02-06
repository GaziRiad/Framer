"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="pb-40">
      <motion.div
        onClick={() => setIsAnimating((cur) => !cur)}
        initial={{ x: 0, opacity: 0.5 }}
        animate={isAnimating ? { x: "68vw", opacity: 1, rotate: 360 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        className=" w-72 h-72 bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
}

export default Box1;
