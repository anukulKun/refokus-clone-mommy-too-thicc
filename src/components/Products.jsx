import React from "react";
import Product from "./Product";

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
  return (
    <div>
      {products.map((val, index) => 
        <Product val={val} />
      )}
    </div>
  );
}

export default Products;
