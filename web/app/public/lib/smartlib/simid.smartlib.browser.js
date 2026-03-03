"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("simidSmartLibModule", [], factory);
	else if(typeof exports === 'object')
		exports["simidSmartLibModule"] = factory();
	else
		root["simidSmartLibModule"] = factory();
})((function() { return (typeof self !== 'undefined' ? self : global)})(), function() {
return ((function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] = (function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] || []).push([["simid"],{

/***/ "./src/ad/simid/BrowserSimidControllerAdapter.js":
/*!*******************************************************!*\
  !*** ./src/ad/simid/BrowserSimidControllerAdapter.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BrowserSimidControllerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var simid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! simid */ "./src_core/index.simid.js");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core */ "./src_core/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }













function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var TAG = 'BpkBrowserSimidControllerAdapter';
var BrowserSimidControllerAdapter = /*#__PURE__*/function (_SimidControllerAdapt) {
  function BrowserSimidControllerAdapter() {
    var _this;
    _classCallCheck(this, BrowserSimidControllerAdapter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, BrowserSimidControllerAdapter, [].concat(args));
    _defineProperty(_this, "simidController", void 0);
    _defineProperty(_this, "allowedOrigin", void 0);
    _defineProperty(_this, "postMessageCallback", void 0);
    return _this;
  }
  _inherits(BrowserSimidControllerAdapter, _SimidControllerAdapt);
  return _createClass(BrowserSimidControllerAdapter, [{
    key: "getName",
    value: function getName() {
      return 'Browser SIMID Controller';
    }
  }, {
    key: "attachSimidController",
    value: function attachSimidController(element, origin) {
      var _this2 = this;
      if (BrowserSimidControllerAdapter.checkSimidController(element)) {
        if (origin === undefined) {
          core__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.getInstance().printWarnLogs(TAG, 'Messages origin not specified, use at your own risk');
        }
        this.postMessageCallback = function (event) {
          if (event.origin === _this2.allowedOrigin || _this2.allowedOrigin === undefined) {
            _this2.onMessageReceived(event.data);
          } else {
            core__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.getInstance().printWarnLogs(TAG, 'Message was meant for ' + event.origin + ', ignoring...');
          }
        };
        this.allowedOrigin = origin;
        this.simidController = element;
        this.simidController.addEventListener('message', this.postMessageCallback);
        return true;
      }
      return false;
    }
  }, {
    key: "detachSimidController",
    value: function detachSimidController() {
      if (this.simidController !== undefined) {
        this.simidController.removeEventListener('message', this.postMessageCallback);
        this.simidController = undefined;
        this.allowedOrigin = undefined;
        this.postMessageCallback = undefined;
      }
    }
  }], [{
    key: "checkSimidController",
    value: function checkSimidController(element) {
      var _element$contentWindo;
      // The SIMID controller is the element that will receive the messages
      // It should be a Window object
      return (element === null || element === void 0 ? void 0 : element.setInterval) && (element === null || element === void 0 || (_element$contentWindo = element.contentWindow) === null || _element$contentWindo === void 0 ? void 0 : _element$contentWindo.self) === element.contentWindow;
    }
  }]);
}(simid__WEBPACK_IMPORTED_MODULE_13__.SimidControllerAdapter);


/***/ }),

/***/ "./src/ad/simid/SimidControllerManagerHandler.js":
/*!*******************************************************!*\
  !*** ./src/ad/simid/SimidControllerManagerHandler.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SimidControllerManagerHandler; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var simid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simid */ "./src_core/index.simid.js");
/* harmony import */ var _engine_CoreEngine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../engine/CoreEngine */ "./src/engine/CoreEngine.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }











function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


var _adapters = /*#__PURE__*/new WeakMap();
var SimidControllerManagerHandler = /*#__PURE__*/function () {
  function SimidControllerManagerHandler() {
    _classCallCheck(this, SimidControllerManagerHandler);
    _classPrivateFieldInitSpec(this, _adapters, void 0);
  }
  return _createClass(SimidControllerManagerHandler, [{
    key: "loadSimidControllerAdapters",
    value: function loadSimidControllerAdapters() {
      var _CoreEngine$simidModu;
      _classPrivateFieldSet(_adapters, this, {});
      _classPrivateFieldGet(_adapters, this)['generic'] = simid__WEBPACK_IMPORTED_MODULE_11__.GenericSimidControllerAdapter;
      this.addAdapter('browser', (_CoreEngine$simidModu = _engine_CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].simidModule) === null || _CoreEngine$simidModu === void 0 ? void 0 : _CoreEngine$simidModu.BrowserSimidControllerAdapter);
      return _classPrivateFieldGet(_adapters, this);
    }
  }, {
    key: "addAdapter",
    value: function addAdapter(name, adapter) {
      if (adapter !== undefined) {
        _classPrivateFieldGet(_adapters, this)[name] = adapter;
      }
    }
  }, {
    key: "attachSimidController",
    value: function attachSimidController(simidController, origin) {
      for (var key in _classPrivateFieldGet(_adapters, this)) {
        if (_classPrivateFieldGet(_adapters, this)[key] !== undefined && _classPrivateFieldGet(_adapters, this)[key].checkSimidController(simidController)) {
          var adapter = new (_classPrivateFieldGet(_adapters, this)[key])();
          adapter.attachSimidController(simidController, origin);
          return adapter;
        }
      }
      return undefined;
    }
  }]);
}();


/***/ }),

/***/ "./src/ad/simid/index.js":
/*!*******************************!*\
  !*** ./src/ad/simid/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserSimidControllerAdapter: function() { return /* reexport safe */ _BrowserSimidControllerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   GenericSimidControllerApi: function() { return /* reexport safe */ simid__WEBPACK_IMPORTED_MODULE_3__.GenericSimidControllerApi; },
/* harmony export */   SimidControllerManager: function() { return /* reexport safe */ simid__WEBPACK_IMPORTED_MODULE_3__.SimidControllerManager; },
/* harmony export */   SimidControllerManagerHandler: function() { return /* reexport safe */ _SimidControllerManagerHandler__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/CoreEngine */ "./src/engine/CoreEngine.js");
/* harmony import */ var _SimidControllerManagerHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimidControllerManagerHandler */ "./src/ad/simid/SimidControllerManagerHandler.js");
/* harmony import */ var _BrowserSimidControllerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserSimidControllerAdapter */ "./src/ad/simid/BrowserSimidControllerAdapter.js");
/* harmony import */ var simid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simid */ "./src_core/index.simid.js");




