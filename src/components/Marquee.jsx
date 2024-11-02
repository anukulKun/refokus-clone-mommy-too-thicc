import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

function Marquee({ imagesurls, direction }) {
  
  return (
    <div className="w-full overflow-hidden flex ">
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x : direction === "left" ? "-100%" : "0"}} transition={{ease: "linear",duration: 15 , repeat: Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div> 
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x : direction === "left" ? "-100%" : "0"}} transition={{ease: "linear",duration: 15 , repeat: Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div> 
     
    
    </div>
  );
}

export default Marquee;
