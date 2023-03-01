"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NewsItem.jsx":
/*!*********************************!*\
  !*** ./components/NewsItem.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst NewsItem = (param)=>{\n    let { index , title , description , url , urlToImage  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        class: \"container-card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-news grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 group\",\n                children: articles.map((article)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex flex-col rounded-xl pb-6 bg-gray-100 bg-clip-border shadow-card cursor-pointer group-hover:blur-sm hover:!blur-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"desc-group flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"image aspect-w-1 aspect-h-1 w-90% overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 items-center justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: article.urlToImage,\n                                            alt: \"\",\n                                            className: \"h-full w-full object-cover object-center bg-cover bg-center\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                            lineNumber: 15,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                        lineNumber: 14,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"container_desc text-secondary flex flex-col p-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            class: \"font-medium\",\n                                            children: article.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: article.url,\n                                className: \"group w-fit mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"btnRead\",\n                                    className: \"middle none center rounded-lg bg-emerald-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg hover:shadow-green-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-32\",\n                                    \"data-ripple-light\": \"true\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, article.id, false, {\n                                fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Valencia\\\\KALBE\\\\Kalbe News\\\\kalnews-final\\\\components\\\\NewsItem.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsItem);\n{}var _c;\n$RefreshReg$(_c, \"NewsItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3NJdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFHekIsTUFBTUMsV0FBVyxTQUFrRDtRQUFqRCxFQUFDQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxJQUFHLEVBQUVDLFdBQVUsRUFBQztJQUM1RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFXQyxPQUFNO2tCQUNoQyw0RUFBQ0Y7WUFBSUMsV0FBVTtzQkFFWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2RFLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxVQUFZO29CQUN2QixxQkFDSSw4REFBQ0w7d0JBQUlFLE9BQU07OzBDQUNQLDhEQUFDRjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDSzs0Q0FDREMsS0FBS0YsUUFBUU4sVUFBVTs0Q0FDdkJTLEtBQUk7NENBQ0pQLFdBQVU7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDRDt3Q0FBSUUsT0FBTTtrREFDUCw0RUFBQ087NENBQUdQLE9BQU07c0RBQWVHLFFBQVFULEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUc5Qyw4REFBQ2M7Z0NBQW1CQyxNQUFNTixRQUFRUCxHQUFHO2dDQUFFRyxXQUFVOzBDQUM3Qyw0RUFBQ1c7b0NBQU9WLE9BQU07b0NBQ1ZELFdBQVU7b0NBQ1ZZLHFCQUFrQjs4Q0FBTzs7Ozs7OytCQUh6QlIsUUFBUVMsRUFBRTs7Ozs7Ozs7Ozs7Z0JBUzFCOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1o7S0FuQ01wQjtBQXFDTiwrREFBZUEsUUFBUUEsRUFBQTtBQUV2QixDQUlxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld3NJdGVtLmpzeD80ZDBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBOZXdzSXRlbSA9ICh7aW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCB1cmxUb0ltYWdlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCIgY2xhc3M9XCJjb250YWluZXItY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LTggXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW5ld3MgZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LTggZ3JvdXBcIj5cclxuICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQteGwgcGItNiBiZy1ncmF5LTEwMCBiZy1jbGlwLWJvcmRlciBzaGFkb3ctY2FyZCBjdXJzb3ItcG9pbnRlciBncm91cC1ob3ZlcjpibHVyLXNtIGhvdmVyOiFibHVyLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2MtZ3JvdXAgZmxleC0xXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LTkwJSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTIwMCB4bDphc3BlY3Qtdy03IHhsOmFzcGVjdC1oLTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudXJsVG9JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGJnLWNvdmVyIGJnLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9kZXNjIHRleHQtc2Vjb25kYXJ5IGZsZXggZmxleC1jb2wgcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb250LW1lZGl1bVwiPnthcnRpY2xlLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e2FydGljbGUuaWR9IGhyZWY9e2FydGljbGUudXJsfSBjbGFzc05hbWU9XCJncm91cCB3LWZpdCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5SZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pZGRsZSBub25lIGNlbnRlciByb3VuZGVkLWxnIGJnLWVtZXJhbGQtODAwIHB5LTMgcHgtNiBmb250LXNhbnMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1lbWVyYWxkLTUwMC8yMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6c2hhZG93LWdyZWVuLTUwMCBmb2N1czpvcGFjaXR5LVswLjg1XSBmb2N1czpzaGFkb3ctbm9uZSBhY3RpdmU6b3BhY2l0eS1bMC44NV0gYWN0aXZlOnNoYWRvdy1ub25lIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpzaGFkb3ctbm9uZSB3LTMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmlwcGxlLWxpZ2h0PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NJdGVtXHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtdC1hdXRvICc+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cIm10LTQgbWItNCBtaWRkbGUgbm9uZSBjZW50ZXIgcm91bmRlZC1sZyBiZy1lbWVyYWxkLTgwMCBweS0zIHB4LTYgZm9udC1zYW5zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctZW1lcmFsZC01MDAvMjAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1ncmVlbi01MDAgZm9jdXM6b3BhY2l0eS1bMC44NV0gZm9jdXM6c2hhZG93LW5vbmUgYWN0aXZlOm9wYWNpdHktWzAuODVdIGFjdGl2ZTpzaGFkb3ctbm9uZSBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6c2hhZG93LW5vbmUgdy0zMlwiIGRhdGEtcmlwcGxlLWxpZ2h0PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL30iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXdzSXRlbSIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsInVybFRvSW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzcyIsImFydGljbGVzIiwibWFwIiwiYXJ0aWNsZSIsImltZyIsInNyYyIsImFsdCIsImg0IiwiYSIsImhyZWYiLCJidXR0b24iLCJkYXRhLXJpcHBsZS1saWdodCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsItem.jsx\n"));

/***/ })

});