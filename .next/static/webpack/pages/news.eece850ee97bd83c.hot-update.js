"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./components/NewsList.jsx":
/*!*********************************!*\
  !*** ./components/NewsList.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _NewsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsItem */ \"./components/NewsItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NewsList = ()=>{\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getArticles = async ()=>{\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=e11f15b8abc048118bbd416bf9b52d11\");\n            console.log(response);\n            setArticles(response.data.articles);\n        };\n        getArticles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        class: \"container-card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-news grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 group\",\n                children: articles.map((article)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex flex-col rounded-xl pb-6 bg-gray-100 bg-clip-border shadow-card cursor-pointer group-hover:blur-sm hover:!blur-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"desc-group flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"image aspect-w-1 aspect-h-1 w-90% overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 items-center justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: article.urlToImage,\n                                            alt: \"\",\n                                            className: \"h-full w-full object-cover object-center bg-cover bg-center\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"container_desc text-secondary flex flex-col p-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            class: \"font-medium\",\n                                            children: article.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: article.url,\n                                className: \"group w-fit mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"btnRead\",\n                                    className: \"middle none center rounded-lg bg-emerald-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg hover:shadow-green-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-32\",\n                                    \"data-ripple-light\": \"true\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, article.id, false, {\n                                fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsList.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsList, \"XsOpLvUbTkfx79dw07TVNsBviNQ=\");\n_c = NewsList;\nasync function getStaticProps() {\n    const response = await fetch(\"https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=e11f15b8abc048118bbd416bf9b52d11\");\n    const { articles  } = await response.json();\n    return {\n        props: {\n            articles\n        }\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\nvar _c;\n$RefreshReg$(_c, \"NewsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3NMaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSjtBQUNwQjtBQUNRO0FBRWxDLE1BQU1NLFdBQVcsSUFBTTs7SUFFbkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NDLGdEQUFTQSxDQUFDLElBQUs7UUFDWCxNQUFNTyxjQUFjLFVBQVc7WUFDM0IsTUFBTUMsV0FBVyxNQUFNTixpREFBUyxDQUFDO1lBQ2pDUSxRQUFRQyxHQUFHLENBQUNIO1lBQ1pGLFlBQVlFLFNBQVNJLElBQUksQ0FBQ1AsUUFBUTtRQUN0QztRQUVBRTtJQUVKLEdBQUcsRUFBRTtJQUVQLHFCQUVFLDhEQUFDTTtRQUFJQyxXQUFVO1FBQVdDLE9BQU07a0JBQ3hCLDRFQUFDRjtZQUFJQyxXQUFVO3NCQUVYLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDZFQsU0FBU1csR0FBRyxDQUFDLENBQUNDLFVBQVk7b0JBQ3ZCLHFCQUNJLDhEQUFDSjt3QkFBSUUsT0FBTTs7MENBQ1AsOERBQUNGO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNJOzRDQUNEQyxLQUFLRixRQUFRRyxVQUFVOzRDQUN2QkMsS0FBSTs0Q0FDSlAsV0FBVTs7Ozs7Ozs7Ozs7a0RBR2QsOERBQUNEO3dDQUFJRSxPQUFNO2tEQUNQLDRFQUFDTzs0Q0FBR1AsT0FBTTtzREFBZUUsUUFBUU0sS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzlDLDhEQUFDQztnQ0FBbUJDLE1BQU1SLFFBQVFTLEdBQUc7Z0NBQUVaLFdBQVU7MENBQzdDLDRFQUFDYTtvQ0FBT1osT0FBTTtvQ0FDVkQsV0FBVTtvQ0FDVmMscUJBQWtCOzhDQUFPOzs7Ozs7K0JBSHpCWCxRQUFRWSxFQUFFOzs7Ozs7Ozs7OztnQkFTMUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FsRE16QjtLQUFBQTtBQW9EQyxlQUFlMEIsaUJBQWdCO0lBQ2xDLE1BQU10QixXQUFXLE1BQU11QixNQUFNO0lBRTdCLE1BQU0sRUFBQzFCLFNBQVEsRUFBQyxHQUFHLE1BQU1HLFNBQVN3QixJQUFJO0lBQ3RDLE9BQU07UUFDSkMsT0FBTztZQUNMNUI7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVILCtEQUFlRCxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3c0xpc3QuanN4PzMyMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTmV3c0l0ZW0gZnJvbSAnLi9OZXdzSXRlbSc7XHJcblxyXG5jb25zdCBOZXdzTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgY29uc3QgZ2V0QXJ0aWNsZXMgPSBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jb3VudHJ5PWlkJmNhdGVnb3J5PWhlYWx0aCZhcGlLZXk9ZTExZjE1YjhhYmMwNDgxMThiYmQ0MTZiZjliNTJkMTEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhyZXNwb25zZS5kYXRhLmFydGljbGVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBnZXRBcnRpY2xlcygpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCIgY2xhc3M9XCJjb250YWluZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOCBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1uZXdzIGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04IGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLXhsIHBiLTYgYmctZ3JheS0xMDAgYmctY2xpcC1ib3JkZXIgc2hhZG93LWNhcmQgY3Vyc29yLXBvaW50ZXIgZ3JvdXAtaG92ZXI6Ymx1ci1zbSBob3ZlcjohYmx1ci1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2MtZ3JvdXAgZmxleC0xXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctOTAlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC13LTcgeGw6YXNwZWN0LWgtOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudXJsVG9JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBiZy1jb3ZlciBiZy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJfZGVzYyB0ZXh0LXNlY29uZGFyeSBmbGV4IGZsZXgtY29sIHAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb250LW1lZGl1bVwiPnthcnRpY2xlLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e2FydGljbGUuaWR9IGhyZWY9e2FydGljbGUudXJsfSBjbGFzc05hbWU9XCJncm91cCB3LWZpdCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaWRkbGUgbm9uZSBjZW50ZXIgcm91bmRlZC1sZyBiZy1lbWVyYWxkLTgwMCBweS0zIHB4LTYgZm9udC1zYW5zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctZW1lcmFsZC01MDAvMjAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1ncmVlbi01MDAgZm9jdXM6b3BhY2l0eS1bMC44NV0gZm9jdXM6c2hhZG93LW5vbmUgYWN0aXZlOm9wYWNpdHktWzAuODVdIGFjdGl2ZTpzaGFkb3ctbm9uZSBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6c2hhZG93LW5vbmUgdy0zMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmlwcGxlLWxpZ2h0PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9aWQmY2F0ZWdvcnk9aGVhbHRoJmFwaUtleT1lMTFmMTViOGFiYzA0ODExOGJiZDQxNmJmOWI1MmQxMScpXHJcbiAgXHJcbiAgICBjb25zdCB7YXJ0aWNsZXN9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICByZXR1cm57XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgYXJ0aWNsZXNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJheGlvcyIsIk5ld3NJdGVtIiwiTmV3c0xpc3QiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiZ2V0QXJ0aWNsZXMiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3MiLCJtYXAiLCJhcnRpY2xlIiwiaW1nIiwic3JjIiwidXJsVG9JbWFnZSIsImFsdCIsImg0IiwidGl0bGUiLCJhIiwiaHJlZiIsInVybCIsImJ1dHRvbiIsImRhdGEtcmlwcGxlLWxpZ2h0IiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsList.jsx\n"));

/***/ })

});