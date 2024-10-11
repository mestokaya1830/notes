"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/dist/esm/api/navigation.react-server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nfunction middleware(request) {\n    const auth = \"mesto\";\n    if (!auth) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL('/', request.url));\n    }\n}\n//admin route and under admin routes\n//if you dont export config function middleware effect all route\nconst config = {\n    matcher: [\n        '/admin',\n        '/admin/(.*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNBO0FBRTNCLFNBQVNFLFdBQVdDLE9BQU87SUFDeEMsTUFBTUMsT0FBTztJQUNiLElBQUksQ0FBQ0EsTUFBTTtRQUNULE9BQU9ILHFEQUFZQSxDQUFDRCxRQUFRLENBQUMsSUFBSUssSUFBSSxLQUFLRixRQUFRRyxHQUFHO0lBQ3ZEO0FBQ0Y7QUFHQSxvQ0FBb0M7QUFDcEMsZ0VBQWdFO0FBQ3pELE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFVO0tBQWM7QUFDcEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS5qcz9hNDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcbiAgY29uc3QgYXV0aCA9IFwibWVzdG9cIlxuICBpZiAoIWF1dGgpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXF1ZXN0LnVybCkpXG4gIH1cbn1cblxuXG4vL2FkbWluIHJvdXRlIGFuZCB1bmRlciBhZG1pbiByb3V0ZXNcbi8vaWYgeW91IGRvbnQgZXhwb3J0IGNvbmZpZyBmdW5jdGlvbiBtaWRkbGV3YXJlIGVmZmVjdCBhbGwgcm91dGVcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnL2FkbWluJywgJy9hZG1pbi8oLiopJ11cbn0iXSwibmFtZXMiOlsicmVkaXJlY3QiLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImF1dGgiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});