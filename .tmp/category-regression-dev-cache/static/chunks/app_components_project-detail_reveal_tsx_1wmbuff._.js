(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/project-detail/reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className, target, distance = 12, initialOpacity = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const element = target ? ref.current?.querySelector(target) : ref.current;
            const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
            if (!element || preference.matches || !("IntersectionObserver" in window)) return;
            let animation;
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
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
                }
            }["Reveal.useEffect"], {
                threshold: 0.12
            });
            const stopMotion = {
                "Reveal.useEffect.stopMotion": ()=>{
                    if (preference.matches) animation?.cancel();
                }
            }["Reveal.useEffect.stopMotion"];
            preference.addEventListener("change", stopMotion);
            observer.observe(element);
            return ({
                "Reveal.useEffect": ()=>{
                    observer.disconnect();
                    animation?.cancel();
                    preference.removeEventListener("change", stopMotion);
                }
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], [
        target,
        distance,
        initialOpacity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/project-detail/reveal.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_s(Reveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_project-detail_reveal_tsx_1wmbuff._.js.map