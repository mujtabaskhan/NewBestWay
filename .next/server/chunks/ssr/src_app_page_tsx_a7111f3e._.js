module.exports=[40777,a=>{"use strict";a.s(["default",()=>o],40777);var b=a.i(87924),c=a.i(30370);function d(){return(0,b.jsxs)("section",{className:"w-full bg-white px-6 py-20 relative z-10 max-sm:pt-32",style:{width:"100%",minHeight:"auto"},children:[(0,b.jsx)("style",{children:`
        /* Perspective wrapper — applied to the grid container */
        .cards-grid {
          perspective: 1000px;
        }

        /* Each card is a 3D scene wrapper */
        .card-scene {
          perspective: 900px;
        }

        .difference-card {
          position: relative;
          border-radius: 20px;
          padding: 36px 28px;
          background: linear-gradient(160deg, #ffffff 0%, #f0f8ff 100%);
          border: 1px solid rgba(31, 137, 163, 0.18);

          /* Resting 3D state — slightly tilted toward viewer */
          transform:
            perspective(900px)
            rotateX(4deg)
            translateZ(0px);
          transform-style: preserve-3d;

          box-shadow:
            /* tight contact shadow underneath */
            0 2px 4px rgba(35, 32, 97, 0.10),
            /* mid lift shadow */
            0 12px 30px rgba(31, 137, 163, 0.14),
            /* wide ambient glow */
            0 30px 60px rgba(31, 137, 163, 0.09),
            /* teal edge bloom */
            0 0 0 1px rgba(31, 137, 163, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1);

          transition:
            transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.45s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.4s ease;

          overflow: hidden;
          will-change: transform;
        }

        /* Inner top-light sheen — simulates light hitting the front face */
        .difference-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 55%;
          border-radius: 20px 20px 0 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.70) 0%,
            rgba(255, 255, 255, 0.0) 100%
          );
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.4s ease;
        }

        /* Glowing gradient border ring */
        .difference-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(31, 137, 163, 0.55) 35%,
            rgba(62, 207, 142, 0.40) 65%,
            rgba(35, 32, 97, 0.12) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.8;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        /* HOVER — card leaps out toward viewer */
        .difference-card:hover {
          transform:
            perspective(900px)
            rotateX(0deg)
            translateZ(28px)
            translateY(-8px);

          border-color: rgba(31, 137, 163, 0.35);

          box-shadow:
            /* deep contact shadow — card now far from surface */
            0 28px 50px rgba(35, 32, 97, 0.18),
            /* wide lift glow */
            0 40px 80px rgba(31, 137, 163, 0.18),
            /* green bloom */
            0 0 60px rgba(62, 207, 142, 0.10),
            /* tight rim */
            0 0 0 1px rgba(31, 137, 163, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .difference-card:hover::before { opacity: 0.6; }
        .difference-card:hover::after  { opacity: 1; }

        /* Icon */
        .card-icon {
          filter: drop-shadow(0 0 5px rgba(31, 137, 163, 0.25));
          transition: filter 0.35s ease, transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          z-index: 3;
        }
        .difference-card:hover .card-icon {
          transform: translateZ(8px) scale(1.08);
          filter:
            drop-shadow(0 0 10px rgba(62, 207, 142, 0.65))
            drop-shadow(0 0 24px rgba(31, 137, 163, 0.35));
        }

        /* Heading — light green + glow */
        .card-heading {
          color: #3ecf8e !important;
          position: relative;
          z-index: 3;
          text-shadow:
            0 0 10px rgba(62, 207, 142, 0.45),
            0 0 22px rgba(62, 207, 142, 0.20);
          transition: text-shadow 0.35s ease, transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .difference-card:hover .card-heading {
          transform: translateZ(6px);
          text-shadow:
            0 0 14px rgba(62, 207, 142, 0.75),
            0 0 36px rgba(62, 207, 142, 0.40),
            0 0 60px rgba(62, 207, 142, 0.18);
        }

        /* Paragraph — soft teal glow */
        .card-paragraph {
          color: #232061 !important;
          position: relative;
          z-index: 3;
          text-shadow:
            0 0 8px rgba(31, 137, 163, 0.14),
            0 0 18px rgba(31, 137, 163, 0.06);
          transition: text-shadow 0.35s ease, transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .difference-card:hover .card-paragraph {
          transform: translateZ(4px);
          text-shadow:
            0 0 12px rgba(31, 137, 163, 0.26),
            0 0 28px rgba(31, 137, 163, 0.13);
        }
      `}),(0,b.jsxs)("div",{className:"max-w-7xl mx-auto relative z-10",children:[(0,b.jsx)(c.default,{delay:0,children:(0,b.jsxs)("h3",{className:"text-center text-[56px] max-sm:text-[40px] max-lg:text-[48px] mb-12 max-sm:mb-10 font-extralight text-[#232061] overflow-visible",children:["The"," ",(0,b.jsxs)("span",{className:"font-serif font-semibold italic inline-block pr-2",style:{background:"linear-gradient(90deg, #232061 0%, #1F89A3 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"},children:[" ","Impact"]}),(0,b.jsx)("span",{className:"block -mt-3 text-[#232061]",children:" We Make"})]})}),(0,b.jsxs)("div",{className:"cards-grid grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-sm:gap-12",style:{perspective:"1000px"},children:[(0,b.jsxs)("div",{className:"difference-card flex items-center justify-start flex-col gap-[16px]",children:[(0,b.jsx)("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:(0,b.jsx)("path",{d:"M38.3333 21.6666L33.2299 21.6683C32.8586 24.6053 31.5209 27.3354 29.4274 29.4286C27.3339 31.5217 24.6037 32.8591 21.6666 33.23V38.3333H18.3333L18.3316 33.23C15.3948 32.8587 12.6649 31.5212 10.5718 29.4281C8.47865 27.3349 7.14116 24.6051 6.76992 21.6683L1.66659 21.6666V18.3333H6.76992C7.14082 15.3962 8.47816 12.666 10.5713 10.5725C12.6645 8.47901 15.3946 7.14128 18.3316 6.76996L18.3333 1.66663L21.6666 1.66663V6.76996C24.6039 7.14093 27.3344 8.47852 29.4279 10.572C31.5214 12.6655 32.8589 15.396 33.2299 18.3333H38.3333V21.6666ZM29.9999 20C29.9999 17.3478 28.9464 14.8043 27.071 12.9289C25.1956 11.0535 22.6521 9.99996 19.9999 9.99996C17.3478 9.99996 14.8042 11.0535 12.9289 12.9289C11.0535 14.8043 9.99992 17.3478 9.99992 20C9.99992 22.6521 11.0535 25.1957 12.9289 27.071C14.8042 28.9464 17.3478 30 19.9999 30C22.6521 30 25.1956 28.9464 27.071 27.071C28.9464 25.1957 29.9999 22.6521 29.9999 20ZM23.3333 20C23.3333 20.884 22.9821 21.7319 22.3569 22.357C21.7318 22.9821 20.884 23.3333 19.9999 23.3333C19.1159 23.3333 18.268 22.9821 17.6429 22.357C17.0178 21.7319 16.6666 20.884 16.6666 20C16.6666 19.1159 17.0178 18.2681 17.6429 17.6429C18.268 17.0178 19.1159 16.6666 19.9999 16.6666C20.884 16.6666 21.7318 17.0178 22.3569 17.6429C22.9821 18.2681 23.3333 19.1159 23.3333 20Z",fill:"#232061"})}),(0,b.jsx)("h3",{className:"card-heading font-roboto text-[18px] max-lg:text-[16px] max-sm:text-base font-bold text-center max-md:leading-[40px]",children:"Turning Data Into Decisions"}),(0,b.jsx)("p",{className:"card-paragraph font-flex text-base max-sm:text-sm text-center leading-[30px]",children:"We do more than bookkeeping. Our team turns financial data into actionable strategies that empower you to make informed business decisions, optimize cash flow, and plan for sustainable growth."})]}),(0,b.jsxs)("div",{className:"difference-card flex items-center justify-start flex-col gap-[16px]",children:[(0,b.jsx)("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:(0,b.jsx)("path",{d:"M12.5 22.5C11.2638 22.5 10.0555 22.8666 9.02767 23.5533C7.99986 24.2401 7.19878 25.2162 6.72573 26.3582C6.25269 27.5003 6.12892 28.7569 6.37007 29.9693C6.61123 31.1817 7.20649 32.2953 8.08056 33.1694C8.95464 34.0435 10.0683 34.6388 11.2807 34.8799C12.493 35.1211 13.7497 34.9973 14.8918 34.5242C16.0338 34.0512 17.0099 33.2501 17.6967 32.2223C18.3834 31.1945 18.75 29.9861 18.75 28.75C18.75 27.0924 18.0915 25.5027 16.9194 24.3306C15.7473 23.1585 14.1576 22.5 12.5 22.5ZM12.5 31.25C12.0055 31.25 11.5222 31.1034 11.1111 30.8287C10.6999 30.554 10.3795 30.1635 10.1903 29.7067C10.0011 29.2499 9.95155 28.7472 10.048 28.2623C10.1445 27.7773 10.3826 27.3319 10.7322 26.9822C11.0818 26.6326 11.5273 26.3945 12.0123 26.298C12.4972 26.2016 12.9999 26.2511 13.4567 26.4403C13.9135 26.6295 14.304 26.95 14.5787 27.3611C14.8534 27.7722 15 28.2555 15 28.75C15 29.413 14.7366 30.0489 14.2677 30.5178C13.7989 30.9866 13.163 31.25 12.5 31.25ZM7.49998 20C7.12893 20.0003 6.76613 19.8905 6.45751 19.6845C6.1489 19.4785 5.90835 19.1855 5.76631 18.8427C5.62428 18.4999 5.58714 18.1227 5.65961 17.7588C5.73208 17.3949 5.9109 17.0607 6.17342 16.7984L7.96873 15L6.17342 13.2016C5.82118 12.8493 5.62329 12.3716 5.62329 11.8734C5.62329 11.3753 5.82118 10.8976 6.17342 10.5453C6.52566 10.1931 7.0034 9.99519 7.50154 9.99518C7.99969 9.99518 8.47743 10.1931 8.82967 10.5453L10.625 12.3438L12.4234 10.5484C12.7757 10.1962 13.2534 9.99831 13.7515 9.99831C14.2497 9.99831 14.7274 10.1962 15.0797 10.5484C15.4319 10.9007 15.6298 11.3784 15.6298 11.8766C15.6298 12.3747 15.4319 12.8524 15.0797 13.2047L13.2812 15L15.0812 16.7984C15.4335 17.1507 15.6314 17.6284 15.6314 18.1266C15.6314 18.6247 15.4335 19.1024 15.0812 19.4547C14.729 19.8069 14.2512 20.0048 13.7531 20.0048C13.255 20.0048 12.7772 19.8069 12.425 19.4547L10.625 17.6562L8.82654 19.4516C8.65229 19.6256 8.44544 19.7637 8.21782 19.8578C7.99021 19.9519 7.74628 20.0002 7.49998 20ZM36.3265 31.7984C36.6788 32.1507 36.8767 32.6284 36.8767 33.1266C36.8767 33.6247 36.6788 34.1024 36.3265 34.4547C35.9743 34.8069 35.4966 35.0048 34.9984 35.0048C34.5003 35.0048 34.0225 34.8069 33.6703 34.4547L31.875 32.6562L30.0765 34.4563C29.7243 34.8085 29.2466 35.0064 28.7484 35.0064C28.2503 35.0064 27.7725 34.8085 27.4203 34.4563C27.0681 34.104 26.8702 33.6263 26.8702 33.1281C26.8702 32.63 27.0681 32.1522 27.4203 31.8L29.2187 30L27.4187 28.2016C27.0665 27.8493 26.8686 27.3716 26.8686 26.8734C26.8686 26.3753 27.0665 25.8976 27.4187 25.5453C27.771 25.1931 28.2487 24.9952 28.7469 24.9952C29.245 24.9952 29.7227 25.1931 30.075 25.5453L31.875 27.3438L33.6734 25.5437C34.0257 25.1915 34.5034 24.9936 35.0015 24.9936C35.4997 24.9936 35.9774 25.1915 36.3297 25.5437C36.6819 25.896 36.8798 26.3737 36.8798 26.8719C36.8798 27.37 36.6819 27.8478 36.3297 28.2L34.5312 30L36.3265 31.7984ZM29.5453 17.3266C28.7312 20.9203 25.9 24.1281 22.5 25.3297C22.2678 25.4118 22.0217 25.4473 21.7758 25.4343C21.5299 25.4213 21.289 25.3599 21.0668 25.2538C20.618 25.0395 20.2728 24.6556 20.107 24.1867C19.9413 23.7178 19.9685 23.2023 20.1829 22.7535C20.3972 22.3047 20.7811 21.9595 21.25 21.7937C23.4484 21.0125 25.3547 18.8391 25.8859 16.4969C26.2562 14.8625 25.9484 13.2406 24.9984 11.725V13.1313C24.9984 13.6285 24.8009 14.1054 24.4492 14.4571C24.0976 14.8087 23.6207 15.0063 23.1234 15.0063C22.6261 15.0063 22.1492 14.8087 21.7976 14.4571C21.446 14.1054 21.2484 13.6285 21.2484 13.1313V6.875C21.2484 6.37772 21.446 5.90081 21.7976 5.54917C22.1492 5.19754 22.6261 5 23.1234 5H29.3734C29.8707 5 30.3476 5.19754 30.6992 5.54917C31.0509 5.90081 31.2484 6.37772 31.2484 6.875C31.2484 7.37228 31.0509 7.84919 30.6992 8.20083C30.3476 8.55246 29.8707 8.75 29.3734 8.75H27.5C29.4953 11.3453 30.2219 14.3375 29.5453 17.3266Z",fill:"#232061"})}),(0,b.jsx)("h3",{className:"card-heading font-roboto text-[18px] max-lg:text-[16px] max-sm:text-[20px] font-bold text-center max-md:leading-[40px]",children:"Numbers You Can Trust"}),(0,b.jsx)("p",{className:"card-paragraph font-flex text-base max-sm:text-[15px] text-center leading-[30px]",children:"Every number tells a story, and we make sure yours is precise, compliant, and easy to understand. With meticulous attention to detail, we ensure your accounting, taxes, and audits are handled correctly—every time."})]}),(0,b.jsxs)("div",{className:"difference-card flex items-center justify-start flex-col gap-[16px]",children:[(0,b.jsxs)("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[(0,b.jsx)("path",{d:"M18.3333 28.3333L21.6666 31.6666C21.9949 31.9949 22.3846 32.2554 22.8136 32.433C23.2425 32.6107 23.7023 32.7022 24.1666 32.7022C24.6309 32.7022 25.0906 32.6107 25.5196 32.433C25.9485 32.2554 26.3383 31.9949 26.6666 31.6666C26.9949 31.3383 27.2553 30.9486 27.433 30.5196C27.6107 30.0907 27.7021 29.6309 27.7021 29.1666C27.7021 28.7023 27.6107 28.2426 27.433 27.8136C27.2553 27.3847 26.9949 26.9949 26.6666 26.6666",stroke:"#232061",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M23.3332 23.3333L27.4999 27.5C28.1629 28.163 29.0622 28.5355 29.9999 28.5355C30.9376 28.5355 31.8368 28.163 32.4999 27.5C33.1629 26.8369 33.5354 25.9377 33.5354 25C33.5354 24.0623 33.1629 23.163 32.4999 22.5L26.0332 16.0333C25.0957 15.097 23.8249 14.5711 22.4999 14.5711C21.1749 14.5711 19.9041 15.097 18.9666 16.0333L17.4999 17.5C16.8368 18.163 15.9376 18.5355 14.9999 18.5355C14.0622 18.5355 13.1629 18.163 12.4999 17.5C11.8368 16.8369 11.4644 15.9377 11.4644 15C11.4644 14.0623 11.8368 13.163 12.4999 12.5L17.1832 7.81665C18.7036 6.30023 20.6864 5.33424 22.8176 5.07161C24.9489 4.80897 27.1068 5.2647 28.9499 6.36665L29.7332 6.83332C30.4429 7.26163 31.2866 7.41018 32.0999 7.24998L34.9999 6.66665",stroke:"#232061",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M34.9999 5L36.6666 23.3333H33.3333M4.99992 5L3.33325 23.3333L14.1666 34.1667C14.8296 34.8297 15.7289 35.2022 16.6666 35.2022C17.6043 35.2022 18.5035 34.8297 19.1666 34.1667C19.8296 33.5036 20.2021 32.6043 20.2021 31.6667C20.2021 30.729 19.8296 29.8297 19.1666 29.1667M4.99992 6.66667H18.3333",stroke:"#232061",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,b.jsx)("h3",{className:"card-heading font-roboto text-[18px] max-lg:text-[16px] max-sm:text-[20px] font-bold text-center max-md:leading-[40px]",children:"A Partner You Can Count On"}),(0,b.jsx)("p",{className:"card-paragraph font-flex text-base max-sm:text-[15px] text-center leading-[30px]",children:"From startups to established companies, businesses across the USA rely on us for dependable, transparent, and personalized service. We treat your business as our own, with integrity, clarity, and accountability."})]})]})]})]})}var e=a.i(72131),f=a.i(38246);function g(){let[a,d]=(0,e.useState)(null);return(0,b.jsx)("section",{id:"faq-section",className:"w-full bg-white pt-20 px-4 max-lg:pt-16 max-md:pt-12 max-md:pb-20 max-sm:pt-10 max-sm:!pb-0 relative z-10",style:{width:"100%"},children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,b.jsxs)("div",{className:"mb-[74px] max-sm:mb-[59px]",children:[(0,b.jsx)(c.default,{delay:0,children:(0,b.jsx)("h2",{className:"block max-sm:hidden text-[#027C99] font-semibold mb-2 text-[40px] max-md:text-[30px] max-sm:text-[25px] leading-[80px]",children:"Have questions about our accounting services?"})}),(0,b.jsx)(c.default,{delay:0,children:(0,b.jsx)("h2",{className:"hidden max-sm:block text-[#027C99] font-semibold mb-2 text-[40px] max-md:text-[30px] max-sm:text-[25px] leading-[25px]",children:"FAQ"})}),(0,b.jsx)("p",{className:"text-[#000000] text-[20px] font-flex max-sm:text-[15px] leading-[30px] font-normal",children:"Whether you are looking for guidance on accounting, tax planning, compliance, or financial strategy, this section is designed to address your key concerns and help you see how NewBestway Inc. streamlines complex financial tasks into efficient, well-managed systems that save you time and drive better results."})]}),(0,b.jsx)("div",{className:"space-y-4 max-sm:space-y-3",children:[{question:"What services do you offer?",answer:"We provide comprehensive U.S.-based accounting, tax, and financial management services tailored for businesses and individuals. Our offerings include bookkeeping, federal and state tax preparation, payroll processing, and financial reporting. We also deliver business advisory and Virtual CFO services to support strategic growth. Additionally, we assist with IRS audits, compliance, and business formation to ensure smooth and reliable operations."},{question:"Which industries do you serve?",answer:"We work with clients across diverse sectors, giving us insight into industry-specific requirements and challenges. We serve: Construction & contracting, Education & private schools (including Montessori), Healthcare professionals, Hospitality & restaurants, IT & consultants, Legal practices & law firms, Manufacturing & small-scale production, Mortgage & real estate professionals, Non-profit organizations, Professional services & contractors, Trading & small commerce, and Transportation, logistics & trucking."},{question:"Do you offer virtual or remote services?",answer:"Yes — our firm operates on a modern, paperless, cloud-based model that supports fully virtual delivery. We use: 100% paperless workflow, Secure online portals for document sharing, Remote meetings and consultations, and Accessibility for clients across USA."},{question:"Do you handle IRS or other audits?",answer:"We provide professional representation and support during a wide range of U.S. audits to ensure full compliance and minimize stress. Our audit assistance includes IRS audits, corporate tax audits, payroll tax audits, and sales tax audits. We also support third-party and industry-required financial reviews. From handling communication to preparing documentation, we guide you through every step to ensure accuracy and compliance."}].map((c,e)=>(0,b.jsxs)("div",{children:[(0,b.jsxs)("button",{onClick:()=>{d(a===e?null:e)},className:"w-full px-8 py-3 rounded-[50px] border relative flex items-center justify-start",style:{borderColor:"#232061",backgroundColor:"transparent"},children:[(0,b.jsx)("span",{className:"text-left text-[22px] text-[#232061] font-roboto max-sm:text-xs",children:c.question}),(0,b.jsx)("svg",{width:"25",height:"13",viewBox:"0 0 37 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`absolute right-8 transition-transform duration-300 max-sm:w-3 max-sm:h-2 ${a===e?"rotate-180":""}`,children:(0,b.jsx)("path",{d:"M1.06055 1.06055L18.0605 18.0605L35.0605 1.06055",stroke:"#232061",strokeWidth:"2"})})]}),a===e&&(0,b.jsx)("div",{className:"px-12 py-6 mt-3 max-sm:px-8 max-sm:py-2",children:(0,b.jsx)("p",{className:"text-xl text-[#232061] font-roboto max-sm:text-xs",children:c.answer})})]},e))}),(0,b.jsx)("div",{className:"flex justify-end mt-[74px] max-sm:mt-[38px] pb-[100px] max-sm:pb-[86px]",children:(0,b.jsxs)(f.default,{href:"/faq",className:"px-5 py-1 rounded-full text-[25px] max-sm:text-[15px] max-sm:px-3 leading-[10px] font-semibold inline-flex items-center gap-2 bg-[#027C99] text-white",children:["Learn More",(0,b.jsx)("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M17.5 23.3333L23.3333 17.5M23.3333 17.5L17.5 11.6666M23.3333 17.5H11.6667M32.0833 17.5C32.0833 25.5541 25.5542 32.0833 17.5 32.0833C9.44585 32.0833 2.91667 25.5541 2.91667 17.5C2.91667 9.44581 9.44585 2.91663 17.5 2.91663C25.5542 2.91663 32.0833 9.44581 32.0833 17.5Z",stroke:"#F3F3F3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})})}var h=a.i(71987);let i=function(){let[a,c]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{let a=()=>{c(window.scrollY>0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:`w-full min-h-screen h-screen overflow-hidden pb-[200px] sticky top-0 z-[5] max-xs:!h-[90vh] ${a?"rounded-bl-[60px] rounded-br-[60px]":""}`,style:{width:"100%",WebkitTransform:"translateZ(0)",transform:"translateZ(0)",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",willChange:"transform"},children:[(0,b.jsx)(h.default,{src:"/hero-1.jpg",alt:"hero-hero",width:1440,height:100,className:"w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px] block max-sm:hidden"}),(0,b.jsx)(h.default,{src:"/hero-1.jpg",alt:"hero-hero",width:1440,height:100,className:"w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px] hidden max-sm:block"}),(0,b.jsx)("div",{className:"absolute inset-0 z-[1] bg-black/30"}),(0,b.jsx)("div",{className:"relative z-10 flex items-center h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-sm:pt-64 max-xs:-mt-[20px]",children:(0,b.jsxs)("div",{className:"w-full text-[#ffffff] font-semibold",children:[(0,b.jsx)("p",{className:"text-[20px] max-sm:text-base font-roboto font-semibold mb-4",children:"Welcome to"}),(0,b.jsxs)("h1",{className:"text-[70px] max-lg:text-[55px] max-md:text-[50px] max-sm:text-[40px] leading-[70px] mb-6 font-semibold font-serif max-sm:leading-[40px]",children:["NewBestway",(0,b.jsx)("br",{})," Accounting"]}),(0,b.jsxs)("div",{className:"flex items-center justify-between mt-10 max-xs:mt-16 w-full max-sm:flex-col max-sm:items-start max-sm:gap-6 max-sm:mt-0 flex-wrap gap-12",children:[(0,b.jsxs)("div",{className:"flex items-center gap-8 max-sm:gap-2 font-roboto",children:[(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)("span",{className:"text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl",style:{color:"#afecdb",fontWeight:100},children:"("}),(0,b.jsxs)("div",{className:"mx-4  text-[#afecdb] font-normal pt-3",children:[(0,b.jsx)("p",{className:"text-[30px] max-sm:text-base leading-[40px] max-sm:leading-normal",children:"Clear"}),(0,b.jsx)("p",{className:"text-[30px] max-sm:text-base leading-[40px] max-sm:leading-normal",children:"Finances"})]}),(0,b.jsx)("span",{className:"text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl",style:{color:"#afecdb",fontWeight:100},children:")"})]}),(0,b.jsxs)("div",{className:"text-[32px] max-sm:text-[18px] leading-[40px] max-sm:leading-normal font-extrabold pt-3",children:[(0,b.jsx)("p",{style:{color:"#fff"},children:"Better"}),(0,b.jsx)("p",{style:{color:"#fff"},children:"Outcomes"})]})]}),(0,b.jsx)("div",{className:"flex items-center gap-3",children:(0,b.jsxs)("button",{onClick:()=>{let a=document.getElementById("contact-section");a&&a.scrollIntoView({behavior:"smooth",block:"start"})},className:"group px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-base leading-[10px] max-sm:text-[15px] max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer",style:{backgroundColor:"#027C99"},children:[(0,b.jsxs)("span",{className:"relative inline-block overflow-hidden",children:[(0,b.jsx)("span",{className:"inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal",children:"Schedule An Appointment"}),(0,b.jsx)("span",{className:"absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal",children:"Schedule An Appointment"})]}),(0,b.jsxs)("span",{className:"relative inline-block overflow-hidden w-6 h-6 max-sm:!w-[18px] max-sm:!h-[18px]",children:[(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full max-sm:!w-[18px] max-sm:!h-[18px] max-sm:mb-[4px]",children:(0,b.jsx)("path",{d:"M12 22L22 12M22 12L12 2M22 12L2 12",stroke:"white",strokeWidth:"1.42857",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 max-sm:!w-[18px] max-sm:!h-[18px]",children:(0,b.jsx)("path",{d:"M12 22L22 12M22 12L12 2M22 12L2 12",stroke:"white",strokeWidth:"1.42857",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})]})})]})})},j=function(){return(0,b.jsx)("section",{className:"w-full bg-white py-15 px-4 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-20 rounded-tl-[60px] rounded-tr-[60px] -mt-14 relative z-[6] max-sm:px-10",style:{width:"100%"},children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto relative",children:[(0,b.jsx)("div",{className:"relative max-w-3xl mx-auto mb-12 max-sm:mb-10",children:(0,b.jsx)("p",{className:"text-center text-2xl font-roboto leading-relaxed font-normal text-[#232061]",children:"We help businesses grow with transparency, accountability, and accuracy. Through forward-thinking financial guidance, we support confident and informed decision-making."})}),(0,b.jsx)("div",{className:"flex flex-wrap justify-center gap-4 mb-4",children:[{name:"Company Formations",href:"/services#company-formations"},{name:"Not For Profits",href:"/services#not-for-profits"},{name:"Sole Proprietorship",href:"/services#sole-proprietorship"},{name:"DBAs",href:"/services#dbas"},{name:"Tax ID Numbers",href:"/services#tax-id-numbers"},{name:"S. Corporation Election",href:"/services#s-corporation-election"},{name:"Amendments / Changes",href:"/services#amendments-changes"},{name:"Minutes / Resolutions",href:"/services#minutes-resolutions"},{name:"Registered Agent",href:"/services#registered-agent"},{name:"Corporate File",href:"/services#corporate-file"},{name:"Dissolutions",href:"/services#dissolutions"},{name:"Reinstatements",href:"/services#reinstatements"}].map(a=>(0,b.jsxs)(f.default,{href:a.href,className:"px-8 py-3 rounded-full text-[20px] max-sm:text-[15px] max-sm:px-6 max-sm:py-2 font-semibold bg-[#027C99] text-[#fcfcfc] hover:bg-[#D0E3EA] transition-all duration-300 cursor-pointer group flex items-center hover:gap-2 gap-0",children:[a.name,(0,b.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"opacity-0 w-0 -translate-x-2 overflow-hidden group-hover:opacity-100 group-hover:w-3 group-hover:translate-x-0 transition-all duration-300 ease-out",children:(0,b.jsx)("path",{d:"M0.00011249 10.4935L1.41433 11.9077L9.89961 3.42239V11.2006H11.9078V-4.90338e-06H0.707219V2.00818H8.48539L0.00011249 10.4935Z",fill:"#232061"})})]},a.name))})]})})};var k=a.i(23613);function l(){return(0,b.jsx)("section",{className:"w-full bg-white relative z-10",style:{width:"100%"},children:(0,b.jsx)("div",{className:"relative w-full",children:(0,b.jsx)("div",{className:"w-full overflow-hidden shadow-lg rounded-lg",style:{width:"100%",height:"500px"},children:(0,b.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.217597539713!2d-73.98517227456958!3d40.74863280672389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9bb853f49%3A0x3da55bc6c02918a8!2s1%20W%2034th%20St.%20Rm%20201%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1772223428112!5m2!1sen!2s",width:"100%",height:"500",style:{border:0,borderRadius:"8px"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Veritas Accounting Location Map"})})})})}var m=a.i(73885);function n(){return(0,b.jsx)("section",{className:"w-full bg-white py-[160px] max-xl:py-44 max-lg:py-36 max-md:py-28 max-sm:!py-20 relative z-[6]",style:{width:"100%"},children:(0,b.jsx)("div",{className:"max-w-7xl mx-auto px-14 max-sm:px-4",children:(0,b.jsxs)("div",{className:"flex justify-center items-center max-lg:items-start gap-14 max-xl:gap-10 max-sm:!gap-6 max-sm:flex-col max-sm:text-center max-lg:flex-col",children:[(0,b.jsx)("div",{className:"max-lg:block hidden",children:(0,b.jsxs)(c.default,{delay:0,children:[(0,b.jsxs)("h2",{className:"!font-roboto text-[64px] !font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[64px] max-sm:!leading-[50px] overflow-visible text-left h-max",children:[(0,b.jsx)("span",{className:"font-semibold italic max-sm:block text-transparent font-serif pr-2",style:{background:"linear-gradient(90deg, #232061 0%, #1F89A3 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"},children:"Message"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)("h2",{className:"max-sm:-mt-10 font-extralight text-[64px] max-sm:text-[56px] text-[#232061] max-sm:text-left max-sm:leading-[60px]",children:[" ","from Our CEO"]})]})}),(0,b.jsx)(h.default,{src:"/",alt:"Founder",width:500,height:800,className:"w-[400px] h-[600px] object-cover max-sm:!w-[369px] max-sm:!h-full"}),(0,b.jsxs)("div",{className:"flex flex-col gap-[32px] max-sm:gap-6 max-sm:items-center w-full",children:[(0,b.jsx)("div",{className:"max-lg:hidden block",children:(0,b.jsxs)(c.default,{delay:0,children:[(0,b.jsxs)("h2",{className:"!font-roboto text-[64px] !font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[15px] overflow-visible",children:[(0,b.jsx)("span",{className:"font-semibold italic max-sm:block max-sm:!not-italic text-transparent font-serif pr-2",style:{background:"linear-gradient(90deg, #232061 0%, #1F89A3 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"},children:"Message"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)("h2",{className:"font-extralight text-[64px] text-[#232061] max-sm:text-base max-sm:text-center",children:[" ","from Our CEO"]})]})}),(0,b.jsxs)("p",{className:"text-lg text-[#232061] leading-[35px] font-flex max-sm:leading-6 max-sm:text-left",children:["When I founded NewBestway Inc., it was with a single belief: financial clarity drives business success. The name reflects our commitment to truth and transparency. We don’t just manage your accounts—we simplify finance, provide honest guidance, and empower you to focus on growing your vision. At ",(0,b.jsx)("span",{className:"!font-black text-[#027C99]",children:"NewBestway Inc."}),", integrity and excellence guide everything we do, delivering value that lasts."]}),(0,b.jsxs)("div",{className:"max-sm:flex max-sm:flex-col max-sm:items-start max-sm:text-left w-full",children:[(0,b.jsxs)("h3",{className:"text-[32px] text-[#027C99] leading-[50px] max-xl:text-[44px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-9 max-sm:!text-[32px] max-sm:!leading-[20px] font-roboto max-sm:text-left",children:["Salahuddin Ahmed"," "]}),(0,b.jsx)("p",{className:"font-semibold text-lg text-[#027C99] italic max-sm:text-let font-serif",children:"CEO/Founder"})]})]})]})})})}function o(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.default,{}),(0,b.jsxs)("div",{className:"w-full min-h-screen",children:[(0,b.jsx)(i,{}),(0,b.jsx)(j,{}),(0,b.jsx)(d,{}),(0,b.jsx)(g,{}),(0,b.jsx)(n,{}),(0,b.jsx)(l,{}),(0,b.jsx)(k.default,{hideHeading:!1})]})]})}}];

//# sourceMappingURL=src_app_page_tsx_a7111f3e._.js.map