_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__["default"].simidModule = {
  SimidControllerManagerHandler: _SimidControllerManagerHandler__WEBPACK_IMPORTED_MODULE_1__["default"],
  BrowserSimidControllerAdapter: _BrowserSimidControllerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"],
  SimidControllerManager: simid__WEBPACK_IMPORTED_MODULE_3__.SimidControllerManager,
  GenericSimidControllerApi: simid__WEBPACK_IMPORTED_MODULE_3__.GenericSimidControllerApi
};
_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().registerSimidControllerAdapters();


/***/ }),

/***/ "./src_core/ad/simid/GenericSimidControllerAdapter.js":
/*!************************************************************!*\
  !*** ./src_core/ad/simid/GenericSimidControllerAdapter.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenericSimidControllerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SimidControllerAdapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SimidControllerAdapter */ "./src_core/ad/simid/SimidControllerAdapter.js");
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/ObjectUtils */ "./src_core/utils/ObjectUtils.js");












function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// const TAG = 'BpkGenericSimidControllerAdapter';
var GenericSimidControllerAdapter = /*#__PURE__*/function (_SimidControllerAdapt) {
  // In a generic implementation, simidController is an instance of a class created by the client, which extends GenericSimidControllerApi

  function GenericSimidControllerAdapter() {
    var _this;
    _classCallCheck(this, GenericSimidControllerAdapter);
    _this = _callSuper(this, GenericSimidControllerAdapter);
    _defineProperty(_this, "simidController", void 0);
    return _this;
  }
  _inherits(GenericSimidControllerAdapter, _SimidControllerAdapt);
  return _createClass(GenericSimidControllerAdapter, [{
    key: "getName",
    value: function getName() {
      return this.simidController.getSimidControllerName();
    }
  }, {
    key: "attachSimidController",
    value: function attachSimidController(simidController, origin) {
      if (GenericSimidControllerAdapter.checkSimidController(simidController)) {
        this.simidController = simidController;
        this.simidController.simidControllerAdapter = this;
        return true;
      }
      return false;
    }
  }, {
    key: "detachSimidController",
    value: function detachSimidController() {
      this.simidController = undefined;
      this.handler = undefined;
      this.simidSessions = {};
    }
  }], [{
    key: "checkSimidController",
    value: function checkSimidController(simidController) {
      return _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_13__["default"].hasMethods(simidController, ['getSimidControllerName']);
    }
  }]);
}(_SimidControllerAdapter__WEBPACK_IMPORTED_MODULE_12__["default"]);


/***/ }),

/***/ "./src_core/ad/simid/GenericSimidControllerApi.js":
/*!********************************************************!*\
  !*** ./src_core/ad/simid/GenericSimidControllerApi.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenericSimidControllerApi; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkGenericSimidControllerApi';

/** @module Simid */

/**
 * Generic SIMID controller API
 */
var GenericSimidControllerApi = /*#__PURE__*/function () {
  function GenericSimidControllerApi() {
    _classCallCheck(this, GenericSimidControllerApi);
    _defineProperty(this, "simidControllerAdapter", void 0);
  }

  /**
   * Get the SIMID controller name
   */
  return _createClass(GenericSimidControllerApi, [{
    key: "getSimidControllerName",
    value: function getSimidControllerName() {
      return '';
    }
  }, {
    key: "onMessageReceived",
    value: function onMessageReceived(message) {
      if (this.simidControllerAdapter !== undefined) {
        this.simidControllerAdapter.onMessageReceived(message);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachSimidController(...) should be ' + 'called prior to onMessageReceived.');
      }
    }
  }, {
    key: "onMessageSent",
    value: function onMessageSent(message) {
      if (this.simidControllerAdapter !== undefined) {
        this.simidControllerAdapter.onMessageSent(message);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachSimidController(...) should be ' + 'called prior to onMessageSent.');
      }
    }
  }]);
}();


/***/ }),

/***/ "./src_core/ad/simid/SimidControllerAdapter.js":
/*!*****************************************************!*\
  !*** ./src_core/ad/simid/SimidControllerAdapter.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SimidControllerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkSimidControllerAdapter';
var simidMessage = {
  CLICK_THRU: 'SIMID:Creative:clickThru',
  FATAL_ERROR: 'SIMID:Creative:fatalError',
  START_CREATIVE: 'SIMID:Player:startCreative',
  CREATE_SESSION: 'createSession',
  RESOLVE: 'resolve',
  REJECT: 'reject'
};
var SimidControllerAdapter = /*#__PURE__*/function () {
  function SimidControllerAdapter() {
    _classCallCheck(this, SimidControllerAdapter);
    _defineProperty(this, "handler", void 0);
    this.simidSessions = {};
  }
  return _createClass(SimidControllerAdapter, [{
    key: "getName",
    value: function getName() {
      return '';
    }
  }, {
    key: "onMessageSent",
    value: function onMessageSent(message) {
      var data;
      try {
        data = JSON.parse(message);
        data.messageId = parseInt(data.messageId, 10);
      } catch (e) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Error: ' + e.message);
        return;
      }
      if (data.type === simidMessage.START_CREATIVE) {
        if (this.simidSessions[data.sessionId] === undefined) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Send startCreative message for an uninitialized SIMID session');
          return;
        }
        this.simidSessions[data.sessionId].startMessageId = data.messageId;
      }
    }
  }, {
    key: "onMessageReceived",
    value: function onMessageReceived(message) {
      var _this$handler, _data$args, _data$args2;
      var data;
      try {
        data = JSON.parse(message);
        data.messageId = parseInt(data.messageId, 10);
      } catch (e) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Error: ' + e.message);
        return;
      }
      switch (data.type) {
        case simidMessage.CLICK_THRU:
          if (this.simidSessions[data.sessionId] === undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Received a clickthru message for a uninitialized SIMID session');
            return;
          }
          (_this$handler = this.handler) === null || _this$handler === void 0 || _this$handler.notifySimidClickthrough(data.args);
          break;
        case simidMessage.CREATE_SESSION:
          if (this.simidSessions[data.sessionId] !== undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'SIMID session already created');
            return;
          }
          this.simidSessions[data.sessionId] = {
            id: data.sessionId
          };
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'SIMID session created with id ' + data.sessionId);
          break;
        case simidMessage.RESOLVE:
          if (this.simidSessions[data.sessionId] === undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Received a resolve message for a uninitialized SIMID session');
            return;
          }
          if (((_data$args = data.args) === null || _data$args === void 0 ? void 0 : _data$args.messageId) !== undefined && ((_data$args2 = data.args) === null || _data$args2 === void 0 ? void 0 : _data$args2.messageId) === this.simidSessions[data.sessionId].startMessageId) {
            // TODO don't send tracker automatically, must be sent manually by the SIMID controller by calling session.sendTracker(CREATIVE_VIEW)
            // this.handler?.notifySimidImpression();
          }
          break;
        case simidMessage.REJECT:
          // TODO
          break;
        case simidMessage.FATAL_ERROR:
          // TODO
          break;
        default:
          // LoggerManager.d(TAG, 'Message not supported: ' + data.type);
          break;
      }
    }
  }, {
    key: "attachSimidController",
    value: function attachSimidController(player, origin) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: attachSimidController not implemented for this adapter.');
      return false;
    }
  }, {
    key: "detachSimidController",
    value: function detachSimidController(player) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: detachSimidController not implemented for this adapter.');
      return false;
    }
  }, {
    key: "attachSession",
    value: function attachSession(handler) {
      this.handler = handler;
    }
  }, {
    key: "detachSession",
    value: function detachSession() {
      this.handler = undefined;
      this.simidSessions = {};
    }
  }], [{
    key: "checkSimidController",
    value: function checkSimidController(player) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: static checkSimidController not implemented for this adapter.');
      return false;
    }
  }]);
}();


