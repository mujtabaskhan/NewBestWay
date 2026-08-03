"use client";

import React, { useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import ContactSection from "@/components/about/ContactSection";
import Navbar from "@/components/Navbar";

const Services = () => {
  const servicesData = [
    {
      id: "company-formations",
      title: "Company Formations",
      description:
        "Starting a business in the U.S. begins with choosing the right legal structure. Our company formation services guide you through every step — from selecting the optimal entity type to filing with the appropriate state agency — ensuring your business is built on a solid, compliant foundation from day one.",
      services: [
        {
          title: "LLC Formation",
          description:
            "We handle the preparation and filing of your Articles of Organization with your state, including name availability checks, registered agent designation, and initial operating agreement drafting to get your LLC up and running quickly.",
        },
        {
          title: "Corporation Formation (C-Corp)",
          description:
            "Complete formation support for C-Corporations, including Articles of Incorporation filing, bylaws preparation, and initial board and shareholder documentation to establish your corporate structure properly.",
        },
        {
          title: "State & Federal Compliance Setup",
          description:
            "After formation, we ensure your entity meets all initial compliance requirements — state business licenses, federal registrations, and any industry-specific permits your business may require.",
        },
        {
          title: "Multi-State Formation Strategy",
          description:
            "Guidance on forming in your home state versus a formation-friendly state like Delaware, Wyoming, or Nevada, balancing liability protection, tax advantages, and operational simplicity for your goals.",
        },
      ],
    },
    {
      id: "not-for-profits",
      title: "Not For Profits",
      description:
        "Launching and maintaining a nonprofit organization in the U.S. involves a unique set of federal and state requirements. We help mission-driven organizations achieve tax-exempt status, maintain compliance, and focus their energy where it matters most — serving their communities.",
      services: [
        {
          title: "501(c)(3) & Tax-Exempt Application",
          description:
            "Expert preparation and filing of IRS Form 1023 or 1023-EZ for 501(c)(3) status, including narrative descriptions, financial projections, and all supporting documentation required for approval.",
        },
        {
          title: "Nonprofit Incorporation",
          description:
            "State-level nonprofit corporation formation, including Articles of Incorporation tailored to nonprofit requirements, initial bylaws, and conflict-of-interest policies required by the IRS.",
        },
        {
          title: "Annual Compliance & Form 990 Filing",
          description:
            "Ongoing compliance support including annual state charity registrations, IRS Form 990 preparation, and public disclosure requirements to protect your tax-exempt status year after year.",
        },
        {
          title: "Board Governance & Documentation",
          description:
            "Preparation of board meeting minutes, resolutions, and governance documents that satisfy IRS requirements and demonstrate your organization's accountability and proper oversight.",
        },
      ],
    },
    {
      id: "sole-proprietorship",
      title: "Sole Proprietorship",
      description:
        "A sole proprietorship is the simplest way to operate a business in the U.S., but it still requires proper registration and setup to operate legally and professionally. We help independent operators establish their business identity, obtain the right permits, and stay compliant with minimal administrative burden.",
      services: [
        {
          title: "Business Name Registration (DBA)",
          description:
            "Filing of a fictitious business name or 'Doing Business As' (DBA) with your county or state, giving your sole proprietorship a professional identity separate from your personal name.",
        },
        {
          title: "Local Business Licensing",
          description:
            "Identification and application support for city, county, and state business licenses and permits required for your specific industry and location.",
        },
        {
          title: "EIN Obtainment",
          description:
            "Applying for an Employer Identification Number (EIN) from the IRS on your behalf, which you may need for banking, hiring, or filing purposes even as a sole proprietor.",
        },
        {
          title: "Schedule C & Tax Preparation",
          description:
            "Annual tax preparation for sole proprietors including Schedule C filing, self-employment tax calculations, estimated quarterly payment planning, and deduction maximization.",
        },
      ],
    },
    {
      id: "dbas",
      title: "DBAs",
      description:
        "A 'Doing Business As' (DBA) registration — also called a fictitious business name or trade name — allows your business to legally operate under a name different from its legal entity name. Whether you're a sole proprietor, LLC, or corporation, we make the DBA filing process fast and hassle-free.",
      services: [
        {
          title: "DBA Name Search & Availability",
          description:
            "Thorough search of state and county records to confirm your desired trade name is available and does not conflict with existing registrations or trademarks.",
        },
        {
          title: "DBA Filing & Registration",
          description:
            "Complete preparation and submission of DBA registration paperwork with the appropriate county clerk or state agency, including all required publication notices where mandated by law.",
        },
        {
          title: "DBA Renewal Management",
          description:
            "Proactive tracking and renewal of your DBA registration before expiration to ensure your trade name remains active and your business stays in good standing.",
        },
        {
          title: "Multiple DBA Management",
          description:
            "Support for businesses operating under multiple trade names, including maintaining separate registrations, tracking renewal dates, and ensuring compliance across all active DBAs.",
        },
      ],
    },
    {
      id: "tax-id-numbers",
      title: "Tax ID Numbers",
      description:
        "An Employer Identification Number (EIN) is a federal tax identification number required for most U.S. business activities — from opening a business bank account to hiring employees and filing taxes. We obtain your EIN quickly and accurately, eliminating the confusion of dealing directly with the IRS.",
      services: [
        {
          title: "EIN Application for New Businesses",
          description:
            "Fast, accurate preparation and submission of IRS Form SS-4 to obtain your Employer Identification Number (EIN), typically retrieved same day for U.S.-based applicants.",
        },
        {
          title: "ITIN Assistance for Foreign Nationals",
          description:
            "Guidance and preparation support for Individual Taxpayer Identification Number (ITIN) applications for foreign nationals who need to file U.S. taxes or conduct business in the U.S.",
        },
        {
          title: "EIN for Trusts, Estates & Nonprofits",
          description:
            "Specialized EIN obtainment for trusts, estates, nonprofits, and other non-standard entities that require a unique federal tax identification number for IRS compliance.",
        },
        {
          title: "EIN Verification & Replacement",
          description:
            "If you've lost your EIN or need to verify your federal tax ID number, we assist with IRS records requests and documentation to confirm or replace your number efficiently.",
        },
      ],
    },
    {
      id: "s-corporation-election",
      title: "S. Corporation Election",
      description:
        "Electing S-Corporation tax status can provide significant self-employment tax savings for qualifying businesses. However, timing, eligibility, and IRS filing requirements are strict. Our team helps you determine if an S-Corp election is right for your situation and handles the complete election process.",
      services: [
        {
          title: "S-Corp Eligibility Analysis",
          description:
            "A thorough review of your business structure, ownership, and financials to determine whether S-Corporation status is advantageous and whether you meet all IRS eligibility requirements.",
        },
        {
          title: "IRS Form 2553 Filing",
          description:
            "Preparation and timely filing of IRS Form 2553 (Election by a Small Business Corporation) with all required shareholder consents, ensuring your election is accepted and effective on the correct date.",
        },
        {
          title: "Late Election Relief",
          description:
            "If you missed the initial S-Corp election deadline, we can file for relief under IRS Revenue Procedure 2013-30, allowing retroactive elections in many qualifying situations.",
        },
        {
          title: "Post-Election Compliance Setup",
          description:
            "After your S-Corp election is approved, we help set up reasonable shareholder-employee compensation structures, payroll requirements, and annual filing obligations to maintain your elected status.",
        },
      ],
    },
    {
      id: "amendments-changes",
      title: "Amendments / Changes",
      description:
        "Business needs evolve — ownership changes, name updates, address relocations, and structural modifications all require formal filings with state authorities. We handle amendments and changes to your corporate or LLC documents quickly and accurately to keep your records legally current.",
      services: [
        {
          title: "Articles of Amendment Filing",
          description:
            "Preparation and filing of Articles of Amendment with your state to officially update your entity name, registered address, officer information, or other formation document details.",
        },
        {
          title: "Operating Agreement & Bylaw Updates",
          description:
            "Revision of LLC operating agreements or corporate bylaws to reflect membership changes, ownership restructuring, updated management provisions, or new operational requirements.",
        },
        {
          title: "Ownership & Membership Changes",
          description:
            "Documentation of ownership transfers, new member additions, or buyouts — including updated ownership schedules, transfer agreements, and any state filings triggered by ownership changes.",
        },
        {
          title: "Registered Office & Agent Changes",
          description:
            "Processing of state filings to update your registered agent or registered office address, ensuring critical legal correspondence continues to reach your business without interruption.",
        },
      ],
    },
    {
      id: "minutes-resolutions",
      title: "Minutes / Resolutions",
      description:
        "Corporate minutes and resolutions are legal records that document key decisions made by your board of directors, officers, or members. Maintaining these records is not just best practice — it's a critical requirement for preserving your liability protection and corporate veil. We ensure your records are complete, accurate, and compliant.",
      services: [
        {
          title: "Annual Meeting Minutes",
          description:
            "Professional preparation of annual meeting minutes for corporations and LLCs, documenting officer elections, financial reviews, and other required annual business to satisfy state compliance requirements.",
        },
        {
          title: "Special Meeting Minutes",
          description:
            "Documentation of special or called meetings where significant decisions are made — such as approving loans, major contracts, real estate transactions, or other material business actions.",
        },
        {
          title: "Board & Member Resolutions",
          description:
            "Drafting of formal resolutions to document specific corporate actions taken without a full meeting, including banking resolutions, officer authorizations, and equity issuances.",
        },
        {
          title: "Minute Book Organization & Maintenance",
          description:
            "Complete organization and ongoing maintenance of your corporate minute book, ensuring all historical records are properly compiled, indexed, and accessible for audits, loans, or business transactions.",
        },
      ],
    },
    {
      id: "registered-agent",
      title: "Registered Agent",
      description:
        "Every U.S. corporation and LLC is required by law to maintain a registered agent — a designated party available during business hours to receive legal notices and official state correspondence. We provide reliable registered agent services that protect your privacy and keep your business in good standing.",
      services: [
        {
          title: "Registered Agent Designation",
          description:
            "Appointment of a professional registered agent for your business entity, satisfying state requirements with a reliable point of contact for service of process and official government notices.",
        },
        {
          title: "Service of Process Handling",
          description:
            "Prompt receipt and forwarding of legal summons, lawsuits, and government notices delivered to your registered agent, ensuring you never miss time-sensitive legal correspondence.",
        },
        {
          title: "Multi-State Registered Agent",
          description:
            "Registered agent coverage for businesses operating in multiple states, with a single point of coordination to manage agent appointments, renewals, and compliance filings across all jurisdictions.",
        },
        {
          title: "Registered Agent Change Filing",
          description:
            "Seamless transition if you're switching registered agents, including preparation and filing of the Statement of Change of Registered Agent with the applicable state authority.",
        },
      ],
    },
    {
      id: "corporate-file",
      title: "Corporate File",
      description:
        "A well-maintained corporate file is the foundation of a legally sound and audit-ready business. Our corporate file services ensure all your critical business documents are properly organized, up to date, and readily available when needed — for financing, business sales, audits, or regulatory review.",
      services: [
        {
          title: "Corporate Document Organization",
          description:
            "Compilation and organization of all essential corporate documents — formation filings, operating agreements, EIN confirmation letters, resolutions, and annual reports — into a complete, accessible corporate file.",
        },
        {
          title: "Annual Report Filings",
          description:
            "Preparation and timely submission of required annual or biennial reports with each state where your entity is registered, including payment of state fees to maintain active status.",
        },
        {
          title: "Good Standing Certificates",
          description:
            "Retrieval of Certificates of Good Standing from state authorities — often required by lenders, investors, or counterparties — confirming your entity is current on all state filings and fees.",
        },
        {
          title: "Document Retrieval & Certified Copies",
          description:
            "Obtaining certified copies of your formation documents, amendments, or other state-filed records directly from the Secretary of State's office for legal, banking, or transaction purposes.",
        },
      ],
    },
    {
      id: "dissolutions",
      title: "Dissolutions",
      description:
        "Closing a business in the U.S. involves more than just stopping operations. Formal dissolution with your state is required to end your legal existence and eliminate ongoing filing and fee obligations. Our dissolution services ensure your business is properly wound down, protecting you from future liability.",
      services: [
        {
          title: "Articles of Dissolution Filing",
          description:
            "Preparation and filing of Articles of Dissolution (or Certificate of Cancellation for LLCs) with your state, officially terminating your entity's legal existence and relieving you of ongoing state obligations.",
        },
        {
          title: "Tax Clearance & Final Returns",
          description:
            "Coordination of final federal and state tax returns, including obtaining tax clearance certificates where required by your state before dissolution can be completed.",
        },
        {
          title: "Winding Down Operations",
          description:
            "Guidance on the required steps to wind down business operations — notifying creditors, settling outstanding obligations, liquidating assets, and distributing remaining assets to members or shareholders.",
        },
        {
          title: "Multi-State Withdrawal Filings",
          description:
            "For businesses registered in multiple states, we handle the withdrawal or foreign qualification cancellation filings in each state to fully terminate your business presence and stop ongoing fees.",
        },
      ],
    },
    {
      id: "reinstatements",
      title: "Reinstatements",
      description:
        "If your corporation or LLC has been administratively dissolved or revoked by the state due to missed filings or unpaid fees, reinstatement can restore your entity to active status. We navigate the reinstatement process efficiently, helping you get your business back in good standing as quickly as possible.",
      services: [
        {
          title: "Reinstatement Eligibility Review",
          description:
            "A comprehensive assessment of your entity's current status, the reason for dissolution or revocation, outstanding fees, and the specific requirements your state imposes to reinstate your business.",
        },
        {
          title: "Back Filing & Fee Resolution",
          description:
            "Preparation and submission of all missed annual reports, outstanding state fees, and penalty payments required to bring your entity current and eligible for reinstatement.",
        },
        {
          title: "Application for Reinstatement",
          description:
            "Preparation and filing of the formal reinstatement application with your state's Secretary of State or Division of Corporations, including all supporting documentation to restore your active status.",
        },
        {
          title: "Post-Reinstatement Compliance Plan",
          description:
            "After reinstatement, we establish an ongoing compliance calendar for your entity — tracking future annual reports, renewal deadlines, and state fees — to prevent another lapse in good standing.",
        },
      ],
    },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="w-full bg-[#ffffff] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />
        <section
          className="w-full bg-white max-sm:!pb-0 rounded-bl-[60px] rounded-br-[60px]"
          style={{ width: "100%" }}
        >
          <div className="relative z-[10] max-lg:z-[1] max-w-7xl mx-auto px-14 max-sm:px-4 pt-52 max-lg:!pt-0 max-lg:-mt-5 max-sm:mt-0 max-sm:!pt-3">
            {/* Breadcrumb */}
            <div className="mb-16">
              <nav className="text-[#232061] text-xs font-flex max-sm:text-xs">
                <Link href="/" className="font-normal">
                  Home
                </Link>{" "}
                <span className="font-black mx-5">&gt;</span>
                <Link href="/expertise" className="font-normal">
                  Expertise
                </Link>{" "}
                <span className="font-black mx-5">&gt;</span>
                <span className="font-normal">Our Services</span>
              </nav>
            </div>

            <div className="flex flex-col gap-[195px] max-sm:gap-[87px] pb-[225px] max-sm:pb-[87px]">
              {servicesData.map((service, svcIndex) => (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  {/* Section header */}
                  <div className="flex items-center justify-between max-sm:flex-col flex-wrap gap-3">
                    <div className="flex flex-col gap-3 max-w-3xl">
                      <AnimateOnScroll delay={0}>
                        {/* Numbered accent label */}
                        <span
                          className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full w-max"
                          style={{
                            backgroundColor: "#027C99",
                            color: "#ffffff",
                          }}
                        >
                          {String(svcIndex + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-[40px] max-lg:text-[30px] max-sm:text-[25px] text-[#232061] font-bold leading-[50px]">
                          {service.title}
                        </h2>
                      </AnimateOnScroll>
                      <p className="text-xl max-lg:text-base max-sm:text-[15px] text-[#232061]">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="#contact-section"
                      onClick={(e) => {
                        e.preventDefault();
                        const element =
                          document.getElementById("contact-section");
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      className="flex items-center gap-3 text-white px-4 py-2 rounded-full max-sm:text-sm ml-auto transition-opacity hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: "#027C99" }}
                    >
                      Let&apos;s Talk
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-sm:w-4 max-sm:h-4"
                      >
                        <path
                          d="M15.5833 21.4167L21.4167 15.5833M21.4167 15.5833L15.5833 9.75M21.4167 15.5833H9.75M30.1667 15.5833C30.1667 23.6375 23.6375 30.1667 15.5833 30.1667C7.52918 30.1667 1 23.6375 1 15.5833C1 7.52918 7.52918 1 15.5833 1C23.6375 1 30.1667 7.52918 30.1667 15.5833Z"
                          stroke="#F3F3F3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Service cards grid */}
                  <div
                    className="px-14 py-10 max-sm:px-6 max-sm:py-8 rounded-[50px] mt-[81px] max-sm:mt-[38px] grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-sm:gap-4"
                    style={{ backgroundColor: "#F2F8FA" }}
                  >
                    {service.services.map((serviceItem, index) => (
                      <div key={index} className="flex flex-col">
                        {/* Pill label — alternates between the two brand colors */}
                        <div
                          className="py-1 px-4 max-sm:px-2 text-xl max-sm:text-xs font-semibold rounded-[50px] mb-6 w-max"
                          style={
                            index % 2 === 0
                              ? {
                                  backgroundColor: "#D9EEF3",
                                  color: "#027C99",
                                }
                              : {
                                  backgroundColor: "#E1E1F0",
                                  color: "#232061",
                                }
                          }
                        >
                          <span>{serviceItem.title}</span>
                        </div>
                        <p className="text-[#232061] text-[20px] font-flex max-sm:text-[15px] leading-[30px] font-normal">
                          {serviceItem.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Subtle divider accent line */}
                  {svcIndex < servicesData.length - 1 && (
                    <div
                      className="mt-[60px] max-sm:mt-[40px] h-[2px] w-24 rounded-full"
                      style={{ backgroundColor: "#027C99", opacity: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <ContactSection hideHeading={false} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;