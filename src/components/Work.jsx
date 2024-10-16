import React from "react";

function Work() {
  var image = [
    {
      url: "https://www.keizerworks.com/_next/image?url=%2FImages%2F19%20(2).png&w=1080&q=75",
      top: "50%",
      left: "50%",
      isActive: true,
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
  ];

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none text-center">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (ele, index) =>
              ele.isActive && (
                <img className="rounded-lg" src={ele.url} alt="" />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
