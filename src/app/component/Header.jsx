"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/svg/logo.svg";
import Image from "next/image";

const Header = () => {
  const [active, setActive] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const items = [
    { label: "Overview", targetId: "overview" },
    { label: "Features", targetId: "features" },
    { label: "FAQ", targetId: "faq" },
  ];

  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveIndicatorDot = (buttonElement) => {
    const rect = buttonElement.getBoundingClientRect();
    const parentRect = containerRef.current?.getBoundingClientRect();
    if (!parentRect) return;

    const left = rect.left - parentRect.left + rect.width / 2;
    const dot = document.getElementById("dot");
    if (dot) {
      dot.style.left = `${left}px`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-2 xs:top-4 z-50 px-4 xs:px-0 flex w-full">
      <div
        className={`w-fit rounded-full p-3.5 pl-[15px] pr-6 flex items-center gap-6 h-12 mx-auto border-[1px] transition-all duration-300 ${isScrolled
          ? "bg-[#23232380] border-[#ffffff26] backdrop-blur"
          : "bg-[#2323234d] border-[#ffffff14]"
          }`}
      >
        <button
          type="button"
          onClick={() => {
            setActive(0);
            scrollToSection("overview");
          }}
        >
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
              type="button"
              onClick={(e) => {
                setActive(i);
                moveIndicatorDot(e.currentTarget);
                scrollToSection(item.targetId);
              }}
              className={`h-8 text-[15px] cursor-pointer leading-none font-medium transition-colors ${active === i ? "text-white" : "text-[#a0a0a0] hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}
          <span
            id="dot"
            className="bg-[#a0a0a0] absolute w-[3px] h-[3px] rounded-full pointer-events-none  transition-all duration-300 left-[20px] top-[30px]"
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
