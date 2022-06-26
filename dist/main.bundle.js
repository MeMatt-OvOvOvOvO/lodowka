/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tablica\": () => (/* binding */ tablica),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet)\n/* harmony export */ });\n/* harmony import */ var _newMagnet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newMagnet */ \"./ts/newMagnet.ts\");\n/* harmony import */ var _resizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resizable */ \"./ts/resizable.ts\");\n\r\n\r\nvar idek = 0;\r\nvar onBoard = 0;\r\nvar paragMileage = document.createElement(\"p\");\r\nvar paragOnFrigde = document.createElement(\"p\");\r\nvar tablica = [];\r\nvar Magnet = /** @class */ (function () {\r\n    function Magnet(id, txt, height, width, left, top, position, xHeight, xWidth, xRight, xTop) {\r\n        if (id === void 0) { id = idek; }\r\n        if (txt === void 0) { txt = \"Hi, I'm new magnet\"; }\r\n        if (height === void 0) { height = \"200px\"; }\r\n        if (width === void 0) { width = \"200px\"; }\r\n        if (left === void 0) { left = \"100px\"; }\r\n        if (top === void 0) { top = \"100px\"; }\r\n        if (position === void 0) { position = \"absolute\"; }\r\n        if (xHeight === void 0) { xHeight = \"17px\"; }\r\n        if (xWidth === void 0) { xWidth = \"17px\"; }\r\n        if (xRight === void 0) { xRight = \"0px\"; }\r\n        if (xTop === void 0) { xTop = \"0px\"; }\r\n        this.id = id;\r\n        this.txt = txt;\r\n        this.height = height;\r\n        this.width = width;\r\n        this.left = left;\r\n        this.top = top;\r\n        this.position = position;\r\n        this.xHeight = xHeight;\r\n        this.xWidth = xWidth;\r\n        this.xRight = xRight;\r\n        this.xTop = xTop;\r\n    }\r\n    Magnet.deleteMagnet = function (e) {\r\n        onBoard--;\r\n        document.getElementById(\"div\" + e.currentTarget.id).remove();\r\n        paragOnFrigde.innerText = \"on fridge: \" + onBoard.toString();\r\n    };\r\n    Magnet.prototype.createMagnet = function () {\r\n        var div = document.createElement(\"DIV\");\r\n        div.id = \"div\" + idek.toString();\r\n        div.className = \"magnet\";\r\n        div.style.height = this.height;\r\n        div.style.minHeight = this.height;\r\n        div.style.width = this.width;\r\n        div.style.minWidth = this.width;\r\n        div.style.left = this.left;\r\n        div.style.top = this.top;\r\n        div.style.position = this.position;\r\n        var inside = document.createElement(\"DIV\");\r\n        inside.id = \"inside\" + idek.toString();\r\n        inside.className = \"inside\";\r\n        inside.innerText = this.txt;\r\n        var resizable = document.createElement(\"DIV\");\r\n        resizable.id = \"roz\" + idek.toString();\r\n        resizable.className = \"roz\";\r\n        resizable.addEventListener(\"mousemove\", _resizable__WEBPACK_IMPORTED_MODULE_1__.makeResizableDiv);\r\n        var mousePosition;\r\n        var offset = [0, 0];\r\n        var isDown = false;\r\n        inside.addEventListener('mousedown', function (e) {\r\n            isDown = true;\r\n            offset = [\r\n                div.offsetLeft - e.clientX,\r\n                div.offsetTop - e.clientY\r\n            ];\r\n        }, true);\r\n        document.addEventListener('mouseup', function () {\r\n            isDown = false;\r\n        }, true);\r\n        document.addEventListener('mousemove', function (event) {\r\n            event.preventDefault();\r\n            if (isDown) {\r\n                mousePosition = {\r\n                    x: event.clientX,\r\n                    y: event.clientY\r\n                };\r\n                div.style.left = (mousePosition.x + offset[0]) + 'px';\r\n                div.style.top = (mousePosition.y + offset[1]) + 'px';\r\n            }\r\n        }, true);\r\n        var xDelete = document.createElement(\"img\");\r\n        xDelete.id = idek.toString();\r\n        xDelete.src = \"X.png\";\r\n        xDelete.style.position = this.position;\r\n        xDelete.style.height = this.xHeight;\r\n        xDelete.style.width = this.xWidth;\r\n        xDelete.style.right = this.xRight;\r\n        xDelete.style.top = this.xTop;\r\n        xDelete.addEventListener(\"click\", Magnet.deleteMagnet);\r\n        //nowe rzeczyasdfasdf\r\n        var edit = document.createElement(\"img\");\r\n        edit.id = idek.toString();\r\n        edit.src = \"edit.png\";\r\n        edit.style.position = this.position;\r\n        edit.style.height = this.xHeight;\r\n        edit.style.width = this.xWidth;\r\n        edit.style.right = this.xRight;\r\n        edit.style.top = this.xTop + 40;\r\n        edit.addEventListener(\"click\", Magnet.deleteMagnet);\r\n        document.getElementById(\"mainDiv\").appendChild(div);\r\n        document.getElementById(\"div\" + idek.toString()).appendChild(inside);\r\n        document.getElementById(\"inside\" + idek.toString()).appendChild(xDelete);\r\n        document.getElementById(\"inside\" + idek.toString()).appendChild(edit);\r\n        document.getElementById(\"div\" + idek.toString()).appendChild(resizable);\r\n        var mileage = idek + 1;\r\n        paragMileage.innerText = \"mileage: \" + mileage.toString();\r\n        var onFridge = onBoard + 1;\r\n        paragOnFrigde.innerText = \"on fridge: \" + onFridge.toString();\r\n        idek++;\r\n        onBoard++;\r\n    };\r\n    return Magnet;\r\n}());\r\n\r\nvar dokument;\r\ndokument = document.getElementById(\"addMagnet\");\r\ndokument.onclick = _newMagnet__WEBPACK_IMPORTED_MODULE_0__.newMagnet;\r\n// function newMagnet(){\r\n//     var magnet = new Magnet()\r\n//     magnet.createMagnet()\r\n// }\r\nparagMileage.id = \"paragMileage\";\r\nparagMileage.innerText = \"mileage: \" + idek.toString();\r\ndocument.getElementById(\"mainDiv\").appendChild(paragMileage);\r\nparagOnFrigde.id = \"paragOnFrigde\";\r\nparagOnFrigde.innerText = \"on fridge: \" + onBoard.toString();\r\ndocument.getElementById(\"mainDiv\").appendChild(paragOnFrigde);\r\n// function makeResizableDiv(e) {\r\n//     var currentResizer = document.getElementById(e.currentTarget.id)\r\n//     var pomoc = (e.currentTarget.id).split(\"z\");\r\n//     var element = document.getElementById(\"div\" + pomoc[1]);\r\n//     const minimum_size = 100;\r\n//     let original_width = 0;\r\n//     let original_height = 0;\r\n//     let original_x = 0;\r\n//     let original_y = 0;\r\n//     let original_mouse_x = 0;\r\n//     let original_mouse_y = 0;\r\n//     currentResizer.addEventListener('mousedown', function (e) {\r\n//         e.preventDefault()\r\n//         window.addEventListener('mousemove', resize)\r\n//         window.addEventListener('mouseup', stopResize)\r\n//         original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));\r\n//         original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));\r\n//         original_x = element.getBoundingClientRect().left;\r\n//         original_y = element.getBoundingClientRect().top;\r\n//         original_mouse_x = e.pageX;\r\n//         original_mouse_y = e.pageY;\r\n//     })\r\n//     function resize(e) {\r\n//         const width = original_width + (e.pageX - original_mouse_x);\r\n//         const height = original_height + (e.pageY - original_mouse_y)\r\n//         if (width > minimum_size) {\r\n//             element.style.width = width + 'px'\r\n//         }\r\n//         if (height > minimum_size) {\r\n//             element.style.height = height + 'px'\r\n//         }\r\n//     }\r\n//     function stopResize() {\r\n//         for (var i = 0; i < tablica.length; i++) {\r\n//             if ((tablica[i].id).toString() == pomoc[1]) {\r\n//                 tablica[i].hei = element.style.height;\r\n//                 tablica[i].wid = element.style.width;\r\n//             }\r\n//         }\r\n//         window.removeEventListener('mousemove', resize)\r\n//     }\r\n// }\r\n\n\n//# sourceURL=webpack://lodowka/./ts/index.ts?");

