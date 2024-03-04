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
    key: "getMediaElement",
    value: function getMediaElement() {
      return _classPrivateFieldGet(this, _player).getVideoElement();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBd0Q7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vcGxheWVycy9kYXNoanMvRGFzaEpzUGxheWVyQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3BsYXllcnMvZGFzaGpzL2luZGV4LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjL2VuZ2luZS9wbGF5ZXIvUGxheWVyU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYXNoanNTbWFydExpYk1vZHVsZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXNoanNTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXNoanNTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKChmdW5jdGlvbigpIHsgcmV0dXJuICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogZ2xvYmFsKX0pKCksIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7IFNtYXJ0TGliLCBMb2dnZXJNYW5hZ2VyIH0gZnJvbSAnY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXJBZGFwdGVyIH0gZnJvbSAnYW5hbHl0aWNzJztcbmltcG9ydCBQbGF5ZXJTdGF0ZU1hbmFnZXIgZnJvbSAnLi4vLi4vc3JjL2VuZ2luZS9wbGF5ZXIvUGxheWVyU3RhdGVNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0Rhc2hKc1BsYXllckFkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoSnNQbGF5ZXJBZGFwdGVyIGV4dGVuZHMgUGxheWVyQWRhcHRlciB7XG4gICAgc3RhdGljIGxpYnJhcnk7XG5cbiAgICAjcGxheWVyO1xuICAgICNsaXN0ZW5lcjtcblxuICAgIHN0YXJ0ZWQ7XG4gICAgcGF1c2VkO1xuICAgIGJ1ZmZlcmluZztcbiAgICBzZWVraW5nO1xuICAgIHNlZWtCZWdpblBvc2l0aW9uO1xuICAgIGxhc3RMYXllcjtcblxuICAgIHBsYXllclN0YXRlTWFuYWdlcjtcbiAgICBwbGF5ZXJMaXN0ZW5lcjtcblxuICAgIHBvc2l0aW9uO1xuXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdlcnJvcicgJiYgdHlwZW9mIGV2ZW50LmVycm9yID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1BsYXllciBlbmNvdW50ZXJlZCBhbiBlcnJvciA6ICcgKyBldmVudC5lcnJvci5jb2RlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQ29kZSh0aGlzLmdldEVycm9yQ29kZShldmVudC5lcnJvcikpO1xuICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJFcnJvckNvZGUoZXZlbnQuZXJyb3IuY29kZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdwbGF5YmFja1BsYXlpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5Rmlyc3RJbWFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3BsYXliYWNrUGxheWluZycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhbGxFbmQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQ29kZShTbWFydExpYi5CUFNlc3Npb25FbmRzTm9ybWFsbHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWVraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5UmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdwbGF5YmFja1BhdXNlZCcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQgJiYgKCF0aGlzLiNwbGF5ZXIuaXNTZWVraW5nKCkgfHwgdGhpcy5zZWVraW5nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAncGxheWJhY2tTdGFydGVkJykge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVJlc3VtZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3BsYXliYWNrV2FpdGluZycgfHwgKGV2ZW50LnR5cGUgPT09ICdidWZmZXJTdGFsbGVkJyAmJiBldmVudC5tZWRpYVR5cGUgPT09ICd2aWRlbycpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhbGxTdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ2J1ZmZlckxvYWRlZCcgJiYgZXZlbnQubWVkaWFUeXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFsbEVuZCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNDb2RlKFNtYXJ0TGliLkJQU2Vzc2lvbkVuZHNOb3JtYWxseSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAncXVhbGl0eUNoYW5nZVJlbmRlcmVkJykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudExheWVyID0gdGhpcy5nZXRCaXRyYXRlKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudExheWVyICE9PSB0aGlzLmxhc3RMYXllcikge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdExheWVyID0gY3VycmVudExheWVyO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlMYXllclN3aXRjaChjdXJyZW50TGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdwbGF5YmFja1NlZWtlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vla2luZyA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3BsYXliYWNrU2Vla2luZycpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vla0JlZ2luUG9zaXRpb24gPSB0aGlzLnBsYXllclN0YXRlTWFuYWdlci5nZXRQb3NpdGlvbkJlZm9yZVNlZWsoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlZWtCZWdpblBvc2l0aW9uICE9PSB0aGlzLmdldFBvc2l0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5U2Vlayh0aGlzLnNlZWtCZWdpblBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdEYXNoLmpzJztcbiAgICB9XG5cbiAgICBnZXRWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5LlZlcnNpb24uc3Vic3RyaW5nKDAsIDMyKTtcbiAgICB9XG5cbiAgICBnZXRNZWRpYUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXIuZ2V0VmlkZW9FbGVtZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0Qml0cmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuI3BsYXllci5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSW5kZXggPSB0aGlzLiNwbGF5ZXIuZ2V0UXVhbGl0eUZvcigndmlkZW8nKTtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvSW5kZXggPSB0aGlzLiNwbGF5ZXIuZ2V0UXVhbGl0eUZvcignYXVkaW8nKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvQml0cmF0ZSA9IHRoaXMuI3BsYXllci5nZXRCaXRyYXRlSW5mb0xpc3RGb3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBjb25zdCBhdWRpb0JpdHJhdGUgPSB0aGlzLiNwbGF5ZXIuZ2V0Qml0cmF0ZUluZm9MaXN0Rm9yKCdhdWRpbycpO1xuICAgICAgICAgICAgbGV0IGJpdHJhdGUgPSAwO1xuXG4gICAgICAgICAgICBpZiAodmlkZW9JbmRleCA8IHZpZGVvQml0cmF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBiaXRyYXRlID0gTWF0aC5yb3VuZCh2aWRlb0JpdHJhdGVbdmlkZW9JbmRleF0uYml0cmF0ZSAvIDEwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXVkaW9JbmRleCA8IGF1ZGlvQml0cmF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBiaXRyYXRlICs9IE1hdGgucm91bmQoYXVkaW9CaXRyYXRlW2F1ZGlvSW5kZXhdLmJpdHJhdGUgLyAxMDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJpdHJhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jcGxheWVyLmlzRHluYW1pYygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLiNwbGF5ZXIudGltZUFzVVRDKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBNYXRoLnJvdW5kKHRoaXMuI3BsYXllci50aW1lQXNVVEMoKSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy4jcGxheWVyLnRpbWUoKSAqIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0RHVyYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXIgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy4jcGxheWVyLmlzRHluYW1pYygpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLiNwbGF5ZXIuZHVyYXRpb24oKSAqIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2FkVHJhY2tpbmcnOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RXJyb3JDb2RlKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5lcnJvcnM7XG5cbiAgICAgICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBhIG1hbmlmZXN0IHBhcnNpbmcgZXJyb3Igb2NjdXJzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydNQU5JRkVTVF9MT0FERVJfUEFSU0lOR19GQUlMVVJFX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBGb3JtYXROb3RTdXBwb3J0ZWRFcnJvcjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYSBtYW5pZmVzdCBsb2FkaW5nIGVycm9yIG9jY3Vyc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snTUFOSUZFU1RfTE9BREVSX0xPQURJTkdfRkFJTFVSRV9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBhIHhsaW5rIGxvYWRpbmcgZXJyb3Igb2NjdXJzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydYTElOS19MT0FERVJfTE9BRElOR19GQUlMVVJFX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIHRoZSB1cGRhdGUgb2Ygc2VnbWVudHMgbGlzdCBoYXMgZmFpbGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydTRUdNRU5UU19VUERBVEVfRkFJTEVEX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydTRUdNRU5UU19VTkFWQUlMQUJMRV9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snU0VHTUVOVF9CQVNFX0xPQURFUl9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snVElNRV9TWU5DX0ZBSUxFRF9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snRlJBR01FTlRfTE9BREVSX0xPQURJTkdfRkFJTFVSRV9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snRlJBR01FTlRfTE9BREVSX05VTExfUkVRVUVTVF9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snVVJMX1JFU09MVVRJT05fRkFJTEVEX0dFTkVSSUNfRVJST1JfQ09ERSddOlxuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0FQUEVORF9FUlJPUl9DT0RFJ106XG4gICAgICAgICAgICBjYXNlIGVycm9yc1snUkVNT1ZFX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydEQVRBX1VQREFURV9GQUlMRURfRVJST1JfQ09ERSddOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUERlY29kaW5nRXJyb3I7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIE1lZGlhU291cmNlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0NBUEFCSUxJVFlfTUVESUFTT1VSQ0VfRVJST1JfQ09ERSddOlxuICAgICAgICAgICAgICAgIHJldHVybiBTbWFydExpYi5CUEZvcm1hdE5vdFN1cHBvcnRlZEVycm9yO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBQcm90ZWN0ZWQgY29udGVudHMgYXJlIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0NBUEFCSUxJVFlfTUVESUFLRVlTX0VSUk9SX0NPREUnXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBBY2Nlc3NSaWdodEVycm9yO1xuXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snRE9XTkxPQURfRVJST1JfSURfTUFOSUZFU1RfQ09ERSddOlxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqQGRlcHJlY2F0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0RPV05MT0FEX0VSUk9SX0lEX1NJRFhfQ09ERSddOlxuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0RPV05MT0FEX0VSUk9SX0lEX0NPTlRFTlRfQ09ERSddOlxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqQGRlcHJlY2F0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ0RPV05MT0FEX0VSUk9SX0lEX0lOSVRJQUxJWkFUSU9OX0NPREUnXTpcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKkBkZXByZWNhdGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydET1dOTE9BRF9FUlJPUl9JRF9YTElOS19DT0RFJ106XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQTmV0d29ya2luZ0Vycm9yO1xuXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snTUFOSUZFU1RfRVJST1JfSURfQ09ERUNfQ09ERSddOlxuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ01BTklGRVNUX0VSUk9SX0lEX1BBUlNFX0NPREUnXTpcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIG5vIHN0cmVhbSAocGVyaW9kKSBoYXMgYmVlbiBkZXRlY3RlZCBpbiB0aGUgbWFuaWZlc3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2FzZSBlcnJvcnNbJ01BTklGRVNUX0VSUk9SX0lEX05PU1RSRUFNU19DT0RFJ106XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBzb21ldGhpbmcgd3JvbmcgaGFzIGFwcGVuZCBkdXJpbmcgc3VidGl0bGVzIHBhcnNpbmcgKFRUTUwgb3IgVlRUKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snVElNRURfVEVYVF9FUlJPUl9JRF9QQVJTRV9DT0RFJ106XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQRGVjb2RpbmdFcnJvcjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYSAnbXV4ZWQnIG1lZGlhIHR5cGUgaGFzIGJlZW4gZGV0ZWN0ZWQgaW4gdGhlIG1hbmlmZXN0LiBUaGlzIHR5cGUgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjYXNlIGVycm9yc1snTUFOSUZFU1RfRVJST1JfSURfTVVMVElQTEVYRURfQ09ERSddOlxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYSBtZWRpYSBzb3VyY2UgdHlwZSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhc2UgZXJyb3JzWydNRURJQVNPVVJDRV9UWVBFX1VOU1VQUE9SVEVEX0NPREUnXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU21hcnRMaWIuQlBGb3JtYXROb3RTdXBwb3J0ZWRFcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5jb2RlID49IGVycm9yc1snTUVESUFfS0VZRVJSX0NPREUnXSkge1xuICAgICAgICAgICAgcmV0dXJuIFNtYXJ0TGliLkJQQWNjZXNzUmlnaHRFcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbWFydExpYi5CUFVuc3BlY2lmaWVkRXJyb3I7XG4gICAgfVxuXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWVraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2Vla0JlZ2luUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmxhc3RMYXllciA9IDA7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTdGF0ZU1hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyID0gbmV3IFBsYXllclN0YXRlTWFuYWdlcih0aGlzLCB0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJMaXN0ZW5lciA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ1BMQVlCQUNLX1BMQVlJTkcnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub24oRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5Lk1lZGlhUGxheWVyLmV2ZW50c1snUExBWUJBQ0tfUEFVU0VEJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0JVRkZFUl9FTVBUWSddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydRVUFMSVRZX0NIQU5HRV9SRU5ERVJFRCddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydFUlJPUiddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19XQUlUSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0JVRkZFUl9MT0FERUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub24oRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5Lk1lZGlhUGxheWVyLmV2ZW50c1snUExBWUJBQ0tfU1RBUlRFRCddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vbihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TRUVLSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9uKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ1BMQVlCQUNLX1NFRUtFRCddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cygpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVNYW5hZ2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuI3BsYXllciAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGxheWVyTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19QTEFZSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19QQVVTRUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub2ZmKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0JVRkZFUl9FTVBUWSddLCB0aGlzLnBsYXllckxpc3RlbmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5vZmYoRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5Lk1lZGlhUGxheWVyLmV2ZW50c1snUVVBTElUWV9DSEFOR0VfUkVOREVSRUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIub2ZmKERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeS5NZWRpYVBsYXllci5ldmVudHNbJ0VSUk9SJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19XQUlUSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydCVUZGRVJfTE9BREVEJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TVEFSVEVEJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TRUVLSU5HJ10sIHRoaXMucGxheWVyTGlzdGVuZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyLm9mZihEYXNoSnNQbGF5ZXJBZGFwdGVyLmxpYnJhcnkuTWVkaWFQbGF5ZXIuZXZlbnRzWydQTEFZQkFDS19TRUVLRUQnXSwgdGhpcy5wbGF5ZXJMaXN0ZW5lciwgdGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuI3BsYXllci5zZXRQbGF5YmFja1JhdGUoMS4wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhdHRhY2hMaWJyYXJ5KGxpYnJhcnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaWJyYXJ5WydNZWRpYVBsYXllciddICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbGlicmFyeVsnVmVyc2lvbiddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0Rhc2guanMgbGlicmFyeSBhdHRhY2hlZCcpO1xuICAgICAgICAgICAgRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5ID0gbGlicmFyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdUcnkgdG8gYXR0YWNoIGEgbGlicmFyeSwgYnV0IGl0IGlzIG5vdCByZWNvZ25pemVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICAvLyBEeW5hbWljIGxvYWQgcGxheWVyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZGFzaGpzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeSA9IHdpbmRvdy5kYXNoanM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZW9mIERhc2hKc1BsYXllckFkYXB0ZXIubGlicmFyeSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsYXllclsnZ2V0RGFzaE1ldHJpY3MnXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgdHlwZW9mIHBsYXllclsnZ2V0Q2xhc3NOYW1lJ10gPT09ICdmdW5jdGlvbicgJiYgcGxheWVyWydnZXRDbGFzc05hbWUnXSgpID09PSAnTWVkaWFQbGF5ZXInO1xuICAgIH1cblxuICAgIGF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChEYXNoSnNQbGF5ZXJBZGFwdGVyLmNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpKSB7XG4gICAgICAgICAgICBpZiAoRGFzaEpzUGxheWVyQWRhcHRlci5saWJyYXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnUGxheWVyIGxpYnJhcnkgbm90IGF0dGFjaGVkIHRvIHRoZSBhZGFwdGVyLCBwbGVhc2UgY2FsbCBEYXNoSnNQbGF5ZXJBZGFwdGVyLmF0dGFjaExpYnJhcnkoZGFzaGpzKSBiZWZvcmUgYXR0YWNoUGxheWVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI3BsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIHRoaXMuI2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGFjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMoKTtcblxuICAgICAgICB0aGlzLiNwbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuI2xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCBEYXNoSnNQbGF5ZXJBZGFwdGVyIGZyb20gJy4vRGFzaEpzUGxheWVyQWRhcHRlcic7XG5cbmltcG9ydCBDb3JlRW5naW5lIGZyb20gJy4uLy4uL3NyYy9lbmdpbmUvQ29yZUVuZ2luZSc7XG5Db3JlRW5naW5lLmRhc2hqc01vZHVsZSA9IHtcbiAgICBEYXNoSnNQbGF5ZXJBZGFwdGVyXG59O1xuXG5leHBvcnQge1xuICAgIERhc2hKc1BsYXllckFkYXB0ZXJcbn07XG4iLCJpbXBvcnQgeyBMb2dnZXJNYW5hZ2VyLCBEYXRlVXRpbHMgfSBmcm9tICdjb3JlJztcblxuY29uc3QgVEFHID0gJ0Jwa1BsYXllclN0YXRlTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclN0YXRlTWFuYWdlciB7XG4gICAgc3RhdGljIFBPTExJTkdfUEVSSU9EID0gNTAwO1xuXG4gICAgcGxheWVyQWRhcHRlcjtcbiAgICBsaXN0ZW5lcjtcblxuICAgIHBvbGxQZXJpb2Q7XG4gICAgcG9sbExhc3REYXRlO1xuICAgIHBvbGxQbGF5ZXJJbnRlcnZhbDtcblxuICAgIGxhc3RQb3NpdGlvbjtcbiAgICBleHBlY3RlZFBvc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyQWRhcHRlciwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgICAgIHRoaXMucG9sbFBlcmlvZCA9IFBsYXllclN0YXRlTWFuYWdlci5QT0xMSU5HX1BFUklPRDtcbiAgICAgICAgdGhpcy5wb2xsUGxheWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLnBvbGxMYXN0RGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uICsgdGhpcy5wb2xsUGVyaW9kO1xuICAgICAgICB0aGlzLnBvbGxMYXN0RGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9sbFBsYXllckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFBsYXllckludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvbGxQbGF5ZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbFBsYXllclBvc2l0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMucG9sbFBlcmlvZCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9sbFBsYXllckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFBsYXllckludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMucG9sbFBsYXllckludGVydmFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcmNlUG9sbFBsYXllclBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLmV4cGVjdGVkUG9zaXRpb24gPSB0aGlzLmV4cGVjdGVkUG9zaXRpb24gLSB0aGlzLnBvbGxQZXJpb2QgKyAoRGF0ZS5ub3coKSAtIHRoaXMucG9sbExhc3REYXRlKTtcblxuICAgICAgICB0aGlzLnBvbGxQbGF5ZXJQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHBvbGxQbGF5ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAvLyBHZXQgbWluIGFuZCBtYXggcmFuZ2VzLlxuICAgICAgICBjb25zdCBtYXhSYW5nZSA9IHRoaXMuZXhwZWN0ZWRQb3NpdGlvbiArICgyICogdGhpcy5wb2xsUGVyaW9kKTtcbiAgICAgICAgY29uc3QgbWluUmFuZ2UgPSB0aGlzLmV4cGVjdGVkUG9zaXRpb24gLSAoMiAqIHRoaXMucG9sbFBlcmlvZCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGltZXMgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiA8IG1pblJhbmdlIHx8IHRoaXMubGFzdFBvc2l0aW9uID4gbWF4UmFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMubGlzdGVuZXJbJ2hhbmRsZVNlZWsnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZWQgPSB0aGlzLmxpc3RlbmVyLmhhbmRsZVNlZWsodGhpcy5leHBlY3RlZFBvc2l0aW9uLCB0aGlzLmxhc3RQb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGlzIHNlZWtpbmcgKCcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZSh0aGlzLmV4cGVjdGVkUG9zaXRpb24pICsgJyB0byAnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUodGhpcy5sYXN0UG9zaXRpb24pICsgJyknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhwZWN0ZWQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb24gKyB0aGlzLnBvbGxQZXJpb2Q7XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5saXN0ZW5lclsnaGFuZGxlUG9sbCddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyWydoYW5kbGVQb2xsJ10oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9sbExhc3REYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbkJlZm9yZVNlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiU21hcnRMaWIiLCJMb2dnZXJNYW5hZ2VyIiwiUGxheWVyQWRhcHRlciIsIlBsYXllclN0YXRlTWFuYWdlciIsIlRBRyIsIl9wbGF5ZXIiLCJXZWFrTWFwIiwiX2xpc3RlbmVyIiwiRGFzaEpzUGxheWVyQWRhcHRlciIsIl9QbGF5ZXJBZGFwdGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndyaXRhYmxlIiwidmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwidHlwZSIsImVycm9yIiwiZSIsImNvZGUiLCJzZXRTdGF0dXNDb2RlIiwiZ2V0RXJyb3JDb2RlIiwic2V0UGxheWVyRXJyb3JDb2RlIiwic3RhcnRlZCIsInBsYXllclN0YXRlTWFuYWdlciIsInN0YXJ0Iiwibm90aWZ5Rmlyc3RJbWFnZSIsImJ1ZmZlcmluZyIsIm5vdGlmeVN0YWxsRW5kIiwiQlBTZXNzaW9uRW5kc05vcm1hbGx5Iiwic2Vla2luZyIsInBhdXNlZCIsIm5vdGlmeVJlc3VtZSIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImlzU2Vla2luZyIsIm5vdGlmeVBhdXNlIiwibWVkaWFUeXBlIiwibm90aWZ5U3RhbGxTdGFydCIsImN1cnJlbnRMYXllciIsImdldEJpdHJhdGUiLCJsYXN0TGF5ZXIiLCJub3RpZnlMYXllclN3aXRjaCIsInNlZWtCZWdpblBvc2l0aW9uIiwiZ2V0UG9zaXRpb25CZWZvcmVTZWVrIiwiZ2V0UG9zaXRpb24iLCJub3RpZnlTZWVrIiwiZ2V0TmFtZSIsImdldFZlcnNpb24iLCJsaWJyYXJ5IiwiVmVyc2lvbiIsInN1YnN0cmluZyIsImdldE1lZGlhRWxlbWVudCIsImdldFZpZGVvRWxlbWVudCIsInVuZGVmaW5lZCIsImlzUmVhZHkiLCJ2aWRlb0luZGV4IiwiZ2V0UXVhbGl0eUZvciIsImF1ZGlvSW5kZXgiLCJ2aWRlb0JpdHJhdGUiLCJnZXRCaXRyYXRlSW5mb0xpc3RGb3IiLCJhdWRpb0JpdHJhdGUiLCJiaXRyYXRlIiwiTWF0aCIsInJvdW5kIiwiaXNEeW5hbWljIiwiaXNOYU4iLCJ0aW1lQXNVVEMiLCJwb3NpdGlvbiIsInRpbWUiLCJnZXREdXJhdGlvbiIsImR1cmF0aW9uIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiZXJyb3JzIiwiTWVkaWFQbGF5ZXIiLCJCUEZvcm1hdE5vdFN1cHBvcnRlZEVycm9yIiwiQlBEZWNvZGluZ0Vycm9yIiwiQlBBY2Nlc3NSaWdodEVycm9yIiwiQlBOZXR3b3JraW5nRXJyb3IiLCJCUFVuc3BlY2lmaWVkRXJyb3IiLCJpbml0U2Vzc2lvblBsYXllck9iamVjdHMiLCJzdG9wIiwicGxheWVyTGlzdGVuZXIiLCJiaW5kIiwib24iLCJldmVudHMiLCJyZWxlYXNlU2Vzc2lvblBsYXllck9iamVjdHMiLCJvZmYiLCJzZXRQbGF5YmFja1JhdGUiLCJhdHRhY2hQbGF5ZXIiLCJwbGF5ZXIiLCJsaXN0ZW5lciIsImNoZWNrUGxheWVyIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiZGV0YWNoUGxheWVyIiwiYXR0YWNoTGlicmFyeSIsImQiLCJ3aW5kb3ciLCJkYXNoanMiLCJkZWZhdWx0IiwiQ29yZUVuZ2luZSIsImRhc2hqc01vZHVsZSIsIkRhdGVVdGlscyIsInBsYXllckFkYXB0ZXIiLCJwb2xsUGVyaW9kIiwiUE9MTElOR19QRVJJT0QiLCJwb2xsUGxheWVySW50ZXJ2YWwiLCJleHBlY3RlZFBvc2l0aW9uIiwicG9sbExhc3REYXRlIiwibGFzdFBvc2l0aW9uIiwiRGF0ZSIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBvbGxQbGF5ZXJQb3NpdGlvbiIsImZvcmNlUG9sbFBsYXllclBvc2l0aW9uIiwibWF4UmFuZ2UiLCJtaW5SYW5nZSIsImhhbmRsZWQiLCJoYW5kbGVTZWVrIiwiZm9ybWF0VGltZSJdLCJzb3VyY2VSb290IjoiIn0=