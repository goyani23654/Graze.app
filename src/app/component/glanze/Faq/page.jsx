import React, { useState } from 'react'

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

const page = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleFaqToggle = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };
  return (
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
              const questionId = `${index}`;
              const answerId = `${index}`;
              return (
                <div key={item.question}>
                  <button
                    id={questionId}
                    type="button"
                    onClick={() => handleFaqToggle(index)}
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
                      className={`shrink-0 transition-transform duration-300 text-[#a0a0a0] ${isOpen ? "rotate-90" : ""
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
                    className={`grid transition-all duration-300 ease-in-out ${isOpen
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
  )
}

export default page
