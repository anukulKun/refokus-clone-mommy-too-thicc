import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover }) {
  return (
    <div className={`w-1/2 bg-zinc-800 p-5 rounded-xl ${width} hover:${hover} flex flex-col min-h-[30rem] justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading.</h1>
      </div>
      <div className="down w-full ">
        {start  && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] mt-5 border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm font-medium text-zinc-500">
            Lorem ipsum dolor sit amet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
