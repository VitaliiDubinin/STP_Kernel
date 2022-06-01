(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/Main.js":
/*!************************!*\
  !*** ./assets/Main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./assets/pages/Home.js");
/* harmony import */ var _assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/components/ui_components/Navbar */ "./assets/components/ui_components/Navbar.js");
/* harmony import */ var _assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pages/SingleProduct */ "./assets/pages/SingleProduct.js");
/* harmony import */ var _assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/pages/Profile */ "./assets/pages/Profile.js");
/* harmony import */ var _assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/pages/Cart */ "./assets/pages/Cart.js");
/* harmony import */ var _assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pages/CheckOut */ "./assets/pages/CheckOut.js");
/* harmony import */ var _assets_components_ui_components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/components/ui_components/Footer */ "./assets/components/ui_components/Footer.js");
/* harmony import */ var _pages_LogIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/LogIn */ "./assets/pages/LogIn.js");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/SignUp */ "./assets/pages/SignUp.js");



 // import css from "./styles/main.module.css";










function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/:productId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_LogIn__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login/signup",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_SignUp__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null), ","));

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./assets/Main.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // import "./styles/main.module.css";
// import "./styles/pages.module.css";
// import "./styles/footer.module.css";
// import "./styles/navbar.module.css";
// import "./styles/producCard.module.css";
// start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/ui_components/Footer.js":
/*!***************************************************!*\
  !*** ./assets/components/ui_components/Footer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "./footer.module.css";

function Footer() {
  // return <div className={css.footerContainer}>legal stuf and conctact links</div>;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footerContainer"
  }, "legal stuf and conctact links");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/components/ui_components/Navbar.js":
/*!***************************************************!*\
  !*** ./assets/components/ui_components/Navbar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

 // import css from './navbar.module.css';

function Navbar() {
  return (
    /*#__PURE__*/
    // <div className={css.navContainer}>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "navContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "logoContainer"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
      className: "navPanel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, " Home ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/profile"
    }, " Profile ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/cart"
    }, " Cart ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/login"
    }, " Log in ")))))
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/components/ui_components/ProductCard.js":
/*!********************************************************!*\
  !*** ./assets/components/ui_components/ProductCard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
 // import css from './producCard.module.css';



var randPicAPI = 'https://source.unsplash.com/500x400/?'; //head api

function ProductCard(_ref) {
  var productName = _ref.productName,
      shortDescription = _ref.shortDescription,
      totalAmount = _ref.totalAmount,
      units = _ref.units,
      productPrice = _ref.productPrice,
      _ref$imageUrl = _ref.imageUrl,
      imageUrl = _ref$imageUrl === void 0 ? null : _ref$imageUrl;
  //const randImg = axios.get(randPicAPI + toLowerCase(productName));
  //const image = imageUrl ? imageUrl : randImg;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imageUrl,
    className: "image",
    alt: "No " + productName + " image available."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productBodyContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "productName"
  }, " ", productName, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "shortDescription"
  }, shortDescription, ". ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "In storage:", totalAmount, units), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cardFooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/:productId"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "seeMore"
  }, "see more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "addToCartBtn"
  }, " ", "add", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productPrice"
  }, productPrice, "\u20AC/", units))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard); //productName
//shortDescription
//description
//totalAmount
//units
//image
//id

/***/ }),

/***/ "./assets/pages/Cart.js":
/*!******************************!*\
  !*** ./assets/pages/Cart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "../styles/pages.module.css";

function Cart() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "'-add to state items added to the cart'"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "'-read items from state '"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "'-show data with .map function'"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "'-on submit delete from database'"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./assets/pages/CheckOut.js":
/*!**********************************!*\
  !*** ./assets/pages/CheckOut.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CheckOut() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "CheckOut");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckOut);

/***/ }),

/***/ "./assets/pages/Home.js":
/*!******************************!*\
  !*** ./assets/pages/Home.js ***!
  \******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/s2200120/Desktop/STP_Kernel/web/assets/pages/Home.js: Unexpected token (235:46)\n\n\u001b[0m \u001b[90m 233 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"browser\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 234 |\u001b[39m         {productFilter\u001b[33m.\u001b[39mmap((product) \u001b[33m=>\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 235 |\u001b[39m           \u001b[33m<\u001b[39m\u001b[33mProductCard\u001b[39m key\u001b[33m=\u001b[39m{product\u001b[33m.\u001b[39mid} data\u001b[33m=\u001b[39m{\u001b[33m...\u001b[39mproduct} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 236 |\u001b[39m         ))}\u001b[0m\n\u001b[0m \u001b[90m 237 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 238 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:358:12)\n    at Parser.raise (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:3336:19)\n    at Parser.unexpected (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:3374:16)\n    at Parser.parseExprAtom (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:13120:22)\n    at Parser.parseExprAtom (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:8036:20)\n    at Parser.parseExprSubscripts (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:12645:23)\n    at Parser.parseUpdate (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:12624:21)\n    at Parser.parseMaybeUnary (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:12595:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/s2200120/Desktop/STP_Kernel/web/node_modules/@babel/parser/lib/index.js:12389:61)");

/***/ }),

