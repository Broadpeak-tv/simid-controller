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
    key: "getMediaElement",
    value: function getMediaElement() {
      return _classPrivateFieldGet(this, _player).getMediaElement();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXdEO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1NtYXJ0TGliTW9kdWxlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3BsYXllcnMvc2hha2EvU2hha2FQbGF5ZXJBZGFwdGVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vcGxheWVycy9zaGFrYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyYy9lbmdpbmUvcGxheWVyL1BsYXllclN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic2hha2FTbWFydExpYk1vZHVsZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzaGFrYVNtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNoYWthU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG59KSgoZnVuY3Rpb24oKSB7IHJldHVybiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCl9KSgpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBTbWFydExpYiwgTG9nZ2VyTWFuYWdlciB9IGZyb20gJ2NvcmUnO1xuaW1wb3J0IHsgUGxheWVyQWRhcHRlciB9IGZyb20gJ2FuYWx5dGljcyc7XG5pbXBvcnQgUGxheWVyU3RhdGVNYW5hZ2VyIGZyb20gJy4uLy4uL3NyYy9lbmdpbmUvcGxheWVyL1BsYXllclN0YXRlTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtTaGFrYVBsYXllckFkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrYVBsYXllckFkYXB0ZXIgZXh0ZW5kcyBQbGF5ZXJBZGFwdGVyIHtcbiAgICBzdGF0aWMgbGlicmFyeTtcblxuICAgICNwbGF5ZXI7XG4gICAgI2xpc3RlbmVyO1xuXG4gICAgbG9hZGluZztcbiAgICBzdGFydGVkO1xuICAgIGJpdHJhdGU7XG5cbiAgICBwbGF5aW5nRXZlbnRSZWNlaXZlZDtcbiAgICByZXF1ZXN0ZWRVUkxSZWNlaXZlZDtcbiAgICByZWRpcmVjdGVkVVJMUmVjZWl2ZWQ7XG5cbiAgICBsb2FkaW5nRXJyb3I7XG5cbiAgICBwbGF5ZXJTdGF0ZU1hbmFnZXI7XG4gICAgcGxheWVyTGlzdGVuZXJzO1xuXG4gICAgLy8gdG9kbyBmaXggcGF1c2UganVzdCBiZWZvcmUgcmVidWZmZXJpbmdcblxuICAgIG9uUGxheUV2ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5aW5nRXZlbnQoKSB7XG4gICAgICAgIHRoaXMucGxheWluZ0V2ZW50UmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBpc0J1ZmZlcmluZyA9IHRoaXMuI3BsYXllci5pc0J1ZmZlcmluZygpO1xuXG4gICAgICAgICAgICBpZiAoIWlzQnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUZpcnN0SW1hZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBpcyBzdGlsbCBidWZmZXJpbmcsIGZpcnN0IGltYWdlIGV2ZW50IG5vdCB5ZXQgdHJpZ2dlcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBhdXNlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UGF1c2UoKTtcbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZygpIHtcbiAgICAgICAgY29uc3QgaXNCdWZmZXJpbmcgPSB0aGlzLiNwbGF5ZXIuaXNCdWZmZXJpbmcoKTtcblxuICAgICAgICBpZiAoU21hcnRMaWIuZ2V0SW5zdGFuY2UoKS5pc0FuYWx5dGljc0luaXRpYWxpemVkKCkgPT09IHRydWUgJiYgdGhpcy5yZXF1ZXN0ZWRVUkxSZWNlaXZlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdGVkVVJMUmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCB1cmkgPSB0aGlzLiNwbGF5ZXIuZ2V0QXNzZXRVcmkoKTtcbiAgICAgICAgICAgIGlmICh1cmkgIT09IG51bGwgJiYgdXJpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVxdWVzdGVkIFVSTDogJyArIHVyaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXN0b21QYXJhbWV0ZXIoJ3JlcG9ydC5yZXF1ZXN0ZWRVUkwnLCB1cmkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWJhY2sgbm90IHN0YXJ0ZWQnKTtcblxuICAgICAgICAgICAgICAgIGxldCBicGtFcnJvckNvZGU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZ0Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnBrRXJyb3JDb2RlID0gdGhpcy5nZXRFcnJvckNvZGUodGhpcy5sb2FkaW5nRXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyRXJyb3JDb2RlKHRoaXMubG9hZGluZ0Vycm9yLmNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNsb3NlKGJwa0Vycm9yQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNCdWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5mb3JjZVBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YWxsU3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFsbEVuZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNDb2RlKFNtYXJ0TGliLkJQU2Vzc2lvbkVuZHNOb3JtYWxseSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJFcnJvckNvZGUoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc0J1ZmZlcmluZyAmJiB0aGlzLnBsYXlpbmdFdmVudFJlY2VpdmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUZpcnN0SW1hZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGF5ZXJTd2l0Y2hFdmVudCgpIHtcbiAgICAgICAgY29uc3QgYml0cmF0ZSA9IHRoaXMuZ2V0Qml0cmF0ZSgpO1xuICAgICAgICBpZiAoYml0cmF0ZSAhPT0gdGhpcy5iaXRyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmJpdHJhdGUgPSBiaXRyYXRlO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYXJpYW50Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxheWVyU3dpdGNoRXZlbnQoKTtcbiAgICB9XG5cbiAgICBvbkxvYWRpbmdFdmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMubm90aWZ5TG9hZGluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTmV0d29ya1Jlc3BvbnNlRXZlbnQodHlwZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChTbWFydExpYi5nZXRJbnN0YW5jZSgpLmlzQW5hbHl0aWNzSW5pdGlhbGl6ZWQoKSA9PT0gdHJ1ZSAmJiB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVzb2x2ZWQgcmVkaXJlY3RlZCBVUkw6ICcgKyByZXNwb25zZS51cmkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tUGFyYW1ldGVyKCdyZXBvcnQucmVkaXJlY3RlZFVSTCcsIHJlc3BvbnNlLnVyaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlTZWVrKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIG9uRXJyb3JFdmVudChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuZGV0YWlsLnNldmVyaXR5ID09PSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLlNldmVyaXR5LkNSSVRJQ0FMKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnT24gcGxheWVyIGVycm9yIDogJyArIGVycm9yLmRldGFpbC5jb2RlKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNDb2RlKHRoaXMuZ2V0RXJyb3JDb2RlKGVycm9yLmRldGFpbCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJFcnJvckNvZGUoZXJyb3IuZGV0YWlsLmNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdTaGFrYSBQbGF5ZXInO1xuICAgIH1cblxuICAgIGdldFZlcnNpb24oKSB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS5QbGF5ZXIudmVyc2lvbi5zdWJzdHJpbmcoMCwgMzIpO1xuICAgICAgICBjb25zdCBsb25nVmVyc2lvbkluZGV4ID0gdmVyc2lvbi5pbmRleE9mKCcgJyk7XG4gICAgICAgIGlmIChsb25nVmVyc2lvbkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uLnN1YnN0cmluZygwLCBsb25nVmVyc2lvbkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIH1cblxuICAgIFxuICAgIGdldE1lZGlhRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICBnZXRCaXRyYXRlKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRUcmFja3MgPSB0aGlzLiNwbGF5ZXIuZ2V0VmFyaWFudFRyYWNrcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYW50VHJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudFRyYWNrID0gdmFyaWFudFRyYWNrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudFRyYWNrLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YXJpYW50VHJhY2suYmFuZHdpZHRoIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmlzTGl2ZSgpID8gdGhpcy4jcGxheWVyLmdldFBsYXloZWFkVGltZUFzRGF0ZSgpLmdldFRpbWUoKSA6IHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5jdXJyZW50VGltZSAqIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmN1cnJlbnRUaW1lICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldER1cmF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuI3BsYXllci5pc0xpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnYWRUcmFja2luZyc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRFcnJvckNvZGUoZXJyb3IpIHtcbiAgICAgICAgc3dpdGNoIChlcnJvci5jYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5Lk5FVFdPUks6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQTmV0d29ya2luZ0Vycm9yO1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5LlRFWFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuTUVESUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuU1RSRUFNSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUERlY29kaW5nRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuRFJNOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUEFjY2Vzc1JpZ2h0RXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuUExBWUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUFVuc3BlY2lmaWVkRXJyb3I7XG4gICAgICAgICAgICBjYXNlIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5LnV0aWwuRXJyb3IuQ2F0ZWdvcnkuQ0FTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBVbnNwZWNpZmllZEVycm9yO1xuICAgICAgICAgICAgY2FzZSBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeS51dGlsLkVycm9yLkNhdGVnb3J5LlNUT1JBR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQVW5zcGVjaWZpZWRFcnJvcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQVW5zcGVjaWZpZWRFcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldExvYWRpbmdFcnJvcihsb2FkaW5nRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nRXJyb3IgPSBsb2FkaW5nRXJyb3I7XG4gICAgfVxuXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYml0cmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWluZ0V2ZW50UmVjZWl2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWRVUkxSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZGlyZWN0ZWRVUkxSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy4jcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllclN0YXRlTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgPSBuZXcgUGxheWVyU3RhdGVNYW5hZ2VyKHRoaXMsIHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllckxpc3RlbmVycyA9IFt0aGlzLm9uUGxheUV2ZW50LmJpbmQodGhpcyksIC8vIDBcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF1c2VFdmVudC5iaW5kKHRoaXMpLCAvLyAxXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1ZmZlcmluZy5iaW5kKHRoaXMpLCAvLyAyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxheWVyU3dpdGNoRXZlbnQuYmluZCh0aGlzKSwgLy8gM1xuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvckV2ZW50LmJpbmQodGhpcyksIC8vIDRcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGxheWluZ0V2ZW50LmJpbmQodGhpcyksIC8vIDVcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFyaWFudENoYW5nZWQuYmluZCh0aGlzKSwgLy8gNlxuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkaW5nRXZlbnQuYmluZCh0aGlzKSwgLy8gN1xuICAgICAgICAgICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZUV2ZW50LmJpbmQodGhpcyksIC8vIDhcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmV0d29ya1Jlc3BvbnNlRXZlbnQuYmluZCh0aGlzKSAvLyA5XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuZ2V0TWVkaWFFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzBdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzFdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5hZGRFdmVudExpc3RlbmVyKCdidWZmZXJpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1syXSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignYWRhcHRhdGlvbicsIHRoaXMucGxheWVyTGlzdGVuZXJzWzNdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMucGxheWVyTGlzdGVuZXJzWzRdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3ZhcmlhbnRjaGFuZ2VkJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNl0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s3XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25zdGF0ZWNoYW5nZScsIHRoaXMucGxheWVyTGlzdGVuZXJzWzhdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXROZXR3b3JraW5nRW5naW5lKCkucmVnaXN0ZXJSZXNwb25zZUZpbHRlcih0aGlzLnBsYXllckxpc3RlbmVyc1s5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllclN0YXRlTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXRlTWFuYWdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBsYXllckxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGxheWVyTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5nZXRNZWRpYUVsZW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbMV0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2J1ZmZlcmluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzJdKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGFwdGF0aW9uJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbM10pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbNF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE1lZGlhRWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s1XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmFyaWFudGNoYW5nZWQnLCB0aGlzLnBsYXllckxpc3RlbmVyc1s2XSk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZGluZycsIHRoaXMucGxheWVyTGlzdGVuZXJzWzddKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdvbnN0YXRlY2hhbmdlJywgdGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOF0pO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLmdldE5ldHdvcmtpbmdFbmdpbmUoKS51bnJlZ2lzdGVyUmVzcG9uc2VGaWx0ZXIodGhpcy5wbGF5ZXJMaXN0ZW5lcnNbOV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGF0dGFjaExpYnJhcnkobGlicmFyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGxpYnJhcnlbJ3V0aWwnXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGxpYnJhcnlbJ1BsYXllciddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NoYWthIFBsYXllciBsaWJyYXJ5IGF0dGFjaGVkJyk7XG4gICAgICAgICAgICBTaGFrYVBsYXllckFkYXB0ZXIubGlicmFyeSA9IGxpYnJhcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnVHJ5IHRvIGF0dGFjaCBhIGxpYnJhcnksIGJ1dCBpdCBpcyBub3QgcmVjb2duaXplZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgLy8gRHluYW1pYyBsb2FkIHBsYXllclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnNoYWthICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFNoYWthUGxheWVyQWRhcHRlci5saWJyYXJ5ID0gd2luZG93LnNoYWthO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJbJ2dldENvbmZpZ3VyYXRpb24nXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IHBsYXllclsnZ2V0Q29uZmlndXJhdGlvbiddKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnbWFuaWZlc3QnXSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZ3VyYXRpb25bJ3N0cmVhbWluZyddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhdHRhY2hQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoU2hha2FQbGF5ZXJBZGFwdGVyLmNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpKSB7XG4gICAgICAgICAgICBpZiAoU2hha2FQbGF5ZXJBZGFwdGVyLmxpYnJhcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdQbGF5ZXIgbGlicmFyeSBub3QgYXR0YWNoZWQgdG8gdGhlIGFkYXB0ZXIsIHBsZWFzZSBjYWxsIFNoYWthUGxheWVyQWRhcHRlci5hdHRhY2hMaWJyYXJ5KHNoYWthKSBiZWZvcmUgYXR0YWNoUGxheWVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI3BsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIHRoaXMuI2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGFjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKTtcblxuICAgICAgICB0aGlzLiNwbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuI2xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaGFrYVBsYXllckFkYXB0ZXIgZnJvbSAnLi9TaGFrYVBsYXllckFkYXB0ZXInO1xuXG5pbXBvcnQgQ29yZUVuZ2luZSBmcm9tICcuLi8uLi9zcmMvZW5naW5lL0NvcmVFbmdpbmUnO1xuQ29yZUVuZ2luZS5zaGFrYU1vZHVsZSA9IHtcbiAgICBTaGFrYVBsYXllckFkYXB0ZXJcbn07XG5cbmV4cG9ydCB7XG4gICAgU2hha2FQbGF5ZXJBZGFwdGVyXG59O1xuIiwiaW1wb3J0IHsgTG9nZ2VyTWFuYWdlciwgRGF0ZVV0aWxzIH0gZnJvbSAnY29yZSc7XG5cbmNvbnN0IFRBRyA9ICdCcGtQbGF5ZXJTdGF0ZU1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTdGF0ZU1hbmFnZXIge1xuICAgIHN0YXRpYyBQT0xMSU5HX1BFUklPRCA9IDUwMDtcblxuICAgIHBsYXllckFkYXB0ZXI7XG4gICAgbGlzdGVuZXI7XG5cbiAgICBwb2xsUGVyaW9kO1xuICAgIHBvbGxMYXN0RGF0ZTtcbiAgICBwb2xsUGxheWVySW50ZXJ2YWw7XG5cbiAgICBsYXN0UG9zaXRpb247XG4gICAgZXhwZWN0ZWRQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllckFkYXB0ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyQWRhcHRlciA9IHBsYXllckFkYXB0ZXI7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgICAgICB0aGlzLnBvbGxQZXJpb2QgPSBQbGF5ZXJTdGF0ZU1hbmFnZXIuUE9MTElOR19QRVJJT0Q7XG4gICAgICAgIHRoaXMucG9sbFBsYXllckludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5wb2xsTGFzdERhdGUgPSAwO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbiArIHRoaXMucG9sbFBlcmlvZDtcbiAgICAgICAgdGhpcy5wb2xsTGFzdERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuICAgICAgICB9LCB0aGlzLnBvbGxQZXJpb2QpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JjZVBvbGxQbGF5ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uID0gdGhpcy5leHBlY3RlZFBvc2l0aW9uIC0gdGhpcy5wb2xsUGVyaW9kICsgKERhdGUubm93KCkgLSB0aGlzLnBvbGxMYXN0RGF0ZSk7XG5cbiAgICAgICAgdGhpcy5wb2xsUGxheWVyUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwb2xsUGxheWVyUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gR2V0IG1pbiBhbmQgbWF4IHJhbmdlcy5cbiAgICAgICAgY29uc3QgbWF4UmFuZ2UgPSB0aGlzLmV4cGVjdGVkUG9zaXRpb24gKyAoMiAqIHRoaXMucG9sbFBlcmlvZCk7XG4gICAgICAgIGNvbnN0IG1pblJhbmdlID0gdGhpcy5leHBlY3RlZFBvc2l0aW9uIC0gKDIgKiB0aGlzLnBvbGxQZXJpb2QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRpbWVzIG1hdGNoLlxuICAgICAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gPCBtaW5SYW5nZSB8fCB0aGlzLmxhc3RQb3NpdGlvbiA+IG1heFJhbmdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLmxpc3RlbmVyWydoYW5kbGVTZWVrJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVkID0gdGhpcy5saXN0ZW5lci5oYW5kbGVTZWVrKHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiwgdGhpcy5sYXN0UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBpcyBzZWVraW5nICgnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUodGhpcy5leHBlY3RlZFBvc2l0aW9uKSArICcgdG8gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKHRoaXMubGFzdFBvc2l0aW9uKSArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGV4cGVjdGVkIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uICsgdGhpcy5wb2xsUGVyaW9kO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMubGlzdGVuZXJbJ2hhbmRsZVBvbGwnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclsnaGFuZGxlUG9sbCddKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvbGxMYXN0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb25CZWZvcmVTZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIlNtYXJ0TGliIiwiTG9nZ2VyTWFuYWdlciIsIlBsYXllckFkYXB0ZXIiLCJQbGF5ZXJTdGF0ZU1hbmFnZXIiLCJUQUciLCJfcGxheWVyIiwiV2Vha01hcCIsIl9saXN0ZW5lciIsIlNoYWthUGxheWVyQWRhcHRlciIsIl9QbGF5ZXJBZGFwdGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndyaXRhYmxlIiwidmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJvblBsYXlFdmVudCIsInN0YXJ0ZWQiLCJub3RpZnlSZXN1bWUiLCJvblBsYXlpbmdFdmVudCIsInBsYXlpbmdFdmVudFJlY2VpdmVkIiwiaXNCdWZmZXJpbmciLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJwbGF5ZXJTdGF0ZU1hbmFnZXIiLCJzdGFydCIsIm5vdGlmeUZpcnN0SW1hZ2UiLCJkIiwib25QYXVzZUV2ZW50Iiwibm90aWZ5UGF1c2UiLCJvbkJ1ZmZlcmluZyIsImdldEluc3RhbmNlIiwiaXNBbmFseXRpY3NJbml0aWFsaXplZCIsInJlcXVlc3RlZFVSTFJlY2VpdmVkIiwidXJpIiwiZ2V0QXNzZXRVcmkiLCJ1bmRlZmluZWQiLCJzZXRDdXN0b21QYXJhbWV0ZXIiLCJicGtFcnJvckNvZGUiLCJsb2FkaW5nRXJyb3IiLCJnZXRFcnJvckNvZGUiLCJzZXRQbGF5ZXJFcnJvckNvZGUiLCJjb2RlIiwibm90aWZ5Q2xvc2UiLCJmb3JjZVBvbGxQbGF5ZXJQb3NpdGlvbiIsIm5vdGlmeVN0YWxsU3RhcnQiLCJub3RpZnlTdGFsbEVuZCIsInNldFN0YXR1c0NvZGUiLCJCUFNlc3Npb25FbmRzTm9ybWFsbHkiLCJvbkxheWVyU3dpdGNoRXZlbnQiLCJiaXRyYXRlIiwiZ2V0Qml0cmF0ZSIsIm5vdGlmeUxheWVyU3dpdGNoIiwib25WYXJpYW50Q2hhbmdlZCIsIm9uTG9hZGluZ0V2ZW50IiwibG9hZGluZyIsIm5vdGlmeUxvYWRpbmciLCJvblN0YXRlQ2hhbmdlRXZlbnQiLCJldmVudCIsInN0YXRlIiwib25OZXR3b3JrUmVzcG9uc2VFdmVudCIsInR5cGUiLCJyZXNwb25zZSIsInJlZGlyZWN0ZWRVUkxSZWNlaXZlZCIsImhhbmRsZVNlZWsiLCJlbmQiLCJub3RpZnlTZWVrIiwib25FcnJvckV2ZW50IiwiZXJyb3IiLCJkZXRhaWwiLCJzZXZlcml0eSIsImxpYnJhcnkiLCJ1dGlsIiwiRXJyb3IiLCJTZXZlcml0eSIsIkNSSVRJQ0FMIiwiZSIsImdldE5hbWUiLCJnZXRWZXJzaW9uIiwidmVyc2lvbiIsIlBsYXllciIsInN1YnN0cmluZyIsImxvbmdWZXJzaW9uSW5kZXgiLCJpbmRleE9mIiwiZ2V0TWVkaWFFbGVtZW50IiwidmFyaWFudFRyYWNrcyIsImdldFZhcmlhbnRUcmFja3MiLCJpIiwidmFyaWFudFRyYWNrIiwiYWN0aXZlIiwiTWF0aCIsInJvdW5kIiwiYmFuZHdpZHRoIiwiZ2V0UG9zaXRpb24iLCJjdXJyZW50VGltZSIsImdldER1cmF0aW9uIiwiaXNMaXZlIiwiZHVyYXRpb24iLCJnZXRDYXBhYmlsaXRpZXMiLCJjYXRlZ29yeSIsIkNhdGVnb3J5IiwiTkVUV09SSyIsIkJQTmV0d29ya2luZ0Vycm9yIiwiVEVYVCIsIkJQRm9ybWF0Tm90U3VwcG9ydGVkRXJyb3IiLCJNRURJQSIsIk1BTklGRVNUIiwiU1RSRUFNSU5HIiwiQlBEZWNvZGluZ0Vycm9yIiwiRFJNIiwiQlBBY2Nlc3NSaWdodEVycm9yIiwiUExBWUVSIiwiQlBVbnNwZWNpZmllZEVycm9yIiwiQ0FTVCIsIlNUT1JBR0UiLCJzZXRMb2FkaW5nRXJyb3IiLCJpbml0U2Vzc2lvblBsYXllck9iamVjdHMiLCJzdG9wIiwicGxheWVyTGlzdGVuZXJzIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXROZXR3b3JraW5nRW5naW5lIiwicmVnaXN0ZXJSZXNwb25zZUZpbHRlciIsInJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnJlZ2lzdGVyUmVzcG9uc2VGaWx0ZXIiLCJhdHRhY2hQbGF5ZXIiLCJwbGF5ZXIiLCJsaXN0ZW5lciIsImNoZWNrUGxheWVyIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiZGV0YWNoUGxheWVyIiwiYXR0YWNoTGlicmFyeSIsIndpbmRvdyIsInNoYWthIiwiY29uZmlndXJhdGlvbiIsImRlZmF1bHQiLCJDb3JlRW5naW5lIiwic2hha2FNb2R1bGUiLCJEYXRlVXRpbHMiLCJwbGF5ZXJBZGFwdGVyIiwicG9sbFBlcmlvZCIsIlBPTExJTkdfUEVSSU9EIiwicG9sbFBsYXllckludGVydmFsIiwiZXhwZWN0ZWRQb3NpdGlvbiIsInBvbGxMYXN0RGF0ZSIsImxhc3RQb3NpdGlvbiIsIkRhdGUiLCJub3ciLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwb2xsUGxheWVyUG9zaXRpb24iLCJtYXhSYW5nZSIsIm1pblJhbmdlIiwiaGFuZGxlZCIsImZvcm1hdFRpbWUiLCJnZXRQb3NpdGlvbkJlZm9yZVNlZWsiXSwic291cmNlUm9vdCI6IiJ9