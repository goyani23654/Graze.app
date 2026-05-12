import React from 'react'
import Feature_store from "../../../assets/iamges/feature-store.png"
import Feature_agent from "../../../assets/iamges/feature-agent.png";
import Feature_publish from "../../../assets/iamges/feature-publish.png";
import Feature_teams from "../../../assets/iamges/feature-teams.png";
import Image from 'next/image';

const page = () => {
  return (
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
  )
}

export default page
