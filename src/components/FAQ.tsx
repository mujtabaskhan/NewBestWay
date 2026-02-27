import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
   {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive U.S.-based accounting, tax, and financial management services tailored for businesses and individuals. Our offerings include bookkeeping, federal and state tax preparation, payroll processing, and financial reporting. We also deliver business advisory and Virtual CFO services to support strategic growth. Additionally, we assist with IRS audits, compliance, and business formation to ensure smooth and reliable operations.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with clients across diverse sectors, giving us insight into industry-specific requirements and challenges. We serve: Construction & contracting, Education & private schools (including Montessori), Healthcare professionals, Hospitality & restaurants, IT & consultants, Legal practices & law firms, Manufacturing & small-scale production, Mortgage & real estate professionals, Non-profit organizations, Professional services & contractors, Trading & small commerce, and Transportation, logistics & trucking.",
    },
    {
      question: "Do you offer virtual or remote services?",
      answer:
        "Yes — our firm operates on a modern, paperless, cloud-based model that supports fully virtual delivery. We use: 100% paperless workflow, Secure online portals for document sharing, Remote meetings and consultations, and Accessibility for clients across USA.",
    },
    {
      question: "Do you handle IRS or other audits?",
      answer:
        "We provide professional representation and support during a wide range of U.S. audits to ensure full compliance and minimize stress. Our audit assistance includes IRS audits, corporate tax audits, payroll tax audits, and sales tax audits. We also support third-party and industry-required financial reviews. From handling communication to preparing documentation, we guide you through every step to ensure accuracy and compliance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="w-full bg-white pt-20 px-4 max-lg:pt-16 max-md:pt-12 max-md:pb-20 max-sm:pt-10 max-sm:!pb-0 relative z-10"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-[74px] max-sm:mb-[59px]">
          <AnimateOnScroll delay={0}>
            <h2 className="block max-sm:hidden text-[#027C99] font-semibold mb-2 text-[40px] max-md:text-[30px] max-sm:text-[25px] leading-[80px]">
             Have questions about our accounting services?
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0}>
            <h2 className="hidden max-sm:block text-[#027C99] font-semibold mb-2 text-[40px] max-md:text-[30px] max-sm:text-[25px] leading-[25px]">
              FAQ
            </h2>
          </AnimateOnScroll>
          <p className="text-[#000000] text-[20px] font-flex max-sm:text-[15px] leading-[30px] font-normal">
            Whether you are looking for guidance on accounting, tax planning, compliance, or financial strategy, this section is designed to address your key concerns and help you see how NewBestway Inc. streamlines complex financial tasks into efficient, well-managed systems that save you time and drive better results.
          </p>
        </div>

        <div className="space-y-4 max-sm:space-y-3">
          {faqItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-3 rounded-[50px] border relative flex items-center justify-start"
                style={{
                  borderColor: openIndex === index ? "#232061" : "#232061",
                  backgroundColor:
                    openIndex === index ? "transparent" : "transparent",
                }}
              >
                <span className="text-left text-[22px] text-[#232061] font-roboto max-sm:text-xs">
                  {item.question}
                </span>
                <svg
                  width="25"
                  height="13"
                  viewBox="0 0 37 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute right-8 transition-transform duration-300 max-sm:w-3 max-sm:h-2 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M1.06055 1.06055L18.0605 18.0605L35.0605 1.06055"
                    stroke="#232061"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-12 py-6 mt-3 max-sm:px-8 max-sm:py-2">
                  <p className="text-xl text-[#232061] font-roboto max-sm:text-xs">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-[74px] max-sm:mt-[38px] pb-[100px] max-sm:pb-[86px]">
          <Link
            href={"/faq"}
            className="px-5 py-1 rounded-full text-[25px] max-sm:text-[15px] max-sm:px-3 leading-[10px] font-semibold inline-flex items-center gap-2 bg-[#027C99] text-white"
          >
            Learn More
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 23.3333L23.3333 17.5M23.3333 17.5L17.5 11.6666M23.3333 17.5H11.6667M32.0833 17.5C32.0833 25.5541 25.5542 32.0833 17.5 32.0833C9.44585 32.0833 2.91667 25.5541 2.91667 17.5C2.91667 9.44581 9.44585 2.91663 17.5 2.91663C25.5542 2.91663 32.0833 9.44581 32.0833 17.5Z"
                stroke="#F3F3F3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
