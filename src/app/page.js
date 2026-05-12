"use client";
import { useState } from "react";
import Image from "next/image";
import App_icon from "./assets/iamges/app-icon.png";
import Overview from "./component/glanze/Overview/page"
import Features from "./component/glanze/Features/page"
import Faq from "./component/glanze/Faq/page"



const ICON_BURST_PARTICLES_WAVE_A = [
  {
    x: -42,
    y: -170,
    rotate: -12,
    scale: 0.92,
    startScale: 0.46,
    delay: 0,
    duration: 840,
  },
  {
    x: -128,
    y: -104,
    rotate: -20,
    scale: 0.84,
    startScale: 0.42,
    delay: 38,
    duration: 920,
  },
  {
    x: 42,
    y: -170,
    rotate: 12,
    scale: 0.92,
    startScale: 0.46,
    delay: 18,
    duration: 840,
  },
  {
    x: 128,
    y: -104,
    rotate: 20,
    scale: 0.84,
    startScale: 0.42,
    delay: 56,
    duration: 920,
  },
];

const Home = () => {
  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [iconBursts, setIconBursts] = useState([]);
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleJoinWaitlist = () => {
    if (!isValidEmail(email)) {
      setShowEmailError(true);
      return;
    }
  };

  const handleWaitlistIconClick = () => {
    const addBurst = (particles, delay = 0) => {
      const burstId = Date.now() + Math.random() + delay;

      window.setTimeout(() => {
        setIconBursts((prev) => [...prev, { id: burstId, particles }]);

        window.setTimeout(() => {
          setIconBursts((prev) => prev.filter((burst) => burst.id !== burstId));
        }, 1600);
      }, delay);
    };

    addBurst(ICON_BURST_PARTICLES_WAVE_A, 0);
  };

  return (
    <div className="bg-[#121212] text-white">
      <Overview />
      <div className="animate-fade-in">
        <Features />
        <Faq />
        <div>
          <section
            id="waitlist"
            className="pt-[220px] xs:pt-[280px] pb-[64px] xs:pb-[200px] px-4"
          >
            <div className="fixed inset-0 pointer-events-none z-[9999]"></div>
            <div className="max-w-[480px] mx-auto flex flex-col items-center text-center">
              <div className="relative z-[10000]">
                <button
                  type="button"
                  onClick={handleWaitlistIconClick}
                  aria-label="Animate app icon burst"
                  className="mb-10 bg-transparent border-0 p-0 transition-transform duration-300 ease-out hover:scale-105 active:scale-95 select-none touch-manipulation waitlist-icon-glow cursor-pointer"
                >
                  {iconBursts.map((burst) => (
                    <span
                      key={burst.id}
                      className="waitlist-icon-burst-layer"
                      aria-hidden="true"
                    >
                      {burst.particles.map((particle, index) => (
                        <span
                          key={`${burst.id}-${index}`}
                          className="waitlist-icon-burst-item"
                          style={{
                            "--burst-x": `${particle.x}px`,
                            "--burst-y": `${particle.y}px`,
                            "--burst-rotate": `${particle.rotate}deg`,
                            "--burst-scale": particle.scale,
                            "--burst-start-scale": particle.startScale,
                            "--burst-delay": `${particle.delay}ms`,
                            "--burst-duration": `${particle.duration}ms`,
                          }}
                        >
                          <Image
                            src={App_icon}
                            alt=""
                            width={112}
                            height={112}
                            className="w-20 h-20 xs:w-[112px] xs:h-[112px] select-none pointer-events-none"
                          />
                        </span>
                      ))}
                    </span>
                  ))}
                  <Image
                    src={App_icon}
                    alt="Glaze"
                    width={112}
                    height={112}
                    className="w-20 h-20 xs:w-[112px] xs:h-[112px] select-none pointer-events-none"
                  />
                </button>
              </div>
              <h2 className="text-[36px] xs:text-[48px] font-medium leading-[1.1] tracking-tight mb-8 select-none">
                What will you build?
              </h2>
              <div className="animate-in w-full mb-8 xs:mb-12 [animation-delay:300ms]">
                <div className="flex flex-col items-center">
                  <div className=" w-full xs:max-w-[360px]">
                    <div
                      className="bg-[#2323234d] border-[1px] border-[#ffffff14]
                      rounded-full p-1 flex items-center w-fit xs:max-w-[360px] mx-auto transition-all duration-200 ease-in-out"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const nextEmail = e.target.value;
                          setEmail(nextEmail);
                          if (showEmailError && isValidEmail(nextEmail)) {
                            setShowEmailError(false);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleJoinWaitlist();
                          }
                        }}
                        placeholder="Enter email address..."
                        className="flex-1 bg-transparent text-[16px] xs:text-[14px] text-text-primary placeholder:text-text-tertiary pl-3 pr-3.5 py-1.5 outline-none w-full transition-opacity duration-150 rounded-full !shadow-none opacity-100"
                      />
                      <button
                        type="button"
                        tabIndex={0}
                        onClick={handleJoinWaitlist}
                        className="h-9 text-[14px] font-medium rounded-full flex items-center gap-1.5 justify-center shrink-0 bg-[#245ACA] text-white px-4 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
                      >
                        <span className="whitespace-nowrap">Join Waitlist</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative mt-1.5 flex items-center justify-center h-5 w-full">
                    <p
                      className={`absolute text-[12px] text-red-400 text-center transition-opacity duration-300 ${showEmailError
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                        }`}
                    >
                      Please enter a valid email address
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
