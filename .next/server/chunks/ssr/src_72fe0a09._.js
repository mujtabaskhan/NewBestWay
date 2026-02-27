module.exports=[30370,a=>{"use strict";a.s(["default",()=>d]);var b=a.i(87924),c=a.i(72131);function d({children:a,delay:d=0,className:e="",threshold:f=.1}){let[g,h]=(0,c.useState)(!1),i=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=new IntersectionObserver(([b])=>{b.isIntersecting&&(h(!0),i.current&&a.unobserve(i.current))},{threshold:f,rootMargin:"0px 0px -50px 0px"});return i.current&&a.observe(i.current),()=>{i.current&&a.unobserve(i.current)}},[f]),(0,b.jsx)("div",{ref:i,className:`transition-all duration-700 ease-out ${g?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} ${e}`,style:{transitionDelay:g?`${d}ms`:"0ms"},children:a})}},23613,a=>{"use strict";a.s(["default",()=>e]);var b=a.i(87924),c=a.i(72131),d=a.i(30370);function e({hideHeading:a=!0}){let[e,f]=(0,c.useState)(""),[g,h]=(0,c.useState)(!1),i=(0,c.useRef)(null),[j,k]=(0,c.useState)({name:"",email:"",phone:"",message:""}),[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)({type:null,message:""}),p=[{value:"accounting",label:"Accounting"},{value:"tax",label:"Tax Services"},{value:"payroll",label:"Payroll Services"},{value:"audit",label:"Audit & Compliance Support"},{value:"cfo",label:"CFO Services"},{value:"advisory",label:"Business Advisory"},{value:"admin",label:"Business Administration"}],q=a=>{let{name:b,value:c}=a.target;k(a=>({...a,[b]:c})),n.type&&o({type:null,message:""})},r=async a=>{if(a.preventDefault(),!j.name.trim()||!j.email.trim()||!j.message.trim())return void o({type:"error",message:"Please fill in all required fields (Name, Email, and Message)."});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j.email))return void o({type:"error",message:"Please enter a valid email address."});m(!0),o({type:null,message:""});try{let a=e?p.find(a=>a.value===e)?.label:void 0,b=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j.name.trim(),email:j.email.trim(),phone:j.phone.trim(),message:j.message.trim(),service:a})}),c=await b.json();if(!b.ok)throw Error(c.error||"Failed to send message");o({type:"success",message:"Thank you! Your message has been sent successfully. We'll get back to you soon."}),k({name:"",email:"",phone:"",message:""}),f("")}catch(a){o({type:"error",message:a instanceof Error?a.message:"Something went wrong. Please try again later."})}finally{m(!1)}};return(0,c.useEffect)(()=>{let a=a=>{i.current&&!i.current.contains(a.target)&&h(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),(0,b.jsx)("section",{id:"contact-section",className:"w-full bg-white py-32 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-bl-[60px] rounded-br-[60px] relative z-[5]",style:{width:"100%",position:"relative",zIndex:6,WebkitTransform:"translateZ(0)",transform:"translateZ(0)",isolation:"isolate",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden"},children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto px-14 max-sm:px-4",children:[a&&(0,b.jsx)("div",{className:"text-center mb-[185px] max-sm:!mb-[81px]",children:(0,b.jsx)(d.default,{delay:0,children:(0,b.jsxs)("h2",{className:"text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[20px] max-sm:!text-center",children:["Curious about what we ",(0,b.jsx)("br",{}),"can do for you?"]})})}),(0,b.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 max-lg:gap-10 max-sm:!gap-[96px]",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"pb-[24px]",children:[(0,b.jsx)("h3",{className:"text-[32px] font-semibold text-[#232061] max-sm:text-2xl mb-2",children:"Let's Connect!"}),(0,b.jsxs)("p",{className:"text-2xl text-[#232061] max-sm:!text-xl",style:{fontWeight:300,fontFamily:'"Roboto", sans-serif',WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},children:["No matter how big or small your queries are, we are here to help."," "]})]}),(0,b.jsxs)("form",{onSubmit:r,children:[n.type&&(0,b.jsx)("div",{className:`mb-6 p-4 rounded-2xl ${"success"===n.type?"bg-green-50 border-2 border-green-500 text-green-700":"bg-red-50 border-2 border-red-500 text-red-700"}`,children:(0,b.jsx)("p",{className:"text-base font-roboto max-sm:text-sm",children:n.message})}),(0,b.jsx)("div",{className:"relative mb-[24px]",children:(0,b.jsxs)("div",{className:"relative",ref:i,children:[(0,b.jsx)("div",{className:"border-1 border-[#232061] rounded-full py-4 px-8 cursor-pointer hover:border-opacity-80 transition-colors max-sm:px-6",onClick:()=>h(!g),children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)("span",{className:`font-roboto font-semibold text-base text-[#232061] max-sm:!text-sm ${e?"":"text-opacity-40"}`,children:e?p.find(a=>a.value===e)?.label:"Select your Service"}),(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`w-4 h-4 text-[#232061] transition-transform duration-200 ${g?"rotate-180":""}`,children:(0,b.jsx)("path",{d:"M15.8215 4.5L17.1587 5.83853L9.87064 13.1292C9.75386 13.2467 9.61499 13.3399 9.46202 13.4036C9.30906 13.4672 9.14501 13.5 8.97934 13.5C8.81366 13.5 8.64962 13.4672 8.49665 13.4036C8.34369 13.3399 8.20482 13.2467 8.08804 13.1292L0.796143 5.83853L2.13341 4.50126L8.97744 11.344L15.8215 4.5Z",fill:"#232061"})})]})}),g&&(0,b.jsx)("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#232061] rounded-2xl shadow-lg z-50 max-h-60 overflow-y-auto",children:p.map(a=>(0,b.jsx)("div",{className:"px-4 py-3 hover:bg-gray-50 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl transition-colors",onClick:()=>{f(a.value),h(!1)},children:(0,b.jsx)("span",{className:"text-xl text-[#232061] max-sm:text-base",children:a.label})},a.value))})]})}),(0,b.jsxs)("div",{className:"mb-[24px]",children:[(0,b.jsx)("label",{className:"block text-base text-[#232061] font-roboto font-semibold mb-2",children:"Name"}),(0,b.jsx)("input",{type:"text",name:"name",value:j.name,onChange:q,placeholder:"Your Full Name here",required:!0,className:"w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"})]}),(0,b.jsxs)("div",{className:"mb-[24px]",children:[(0,b.jsx)("label",{className:"block text-base text-[#232061] font-roboto font-semibold mb-2",children:"Email"}),(0,b.jsx)("input",{type:"email",name:"email",value:j.email,onChange:q,placeholder:"Your Email address here",required:!0,className:"w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"})]}),(0,b.jsxs)("div",{className:"mb-[24px]",children:[(0,b.jsx)("label",{className:"block text-base text-[#232061] font-roboto font-semibold mb-2",children:"Phone"}),(0,b.jsx)("input",{type:"tel",name:"phone",value:j.phone,onChange:q,placeholder:"Your Phone number here",className:"w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:"block text-base text-[#232061] font-roboto font-semibold mb-2",children:"Message"}),(0,b.jsx)("textarea",{name:"message",value:j.message,onChange:q,placeholder:"Your brief message here",rows:6,required:!0,className:"w-full border-1 border-[#232061] rounded-3xl px-8 py-6 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none resize-none bg-white max-sm:px-6 max-sm:py-4 max-sm:!text-sm"})]}),(0,b.jsx)("div",{className:"flex items-center gap-3 justify-end max-sm:!justify-center mt-6",children:(0,b.jsxs)("button",{type:"submit",disabled:l,className:"group px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-xl leading-[10px] max-sm:text-[15px] max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer",style:{backgroundColor:"#232061"},children:[(0,b.jsxs)("span",{className:"relative inline-block overflow-hidden",children:[(0,b.jsx)("span",{className:"inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal",children:l?"Sending...":"Submit"}),(0,b.jsx)("span",{className:"absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal",children:l?"Sending...":"Submit"})]}),(0,b.jsxs)("span",{className:"relative inline-block overflow-hidden w-6 h-6 max-sm:!w-[18px] max-sm:!h-[18px]",children:[(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full max-sm:!w-[18px] max-sm:!h-[18px] max-sm:mb-[4px]",children:(0,b.jsx)("path",{d:"M12 22L22 12M22 12L12 2M22 12L2 12",stroke:"white",strokeWidth:"1.42857",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 max-sm:!w-[18px] max-sm:!h-[18px]",children:(0,b.jsx)("path",{d:"M12 22L22 12M22 12L12 2M22 12L2 12",stroke:"white",strokeWidth:"1.42857",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})]}),(0,b.jsx)("div",{className:"space-y-8 contact-card flex items-center justify-center",children:(0,b.jsxs)("div",{className:"rounded-3xl py-[73.5px] px-12 max-sm:p-8 h-full flex justify-center flex-col",children:[(0,b.jsx)("h3",{className:"text-[56px] leading-[48px] text-[#232061] mb-2 max-sm:text-[40px] font-extralight",children:"What Happens Next?"}),(0,b.jsx)("p",{className:"text-2xl text-[#232061] mb-16 font-semibold font-roboto max-sm:text-xl max-sm:mb-12",children:"3 easy steps"}),(0,b.jsxs)("div",{className:"space-y-16 relative max-sm:space-y-12",children:[(0,b.jsx)("div",{className:"flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10",children:(0,b.jsxs)("div",{className:"flex gap-6",children:[(0,b.jsx)("h3",{className:"font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base",children:"Step 1"}),(0,b.jsxs)("div",{className:"font-roboto flex flex-col gap-2",children:[" ",(0,b.jsx)("h4",{className:"text-xl text-[#232061] font-semibold max-sm:text-base",children:"Review & Response"}),(0,b.jsx)("p",{className:"text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5",children:"We will review your form and contact you within 1–2 business days to confirm your details."})]})]})}),(0,b.jsx)("div",{className:"flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10",children:(0,b.jsxs)("div",{className:"flex gap-6",children:[(0,b.jsx)("h3",{className:"font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base",children:"Step 2"}),(0,b.jsxs)("div",{className:"font-roboto flex flex-col gap-2",children:[" ",(0,b.jsx)("h4",{className:"text-xl text-[#232061] font-semibold max-sm:text-base",children:"Consultation"}),(0,b.jsx)("p",{className:"text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5",children:"We'll schedule a short call to understand your needs and recommend the right accounting solutions."})]})]})}),(0,b.jsx)("div",{className:"flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10",children:(0,b.jsxs)("div",{className:"flex gap-6",children:[(0,b.jsx)("h3",{className:"font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base",children:"Step 3"}),(0,b.jsxs)("div",{className:"font-roboto flex flex-col gap-2",children:[" ",(0,b.jsx)("h4",{className:"text-xl text-[#232061] font-semibold max-sm:text-base",children:"Proposal & Onboarding"}),(0,b.jsx)("p",{className:"text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5",children:"You'll receive a customized service proposal, and once approved, we'll begin your onboarding process right away."})]})]})})]})]})})]})]})})}},15468,a=>{"use strict";a.s(["default",()=>h]);var b=a.i(87924),c=a.i(23613),d=a.i(73885),e=a.i(72131),f=a.i(30370),g=a.i(38246);let h=()=>{let[a,h]=(0,e.useState)(null);return(0,b.jsx)("div",{className:"w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]",children:(0,b.jsxs)("main",{className:"w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden",style:{width:"100%",minHeight:"100vh"},children:[(0,b.jsx)(d.default,{}),(0,b.jsx)("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Outfit:wght@300;400;500;600&display=swap');

          /* ── floating orb background ── */
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

          /* ── FAQ item ── */
          .faq-item {
            position: relative;
            border-radius: 20px;
            background: transparent;
            transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
            cursor: pointer;
            overflow: hidden;
          }

          .faq-item::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            border: 1.5px solid transparent;
            background: linear-gradient(135deg, rgba(2,124,153,0.18), rgba(2,124,153,0.05)) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.35s ease;
            pointer-events: none;
          }

          .faq-item:hover::before,
          .faq-item.is-open::before {
            opacity: 1;
          }

          .faq-item:hover,
          .faq-item.is-open {
            background: linear-gradient(135deg, rgba(2,124,153,0.07) 0%, rgba(2,124,153,0.02) 100%);
            box-shadow: 0 8px 40px rgba(2,124,153,0.1), 0 2px 8px rgba(2,124,153,0.05);
            transform: translateY(-2px);
          }

          .faq-item-inner {
            padding: 30px 36px;
          }

          @media (max-width: 640px) {
            .faq-item-inner { padding: 20px 20px; }
          }

          /* header row */
          .faq-header {
            display: flex;
            align-items: center;
            gap: 20px;
            user-select: none;
          }

          /* animated pill number */
          .faq-pill {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #e6f5f8;
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

          /* animated toggle icon */
          .faq-toggle {
            flex-shrink: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1.5px solid rgba(2,124,153,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.3s, background 0.3s;
            position: relative;
          }

          .faq-item.is-open .faq-toggle {
            border-color: #027C99;
            background: #027C99;
          }

          .faq-toggle-bar {
            position: absolute;
            background: #027C99;
            border-radius: 2px;
            transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, background 0.3s;
          }

          .faq-toggle-bar.h {
            width: 14px;
            height: 1.8px;
          }

          .faq-toggle-bar.v {
            width: 1.8px;
            height: 14px;
            transform: scaleY(1);
          }

          .faq-item.is-open .faq-toggle-bar {
            background: #fff;
          }

          .faq-item.is-open .faq-toggle-bar.v {
            transform: scaleY(0);
            opacity: 0;
          }

          .faq-item.is-open .faq-toggle-bar.h {
            transform: rotate(180deg);
          }

          /* answer slide */
          .faq-answer-wrap {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.42s cubic-bezier(0.4,0,0.2,1);
          }

          .faq-answer-wrap.open {
            grid-template-rows: 1fr;
          }

          .faq-answer-inner {
            overflow: hidden;
          }

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

          /* subtle separator line */
          .faq-sep {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(2,124,153,0.12) 30%, rgba(2,124,153,0.12) 70%, transparent);
            margin: 0 36px;
          }

          /* staggered entrance */
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .faq-entry {
            animation: fadeSlideUp 0.55s ease both;
          }

          /* left accent bar for open */
          .faq-item.is-open .faq-item-inner {
            position: relative;
          }
          .faq-item.is-open .faq-item-inner::before {
            content: '';
            position: absolute;
            left: 0;
            top: 20px;
            bottom: 20px;
            width: 3px;
            border-radius: 4px;
            background: linear-gradient(180deg, #027C99, #54bdd1);
            animation: growBar 0.35s ease both;
          }

          @keyframes growBar {
            from { transform: scaleY(0); transform-origin: top; }
            to   { transform: scaleY(1); transform-origin: top; }
          }
        `}),(0,b.jsx)("section",{className:"faq-bg w-full pb-[80px]",children:(0,b.jsxs)("div",{className:"relative z-[10] max-lg:z-[1] max-w-7xl mx-auto px-14 max-sm:px-4 pt-52 max-lg:!pt-0 max-sm:mt-0 max-sm:!pt-3",children:[(0,b.jsx)("div",{className:"mb-12",children:(0,b.jsxs)("nav",{className:"text-[#232061] text-xs font-flex max-sm:text-xs",children:[(0,b.jsx)(g.default,{href:"/",className:"font-normal",children:"Home"})," ",(0,b.jsx)("span",{className:"font-black mx-5",children:">"}),(0,b.jsx)("span",{className:"font-normal",children:"FAQ"})]})}),(0,b.jsxs)("div",{className:"mb-[129px] max-sm:mb-[65px]",children:[(0,b.jsx)(f.default,{delay:0,children:(0,b.jsxs)("h1",{className:"text-[#232061] font-semibold mb-9 text-[60px] max-sm:text-[30px] max-lg:text-[40px]",children:["Frequently Asked Questions ",(0,b.jsx)("br",{className:"max-sm:hidden"})," ",(0,b.jsx)("span",{className:"font-light",children:"by our Clients"})]})}),(0,b.jsx)("p",{className:"text-[#232061] text-xl font-flex max-w-4xl max-sm:text-xs",children:"We understand that choosing the right accounting partner can be confusing. That's why we've answered some of the most common questions our clients ask, to help you make informed, confident decisions about your business and finances."})]}),(0,b.jsx)("div",{className:"flex flex-col",style:{gap:"10px"},children:[{question:"What services does New Bestway Inc. provide?",answer:"New Bestway Inc. delivers comprehensive accounting and financial solutions designed for U.S. businesses and individuals. Our services include monthly and annual bookkeeping, corporate and individual tax preparation (federal & state), payroll processing, financial statement preparation, business consulting, Virtual CFO services, fully outsourced accounting departments, IRS audit representation, sales tax compliance, and business formation support."},{question:"What are your pricing options?",answer:"Our fees are tailored to fit the scope and complexity of your needs. Pricing depends on the type of service, size of your organization, transaction volume, reporting frequency, and whether you require payroll, advisory, or CFO-level support. We provide personalized quotes following an initial consultation."},{question:"What does your onboarding process look like?",answer:"We use a streamlined onboarding system to ensure accuracy and efficiency from day one. The process typically includes an initial consultation, review of existing records, secure document collection, cleanup or migration of prior financial data, system setup, team assignment, and establishing reporting timelines."},{question:"Do you work with clients outside your local area?",answer:"Yes. Our firm operates fully online using secure, cloud-based platforms. We proudly serve clients across multiple U.S. states through virtual meetings, encrypted file sharing, and remote accounting systems."},{question:"Can you represent clients during IRS audits?",answer:"Absolutely. We provide professional audit support and representation for IRS examinations, corporate tax reviews, payroll tax audits, sales tax audits, and other regulatory inquiries. Our team assists with documentation preparation, communication, and compliance guidance throughout the process."},{question:"What industries does New Bestway Inc. serve?",answer:"We support businesses across a broad range of industries including construction, private education institutions, healthcare providers, hospitality and restaurants, IT and technology consultants, law firms, manufacturing, real estate and mortgage professionals, nonprofit organizations, professional service firms, retail and trading businesses, and transportation and logistics companies."},{question:"How do you protect client financial information?",answer:"Data security is a top priority at New Bestway Inc. We implement encrypted data transfers, secure cloud accounting platforms, restricted access controls, multi-factor authentication, routine system backups, and compliance with U.S. data protection standards."},{question:"Do you work with individuals as well as businesses?",answer:"Yes. We provide customized solutions for individuals, sole proprietors, partnerships, LLCs, corporations, nonprofits, and owner-operated businesses. Our services are structured to meet the unique financial needs of each client."},{question:"Can you help with business formation in the U.S.?",answer:"Yes. We assist entrepreneurs with forming LLCs, corporations, and other legal entities. Our services include entity selection guidance, EIN registration, federal and state tax setup, initial compliance filings, and ongoing reporting requirements."},{question:"How do I begin working with New Bestway Inc.?",answer:"Getting started is simple. Contact us through our website or by phone, schedule a consultation, share your business goals and current financial situation, and receive a customized service proposal. Most inquiries are answered within one to two business days."},{question:"Do you offer remote accounting services?",answer:"Yes. Our firm operates on a fully digital infrastructure, allowing us to deliver bookkeeping, tax, payroll, and advisory services virtually. Clients benefit from secure document portals, remote consultations, and cloud-based accounting systems accessible from anywhere in the U.S."},{question:"Are my records kept confidential?",answer:"Confidentiality and privacy are fundamental to our practice. We follow strict internal controls, encrypted storage protocols, and professional ethical standards to ensure your financial records remain secure at all times."},{question:"How can I contact your team?",answer:"You can reach New Bestway Inc. by submitting a request through our website, emailing our support team, or calling our office directly. Our team typically responds within one to two business days."}].map((c,d)=>{let e=a===d;return(0,b.jsx)("div",{className:`faq-entry faq-item ${e?"is-open":""}`,style:{animationDelay:`${.045*d}s`},onClick:()=>(b=>{h(a===b?null:b)})(d),children:(0,b.jsxs)("div",{className:"faq-item-inner",children:[(0,b.jsxs)("div",{className:"faq-header",children:[(0,b.jsx)("div",{className:"faq-pill",children:String(d+1).padStart(2,"0")}),(0,b.jsx)("p",{className:"faq-question-text",children:c.question}),(0,b.jsxs)("div",{className:"faq-toggle",children:[(0,b.jsx)("span",{className:"faq-toggle-bar h"}),(0,b.jsx)("span",{className:"faq-toggle-bar v"})]})]}),(0,b.jsx)("div",{className:`faq-answer-wrap ${e?"open":""}`,children:(0,b.jsx)("div",{className:"faq-answer-inner",children:(0,b.jsx)("p",{className:"faq-answer-text",children:c.answer})})})]})},d)})})]})}),(0,b.jsx)(c.default,{hideHeading:!1})]})})}}];

//# sourceMappingURL=src_72fe0a09._.js.map