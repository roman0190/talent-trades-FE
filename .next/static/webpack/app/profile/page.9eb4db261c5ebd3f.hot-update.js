"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./app/components/session.tsx":
/*!************************************!*\
  !*** ./app/components/session.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Session; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Session(param) {\n    let { children } = param;\n    _s();\n    const [initilizing, setInitilizing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"Token\");\n        console.log(token);\n        if (!token) {\n            window.location.href = \"/Auth/signIn\";\n        } else {\n            const time = 1000;\n            const timeoutId = setTimeout(()=>{\n                localStorage.removeItem(\"Token\");\n                window.location.href = \"/Auth/signIn\";\n            }, time);\n            setInitilizing(false);\n            return ()=>clearTimeout(timeoutId);\n        }\n    }, []);\n    if (initilizing) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/components/session.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n}\n_s(Session, \"Y90/AeYCjMTGoBl9cIUCqIjCAhU=\");\n_c = Session;\nvar _c;\n$RefreshReg$(_c, \"Session\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Nlc3Npb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMyQztBQUU1QixTQUFTRSxRQUFRLEtBQWM7UUFBZCxFQUFDQyxRQUFRLEVBQUssR0FBZDs7SUFDOUIsTUFBTSxDQUFDQyxhQUFZQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTlDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQ0MsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLElBQUksQ0FBQ0EsT0FBTztZQUNWSyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUN6QixPQUFPO1lBRUwsTUFBTUMsT0FBTztZQUNiLE1BQU1DLFlBQVlDLFdBQVc7Z0JBQzNCVCxhQUFhVSxVQUFVLENBQUM7Z0JBQ3hCTixPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztZQUN6QixHQUFHQztZQUNIVCxlQUFlO1lBQ2YsT0FBTyxJQUFNYSxhQUFhSDtRQUM1QjtJQUNGLEdBQUcsRUFBRTtJQUNMLElBQUdYLGFBQVk7UUFDYixxQkFBTztzQkFDSCw0RUFBQ2U7Ozs7OztJQUVQO0lBQ0EscUJBQU87a0JBQUdoQjs7QUFDWjtHQXpCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3Nlc3Npb24udHN4PzI0YzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbih7Y2hpbGRyZW59OmFueSkge1xuICBjb25zdCBbaW5pdGlsaXppbmcsc2V0SW5pdGlsaXppbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9BdXRoL3NpZ25Jbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgY29uc3QgdGltZSA9IDEwMDA7IFxuICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdUb2tlbicpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvQXV0aC9zaWduSW4nO1xuICAgICAgfSwgdGltZSk7XG4gICAgICBzZXRJbml0aWxpemluZyhmYWxzZSlcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgaWYoaW5pdGlsaXppbmcpe1xuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvPlxuICB9XG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZXNzaW9uIiwiY2hpbGRyZW4iLCJpbml0aWxpemluZyIsInNldEluaXRpbGl6aW5nIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRpbWUiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlSXRlbSIsImNsZWFyVGltZW91dCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/session.tsx\n"));

/***/ })

});