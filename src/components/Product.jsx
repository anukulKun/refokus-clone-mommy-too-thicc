import React from "react";
import Button from "./Button";

function Product({ val }) {
  return (
    <div className="w-full py-20">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5 ">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
