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
"[project]/app/ux-service/bmw-scadpro/chapters.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chapter": "chapters-module__nAimZW__chapter",
  "chapters": "chapters-module__nAimZW__chapters",
  "copy": "chapters-module__nAimZW__copy",
  "fragment": "chapters-module__nAimZW__fragment",
  "hoverCue": "chapters-module__nAimZW__hoverCue",
  "label": "chapters-module__nAimZW__label",
  "reflection": "chapters-module__nAimZW__reflection",
  "statement": "chapters-module__nAimZW__statement",
  "study": "chapters-module__nAimZW__study",
});
}),
"[project]/app/ux-service/bmw-scadpro/chapters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MyRole",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MyRole"],
    "Process",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Process"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/chapters.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/process.tsx [app-ssr] (ecmascript)");
}),
"[project]/app/ux-service/bmw-scadpro/chapters.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MyRole",
    ()=>MyRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/chapters.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/process.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const responsibilities = [
    [
        "Competitive Research",
        "Research & Analysis"
    ],
    [
        "Stakeholder Mapping",
        "System Mapping"
    ],
    [
        "Journey Mapping",
        "Experience Mapping"
    ],
    [
        "Service Blueprint",
        "Service Visualization"
    ]
];
function ChapterLabel({ number, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label} type-micro`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: number
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 13,
                columnNumber: 55
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 13,
                columnNumber: 76
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function MyRole() {
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const list = listRef.current;
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!list || preference.matches || !("IntersectionObserver" in window)) return;
        const animations = [];
        const observer = new IntersectionObserver((entries)=>{
            entries.filter((entry)=>entry.isIntersecting).forEach((entry, index)=>{
                if (!preference.matches) {
                    animations.push(entry.target.animate([
                        {
                            opacity: 0.15,
                            transform: "translateY(8px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ], {
                        duration: 700,
                        delay: index * 100,
                        fill: "backwards",
                        easing: "cubic-bezier(0.22, 0.61, 0.36, 1)"
                    }));
                }
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.25
        });
        Array.from(list.children).forEach((item)=>observer.observe(item));
        const stop = ()=>{
            if (preference.matches) animations.forEach((animation)=>animation.cancel());
        };
        preference.addEventListener("change", stop);
        return ()=>{
            observer.disconnect();
            animations.forEach((animation)=>animation.cancel());
            preference.removeEventListener("change", stop);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chapter,
        "aria-label": "My role",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChapterLabel, {
                number: "02",
                children: "MY ROLE"
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: listRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roles,
                children: responsibilities.map(([title, descriptor])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "type-h2",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "type-small",
                                children: descriptor
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, title, true, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].additionalInvolvement,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "type-micro",
                        children: "ADDITIONAL INVOLVEMENT"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "type-small",
                        children: "Client Meetings · Final Delivery"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/ux-service/bmw-scadpro/process.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "additionalInvolvement": "process-module__tCoffG__additionalInvolvement",
  "chapter": "process-module__tCoffG__chapter",
  "label": "process-module__tCoffG__label",
  "role": "process-module__tCoffG__role",
  "roles": "process-module__tCoffG__roles",
});
}),
"[project]/app/ux-service/bmw-scadpro/process.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Process",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/process.module.css [app-ssr] (css module)");
"use client";
;
;
;
// Contributions are annotations within phases, not additional official stages.
const roadmap = [
    {
        kind: "phase",
        title: "DISCOVER",
        activities: [
            "Secondary Research",
            "Primary Research"
        ],
        contributions: [
            "Competitive Research"
        ]
    },
    {
        kind: "milestone",
        week: "WEEK 3",
        title: "CLIENT CHECK-IN #1",
        activities: [
            "Research findings",
            "Alignment with client"
        ],
        involvement: "additional"
    },
    {
        kind: "milestone",
        week: "WEEK 5",
        title: "MIDPOINT PRESENTATION",
        activities: [
            "Primary research analysis",
            "External innovation research"
        ],
        involvement: "additional"
    },
    {
        kind: "phase",
        title: "DEVELOP",
        activities: [
            "Ideation",
            "Visual Explorations",
            "Crafting a Blueprint"
        ],
        contributions: [
            "Stakeholder Mapping",
            "Journey Mapping",
            "Service Blueprint"
        ]
    },
    {
        kind: "milestone",
        week: "WEEK 7",
        title: "CLIENT CHECK-IN #2",
        activities: [
            "Developed blueprint and stakeholder maps"
        ]
    },
    {
        kind: "phase",
        title: "DELIVER",
        activities: [
            "Final Deliverables",
            "Documentation & Hand-off"
        ],
        contributions: [],
        additionalInvolvement: [
            "Final Presentation Preparation"
        ]
    },
    {
        kind: "milestone",
        week: "WEEK 10",
        title: "FINAL PRESENTATION",
        activities: [
            "Final deliverables",
            "Documentation & hand-off"
        ]
    }
];
function phaseInvolvement(phase) {
    return [
        ...phase.contributions.map((name)=>({
                name,
                kind: "primary"
            })),
        ...(phase.additionalInvolvement ?? []).map((name)=>({
                name,
                kind: "additional"
            }))
    ];
}
const clamp = (value)=>Math.max(0, Math.min(1, value));
function Process() {
    const diagramRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const diagram = diagramRef.current;
        if (!diagram) return;
        const svg = diagram.querySelector("svg");
        const guide = svg.querySelector("[data-guide]");
        const progressPath = svg.querySelector("[data-progress]");
        const light = svg.querySelector("[data-light]");
        const events = Array.from(diagram.querySelectorAll("[data-event]"));
        const contributions = Array.from(diagram.querySelectorAll("[data-contribution]"));
        const branchGuides = svg.querySelectorAll("[data-branch-guide]");
        const branches = svg.querySelectorAll("[data-branch]");
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        let points = [];
        let distances = [];
        let branchEnds = [];
        let totalLength = 0;
        let frame = 0;
        let needsMeasure = true;
        const measure = ()=>{
            const bounds = diagram.getBoundingClientRect();
            const anchor = (element)=>{
                const dot = element.querySelector("[data-anchor]").getBoundingClientRect();
                return {
                    x: dot.left + dot.width / 2 - bounds.left,
                    y: dot.top + dot.height / 2 - bounds.top
                };
            };
            points = events.map(anchor);
            svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
            let path = `M${points[0].x} ${points[0].y}`;
            distances = [
                0
            ];
            for(let index = 1; index < points.length; index++){
                const previous = points[index - 1];
                const current = points[index];
                // Cross the empty space between annotations, never through their text.
                const previousBottom = events[index - 1].getBoundingClientRect().bottom - bounds.top;
                const bend = (previousBottom + current.y) / 2;
                path += ` V${bend} H${current.x} V${current.y}`;
                distances.push(distances[index - 1] + current.y - previous.y + Math.abs(current.x - previous.x));
            }
            guide.setAttribute("d", path);
            progressPath.setAttribute("d", path);
            totalLength = progressPath.getTotalLength();
            branchEnds = contributions.map((item, index)=>{
                const parent = item.closest("[data-event]");
                const start = points[events.indexOf(parent)];
                const end = anchor(item);
                const path = `M${start.x} ${start.y} H${start.x + 10} V${end.y} H${end.x}`;
                branchGuides[index].setAttribute("d", path);
                branches[index].setAttribute("d", path);
                return {
                    start,
                    end
                };
            });
            needsMeasure = false;
        };
        const update = ()=>{
            frame = 0;
            if (needsMeasure) measure();
            const bounds = diagram.getBoundingClientRect();
            const cursor = preference.matches ? Infinity : window.innerHeight * 0.8 - bounds.top;
            let drawn = 0;
            for(let index = 1; index < points.length; index++){
                const fraction = clamp((cursor - points[index - 1].y) / (points[index].y - points[index - 1].y));
                drawn += (distances[index] - distances[index - 1]) * fraction;
            }
            progressPath.style.strokeDashoffset = String(1 - clamp(drawn / totalLength));
            events.forEach((event, index)=>{
                event.dataset.active = String(cursor >= points[index].y - 1);
            });
            let activeBranch = -1;
            branchEnds.forEach(({ start, end }, index)=>{
                const fraction = clamp((cursor - start.y) / (end.y - start.y));
                branches[index].style.strokeDashoffset = String(1 - fraction);
                contributions[index].dataset.active = String(cursor >= end.y - 1);
                if (fraction > 0 && fraction < 1) activeBranch = index;
            });
            // Only contribution work receives the restrained blue atmospheric emphasis.
            if (activeBranch >= 0 && !preference.matches) {
                const branch = branches[activeBranch];
                const fraction = 1 - Number(branch.style.strokeDashoffset);
                const point = branch.getPointAtLength(branch.getTotalLength() * fraction);
                light.setAttribute("cx", String(point.x));
                light.setAttribute("cy", String(point.y));
                light.style.opacity = "1";
            } else {
                light.style.opacity = "0";
            }
        };
        const schedule = ()=>{
            if (!frame) frame = requestAnimationFrame(update);
        };
        const resize = ()=>{
            needsMeasure = true;
            schedule();
        };
        const observer = new ResizeObserver(resize);
        observer.observe(diagram);
        events.forEach((event)=>observer.observe(event));
        window.addEventListener("scroll", schedule, {
            passive: true
        });
        window.addEventListener("resize", resize);
        preference.addEventListener("change", schedule);
        update();
        return ()=>{
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", resize);
            preference.removeEventListener("change", schedule);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].process,
        "aria-labelledby": "process-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "process-heading",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label} type-micro`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "03"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                        lineNumber: 149,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "PROCESS"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                        lineNumber: 149,
                        columnNumber: 88
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processKey,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legend} type-micro`,
                    "aria-label": "Process legend",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contributionKey,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                "PRIMARY CONTRIBUTION"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].additionalKeyLabel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].additionalKey,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                    lineNumber: 153,
                                    columnNumber: 53
                                }, this),
                                "ADDITIONAL INVOLVEMENT"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectKey,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                "PROJECT PROCESS"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: diagramRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].diagram,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawing,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "process-contribution-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "var(--color-ux)",
                                            stopOpacity: "0.045"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "var(--color-ux)",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                "data-light": true,
                                r: "120",
                                cx: "0",
                                cy: "0",
                                fill: "url(#process-contribution-light)",
                                opacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                "data-guide": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].guide
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                "data-progress": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progress,
                                pathLength: "1"
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            involvement.map(({ name, kind })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            "data-branch-guide": true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].guide
                                        }, void 0, false, {
                                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            "data-branch": true,
                                            "data-involvement": kind,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].branch,
                                            pathLength: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, name, true, {
                                    fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roadmap,
                        children: roadmap.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                "data-event": true,
                                "data-kind": event.kind,
                                "data-active": "true",
                                "data-involvement": event.kind === "milestone" ? event.involvement : undefined,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].event} ${event.kind === "phase" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].phase : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].milestone}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-anchor": true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].anchor,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    event.kind === "milestone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].week} type-micro`,
                                        children: event.week
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 181,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: event.kind === "phase" ? "type-h2" : "type-micro",
                                        children: event.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activities} type-small`,
                                        "aria-label": "Project activities",
                                        children: event.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: activity
                                            }, activity, false, {
                                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                                lineNumber: 184,
                                                columnNumber: 53
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    event.kind === "phase" && phaseInvolvement(event).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contributions} type-small`,
                                        "aria-label": `My involvement within ${event.title.toLowerCase()}`,
                                        children: phaseInvolvement(event).map(({ name, kind })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-contribution": true,
                                                "data-involvement": kind,
                                                "data-active": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-anchor": true,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contributionAnchor,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 23
                                                    }, this),
                                                    name
                                                ]
                                            }, name, true, {
                                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                                lineNumber: 189,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, event.title, true, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
const involvement = roadmap.flatMap((event)=>event.kind === "phase" ? phaseInvolvement(event) : []);
}),
"[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReflectionVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/reflection.module.css [app-ssr] (css module)");
"use client";
;
;
;
// Fixed compositions: no random or continuously moving elements.
// Leave the center clear for the caption in the scattered state.
const scattered = [
    [
        30,
        30
    ],
    [
        98,
        46
    ],
    [
        166,
        24
    ],
    [
        266,
        40
    ],
    [
        54,
        78
    ],
    [
        138,
        86
    ],
    [
        218,
        66
    ],
    [
        292,
        94
    ],
    [
        22,
        126
    ],
    [
        300,
        154
    ],
    [
        38,
        190
    ],
    [
        112,
        202
    ],
    [
        192,
        188
    ],
    [
        276,
        214
    ],
    [
        68,
        246
    ],
    [
        160,
        256
    ],
    [
        242,
        244
    ],
    [
        294,
        260
    ],
    [
        208,
        32
    ],
    [
        26,
        252
    ]
];
const organized = Array.from({
    length: 20
}, (_, index)=>[
        56 + index % 4 * 70,
        52 + Math.floor(index / 4) * 44
    ]);