/***/ "./assets/pages/LogIn.js":
/*!*******************************!*\
  !*** ./assets/pages/LogIn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "../styles/login.module.css";

function LogIn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-container log-in-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    placeholder: "Password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Log In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay-panel overlay-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Seller or Farmer login/signup from here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "So we can put some instruction for the sellers.")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

/***/ }),

/***/ "./assets/pages/Profile.js":
/*!*********************************!*\
  !*** ./assets/pages/Profile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "../styles/pages.module.css";

function Profile() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pageContainer"
  }, "Profile");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./assets/pages/SignUp.js":
/*!********************************!*\
  !*** ./assets/pages/SignUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SignUp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "SignUp");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./assets/pages/SingleProduct.js":
/*!***************************************!*\
  !*** ./assets/pages/SingleProduct.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui_components/ProductCard */ "./assets/components/ui_components/ProductCard.js");



 // import css from "../styles/pages.module.css";

function SingleProduct() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var prduct = location.state.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "pageContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, _components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"].name), "SingleProduct Name");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-7e1d13"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REYsZUFFRSx3SEFGRixDQURGLENBREYsQ0FYRixDQURGO0FBc0JEOztBQUVELGlFQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztDQzNCQTs7QUFDQSxTQUFTSixPQUFULEdBQW1CO0VBQ2pCLG9CQUFPO0lBQUssU0FBUyxFQUFDO0VBQWYsYUFBUDtBQUNEOztBQUVELGlFQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLFNBQVNLLE1BQVQsR0FBa0I7RUFDaEIsb0JBQ0UsaUZBREY7QUFHRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7Q0FHQTs7QUFFQSxTQUFTTixhQUFULEdBQXlCO0VBQ3ZCLElBQU04QixRQUFRLEdBQUdELDZEQUFXLEVBQTVCO0VBQ0EsSUFBTUUsTUFBTSxHQUFHRCxRQUFRLENBQUNFLEtBQVQsQ0FBZUMsSUFBOUI7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLHVFQUFLYixrRkFBTCxDQURGLHVCQURGO0FBTUQ7O0FBRUQsaUVBQWVwQixhQUFmOzs7Ozs7Ozs7Ozs7QUNsQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0xvZ0luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ0luIGZyb20gXCIuL3BhZ2VzL0xvZ0luXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuL3BhZ2VzL1NpZ25VcFwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi86cHJvZHVjdElkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGVsZW1lbnQ9ezxQcm9maWxlIC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0L2NoZWNrb3V0XCIgZWxlbWVudD17PENoZWNrT3V0IC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ0luLz59PjwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luL3NpZ251cFwiIGVsZW1lbnQ9ezxTaWduVXAvPn0+PC9Sb3V0ZT5cbiAgICAgIDwvUm91dGVzPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz4sXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9mb290ZXIubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL3Byb2R1Y0NhcmQubW9kdWxlLmNzc1wiO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBcIi4vTWFpblwiO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgLy8gcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3MuZm9vdGVyQ29udGFpbmVyfT5sZWdhbCBzdHVmIGFuZCBjb25jdGFjdCBsaW5rczwvZGl2PjtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyQ29udGFpbmVyXCI+bGVnYWwgc3R1ZiBhbmQgY29uY3RhY3QgbGlua3M8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vLyBpbXBvcnQgY3NzIGZyb20gJy4vbmF2YmFyLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIHJldHVybiAoXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9e2Nzcy5uYXZDb250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Nzcy5sb2dvQ29udGFpbmVyfT48L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29Db250YWluZXJcIj48L2Rpdj5cbiAgICAgIHsvKiA8bmF2IGNsYXNzTmFtZT17Y3NzLm5hdlBhbmVsfT4gKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlBhbmVsXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj4gSG9tZSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9maWxlXCI+IFByb2ZpbGUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FydFwiPiBDYXJ0IDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+IExvZyBpbiA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIj4gU2lnbiBvdXQgPC9hPiAqL31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gJy4vcHJvZHVjQ2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCByYW5kUGljQVBJID0gJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS81MDB4NDAwLz8nOyAvL2hlYWQgYXBpXG5cbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdE5hbWUsIHNob3J0RGVzY3JpcHRpb24sIHRvdGFsQW1vdW50LCB1bml0cywgcHJvZHVjdFByaWNlLCBpbWFnZVVybCA9IG51bGwgfSkge1xuXG4gIC8vY29uc3QgcmFuZEltZyA9IGF4aW9zLmdldChyYW5kUGljQVBJICsgdG9Mb3dlckNhc2UocHJvZHVjdE5hbWUpKTtcbiAgLy9jb25zdCBpbWFnZSA9IGltYWdlVXJsID8gaW1hZ2VVcmwgOiByYW5kSW1nO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0Q2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0SW1hZ2VcIj48aW1nIHNyYz17aW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PXtcIk5vIFwiICsgcHJvZHVjdE5hbWUgKyBcIiBpbWFnZSBhdmFpbGFibGUuXCJ9IC8+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RCb2R5Q29udGFpbmVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0TmFtZVwiPiB7cHJvZHVjdE5hbWV9IDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnREZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtzaG9ydERlc2NyaXB0aW9ufS4gPGJyIC8+XG4gICAgICAgICAgSW4gc3RvcmFnZTp7dG90YWxBbW91bnR9XG4gICAgICAgICAge3VuaXRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkRm9vdGVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvOnByb2R1Y3RJZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VlTW9yZVwiPnNlZSBtb3JlPC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhZGRUb0NhcnRCdG5cIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIGFkZHtcIiBcIn0gXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0UHJpY2V94oKsL3t1bml0c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG5cbi8vcHJvZHVjdE5hbWVcbi8vc2hvcnREZXNjcmlwdGlvblxuLy9kZXNjcmlwdGlvblxuLy90b3RhbEFtb3VudFxuLy91bml0c1xuLy9pbWFnZVxuLy9pZFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5cblxuZnVuY3Rpb24gQ2FydCgpIHtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgPHA+Q2FydDwvcD5cbiAgICAgIDxwPictYWRkIHRvIHN0YXRlIGl0ZW1zIGFkZGVkIHRvIHRoZSBjYXJ0JzwvcD5cbiAgICAgIDxwPictcmVhZCBpdGVtcyBmcm9tIHN0YXRlICc8L3A+XG4gICAgICA8cD4nLXNob3cgZGF0YSB3aXRoIC5tYXAgZnVuY3Rpb24nPC9wPlxuICAgICAgPHA+Jy1vbiBzdWJtaXQgZGVsZXRlIGZyb20gZGF0YWJhc2UnPC9wPlxuICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ2hlY2tPdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5DaGVja091dDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrT3V0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ0luKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXIgbG9nLWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgPGgxPkxvZ2luPC9oMT5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG4gICAgICAgICAgPGJ1dHRvbj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XG4gICAgICAgICAgICA8aDE+U2VsbGVyIG9yIEZhcm1lciBsb2dpbi9zaWdudXAgZnJvbSBoZXJlPC9oMT5cbiAgICAgICAgICAgIDxwPlNvIHdlIGNhbiBwdXQgc29tZSBpbnN0cnVjdGlvbiBmb3IgdGhlIHNlbGxlcnMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dJbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5mdW5jdGlvbiBQcm9maWxlKCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+UHJvZmlsZTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlNpZ25VcDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuXG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVQcm9kdWN0KCkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHByZHVjdCA9IGxvY2F0aW9uLnN0YXRlLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5cbiAgICAgIDxoMT57UHJvZHVjdENhcmQubmFtZX08L2gxPlxuICAgICAgU2luZ2xlUHJvZHVjdCBOYW1lXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiTmF2YmFyIiwiU2luZ2xlUHJvZHVjdCIsIlByb2ZpbGUiLCJDYXJ0IiwiQ2hlY2tPdXQiLCJGb290ZXIiLCJMb2dJbiIsIlNpZ25VcCIsIk1haW4iLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJMaW5rIiwiYXhpb3MiLCJyYW5kUGljQVBJIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0TmFtZSIsInNob3J0RGVzY3JpcHRpb24iLCJ0b3RhbEFtb3VudCIsInVuaXRzIiwicHJvZHVjdFByaWNlIiwiaW1hZ2VVcmwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxvY2F0aW9uIiwibG9jYXRpb24iLCJwcmR1Y3QiLCJzdGF0ZSIsImRhdGEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==