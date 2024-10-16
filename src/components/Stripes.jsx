import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      number: 48,
    },
    {
      url: "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      number: 2,
    },
    {
      url: "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      number: 11,
    },
    {
      url: "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      number: 48,
    },
    {
      url: "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      number: 2,
    },
    {
      url: "https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg",
      number: 11,
    },
  ];
  return (
    <div className="flex justify-between items-center mt-24">
      {data.map((ele, index) => (
        <Stripe val={ele} />
      ))}
    </div>
  );
}

export default Stripes;
