import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arquitel",
      description: "arquitel description",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description: "arquitel description",
      live: true,
      case: false,
    },
    {
      title: "YYR 2022",
      description: "arquitel description",
      live: true,
      case: false,
    },
    {
      title: "Yahoo",
      description: "arquitel description",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description: "arquitel description",
      live: true,
      case: false,
    },
    {
      title: "Google",
      description: "arquitel description",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="relative mt-32 ">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className=" top-0 absolute h-full w-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute h-[20rem] w-[25rem] left-[17%] bg-white - translate-x-[50%] overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className=" h-full w-full  bg-sky-100 "
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            animate={{ y: -pos + `rem` }}
            className=" h-full w-full  bg-sky-200 "
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            animate={{ y: -pos + `rem` }}
            className=" h-full w-full  bg-sky-300 "
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            animate={{ y: -pos + `rem` }}
            className=" h-full w-full  bg-sky-400 "
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            animate={{ y: -pos + `rem` }}
            className=" h-full w-full  bg-sky-500 "
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            animate={{ y: -pos + `rem` }}
            className=" h-full w-full  bg-sky-600 "
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