/***/ }),

/***/ "./ts/newMagnet.ts":
/*!*************************!*\
  !*** ./ts/newMagnet.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newMagnet\": () => (/* binding */ newMagnet)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\n\r\nfunction newMagnet() {\r\n    var magnet = new _index__WEBPACK_IMPORTED_MODULE_0__.Magnet();\r\n    magnet.createMagnet();\r\n}\r\n\n\n//# sourceURL=webpack://lodowka/./ts/newMagnet.ts?");

/***/ }),

/***/ "./ts/resizable.ts":
/*!*************************!*\
  !*** ./ts/resizable.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeResizableDiv\": () => (/* binding */ makeResizableDiv)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\n\r\nfunction makeResizableDiv(e) {\r\n    var currentResizer = document.getElementById(e.currentTarget.id);\r\n    var pomoc = (e.currentTarget.id).split(\"z\");\r\n    var element = document.getElementById(\"div\" + pomoc[1]);\r\n    var minimum_size = 100;\r\n    var original_width = 0;\r\n    var original_height = 0;\r\n    var original_x = 0;\r\n    var original_y = 0;\r\n    var original_mouse_x = 0;\r\n    var original_mouse_y = 0;\r\n    currentResizer.addEventListener('mousedown', function (e) {\r\n        e.preventDefault();\r\n        window.addEventListener('mousemove', resize);\r\n        window.addEventListener('mouseup', stopResize);\r\n        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));\r\n        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));\r\n        original_x = element.getBoundingClientRect().left;\r\n        original_y = element.getBoundingClientRect().top;\r\n        original_mouse_x = e.pageX;\r\n        original_mouse_y = e.pageY;\r\n    });\r\n    function resize(e) {\r\n        var width = original_width + (e.pageX - original_mouse_x);\r\n        var height = original_height + (e.pageY - original_mouse_y);\r\n        if (width > minimum_size) {\r\n            element.style.width = width + 'px';\r\n        }\r\n        if (height > minimum_size) {\r\n            element.style.height = height + 'px';\r\n        }\r\n    }\r\n    function stopResize() {\r\n        for (var i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.tablica.length; i++) {\r\n            if ((_index__WEBPACK_IMPORTED_MODULE_0__.tablica[i].id).toString() == pomoc[1]) {\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.tablica[i].hei = element.style.height;\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.tablica[i].wid = element.style.width;\r\n            }\r\n        }\r\n        window.removeEventListener('mousemove', resize);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lodowka/./ts/resizable.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/index.ts");
/******/ 	
/******/ })()
;