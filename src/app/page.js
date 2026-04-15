import Image from "next/image";
import Local_first from "./assets/iamges/Local-first.png";
import Os from "./assets/svg/Os.svg";
import Os2 from "./assets/svg/Os2.svg";
import Opinionate from "./assets/svg/Opinionate.svg";

export default function Home() {
  return (
    <section className="relative pt-[140px] xs:pt-40 px-4 bg-[#121212] text-white">
      <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
        <div className="animate-in ">
          <div className="inline-flex items-center mb-4">
            <span className="text-[16px] font-medium leading-[16px]">
              <span className="text-white">Glaze</span>
              <span className="text-[#a0a0a0] ml-1.5">
                by{" "}
                <a
                  href="https://www.raycast.com/blog/introducing-glaze"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raycast
                </a>
              </span>
            </span>
          </div>
        </div>
        <div
          className="animate-in "
          // style="opacity:0;animation-delay:100ms"
        >
          <h1 className="text-[36px] xs:text-[48px] font-medium leading-[1.1] tracking-tight text-text-primary mb-4 px-4 xs:px-0">
            Desktop apps,
            <br />
            reimagined by you.
          </h1>
        </div>
        <div
          className="animate-in "
          // style="opacity:0;animation-delay:200ms"
        >
          <p className="text-[16px] xs:text-[18px] text-text-tertiary leading-relaxed xs:max-w-[440px] mb-6">
            Create any app in minutes by chatting with AI. Beautiful, powerful,
            and truly personal.
          </p>
        </div>
        <div
          className="animate-in w-full mb-8 xs:mb-12"
          // style="opacity:0;animation-delay:300ms"
        >
          <div className="flex flex-col items-center">
            <div className=" w-full xs:max-w-[360px]">
              <div className="liquid-glass liquid-glass-interactive rounded-full p-1 flex items-center gap-1.5 w-full xs:max-w-[360px] mx-auto transition-all duration-200 ease-in-out">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  className="flex-1 bg-transparent text-[16px] xs:text-[14px] text-text-primary placeholder:text-text-tertiary pl-3 pr-3.5 py-1.5 outline-none min-w-0 transition-opacity duration-150 rounded-full !shadow-none"
                  // style="opacity:1"
                />
                <button
                  tabIndex={0}
                  className="h-9 text-[14px] font-medium rounded-full flex items-center gap-1.5 justify-center shrink-0"
                  // style="background-color:#245ACA;color:white;transform:translateX(0);transition:transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease, color 0.15s ease, padding 0.15s ease;padding-left:16px;padding-right:16px;opacity:1"
                >
                  <span className="whitespace-nowrap">Join Waitlist</span>
                </button>
              </div>
            </div>
            <div className="relative mt-1.5 flex items-center justify-center h-5 w-full">
              <p
                className="absolute text-[12px] text-red-400 text-center transition-opacity duration-300"
                // style="opacity:0;pointer-events:none"
              >
                Please enter a valid email address
              </p>
              <a
                href="https://raycastapp.typeform.com/glaze-beta#email="
                target="_blank"
                rel="noopener noreferrer"
                className="absolute text-[14px] text-[#a0a0a0] hover:text-text-primary transition-all duration-300 flex items-center gap-1 whitespace-nowrap"
                // style="opacity:0;pointer-events:none"
              >
                <span className="whitespace-nowrap">
                  Skip ahead by answering a few questions
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
        <div
          className="animate-in w-full"
          // style="opacity:0;animation-delay:400ms"
        >
          <div className="max-w-[960px] mx-auto">
            <div
              role="button"
              className="relative rounded-2xl xs:rounded-3xl overflow-hidden cursor-pointer group aspect-[4/3] xs:aspect-auto"
            >
              <video
                src="https://youtu.be/2s_NbPY_XuY?si=9ctoPhm67jSJN3US"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover xs:h-auto xs:object-contain block"
              ></video>
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors select-none"
                // style="-webkit-touch-callout:none"
              >
                {/* <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='24'%20cy='24'%20r='12'%20fill='black'/%3e%3cpath%20d='M24%203C35.598%203%2045%2012.402%2045%2024C45%2035.598%2035.598%2045%2024%2045C12.402%2045%203%2035.598%203%2024C3%2012.402%2012.402%203%2024%203ZM21.4668%2015.3574C20.7745%2014.9123%2019.8943%2014.881%2019.1719%2015.2754C18.4495%2015.6698%2018%2016.427%2018%2017.25V30.75C18%2031.573%2018.4495%2032.3302%2019.1719%2032.7246C19.8943%2033.119%2020.7745%2033.0877%2021.4668%2032.6426L31.9668%2025.8926C32.6107%2025.4786%2033%2024.7656%2033%2024C33%2023.2344%2032.6107%2022.5214%2031.9668%2022.1074L21.4668%2015.3574Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="Play"
                  // style="-webkit-touch-callout:none;-webkit-user-select:none"
                /> */}
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
                <span className="text-[14px] min-[600px]:text-[16px] text-[#a0a0a0] font-medium mb-1">
                  Local-first
                </span>
                <span className="hidden min-[600px]:block text-[14px] text-text-tertiary font-normal leading-snug text-center">
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
                <span className="text-[14px] min-[600px]:text-[16px] text-[#a0a0a0] font-medium mb-1">
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
                <span className="text-[14px] min-[600px]:text-[16px] text-[#a0a0a0] font-medium mb-1">
                  Opinionated
                </span>
                <span className="hidden min-[600px]:block text-[14px] text-text-tertiary font-normal leading-snug text-center">
                  Beautiful by default and personal when you want it to be.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
