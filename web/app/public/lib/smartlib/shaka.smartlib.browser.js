"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("shakaSmartLibModule", [], factory);
	else if(typeof exports === 'object')
		exports["shakaSmartLibModule"] = factory();
	else
		root["shakaSmartLibModule"] = factory();
})((function() { return (typeof self !== 'undefined' ? self : global)})(), function() {
return ((function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] = (function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] || []).push([["shaka"],{

/***/ "./players/shaka/ShakaPlayerAdapter.js":
/*!*********************************************!*\
  !*** ./players/shaka/ShakaPlayerAdapter.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShakaPlayerAdapter; }
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
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core */ "./src_core/index.js");
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! analytics */ "./src_core/index.analytics.js");
/* harmony import */ var _src_engine_player_PlayerStateManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/engine/player/PlayerStateManager */ "./src/engine/player/PlayerStateManager.js");
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
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }



var TAG = 'BpkShakaPlayerAdapter';
var _player = /*#__PURE__*/new WeakMap();
var _listener = /*#__PURE__*/new WeakMap();
var ShakaPlayerAdapter = /*#__PURE__*/function (_PlayerAdapter) {
  function ShakaPlayerAdapter() {
    var _this;
    _classCallCheck(this, ShakaPlayerAdapter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ShakaPlayerAdapter, [].concat(args));
    _classPrivateFieldInitSpec(_this, _player, void 0);
    _classPrivateFieldInitSpec(_this, _listener, void 0);
    _defineProperty(_this, "loading", void 0);
    _defineProperty(_this, "started", void 0);
    _defineProperty(_this, "bitrate", void 0);
    _defineProperty(_this, "playingEventReceived", void 0);
    _defineProperty(_this, "requestedURLReceived", void 0);
    _defineProperty(_this, "redirectedURLReceived", void 0);
    _defineProperty(_this, "loadingError", void 0);
    _defineProperty(_this, "playerStateManager", void 0);
    _defineProperty(_this, "playerListeners", void 0);
    return _this;
  }
  _inherits(ShakaPlayerAdapter, _PlayerAdapter);
  return _createClass(ShakaPlayerAdapter, [{
    key: "onPlayEvent",
    value:
    // todo fix pause just before rebuffering

    function onPlayEvent() {
      if (this.started) {
        this.notifyResume();
      }
    }
  }, {
    key: "onPlayingEvent",
    value: function onPlayingEvent() {
      this.playingEventReceived = true;
      if (!this.started) {
        var isBuffering = _classPrivateFieldGet(_player, this).isBuffering();
        if (!isBuffering) {
          this.started = true;
          this.playerStateManager.start();
          this.notifyFirstImage();
        } else {
          core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, 'Player is still buffering, first image event not yet triggered');
        }
      }
    }
  }, {
    key: "onPauseEvent",
    value: function onPauseEvent() {
      this.notifyPause();
    }
  }, {
    key: "onBuffering",
    value: function onBuffering() {
      var isBuffering = _classPrivateFieldGet(_player, this).isBuffering();
      if (core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.getInstance().isAnalyticsInitialized() === true && this.requestedURLReceived === false) {
        this.requestedURLReceived = true;
        var uri = _classPrivateFieldGet(_player, this).getAssetUri();
        if (uri !== null && uri !== undefined) {
          core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, 'Requested URL: ' + uri);
          this.setCustomParameter('report.requestedURL', uri);
        } else {
          core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, 'Playback not started');
          var bpkErrorCode;
          if (this.loadingError !== undefined) {
            bpkErrorCode = this.getErrorCode(this.loadingError);
            this.setPlayerErrorCode(this.loadingError.code);
          }
          this.notifyPlayerError(bpkErrorCode, this.loadingError.code);
          this.notifyClose(bpkErrorCode);
        }
      }
      if (this.started) {
        if (isBuffering) {
          if (this.playerStateManager !== undefined) {
            this.playerStateManager.forcePollPlayerPosition();
          }
          this.notifyStallStart();
        } else {
          this.notifyStallEnd();
          this.setStatusCode(core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPSessionEndsNormally);
          this.setPlayerErrorCode('');
        }
      } else {
        if (!isBuffering && this.playingEventReceived) {
          this.started = true;
          this.playerStateManager.start();
          this.notifyFirstImage();
        }
      }
    }
  }, {
    key: "onLayerSwitchEvent",
    value: function onLayerSwitchEvent() {
      var bitrate = this.getBitrate();
      if (bitrate !== this.bitrate) {
        this.bitrate = bitrate;
        this.notifyLayerSwitch(bitrate);
      }
    }
  }, {
    key: "onVariantChanged",
    value: function onVariantChanged() {
      this.onLayerSwitchEvent();
    }
  }, {
    key: "onLoadingEvent",
    value: function onLoadingEvent() {
      if (this.loading === false) {
        this.loading = true;
        this.notifyLoading();
      }
    }
  }, {
    key: "onStateChangeEvent",
    value: function onStateChangeEvent(event) {
      if (event.state === 'unload') {
        this.notifyClose();
      }
    }
  }, {
    key: "onNetworkResponseEvent",
    value: function onNetworkResponseEvent(type, response) {
      if (type === 0) {
        if (core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.getInstance().isAnalyticsInitialized() === true && this.redirectedURLReceived === false) {
          this.redirectedURLReceived = true;
          core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, 'Resolved redirected URL: ' + response.uri);
          this.setCustomParameter('report.redirectedURL', response.uri);
        }
      }
    }
  }, {
    key: "handleSeek",
    value: function handleSeek(start, end) {
      this.notifySeek(start, end);
    }
  }, {
    key: "onErrorEvent",
    value: function onErrorEvent(error) {
      if (error.detail.severity === ShakaPlayerAdapter.library.util.Error.Severity.CRITICAL) {
        var bpkErrorCode = this.getErrorCode(error.detail);
        var playerErrorCode = error.detail.code;
        core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'On player error : ' + playerErrorCode);
        this.setStatusCode(bpkErrorCode);
        this.setPlayerErrorCode(playerErrorCode);
        this.notifyPlayerError(bpkErrorCode, playerErrorCode);
      }
    }
  }, {
    key: "onVolumeChange",
    value: function onVolumeChange() {
      this.notifyVolumeChanged(this.getVolume());
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      if (_classPrivateFieldGet(_player, this) !== undefined) {
        if (_classPrivateFieldGet(_player, this).getMediaElement().muted === true) {
          return 0.0;
        }
        return _classPrivateFieldGet(_player, this).getMediaElement().volume;
      }
      return 1.0;
    }
  }, {
    key: "getName",
    value: function getName() {
      return 'Shaka Player';
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      var version = ShakaPlayerAdapter.library.Player.version.substring(0, 32);
      var longVersionIndex = version.indexOf(' ');
      if (longVersionIndex >= 0) {
        return version.substring(0, longVersionIndex);
      }
      return version;
    }
  }, {
    key: "getBitrate",
    value: function getBitrate() {
      if (_classPrivateFieldGet(_player, this) !== undefined) {
        var variantTracks = _classPrivateFieldGet(_player, this).getVariantTracks();
        for (var i = 0; i < variantTracks.length; i++) {
          var variantTrack = variantTracks[i];
          if (variantTrack.active === true) {
            return Math.round(variantTrack.bandwidth / 1000);
          }
        }
      }
      return 0;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      if (_classPrivateFieldGet(_player, this) !== undefined) {
        return Math.round(_classPrivateFieldGet(_player, this).isLive() ? _classPrivateFieldGet(_player, this).getPlayheadTimeAsDate().getTime() : _classPrivateFieldGet(_player, this).getMediaElement().currentTime * 1000);
      }
      return 0;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (_classPrivateFieldGet(_player, this) !== undefined && !_classPrivateFieldGet(_player, this).isLive()) {
        return Math.round(_classPrivateFieldGet(_player, this).getMediaElement().duration * 1000);
      }
      return 0;
    }
  }, {
    key: "getCapabilities",
    value: function getCapabilities() {
      return {
        'adTracking': true
      };
    }
  }, {
    key: "getErrorCode",
    value: function getErrorCode(error) {
      switch (error.category) {
        case ShakaPlayerAdapter.library.util.Error.Category.NETWORK:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPNetworkingError;
        case ShakaPlayerAdapter.library.util.Error.Category.TEXT:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPFormatNotSupportedError;
        case ShakaPlayerAdapter.library.util.Error.Category.MEDIA:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPFormatNotSupportedError;
        case ShakaPlayerAdapter.library.util.Error.Category.MANIFEST:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPFormatNotSupportedError;
        case ShakaPlayerAdapter.library.util.Error.Category.STREAMING:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPDecodingError;
        case ShakaPlayerAdapter.library.util.Error.Category.DRM:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPAccessRightError;
        case ShakaPlayerAdapter.library.util.Error.Category.PLAYER:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPUnspecifiedError;
        case ShakaPlayerAdapter.library.util.Error.Category.CAST:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPUnspecifiedError;
        case ShakaPlayerAdapter.library.util.Error.Category.STORAGE:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPUnspecifiedError;
        default:
          return core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.BPUnspecifiedError;
      }
    }
  }, {
    key: "setLoadingError",
    value: function setLoadingError(loadingError) {
      this.loadingError = loadingError;
    }
  }, {
    key: "initSessionPlayerObjects",
    value: function initSessionPlayerObjects() {
      this.loading = false;
      this.started = false;
      this.bitrate = 0;
      this.playingEventReceived = false;
      this.requestedURLReceived = false;
      this.redirectedURLReceived = false;
      this.loadingError = undefined;
      if (_classPrivateFieldGet(_player, this) !== undefined) {
        if (this.playerStateManager !== undefined) {
          this.playerStateManager.stop();
        }
        this.playerStateManager = new _src_engine_player_PlayerStateManager__WEBPACK_IMPORTED_MODULE_17__["default"](this, this);
        this.playerListeners = [this.onPlayEvent.bind(this),
        // 0
        this.onPauseEvent.bind(this),
        // 1
        this.onBuffering.bind(this),
        // 2
        this.onLayerSwitchEvent.bind(this),
        // 3
        this.onErrorEvent.bind(this),
        // 4
        this.onPlayingEvent.bind(this),
        // 5
        this.onVariantChanged.bind(this),
        // 6
        this.onLoadingEvent.bind(this),
        // 7
        this.onStateChangeEvent.bind(this),
        // 8
        this.onNetworkResponseEvent.bind(this),
        // 9
        this.onVolumeChange.bind(this) // 10
        ];
        _classPrivateFieldGet(_player, this).getMediaElement().addEventListener('play', this.playerListeners[0]);
        _classPrivateFieldGet(_player, this).getMediaElement().addEventListener('pause', this.playerListeners[1]);
        _classPrivateFieldGet(_player, this).addEventListener('buffering', this.playerListeners[2]);
        _classPrivateFieldGet(_player, this).addEventListener('adaptation', this.playerListeners[3]);
        _classPrivateFieldGet(_player, this).addEventListener('error', this.playerListeners[4]);
        _classPrivateFieldGet(_player, this).getMediaElement().addEventListener('playing', this.playerListeners[5]);
        _classPrivateFieldGet(_player, this).addEventListener('variantchanged', this.playerListeners[6]);
        _classPrivateFieldGet(_player, this).addEventListener('loading', this.playerListeners[7]);
        _classPrivateFieldGet(_player, this).addEventListener('onstatechange', this.playerListeners[8]);
        _classPrivateFieldGet(_player, this).getNetworkingEngine().registerResponseFilter(this.playerListeners[9]);
        _classPrivateFieldGet(_player, this).getMediaElement().addEventListener('volumechange', this.playerListeners[10]);
      }
    }
  }, {
    key: "releaseSessionPlayerObjects",
    value: function releaseSessionPlayerObjects() {
      if (this.playerStateManager !== undefined) {
        this.playerStateManager.stop();
        this.playerStateManager = undefined;
      }
      if (_classPrivateFieldGet(_player, this) !== undefined && this.playerListeners !== undefined && this.playerListeners.length > 0) {
        _classPrivateFieldGet(_player, this).getMediaElement().removeEventListener('play', this.playerListeners[0]);
        _classPrivateFieldGet(_player, this).getMediaElement().removeEventListener('pause', this.playerListeners[1]);
        _classPrivateFieldGet(_player, this).removeEventListener('buffering', this.playerListeners[2]);
        _classPrivateFieldGet(_player, this).removeEventListener('adaptation', this.playerListeners[3]);
        _classPrivateFieldGet(_player, this).removeEventListener('error', this.playerListeners[4]);
        _classPrivateFieldGet(_player, this).getMediaElement().removeEventListener('playing', this.playerListeners[5]);
        _classPrivateFieldGet(_player, this).removeEventListener('variantchanged', this.playerListeners[6]);
        _classPrivateFieldGet(_player, this).removeEventListener('loading', this.playerListeners[7]);
        _classPrivateFieldGet(_player, this).removeEventListener('onstatechange', this.playerListeners[8]);
        _classPrivateFieldGet(_player, this).getNetworkingEngine().unregisterResponseFilter(this.playerListeners[9]);
        _classPrivateFieldGet(_player, this).getMediaElement().removeEventListener('volumechange', this.playerListeners[10]);
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      if (ShakaPlayerAdapter.checkPlayer(player, listener)) {
        if (ShakaPlayerAdapter.library === undefined) {
          core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Player library not attached to the adapter, please call ShakaPlayerAdapter.attachLibrary(shaka) before attachPlayer');
        }
        _classPrivateFieldSet(_player, this, player);
        _classPrivateFieldSet(_listener, this, listener);
        return true;
      }
      return false;
    }
  }, {
    key: "detachPlayer",
    value: function detachPlayer() {
      this.releaseSessionPlayerObjects();
      _classPrivateFieldSet(_player, this, undefined);
      _classPrivateFieldSet(_listener, this, undefined);
    }
  }], [{
    key: "attachLibrary",
    value: function attachLibrary(library) {
      if (typeof library['util'] !== 'undefined' && typeof library['Player'] !== 'undefined') {
        core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.d(TAG, 'Shaka Player library attached');
        ShakaPlayerAdapter.library = library;
      } else {
        core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Try to attach a library, but it is not recognized');
      }
    }
  }, {
    key: "checkPlayer",
    value: function checkPlayer(player, listener) {
      // Dynamic load player
      if (typeof window !== 'undefined' && window.shaka !== undefined) {
        ShakaPlayerAdapter.library = window.shaka;
      }
      if (typeof player['getConfiguration'] === 'function') {
        var configuration = player['getConfiguration']();
        if (configuration['manifest'] !== undefined && configuration['streaming'] !== undefined) {
          return true;
        }
      }
      return false;
    }
  }]);
}(analytics__WEBPACK_IMPORTED_MODULE_16__.PlayerAdapter);
_defineProperty(ShakaPlayerAdapter, "library", void 0);


