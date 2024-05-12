"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Main/manage-announcement/page",{

/***/ "(app-pages-browser)/./app/Main/manage-announcement/components/AllAnnouncements.tsx":
/*!**********************************************************************!*\
  !*** ./app/Main/manage-announcement/components/AllAnnouncements.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _CreatePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreatePost */ \"(app-pages-browser)/./app/Main/manage-announcement/components/CreatePost.tsx\");\n/* harmony import */ var _app_components_DeleteConfirmationPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/DeleteConfirmationPost */ \"(app-pages-browser)/./app/components/DeleteConfirmationPost.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AllAnnouncements = (param)=>{\n    let { initialData } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [itemId, setitemId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const token = localStorage.getItem(\"Token\");\n    function formatTime(timestamp) {\n        const date = new Date(timestamp);\n        const options = {\n            year: \"numeric\",\n            month: \"short\",\n            day: \"numeric\",\n            hour: \"2-digit\",\n            minute: \"2-digit\",\n            second: \"2-digit\",\n            hour12: false,\n            timeZone: \"Asia/Dhaka\"\n        };\n        return date.toLocaleString(\"en-US\", options);\n    }\n    const fetchMyPost = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:4000/admin/view-profile/own\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                },\n                params: {\n                    include: \"announcements\"\n                }\n            });\n            const announcements = response.data.announcements;\n            const appendedAnnouncements = announcements.map((announcement)=>({\n                    id: announcement.id,\n                    title: announcement.title,\n                    content: announcement.content,\n                    time: announcement.time\n                }));\n            setData(appendedAnnouncements);\n            setShowModal(true);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const handleDeleteClick = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:4000/admin/delete-announcement/\".concat(itemId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                },\n                params: {\n                    include: \"announcements\"\n                }\n            });\n            setData((prevData)=>prevData.filter((item)=>item.id !== itemId));\n        } catch (error) {\n            console.error(\"Error deleting announcement:\", error);\n        }\n    };\n    const fetchAllPost = async ()=>{\n        setShowModal(false);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:4000/admin/all-announcement\");\n            const jsondata = response.data;\n            setData(jsondata);\n        } catch (error) {\n            console.error(\"Error fetching all announcements:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full gap-5 flex flex-col items-center  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2 flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreatePost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setData: setData\n                        }, void 0, false, {\n                            fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        !showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>fetchMyPost(),\n                            className: \"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 \",\n                            type: \"button\",\n                            children: \"See My Announcements\"\n                        }, void 0, false, {\n                            fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined),\n                        showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>fetchAllPost(),\n                            className: \"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 \",\n                            type: \"button\",\n                            children: \"See All Announcements\"\n                        }, void 0, false, {\n                            fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-full grid grid-cols-1 gap-3  \",\n                    children: data.sort((a, b)=>new Date(b.time) - new Date(a.time)).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-1 p-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"text-gray-200 body-font\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container px-1 py-1 mx-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"h-full rounded-xl shadow-cla-blue bg-gradient-to-r bg-indigo-50 to-blue-50 overflow-hidden\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"p-6\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                                className: \"text-lg text-indigo-600\",\n                                                                children: item.title\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                                lineNumber: 123,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-gray-700 leading-relaxed mb-3\",\n                                                                children: item.content\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                                lineNumber: 126,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"flex items-center flex-wrap\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                                lineNumber: 129,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-gray-500 text-sm mt-2\",\n                                                                    children: [\n                                                                        \"Time: \",\n                                                                        formatTime(item.time)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                                    lineNumber: 131,\n                                                                    columnNumber: 31\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                                lineNumber: 130,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            showModal && !showDeleteModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: ()=>{\n                                                                    setShowDeleteModal(true);\n                                                                    setitemId(item.id);\n                                                                },\n                                                                className: \"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2\",\n                                                                children: \"Delete\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                                lineNumber: 136,\n                                                                columnNumber: 31\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                        lineNumber: 122,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                                lineNumber: 120,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_DeleteConfirmationPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    showModal: showDeleteModal,\n                                    setShowModal: setShowDeleteModal,\n                                    handleDelete: handleDeleteClick\n                                }, void 0, false, {\n                                    fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/romanhowladar/Desktop/Advance Web/talent-trades-FE/app/Main/manage-announcement/components/AllAnnouncements.tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AllAnnouncements, \"kz0jg/nYRWJFsbM4m9T/nLDQ1aU=\");\n_c = AllAnnouncements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllAnnouncements);\nvar _c;\n$RefreshReg$(_c, \"AllAnnouncements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9NYWluL21hbmFnZS1hbm5vdW5jZW1lbnQvY29tcG9uZW50cy9BbGxBbm5vdW5jZW1lbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDZDtBQUNZO0FBQ3VDO0FBRTdFLE1BQU1LLG1CQUFtQjtRQUFDLEVBQUVDLFdBQVcsRUFBTzs7SUFDNUMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDSztJQUNqQyxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDVSxpQkFBaUJDLG1CQUFtQixHQUFHWCwrQ0FBUUEsQ0FBVTtJQUNoRSxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFDckMsTUFBTWMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO0lBRW5DLFNBQVNDLFdBQVdDLFNBQVM7UUFDM0IsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUN0QixNQUFNRyxVQUFVO1lBQ2RDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsVUFBVTtRQUNaO1FBQ0EsT0FBT1YsS0FBS1csY0FBYyxDQUFDLFNBQVNUO0lBQ3RDO0lBRUEsTUFBTVUsY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNL0IsNkNBQUtBLENBQUNnQyxHQUFHLENBQzlCLGdEQUNBO2dCQUNFQyxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5yQjtnQkFDM0I7Z0JBQ0FzQixRQUFRO29CQUNOQyxTQUFTO2dCQUNYO1lBQ0Y7WUFFRixNQUFNQyxnQkFBZ0JOLFNBQVMxQixJQUFJLENBQUNnQyxhQUFhO1lBQ2pELE1BQU1DLHdCQUF3QkQsY0FBY0UsR0FBRyxDQUFDLENBQUNDLGVBQWtCO29CQUNqRUMsSUFBSUQsYUFBYUMsRUFBRTtvQkFDbkJDLE9BQU9GLGFBQWFFLEtBQUs7b0JBQ3pCQyxTQUFTSCxhQUFhRyxPQUFPO29CQUM3QkMsTUFBTUosYUFBYUksSUFBSTtnQkFDekI7WUFDQXRDLFFBQVFnQztZQUNSOUIsYUFBYTtRQUNmLEVBQUUsT0FBT3FDLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLE1BQU1FLG9CQUFvQjtRQUN4QixJQUFJO1lBQ0YsTUFBTS9DLDZDQUFLQSxDQUFDZ0QsTUFBTSxDQUNoQixtREFBMEQsT0FBUHJDLFNBQ25EO2dCQUNFc0IsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOckI7Z0JBQzNCO2dCQUNBc0IsUUFBUTtvQkFDTkMsU0FBUztnQkFDWDtZQUNGO1lBRUY5QixRQUFRLENBQUMyQyxXQUFhQSxTQUFTQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1YsRUFBRSxLQUFLOUI7UUFDOUQsRUFBRSxPQUFPa0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBRUEsTUFBTU8sZUFBZTtRQUNuQjVDLGFBQWE7UUFDYixJQUFJO1lBQ0YsTUFBTXVCLFdBQVcsTUFBTS9CLDZDQUFLQSxDQUFDZ0MsR0FBRyxDQUM5QjtZQUVGLE1BQU1xQixXQUFXdEIsU0FBUzFCLElBQUk7WUFDOUJDLFFBQVErQztRQUNWLEVBQUUsT0FBT1IsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMscUNBQXFDQTtRQUNyRDtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNTO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN0RCxtREFBVUE7NEJBQUNLLFNBQVNBOzs7Ozs7d0JBQ3BCLENBQUNDLDJCQUNBLDhEQUFDaUQ7NEJBQ0NDLFNBQVMsSUFBTTNCOzRCQUNmeUIsV0FBVTs0QkFDVkcsTUFBSztzQ0FDTjs7Ozs7O3dCQUlGbkQsMkJBQ0MsOERBQUNpRDs0QkFDQ0MsU0FBUyxJQUFNTDs0QkFDZkcsV0FBVTs0QkFDVkcsTUFBSztzQ0FDTjs7Ozs7Ozs7Ozs7OzhCQUtMLDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDWmxELEtBQ0VzRCxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTSxJQUFJMUMsS0FBSzBDLEVBQUVqQixJQUFJLElBQUksSUFBSXpCLEtBQUt5QyxFQUFFaEIsSUFBSSxHQUNqREwsR0FBRyxDQUFDLENBQUNZLE1BQVdXLHNCQUNmLDhEQUFDUjs0QkFBZ0JDLFdBQVU7OzhDQUN6Qiw4REFBQ1E7b0NBQVFSLFdBQVU7OENBQ2pCLDRFQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0Q7c0RBQ0MsNEVBQUNBOzBEQUNDLDRFQUFDQTtvREFBSUMsV0FBVTs4REFDYiw0RUFBQ0Q7d0RBQUlDLFdBQVU7OzBFQUNiLDhEQUFDTTtnRUFBRU4sV0FBVTswRUFDVkosS0FBS1QsS0FBSzs7Ozs7OzBFQUViLDhEQUFDc0I7Z0VBQUVULFdBQVU7MEVBQ1ZKLEtBQUtSLE9BQU87Ozs7OzswRUFFZiw4REFBQ1c7Z0VBQUlDLFdBQVU7Ozs7OzswRUFDZiw4REFBQ0Q7MEVBQ0MsNEVBQUNBO29FQUFJQyxXQUFVOzt3RUFBNkI7d0VBQ25DdkMsV0FBV21DLEtBQUtQLElBQUk7Ozs7Ozs7Ozs7Ozs0REFHOUJyQyxhQUFhLENBQUNFLGlDQUNiLDhEQUFDK0M7Z0VBQ0NDLFNBQVM7b0VBQ1AvQyxtQkFBbUI7b0VBQ25CRSxVQUFVdUMsS0FBS1YsRUFBRTtnRUFDbkI7Z0VBQ0FjLFdBQVU7MEVBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBVWYsOERBQUNyRCw4RUFBc0JBO29DQUNyQkssV0FBV0U7b0NBQ1hELGNBQWNFO29DQUNkdUQsY0FBY2xCOzs7Ozs7OzJCQXZDUmU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0N4QjtHQTVKTTNEO0tBQUFBO0FBOEpOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL01haW4vbWFuYWdlLWFubm91bmNlbWVudC9jb21wb25lbnRzL0FsbEFubm91bmNlbWVudHMudHN4PzE3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gXCIuL0NyZWF0ZVBvc3RcIjtcbmltcG9ydCBEZWxldGVDb25maXJtYXRpb25Qb3N0IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0RlbGV0ZUNvbmZpcm1hdGlvblBvc3RcIjtcblxuY29uc3QgQWxsQW5ub3VuY2VtZW50cyA9ICh7IGluaXRpYWxEYXRhIH06IGFueSkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpdGVtSWQsIHNldGl0ZW1JZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpO1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZXN0YW1wKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICAgIHRpbWVab25lOiBcIkFzaWEvRGhha2FcIiwgLy8gQmFuZ2xhZGVzaGkgdGltZSB6b25lXG4gICAgfTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hNeVBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hZG1pbi92aWV3LXByb2ZpbGUvb3duXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaW5jbHVkZTogXCJhbm5vdW5jZW1lbnRzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFubm91bmNlbWVudHMgPSByZXNwb25zZS5kYXRhLmFubm91bmNlbWVudHM7XG4gICAgICBjb25zdCBhcHBlbmRlZEFubm91bmNlbWVudHMgPSBhbm5vdW5jZW1lbnRzLm1hcCgoYW5ub3VuY2VtZW50KSA9PiAoe1xuICAgICAgICBpZDogYW5ub3VuY2VtZW50LmlkLFxuICAgICAgICB0aXRsZTogYW5ub3VuY2VtZW50LnRpdGxlLFxuICAgICAgICBjb250ZW50OiBhbm5vdW5jZW1lbnQuY29udGVudCxcbiAgICAgICAgdGltZTogYW5ub3VuY2VtZW50LnRpbWUsXG4gICAgICB9KSk7XG4gICAgICBzZXREYXRhKGFwcGVuZGVkQW5ub3VuY2VtZW50cyk7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYWRtaW4vZGVsZXRlLWFubm91bmNlbWVudC8ke2l0ZW1JZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFwiYW5ub3VuY2VtZW50c1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBzZXREYXRhKChwcmV2RGF0YSkgPT4gcHJldkRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpdGVtSWQpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGFubm91bmNlbWVudDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaEFsbFBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FkbWluL2FsbC1hbm5vdW5jZW1lbnRcIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGpzb25kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIHNldERhdGEoanNvbmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYWxsIGFubm91bmNlbWVudHM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGdhcC01IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXhcIj5cbiAgICAgICAgICA8Q3JlYXRlUG9zdCBzZXREYXRhPXtzZXREYXRhfSAvPlxuICAgICAgICAgIHshc2hvd01vZGFsICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hNeVBvc3QoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG0tMiB0ZXh0LWNlbnRlciBkYXJrOmJnLWdyZWVuLTYwMCBkYXJrOmhvdmVyOmJnLWdyZWVuLTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JlZW4tODAwIFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWUgTXkgQW5ub3VuY2VtZW50c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hBbGxQb3N0KCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtLTIgdGV4dC1jZW50ZXIgZGFyazpiZy1ncmVlbi02MDAgZGFyazpob3ZlcjpiZy1ncmVlbi03MDAgZGFyazpmb2N1czpyaW5nLWdyZWVuLTgwMCBcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VlIEFsbCBBbm5vdW5jZW1lbnRzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTMgIFwiPlxuICAgICAgICAgIHtkYXRhXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi50aW1lKSAtIG5ldyBEYXRlKGEudGltZSkpXG4gICAgICAgICAgICAubWFwKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJteS0xIHAtMVwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgYm9keS1mb250XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC0xIHB5LTEgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLXhsIHNoYWRvdy1jbGEtYmx1ZSBiZy1ncmFkaWVudC10by1yIGJnLWluZGlnby01MCB0by1ibHVlLTUwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1pbmRpZ28tNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBsZWFkaW5nLXJlbGF4ZWQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc20gbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1lOiB7Zm9ybWF0VGltZShpdGVtLnRpbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAhc2hvd0RlbGV0ZU1vZGFsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGVNb2RhbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRpdGVtSWQoaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtdC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGVsZXRlQ29uZmlybWF0aW9uUG9zdFxuICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93RGVsZXRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dEZWxldGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbEFubm91bmNlbWVudHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ3JlYXRlUG9zdCIsIkRlbGV0ZUNvbmZpcm1hdGlvblBvc3QiLCJBbGxBbm5vdW5jZW1lbnRzIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsIml0ZW1JZCIsInNldGl0ZW1JZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvcm1hdFRpbWUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIm9wdGlvbnMiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiaG91cjEyIiwidGltZVpvbmUiLCJ0b0xvY2FsZVN0cmluZyIsImZldGNoTXlQb3N0IiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBhcmFtcyIsImluY2x1ZGUiLCJhbm5vdW5jZW1lbnRzIiwiYXBwZW5kZWRBbm5vdW5jZW1lbnRzIiwibWFwIiwiYW5ub3VuY2VtZW50IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJkZWxldGUiLCJwcmV2RGF0YSIsImZpbHRlciIsIml0ZW0iLCJmZXRjaEFsbFBvc3QiLCJqc29uZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwic29ydCIsImEiLCJiIiwiaW5kZXgiLCJzZWN0aW9uIiwicCIsImhhbmRsZURlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Main/manage-announcement/components/AllAnnouncements.tsx\n"));

/***/ })

});