"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("adSmartLibModule", [], factory);
	else if(typeof exports === 'object')
		exports["adSmartLibModule"] = factory();
	else
		root["adSmartLibModule"] = factory();
})((function() { return (typeof self !== 'undefined' ? self : global)})(), function() {
return ((function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] = (function() { return (typeof self !== 'undefined' ? self : global)})()["webpackChunkSmartLibModule"] || []).push([["ad"],{

/***/ "./src_core/ad/metrics/AdMetrics.js":
/*!******************************************!*\
  !*** ./src_core/ad/metrics/AdMetrics.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdMetrics: function() { return /* binding */ AdMetrics; },
/* harmony export */   AdMetricsBuilder: function() { return /* binding */ AdMetricsBuilder; },
/* harmony export */   TAG: function() { return /* binding */ TAG; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TAG = 'BpkAdMetrics';
var AdMetrics = /*#__PURE__*/function () {
  function AdMetrics() {
    var metrics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    _classCallCheck(this, AdMetrics);
    _defineProperty(this, "adSkippable", void 0);
    _defineProperty(this, "adSkipped", void 0);
    _defineProperty(this, "adProgress", void 0);
    _defineProperty(this, "adDuration", void 0);
    _defineProperty(this, "stallsNumber", void 0);
    _defineProperty(this, "stallsDuration", void 0);
    _defineProperty(this, "layerSwitchesNumber", void 0);
    _defineProperty(this, "averageBitrate", void 0);
    _defineProperty(this, "sessionToken", void 0);
    _defineProperty(this, "creativeId", void 0);
    _defineProperty(this, "adId", void 0);
    if (metrics === undefined) {
      this.adSkippable = false;
      this.adSkipped = false;
      this.adProgress = -1;
      this.adDuration = 0;
      this.stallsNumber = 0;
      this.stallsDuration = 0;
      this.layerSwitchesNumber = 0;
      this.averageBitrate = 0;
      this.sessionToken = '';
      this.creativeId = '';
      this.adId = '';
    } else {
      this.adSkippable = metrics.adSkippable;
      this.adSkipped = metrics.adSkipped;
      this.adProgress = metrics.adProgress;
      this.adDuration = metrics.adDuration;
      this.stallsNumber = metrics.stallsNumber;
      this.stallsDuration = metrics.stallsDuration;
      this.layerSwitchesNumber = metrics.layerSwitchesNumber;
      this.averageBitrate = metrics.averageBitrate;
      this.sessionToken = metrics.sessionToken;
      this.creativeId = metrics.creativeId;
      this.adId = metrics.adId;
    }
  }
  _createClass(AdMetrics, [{
    key: "toString",
    value: function toString() {
      return '\n{ adSkippable=' + this.adSkippable + '\n  adSkipped=' + this.adSkipped + '\n  adProgress=' + this.adProgress + '\n  adDuration=' + this.adDuration + '\n  stallsNumber=' + this.stallsNumber + '\n  stallsDuration=' + this.stallsDuration + '\n  layerSwitchesNumber=' + this.layerSwitchesNumber + '\n  averageBitrate=' + this.averageBitrate + "\n  sessionToken='" + this.sessionToken + '\'' + "\n  creativeId='" + this.creativeId + '\'' + "\n  adId='" + this.adId + "\' }";
    }
  }], [{
    key: "merge",
    value: function merge(list) {
      if (list !== undefined && list.length > 0) {
        var mergedMetrics = new AdMetrics();
        var lastMetrics = list[list.length - 1];
        mergedMetrics.adSkippable = lastMetrics.adSkippable;
        mergedMetrics.adSkipped = lastMetrics.adSkipped;
        mergedMetrics.adProgress = lastMetrics.adProgress;
        mergedMetrics.sessionToken = lastMetrics.sessionToken;
        mergedMetrics.creativeId = lastMetrics.creativeId;
        mergedMetrics.adId = lastMetrics.adId;
        var layerPerDuration = 0;
        var totalDuration = 0;
        for (var i = 0; i < list.length; i++) {
          var adMetrics = list[i];
          mergedMetrics.adDuration += adMetrics.adDuration;
          mergedMetrics.stallsNumber += adMetrics.stallsNumber;
          mergedMetrics.stallsDuration += adMetrics.stallsDuration;
          mergedMetrics.layerSwitchesNumber += adMetrics.layerSwitchesNumber;
          layerPerDuration += adMetrics.averageBitrate * adMetrics.adDuration;
          totalDuration += adMetrics.adDuration;
        }
        if (totalDuration !== 0) {
          mergedMetrics.averageBitrate = Math.round(layerPerDuration / totalDuration);
        }
        return mergedMetrics;
      }
      return undefined;
    }
  }]);
  return AdMetrics;
}();
var AdMetricsBuilder = /*#__PURE__*/function () {
  function AdMetricsBuilder() {
    var adMetrics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var timeSpentPerLayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var quartiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    _classCallCheck(this, AdMetricsBuilder);
    _defineProperty(this, "adMetrics", void 0);
    _defineProperty(this, "timeSpentPerLayer", void 0);
    _defineProperty(this, "quartiles", void 0);
    if (adMetrics === undefined && timeSpentPerLayer === undefined && quartiles === undefined) {
      this.timeSpentPerLayer = {};
      this.quartiles = {};
      this.reset();
    } else {
      this.adMetrics = adMetrics;
      this.timeSpentPerLayer = timeSpentPerLayer;
      this.quartiles = quartiles;
    }
  }
  _createClass(AdMetricsBuilder, [{
    key: "import",
    value: function _import(adMetrics) {
      if (adMetrics !== undefined) {
        this.adMetrics = adMetrics;
        this.timeSpentPerLayer = {};
        this.timeSpentPerLayer[adMetrics.averageBitrate] = adMetrics.adDuration;
        this.quartiles = {};
        for (var i = 0; i <= adMetrics.adProgress / 25; i++) {
          this.quartiles[i * 25] = true;
        }
      }
      return this;
    }
  }, {
    key: "setAdSkippable",
    value: function setAdSkippable(value) {
      this.adMetrics.adSkippable = value;
      return this;
    }
  }, {
    key: "setAdSkipped",
    value: function setAdSkipped(value) {
      this.adMetrics.adSkipped = value;
      return this;
    }
  }, {
    key: "addProgress",
    value: function addProgress(value) {
      this.quartiles[value] = true;
      this.adMetrics.adProgress = Object.keys(this.quartiles).length * 25 - 25;

      // console.log('PROGRESS', this.adMetrics.adProgress, this.quartiles);

      return this;
    }
  }, {
    key: "setSessionToken",
    value: function setSessionToken(value) {
      this.adMetrics.sessionToken = value;
      return this;
    }
  }, {
    key: "setCreativeId",
    value: function setCreativeId(value) {
      this.adMetrics.creativeId = value;
      return this;
    }
  }, {
    key: "setAdId",
    value: function setAdId(value) {
      this.adMetrics.adId = value;
      return this;
    }
  }, {
    key: "addTimeSpentPerLayer",
    value: function addTimeSpentPerLayer(bitrate, duration) {
      bitrate = Math.round(bitrate);
      if (bitrate > 0) {
        var timeSpentOnLayer = this.timeSpentPerLayer[bitrate];
        if (timeSpentOnLayer !== undefined) {
          this.timeSpentPerLayer[bitrate] += duration;
        } else {
          this.timeSpentPerLayer[bitrate] = duration;
        }
      }
      return this;
    }
  }, {
    key: "addLayerSwitch",
    value: function addLayerSwitch() {
      this.adMetrics.layerSwitchesNumber++;
      return this;
    }
  }, {
    key: "addStall",
    value: function addStall(duration) {
      this.adMetrics.stallsNumber++;
      this.adMetrics.stallsDuration += duration;
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.adMetrics = new AdMetrics();
      this.timeSpentPerLayer = {};
      this.quartiles = {};
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new AdMetricsBuilder(new AdMetrics(this.adMetrics), Object.assign({}, this.timeSpentPerLayer), Object.assign({}, this.quartiles));
    }
  }, {
    key: "build",
    value: function build() {
      var layerPerDuration = 0;
      var totalDuration = 0;
      for (var bitrate in this.timeSpentPerLayer) {
        var duration = this.timeSpentPerLayer[bitrate];
        layerPerDuration += bitrate * duration;
        totalDuration += duration;
      }
      if (totalDuration !== 0) {
        this.adMetrics.averageBitrate = Math.round(layerPerDuration / totalDuration);
      }
      this.adMetrics.adDuration = totalDuration;
      return this.adMetrics;
    }
  }]);
  return AdMetricsBuilder;
}();

/***/ }),

/***/ "./src_core/ad/metrics/AdMetricsManager.js":
/*!*************************************************!*\
  !*** ./src_core/ad/metrics/AdMetricsManager.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdMetricsManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _AdMetrics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdMetrics */ "./src_core/ad/metrics/AdMetrics.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../SmartLib */ "./src_core/SmartLib.js");
/* harmony import */ var _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tracking/AdTrackingManager */ "./src_core/ad/tracking/AdTrackingManager.js");









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var TAG = 'BpkAdMetricsMgr';
var AdMetricsManager = /*#__PURE__*/function () {
  function AdMetricsManager(handler) {
    _classCallCheck(this, AdMetricsManager);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "timeline", void 0);
    _defineProperty(this, "builder", void 0);
    _defineProperty(this, "adMetrics", void 0);
    _defineProperty(this, "firstImage", void 0);
    _defineProperty(this, "lastLayerBitrate", void 0);
    _defineProperty(this, "adBreakPlaying", void 0);
    _defineProperty(this, "adPlaying", void 0);
    _defineProperty(this, "adSkipped", void 0);
    _defineProperty(this, "adLastLayerSwitchDate", void 0);
    _defineProperty(this, "adLastBufferingStartDate", void 0);
    this.handler = handler;
    this.timeline = this.handler.sessionReport.timeline;
    this.builder = new _AdMetrics__WEBPACK_IMPORTED_MODULE_9__.AdMetricsBuilder();
    this.adMetrics = {};
  }
  _createClass(AdMetricsManager, [{
    key: "onStart",
    value: function onStart() {
      // Reset variables
      this.adMetrics = {};
      this.adLastLayerSwitchDate = 0;
      this.firstImage = false;
      this.lastLayerBitrate = 0;
      this.adLastBufferingStartDate = -1;
      this.adBreakPlaying = false;
      this.adPlaying = false;
      this.adSkipped = false;
    }
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, position) {
      this.lastLayerBitrate = bitrate;
      this.adLastLayerSwitchDate = Date.now();
      this.firstImage = true;
    }
  }, {
    key: "onLayerSwitch",
    value: function onLayerSwitch(bitrate) {
      if (this.adBreakPlaying && this.firstImage) {
        this.builder.addTimeSpentPerLayer(this.lastLayerBitrate, Date.now() - this.adLastLayerSwitchDate);
        this.adLastLayerSwitchDate = Date.now();
        if (this.lastLayerBitrate !== bitrate) {
          this.builder.addLayerSwitch();
        }
      }
      this.lastLayerBitrate = bitrate;
    }
  }, {
    key: "onBufferingStart",
    value: function onBufferingStart() {
      if (this.adBreakPlaying) {
        // Start stall timer
        this.adLastBufferingStartDate = Date.now();
      }
    }
  }, {
    key: "onStallEnd",
    value: function onStallEnd() {
      if (this.adBreakPlaying && this.adLastBufferingStartDate >= 0) {
        // Add stall
        this.builder.addStall(Date.now() - this.adLastBufferingStartDate);
      }
      this.adLastBufferingStartDate = -1;
    }
  }, {
    key: "onRebufferingEnd",
    value: function onRebufferingEnd() {
      this.adLastBufferingStartDate = -1;
    }
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      if (this.adBreakPlaying) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Ad seeked from ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__["default"].formatTime(start) + ' to ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__["default"].formatTime(end));
        if (Math.abs(end - start) < _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_13__["default"].POSITION_SEEK_ERROR_DELTA) {
          // Ignoring seek
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Ignoring seek < ' + _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_13__["default"].POSITION_SEEK_ERROR_DELTA + 'ms');
        } else {
          // Current ad is being skipped
          this.adSkipped = true;
        }
      }
    }
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      // Ad end with stopStreamingSession
      if (this.adBreakPlaying) {
        this.adSkipped = true;
        this.handleAdEnd();
        this.adBreakPlaying = false;
      }
    }
  }, {
    key: "onAdBreakBegin",
    value: function onAdBreakBegin(sessionToken) {
      // Ad breaks start
      this.adBreakPlaying = true;

      // Add ad break begin to timeline
      if (this.timeline !== undefined) {
        var _SmartLib$analyticsMo;
        this.timeline.pushEvent((_SmartLib$analyticsMo = _SmartLib__WEBPACK_IMPORTED_MODULE_12__["default"].analyticsModule) === null || _SmartLib$analyticsMo === void 0 ? void 0 : _SmartLib$analyticsMo.SessionTrackerEvents.AdBreakStart);
      }
    }
  }, {
    key: "onAdBegin",
    value: function onAdBegin(sessionToken, creativeId, adId) {
      // To detect skip of an ad inside an ad breaks
      if (this.adSkipped) {
        this.handleAdEnd();
      }

      // Init ad metrics
      this.adSkipped = false;
      this.adLastLayerSwitchDate = Date.now();
      this.builder.reset().import(this.adMetrics[adId]) // import old ad metrics SR if it exists
      .setSessionToken(sessionToken).setCreativeId(creativeId).setAdId(adId);
      this.adPlaying = true;
    }
  }, {
    key: "onAdSkippable",
    value: function onAdSkippable(sessionToken) {
      this.builder.setAdSkippable(true);
    }
  }, {
    key: "onAdSkipped",
    value: function onAdSkipped(sessionToken, creativeId, adId, otherSkippedAdIds) {
      var _this = this;
      this.adSkipped = true;

      // Skip all other next ads
      if (otherSkippedAdIds.length > 0) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Ad break skipped');
        otherSkippedAdIds.forEach(function (adId) {
          _this.adMetrics[adId].adSkipped = true;
        });
      }
    }
  }, {
    key: "onAdProgress",
    value: function onAdProgress(sessionToken, creativeId, adId, progress) {
      this.builder.addProgress(progress);
      if (progress > 0 && this.builder.quartiles[progress - 25] === undefined) {
        this.adSkipped = true;
      }
    }
  }, {
    key: "onAdEnd",
    value: function onAdEnd(sessionToken, creativeId, adId) {
      // Default ad end
      this.handleAdEnd();
      this.adPlaying = false;
    }
  }, {
    key: "onAdBreakEnd",
    value: function onAdBreakEnd(sessionToken) {
      // Ad end with skip
      if (this.adPlaying === true) {
        this.builder.setAdSkipped(true);
        this.handleAdEnd();
      }

      // Ad breaks end
      this.adBreakPlaying = false;

      // Add ad break end to timeline
      if (this.timeline !== undefined) {
        var _SmartLib$analyticsMo2;
        this.timeline.pushEventProgress((_SmartLib$analyticsMo2 = _SmartLib__WEBPACK_IMPORTED_MODULE_12__["default"].analyticsModule) === null || _SmartLib$analyticsMo2 === void 0 ? void 0 : _SmartLib$analyticsMo2.SessionTrackerEvents.AdBreakStop, this.adMetrics.adProgress);
      }
    }
  }, {
    key: "onKeepaliveSessionReportUpdateRequested",
    value: function onKeepaliveSessionReportUpdateRequested(sessionReport) {
      if (this.adBreakPlaying) {
        var builder = this.builder.clone().addTimeSpentPerLayer(this.lastLayerBitrate, Date.now() - this.adLastLayerSwitchDate);
        if (this.adLastBufferingStartDate >= 0) {
          builder.addStall(Date.now() - this.adLastBufferingStartDate);
        }
        var metrics = builder.build();
        if (metrics.adId.length > 0) {
          this.adMetrics[metrics.adId] = metrics;
        }
      }
      sessionReport.adMetrics = Object.values(this.adMetrics);
    }
  }, {
    key: "onEndSessionReportUpdateRequested",
    value: function onEndSessionReportUpdateRequested(sessionReport) {
      sessionReport.adMetrics = Object.values(this.adMetrics);
    }
  }, {
    key: "handleAdEnd",
    value: function handleAdEnd() {
      // Store final progress and time spent on layer until end
      this.builder.setAdSkipped(this.adSkipped).addTimeSpentPerLayer(this.lastLayerBitrate, Date.now() - this.adLastLayerSwitchDate);

      // Generate the ad metrics
      var metrics = this.builder.build();
      if (metrics.adId.length > 0) {
        this.adMetrics[metrics.adId] = metrics;
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Ad metrics : ' + metrics.toString());

      // Reset ad metrics for the next ad
      this.builder.reset();
      this.adSkipped = false;
    }
  }, {
    key: "onAdsUpdated",
    value: function onAdsUpdated(adData) {
      var _this2 = this;
      // Create empty ad report (used to count the number of ad generated by the BkYou)
      adData.adBreaks.forEach(function (adBreak) {
        adBreak.ads.forEach(function (ad) {
          if (_this2.adMetrics[ad.adId] === undefined) {
            var _this2$handler;
            var builder = new _AdMetrics__WEBPACK_IMPORTED_MODULE_9__.AdMetricsBuilder();
            _this2.adMetrics[ad.adId] = builder.setSessionToken(adData.sessionToken).setCreativeId(ad.creativeId).setAdId(ad.adId).build();
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Adding ad metrics report for ad id ' + ad.adId, (_this2$handler = _this2.handler) === null || _this2$handler === void 0 ? void 0 : _this2$handler.id);
          }
        });
      });
    }
  }]);
  return AdMetricsManager;
}();


/***/ }),

/***/ "./src_core/ad/tracking/AdTracker.js":
/*!*******************************************!*\
  !*** ./src_core/ad/tracking/AdTracker.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdBreakTracker: function() { return /* binding */ AdBreakTracker; },
/* harmony export */   AdDataTracker: function() { return /* binding */ AdDataTracker; },
/* harmony export */   AdEventTracker: function() { return /* binding */ AdEventTracker; },
/* harmony export */   AdTracker: function() { return /* binding */ AdTracker; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _request_RequestManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../request/RequestManager */ "./src_core/request/RequestManager.js");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TAG = 'BpkAdTracker';
var Tracker = /*#__PURE__*/function () {
  function Tracker() {
    _classCallCheck(this, Tracker);
    /**
     * Trackers need to know if it has been already proceeded
     * In case of seek and in some cases, trackers should not be called
     * A seek before an ad reset this map
     */
    _defineProperty(this, "proceeded", void 0);
    this.proceeded = {};
  }

  /**
   * Check if the tracker can execute its code
   *
   * @param id Process id. In some tracker, it requires multiple can process (process begin, process end for the ad break tracker)
   *           0 = processBegin, 1 = processEnd
   * @returns {boolean} if return true, the rest of the method which calls this can be executed
   */
  _createClass(Tracker, [{
    key: "canProcess",
    value: function canProcess() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      // const canProcess = Date.now() - (this.proceeded[id] || 0) > AdTrackingManager.POSITION_SEEK_ERROR_DELTA;
      var canProcess = this.proceeded[id] === undefined;
      if (canProcess) {
        // console.log('OK', this.constructor.name, this.adId || this.ad?.adId, 'id ' + id, this.type);
        this.proceeded[id] = Date.now();
      } /* else {
           console.log('NOK', this.constructor.name, this.adId || this.ad?.adId, 'id ' + id, this.type);
        }*/

      return canProcess;
    }

    /**
     * Reset the proceeded map
     */
  }, {
    key: "resetProcess",
    value: function resetProcess() {
      // console.log('RESET', this.constructor.name, this.adId || this.ad?.adId, this.type);
      this.proceeded = {};
    }
  }]);
  return Tracker;
}();
/**
 * Base ad data object
 * Stored in ad tracking manager and used to browser ads
 */
var AdDataTracker = /*#__PURE__*/function () {
  function AdDataTracker(adTrackingManager, sessionToken, timeReference) {
    _classCallCheck(this, AdDataTracker);
    /**
     * SmartLib ad tracking manager
     */
    _defineProperty(this, "adTrackingManager", void 0);
    /**
     * BkYou sessiontoken
     */
    _defineProperty(this, "sessionToken", void 0);
    /**
     * BkYou timereference_ms
     */
    _defineProperty(this, "timeReference", void 0);
    /**
     * BkYou adpods
     */
    _defineProperty(this, "adBreaks", void 0);
    this.adTrackingManager = adTrackingManager;
    this.sessionToken = sessionToken;
    this.timeReference = timeReference;
    this.adBreaks = [];
  }

  /**
   * Has ad break after the given position
   * @param position position to check
   * @returns {boolean} true of has remaining ad breaks after position
   */
  _createClass(AdDataTracker, [{
    key: "hasRemainingAdBreaks",
    value: function hasRemainingAdBreaks(position) {
      return this.adBreaks.find(function (adBreak) {
        return position < adBreak.position + adBreak.duration;
      }) !== undefined;
    }

    /**
     * Reset progression if seeking
     * @param position current position
     */
  }, {
    key: "resetProgression",
    value: function resetProgression(position) {
      this.adBreaks.forEach(function (adBreak) {
        return adBreak.resetProgression(position);
      });
    }
  }]);
  return AdDataTracker;
}();

/**
 * Ad break data
 */
var AdBreakTracker = /*#__PURE__*/function (_Tracker) {
  _inherits(AdBreakTracker, _Tracker);
  var _super = _createSuper(AdBreakTracker);
  function AdBreakTracker(adData, id, position, duration, live) {
    var _this;
    _classCallCheck(this, AdBreakTracker);
    _this = _super.call(this);
    /**
     * Ad data tracker
     */
    _defineProperty(_assertThisInitialized(_this), "adData", void 0);
    /**
     * BkYou id
     */
    _defineProperty(_assertThisInitialized(_this), "id", void 0);
    // id
    /**
     * BkYou starttime_ms
     */
    _defineProperty(_assertThisInitialized(_this), "position", void 0);
    /**
     * Adjusted ad break duration calculated by SmartLib and used by the tracking
     * In some cases, the duration returned by the BkYou is not correct and has to be adjusted
     */
    _defineProperty(_assertThisInitialized(_this), "duration", void 0);
    /**
     * Duration of the current ad break in the tracking file (BkYou duration_ms)
     * For LIVE contents, actualDuration can be different of expectedDuration when the ad break is not totally generated
     */
    // actualDuration;
    /**
     * Expected duration of the full ad break
     * For VOD contents, expectedDuration == actualDuration
     */
    // expectedDuration;
    /**
     * Content type
     */
    _defineProperty(_assertThisInitialized(_this), "live", void 0);
    /**
     * BkYou ads
     */
    _defineProperty(_assertThisInitialized(_this), "ads", void 0);
    _this.adData = adData;
    _this.id = id;
    _this.position = position;
    _this.duration = duration;
    _this.live = live;
    _this.ads = [];
    return _this;
  }

  /**
   * Reset progression if seeking
   * @param position current position
   */
  _createClass(AdBreakTracker, [{
    key: "resetProgression",
    value: function resetProgression(position) {
      if (position <= this.position) {
        this.resetProcess();
      }
      this.ads.forEach(function (ad) {
        return ad.resetProgression(position);
      });
    }

    /**
     * Process trackers when starting an ad
     */
  }, {
    key: "processBegin",
    value: function processBegin() {
      var _adTrackingManager$ha;
      if (!this.canProcess(0)) {
        return;
      }
      var adTrackingManager = this.adData.adTrackingManager;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing ad break begin...', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Duration: ' + this.duration + 'ms', adTrackingManager.handler.id);

      // Trigger internal events
      adTrackingManager.notifyAdBreakData(this);
      adTrackingManager.notifyAdBreakBegin(this.adData.sessionToken);

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha === void 0 ? void 0 : _adTrackingManager$ha.adEventsListener;
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdBreakBegin(this.toData());
    }

    /**
     * Process trackers when ending an ad
     */
  }, {
    key: "processEnd",
    value: function processEnd() {
      var _adTrackingManager$ha2;
      if (!this.canProcess(1)) {
        return;
      }
      var adTrackingManager = this.adData.adTrackingManager;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing ad break end...', adTrackingManager.handler.id);

      // Trigger internal events
      adTrackingManager.notifyAdBreakEnd(this.adData.sessionToken);

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha2 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha2 === void 0 ? void 0 : _adTrackingManager$ha2.adEventsListener;
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdBreakEnd(this.toData());

      // Once played, the ad break can be replayed again
      // In some case of BkYou no insertion error, ad break end is called before the actual position.
      //   When an ad is detected ad break begin should be called again
      this.resetProcess();
    }
  }, {
    key: "resetProcess",
    value: function resetProcess() {
      _get(_getPrototypeOf(AdBreakTracker.prototype), "resetProcess", this).call(this);

      // Once an ad break has been completed, all ad can be replayed again
      //   Don't reset the progression, it requires to seek before the ad start position to reset it.
      //   Only need to trigger ad events if seeking backward
      this.ads.forEach(function (ad) {
        return ad.resetProcess();
      });
    }
  }, {
    key: "toData",
    value: function toData() {
      return {
        id: this.id,
        startPosition: this.position || 0,
        duration: this.live === true ? -1 : this.duration,
        ads: this.ads.map(function (ad) {
          return ad.toData();
        }),
        adCount: this.live === true ? -1 : this.ads.length
      };
    }
  }]);
  return AdBreakTracker;
}(Tracker);

/**
 * Ad data
 */
var AdTracker = /*#__PURE__*/function (_Tracker2) {
  _inherits(AdTracker, _Tracker2);
  var _super2 = _createSuper(AdTracker);
  function AdTracker(adBreak, index, position, duration, skippable, skippablePosition, creativeId, adId, clickable, verifications, nonLinearAd) {
    var _this2;
    _classCallCheck(this, AdTracker);
    _this2 = _super2.call(this);
    /**
     * Ad break tracker
     */
    _defineProperty(_assertThisInitialized(_this2), "adBreak", void 0);
    /**
     * Index in the current ad break
     */
    _defineProperty(_assertThisInitialized(_this2), "index", void 0);
    /**
     * BkYou starttime_ms
     */
    _defineProperty(_assertThisInitialized(_this2), "position", void 0);
    /**
     * BkYou duration_ms
     */
    _defineProperty(_assertThisInitialized(_this2), "duration", void 0);
    /**
     * BkYou skippable_ms
     */
    _defineProperty(_assertThisInitialized(_this2), "skippablePosition", void 0);
    /**
     * True if the ad is skippable
     */
    _defineProperty(_assertThisInitialized(_this2), "skippable", void 0);
    /**
     * BkYou creativeid
     */
    _defineProperty(_assertThisInitialized(_this2), "creativeId", void 0);
    /**
     * BkYou adid + '-' + starttime_ms
     */
    _defineProperty(_assertThisInitialized(_this2), "adId", void 0);
    /**
     * BkYou trackingevents
     */
    _defineProperty(_assertThisInitialized(_this2), "events", void 0);
    /**
     * BkYou videoclicks object
     * JSON value : { clickthroughurl: string, clicktracking: [{clickurl: string}], customclick: [{clickurl: string}] }
     * Mapped value : { uri: string, trackers: [{clickurl: string}], customClick: [{clickurl: string}] }
     */
    _defineProperty(_assertThisInitialized(_this2), "clickable", void 0);
    // videoclicks { clickthroughurl, clicktracking, customclick } => uri, trackers, customClick
    /**
     * BkYou adverifications array
     * JSON value : [ { vendor: string, javascriptresources: [{}], executableresources: [{}], trackingevents: [{}], verificationparameters: string} ]
     * Mapped value : [ {vendor: string, javascriptResources: [{}], executableResources: [{}], trackingEvents: [{}], verificationParameters: string } ]
     */
    _defineProperty(_assertThisInitialized(_this2), "verifications", void 0);
    /**
     * Array of interval watched
     * Flatted at each ad iteration
     */
    _defineProperty(_assertThisInitialized(_this2), "watched", void 0);
    /**
     * Current progression (0.0 to 1.0)
     * Reset when seek
     */
    _defineProperty(_assertThisInitialized(_this2), "progression", void 0);
    /**
     * Associated non linear ad description
     */
    _defineProperty(_assertThisInitialized(_this2), "nonLinearAd", void 0);
    _this2.adBreak = adBreak;
    _this2.index = index;
    _this2.position = position;
    _this2.duration = duration;
    _this2.skippable = skippable;
    _this2.skippablePosition = skippablePosition;
    _this2.creativeId = creativeId;
    _this2.adId = adId;
    _this2.events = [];
    _this2.clickable = clickable;
    _this2.verifications = verifications;
    _this2.watched = [];
    _this2.progression = 0;
    _this2.nonLinearAd = nonLinearAd;
    return _this2;
  }

  /**
   * Flat watch intervals array
   */
  _createClass(AdTracker, [{
    key: "flatWatched",
    value: function flatWatched() {
      var ranges = JSON.parse(JSON.stringify(this.watched)); // deep copy
      var intervals = ranges.slice(0);
      var stack = [];
      var top = null;

      // sort the intervals based on their start values
      intervals = intervals.sort(function (start, end) {
        if (start[0] > end[0]) {
          return 1;
        }
        if (start[0] < end[0]) {
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
        if (top[1] < intervals[i][0]) {
          // console.log('STACK 1');
          // if the current interval doesn't overlap with the
          // stack top element, push it to the stack
          stack.push(intervals[i]);
        } else if (top[1] < intervals[i][1]) {
          // console.log('STACK 2');
          // otherwise update the end value of the top element
          // if end of current interval is higher
          top[1] = intervals[i][1];
          // top.duration = top.end - top.start;

          stack.pop();
          stack.push(top);
        }
      }

      // const equal = JSON.stringify(this.watched) === JSON.stringify(stack);
      // console.log('FLAT', equal, stack);

      this.watched = stack;
    }

    /**
     * Reset progression if seeking
     * @param position current position
     */
  }, {
    key: "resetProgression",
    value: function resetProgression(position) {
      if (position <= this.position) {
        this.watched = [];
        this.progression = 0;
        this.resetProcess();
      }
      this.events.forEach(function (events) {
        return events.resetProgression(position);
      });
    }

    /**
     * Update the progression
     * Call trackers if needed
     *
     * @param positionStart progression start position
     * @param positionEnd progression end position
     */
  }, {
    key: "updateProgression",
    value: function updateProgression(positionStart, positionEnd) {
      if (positionStart > positionEnd || positionStart < this.position || positionEnd < this.position || positionStart > this.position + this.duration || positionEnd > this.position + this.duration) {
        return;
      }

      // TODO save last progression ?? avoid calculating at each iteration
      var durationStart = this.watched.reduce(function (sum, value) {
        return sum + (value[1] - value[0]);
      }, 0);
      var progressionStart = durationStart / this.duration;
      this.watched.push([positionStart - this.position, positionEnd - this.position]); // todo round values
      this.flatWatched();
      // console.log('WATCHED', this.watched);

      var durationEnd = this.watched.reduce(function (sum, value) {
        return sum + (value[1] - value[0]);
      }, 0);
      var progressionEnd = durationEnd / this.duration;
      this.progression = progressionEnd;

      // Trigger progress event
      var adData = this.adBreak.adData;
      var adTrackingManager = adData.adTrackingManager;

      /* if (progressionStart <= 0.00 && progressionEnd >= 0.00) {
          adTrackingManager.notifyAdProgress(adData.sessionToken, this.creativeId, this.adId, 0);
      }*/

      if (progressionStart <= 0.25 && progressionEnd >= 0.25) {
        adTrackingManager.notifyAdProgress(adData.sessionToken, this, 25);
      }
      if (progressionStart <= 0.50 && progressionEnd >= 0.50) {
        adTrackingManager.notifyAdProgress(adData.sessionToken, this, 50);
      }
      if (progressionStart <= 0.75 && progressionEnd >= 0.75) {
        adTrackingManager.notifyAdProgress(adData.sessionToken, this, 75);
      }

      /* if (progressionStart <= 1.00 && progressionEnd >= 1.00) {
          adTrackingManager.notifyAdProgress(adData.sessionToken, this.creativeId, this.adId, 100);
      }*/

      this.events.forEach(function (event) {
        return event.processEvents(progressionStart, progressionEnd);
      });
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad progressed from ' + Math.floor(progressionStart * 100000) / 1000 + '% to ' + Math.floor(progressionEnd * 100000) / 1000 + '%', adTrackingManager.handler.id);
    }

    /**
     * Process trackers when starting an ad
     */
  }, {
    key: "processBegin",
    value: function processBegin() {
      var _adTrackingManager$ha3;
      if (!this.canProcess(0)) {
        return;
      }
      var adData = this.adBreak.adData;
      var adTrackingManager = adData.adTrackingManager;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing ad begin ' + this.adId + '...', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Start: ' + this.position + 'ms', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'End  : ' + (this.position + this.duration) + 'ms', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Duration: ' + this.duration + 'ms', adTrackingManager.handler.id);

      // Trigger internal events
      adTrackingManager.notifyAdData(this);
      adTrackingManager.notifyAdBegin(adData.sessionToken, this);
      if (this.skippable === true) {
        adTrackingManager.notifyAdSkippable(adData.sessionToken, this.skippablePosition, this.position + this.duration, this.adBreak.position + this.adBreak.duration);
      }
      adTrackingManager.notifyAdProgress(adData.sessionToken, this, 0);

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha3 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha3 === void 0 ? void 0 : _adTrackingManager$ha3.adEventsListener;
      var ad = this.toData();
      var adBreak = this.adBreak.toData();
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdBegin(ad, adBreak);
      if (this.skippable === true) {
        adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdSkippable(ad, adBreak, this.skippablePosition, this.position + this.duration, this.adBreak.position + this.adBreak.duration);
      }
    }

    /**
     * Process trackers when ending an ad
     */
  }, {
    key: "processEnd",
    value: function processEnd() {
      var _adTrackingManager$ha4;
      if (!this.canProcess(1)) {
        return;
      }
      var adData = this.adBreak.adData;
      var adTrackingManager = adData.adTrackingManager;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing ad end ' + this.adId + '...', adTrackingManager.handler.id);

      // Trigger internal events
      // Handle errors, process 100% if tracking progression is 0.95%+
      if (this.progression >= 0.95) {
        // Set progression to 1
        this.updateProgression(this.position, this.position + this.duration);
        adTrackingManager.notifyAdProgress(adData.sessionToken, this, 100);
      }
      adTrackingManager.notifyAdEnd(adData.sessionToken, this);

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha4 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha4 === void 0 ? void 0 : _adTrackingManager$ha4.adEventsListener;
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdEnd(this.toData(), this.adBreak.toData());
    }
  }, {
    key: "toData",
    value: function toData() {
      return {
        index: this.index,
        creativeId: this.creativeId,
        adId: this.adId,
        startPosition: this.position,
        skipPosition: this.skippablePosition,
        duration: this.duration,
        clickURL: this.clickable.uri,
        nonLinearAd: this.nonLinearAd
      };
    }
  }]);
  return AdTracker;
}(Tracker);

/**
 * Ad event data
 */
var AdEventTracker = /*#__PURE__*/function (_Tracker3) {
  _inherits(AdEventTracker, _Tracker3);
  var _super3 = _createSuper(AdEventTracker);
  function AdEventTracker(ad, type, url, offset, position) {
    var _this3;
    _classCallCheck(this, AdEventTracker);
    _this3 = _super3.call(this);
    /**
     * Ad tracker
     */
    _defineProperty(_assertThisInitialized(_this3), "ad", void 0);
    /**
     * BkYou type
     */
    _defineProperty(_assertThisInitialized(_this3), "type", void 0);
    /**
     * BkYou callbackurl
     */
    _defineProperty(_assertThisInitialized(_this3), "url", void 0);
    /**
     * BkYou offset
     */
    _defineProperty(_assertThisInitialized(_this3), "offset", void 0);
    /**
     * BkYou time_ms
     * Deprecated
     */
    _defineProperty(_assertThisInitialized(_this3), "position", void 0);
    /**
     * Event trigger position
     */
    _defineProperty(_assertThisInitialized(_this3), "progression", void 0);
    _this3.ad = ad;
    _this3.type = type;
    _this3.url = url;
    _this3.offset = offset;
    _this3.position = position;
    _this3.progression = 0;
    _this3.processProgression();
    return _this3;
  }

  /**
   * Reset progression if seeking
   * @param position current position
   */
  _createClass(AdEventTracker, [{
    key: "resetProgression",
    value: function resetProgression(position) {
      if (position <= this.ad.position) {
        this.resetProcess();
      }
    }

    /**
     * Calculate event trigger position
     */
  }, {
    key: "processProgression",
    value: function processProgression() {
      var type = this.type !== undefined ? this.type.toLowerCase() : undefined;
      switch (type) {
        case undefined:
          this.progression = (this.position - this.ad.position) / this.ad.duration;
          break;
        case 'start':
          this.progression = 0.0;
          break;
        case 'firstquartile':
          this.progression = 0.25;
          break;
        case 'midpoint':
          this.progression = 0.5;
          break;
        case 'thirdquartile':
          this.progression = 0.75;
          break;
        case 'complete':
          this.progression = 1.0;
          break;
        case 'progress':
          this.progression = this.offset / this.ad.duration;
          break;
        case 'impression':
          this.progression = 0.0;
          break;
      }
    }

    /**
     * Try to process event
     * Trigger event if event trigger progression is between progression start and progression end
     *
     * @param progressionStart progression start
     * @param progressionEnd progression end
     * @returns {boolean} true if the event has been proceeded
     */
  }, {
    key: "processEvents",
    value: function processEvents(progressionStart, progressionEnd) {
      // console.log(progressionStart + ' < ' + this.progression + ' < ' + progressionEnd);
      var adTrackingManager = this.ad.adBreak.adData.adTrackingManager;
      if (progressionStart <= this.progression && this.progression <= progressionEnd) {
        if (!this.canProcess()) {
          return false;
        }
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing ' + (this.type || 'timed event') + ' (' + Math.floor(this.progression * 100) + '%)...', adTrackingManager.handler.id);
        if (this.url !== undefined && this.url.length > 0) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Requesting ' + this.url, adTrackingManager.handler.id);
          _request_RequestManager__WEBPACK_IMPORTED_MODULE_19__["default"].getInstance().adEvent(adTrackingManager.handler, this.url);
        }
      }
      return true;
    }
  }]);
  return AdEventTracker;
}(Tracker);

/***/ }),

/***/ "./src_core/ad/tracking/AdTrackingManager.js":
/*!***************************************************!*\
  !*** ./src_core/ad/tracking/AdTrackingManager.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdTrackingManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../service/JobManager */ "./src_core/service/JobManager.js");
/* harmony import */ var _request_RequestManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../request/RequestManager */ "./src_core/request/RequestManager.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _AdTracker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AdTracker */ "./src_core/ad/tracking/AdTracker.js");
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var TAG = 'BpkAdTrackingMgr';
var AdTrackingManager = /*#__PURE__*/function () {
  function AdTrackingManager(handler, playerAdapter) {
    _classCallCheck(this, AdTrackingManager);
    // static NONCE_EXPIRATION_TIME = 5 * 60 * 1000;
    /**
     * Session handler
     */
    _defineProperty(this, "handler", void 0);
    /**
     * Player adapter
     */
    _defineProperty(this, "playerAdapter", void 0);
    /**
     * Ad tracking event listeners
     */
    _defineProperty(this, "listeners", void 0);
    /**
     * Ad data (all ad breaks, all ads and all events)
     */
    _defineProperty(this, "adData", void 0);
    /**
     * Current ad list
     */
    _defineProperty(this, "adList", void 0);
    /**
     * Update position job
     * Used to track the current position
     */
    _defineProperty(this, "updatePositionJob", void 0);
    /**
     * Update BkYou session job
     */
    _defineProperty(this, "updateSessionJob", void 0);
    /**
     * Playback session started
     */
    _defineProperty(this, "started", void 0);
    /**
     * Playback paused
     */
    _defineProperty(this, "paused", void 0);
    /**
     * Playback buffering
     */
    _defineProperty(this, "buffering", void 0);
    /**
     * Playback position
     */
    _defineProperty(this, "lastPosition", void 0);
    /**
     * Playback position when onPause is called
     */
    _defineProperty(this, "lastPositionBeforePause", void 0);
    /**
     * Last seek position, used to handle bad position when onBufferingEnd called
     */
    _defineProperty(this, "lastPositionAfterSeek", void 0);
    /**
     * First image date
     */
    _defineProperty(this, "firstImageDate", void 0);
    /**
     * Current ad tracker
     */
    _defineProperty(this, "currentAdTracker", void 0);
    /**
     * Current ad break tracker
     */
    _defineProperty(this, "currentAdBreakTracker", void 0);
    /**
     * Current ad data for getCurrentAd()
     */
    _defineProperty(this, "currentAdData", void 0);
    /**
     * Current ad break data for getCurrentAdBreak()
     */
    _defineProperty(this, "currentAdBreakData", void 0);
    /**
     * Google PAL session
     */
    _defineProperty(this, "adPalSession", void 0);
    /**
     * BkYou session flag
     */
    _defineProperty(this, "bkYouSession", void 0);
    /**
     * BkYou session token
     */
    _defineProperty(this, "sessionToken", void 0);
    /**
     * BkYou ad tracking base URL
     */
    _defineProperty(this, "baseURL", void 0);
    /**
     * BkYou ad tracking nonce
     */
    _defineProperty(this, "nonce", void 0);
    /**
     * BkYou ad tracking nonce creation date
     */
    // nonceDate
    /**
     * BkYou ad tracking nonce request
     */
    _defineProperty(this, "adPalSessionRequest", void 0);
    /**
     * BkYou first full ad tracking file received
     */
    _defineProperty(this, "firstFileReceived", void 0);
    /**
     * BkYou first full ad tracking file proceeded
     */
    _defineProperty(this, "firstFileProceeded", void 0);
    /**
     * Number of pods sent to onAdData before firstFileProceeded === true
     * onAdData is registered through session.setAdDataListener(...)
     */
    _defineProperty(this, "podsSentNumber", void 0);
    /**
     * Current refresh delay to update the trackers from BkYou
     * Default value is SESSION_UPDATE_INTERVAL
     */
    _defineProperty(this, "sessionUpdateInterval", void 0);
    this.handler = handler;
    this.playerAdapter = playerAdapter;
    this.listeners = [];
    this.adData = undefined;
    this.adList = [];
    this.updatePositionJob = undefined;
    this.updateSessionJob = undefined;
    this.started = false;
    this.paused = false;
    this.buffering = false;
    this.lastPosition = 0;
    this.lastPositionBeforePause = 0;
    this.lastPositionAfterSeek = 0;
    this.bkYouSession = false;
    this.baseURL = undefined;
    this.nonce = undefined;
    // this.nonceDate = 0;
    this.adPalSessionRequest = undefined;
    this.firstFileReceived = false;
    this.firstFileProceeded = false;
    this.podsSentNumber = 0;
    this.sessionUpdateInterval = AdTrackingManager.SESSION_UPDATE_INTERVAL;
  }

  /**
   * Init the session on the BkYou
   * Called when starting a session (during getURL or first image event)
   *
   * @param baseURL Manifest base URL
   * @param sessionToken BkYou session token
   * @param data BkYou JSON
   * @param adPalSession Google PAL session data
   * @param nonce Google PAL nonce
   */
  _createClass(AdTrackingManager, [{
    key: "initBkYouSession",
    value: function initBkYouSession(baseURL, sessionToken, data, adPalSession, nonce) {
      // Store base url
      this.baseURL = baseURL;

      // Set BkYou session
      this.sessionToken = sessionToken;
      this.bkYouSession = true;

      // Get nonce
      if (adPalSession !== undefined) {
        this.adPalSession = adPalSession;
        this.nonce = nonce;
      }

      // Parse BkYou file
      this.parseAdPods(data);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'BkYou session initialized', this.handler.id);
    }

    /**
     * Reload BkYou JSON
     */
  }, {
    key: "updateBkYouSession",
    value: function updateBkYouSession() {
      var _this = this;
      // Cancel request if session has been stopped
      if (this.handler.stopped === true) {
        return;
      }
      if (this.bkYouSession === true) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Updating ad tracking file...', this.handler.id);

        // Add nonce to the request url
        var adTrackingURL = this.baseURL;

        // Retrieve the new nonce if available
        /* if (this.adPalSessionRequest !== undefined) {
            this.nonce = this.adPalSessionRequest.adPalSession?.getNonce();
            this.nonceDate = Date.now();
             this.adPalSessionRequest = undefined;
             LoggerManager.d(TAG, 'New ad PAL session nonce ' + this.nonce, this.handler.id);
        }*/

        var smartLibParameters = this.handler.smartLib.getParameters();
        var parameters = {
          userAgent: smartLibParameters.userAgent
        };
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().adTracking(this.handler, parameters, adTrackingURL, true).then(function (result) {
          // Cancel request if session has been stopped
          if (_this.handler.stopped === true) {
            return;
          }

          // Cancel active keepalive job
          if (_this.updateSessionJob !== undefined) {
            _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().cancel(_this.updateSessionJob);
          }
          if (result.httpStatus >= 200 && result.httpStatus < 300) {
            // Parse the BkYou JSON file
            var data;
            try {
              data = JSON.parse(result.content);
            } catch (e) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking updated file unreadable', _this.handler.id);

              // Restart keepalive job
              if (_this.firstFileReceived === true) {
                _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
                  _this.updateSessionJob = undefined;
                  _this.updateBkYouSession();
                });
              }
              return;
            }

            // First file received (used to execute event from first image to current position)
            _this.firstFileReceived = true;

            // Parse ads data
            _this.parseAdPods(data);

            /* Disabled: No need to update the nonce, only 1 nonce per session is required
            // Ad breaks after update (to be compared with adBreaksBeforeUpdate)
            const adBreaksAfterUpdate = this.baseEvents.filter(event => event.tracker instanceof AdBreakBeginTracker);
             // If ad breaks are different, generate a new nonce
            if (adBreaksBeforeUpdate.length !== adBreaksAfterUpdate.length || Date.now() - this.nonceDate > AdTrackingManager.NONCE_EXPIRATION_TIME) {
                // Generate a new nonce
                this.updateNonce();
            } else {
                for (let i = 0; i < adBreaksBeforeUpdate.length; i++) {
                    const adBreakBeforeUpdate = adBreaksBeforeUpdate[i];
                    const adBreakAfterUpdate = adBreaksAfterUpdate[i];
                     if (adBreakBeforeUpdate.adBreakId !== adBreakAfterUpdate.adBreakId) {
                        // Generate a new nonce
                        this.updateNonce();
                         break;
                    }
                }
            }*/

            // If is live, restart update BkYou data job
            if (_this.isLive()) {
              // Start a keepalive job
              _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
                _this.updateSessionJob = undefined;
                _this.updateBkYouSession();
              });
            } else {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Stopping ad tracking file update (VOD stream)...', _this.handler.id);
            }
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Stopping ad tracking file update (status code ' + result.httpStatus + ')', _this.handler.id);
          }
        });
      }
    }

    /* updateNonce() {
        LoggerManager.d(TAG, 'Updating nonce...', this.handler.id);
         this.nonce = undefined;
        this.adPalSessionRequest = this.handler.smartLib.internalAdManager.requestAdPalSession();
    }*/

    /**
     * In some case, the BkYou sends bad data, the method fix them
     * @param adBreak ad break to fix
     */
  }, {
    key: "fixAdBreak",
    value: function fixAdBreak(adBreak) {
      // Workaround when BkYou is returning a bad ad start position
      // Fix next ad and events positions when nextAd position is inside current ad
      var lastAd;
      adBreak.ads.forEach(function (ad, index) {
        var nextAd = adBreak.ads[index + 1];
        if (nextAd !== undefined && nextAd.position < ad.position + ad.duration) {
          nextAd.position = ad.position + ad.duration;
          nextAd.events.filter(function (event) {
            return event.position < nextAd.position;
          }).forEach(function (event) {
            event.position = nextAd.position;
          });
        }
        lastAd = ad;
      });

      // Workaround when BkYou is not calculating well the ad break duration
      // Updating ad break duration because of BkYou precision error
      if (lastAd !== undefined) {
        adBreak.duration = lastAd.position + lastAd.duration - adBreak.position;
      }
    }

    /**
     * Parse BkYou JSON
     * Merge the current adData object
     *
     * @param data BkYou JSON
     */
  }, {
    key: "parseAdPods",
    value: function parseAdPods(data) {
      var _this2 = this;
      var sessionToken = data['sessiontoken'] || '';
      var timeReference = data['timereference_ms'] || 0;

      // Set refresh delay if defined (2 to 5 secs)
      var refreshDelay = data['refresh_delay_ms'] || AdTrackingManager.SESSION_UPDATE_INTERVAL;
      if (refreshDelay >= 2000 && refreshDelay <= AdTrackingManager.SESSION_UPDATE_INTERVAL) {
        this.sessionUpdateInterval = refreshDelay;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Setting refresh delay to ' + this.sessionUpdateInterval + 'ms', this.handler.id);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Setting refresh delay to ' + AdTrackingManager.SESSION_UPDATE_INTERVAL + 'ms (default value)', this.handler.id);
      }
      var adDataTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_19__.AdDataTracker(this, sessionToken, timeReference);
      var adPods = data['adpods'];
      if (Array.isArray(adPods)) {
        adPods.forEach(function (adPod) {
          var adBreakId = adPod['id'] || '';
          var startTime = adPod['starttime_ms'] + timeReference;
          var duration = adPod['duration_ms'] || 0;
          var ads = adPod['ads'];

          // Create ad break
          var adBreakTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_19__.AdBreakTracker(adDataTracker, adBreakId, startTime, duration, _this2.isLive());

          // Parse ads
          if (Array.isArray(ads)) {
            ads.forEach(function (ad, sequenceNumber) {
              // TODO remove test data
              /* ad.adverifications = [{
                  'vendor': 'broadpeak.tv-omid',
                  'javascriptresources': [
                      {
                          'apiframework': 'omid',
                          'browseroptional': 'true',
                          'url': 'https://verification.com/omid_verification.js'
                      }
                  ],
                  'verificationparameters': 'parm1=XX&param2=YYY&param3=ZZZ'
              }];
              ad.videoclicks = {
                  'clickthroughurl': 'https://broadpeak.tv',
                  'clicktracking': [
                      {
                          'clickurl': 'http:\/\/smartlib.broadpeak.tv\/clickadtracking1'
                      },
                      {
                          'clickurl': 'http:\/\/tracking.broadpeak.tv\/clickadtracking2'
                      }
                  ],
                  'customclick': [
                      {
                          'clickurl': 'http:\/\/smartlib.broadpeak.tv\/clickadtracking1'
                      }
                  ]
              };
              ad['skippable_ms'] = ad['starttime_ms'] + 5000;*/

              var startTime = ad['starttime_ms'] + timeReference;
              var duration = ad['duration_ms'];
              var events = ad['trackingevents'];

              // [SIMID-POC]: parse nonLinear property for interactive ads
              var nonLinear = ad['nonLinear'];

              // Do not add ad with time_ms equal to 0, it means it is not fully proceeded by the BkYou
              var isValidAd = true;
              if (Array.isArray(events) && events.length > 0) {
                isValidAd = startTime > 0 && events[0]['time_ms'] > 0 || startTime === 0;
              }

              // Parse ad
              if (startTime !== undefined && duration !== undefined && isValidAd === true) {
                var _ad$videoclicks, _ad$videoclicks2, _ad$videoclicks3;
                var skippableTime = ad['skippable_ms'] + timeReference || 0;
                var skippable = skippableTime !== 0 && skippableTime !== undefined && skippableTime !== null;
                var creativeId = ad['creativeid'] || '';
                var adId = ad['adid'] + '-' + startTime || '';
                var clickable = {
                  uri: ((_ad$videoclicks = ad.videoclicks) === null || _ad$videoclicks === void 0 ? void 0 : _ad$videoclicks.clickthroughurl) || '',
                  trackers: ((_ad$videoclicks2 = ad.videoclicks) === null || _ad$videoclicks2 === void 0 ? void 0 : _ad$videoclicks2.clicktracking) || [],
                  customClick: ((_ad$videoclicks3 = ad.videoclicks) === null || _ad$videoclicks3 === void 0 ? void 0 : _ad$videoclicks3.customclick) || []
                };
                var adVerifications = ad.adverifications || [];
                var verifications = [];
                adVerifications.forEach(function (element) {
                  verifications.push({
                    vendor: element.vendor || '',
                    javascriptResources: element.javascriptresources || [],
                    executableResources: element.executableresources || [],
                    trackingEvents: element.trackingevents || [],
                    verificationParameters: element.verificationparameters || ''
                  });
                });
                var adTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_19__.AdTracker(adBreakTracker, sequenceNumber, startTime, duration, skippable, skippableTime, creativeId, adId, clickable, verifications, nonLinear);
                adBreakTracker.ads.push(adTracker);

                // Parse callback events
                if (Array.isArray(events)) {
                  events.forEach(function (event) {
                    var url = event['callbackurl'];
                    if (url !== undefined) {
                      var type = event['type'];
                      var offset = event['offset_ms'];
                      var time = event['time_ms'] + timeReference || startTime;
                      var adEventTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_19__.AdEventTracker(adTracker, type, url, offset, time);
                      adTracker.events.push(adEventTracker);
                    }
                  });
                }
              }
            });
          }

          // Only add ad break with ads
          if (adBreakTracker.ads.length > 0) {
            adDataTracker.adBreaks.push(adBreakTracker);
          }
        });
        adDataTracker.adBreaks.forEach(function (adBreak) {
          _this2.fixAdBreak(adBreak);
        });
      }

      // Add all events to the database
      var dataUpdated = this.mergeEvents(adDataTracker);

      // Generate ad list
      this.adList = this.adData.adBreaks.map(function (adBreak) {
        return adBreak.toData();
      });

      // Send ad data even if there is no ad pod (BkYou not supporting bk-ml=2.0)
      this.notifyAdDataListener(dataUpdated);
    }

    /**
     * Start the update position job
     */
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;
      if (this.updatePositionJob === undefined) {
        // LoggerManager.d(TAG, 'Starting ad tracking...');
        this.updatePositionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().asyncDelay(AdTrackingManager.POSITION_UPDATE_INTERVAL, function () {
          _this3.updatePositionJob = undefined;

          // LoggerManager.d(TAG, 'onPositionUpdated');
          _this3.onPositionUpdated(_this3.playerAdapter.getPosition());
        });
      }
    }

    /**
     * Stop the update position job
     */
  }, {
    key: "stop",
    value: function stop() {
      if (this.updatePositionJob !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking paused (player event)', this.handler.id);
        _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().cancel(this.updatePositionJob);
        this.updatePositionJob = undefined;
      }
    }

    /**
     * Return true if the content is live (open manifest)
     * Before first image, consider as VOD to always have an ad break duration
     * After first image, consider the actual content type
     * @returns {boolean} true if is live
     */
  }, {
    key: "isLive",
    value: function isLive() {
      if (this.firstImageDate === undefined) {
        return false;
      }
      return this.playerAdapter.getDuration() <= 0;
    }

    /**
     * Merge new events with current events
     *
     * An existing ad break can update its ad list, but an existing ad cannot be removed or updated
     * Ad breaks can be added during the session
     * If an ad break does not appear anymore in the Bkyou data, it has to stay in memory
     *
     * @param adData new data received by the BkYou
     *
     * @returns {boolean} true if new data stored in memory
     */
  }, {
    key: "mergeEvents",
    value: function mergeEvents(adData) {
      var _this4 = this;
      var dataUpdated = false;

      // Set ad data the first time
      if (this.adData === undefined) {
        this.adData = adData;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, adData.adBreaks.length + ' ad break(s) parsed', this.handler.id);
        dataUpdated = true;
      } else {
        var newAdCount = 0;
        var deletedAdCount = 0;

        // Update base ad data
        this.adData.sessionToken = adData.sessionToken;
        this.adData.timeReference = adData.timeReference;

        // Remove expired ad breaks
        var currentIds = adData.adBreaks.map(function (adBreak) {
          return adBreak.id;
        });
        this.adData.adBreaks.forEach(function (adBreak, index, array) {
          var _this4$currentAdTrack;
          // If ad break from memory not present in updated data and not playing the ad break, remove it
          if (!currentIds.includes(adBreak.id) && ((_this4$currentAdTrack = _this4.currentAdTracker) === null || _this4$currentAdTrack === void 0 ? void 0 : _this4$currentAdTrack.adBreak.id) !== adBreak.id) {
            array.splice(index, 1);
            deletedAdCount++;
            dataUpdated = true;
          }
        });

        // Update ad breaks (duration, ads list)
        adData.adBreaks.forEach(function (adBreak, index) {
          // Update ad data pointer
          adBreak.adData = _this4.adData;

          // Get ad break in memory if it exists
          var currentAdBreak = _this4.adData.adBreaks.find(function (currentAdBreak) {
            return currentAdBreak.id === adBreak.id;
          });
          if (currentAdBreak !== undefined) {
            // Add un-existing ads only
            adBreak.ads.filter(function (ad) {
              return currentAdBreak.ads.find(function (currentAd) {
                return currentAd.adId === ad.adId;
              }) === undefined;
            }).forEach(function (ad) {
              // Insert the ad at the correct index
              // In come case, the SLATE (end of the ad break) can be inserted before inserting intermediate ads
              var insertIndex = currentAdBreak.ads.findIndex(function (currentAd) {
                return currentAd.position > ad.position;
              });
              if (insertIndex === -1) {
                currentAdBreak.ads.push(ad);
              } else {
                currentAdBreak.ads.splice(insertIndex, 0, ad);
              }
              newAdCount++;
              dataUpdated = true;
            });

            // Update ad positions and ad break duration
            var oldDuration = currentAdBreak.duration;
            _this4.fixAdBreak(currentAdBreak);
            if (oldDuration !== currentAdBreak.duration) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad break ' + (index + 1) + '/' + _this4.adData.adBreaks.length + ': updated duration from ' + oldDuration + ' to ' + currentAdBreak.duration, _this4.handler.id);
            }
          } else {
            // Add the new ad break
            _this4.adData.adBreaks.push(adBreak);
            newAdCount += adBreak.ads.length;
            dataUpdated = true;
          }
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, this.adData.adBreaks.length + ' ad break(s) in total, ' + adData.adBreaks.length + ' ad break(s) parsed, ' + newAdCount + ' new ad(s), ' + deletedAdCount + ' deleted ad(s)', this.handler.id);
      }

      // Notify event array updated
      this.notifyAdsUpdated(this.adData);

      // Start if necessary
      if (this.started && !this.paused && !this.buffering) {
        var position = this.playerAdapter.getPosition();

        // If update position process stopped, reset last position to the current position
        if (this.updatePositionJob === undefined && this.adData.hasRemainingAdBreaks(position) > 0) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking resumed', this.handler.id);

          // Resume at the current player position
          this.lastPosition = position;
        }

        // Restart update position process
        this.checkStart();

        // Check if ad break ended
        // Only check in case of LIVE, for VOD contents, ad break end already triggered since breaks are static
        if (this.isLive()) {
          this.checkAdBreakEnded(position);
        }
      }
      return dataUpdated;
    }
  }, {
    key: "onPositionUpdated",
    value: function onPositionUpdated(currentPosition) {
      var positionStart = this.lastPosition !== currentPosition ? this.lastPosition : currentPosition - 1;
      var positionEnd = currentPosition;

      // Process events when receiving the ad tracking file after the playback started
      if (this.firstFileReceived === true && this.firstFileProceeded === false) {
        this.firstFileProceeded = true;

        // Process all events from the beginning if player starts up to 00:00:04.000
        // The BkYou json file is received asynchronously after first image
        var startPrecision = 4000;
        if (Date.now() - this.firstImageDate <= startPrecision && positionEnd - positionStart > 0) {
          // LoggerManager.d(TAG, 'BKYOU START PRECISION', this.handler.id);
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing all events since first image...', this.handler.id);

          // Find the closest ad
          var adBreakTracker = this.adData.adBreaks.find(function (adBreak) {
            return positionStart - startPrecision <= adBreak.position && adBreak.position < positionStart;
          });
          var adTracker = adBreakTracker === null || adBreakTracker === void 0 ? void 0 : adBreakTracker.ads.find(function (ad) {
            return positionStart - startPrecision <= ad.position && ad.position < positionStart;
          });

          // Storing ad data
          this.currentAdData = adTracker === null || adTracker === void 0 ? void 0 : adTracker.toData();
          this.currentAdBreakData = adBreakTracker === null || adBreakTracker === void 0 ? void 0 : adBreakTracker.toData();

          // Process all event from the ad position to end position
          adBreakTracker === null || adBreakTracker === void 0 || adBreakTracker.processBegin();
          adTracker === null || adTracker === void 0 || adTracker.processBegin();
          adTracker === null || adTracker === void 0 || adTracker.updateProgression(adTracker.position, positionStart);

          // Entering an ad
          this.currentAdTracker = adTracker;
          this.currentAdBreakTracker = adBreakTracker;
        }
      }
      if (positionStart < positionEnd && positionEnd - positionStart < AdTrackingManager.POSITION_SEEK_ERROR_DELTA /* 2 * AdTrackingManager.POSITION_UPDATE_INTERVAL*/) {
        var _this$adData, _this$adData2;
        // Debug (to comment before release)
        /* const dStart = (positionStart + 1);
        const dEnd = positionEnd;
        LoggerManager.d(TAG, 'Processing trackers from ' + Math.floor(dStart / 1000) + '.' +
            (dStart - Math.floor(dStart / 1000) * 1000) + 'secs to ' + Math.floor(dEnd / 1000) + '.' +
            (dEnd - Math.floor(dEnd / 1000) * 1000) + 'ms', this.handler.id);*/

        // Ad break at the current position
        var _adBreakTracker = (_this$adData = this.adData) === null || _this$adData === void 0 ? void 0 : _this$adData.adBreaks.find(function (adBreak) {
          return adBreak.position <= positionEnd && positionEnd < adBreak.position + adBreak.duration;
        });

        // Ad at the current position
        var _adTracker = _adBreakTracker === null || _adBreakTracker === void 0 ? void 0 : _adBreakTracker.ads.find(function (ad) {
          return ad.position <= positionEnd && positionEnd < ad.position + ad.duration;
        });

        // Current position in an ad
        if (_adTracker !== undefined) {
          // Entering an ad
          if (this.currentAdTracker === undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Entering ad ' + _adTracker.adId + '...', this.handler.id);

            // Ad skipped, a seek happened
            var skipped = positionStart - _adTracker.position >= AdTrackingManager.POSITION_SEEK_ERROR_DELTA;

            // If entering an ad, handle position start precision error
            if (!skipped) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Update position start from ' + positionStart + ' to ' + _adTracker.position, this.handler.id);
              positionStart = _adTracker.position;
            }

            // console.log('SKIPPED', skipped, positionStart);

            // Storing ad data
            this.currentAdData = _adTracker.toData();
            this.currentAdBreakData = _adBreakTracker.toData();

            // Process events
            _adBreakTracker.processBegin();
            _adTracker.processBegin();
            _adTracker.updateProgression(positionStart, positionEnd);

            // Notify ad skipped
            if (skipped) {
              this.notifyAdSkipped(this.adData.sessionToken, _adTracker);
            }
          } else if (this.currentAdTracker === _adTracker) {
            // In the same ad
            _adTracker.updateProgression(positionStart, positionEnd);
          } else if (this.currentAdTracker !== _adTracker) {
            // Changing ad
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Changing from ad ' + this.currentAdTracker.adId + ' to ' + _adTracker.adId + '...', this.handler.id);

            // A seek happened and the position is in another ad break, the progression has already been updated in the seek event
            // No need to handle seek position precision error here
            if (_adTracker.adBreak.id === this.currentAdTracker.adBreak.id) {
              this.currentAdTracker.updateProgression(positionStart, this.currentAdTracker.position + this.currentAdTracker.duration);
            }

            // Process the previous ad
            this.currentAdTracker.processEnd();

            // A seek happened and the position is in another ad break but still in an ad
            if (_adTracker.adBreak.id !== this.currentAdTracker.adBreak.id) {
              this.currentAdTracker.adBreak.processEnd();

              // Storing ad data
              this.currentAdData = _adTracker.toData();
              this.currentAdBreakData = _adBreakTracker.toData();
              _adBreakTracker.processBegin();
            } else {
              // Storing ad data
              this.currentAdData = _adTracker.toData();
            }

            // Process the current ad
            _adTracker.processBegin();

            // If changing ad after a seek, and the seek end position is not close to the ad start position, count it as skipped
            if (positionEnd - _adTracker.position >= AdTrackingManager.POSITION_UPDATE_INTERVAL) {
              this.notifyAdSkipped(this.adData.sessionToken, _adTracker);
            } else {
              // Handle seek position precision error
              _adTracker.updateProgression(_adTracker.position, positionEnd);
            }
          }
          this.currentAdTracker = _adTracker;
          this.currentAdBreakTracker = _adBreakTracker;
        } else {
          // Exiting ad
          if (this.currentAdTracker !== undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Exiting ad ' + this.currentAdTracker.adId + '...', this.handler.id);

            // Avoid progression > 100%
            if (positionEnd - (this.currentAdTracker.position + this.currentAdTracker.duration) < AdTrackingManager.POSITION_UPDATE_INTERVAL) {
              positionEnd = this.currentAdTracker.position + this.currentAdTracker.duration;
            }

            // A seek happened and the position could not be in the ad, the progression has already been updated in the seek event
            if (positionStart >= this.currentAdTracker.position) {
              this.currentAdTracker.updateProgression(positionStart, positionEnd);
            }

            // If exiting ad before the end, count it as skipped
            if (this.currentAdTracker.progression < 1.0) {
              this.notifyAdSkipped(this.adData.sessionToken, this.currentAdTracker);
            }

            // Process the end events
            this.currentAdTracker.processEnd();

            // For LIVE contents, we need the response from the BkYou if the ad break is actually done
            // In some cases, we receive updated trackers too late, so we need to wait newer data before actually closing the ad
            // For VOD contents, end the break now
            if (_adBreakTracker === undefined && !this.isLive()) {
              this.currentAdBreakTracker.processEnd();
              this.currentAdBreakTracker = undefined;

              // Storing ad data
              this.currentAdBreakData = undefined;
            }

            // Exiting the ad
            this.currentAdTracker = undefined;

            // Storing ad data
            this.currentAdData = undefined;
          }
        }

        // Keep last position for next iteration
        this.lastPosition = currentPosition;

        // If events remaining, continue the tracking
        if ((_this$adData2 = this.adData) !== null && _this$adData2 !== void 0 && _this$adData2.hasRemainingAdBreaks(positionEnd)) {
          if (!this.paused && !this.buffering) {
            this.start();
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking paused (playback paused, onPositionUpdated)', this.handler.id);
          }
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, onPositionUpdated)', this.handler.id);
        }
      } else {
        var _this$adData3;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Processing trackers from ' + positionStart + 'ms to ' + positionEnd + 'ms, resuming tracking...', this.handler.id);
        if ((_this$adData3 = this.adData) !== null && _this$adData3 !== void 0 && _this$adData3.hasRemainingAdBreaks(positionEnd)) {
          if (!this.paused && !this.buffering) {
            this.start();
          }
        }
      }
    }
  }, {
    key: "checkStart",
    value: function checkStart() {
      var _this$adData4;
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.playerAdapter.getPosition();
      // If events remaining, continue the tracking
      if (((_this$adData4 = this.adData) === null || _this$adData4 === void 0 ? void 0 : _this$adData4.hasRemainingAdBreaks(position)) > 0) {
        this.onPositionUpdated(position);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, checkStart)', this.handler.id);
      }
    }
  }, {
    key: "checkAdBreakEnded",
    value: function checkAdBreakEnded(position) {
      var positionStart = this.lastPosition !== position ? this.lastPosition : position - 1;
      var positionEnd = position;
      if (positionStart < positionEnd && positionEnd - positionStart < AdTrackingManager.POSITION_SEEK_ERROR_DELTA /* 2 * AdTrackingManager.POSITION_UPDATE_INTERVAL*/) {
        var _this$adData5;
        // Ad break at the current position
        var adBreakTracker = (_this$adData5 = this.adData) === null || _this$adData5 === void 0 ? void 0 : _this$adData5.adBreaks.find(function (adBreak) {
          return adBreak.position <= positionEnd && positionEnd < adBreak.position + adBreak.duration;
        });
        if (this.currentAdBreakTracker !== undefined) {
          if (adBreakTracker === undefined) {
            if (this.currentAdTracker !== undefined && this.currentAdTracker.position + this.currentAdTracker.duration - positionEnd < AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
              this.currentAdTracker.updateProgression(this.currentAdTracker.position, this.currentAdTracker.position + this.currentAdTracker.duration);
              this.currentAdTracker.processEnd();
              this.currentAdTracker = undefined;

              // Storing ad data
              this.currentAdData = undefined;
            }
            this.currentAdBreakTracker.processEnd();
            this.currentAdBreakTracker = undefined;

            // Storing ad data
            this.currentAdBreakData = undefined;
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad break end detected', this.handler.id);
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad break not yet ended', this.handler.id);
          }
        }
      }
    }
  }, {
    key: "adUserInteraction",
    value: function adUserInteraction(interactionType) {
      var _this$currentAdTracke,
        _this5 = this;
      (_this$currentAdTracke = this.currentAdTracker) === null || _this$currentAdTracke === void 0 || (_this$currentAdTracke = _this$currentAdTracke.clickable) === null || _this$currentAdTracke === void 0 || _this$currentAdTracke.trackers.forEach(function (tracker) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Requesting click tracker ' + tracker.clickurl, _this5.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().adEvent(_this5.handler, tracker.clickurl);
      });
    }
  }, {
    key: "getCurrentAd",
    value: function getCurrentAd() {
      return this.currentAdData;
    }
  }, {
    key: "getCurrentAdBreak",
    value: function getCurrentAdBreak() {
      return this.currentAdBreakData;
    }

    /**
     * Return the current position within the content without ads
     * This position can be saved to be restored later through getPositionForPlayback(positionInBookmark)
     * For VOD contents only
     *
     * @returns {number} Position in the content without ads
     */
  }, {
    key: "getPositionForBookmark",
    value: function getPositionForBookmark() {
      // If vod content (i.e duration > 0)
      var duration = this.playerAdapter.getDuration();
      if (duration > 0) {
        var position = this.playerAdapter.getPosition();

        // If the current position is in an ad break, set bookmark position to the ad break start position (last right position before the ad)
        var currentAdBreak = this.adList.find(function (adBreak) {
          return adBreak.startPosition < position && position <= adBreak.startPosition + adBreak.duration;
        });
        if (currentAdBreak !== undefined) {
          position = currentAdBreak.startPosition;
        }

        // For each ad before the current position, substrate the bookmark position by the ad break duration
        this.adList.filter(function (adBreak) {
          return adBreak.startPosition + adBreak.duration < position;
        }).forEach(function (adBreak) {
          position -= adBreak.duration;
        });
        return position;
      }
      return -1;
    }

    /**
     * Return the position following current ads with the position in the content without ads
     * Can be called after or inside onAdData
     * For VOD contents only
     *
     * @param positionInBookmark position in the content without ad (with the stored value got from the method getPositionForBookmark())
     * @returns {number} Position following current ads
     */
  }, {
    key: "getPositionForPlayback",
    value: function getPositionForPlayback(positionInBookmark) {
      var position = positionInBookmark;

      // Sort ad break by startPosition
      var adList = this.adList.sort(function (a, b) {
        return a.startPosition - b.startPosition;
      });
      for (var i = 0; i < adList.length; i++) {
        var adBreak = adList[i];

        // If the current ad break is after the position, the calculation is done
        if (adBreak.startPosition > position) {
          break;
        }
        if (adBreak.startPosition + adBreak.duration < position || adBreak.startPosition <= position && position <= adBreak.startPosition + adBreak.duration) {
          // If the current ad break is before the position, add the ad break duration
          // If the position is within the current ad break, set the position right after the ad break
          position += adBreak.duration;
        }
      }
      return position;
    }
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      var _this6 = this,
        _this$adPalSession;
      // Init variables
      this.started = true;
      this.paused = false;
      this.buffering = false;
      this.lastPosition = startPosition;
      this.firstImageDate = Date.now();
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ad tracking enabled (live:' + this.isLive() + ')', this.handler.id);

      // Workaround because BkYou not returning vod/live in tracking
      // When accessing the tracking file before opening the manifest (bk-ml=2.0 workflow), we don't know if the content is live or vod
      // In case of live, ad break duration is -1
      if (this.adData !== undefined) {
        this.adList = this.adData.adBreaks.map(function (adBreak) {
          adBreak.live = _this6.isLive();
          return adBreak.toData();
        });
      }

      // Start if necessary
      this.checkStart(startPosition);

      // Update BkYou session
      this.updateBkYouSession();

      // Show error if the content is LIVE but the duration is not a timestamp
      if (this.isLive() && this.playerAdapter.getPosition() < 1262300400000) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.e(TAG, 'The player position does not return a position as a timestamp in millis. The ad tracking might not work.', this.handler.id);
      }

      // Send Google PAK playback end callback
      (_this$adPalSession = this.adPalSession) === null || _this$adPalSession === void 0 || _this$adPalSession.sendPlaybackStart();
    }
  }, {
    key: "onPause",
    value: function onPause() {
      // Stop tracking
      this.paused = true;
      this.stop();

      // Process event at the paused position
      var playerPosition = this.playerAdapter.getPosition();
      if (this.lastPosition !== playerPosition) {
        this.onPositionUpdated(playerPosition);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
      }
      this.lastPosition = playerPosition;
      this.lastPositionBeforePause = this.lastPosition; // if playing ?
    }
  }, {
    key: "onResume",
    value: function onResume() {
      // Start if necessary
      this.paused = false;
      if (!this.buffering) {
        this.lastPosition = this.playerAdapter.getPosition();

        // Handle bad position when resuming
        if (Math.abs(this.lastPosition - this.lastPositionBeforePause) < 1000) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Reverting position because of bad position when resuming...', this.handler.id);
          this.lastPosition = this.lastPositionBeforePause;
          this.lastPositionBeforePause = 0;
        }
        this.checkStart();
      }
    }
  }, {
    key: "onBufferingStart",
    value: function onBufferingStart() {
      // Stop tracking
      this.buffering = true;
      this.stop();

      // Process event at the buffering position
      var playerPosition = this.playerAdapter.getPosition();
      if (this.lastPosition !== playerPosition) {
        this.onPositionUpdated(playerPosition);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
      }
      this.lastPosition = playerPosition;
    }
  }, {
    key: "onBufferingEnd",
    value: function onBufferingEnd(playing) {
      // Start if necessary
      this.buffering = false;
      if (!this.paused) {
        // Sometimes the player is updating its position at buffering end (period switch)
        var playerPosition = this.playerAdapter.getPosition();
        if (this.lastPosition !== playerPosition) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Position updated during buffering, period switch ?', this.handler.id);
          this.onPositionUpdated(playerPosition);
        }

        // Handle position seek between 2 periods (happens on some players)
        /* if (Math.abs(this.lastPosition - this.lastPositionBeforeBuffering) < 1000) {
            LoggerManager.d(TAG, 'Reverting position because of period switch...', this.handler.id);
             this.lastPosition = this.lastPositionBeforeBuffering;
            this.lastPositionBeforeBuffering = 0;
        }*/

        // Handle bad position after seek (happens on some players)
        if (Math.abs(this.lastPosition - this.lastPositionAfterSeek) < 1000) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Reverting position because of seek...', this.handler.id);
          this.lastPosition = this.lastPositionAfterSeek;
          this.lastPositionAfterSeek = 0;
        }
        this.checkStart();
      }
    }
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      var _this$adData7;
      // Don't remember what this is doing...
      //   If buffering, use position from buffering start instead of seek start (fix a player behavior)
      //   If not buffering, this condition will never be true I guess since lastPosition is update every second
      if (start < this.lastPosition && this.lastPosition - start < AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Updating seek start position from ' + start + ' to ' + this.lastPosition, this.handler.id);
        start = this.lastPosition;
      }
      var lastPosition;
      if (this.buffering) {
        // Handle bad position when seeking when onBufferingEnd is called
        // When buffering end, set this.lastPosition to the end seek position
        this.lastPositionAfterSeek = end;

        // Setting to buffering start, last position is updated in start buffering event
        lastPosition = this.lastPosition;
      } else {
        // If not buffering, process events before seeking
        if (Math.abs(this.lastPosition - start) < AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
          this.onPositionUpdated(start);
          this.lastPosition = start;
        }

        // Setting to start because if update process is not running, last position can be way back in the past
        // For instance seek to a buffered position
        lastPosition = start;
        this.lastPositionAfterSeek = 0;
      }

      // Update tracking position
      this.lastPosition = end;

      // Handle seek during period switch, the player can generate small seek (< 6 secs) and it has to be ignored and not counted as a user seek
      if (Math.abs(end - start) < AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Seek detected, proceeding events...', this.handler.id);

        // Ignore seek backward if < 2 seconds (period switch error)
        if (end < start && start - end < 2000) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Ignoring seek...', this.handler.id);
          this.lastPosition = start;
          this.onPositionUpdated(start);
          return;
        }

        // Get positions
        var startSeekPosition;
        var endSeekPosition;
        if (start < end) {
          // seek forward
          startSeekPosition = lastPosition;
          endSeekPosition = end;
        } else {
          // seek backward
          startSeekPosition = end;
          endSeekPosition = lastPosition < start ? start : lastPosition;
        }

        // Seek backward while not playing an ad, do not process all trackers from end to start
        // Because the whole ad will be proceeded
        if (end - start < 0 /* && this.currentAdTracker === undefined*/) {
          endSeekPosition = end;
        }

        // Process all events between start and end
        for (var i = startSeekPosition; i <= endSeekPosition; i += AdTrackingManager.POSITION_UPDATE_INTERVAL) {
          var position = Math.min(i + AdTrackingManager.POSITION_UPDATE_INTERVAL, endSeekPosition);
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Between ' + i + ' and ' + position, this.handler.id);
          this.lastPosition = i;
          this.onPositionUpdated(position);
        }
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Seek processed start:' + startSeekPosition + ' end:' + endSeekPosition, this.handler.id);
        if (end - start < 0) {
          var _this$adData6;
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + endSeekPosition, this.handler.id);
          (_this$adData6 = this.adData) === null || _this$adData6 === void 0 || _this$adData6.resetProgression(endSeekPosition);
        }
        return;
      }

      // Seek from inside to inside an ad break
      var previousAdTracker = this.currentAdTracker;
      if (previousAdTracker !== undefined) {
        this.notifyAdSkipped(this.adData.sessionToken, this.currentAdTracker);
      }

      // Process event at the seeked position
      this.onPositionUpdated(end);

      // Reset progression
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + end, this.handler.id);
      (_this$adData7 = this.adData) === null || _this$adData7 === void 0 || _this$adData7.resetProgression(end);
    }
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      var _this$adPalSession2;
      // Stop tracking
      this.stop();

      // Process event at the stop position
      this.lastPosition = this.playerAdapter.getPosition();
      this.onPositionUpdated(this.lastPosition);

      // Stop ad tracking
      this.stop();

      // Stop session update
      if (this.updateSessionJob !== undefined) {
        _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().cancel(this.updateSessionJob);
      }

      // Send Google PAK playback end callback
      (_this$adPalSession2 = this.adPalSession) === null || _this$adPalSession2 === void 0 || _this$adPalSession2.sendPlaybackEnd();
    }
  }, {
    key: "addListener",
    value: function addListener(listener) {
      if (listener !== undefined && !this.listeners.includes(listener)) {
        this.listeners.push(listener);
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(listener) {
      var index = this.listeners.indexOf(listener);
      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    }
  }, {
    key: "notifyEvent",
    value: function notifyEvent(listener, eventName, arg1, arg2, arg3, arg4) {
      if (typeof listener[eventName] === 'function') {
        listener[eventName](arg1, arg2, arg3, arg4);
      }
    }
  }, {
    key: "notifyAdBreakData",
    value: function notifyAdBreakData(adBreakData) {
      var _this7 = this;
      this.listeners.forEach(function (listener) {
        _this7.notifyEvent(listener, 'onAdBreakData', adBreakData);
      });
    }
  }, {
    key: "notifyAdBreakBegin",
    value: function notifyAdBreakBegin(sessionToken) {
      var _this8 = this;
      this.listeners.forEach(function (listener) {
        _this8.notifyEvent(listener, 'onAdBreakBegin', sessionToken);
      });
    }
  }, {
    key: "notifyAdData",
    value: function notifyAdData(ad) {
      var _this9 = this;
      this.listeners.forEach(function (listener) {
        _this9.notifyEvent(listener, 'onAdData', ad);
      });
    }
  }, {
    key: "notifyAdBegin",
    value: function notifyAdBegin(sessionToken, ad) {
      var _this10 = this,
        _this$adPalSession3;
      this.listeners.forEach(function (listener) {
        _this10.notifyEvent(listener, 'onAdBegin', sessionToken, ad.creativeId, ad.adId);
      });

      // Send Google PAK ad impression callback
      (_this$adPalSession3 = this.adPalSession) === null || _this$adPalSession3 === void 0 || _this$adPalSession3.sendAdImpression();
    }
  }, {
    key: "notifyAdSkippable",
    value: function notifyAdSkippable(sessionToken) {
      var _this11 = this;
      this.listeners.forEach(function (listener) {
        _this11.notifyEvent(listener, 'onAdSkippable', sessionToken);
      });
    }
  }, {
    key: "notifyAdProgress",
    value: function notifyAdProgress(sessionToken, ad, progress) {
      var _this12 = this;
      this.listeners.forEach(function (listener) {
        _this12.notifyEvent(listener, 'onAdProgress', sessionToken, ad.creativeId, ad.adId, progress);
      });
    }
  }, {
    key: "notifyAdSkipped",
    value: function notifyAdSkipped(sessionToken, ad) {
      var _this13 = this;
      var otherSkippedAdIds = [];
      ad.adBreak.ads.forEach(function (e) {
        // check if other ads were skipped following the current one
        if (e.position > ad.position && e.position < _this13.lastPosition) {
          otherSkippedAdIds.push(e.adId);
        }
      });
      this.listeners.forEach(function (listener) {
        _this13.notifyEvent(listener, 'onAdSkipped', sessionToken, ad.creativeId, ad.adId, otherSkippedAdIds);
      });
    }
  }, {
    key: "notifyAdEnd",
    value: function notifyAdEnd(sessionToken, ad) {
      var _this14 = this;
      // Force session update at ad end (useful for small segment contents)
      if (this.isLive()) {
        if (this.updateSessionJob !== undefined) {
          _service_JobManager__WEBPACK_IMPORTED_MODULE_16__["default"].getInstance().cancel(this.updateSessionJob);
        }
        this.updateBkYouSession();
      }
      this.listeners.forEach(function (listener) {
        _this14.notifyEvent(listener, 'onAdEnd', sessionToken, ad.creativeId, ad.adId);
      });
    }
  }, {
    key: "notifyAdBreakEnd",
    value: function notifyAdBreakEnd(sessionToken) {
      var _this15 = this;
      this.listeners.forEach(function (listener) {
        _this15.notifyEvent(listener, 'onAdBreakEnd', sessionToken);
      });
    }
  }, {
    key: "notifyAdsUpdated",
    value: function notifyAdsUpdated(adData) {
      var _this16 = this;
      this.listeners.forEach(function (listener) {
        _this16.notifyEvent(listener, 'onAdsUpdated', adData);
      });
    }

    /**
     * Trigger event onAdData registered through session.setAdDataListener(...)
     * If data are already sent, do not send it twice
     */
  }, {
    key: "notifyAdDataListener",
    value: function notifyAdDataListener(dataUpdated) {
      var firstImageDate = this.firstImageDate || Date.now();
      var firstData = this.podsSentNumber === 0 && this.firstFileProceeded === false && Date.now() - firstImageDate <= 4000;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'On ad data (firstData: ' + firstData + ', dataUpdated: ' + dataUpdated + ')', this.handler.id);
      if (firstData === true || dataUpdated === true) {
        var _this$handler$adSessi;
        this.podsSentNumber = this.adList.length;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'On ad data (length: ' + this.podsSentNumber + ')', this.handler.id);
        (_this$handler$adSessi = this.handler.adSession) === null || _this$handler$adSessi === void 0 || (_this$handler$adSessi = _this$handler$adSessi.adDataListener) === null || _this$handler$adSessi === void 0 || _this$handler$adSessi.onAdData(this.adList);
      }
    }
  }]);
  return AdTrackingManager;
}();
_defineProperty(AdTrackingManager, "POSITION_UPDATE_INTERVAL", 1000);
_defineProperty(AdTrackingManager, "POSITION_SEEK_ERROR_DELTA", 6000);
_defineProperty(AdTrackingManager, "SESSION_UPDATE_INTERVAL", 5000);


/***/ }),

/***/ "./src_core/index.ad.js":
/*!******************************!*\
  !*** ./src_core/index.ad.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdBreakTracker: function() { return /* reexport safe */ _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdBreakTracker; },
/* harmony export */   AdDataTracker: function() { return /* reexport safe */ _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdDataTracker; },
/* harmony export */   AdEventTracker: function() { return /* reexport safe */ _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdEventTracker; },
/* harmony export */   AdFriendlyObstructionPurpose: function() { return /* reexport safe */ _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdFriendlyObstructionPurpose; },
/* harmony export */   AdManager: function() { return /* reexport safe */ _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdManager; },
/* harmony export */   AdMetrics: function() { return /* reexport safe */ _ad_metrics_AdMetrics__WEBPACK_IMPORTED_MODULE_0__.AdMetrics; },
/* harmony export */   AdMetricsBuilder: function() { return /* reexport safe */ _ad_metrics_AdMetrics__WEBPACK_IMPORTED_MODULE_0__.AdMetricsBuilder; },
/* harmony export */   AdMetricsManager: function() { return /* reexport safe */ _ad_metrics_AdMetricsManager__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   AdSession: function() { return /* reexport safe */ _ad_AdSession__WEBPACK_IMPORTED_MODULE_5__.AdSession; },
/* harmony export */   AdTracker: function() { return /* reexport safe */ _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdTracker; },
/* harmony export */   AdTrackingManager: function() { return /* reexport safe */ _ad_tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   AdViewState: function() { return /* reexport safe */ _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdViewState; },
/* harmony export */   InternalAdManager: function() { return /* reexport safe */ _ad_InternalAdManager__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   OMSDKManager: function() { return /* reexport safe */ _plugins_omsdk_OMSDKManager__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   OMSessionHandler: function() { return /* reexport safe */ _plugins_omsdk_OMSessionHandler__WEBPACK_IMPORTED_MODULE_8__["default"]; }
/* harmony export */ });
/* harmony import */ var _ad_metrics_AdMetrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad/metrics/AdMetrics */ "./src_core/ad/metrics/AdMetrics.js");
/* harmony import */ var _ad_metrics_AdMetricsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad/metrics/AdMetricsManager */ "./src_core/ad/metrics/AdMetricsManager.js");
/* harmony import */ var _ad_tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ad/tracking/AdTrackingManager */ "./src_core/ad/tracking/AdTrackingManager.js");
/* harmony import */ var _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ad/tracking/AdTracker */ "./src_core/ad/tracking/AdTracker.js");
/* harmony import */ var _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ad/AdManager */ "./src_core/ad/AdManager.js");
/* harmony import */ var _ad_AdSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ad/AdSession */ "./src_core/ad/AdSession.js");
/* harmony import */ var _ad_InternalAdManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ad/InternalAdManager */ "./src_core/ad/InternalAdManager.js");
/* harmony import */ var _plugins_omsdk_OMSDKManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/omsdk/OMSDKManager */ "./src_core/plugins/omsdk/OMSDKManager.js");
/* harmony import */ var _plugins_omsdk_OMSessionHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/omsdk/OMSessionHandler */ "./src_core/plugins/omsdk/OMSessionHandler.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SmartLib */ "./src_core/SmartLib.js");










_SmartLib__WEBPACK_IMPORTED_MODULE_9__["default"].adModule = {
  AdMetrics: _ad_metrics_AdMetrics__WEBPACK_IMPORTED_MODULE_0__.AdMetrics,
  AdMetricsBuilder: _ad_metrics_AdMetrics__WEBPACK_IMPORTED_MODULE_0__.AdMetricsBuilder,
  AdMetricsManager: _ad_metrics_AdMetricsManager__WEBPACK_IMPORTED_MODULE_1__["default"],
  AdTrackingManager: _ad_tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_2__["default"],
  AdDataTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdDataTracker,
  AdBreakTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdBreakTracker,
  AdTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdTracker,
  AdEventTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdEventTracker,
  AdManager: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdManager,
  AdViewState: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdViewState,
  AdFriendlyObstructionPurpose: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdFriendlyObstructionPurpose,
  AdSession: _ad_AdSession__WEBPACK_IMPORTED_MODULE_5__.AdSession,
  InternalAdManager: _ad_InternalAdManager__WEBPACK_IMPORTED_MODULE_6__["default"],
  OMSDKManager: _plugins_omsdk_OMSDKManager__WEBPACK_IMPORTED_MODULE_7__["default"],
  OMSessionHandler: _plugins_omsdk_OMSessionHandler__WEBPACK_IMPORTED_MODULE_8__["default"]
};


/***/ }),

/***/ "./src_core/plugins/omsdk/OMSDKManager.js":
/*!************************************************!*\
  !*** ./src_core/plugins/omsdk/OMSDKManager.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OMSDKManager; }
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

var TAG = 'BpkOMSDKMgr';
var OMSDKHandler = /*#__PURE__*/function () {
  function OMSDKHandler() {
    _classCallCheck(this, OMSDKHandler);
  }
  _createClass(OMSDKHandler, [{
    key: "createOMAdSession",
    value:
    // eslint-disable-line no-unused-vars
    function createOMAdSession(partnerName, partnerVersion, customReferenceData, verificationData) {}
  }]);
  return OMSDKHandler;
}();
var OMSDKManager = /*#__PURE__*/function () {
  function OMSDKManager() {
    _classCallCheck(this, OMSDKManager);
    _defineProperty(this, "smartLib", void 0);
  }

  /* init(smartLib) {
      LoggerManager.d(TAG, 'Initializing OM SDK manager...');
       this.smartLib = smartLib;
  }
   release() {
   }*/
  _createClass(OMSDKManager, [{
    key: "init",
    value: function init() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Initializing OM SDK manager...');
    }
  }, {
    key: "release",
    value: function release() {}
  }, {
    key: "attachInstance",
    value: function attachInstance(smartLib) {
      this.smartLib = smartLib;
    }
  }, {
    key: "attachHandler",
    value: function attachHandler(omsdkHandler) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_6__.LoggerManager.d(TAG, 'Attaching OM SDK handler...');
      this.omsdkHandler = omsdkHandler;
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.omsdkHandler !== undefined && this.omsdkHandler !== null;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_classStaticPrivateFieldSpecGet(OMSDKManager, OMSDKManager, _instance)) {
        _classStaticPrivateFieldSpecSet(OMSDKManager, OMSDKManager, _instance, new OMSDKManager());
      }
      return _classStaticPrivateFieldSpecGet(OMSDKManager, OMSDKManager, _instance);
    }
  }]);
  return OMSDKManager;
}();
var _instance = {
  writable: true,
  value: void 0
};


/***/ }),

/***/ "./src_core/plugins/omsdk/OMSessionHandler.js":
/*!****************************************************!*\
  !*** ./src_core/plugins/omsdk/OMSessionHandler.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OMSessionHandler; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _OMSDKManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./OMSDKManager */ "./src_core/plugins/omsdk/OMSDKManager.js");

















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TAG = 'BpkOMSessionHandler';
var OMSessionHandler = /*#__PURE__*/function () {
  function OMSessionHandler(handler, playerAdapter) {
    _classCallCheck(this, OMSessionHandler);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "adSession", void 0);
    _defineProperty(this, "playerAdapter", void 0);
    _defineProperty(this, "internalAdManager", void 0);
    _defineProperty(this, "omsdkHandler", void 0);
    _defineProperty(this, "omAdSession", void 0);
    _defineProperty(this, "firstImageDate", void 0);
    _defineProperty(this, "adBreakPosition", void 0);
    _defineProperty(this, "pause", void 0);
    _defineProperty(this, "buffering", void 0);
    this.handler = handler;
    this.adSession = handler.adSession;
    this.playerAdapter = playerAdapter;
    this.internalAdManager = this.handler.smartLib.internalAdManager;
    this.omsdkHandler = _OMSDKManager__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().omsdkHandler;
    this.firstImageDate = 0;
    this.adBreakPosition = 'midroll';
    this.pause = false;
    this.buffering = false;
  }
  _createClass(OMSessionHandler, [{
    key: "onStart",
    value: function onStart() {}
  }, {
    key: "onRedirectionEnd",
    value: function onRedirectionEnd() {}
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      this.firstImageDate = Date.now();
    }
  }, {
    key: "onLayerSwitch",
    value: function onLayerSwitch(bitrate) {}
  }, {
    key: "onPause",
    value: function onPause() {
      if (this.pause === false) {
        var _this$omAdSession;
        (_this$omAdSession = this.omAdSession) === null || _this$omAdSession === void 0 || _this$omAdSession.pause();
      }
      this.pause = true;
    }
  }, {
    key: "onResume",
    value: function onResume() {
      if (this.pause === true) {
        var _this$omAdSession2;
        (_this$omAdSession2 = this.omAdSession) === null || _this$omAdSession2 === void 0 || _this$omAdSession2.resume();
      }
      this.pause = false;
    }
  }, {
    key: "onBufferingStart",
    value: function onBufferingStart() {
      if (this.buffering === false) {
        var _this$omAdSession3;
        (_this$omAdSession3 = this.omAdSession) === null || _this$omAdSession3 === void 0 || _this$omAdSession3.bufferStart();
      }
      this.buffering = true;
    }
  }, {
    key: "onBufferingEnd",
    value: function onBufferingEnd(isPlaying) {
      if (this.buffering === true) {
        var _this$omAdSession4;
        (_this$omAdSession4 = this.omAdSession) === null || _this$omAdSession4 === void 0 || _this$omAdSession4.bufferFinish();
      }
      this.buffering = false;
    }
  }, {
    key: "onStallEnd",
    value: function onStallEnd() {}
  }, {
    key: "onRebufferingEnd",
    value: function onRebufferingEnd() {}
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      if (this.adData !== undefined && Math.abs(end - start) >= 1000) {
        if (end >= this.adData.position + this.adData.duration || end < this.adData.position) {
          var _this$omAdSession5;
          (_this$omAdSession5 = this.omAdSession) === null || _this$omAdSession5 === void 0 || _this$omAdSession5.skipped();
        }
      }
    }
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      this.adData = undefined;
      if (this.omAdSession !== undefined) {
        this.omAdSession.finish();
        this.omAdSession = undefined;
      }
      this.adBreakPosition = 'midroll';
    }
  }, {
    key: "onStartSessionReportUpdateRequested",
    value: function onStartSessionReportUpdateRequested(sessionReport) {}
  }, {
    key: "onKeepaliveSessionReportUpdateRequested",
    value: function onKeepaliveSessionReportUpdateRequested(sessionReport) {}
  }, {
    key: "onEndSessionReportUpdateRequested",
    value: function onEndSessionReportUpdateRequested(sessionReport) {}
  }, {
    key: "onAdBreakData",
    value: function onAdBreakData(adBreakTracker) {
      if (Math.abs(adBreakTracker.position + adBreakTracker.duration - this.playerAdapter.getDuration()) < 10000) {
        this.adBreakPosition = 'postroll';
      } else if (Date.now() - this.firstImageDate < 3000) {
        this.adBreakPosition = 'preroll';
      } else {
        this.adBreakPosition = 'midroll';
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad break position is ' + this.adBreakPosition, this.handler.id);
    }
  }, {
    key: "onAdBreakBegin",
    value: function onAdBreakBegin(sessionToken) {}
  }, {
    key: "onAdData",
    value: function onAdData(adData) {
      var _this$adSession,
        _this$adSession2,
        _this$adSession3,
        _this$adSession4,
        _this = this,
        _this$adSession5;
      // LoggerManager.e(TAG, 'ad data=' + JSON.stringify(adData), this.handler.id);

      if (this.adData !== undefined) {
        var _this$omAdSession6;
        // skip ? + session finish
        // this.omAdSession?.skipped();
        (_this$omAdSession6 = this.omAdSession) === null || _this$omAdSession6 === void 0 || _this$omAdSession6.finish();
        this.omAdSession = undefined;
      }
      this.adData = adData;

      // Build ad verification data
      var adVerificationData;
      if (((_this$adSession = this.adSession) === null || _this$adSession === void 0 ? void 0 : _this$adSession.adVerificationData) !== undefined) {
        adVerificationData = _toConsumableArray(this.adSession.adVerificationData);
      } else {
        adVerificationData = [];
      }
      this.adData.verifications.forEach(function (verification) {
        var javascriptResources = verification.javascriptResources.find(function (resource) {
          return resource.apiframework === 'omid';
        });
        adVerificationData.push({
          verificationVendor: verification.vendor,
          verificationURL: javascriptResources.url,
          verificationParameters: verification.verificationParameters
        });
      });

      // Create ad session
      this.omAdSession = this.omsdkHandler.createOMAdSession(this.internalAdManager.omPartnerName, this.internalAdManager.omPartnerVersion, (_this$adSession2 = this.adSession) === null || _this$adSession2 === void 0 ? void 0 : _this$adSession2.adCustomReference, adVerificationData);

      // Set the ad view if it has been registered before the ad break
      if (((_this$adSession3 = this.adSession) === null || _this$adSession3 === void 0 ? void 0 : _this$adSession3.adView) !== undefined) {
        this.omAdSession.setAdView(this.adSession.adView);
      }
      if (((_this$adSession4 = this.adSession) === null || _this$adSession4 === void 0 ? void 0 : _this$adSession4.adFriendlyObstructionViews.length) > 0) {
        this.adSession.adFriendlyObstructionViews.forEach(function (item) {
          _this.omAdSession.registerAdFriendlyObstructionView(item.view, item.purpose, item.reason);
        });
      }
      this.omAdSession.start();

      // Set the ad view state if it has been registered before the ad break
      if (((_this$adSession5 = this.adSession) === null || _this$adSession5 === void 0 ? void 0 : _this$adSession5.adViewState) !== undefined) {
        this.omAdSession.setAdViewState(this.adSession.adViewState);
      }
      if (adData.skippable === true) {
        this.omAdSession.loaded(adData.skippablePosition - adData.position, adData.duration, this.adBreakPosition, this.playerAdapter.getVolume());
      } else {
        this.omAdSession.loaded(-1, adData.duration, this.adBreakPosition, this.playerAdapter.getVolume());
      }
    }
  }, {
    key: "onAdBegin",
    value: function onAdBegin(sessionToken, creativeId, adId) {}
  }, {
    key: "onAdSkippable",
    value: function onAdSkippable(sessionToken) {}
  }, {
    key: "onAdProgress",
    value: function onAdProgress(sessionToken, creativeId, adId, progress) {
      var _this$omAdSession7;
      (_this$omAdSession7 = this.omAdSession) === null || _this$omAdSession7 === void 0 || _this$omAdSession7.progress(progress);
    }
  }, {
    key: "onAdEnd",
    value: function onAdEnd(sessionToken, creativeId, adId) {
      var _this$omAdSession8;
      this.adData = undefined;
      (_this$omAdSession8 = this.omAdSession) === null || _this$omAdSession8 === void 0 || _this$omAdSession8.finish();
      this.omAdSession = undefined;
    }
  }, {
    key: "onAdBreakEnd",
    value: function onAdBreakEnd(sessionToken) {
      this.adData = undefined;
      if (this.omAdSession !== undefined) {
        this.omAdSession.finish();
        this.omAdSession = undefined;
      }
      this.adBreakPosition = 'midroll';
    }
  }, {
    key: "onVolumeChanged",
    value: function onVolumeChanged(volume) {
      var _this$omAdSession9;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Volume is now ' + volume, this.handler.id);
      (_this$omAdSession9 = this.omAdSession) === null || _this$omAdSession9 === void 0 || _this$omAdSession9.volumeChange(volume);
    }
  }, {
    key: "onPlayerError",
    value: function onPlayerError(broadpeakStatusCode, playerErrorCode) {
      var _this$omAdSession10;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.e(TAG, 'Broadpeak status code ' + broadpeakStatusCode, this.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.e(TAG, 'Player error code ' + playerErrorCode, this.handler.id);
      (_this$omAdSession10 = this.omAdSession) === null || _this$omAdSession10 === void 0 || _this$omAdSession10.error(broadpeakStatusCode, playerErrorCode);
    }
  }]);
  return OMSessionHandler;
}();


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = (__webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = (__webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["analytics"], function() { return __webpack_exec__("./src_core/index.ad.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWQuc21hcnRsaWIuYnJvd3Nlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQkFBZ0IscURBQXFEO0FBQ3RFLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVk8sSUFBTUEsR0FBRyxHQUFHLGNBQWM7QUFFMUIsSUFBTUMsU0FBUztFQXVCbEIsU0FBQUEsVUFBQSxFQUFpQztJQUFBLElBQXJCQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHRSxTQUFTO0lBQUFDLGVBQUEsT0FBQUwsU0FBQTtJQUFBTSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFDM0IsSUFBSUwsT0FBTyxLQUFLRyxTQUFTLEVBQUU7TUFDdkIsSUFBSSxDQUFDRyxXQUFXLEdBQUcsS0FBSztNQUN4QixJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO01BQ3RCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztNQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBRyxDQUFDO01BQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHLENBQUM7TUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsQ0FBQztNQUN2QixJQUFJLENBQUNDLG1CQUFtQixHQUFHLENBQUM7TUFDNUIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsQ0FBQztNQUN2QixJQUFJLENBQUNDLFlBQVksR0FBRyxFQUFFO01BQ3RCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7TUFDcEIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsRUFBRTtJQUNsQixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNWLFdBQVcsR0FBR04sT0FBTyxDQUFDTSxXQUFXO01BQ3RDLElBQUksQ0FBQ0MsU0FBUyxHQUFHUCxPQUFPLENBQUNPLFNBQVM7TUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUdSLE9BQU8sQ0FBQ1EsVUFBVTtNQUNwQyxJQUFJLENBQUNDLFVBQVUsR0FBR1QsT0FBTyxDQUFDUyxVQUFVO01BQ3BDLElBQUksQ0FBQ0MsWUFBWSxHQUFHVixPQUFPLENBQUNVLFlBQVk7TUFDeEMsSUFBSSxDQUFDQyxjQUFjLEdBQUdYLE9BQU8sQ0FBQ1csY0FBYztNQUM1QyxJQUFJLENBQUNDLG1CQUFtQixHQUFHWixPQUFPLENBQUNZLG1CQUFtQjtNQUN0RCxJQUFJLENBQUNDLGNBQWMsR0FBR2IsT0FBTyxDQUFDYSxjQUFjO01BQzVDLElBQUksQ0FBQ0MsWUFBWSxHQUFHZCxPQUFPLENBQUNjLFlBQVk7TUFDeEMsSUFBSSxDQUFDQyxVQUFVLEdBQUdmLE9BQU8sQ0FBQ2UsVUFBVTtNQUNwQyxJQUFJLENBQUNDLElBQUksR0FBR2hCLE9BQU8sQ0FBQ2dCLElBQUk7SUFDNUI7RUFDSjtFQUFDQyxZQUFBLENBQUFsQixTQUFBO0lBQUFtQixHQUFBO0lBQUFDLEtBQUEsRUFxQ0QsU0FBQUMsU0FBQSxFQUFXO01BQ1AsT0FBTyxrQkFBa0IsR0FBRyxJQUFJLENBQUNkLFdBQVcsR0FDeEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQyxTQUFTLEdBQ2pDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0MsVUFBVSxHQUNuQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNDLFVBQVUsR0FDbkMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDQyxZQUFZLEdBQ3ZDLHFCQUFxQixHQUFHLElBQUksQ0FBQ0MsY0FBYyxHQUMzQywwQkFBMEIsR0FBRyxJQUFJLENBQUNDLG1CQUFtQixHQUNyRCxxQkFBcUIsR0FBRyxJQUFJLENBQUNDLGNBQWMsR0FDM0Msb0JBQW9CLEdBQUcsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxHQUMvQyxrQkFBa0IsR0FBRyxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLEdBQzNDLFlBQVksR0FBRyxJQUFJLENBQUNDLElBQUksR0FBRyxNQUFNO0lBQ3pDO0VBQUM7SUFBQUUsR0FBQTtJQUFBQyxLQUFBLEVBL0NELFNBQUFFLE1BQWFDLElBQUksRUFBRTtNQUNmLElBQUlBLElBQUksS0FBS25CLFNBQVMsSUFBSW1CLElBQUksQ0FBQ3BCLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdkMsSUFBTXFCLGFBQWEsR0FBRyxJQUFJeEIsU0FBUyxFQUFFO1FBQ3JDLElBQU15QixXQUFXLEdBQUdGLElBQUksQ0FBQ0EsSUFBSSxDQUFDcEIsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV6Q3FCLGFBQWEsQ0FBQ2pCLFdBQVcsR0FBR2tCLFdBQVcsQ0FBQ2xCLFdBQVc7UUFDbkRpQixhQUFhLENBQUNoQixTQUFTLEdBQUdpQixXQUFXLENBQUNqQixTQUFTO1FBQy9DZ0IsYUFBYSxDQUFDZixVQUFVLEdBQUdnQixXQUFXLENBQUNoQixVQUFVO1FBQ2pEZSxhQUFhLENBQUNULFlBQVksR0FBR1UsV0FBVyxDQUFDVixZQUFZO1FBQ3JEUyxhQUFhLENBQUNSLFVBQVUsR0FBR1MsV0FBVyxDQUFDVCxVQUFVO1FBQ2pEUSxhQUFhLENBQUNQLElBQUksR0FBR1EsV0FBVyxDQUFDUixJQUFJO1FBRXJDLElBQUlTLGdCQUFnQixHQUFHLENBQUM7UUFDeEIsSUFBSUMsYUFBYSxHQUFHLENBQUM7UUFDckIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdMLElBQUksQ0FBQ3BCLE1BQU0sRUFBR3lCLENBQUMsRUFBRSxFQUFFO1VBQ3BDLElBQU1DLFNBQVMsR0FBR04sSUFBSSxDQUFDSyxDQUFDLENBQUM7VUFDekJKLGFBQWEsQ0FBQ2QsVUFBVSxJQUFJbUIsU0FBUyxDQUFDbkIsVUFBVTtVQUNoRGMsYUFBYSxDQUFDYixZQUFZLElBQUlrQixTQUFTLENBQUNsQixZQUFZO1VBQ3BEYSxhQUFhLENBQUNaLGNBQWMsSUFBSWlCLFNBQVMsQ0FBQ2pCLGNBQWM7VUFDeERZLGFBQWEsQ0FBQ1gsbUJBQW1CLElBQUlnQixTQUFTLENBQUNoQixtQkFBbUI7VUFFbEVhLGdCQUFnQixJQUFJRyxTQUFTLENBQUNmLGNBQWMsR0FBR2UsU0FBUyxDQUFDbkIsVUFBVTtVQUNuRWlCLGFBQWEsSUFBSUUsU0FBUyxDQUFDbkIsVUFBVTtRQUN6QztRQUVBLElBQUlpQixhQUFhLEtBQUssQ0FBQyxFQUFFO1VBQ3JCSCxhQUFhLENBQUNWLGNBQWMsR0FBR2dCLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxnQkFBZ0IsR0FBR0MsYUFBYSxDQUFDO1FBQy9FO1FBRUEsT0FBT0gsYUFBYTtNQUN4QjtNQUVBLE9BQU9wQixTQUFTO0lBQ3BCO0VBQUM7RUFBQSxPQUFBSixTQUFBO0FBQUE7QUFpQkUsSUFBTWdDLGdCQUFnQjtFQU96QixTQUFBQSxpQkFBQSxFQUF5RjtJQUFBLElBQTdFSCxTQUFTLEdBQUEzQixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR0UsU0FBUztJQUFBLElBQUU2QixpQkFBaUIsR0FBQS9CLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHRSxTQUFTO0lBQUEsSUFBRThCLFNBQVMsR0FBQWhDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHRSxTQUFTO0lBQUFDLGVBQUEsT0FBQTJCLGdCQUFBO0lBQUExQixlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUNuRixJQUFJdUIsU0FBUyxLQUFLekIsU0FBUyxJQUFJNkIsaUJBQWlCLEtBQUs3QixTQUFTLElBQUk4QixTQUFTLEtBQUs5QixTQUFTLEVBQUU7TUFDdkYsSUFBSSxDQUFDNkIsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUMsQ0FBQztNQUNuQixJQUFJLENBQUNDLEtBQUssRUFBRTtJQUNoQixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNOLFNBQVMsR0FBR0EsU0FBUztNQUMxQixJQUFJLENBQUNJLGlCQUFpQixHQUFHQSxpQkFBaUI7TUFDMUMsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7SUFDOUI7RUFDSjtFQUFDaEIsWUFBQSxDQUFBYyxnQkFBQTtJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0IsUUFBT1AsU0FBUyxFQUFFO01BQ2QsSUFBSUEsU0FBUyxLQUFLekIsU0FBUyxFQUFFO1FBQ3pCLElBQUksQ0FBQ3lCLFNBQVMsR0FBR0EsU0FBUztRQUMxQixJQUFJLENBQUNJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUNBLGlCQUFpQixDQUFDSixTQUFTLENBQUNmLGNBQWMsQ0FBQyxHQUFHZSxTQUFTLENBQUNuQixVQUFVO1FBQ3ZFLElBQUksQ0FBQ3dCLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLElBQUtDLFNBQVMsQ0FBQ3BCLFVBQVUsR0FBRyxFQUFHLEVBQUdtQixDQUFDLEVBQUUsRUFBRTtVQUNyRCxJQUFJLENBQUNNLFNBQVMsQ0FBQ04sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUk7UUFDakM7TUFDSjtNQUVBLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlCLGVBQWVqQixLQUFLLEVBQUU7TUFDbEIsSUFBSSxDQUFDUyxTQUFTLENBQUN0QixXQUFXLEdBQUdhLEtBQUs7TUFFbEMsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0IsYUFBYWxCLEtBQUssRUFBRTtNQUNoQixJQUFJLENBQUNTLFNBQVMsQ0FBQ3JCLFNBQVMsR0FBR1ksS0FBSztNQUVoQyxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUFELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtQixZQUFZbkIsS0FBSyxFQUFFO01BQ2YsSUFBSSxDQUFDYyxTQUFTLENBQUNkLEtBQUssQ0FBQyxHQUFHLElBQUk7TUFDNUIsSUFBSSxDQUFDUyxTQUFTLENBQUNwQixVQUFVLEdBQUcrQixNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNQLFNBQVMsQ0FBQyxDQUFDL0IsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFOztNQUV4RTs7TUFFQSxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUFnQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0IsZ0JBQWdCdEIsS0FBSyxFQUFFO01BQ25CLElBQUksQ0FBQ1MsU0FBUyxDQUFDZCxZQUFZLEdBQUdLLEtBQUs7TUFFbkMsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUIsY0FBY3ZCLEtBQUssRUFBRTtNQUNqQixJQUFJLENBQUNTLFNBQVMsQ0FBQ2IsVUFBVSxHQUFHSSxLQUFLO01BRWpDLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdCLFFBQVF4QixLQUFLLEVBQUU7TUFDWCxJQUFJLENBQUNTLFNBQVMsQ0FBQ1osSUFBSSxHQUFHRyxLQUFLO01BRTNCLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlCLHFCQUFxQkMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7TUFDcENELE9BQU8sR0FBR2hCLElBQUksQ0FBQ0MsS0FBSyxDQUFDZSxPQUFPLENBQUM7TUFFN0IsSUFBSUEsT0FBTyxHQUFHLENBQUMsRUFBRTtRQUNiLElBQUlFLGdCQUFnQixHQUFHLElBQUksQ0FBQ2YsaUJBQWlCLENBQUNhLE9BQU8sQ0FBQztRQUN0RCxJQUFJRSxnQkFBZ0IsS0FBSzVDLFNBQVMsRUFBRTtVQUNoQyxJQUFJLENBQUM2QixpQkFBaUIsQ0FBQ2EsT0FBTyxDQUFDLElBQUlDLFFBQVE7UUFDL0MsQ0FBQyxNQUFNO1VBQ0gsSUFBSSxDQUFDZCxpQkFBaUIsQ0FBQ2EsT0FBTyxDQUFDLEdBQUdDLFFBQVE7UUFDOUM7TUFDSjtNQUVBLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQTVCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2QixlQUFBLEVBQWlCO01BQ2IsSUFBSSxDQUFDcEIsU0FBUyxDQUFDaEIsbUJBQW1CLEVBQUU7TUFFcEMsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBOEIsU0FBU0gsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDbEIsU0FBUyxDQUFDbEIsWUFBWSxFQUFFO01BQzdCLElBQUksQ0FBQ2tCLFNBQVMsQ0FBQ2pCLGNBQWMsSUFBSW1DLFFBQVE7TUFFekMsT0FBTyxJQUFJO0lBQ2Y7RUFBQztJQUFBNUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWUsTUFBQSxFQUFRO01BQ0osSUFBSSxDQUFDTixTQUFTLEdBQUcsSUFBSTdCLFNBQVMsRUFBRTtNQUNoQyxJQUFJLENBQUNpQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO01BRW5CLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQWYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStCLE1BQUEsRUFBUTtNQUNKLE9BQU8sSUFBSW5CLGdCQUFnQixDQUFDLElBQUloQyxTQUFTLENBQUMsSUFBSSxDQUFDNkIsU0FBUyxDQUFDLEVBQUVXLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ25CLGlCQUFpQixDQUFDLEVBQUVPLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQyxDQUFDO0lBQzVJO0VBQUM7SUFBQWYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlDLE1BQUEsRUFBUTtNQUNKLElBQUkzQixnQkFBZ0IsR0FBRyxDQUFDO01BQ3hCLElBQUlDLGFBQWEsR0FBRyxDQUFDO01BRXJCLEtBQUssSUFBTW1CLE9BQU8sSUFBSSxJQUFJLENBQUNiLGlCQUFpQixFQUFFO1FBQzFDLElBQU1jLFFBQVEsR0FBRyxJQUFJLENBQUNkLGlCQUFpQixDQUFDYSxPQUFPLENBQUM7UUFFaERwQixnQkFBZ0IsSUFBSW9CLE9BQU8sR0FBR0MsUUFBUTtRQUN0Q3BCLGFBQWEsSUFBSW9CLFFBQVE7TUFDN0I7TUFFQSxJQUFJcEIsYUFBYSxLQUFLLENBQUMsRUFBRTtRQUNyQixJQUFJLENBQUNFLFNBQVMsQ0FBQ2YsY0FBYyxHQUFHZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNMLGdCQUFnQixHQUFHQyxhQUFhLENBQUM7TUFDaEY7TUFFQSxJQUFJLENBQUNFLFNBQVMsQ0FBQ25CLFVBQVUsR0FBR2lCLGFBQWE7TUFFekMsT0FBTyxJQUFJLENBQUNFLFNBQVM7SUFDekI7RUFBQztFQUFBLE9BQUFHLGdCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T3dDO0FBQ1c7QUFDVjtBQUNSO0FBQ3dCO0FBRTlELElBQU1qQyxHQUFHLEdBQUcsaUJBQWlCO0FBQUMsSUFFVDJELGdCQUFnQjtFQWtCakMsU0FBQUEsaUJBQVlDLE9BQU8sRUFBRTtJQUFBdEQsZUFBQSxPQUFBcUQsZ0JBQUE7SUFBQXBELGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUNqQixJQUFJLENBQUNxRCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDRCxPQUFPLENBQUNFLGFBQWEsQ0FBQ0QsUUFBUTtJQUVuRCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJOUIsd0RBQWdCLEVBQUU7SUFDckMsSUFBSSxDQUFDSCxTQUFTLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZCO0VBQUNYLFlBQUEsQ0FBQXdDLGdCQUFBO0lBQUF2QyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkMsUUFBQSxFQUFVO01BQ047TUFDQSxJQUFJLENBQUNsQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO01BRW5CLElBQUksQ0FBQ21DLHFCQUFxQixHQUFHLENBQUM7TUFDOUIsSUFBSSxDQUFDQyxVQUFVLEdBQUcsS0FBSztNQUN2QixJQUFJLENBQUNDLGdCQUFnQixHQUFHLENBQUM7TUFFekIsSUFBSSxDQUFDQyx3QkFBd0IsR0FBRyxDQUFDLENBQUM7TUFFbEMsSUFBSSxDQUFDQyxjQUFjLEdBQUcsS0FBSztNQUMzQixJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO01BQ3RCLElBQUksQ0FBQzdELFNBQVMsR0FBRyxLQUFLO0lBQzFCO0VBQUM7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWtELGFBQWF4QixPQUFPLEVBQUV5QixRQUFRLEVBQUU7TUFDNUIsSUFBSSxDQUFDTCxnQkFBZ0IsR0FBR3BCLE9BQU87TUFDL0IsSUFBSSxDQUFDa0IscUJBQXFCLEdBQUdRLElBQUksQ0FBQ0MsR0FBRyxFQUFFO01BQ3ZDLElBQUksQ0FBQ1IsVUFBVSxHQUFHLElBQUk7SUFDMUI7RUFBQztJQUFBOUMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNELGNBQWM1QixPQUFPLEVBQUU7TUFDbkIsSUFBSSxJQUFJLENBQUNzQixjQUFjLElBQUksSUFBSSxDQUFDSCxVQUFVLEVBQUU7UUFDeEMsSUFBSSxDQUFDSCxPQUFPLENBQUNqQixvQkFBb0IsQ0FBQyxJQUFJLENBQUNxQixnQkFBZ0IsRUFBRU0sSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUNULHFCQUFxQixDQUFDO1FBQ2pHLElBQUksQ0FBQ0EscUJBQXFCLEdBQUdRLElBQUksQ0FBQ0MsR0FBRyxFQUFFO1FBRXZDLElBQUksSUFBSSxDQUFDUCxnQkFBZ0IsS0FBS3BCLE9BQU8sRUFBRTtVQUNuQyxJQUFJLENBQUNnQixPQUFPLENBQUNiLGNBQWMsRUFBRTtRQUNqQztNQUNKO01BRUEsSUFBSSxDQUFDaUIsZ0JBQWdCLEdBQUdwQixPQUFPO0lBQ25DO0VBQUM7SUFBQTNCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RCxpQkFBQSxFQUFtQjtNQUNmLElBQUksSUFBSSxDQUFDUCxjQUFjLEVBQUU7UUFDckI7UUFDQSxJQUFJLENBQUNELHdCQUF3QixHQUFHSyxJQUFJLENBQUNDLEdBQUcsRUFBRTtNQUM5QztJQUNKO0VBQUM7SUFBQXRELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RCxXQUFBLEVBQWE7TUFDVCxJQUFJLElBQUksQ0FBQ1IsY0FBYyxJQUFJLElBQUksQ0FBQ0Qsd0JBQXdCLElBQUksQ0FBQyxFQUFFO1FBQzNEO1FBQ0EsSUFBSSxDQUFDTCxPQUFPLENBQUNaLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDTix3QkFBd0IsQ0FBQztNQUNyRTtNQUVBLElBQUksQ0FBQ0Esd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDO0VBQUM7SUFBQWhELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5RCxpQkFBQSxFQUFtQjtNQUNmLElBQUksQ0FBQ1Ysd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDO0VBQUM7SUFBQWhELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwRCxPQUFPQyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtNQUNmLElBQUksSUFBSSxDQUFDWixjQUFjLEVBQUU7UUFDckJkLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsaUJBQWlCLEdBQUd3RCx5REFBUyxDQUFDMkIsVUFBVSxDQUFDSCxLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUd4Qix5REFBUyxDQUFDMkIsVUFBVSxDQUFDRixHQUFHLENBQUMsQ0FBQztRQUUxRyxJQUFJbEQsSUFBSSxDQUFDcUQsR0FBRyxDQUFDSCxHQUFHLEdBQUdELEtBQUssQ0FBQyxHQUFHdEIsb0VBQWlCLENBQUMyQix5QkFBeUIsRUFBRTtVQUNyRTtVQUNBOUIsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxrQkFBa0IsR0FBRzBELG9FQUFpQixDQUFDMkIseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pHLENBQUMsTUFBTTtVQUNIO1VBQ0EsSUFBSSxDQUFDNUUsU0FBUyxHQUFHLElBQUk7UUFDekI7TUFDSjtJQUNKO0VBQUM7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlFLE9BQU9DLFVBQVUsRUFBRTtNQUNmO01BQ0EsSUFBSSxJQUFJLENBQUNsQixjQUFjLEVBQUU7UUFDckIsSUFBSSxDQUFDNUQsU0FBUyxHQUFHLElBQUk7UUFFckIsSUFBSSxDQUFDK0UsV0FBVyxFQUFFO1FBQ2xCLElBQUksQ0FBQ25CLGNBQWMsR0FBRyxLQUFLO01BQy9CO0lBQ0o7RUFBQztJQUFBakQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9FLGVBQWV6RSxZQUFZLEVBQUU7TUFDekI7TUFDQSxJQUFJLENBQUNxRCxjQUFjLEdBQUcsSUFBSTs7TUFFMUI7TUFDQSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxLQUFLeEQsU0FBUyxFQUFFO1FBQUEsSUFBQXFGLHFCQUFBO1FBQzdCLElBQUksQ0FBQzdCLFFBQVEsQ0FBQzhCLFNBQVMsRUFBQUQscUJBQUEsR0FBQ2pDLGtEQUFRLENBQUNtQyxlQUFlLGNBQUFGLHFCQUFBLHVCQUF4QkEscUJBQUEsQ0FBMEJHLG9CQUFvQixDQUFDQyxZQUFZLENBQUM7TUFDeEY7SUFDSjtFQUFDO0lBQUExRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMEUsVUFBVS9FLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUU7TUFDdEM7TUFDQSxJQUFJLElBQUksQ0FBQ1QsU0FBUyxFQUFFO1FBQ2hCLElBQUksQ0FBQytFLFdBQVcsRUFBRTtNQUN0Qjs7TUFFQTtNQUNBLElBQUksQ0FBQy9FLFNBQVMsR0FBRyxLQUFLO01BQ3RCLElBQUksQ0FBQ3dELHFCQUFxQixHQUFHUSxJQUFJLENBQUNDLEdBQUcsRUFBRTtNQUV2QyxJQUFJLENBQUNYLE9BQU8sQ0FBQzNCLEtBQUssRUFBRSxDQUNmNEQsTUFBTSxDQUFDLElBQUksQ0FBQ2xFLFNBQVMsQ0FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQztNQUFBLENBQzdCeUIsZUFBZSxDQUFDM0IsWUFBWSxDQUFDLENBQzdCNEIsYUFBYSxDQUFDM0IsVUFBVSxDQUFDLENBQ3pCNEIsT0FBTyxDQUFDM0IsSUFBSSxDQUFDO01BRWxCLElBQUksQ0FBQ29ELFNBQVMsR0FBRyxJQUFJO0lBQ3pCO0VBQUM7SUFBQWxELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0RSxjQUFjakYsWUFBWSxFQUFFO01BQ3hCLElBQUksQ0FBQytDLE9BQU8sQ0FBQ3pCLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDckM7RUFBQztJQUFBbEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZFLFlBQVlsRixZQUFZLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFaUYsaUJBQWlCLEVBQUU7TUFBQSxJQUFBQyxLQUFBO01BQzNELElBQUksQ0FBQzNGLFNBQVMsR0FBRyxJQUFJOztNQUVyQjtNQUNBLElBQUkwRixpQkFBaUIsQ0FBQy9GLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUJtRCxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLGtCQUFrQixDQUFDO1FBRXhDbUcsaUJBQWlCLENBQUNFLE9BQU8sQ0FBQyxVQUFBbkYsSUFBSSxFQUFJO1VBQzlCa0YsS0FBSSxDQUFDdEUsU0FBUyxDQUFDWixJQUFJLENBQUMsQ0FBQ1QsU0FBUyxHQUFHLElBQUk7UUFDekMsQ0FBQyxDQUFDO01BQ047SUFDSjtFQUFDO0lBQUFXLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpRixhQUFhdEYsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRXFGLFFBQVEsRUFBRTtNQUNuRCxJQUFJLENBQUN4QyxPQUFPLENBQUN2QixXQUFXLENBQUMrRCxRQUFRLENBQUM7TUFFbEMsSUFBSUEsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUN4QyxPQUFPLENBQUM1QixTQUFTLENBQUVvRSxRQUFRLEdBQUcsRUFBRSxDQUFFLEtBQUtsRyxTQUFTLEVBQUU7UUFDdkUsSUFBSSxDQUFDSSxTQUFTLEdBQUcsSUFBSTtNQUN6QjtJQUNKO0VBQUM7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1GLFFBQVF4RixZQUFZLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFO01BQ3BDO01BQ0EsSUFBSSxDQUFDc0UsV0FBVyxFQUFFO01BRWxCLElBQUksQ0FBQ2xCLFNBQVMsR0FBRyxLQUFLO0lBQzFCO0VBQUM7SUFBQWxELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvRixhQUFhekYsWUFBWSxFQUFFO01BQ3ZCO01BQ0EsSUFBSSxJQUFJLENBQUNzRCxTQUFTLEtBQUssSUFBSSxFQUFFO1FBQ3pCLElBQUksQ0FBQ1AsT0FBTyxDQUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQztRQUUvQixJQUFJLENBQUNpRCxXQUFXLEVBQUU7TUFDdEI7O01BRUE7TUFDQSxJQUFJLENBQUNuQixjQUFjLEdBQUcsS0FBSzs7TUFFM0I7TUFDQSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxLQUFLeEQsU0FBUyxFQUFFO1FBQUEsSUFBQXFHLHNCQUFBO1FBQzdCLElBQUksQ0FBQzdDLFFBQVEsQ0FBQzhDLGlCQUFpQixFQUFBRCxzQkFBQSxHQUFDakQsa0RBQVEsQ0FBQ21DLGVBQWUsY0FBQWMsc0JBQUEsdUJBQXhCQSxzQkFBQSxDQUEwQmIsb0JBQW9CLENBQUNlLFdBQVcsRUFBRSxJQUFJLENBQUM5RSxTQUFTLENBQUNwQixVQUFVLENBQUM7TUFDMUg7SUFDSjtFQUFDO0lBQUFVLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3Rix3Q0FBd0MvQyxhQUFhLEVBQUU7TUFDbkQsSUFBSSxJQUFJLENBQUNPLGNBQWMsRUFBRTtRQUNyQixJQUFNTixPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNYLEtBQUssRUFBRSxDQUMvQk4sb0JBQW9CLENBQUMsSUFBSSxDQUFDcUIsZ0JBQWdCLEVBQUVNLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDVCxxQkFBcUIsQ0FBQztRQUV6RixJQUFJLElBQUksQ0FBQ0csd0JBQXdCLElBQUksQ0FBQyxFQUFFO1VBQ3BDTCxPQUFPLENBQUNaLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDTix3QkFBd0IsQ0FBQztRQUNoRTtRQUVBLElBQU1sRSxPQUFPLEdBQUc2RCxPQUFPLENBQUNULEtBQUssRUFBRTtRQUMvQixJQUFJcEQsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDZCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3pCLElBQUksQ0FBQzBCLFNBQVMsQ0FBQzVCLE9BQU8sQ0FBQ2dCLElBQUksQ0FBQyxHQUFHaEIsT0FBTztRQUMxQztNQUNKO01BRUE0RCxhQUFhLENBQUNoQyxTQUFTLEdBQUdXLE1BQU0sQ0FBQ3FFLE1BQU0sQ0FBQyxJQUFJLENBQUNoRixTQUFTLENBQUM7SUFDM0Q7RUFBQztJQUFBVixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMEYsa0NBQWtDakQsYUFBYSxFQUFFO01BQzdDQSxhQUFhLENBQUNoQyxTQUFTLEdBQUdXLE1BQU0sQ0FBQ3FFLE1BQU0sQ0FBQyxJQUFJLENBQUNoRixTQUFTLENBQUM7SUFDM0Q7RUFBQztJQUFBVixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUUsWUFBQSxFQUFjO01BQ1Y7TUFDQSxJQUFJLENBQUN6QixPQUFPLENBQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDOUIsU0FBUyxDQUFDLENBQ3BDcUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDcUIsZ0JBQWdCLEVBQUVNLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDVCxxQkFBcUIsQ0FBQzs7TUFFekY7TUFDQSxJQUFNL0QsT0FBTyxHQUFHLElBQUksQ0FBQzZELE9BQU8sQ0FBQ1QsS0FBSyxFQUFFO01BQ3BDLElBQUlwRCxPQUFPLENBQUNnQixJQUFJLENBQUNkLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDMEIsU0FBUyxDQUFDNUIsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDLEdBQUdoQixPQUFPO01BQzFDO01BRUFxRCxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLGVBQWUsR0FBR0UsT0FBTyxDQUFDb0IsUUFBUSxFQUFFLENBQUM7O01BRTFEO01BQ0EsSUFBSSxDQUFDeUMsT0FBTyxDQUFDM0IsS0FBSyxFQUFFO01BQ3BCLElBQUksQ0FBQzNCLFNBQVMsR0FBRyxLQUFLO0lBQzFCO0VBQUM7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJGLGFBQWFDLE1BQU0sRUFBRTtNQUFBLElBQUFDLE1BQUE7TUFDakI7TUFDQUQsTUFBTSxDQUFDRSxRQUFRLENBQUNkLE9BQU8sQ0FBQyxVQUFBZSxPQUFPLEVBQUk7UUFDL0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsT0FBTyxDQUFDLFVBQUFpQixFQUFFLEVBQUk7VUFDdEIsSUFBSUosTUFBSSxDQUFDcEYsU0FBUyxDQUFDd0YsRUFBRSxDQUFDcEcsSUFBSSxDQUFDLEtBQUtiLFNBQVMsRUFBRTtZQUFBLElBQUFrSCxjQUFBO1lBQ3ZDLElBQU14RCxPQUFPLEdBQUcsSUFBSTlCLHdEQUFnQixFQUFFO1lBQ3RDaUYsTUFBSSxDQUFDcEYsU0FBUyxDQUFDd0YsRUFBRSxDQUFDcEcsSUFBSSxDQUFDLEdBQUc2QyxPQUFPLENBQUNwQixlQUFlLENBQUNzRSxNQUFNLENBQUNqRyxZQUFZLENBQUMsQ0FDakU0QixhQUFhLENBQUMwRSxFQUFFLENBQUNyRyxVQUFVLENBQUMsQ0FDNUI0QixPQUFPLENBQUN5RSxFQUFFLENBQUNwRyxJQUFJLENBQUMsQ0FDaEJvQyxLQUFLLEVBQUU7WUFFWkMsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxxQ0FBcUMsR0FBR3NILEVBQUUsQ0FBQ3BHLElBQUksR0FBQXFHLGNBQUEsR0FBRUwsTUFBSSxDQUFDdEQsT0FBTyxjQUFBMkQsY0FBQSx1QkFBWkEsY0FBQSxDQUFjQyxFQUFFLENBQUM7VUFDM0Y7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQTdELGdCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclBtRDtBQUNFO0FBRTFELElBQU0zRCxHQUFHLEdBQUcsY0FBYztBQUFDLElBRXJCMkgsT0FBTztFQVFULFNBQUFBLFFBQUEsRUFBYztJQUFBckgsZUFBQSxPQUFBcUgsT0FBQTtJQVBkO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFKSXBILGVBQUE7SUFRSSxJQUFJLENBQUNxSCxTQUFTLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkl6RyxZQUFBLENBQUF3RyxPQUFBO0lBQUF2RyxHQUFBO0lBQUFDLEtBQUEsRUFPQSxTQUFBd0csV0FBQSxFQUFtQjtNQUFBLElBQVJMLEVBQUUsR0FBQXJILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7TUFDYjtNQUNBLElBQU0wSCxVQUFVLEdBQUcsSUFBSSxDQUFDRCxTQUFTLENBQUNKLEVBQUUsQ0FBQyxLQUFLbkgsU0FBUztNQUVuRCxJQUFJd0gsVUFBVSxFQUFFO1FBQ1o7UUFDQSxJQUFJLENBQUNELFNBQVMsQ0FBQ0osRUFBRSxDQUFDLEdBQUcvQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtNQUNuQyxDQUFDO0FBQ1Q7QUFDQTs7TUFFUSxPQUFPbUQsVUFBVTtJQUNyQjs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBekcsR0FBQTtJQUFBQyxLQUFBLEVBR0EsU0FBQXlHLGFBQUEsRUFBZTtNQUNYO01BQ0EsSUFBSSxDQUFDRixTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCO0VBQUM7RUFBQSxPQUFBRCxPQUFBO0FBQUE7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1JLGFBQWE7RUFxQnRCLFNBQUFBLGNBQVlDLGlCQUFpQixFQUFFaEgsWUFBWSxFQUFFaUgsYUFBYSxFQUFFO0lBQUEzSCxlQUFBLE9BQUF5SCxhQUFBO0lBcEI1RDtBQUNKO0FBQ0E7SUFGSXhILGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFNSSxJQUFJLENBQUN5SCxpQkFBaUIsR0FBR0EsaUJBQWlCO0lBQzFDLElBQUksQ0FBQ2hILFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNpSCxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDZCxRQUFRLEdBQUcsRUFBRTtFQUN0Qjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkloRyxZQUFBLENBQUE0RyxhQUFBO0lBQUEzRyxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBNkcscUJBQXFCMUQsUUFBUSxFQUFFO01BQzNCLE9BQU8sSUFBSSxDQUFDMkMsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDLFVBQUFmLE9BQU87UUFBQSxPQUFJNUMsUUFBUSxHQUFHNEMsT0FBTyxDQUFDNUMsUUFBUSxHQUFHNEMsT0FBTyxDQUFDcEUsUUFBUTtNQUFBLEVBQUMsS0FBSzNDLFNBQVM7SUFDdEc7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBZSxHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBK0csaUJBQWlCNUQsUUFBUSxFQUFFO01BQ3ZCLElBQUksQ0FBQzJDLFFBQVEsQ0FBQ2QsT0FBTyxDQUFDLFVBQUFlLE9BQU87UUFBQSxPQUFJQSxPQUFPLENBQUNnQixnQkFBZ0IsQ0FBQzVELFFBQVEsQ0FBQztNQUFBLEVBQUM7SUFDeEU7RUFBQztFQUFBLE9BQUF1RCxhQUFBO0FBQUE7O0FBR0w7QUFDQTtBQUNBO0FBQ08sSUFBTU0sY0FBYywwQkFBQUMsUUFBQTtFQUFBQyxTQUFBLENBQUFGLGNBQUEsRUFBQUMsUUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixjQUFBO0VBNEN2QixTQUFBQSxlQUFZcEIsTUFBTSxFQUFFTyxFQUFFLEVBQUVoRCxRQUFRLEVBQUV4QixRQUFRLEVBQUUwRixJQUFJLEVBQUU7SUFBQSxJQUFBdEMsS0FBQTtJQUFBOUYsZUFBQSxPQUFBK0gsY0FBQTtJQUM5Q2pDLEtBQUEsR0FBQW9DLE1BQUEsQ0FBQUcsSUFBQTtJQTVDSjtBQUNKO0FBQ0E7SUFGSXBJLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUF4QyxLQUFBO0lBS0E7QUFDSjtBQUNBO0lBRkk3RixlQUFBLENBQUFxSSxzQkFBQSxDQUFBeEMsS0FBQTtJQUdJO0lBRUo7QUFDSjtBQUNBO0lBRkk3RixlQUFBLENBQUFxSSxzQkFBQSxDQUFBeEMsS0FBQTtJQUtBO0FBQ0o7QUFDQTtBQUNBO0lBSEk3RixlQUFBLENBQUFxSSxzQkFBQSxDQUFBeEMsS0FBQTtJQU1BO0FBQ0o7QUFDQTtBQUNBO0lBQ0k7SUFFQTtBQUNKO0FBQ0E7QUFDQTtJQUNJO0lBRUE7QUFDSjtBQUNBO0lBRkk3RixlQUFBLENBQUFxSSxzQkFBQSxDQUFBeEMsS0FBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJN0YsZUFBQSxDQUFBcUksc0JBQUEsQ0FBQXhDLEtBQUE7SUFRSUEsS0FBQSxDQUFLYSxNQUFNLEdBQUdBLE1BQU07SUFDcEJiLEtBQUEsQ0FBS29CLEVBQUUsR0FBR0EsRUFBRTtJQUNacEIsS0FBQSxDQUFLNUIsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCNEIsS0FBQSxDQUFLcEQsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCb0QsS0FBQSxDQUFLc0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCdEMsS0FBQSxDQUFLaUIsR0FBRyxHQUFHLEVBQUU7SUFBQyxPQUFBakIsS0FBQTtFQUNsQjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUhJakYsWUFBQSxDQUFBa0gsY0FBQTtJQUFBakgsR0FBQTtJQUFBQyxLQUFBLEVBSUEsU0FBQStHLGlCQUFpQjVELFFBQVEsRUFBRTtNQUN2QixJQUFJQSxRQUFRLElBQUksSUFBSSxDQUFDQSxRQUFRLEVBQUU7UUFDM0IsSUFBSSxDQUFDc0QsWUFBWSxFQUFFO01BQ3ZCO01BRUEsSUFBSSxDQUFDVCxHQUFHLENBQUNoQixPQUFPLENBQUMsVUFBQWlCLEVBQUU7UUFBQSxPQUFJQSxFQUFFLENBQUNjLGdCQUFnQixDQUFDNUQsUUFBUSxDQUFDO01BQUEsRUFBQztJQUN6RDs7SUFFQTtBQUNKO0FBQ0E7RUFGSTtJQUFBcEQsR0FBQTtJQUFBQyxLQUFBLEVBR0EsU0FBQXdILGFBQUEsRUFBZTtNQUFBLElBQUFDLHFCQUFBO01BQ1gsSUFBSSxDQUFDLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyQjtNQUNKO01BRUEsSUFBTUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDZixNQUFNLENBQUNlLGlCQUFpQjtNQUV2RHpFLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsOEJBQThCLEVBQUVnSSxpQkFBaUIsQ0FBQ3BFLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUNsRmpFLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQ2dELFFBQVEsR0FBRyxJQUFJLEVBQUVnRixpQkFBaUIsQ0FBQ3BFLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQzs7TUFFdkY7TUFDQVEsaUJBQWlCLENBQUNlLGlCQUFpQixDQUFDLElBQUksQ0FBQztNQUN6Q2YsaUJBQWlCLENBQUNnQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMvQixNQUFNLENBQUNqRyxZQUFZLENBQUM7O01BRTlEO01BQ0EsSUFBTWlJLGdCQUFnQixJQUFBSCxxQkFBQSxHQUFHZCxpQkFBaUIsQ0FBQ3BFLE9BQU8sQ0FBQ3NGLFNBQVMsY0FBQUoscUJBQUEsdUJBQW5DQSxxQkFBQSxDQUFxQ0csZ0JBQWdCO01BQzlFQSxnQkFBZ0IsYUFBaEJBLGdCQUFnQixlQUFoQkEsZ0JBQWdCLENBQUV4RCxjQUFjLENBQUMsSUFBSSxDQUFDMEQsTUFBTSxFQUFFLENBQUM7SUFDbkQ7O0lBRUE7QUFDSjtBQUNBO0VBRkk7SUFBQS9ILEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUErSCxXQUFBLEVBQWE7TUFBQSxJQUFBQyxzQkFBQTtNQUNULElBQUksQ0FBQyxJQUFJLENBQUN4QixVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDckI7TUFDSjtNQUVBLElBQU1HLGlCQUFpQixHQUFHLElBQUksQ0FBQ2YsTUFBTSxDQUFDZSxpQkFBaUI7TUFFdkR6RSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLDRCQUE0QixFQUFFZ0ksaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7O01BRWhGO01BQ0FRLGlCQUFpQixDQUFDc0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDckMsTUFBTSxDQUFDakcsWUFBWSxDQUFDOztNQUU1RDtNQUNBLElBQU1pSSxnQkFBZ0IsSUFBQUksc0JBQUEsR0FBR3JCLGlCQUFpQixDQUFDcEUsT0FBTyxDQUFDc0YsU0FBUyxjQUFBRyxzQkFBQSx1QkFBbkNBLHNCQUFBLENBQXFDSixnQkFBZ0I7TUFDOUVBLGdCQUFnQixhQUFoQkEsZ0JBQWdCLGVBQWhCQSxnQkFBZ0IsQ0FBRXhDLFlBQVksQ0FBQyxJQUFJLENBQUMwQyxNQUFNLEVBQUUsQ0FBQzs7TUFFN0M7TUFDQTtNQUNBO01BQ0EsSUFBSSxDQUFDckIsWUFBWSxFQUFFO0lBQ3ZCO0VBQUM7SUFBQTFHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5RyxhQUFBLEVBQWU7TUFDWHlCLElBQUEsQ0FBQUMsZUFBQSxDQUFBbkIsY0FBQSxDQUFBb0IsU0FBQSx5QkFBQWQsSUFBQTs7TUFFQTtNQUNBO01BQ0E7TUFDQSxJQUFJLENBQUN0QixHQUFHLENBQUNoQixPQUFPLENBQUMsVUFBQWlCLEVBQUU7UUFBQSxPQUFJQSxFQUFFLENBQUNRLFlBQVksRUFBRTtNQUFBLEVBQUM7SUFDN0M7RUFBQztJQUFBMUcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThILE9BQUEsRUFBUztNQUNMLE9BQU87UUFDSDNCLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7UUFDWGtDLGFBQWEsRUFBRSxJQUFJLENBQUNsRixRQUFRLElBQUksQ0FBQztRQUNqQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMwRixJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzFGLFFBQVE7UUFDakRxRSxHQUFHLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUNzQyxHQUFHLENBQUMsVUFBQXJDLEVBQUU7VUFBQSxPQUFJQSxFQUFFLENBQUM2QixNQUFNLEVBQUU7UUFBQSxFQUFDO1FBQ3BDUyxPQUFPLEVBQUUsSUFBSSxDQUFDbEIsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNyQixHQUFHLENBQUNqSDtNQUNoRCxDQUFDO0lBQ0w7RUFBQztFQUFBLE9BQUFpSSxjQUFBO0FBQUEsRUFuSStCVixPQUFPOztBQXNJM0M7QUFDQTtBQUNBO0FBQ08sSUFBTWtDLFNBQVMsMEJBQUFDLFNBQUE7RUFBQXZCLFNBQUEsQ0FBQXNCLFNBQUEsRUFBQUMsU0FBQTtFQUFBLElBQUFDLE9BQUEsR0FBQXRCLFlBQUEsQ0FBQW9CLFNBQUE7RUE2RWxCLFNBQUFBLFVBQVl6QyxPQUFPLEVBQUU0QyxLQUFLLEVBQUV4RixRQUFRLEVBQUV4QixRQUFRLEVBQUVpSCxTQUFTLEVBQUVDLGlCQUFpQixFQUFFakosVUFBVSxFQUFFQyxJQUFJLEVBQUVpSixTQUFTLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO0lBQUEsSUFBQW5ELE1BQUE7SUFBQTVHLGVBQUEsT0FBQXVKLFNBQUE7SUFDbkkzQyxNQUFBLEdBQUE2QyxPQUFBLENBQUFwQixJQUFBO0lBN0VKO0FBQ0o7QUFDQTtJQUZJcEksZUFBQSxDQUFBcUksc0JBQUEsQ0FBQTFCLE1BQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSTNHLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUExQixNQUFBO0lBS0E7QUFDSjtBQUNBO0lBRkkzRyxlQUFBLENBQUFxSSxzQkFBQSxDQUFBMUIsTUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJM0csZUFBQSxDQUFBcUksc0JBQUEsQ0FBQTFCLE1BQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSTNHLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUExQixNQUFBO0lBS0E7QUFDSjtBQUNBO0lBRkkzRyxlQUFBLENBQUFxSSxzQkFBQSxDQUFBMUIsTUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJM0csZUFBQSxDQUFBcUksc0JBQUEsQ0FBQTFCLE1BQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSTNHLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUExQixNQUFBO0lBS0E7QUFDSjtBQUNBO0lBRkkzRyxlQUFBLENBQUFxSSxzQkFBQSxDQUFBMUIsTUFBQTtJQUtBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFKSTNHLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUExQixNQUFBO0lBS1c7SUFFWDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBSkkzRyxlQUFBLENBQUFxSSxzQkFBQSxDQUFBMUIsTUFBQTtJQU9BO0FBQ0o7QUFDQTtBQUNBO0lBSEkzRyxlQUFBLENBQUFxSSxzQkFBQSxDQUFBMUIsTUFBQTtJQU1BO0FBQ0o7QUFDQTtBQUNBO0lBSEkzRyxlQUFBLENBQUFxSSxzQkFBQSxDQUFBMUIsTUFBQTtJQU1BO0FBQ0o7QUFDQTtJQUZJM0csZUFBQSxDQUFBcUksc0JBQUEsQ0FBQTFCLE1BQUE7SUFRSUEsTUFBQSxDQUFLRSxPQUFPLEdBQUdBLE9BQU87SUFDdEJGLE1BQUEsQ0FBSzhDLEtBQUssR0FBR0EsS0FBSztJQUNsQjlDLE1BQUEsQ0FBSzFDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QjBDLE1BQUEsQ0FBS2xFLFFBQVEsR0FBR0EsUUFBUTtJQUN4QmtFLE1BQUEsQ0FBSytDLFNBQVMsR0FBR0EsU0FBUztJQUMxQi9DLE1BQUEsQ0FBS2dELGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDMUNoRCxNQUFBLENBQUtqRyxVQUFVLEdBQUdBLFVBQVU7SUFDNUJpRyxNQUFBLENBQUtoRyxJQUFJLEdBQUdBLElBQUk7SUFDaEJnRyxNQUFBLENBQUtvRCxNQUFNLEdBQUcsRUFBRTtJQUNoQnBELE1BQUEsQ0FBS2lELFNBQVMsR0FBR0EsU0FBUztJQUMxQmpELE1BQUEsQ0FBS2tELGFBQWEsR0FBR0EsYUFBYTtJQUNsQ2xELE1BQUEsQ0FBS3FELE9BQU8sR0FBRyxFQUFFO0lBQ2pCckQsTUFBQSxDQUFLc0QsV0FBVyxHQUFHLENBQUM7SUFDcEJ0RCxNQUFBLENBQUttRCxXQUFXLEdBQUdBLFdBQVc7SUFBQyxPQUFBbkQsTUFBQTtFQUNuQzs7RUFFQTtBQUNKO0FBQ0E7RUFGSS9GLFlBQUEsQ0FBQTBJLFNBQUE7SUFBQXpJLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFvSixZQUFBLEVBQWM7TUFDVixJQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUNOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6RCxJQUFJTyxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDLENBQUMsQ0FBQztNQUMvQixJQUFNQyxLQUFLLEdBQUcsRUFBRTtNQUNoQixJQUFJQyxHQUFHLEdBQUcsSUFBSTs7TUFFZDtNQUNBSCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0ksSUFBSSxDQUFDLFVBQUNsRyxLQUFLLEVBQUVDLEdBQUcsRUFBSztRQUN2QyxJQUFJRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNuQixPQUFPLENBQUM7UUFDWjtRQUNBLElBQUlELEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ25CLE9BQU8sQ0FBQyxDQUFDO1FBQ2I7UUFDQSxPQUFPLENBQUM7TUFDWixDQUFDLENBQUM7O01BRUY7TUFDQStGLEtBQUssQ0FBQ0csSUFBSSxDQUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRXhCO01BQ0EsS0FBSyxJQUFJakosQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaUosU0FBUyxDQUFDMUssTUFBTSxFQUFFeUIsQ0FBQyxFQUFFLEVBQUU7UUFDdkM7UUFDQW9KLEdBQUcsR0FBR0QsS0FBSyxDQUFDQSxLQUFLLENBQUM1SyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUk2SyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ2pKLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQzFCO1VBQ0E7VUFDQTtVQUNBbUosS0FBSyxDQUFDRyxJQUFJLENBQUNMLFNBQVMsQ0FBQ2pKLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsTUFBTSxJQUFJb0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNqSixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNqQztVQUNBO1VBQ0E7VUFDQW9KLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3hCOztVQUVBbUosS0FBSyxDQUFDSSxHQUFHLEVBQUU7VUFDWEosS0FBSyxDQUFDRyxJQUFJLENBQUNGLEdBQUcsQ0FBQztRQUNuQjtNQUNKOztNQUVBO01BQ0E7O01BRUEsSUFBSSxDQUFDVixPQUFPLEdBQUdTLEtBQUs7SUFDeEI7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBNUosR0FBQTtJQUFBQyxLQUFBLEVBSUEsU0FBQStHLGlCQUFpQjVELFFBQVEsRUFBRTtNQUN2QixJQUFJQSxRQUFRLElBQUksSUFBSSxDQUFDQSxRQUFRLEVBQUU7UUFDM0IsSUFBSSxDQUFDK0YsT0FBTyxHQUFHLEVBQUU7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQztRQUVwQixJQUFJLENBQUMxQyxZQUFZLEVBQUU7TUFDdkI7TUFFQSxJQUFJLENBQUN3QyxNQUFNLENBQUNqRSxPQUFPLENBQUMsVUFBQWlFLE1BQU07UUFBQSxPQUFJQSxNQUFNLENBQUNsQyxnQkFBZ0IsQ0FBQzVELFFBQVEsQ0FBQztNQUFBLEVBQUM7SUFDcEU7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFOSTtJQUFBcEQsR0FBQTtJQUFBQyxLQUFBLEVBT0EsU0FBQWdLLGtCQUFrQkMsYUFBYSxFQUFFQyxXQUFXLEVBQUU7TUFDMUMsSUFBSUQsYUFBYSxHQUFHQyxXQUFXLElBQzNCRCxhQUFhLEdBQUcsSUFBSSxDQUFDOUcsUUFBUSxJQUFJK0csV0FBVyxHQUFHLElBQUksQ0FBQy9HLFFBQVEsSUFDNUQ4RyxhQUFhLEdBQUcsSUFBSSxDQUFDOUcsUUFBUSxHQUFHLElBQUksQ0FBQ3hCLFFBQVEsSUFBSXVJLFdBQVcsR0FBRyxJQUFJLENBQUMvRyxRQUFRLEdBQUcsSUFBSSxDQUFDeEIsUUFBUSxFQUFFO1FBQzlGO01BQ0o7O01BRUE7TUFDQSxJQUFNd0ksYUFBYSxHQUFHLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQ2tCLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVySyxLQUFLO1FBQUEsT0FBS3FLLEdBQUcsSUFBSXJLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUEsR0FBRSxDQUFDLENBQUM7TUFDekYsSUFBTXNLLGdCQUFnQixHQUFHSCxhQUFhLEdBQUcsSUFBSSxDQUFDeEksUUFBUTtNQUV0RCxJQUFJLENBQUN1SCxPQUFPLENBQUNZLElBQUksQ0FBQyxDQUFDRyxhQUFhLEdBQUcsSUFBSSxDQUFDOUcsUUFBUSxFQUFFK0csV0FBVyxHQUFHLElBQUksQ0FBQy9HLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNqRixJQUFJLENBQUNpRyxXQUFXLEVBQUU7TUFDbEI7O01BRUEsSUFBTW1CLFdBQVcsR0FBRyxJQUFJLENBQUNyQixPQUFPLENBQUNrQixNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFckssS0FBSztRQUFBLE9BQUtxSyxHQUFHLElBQUlySyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFBLEdBQUUsQ0FBQyxDQUFDO01BQ3ZGLElBQU13SyxjQUFjLEdBQUdELFdBQVcsR0FBRyxJQUFJLENBQUM1SSxRQUFRO01BRWxELElBQUksQ0FBQ3dILFdBQVcsR0FBR3FCLGNBQWM7O01BRWpDO01BQ0EsSUFBTTVFLE1BQU0sR0FBRyxJQUFJLENBQUNHLE9BQU8sQ0FBQ0gsTUFBTTtNQUNsQyxJQUFNZSxpQkFBaUIsR0FBR2YsTUFBTSxDQUFDZSxpQkFBaUI7O01BRWxEO0FBQ1I7QUFDQTs7TUFFUSxJQUFJMkQsZ0JBQWdCLElBQUksSUFBSSxJQUFJRSxjQUFjLElBQUksSUFBSSxFQUFFO1FBQ3BEN0QsaUJBQWlCLENBQUM4RCxnQkFBZ0IsQ0FBQzdFLE1BQU0sQ0FBQ2pHLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO01BQ3JFO01BRUEsSUFBSTJLLGdCQUFnQixJQUFJLElBQUksSUFBSUUsY0FBYyxJQUFJLElBQUksRUFBRTtRQUNwRDdELGlCQUFpQixDQUFDOEQsZ0JBQWdCLENBQUM3RSxNQUFNLENBQUNqRyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztNQUNyRTtNQUVBLElBQUkySyxnQkFBZ0IsSUFBSSxJQUFJLElBQUlFLGNBQWMsSUFBSSxJQUFJLEVBQUU7UUFDcEQ3RCxpQkFBaUIsQ0FBQzhELGdCQUFnQixDQUFDN0UsTUFBTSxDQUFDakcsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7TUFDckU7O01BRUE7QUFDUjtBQUNBOztNQUVRLElBQUksQ0FBQ3NKLE1BQU0sQ0FBQ2pFLE9BQU8sQ0FBQyxVQUFBMEYsS0FBSztRQUFBLE9BQUlBLEtBQUssQ0FBQ0MsYUFBYSxDQUFDTCxnQkFBZ0IsRUFBRUUsY0FBYyxDQUFDO01BQUEsRUFBQztNQUVuRnRJLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUscUJBQXFCLEdBQUcrQixJQUFJLENBQUNrSyxLQUFLLENBQUNOLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUc1SixJQUFJLENBQUNrSyxLQUFLLENBQUNKLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFN0QsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7SUFDekw7O0lBRUE7QUFDSjtBQUNBO0VBRkk7SUFBQXBHLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUF3SCxhQUFBLEVBQWU7TUFBQSxJQUFBcUQsc0JBQUE7TUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDckUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JCO01BQ0o7TUFFQSxJQUFNWixNQUFNLEdBQUcsSUFBSSxDQUFDRyxPQUFPLENBQUNILE1BQU07TUFDbEMsSUFBTWUsaUJBQWlCLEdBQUdmLE1BQU0sQ0FBQ2UsaUJBQWlCO01BRWxEekUsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxzQkFBc0IsR0FBRyxJQUFJLENBQUNrQixJQUFJLEdBQUcsS0FBSyxFQUFFOEcsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7TUFDOUZqRSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLFNBQVMsR0FBSSxJQUFJLENBQUN3RSxRQUFTLEdBQUcsSUFBSSxFQUFFd0QsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7TUFDdEZqRSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUN3RSxRQUFRLEdBQUcsSUFBSSxDQUFDeEIsUUFBUSxDQUFDLEdBQUcsSUFBSSxFQUFFZ0YsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7TUFDdEdqRSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLFlBQVksR0FBRyxJQUFJLENBQUNnRCxRQUFRLEdBQUcsSUFBSSxFQUFFZ0YsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7O01BRXZGO01BQ0FRLGlCQUFpQixDQUFDbUUsWUFBWSxDQUFDLElBQUksQ0FBQztNQUNwQ25FLGlCQUFpQixDQUFDb0UsYUFBYSxDQUFDbkYsTUFBTSxDQUFDakcsWUFBWSxFQUFFLElBQUksQ0FBQztNQUMxRCxJQUFJLElBQUksQ0FBQ2lKLFNBQVMsS0FBSyxJQUFJLEVBQUU7UUFDekJqQyxpQkFBaUIsQ0FBQ3FFLGlCQUFpQixDQUFDcEYsTUFBTSxDQUFDakcsWUFBWSxFQUFFLElBQUksQ0FBQ2tKLGlCQUFpQixFQUFFLElBQUksQ0FBQzFGLFFBQVEsR0FBRyxJQUFJLENBQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDb0UsT0FBTyxDQUFDNUMsUUFBUSxHQUFHLElBQUksQ0FBQzRDLE9BQU8sQ0FBQ3BFLFFBQVEsQ0FBQztNQUNsSztNQUNBZ0YsaUJBQWlCLENBQUM4RCxnQkFBZ0IsQ0FBQzdFLE1BQU0sQ0FBQ2pHLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztNQUVoRTtNQUNBLElBQU1pSSxnQkFBZ0IsSUFBQWlELHNCQUFBLEdBQUdsRSxpQkFBaUIsQ0FBQ3BFLE9BQU8sQ0FBQ3NGLFNBQVMsY0FBQWdELHNCQUFBLHVCQUFuQ0Esc0JBQUEsQ0FBcUNqRCxnQkFBZ0I7TUFDOUUsSUFBTTNCLEVBQUUsR0FBRyxJQUFJLENBQUM2QixNQUFNLEVBQUU7TUFDeEIsSUFBTS9CLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQytCLE1BQU0sRUFBRTtNQUNyQ0YsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsZUFBaEJBLGdCQUFnQixDQUFFbEQsU0FBUyxDQUFDdUIsRUFBRSxFQUFFRixPQUFPLENBQUM7TUFDeEMsSUFBSSxJQUFJLENBQUM2QyxTQUFTLEtBQUssSUFBSSxFQUFFO1FBQ3pCaEIsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsZUFBaEJBLGdCQUFnQixDQUFFaEQsYUFBYSxDQUFDcUIsRUFBRSxFQUFFRixPQUFPLEVBQUUsSUFBSSxDQUFDOEMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDMUYsUUFBUSxHQUFHLElBQUksQ0FBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUNvRSxPQUFPLENBQUM1QyxRQUFRLEdBQUcsSUFBSSxDQUFDNEMsT0FBTyxDQUFDcEUsUUFBUSxDQUFDO01BQ3RKO0lBQ0o7O0lBRUE7QUFDSjtBQUNBO0VBRkk7SUFBQTVCLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUErSCxXQUFBLEVBQWE7TUFBQSxJQUFBa0Qsc0JBQUE7TUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDekUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JCO01BQ0o7TUFFQSxJQUFNWixNQUFNLEdBQUcsSUFBSSxDQUFDRyxPQUFPLENBQUNILE1BQU07TUFDbEMsSUFBTWUsaUJBQWlCLEdBQUdmLE1BQU0sQ0FBQ2UsaUJBQWlCO01BRWxEekUsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxvQkFBb0IsR0FBRyxJQUFJLENBQUNrQixJQUFJLEdBQUcsS0FBSyxFQUFFOEcsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7O01BRTVGO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ2dELFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDMUI7UUFDQSxJQUFJLENBQUNhLGlCQUFpQixDQUFDLElBQUksQ0FBQzdHLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJLENBQUN4QixRQUFRLENBQUM7UUFFcEVnRixpQkFBaUIsQ0FBQzhELGdCQUFnQixDQUFDN0UsTUFBTSxDQUFDakcsWUFBWSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7TUFDdEU7TUFDQWdILGlCQUFpQixDQUFDdUUsV0FBVyxDQUFDdEYsTUFBTSxDQUFDakcsWUFBWSxFQUFFLElBQUksQ0FBQzs7TUFFeEQ7TUFDQSxJQUFNaUksZ0JBQWdCLElBQUFxRCxzQkFBQSxHQUFHdEUsaUJBQWlCLENBQUNwRSxPQUFPLENBQUNzRixTQUFTLGNBQUFvRCxzQkFBQSx1QkFBbkNBLHNCQUFBLENBQXFDckQsZ0JBQWdCO01BQzlFQSxnQkFBZ0IsYUFBaEJBLGdCQUFnQixlQUFoQkEsZ0JBQWdCLENBQUV6QyxPQUFPLENBQUMsSUFBSSxDQUFDMkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDL0IsT0FBTyxDQUFDK0IsTUFBTSxFQUFFLENBQUM7SUFDbkU7RUFBQztJQUFBL0gsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThILE9BQUEsRUFBUztNQUNMLE9BQU87UUFDSGEsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztRQUNqQi9JLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVU7UUFDM0JDLElBQUksRUFBRSxJQUFJLENBQUNBLElBQUk7UUFDZndJLGFBQWEsRUFBRSxJQUFJLENBQUNsRixRQUFRO1FBQzVCZ0ksWUFBWSxFQUFFLElBQUksQ0FBQ3RDLGlCQUFpQjtRQUNwQ2xILFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7UUFDdkJ5SixRQUFRLEVBQUUsSUFBSSxDQUFDdEMsU0FBUyxDQUFDdUMsR0FBRztRQUM1QnJDLFdBQVcsRUFBRSxJQUFJLENBQUNBO01BQ3RCLENBQUM7SUFDTDtFQUFDO0VBQUEsT0FBQVIsU0FBQTtBQUFBLEVBblMwQmxDLE9BQU87O0FBc1N0QztBQUNBO0FBQ0E7QUFDTyxJQUFNZ0YsY0FBYywwQkFBQUMsU0FBQTtFQUFBckUsU0FBQSxDQUFBb0UsY0FBQSxFQUFBQyxTQUFBO0VBQUEsSUFBQUMsT0FBQSxHQUFBcEUsWUFBQSxDQUFBa0UsY0FBQTtFQWdDdkIsU0FBQUEsZUFBWXJGLEVBQUUsRUFBRXdGLElBQUksRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQUV4SSxRQUFRLEVBQUU7SUFBQSxJQUFBeUksTUFBQTtJQUFBM00sZUFBQSxPQUFBcU0sY0FBQTtJQUN6Q00sTUFBQSxHQUFBSixPQUFBLENBQUFsRSxJQUFBO0lBaENKO0FBQ0o7QUFDQTtJQUZJcEksZUFBQSxDQUFBcUksc0JBQUEsQ0FBQXFFLE1BQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSTFNLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUFxRSxNQUFBO0lBS0E7QUFDSjtBQUNBO0lBRkkxTSxlQUFBLENBQUFxSSxzQkFBQSxDQUFBcUUsTUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJMU0sZUFBQSxDQUFBcUksc0JBQUEsQ0FBQXFFLE1BQUE7SUFLQTtBQUNKO0FBQ0E7QUFDQTtJQUhJMU0sZUFBQSxDQUFBcUksc0JBQUEsQ0FBQXFFLE1BQUE7SUFNQTtBQUNKO0FBQ0E7SUFGSTFNLGVBQUEsQ0FBQXFJLHNCQUFBLENBQUFxRSxNQUFBO0lBUUlBLE1BQUEsQ0FBSzNGLEVBQUUsR0FBR0EsRUFBRTtJQUNaMkYsTUFBQSxDQUFLSCxJQUFJLEdBQUdBLElBQUk7SUFDaEJHLE1BQUEsQ0FBS0YsR0FBRyxHQUFHQSxHQUFHO0lBQ2RFLE1BQUEsQ0FBS0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCQyxNQUFBLENBQUt6SSxRQUFRLEdBQUdBLFFBQVE7SUFDeEJ5SSxNQUFBLENBQUt6QyxXQUFXLEdBQUcsQ0FBQztJQUVwQnlDLE1BQUEsQ0FBS0Msa0JBQWtCLEVBQUU7SUFBQyxPQUFBRCxNQUFBO0VBQzlCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0VBSEk5TCxZQUFBLENBQUF3TCxjQUFBO0lBQUF2TCxHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBK0csaUJBQWlCNUQsUUFBUSxFQUFFO01BQ3ZCLElBQUlBLFFBQVEsSUFBSSxJQUFJLENBQUM4QyxFQUFFLENBQUM5QyxRQUFRLEVBQUU7UUFDOUIsSUFBSSxDQUFDc0QsWUFBWSxFQUFFO01BQ3ZCO0lBQ0o7O0lBRUE7QUFDSjtBQUNBO0VBRkk7SUFBQTFHLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUE2TCxtQkFBQSxFQUFxQjtNQUNqQixJQUFNSixJQUFJLEdBQUksSUFBSSxDQUFDQSxJQUFJLEtBQUt6TSxTQUFTLEdBQUcsSUFBSSxDQUFDeU0sSUFBSSxDQUFDSyxXQUFXLEVBQUUsR0FBRzlNLFNBQVU7TUFFNUUsUUFBUXlNLElBQUk7UUFDUixLQUFLek0sU0FBUztVQUNWLElBQUksQ0FBQ21LLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQ2hHLFFBQVEsR0FBRyxJQUFJLENBQUM4QyxFQUFFLENBQUM5QyxRQUFRLElBQUksSUFBSSxDQUFDOEMsRUFBRSxDQUFDdEUsUUFBUTtVQUN4RTtRQUNKLEtBQUssT0FBTztVQUNSLElBQUksQ0FBQ3dILFdBQVcsR0FBRyxHQUFHO1VBQ3RCO1FBQ0osS0FBSyxlQUFlO1VBQ2hCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUk7VUFDdkI7UUFDSixLQUFLLFVBQVU7VUFDWCxJQUFJLENBQUNBLFdBQVcsR0FBRyxHQUFHO1VBQ3RCO1FBQ0osS0FBSyxlQUFlO1VBQ2hCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUk7VUFDdkI7UUFDSixLQUFLLFVBQVU7VUFDWCxJQUFJLENBQUNBLFdBQVcsR0FBRyxHQUFHO1VBQ3RCO1FBQ0osS0FBSyxVQUFVO1VBQ1gsSUFBSSxDQUFDQSxXQUFXLEdBQUcsSUFBSSxDQUFDd0MsTUFBTSxHQUFHLElBQUksQ0FBQzFGLEVBQUUsQ0FBQ3RFLFFBQVE7VUFDakQ7UUFDSixLQUFLLFlBQVk7VUFDYixJQUFJLENBQUN3SCxXQUFXLEdBQUcsR0FBRztVQUN0QjtNQUFNO0lBRWxCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQSTtJQUFBcEosR0FBQTtJQUFBQyxLQUFBLEVBUUEsU0FBQTJLLGNBQWNMLGdCQUFnQixFQUFFRSxjQUFjLEVBQUU7TUFDNUM7TUFDQSxJQUFNN0QsaUJBQWlCLEdBQUcsSUFBSSxDQUFDVixFQUFFLENBQUNGLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDZSxpQkFBaUI7TUFFbEUsSUFBSTJELGdCQUFnQixJQUFJLElBQUksQ0FBQ25CLFdBQVcsSUFBSSxJQUFJLENBQUNBLFdBQVcsSUFBSXFCLGNBQWMsRUFBRTtRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDaEUsVUFBVSxFQUFFLEVBQUU7VUFDcEIsT0FBTyxLQUFLO1FBQ2hCO1FBRUF0RSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLGFBQWEsSUFBSSxJQUFJLENBQUM4TSxJQUFJLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxHQUFJL0ssSUFBSSxDQUFDa0ssS0FBSyxDQUFDLElBQUksQ0FBQ3pCLFdBQVcsR0FBRyxHQUFHLENBQUUsR0FBRyxPQUFPLEVBQUV4QyxpQkFBaUIsQ0FBQ3BFLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztRQUV4SixJQUFJLElBQUksQ0FBQ3VGLEdBQUcsS0FBSzFNLFNBQVMsSUFBSSxJQUFJLENBQUMwTSxHQUFHLENBQUMzTSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQy9DbUQsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDK00sR0FBRyxFQUFFL0UsaUJBQWlCLENBQUNwRSxPQUFPLENBQUM0RCxFQUFFLENBQUM7VUFDNUVFLGdFQUFjLENBQUMwRixXQUFXLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDckYsaUJBQWlCLENBQUNwRSxPQUFPLEVBQUUsSUFBSSxDQUFDbUosR0FBRyxDQUFDO1FBQzdFO01BQ0o7TUFFQSxPQUFPLElBQUk7SUFDZjtFQUFDO0VBQUEsT0FBQUosY0FBQTtBQUFBLEVBbkgrQmhGLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RoQk87QUFDUTtBQUNGO0FBRTZCO0FBRXJGLElBQU0zSCxHQUFHLEdBQUcsa0JBQWtCO0FBQUMsSUFFVjBELGlCQUFpQjtFQTZKbEMsU0FBQUEsa0JBQVlFLE9BQU8sRUFBRTJKLGFBQWEsRUFBRTtJQUFBak4sZUFBQSxPQUFBb0QsaUJBQUE7SUF0SnBDO0lBRUE7QUFDSjtBQUNBO0lBRkluRCxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7QUFDQTtJQUhJQSxlQUFBO0lBTUE7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUNJO0lBRUE7QUFDSjtBQUNBO0lBRklBLGVBQUE7SUFLQTtBQUNKO0FBQ0E7SUFGSUEsZUFBQTtJQUtBO0FBQ0o7QUFDQTtJQUZJQSxlQUFBO0lBS0E7QUFDSjtBQUNBO0FBQ0E7SUFISUEsZUFBQTtJQU1BO0FBQ0o7QUFDQTtBQUNBO0lBSElBLGVBQUE7SUFPSSxJQUFJLENBQUNxRCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDMkosYUFBYSxHQUFHQSxhQUFhO0lBRWxDLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7SUFFbkIsSUFBSSxDQUFDdkcsTUFBTSxHQUFHNUcsU0FBUztJQUV2QixJQUFJLENBQUNvTixNQUFNLEdBQUcsRUFBRTtJQUVoQixJQUFJLENBQUNDLGlCQUFpQixHQUFHck4sU0FBUztJQUNsQyxJQUFJLENBQUNzTixnQkFBZ0IsR0FBR3ROLFNBQVM7SUFFakMsSUFBSSxDQUFDdU4sT0FBTyxHQUFHLEtBQUs7SUFDcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO0lBRXRCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLENBQUM7SUFDckIsSUFBSSxDQUFDQyx1QkFBdUIsR0FBRyxDQUFDO0lBQ2hDLElBQUksQ0FBQ0MscUJBQXFCLEdBQUcsQ0FBQztJQUU5QixJQUFJLENBQUNDLFlBQVksR0FBRyxLQUFLO0lBQ3pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHOU4sU0FBUztJQUN4QixJQUFJLENBQUMrTixLQUFLLEdBQUcvTixTQUFTO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDZ08sbUJBQW1CLEdBQUdoTyxTQUFTO0lBQ3BDLElBQUksQ0FBQ2lPLGlCQUFpQixHQUFHLEtBQUs7SUFDOUIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxLQUFLO0lBQy9CLElBQUksQ0FBQ0MsY0FBYyxHQUFHLENBQUM7SUFFdkIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBRy9LLGlCQUFpQixDQUFDZ0wsdUJBQXVCO0VBQzFFOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBVEl2TixZQUFBLENBQUF1QyxpQkFBQTtJQUFBdEMsR0FBQTtJQUFBQyxLQUFBLEVBVUEsU0FBQXNOLGlCQUFpQlIsT0FBTyxFQUFFbk4sWUFBWSxFQUFFNE4sSUFBSSxFQUFFQyxZQUFZLEVBQUVULEtBQUssRUFBRTtNQUMvRDtNQUNBLElBQUksQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPOztNQUV0QjtNQUNBLElBQUksQ0FBQ25OLFlBQVksR0FBR0EsWUFBWTtNQUNoQyxJQUFJLENBQUNrTixZQUFZLEdBQUcsSUFBSTs7TUFFeEI7TUFDQSxJQUFJVyxZQUFZLEtBQUt4TyxTQUFTLEVBQUU7UUFDNUIsSUFBSSxDQUFDd08sWUFBWSxHQUFHQSxZQUFZO1FBQ2hDLElBQUksQ0FBQ1QsS0FBSyxHQUFHQSxLQUFLO01BQ3RCOztNQUVBO01BQ0EsSUFBSSxDQUFDVSxXQUFXLENBQUNGLElBQUksQ0FBQztNQUV0QnJMLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO0lBQ3RFOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFwRyxHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBME4sbUJBQUEsRUFBcUI7TUFBQSxJQUFBM0ksS0FBQTtNQUNqQjtNQUNBLElBQUksSUFBSSxDQUFDeEMsT0FBTyxDQUFDb0wsT0FBTyxLQUFLLElBQUksRUFBRTtRQUMvQjtNQUNKO01BRUEsSUFBSSxJQUFJLENBQUNkLFlBQVksS0FBSyxJQUFJLEVBQUU7UUFDNUIzSyxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLDhCQUE4QixFQUFFLElBQUksQ0FBQzRELE9BQU8sQ0FBQzRELEVBQUUsQ0FBQzs7UUFFckU7UUFDQSxJQUFJeUgsYUFBYSxHQUFHLElBQUksQ0FBQ2QsT0FBTzs7UUFFaEM7UUFDQTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1FBSVksSUFBTWUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDdEwsT0FBTyxDQUFDdUwsUUFBUSxDQUFDQyxhQUFhLEVBQUU7UUFDaEUsSUFBTUMsVUFBVSxHQUFHO1VBQ2ZDLFNBQVMsRUFBRUosa0JBQWtCLENBQUNJO1FBQ2xDLENBQUM7UUFDRDVILGdFQUFjLENBQUMwRixXQUFXLEVBQUUsQ0FBQ21DLFVBQVUsQ0FBQyxJQUFJLENBQUMzTCxPQUFPLEVBQUV5TCxVQUFVLEVBQUVKLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FDakZPLElBQUksQ0FBQyxVQUFBQyxNQUFNLEVBQUk7VUFDWjtVQUNBLElBQUlySixLQUFJLENBQUN4QyxPQUFPLENBQUNvTCxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQy9CO1VBQ0o7O1VBRUE7VUFDQSxJQUFJNUksS0FBSSxDQUFDdUgsZ0JBQWdCLEtBQUt0TixTQUFTLEVBQUU7WUFDckNpTiw0REFBVSxDQUFDRixXQUFXLEVBQUUsQ0FBQ3NDLE1BQU0sQ0FBQ3RKLEtBQUksQ0FBQ3VILGdCQUFnQixDQUFDO1VBQzFEO1VBRUEsSUFBSThCLE1BQU0sQ0FBQ0UsVUFBVSxJQUFJLEdBQUcsSUFBSUYsTUFBTSxDQUFDRSxVQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ3JEO1lBQ0EsSUFBSWYsSUFBSTtZQUNSLElBQUk7Y0FDQUEsSUFBSSxHQUFHakUsSUFBSSxDQUFDQyxLQUFLLENBQUM2RSxNQUFNLENBQUNHLE9BQU8sQ0FBQztZQUNyQyxDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2NBQ1J0TSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLHFDQUFxQyxFQUFFb0csS0FBSSxDQUFDeEMsT0FBTyxDQUFDNEQsRUFBRSxDQUFDOztjQUU1RTtjQUNBLElBQUlwQixLQUFJLENBQUNrSSxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pDbEksS0FBSSxDQUFDdUgsZ0JBQWdCLEdBQUdMLDREQUFVLENBQUNGLFdBQVcsRUFBRSxDQUFDMEMsVUFBVSxDQUFDMUosS0FBSSxDQUFDcUkscUJBQXFCLEVBQUUsWUFBTTtrQkFDMUZySSxLQUFJLENBQUN1SCxnQkFBZ0IsR0FBR3ROLFNBQVM7a0JBRWpDK0YsS0FBSSxDQUFDMkksa0JBQWtCLEVBQUU7Z0JBQzdCLENBQUMsQ0FBQztjQUNOO2NBRUE7WUFDSjs7WUFFQTtZQUNBM0ksS0FBSSxDQUFDa0ksaUJBQWlCLEdBQUcsSUFBSTs7WUFFN0I7WUFDQWxJLEtBQUksQ0FBQzBJLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDOztZQUV0QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztZQUt3QjtZQUNBLElBQUl4SSxLQUFJLENBQUMySixNQUFNLEVBQUUsRUFBRTtjQUNmO2NBQ0EzSixLQUFJLENBQUN1SCxnQkFBZ0IsR0FBR0wsNERBQVUsQ0FBQ0YsV0FBVyxFQUFFLENBQUMwQyxVQUFVLENBQUMxSixLQUFJLENBQUNxSSxxQkFBcUIsRUFBRSxZQUFNO2dCQUMxRnJJLEtBQUksQ0FBQ3VILGdCQUFnQixHQUFHdE4sU0FBUztnQkFFakMrRixLQUFJLENBQUMySSxrQkFBa0IsRUFBRTtjQUM3QixDQUFDLENBQUM7WUFDTixDQUFDLE1BQU07Y0FDSHhMLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsa0RBQWtELEVBQUVvRyxLQUFJLENBQUN4QyxPQUFPLENBQUM0RCxFQUFFLENBQUM7WUFDN0Y7VUFDSixDQUFDLE1BQU07WUFDSGpFLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsZ0RBQWdELEdBQUd5UCxNQUFNLENBQUNFLFVBQVUsR0FBRyxHQUFHLEVBQUV2SixLQUFJLENBQUN4QyxPQUFPLENBQUM0RCxFQUFFLENBQUM7VUFDckg7UUFDSixDQUFDLENBQUM7TUFDVjtJQUNKOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0lBR0k7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBcEcsR0FBQTtJQUFBQyxLQUFBLEVBSUEsU0FBQTJPLFdBQVc1SSxPQUFPLEVBQUU7TUFDaEI7TUFDQTtNQUNBLElBQUk2SSxNQUFNO01BQ1Y3SSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLE9BQU8sQ0FBQyxVQUFDaUIsRUFBRSxFQUFFMEMsS0FBSyxFQUFLO1FBQy9CLElBQU1rRyxNQUFNLEdBQUc5SSxPQUFPLENBQUNDLEdBQUcsQ0FBQzJDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSWtHLE1BQU0sS0FBSzdQLFNBQVMsSUFBSTZQLE1BQU0sQ0FBQzFMLFFBQVEsR0FBRzhDLEVBQUUsQ0FBQzlDLFFBQVEsR0FBRzhDLEVBQUUsQ0FBQ3RFLFFBQVEsRUFBRTtVQUNyRWtOLE1BQU0sQ0FBQzFMLFFBQVEsR0FBRzhDLEVBQUUsQ0FBQzlDLFFBQVEsR0FBRzhDLEVBQUUsQ0FBQ3RFLFFBQVE7VUFDM0NrTixNQUFNLENBQUM1RixNQUFNLENBQUM2RixNQUFNLENBQUMsVUFBQXBFLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUN2SCxRQUFRLEdBQUcwTCxNQUFNLENBQUMxTCxRQUFRO1VBQUEsRUFBQyxDQUMxRDZCLE9BQU8sQ0FBQyxVQUFBMEYsS0FBSyxFQUFJO1lBQ2RBLEtBQUssQ0FBQ3ZILFFBQVEsR0FBRzBMLE1BQU0sQ0FBQzFMLFFBQVE7VUFDcEMsQ0FBQyxDQUFDO1FBQ1Y7UUFFQXlMLE1BQU0sR0FBRzNJLEVBQUU7TUFDZixDQUFDLENBQUM7O01BRUY7TUFDQTtNQUNBLElBQUkySSxNQUFNLEtBQUs1UCxTQUFTLEVBQUU7UUFDdEIrRyxPQUFPLENBQUNwRSxRQUFRLEdBQUdpTixNQUFNLENBQUN6TCxRQUFRLEdBQUd5TCxNQUFNLENBQUNqTixRQUFRLEdBQUdvRSxPQUFPLENBQUM1QyxRQUFRO01BQzNFO0lBQ0o7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEk7SUFBQXBELEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUF5TixZQUFZRixJQUFJLEVBQUU7TUFBQSxJQUFBMUgsTUFBQTtNQUNkLElBQU1sRyxZQUFZLEdBQUc0TixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtNQUMvQyxJQUFNM0csYUFBYSxHQUFHMkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQzs7TUFFbkQ7TUFDQSxJQUFNd0IsWUFBWSxHQUFHeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUlsTCxpQkFBaUIsQ0FBQ2dMLHVCQUF1QjtNQUMxRixJQUFJMEIsWUFBWSxJQUFJLElBQUksSUFBSUEsWUFBWSxJQUFJMU0saUJBQWlCLENBQUNnTCx1QkFBdUIsRUFBRTtRQUNuRixJQUFJLENBQUNELHFCQUFxQixHQUFHMkIsWUFBWTtRQUV6QzdNLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsMkJBQTJCLEdBQUcsSUFBSSxDQUFDeU8scUJBQXFCLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQzdLLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUMxRyxDQUFDLE1BQU07UUFDSGpFLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsMkJBQTJCLEdBQUcwRCxpQkFBaUIsQ0FBQ2dMLHVCQUF1QixHQUFHLG9CQUFvQixFQUFFLElBQUksQ0FBQzlLLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUN6STtNQUVBLElBQU02SSxhQUFhLEdBQUcsSUFBSXRJLHNEQUFhLENBQUMsSUFBSSxFQUFFL0csWUFBWSxFQUFFaUgsYUFBYSxDQUFDO01BQzFFLElBQU1xSSxNQUFNLEdBQUcxQixJQUFJLENBQUMsUUFBUSxDQUFDO01BQzdCLElBQUkyQixLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7UUFDdkJBLE1BQU0sQ0FBQ2pLLE9BQU8sQ0FBQyxVQUFBb0ssS0FBSyxFQUFJO1VBQ3BCLElBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7VUFDbkMsSUFBTUUsU0FBUyxHQUFHRixLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUd4SSxhQUFhO1VBQ3ZELElBQUlqRixRQUFRLEdBQUd5TixLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztVQUN4QyxJQUFNcEosR0FBRyxHQUFHb0osS0FBSyxDQUFDLEtBQUssQ0FBQzs7VUFFeEI7VUFDQSxJQUFNRyxjQUFjLEdBQUcsSUFBSXZJLHVEQUFjLENBQUNnSSxhQUFhLEVBQUVLLFNBQVMsRUFBRUMsU0FBUyxFQUFFM04sUUFBUSxFQUFFa0UsTUFBSSxDQUFDNkksTUFBTSxFQUFFLENBQUM7O1VBRXZHO1VBQ0EsSUFBSVEsS0FBSyxDQUFDQyxPQUFPLENBQUNuSixHQUFHLENBQUMsRUFBRTtZQUNwQkEsR0FBRyxDQUFDaEIsT0FBTyxDQUFDLFVBQUNpQixFQUFFLEVBQUV1SixjQUFjLEVBQUs7Y0FDaEM7Y0FDQTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2NBRXdCLElBQU1GLFNBQVMsR0FBR3JKLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBR1csYUFBYTtjQUNwRCxJQUFNakYsUUFBUSxHQUFHc0UsRUFBRSxDQUFDLGFBQWEsQ0FBQztjQUNsQyxJQUFNZ0QsTUFBTSxHQUFHaEQsRUFBRSxDQUFDLGdCQUFnQixDQUFDOztjQUVuQztjQUNBLElBQU13SixTQUFTLEdBQUd4SixFQUFFLENBQUMsV0FBVyxDQUFDOztjQUVqQztjQUNBLElBQUl5SixTQUFTLEdBQUcsSUFBSTtjQUNwQixJQUFJUixLQUFLLENBQUNDLE9BQU8sQ0FBQ2xHLE1BQU0sQ0FBQyxJQUFJQSxNQUFNLENBQUNsSyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QzJRLFNBQVMsR0FBSUosU0FBUyxHQUFHLENBQUMsSUFBSXJHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUtxRyxTQUFTLEtBQUssQ0FBQztjQUM5RTs7Y0FFQTtjQUNBLElBQUlBLFNBQVMsS0FBS3RRLFNBQVMsSUFBSTJDLFFBQVEsS0FBSzNDLFNBQVMsSUFBSTBRLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQUEsSUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQTtnQkFDekUsSUFBTUMsYUFBYSxHQUFHN0osRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHVyxhQUFhLElBQUksQ0FBQztnQkFDN0QsSUFBTWdDLFNBQVMsR0FBR2tILGFBQWEsS0FBSyxDQUFDLElBQUlBLGFBQWEsS0FBSzlRLFNBQVMsSUFBSThRLGFBQWEsS0FBSyxJQUFJO2dCQUM5RixJQUFNbFEsVUFBVSxHQUFHcUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQU1wRyxJQUFJLEdBQUdvRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHcUosU0FBUyxJQUFJLEVBQUU7Z0JBQy9DLElBQU14RyxTQUFTLEdBQUc7a0JBQ2R1QyxHQUFHLEVBQUUsRUFBQXNFLGVBQUEsR0FBQTFKLEVBQUUsQ0FBQzhKLFdBQVcsY0FBQUosZUFBQSx1QkFBZEEsZUFBQSxDQUFnQkssZUFBZSxLQUFJLEVBQUU7a0JBQzFDQyxRQUFRLEVBQUUsRUFBQUwsZ0JBQUEsR0FBQTNKLEVBQUUsQ0FBQzhKLFdBQVcsY0FBQUgsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCTSxhQUFhLEtBQUksRUFBRTtrQkFDN0NDLFdBQVcsRUFBRSxFQUFBTixnQkFBQSxHQUFBNUosRUFBRSxDQUFDOEosV0FBVyxjQUFBRixnQkFBQSx1QkFBZEEsZ0JBQUEsQ0FBZ0JPLFdBQVcsS0FBSTtnQkFDaEQsQ0FBQztnQkFDRCxJQUFNQyxlQUFlLEdBQUdwSyxFQUFFLENBQUNxSyxlQUFlLElBQUksRUFBRTtnQkFDaEQsSUFBSXZILGFBQWEsR0FBRyxFQUFFO2dCQUN0QnNILGVBQWUsQ0FBQ3JMLE9BQU8sQ0FBQyxVQUFBdUwsT0FBTyxFQUFJO2tCQUMvQnhILGFBQWEsQ0FBQ2UsSUFBSSxDQUFDO29CQUNmMEcsTUFBTSxFQUFFRCxPQUFPLENBQUNDLE1BQU0sSUFBSSxFQUFFO29CQUM1QkMsbUJBQW1CLEVBQUVGLE9BQU8sQ0FBQ0csbUJBQW1CLElBQUksRUFBRTtvQkFDdERDLG1CQUFtQixFQUFFSixPQUFPLENBQUNLLG1CQUFtQixJQUFJLEVBQUU7b0JBQ3REQyxjQUFjLEVBQUVOLE9BQU8sQ0FBQ08sY0FBYyxJQUFJLEVBQUU7b0JBQzVDQyxzQkFBc0IsRUFBRVIsT0FBTyxDQUFDUyxzQkFBc0IsSUFBSTtrQkFDOUQsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQztnQkFFRixJQUFNQyxTQUFTLEdBQUcsSUFBSXpJLGtEQUFTLENBQUMrRyxjQUFjLEVBQUVDLGNBQWMsRUFBRUYsU0FBUyxFQUFFM04sUUFBUSxFQUFFaUgsU0FBUyxFQUFFa0gsYUFBYSxFQUFFbFEsVUFBVSxFQUFFQyxJQUFJLEVBQUVpSixTQUFTLEVBQUVDLGFBQWEsRUFBRTBHLFNBQVMsQ0FBQztnQkFDcktGLGNBQWMsQ0FBQ3ZKLEdBQUcsQ0FBQzhELElBQUksQ0FBQ21ILFNBQVMsQ0FBQzs7Z0JBRWxDO2dCQUNBLElBQUkvQixLQUFLLENBQUNDLE9BQU8sQ0FBQ2xHLE1BQU0sQ0FBQyxFQUFFO2tCQUN2QkEsTUFBTSxDQUFDakUsT0FBTyxDQUFDLFVBQUEwRixLQUFLLEVBQUk7b0JBQ3BCLElBQU1nQixHQUFHLEdBQUdoQixLQUFLLENBQUMsYUFBYSxDQUFDO29CQUVoQyxJQUFJZ0IsR0FBRyxLQUFLMU0sU0FBUyxFQUFFO3NCQUNuQixJQUFNeU0sSUFBSSxHQUFHZixLQUFLLENBQUMsTUFBTSxDQUFDO3NCQUMxQixJQUFNaUIsTUFBTSxHQUFHakIsS0FBSyxDQUFDLFdBQVcsQ0FBQztzQkFDakMsSUFBTXdHLElBQUksR0FBR3hHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRzlELGFBQWEsSUFBSTBJLFNBQVM7c0JBRTFELElBQU02QixjQUFjLEdBQUcsSUFBSTdGLHVEQUFjLENBQUMyRixTQUFTLEVBQUV4RixJQUFJLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFdUYsSUFBSSxDQUFDO3NCQUM3RUQsU0FBUyxDQUFDaEksTUFBTSxDQUFDYSxJQUFJLENBQUNxSCxjQUFjLENBQUM7b0JBQ3pDO2tCQUNKLENBQUMsQ0FBQztnQkFDTjtjQUNKO1lBQ0osQ0FBQyxDQUFDO1VBQ047O1VBRUE7VUFDQSxJQUFJNUIsY0FBYyxDQUFDdkosR0FBRyxDQUFDakgsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQmlRLGFBQWEsQ0FBQ2xKLFFBQVEsQ0FBQ2dFLElBQUksQ0FBQ3lGLGNBQWMsQ0FBQztVQUMvQztRQUNKLENBQUMsQ0FBQztRQUVGUCxhQUFhLENBQUNsSixRQUFRLENBQUNkLE9BQU8sQ0FBQyxVQUFBZSxPQUFPLEVBQUk7VUFDdENGLE1BQUksQ0FBQzhJLFVBQVUsQ0FBQzVJLE9BQU8sQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDTjs7TUFFQTtNQUNBLElBQUlxTCxXQUFXLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNyQyxhQUFhLENBQUM7O01BRWpEO01BQ0EsSUFBSSxDQUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQ3hHLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDd0MsR0FBRyxDQUFDLFVBQUF2QyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDK0IsTUFBTSxFQUFFO01BQUEsRUFBQzs7TUFFbkU7TUFDQSxJQUFJLENBQUN3SixvQkFBb0IsQ0FBQ0YsV0FBVyxDQUFDO0lBQzFDOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUFyUixHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBMkQsTUFBQSxFQUFRO01BQUEsSUFBQWlJLE1BQUE7TUFDSixJQUFJLElBQUksQ0FBQ1MsaUJBQWlCLEtBQUtyTixTQUFTLEVBQUU7UUFDdEM7UUFDQSxJQUFJLENBQUNxTixpQkFBaUIsR0FBR0osNERBQVUsQ0FBQ0YsV0FBVyxFQUFFLENBQUMwQyxVQUFVLENBQUNwTSxpQkFBaUIsQ0FBQ2tQLHdCQUF3QixFQUFFLFlBQU07VUFDM0czRixNQUFJLENBQUNTLGlCQUFpQixHQUFHck4sU0FBUzs7VUFFbEM7VUFDQTRNLE1BQUksQ0FBQzRGLGlCQUFpQixDQUFDNUYsTUFBSSxDQUFDTSxhQUFhLENBQUN1RixXQUFXLEVBQUUsQ0FBQztRQUM1RCxDQUFDLENBQUM7TUFDTjtJQUNKOztJQUVBO0FBQ0o7QUFDQTtFQUZJO0lBQUExUixHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBMFIsS0FBQSxFQUFPO01BQ0gsSUFBSSxJQUFJLENBQUNyRixpQkFBaUIsS0FBS3JOLFNBQVMsRUFBRTtRQUN0Q2tELGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsbUNBQW1DLEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1FBRTFFOEYsNERBQVUsQ0FBQ0YsV0FBVyxFQUFFLENBQUNzQyxNQUFNLENBQUMsSUFBSSxDQUFDaEMsaUJBQWlCLENBQUM7UUFDdkQsSUFBSSxDQUFDQSxpQkFBaUIsR0FBR3JOLFNBQVM7TUFDdEM7SUFDSjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSTtJQUFBZSxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBME8sT0FBQSxFQUFTO01BQ0wsSUFBSSxJQUFJLENBQUNpRCxjQUFjLEtBQUszUyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxLQUFLO01BQ2hCO01BRUEsT0FBTyxJQUFJLENBQUNrTixhQUFhLENBQUMwRixXQUFXLEVBQUUsSUFBSSxDQUFDO0lBQ2hEOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWSTtJQUFBN1IsR0FBQTtJQUFBQyxLQUFBLEVBV0EsU0FBQXFSLFlBQVl6TCxNQUFNLEVBQUU7TUFBQSxJQUFBaU0sTUFBQTtNQUNoQixJQUFJVCxXQUFXLEdBQUcsS0FBSzs7TUFFdkI7TUFDQSxJQUFJLElBQUksQ0FBQ3hMLE1BQU0sS0FBSzVHLFNBQVMsRUFBRTtRQUMzQixJQUFJLENBQUM0RyxNQUFNLEdBQUdBLE1BQU07UUFFcEIxRCxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFaUgsTUFBTSxDQUFDRSxRQUFRLENBQUMvRyxNQUFNLEdBQUcscUJBQXFCLEVBQUUsSUFBSSxDQUFDd0QsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1FBRXJGaUwsV0FBVyxHQUFHLElBQUk7TUFDdEIsQ0FBQyxNQUFNO1FBQ0gsSUFBSVUsVUFBVSxHQUFHLENBQUM7UUFDbEIsSUFBSUMsY0FBYyxHQUFHLENBQUM7O1FBRXRCO1FBQ0EsSUFBSSxDQUFDbk0sTUFBTSxDQUFDakcsWUFBWSxHQUFHaUcsTUFBTSxDQUFDakcsWUFBWTtRQUM5QyxJQUFJLENBQUNpRyxNQUFNLENBQUNnQixhQUFhLEdBQUdoQixNQUFNLENBQUNnQixhQUFhOztRQUVoRDtRQUNBLElBQU1vTCxVQUFVLEdBQUdwTSxNQUFNLENBQUNFLFFBQVEsQ0FBQ3dDLEdBQUcsQ0FBQyxVQUFBdkMsT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQ0ksRUFBRTtRQUFBLEVBQUM7UUFDN0QsSUFBSSxDQUFDUCxNQUFNLENBQUNFLFFBQVEsQ0FBQ2QsT0FBTyxDQUFDLFVBQUNlLE9BQU8sRUFBRTRDLEtBQUssRUFBRXNKLEtBQUssRUFBSztVQUFBLElBQUFDLHFCQUFBO1VBQ3BEO1VBQ0EsSUFBSSxDQUFDRixVQUFVLENBQUNHLFFBQVEsQ0FBQ3BNLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDLElBQUksRUFBQStMLHFCQUFBLEdBQUFMLE1BQUksQ0FBQ08sZ0JBQWdCLGNBQUFGLHFCQUFBLHVCQUFyQkEscUJBQUEsQ0FBdUJuTSxPQUFPLENBQUNJLEVBQUUsTUFBS0osT0FBTyxDQUFDSSxFQUFFLEVBQUU7WUFDdEY4TCxLQUFLLENBQUNJLE1BQU0sQ0FBQzFKLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFdEJvSixjQUFjLEVBQUU7WUFFaEJYLFdBQVcsR0FBRyxJQUFJO1VBQ3RCO1FBQ0osQ0FBQyxDQUFDOztRQUVGO1FBQ0F4TCxNQUFNLENBQUNFLFFBQVEsQ0FBQ2QsT0FBTyxDQUFDLFVBQUNlLE9BQU8sRUFBRTRDLEtBQUssRUFBSztVQUN4QztVQUNBNUMsT0FBTyxDQUFDSCxNQUFNLEdBQUdpTSxNQUFJLENBQUNqTSxNQUFNOztVQUU1QjtVQUNBLElBQU0wTSxjQUFjLEdBQUdULE1BQUksQ0FBQ2pNLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDLFVBQUF3TCxjQUFjO1lBQUEsT0FBSUEsY0FBYyxDQUFDbk0sRUFBRSxLQUFLSixPQUFPLENBQUNJLEVBQUU7VUFBQSxFQUFDO1VBQ3BHLElBQUltTSxjQUFjLEtBQUt0VCxTQUFTLEVBQUU7WUFDOUI7WUFDQStHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOEksTUFBTSxDQUFDLFVBQUE3SSxFQUFFO2NBQUEsT0FBSXFNLGNBQWMsQ0FBQ3RNLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDLFVBQUF5TCxTQUFTO2dCQUFBLE9BQUlBLFNBQVMsQ0FBQzFTLElBQUksS0FBS29HLEVBQUUsQ0FBQ3BHLElBQUk7Y0FBQSxFQUFDLEtBQUtiLFNBQVM7WUFBQSxFQUFDLENBQ25HZ0csT0FBTyxDQUFDLFVBQUFpQixFQUFFLEVBQUk7Y0FDWDtjQUNBO2NBQ0EsSUFBTXVNLFdBQVcsR0FBR0YsY0FBYyxDQUFDdE0sR0FBRyxDQUFDeU0sU0FBUyxDQUFDLFVBQUFGLFNBQVM7Z0JBQUEsT0FBSUEsU0FBUyxDQUFDcFAsUUFBUSxHQUFHOEMsRUFBRSxDQUFDOUMsUUFBUTtjQUFBLEVBQUM7Y0FDL0YsSUFBSXFQLFdBQVcsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDcEJGLGNBQWMsQ0FBQ3RNLEdBQUcsQ0FBQzhELElBQUksQ0FBQzdELEVBQUUsQ0FBQztjQUMvQixDQUFDLE1BQU07Z0JBQ0hxTSxjQUFjLENBQUN0TSxHQUFHLENBQUNxTSxNQUFNLENBQUNHLFdBQVcsRUFBRSxDQUFDLEVBQUV2TSxFQUFFLENBQUM7Y0FDakQ7Y0FFQTZMLFVBQVUsRUFBRTtjQUVaVixXQUFXLEdBQUcsSUFBSTtZQUN0QixDQUFDLENBQUM7O1lBRU47WUFDQSxJQUFNc0IsV0FBVyxHQUFHSixjQUFjLENBQUMzUSxRQUFRO1lBQzNDa1EsTUFBSSxDQUFDbEQsVUFBVSxDQUFDMkQsY0FBYyxDQUFDO1lBRS9CLElBQUlJLFdBQVcsS0FBS0osY0FBYyxDQUFDM1EsUUFBUSxFQUFFO2NBQ3pDTyxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLFdBQVcsSUFBSWdLLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdrSixNQUFJLENBQUNqTSxNQUFNLENBQUNFLFFBQVEsQ0FBQy9HLE1BQU0sR0FBRywwQkFBMEIsR0FBRzJULFdBQVcsR0FBRyxNQUFNLEdBQUdKLGNBQWMsQ0FBQzNRLFFBQVEsRUFBRWtRLE1BQUksQ0FBQ3RQLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztZQUN0TDtVQUNKLENBQUMsTUFBTTtZQUNIO1lBQ0EwTCxNQUFJLENBQUNqTSxNQUFNLENBQUNFLFFBQVEsQ0FBQ2dFLElBQUksQ0FBQy9ELE9BQU8sQ0FBQztZQUVsQytMLFVBQVUsSUFBSS9MLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDakgsTUFBTTtZQUVoQ3FTLFdBQVcsR0FBRyxJQUFJO1VBQ3RCO1FBQ0osQ0FBQyxDQUFDO1FBRUZsUCxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLElBQUksQ0FBQ2lILE1BQU0sQ0FBQ0UsUUFBUSxDQUFDL0csTUFBTSxHQUFHLHlCQUF5QixHQUFHNkcsTUFBTSxDQUFDRSxRQUFRLENBQUMvRyxNQUFNLEdBQUcsdUJBQXVCLEdBQUcrUyxVQUFVLEdBQUcsY0FBYyxHQUM3SkMsY0FBYyxHQUFHLGdCQUFnQixFQUFFLElBQUksQ0FBQ3hQLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUN2RDs7TUFFQTtNQUNBLElBQUksQ0FBQ3dNLGdCQUFnQixDQUFDLElBQUksQ0FBQy9NLE1BQU0sQ0FBQzs7TUFFbEM7TUFDQSxJQUFJLElBQUksQ0FBQzJHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxTQUFTLEVBQUU7UUFDakQsSUFBTXRKLFFBQVEsR0FBRyxJQUFJLENBQUMrSSxhQUFhLENBQUN1RixXQUFXLEVBQUU7O1FBRWpEO1FBQ0EsSUFBSSxJQUFJLENBQUNwRixpQkFBaUIsS0FBS3JOLFNBQVMsSUFBSSxJQUFJLENBQUM0RyxNQUFNLENBQUNpQixvQkFBb0IsQ0FBQzFELFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtVQUN4RmpCLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDOztVQUU1RDtVQUNBLElBQUksQ0FBQ3VHLFlBQVksR0FBR3ZKLFFBQVE7UUFDaEM7O1FBRUE7UUFDQSxJQUFJLENBQUN5UCxVQUFVLEVBQUU7O1FBRWpCO1FBQ0E7UUFDQSxJQUFJLElBQUksQ0FBQ2xFLE1BQU0sRUFBRSxFQUFFO1VBQ2YsSUFBSSxDQUFDbUUsaUJBQWlCLENBQUMxUCxRQUFRLENBQUM7UUFDcEM7TUFDSjtNQUVBLE9BQU9pTyxXQUFXO0lBQ3RCO0VBQUM7SUFBQXJSLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3UixrQkFBa0JzQixlQUFlLEVBQUU7TUFDL0IsSUFBSTdJLGFBQWEsR0FBSSxJQUFJLENBQUN5QyxZQUFZLEtBQUtvRyxlQUFlLEdBQUcsSUFBSSxDQUFDcEcsWUFBWSxHQUFHb0csZUFBZSxHQUFHLENBQUU7TUFDckcsSUFBSTVJLFdBQVcsR0FBRzRJLGVBQWU7O01BRWpDO01BQ0EsSUFBSSxJQUFJLENBQUM3RixpQkFBaUIsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDQyxrQkFBa0IsS0FBSyxLQUFLLEVBQUU7UUFDdEUsSUFBSSxDQUFDQSxrQkFBa0IsR0FBRyxJQUFJOztRQUU5QjtRQUNBO1FBQ0EsSUFBTTZGLGNBQWMsR0FBRyxJQUFJO1FBQzNCLElBQUkzUCxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQ3NPLGNBQWMsSUFBSW9CLGNBQWMsSUFBSTdJLFdBQVcsR0FBR0QsYUFBYSxHQUFHLENBQUMsRUFBRTtVQUN2RjtVQUNBL0gsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSw0Q0FBNEMsRUFBRSxJQUFJLENBQUM0RCxPQUFPLENBQUM0RCxFQUFFLENBQUM7O1VBRW5GO1VBQ0EsSUFBTW9KLGNBQWMsR0FBRyxJQUFJLENBQUMzSixNQUFNLENBQUNFLFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxVQUFBZixPQUFPO1lBQUEsT0FBSWtFLGFBQWEsR0FBRzhJLGNBQWMsSUFBSWhOLE9BQU8sQ0FBQzVDLFFBQVEsSUFBSTRDLE9BQU8sQ0FBQzVDLFFBQVEsR0FBRzhHLGFBQWE7VUFBQSxFQUFDO1VBQ25KLElBQU1nSCxTQUFTLEdBQUcxQixjQUFjLGFBQWRBLGNBQWMsdUJBQWRBLGNBQWMsQ0FBRXZKLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDLFVBQUFiLEVBQUU7WUFBQSxPQUFJZ0UsYUFBYSxHQUFHOEksY0FBYyxJQUFJOU0sRUFBRSxDQUFDOUMsUUFBUSxJQUFJOEMsRUFBRSxDQUFDOUMsUUFBUSxHQUFHOEcsYUFBYTtVQUFBLEVBQUM7O1VBRTlIO1VBQ0EsSUFBSSxDQUFDK0ksYUFBYSxHQUFHL0IsU0FBUyxhQUFUQSxTQUFTLHVCQUFUQSxTQUFTLENBQUVuSixNQUFNLEVBQUU7VUFDeEMsSUFBSSxDQUFDbUwsa0JBQWtCLEdBQUcxRCxjQUFjLGFBQWRBLGNBQWMsdUJBQWRBLGNBQWMsQ0FBRXpILE1BQU0sRUFBRTs7VUFFbEQ7VUFDQXlILGNBQWMsYUFBZEEsY0FBYyxlQUFkQSxjQUFjLENBQUUvSCxZQUFZLEVBQUU7VUFDOUJ5SixTQUFTLGFBQVRBLFNBQVMsZUFBVEEsU0FBUyxDQUFFekosWUFBWSxFQUFFO1VBQ3pCeUosU0FBUyxhQUFUQSxTQUFTLGVBQVRBLFNBQVMsQ0FBRWpILGlCQUFpQixDQUFDaUgsU0FBUyxDQUFDOU4sUUFBUSxFQUFFOEcsYUFBYSxDQUFDOztVQUUvRDtVQUNBLElBQUksQ0FBQ21JLGdCQUFnQixHQUFHbkIsU0FBUztVQUNqQyxJQUFJLENBQUNpQyxxQkFBcUIsR0FBRzNELGNBQWM7UUFDL0M7TUFDSjtNQUVBLElBQUl0RixhQUFhLEdBQUdDLFdBQVcsSUFBS0EsV0FBVyxHQUFHRCxhQUFhLEdBQUk1SCxpQkFBaUIsQ0FBQzJCLHlCQUF5QixDQUFDLHFEQUFxRDtRQUFBLElBQUFtUCxZQUFBLEVBQUFDLGFBQUE7UUFDaEs7UUFDQTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztRQUVZO1FBQ0EsSUFBTTdELGVBQWMsSUFBQTRELFlBQUEsR0FBRyxJQUFJLENBQUN2TixNQUFNLGNBQUF1TixZQUFBLHVCQUFYQSxZQUFBLENBQWFyTixRQUFRLENBQUNnQixJQUFJLENBQUMsVUFBQWYsT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQzVDLFFBQVEsSUFBSStHLFdBQVcsSUFBSUEsV0FBVyxHQUFHbkUsT0FBTyxDQUFDNUMsUUFBUSxHQUFHNEMsT0FBTyxDQUFDcEUsUUFBUTtRQUFBLEVBQUM7O1FBRWxKO1FBQ0EsSUFBTXNQLFVBQVMsR0FBRzFCLGVBQWMsYUFBZEEsZUFBYyx1QkFBZEEsZUFBYyxDQUFFdkosR0FBRyxDQUFDYyxJQUFJLENBQUMsVUFBQWIsRUFBRTtVQUFBLE9BQUlBLEVBQUUsQ0FBQzlDLFFBQVEsSUFBSStHLFdBQVcsSUFBSUEsV0FBVyxHQUFHakUsRUFBRSxDQUFDOUMsUUFBUSxHQUFHOEMsRUFBRSxDQUFDdEUsUUFBUTtRQUFBLEVBQUM7O1FBRXZIO1FBQ0EsSUFBSXNQLFVBQVMsS0FBS2pTLFNBQVMsRUFBRTtVQUN6QjtVQUNBLElBQUksSUFBSSxDQUFDb1QsZ0JBQWdCLEtBQUtwVCxTQUFTLEVBQUU7WUFDckNrRCxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLGNBQWMsR0FBR3NTLFVBQVMsQ0FBQ3BSLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDMEMsT0FBTyxDQUFDNEQsRUFBRSxDQUFDOztZQUU5RTtZQUNBLElBQU1rTixPQUFPLEdBQUdwSixhQUFhLEdBQUdnSCxVQUFTLENBQUM5TixRQUFRLElBQUlkLGlCQUFpQixDQUFDMkIseUJBQXlCOztZQUVqRztZQUNBLElBQUksQ0FBQ3FQLE9BQU8sRUFBRTtjQUNWblIsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSw2QkFBNkIsR0FBR3NMLGFBQWEsR0FBRyxNQUFNLEdBQUdnSCxVQUFTLENBQUM5TixRQUFRLEVBQUUsSUFBSSxDQUFDWixPQUFPLENBQUM0RCxFQUFFLENBQUM7Y0FFbEg4RCxhQUFhLEdBQUdnSCxVQUFTLENBQUM5TixRQUFRO1lBQ3RDOztZQUVBOztZQUVBO1lBQ0EsSUFBSSxDQUFDNlAsYUFBYSxHQUFHL0IsVUFBUyxDQUFDbkosTUFBTSxFQUFFO1lBQ3ZDLElBQUksQ0FBQ21MLGtCQUFrQixHQUFHMUQsZUFBYyxDQUFDekgsTUFBTSxFQUFFOztZQUVqRDtZQUNBeUgsZUFBYyxDQUFDL0gsWUFBWSxFQUFFO1lBQzdCeUosVUFBUyxDQUFDekosWUFBWSxFQUFFO1lBQ3hCeUosVUFBUyxDQUFDakgsaUJBQWlCLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxDQUFDOztZQUV2RDtZQUNBLElBQUltSixPQUFPLEVBQUU7Y0FDVCxJQUFJLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUMxTixNQUFNLENBQUNqRyxZQUFZLEVBQUVzUixVQUFTLENBQUM7WUFDN0Q7VUFDSixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNtQixnQkFBZ0IsS0FBS25CLFVBQVMsRUFBRTtZQUM1QztZQUNBQSxVQUFTLENBQUNqSCxpQkFBaUIsQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLENBQUM7VUFDM0QsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDa0ksZ0JBQWdCLEtBQUtuQixVQUFTLEVBQUU7WUFDNUM7WUFDQS9PLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsbUJBQW1CLEdBQUcsSUFBSSxDQUFDeVQsZ0JBQWdCLENBQUN2UyxJQUFJLEdBQUcsTUFBTSxHQUFHb1IsVUFBUyxDQUFDcFIsSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMwQyxPQUFPLENBQUM0RCxFQUFFLENBQUM7O1lBRXpIO1lBQ0E7WUFDQSxJQUFJOEssVUFBUyxDQUFDbEwsT0FBTyxDQUFDSSxFQUFFLEtBQUssSUFBSSxDQUFDaU0sZ0JBQWdCLENBQUNyTSxPQUFPLENBQUNJLEVBQUUsRUFBRTtjQUMzRCxJQUFJLENBQUNpTSxnQkFBZ0IsQ0FBQ3BJLGlCQUFpQixDQUFDQyxhQUFhLEVBQUUsSUFBSSxDQUFDbUksZ0JBQWdCLENBQUNqUCxRQUFRLEdBQUcsSUFBSSxDQUFDaVAsZ0JBQWdCLENBQUN6USxRQUFRLENBQUM7WUFDM0g7O1lBRUE7WUFDQSxJQUFJLENBQUN5USxnQkFBZ0IsQ0FBQ3JLLFVBQVUsRUFBRTs7WUFFbEM7WUFDQSxJQUFJa0osVUFBUyxDQUFDbEwsT0FBTyxDQUFDSSxFQUFFLEtBQUssSUFBSSxDQUFDaU0sZ0JBQWdCLENBQUNyTSxPQUFPLENBQUNJLEVBQUUsRUFBRTtjQUMzRCxJQUFJLENBQUNpTSxnQkFBZ0IsQ0FBQ3JNLE9BQU8sQ0FBQ2dDLFVBQVUsRUFBRTs7Y0FFMUM7Y0FDQSxJQUFJLENBQUNpTCxhQUFhLEdBQUcvQixVQUFTLENBQUNuSixNQUFNLEVBQUU7Y0FDdkMsSUFBSSxDQUFDbUwsa0JBQWtCLEdBQUcxRCxlQUFjLENBQUN6SCxNQUFNLEVBQUU7Y0FFakR5SCxlQUFjLENBQUMvSCxZQUFZLEVBQUU7WUFDakMsQ0FBQyxNQUFNO2NBQ0g7Y0FDQSxJQUFJLENBQUN3TCxhQUFhLEdBQUcvQixVQUFTLENBQUNuSixNQUFNLEVBQUU7WUFDM0M7O1lBRUE7WUFDQW1KLFVBQVMsQ0FBQ3pKLFlBQVksRUFBRTs7WUFFeEI7WUFDQSxJQUFJMEMsV0FBVyxHQUFHK0csVUFBUyxDQUFDOU4sUUFBUSxJQUFJZCxpQkFBaUIsQ0FBQ2tQLHdCQUF3QixFQUFFO2NBQ2hGLElBQUksQ0FBQytCLGVBQWUsQ0FBQyxJQUFJLENBQUMxTixNQUFNLENBQUNqRyxZQUFZLEVBQUVzUixVQUFTLENBQUM7WUFDN0QsQ0FBQyxNQUFNO2NBQ0g7Y0FDQUEsVUFBUyxDQUFDakgsaUJBQWlCLENBQUNpSCxVQUFTLENBQUM5TixRQUFRLEVBQUUrRyxXQUFXLENBQUM7WUFDaEU7VUFDSjtVQUVBLElBQUksQ0FBQ2tJLGdCQUFnQixHQUFHbkIsVUFBUztVQUNqQyxJQUFJLENBQUNpQyxxQkFBcUIsR0FBRzNELGVBQWM7UUFDL0MsQ0FBQyxNQUFNO1VBQ0g7VUFDQSxJQUFJLElBQUksQ0FBQzZDLGdCQUFnQixLQUFLcFQsU0FBUyxFQUFFO1lBQ3JDa0QsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDeVQsZ0JBQWdCLENBQUN2UyxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQzBDLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQzs7WUFFekY7WUFDQSxJQUFJK0QsV0FBVyxJQUFJLElBQUksQ0FBQ2tJLGdCQUFnQixDQUFDalAsUUFBUSxHQUFHLElBQUksQ0FBQ2lQLGdCQUFnQixDQUFDelEsUUFBUSxDQUFDLEdBQUdVLGlCQUFpQixDQUFDa1Asd0JBQXdCLEVBQUU7Y0FDOUhySCxXQUFXLEdBQUcsSUFBSSxDQUFDa0ksZ0JBQWdCLENBQUNqUCxRQUFRLEdBQUcsSUFBSSxDQUFDaVAsZ0JBQWdCLENBQUN6USxRQUFRO1lBQ2pGOztZQUVBO1lBQ0EsSUFBSXNJLGFBQWEsSUFBSSxJQUFJLENBQUNtSSxnQkFBZ0IsQ0FBQ2pQLFFBQVEsRUFBRTtjQUNqRCxJQUFJLENBQUNpUCxnQkFBZ0IsQ0FBQ3BJLGlCQUFpQixDQUFDQyxhQUFhLEVBQUVDLFdBQVcsQ0FBQztZQUN2RTs7WUFFQTtZQUNBLElBQUksSUFBSSxDQUFDa0ksZ0JBQWdCLENBQUNqSixXQUFXLEdBQUcsR0FBRyxFQUFFO2NBQ3pDLElBQUksQ0FBQ21LLGVBQWUsQ0FBQyxJQUFJLENBQUMxTixNQUFNLENBQUNqRyxZQUFZLEVBQUUsSUFBSSxDQUFDeVMsZ0JBQWdCLENBQUM7WUFDekU7O1lBRUE7WUFDQSxJQUFJLENBQUNBLGdCQUFnQixDQUFDckssVUFBVSxFQUFFOztZQUVsQztZQUNBO1lBQ0E7WUFDQSxJQUFJd0gsZUFBYyxLQUFLdlEsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDMFAsTUFBTSxFQUFFLEVBQUU7Y0FDaEQsSUFBSSxDQUFDd0UscUJBQXFCLENBQUNuTCxVQUFVLEVBQUU7Y0FDdkMsSUFBSSxDQUFDbUwscUJBQXFCLEdBQUdsVSxTQUFTOztjQUV0QztjQUNBLElBQUksQ0FBQ2lVLGtCQUFrQixHQUFHalUsU0FBUztZQUN2Qzs7WUFFQTtZQUNBLElBQUksQ0FBQ29ULGdCQUFnQixHQUFHcFQsU0FBUzs7WUFFakM7WUFDQSxJQUFJLENBQUNnVSxhQUFhLEdBQUdoVSxTQUFTO1VBQ2xDO1FBQ0o7O1FBRUE7UUFDQSxJQUFJLENBQUMwTixZQUFZLEdBQUdvRyxlQUFlOztRQUVuQztRQUNBLEtBQUFNLGFBQUEsR0FBSSxJQUFJLENBQUN4TixNQUFNLGNBQUF3TixhQUFBLGVBQVhBLGFBQUEsQ0FBYXZNLG9CQUFvQixDQUFDcUQsV0FBVyxDQUFDLEVBQUU7VUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQ3NDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1lBQ2pDLElBQUksQ0FBQzlJLEtBQUssRUFBRTtVQUNoQixDQUFDLE1BQU07WUFDSHpCLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUseURBQXlELEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1VBQ3BHO1FBQ0osQ0FBQyxNQUFNO1VBQ0hqRSxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLHVEQUF1RCxFQUFFLElBQUksQ0FBQzRELE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztRQUNsRztNQUNKLENBQUMsTUFBTTtRQUFBLElBQUFvTixhQUFBO1FBQ0hyUixnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLDJCQUEyQixHQUFHc0wsYUFBYSxHQUFHLFFBQVEsR0FBR0MsV0FBVyxHQUFHLDBCQUEwQixFQUFFLElBQUksQ0FBQzNILE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztRQUN4SSxLQUFBb04sYUFBQSxHQUFJLElBQUksQ0FBQzNOLE1BQU0sY0FBQTJOLGFBQUEsZUFBWEEsYUFBQSxDQUFhMU0sb0JBQW9CLENBQUNxRCxXQUFXLENBQUMsRUFBRTtVQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDc0MsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDOUksS0FBSyxFQUFFO1VBQ2hCO1FBQ0o7TUFDSjtJQUNKO0VBQUM7SUFBQTVELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0UyxXQUFBLEVBQXdEO01BQUEsSUFBQVksYUFBQTtNQUFBLElBQTdDclEsUUFBUSxHQUFBckUsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSSxDQUFDb04sYUFBYSxDQUFDdUYsV0FBVyxFQUFFO01BQ2xEO01BQ0EsSUFBSSxFQUFBK0IsYUFBQSxPQUFJLENBQUM1TixNQUFNLGNBQUE0TixhQUFBLHVCQUFYQSxhQUFBLENBQWEzTSxvQkFBb0IsQ0FBQzFELFFBQVEsQ0FBQyxJQUFHLENBQUMsRUFBRTtRQUNqRCxJQUFJLENBQUNxTyxpQkFBaUIsQ0FBQ3JPLFFBQVEsQ0FBQztNQUNwQyxDQUFDLE1BQU07UUFDSGpCLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsZ0RBQWdELEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO01BQzNGO0lBQ0o7RUFBQztJQUFBcEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZTLGtCQUFrQjFQLFFBQVEsRUFBRTtNQUN4QixJQUFJOEcsYUFBYSxHQUFJLElBQUksQ0FBQ3lDLFlBQVksS0FBS3ZKLFFBQVEsR0FBRyxJQUFJLENBQUN1SixZQUFZLEdBQUd2SixRQUFRLEdBQUcsQ0FBRTtNQUN2RixJQUFJK0csV0FBVyxHQUFHL0csUUFBUTtNQUUxQixJQUFJOEcsYUFBYSxHQUFHQyxXQUFXLElBQUtBLFdBQVcsR0FBR0QsYUFBYSxHQUFJNUgsaUJBQWlCLENBQUMyQix5QkFBeUIsQ0FBQyxxREFBcUQ7UUFBQSxJQUFBeVAsYUFBQTtRQUNoSztRQUNBLElBQU1sRSxjQUFjLElBQUFrRSxhQUFBLEdBQUcsSUFBSSxDQUFDN04sTUFBTSxjQUFBNk4sYUFBQSx1QkFBWEEsYUFBQSxDQUFhM04sUUFBUSxDQUFDZ0IsSUFBSSxDQUFDLFVBQUFmLE9BQU87VUFBQSxPQUFJQSxPQUFPLENBQUM1QyxRQUFRLElBQUkrRyxXQUFXLElBQUlBLFdBQVcsR0FBR25FLE9BQU8sQ0FBQzVDLFFBQVEsR0FBRzRDLE9BQU8sQ0FBQ3BFLFFBQVE7UUFBQSxFQUFDO1FBRWxKLElBQUksSUFBSSxDQUFDdVIscUJBQXFCLEtBQUtsVSxTQUFTLEVBQUU7VUFDMUMsSUFBSXVRLGNBQWMsS0FBS3ZRLFNBQVMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQ29ULGdCQUFnQixLQUFLcFQsU0FBUyxJQUFLLElBQUksQ0FBQ29ULGdCQUFnQixDQUFDalAsUUFBUSxHQUFHLElBQUksQ0FBQ2lQLGdCQUFnQixDQUFDelEsUUFBUSxHQUFHdUksV0FBVyxHQUFJN0gsaUJBQWlCLENBQUMyQix5QkFBeUIsRUFBRTtjQUN0SyxJQUFJLENBQUNvTyxnQkFBZ0IsQ0FBQ3BJLGlCQUFpQixDQUFDLElBQUksQ0FBQ29JLGdCQUFnQixDQUFDalAsUUFBUSxFQUFFLElBQUksQ0FBQ2lQLGdCQUFnQixDQUFDalAsUUFBUSxHQUFHLElBQUksQ0FBQ2lQLGdCQUFnQixDQUFDelEsUUFBUSxDQUFDO2NBQ3hJLElBQUksQ0FBQ3lRLGdCQUFnQixDQUFDckssVUFBVSxFQUFFO2NBQ2xDLElBQUksQ0FBQ3FLLGdCQUFnQixHQUFHcFQsU0FBUzs7Y0FFakM7Y0FDQSxJQUFJLENBQUNnVSxhQUFhLEdBQUdoVSxTQUFTO1lBQ2xDO1lBRUEsSUFBSSxDQUFDa1UscUJBQXFCLENBQUNuTCxVQUFVLEVBQUU7WUFDdkMsSUFBSSxDQUFDbUwscUJBQXFCLEdBQUdsVSxTQUFTOztZQUV0QztZQUNBLElBQUksQ0FBQ2lVLGtCQUFrQixHQUFHalUsU0FBUztZQUVuQ2tELGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1VBQ2xFLENBQUMsTUFBTTtZQUNIakUsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUM0RCxPQUFPLENBQUM0RCxFQUFFLENBQUM7VUFDbkU7UUFDSjtNQUNKO0lBQ0o7RUFBQztJQUFBcEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBULGtCQUFrQkMsZUFBZSxFQUFFO01BQUEsSUFBQUMscUJBQUE7UUFBQUMsTUFBQTtNQUMvQixDQUFBRCxxQkFBQSxPQUFJLENBQUN4QixnQkFBZ0IsY0FBQXdCLHFCQUFBLGdCQUFBQSxxQkFBQSxHQUFyQkEscUJBQUEsQ0FBdUI5SyxTQUFTLGNBQUE4SyxxQkFBQSxlQUFoQ0EscUJBQUEsQ0FBa0MzRCxRQUFRLENBQUNqTCxPQUFPLENBQUMsVUFBQThPLE9BQU8sRUFBSTtRQUMxRDVSLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsMkJBQTJCLEdBQUdtVixPQUFPLENBQUNDLFFBQVEsRUFBRUYsTUFBSSxDQUFDdFIsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1FBQ3JGRSxnRUFBYyxDQUFDMEYsV0FBVyxFQUFFLENBQUNDLE9BQU8sQ0FBQzZILE1BQUksQ0FBQ3RSLE9BQU8sRUFBRXVSLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO01BQ3hFLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQWhVLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnVSxhQUFBLEVBQWU7TUFDWCxPQUFPLElBQUksQ0FBQ2hCLGFBQWE7SUFDN0I7RUFBQztJQUFBalQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlVLGtCQUFBLEVBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDaEIsa0JBQWtCO0lBQ2xDOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7SUFBQWxULEdBQUE7SUFBQUMsS0FBQSxFQU9BLFNBQUFrVSx1QkFBQSxFQUF5QjtNQUNyQjtNQUNBLElBQU12UyxRQUFRLEdBQUcsSUFBSSxDQUFDdUssYUFBYSxDQUFDMEYsV0FBVyxFQUFFO01BQ2pELElBQUlqUSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1FBQ2QsSUFBSXdCLFFBQVEsR0FBRyxJQUFJLENBQUMrSSxhQUFhLENBQUN1RixXQUFXLEVBQUU7O1FBRS9DO1FBQ0EsSUFBTWEsY0FBYyxHQUFHLElBQUksQ0FBQ2xHLE1BQU0sQ0FBQ3RGLElBQUksQ0FBQyxVQUFBZixPQUFPO1VBQUEsT0FBSUEsT0FBTyxDQUFDc0MsYUFBYSxHQUFHbEYsUUFBUSxJQUFJQSxRQUFRLElBQUk0QyxPQUFPLENBQUNzQyxhQUFhLEdBQUd0QyxPQUFPLENBQUNwRSxRQUFRO1FBQUEsRUFBQztRQUM1SSxJQUFJMlEsY0FBYyxLQUFLdFQsU0FBUyxFQUFFO1VBQzlCbUUsUUFBUSxHQUFHbVAsY0FBYyxDQUFDakssYUFBYTtRQUMzQzs7UUFFQTtRQUNBLElBQUksQ0FBQytELE1BQU0sQ0FBQzBDLE1BQU0sQ0FBQyxVQUFBL0ksT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQ3NDLGFBQWEsR0FBR3RDLE9BQU8sQ0FBQ3BFLFFBQVEsR0FBR3dCLFFBQVE7UUFBQSxFQUFDLENBQzdFNkIsT0FBTyxDQUFDLFVBQUFlLE9BQU8sRUFBSTtVQUNoQjVDLFFBQVEsSUFBSTRDLE9BQU8sQ0FBQ3BFLFFBQVE7UUFDaEMsQ0FBQyxDQUFDO1FBRU4sT0FBT3dCLFFBQVE7TUFDbkI7TUFFQSxPQUFPLENBQUMsQ0FBQztJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQSTtJQUFBcEQsR0FBQTtJQUFBQyxLQUFBLEVBUUEsU0FBQW1VLHVCQUF1QkMsa0JBQWtCLEVBQUU7TUFDdkMsSUFBSWpSLFFBQVEsR0FBR2lSLGtCQUFrQjs7TUFFakM7TUFDQSxJQUFNaEksTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDdkMsSUFBSSxDQUFDLFVBQUN3SyxDQUFDLEVBQUVDLENBQUM7UUFBQSxPQUFLRCxDQUFDLENBQUNoTSxhQUFhLEdBQUdpTSxDQUFDLENBQUNqTSxhQUFhO01BQUEsRUFBQztNQUU1RSxLQUFLLElBQUk3SCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0TCxNQUFNLENBQUNyTixNQUFNLEVBQUV5QixDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFNdUYsT0FBTyxHQUFHcUcsTUFBTSxDQUFDNUwsQ0FBQyxDQUFDOztRQUV6QjtRQUNBLElBQUl1RixPQUFPLENBQUNzQyxhQUFhLEdBQUdsRixRQUFRLEVBQUU7VUFDbEM7UUFDSjtRQUVBLElBQUk0QyxPQUFPLENBQUNzQyxhQUFhLEdBQUd0QyxPQUFPLENBQUNwRSxRQUFRLEdBQUd3QixRQUFRLElBQUs0QyxPQUFPLENBQUNzQyxhQUFhLElBQUlsRixRQUFRLElBQUlBLFFBQVEsSUFBSTRDLE9BQU8sQ0FBQ3NDLGFBQWEsR0FBR3RDLE9BQU8sQ0FBQ3BFLFFBQVMsRUFBRTtVQUNwSjtVQUNBO1VBQ0F3QixRQUFRLElBQUk0QyxPQUFPLENBQUNwRSxRQUFRO1FBQ2hDO01BQ0o7TUFFQSxPQUFPd0IsUUFBUTtJQUNuQjtFQUFDO0lBQUFwRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0QsYUFBYXhCLE9BQU8sRUFBRTJHLGFBQWEsRUFBRTtNQUFBLElBQUFrTSxNQUFBO1FBQUFDLGtCQUFBO01BQ2pDO01BQ0EsSUFBSSxDQUFDakksT0FBTyxHQUFHLElBQUk7TUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztNQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO01BQ3RCLElBQUksQ0FBQ0MsWUFBWSxHQUFHckUsYUFBYTtNQUNqQyxJQUFJLENBQUNzSixjQUFjLEdBQUd2TyxJQUFJLENBQUNDLEdBQUcsRUFBRTtNQUVoQ25CLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsNEJBQTRCLEdBQUcsSUFBSSxDQUFDK1AsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQ25NLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQzs7TUFFekY7TUFDQTtNQUNBO01BQ0EsSUFBSSxJQUFJLENBQUNQLE1BQU0sS0FBSzVHLFNBQVMsRUFBRTtRQUMzQixJQUFJLENBQUNvTixNQUFNLEdBQUcsSUFBSSxDQUFDeEcsTUFBTSxDQUFDRSxRQUFRLENBQUN3QyxHQUFHLENBQUMsVUFBQXZDLE9BQU8sRUFBSTtVQUM5Q0EsT0FBTyxDQUFDc0IsSUFBSSxHQUFHa04sTUFBSSxDQUFDN0YsTUFBTSxFQUFFO1VBRTVCLE9BQU8zSSxPQUFPLENBQUMrQixNQUFNLEVBQUU7UUFDM0IsQ0FBQyxDQUFDO01BQ047O01BRUE7TUFDQSxJQUFJLENBQUM4SyxVQUFVLENBQUN2SyxhQUFhLENBQUM7O01BRTlCO01BQ0EsSUFBSSxDQUFDcUYsa0JBQWtCLEVBQUU7O01BRXpCO01BQ0EsSUFBSSxJQUFJLENBQUNnQixNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUN4QyxhQUFhLENBQUN1RixXQUFXLEVBQUUsR0FBRyxhQUFhLEVBQUU7UUFDbkV2UCxnRUFBYSxDQUFDc00sQ0FBQyxDQUFDN1AsR0FBRyxFQUFFLDBHQUEwRyxFQUFFLElBQUksQ0FBQzRELE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUNySjs7TUFFQTtNQUNBLENBQUFxTyxrQkFBQSxPQUFJLENBQUNoSCxZQUFZLGNBQUFnSCxrQkFBQSxlQUFqQkEsa0JBQUEsQ0FBbUJDLGlCQUFpQixFQUFFO0lBQzFDO0VBQUM7SUFBQTFVLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwVSxRQUFBLEVBQVU7TUFDTjtNQUNBLElBQUksQ0FBQ2xJLE1BQU0sR0FBRyxJQUFJO01BQ2xCLElBQUksQ0FBQ2tGLElBQUksRUFBRTs7TUFFWDtNQUNBLElBQU1pRCxjQUFjLEdBQUcsSUFBSSxDQUFDekksYUFBYSxDQUFDdUYsV0FBVyxFQUFFO01BQ3ZELElBQUksSUFBSSxDQUFDL0UsWUFBWSxLQUFLaUksY0FBYyxFQUFFO1FBQ3RDLElBQUksQ0FBQ25ELGlCQUFpQixDQUFDbUQsY0FBYyxDQUFDO01BQzFDLENBQUMsTUFBTTtRQUNIelMsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSwyQkFBMkIsR0FBR2dXLGNBQWMsR0FBRyx3QkFBd0IsRUFBRSxJQUFJLENBQUNwUyxPQUFPLENBQUM0RCxFQUFFLENBQUM7TUFDbEg7TUFFQSxJQUFJLENBQUN1RyxZQUFZLEdBQUdpSSxjQUFjO01BQ2xDLElBQUksQ0FBQ2hJLHVCQUF1QixHQUFHLElBQUksQ0FBQ0QsWUFBWSxDQUFDLENBQUM7SUFDdEQ7RUFBQztJQUFBM00sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRVLFNBQUEsRUFBVztNQUNQO01BQ0EsSUFBSSxDQUFDcEksTUFBTSxHQUFHLEtBQUs7TUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ1IsYUFBYSxDQUFDdUYsV0FBVyxFQUFFOztRQUVwRDtRQUNBLElBQUkvUSxJQUFJLENBQUNxRCxHQUFHLENBQUMsSUFBSSxDQUFDMkksWUFBWSxHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsR0FBRyxJQUFJLEVBQUU7VUFDbkV6SyxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLDZEQUE2RCxFQUFFLElBQUksQ0FBQzRELE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztVQUVwRyxJQUFJLENBQUN1RyxZQUFZLEdBQUcsSUFBSSxDQUFDQyx1QkFBdUI7VUFDaEQsSUFBSSxDQUFDQSx1QkFBdUIsR0FBRyxDQUFDO1FBQ3BDO1FBRUEsSUFBSSxDQUFDaUcsVUFBVSxFQUFFO01BQ3JCO0lBQ0o7RUFBQztJQUFBN1MsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVELGlCQUFBLEVBQW1CO01BQ2Y7TUFDQSxJQUFJLENBQUNrSixTQUFTLEdBQUcsSUFBSTtNQUNyQixJQUFJLENBQUNpRixJQUFJLEVBQUU7O01BRVg7TUFDQSxJQUFNaUQsY0FBYyxHQUFHLElBQUksQ0FBQ3pJLGFBQWEsQ0FBQ3VGLFdBQVcsRUFBRTtNQUN2RCxJQUFJLElBQUksQ0FBQy9FLFlBQVksS0FBS2lJLGNBQWMsRUFBRTtRQUN0QyxJQUFJLENBQUNuRCxpQkFBaUIsQ0FBQ21ELGNBQWMsQ0FBQztNQUMxQyxDQUFDLE1BQU07UUFDSHpTLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsMkJBQTJCLEdBQUdnVyxjQUFjLEdBQUcsd0JBQXdCLEVBQUUsSUFBSSxDQUFDcFMsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO01BQ2xIO01BRUEsSUFBSSxDQUFDdUcsWUFBWSxHQUFHaUksY0FBYztJQUN0QztFQUFDO0lBQUE1VSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNlUsZUFBZUMsT0FBTyxFQUFFO01BQ3BCO01BQ0EsSUFBSSxDQUFDckksU0FBUyxHQUFHLEtBQUs7TUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQ0QsTUFBTSxFQUFFO1FBQ2Q7UUFDQSxJQUFNbUksY0FBYyxHQUFHLElBQUksQ0FBQ3pJLGFBQWEsQ0FBQ3VGLFdBQVcsRUFBRTtRQUN2RCxJQUFJLElBQUksQ0FBQy9FLFlBQVksS0FBS2lJLGNBQWMsRUFBRTtVQUN0Q3pTLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsb0RBQW9ELEVBQUUsSUFBSSxDQUFDNEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1VBQzNGLElBQUksQ0FBQ3FMLGlCQUFpQixDQUFDbUQsY0FBYyxDQUFDO1FBQzFDOztRQUVBO1FBQ0E7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7UUFHWTtRQUNBLElBQUlqVSxJQUFJLENBQUNxRCxHQUFHLENBQUMsSUFBSSxDQUFDMkksWUFBWSxHQUFHLElBQUksQ0FBQ0UscUJBQXFCLENBQUMsR0FBRyxJQUFJLEVBQUU7VUFDakUxSyxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLElBQUksQ0FBQzRELE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztVQUU5RSxJQUFJLENBQUN1RyxZQUFZLEdBQUcsSUFBSSxDQUFDRSxxQkFBcUI7VUFDOUMsSUFBSSxDQUFDQSxxQkFBcUIsR0FBRyxDQUFDO1FBQ2xDO1FBRUEsSUFBSSxDQUFDZ0csVUFBVSxFQUFFO01BQ3JCO0lBQ0o7RUFBQztJQUFBN1MsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBELE9BQU9DLEtBQUssRUFBRUMsR0FBRyxFQUFFO01BQUEsSUFBQW1SLGFBQUE7TUFDZjtNQUNBO01BQ0E7TUFDQSxJQUFJcFIsS0FBSyxHQUFHLElBQUksQ0FBQytJLFlBQVksSUFBSSxJQUFJLENBQUNBLFlBQVksR0FBRy9JLEtBQUssR0FBR3RCLGlCQUFpQixDQUFDMkIseUJBQXlCLEVBQUU7UUFDdEc5QixnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLG9DQUFvQyxHQUFHZ0YsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMrSSxZQUFZLEVBQUUsSUFBSSxDQUFDbkssT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1FBQ2hIeEMsS0FBSyxHQUFHLElBQUksQ0FBQytJLFlBQVk7TUFDN0I7TUFFQSxJQUFJQSxZQUFZO01BQ2hCLElBQUksSUFBSSxDQUFDRCxTQUFTLEVBQUU7UUFDaEI7UUFDQTtRQUNBLElBQUksQ0FBQ0cscUJBQXFCLEdBQUdoSixHQUFHOztRQUVoQztRQUNBOEksWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWTtNQUNwQyxDQUFDLE1BQU07UUFDSDtRQUNBLElBQUloTSxJQUFJLENBQUNxRCxHQUFHLENBQUMsSUFBSSxDQUFDMkksWUFBWSxHQUFHL0ksS0FBSyxDQUFDLEdBQUd0QixpQkFBaUIsQ0FBQzJCLHlCQUF5QixFQUFFO1VBQ25GLElBQUksQ0FBQ3dOLGlCQUFpQixDQUFDN04sS0FBSyxDQUFDO1VBQzdCLElBQUksQ0FBQytJLFlBQVksR0FBRy9JLEtBQUs7UUFDN0I7O1FBRUE7UUFDQTtRQUNBK0ksWUFBWSxHQUFHL0ksS0FBSztRQUVwQixJQUFJLENBQUNpSixxQkFBcUIsR0FBRyxDQUFDO01BQ2xDOztNQUVBO01BQ0EsSUFBSSxDQUFDRixZQUFZLEdBQUc5SSxHQUFHOztNQUV2QjtNQUNBLElBQUlsRCxJQUFJLENBQUNxRCxHQUFHLENBQUNILEdBQUcsR0FBR0QsS0FBSyxDQUFDLEdBQUd0QixpQkFBaUIsQ0FBQzJCLHlCQUF5QixFQUFFO1FBQ3JFOUIsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRSxJQUFJLENBQUM0RCxPQUFPLENBQUM0RCxFQUFFLENBQUM7O1FBRTVFO1FBQ0EsSUFBSXZDLEdBQUcsR0FBR0QsS0FBSyxJQUFJQSxLQUFLLEdBQUdDLEdBQUcsR0FBRyxJQUFJLEVBQUU7VUFDbkMxQixnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQzRELE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztVQUN6RCxJQUFJLENBQUN1RyxZQUFZLEdBQUcvSSxLQUFLO1VBQ3pCLElBQUksQ0FBQzZOLGlCQUFpQixDQUFDN04sS0FBSyxDQUFDO1VBQzdCO1FBQ0o7O1FBRUE7UUFDQSxJQUFJcVIsaUJBQWlCO1FBQ3JCLElBQUlDLGVBQWU7UUFDbkIsSUFBSXRSLEtBQUssR0FBR0MsR0FBRyxFQUFFO1VBQUU7VUFDZm9SLGlCQUFpQixHQUFHdEksWUFBWTtVQUNoQ3VJLGVBQWUsR0FBR3JSLEdBQUc7UUFDekIsQ0FBQyxNQUFNO1VBQUU7VUFDTG9SLGlCQUFpQixHQUFHcFIsR0FBRztVQUN2QnFSLGVBQWUsR0FBSXZJLFlBQVksR0FBRy9JLEtBQUssR0FBR0EsS0FBSyxHQUFHK0ksWUFBYTtRQUNuRTs7UUFFQTtRQUNBO1FBQ0EsSUFBSTlJLEdBQUcsR0FBR0QsS0FBSyxHQUFHLENBQUMsOENBQTZDO1VBQzVEc1IsZUFBZSxHQUFHclIsR0FBRztRQUN6Qjs7UUFFQTtRQUNBLEtBQUssSUFBSXBELENBQUMsR0FBR3dVLGlCQUFpQixFQUFFeFUsQ0FBQyxJQUFJeVUsZUFBZSxFQUFFelUsQ0FBQyxJQUFJNkIsaUJBQWlCLENBQUNrUCx3QkFBd0IsRUFBRTtVQUNuRyxJQUFNcE8sUUFBUSxHQUFHekMsSUFBSSxDQUFDd1UsR0FBRyxDQUFDMVUsQ0FBQyxHQUFHNkIsaUJBQWlCLENBQUNrUCx3QkFBd0IsRUFBRTBELGVBQWUsQ0FBQztVQUUxRi9TLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsVUFBVSxHQUFHNkIsQ0FBQyxHQUFHLE9BQU8sR0FBRzJDLFFBQVEsRUFBRSxJQUFJLENBQUNaLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztVQUUxRSxJQUFJLENBQUN1RyxZQUFZLEdBQUdsTSxDQUFDO1VBQ3JCLElBQUksQ0FBQ2dSLGlCQUFpQixDQUFDck8sUUFBUSxDQUFDO1FBQ3BDO1FBQ0FqQixnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLHVCQUF1QixHQUFHcVcsaUJBQWlCLEdBQUcsT0FBTyxHQUFHQyxlQUFlLEVBQUUsSUFBSSxDQUFDMVMsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1FBRTlHLElBQUl2QyxHQUFHLEdBQUdELEtBQUssR0FBRyxDQUFDLEVBQUU7VUFBQSxJQUFBd1IsYUFBQTtVQUNqQmpULGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsa0NBQWtDLEdBQUdzVyxlQUFlLEVBQUUsSUFBSSxDQUFDMVMsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO1VBQzNGLENBQUFnUCxhQUFBLE9BQUksQ0FBQ3ZQLE1BQU0sY0FBQXVQLGFBQUEsZUFBWEEsYUFBQSxDQUFhcE8sZ0JBQWdCLENBQUNrTyxlQUFlLENBQUM7UUFDbEQ7UUFFQTtNQUNKOztNQUVBO01BQ0EsSUFBTUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDaEQsZ0JBQWdCO01BQy9DLElBQUlnRCxpQkFBaUIsS0FBS3BXLFNBQVMsRUFBRTtRQUNqQyxJQUFJLENBQUNzVSxlQUFlLENBQUMsSUFBSSxDQUFDMU4sTUFBTSxDQUFDakcsWUFBWSxFQUFFLElBQUksQ0FBQ3lTLGdCQUFnQixDQUFDO01BQ3pFOztNQUVBO01BQ0EsSUFBSSxDQUFDWixpQkFBaUIsQ0FBQzVOLEdBQUcsQ0FBQzs7TUFFM0I7TUFDQTFCLGdFQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsa0NBQWtDLEdBQUdpRixHQUFHLEVBQUUsSUFBSSxDQUFDckIsT0FBTyxDQUFDNEQsRUFBRSxDQUFDO01BQy9FLENBQUE0TyxhQUFBLE9BQUksQ0FBQ25QLE1BQU0sY0FBQW1QLGFBQUEsZUFBWEEsYUFBQSxDQUFhaE8sZ0JBQWdCLENBQUNuRCxHQUFHLENBQUM7SUFDdEM7RUFBQztJQUFBN0QsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlFLE9BQU9DLFVBQVUsRUFBRTtNQUFBLElBQUFtUixtQkFBQTtNQUNmO01BQ0EsSUFBSSxDQUFDM0QsSUFBSSxFQUFFOztNQUVYO01BQ0EsSUFBSSxDQUFDaEYsWUFBWSxHQUFHLElBQUksQ0FBQ1IsYUFBYSxDQUFDdUYsV0FBVyxFQUFFO01BQ3BELElBQUksQ0FBQ0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDOUUsWUFBWSxDQUFDOztNQUV6QztNQUNBLElBQUksQ0FBQ2dGLElBQUksRUFBRTs7TUFFWDtNQUNBLElBQUksSUFBSSxDQUFDcEYsZ0JBQWdCLEtBQUt0TixTQUFTLEVBQUU7UUFDckNpTiw0REFBVSxDQUFDRixXQUFXLEVBQUUsQ0FBQ3NDLE1BQU0sQ0FBQyxJQUFJLENBQUMvQixnQkFBZ0IsQ0FBQztNQUMxRDs7TUFFQTtNQUNBLENBQUErSSxtQkFBQSxPQUFJLENBQUM3SCxZQUFZLGNBQUE2SCxtQkFBQSxlQUFqQkEsbUJBQUEsQ0FBbUJDLGVBQWUsRUFBRTtJQUN4QztFQUFDO0lBQUF2VixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdVYsWUFBWUMsUUFBUSxFQUFFO01BQ2xCLElBQUlBLFFBQVEsS0FBS3hXLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQ21OLFNBQVMsQ0FBQ2dHLFFBQVEsQ0FBQ3FELFFBQVEsQ0FBQyxFQUFFO1FBQzlELElBQUksQ0FBQ3JKLFNBQVMsQ0FBQ3JDLElBQUksQ0FBQzBMLFFBQVEsQ0FBQztNQUNqQztJQUNKO0VBQUM7SUFBQXpWLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5VixlQUFlRCxRQUFRLEVBQUU7TUFDckIsSUFBSTdNLEtBQUssR0FBRyxJQUFJLENBQUN3RCxTQUFTLENBQUN1SixPQUFPLENBQUNGLFFBQVEsQ0FBQztNQUM1QyxJQUFJN00sS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2QsSUFBSSxDQUFDd0QsU0FBUyxDQUFDa0csTUFBTSxDQUFDMUosS0FBSyxFQUFFLENBQUMsQ0FBQztNQUNuQztJQUNKO0VBQUM7SUFBQTVJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyVixZQUFZSCxRQUFRLEVBQUVJLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFO01BQ3JELElBQUksT0FBT1IsUUFBUSxDQUFDSSxTQUFTLENBQUMsS0FBSyxVQUFVLEVBQUU7UUFDM0NKLFFBQVEsQ0FBQ0ksU0FBUyxDQUFDLENBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBQztNQUMvQztJQUNKO0VBQUM7SUFBQWpXLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwSCxrQkFBa0J1TyxXQUFXLEVBQUU7TUFBQSxJQUFBQyxNQUFBO01BQzNCLElBQUksQ0FBQy9KLFNBQVMsQ0FBQ25ILE9BQU8sQ0FBQyxVQUFBd1EsUUFBUSxFQUFJO1FBQy9CVSxNQUFJLENBQUNQLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLGVBQWUsRUFBRVMsV0FBVyxDQUFDO01BQzVELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQWxXLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEySCxtQkFBbUJoSSxZQUFZLEVBQUU7TUFBQSxJQUFBd1csTUFBQTtNQUM3QixJQUFJLENBQUNoSyxTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQlcsTUFBSSxDQUFDUixXQUFXLENBQUNILFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTdWLFlBQVksQ0FBQztNQUM5RCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4SyxhQUFhN0UsRUFBRSxFQUFFO01BQUEsSUFBQW1RLE1BQUE7TUFDYixJQUFJLENBQUNqSyxTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQlksTUFBSSxDQUFDVCxXQUFXLENBQUNILFFBQVEsRUFBRSxVQUFVLEVBQUV2UCxFQUFFLENBQUM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStLLGNBQWNwTCxZQUFZLEVBQUVzRyxFQUFFLEVBQUU7TUFBQSxJQUFBb1EsT0FBQTtRQUFBQyxtQkFBQTtNQUM1QixJQUFJLENBQUNuSyxTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQmEsT0FBSSxDQUFDVixXQUFXLENBQUNILFFBQVEsRUFBRSxXQUFXLEVBQUU3VixZQUFZLEVBQUVzRyxFQUFFLENBQUNyRyxVQUFVLEVBQUVxRyxFQUFFLENBQUNwRyxJQUFJLENBQUM7TUFDakYsQ0FBQyxDQUFDOztNQUVGO01BQ0EsQ0FBQXlXLG1CQUFBLE9BQUksQ0FBQzlJLFlBQVksY0FBQThJLG1CQUFBLGVBQWpCQSxtQkFBQSxDQUFtQkMsZ0JBQWdCLEVBQUU7SUFDekM7RUFBQztJQUFBeFcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdMLGtCQUFrQnJMLFlBQVksRUFBRTtNQUFBLElBQUE2VyxPQUFBO01BQzVCLElBQUksQ0FBQ3JLLFNBQVMsQ0FBQ25ILE9BQU8sQ0FBQyxVQUFBd1EsUUFBUSxFQUFJO1FBQy9CZ0IsT0FBSSxDQUFDYixXQUFXLENBQUNILFFBQVEsRUFBRSxlQUFlLEVBQUU3VixZQUFZLENBQUM7TUFDN0QsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeUssaUJBQWlCOUssWUFBWSxFQUFFc0csRUFBRSxFQUFFZixRQUFRLEVBQUU7TUFBQSxJQUFBdVIsT0FBQTtNQUN6QyxJQUFJLENBQUN0SyxTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQmlCLE9BQUksQ0FBQ2QsV0FBVyxDQUFDSCxRQUFRLEVBQUUsY0FBYyxFQUFFN1YsWUFBWSxFQUFFc0csRUFBRSxDQUFDckcsVUFBVSxFQUFFcUcsRUFBRSxDQUFDcEcsSUFBSSxFQUFFcUYsUUFBUSxDQUFDO01BQzlGLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQW5GLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzVCxnQkFBZ0IzVCxZQUFZLEVBQUVzRyxFQUFFLEVBQUU7TUFBQSxJQUFBeVEsT0FBQTtNQUM5QixJQUFNNVIsaUJBQWlCLEdBQUcsRUFBRTtNQUM1Qm1CLEVBQUUsQ0FBQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixPQUFPLENBQUMsVUFBQXdKLENBQUMsRUFBSTtRQUN4QjtRQUNBLElBQUlBLENBQUMsQ0FBQ3JMLFFBQVEsR0FBRzhDLEVBQUUsQ0FBQzlDLFFBQVEsSUFBSXFMLENBQUMsQ0FBQ3JMLFFBQVEsR0FBR3VULE9BQUksQ0FBQ2hLLFlBQVksRUFBRTtVQUM1RDVILGlCQUFpQixDQUFDZ0YsSUFBSSxDQUFDMEUsQ0FBQyxDQUFDM08sSUFBSSxDQUFDO1FBQ2xDO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDc00sU0FBUyxDQUFDbkgsT0FBTyxDQUFDLFVBQUF3USxRQUFRLEVBQUk7UUFDL0JrQixPQUFJLENBQUNmLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLGFBQWEsRUFBRTdWLFlBQVksRUFBRXNHLEVBQUUsQ0FBQ3JHLFVBQVUsRUFBRXFHLEVBQUUsQ0FBQ3BHLElBQUksRUFBRWlGLGlCQUFpQixDQUFDO01BQ3RHLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQS9FLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrTCxZQUFZdkwsWUFBWSxFQUFFc0csRUFBRSxFQUFFO01BQUEsSUFBQTBRLE9BQUE7TUFDMUI7TUFDQSxJQUFJLElBQUksQ0FBQ2pJLE1BQU0sRUFBRSxFQUFFO1FBQ2YsSUFBSSxJQUFJLENBQUNwQyxnQkFBZ0IsS0FBS3ROLFNBQVMsRUFBRTtVQUNyQ2lOLDREQUFVLENBQUNGLFdBQVcsRUFBRSxDQUFDc0MsTUFBTSxDQUFDLElBQUksQ0FBQy9CLGdCQUFnQixDQUFDO1FBQzFEO1FBRUEsSUFBSSxDQUFDb0Isa0JBQWtCLEVBQUU7TUFDN0I7TUFFQSxJQUFJLENBQUN2QixTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQm1CLE9BQUksQ0FBQ2hCLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLFNBQVMsRUFBRTdWLFlBQVksRUFBRXNHLEVBQUUsQ0FBQ3JHLFVBQVUsRUFBRXFHLEVBQUUsQ0FBQ3BHLElBQUksQ0FBQztNQUMvRSxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpSSxpQkFBaUJ0SSxZQUFZLEVBQUU7TUFBQSxJQUFBaVgsT0FBQTtNQUMzQixJQUFJLENBQUN6SyxTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQm9CLE9BQUksQ0FBQ2pCLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLGNBQWMsRUFBRTdWLFlBQVksQ0FBQztNQUM1RCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyUyxpQkFBaUIvTSxNQUFNLEVBQUU7TUFBQSxJQUFBaVIsT0FBQTtNQUNyQixJQUFJLENBQUMxSyxTQUFTLENBQUNuSCxPQUFPLENBQUMsVUFBQXdRLFFBQVEsRUFBSTtRQUMvQnFCLE9BQUksQ0FBQ2xCLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLGNBQWMsRUFBRTVQLE1BQU0sQ0FBQztNQUN0RCxDQUFDLENBQUM7SUFDTjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUhJO0lBQUE3RixHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBc1IscUJBQXFCRixXQUFXLEVBQUU7TUFDOUIsSUFBTU8sY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxJQUFJdk8sSUFBSSxDQUFDQyxHQUFHLEVBQUU7TUFDeEQsSUFBTXlULFNBQVMsR0FBRyxJQUFJLENBQUMzSixjQUFjLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQ0Qsa0JBQWtCLEtBQUssS0FBSyxJQUFJOUosSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBR3NPLGNBQWMsSUFBSSxJQUFJO01BQ3ZIelAsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSx5QkFBeUIsR0FBR21ZLFNBQVMsR0FBRyxpQkFBaUIsR0FBRzFGLFdBQVcsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDN08sT0FBTyxDQUFDNEQsRUFBRSxDQUFDO01BRXBILElBQUkyUSxTQUFTLEtBQUssSUFBSSxJQUFJMUYsV0FBVyxLQUFLLElBQUksRUFBRTtRQUFBLElBQUEyRixxQkFBQTtRQUM1QyxJQUFJLENBQUM1SixjQUFjLEdBQUcsSUFBSSxDQUFDZixNQUFNLENBQUNyTixNQUFNO1FBRXhDbUQsZ0VBQWEsQ0FBQzJCLENBQUMsQ0FBQ2xGLEdBQUcsRUFBRSxzQkFBc0IsR0FBRyxJQUFJLENBQUN3TyxjQUFjLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQzVLLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztRQUN6RixDQUFBNFEscUJBQUEsT0FBSSxDQUFDeFUsT0FBTyxDQUFDc0YsU0FBUyxjQUFBa1AscUJBQUEsZ0JBQUFBLHFCQUFBLEdBQXRCQSxxQkFBQSxDQUF3QkMsY0FBYyxjQUFBRCxxQkFBQSxlQUF0Q0EscUJBQUEsQ0FBd0NFLFFBQVEsQ0FBQyxJQUFJLENBQUM3SyxNQUFNLENBQUM7TUFDakU7SUFDSjtFQUFDO0VBQUEsT0FBQS9KLGlCQUFBO0FBQUE7QUFBQW5ELGVBQUEsQ0F2eUNnQm1ELGlCQUFpQiw4QkFDQSxJQUFJO0FBQUFuRCxlQUFBLENBRHJCbUQsaUJBQWlCLCtCQUdDLElBQUk7QUFBQW5ELGVBQUEsQ0FIdEJtRCxpQkFBaUIsNkJBS0QsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCO0FBQ047QUFDRztBQUNtQztBQUNmO0FBQzNDO0FBQ2M7QUFDQztBQUNRO0FBRTlCO0FBQ2xDRCxpREFBUSxDQUFDcVYsUUFBUSxHQUFHO0VBQ2hCN1ksU0FBUyxFQUFUQSw0REFBUztFQUFFZ0MsZ0JBQWdCLEVBQWhCQSxtRUFBZ0I7RUFDM0IwQixnQkFBZ0IsRUFBaEJBLG9FQUFnQjtFQUNoQkQsaUJBQWlCLEVBQWpCQSxzRUFBaUI7RUFDakJxRSxhQUFhLEVBQWJBLGlFQUFhO0VBQUVNLGNBQWMsRUFBZEEsa0VBQWM7RUFBRXdCLFNBQVMsRUFBVEEsNkRBQVM7RUFBRThDLGNBQWMsRUFBZEEsa0VBQWM7RUFDeEQ0TCxTQUFTLEVBQVRBLG9EQUFTO0VBQUVDLFdBQVcsRUFBWEEsc0RBQVc7RUFBRUMsNEJBQTRCLEVBQTVCQSx1RUFBNEI7RUFDcERDLFNBQVMsRUFBVEEsb0RBQVM7RUFDVEMsaUJBQWlCLEVBQWpCQSw2REFBaUI7RUFDakJDLFlBQVksRUFBWkEsbUVBQVk7RUFBRUMsZ0JBQWdCLEVBQWhCQSx1RUFBZ0JBO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnVEO0FBRXhELElBQU03WSxHQUFHLEdBQUcsYUFBYTtBQUFDLElBRXBCK1ksWUFBWTtFQUFBLFNBQUFBLGFBQUE7SUFBQXpZLGVBQUEsT0FBQXlZLFlBQUE7RUFBQTtFQUFBNVgsWUFBQSxDQUFBNFgsWUFBQTtJQUFBM1gsR0FBQTtJQUFBQyxLQUFBO0lBQUc7SUFDakIsU0FBQTJYLGtCQUFrQkMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLG1CQUFtQixFQUFFQyxnQkFBZ0IsRUFBRSxDQUV0RjtFQUFDO0VBQUEsT0FBQUwsWUFBQTtBQUFBO0FBQUEsSUFHZ0JILFlBQVk7RUFhN0IsU0FBQUEsYUFBQSxFQUFjO0lBQUF0WSxlQUFBLE9BQUFzWSxZQUFBO0lBQUFyWSxlQUFBO0VBRWQ7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTElZLFlBQUEsQ0FBQXlYLFlBQUE7SUFBQXhYLEdBQUE7SUFBQUMsS0FBQSxFQVNBLFNBQUFnWSxLQUFBLEVBQU87TUFDSDlWLCtEQUFhLENBQUMyQixDQUFDLENBQUNsRixHQUFHLEVBQUUsZ0NBQWdDLENBQUM7SUFDMUQ7RUFBQztJQUFBb0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlZLFFBQUEsRUFBVSxDQUVWO0VBQUM7SUFBQWxZLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrWSxlQUFlcEssUUFBUSxFQUFFO01BQ3JCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0lBQzVCO0VBQUM7SUFBQS9OLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtWSxjQUFjQyxZQUFZLEVBQUU7TUFDeEJsVywrREFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLDZCQUE2QixDQUFDO01BRW5ELElBQUksQ0FBQ3laLFlBQVksR0FBR0EsWUFBWTtJQUNwQztFQUFDO0lBQUFyWSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcVksVUFBQSxFQUFZO01BQ1IsT0FBTyxJQUFJLENBQUNELFlBQVksS0FBS3BaLFNBQVMsSUFBSSxJQUFJLENBQUNvWixZQUFZLEtBQUssSUFBSTtJQUN4RTtFQUFDO0lBQUFyWSxHQUFBO0lBQUFDLEtBQUEsRUF6Q0QsU0FBQStMLFlBQUEsRUFBcUI7TUFDakIsSUFBSSxDQUFBdU0sK0JBQUEsQ0FBQ2YsWUFBWSxFQU5KQSxZQUFZLEVBQUFnQixTQUFBLENBTUUsRUFBRTtRQUN6QkMsK0JBQUEsQ0FBQWpCLFlBQVksRUFQSEEsWUFBWSxFQUFBZ0IsU0FBQSxFQU9JLElBQUloQixZQUFZLEVBQUU7TUFDL0M7TUFFQSxPQUFBZSwrQkFBQSxDQUFPZixZQUFZLEVBVk5BLFlBQVksRUFBQWdCLFNBQUE7SUFXN0I7RUFBQztFQUFBLE9BQUFoQixZQUFBO0FBQUE7QUFBQSxJQUFBZ0IsU0FBQTtFQUFBRSxRQUFBO0VBQUF6WSxLQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJtRDtBQUNkO0FBRTFDLElBQU1yQixHQUFHLEdBQUcscUJBQXFCO0FBQUMsSUFFYjZZLGdCQUFnQjtFQXFCakMsU0FBQUEsaUJBQVlqVixPQUFPLEVBQUUySixhQUFhLEVBQUU7SUFBQWpOLGVBQUEsT0FBQXVZLGdCQUFBO0lBQUF0WSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQ2hDLElBQUksQ0FBQ3FELE9BQU8sR0FBR0EsT0FBTztJQUV0QixJQUFJLENBQUNzRixTQUFTLEdBQUd0RixPQUFPLENBQUNzRixTQUFTO0lBRWxDLElBQUksQ0FBQ3FFLGFBQWEsR0FBR0EsYUFBYTtJQUVsQyxJQUFJLENBQUN3TSxpQkFBaUIsR0FBRyxJQUFJLENBQUNuVyxPQUFPLENBQUN1TCxRQUFRLENBQUM0SyxpQkFBaUI7SUFFaEUsSUFBSSxDQUFDTixZQUFZLEdBQUdiLHNEQUFZLENBQUN4TCxXQUFXLEVBQUUsQ0FBQ3FNLFlBQVk7SUFFM0QsSUFBSSxDQUFDekcsY0FBYyxHQUFHLENBQUM7SUFDdkIsSUFBSSxDQUFDZ0gsZUFBZSxHQUFHLFNBQVM7SUFDaEMsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztJQUNsQixJQUFJLENBQUNuTSxTQUFTLEdBQUcsS0FBSztFQUMxQjtFQUFDM00sWUFBQSxDQUFBMFgsZ0JBQUE7SUFBQXpYLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyQyxRQUFBLEVBQVUsQ0FFVjtFQUFDO0lBQUE1QyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNlksaUJBQUEsRUFBbUIsQ0FFbkI7RUFBQztJQUFBOVksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWtELGFBQWF4QixPQUFPLEVBQUUyRyxhQUFhLEVBQUU7TUFDakMsSUFBSSxDQUFDc0osY0FBYyxHQUFHdk8sSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDcEM7RUFBQztJQUFBdEQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNELGNBQWM1QixPQUFPLEVBQUUsQ0FFdkI7RUFBQztJQUFBM0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBVLFFBQUEsRUFBVTtNQUNOLElBQUksSUFBSSxDQUFDa0UsS0FBSyxLQUFLLEtBQUssRUFBRTtRQUFBLElBQUFFLGlCQUFBO1FBQ3RCLENBQUFBLGlCQUFBLE9BQUksQ0FBQ0MsV0FBVyxjQUFBRCxpQkFBQSxlQUFoQkEsaUJBQUEsQ0FBa0JGLEtBQUssRUFBRTtNQUM3QjtNQUNBLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUk7SUFDckI7RUFBQztJQUFBN1ksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRVLFNBQUEsRUFBVztNQUNQLElBQUksSUFBSSxDQUFDZ0UsS0FBSyxLQUFLLElBQUksRUFBRTtRQUFBLElBQUFJLGtCQUFBO1FBQ3JCLENBQUFBLGtCQUFBLE9BQUksQ0FBQ0QsV0FBVyxjQUFBQyxrQkFBQSxlQUFoQkEsa0JBQUEsQ0FBa0JDLE1BQU0sRUFBRTtNQUM5QjtNQUNBLElBQUksQ0FBQ0wsS0FBSyxHQUFHLEtBQUs7SUFDdEI7RUFBQztJQUFBN1ksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVELGlCQUFBLEVBQW1CO01BQ2YsSUFBSSxJQUFJLENBQUNrSixTQUFTLEtBQUssS0FBSyxFQUFFO1FBQUEsSUFBQXlNLGtCQUFBO1FBQzFCLENBQUFBLGtCQUFBLE9BQUksQ0FBQ0gsV0FBVyxjQUFBRyxrQkFBQSxlQUFoQkEsa0JBQUEsQ0FBa0JDLFdBQVcsRUFBRTtNQUNuQztNQUNBLElBQUksQ0FBQzFNLFNBQVMsR0FBRyxJQUFJO0lBQ3pCO0VBQUM7SUFBQTFNLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2VSxlQUFldUUsU0FBUyxFQUFFO01BQ3RCLElBQUksSUFBSSxDQUFDM00sU0FBUyxLQUFLLElBQUksRUFBRTtRQUFBLElBQUE0TSxrQkFBQTtRQUN6QixDQUFBQSxrQkFBQSxPQUFJLENBQUNOLFdBQVcsY0FBQU0sa0JBQUEsZUFBaEJBLGtCQUFBLENBQWtCQyxZQUFZLEVBQUU7TUFDcEM7TUFDQSxJQUFJLENBQUM3TSxTQUFTLEdBQUcsS0FBSztJQUMxQjtFQUFDO0lBQUExTSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0QsV0FBQSxFQUFhLENBRWI7RUFBQztJQUFBekQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlELGlCQUFBLEVBQW1CLENBRW5CO0VBQUM7SUFBQTFELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwRCxPQUFPQyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtNQUNmLElBQUksSUFBSSxDQUFDZ0MsTUFBTSxLQUFLNUcsU0FBUyxJQUFJMEIsSUFBSSxDQUFDcUQsR0FBRyxDQUFDSCxHQUFHLEdBQUdELEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtRQUM1RCxJQUFJQyxHQUFHLElBQUksSUFBSSxDQUFDZ0MsTUFBTSxDQUFDekMsUUFBUSxHQUFHLElBQUksQ0FBQ3lDLE1BQU0sQ0FBQ2pFLFFBQVEsSUFBSWlDLEdBQUcsR0FBRyxJQUFJLENBQUNnQyxNQUFNLENBQUN6QyxRQUFRLEVBQUU7VUFBQSxJQUFBb1csa0JBQUE7VUFDbEYsQ0FBQUEsa0JBQUEsT0FBSSxDQUFDUixXQUFXLGNBQUFRLGtCQUFBLGVBQWhCQSxrQkFBQSxDQUFrQmxHLE9BQU8sRUFBRTtRQUMvQjtNQUNKO0lBQ0o7RUFBQztJQUFBdFQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlFLE9BQU9DLFVBQVUsRUFBRTtNQUNmLElBQUksQ0FBQzBCLE1BQU0sR0FBRzVHLFNBQVM7TUFFdkIsSUFBSSxJQUFJLENBQUMrWixXQUFXLEtBQUsvWixTQUFTLEVBQUU7UUFDaEMsSUFBSSxDQUFDK1osV0FBVyxDQUFDUyxNQUFNLEVBQUU7UUFDekIsSUFBSSxDQUFDVCxXQUFXLEdBQUcvWixTQUFTO01BQ2hDO01BRUEsSUFBSSxDQUFDMlosZUFBZSxHQUFHLFNBQVM7SUFDcEM7RUFBQztJQUFBNVksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlaLG9DQUFvQ2hYLGFBQWEsRUFBRSxDQUVuRDtFQUFDO0lBQUExQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0Ysd0NBQXdDL0MsYUFBYSxFQUFFLENBRXZEO0VBQUM7SUFBQTFDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwRixrQ0FBa0NqRCxhQUFhLEVBQUUsQ0FFakQ7RUFBQztJQUFBMUMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBaLGNBQWNuSyxjQUFjLEVBQUU7TUFDMUIsSUFBSTdPLElBQUksQ0FBQ3FELEdBQUcsQ0FBRXdMLGNBQWMsQ0FBQ3BNLFFBQVEsR0FBR29NLGNBQWMsQ0FBQzVOLFFBQVEsR0FBSSxJQUFJLENBQUN1SyxhQUFhLENBQUMwRixXQUFXLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRTtRQUMxRyxJQUFJLENBQUMrRyxlQUFlLEdBQUcsVUFBVTtNQUNyQyxDQUFDLE1BQU0sSUFBSXZWLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDc08sY0FBYyxHQUFHLElBQUksRUFBRTtRQUNoRCxJQUFJLENBQUNnSCxlQUFlLEdBQUcsU0FBUztNQUNwQyxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUNBLGVBQWUsR0FBRyxTQUFTO01BQ3BDO01BQ0F6VyxnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLHVCQUF1QixHQUFHLElBQUksQ0FBQ2dhLGVBQWUsRUFBRSxJQUFJLENBQUNwVyxPQUFPLENBQUM0RCxFQUFFLENBQUM7SUFDekY7RUFBQztJQUFBcEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9FLGVBQWV6RSxZQUFZLEVBQUUsQ0FFN0I7RUFBQztJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaVgsU0FBU3JSLE1BQU0sRUFBRTtNQUFBLElBQUErVCxlQUFBO1FBQUFDLGdCQUFBO1FBQUFDLGdCQUFBO1FBQUFDLGdCQUFBO1FBQUEvVSxLQUFBO1FBQUFnVixnQkFBQTtNQUNiOztNQUVBLElBQUksSUFBSSxDQUFDblUsTUFBTSxLQUFLNUcsU0FBUyxFQUFFO1FBQUEsSUFBQWdiLGtCQUFBO1FBQzNCO1FBQ0E7UUFDQSxDQUFBQSxrQkFBQSxPQUFJLENBQUNqQixXQUFXLGNBQUFpQixrQkFBQSxlQUFoQkEsa0JBQUEsQ0FBa0JSLE1BQU0sRUFBRTtRQUMxQixJQUFJLENBQUNULFdBQVcsR0FBRy9aLFNBQVM7TUFDaEM7TUFFQSxJQUFJLENBQUM0RyxNQUFNLEdBQUdBLE1BQU07O01BRXBCO01BQ0EsSUFBSXFVLGtCQUFrQjtNQUN0QixJQUFJLEVBQUFOLGVBQUEsT0FBSSxDQUFDOVIsU0FBUyxjQUFBOFIsZUFBQSx1QkFBZEEsZUFBQSxDQUFnQk0sa0JBQWtCLE1BQUtqYixTQUFTLEVBQUU7UUFDbERpYixrQkFBa0IsR0FBQUMsa0JBQUEsQ0FBTyxJQUFJLENBQUNyUyxTQUFTLENBQUNvUyxrQkFBa0IsQ0FBQztNQUMvRCxDQUFDLE1BQU07UUFDSEEsa0JBQWtCLEdBQUcsRUFBRTtNQUMzQjtNQUNBLElBQUksQ0FBQ3JVLE1BQU0sQ0FBQ21ELGFBQWEsQ0FBQy9ELE9BQU8sQ0FBQyxVQUFBbVYsWUFBWSxFQUFJO1FBQzlDLElBQU0xSixtQkFBbUIsR0FBRzBKLFlBQVksQ0FBQzFKLG1CQUFtQixDQUFDM0osSUFBSSxDQUFDLFVBQUFzVCxRQUFRO1VBQUEsT0FBSUEsUUFBUSxDQUFDQyxZQUFZLEtBQUssTUFBTTtRQUFBLEVBQUM7UUFDL0dKLGtCQUFrQixDQUFDblEsSUFBSSxDQUFDO1VBQ3BCd1Esa0JBQWtCLEVBQUVILFlBQVksQ0FBQzNKLE1BQU07VUFDdkMrSixlQUFlLEVBQUU5SixtQkFBbUIsQ0FBQy9FLEdBQUc7VUFDeENxRixzQkFBc0IsRUFBRW9KLFlBQVksQ0FBQ3BKO1FBQ3pDLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQzs7TUFFRjtNQUNBLElBQUksQ0FBQ2dJLFdBQVcsR0FBRyxJQUFJLENBQUNYLFlBQVksQ0FBQ1QsaUJBQWlCLENBQUMsSUFBSSxDQUFDZSxpQkFBaUIsQ0FBQzhCLGFBQWEsRUFBRSxJQUFJLENBQUM5QixpQkFBaUIsQ0FBQytCLGdCQUFnQixHQUFBYixnQkFBQSxHQUFFLElBQUksQ0FBQy9SLFNBQVMsY0FBQStSLGdCQUFBLHVCQUFkQSxnQkFBQSxDQUFnQmMsaUJBQWlCLEVBQUVULGtCQUFrQixDQUFDOztNQUU1TDtNQUNBLElBQUksRUFBQUosZ0JBQUEsT0FBSSxDQUFDaFMsU0FBUyxjQUFBZ1MsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCYyxNQUFNLE1BQUszYixTQUFTLEVBQUU7UUFDdEMsSUFBSSxDQUFDK1osV0FBVyxDQUFDNkIsU0FBUyxDQUFDLElBQUksQ0FBQy9TLFNBQVMsQ0FBQzhTLE1BQU0sQ0FBQztNQUNyRDtNQUVBLElBQUksRUFBQWIsZ0JBQUEsT0FBSSxDQUFDalMsU0FBUyxjQUFBaVMsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCZSwwQkFBMEIsQ0FBQzliLE1BQU0sSUFBRyxDQUFDLEVBQUU7UUFDdkQsSUFBSSxDQUFDOEksU0FBUyxDQUFDZ1QsMEJBQTBCLENBQUM3VixPQUFPLENBQUMsVUFBQThWLElBQUksRUFBSTtVQUN0RC9WLEtBQUksQ0FBQ2dVLFdBQVcsQ0FBQ2dDLGlDQUFpQyxDQUFDRCxJQUFJLENBQUNFLElBQUksRUFBRUYsSUFBSSxDQUFDRyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDO1FBQzVGLENBQUMsQ0FBQztNQUNOO01BRUEsSUFBSSxDQUFDbkMsV0FBVyxDQUFDcFYsS0FBSyxFQUFFOztNQUV4QjtNQUNBLElBQUksRUFBQW9XLGdCQUFBLE9BQUksQ0FBQ2xTLFNBQVMsY0FBQWtTLGdCQUFBLHVCQUFkQSxnQkFBQSxDQUFnQm9CLFdBQVcsTUFBS25jLFNBQVMsRUFBRTtRQUMzQyxJQUFJLENBQUMrWixXQUFXLENBQUNxQyxjQUFjLENBQUMsSUFBSSxDQUFDdlQsU0FBUyxDQUFDc1QsV0FBVyxDQUFDO01BQy9EO01BRUEsSUFBSXZWLE1BQU0sQ0FBQ2dELFNBQVMsS0FBSyxJQUFJLEVBQUU7UUFDM0IsSUFBSSxDQUFDbVEsV0FBVyxDQUFDc0MsTUFBTSxDQUFDelYsTUFBTSxDQUFDaUQsaUJBQWlCLEdBQUdqRCxNQUFNLENBQUN6QyxRQUFRLEVBQUV5QyxNQUFNLENBQUNqRSxRQUFRLEVBQUUsSUFBSSxDQUFDZ1gsZUFBZSxFQUFFLElBQUksQ0FBQ3pNLGFBQWEsQ0FBQ29QLFNBQVMsRUFBRSxDQUFDO01BQzlJLENBQUMsTUFBTTtRQUNILElBQUksQ0FBQ3ZDLFdBQVcsQ0FBQ3NDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXpWLE1BQU0sQ0FBQ2pFLFFBQVEsRUFBRSxJQUFJLENBQUNnWCxlQUFlLEVBQUUsSUFBSSxDQUFDek0sYUFBYSxDQUFDb1AsU0FBUyxFQUFFLENBQUM7TUFDdEc7SUFDSjtFQUFDO0lBQUF2YixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMEUsVUFBVS9FLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUUsQ0FFMUM7RUFBQztJQUFBRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNEUsY0FBY2pGLFlBQVksRUFBRSxDQUU1QjtFQUFDO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpRixhQUFhdEYsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRXFGLFFBQVEsRUFBRTtNQUFBLElBQUFxVyxrQkFBQTtNQUNuRCxDQUFBQSxrQkFBQSxPQUFJLENBQUN4QyxXQUFXLGNBQUF3QyxrQkFBQSxlQUFoQkEsa0JBQUEsQ0FBa0JyVyxRQUFRLENBQUNBLFFBQVEsQ0FBQztJQUN4QztFQUFDO0lBQUFuRixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUYsUUFBUXhGLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUU7TUFBQSxJQUFBMmIsa0JBQUE7TUFDcEMsSUFBSSxDQUFDNVYsTUFBTSxHQUFHNUcsU0FBUztNQUV2QixDQUFBd2Msa0JBQUEsT0FBSSxDQUFDekMsV0FBVyxjQUFBeUMsa0JBQUEsZUFBaEJBLGtCQUFBLENBQWtCaEMsTUFBTSxFQUFFO01BQzFCLElBQUksQ0FBQ1QsV0FBVyxHQUFHL1osU0FBUztJQUNoQztFQUFDO0lBQUFlLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvRixhQUFhekYsWUFBWSxFQUFFO01BQ3ZCLElBQUksQ0FBQ2lHLE1BQU0sR0FBRzVHLFNBQVM7TUFFdkIsSUFBSSxJQUFJLENBQUMrWixXQUFXLEtBQUsvWixTQUFTLEVBQUU7UUFDaEMsSUFBSSxDQUFDK1osV0FBVyxDQUFDUyxNQUFNLEVBQUU7UUFDekIsSUFBSSxDQUFDVCxXQUFXLEdBQUcvWixTQUFTO01BQ2hDO01BRUEsSUFBSSxDQUFDMlosZUFBZSxHQUFHLFNBQVM7SUFDcEM7RUFBQztJQUFBNVksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXliLGdCQUFnQkMsTUFBTSxFQUFFO01BQUEsSUFBQUMsa0JBQUE7TUFDcEJ6WixnRUFBYSxDQUFDMkIsQ0FBQyxDQUFDbEYsR0FBRyxFQUFFLGdCQUFnQixHQUFHK2MsTUFBTSxFQUFFLElBQUksQ0FBQ25aLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUVoRSxDQUFBd1Ysa0JBQUEsT0FBSSxDQUFDNUMsV0FBVyxjQUFBNEMsa0JBQUEsZUFBaEJBLGtCQUFBLENBQWtCQyxZQUFZLENBQUNGLE1BQU0sQ0FBQztJQUMxQztFQUFDO0lBQUEzYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNmIsY0FBY0MsbUJBQW1CLEVBQUVDLGVBQWUsRUFBRTtNQUFBLElBQUFDLG1CQUFBO01BQ2hEOVosZ0VBQWEsQ0FBQ3NNLENBQUMsQ0FBQzdQLEdBQUcsRUFBRSx3QkFBd0IsR0FBR21kLG1CQUFtQixFQUFFLElBQUksQ0FBQ3ZaLE9BQU8sQ0FBQzRELEVBQUUsQ0FBQztNQUNyRmpFLGdFQUFhLENBQUNzTSxDQUFDLENBQUM3UCxHQUFHLEVBQUUsb0JBQW9CLEdBQUdvZCxlQUFlLEVBQUUsSUFBSSxDQUFDeFosT0FBTyxDQUFDNEQsRUFBRSxDQUFDO01BRTdFLENBQUE2VixtQkFBQSxPQUFJLENBQUNqRCxXQUFXLGNBQUFpRCxtQkFBQSxlQUFoQkEsbUJBQUEsQ0FBa0JDLEtBQUssQ0FBQ0gsbUJBQW1CLEVBQUVDLGVBQWUsQ0FBQztJQUNqRTtFQUFDO0VBQUEsT0FBQXZFLGdCQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDOU9RO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQztBQUN6RSxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELDRCQUE0Qiw4SUFBdUQ7O0FBRW5GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hEYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLDBIQUFpRDtBQUNsRSx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCxzQkFBc0I7O0FBRS9FO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLHFIQUE0QztBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7O0FBRW5FO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLCtHQUF5QztBQUN2RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDdkUscUJBQXFCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhDQUE4QztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDbkJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLHVIQUE4Qzs7QUFFNUQ7QUFDQTtBQUNBLElBQUksOEJBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC9tZXRyaWNzL0FkTWV0cmljcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL21ldHJpY3MvQWRNZXRyaWNzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL3RyYWNraW5nL0FkVHJhY2tlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL3RyYWNraW5nL0FkVHJhY2tpbmdNYW5hZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvaW5kZXguYWQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9wbHVnaW5zL29tc2RrL09NU0RLTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3BsdWdpbnMvb21zZGsvT01TZXNzaW9uSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnZhbHVlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFkU21hcnRMaWJNb2R1bGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYWRTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhZFNtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xufSkoKGZ1bmN0aW9uKCkgeyByZXR1cm4gKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiBnbG9iYWwpfSkoKSwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IFRBRyA9ICdCcGtBZE1ldHJpY3MnO1xuXG5leHBvcnQgY2xhc3MgQWRNZXRyaWNzIHtcbiAgICBhZFNraXBwYWJsZTtcblxuICAgIGFkU2tpcHBlZDtcblxuICAgIGFkUHJvZ3Jlc3M7XG5cbiAgICBhZER1cmF0aW9uO1xuXG4gICAgc3RhbGxzTnVtYmVyO1xuXG4gICAgc3RhbGxzRHVyYXRpb247XG5cbiAgICBsYXllclN3aXRjaGVzTnVtYmVyO1xuXG4gICAgYXZlcmFnZUJpdHJhdGU7XG5cbiAgICBzZXNzaW9uVG9rZW47XG5cbiAgICBjcmVhdGl2ZUlkO1xuXG4gICAgYWRJZDtcblxuICAgIGNvbnN0cnVjdG9yKG1ldHJpY3MgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG1ldHJpY3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWRQcm9ncmVzcyA9IC0xO1xuICAgICAgICAgICAgdGhpcy5hZER1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuYXZlcmFnZUJpdHJhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uVG9rZW4gPSAnJztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpdmVJZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hZElkID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkU2tpcHBhYmxlID0gbWV0cmljcy5hZFNraXBwYWJsZTtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gbWV0cmljcy5hZFNraXBwZWQ7XG4gICAgICAgICAgICB0aGlzLmFkUHJvZ3Jlc3MgPSBtZXRyaWNzLmFkUHJvZ3Jlc3M7XG4gICAgICAgICAgICB0aGlzLmFkRHVyYXRpb24gPSBtZXRyaWNzLmFkRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnN0YWxsc051bWJlciA9IG1ldHJpY3Muc3RhbGxzTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5zdGFsbHNEdXJhdGlvbiA9IG1ldHJpY3Muc3RhbGxzRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmxheWVyU3dpdGNoZXNOdW1iZXIgPSBtZXRyaWNzLmxheWVyU3dpdGNoZXNOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLmF2ZXJhZ2VCaXRyYXRlID0gbWV0cmljcy5hdmVyYWdlQml0cmF0ZTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblRva2VuID0gbWV0cmljcy5zZXNzaW9uVG9rZW47XG4gICAgICAgICAgICB0aGlzLmNyZWF0aXZlSWQgPSBtZXRyaWNzLmNyZWF0aXZlSWQ7XG4gICAgICAgICAgICB0aGlzLmFkSWQgPSBtZXRyaWNzLmFkSWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2UobGlzdCkge1xuICAgICAgICBpZiAobGlzdCAhPT0gdW5kZWZpbmVkICYmIGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkTWV0cmljcyA9IG5ldyBBZE1ldHJpY3MoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RNZXRyaWNzID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkU2tpcHBhYmxlID0gbGFzdE1ldHJpY3MuYWRTa2lwcGFibGU7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkU2tpcHBlZCA9IGxhc3RNZXRyaWNzLmFkU2tpcHBlZDtcbiAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYWRQcm9ncmVzcyA9IGxhc3RNZXRyaWNzLmFkUHJvZ3Jlc3M7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLnNlc3Npb25Ub2tlbiA9IGxhc3RNZXRyaWNzLnNlc3Npb25Ub2tlbjtcbiAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuY3JlYXRpdmVJZCA9IGxhc3RNZXRyaWNzLmNyZWF0aXZlSWQ7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkSWQgPSBsYXN0TWV0cmljcy5hZElkO1xuXG4gICAgICAgICAgICBsZXQgbGF5ZXJQZXJEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICBsZXQgdG90YWxEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsaXN0Lmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkTWV0cmljcyA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZER1cmF0aW9uICs9IGFkTWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3Muc3RhbGxzTnVtYmVyICs9IGFkTWV0cmljcy5zdGFsbHNOdW1iZXI7XG4gICAgICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5zdGFsbHNEdXJhdGlvbiArPSBhZE1ldHJpY3Muc3RhbGxzRHVyYXRpb247XG4gICAgICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyICs9IGFkTWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyO1xuXG4gICAgICAgICAgICAgICAgbGF5ZXJQZXJEdXJhdGlvbiArPSBhZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgKiBhZE1ldHJpY3MuYWREdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB0b3RhbER1cmF0aW9uICs9IGFkTWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG90YWxEdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgPSBNYXRoLnJvdW5kKGxheWVyUGVyRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZE1ldHJpY3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJ1xcbnsgYWRTa2lwcGFibGU9JyArIHRoaXMuYWRTa2lwcGFibGUgK1xuICAgICAgICAgICAgJ1xcbiAgYWRTa2lwcGVkPScgKyB0aGlzLmFkU2tpcHBlZCArXG4gICAgICAgICAgICAnXFxuICBhZFByb2dyZXNzPScgKyB0aGlzLmFkUHJvZ3Jlc3MgK1xuICAgICAgICAgICAgJ1xcbiAgYWREdXJhdGlvbj0nICsgdGhpcy5hZER1cmF0aW9uICtcbiAgICAgICAgICAgICdcXG4gIHN0YWxsc051bWJlcj0nICsgdGhpcy5zdGFsbHNOdW1iZXIgK1xuICAgICAgICAgICAgJ1xcbiAgc3RhbGxzRHVyYXRpb249JyArIHRoaXMuc3RhbGxzRHVyYXRpb24gK1xuICAgICAgICAgICAgJ1xcbiAgbGF5ZXJTd2l0Y2hlc051bWJlcj0nICsgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyICtcbiAgICAgICAgICAgICdcXG4gIGF2ZXJhZ2VCaXRyYXRlPScgKyB0aGlzLmF2ZXJhZ2VCaXRyYXRlICtcbiAgICAgICAgICAgIFwiXFxuICBzZXNzaW9uVG9rZW49J1wiICsgdGhpcy5zZXNzaW9uVG9rZW4gKyAnXFwnJyArXG4gICAgICAgICAgICBcIlxcbiAgY3JlYXRpdmVJZD0nXCIgKyB0aGlzLmNyZWF0aXZlSWQgKyAnXFwnJyArXG4gICAgICAgICAgICBcIlxcbiAgYWRJZD0nXCIgKyB0aGlzLmFkSWQgKyBcIlxcJyB9XCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRNZXRyaWNzQnVpbGRlciB7XG4gICAgYWRNZXRyaWNzO1xuXG4gICAgdGltZVNwZW50UGVyTGF5ZXI7XG5cbiAgICBxdWFydGlsZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihhZE1ldHJpY3MgPSB1bmRlZmluZWQsIHRpbWVTcGVudFBlckxheWVyID0gdW5kZWZpbmVkLCBxdWFydGlsZXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFkTWV0cmljcyA9PT0gdW5kZWZpbmVkICYmIHRpbWVTcGVudFBlckxheWVyID09PSB1bmRlZmluZWQgJiYgcXVhcnRpbGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXIgPSB7fTtcbiAgICAgICAgICAgIHRoaXMucXVhcnRpbGVzID0ge307XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljcyA9IGFkTWV0cmljcztcbiAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXIgPSB0aW1lU3BlbnRQZXJMYXllcjtcbiAgICAgICAgICAgIHRoaXMucXVhcnRpbGVzID0gcXVhcnRpbGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW1wb3J0KGFkTWV0cmljcykge1xuICAgICAgICBpZiAoYWRNZXRyaWNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzID0gYWRNZXRyaWNzO1xuICAgICAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllciA9IHt9O1xuICAgICAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllclthZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGVdID0gYWRNZXRyaWNzLmFkRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHt9O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDw9IChhZE1ldHJpY3MuYWRQcm9ncmVzcyAvIDI1KSA7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucXVhcnRpbGVzW2kgKiAyNV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWRTa2lwcGFibGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRTa2lwcGFibGUgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBZFNraXBwZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRTa2lwcGVkID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkUHJvZ3Jlc3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy5xdWFydGlsZXNbdmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRQcm9ncmVzcyA9IE9iamVjdC5rZXlzKHRoaXMucXVhcnRpbGVzKS5sZW5ndGggKiAyNSAtIDI1O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQUk9HUkVTUycsIHRoaXMuYWRNZXRyaWNzLmFkUHJvZ3Jlc3MsIHRoaXMucXVhcnRpbGVzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRTZXNzaW9uVG9rZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3Muc2Vzc2lvblRva2VuID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Q3JlYXRpdmVJZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5jcmVhdGl2ZUlkID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWRJZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5hZElkID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGltZVNwZW50UGVyTGF5ZXIoYml0cmF0ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgYml0cmF0ZSA9IE1hdGgucm91bmQoYml0cmF0ZSk7XG5cbiAgICAgICAgaWYgKGJpdHJhdGUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZVNwZW50T25MYXllciA9IHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV07XG4gICAgICAgICAgICBpZiAodGltZVNwZW50T25MYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllcltiaXRyYXRlXSArPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllcltiaXRyYXRlXSA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkTGF5ZXJTd2l0Y2goKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmxheWVyU3dpdGNoZXNOdW1iZXIrKztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRTdGFsbChkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5zdGFsbHNOdW1iZXIrKztcbiAgICAgICAgdGhpcy5hZE1ldHJpY3Muc3RhbGxzRHVyYXRpb24gKz0gZHVyYXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzID0gbmV3IEFkTWV0cmljcygpO1xuICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0ge307XG4gICAgICAgIHRoaXMucXVhcnRpbGVzID0ge307XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQWRNZXRyaWNzQnVpbGRlcihuZXcgQWRNZXRyaWNzKHRoaXMuYWRNZXRyaWNzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50aW1lU3BlbnRQZXJMYXllciksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucXVhcnRpbGVzKSk7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGxldCBsYXllclBlckR1cmF0aW9uID0gMDtcbiAgICAgICAgbGV0IHRvdGFsRHVyYXRpb24gPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3QgYml0cmF0ZSBpbiB0aGlzLnRpbWVTcGVudFBlckxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV07XG5cbiAgICAgICAgICAgIGxheWVyUGVyRHVyYXRpb24gKz0gYml0cmF0ZSAqIGR1cmF0aW9uO1xuICAgICAgICAgICAgdG90YWxEdXJhdGlvbiArPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3RhbER1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljcy5hdmVyYWdlQml0cmF0ZSA9IE1hdGgucm91bmQobGF5ZXJQZXJEdXJhdGlvbiAvIHRvdGFsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWREdXJhdGlvbiA9IHRvdGFsRHVyYXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRNZXRyaWNzO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtBZE1ldHJpY3NCdWlsZGVyfSBmcm9tICcuL0FkTWV0cmljcyc7XG5pbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IERhdGVVdGlscyBmcm9tICcuLi8uLi91dGlscy9EYXRlVXRpbHMnO1xuaW1wb3J0IFNtYXJ0TGliIGZyb20gJy4uLy4uL1NtYXJ0TGliJztcbmltcG9ydCBBZFRyYWNraW5nTWFuYWdlciBmcm9tICcuLi90cmFja2luZy9BZFRyYWNraW5nTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtBZE1ldHJpY3NNZ3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZE1ldHJpY3NNYW5hZ2VyIHtcbiAgICBoYW5kbGVyO1xuXG4gICAgdGltZWxpbmU7XG5cbiAgICBidWlsZGVyO1xuXG4gICAgYWRNZXRyaWNzO1xuXG4gICAgZmlyc3RJbWFnZTtcbiAgICBsYXN0TGF5ZXJCaXRyYXRlO1xuXG4gICAgYWRCcmVha1BsYXlpbmc7XG4gICAgYWRQbGF5aW5nO1xuICAgIGFkU2tpcHBlZDtcbiAgICBhZExhc3RMYXllclN3aXRjaERhdGU7XG4gICAgYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQudGltZWxpbmU7XG5cbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEFkTWV0cmljc0J1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSB7fTtcbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyBSZXNldCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSB7fTtcblxuICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RMYXllckJpdHJhdGUgPSAwO1xuXG4gICAgICAgIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID0gLTE7XG5cbiAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uRmlyc3RJbWFnZShiaXRyYXRlLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmxhc3RMYXllckJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25MYXllclN3aXRjaChiaXRyYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nICYmIHRoaXMuZmlyc3RJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFRpbWVTcGVudFBlckxheWVyKHRoaXMubGFzdExheWVyQml0cmF0ZSwgRGF0ZS5ub3coKSAtIHRoaXMuYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlKTtcbiAgICAgICAgICAgIHRoaXMuYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdExheWVyQml0cmF0ZSAhPT0gYml0cmF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRMYXllclN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0TGF5ZXJCaXRyYXRlID0gYml0cmF0ZTtcbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZ1N0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZykge1xuICAgICAgICAgICAgLy8gU3RhcnQgc3RhbGwgdGltZXJcbiAgICAgICAgICAgIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhbGxFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nICYmIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID49IDApIHtcbiAgICAgICAgICAgIC8vIEFkZCBzdGFsbFxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFN0YWxsKERhdGUubm93KCkgLSB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IC0xO1xuICAgIH1cblxuICAgIG9uUmVidWZmZXJpbmdFbmQoKSB7XG4gICAgICAgIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID0gLTE7XG4gICAgfVxuXG4gICAgb25TZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBzZWVrZWQgZnJvbSAnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUoc3RhcnQpICsgJyB0byAnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUoZW5kKSk7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmQgLSBzdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3Jpbmcgc2Vla1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJZ25vcmluZyBzZWVrIDwgJyArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEgKyAnbXMnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudCBhZCBpcyBiZWluZyBza2lwcGVkXG4gICAgICAgICAgICAgICAgdGhpcy5hZFNraXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdG9wKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgLy8gQWQgZW5kIHdpdGggc3RvcFN0cmVhbWluZ1Nlc3Npb25cbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZEVuZCgpO1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZEJyZWFrQmVnaW4oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIC8vIEFkIGJyZWFrcyBzdGFydFxuICAgICAgICB0aGlzLmFkQnJlYWtQbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyBBZGQgYWQgYnJlYWsgYmVnaW4gdG8gdGltZWxpbmVcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5wdXNoRXZlbnQoU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlPy5TZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZEJlZ2luKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCkge1xuICAgICAgICAvLyBUbyBkZXRlY3Qgc2tpcCBvZiBhbiBhZCBpbnNpZGUgYW4gYWQgYnJlYWtzXG4gICAgICAgIGlmICh0aGlzLmFkU2tpcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZEVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBhZCBtZXRyaWNzXG4gICAgICAgIHRoaXMuYWRTa2lwcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLmJ1aWxkZXIucmVzZXQoKVxuICAgICAgICAgICAgLmltcG9ydCh0aGlzLmFkTWV0cmljc1thZElkXSkgLy8gaW1wb3J0IG9sZCBhZCBtZXRyaWNzIFNSIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgLnNldFNlc3Npb25Ub2tlbihzZXNzaW9uVG9rZW4pXG4gICAgICAgICAgICAuc2V0Q3JlYXRpdmVJZChjcmVhdGl2ZUlkKVxuICAgICAgICAgICAgLnNldEFkSWQoYWRJZCk7XG5cbiAgICAgICAgdGhpcy5hZFBsYXlpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQWRTa2lwcGFibGUoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHRoaXMuYnVpbGRlci5zZXRBZFNraXBwYWJsZSh0cnVlKTtcbiAgICB9XG5cbiAgICBvbkFkU2tpcHBlZChzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQsIG90aGVyU2tpcHBlZEFkSWRzKSB7XG4gICAgICAgIHRoaXMuYWRTa2lwcGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBTa2lwIGFsbCBvdGhlciBuZXh0IGFkc1xuICAgICAgICBpZiAob3RoZXJTa2lwcGVkQWRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIHNraXBwZWQnKTtcblxuICAgICAgICAgICAgb3RoZXJTa2lwcGVkQWRJZHMuZm9yRWFjaChhZElkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkTWV0cmljc1thZElkXS5hZFNraXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkUHJvZ3Jlc3Moc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkLCBwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA+IDAgJiYgdGhpcy5idWlsZGVyLnF1YXJ0aWxlc1socHJvZ3Jlc3MgLSAyNSldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRFbmQoc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkKSB7XG4gICAgICAgIC8vIERlZmF1bHQgYWQgZW5kXG4gICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcblxuICAgICAgICB0aGlzLmFkUGxheWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQWRCcmVha0VuZChzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgLy8gQWQgZW5kIHdpdGggc2tpcFxuICAgICAgICBpZiAodGhpcy5hZFBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5zZXRBZFNraXBwZWQodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkIGJyZWFrcyBlbmRcbiAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFkZCBhZCBicmVhayBlbmQgdG8gdGltZWxpbmVcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5wdXNoRXZlbnRQcm9ncmVzcyhTbWFydExpYi5hbmFseXRpY3NNb2R1bGU/LlNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wLCB0aGlzLmFkTWV0cmljcy5hZFByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyID0gdGhpcy5idWlsZGVyLmNsb25lKClcbiAgICAgICAgICAgICAgICAuYWRkVGltZVNwZW50UGVyTGF5ZXIodGhpcy5sYXN0TGF5ZXJCaXRyYXRlLCBEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPj0gMCkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkU3RhbGwoRGF0ZS5ub3coKSAtIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWV0cmljcyA9IGJ1aWxkZXIuYnVpbGQoKTtcbiAgICAgICAgICAgIGlmIChtZXRyaWNzLmFkSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzW21ldHJpY3MuYWRJZF0gPSBtZXRyaWNzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvblJlcG9ydC5hZE1ldHJpY3MgPSBPYmplY3QudmFsdWVzKHRoaXMuYWRNZXRyaWNzKTtcbiAgICB9XG5cbiAgICBvbkVuZFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuICAgICAgICBzZXNzaW9uUmVwb3J0LmFkTWV0cmljcyA9IE9iamVjdC52YWx1ZXModGhpcy5hZE1ldHJpY3MpO1xuICAgIH1cblxuICAgIGhhbmRsZUFkRW5kKCkge1xuICAgICAgICAvLyBTdG9yZSBmaW5hbCBwcm9ncmVzcyBhbmQgdGltZSBzcGVudCBvbiBsYXllciB1bnRpbCBlbmRcbiAgICAgICAgdGhpcy5idWlsZGVyLnNldEFkU2tpcHBlZCh0aGlzLmFkU2tpcHBlZClcbiAgICAgICAgICAgIC5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmxhc3RMYXllckJpdHJhdGUsIERhdGUubm93KCkgLSB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSk7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGFkIG1ldHJpY3NcbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHRoaXMuYnVpbGRlci5idWlsZCgpO1xuICAgICAgICBpZiAobWV0cmljcy5hZElkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzW21ldHJpY3MuYWRJZF0gPSBtZXRyaWNzO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIG1ldHJpY3MgOiAnICsgbWV0cmljcy50b1N0cmluZygpKTtcblxuICAgICAgICAvLyBSZXNldCBhZCBtZXRyaWNzIGZvciB0aGUgbmV4dCBhZFxuICAgICAgICB0aGlzLmJ1aWxkZXIucmVzZXQoKTtcbiAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkFkc1VwZGF0ZWQoYWREYXRhKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbXB0eSBhZCByZXBvcnQgKHVzZWQgdG8gY291bnQgdGhlIG51bWJlciBvZiBhZCBnZW5lcmF0ZWQgYnkgdGhlIEJrWW91KVxuICAgICAgICBhZERhdGEuYWRCcmVha3MuZm9yRWFjaChhZEJyZWFrID0+IHtcbiAgICAgICAgICAgIGFkQnJlYWsuYWRzLmZvckVhY2goYWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkTWV0cmljc1thZC5hZElkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRNZXRyaWNzQnVpbGRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkTWV0cmljc1thZC5hZElkXSA9IGJ1aWxkZXIuc2V0U2Vzc2lvblRva2VuKGFkRGF0YS5zZXNzaW9uVG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0Q3JlYXRpdmVJZChhZC5jcmVhdGl2ZUlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFkSWQoYWQuYWRJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZGRpbmcgYWQgbWV0cmljcyByZXBvcnQgZm9yIGFkIGlkICcgKyBhZC5hZElkLCB0aGlzLmhhbmRsZXI/LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBSZXF1ZXN0TWFuYWdlciBmcm9tICcuLi8uLi9yZXF1ZXN0L1JlcXVlc3RNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0FkVHJhY2tlcic7XG5cbmNsYXNzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIFRyYWNrZXJzIG5lZWQgdG8ga25vdyBpZiBpdCBoYXMgYmVlbiBhbHJlYWR5IHByb2NlZWRlZFxuICAgICAqIEluIGNhc2Ugb2Ygc2VlayBhbmQgaW4gc29tZSBjYXNlcywgdHJhY2tlcnMgc2hvdWxkIG5vdCBiZSBjYWxsZWRcbiAgICAgKiBBIHNlZWsgYmVmb3JlIGFuIGFkIHJlc2V0IHRoaXMgbWFwXG4gICAgICovXG4gICAgcHJvY2VlZGVkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvY2VlZGVkID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHRyYWNrZXIgY2FuIGV4ZWN1dGUgaXRzIGNvZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZCBQcm9jZXNzIGlkLiBJbiBzb21lIHRyYWNrZXIsIGl0IHJlcXVpcmVzIG11bHRpcGxlIGNhbiBwcm9jZXNzIChwcm9jZXNzIGJlZ2luLCBwcm9jZXNzIGVuZCBmb3IgdGhlIGFkIGJyZWFrIHRyYWNrZXIpXG4gICAgICogICAgICAgICAgIDAgPSBwcm9jZXNzQmVnaW4sIDEgPSBwcm9jZXNzRW5kXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlmIHJldHVybiB0cnVlLCB0aGUgcmVzdCBvZiB0aGUgbWV0aG9kIHdoaWNoIGNhbGxzIHRoaXMgY2FuIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgY2FuUHJvY2VzcyhpZCA9IDApIHtcbiAgICAgICAgLy8gY29uc3QgY2FuUHJvY2VzcyA9IERhdGUubm93KCkgLSAodGhpcy5wcm9jZWVkZWRbaWRdIHx8IDApID4gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQTtcbiAgICAgICAgY29uc3QgY2FuUHJvY2VzcyA9IHRoaXMucHJvY2VlZGVkW2lkXSA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChjYW5Qcm9jZXNzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT0snLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHRoaXMuYWRJZCB8fCB0aGlzLmFkPy5hZElkLCAnaWQgJyArIGlkLCB0aGlzLnR5cGUpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZWVkZWRbaWRdID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfS8qIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05PSycsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgdGhpcy5hZElkIHx8IHRoaXMuYWQ/LmFkSWQsICdpZCAnICsgaWQsIHRoaXMudHlwZSk7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHJldHVybiBjYW5Qcm9jZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBwcm9jZWVkZWQgbWFwXG4gICAgICovXG4gICAgcmVzZXRQcm9jZXNzKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUkVTRVQnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHRoaXMuYWRJZCB8fCB0aGlzLmFkPy5hZElkLCB0aGlzLnR5cGUpO1xuICAgICAgICB0aGlzLnByb2NlZWRlZCA9IHt9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBCYXNlIGFkIGRhdGEgb2JqZWN0XG4gKiBTdG9yZWQgaW4gYWQgdHJhY2tpbmcgbWFuYWdlciBhbmQgdXNlZCB0byBicm93c2VyIGFkc1xuICovXG5leHBvcnQgY2xhc3MgQWREYXRhVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogU21hcnRMaWIgYWQgdHJhY2tpbmcgbWFuYWdlclxuICAgICAqL1xuICAgIGFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbnRva2VuXG4gICAgICovXG4gICAgc2Vzc2lvblRva2VuO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdGltZXJlZmVyZW5jZV9tc1xuICAgICAqL1xuICAgIHRpbWVSZWZlcmVuY2U7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZHBvZHNcbiAgICAgKi9cbiAgICBhZEJyZWFrcztcblxuICAgIGNvbnN0cnVjdG9yKGFkVHJhY2tpbmdNYW5hZ2VyLCBzZXNzaW9uVG9rZW4sIHRpbWVSZWZlcmVuY2UpIHtcbiAgICAgICAgdGhpcy5hZFRyYWNraW5nTWFuYWdlciA9IGFkVHJhY2tpbmdNYW5hZ2VyO1xuICAgICAgICB0aGlzLnNlc3Npb25Ub2tlbiA9IHNlc3Npb25Ub2tlbjtcbiAgICAgICAgdGhpcy50aW1lUmVmZXJlbmNlID0gdGltZVJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5hZEJyZWFrcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBhZCBicmVhayBhZnRlciB0aGUgZ2l2ZW4gcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gcG9zaXRpb24gdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBvZiBoYXMgcmVtYWluaW5nIGFkIGJyZWFrcyBhZnRlciBwb3NpdGlvblxuICAgICAqL1xuICAgIGhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBwb3NpdGlvbiA8IGFkQnJlYWsucG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2dyZXNzaW9uIGlmIHNlZWtpbmdcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3Npb24ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5hZEJyZWFrcy5mb3JFYWNoKGFkQnJlYWsgPT4gYWRCcmVhay5yZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkIGJyZWFrIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEFkQnJlYWtUcmFja2VyIGV4dGVuZHMgVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogQWQgZGF0YSB0cmFja2VyXG4gICAgICovXG4gICAgYWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgaWRcbiAgICAgKi9cbiAgICBpZDsgLy8gaWRcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHN0YXJ0dGltZV9tc1xuICAgICAqL1xuICAgIHBvc2l0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQWRqdXN0ZWQgYWQgYnJlYWsgZHVyYXRpb24gY2FsY3VsYXRlZCBieSBTbWFydExpYiBhbmQgdXNlZCBieSB0aGUgdHJhY2tpbmdcbiAgICAgKiBJbiBzb21lIGNhc2VzLCB0aGUgZHVyYXRpb24gcmV0dXJuZWQgYnkgdGhlIEJrWW91IGlzIG5vdCBjb3JyZWN0IGFuZCBoYXMgdG8gYmUgYWRqdXN0ZWRcbiAgICAgKi9cbiAgICBkdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSBjdXJyZW50IGFkIGJyZWFrIGluIHRoZSB0cmFja2luZyBmaWxlIChCa1lvdSBkdXJhdGlvbl9tcylcbiAgICAgKiBGb3IgTElWRSBjb250ZW50cywgYWN0dWFsRHVyYXRpb24gY2FuIGJlIGRpZmZlcmVudCBvZiBleHBlY3RlZER1cmF0aW9uIHdoZW4gdGhlIGFkIGJyZWFrIGlzIG5vdCB0b3RhbGx5IGdlbmVyYXRlZFxuICAgICAqL1xuICAgIC8vIGFjdHVhbER1cmF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogRXhwZWN0ZWQgZHVyYXRpb24gb2YgdGhlIGZ1bGwgYWQgYnJlYWtcbiAgICAgKiBGb3IgVk9EIGNvbnRlbnRzLCBleHBlY3RlZER1cmF0aW9uID09IGFjdHVhbER1cmF0aW9uXG4gICAgICovXG4gICAgLy8gZXhwZWN0ZWREdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIENvbnRlbnQgdHlwZVxuICAgICAqL1xuICAgIGxpdmU7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZHNcbiAgICAgKi9cbiAgICBhZHM7XG5cbiAgICBjb25zdHJ1Y3RvcihhZERhdGEsIGlkLCBwb3NpdGlvbiwgZHVyYXRpb24sIGxpdmUpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmFkRGF0YSA9IGFkRGF0YTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5saXZlID0gbGl2ZTtcbiAgICAgICAgdGhpcy5hZHMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZHMuZm9yRWFjaChhZCA9PiBhZC5yZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0cmFja2VycyB3aGVuIHN0YXJ0aW5nIGFuIGFkXG4gICAgICovXG4gICAgcHJvY2Vzc0JlZ2luKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSB0aGlzLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBicmVhayBiZWdpbi4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRHVyYXRpb246ICcgKyB0aGlzLmR1cmF0aW9uICsgJ21zJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRCcmVha0RhdGEodGhpcyk7XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQnJlYWtCZWdpbih0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4pO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHVibGljIGV2ZW50c1xuICAgICAgICBjb25zdCBhZEV2ZW50c0xpc3RlbmVyID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5hZFNlc3Npb24/LmFkRXZlbnRzTGlzdGVuZXI7XG4gICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRCcmVha0JlZ2luKHRoaXMudG9EYXRhKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdHJhY2tlcnMgd2hlbiBlbmRpbmcgYW4gYWRcbiAgICAgKi9cbiAgICBwcm9jZXNzRW5kKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSB0aGlzLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBicmVhayBlbmQuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGludGVybmFsIGV2ZW50c1xuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZEJyZWFrRW5kKHRoaXMuYWREYXRhLnNlc3Npb25Ub2tlbik7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBwdWJsaWMgZXZlbnRzXG4gICAgICAgIGNvbnN0IGFkRXZlbnRzTGlzdGVuZXIgPSBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmFkU2Vzc2lvbj8uYWRFdmVudHNMaXN0ZW5lcjtcbiAgICAgICAgYWRFdmVudHNMaXN0ZW5lcj8ub25BZEJyZWFrRW5kKHRoaXMudG9EYXRhKCkpO1xuXG4gICAgICAgIC8vIE9uY2UgcGxheWVkLCB0aGUgYWQgYnJlYWsgY2FuIGJlIHJlcGxheWVkIGFnYWluXG4gICAgICAgIC8vIEluIHNvbWUgY2FzZSBvZiBCa1lvdSBubyBpbnNlcnRpb24gZXJyb3IsIGFkIGJyZWFrIGVuZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBhY3R1YWwgcG9zaXRpb24uXG4gICAgICAgIC8vICAgV2hlbiBhbiBhZCBpcyBkZXRlY3RlZCBhZCBicmVhayBiZWdpbiBzaG91bGQgYmUgY2FsbGVkIGFnYWluXG4gICAgICAgIHRoaXMucmVzZXRQcm9jZXNzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRQcm9jZXNzKCkge1xuICAgICAgICBzdXBlci5yZXNldFByb2Nlc3MoKTtcblxuICAgICAgICAvLyBPbmNlIGFuIGFkIGJyZWFrIGhhcyBiZWVuIGNvbXBsZXRlZCwgYWxsIGFkIGNhbiBiZSByZXBsYXllZCBhZ2FpblxuICAgICAgICAvLyAgIERvbid0IHJlc2V0IHRoZSBwcm9ncmVzc2lvbiwgaXQgcmVxdWlyZXMgdG8gc2VlayBiZWZvcmUgdGhlIGFkIHN0YXJ0IHBvc2l0aW9uIHRvIHJlc2V0IGl0LlxuICAgICAgICAvLyAgIE9ubHkgbmVlZCB0byB0cmlnZ2VyIGFkIGV2ZW50cyBpZiBzZWVraW5nIGJhY2t3YXJkXG4gICAgICAgIHRoaXMuYWRzLmZvckVhY2goYWQgPT4gYWQucmVzZXRQcm9jZXNzKCkpO1xuICAgIH1cblxuICAgIHRvRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbjogdGhpcy5wb3NpdGlvbiB8fCAwLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMubGl2ZSA9PT0gdHJ1ZSA/IC0xIDogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIGFkczogdGhpcy5hZHMubWFwKGFkID0+IGFkLnRvRGF0YSgpKSxcbiAgICAgICAgICAgIGFkQ291bnQ6IHRoaXMubGl2ZSA9PT0gdHJ1ZSA/IC0xIDogdGhpcy5hZHMubGVuZ3RoXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIEFkIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEFkVHJhY2tlciBleHRlbmRzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIEFkIGJyZWFrIHRyYWNrZXJcbiAgICAgKi9cbiAgICBhZEJyZWFrO1xuXG4gICAgLyoqXG4gICAgICogSW5kZXggaW4gdGhlIGN1cnJlbnQgYWQgYnJlYWtcbiAgICAgKi9cbiAgICBpbmRleDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHN0YXJ0dGltZV9tc1xuICAgICAqL1xuICAgIHBvc2l0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgZHVyYXRpb25fbXNcbiAgICAgKi9cbiAgICBkdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHNraXBwYWJsZV9tc1xuICAgICAqL1xuICAgIHNraXBwYWJsZVBvc2l0aW9uO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgYWQgaXMgc2tpcHBhYmxlXG4gICAgICovXG4gICAgc2tpcHBhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgY3JlYXRpdmVpZFxuICAgICAqL1xuICAgIGNyZWF0aXZlSWQ7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZGlkICsgJy0nICsgc3RhcnR0aW1lX21zXG4gICAgICovXG4gICAgYWRJZDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHRyYWNraW5nZXZlbnRzXG4gICAgICovXG4gICAgZXZlbnRzO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdmlkZW9jbGlja3Mgb2JqZWN0XG4gICAgICogSlNPTiB2YWx1ZSA6IHsgY2xpY2t0aHJvdWdodXJsOiBzdHJpbmcsIGNsaWNrdHJhY2tpbmc6IFt7Y2xpY2t1cmw6IHN0cmluZ31dLCBjdXN0b21jbGljazogW3tjbGlja3VybDogc3RyaW5nfV0gfVxuICAgICAqIE1hcHBlZCB2YWx1ZSA6IHsgdXJpOiBzdHJpbmcsIHRyYWNrZXJzOiBbe2NsaWNrdXJsOiBzdHJpbmd9XSwgY3VzdG9tQ2xpY2s6IFt7Y2xpY2t1cmw6IHN0cmluZ31dIH1cbiAgICAgKi9cbiAgICBjbGlja2FibGU7IC8vIHZpZGVvY2xpY2tzIHsgY2xpY2t0aHJvdWdodXJsLCBjbGlja3RyYWNraW5nLCBjdXN0b21jbGljayB9ID0+IHVyaSwgdHJhY2tlcnMsIGN1c3RvbUNsaWNrXG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZHZlcmlmaWNhdGlvbnMgYXJyYXlcbiAgICAgKiBKU09OIHZhbHVlIDogWyB7IHZlbmRvcjogc3RyaW5nLCBqYXZhc2NyaXB0cmVzb3VyY2VzOiBbe31dLCBleGVjdXRhYmxlcmVzb3VyY2VzOiBbe31dLCB0cmFja2luZ2V2ZW50czogW3t9XSwgdmVyaWZpY2F0aW9ucGFyYW1ldGVyczogc3RyaW5nfSBdXG4gICAgICogTWFwcGVkIHZhbHVlIDogWyB7dmVuZG9yOiBzdHJpbmcsIGphdmFzY3JpcHRSZXNvdXJjZXM6IFt7fV0sIGV4ZWN1dGFibGVSZXNvdXJjZXM6IFt7fV0sIHRyYWNraW5nRXZlbnRzOiBbe31dLCB2ZXJpZmljYXRpb25QYXJhbWV0ZXJzOiBzdHJpbmcgfSBdXG4gICAgICovXG4gICAgdmVyaWZpY2F0aW9ucztcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGludGVydmFsIHdhdGNoZWRcbiAgICAgKiBGbGF0dGVkIGF0IGVhY2ggYWQgaXRlcmF0aW9uXG4gICAgICovXG4gICAgd2F0Y2hlZDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcHJvZ3Jlc3Npb24gKDAuMCB0byAxLjApXG4gICAgICogUmVzZXQgd2hlbiBzZWVrXG4gICAgICovXG4gICAgcHJvZ3Jlc3Npb247XG5cbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVkIG5vbiBsaW5lYXIgYWQgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBub25MaW5lYXJBZDtcblxuICAgIGNvbnN0cnVjdG9yKGFkQnJlYWssIGluZGV4LCBwb3NpdGlvbiwgZHVyYXRpb24sIHNraXBwYWJsZSwgc2tpcHBhYmxlUG9zaXRpb24sIGNyZWF0aXZlSWQsIGFkSWQsIGNsaWNrYWJsZSwgdmVyaWZpY2F0aW9ucywgbm9uTGluZWFyQWQpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmFkQnJlYWsgPSBhZEJyZWFrO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNraXBwYWJsZSA9IHNraXBwYWJsZTtcbiAgICAgICAgdGhpcy5za2lwcGFibGVQb3NpdGlvbiA9IHNraXBwYWJsZVBvc2l0aW9uO1xuICAgICAgICB0aGlzLmNyZWF0aXZlSWQgPSBjcmVhdGl2ZUlkO1xuICAgICAgICB0aGlzLmFkSWQgPSBhZElkO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGNsaWNrYWJsZTtcbiAgICAgICAgdGhpcy52ZXJpZmljYXRpb25zID0gdmVyaWZpY2F0aW9ucztcbiAgICAgICAgdGhpcy53YXRjaGVkID0gW107XG4gICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwO1xuICAgICAgICB0aGlzLm5vbkxpbmVhckFkID0gbm9uTGluZWFyQWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmxhdCB3YXRjaCBpbnRlcnZhbHMgYXJyYXlcbiAgICAgKi9cbiAgICBmbGF0V2F0Y2hlZCgpIHtcbiAgICAgICAgY29uc3QgcmFuZ2VzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLndhdGNoZWQpKTsgLy8gZGVlcCBjb3B5XG4gICAgICAgIGxldCBpbnRlcnZhbHMgPSByYW5nZXMuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIGxldCB0b3AgPSBudWxsO1xuXG4gICAgICAgIC8vIHNvcnQgdGhlIGludGVydmFscyBiYXNlZCBvbiB0aGVpciBzdGFydCB2YWx1ZXNcbiAgICAgICAgaW50ZXJ2YWxzID0gaW50ZXJ2YWxzLnNvcnQoKHN0YXJ0LCBlbmQpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFydFswXSA+IGVuZFswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0WzBdIDwgZW5kWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHB1c2ggdGhlIDFzdCBpbnRlcnZhbCBpbnRvIHRoZSBzdGFja1xuICAgICAgICBzdGFjay5wdXNoKGludGVydmFsc1swXSk7XG5cbiAgICAgICAgLy8gc3RhcnQgZnJvbSB0aGUgbmV4dCBpbnRlcnZhbCBhbmQgbWVyZ2UgaWYgbmVlZGVkXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHRvcCBlbGVtZW50XG4gICAgICAgICAgICB0b3AgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKHRvcFsxXSA8IGludGVydmFsc1tpXVswXSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTVEFDSyAxJyk7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgaW50ZXJ2YWwgZG9lc24ndCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gc3RhY2sgdG9wIGVsZW1lbnQsIHB1c2ggaXQgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChpbnRlcnZhbHNbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b3BbMV0gPCBpbnRlcnZhbHNbaV1bMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU1RBQ0sgMicpO1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSB1cGRhdGUgdGhlIGVuZCB2YWx1ZSBvZiB0aGUgdG9wIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBpZiBlbmQgb2YgY3VycmVudCBpbnRlcnZhbCBpcyBoaWdoZXJcbiAgICAgICAgICAgICAgICB0b3BbMV0gPSBpbnRlcnZhbHNbaV1bMV07XG4gICAgICAgICAgICAgICAgLy8gdG9wLmR1cmF0aW9uID0gdG9wLmVuZCAtIHRvcC5zdGFydDtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IGVxdWFsID0gSlNPTi5zdHJpbmdpZnkodGhpcy53YXRjaGVkKSA9PT0gSlNPTi5zdHJpbmdpZnkoc3RhY2spO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRkxBVCcsIGVxdWFsLCBzdGFjayk7XG5cbiAgICAgICAgdGhpcy53YXRjaGVkID0gc3RhY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcHJvZ3Jlc3Npb24gaWYgc2Vla2luZ1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgICovXG4gICAgcmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVkID0gW107XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMDtcblxuICAgICAgICAgICAgdGhpcy5yZXNldFByb2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnRzID0+IGV2ZW50cy5yZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBwcm9ncmVzc2lvblxuICAgICAqIENhbGwgdHJhY2tlcnMgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25TdGFydCBwcm9ncmVzc2lvbiBzdGFydCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBwb3NpdGlvbkVuZCBwcm9ncmVzc2lvbiBlbmQgcG9zaXRpb25cbiAgICAgKi9cbiAgICB1cGRhdGVQcm9ncmVzc2lvbihwb3NpdGlvblN0YXJ0LCBwb3NpdGlvbkVuZCkge1xuICAgICAgICBpZiAocG9zaXRpb25TdGFydCA+IHBvc2l0aW9uRW5kIHx8XG4gICAgICAgICAgICBwb3NpdGlvblN0YXJ0IDwgdGhpcy5wb3NpdGlvbiB8fCBwb3NpdGlvbkVuZCA8IHRoaXMucG9zaXRpb24gfHxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RhcnQgPiB0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbiB8fCBwb3NpdGlvbkVuZCA+IHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPIHNhdmUgbGFzdCBwcm9ncmVzc2lvbiA/PyBhdm9pZCBjYWxjdWxhdGluZyBhdCBlYWNoIGl0ZXJhdGlvblxuICAgICAgICBjb25zdCBkdXJhdGlvblN0YXJ0ID0gdGhpcy53YXRjaGVkLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgKHZhbHVlWzFdIC0gdmFsdWVbMF0pLCAwKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3Npb25TdGFydCA9IGR1cmF0aW9uU3RhcnQgLyB0aGlzLmR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMud2F0Y2hlZC5wdXNoKFtwb3NpdGlvblN0YXJ0IC0gdGhpcy5wb3NpdGlvbiwgcG9zaXRpb25FbmQgLSB0aGlzLnBvc2l0aW9uXSk7IC8vIHRvZG8gcm91bmQgdmFsdWVzXG4gICAgICAgIHRoaXMuZmxhdFdhdGNoZWQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1dBVENIRUQnLCB0aGlzLndhdGNoZWQpO1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uRW5kID0gdGhpcy53YXRjaGVkLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgKHZhbHVlWzFdIC0gdmFsdWVbMF0pLCAwKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3Npb25FbmQgPSBkdXJhdGlvbkVuZCAvIHRoaXMuZHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IHByb2dyZXNzaW9uRW5kO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHJvZ3Jlc3MgZXZlbnRcbiAgICAgICAgY29uc3QgYWREYXRhID0gdGhpcy5hZEJyZWFrLmFkRGF0YTtcbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSBhZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgLyogaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gMC4wMCAmJiBwcm9ncmVzc2lvbkVuZCA+PSAwLjAwKSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3JlYXRpdmVJZCwgdGhpcy5hZElkLCAwKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gMC4yNSAmJiBwcm9ncmVzc2lvbkVuZCA+PSAwLjI1KSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMsIDI1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDAuNTAgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMC41MCkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCA1MCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSAwLjc1ICYmIHByb2dyZXNzaW9uRW5kID49IDAuNzUpIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcywgNzUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gMS4wMCAmJiBwcm9ncmVzc2lvbkVuZCA+PSAxLjAwKSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3JlYXRpdmVJZCwgdGhpcy5hZElkLCAxMDApO1xuICAgICAgICB9Ki9cblxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50LnByb2Nlc3NFdmVudHMocHJvZ3Jlc3Npb25TdGFydCwgcHJvZ3Jlc3Npb25FbmQpKTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgcHJvZ3Jlc3NlZCBmcm9tICcgKyBNYXRoLmZsb29yKHByb2dyZXNzaW9uU3RhcnQgKiAxMDAwMDApIC8gMTAwMCArICclIHRvICcgKyBNYXRoLmZsb29yKHByb2dyZXNzaW9uRW5kICogMTAwMDAwKSAvIDEwMDAgKyAnJScsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdHJhY2tlcnMgd2hlbiBzdGFydGluZyBhbiBhZFxuICAgICAqL1xuICAgIHByb2Nlc3NCZWdpbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkRGF0YSA9IHRoaXMuYWRCcmVhay5hZERhdGE7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gYWREYXRhLmFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIGFkIGJlZ2luICcgKyB0aGlzLmFkSWQgKyAnLi4uJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTdGFydDogJyArICh0aGlzLnBvc2l0aW9uKSArICdtcycsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRW5kICA6ICcgKyAodGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24pICsgJ21zJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdEdXJhdGlvbjogJyArIHRoaXMuZHVyYXRpb24gKyAnbXMnLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGludGVybmFsIGV2ZW50c1xuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZERhdGEodGhpcyk7XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQmVnaW4oYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnNraXBwYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRTa2lwcGFibGUoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcy5za2lwcGFibGVQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24sIHRoaXMuYWRCcmVhay5wb3NpdGlvbiArIHRoaXMuYWRCcmVhay5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCAwKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHB1YmxpYyBldmVudHNcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBjb25zdCBhZCA9IHRoaXMudG9EYXRhKCk7XG4gICAgICAgIGNvbnN0IGFkQnJlYWsgPSB0aGlzLmFkQnJlYWsudG9EYXRhKCk7XG4gICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRCZWdpbihhZCwgYWRCcmVhayk7XG4gICAgICAgIGlmICh0aGlzLnNraXBwYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWRFdmVudHNMaXN0ZW5lcj8ub25BZFNraXBwYWJsZShhZCwgYWRCcmVhaywgdGhpcy5za2lwcGFibGVQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24sIHRoaXMuYWRCcmVhay5wb3NpdGlvbiArIHRoaXMuYWRCcmVhay5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRyYWNrZXJzIHdoZW4gZW5kaW5nIGFuIGFkXG4gICAgICovXG4gICAgcHJvY2Vzc0VuZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkRGF0YSA9IHRoaXMuYWRCcmVhay5hZERhdGE7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gYWREYXRhLmFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIGFkIGVuZCAnICsgdGhpcy5hZElkICsgJy4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgaW50ZXJuYWwgZXZlbnRzXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnMsIHByb2Nlc3MgMTAwJSBpZiB0cmFja2luZyBwcm9ncmVzc2lvbiBpcyAwLjk1JStcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3Npb24gPj0gMC45NSkge1xuICAgICAgICAgICAgLy8gU2V0IHByb2dyZXNzaW9uIHRvIDFcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3Npb24odGhpcy5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMsIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRFbmQoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcyk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBwdWJsaWMgZXZlbnRzXG4gICAgICAgIGNvbnN0IGFkRXZlbnRzTGlzdGVuZXIgPSBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmFkU2Vzc2lvbj8uYWRFdmVudHNMaXN0ZW5lcjtcbiAgICAgICAgYWRFdmVudHNMaXN0ZW5lcj8ub25BZEVuZCh0aGlzLnRvRGF0YSgpLCB0aGlzLmFkQnJlYWsudG9EYXRhKCkpO1xuICAgIH1cblxuICAgIHRvRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgY3JlYXRpdmVJZDogdGhpcy5jcmVhdGl2ZUlkLFxuICAgICAgICAgICAgYWRJZDogdGhpcy5hZElkLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICAgIHNraXBQb3NpdGlvbjogdGhpcy5za2lwcGFibGVQb3NpdGlvbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgY2xpY2tVUkw6IHRoaXMuY2xpY2thYmxlLnVyaSxcbiAgICAgICAgICAgIG5vbkxpbmVhckFkOiB0aGlzLm5vbkxpbmVhckFkXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIEFkIGV2ZW50IGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEFkRXZlbnRUcmFja2VyIGV4dGVuZHMgVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogQWQgdHJhY2tlclxuICAgICAqL1xuICAgIGFkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdHlwZVxuICAgICAqL1xuICAgIHR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBjYWxsYmFja3VybFxuICAgICAqL1xuICAgIHVybDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IG9mZnNldFxuICAgICAqL1xuICAgIG9mZnNldDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHRpbWVfbXNcbiAgICAgKiBEZXByZWNhdGVkXG4gICAgICovXG4gICAgcG9zaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJvZ3Jlc3Npb247XG5cbiAgICBjb25zdHJ1Y3RvcihhZCwgdHlwZSwgdXJsLCBvZmZzZXQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZCA9IGFkO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUHJvZ3Jlc3Npb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSB0aGlzLmFkLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV2ZW50IHRyaWdnZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwcm9jZXNzUHJvZ3Jlc3Npb24oKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAodGhpcy50eXBlICE9PSB1bmRlZmluZWQgPyB0aGlzLnR5cGUudG9Mb3dlckNhc2UoKSA6IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gKHRoaXMucG9zaXRpb24gLSB0aGlzLmFkLnBvc2l0aW9uKSAvIHRoaXMuYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDAuMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0cXVhcnRpbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWlkcG9pbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aGlyZHF1YXJ0aWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC43NTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMS4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSB0aGlzLm9mZnNldCAvIHRoaXMuYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbXByZXNzaW9uJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ5IHRvIHByb2Nlc3MgZXZlbnRcbiAgICAgKiBUcmlnZ2VyIGV2ZW50IGlmIGV2ZW50IHRyaWdnZXIgcHJvZ3Jlc3Npb24gaXMgYmV0d2VlbiBwcm9ncmVzc2lvbiBzdGFydCBhbmQgcHJvZ3Jlc3Npb24gZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3Npb25TdGFydCBwcm9ncmVzc2lvbiBzdGFydFxuICAgICAqIEBwYXJhbSBwcm9ncmVzc2lvbkVuZCBwcm9ncmVzc2lvbiBlbmRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZXZlbnQgaGFzIGJlZW4gcHJvY2VlZGVkXG4gICAgICovXG4gICAgcHJvY2Vzc0V2ZW50cyhwcm9ncmVzc2lvblN0YXJ0LCBwcm9ncmVzc2lvbkVuZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzc2lvblN0YXJ0ICsgJyA8ICcgKyB0aGlzLnByb2dyZXNzaW9uICsgJyA8ICcgKyBwcm9ncmVzc2lvbkVuZCk7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZC5hZEJyZWFrLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSB0aGlzLnByb2dyZXNzaW9uICYmIHRoaXMucHJvZ3Jlc3Npb24gPD0gcHJvZ3Jlc3Npb25FbmQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nICcgKyAodGhpcy50eXBlIHx8ICd0aW1lZCBldmVudCcpICsgJyAoJyArIChNYXRoLmZsb29yKHRoaXMucHJvZ3Jlc3Npb24gKiAxMDApKSArICclKS4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51cmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlcXVlc3RpbmcgJyArIHRoaXMudXJsLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkRXZlbnQoYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlciwgdGhpcy51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEpvYk1hbmFnZXIgZnJvbSAnLi4vLi4vc2VydmljZS9Kb2JNYW5hZ2VyJztcbmltcG9ydCBSZXF1ZXN0TWFuYWdlciBmcm9tICcuLi8uLi9yZXF1ZXN0L1JlcXVlc3RNYW5hZ2VyJztcbmltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5cbmltcG9ydCB7QWRCcmVha1RyYWNrZXIsIEFkRGF0YVRyYWNrZXIsIEFkRXZlbnRUcmFja2VyLCBBZFRyYWNrZXJ9IGZyb20gJy4vQWRUcmFja2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0FkVHJhY2tpbmdNZ3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZFRyYWNraW5nTWFuYWdlciB7XG4gICAgc3RhdGljIFBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCA9IDEwMDA7XG5cbiAgICBzdGF0aWMgUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSA9IDYwMDA7XG5cbiAgICBzdGF0aWMgU0VTU0lPTl9VUERBVEVfSU5URVJWQUwgPSA1MDAwO1xuXG4gICAgLy8gc3RhdGljIE5PTkNFX0VYUElSQVRJT05fVElNRSA9IDUgKiA2MCAqIDEwMDA7XG5cbiAgICAvKipcbiAgICAgKiBTZXNzaW9uIGhhbmRsZXJcbiAgICAgKi9cbiAgICBoYW5kbGVyO1xuXG4gICAgLyoqXG4gICAgICogUGxheWVyIGFkYXB0ZXJcbiAgICAgKi9cbiAgICBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgLyoqXG4gICAgICogQWQgdHJhY2tpbmcgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgbGlzdGVuZXJzO1xuXG4gICAgLyoqXG4gICAgICogQWQgZGF0YSAoYWxsIGFkIGJyZWFrcywgYWxsIGFkcyBhbmQgYWxsIGV2ZW50cylcbiAgICAgKi9cbiAgICBhZERhdGE7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGFkIGxpc3RcbiAgICAgKi9cbiAgICBhZExpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgcG9zaXRpb24gam9iXG4gICAgICogVXNlZCB0byB0cmFjayB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZVBvc2l0aW9uSm9iO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEJrWW91IHNlc3Npb24gam9iXG4gICAgICovXG4gICAgdXBkYXRlU2Vzc2lvbkpvYjtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIHNlc3Npb24gc3RhcnRlZFxuICAgICAqL1xuICAgIHN0YXJ0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwYXVzZWRcbiAgICAgKi9cbiAgICBwYXVzZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBidWZmZXJpbmdcbiAgICAgKi9cbiAgICBidWZmZXJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwb3NpdGlvblxuICAgICAqL1xuICAgIGxhc3RQb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIHBvc2l0aW9uIHdoZW4gb25QYXVzZSBpcyBjYWxsZWRcbiAgICAgKi9cbiAgICBsYXN0UG9zaXRpb25CZWZvcmVQYXVzZTtcblxuICAgIC8qKlxuICAgICAqIExhc3Qgc2VlayBwb3NpdGlvbiwgdXNlZCB0byBoYW5kbGUgYmFkIHBvc2l0aW9uIHdoZW4gb25CdWZmZXJpbmdFbmQgY2FsbGVkXG4gICAgICovXG4gICAgbGFzdFBvc2l0aW9uQWZ0ZXJTZWVrO1xuXG4gICAgLyoqXG4gICAgICogRmlyc3QgaW1hZ2UgZGF0ZVxuICAgICAqL1xuICAgIGZpcnN0SW1hZ2VEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCB0cmFja2VyXG4gICAgICovXG4gICAgY3VycmVudEFkVHJhY2tlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgYnJlYWsgdHJhY2tlclxuICAgICAqL1xuICAgIGN1cnJlbnRBZEJyZWFrVHJhY2tlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgZGF0YSBmb3IgZ2V0Q3VycmVudEFkKClcbiAgICAgKi9cbiAgICBjdXJyZW50QWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCBicmVhayBkYXRhIGZvciBnZXRDdXJyZW50QWRCcmVhaygpXG4gICAgICovXG4gICAgY3VycmVudEFkQnJlYWtEYXRhO1xuXG4gICAgLyoqXG4gICAgICogR29vZ2xlIFBBTCBzZXNzaW9uXG4gICAgICovXG4gICAgYWRQYWxTZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbiBmbGFnXG4gICAgICovXG4gICAgYmtZb3VTZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbiB0b2tlblxuICAgICAqL1xuICAgIHNlc3Npb25Ub2tlbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkIHRyYWNraW5nIGJhc2UgVVJMXG4gICAgICovXG4gICAgYmFzZVVSTDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkIHRyYWNraW5nIG5vbmNlXG4gICAgICovXG4gICAgbm9uY2U7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZSBjcmVhdGlvbiBkYXRlXG4gICAgICovXG4gICAgLy8gbm9uY2VEYXRlXG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZSByZXF1ZXN0XG4gICAgICovXG4gICAgYWRQYWxTZXNzaW9uUmVxdWVzdDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGZpcnN0IGZ1bGwgYWQgdHJhY2tpbmcgZmlsZSByZWNlaXZlZFxuICAgICAqL1xuICAgIGZpcnN0RmlsZVJlY2VpdmVkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgZmlyc3QgZnVsbCBhZCB0cmFja2luZyBmaWxlIHByb2NlZWRlZFxuICAgICAqL1xuICAgIGZpcnN0RmlsZVByb2NlZWRlZDtcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBwb2RzIHNlbnQgdG8gb25BZERhdGEgYmVmb3JlIGZpcnN0RmlsZVByb2NlZWRlZCA9PT0gdHJ1ZVxuICAgICAqIG9uQWREYXRhIGlzIHJlZ2lzdGVyZWQgdGhyb3VnaCBzZXNzaW9uLnNldEFkRGF0YUxpc3RlbmVyKC4uLilcbiAgICAgKi9cbiAgICBwb2RzU2VudE51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcmVmcmVzaCBkZWxheSB0byB1cGRhdGUgdGhlIHRyYWNrZXJzIGZyb20gQmtZb3VcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIFNFU1NJT05fVVBEQVRFX0lOVEVSVkFMXG4gICAgICovXG4gICAgc2Vzc2lvblVwZGF0ZUludGVydmFsO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIgPSBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5hZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5hZExpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlID0gMDtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWsgPSAwO1xuXG4gICAgICAgIHRoaXMuYmtZb3VTZXNzaW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ub25jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gdGhpcy5ub25jZURhdGUgPSAwO1xuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZmlyc3RGaWxlUmVjZWl2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2RzU2VudE51bWJlciA9IDA7XG5cbiAgICAgICAgdGhpcy5zZXNzaW9uVXBkYXRlSW50ZXJ2YWwgPSBBZFRyYWNraW5nTWFuYWdlci5TRVNTSU9OX1VQREFURV9JTlRFUlZBTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBzZXNzaW9uIG9uIHRoZSBCa1lvdVxuICAgICAqIENhbGxlZCB3aGVuIHN0YXJ0aW5nIGEgc2Vzc2lvbiAoZHVyaW5nIGdldFVSTCBvciBmaXJzdCBpbWFnZSBldmVudClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYXNlVVJMIE1hbmlmZXN0IGJhc2UgVVJMXG4gICAgICogQHBhcmFtIHNlc3Npb25Ub2tlbiBCa1lvdSBzZXNzaW9uIHRva2VuXG4gICAgICogQHBhcmFtIGRhdGEgQmtZb3UgSlNPTlxuICAgICAqIEBwYXJhbSBhZFBhbFNlc3Npb24gR29vZ2xlIFBBTCBzZXNzaW9uIGRhdGFcbiAgICAgKiBAcGFyYW0gbm9uY2UgR29vZ2xlIFBBTCBub25jZVxuICAgICAqL1xuICAgIGluaXRCa1lvdVNlc3Npb24oYmFzZVVSTCwgc2Vzc2lvblRva2VuLCBkYXRhLCBhZFBhbFNlc3Npb24sIG5vbmNlKSB7XG4gICAgICAgIC8vIFN0b3JlIGJhc2UgdXJsXG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IGJhc2VVUkw7XG5cbiAgICAgICAgLy8gU2V0IEJrWW91IHNlc3Npb25cbiAgICAgICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBzZXNzaW9uVG9rZW47XG4gICAgICAgIHRoaXMuYmtZb3VTZXNzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyBHZXQgbm9uY2VcbiAgICAgICAgaWYgKGFkUGFsU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvbiA9IGFkUGFsU2Vzc2lvbjtcbiAgICAgICAgICAgIHRoaXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIEJrWW91IGZpbGVcbiAgICAgICAgdGhpcy5wYXJzZUFkUG9kcyhkYXRhKTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQmtZb3Ugc2Vzc2lvbiBpbml0aWFsaXplZCcsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVsb2FkIEJrWW91IEpTT05cbiAgICAgKi9cbiAgICB1cGRhdGVCa1lvdVNlc3Npb24oKSB7XG4gICAgICAgIC8vIENhbmNlbCByZXF1ZXN0IGlmIHNlc3Npb24gaGFzIGJlZW4gc3RvcHBlZFxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyLnN0b3BwZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJrWW91U2Vzc2lvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1VwZGF0aW5nIGFkIHRyYWNraW5nIGZpbGUuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbm9uY2UgdG8gdGhlIHJlcXVlc3QgdXJsXG4gICAgICAgICAgICBsZXQgYWRUcmFja2luZ1VSTCA9IHRoaXMuYmFzZVVSTDtcblxuICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIG5ldyBub25jZSBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8qIGlmICh0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9uY2UgPSB0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QuYWRQYWxTZXNzaW9uPy5nZXROb25jZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9uY2VEYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdOZXcgYWQgUEFMIHNlc3Npb24gbm9uY2UgJyArIHRoaXMubm9uY2UsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgY29uc3Qgc21hcnRMaWJQYXJhbWV0ZXJzID0gdGhpcy5oYW5kbGVyLnNtYXJ0TGliLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICAgICAgdXNlckFnZW50OiBzbWFydExpYlBhcmFtZXRlcnMudXNlckFnZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZFRyYWNraW5nKHRoaXMuaGFuZGxlciwgcGFyYW1ldGVycywgYWRUcmFja2luZ1VSTCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgcmVxdWVzdCBpZiBzZXNzaW9uIGhhcyBiZWVuIHN0b3BwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5zdG9wcGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgYWN0aXZlIGtlZXBhbGl2ZSBqb2JcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlU2Vzc2lvbkpvYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FuY2VsKHRoaXMudXBkYXRlU2Vzc2lvbkpvYik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmh0dHBTdGF0dXMgPj0gMjAwICYmIHJlc3VsdC5odHRwU3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgQmtZb3UgSlNPTiBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyB1cGRhdGVkIGZpbGUgdW5yZWFkYWJsZScsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0YXJ0IGtlZXBhbGl2ZSBqb2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdEZpbGVSZWNlaXZlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXN5bmNEZWxheSh0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXNzaW9uSm9iID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJrWW91U2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IGZpbGUgcmVjZWl2ZWQgKHVzZWQgdG8gZXhlY3V0ZSBldmVudCBmcm9tIGZpcnN0IGltYWdlIHRvIGN1cnJlbnQgcG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0RmlsZVJlY2VpdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgYWRzIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VBZFBvZHMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIERpc2FibGVkOiBObyBuZWVkIHRvIHVwZGF0ZSB0aGUgbm9uY2UsIG9ubHkgMSBub25jZSBwZXIgc2Vzc2lvbiBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWQgYnJlYWtzIGFmdGVyIHVwZGF0ZSAodG8gYmUgY29tcGFyZWQgd2l0aCBhZEJyZWFrc0JlZm9yZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtzQWZ0ZXJVcGRhdGUgPSB0aGlzLmJhc2VFdmVudHMuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnRyYWNrZXIgaW5zdGFuY2VvZiBBZEJyZWFrQmVnaW5UcmFja2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYWQgYnJlYWtzIGFyZSBkaWZmZXJlbnQsIGdlbmVyYXRlIGEgbmV3IG5vbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRCcmVha3NCZWZvcmVVcGRhdGUubGVuZ3RoICE9PSBhZEJyZWFrc0FmdGVyVXBkYXRlLmxlbmd0aCB8fCBEYXRlLm5vdygpIC0gdGhpcy5ub25jZURhdGUgPiBBZFRyYWNraW5nTWFuYWdlci5OT05DRV9FWFBJUkFUSU9OX1RJTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBub25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTm9uY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZEJyZWFrc0JlZm9yZVVwZGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrQmVmb3JlVXBkYXRlID0gYWRCcmVha3NCZWZvcmVVcGRhdGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtBZnRlclVwZGF0ZSA9IGFkQnJlYWtzQWZ0ZXJVcGRhdGVbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkQnJlYWtCZWZvcmVVcGRhdGUuYWRCcmVha0lkICE9PSBhZEJyZWFrQWZ0ZXJVcGRhdGUuYWRCcmVha0lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBub25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOb25jZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpcyBsaXZlLCByZXN0YXJ0IHVwZGF0ZSBCa1lvdSBkYXRhIGpvYlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBhIGtlZXBhbGl2ZSBqb2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXN5bmNEZWxheSh0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCa1lvdVNlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1N0b3BwaW5nIGFkIHRyYWNraW5nIGZpbGUgdXBkYXRlIChWT0Qgc3RyZWFtKS4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU3RvcHBpbmcgYWQgdHJhY2tpbmcgZmlsZSB1cGRhdGUgKHN0YXR1cyBjb2RlICcgKyByZXN1bHQuaHR0cFN0YXR1cyArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogdXBkYXRlTm9uY2UoKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGluZyBub25jZS4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgdGhpcy5ub25jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hZFBhbFNlc3Npb25SZXF1ZXN0ID0gdGhpcy5oYW5kbGVyLnNtYXJ0TGliLmludGVybmFsQWRNYW5hZ2VyLnJlcXVlc3RBZFBhbFNlc3Npb24oKTtcbiAgICB9Ki9cblxuICAgIC8qKlxuICAgICAqIEluIHNvbWUgY2FzZSwgdGhlIEJrWW91IHNlbmRzIGJhZCBkYXRhLCB0aGUgbWV0aG9kIGZpeCB0aGVtXG4gICAgICogQHBhcmFtIGFkQnJlYWsgYWQgYnJlYWsgdG8gZml4XG4gICAgICovXG4gICAgZml4QWRCcmVhayhhZEJyZWFrKSB7XG4gICAgICAgIC8vIFdvcmthcm91bmQgd2hlbiBCa1lvdSBpcyByZXR1cm5pbmcgYSBiYWQgYWQgc3RhcnQgcG9zaXRpb25cbiAgICAgICAgLy8gRml4IG5leHQgYWQgYW5kIGV2ZW50cyBwb3NpdGlvbnMgd2hlbiBuZXh0QWQgcG9zaXRpb24gaXMgaW5zaWRlIGN1cnJlbnQgYWRcbiAgICAgICAgbGV0IGxhc3RBZDtcbiAgICAgICAgYWRCcmVhay5hZHMuZm9yRWFjaCgoYWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0QWQgPSBhZEJyZWFrLmFkc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgaWYgKG5leHRBZCAhPT0gdW5kZWZpbmVkICYmIG5leHRBZC5wb3NpdGlvbiA8IGFkLnBvc2l0aW9uICsgYWQuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBuZXh0QWQucG9zaXRpb24gPSBhZC5wb3NpdGlvbiArIGFkLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIG5leHRBZC5ldmVudHMuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBvc2l0aW9uIDwgbmV4dEFkLnBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wb3NpdGlvbiA9IG5leHRBZC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3RBZCA9IGFkO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXb3JrYXJvdW5kIHdoZW4gQmtZb3UgaXMgbm90IGNhbGN1bGF0aW5nIHdlbGwgdGhlIGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICAgIC8vIFVwZGF0aW5nIGFkIGJyZWFrIGR1cmF0aW9uIGJlY2F1c2Ugb2YgQmtZb3UgcHJlY2lzaW9uIGVycm9yXG4gICAgICAgIGlmIChsYXN0QWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRCcmVhay5kdXJhdGlvbiA9IGxhc3RBZC5wb3NpdGlvbiArIGxhc3RBZC5kdXJhdGlvbiAtIGFkQnJlYWsucG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBCa1lvdSBKU09OXG4gICAgICogTWVyZ2UgdGhlIGN1cnJlbnQgYWREYXRhIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQmtZb3UgSlNPTlxuICAgICAqL1xuICAgIHBhcnNlQWRQb2RzKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblRva2VuID0gZGF0YVsnc2Vzc2lvbnRva2VuJ10gfHwgJyc7XG4gICAgICAgIGNvbnN0IHRpbWVSZWZlcmVuY2UgPSBkYXRhWyd0aW1lcmVmZXJlbmNlX21zJ10gfHwgMDtcblxuICAgICAgICAvLyBTZXQgcmVmcmVzaCBkZWxheSBpZiBkZWZpbmVkICgyIHRvIDUgc2VjcylcbiAgICAgICAgY29uc3QgcmVmcmVzaERlbGF5ID0gZGF0YVsncmVmcmVzaF9kZWxheV9tcyddIHx8IEFkVHJhY2tpbmdNYW5hZ2VyLlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMO1xuICAgICAgICBpZiAocmVmcmVzaERlbGF5ID49IDIwMDAgJiYgcmVmcmVzaERlbGF5IDw9IEFkVHJhY2tpbmdNYW5hZ2VyLlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCA9IHJlZnJlc2hEZWxheTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NldHRpbmcgcmVmcmVzaCBkZWxheSB0byAnICsgdGhpcy5zZXNzaW9uVXBkYXRlSW50ZXJ2YWwgKyAnbXMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NldHRpbmcgcmVmcmVzaCBkZWxheSB0byAnICsgQWRUcmFja2luZ01hbmFnZXIuU0VTU0lPTl9VUERBVEVfSU5URVJWQUwgKyAnbXMgKGRlZmF1bHQgdmFsdWUpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkRGF0YVRyYWNrZXIgPSBuZXcgQWREYXRhVHJhY2tlcih0aGlzLCBzZXNzaW9uVG9rZW4sIHRpbWVSZWZlcmVuY2UpO1xuICAgICAgICBjb25zdCBhZFBvZHMgPSBkYXRhWydhZHBvZHMnXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWRQb2RzKSkge1xuICAgICAgICAgICAgYWRQb2RzLmZvckVhY2goYWRQb2QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtJZCA9IGFkUG9kWydpZCddIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGFkUG9kWydzdGFydHRpbWVfbXMnXSArIHRpbWVSZWZlcmVuY2U7XG4gICAgICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gYWRQb2RbJ2R1cmF0aW9uX21zJ10gfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHMgPSBhZFBvZFsnYWRzJ107XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tlciA9IG5ldyBBZEJyZWFrVHJhY2tlcihhZERhdGFUcmFja2VyLCBhZEJyZWFrSWQsIHN0YXJ0VGltZSwgZHVyYXRpb24sIHRoaXMuaXNMaXZlKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgYWRzXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWRzKSkge1xuICAgICAgICAgICAgICAgICAgICBhZHMuZm9yRWFjaCgoYWQsIHNlcXVlbmNlTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIHJlbW92ZSB0ZXN0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGFkLmFkdmVyaWZpY2F0aW9ucyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlbmRvcic6ICdicm9hZHBlYWsudHYtb21pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2phdmFzY3JpcHRyZXNvdXJjZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlmcmFtZXdvcmsnOiAnb21pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnJvd3Nlcm9wdGlvbmFsJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL3ZlcmlmaWNhdGlvbi5jb20vb21pZF92ZXJpZmljYXRpb24uanMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2ZXJpZmljYXRpb25wYXJhbWV0ZXJzJzogJ3Bhcm0xPVhYJnBhcmFtMj1ZWVkmcGFyYW0zPVpaWidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWQudmlkZW9jbGlja3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrdGhyb3VnaHVybCc6ICdodHRwczovL2Jyb2FkcGVhay50dicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrdHJhY2tpbmcnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGlja3VybCc6ICdodHRwOlxcL1xcL3NtYXJ0bGliLmJyb2FkcGVhay50dlxcL2NsaWNrYWR0cmFja2luZzEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGlja3VybCc6ICdodHRwOlxcL1xcL3RyYWNraW5nLmJyb2FkcGVhay50dlxcL2NsaWNrYWR0cmFja2luZzInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXN0b21jbGljayc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrdXJsJzogJ2h0dHA6XFwvXFwvc21hcnRsaWIuYnJvYWRwZWFrLnR2XFwvY2xpY2thZHRyYWNraW5nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBhZFsnc2tpcHBhYmxlX21zJ10gPSBhZFsnc3RhcnR0aW1lX21zJ10gKyA1MDAwOyovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGFkWydzdGFydHRpbWVfbXMnXSArIHRpbWVSZWZlcmVuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGFkWydkdXJhdGlvbl9tcyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gYWRbJ3RyYWNraW5nZXZlbnRzJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFtTSU1JRC1QT0NdOiBwYXJzZSBub25MaW5lYXIgcHJvcGVydHkgZm9yIGludGVyYWN0aXZlIGFkc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uTGluZWFyID0gYWRbJ25vbkxpbmVhciddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgYWRkIGFkIHdpdGggdGltZV9tcyBlcXVhbCB0byAwLCBpdCBtZWFucyBpdCBpcyBub3QgZnVsbHkgcHJvY2VlZGVkIGJ5IHRoZSBCa1lvdVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWRBZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudHMpICYmIGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZEFkID0gKHN0YXJ0VGltZSA+IDAgJiYgZXZlbnRzWzBdWyd0aW1lX21zJ10gPiAwKSB8fCBzdGFydFRpbWUgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGFkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB1bmRlZmluZWQgJiYgZHVyYXRpb24gIT09IHVuZGVmaW5lZCAmJiBpc1ZhbGlkQWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBza2lwcGFibGVUaW1lID0gYWRbJ3NraXBwYWJsZV9tcyddICsgdGltZVJlZmVyZW5jZSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraXBwYWJsZSA9IHNraXBwYWJsZVRpbWUgIT09IDAgJiYgc2tpcHBhYmxlVGltZSAhPT0gdW5kZWZpbmVkICYmIHNraXBwYWJsZVRpbWUgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRpdmVJZCA9IGFkWydjcmVhdGl2ZWlkJ10gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRJZCA9IGFkWydhZGlkJ10gKyAnLScgKyBzdGFydFRpbWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IGFkLnZpZGVvY2xpY2tzPy5jbGlja3Rocm91Z2h1cmwgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrZXJzOiBhZC52aWRlb2NsaWNrcz8uY2xpY2t0cmFja2luZyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xpY2s6IGFkLnZpZGVvY2xpY2tzPy5jdXN0b21jbGljayB8fCBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRWZXJpZmljYXRpb25zID0gYWQuYWR2ZXJpZmljYXRpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJpZmljYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRWZXJpZmljYXRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZW5kb3I6IGVsZW1lbnQudmVuZG9yIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgamF2YXNjcmlwdFJlc291cmNlczogZWxlbWVudC5qYXZhc2NyaXB0cmVzb3VyY2VzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0YWJsZVJlc291cmNlczogZWxlbWVudC5leGVjdXRhYmxlcmVzb3VyY2VzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tpbmdFdmVudHM6IGVsZW1lbnQudHJhY2tpbmdldmVudHMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25QYXJhbWV0ZXJzOiBlbGVtZW50LnZlcmlmaWNhdGlvbnBhcmFtZXRlcnMgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFRyYWNrZXIgPSBuZXcgQWRUcmFja2VyKGFkQnJlYWtUcmFja2VyLCBzZXF1ZW5jZU51bWJlciwgc3RhcnRUaW1lLCBkdXJhdGlvbiwgc2tpcHBhYmxlLCBza2lwcGFibGVUaW1lLCBjcmVhdGl2ZUlkLCBhZElkLCBjbGlja2FibGUsIHZlcmlmaWNhdGlvbnMsIG5vbkxpbmVhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIuYWRzLnB1c2goYWRUcmFja2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGNhbGxiYWNrIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZXZlbnRbJ2NhbGxiYWNrdXJsJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBldmVudFsndHlwZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGV2ZW50WydvZmZzZXRfbXMnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gZXZlbnRbJ3RpbWVfbXMnXSArIHRpbWVSZWZlcmVuY2UgfHwgc3RhcnRUaW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRFdmVudFRyYWNrZXIgPSBuZXcgQWRFdmVudFRyYWNrZXIoYWRUcmFja2VyLCB0eXBlLCB1cmwsIG9mZnNldCwgdGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLmV2ZW50cy5wdXNoKGFkRXZlbnRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCBhZCBicmVhayB3aXRoIGFkc1xuICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrVHJhY2tlci5hZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZERhdGFUcmFja2VyLmFkQnJlYWtzLnB1c2goYWRCcmVha1RyYWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZERhdGFUcmFja2VyLmFkQnJlYWtzLmZvckVhY2goYWRCcmVhayA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXhBZEJyZWFrKGFkQnJlYWspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgYWxsIGV2ZW50cyB0byB0aGUgZGF0YWJhc2VcbiAgICAgICAgbGV0IGRhdGFVcGRhdGVkID0gdGhpcy5tZXJnZUV2ZW50cyhhZERhdGFUcmFja2VyKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhZCBsaXN0XG4gICAgICAgIHRoaXMuYWRMaXN0ID0gdGhpcy5hZERhdGEuYWRCcmVha3MubWFwKGFkQnJlYWsgPT4gYWRCcmVhay50b0RhdGEoKSk7XG5cbiAgICAgICAgLy8gU2VuZCBhZCBkYXRhIGV2ZW4gaWYgdGhlcmUgaXMgbm8gYWQgcG9kIChCa1lvdSBub3Qgc3VwcG9ydGluZyBiay1tbD0yLjApXG4gICAgICAgIHRoaXMubm90aWZ5QWREYXRhTGlzdGVuZXIoZGF0YVVwZGF0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSB1cGRhdGUgcG9zaXRpb24gam9iXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICdTdGFydGluZyBhZCB0cmFja2luZy4uLicpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9IEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hc3luY0RlbGF5KEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnb25Qb3NpdGlvblVwZGF0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCB0aGUgdXBkYXRlIHBvc2l0aW9uIGpvYlxuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBwYXVzZWQgKHBsYXllciBldmVudCknLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FuY2VsKHRoaXMudXBkYXRlUG9zaXRpb25Kb2IpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBjb250ZW50IGlzIGxpdmUgKG9wZW4gbWFuaWZlc3QpXG4gICAgICogQmVmb3JlIGZpcnN0IGltYWdlLCBjb25zaWRlciBhcyBWT0QgdG8gYWx3YXlzIGhhdmUgYW4gYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgKiBBZnRlciBmaXJzdCBpbWFnZSwgY29uc2lkZXIgdGhlIGFjdHVhbCBjb250ZW50IHR5cGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBpcyBsaXZlXG4gICAgICovXG4gICAgaXNMaXZlKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdEltYWdlRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldER1cmF0aW9uKCkgPD0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZSBuZXcgZXZlbnRzIHdpdGggY3VycmVudCBldmVudHNcbiAgICAgKlxuICAgICAqIEFuIGV4aXN0aW5nIGFkIGJyZWFrIGNhbiB1cGRhdGUgaXRzIGFkIGxpc3QsIGJ1dCBhbiBleGlzdGluZyBhZCBjYW5ub3QgYmUgcmVtb3ZlZCBvciB1cGRhdGVkXG4gICAgICogQWQgYnJlYWtzIGNhbiBiZSBhZGRlZCBkdXJpbmcgdGhlIHNlc3Npb25cbiAgICAgKiBJZiBhbiBhZCBicmVhayBkb2VzIG5vdCBhcHBlYXIgYW55bW9yZSBpbiB0aGUgQmt5b3UgZGF0YSwgaXQgaGFzIHRvIHN0YXkgaW4gbWVtb3J5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWREYXRhIG5ldyBkYXRhIHJlY2VpdmVkIGJ5IHRoZSBCa1lvdVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgbmV3IGRhdGEgc3RvcmVkIGluIG1lbW9yeVxuICAgICAqL1xuICAgIG1lcmdlRXZlbnRzKGFkRGF0YSkge1xuICAgICAgICBsZXQgZGF0YVVwZGF0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZXQgYWQgZGF0YSB0aGUgZmlyc3QgdGltZVxuICAgICAgICBpZiAodGhpcy5hZERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZERhdGEgPSBhZERhdGE7XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsIGFkRGF0YS5hZEJyZWFrcy5sZW5ndGggKyAnIGFkIGJyZWFrKHMpIHBhcnNlZCcsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIGRhdGFVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdBZENvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCBkZWxldGVkQWRDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBiYXNlIGFkIGRhdGFcbiAgICAgICAgICAgIHRoaXMuYWREYXRhLnNlc3Npb25Ub2tlbiA9IGFkRGF0YS5zZXNzaW9uVG9rZW47XG4gICAgICAgICAgICB0aGlzLmFkRGF0YS50aW1lUmVmZXJlbmNlID0gYWREYXRhLnRpbWVSZWZlcmVuY2U7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBleHBpcmVkIGFkIGJyZWFrc1xuICAgICAgICAgICAgY29uc3QgY3VycmVudElkcyA9IGFkRGF0YS5hZEJyZWFrcy5tYXAoYWRCcmVhayA9PiBhZEJyZWFrLmlkKTtcbiAgICAgICAgICAgIHRoaXMuYWREYXRhLmFkQnJlYWtzLmZvckVhY2goKGFkQnJlYWssIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFkIGJyZWFrIGZyb20gbWVtb3J5IG5vdCBwcmVzZW50IGluIHVwZGF0ZWQgZGF0YSBhbmQgbm90IHBsYXlpbmcgdGhlIGFkIGJyZWFrLCByZW1vdmUgaXRcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRJZHMuaW5jbHVkZXMoYWRCcmVhay5pZCkgJiYgdGhpcy5jdXJyZW50QWRUcmFja2VyPy5hZEJyZWFrLmlkICE9PSBhZEJyZWFrLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEFkQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhZCBicmVha3MgKGR1cmF0aW9uLCBhZHMgbGlzdClcbiAgICAgICAgICAgIGFkRGF0YS5hZEJyZWFrcy5mb3JFYWNoKChhZEJyZWFrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhZCBkYXRhIHBvaW50ZXJcbiAgICAgICAgICAgICAgICBhZEJyZWFrLmFkRGF0YSA9IHRoaXMuYWREYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkIGJyZWFrIGluIG1lbW9yeSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QWRCcmVhayA9IHRoaXMuYWREYXRhLmFkQnJlYWtzLmZpbmQoY3VycmVudEFkQnJlYWsgPT4gY3VycmVudEFkQnJlYWsuaWQgPT09IGFkQnJlYWsuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWRCcmVhayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB1bi1leGlzdGluZyBhZHMgb25seVxuICAgICAgICAgICAgICAgICAgICBhZEJyZWFrLmFkcy5maWx0ZXIoYWQgPT4gY3VycmVudEFkQnJlYWsuYWRzLmZpbmQoY3VycmVudEFkID0+IGN1cnJlbnRBZC5hZElkID09PSBhZC5hZElkKSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCB0aGUgYWQgYXQgdGhlIGNvcnJlY3QgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBjb21lIGNhc2UsIHRoZSBTTEFURSAoZW5kIG9mIHRoZSBhZCBicmVhaykgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBpbnNlcnRpbmcgaW50ZXJtZWRpYXRlIGFkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydEluZGV4ID0gY3VycmVudEFkQnJlYWsuYWRzLmZpbmRJbmRleChjdXJyZW50QWQgPT4gY3VycmVudEFkLnBvc2l0aW9uID4gYWQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFkQnJlYWsuYWRzLnB1c2goYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBZEJyZWFrLmFkcy5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBZENvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYWQgcG9zaXRpb25zIGFuZCBhZCBicmVhayBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGREdXJhdGlvbiA9IGN1cnJlbnRBZEJyZWFrLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeEFkQnJlYWsoY3VycmVudEFkQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGREdXJhdGlvbiAhPT0gY3VycmVudEFkQnJlYWsuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayAnICsgKGluZGV4ICsgMSkgKyAnLycgKyB0aGlzLmFkRGF0YS5hZEJyZWFrcy5sZW5ndGggKyAnOiB1cGRhdGVkIGR1cmF0aW9uIGZyb20gJyArIG9sZER1cmF0aW9uICsgJyB0byAnICsgY3VycmVudEFkQnJlYWsuZHVyYXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBhZCBicmVha1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkRGF0YS5hZEJyZWFrcy5wdXNoKGFkQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld0FkQ291bnQgKz0gYWRCcmVhay5hZHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgdGhpcy5hZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJyBhZCBicmVhayhzKSBpbiB0b3RhbCwgJyArIGFkRGF0YS5hZEJyZWFrcy5sZW5ndGggKyAnIGFkIGJyZWFrKHMpIHBhcnNlZCwgJyArIG5ld0FkQ291bnQgKyAnIG5ldyBhZChzKSwgJyArIFxuICAgICAgICAgICAgZGVsZXRlZEFkQ291bnQgKyAnIGRlbGV0ZWQgYWQocyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90aWZ5IGV2ZW50IGFycmF5IHVwZGF0ZWRcbiAgICAgICAgdGhpcy5ub3RpZnlBZHNVcGRhdGVkKHRoaXMuYWREYXRhKTtcblxuICAgICAgICAvLyBTdGFydCBpZiBuZWNlc3NhcnlcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCAmJiAhdGhpcy5wYXVzZWQgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBJZiB1cGRhdGUgcG9zaXRpb24gcHJvY2VzcyBzdG9wcGVkLCByZXNldCBsYXN0IHBvc2l0aW9uIHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWREYXRhLmhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uKSA+IDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgcmVzdW1lZCcsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXN1bWUgYXQgdGhlIGN1cnJlbnQgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzdGFydCB1cGRhdGUgcG9zaXRpb24gcHJvY2Vzc1xuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXJ0KCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGFkIGJyZWFrIGVuZGVkXG4gICAgICAgICAgICAvLyBPbmx5IGNoZWNrIGluIGNhc2Ugb2YgTElWRSwgZm9yIFZPRCBjb250ZW50cywgYWQgYnJlYWsgZW5kIGFscmVhZHkgdHJpZ2dlcmVkIHNpbmNlIGJyZWFrcyBhcmUgc3RhdGljXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBZEJyZWFrRW5kZWQocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFVcGRhdGVkO1xuICAgIH1cblxuICAgIG9uUG9zaXRpb25VcGRhdGVkKGN1cnJlbnRQb3NpdGlvbikge1xuICAgICAgICBsZXQgcG9zaXRpb25TdGFydCA9ICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gY3VycmVudFBvc2l0aW9uID8gdGhpcy5sYXN0UG9zaXRpb24gOiBjdXJyZW50UG9zaXRpb24gLSAxKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uRW5kID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZXZlbnRzIHdoZW4gcmVjZWl2aW5nIHRoZSBhZCB0cmFja2luZyBmaWxlIGFmdGVyIHRoZSBwbGF5YmFjayBzdGFydGVkXG4gICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVJlY2VpdmVkID09PSB0cnVlICYmIHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGFsbCBldmVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIGlmIHBsYXllciBzdGFydHMgdXAgdG8gMDA6MDA6MDQuMDAwXG4gICAgICAgICAgICAvLyBUaGUgQmtZb3UganNvbiBmaWxlIGlzIHJlY2VpdmVkIGFzeW5jaHJvbm91c2x5IGFmdGVyIGZpcnN0IGltYWdlXG4gICAgICAgICAgICBjb25zdCBzdGFydFByZWNpc2lvbiA9IDQwMDA7XG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRoaXMuZmlyc3RJbWFnZURhdGUgPD0gc3RhcnRQcmVjaXNpb24gJiYgcG9zaXRpb25FbmQgLSBwb3NpdGlvblN0YXJ0ID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICdCS1lPVSBTVEFSVCBQUkVDSVNJT04nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIGFsbCBldmVudHMgc2luY2UgZmlyc3QgaW1hZ2UuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBhZFxuICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGEuYWRCcmVha3MuZmluZChhZEJyZWFrID0+IHBvc2l0aW9uU3RhcnQgLSBzdGFydFByZWNpc2lvbiA8PSBhZEJyZWFrLnBvc2l0aW9uICYmIGFkQnJlYWsucG9zaXRpb24gPCBwb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZFRyYWNrZXIgPSBhZEJyZWFrVHJhY2tlcj8uYWRzLmZpbmQoYWQgPT4gcG9zaXRpb25TdGFydCAtIHN0YXJ0UHJlY2lzaW9uIDw9IGFkLnBvc2l0aW9uICYmIGFkLnBvc2l0aW9uIDwgcG9zaXRpb25TdGFydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZERhdGEgPSBhZFRyYWNrZXI/LnRvRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhID0gYWRCcmVha1RyYWNrZXI/LnRvRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBhbGwgZXZlbnQgZnJvbSB0aGUgYWQgcG9zaXRpb24gdG8gZW5kIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgYWRCcmVha1RyYWNrZXI/LnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgIGFkVHJhY2tlcj8ucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgYWRUcmFja2VyPy51cGRhdGVQcm9ncmVzc2lvbihhZFRyYWNrZXIucG9zaXRpb24sIHBvc2l0aW9uU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gRW50ZXJpbmcgYW4gYWRcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPSBhZFRyYWNrZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgPSBhZEJyZWFrVHJhY2tlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvblN0YXJ0IDwgcG9zaXRpb25FbmQgJiYgKHBvc2l0aW9uRW5kIC0gcG9zaXRpb25TdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBIC8qIDIgKiBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwqLykge1xuICAgICAgICAgICAgLy8gRGVidWcgKHRvIGNvbW1lbnQgYmVmb3JlIHJlbGVhc2UpXG4gICAgICAgICAgICAvKiBjb25zdCBkU3RhcnQgPSAocG9zaXRpb25TdGFydCArIDEpO1xuICAgICAgICAgICAgY29uc3QgZEVuZCA9IHBvc2l0aW9uRW5kO1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgdHJhY2tlcnMgZnJvbSAnICsgTWF0aC5mbG9vcihkU3RhcnQgLyAxMDAwKSArICcuJyArXG4gICAgICAgICAgICAgICAgKGRTdGFydCAtIE1hdGguZmxvb3IoZFN0YXJ0IC8gMTAwMCkgKiAxMDAwKSArICdzZWNzIHRvICcgKyBNYXRoLmZsb29yKGRFbmQgLyAxMDAwKSArICcuJyArXG4gICAgICAgICAgICAgICAgKGRFbmQgLSBNYXRoLmZsb29yKGRFbmQgLyAxMDAwKSAqIDEwMDApICsgJ21zJywgdGhpcy5oYW5kbGVyLmlkKTsqL1xuXG4gICAgICAgICAgICAvLyBBZCBicmVhayBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgYWRCcmVha1RyYWNrZXIgPSB0aGlzLmFkRGF0YT8uYWRCcmVha3MuZmluZChhZEJyZWFrID0+IGFkQnJlYWsucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgJiYgcG9zaXRpb25FbmQgPCBhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEFkIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBhZFRyYWNrZXIgPSBhZEJyZWFrVHJhY2tlcj8uYWRzLmZpbmQoYWQgPT4gYWQucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgJiYgcG9zaXRpb25FbmQgPCBhZC5wb3NpdGlvbiArIGFkLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gQ3VycmVudCBwb3NpdGlvbiBpbiBhbiBhZFxuICAgICAgICAgICAgaWYgKGFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gRW50ZXJpbmcgYW4gYWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0VudGVyaW5nIGFkICcgKyBhZFRyYWNrZXIuYWRJZCArICcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkIHNraXBwZWQsIGEgc2VlayBoYXBwZW5lZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2lwcGVkID0gcG9zaXRpb25TdGFydCAtIGFkVHJhY2tlci5wb3NpdGlvbiA+PSBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVudGVyaW5nIGFuIGFkLCBoYW5kbGUgcG9zaXRpb24gc3RhcnQgcHJlY2lzaW9uIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2tpcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1VwZGF0ZSBwb3NpdGlvbiBzdGFydCBmcm9tICcgKyBwb3NpdGlvblN0YXJ0ICsgJyB0byAnICsgYWRUcmFja2VyLnBvc2l0aW9uLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblN0YXJ0ID0gYWRUcmFja2VyLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NLSVBQRUQnLCBza2lwcGVkLCBwb3NpdGlvblN0YXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gYWRUcmFja2VyLnRvRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YSA9IGFkQnJlYWtUcmFja2VyLnRvRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICBhZFRyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihwb3NpdGlvblN0YXJ0LCBwb3NpdGlvbkVuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGFkIHNraXBwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5QWRTa2lwcGVkKHRoaXMuYWREYXRhLnNlc3Npb25Ub2tlbiwgYWRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyID09PSBhZFRyYWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIHNhbWUgYWRcbiAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciAhPT0gYWRUcmFja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIGFkXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdDaGFuZ2luZyBmcm9tIGFkICcgKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRJZCArICcgdG8gJyArIGFkVHJhY2tlci5hZElkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQSBzZWVrIGhhcHBlbmVkIGFuZCB0aGUgcG9zaXRpb24gaXMgaW4gYW5vdGhlciBhZCBicmVhaywgdGhlIHByb2dyZXNzaW9uIGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZCBpbiB0aGUgc2VlayBldmVudFxuICAgICAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIGhhbmRsZSBzZWVrIHBvc2l0aW9uIHByZWNpc2lvbiBlcnJvciBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZFRyYWNrZXIuYWRCcmVhay5pZCA9PT0gdGhpcy5jdXJyZW50QWRUcmFja2VyLmFkQnJlYWsuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihwb3NpdGlvblN0YXJ0LCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcHJldmlvdXMgYWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnByb2Nlc3NFbmQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBIHNlZWsgaGFwcGVuZWQgYW5kIHRoZSBwb3NpdGlvbiBpcyBpbiBhbm90aGVyIGFkIGJyZWFrIGJ1dCBzdGlsbCBpbiBhbiBhZFxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRUcmFja2VyLmFkQnJlYWsuaWQgIT09IHRoaXMuY3VycmVudEFkVHJhY2tlci5hZEJyZWFrLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRCcmVhay5wcm9jZXNzRW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gYWRUcmFja2VyLnRvRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha0RhdGEgPSBhZEJyZWFrVHJhY2tlci50b0RhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IGFkVHJhY2tlci50b0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGN1cnJlbnQgYWRcbiAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGNoYW5naW5nIGFkIGFmdGVyIGEgc2VlaywgYW5kIHRoZSBzZWVrIGVuZCBwb3NpdGlvbiBpcyBub3QgY2xvc2UgdG8gdGhlIGFkIHN0YXJ0IHBvc2l0aW9uLCBjb3VudCBpdCBhcyBza2lwcGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkVuZCAtIGFkVHJhY2tlci5wb3NpdGlvbiA+PSBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5QWRTa2lwcGVkKHRoaXMuYWREYXRhLnNlc3Npb25Ub2tlbiwgYWRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzZWVrIHBvc2l0aW9uIHByZWNpc2lvbiBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKGFkVHJhY2tlci5wb3NpdGlvbiwgcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyID0gYWRUcmFja2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyID0gYWRCcmVha1RyYWNrZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEV4aXRpbmcgYWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0V4aXRpbmcgYWQgJyArIHRoaXMuY3VycmVudEFkVHJhY2tlci5hZElkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgcHJvZ3Jlc3Npb24gPiAxMDAlXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkVuZCAtICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb24pIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkVuZCA9IHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiArIHRoaXMuY3VycmVudEFkVHJhY2tlci5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEEgc2VlayBoYXBwZW5lZCBhbmQgdGhlIHBvc2l0aW9uIGNvdWxkIG5vdCBiZSBpbiB0aGUgYWQsIHRoZSBwcm9ncmVzc2lvbiBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWQgaW4gdGhlIHNlZWsgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uU3RhcnQgPj0gdGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZXhpdGluZyBhZCBiZWZvcmUgdGhlIGVuZCwgY291bnQgaXQgYXMgc2tpcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyLnByb2dyZXNzaW9uIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3VycmVudEFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBlbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIExJVkUgY29udGVudHMsIHdlIG5lZWQgdGhlIHJlc3BvbnNlIGZyb20gdGhlIEJrWW91IGlmIHRoZSBhZCBicmVhayBpcyBhY3R1YWxseSBkb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHNvbWUgY2FzZXMsIHdlIHJlY2VpdmUgdXBkYXRlZCB0cmFja2VycyB0b28gbGF0ZSwgc28gd2UgbmVlZCB0byB3YWl0IG5ld2VyIGRhdGEgYmVmb3JlIGFjdHVhbGx5IGNsb3NpbmcgdGhlIGFkXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBWT0QgY29udGVudHMsIGVuZCB0aGUgYnJlYWsgbm93XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrVHJhY2tlciA9PT0gdW5kZWZpbmVkICYmICF0aGlzLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXRpbmcgdGhlIGFkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gS2VlcCBsYXN0IHBvc2l0aW9uIGZvciBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgICAgICAgIC8vIElmIGV2ZW50cyByZW1haW5pbmcsIGNvbnRpbnVlIHRoZSB0cmFja2luZ1xuICAgICAgICAgICAgaWYgKHRoaXMuYWREYXRhPy5oYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbkVuZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkICYmICF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHBhdXNlZCAocGxheWJhY2sgcGF1c2VkLCBvblBvc2l0aW9uVXBkYXRlZCknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHBhdXNlZCAobm8gbW9yZSBldmVudCwgb25Qb3NpdGlvblVwZGF0ZWQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIHRyYWNrZXJzIGZyb20gJyArIHBvc2l0aW9uU3RhcnQgKyAnbXMgdG8gJyArIHBvc2l0aW9uRW5kICsgJ21zLCByZXN1bWluZyB0cmFja2luZy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZERhdGE/Lmhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uRW5kKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1N0YXJ0KHBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpIHtcbiAgICAgICAgLy8gSWYgZXZlbnRzIHJlbWFpbmluZywgY29udGludWUgdGhlIHRyYWNraW5nXG4gICAgICAgIGlmICh0aGlzLmFkRGF0YT8uaGFzUmVtYWluaW5nQWRCcmVha3MocG9zaXRpb24pID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgcGF1c2VkIChubyBtb3JlIGV2ZW50LCBjaGVja1N0YXJ0KScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0FkQnJlYWtFbmRlZChwb3NpdGlvbikge1xuICAgICAgICBsZXQgcG9zaXRpb25TdGFydCA9ICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcG9zaXRpb24gPyB0aGlzLmxhc3RQb3NpdGlvbiA6IHBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGxldCBwb3NpdGlvbkVuZCA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChwb3NpdGlvblN0YXJ0IDwgcG9zaXRpb25FbmQgJiYgKHBvc2l0aW9uRW5kIC0gcG9zaXRpb25TdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBIC8qIDIgKiBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwqLykge1xuICAgICAgICAgICAgLy8gQWQgYnJlYWsgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGE/LmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIHBvc2l0aW9uRW5kIDwgYWRCcmVhay5wb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrVHJhY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIgIT09IHVuZGVmaW5lZCAmJiAodGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uIC0gcG9zaXRpb25FbmQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiwgdGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha0RhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIGVuZCBkZXRlY3RlZCcsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIG5vdCB5ZXQgZW5kZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkVXNlckludGVyYWN0aW9uKGludGVyYWN0aW9uVHlwZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXI/LmNsaWNrYWJsZT8udHJhY2tlcnMuZm9yRWFjaCh0cmFja2VyID0+IHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXF1ZXN0aW5nIGNsaWNrIHRyYWNrZXIgJyArIHRyYWNrZXIuY2xpY2t1cmwsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkRXZlbnQodGhpcy5oYW5kbGVyLCB0cmFja2VyLmNsaWNrdXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudEFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50QWREYXRhO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRBZEJyZWFrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50QWRCcmVha0RhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiB0aGUgY29udGVudCB3aXRob3V0IGFkc1xuICAgICAqIFRoaXMgcG9zaXRpb24gY2FuIGJlIHNhdmVkIHRvIGJlIHJlc3RvcmVkIGxhdGVyIHRocm91Z2ggZ2V0UG9zaXRpb25Gb3JQbGF5YmFjayhwb3NpdGlvbkluQm9va21hcmspXG4gICAgICogRm9yIFZPRCBjb250ZW50cyBvbmx5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBQb3NpdGlvbiBpbiB0aGUgY29udGVudCB3aXRob3V0IGFkc1xuICAgICAqL1xuICAgIGdldFBvc2l0aW9uRm9yQm9va21hcmsoKSB7XG4gICAgICAgIC8vIElmIHZvZCBjb250ZW50IChpLmUgZHVyYXRpb24gPiAwKVxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXREdXJhdGlvbigpO1xuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgcG9zaXRpb24gaXMgaW4gYW4gYWQgYnJlYWssIHNldCBib29rbWFyayBwb3NpdGlvbiB0byB0aGUgYWQgYnJlYWsgc3RhcnQgcG9zaXRpb24gKGxhc3QgcmlnaHQgcG9zaXRpb24gYmVmb3JlIHRoZSBhZClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBZEJyZWFrID0gdGhpcy5hZExpc3QuZmluZChhZEJyZWFrID0+IGFkQnJlYWsuc3RhcnRQb3NpdGlvbiA8IHBvc2l0aW9uICYmIHBvc2l0aW9uIDw9IGFkQnJlYWsuc3RhcnRQb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBZEJyZWFrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGN1cnJlbnRBZEJyZWFrLnN0YXJ0UG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGFkIGJlZm9yZSB0aGUgY3VycmVudCBwb3NpdGlvbiwgc3Vic3RyYXRlIHRoZSBib29rbWFyayBwb3NpdGlvbiBieSB0aGUgYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgICAgICAgIHRoaXMuYWRMaXN0LmZpbHRlcihhZEJyZWFrID0+IGFkQnJlYWsuc3RhcnRQb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24gPCBwb3NpdGlvbilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChhZEJyZWFrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gLT0gYWRCcmVhay5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgcG9zaXRpb24gZm9sbG93aW5nIGN1cnJlbnQgYWRzIHdpdGggdGhlIHBvc2l0aW9uIGluIHRoZSBjb250ZW50IHdpdGhvdXQgYWRzXG4gICAgICogQ2FuIGJlIGNhbGxlZCBhZnRlciBvciBpbnNpZGUgb25BZERhdGFcbiAgICAgKiBGb3IgVk9EIGNvbnRlbnRzIG9ubHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb3NpdGlvbkluQm9va21hcmsgcG9zaXRpb24gaW4gdGhlIGNvbnRlbnQgd2l0aG91dCBhZCAod2l0aCB0aGUgc3RvcmVkIHZhbHVlIGdvdCBmcm9tIHRoZSBtZXRob2QgZ2V0UG9zaXRpb25Gb3JCb29rbWFyaygpKVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFBvc2l0aW9uIGZvbGxvd2luZyBjdXJyZW50IGFkc1xuICAgICAqL1xuICAgIGdldFBvc2l0aW9uRm9yUGxheWJhY2socG9zaXRpb25JbkJvb2ttYXJrKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uSW5Cb29rbWFyaztcblxuICAgICAgICAvLyBTb3J0IGFkIGJyZWFrIGJ5IHN0YXJ0UG9zaXRpb25cbiAgICAgICAgY29uc3QgYWRMaXN0ID0gdGhpcy5hZExpc3Quc29ydCgoYSwgYikgPT4gYS5zdGFydFBvc2l0aW9uIC0gYi5zdGFydFBvc2l0aW9uKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYWRCcmVhayA9IGFkTGlzdFtpXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgYWQgYnJlYWsgaXMgYWZ0ZXIgdGhlIHBvc2l0aW9uLCB0aGUgY2FsY3VsYXRpb24gaXMgZG9uZVxuICAgICAgICAgICAgaWYgKGFkQnJlYWsuc3RhcnRQb3NpdGlvbiA+IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uIDwgcG9zaXRpb24gfHwgKGFkQnJlYWsuc3RhcnRQb3NpdGlvbiA8PSBwb3NpdGlvbiAmJiBwb3NpdGlvbiA8PSBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGFkIGJyZWFrIGlzIGJlZm9yZSB0aGUgcG9zaXRpb24sIGFkZCB0aGUgYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcG9zaXRpb24gaXMgd2l0aGluIHRoZSBjdXJyZW50IGFkIGJyZWFrLCBzZXQgdGhlIHBvc2l0aW9uIHJpZ2h0IGFmdGVyIHRoZSBhZCBicmVha1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IGFkQnJlYWsuZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgb25GaXJzdEltYWdlKGJpdHJhdGUsIHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgLy8gSW5pdCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2VEYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgZW5hYmxlZCAobGl2ZTonICsgdGhpcy5pc0xpdmUoKSArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBXb3JrYXJvdW5kIGJlY2F1c2UgQmtZb3Ugbm90IHJldHVybmluZyB2b2QvbGl2ZSBpbiB0cmFja2luZ1xuICAgICAgICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgdHJhY2tpbmcgZmlsZSBiZWZvcmUgb3BlbmluZyB0aGUgbWFuaWZlc3QgKGJrLW1sPTIuMCB3b3JrZmxvdyksIHdlIGRvbid0IGtub3cgaWYgdGhlIGNvbnRlbnQgaXMgbGl2ZSBvciB2b2RcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBsaXZlLCBhZCBicmVhayBkdXJhdGlvbiBpcyAtMVxuICAgICAgICBpZiAodGhpcy5hZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZExpc3QgPSB0aGlzLmFkRGF0YS5hZEJyZWFrcy5tYXAoYWRCcmVhayA9PiB7XG4gICAgICAgICAgICAgICAgYWRCcmVhay5saXZlID0gdGhpcy5pc0xpdmUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhZEJyZWFrLnRvRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdGhpcy5jaGVja1N0YXJ0KHN0YXJ0UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBCa1lvdSBzZXNzaW9uXG4gICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG5cbiAgICAgICAgLy8gU2hvdyBlcnJvciBpZiB0aGUgY29udGVudCBpcyBMSVZFIGJ1dCB0aGUgZHVyYXRpb24gaXMgbm90IGEgdGltZXN0YW1wXG4gICAgICAgIGlmICh0aGlzLmlzTGl2ZSgpICYmIHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpIDwgMTI2MjMwMDQwMDAwMCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1RoZSBwbGF5ZXIgcG9zaXRpb24gZG9lcyBub3QgcmV0dXJuIGEgcG9zaXRpb24gYXMgYSB0aW1lc3RhbXAgaW4gbWlsbGlzLiBUaGUgYWQgdHJhY2tpbmcgbWlnaHQgbm90IHdvcmsuJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbmQgR29vZ2xlIFBBSyBwbGF5YmFjayBlbmQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5hZFBhbFNlc3Npb24/LnNlbmRQbGF5YmFja1N0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25QYXVzZSgpIHtcbiAgICAgICAgLy8gU3RvcCB0cmFja2luZ1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZXZlbnQgYXQgdGhlIHBhdXNlZCBwb3NpdGlvblxuICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gIT09IHBsYXllclBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHBsYXllclBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJZ25vcmluZyBwbGF5ZXIgcG9zaXRpb24gJyArIHBsYXllclBvc2l0aW9uICsgJywgYWxyZWFkeSBwcm9jZWVkZWQuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVQYXVzZSA9IHRoaXMubGFzdFBvc2l0aW9uOyAvLyBpZiBwbGF5aW5nID9cbiAgICB9XG5cbiAgICBvblJlc3VtZSgpIHtcbiAgICAgICAgLy8gU3RhcnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBiYWQgcG9zaXRpb24gd2hlbiByZXN1bWluZ1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdFBvc2l0aW9uIC0gdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVQYXVzZSkgPCAxMDAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JldmVydGluZyBwb3NpdGlvbiBiZWNhdXNlIG9mIGJhZCBwb3NpdGlvbiB3aGVuIHJlc3VtaW5nLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVQYXVzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZ1N0YXJ0KCkge1xuICAgICAgICAvLyBTdG9wIHRyYWNraW5nXG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgYnVmZmVyaW5nIHBvc2l0aW9uXG4gICAgICAgIGNvbnN0IHBsYXllclBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcGxheWVyUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocGxheWVyUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0lnbm9yaW5nIHBsYXllciBwb3NpdGlvbiAnICsgcGxheWVyUG9zaXRpb24gKyAnLCBhbHJlYWR5IHByb2NlZWRlZC4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uO1xuICAgIH1cblxuICAgIG9uQnVmZmVyaW5nRW5kKHBsYXlpbmcpIHtcbiAgICAgICAgLy8gU3RhcnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgcGxheWVyIGlzIHVwZGF0aW5nIGl0cyBwb3NpdGlvbiBhdCBidWZmZXJpbmcgZW5kIChwZXJpb2Qgc3dpdGNoKVxuICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcGxheWVyUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUG9zaXRpb24gdXBkYXRlZCBkdXJpbmcgYnVmZmVyaW5nLCBwZXJpb2Qgc3dpdGNoID8nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocGxheWVyUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGUgcG9zaXRpb24gc2VlayBiZXR3ZWVuIDIgcGVyaW9kcyAoaGFwcGVucyBvbiBzb21lIHBsYXllcnMpXG4gICAgICAgICAgICAvKiBpZiAoTWF0aC5hYnModGhpcy5sYXN0UG9zaXRpb24gLSB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZUJ1ZmZlcmluZykgPCAxMDAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JldmVydGluZyBwb3NpdGlvbiBiZWNhdXNlIG9mIHBlcmlvZCBzd2l0Y2guLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZUJ1ZmZlcmluZztcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZUJ1ZmZlcmluZyA9IDA7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgLy8gSGFuZGxlIGJhZCBwb3NpdGlvbiBhZnRlciBzZWVrIChoYXBwZW5zIG9uIHNvbWUgcGxheWVycylcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3RQb3NpdGlvbiAtIHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrKSA8IDEwMDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmV2ZXJ0aW5nIHBvc2l0aW9uIGJlY2F1c2Ugb2Ygc2Vlay4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNlZWsoc3RhcnQsIGVuZCkge1xuICAgICAgICAvLyBEb24ndCByZW1lbWJlciB3aGF0IHRoaXMgaXMgZG9pbmcuLi5cbiAgICAgICAgLy8gICBJZiBidWZmZXJpbmcsIHVzZSBwb3NpdGlvbiBmcm9tIGJ1ZmZlcmluZyBzdGFydCBpbnN0ZWFkIG9mIHNlZWsgc3RhcnQgKGZpeCBhIHBsYXllciBiZWhhdmlvcilcbiAgICAgICAgLy8gICBJZiBub3QgYnVmZmVyaW5nLCB0aGlzIGNvbmRpdGlvbiB3aWxsIG5ldmVyIGJlIHRydWUgSSBndWVzcyBzaW5jZSBsYXN0UG9zaXRpb24gaXMgdXBkYXRlIGV2ZXJ5IHNlY29uZFxuICAgICAgICBpZiAoc3RhcnQgPCB0aGlzLmxhc3RQb3NpdGlvbiAmJiB0aGlzLmxhc3RQb3NpdGlvbiAtIHN0YXJ0IDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1VwZGF0aW5nIHNlZWsgc3RhcnQgcG9zaXRpb24gZnJvbSAnICsgc3RhcnQgKyAnIHRvICcgKyB0aGlzLmxhc3RQb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5sYXN0UG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFzdFBvc2l0aW9uO1xuICAgICAgICBpZiAodGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBiYWQgcG9zaXRpb24gd2hlbiBzZWVraW5nIHdoZW4gb25CdWZmZXJpbmdFbmQgaXMgY2FsbGVkXG4gICAgICAgICAgICAvLyBXaGVuIGJ1ZmZlcmluZyBlbmQsIHNldCB0aGlzLmxhc3RQb3NpdGlvbiB0byB0aGUgZW5kIHNlZWsgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrID0gZW5kO1xuXG4gICAgICAgICAgICAvLyBTZXR0aW5nIHRvIGJ1ZmZlcmluZyBzdGFydCwgbGFzdCBwb3NpdGlvbiBpcyB1cGRhdGVkIGluIHN0YXJ0IGJ1ZmZlcmluZyBldmVudFxuICAgICAgICAgICAgbGFzdFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBub3QgYnVmZmVyaW5nLCBwcm9jZXNzIGV2ZW50cyBiZWZvcmUgc2Vla2luZ1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdFBvc2l0aW9uIC0gc3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQoc3RhcnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gc3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgdG8gc3RhcnQgYmVjYXVzZSBpZiB1cGRhdGUgcHJvY2VzcyBpcyBub3QgcnVubmluZywgbGFzdCBwb3NpdGlvbiBjYW4gYmUgd2F5IGJhY2sgaW4gdGhlIHBhc3RcbiAgICAgICAgICAgIC8vIEZvciBpbnN0YW5jZSBzZWVrIHRvIGEgYnVmZmVyZWQgcG9zaXRpb25cbiAgICAgICAgICAgIGxhc3RQb3NpdGlvbiA9IHN0YXJ0O1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlayA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdHJhY2tpbmcgcG9zaXRpb25cbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBlbmQ7XG5cbiAgICAgICAgLy8gSGFuZGxlIHNlZWsgZHVyaW5nIHBlcmlvZCBzd2l0Y2gsIHRoZSBwbGF5ZXIgY2FuIGdlbmVyYXRlIHNtYWxsIHNlZWsgKDwgNiBzZWNzKSBhbmQgaXQgaGFzIHRvIGJlIGlnbm9yZWQgYW5kIG5vdCBjb3VudGVkIGFzIGEgdXNlciBzZWVrXG4gICAgICAgIGlmIChNYXRoLmFicyhlbmQgLSBzdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2VlayBkZXRlY3RlZCwgcHJvY2VlZGluZyBldmVudHMuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAvLyBJZ25vcmUgc2VlayBiYWNrd2FyZCBpZiA8IDIgc2Vjb25kcyAocGVyaW9kIHN3aXRjaCBlcnJvcilcbiAgICAgICAgICAgIGlmIChlbmQgPCBzdGFydCAmJiBzdGFydCAtIGVuZCA8IDIwMDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3Jpbmcgc2Vlay4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBzdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCBwb3NpdGlvbnNcbiAgICAgICAgICAgIGxldCBzdGFydFNlZWtQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBlbmRTZWVrUG9zaXRpb247XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHsgLy8gc2VlayBmb3J3YXJkXG4gICAgICAgICAgICAgICAgc3RhcnRTZWVrUG9zaXRpb24gPSBsYXN0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgZW5kU2Vla1Bvc2l0aW9uID0gZW5kO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gc2VlayBiYWNrd2FyZFxuICAgICAgICAgICAgICAgIHN0YXJ0U2Vla1Bvc2l0aW9uID0gZW5kO1xuICAgICAgICAgICAgICAgIGVuZFNlZWtQb3NpdGlvbiA9IChsYXN0UG9zaXRpb24gPCBzdGFydCA/IHN0YXJ0IDogbGFzdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2VlayBiYWNrd2FyZCB3aGlsZSBub3QgcGxheWluZyBhbiBhZCwgZG8gbm90IHByb2Nlc3MgYWxsIHRyYWNrZXJzIGZyb20gZW5kIHRvIHN0YXJ0XG4gICAgICAgICAgICAvLyBCZWNhdXNlIHRoZSB3aG9sZSBhZCB3aWxsIGJlIHByb2NlZWRlZFxuICAgICAgICAgICAgaWYgKGVuZCAtIHN0YXJ0IDwgMC8qICYmIHRoaXMuY3VycmVudEFkVHJhY2tlciA9PT0gdW5kZWZpbmVkKi8pIHtcbiAgICAgICAgICAgICAgICBlbmRTZWVrUG9zaXRpb24gPSBlbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3MgYWxsIGV2ZW50cyBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmRcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydFNlZWtQb3NpdGlvbjsgaSA8PSBlbmRTZWVrUG9zaXRpb247IGkgKz0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXRoLm1pbihpICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMLCBlbmRTZWVrUG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0JldHdlZW4gJyArIGkgKyAnIGFuZCAnICsgcG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2VlayBwcm9jZXNzZWQgc3RhcnQ6JyArIHN0YXJ0U2Vla1Bvc2l0aW9uICsgJyBlbmQ6JyArIGVuZFNlZWtQb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgaWYgKGVuZCAtIHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXNldCBhZCB0cmFja2VycyB3aXRoIHBvc2l0aW9uICcgKyBlbmRTZWVrUG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZERhdGE/LnJlc2V0UHJvZ3Jlc3Npb24oZW5kU2Vla1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VlayBmcm9tIGluc2lkZSB0byBpbnNpZGUgYW4gYWQgYnJlYWtcbiAgICAgICAgY29uc3QgcHJldmlvdXNBZFRyYWNrZXIgPSB0aGlzLmN1cnJlbnRBZFRyYWNrZXI7XG4gICAgICAgIGlmIChwcmV2aW91c0FkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3VycmVudEFkVHJhY2tlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBzZWVrZWQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChlbmQpO1xuXG4gICAgICAgIC8vIFJlc2V0IHByb2dyZXNzaW9uXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXNldCBhZCB0cmFja2VycyB3aXRoIHBvc2l0aW9uICcgKyBlbmQsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIHRoaXMuYWREYXRhPy5yZXNldFByb2dyZXNzaW9uKGVuZCk7XG4gICAgfVxuXG4gICAgb25TdG9wKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgLy8gU3RvcCB0cmFja2luZ1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBzdG9wIHBvc2l0aW9uXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQodGhpcy5sYXN0UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIFN0b3AgYWQgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gU3RvcCBzZXNzaW9uIHVwZGF0ZVxuICAgICAgICBpZiAodGhpcy51cGRhdGVTZXNzaW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVTZXNzaW9uSm9iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbmQgR29vZ2xlIFBBSyBwbGF5YmFjayBlbmQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5hZFBhbFNlc3Npb24/LnNlbmRQbGF5YmFja0VuZCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmxpc3RlbmVycy5pbmNsdWRlcyhsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlFdmVudChsaXN0ZW5lciwgZXZlbnROYW1lLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnROYW1lXShhcmcxLCBhcmcyLCBhcmczLCBhcmc0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUFkQnJlYWtEYXRhKGFkQnJlYWtEYXRhKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRCcmVha0RhdGEnLCBhZEJyZWFrRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkQnJlYWtCZWdpbihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZEJyZWFrQmVnaW4nLCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZERhdGEoYWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZERhdGEnLCBhZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkQmVnaW4oc2Vzc2lvblRva2VuLCBhZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkQmVnaW4nLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZW5kIEdvb2dsZSBQQUsgYWQgaW1wcmVzc2lvbiBjYWxsYmFja1xuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvbj8uc2VuZEFkSW1wcmVzc2lvbigpO1xuICAgIH1cblxuICAgIG5vdGlmeUFkU2tpcHBhYmxlKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkU2tpcHBhYmxlJywgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRQcm9ncmVzcyhzZXNzaW9uVG9rZW4sIGFkLCBwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkUHJvZ3Jlc3MnLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQsIHByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRTa2lwcGVkKHNlc3Npb25Ub2tlbiwgYWQpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJTa2lwcGVkQWRJZHMgPSBbXTtcbiAgICAgICAgYWQuYWRCcmVhay5hZHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG90aGVyIGFkcyB3ZXJlIHNraXBwZWQgZm9sbG93aW5nIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICAgICAgaWYgKGUucG9zaXRpb24gPiBhZC5wb3NpdGlvbiAmJiBlLnBvc2l0aW9uIDwgdGhpcy5sYXN0UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBvdGhlclNraXBwZWRBZElkcy5wdXNoKGUuYWRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRTa2lwcGVkJywgc2Vzc2lvblRva2VuLCBhZC5jcmVhdGl2ZUlkLCBhZC5hZElkLCBvdGhlclNraXBwZWRBZElkcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkRW5kKHNlc3Npb25Ub2tlbiwgYWQpIHtcbiAgICAgICAgLy8gRm9yY2Ugc2Vzc2lvbiB1cGRhdGUgYXQgYWQgZW5kICh1c2VmdWwgZm9yIHNtYWxsIHNlZ21lbnQgY29udGVudHMpXG4gICAgICAgIGlmICh0aGlzLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVTZXNzaW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FuY2VsKHRoaXMudXBkYXRlU2Vzc2lvbkpvYik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkRW5kJywgc2Vzc2lvblRva2VuLCBhZC5jcmVhdGl2ZUlkLCBhZC5hZElkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRCcmVha0VuZChzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZEJyZWFrRW5kJywgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRzVXBkYXRlZChhZERhdGEpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZHNVcGRhdGVkJywgYWREYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBldmVudCBvbkFkRGF0YSByZWdpc3RlcmVkIHRocm91Z2ggc2Vzc2lvbi5zZXRBZERhdGFMaXN0ZW5lciguLi4pXG4gICAgICogSWYgZGF0YSBhcmUgYWxyZWFkeSBzZW50LCBkbyBub3Qgc2VuZCBpdCB0d2ljZVxuICAgICAqL1xuICAgIG5vdGlmeUFkRGF0YUxpc3RlbmVyKGRhdGFVcGRhdGVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0SW1hZ2VEYXRlID0gdGhpcy5maXJzdEltYWdlRGF0ZSB8fCBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBmaXJzdERhdGEgPSB0aGlzLnBvZHNTZW50TnVtYmVyID09PSAwICYmIHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSAmJiBEYXRlLm5vdygpIC0gZmlyc3RJbWFnZURhdGUgPD0gNDAwMDtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ09uIGFkIGRhdGEgKGZpcnN0RGF0YTogJyArIGZpcnN0RGF0YSArICcsIGRhdGFVcGRhdGVkOiAnICsgZGF0YVVwZGF0ZWQgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgaWYgKGZpcnN0RGF0YSA9PT0gdHJ1ZSB8fCBkYXRhVXBkYXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5wb2RzU2VudE51bWJlciA9IHRoaXMuYWRMaXN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ09uIGFkIGRhdGEgKGxlbmd0aDogJyArIHRoaXMucG9kc1NlbnROdW1iZXIgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuYWRTZXNzaW9uPy5hZERhdGFMaXN0ZW5lcj8ub25BZERhdGEodGhpcy5hZExpc3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXJ9IGZyb20gJy4vYWQvbWV0cmljcy9BZE1ldHJpY3MnO1xuaW1wb3J0IEFkTWV0cmljc01hbmFnZXIgZnJvbSAnLi9hZC9tZXRyaWNzL0FkTWV0cmljc01hbmFnZXInO1xuaW1wb3J0IEFkVHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4vYWQvdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IHsgQWREYXRhVHJhY2tlciwgQWRCcmVha1RyYWNrZXIsIEFkVHJhY2tlciwgQWRFdmVudFRyYWNrZXIgfSBmcm9tICcuL2FkL3RyYWNraW5nL0FkVHJhY2tlcic7XG5pbXBvcnQge0FkTWFuYWdlciwgQWRWaWV3U3RhdGUsIEFkRnJpZW5kbHlPYnN0cnVjdGlvblB1cnBvc2V9IGZyb20gJy4vYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7QWRTZXNzaW9ufSBmcm9tICcuL2FkL0FkU2Vzc2lvbic7XG5pbXBvcnQgSW50ZXJuYWxBZE1hbmFnZXIgZnJvbSAnLi9hZC9JbnRlcm5hbEFkTWFuYWdlcic7XG5pbXBvcnQgT01TREtNYW5hZ2VyIGZyb20gJy4vcGx1Z2lucy9vbXNkay9PTVNES01hbmFnZXInO1xuaW1wb3J0IE9NU2Vzc2lvbkhhbmRsZXIgZnJvbSAnLi9wbHVnaW5zL29tc2RrL09NU2Vzc2lvbkhhbmRsZXInO1xuXG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi9TbWFydExpYic7XG5TbWFydExpYi5hZE1vZHVsZSA9IHtcbiAgICBBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXIsXG4gICAgQWRNZXRyaWNzTWFuYWdlcixcbiAgICBBZFRyYWNraW5nTWFuYWdlcixcbiAgICBBZERhdGFUcmFja2VyLCBBZEJyZWFrVHJhY2tlciwgQWRUcmFja2VyLCBBZEV2ZW50VHJhY2tlcixcbiAgICBBZE1hbmFnZXIsIEFkVmlld1N0YXRlLCBBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlLFxuICAgIEFkU2Vzc2lvbixcbiAgICBJbnRlcm5hbEFkTWFuYWdlcixcbiAgICBPTVNES01hbmFnZXIsIE9NU2Vzc2lvbkhhbmRsZXJcbn07XG5cbmV4cG9ydCB7XG4gICAgQWRNZXRyaWNzLCBBZE1ldHJpY3NCdWlsZGVyLFxuICAgIEFkTWV0cmljc01hbmFnZXIsXG4gICAgQWRUcmFja2luZ01hbmFnZXIsXG4gICAgQWREYXRhVHJhY2tlciwgQWRCcmVha1RyYWNrZXIsIEFkVHJhY2tlciwgQWRFdmVudFRyYWNrZXIsXG4gICAgQWRNYW5hZ2VyLCBBZFZpZXdTdGF0ZSwgQWRGcmllbmRseU9ic3RydWN0aW9uUHVycG9zZSxcbiAgICBBZFNlc3Npb24sXG4gICAgSW50ZXJuYWxBZE1hbmFnZXIsXG4gICAgT01TREtNYW5hZ2VyLCBPTVNlc3Npb25IYW5kbGVyXG59O1xuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa09NU0RLTWdyJztcblxuY2xhc3MgT01TREtIYW5kbGVyIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNyZWF0ZU9NQWRTZXNzaW9uKHBhcnRuZXJOYW1lLCBwYXJ0bmVyVmVyc2lvbiwgY3VzdG9tUmVmZXJlbmNlRGF0YSwgdmVyaWZpY2F0aW9uRGF0YSkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPTVNES01hbmFnZXIge1xuICAgIHN0YXRpYyAjaW5zdGFuY2U7XG5cbiAgICBzbWFydExpYjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFPTVNES01hbmFnZXIuI2luc3RhbmNlKSB7XG4gICAgICAgICAgICBPTVNES01hbmFnZXIuI2luc3RhbmNlID0gbmV3IE9NU0RLTWFuYWdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9NU0RLTWFuYWdlci4jaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICAvKiBpbml0KHNtYXJ0TGliKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJbml0aWFsaXppbmcgT00gU0RLIG1hbmFnZXIuLi4nKTtcblxuICAgICAgICB0aGlzLnNtYXJ0TGliID0gc21hcnRMaWI7XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcblxuICAgIH0qL1xuICAgIGluaXQoKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJbml0aWFsaXppbmcgT00gU0RLIG1hbmFnZXIuLi4nKTtcbiAgICB9XG5cbiAgICByZWxlYXNlKCkge1xuXG4gICAgfVxuXG4gICAgYXR0YWNoSW5zdGFuY2Uoc21hcnRMaWIpIHtcbiAgICAgICAgdGhpcy5zbWFydExpYiA9IHNtYXJ0TGliO1xuICAgIH1cblxuICAgIGF0dGFjaEhhbmRsZXIob21zZGtIYW5kbGVyKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBdHRhY2hpbmcgT00gU0RLIGhhbmRsZXIuLi4nKTtcblxuICAgICAgICB0aGlzLm9tc2RrSGFuZGxlciA9IG9tc2RrSGFuZGxlcjtcbiAgICB9XG5cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9tc2RrSGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMub21zZGtIYW5kbGVyICE9PSBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgT01TREtNYW5hZ2VyIGZyb20gJy4vT01TREtNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa09NU2Vzc2lvbkhhbmRsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPTVNlc3Npb25IYW5kbGVyIHtcbiAgICBoYW5kbGVyO1xuXG4gICAgYWRTZXNzaW9uO1xuXG4gICAgcGxheWVyQWRhcHRlcjtcblxuICAgIGludGVybmFsQWRNYW5hZ2VyO1xuXG4gICAgb21zZGtIYW5kbGVyO1xuXG4gICAgb21BZFNlc3Npb247XG5cbiAgICBmaXJzdEltYWdlRGF0ZTtcblxuICAgIGFkQnJlYWtQb3NpdGlvbjtcblxuICAgIHBhdXNlO1xuXG4gICAgYnVmZmVyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgICAgIHRoaXMuYWRTZXNzaW9uID0gaGFuZGxlci5hZFNlc3Npb247XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcblxuICAgICAgICB0aGlzLmludGVybmFsQWRNYW5hZ2VyID0gdGhpcy5oYW5kbGVyLnNtYXJ0TGliLmludGVybmFsQWRNYW5hZ2VyO1xuXG4gICAgICAgIHRoaXMub21zZGtIYW5kbGVyID0gT01TREtNYW5hZ2VyLmdldEluc3RhbmNlKCkub21zZGtIYW5kbGVyO1xuXG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZURhdGUgPSAwO1xuICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdtaWRyb2xsJztcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvblJlZGlyZWN0aW9uRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25GaXJzdEltYWdlKGJpdHJhdGUsIHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgb25MYXllclN3aXRjaChiaXRyYXRlKSB7XG5cbiAgICB9XG5cbiAgICBvblBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uYnVmZmVyU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdFbmQoaXNQbGF5aW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uYnVmZmVyRmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblN0YWxsRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25SZWJ1ZmZlcmluZ0VuZCgpIHtcblxuICAgIH1cblxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmFkRGF0YSAhPT0gdW5kZWZpbmVkICYmIE1hdGguYWJzKGVuZCAtIHN0YXJ0KSA+PSAxMDAwKSB7XG4gICAgICAgICAgICBpZiAoZW5kID49IHRoaXMuYWREYXRhLnBvc2l0aW9uICsgdGhpcy5hZERhdGEuZHVyYXRpb24gfHwgZW5kIDwgdGhpcy5hZERhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5za2lwcGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0b3Aoc3RhdHVzQ29kZSkge1xuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5vbUFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgIH1cblxuICAgIG9uU3RhcnRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcblxuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG5cbiAgICB9XG5cbiAgICBvbkVuZFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuXG4gICAgfVxuXG4gICAgb25BZEJyZWFrRGF0YShhZEJyZWFrVHJhY2tlcikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoKGFkQnJlYWtUcmFja2VyLnBvc2l0aW9uICsgYWRCcmVha1RyYWNrZXIuZHVyYXRpb24pIC0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldER1cmF0aW9uKCkpIDwgMTAwMDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3Bvc3Ryb2xsJztcbiAgICAgICAgfSBlbHNlIGlmIChEYXRlLm5vdygpIC0gdGhpcy5maXJzdEltYWdlRGF0ZSA8IDMwMDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3ByZXJvbGwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgICAgIH1cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIHBvc2l0aW9uIGlzICcgKyB0aGlzLmFkQnJlYWtQb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICBvbkFkQnJlYWtCZWdpbihzZXNzaW9uVG9rZW4pIHtcblxuICAgIH1cblxuICAgIG9uQWREYXRhKGFkRGF0YSkge1xuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnYWQgZGF0YT0nICsgSlNPTi5zdHJpbmdpZnkoYWREYXRhKSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5hZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gc2tpcCA/ICsgc2Vzc2lvbiBmaW5pc2hcbiAgICAgICAgICAgIC8vIHRoaXMub21BZFNlc3Npb24/LnNraXBwZWQoKTtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWREYXRhID0gYWREYXRhO1xuXG4gICAgICAgIC8vIEJ1aWxkIGFkIHZlcmlmaWNhdGlvbiBkYXRhXG4gICAgICAgIGxldCBhZFZlcmlmaWNhdGlvbkRhdGE7XG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWZXJpZmljYXRpb25EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkVmVyaWZpY2F0aW9uRGF0YSA9IFsuLi50aGlzLmFkU2Vzc2lvbi5hZFZlcmlmaWNhdGlvbkRhdGFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRWZXJpZmljYXRpb25EYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZERhdGEudmVyaWZpY2F0aW9ucy5mb3JFYWNoKHZlcmlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBqYXZhc2NyaXB0UmVzb3VyY2VzID0gdmVyaWZpY2F0aW9uLmphdmFzY3JpcHRSZXNvdXJjZXMuZmluZChyZXNvdXJjZSA9PiByZXNvdXJjZS5hcGlmcmFtZXdvcmsgPT09ICdvbWlkJyk7XG4gICAgICAgICAgICBhZFZlcmlmaWNhdGlvbkRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uVmVuZG9yOiB2ZXJpZmljYXRpb24udmVuZG9yLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblVSTDogamF2YXNjcmlwdFJlc291cmNlcy51cmwsXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uUGFyYW1ldGVyczogdmVyaWZpY2F0aW9uLnZlcmlmaWNhdGlvblBhcmFtZXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgYWQgc2Vzc2lvblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uID0gdGhpcy5vbXNka0hhbmRsZXIuY3JlYXRlT01BZFNlc3Npb24odGhpcy5pbnRlcm5hbEFkTWFuYWdlci5vbVBhcnRuZXJOYW1lLCB0aGlzLmludGVybmFsQWRNYW5hZ2VyLm9tUGFydG5lclZlcnNpb24sIHRoaXMuYWRTZXNzaW9uPy5hZEN1c3RvbVJlZmVyZW5jZSwgYWRWZXJpZmljYXRpb25EYXRhKTtcblxuICAgICAgICAvLyBTZXQgdGhlIGFkIHZpZXcgaWYgaXQgaGFzIGJlZW4gcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGFkIGJyZWFrXG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24uc2V0QWRWaWV3KHRoaXMuYWRTZXNzaW9uLmFkVmlldyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hZFNlc3Npb24/LmFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRTZXNzaW9uLmFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5yZWdpc3RlckFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXcoaXRlbS52aWV3LCBpdGVtLnB1cnBvc2UsIGl0ZW0ucmVhc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5zdGFydCgpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgYWQgdmlldyBzdGF0ZSBpZiBpdCBoYXMgYmVlbiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYWQgYnJlYWtcbiAgICAgICAgaWYgKHRoaXMuYWRTZXNzaW9uPy5hZFZpZXdTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLnNldEFkVmlld1N0YXRlKHRoaXMuYWRTZXNzaW9uLmFkVmlld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZERhdGEuc2tpcHBhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmxvYWRlZChhZERhdGEuc2tpcHBhYmxlUG9zaXRpb24gLSBhZERhdGEucG9zaXRpb24sIGFkRGF0YS5kdXJhdGlvbiwgdGhpcy5hZEJyZWFrUG9zaXRpb24sIHRoaXMucGxheWVyQWRhcHRlci5nZXRWb2x1bWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmxvYWRlZCgtMSwgYWREYXRhLmR1cmF0aW9uLCB0aGlzLmFkQnJlYWtQb3NpdGlvbiwgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFZvbHVtZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRCZWdpbihzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQpIHtcblxuICAgIH1cblxuICAgIG9uQWRTa2lwcGFibGUoc2Vzc2lvblRva2VuKSB7XG5cbiAgICB9XG5cbiAgICBvbkFkUHJvZ3Jlc3Moc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkLCBwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5wcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgb25BZEVuZChzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQpIHtcbiAgICAgICAgdGhpcy5hZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uZmluaXNoKCk7XG4gICAgICAgIHRoaXMub21BZFNlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb25BZEJyZWFrRW5kKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5vbUFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgIH1cblxuICAgIG9uVm9sdW1lQ2hhbmdlZCh2b2x1bWUpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1ZvbHVtZSBpcyBub3cgJyArIHZvbHVtZSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy52b2x1bWVDaGFuZ2Uodm9sdW1lKTtcbiAgICB9XG5cbiAgICBvblBsYXllckVycm9yKGJyb2FkcGVha1N0YXR1c0NvZGUsIHBsYXllckVycm9yQ29kZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnQnJvYWRwZWFrIHN0YXR1cyBjb2RlICcgKyBicm9hZHBlYWtTdGF0dXNDb2RlLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnUGxheWVyIGVycm9yIGNvZGUgJyArIHBsYXllckVycm9yQ29kZSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5lcnJvcihicm9hZHBlYWtTdGF0dXNDb2RlLCBwbGF5ZXJFcnJvckNvZGUpO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgb2JqZWN0R2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJykuZjtcblxudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gdW5jdXJyeVRoaXMoJHByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbi8vIGluIHNvbWUgSUUgdmVyc2lvbnMsIGBwcm9wZXJ0eUlzRW51bWVyYWJsZWAgcmV0dXJucyBpbmNvcnJlY3QgcmVzdWx0IG9uIGludGVnZXIga2V5c1xuLy8gb2YgYG51bGxgIHByb3RvdHlwZSBvYmplY3RzXG52YXIgSUVfQlVHID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG4gIHZhciBPID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgT1syXSA9IDI7XG4gIHJldHVybiAhcHJvcGVydHlJc0VudW1lcmFibGUoTywgMik7XG59KTtcblxuLy8gYE9iamVjdC57IGVudHJpZXMsIHZhbHVlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRPX0VOVFJJRVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IG9iamVjdEtleXMoTyk7XG4gICAgdmFyIElFX1dPUktBUk9VTkQgPSBJRV9CVUcgJiYgb2JqZWN0R2V0UHJvdG90eXBlT2YoTykgPT09IG51bGw7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkge1xuICAgICAga2V5ID0ga2V5c1tpKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCAoSUVfV09SS0FST1VORCA/IGtleSBpbiBPIDogcHJvcGVydHlJc0VudW1lcmFibGUoTywga2V5KSkpIHtcbiAgICAgICAgcHVzaChyZXN1bHQsIFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kSW5kZXg7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkRfSU5ERVggPSAnZmluZEluZGV4JztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZpbmRpbmRleCAtLSB0ZXN0aW5nXG5pZiAoRklORF9JTkRFWCBpbiBbXSkgQXJyYXkoMSlbRklORF9JTkRFWF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZGluZGV4XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kSW5kZXgodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EX0lOREVYKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kIC0tIHRlc3RpbmdcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbi8vIENocm9tZSA4MC04MiBoYXMgYSBjcml0aWNhbCBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwNDk5ODJcbnZhciBDSFJPTUVfQlVHID0gIUlTX05PREUgJiYgQ0hST01FX1ZFUlNJT04gPiA3OSAmJiBDSFJPTUVfVkVSU0lPTiA8IDgzO1xudmFyIEZPUkNFRCA9IENIUk9NRV9CVUcgfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ3JlZHVjZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBsZW5ndGgsIGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJUQUciLCJBZE1ldHJpY3MiLCJtZXRyaWNzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiYWRTa2lwcGFibGUiLCJhZFNraXBwZWQiLCJhZFByb2dyZXNzIiwiYWREdXJhdGlvbiIsInN0YWxsc051bWJlciIsInN0YWxsc0R1cmF0aW9uIiwibGF5ZXJTd2l0Y2hlc051bWJlciIsImF2ZXJhZ2VCaXRyYXRlIiwic2Vzc2lvblRva2VuIiwiY3JlYXRpdmVJZCIsImFkSWQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwibWVyZ2UiLCJsaXN0IiwibWVyZ2VkTWV0cmljcyIsImxhc3RNZXRyaWNzIiwibGF5ZXJQZXJEdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJpIiwiYWRNZXRyaWNzIiwiTWF0aCIsInJvdW5kIiwiQWRNZXRyaWNzQnVpbGRlciIsInRpbWVTcGVudFBlckxheWVyIiwicXVhcnRpbGVzIiwicmVzZXQiLCJfaW1wb3J0Iiwic2V0QWRTa2lwcGFibGUiLCJzZXRBZFNraXBwZWQiLCJhZGRQcm9ncmVzcyIsIk9iamVjdCIsImtleXMiLCJzZXRTZXNzaW9uVG9rZW4iLCJzZXRDcmVhdGl2ZUlkIiwic2V0QWRJZCIsImFkZFRpbWVTcGVudFBlckxheWVyIiwiYml0cmF0ZSIsImR1cmF0aW9uIiwidGltZVNwZW50T25MYXllciIsImFkZExheWVyU3dpdGNoIiwiYWRkU3RhbGwiLCJjbG9uZSIsImFzc2lnbiIsImJ1aWxkIiwiTG9nZ2VyTWFuYWdlciIsIkRhdGVVdGlscyIsIlNtYXJ0TGliIiwiQWRUcmFja2luZ01hbmFnZXIiLCJBZE1ldHJpY3NNYW5hZ2VyIiwiaGFuZGxlciIsInRpbWVsaW5lIiwic2Vzc2lvblJlcG9ydCIsImJ1aWxkZXIiLCJvblN0YXJ0IiwiYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlIiwiZmlyc3RJbWFnZSIsImxhc3RMYXllckJpdHJhdGUiLCJhZExhc3RCdWZmZXJpbmdTdGFydERhdGUiLCJhZEJyZWFrUGxheWluZyIsImFkUGxheWluZyIsIm9uRmlyc3RJbWFnZSIsInBvc2l0aW9uIiwiRGF0ZSIsIm5vdyIsIm9uTGF5ZXJTd2l0Y2giLCJvbkJ1ZmZlcmluZ1N0YXJ0Iiwib25TdGFsbEVuZCIsIm9uUmVidWZmZXJpbmdFbmQiLCJvblNlZWsiLCJzdGFydCIsImVuZCIsImQiLCJmb3JtYXRUaW1lIiwiYWJzIiwiUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSIsIm9uU3RvcCIsInN0YXR1c0NvZGUiLCJoYW5kbGVBZEVuZCIsIm9uQWRCcmVha0JlZ2luIiwiX1NtYXJ0TGliJGFuYWx5dGljc01vIiwicHVzaEV2ZW50IiwiYW5hbHl0aWNzTW9kdWxlIiwiU2Vzc2lvblRyYWNrZXJFdmVudHMiLCJBZEJyZWFrU3RhcnQiLCJvbkFkQmVnaW4iLCJpbXBvcnQiLCJvbkFkU2tpcHBhYmxlIiwib25BZFNraXBwZWQiLCJvdGhlclNraXBwZWRBZElkcyIsIl90aGlzIiwiZm9yRWFjaCIsIm9uQWRQcm9ncmVzcyIsInByb2dyZXNzIiwib25BZEVuZCIsIm9uQWRCcmVha0VuZCIsIl9TbWFydExpYiRhbmFseXRpY3NNbzIiLCJwdXNoRXZlbnRQcm9ncmVzcyIsIkFkQnJlYWtTdG9wIiwib25LZWVwYWxpdmVTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkIiwidmFsdWVzIiwib25FbmRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkIiwib25BZHNVcGRhdGVkIiwiYWREYXRhIiwiX3RoaXMyIiwiYWRCcmVha3MiLCJhZEJyZWFrIiwiYWRzIiwiYWQiLCJfdGhpczIkaGFuZGxlciIsImlkIiwiZGVmYXVsdCIsIlJlcXVlc3RNYW5hZ2VyIiwiVHJhY2tlciIsInByb2NlZWRlZCIsImNhblByb2Nlc3MiLCJyZXNldFByb2Nlc3MiLCJBZERhdGFUcmFja2VyIiwiYWRUcmFja2luZ01hbmFnZXIiLCJ0aW1lUmVmZXJlbmNlIiwiaGFzUmVtYWluaW5nQWRCcmVha3MiLCJmaW5kIiwicmVzZXRQcm9ncmVzc2lvbiIsIkFkQnJlYWtUcmFja2VyIiwiX1RyYWNrZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJsaXZlIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJwcm9jZXNzQmVnaW4iLCJfYWRUcmFja2luZ01hbmFnZXIkaGEiLCJub3RpZnlBZEJyZWFrRGF0YSIsIm5vdGlmeUFkQnJlYWtCZWdpbiIsImFkRXZlbnRzTGlzdGVuZXIiLCJhZFNlc3Npb24iLCJ0b0RhdGEiLCJwcm9jZXNzRW5kIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhMiIsIm5vdGlmeUFkQnJlYWtFbmQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwic3RhcnRQb3NpdGlvbiIsIm1hcCIsImFkQ291bnQiLCJBZFRyYWNrZXIiLCJfVHJhY2tlcjIiLCJfc3VwZXIyIiwiaW5kZXgiLCJza2lwcGFibGUiLCJza2lwcGFibGVQb3NpdGlvbiIsImNsaWNrYWJsZSIsInZlcmlmaWNhdGlvbnMiLCJub25MaW5lYXJBZCIsImV2ZW50cyIsIndhdGNoZWQiLCJwcm9ncmVzc2lvbiIsImZsYXRXYXRjaGVkIiwicmFuZ2VzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaW50ZXJ2YWxzIiwic2xpY2UiLCJzdGFjayIsInRvcCIsInNvcnQiLCJwdXNoIiwicG9wIiwidXBkYXRlUHJvZ3Jlc3Npb24iLCJwb3NpdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJkdXJhdGlvblN0YXJ0IiwicmVkdWNlIiwic3VtIiwicHJvZ3Jlc3Npb25TdGFydCIsImR1cmF0aW9uRW5kIiwicHJvZ3Jlc3Npb25FbmQiLCJub3RpZnlBZFByb2dyZXNzIiwiZXZlbnQiLCJwcm9jZXNzRXZlbnRzIiwiZmxvb3IiLCJfYWRUcmFja2luZ01hbmFnZXIkaGEzIiwibm90aWZ5QWREYXRhIiwibm90aWZ5QWRCZWdpbiIsIm5vdGlmeUFkU2tpcHBhYmxlIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhNCIsIm5vdGlmeUFkRW5kIiwic2tpcFBvc2l0aW9uIiwiY2xpY2tVUkwiLCJ1cmkiLCJBZEV2ZW50VHJhY2tlciIsIl9UcmFja2VyMyIsIl9zdXBlcjMiLCJ0eXBlIiwidXJsIiwib2Zmc2V0IiwiX3RoaXMzIiwicHJvY2Vzc1Byb2dyZXNzaW9uIiwidG9Mb3dlckNhc2UiLCJnZXRJbnN0YW5jZSIsImFkRXZlbnQiLCJKb2JNYW5hZ2VyIiwicGxheWVyQWRhcHRlciIsImxpc3RlbmVycyIsImFkTGlzdCIsInVwZGF0ZVBvc2l0aW9uSm9iIiwidXBkYXRlU2Vzc2lvbkpvYiIsInN0YXJ0ZWQiLCJwYXVzZWQiLCJidWZmZXJpbmciLCJsYXN0UG9zaXRpb24iLCJsYXN0UG9zaXRpb25CZWZvcmVQYXVzZSIsImxhc3RQb3NpdGlvbkFmdGVyU2VlayIsImJrWW91U2Vzc2lvbiIsImJhc2VVUkwiLCJub25jZSIsImFkUGFsU2Vzc2lvblJlcXVlc3QiLCJmaXJzdEZpbGVSZWNlaXZlZCIsImZpcnN0RmlsZVByb2NlZWRlZCIsInBvZHNTZW50TnVtYmVyIiwic2Vzc2lvblVwZGF0ZUludGVydmFsIiwiU0VTU0lPTl9VUERBVEVfSU5URVJWQUwiLCJpbml0QmtZb3VTZXNzaW9uIiwiZGF0YSIsImFkUGFsU2Vzc2lvbiIsInBhcnNlQWRQb2RzIiwidXBkYXRlQmtZb3VTZXNzaW9uIiwic3RvcHBlZCIsImFkVHJhY2tpbmdVUkwiLCJzbWFydExpYlBhcmFtZXRlcnMiLCJzbWFydExpYiIsImdldFBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzIiwidXNlckFnZW50IiwiYWRUcmFja2luZyIsInRoZW4iLCJyZXN1bHQiLCJjYW5jZWwiLCJodHRwU3RhdHVzIiwiY29udGVudCIsImUiLCJhc3luY0RlbGF5IiwiaXNMaXZlIiwiZml4QWRCcmVhayIsImxhc3RBZCIsIm5leHRBZCIsImZpbHRlciIsInJlZnJlc2hEZWxheSIsImFkRGF0YVRyYWNrZXIiLCJhZFBvZHMiLCJBcnJheSIsImlzQXJyYXkiLCJhZFBvZCIsImFkQnJlYWtJZCIsInN0YXJ0VGltZSIsImFkQnJlYWtUcmFja2VyIiwic2VxdWVuY2VOdW1iZXIiLCJub25MaW5lYXIiLCJpc1ZhbGlkQWQiLCJfYWQkdmlkZW9jbGlja3MiLCJfYWQkdmlkZW9jbGlja3MyIiwiX2FkJHZpZGVvY2xpY2tzMyIsInNraXBwYWJsZVRpbWUiLCJ2aWRlb2NsaWNrcyIsImNsaWNrdGhyb3VnaHVybCIsInRyYWNrZXJzIiwiY2xpY2t0cmFja2luZyIsImN1c3RvbUNsaWNrIiwiY3VzdG9tY2xpY2siLCJhZFZlcmlmaWNhdGlvbnMiLCJhZHZlcmlmaWNhdGlvbnMiLCJlbGVtZW50IiwidmVuZG9yIiwiamF2YXNjcmlwdFJlc291cmNlcyIsImphdmFzY3JpcHRyZXNvdXJjZXMiLCJleGVjdXRhYmxlUmVzb3VyY2VzIiwiZXhlY3V0YWJsZXJlc291cmNlcyIsInRyYWNraW5nRXZlbnRzIiwidHJhY2tpbmdldmVudHMiLCJ2ZXJpZmljYXRpb25QYXJhbWV0ZXJzIiwidmVyaWZpY2F0aW9ucGFyYW1ldGVycyIsImFkVHJhY2tlciIsInRpbWUiLCJhZEV2ZW50VHJhY2tlciIsImRhdGFVcGRhdGVkIiwibWVyZ2VFdmVudHMiLCJub3RpZnlBZERhdGFMaXN0ZW5lciIsIlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCIsIm9uUG9zaXRpb25VcGRhdGVkIiwiZ2V0UG9zaXRpb24iLCJzdG9wIiwiZmlyc3RJbWFnZURhdGUiLCJnZXREdXJhdGlvbiIsIl90aGlzNCIsIm5ld0FkQ291bnQiLCJkZWxldGVkQWRDb3VudCIsImN1cnJlbnRJZHMiLCJhcnJheSIsIl90aGlzNCRjdXJyZW50QWRUcmFjayIsImluY2x1ZGVzIiwiY3VycmVudEFkVHJhY2tlciIsInNwbGljZSIsImN1cnJlbnRBZEJyZWFrIiwiY3VycmVudEFkIiwiaW5zZXJ0SW5kZXgiLCJmaW5kSW5kZXgiLCJvbGREdXJhdGlvbiIsIm5vdGlmeUFkc1VwZGF0ZWQiLCJjaGVja1N0YXJ0IiwiY2hlY2tBZEJyZWFrRW5kZWQiLCJjdXJyZW50UG9zaXRpb24iLCJzdGFydFByZWNpc2lvbiIsImN1cnJlbnRBZERhdGEiLCJjdXJyZW50QWRCcmVha0RhdGEiLCJjdXJyZW50QWRCcmVha1RyYWNrZXIiLCJfdGhpcyRhZERhdGEiLCJfdGhpcyRhZERhdGEyIiwic2tpcHBlZCIsIm5vdGlmeUFkU2tpcHBlZCIsIl90aGlzJGFkRGF0YTMiLCJfdGhpcyRhZERhdGE0IiwiX3RoaXMkYWREYXRhNSIsImFkVXNlckludGVyYWN0aW9uIiwiaW50ZXJhY3Rpb25UeXBlIiwiX3RoaXMkY3VycmVudEFkVHJhY2tlIiwiX3RoaXM1IiwidHJhY2tlciIsImNsaWNrdXJsIiwiZ2V0Q3VycmVudEFkIiwiZ2V0Q3VycmVudEFkQnJlYWsiLCJnZXRQb3NpdGlvbkZvckJvb2ttYXJrIiwiZ2V0UG9zaXRpb25Gb3JQbGF5YmFjayIsInBvc2l0aW9uSW5Cb29rbWFyayIsImEiLCJiIiwiX3RoaXM2IiwiX3RoaXMkYWRQYWxTZXNzaW9uIiwic2VuZFBsYXliYWNrU3RhcnQiLCJvblBhdXNlIiwicGxheWVyUG9zaXRpb24iLCJvblJlc3VtZSIsIm9uQnVmZmVyaW5nRW5kIiwicGxheWluZyIsIl90aGlzJGFkRGF0YTciLCJzdGFydFNlZWtQb3NpdGlvbiIsImVuZFNlZWtQb3NpdGlvbiIsIm1pbiIsIl90aGlzJGFkRGF0YTYiLCJwcmV2aW91c0FkVHJhY2tlciIsIl90aGlzJGFkUGFsU2Vzc2lvbjIiLCJzZW5kUGxheWJhY2tFbmQiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbmRleE9mIiwibm90aWZ5RXZlbnQiLCJldmVudE5hbWUiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJhcmc0IiwiYWRCcmVha0RhdGEiLCJfdGhpczciLCJfdGhpczgiLCJfdGhpczkiLCJfdGhpczEwIiwiX3RoaXMkYWRQYWxTZXNzaW9uMyIsInNlbmRBZEltcHJlc3Npb24iLCJfdGhpczExIiwiX3RoaXMxMiIsIl90aGlzMTMiLCJfdGhpczE0IiwiX3RoaXMxNSIsIl90aGlzMTYiLCJmaXJzdERhdGEiLCJfdGhpcyRoYW5kbGVyJGFkU2Vzc2kiLCJhZERhdGFMaXN0ZW5lciIsIm9uQWREYXRhIiwiQWRNYW5hZ2VyIiwiQWRWaWV3U3RhdGUiLCJBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlIiwiQWRTZXNzaW9uIiwiSW50ZXJuYWxBZE1hbmFnZXIiLCJPTVNES01hbmFnZXIiLCJPTVNlc3Npb25IYW5kbGVyIiwiYWRNb2R1bGUiLCJPTVNES0hhbmRsZXIiLCJjcmVhdGVPTUFkU2Vzc2lvbiIsInBhcnRuZXJOYW1lIiwicGFydG5lclZlcnNpb24iLCJjdXN0b21SZWZlcmVuY2VEYXRhIiwidmVyaWZpY2F0aW9uRGF0YSIsImluaXQiLCJyZWxlYXNlIiwiYXR0YWNoSW5zdGFuY2UiLCJhdHRhY2hIYW5kbGVyIiwib21zZGtIYW5kbGVyIiwiaXNFbmFibGVkIiwiX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCIsIl9pbnN0YW5jZSIsIl9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZFNwZWNTZXQiLCJ3cml0YWJsZSIsImludGVybmFsQWRNYW5hZ2VyIiwiYWRCcmVha1Bvc2l0aW9uIiwicGF1c2UiLCJvblJlZGlyZWN0aW9uRW5kIiwiX3RoaXMkb21BZFNlc3Npb24iLCJvbUFkU2Vzc2lvbiIsIl90aGlzJG9tQWRTZXNzaW9uMiIsInJlc3VtZSIsIl90aGlzJG9tQWRTZXNzaW9uMyIsImJ1ZmZlclN0YXJ0IiwiaXNQbGF5aW5nIiwiX3RoaXMkb21BZFNlc3Npb240IiwiYnVmZmVyRmluaXNoIiwiX3RoaXMkb21BZFNlc3Npb241IiwiZmluaXNoIiwib25TdGFydFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQiLCJvbkFkQnJlYWtEYXRhIiwiX3RoaXMkYWRTZXNzaW9uIiwiX3RoaXMkYWRTZXNzaW9uMiIsIl90aGlzJGFkU2Vzc2lvbjMiLCJfdGhpcyRhZFNlc3Npb240IiwiX3RoaXMkYWRTZXNzaW9uNSIsIl90aGlzJG9tQWRTZXNzaW9uNiIsImFkVmVyaWZpY2F0aW9uRGF0YSIsIl90b0NvbnN1bWFibGVBcnJheSIsInZlcmlmaWNhdGlvbiIsInJlc291cmNlIiwiYXBpZnJhbWV3b3JrIiwidmVyaWZpY2F0aW9uVmVuZG9yIiwidmVyaWZpY2F0aW9uVVJMIiwib21QYXJ0bmVyTmFtZSIsIm9tUGFydG5lclZlcnNpb24iLCJhZEN1c3RvbVJlZmVyZW5jZSIsImFkVmlldyIsInNldEFkVmlldyIsImFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzIiwiaXRlbSIsInJlZ2lzdGVyQWRGcmllbmRseU9ic3RydWN0aW9uVmlldyIsInZpZXciLCJwdXJwb3NlIiwicmVhc29uIiwiYWRWaWV3U3RhdGUiLCJzZXRBZFZpZXdTdGF0ZSIsImxvYWRlZCIsImdldFZvbHVtZSIsIl90aGlzJG9tQWRTZXNzaW9uNyIsIl90aGlzJG9tQWRTZXNzaW9uOCIsIm9uVm9sdW1lQ2hhbmdlZCIsInZvbHVtZSIsIl90aGlzJG9tQWRTZXNzaW9uOSIsInZvbHVtZUNoYW5nZSIsIm9uUGxheWVyRXJyb3IiLCJicm9hZHBlYWtTdGF0dXNDb2RlIiwicGxheWVyRXJyb3JDb2RlIiwiX3RoaXMkb21BZFNlc3Npb24xMCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==