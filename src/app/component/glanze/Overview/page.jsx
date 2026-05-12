import React, { useRef, useState } from 'react'
import Local_first from "../../../assets/iamges/Local-first.png"
import Os from "../../../assets/svg/Os.svg"
import Os2 from "../../../assets/svg/Os2.svg"
import Opinionate from "../../../assets/svg/Opinionate.svg"
import Image from 'next/image'

const page = () => {
  const [email, setEmail] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const [showEmailError, setShowEmailError] = useState(false);
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);


  const handleJoinWaitlist = () => {
    if (!isValidEmail(email)) {
      setShowEmailError(true);
      return;
    }
  };

  const handleVideoToggle = () => {
    const frame = videoRef.current;
    if (!frame?.contentWindow) return;

    frame.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: isVideoPlaying ? "pauseVideo" : "playVideo",
        args: [],
      }),
      "*",
    );
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <section id="overview" className="relative pt-[140px] xs:pt-40 px-4">
      <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
        <div className="animate-in [animation-delay:0ms]">
          <div className="inline-flex items-center mb-4">
            <span className="text-[16px] font-medium leading-[16px]">
              <span className="text-white">Glaze</span>
              <span className="text-[#a0a0a0] ml-1.5">
                by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raycast
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="animate-in [animation-delay:100ms]">
          <h1 className="text-[36px] xs:text-[48px] font-medium leading-[1.1] tracking-tight text-text-primary mb-4 px-4 xs:px-0">
            Desktop apps,
            <br />
            reimagined by you.
          </h1>
        </div>
        <div className="animate-in [animation-delay:200ms]">
          <p className="text-[16px] xs:text-[18px] text-text-tertiary leading-relaxed xs:max-w-[440px] mb-6">
            Create any app in minutes by chatting with AI. Beautiful,
            powerful, and truly personal.
          </p>
        </div>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute text-[14px] text-[#a0a0a0] hover:text-text-primary transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${showEmailError
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100 pointer-events-auto"
                  }`}
              >
                <span className="whitespace-nowrap">
                  Skip ahead by answering a few questions.
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="animate-in w-full [animation-delay:400ms]">
          <div className="max-w-[960px] mx-auto">
            <div className="relative rounded-2xl xs:rounded-3xl overflow-hidden cursor-pointer group aspect-[4/3] xs:aspect-auto">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/2s_NbPY_XuY?autoplay=1&mute=1&loop=1&playlist=2s_NbPY_XuY&controls=0&rel=0&enablejsapi=1&playsinline=1"
                title="Glaze demo video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full xs:min-h-[540px] border-0 block"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors select-none [-webkit-touch-callout:none]">
                <button
                  type="button"
                  onClick={handleVideoToggle}
                  aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/70"
                >
                  {isVideoPlaying ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <rect
                        x="4"
                        y="3"
                        width="3"
                        height="12"
                        rx="1"
                        fill="white"
                      />
                      <rect
                        x="11"
                        y="3"
                        width="3"
                        height="12"
                        rx="1"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path d="M6 4.5L13 9L6 13.5V4.5Z" fill="white" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-14 w-full">
            <div className="flex flex-row items-start justify-center gap-2 min-[600px]:gap-12 w-full">
              <div className="flex flex-col items-center flex-1 min-[600px]:flex-initial min-[600px]:max-w-[240px]">
                <div className="flex items-center gap-1 min-[600px]:gap-1.5 h-5 min-[600px]:h-6 mb-1.5 min-[600px]:mb-3">
                  <Image
                    src={Local_first}
                    alt=""
                    className="w-5 h-5 min-[600px]:w-6 min-[600px]:h-6"
                  />
                </div>
                <span className="text-[14px] min-[600px]:text-[16px] text-[#a0a0a0] font-semibold mb-1">
                  Local-first
                </span>
                <span className="hidden min-[600px]:block text-[14px] text-[#a0a0a0]  font-normal leading-snug text-center">
                  Apps run on your machine, no server or internet connection
                  required.
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 min-[600px]:flex-initial min-[600px]:max-w-[240px]">
                <div className="flex items-center gap-1 min-[600px]:gap-1.5 h-5 min-[600px]:h-6 mb-1.5 min-[600px]:mb-3">
                  <Image
                    src={Os}
                    alt=""
                    className="w-5 h-5 min-[600px]:w-6 min-[600px]:h-6"
                  />
                  <Image
                    src={Os2}
                    alt=""
                    className="w-5 h-5 min-[600px]:w-6 min-[600px]:h-6"
                  />
                </div>
                <span className="text-[14px] min-[600px]:text-[16px] text-[#a0a0a0] font-semibold mb-1">
                  OS-integrated
                </span>
                <span className="hidden min-[600px]:block text-[14px] text-[#a0a0a0] font-normal leading-snug text-center">
                  Access files, tools, and anything on your operating system.
                </span>
              </div>
              <div className="flex flex-col items-center flex-1 min-[600px]:flex-initial min-[600px]:max-w-[240px]">
                <div className="flex items-center gap-1 min-[600px]:gap-1.5 h-5 min-[600px]:h-6 mb-1.5 min-[600px]:mb-3">
                  <Image
                    src={Opinionate}
                    alt=""
                    className="w-5 h-5 min-[600px]:w-6 min-[600px]:h-6"
                  />
                </div>
                <span className="text-[14px] min-[600px]:text-[16px] text-[#a0a0a0] font-semibold mb-1">
                  Opinionated
                </span>
                <span className="hidden min-[600px]:block text-[14px] text-[#a0a0a0] font-normal leading-snug text-center">
                  Beautiful by default and personal when you want it to be.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
