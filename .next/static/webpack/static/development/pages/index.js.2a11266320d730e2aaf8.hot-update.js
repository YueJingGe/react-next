webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/ProductList.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./src/components/Product.tsx");
var _jsxFileName = "D:\\yuejingge\\test\\react-next\\src\\components\\ProductList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * 产品列表
 * @param props 
 */

var ProductList = function ProductList(props) {
  return __jsx("div", {
    className: "product_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.products.map(function (product, index) {
    return __jsx(_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=index.js.2a11266320d730e2aaf8.hot-update.js.map