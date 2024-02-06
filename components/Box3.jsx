"use client";

import { delay, motion, stagger } from "framer-motion";

function Box3() {
  const boxVariants = {
    hidden: { x: "-100vw" },
    visibale: {
      x: 0,
      transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.25 },
    },
  };

  const listVariants = {
    hidden: { x: -10, opacity: 0 },
    visibale: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="pb-40">
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visibale"
        className="w-72 h-72 bg-emerald-300 flex flex-col items-center justify-center"
      >
        {[1, 2, 3].map((num) => (
          <motion.li
            variants={listVariants}
            key={num}
            className="bg-white w-2 h-2 p-6 m-2 list-none"
          ></motion.li>
        ))}
      </motion.div>
    </div>
  );
}

export default Box3;