// Uneven concentric spacing keeps the collective organic, without connections.
const regrouped = [
    [
        160,
        76
    ],
    [
        195,
        85
    ],
    [
        220,
        112
    ],
    [
        228,
        147
    ],
    [
        207,
        185
    ],
    [
        173,
        201
    ],
    [
        136,
        194
    ],
    [
        101,
        173
    ],
    [
        92,
        133
    ],
    [
        114,
        94
    ],
    [
        147,
        108
    ],
    [
        179,
        112
    ],
    [
        192,
        143
    ],
    [
        175,
        170
    ],
    [
        144,
        167
    ],
    [
        126,
        142
    ],
    [
        151,
        133
    ],
    [
        166,
        131
    ],
    [
        170,
        149
    ],
    [
        152,
        150
    ]
];
function ReflectionVisual({ kind }) {
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const field = fieldRef.current;
        if (!field) return;
        const touch = window.matchMedia("(hover: none)");
        let observer;
        const configure = ()=>{
            observer?.disconnect();
            field.dataset.active = "false";
            if (touch.matches) {
                observer = new IntersectionObserver(([entry])=>{
                    field.dataset.active = String(entry.isIntersecting);
                }, {
                    threshold: 0.25
                });
                observer.observe(field);
            }
        };
        configure();
        touch.addEventListener("change", configure);
        return ()=>{
            observer?.disconnect();
            touch.removeEventListener("change", configure);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: fieldRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].study,
        tabIndex: 0,
        role: "img",
        "aria-label": kind === "lines" ? "Scattered information organizes into aligned fragments on hover or focus." : "Independent points regroup into a shared direction on hover or focus.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 320 280",
                "aria-hidden": "true",
                children: scattered.map(([x, y], index)=>{
                    const [endX, endY] = (kind === "lines" ? organized : regrouped)[index];
                    const size = [
                        7,
                        10,
                        8,
                        12
                    ][index % 4];
                    const style = {
                        "--start-x": `${x}px`,
                        "--start-y": `${y}px`,
                        "--end-x": `${endX}px`,
                        "--end-y": `${endY}px`,
                        "--fragment-opacity": kind === "lines" ? 0.32 : [
                            0.3,
                            0.34,
                            0.32
                        ][index % 3]
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fragment,
                        style: style,
                        children: kind === "lines" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: -size,
                            y1: "0",
                            x2: size,
                            y2: "0"
                        }, void 0, false, {
                            fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
                            lineNumber: 50,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "0",
                            cy: "0",
                            r: [
                                2,
                                2.5,
                                2.2
                            ][index % 3]
                        }, void 0, false, {
                            fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
                            lineNumber: 51,
                            columnNumber: 17
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
                        lineNumber: 48,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hoverCue} type-micro`,
                "aria-hidden": "true",
                children: kind === "lines" ? "From Noise to Clarity" : "From Individual to Collective"
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/ux-service/bmw-scadpro/reflection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "copy": "reflection-module__4y0ywa__copy",
  "detail": "reflection-module__4y0ywa__detail",
  "details": "reflection-module__4y0ywa__details",
  "eyebrow": "reflection-module__4y0ywa__eyebrow",
  "hero": "reflection-module__4y0ywa__hero",
  "heroContent": "reflection-module__4y0ywa__heroContent",
  "light": "reflection-module__4y0ywa__light",
  "navigation": "reflection-module__4y0ywa__navigation",
  "note": "reflection-module__4y0ywa__note",
  "section": "reflection-module__4y0ywa__section",
  "sectionLabel": "reflection-module__4y0ywa__sectionLabel",
  "split": "reflection-module__4y0ywa__split",
  "statement": "reflection-module__4y0ywa__statement",
  "subtitle": "reflection-module__4y0ywa__subtitle",
  "title": "reflection-module__4y0ywa__title",
});
}),
"[project]/app/ux-service/bmw-scadpro/reflection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reflection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/reflection.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2d$visual$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const chapters = [
    {
        number: "01",
        title: [
            "FINDING CLARITY",
            "IN COMPLEXITY."
        ],
        paragraphs: [
            "This was my first UX and service design project, and the pace was very different from the interior design projects I was used to. Our team of more than 20 people had to quickly explore different directions, gather information from dozens of sources, and bring everything back together within a very short timeframe.",
            "At first, I found it difficult to adapt to the amount and speed of information. Over time, however, this became one of the most rewarding parts of the project. I learned how to sort through scattered information, identify what was useful, decide what needed deeper exploration, and translate complex relationships into clear visual structures.",
            "What I enjoyed most was finding clarity within complexity — looking at many disconnected pieces and gradually finding the most logical and effective way forward. It made me realize that, regardless of the medium, this is also what I value about design itself."
        ]
    },
    {
        number: "02",
        title: [
            "WORKING AS",
            "ONE TEAM."
        ],
        paragraphs: [
            "This was also my first time working in a team of more than 20 people. We had to define roles quickly, work independently in different directions, and then constantly regroup to connect our findings and make decisions together.",
            "Learning when to separate, when to collaborate, and how to bring individual work back into one shared direction became another important part of the experience. Despite the intensity of the project, I found this way of working exciting and motivating."
        ]
    }
];
function Reflection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        if (!section) return;
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        const articles = Array.from(section.querySelectorAll("article"));
        const paragraphs = Array.from(section.querySelectorAll("[data-paragraph]"));
        const revealed = new WeakMap();
        let frame = 0;
        const update = ()=>{
            frame = 0;
            paragraphs.forEach((paragraph)=>{
                const progress = preference.matches ? 1 : Math.max(0, Math.min(1, (window.innerHeight * 0.9 - paragraph.getBoundingClientRect().top) / (window.innerHeight * 0.22)));
                // Reading progress is retained: scrolling back never hides earlier copy.
                const visible = Math.max(revealed.get(paragraph) ?? 0, progress);
                revealed.set(paragraph, visible);
                paragraph.style.opacity = String(0.15 + 0.85 * visible);
                paragraph.style.transform = `translateY(${6 * (1 - visible)}px)`;
            });
        };
        const schedule = ()=>{
            if (!frame) frame = requestAnimationFrame(update);
        };
        const observer = new ResizeObserver(schedule);
        articles.forEach((article)=>observer.observe(article));
        window.addEventListener("scroll", schedule, {
            passive: true
        });
        window.addEventListener("resize", schedule);
        preference.addEventListener("change", schedule);
        update();
        return ()=>{
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            preference.removeEventListener("change", schedule);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflection,
        "aria-labelledby": "reflection-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "reflection-heading",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label} type-micro`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "05"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "REFLECTION"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                        lineNumber: 70,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chapters,
                children: chapters.map(({ number, title, paragraphs })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chapter,
                        "aria-labelledby": `reflection-${number}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: `reflection-${number}`,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statement} type-display`,
                                children: title.join(" ")
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copy} type-body`,
                                children: paragraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-paragraph": true,
                                        children: paragraph
                                    }, paragraph, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 46
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2d$visual$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                kind: number === "01" ? "lines" : "dots"
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, number, true, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_06epezj._.js.map