/***/ }),

/***/ "./src_core/ad/simid/SimidControllerManager.js":
/*!*****************************************************!*\
  !*** ./src_core/ad/simid/SimidControllerManager.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SimidControllerManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }











function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkSimidControllerMgr';
var AbstractSimidControllerManagerHandler = /*#__PURE__*/function () {
  function AbstractSimidControllerManagerHandler() {
    _classCallCheck(this, AbstractSimidControllerManagerHandler);
  }
  return _createClass(AbstractSimidControllerManagerHandler, null, [{
    key: "loadSimidControllerAdapters",
    value: function loadSimidControllerAdapters() {
      return {};
    }
  }]);
}();
var _simidControllerManagerHandler = /*#__PURE__*/new WeakMap();
var _simidControllerAdapters = /*#__PURE__*/new WeakMap();
var _simidControllerAdapter = /*#__PURE__*/new WeakMap();
var SimidControllerManager = /*#__PURE__*/function () {
  function SimidControllerManager() {
    _classCallCheck(this, SimidControllerManager);
    _defineProperty(this, "smartLib", void 0);
    _classPrivateFieldInitSpec(this, _simidControllerManagerHandler, AbstractSimidControllerManagerHandler);
    _classPrivateFieldInitSpec(this, _simidControllerAdapters, {});
    _classPrivateFieldInitSpec(this, _simidControllerAdapter, void 0);
  }
  return _createClass(SimidControllerManager, [{
    key: "init",
    value: function init(simidControllerManagerHandler) {
      if (_classPrivateFieldGet(_simidControllerManagerHandler, this) === AbstractSimidControllerManagerHandler) {
        _classPrivateFieldSet(_simidControllerManagerHandler, this, simidControllerManagerHandler);
        _classPrivateFieldSet(_simidControllerAdapters, this, _classPrivateFieldGet(_simidControllerManagerHandler, this).loadSimidControllerAdapters());
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.v(TAG, 'Compatible SIMID controllers: ' + Object.keys(_classPrivateFieldGet(_simidControllerAdapters, this)));
      }
    }
  }, {
    key: "release",
    value: function release() {
      this.setSimidControllerAdapter(undefined);
    }
  }, {
    key: "attachInstance",
    value: function attachInstance(smartLib) {
      this.smartLib = smartLib;
    }
  }, {
    key: "getSimidControllerAdapters",
    value: function getSimidControllerAdapters() {
      return _classPrivateFieldGet(_simidControllerAdapters, this);
    }
  }, {
    key: "getSimidControllerAdapter",
    value: function getSimidControllerAdapter() {
      return _classPrivateFieldGet(_simidControllerAdapter, this);
    }
  }, {
    key: "setSimidControllerAdapter",
    value: function setSimidControllerAdapter(simidControllerAdapter) {
      if (_classPrivateFieldGet(_simidControllerAdapter, this) !== undefined && _classPrivateFieldGet(_simidControllerAdapter, this) !== simidControllerAdapter) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.i(TAG, 'SIMID controller ' + _classPrivateFieldGet(_simidControllerAdapter, this).getName() + ' detached');
        _classPrivateFieldGet(_simidControllerAdapter, this).detachSimidController();
      }
      if (_classPrivateFieldGet(_simidControllerAdapter, this) !== simidControllerAdapter) {
        _classPrivateFieldSet(_simidControllerAdapter, this, simidControllerAdapter);
      } else if (simidControllerAdapter !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.i(TAG, 'SIMID controller ' + _classPrivateFieldGet(_simidControllerAdapter, this).getName() + ' already attached');
      }
      if (simidControllerAdapter !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.i(TAG, 'SIMID controller ' + simidControllerAdapter.getName() + ' attached');
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_instance._) {
        _instance._ = new SimidControllerManager();
      }
      return _instance._;
    }
  }]);
}();
/**
 * Singleton
 */
var _instance = {
  _: void 0
};


/***/ }),

