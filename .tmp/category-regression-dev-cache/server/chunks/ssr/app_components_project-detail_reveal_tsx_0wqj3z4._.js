module.exports = [
"[project]/app/components/project-detail/reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, className, target, distance = 12, initialOpacity = 0 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = target ? ref.current?.querySelector(target) : ref.current;
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!element || preference.matches || !("IntersectionObserver" in window)) return;
        let animation;
        const observer = new IntersectionObserver(([entry])=>{
            if (!entry.isIntersecting) return;
            if (!preference.matches) {
                animation = element.animate([
                    {
                        opacity: initialOpacity,
                        transform: `translateY(${distance}px)`
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ], {
                    duration: 700,
                    easing: "cubic-bezier(0.22, 0.61, 0.36, 1)"
                });
            }
            observer.disconnect();
        }, {
            threshold: 0.12
        });
        const stopMotion = ()=>{
            if (preference.matches) animation?.cancel();
        };
        preference.addEventListener("change", stopMotion);
        observer.observe(element);
        return ()=>{
            observer.disconnect();
            animation?.cancel();
            preference.removeEventListener("change", stopMotion);
        };
    }, [
        target,
        distance,
        initialOpacity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/project-detail/reveal.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=app_components_project-detail_reveal_tsx_0wqj3z4._.js.map