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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/dist/esm/api/navigation.react-server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nfunction middleware(request) {\n    const auth = \"\";\n    if (!auth) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL('/', request.url));\n    }\n}\n//admin route and under admin routes\n//if you dont export config function middleware effect all route\nconst config = {\n    matcher: [\n        '/admin',\n        '/admin/(.*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNBO0FBRTNCLFNBQVNFLFdBQVdDLE9BQU87SUFDeEMsTUFBTUMsT0FBTztJQUNiLElBQUksQ0FBQ0EsTUFBTTtRQUNULE9BQU9ILHFEQUFZQSxDQUFDRCxRQUFRLENBQUMsSUFBSUssSUFBSSxLQUFLRixRQUFRRyxHQUFHO0lBQ3ZEO0FBQ0Y7QUFHQSxvQ0FBb0M7QUFDcEMsZ0VBQWdFO0FBQ3pELE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFVO0tBQWM7QUFDcEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS5qcz9hNDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcbiAgY29uc3QgYXV0aCA9IFwiXCJcbiAgaWYgKCFhdXRoKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvJywgcmVxdWVzdC51cmwpKVxuICB9XG59XG5cblxuLy9hZG1pbiByb3V0ZSBhbmQgdW5kZXIgYWRtaW4gcm91dGVzXG4vL2lmIHlvdSBkb250IGV4cG9ydCBjb25maWcgZnVuY3Rpb24gbWlkZGxld2FyZSBlZmZlY3QgYWxsIHJvdXRlXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy9hZG1pbicsICcvYWRtaW4vKC4qKSddXG59Il0sIm5hbWVzIjpbInJlZGlyZWN0IiwiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJhdXRoIiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});