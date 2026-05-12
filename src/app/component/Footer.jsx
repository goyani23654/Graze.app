import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5 xs:pb-14 px-4 bg-[#121212] text-white">
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
  )
};

export default Footer;
