import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [image, setImages] = useState([
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "53%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "47%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "51%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "53%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "55%",
      left: "52%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imageShow([0, 1, 2, 3], 4, 5);
        break;
    }
  });

  return (
    <div className="w-full mt-10 ">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none text-center">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (ele, index) =>
              ele.isActive && (
                <img
                  key={index}
                  className="rounded-lg"
                  width={300}
                  height={300}
                  src={ele.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