/***/ "./src_core/index.simid.js":
/*!*********************************!*\
  !*** ./src_core/index.simid.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericSimidControllerAdapter: function() { return /* reexport safe */ _ad_simid_GenericSimidControllerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   GenericSimidControllerApi: function() { return /* reexport safe */ _ad_simid_GenericSimidControllerApi__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   SimidControllerAdapter: function() { return /* reexport safe */ _ad_simid_SimidControllerAdapter__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   SimidControllerManager: function() { return /* reexport safe */ _ad_simid_SimidControllerManager__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _ad_simid_SimidControllerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad/simid/SimidControllerManager */ "./src_core/ad/simid/SimidControllerManager.js");
/* harmony import */ var _ad_simid_SimidControllerAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad/simid/SimidControllerAdapter */ "./src_core/ad/simid/SimidControllerAdapter.js");
/* harmony import */ var _ad_simid_GenericSimidControllerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ad/simid/GenericSimidControllerAdapter */ "./src_core/ad/simid/GenericSimidControllerAdapter.js");
/* harmony import */ var _ad_simid_GenericSimidControllerApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ad/simid/GenericSimidControllerApi */ "./src_core/ad/simid/GenericSimidControllerApi.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartLib */ "./src_core/SmartLib.js");





_SmartLib__WEBPACK_IMPORTED_MODULE_4__["default"].simidModule = {
  SimidControllerManager: _ad_simid_SimidControllerManager__WEBPACK_IMPORTED_MODULE_0__["default"],
  SimidControllerAdapter: _ad_simid_SimidControllerAdapter__WEBPACK_IMPORTED_MODULE_1__["default"],
  GenericSimidControllerAdapter: _ad_simid_GenericSimidControllerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"],
  GenericSimidControllerApi: _ad_simid_GenericSimidControllerApi__WEBPACK_IMPORTED_MODULE_3__["default"]
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["ad","analytics"], function() { return __webpack_exec__("./src/ad/simid/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTVCLElBQUksRUFBMkJqQyxzQkFBSixDQUFDO01BQ2hDLENBQUMsTUFBTSxJQUFJQSxzQkFBc0IsS0FBS3BDLFNBQVMsRUFBRTtRQUM3Q3pCLGdFQUFhLENBQUMwRyxDQUFDLENBQUN6RyxHQUFHLEVBQUUsbUJBQW1CLEdBQUdrRCxxQkFBQSxDQUFLMkMsdUJBQXVCLEVBQTVCLElBQTJCLENBQUMsQ0FBQzNFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUM7TUFDNUc7TUFFQSxJQUFJMEMsc0JBQXNCLEtBQUtwQyxTQUFTLEVBQUU7UUFDdEN6QixnRUFBYSxDQUFDMEcsQ0FBQyxDQUFDekcsR0FBRyxFQUFFLG1CQUFtQixHQUFHNEQsc0JBQXNCLENBQUMxQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztNQUM5RjtJQUNKO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBakRELFNBQU9RLFdBQVdBLENBQUEsRUFBRztNQUNqQixJQUFJLENBQXdCaUYsU0FBUyxDQUFBQyxDQUFBLEVBQUU7UUFDWkQsU0FBUyxDQUFBQyxDQUFBLEdBQUcsSUFBSXBELHNCQUFzQixDQUFDLENBQTlCO01BQ3BDO01BRUEsT0FBOEJtRCxTQUFTLENBQUFDLENBQUE7SUFDM0M7RUFBQztBQUFBO0FBbkJEO0FBQ0o7QUFDQTtBQUZJLElBQUFELFNBQUE7RUFBQUMsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1htRTtBQUNBO0FBQ2M7QUFDUjtBQUUzQztBQUNsQ0MsaURBQVEsQ0FBQ3hELFdBQVcsR0FBRztFQUNuQkcsc0JBQXNCLEVBQXRCQSx3RUFBc0I7RUFBRXpELHNCQUFzQixFQUF0QkEsd0VBQXNCO0VBQzlDMkMsNkJBQTZCLEVBQTdCQSwrRUFBNkI7RUFBRWUseUJBQXlCLEVBQXpCQSwyRUFBeUJBO0FBQzVELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmMvYWQvc2ltaWQvQnJvd3NlclNpbWlkQ29udHJvbGxlckFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmMvYWQvc2ltaWQvU2ltaWRDb250cm9sbGVyTWFuYWdlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmMvYWQvc2ltaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC9zaW1pZC9HZW5lcmljU2ltaWRDb250cm9sbGVyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL3NpbWlkL0dlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGkuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC9zaW1pZC9TaW1pZENvbnRyb2xsZXJBZGFwdGVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYWQvc2ltaWQvU2ltaWRDb250cm9sbGVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2luZGV4LnNpbWlkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic2ltaWRTbWFydExpYk1vZHVsZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzaW1pZFNtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNpbWlkU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG59KSgoZnVuY3Rpb24oKSB7IHJldHVybiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCl9KSgpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBTaW1pZENvbnRyb2xsZXJBZGFwdGVyIH0gZnJvbSAnc2ltaWQnO1xuaW1wb3J0IHsgTG9nZ2VyTWFuYWdlciB9IGZyb20gJ2NvcmUnO1xuXG5jb25zdCBUQUcgPSAnQnBrQnJvd3NlclNpbWlkQ29udHJvbGxlckFkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyU2ltaWRDb250cm9sbGVyQWRhcHRlciBleHRlbmRzIFNpbWlkQ29udHJvbGxlckFkYXB0ZXIge1xuXG4gICAgc2ltaWRDb250cm9sbGVyO1xuICAgIGFsbG93ZWRPcmlnaW47XG4gICAgcG9zdE1lc3NhZ2VDYWxsYmFjaztcblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQnJvd3NlciBTSU1JRCBDb250cm9sbGVyJztcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tTaW1pZENvbnRyb2xsZXIoZWxlbWVudCkge1xuICAgICAgICAvLyBUaGUgU0lNSUQgY29udHJvbGxlciBpcyB0aGUgZWxlbWVudCB0aGF0IHdpbGwgcmVjZWl2ZSB0aGUgbWVzc2FnZXNcbiAgICAgICAgLy8gSXQgc2hvdWxkIGJlIGEgV2luZG93IG9iamVjdFxuICAgICAgICByZXR1cm4gZWxlbWVudD8uc2V0SW50ZXJ2YWwgJiYgZWxlbWVudD8uY29udGVudFdpbmRvdz8uc2VsZiA9PT0gZWxlbWVudC5jb250ZW50V2luZG93O1xuICAgIH1cblxuICAgIGF0dGFjaFNpbWlkQ29udHJvbGxlcihlbGVtZW50LCBvcmlnaW4pIHtcbiAgICAgICAgaWYgKEJyb3dzZXJTaW1pZENvbnRyb2xsZXJBZGFwdGVyLmNoZWNrU2ltaWRDb250cm9sbGVyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAob3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHJpbnRXYXJuTG9ncyhUQUcsICdNZXNzYWdlcyBvcmlnaW4gbm90IHNwZWNpZmllZCwgdXNlIGF0IHlvdXIgb3duIHJpc2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wb3N0TWVzc2FnZUNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbiA9PT0gdGhpcy5hbGxvd2VkT3JpZ2luIHx8IHRoaXMuYWxsb3dlZE9yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnByaW50V2FybkxvZ3MoVEFHLCAnTWVzc2FnZSB3YXMgbWVhbnQgZm9yICcgKyBldmVudC5vcmlnaW4gKyAnLCBpZ25vcmluZy4uLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYWxsb3dlZE9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgICAgIHRoaXMuc2ltaWRDb250cm9sbGVyID0gZWxlbWVudDsgIFxuICAgICAgICAgICAgdGhpcy5zaW1pZENvbnRyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMucG9zdE1lc3NhZ2VDYWxsYmFjayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGV0YWNoU2ltaWRDb250cm9sbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zaW1pZENvbnRyb2xsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaW1pZENvbnRyb2xsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMucG9zdE1lc3NhZ2VDYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLnNpbWlkQ29udHJvbGxlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuYWxsb3dlZE9yaWdpbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2VDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEdlbmVyaWNTaW1pZENvbnRyb2xsZXJBZGFwdGVyIH0gZnJvbSAnc2ltaWQnO1xuaW1wb3J0IENvcmVFbmdpbmUgZnJvbSAnLi4vLi4vZW5naW5lL0NvcmVFbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlciB7XG4gICAgI2FkYXB0ZXJzO1xuXG4gICAgbG9hZFNpbWlkQ29udHJvbGxlckFkYXB0ZXJzKCkge1xuICAgICAgICB0aGlzLiNhZGFwdGVycyA9IHt9O1xuICAgICAgICB0aGlzLiNhZGFwdGVyc1snZ2VuZXJpYyddID0gR2VuZXJpY1NpbWlkQ29udHJvbGxlckFkYXB0ZXI7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcignYnJvd3NlcicsIENvcmVFbmdpbmUuc2ltaWRNb2R1bGU/LkJyb3dzZXJTaW1pZENvbnRyb2xsZXJBZGFwdGVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jYWRhcHRlcnM7XG4gICAgfVxuXG4gICAgYWRkQWRhcHRlcihuYW1lLCBhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuI2FkYXB0ZXJzW25hbWVdID0gYWRhcHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaFNpbWlkQ29udHJvbGxlcihzaW1pZENvbnRyb2xsZXIsIG9yaWdpbikge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy4jYWRhcHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNhZGFwdGVyc1trZXldICE9PSB1bmRlZmluZWQgJiYgdGhpcy4jYWRhcHRlcnNba2V5XS5jaGVja1NpbWlkQ29udHJvbGxlcihzaW1pZENvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRhcHRlciA9IG5ldyB0aGlzLiNhZGFwdGVyc1trZXldKCk7XG5cbiAgICAgICAgICAgICAgICBhZGFwdGVyLmF0dGFjaFNpbWlkQ29udHJvbGxlcihzaW1pZENvbnRyb2xsZXIsIG9yaWdpbik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvcmVFbmdpbmUgZnJvbSAnLi4vLi4vZW5naW5lL0NvcmVFbmdpbmUnO1xuXG5pbXBvcnQgU2ltaWRDb250cm9sbGVyTWFuYWdlckhhbmRsZXIgZnJvbSAnLi9TaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlcic7XG5pbXBvcnQgQnJvd3NlclNpbWlkQ29udHJvbGxlckFkYXB0ZXIgZnJvbSAnLi9Ccm93c2VyU2ltaWRDb250cm9sbGVyQWRhcHRlcic7XG5pbXBvcnQge1NpbWlkQ29udHJvbGxlck1hbmFnZXIsIEdlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGl9IGZyb20gJ3NpbWlkJztcblxuQ29yZUVuZ2luZS5zaW1pZE1vZHVsZSA9IHtcbiAgICBTaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlciwgQnJvd3NlclNpbWlkQ29udHJvbGxlckFkYXB0ZXIsXG4gICAgU2ltaWRDb250cm9sbGVyTWFuYWdlciwgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFwaVxufTtcblxuQ29yZUVuZ2luZS5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyU2ltaWRDb250cm9sbGVyQWRhcHRlcnMoKTtcblxuZXhwb3J0IHtcbiAgICBTaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlciwgQnJvd3NlclNpbWlkQ29udHJvbGxlckFkYXB0ZXIsXG4gICAgU2ltaWRDb250cm9sbGVyTWFuYWdlciwgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFwaVxufTtcbiIsImltcG9ydCBTaW1pZENvbnRyb2xsZXJBZGFwdGVyIGZyb20gJy4vU2ltaWRDb250cm9sbGVyQWRhcHRlcic7XG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvT2JqZWN0VXRpbHMnO1xuXG4vLyBjb25zdCBUQUcgPSAnQnBrR2VuZXJpY1NpbWlkQ29udHJvbGxlckFkYXB0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFkYXB0ZXIgZXh0ZW5kcyBTaW1pZENvbnRyb2xsZXJBZGFwdGVyIHtcbiAgICBzaW1pZENvbnRyb2xsZXI7IC8vIEluIGEgZ2VuZXJpYyBpbXBsZW1lbnRhdGlvbiwgc2ltaWRDb250cm9sbGVyIGlzIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MgY3JlYXRlZCBieSB0aGUgY2xpZW50LCB3aGljaCBleHRlbmRzIEdlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGlcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpbWlkQ29udHJvbGxlci5nZXRTaW1pZENvbnRyb2xsZXJOYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrU2ltaWRDb250cm9sbGVyKHNpbWlkQ29udHJvbGxlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaGFzTWV0aG9kcyhzaW1pZENvbnRyb2xsZXIsIFtcbiAgICAgICAgICAgICdnZXRTaW1pZENvbnRyb2xsZXJOYW1lJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBhdHRhY2hTaW1pZENvbnRyb2xsZXIoc2ltaWRDb250cm9sbGVyLCBvcmlnaW4pIHtcbiAgICAgICAgaWYgKEdlbmVyaWNTaW1pZENvbnRyb2xsZXJBZGFwdGVyLmNoZWNrU2ltaWRDb250cm9sbGVyKHNpbWlkQ29udHJvbGxlcikpIHtcbiAgICAgICAgICAgIHRoaXMuc2ltaWRDb250cm9sbGVyID0gc2ltaWRDb250cm9sbGVyO1xuICAgICAgICAgICAgdGhpcy5zaW1pZENvbnRyb2xsZXIuc2ltaWRDb250cm9sbGVyQWRhcHRlciA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGFjaFNpbWlkQ29udHJvbGxlcigpIHtcbiAgICAgICAgdGhpcy5zaW1pZENvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zaW1pZFNlc3Npb25zID0ge307XG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0dlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGknO1xuXG4vKiogQG1vZHVsZSBTaW1pZCAqL1xuXG4vKipcbiAqIEdlbmVyaWMgU0lNSUQgY29udHJvbGxlciBBUElcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFwaSB7XG4gICAgc2ltaWRDb250cm9sbGVyQWRhcHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBTSU1JRCBjb250cm9sbGVyIG5hbWVcbiAgICAgKi9cbiAgICBnZXRTaW1pZENvbnRyb2xsZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgb25NZXNzYWdlUmVjZWl2ZWQobWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5zaW1pZENvbnRyb2xsZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2ltaWRDb250cm9sbGVyQWRhcHRlci5vbk1lc3NhZ2VSZWNlaXZlZChtZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hTaW1pZENvbnRyb2xsZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvbk1lc3NhZ2VSZWNlaXZlZC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWVzc2FnZVNlbnQobWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5zaW1pZENvbnRyb2xsZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2ltaWRDb250cm9sbGVyQWRhcHRlci5vbk1lc3NhZ2VTZW50KG1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFNpbWlkQ29udHJvbGxlciguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG9uTWVzc2FnZVNlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrU2ltaWRDb250cm9sbGVyQWRhcHRlcic7XG5cbmNvbnN0IHNpbWlkTWVzc2FnZSA9IHtcbiAgICBDTElDS19USFJVOiAnU0lNSUQ6Q3JlYXRpdmU6Y2xpY2tUaHJ1JyxcbiAgICBGQVRBTF9FUlJPUjogJ1NJTUlEOkNyZWF0aXZlOmZhdGFsRXJyb3InLFxuICAgIFNUQVJUX0NSRUFUSVZFOiAnU0lNSUQ6UGxheWVyOnN0YXJ0Q3JlYXRpdmUnLFxuICAgIENSRUFURV9TRVNTSU9OOiAnY3JlYXRlU2Vzc2lvbicsXG4gICAgUkVTT0xWRTogJ3Jlc29sdmUnLFxuICAgIFJFSkVDVDogJ3JlamVjdCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbWlkQ29udHJvbGxlckFkYXB0ZXIge1xuICAgIGhhbmRsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaW1pZFNlc3Npb25zID0ge307XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIG9uTWVzc2FnZVNlbnQobWVzc2FnZSkge1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgZGF0YS5tZXNzYWdlSWQgPSBwYXJzZUludChkYXRhLm1lc3NhZ2VJZCwgMTApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnRXJyb3I6ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gc2ltaWRNZXNzYWdlLlNUQVJUX0NSRUFUSVZFKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW1pZFNlc3Npb25zW2RhdGEuc2Vzc2lvbklkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1NlbmQgc3RhcnRDcmVhdGl2ZSBtZXNzYWdlIGZvciBhbiB1bmluaXRpYWxpemVkIFNJTUlEIHNlc3Npb24nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNpbWlkU2Vzc2lvbnNbZGF0YS5zZXNzaW9uSWRdLnN0YXJ0TWVzc2FnZUlkID0gZGF0YS5tZXNzYWdlSWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1lc3NhZ2VSZWNlaXZlZChtZXNzYWdlKSB7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XG4gICAgICAgICAgICBkYXRhLm1lc3NhZ2VJZCA9IHBhcnNlSW50KGRhdGEubWVzc2FnZUlkLCAxMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdFcnJvcjogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBzaW1pZE1lc3NhZ2UuQ0xJQ0tfVEhSVTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaW1pZFNlc3Npb25zW2RhdGEuc2Vzc2lvbklkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdSZWNlaXZlZCBhIGNsaWNrdGhydSBtZXNzYWdlIGZvciBhIHVuaW5pdGlhbGl6ZWQgU0lNSUQgc2Vzc2lvbicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcj8ubm90aWZ5U2ltaWRDbGlja3Rocm91Z2goZGF0YS5hcmdzKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzaW1pZE1lc3NhZ2UuQ1JFQVRFX1NFU1NJT046XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2ltaWRTZXNzaW9uc1tkYXRhLnNlc3Npb25JZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnU0lNSUQgc2Vzc2lvbiBhbHJlYWR5IGNyZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNpbWlkU2Vzc2lvbnNbZGF0YS5zZXNzaW9uSWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS5zZXNzaW9uSWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTSU1JRCBzZXNzaW9uIGNyZWF0ZWQgd2l0aCBpZCAnICsgZGF0YS5zZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzaW1pZE1lc3NhZ2UuUkVTT0xWRTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaW1pZFNlc3Npb25zW2RhdGEuc2Vzc2lvbklkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdSZWNlaXZlZCBhIHJlc29sdmUgbWVzc2FnZSBmb3IgYSB1bmluaXRpYWxpemVkIFNJTUlEIHNlc3Npb24nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hcmdzPy5tZXNzYWdlSWQgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmFyZ3M/Lm1lc3NhZ2VJZCA9PT0gdGhpcy5zaW1pZFNlc3Npb25zW2RhdGEuc2Vzc2lvbklkXS5zdGFydE1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGRvbid0IHNlbmQgdHJhY2tlciBhdXRvbWF0aWNhbGx5LCBtdXN0IGJlIHNlbnQgbWFudWFsbHkgYnkgdGhlIFNJTUlEIGNvbnRyb2xsZXIgYnkgY2FsbGluZyBzZXNzaW9uLnNlbmRUcmFja2VyKENSRUFUSVZFX1ZJRVcpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZGxlcj8ubm90aWZ5U2ltaWRJbXByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzaW1pZE1lc3NhZ2UuUkVKRUNUOlxuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc2ltaWRNZXNzYWdlLkZBVEFMX0VSUk9SOlxuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJ01lc3NhZ2Ugbm90IHN1cHBvcnRlZDogJyArIGRhdGEudHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tTaW1pZENvbnRyb2xsZXIocGxheWVyKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc3RhdGljIGNoZWNrU2ltaWRDb250cm9sbGVyIG5vdCBpbXBsZW1lbnRlZCBmb3IgdGhpcyBhZGFwdGVyLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYXR0YWNoU2ltaWRDb250cm9sbGVyKHBsYXllciwgb3JpZ2luKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogYXR0YWNoU2ltaWRDb250cm9sbGVyIG5vdCBpbXBsZW1lbnRlZCBmb3IgdGhpcyBhZGFwdGVyLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGV0YWNoU2ltaWRDb250cm9sbGVyKHBsYXllcikge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IGRldGFjaFNpbWlkQ29udHJvbGxlciBub3QgaW1wbGVtZW50ZWQgZm9yIHRoaXMgYWRhcHRlci4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGF0dGFjaFNlc3Npb24oaGFuZGxlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGRldGFjaFNlc3Npb24oKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zaW1pZFNlc3Npb25zID0ge307XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTG9nZ2VyTWFuYWdlciB9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrU2ltaWRDb250cm9sbGVyTWdyJztcblxuY2xhc3MgQWJzdHJhY3RTaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlciB7XG4gICAgc3RhdGljIGxvYWRTaW1pZENvbnRyb2xsZXJBZGFwdGVycygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltaWRDb250cm9sbGVyTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uXG4gICAgICovXG4gICAgc3RhdGljICNpbnN0YW5jZTtcblxuICAgIHNtYXJ0TGliO1xuXG4gICAgI3NpbWlkQ29udHJvbGxlck1hbmFnZXJIYW5kbGVyID0gQWJzdHJhY3RTaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlcjtcblxuICAgICNzaW1pZENvbnRyb2xsZXJBZGFwdGVycyA9IHt9O1xuXG4gICAgI3NpbWlkQ29udHJvbGxlckFkYXB0ZXI7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghU2ltaWRDb250cm9sbGVyTWFuYWdlci4jaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFNpbWlkQ29udHJvbGxlck1hbmFnZXIuI2luc3RhbmNlID0gbmV3IFNpbWlkQ29udHJvbGxlck1hbmFnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTaW1pZENvbnRyb2xsZXJNYW5hZ2VyLiNpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbml0KHNpbWlkQ29udHJvbGxlck1hbmFnZXJIYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLiNzaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlciA9PT0gQWJzdHJhY3RTaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy4jc2ltaWRDb250cm9sbGVyTWFuYWdlckhhbmRsZXIgPSBzaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlcjtcblxuICAgICAgICAgICAgdGhpcy4jc2ltaWRDb250cm9sbGVyQWRhcHRlcnMgPSB0aGlzLiNzaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlci5sb2FkU2ltaWRDb250cm9sbGVyQWRhcHRlcnMoKTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0NvbXBhdGlibGUgU0lNSUQgY29udHJvbGxlcnM6ICcgKyBPYmplY3Qua2V5cyh0aGlzLiNzaW1pZENvbnRyb2xsZXJBZGFwdGVycykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTaW1pZENvbnRyb2xsZXJBZGFwdGVyKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgYXR0YWNoSW5zdGFuY2Uoc21hcnRMaWIpIHtcbiAgICAgICAgdGhpcy5zbWFydExpYiA9IHNtYXJ0TGliO1xuICAgIH1cblxuICAgIGdldFNpbWlkQ29udHJvbGxlckFkYXB0ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2ltaWRDb250cm9sbGVyQWRhcHRlcnM7XG4gICAgfVxuXG4gICAgZ2V0U2ltaWRDb250cm9sbGVyQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NpbWlkQ29udHJvbGxlckFkYXB0ZXI7XG4gICAgfVxuXG4gICAgc2V0U2ltaWRDb250cm9sbGVyQWRhcHRlcihzaW1pZENvbnRyb2xsZXJBZGFwdGVyKSB7XG4gICAgICAgIGlmICh0aGlzLiNzaW1pZENvbnRyb2xsZXJBZGFwdGVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy4jc2ltaWRDb250cm9sbGVyQWRhcHRlciAhPT0gc2ltaWRDb250cm9sbGVyQWRhcHRlcikge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NJTUlEIGNvbnRyb2xsZXIgJyArIHRoaXMuI3NpbWlkQ29udHJvbGxlckFkYXB0ZXIuZ2V0TmFtZSgpICsgJyBkZXRhY2hlZCcpO1xuICAgICAgICAgICAgdGhpcy4jc2ltaWRDb250cm9sbGVyQWRhcHRlci5kZXRhY2hTaW1pZENvbnRyb2xsZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNzaW1pZENvbnRyb2xsZXJBZGFwdGVyICE9PSBzaW1pZENvbnRyb2xsZXJBZGFwdGVyKSB7XG4gICAgICAgICAgICB0aGlzLiNzaW1pZENvbnRyb2xsZXJBZGFwdGVyID0gc2ltaWRDb250cm9sbGVyQWRhcHRlcjtcbiAgICAgICAgfSBlbHNlIGlmIChzaW1pZENvbnRyb2xsZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdTSU1JRCBjb250cm9sbGVyICcgKyB0aGlzLiNzaW1pZENvbnRyb2xsZXJBZGFwdGVyLmdldE5hbWUoKSArICcgYWxyZWFkeSBhdHRhY2hlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbWlkQ29udHJvbGxlckFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NJTUlEIGNvbnRyb2xsZXIgJyArIHNpbWlkQ29udHJvbGxlckFkYXB0ZXIuZ2V0TmFtZSgpICsgJyBhdHRhY2hlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbWlkQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi9hZC9zaW1pZC9TaW1pZENvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBTaW1pZENvbnRyb2xsZXJBZGFwdGVyIGZyb20gJy4vYWQvc2ltaWQvU2ltaWRDb250cm9sbGVyQWRhcHRlcic7XG5pbXBvcnQgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFkYXB0ZXIgZnJvbSAnLi9hZC9zaW1pZC9HZW5lcmljU2ltaWRDb250cm9sbGVyQWRhcHRlcic7XG5pbXBvcnQgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFwaSBmcm9tICcuL2FkL3NpbWlkL0dlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGknO1xuXG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi9TbWFydExpYic7XG5TbWFydExpYi5zaW1pZE1vZHVsZSA9IHtcbiAgICBTaW1pZENvbnRyb2xsZXJNYW5hZ2VyLCBTaW1pZENvbnRyb2xsZXJBZGFwdGVyLFxuICAgIEdlbmVyaWNTaW1pZENvbnRyb2xsZXJBZGFwdGVyLCBHZW5lcmljU2ltaWRDb250cm9sbGVyQXBpXG59O1xuXG5leHBvcnQge1xuICAgIFNpbWlkQ29udHJvbGxlck1hbmFnZXIsIFNpbWlkQ29udHJvbGxlckFkYXB0ZXIsXG4gICAgR2VuZXJpY1NpbWlkQ29udHJvbGxlckFkYXB0ZXIsIEdlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGlcbn07XG4iXSwibmFtZXMiOlsiU2ltaWRDb250cm9sbGVyQWRhcHRlciIsIkxvZ2dlck1hbmFnZXIiLCJUQUciLCJCcm93c2VyU2ltaWRDb250cm9sbGVyQWRhcHRlciIsIl9TaW1pZENvbnRyb2xsZXJBZGFwdCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfY2FsbFN1cGVyIiwiY29uY2F0IiwiX2RlZmluZVByb3BlcnR5IiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXROYW1lIiwiYXR0YWNoU2ltaWRDb250cm9sbGVyIiwiZWxlbWVudCIsIm9yaWdpbiIsIl90aGlzMiIsImNoZWNrU2ltaWRDb250cm9sbGVyIiwidW5kZWZpbmVkIiwiZ2V0SW5zdGFuY2UiLCJwcmludFdhcm5Mb2dzIiwicG9zdE1lc3NhZ2VDYWxsYmFjayIsImV2ZW50IiwiYWxsb3dlZE9yaWdpbiIsIm9uTWVzc2FnZVJlY2VpdmVkIiwiZGF0YSIsInNpbWlkQ29udHJvbGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hTaW1pZENvbnRyb2xsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VsZW1lbnQkY29udGVudFdpbmRvIiwic2V0SW50ZXJ2YWwiLCJjb250ZW50V2luZG93Iiwic2VsZiIsImRlZmF1bHQiLCJHZW5lcmljU2ltaWRDb250cm9sbGVyQWRhcHRlciIsIkNvcmVFbmdpbmUiLCJfYWRhcHRlcnMiLCJXZWFrTWFwIiwiU2ltaWRDb250cm9sbGVyTWFuYWdlckhhbmRsZXIiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsImxvYWRTaW1pZENvbnRyb2xsZXJBZGFwdGVycyIsIl9Db3JlRW5naW5lJHNpbWlkTW9kdSIsIl9jbGFzc1ByaXZhdGVGaWVsZFNldCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImFkZEFkYXB0ZXIiLCJzaW1pZE1vZHVsZSIsIm5hbWUiLCJhZGFwdGVyIiwiU2ltaWRDb250cm9sbGVyTWFuYWdlciIsIkdlbmVyaWNTaW1pZENvbnRyb2xsZXJBcGkiLCJyZWdpc3RlclNpbWlkQ29udHJvbGxlckFkYXB0ZXJzIiwiT2JqZWN0VXRpbHMiLCJnZXRTaW1pZENvbnRyb2xsZXJOYW1lIiwic2ltaWRDb250cm9sbGVyQWRhcHRlciIsImhhbmRsZXIiLCJzaW1pZFNlc3Npb25zIiwiaGFzTWV0aG9kcyIsIm1lc3NhZ2UiLCJlIiwib25NZXNzYWdlU2VudCIsInNpbWlkTWVzc2FnZSIsIkNMSUNLX1RIUlUiLCJGQVRBTF9FUlJPUiIsIlNUQVJUX0NSRUFUSVZFIiwiQ1JFQVRFX1NFU1NJT04iLCJSRVNPTFZFIiwiUkVKRUNUIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZUlkIiwicGFyc2VJbnQiLCJ0eXBlIiwic2Vzc2lvbklkIiwic3RhcnRNZXNzYWdlSWQiLCJfdGhpcyRoYW5kbGVyIiwiX2RhdGEkYXJncyIsIl9kYXRhJGFyZ3MyIiwibm90aWZ5U2ltaWRDbGlja3Rocm91Z2giLCJpZCIsImQiLCJwbGF5ZXIiLCJhdHRhY2hTZXNzaW9uIiwiZGV0YWNoU2Vzc2lvbiIsIkFic3RyYWN0U2ltaWRDb250cm9sbGVyTWFuYWdlckhhbmRsZXIiLCJfc2ltaWRDb250cm9sbGVyTWFuYWdlckhhbmRsZXIiLCJfc2ltaWRDb250cm9sbGVyQWRhcHRlcnMiLCJfc2ltaWRDb250cm9sbGVyQWRhcHRlciIsImluaXQiLCJzaW1pZENvbnRyb2xsZXJNYW5hZ2VySGFuZGxlciIsInYiLCJPYmplY3QiLCJrZXlzIiwicmVsZWFzZSIsInNldFNpbWlkQ29udHJvbGxlckFkYXB0ZXIiLCJhdHRhY2hJbnN0YW5jZSIsInNtYXJ0TGliIiwiZ2V0U2ltaWRDb250cm9sbGVyQWRhcHRlcnMiLCJnZXRTaW1pZENvbnRyb2xsZXJBZGFwdGVyIiwiaSIsIl9pbnN0YW5jZSIsIl8iLCJTbWFydExpYiJdLCJzb3VyY2VSb290IjoiIn0=