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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core */ "./src_core/index.js");
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! analytics */ "./src_core/index.analytics.js");
/* harmony import */ var _src_engine_player_PlayerStateManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/engine/player/PlayerStateManager */ "./src/engine/player/PlayerStateManager.js");















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var TAG = 'BpkShakaPlayerAdapter';
var _player = /*#__PURE__*/new WeakMap();
var _listener = /*#__PURE__*/new WeakMap();
var ShakaPlayerAdapter = /*#__PURE__*/function (_PlayerAdapter) {
  _inherits(ShakaPlayerAdapter, _PlayerAdapter);
  var _super = _createSuper(ShakaPlayerAdapter);
  function ShakaPlayerAdapter() {
    var _this;
    _classCallCheck(this, ShakaPlayerAdapter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _player, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _listener, {
      writable: true,
      value: void 0
    });
    _defineProperty(_assertThisInitialized(_this), "loading", void 0);
    _defineProperty(_assertThisInitialized(_this), "started", void 0);
    _defineProperty(_assertThisInitialized(_this), "bitrate", void 0);
    _defineProperty(_assertThisInitialized(_this), "playingEventReceived", void 0);
    _defineProperty(_assertThisInitialized(_this), "requestedURLReceived", void 0);
    _defineProperty(_assertThisInitialized(_this), "redirectedURLReceived", void 0);
    _defineProperty(_assertThisInitialized(_this), "loadingError", void 0);
    _defineProperty(_assertThisInitialized(_this), "playerStateManager", void 0);
    _defineProperty(_assertThisInitialized(_this), "playerListeners", void 0);
    return _this;
  }
  _createClass(ShakaPlayerAdapter, [{
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
        var isBuffering = _classPrivateFieldGet(this, _player).isBuffering();
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
      var isBuffering = _classPrivateFieldGet(this, _player).isBuffering();
      if (core__WEBPACK_IMPORTED_MODULE_15__.SmartLib.getInstance().isAnalyticsInitialized() === true && this.requestedURLReceived === false) {
        this.requestedURLReceived = true;
        var uri = _classPrivateFieldGet(this, _player).getAssetUri();
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
        core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'On player error : ' + error.detail.code);
        this.setStatusCode(this.getErrorCode(error.detail));
        this.setPlayerErrorCode(error.detail.code);
      }
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
      if (_classPrivateFieldGet(this, _player) !== undefined) {
        var variantTracks = _classPrivateFieldGet(this, _player).getVariantTracks();
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
      if (_classPrivateFieldGet(this, _player) !== undefined) {
        // return Math.round(this.#player.isLive() ? this.#player.getPlayheadTimeAsDate().getTime() : this.#player.getMediaElement().currentTime * 1000);
        return Math.round(_classPrivateFieldGet(this, _player).getMediaElement().currentTime * 1000);
      }
      return 0;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (_classPrivateFieldGet(this, _player) !== undefined && !_classPrivateFieldGet(this, _player).isLive()) {
        return Math.round(_classPrivateFieldGet(this, _player).getMediaElement().duration * 1000);
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
      if (_classPrivateFieldGet(this, _player) !== undefined) {
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
        this.onNetworkResponseEvent.bind(this) // 9
        ];

        _classPrivateFieldGet(this, _player).getMediaElement().addEventListener('play', this.playerListeners[0]);
        _classPrivateFieldGet(this, _player).getMediaElement().addEventListener('pause', this.playerListeners[1]);
        _classPrivateFieldGet(this, _player).addEventListener('buffering', this.playerListeners[2]);
        _classPrivateFieldGet(this, _player).addEventListener('adaptation', this.playerListeners[3]);
        _classPrivateFieldGet(this, _player).addEventListener('error', this.playerListeners[4]);
        _classPrivateFieldGet(this, _player).getMediaElement().addEventListener('playing', this.playerListeners[5]);
        _classPrivateFieldGet(this, _player).addEventListener('variantchanged', this.playerListeners[6]);
        _classPrivateFieldGet(this, _player).addEventListener('loading', this.playerListeners[7]);
        _classPrivateFieldGet(this, _player).addEventListener('onstatechange', this.playerListeners[8]);
        _classPrivateFieldGet(this, _player).getNetworkingEngine().registerResponseFilter(this.playerListeners[9]);
      }
    }
  }, {
    key: "releaseSessionPlayerObjects",
    value: function releaseSessionPlayerObjects() {
      if (this.playerStateManager !== undefined) {
        this.playerStateManager.stop();
        this.playerStateManager = undefined;
      }
      if (_classPrivateFieldGet(this, _player) !== undefined && this.playerListeners !== undefined && this.playerListeners.length > 0) {
        _classPrivateFieldGet(this, _player).getMediaElement().removeEventListener('play', this.playerListeners[0]);
        _classPrivateFieldGet(this, _player).getMediaElement().removeEventListener('pause', this.playerListeners[1]);
        _classPrivateFieldGet(this, _player).removeEventListener('buffering', this.playerListeners[2]);
        _classPrivateFieldGet(this, _player).removeEventListener('adaptation', this.playerListeners[3]);
        _classPrivateFieldGet(this, _player).removeEventListener('error', this.playerListeners[4]);
        _classPrivateFieldGet(this, _player).getMediaElement().removeEventListener('playing', this.playerListeners[5]);
        _classPrivateFieldGet(this, _player).removeEventListener('variantchanged', this.playerListeners[6]);
        _classPrivateFieldGet(this, _player).removeEventListener('loading', this.playerListeners[7]);
        _classPrivateFieldGet(this, _player).removeEventListener('onstatechange', this.playerListeners[8]);
        _classPrivateFieldGet(this, _player).getNetworkingEngine().unregisterResponseFilter(this.playerListeners[9]);
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      if (ShakaPlayerAdapter.checkPlayer(player, listener)) {
        if (ShakaPlayerAdapter.library === undefined) {
          core__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Player library not attached to the adapter, please call ShakaPlayerAdapter.attachLibrary(shaka) before attachPlayer');
        }
        _classPrivateFieldSet(this, _player, player);
        _classPrivateFieldSet(this, _listener, listener);
        return true;
      }
      return false;
    }
  }, {
    key: "detachPlayer",
    value: function detachPlayer() {
      this.releaseSessionPlayerObjects();
      _classPrivateFieldSet(this, _player, undefined);
      _classPrivateFieldSet(this, _listener, undefined);
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
  return ShakaPlayerAdapter;
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
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core */ "./src_core/index.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TAG = 'BpkPlayerStateManager';
var PlayerStateManager = /*#__PURE__*/function () {
  function PlayerStateManager(playerAdapter, listener) {
    _classCallCheck(this, PlayerStateManager);
    _defineProperty(this, "playerAdapter", void 0);
    _defineProperty(this, "listener", void 0);
    _defineProperty(this, "pollPeriod", void 0);
    _defineProperty(this, "pollLastDate", void 0);
    _defineProperty(this, "pollPlayerInterval", void 0);
    _defineProperty(this, "lastPosition", void 0);
    _defineProperty(this, "expectedPosition", void 0);
    this.playerAdapter = playerAdapter;
    this.listener = listener;
    this.pollPeriod = PlayerStateManager.POLLING_PERIOD;
    this.pollPlayerInterval = null;
    this.expectedPosition = 0;
    this.pollLastDate = 0;
  }
  _createClass(PlayerStateManager, [{
    key: "start",
    value: function start() {
      var _this = this;
      this.lastPosition = this.playerAdapter.getPosition();
      this.expectedPosition = this.lastPosition + this.pollPeriod;
      this.pollLastDate = Date.now();
      if (this.pollPlayerInterval !== null) {
        clearInterval(this.pollPlayerInterval);
      }
      this.pollPlayerInterval = setInterval(function () {
        _this.pollPlayerPosition();
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
            core__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Player is seeking (' + core__WEBPACK_IMPORTED_MODULE_6__.DateUtils.formatTime(this.expectedPosition) + ' to ' + core__WEBPACK_IMPORTED_MODULE_6__.DateUtils.formatTime(this.lastPosition) + ')');
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
    key: "getPositionBeforeSeek",
    value: function getPositionBeforeSeek() {
      return this.lastPosition;
    }
  }]);
  return PlayerStateManager;
}();
_defineProperty(PlayerStateManager, "POLLING_PERIOD", 500);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9wbGF5ZXJzL3NoYWthL1NoYWthUGxheWVyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3BsYXllcnMvc2hha2EvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmMvZW5naW5lL3BsYXllci9QbGF5ZXJTdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInNoYWthU21hcnRMaWJNb2R1bGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2hha2FTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaGFrYVNtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xufSkoKGZ1bmN0aW9uKCkgeyByZXR1cm4gKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiBnbG9iYWwpfSkoKSwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgU21hcnRMaWIsIExvZ2dlck1hbmFnZXIgfSBmcm9tICdjb3JlJztcbmltcG9ydCB7IFBsYXllckFkYXB0ZXIgfSBmcm9tICdhbmFseXRpY3MnO1xuaW1wb3J0IFBsYXllclN0YXRlTWFuYWdlciBmcm9tICcuLi8uLi9zcmMvZW5naW5lL3BsYXllci9QbGF5ZXJTdGF0ZU1hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrU2hha2FQbGF5ZXJBZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hha2FQbGF5ZXJBZGFwdGVyIGV4dGVuZHMgUGxheWVyQWRhcHRlciB7XG4gICAgc3RhdGljIGxpYnJhcnk7XG5cbiAgICAjcGxheWVyO1xuICAgICNsaXN0ZW5lcjtcblxuICAgIGxvYWRpbmc7XG4gICAgc3RhcnRlZDtcbiAgICBiaXRyYXRlO1xuXG4gICAgcGxheWluZ0V2ZW50UmVjZWl2ZWQ7XG4gICAgcmVxdWVzdGVkVVJMUmVjZWl2ZWQ7XG4gICAgcmVkaXJlY3RlZFVSTFJlY2VpdmVkO1xuXG4gICAgbG9hZGluZ0Vycm9yO1xuXG4gICAgcGxheWVyU3RhdGVNYW5hZ2VyO1xuICAgIHBsYXllckxpc3RlbmVycztcblxuICAgIC8vIHRvZG8gZml4IHBhdXNlIGp1c3QgYmVmb3JlIHJlYnVmZmVyaW5nXG5cbiAgICBvblBsYXlFdmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlSZXN1bWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWluZ0V2ZW50KCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdFdmVudFJlY2VpdmVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaXNCdWZmZXJpbmcgPSB0aGlzLiNwbGF5ZXIuaXNCdWZmZXJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKCFpc0J1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5zdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlGaXJzdEltYWdlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgaXMgc3RpbGwgYnVmZmVyaW5nLCBmaXJzdCBpbWFnZSBldmVudCBub3QgeWV0IHRyaWdnZXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYXVzZUV2ZW50KCkge1xuICAgICAgICB0aGlzLm5vdGlmeVBhdXNlKCk7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGlzQnVmZmVyaW5nID0gdGhpcy4jcGxheWVyLmlzQnVmZmVyaW5nKCk7XG5cbiAgICAgICAgaWYgKFNtYXJ0TGliLmdldEluc3RhbmNlKCkuaXNBbmFseXRpY3NJbml0aWFsaXplZCgpID09PSB0cnVlICYmIHRoaXMucmVxdWVzdGVkVVJMUmVjZWl2ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RlZFVSTFJlY2VpdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgdXJpID0gdGhpcy4jcGxheWVyLmdldEFzc2V0VXJpKCk7XG4gICAgICAgICAgICBpZiAodXJpICE9PSBudWxsICYmIHVyaSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlcXVlc3RlZCBVUkw6ICcgKyB1cmkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tUGFyYW1ldGVyKCdyZXBvcnQucmVxdWVzdGVkVVJMJywgdXJpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXliYWNrIG5vdCBzdGFydGVkJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYnBrRXJyb3JDb2RlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmdFcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJwa0Vycm9yQ29kZSA9IHRoaXMuZ2V0RXJyb3JDb2RlKHRoaXMubG9hZGluZ0Vycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBsYXllckVycm9yQ29kZSh0aGlzLmxvYWRpbmdFcnJvci5jb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlDbG9zZShicGtFcnJvckNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgaWYgKGlzQnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuZm9yY2VQb2xsUGxheWVyUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFsbFN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhbGxFbmQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQ29kZShTbWFydExpYi5CUFNlc3Npb25FbmRzTm9ybWFsbHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyRXJyb3JDb2RlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNCdWZmZXJpbmcgJiYgdGhpcy5wbGF5aW5nRXZlbnRSZWNlaXZlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5zdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlGaXJzdEltYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxheWVyU3dpdGNoRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGJpdHJhdGUgPSB0aGlzLmdldEJpdHJhdGUoKTtcbiAgICAgICAgaWYgKGJpdHJhdGUgIT09IHRoaXMuYml0cmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5iaXRyYXRlID0gYml0cmF0ZTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlMYXllclN3aXRjaChiaXRyYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVmFyaWFudENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMub25MYXllclN3aXRjaEV2ZW50KCk7XG4gICAgfVxuXG4gICAgb25Mb2FkaW5nRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUxvYWRpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2VFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuc3RhdGUgPT09ICd1bmxvYWQnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk5ldHdvcmtSZXNwb25zZUV2ZW50KHR5cGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoU21hcnRMaWIuZ2V0SW5zdGFuY2UoKS5pc0FuYWx5dGljc0luaXRpYWxpemVkKCkgPT09IHRydWUgJiYgdGhpcy5yZWRpcmVjdGVkVVJMUmVjZWl2ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdGVkVVJMUmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Jlc29sdmVkIHJlZGlyZWN0ZWQgVVJMOiAnICsgcmVzcG9uc2UudXJpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1c3RvbVBhcmFtZXRlcigncmVwb3J0LnJlZGlyZWN0ZWRVUkwnLCByZXNwb25zZS51cmkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIHRoaXMubm90aWZ5U2VlayhzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICBvbkVycm9yRXZlbnQoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmRldGFpbC5zZXZlcml0eSA9PT0gU2hha2FQbGF5ZXJBZGFwdGVyLmxpYnJhcnkudXRpbC5FcnJvci5TZXZlcml0eS5DUklUSUNBTCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ09uIHBsYXllciBlcnJvciA6ICcgKyBlcnJvci5kZXRhaWwuY29kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQ29kZSh0aGlzLmdldEVycm9yQ29kZShlcnJvci5kZXRhaWwpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyRXJyb3JDb2RlKGVycm9yLmRldGFpbC5jb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnU2hha2EgUGxheWVyJztcbiAgICB9XG5cbiAgICBnZXRWZXJzaW9uKCkge1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gU2hha2FQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuUGxheWVyLnZlcnNpb24uc3Vic3RyaW5nKDAsIDMyKTtcbiAgICAgICAgY29uc3QgbG9uZ1ZlcnNpb25JbmRleCA9IHZlcnNpb24uaW5kZXhPZignICcpO1xuICAgICAgICBpZiAobG9uZ1ZlcnNpb25JbmRleCA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVyc2lvbi5zdWJzdHJpbmcoMCwgbG9uZ1ZlcnNpb25JbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICB9XG5cbiAgICBnZXRCaXRyYXRlKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRUcmFja3MgPSB0aGlzLiNwbGF5ZXIuZ2V0VmFyaWFudFRyYWNrcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYW50VHJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudFRyYWNrID0gdmFyaWFudFRyYWNrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudFRyYWNrLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YXJpYW50VHJhY2suYmFuZHdpZHRoIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmlzTGl2ZSgpID8gdGhpcy4jcGxheWVyLmdldFBsYXloZWFkVGltZUFzRGF0ZSgpLmdldFRpbWUoKSA6IHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5jdXJyZW50VGltZSAqIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmN1cnJlbnRUaW1lICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldER1cmF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuI3BsYXllci5pc0xpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnYWRUcmFja2luZyc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRFcnJvckNvZGUoZXJyb3IpIHtcbiAgICAgICAgc3dpdGNoIChlcnJvci5jYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5Lk5FVFdPUks6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQTmV0d29ya2luZ0Vycm9yO1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5LlRFWFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuTUVESUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuU1RSRUFNSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUERlY29kaW5nRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuRFJNOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUEFjY2Vzc1JpZ2h0RXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuUExBWUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUFVuc3BlY2lmaWVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuQ0FTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBVbnNwZWNpZmllZEVycm9yO1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5LlNUT1JBR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQVW5zcGVjaWZpZWRFcnJvcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQVW5zcGVjaWZpZWRFcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldExvYWRpbmdFcnJvcihsb2FkaW5nRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nRXJyb3IgPSBsb2FkaW5nRXJyb3I7XG4gICAgfVxuXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYml0cmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWluZ0V2ZW50UmVjZWl2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWRVUkxSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllclN0YXRlTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgPSBuZXcgUGxheWVyU3RhdGVNYW5hZ2VyKHRoaXMsIHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllckxpc3RlbmVycyA9IFt0aGlzLm9uUGxheUV2ZW50LmJpbmQodGhpcyksIC8vIDBcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF1c2VFdmVudC5iaW5kKHRoaXMpLCAvLyAxXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1ZmZlcmluZy5iaW5kKHRoaXMpLCAvLyAyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxheWVyU3dpdGNoRXZlbnQuYmluZCh0aGlzKSwgLy8gM1xuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvckV2ZW50LmJpbmQodGhpcyksIC8vIDRcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGxheWluZ0V2ZW50LmJpbmQodGhpcyksIC8vIDVcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFyaWFudENoYW5nZWQuYmluZCh0aGlzKSwgLy8gNlxuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkaW5nRXZlbnQuYmluZCh0aGlzKSwgLy8gN1xuICAgICAgICAgICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZUV2ZW50LmJpbmQodGhpcyksIC8vIDhcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmV0d29ya1Jlc3BvbnNlRXZlbnQuYmluZCh0aGlzKSAvLyA5XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuZ2V0TWVkaWFFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzBdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzFdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5hZGRFdmVudExpc3RlbmVyKCdidWZmZXJpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1syXSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignYWRhcHRhdGlvbicsIHRoaXMucGxheWVyTGlzdGVuZXJzWzNdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMucGxheWVyTGlzdGVuZXJzWzRdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3ZhcmlhbnRjaGFuZ2VkJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNl0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s3XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25zdGF0ZWNoYW5nZScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzhdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXROZXR3b3JraW5nRW5naW5lKCkucmVnaXN0ZXJSZXNwb25zZUZpbHRlcih0aGlzLnBsYXllckxpc3RlbmVyc1s5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllclN0YXRlTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBsYXllckxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGxheWVyTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2J1ZmZlcmluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzJdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGFwdGF0aW9uJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbM10pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s1XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmFyaWFudGNoYW5nZWQnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s2XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZGluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzddKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdvbnN0YXRlY2hhbmdlJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE5ldHdvcmtpbmdFbmdpbmUoKS51bnJlZ2lzdGVyUmVzcG9uc2VGaWx0ZXIodGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGF0dGFjaExpYnJhcnkobGlicmFyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGxpYnJhcnlbJ3V0aWwnXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGxpYnJhcnlbJ1BsYXllciddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NoYWthIFBsYXllciBsaWJyYXJ5IGF0dGFjaGVkJyk7XG4gICAgICAgICAgICBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeSA9IGxpYnJhcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnVHJ5IHRvIGF0dGFjaCBhIGxpYnJhcnksIGJ1dCBpdCBpcyBub3QgcmVjb2duaXplZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgLy8gRHluYW1pYyBsb2FkIHBsYXllclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnNoYWthICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5ID0gd2luZG93LnNoYWthO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJbJ2dldENvbmZpZ3VyYXRpb24nXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IHBsYXllclsnZ2V0Q29uZmlndXJhdGlvbiddKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnbWFuaWZlc3QnXSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZ3VyYXRpb25bJ3N0cmVhbWluZyddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhdHRhY2hQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoU2hha2FQbGF5ZXJBZGFwdGVyLmNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpKSB7XG4gICAgICAgICAgICBpZiAoU2hha2FQbGF5ZXJBZGFwdGVyLmxpYnJhcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdQbGF5ZXIgbGlicmFyeSBub3QgYXR0YWNoZWQgdG8gdGhlIGFkYXB0ZXIsIHBsZWFzZSBjYWxsIFNoYWthUGxheWVyQWRhcHRlci5hdHRhY2hMaWJyYXJ5KHNoYWthKSBiZWZvcmUgYXR0YWNoUGxheWVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI3BsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIHRoaXMuI2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGFjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKTtcblxuICAgICAgICB0aGlzLiNwbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuI2xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaGFrYVBsYXllckFkYXB0ZXIgZnJvbSAnLi9TaGFrYVBsYXllckFkYXB0ZXInO1xuXG5pbXBvcnQgQ29yZUVuZ2luZSBmcm9tICcuLi8uLi9zcmMvZW5naW5lL0NvcmVFbmdpbmUnO1xuQ29yZUVuZ2luZS5zaGFrYU1vZHVsZSA9IHtcbiAgICBTaGFrYVBsYXllckFkYXB0ZXJcbn07XG5cbmV4cG9ydCB7XG4gICAgU2hha2FQbGF5ZXJBZGFwdGVyXG59O1xuIiwiaW1wb3J0IHsgTG9nZ2VyTWFuYWdlciwgRGF0ZVV0aWxzIH0gZnJvbSAnY29yZSc7XG5cbmNvbnN0IFRBRyA9ICdCcGtQbGF5ZXJTdGF0ZU1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTdGF0ZU1hbmFnZXIge1xuICAgIHN0YXRpYyBQT0xMSU5HX1BFUklPRCA9IDUwMDtcblxuICAgIHBsYXllckFkYXB0ZXI7XG4gICAgbGlzdGVuZXI7XG5cbiAgICBwb2xsUGVyaW9kO1xuICAgIHBvbGxMYXN0RGF0ZTtcbiAgICBwb2xsUGxheWVySW50ZXJ2YWw7XG5cbiAgICBsYXN0UG9zaXRpb247XG4gICAgZXhwZWN0ZWRQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllckFkYXB0ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyQWRhcHRlciA9IHBsYXllckFkYXB0ZXI7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgICAgICB0aGlzLnBvbGxQZXJpb2QgPSBQbGF5ZXJTdGF0ZU1hbmFnZXIuUE9MTElOR19QRVJJT0Q7XG4gICAgICAgIHRoaXMucG9sbFBsYXllckludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5wb2xsTGFzdERhdGUgPSAwO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbiArIHRoaXMucG9sbFBlcmlvZDtcbiAgICAgICAgdGhpcy5wb2xsTGFzdERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuICAgICAgICB9LCB0aGlzLnBvbGxQZXJpb2QpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JjZVBvbGxQbGF5ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uID0gdGhpcy5leHBlY3RlZFBvc2l0aW9uIC0gdGhpcy5wb2xsUGVyaW9kICsgKERhdGUubm93KCkgLSB0aGlzLnBvbGxMYXN0RGF0ZSk7XG5cbiAgICAgICAgdGhpcy5wb2xsUGxheWVyUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwb2xsUGxheWVyUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gR2V0IG1pbiBhbmQgbWF4IHJhbmdlcy5cbiAgICAgICAgY29uc3QgbWF4UmFuZ2UgPSB0aGlzLmV4cGVjdGVkUG9zaXRpb24gKyAoMiAqIHRoaXMucG9sbFBlcmlvZCk7XG4gICAgICAgIGNvbnN0IG1pblJhbmdlID0gdGhpcy5leHBlY3RlZFBvc2l0aW9uIC0gKDIgKiB0aGlzLnBvbGxQZXJpb2QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRpbWVzIG1hdGNoLlxuICAgICAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gPCBtaW5SYW5nZSB8fCB0aGlzLmxhc3RQb3NpdGlvbiA+IG1heFJhbmdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLmxpc3RlbmVyWydoYW5kbGVTZWVrJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVkID0gdGhpcy5saXN0ZW5lci5oYW5kbGVTZWVrKHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiwgdGhpcy5sYXN0UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBpcyBzZWVraW5nICgnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUodGhpcy5leHBlY3RlZFBvc2l0aW9uKSArICcgdG8gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKHRoaXMubGFzdFBvc2l0aW9uKSArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGV4cGVjdGVkIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uICsgdGhpcy5wb2xsUGVyaW9kO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMubGlzdGVuZXJbJ2hhbmRsZVBvbGwnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclsnaGFuZGxlUG9sbCddKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvbGxMYXN0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb25CZWZvcmVTZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIlNtYXJ0TGliIiwiTG9nZ2VyTWFuYWdlciIsIlBsYXllckFkYXB0ZXIiLCJQbGF5ZXJTdGF0ZU1hbmFnZXIiLCJUQUciLCJfcGxheWVyIiwiV2Vha01hcCIsIl9saXN0ZW5lciIsIlNoYWthUGxheWVyQWRhcHRlciIsIl9QbGF5ZXJBZGFwdGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndyaXRhYmxlIiwidmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJvblBsYXlFdmVudCIsInN0YXJ0ZWQiLCJub3RpZnlSZXN1bWUiLCJvblBsYXlpbmdFdmVudCIsInBsYXlpbmdFdmVudFJlY2VpdmVkIiwiaXNCdWZmZXJpbmciLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJwbGF5ZXJTdGF0ZU1hbmFnZXIiLCJzdGFydCIsIm5vdGlmeUZpcnN0SW1hZ2UiLCJkIiwib25QYXVzZUV2ZW50Iiwibm90aWZ5UGF1c2UiLCJvbkJ1ZmZlcmluZyIsImdldEluc3RhbmNlIiwiaXNBbmFseXRpY3NJbml0aWFsaXplZCIsInJlcXVlc3RlZFVSTFJlY2VpdmVkIiwidXJpIiwiZ2V0QXNzZXRVcmkiLCJ1bmRlZmluZWQiLCJzZXRDdXN0b21QYXJhbWV0ZXIiLCJicGtFcnJvckNvZGUiLCJsb2FkaW5nRXJyb3IiLCJnZXRFcnJvckNvZGUiLCJzZXRQbGF5ZXJFcnJvckNvZGUiLCJjb2RlIiwibm90aWZ5Q2xvc2UiLCJmb3JjZVBvbGxQbGF5ZXJQb3NpdGlvbiIsIm5vdGlmeVN0YWxsU3RhcnQiLCJub3RpZnlTdGFsbEVuZCIsInNldFN0YXR1c0NvZGUiLCJCUFNlc3Npb25FbmRzTm9ybWFsbHkiLCJvbkxheWVyU3dpdGNoRXZlbnQiLCJiaXRyYXRlIiwiZ2V0Qml0cmF0ZSIsIm5vdGlmeUxheWVyU3dpdGNoIiwib25WYXJpYW50Q2hhbmdlZCIsIm9uTG9hZGluZ0V2ZW50IiwibG9hZGluZyIsIm5vdGlmeUxvYWRpbmciLCJvblN0YXRlQ2hhbmdlRXZlbnQiLCJldmVudCIsInN0YXRlIiwib25OZXR3b3JrUmVzcG9uc2VFdmVudCIsInR5cGUiLCJyZXNwb25zZSIsInJlZGlyZWN0ZWRVUkxSZWNlaXZlZCIsImhhbmRsZVNlZWsiLCJlbmQiLCJub3RpZnlTZWVrIiwib25FcnJvckV2ZW50IiwiZXJyb3IiLCJkZXRhaWwiLCJzZXZlcml0eSIsImxpYnJhcnkiLCJ1dGlsIiwiRXJyb3IiLCJTZXZlcml0eSIsIkNSSVRJQ0FMIiwiZSIsImdldE5hbWUiLCJnZXRWZXJzaW9uIiwidmVyc2lvbiIsIlBsYXllciIsInN1YnN0cmluZyIsImxvbmdWZXJzaW9uSW5kZXgiLCJpbmRleE9mIiwidmFyaWFudFRyYWNrcyIsImdldFZhcmlhbnRUcmFja3MiLCJpIiwidmFyaWFudFRyYWNrIiwiYWN0aXZlIiwiTWF0aCIsInJvdW5kIiwiYmFuZHdpZHRoIiwiZ2V0UG9zaXRpb24iLCJnZXRNZWRpYUVsZW1lbnQiLCJjdXJyZW50VGltZSIsImdldER1cmF0aW9uIiwiaXNMaXZlIiwiZHVyYXRpb24iLCJnZXRDYXBhYmlsaXRpZXMiLCJjYXRlZ29yeSIsIkNhdGVnb3J5IiwiTkVUV09SSyIsIkJQTmV0d29ya2luZ0Vycm9yIiwiVEVYVCIsIkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3IiLCJNRURJQSIsIk1BTklGRVNUIiwiU1RSRUFNSU5HIiwiQlBEZWNvZGluZ0Vycm9yIiwiRFJNIiwiQlBBY2Nlc3NSaWdodEVycm9yIiwiUExBWUVSIiwiQlBVbnNwZWNpZmllZEVycm9yIiwiQ0FTVCIsIlNUT1JBR0UiLCJzZXRMb2FkaW5nRXJyb3IiLCJpbml0U2Vzc2lvblBsYXllck9iamVjdHMiLCJzdG9wIiwicGxheWVyTGlzdGVuZXJzIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXROZXR3b3JraW5nRW5naW5lIiwicmVnaXN0ZXJSZXNwb25zZUZpbHRlciIsInJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnJlZ2lzdGVyUmVzcG9uc2VGaWx0ZXIiLCJhdHRhY2hQbGF5ZXIiLCJwbGF5ZXIiLCJsaXN0ZW5lciIsImNoZWNrUGxheWVyIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiZGV0YWNoUGxheWVyIiwiYXR0YWNoTGlicmFyeSIsIndpbmRvdyIsInNoYWthIiwiY29uZmlndXJhdGlvbiIsImRlZmF1bHQiLCJDb3JlRW5naW5lIiwic2hha2FNb2R1bGUiLCJEYXRlVXRpbHMiLCJwbGF5ZXJBZGFwdGVyIiwicG9sbFBlcmlvZCIsIlBPTExJTkdfUEVSSU9EIiwicG9sbFBsYXllckludGVydmFsIiwiZXhwZWN0ZWRQb3NpdGlvbiIsInBvbGxMYXN0RGF0ZSIsImxhc3RQb3NpdGlvbiIsIkRhdGUiLCJub3ciLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwb2xsUGxheWVyUG9zaXRpb24iLCJtYXhSYW5nZSIsIm1pblJhbmdlIiwiaGFuZGxlZCIsImZvcm1hdFRpbWUiLCJnZXRQb3NpdGlvbkJlZm9yZVNlZWsiXSwic291cmNlUm9vdCI6IiJ9