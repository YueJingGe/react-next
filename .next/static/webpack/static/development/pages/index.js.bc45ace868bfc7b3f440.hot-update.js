webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Product.tsx":
/*!************************************!*\
  !*** ./src/components/Product.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\yuejingge\\test\\react-next\\src\\components\\Product.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * 产品定义接口
 */

var Product = function Product(props) {
  return __jsx("div", {
    className: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h2", {
    className: "product__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.product.name), __jsx("p", {
    className: "product__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.product.description), __jsx("img", {
    src: props.product.image,
    alt: "",
    className: "product__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "product__price-button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "product__price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.product.price.toFixed(2), "\u5143"), __jsx("button", {
    className: "snipcart-add-item product__button",
    "data-item-id": props.product.id,
    "data-item-name": props.product.name,
    "data-item-price": props.product.price,
    "data-item-url": props.router.pathname,
    "data-item-image": props.product.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u52A0\u5165\u8D2D\u7269\u8F66")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Product));

/***/ })

})
//# sourceMappingURL=index.js.bc45ace868bfc7b3f440.hot-update.js.map