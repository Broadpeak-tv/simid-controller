"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dashjsSmartLibModule", [], factory);
	else if(typeof exports === 'object')
		exports["dashjsSmartLibModule"] = factory();
	else
		root["dashjsSmartLibModule"] = factory();
})((function() { return (typeof self !== 'undefined' ? self : global)})(), function() {
return ((function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] = (function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] || []).push([["dashjs"],{

/***/ "./players/dashjs/DashJsPlayerAdapter.js":
/*!***********************************************!*\
  !*** ./players/dashjs/DashJsPlayerAdapter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashJsPlayerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core */ "./src_core/index.js");
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! analytics */ "./src_core/index.analytics.js");
/* harmony import */ var _src_engine_player_PlayerStateManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/engine/player/PlayerStateManager */ "./src/engine/player/PlayerStateManager.js");














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



var TAG = 'BpkDashJsPlayerAdapter';
var _player = /*#__PURE__*/new WeakMap();
var _listener = /*#__PURE__*/new WeakMap();
var DashJsPlayerAdapter = /*#__PURE__*/function (_PlayerAdapter) {
  _inherits(DashJsPlayerAdapter, _PlayerAdapter);
  var _super = _createSuper(DashJsPlayerAdapter);
  function DashJsPlayerAdapter() {
    var _this;
    _classCallCheck(this, DashJsPlayerAdapter);
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
    _defineProperty(_assertThisInitialized(_this), "started", void 0);
    _defineProperty(_assertThisInitialized(_this), "paused", void 0);
    _defineProperty(_assertThisInitialized(_this), "buffering", void 0);
    _defineProperty(_assertThisInitialized(_this), "seeking", void 0);
    _defineProperty(_assertThisInitialized(_this), "seekBeginPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "lastLayer", void 0);
    _defineProperty(_assertThisInitialized(_this), "playerStateManager", void 0);
    _defineProperty(_assertThisInitialized(_this), "playerListener", void 0);
    _defineProperty(_assertThisInitialized(_this), "position", void 0);
    return _this;
  }
  _createClass(DashJsPlayerAdapter, [{
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'error' && typeof event.error === 'object') {
        core__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.e(TAG, 'Player encountered an error : ' + event.error.code);
        this.setStatusCode(this.getErrorCode(event.error));
        this.setPlayerErrorCode(event.error.code);
        return;
      }
      if (!this.started) {
        if (event.type === 'playbackPlaying') {
          this.playerStateManager.start();
          this.started = true;
          this.notifyFirstImage();
        }
        return;
      }
      if (event.type === 'playbackPlaying') {
        if (this.buffering) {
          this.notifyStallEnd();
          this.setStatusCode(core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPSessionEndsNormally);
          this.buffering = false;
          this.seeking = false;
        }
        if (this.paused) {
          this.notifyResume();
          this.paused = false;
        }
      } else if (event.type === 'playbackPaused') {
        if (!this.paused && (!_classPrivateFieldGet(this, _player).isSeeking() || this.seeking)) {
          this.paused = true;
          this.notifyPause();
        }
      } else if (event.type === 'playbackStarted') {
        if (this.paused) {
          this.paused = false;
          this.notifyResume();
        }
      } else if (event.type === 'playbackWaiting' || event.type === 'bufferStalled' && event.mediaType === 'video') {
        if (!this.buffering) {
          this.buffering = true;
          this.notifyStallStart();
        }
      } else if (event.type === 'bufferLoaded' && event.mediaType === 'video') {
        this.buffering = false;
        this.notifyStallEnd();
        this.setStatusCode(core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPSessionEndsNormally);
      } else if (event.type === 'qualityChangeRendered') {
        var currentLayer = this.getBitrate();
        if (currentLayer !== this.lastLayer) {
          this.lastLayer = currentLayer;
          this.notifyLayerSwitch(currentLayer);
        }
      } else if (event.type === 'playbackSeeked') {
        this.seeking = false;
      } else if (event.type === 'playbackSeeking') {
        this.seekBeginPosition = this.playerStateManager.getPositionBeforeSeek();
        if (this.seekBeginPosition !== this.getPosition()) {
          this.seeking = true;
          this.notifySeek(this.seekBeginPosition, this.getPosition());
        }
      }
    }
  }, {
    key: "getName",
    value: function getName() {
      return 'Dash.js';
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return DashJsPlayerAdapter.library.Version.substring(0, 32);
    }
  }, {
    key: "getBitrate",
    value: function getBitrate() {
      if (_classPrivateFieldGet(this, _player) !== undefined && _classPrivateFieldGet(this, _player).isReady()) {
        var videoIndex = _classPrivateFieldGet(this, _player).getQualityFor('video');
        var audioIndex = _classPrivateFieldGet(this, _player).getQualityFor('audio');
        var videoBitrate = _classPrivateFieldGet(this, _player).getBitrateInfoListFor('video');
        var audioBitrate = _classPrivateFieldGet(this, _player).getBitrateInfoListFor('audio');
        var bitrate = 0;
        if (videoIndex < videoBitrate.length) {
          bitrate = Math.round(videoBitrate[videoIndex].bitrate / 1000);
        }
        if (audioIndex < audioBitrate.length) {
          bitrate += Math.round(audioBitrate[audioIndex].bitrate / 1000);
        }
        return bitrate;
      }
      return 0;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      if (_classPrivateFieldGet(this, _player) !== undefined) {
        if (_classPrivateFieldGet(this, _player).isDynamic()) {
          if (!isNaN(_classPrivateFieldGet(this, _player).timeAsUTC())) {
            this.position = Math.round(_classPrivateFieldGet(this, _player).timeAsUTC() * 1000);
          }
          if (this.position !== 0) {
            return this.position;
          }
        }
        return Math.round(_classPrivateFieldGet(this, _player).time() * 1000);
      }
      return 0;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (_classPrivateFieldGet(this, _player) !== undefined && !_classPrivateFieldGet(this, _player).isDynamic()) {
        return Math.round(_classPrivateFieldGet(this, _player).duration() * 1000);
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
      var errors = DashJsPlayerAdapter.library.MediaPlayer.errors;
      switch (error.code) {
        /**
         * Error code returned when a manifest parsing error occurs
         */
        case errors['MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPFormatNotSupportedError;

        /**
         * Error code returned when a manifest loading error occurs
         */
        case errors['MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE']:
        /**
         * Error code returned when a xlink loading error occurs
         */
        case errors['XLINK_LOADER_LOADING_FAILURE_ERROR_CODE']:
        /**
         * Error code returned when the update of segments list has failed
         */
        case errors['SEGMENTS_UPDATE_FAILED_ERROR_CODE']:
        case errors['SEGMENTS_UNAVAILABLE_ERROR_CODE']:
        case errors['SEGMENT_BASE_LOADER_ERROR_CODE']:
        case errors['TIME_SYNC_FAILED_ERROR_CODE']:
        case errors['FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE']:
        case errors['FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE']:
        case errors['URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE']:
        case errors['APPEND_ERROR_CODE']:
        case errors['REMOVE_ERROR_CODE']:
        case errors['DATA_UPDATE_FAILED_ERROR_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPDecodingError;

        /**
         * Error code returned when MediaSource is not supported by the browser
         */
        case errors['CAPABILITY_MEDIASOURCE_ERROR_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPFormatNotSupportedError;

        /**
         * Error code returned when Protected contents are not supported
         */
        case errors['CAPABILITY_MEDIAKEYS_ERROR_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPAccessRightError;
        case errors['DOWNLOAD_ERROR_ID_MANIFEST_CODE']:
        /*
         *@deprecated
         */
        case errors['DOWNLOAD_ERROR_ID_SIDX_CODE']:
        case errors['DOWNLOAD_ERROR_ID_CONTENT_CODE']:
        /*
         *@deprecated
         */
        case errors['DOWNLOAD_ERROR_ID_INITIALIZATION_CODE']:
        /*
         *@deprecated
         */
        case errors['DOWNLOAD_ERROR_ID_XLINK_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPNetworkingError;
        case errors['MANIFEST_ERROR_ID_CODEC_CODE']:
        case errors['MANIFEST_ERROR_ID_PARSE_CODE']:
        /**
         * Error code returned when no stream (period) has been detected in the manifest
         */
        case errors['MANIFEST_ERROR_ID_NOSTREAMS_CODE']:
        /**
         * Error code returned when something wrong has append during subtitles parsing (TTML or VTT)
         */
        case errors['TIMED_TEXT_ERROR_ID_PARSE_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPDecodingError;

        /**
         * Error code returned when a 'muxed' media type has been detected in the manifest. This type is not supported
         */
        case errors['MANIFEST_ERROR_ID_MULTIPLEXED_CODE']:
        /**
         * Error code returned when a media source type is not supported
         */
        case errors['MEDIASOURCE_TYPE_UNSUPPORTED_CODE']:
          return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPFormatNotSupportedError;
      }
      if (error.code >= errors['MEDIA_KEYERR_CODE']) {
        return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPAccessRightError;
      }
      return core__WEBPACK_IMPORTED_MODULE_14__.SmartLib.BPUnspecifiedError;
    }
  }, {
    key: "initSessionPlayerObjects",
    value: function initSessionPlayerObjects() {
      this.started = false;
      this.paused = false;
      this.buffering = false;
      this.seeking = false;
      this.seekBeginPosition = 0;
      this.lastLayer = 0;
      this.position = 0;
      if (_classPrivateFieldGet(this, _player) !== undefined) {
        if (this.playerStateManager !== undefined) {
          this.playerStateManager.stop();
        }
        this.playerStateManager = new _src_engine_player_PlayerStateManager__WEBPACK_IMPORTED_MODULE_16__["default"](this, this);
        this.playerListener = this.handleEvent.bind(this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_PLAYING'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_PAUSED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['BUFFER_EMPTY'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['QUALITY_CHANGE_RENDERED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['ERROR'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_WAITING'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['BUFFER_LOADED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_STARTED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_SEEKING'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).on(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_SEEKED'], this.playerListener, this);
      }
    }
  }, {
    key: "releaseSessionPlayerObjects",
    value: function releaseSessionPlayerObjects() {
      if (this.playerStateManager !== undefined) {
        this.playerStateManager.stop();
        this.playerStateManager = undefined;
      }
      if (_classPrivateFieldGet(this, _player) !== undefined && this.playerListener !== undefined) {
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_PLAYING'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_PAUSED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['BUFFER_EMPTY'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['QUALITY_CHANGE_RENDERED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['ERROR'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_WAITING'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['BUFFER_LOADED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_STARTED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_SEEKING'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).off(DashJsPlayerAdapter.library.MediaPlayer.events['PLAYBACK_SEEKED'], this.playerListener, this);
        _classPrivateFieldGet(this, _player).setPlaybackRate(1.0);
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      if (DashJsPlayerAdapter.checkPlayer(player, listener)) {
        if (DashJsPlayerAdapter.library === undefined) {
          core__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.e(TAG, 'Player library not attached to the adapter, please call DashJsPlayerAdapter.attachLibrary(dashjs) before attachPlayer');
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
      if (typeof library['MediaPlayer'] !== 'undefined' && typeof library['Version'] !== 'undefined') {
        core__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Dash.js library attached');
        DashJsPlayerAdapter.library = library;
      } else {
        core__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.e(TAG, 'Try to attach a library, but it is not recognized');
      }
    }
  }, {
    key: "checkPlayer",
    value: function checkPlayer(player, listener) {
      // Dynamic load player
      if (typeof window !== 'undefined' && window.dashjs !== undefined) {
        DashJsPlayerAdapter.library = window.dashjs;
      }
      return typeof DashJsPlayerAdapter.library === 'object' && typeof player['getDashMetrics'] === 'function' && typeof player['getClassName'] === 'function' && player['getClassName']() === 'MediaPlayer';
    }
  }]);
  return DashJsPlayerAdapter;
}(analytics__WEBPACK_IMPORTED_MODULE_15__.PlayerAdapter);
_defineProperty(DashJsPlayerAdapter, "library", void 0);


/***/ }),

/***/ "./players/dashjs/index.js":
/*!*********************************!*\
  !*** ./players/dashjs/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashJsPlayerAdapter: function() { return /* reexport safe */ _DashJsPlayerAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _DashJsPlayerAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashJsPlayerAdapter */ "./players/dashjs/DashJsPlayerAdapter.js");
/* harmony import */ var _src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/engine/CoreEngine */ "./src/engine/CoreEngine.js");


_src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_1__["default"].dashjsModule = {
  DashJsPlayerAdapter: _DashJsPlayerAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]
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
/******/ __webpack_require__.O(0, ["analytics"], function() { return __webpack_exec__("./players/dashjs/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1NtYXJ0TGliTW9kdWxlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3BsYXllcnMvZGFzaGpzL0Rhc2hKc1BsYXllckFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9wbGF5ZXJzL2Rhc2hqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyYy9lbmdpbmUvcGxheWVyL1BsYXllclN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGFzaGpzU21hcnRMaWJNb2R1bGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFzaGpzU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFzaGpzU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG59KSgoZnVuY3Rpb24oKSB7IHJldHVybiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCl9KSgpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBTbWFydExpYiwgTG9nZ2VyTWFuYWdlciB9IGZyb20gJ2NvcmUnO1xuaW1wb3J0IHsgUGxheWVyQWRhcHRlciB9IGZyb20gJ2FuYWx5dGljcyc7XG5pbXBvcnQgUGxheWVyU3RhdGVNYW5hZ2VyIGZyb20gJy4uLy4uL3NyYy9lbmdpbmUvcGxheWVyL1BsYXllclN0YXRlTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtEYXNoSnNQbGF5ZXJBZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaEpzUGxheWVyQWRhcHRlciBleHRlbmRzIFBsYXllckFkYXB0ZXIge1xuICAgIHN0YXRpYyBsaWJyYXJ5O1xuXG4gICAgI3BsYXllcjtcbiAgICAjbGlzdGVuZXI7XG5cbiAgICBzdGFydGVkO1xuICAgIHBhdXNlZDtcbiAgICBidWZmZXJpbmc7XG4gICAgc2Vla2luZztcbiAgICBzZWVrQmVnaW5Qb3NpdGlvbjtcbiAgICBsYXN0TGF5ZXI7XG5cbiAgICBwbGF5ZXJTdGF0ZU1hbmFnZXI7XG4gICAgcGxheWVyTGlzdGVuZXI7XG5cbiAgICBwb3NpdGlvbjtcblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnZXJyb3InICYmIHR5cGVvZiBldmVudC5lcnJvciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdQbGF5ZXIgZW5jb3VudGVyZWQgYW4gZXJyb3IgOiAnICsgZXZlbnQuZXJyb3IuY29kZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0NvZGUodGhpcy5nZXRFcnJvckNvZGUoZXZlbnQuZXJyb3IpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyRXJyb3JDb2RlKGV2ZW50LmVycm9yLmNvZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAncGxheWJhY2tQbGF5aW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUZpcnN0SW1hZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdwbGF5YmFja1BsYXlpbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YWxsRW5kKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c0NvZGUoU21hcnRMaWIuQlBTZXNzaW9uRW5kc05vcm1hbGx5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVJlc3VtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAncGxheWJhY2tQYXVzZWQnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkICYmICghdGhpcy4jcGxheWVyLmlzU2Vla2luZygpIHx8IHRoaXMuc2Vla2luZykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3BsYXliYWNrU3RhcnRlZCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlSZXN1bWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdwbGF5YmFja1dhaXRpbmcnIHx8IChldmVudC50eXBlID09PSAnYnVmZmVyU3RhbGxlZCcgJiYgZXZlbnQubWVkaWFUeXBlID09PSAndmlkZW8nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YWxsU3RhcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdidWZmZXJMb2FkZWQnICYmIGV2ZW50Lm1lZGlhVHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhbGxFbmQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQ29kZShTbWFydExpYi5CUFNlc3Npb25FbmRzTm9ybWFsbHkpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3F1YWxpdHlDaGFuZ2VSZW5kZXJlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMuZ2V0Qml0cmF0ZSgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYXllciAhPT0gdGhpcy5sYXN0TGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RMYXllciA9IGN1cnJlbnRMYXllcjtcblxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5TGF5ZXJTd2l0Y2goY3VycmVudExheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAncGxheWJhY2tTZWVrZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNlZWtpbmcgPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdwbGF5YmFja1NlZWtpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLnNlZWtCZWdpblBvc2l0aW9uID0gdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuZ2V0UG9zaXRpb25CZWZvcmVTZWVrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWVrQmVnaW5Qb3NpdGlvbiAhPT0gdGhpcy5nZXRQb3NpdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWVraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVNlZWsodGhpcy5zZWVrQmVnaW5Qb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnRGFzaC5qcyc7XG4gICAgfVxuXG4gICAgZ2V0VmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5WZXJzaW9uLnN1YnN0cmluZygwLCAzMik7XG4gICAgfVxuXG4gICAgZ2V0Qml0cmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuI3BsYXllci5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSW5kZXggPSB0aGlzLiNwbGF5ZXIuZ2V0UXVhbGl0eUZvcigndmlkZW8nKTtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvSW5kZXggPSB0aGlzLiNwbGF5ZXIuZ2V0UXVhbGl0eUZvcignYXVkaW8nKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvQml0cmF0ZSA9IHRoaXMuI3BsYXllci5nZXRCaXRyYXRlSW5mb0xpc3RGb3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBjb25zdCBhdWRpb0JpdHJhdGUgPSB0aGlzLiNwbGF5ZXIuZ2V0Qml0cmF0ZUluZm9MaXN0Rm9yKCdhdWRpbycpO1xuICAgICAgICAgICAgbGV0IGJpdHJhdGUgPSAwO1xuXG4gICAgICAgICAgICBpZiAodmlkZW9JbmRleCA8IHZpZGVvQml0cmF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBiaXRyYXRlID0gTWF0aC5yb3VuZCh2aWRlb0JpdHJhdGVbdmlkZW9JbmRleF0uYml0cmF0ZSAvIDEwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9JbmRleCA8IGF1ZGlvQml0cmF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBiaXRyYXRlICs9IE1hdGgucm91bmQoYXVkaW9CaXRyYXRlW2F1ZGlvSW5kZXhdLmJpdHJhdGUgLyAxMDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJpdHJhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jcGxheWVyLmlzRHluYW1pYygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLiNwbGF5ZXIudGltZUFzVVRDKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBNYXRoLnJvdW5kKHRoaXMuI3BsYXllci50aW1lQXNVVEMoKSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLnRpbWUoKSAqIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0RHVyYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy4jcGxheWVyLmlzRHluYW1pYygpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLiNwbGF5ZXIuZHVyYXRpb24oKSAqIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2FkVHJhY2tpbmcnOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RXJyb3JDb2RlKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5lcnJvcnM7XG5cbiAgICAgICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBhIG1hbmlmZXN0IHBhcnNpbmcgZXJyb3Igb2NjdXJzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydNQU5JRkVTVF9MT0FERVJfUEFSU0lOR19GQUlMVVJFX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBGb3JtYXROb3RTdXBwb3J0ZWRFcnJvcjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYSBtYW5pZmVzdCBsb2FkaW5nIGVycm9yIG9jY3Vyc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snTUFOSUZFU1RfTE9BREVSX0xPQURJTkdfRkFJTFVSRV9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBhIHhsaW5rIGxvYWRpbmcgZXJyb3Igb2NjdXJzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydYTElOS19MT0FERVJfTE9BRElOR19GQUlMVVJFX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIHRoZSB1cGRhdGUgb2Ygc2VnbWVudHMgbGlzdCBoYXMgZmFpbGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydTRUdNRU5UU19VUERBVEVfRkFJTEVEX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydTRUdNRU5UU19VTkFWQUlMQUJMRV9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snU0VHTUVOVF9CQVNFX0xPQURFUl9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snVElNRV9TWU5DX0ZBSUxFRF9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snRlJBR01FTlRfTE9BREVSX0xPQURJTkdfRkFJTFVSRV9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snRlJBR01FTlRfTE9BREVSX05VTExfUkVRVUVTVF9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snVVJMX1JFU09MVVRJT05fRkFJTEVEX0dFTkVSSUNfRVJST1JfQ09ERSddOlxuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0FQUEVORF9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snUkVNT1ZFX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydEQVRBX1VQREFURV9GQUlMRURfRVJST1JfQ09ERSddOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUERlY29kaW5nRXJyb3I7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIE1lZGlhU291cmNlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0NBUEFCSUxJVFlfTUVESUFTT1VSQ0VfRVJST1JfQ09ERSddOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUEZvcm1hdE5vdFN1cHBvcnRlZEVycm9yO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBQcm90ZWN0ZWQgY29udGVudHMgYXJlIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0NBUEFCSUxJVFlfTUVESUFLRVlTX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBBY2Nlc3NSaWdodEVycm9yO1xuXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snRE9XTkxPQURfRVJST1JfSURfTUFOSUZFU1RfQ09ERSddOlxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqQGRlcHJlY2F0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0RPV05MT0FEX0VSUk9SX0lEX1NJRFhfQ09ERSddOlxuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0RPV05MT0FEX0VSUk9SX0lEX0NPTlRFTlRfQ09ERSddOlxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqQGRlcHJlY2F0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0RPV05MT0FEX0VSUk9SX0lEX0lOSVRJQUxJWkFUSU9OX0NPREUnXTpcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKkBkZXByZWNhdGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydET1dOTE9BRF9FUlJPUl9JRF9YTElOS19DT0RFJ106XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQTmV0d29ya2luZ0Vycm9yO1xuXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snTUFOSUZFU1RfRVJST1JfSURfQ09ERUNfQ09ERSddOlxuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ01BTklGRVNUX0VSUk9SX0lEX1BBUlNFX0NPREUnXTpcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIG5vIHN0cmVhbSAocGVyaW9kKSBoYXMgYmVlbiBkZXRlY3RlZCBpbiB0aGUgbWFuaWZlc3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ01BTklGRVNUX0VSUk9SX0lEX05PU1RSRUFNU19DT0RFJ106XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBzb21ldGhpbmcgd3JvbmcgaGFzIGFwcGVuZCBkdXJpbmcgc3VidGl0bGVzIHBhcnNpbmcgKFRUTUwgb3IgVlRUKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snVElNRURfVEVYVF9FUlJPUl9JRF9QQVJTRV9DT0RFJ106XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRGVjb2RpbmdFcnJvcjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYSAnbXV4ZWQnIG1lZGlhIHR5cGUgaGFzIGJlZW4gZGV0ZWN0ZWQgaW4gdGhlIG1hbmlmZXN0LiBUaGlzIHR5cGUgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snTUFOSUZFU1RfRVJST1JfSURfTVVMVElQTEVYRURfQ09ERSddOlxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYSBtZWRpYSBzb3VyY2UgdHlwZSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydNRURJQVNPVVJDRV9UWVBFX1VOU1VQUE9SVEVEX0NPREUnXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBGb3JtYXROb3RTdXBwb3J0ZWRFcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5jb2RlID49IGVycm9yc1snTUVESUFfS0VZRVJSX0NPREUnXSkge1xuICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQQWNjZXNzUmlnaHRFcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbWFydExpYi5CUFVuc3BlY2lmaWVkRXJyb3I7XG4gICAgfVxuXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWVraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2Vla0JlZ2luUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmxhc3RMYXllciA9IDA7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyID0gbmV3IFBsYXllclN0YXRlTWFuYWdlcih0aGlzLCB0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJMaXN0ZW5lciA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ1BMQVlCQUNLX1BMQVlJTkcnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub24oRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5Lk1lZGlhUGxheWVyLmV2ZW50c1snUExBWUJBQ0tfUEFVU0VEJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0JVRkZFUl9FTVBUWSddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydRVUFMSVRZX0NIQU5HRV9SRU5ERVJFRCddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydFUlJPUiddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19XQUlUSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0JVRkZFUl9MT0FERUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub24oRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5Lk1lZGlhUGxheWVyLmV2ZW50c1snUExBWUJBQ0tfU1RBUlRFRCddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TRUVLSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ1BMQVlCQUNLX1NFRUtFRCddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cygpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGxheWVyTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19QTEFZSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19QQVVTRUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub2ZmKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0JVRkZFUl9FTVBUWSddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vZmYoRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5Lk1lZGlhUGxheWVyLmV2ZW50c1snUVVBTElUWV9DSEFOR0VfUkVOREVSRUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub2ZmKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0VSUk9SJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19XQUlUSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydCVUZGRVJfTE9BREVEJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TVEFSVEVEJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TRUVLSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TRUVLRUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5zZXRQbGF5YmFja1JhdGUoMS4wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhdHRhY2hMaWJyYXJ5KGxpYnJhcnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaWJyYXJ5WydNZWRpYVBsYXllciddICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbGlicmFyeVsnVmVyc2lvbiddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0Rhc2guanMgbGlicmFyeSBhdHRhY2hlZCcpO1xuICAgICAgICAgICAgRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5ID0gbGlicmFyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdUcnkgdG8gYXR0YWNoIGEgbGlicmFyeSwgYnV0IGl0IGlzIG5vdCByZWNvZ25pemVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICAvLyBEeW5hbWljIGxvYWQgcGxheWVyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZGFzaGpzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeSA9IHdpbmRvdy5kYXNoanM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZW9mIERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsYXllclsnZ2V0RGFzaE1ldHJpY3MnXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgdHlwZW9mIHBsYXllclsnZ2V0Q2xhc3NOYW1lJ10gPT09ICdmdW5jdGlvbicgJiYgcGxheWVyWydnZXRDbGFzc05hbWUnXSgpID09PSAnTWVkaWFQbGF5ZXInO1xuICAgIH1cblxuICAgIGF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChEYXNoSnNQbGF5ZXJBZGFwdGVyLmNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpKSB7XG4gICAgICAgICAgICBpZiAoRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnUGxheWVyIGxpYnJhcnkgbm90IGF0dGFjaGVkIHRvIHRoZSBhZGFwdGVyLCBwbGVhc2UgY2FsbCBEYXNoSnNQbGF5ZXJBZGFwdGVyLmF0dGFjaExpYnJhcnkoZGFzaGpzKSBiZWZvcmUgYXR0YWNoUGxheWVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI3BsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIHRoaXMuI2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGFjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKTtcblxuICAgICAgICB0aGlzLiNwbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuI2xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCBEYXNoSnNQbGF5ZXJBZGFwdGVyIGZyb20gJy4vRGFzaEpzUGxheWVyQWRhcHRlcic7XG5cbmltcG9ydCBDb3JlRW5naW5lIGZyb20gJy4uLy4uL3NyYy9lbmdpbmUvQ29yZUVuZ2luZSc7XG5Db3JlRW5naW5lLmRhc2hqc01vZHVsZSA9IHtcbiAgICBEYXNoSnNQbGF5ZXJBZGFwdGVyXG59O1xuXG5leHBvcnQge1xuICAgIERhc2hKc1BsYXllckFkYXB0ZXJcbn07XG4iLCJpbXBvcnQgeyBMb2dnZXJNYW5hZ2VyLCBEYXRlVXRpbHMgfSBmcm9tICdjb3JlJztcblxuY29uc3QgVEFHID0gJ0Jwa1BsYXllclN0YXRlTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclN0YXRlTWFuYWdlciB7XG4gICAgc3RhdGljIFBPTExJTkdfUEVSSU9EID0gNTAwO1xuXG4gICAgcGxheWVyQWRhcHRlcjtcbiAgICBsaXN0ZW5lcjtcblxuICAgIHBvbGxQZXJpb2Q7XG4gICAgcG9sbExhc3REYXRlO1xuICAgIHBvbGxQbGF5ZXJJbnRlcnZhbDtcblxuICAgIGxhc3RQb3NpdGlvbjtcbiAgICBleHBlY3RlZFBvc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyQWRhcHRlciwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgICAgIHRoaXMucG9sbFBlcmlvZCA9IFBsYXllclN0YXRlTWFuYWdlci5QT0xMSU5HX1BFUklPRDtcbiAgICAgICAgdGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLnBvbGxMYXN0RGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uICsgdGhpcy5wb2xsUGVyaW9kO1xuICAgICAgICB0aGlzLnBvbGxMYXN0RGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9sbFBsYXllckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFBsYXllckludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbFBsYXllclBvc2l0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMucG9sbFBlcmlvZCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9sbFBsYXllckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFBsYXllckludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMucG9sbFBsYXllckludGVydmFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcmNlUG9sbFBsYXllclBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSB0aGlzLmV4cGVjdGVkUG9zaXRpb24gLSB0aGlzLnBvbGxQZXJpb2QgKyAoRGF0ZS5ub3coKSAtIHRoaXMucG9sbExhc3REYXRlKTtcblxuICAgICAgICB0aGlzLnBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHBvbGxQbGF5ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAvLyBHZXQgbWluIGFuZCBtYXggcmFuZ2VzLlxuICAgICAgICBjb25zdCBtYXhSYW5nZSA9IHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiArICgyICogdGhpcy5wb2xsUGVyaW9kKTtcbiAgICAgICAgY29uc3QgbWluUmFuZ2UgPSB0aGlzLmV4cGVjdGVkUG9zaXRpb24gLSAoMiAqIHRoaXMucG9sbFBlcmlvZCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGltZXMgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiA8IG1pblJhbmdlIHx8IHRoaXMubGFzdFBvc2l0aW9uID4gbWF4UmFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMubGlzdGVuZXJbJ2hhbmRsZVNlZWsnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZWQgPSB0aGlzLmxpc3RlbmVyLmhhbmRsZVNlZWsodGhpcy5leHBlY3RlZFBvc2l0aW9uLCB0aGlzLmxhc3RQb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGlzIHNlZWtpbmcgKCcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZSh0aGlzLmV4cGVjdGVkUG9zaXRpb24pICsgJyB0byAnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUodGhpcy5sYXN0UG9zaXRpb24pICsgJyknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhwZWN0ZWQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb24gKyB0aGlzLnBvbGxQZXJpb2Q7XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5saXN0ZW5lclsnaGFuZGxlUG9sbCddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyWydoYW5kbGVQb2xsJ10oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9sbExhc3REYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbkJlZm9yZVNlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiU21hcnRMaWIiLCJMb2dnZXJNYW5hZ2VyIiwiUGxheWVyQWRhcHRlciIsIlBsYXllclN0YXRlTWFuYWdlciIsIlRBRyIsIl9wbGF5ZXIiLCJXZWFrTWFwIiwiX2xpc3RlbmVyIiwiRGFzaEpzUGxheWVyQWRhcHRlciIsIl9QbGF5ZXJBZGFwdGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndyaXRhYmxlIiwidmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwidHlwZSIsImVycm9yIiwiZSIsImNvZGUiLCJzZXRTdGF0dXNDb2RlIiwiZ2V0RXJyb3JDb2RlIiwic2V0UGxheWVyRXJyb3JDb2RlIiwic3RhcnRlZCIsInBsYXllclN0YXRlTWFuYWdlciIsInN0YXJ0Iiwibm90aWZ5Rmlyc3RJbWFnZSIsImJ1ZmZlcmluZyIsIm5vdGlmeVN0YWxsRW5kIiwiQlBTZXNzaW9uRW5kc05vcm1hbGx5Iiwic2Vla2luZyIsInBhdXNlZCIsIm5vdGlmeVJlc3VtZSIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImlzU2Vla2luZyIsIm5vdGlmeVBhdXNlIiwibWVkaWFUeXBlIiwibm90aWZ5U3RhbGxTdGFydCIsImN1cnJlbnRMYXllciIsImdldEJpdHJhdGUiLCJsYXN0TGF5ZXIiLCJub3RpZnlMYXllclN3aXRjaCIsInNlZWtCZWdpblBvc2l0aW9uIiwiZ2V0UG9zaXRpb25CZWZvcmVTZWVrIiwiZ2V0UG9zaXRpb24iLCJub3RpZnlTZWVrIiwiZ2V0TmFtZSIsImdldFZlcnNpb24iLCJsaWJyYXJ5IiwiVmVyc2lvbiIsInN1YnN0cmluZyIsInVuZGVmaW5lZCIsImlzUmVhZHkiLCJ2aWRlb0luZGV4IiwiZ2V0UXVhbGl0eUZvciIsImF1ZGlvSW5kZXgiLCJ2aWRlb0JpdHJhdGUiLCJnZXRCaXRyYXRlSW5mb0xpc3RGb3IiLCJhdWRpb0JpdHJhdGUiLCJiaXRyYXRlIiwiTWF0aCIsInJvdW5kIiwiaXNEeW5hbWljIiwiaXNOYU4iLCJ0aW1lQXNVVEMiLCJwb3NpdGlvbiIsInRpbWUiLCJnZXREdXJhdGlvbiIsImR1cmF0aW9uIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiZXJyb3JzIiwiTWVkaWFQbGF5ZXIiLCJCUEZvcm1hdE5vdFN1cHBvcnRlZEVycm9yIiwiQlBEZWNvZGluZ0Vycm9yIiwiQlBBY2Nlc3NSaWdodEVycm9yIiwiQlBOZXR3b3JraW5nRXJyb3IiLCJCUFVuc3BlY2lmaWVkRXJyb3IiLCJpbml0U2Vzc2lvblBsYXllck9iamVjdHMiLCJzdG9wIiwicGxheWVyTGlzdGVuZXIiLCJiaW5kIiwib24iLCJldmVudHMiLCJyZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMiLCJvZmYiLCJzZXRQbGF5YmFja1JhdGUiLCJhdHRhY2hQbGF5ZXIiLCJwbGF5ZXIiLCJsaXN0ZW5lciIsImNoZWNrUGxheWVyIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiZGV0YWNoUGxheWVyIiwiYXR0YWNoTGlicmFyeSIsImQiLCJ3aW5kb3ciLCJkYXNoanMiLCJkZWZhdWx0IiwiQ29yZUVuZ2luZSIsImRhc2hqc01vZHVsZSIsIkRhdGVVdGlscyIsInBsYXllckFkYXB0ZXIiLCJwb2xsUGVyaW9kIiwiUE9MTElOR19QRVJJT0QiLCJwb2xsUGxheWVySW50ZXJ2YWwiLCJleHBlY3RlZFBvc2l0aW9uIiwicG9sbExhc3REYXRlIiwibGFzdFBvc2l0aW9uIiwiRGF0ZSIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBvbGxQbGF5ZXJQb3NpdGlvbiIsImZvcmNlUG9sbFBsYXllclBvc2l0aW9uIiwibWF4UmFuZ2UiLCJtaW5SYW5nZSIsImhhbmRsZWQiLCJoYW5kbGVTZWVrIiwiZm9ybWF0VGltZSJdLCJzb3VyY2VSb290IjoiIn0=