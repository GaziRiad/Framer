"use client";

import {
  motion,
  useAnimate,
  useAnimation,
  useAnimationControls,
} from "framer-motion";

function Box5() {
  const [scope, animate] = useAnimate();
  const controls = useAnimationControls();

  return (
    <div className="pb-40">
      <button
        className=" text-white bg-sky-700 mr-12 px-6 py-2 font-semibold w-60 cursor-pointer"
        onClick={() =>
          animate(
            scope.current,
            { x: "70vw" },
            { ease: "easeInOut", duration: 1 }
          )
        }
      >
        Move Right
      </button>
      <button
        className=" text-white bg-sky-700 mr-12 px-6 py-2 font-semibold w-60 cursor-pointer"
        onClick={() =>
          animate(
            scope.current,
            {
              x: 0,
            },
            { ease: "easeInOut", duration: 1 }
          )
        }
      >
        Move Left
      </button>
      <button
        className=" text-white bg-sky-700 mr-12 px-6 py-2 font-semibold w-60 cursor-pointer"
        onClick={() =>
          animate(
            scope.current,
            { borderRadius: "100%" },
            { ease: "easeInOut", duration: 1 }
          )
        }
      >
        Circle
      </button>
      <button
        className=" text-white bg-sky-700 mr-12 px-6 py-2 font-semibold w-60 cursor-pointer"
        onClick={() =>
          animate(scope.current, { borderRadius: "0%" }, { ease: "easeInOut" })
        }
      >
        Square
      </button>

      <motion.div
        ref={scope}
        transition={{ duration: 2 }}
        className=" w-72 h-72 bg-emerald-300 flex flex-col items-center justify-center mt-10"
      ></motion.div>
    </div>
  );
}

export default Box5;
