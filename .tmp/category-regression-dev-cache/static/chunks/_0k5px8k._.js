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
"[project]/app/ux-service/bmw-scadpro/chapters.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/app/ux-service/bmw-scadpro/chapters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MyRole",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MyRole"],
    "Process",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Process"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/chapters.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/process.tsx [app-client] (ecmascript)");
}),
"[project]/app/ux-service/bmw-scadpro/chapters.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MyRole",
    ()=>MyRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/chapters.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/process.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label} type-micro`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: number
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 13,
                columnNumber: 55
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = ChapterLabel;
function MyRole() {
    _s();
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyRole.useEffect": ()=>{
            const list = listRef.current;
            const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
            if (!list || preference.matches || !("IntersectionObserver" in window)) return;
            const animations = [];
            const observer = new IntersectionObserver({
                "MyRole.useEffect": (entries)=>{
                    entries.filter({
                        "MyRole.useEffect": (entry)=>entry.isIntersecting
                    }["MyRole.useEffect"]).forEach({
                        "MyRole.useEffect": (entry, index)=>{
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
                        }
                    }["MyRole.useEffect"]);
                }
            }["MyRole.useEffect"], {
                threshold: 0.25
            });
            Array.from(list.children).forEach({
                "MyRole.useEffect": (item)=>observer.observe(item)
            }["MyRole.useEffect"]);
            const stop = {
                "MyRole.useEffect.stop": ()=>{
                    if (preference.matches) animations.forEach({
                        "MyRole.useEffect.stop": (animation)=>animation.cancel()
                    }["MyRole.useEffect.stop"]);
                }
            }["MyRole.useEffect.stop"];
            preference.addEventListener("change", stop);
            return ({
                "MyRole.useEffect": ()=>{
                    observer.disconnect();
                    animations.forEach({
                        "MyRole.useEffect": (animation)=>animation.cancel()
                    }["MyRole.useEffect"]);
                    preference.removeEventListener("change", stop);
                }
            })["MyRole.useEffect"];
        }
    }["MyRole.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapter,
        "aria-label": "My role",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChapterLabel, {
                number: "02",
                children: "MY ROLE"
            }, void 0, false, {
                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: listRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roles,
                children: responsibilities.map(([title, descriptor])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "type-h2",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$chapters$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].additionalInvolvement,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "type-micro",
                        children: "ADDITIONAL INVOLVEMENT"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/chapters.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(MyRole, "84n7gRvM2a8Nl9i4H/fLGxCIUPc=");
_c1 = MyRole;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChapterLabel");
__turbopack_context__.k.register(_c1, "MyRole");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ux-service/bmw-scadpro/process.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "additionalInvolvement": "process-module__tCoffG__additionalInvolvement",
  "chapter": "process-module__tCoffG__chapter",
  "label": "process-module__tCoffG__label",
  "role": "process-module__tCoffG__role",
  "roles": "process-module__tCoffG__roles",
});
}),
"[project]/app/ux-service/bmw-scadpro/process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Process",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/process.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const diagramRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Process.useEffect": ()=>{
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
            const measure = {
                "Process.useEffect.measure": ()=>{
                    const bounds = diagram.getBoundingClientRect();
                    const anchor = {
                        "Process.useEffect.measure.anchor": (element)=>{
                            const dot = element.querySelector("[data-anchor]").getBoundingClientRect();
                            return {
                                x: dot.left + dot.width / 2 - bounds.left,
                                y: dot.top + dot.height / 2 - bounds.top
                            };
                        }
                    }["Process.useEffect.measure.anchor"];
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
                    branchEnds = contributions.map({
                        "Process.useEffect.measure": (item, index)=>{
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
                        }
                    }["Process.useEffect.measure"]);
                    needsMeasure = false;
                }
            }["Process.useEffect.measure"];
            const update = {
                "Process.useEffect.update": ()=>{
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
                    events.forEach({
                        "Process.useEffect.update": (event, index)=>{
                            event.dataset.active = String(cursor >= points[index].y - 1);
                        }
                    }["Process.useEffect.update"]);
                    let activeBranch = -1;
                    branchEnds.forEach({
                        "Process.useEffect.update": ({ start, end }, index)=>{
                            const fraction = clamp((cursor - start.y) / (end.y - start.y));
                            branches[index].style.strokeDashoffset = String(1 - fraction);
                            contributions[index].dataset.active = String(cursor >= end.y - 1);
                            if (fraction > 0 && fraction < 1) activeBranch = index;
                        }
                    }["Process.useEffect.update"]);
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
                }
            }["Process.useEffect.update"];
            const schedule = {
                "Process.useEffect.schedule": ()=>{
                    if (!frame) frame = requestAnimationFrame(update);
                }
            }["Process.useEffect.schedule"];
            const resize = {
                "Process.useEffect.resize": ()=>{
                    needsMeasure = true;
                    schedule();
                }
            }["Process.useEffect.resize"];
            const observer = new ResizeObserver(resize);
            observer.observe(diagram);
            events.forEach({
                "Process.useEffect": (event)=>observer.observe(event)
            }["Process.useEffect"]);
            window.addEventListener("scroll", schedule, {
                passive: true
            });
            window.addEventListener("resize", resize);
            preference.addEventListener("change", schedule);
            update();
            return ({
                "Process.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    observer.disconnect();
                    window.removeEventListener("scroll", schedule);
                    window.removeEventListener("resize", resize);
                    preference.removeEventListener("change", schedule);
                }
            })["Process.useEffect"];
        }
    }["Process.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].process,
        "aria-labelledby": "process-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "process-heading",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label} type-micro`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "03"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                        lineNumber: 149,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processKey,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legend} type-micro`,
                    "aria-label": "Process legend",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contributionKey,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].additionalKeyLabel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].additionalKey,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectKey,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: diagramRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].diagram,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawing,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "process-contribution-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "var(--color-ux)",
                                            stopOpacity: "0.045"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                "data-guide": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guide
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                "data-progress": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                pathLength: "1"
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            involvement.map(({ name, kind })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            "data-branch-guide": true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].guide
                                        }, void 0, false, {
                                            fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            "data-branch": true,
                                            "data-involvement": kind,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].branch,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roadmap,
                        children: roadmap.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                "data-event": true,
                                "data-kind": event.kind,
                                "data-active": "true",
                                "data-involvement": event.kind === "milestone" ? event.involvement : undefined,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].event} ${event.kind === "phase" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phase : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].milestone}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-anchor": true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].anchor,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    event.kind === "milestone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].week} type-micro`,
                                        children: event.week
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 181,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: event.kind === "phase" ? "type-h2" : "type-micro",
                                        children: event.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/ux-service/bmw-scadpro/process.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activities} type-small`,
                                        "aria-label": "Project activities",
                                        children: event.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                    event.kind === "phase" && phaseInvolvement(event).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contributions} type-small`,
                                        "aria-label": `My involvement within ${event.title.toLowerCase()}`,
                                        children: phaseInvolvement(event).map(({ name, kind })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-contribution": true,
                                                "data-involvement": kind,
                                                "data-active": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-anchor": true,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contributionAnchor,
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
_s(Process, "Iu16wR3n3MQey8BGIV6Jc19t6GQ=");
_c = Process;
const involvement = roadmap.flatMap((event)=>event.kind === "phase" ? phaseInvolvement(event) : []);
var _c;
__turbopack_context__.k.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReflectionVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/reflection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReflectionVisual.useEffect": ()=>{
            const field = fieldRef.current;
            if (!field) return;
            const touch = window.matchMedia("(hover: none)");
            let observer;
            const configure = {
                "ReflectionVisual.useEffect.configure": ()=>{
                    observer?.disconnect();
                    field.dataset.active = "false";
                    if (touch.matches) {
                        observer = new IntersectionObserver({
                            "ReflectionVisual.useEffect.configure": ([entry])=>{
                                field.dataset.active = String(entry.isIntersecting);
                            }
                        }["ReflectionVisual.useEffect.configure"], {
                            threshold: 0.25
                        });
                        observer.observe(field);
                    }
                }
            }["ReflectionVisual.useEffect.configure"];
            configure();
            touch.addEventListener("change", configure);
            return ({
                "ReflectionVisual.useEffect": ()=>{
                    observer?.disconnect();
                    touch.removeEventListener("change", configure);
                }
            })["ReflectionVisual.useEffect"];
        }
    }["ReflectionVisual.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: fieldRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].study,
        tabIndex: 0,
        role: "img",
        "aria-label": kind === "lines" ? "Scattered information organizes into aligned fragments on hover or focus." : "Independent points regroup into a shared direction on hover or focus.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fragment,
                        style: style,
                        children: kind === "lines" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: -size,
                            y1: "0",
                            x2: size,
                            y2: "0"
                        }, void 0, false, {
                            fileName: "[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx",
                            lineNumber: 50,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCue} type-micro`,
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
_s(ReflectionVisual, "msnqZd9IZMfKQtcR9VSxqBVmMks=");
_c = ReflectionVisual;
var _c;
__turbopack_context__.k.register(_c, "ReflectionVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ux-service/bmw-scadpro/reflection.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/app/ux-service/bmw-scadpro/reflection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reflection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/reflection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2d$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ux-service/bmw-scadpro/reflection-visual.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reflection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
            const articles = Array.from(section.querySelectorAll("article"));
            const paragraphs = Array.from(section.querySelectorAll("[data-paragraph]"));
            const revealed = new WeakMap();
            let frame = 0;
            const update = {
                "Reflection.useEffect.update": ()=>{
                    frame = 0;
                    paragraphs.forEach({
                        "Reflection.useEffect.update": (paragraph)=>{
                            const progress = preference.matches ? 1 : Math.max(0, Math.min(1, (window.innerHeight * 0.9 - paragraph.getBoundingClientRect().top) / (window.innerHeight * 0.22)));
                            // Reading progress is retained: scrolling back never hides earlier copy.
                            const visible = Math.max(revealed.get(paragraph) ?? 0, progress);
                            revealed.set(paragraph, visible);
                            paragraph.style.opacity = String(0.15 + 0.85 * visible);
                            paragraph.style.transform = `translateY(${6 * (1 - visible)}px)`;
                        }
                    }["Reflection.useEffect.update"]);
                }
            }["Reflection.useEffect.update"];
            const schedule = {
                "Reflection.useEffect.schedule": ()=>{
                    if (!frame) frame = requestAnimationFrame(update);
                }
            }["Reflection.useEffect.schedule"];
            const observer = new ResizeObserver(schedule);
            articles.forEach({
                "Reflection.useEffect": (article)=>observer.observe(article)
            }["Reflection.useEffect"]);
            window.addEventListener("scroll", schedule, {
                passive: true
            });
            window.addEventListener("resize", schedule);
            preference.addEventListener("change", schedule);
            update();
            return ({
                "Reflection.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    observer.disconnect();
                    window.removeEventListener("scroll", schedule);
                    window.removeEventListener("resize", schedule);
                    preference.removeEventListener("change", schedule);
                }
            })["Reflection.useEffect"];
        }
    }["Reflection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflection,
        "aria-labelledby": "reflection-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "reflection-heading",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label} type-micro`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "05"
                    }, void 0, false, {
                        fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapters,
                children: chapters.map(({ number, title, paragraphs })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapter,
                        "aria-labelledby": `reflection-${number}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: `reflection-${number}`,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statement} type-display`,
                                children: title.join(" ")
                            }, void 0, false, {
                                fileName: "[project]/app/ux-service/bmw-scadpro/reflection.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy} type-body`,
                                children: paragraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ux$2d$service$2f$bmw$2d$scadpro$2f$reflection$2d$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Reflection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = Reflection;
var _c;
__turbopack_context__.k.register(_c, "Reflection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchIntent === 'auto' ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
]);

//# sourceMappingURL=_0k5px8k._.js.map