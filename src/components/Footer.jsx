import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
      <div className="basis-1/2">
        <h1 className="text-[11rem] font-semibold tracking-tight leading-none ">
          refokus.
        </h1>
      </div>
      <div className="basis-1/2 flex gap-4 ">
        <div className="basis-1/3">
          <h4 className="mb-10 text-zinc-50 capitalize">Socials</h4>
          {["instagram", "Twitter (x?)", "LinkedIn "].map((item, index) => <a className="block mt-2 text-zinc-600 capitalize">{item}</a>)}
        </div>
        <div className="basis-1/3">
          <h4 className="mb-10 text-zinc-50 capitalize">Socials</h4>
          {["instagram", "Twitter (x?)", "LinkedIn "].map((item, index) => <a className="block mt-2 text-zinc-600 capitalize">{item}</a>)}
        </div>
        <div className="basis-1/2">
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
