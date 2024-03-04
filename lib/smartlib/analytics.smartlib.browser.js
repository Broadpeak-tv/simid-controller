"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("analyticsSmartLibModule", [], factory);
	else if(typeof exports === 'object')
		exports["analyticsSmartLibModule"] = factory();
	else
		root["analyticsSmartLibModule"] = factory();
})((function() { return (typeof self !== 'undefined' ? self : global)})(), function() {
return ((function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] = (function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] || []).push([["analytics"],{

/***/ "./players/index.js":
/*!**************************!*\
  !*** ./players/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsRequestManager: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.AnalyticsRequestManager; },
/* harmony export */   AnalyticsSession: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.AnalyticsSession; },
/* harmony export */   BroadpeakCDNCacheKeepaliveManager: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.BroadpeakCDNCacheKeepaliveManager; },
/* harmony export */   CacheHandler: function() { return /* reexport safe */ _src_engine_system_CacheHandler__WEBPACK_IMPORTED_MODULE_2__.CacheHandler; },
/* harmony export */   CacheKeepaliveManager: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.CacheKeepaliveManager; },
/* harmony export */   CacheManager: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.CacheManager; },
/* harmony export */   GenericPlayerAdapter: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.GenericPlayerAdapter; },
/* harmony export */   GenericPlayerApi: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.GenericPlayerApi; },
/* harmony export */   Metrics: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.Metrics; },
/* harmony export */   MetricsManager: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.MetricsManager; },
/* harmony export */   PlayerAdapter: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.PlayerAdapter; },
/* harmony export */   PlayerEventListener: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.PlayerEventListener; },
/* harmony export */   PlayerManager: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.PlayerManager; },
/* harmony export */   SessionTrackerEvent: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.SessionTrackerEvent; },
/* harmony export */   SessionTrackerEvents: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.SessionTrackerEvents; },
/* harmony export */   SessionTrackerTimeline: function() { return /* reexport safe */ analytics__WEBPACK_IMPORTED_MODULE_3__.SessionTrackerTimeline; }
/* harmony export */ });
/* harmony import */ var _src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/engine/CoreEngine */ "./src/engine/CoreEngine.js");
/* harmony import */ var _src_engine_player_PlayerManagerHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/engine/player/PlayerManagerHandler */ "./src/engine/player/PlayerManagerHandler.js");
/* harmony import */ var _src_engine_system_CacheHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/engine/system/CacheHandler */ "./src/engine/system/CacheHandler.js");
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! analytics */ "./src_core/index.analytics.js");
/* import DashJsPlayerAdapter from './dashjs/DashJsPlayerAdapter';
import ShakaPlayerAdapter from './shaka/ShakaPlayerAdapter';
import HTML5PlayerAdapter from './html5/HTML5PlayerAdapter';
import AVPlayAdapter from './avplay/AVPlayAdapter';
import SagemcomDIW387Adapter from './sagemcom-diw387/SagemcomDIW387Adapter';
import HbbTV1PlayerAdapter from './hbbtv1/HbbTV1PlayerAdapter';
import KalturaPlayerAdapter from './kaltura/KalturaPlayerAdapter';
import ConnectPlayerAdapter from './connectplayer/ConnectPlayerAdapter';*/





_src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__["default"].analyticsModule = {
  PlayerManagerHandler: _src_engine_player_PlayerManagerHandler__WEBPACK_IMPORTED_MODULE_1__["default"],
  PlayerEventListener: analytics__WEBPACK_IMPORTED_MODULE_3__.PlayerEventListener,
  GenericPlayerApi: analytics__WEBPACK_IMPORTED_MODULE_3__.GenericPlayerApi,
  CacheHandler: _src_engine_system_CacheHandler__WEBPACK_IMPORTED_MODULE_2__.CacheHandler
};
_src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().registerPlayerAdapters();

/* export { DashJsPlayerAdapter, xShakaPlayerAdapter, HTML5PlayerAdapter, AVPlayAdapter, SagemcomDIW387Adapter,
    HbbTV1PlayerAdapter, KalturaPlayerAdapter, ConnectPlayerAdapter
};*/



/***/ }),

/***/ "./src/engine/player/PlayerManagerHandler.js":
/*!***************************************************!*\
  !*** ./src/engine/player/PlayerManagerHandler.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerManagerHandler; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! analytics */ "./src_core/index.analytics.js");
/* harmony import */ var _CoreEngine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CoreEngine */ "./src/engine/CoreEngine.js");










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
// import { GenericPlayerAdapter } from 'core';

/* import ShakaPlayerAdapter from '../../../players/shaka/ShakaPlayerAdapter';
import DashJsPlayerAdapter from '../../../players/dashjs/DashJsPlayerAdapter';
import HTML5PlayerAdapter from '../../../players/html5/HTML5PlayerAdapter';
import AVPlayAdapter from '../../../players/avplay/AVPlayAdapter';
import SagemcomDIW387Adapter from '../../../players/sagemcom-diw387/SagemcomDIW387Adapter';
import HbbTV1PlayerAdapter from '../../../players/hbbtv1/HbbTV1PlayerAdapter';
import KalturaPlayerAdapter from '../../../players/kaltura/KalturaPlayerAdapter';
import ConnectPlayerAdapter from '../../../players/connectplayer/ConnectPlayerAdapter';*/

var _adapters = /*#__PURE__*/new WeakMap();
var PlayerManagerHandler = /*#__PURE__*/function () {
  function PlayerManagerHandler() {
    _classCallCheck(this, PlayerManagerHandler);
    _classPrivateFieldInitSpec(this, _adapters, {
      writable: true,
      value: void 0
    });
  }
  _createClass(PlayerManagerHandler, [{
    key: "loadPlayerAdapters",
    value: function loadPlayerAdapters() {
      var _CoreEngine$theoplaye, _CoreEngine$shakaModu, _CoreEngine$dashjsMod, _CoreEngine$html5Modu, _CoreEngine$avplayMod, _CoreEngine$diw387Mod, _CoreEngine$hbbtv1Mod, _CoreEngine$kalturaMo, _CoreEngine$connectpl, _CoreEngine$rxplayerM, _CoreEngine$hlsjsModu, _CoreEngine$bitmovinM, _CoreEngine$reactnati, _CoreEngine$reactnati2, _CoreEngine$chromecas;
      _classPrivateFieldSet(this, _adapters, {});
      _classPrivateFieldGet(this, _adapters)['generic'] = analytics__WEBPACK_IMPORTED_MODULE_10__.GenericPlayerAdapter;
      this.addAdapter('theoplayer', (_CoreEngine$theoplaye = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].theoplayerModule) === null || _CoreEngine$theoplaye === void 0 ? void 0 : _CoreEngine$theoplaye.THEOPlayerAdapter);
      this.addAdapter('shaka', (_CoreEngine$shakaModu = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].shakaModule) === null || _CoreEngine$shakaModu === void 0 ? void 0 : _CoreEngine$shakaModu.ShakaPlayerAdapter);
      this.addAdapter('dashjs', (_CoreEngine$dashjsMod = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].dashjsModule) === null || _CoreEngine$dashjsMod === void 0 ? void 0 : _CoreEngine$dashjsMod.DashJsPlayerAdapter);
      this.addAdapter('html5', (_CoreEngine$html5Modu = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].html5Module) === null || _CoreEngine$html5Modu === void 0 ? void 0 : _CoreEngine$html5Modu.HTML5PlayerAdapter);
      this.addAdapter('avplay', (_CoreEngine$avplayMod = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].avplayModule) === null || _CoreEngine$avplayMod === void 0 ? void 0 : _CoreEngine$avplayMod.AVPlayAdapter);
      this.addAdapter('diw387', (_CoreEngine$diw387Mod = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].diw387Module) === null || _CoreEngine$diw387Mod === void 0 ? void 0 : _CoreEngine$diw387Mod.SagemcomDIW387Adapter);
      this.addAdapter('hbbtv1', (_CoreEngine$hbbtv1Mod = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].hbbtv1Module) === null || _CoreEngine$hbbtv1Mod === void 0 ? void 0 : _CoreEngine$hbbtv1Mod.HbbTV1PlayerAdapter);
      this.addAdapter('kaltura', (_CoreEngine$kalturaMo = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].kalturaModule) === null || _CoreEngine$kalturaMo === void 0 ? void 0 : _CoreEngine$kalturaMo.KalturaPlayerAdapter);
      this.addAdapter('connectplayer', (_CoreEngine$connectpl = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].connectplayerModule) === null || _CoreEngine$connectpl === void 0 ? void 0 : _CoreEngine$connectpl.ConnectPlayerAdapter);
      this.addAdapter('rxplayer', (_CoreEngine$rxplayerM = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].rxplayerModule) === null || _CoreEngine$rxplayerM === void 0 ? void 0 : _CoreEngine$rxplayerM.RxPlayerAdapter);
      this.addAdapter('hlsjs', (_CoreEngine$hlsjsModu = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].hlsjsModule) === null || _CoreEngine$hlsjsModu === void 0 ? void 0 : _CoreEngine$hlsjsModu.HlsJsPlayerAdapter);
      this.addAdapter('bitmovin', (_CoreEngine$bitmovinM = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].bitmovinModule) === null || _CoreEngine$bitmovinM === void 0 ? void 0 : _CoreEngine$bitmovinM.BitmovinPlayerAdapter);
      this.addAdapter('reactnativeconnectplayer', (_CoreEngine$reactnati = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].reactnativeconnectplayerModule) === null || _CoreEngine$reactnati === void 0 ? void 0 : _CoreEngine$reactnati.ReactNativeConnectPlayerAdapter);
      this.addAdapter('reactnativetheoplayer', (_CoreEngine$reactnati2 = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].reactnativetheoplayerModule) === null || _CoreEngine$reactnati2 === void 0 ? void 0 : _CoreEngine$reactnati2.ReactNativeTHEOplayerAdapter);
      this.addAdapter('chromecast', (_CoreEngine$chromecas = _CoreEngine__WEBPACK_IMPORTED_MODULE_11__["default"].chromecastModule) === null || _CoreEngine$chromecas === void 0 ? void 0 : _CoreEngine$chromecas.ChromecastPlayerAdapter);
      return _classPrivateFieldGet(this, _adapters);
    }
  }, {
    key: "addAdapter",
    value: function addAdapter(name, adapter) {
      if (adapter !== undefined) {
        _classPrivateFieldGet(this, _adapters)[name] = adapter;
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      for (var key in _classPrivateFieldGet(this, _adapters)) {
        if (_classPrivateFieldGet(this, _adapters)[key] !== undefined && _classPrivateFieldGet(this, _adapters)[key].checkPlayer(player, listener)) {
          var adapter = new (_classPrivateFieldGet(this, _adapters)[key])();
          adapter.attachPlayer(player, listener);
          return adapter;
        }
      }
      return undefined;
    }
  }]);
  return PlayerManagerHandler;
}();


/***/ }),

/***/ "./src/engine/system/CacheHandler.js":
/*!*******************************************!*\
  !*** ./src/engine/system/CacheHandler.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheHandler: function() { return /* binding */ CacheHandler; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core */ "./src_core/index.js");












function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TAG = 'BpkCacheHandler';
var PREFIX = 'sl-';
var CacheHandler = /*#__PURE__*/function () {
  function CacheHandler() {
    var _this = this;
    _classCallCheck(this, CacheHandler);
    _defineProperty(this, "storage", void 0);
    core__WEBPACK_IMPORTED_MODULE_12__.LoggerManager.d(TAG, 'Init cache handler, localStorage is ' + (typeof localStorage !== 'undefined' ? 'available' : 'unavailable') + '...');

    // Init storage
    this.storage = {};

    // Load existing cache
    if (typeof localStorage !== 'undefined') {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      keys.filter(function (key) {
        return key.startsWith(PREFIX);
      }) // Filter on SmartLib data
      .map(function (key) {
        // Load all reports
        return {
          key: key,
          value: localStorage.getItem(key)
        };
      }).forEach(function (cache) {
        if (cache.value !== undefined) {
          _this.storage[cache.key] = cache.value;
        }
      });
    }
  }
  _createClass(CacheHandler, [{
    key: "set",
    value: function set(key, value) {
      key = PREFIX + key;
      this.storage[key] = value;
      setTimeout(function () {
        var _localStorage;
        (_localStorage = localStorage) === null || _localStorage === void 0 || _localStorage.setItem(key, value);
      }, 1);
    }
  }, {
    key: "get",
    value: function get(key) {
      var keyIncludesPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (keyIncludesPrefix === false) {
        key = PREFIX + key;
      }

      // If the value exists, return it
      if (key in this.storage) {
        return this.storage[key];
      }

      // Hot load local storage
      var item;
      if (typeof localStorage !== 'undefined') {
        item = localStorage.getItem(key);
      }
      if (item !== undefined && item !== null) {
        this.storage[key] = item;
        return item;
      }
      return undefined;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      key = PREFIX + key;
      delete this.storage[key];
      setTimeout(function () {
        var _localStorage2;
        (_localStorage2 = localStorage) === null || _localStorage2 === void 0 || _localStorage2.removeItem(key);
      }, 1);
    }
  }, {
    key: "keys",
    value: function keys() {
      if (this.storage !== undefined) {
        return Object.keys(this.storage).map(function (key) {
          return key.replace(PREFIX, '');
        });
      }
      return [];
    }
  }]);
  return CacheHandler;
}();

/***/ }),

/***/ "./src_core/analytics/metrics/Metrics.js":
/*!***********************************************!*\
  !*** ./src_core/analytics/metrics/Metrics.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metrics: function() { return /* binding */ Metrics; },
/* harmony export */   MetricsBuilder: function() { return /* binding */ MetricsBuilder; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");









function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TAG = 'BpkMetrics';
var Metrics = /*#__PURE__*/_createClass(function Metrics(metrics) {
  _classCallCheck(this, Metrics);
  _defineProperty(this, "redirectionTime", void 0);
  _defineProperty(this, "startupTime", void 0);
  _defineProperty(this, "completion", void 0);
  _defineProperty(this, "playbackType", void 0);
  _defineProperty(this, "playbackDuration", void 0);
  _defineProperty(this, "sessionDuration", void 0);
  _defineProperty(this, "contentDuration", void 0);
  _defineProperty(this, "stallsNumber", void 0);
  _defineProperty(this, "maxStallDuration", void 0);
  _defineProperty(this, "totalStallsDuration", void 0);
  _defineProperty(this, "rebufferingsNumber", void 0);
  _defineProperty(this, "maxRebufferingDuration", void 0);
  _defineProperty(this, "totalRebufferingDuration", void 0);
  _defineProperty(this, "minBitrate", void 0);
  _defineProperty(this, "maxBitrate", void 0);
  _defineProperty(this, "averageBitrate", void 0);
  _defineProperty(this, "layerSwitchesNumber", void 0);
  _defineProperty(this, "timeSpentPerLayer", void 0);
  _defineProperty(this, "preStartupTime", void 0);
  if (metrics !== undefined) {
    this.redirectionTime = metrics.redirectionTime;
    this.startupTime = metrics.startupTime;
    this.completion = metrics.completion;
    this.playbackType = metrics.playbackType;
    this.playbackDuration = metrics.playbackDuration;
    this.sessionDuration = metrics.sessionDuration;
    this.contentDuration = metrics.contentDuration;
    this.stallsNumber = metrics.stallsNumber;
    this.maxStallDuration = metrics.maxStallDuration;
    this.totalStallsDuration = metrics.totalStallsDuration;
    this.rebufferingsNumber = metrics.rebufferingsNumber;
    this.maxRebufferingDuration = metrics.maxRebufferingDuration;
    this.totalRebufferingDuration = metrics.totalRebufferingDuration;
    this.minBitrate = metrics.minBitrate;
    this.maxBitrate = metrics.maxBitrate;
    this.averageBitrate = metrics.averageBitrate;
    this.layerSwitchesNumber = metrics.layerSwitchesNumber;
    this.timeSpentPerLayer = JSON.parse(JSON.stringify(metrics.timeSpentPerLayer));
    this.preStartupTime = metrics.preStartupTime;
  } else {
    this.redirectionTime = 0;
    this.startupTime = 0;
    this.completion = 0;
    this.playbackType = '';
    this.playbackDuration = 0;
    this.sessionDuration = 0;
    this.contentDuration = 0;
    this.stallsNumber = 0;
    this.maxStallDuration = 0;
    this.totalStallsDuration = 0;
    this.rebufferingsNumber = 0;
    this.maxRebufferingDuration = 0;
    this.totalRebufferingDuration = 0;
    this.minBitrate = 0;
    this.maxBitrate = 0;
    this.averageBitrate = 0;
    this.layerSwitchesNumber = 0;
    this.timeSpentPerLayer = {};
    this.preStartupTime = 0;
  }
});
_defineProperty(Metrics, "PLAYBACK_TYPE_LIVE", 'LIVE');
_defineProperty(Metrics, "PLAYBACK_TYPE_VOD", 'VOD');
var MetricsBuilder = /*#__PURE__*/function () {
  function MetricsBuilder() {
    var metrics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Metrics();
    _classCallCheck(this, MetricsBuilder);
    _defineProperty(this, "metrics", void 0);
    _defineProperty(this, "watchingRanges", void 0);
    this.metrics = metrics;
    this.reset();
  }
  _createClass(MetricsBuilder, [{
    key: "setRedirectionTime",
    value: function setRedirectionTime(redirectionTime) {
      this.metrics.redirectionTime = redirectionTime;
      return this;
    }
  }, {
    key: "setStartupTime",
    value: function setStartupTime(startupTime) {
      this.metrics.startupTime = startupTime;
      return this;
    }
  }, {
    key: "setSessionDuration",
    value: function setSessionDuration(sessionDuration) {
      this.metrics.sessionDuration = sessionDuration;
      return this;
    }
  }, {
    key: "setContentDuration",
    value: function setContentDuration(contentDuration) {
      this.metrics.contentDuration = contentDuration;
      return this;
    }
  }, {
    key: "setPlaybackType",
    value: function setPlaybackType(playbackType) {
      this.metrics.playbackType = playbackType;
      return this;
    }
  }, {
    key: "setFirstLayer",
    value: function setFirstLayer(bitrate) {
      if (bitrate > 0) {
        this.metrics.maxBitrate = bitrate;
        this.metrics.minBitrate = bitrate;
      }
      return this;
    }
  }, {
    key: "setPreStartupTime",
    value: function setPreStartupTime(preStartupTime) {
      this.metrics.preStartupTime = preStartupTime;
      return this;
    }
  }, {
    key: "addTimeSpentPerLayer",
    value: function addTimeSpentPerLayer(bitrate, duration) {
      bitrate = Math.round(bitrate);
      if (bitrate > 0) {
        var timeSpentOnLayer = this.metrics.timeSpentPerLayer[bitrate];
        if (timeSpentOnLayer === undefined) {
          timeSpentOnLayer = 0;
        }
        timeSpentOnLayer += duration;
        this.metrics.timeSpentPerLayer[bitrate] = timeSpentOnLayer;
        if (this.metrics.maxBitrate < bitrate) {
          this.metrics.maxBitrate = bitrate;
        }
        if (this.metrics.minBitrate > bitrate || this.metrics.minBitrate === 0) {
          this.metrics.minBitrate = bitrate;
        }
      }
      return this;
    }
  }, {
    key: "addLayerSwitch",
    value: function addLayerSwitch() {
      this.metrics.layerSwitchesNumber++;
      return this;
    }
  }, {
    key: "addPlaybackDuration",
    value: function addPlaybackDuration(duration) {
      this.metrics.playbackDuration += duration;
      return this;
    }
  }, {
    key: "addWatchingRange",
    value: function addWatchingRange(start, end) {
      if (start < end) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.v(TAG, 'Add watching range, duration ' + (end - start) + 'ms');
        this.watchingRanges.push({
          start: start,
          end: end,
          duration: end - start
        });
      }
      return this;
    }
  }, {
    key: "addStall",
    value: function addStall(duration) {
      this.metrics.stallsNumber++;
      this.metrics.totalStallsDuration += duration;
      if (this.metrics.maxStallDuration < duration) {
        this.metrics.maxStallDuration = duration;
      }
      return this;
    }
  }, {
    key: "addRebuffering",
    value: function addRebuffering(duration) {
      this.metrics.rebufferingsNumber++;
      this.metrics.totalRebufferingDuration += duration;
      if (this.metrics.maxRebufferingDuration < duration) {
        this.metrics.maxRebufferingDuration = duration;
      }
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      var builder = new MetricsBuilder(new Metrics(this.metrics));
      builder.watchingRanges = JSON.parse(JSON.stringify(this.watchingRanges));
      return builder;
    }
  }, {
    key: "computeCompletion",
    value: function computeCompletion() {
      if (this.metrics.playbackType === Metrics.PLAYBACK_TYPE_LIVE || this.metrics.contentDuration === 0) {
        return 1000;
      }
      var ranges = JSON.parse(JSON.stringify(this.watchingRanges));
      var intervals = ranges.slice(0);
      if (ranges.length === 1) {
        return Math.floor(intervals[0].duration * 1000 / this.metrics.contentDuration);
      } else if (ranges.length === 0) {
        return 0;
      }
      var stack = [];
      var top = null;

      // sort the intervals based on their start values
      intervals = intervals.sort(function (startValue, endValue) {
        if (parseInt(startValue.start, 10) > parseInt(endValue.start, 10)) {
          return 1;
        }
        if (parseInt(startValue.start, 10) < parseInt(endValue.start, 10)) {
          return -1;
        }
        return 0;
      });

      // push the 1st interval into the stack
      stack.push(intervals[0]);

      // start from the next interval and merge if needed
      for (var i = 1; i < intervals.length; i++) {
        // get the top element
        top = stack[stack.length - 1];
        if (parseInt(top.end, 10) < parseInt(intervals[i].start, 10)) {
          // if the current interval doesn't overlap with the
          // stack top element, push it to the stack
          stack.push(intervals[i]);
        } else if (parseInt(top.end, 10) < parseInt(intervals[i].end, 10)) {
          // otherwise update the end value of the top element
          // if end of current interval is higher
          top.end = parseInt(intervals[i].end, 10);
          top.duration = top.end - top.start;
          stack.pop();
          stack.push(top);
        }
      }
      var duration = 0;
      for (var _i = 0; _i < stack.length; _i++) {
        stack[_i].duration = parseInt(stack[_i].end, 10) - parseInt(stack[_i].start, 10);
        duration += parseInt(stack[_i].duration, 10);
      }
      this.watchingRanges = stack;
      var completion = Math.floor(duration * 1000 / this.metrics.contentDuration);
      if (completion > 1000) {
        return 1000;
      }
      return completion;
    }
  }, {
    key: "build",
    value: function build() {
      var layerPerDuration = 0;
      var totalDuration = 0;
      for (var bitrate in this.metrics.timeSpentPerLayer) {
        var duration = this.metrics.timeSpentPerLayer[bitrate];
        layerPerDuration += bitrate * duration;
        totalDuration += duration;
      }
      if (totalDuration !== 0) {
        this.metrics.averageBitrate = Math.round(layerPerDuration / totalDuration);
      }
      this.metrics.completion = this.computeCompletion();
      if (this.metrics.completion < 0) {
        this.metrics.completion = 0;
      } else if (this.metrics.completion > 1000) {
        this.metrics.completion = 1000;
      }
      this.metrics.startupTime += this.metrics.preStartupTime;
      return this.metrics;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.watchingRanges = [];
      return this;
    }
  }]);
  return MetricsBuilder;
}();

/***/ }),

/***/ "./src_core/analytics/metrics/MetricsManager.js":
/*!******************************************************!*\
  !*** ./src_core/analytics/metrics/MetricsManager.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MetricsManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Metrics */ "./src_core/analytics/metrics/Metrics.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tracker/SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* import {
    SessionTrackerBufferingStart, SessionTrackerLayerSwitch,
    SessionTrackerPause, SessionTrackerRebufferingStop,
    SessionTrackerResume, SessionTrackerSeek,
    SessionTrackerStallStop
} from '../../tracker/SessionTrackerEvent';*/




var TAG = 'BpkMetricsMgr';
var MetricsManager = /*#__PURE__*/function () {
  function MetricsManager(handler, playerAdapter) {
    _classCallCheck(this, MetricsManager);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "builder", void 0);
    _defineProperty(this, "playerAdapter", void 0);
    _defineProperty(this, "timeline", void 0);
    _defineProperty(this, "started", void 0);
    _defineProperty(this, "playing", void 0);
    _defineProperty(this, "buffering", void 0);
    _defineProperty(this, "seeking", void 0);
    _defineProperty(this, "bitrate", void 0);
    _defineProperty(this, "redirectionStartDate", void 0);
    _defineProperty(this, "playingStartDate", void 0);
    _defineProperty(this, "bufferingStartDate", void 0);
    _defineProperty(this, "lastLayerSwitchDate", void 0);
    _defineProperty(this, "lastSeekDate", void 0);
    _defineProperty(this, "playOnNextBufferingEnd", void 0);
    _defineProperty(this, "startPosition", void 0);
    this.handler = handler;
    this.builder = new _Metrics__WEBPACK_IMPORTED_MODULE_7__.MetricsBuilder();
    this.playerAdapter = playerAdapter;
    this.timeline = this.handler.sessionReport.timeline;
    this.started = false;
    this.playing = false;
    this.buffering = false;
    this.seeking = false;
    this.bitrate = -1;
    this.redirectionStartDate = Date.now();
    this.playingStartDate = Date.now();
    this.bufferingStartDate = 0;
    this.lastLayerSwitchDate = 0;
    this.lastSeekDate = 0;
    this.playOnNextBufferingEnd = false;
    this.startPosition = 0;
  }

  // @override
  _createClass(MetricsManager, [{
    key: "onStart",
    value: function onStart() {
      this.redirectionStartDate = Date.now();
    }

    // @override
  }, {
    key: "onRedirectionEnd",
    value: function onRedirectionEnd() {
      this.builder.setRedirectionTime(Date.now() - this.redirectionStartDate);
      this.playingStartDate = Date.now();
    }

    // @override
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.i(TAG, 'Streaming session started (' + bitrate + 'kbps,' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_8__["default"].formatTime(startPosition) + ')', this.handler.id);
      this.started = true;
      this.playing = true;
      this.startPosition = startPosition;
      this.builder.setContentDuration(this.playerAdapter.getDuration()).setPlaybackType(this.playerAdapter.getDuration() <= 0 ? _Metrics__WEBPACK_IMPORTED_MODULE_7__.Metrics.PLAYBACK_TYPE_LIVE : _Metrics__WEBPACK_IMPORTED_MODULE_7__.Metrics.PLAYBACK_TYPE_VOD);
      this.builder.setStartupTime(Date.now() - this.redirectionStartDate);
      this.playingStartDate = Date.now();
      this.builder.setFirstLayer(bitrate);
      this.bitrate = bitrate;
      this.lastLayerSwitchDate = Date.now();
    }

    // @override
  }, {
    key: "onLayerSwitch",
    value: function onLayerSwitch(bitrate) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player changed layer to ' + bitrate + 'kbps', this.handler.id);
      if (this.started) {
        this.builder.addTimeSpentPerLayer(this.bitrate, Date.now() - this.lastLayerSwitchDate);
        this.lastLayerSwitchDate = Date.now();
        if (this.bitrate !== bitrate && this.bitrate > 0) {
          var _this$timeline;
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player changed layer, before: ' + this.bitrate + 'kbps, now: ' + bitrate + 'kbps', this.handler.id);
          (_this$timeline = this.timeline) === null || _this$timeline === void 0 || _this$timeline.pushEventBitrate(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.LayerSwitch, bitrate);
          this.builder.addLayerSwitch();
        }
      }
      this.bitrate = bitrate;
    }

    // @override
  }, {
    key: "onPause",
    value: function onPause() {
      if (this.playing) {
        var _this$timeline2;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player is paused', this.handler.id);
        (_this$timeline2 = this.timeline) === null || _this$timeline2 === void 0 || _this$timeline2.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Pause);
        this.playing = false;
        if (!this.buffering) {
          this.builder.addPlaybackDuration(Date.now() - this.playingStartDate);
        }
        this.builder.addWatchingRange(this.startPosition, this.playerAdapter.getPosition());
      }
    }

    // @override
  }, {
    key: "onResume",
    value: function onResume() {
      if (this.started && !this.playing) {
        var _this$timeline3;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player is resumed', this.handler.id);
        (_this$timeline3 = this.timeline) === null || _this$timeline3 === void 0 || _this$timeline3.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Resume);
        this.playing = true;
        this.buffering = false;
        this.playingStartDate = Date.now();
      }
    }

    // @override
  }, {
    key: "onBufferingStart",
    value: function onBufferingStart() {
      if (!this.buffering && this.started) {
        var _this$timeline4;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player is buffering', this.handler.id);
        (_this$timeline4 = this.timeline) === null || _this$timeline4 === void 0 || _this$timeline4.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.BufferingStart);
        var currentDate = Date.now();
        this.buffering = true;
        if (this.seeking && currentDate - this.lastSeekDate > MetricsManager.MAX_TIME_BETWEEN_SEEK_AND_REBUFFERING) {
          this.seeking = false;
        }
        this.bufferingStartDate = currentDate;
        this.playOnNextBufferingEnd = false;
        if (this.playing) {
          this.builder.addPlaybackDuration(currentDate - this.playingStartDate);
        }
      }
    }

    // @override
  }, {
    key: "onBufferingEnd",
    value: function onBufferingEnd(isPlaying) {
      var currentDate = Date.now();
      if (isPlaying && this.playOnNextBufferingEnd && !this.buffering) {
        this.playingStartDate = currentDate;
        this.playOnNextBufferingEnd = false;
      }
      if (this.started && this.bufferingStartDate > 0) {
        this.buffering = false;
        if (isPlaying) {
          this.playingStartDate = currentDate;
        } else {
          this.playOnNextBufferingEnd = true;
        }
        if (this.seeking) {
          this.seeking = false;
          this.handler.notifyRebufferingEnd();
        } else {
          this.handler.notifyStallEnd();
        }
        this.bufferingStartDate = 0;
      }
    }

    // @override
  }, {
    key: "onStallEnd",
    value: function onStallEnd() {
      var _this$timeline5;
      var bufferingDuration = Date.now() - this.bufferingStartDate;
      this.builder.addStall(bufferingDuration);
      (_this$timeline5 = this.timeline) === null || _this$timeline5 === void 0 || _this$timeline5.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.StallStop);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player stalled for ' + bufferingDuration + 'ms', this.handler.id);
    }

    // @override
  }, {
    key: "onRebufferingEnd",
    value: function onRebufferingEnd() {
      var _this$timeline6;
      var bufferingDuration = Date.now() - this.bufferingStartDate;
      this.builder.addRebuffering(bufferingDuration);
      (_this$timeline6 = this.timeline) === null || _this$timeline6 === void 0 || _this$timeline6.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.RebufferingStop);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player buffered for ' + bufferingDuration + 'ms', this.handler.id);
    }

    // @override
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      var _this$timeline7;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player seeked from ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_8__["default"].formatTime(start) + ' to ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_8__["default"].formatTime(end), this.handler.id);
      (_this$timeline7 = this.timeline) === null || _this$timeline7 === void 0 || _this$timeline7.pushEventPositionStartEnd(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Seek, start, end);
      this.builder.addWatchingRange(this.startPosition, start);
      this.startPosition = end;
      this.seeking = true;
      this.lastSeekDate = Date.now();
    }

    // @override
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      if (this.started) {
        var currentDate = Date.now();
        if (this.playing && !this.buffering) {
          this.builder.addPlaybackDuration(currentDate - this.playingStartDate);
        }
        if (this.buffering) {
          this.onBufferingEnd(false);
        }
        if (this.playing) {
          this.builder.addWatchingRange(this.startPosition, this.playerAdapter.getPosition());
          this.playing = false;
        }
        this.builder.setSessionDuration(currentDate - this.redirectionStartDate).addTimeSpentPerLayer(this.bitrate, currentDate - this.lastLayerSwitchDate);
        this.started = false;
      }
    }

    // @override
  }, {
    key: "onStartSessionReportUpdateRequested",
    value: function onStartSessionReportUpdateRequested(sessionReport) {
      sessionReport.metrics = this.builder.build();
    }

    // @override
  }, {
    key: "onKeepaliveSessionReportUpdateRequested",
    value: function onKeepaliveSessionReportUpdateRequested(sessionReport) {
      var currentDate = Date.now();
      var builder = this.builder.clone();
      if (this.playing && !this.buffering) {
        builder.addPlaybackDuration(currentDate - this.playingStartDate);
      }
      if (this.started && this.bufferingStartDate > 0) {
        var bufferingDuration = Date.now() - this.bufferingStartDate;
        if (this.seeking) {
          builder.addRebuffering(bufferingDuration);
        } else {
          builder.addStall(bufferingDuration);
        }
      }
      if (this.playing) {
        builder.addWatchingRange(this.startPosition, this.playerAdapter.getPosition());
      }
      builder.setSessionDuration(currentDate - this.redirectionStartDate).addTimeSpentPerLayer(this.bitrate, currentDate - this.lastLayerSwitchDate);
      var preStartupTimeString = this.handler.getCustomParameters()['pre_startup_time'];
      var preStartupTime = 0;
      if (preStartupTimeString !== undefined && !isNaN(preStartupTimeString)) {
        preStartupTime = parseInt(preStartupTimeString, 10);
      }
      builder.setPreStartupTime(preStartupTime);
      sessionReport.metrics = builder.build();
    }

    // @override
  }, {
    key: "onEndSessionReportUpdateRequested",
    value: function onEndSessionReportUpdateRequested(sessionReport) {
      var currentDate = Date.now();
      this.builder.setSessionDuration(currentDate - this.redirectionStartDate);
      var preStartupTimeString = this.handler.getCustomParameters()['pre_startup_time'];
      var preStartupTime = 0;
      if (preStartupTimeString !== undefined && !isNaN(preStartupTimeString)) {
        preStartupTime = parseInt(preStartupTimeString, 10);
      }
      this.builder.setPreStartupTime(preStartupTime);
      sessionReport.metrics = this.builder.build();
    }
  }]);
  return MetricsManager;
}();
_defineProperty(MetricsManager, "MAX_TIME_BETWEEN_SEEK_AND_REBUFFERING", 1000);


/***/ }),

/***/ "./src_core/analytics/player/GenericPlayerAdapter.js":
/*!***********************************************************!*\
  !*** ./src_core/analytics/player/GenericPlayerAdapter.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenericPlayerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _PlayerAdapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PlayerAdapter */ "./src_core/analytics/player/PlayerAdapter.js");
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/ObjectUtils */ "./src_core/utils/ObjectUtils.js");











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var GenericPlayerAdapter = /*#__PURE__*/function (_PlayerAdapter) {
  _inherits(GenericPlayerAdapter, _PlayerAdapter);
  var _super = _createSuper(GenericPlayerAdapter);
  function GenericPlayerAdapter() {
    var _this;
    _classCallCheck(this, GenericPlayerAdapter);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "player", void 0);
    _defineProperty(_assertThisInitialized(_this), "listener", void 0);
    return _this;
  }
  _createClass(GenericPlayerAdapter, [{
    key: "getName",
    value: function getName() {
      return this.player.getPlayerName();
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.player.getVersion();
    }
  }, {
    key: "getOSName",
    value: function getOSName() {
      return this.player.getOSName();
    }
  }, {
    key: "getOSVersion",
    value: function getOSVersion() {
      return this.player.getDeviceVersion();
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      return this.player.getDeviceType();
    }
  }, {
    key: "getBitrate",
    value: function getBitrate() {
      return this.player.getCurrentBitrate();
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.player.getCurrentPosition();
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.player.getTotalDuration();
    }
  }, {
    key: "getCapabilities",
    value: function getCapabilities() {
      if (typeof this.player['getCapabilities'] === 'function') {
        return this.player.getCapabilities();
      }
      return _get(_getPrototypeOf(GenericPlayerAdapter.prototype), "getCapabilities", this).call(this);
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      if (GenericPlayerAdapter.checkPlayer(player, listener)) {
        this.player = player;
        this.listener = listener;
        this.player.playerAdapter = this;
        return true;
      }
      return false;
    }
  }, {
    key: "detachPlayer",
    value: function detachPlayer() {
      if (this.player !== undefined) {
        this.player.playerAdapter = undefined;
      }
      this.player = undefined;
      this.listener = undefined;
    }
  }], [{
    key: "checkPlayer",
    value: function checkPlayer(player, listener) {
      return _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_12__["default"].hasMethods(player, ['getPlayerName', 'getVersion', 'getOSName', 'getDeviceVersion', 'getDeviceType', 'getCurrentPosition', 'getTotalDuration', 'getCurrentBitrate']);
    }
  }]);
  return GenericPlayerAdapter;
}(_PlayerAdapter__WEBPACK_IMPORTED_MODULE_11__["default"]);


/***/ }),

/***/ "./src_core/analytics/player/GenericPlayerApi.js":
/*!*******************************************************!*\
  !*** ./src_core/analytics/player/GenericPlayerApi.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenericPlayerApi; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TAG = 'BpkGenericPlayerApi';

/** @module Analytics */

/**
 * Generic player API
 */
var GenericPlayerApi = /*#__PURE__*/function () {
  function GenericPlayerApi() {
    _classCallCheck(this, GenericPlayerApi);
    _defineProperty(this, "playerAdapter", void 0);
  }

  /**
   * Get the player name
   */
  _createClass(GenericPlayerApi, [{
    key: "getPlayerName",
    value: function getPlayerName() {
      return '';
    }

    /**
     * Get the player version
     */
  }, {
    key: "getVersion",
    value: function getVersion() {
      return '';
    }
  }, {
    key: "getOSName",
    value: function getOSName() {
      return '';
    }
  }, {
    key: "getDeviceVersion",
    value: function getDeviceVersion() {
      return '';
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      return '';
    }

    /**
     * Get the current position in milliseconds
     */
  }, {
    key: "getCurrentPosition",
    value: function getCurrentPosition() {
      return 0;
    }

    /**
     * Get the total duration in milliseconds
     *
     * Note: return 0 if the current media is a LIVE
     */
  }, {
    key: "getTotalDuration",
    value: function getTotalDuration() {
      return 0;
    }

    /**
     * Get the current bitrate in kbps
     */
  }, {
    key: "getCurrentBitrate",
    value: function getCurrentBitrate() {
      return 0;
    }

    /**
     * Get player capabilities for SmartLib
     *
     * @return Map with capabilities
     */
  }, {
    key: "getCapabilities",
    value: function getCapabilities() {
      return {};
    }

    /**
     * Notify that the session has started
     *
     * To call when the first image is displayed
     */
  }, {
    key: "notifyFirstImage",
    value: function notifyFirstImage() {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyFirstImage();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyFirstImage. This event is called when the first image is displayed.');
      }
    }

    /**
     * Notify that the player has been paused
     */
  }, {
    key: "notifyPause",
    value: function notifyPause() {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyPause();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyPause.');
      }
    }

    /**
     * Notify that the player has been resumed
     */
  }, {
    key: "notifyResume",
    value: function notifyResume() {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyResume();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyResume.');
      }
    }

    /**
     * Notify that the player did change the current layer
     *
     * @param bitrate bitrate in kbps
     */
  }, {
    key: "notifyLayerSwitch",
    value: function notifyLayerSwitch(bitrate) {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyLayerSwitch(bitrate);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyLayerSwitch.');
      }
    }

    /**
     * Notify that the player did start stalling/buffering
     */
  }, {
    key: "notifyStallStart",
    value: function notifyStallStart() {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyStallStart();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyStallStart.');
      }
    }

    /**
     * Notify that the player did end stalling/buffering
     *
     * @param isPlaying The player is playing when the buffering ends (i.e user did not pause the playback during buffering)
     */
  }, {
    key: "notifyStallEnd",
    value: function notifyStallEnd(isPlaying) {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyStallEnd(isPlaying);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyStallEnd.');
      }
    }

    /**
     * Notify that the player did seek
     *
     * @param start position before seek in milliseconds
     * @param end position where the player did seek in milliseconds
     */
  }, {
    key: "notifySeek",
    value: function notifySeek(start, end) {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifySeek(start, end);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifySeek.');
      }
    }

    /**
     * Set the player error code as a string. This value will be sent to the analytics solution.
     *
     * To call when the player is triggering a non-recoverable error
     * @param playerErrorCode Player error code
     */
  }, {
    key: "setPlayerErrorCode",
    value: function setPlayerErrorCode(playerErrorCode) {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.setPlayerErrorCode(playerErrorCode);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to setPlayerErrorCode. This has to be called before stopStreamingSession when the player error code as a string.');
      }
    }
  }]);
  return GenericPlayerApi;
}();


/***/ }),

/***/ "./src_core/analytics/player/PlayerAdapter.js":
/*!****************************************************!*\
  !*** ./src_core/analytics/player/PlayerAdapter.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _service_AppStateManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/AppStateManager */ "./src_core/service/AppStateManager.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TAG = 'BpkPlayerAdapter';
var PlayerAdapter = /*#__PURE__*/function () {
  function PlayerAdapter() {
    var _this = this;
    _classCallCheck(this, PlayerAdapter);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "webOSVersion", void 0);
    if (typeof webOS !== 'undefined') {
      webOS.deviceInfo(function (info) {
        _this.webOSVersion = info.sdkVersion;
      });
    }
  }

  /**
   * Called by SmartLib
   * @returns {string} Player name
   */
  _createClass(PlayerAdapter, [{
    key: "getName",
    value: function getName() {
      return '';
    }

    /**
     * Called by SmartLib
     * @returns {string} Player version
     */
  }, {
    key: "getVersion",
    value: function getVersion() {
      return '';
    }
  }, {
    key: "getOSName",
    value: function getOSName() {
      return _service_AppStateManager__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().osName;
    }
  }, {
    key: "getOSVersion",
    value: function getOSVersion() {
      return _service_AppStateManager__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().osVersion;
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      return _service_AppStateManager__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().deviceType;
    }
  }, {
    key: "getBitrate",
    value: function getBitrate() {
      return -1;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return 0;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return 0;
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      return 1.0;
    }
  }, {
    key: "getCapabilities",
    value: function getCapabilities() {
      return {
        'adTracking': false
      };
    }

    /**
     * Called by SmartLib when the session is starting
     */
  }, {
    key: "initSessionPlayerObjects",
    value: function initSessionPlayerObjects() {}

    /**
     * Called by SmartLib when the session is stopped
     */
  }, {
    key: "releaseSessionPlayerObjects",
    value: function releaseSessionPlayerObjects() {}
  }, {
    key: "onKeepaliveSessionReportUpdateRequested",
    value: function onKeepaliveSessionReportUpdateRequested(sessionReport) {
      sessionReport.playerName = this.getName();
      sessionReport.playerVersion = this.getVersion();
      sessionReport.osName = this.getOSName();
      sessionReport.osVersion = this.getOSVersion();
      sessionReport.deviceType = this.getDeviceType();
    }
  }, {
    key: "onEndSessionReportUpdateRequested",
    value: function onEndSessionReportUpdateRequested(sessionReport) {
      sessionReport.playerName = this.getName();
      sessionReport.playerVersion = this.getVersion();
      sessionReport.osName = this.getOSName();
      sessionReport.osVersion = this.getOSVersion();
      sessionReport.deviceType = this.getDeviceType();
    }
  }, {
    key: "notifyLoading",
    value: function notifyLoading() {
      if (this.handler !== undefined) {
        this.handler.notifyLoading();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer should be called prior to onSessionStart event. ' + 'This event is called when the player starts buffering the first time.');
      }
    }

    /**
     * Called by the player
     */
  }, {
    key: "notifyFirstImage",
    value: function notifyFirstImage() {
      if (this.handler !== undefined) {
        this.handler.notifyFirstImage(this.getBitrate(), this.getPosition());
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSessionStart event. This event is called when the first image is displayed.');
      }
    }
  }, {
    key: "notifyPause",
    value: function notifyPause() {
      if (this.handler !== undefined) {
        this.handler.notifyPause();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSessionPause event.');
      }
    }
  }, {
    key: "notifyResume",
    value: function notifyResume() {
      if (this.handler !== undefined) {
        this.handler.notifyResume();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSessionResume event.');
      }
    }
  }, {
    key: "notifyLayerSwitch",
    value: function notifyLayerSwitch() {
      var bitrate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getBitrate();
      if (this.handler !== undefined) {
        this.handler.notifyLayerSwitch(bitrate);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onLayerSwitch event.');
      }
    }
  }, {
    key: "notifySeek",
    value: function notifySeek(start, end) {
      if (this.handler !== undefined) {
        this.handler.notifySeek(start, end);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSeek event.');
      }
    }
  }, {
    key: "notifyStallStart",
    value: function notifyStallStart() {
      if (this.handler !== undefined) {
        this.handler.notifyBufferingStart();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onStallStart event.');
      }
    }
  }, {
    key: "notifyStallEnd",
    value: function notifyStallEnd() {
      var isPlaying = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.handler !== undefined) {
        this.handler.notifyBufferingEnd(isPlaying);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onStallEnd event.');
      }
    }
  }, {
    key: "notifyClose",
    value: function notifyClose() {
      var broadpeakStatusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.handler !== undefined) {
        this.handler.notifyClose(broadpeakStatusCode);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer should be called prior to onSessionStart event. ' + 'This event is called when the player is closing.');
      }
    }
  }, {
    key: "notifyVolumeChanged",
    value: function notifyVolumeChanged(volume) {
      if (this.handler !== undefined) {
        this.handler.notifyVolumeChanged(volume);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onVolumeChanged event.');
      }
    }
  }, {
    key: "notifyPlayerError",
    value: function notifyPlayerError(broadpeakStatusCode, playerErrorCode) {
      if (this.handler !== undefined) {
        this.handler.notifyPlayerError(broadpeakStatusCode, playerErrorCode);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onPlayerError event.');
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: attachPlayer not implemented for this adapter.');
      return false;
    }
  }, {
    key: "detachPlayer",
    value: function detachPlayer() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: detachPlayer not implemented for this adapter.');
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
    }
  }, {
    key: "setStatusCode",
    value: function setStatusCode(statusCode) {
      if (this.handler !== undefined) {
        this.handler.sessionReport.statusCode = statusCode;
      }
    }
  }, {
    key: "setPlayerErrorCode",
    value: function setPlayerErrorCode(playerErrorCode) {
      if (this.handler !== undefined) {
        this.handler.sessionReport.playerErrorCode = String(playerErrorCode);
      }
    }
  }, {
    key: "setCustomParameter",
    value: function setCustomParameter(name, value) {
      if (this.handler !== undefined) {
        if (this.handler.streamingSession === undefined) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Set custom parameter on player adapter is only available when using StreamingSession API.', this.handler.id);
        } else {
          this.handler.streamingSession.setCustomParameter(name, value);
        }
      }
    }
  }], [{
    key: "checkPlayer",
    value: function checkPlayer(player, listener) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.e(TAG, 'Implementation error: static checkPlayer not implemented for this adapter.');
      return false;
    }
  }]);
  return PlayerAdapter;
}();


/***/ }),

/***/ "./src_core/analytics/player/PlayerEventListener.js":
/*!**********************************************************!*\
  !*** ./src_core/analytics/player/PlayerEventListener.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerEventListener; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TAG = 'BpkPlayerEventListener';
var PlayerEventListener = /*#__PURE__*/function () {
  function PlayerEventListener() {
    _classCallCheck(this, PlayerEventListener);
  }
  _createClass(PlayerEventListener, null, [{
    key: "addPlayerAdapter",
    value: function addPlayerAdapter(adapter) {
      if (PlayerEventListener.playerAdapters.indexOf(adapter) === -1) {
        PlayerEventListener.playerAdapters.push(adapter);
      }
    }
  }, {
    key: "removePlayerAdapter",
    value: function removePlayerAdapter(adapter) {
      var index = PlayerEventListener.playerAdapters.indexOf(adapter);
      if (index !== -1) {
        PlayerEventListener.playerAdapters.splice(index, 1);
      }
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      /* if (PlayerEventListener.playerAdapter !== undefined && PlayerEventListener.playerAdapter.handler !== undefined) {
          return PlayerEventListener.playerAdapter.handler.metricsManager.started;
      }*/
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        return adapters[adapters.length - 1].handler !== undefined && adapters[adapters.length - 1].handler.metricsManager.started;
      }
      return false;
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      /* if (PlayerEventListener.playerAdapter !== undefined && PlayerEventListener.playerAdapter.handler !== undefined) {
          return PlayerEventListener.playerAdapter.handler.metricsManager.playing;
      }*/
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        return adapters[adapters.length - 1].handler !== undefined && adapters[adapters.length - 1].handler.metricsManager.playing;
      }
      return false;
    }
  }, {
    key: "isBuffering",
    value: function isBuffering() {
      /* if (PlayerEventListener.playerAdapter !== undefined && PlayerEventListener.playerAdapter.handler !== undefined) {
          return PlayerEventListener.playerAdapter.handler.metricsManager.buffering;
      }*/
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        return adapters[adapters.length - 1].handler !== undefined && adapters[adapters.length - 1].handler.metricsManager.buffering;
      }
      return false;
    }
  }, {
    key: "onSessionStart",
    value: function onSessionStart() {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifyFirstImage();
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSessionStart event. If you don\'t attach any player, ' + 'please remove this call, SmartLib is now handling it automatically.');
      }
    }
  }, {
    key: "onSessionPause",
    value: function onSessionPause() {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifyPause();
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSessionPause event.');
      }
    }
  }, {
    key: "onSessionResume",
    value: function onSessionResume() {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifyResume();
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSessionResume event.');
      }
    }
  }, {
    key: "onLayerSwitch",
    value: function onLayerSwitch(bitrate) {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifyLayerSwitch(bitrate);
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onLayerSwitch event.');
      }
    }
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifySeek(start, end);
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSeek event.');
      }
    }
  }, {
    key: "onStallStart",
    value: function onStallStart() {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifyStallStart();
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onStallStart event.');
      }
    }
  }, {
    key: "onStallEnd",
    value: function onStallEnd(isPlaying) {
      var adapters = PlayerEventListener.playerAdapters;
      if (adapters.length > 0) {
        adapters.forEach(function (adapter) {
          return adapter.notifyStallEnd(isPlaying);
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_9__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onStallEnd event.');
      }
    }
  }]);
  return PlayerEventListener;
}();
_defineProperty(PlayerEventListener, "playerAdapters", []);


/***/ }),

/***/ "./src_core/analytics/player/PlayerManager.js":
/*!****************************************************!*\
  !*** ./src_core/analytics/player/PlayerManager.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GenericPlayerAdapter */ "./src_core/analytics/player/GenericPlayerAdapter.js");
/* harmony import */ var _PlayerEventListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlayerEventListener */ "./src_core/analytics/player/PlayerEventListener.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var TAG = 'BpkPlayerMgr';
var AbstractPlayerManagerHandler = /*#__PURE__*/function () {
  function AbstractPlayerManagerHandler() {
    _classCallCheck(this, AbstractPlayerManagerHandler);
  }
  _createClass(AbstractPlayerManagerHandler, null, [{
    key: "loadPlayerAdapters",
    value: function loadPlayerAdapters() {
      return {};
    }
  }]);
  return AbstractPlayerManagerHandler;
}();
var _playerManagerHandler = /*#__PURE__*/new WeakMap();
var _playerAdapters = /*#__PURE__*/new WeakMap();
var _playerAdapter = /*#__PURE__*/new WeakMap();
var PlayerManager = /*#__PURE__*/function () {
  function PlayerManager() {
    _classCallCheck(this, PlayerManager);
    _defineProperty(this, "smartLib", void 0);
    _classPrivateFieldInitSpec(this, _playerManagerHandler, {
      writable: true,
      value: AbstractPlayerManagerHandler
    });
    _classPrivateFieldInitSpec(this, _playerAdapters, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _playerAdapter, {
      writable: true,
      value: void 0
    });
  }
  _createClass(PlayerManager, [{
    key: "init",
    value: function init(playerManagerHandler) {
      if (_classPrivateFieldGet(this, _playerManagerHandler) === AbstractPlayerManagerHandler) {
        _classPrivateFieldSet(this, _playerManagerHandler, playerManagerHandler);
        _classPrivateFieldSet(this, _playerAdapters, _classPrivateFieldGet(this, _playerManagerHandler).loadPlayerAdapters());
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, 'Compatible players: ' + Object.keys(_classPrivateFieldGet(this, _playerAdapters)));
      }
    }
  }, {
    key: "release",
    value: function release() {
      this.setPlayerAdapter(undefined);
    }
  }, {
    key: "attachInstance",
    value: function attachInstance(smartLib) {
      this.smartLib = smartLib;
    }
  }, {
    key: "getAdapters",
    value: function getAdapters() {
      return _classPrivateFieldGet(this, _playerAdapters);
    }
  }, {
    key: "setPlayerAdapter",
    value: function setPlayerAdapter(playerAdapter) {
      if (_classPrivateFieldGet(this, _playerAdapter) !== undefined && _classPrivateFieldGet(this, _playerAdapter) !== playerAdapter) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.i(TAG, 'Player ' + _classPrivateFieldGet(this, _playerAdapter).getName() + ' detached');
        _classPrivateFieldGet(this, _playerAdapter).detachPlayer();
      }
      if (_classPrivateFieldGet(this, _playerAdapter) !== playerAdapter && playerAdapter !== undefined) {
        if (playerAdapter instanceof _GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_11__["default"]) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Attaching generic player to SmartLib singleton');
          _PlayerEventListener__WEBPACK_IMPORTED_MODULE_12__["default"].addPlayerAdapter(playerAdapter);
        }
      } else if (_classPrivateFieldGet(this, _playerAdapter) !== playerAdapter && playerAdapter === undefined) {
        if (_classPrivateFieldGet(this, _playerAdapter) instanceof _GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_11__["default"]) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Detaching generic player from SmartLib singleton');
          _PlayerEventListener__WEBPACK_IMPORTED_MODULE_12__["default"].removePlayerAdapter(_classPrivateFieldGet(this, _playerAdapter));
        }
      }
      if (_classPrivateFieldGet(this, _playerAdapter) !== playerAdapter) {
        _classPrivateFieldSet(this, _playerAdapter, playerAdapter);
      } else if (playerAdapter !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.i(TAG, 'Player ' + _classPrivateFieldGet(this, _playerAdapter).getName() + ' already attached');
      }
      if (playerAdapter !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.i(TAG, 'Player ' + playerAdapter.getName() + ' attached');
      }
    }
  }, {
    key: "getPlayerAdapter",
    value: function getPlayerAdapter() {
      return _classPrivateFieldGet(this, _playerAdapter);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_classStaticPrivateFieldSpecGet(PlayerManager, PlayerManager, _instance)) {
        _classStaticPrivateFieldSpecSet(PlayerManager, PlayerManager, _instance, new PlayerManager());
      }
      return _classStaticPrivateFieldSpecGet(PlayerManager, PlayerManager, _instance);
    }
  }]);
  return PlayerManager;
}();
/**
 * Singleton
 */
var _instance = {
  writable: true,
  value: void 0
};


/***/ }),

/***/ "./src_core/cache/CacheManager.js":
/*!****************************************!*\
  !*** ./src_core/cache/CacheManager.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BroadpeakCDNCacheKeepaliveManager: function() { return /* binding */ BroadpeakCDNCacheKeepaliveManager; },
/* harmony export */   CacheKeepaliveManager: function() { return /* binding */ CacheKeepaliveManager; },
/* harmony export */   CacheManager: function() { return /* binding */ CacheManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_MathUtils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/MathUtils */ "./src_core/utils/MathUtils.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../SmartLib */ "./src_core/SmartLib.js");
/* harmony import */ var _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../request/AnalyticsRequestManager */ "./src_core/request/AnalyticsRequestManager.js");
/* harmony import */ var _network_KeepAliveManager__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../network/KeepAliveManager */ "./src_core/network/KeepAliveManager.js");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var TAG = 'BpkCacheMgr';

/**
 * Cache handler wrapper
 */
var AbstractCacheHandler = /*#__PURE__*/function () {
  function AbstractCacheHandler() {
    _classCallCheck(this, AbstractCacheHandler);
  }
  _createClass(AbstractCacheHandler, [{
    key: "set",
    value: function set(key, value) {}
  }, {
    key: "get",
    value: function get(key) {
      return undefined;
    }
  }, {
    key: "delete",
    value: function _delete(key) {}
  }, {
    key: "keys",
    value: function keys() {
      return [];
    }
  }]);
  return AbstractCacheHandler;
}();
/**
 * Cache storage manager
 */
var CacheManager = /*#__PURE__*/function () {
  function CacheManager() {
    _classCallCheck(this, CacheManager);
    _defineProperty(this, "smartLib", void 0);
    /**
     * Platform specific cache handler
     */
    _defineProperty(this, "cacheHandler", void 0);
    this.cacheHandler = new AbstractCacheHandler();
  }

  /**
   * Init cache manager
   * It has to called by the wrapper
   *
   * @param cacheHandler platform specific cache handler
   */
  _createClass(CacheManager, [{
    key: "init",
    value: function init(cacheHandler) {
      this.cacheHandler = cacheHandler;
    }
  }, {
    key: "attachInstance",
    value: function attachInstance(smartLib) {
      var _this = this;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Init cache manager...');
      this.smartLib = smartLib;

      // Reset all flags
      this.getCacheData('report-').forEach(function (cache) {
        if (cache !== undefined) {
          cache.value.sending = false;
          _this.store(cache.key, cache.value);
        }
      });
    }

    /**
     * Get cache value parsed
     * @param key key in cache
     * @returns {undefined|*} object
     */
  }, {
    key: "get",
    value: function get(key) {
      var data = this.cacheHandler.get(key);
      if (data === undefined) {
        return undefined;
      }
      try {
        // Parse report
        if (!data.startsWith('{')) {
          // if base64
          data = _utils_MathUtils__WEBPACK_IMPORTED_MODULE_21__["default"].base64ToString(data);
        }
        data = JSON.parse(data);
        return data;
      } catch (e) {
        // Remove report if it cannot be read
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.e(TAG, 'Error while parsing ' + key + ' (' + e.message + ')');
        this.cacheHandler.delete(key);
        return undefined;
      }
    }

    /**
     * Store any value to the cache
     * The value is stringified and encoded with base64
     * @param key cache id
     * @param value cache value
     */
  }, {
    key: "store",
    value: function store(key, value) {
      this.cacheHandler.set(key, _utils_MathUtils__WEBPACK_IMPORTED_MODULE_21__["default"].stringToBase64(JSON.stringify(value)));
      // this.cacheHandler.set(key, JSON.stringify(value)); // without base64
    }

    /**
     * Update a field in cache
     * @param key key in cache
     * @param name field name
     * @param value field value
     */
  }, {
    key: "update",
    value: function update(key, name, value) {
      var data = this.get(key);
      if (data !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Updating ' + key + ', set ' + name + ' to ' + value);
        data[name] = value;
        this.store(key, data);
      }
    }

    /**
     * Store a handler report in the cache
     * @param address analytics full address
     * @param report SessionReport in JSON
     * @param clean clean cache after storing the report
     * @param date date of the session report
     * @param sending default sending flag
     */
  }, {
    key: "storeSessionReport",
    value: function storeSessionReport(address, report) {
      var clean = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var date = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Date.now();
      var sending = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var id = 'report-' + _utils_MathUtils__WEBPACK_IMPORTED_MODULE_21__["default"].randomIntFromInterval(1000000, 9999999) + '' + date;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.i(TAG, 'Storing ' + id + ' in cache...');
      var data = {
        version: this.smartLib.getVersion(),
        date: date,
        sending: sending,
        address: address,
        report: report
      };
      this.store(id, data);

      // Clean cache when storing a new report (enabled by default)
      if (clean === true) {
        this.clean();
      }
      return id;
    }

    /**
     * Delete session report by session report id
     * @param id session report id
     */
  }, {
    key: "deleteSessionReport",
    value: function deleteSessionReport(id) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.i(TAG, 'Deleting ' + id + ' from cache...');
      this.cacheHandler.delete(id);
    }

    /**
     * Store a keepalive report
     * @param address base analytics addresses, handle multiple endpoint
     * @param report SessionReport in JSON
     */
  }, {
    key: "storeKeepaliveReport",
    value: function storeKeepaliveReport(address, report) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.i(TAG, 'Storing keepalive-' + report['session_id'] + ' in cache...');
      var data = {
        version: this.smartLib.getVersion(),
        date: Date.now(),
        address: address,
        report: report
      };
      this.store('keepalive-' + report['session_id'], data);
    }

    /**
     * Delete keepalive report by session report id
     * @param sessionId session report id
     */
  }, {
    key: "deleteKeepaliveReport",
    value: function deleteKeepaliveReport(sessionId) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.i(TAG, 'Deleting keepalive-' + sessionId + ' from cache...');
      this.cacheHandler.delete('keepalive-' + sessionId);
    }

    /**
     * Load all session reports from the cache
     * @returns {*} All session reports, JSON parsed, ordered by stored date
     */
  }, {
    key: "getCacheData",
    value: function getCacheData() {
      var _this2 = this;
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.cacheHandler.keys() // Get all cache keys
      .filter(function (key) {
        return key.startsWith(filter);
      }) // Filter on reports
      .map(function (key) {
        // Load all reports
        var value = _this2.get(key);
        return value === undefined ? undefined : {
          key: key,
          value: value
        };
      });
    }

    /**
     * Push cache to the server
     */
  }, {
    key: "push",
    value: function push() {
      var _this3 = this;
      // Clean cache before pushing
      this.clean();

      // Send reports
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.i(TAG, 'Sending cache content if any...');
      this.getCacheData('report-').forEach(function (cache) {
        if (cache !== undefined) {
          if (cache.value.sending === true) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Sending cache ' + cache.key + ' already in progress...');
          } else {
            var _SmartLib$analyticsMo;
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Sending cache ' + cache.key + '...');

            // Update sending status, to avoid sending a report twice
            cache.value.sending = true;

            // Add delay field, delta between current date and first sent date
            cache.value.report.delay = Math.round((Date.now() - cache.value.date) / 1000);

            // Update cache
            _this3.store(cache.key, cache.value);

            // Send cache
            (_SmartLib$analyticsMo = _SmartLib__WEBPACK_IMPORTED_MODULE_22__["default"].analyticsModule) === null || _SmartLib$analyticsMo === void 0 || _SmartLib$analyticsMo.AnalyticsRequestManager.getInstance().endSessionCache(cache.value.address, cache.value.report, _this3.smartLib.getParameters()).then(function (sent) {
              if (sent === true) {
                _this3.deleteSessionReport(cache.key);
              } else {
                // Update sending status, to avoid sending a report twice
                cache.value.sending = false;

                // Update cache
                _this3.store(cache.key, cache.value);
              }
            });
          }
        }
      });
    }

    /**
     * Clean data with an expired date
     * @param filter filter on key
     * @returns {*} remaining data order by newest first
     */
  }, {
    key: "cleanExpiredData",
    value: function cleanExpiredData(filter) {
      var _this4 = this;
      return this.getCacheData(filter).map(function (cache) {
        // Clean expired reports
        if (cache !== undefined && (cache.value.date === undefined || Date.now() - cache.value.date > CacheManager.CACHE_DURATION)) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Cleaning ' + cache.key + ' (cache duration reached)...');
          _this4.cacheHandler.delete(cache.key);
          return undefined;
        }
        return cache;
      }).filter(function (cache) {
        return cache !== undefined;
      }).sort(function (a, b) {
        return b.value.date - a.value.date;
      }); // newer session have low index
    }

    /**
     * Clean all expired data
     */
  }, {
    key: "clean",
    value: function clean() {
      var _this5 = this;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.i(TAG, 'Clean expired data if any...');

      // Clean expired keepalive reports
      var keepaliveReports = this.cleanExpiredData('keepalive-');

      // Migrate ended keepalive to session report
      var activeSessionIds = this.smartLib.sessionManager.sessions.map(function (session) {
        var _session$handler;
        return (_session$handler = session.handler) === null || _session$handler === void 0 || (_session$handler = _session$handler.sessionReport) === null || _session$handler === void 0 ? void 0 : _session$handler.sessionId;
      });
      keepaliveReports.forEach(function (cache) {
        // If the keepalive report is not an active session
        if (activeSessionIds.indexOf(cache.value.report['session_id']) === -1) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Migrating keepalive ' + cache.value.report['session_id'] + ' to session...');

          // Add a timeout flag to the session report
          cache.value.report.timeout = true;

          // Store it to session report
          var analyticsAddresses = cache.value.address.split(',');
          analyticsAddresses.forEach(function (analyticsAddress) {
            if (analyticsAddress.indexOf(_request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_23__["default"].NOCACHE_PREFIX) === 0) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_23__["default"].NOCACHE_PREFIX + ' option used, no need to store the report in cache');
            } else {
              _this5.storeSessionReport(_request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_23__["default"].getInstance().buildAnalyticsAddress(analyticsAddress), cache.value.report, false, cache.value.date);
            }
          });

          // Remove keepalive report
          _this5.cacheHandler.delete(cache.key);
        }
      });

      // Clean expired session reports and get remaining reports ordered by recent to oldest
      var sessionReports = this.cleanExpiredData('report-');

      // Clean oldest reports when limit is reached
      if (sessionReports.length >= CacheManager.CACHE_LIMIT) {
        for (var i = CacheManager.CACHE_LIMIT; i < sessionReports.length; i++) {
          this.deleteSessionReport(sessionReports[i].key);
        }
      }
    }
  }, {
    key: "release",
    value: function release() {
      this.clean();
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_classStaticPrivateFieldSpecGet(CacheManager, CacheManager, _instance)) {
        _classStaticPrivateFieldSpecSet(CacheManager, CacheManager, _instance, new CacheManager());
      }
      return _classStaticPrivateFieldSpecGet(CacheManager, CacheManager, _instance);
    }
  }]);
  return CacheManager;
}();

/**
 * Keepalive manager in using third party CDN
 */
/**
 * Max cache storage duration
 */
_defineProperty(CacheManager, "CACHE_DURATION", 1000 * 60 * 60 * 24 * 2);
// 2 days
/**
 * Max number of item in cache
 * @type {number}
 */
_defineProperty(CacheManager, "CACHE_LIMIT", 20);
/**
 * Singleton
 */
var _instance = {
  writable: true,
  value: void 0
};
var CacheKeepaliveManager = /*#__PURE__*/function (_KeepAliveManager) {
  _inherits(CacheKeepaliveManager, _KeepAliveManager);
  var _super = _createSuper(CacheKeepaliveManager);
  function CacheKeepaliveManager(handler) {
    var _this6;
    _classCallCheck(this, CacheKeepaliveManager);
    _this6 = _super.call(this, handler);
    _defineProperty(_assertThisInitialized(_this6), "analyticsAddress", void 0);
    _this6.analyticsAddress = _this6.handler.smartLib.getParameters().analyticsAddress;
    _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Using cache keepalive manager...', _this6.handler.id);
    return _this6;
  }
  _createClass(CacheKeepaliveManager, [{
    key: "start",
    value: function start() {
      _get(_getPrototypeOf(CacheKeepaliveManager.prototype), "start", this).call(this);

      // Store a keepalive report when the session is starting
      this.store();
    }
  }, {
    key: "callback",
    value: function callback(parameters) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // Store keepalive reports at every keepalive
      this.store();
      if (next === true) {
        this.next();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      _get(_getPrototypeOf(CacheKeepaliveManager.prototype), "stop", this).call(this);

      // Delete the keepalive report from the cache when the session is stopped
      this.delete();
    }
  }, {
    key: "store",
    value: function store() {
      var _SmartLib$analyticsMo2;
      (_SmartLib$analyticsMo2 = _SmartLib__WEBPACK_IMPORTED_MODULE_22__["default"].analyticsModule) === null || _SmartLib$analyticsMo2 === void 0 || _SmartLib$analyticsMo2.CacheManager.getInstance().storeKeepaliveReport(this.analyticsAddress, this.handler.sessionReport.toEndSessionJSON());
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _SmartLib$analyticsMo3;
      (_SmartLib$analyticsMo3 = _SmartLib__WEBPACK_IMPORTED_MODULE_22__["default"].analyticsModule) === null || _SmartLib$analyticsMo3 === void 0 || _SmartLib$analyticsMo3.CacheManager.getInstance().deleteKeepaliveReport(this.handler.sessionReport.sessionId);
    }
  }]);
  return CacheKeepaliveManager;
}(_network_KeepAliveManager__WEBPACK_IMPORTED_MODULE_24__.KeepAliveManager);

/**
 * Keepalive manager if using Broadpeak CDN and metrics receiver reporting mode
 */
var BroadpeakCDNCacheKeepaliveManager = /*#__PURE__*/function (_BroadpeakCDNKeepaliv) {
  _inherits(BroadpeakCDNCacheKeepaliveManager, _BroadpeakCDNKeepaliv);
  var _super2 = _createSuper(BroadpeakCDNCacheKeepaliveManager);
  function BroadpeakCDNCacheKeepaliveManager(handler) {
    var _this7;
    _classCallCheck(this, BroadpeakCDNCacheKeepaliveManager);
    _this7 = _super2.call(this, handler);

    // Overwrite next callback to remove the CacheKeepaliveManager, and only use the keepalive of BroadpeakCDNKeepaliveManager
    /**
     * third party CDN keepalive manager
     */
    _defineProperty(_assertThisInitialized(_this7), "cacheKeepaliveManager", void 0);
    _this7.cacheKeepaliveManager = new CacheKeepaliveManager(handler);
    _this7.cacheKeepaliveManager.next = function () {};
    return _this7;
  }
  _createClass(BroadpeakCDNCacheKeepaliveManager, [{
    key: "start",
    value: function start() {
      _get(_getPrototypeOf(BroadpeakCDNCacheKeepaliveManager.prototype), "start", this).call(this);

      // Store a keepalive report when the session is starting
      this.cacheKeepaliveManager.store();
    }
  }, {
    key: "callback",
    value: function callback(parameters) {
      // Store keepalive reports at every keepalive
      this.cacheKeepaliveManager.callback(parameters);
      _get(_getPrototypeOf(BroadpeakCDNCacheKeepaliveManager.prototype), "callback", this).call(this, parameters);
    }
  }, {
    key: "stop",
    value: function stop() {
      _get(_getPrototypeOf(BroadpeakCDNCacheKeepaliveManager.prototype), "stop", this).call(this);

      // Delete the keepalive report from the cache when the session is stopped
      this.cacheKeepaliveManager.delete();
    }
  }]);
  return BroadpeakCDNCacheKeepaliveManager;
}(_network_KeepAliveManager__WEBPACK_IMPORTED_MODULE_24__.BroadpeakCDNKeepaliveManager);

/***/ }),

/***/ "./src_core/index.analytics.js":
/*!*************************************!*\
  !*** ./src_core/index.analytics.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsRequestManager: function() { return /* reexport safe */ _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   AnalyticsSession: function() { return /* reexport safe */ _session_analytics_AnalyticsSession__WEBPACK_IMPORTED_MODULE_10__.AnalyticsSession; },
/* harmony export */   BroadpeakCDNCacheKeepaliveManager: function() { return /* reexport safe */ _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.BroadpeakCDNCacheKeepaliveManager; },
/* harmony export */   CacheKeepaliveManager: function() { return /* reexport safe */ _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.CacheKeepaliveManager; },
/* harmony export */   CacheManager: function() { return /* reexport safe */ _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.CacheManager; },
/* harmony export */   GenericPlayerAdapter: function() { return /* reexport safe */ _analytics_player_GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   GenericPlayerApi: function() { return /* reexport safe */ _analytics_player_GenericPlayerApi__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   Metrics: function() { return /* reexport safe */ _analytics_metrics_Metrics__WEBPACK_IMPORTED_MODULE_8__.Metrics; },
/* harmony export */   MetricsManager: function() { return /* reexport safe */ _analytics_metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   PlayerAdapter: function() { return /* reexport safe */ _analytics_player_PlayerAdapter__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   PlayerEventListener: function() { return /* reexport safe */ _analytics_player_PlayerEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   PlayerManager: function() { return /* reexport safe */ _analytics_player_PlayerManager__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   SessionTrackerEvent: function() { return /* reexport safe */ _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvent; },
/* harmony export */   SessionTrackerEvents: function() { return /* reexport safe */ _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvents; },
/* harmony export */   SessionTrackerTimeline: function() { return /* reexport safe */ _tracker_SessionTrackerTimeline__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var _analytics_player_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics/player/PlayerManager */ "./src_core/analytics/player/PlayerManager.js");
/* harmony import */ var _analytics_player_PlayerAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics/player/PlayerAdapter */ "./src_core/analytics/player/PlayerAdapter.js");
/* harmony import */ var _analytics_player_GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics/player/GenericPlayerAdapter */ "./src_core/analytics/player/GenericPlayerAdapter.js");
/* harmony import */ var _analytics_player_PlayerEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics/player/PlayerEventListener */ "./src_core/analytics/player/PlayerEventListener.js");
/* harmony import */ var _analytics_player_GenericPlayerApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analytics/player/GenericPlayerApi */ "./src_core/analytics/player/GenericPlayerApi.js");
/* harmony import */ var _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request/AnalyticsRequestManager */ "./src_core/request/AnalyticsRequestManager.js");
/* harmony import */ var _tracker_SessionTrackerTimeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracker/SessionTrackerTimeline */ "./src_core/tracker/SessionTrackerTimeline.js");
/* harmony import */ var _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tracker/SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _analytics_metrics_Metrics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics/metrics/Metrics */ "./src_core/analytics/metrics/Metrics.js");
/* harmony import */ var _analytics_metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analytics/metrics/MetricsManager */ "./src_core/analytics/metrics/MetricsManager.js");
/* harmony import */ var _session_analytics_AnalyticsSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./session/analytics/AnalyticsSession */ "./src_core/session/analytics/AnalyticsSession.js");
/* harmony import */ var _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cache/CacheManager */ "./src_core/cache/CacheManager.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SmartLib */ "./src_core/SmartLib.js");













_SmartLib__WEBPACK_IMPORTED_MODULE_12__["default"].analyticsModule = {
  PlayerManager: _analytics_player_PlayerManager__WEBPACK_IMPORTED_MODULE_0__["default"],
  PlayerAdapter: _analytics_player_PlayerAdapter__WEBPACK_IMPORTED_MODULE_1__["default"],
  GenericPlayerAdapter: _analytics_player_GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"],
  PlayerEventListener: _analytics_player_PlayerEventListener__WEBPACK_IMPORTED_MODULE_3__["default"],
  GenericPlayerApi: _analytics_player_GenericPlayerApi__WEBPACK_IMPORTED_MODULE_4__["default"],
  AnalyticsRequestManager: _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_5__["default"],
  SessionTrackerTimeline: _tracker_SessionTrackerTimeline__WEBPACK_IMPORTED_MODULE_6__["default"],
  SessionTrackerEvent: _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvent,
  SessionTrackerEvents: _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvents,
  Metrics: _analytics_metrics_Metrics__WEBPACK_IMPORTED_MODULE_8__.Metrics,
  MetricsManager: _analytics_metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__["default"],
  AnalyticsSession: _session_analytics_AnalyticsSession__WEBPACK_IMPORTED_MODULE_10__.AnalyticsSession,
  CacheManager: _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.CacheManager,
  CacheKeepaliveManager: _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.CacheKeepaliveManager,
  BroadpeakCDNCacheKeepaliveManager: _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.BroadpeakCDNCacheKeepaliveManager
};


/***/ }),

/***/ "./src_core/request/AnalyticsRequestManager.js":
/*!*****************************************************!*\
  !*** ./src_core/request/AnalyticsRequestManager.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AnalyticsRequestManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../service/JobManager */ "./src_core/service/JobManager.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SmartLib */ "./src_core/SmartLib.js");















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var TAG = 'BpkAnalyticsRequestMgr';
var AnalyticsRequestManager = /*#__PURE__*/function () {
  function AnalyticsRequestManager() {
    _classCallCheck(this, AnalyticsRequestManager);
  }
  _createClass(AnalyticsRequestManager, [{
    key: "buildAnalyticsAddress",
    value:
    /**
     * Build the full post address
     * @param analyticsAddress Server base address
     * @returns {string} post address
     */
    function buildAnalyticsAddress(analyticsAddress) {
      analyticsAddress = analyticsAddress.trim();
      if (!analyticsAddress.endsWith('/')) {
        analyticsAddress += '/';
      }
      analyticsAddress += AnalyticsRequestManager.METRICS_RECEIVER_PATH;
      return analyticsAddress;
    }

    /**
     * Send start session request to the BkA
     * @param handler session handler
     * @param parameters smartlib parameters
     * @returns {Promise<boolean>} request end promise
     */
    /* startSession(handler, parameters) {
        const sessionReport = handler.sessionReport;
        if (parameters.analyticsAddress.length !== 0) {
            const analyticsAddresses = parameters.analyticsAddress.split(',');
            let promises = [];
             analyticsAddresses.forEach(analyticsAddress => {
                // Building analytics address
                analyticsAddress = this.buildAnalyticsAddress(analyticsAddress);
                 // Post start session
                LoggerManager.i(TAG, 'Posting metrics to ' + analyticsAddress, handler.id);
                const promise = this.postSession(analyticsAddress, sessionReport.toStartSessionJSON(), parameters)
                    .then(result => {
                        LoggerManager.i(TAG, 'Send creation session metrics ended with status code ' + result.httpStatus + ' (' + analyticsAddress + ')', handler.id);
                         return result.httpStatus >= 200 && result.httpStatus < 300;
                    });
                promises.push(promise);
            });
             return Promise.all(promises)
                .then(() => {
                    LoggerManager.d(TAG, 'Send creation session metrics done', handler.id);
                });
        }
         LoggerManager.w(TAG, 'Metrics platform URL is null, creation metrics won\'t be posted anywhere.', handler.id);
         return Promise.resolve(false);
    }*/

    /**
     * Send end session request to the BkA
     * @param handler session handler
     * @param parameters smartlib parameters
     * @returns {Promise<boolean>} request end promise
     */
  }, {
    key: "endSession",
    value: function endSession(handler, parameters) {
      var _this = this;
      var sessionReport = handler.sessionReport;
      if (parameters.analyticsAddress.length !== 0) {
        var analyticsAddresses = parameters.analyticsAddress.split(',');
        var promises = [];
        analyticsAddresses.forEach(function (analyticsAddress) {
          var reportId;
          if (analyticsAddress.indexOf(AnalyticsRequestManager.NOCACHE_PREFIX) === 0) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, AnalyticsRequestManager.NOCACHE_PREFIX + ' option used, no need to store the report in cache');
            analyticsAddress = _this.buildAnalyticsAddress(analyticsAddress.substring(AnalyticsRequestManager.NOCACHE_PREFIX.length));
          } else {
            analyticsAddress = _this.buildAnalyticsAddress(analyticsAddress);
            reportId = _SmartLib__WEBPACK_IMPORTED_MODULE_17__["default"].analyticsModule.CacheManager.getInstance().storeSessionReport(analyticsAddress, sessionReport.toEndSessionJSON(), true, Date.now(), true);
          }

          // Post end session
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.i(TAG, 'Posting metrics to ' + analyticsAddress, handler.id);
          var promise = _this.postSession(analyticsAddress, sessionReport.toEndSessionJSON(), parameters).then(function (result) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.i(TAG, 'Send session metrics ended with status code ' + result.httpStatus + ' (' + analyticsAddress + ')', handler.id);
            if (result.httpStatus >= 200 && result.httpStatus < 300) {
              // Remove report in cache if it has been sent
              if (reportId !== undefined) {
                _SmartLib__WEBPACK_IMPORTED_MODULE_17__["default"].analyticsModule.CacheManager.getInstance().deleteSessionReport(reportId);
              }

              // Send cache on success
              _SmartLib__WEBPACK_IMPORTED_MODULE_17__["default"].analyticsModule.CacheManager.getInstance().push();
              return true;
            }

            // Update sending flag
            if (reportId !== undefined) {
              _SmartLib__WEBPACK_IMPORTED_MODULE_17__["default"].analyticsModule.CacheManager.getInstance().update(reportId, 'sending', false);
            }
            return false;
          });
          promises.push(promise);
        });
        return Promise.all(promises).then(function () {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, 'Send session metrics done', handler.id);
        });
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.w(TAG, 'Metrics platform URL is null, metrics won\'t be posted anywhere.', handler.id);
      return Promise.resolve(false);
    }

    /**
     * Send session report stored in cache
     * @param analyticsAddress full analytics address
     * @param sessionReportJson session report at JSON format
     * @param parameters smartlib parameters
     * @returns {Promise<boolean>} request end promise
     */
  }, {
    key: "endSessionCache",
    value: function endSessionCache(analyticsAddress, sessionReportJson, parameters) {
      if (analyticsAddress.length !== 0) {
        // Post end session
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.i(TAG, 'Posting cache to ' + analyticsAddress);
        return this.postSession(analyticsAddress, sessionReportJson, parameters).then(function (result) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.i(TAG, 'Send cache ended with status code ' + result.httpStatus + ' (' + analyticsAddress + ')');
          return result.httpStatus >= 200 && result.httpStatus < 300;
        });
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.w(TAG, 'Metrics platform URL is null, cache won\'t be posted anywhere.');
      return Promise.resolve(false);
    }

    /**
     * Send session report POST request
     * @param url url
     * @param body body
     * @param parameters smartlib parameters used for headers
     * @returns {Promise<unknown>} request end promise
     */
  }, {
    key: "postSession",
    value: function postSession(url, body, parameters) {
      return new Promise(function (resolve, reject) {
        var headers = {
          // 'Content-Type': 'application/json',
          'Connection': 'close'
        };
        if (parameters.userAgent !== undefined) {
          headers['User-Agent'] = parameters.userAgent;
        }
        var encodedBody = JSON.stringify(body);
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.v(TAG, 'Executing POST request with body: ' + encodedBody);
        _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().asyncPost(url, headers, encodedBody, AnalyticsRequestManager.POST_SESSION_REQUEST_TIMEOUT, function (result) {
          var statusCode = 0;
          if (result['statusCode'] !== undefined) {
            statusCode = parseInt(result['statusCode'], 10);
          }
          resolve({
            httpStatus: statusCode
          });
        });
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_classStaticPrivateFieldSpecGet(AnalyticsRequestManager, AnalyticsRequestManager, _instance)) {
        _classStaticPrivateFieldSpecSet(AnalyticsRequestManager, AnalyticsRequestManager, _instance, new AnalyticsRequestManager());
      }
      return _classStaticPrivateFieldSpecGet(AnalyticsRequestManager, AnalyticsRequestManager, _instance);
    }
  }]);
  return AnalyticsRequestManager;
}();
/**
 * Path to the metrics receiver BkA API
 * @type {string}
 */
_defineProperty(AnalyticsRequestManager, "METRICS_RECEIVER_PATH", 'fservices/metricsReceiver');
/**
 * Timeout used for posting data to the BkA
 * @type {number} in millis
 */
_defineProperty(AnalyticsRequestManager, "POST_SESSION_REQUEST_TIMEOUT", 5000);
/**
 * Prefix to prevent storing the report in cache (ex: for staging BkAs)
 * @type {string}
 */
_defineProperty(AnalyticsRequestManager, "NOCACHE_PREFIX", 'nocache=');
/**
 * Singleton
 */
var _instance = {
  writable: true,
  value: void 0
};


/***/ }),

/***/ "./src_core/session/analytics/AnalyticsSession.js":
/*!********************************************************!*\
  !*** ./src_core/session/analytics/AnalyticsSession.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsSession: function() { return /* binding */ AnalyticsSession; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _streaming_StreamingSession__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../streaming/StreamingSession */ "./src_core/session/streaming/StreamingSession.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TAG = 'BpkAnalyticsSession';

/**
 * Once a session has been created, all next calls have to be done on that object.
 */
var AnalyticsSession = /*#__PURE__*/function (_StreamingSession) {
  _inherits(AnalyticsSession, _StreamingSession);
  var _super = _createSuper(AnalyticsSession);
  function AnalyticsSession(smartLib, options) {
    var _this;
    _classCallCheck(this, AnalyticsSession);
    _this = _super.call(this, smartLib, options);
    _defineProperty(_assertThisInitialized(_this), "started", void 0);
    _this.getURL = undefined;
    _this.getQuery = undefined;
    _this.startStreamingSession = undefined;
    _this.stopAnalyticsSession = _this.stopStreamingSession;
    _this.stopStreamingSession = undefined;
    _this.started = false;
    return _this;
  }
  _createClass(AnalyticsSession, [{
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      _get(_getPrototypeOf(AnalyticsSession.prototype), "attachPlayer", this).call(this, player, listener);

      // Listen to player events when attaching it
      if (this.handler === undefined) {
        this.handler = this.smartLib.sessionManager.createSessionHandler(this);
        this.handler.initPlayerAdapter();
        this.handler.addListener(this);
      }
    }

    // getURL start equivalent
  }, {
    key: "onLoading",
    value: function onLoading() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_12__.LoggerManager.i(TAG, 'Session is loading...', this.id);
      if (this.started === false) {
        this.started = true;
        this.handler.adSession = this.adSession;
        if (this.adSession !== undefined) {
          this.adSession.handler = this.handler;
        }

        // LoggerManager.i(TAG, 'Session is starting with URL ' + this.customParameters['report.requestedURL'], this.id);
        // LoggerManager.i(TAG, 'Session is starting...');
        this.handler.start('').catch(function (e) {
          // console.log(e);
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_12__.LoggerManager.d(TAG, 'Exception: onLoading, the session is already running.', this.id);
      }
    }
  }, {
    key: "updateSessionReportValue",
    value: function updateSessionReportValue(name) {
      var sessionReport = this.handler.sessionReport;
      if (this.customParameters['report.' + name] !== undefined) {
        sessionReport[name] = this.customParameters['report.' + name];
      }
    }
  }, {
    key: "onClose",
    value: function onClose(broadpeakStatusCode) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_12__.LoggerManager.i(TAG, 'Session is closing (status code: ' + broadpeakStatusCode + ')...', this.id);

      // Disable redirection time
      if (this.handler.sessionReport.metrics !== undefined) {
        this.handler.sessionReport.metrics.redirectionTime = -1;
      }

      // Update session report with custom value
      this.updateSessionReportValue('requestedURL');
      this.updateSessionReportValue('redirectedURL');
      this.stopAnalyticsSession(broadpeakStatusCode);
    }
  }]);
  return AnalyticsSession;
}(_streaming_StreamingSession__WEBPACK_IMPORTED_MODULE_11__.StreamingSession);

/***/ }),

/***/ "./src_core/tracker/SessionTrackerEncoder.js":
/*!***************************************************!*\
  !*** ./src_core/tracker/SessionTrackerEncoder.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionTrackerEncoder: function() { return /* binding */ SessionTrackerEncoder; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SessionTrackerSummary */ "./src_core/tracker/SessionTrackerSummary.js");
/* harmony import */ var _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ByteBuffer */ "./src_core/utils/ByteBuffer.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var TAG = 'BpkSessionTrackerEncoder';
var SessionTrackerEncoder = /*#__PURE__*/function () {
  function SessionTrackerEncoder(timeline) {
    var maxBufferSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SessionTrackerEncoder.DEFAULT_BUFFER_SIZE;
    var maxEndEventsDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SessionTrackerEncoder.DEFAULT_END_EVENTS_DURATION;
    var maxEndEventsNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SessionTrackerEncoder.DEFAULT_END_EVENTS_NUMBER;
    _classCallCheck(this, SessionTrackerEncoder);
    /**
     * Timeline to encode
     */
    _defineProperty(this, "timeline", void 0);
    /**
     * Current max buffer size (set on init or extended in extend method)
     */
    _defineProperty(this, "maxBufferSize", void 0);
    /**
     * Current max duration of events in end buffer
     */
    _defineProperty(this, "maxEndEventsDuration", void 0);
    /**
     * Current max number of events in end buffer
     */
    _defineProperty(this, "maxEndEventsNumber", void 0);
    /**
     * Events array of timeline
     */
    _defineProperty(this, "events", void 0);
    /**
     * Uncompressed data buffer
     * Emptied during first compression with uncompressedDataFull === true
     */
    _defineProperty(this, "uncompressedData", void 0);
    /**
     * Uncompressed data buffer full
     */
    _defineProperty(this, "uncompressedDataFull", void 0);
    /**
     * Compressed start data buffer
     */
    _defineProperty(this, "compressedStartData", void 0);
    /**
     * Min index in events to summarized
     */
    _defineProperty(this, "minSummaryIndex", void 0);
    /**
     * Max buffer size for end events
     * Calculated during first compression with uncompressedDataFull === true
     */
    _defineProperty(this, "maxEndBufferSize", void 0);
    /**
     * Summary object
     */
    _defineProperty(this, "summary", void 0);
    // JFM
    // constructor(timeline, maxBufferSize = 80,
    //    maxEndEventsDuration = SessionTrackerEncoder.DEFAULT_END_EVENTS_DURATION,
    //    maxEndEventsNumber = 5) {

    this.maxBufferSize = maxBufferSize;
    this.maxEndEventsDuration = maxEndEventsDuration;
    this.maxEndEventsNumber = maxEndEventsNumber;
    this.timeline = timeline;
    this.events = this.timeline.events;
    this.uncompressedData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_9__["default"](this.maxBufferSize);
    this.uncompressedDataFull = false;
    this.compressedStartData = undefined;
    this.minSummaryIndex = 0;
    this.maxEndBufferSize = this.maxBufferSize;
    this.summary = undefined;
  }

  /**
   * Encode last event in timeline
   *
   * To call when an event is added to events
   * Only used in uncompressed mode because start events don't need to be encoded twice
   *
   * @param event
   */
  _createClass(SessionTrackerEncoder, [{
    key: "onEventAdded",
    value: function onEventAdded(event) {
      // If compression mode enabled, the encoding is done in the process method
      if (this.uncompressedDataFull) {
        return;
      }

      // Get previous event
      var previousEvent = event;
      if (this.events.length >= 2) {
        previousEvent = this.events[this.events.length - 2];
      }

      // Encode the event
      event.compressedData = event.toData(previousEvent.eventDate);
      event.compressed = true;

      // Add it to the output buffer
      if (event.compressedData.capacity() <= this.uncompressedData.remaining()) {
        this.uncompressedData.putByteBuffer(event.compressedData);
      } else {
        this.uncompressedDataFull = true;

        // Init compressed start data buffer
        this.compressedStartData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_9__["default"](this.maxBufferSize);
      }
    }
  }, {
    key: "onEventUpdated",
    value: function onEventUpdated() {
      this.uncompressedData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_9__["default"](this.maxBufferSize);
      for (var i = 0; i < this.events.length; i++) {
        var event = this.events[i];
        if (event.compressedData !== undefined) {
          this.uncompressedData.putByteBuffer(this.events[i].compressedData);
        }
      }
    }

    /**
     * Encode the current timeline
     * Can be called at any time to process current events
     *
     * @returns {ByteBuffer}
     */
  }, {
    key: "process",
    value: function process() {
      // LoggerManager.d(TAG, 'Encoding ' + this.events.length + ' events...');

      var date = Date.now();
      if (!this.uncompressedDataFull) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Timeline encoder generated uncompressed data (' + this.events.length + ' events, ' + this.uncompressedData.length() + ' bytes)');

        // return data directly if no compression needed
        return this.uncompressedData;
      }

      // LoggerManager.d(TAG, '  Encoder using compressed data');
      // LoggerManager.d(TAG, '  Compressing end events...');

      // Log
      var outputLog = '';

      // Encode end events
      var endBuffers = [];
      var size = 0;
      var maxSummaryIndex;
      for (var i = this.events.length - 1; i >= 0; i--) {
        var event = this.events[i];
        if (date - event.eventDate < this.maxEndEventsDuration && endBuffers.length < this.maxEndEventsNumber) {
          // Encode event
          var _buffer = void 0;
          if (i < this.events.length - 1) {
            var lastEvent = this.events[i + 1];
            _buffer = event.toData(lastEvent.eventDate);
          } else {
            _buffer = event.toData(event.eventDate);
          }

          // Check if the oldest end event can fit in the buffer
          if (size + _buffer.length() <= this.maxEndBufferSize) {
            endBuffers.push(_buffer);
            size += _buffer.length();
          } else {
            // LoggerManager.d(TAG, '    Removing latest end event (max size reached)');
            maxSummaryIndex = i;
            break;
          }
        } else {
          maxSummaryIndex = i;
          break;
        }
      }

      // Encoding start events (first time only)
      if (this.compressedStartData.length() === 0) {
        // LoggerManager.d(TAG, '  Compressing start events...');
        this.minSummaryIndex = maxSummaryIndex;
        var maxSize = this.maxBufferSize - _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_8__["default"].BUFFER_SIZE - size;
        for (var _i = 0; _i < maxSummaryIndex; _i++) {
          var _event = this.events[_i];
          if (this.compressedStartData.length() + _event.compressedData.length() > maxSize) {
            this.minSummaryIndex = _i;
            break;
          } else {
            this.compressedStartData.putByteBuffer(_event.compressedData);
          }
        }

        // Set the max buffer size for end events (used in the next process iteration, see below)
        this.maxEndBufferSize = this.compressedStartData.remaining() - _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_8__["default"].BUFFER_SIZE;

        // Removing unused buffer
        this.uncompressedData = undefined;

        // Debug log
        outputLog += 'first iteration, ';
      }

      // Creating output buffer
      var buffer = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_9__["default"](this.maxBufferSize);

      // Set start data
      buffer.putByteBuffer(this.compressedStartData, this.compressedStartData.length());

      // Set summary
      // LoggerManager.d(TAG, '  Summarizing data...');
      // LoggerManager.d(TAG, '    minSummaryIndex:' + this.minSummaryIndex + ',maxSummaryIndex:' + maxSummaryIndex);
      if (this.minSummaryIndex === maxSummaryIndex) {
        // No summary needed
        buffer.put(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvents.EmptySummary);

        // LoggerManager.d(TAG, '    No summary needed');
        outputLog += 'no summary';
      } else {
        if (this.summary === undefined) {
          this.summary = new _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_8__["default"](this.timeline, this.minSummaryIndex);
        }
        this.summary.update(maxSummaryIndex);
        var summaryBuffer = this.summary.data();
        buffer.putByteBuffer(summaryBuffer);

        // LoggerManager.d(TAG, '    Summary:' + this.summary.toString());

        outputLog += 'summary {' + this.summary.toString() + '}';
      }

      // Set end data
      for (var _i2 = 0; _i2 < endBuffers.length; _i2++) {
        buffer.putByteBuffer(endBuffers[_i2]);
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Timeline encoder generated compressed data (' + this.events.length + ' events before encoding, ' + (this.minSummaryIndex + endBuffers.length) + ' events after encoding, ' + buffer.length() + ' bytes, ~' + (Date.now() - date) + 'ms, ' + outputLog + ')');

      // this.print(buffer);

      return buffer;
    }

    /* print(buffer) {
        // let index = 0;
         LoggerManager.d(TAG, 'Parsing buffer:');
         const data = buffer.buffer;
        for (let index = 0 ; index < buffer.length() ; index++) {
            const value = data[index];
             for (const event in SessionTrackerEvents) {
                if (SessionTrackerEvents[event] === value) {
                    LoggerManager.d(TAG, '  ' + event);
                    break;
                }
            }
             if (value === SessionTrackerEvents.None) {
                index += 2;
            } else if (value === SessionTrackerEvents.EmptySummary) {
                console.log('SessionTrackerEvents.EmptySummary');
            } else if (value === SessionTrackerEvents.DataSummary) {
                index += 26;
            } else if (TYPES_WITHOUT_DATA.includes(value)) {
                index += 2;
            } else if (TYPES_START.includes(value)) {
                index += 7;
            } else if (TYPES_WITH_BITRATE.includes(value)) {
                index += 4;
            } else if (TYPES_WITH_BITRATE_POSITION.includes(value)) {
                index += 6;
            } else if (TYPES_WITH_POSITIONS_START_END.includes(value)) {
                index += 6;
            } else if (TYPES_WITH_STATUS_CODE.includes(value)) {
                index += 4;
            } else if (TYPES_WITH_PROGRESS.includes(value)) {
                index += 4;
            } else if (TYPES_WITH_STATE.includes(value)) {
                index += 4;
            }
        }
    }*/
  }, {
    key: "extend",
    value: function extend() {
      if (!this.uncompressedDataFull) {
        this.maxBufferSize = 768;
        this.maxEndEventsDuration = 40000;
        this.maxEndEventsNumber = 40;
        var data = this.uncompressedData;
        this.uncompressedData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_9__["default"](this.maxBufferSize);
        this.uncompressedData.putByteBuffer(data, data.length());
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, 'Extended size from ' + SessionTrackerEncoder.DEFAULT_BUFFER_SIZE + ' to 768');
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.w(TAG, 'Failed to extend size from ' + SessionTrackerEncoder.DEFAULT_BUFFER_SIZE + ' to 768');
      }
    }
  }]);
  return SessionTrackerEncoder;
}();
_defineProperty(SessionTrackerEncoder, "DEFAULT_BUFFER_SIZE", 384);
_defineProperty(SessionTrackerEncoder, "DEFAULT_END_EVENTS_DURATION", 15000);
_defineProperty(SessionTrackerEncoder, "DEFAULT_END_EVENTS_NUMBER", 20);

/***/ }),

/***/ "./src_core/tracker/SessionTrackerEvent.js":
/*!*************************************************!*\
  !*** ./src_core/tracker/SessionTrackerEvent.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionTrackerEvent: function() { return /* binding */ SessionTrackerEvent; },
/* harmony export */   SessionTrackerEvents: function() { return /* binding */ SessionTrackerEvents; },
/* harmony export */   TYPES_START: function() { return /* binding */ TYPES_START; },
/* harmony export */   TYPES_WITHOUT_DATA: function() { return /* binding */ TYPES_WITHOUT_DATA; },
/* harmony export */   TYPES_WITH_BITRATE: function() { return /* binding */ TYPES_WITH_BITRATE; },
/* harmony export */   TYPES_WITH_BITRATE_POSITION: function() { return /* binding */ TYPES_WITH_BITRATE_POSITION; },
/* harmony export */   TYPES_WITH_POSITIONS_START_END: function() { return /* binding */ TYPES_WITH_POSITIONS_START_END; },
/* harmony export */   TYPES_WITH_PROGRESS: function() { return /* binding */ TYPES_WITH_PROGRESS; },
/* harmony export */   TYPES_WITH_STATE: function() { return /* binding */ TYPES_WITH_STATE; },
/* harmony export */   TYPES_WITH_STATUS_CODE: function() { return /* binding */ TYPES_WITH_STATUS_CODE; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ByteBuffer */ "./src_core/utils/ByteBuffer.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _analytics_metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../analytics/metrics/MetricsManager */ "./src_core/analytics/metrics/MetricsManager.js");
/* harmony import */ var _utils_MathUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/MathUtils */ "./src_core/utils/MathUtils.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var SessionTrackerEvents = {
  None: 0x00,
  Start: 0x01,
  Stop: 0x02,
  RedirectionEnd: 0x03,
  FirstImage: 0x04,
  Pause: 0x05,
  Resume: 0x06,
  BufferingStart: 0x07,
  StallStart: 0x08,
  StallStop: 0x09,
  RebufferingStart: 0x0a,
  RebufferingStop: 0x0b,
  Seek: 0x0c,
  LayerSwitch: 0x0d,
  AdBreakStart: 0x0e,
  AdBreakStop: 0x0f,
  NetworkAvailable: 0x10,
  NetworkLost: 0x11,
  Mute: 0x12,
  Unmute: 0x13,
  Multicast: 0x14,
  Unicast: 0x15,
  DataSummary: 0x90,
  EmptySummary: 0x91
};
var TYPES_WITHOUT_DATA = [SessionTrackerEvents.RedirectionEnd, SessionTrackerEvents.Pause, SessionTrackerEvents.Resume, SessionTrackerEvents.BufferingStart, SessionTrackerEvents.StallStart, SessionTrackerEvents.StallStop, SessionTrackerEvents.RebufferingStart, SessionTrackerEvents.RebufferingStop, SessionTrackerEvents.AdBreakStart, SessionTrackerEvents.NetworkLost, SessionTrackerEvents.Mute, SessionTrackerEvents.Unmute, SessionTrackerEvents.Multicast, SessionTrackerEvents.Unicast];
var TYPES_START = [SessionTrackerEvents.Start];
var TYPES_WITH_BITRATE = [SessionTrackerEvents.LayerSwitch];
var TYPES_WITH_BITRATE_POSITION = [SessionTrackerEvents.FirstImage];
var TYPES_WITH_POSITIONS_START_END = [SessionTrackerEvents.Seek];
var TYPES_WITH_STATUS_CODE = [SessionTrackerEvents.Stop];
var TYPES_WITH_PROGRESS = [SessionTrackerEvents.AdBreakStop];
var TYPES_WITH_STATE = [SessionTrackerEvents.NetworkAvailable];
var TAG = 'BpkSessionTrackerEvent';
var SessionTrackerEvent = /*#__PURE__*/function () {
  function SessionTrackerEvent(type) {
    _classCallCheck(this, SessionTrackerEvent);
    /**
     * Event id
     */
    _defineProperty(this, "eventId", void 0);
    /**
     * Event date
     */
    _defineProperty(this, "eventDate", void 0);
    /**
     * Event custom data
     */
    _defineProperty(this, "eventData", void 0);
    /**
     * Is a start/stop event
     */
    _defineProperty(this, "startStopEvent", void 0);
    /**
     * Start event id
     */
    _defineProperty(this, "startEventId", void 0);
    /**
     * Stop event id
     */
    _defineProperty(this, "stopEventId", void 0);
    /**
     * Event id to seek
     * If found, transform the found event with the defined start event
     *
     * BufferingStart > RebufferingStop => RebufferingStart > RebufferingStop
     * When RebufferingStop is pushed, it will try to find a BufferingStart and transform it to RebufferingStart
     */
    _defineProperty(this, "triggerStartEventId", void 0);
    /**
     * If previous event is the same, remove previous event
     */
    _defineProperty(this, "keepLastOnly", void 0);
    /**
     * Attach first event found with id
     */
    _defineProperty(this, "attachEventId", void 0);
    /**
     * Max duration between found event and current start event
     */
    _defineProperty(this, "attachMaxDurationBeforeStart", void 0);
    /**
     * Current start event if found
     */
    _defineProperty(this, "startEvent", void 0);
    /**
     * Current stop event if found
     */
    _defineProperty(this, "stopEvent", void 0);
    /**
     * Current attached event (set attachEventId)
     * Optional: attachMaxDurationBeforeStart
     */
    _defineProperty(this, "attachedEvent", void 0);
    /**
     * Event compressed
     * Encoder flag
     */
    _defineProperty(this, "compressed", void 0);
    /**
     * Event buffer data
     * Encoder buffer
     */
    _defineProperty(this, "compressedData", void 0);
    this.eventId = type;
    this.eventDate = Date.now();
    this.eventData = {};
    this.startStopEvent = false;
    this.startEventId = 0;
    this.stopEventId = 0;
    this.triggerStartEventId = 0;
    this.keepLastOnly = false;
    this.attachEventId = 0;
    this.attachMaxDurationBeforeStart = -1;
    this.startEvent = null;
    this.stopEvent = null;
    this.attachedEvent = null;
    this.addDataSizeInTimeline = false;
    this.compressed = false;
    this.compressedData = undefined;
    this.updateMetadata();
  }
  _createClass(SessionTrackerEvent, [{
    key: "updateMetadata",
    value: function updateMetadata() {
      this.startStopEvent = false;
      this.startEventId = SessionTrackerEvents.None;
      this.stopEventId = SessionTrackerEvents.None;
      this.triggerStartEventId = SessionTrackerEvents.None;
      this.keepLastOnly = false;
      this.attachEventId = SessionTrackerEvents.None;
      this.attachMaxDurationBeforeStart = -1;
      switch (this.eventId) {
        case SessionTrackerEvents.None:
          break;
        case SessionTrackerEvents.Start:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.Start;
          this.stopEventId = SessionTrackerEvents.Stop;
          this.addDataSizeInTimeline = true;
          break;
        case SessionTrackerEvents.Stop:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.Start;
          this.stopEventId = SessionTrackerEvents.Stop;
          break;
        case SessionTrackerEvents.RedirectionEnd:
          this.startStopEvent = false;
          this.attachEventId = SessionTrackerEvents.Start;
          break;
        case SessionTrackerEvents.FirstImage:
          this.startStopEvent = false;
          this.keepLastOnly = true;
          this.attachEventId = SessionTrackerEvents.RedirectionEnd;
          break;
        case SessionTrackerEvents.Pause:
        case SessionTrackerEvents.Resume:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.Pause;
          this.stopEventId = SessionTrackerEvents.Resume;
          break;
        case SessionTrackerEvents.StallStart:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.StallStart;
          this.stopEventId = SessionTrackerEvents.StallStop;
          break;
        case SessionTrackerEvents.StallStop:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.StallStart;
          this.stopEventId = SessionTrackerEvents.StallStop;
          this.triggerStartEventId = SessionTrackerEvents.BufferingStart;
          break;
        case SessionTrackerEvents.RebufferingStart:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.RebufferingStart;
          this.stopEventId = SessionTrackerEvents.RebufferingStop;
          break;
        case SessionTrackerEvents.RebufferingStop:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.RebufferingStart;
          this.stopEventId = SessionTrackerEvents.RebufferingStop;
          this.triggerStartEventId = SessionTrackerEvents.BufferingStart;
          this.attachEventId = SessionTrackerEvents.Seek;
          this.attachMaxDurationBeforeStart = _analytics_metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__["default"].MAX_TIME_BETWEEN_SEEK_AND_REBUFFERING;
          break;
        case SessionTrackerEvents.AdBreakStart:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.AdBreakStart;
          this.stopEventId = SessionTrackerEvents.AdBreakStop;
          break;
        case SessionTrackerEvents.AdBreakStop:
          this.startStopEvent = true;
          this.startEventId = SessionTrackerEvents.AdBreakStart;
          this.stopEventId = SessionTrackerEvents.AdBreakStop;
          this.attachEventId = SessionTrackerEvents.Seek;
          this.attachMaxDurationBeforeStart = 0;
          break;
        case SessionTrackerEvents.BufferingStart:
        case SessionTrackerEvents.Seek:
        case SessionTrackerEvents.LayerSwitch:
        case SessionTrackerEvents.NetworkAvailable:
        case SessionTrackerEvents.NetworkLost:
          this.startStopEvent = false;
          break;
        case SessionTrackerEvents.Mute:
        case SessionTrackerEvents.Unmute:
        case SessionTrackerEvents.Multicast:
        case SessionTrackerEvents.Unicast:
          this.startStopEvent = false;
          this.addDataSizeInTimeline = true; // new event unknown by old bka
          break;
      }
    }
  }, {
    key: "getEventName",
    value: function getEventName() {
      switch (this.eventId) {
        case SessionTrackerEvents.None:
          return 'None';
        case SessionTrackerEvents.Start:
          return 'Start';
        case SessionTrackerEvents.Stop:
          return 'Stop';
        case SessionTrackerEvents.RedirectionEnd:
          return 'RedirectionEnd';
        case SessionTrackerEvents.FirstImage:
          return 'FirstImage';
        case SessionTrackerEvents.Pause:
          return 'Pause';
        case SessionTrackerEvents.Resume:
          return 'Resume';
        case SessionTrackerEvents.BufferingStart:
          return 'BufferingStart';
        case SessionTrackerEvents.StallStart:
          return 'StallStart';
        case SessionTrackerEvents.StallStop:
          return 'StallStop';
        case SessionTrackerEvents.RebufferingStart:
          return 'RebufferingStart';
        case SessionTrackerEvents.RebufferingStop:
          return 'RebufferingStop';
        case SessionTrackerEvents.Seek:
          return 'Seek';
        case SessionTrackerEvents.LayerSwitch:
          return 'LayerSwitch';
        case SessionTrackerEvents.AdBreakStart:
          return 'AdBreakStart';
        case SessionTrackerEvents.AdBreakStop:
          return 'AdBreakStop';
        case SessionTrackerEvents.NetworkAvailable:
          return 'NetworkAvailable';
        case SessionTrackerEvents.NetworkLost:
          return 'NetworkLost';
        case SessionTrackerEvents.Mute:
          return 'Mute';
        case SessionTrackerEvents.Unmute:
          return 'Unmute';
        case SessionTrackerEvents.Multicast:
          return 'Multicast';
        case SessionTrackerEvents.Unicast:
          return 'Unicast';
      }
      return '';
    }
  }, {
    key: "isStartEvent",
    value: function isStartEvent() {
      return this.startStopEvent && this.eventId === this.startEventId;
    }
  }, {
    key: "isStopEvent",
    value: function isStopEvent() {
      return this.startStopEvent && this.eventId === this.stopEventId;
    }
  }, {
    key: "addEventData",
    value: function addEventData(key, value) {
      if (typeof key !== 'string') {
        return;
      }
      this.eventData[key] = value;
    }

    /**
     * Encode the current event
     *
     * @returns {ByteBuffer}
     */
  }, {
    key: "toData",
    value: function toData(previousEventDate) {
      var duration = Math.abs(this.eventDate - previousEventDate) / 100;
      var emptyEventCount = _utils_MathUtils__WEBPACK_IMPORTED_MODULE_10__["default"].floor(duration / 65535);
      var remainingDuration = duration % 65535;
      var dataLength = Object.keys(this.eventData).length;
      var capacity = emptyEventCount * 3 + 1 + 2 + dataLength * 2 + (this.addDataSizeInTimeline ? 1 : 0);
      var buffer = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_7__["default"](capacity);
      for (var i = 0; i < emptyEventCount; i++) {
        buffer.put(SessionTrackerEvents.None);
        buffer.put(0xff);
        buffer.put(0xff);
      }
      buffer.put(this.eventId);
      buffer.putChar(remainingDuration); // add duration in deciseconds
      if (this.addDataSizeInTimeline) {
        // add data size in nb Bytes, thus bka could ignore unknown event or data event
        buffer.put(dataLength * 2);
      }
      switch (this.eventId) {
        case SessionTrackerEvents.Start:
          {
            var networkType = parseInt(this.eventData['networkType'], 10);
            var muteState = parseInt(this.eventData['muteState'], 10);
            buffer.putChar(networkType);
            buffer.putChar(muteState);
          }
          break;
        case SessionTrackerEvents.Stop:
          {
            var statusCode = parseInt(this.eventData['statusCode'], 10);
            buffer.putChar(statusCode);
          }
          break;
        case SessionTrackerEvents.FirstImage:
          {
            var bitrateFirstImage = parseInt(this.eventData['bitrate'], 10);
            var position = parseInt(this.eventData['position'], 10);
            buffer.putChar(bitrateFirstImage);
            buffer.putChar(position);
          }
          break;
        case SessionTrackerEvents.Seek:
          {
            var positionStart = parseInt(this.eventData['positionStart'], 10);
            var positionEnd = parseInt(this.eventData['positionEnd'], 10);
            buffer.putChar(positionStart);
            buffer.putChar(positionEnd);
          }
          break;
        case SessionTrackerEvents.LayerSwitch:
          {
            var bitrateLayerSwitch = parseInt(this.eventData['bitrate'], 10);
            buffer.putChar(bitrateLayerSwitch);
          }
          break;
        case SessionTrackerEvents.AdBreakStop:
          {
            var progress = parseInt(this.eventData['progress'], 10);
            buffer.putChar(progress);
          }
          break;
        case SessionTrackerEvents.NetworkAvailable:
          {
            var _networkType = parseInt(this.eventData['state'], 10);
            buffer.putChar(_networkType);
          }
          break;
      }
      return buffer;
    }
  }, {
    key: "formatDate",
    value: function formatDate(timestamp) {
      return _utils_DateUtils__WEBPACK_IMPORTED_MODULE_8__["default"].formatDate(new Date(timestamp));
    }
  }, {
    key: "print",
    value: function print() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   |');
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   ├--> ' + this.getEventName() + ' -> ' + (this.compressed === true ? 'compressed' : 'not compressed') + ' -> ' + this.eventDate);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   |      date: ' + this.formatDate(this.eventDate));
      for (var key in this.eventData) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   |      ' + key + ': ' + this.eventData[key]);
      }
      if (this.isStartEvent() && this.stopEvent !== null) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   |      stop event: ' + this.stopEvent.getEventName() + ' ' + this.stopEvent.eventDate);
      }
      if (this.isStopEvent() && this.startEvent !== null) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   |      start event: ' + this.startEvent.getEventName() + ' ' + this.startEvent.eventDate);
      }
      if (this.attachedEvent !== null) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.v(TAG, '   |      attached event: ' + this.attachedEvent.getEventName() + ' ' + this.attachedEvent.eventDate);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.getEventName() + ' (' + this.formatDate(this.eventDate) + ')';
    }
  }]);
  return SessionTrackerEvent;
}();

/***/ }),

/***/ "./src_core/tracker/SessionTrackerSummary.js":
/*!***************************************************!*\
  !*** ./src_core/tracker/SessionTrackerSummary.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SessionTrackerSummary; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _analytics_metrics_Metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../analytics/metrics/Metrics */ "./src_core/analytics/metrics/Metrics.js");
/* harmony import */ var _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ByteBuffer */ "./src_core/utils/ByteBuffer.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var SessionTrackerSummary = /*#__PURE__*/function () {
  function SessionTrackerSummary(timeline, minIndex) {
    _classCallCheck(this, SessionTrackerSummary);
    /**
     * Timeline to summarized
     */
    _defineProperty(this, "timeline", void 0);
    /**
     * Min index in timeline
     */
    _defineProperty(this, "minIndex", void 0);
    /**
     * Last registered bitrate before minIndex
     */
    _defineProperty(this, "initialBitrate", void 0);
    /**
     * Summary metrics
     */
    _defineProperty(this, "builder", void 0);
    /**
     * Summary duration
     */
    _defineProperty(this, "summaryDuration", void 0);
    /**
     * Pause duration
     */
    _defineProperty(this, "pauseDuration", void 0);
    /**
     * Store network activity during summary time
     */
    _defineProperty(this, "nbNetworkDisconnected", void 0);
    _defineProperty(this, "nbNetworkWifi", void 0);
    _defineProperty(this, "nbNetworkMobile", void 0);
    _defineProperty(this, "nbNetworkEthernet", void 0);
    _defineProperty(this, "lastNetworkState", void 0);
    /**
     * Mute activity during summary
     */
    _defineProperty(this, "muteDuration", void 0);
    _defineProperty(this, "lastMuteState", void 0);
    this.timeline = timeline;
    this.minIndex = minIndex;
    this.initialBitrate = undefined;
    this.builder = undefined;
    this.summaryDuration = 0;
    this.pauseDuration = 0;
    this.nbNetworkDisconnected = 0;
    this.nbNetworkWifi = 0;
    this.nbNetworkMobile = 0;
    this.nbNetworkEthernet = 0;
    this.lastNetworkState = undefined;
    this.muteDuration = 0;
    this.lastMuteState = undefined;
    this.init();
  }
  _createClass(SessionTrackerSummary, [{
    key: "init",
    value: function init() {
      for (var i = this.minIndex; i >= 0; i--) {
        var event = this.timeline.events[i];
        switch (event.eventId) {
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.LayerSwitch:
            if (this.initialBitrate === undefined) {
              this.initialBitrate = parseInt(event.eventData['bitrate'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.FirstImage:
            if (this.initialBitrate === undefined) {
              this.initialBitrate = parseInt(event.eventData['bitrate'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Start:
            if (this.lastNetworkState === undefined) {
              this.lastNetworkState = parseInt(event.eventData['networkType'], 10);
            }
            if (this.lastMuteState === undefined) {
              this.lastMuteState = parseInt(event.eventData['muteState'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.NetworkAvailable:
            if (this.lastNetworkState === undefined) {
              this.lastNetworkState = parseInt(event.eventData['state'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.NetworkLost:
            if (this.lastNetworkState === undefined) {
              this.lastNetworkState = 0;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Mute:
            if (this.lastMuteState === undefined) {
              this.lastMuteState = 1;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Unmute:
            if (this.lastMuteState === undefined) {
              this.lastMuteState = 0;
            }
            break;
        }
      }

      // Set default values
      if (this.initialBitrate === undefined || this.initialBitrate === 0) {
        this.initialBitrate = -1;
      }
      if (this.lastNetworkState === undefined) {
        this.lastNetworkState = 1;
      }
      if (this.lastMuteState === undefined) {
        this.lastMuteState = 0;
      }
    }
  }, {
    key: "update",
    value: function update(maxIndex) {
      if (this.minIndex >= this.timeline.events.length || maxIndex >= this.timeline.events.length) {
        return;
      }
      var minEvent = this.timeline.events[this.minIndex];
      var maxEvent = this.timeline.events[maxIndex];
      var bitrate = this.initialBitrate;
      var lastLayerSwitchDate = minEvent.eventDate;
      var lastMuteDate = this.lastMuteState === 1 ? minEvent.eventDate : -1; // if muted before summary, start the duration from the first event
      var paused;
      var stalling;
      var rebuffering;

      // Reset metrics
      this.builder = new _analytics_metrics_Metrics__WEBPACK_IMPORTED_MODULE_7__.MetricsBuilder();
      this.summaryDuration = maxEvent.eventDate - minEvent.eventDate;
      this.pauseDuration = 0;
      this.nbNetworkDisconnected = 0;
      this.nbNetworkWifi = 0;
      this.nbNetworkMobile = 0;
      this.nbNetworkEthernet = 0;
      this.muteDuration = 0;

      // Calculate metrics between minIndex and maxIndex
      for (var i = this.minIndex; i <= maxIndex; i++) {
        var event = this.timeline.events[i];
        switch (event.eventId) {
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Pause:
            // If not paused or first pause event
            if (paused === false || paused === undefined) {
              // If stopEvent found && stopEvent before maxIndex
              if (event.stopEvent !== null && event.stopEvent.eventDate <= maxEvent.eventDate) {
                this.pauseDuration += event.stopEvent.eventDate - event.eventDate;
              }
              paused = true;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Resume:
            // If first pause event
            if (paused === undefined) {
              this.pauseDuration += event.eventDate - minEvent.eventDate;
            }
            paused = false;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.StallStart:
            if (stalling === false || stalling === undefined) {
              if (event.stopEvent !== null && event.stopEvent.eventDate <= maxEvent.eventDate) {
                this.builder.addStall(event.stopEvent.eventDate - event.eventDate);
              }
              stalling = true;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.StallStop:
            if (stalling === undefined) {
              this.builder.addStall(event.eventDate - minEvent.eventDate);
            }
            stalling = false;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.RebufferingStart:
            if (rebuffering === false || rebuffering === undefined) {
              if (event.stopEvent !== null && event.stopEvent.eventDate <= maxEvent.eventDate) {
                this.builder.addRebuffering(event.stopEvent.eventDate - event.eventDate);
              }
              rebuffering = true;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.RebufferingStop:
            if (rebuffering === undefined) {
              this.builder.addRebuffering(event.eventDate - minEvent.eventDate);
            }
            rebuffering = false;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.LayerSwitch:
            this.builder.addLayerSwitch();

            // If bitrate registered
            if (bitrate !== -1) {
              this.builder.addTimeSpentPerLayer(bitrate, event.eventDate - lastLayerSwitchDate);
            }

            // Store bitrate
            bitrate = parseInt(event.eventData['bitrate'], 10);
            lastLayerSwitchDate = event.eventDate;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.NetworkAvailable:
            this.lastNetworkState = parseInt(event.eventData['state'], 10);
            if (this.lastNetworkState >= 10 && this.lastNetworkState < 20) {
              this.nbNetworkWifi++;
            } else if (this.lastNetworkState >= 20 && this.lastNetworkState < 30) {
              this.nbNetworkMobile++;
            } else if (this.lastNetworkState >= 30 && this.lastNetworkState < 40) {
              this.nbNetworkEthernet++;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.NetworkLost:
            this.lastNetworkState = 0;
            this.nbNetworkDisconnected++;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Mute:
            this.lastMuteState = 1;
            lastMuteDate = event.eventDate;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.Unmute:
            this.lastMuteState = 0;
            if (lastMuteDate !== -1) {
              this.muteDuration += event.eventDate - lastMuteDate;
              lastMuteDate = -1;
            }
            break;
        }
      }

      // Process last bitrate
      if (bitrate !== -1) {
        this.builder.addTimeSpentPerLayer(bitrate, maxEvent.eventDate - lastLayerSwitchDate);
      }

      // Process mute duration
      if (lastMuteDate !== -1) {
        this.muteDuration += maxEvent.eventDate - lastMuteDate;
      }

      // Build metrics
      this.builder.build();
    }
  }, {
    key: "data",
    value: function data() {
      if (this.builder === undefined) {
        return _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_8__["default"].EMPTY;
      }
      var buffer = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_8__["default"](SessionTrackerSummary.BUFFER_SIZE);
      var metrics = this.builder.metrics;
      buffer.put(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_6__.SessionTrackerEvents.DataSummary).putChar(Math.round(this.summaryDuration / 1000)) // rounded to 1 sec
      .put(SessionTrackerSummary.BUFFER_SIZE - 2 - 1 - 1) // do not count id, duration, and size (the current byte)
      .putChar(this.pauseDuration / 100) // rounded to 0.1 sec
      .put(metrics.stallsNumber).putChar(metrics.totalStallsDuration / 100) // rounded to 0.1 sec
      .put(metrics.rebufferingsNumber).putChar(metrics.totalRebufferingDuration / 100) // rounded to 0.1 sec
      .put(metrics.layerSwitchesNumber).putChar(metrics.minBitrate).putChar(metrics.maxBitrate).putChar(metrics.averageBitrate).put(this.nbNetworkDisconnected).put(this.nbNetworkWifi).put(this.nbNetworkMobile).put(this.nbNetworkEthernet).putChar(this.lastNetworkState).putChar(Math.round(this.muteDuration / 1000)).put(this.lastMuteState);
      return buffer;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.builder === undefined) {
        return 'no data';
      }
      var metrics = this.builder.metrics;
      return this.summaryDuration + ', ' + this.pauseDuration + ', ' + metrics.minBitrate + ', ' + metrics.maxBitrate + ', ' + metrics.layerSwitchesNumber + ', ' + metrics.averageBitrate + ', ' + metrics.stallsNumber + ', ' + metrics.totalStallsDuration + ', ' + metrics.rebufferingsNumber + ', ' + metrics.totalRebufferingDuration + ', ' + this.nbNetworkDisconnected + ', ' + this.nbNetworkWifi + ', ' + this.nbNetworkMobile + ', ' + this.nbNetworkEthernet + ', ' + this.lastNetworkState + ', ' + this.muteDuration + ', ' + this.lastMuteState;

      /* return '\n{ summaryDuration: ' + this.summaryDuration + ', pauseDuration: ' + this.pauseDuration + ' }, \n' +
          '{ minBitrate: ' + metrics.minBitrate + ', maxBitrate: ' + metrics.maxBitrate + ' }, \n' +
          '{ layerSwitchesNumber: ' + metrics.layerSwitchesNumber + ', averageBitrate: ' + metrics.averageBitrate + ' }, \n' +
          '{ stallsNumber: ' + metrics.stallsNumber + ', totalStallsDuration: ' + metrics.totalStallsDuration + ' }, \n' +
          '{ rebufferingsNumber: ' + metrics.rebufferingsNumber + ', totalRebufferingDuration: ' + metrics.totalRebufferingDuration + ' }';*/
    }
  }]);
  return SessionTrackerSummary;
}();
/**
 * Event size
 * @type {number}
 */
_defineProperty(SessionTrackerSummary, "BUFFER_SIZE", 28);


/***/ }),

/***/ "./src_core/tracker/SessionTrackerTimeline.js":
/*!****************************************************!*\
  !*** ./src_core/tracker/SessionTrackerTimeline.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SessionTrackerTimeline; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _SessionTrackerEncoder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SessionTrackerEncoder */ "./src_core/tracker/SessionTrackerEncoder.js");









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var TAG = 'BpkSessionTrackerTimeline';
var SessionTrackerTimeline = /*#__PURE__*/function () {
  function SessionTrackerTimeline() {
    _classCallCheck(this, SessionTrackerTimeline);
    _defineProperty(this, "session", void 0);
    /**
     * Timeline start date
     */
    _defineProperty(this, "startDate", void 0);
    /**
     * Timeline stop date
     */
    _defineProperty(this, "stopDate", void 0);
    /**
     * Events list
     */
    _defineProperty(this, "events", void 0);
    /**
     * Used when first image event is pushed with bitrate
     * Bitrate is updated when the next bitrate event is pushed
     */
    _defineProperty(this, "firstImageWithoutBitrateEvent", void 0);
    /**
     * Encode timeline into binary data
     */
    _defineProperty(this, "encoder", void 0);
    this.startDate = null;
    this.stopDate = null;
    this.events = [];
    this.firstImageWithoutBitrateEvent = null;
    this.encoder = new _SessionTrackerEncoder__WEBPACK_IMPORTED_MODULE_12__.SessionTrackerEncoder(this);
  }
  _createClass(SessionTrackerTimeline, [{
    key: "pushEvent",
    value: function pushEvent(type) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITHOUT_DATA)) {
        var event = this.createEvent(type);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventStart",
    value: function pushEventStart(type, networkType, muteState) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_START)) {
        var event = this.createEvent(type);
        event.addEventData('networkType', networkType);
        event.addEventData('muteState', muteState);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventBitrate",
    value: function pushEventBitrate(type, bitrate) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITH_BITRATE)) {
        var event = this.createEvent(type);
        event.addEventData('bitrate', bitrate);
        if (this.firstImageWithoutBitrateEvent !== null) {
          this.firstImageWithoutBitrateEvent.addEventData('bitrate', bitrate);
          this.firstImageWithoutBitrateEvent = null;
        }
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventBitratePosition",
    value: function pushEventBitratePosition(type, bitrate, position) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITH_BITRATE_POSITION)) {
        var event = this.createEvent(type);
        event.addEventData('bitrate', bitrate);
        event.addEventData('position', position);
        if (type === _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.FirstImage && bitrate <= 0) {
          this.firstImageWithoutBitrateEvent = event;
        }
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventPositionStartEnd",
    value: function pushEventPositionStartEnd(type, positionStart, positionEnd) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITH_POSITIONS_START_END)) {
        var event = this.createEvent(type);
        event.addEventData('positionStart', positionStart);
        event.addEventData('positionEnd', positionEnd);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventStatusCode",
    value: function pushEventStatusCode(type, statusCode) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITH_STATUS_CODE)) {
        var event = this.createEvent(type);
        event.addEventData('statusCode', statusCode);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventProgress",
    value: function pushEventProgress(type, progress) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITH_PROGRESS)) {
        var event = this.createEvent(type);
        event.addEventData('progress', progress);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventState",
    value: function pushEventState(type, state) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.TYPES_WITH_STATE)) {
        var event = this.createEvent(type);
        event.addEventData('state', state);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "createEvent",
    value: function createEvent(type) {
      var event = new _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvent(type);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, 'Creating event ' + event.getEventName() + '...');

      // Remove old events when keep last only enabled
      this.applyKeepLastOnly(event);

      // Add event to the timeline
      this.events.push(event);

      // Update timeline properties (start date, stop date...)
      this.updateTimelineProperties(event);

      // Reconciliate start with stop events
      this.reconciliateStopWithStartEvent(event);

      // Try to find and attach the attached event
      // this.attachEvent(event);

      return event;
    }
  }, {
    key: "checkType",
    value: function checkType(type, types) {
      if (types.indexOf(type) >= 0) {
        return true;
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, 'Can\'t push event \'' + type + '\' to timeline, invalid parameters');
      return false;
    }
  }, {
    key: "applyKeepLastOnly",
    value: function applyKeepLastOnly(event) {
      if (event.keepLastOnly) {
        for (var i = this.events.length - 1; i >= 0; i--) {
          var timelineEvent = this.events[i];

          // Try to find if the event is already stored
          if (timelineEvent.eventId === event.eventId) {
            this.events.splice(i, 1);
            this.encoder.onEventUpdated();
            return;
          }
        }
      }
    }
  }, {
    key: "attachEvent",
    value: function attachEvent(event) {
      if (event.attachEventId > _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.None) {
        var minDate = -1;
        if (event.startEvent !== null && event.attachMaxDurationBeforeStart !== -1) {
          minDate = event.startEvent.eventDate - event.attachMaxDurationBeforeStart;
        }
        for (var i = this.events.length - 1; i >= 0; i--) {
          var timelineEvent = this.events[i];
          if (timelineEvent.eventId === event.attachEventId && (minDate === -1 || timelineEvent.eventDate >= minDate)) {
            event.attachedEvent = timelineEvent;
            return;
          }
        }
      }
    }
  }, {
    key: "updateTimelineProperties",
    value: function updateTimelineProperties(event) {
      switch (event.eventId) {
        case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Start:
          this.startDate = Date.now();
          break;
        case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Stop:
          this.stopDate = Date.now();
          break;
        default:
          break;
      }
    }
  }, {
    key: "reconciliateStopWithStartEvent",
    value: function reconciliateStopWithStartEvent(event) {
      if (event.isStopEvent()) {
        for (var i = this.events.length - 1; i >= 0; i--) {
          var timelineEvent = this.events[i];

          // Try to find the start event of "event"
          if (timelineEvent.eventId === event.startEventId) {
            // Associate the start and the stop
            timelineEvent.stopEvent = event;
            event.startEvent = timelineEvent;
            return;
          }

          // Try to find the trigger start event of "event"
          if (timelineEvent.eventId === event.triggerStartEventId) {
            // Transform the start event to correspond to the stop event
            timelineEvent.eventId = event.startEventId;
            timelineEvent.startStopEvent = true;
            timelineEvent.startEventId = event.startEventId;
            timelineEvent.stopEventId = event.stopEventId;

            // Update event id in encoded data
            if (timelineEvent.compressedData !== undefined) {
              timelineEvent.compressedData.set(timelineEvent.eventId, 0);
              this.encoder.onEventUpdated();
            }

            // Associate the start and the stop
            timelineEvent.stopEvent = event;
            event.startEvent = timelineEvent;
            return;
          }
        }
      }
    }
  }, {
    key: "onStart",
    value: function onStart(networkType, muteState) {
      this.pushEventStart(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Start, networkType, muteState);
    }
  }, {
    key: "onRedirectionEnd",
    value: function onRedirectionEnd() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.RedirectionEnd);
    }
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      this.pushEventBitratePosition(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.FirstImage, bitrate, startPosition);
    }
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      this.pushEventStatusCode(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Stop, statusCode);

      // this.print();
    }

    // **** APPStateManager events ****
  }, {
    key: "onForeground",
    value: function onForeground() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Received event onForeground but ignored');
    }
  }, {
    key: "onBackground",
    value: function onBackground() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Received event onBackground but ignored');
    }
  }, {
    key: "onNetworkAvailable",
    value: function onNetworkAvailable(networkType) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, 'Received event onNetworkAvailable type:' + networkType);
      this.pushEventState(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.NetworkAvailable, networkType);
    }
  }, {
    key: "onNetworkLost",
    value: function onNetworkLost() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Received event onNetworkLost');
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.NetworkLost);
    }
  }, {
    key: "onMute",
    value: function onMute() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Received event onMute');
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Mute);
    }
  }, {
    key: "onUnmute",
    value: function onUnmute() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Received event onUnmute');
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Unmute);
    }
  }, {
    key: "onMulticastUsed",
    value: function onMulticastUsed() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Multicast);
    }
  }, {
    key: "onUnicastUsed",
    value: function onUnicastUsed() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_9__.SessionTrackerEvents.Unicast);
    }
  }, {
    key: "data",
    value: function data() {
      return this.encoder.process();
    }
  }, {
    key: "formatDate",
    value: function formatDate(timestamp) {
      return _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__["default"].formatDate(new Date(timestamp));
    }
  }, {
    key: "print",
    value: function print() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, 'Timeline (startDate:' + this.formatDate(this.startDate) + ', stopDate:' + this.formatDate(this.stopDate) + ')');
      for (var i = 0; i < this.events.length; i++) {
        this.events[i].print();
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      var result = [];
      for (var i = 0; i < this.events.length; i++) {
        result.push(this.events[i].toString());
      }
      return result.join(', ');
    }
  }]);
  return SessionTrackerTimeline;
}();


/***/ }),

/***/ "./src_core/utils/ByteBuffer.js":
/*!**************************************!*\
  !*** ./src_core/utils/ByteBuffer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ByteBuffer; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_typed_array_at_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.at.js */ "./node_modules/core-js/modules/esnext.typed-array.at.js");
/* harmony import */ var core_js_modules_esnext_typed_array_at_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_at_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./MathUtils */ "./src_core/utils/MathUtils.js");
var _class;

































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ByteBuffer = /*#__PURE__*/function () {
  function ByteBuffer(capacity) {
    _classCallCheck(this, ByteBuffer);
    _defineProperty(this, "index", void 0);
    _defineProperty(this, "buffer", void 0);
    this.index = 0;
    this.buffer = new Uint8Array(capacity);
  }
  _createClass(ByteBuffer, [{
    key: "put",
    value: function put(value) {
      this.buffer[this.index++] = value;
      return this;
    }
  }, {
    key: "putChar",
    value: function putChar(value) {
      this.buffer[this.index++] = (value & 0xff00) >> 8;
      this.buffer[this.index++] = value & 0x00ff;
      return this;
    }

    /* putTimestamp(value) {
        this.buffer[this.index++] = (value & 0xff0000) >> 16;
        this.buffer[this.index++] = (value & 0x00ff00) >> 8;
        this.buffer[this.index++] = (value & 0x0000ff);
         return this;
    }*/

    /* putArray(array) {
        if (this.buffer.length >= this.index + array.length) {
            this.buffer.set(array, this.index);
            this.index += array.length;
        }
         return this;
    }*/
  }, {
    key: "putByteBuffer",
    value: function putByteBuffer(byteBuffer) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : byteBuffer.buffer.length;
      var buffer = byteBuffer.buffer;
      if (this.buffer.length >= this.index + length) {
        this.buffer.set(buffer, this.index); // no need to use buffer.subarray(0, length) because index is increment by length
        this.index += length;
      }
      return this;
    }

    /* increment(index) {
        this.buffer[index]++;
         return this;
    }*/
  }, {
    key: "set",
    value: function set(value, index) {
      this.buffer[index] = value;
      return this;
    }

    /* setChar(value, index) {
        this.buffer[index] = (value & 0xff00) >> 8;
        this.buffer[index + 1] = (value & 0x00ff);
         return this;
    }*/

    /* setTimestamp(value, index) {
        this.buffer[index] = (value & 0xff0000) >> 16;
        this.buffer[index + 1] = (value & 0x00ff00) >> 8;
        this.buffer[index + 2] = (value & 0x0000ff);
         return this;
    }*/

    /* shift(index) {
        this.buffer.copyWithin(index + 1, index);
        this.index++;
         return this;
    }*/
  }, {
    key: "data",
    value: function data() {
      return this.buffer;
    }
  }, {
    key: "base64",
    value: function base64() {
      return _MathUtils__WEBPACK_IMPORTED_MODULE_33__["default"].bufferToBase64(this);
    }

    /* base64Old() {
        return MathUtils.btoa(String.fromCharCode.apply(null, this.buffer));
    } */
  }, {
    key: "length",
    value: function length() {
      return this.index;
    }
  }, {
    key: "capacity",
    value: function capacity() {
      return this.buffer.length;
    }
  }, {
    key: "remaining",
    value: function remaining() {
      return this.capacity() - this.length();
    }
  }, {
    key: "toString",
    value: function toString() {
      return _MathUtils__WEBPACK_IMPORTED_MODULE_33__["default"].bufferToString(this.buffer, this.index) + '(length:' + this.length() + ')';
    }
  }]);
  return ByteBuffer;
}();
_class = ByteBuffer;
_defineProperty(ByteBuffer, "EMPTY", new _class(0));


/***/ }),

/***/ "./src_core/utils/ObjectUtils.js":
/*!***************************************!*\
  !*** ./src_core/utils/ObjectUtils.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ObjectUtils; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }
  _createClass(ObjectUtils, null, [{
    key: "hasMethods",
    value:
    /* static getMethods(obj) {
        // return Object.getOwnPropertyNames(obj).filter(key => typeof obj[key] === 'function');
         const properties = Object.getOwnPropertyNames(obj);
        let methods = [];
         for (let i = 0 ; i < properties.length ; i++) {
            if (['caller', 'callee', 'arguments'].indexOf(properties[i]) === -1) {
                const property = obj[properties[i]];
                 if (typeof property === 'function') {
                    methods.push(properties[i]);
                }
            }
        }
         return methods;
    }*/

    function hasMethods(object, methods) {
      var result = true;
      if (object === undefined) {
        return false;
      }
      methods.forEach(function (name) {
        if (typeof object[name] !== 'function') {
          result = false;
        }
      });
      return result;
    }

    /* static hasTypeOrNull(object, type) {
        return typeof object === type || object === null;
    }*/
  }, {
    key: "count",
    value: function count(object, condition) {
      var result = 0;
      for (var property in object) {
        var value = object[property];
        if (condition(property, value) === true) {
          result++;
        }
      }
      return result;
    }
  }]);
  return ObjectUtils;
}();


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-basic-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-basic-detection.js ***!
  \************************************************************************/
/***/ (function(module) {


// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-basic-detection */ "./node_modules/core-js/internals/array-buffer-basic-detection.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-basic-detection */ "./node_modules/core-js/internals/array-buffer-basic-detection.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var fround = __webpack_require__(/*! ../internals/math-fround */ "./node_modules/core-js/internals/math-fround.js");
var IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ "./node_modules/core-js/internals/ieee754.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule.getterFor(DATA_VIEW);
var setInternalState = InternalStateModule.set;
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = global.Array;
var RangeError = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(fround(number), 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw new RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw new RangeError(WRONG_LENGTH);
    setInternalState(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter($DataView, 'buffer', getInternalDataViewState);
    addGetter($DataView, 'byteLength', getInternalDataViewState);
    addGetter($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return new NativeArrayBuffer(toIndex(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = lengthOfArrayLike(O);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else deletePropertyOrThrow(O, to);
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from-constructor-and-list.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration-from-last.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration-from-last.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var index = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/***/ (function(module) {


// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number !== number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent += eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa += pow(2, mantissaLength);
    exponent -= eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-big-int-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/is-big-int-array.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-data-descriptor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-data-descriptor.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-integral-number.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-integral-number.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-float-round.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/math-float-round.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/core-js/internals/math-sign.js");

var abs = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON;

var roundTiesToEven = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
};

module.exports = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
  var n = +x;
  var absolute = abs(n);
  var s = sign(n);
  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
  var result = a - (a - absolute);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
  return s * result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-fround.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/math-fround.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var floatRound = __webpack_require__(/*! ../internals/math-float-round */ "./node_modules/core-js/internals/math-float-round.js");

var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
module.exports = Math.fround || function fround(x) {
  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-sign.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/math-sign.js ***!
  \*****************************************************/
/***/ (function(module) {


// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-big-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-big-int.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ "./node_modules/core-js/internals/to-positive-integer.js");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw new $RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-uint8-clamped.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/to-uint8-clamped.js ***!
  \************************************************************/
/***/ (function(module) {


var round = Math.round;

module.exports = function (it) {
  var value = round(it);
  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
};


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ "./node_modules/core-js/internals/is-integral-number.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toUint8Clamped = __webpack_require__(/*! ../internals/to-uint8-clamped */ "./node_modules/core-js/internals/to-uint8-clamped.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js");
var forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  aTypedArrayConstructor(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  defineBuiltInAccessor(it, key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw new RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw new RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw new RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable no-new -- required for testing */
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var NATIVE_ARRAY_BUFFER_VIEWS = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").NATIVE_ARRAY_BUFFER_VIEWS);

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from-species-and-list.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from-species-and-list.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ "./node_modules/core-js/internals/array-from-constructor-and-list.js");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isBigIntArray = __webpack_require__(/*! ../internals/is-big-int-array */ "./node_modules/core-js/internals/is-big-int-array.js");
var aTypedArrayConstructor = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").aTypedArrayConstructor);
var toBigInt = __webpack_require__(/*! ../internals/to-big-int */ "./node_modules/core-js/internals/to-big-int.js");

module.exports = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt(value) : +value;
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-species-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-species-constructor.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isDataDescriptor = __webpack_require__(/*! ../internals/is-data-descriptor */ "./node_modules/core-js/internals/is-data-descriptor.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.at.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.at.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $ArrayCopyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "./node_modules/core-js/internals/array-copy-within.js");

var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $every = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var toBigInt = __webpack_require__(/*! ../internals/to-big-int */ "./node_modules/core-js/internals/to-big-int.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var slice = uncurryThis(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray(this);
  var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var fromSpeciesAndList = __webpack_require__(/*! ../internals/typed-array-from-species-and-list */ "./node_modules/core-js/internals/typed-array-from-species-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-last-index.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-last-index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $findLastIndex = (__webpack_require__(/*! ../internals/array-iteration-from-last */ "./node_modules/core-js/internals/array-iteration-from-last.js").findLastIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-last.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-last.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $findLast = (__webpack_require__(/*! ../internals/array-iteration-from-last */ "./node_modules/core-js/internals/array-iteration-from-last.js").findLast);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = uncurryThis(ArrayIterators.values);
var arrayKeys = uncurryThis(ArrayIterators.keys);
var arrayEntries = uncurryThis(ArrayIterators.entries);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array && Uint8Array.prototype;

var GENERIC = !fails(function () {
  TypedArrayPrototype[ITERATOR].call([1]);
});

var ITERATOR_IS_VALUES = !!TypedArrayPrototype
  && TypedArrayPrototype.values
  && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values
  && TypedArrayPrototype.values.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = uncurryThis([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod('join', function join(separator) {
  return $join(aTypedArray(this), separator);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor(O))(length);
  });
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduceRight = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw new RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = arraySlice(aTypedArray(this), start, end);
  var C = typedArraySpeciesConstructor(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $some = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "./node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "./node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "./node_modules/core-js/internals/engine-webkit-version.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global.Uint16Array;
var nativeSort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() !== new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var exportTypedArrayMethod = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayMethod);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var join = uncurryThis([].join);

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.at.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.typed-array.at.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.typed-array.at */ "./node_modules/core-js/modules/es.typed-array.at.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.typed-array.find-last-index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.typed-array.find-last-index */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.find-last.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.typed-array.find-last.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.typed-array.find-last */ "./node_modules/core-js/modules/es.typed-array.find-last.js");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./players/index.js"));
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFD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cGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vcGxheWVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyYy9lbmdpbmUvcGxheWVyL1BsYXllck1hbmFnZXJIYW5kbGVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjL2VuZ2luZS9zeXN0ZW0vQ2FjaGVIYW5kbGVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYW5hbHl0aWNzL21ldHJpY3MvTWV0cmljcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FuYWx5dGljcy9tZXRyaWNzL01ldHJpY3NNYW5hZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYW5hbHl0aWNzL3BsYXllci9HZW5lcmljUGxheWVyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FuYWx5dGljcy9wbGF5ZXIvR2VuZXJpY1BsYXllckFwaS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FuYWx5dGljcy9wbGF5ZXIvUGxheWVyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FuYWx5dGljcy9wbGF5ZXIvUGxheWVyRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FuYWx5dGljcy9wbGF5ZXIvUGxheWVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2NhY2hlL0NhY2hlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2luZGV4LmFuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3JlcXVlc3QvQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9zZXNzaW9uL2FuYWx5dGljcy9BbmFseXRpY3NTZXNzaW9uLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvdHJhY2tlci9TZXNzaW9uVHJhY2tlckVuY29kZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS90cmFja2VyL1Nlc3Npb25UcmFja2VyRXZlbnQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS90cmFja2VyL1Nlc3Npb25UcmFja2VyU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3RyYWNrZXIvU2Vzc2lvblRyYWNrZXJUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3V0aWxzL0J5dGVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS91dGlscy9PYmplY3RVdGlscy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1idWZmZXItYmFzaWMtZGV0ZWN0aW9uLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWNvcHktd2l0aGluLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS1jb25zdHJ1Y3Rvci1hbmQtbGlzdC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24tZnJvbS1sYXN0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktcmVkdWNlLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llZWU3NTQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYmlnLWludC1hcnJheS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1kYXRhLWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtaW50ZWdyYWwtbnVtYmVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21hdGgtZmxvYXQtcm91bmQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWF0aC1mcm91bmQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWF0aC1zaWduLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWJpZy1pbnQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2Zmc2V0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXBvc2l0aXZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tdWludDgtY2xhbXBlZC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcnMtcmVxdWlyZS13cmFwcGVycy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90eXBlZC1hcnJheS1mcm9tLXNwZWNpZXMtYW5kLWxpc3QuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHlwZWQtYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90eXBlZC1hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5hdC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmV2ZXJ5LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maWxsLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZpbmQtbGFzdC1pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZmluZC1sYXN0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maW5kLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkubGFzdC1pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkubWFwLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5yZWR1Y2UtcmlnaHQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkucmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuc2V0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5zbGljZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuc29tZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkudG8tbG9jYWxlLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkudG8tc3RyaW5nLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS51aW50OC1hcnJheS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnR5cGVkLWFycmF5LmF0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQudHlwZWQtYXJyYXkuZmluZC1sYXN0LWluZGV4LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQudHlwZWQtYXJyYXkuZmluZC1sYXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYW5hbHl0aWNzU21hcnRMaWJNb2R1bGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYW5hbHl0aWNzU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYW5hbHl0aWNzU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG59KSgoZnVuY3Rpb24oKSB7IHJldHVybiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCl9KSgpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKiBpbXBvcnQgRGFzaEpzUGxheWVyQWRhcHRlciBmcm9tICcuL2Rhc2hqcy9EYXNoSnNQbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBTaGFrYVBsYXllckFkYXB0ZXIgZnJvbSAnLi9zaGFrYS9TaGFrYVBsYXllckFkYXB0ZXInO1xuaW1wb3J0IEhUTUw1UGxheWVyQWRhcHRlciBmcm9tICcuL2h0bWw1L0hUTUw1UGxheWVyQWRhcHRlcic7XG5pbXBvcnQgQVZQbGF5QWRhcHRlciBmcm9tICcuL2F2cGxheS9BVlBsYXlBZGFwdGVyJztcbmltcG9ydCBTYWdlbWNvbURJVzM4N0FkYXB0ZXIgZnJvbSAnLi9zYWdlbWNvbS1kaXczODcvU2FnZW1jb21ESVczODdBZGFwdGVyJztcbmltcG9ydCBIYmJUVjFQbGF5ZXJBZGFwdGVyIGZyb20gJy4vaGJidHYxL0hiYlRWMVBsYXllckFkYXB0ZXInO1xuaW1wb3J0IEthbHR1cmFQbGF5ZXJBZGFwdGVyIGZyb20gJy4va2FsdHVyYS9LYWx0dXJhUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgQ29ubmVjdFBsYXllckFkYXB0ZXIgZnJvbSAnLi9jb25uZWN0cGxheWVyL0Nvbm5lY3RQbGF5ZXJBZGFwdGVyJzsqL1xuXG5pbXBvcnQgQ29yZUVuZ2luZSBmcm9tICcuLi9zcmMvZW5naW5lL0NvcmVFbmdpbmUnO1xuaW1wb3J0IFBsYXllck1hbmFnZXJIYW5kbGVyIGZyb20gJy4uL3NyYy9lbmdpbmUvcGxheWVyL1BsYXllck1hbmFnZXJIYW5kbGVyJztcbmltcG9ydCB7IENhY2hlSGFuZGxlciB9IGZyb20gJy4uL3NyYy9lbmdpbmUvc3lzdGVtL0NhY2hlSGFuZGxlcic7XG5pbXBvcnQgeyBQbGF5ZXJFdmVudExpc3RlbmVyLCBHZW5lcmljUGxheWVyQXBpIH0gZnJvbSAnYW5hbHl0aWNzJztcblxuQ29yZUVuZ2luZS5hbmFseXRpY3NNb2R1bGUgPSB7XG4gICAgUGxheWVyTWFuYWdlckhhbmRsZXIsXG4gICAgUGxheWVyRXZlbnRMaXN0ZW5lcixcbiAgICBHZW5lcmljUGxheWVyQXBpLFxuICAgIENhY2hlSGFuZGxlclxufTtcbkNvcmVFbmdpbmUuZ2V0SW5zdGFuY2UoKS5yZWdpc3RlclBsYXllckFkYXB0ZXJzKCk7XG5cbi8qIGV4cG9ydCB7IERhc2hKc1BsYXllckFkYXB0ZXIsIHhTaGFrYVBsYXllckFkYXB0ZXIsIEhUTUw1UGxheWVyQWRhcHRlciwgQVZQbGF5QWRhcHRlciwgU2FnZW1jb21ESVczODdBZGFwdGVyLFxuICAgIEhiYlRWMVBsYXllckFkYXB0ZXIsIEthbHR1cmFQbGF5ZXJBZGFwdGVyLCBDb25uZWN0UGxheWVyQWRhcHRlclxufTsqL1xuZXhwb3J0ICogZnJvbSAnYW5hbHl0aWNzJztcbmV4cG9ydCB7XG4gICAgQ2FjaGVIYW5kbGVyXG59O1xuIiwiLy8gaW1wb3J0IHsgR2VuZXJpY1BsYXllckFkYXB0ZXIgfSBmcm9tICdjb3JlJztcbmltcG9ydCB7IEdlbmVyaWNQbGF5ZXJBZGFwdGVyIH0gZnJvbSAnYW5hbHl0aWNzJztcbi8qIGltcG9ydCBTaGFrYVBsYXllckFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9zaGFrYS9TaGFrYVBsYXllckFkYXB0ZXInO1xuaW1wb3J0IERhc2hKc1BsYXllckFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9kYXNoanMvRGFzaEpzUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgSFRNTDVQbGF5ZXJBZGFwdGVyIGZyb20gJy4uLy4uLy4uL3BsYXllcnMvaHRtbDUvSFRNTDVQbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBBVlBsYXlBZGFwdGVyIGZyb20gJy4uLy4uLy4uL3BsYXllcnMvYXZwbGF5L0FWUGxheUFkYXB0ZXInO1xuaW1wb3J0IFNhZ2VtY29tRElXMzg3QWRhcHRlciBmcm9tICcuLi8uLi8uLi9wbGF5ZXJzL3NhZ2VtY29tLWRpdzM4Ny9TYWdlbWNvbURJVzM4N0FkYXB0ZXInO1xuaW1wb3J0IEhiYlRWMVBsYXllckFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9oYmJ0djEvSGJiVFYxUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgS2FsdHVyYVBsYXllckFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9rYWx0dXJhL0thbHR1cmFQbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBDb25uZWN0UGxheWVyQWRhcHRlciBmcm9tICcuLi8uLi8uLi9wbGF5ZXJzL2Nvbm5lY3RwbGF5ZXIvQ29ubmVjdFBsYXllckFkYXB0ZXInOyovXG5pbXBvcnQgQ29yZUVuZ2luZSBmcm9tICcuLi9Db3JlRW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTWFuYWdlckhhbmRsZXIge1xuICAgICNhZGFwdGVycztcblxuICAgIGxvYWRQbGF5ZXJBZGFwdGVycygpIHtcbiAgICAgICAgdGhpcy4jYWRhcHRlcnMgPSB7fTtcbiAgICAgICAgdGhpcy4jYWRhcHRlcnNbJ2dlbmVyaWMnXSA9IEdlbmVyaWNQbGF5ZXJBZGFwdGVyO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ3RoZW9wbGF5ZXInLCBDb3JlRW5naW5lLnRoZW9wbGF5ZXJNb2R1bGU/LlRIRU9QbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdzaGFrYScsIENvcmVFbmdpbmUuc2hha2FNb2R1bGU/LlNoYWthUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcignZGFzaGpzJywgQ29yZUVuZ2luZS5kYXNoanNNb2R1bGU/LkRhc2hKc1BsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ2h0bWw1JywgQ29yZUVuZ2luZS5odG1sNU1vZHVsZT8uSFRNTDVQbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdhdnBsYXknLCBDb3JlRW5naW5lLmF2cGxheU1vZHVsZT8uQVZQbGF5QWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcignZGl3Mzg3JywgQ29yZUVuZ2luZS5kaXczODdNb2R1bGU/LlNhZ2VtY29tRElXMzg3QWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcignaGJidHYxJywgQ29yZUVuZ2luZS5oYmJ0djFNb2R1bGU/LkhiYlRWMVBsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ2thbHR1cmEnLCBDb3JlRW5naW5lLmthbHR1cmFNb2R1bGU/LkthbHR1cmFQbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdjb25uZWN0cGxheWVyJywgQ29yZUVuZ2luZS5jb25uZWN0cGxheWVyTW9kdWxlPy5Db25uZWN0UGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcigncnhwbGF5ZXInLCBDb3JlRW5naW5lLnJ4cGxheWVyTW9kdWxlPy5SeFBsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ2hsc2pzJywgQ29yZUVuZ2luZS5obHNqc01vZHVsZT8uSGxzSnNQbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdiaXRtb3ZpbicsIENvcmVFbmdpbmUuYml0bW92aW5Nb2R1bGU/LkJpdG1vdmluUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcigncmVhY3RuYXRpdmVjb25uZWN0cGxheWVyJywgQ29yZUVuZ2luZS5yZWFjdG5hdGl2ZWNvbm5lY3RwbGF5ZXJNb2R1bGU/LlJlYWN0TmF0aXZlQ29ubmVjdFBsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ3JlYWN0bmF0aXZldGhlb3BsYXllcicsIENvcmVFbmdpbmUucmVhY3RuYXRpdmV0aGVvcGxheWVyTW9kdWxlPy5SZWFjdE5hdGl2ZVRIRU9wbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdjaHJvbWVjYXN0JywgQ29yZUVuZ2luZS5jaHJvbWVjYXN0TW9kdWxlPy5DaHJvbWVjYXN0UGxheWVyQWRhcHRlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2FkYXB0ZXJzO1xuICAgIH1cblxuICAgIGFkZEFkYXB0ZXIobmFtZSwgYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLiNhZGFwdGVyc1tuYW1lXSA9IGFkYXB0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy4jYWRhcHRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNhZGFwdGVyc1trZXldICE9PSB1bmRlZmluZWQgJiYgdGhpcy4jYWRhcHRlcnNba2V5XS5jaGVja1BsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkYXB0ZXIgPSBuZXcgdGhpcy4jYWRhcHRlcnNba2V5XSgpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIuYXR0YWNoUGxheWVyKHBsYXllciwgbGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExvZ2dlck1hbmFnZXIgfSBmcm9tICdjb3JlJztcblxuY29uc3QgVEFHID0gJ0Jwa0NhY2hlSGFuZGxlcic7XG5cbmNvbnN0IFBSRUZJWCA9ICdzbC0nO1xuXG5leHBvcnQgY2xhc3MgQ2FjaGVIYW5kbGVyIHtcbiAgICBzdG9yYWdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJbml0IGNhY2hlIGhhbmRsZXIsIGxvY2FsU3RvcmFnZSBpcyAnICsgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnID8gJ2F2YWlsYWJsZScgOiAndW5hdmFpbGFibGUnKSArICcuLi4nKTtcblxuICAgICAgICAvLyBJbml0IHN0b3JhZ2VcbiAgICAgICAgdGhpcy5zdG9yYWdlID0ge307XG5cbiAgICAgICAgLy8gTG9hZCBleGlzdGluZyBjYWNoZVxuICAgICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoUFJFRklYKSkgLy8gRmlsdGVyIG9uIFNtYXJ0TGliIGRhdGFcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgYWxsIHJlcG9ydHNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtrZXk6IGtleSwgdmFsdWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSl9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goY2FjaGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGUudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2NhY2hlLmtleV0gPSBjYWNoZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gUFJFRklYICsga2V5O1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2U/LnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGdldChrZXksIGtleUluY2x1ZGVzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGtleUluY2x1ZGVzUHJlZml4ID09PSBmYWxzZSkge1xuICAgICAgICAgICAga2V5ID0gUFJFRklYICsga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGV4aXN0cywgcmV0dXJuIGl0XG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5zdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIb3QgbG9hZCBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxldCBpdGVtO1xuICAgICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSBpdGVtO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgICBrZXkgPSBQUkVGSVggKyBrZXk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuc3RvcmFnZVtrZXldO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlPy5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGtleXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RvcmFnZSlcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBrZXkucmVwbGFjZShQUkVGSVgsICcnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa01ldHJpY3MnO1xuXG5leHBvcnQgY2xhc3MgTWV0cmljcyB7XG4gICAgc3RhdGljIFBMQVlCQUNLX1RZUEVfTElWRSA9ICdMSVZFJztcbiAgICBzdGF0aWMgUExBWUJBQ0tfVFlQRV9WT0QgPSAnVk9EJztcblxuICAgIHJlZGlyZWN0aW9uVGltZTtcbiAgICBzdGFydHVwVGltZTtcbiAgICBjb21wbGV0aW9uO1xuICAgIHBsYXliYWNrVHlwZTtcbiAgICBwbGF5YmFja0R1cmF0aW9uO1xuICAgIHNlc3Npb25EdXJhdGlvbjtcbiAgICBjb250ZW50RHVyYXRpb247XG5cbiAgICBzdGFsbHNOdW1iZXI7XG4gICAgbWF4U3RhbGxEdXJhdGlvbjtcbiAgICB0b3RhbFN0YWxsc0R1cmF0aW9uO1xuICAgIHJlYnVmZmVyaW5nc051bWJlcjtcbiAgICBtYXhSZWJ1ZmZlcmluZ0R1cmF0aW9uO1xuICAgIHRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbjtcblxuICAgIG1pbkJpdHJhdGU7XG4gICAgbWF4Qml0cmF0ZTtcbiAgICBhdmVyYWdlQml0cmF0ZTtcblxuICAgIGxheWVyU3dpdGNoZXNOdW1iZXI7XG4gICAgdGltZVNwZW50UGVyTGF5ZXI7XG5cbiAgICBwcmVTdGFydHVwVGltZTtcblxuICAgIGNvbnN0cnVjdG9yKG1ldHJpY3MpIHtcbiAgICAgICAgaWYgKG1ldHJpY3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdGlvblRpbWUgPSBtZXRyaWNzLnJlZGlyZWN0aW9uVGltZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnR1cFRpbWUgPSBtZXRyaWNzLnN0YXJ0dXBUaW1lO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uID0gbWV0cmljcy5jb21wbGV0aW9uO1xuICAgICAgICAgICAgdGhpcy5wbGF5YmFja1R5cGUgPSBtZXRyaWNzLnBsYXliYWNrVHlwZTtcbiAgICAgICAgICAgIHRoaXMucGxheWJhY2tEdXJhdGlvbiA9IG1ldHJpY3MucGxheWJhY2tEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkR1cmF0aW9uID0gbWV0cmljcy5zZXNzaW9uRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnREdXJhdGlvbiA9IG1ldHJpY3MuY29udGVudER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zdGFsbHNOdW1iZXIgPSBtZXRyaWNzLnN0YWxsc051bWJlcjtcbiAgICAgICAgICAgIHRoaXMubWF4U3RhbGxEdXJhdGlvbiA9IG1ldHJpY3MubWF4U3RhbGxEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMudG90YWxTdGFsbHNEdXJhdGlvbiA9IG1ldHJpY3MudG90YWxTdGFsbHNEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMucmVidWZmZXJpbmdzTnVtYmVyID0gbWV0cmljcy5yZWJ1ZmZlcmluZ3NOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLm1heFJlYnVmZmVyaW5nRHVyYXRpb24gPSBtZXRyaWNzLm1heFJlYnVmZmVyaW5nRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbiA9IG1ldHJpY3MudG90YWxSZWJ1ZmZlcmluZ0R1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5taW5CaXRyYXRlID0gbWV0cmljcy5taW5CaXRyYXRlO1xuICAgICAgICAgICAgdGhpcy5tYXhCaXRyYXRlID0gbWV0cmljcy5tYXhCaXRyYXRlO1xuICAgICAgICAgICAgdGhpcy5hdmVyYWdlQml0cmF0ZSA9IG1ldHJpY3MuYXZlcmFnZUJpdHJhdGU7XG4gICAgICAgICAgICB0aGlzLmxheWVyU3dpdGNoZXNOdW1iZXIgPSBtZXRyaWNzLmxheWVyU3dpdGNoZXNOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZXRyaWNzLnRpbWVTcGVudFBlckxheWVyKSk7XG4gICAgICAgICAgICB0aGlzLnByZVN0YXJ0dXBUaW1lID0gbWV0cmljcy5wcmVTdGFydHVwVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3Rpb25UaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnR1cFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMucGxheWJhY2tUeXBlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnBsYXliYWNrRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50RHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFsbHNOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5tYXhTdGFsbER1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMudG90YWxTdGFsbHNEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLnJlYnVmZmVyaW5nc051bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLm1heFJlYnVmZmVyaW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy50b3RhbFJlYnVmZmVyaW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5taW5CaXRyYXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMubWF4Qml0cmF0ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmF2ZXJhZ2VCaXRyYXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJTd2l0Y2hlc051bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0ge307XG4gICAgICAgICAgICB0aGlzLnByZVN0YXJ0dXBUaW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldHJpY3NCdWlsZGVyIHtcbiAgICBtZXRyaWNzO1xuXG4gICAgd2F0Y2hpbmdSYW5nZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRyaWNzID0gbmV3IE1ldHJpY3MoKSkge1xuICAgICAgICB0aGlzLm1ldHJpY3MgPSBtZXRyaWNzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBzZXRSZWRpcmVjdGlvblRpbWUocmVkaXJlY3Rpb25UaW1lKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5yZWRpcmVjdGlvblRpbWUgPSByZWRpcmVjdGlvblRpbWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0U3RhcnR1cFRpbWUoc3RhcnR1cFRpbWUpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLnN0YXJ0dXBUaW1lID0gc3RhcnR1cFRpbWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0U2Vzc2lvbkR1cmF0aW9uKHNlc3Npb25EdXJhdGlvbikge1xuICAgICAgICB0aGlzLm1ldHJpY3Muc2Vzc2lvbkR1cmF0aW9uID0gc2Vzc2lvbkR1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldENvbnRlbnREdXJhdGlvbihjb250ZW50RHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLmNvbnRlbnREdXJhdGlvbiA9IGNvbnRlbnREdXJhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQbGF5YmFja1R5cGUocGxheWJhY2tUeXBlKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5wbGF5YmFja1R5cGUgPSBwbGF5YmFja1R5cGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Rmlyc3RMYXllcihiaXRyYXRlKSB7XG4gICAgICAgIGlmIChiaXRyYXRlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzLm1heEJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzLm1pbkJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UHJlU3RhcnR1cFRpbWUocHJlU3RhcnR1cFRpbWUpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLnByZVN0YXJ0dXBUaW1lID0gcHJlU3RhcnR1cFRpbWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGltZVNwZW50UGVyTGF5ZXIoYml0cmF0ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgYml0cmF0ZSA9IE1hdGgucm91bmQoYml0cmF0ZSk7XG5cbiAgICAgICAgaWYgKGJpdHJhdGUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZVNwZW50T25MYXllciA9IHRoaXMubWV0cmljcy50aW1lU3BlbnRQZXJMYXllcltiaXRyYXRlXTtcbiAgICAgICAgICAgIGlmICh0aW1lU3BlbnRPbkxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRPbkxheWVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZVNwZW50T25MYXllciArPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMubWV0cmljcy50aW1lU3BlbnRQZXJMYXllcltiaXRyYXRlXSA9IHRpbWVTcGVudE9uTGF5ZXI7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1ldHJpY3MubWF4Qml0cmF0ZSA8IGJpdHJhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldHJpY3MubWF4Qml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1ldHJpY3MubWluQml0cmF0ZSA+IGJpdHJhdGUgfHwgdGhpcy5tZXRyaWNzLm1pbkJpdHJhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldHJpY3MubWluQml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRMYXllclN3aXRjaCgpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLmxheWVyU3dpdGNoZXNOdW1iZXIrKztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRQbGF5YmFja0R1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5wbGF5YmFja0R1cmF0aW9uICs9IGR1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFdhdGNoaW5nUmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICdBZGQgd2F0Y2hpbmcgcmFuZ2UsIGR1cmF0aW9uICcgKyAoZW5kIC0gc3RhcnQpICsgJ21zJyk7XG4gICAgICAgICAgICB0aGlzLndhdGNoaW5nUmFuZ2VzLnB1c2goe3N0YXJ0OiBzdGFydCwgZW5kOiBlbmQsIGR1cmF0aW9uOiBlbmQgLSBzdGFydH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkU3RhbGwoZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLnN0YWxsc051bWJlcisrO1xuICAgICAgICB0aGlzLm1ldHJpY3MudG90YWxTdGFsbHNEdXJhdGlvbiArPSBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRoaXMubWV0cmljcy5tYXhTdGFsbER1cmF0aW9uIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubWV0cmljcy5tYXhTdGFsbER1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRSZWJ1ZmZlcmluZyhkdXJhdGlvbikge1xuICAgICAgICB0aGlzLm1ldHJpY3MucmVidWZmZXJpbmdzTnVtYmVyKys7XG4gICAgICAgIHRoaXMubWV0cmljcy50b3RhbFJlYnVmZmVyaW5nRHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgIGlmICh0aGlzLm1ldHJpY3MubWF4UmVidWZmZXJpbmdEdXJhdGlvbiA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MubWF4UmVidWZmZXJpbmdEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgTWV0cmljc0J1aWxkZXIobmV3IE1ldHJpY3ModGhpcy5tZXRyaWNzKSk7XG4gICAgICAgIGJ1aWxkZXIud2F0Y2hpbmdSYW5nZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMud2F0Y2hpbmdSYW5nZXMpKTtcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgfVxuXG4gICAgY29tcHV0ZUNvbXBsZXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm1ldHJpY3MucGxheWJhY2tUeXBlID09PSBNZXRyaWNzLlBMQVlCQUNLX1RZUEVfTElWRSB8fCB0aGlzLm1ldHJpY3MuY29udGVudER1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy53YXRjaGluZ1JhbmdlcykpO1xuICAgICAgICBsZXQgaW50ZXJ2YWxzID0gcmFuZ2VzLnNsaWNlKDApO1xuXG4gICAgICAgIGlmIChyYW5nZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbHNbMF0uZHVyYXRpb24gKiAxMDAwIC8gdGhpcy5tZXRyaWNzLmNvbnRlbnREdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICBsZXQgdG9wID0gbnVsbDtcblxuICAgICAgICAvLyBzb3J0IHRoZSBpbnRlcnZhbHMgYmFzZWQgb24gdGhlaXIgc3RhcnQgdmFsdWVzXG4gICAgICAgIGludGVydmFscyA9IGludGVydmFscy5zb3J0KChzdGFydFZhbHVlLCBlbmRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0YXJ0VmFsdWUuc3RhcnQsIDEwKSA+IHBhcnNlSW50KGVuZFZhbHVlLnN0YXJ0LCAxMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJzZUludChzdGFydFZhbHVlLnN0YXJ0LCAxMCkgPCBwYXJzZUludChlbmRWYWx1ZS5zdGFydCwgMTApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHB1c2ggdGhlIDFzdCBpbnRlcnZhbCBpbnRvIHRoZSBzdGFja1xuICAgICAgICBzdGFjay5wdXNoKGludGVydmFsc1swXSk7XG5cbiAgICAgICAgLy8gc3RhcnQgZnJvbSB0aGUgbmV4dCBpbnRlcnZhbCBhbmQgbWVyZ2UgaWYgbmVlZGVkXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHRvcCBlbGVtZW50XG4gICAgICAgICAgICB0b3AgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRvcC5lbmQsIDEwKSA8IHBhcnNlSW50KGludGVydmFsc1tpXS5zdGFydCwgMTApKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgaW50ZXJ2YWwgZG9lc24ndCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gc3RhY2sgdG9wIGVsZW1lbnQsIHB1c2ggaXQgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChpbnRlcnZhbHNbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0b3AuZW5kLCAxMCkgPCBwYXJzZUludChpbnRlcnZhbHNbaV0uZW5kLCAxMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgdXBkYXRlIHRoZSBlbmQgdmFsdWUgb2YgdGhlIHRvcCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gaWYgZW5kIG9mIGN1cnJlbnQgaW50ZXJ2YWwgaXMgaGlnaGVyXG4gICAgICAgICAgICAgICAgdG9wLmVuZCA9IHBhcnNlSW50KGludGVydmFsc1tpXS5lbmQsIDEwKTtcbiAgICAgICAgICAgICAgICB0b3AuZHVyYXRpb24gPSB0b3AuZW5kIC0gdG9wLnN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3RhY2tbaV0uZHVyYXRpb24gPSBwYXJzZUludChzdGFja1tpXS5lbmQsIDEwKSAtIHBhcnNlSW50KHN0YWNrW2ldLnN0YXJ0LCAxMCk7XG4gICAgICAgICAgICBkdXJhdGlvbiArPSBwYXJzZUludChzdGFja1tpXS5kdXJhdGlvbiwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53YXRjaGluZ1JhbmdlcyA9IHN0YWNrO1xuXG4gICAgICAgIGxldCBjb21wbGV0aW9uID0gTWF0aC5mbG9vcihkdXJhdGlvbiAqIDEwMDAgLyB0aGlzLm1ldHJpY3MuY29udGVudER1cmF0aW9uKTtcbiAgICAgICAgaWYgKGNvbXBsZXRpb24gPiAxMDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wbGV0aW9uO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBsZXQgbGF5ZXJQZXJEdXJhdGlvbiA9IDA7XG4gICAgICAgIGxldCB0b3RhbER1cmF0aW9uID0gMDtcblxuICAgICAgICBmb3IgKGxldCBiaXRyYXRlIGluIHRoaXMubWV0cmljcy50aW1lU3BlbnRQZXJMYXllcikge1xuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLm1ldHJpY3MudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV07XG5cbiAgICAgICAgICAgIGxheWVyUGVyRHVyYXRpb24gKz0gYml0cmF0ZSAqIGR1cmF0aW9uO1xuICAgICAgICAgICAgdG90YWxEdXJhdGlvbiArPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3RhbER1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgPSBNYXRoLnJvdW5kKGxheWVyUGVyRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWV0cmljcy5jb21wbGV0aW9uID0gdGhpcy5jb21wdXRlQ29tcGxldGlvbigpO1xuICAgICAgICBpZiAodGhpcy5tZXRyaWNzLmNvbXBsZXRpb24gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MuY29tcGxldGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXRyaWNzLmNvbXBsZXRpb24gPiAxMDAwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MuY29tcGxldGlvbiA9IDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ldHJpY3Muc3RhcnR1cFRpbWUgKz0gdGhpcy5tZXRyaWNzLnByZVN0YXJ0dXBUaW1lO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1ldHJpY3M7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMud2F0Y2hpbmdSYW5nZXMgPSBbXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCIvKiBpbXBvcnQge1xuICAgIFNlc3Npb25UcmFja2VyQnVmZmVyaW5nU3RhcnQsIFNlc3Npb25UcmFja2VyTGF5ZXJTd2l0Y2gsXG4gICAgU2Vzc2lvblRyYWNrZXJQYXVzZSwgU2Vzc2lvblRyYWNrZXJSZWJ1ZmZlcmluZ1N0b3AsXG4gICAgU2Vzc2lvblRyYWNrZXJSZXN1bWUsIFNlc3Npb25UcmFja2VyU2VlayxcbiAgICBTZXNzaW9uVHJhY2tlclN0YWxsU3RvcFxufSBmcm9tICcuLi8uLi90cmFja2VyL1Nlc3Npb25UcmFja2VyRXZlbnQnOyovXG5pbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IHtNZXRyaWNzLCBNZXRyaWNzQnVpbGRlcn0gZnJvbSAnLi9NZXRyaWNzJztcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRGF0ZVV0aWxzJztcbmltcG9ydCB7IFNlc3Npb25UcmFja2VyRXZlbnRzIH0gZnJvbSAnLi4vLi4vdHJhY2tlci9TZXNzaW9uVHJhY2tlckV2ZW50JztcblxuY29uc3QgVEFHID0gJ0Jwa01ldHJpY3NNZ3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNzTWFuYWdlciB7XG4gICAgc3RhdGljIE1BWF9USU1FX0JFVFdFRU5fU0VFS19BTkRfUkVCVUZGRVJJTkcgPSAxMDAwO1xuXG4gICAgaGFuZGxlcjtcbiAgICBidWlsZGVyO1xuICAgIHBsYXllckFkYXB0ZXI7XG4gICAgdGltZWxpbmU7XG5cbiAgICBzdGFydGVkO1xuICAgIHBsYXlpbmc7XG4gICAgYnVmZmVyaW5nO1xuICAgIHNlZWtpbmc7XG4gICAgYml0cmF0ZTtcblxuICAgIHJlZGlyZWN0aW9uU3RhcnREYXRlO1xuICAgIHBsYXlpbmdTdGFydERhdGU7XG4gICAgYnVmZmVyaW5nU3RhcnREYXRlO1xuICAgIGxhc3RMYXllclN3aXRjaERhdGU7XG4gICAgbGFzdFNlZWtEYXRlO1xuICAgIHBsYXlPbk5leHRCdWZmZXJpbmdFbmQ7XG5cbiAgICBzdGFydFBvc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgTWV0cmljc0J1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnRpbWVsaW5lO1xuXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWVraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYml0cmF0ZSA9IC0xO1xuXG4gICAgICAgIHRoaXMucmVkaXJlY3Rpb25TdGFydERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnBsYXlpbmdTdGFydERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdExheWVyU3dpdGNoRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdFNlZWtEYXRlID0gMDtcbiAgICAgICAgdGhpcy5wbGF5T25OZXh0QnVmZmVyaW5nRW5kID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gMDtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvblN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJlZGlyZWN0aW9uU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvblJlZGlyZWN0aW9uRW5kKCkge1xuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0UmVkaXJlY3Rpb25UaW1lKERhdGUubm93KCkgLSB0aGlzLnJlZGlyZWN0aW9uU3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvbkZpcnN0SW1hZ2UoYml0cmF0ZSwgc3RhcnRQb3NpdGlvbikge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU3RyZWFtaW5nIHNlc3Npb24gc3RhcnRlZCAoJyArIGJpdHJhdGUgKyAna2JwcywnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUoc3RhcnRQb3NpdGlvbikgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0Q29udGVudER1cmF0aW9uKHRoaXMucGxheWVyQWRhcHRlci5nZXREdXJhdGlvbigpKVxuICAgICAgICAgICAgLnNldFBsYXliYWNrVHlwZSh0aGlzLnBsYXllckFkYXB0ZXIuZ2V0RHVyYXRpb24oKSA8PSAwID8gTWV0cmljcy5QTEFZQkFDS19UWVBFX0xJVkUgOiBNZXRyaWNzLlBMQVlCQUNLX1RZUEVfVk9EKTtcblxuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0U3RhcnR1cFRpbWUoRGF0ZS5ub3coKSAtIHRoaXMucmVkaXJlY3Rpb25TdGFydERhdGUpO1xuICAgICAgICB0aGlzLnBsYXlpbmdTdGFydERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRlci5zZXRGaXJzdExheWVyKGJpdHJhdGUpO1xuICAgICAgICB0aGlzLmJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgICB0aGlzLmxhc3RMYXllclN3aXRjaERhdGUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uTGF5ZXJTd2l0Y2goYml0cmF0ZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGNoYW5nZWQgbGF5ZXIgdG8gJyArIGJpdHJhdGUgKyAna2JwcycsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFRpbWVTcGVudFBlckxheWVyKHRoaXMuYml0cmF0ZSwgRGF0ZS5ub3coKSAtIHRoaXMubGFzdExheWVyU3dpdGNoRGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdExheWVyU3dpdGNoRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJpdHJhdGUgIT09IGJpdHJhdGUgJiYgdGhpcy5iaXRyYXRlID4gMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgY2hhbmdlZCBsYXllciwgYmVmb3JlOiAnICsgdGhpcy5iaXRyYXRlICsgJ2ticHMsIG5vdzogJyArIGJpdHJhdGUgKyAna2JwcycsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lPy5wdXNoRXZlbnRCaXRyYXRlKFNlc3Npb25UcmFja2VyRXZlbnRzLkxheWVyU3dpdGNoLCBiaXRyYXRlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRMYXllclN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaXRyYXRlID0gYml0cmF0ZTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvblBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGlzIHBhdXNlZCcsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZWxpbmU/LnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5QYXVzZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFBsYXliYWNrRHVyYXRpb24oRGF0ZS5ub3coKSAtIHRoaXMucGxheWluZ1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRXYXRjaGluZ1JhbmdlKHRoaXMuc3RhcnRQb3NpdGlvbiwgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQgJiYgIXRoaXMucGxheWluZykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBpcyByZXN1bWVkJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lbGluZT8ucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlJlc3VtZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdTdGFydERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcmluZyAmJiB0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgaXMgYnVmZmVyaW5nJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lbGluZT8ucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLkJ1ZmZlcmluZ1N0YXJ0KTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWVraW5nICYmIGN1cnJlbnREYXRlIC0gdGhpcy5sYXN0U2Vla0RhdGUgPiBNZXRyaWNzTWFuYWdlci5NQVhfVElNRV9CRVRXRUVOX1NFRUtfQU5EX1JFQlVGRkVSSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWVraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYnVmZmVyaW5nU3RhcnREYXRlID0gY3VycmVudERhdGU7XG4gICAgICAgICAgICB0aGlzLnBsYXlPbk5leHRCdWZmZXJpbmdFbmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRQbGF5YmFja0R1cmF0aW9uKGN1cnJlbnREYXRlIC0gdGhpcy5wbGF5aW5nU3RhcnREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uQnVmZmVyaW5nRW5kKGlzUGxheWluZykge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKGlzUGxheWluZyAmJiB0aGlzLnBsYXlPbk5leHRCdWZmZXJpbmdFbmQgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdTdGFydERhdGUgPSBjdXJyZW50RGF0ZTtcbiAgICAgICAgICAgIHRoaXMucGxheU9uTmV4dEJ1ZmZlcmluZ0VuZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCAmJiB0aGlzLmJ1ZmZlcmluZ1N0YXJ0RGF0ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmdTdGFydERhdGUgPSBjdXJyZW50RGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5T25OZXh0QnVmZmVyaW5nRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlSZWJ1ZmZlcmluZ0VuZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5U3RhbGxFbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5idWZmZXJpbmdTdGFydERhdGUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25TdGFsbEVuZCgpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyaW5nRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5idWZmZXJpbmdTdGFydERhdGU7XG4gICAgICAgIHRoaXMuYnVpbGRlci5hZGRTdGFsbChidWZmZXJpbmdEdXJhdGlvbik7XG5cbiAgICAgICAgdGhpcy50aW1lbGluZT8ucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RvcCk7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBzdGFsbGVkIGZvciAnICsgYnVmZmVyaW5nRHVyYXRpb24gKyAnbXMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uUmVidWZmZXJpbmdFbmQoKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcmluZ0R1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHRoaXMuYnVmZmVyaW5nU3RhcnREYXRlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUmVidWZmZXJpbmcoYnVmZmVyaW5nRHVyYXRpb24pO1xuXG4gICAgICAgIHRoaXMudGltZWxpbmU/LnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0b3ApO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgYnVmZmVyZWQgZm9yICcgKyBidWZmZXJpbmdEdXJhdGlvbiArICdtcycsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25TZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBzZWVrZWQgZnJvbSAnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUoc3RhcnQpICsgJyB0byAnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUoZW5kKSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLnRpbWVsaW5lPy5wdXNoRXZlbnRQb3NpdGlvblN0YXJ0RW5kKFNlc3Npb25UcmFja2VyRXZlbnRzLlNlZWssIHN0YXJ0LCBlbmQpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRlci5hZGRXYXRjaGluZ1JhbmdlKHRoaXMuc3RhcnRQb3NpdGlvbiwgc3RhcnQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IGVuZDtcbiAgICAgICAgdGhpcy5zZWVraW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXN0U2Vla0RhdGUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZyAmJiAhdGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUGxheWJhY2tEdXJhdGlvbihjdXJyZW50RGF0ZSAtIHRoaXMucGxheWluZ1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMub25CdWZmZXJpbmdFbmQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFdhdGNoaW5nUmFuZ2UodGhpcy5zdGFydFBvc2l0aW9uLCB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLnNldFNlc3Npb25EdXJhdGlvbihjdXJyZW50RGF0ZSAtIHRoaXMucmVkaXJlY3Rpb25TdGFydERhdGUpXG4gICAgICAgICAgICAgICAgLmFkZFRpbWVTcGVudFBlckxheWVyKHRoaXMuYml0cmF0ZSwgY3VycmVudERhdGUgLSB0aGlzLmxhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uU3RhcnRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5tZXRyaWNzID0gdGhpcy5idWlsZGVyLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25LZWVwYWxpdmVTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBidWlsZGVyID0gdGhpcy5idWlsZGVyLmNsb25lKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWluZyAmJiAhdGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYWRkUGxheWJhY2tEdXJhdGlvbihjdXJyZW50RGF0ZSAtIHRoaXMucGxheWluZ1N0YXJ0RGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGFydGVkICYmIHRoaXMuYnVmZmVyaW5nU3RhcnREYXRlID4gMCkge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyaW5nRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5idWZmZXJpbmdTdGFydERhdGU7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWVraW5nKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlci5hZGRSZWJ1ZmZlcmluZyhidWZmZXJpbmdEdXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkU3RhbGwoYnVmZmVyaW5nRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgYnVpbGRlci5hZGRXYXRjaGluZ1JhbmdlKHRoaXMuc3RhcnRQb3NpdGlvbiwgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVpbGRlci5zZXRTZXNzaW9uRHVyYXRpb24oY3VycmVudERhdGUgLSB0aGlzLnJlZGlyZWN0aW9uU3RhcnREYXRlKVxuICAgICAgICAgICAgLmFkZFRpbWVTcGVudFBlckxheWVyKHRoaXMuYml0cmF0ZSwgY3VycmVudERhdGUgLSB0aGlzLmxhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByZVN0YXJ0dXBUaW1lU3RyaW5nID0gdGhpcy5oYW5kbGVyLmdldEN1c3RvbVBhcmFtZXRlcnMoKVsncHJlX3N0YXJ0dXBfdGltZSddO1xuICAgICAgICBsZXQgcHJlU3RhcnR1cFRpbWUgPSAwO1xuICAgICAgICBpZiAocHJlU3RhcnR1cFRpbWVTdHJpbmcgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ocHJlU3RhcnR1cFRpbWVTdHJpbmcpKSB7XG4gICAgICAgICAgICBwcmVTdGFydHVwVGltZSA9IHBhcnNlSW50KHByZVN0YXJ0dXBUaW1lU3RyaW5nLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVpbGRlci5zZXRQcmVTdGFydHVwVGltZShwcmVTdGFydHVwVGltZSk7XG5cbiAgICAgICAgc2Vzc2lvblJlcG9ydC5tZXRyaWNzID0gYnVpbGRlci5idWlsZCgpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uRW5kU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0U2Vzc2lvbkR1cmF0aW9uKGN1cnJlbnREYXRlIC0gdGhpcy5yZWRpcmVjdGlvblN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJlU3RhcnR1cFRpbWVTdHJpbmcgPSB0aGlzLmhhbmRsZXIuZ2V0Q3VzdG9tUGFyYW1ldGVycygpWydwcmVfc3RhcnR1cF90aW1lJ107XG4gICAgICAgIGxldCBwcmVTdGFydHVwVGltZSA9IDA7XG4gICAgICAgIGlmIChwcmVTdGFydHVwVGltZVN0cmluZyAhPT0gdW5kZWZpbmVkICYmICFpc05hTihwcmVTdGFydHVwVGltZVN0cmluZykpIHtcbiAgICAgICAgICAgIHByZVN0YXJ0dXBUaW1lID0gcGFyc2VJbnQocHJlU3RhcnR1cFRpbWVTdHJpbmcsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0UHJlU3RhcnR1cFRpbWUocHJlU3RhcnR1cFRpbWUpO1xuXG4gICAgICAgIHNlc3Npb25SZXBvcnQubWV0cmljcyA9IHRoaXMuYnVpbGRlci5idWlsZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXJBZGFwdGVyIGZyb20gJy4vUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvT2JqZWN0VXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljUGxheWVyQWRhcHRlciBleHRlbmRzIFBsYXllckFkYXB0ZXIge1xuICAgIHBsYXllcjtcbiAgICBsaXN0ZW5lcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXRQbGF5ZXJOYW1lKCk7XG4gICAgfVxuXG4gICAgZ2V0VmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmdldFZlcnNpb24oKTtcbiAgICB9XG5cbiAgICBnZXRPU05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXRPU05hbWUoKTtcbiAgICB9XG5cbiAgICBnZXRPU1ZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXREZXZpY2VWZXJzaW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmdldERldmljZVR5cGUoKTtcbiAgICB9XG5cbiAgICBnZXRCaXRyYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q3VycmVudEJpdHJhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmdldEN1cnJlbnRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGdldER1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0VG90YWxEdXJhdGlvbigpO1xuICAgIH1cblxuICAgIGdldENhcGFiaWxpdGllcygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsYXllclsnZ2V0Q2FwYWJpbGl0aWVzJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaGFzTWV0aG9kcyhwbGF5ZXIsIFtcbiAgICAgICAgICAgICdnZXRQbGF5ZXJOYW1lJywgJ2dldFZlcnNpb24nLCAnZ2V0T1NOYW1lJywgJ2dldERldmljZVZlcnNpb24nLCAnZ2V0RGV2aWNlVHlwZScsXG4gICAgICAgICAgICAnZ2V0Q3VycmVudFBvc2l0aW9uJywgJ2dldFRvdGFsRHVyYXRpb24nLCAnZ2V0Q3VycmVudEJpdHJhdGUnXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChHZW5lcmljUGxheWVyQWRhcHRlci5jaGVja1BsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllckFkYXB0ZXIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZXRhY2hQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJBZGFwdGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtHZW5lcmljUGxheWVyQXBpJztcblxuLyoqIEBtb2R1bGUgQW5hbHl0aWNzICovXG5cbi8qKlxuICogR2VuZXJpYyBwbGF5ZXIgQVBJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNQbGF5ZXJBcGkge1xuICAgIHBsYXllckFkYXB0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGxheWVyIG5hbWVcbiAgICAgKi9cbiAgICBnZXRQbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwbGF5ZXIgdmVyc2lvblxuICAgICAqL1xuICAgIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRPU05hbWUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXREZXZpY2VWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdG90YWwgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBOb3RlOiByZXR1cm4gMCBpZiB0aGUgY3VycmVudCBtZWRpYSBpcyBhIExJVkVcbiAgICAgKi9cbiAgICBnZXRUb3RhbER1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgYml0cmF0ZSBpbiBrYnBzXG4gICAgICovXG4gICAgZ2V0Q3VycmVudEJpdHJhdGUoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBwbGF5ZXIgY2FwYWJpbGl0aWVzIGZvciBTbWFydExpYlxuICAgICAqXG4gICAgICogQHJldHVybiBNYXAgd2l0aCBjYXBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICBnZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgdGhhdCB0aGUgc2Vzc2lvbiBoYXMgc3RhcnRlZFxuICAgICAqXG4gICAgICogVG8gY2FsbCB3aGVuIHRoZSBmaXJzdCBpbWFnZSBpcyBkaXNwbGF5ZWRcbiAgICAgKi9cbiAgICBub3RpZnlGaXJzdEltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWRhcHRlci5ub3RpZnlGaXJzdEltYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gbm90aWZ5Rmlyc3RJbWFnZS4gVGhpcyBldmVudCBpcyBjYWxsZWQgd2hlbiB0aGUgZmlyc3QgaW1hZ2UgaXMgZGlzcGxheWVkLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZ5IHRoYXQgdGhlIHBsYXllciBoYXMgYmVlbiBwYXVzZWRcbiAgICAgKi9cbiAgICBub3RpZnlQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5UGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBub3RpZnlQYXVzZS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5vdGlmeSB0aGF0IHRoZSBwbGF5ZXIgaGFzIGJlZW4gcmVzdW1lZFxuICAgICAqL1xuICAgIG5vdGlmeVJlc3VtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5UmVzdW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gbm90aWZ5UmVzdW1lLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZ5IHRoYXQgdGhlIHBsYXllciBkaWQgY2hhbmdlIHRoZSBjdXJyZW50IGxheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYml0cmF0ZSBiaXRyYXRlIGluIGticHNcbiAgICAgKi9cbiAgICBub3RpZnlMYXllclN3aXRjaChiaXRyYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyLm5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG5vdGlmeUxheWVyU3dpdGNoLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZ5IHRoYXQgdGhlIHBsYXllciBkaWQgc3RhcnQgc3RhbGxpbmcvYnVmZmVyaW5nXG4gICAgICovXG4gICAgbm90aWZ5U3RhbGxTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5U3RhbGxTdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG5vdGlmeVN0YWxsU3RhcnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgdGhhdCB0aGUgcGxheWVyIGRpZCBlbmQgc3RhbGxpbmcvYnVmZmVyaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaXNQbGF5aW5nIFRoZSBwbGF5ZXIgaXMgcGxheWluZyB3aGVuIHRoZSBidWZmZXJpbmcgZW5kcyAoaS5lIHVzZXIgZGlkIG5vdCBwYXVzZSB0aGUgcGxheWJhY2sgZHVyaW5nIGJ1ZmZlcmluZylcbiAgICAgKi9cbiAgICBub3RpZnlTdGFsbEVuZChpc1BsYXlpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5U3RhbGxFbmQoaXNQbGF5aW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBub3RpZnlTdGFsbEVuZC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5vdGlmeSB0aGF0IHRoZSBwbGF5ZXIgZGlkIHNlZWtcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCBwb3NpdGlvbiBiZWZvcmUgc2VlayBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcGFyYW0gZW5kIHBvc2l0aW9uIHdoZXJlIHRoZSBwbGF5ZXIgZGlkIHNlZWsgaW4gbWlsbGlzZWNvbmRzXG4gICAgICovXG4gICAgbm90aWZ5U2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyLm5vdGlmeVNlZWsoc3RhcnQsIGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gbm90aWZ5U2Vlay4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGxheWVyIGVycm9yIGNvZGUgYXMgYSBzdHJpbmcuIFRoaXMgdmFsdWUgd2lsbCBiZSBzZW50IHRvIHRoZSBhbmFseXRpY3Mgc29sdXRpb24uXG4gICAgICpcbiAgICAgKiBUbyBjYWxsIHdoZW4gdGhlIHBsYXllciBpcyB0cmlnZ2VyaW5nIGEgbm9uLXJlY292ZXJhYmxlIGVycm9yXG4gICAgICogQHBhcmFtIHBsYXllckVycm9yQ29kZSBQbGF5ZXIgZXJyb3IgY29kZVxuICAgICAqL1xuICAgIHNldFBsYXllckVycm9yQ29kZShwbGF5ZXJFcnJvckNvZGUpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIuc2V0UGxheWVyRXJyb3JDb2RlKHBsYXllckVycm9yQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gc2V0UGxheWVyRXJyb3JDb2RlLiBUaGlzIGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHN0b3BTdHJlYW1pbmdTZXNzaW9uIHdoZW4gdGhlIHBsYXllciBlcnJvciBjb2RlIGFzIGEgc3RyaW5nLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTG9nZ2VyTWFuYWdlciB9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IEFwcFN0YXRlTWFuYWdlciBmcm9tICcuLi8uLi9zZXJ2aWNlL0FwcFN0YXRlTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtQbGF5ZXJBZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQWRhcHRlciB7XG4gICAgaGFuZGxlcjtcblxuICAgIHdlYk9TVmVyc2lvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdlYk9TICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2ViT1MuZGV2aWNlSW5mbyhpbmZvID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndlYk9TVmVyc2lvbiA9IGluZm8uc2RrVmVyc2lvbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IFNtYXJ0TGliXG4gICAgICogQHJldHVybnMge3N0cmluZ30gUGxheWVyIG5hbWVcbiAgICAgKi9cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IFNtYXJ0TGliXG4gICAgICogQHJldHVybnMge3N0cmluZ30gUGxheWVyIHZlcnNpb25cbiAgICAgKi9cbiAgICBnZXRWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0T1NOYW1lKCkge1xuICAgICAgICByZXR1cm4gQXBwU3RhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkub3NOYW1lO1xuICAgIH1cblxuICAgIGdldE9TVmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIEFwcFN0YXRlTWFuYWdlci5nZXRJbnN0YW5jZSgpLm9zVmVyc2lvbjtcbiAgICB9XG5cbiAgICBnZXREZXZpY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gQXBwU3RhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGV2aWNlVHlwZTtcbiAgICB9XG5cbiAgICBnZXRCaXRyYXRlKCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldER1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRWb2x1bWUoKSB7XG4gICAgICAgIHJldHVybiAxLjA7XG4gICAgfVxuXG4gICAgZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2FkVHJhY2tpbmcnOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSBTbWFydExpYiB3aGVuIHRoZSBzZXNzaW9uIGlzIHN0YXJ0aW5nXG4gICAgICovXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IFNtYXJ0TGliIHdoZW4gdGhlIHNlc3Npb24gaXMgc3RvcHBlZFxuICAgICAqL1xuICAgIHJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cygpIHtcblxuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIHNlc3Npb25SZXBvcnQucGxheWVyTmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgICAgICBzZXNzaW9uUmVwb3J0LnBsYXllclZlcnNpb24gPSB0aGlzLmdldFZlcnNpb24oKTtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5vc05hbWUgPSB0aGlzLmdldE9TTmFtZSgpO1xuICAgICAgICBzZXNzaW9uUmVwb3J0Lm9zVmVyc2lvbiA9IHRoaXMuZ2V0T1NWZXJzaW9uKCk7XG4gICAgICAgIHNlc3Npb25SZXBvcnQuZGV2aWNlVHlwZSA9IHRoaXMuZ2V0RGV2aWNlVHlwZSgpO1xuICAgIH1cblxuICAgIG9uRW5kU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIHNlc3Npb25SZXBvcnQucGxheWVyTmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgICAgICBzZXNzaW9uUmVwb3J0LnBsYXllclZlcnNpb24gPSB0aGlzLmdldFZlcnNpb24oKTtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5vc05hbWUgPSB0aGlzLmdldE9TTmFtZSgpO1xuICAgICAgICBzZXNzaW9uUmVwb3J0Lm9zVmVyc2lvbiA9IHRoaXMuZ2V0T1NWZXJzaW9uKCk7XG4gICAgICAgIHNlc3Npb25SZXBvcnQuZGV2aWNlVHlwZSA9IHRoaXMuZ2V0RGV2aWNlVHlwZSgpO1xuICAgIH1cblxuICAgIG5vdGlmeUxvYWRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeUxvYWRpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIgc2hvdWxkIGJlIGNhbGxlZCBwcmlvciB0byBvblNlc3Npb25TdGFydCBldmVudC4gJyArXG4gICAgICAgICAgICAgICAgJ1RoaXMgZXZlbnQgaXMgY2FsbGVkIHdoZW4gdGhlIHBsYXllciBzdGFydHMgYnVmZmVyaW5nIHRoZSBmaXJzdCB0aW1lLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgKi9cbiAgICBub3RpZnlGaXJzdEltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlGaXJzdEltYWdlKHRoaXMuZ2V0Qml0cmF0ZSgpLCB0aGlzLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmdldFVSTCguLi4pIG9yIHNlc3Npb24uZ2V0UXVlcnkoKS9zZXNzaW9uLnN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG9uU2Vzc2lvblN0YXJ0IGV2ZW50LiBUaGlzIGV2ZW50IGlzIGNhbGxlZCB3aGVuIHRoZSBmaXJzdCBpbWFnZSBpcyBkaXNwbGF5ZWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5UGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvblNlc3Npb25QYXVzZSBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeVJlc3VtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5UmVzdW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uZ2V0VVJMKC4uLikgb3Igc2Vzc2lvbi5nZXRRdWVyeSgpL3Nlc3Npb24uc3RhcnRTdHJlYW1pbmdTZXNzaW9uKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gb25TZXNzaW9uUmVzdW1lIGV2ZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5TGF5ZXJTd2l0Y2goYml0cmF0ZSA9IHRoaXMuZ2V0Qml0cmF0ZSgpKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmdldFVSTCguLi4pIG9yIHNlc3Npb24uZ2V0UXVlcnkoKS9zZXNzaW9uLnN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG9uTGF5ZXJTd2l0Y2ggZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlTZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5U2VlayhzdGFydCwgZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvblNlZWsgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlTdGFsbFN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlCdWZmZXJpbmdTdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmdldFVSTCguLi4pIG9yIHNlc3Npb24uZ2V0UXVlcnkoKS9zZXNzaW9uLnN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG9uU3RhbGxTdGFydCBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeVN0YWxsRW5kKGlzUGxheWluZyA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5QnVmZmVyaW5nRW5kKGlzUGxheWluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uZ2V0VVJMKC4uLikgb3Igc2Vzc2lvbi5nZXRRdWVyeSgpL3Nlc3Npb24uc3RhcnRTdHJlYW1pbmdTZXNzaW9uKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gb25TdGFsbEVuZCBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUNsb3NlKGJyb2FkcGVha1N0YXR1c0NvZGUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5Q2xvc2UoYnJvYWRwZWFrU3RhdHVzQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TZXNzaW9uU3RhcnQgZXZlbnQuICcgK1xuICAgICAgICAgICAgICAgICdUaGlzIGV2ZW50IGlzIGNhbGxlZCB3aGVuIHRoZSBwbGF5ZXIgaXMgY2xvc2luZy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeVZvbHVtZUNoYW5nZWQodm9sdW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeVZvbHVtZUNoYW5nZWQodm9sdW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvblZvbHVtZUNoYW5nZWQgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlQbGF5ZXJFcnJvcihicm9hZHBlYWtTdGF0dXNDb2RlLCBwbGF5ZXJFcnJvckNvZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5UGxheWVyRXJyb3IoYnJvYWRwZWFrU3RhdHVzQ29kZSwgcGxheWVyRXJyb3JDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvblBsYXllckVycm9yIGV2ZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzdGF0aWMgY2hlY2tQbGF5ZXIgbm90IGltcGxlbWVudGVkIGZvciB0aGlzIGFkYXB0ZXIuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhdHRhY2hQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IGF0dGFjaFBsYXllciBub3QgaW1wbGVtZW50ZWQgZm9yIHRoaXMgYWRhcHRlci4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGFjaFBsYXllcigpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBkZXRhY2hQbGF5ZXIgbm90IGltcGxlbWVudGVkIGZvciB0aGlzIGFkYXB0ZXIuJyk7XG4gICAgfVxuXG4gICAgYXR0YWNoU2Vzc2lvbihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgZGV0YWNoU2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHNldFN0YXR1c0NvZGUoc3RhdHVzQ29kZSkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UGxheWVyRXJyb3JDb2RlKHBsYXllckVycm9yQ29kZSkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnBsYXllckVycm9yQ29kZSA9IFN0cmluZyhwbGF5ZXJFcnJvckNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q3VzdG9tUGFyYW1ldGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5zdHJlYW1pbmdTZXNzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnU2V0IGN1c3RvbSBwYXJhbWV0ZXIgb24gcGxheWVyIGFkYXB0ZXIgaXMgb25seSBhdmFpbGFibGUgd2hlbiB1c2luZyBTdHJlYW1pbmdTZXNzaW9uIEFQSS4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuc3RyZWFtaW5nU2Vzc2lvbi5zZXRDdXN0b21QYXJhbWV0ZXIobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa1BsYXllckV2ZW50TGlzdGVuZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJFdmVudExpc3RlbmVyIHtcbiAgICBzdGF0aWMgcGxheWVyQWRhcHRlcnMgPSBbXTtcblxuICAgIHN0YXRpYyBhZGRQbGF5ZXJBZGFwdGVyKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnMuaW5kZXhPZihhZGFwdGVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnMucHVzaChhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVQbGF5ZXJBZGFwdGVyKGFkYXB0ZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycy5pbmRleE9mKGFkYXB0ZXIpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNTdGFydGVkKCkge1xuICAgICAgICAvKiBpZiAoUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQgJiYgUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlci5oYW5kbGVyLm1ldHJpY3NNYW5hZ2VyLnN0YXJ0ZWQ7XG4gICAgICAgIH0qL1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWRhcHRlcnNbYWRhcHRlcnMubGVuZ3RoIC0gMV0uaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGFkYXB0ZXJzW2FkYXB0ZXJzLmxlbmd0aCAtIDFdLmhhbmRsZXIubWV0cmljc01hbmFnZXIuc3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNQbGF5aW5nKCkge1xuICAgICAgICAvKiBpZiAoUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQgJiYgUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlci5oYW5kbGVyLm1ldHJpY3NNYW5hZ2VyLnBsYXlpbmc7XG4gICAgICAgIH0qL1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWRhcHRlcnNbYWRhcHRlcnMubGVuZ3RoIC0gMV0uaGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIGFkYXB0ZXJzW2FkYXB0ZXJzLmxlbmd0aCAtIDFdLmhhbmRsZXIubWV0cmljc01hbmFnZXIucGxheWluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNCdWZmZXJpbmcoKSB7XG4gICAgICAgIC8qIGlmIChQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCAmJiBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXIuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyLmhhbmRsZXIubWV0cmljc01hbmFnZXIuYnVmZmVyaW5nO1xuICAgICAgICB9Ki9cbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFkYXB0ZXJzW2FkYXB0ZXJzLmxlbmd0aCAtIDFdLmhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiBhZGFwdGVyc1thZGFwdGVycy5sZW5ndGggLSAxXS5oYW5kbGVyLm1ldHJpY3NNYW5hZ2VyLmJ1ZmZlcmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25TZXNzaW9uU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXJzID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycztcbiAgICAgICAgaWYgKGFkYXB0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkYXB0ZXJzLmZvckVhY2goYWRhcHRlciA9PiBhZGFwdGVyLm5vdGlmeUZpcnN0SW1hZ2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IFNtYXJ0TGliLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TZXNzaW9uU3RhcnQgZXZlbnQuIElmIHlvdSBkb25cXCd0IGF0dGFjaCBhbnkgcGxheWVyLCAnICtcbiAgICAgICAgICAgICAgICAncGxlYXNlIHJlbW92ZSB0aGlzIGNhbGwsIFNtYXJ0TGliIGlzIG5vdyBoYW5kbGluZyBpdCBhdXRvbWF0aWNhbGx5LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG9uU2Vzc2lvblBhdXNlKCkge1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGFwdGVycy5mb3JFYWNoKGFkYXB0ZXIgPT4gYWRhcHRlci5ub3RpZnlQYXVzZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogU21hcnRMaWIuYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlIGNhbGxlZCBwcmlvciB0byBvblNlc3Npb25QYXVzZSBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBvblNlc3Npb25SZXN1bWUoKSB7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXJzID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycztcbiAgICAgICAgaWYgKGFkYXB0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkYXB0ZXJzLmZvckVhY2goYWRhcHRlciA9PiBhZGFwdGVyLm5vdGlmeVJlc3VtZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogU21hcnRMaWIuYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlIGNhbGxlZCBwcmlvciB0byBvblNlc3Npb25SZXN1bWUgZXZlbnQuJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBvbkxheWVyU3dpdGNoKGJpdHJhdGUpIHtcbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRhcHRlcnMuZm9yRWFjaChhZGFwdGVyID0+IGFkYXB0ZXIubm90aWZ5TGF5ZXJTd2l0Y2goYml0cmF0ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBTbWFydExpYi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgY2FsbGVkIHByaW9yIHRvIG9uTGF5ZXJTd2l0Y2ggZXZlbnQuJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBvblNlZWsoc3RhcnQsIGVuZCkge1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGFwdGVycy5mb3JFYWNoKGFkYXB0ZXIgPT4gYWRhcHRlci5ub3RpZnlTZWVrKHN0YXJ0LCBlbmQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogU21hcnRMaWIuYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlIGNhbGxlZCBwcmlvciB0byBvblNlZWsgZXZlbnQuJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBvblN0YWxsU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXJzID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycztcbiAgICAgICAgaWYgKGFkYXB0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkYXB0ZXJzLmZvckVhY2goYWRhcHRlciA9PiBhZGFwdGVyLm5vdGlmeVN0YWxsU3RhcnQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IFNtYXJ0TGliLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TdGFsbFN0YXJ0IGV2ZW50LicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25TdGFsbEVuZChpc1BsYXlpbmcpIHtcbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRhcHRlcnMuZm9yRWFjaChhZGFwdGVyID0+IGFkYXB0ZXIubm90aWZ5U3RhbGxFbmQoaXNQbGF5aW5nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IFNtYXJ0TGliLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TdGFsbEVuZCBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IExvZ2dlck1hbmFnZXIgfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBHZW5lcmljUGxheWVyQWRhcHRlciBmcm9tICcuL0dlbmVyaWNQbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBQbGF5ZXJFdmVudExpc3RlbmVyIGZyb20gJy4vUGxheWVyRXZlbnRMaXN0ZW5lcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtQbGF5ZXJNZ3InO1xuXG5jbGFzcyBBYnN0cmFjdFBsYXllck1hbmFnZXJIYW5kbGVyIHtcbiAgICBzdGF0aWMgbG9hZFBsYXllckFkYXB0ZXJzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiBTaW5nbGV0b25cbiAgICAgKi9cbiAgICBzdGF0aWMgI2luc3RhbmNlO1xuXG4gICAgc21hcnRMaWI7XG5cbiAgICAjcGxheWVyTWFuYWdlckhhbmRsZXIgPSBBYnN0cmFjdFBsYXllck1hbmFnZXJIYW5kbGVyO1xuXG4gICAgI3BsYXllckFkYXB0ZXJzID0ge307XG5cbiAgICAjcGxheWVyQWRhcHRlcjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFQbGF5ZXJNYW5hZ2VyLiNpbnN0YW5jZSkge1xuICAgICAgICAgICAgUGxheWVyTWFuYWdlci4jaW5zdGFuY2UgPSBuZXcgUGxheWVyTWFuYWdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFBsYXllck1hbmFnZXIuI2luc3RhbmNlO1xuICAgIH1cblxuICAgIGluaXQocGxheWVyTWFuYWdlckhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllck1hbmFnZXJIYW5kbGVyID09PSBBYnN0cmFjdFBsYXllck1hbmFnZXJIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXJNYW5hZ2VySGFuZGxlciA9IHBsYXllck1hbmFnZXJIYW5kbGVyO1xuXG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXJBZGFwdGVycyA9IHRoaXMuI3BsYXllck1hbmFnZXJIYW5kbGVyLmxvYWRQbGF5ZXJBZGFwdGVycygpO1xuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnQ29tcGF0aWJsZSBwbGF5ZXJzOiAnICsgT2JqZWN0LmtleXModGhpcy4jcGxheWVyQWRhcHRlcnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0UGxheWVyQWRhcHRlcih1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGF0dGFjaEluc3RhbmNlKHNtYXJ0TGliKSB7XG4gICAgICAgIHRoaXMuc21hcnRMaWIgPSBzbWFydExpYjtcbiAgICB9XG5cbiAgICBnZXRBZGFwdGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllckFkYXB0ZXJzO1xuICAgIH1cblxuICAgIHNldFBsYXllckFkYXB0ZXIocGxheWVyQWRhcHRlcikge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuI3BsYXllckFkYXB0ZXIgIT09IHBsYXllckFkYXB0ZXIpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdQbGF5ZXIgJyArIHRoaXMuI3BsYXllckFkYXB0ZXIuZ2V0TmFtZSgpICsgJyBkZXRhY2hlZCcpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyQWRhcHRlci5kZXRhY2hQbGF5ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXJBZGFwdGVyICE9PSBwbGF5ZXJBZGFwdGVyICYmIHBsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBsYXllckFkYXB0ZXIgaW5zdGFuY2VvZiBHZW5lcmljUGxheWVyQWRhcHRlcikge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBdHRhY2hpbmcgZ2VuZXJpYyBwbGF5ZXIgdG8gU21hcnRMaWIgc2luZ2xldG9uJyk7XG5cbiAgICAgICAgICAgICAgICBQbGF5ZXJFdmVudExpc3RlbmVyLmFkZFBsYXllckFkYXB0ZXIocGxheWVyQWRhcHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy4jcGxheWVyQWRhcHRlciAhPT0gcGxheWVyQWRhcHRlciAmJiBwbGF5ZXJBZGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNwbGF5ZXJBZGFwdGVyIGluc3RhbmNlb2YgR2VuZXJpY1BsYXllckFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRGV0YWNoaW5nIGdlbmVyaWMgcGxheWVyIGZyb20gU21hcnRMaWIgc2luZ2xldG9uJyk7XG5cbiAgICAgICAgICAgICAgICBQbGF5ZXJFdmVudExpc3RlbmVyLnJlbW92ZVBsYXllckFkYXB0ZXIodGhpcy4jcGxheWVyQWRhcHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4jcGxheWVyQWRhcHRlciAhPT0gcGxheWVyQWRhcHRlcikge1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyQWRhcHRlciA9IHBsYXllckFkYXB0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnUGxheWVyICcgKyB0aGlzLiNwbGF5ZXJBZGFwdGVyLmdldE5hbWUoKSArICcgYWxyZWFkeSBhdHRhY2hlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1BsYXllciAnICsgcGxheWVyQWRhcHRlci5nZXROYW1lKCkgKyAnIGF0dGFjaGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyQWRhcHRlcjtcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi91dGlscy9NYXRoVXRpbHMnO1xuaW1wb3J0IFNtYXJ0TGliIGZyb20gJy4uL1NtYXJ0TGliJztcbmltcG9ydCBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlciBmcm9tICcuLi9yZXF1ZXN0L0FuYWx5dGljc1JlcXVlc3RNYW5hZ2VyJztcbmltcG9ydCB7QnJvYWRwZWFrQ0ROS2VlcGFsaXZlTWFuYWdlciwgS2VlcEFsaXZlTWFuYWdlcn0gZnJvbSAnLi4vbmV0d29yay9LZWVwQWxpdmVNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0NhY2hlTWdyJztcblxuLyoqXG4gKiBDYWNoZSBoYW5kbGVyIHdyYXBwZXJcbiAqL1xuY2xhc3MgQWJzdHJhY3RDYWNoZUhhbmRsZXIge1xuICAgIHNldChrZXksIHZhbHVlKSB7XG5cbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZGVsZXRlKGtleSkge1xuXG4gICAgfVxuXG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWNoZSBzdG9yYWdlIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogTWF4IGNhY2hlIHN0b3JhZ2UgZHVyYXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgQ0FDSEVfRFVSQVRJT04gPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMjsgLy8gMiBkYXlzXG5cbiAgICAvKipcbiAgICAgKiBNYXggbnVtYmVyIG9mIGl0ZW0gaW4gY2FjaGVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBDQUNIRV9MSU1JVCA9IDIwO1xuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uXG4gICAgICovXG4gICAgc3RhdGljICNpbnN0YW5jZTtcblxuICAgIHNtYXJ0TGliO1xuXG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgY2FjaGUgaGFuZGxlclxuICAgICAqL1xuICAgIGNhY2hlSGFuZGxlcjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFDYWNoZU1hbmFnZXIuI2luc3RhbmNlKSB7XG4gICAgICAgICAgICBDYWNoZU1hbmFnZXIuI2luc3RhbmNlID0gbmV3IENhY2hlTWFuYWdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENhY2hlTWFuYWdlci4jaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGVIYW5kbGVyID0gbmV3IEFic3RyYWN0Q2FjaGVIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYWNoZSBtYW5hZ2VyXG4gICAgICogSXQgaGFzIHRvIGNhbGxlZCBieSB0aGUgd3JhcHBlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlSGFuZGxlciBwbGF0Zm9ybSBzcGVjaWZpYyBjYWNoZSBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdChjYWNoZUhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIgPSBjYWNoZUhhbmRsZXI7XG4gICAgfVxuXG4gICAgYXR0YWNoSW5zdGFuY2Uoc21hcnRMaWIpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0luaXQgY2FjaGUgbWFuYWdlci4uLicpO1xuICAgICAgICB0aGlzLnNtYXJ0TGliID0gc21hcnRMaWI7XG5cbiAgICAgICAgLy8gUmVzZXQgYWxsIGZsYWdzXG4gICAgICAgIHRoaXMuZ2V0Q2FjaGVEYXRhKCdyZXBvcnQtJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGNhY2hlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS52YWx1ZS5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoY2FjaGUua2V5LCBjYWNoZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhY2hlIHZhbHVlIHBhcnNlZFxuICAgICAqIEBwYXJhbSBrZXkga2V5IGluIGNhY2hlXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZHwqfSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jYWNoZUhhbmRsZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUGFyc2UgcmVwb3J0XG4gICAgICAgICAgICBpZiAoIWRhdGEuc3RhcnRzV2l0aCgneycpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYmFzZTY0XG4gICAgICAgICAgICAgICAgZGF0YSA9IE1hdGhVdGlscy5iYXNlNjRUb1N0cmluZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHJlcG9ydCBpZiBpdCBjYW5ub3QgYmUgcmVhZFxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0Vycm9yIHdoaWxlIHBhcnNpbmcgJyArIGtleSArICcgKCcgKyBlLm1lc3NhZ2UgKyAnKScpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuZGVsZXRlKGtleSk7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBhbnkgdmFsdWUgdG8gdGhlIGNhY2hlXG4gICAgICogVGhlIHZhbHVlIGlzIHN0cmluZ2lmaWVkIGFuZCBlbmNvZGVkIHdpdGggYmFzZTY0XG4gICAgICogQHBhcmFtIGtleSBjYWNoZSBpZFxuICAgICAqIEBwYXJhbSB2YWx1ZSBjYWNoZSB2YWx1ZVxuICAgICAqL1xuICAgIHN0b3JlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuc2V0KGtleSwgTWF0aFV0aWxzLnN0cmluZ1RvQmFzZTY0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xuICAgICAgICAvLyB0aGlzLmNhY2hlSGFuZGxlci5zZXQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpOyAvLyB3aXRob3V0IGJhc2U2NFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhIGZpZWxkIGluIGNhY2hlXG4gICAgICogQHBhcmFtIGtleSBrZXkgaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gbmFtZSBmaWVsZCBuYW1lXG4gICAgICogQHBhcmFtIHZhbHVlIGZpZWxkIHZhbHVlXG4gICAgICovXG4gICAgdXBkYXRlKGtleSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGluZyAnICsga2V5ICsgJywgc2V0ICcgKyBuYW1lICsgJyB0byAnICsgdmFsdWUpO1xuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JlKGtleSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBhIGhhbmRsZXIgcmVwb3J0IGluIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSBhZGRyZXNzIGFuYWx5dGljcyBmdWxsIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gcmVwb3J0IFNlc3Npb25SZXBvcnQgaW4gSlNPTlxuICAgICAqIEBwYXJhbSBjbGVhbiBjbGVhbiBjYWNoZSBhZnRlciBzdG9yaW5nIHRoZSByZXBvcnRcbiAgICAgKiBAcGFyYW0gZGF0ZSBkYXRlIG9mIHRoZSBzZXNzaW9uIHJlcG9ydFxuICAgICAqIEBwYXJhbSBzZW5kaW5nIGRlZmF1bHQgc2VuZGluZyBmbGFnXG4gICAgICovXG4gICAgc3RvcmVTZXNzaW9uUmVwb3J0KGFkZHJlc3MsIHJlcG9ydCwgY2xlYW4gPSB0cnVlLCBkYXRlID0gRGF0ZS5ub3coKSwgc2VuZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJ3JlcG9ydC0nICsgTWF0aFV0aWxzLnJhbmRvbUludEZyb21JbnRlcnZhbCgxMDAwMDAwLCA5OTk5OTk5KSArICcnICsgZGF0ZTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU3RvcmluZyAnICsgaWQgKyAnIGluIGNhY2hlLi4uJyk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLnNtYXJ0TGliLmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICBzZW5kaW5nOiBzZW5kaW5nLFxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgIHJlcG9ydDogcmVwb3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdG9yZShpZCwgZGF0YSk7XG5cbiAgICAgICAgLy8gQ2xlYW4gY2FjaGUgd2hlbiBzdG9yaW5nIGEgbmV3IHJlcG9ydCAoZW5hYmxlZCBieSBkZWZhdWx0KVxuICAgICAgICBpZiAoY2xlYW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgc2Vzc2lvbiByZXBvcnQgYnkgc2Vzc2lvbiByZXBvcnQgaWRcbiAgICAgKiBAcGFyYW0gaWQgc2Vzc2lvbiByZXBvcnQgaWRcbiAgICAgKi9cbiAgICBkZWxldGVTZXNzaW9uUmVwb3J0KGlkKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdEZWxldGluZyAnICsgaWQgKyAnIGZyb20gY2FjaGUuLi4nKTtcblxuICAgICAgICB0aGlzLmNhY2hlSGFuZGxlci5kZWxldGUoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlIGEga2VlcGFsaXZlIHJlcG9ydFxuICAgICAqIEBwYXJhbSBhZGRyZXNzIGJhc2UgYW5hbHl0aWNzIGFkZHJlc3NlcywgaGFuZGxlIG11bHRpcGxlIGVuZHBvaW50XG4gICAgICogQHBhcmFtIHJlcG9ydCBTZXNzaW9uUmVwb3J0IGluIEpTT05cbiAgICAgKi9cbiAgICBzdG9yZUtlZXBhbGl2ZVJlcG9ydChhZGRyZXNzLCByZXBvcnQpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1N0b3Jpbmcga2VlcGFsaXZlLScgKyByZXBvcnRbJ3Nlc3Npb25faWQnXSArICcgaW4gY2FjaGUuLi4nKTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMuc21hcnRMaWIuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICByZXBvcnQ6IHJlcG9ydFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RvcmUoJ2tlZXBhbGl2ZS0nICsgcmVwb3J0WydzZXNzaW9uX2lkJ10sIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBrZWVwYWxpdmUgcmVwb3J0IGJ5IHNlc3Npb24gcmVwb3J0IGlkXG4gICAgICogQHBhcmFtIHNlc3Npb25JZCBzZXNzaW9uIHJlcG9ydCBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUtlZXBhbGl2ZVJlcG9ydChzZXNzaW9uSWQpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ0RlbGV0aW5nIGtlZXBhbGl2ZS0nICsgc2Vzc2lvbklkICsgJyBmcm9tIGNhY2hlLi4uJyk7XG5cbiAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuZGVsZXRlKCdrZWVwYWxpdmUtJyArIHNlc3Npb25JZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhbGwgc2Vzc2lvbiByZXBvcnRzIGZyb20gdGhlIGNhY2hlXG4gICAgICogQHJldHVybnMgeyp9IEFsbCBzZXNzaW9uIHJlcG9ydHMsIEpTT04gcGFyc2VkLCBvcmRlcmVkIGJ5IHN0b3JlZCBkYXRlXG4gICAgICovXG4gICAgZ2V0Q2FjaGVEYXRhKGZpbHRlciA9ICcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlSGFuZGxlci5rZXlzKCkgLy8gR2V0IGFsbCBjYWNoZSBrZXlzXG4gICAgICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aChmaWx0ZXIpKSAvLyBGaWx0ZXIgb24gcmVwb3J0c1xuICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgYWxsIHJlcG9ydHNcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGNhY2hlIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwdXNoKCkge1xuICAgICAgICAvLyBDbGVhbiBjYWNoZSBiZWZvcmUgcHVzaGluZ1xuICAgICAgICB0aGlzLmNsZWFuKCk7XG5cbiAgICAgICAgLy8gU2VuZCByZXBvcnRzXG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdTZW5kaW5nIGNhY2hlIGNvbnRlbnQgaWYgYW55Li4uJyk7XG4gICAgICAgIHRoaXMuZ2V0Q2FjaGVEYXRhKCdyZXBvcnQtJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGNhY2hlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGUudmFsdWUuc2VuZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NlbmRpbmcgY2FjaGUgJyArIGNhY2hlLmtleSArICcgYWxyZWFkeSBpbiBwcm9ncmVzcy4uLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NlbmRpbmcgY2FjaGUgJyArIGNhY2hlLmtleSArICcuLi4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNlbmRpbmcgc3RhdHVzLCB0byBhdm9pZCBzZW5kaW5nIGEgcmVwb3J0IHR3aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS52YWx1ZS5zZW5kaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGRlbGF5IGZpZWxkLCBkZWx0YSBiZXR3ZWVuIGN1cnJlbnQgZGF0ZSBhbmQgZmlyc3Qgc2VudCBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS52YWx1ZS5yZXBvcnQuZGVsYXkgPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gY2FjaGUudmFsdWUuZGF0ZSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlKGNhY2hlLmtleSwgY2FjaGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBTbWFydExpYi5hbmFseXRpY3NNb2R1bGU/LkFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kU2Vzc2lvbkNhY2hlKGNhY2hlLnZhbHVlLmFkZHJlc3MsIGNhY2hlLnZhbHVlLnJlcG9ydCwgdGhpcy5zbWFydExpYi5nZXRQYXJhbWV0ZXJzKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oc2VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNlc3Npb25SZXBvcnQoY2FjaGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzZW5kaW5nIHN0YXR1cywgdG8gYXZvaWQgc2VuZGluZyBhIHJlcG9ydCB0d2ljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUudmFsdWUuc2VuZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoY2FjaGUua2V5LCBjYWNoZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGRhdGEgd2l0aCBhbiBleHBpcmVkIGRhdGVcbiAgICAgKiBAcGFyYW0gZmlsdGVyIGZpbHRlciBvbiBrZXlcbiAgICAgKiBAcmV0dXJucyB7Kn0gcmVtYWluaW5nIGRhdGEgb3JkZXIgYnkgbmV3ZXN0IGZpcnN0XG4gICAgICovXG4gICAgY2xlYW5FeHBpcmVkRGF0YShmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FjaGVEYXRhKGZpbHRlcilcbiAgICAgICAgICAgIC5tYXAoY2FjaGUgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENsZWFuIGV4cGlyZWQgcmVwb3J0c1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkICYmIChjYWNoZS52YWx1ZS5kYXRlID09PSB1bmRlZmluZWQgfHwgRGF0ZS5ub3coKSAtIGNhY2hlLnZhbHVlLmRhdGUgPiBDYWNoZU1hbmFnZXIuQ0FDSEVfRFVSQVRJT04pKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdDbGVhbmluZyAnICsgY2FjaGUua2V5ICsgJyAoY2FjaGUgZHVyYXRpb24gcmVhY2hlZCkuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuZGVsZXRlKGNhY2hlLmtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihjYWNoZSA9PiBjYWNoZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUuZGF0ZSAtIGEudmFsdWUuZGF0ZSk7IC8vIG5ld2VyIHNlc3Npb24gaGF2ZSBsb3cgaW5kZXhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbGwgZXhwaXJlZCBkYXRhXG4gICAgICovXG4gICAgY2xlYW4oKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdDbGVhbiBleHBpcmVkIGRhdGEgaWYgYW55Li4uJyk7XG5cbiAgICAgICAgLy8gQ2xlYW4gZXhwaXJlZCBrZWVwYWxpdmUgcmVwb3J0c1xuICAgICAgICBjb25zdCBrZWVwYWxpdmVSZXBvcnRzID0gdGhpcy5jbGVhbkV4cGlyZWREYXRhKCdrZWVwYWxpdmUtJyk7XG5cbiAgICAgICAgLy8gTWlncmF0ZSBlbmRlZCBrZWVwYWxpdmUgdG8gc2Vzc2lvbiByZXBvcnRcbiAgICAgICAgY29uc3QgYWN0aXZlU2Vzc2lvbklkcyA9IHRoaXMuc21hcnRMaWIuc2Vzc2lvbk1hbmFnZXIuc2Vzc2lvbnMubWFwKHNlc3Npb24gPT4gc2Vzc2lvbi5oYW5kbGVyPy5zZXNzaW9uUmVwb3J0Py5zZXNzaW9uSWQpO1xuICAgICAgICBrZWVwYWxpdmVSZXBvcnRzLmZvckVhY2goY2FjaGUgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGtlZXBhbGl2ZSByZXBvcnQgaXMgbm90IGFuIGFjdGl2ZSBzZXNzaW9uXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2Vzc2lvbklkcy5pbmRleE9mKGNhY2hlLnZhbHVlLnJlcG9ydFsnc2Vzc2lvbl9pZCddKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnTWlncmF0aW5nIGtlZXBhbGl2ZSAnICsgY2FjaGUudmFsdWUucmVwb3J0WydzZXNzaW9uX2lkJ10gKyAnIHRvIHNlc3Npb24uLi4nKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHRpbWVvdXQgZmxhZyB0byB0aGUgc2Vzc2lvbiByZXBvcnRcbiAgICAgICAgICAgICAgICBjYWNoZS52YWx1ZS5yZXBvcnQudGltZW91dCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBpdCB0byBzZXNzaW9uIHJlcG9ydFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FkZHJlc3NlcyA9IGNhY2hlLnZhbHVlLmFkZHJlc3Muc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NBZGRyZXNzZXMuZm9yRWFjaChhbmFseXRpY3NBZGRyZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuYWx5dGljc0FkZHJlc3MuaW5kZXhPZihBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5OT0NBQ0hFX1BSRUZJWCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLk5PQ0FDSEVfUFJFRklYICsgJyBvcHRpb24gdXNlZCwgbm8gbmVlZCB0byBzdG9yZSB0aGUgcmVwb3J0IGluIGNhY2hlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlU2Vzc2lvblJlcG9ydChBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmJ1aWxkQW5hbHl0aWNzQWRkcmVzcyhhbmFseXRpY3NBZGRyZXNzKSwgY2FjaGUudmFsdWUucmVwb3J0LCBmYWxzZSwgY2FjaGUudmFsdWUuZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBrZWVwYWxpdmUgcmVwb3J0XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuZGVsZXRlKGNhY2hlLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsZWFuIGV4cGlyZWQgc2Vzc2lvbiByZXBvcnRzIGFuZCBnZXQgcmVtYWluaW5nIHJlcG9ydHMgb3JkZXJlZCBieSByZWNlbnQgdG8gb2xkZXN0XG4gICAgICAgIGNvbnN0IHNlc3Npb25SZXBvcnRzID0gdGhpcy5jbGVhbkV4cGlyZWREYXRhKCdyZXBvcnQtJyk7XG5cbiAgICAgICAgLy8gQ2xlYW4gb2xkZXN0IHJlcG9ydHMgd2hlbiBsaW1pdCBpcyByZWFjaGVkXG4gICAgICAgIGlmIChzZXNzaW9uUmVwb3J0cy5sZW5ndGggPj0gQ2FjaGVNYW5hZ2VyLkNBQ0hFX0xJTUlUKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gQ2FjaGVNYW5hZ2VyLkNBQ0hFX0xJTUlUIDsgaSA8IHNlc3Npb25SZXBvcnRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU2Vzc2lvblJlcG9ydChzZXNzaW9uUmVwb3J0c1tpXS5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhbigpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBLZWVwYWxpdmUgbWFuYWdlciBpbiB1c2luZyB0aGlyZCBwYXJ0eSBDRE5cbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlS2VlcGFsaXZlTWFuYWdlciBleHRlbmRzIEtlZXBBbGl2ZU1hbmFnZXIge1xuICAgIGFuYWx5dGljc0FkZHJlc3M7XG5cbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyKSB7XG4gICAgICAgIHN1cGVyKGhhbmRsZXIpO1xuXG4gICAgICAgIHRoaXMuYW5hbHl0aWNzQWRkcmVzcyA9IHRoaXMuaGFuZGxlci5zbWFydExpYi5nZXRQYXJhbWV0ZXJzKCkuYW5hbHl0aWNzQWRkcmVzcztcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVXNpbmcgY2FjaGUga2VlcGFsaXZlIG1hbmFnZXIuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIC8vIFN0b3JlIGEga2VlcGFsaXZlIHJlcG9ydCB3aGVuIHRoZSBzZXNzaW9uIGlzIHN0YXJ0aW5nXG4gICAgICAgIHRoaXMuc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhwYXJhbWV0ZXJzLCBuZXh0ID0gdHJ1ZSkge1xuICAgICAgICAvLyBTdG9yZSBrZWVwYWxpdmUgcmVwb3J0cyBhdCBldmVyeSBrZWVwYWxpdmVcbiAgICAgICAgdGhpcy5zdG9yZSgpO1xuXG4gICAgICAgIGlmIChuZXh0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGtlZXBhbGl2ZSByZXBvcnQgZnJvbSB0aGUgY2FjaGUgd2hlbiB0aGUgc2Vzc2lvbiBpcyBzdG9wcGVkXG4gICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgfVxuXG4gICAgc3RvcmUoKSB7XG4gICAgICAgIFNtYXJ0TGliLmFuYWx5dGljc01vZHVsZT8uQ2FjaGVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RvcmVLZWVwYWxpdmVSZXBvcnQodGhpcy5hbmFseXRpY3NBZGRyZXNzLCB0aGlzLmhhbmRsZXIuc2Vzc2lvblJlcG9ydC50b0VuZFNlc3Npb25KU09OKCkpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlPy5DYWNoZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWxldGVLZWVwYWxpdmVSZXBvcnQodGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQuc2Vzc2lvbklkKTtcbiAgICB9XG59XG5cbi8qKlxuICogS2VlcGFsaXZlIG1hbmFnZXIgaWYgdXNpbmcgQnJvYWRwZWFrIENETiBhbmQgbWV0cmljcyByZWNlaXZlciByZXBvcnRpbmcgbW9kZVxuICovXG5leHBvcnQgY2xhc3MgQnJvYWRwZWFrQ0ROQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyIGV4dGVuZHMgQnJvYWRwZWFrQ0ROS2VlcGFsaXZlTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogdGhpcmQgcGFydHkgQ0ROIGtlZXBhbGl2ZSBtYW5hZ2VyXG4gICAgICovXG4gICAgY2FjaGVLZWVwYWxpdmVNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xuICAgICAgICBzdXBlcihoYW5kbGVyKTtcblxuICAgICAgICAvLyBPdmVyd3JpdGUgbmV4dCBjYWxsYmFjayB0byByZW1vdmUgdGhlIENhY2hlS2VlcGFsaXZlTWFuYWdlciwgYW5kIG9ubHkgdXNlIHRoZSBrZWVwYWxpdmUgb2YgQnJvYWRwZWFrQ0ROS2VlcGFsaXZlTWFuYWdlclxuICAgICAgICB0aGlzLmNhY2hlS2VlcGFsaXZlTWFuYWdlciA9IG5ldyBDYWNoZUtlZXBhbGl2ZU1hbmFnZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMuY2FjaGVLZWVwYWxpdmVNYW5hZ2VyLm5leHQgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyBTdG9yZSBhIGtlZXBhbGl2ZSByZXBvcnQgd2hlbiB0aGUgc2Vzc2lvbiBpcyBzdGFydGluZ1xuICAgICAgICB0aGlzLmNhY2hlS2VlcGFsaXZlTWFuYWdlci5zdG9yZSgpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgLy8gU3RvcmUga2VlcGFsaXZlIHJlcG9ydHMgYXQgZXZlcnkga2VlcGFsaXZlXG4gICAgICAgIHRoaXMuY2FjaGVLZWVwYWxpdmVNYW5hZ2VyLmNhbGxiYWNrKHBhcmFtZXRlcnMpO1xuXG4gICAgICAgIHN1cGVyLmNhbGxiYWNrKHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGtlZXBhbGl2ZSByZXBvcnQgZnJvbSB0aGUgY2FjaGUgd2hlbiB0aGUgc2Vzc2lvbiBpcyBzdG9wcGVkXG4gICAgICAgIHRoaXMuY2FjaGVLZWVwYWxpdmVNYW5hZ2VyLmRlbGV0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXJNYW5hZ2VyIGZyb20gJy4vYW5hbHl0aWNzL3BsYXllci9QbGF5ZXJNYW5hZ2VyJztcbmltcG9ydCBQbGF5ZXJBZGFwdGVyIGZyb20gJy4vYW5hbHl0aWNzL3BsYXllci9QbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBHZW5lcmljUGxheWVyQWRhcHRlciBmcm9tICcuL2FuYWx5dGljcy9wbGF5ZXIvR2VuZXJpY1BsYXllckFkYXB0ZXInO1xuaW1wb3J0IFBsYXllckV2ZW50TGlzdGVuZXIgZnJvbSAnLi9hbmFseXRpY3MvcGxheWVyL1BsYXllckV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IEdlbmVyaWNQbGF5ZXJBcGkgZnJvbSAnLi9hbmFseXRpY3MvcGxheWVyL0dlbmVyaWNQbGF5ZXJBcGknO1xuaW1wb3J0IEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyIGZyb20gJy4vcmVxdWVzdC9BbmFseXRpY3NSZXF1ZXN0TWFuYWdlcic7XG5pbXBvcnQgU2Vzc2lvblRyYWNrZXJUaW1lbGluZSBmcm9tICcuL3RyYWNrZXIvU2Vzc2lvblRyYWNrZXJUaW1lbGluZSc7XG5pbXBvcnQgeyBTZXNzaW9uVHJhY2tlckV2ZW50LCBTZXNzaW9uVHJhY2tlckV2ZW50cyB9IGZyb20gJy4vdHJhY2tlci9TZXNzaW9uVHJhY2tlckV2ZW50JztcbmltcG9ydCB7IE1ldHJpY3MgfSBmcm9tICcuL2FuYWx5dGljcy9tZXRyaWNzL01ldHJpY3MnO1xuaW1wb3J0IE1ldHJpY3NNYW5hZ2VyIGZyb20gJy4vYW5hbHl0aWNzL21ldHJpY3MvTWV0cmljc01hbmFnZXInO1xuaW1wb3J0IHtBbmFseXRpY3NTZXNzaW9ufSBmcm9tICcuL3Nlc3Npb24vYW5hbHl0aWNzL0FuYWx5dGljc1Nlc3Npb24nO1xuaW1wb3J0IHtDYWNoZU1hbmFnZXIsIENhY2hlS2VlcGFsaXZlTWFuYWdlciwgQnJvYWRwZWFrQ0ROQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyfSBmcm9tICcuL2NhY2hlL0NhY2hlTWFuYWdlcic7XG5cbmltcG9ydCBTbWFydExpYiBmcm9tICcuL1NtYXJ0TGliJztcblNtYXJ0TGliLmFuYWx5dGljc01vZHVsZSA9IHtcbiAgICBQbGF5ZXJNYW5hZ2VyLCBQbGF5ZXJBZGFwdGVyLCBHZW5lcmljUGxheWVyQWRhcHRlciwgUGxheWVyRXZlbnRMaXN0ZW5lciwgR2VuZXJpY1BsYXllckFwaSxcbiAgICBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlcixcbiAgICBTZXNzaW9uVHJhY2tlclRpbWVsaW5lLCBTZXNzaW9uVHJhY2tlckV2ZW50LCBTZXNzaW9uVHJhY2tlckV2ZW50cyxcbiAgICBNZXRyaWNzLCBNZXRyaWNzTWFuYWdlcixcbiAgICBBbmFseXRpY3NTZXNzaW9uLFxuICAgIENhY2hlTWFuYWdlciwgQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyLCBCcm9hZHBlYWtDRE5DYWNoZUtlZXBhbGl2ZU1hbmFnZXJcbn07XG5cbmV4cG9ydCB7XG4gICAgUGxheWVyTWFuYWdlciwgUGxheWVyQWRhcHRlciwgR2VuZXJpY1BsYXllckFkYXB0ZXIsIFBsYXllckV2ZW50TGlzdGVuZXIsIEdlbmVyaWNQbGF5ZXJBcGksXG4gICAgQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIsXG4gICAgU2Vzc2lvblRyYWNrZXJUaW1lbGluZSwgU2Vzc2lvblRyYWNrZXJFdmVudCwgU2Vzc2lvblRyYWNrZXJFdmVudHMsXG4gICAgTWV0cmljcywgTWV0cmljc01hbmFnZXIsXG4gICAgQW5hbHl0aWNzU2Vzc2lvbixcbiAgICBDYWNoZU1hbmFnZXIsIENhY2hlS2VlcGFsaXZlTWFuYWdlciwgQnJvYWRwZWFrQ0ROQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyXG59O1xuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBKb2JNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvSm9iTWFuYWdlcic7XG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi4vU21hcnRMaWInO1xuXG5jb25zdCBUQUcgPSAnQnBrQW5hbHl0aWNzUmVxdWVzdE1ncic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSBtZXRyaWNzIHJlY2VpdmVyIEJrQSBBUElcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBNRVRSSUNTX1JFQ0VJVkVSX1BBVEggPSAnZnNlcnZpY2VzL21ldHJpY3NSZWNlaXZlcic7XG5cbiAgICAvKipcbiAgICAgKiBUaW1lb3V0IHVzZWQgZm9yIHBvc3RpbmcgZGF0YSB0byB0aGUgQmtBXG4gICAgICogQHR5cGUge251bWJlcn0gaW4gbWlsbGlzXG4gICAgICovXG4gICAgc3RhdGljIFBPU1RfU0VTU0lPTl9SRVFVRVNUX1RJTUVPVVQgPSA1MDAwO1xuXG4gICAgLyoqXG4gICAgICogUHJlZml4IHRvIHByZXZlbnQgc3RvcmluZyB0aGUgcmVwb3J0IGluIGNhY2hlIChleDogZm9yIHN0YWdpbmcgQmtBcylcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBOT0NBQ0hFX1BSRUZJWCA9ICdub2NhY2hlPSc7XG5cbiAgICAvKipcbiAgICAgKiBTaW5nbGV0b25cbiAgICAgKi9cbiAgICBzdGF0aWMgI2luc3RhbmNlO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLiNpbnN0YW5jZSkge1xuICAgICAgICAgICAgQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuI2luc3RhbmNlID0gbmV3IEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuI2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBmdWxsIHBvc3QgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBhbmFseXRpY3NBZGRyZXNzIFNlcnZlciBiYXNlIGFkZHJlc3NcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBwb3N0IGFkZHJlc3NcbiAgICAgKi9cbiAgICBidWlsZEFuYWx5dGljc0FkZHJlc3MoYW5hbHl0aWNzQWRkcmVzcykge1xuICAgICAgICBhbmFseXRpY3NBZGRyZXNzID0gYW5hbHl0aWNzQWRkcmVzcy50cmltKCk7XG4gICAgICAgIGlmICghYW5hbHl0aWNzQWRkcmVzcy5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBZGRyZXNzICs9ICcvJztcbiAgICAgICAgfVxuICAgICAgICBhbmFseXRpY3NBZGRyZXNzICs9IEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLk1FVFJJQ1NfUkVDRUlWRVJfUEFUSDtcblxuICAgICAgICByZXR1cm4gYW5hbHl0aWNzQWRkcmVzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIHN0YXJ0IHNlc3Npb24gcmVxdWVzdCB0byB0aGUgQmtBXG4gICAgICogQHBhcmFtIGhhbmRsZXIgc2Vzc2lvbiBoYW5kbGVyXG4gICAgICogQHBhcmFtIHBhcmFtZXRlcnMgc21hcnRsaWIgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXF1ZXN0IGVuZCBwcm9taXNlXG4gICAgICovXG4gICAgLyogc3RhcnRTZXNzaW9uKGhhbmRsZXIsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblJlcG9ydCA9IGhhbmRsZXIuc2Vzc2lvblJlcG9ydDtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuYW5hbHl0aWNzQWRkcmVzcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FkZHJlc3NlcyA9IHBhcmFtZXRlcnMuYW5hbHl0aWNzQWRkcmVzcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XG5cbiAgICAgICAgICAgIGFuYWx5dGljc0FkZHJlc3Nlcy5mb3JFYWNoKGFuYWx5dGljc0FkZHJlc3MgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkaW5nIGFuYWx5dGljcyBhZGRyZXNzXG4gICAgICAgICAgICAgICAgYW5hbHl0aWNzQWRkcmVzcyA9IHRoaXMuYnVpbGRBbmFseXRpY3NBZGRyZXNzKGFuYWx5dGljc0FkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gUG9zdCBzdGFydCBzZXNzaW9uXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1Bvc3RpbmcgbWV0cmljcyB0byAnICsgYW5hbHl0aWNzQWRkcmVzcywgaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucG9zdFNlc3Npb24oYW5hbHl0aWNzQWRkcmVzcywgc2Vzc2lvblJlcG9ydC50b1N0YXJ0U2Vzc2lvbkpTT04oKSwgcGFyYW1ldGVycylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdTZW5kIGNyZWF0aW9uIHNlc3Npb24gbWV0cmljcyBlbmRlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXN1bHQuaHR0cFN0YXR1cyArICcgKCcgKyBhbmFseXRpY3NBZGRyZXNzICsgJyknLCBoYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5odHRwU3RhdHVzID49IDIwMCAmJiByZXN1bHQuaHR0cFN0YXR1cyA8IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2VuZCBjcmVhdGlvbiBzZXNzaW9uIG1ldHJpY3MgZG9uZScsIGhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ01ldHJpY3MgcGxhdGZvcm0gVVJMIGlzIG51bGwsIGNyZWF0aW9uIG1ldHJpY3Mgd29uXFwndCBiZSBwb3N0ZWQgYW55d2hlcmUuJywgaGFuZGxlci5pZCk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfSovXG5cbiAgICAvKipcbiAgICAgKiBTZW5kIGVuZCBzZXNzaW9uIHJlcXVlc3QgdG8gdGhlIEJrQVxuICAgICAqIEBwYXJhbSBoYW5kbGVyIHNlc3Npb24gaGFuZGxlclxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHNtYXJ0bGliIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmVxdWVzdCBlbmQgcHJvbWlzZVxuICAgICAqL1xuICAgIGVuZFNlc3Npb24oaGFuZGxlciwgcGFyYW1ldGVycykge1xuICAgICAgICBjb25zdCBzZXNzaW9uUmVwb3J0ID0gaGFuZGxlci5zZXNzaW9uUmVwb3J0O1xuICAgICAgICBpZiAocGFyYW1ldGVycy5hbmFseXRpY3NBZGRyZXNzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWRkcmVzc2VzID0gcGFyYW1ldGVycy5hbmFseXRpY3NBZGRyZXNzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgICAgICAgYW5hbHl0aWNzQWRkcmVzc2VzLmZvckVhY2goYW5hbHl0aWNzQWRkcmVzcyA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHJlcG9ydElkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChhbmFseXRpY3NBZGRyZXNzLmluZGV4T2YoQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuTk9DQUNIRV9QUkVGSVgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLk5PQ0FDSEVfUFJFRklYICsgJyBvcHRpb24gdXNlZCwgbm8gbmVlZCB0byBzdG9yZSB0aGUgcmVwb3J0IGluIGNhY2hlJyk7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5dGljc0FkZHJlc3MgPSB0aGlzLmJ1aWxkQW5hbHl0aWNzQWRkcmVzcyhhbmFseXRpY3NBZGRyZXNzLnN1YnN0cmluZyhBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5OT0NBQ0hFX1BSRUZJWC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3NBZGRyZXNzID0gdGhpcy5idWlsZEFuYWx5dGljc0FkZHJlc3MoYW5hbHl0aWNzQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydElkID0gU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlLkNhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3JlU2Vzc2lvblJlcG9ydChhbmFseXRpY3NBZGRyZXNzLCBzZXNzaW9uUmVwb3J0LnRvRW5kU2Vzc2lvbkpTT04oKSwgdHJ1ZSwgRGF0ZS5ub3coKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUG9zdCBlbmQgc2Vzc2lvblxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdQb3N0aW5nIG1ldHJpY3MgdG8gJyArIGFuYWx5dGljc0FkZHJlc3MsIGhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnBvc3RTZXNzaW9uKGFuYWx5dGljc0FkZHJlc3MsIHNlc3Npb25SZXBvcnQudG9FbmRTZXNzaW9uSlNPTigpLCBwYXJhbWV0ZXJzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NlbmQgc2Vzc2lvbiBtZXRyaWNzIGVuZGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3VsdC5odHRwU3RhdHVzICsgJyAoJyArIGFuYWx5dGljc0FkZHJlc3MgKyAnKScsIGhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmh0dHBTdGF0dXMgPj0gMjAwICYmIHJlc3VsdC5odHRwU3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHJlcG9ydCBpbiBjYWNoZSBpZiBpdCBoYXMgYmVlbiBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcG9ydElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlLkNhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlbGV0ZVNlc3Npb25SZXBvcnQocmVwb3J0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgY2FjaGUgb24gc3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNtYXJ0TGliLmFuYWx5dGljc01vZHVsZS5DYWNoZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzZW5kaW5nIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBvcnRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlLkNhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZShyZXBvcnRJZCwgJ3NlbmRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2VuZCBzZXNzaW9uIG1ldHJpY3MgZG9uZScsIGhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ01ldHJpY3MgcGxhdGZvcm0gVVJMIGlzIG51bGwsIG1ldHJpY3Mgd29uXFwndCBiZSBwb3N0ZWQgYW55d2hlcmUuJywgaGFuZGxlci5pZCk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBzZXNzaW9uIHJlcG9ydCBzdG9yZWQgaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gYW5hbHl0aWNzQWRkcmVzcyBmdWxsIGFuYWx5dGljcyBhZGRyZXNzXG4gICAgICogQHBhcmFtIHNlc3Npb25SZXBvcnRKc29uIHNlc3Npb24gcmVwb3J0IGF0IEpTT04gZm9ybWF0XG4gICAgICogQHBhcmFtIHBhcmFtZXRlcnMgc21hcnRsaWIgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXF1ZXN0IGVuZCBwcm9taXNlXG4gICAgICovXG4gICAgZW5kU2Vzc2lvbkNhY2hlKGFuYWx5dGljc0FkZHJlc3MsIHNlc3Npb25SZXBvcnRKc29uLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmIChhbmFseXRpY3NBZGRyZXNzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gUG9zdCBlbmQgc2Vzc2lvblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1Bvc3RpbmcgY2FjaGUgdG8gJyArIGFuYWx5dGljc0FkZHJlc3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdFNlc3Npb24oYW5hbHl0aWNzQWRkcmVzcywgc2Vzc2lvblJlcG9ydEpzb24sIHBhcmFtZXRlcnMpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NlbmQgY2FjaGUgZW5kZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzdWx0Lmh0dHBTdGF0dXMgKyAnICgnICsgYW5hbHl0aWNzQWRkcmVzcyArICcpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5odHRwU3RhdHVzID49IDIwMCAmJiByZXN1bHQuaHR0cFN0YXR1cyA8IDMwMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlck1hbmFnZXIudyhUQUcsICdNZXRyaWNzIHBsYXRmb3JtIFVSTCBpcyBudWxsLCBjYWNoZSB3b25cXCd0IGJlIHBvc3RlZCBhbnl3aGVyZS4nKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIHNlc3Npb24gcmVwb3J0IFBPU1QgcmVxdWVzdFxuICAgICAqIEBwYXJhbSB1cmwgdXJsXG4gICAgICogQHBhcmFtIGJvZHkgYm9keVxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHNtYXJ0bGliIHBhcmFtZXRlcnMgdXNlZCBmb3IgaGVhZGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fSByZXF1ZXN0IGVuZCBwcm9taXNlXG4gICAgICovXG4gICAgcG9zdFNlc3Npb24odXJsLCBib2R5LCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb25uZWN0aW9uJzogJ2Nsb3NlJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMudXNlckFnZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzWydVc2VyLUFnZW50J10gPSBwYXJhbWV0ZXJzLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGVuY29kZWRCb2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICdFeGVjdXRpbmcgUE9TVCByZXF1ZXN0IHdpdGggYm9keTogJyArIGVuY29kZWRCb2R5KTtcblxuICAgICAgICAgICAgSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFzeW5jUG9zdCh1cmwsIGhlYWRlcnMsIGVuY29kZWRCb2R5LCBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5QT1NUX1NFU1NJT05fUkVRVUVTVF9USU1FT1VULCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdGF0dXNDb2RlID0gMDtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbJ3N0YXR1c0NvZGUnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSBwYXJzZUludChyZXN1bHRbJ3N0YXR1c0NvZGUnXSwgMTApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe2h0dHBTdGF0dXM6IHN0YXR1c0NvZGV9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1N0cmVhbWluZ1Nlc3Npb259IGZyb20gJy4uL3N0cmVhbWluZy9TdHJlYW1pbmdTZXNzaW9uJztcbmltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtBbmFseXRpY3NTZXNzaW9uJztcblxuLyoqXG4gKiBPbmNlIGEgc2Vzc2lvbiBoYXMgYmVlbiBjcmVhdGVkLCBhbGwgbmV4dCBjYWxscyBoYXZlIHRvIGJlIGRvbmUgb24gdGhhdCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXNzaW9uIGV4dGVuZHMgU3RyZWFtaW5nU2Vzc2lvbiB7XG5cbiAgICBzdGFydGVkO1xuXG4gICAgY29uc3RydWN0b3Ioc21hcnRMaWIsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoc21hcnRMaWIsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuZ2V0VVJMID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuZ2V0UXVlcnkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3RhcnRTdHJlYW1pbmdTZXNzaW9uID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuc3RvcEFuYWx5dGljc1Nlc3Npb24gPSB0aGlzLnN0b3BTdHJlYW1pbmdTZXNzaW9uO1xuICAgICAgICB0aGlzLnN0b3BTdHJlYW1pbmdTZXNzaW9uID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLmF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKTtcblxuICAgICAgICAvLyBMaXN0ZW4gdG8gcGxheWVyIGV2ZW50cyB3aGVuIGF0dGFjaGluZyBpdFxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IHRoaXMuc21hcnRMaWIuc2Vzc2lvbk1hbmFnZXIuY3JlYXRlU2Vzc2lvbkhhbmRsZXIodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuaW5pdFBsYXllckFkYXB0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5hZGRMaXN0ZW5lcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldFVSTCBzdGFydCBlcXVpdmFsZW50XG4gICAgb25Mb2FkaW5nKCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU2Vzc2lvbiBpcyBsb2FkaW5nLi4uJywgdGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5hZFNlc3Npb24gPSB0aGlzLmFkU2Vzc2lvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZFNlc3Npb24uaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1Nlc3Npb24gaXMgc3RhcnRpbmcgd2l0aCBVUkwgJyArIHRoaXMuY3VzdG9tUGFyYW1ldGVyc1sncmVwb3J0LnJlcXVlc3RlZFVSTCddLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuaShUQUcsICdTZXNzaW9uIGlzIHN0YXJ0aW5nLi4uJyk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc3RhcnQoJycpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdFeGNlcHRpb246IG9uTG9hZGluZywgdGhlIHNlc3Npb24gaXMgYWxyZWFkeSBydW5uaW5nLicsIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2Vzc2lvblJlcG9ydFZhbHVlKG5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblJlcG9ydCA9IHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21QYXJhbWV0ZXJzWydyZXBvcnQuJyArIG5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlc3Npb25SZXBvcnRbbmFtZV0gPSB0aGlzLmN1c3RvbVBhcmFtZXRlcnNbJ3JlcG9ydC4nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlKGJyb2FkcGVha1N0YXR1c0NvZGUpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1Nlc3Npb24gaXMgY2xvc2luZyAoc3RhdHVzIGNvZGU6ICcgKyBicm9hZHBlYWtTdGF0dXNDb2RlICsgJykuLi4nLCB0aGlzLmlkKTtcblxuICAgICAgICAvLyBEaXNhYmxlIHJlZGlyZWN0aW9uIHRpbWVcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0Lm1ldHJpY3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQubWV0cmljcy5yZWRpcmVjdGlvblRpbWUgPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBzZXNzaW9uIHJlcG9ydCB3aXRoIGN1c3RvbSB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25SZXBvcnRWYWx1ZSgncmVxdWVzdGVkVVJMJyk7XG4gICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvblJlcG9ydFZhbHVlKCdyZWRpcmVjdGVkVVJMJyk7XG5cbiAgICAgICAgdGhpcy5zdG9wQW5hbHl0aWNzU2Vzc2lvbihicm9hZHBlYWtTdGF0dXNDb2RlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIFNlc3Npb25UcmFja2VyRXZlbnRzXG59IGZyb20gJy4vU2Vzc2lvblRyYWNrZXJFdmVudCc7XG5pbXBvcnQgU2Vzc2lvblRyYWNrZXJTdW1tYXJ5IGZyb20gJy4vU2Vzc2lvblRyYWNrZXJTdW1tYXJ5JztcbmltcG9ydCBCeXRlQnVmZmVyIGZyb20gJy4uL3V0aWxzL0J5dGVCdWZmZXInO1xuaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa1Nlc3Npb25UcmFja2VyRW5jb2Rlcic7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uVHJhY2tlckVuY29kZXIge1xuICAgIHN0YXRpYyBERUZBVUxUX0JVRkZFUl9TSVpFID0gMzg0O1xuXG4gICAgc3RhdGljIERFRkFVTFRfRU5EX0VWRU5UU19EVVJBVElPTiA9IDE1MDAwO1xuXG4gICAgc3RhdGljIERFRkFVTFRfRU5EX0VWRU5UU19OVU1CRVIgPSAyMDtcblxuICAgIC8qKlxuICAgICAqIFRpbWVsaW5lIHRvIGVuY29kZVxuICAgICAqL1xuICAgIHRpbWVsaW5lO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBtYXggYnVmZmVyIHNpemUgKHNldCBvbiBpbml0IG9yIGV4dGVuZGVkIGluIGV4dGVuZCBtZXRob2QpXG4gICAgICovXG4gICAgbWF4QnVmZmVyU2l6ZTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbWF4IGR1cmF0aW9uIG9mIGV2ZW50cyBpbiBlbmQgYnVmZmVyXG4gICAgICovXG4gICAgbWF4RW5kRXZlbnRzRHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG1heCBudW1iZXIgb2YgZXZlbnRzIGluIGVuZCBidWZmZXJcbiAgICAgKi9cbiAgICBtYXhFbmRFdmVudHNOdW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudHMgYXJyYXkgb2YgdGltZWxpbmVcbiAgICAgKi9cbiAgICBldmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbXByZXNzZWQgZGF0YSBidWZmZXJcbiAgICAgKiBFbXB0aWVkIGR1cmluZyBmaXJzdCBjb21wcmVzc2lvbiB3aXRoIHVuY29tcHJlc3NlZERhdGFGdWxsID09PSB0cnVlXG4gICAgICovXG4gICAgdW5jb21wcmVzc2VkRGF0YTtcblxuICAgIC8qKlxuICAgICAqIFVuY29tcHJlc3NlZCBkYXRhIGJ1ZmZlciBmdWxsXG4gICAgICovXG4gICAgdW5jb21wcmVzc2VkRGF0YUZ1bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb21wcmVzc2VkIHN0YXJ0IGRhdGEgYnVmZmVyXG4gICAgICovXG4gICAgY29tcHJlc3NlZFN0YXJ0RGF0YTtcblxuICAgIC8qKlxuICAgICAqIE1pbiBpbmRleCBpbiBldmVudHMgdG8gc3VtbWFyaXplZFxuICAgICAqL1xuICAgIG1pblN1bW1hcnlJbmRleDtcblxuICAgIC8qKlxuICAgICAqIE1heCBidWZmZXIgc2l6ZSBmb3IgZW5kIGV2ZW50c1xuICAgICAqIENhbGN1bGF0ZWQgZHVyaW5nIGZpcnN0IGNvbXByZXNzaW9uIHdpdGggdW5jb21wcmVzc2VkRGF0YUZ1bGwgPT09IHRydWVcbiAgICAgKi9cbiAgICBtYXhFbmRCdWZmZXJTaXplO1xuXG4gICAgLyoqXG4gICAgICogU3VtbWFyeSBvYmplY3RcbiAgICAgKi9cbiAgICBzdW1tYXJ5O1xuXG4gICAgY29uc3RydWN0b3IodGltZWxpbmUsIG1heEJ1ZmZlclNpemUgPSBTZXNzaW9uVHJhY2tlckVuY29kZXIuREVGQVVMVF9CVUZGRVJfU0laRSxcbiAgICAgICAgbWF4RW5kRXZlbnRzRHVyYXRpb24gPSBTZXNzaW9uVHJhY2tlckVuY29kZXIuREVGQVVMVF9FTkRfRVZFTlRTX0RVUkFUSU9OLFxuICAgICAgICBtYXhFbmRFdmVudHNOdW1iZXIgPSBTZXNzaW9uVHJhY2tlckVuY29kZXIuREVGQVVMVF9FTkRfRVZFTlRTX05VTUJFUikge1xuICAgIC8vIEpGTVxuICAgIC8vIGNvbnN0cnVjdG9yKHRpbWVsaW5lLCBtYXhCdWZmZXJTaXplID0gODAsXG4gICAgLy8gICAgbWF4RW5kRXZlbnRzRHVyYXRpb24gPSBTZXNzaW9uVHJhY2tlckVuY29kZXIuREVGQVVMVF9FTkRfRVZFTlRTX0RVUkFUSU9OLFxuICAgIC8vICAgIG1heEVuZEV2ZW50c051bWJlciA9IDUpIHtcblxuICAgICAgICB0aGlzLm1heEJ1ZmZlclNpemUgPSBtYXhCdWZmZXJTaXplO1xuICAgICAgICB0aGlzLm1heEVuZEV2ZW50c0R1cmF0aW9uID0gbWF4RW5kRXZlbnRzRHVyYXRpb247XG4gICAgICAgIHRoaXMubWF4RW5kRXZlbnRzTnVtYmVyID0gbWF4RW5kRXZlbnRzTnVtYmVyO1xuXG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcblxuICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMudGltZWxpbmUuZXZlbnRzO1xuXG4gICAgICAgIHRoaXMudW5jb21wcmVzc2VkRGF0YSA9IG5ldyBCeXRlQnVmZmVyKHRoaXMubWF4QnVmZmVyU2l6ZSk7XG4gICAgICAgIHRoaXMudW5jb21wcmVzc2VkRGF0YUZ1bGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wcmVzc2VkU3RhcnREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMubWluU3VtbWFyeUluZGV4ID0gMDtcblxuICAgICAgICB0aGlzLm1heEVuZEJ1ZmZlclNpemUgPSB0aGlzLm1heEJ1ZmZlclNpemU7XG5cbiAgICAgICAgdGhpcy5zdW1tYXJ5ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBsYXN0IGV2ZW50IGluIHRpbWVsaW5lXG4gICAgICpcbiAgICAgKiBUbyBjYWxsIHdoZW4gYW4gZXZlbnQgaXMgYWRkZWQgdG8gZXZlbnRzXG4gICAgICogT25seSB1c2VkIGluIHVuY29tcHJlc3NlZCBtb2RlIGJlY2F1c2Ugc3RhcnQgZXZlbnRzIGRvbid0IG5lZWQgdG8gYmUgZW5jb2RlZCB0d2ljZVxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgb25FdmVudEFkZGVkKGV2ZW50KSB7XG4gICAgICAgIC8vIElmIGNvbXByZXNzaW9uIG1vZGUgZW5hYmxlZCwgdGhlIGVuY29kaW5nIGlzIGRvbmUgaW4gdGhlIHByb2Nlc3MgbWV0aG9kXG4gICAgICAgIGlmICh0aGlzLnVuY29tcHJlc3NlZERhdGFGdWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgcHJldmlvdXMgZXZlbnRcbiAgICAgICAgbGV0IHByZXZpb3VzRXZlbnQgPSBldmVudDtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBwcmV2aW91c0V2ZW50ID0gdGhpcy5ldmVudHNbdGhpcy5ldmVudHMubGVuZ3RoIC0gMl07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbmNvZGUgdGhlIGV2ZW50XG4gICAgICAgIGV2ZW50LmNvbXByZXNzZWREYXRhID0gZXZlbnQudG9EYXRhKHByZXZpb3VzRXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgZXZlbnQuY29tcHJlc3NlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBvdXRwdXQgYnVmZmVyXG4gICAgICAgIGlmIChldmVudC5jb21wcmVzc2VkRGF0YS5jYXBhY2l0eSgpIDw9IHRoaXMudW5jb21wcmVzc2VkRGF0YS5yZW1haW5pbmcoKSkge1xuICAgICAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhLnB1dEJ5dGVCdWZmZXIoZXZlbnQuY29tcHJlc3NlZERhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhRnVsbCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIEluaXQgY29tcHJlc3NlZCBzdGFydCBkYXRhIGJ1ZmZlclxuICAgICAgICAgICAgdGhpcy5jb21wcmVzc2VkU3RhcnREYXRhID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5tYXhCdWZmZXJTaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRXZlbnRVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLnVuY29tcHJlc3NlZERhdGEgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLm1heEJ1ZmZlclNpemUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNbaV07XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29tcHJlc3NlZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5jb21wcmVzc2VkRGF0YS5wdXRCeXRlQnVmZmVyKHRoaXMuZXZlbnRzW2ldLmNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuY29kZSB0aGUgY3VycmVudCB0aW1lbGluZVxuICAgICAqIENhbiBiZSBjYWxsZWQgYXQgYW55IHRpbWUgdG8gcHJvY2VzcyBjdXJyZW50IGV2ZW50c1xuICAgICAqXG4gICAgICogQHJldHVybnMge0J5dGVCdWZmZXJ9XG4gICAgICovXG4gICAgcHJvY2VzcygpIHtcbiAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0VuY29kaW5nICcgKyB0aGlzLmV2ZW50cy5sZW5ndGggKyAnIGV2ZW50cy4uLicpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoIXRoaXMudW5jb21wcmVzc2VkRGF0YUZ1bGwpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdUaW1lbGluZSBlbmNvZGVyIGdlbmVyYXRlZCB1bmNvbXByZXNzZWQgZGF0YSAoJyArIHRoaXMuZXZlbnRzLmxlbmd0aCArICcgZXZlbnRzLCAnICsgdGhpcy51bmNvbXByZXNzZWREYXRhLmxlbmd0aCgpICsgJyBieXRlcyknKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIGRhdGEgZGlyZWN0bHkgaWYgbm8gY29tcHJlc3Npb24gbmVlZGVkXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmNvbXByZXNzZWREYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgRW5jb2RlciB1c2luZyBjb21wcmVzc2VkIGRhdGEnKTtcbiAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgQ29tcHJlc3NpbmcgZW5kIGV2ZW50cy4uLicpO1xuXG4gICAgICAgIC8vIExvZ1xuICAgICAgICBsZXQgb3V0cHV0TG9nID0gJyc7XG5cbiAgICAgICAgLy8gRW5jb2RlIGVuZCBldmVudHNcbiAgICAgICAgbGV0IGVuZEJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgbGV0IHNpemUgPSAwO1xuICAgICAgICBsZXQgbWF4U3VtbWFyeUluZGV4O1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ldmVudHMubGVuZ3RoIC0gMTsgaSA+PSAwIDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZGF0ZSAtIGV2ZW50LmV2ZW50RGF0ZSA8IHRoaXMubWF4RW5kRXZlbnRzRHVyYXRpb24gJiYgZW5kQnVmZmVycy5sZW5ndGggPCB0aGlzLm1heEVuZEV2ZW50c051bWJlcikge1xuICAgICAgICAgICAgICAgIC8vIEVuY29kZSBldmVudFxuICAgICAgICAgICAgICAgIGxldCBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLmV2ZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RFdmVudCA9IHRoaXMuZXZlbnRzW2kgKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBldmVudC50b0RhdGEobGFzdEV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gZXZlbnQudG9EYXRhKGV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9sZGVzdCBlbmQgZXZlbnQgY2FuIGZpdCBpbiB0aGUgYnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKHNpemUgKyBidWZmZXIubGVuZ3RoKCkgPD0gdGhpcy5tYXhFbmRCdWZmZXJTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZEJ1ZmZlcnMucHVzaChidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICBzaXplICs9IGJ1ZmZlci5sZW5ndGgoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnICAgIFJlbW92aW5nIGxhdGVzdCBlbmQgZXZlbnQgKG1heCBzaXplIHJlYWNoZWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIG1heFN1bW1hcnlJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF4U3VtbWFyeUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuY29kaW5nIHN0YXJ0IGV2ZW50cyAoZmlyc3QgdGltZSBvbmx5KVxuICAgICAgICBpZiAodGhpcy5jb21wcmVzc2VkU3RhcnREYXRhLmxlbmd0aCgpID09PSAwKSB7XG4gICAgICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnICBDb21wcmVzc2luZyBzdGFydCBldmVudHMuLi4nKTtcbiAgICAgICAgICAgIHRoaXMubWluU3VtbWFyeUluZGV4ID0gbWF4U3VtbWFyeUluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5tYXhCdWZmZXJTaXplIC0gU2Vzc2lvblRyYWNrZXJTdW1tYXJ5LkJVRkZFUl9TSVpFIC0gc2l6ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IG1heFN1bW1hcnlJbmRleCA7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wcmVzc2VkU3RhcnREYXRhLmxlbmd0aCgpICsgZXZlbnQuY29tcHJlc3NlZERhdGEubGVuZ3RoKCkgPiBtYXhTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluU3VtbWFyeUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wcmVzc2VkU3RhcnREYXRhLnB1dEJ5dGVCdWZmZXIoZXZlbnQuY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBtYXggYnVmZmVyIHNpemUgZm9yIGVuZCBldmVudHMgKHVzZWQgaW4gdGhlIG5leHQgcHJvY2VzcyBpdGVyYXRpb24sIHNlZSBiZWxvdylcbiAgICAgICAgICAgIHRoaXMubWF4RW5kQnVmZmVyU2l6ZSA9IHRoaXMuY29tcHJlc3NlZFN0YXJ0RGF0YS5yZW1haW5pbmcoKSAtIFNlc3Npb25UcmFja2VyU3VtbWFyeS5CVUZGRVJfU0laRTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdW51c2VkIGJ1ZmZlclxuICAgICAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvLyBEZWJ1ZyBsb2dcbiAgICAgICAgICAgIG91dHB1dExvZyArPSAnZmlyc3QgaXRlcmF0aW9uLCAnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgb3V0cHV0IGJ1ZmZlclxuICAgICAgICBsZXQgYnVmZmVyID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5tYXhCdWZmZXJTaXplKTtcblxuICAgICAgICAvLyBTZXQgc3RhcnQgZGF0YVxuICAgICAgICBidWZmZXIucHV0Qnl0ZUJ1ZmZlcih0aGlzLmNvbXByZXNzZWRTdGFydERhdGEsIHRoaXMuY29tcHJlc3NlZFN0YXJ0RGF0YS5sZW5ndGgoKSk7XG5cbiAgICAgICAgLy8gU2V0IHN1bW1hcnlcbiAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgU3VtbWFyaXppbmcgZGF0YS4uLicpO1xuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnICAgIG1pblN1bW1hcnlJbmRleDonICsgdGhpcy5taW5TdW1tYXJ5SW5kZXggKyAnLG1heFN1bW1hcnlJbmRleDonICsgbWF4U3VtbWFyeUluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMubWluU3VtbWFyeUluZGV4ID09PSBtYXhTdW1tYXJ5SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIE5vIHN1bW1hcnkgbmVlZGVkXG4gICAgICAgICAgICBidWZmZXIucHV0KFNlc3Npb25UcmFja2VyRXZlbnRzLkVtcHR5U3VtbWFyeSk7XG5cbiAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICcgICAgTm8gc3VtbWFyeSBuZWVkZWQnKTtcbiAgICAgICAgICAgIG91dHB1dExvZyArPSAnbm8gc3VtbWFyeSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdW1tYXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnkgPSBuZXcgU2Vzc2lvblRyYWNrZXJTdW1tYXJ5KHRoaXMudGltZWxpbmUsIHRoaXMubWluU3VtbWFyeUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeS51cGRhdGUobWF4U3VtbWFyeUluZGV4KTtcblxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeUJ1ZmZlciA9IHRoaXMuc3VtbWFyeS5kYXRhKCk7XG4gICAgICAgICAgICBidWZmZXIucHV0Qnl0ZUJ1ZmZlcihzdW1tYXJ5QnVmZmVyKTtcblxuICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgICBTdW1tYXJ5OicgKyB0aGlzLnN1bW1hcnkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIG91dHB1dExvZyArPSAnc3VtbWFyeSB7JyArIHRoaXMuc3VtbWFyeS50b1N0cmluZygpICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGVuZCBkYXRhXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGVuZEJ1ZmZlcnMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBidWZmZXIucHV0Qnl0ZUJ1ZmZlcihlbmRCdWZmZXJzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdUaW1lbGluZSBlbmNvZGVyIGdlbmVyYXRlZCBjb21wcmVzc2VkIGRhdGEgKCcgKyB0aGlzLmV2ZW50cy5sZW5ndGggKyAnIGV2ZW50cyBiZWZvcmUgZW5jb2RpbmcsICcgK1xuICAgICAgICAgICAgKHRoaXMubWluU3VtbWFyeUluZGV4ICsgZW5kQnVmZmVycy5sZW5ndGgpICsgJyBldmVudHMgYWZ0ZXIgZW5jb2RpbmcsICcgKyBidWZmZXIubGVuZ3RoKCkgKyAnIGJ5dGVzLCB+JyArIChEYXRlLm5vdygpIC0gZGF0ZSkgKyAnbXMsICcgKyBvdXRwdXRMb2cgKyAnKScpO1xuXG4gICAgICAgIC8vIHRoaXMucHJpbnQoYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIC8qIHByaW50KGJ1ZmZlcikge1xuICAgICAgICAvLyBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQYXJzaW5nIGJ1ZmZlcjonKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYnVmZmVyLmJ1ZmZlcjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBidWZmZXIubGVuZ3RoKCkgOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbaW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIFNlc3Npb25UcmFja2VyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNlc3Npb25UcmFja2VyRXZlbnRzW2V2ZW50XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgJyArIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFNlc3Npb25UcmFja2VyRXZlbnRzLk5vbmUpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gU2Vzc2lvblRyYWNrZXJFdmVudHMuRW1wdHlTdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nlc3Npb25UcmFja2VyRXZlbnRzLkVtcHR5U3VtbWFyeScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gU2Vzc2lvblRyYWNrZXJFdmVudHMuRGF0YVN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAyNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVFlQRVNfV0lUSE9VVF9EQVRBLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRZUEVTX1NUQVJULmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRZUEVTX1dJVEhfQklUUkFURS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSA0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChUWVBFU19XSVRIX0JJVFJBVEVfUE9TSVRJT04uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVFlQRVNfV0lUSF9QT1NJVElPTlNfU1RBUlRfRU5ELmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRZUEVTX1dJVEhfU1RBVFVTX0NPREUuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gNDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVFlQRVNfV0lUSF9QUk9HUkVTUy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSA0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChUWVBFU19XSVRIX1NUQVRFLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIGV4dGVuZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVuY29tcHJlc3NlZERhdGFGdWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1heEJ1ZmZlclNpemUgPSA3Njg7XG4gICAgICAgICAgICB0aGlzLm1heEVuZEV2ZW50c0R1cmF0aW9uID0gNDAwMDA7XG4gICAgICAgICAgICB0aGlzLm1heEVuZEV2ZW50c051bWJlciA9IDQwO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMudW5jb21wcmVzc2VkRGF0YTtcblxuICAgICAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5tYXhCdWZmZXJTaXplKTtcbiAgICAgICAgICAgIHRoaXMudW5jb21wcmVzc2VkRGF0YS5wdXRCeXRlQnVmZmVyKGRhdGEsIGRhdGEubGVuZ3RoKCkpO1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0V4dGVuZGVkIHNpemUgZnJvbSAnICsgU2Vzc2lvblRyYWNrZXJFbmNvZGVyLkRFRkFVTFRfQlVGRkVSX1NJWkUgKyAnIHRvIDc2OCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ0ZhaWxlZCB0byBleHRlbmQgc2l6ZSBmcm9tICcgKyBTZXNzaW9uVHJhY2tlckVuY29kZXIuREVGQVVMVF9CVUZGRVJfU0laRSArICcgdG8gNzY4Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IEJ5dGVCdWZmZXIgZnJvbSAnLi4vdXRpbHMvQnl0ZUJ1ZmZlcic7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gJy4uL3V0aWxzL0RhdGVVdGlscyc7XG5pbXBvcnQgTWV0cmljc01hbmFnZXIgZnJvbSAnLi4vYW5hbHl0aWNzL21ldHJpY3MvTWV0cmljc01hbmFnZXInO1xuaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi91dGlscy9NYXRoVXRpbHMnO1xuXG5leHBvcnQgY29uc3QgU2Vzc2lvblRyYWNrZXJFdmVudHMgPSB7XG4gICAgTm9uZTogMHgwMCxcbiAgICBTdGFydDogMHgwMSxcbiAgICBTdG9wOiAweDAyLFxuICAgIFJlZGlyZWN0aW9uRW5kOiAweDAzLFxuICAgIEZpcnN0SW1hZ2U6IDB4MDQsXG4gICAgUGF1c2U6IDB4MDUsXG4gICAgUmVzdW1lOiAweDA2LFxuICAgIEJ1ZmZlcmluZ1N0YXJ0OiAweDA3LFxuICAgIFN0YWxsU3RhcnQ6IDB4MDgsXG4gICAgU3RhbGxTdG9wOiAweDA5LFxuICAgIFJlYnVmZmVyaW5nU3RhcnQ6IDB4MGEsXG4gICAgUmVidWZmZXJpbmdTdG9wOiAweDBiLFxuICAgIFNlZWs6IDB4MGMsXG4gICAgTGF5ZXJTd2l0Y2g6IDB4MGQsXG4gICAgQWRCcmVha1N0YXJ0OiAweDBlLFxuICAgIEFkQnJlYWtTdG9wOiAweDBmLFxuICAgIE5ldHdvcmtBdmFpbGFibGU6IDB4MTAsXG4gICAgTmV0d29ya0xvc3Q6IDB4MTEsXG4gICAgTXV0ZTogMHgxMixcbiAgICBVbm11dGU6IDB4MTMsXG4gICAgTXVsdGljYXN0OiAweDE0LFxuICAgIFVuaWNhc3Q6IDB4MTUsXG5cbiAgICBEYXRhU3VtbWFyeTogMHg5MCxcbiAgICBFbXB0eVN1bW1hcnk6IDB4OTFcbn07XG5cbmV4cG9ydCBjb25zdCBUWVBFU19XSVRIT1VUX0RBVEEgPSBbIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlZGlyZWN0aW9uRW5kLCBTZXNzaW9uVHJhY2tlckV2ZW50cy5QYXVzZSxcbiAgICBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZXN1bWUsIFNlc3Npb25UcmFja2VyRXZlbnRzLkJ1ZmZlcmluZ1N0YXJ0LCBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0YXJ0LFxuICAgIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RvcCwgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdGFydCwgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdG9wLCBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQsXG4gICAgU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0xvc3QsIFNlc3Npb25UcmFja2VyRXZlbnRzLk11dGUsIFNlc3Npb25UcmFja2VyRXZlbnRzLlVubXV0ZSwgU2Vzc2lvblRyYWNrZXJFdmVudHMuTXVsdGljYXN0LCBTZXNzaW9uVHJhY2tlckV2ZW50cy5VbmljYXN0XTtcbmV4cG9ydCBjb25zdCBUWVBFU19TVEFSVCA9IFtTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydF07XG5leHBvcnQgY29uc3QgVFlQRVNfV0lUSF9CSVRSQVRFID0gW1Nlc3Npb25UcmFja2VyRXZlbnRzLkxheWVyU3dpdGNoXTtcbmV4cG9ydCBjb25zdCBUWVBFU19XSVRIX0JJVFJBVEVfUE9TSVRJT04gPSBbU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZV07XG5leHBvcnQgY29uc3QgVFlQRVNfV0lUSF9QT1NJVElPTlNfU1RBUlRfRU5EID0gW1Nlc3Npb25UcmFja2VyRXZlbnRzLlNlZWtdO1xuZXhwb3J0IGNvbnN0IFRZUEVTX1dJVEhfU1RBVFVTX0NPREUgPSBbU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RvcF07XG5leHBvcnQgY29uc3QgVFlQRVNfV0lUSF9QUk9HUkVTUyA9IFtTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RvcF07XG5leHBvcnQgY29uc3QgVFlQRVNfV0lUSF9TVEFURSA9IFtTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlXTtcblxuY29uc3QgVEFHID0gJ0Jwa1Nlc3Npb25UcmFja2VyRXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2Vzc2lvblRyYWNrZXJFdmVudCB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgaWRcbiAgICAgKi9cbiAgICBldmVudElkO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgZGF0ZVxuICAgICAqL1xuICAgIGV2ZW50RGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGN1c3RvbSBkYXRhXG4gICAgICovXG4gICAgZXZlbnREYXRhO1xuXG4gICAgLyoqXG4gICAgICogSXMgYSBzdGFydC9zdG9wIGV2ZW50XG4gICAgICovXG4gICAgc3RhcnRTdG9wRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBldmVudCBpZFxuICAgICAqL1xuICAgIHN0YXJ0RXZlbnRJZDtcblxuICAgIC8qKlxuICAgICAqIFN0b3AgZXZlbnQgaWRcbiAgICAgKi9cbiAgICBzdG9wRXZlbnRJZDtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGlkIHRvIHNlZWtcbiAgICAgKiBJZiBmb3VuZCwgdHJhbnNmb3JtIHRoZSBmb3VuZCBldmVudCB3aXRoIHRoZSBkZWZpbmVkIHN0YXJ0IGV2ZW50XG4gICAgICpcbiAgICAgKiBCdWZmZXJpbmdTdGFydCA+IFJlYnVmZmVyaW5nU3RvcCA9PiBSZWJ1ZmZlcmluZ1N0YXJ0ID4gUmVidWZmZXJpbmdTdG9wXG4gICAgICogV2hlbiBSZWJ1ZmZlcmluZ1N0b3AgaXMgcHVzaGVkLCBpdCB3aWxsIHRyeSB0byBmaW5kIGEgQnVmZmVyaW5nU3RhcnQgYW5kIHRyYW5zZm9ybSBpdCB0byBSZWJ1ZmZlcmluZ1N0YXJ0XG4gICAgICovXG4gICAgdHJpZ2dlclN0YXJ0RXZlbnRJZDtcblxuICAgIC8qKlxuICAgICAqIElmIHByZXZpb3VzIGV2ZW50IGlzIHRoZSBzYW1lLCByZW1vdmUgcHJldmlvdXMgZXZlbnRcbiAgICAgKi9cbiAgICBrZWVwTGFzdE9ubHk7XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggZmlyc3QgZXZlbnQgZm91bmQgd2l0aCBpZFxuICAgICAqL1xuICAgIGF0dGFjaEV2ZW50SWQ7XG5cbiAgICAvKipcbiAgICAgKiBNYXggZHVyYXRpb24gYmV0d2VlbiBmb3VuZCBldmVudCBhbmQgY3VycmVudCBzdGFydCBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQ7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHN0YXJ0IGV2ZW50IGlmIGZvdW5kXG4gICAgICovXG4gICAgc3RhcnRFdmVudDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgc3RvcCBldmVudCBpZiBmb3VuZFxuICAgICAqL1xuICAgIHN0b3BFdmVudDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYXR0YWNoZWQgZXZlbnQgKHNldCBhdHRhY2hFdmVudElkKVxuICAgICAqIE9wdGlvbmFsOiBhdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0XG4gICAgICovXG4gICAgYXR0YWNoZWRFdmVudDtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGNvbXByZXNzZWRcbiAgICAgKiBFbmNvZGVyIGZsYWdcbiAgICAgKi9cbiAgICBjb21wcmVzc2VkO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgYnVmZmVyIGRhdGFcbiAgICAgKiBFbmNvZGVyIGJ1ZmZlclxuICAgICAqL1xuICAgIGNvbXByZXNzZWREYXRhO1xuXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLmV2ZW50SWQgPSB0eXBlO1xuICAgICAgICB0aGlzLmV2ZW50RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZXZlbnREYXRhID0ge307XG5cbiAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IDA7XG4gICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSAwO1xuICAgICAgICB0aGlzLnRyaWdnZXJTdGFydEV2ZW50SWQgPSAwO1xuICAgICAgICB0aGlzLmtlZXBMYXN0T25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50SWQgPSAwO1xuICAgICAgICB0aGlzLmF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQgPSAtMTtcbiAgICAgICAgdGhpcy5zdGFydEV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdG9wRXZlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmF0dGFjaGVkRXZlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmFkZERhdGFTaXplSW5UaW1lbGluZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY29tcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXByZXNzZWREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTWV0YWRhdGEoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNZXRhZGF0YSgpIHtcbiAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLk5vbmU7XG4gICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Ob25lO1xuICAgICAgICB0aGlzLnRyaWdnZXJTdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Ob25lO1xuICAgICAgICB0aGlzLmtlZXBMYXN0T25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Ob25lO1xuICAgICAgICB0aGlzLmF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQgPSAtMTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZXZlbnRJZCkge1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Ob25lOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YXJ0OlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlN0b3A7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGREYXRhU2l6ZUluVGltZWxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0b3A6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RvcDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWRpcmVjdGlvbkVuZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZTpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5rZWVwTGFzdE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlJlZGlyZWN0aW9uRW5kO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlBhdXNlOlxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZXN1bWU6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5QYXVzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVzdW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RhcnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdG9wOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdG9wO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLkJ1ZmZlcmluZ1N0YXJ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlYnVmZmVyaW5nU3RhcnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0b3A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdG9wOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdG9wO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLkJ1ZmZlcmluZ1N0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlNlZWs7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0ID0gTWV0cmljc01hbmFnZXIuTUFYX1RJTUVfQkVUV0VFTl9TRUVLX0FORF9SRUJVRkZFUklORztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RvcDtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TZWVrO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoTWF4RHVyYXRpb25CZWZvcmVTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuQnVmZmVyaW5nU3RhcnQ6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlNlZWs6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkxheWVyU3dpdGNoOlxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlOlxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrTG9zdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTXV0ZTpcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuVW5tdXRlOlxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdWx0aWNhc3Q6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlVuaWNhc3Q6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGF0YVNpemVJblRpbWVsaW5lID0gdHJ1ZTsvLyBuZXcgZXZlbnQgdW5rbm93biBieSBvbGQgYmthXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEV2ZW50TmFtZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmV2ZW50SWQpIHtcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1N0YXJ0JztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RvcDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1N0b3AnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWRpcmVjdGlvbkVuZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1JlZGlyZWN0aW9uRW5kJztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ZpcnN0SW1hZ2UnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5QYXVzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1BhdXNlJztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVzdW1lOlxuICAgICAgICAgICAgICAgIHJldHVybiAnUmVzdW1lJztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuQnVmZmVyaW5nU3RhcnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdCdWZmZXJpbmdTdGFydCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RhcnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTdGFsbFN0YXJ0JztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdG9wOlxuICAgICAgICAgICAgICAgIHJldHVybiAnU3RhbGxTdG9wJztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdGFydDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYnVmZmVyaW5nU3RhcnQnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0b3A6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdSZWJ1ZmZlcmluZ1N0b3AnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TZWVrOlxuICAgICAgICAgICAgICAgIHJldHVybiAnU2Vlayc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkxheWVyU3dpdGNoOlxuICAgICAgICAgICAgICAgIHJldHVybiAnTGF5ZXJTd2l0Y2gnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBZEJyZWFrU3RhcnQnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RvcDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FkQnJlYWtTdG9wJztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0F2YWlsYWJsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05ldHdvcmtBdmFpbGFibGUnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrTG9zdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05ldHdvcmtMb3N0JztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTXV0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ011dGUnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Vbm11dGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdVbm11dGUnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdWx0aWNhc3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdNdWx0aWNhc3QnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5VbmljYXN0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnVW5pY2FzdCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaXNTdGFydEV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFN0b3BFdmVudCAmJiB0aGlzLmV2ZW50SWQgPT09IHRoaXMuc3RhcnRFdmVudElkO1xuICAgIH1cblxuICAgIGlzU3RvcEV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFN0b3BFdmVudCAmJiB0aGlzLmV2ZW50SWQgPT09IHRoaXMuc3RvcEV2ZW50SWQ7XG4gICAgfVxuXG4gICAgYWRkRXZlbnREYXRhKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50RGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIHRoZSBjdXJyZW50IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qnl0ZUJ1ZmZlcn1cbiAgICAgKi9cbiAgICB0b0RhdGEocHJldmlvdXNFdmVudERhdGUpIHtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLmFicyh0aGlzLmV2ZW50RGF0ZSAtIHByZXZpb3VzRXZlbnREYXRlKSAvIDEwMDtcbiAgICAgICAgY29uc3QgZW1wdHlFdmVudENvdW50ID0gTWF0aFV0aWxzLmZsb29yKGR1cmF0aW9uIC8gNjU1MzUpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdEdXJhdGlvbiA9IGR1cmF0aW9uICUgNjU1MzU7XG5cbiAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnREYXRhKS5sZW5ndGggO1xuICAgICAgICBsZXQgY2FwYWNpdHkgPSBlbXB0eUV2ZW50Q291bnQgKiAzICsgMSArIDIgKyBkYXRhTGVuZ3RoICogMiArICh0aGlzLmFkZERhdGFTaXplSW5UaW1lbGluZSA/IDEgOiAwKTtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBCeXRlQnVmZmVyKGNhcGFjaXR5KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBlbXB0eUV2ZW50Q291bnQgOyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZSk7XG4gICAgICAgICAgICBidWZmZXIucHV0KDB4ZmYpO1xuICAgICAgICAgICAgYnVmZmVyLnB1dCgweGZmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1ZmZlci5wdXQodGhpcy5ldmVudElkKTtcbiAgICAgICAgYnVmZmVyLnB1dENoYXIocmVtYWluaW5nRHVyYXRpb24pOyAvLyBhZGQgZHVyYXRpb24gaW4gZGVjaXNlY29uZHNcbiAgICAgICAgaWYgKHRoaXMuYWRkRGF0YVNpemVJblRpbWVsaW5lKSB7Ly8gYWRkIGRhdGEgc2l6ZSBpbiBuYiBCeXRlcywgdGh1cyBia2EgY291bGQgaWdub3JlIHVua25vd24gZXZlbnQgb3IgZGF0YSBldmVudFxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhTGVuZ3RoICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZXZlbnRJZCkge1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtUeXBlID0gcGFyc2VJbnQodGhpcy5ldmVudERhdGFbJ25ldHdvcmtUeXBlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRlU3RhdGUgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsnbXV0ZVN0YXRlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihuZXR3b3JrVHlwZSk7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIobXV0ZVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RvcDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsnc3RhdHVzQ29kZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIoc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZToge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpdHJhdGVGaXJzdEltYWdlID0gcGFyc2VJbnQodGhpcy5ldmVudERhdGFbJ2JpdHJhdGUnXSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQodGhpcy5ldmVudERhdGFbJ3Bvc2l0aW9uJ10sIDEwKTtcblxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXRDaGFyKGJpdHJhdGVGaXJzdEltYWdlKTtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU2Vlazoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uU3RhcnQgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsncG9zaXRpb25TdGFydCddLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25FbmQgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsncG9zaXRpb25FbmQnXSwgMTApO1xuXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIocG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIocG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkxheWVyU3dpdGNoOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYml0cmF0ZUxheWVyU3dpdGNoID0gcGFyc2VJbnQodGhpcy5ldmVudERhdGFbJ2JpdHJhdGUnXSwgMTApO1xuXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIoYml0cmF0ZUxheWVyU3dpdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RvcDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gcGFyc2VJbnQodGhpcy5ldmVudERhdGFbJ3Byb2dyZXNzJ10sIDEwKTtcblxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXRDaGFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0F2YWlsYWJsZToge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtUeXBlID0gcGFyc2VJbnQodGhpcy5ldmVudERhdGFbJ3N0YXRlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihuZXR3b3JrVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIGZvcm1hdERhdGUodGltZXN0YW1wKSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aW1lc3RhbXApKTtcbiAgICB9XG5cbiAgICBwcmludCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJyAgIHwnKTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnICAg4pScLS0+ICcgKyB0aGlzLmdldEV2ZW50TmFtZSgpICsgJyAtPiAnICsgKHRoaXMuY29tcHJlc3NlZCA9PT0gdHJ1ZSA/ICdjb21wcmVzc2VkJyA6ICdub3QgY29tcHJlc3NlZCcpICsgJyAtPiAnICsgdGhpcy5ldmVudERhdGUpO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICcgICB8ICAgICAgZGF0ZTogJyArIHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmV2ZW50RGF0ZSkpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmV2ZW50RGF0YSkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJyAgIHwgICAgICAnICsga2V5ICsgJzogJyArIHRoaXMuZXZlbnREYXRhW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydEV2ZW50KCkgJiYgdGhpcy5zdG9wRXZlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICcgICB8ICAgICAgc3RvcCBldmVudDogJyArIHRoaXMuc3RvcEV2ZW50LmdldEV2ZW50TmFtZSgpICsgJyAnICsgdGhpcy5zdG9wRXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU3RvcEV2ZW50KCkgJiYgdGhpcy5zdGFydEV2ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnICAgfCAgICAgIHN0YXJ0IGV2ZW50OiAnICsgdGhpcy5zdGFydEV2ZW50LmdldEV2ZW50TmFtZSgpICsgJyAnICsgdGhpcy5zdGFydEV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdHRhY2hlZEV2ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnICAgfCAgICAgIGF0dGFjaGVkIGV2ZW50OiAnICsgdGhpcy5hdHRhY2hlZEV2ZW50LmdldEV2ZW50TmFtZSgpICsgJyAnICsgdGhpcy5hdHRhY2hlZEV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnROYW1lKCkgKyAnICgnICsgdGhpcy5mb3JtYXREYXRlKHRoaXMuZXZlbnREYXRlKSArICcpJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTZXNzaW9uVHJhY2tlckV2ZW50cyB9IGZyb20gJy4vU2Vzc2lvblRyYWNrZXJFdmVudCc7XG5pbXBvcnQge01ldHJpY3NCdWlsZGVyfSBmcm9tICcuLi9hbmFseXRpY3MvbWV0cmljcy9NZXRyaWNzJztcbmltcG9ydCBCeXRlQnVmZmVyIGZyb20gJy4uL3V0aWxzL0J5dGVCdWZmZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uVHJhY2tlclN1bW1hcnkge1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHNpemVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBCVUZGRVJfU0laRSA9IDI4O1xuXG4gICAgLyoqXG4gICAgICogVGltZWxpbmUgdG8gc3VtbWFyaXplZFxuICAgICAqL1xuICAgIHRpbWVsaW5lO1xuXG4gICAgLyoqXG4gICAgICogTWluIGluZGV4IGluIHRpbWVsaW5lXG4gICAgICovXG4gICAgbWluSW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBMYXN0IHJlZ2lzdGVyZWQgYml0cmF0ZSBiZWZvcmUgbWluSW5kZXhcbiAgICAgKi9cbiAgICBpbml0aWFsQml0cmF0ZTtcblxuICAgIC8qKlxuICAgICAqIFN1bW1hcnkgbWV0cmljc1xuICAgICAqL1xuICAgIGJ1aWxkZXI7XG5cbiAgICAvKipcbiAgICAgKiBTdW1tYXJ5IGR1cmF0aW9uXG4gICAgICovXG4gICAgc3VtbWFyeUR1cmF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogUGF1c2UgZHVyYXRpb25cbiAgICAgKi9cbiAgICBwYXVzZUR1cmF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogU3RvcmUgbmV0d29yayBhY3Rpdml0eSBkdXJpbmcgc3VtbWFyeSB0aW1lXG4gICAgICovXG4gICAgbmJOZXR3b3JrRGlzY29ubmVjdGVkO1xuICAgIG5iTmV0d29ya1dpZmk7XG4gICAgbmJOZXR3b3JrTW9iaWxlO1xuICAgIG5iTmV0d29ya0V0aGVybmV0O1xuICAgIGxhc3ROZXR3b3JrU3RhdGU7XG5cbiAgICAvKipcbiAgICAgKiBNdXRlIGFjdGl2aXR5IGR1cmluZyBzdW1tYXJ5XG4gICAgICovXG4gICAgbXV0ZUR1cmF0aW9uO1xuICAgIGxhc3RNdXRlU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aW1lbGluZSwgbWluSW5kZXgpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLm1pbkluZGV4ID0gbWluSW5kZXg7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsQml0cmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3VtbWFyeUR1cmF0aW9uID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZUR1cmF0aW9uID0gMDtcblxuICAgICAgICB0aGlzLm5iTmV0d29ya0Rpc2Nvbm5lY3RlZCA9IDA7XG4gICAgICAgIHRoaXMubmJOZXR3b3JrV2lmaSA9IDA7XG4gICAgICAgIHRoaXMubmJOZXR3b3JrTW9iaWxlID0gMDtcbiAgICAgICAgdGhpcy5uYk5ldHdvcmtFdGhlcm5ldCA9IDA7XG4gICAgICAgIHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLm11dGVEdXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubGFzdE11dGVTdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5taW5JbmRleCA7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnRpbWVsaW5lLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5ldmVudElkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5MYXllclN3aXRjaDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbEJpdHJhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsQml0cmF0ZSA9IHBhcnNlSW50KGV2ZW50LmV2ZW50RGF0YVsnYml0cmF0ZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5GaXJzdEltYWdlOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsQml0cmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxCaXRyYXRlID0gcGFyc2VJbnQoZXZlbnQuZXZlbnREYXRhWydiaXRyYXRlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0TmV0d29ya1N0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9IHBhcnNlSW50KGV2ZW50LmV2ZW50RGF0YVsnbmV0d29ya1R5cGUnXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RNdXRlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TXV0ZVN0YXRlID0gcGFyc2VJbnQoZXZlbnQuZXZlbnREYXRhWydtdXRlU3RhdGUnXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0F2YWlsYWJsZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPSBwYXJzZUludChldmVudC5ldmVudERhdGFbJ3N0YXRlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk5ldHdvcmtMb3N0OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0TmV0d29ya1N0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0TXV0ZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE11dGVTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Vbm11dGU6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RNdXRlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TXV0ZVN0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsQml0cmF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuaW5pdGlhbEJpdHJhdGUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbEJpdHJhdGUgPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0TmV0d29ya1N0YXRlID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RNdXRlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0TXV0ZVN0YXRlID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShtYXhJbmRleCkge1xuICAgICAgICBpZiAodGhpcy5taW5JbmRleCA+PSB0aGlzLnRpbWVsaW5lLmV2ZW50cy5sZW5ndGggfHwgbWF4SW5kZXggPj0gdGhpcy50aW1lbGluZS5ldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW5FdmVudCA9IHRoaXMudGltZWxpbmUuZXZlbnRzW3RoaXMubWluSW5kZXhdO1xuICAgICAgICBjb25zdCBtYXhFdmVudCA9IHRoaXMudGltZWxpbmUuZXZlbnRzW21heEluZGV4XTtcbiAgICAgICAgbGV0IGJpdHJhdGUgPSB0aGlzLmluaXRpYWxCaXRyYXRlO1xuICAgICAgICBsZXQgbGFzdExheWVyU3dpdGNoRGF0ZSA9IG1pbkV2ZW50LmV2ZW50RGF0ZTtcbiAgICAgICAgbGV0IGxhc3RNdXRlRGF0ZSA9ICh0aGlzLmxhc3RNdXRlU3RhdGUgPT09IDEgPyBtaW5FdmVudC5ldmVudERhdGUgOiAtMSk7IC8vIGlmIG11dGVkIGJlZm9yZSBzdW1tYXJ5LCBzdGFydCB0aGUgZHVyYXRpb24gZnJvbSB0aGUgZmlyc3QgZXZlbnRcbiAgICAgICAgbGV0IHBhdXNlZDtcbiAgICAgICAgbGV0IHN0YWxsaW5nO1xuICAgICAgICBsZXQgcmVidWZmZXJpbmc7XG5cbiAgICAgICAgLy8gUmVzZXQgbWV0cmljc1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgTWV0cmljc0J1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5RHVyYXRpb24gPSBtYXhFdmVudC5ldmVudERhdGUgLSBtaW5FdmVudC5ldmVudERhdGU7XG4gICAgICAgIHRoaXMucGF1c2VEdXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubmJOZXR3b3JrRGlzY29ubmVjdGVkID0gMDtcbiAgICAgICAgdGhpcy5uYk5ldHdvcmtXaWZpID0gMDtcbiAgICAgICAgdGhpcy5uYk5ldHdvcmtNb2JpbGUgPSAwO1xuICAgICAgICB0aGlzLm5iTmV0d29ya0V0aGVybmV0ID0gMDtcbiAgICAgICAgdGhpcy5tdXRlRHVyYXRpb24gPSAwO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBtZXRyaWNzIGJldHdlZW4gbWluSW5kZXggYW5kIG1heEluZGV4XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1pbkluZGV4IDsgaSA8PSBtYXhJbmRleCA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnRpbWVsaW5lLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5ldmVudElkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5QYXVzZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90IHBhdXNlZCBvciBmaXJzdCBwYXVzZSBldmVudFxuICAgICAgICAgICAgICAgICAgICBpZiAocGF1c2VkID09PSBmYWxzZSB8fCBwYXVzZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgc3RvcEV2ZW50IGZvdW5kICYmIHN0b3BFdmVudCBiZWZvcmUgbWF4SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wRXZlbnQgIT09IG51bGwgJiYgZXZlbnQuc3RvcEV2ZW50LmV2ZW50RGF0ZSA8PSBtYXhFdmVudC5ldmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlRHVyYXRpb24gKz0gZXZlbnQuc3RvcEV2ZW50LmV2ZW50RGF0ZSAtIGV2ZW50LmV2ZW50RGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZXN1bWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGZpcnN0IHBhdXNlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXVzZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZUR1cmF0aW9uICs9IGV2ZW50LmV2ZW50RGF0ZSAtIG1pbkV2ZW50LmV2ZW50RGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RhcnQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFsbGluZyA9PT0gZmFsc2UgfHwgc3RhbGxpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BFdmVudCAhPT0gbnVsbCAmJiBldmVudC5zdG9wRXZlbnQuZXZlbnREYXRlIDw9IG1heEV2ZW50LmV2ZW50RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRTdGFsbChldmVudC5zdG9wRXZlbnQuZXZlbnREYXRlIC0gZXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RvcDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWxsaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRTdGFsbChldmVudC5ldmVudERhdGUgLSBtaW5FdmVudC5ldmVudERhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0YXJ0OlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVidWZmZXJpbmcgPT09IGZhbHNlIHx8IHJlYnVmZmVyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wRXZlbnQgIT09IG51bGwgJiYgZXZlbnQuc3RvcEV2ZW50LmV2ZW50RGF0ZSA8PSBtYXhFdmVudC5ldmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUmVidWZmZXJpbmcoZXZlbnQuc3RvcEV2ZW50LmV2ZW50RGF0ZSAtIGV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1ZmZlcmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0b3A6XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWJ1ZmZlcmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUmVidWZmZXJpbmcoZXZlbnQuZXZlbnREYXRlIC0gbWluRXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTGF5ZXJTd2l0Y2g6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRMYXllclN3aXRjaCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGJpdHJhdGUgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoYml0cmF0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRUaW1lU3BlbnRQZXJMYXllcihiaXRyYXRlLCBldmVudC5ldmVudERhdGUgLSBsYXN0TGF5ZXJTd2l0Y2hEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGJpdHJhdGVcbiAgICAgICAgICAgICAgICAgICAgYml0cmF0ZSA9IHBhcnNlSW50KGV2ZW50LmV2ZW50RGF0YVsnYml0cmF0ZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RMYXllclN3aXRjaERhdGUgPSBldmVudC5ldmVudERhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPSBwYXJzZUludChldmVudC5ldmVudERhdGFbJ3N0YXRlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA+PSAxMCAmJiB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPCAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYk5ldHdvcmtXaWZpKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0TmV0d29ya1N0YXRlID49IDIwICYmIHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA8IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5iTmV0d29ya01vYmlsZSsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA+PSAzMCAmJiB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPCA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYk5ldHdvcmtFdGhlcm5ldCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrTG9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TmV0d29ya1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYk5ldHdvcmtEaXNjb25uZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk11dGU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE11dGVTdGF0ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgbGFzdE11dGVEYXRlID0gZXZlbnQuZXZlbnREYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuVW5tdXRlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNdXRlU3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE11dGVEYXRlICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRlRHVyYXRpb24gKz0gZXZlbnQuZXZlbnREYXRlIC0gbGFzdE11dGVEYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE11dGVEYXRlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIGxhc3QgYml0cmF0ZVxuICAgICAgICBpZiAoYml0cmF0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRUaW1lU3BlbnRQZXJMYXllcihiaXRyYXRlLCBtYXhFdmVudC5ldmVudERhdGUgLSBsYXN0TGF5ZXJTd2l0Y2hEYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2Nlc3MgbXV0ZSBkdXJhdGlvblxuICAgICAgICBpZiAobGFzdE11dGVEYXRlICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5tdXRlRHVyYXRpb24gKz0gbWF4RXZlbnQuZXZlbnREYXRlIC0gbGFzdE11dGVEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnVpbGQgbWV0cmljc1xuICAgICAgICB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBkYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5idWlsZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLkVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEJ5dGVCdWZmZXIoU2Vzc2lvblRyYWNrZXJTdW1tYXJ5LkJVRkZFUl9TSVpFKTtcbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHRoaXMuYnVpbGRlci5tZXRyaWNzO1xuXG4gICAgICAgIGJ1ZmZlci5wdXQoU2Vzc2lvblRyYWNrZXJFdmVudHMuRGF0YVN1bW1hcnkpXG4gICAgICAgICAgICAucHV0Q2hhcihNYXRoLnJvdW5kKHRoaXMuc3VtbWFyeUR1cmF0aW9uIC8gMTAwMCkpIC8vIHJvdW5kZWQgdG8gMSBzZWNcbiAgICAgICAgICAgIC5wdXQoU2Vzc2lvblRyYWNrZXJTdW1tYXJ5LkJVRkZFUl9TSVpFIC0gMiAtIDEgLSAxKSAvLyBkbyBub3QgY291bnQgaWQsIGR1cmF0aW9uLCBhbmQgc2l6ZSAodGhlIGN1cnJlbnQgYnl0ZSlcbiAgICAgICAgICAgIC5wdXRDaGFyKHRoaXMucGF1c2VEdXJhdGlvbiAvIDEwMCkgLy8gcm91bmRlZCB0byAwLjEgc2VjXG4gICAgICAgICAgICAucHV0KG1ldHJpY3Muc3RhbGxzTnVtYmVyKVxuICAgICAgICAgICAgLnB1dENoYXIobWV0cmljcy50b3RhbFN0YWxsc0R1cmF0aW9uIC8gMTAwKSAvLyByb3VuZGVkIHRvIDAuMSBzZWNcbiAgICAgICAgICAgIC5wdXQobWV0cmljcy5yZWJ1ZmZlcmluZ3NOdW1iZXIpXG4gICAgICAgICAgICAucHV0Q2hhcihtZXRyaWNzLnRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbiAvIDEwMCkgLy8gcm91bmRlZCB0byAwLjEgc2VjXG4gICAgICAgICAgICAucHV0KG1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlcilcbiAgICAgICAgICAgIC5wdXRDaGFyKG1ldHJpY3MubWluQml0cmF0ZSlcbiAgICAgICAgICAgIC5wdXRDaGFyKG1ldHJpY3MubWF4Qml0cmF0ZSlcbiAgICAgICAgICAgIC5wdXRDaGFyKG1ldHJpY3MuYXZlcmFnZUJpdHJhdGUpXG4gICAgICAgICAgICAucHV0KHRoaXMubmJOZXR3b3JrRGlzY29ubmVjdGVkKVxuICAgICAgICAgICAgLnB1dCh0aGlzLm5iTmV0d29ya1dpZmkpXG4gICAgICAgICAgICAucHV0KHRoaXMubmJOZXR3b3JrTW9iaWxlKVxuICAgICAgICAgICAgLnB1dCh0aGlzLm5iTmV0d29ya0V0aGVybmV0KVxuICAgICAgICAgICAgLnB1dENoYXIodGhpcy5sYXN0TmV0d29ya1N0YXRlKVxuICAgICAgICAgICAgLnB1dENoYXIoTWF0aC5yb3VuZCh0aGlzLm11dGVEdXJhdGlvbiAvIDEwMDApKVxuICAgICAgICAgICAgLnB1dCh0aGlzLmxhc3RNdXRlU3RhdGUpO1xuXG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1aWxkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICdubyBkYXRhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB0aGlzLmJ1aWxkZXIubWV0cmljcztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtbWFyeUR1cmF0aW9uICsgJywgJyArIHRoaXMucGF1c2VEdXJhdGlvbiArICcsICcgK1xuICAgICAgICAgICAgbWV0cmljcy5taW5CaXRyYXRlICsgJywgJyArIG1ldHJpY3MubWF4Qml0cmF0ZSArICcsICcgK1xuICAgICAgICAgICAgbWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyICsgJywgJyArIG1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgKyAnLCAnICtcbiAgICAgICAgICAgIG1ldHJpY3Muc3RhbGxzTnVtYmVyICsgJywgJyArIG1ldHJpY3MudG90YWxTdGFsbHNEdXJhdGlvbiArICcsICcgK1xuICAgICAgICAgICAgbWV0cmljcy5yZWJ1ZmZlcmluZ3NOdW1iZXIgKyAnLCAnICsgbWV0cmljcy50b3RhbFJlYnVmZmVyaW5nRHVyYXRpb24gKyAnLCAnICtcbiAgICAgICAgICAgIHRoaXMubmJOZXR3b3JrRGlzY29ubmVjdGVkICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLm5iTmV0d29ya1dpZmkgKyAnLCAnICtcbiAgICAgICAgICAgIHRoaXMubmJOZXR3b3JrTW9iaWxlICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLm5iTmV0d29ya0V0aGVybmV0ICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgKyAnLCAnICtcbiAgICAgICAgICAgIHRoaXMubXV0ZUR1cmF0aW9uICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLmxhc3RNdXRlU3RhdGU7XG5cbiAgICAgICAgLyogcmV0dXJuICdcXG57IHN1bW1hcnlEdXJhdGlvbjogJyArIHRoaXMuc3VtbWFyeUR1cmF0aW9uICsgJywgcGF1c2VEdXJhdGlvbjogJyArIHRoaXMucGF1c2VEdXJhdGlvbiArICcgfSwgXFxuJyArXG4gICAgICAgICAgICAneyBtaW5CaXRyYXRlOiAnICsgbWV0cmljcy5taW5CaXRyYXRlICsgJywgbWF4Qml0cmF0ZTogJyArIG1ldHJpY3MubWF4Qml0cmF0ZSArICcgfSwgXFxuJyArXG4gICAgICAgICAgICAneyBsYXllclN3aXRjaGVzTnVtYmVyOiAnICsgbWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyICsgJywgYXZlcmFnZUJpdHJhdGU6ICcgKyBtZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlICsgJyB9LCBcXG4nICtcbiAgICAgICAgICAgICd7IHN0YWxsc051bWJlcjogJyArIG1ldHJpY3Muc3RhbGxzTnVtYmVyICsgJywgdG90YWxTdGFsbHNEdXJhdGlvbjogJyArIG1ldHJpY3MudG90YWxTdGFsbHNEdXJhdGlvbiArICcgfSwgXFxuJyArXG4gICAgICAgICAgICAneyByZWJ1ZmZlcmluZ3NOdW1iZXI6ICcgKyBtZXRyaWNzLnJlYnVmZmVyaW5nc051bWJlciArICcsIHRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbjogJyArIG1ldHJpY3MudG90YWxSZWJ1ZmZlcmluZ0R1cmF0aW9uICsgJyB9JzsqL1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgU2Vzc2lvblRyYWNrZXJFdmVudHMsIFNlc3Npb25UcmFja2VyRXZlbnQsXG4gICAgVFlQRVNfU1RBUlQsIFRZUEVTX1dJVEhfQklUUkFURSwgVFlQRVNfV0lUSF9CSVRSQVRFX1BPU0lUSU9OLFxuICAgIFRZUEVTX1dJVEhfUE9TSVRJT05TX1NUQVJUX0VORCwgVFlQRVNfV0lUSF9QUk9HUkVTUywgVFlQRVNfV0lUSF9TVEFUVVNfQ09ERSwgVFlQRVNfV0lUSF9TVEFURSwgVFlQRVNfV0lUSE9VVF9EQVRBXG59IGZyb20gJy4vU2Vzc2lvblRyYWNrZXJFdmVudCc7XG5pbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IERhdGVVdGlscyBmcm9tICcuLi91dGlscy9EYXRlVXRpbHMnO1xuaW1wb3J0IHtTZXNzaW9uVHJhY2tlckVuY29kZXJ9IGZyb20gJy4vU2Vzc2lvblRyYWNrZXJFbmNvZGVyJztcblxuY29uc3QgVEFHID0gJ0Jwa1Nlc3Npb25UcmFja2VyVGltZWxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uVHJhY2tlclRpbWVsaW5lIHtcblxuICAgIHNlc3Npb247XG5cbiAgICAvKipcbiAgICAgKiBUaW1lbGluZSBzdGFydCBkYXRlXG4gICAgICovXG4gICAgc3RhcnREYXRlO1xuXG4gICAgLyoqXG4gICAgICogVGltZWxpbmUgc3RvcCBkYXRlXG4gICAgICovXG4gICAgc3RvcERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudHMgbGlzdFxuICAgICAqL1xuICAgIGV2ZW50cztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgd2hlbiBmaXJzdCBpbWFnZSBldmVudCBpcyBwdXNoZWQgd2l0aCBiaXRyYXRlXG4gICAgICogQml0cmF0ZSBpcyB1cGRhdGVkIHdoZW4gdGhlIG5leHQgYml0cmF0ZSBldmVudCBpcyBwdXNoZWRcbiAgICAgKi9cbiAgICBmaXJzdEltYWdlV2l0aG91dEJpdHJhdGVFdmVudDtcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSB0aW1lbGluZSBpbnRvIGJpbmFyeSBkYXRhXG4gICAgICovXG4gICAgZW5jb2RlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2VXaXRob3V0Qml0cmF0ZUV2ZW50ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgU2Vzc2lvblRyYWNrZXJFbmNvZGVyKHRoaXMpO1xuICAgIH1cblxuICAgIHB1c2hFdmVudCh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVHlwZSh0eXBlLCBUWVBFU19XSVRIT1VUX0RBVEEpKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY3JlYXRlRXZlbnQodHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50U3RhcnQodHlwZSwgbmV0d29ya1R5cGUsIG11dGVTdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1R5cGUodHlwZSwgVFlQRVNfU1RBUlQpKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY3JlYXRlRXZlbnQodHlwZSk7XG4gICAgICAgICAgICBldmVudC5hZGRFdmVudERhdGEoJ25ldHdvcmtUeXBlJywgbmV0d29ya1R5cGUpO1xuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdtdXRlU3RhdGUnLCBtdXRlU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRBZGRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoRXZlbnRCaXRyYXRlKHR5cGUsIGJpdHJhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUeXBlKHR5cGUsIFRZUEVTX1dJVEhfQklUUkFURSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudCh0eXBlKTtcblxuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdiaXRyYXRlJywgYml0cmF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0SW1hZ2VXaXRob3V0Qml0cmF0ZUV2ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEltYWdlV2l0aG91dEJpdHJhdGVFdmVudC5hZGRFdmVudERhdGEoJ2JpdHJhdGUnLCBiaXRyYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW1hZ2VXaXRob3V0Qml0cmF0ZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRBZGRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoRXZlbnRCaXRyYXRlUG9zaXRpb24odHlwZSwgYml0cmF0ZSwgcG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUeXBlKHR5cGUsIFRZUEVTX1dJVEhfQklUUkFURV9QT1NJVElPTikpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudCh0eXBlKTtcblxuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdiaXRyYXRlJywgYml0cmF0ZSk7XG4gICAgICAgICAgICBldmVudC5hZGRFdmVudERhdGEoJ3Bvc2l0aW9uJywgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZSAmJiBiaXRyYXRlIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW1hZ2VXaXRob3V0Qml0cmF0ZUV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50UG9zaXRpb25TdGFydEVuZCh0eXBlLCBwb3NpdGlvblN0YXJ0LCBwb3NpdGlvbkVuZCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1R5cGUodHlwZSwgVFlQRVNfV0lUSF9QT1NJVElPTlNfU1RBUlRfRU5EKSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNyZWF0ZUV2ZW50KHR5cGUpO1xuXG4gICAgICAgICAgICBldmVudC5hZGRFdmVudERhdGEoJ3Bvc2l0aW9uU3RhcnQnLCBwb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50RGF0YSgncG9zaXRpb25FbmQnLCBwb3NpdGlvbkVuZCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50U3RhdHVzQ29kZSh0eXBlLCBzdGF0dXNDb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVHlwZSh0eXBlLCBUWVBFU19XSVRIX1NUQVRVU19DT0RFKSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNyZWF0ZUV2ZW50KHR5cGUpO1xuXG4gICAgICAgICAgICBldmVudC5hZGRFdmVudERhdGEoJ3N0YXR1c0NvZGUnLCBzdGF0dXNDb2RlKTtcblxuICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRBZGRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoRXZlbnRQcm9ncmVzcyh0eXBlLCBwcm9ncmVzcykge1xuICAgICAgICBpZiAodGhpcy5jaGVja1R5cGUodHlwZSwgVFlQRVNfV0lUSF9QUk9HUkVTUykpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudCh0eXBlKTtcblxuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdwcm9ncmVzcycsIHByb2dyZXNzKTtcblxuICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRBZGRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoRXZlbnRTdGF0ZSh0eXBlLCBzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1R5cGUodHlwZSwgVFlQRVNfV0lUSF9TVEFURSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudCh0eXBlKTtcblxuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdzdGF0ZScsIHN0YXRlKTtcblxuICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRBZGRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVFdmVudCh0eXBlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IFNlc3Npb25UcmFja2VyRXZlbnQodHlwZSk7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0NyZWF0aW5nIGV2ZW50ICcgKyBldmVudC5nZXRFdmVudE5hbWUoKSArICcuLi4nKTtcblxuICAgICAgICAvLyBSZW1vdmUgb2xkIGV2ZW50cyB3aGVuIGtlZXAgbGFzdCBvbmx5IGVuYWJsZWRcbiAgICAgICAgdGhpcy5hcHBseUtlZXBMYXN0T25seShldmVudCk7XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50IHRvIHRoZSB0aW1lbGluZVxuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblxuICAgICAgICAvLyBVcGRhdGUgdGltZWxpbmUgcHJvcGVydGllcyAoc3RhcnQgZGF0ZSwgc3RvcCBkYXRlLi4uKVxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVsaW5lUHJvcGVydGllcyhldmVudCk7XG5cbiAgICAgICAgLy8gUmVjb25jaWxpYXRlIHN0YXJ0IHdpdGggc3RvcCBldmVudHNcbiAgICAgICAgdGhpcy5yZWNvbmNpbGlhdGVTdG9wV2l0aFN0YXJ0RXZlbnQoZXZlbnQpO1xuXG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGFuZCBhdHRhY2ggdGhlIGF0dGFjaGVkIGV2ZW50XG4gICAgICAgIC8vIHRoaXMuYXR0YWNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICBjaGVja1R5cGUodHlwZSwgdHlwZXMpIHtcbiAgICAgICAgaWYgKHR5cGVzLmluZGV4T2YodHlwZSkgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnQ2FuXFwndCBwdXNoIGV2ZW50IFxcJycgKyB0eXBlICsgJ1xcJyB0byB0aW1lbGluZSwgaW52YWxpZCBwYXJhbWV0ZXJzJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFwcGx5S2VlcExhc3RPbmx5KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZWVwTGFzdE9ubHkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lbGluZUV2ZW50ID0gdGhpcy5ldmVudHNbaV07XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBpZiB0aGUgZXZlbnQgaXMgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICBpZiAodGltZWxpbmVFdmVudC5ldmVudElkID09PSBldmVudC5ldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShpLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuY29kZXIub25FdmVudFVwZGF0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5hdHRhY2hFdmVudElkID4gU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZSkge1xuICAgICAgICAgICAgbGV0IG1pbkRhdGUgPSAtMTtcbiAgICAgICAgICAgIGlmIChldmVudC5zdGFydEV2ZW50ICE9PSBudWxsICYmIGV2ZW50LmF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbWluRGF0ZSA9IGV2ZW50LnN0YXJ0RXZlbnQuZXZlbnREYXRlIC0gZXZlbnQuYXR0YWNoTWF4RHVyYXRpb25CZWZvcmVTdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVsaW5lRXZlbnQgPSB0aGlzLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGlmICh0aW1lbGluZUV2ZW50LmV2ZW50SWQgPT09IGV2ZW50LmF0dGFjaEV2ZW50SWQgJiYgKG1pbkRhdGUgPT09IC0xIHx8IHRpbWVsaW5lRXZlbnQuZXZlbnREYXRlID49IG1pbkRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmF0dGFjaGVkRXZlbnQgPSB0aW1lbGluZUV2ZW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVGltZWxpbmVQcm9wZXJ0aWVzKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZXZlbnRJZCkge1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BEYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29uY2lsaWF0ZVN0b3BXaXRoU3RhcnRFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuaXNTdG9wRXZlbnQoKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVsaW5lRXZlbnQgPSB0aGlzLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBzdGFydCBldmVudCBvZiBcImV2ZW50XCJcbiAgICAgICAgICAgICAgICBpZiAodGltZWxpbmVFdmVudC5ldmVudElkID09PSBldmVudC5zdGFydEV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSBzdGFydCBhbmQgdGhlIHN0b3BcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVFdmVudC5zdG9wRXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRFdmVudCA9IHRpbWVsaW5lRXZlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSB0cmlnZ2VyIHN0YXJ0IGV2ZW50IG9mIFwiZXZlbnRcIlxuICAgICAgICAgICAgICAgIGlmICh0aW1lbGluZUV2ZW50LmV2ZW50SWQgPT09IGV2ZW50LnRyaWdnZXJTdGFydEV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIHRoZSBzdGFydCBldmVudCB0byBjb3JyZXNwb25kIHRvIHRoZSBzdG9wIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lRXZlbnQuZXZlbnRJZCA9IGV2ZW50LnN0YXJ0RXZlbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVFdmVudC5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lRXZlbnQuc3RhcnRFdmVudElkID0gZXZlbnQuc3RhcnRFdmVudElkO1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZUV2ZW50LnN0b3BFdmVudElkID0gZXZlbnQuc3RvcEV2ZW50SWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV2ZW50IGlkIGluIGVuY29kZWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZWxpbmVFdmVudC5jb21wcmVzc2VkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lbGluZUV2ZW50LmNvbXByZXNzZWREYXRhLnNldCh0aW1lbGluZUV2ZW50LmV2ZW50SWQsIDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuY29kZXIub25FdmVudFVwZGF0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc29jaWF0ZSB0aGUgc3RhcnQgYW5kIHRoZSBzdG9wXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lRXZlbnQuc3RvcEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0RXZlbnQgPSB0aW1lbGluZUV2ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0KG5ldHdvcmtUeXBlLCBtdXRlU3RhdGUpIHtcbiAgICAgICAgdGhpcy5wdXNoRXZlbnRTdGFydChTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydCwgbmV0d29ya1R5cGUsIG11dGVTdGF0ZSk7XG4gICAgfVxuXG4gICAgb25SZWRpcmVjdGlvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5wdXNoRXZlbnQoU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVkaXJlY3Rpb25FbmQpO1xuICAgIH1cblxuICAgIG9uRmlyc3RJbWFnZShiaXRyYXRlLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50Qml0cmF0ZVBvc2l0aW9uKFNlc3Npb25UcmFja2VyRXZlbnRzLkZpcnN0SW1hZ2UsIGJpdHJhdGUsIHN0YXJ0UG9zaXRpb24pO1xuICAgIH1cblxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50U3RhdHVzQ29kZShTZXNzaW9uVHJhY2tlckV2ZW50cy5TdG9wLCBzdGF0dXNDb2RlKTtcblxuICAgICAgICAvLyB0aGlzLnByaW50KCk7XG4gICAgfVxuXG4gICAgLy8gKioqKiBBUFBTdGF0ZU1hbmFnZXIgZXZlbnRzICoqKipcblxuICAgIG9uRm9yZWdyb3VuZCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uRm9yZWdyb3VuZCBidXQgaWdub3JlZCcpO1xuICAgIH1cblxuICAgIG9uQmFja2dyb3VuZCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uQmFja2dyb3VuZCBidXQgaWdub3JlZCcpO1xuICAgIH1cblxuICAgIG9uTmV0d29ya0F2YWlsYWJsZShuZXR3b3JrVHlwZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnUmVjZWl2ZWQgZXZlbnQgb25OZXR3b3JrQXZhaWxhYmxlIHR5cGU6JyArIG5ldHdvcmtUeXBlKTtcbiAgICAgICAgdGhpcy5wdXNoRXZlbnRTdGF0ZShTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlLCBuZXR3b3JrVHlwZSk7XG4gICAgfVxuXG4gICAgb25OZXR3b3JrTG9zdCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uTmV0d29ya0xvc3QnKTtcbiAgICAgICAgdGhpcy5wdXNoRXZlbnQoU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0xvc3QpO1xuICAgIH1cblxuICAgIG9uTXV0ZSgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uTXV0ZScpO1xuICAgICAgICB0aGlzLnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlKTtcbiAgICB9XG5cbiAgICBvblVubXV0ZSgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uVW5tdXRlJyk7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlVubXV0ZSk7XG4gICAgfVxuXG4gICAgb25NdWx0aWNhc3RVc2VkKCkge1xuICAgICAgICB0aGlzLnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5NdWx0aWNhc3QpO1xuICAgIH1cblxuICAgIG9uVW5pY2FzdFVzZWQoKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlVuaWNhc3QpO1xuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuY29kZXIucHJvY2VzcygpO1xuICAgIH1cblxuICAgIGZvcm1hdERhdGUodGltZXN0YW1wKSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aW1lc3RhbXApKTtcbiAgICB9XG5cbiAgICBwcmludCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ1RpbWVsaW5lIChzdGFydERhdGU6JyArIHRoaXMuZm9ybWF0RGF0ZSh0aGlzLnN0YXJ0RGF0ZSkgKyAnLCBzdG9wRGF0ZTonICsgdGhpcy5mb3JtYXREYXRlKHRoaXMuc3RvcERhdGUpICsgJyknKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbaV0ucHJpbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZlbnRzW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcsICcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi9NYXRoVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCeXRlQnVmZmVyIHtcbiAgICBzdGF0aWMgRU1QVFkgPSBuZXcgdGhpcygwKTtcblxuICAgIGluZGV4O1xuICAgIGJ1ZmZlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhcGFjaXR5KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGNhcGFjaXR5KTtcbiAgICB9XG5cbiAgICBwdXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1dENoYXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9ICh2YWx1ZSAmIDB4ZmYwMCkgPj4gODtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9ICh2YWx1ZSAmIDB4MDBmZik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyogcHV0VGltZXN0YW1wKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuaW5kZXgrK10gPSAodmFsdWUgJiAweGZmMDAwMCkgPj4gMTY7XG4gICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuaW5kZXgrK10gPSAodmFsdWUgJiAweDAwZmYwMCkgPj4gODtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9ICh2YWx1ZSAmIDB4MDAwMGZmKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9Ki9cblxuICAgIC8qIHB1dEFycmF5KGFycmF5KSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPj0gdGhpcy5pbmRleCArIGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0KGFycmF5LCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSovXG5cbiAgICBwdXRCeXRlQnVmZmVyKGJ5dGVCdWZmZXIsIGxlbmd0aCA9IGJ5dGVCdWZmZXIuYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBieXRlQnVmZmVyLmJ1ZmZlcjtcblxuICAgICAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoID49IHRoaXMuaW5kZXggKyBsZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnNldChidWZmZXIsIHRoaXMuaW5kZXgpOyAvLyBubyBuZWVkIHRvIHVzZSBidWZmZXIuc3ViYXJyYXkoMCwgbGVuZ3RoKSBiZWNhdXNlIGluZGV4IGlzIGluY3JlbWVudCBieSBsZW5ndGhcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gbGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyogaW5jcmVtZW50KGluZGV4KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4XSsrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0qL1xuXG4gICAgc2V0KHZhbHVlLCBpbmRleCkge1xuICAgICAgICB0aGlzLmJ1ZmZlcltpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKiBzZXRDaGFyKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB0aGlzLmJ1ZmZlcltpbmRleF0gPSAodmFsdWUgJiAweGZmMDApID4+IDg7XG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4ICsgMV0gPSAodmFsdWUgJiAweDAwZmYpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0qL1xuXG4gICAgLyogc2V0VGltZXN0YW1wKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB0aGlzLmJ1ZmZlcltpbmRleF0gPSAodmFsdWUgJiAweGZmMDAwMCkgPj4gMTY7XG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4ICsgMV0gPSAodmFsdWUgJiAweDAwZmYwMCkgPj4gODtcbiAgICAgICAgdGhpcy5idWZmZXJbaW5kZXggKyAyXSA9ICh2YWx1ZSAmIDB4MDAwMGZmKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9Ki9cblxuICAgIC8qIHNoaWZ0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyLmNvcHlXaXRoaW4oaW5kZXggKyAxLCBpbmRleCk7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9Ki9cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG5cbiAgICBiYXNlNjQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoVXRpbHMuYnVmZmVyVG9CYXNlNjQodGhpcyk7XG4gICAgfVxuXG4gICAgLyogYmFzZTY0T2xkKCkge1xuICAgICAgICByZXR1cm4gTWF0aFV0aWxzLmJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB0aGlzLmJ1ZmZlcikpO1xuICAgIH0gKi9cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gICAgfVxuXG4gICAgY2FwYWNpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVtYWluaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXBhY2l0eSgpIC0gdGhpcy5sZW5ndGgoKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhVdGlscy5idWZmZXJUb1N0cmluZyh0aGlzLmJ1ZmZlciwgdGhpcy5pbmRleCkgKyAnKGxlbmd0aDonICsgdGhpcy5sZW5ndGgoKSArICcpJztcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RVdGlscyB7XG4gICAgLyogc3RhdGljIGdldE1ldGhvZHMob2JqKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZpbHRlcihrZXkgPT4gdHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKFsnY2FsbGVyJywgJ2NhbGxlZScsICdhcmd1bWVudHMnXS5pbmRleE9mKHByb3BlcnRpZXNbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gb2JqW3Byb3BlcnRpZXNbaV1dO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2gocHJvcGVydGllc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgfSovXG5cbiAgICBzdGF0aWMgaGFzTWV0aG9kcyhvYmplY3QsIG1ldGhvZHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtuYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qIHN0YXRpYyBoYXNUeXBlT3JOdWxsKG9iamVjdCwgdHlwZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gdHlwZSB8fCBvYmplY3QgPT09IG51bGw7XG4gICAgfSovXG5cbiAgICBzdGF0aWMgY291bnQob2JqZWN0LCBjb25kaXRpb24pIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihwcm9wZXJ0eSwgdmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby10eXBlZC1hcnJheXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIERhdGFWaWV3ICE9ICd1bmRlZmluZWQnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgSW50OEFycmF5ID0gZ2xvYmFsLkludDhBcnJheTtcbnZhciBJbnQ4QXJyYXlQcm90b3R5cGUgPSBJbnQ4QXJyYXkgJiYgSW50OEFycmF5LnByb3RvdHlwZTtcbnZhciBVaW50OENsYW1wZWRBcnJheSA9IGdsb2JhbC5VaW50OENsYW1wZWRBcnJheTtcbnZhciBVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSA9IFVpbnQ4Q2xhbXBlZEFycmF5ICYmIFVpbnQ4Q2xhbXBlZEFycmF5LnByb3RvdHlwZTtcbnZhciBUeXBlZEFycmF5ID0gSW50OEFycmF5ICYmIGdldFByb3RvdHlwZU9mKEludDhBcnJheSk7XG52YXIgVHlwZWRBcnJheVByb3RvdHlwZSA9IEludDhBcnJheVByb3RvdHlwZSAmJiBnZXRQcm90b3R5cGVPZihJbnQ4QXJyYXlQcm90b3R5cGUpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgVFlQRURfQVJSQVlfVEFHID0gdWlkKCdUWVBFRF9BUlJBWV9UQUcnKTtcbnZhciBUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUiA9ICdUeXBlZEFycmF5Q29uc3RydWN0b3InO1xuLy8gRml4aW5nIG5hdGl2ZSB0eXBlZCBhcnJheXMgaW4gT3BlcmEgUHJlc3RvIGNyYXNoZXMgdGhlIGJyb3dzZXIsIHNlZSAjNTk1XG52YXIgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IE5BVElWRV9BUlJBWV9CVUZGRVIgJiYgISFzZXRQcm90b3R5cGVPZiAmJiBjbGFzc29mKGdsb2JhbC5vcGVyYSkgIT09ICdPcGVyYSc7XG52YXIgVFlQRURfQVJSQVlfVEFHX1JFUVVJUkVEID0gZmFsc2U7XG52YXIgTkFNRSwgQ29uc3RydWN0b3IsIFByb3RvdHlwZTtcblxudmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0ID0ge1xuICBJbnQ4QXJyYXk6IDEsXG4gIFVpbnQ4QXJyYXk6IDEsXG4gIFVpbnQ4Q2xhbXBlZEFycmF5OiAxLFxuICBJbnQxNkFycmF5OiAyLFxuICBVaW50MTZBcnJheTogMixcbiAgSW50MzJBcnJheTogNCxcbiAgVWludDMyQXJyYXk6IDQsXG4gIEZsb2F0MzJBcnJheTogNCxcbiAgRmxvYXQ2NEFycmF5OiA4XG59O1xuXG52YXIgQmlnSW50QXJyYXlDb25zdHJ1Y3RvcnNMaXN0ID0ge1xuICBCaWdJbnQ2NEFycmF5OiA4LFxuICBCaWdVaW50NjRBcnJheTogOFxufTtcblxudmFyIGlzVmlldyA9IGZ1bmN0aW9uIGlzVmlldyhpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGZhbHNlO1xuICB2YXIga2xhc3MgPSBjbGFzc29mKGl0KTtcbiAgcmV0dXJuIGtsYXNzID09PSAnRGF0YVZpZXcnXG4gICAgfHwgaGFzT3duKFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0LCBrbGFzcylcbiAgICB8fCBoYXNPd24oQmlnSW50QXJyYXlDb25zdHJ1Y3RvcnNMaXN0LCBrbGFzcyk7XG59O1xuXG52YXIgZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZU9mKGl0KTtcbiAgaWYgKCFpc09iamVjdChwcm90bykpIHJldHVybjtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm90byk7XG4gIHJldHVybiAoc3RhdGUgJiYgaGFzT3duKHN0YXRlLCBUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUikpID8gc3RhdGVbVFlQRURfQVJSQVlfQ09OU1RSVUNUT1JdIDogZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKHByb3RvKTtcbn07XG5cbnZhciBpc1R5cGVkQXJyYXkgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBmYWxzZTtcbiAgdmFyIGtsYXNzID0gY2xhc3NvZihpdCk7XG4gIHJldHVybiBoYXNPd24oVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QsIGtsYXNzKVxuICAgIHx8IGhhc093bihCaWdJbnRBcnJheUNvbnN0cnVjdG9yc0xpc3QsIGtsYXNzKTtcbn07XG5cbnZhciBhVHlwZWRBcnJheSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNUeXBlZEFycmF5KGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGEgdHlwZWQgYXJyYXknKTtcbn07XG5cbnZhciBhVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKEMpIHtcbiAgaWYgKGlzQ2FsbGFibGUoQykgJiYgKCFzZXRQcm90b3R5cGVPZiB8fCBpc1Byb3RvdHlwZU9mKFR5cGVkQXJyYXksIEMpKSkgcmV0dXJuIEM7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IodHJ5VG9TdHJpbmcoQykgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yJyk7XG59O1xuXG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IGZ1bmN0aW9uIChLRVksIHByb3BlcnR5LCBmb3JjZWQsIG9wdGlvbnMpIHtcbiAgaWYgKCFERVNDUklQVE9SUykgcmV0dXJuO1xuICBpZiAoZm9yY2VkKSBmb3IgKHZhciBBUlJBWSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgIHZhciBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxbQVJSQVldO1xuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgaGFzT3duKFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIEtFWSkpIHRyeSB7XG4gICAgICBkZWxldGUgVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZVtLRVldO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBvbGQgV2ViS2l0IGJ1ZyAtIHNvbWUgbWV0aG9kcyBhcmUgbm9uLWNvbmZpZ3VyYWJsZVxuICAgICAgdHJ5IHtcbiAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZVtLRVldID0gcHJvcGVydHk7XG4gICAgICB9IGNhdGNoIChlcnJvcjIpIHsgLyogZW1wdHkgKi8gfVxuICAgIH1cbiAgfVxuICBpZiAoIVR5cGVkQXJyYXlQcm90b3R5cGVbS0VZXSB8fCBmb3JjZWQpIHtcbiAgICBkZWZpbmVCdWlsdEluKFR5cGVkQXJyYXlQcm90b3R5cGUsIEtFWSwgZm9yY2VkID8gcHJvcGVydHlcbiAgICAgIDogTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyAmJiBJbnQ4QXJyYXlQcm90b3R5cGVbS0VZXSB8fCBwcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG5cbnZhciBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kID0gZnVuY3Rpb24gKEtFWSwgcHJvcGVydHksIGZvcmNlZCkge1xuICB2YXIgQVJSQVksIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbiAgaWYgKCFERVNDUklQVE9SUykgcmV0dXJuO1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICBpZiAoZm9yY2VkKSBmb3IgKEFSUkFZIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxbQVJSQVldO1xuICAgICAgaWYgKFR5cGVkQXJyYXlDb25zdHJ1Y3RvciAmJiBoYXNPd24oVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBLRVkpKSB0cnkge1xuICAgICAgICBkZWxldGUgVHlwZWRBcnJheUNvbnN0cnVjdG9yW0tFWV07XG4gICAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgfVxuICAgIGlmICghVHlwZWRBcnJheVtLRVldIHx8IGZvcmNlZCkge1xuICAgICAgLy8gVjggfiBDaHJvbWUgNDktNTAgYCVUeXBlZEFycmF5JWAgbWV0aG9kcyBhcmUgbm9uLXdyaXRhYmxlIG5vbi1jb25maWd1cmFibGVcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVCdWlsdEluKFR5cGVkQXJyYXksIEtFWSwgZm9yY2VkID8gcHJvcGVydHkgOiBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTICYmIFR5cGVkQXJyYXlbS0VZXSB8fCBwcm9wZXJ0eSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfVxuICBmb3IgKEFSUkFZIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZ2xvYmFsW0FSUkFZXTtcbiAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmICghVHlwZWRBcnJheUNvbnN0cnVjdG9yW0tFWV0gfHwgZm9yY2VkKSkge1xuICAgICAgZGVmaW5lQnVpbHRJbihUeXBlZEFycmF5Q29uc3RydWN0b3IsIEtFWSwgcHJvcGVydHkpO1xuICAgIH1cbiAgfVxufTtcblxuZm9yIChOQU1FIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gIENvbnN0cnVjdG9yID0gZ2xvYmFsW05BTUVdO1xuICBQcm90b3R5cGUgPSBDb25zdHJ1Y3RvciAmJiBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIGlmIChQcm90b3R5cGUpIGVuZm9yY2VJbnRlcm5hbFN0YXRlKFByb3RvdHlwZSlbVFlQRURfQVJSQVlfQ09OU1RSVUNUT1JdID0gQ29uc3RydWN0b3I7XG4gIGVsc2UgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IGZhbHNlO1xufVxuXG5mb3IgKE5BTUUgaW4gQmlnSW50QXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gIENvbnN0cnVjdG9yID0gZ2xvYmFsW05BTUVdO1xuICBQcm90b3R5cGUgPSBDb25zdHJ1Y3RvciAmJiBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIGlmIChQcm90b3R5cGUpIGVuZm9yY2VJbnRlcm5hbFN0YXRlKFByb3RvdHlwZSlbVFlQRURfQVJSQVlfQ09OU1RSVUNUT1JdID0gQ29uc3RydWN0b3I7XG59XG5cbi8vIFdlYktpdCBidWcgLSB0eXBlZCBhcnJheXMgY29uc3RydWN0b3JzIHByb3RvdHlwZSBpcyBPYmplY3QucHJvdG90eXBlXG5pZiAoIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgfHwgIWlzQ2FsbGFibGUoVHlwZWRBcnJheSkgfHwgVHlwZWRBcnJheSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3cgLS0gc2FmZVxuICBUeXBlZEFycmF5ID0gZnVuY3Rpb24gVHlwZWRBcnJheSgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9O1xuICBpZiAoTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUykgZm9yIChOQU1FIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gICAgaWYgKGdsb2JhbFtOQU1FXSkgc2V0UHJvdG90eXBlT2YoZ2xvYmFsW05BTUVdLCBUeXBlZEFycmF5KTtcbiAgfVxufVxuXG5pZiAoIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgfHwgIVR5cGVkQXJyYXlQcm90b3R5cGUgfHwgVHlwZWRBcnJheVByb3RvdHlwZSA9PT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5LnByb3RvdHlwZTtcbiAgaWYgKE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MpIGZvciAoTkFNRSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgIGlmIChnbG9iYWxbTkFNRV0pIHNldFByb3RvdHlwZU9mKGdsb2JhbFtOQU1FXS5wcm90b3R5cGUsIFR5cGVkQXJyYXlQcm90b3R5cGUpO1xuICB9XG59XG5cbi8vIFdlYktpdCBidWcgLSBvbmUgbW9yZSBvYmplY3QgaW4gVWludDhDbGFtcGVkQXJyYXkgcHJvdG90eXBlIGNoYWluXG5pZiAoTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyAmJiBnZXRQcm90b3R5cGVPZihVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSkgIT09IFR5cGVkQXJyYXlQcm90b3R5cGUpIHtcbiAgc2V0UHJvdG90eXBlT2YoVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUsIFR5cGVkQXJyYXlQcm90b3R5cGUpO1xufVxuXG5pZiAoREVTQ1JJUFRPUlMgJiYgIWhhc093bihUeXBlZEFycmF5UHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICBUWVBFRF9BUlJBWV9UQUdfUkVRVUlSRUQgPSB0cnVlO1xuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoVHlwZWRBcnJheVByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpc09iamVjdCh0aGlzKSA/IHRoaXNbVFlQRURfQVJSQVlfVEFHXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIGlmIChnbG9iYWxbTkFNRV0pIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsW05BTUVdLCBUWVBFRF9BUlJBWV9UQUcsIE5BTUUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTOiBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTLFxuICBUWVBFRF9BUlJBWV9UQUc6IFRZUEVEX0FSUkFZX1RBR19SRVFVSVJFRCAmJiBUWVBFRF9BUlJBWV9UQUcsXG4gIGFUeXBlZEFycmF5OiBhVHlwZWRBcnJheSxcbiAgYVR5cGVkQXJyYXlDb25zdHJ1Y3RvcjogYVR5cGVkQXJyYXlDb25zdHJ1Y3RvcixcbiAgZXhwb3J0VHlwZWRBcnJheU1ldGhvZDogZXhwb3J0VHlwZWRBcnJheU1ldGhvZCxcbiAgZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZDogZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCxcbiAgZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yOiBnZXRUeXBlZEFycmF5Q29uc3RydWN0b3IsXG4gIGlzVmlldzogaXNWaWV3LFxuICBpc1R5cGVkQXJyYXk6IGlzVHlwZWRBcnJheSxcbiAgVHlwZWRBcnJheTogVHlwZWRBcnJheSxcbiAgVHlwZWRBcnJheVByb3RvdHlwZTogVHlwZWRBcnJheVByb3RvdHlwZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBOQVRJVkVfQVJSQVlfQlVGRkVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBGdW5jdGlvbk5hbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXgnKTtcbnZhciBmcm91bmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC1mcm91bmQnKTtcbnZhciBJRUVFNzU0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llZWU3NTQnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgYXJyYXlGaWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZpbGwnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlLXNpbXBsZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSBGdW5jdGlvbk5hbWUuUFJPUEVSO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gRnVuY3Rpb25OYW1lLkNPTkZJR1VSQUJMRTtcbnZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xudmFyIERBVEFfVklFVyA9ICdEYXRhVmlldyc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgV1JPTkdfTEVOR1RIID0gJ1dyb25nIGxlbmd0aCc7XG52YXIgV1JPTkdfSU5ERVggPSAnV3JvbmcgaW5kZXgnO1xudmFyIGdldEludGVybmFsQXJyYXlCdWZmZXJTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKEFSUkFZX0JVRkZFUik7XG52YXIgZ2V0SW50ZXJuYWxEYXRhVmlld1N0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoREFUQV9WSUVXKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgTmF0aXZlQXJyYXlCdWZmZXIgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXTtcbnZhciAkQXJyYXlCdWZmZXIgPSBOYXRpdmVBcnJheUJ1ZmZlcjtcbnZhciBBcnJheUJ1ZmZlclByb3RvdHlwZSA9ICRBcnJheUJ1ZmZlciAmJiAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXTtcbnZhciAkRGF0YVZpZXcgPSBnbG9iYWxbREFUQV9WSUVXXTtcbnZhciBEYXRhVmlld1Byb3RvdHlwZSA9ICREYXRhVmlldyAmJiAkRGF0YVZpZXdbUFJPVE9UWVBFXTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcbnZhciBmaWxsID0gdW5jdXJyeVRoaXMoYXJyYXlGaWxsKTtcbnZhciByZXZlcnNlID0gdW5jdXJyeVRoaXMoW10ucmV2ZXJzZSk7XG5cbnZhciBwYWNrSUVFRTc1NCA9IElFRUU3NTQucGFjaztcbnZhciB1bnBhY2tJRUVFNzU0ID0gSUVFRTc1NC51bnBhY2s7XG5cbnZhciBwYWNrSW50OCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIFtudW1iZXIgJiAweEZGXTtcbn07XG5cbnZhciBwYWNrSW50MTYgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHJldHVybiBbbnVtYmVyICYgMHhGRiwgbnVtYmVyID4+IDggJiAweEZGXTtcbn07XG5cbnZhciBwYWNrSW50MzIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHJldHVybiBbbnVtYmVyICYgMHhGRiwgbnVtYmVyID4+IDggJiAweEZGLCBudW1iZXIgPj4gMTYgJiAweEZGLCBudW1iZXIgPj4gMjQgJiAweEZGXTtcbn07XG5cbnZhciB1bnBhY2tJbnQzMiA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlclszXSA8PCAyNCB8IGJ1ZmZlclsyXSA8PCAxNiB8IGJ1ZmZlclsxXSA8PCA4IHwgYnVmZmVyWzBdO1xufTtcblxudmFyIHBhY2tGbG9hdDMyID0gZnVuY3Rpb24gKG51bWJlcikge1xuICByZXR1cm4gcGFja0lFRUU3NTQoZnJvdW5kKG51bWJlciksIDIzLCA0KTtcbn07XG5cbnZhciBwYWNrRmxvYXQ2NCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KG51bWJlciwgNTIsIDgpO1xufTtcblxudmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uIChDb25zdHJ1Y3Rvciwga2V5LCBnZXRJbnRlcm5hbFN0YXRlKSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihDb25zdHJ1Y3RvcltQUk9UT1RZUEVdLCBrZXksIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKVtrZXldO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24gKHZpZXcsIGNvdW50LCBpbmRleCwgaXNMaXR0bGVFbmRpYW4pIHtcbiAgdmFyIHN0b3JlID0gZ2V0SW50ZXJuYWxEYXRhVmlld1N0YXRlKHZpZXcpO1xuICB2YXIgaW50SW5kZXggPSB0b0luZGV4KGluZGV4KTtcbiAgdmFyIGJvb2xJc0xpdHRsZUVuZGlhbiA9ICEhaXNMaXR0bGVFbmRpYW47XG4gIGlmIChpbnRJbmRleCArIGNvdW50ID4gc3RvcmUuYnl0ZUxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuICB2YXIgYnl0ZXMgPSBzdG9yZS5ieXRlcztcbiAgdmFyIHN0YXJ0ID0gaW50SW5kZXggKyBzdG9yZS5ieXRlT2Zmc2V0O1xuICB2YXIgcGFjayA9IGFycmF5U2xpY2UoYnl0ZXMsIHN0YXJ0LCBzdGFydCArIGNvdW50KTtcbiAgcmV0dXJuIGJvb2xJc0xpdHRsZUVuZGlhbiA/IHBhY2sgOiByZXZlcnNlKHBhY2spO1xufTtcblxudmFyIHNldCA9IGZ1bmN0aW9uICh2aWV3LCBjb3VudCwgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbikge1xuICB2YXIgc3RvcmUgPSBnZXRJbnRlcm5hbERhdGFWaWV3U3RhdGUodmlldyk7XG4gIHZhciBpbnRJbmRleCA9IHRvSW5kZXgoaW5kZXgpO1xuICB2YXIgcGFjayA9IGNvbnZlcnNpb24oK3ZhbHVlKTtcbiAgdmFyIGJvb2xJc0xpdHRsZUVuZGlhbiA9ICEhaXNMaXR0bGVFbmRpYW47XG4gIGlmIChpbnRJbmRleCArIGNvdW50ID4gc3RvcmUuYnl0ZUxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuICB2YXIgYnl0ZXMgPSBzdG9yZS5ieXRlcztcbiAgdmFyIHN0YXJ0ID0gaW50SW5kZXggKyBzdG9yZS5ieXRlT2Zmc2V0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIGJ5dGVzW3N0YXJ0ICsgaV0gPSBwYWNrW2Jvb2xJc0xpdHRsZUVuZGlhbiA/IGkgOiBjb3VudCAtIGkgLSAxXTtcbn07XG5cbmlmICghTkFUSVZFX0FSUkFZX0JVRkZFUikge1xuICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIEFycmF5QnVmZmVyUHJvdG90eXBlKTtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IHRvSW5kZXgobGVuZ3RoKTtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IEFSUkFZX0JVRkZFUixcbiAgICAgIGJ5dGVzOiBmaWxsKEFycmF5KGJ5dGVMZW5ndGgpLCAwKSxcbiAgICAgIGJ5dGVMZW5ndGg6IGJ5dGVMZW5ndGhcbiAgICB9KTtcbiAgICBpZiAoIURFU0NSSVBUT1JTKSB7XG4gICAgICB0aGlzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoO1xuICAgICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBBcnJheUJ1ZmZlclByb3RvdHlwZSA9ICRBcnJheUJ1ZmZlcltQUk9UT1RZUEVdO1xuXG4gICREYXRhVmlldyA9IGZ1bmN0aW9uIERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICAgIGFuSW5zdGFuY2UodGhpcywgRGF0YVZpZXdQcm90b3R5cGUpO1xuICAgIGFuSW5zdGFuY2UoYnVmZmVyLCBBcnJheUJ1ZmZlclByb3RvdHlwZSk7XG4gICAgdmFyIGJ1ZmZlclN0YXRlID0gZ2V0SW50ZXJuYWxBcnJheUJ1ZmZlclN0YXRlKGJ1ZmZlcik7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJ1ZmZlclN0YXRlLmJ5dGVMZW5ndGg7XG4gICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlck9ySW5maW5pdHkoYnl0ZU9mZnNldCk7XG4gICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0Jyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmIChvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogREFUQV9WSUVXLFxuICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICBieXRlTGVuZ3RoOiBieXRlTGVuZ3RoLFxuICAgICAgYnl0ZU9mZnNldDogb2Zmc2V0LFxuICAgICAgYnl0ZXM6IGJ1ZmZlclN0YXRlLmJ5dGVzXG4gICAgfSk7XG4gICAgaWYgKCFERVNDUklQVE9SUykge1xuICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICB0aGlzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoO1xuICAgICAgdGhpcy5ieXRlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cbiAgfTtcblxuICBEYXRhVmlld1Byb3RvdHlwZSA9ICREYXRhVmlld1tQUk9UT1RZUEVdO1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsICdieXRlTGVuZ3RoJywgZ2V0SW50ZXJuYWxBcnJheUJ1ZmZlclN0YXRlKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCAnYnVmZmVyJywgZ2V0SW50ZXJuYWxEYXRhVmlld1N0YXRlKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCAnYnl0ZUxlbmd0aCcsIGdldEludGVybmFsRGF0YVZpZXdTdGF0ZSk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgJ2J5dGVPZmZzZXQnLCBnZXRJbnRlcm5hbERhdGFWaWV3U3RhdGUpO1xuICB9XG5cbiAgZGVmaW5lQnVpbHRJbnMoRGF0YVZpZXdQcm90b3R5cGUsIHtcbiAgICBnZXRJbnQ4OiBmdW5jdGlvbiBnZXRJbnQ4KGJ5dGVPZmZzZXQpIHtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF0gPDwgMjQgPj4gMjQ7XG4gICAgfSxcbiAgICBnZXRVaW50ODogZnVuY3Rpb24gZ2V0VWludDgoYnl0ZU9mZnNldCkge1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXTtcbiAgICB9LFxuICAgIGdldEludDE2OiBmdW5jdGlvbiBnZXRJbnQxNihieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiBmYWxzZSk7XG4gICAgICByZXR1cm4gKGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXSkgPDwgMTYgPj4gMTY7XG4gICAgfSxcbiAgICBnZXRVaW50MTY6IGZ1bmN0aW9uIGdldFVpbnQxNihieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiBmYWxzZSk7XG4gICAgICByZXR1cm4gYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MzI6IGZ1bmN0aW9uIGdldEludDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJbnQzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiBmYWxzZSkpO1xuICAgIH0sXG4gICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0ludDMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlKSkgPj4+IDA7XG4gICAgfSxcbiAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlKSwgMjMpO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQ2NDogZnVuY3Rpb24gZ2V0RmxvYXQ2NChieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiBmYWxzZSksIDUyKTtcbiAgICB9LFxuICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSW50OCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0ludDgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldEludDE2OiBmdW5jdGlvbiBzZXRJbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJbnQxNiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogZmFsc2UpO1xuICAgIH0sXG4gICAgc2V0VWludDE2OiBmdW5jdGlvbiBzZXRVaW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSW50MTYsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IGZhbHNlKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJbnQzMiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogZmFsc2UpO1xuICAgIH0sXG4gICAgc2V0VWludDMyOiBmdW5jdGlvbiBzZXRVaW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSW50MzIsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IGZhbHNlKTtcbiAgICB9LFxuICAgIHNldEZsb2F0MzI6IGZ1bmN0aW9uIHNldEZsb2F0MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRmxvYXQzMiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogZmFsc2UpO1xuICAgIH0sXG4gICAgc2V0RmxvYXQ2NDogZnVuY3Rpb24gc2V0RmxvYXQ2NChieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIHBhY2tGbG9hdDY0LCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIHZhciBJTkNPUlJFQ1RfQVJSQVlfQlVGRkVSX05BTUUgPSBQUk9QRVJfRlVOQ1RJT05fTkFNRSAmJiBOYXRpdmVBcnJheUJ1ZmZlci5uYW1lICE9PSBBUlJBWV9CVUZGRVI7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xuICBpZiAoIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBOYXRpdmVBcnJheUJ1ZmZlcigxKTtcbiAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgTmF0aXZlQXJyYXlCdWZmZXIoLTEpO1xuICB9KSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IE5hdGl2ZUFycmF5QnVmZmVyKCk7XG4gICAgbmV3IE5hdGl2ZUFycmF5QnVmZmVyKDEuNSk7XG4gICAgbmV3IE5hdGl2ZUFycmF5QnVmZmVyKE5hTik7XG4gICAgcmV0dXJuIE5hdGl2ZUFycmF5QnVmZmVyLmxlbmd0aCAhPT0gMSB8fCBJTkNPUlJFQ1RfQVJSQVlfQlVGRkVSX05BTUUgJiYgIUNPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FO1xuICB9KSkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG4gICAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKSB7XG4gICAgICBhbkluc3RhbmNlKHRoaXMsIEFycmF5QnVmZmVyUHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBuZXcgTmF0aXZlQXJyYXlCdWZmZXIodG9JbmRleChsZW5ndGgpKTtcbiAgICB9O1xuXG4gICAgJEFycmF5QnVmZmVyW1BST1RPVFlQRV0gPSBBcnJheUJ1ZmZlclByb3RvdHlwZTtcblxuICAgIGZvciAodmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZUFycmF5QnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOykge1xuICAgICAgaWYgKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJEFycmF5QnVmZmVyLCBrZXksIE5hdGl2ZUFycmF5QnVmZmVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFycmF5QnVmZmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuICB9IGVsc2UgaWYgKElOQ09SUkVDVF9BUlJBWV9CVUZGRVJfTkFNRSAmJiBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShOYXRpdmVBcnJheUJ1ZmZlciwgJ25hbWUnLCBBUlJBWV9CVUZGRVIpO1xuICB9XG5cbiAgLy8gV2ViS2l0IGJ1ZyAtIHRoZSBzYW1lIHBhcmVudCBwcm90b3R5cGUgZm9yIHR5cGVkIGFycmF5cyBhbmQgZGF0YSB2aWV3XG4gIGlmIChzZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihEYXRhVmlld1Byb3RvdHlwZSkgIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIHNldFByb3RvdHlwZU9mKERhdGFWaWV3UHJvdG90eXBlLCBPYmplY3RQcm90b3R5cGUpO1xuICB9XG5cbiAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG4gIHZhciB0ZXN0VmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSk7XG4gIHZhciAkc2V0SW50OCA9IHVuY3VycnlUaGlzKERhdGFWaWV3UHJvdG90eXBlLnNldEludDgpO1xuICB0ZXN0Vmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuICB0ZXN0Vmlldy5zZXRJbnQ4KDEsIDIxNDc0ODM2NDkpO1xuICBpZiAodGVzdFZpZXcuZ2V0SW50OCgwKSB8fCAhdGVzdFZpZXcuZ2V0SW50OCgxKSkgZGVmaW5lQnVpbHRJbnMoRGF0YVZpZXdQcm90b3R5cGUsIHtcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICAkc2V0SW50OCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgICRzZXRJbnQ4KHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuXG5zZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5zZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyLFxuICBEYXRhVmlldzogJERhdGFWaWV3XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZGVsZXRlUHJvcGVydHlPclRocm93ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdycpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbmAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb3B5d2l0aGluXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWNvcHl3aXRoaW4gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0IC8qID0gMCAqLywgc3RhcnQgLyogPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIHRvID0gdG9BYnNvbHV0ZUluZGV4KHRhcmdldCwgbGVuKTtcbiAgdmFyIGZyb20gPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGNvdW50ID0gbWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pO1xuICB2YXIgaW5jID0gMTtcbiAgaWYgKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCkge1xuICAgIGluYyA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICs9IGNvdW50IC0gMTtcbiAgfVxuICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgIHRvICs9IGluYztcbiAgICBmcm9tICs9IGluYztcbiAgfSByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWxsYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbGxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleCkgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIGxpc3QsICRsZW5ndGgpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gJGxlbmd0aCA6IGxlbmd0aE9mQXJyYXlMaWtlKGxpc3QpO1xuICB2YXIgcmVzdWx0ID0gbmV3IENvbnN0cnVjdG9yKGxlbmd0aCk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgcmVzdWx0W2luZGV4XSA9IGxpc3RbaW5kZXgrK107XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmaW5kTGFzdCwgZmluZExhc3RJbmRleCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX0ZJTkRfTEFTVF9JTkRFWCA9IFRZUEUgPT09IDE7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGluZGV4ID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIHdoaWxlIChpbmRleC0tID4gMCkge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiB2YWx1ZTsgLy8gZmluZExhc3RcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gaW5kZXg7IC8vIGZpbmRMYXN0SW5kZXhcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfTEFTVF9JTkRFWCA/IC0xIDogdW5kZWZpbmVkO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZExhc3RgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maW5kLWZyb20tbGFzdFxuICBmaW5kTGFzdDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRMYXN0SW5kZXhgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maW5kLWZyb20tbGFzdFxuICBmaW5kTGFzdEluZGV4OiBjcmVhdGVNZXRob2QoMSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUtbGFzdGluZGV4b2YgLS0gc2FmZSAqL1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xudmFyICRsYXN0SW5kZXhPZiA9IFtdLmxhc3RJbmRleE9mO1xudmFyIE5FR0FUSVZFX1pFUk8gPSAhISRsYXN0SW5kZXhPZiAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2xhc3RJbmRleE9mJyk7XG52YXIgRk9SQ0VEID0gTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5sYXN0aW5kZXhvZlxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gQFsqLTFdICovKSB7XG4gIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgaWYgKE5FR0FUSVZFX1pFUk8pIHJldHVybiBhcHBseSgkbGFzdEluZGV4T2YsIHRoaXMsIGFyZ3VtZW50cykgfHwgMDtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIGluZGV4ID0gbGVuZ3RoIC0gMTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSBpbmRleCA9IG1pbihpbmRleCwgdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudHNbMV0pKTtcbiAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgZm9yICg7aW5kZXggPj0gMDsgaW5kZXgtLSkgaWYgKGluZGV4IGluIE8gJiYgT1tpbmRleF0gPT09IHNlYXJjaEVsZW1lbnQpIHJldHVybiBpbmRleCB8fCAwO1xuICByZXR1cm4gLTE7XG59IDogJGxhc3RJbmRleE9mO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgcmVkdWNlLCByZWR1Y2VSaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX1JJR0hUKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgY2FsbGJhY2tmbiwgYXJndW1lbnRzTGVuZ3RoLCBtZW1vKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICB2YXIgaW5kZXggPSBJU19SSUdIVCA/IGxlbmd0aCAtIDEgOiAwO1xuICAgIHZhciBpID0gSVNfUklHSFQgPyAtMSA6IDE7XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA8IDIpIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGlmIChJU19SSUdIVCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gSUVFRTc1NCBjb252ZXJzaW9ucyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2llZWU3NTRcbnZhciAkQXJyYXkgPSBBcnJheTtcbnZhciBhYnMgPSBNYXRoLmFicztcbnZhciBwb3cgPSBNYXRoLnBvdztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgbG9nID0gTWF0aC5sb2c7XG52YXIgTE4yID0gTWF0aC5MTjI7XG5cbnZhciBwYWNrID0gZnVuY3Rpb24gKG51bWJlciwgbWFudGlzc2FMZW5ndGgsIGJ5dGVzKSB7XG4gIHZhciBidWZmZXIgPSAkQXJyYXkoYnl0ZXMpO1xuICB2YXIgZXhwb25lbnRMZW5ndGggPSBieXRlcyAqIDggLSBtYW50aXNzYUxlbmd0aCAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZXhwb25lbnRMZW5ndGgpIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgcnQgPSBtYW50aXNzYUxlbmd0aCA9PT0gMjMgPyBwb3coMiwgLTI0KSAtIHBvdygyLCAtNzcpIDogMDtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwIHx8IG51bWJlciA9PT0gMCAmJiAxIC8gbnVtYmVyIDwgMCA/IDEgOiAwO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgZXhwb25lbnQsIG1hbnRpc3NhLCBjO1xuICBudW1iZXIgPSBhYnMobnVtYmVyKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgaWYgKG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gSW5maW5pdHkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIG1hbnRpc3NhID0gbnVtYmVyICE9PSBudW1iZXIgPyAxIDogMDtcbiAgICBleHBvbmVudCA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZXhwb25lbnQgPSBmbG9vcihsb2cobnVtYmVyKSAvIExOMik7XG4gICAgYyA9IHBvdygyLCAtZXhwb25lbnQpO1xuICAgIGlmIChudW1iZXIgKiBjIDwgMSkge1xuICAgICAgZXhwb25lbnQtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGV4cG9uZW50ICsgZUJpYXMgPj0gMSkge1xuICAgICAgbnVtYmVyICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgbnVtYmVyICs9IHJ0ICogcG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmIChudW1iZXIgKiBjID49IDIpIHtcbiAgICAgIGV4cG9uZW50Kys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmIChleHBvbmVudCArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG1hbnRpc3NhID0gMDtcbiAgICAgIGV4cG9uZW50ID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGV4cG9uZW50ICsgZUJpYXMgPj0gMSkge1xuICAgICAgbWFudGlzc2EgPSAobnVtYmVyICogYyAtIDEpICogcG93KDIsIG1hbnRpc3NhTGVuZ3RoKTtcbiAgICAgIGV4cG9uZW50ICs9IGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYW50aXNzYSA9IG51bWJlciAqIHBvdygyLCBlQmlhcyAtIDEpICogcG93KDIsIG1hbnRpc3NhTGVuZ3RoKTtcbiAgICAgIGV4cG9uZW50ID0gMDtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKG1hbnRpc3NhTGVuZ3RoID49IDgpIHtcbiAgICBidWZmZXJbaW5kZXgrK10gPSBtYW50aXNzYSAmIDI1NTtcbiAgICBtYW50aXNzYSAvPSAyNTY7XG4gICAgbWFudGlzc2FMZW5ndGggLT0gODtcbiAgfVxuICBleHBvbmVudCA9IGV4cG9uZW50IDw8IG1hbnRpc3NhTGVuZ3RoIHwgbWFudGlzc2E7XG4gIGV4cG9uZW50TGVuZ3RoICs9IG1hbnRpc3NhTGVuZ3RoO1xuICB3aGlsZSAoZXhwb25lbnRMZW5ndGggPiAwKSB7XG4gICAgYnVmZmVyW2luZGV4KytdID0gZXhwb25lbnQgJiAyNTU7XG4gICAgZXhwb25lbnQgLz0gMjU2O1xuICAgIGV4cG9uZW50TGVuZ3RoIC09IDg7XG4gIH1cbiAgYnVmZmVyWy0taW5kZXhdIHw9IHNpZ24gKiAxMjg7XG4gIHJldHVybiBidWZmZXI7XG59O1xuXG52YXIgdW5wYWNrID0gZnVuY3Rpb24gKGJ1ZmZlciwgbWFudGlzc2FMZW5ndGgpIHtcbiAgdmFyIGJ5dGVzID0gYnVmZmVyLmxlbmd0aDtcbiAgdmFyIGV4cG9uZW50TGVuZ3RoID0gYnl0ZXMgKiA4IC0gbWFudGlzc2FMZW5ndGggLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGV4cG9uZW50TGVuZ3RoKSAtIDE7XG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMTtcbiAgdmFyIG5CaXRzID0gZXhwb25lbnRMZW5ndGggLSA3O1xuICB2YXIgaW5kZXggPSBieXRlcyAtIDE7XG4gIHZhciBzaWduID0gYnVmZmVyW2luZGV4LS1dO1xuICB2YXIgZXhwb25lbnQgPSBzaWduICYgMTI3O1xuICB2YXIgbWFudGlzc2E7XG4gIHNpZ24gPj49IDc7XG4gIHdoaWxlIChuQml0cyA+IDApIHtcbiAgICBleHBvbmVudCA9IGV4cG9uZW50ICogMjU2ICsgYnVmZmVyW2luZGV4LS1dO1xuICAgIG5CaXRzIC09IDg7XG4gIH1cbiAgbWFudGlzc2EgPSBleHBvbmVudCAmICgxIDw8IC1uQml0cykgLSAxO1xuICBleHBvbmVudCA+Pj0gLW5CaXRzO1xuICBuQml0cyArPSBtYW50aXNzYUxlbmd0aDtcbiAgd2hpbGUgKG5CaXRzID4gMCkge1xuICAgIG1hbnRpc3NhID0gbWFudGlzc2EgKiAyNTYgKyBidWZmZXJbaW5kZXgtLV07XG4gICAgbkJpdHMgLT0gODtcbiAgfVxuICBpZiAoZXhwb25lbnQgPT09IDApIHtcbiAgICBleHBvbmVudCA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChleHBvbmVudCA9PT0gZU1heCkge1xuICAgIHJldHVybiBtYW50aXNzYSA/IE5hTiA6IHNpZ24gPyAtSW5maW5pdHkgOiBJbmZpbml0eTtcbiAgfSBlbHNlIHtcbiAgICBtYW50aXNzYSArPSBwb3coMiwgbWFudGlzc2FMZW5ndGgpO1xuICAgIGV4cG9uZW50IC09IGVCaWFzO1xuICB9IHJldHVybiAoc2lnbiA/IC0xIDogMSkgKiBtYW50aXNzYSAqIHBvdygyLCBleHBvbmVudCAtIG1hbnRpc3NhTGVuZ3RoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYWNrOiBwYWNrLFxuICB1bnBhY2s6IHVucGFja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGtsYXNzID0gY2xhc3NvZihpdCk7XG4gIHJldHVybiBrbGFzcyA9PT0gJ0JpZ0ludDY0QXJyYXknIHx8IGtsYXNzID09PSAnQmlnVWludDY0QXJyYXknO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkZXNjcmlwdG9yKSB7XG4gIHJldHVybiBkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQgJiYgKGhhc093bihkZXNjcmlwdG9yLCAndmFsdWUnKSB8fCBoYXNPd24oZGVzY3JpcHRvciwgJ3dyaXRhYmxlJykpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYElzSW50ZWdyYWxOdW1iZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2ludGVncmFsbnVtYmVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbnVtYmVyLWlzaW50ZWdlciAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtc2lnbicpO1xuXG52YXIgYWJzID0gTWF0aC5hYnM7XG5cbnZhciBFUFNJTE9OID0gMi4yMjA0NDYwNDkyNTAzMTNlLTE2OyAvLyBOdW1iZXIuRVBTSUxPTlxudmFyIElOVkVSU0VfRVBTSUxPTiA9IDEgLyBFUFNJTE9OO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyBJTlZFUlNFX0VQU0lMT04gLSBJTlZFUlNFX0VQU0lMT047XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4LCBGTE9BVF9FUFNJTE9OLCBGTE9BVF9NQVhfVkFMVUUsIEZMT0FUX01JTl9WQUxVRSkge1xuICB2YXIgbiA9ICt4O1xuICB2YXIgYWJzb2x1dGUgPSBhYnMobik7XG4gIHZhciBzID0gc2lnbihuKTtcbiAgaWYgKGFic29sdXRlIDwgRkxPQVRfTUlOX1ZBTFVFKSByZXR1cm4gcyAqIHJvdW5kVGllc1RvRXZlbihhYnNvbHV0ZSAvIEZMT0FUX01JTl9WQUxVRSAvIEZMT0FUX0VQU0lMT04pICogRkxPQVRfTUlOX1ZBTFVFICogRkxPQVRfRVBTSUxPTjtcbiAgdmFyIGEgPSAoMSArIEZMT0FUX0VQU0lMT04gLyBFUFNJTE9OKSAqIGFic29sdXRlO1xuICB2YXIgcmVzdWx0ID0gYSAtIChhIC0gYWJzb2x1dGUpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICBpZiAocmVzdWx0ID4gRkxPQVRfTUFYX1ZBTFVFIHx8IHJlc3VsdCAhPT0gcmVzdWx0KSByZXR1cm4gcyAqIEluZmluaXR5O1xuICByZXR1cm4gcyAqIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmxvYXRSb3VuZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLWZsb2F0LXJvdW5kJyk7XG5cbnZhciBGTE9BVDMyX0VQU0lMT04gPSAxLjE5MjA5Mjg5NTUwNzgxMjVlLTc7IC8vIDIgKiogLTIzO1xudmFyIEZMT0FUMzJfTUFYX1ZBTFVFID0gMy40MDI4MjM0NjYzODUyODg2ZSszODsgLy8gMiAqKiAxMjggLSAyICoqIDEwNFxudmFyIEZMT0FUMzJfTUlOX1ZBTFVFID0gMS4xNzU0OTQzNTA4MjIyODc1ZS0zODsgLy8gMiAqKiAtMTI2O1xuXG4vLyBgTWF0aC5mcm91bmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLmZyb3VuZFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtZnJvdW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5mcm91bmQgfHwgZnVuY3Rpb24gZnJvdW5kKHgpIHtcbiAgcmV0dXJuIGZsb2F0Um91bmQoeCwgRkxPQVQzMl9FUFNJTE9OLCBGTE9BVDMyX01BWF9WQUxVRSwgRkxPQVQzMl9NSU5fVkFMVUUpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGBNYXRoLnNpZ25gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnNpZ25cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXNpZ24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KSB7XG4gIHZhciBuID0gK3g7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBuID09PSAwIHx8IG4gIT09IG4gPyBuIDogbiA8IDAgPyAtMSA6IDE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFRvQmlnSW50YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9iaWdpbnRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBwcmltID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdudW1iZXInKTtcbiAgaWYgKHR5cGVvZiBwcmltID09ICdudW1iZXInKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgbnVtYmVyIHRvIGJpZ2ludFwiKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWJpZ2ludCAtLSBzYWZlXG4gIHJldHVybiBCaWdJbnQocHJpbSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG4vLyBgVG9JbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcbiAgdmFyIG51bWJlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaXQpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgobnVtYmVyKTtcbiAgaWYgKG51bWJlciAhPT0gbGVuZ3RoKSB0aHJvdyBuZXcgJFJhbmdlRXJyb3IoJ1dyb25nIGxlbmd0aCBvciBpbmRleCcpO1xuICByZXR1cm4gbGVuZ3RoO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1Bvc2l0aXZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wb3NpdGl2ZS1pbnRlZ2VyJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBCWVRFUykge1xuICB2YXIgb2Zmc2V0ID0gdG9Qb3NpdGl2ZUludGVnZXIoaXQpO1xuICBpZiAob2Zmc2V0ICUgQllURVMpIHRocm93IG5ldyAkUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0Jyk7XG4gIHJldHVybiBvZmZzZXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpdCk7XG4gIGlmIChyZXN1bHQgPCAwKSB0aHJvdyBuZXcgJFJhbmdlRXJyb3IoXCJUaGUgYXJndW1lbnQgY2FuJ3QgYmUgbGVzcyB0aGFuIDBcIik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHZhbHVlID0gcm91bmQoaXQpO1xuICByZXR1cm4gdmFsdWUgPCAwID8gMCA6IHZhbHVlID4gMHhGRiA/IDB4RkYgOiB2YWx1ZSAmIDB4RkY7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgVFlQRURfQVJSQVlTX0NPTlNUUlVDVE9SU19SRVFVSVJFU19XUkFQUEVSUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1jb25zdHJ1Y3RvcnMtcmVxdWlyZS13cmFwcGVycycpO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIEFycmF5QnVmZmVyTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlcicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaXNJbnRlZ3JhbE51bWJlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1pbnRlZ3JhbC1udW1iZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4Jyk7XG52YXIgdG9PZmZzZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2Zmc2V0Jyk7XG52YXIgdG9VaW50OENsYW1wZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tdWludDgtY2xhbXBlZCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgdHlwZWRBcnJheUZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHlwZWQtYXJyYXktZnJvbScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbnZhciBSYW5nZUVycm9yID0gZ2xvYmFsLlJhbmdlRXJyb3I7XG52YXIgQXJyYXlCdWZmZXIgPSBBcnJheUJ1ZmZlck1vZHVsZS5BcnJheUJ1ZmZlcjtcbnZhciBBcnJheUJ1ZmZlclByb3RvdHlwZSA9IEFycmF5QnVmZmVyLnByb3RvdHlwZTtcbnZhciBEYXRhVmlldyA9IEFycmF5QnVmZmVyTW9kdWxlLkRhdGFWaWV3O1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1M7XG52YXIgVFlQRURfQVJSQVlfVEFHID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5UWVBFRF9BUlJBWV9UQUc7XG52YXIgVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuVHlwZWRBcnJheTtcbnZhciBUeXBlZEFycmF5UHJvdG90eXBlID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5UeXBlZEFycmF5UHJvdG90eXBlO1xudmFyIGFUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5Q29uc3RydWN0b3I7XG52YXIgaXNUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5pc1R5cGVkQXJyYXk7XG52YXIgQllURVNfUEVSX0VMRU1FTlQgPSAnQllURVNfUEVSX0VMRU1FTlQnO1xudmFyIFdST05HX0xFTkdUSCA9ICdXcm9uZyBsZW5ndGgnO1xuXG52YXIgZnJvbUxpc3QgPSBmdW5jdGlvbiAoQywgbGlzdCkge1xuICBhVHlwZWRBcnJheUNvbnN0cnVjdG9yKEMpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihpdCwga2V5LCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcylba2V5XTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGtsYXNzO1xuICByZXR1cm4gaXNQcm90b3R5cGVPZihBcnJheUJ1ZmZlclByb3RvdHlwZSwgaXQpIHx8IChrbGFzcyA9IGNsYXNzb2YoaXQpKSA9PT0gJ0FycmF5QnVmZmVyJyB8fCBrbGFzcyA9PT0gJ1NoYXJlZEFycmF5QnVmZmVyJztcbn07XG5cbnZhciBpc1R5cGVkQXJyYXlJbmRleCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICByZXR1cm4gaXNUeXBlZEFycmF5KHRhcmdldClcbiAgICAmJiAhaXNTeW1ib2woa2V5KVxuICAgICYmIGtleSBpbiB0YXJnZXRcbiAgICAmJiBpc0ludGVncmFsTnVtYmVyKCtrZXkpXG4gICAgJiYga2V5ID49IDA7XG59O1xuXG52YXIgd3JhcHBlZEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIHJldHVybiBpc1R5cGVkQXJyYXlJbmRleCh0YXJnZXQsIGtleSlcbiAgICA/IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigyLCB0YXJnZXRba2V5XSlcbiAgICA6IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG59O1xuXG52YXIgd3JhcHBlZERlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoaXNUeXBlZEFycmF5SW5kZXgodGFyZ2V0LCBrZXkpXG4gICAgJiYgaXNPYmplY3QoZGVzY3JpcHRvcilcbiAgICAmJiBoYXNPd24oZGVzY3JpcHRvciwgJ3ZhbHVlJylcbiAgICAmJiAhaGFzT3duKGRlc2NyaXB0b3IsICdnZXQnKVxuICAgICYmICFoYXNPd24oZGVzY3JpcHRvciwgJ3NldCcpXG4gICAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZGVzY3JpcHRvciB3L28gY2FsbGluZyBhY2Nlc3NvcnNcbiAgICAmJiAhZGVzY3JpcHRvci5jb25maWd1cmFibGVcbiAgICAmJiAoIWhhc093bihkZXNjcmlwdG9yLCAnd3JpdGFibGUnKSB8fCBkZXNjcmlwdG9yLndyaXRhYmxlKVxuICAgICYmICghaGFzT3duKGRlc2NyaXB0b3IsICdlbnVtZXJhYmxlJykgfHwgZGVzY3JpcHRvci5lbnVtZXJhYmxlKVxuICApIHtcbiAgICB0YXJnZXRba2V5XSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xufTtcblxuaWYgKERFU0NSSVBUT1JTKSB7XG4gIGlmICghTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUykge1xuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mID0gd3JhcHBlZEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gd3JhcHBlZERlZmluZVByb3BlcnR5O1xuICAgIGFkZEdldHRlcihUeXBlZEFycmF5UHJvdG90eXBlLCAnYnVmZmVyJyk7XG4gICAgYWRkR2V0dGVyKFR5cGVkQXJyYXlQcm90b3R5cGUsICdieXRlT2Zmc2V0Jyk7XG4gICAgYWRkR2V0dGVyKFR5cGVkQXJyYXlQcm90b3R5cGUsICdieXRlTGVuZ3RoJyk7XG4gICAgYWRkR2V0dGVyKFR5cGVkQXJyYXlQcm90b3R5cGUsICdsZW5ndGgnKTtcbiAgfVxuXG4gICQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIH0sIHtcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IHdyYXBwZWRHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgZGVmaW5lUHJvcGVydHk6IHdyYXBwZWREZWZpbmVQcm9wZXJ0eVxuICB9KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCB3cmFwcGVyLCBDTEFNUEVEKSB7XG4gICAgdmFyIEJZVEVTID0gVFlQRS5tYXRjaCgvXFxkKy8pWzBdIC8gODtcbiAgICB2YXIgQ09OU1RSVUNUT1JfTkFNRSA9IFRZUEUgKyAoQ0xBTVBFRCA/ICdDbGFtcGVkJyA6ICcnKSArICdBcnJheSc7XG4gICAgdmFyIEdFVFRFUiA9ICdnZXQnICsgVFlQRTtcbiAgICB2YXIgU0VUVEVSID0gJ3NldCcgKyBUWVBFO1xuICAgIHZhciBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxbQ09OU1RSVUNUT1JfTkFNRV07XG4gICAgdmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbiAgICB2YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgdmFyIGV4cG9ydGVkID0ge307XG5cbiAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24gKHRoYXQsIGluZGV4KSB7XG4gICAgICB2YXIgZGF0YSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICByZXR1cm4gZGF0YS52aWV3W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEuYnl0ZU9mZnNldCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAodGhhdCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICB2YXIgZGF0YSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICBkYXRhLnZpZXdbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5ieXRlT2Zmc2V0LCBDTEFNUEVEID8gdG9VaW50OENsYW1wZWQodmFsdWUpIDogdmFsdWUsIHRydWUpO1xuICAgIH07XG5cbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uICh0aGF0LCBpbmRleCkge1xuICAgICAgbmF0aXZlRGVmaW5lUHJvcGVydHkodGhhdCwgaW5kZXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTKSB7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBkYXRhLCBvZmZzZXQsICRsZW5ndGgpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUpO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgYnl0ZU9mZnNldCA9IDA7XG4gICAgICAgIHZhciBidWZmZXIsIGJ5dGVMZW5ndGgsIGxlbmd0aDtcbiAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgICAgICAgIGxlbmd0aCA9IHRvSW5kZXgoZGF0YSk7XG4gICAgICAgICAgYnl0ZUxlbmd0aCA9IGxlbmd0aCAqIEJZVEVTO1xuICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgICBieXRlT2Zmc2V0ID0gdG9PZmZzZXQob2Zmc2V0LCBCWVRFUyk7XG4gICAgICAgICAgdmFyICRsZW4gPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgaWYgKCRsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCRsZW4gJSBCWVRFUykgdGhyb3cgbmV3IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIGlmIChieXRlTGVuZ3RoIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCArIGJ5dGVPZmZzZXQgPiAkbGVuKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNUeXBlZEFycmF5KGRhdGEpKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGwodHlwZWRBcnJheUZyb20sIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7XG4gICAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgICAgYnl0ZU9mZnNldDogYnl0ZU9mZnNldCxcbiAgICAgICAgICBieXRlTGVuZ3RoOiBieXRlTGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgIHZpZXc6IG5ldyBEYXRhVmlldyhidWZmZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIGFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSBzZXRQcm90b3R5cGVPZihUeXBlZEFycmF5Q29uc3RydWN0b3IsIFR5cGVkQXJyYXkpO1xuICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShUeXBlZEFycmF5UHJvdG90eXBlKTtcbiAgICB9IGVsc2UgaWYgKFRZUEVEX0FSUkFZU19DT05TVFJVQ1RPUlNfUkVRVUlSRVNfV1JBUFBFUlMpIHtcbiAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKGR1bW15LCBkYXRhLCB0eXBlZEFycmF5T2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgIGFuSW5zdGFuY2UoZHVtbXksIFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBpbmhlcml0SWZSZXF1aXJlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkgcmV0dXJuIG5ldyBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3IodG9JbmRleChkYXRhKSk7XG4gICAgICAgICAgaWYgKGlzQXJyYXlCdWZmZXIoZGF0YSkpIHJldHVybiAkbGVuZ3RoICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbmV3IE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcihkYXRhLCB0b09mZnNldCh0eXBlZEFycmF5T2Zmc2V0LCBCWVRFUyksICRsZW5ndGgpXG4gICAgICAgICAgICA6IHR5cGVkQXJyYXlPZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IG5ldyBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3IoZGF0YSwgdG9PZmZzZXQodHlwZWRBcnJheU9mZnNldCwgQllURVMpKVxuICAgICAgICAgICAgICA6IG5ldyBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3IoZGF0YSk7XG4gICAgICAgICAgaWYgKGlzVHlwZWRBcnJheShkYXRhKSkgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIGNhbGwodHlwZWRBcnJheUZyb20sIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgZGF0YSk7XG4gICAgICAgIH0oKSwgZHVtbXksIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSBzZXRQcm90b3R5cGVPZihUeXBlZEFycmF5Q29uc3RydWN0b3IsIFR5cGVkQXJyYXkpO1xuICAgICAgZm9yRWFjaChnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBrZXksIE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcltrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IucHJvdG90eXBlID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlO1xuICAgIH1cblxuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUuY29uc3RydWN0b3IgIT09IFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcikge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheUNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZShUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUpLlR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcblxuICAgIGlmIChUWVBFRF9BUlJBWV9UQUcpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUsIFRZUEVEX0FSUkFZX1RBRywgQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgfVxuXG4gICAgdmFyIEZPUkNFRCA9IFR5cGVkQXJyYXlDb25zdHJ1Y3RvciAhPT0gTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuXG4gICAgZXhwb3J0ZWRbQ09OU1RSVUNUT1JfTkFNRV0gPSBUeXBlZEFycmF5Q29uc3RydWN0b3I7XG5cbiAgICAkKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06ICFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIH0sIGV4cG9ydGVkKTtcblxuICAgIGlmICghKEJZVEVTX1BFUl9FTEVNRU5UIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcikpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShUeXBlZEFycmF5Q29uc3RydWN0b3IsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG4gICAgfVxuXG4gICAgaWYgKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSwgQllURVNfUEVSX0VMRU1FTlQsIEJZVEVTKTtcbiAgICB9XG5cbiAgICBzZXRTcGVjaWVzKENPTlNUUlVDVE9SX05BTUUpO1xuICB9O1xufSBlbHNlIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tbmV3IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1M7XG5cbnZhciBBcnJheUJ1ZmZlciA9IGdsb2JhbC5BcnJheUJ1ZmZlcjtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWwuSW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIEludDhBcnJheSgxKTtcbn0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIG5ldyBJbnQ4QXJyYXkoLTEpO1xufSkgfHwgIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgbmV3IEludDhBcnJheSgpO1xuICBuZXcgSW50OEFycmF5KG51bGwpO1xuICBuZXcgSW50OEFycmF5KDEuNSk7XG4gIG5ldyBJbnQ4QXJyYXkoaXRlcmFibGUpO1xufSwgdHJ1ZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBTYWZhcmkgKDExKykgYnVnIC0gYSByZWFzb24gd2h5IGV2ZW4gU2FmYXJpIDEzIHNob3VsZCBsb2FkIGEgdHlwZWQgYXJyYXkgcG9seWZpbGxcbiAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkobmV3IEFycmF5QnVmZmVyKDIpLCAxLCB1bmRlZmluZWQpLmxlbmd0aCAhPT0gMTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFycmF5RnJvbUNvbnN0cnVjdG9yQW5kTGlzdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tLWNvbnN0cnVjdG9yLWFuZC1saXN0Jyk7XG52YXIgdHlwZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluc3RhbmNlLCBsaXN0KSB7XG4gIHJldHVybiBhcnJheUZyb21Db25zdHJ1Y3RvckFuZExpc3QodHlwZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihpbnN0YW5jZSksIGxpc3QpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNvbnN0cnVjdG9yJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGlzQmlnSW50QXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYmlnLWludC1hcnJheScpO1xudmFyIGFUeXBlZEFycmF5Q29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpLmFUeXBlZEFycmF5Q29uc3RydWN0b3I7XG52YXIgdG9CaWdJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYmlnLWludCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwZm4sIHRoaXNBcmcgKi8pIHtcbiAgdmFyIEMgPSBhQ29uc3RydWN0b3IodGhpcyk7XG4gIHZhciBPID0gdG9PYmplY3Qoc291cmNlKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpLCBsZW5ndGgsIHJlc3VsdCwgdGhpc0lzQmlnSW50QXJyYXksIHZhbHVlLCBzdGVwLCBpdGVyYXRvciwgbmV4dDtcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICYmICFpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSB7XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihPLCBpdGVyYXRvck1ldGhvZCk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgTyA9IFtdO1xuICAgIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgICAgTy5wdXNoKHN0ZXAudmFsdWUpO1xuICAgIH1cbiAgfVxuICBpZiAobWFwcGluZyAmJiBhcmd1bWVudHNMZW5ndGggPiAyKSB7XG4gICAgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNbMl0pO1xuICB9XG4gIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICByZXN1bHQgPSBuZXcgKGFUeXBlZEFycmF5Q29uc3RydWN0b3IoQykpKGxlbmd0aCk7XG4gIHRoaXNJc0JpZ0ludEFycmF5ID0gaXNCaWdJbnRBcnJheShyZXN1bHQpO1xuICBmb3IgKGkgPSAwOyBsZW5ndGggPiBpOyBpKyspIHtcbiAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG4gICAgLy8gRkYzMC0gdHlwZWQgYXJyYXlzIGRvZXNuJ3QgcHJvcGVybHkgY29udmVydCBvYmplY3RzIHRvIHR5cGVkIGFycmF5IHZhbHVlc1xuICAgIHJlc3VsdFtpXSA9IHRoaXNJc0JpZ0ludEFycmF5ID8gdG9CaWdJbnQodmFsdWUpIDogK3ZhbHVlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbnZhciBhVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheUNvbnN0cnVjdG9yO1xudmFyIGdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEFycmF5QnVmZmVyVmlld0NvcmUuZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuXG4vLyBhIHBhcnQgb2YgYFR5cGVkQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyN0eXBlZGFycmF5LXNwZWNpZXMtY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHJldHVybiBhVHlwZWRBcnJheUNvbnN0cnVjdG9yKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5LCBnZXRUeXBlZEFycmF5Q29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNEYXRhRGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1kYXRhLWRlc2NyaXB0b3InKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIGBSZWZsZWN0LmdldGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZmxlY3QuZ2V0XG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSAvKiAsIHJlY2VpdmVyICovKSB7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdO1xuICB2YXIgZGVzY3JpcHRvciwgcHJvdG90eXBlO1xuICBpZiAoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIGlmIChkZXNjcmlwdG9yKSByZXR1cm4gaXNEYXRhRGVzY3JpcHRvcihkZXNjcmlwdG9yKVxuICAgID8gZGVzY3JpcHRvci52YWx1ZVxuICAgIDogZGVzY3JpcHRvci5nZXQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGNhbGwoZGVzY3JpcHRvci5nZXQsIHJlY2VpdmVyKTtcbiAgaWYgKGlzT2JqZWN0KHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSByZXR1cm4gZ2V0KHByb3RvdHlwZSwgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgZ2V0OiBnZXRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmF0XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdhdCcsIGZ1bmN0aW9uIGF0KGluZGV4KSB7XG4gIHZhciBPID0gYVR5cGVkQXJyYXkodGhpcyk7XG4gIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIHJlbGF0aXZlSW5kZXggPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgdmFyIGsgPSByZWxhdGl2ZUluZGV4ID49IDAgPyByZWxhdGl2ZUluZGV4IDogbGVuICsgcmVsYXRpdmVJbmRleDtcbiAgcmV0dXJuIChrIDwgMCB8fCBrID49IGxlbikgPyB1bmRlZmluZWQgOiBPW2tdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgJEFycmF5Q29weVdpdGhpbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1jb3B5LXdpdGhpbicpO1xuXG52YXIgdSRBcnJheUNvcHlXaXRoaW4gPSB1bmN1cnJ5VGhpcygkQXJyYXlDb3B5V2l0aGluKTtcbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuY29weVdpdGhpbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuY29weXdpdGhpblxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnY29weVdpdGhpbicsIGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCAvKiAsIGVuZCAqLykge1xuICByZXR1cm4gdSRBcnJheUNvcHlXaXRoaW4oYVR5cGVkQXJyYXkodGhpcyksIHRhcmdldCwgc3RhcnQsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRldmVyeSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5ldmVyeTtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuZXZlcnlcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2V2ZXJ5JywgZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRldmVyeShhVHlwZWRBcnJheSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgJGZpbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZmlsbCcpO1xudmFyIHRvQmlnSW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWJpZy1pbnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgc2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbi8vIFY4IH4gQ2hyb21lIDwgNTksIFNhZmFyaSA8IDE0LjEsIEZGIDwgNTUsIEVkZ2UgPD0xOFxudmFyIENPTlZFUlNJT05fQlVHID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgY291bnQgPSAwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tdHlwZWQtYXJyYXlzIC0tIHNhZmVcbiAgbmV3IEludDhBcnJheSgyKS5maWxsKHsgdmFsdWVPZjogZnVuY3Rpb24gKCkgeyByZXR1cm4gY291bnQrKzsgfSB9KTtcbiAgcmV0dXJuIGNvdW50ICE9PSAxO1xufSk7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZpbGxgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmZpbGxcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2ZpbGwnLCBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQsIGVuZCAqLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgYVR5cGVkQXJyYXkodGhpcyk7XG4gIHZhciBhY3R1YWxWYWx1ZSA9IHNsaWNlKGNsYXNzb2YodGhpcyksIDAsIDMpID09PSAnQmlnJyA/IHRvQmlnSW50KHZhbHVlKSA6ICt2YWx1ZTtcbiAgcmV0dXJuIGNhbGwoJGZpbGwsIHRoaXMsIGFjdHVhbFZhbHVlLCBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbn0sIENPTlZFUlNJT05fQlVHKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBmcm9tU3BlY2llc0FuZExpc3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHlwZWQtYXJyYXktZnJvbS1zcGVjaWVzLWFuZC1saXN0Jyk7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5maWx0ZXJcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2ZpbHRlcicsIGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICB2YXIgbGlzdCA9ICRmaWx0ZXIoYVR5cGVkQXJyYXkodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGZyb21TcGVjaWVzQW5kTGlzdCh0aGlzLCBsaXN0KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRmaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZEluZGV4O1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuZmluZGluZGV4XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdmaW5kSW5kZXgnLCBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZpbmRJbmRleChhVHlwZWRBcnJheSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkZmluZExhc3RJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24tZnJvbS1sYXN0JykuZmluZExhc3RJbmRleDtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5maW5kTGFzdEluZGV4YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5maW5kbGFzdGluZGV4XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdmaW5kTGFzdEluZGV4JywgZnVuY3Rpb24gZmluZExhc3RJbmRleChwcmVkaWNhdGUgLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZmluZExhc3RJbmRleChhVHlwZWRBcnJheSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkZmluZExhc3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLWZyb20tbGFzdCcpLmZpbmRMYXN0O1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZpbmRMYXN0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5maW5kbGFzdFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnZmluZExhc3QnLCBmdW5jdGlvbiBmaW5kTGFzdChwcmVkaWNhdGUgLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZmluZExhc3QoYVR5cGVkQXJyYXkodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5maW5kXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdmaW5kJywgZnVuY3Rpb24gZmluZChwcmVkaWNhdGUgLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZmluZChhVHlwZWRBcnJheSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmZvcmVhY2hcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2ZvckVhY2gnLCBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICRmb3JFYWNoKGFUeXBlZEFycmF5KHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuaW5jbHVkZXNcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2luY2x1ZGVzJywgZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykge1xuICByZXR1cm4gJGluY2x1ZGVzKGFUeXBlZEFycmF5KHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuaW5kZXhvZlxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnaW5kZXhPZicsIGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykge1xuICByZXR1cm4gJGluZGV4T2YoYVR5cGVkQXJyYXkodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIEFycmF5SXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5O1xudmFyIGFycmF5VmFsdWVzID0gdW5jdXJyeVRoaXMoQXJyYXlJdGVyYXRvcnMudmFsdWVzKTtcbnZhciBhcnJheUtleXMgPSB1bmN1cnJ5VGhpcyhBcnJheUl0ZXJhdG9ycy5rZXlzKTtcbnZhciBhcnJheUVudHJpZXMgPSB1bmN1cnJ5VGhpcyhBcnJheUl0ZXJhdG9ycy5lbnRyaWVzKTtcbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcbnZhciBUeXBlZEFycmF5UHJvdG90eXBlID0gVWludDhBcnJheSAmJiBVaW50OEFycmF5LnByb3RvdHlwZTtcblxudmFyIEdFTkVSSUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKFsxXSk7XG59KTtcblxudmFyIElURVJBVE9SX0lTX1ZBTFVFUyA9ICEhVHlwZWRBcnJheVByb3RvdHlwZVxuICAmJiBUeXBlZEFycmF5UHJvdG90eXBlLnZhbHVlc1xuICAmJiBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gVHlwZWRBcnJheVByb3RvdHlwZS52YWx1ZXNcbiAgJiYgVHlwZWRBcnJheVByb3RvdHlwZS52YWx1ZXMubmFtZSA9PT0gJ3ZhbHVlcyc7XG5cbnZhciB0eXBlZEFycmF5VmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICByZXR1cm4gYXJyYXlWYWx1ZXMoYVR5cGVkQXJyYXkodGhpcykpO1xufTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuZW50cmllc1xuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnZW50cmllcycsIGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gIHJldHVybiBhcnJheUVudHJpZXMoYVR5cGVkQXJyYXkodGhpcykpO1xufSwgR0VORVJJQyk7XG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5rZXlzXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdrZXlzJywgZnVuY3Rpb24ga2V5cygpIHtcbiAgcmV0dXJuIGFycmF5S2V5cyhhVHlwZWRBcnJheSh0aGlzKSk7XG59LCBHRU5FUklDKTtcbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUudmFsdWVzXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCd2YWx1ZXMnLCB0eXBlZEFycmF5VmFsdWVzLCBHRU5FUklDIHx8ICFJVEVSQVRPUl9JU19WQUxVRVMsIHsgbmFtZTogJ3ZhbHVlcycgfSk7XG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUtQEBpdGVyYXRvclxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZChJVEVSQVRPUiwgdHlwZWRBcnJheVZhbHVlcywgR0VORVJJQyB8fCAhSVRFUkFUT1JfSVNfVkFMVUVTLCB7IG5hbWU6ICd2YWx1ZXMnIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgJGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuam9pblxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnam9pbicsIGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gIHJldHVybiAkam9pbihhVHlwZWRBcnJheSh0aGlzKSwgc2VwYXJhdG9yKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgJGxhc3RJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YnKTtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUubGFzdGluZGV4b2ZcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2xhc3RJbmRleE9mJywgZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgcmV0dXJuIGFwcGx5KCRsYXN0SW5kZXhPZiwgYVR5cGVkQXJyYXkodGhpcyksIGxlbmd0aCA+IDEgPyBbc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdXSA6IFtzZWFyY2hFbGVtZW50XSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciB0eXBlZEFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLm1hcFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnbWFwJywgZnVuY3Rpb24gbWFwKG1hcGZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJG1hcChhVHlwZWRBcnJheSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyAodHlwZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihPKSkobGVuZ3RoKTtcbiAgfSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkcmVkdWNlUmlnaHQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykucmlnaHQ7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnJlZHVjZXJpZ2h0XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdyZWR1Y2VSaWdodCcsIGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHJldHVybiAkcmVkdWNlUmlnaHQoYVR5cGVkQXJyYXkodGhpcyksIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5yZWR1Y2VcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3JlZHVjZScsIGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICByZXR1cm4gJHJlZHVjZShhVHlwZWRBcnJheSh0aGlzKSwgY2FsbGJhY2tmbiwgbGVuZ3RoLCBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5yZXZlcnNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5yZXZlcnNlXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdyZXZlcnNlJywgZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgbGVuZ3RoID0gYVR5cGVkQXJyYXkodGhhdCkubGVuZ3RoO1xuICB2YXIgbWlkZGxlID0gZmxvb3IobGVuZ3RoIC8gMik7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciB2YWx1ZTtcbiAgd2hpbGUgKGluZGV4IDwgbWlkZGxlKSB7XG4gICAgdmFsdWUgPSB0aGF0W2luZGV4XTtcbiAgICB0aGF0W2luZGV4KytdID0gdGhhdFstLWxlbmd0aF07XG4gICAgdGhhdFtsZW5ndGhdID0gdmFsdWU7XG4gIH0gcmV0dXJuIHRoYXQ7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b09mZnNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vZmZzZXQnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWwuSW50OEFycmF5O1xudmFyIEludDhBcnJheVByb3RvdHlwZSA9IEludDhBcnJheSAmJiBJbnQ4QXJyYXkucHJvdG90eXBlO1xudmFyICRzZXQgPSBJbnQ4QXJyYXlQcm90b3R5cGUgJiYgSW50OEFycmF5UHJvdG90eXBlLnNldDtcbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxudmFyIFdPUktTX1dJVEhfT0JKRUNUU19BTkRfR0VORVJJQ19PTl9UWVBFRF9BUlJBWVMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tdHlwZWQtYXJyYXlzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHZhciBhcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSgyKTtcbiAgY2FsbCgkc2V0LCBhcnJheSwgeyBsZW5ndGg6IDEsIDA6IDMgfSwgMSk7XG4gIHJldHVybiBhcnJheVsxXSAhPT0gMztcbn0pO1xuXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMTI5NCBhbmQgb3RoZXJcbnZhciBUT19PQkpFQ1RfQlVHID0gV09SS1NfV0lUSF9PQkpFQ1RTX0FORF9HRU5FUklDX09OX1RZUEVEX0FSUkFZUyAmJiBBcnJheUJ1ZmZlclZpZXdDb3JlLk5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBuZXcgSW50OEFycmF5KDIpO1xuICBhcnJheS5zZXQoMSk7XG4gIGFycmF5LnNldCgnMicsIDEpO1xuICByZXR1cm4gYXJyYXlbMF0gIT09IDAgfHwgYXJyYXlbMV0gIT09IDI7XG59KTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuc2V0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5zZXRcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3NldCcsIGZ1bmN0aW9uIHNldChhcnJheUxpa2UgLyogLCBvZmZzZXQgKi8pIHtcbiAgYVR5cGVkQXJyYXkodGhpcyk7XG4gIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMSk7XG4gIHZhciBzcmMgPSB0b0luZGV4ZWRPYmplY3QoYXJyYXlMaWtlKTtcbiAgaWYgKFdPUktTX1dJVEhfT0JKRUNUU19BTkRfR0VORVJJQ19PTl9UWVBFRF9BUlJBWVMpIHJldHVybiBjYWxsKCRzZXQsIHRoaXMsIHNyYywgb2Zmc2V0KTtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc3JjKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgaWYgKGxlbiArIG9mZnNldCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1dyb25nIGxlbmd0aCcpO1xuICB3aGlsZSAoaW5kZXggPCBsZW4pIHRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xufSwgIVdPUktTX1dJVEhfT0JKRUNUU19BTkRfR0VORVJJQ19PTl9UWVBFRF9BUlJBWVMgfHwgVE9fT0JKRUNUX0JVRyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgdHlwZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxudmFyIEZPUkNFRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXR5cGVkLWFycmF5cyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICBuZXcgSW50OEFycmF5KDEpLnNsaWNlKCk7XG59KTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnNsaWNlXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdzbGljZScsIGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxpc3QgPSBhcnJheVNsaWNlKGFUeXBlZEFycmF5KHRoaXMpLCBzdGFydCwgZW5kKTtcbiAgdmFyIEMgPSB0eXBlZEFycmF5U3BlY2llc0NvbnN0cnVjdG9yKHRoaXMpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICByZXR1cm4gcmVzdWx0O1xufSwgRk9SQ0VEKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkc29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5zb21lO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnNvbWVcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3NvbWUnLCBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkc29tZShhVHlwZWRBcnJheSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaW50ZXJuYWxTb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNvcnQnKTtcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciBGRiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtZmYtdmVyc2lvbicpO1xudmFyIElFX09SX0VER0UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWllLW9yLWVkZ2UnKTtcbnZhciBWOCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIFdFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtd2Via2l0LXZlcnNpb24nKTtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xudmFyIFVpbnQxNkFycmF5ID0gZ2xvYmFsLlVpbnQxNkFycmF5O1xudmFyIG5hdGl2ZVNvcnQgPSBVaW50MTZBcnJheSAmJiB1bmN1cnJ5VGhpcyhVaW50MTZBcnJheS5wcm90b3R5cGUuc29ydCk7XG5cbi8vIFdlYktpdFxudmFyIEFDQ0VQVF9JTkNPUlJFQ1RfQVJHVU1FTlRTID0gISFuYXRpdmVTb3J0ICYmICEoZmFpbHMoZnVuY3Rpb24gKCkge1xuICBuYXRpdmVTb3J0KG5ldyBVaW50MTZBcnJheSgyKSwgbnVsbCk7XG59KSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIG5hdGl2ZVNvcnQobmV3IFVpbnQxNkFycmF5KDIpLCB7fSk7XG59KSk7XG5cbnZhciBTVEFCTEVfU09SVCA9ICEhbmF0aXZlU29ydCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBmZWF0dXJlIGRldGVjdGlvbiBjYW4gYmUgdG9vIHNsb3csIHNvIGNoZWNrIGVuZ2luZXMgdmVyc2lvbnNcbiAgaWYgKFY4KSByZXR1cm4gVjggPCA3NDtcbiAgaWYgKEZGKSByZXR1cm4gRkYgPCA2NztcbiAgaWYgKElFX09SX0VER0UpIHJldHVybiB0cnVlO1xuICBpZiAoV0VCS0lUKSByZXR1cm4gV0VCS0lUIDwgNjAyO1xuXG4gIHZhciBhcnJheSA9IG5ldyBVaW50MTZBcnJheSg1MTYpO1xuICB2YXIgZXhwZWN0ZWQgPSBBcnJheSg1MTYpO1xuICB2YXIgaW5kZXgsIG1vZDtcblxuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCA1MTY7IGluZGV4KyspIHtcbiAgICBtb2QgPSBpbmRleCAlIDQ7XG4gICAgYXJyYXlbaW5kZXhdID0gNTE1IC0gaW5kZXg7XG4gICAgZXhwZWN0ZWRbaW5kZXhdID0gaW5kZXggLSAyICogbW9kICsgMztcbiAgfVxuXG4gIG5hdGl2ZVNvcnQoYXJyYXksIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIChhIC8gNCB8IDApIC0gKGIgLyA0IHwgMCk7XG4gIH0pO1xuXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IDUxNjsgaW5kZXgrKykge1xuICAgIGlmIChhcnJheVtpbmRleF0gIT09IGV4cGVjdGVkW2luZGV4XSkgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG52YXIgZ2V0U29ydENvbXBhcmUgPSBmdW5jdGlvbiAoY29tcGFyZWZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmIChjb21wYXJlZm4gIT09IHVuZGVmaW5lZCkgcmV0dXJuICtjb21wYXJlZm4oeCwgeSkgfHwgMDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmICh5ICE9PSB5KSByZXR1cm4gLTE7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoeCAhPT0geCkgcmV0dXJuIDE7XG4gICAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkgcmV0dXJuIDEgLyB4ID4gMCAmJiAxIC8geSA8IDAgPyAxIDogLTE7XG4gICAgcmV0dXJuIHggPiB5O1xuICB9O1xufTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuc29ydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuc29ydFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnc29ydCcsIGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gIGlmIChjb21wYXJlZm4gIT09IHVuZGVmaW5lZCkgYUNhbGxhYmxlKGNvbXBhcmVmbik7XG4gIGlmIChTVEFCTEVfU09SVCkgcmV0dXJuIG5hdGl2ZVNvcnQodGhpcywgY29tcGFyZWZuKTtcblxuICByZXR1cm4gaW50ZXJuYWxTb3J0KGFUeXBlZEFycmF5KHRoaXMpLCBnZXRTb3J0Q29tcGFyZShjb21wYXJlZm4pKTtcbn0sICFTVEFCTEVfU09SVCB8fCBBQ0NFUFRfSU5DT1JSRUNUX0FSR1VNRU5UUyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWwuSW50OEFycmF5O1xudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xudmFyICR0b0xvY2FsZVN0cmluZyA9IFtdLnRvTG9jYWxlU3RyaW5nO1xuXG4vLyBpT1MgU2FmYXJpIDYueCBmYWlscyBoZXJlXG52YXIgVE9fTE9DQUxFX1NUUklOR19CVUcgPSAhIUludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICR0b0xvY2FsZVN0cmluZy5jYWxsKG5ldyBJbnQ4QXJyYXkoMSkpO1xufSk7XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbMSwgMl0udG9Mb2NhbGVTdHJpbmcoKSAhPT0gbmV3IEludDhBcnJheShbMSwgMl0pLnRvTG9jYWxlU3RyaW5nKCk7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBJbnQ4QXJyYXkucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcbn0pO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUudG9sb2NhbGVzdHJpbmdcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3RvTG9jYWxlU3RyaW5nJywgZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKSB7XG4gIHJldHVybiBhcHBseShcbiAgICAkdG9Mb2NhbGVTdHJpbmcsXG4gICAgVE9fTE9DQUxFX1NUUklOR19CVUcgPyBhcnJheVNsaWNlKGFUeXBlZEFycmF5KHRoaXMpKSA6IGFUeXBlZEFycmF5KHRoaXMpLFxuICAgIGFycmF5U2xpY2UoYXJndW1lbnRzKVxuICApO1xufSwgRk9SQ0VEKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5O1xudmFyIFVpbnQ4QXJyYXlQcm90b3R5cGUgPSBVaW50OEFycmF5ICYmIFVpbnQ4QXJyYXkucHJvdG90eXBlIHx8IHt9O1xudmFyIGFycmF5VG9TdHJpbmcgPSBbXS50b1N0cmluZztcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbmlmIChmYWlscyhmdW5jdGlvbiAoKSB7IGFycmF5VG9TdHJpbmcuY2FsbCh7fSk7IH0pKSB7XG4gIGFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gam9pbih0aGlzKTtcbiAgfTtcbn1cblxudmFyIElTX05PVF9BUlJBWV9NRVRIT0QgPSBVaW50OEFycmF5UHJvdG90eXBlLnRvU3RyaW5nICE9PSBhcnJheVRvU3RyaW5nO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUudG9zdHJpbmdcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3RvU3RyaW5nJywgYXJyYXlUb1N0cmluZywgSVNfTk9UX0FSUkFZX01FVEhPRCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBVaW50OEFycmF5YCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10eXBlZGFycmF5LW9iamVjdHNcbmNyZWF0ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcignVWludDgnLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy50eXBlZC1hcnJheS5hdCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZmluZC1sYXN0LWluZGV4Jyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maW5kLWxhc3QnKTtcbiJdLCJuYW1lcyI6WyJDb3JlRW5naW5lIiwiUGxheWVyTWFuYWdlckhhbmRsZXIiLCJDYWNoZUhhbmRsZXIiLCJQbGF5ZXJFdmVudExpc3RlbmVyIiwiR2VuZXJpY1BsYXllckFwaSIsImFuYWx5dGljc01vZHVsZSIsImdldEluc3RhbmNlIiwicmVnaXN0ZXJQbGF5ZXJBZGFwdGVycyIsIkdlbmVyaWNQbGF5ZXJBZGFwdGVyIiwiX2FkYXB0ZXJzIiwiV2Vha01hcCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImxvYWRQbGF5ZXJBZGFwdGVycyIsIl9Db3JlRW5naW5lJHRoZW9wbGF5ZSIsIl9Db3JlRW5naW5lJHNoYWthTW9kdSIsIl9Db3JlRW5naW5lJGRhc2hqc01vZCIsIl9Db3JlRW5naW5lJGh0bWw1TW9kdSIsIl9Db3JlRW5naW5lJGF2cGxheU1vZCIsIl9Db3JlRW5naW5lJGRpdzM4N01vZCIsIl9Db3JlRW5naW5lJGhiYnR2MU1vZCIsIl9Db3JlRW5naW5lJGthbHR1cmFNbyIsIl9Db3JlRW5naW5lJGNvbm5lY3RwbCIsIl9Db3JlRW5naW5lJHJ4cGxheWVyTSIsIl9Db3JlRW5naW5lJGhsc2pzTW9kdSIsIl9Db3JlRW5naW5lJGJpdG1vdmluTSIsIl9Db3JlRW5naW5lJHJlYWN0bmF0aSIsIl9Db3JlRW5naW5lJHJlYWN0bmF0aTIiLCJfQ29yZUVuZ2luZSRjaHJvbWVjYXMiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJhZGRBZGFwdGVyIiwidGhlb3BsYXllck1vZHVsZSIsIlRIRU9QbGF5ZXJBZGFwdGVyIiwic2hha2FNb2R1bGUiLCJTaGFrYVBsYXllckFkYXB0ZXIiLCJkYXNoanNNb2R1bGUiLCJEYXNoSnNQbGF5ZXJBZGFwdGVyIiwiaHRtbDVNb2R1bGUiLCJIVE1MNVBsYXllckFkYXB0ZXIiLCJhdnBsYXlNb2R1bGUiLCJBVlBsYXlBZGFwdGVyIiwiZGl3Mzg3TW9kdWxlIiwiU2FnZW1jb21ESVczODdBZGFwdGVyIiwiaGJidHYxTW9kdWxlIiwiSGJiVFYxUGxheWVyQWRhcHRlciIsImthbHR1cmFNb2R1bGUiLCJLYWx0dXJhUGxheWVyQWRhcHRlciIsImNvbm5lY3RwbGF5ZXJNb2R1bGUiLCJDb25uZWN0UGxheWVyQWRhcHRlciIsInJ4cGxheWVyTW9kdWxlIiwiUnhQbGF5ZXJBZGFwdGVyIiwiaGxzanNNb2R1bGUiLCJIbHNKc1BsYXllckFkYXB0ZXIiLCJiaXRtb3Zpbk1vZHVsZSIsIkJpdG1vdmluUGxheWVyQWRhcHRlciIsInJlYWN0bmF0aXZlY29ubmVjdHBsYXllck1vZHVsZSIsIlJlYWN0TmF0aXZlQ29ubmVjdFBsYXllckFkYXB0ZXIiLCJyZWFjdG5hdGl2ZXRoZW9wbGF5ZXJNb2R1bGUiLCJSZWFjdE5hdGl2ZVRIRU9wbGF5ZXJBZGFwdGVyIiwiY2hyb21lY2FzdE1vZHVsZSIsIkNocm9tZWNhc3RQbGF5ZXJBZGFwdGVyIiwibmFtZSIsImFkYXB0ZXIiLCJ1bmRlZmluZWQiLCJhdHRhY2hQbGF5ZXIiLCJwbGF5ZXIiLCJsaXN0ZW5lciIsImNoZWNrUGxheWVyIiwiZGVmYXVsdCIsIkxvZ2dlck1hbmFnZXIiLCJUQUciLCJQUkVGSVgiLCJfdGhpcyIsIl9kZWZpbmVQcm9wZXJ0eSIsImQiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yYWdlIiwia2V5cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZmlsdGVyIiwic3RhcnRzV2l0aCIsIm1hcCIsImdldEl0ZW0iLCJmb3JFYWNoIiwiY2FjaGUiLCJzZXQiLCJzZXRUaW1lb3V0IiwiX2xvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXQiLCJrZXlJbmNsdWRlc1ByZWZpeCIsImFyZ3VtZW50cyIsIml0ZW0iLCJfZGVsZXRlIiwiX2xvY2FsU3RvcmFnZTIiLCJyZW1vdmVJdGVtIiwiT2JqZWN0IiwicmVwbGFjZSIsIk1ldHJpY3MiLCJtZXRyaWNzIiwicmVkaXJlY3Rpb25UaW1lIiwic3RhcnR1cFRpbWUiLCJjb21wbGV0aW9uIiwicGxheWJhY2tUeXBlIiwicGxheWJhY2tEdXJhdGlvbiIsInNlc3Npb25EdXJhdGlvbiIsImNvbnRlbnREdXJhdGlvbiIsInN0YWxsc051bWJlciIsIm1heFN0YWxsRHVyYXRpb24iLCJ0b3RhbFN0YWxsc0R1cmF0aW9uIiwicmVidWZmZXJpbmdzTnVtYmVyIiwibWF4UmVidWZmZXJpbmdEdXJhdGlvbiIsInRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbiIsIm1pbkJpdHJhdGUiLCJtYXhCaXRyYXRlIiwiYXZlcmFnZUJpdHJhdGUiLCJsYXllclN3aXRjaGVzTnVtYmVyIiwidGltZVNwZW50UGVyTGF5ZXIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwcmVTdGFydHVwVGltZSIsIk1ldHJpY3NCdWlsZGVyIiwicmVzZXQiLCJzZXRSZWRpcmVjdGlvblRpbWUiLCJzZXRTdGFydHVwVGltZSIsInNldFNlc3Npb25EdXJhdGlvbiIsInNldENvbnRlbnREdXJhdGlvbiIsInNldFBsYXliYWNrVHlwZSIsInNldEZpcnN0TGF5ZXIiLCJiaXRyYXRlIiwic2V0UHJlU3RhcnR1cFRpbWUiLCJhZGRUaW1lU3BlbnRQZXJMYXllciIsImR1cmF0aW9uIiwiTWF0aCIsInJvdW5kIiwidGltZVNwZW50T25MYXllciIsImFkZExheWVyU3dpdGNoIiwiYWRkUGxheWJhY2tEdXJhdGlvbiIsImFkZFdhdGNoaW5nUmFuZ2UiLCJzdGFydCIsImVuZCIsInYiLCJ3YXRjaGluZ1JhbmdlcyIsImFkZFN0YWxsIiwiYWRkUmVidWZmZXJpbmciLCJjbG9uZSIsImJ1aWxkZXIiLCJjb21wdXRlQ29tcGxldGlvbiIsIlBMQVlCQUNLX1RZUEVfTElWRSIsInJhbmdlcyIsImludGVydmFscyIsInNsaWNlIiwiZmxvb3IiLCJzdGFjayIsInRvcCIsInNvcnQiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJwYXJzZUludCIsInBvcCIsImJ1aWxkIiwibGF5ZXJQZXJEdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJEYXRlVXRpbHMiLCJTZXNzaW9uVHJhY2tlckV2ZW50cyIsIk1ldHJpY3NNYW5hZ2VyIiwiaGFuZGxlciIsInBsYXllckFkYXB0ZXIiLCJ0aW1lbGluZSIsInNlc3Npb25SZXBvcnQiLCJzdGFydGVkIiwicGxheWluZyIsImJ1ZmZlcmluZyIsInNlZWtpbmciLCJyZWRpcmVjdGlvblN0YXJ0RGF0ZSIsIkRhdGUiLCJub3ciLCJwbGF5aW5nU3RhcnREYXRlIiwiYnVmZmVyaW5nU3RhcnREYXRlIiwibGFzdExheWVyU3dpdGNoRGF0ZSIsImxhc3RTZWVrRGF0ZSIsInBsYXlPbk5leHRCdWZmZXJpbmdFbmQiLCJzdGFydFBvc2l0aW9uIiwib25TdGFydCIsIm9uUmVkaXJlY3Rpb25FbmQiLCJvbkZpcnN0SW1hZ2UiLCJmb3JtYXRUaW1lIiwiaWQiLCJnZXREdXJhdGlvbiIsIlBMQVlCQUNLX1RZUEVfVk9EIiwib25MYXllclN3aXRjaCIsIl90aGlzJHRpbWVsaW5lIiwicHVzaEV2ZW50Qml0cmF0ZSIsIkxheWVyU3dpdGNoIiwib25QYXVzZSIsIl90aGlzJHRpbWVsaW5lMiIsInB1c2hFdmVudCIsIlBhdXNlIiwiZ2V0UG9zaXRpb24iLCJvblJlc3VtZSIsIl90aGlzJHRpbWVsaW5lMyIsIlJlc3VtZSIsIm9uQnVmZmVyaW5nU3RhcnQiLCJfdGhpcyR0aW1lbGluZTQiLCJCdWZmZXJpbmdTdGFydCIsImN1cnJlbnREYXRlIiwiTUFYX1RJTUVfQkVUV0VFTl9TRUVLX0FORF9SRUJVRkZFUklORyIsIm9uQnVmZmVyaW5nRW5kIiwiaXNQbGF5aW5nIiwibm90aWZ5UmVidWZmZXJpbmdFbmQiLCJub3RpZnlTdGFsbEVuZCIsIm9uU3RhbGxFbmQiLCJfdGhpcyR0aW1lbGluZTUiLCJidWZmZXJpbmdEdXJhdGlvbiIsIlN0YWxsU3RvcCIsIm9uUmVidWZmZXJpbmdFbmQiLCJfdGhpcyR0aW1lbGluZTYiLCJSZWJ1ZmZlcmluZ1N0b3AiLCJvblNlZWsiLCJfdGhpcyR0aW1lbGluZTciLCJwdXNoRXZlbnRQb3NpdGlvblN0YXJ0RW5kIiwiU2VlayIsIm9uU3RvcCIsInN0YXR1c0NvZGUiLCJvblN0YXJ0U2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZCIsIm9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZCIsInByZVN0YXJ0dXBUaW1lU3RyaW5nIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsImlzTmFOIiwib25FbmRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkIiwiUGxheWVyQWRhcHRlciIsIk9iamVjdFV0aWxzIiwiX1BsYXllckFkYXB0ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjYWxsIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImdldE5hbWUiLCJnZXRQbGF5ZXJOYW1lIiwiZ2V0VmVyc2lvbiIsImdldE9TTmFtZSIsImdldE9TVmVyc2lvbiIsImdldERldmljZVZlcnNpb24iLCJnZXREZXZpY2VUeXBlIiwiZ2V0Qml0cmF0ZSIsImdldEN1cnJlbnRCaXRyYXRlIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZ2V0VG90YWxEdXJhdGlvbiIsImdldENhcGFiaWxpdGllcyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJkZXRhY2hQbGF5ZXIiLCJoYXNNZXRob2RzIiwibm90aWZ5Rmlyc3RJbWFnZSIsImUiLCJub3RpZnlQYXVzZSIsIm5vdGlmeVJlc3VtZSIsIm5vdGlmeUxheWVyU3dpdGNoIiwibm90aWZ5U3RhbGxTdGFydCIsIm5vdGlmeVNlZWsiLCJzZXRQbGF5ZXJFcnJvckNvZGUiLCJwbGF5ZXJFcnJvckNvZGUiLCJBcHBTdGF0ZU1hbmFnZXIiLCJ3ZWJPUyIsImRldmljZUluZm8iLCJpbmZvIiwid2ViT1NWZXJzaW9uIiwic2RrVmVyc2lvbiIsIm9zTmFtZSIsIm9zVmVyc2lvbiIsImRldmljZVR5cGUiLCJnZXRWb2x1bWUiLCJpbml0U2Vzc2lvblBsYXllck9iamVjdHMiLCJyZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMiLCJwbGF5ZXJOYW1lIiwicGxheWVyVmVyc2lvbiIsIm5vdGlmeUxvYWRpbmciLCJub3RpZnlCdWZmZXJpbmdTdGFydCIsIm5vdGlmeUJ1ZmZlcmluZ0VuZCIsIm5vdGlmeUNsb3NlIiwiYnJvYWRwZWFrU3RhdHVzQ29kZSIsIm5vdGlmeVZvbHVtZUNoYW5nZWQiLCJ2b2x1bWUiLCJub3RpZnlQbGF5ZXJFcnJvciIsImF0dGFjaFNlc3Npb24iLCJkZXRhY2hTZXNzaW9uIiwic2V0U3RhdHVzQ29kZSIsIlN0cmluZyIsInNldEN1c3RvbVBhcmFtZXRlciIsInN0cmVhbWluZ1Nlc3Npb24iLCJhZGRQbGF5ZXJBZGFwdGVyIiwicGxheWVyQWRhcHRlcnMiLCJpbmRleE9mIiwicmVtb3ZlUGxheWVyQWRhcHRlciIsImluZGV4Iiwic3BsaWNlIiwiaXNTdGFydGVkIiwiYWRhcHRlcnMiLCJtZXRyaWNzTWFuYWdlciIsImlzQnVmZmVyaW5nIiwib25TZXNzaW9uU3RhcnQiLCJvblNlc3Npb25QYXVzZSIsIm9uU2Vzc2lvblJlc3VtZSIsIm9uU3RhbGxTdGFydCIsIkFic3RyYWN0UGxheWVyTWFuYWdlckhhbmRsZXIiLCJfcGxheWVyTWFuYWdlckhhbmRsZXIiLCJfcGxheWVyQWRhcHRlcnMiLCJfcGxheWVyQWRhcHRlciIsIlBsYXllck1hbmFnZXIiLCJpbml0IiwicGxheWVyTWFuYWdlckhhbmRsZXIiLCJyZWxlYXNlIiwic2V0UGxheWVyQWRhcHRlciIsImF0dGFjaEluc3RhbmNlIiwic21hcnRMaWIiLCJnZXRBZGFwdGVycyIsImdldFBsYXllckFkYXB0ZXIiLCJfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0IiwiX2luc3RhbmNlIiwiX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY1NldCIsIk1hdGhVdGlscyIsIlNtYXJ0TGliIiwiQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIiLCJCcm9hZHBlYWtDRE5LZWVwYWxpdmVNYW5hZ2VyIiwiS2VlcEFsaXZlTWFuYWdlciIsIkFic3RyYWN0Q2FjaGVIYW5kbGVyIiwiQ2FjaGVNYW5hZ2VyIiwiY2FjaGVIYW5kbGVyIiwiZ2V0Q2FjaGVEYXRhIiwic2VuZGluZyIsInN0b3JlIiwiZGF0YSIsImJhc2U2NFRvU3RyaW5nIiwibWVzc2FnZSIsImRlbGV0ZSIsInN0cmluZ1RvQmFzZTY0IiwidXBkYXRlIiwic3RvcmVTZXNzaW9uUmVwb3J0IiwiYWRkcmVzcyIsInJlcG9ydCIsImNsZWFuIiwiZGF0ZSIsInJhbmRvbUludEZyb21JbnRlcnZhbCIsInZlcnNpb24iLCJkZWxldGVTZXNzaW9uUmVwb3J0Iiwic3RvcmVLZWVwYWxpdmVSZXBvcnQiLCJkZWxldGVLZWVwYWxpdmVSZXBvcnQiLCJzZXNzaW9uSWQiLCJfdGhpczIiLCJfdGhpczMiLCJfU21hcnRMaWIkYW5hbHl0aWNzTW8iLCJkZWxheSIsImVuZFNlc3Npb25DYWNoZSIsImdldFBhcmFtZXRlcnMiLCJ0aGVuIiwic2VudCIsImNsZWFuRXhwaXJlZERhdGEiLCJfdGhpczQiLCJDQUNIRV9EVVJBVElPTiIsImEiLCJiIiwiX3RoaXM1Iiwia2VlcGFsaXZlUmVwb3J0cyIsImFjdGl2ZVNlc3Npb25JZHMiLCJzZXNzaW9uTWFuYWdlciIsInNlc3Npb25zIiwic2Vzc2lvbiIsIl9zZXNzaW9uJGhhbmRsZXIiLCJ0aW1lb3V0IiwiYW5hbHl0aWNzQWRkcmVzc2VzIiwic3BsaXQiLCJhbmFseXRpY3NBZGRyZXNzIiwiTk9DQUNIRV9QUkVGSVgiLCJidWlsZEFuYWx5dGljc0FkZHJlc3MiLCJzZXNzaW9uUmVwb3J0cyIsIkNBQ0hFX0xJTUlUIiwiQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyIiwiX0tlZXBBbGl2ZU1hbmFnZXIiLCJfdGhpczYiLCJjYWxsYmFjayIsInBhcmFtZXRlcnMiLCJuZXh0Iiwic3RvcCIsIl9TbWFydExpYiRhbmFseXRpY3NNbzIiLCJ0b0VuZFNlc3Npb25KU09OIiwiX1NtYXJ0TGliJGFuYWx5dGljc01vMyIsIkJyb2FkcGVha0NETkNhY2hlS2VlcGFsaXZlTWFuYWdlciIsIl9Ccm9hZHBlYWtDRE5LZWVwYWxpdiIsIl9zdXBlcjIiLCJfdGhpczciLCJjYWNoZUtlZXBhbGl2ZU1hbmFnZXIiLCJTZXNzaW9uVHJhY2tlclRpbWVsaW5lIiwiU2Vzc2lvblRyYWNrZXJFdmVudCIsIkFuYWx5dGljc1Nlc3Npb24iLCJKb2JNYW5hZ2VyIiwidHJpbSIsImVuZHNXaXRoIiwiTUVUUklDU19SRUNFSVZFUl9QQVRIIiwiZW5kU2Vzc2lvbiIsInByb21pc2VzIiwicmVwb3J0SWQiLCJzdWJzdHJpbmciLCJwcm9taXNlIiwicG9zdFNlc3Npb24iLCJyZXN1bHQiLCJodHRwU3RhdHVzIiwiUHJvbWlzZSIsImFsbCIsInciLCJyZXNvbHZlIiwic2Vzc2lvblJlcG9ydEpzb24iLCJ1cmwiLCJib2R5IiwicmVqZWN0IiwiaGVhZGVycyIsInVzZXJBZ2VudCIsImVuY29kZWRCb2R5IiwiYXN5bmNQb3N0IiwiUE9TVF9TRVNTSU9OX1JFUVVFU1RfVElNRU9VVCIsIlN0cmVhbWluZ1Nlc3Npb24iLCJfU3RyZWFtaW5nU2Vzc2lvbiIsIm9wdGlvbnMiLCJnZXRVUkwiLCJnZXRRdWVyeSIsInN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiIsInN0b3BBbmFseXRpY3NTZXNzaW9uIiwic3RvcFN0cmVhbWluZ1Nlc3Npb24iLCJjcmVhdGVTZXNzaW9uSGFuZGxlciIsImluaXRQbGF5ZXJBZGFwdGVyIiwiYWRkTGlzdGVuZXIiLCJvbkxvYWRpbmciLCJhZFNlc3Npb24iLCJjYXRjaCIsInVwZGF0ZVNlc3Npb25SZXBvcnRWYWx1ZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJvbkNsb3NlIiwiU2Vzc2lvblRyYWNrZXJTdW1tYXJ5IiwiQnl0ZUJ1ZmZlciIsIlNlc3Npb25UcmFja2VyRW5jb2RlciIsIm1heEJ1ZmZlclNpemUiLCJERUZBVUxUX0JVRkZFUl9TSVpFIiwibWF4RW5kRXZlbnRzRHVyYXRpb24iLCJERUZBVUxUX0VORF9FVkVOVFNfRFVSQVRJT04iLCJtYXhFbmRFdmVudHNOdW1iZXIiLCJERUZBVUxUX0VORF9FVkVOVFNfTlVNQkVSIiwiZXZlbnRzIiwidW5jb21wcmVzc2VkRGF0YSIsInVuY29tcHJlc3NlZERhdGFGdWxsIiwiY29tcHJlc3NlZFN0YXJ0RGF0YSIsIm1pblN1bW1hcnlJbmRleCIsIm1heEVuZEJ1ZmZlclNpemUiLCJzdW1tYXJ5Iiwib25FdmVudEFkZGVkIiwiZXZlbnQiLCJwcmV2aW91c0V2ZW50IiwiY29tcHJlc3NlZERhdGEiLCJ0b0RhdGEiLCJldmVudERhdGUiLCJjb21wcmVzc2VkIiwiY2FwYWNpdHkiLCJyZW1haW5pbmciLCJwdXRCeXRlQnVmZmVyIiwib25FdmVudFVwZGF0ZWQiLCJwcm9jZXNzIiwib3V0cHV0TG9nIiwiZW5kQnVmZmVycyIsInNpemUiLCJtYXhTdW1tYXJ5SW5kZXgiLCJidWZmZXIiLCJsYXN0RXZlbnQiLCJtYXhTaXplIiwiQlVGRkVSX1NJWkUiLCJwdXQiLCJFbXB0eVN1bW1hcnkiLCJzdW1tYXJ5QnVmZmVyIiwidG9TdHJpbmciLCJleHRlbmQiLCJOb25lIiwiU3RhcnQiLCJTdG9wIiwiUmVkaXJlY3Rpb25FbmQiLCJGaXJzdEltYWdlIiwiU3RhbGxTdGFydCIsIlJlYnVmZmVyaW5nU3RhcnQiLCJBZEJyZWFrU3RhcnQiLCJBZEJyZWFrU3RvcCIsIk5ldHdvcmtBdmFpbGFibGUiLCJOZXR3b3JrTG9zdCIsIk11dGUiLCJVbm11dGUiLCJNdWx0aWNhc3QiLCJVbmljYXN0IiwiRGF0YVN1bW1hcnkiLCJUWVBFU19XSVRIT1VUX0RBVEEiLCJUWVBFU19TVEFSVCIsIlRZUEVTX1dJVEhfQklUUkFURSIsIlRZUEVTX1dJVEhfQklUUkFURV9QT1NJVElPTiIsIlRZUEVTX1dJVEhfUE9TSVRJT05TX1NUQVJUX0VORCIsIlRZUEVTX1dJVEhfU1RBVFVTX0NPREUiLCJUWVBFU19XSVRIX1BST0dSRVNTIiwiVFlQRVNfV0lUSF9TVEFURSIsInR5cGUiLCJldmVudElkIiwiZXZlbnREYXRhIiwic3RhcnRTdG9wRXZlbnQiLCJzdGFydEV2ZW50SWQiLCJzdG9wRXZlbnRJZCIsInRyaWdnZXJTdGFydEV2ZW50SWQiLCJrZWVwTGFzdE9ubHkiLCJhdHRhY2hFdmVudElkIiwiYXR0YWNoTWF4RHVyYXRpb25CZWZvcmVTdGFydCIsInN0YXJ0RXZlbnQiLCJzdG9wRXZlbnQiLCJhdHRhY2hlZEV2ZW50IiwiYWRkRGF0YVNpemVJblRpbWVsaW5lIiwidXBkYXRlTWV0YWRhdGEiLCJnZXRFdmVudE5hbWUiLCJpc1N0YXJ0RXZlbnQiLCJpc1N0b3BFdmVudCIsImFkZEV2ZW50RGF0YSIsInByZXZpb3VzRXZlbnREYXRlIiwiYWJzIiwiZW1wdHlFdmVudENvdW50IiwicmVtYWluaW5nRHVyYXRpb24iLCJkYXRhTGVuZ3RoIiwicHV0Q2hhciIsIm5ldHdvcmtUeXBlIiwibXV0ZVN0YXRlIiwiYml0cmF0ZUZpcnN0SW1hZ2UiLCJwb3NpdGlvbiIsInBvc2l0aW9uU3RhcnQiLCJwb3NpdGlvbkVuZCIsImJpdHJhdGVMYXllclN3aXRjaCIsInByb2dyZXNzIiwiZm9ybWF0RGF0ZSIsInRpbWVzdGFtcCIsInByaW50IiwibWluSW5kZXgiLCJpbml0aWFsQml0cmF0ZSIsInN1bW1hcnlEdXJhdGlvbiIsInBhdXNlRHVyYXRpb24iLCJuYk5ldHdvcmtEaXNjb25uZWN0ZWQiLCJuYk5ldHdvcmtXaWZpIiwibmJOZXR3b3JrTW9iaWxlIiwibmJOZXR3b3JrRXRoZXJuZXQiLCJsYXN0TmV0d29ya1N0YXRlIiwibXV0ZUR1cmF0aW9uIiwibGFzdE11dGVTdGF0ZSIsIm1heEluZGV4IiwibWluRXZlbnQiLCJtYXhFdmVudCIsImxhc3RNdXRlRGF0ZSIsInBhdXNlZCIsInN0YWxsaW5nIiwicmVidWZmZXJpbmciLCJFTVBUWSIsInN0YXJ0RGF0ZSIsInN0b3BEYXRlIiwiZmlyc3RJbWFnZVdpdGhvdXRCaXRyYXRlRXZlbnQiLCJlbmNvZGVyIiwiY2hlY2tUeXBlIiwiY3JlYXRlRXZlbnQiLCJwdXNoRXZlbnRTdGFydCIsInB1c2hFdmVudEJpdHJhdGVQb3NpdGlvbiIsInB1c2hFdmVudFN0YXR1c0NvZGUiLCJwdXNoRXZlbnRQcm9ncmVzcyIsInB1c2hFdmVudFN0YXRlIiwic3RhdGUiLCJhcHBseUtlZXBMYXN0T25seSIsInVwZGF0ZVRpbWVsaW5lUHJvcGVydGllcyIsInJlY29uY2lsaWF0ZVN0b3BXaXRoU3RhcnRFdmVudCIsInR5cGVzIiwidGltZWxpbmVFdmVudCIsImF0dGFjaEV2ZW50IiwibWluRGF0ZSIsIm9uRm9yZWdyb3VuZCIsIm9uQmFja2dyb3VuZCIsIm9uTmV0d29ya0F2YWlsYWJsZSIsIm9uTmV0d29ya0xvc3QiLCJvbk11dGUiLCJvblVubXV0ZSIsIm9uTXVsdGljYXN0VXNlZCIsIm9uVW5pY2FzdFVzZWQiLCJqb2luIiwiVWludDhBcnJheSIsImJ5dGVCdWZmZXIiLCJiYXNlNjQiLCJidWZmZXJUb0Jhc2U2NCIsImJ1ZmZlclRvU3RyaW5nIiwiX2NsYXNzIiwib2JqZWN0IiwibWV0aG9kcyIsImNvdW50IiwiY29uZGl0aW9uIiwicHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9