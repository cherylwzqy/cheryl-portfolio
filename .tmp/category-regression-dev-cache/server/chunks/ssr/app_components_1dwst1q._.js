module.exports = [
"[project]/app/components/project-stage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "caption": "project-stage-module__sjbOua__caption",
  "copy": "project-stage-module__sjbOua__copy",
  "creditDetails": "project-stage-module__sjbOua__creditDetails",
  "degree": "project-stage-module__sjbOua__degree",
  "description": "project-stage-module__sjbOua__description",
  "discipline": "project-stage-module__sjbOua__discipline",
  "entry": "project-stage-module__sjbOua__entry",
  "eyebrow": "project-stage-module__sjbOua__eyebrow",
  "header": "project-stage-module__sjbOua__header",
  "image": "project-stage-module__sjbOua__image",
  "imageFrame": "project-stage-module__sjbOua__imageFrame",
  "metadata": "project-stage-module__sjbOua__metadata",
  "minors": "project-stage-module__sjbOua__minors",
  "photograph": "project-stage-module__sjbOua__photograph",
  "resume": "project-stage-module__sjbOua__resume",
  "scad": "project-stage-module__sjbOua__scad",
  "sectionHeading": "project-stage-module__sjbOua__sectionHeading",
  "title": "project-stage-module__sjbOua__title",
  "toronto": "project-stage-module__sjbOua__toronto",
  "university": "project-stage-module__sjbOua__university",
});
}),
"[project]/app/components/project-stage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/project-stage.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
const timing = {
    color: 450,
    fade: 700,
    hold: 550,
    restore: 800
};
function ProjectStage({ category, title, introduction, projects }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const locked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cue, setCue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aim, setAim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: "50vw",
        y: "56svh",
        angle: 0
    });
    const active = cue?.index ?? hovered ?? focused;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (active === null) return;
        const measure = ()=>{
            const stage = stageRef.current?.getBoundingClientRect();
            const row = rowRefs.current[active]?.getBoundingClientRect();
            if (!stage || !row) return;
            const x = row.left + row.width / 2 - stage.left;
            const y = row.top + row.height / 2 - stage.top;
            // Mirrored beams start 24px beyond the right edge.
            const fromRight = category === "lighting" || category === "production";
            const distance = fromRight ? stage.width + 24 - x : x;
            const direction = fromRight ? -1 : 1;
            setAim({
                x: `${x}px`,
                y: `${y}px`,
                angle: direction * Math.atan2(y - stage.height * 0.56, distance) * 180 / Math.PI
            });
        };
        measure();
        const observer = new ResizeObserver(measure);
        if (stageRef.current) observer.observe(stageRef.current);
        rowRefs.current.forEach((row)=>{
            if (row) observer.observe(row);
        });
        return ()=>observer.disconnect();
    }, [
        active,
        category
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!cue) return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const duration = reduced && cue.phase !== "hold" ? 0 : timing[cue.phase];
        const timer = window.setTimeout(()=>{
            const destination = projects[cue.index].href;
            if (cue.phase === "hold" && destination) {
                router.push(destination);
            } else if (cue.phase === "restore") {
                locked.current = false;
                setCue(null);
            } else {
                // Projects without a detail page return to their resting state.
                const next = {
                    color: "fade",
                    fade: "hold",
                    hold: "restore"
                };
                setCue({
                    index: cue.index,
                    phase: next[cue.phase]
                });
            }
        }, duration);
        return ()=>window.clearTimeout(timer);
    }, [
        cue,
        projects,
        router
    ]);
    const startCue = (index)=>{
        if (locked.current) return;
        locked.current = true;
        setCue({
            index,
            phase: "color"
        });
        const destination = projects[index].href;
        if (destination) router.prefetch(destination);
    };
    const lightStyle = {
        "--category-accent": `var(--color-${category})`,
        "--project-count": projects.length,
        "--project-x": aim.x,
        "--project-y": aim.y,
        "--project-angle": `${aim.angle}deg`,
        "--color-time": `${timing.color}ms`,
        "--fade-time": `${timing.fade}ms`,
        "--restore-time": `${timing.restore}ms`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: stageRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stage,
        style: lightStyle,
        "data-category": category,
        "data-lit": active !== null,
        "data-cue": cue?.phase ?? "idle",
        onPointerLeave: ()=>setHovered(null),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].light,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].beam
                    }, void 0, false, {
                        fileName: "[project]/app/components/project-stage.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pool
                    }, void 0, false, {
                        fileName: "[project]/app/components/project-stage.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/project-stage.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "type-h1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/project-stage.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "type-body",
                        children: introduction
                    }, void 0, false, {
                        fileName: "[project]/app/components/project-stage.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/project-stage.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projects,
                onPointerLeave: ()=>setHovered(null),
                children: [
                    projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].project,
                            ref: (element)=>{
                                rowRefs.current[index] = element;
                            },
                            "data-active": active === index,
                            "aria-pressed": active === index,
                            "aria-disabled": cue !== null,
                            tabIndex: cue && cue.index !== index ? -1 : 0,
                            onPointerEnter: (event)=>{
                                if (event.pointerType !== "touch") setHovered(index);
                            },
                            onFocus: ()=>setFocused(index),
                            onBlur: ()=>setFocused(null),
                            onClick: ()=>startCue(index),
                            children: [
                                project.thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumbnail,
                                    src: project.thumbnail,
                                    alt: "",
                                    sizes: "(max-width: 800px) 25vw, 22vw"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/project-stage.tsx",
                                    lineNumber: 124,
                                    columnNumber: 35
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].information,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date} type-micro`,
                                            children: [
                                                project.number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].number,
                                                    children: project.number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/project-stage.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 80
                                                }, this),
                                                project.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/project-stage.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} type-h3`,
                                            lang: project.titleLanguage,
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/project-stage.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        project.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle} type-subtitle`,
                                            children: project.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/project-stage.tsx",
                                            lineNumber: 129,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metadata} type-small`,
                                            children: project.disciplines
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/project-stage.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/project-stage.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                project.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description} type-small type-chinese`,
                                    lang: "zh-Hans",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/project-stage.tsx",
                                    lineNumber: 132,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, project.title, true, {
                            fileName: "[project]/app/components/project-stage.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)),
                    projects.slice(1).map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider,
                            "aria-hidden": "true",
                            style: {
                                top: (index + 1) / projects.length * 100 + "%"
                            }
                        }, project.title, false, {
                            fileName: "[project]/app/components/project-stage.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/project-stage.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$project$2d$stage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].home,
                inert: cue !== null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "secondary-link type-micro",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "secondary-light",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/app/components/project-stage.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "secondary-label",
                            children: "HOME"
                        }, void 0, false, {
                            fileName: "[project]/app/components/project-stage.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/project-stage.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/project-stage.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/project-stage.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_components_1dwst1q._.js.map