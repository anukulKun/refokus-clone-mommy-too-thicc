import React from "react";
import Marquee from "./Marquee";

function Marquees() {
  var image = [
    [
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
    ],    [
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
    ],

  ];
  return (
    <div className="py-20 mt-20 w-full relative overflow-hidden">
      {image.map( (item,index)=> <Marquee key={index}  imagesurls = {item} direction = {index === 0 ? "left" : "right"} />)}
    </div>
  );
}

export default Marquees;
