import React from "react";

function Stripe({val}) {
  return (
    <div className="border-zinc-600 w-[16.66%] px-10 border-b-[1.2px] border-r-[1.2px] border-t-[1.2px] flex justify-between items-center py-5">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
