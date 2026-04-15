"use client";
import React, { useRef, useState } from "react";
import Logo from "../assets/svg/logo.svg";
import Image from "next/image";

const Header = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const items = ["Overview", "Features", "FAQ"];
  return (
    <nav className="fixed top-2 xs:top-4 z-50 px-4 xs:px-0 flex w-full">
      <div className="w-fit bg-[#2323234d] border-[1px] border-[#ffffff14] rounded-full p-3.5 pl-[15px] pr-6 flex items-center gap-6  h-12 mx-auto">
        <button>
          <Image
            src={Logo}
            alt="Glaze"
            className="h-5 w-[63px] cursor-pointer shrink-0"
          />
        </button>
        <div ref={containerRef} className="flex relative items-center gap-6">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={(e) => {
                setActive(i);

                const rect = e.target.getBoundingClientRect();
                const parentRect = containerRef.current.getBoundingClientRect();

                const left = rect.left - parentRect.left + rect.width / 2;

                document.getElementById("dot").style.left = `${left}px`;
              }}
              className={`h-8 text-[15px] cursor-pointer leading-none font-medium transition-colors ${
                active === i ? "text-white" : "text-[#a0a0a0] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

          <span
            id="dot"
            className="bg-[#a0a0a0] absolute w-[3px] h-[3px] rounded-full pointer-events-none opacity-100 transition-all duration-300 left-[20px] top-[30px]"
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