/***/ }),

/***/ "./players/shaka/index.js":
/*!********************************!*\
  !*** ./players/shaka/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShakaPlayerAdapter: function() { return /* reexport safe */ _ShakaPlayerAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _ShakaPlayerAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShakaPlayerAdapter */ "./players/shaka/ShakaPlayerAdapter.js");
/* harmony import */ var _src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/engine/CoreEngine */ "./src/engine/CoreEngine.js");


_src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_1__["default"].shakaModule = {
  ShakaPlayerAdapter: _ShakaPlayerAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]
};


/***/ }),

/***/ "./src/engine/player/PlayerStateManager.js":
/*!*************************************************!*\
  !*** ./src/engine/player/PlayerStateManager.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerStateManager; }
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
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core */ "./src_core/index.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkPlayerStateManager';
var PlayerStateManager = /*#__PURE__*/function () {
  function PlayerStateManager(playerAdapter, listener) {
    var pollBitrate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, PlayerStateManager);
    _defineProperty(this, "playerAdapter", void 0);
    _defineProperty(this, "listener", void 0);
    _defineProperty(this, "pollPeriod", void 0);
    _defineProperty(this, "pollLastDate", void 0);
    _defineProperty(this, "pollPlayerInterval", void 0);
    _defineProperty(this, "lastPosition", void 0);
    _defineProperty(this, "expectedPosition", void 0);
    _defineProperty(this, "pollBitrate", void 0);
    _defineProperty(this, "lastBitrate", void 0);
    this.playerAdapter = playerAdapter;
    this.listener = listener;
    this.pollPeriod = PlayerStateManager.POLLING_PERIOD;
    this.pollPlayerInterval = null;
    this.expectedPosition = 0;
    this.pollLastDate = 0;
    this.pollBitrate = pollBitrate;
  }
  return _createClass(PlayerStateManager, [{
    key: "start",
    value: function start() {
      var _this = this;
      this.lastPosition = this.playerAdapter.getPosition();
      this.lastBitrate = this.playerAdapter.getBitrate();
      this.expectedPosition = this.lastPosition + this.pollPeriod;
      this.pollLastDate = Date.now();
      if (this.pollPlayerInterval !== null) {
        clearInterval(this.pollPlayerInterval);
      }
      this.pollPlayerInterval = setInterval(function () {
        _this.pollPlayerPosition();
        if (_this.pollBitrate === true) {
          _this.pollPlayerBitrate();
        }
      }, this.pollPeriod);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.pollPlayerInterval !== null) {
        clearInterval(this.pollPlayerInterval);
        this.pollPlayerInterval = null;
      }
    }
  }, {
    key: "forcePollPlayerPosition",
    value: function forcePollPlayerPosition() {
      this.expectedPosition = this.expectedPosition - this.pollPeriod + (Date.now() - this.pollLastDate);
      this.pollPlayerPosition();
    }
  }, {
    key: "pollPlayerPosition",
    value: function pollPlayerPosition() {
      this.lastPosition = this.playerAdapter.getPosition();

      // Get min and max ranges.
      var maxRange = this.expectedPosition + 2 * this.pollPeriod;
      var minRange = this.expectedPosition - 2 * this.pollPeriod;

      // Check if times match.
      if (this.lastPosition < minRange || this.lastPosition > maxRange) {
        if (this.listener !== undefined && typeof this.listener['handleSeek'] === 'function') {
          var handled = this.listener.handleSeek(this.expectedPosition, this.lastPosition);
          if (handled === true) {
            core__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player is seeking (' + core__WEBPACK_IMPORTED_MODULE_10__.DateUtils.formatTime(this.expectedPosition) + ' to ' + core__WEBPACK_IMPORTED_MODULE_10__.DateUtils.formatTime(this.lastPosition) + ')');
          }
        }
      }

      // Update expected position
      this.expectedPosition = this.lastPosition + this.pollPeriod;
      if (this.listener !== undefined && typeof this.listener['handlePoll'] === 'function') {
        this.listener['handlePoll']();
      }
      this.pollLastDate = Date.now();
    }
  }, {
    key: "pollPlayerBitrate",
    value: function pollPlayerBitrate() {
      var bitrate = this.playerAdapter.getBitrate();
      if (bitrate !== this.lastBitrate) {
        if (this.listener !== undefined && typeof this.listener['handleBitrateChange'] === 'function') {
          this.listener['handleBitrateChange'](bitrate);
        }
        this.lastBitrate = bitrate;
      }
    }
  }, {
    key: "getPositionBeforeSeek",
    value: function getPositionBeforeSeek() {
      return this.lastPosition;
    }
  }]);
}();
_defineProperty(PlayerStateManager, "POLLING_PERIOD", 500);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["analytics"], function() { return __webpack_exec__("./players/shaka/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDRSxZQUFZLEdBQUcsSUFBSSxDQUFDTCxVQUFVO01BRTNELElBQUksSUFBSSxDQUFDZCxRQUFRLEtBQUtyRyxTQUFTLElBQUksT0FBTyxJQUFJLENBQUNxRyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUFFO1FBQ2xGLElBQUksQ0FBQ0EsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7TUFDakM7TUFFQSxJQUFJLENBQUNrQixZQUFZLEdBQUdHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDbEM7RUFBQztJQUFBaEosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1KLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2hCLElBQU1oSCxPQUFPLEdBQUcsSUFBSSxDQUFDa0csYUFBYSxDQUFDakcsVUFBVSxDQUFDLENBQUM7TUFDL0MsSUFBSUQsT0FBTyxLQUFLLElBQUksQ0FBQzBHLFdBQVcsRUFBRTtRQUM5QixJQUFJLElBQUksQ0FBQ3BCLFFBQVEsS0FBS3JHLFNBQVMsSUFBSSxPQUFPLElBQUksQ0FBQ3FHLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFVBQVUsRUFBRTtVQUMzRixJQUFJLENBQUNBLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDdEYsT0FBTyxDQUFDO1FBQ2pEO1FBRUEsSUFBSSxDQUFDMEcsV0FBVyxHQUFHMUcsT0FBTztNQUM5QjtJQUNKO0VBQUM7SUFBQXBDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3SixxQkFBcUJBLENBQUEsRUFBRztNQUNwQixPQUFPLElBQUksQ0FBQ1osWUFBWTtJQUM1QjtFQUFDO0FBQUE7QUFBQWhKLGVBQUEsQ0FwR2dCbEIsa0JBQWtCLG9CQUNYLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9wbGF5ZXJzL3NoYWthL1NoYWthUGxheWVyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3BsYXllcnMvc2hha2EvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmMvZW5naW5lL3BsYXllci9QbGF5ZXJTdGF0ZU1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzaGFrYVNtYXJ0TGliTW9kdWxlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNoYWthU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2hha2FTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKChmdW5jdGlvbigpIHsgcmV0dXJuICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogZ2xvYmFsKX0pKCksIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7IFNtYXJ0TGliLCBMb2dnZXJNYW5hZ2VyIH0gZnJvbSAnY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXJBZGFwdGVyIH0gZnJvbSAnYW5hbHl0aWNzJztcbmltcG9ydCBQbGF5ZXJTdGF0ZU1hbmFnZXIgZnJvbSAnLi4vLi4vc3JjL2VuZ2luZS9wbGF5ZXIvUGxheWVyU3RhdGVNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa1NoYWthUGxheWVyQWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWthUGxheWVyQWRhcHRlciBleHRlbmRzIFBsYXllckFkYXB0ZXIge1xuICAgIHN0YXRpYyBsaWJyYXJ5O1xuXG4gICAgI3BsYXllcjtcbiAgICAjbGlzdGVuZXI7XG5cbiAgICBsb2FkaW5nO1xuICAgIHN0YXJ0ZWQ7XG4gICAgYml0cmF0ZTtcblxuICAgIHBsYXlpbmdFdmVudFJlY2VpdmVkO1xuICAgIHJlcXVlc3RlZFVSTFJlY2VpdmVkO1xuICAgIHJlZGlyZWN0ZWRVUkxSZWNlaXZlZDtcblxuICAgIGxvYWRpbmdFcnJvcjtcblxuICAgIHBsYXllclN0YXRlTWFuYWdlcjtcbiAgICBwbGF5ZXJMaXN0ZW5lcnM7XG5cbiAgICAvLyB0b2RvIGZpeCBwYXVzZSBqdXN0IGJlZm9yZSByZWJ1ZmZlcmluZ1xuXG4gICAgb25QbGF5RXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXlpbmdFdmVudCgpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nRXZlbnRSZWNlaXZlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQnVmZmVyaW5nID0gdGhpcy4jcGxheWVyLmlzQnVmZmVyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNCdWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuc3RhcnQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5Rmlyc3RJbWFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGlzIHN0aWxsIGJ1ZmZlcmluZywgZmlyc3QgaW1hZ2UgZXZlbnQgbm90IHlldCB0cmlnZ2VyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGF1c2VFdmVudCgpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQYXVzZSgpO1xuICAgIH1cblxuICAgIG9uQnVmZmVyaW5nKCkge1xuICAgICAgICBjb25zdCBpc0J1ZmZlcmluZyA9IHRoaXMuI3BsYXllci5pc0J1ZmZlcmluZygpO1xuXG4gICAgICAgIGlmIChTbWFydExpYi5nZXRJbnN0YW5jZSgpLmlzQW5hbHl0aWNzSW5pdGlhbGl6ZWQoKSA9PT0gdHJ1ZSAmJiB0aGlzLnJlcXVlc3RlZFVSTFJlY2VpdmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRVUkxSZWNlaXZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHVyaSA9IHRoaXMuI3BsYXllci5nZXRBc3NldFVyaSgpO1xuICAgICAgICAgICAgaWYgKHVyaSAhPT0gbnVsbCAmJiB1cmkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXF1ZXN0ZWQgVVJMOiAnICsgdXJpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1c3RvbVBhcmFtZXRlcigncmVwb3J0LnJlcXVlc3RlZFVSTCcsIHVyaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5YmFjayBub3Qgc3RhcnRlZCcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJwa0Vycm9yQ29kZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBicGtFcnJvckNvZGUgPSB0aGlzLmdldEVycm9yQ29kZSh0aGlzLmxvYWRpbmdFcnJvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJFcnJvckNvZGUodGhpcy5sb2FkaW5nRXJyb3IuY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5UGxheWVyRXJyb3IoYnBrRXJyb3JDb2RlLCB0aGlzLmxvYWRpbmdFcnJvci5jb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNsb3NlKGJwa0Vycm9yQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNCdWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5mb3JjZVBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YWxsU3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFsbEVuZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNDb2RlKFNtYXJ0TGliLkJQU2Vzc2lvbkVuZHNOb3JtYWxseSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJFcnJvckNvZGUoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc0J1ZmZlcmluZyAmJiB0aGlzLnBsYXlpbmdFdmVudFJlY2VpdmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUZpcnN0SW1hZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGF5ZXJTd2l0Y2hFdmVudCgpIHtcbiAgICAgICAgY29uc3QgYml0cmF0ZSA9IHRoaXMuZ2V0Qml0cmF0ZSgpO1xuICAgICAgICBpZiAoYml0cmF0ZSAhPT0gdGhpcy5iaXRyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmJpdHJhdGUgPSBiaXRyYXRlO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYXJpYW50Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxheWVyU3dpdGNoRXZlbnQoKTtcbiAgICB9XG5cbiAgICBvbkxvYWRpbmdFdmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMubm90aWZ5TG9hZGluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTmV0d29ya1Jlc3BvbnNlRXZlbnQodHlwZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChTbWFydExpYi5nZXRJbnN0YW5jZSgpLmlzQW5hbHl0aWNzSW5pdGlhbGl6ZWQoKSA9PT0gdHJ1ZSAmJiB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVzb2x2ZWQgcmVkaXJlY3RlZCBVUkw6ICcgKyByZXNwb25zZS51cmkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tUGFyYW1ldGVyKCdyZXBvcnQucmVkaXJlY3RlZFVSTCcsIHJlc3BvbnNlLnVyaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlTZWVrKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIG9uRXJyb3JFdmVudChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuZGV0YWlsLnNldmVyaXR5ID09PSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLlNldmVyaXR5LkNSSVRJQ0FMKSB7XG4gICAgICAgICAgICBjb25zdCBicGtFcnJvckNvZGUgPSB0aGlzLmdldEVycm9yQ29kZShlcnJvci5kZXRhaWwpO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyRXJyb3JDb2RlID0gZXJyb3IuZGV0YWlsLmNvZGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdPbiBwbGF5ZXIgZXJyb3IgOiAnICsgcGxheWVyRXJyb3JDb2RlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNDb2RlKGJwa0Vycm9yQ29kZSk7XG4gICAgICAgICAgICB0aGlzLnNldFBsYXllckVycm9yQ29kZShwbGF5ZXJFcnJvckNvZGUpO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVBsYXllckVycm9yKGJwa0Vycm9yQ29kZSwgcGxheWVyRXJyb3JDb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVm9sdW1lQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVZvbHVtZUNoYW5nZWQodGhpcy5nZXRWb2x1bWUoKSk7XG4gICAgfVxuXG4gICAgZ2V0Vm9sdW1lKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNwbGF5ZXIuZ2V0TWVkaWFFbGVtZW50KCkubXV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnZvbHVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxLjA7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdTaGFrYSBQbGF5ZXInO1xuICAgIH1cblxuICAgIGdldFZlcnNpb24oKSB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS5QbGF5ZXIudmVyc2lvbi5zdWJzdHJpbmcoMCwgMzIpO1xuICAgICAgICBjb25zdCBsb25nVmVyc2lvbkluZGV4ID0gdmVyc2lvbi5pbmRleE9mKCcgJyk7XG4gICAgICAgIGlmIChsb25nVmVyc2lvbkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uLnN1YnN0cmluZygwLCBsb25nVmVyc2lvbkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIH1cblxuICAgIGdldEJpdHJhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFudFRyYWNrcyA9IHRoaXMuI3BsYXllci5nZXRWYXJpYW50VHJhY2tzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhbnRUcmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50VHJhY2sgPSB2YXJpYW50VHJhY2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYW50VHJhY2suYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhcmlhbnRUcmFjay5iYW5kd2lkdGggLyAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLiNwbGF5ZXIuaXNMaXZlKCkgPyB0aGlzLiNwbGF5ZXIuZ2V0UGxheWhlYWRUaW1lQXNEYXRlKCkuZ2V0VGltZSgpIDogdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmN1cnJlbnRUaW1lICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldER1cmF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuI3BsYXllci5pc0xpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnYWRUcmFja2luZyc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRFcnJvckNvZGUoZXJyb3IpIHtcbiAgICAgICAgc3dpdGNoIChlcnJvci5jYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5Lk5FVFdPUks6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQTmV0d29ya2luZ0Vycm9yO1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5LlRFWFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuTUVESUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuU1RSRUFNSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUERlY29kaW5nRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuRFJNOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUEFjY2Vzc1JpZ2h0RXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuUExBWUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUFVuc3BlY2lmaWVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuQ0FTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBVbnNwZWNpZmllZEVycm9yO1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5LlNUT1JBR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQVW5zcGVjaWZpZWRFcnJvcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQVW5zcGVjaWZpZWRFcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldExvYWRpbmdFcnJvcihsb2FkaW5nRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nRXJyb3IgPSBsb2FkaW5nRXJyb3I7XG4gICAgfVxuXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYml0cmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWluZ0V2ZW50UmVjZWl2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWRVUkxSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllclN0YXRlTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgPSBuZXcgUGxheWVyU3RhdGVNYW5hZ2VyKHRoaXMsIHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllckxpc3RlbmVycyA9IFt0aGlzLm9uUGxheUV2ZW50LmJpbmQodGhpcyksIC8vIDBcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF1c2VFdmVudC5iaW5kKHRoaXMpLCAvLyAxXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1ZmZlcmluZy5iaW5kKHRoaXMpLCAvLyAyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxheWVyU3dpdGNoRXZlbnQuYmluZCh0aGlzKSwgLy8gM1xuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvckV2ZW50LmJpbmQodGhpcyksIC8vIDRcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGxheWluZ0V2ZW50LmJpbmQodGhpcyksIC8vIDVcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFyaWFudENoYW5nZWQuYmluZCh0aGlzKSwgLy8gNlxuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkaW5nRXZlbnQuYmluZCh0aGlzKSwgLy8gN1xuICAgICAgICAgICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZUV2ZW50LmJpbmQodGhpcyksIC8vIDhcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmV0d29ya1Jlc3BvbnNlRXZlbnQuYmluZCh0aGlzKSwgLy8gOVxuICAgICAgICAgICAgICAgIHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSAvLyAxMFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLnBsYXllckxpc3RlbmVyc1swXSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuZ2V0TWVkaWFFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCB0aGlzLnBsYXllckxpc3RlbmVyc1sxXSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignYnVmZmVyaW5nJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMl0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FkYXB0YXRpb24nLCB0aGlzLnBsYXllckxpc3RlbmVyc1szXSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLnBsYXllckxpc3RlbmVyc1s0XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuZ2V0TWVkaWFFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzVdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5hZGRFdmVudExpc3RlbmVyKCd2YXJpYW50Y2hhbmdlZCcsIHRoaXMucGxheWVyTGlzdGVuZXJzWzZdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5hZGRFdmVudExpc3RlbmVyKCdsb2FkaW5nJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbN10pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ29uc3RhdGVjaGFuZ2UnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s4XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuZ2V0TmV0d29ya2luZ0VuZ2luZSgpLnJlZ2lzdGVyUmVzcG9uc2VGaWx0ZXIodGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZWNoYW5nZScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzEwXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllclN0YXRlTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBsYXllckxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGxheWVyTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2J1ZmZlcmluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzJdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGFwdGF0aW9uJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbM10pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s1XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmFyaWFudGNoYW5nZWQnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s2XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZGluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzddKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdvbnN0YXRlY2hhbmdlJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE5ldHdvcmtpbmdFbmdpbmUoKS51bnJlZ2lzdGVyUmVzcG9uc2VGaWx0ZXIodGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZvbHVtZWNoYW5nZScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzEwXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYXR0YWNoTGlicmFyeShsaWJyYXJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlicmFyeVsndXRpbCddICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbGlicmFyeVsnUGxheWVyJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2hha2EgUGxheWVyIGxpYnJhcnkgYXR0YWNoZWQnKTtcbiAgICAgICAgICAgIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5ID0gbGlicmFyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdUcnkgdG8gYXR0YWNoIGEgbGlicmFyeSwgYnV0IGl0IGlzIG5vdCByZWNvZ25pemVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICAvLyBEeW5hbWljIGxvYWQgcGxheWVyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc2hha2EgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgU2hha2FQbGF5ZXJBZGFwdGVyLmxpYnJhcnkgPSB3aW5kb3cuc2hha2E7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHBsYXllclsnZ2V0Q29uZmlndXJhdGlvbiddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gcGxheWVyWydnZXRDb25maWd1cmF0aW9uJ10oKTtcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uWydtYW5pZmVzdCddICE9PSB1bmRlZmluZWQgJiYgY29uZmlndXJhdGlvblsnc3RyZWFtaW5nJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChTaGFrYVBsYXllckFkYXB0ZXIuY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgIGlmIChTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1BsYXllciBsaWJyYXJ5IG5vdCBhdHRhY2hlZCB0byB0aGUgYWRhcHRlciwgcGxlYXNlIGNhbGwgU2hha2FQbGF5ZXJBZGFwdGVyLmF0dGFjaExpYnJhcnkoc2hha2EpIGJlZm9yZSBhdHRhY2hQbGF5ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jcGxheWVyID0gcGxheWVyO1xuICAgICAgICAgICAgdGhpcy4jbGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGV0YWNoUGxheWVyKCkge1xuICAgICAgICB0aGlzLnJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cygpO1xuXG4gICAgICAgIHRoaXMuI3BsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy4jbGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNoYWthUGxheWVyQWRhcHRlciBmcm9tICcuL1NoYWthUGxheWVyQWRhcHRlcic7XG5cbmltcG9ydCBDb3JlRW5naW5lIGZyb20gJy4uLy4uL3NyYy9lbmdpbmUvQ29yZUVuZ2luZSc7XG5Db3JlRW5naW5lLnNoYWthTW9kdWxlID0ge1xuICAgIFNoYWthUGxheWVyQWRhcHRlclxufTtcblxuZXhwb3J0IHtcbiAgICBTaGFrYVBsYXllckFkYXB0ZXJcbn07XG4iLCJpbXBvcnQgeyBMb2dnZXJNYW5hZ2VyLCBEYXRlVXRpbHMgfSBmcm9tICdjb3JlJztcblxuY29uc3QgVEFHID0gJ0Jwa1BsYXllclN0YXRlTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclN0YXRlTWFuYWdlciB7XG4gICAgc3RhdGljIFBPTExJTkdfUEVSSU9EID0gNTAwO1xuXG4gICAgcGxheWVyQWRhcHRlcjtcbiAgICBsaXN0ZW5lcjtcblxuICAgIHBvbGxQZXJpb2Q7XG4gICAgcG9sbExhc3REYXRlO1xuICAgIHBvbGxQbGF5ZXJJbnRlcnZhbDtcblxuICAgIGxhc3RQb3NpdGlvbjtcbiAgICBleHBlY3RlZFBvc2l0aW9uO1xuXG4gICAgcG9sbEJpdHJhdGU7XG4gICAgbGFzdEJpdHJhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJBZGFwdGVyLCBsaXN0ZW5lciwgcG9sbEJpdHJhdGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIgPSBwbGF5ZXJBZGFwdGVyO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgdGhpcy5wb2xsUGVyaW9kID0gUGxheWVyU3RhdGVNYW5hZ2VyLlBPTExJTkdfUEVSSU9EO1xuICAgICAgICB0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMucG9sbExhc3REYXRlID0gMDtcblxuICAgICAgICB0aGlzLnBvbGxCaXRyYXRlID0gcG9sbEJpdHJhdGU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMubGFzdEJpdHJhdGUgPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0Qml0cmF0ZSgpO1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbiArIHRoaXMucG9sbFBlcmlvZDtcbiAgICAgICAgdGhpcy5wb2xsTGFzdERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wb2xsQml0cmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9sbFBsYXllckJpdHJhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5wb2xsUGVyaW9kKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsUGxheWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yY2VQb2xsUGxheWVyUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiA9IHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiAtIHRoaXMucG9sbFBlcmlvZCArIChEYXRlLm5vdygpIC0gdGhpcy5wb2xsTGFzdERhdGUpO1xuXG4gICAgICAgIHRoaXMucG9sbFBsYXllclBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcG9sbFBsYXllclBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIC8vIEdldCBtaW4gYW5kIG1heCByYW5nZXMuXG4gICAgICAgIGNvbnN0IG1heFJhbmdlID0gdGhpcy5leHBlY3RlZFBvc2l0aW9uICsgKDIgKiB0aGlzLnBvbGxQZXJpb2QpO1xuICAgICAgICBjb25zdCBtaW5SYW5nZSA9IHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiAtICgyICogdGhpcy5wb2xsUGVyaW9kKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aW1lcyBtYXRjaC5cbiAgICAgICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uIDwgbWluUmFuZ2UgfHwgdGhpcy5sYXN0UG9zaXRpb24gPiBtYXhSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5saXN0ZW5lclsnaGFuZGxlU2VlayddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlZCA9IHRoaXMubGlzdGVuZXIuaGFuZGxlU2Vlayh0aGlzLmV4cGVjdGVkUG9zaXRpb24sIHRoaXMubGFzdFBvc2l0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgaXMgc2Vla2luZyAoJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKHRoaXMuZXhwZWN0ZWRQb3NpdGlvbikgKyAnIHRvICcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZSh0aGlzLmxhc3RQb3NpdGlvbikgKyAnKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBleHBlY3RlZCBwb3NpdGlvblxuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbiArIHRoaXMucG9sbFBlcmlvZDtcblxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLmxpc3RlbmVyWydoYW5kbGVQb2xsJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJbJ2hhbmRsZVBvbGwnXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb2xsTGFzdERhdGUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHBvbGxQbGF5ZXJCaXRyYXRlKCkge1xuICAgICAgICBjb25zdCBiaXRyYXRlID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldEJpdHJhdGUoKTtcbiAgICAgICAgaWYgKGJpdHJhdGUgIT09IHRoaXMubGFzdEJpdHJhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMubGlzdGVuZXJbJ2hhbmRsZUJpdHJhdGVDaGFuZ2UnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJbJ2hhbmRsZUJpdHJhdGVDaGFuZ2UnXShiaXRyYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sYXN0Qml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbkJlZm9yZVNlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU21hcnRMaWIiLCJMb2dnZXJNYW5hZ2VyIiwiUGxheWVyQWRhcHRlciIsIlBsYXllclN0YXRlTWFuYWdlciIsIlRBRyIsIl9wbGF5ZXIiLCJXZWFrTWFwIiwiX2xpc3RlbmVyIiwiU2hha2FQbGF5ZXJBZGFwdGVyIiwiX1BsYXllckFkYXB0ZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX2RlZmluZVByb3BlcnR5IiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJvblBsYXlFdmVudCIsInN0YXJ0ZWQiLCJub3RpZnlSZXN1bWUiLCJvblBsYXlpbmdFdmVudCIsInBsYXlpbmdFdmVudFJlY2VpdmVkIiwiaXNCdWZmZXJpbmciLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJwbGF5ZXJTdGF0ZU1hbmFnZXIiLCJzdGFydCIsIm5vdGlmeUZpcnN0SW1hZ2UiLCJkIiwib25QYXVzZUV2ZW50Iiwibm90aWZ5UGF1c2UiLCJvbkJ1ZmZlcmluZyIsImdldEluc3RhbmNlIiwiaXNBbmFseXRpY3NJbml0aWFsaXplZCIsInJlcXVlc3RlZFVSTFJlY2VpdmVkIiwidXJpIiwiZ2V0QXNzZXRVcmkiLCJ1bmRlZmluZWQiLCJzZXRDdXN0b21QYXJhbWV0ZXIiLCJicGtFcnJvckNvZGUiLCJsb2FkaW5nRXJyb3IiLCJnZXRFcnJvckNvZGUiLCJzZXRQbGF5ZXJFcnJvckNvZGUiLCJjb2RlIiwibm90aWZ5UGxheWVyRXJyb3IiLCJub3RpZnlDbG9zZSIsImZvcmNlUG9sbFBsYXllclBvc2l0aW9uIiwibm90aWZ5U3RhbGxTdGFydCIsIm5vdGlmeVN0YWxsRW5kIiwic2V0U3RhdHVzQ29kZSIsIkJQU2Vzc2lvbkVuZHNOb3JtYWxseSIsIm9uTGF5ZXJTd2l0Y2hFdmVudCIsImJpdHJhdGUiLCJnZXRCaXRyYXRlIiwibm90aWZ5TGF5ZXJTd2l0Y2giLCJvblZhcmlhbnRDaGFuZ2VkIiwib25Mb2FkaW5nRXZlbnQiLCJsb2FkaW5nIiwibm90aWZ5TG9hZGluZyIsIm9uU3RhdGVDaGFuZ2VFdmVudCIsImV2ZW50Iiwic3RhdGUiLCJvbk5ldHdvcmtSZXNwb25zZUV2ZW50IiwidHlwZSIsInJlc3BvbnNlIiwicmVkaXJlY3RlZFVSTFJlY2VpdmVkIiwiaGFuZGxlU2VlayIsImVuZCIsIm5vdGlmeVNlZWsiLCJvbkVycm9yRXZlbnQiLCJlcnJvciIsImRldGFpbCIsInNldmVyaXR5IiwibGlicmFyeSIsInV0aWwiLCJFcnJvciIsIlNldmVyaXR5IiwiQ1JJVElDQUwiLCJwbGF5ZXJFcnJvckNvZGUiLCJlIiwib25Wb2x1bWVDaGFuZ2UiLCJub3RpZnlWb2x1bWVDaGFuZ2VkIiwiZ2V0Vm9sdW1lIiwiZ2V0TWVkaWFFbGVtZW50IiwibXV0ZWQiLCJ2b2x1bWUiLCJnZXROYW1lIiwiZ2V0VmVyc2lvbiIsInZlcnNpb24iLCJQbGF5ZXIiLCJzdWJzdHJpbmciLCJsb25nVmVyc2lvbkluZGV4IiwiaW5kZXhPZiIsInZhcmlhbnRUcmFja3MiLCJnZXRWYXJpYW50VHJhY2tzIiwiaSIsInZhcmlhbnRUcmFjayIsImFjdGl2ZSIsIk1hdGgiLCJyb3VuZCIsImJhbmR3aWR0aCIsImdldFBvc2l0aW9uIiwiaXNMaXZlIiwiZ2V0UGxheWhlYWRUaW1lQXNEYXRlIiwiZ2V0VGltZSIsImN1cnJlbnRUaW1lIiwiZ2V0RHVyYXRpb24iLCJkdXJhdGlvbiIsImdldENhcGFiaWxpdGllcyIsImNhdGVnb3J5IiwiQ2F0ZWdvcnkiLCJORVRXT1JLIiwiQlBOZXR3b3JraW5nRXJyb3IiLCJURVhUIiwiQlBGb3JtYXROb3RTdXBwb3J0ZWRFcnJvciIsIk1FRElBIiwiTUFOSUZFU1QiLCJTVFJFQU1JTkciLCJCUERlY29kaW5nRXJyb3IiLCJEUk0iLCJCUEFjY2Vzc1JpZ2h0RXJyb3IiLCJQTEFZRVIiLCJCUFVuc3BlY2lmaWVkRXJyb3IiLCJDQVNUIiwiU1RPUkFHRSIsInNldExvYWRpbmdFcnJvciIsImluaXRTZXNzaW9uUGxheWVyT2JqZWN0cyIsInN0b3AiLCJwbGF5ZXJMaXN0ZW5lcnMiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldE5ldHdvcmtpbmdFbmdpbmUiLCJyZWdpc3RlclJlc3BvbnNlRmlsdGVyIiwicmVsZWFzZVNlc3Npb25QbGF5ZXJPYmplY3RzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVucmVnaXN0ZXJSZXNwb25zZUZpbHRlciIsImF0dGFjaFBsYXllciIsInBsYXllciIsImxpc3RlbmVyIiwiY2hlY2tQbGF5ZXIiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJkZXRhY2hQbGF5ZXIiLCJhdHRhY2hMaWJyYXJ5Iiwid2luZG93Iiwic2hha2EiLCJjb25maWd1cmF0aW9uIiwiZGVmYXVsdCIsIkNvcmVFbmdpbmUiLCJzaGFrYU1vZHVsZSIsIkRhdGVVdGlscyIsInBsYXllckFkYXB0ZXIiLCJwb2xsQml0cmF0ZSIsInBvbGxQZXJpb2QiLCJQT0xMSU5HX1BFUklPRCIsInBvbGxQbGF5ZXJJbnRlcnZhbCIsImV4cGVjdGVkUG9zaXRpb24iLCJwb2xsTGFzdERhdGUiLCJsYXN0UG9zaXRpb24iLCJsYXN0Qml0cmF0ZSIsIkRhdGUiLCJub3ciLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwb2xsUGxheWVyUG9zaXRpb24iLCJwb2xsUGxheWVyQml0cmF0ZSIsIm1heFJhbmdlIiwibWluUmFuZ2UiLCJoYW5kbGVkIiwiZm9ybWF0VGltZSIsImdldFBvc2l0aW9uQmVmb3JlU2VlayJdLCJzb3VyY2VSb290IjoiIn0=