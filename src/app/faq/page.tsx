"use client";

import ContactSection from "@/components/about/ContactSection";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What services does New Bestway Inc. provide?",
      answer:
        "New Bestway Inc. delivers comprehensive accounting and financial solutions designed for U.S. businesses and individuals. Our services include monthly and annual bookkeeping, corporate and individual tax preparation (federal & state), payroll processing, financial statement preparation, business consulting, Virtual CFO services, fully outsourced accounting departments, IRS audit representation, sales tax compliance, and business formation support.",
    },
    {
      question: "What are your pricing options?",
      answer:
        "Our fees are tailored to fit the scope and complexity of your needs. Pricing depends on the type of service, size of your organization, transaction volume, reporting frequency, and whether you require payroll, advisory, or CFO-level support. We provide personalized quotes following an initial consultation.",
    },
    {
      question: "What does your onboarding process look like?",
      answer:
        "We use a streamlined onboarding system to ensure accuracy and efficiency from day one. The process typically includes an initial consultation, review of existing records, secure document collection, cleanup or migration of prior financial data, system setup, team assignment, and establishing reporting timelines.",
    },
    {
      question: "Do you work with clients outside your local area?",
      answer:
        "Yes. Our firm operates fully online using secure, cloud-based platforms. We proudly serve clients across multiple U.S. states through virtual meetings, encrypted file sharing, and remote accounting systems.",
    },
    {
      question: "Can you represent clients during IRS audits?",
      answer:
        "Absolutely. We provide professional audit support and representation for IRS examinations, corporate tax reviews, payroll tax audits, sales tax audits, and other regulatory inquiries. Our team assists with documentation preparation, communication, and compliance guidance throughout the process.",
    },
    {
      question: "What industries does New Bestway Inc. serve?",
      answer:
        "We support businesses across a broad range of industries including construction, private education institutions, healthcare providers, hospitality and restaurants, IT and technology consultants, law firms, manufacturing, real estate and mortgage professionals, nonprofit organizations, professional service firms, retail and trading businesses, and transportation and logistics companies.",
    },
    {
      question: "How do you protect client financial information?",
      answer:
        "Data security is a top priority at New Bestway Inc. We implement encrypted data transfers, secure cloud accounting platforms, restricted access controls, multi-factor authentication, routine system backups, and compliance with U.S. data protection standards.",
    },
    {
      question: "Do you work with individuals as well as businesses?",
      answer:
        "Yes. We provide customized solutions for individuals, sole proprietors, partnerships, LLCs, corporations, nonprofits, and owner-operated businesses. Our services are structured to meet the unique financial needs of each client.",
    },
    {
      question: "Can you help with business formation in the U.S.?",
      answer:
        "Yes. We assist entrepreneurs with forming LLCs, corporations, and other legal entities. Our services include entity selection guidance, EIN registration, federal and state tax setup, initial compliance filings, and ongoing reporting requirements.",
    },
    {
      question: "How do I begin working with New Bestway Inc.?",
      answer:
        "Getting started is simple. Contact us through our website or by phone, schedule a consultation, share your business goals and current financial situation, and receive a customized service proposal. Most inquiries are answered within one to two business days.",
    },
    {
      question: "Do you offer remote accounting services?",
      answer:
        "Yes. Our firm operates on a fully digital infrastructure, allowing us to deliver bookkeeping, tax, payroll, and advisory services virtually. Clients benefit from secure document portals, remote consultations, and cloud-based accounting systems accessible from anywhere in the U.S.",
    },
    {
      question: "Are my records kept confidential?",
      answer:
        "Confidentiality and privacy are fundamental to We follow strict internal controls, encrypted storage protocols, and professional ethical standards to ensure your financial records remain secure at all times.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach New Bestway Inc. by submitting a request through our website, emailing our support team, or calling our office directly. Our team typically responds within one to two business days.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Outfit:wght@300;400;500;600&display=swap');

          .faq-bg {
            position: relative;
            background: #fff;
            overflow: hidden;
          }
          .faq-bg::before {
            content: '';
            position: absolute;
            width: 700px;
            height: 700px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(2,124,153,0.07) 0%, transparent 70%);
            top: -200px;
            right: -200px;
            pointer-events: none;
            animation: orbFloat 10s ease-in-out infinite;
          }
          .faq-bg::after {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(2,124,153,0.05) 0%, transparent 70%);
            bottom: 100px;
            left: -150px;
            pointer-events: none;
            animation: orbFloat 14s ease-in-out infinite reverse;
          }

          @keyframes orbFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
          }

          /* ── FAQ item: nuke ALL borders from any source ── */
          .faq-item,
          .faq-item *,
          .faq-item::before,
          .faq-item::after {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
          }

          .faq-item::before,
          .faq-item::after {
            content: none !important;
            display: none !important;
          }

          .faq-item {
            position: relative;
            border-radius: 20px;
            background: transparent;
            transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
            cursor: pointer;
            overflow: hidden;
          }

          .faq-item:hover,
          .faq-item.is-open {
            background: linear-gradient(135deg, rgba(2,124,153,0.07) 0%, rgba(2,124,153,0.02) 100%);
            box-shadow: 0 8px 40px rgba(2,124,153,0.1), 0 2px 8px rgba(2,124,153,0.05) !important;
            transform: translateY(-2px);
          }

          .faq-item-inner {
            padding: 30px 36px;
          }

          @media (max-width: 640px) {
            .faq-item-inner { padding: 20px 20px; }
          }

          .faq-header {
            display: flex;
            align-items: center;
            gap: 20px;
            user-select: none;
          }

          .faq-pill {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #e6f5f8;
            border: none !important;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Cormorant Garamond', serif;
            font-size: 16px;
            font-weight: 600;
            color: #027C99;
            transition: background 0.35s, color 0.35s, transform 0.35s;
          }

          .faq-item.is-open .faq-pill,
          .faq-item:hover .faq-pill {
            background: #027C99;
            color: #fff;
            transform: scale(1.1) rotate(-6deg);
          }

          .faq-question-text {
            flex: 1;
            font-family: 'Outfit', sans-serif;
            font-size: 17px;
            font-weight: 500;
            color: #027C99;
            line-height: 1.45;
            transition: color 0.2s;
          }

          @media (max-width: 640px) {
            .faq-question-text { font-size: 14px; }
            .faq-pill { width: 34px; height: 34px; font-size: 13px; }
          }

          .faq-toggle {
            flex-shrink: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: none !important;
            outline: none !important;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s;
            position: relative;
          }

          .faq-item.is-open .faq-toggle {
            background: #027C99;
          }

          .faq-toggle-bar {
            position: absolute;
            background: #027C99;
            border-radius: 2px;
            transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, background 0.3s;
          }

          .faq-toggle-bar.h { width: 14px; height: 1.8px; }
          .faq-toggle-bar.v { width: 1.8px; height: 14px; transform: scaleY(1); }

          .faq-item.is-open .faq-toggle-bar { background: #fff; }
          .faq-item.is-open .faq-toggle-bar.v { transform: scaleY(0); opacity: 0; }
          .faq-item.is-open .faq-toggle-bar.h { transform: rotate(180deg); }

          .faq-answer-wrap {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.42s cubic-bezier(0.4,0,0.2,1);
          }

          .faq-answer-wrap.open { grid-template-rows: 1fr; }
          .faq-answer-inner { overflow: hidden; }

          .faq-answer-text {
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
            font-weight: 300;
            line-height: 1.8;
            color: #3a8fa0;
            padding: 16px 0 6px 64px;
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s;
          }

          @media (max-width: 640px) {
            .faq-answer-text { padding-left: 54px; font-size: 13px; }
          }

          .faq-answer-wrap.open .faq-answer-text {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .faq-entry { animation: fadeSlideUp 0.55s ease both; }

          .faq-item.is-open .faq-item-inner { position: relative; }
          .faq-item.is-open .faq-item-inner::before {
            content: '' !important;
            display: block !important;
            position: absolute;
            left: 0;
            top: 20px;
            bottom: 20px;
            width: 3px;
            border-radius: 4px;
            background: linear-gradient(180deg, #027C99, #54bdd1);
            animation: growBar 0.35s ease both;
            border: none !important;
            box-shadow: none !important;
          }

          @keyframes growBar {
            from { transform: scaleY(0); transform-origin: top; }
            to   { transform: scaleY(1); transform-origin: top; }
          }
        `}</style>

        <section className="faq-bg w-full pb-[80px]">
          <div className="relative z-[10] max-lg:z-[1] max-w-7xl mx-auto px-14 max-sm:px-4 pt-52 max-lg:!pt-0 max-sm:mt-0 max-sm:!pt-3">

            <div className="mb-12">
              <nav className="text-[#232061] text-xs font-flex max-sm:text-xs">
                <Link href="/" className="font-normal">Home</Link>{" "}
                <span className="font-black mx-5">&gt;</span>
                <span className="font-normal">FAQ</span>
              </nav>
            </div>

            <div className="mb-[129px] max-sm:mb-[65px]">
              <AnimateOnScroll delay={0}>
                <h1 className="text-[#232061] font-semibold mb-9 text-[60px] max-sm:text-[30px] max-lg:text-[40px]">
                  Frequently Asked Questions <br className="max-sm:hidden" />{" "}
                  <span className="font-light">by our Clients</span>
                </h1>
              </AnimateOnScroll>
              <p className="text-[#232061] text-xl font-flex max-w-4xl max-sm:text-xs">
                We understand that choosing the right accounting partner can be
                confusing. That&apos;s why we&apos;ve answered some of the most common
                questions our clients ask, to help you make informed, confident
                decisions about your business and finances.
              </p>
            </div>

            <div className="flex flex-col" style={{ gap: "10px" }}>
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`faq-entry faq-item ${isOpen ? "is-open" : ""}`}
                    style={{ animationDelay: `${index * 0.045}s` }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-item-inner">
                      <div className="faq-header">
                        <div className="faq-pill">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="faq-question-text">{item.question}</p>
                        <div className="faq-toggle">
                          <span className="faq-toggle-bar h" />
                          <span className="faq-toggle-bar v" />
                        </div>
                      </div>

                      <div className={`faq-answer-wrap ${isOpen ? "open" : ""}`}>
                        <div className="faq-answer-inner">
                          <p className="faq-answer-text">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        <ContactSection hideHeading={false} />
      </main>
    </div>
  );
};

export default FAQ;