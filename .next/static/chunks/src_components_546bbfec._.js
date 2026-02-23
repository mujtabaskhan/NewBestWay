(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimateOnScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimateOnScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnimateOnScroll(param) {
    let { children, delay = 0, className = "", threshold = 0.1 } = param;
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimateOnScroll.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AnimateOnScroll.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Optionally disconnect after first trigger to improve performance
                        if (elementRef.current) {
                            observer.unobserve(elementRef.current);
                        }
                    }
                }
            }["AnimateOnScroll.useEffect"], {
                threshold,
                rootMargin: "0px 0px -50px 0px"
            });
            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
            return ({
                "AnimateOnScroll.useEffect": ()=>{
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            })["AnimateOnScroll.useEffect"];
        }
    }["AnimateOnScroll.useEffect"], [
        threshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        className: "transition-all duration-700 ease-out ".concat(isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10", " ").concat(className),
        style: {
            transitionDelay: isVisible ? "".concat(delay, "ms") : "0ms"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AnimateOnScroll.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(AnimateOnScroll, "ars/gJ7qRrRI4qdM8DRo1FWAkKE=");
_c = AnimateOnScroll;
var _c;
__turbopack_context__.k.register(_c, "AnimateOnScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/about/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimateOnScroll.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ContactSection(param) {
    let { hideHeading = true } = param;
    var _services_find;
    _s();
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: null,
        message: ""
    });
    const services = [
        {
            value: "accounting",
            label: "Accounting"
        },
        {
            value: "tax",
            label: "Tax Services"
        },
        {
            value: "payroll",
            label: "Payroll Services"
        },
        {
            value: "audit",
            label: "Audit & Compliance Support"
        },
        {
            value: "cfo",
            label: "CFO Services"
        },
        {
            value: "advisory",
            label: "Business Advisory"
        },
        {
            value: "admin",
            label: "Business Administration"
        }
    ];
    const handleServiceSelect = (service)=>{
        setSelectedService(service.value);
        setIsOpen(false);
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear status message when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({
                type: null,
                message: ""
            });
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Validate required fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus({
                type: "error",
                message: "Please fill in all required fields (Name, Email, and Message)."
            });
            return;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                type: "error",
                message: "Please enter a valid email address."
            });
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus({
            type: null,
            message: ""
        });
        try {
            var _services_find;
            const serviceLabel = selectedService ? (_services_find = services.find((s)=>s.value === selectedService)) === null || _services_find === void 0 ? void 0 : _services_find.label : undefined;
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    phone: formData.phone.trim(),
                    message: formData.message.trim(),
                    service: serviceLabel
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }
            // Success
            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully. We'll get back to you soon."
            });
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
            setSelectedService("");
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: error instanceof Error ? error.message : "Something went wrong. Please try again later."
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            const handleClickOutside = {
                "ContactSection.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["ContactSection.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ContactSection.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact-section",
        className: "w-full bg-white py-32 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-bl-[60px] rounded-br-[60px] relative z-[5]",
        style: {
            width: "100%",
            position: "relative",
            zIndex: 6,
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            isolation: "isolate",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-14 max-sm:px-4",
            children: [
                hideHeading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-[185px] max-sm:!mb-[81px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[20px] max-sm:!text-center",
                            children: [
                                "Curious about what we ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                    lineNumber: 171,
                                    columnNumber: 39
                                }, this),
                                "can do for you?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/about/ContactSection.tsx",
                            lineNumber: 170,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/ContactSection.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/about/ContactSection.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 max-lg:gap-10 max-sm:!gap-[96px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-[24px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[32px] font-semibold text-[#232061] max-sm:text-2xl mb-2",
                                            children: "Let's Connect!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl text-[#232061] max-sm:!text-xl",
                                            style: {
                                                fontWeight: 300,
                                                fontFamily: '"Roboto", sans-serif',
                                                WebkitFontSmoothing: "antialiased",
                                                MozOsxFontSmoothing: "grayscale"
                                            },
                                            children: [
                                                "No matter how big or small your queries are, we are here to help.",
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        submitStatus.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 p-4 rounded-2xl ".concat(submitStatus.type === "success" ? "bg-green-50 border-2 border-green-500 text-green-700" : "bg-red-50 border-2 border-red-500 text-red-700"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-roboto max-sm:text-sm",
                                                children: submitStatus.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-[24px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                ref: dropdownRef,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-1 border-[#232061] rounded-full py-4 px-8 cursor-pointer hover:border-opacity-80 transition-colors max-sm:px-6",
                                                        onClick: ()=>setIsOpen(!isOpen),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-roboto font-semibold text-base text-[#232061] max-sm:!text-sm ".concat(selectedService ? "" : "text-opacity-40"),
                                                                    children: selectedService ? (_services_find = services.find((s)=>s.value === selectedService)) === null || _services_find === void 0 ? void 0 : _services_find.label : "Select your Service"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "w-4 h-4 text-[#232061] transition-transform duration-200 ".concat(isOpen ? "rotate-180" : ""),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M15.8215 4.5L17.1587 5.83853L9.87064 13.1292C9.75386 13.2467 9.61499 13.3399 9.46202 13.4036C9.30906 13.4672 9.14501 13.5 8.97934 13.5C8.81366 13.5 8.64962 13.4672 8.49665 13.4036C8.34369 13.3399 8.20482 13.2467 8.08804 13.1292L0.796143 5.83853L2.13341 4.50126L8.97744 11.344L15.8215 4.5Z",
                                                                        fill: "#232061"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#232061] rounded-2xl shadow-lg z-50 max-h-60 overflow-y-auto",
                                                        children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-3 hover:bg-gray-50 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl transition-colors",
                                                                onClick: ()=>handleServiceSelect(service),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl text-[#232061] max-sm:text-base",
                                                                    children: service.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, service.value, false, {
                                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-[24px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-base text-[#232061] font-roboto font-semibold mb-2",
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    value: formData.name,
                                                    onChange: handleInputChange,
                                                    placeholder: "Your Full Name here",
                                                    required: true,
                                                    className: "w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-[24px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-base text-[#232061] font-roboto font-semibold mb-2",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleInputChange,
                                                    placeholder: "Your Email address here",
                                                    required: true,
                                                    className: "w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-[24px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-base text-[#232061] font-roboto font-semibold mb-2",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    name: "phone",
                                                    value: formData.phone,
                                                    onChange: handleInputChange,
                                                    placeholder: "Your Phone number here",
                                                    className: "w-full border-1 border-[#232061] rounded-full px-8 py-4 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-base text-[#232061] font-roboto font-semibold mb-2",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "message",
                                                    value: formData.message,
                                                    onChange: handleInputChange,
                                                    placeholder: "Your brief message here",
                                                    rows: 6,
                                                    required: true,
                                                    className: "w-full border-1 border-[#232061] rounded-3xl px-8 py-6 text-base text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none resize-none bg-white max-sm:px-6 max-sm:py-4 max-sm:!text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 justify-end max-sm:!justify-center mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: "group px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-xl leading-[10px] max-sm:text-[15px] max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer",
                                                style: {
                                                    backgroundColor: "#232061"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-block overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal",
                                                                children: isSubmitting ? "Sending..." : "Submit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal",
                                                                children: isSubmitting ? "Sending..." : "Submit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-block overflow-hidden w-6 h-6 max-sm:!w-[18px] max-sm:!h-[18px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                className: "inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full max-sm:!w-[18px] max-sm:!h-[18px] max-sm:mb-[4px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 22L22 12M22 12L12 2M22 12L2 12",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.42857",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                className: "absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 max-sm:!w-[18px] max-sm:!h-[18px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 22L22 12M22 12L12 2M22 12L2 12",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.42857",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/about/ContactSection.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8 contact-card flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl py-[73.5px] px-12 max-sm:p-8 h-full flex justify-center flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[56px] leading-[48px] text-[#232061] mb-2 max-sm:text-[40px] font-extralight",
                                        children: "What Happens Next?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl text-[#232061] mb-16 font-semibold font-roboto max-sm:text-xl max-sm:mb-12",
                                        children: "3 easy steps"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-16 relative max-sm:space-y-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base",
                                                            children: "Step 1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-roboto flex flex-col gap-2",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl text-[#232061] font-semibold max-sm:text-base",
                                                                    children: "Review & Response"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5",
                                                                    children: "We will review your form and contact you within 1–2 business days to confirm your details."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base",
                                                            children: "Step 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-roboto flex flex-col gap-2",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl text-[#232061] font-semibold max-sm:text-base",
                                                                    children: "Consultation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5",
                                                                    children: "We'll schedule a short call to understand your needs and recommend the right accounting solutions."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-roboto text-xl text-[#232061] font-light shrink-0 max-sm:text-base",
                                                            children: "Step 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-roboto flex flex-col gap-2",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl text-[#232061] font-semibold max-sm:text-base",
                                                                    children: "Proposal & Onboarding"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-[#232061] leading-[26px] !font-roboto !font-light max-sm:text-sm max-sm:leading-5",
                                                                    children: "You'll receive a customized service proposal, and once approved, we'll begin your onboarding process right away."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/about/ContactSection.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/about/ContactSection.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/about/ContactSection.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/about/ContactSection.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/about/ContactSection.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/about/ContactSection.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/about/ContactSection.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/about/ContactSection.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "1jbgSMmdfwW/LrxqDACtaFWK0cU=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/expertise/Expertise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertiseSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const services = [
    {
        id: 1,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    },
    {
        id: 2,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    },
    {
        id: 3,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    },
    {
        id: 4,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    },
    {
        id: 5,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    },
    {
        id: 6,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    },
    {
        id: 7,
        title: "Service Heading",
        subServices: [
            "Sub-service 01",
            "Sub-service 02",
            "Sub-service 03"
        ],
        image: "/expertise-2.webp"
    }
];
function ExpertiseSection() {
    _s();
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps"
    });
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExpertiseSection.useCallback[onSelect]": ()=>{
            if (!emblaApi) return;
            setCanScrollLeft(emblaApi.canScrollPrev());
            setCanScrollRight(emblaApi.canScrollNext());
        }
    }["ExpertiseSection.useCallback[onSelect]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertiseSection.useEffect": ()=>{
            if (!emblaApi) return;
            onSelect();
            emblaApi.on("select", onSelect);
            emblaApi.on("reInit", onSelect);
        }
    }["ExpertiseSection.useEffect"], [
        emblaApi,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-c1a40a7504b4c7b9" + " " + "relative w-full py-24 bg-white overflow-hidden z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1a40a7504b4c7b9" + " " + "absolute top-12 left-12 lg:left-24 opacity-30 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/Veritias.png",
                    alt: "Decorative wing logo",
                    width: 180,
                    height: 120,
                    className: "grayscale brightness-110"
                }, void 0, false, {
                    fileName: "[project]/src/components/expertise/Expertise.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/expertise/Expertise.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1a40a7504b4c7b9" + " " + "container mx-auto max-w-7xl px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1a40a7504b4c7b9" + " " + "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    background: "linear-gradient(90deg, #232061 32.21%, #1F89A3 70.19%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent"
                                },
                                className: "jsx-c1a40a7504b4c7b9" + " " + "text-[56px] md:text-[56px] leading-[1.1] font-light tracking-tight",
                                children: [
                                    "Full",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1a40a7504b4c7b9" + " " + "text-[80px] italic font-serif font-bold italic-spectrum",
                                        children: "Spectrum"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-c1a40a7504b4c7b9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1a40a7504b4c7b9" + " " + "block mt-2",
                                        children: "of our Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1a40a7504b4c7b9" + " " + "flex justify-center gap-6 mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.scrollPrev(),
                                        disabled: !canScrollLeft,
                                        className: "jsx-c1a40a7504b4c7b9" + " " + "rounded-full border border-[#232061] border-opacity-30 w-11 h-11 transition-all hover:bg-[#232061] hover:text-white inline-flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-5 w-5 text-[#232061]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/expertise/Expertise.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.scrollNext(),
                                        disabled: !canScrollRight,
                                        className: "jsx-c1a40a7504b4c7b9" + " " + "rounded-full border border-[#232061] border-opacity-30 w-11 h-11 transition-all hover:bg-[#232061] hover:text-white inline-flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-5 w-5 text-[#232061]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/expertise/Expertise.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: emblaRef,
                        className: "jsx-c1a40a7504b4c7b9" + " " + "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1a40a7504b4c7b9" + " " + "flex -ml-8",
                            children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-8 group",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1a40a7504b4c7b9" + " " + "bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 border border-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1a40a7504b4c7b9" + " " + "relative h-64 w-full bg-[#f2f2f2] overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: service.image || "/placeholder.svg",
                                                        alt: service.title,
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1a40a7504b4c7b9" + " " + "absolute top-6 right-6 text-black/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "jsx-c1a40a7504b4c7b9",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 4L20 12L12 20M20 12H4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "jsx-c1a40a7504b4c7b9"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1a40a7504b4c7b9" + " " + "p-12 flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-c1a40a7504b4c7b9" + " " + "text-[26px] font-bold text-[#232061] mb-6",
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-c1a40a7504b4c7b9" + " " + "space-y-5 mb-12 flex-1",
                                                        children: service.subServices.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-c1a40a7504b4c7b9" + " " + "text-[#6c757d] text-[17px] font-medium leading-relaxed",
                                                                children: sub
                                                            }, i, false, {
                                                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "jsx-c1a40a7504b4c7b9" + " " + "w-full rounded-full border border-[#232061] text-[#232061] hover:bg-[#232061] hover:text-white py-6 text-sm font-bold tracking-wide transition-all flex justify-center items-center gap-3 bg-transparent",
                                                        children: [
                                                            "Learn More",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                                className: "w-5 h-5 transition-transform group-hover:translate-x-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/expertise/Expertise.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, service.id, false, {
                                    fileName: "[project]/src/components/expertise/Expertise.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/expertise/Expertise.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/expertise/Expertise.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/expertise/Expertise.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1a40a7504b4c7b9" + " " + "absolute -bottom-12 -right-12 opacity-15 pointer-events-none hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/Veritias.png",
                    alt: "Large decorative wing",
                    width: 450,
                    height: 350,
                    className: "grayscale"
                }, void 0, false, {
                    fileName: "[project]/src/components/expertise/Expertise.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/expertise/Expertise.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c1a40a7504b4c7b9",
                children: ".italic-spectrum{color:#0d3b66;font-family:serif;font-style:italic}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/expertise/Expertise.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(ExpertiseSection, "EnCeCmNQnu5CH8aekglpf4Fdwcg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ExpertiseSection;
var _c;
__turbopack_context__.k.register(_c, "ExpertiseSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/expertise/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const handleScroll = {
                "Hero.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 0);
                }
            }["Hero.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-h-screen h-screen overflow-hidden pb-[200px] sticky top-0 z-[5] max-xs:!h-[90vh] ".concat(isScrolled ? "rounded-bl-[60px] rounded-br-[60px]" : ""),
            style: {
                width: "100%",
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                willChange: "transform"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/expertise-hero.png",
                    alt: "expertise-hero",
                    width: 1440,
                    height: 100,
                    className: "w-full h-full object-cover absolute top-0 left-0 z-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/expertise/Hero.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 w-full h-full z-[1]",
                    style: {
                        background: "linear-gradient(90deg, rgba(217, 217, 217, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/expertise/Hero.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 9w-1/3 h-full z-[1]",
                    style: {
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/expertise/Hero.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-lg:pt-36",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-roboto text-[64px] max-md:text-[40px] max-sm:text-[30px] leading-[70px] text-[#232061] mb-15 max-xl:mb-3 max-sm:leading-[50px] font-light",
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/expertise/Hero.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-serif font-semibold",
                                            children: "Expertise"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/expertise/Hero.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/expertise/Hero.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#232061] text-[20px] leading-[32px] max-w-4xl max-sm:text-xs mt-5 font-normal font-roboto cloudy-text max-sm:leading-normal",
                                    children: "At Veritas Accounting and Tax Consultants, we provide more than just numbers, we deliver clarity, confidence, and strategies to help your business grow. Whether you’re a small business owner, entrepreneur, or corporate client, our dedicated team offers tailored services designed to simplify your finances and maximize results. Explore our full range of services below:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/expertise/Hero.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/expertise/Hero.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                onClick: ()=>{
                                    const faqSection = document.getElementById("faq-section");
                                    if (faqSection) {
                                        faqSection.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        });
                                    }
                                },
                                className: "px-9 py-4 rounded-full font-medium text-white transition-all flex justify-center items-center gap-3 hover:opacity-90 text-xl leading-[10px] max-sm:text-xs max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer font-serif",
                                style: {
                                    backgroundColor: "#232061"
                                },
                                children: [
                                    "Learn More",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 22L22 12M22 12L12 2M22 12L2 12",
                                            stroke: "white",
                                            "stroke-width": "1.42857",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/expertise/Hero.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/expertise/Hero.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/expertise/Hero.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/expertise/Hero.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/expertise/Hero.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/expertise/Hero.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Hero, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isNotHomeOrExpertise = pathname !== "/" && pathname !== "/expertise";
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExpertiseOpen, setIsExpertiseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileExpertiseOpen, setIsMobileExpertiseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNavbarVisible, setIsNavbarVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const leaveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const wasScrolledBeforeExpertiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = ()=>{
        setIsMenuOpen(false);
        setIsMobileExpertiseOpen(false);
    };
    const toggleMobileExpertise = ()=>{
        setIsMobileExpertiseOpen(!isMobileExpertiseOpen);
    };
    const handleExpertiseEnter = ()=>{
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }
        setIsExpertiseOpen(true);
    };
    const handleExpertiseLeave = (e)=>{
        // Check where the mouse is moving to
        const relatedTarget = e.relatedTarget;
        // If no related target (moving completely outside), close expertise
        if (!relatedTarget) {
            const delay = wasScrolledBeforeExpertiseRef.current ? 400 : 300;
            leaveTimeoutRef.current = setTimeout(()=>{
                setIsExpertiseOpen(false);
            }, delay);
            return;
        }
        // Check if moving to expertise-related areas (keep open)
        const isMovingToExpertiseArea = relatedTarget.closest(".expertise-content") || relatedTarget.closest('[href="/expertise"]');
        if (isMovingToExpertiseArea) {
            // Don't close if moving to expertise content or expertise link
            if (leaveTimeoutRef.current) {
                clearTimeout(leaveTimeoutRef.current);
                leaveTimeoutRef.current = null;
            }
            return;
        }
        // Check if moving to other nav links (close smoothly)
        const isMovingToOtherNavLink = relatedTarget.closest(".nav-link") && !relatedTarget.closest('[href="/expertise"]');
        if (isMovingToOtherNavLink) {
            // Close when moving to other links, but with a delay for smoothness
            const delay = wasScrolledBeforeExpertiseRef.current ? 300 : 200;
            if (leaveTimeoutRef.current) {
                clearTimeout(leaveTimeoutRef.current);
            }
            leaveTimeoutRef.current = setTimeout(()=>{
                setIsExpertiseOpen(false);
            }, delay);
            return;
        }
        // Close expertise when moving away from navbar area
        // Use longer delay when scrolled to allow smoother transitions
        const delay = wasScrolledBeforeExpertiseRef.current ? 400 : 300;
        leaveTimeoutRef.current = setTimeout(()=>{
            setIsExpertiseOpen(false);
        }, delay);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isExpertiseOpen) {
                // Store current scroll position BEFORE any changes
                const currentScroll = window.scrollY;
                scrollPositionRef.current = currentScroll;
                // Store whether we were scrolled before expertise opened
                wasScrolledBeforeExpertiseRef.current = isScrolled;
                // Calculate scrollbar width to prevent layout shift
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                // Apply styles immediately but sync with animation
                document.body.style.position = "fixed";
                document.body.style.top = "-".concat(currentScroll, "px");
                document.body.style.width = "100%";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = "".concat(scrollbarWidth, "px");
                document.body.style.transition = "none";
                // Prevent any smooth scrolling during the lock
                document.documentElement.style.scrollBehavior = "auto";
            } else {
                // Restore body scroll smoothly
                const scrollY = scrollPositionRef.current;
                // Use requestAnimationFrame for smoother restoration
                requestAnimationFrame({
                    "Navbar.useEffect": ()=>{
                        // Remove fixed positioning
                        document.body.style.position = "";
                        document.body.style.top = "";
                        document.body.style.width = "";
                        document.body.style.overflow = "";
                        document.body.style.paddingRight = "";
                        document.body.style.transition = "";
                        document.documentElement.style.scrollBehavior = "";
                        // Restore scroll position after layout is updated
                        requestAnimationFrame({
                            "Navbar.useEffect": ()=>{
                                window.scrollTo({
                                    top: scrollY,
                                    behavior: "auto"
                                });
                                // Reset the stored scroll state after scroll is restored
                                // Use a small delay to ensure scroll handler runs first
                                setTimeout({
                                    "Navbar.useEffect": ()=>{
                                        wasScrolledBeforeExpertiseRef.current = false;
                                    }
                                }["Navbar.useEffect"], 100);
                            }
                        }["Navbar.useEffect"]);
                    }
                }["Navbar.useEffect"]);
            }
            // Cleanup on unmount
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.position = "";
                    document.body.style.top = "";
                    document.body.style.width = "";
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = "";
                    document.body.style.transition = "";
                    document.documentElement.style.scrollBehavior = "";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isExpertiseOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    // If expertise is open, don't update isScrolled (preserve the state from before expertise opened)
                    if (isExpertiseOpen) {
                        // Keep the stored scroll state
                        setIsScrolled(wasScrolledBeforeExpertiseRef.current);
                        return;
                    }
                    // Disable scroll animations on screens below 1024px (max-lg)
                    if (window.innerWidth < 1024) {
                        const scrolled = window.scrollY > 50;
                        setIsNavbarVisible(true);
                        setIsCollapsed(false);
                        setIsScrolled(scrolled);
                        return;
                    }
                    const currentScrollY = window.scrollY;
                    const scrollDifference = currentScrollY - lastScrollYRef.current;
                    const scrolled = currentScrollY > 50;
                    setIsScrolled(scrolled);
                    // If at top, show full navbar
                    if (currentScrollY < 50) {
                        setIsNavbarVisible(true);
                        setIsCollapsed(false);
                    } else {
                        // Scrolling down - hide navbar
                        if (scrollDifference > 2) {
                            setIsNavbarVisible(false);
                        } else if (scrollDifference < -1) {
                            setIsNavbarVisible(true);
                            setIsCollapsed(true);
                        } else if (Math.abs(scrollDifference) <= 1 && currentScrollY > 50) {
                            // Keep navbar visible if already visible, or show it if it was hidden
                            if (!isNavbarVisible) {
                                setIsNavbarVisible(true);
                                setIsCollapsed(true);
                            }
                        }
                    }
                    lastScrollYRef.current = currentScrollY;
                }
            }["Navbar.useEffect.handleScroll"];
            const handleResize = {
                "Navbar.useEffect.handleResize": ()=>{
                    // Reset navbar state on resize
                    if (window.innerWidth < 1024) {
                        setIsNavbarVisible(true);
                        setIsCollapsed(false);
                    }
                    handleScroll();
                }
            }["Navbar.useEffect.handleResize"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", handleResize, {
                passive: true
            });
            handleScroll(); // Check initial scroll position
            lastScrollYRef.current = window.scrollY;
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleResize);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isExpertiseOpen
    ]);
    const expertiseItems = [
        {
            label: "Accounting",
            href: "/services#accounting"
        },
        {
            label: "Tax Services",
            href: "/services#tax"
        },
        {
            label: "Payroll Services",
            href: "/services#payroll"
        },
        {
            label: "Audit & Compliance Support",
            href: "/services#compliance"
        },
        {
            label: "Business Advisory",
            href: "/services#advisory"
        },
        {
            label: "Business Administration",
            href: "/services#administration"
        },
        {
            label: "CFO Services",
            href: "/services#cfo-services"
        }
    ];
    // Check if a nav link is active
    const isActive = (href)=>{
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };
    // Logo and social icons always visible
    const logoClassName = "transition-all duration-300 overflow-hidden w-auto opacity-100 pointer-events-auto";
    const socialLinksClassName = "max-lg:hidden flex gap-10 items-center transition-all duration-300 overflow-hidden w-auto opacity-100 pointer-events-auto";
    // No force hide classes needed
    const logoForceHideClass = "";
    const socialForceHideClass = "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-18d33d113bb50e1e" + " " + "fixed top-0 left-0 right-0 z-[100] max-lg:transition-none transition-transform duration-300 max-lg:z-[6] ".concat(isNotHomeOrExpertise ? "max-lg:relative max-lg:bg-white" : "", " ").concat(isNavbarVisible ? "translate-y-0" : "-translate-y-full max-lg:translate-y-0"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsExpertiseOpen(false),
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: "100%",
                            height: "100vh",
                            minHeight: "100vh",
                            zIndex: 999,
                            opacity: isExpertiseOpen ? 1 : 0,
                            visibility: isExpertiseOpen ? "visible" : "hidden",
                            pointerEvents: isExpertiseOpen ? "auto" : "none",
                            background: isExpertiseOpen ? "linear-gradient(135deg, rgba(35, 32, 97, 0.25) 0%, rgba(35, 32, 97, 0.2) 100%)" : "transparent",
                            backdropFilter: isExpertiseOpen ? "blur(30px) saturate(190%)" : "none",
                            WebkitBackdropFilter: isExpertiseOpen ? "blur(30px) saturate(190%)" : "none",
                            transition: isExpertiseOpen ? "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, visibility 0s linear 0.1s, backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s" : "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.4s, backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: "translateZ(0)",
                            willChange: "opacity, visibility, backdrop-filter",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                        },
                        className: "jsx-18d33d113bb50e1e" + " " + "backdrop-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-18d33d113bb50e1e" + " " + "relative navbar-container ".concat(isExpertiseOpen ? "navbar-expanded" : "", " ").concat(isScrolled && !isExpertiseOpen ? "navbar-scrolled" : "", " ").concat(isCollapsed ? "navbar-collapsed" : ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-18d33d113bb50e1e" + " " + "expertise-bg ".concat(isExpertiseOpen ? "expertise-bg-open" : "expertise-bg-closed")
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-18d33d113bb50e1e" + " " + "max-w-7xl mx-auto py-14 max-sm:pb-8 px-10 max-sm:px-6 relative z-[200] ".concat(isNotHomeOrExpertise ? "max-sm:px-4" : "max-sm:px-6"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-18d33d113bb50e1e" + " " + "flex items-center transition-all duration-300 max-lg:justify-between  ".concat(isScrolled && !isExpertiseOpen ? "justify-between" : isScrolled && isExpertiseOpen ? "justify-between" : "justify-between"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "".concat(logoClassName, " ").concat(logoForceHideClass).trim(),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-18d33d113bb50e1e" + " " + "relative w-[300px] h-[80px] max-md:w-[270px] max-md:h-[72px] max-lg:w-[250px] max-lg:h-[67px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: isExpertiseOpen ? "/logo-white.png" : "/logo.png",
                                                    alt: "logo",
                                                    width: 1000,
                                                    height: 1000,
                                                    priority: true,
                                                    className: "w-full h-full object-contain transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: "1px soliid ".concat(isExpertiseOpen ? "#FFFFFF" : "#027C99")
                                            },
                                            className: "jsx-18d33d113bb50e1e" + " " + "navbar-bg max-lg:hidden flex items-center gap-6 px-4 py-3 rounded-[50px] text-[15px] transition-all duration-300 border border-[#027C99] ".concat(isExpertiseOpen ? "text-white border-white bg-white/10" : isScrolled ? "text-[#232061] bg-white/80" : "text-[#232061] bg-[#FFFFFF4D]"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: "nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ".concat(isActive("/") ? isExpertiseOpen ? "bg-white/20 text-white" : "bg-[#027C99] text-white" : isExpertiseOpen ? "hover:bg-white/20 hover:text-white" : "hover:bg-[#B8DDE5]"),
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onMouseEnter: handleExpertiseEnter,
                                                    onMouseLeave: handleExpertiseLeave,
                                                    className: "jsx-18d33d113bb50e1e" + " " + "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/expertise",
                                                        className: "nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ".concat(isActive("/expertise") || pathname.startsWith("/services") ? isExpertiseOpen ? "bg-white/20 text-white" : "bg-[#027C99] text-white" : isExpertiseOpen ? "hover:bg-white/20 hover:text-white" : "hover:bg-[#B8DDE5]"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "flex items-center gap-2",
                                                            children: [
                                                                "Expertise",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "12",
                                                                    height: "12",
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "jsx-18d33d113bb50e1e" + " " + "-mt-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M10.5477 4.43302L11.4392 5.32537L6.58042 10.1858C6.50257 10.2641 6.40999 10.3263 6.30801 10.3687C6.20604 10.4112 6.09668 10.433 5.98622 10.433C5.87577 10.433 5.76641 10.4112 5.66443 10.3687C5.56246 10.3263 5.46988 10.2641 5.39202 10.1858L0.530762 5.32537L1.42227 4.43386L5.98496 8.99571L10.5477 4.43302Z",
                                                                        fill: isExpertiseOpen ? "#FFFFFF" : "#232061",
                                                                        className: "jsx-18d33d113bb50e1e"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/careers",
                                                    className: "nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ".concat(isActive("/careers") ? isExpertiseOpen ? "bg-white/20 text-white" : "bg-[#027C99] text-white" : isExpertiseOpen ? "hover:bg-white/20 hover:text-white" : "hover:bg-[#B8DDE5]"),
                                                    children: "Careers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/team",
                                                    className: "nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ".concat(isActive("/team") ? isExpertiseOpen ? "bg-white/20 text-white" : "bg-[#027C99] text-white" : isExpertiseOpen ? "hover:bg-white/20 hover:text-white" : "hover:bg-[#B8DDE5]"),
                                                    children: "Team"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/faq",
                                                    className: "nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ".concat(isActive("/faq") ? isExpertiseOpen ? "bg-white/20 text-white" : "bg-[#027C99] text-white" : isExpertiseOpen ? "hover:bg-white/20 hover:text-white" : "hover:bg-[#B8DDE5]"),
                                                    children: "FAQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-18d33d113bb50e1e" + " " + ("".concat(socialLinksClassName, " ").concat(socialForceHideClass).trim() || ""),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 29 30",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "jsx-18d33d113bb50e1e" + " " + "transition-colors duration-300 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19.3333 10C21.2561 10 23.1002 10.7902 24.4598 12.1967C25.8195 13.6032 26.5833 15.5109 26.5833 17.5V26.25H21.75V17.5C21.75 16.837 21.4953 16.2011 21.0421 15.7322C20.5889 15.2634 19.9742 15 19.3333 15C18.6924 15 18.0777 15.2634 17.6245 15.7322C17.1712 16.2011 16.9166 16.837 16.9166 17.5V26.25H12.0833V17.5C12.0833 15.5109 12.8471 13.6032 14.2068 12.1967C15.5664 10.7902 17.4105 10 19.3333 10Z",
                                                            stroke: isExpertiseOpen ? "#FFFFFF" : "#232061",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: "jsx-18d33d113bb50e1e"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7.24996 11.25H2.41663V26.25H7.24996V11.25Z",
                                                            stroke: isExpertiseOpen ? "#FFFFFF" : "#232061",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: "jsx-18d33d113bb50e1e"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4.83329 7.5C6.16798 7.5 7.24996 6.38071 7.24996 5C7.24996 3.61929 6.16798 2.5 4.83329 2.5C3.4986 2.5 2.41663 3.61929 2.41663 5C2.41663 6.38071 3.4986 7.5 4.83329 7.5Z",
                                                            stroke: isExpertiseOpen ? "#FFFFFF" : "#232061",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: "jsx-18d33d113bb50e1e"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 29 29",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    onClick: ()=>window.open("https://www.instagram.com/veritas_accounting/", "_blank"),
                                                    className: "jsx-18d33d113bb50e1e" + " " + "transition-colors duration-300 cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21.1458 7.85425H21.1579M8.45829 2.41675H20.5416C23.8783 2.41675 26.5833 5.12169 26.5833 8.45841V20.5417C26.5833 23.8785 23.8783 26.5834 20.5416 26.5834H8.45829C5.12157 26.5834 2.41663 23.8785 2.41663 20.5417V8.45841C2.41663 5.12169 5.12157 2.41675 8.45829 2.41675ZM19.3333 13.7388C19.4824 14.7445 19.3106 15.7715 18.8424 16.6739C18.3742 17.5763 17.6333 18.308 16.7253 18.7651C15.8172 19.2222 14.7881 19.3813 13.7844 19.2198C12.7807 19.0582 11.8534 18.5843 11.1346 17.8655C10.4157 17.1466 9.9418 16.2194 9.78029 15.2157C9.61878 14.212 9.77787 13.1829 10.2349 12.2748C10.692 11.3667 11.4238 10.6259 12.3261 10.1576C13.2285 9.6894 14.2556 9.51763 15.2612 9.66675C16.287 9.81886 17.2367 10.2968 17.9699 11.0301C18.7032 11.7634 19.1812 12.713 19.3333 13.7388Z",
                                                        stroke: isExpertiseOpen ? "#FFFFFF" : "#232061",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-18d33d113bb50e1e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-18d33d113bb50e1e" + " " + "max-lg:block hidden relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: toggleMenu,
                                                    "aria-label": "Toggle menu",
                                                    className: "jsx-18d33d113bb50e1e" + " " + "flex flex-col gap-1 py-2 px-4 z-50 relative border border-[#A6C9E2] rounded-[50px] bg-[#FFFFFF4D] cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "w-5 h-0.5 bg-[#232061] transition-all duration-300 origin-center ".concat(isMenuOpen ? "rotate-45 translate-y-[5px]" : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "w-5 h-0.5 bg-[#232061] transition-all duration-300 ".concat(isMenuOpen ? "opacity-0" : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "w-5 h-0.5 bg-[#232061] transition-all duration-300 origin-center ".concat(isMenuOpen ? "-rotate-45 -translate-y-[7px]" : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-18d33d113bb50e1e" + " " + "absolute right-0 top-full mt-2 bg-white rounded-3xl p-6 w-[280px] shadow-2xl z-50 transition-all duration-300 max-h-[420px] overflow-y-auto ".concat(isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "flex flex-col gap-4 mb-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/",
                                                                    onClick: closeMenu,
                                                                    className: "text-center font-normal py-3 px-4 rounded-[35px] text-base ".concat(isActive("/") ? "bg-[#027C99] text-white" : "text-[#232061] bg-[#F6F6F6]"),
                                                                    children: "Home"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-18d33d113bb50e1e" + " " + "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: toggleMobileExpertise,
                                                                            className: "jsx-18d33d113bb50e1e" + " " + "text-center font-normal py-3 px-4 rounded-[35px] text-base flex items-center justify-center gap-2 ".concat(isActive("/expertise") || pathname.startsWith("/services") ? "bg-[#027C99] text-white" : "text-[#232061] bg-[#F6F6F6]"),
                                                                            children: [
                                                                                "Expertise",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    className: "jsx-18d33d113bb50e1e" + " " + "w-4 h-4 transition-transform duration-300 ".concat(isMobileExpertiseOpen ? "rotate-180" : ""),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M19 9l-7 7-7-7",
                                                                                        className: "jsx-18d33d113bb50e1e"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                                                        lineNumber: 587,
                                                                                        columnNumber: 27
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                                    lineNumber: 579,
                                                                                    columnNumber: 25
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                                            lineNumber: 569,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-18d33d113bb50e1e" + " " + "transition-all duration-300 ".concat(isMobileExpertiseOpen ? "max-h-96 opacity-100 overflow-y-auto mobile-expertise-dropdown" : "max-h-0 opacity-0 overflow-hidden"),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-18d33d113bb50e1e" + " " + "flex flex-col gap-2 pl-4 pt-2",
                                                                                children: [
                                                                                    expertiseItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            href: item.href,
                                                                                            onClick: closeMenu,
                                                                                            className: "text-center text-[#232061] font-normal py-2 px-4 rounded-[25px] bg-[#E8E8E8] text-sm",
                                                                                            children: item.label
                                                                                        }, item.href, false, {
                                                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                                                            lineNumber: 604,
                                                                                            columnNumber: 29
                                                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "/expertise",
                                                                                        onClick: closeMenu,
                                                                                        className: "text-center font-medium py-2 px-4 rounded-[25px] bg-[#232061] text-white text-sm",
                                                                                        children: "View More Services"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                                                        lineNumber: 613,
                                                                                        columnNumber: 27
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/Navbar.tsx",
                                                                                lineNumber: 602,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                                            lineNumber: 595,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/careers",
                                                                    onClick: closeMenu,
                                                                    className: "text-center font-normal py-3 px-4 rounded-[35px] text-base ".concat(isActive("/careers") ? "bg-[#027C99] text-white" : "text-[#232061] bg-[#F6F6F6]"),
                                                                    children: "Careers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/team",
                                                                    onClick: closeMenu,
                                                                    className: "text-center font-normal py-3 px-4 rounded-[35px] text-base ".concat(isActive("/team") ? "bg-[#027C99] text-white" : "text-[#232061] bg-[#F6F6F6]"),
                                                                    children: "Team"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/faq",
                                                                    onClick: closeMenu,
                                                                    className: "text-center font-normal py-3 px-4 rounded-[35px] text-base ".concat(isActive("/faq") ? "bg-[#027C99] text-white" : "text-[#232061] bg-[#F6F6F6]"),
                                                                    children: "FAQ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "flex gap-6 items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "linkedin.svg",
                                                                    alt: "linkedin",
                                                                    width: 20,
                                                                    height: 20,
                                                                    className: "cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "instagram.svg",
                                                                    alt: "instagram",
                                                                    width: 20,
                                                                    height: 20,
                                                                    className: "cursor-pointer",
                                                                    onClick: ()=>window.open("https://www.instagram.com/veritas_accounting/", "_blank")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            (isMounted || isExpertiseOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onMouseEnter: handleExpertiseEnter,
                                onMouseLeave: handleExpertiseLeave,
                                style: !isExpertiseOpen ? {
                                    visibility: "hidden",
                                    maxHeight: "0",
                                    height: "0",
                                    opacity: "0"
                                } : undefined,
                                className: "jsx-18d33d113bb50e1e" + " " + "expertise-content max-lg:hidden ".concat(isExpertiseOpen ? "expertise-open" : "expertise-closed", " ").concat(!isMounted ? "expertise-no-transition" : ""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-18d33d113bb50e1e" + " " + "max-w-7xl mx-auto px-4 max-sm:px-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-18d33d113bb50e1e" + " " + "border-t border-white/20 pt-8 pb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-18d33d113bb50e1e" + " " + "grid grid-cols-4 gap-4 mb-6",
                                                children: expertiseItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "group/item dropdown-item",
                                                        "data-index": index,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-18d33d113bb50e1e" + " " + "relative overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-18d33d113bb50e1e" + " " + "relative h-14 flex items-center mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-18d33d113bb50e1e" + " " + "inline-block text-lg font-medium transition-all duration-500 ease-out text-white group-hover/item:scale-105",
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                                        lineNumber: 715,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 714,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-18d33d113bb50e1e" + " " + "text-sm text-white/60 mt-2 transition-all duration-500 ease-out group-hover/item:text-white/90",
                                                                    children: [
                                                                        "Explore our ",
                                                                        item.label.toLowerCase(),
                                                                        " services"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, item.href, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 705,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-18d33d113bb50e1e" + " " + "flex justify-center pt-4 border-t border-white/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/expertise",
                                                    className: "view-more-btn group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-18d33d113bb50e1e",
                                                            children: "View More Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-18d33d113bb50e1e" + " " + "w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                                className: "jsx-18d33d113bb50e1e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Navbar.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 726,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 704,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 703,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 686,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "18d33d113bb50e1e",
                children: '@supports (-webkit-touch-callout:none){div[class*=sticky].jsx-18d33d113bb50e1e{perspective:1000px;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important;will-change:transform!important;transform:translateZ(0)!important}}.navbar-container.jsx-18d33d113bb50e1e{z-index:10000;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:box-shadow;isolation:isolate;height:auto;min-height:auto;transition:box-shadow .6s cubic-bezier(.16,1,.3,1),background-color .3s ease-in-out;position:relative;overflow:visible;transform:translateZ(0)}.navbar-expanded.jsx-18d33d113bb50e1e{transform:translateZ(0)}.navbar-collapsed.jsx-18d33d113bb50e1e .navbar-bg.jsx-18d33d113bb50e1e{background:#fff}.navbar-expanded.navbar-collapsed.jsx-18d33d113bb50e1e .navbar-bg.jsx-18d33d113bb50e1e{color:#fff!important;background:rgba(255,255,255,.1)!important;border-color:#fff!important}.navbar-expanded.navbar-collapsed.jsx-18d33d113bb50e1e .navbar-bg.jsx-18d33d113bb50e1e .nav-link.jsx-18d33d113bb50e1e,.navbar-expanded.navbar-collapsed.jsx-18d33d113bb50e1e .navbar-bg.jsx-18d33d113bb50e1e .nav-link.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e{color:#fff!important}.expertise-bg.jsx-18d33d113bb50e1e{z-index:10;clip-path:polygon(0 0,100% 0,100% 0,0 0);will-change:clip-path,height;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#232061;height:100%;transition:clip-path .6s cubic-bezier(.16,1,.3,1),height .6s cubic-bezier(.16,1,.3,1);position:absolute;top:-20px;left:0;right:0;transform:translateZ(0)}.expertise-bg-open.jsx-18d33d113bb50e1e{clip-path:polygon(0 0,100% 0,100% 100%,0 100%);height:calc(100% + 500px)}.expertise-bg-closed.jsx-18d33d113bb50e1e{clip-path:polygon(0 0,100% 0,100% 0,0 0);height:100%;transition:clip-path .5s cubic-bezier(.4,0,.2,1),height .5s cubic-bezier(.4,0,.2,1)}.expertise-content.jsx-18d33d113bb50e1e{opacity:0;visibility:hidden;will-change:max-height,opacity,transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:10001;background-color:transparent;width:100%;height:0;max-height:0;margin:0;padding:0;transition:max-height .6s cubic-bezier(.16,1,.3,1),opacity .6s cubic-bezier(.16,1,.3,1) 80ms,transform .6s cubic-bezier(.16,1,.3,1) 80ms,visibility 0s linear .6s;position:absolute;top:100%;left:0;right:0;overflow:hidden;transform:translateY(-15px)}.expertise-content.jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e{background-color:transparent}.expertise-open.jsx-18d33d113bb50e1e{opacity:1!important;pointer-events:auto!important;visibility:visible!important;height:auto!important;max-height:500px!important;transition:max-height .6s cubic-bezier(.16,1,.3,1),opacity .6s cubic-bezier(.16,1,.3,1) 80ms,transform .6s cubic-bezier(.16,1,.3,1) 80ms,visibility linear!important;transform:translate(0)!important}.expertise-closed.jsx-18d33d113bb50e1e{opacity:0;pointer-events:none;visibility:hidden;transition:max-height .5s cubic-bezier(.4,0,.2,1),opacity .5s cubic-bezier(.4,0,.2,1),transform .5s cubic-bezier(.4,0,.2,1);transform:translateY(-15px);height:0!important;max-height:0!important}.expertise-no-transition.jsx-18d33d113bb50e1e{transition:none!important}.dropdown-item.jsx-18d33d113bb50e1e{opacity:0}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item.jsx-18d33d113bb50e1e{opacity:1}.dropdown-item.jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e{opacity:0;will-change:opacity,transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateY(12px)}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item[data-index="0"].jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e{opacity:1;transition:opacity .5s cubic-bezier(.16,1,.3,1) .12s,transform .5s cubic-bezier(.16,1,.3,1) .12s;transform:translate(0)}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item[data-index="1"].jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e{opacity:1;transition:opacity .5s cubic-bezier(.16,1,.3,1) .18s,transform .5s cubic-bezier(.16,1,.3,1) .18s;transform:translate(0)}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item[data-index="2"].jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e{opacity:1;transition:opacity .5s cubic-bezier(.16,1,.3,1) .24s,transform .5s cubic-bezier(.16,1,.3,1) .24s;transform:translate(0)}.dropdown-item.jsx-18d33d113bb50e1e p.jsx-18d33d113bb50e1e{opacity:0;will-change:opacity,transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateY(12px)}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item[data-index="0"].jsx-18d33d113bb50e1e p.jsx-18d33d113bb50e1e{opacity:1;transition:opacity .5s cubic-bezier(.16,1,.3,1) .18s,transform .5s cubic-bezier(.16,1,.3,1) .18s;transform:translate(0)}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item[data-index="1"].jsx-18d33d113bb50e1e p.jsx-18d33d113bb50e1e{opacity:1;transition:opacity .5s cubic-bezier(.16,1,.3,1) .24s,transform .5s cubic-bezier(.16,1,.3,1) .24s;transform:translate(0)}.expertise-open.jsx-18d33d113bb50e1e .dropdown-item[data-index="2"].jsx-18d33d113bb50e1e p.jsx-18d33d113bb50e1e{opacity:1;transition:opacity .5s cubic-bezier(.16,1,.3,1) .3s,transform .5s cubic-bezier(.16,1,.3,1) .3s;transform:translate(0)}.dropdown-item.jsx-18d33d113bb50e1e{cursor:pointer;border-radius:.75rem;padding:1.25rem 1rem;transition:all .4s cubic-bezier(.25,.46,.45,.94);position:relative}.dropdown-item.jsx-18d33d113bb50e1e:before{content:"";opacity:0;-webkit-backdrop-filter:blur(10px);background:rgba(255,255,255,.08);border-radius:.75rem;transition:opacity .4s cubic-bezier(.25,.46,.45,.94);position:absolute;top:0;bottom:0;left:0;right:0}.dropdown-item.jsx-18d33d113bb50e1e:hover:before{opacity:1}.dropdown-item.jsx-18d33d113bb50e1e:hover{transform:translateY(-1px)scale(1.01)}.dropdown-item.jsx-18d33d113bb50e1e:active{transition:all .15s ease-out;transform:translateY(0)scale(.99)}.dropdown-item.jsx-18d33d113bb50e1e span.jsx-18d33d113bb50e1e{filter:brightness();transition:transform .4s cubic-bezier(.25,.46,.45,.94),filter .4s cubic-bezier(.25,.46,.45,.94);display:inline-block}.dropdown-item.jsx-18d33d113bb50e1e:hover span.jsx-18d33d113bb50e1e{filter:brightness(1.15)}.dropdown-item.jsx-18d33d113bb50e1e p.jsx-18d33d113bb50e1e{filter:brightness();transition:opacity .4s cubic-bezier(.25,.46,.45,.94),filter .4s cubic-bezier(.25,.46,.45,.94)}.dropdown-item.jsx-18d33d113bb50e1e:hover p.jsx-18d33d113bb50e1e{filter:brightness(1.2)}.view-more-btn.jsx-18d33d113bb50e1e{opacity:0;transform:translateY(10px)}.expertise-open.jsx-18d33d113bb50e1e .view-more-btn.jsx-18d33d113bb50e1e{animation:.5s cubic-bezier(.16,1,.3,1) .4s forwards fadeInUp}.expertise-closed.jsx-18d33d113bb50e1e .view-more-btn.jsx-18d33d113bb50e1e{opacity:0;animation:none;transform:translateY(10px)}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}.expertise-closed.jsx-18d33d113bb50e1e .dropdown-item.jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e,.expertise-closed.jsx-18d33d113bb50e1e .dropdown-item.jsx-18d33d113bb50e1e p.jsx-18d33d113bb50e1e{opacity:0;transition:opacity .4s cubic-bezier(.4,0,.2,1),transform .4s cubic-bezier(.4,0,.2,1);transform:translateY(12px)}.nav-link.jsx-18d33d113bb50e1e{will-change:transform,background-color,color;z-index:1;color:inherit;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:color .25s ease-in-out,background-color .25s ease-in-out,transform .25s ease-in-out;position:relative;overflow:visible!important}.navbar-expanded.jsx-18d33d113bb50e1e .nav-link.jsx-18d33d113bb50e1e,.navbar-expanded.jsx-18d33d113bb50e1e .nav-link.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e{color:#fff!important}.nav-link.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e{display:block;position:relative;overflow:hidden!important}.nav-link.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e{white-space:nowrap;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:opacity,transform;display:block;transform:translateZ(0);overflow:visible!important}.nav-link.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e:first-child,.nav-link.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e>span.jsx-18d33d113bb50e1e:last-child{overflow:visible!important}.nav-link.jsx-18d33d113bb50e1e:hover{z-index:10;transform:scale(1.03)translateZ(0)}.navbar-container.jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e>div.jsx-18d33d113bb50e1e:first-of-type{overflow:visible!important}.backdrop-overlay.jsx-18d33d113bb50e1e{-webkit-backdrop-filter:blur(30px)saturate(190%);z-index:999;opacity:0;visibility:hidden;pointer-events:none;will-change:opacity,visibility;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:linear-gradient(135deg,rgba(35,32,97,.2) 0%,rgba(35,32,97,.15) 100%);width:100%;height:100vh;transition:opacity .6s cubic-bezier(.16,1,.3,1),visibility .6s cubic-bezier(.16,1,.3,1);position:fixed;top:0;left:0;right:0;transform:translateZ(0)}.backdrop-open.jsx-18d33d113bb50e1e{z-index:999;transition:opacity .6s cubic-bezier(.16,1,.3,1),visibility .6s cubic-bezier(.16,1,.3,1);opacity:1!important;visibility:visible!important;pointer-events:auto!important}.backdrop-closed.jsx-18d33d113bb50e1e{transition:opacity .5s cubic-bezier(.4,0,.2,1),visibility .5s cubic-bezier(.4,0,.2,1);opacity:0!important;visibility:hidden!important;pointer-events:none!important}.mobile-expertise-dropdown.jsx-18d33d113bb50e1e{scrollbar-width:thin;scrollbar-color:rgba(35,32,97,.3) transparent}.mobile-expertise-dropdown.jsx-18d33d113bb50e1e::-webkit-scrollbar{width:6px}.mobile-expertise-dropdown.jsx-18d33d113bb50e1e::-webkit-scrollbar-track{background:0 0;border-radius:10px}.mobile-expertise-dropdown.jsx-18d33d113bb50e1e::-webkit-scrollbar-thumb{background-color:rgba(35,32,97,.3);border-radius:10px}.mobile-expertise-dropdown.jsx-18d33d113bb50e1e.jsx-18d33d113bb50e1e::-webkit-scrollbar-thumb:hover{background-color:rgba(35,32,97,.5)}.force-hide-logo.jsx-18d33d113bb50e1e,.force-hide-social.jsx-18d33d113bb50e1e{visibility:hidden!important;opacity:0!important;pointer-events:none!important;width:0!important;display:none!important;overflow:hidden!important}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "lNrlClE2aoqpHkeuQ24OArsHsG4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_546bbfec._.js.map