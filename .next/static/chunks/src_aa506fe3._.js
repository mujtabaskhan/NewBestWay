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
"[project]/src/components/Difference.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TheDifference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimateOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function TheDifference() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white px-6 py-20 relative z-10 max-sm:pt-32",
        style: {
            // fontFamily: "Roboto Serif, serif",
            width: "100%",
            minHeight: "auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-center text-[56px] max-sm:text-[40px] max-lg:text-[48px] mb-12 max-sm:mb-10 font-extralight text-[#232061] overflow-visible",
                        children: [
                            "The",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif font-semibold italic inline-block pr-2",
                                style: {
                                    background: "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent"
                                },
                                children: [
                                    " ",
                                    "Difference"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Difference.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block -mt-3 text-[#232061]",
                                children: " We Deliver"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Difference.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Difference.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Difference.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/Veritias.png",
                    alt: "Veritas-Logo",
                    width: 1000,
                    height: 1000,
                    className: "absolute top-0 left-20 z-1 h-[145px] w-[145px] max-sm:left-[unset] max-sm:right-0 max-sm:-top-32"
                }, void 0, false, {
                    fileName: "[project]/src/components/Difference.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-sm:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "difference-card flex items-center justify-start flex-col gap-[16px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M38.3333 21.6666L33.2299 21.6683C32.8586 24.6053 31.5209 27.3354 29.4274 29.4286C27.3339 31.5217 24.6037 32.8591 21.6666 33.23V38.3333H18.3333L18.3316 33.23C15.3948 32.8587 12.6649 31.5212 10.5718 29.4281C8.47865 27.3349 7.14116 24.6051 6.76992 21.6683L1.66659 21.6666V18.3333H6.76992C7.14082 15.3962 8.47816 12.666 10.5713 10.5725C12.6645 8.47901 15.3946 7.14128 18.3316 6.76996L18.3333 1.66663L21.6666 1.66663V6.76996C24.6039 7.14093 27.3344 8.47852 29.4279 10.572C31.5214 12.6655 32.8589 15.396 33.2299 18.3333H38.3333V21.6666ZM29.9999 20C29.9999 17.3478 28.9464 14.8043 27.071 12.9289C25.1956 11.0535 22.6521 9.99996 19.9999 9.99996C17.3478 9.99996 14.8042 11.0535 12.9289 12.9289C11.0535 14.8043 9.99992 17.3478 9.99992 20C9.99992 22.6521 11.0535 25.1957 12.9289 27.071C14.8042 28.9464 17.3478 30 19.9999 30C22.6521 30 25.1956 28.9464 27.071 27.071C28.9464 25.1957 29.9999 22.6521 29.9999 20ZM23.3333 20C23.3333 20.884 22.9821 21.7319 22.3569 22.357C21.7318 22.9821 20.884 23.3333 19.9999 23.3333C19.1159 23.3333 18.268 22.9821 17.6429 22.357C17.0178 21.7319 16.6666 20.884 16.6666 20C16.6666 19.1159 17.0178 18.2681 17.6429 17.6429C18.268 17.0178 19.1159 16.6666 19.9999 16.6666C20.884 16.6666 21.7318 17.0178 22.3569 17.6429C22.9821 18.2681 23.3333 19.1159 23.3333 20Z",
                                        fill: "#232061"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Difference.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-roboto text-[18px] max-lg:text-[16px] max-sm:text-base text-[#232061] font-bold text-center max-md:leading-[40px]",
                                    children: "Precision You Can Count On"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-flex text-base max-sm:text-sm text-[#232061] text-center leading-[30px]",
                                    children: "Every number tells a story, we make sure yours is accurate, compliant, and clear. Our meticulous attention to detail ensures your books, taxes, and audits are done right every time."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Difference.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "difference-card flex items-center justify-start flex-col gap-[16px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.5 22.5C11.2638 22.5 10.0555 22.8666 9.02767 23.5533C7.99986 24.2401 7.19878 25.2162 6.72573 26.3582C6.25269 27.5003 6.12892 28.7569 6.37007 29.9693C6.61123 31.1817 7.20649 32.2953 8.08056 33.1694C8.95464 34.0435 10.0683 34.6388 11.2807 34.8799C12.493 35.1211 13.7497 34.9973 14.8918 34.5242C16.0338 34.0512 17.0099 33.2501 17.6967 32.2223C18.3834 31.1945 18.75 29.9861 18.75 28.75C18.75 27.0924 18.0915 25.5027 16.9194 24.3306C15.7473 23.1585 14.1576 22.5 12.5 22.5ZM12.5 31.25C12.0055 31.25 11.5222 31.1034 11.1111 30.8287C10.6999 30.554 10.3795 30.1635 10.1903 29.7067C10.0011 29.2499 9.95155 28.7472 10.048 28.2623C10.1445 27.7773 10.3826 27.3319 10.7322 26.9822C11.0818 26.6326 11.5273 26.3945 12.0123 26.298C12.4972 26.2016 12.9999 26.2511 13.4567 26.4403C13.9135 26.6295 14.304 26.95 14.5787 27.3611C14.8534 27.7722 15 28.2555 15 28.75C15 29.413 14.7366 30.0489 14.2677 30.5178C13.7989 30.9866 13.163 31.25 12.5 31.25ZM7.49998 20C7.12893 20.0003 6.76613 19.8905 6.45751 19.6845C6.1489 19.4785 5.90835 19.1855 5.76631 18.8427C5.62428 18.4999 5.58714 18.1227 5.65961 17.7588C5.73208 17.3949 5.9109 17.0607 6.17342 16.7984L7.96873 15L6.17342 13.2016C5.82118 12.8493 5.62329 12.3716 5.62329 11.8734C5.62329 11.3753 5.82118 10.8976 6.17342 10.5453C6.52566 10.1931 7.0034 9.99519 7.50154 9.99518C7.99969 9.99518 8.47743 10.1931 8.82967 10.5453L10.625 12.3438L12.4234 10.5484C12.7757 10.1962 13.2534 9.99831 13.7515 9.99831C14.2497 9.99831 14.7274 10.1962 15.0797 10.5484C15.4319 10.9007 15.6298 11.3784 15.6298 11.8766C15.6298 12.3747 15.4319 12.8524 15.0797 13.2047L13.2812 15L15.0812 16.7984C15.4335 17.1507 15.6314 17.6284 15.6314 18.1266C15.6314 18.6247 15.4335 19.1024 15.0812 19.4547C14.729 19.8069 14.2512 20.0048 13.7531 20.0048C13.255 20.0048 12.7772 19.8069 12.425 19.4547L10.625 17.6562L8.82654 19.4516C8.65229 19.6256 8.44544 19.7637 8.21782 19.8578C7.99021 19.9519 7.74628 20.0002 7.49998 20ZM36.3265 31.7984C36.6788 32.1507 36.8767 32.6284 36.8767 33.1266C36.8767 33.6247 36.6788 34.1024 36.3265 34.4547C35.9743 34.8069 35.4966 35.0048 34.9984 35.0048C34.5003 35.0048 34.0225 34.8069 33.6703 34.4547L31.875 32.6562L30.0765 34.4563C29.7243 34.8085 29.2466 35.0064 28.7484 35.0064C28.2503 35.0064 27.7725 34.8085 27.4203 34.4563C27.0681 34.104 26.8702 33.6263 26.8702 33.1281C26.8702 32.63 27.0681 32.1522 27.4203 31.8L29.2187 30L27.4187 28.2016C27.0665 27.8493 26.8686 27.3716 26.8686 26.8734C26.8686 26.3753 27.0665 25.8976 27.4187 25.5453C27.771 25.1931 28.2487 24.9952 28.7469 24.9952C29.245 24.9952 29.7227 25.1931 30.075 25.5453L31.875 27.3438L33.6734 25.5437C34.0257 25.1915 34.5034 24.9936 35.0015 24.9936C35.4997 24.9936 35.9774 25.1915 36.3297 25.5437C36.6819 25.896 36.8798 26.3737 36.8798 26.8719C36.8798 27.37 36.6819 27.8478 36.3297 28.2L34.5312 30L36.3265 31.7984ZM29.5453 17.3266C28.7312 20.9203 25.9 24.1281 22.5 25.3297C22.2678 25.4118 22.0217 25.4473 21.7758 25.4343C21.5299 25.4213 21.289 25.3599 21.0668 25.2538C20.618 25.0395 20.2728 24.6556 20.107 24.1867C19.9413 23.7178 19.9685 23.2023 20.1829 22.7535C20.3972 22.3047 20.7811 21.9595 21.25 21.7937C23.4484 21.0125 25.3547 18.8391 25.8859 16.4969C26.2562 14.8625 25.9484 13.2406 24.9984 11.725V13.1313C24.9984 13.6285 24.8009 14.1054 24.4492 14.4571C24.0976 14.8087 23.6207 15.0063 23.1234 15.0063C22.6261 15.0063 22.1492 14.8087 21.7976 14.4571C21.446 14.1054 21.2484 13.6285 21.2484 13.1313V6.875C21.2484 6.37772 21.446 5.90081 21.7976 5.54917C22.1492 5.19754 22.6261 5 23.1234 5H29.3734C29.8707 5 30.3476 5.19754 30.6992 5.54917C31.0509 5.90081 31.2484 6.37772 31.2484 6.875C31.2484 7.37228 31.0509 7.84919 30.6992 8.20083C30.3476 8.55246 29.8707 8.75 29.3734 8.75H27.5C29.4953 11.3453 30.2219 14.3375 29.5453 17.3266Z",
                                        fill: "#232061"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Difference.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-roboto text-[18px] max-lg:text-[16px] max-sm:text-[20px] text-[#232061] font-bold text-center max-md:leading-[40px]",
                                    children: "Strategic Insight, Not Just Numbers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-flex text-base max-sm:text-[15px] text-[#232061] text-center leading-[30px]",
                                    children: "We go beyond bookkeeping. Our team translates financial data into actionable strategies that help you make confident business decisions, improve cash flow, and plan for sustainable growth."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Difference.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "difference-card flex items-center justify-start flex-col gap-[16px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 40 40",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.3333 28.3333L21.6666 31.6666C21.9949 31.9949 22.3846 32.2554 22.8136 32.433C23.2425 32.6107 23.7023 32.7022 24.1666 32.7022C24.6309 32.7022 25.0906 32.6107 25.5196 32.433C25.9485 32.2554 26.3383 31.9949 26.6666 31.6666C26.9949 31.3383 27.2553 30.9486 27.433 30.5196C27.6107 30.0907 27.7021 29.6309 27.7021 29.1666C27.7021 28.7023 27.6107 28.2426 27.433 27.8136C27.2553 27.3847 26.9949 26.9949 26.6666 26.6666",
                                            stroke: "#232061",
                                            strokeWidth: "3.33333",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Difference.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M23.3332 23.3333L27.4999 27.5C28.1629 28.163 29.0622 28.5355 29.9999 28.5355C30.9376 28.5355 31.8368 28.163 32.4999 27.5C33.1629 26.8369 33.5354 25.9377 33.5354 25C33.5354 24.0623 33.1629 23.163 32.4999 22.5L26.0332 16.0333C25.0957 15.097 23.8249 14.5711 22.4999 14.5711C21.1749 14.5711 19.9041 15.097 18.9666 16.0333L17.4999 17.5C16.8368 18.163 15.9376 18.5355 14.9999 18.5355C14.0622 18.5355 13.1629 18.163 12.4999 17.5C11.8368 16.8369 11.4644 15.9377 11.4644 15C11.4644 14.0623 11.8368 13.163 12.4999 12.5L17.1832 7.81665C18.7036 6.30023 20.6864 5.33424 22.8176 5.07161C24.9489 4.80897 27.1068 5.2647 28.9499 6.36665L29.7332 6.83332C30.4429 7.26163 31.2866 7.41018 32.0999 7.24998L34.9999 6.66665",
                                            stroke: "#232061",
                                            strokeWidth: "3.33333",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Difference.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M34.9999 5L36.6666 23.3333H33.3333M4.99992 5L3.33325 23.3333L14.1666 34.1667C14.8296 34.8297 15.7289 35.2022 16.6666 35.2022C17.6043 35.2022 18.5035 34.8297 19.1666 34.1667C19.8296 33.5036 20.2021 32.6043 20.2021 31.6667C20.2021 30.729 19.8296 29.8297 19.1666 29.1667M4.99992 6.66667H18.3333",
                                            stroke: "#232061",
                                            strokeWidth: "3.33333",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Difference.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-roboto text-[18px] max-lg:text-[16px] max-sm:text-[20px] text-[#232061] font-bold text-center max-md:leading-[40px]",
                                    children: "Trusted Partners for Your Success"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-flex text-base max-sm:text-[15px] text-[#232061] text-center leading-[30px]",
                                    children: "From startups to established enterprises, businesses across Canada trust us for dependable, transparent, and personalized service. We treat your business like our own, with honesty, clarity, and accountability."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Difference.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Difference.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Difference.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Difference.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Difference.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = TheDifference;
var _c;
__turbopack_context__.k.register(_c, "TheDifference");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
                    src: "/hero-1.jpg",
                    alt: "hero-hero",
                    width: 1440,
                    height: 100,
                    className: "w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px] block max-sm:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/hero-1.jpg",
                    alt: "hero-hero",
                    width: 1440,
                    height: 100,
                    className: "w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px] hidden max-sm:block"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-[1] bg-black/30"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex items-center h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-sm:pt-64 max-xs:-mt-[20px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full text-[#ffffff] font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[20px] max-sm:text-base font-roboto font-semibold mb-4",
                                children: "Welcome to"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[70px] max-lg:text-[55px] max-md:text-[50px] max-sm:text-[40px] leading-[70px] mb-6 font-semibold font-serif max-sm:leading-[40px]",
                                children: [
                                    "NewBestway ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 58,
                                        columnNumber: 26
                                    }, this),
                                    " Accounting"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-10 max-xs:mt-16 w-full max-sm:flex-col max-sm:items-start max-sm:gap-6 max-sm:mt-0 flex-wrap gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-8 max-sm:gap-2 font-roboto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl",
                                                        style: {
                                                            color: "#6be9c5",
                                                            fontWeight: 100
                                                        },
                                                        children: "("
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mx-4  text-[#6be9c5] font-normal pt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[30px] max-sm:text-base leading-[40px] max-sm:leading-normal",
                                                                children: "Simplifying"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[30px] max-sm:text-base leading-[40px] max-sm:leading-normal",
                                                                children: "Numbers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl",
                                                        style: {
                                                            color: "#6be9c5",
                                                            fontWeight: 100
                                                        },
                                                        children: ")"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[32px] max-sm:text-[18px] leading-[40px] max-sm:leading-normal font-extrabold pt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#fff"
                                                        },
                                                        children: "Maximizing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#fff"
                                                        },
                                                        children: "Results"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const contactSection = document.getElementById("contact-section");
                                                if (contactSection) {
                                                    contactSection.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start"
                                                    });
                                                }
                                            },
                                            className: "group px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-base leading-[10px] max-sm:text-[15px] max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer",
                                            style: {
                                                backgroundColor: "#232061"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-block overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal",
                                                            children: "Talk to an Expert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Hero.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal",
                                                            children: "Talk to an Expert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Hero.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 109,
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
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Hero.tsx",
                                                            lineNumber: 118,
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
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Hero.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 19,
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
"[project]/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function ServicesSection() {
    const servicesRow1 = [
        {
            name: "Accounting",
            href: "/services#accounting"
        },
        {
            name: "Tax",
            href: "/services#tax"
        },
        {
            name: "Payroll",
            href: "/services#payroll"
        },
        {
            name: "Compliance",
            href: "/services#compliance"
        }
    ];
    const servicesRow2 = [
        {
            name: "Advisory",
            href: "/services#advisory"
        },
        {
            name: "CFO Services",
            href: "/services#cfo-services"
        },
        {
            name: "See All",
            href: "/expertise"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white py-15 px-4 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-20 rounded-tl-[60px] rounded-tr-[60px] -mt-14 relative z-[6] max-sm:px-10",
        style: {
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-3xl mx-auto mb-12 max-sm:mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-2xl font-roboto leading-relaxed font-normal text-[#232061]",
                        children: [
                            "Helping businesses grow with integrity, clarity, precision,",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "max-sm:hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            " and proactive financial guidance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/Veritias.png",
                    alt: "Veritas-Logo",
                    width: 1000,
                    height: 1000,
                    className: "absolute top-0 right-20 z-1 h-[145px] w-[145px] rotate-45 max-sm:right-0 max-sm:-top-32"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4 mb-4",
                    children: servicesRow1.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: service.href,
                            className: "px-8 py-3 rounded-full text-[20px] max-sm:text-[15px] max-sm:px-6 max-sm:py-2 font-semibold bg-[#B8DDE5] text-[#232061] hover:bg-[#D0E3EA] transition-all duration-300 cursor-pointer group flex items-center hover:gap-2 gap-0",
                            children: [
                                service.name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "opacity-0 w-0 -translate-x-2 overflow-hidden group-hover:opacity-100 group-hover:w-3 group-hover:translate-x-0 transition-all duration-300 ease-out",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0.00011249 10.4935L1.41433 11.9077L9.89961 3.42239V11.2006H11.9078V-4.90338e-06H0.707219V2.00818H8.48539L0.00011249 10.4935Z",
                                        fill: "#232061"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, service.name, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4",
                    children: servicesRow2.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: service.href,
                            className: "px-8 py-3 rounded-full text-[20px] max-sm:text-[15px] max-sm:px-6 max-sm:py-2 font-semibold bg-[#E1EDF2] text-[#232061] hover:bg-[#D0E3EA] transition-all duration-300 cursor-pointer group flex items-center hover:gap-2 gap-0 ".concat(service.name === "See All" ? "group" : ""),
                            style: service.name === "See All" ? {
                                backgroundColor: "transparent",
                                color: "#232061",
                                border: "2px solid #232061"
                            } : {
                                backgroundColor: "#B8DDE5",
                                color: "#232061"
                            },
                            children: service.name === "See All" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-block overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full leading-normal",
                                                children: "See All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 leading-normal",
                                                children: "See All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-block w-6 h-6 max-sm:w-[18px] max-sm:h-[18px] overflow-visible",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full mb-2 ml-1 shrink-0 max-sm:h-[18px] max-sm:w-[18px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 22L22 12M22 12L12 2M22 12L2 12",
                                                    stroke: "#232061",
                                                    strokeWidth: "1.42857",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "absolute inset-0 inline-block transition-all duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 max-sm:w-[18px] max-sm:h-[18px] max-sm:mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 22L22 12M22 12L12 2M22 12L2 12",
                                                    stroke: "#232061",
                                                    strokeWidth: "1.42857",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    service.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 12 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "opacity-0 w-0 -translate-x-2 overflow-hidden group-hover:opacity-100 group-hover:w-3 group-hover:translate-x-0 transition-all duration-300 ease-out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0.00011249 10.4935L1.41433 11.9077L9.89961 3.42239V11.2006H11.9078V-4.90338e-06H0.707219V2.00818H8.48539L0.00011249 10.4935Z",
                                            fill: "#232061"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, service.name, false, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ServicesSection;
const __TURBOPACK__default__export__ = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
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
"[project]/src/components/MeetFounderHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeetFounderHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimateOnScroll.tsx [app-client] (ecmascript)");
;
;
;
function MeetFounderHome() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white py-[160px] max-xl:py-44 max-lg:py-36 max-md:py-28 max-sm:!py-20 relative z-[6]",
        style: {
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-14 max-sm:px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center max-lg:items-start gap-14 max-xl:gap-10 max-sm:!gap-6 max-sm:flex-col max-sm:text-center max-lg:flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-lg:block hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "!font-roboto text-[64px] !font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[64px] max-sm:!leading-[50px] overflow-visible text-left h-max",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold italic max-sm:block text-transparent font-serif pr-2",
                                            style: {
                                                background: "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                color: "transparent"
                                            },
                                            children: "Letter"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MeetFounderHome.tsx",
                                            lineNumber: 15,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/MeetFounderHome.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MeetFounderHome.tsx",
                                    lineNumber: 14,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "max-sm:-mt-10 font-extralight text-[64px] max-sm:text-[56px] text-[#232061] max-sm:text-left max-sm:leading-[60px]",
                                    children: [
                                        " ",
                                        "from the Founder"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MeetFounderHome.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MeetFounderHome.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Omair.webp",
                        alt: "Founder",
                        width: 500,
                        height: 800,
                        className: "w-[400px] h-[600px] object-cover max-sm:!w-[369px] max-sm:!h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[32px] max-sm:gap-6 max-sm:items-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-lg:hidden block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "!font-roboto text-[64px] !font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[15px] overflow-visible",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold italic max-sm:block max-sm:!not-italic text-transparent font-serif pr-2",
                                                    style: {
                                                        background: "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
                                                        backgroundClip: "text",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        color: "transparent"
                                                    },
                                                    children: "Letter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MeetFounderHome.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/MeetFounderHome.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MeetFounderHome.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-extralight text-[64px] text-[#232061] max-sm:text-base max-sm:text-center",
                                            children: [
                                                " ",
                                                "from the Founder"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MeetFounderHome.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MeetFounderHome.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MeetFounderHome.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[#232061] leading-[35px] font-flex max-sm:leading-6 max-sm:text-left",
                                children: [
                                    "When I founded Veritas Accounting, I did so with a single conviction: that financial clarity is the heartbeat of every successful business.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    " The name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "!font-black",
                                        children: "Veritas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                                        lineNumber: 77,
                                        columnNumber: 31
                                    }, this),
                                    "—meaning 'truth'—is more than just a title for us; it is our operating philosophy. I believe that as a business owner, you deserve more than just a list of numbers at the end of the month. You deserve a partner who values transparency as much as you do. Our mission is to simplify the complexities of finance so you can focus on what you do best: growing your vision. At Veritas, we are dedicated to excellence and integrity, ensuring that every piece of advice we give is rooted in truth and designed to deliver lasting value. We don't just manage your accounts; we empower your future."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MeetFounderHome.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-sm:flex max-sm:flex-col max-sm:items-start max-sm:text-left w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[32px] text-[#232061] leading-[50px] max-xl:text-[44px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-9 max-sm:!text-[32px] max-sm:!leading-[20px] font-roboto max-sm:text-left",
                                        children: [
                                            "Omair Ahsan",
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-lg text-[#232061] italic max-sm:text-let font-serif",
                                        children: "CEO/Founder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-[#232061] italic max-sm:text-let font-serif",
                                        children: "CPA, CGA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MeetFounderHome.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MeetFounderHome.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MeetFounderHome.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MeetFounderHome.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MeetFounderHome.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = MeetFounderHome;
var _c;
__turbopack_context__.k.register(_c, "MeetFounderHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Difference$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Difference.tsx [app-client] (ecmascript)");
// import FAQ from "@/components/FAQ";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/about/ContactSection.tsx [app-client] (ecmascript)");
// import GoogleMap from "@/components/GoogleMap";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MeetFounderHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MeetFounderHome.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Difference$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MeetFounderHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        hideHeading: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_aa506fe3._.js.map