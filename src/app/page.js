"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Local_first from "./assets/iamges/Local-first.png";
import Os from "./assets/svg/Os.svg";
import Os2 from "./assets/svg/Os2.svg";
import Opinionate from "./assets/svg/Opinionate.svg";
import Feature_agent from "./assets/iamges/feature-agent.png";
import Feature_publish from "./assets/iamges/feature-publish.png";
import Feature_teams from "./assets/iamges/feature-teams.png";
import Feature_store from "./assets/iamges/feature-store.png";
import App_icon from "./assets/iamges/app-icon.png";

const FAQ_ITEMS = [
  {
    question: "How do I get access?",
    answer: (
      <>
        Glaze is in private beta. Join the waitlist and we&apos;ll let you in as
        soon as we can. Existing Raycast users will get priority access.
        We&apos;re also hosting in-person events, and those who attend will get
        early access. Keep an eye on our{" "}
        <a
          href="https://ray.so/events"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Luma page
        </a>
        .
      </>
    ),
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. You describe what you want in plain language and Glaze builds it. If something isn't right, just talk to it and change it. And if you do know how to code, you'll feel right at home shaping things further.",
  },
  {
    question: "How is Glaze different from Lovable, Replit, or v0?",
    answer:
      "Those tools build for the browser. Glaze builds for your desktop. That means your apps can access your file system, keyboard shortcuts, menu bar integration, background processes, and deeper integration with your OS. Your data stays on your machine, not on someone else's server. It's a different category entirely.",
  },
  {
    question: "What kind of apps can I build?",
    answer:
      "Anything that comes to mind. Internal tools for your team, personal utilities, menu bar apps, workflow automations, or just quick one-off things that make your life easier. If you can describe it, Glaze can build it.",
  },
  {
    question: "Can I integrate with my tools or AI?",
    answer:
      "Yes. Glaze apps run on your Mac, so they can connect to your APIs, local files, and hardware. You can hook into the tools you already use, pull in AI models, or connect to any service with an API.",
  },
  {
    question: "Will this be a free or paid product?",
    answer:
      "Both. Glaze has a free tier with daily credits to build your first apps, and you can explore and use everything on the public store. Paid plans start at $20/month with a bigger bundle of monthly credits, and teams can create a private team store to share apps with colleagues. You can also top up with one-off credit packs anytime. We'll share more details on pricing closer to the public launch.",
  },
  {
    question: "What platforms does Glaze support?",
    answer: "Mac to start. Windows and Linux will come down the road.",
  },
];

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [iconBursts, setIconBursts] = useState([]);
  const videoRef = useRef(null);
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const waitlistBaseUrl = "https://raycastapp.typeform.com/glaze-beta#email=";

  const handleJoinWaitlist = () => {
    if (!isValidEmail(email)) {
      setShowEmailError(true);
      return;
    }

    setShowEmailError(false);
    window.open(`${waitlistBaseUrl}${encodeURIComponent(email)}`, "_blank");
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

  const handleFaqToggle = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
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
      <section id="overview" className="relative pt-[140px] xs:pt-40 px-4">
        <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
          <div className="animate-in [animation-delay:0ms]">
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
                rounded-full p-1 flex items-center gap-1.5 w-fit xs:max-w-[360px] mx-auto transition-all duration-200 ease-in-out"
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
                    className="flex-1 bg-transparent text-[16px] xs:text-[14px] text-text-primary placeholder:text-text-tertiary pl-3 pr-3.5 py-1.5 outline-none min-w-0 transition-opacity duration-150 rounded-full !shadow-none opacity-100"
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
                  className={`absolute text-[12px] text-red-400 text-center transition-opacity duration-300 ${
                    showEmailError
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  Please enter a valid email address
                </p>
                <a
                  href={`${waitlistBaseUrl}${encodeURIComponent(email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute text-[14px] text-[#a0a0a0] hover:text-text-primary transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                    showEmailError
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
      <div className="animate-fade-in">
        <div
          id="features"
          className="scroll-mt-[80px] mt-[160px] xs:mt-[256px]"
        >
          <div className="px-4">
            <div className="max-w-[960px] mx-auto flex flex-col gap-4 min-[600px]:gap-5">
              <div>
                <div className="rounded-2xl overflow-hidden bg-[#080808] h-full">
                  <div className="p-6 min-[600px]:p-8">
                    <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-start min-[600px]:justify-between gap-3 min-[600px]:gap-4">
                      <div>
                        <h2 className="text-[24px] min-[600px]:text-[28px] font-medium leading-tight tracking-tight text-text-primary mb-1">
                          Make every idea an app
                        </h2>
                        <p className="text-[16px] text-[#a0a0a0]  leading-[1.4] min-[600px]:leading-relaxed">
                          Describe it and watch it take shape right where you
                          work.
                        </p>
                      </div>
                      <button className="flex items-center gap-2 text-[14px] text-white bg-white/5 hover:bg-white/10 rounded-full pl-1.5 pr-3 py-1.5 min-[600px]:-mr-3 min-[600px]:-mt-1.5 transition-all shrink-0 self-start select-none">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='24'%20cy='24'%20r='12'%20fill='black'/%3e%3cpath%20d='M24%203C35.598%203%2045%2012.402%2045%2024C45%2035.598%2035.598%2045%2024%2045C12.402%2045%203%2035.598%203%2024C3%2012.402%2012.402%203%2024%203ZM21.4668%2015.3574C20.7745%2014.9123%2019.8943%2014.881%2019.1719%2015.2754C18.4495%2015.6698%2018%2016.427%2018%2017.25V30.75C18%2031.573%2018.4495%2032.3302%2019.1719%2032.7246C19.8943%2033.119%2020.7745%2033.0877%2021.4668%2032.6426L31.9668%2025.8926C32.6107%2025.4786%2033%2024.7656%2033%2024C33%2023.2344%2032.6107%2022.5214%2031.9668%2022.1074L21.4668%2015.3574Z'%20fill='white'/%3e%3c/svg%3e"
                          alt=""
                          className="w-6 h-6 pointer-events-none select-none"
                          draggable="false"
                        />
                        <span className="select-none">Watch Demo</span>
                      </button>
                    </div>
                  </div>
                  <picture>
                    <source media="(min-width: 600px)" />
                    <Image
                      src={Feature_agent}
                      alt="AI agent building a desktop app from a prompt"
                      width={800}
                      height={500}
                      className="w-full h-auto block select-none pointer-events-none"
                    />
                  </picture>
                </div>
              </div>
              <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-4 min-[600px]:gap-5">
                <div className="flex-1 min-w-0">
                  <div className="rounded-2xl overflow-hidden bg-[#080808] h-full">
                    <div className="p-6 min-[600px]:p-8">
                      <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-start min-[600px]:justify-between gap-3 min-[600px]:gap-4">
                        <div>
                          <h2 className="text-[24px] min-[600px]:text-[28px] font-medium leading-tight tracking-tight text-text-primary mb-1">
                            Publish effortlessly
                          </h2>
                          <p className="text-[16px] text-[#a0a0a0]  leading-[1.4] min-[600px]:leading-relaxed">
                            Easily share with your team or release publicly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <picture>
                      <source media="(min-width: 600px)" />
                      <Image
                        src={Feature_publish}
                        alt="Publishing an app to the store"
                        width={800}
                        height={500}
                        className="w-full h-auto block select-none pointer-events-none"
                      />
                    </picture>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="rounded-2xl overflow-hidden bg-[#080808] h-full">
                    <div className="p-6 min-[600px]:p-8">
                      <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-start min-[600px]:justify-between gap-3 min-[600px]:gap-4">
                        <div>
                          <h2 className="text-[24px] min-[600px]:text-[28px] font-medium leading-tight tracking-tight text-text-primary mb-1">
                            Made for teams
                          </h2>
                          <p className="text-[16px] text-[#a0a0a0]  leading-[1.4] min-[600px]:leading-relaxed">
                            Internal software built around your tools and
                            processes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <picture>
                      <source media="(min-width: 600px)" />
                      <Image
                        src={Feature_teams}
                        alt="Team dashboard showing launch progress"
                        width={800}
                        height={500}
                        className="w-full h-auto block select-none pointer-events-none"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden bg-[#080808] h-full">
                  <div className="p-6 min-[600px]:p-8">
                    <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-start min-[600px]:justify-between gap-3 min-[600px]:gap-4">
                      <div>
                        <h2 className="text-[24px] min-[600px]:text-[28px] font-medium leading-tight tracking-tight text-text-primary mb-1">
                          Discover &amp; install
                        </h2>
                        <p className="text-[16px] text-[#a0a0a0]  leading-[1.4] min-[600px]:leading-relaxed">
                          Explore apps from your team and our wider community of
                          builders.
                        </p>
                      </div>
                    </div>
                  </div>
                  <picture>
                    <source media="(min-width: 600px)" />
                    <Image
                      src={Feature_store}
                      alt="App store with community extensions"
                      width={800}
                      height={500}
                      className="w-full h-auto block select-none pointer-events-none"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="faq"
          className="scroll-mt-[160px] mt-[160px] xs:mt-[256px] transition-opacity duration-600 opacity-100"
        >
          <section className="px-4">
            <div className="max-w-[640px] mx-auto">
              <h2 className="text-[36px] xs:text-[48px] font-medium leading-[1.1] text-center tracking-tight mb-6">
                FAQ
              </h2>
              <div className="divide-y divide-[#a0a0a01f] border-b border-[#a0a0a01f]">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  const questionId = `faq-question-${index}`;
                  const answerId = `faq-answer-${index}`;

                  return (
                    <div key={item.question}>
                      <button
                        id={questionId}
                        type="button"
                        onClick={() => handleFaqToggle(index)}
                        aria-controls={answerId}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
                      >
                        <span className="text-[18px] xs:text-[24px] text-white font-bold pr-4">
                          {item.question}
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`shrink-0 transition-transform duration-300 text-[#a0a0a0] ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        >
                          <path
                            d="M7.5 5L12.5 10L7.5 15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-text-tertiary"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            id={answerId}
                            role="region"
                            aria-labelledby={questionId}
                            className="text-[16px] text-[#a0a0a0] leading-relaxed pb-4 whitespace-pre-line"
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
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
                rounded-full p-1 flex items-center gap-1.5 w-fit xs:max-w-[360px] mx-auto transition-all duration-200 ease-in-out"
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
                        className="flex-1 bg-transparent text-[16px] xs:text-[14px] text-text-primary placeholder:text-text-tertiary pl-3 pr-3.5 py-1.5 outline-none min-w-0 transition-opacity duration-150 rounded-full !shadow-none opacity-100"
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
                      className={`absolute text-[12px] text-red-400 text-center transition-opacity duration-300 ${
                        showEmailError
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
        <div>
          <footer className="pb-5 xs:pb-14 px-4">
            <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-[14px] text-text-tertiary">
              <div className="flex items-center gap-6 sm:contents">
                <span>Copyright © 2026</span>
                <a
                  href="https://raycast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 hover:text-text-secondary transition-colors"
                >
                  Made by Raycast
                  <img
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.4541%2014.3721L10.9189%2017.8379L10.0059%2018.75L5.62793%2014.3721H7.4541ZM11.3721%2014.3721L12.874%2015.873L11.96%2016.7871L9.54492%2014.3721H11.3721ZM14.8359%2013.9141L13.9229%2014.8281L12.9443%2013.8486L13.8535%2012.9365L14.8359%2013.9141ZM5.62793%2012.5459V14.3721L1.25%209.99414L2.16699%209.08398L5.62793%2012.5459ZM18.75%209.99805L17.8379%2010.9111L14.376%207.45215V9.54102L16.792%2011.957L15.8789%2012.8691L14.376%2011.3672V12.417H7.58691V5.62793H8.63281L7.13086%204.12598L8.04395%203.21289L10.457%205.62402H12.5459L9.08984%202.16309L10.002%201.25L18.75%209.99805ZM5.62793%208.62793V10.4551L3.21289%208.04004L4.12695%207.12598L5.62793%208.62793ZM7.06348%206.14648L6.15137%207.05957L5.17188%206.08105L6.08496%205.16699L7.06348%206.14648Z'%20fill='white'%20fill-opacity='0.6'/%3e%3c/svg%3e"
                    alt="Raycast"
                    className="w-5 h-5 opacity-50 group-hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
              <div className="flex items-center gap-6 sm:contents">
                <a
                  href="https://www.raycast.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-text-secondary transition-colors"
                >
                  Privacy Policy
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.youtube.com/channel/UCZltNInxFzkNzBqg_G4EdXg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-text-secondary transition-colors"
                    aria-label="YouTube"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/glazeapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-text-secondary transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.126L16 15.25h-4.937l-3.867-5.055-4.425 5.055H.316l5.733-6.554L0 .75h5.063l3.495 4.622L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
