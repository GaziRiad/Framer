"use client";

import { motion } from "framer-motion";

function Box2() {
  return (
    <div className="pb-40">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 60 }}
        className=" w-72 h-72 bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
}

export default Box2;
