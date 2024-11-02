import React from "react";
import "../index.css";
import Button from "./Button";

function  Navbar() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Work", href: "#" },
    { name: "Company", href: "#" },
    { name: "", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <nav className="max-w-screen-xl mx-auto flex items-center py-6 font-regular justify-between text-white border-b-[1px] border-zinc-700">
      <div className="flex items-center">
        <img
          src="https://www.keizerworks.com/_next/static/media/meaw3.9837850e.svg"
          alt="Logo"
        />
        <div className="links flex gap-14 ml-20">
          {links.map((link, index) => (
            <a
              key={index}
              className="text-sm flex items-center gap-1"
              href={link.href}
            >
              {link.name.length === 0 ? (
                <span key={index} className="w-[2px] h-4 bg-zinc-700"></span>
              ) : (
                <>
                  {index === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.45em #00FF19" }}
                      className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                    ></span>
                  )}
                  {link.name}
                </>
              )}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </nav>
  );
}

export default Navbar;
