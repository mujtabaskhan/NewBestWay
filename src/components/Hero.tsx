"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full min-h-screen h-screen overflow-hidden pb-[200px] sticky top-0 z-[5] max-xs:!h-[90vh] ${
          isScrolled ? "rounded-bl-[60px] rounded-br-[60px]" : ""
        }`}
        style={{
          width: "100%",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <Image
          src="/hero-1.jpg"
          alt="hero-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px] block max-sm:hidden"
        />

        <Image
          src="/hero-1.jpg"
          alt="hero-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px] hidden max-sm:block"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-black/50" />

        <div className="relative z-10 flex items-center h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-sm:pt-64 max-xs:-mt-[20px]">
          <div className="w-full text-[#ffffff] font-semibold">
            <p className="text-[20px] max-sm:text-base font-roboto font-semibold mb-4">
              Welcome to
            </p>

            <h1 className="text-[70px] max-lg:text-[55px] max-md:text-[50px] max-sm:text-[40px] leading-[70px] mb-6 font-semibold font-serif max-sm:leading-[40px]">
              NewBestway<br /> Accounting
            </h1>

            <div className="flex items-center justify-between mt-10 max-xs:mt-16 w-full max-sm:flex-col max-sm:items-start max-sm:gap-6 max-sm:mt-0 flex-wrap gap-12">
              <div className="flex items-center gap-8 max-sm:gap-2 font-roboto">
                <div className="flex items-center">
                  <span
                    className="text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl"
                    style={{ color: "#afecdb", fontWeight: 100 }}
                  >
                    (
                  </span>
                  <div className="mx-4  text-[#afecdb] font-normal pt-3">
                    <p className="text-[30px] max-sm:text-base leading-[40px] max-sm:leading-normal">
                      Clear
                    </p>
                    <p className="text-[30px] max-sm:text-base leading-[40px] max-sm:leading-normal">
                      Finances
                    </p>
                  </div>
                  <span
                    className="text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl"
                    style={{ color: "#afecdb", fontWeight: 100 }}
                  >
                    )
                  </span>
                </div>

                <div className="text-[32px] max-sm:text-[18px] leading-[40px] max-sm:leading-normal font-extrabold pt-3">
                  <p style={{ color: "#fff" }}>Better</p>
                  <p style={{ color: "#fff" }}>Outcomes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const contactSection =
                      document.getElementById("contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="group px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-base leading-[10px] max-sm:text-[15px] max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer"
                  style={{
                    backgroundColor: "#418874",
                  }}
                >
                  <span className="relative inline-block overflow-hidden">
                    <span className="inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal">
                      Schedule An Appointment
                    </span>
                    <span className="absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal">
                      Schedule An Appointment
                    </span>
                  </span>
                  <span className="relative inline-block overflow-hidden w-6 h-6 max-sm:!w-[18px] max-sm:!h-[18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full max-sm:!w-[18px] max-sm:!h-[18px] max-sm:mb-[4px]"
                    >
                      <path
                        d="M12 22L22 12M22 12L12 2M22 12L2 12"
                        stroke="white"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 max-sm:!w-[18px] max-sm:!h-[18px]"
                    >
                      <path
                        d="M12 22L22 12M22 12L12 2M22 12L2 12"
                        stroke="white"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;