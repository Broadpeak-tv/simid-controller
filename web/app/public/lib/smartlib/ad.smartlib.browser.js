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

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


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

/***/ "./node_modules/core-js/modules/es.array.flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/environment-is-node */ "./node_modules/core-js/internals/environment-is-node.js");

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

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.reduce.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.reduce.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");

var $TypeError = TypeError;

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
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


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.iterator.reduce.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.iterator.reduce.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.iterator.reduce */ "./node_modules/core-js/modules/es.iterator.reduce.js");


/***/ }),

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
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/DateUtils */ "./src_core/utils/DateUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }











function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkAdMetrics';
var AdMetrics = /*#__PURE__*/function () {
  // per impression

  function AdMetrics() {
    var metrics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    _classCallCheck(this, AdMetrics);
    _defineProperty(this, "adSkippable", void 0);
    // per ad
    _defineProperty(this, "adSkipped", void 0);
    // per impression
    _defineProperty(this, "adProgress", void 0);
    // per impression
    _defineProperty(this, "adDuration", void 0);
    // per impression
    _defineProperty(this, "stallsNumber", void 0);
    // per impression
    _defineProperty(this, "stallsDuration", void 0);
    // per impression
    _defineProperty(this, "layerSwitchesNumber", void 0);
    // per impression
    _defineProperty(this, "averageBitrate", void 0);
    // per impression
    _defineProperty(this, "creativeId", void 0);
    // per ad
    _defineProperty(this, "adId", void 0);
    // per ad
    _defineProperty(this, "adIndex", void 0);
    // per ad
    _defineProperty(this, "adCount", void 0);
    // per ad, set value once ad break finished
    _defineProperty(this, "adFormat", void 0);
    // per ad
    _defineProperty(this, "impressionDate", void 0);
    if (metrics === undefined) {
      this.adSkippable = false;
      this.adSkipped = false;
      this.adProgress = -1;
      this.adDuration = 0;
      this.stallsNumber = 0;
      this.stallsDuration = 0;
      this.layerSwitchesNumber = 0;
      this.averageBitrate = 0;
      this.creativeId = '';
      this.adId = '';
      this.adIndex = -1;
      this.adCount = -1;
      this.adFormat = '';
      this.impressionDate = -1;
    } else {
      this.adSkippable = metrics.adSkippable;
      this.adSkipped = metrics.adSkipped;
      this.adProgress = metrics.adProgress;
      this.adDuration = metrics.adDuration;
      this.stallsNumber = metrics.stallsNumber;
      this.stallsDuration = metrics.stallsDuration;
      this.layerSwitchesNumber = metrics.layerSwitchesNumber;
      this.averageBitrate = metrics.averageBitrate;
      this.creativeId = metrics.creativeId;
      this.adId = metrics.adId;
      this.adIndex = metrics.adIndex;
      this.adCount = metrics.adCount;
      this.adFormat = metrics.adFormat;
      this.impressionDate = metrics.impressionDate;
    }
  }

  /**
   * Deprecated
   *
   * @param list
   * @returns {undefined|AdMetrics}
   */
  return _createClass(AdMetrics, [{
    key: "toString",
    value: function toString() {
      return '\n{ adSkippable=' + this.adSkippable + '\n  adSkipped=' + this.adSkipped + '\n  adProgress=' + this.adProgress + '\n  adDuration=' + this.adDuration + '\n  stallsNumber=' + this.stallsNumber + '\n  stallsDuration=' + this.stallsDuration + '\n  layerSwitchesNumber=' + this.layerSwitchesNumber + '\n  averageBitrate=' + this.averageBitrate + "\n  creativeId='" + this.creativeId + '\'' + "\n  adId='" + this.adId + '\'' + '\n  adIndex=' + this.adIndex + '\n  adCount=' + this.adCount + "\n  adFormat='" + this.adFormat + '\'' + '\n  impressionDate=' + this.impressionDate + ' (' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_11__["default"].formatTime(this.impressionDate) + ')' + '\n}';
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

  /**
   * Return true if the build as been initialized (ad id set)
   * @returns {boolean}
   */
  return _createClass(AdMetricsBuilder, [{
    key: "isInitialized",
    value: function isInitialized() {
      return this.adMetrics.adId !== '';
    }
  }, {
    key: "import",
    value: function _import(adMetrics) {
      if (adMetrics !== undefined && adMetrics.length === 1 && adMetrics[0].impressionDate <= 0) {
        this.adMetrics = adMetrics[0];
      }

      // Ad is being displayed, set impression date
      this.adMetrics.impressionDate = Date.now();
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
      this.adMetrics.adProgress = Math.max(this.adMetrics.adProgress, value);

      // console.log('PROGRESS', this.adMetrics.adProgress, this.quartiles);

      return this;
    }
  }, {
    key: "init",
    value: function init(format, index, count) {
      this.adMetrics.adFormat = format;
      this.adMetrics.adIndex = index;
      this.adMetrics.adCount = count;
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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _AdMetrics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AdMetrics */ "./src_core/ad/metrics/AdMetrics.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../SmartLib */ "./src_core/SmartLib.js");
/* harmony import */ var _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../tracking/AdTrackingManager */ "./src_core/ad/tracking/AdTrackingManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var TAG = 'BpkAdMetricsMgr';
var AdMetricsManager = /*#__PURE__*/function () {
  function AdMetricsManager(handler) {
    _classCallCheck(this, AdMetricsManager);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "timeline", void 0);
    _defineProperty(this, "builder", void 0);
    _defineProperty(this, "adMetrics", void 0);
    _defineProperty(this, "firstImageDate", void 0);
    _defineProperty(this, "lastLayerBitrate", void 0);
    _defineProperty(this, "adBreakPlaying", void 0);
    _defineProperty(this, "adPlaying", void 0);
    _defineProperty(this, "adSkipped", void 0);
    _defineProperty(this, "adLastLayerSwitchDate", void 0);
    _defineProperty(this, "adLastBufferingStartDate", void 0);
    _defineProperty(this, "adBreakPosition", void 0);
    this.handler = handler;
    this.timeline = this.handler.sessionReport.timeline;
    this.builder = new _AdMetrics__WEBPACK_IMPORTED_MODULE_16__.AdMetricsBuilder();
    this.adMetrics = {};
  }
  return _createClass(AdMetricsManager, [{
    key: "onStart",
    value: function onStart() {
      // Reset variables
      this.adMetrics = {};
      this.adLastLayerSwitchDate = 0;
      this.firstImageDate = 0;
      this.lastLayerBitrate = 0;
      this.adLastBufferingStartDate = -1;
      this.adBreakPlaying = false;
      this.adPlaying = false;
      this.adSkipped = false;
      this.adBreakPosition = 'midroll';
    }
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, position) {
      this.lastLayerBitrate = bitrate;
      this.adLastLayerSwitchDate = Date.now();
      this.firstImageDate = Date.now();
    }
  }, {
    key: "onLayerSwitch",
    value: function onLayerSwitch(bitrate) {
      if (this.adBreakPlaying && this.firstImageDate > 0) {
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
        var _this$handler;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad seeked from ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_18__["default"].formatTime(start) + ' to ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_18__["default"].formatTime(end), (_this$handler = this.handler) === null || _this$handler === void 0 ? void 0 : _this$handler.id);
        if (Math.abs(end - start) < _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_20__["default"].POSITION_SEEK_ERROR_DELTA) {
          var _this$handler2;
          // Ignoring seek
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ignoring seek < ' + _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_20__["default"].POSITION_SEEK_ERROR_DELTA + 'ms', (_this$handler2 = this.handler) === null || _this$handler2 === void 0 ? void 0 : _this$handler2.id);
        } else {
          var _this$handler3;
          // Current ad is being skipped
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad skipped (above seek threshold)', (_this$handler3 = this.handler) === null || _this$handler3 === void 0 ? void 0 : _this$handler3.id);
          this.adSkipped = true;
        }
      }
    }
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      // Ad end with stopStreamingSession
      if (this.adBreakPlaying) {
        this.handleAdEnd();
        this.adBreakPlaying = false;
      }
    }
  }, {
    key: "onAdBreakData",
    value: function onAdBreakData(adBreakTracker) {
      var _this$handler$playerA;
      // Detect ad break position
      if (Math.abs(adBreakTracker.position + adBreakTracker.duration - ((_this$handler$playerA = this.handler.playerAdapter) === null || _this$handler$playerA === void 0 ? void 0 : _this$handler$playerA.getDuration())) < 10000) {
        this.adBreakPosition = 'postroll';
      } else if (Date.now() - this.firstImageDate < _tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_20__["default"].POSITION_START_DELTA) {
        this.adBreakPosition = 'preroll';
      } else {
        this.adBreakPosition = 'midroll';
      }
      if (adBreakTracker.ooba !== undefined) {
        var _this$handler4;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad break position is ' + this.adBreakPosition, (_this$handler4 = this.handler) === null || _this$handler4 === void 0 ? void 0 : _this$handler4.id);
      }

      // Ad breaks start
      this.adBreakPlaying = true;

      // Add ad break begin to timeline
      if (this.timeline !== undefined) {
        var _SmartLib$analyticsMo;
        this.timeline.pushEvent((_SmartLib$analyticsMo = _SmartLib__WEBPACK_IMPORTED_MODULE_19__["default"].analyticsModule) === null || _SmartLib$analyticsMo === void 0 ? void 0 : _SmartLib$analyticsMo.SessionTrackerEvents.AdBreakStart);
      }
    }
  }, {
    key: "onAdData",
    value: function onAdData(adData) {
      // To detect skip of an ad inside an ad breaks
      if (this.builder.isInitialized() && this.adSkipped) {
        this.handleAdEnd();
      }

      // Get ad count (-1 until BkYou returns ended flag)
      var adCount = adData.adBreak.live === true ? -1 : adData.adBreak.ads.length;

      // Create new builder
      this.builder.reset().import(this.adMetrics[adData.adId]) // import ad metrics SR if it exists and not yet displayed
      .setCreativeId(adData.creativeId).setAdId(adData.adId).init(this.adBreakPosition, adData.index, adCount);

      // Init ad metrics
      this.adSkipped = false;
      this.adLastLayerSwitchDate = Date.now();
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
        var _this$handler5;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad break skipped', (_this$handler5 = this.handler) === null || _this$handler5 === void 0 ? void 0 : _this$handler5.id);
        var adIndex = 1;
        otherSkippedAdIds.forEach(function (adId) {
          _this.adMetrics[adId].forEach(function (report) {
            if (report.impressionDate <= 0) {
              // Set ad as skipped
              report.adSkipped = true;
              report.adProgress = 0;
              report.impressionDate = Date.now();

              // Init other values
              var currentReport = _this.builder.adMetrics;
              report.adIndex = currentReport.adIndex + adIndex; // set index with skipped ad index + 1
              report.adCount = currentReport.adCount;
              report.adFormat = currentReport.adFormat;
              adIndex++;
            }
          });
        });
      }
    }
  }, {
    key: "onAdProgress",
    value: function onAdProgress(sessionToken, creativeId, adId, progress) {
      this.builder.addProgress(progress);
      if (progress > 0 && this.builder.quartiles[progress - 25] === undefined) {
        var _this$handler6;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad skipped (no previous progress)', (_this$handler6 = this.handler) === null || _this$handler6 === void 0 ? void 0 : _this$handler6.id);
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
        this.timeline.pushEventProgress((_SmartLib$analyticsMo2 = _SmartLib__WEBPACK_IMPORTED_MODULE_19__["default"].analyticsModule) === null || _SmartLib$analyticsMo2 === void 0 ? void 0 : _SmartLib$analyticsMo2.SessionTrackerEvents.AdBreakStop, 0);
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
          // this.adMetrics[metrics.adId] = metrics;
          this.storeMetrics(metrics);
        }
      }

      // sessionReport.adMetrics = Object.values(this.adMetrics);
      sessionReport.adMetrics = this.generateMetrics();
    }
  }, {
    key: "onEndSessionReportUpdateRequested",
    value: function onEndSessionReportUpdateRequested(sessionReport) {
      // sessionReport.adMetrics = Object.values(this.adMetrics);
      sessionReport.adMetrics = this.generateMetrics();
    }
  }, {
    key: "storeMetrics",
    value: function storeMetrics(metrics) {
      var adId = metrics.adId;
      if (this.adMetrics[adId] === undefined) {
        this.adMetrics[adId] = [];
      }

      // Add or update metrics
      var index = this.adMetrics[adId].findIndex(function (report) {
        return report.impressionDate === metrics.impressionDate;
      });
      if (index === -1) {
        this.adMetrics[adId].push(metrics);
      } else {
        this.adMetrics[adId][index] = metrics;
      }
    }
  }, {
    key: "generateMetrics",
    value: function generateMetrics() {
      var metrics = [];
      Object.values(this.adMetrics).forEach(function (reports) {
        reports.forEach(function (report) {
          return metrics.push(report);
        });
      });
      return metrics;
    }
  }, {
    key: "handleAdEnd",
    value: function handleAdEnd() {
      var _this$handler7;
      // Store final progress and time spent on layer until end
      this.builder.setAdSkipped(this.adSkipped).addTimeSpentPerLayer(this.lastLayerBitrate, Date.now() - this.adLastLayerSwitchDate);

      // Generate the ad metrics
      var metrics = this.builder.build();
      if (metrics.adId.length > 0) {
        // this.adMetrics[metrics.adId] = metrics;
        this.storeMetrics(metrics);
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Ad metrics : ' + metrics.toString(), (_this$handler7 = this.handler) === null || _this$handler7 === void 0 ? void 0 : _this$handler7.id);

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
            var builder = new _AdMetrics__WEBPACK_IMPORTED_MODULE_16__.AdMetricsBuilder();
            var metrics = builder.setCreativeId(ad.creativeId).setAdId(ad.adId).build();
            _this2.adMetrics[ad.adId] = [metrics];
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_17__.LoggerManager.d(TAG, 'Adding ad metrics report for ad id ' + ad.adId, (_this2$handler = _this2.handler) === null || _this2$handler === void 0 ? void 0 : _this2$handler.id);
          }
        });
      });
    }
  }]);
}();


/***/ }),

/***/ "./src_core/ad/tracking/AdTracker.js":
/*!*******************************************!*\
  !*** ./src_core/ad/tracking/AdTracker.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdBreakEventTracker: function() { return /* binding */ AdBreakEventTracker; },
/* harmony export */   AdBreakTracker: function() { return /* binding */ AdBreakTracker; },
/* harmony export */   AdDataTracker: function() { return /* binding */ AdDataTracker; },
/* harmony export */   AdEventTracker: function() { return /* binding */ AdEventTracker; },
/* harmony export */   AdTracker: function() { return /* binding */ AdTracker; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _request_RequestManager__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../request/RequestManager */ "./src_core/request/RequestManager.js");
/* harmony import */ var _AdManager__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../AdManager */ "./src_core/ad/AdManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





























function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



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
    this.prepared = false;
  }

  /**
   * Check if the tracker can execute its code
   * Warning: calling this method sets a value
   *
   * @param id Process id. In some tracker, it requires multiple can process (process begin, process end for the ad break tracker)
   *           0 = processBegin, 1 = processEnd
   * @returns {boolean} if return true, the rest of the method which calls this can be executed
   */
  return _createClass(Tracker, [{
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
}();
/**
 * Base ad data object
 * Stored in ad tracking manager and used to browse ads
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
    /**
     * Ad gateway out-of-band adpods
     */
    _defineProperty(this, "outOfBandAdBreaks", void 0);
    this.adTrackingManager = adTrackingManager;
    this.sessionToken = sessionToken;
    this.timeReference = timeReference;
    this.adBreaks = [];
    this.outOfBandAdBreaks = [];
  }

  /**
   * Has ad break after the given position
   * @param position position to check
   * @returns {boolean} true of has remaining ad breaks after position
   */
  return _createClass(AdDataTracker, [{
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
}();

/**
 * Ad break data
 */
var AdBreakTracker = /*#__PURE__*/function (_Tracker2) {
  function AdBreakTracker(adData, id, position, duration, live, ooba) {
    var _this;
    _classCallCheck(this, AdBreakTracker);
    _this = _callSuper(this, AdBreakTracker);
    /**
     * Ad data tracker
     */
    _defineProperty(_this, "adData", void 0);
    /**
     * BkYou id
     */
    _defineProperty(_this, "id", void 0);
    // id
    /**
     * BkYou starttime_ms
     */
    _defineProperty(_this, "position", void 0);
    /**
     * Adjusted ad break duration calculated by SmartLib and used by the tracking
     * In some cases, the duration returned by the BkYou is not correct and has to be adjusted
     */
    _defineProperty(_this, "duration", void 0);
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
    _defineProperty(_this, "live", void 0);
    /**
     * BkYou ads
     */
    _defineProperty(_this, "ads", void 0);
    /**
     * Ad break tracking events
     */
    _defineProperty(_this, "trackingEvents", void 0);
    /**
     * Out-of-band ad related data
     * 
     * Undefined for in-band ads
     * 
     */
    _defineProperty(_this, "ooba", void 0);
    _this.adData = adData;
    _this.id = id;
    _this.position = position;
    _this.duration = duration;
    _this.live = live;
    _this.ads = [];
    _this.trackingEvents = [];
    _this.ooba = ooba;
    return _this;
  }

  /**
   * Reset progression if seeking
   * @param position current position
   */
  _inherits(AdBreakTracker, _Tracker2);
  return _createClass(AdBreakTracker, [{
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
     * Trigger public event to announce an ad break
     */
  }, {
    key: "processPrepare",
    value: function processPrepare() {
      var _adTrackingManager$ha;
      var adTrackingManager = this.adData.adTrackingManager;
      var adEventsListener = (_adTrackingManager$ha = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha === void 0 ? void 0 : _adTrackingManager$ha.adEventsListener;
      if (this.prepared === false && (adEventsListener === null || adEventsListener === void 0 ? void 0 : adEventsListener.onPrepareAdBreak) !== undefined) {
        adEventsListener.onPrepareAdBreak(this.toData());
        this.prepared = true;
      }
    }

    /**
     * Process trackers when starting an ad
     */
  }, {
    key: "processBegin",
    value: function processBegin() {
      var _adTrackingManager$ha2;
      var adTrackingManager = this.adData.adTrackingManager;
      if (!this.canProcess(0)) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Ad break already began (id: ' + this.id + ')', adTrackingManager.handler.id);
        return;
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Processing ad break begin...', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Duration: ' + this.duration + 'ms', adTrackingManager.handler.id);

      // Trigger internal events
      adTrackingManager.notifyAdBreakData(this);
      adTrackingManager.notifyAdBreakBegin(this.adData.sessionToken);
      this.trackingEvents.filter(function (event) {
        return event.type === 'breakStart';
      }).forEach(function (event) {
        return event.processEvent();
      });

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha2 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha2 === void 0 ? void 0 : _adTrackingManager$ha2.adEventsListener;
      this.processPrepare();
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdBreakBegin(this.toData());
    }

    /**
     * Process trackers when ending an ad break
     */
  }, {
    key: "processEnd",
    value: function processEnd() {
      var _adTrackingManager$ha3;
      var adTrackingManager = this.adData.adTrackingManager;
      if (!this.canProcess(1)) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Ad break already ended (id: ' + this.id + ')', adTrackingManager.handler.id);
        return;
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Processing ad break end...', adTrackingManager.handler.id);

      // Trigger internal events
      adTrackingManager.notifyAdBreakEnd(this.adData.sessionToken);
      this.trackingEvents.filter(function (event) {
        return event.type === 'breakEnd';
      }).forEach(function (event) {
        return event.processEvent();
      });

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha3 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha3 === void 0 ? void 0 : _adTrackingManager$ha3.adEventsListener;
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdBreakEnd(this.toData());

      // In-band ads:
      //      Once played, the ad break can be replayed again
      //      In some case of BkYou no insertion error, ad break end is called before the actual position.
      //      When an ad is detected ad break begin should be called again
      // Out-of-band ads:
      //      Once played, the ad break is deleted
      if (this.ooba === undefined) {
        this.resetProcess();
        this.prepared = false;
      }
    }
  }, {
    key: "resetProcess",
    value: function resetProcess() {
      _superPropGet(AdBreakTracker, "resetProcess", this, 3)([]);

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
        adCount: this.live === true ? -1 : this.ads.length,
        ooba: this.ooba
      };
    }
  }]);
}(Tracker);

/**
 * Ad event data
 */
var AdBreakEventTracker = /*#__PURE__*/function (_Tracker3) {
  function AdBreakEventTracker(adBreak, type, url) {
    var _this2;
    _classCallCheck(this, AdBreakEventTracker);
    _this2 = _callSuper(this, AdBreakEventTracker);
    /**
     * AdBreak tracker
     */
    _defineProperty(_this2, "adBreak", void 0);
    /**
     * BkYou type
     */
    _defineProperty(_this2, "type", void 0);
    /**
     * BkYou callbackurl
     */
    _defineProperty(_this2, "url", void 0);
    _this2.adBreak = adBreak;
    _this2.type = type;
    _this2.url = url;
    return _this2;
  }

  /**
   * Process event
   * Trigger event if has not been already proceeded
   *
   * @returns {boolean} true if the event has been proceeded
   */
  _inherits(AdBreakEventTracker, _Tracker3);
  return _createClass(AdBreakEventTracker, [{
    key: "processEvent",
    value: function processEvent() {
      var adTrackingManager = this.adBreak.adData.adTrackingManager;
      if (!this.canProcess()) {
        return false;
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Processing ' + this.type + '...', adTrackingManager.handler.id);
      if (this.url !== undefined && this.url.length > 0) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Requesting ' + this.url, adTrackingManager.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_30__["default"].getInstance().adEvent(adTrackingManager.handler, this.url, true);
      }
      return true;
    }
  }]);
}(Tracker);

/**
 * Ad data
 */
var AdTracker = /*#__PURE__*/function (_Tracker4) {
  function AdTracker(adType, adBreak, index, position, duration, skippable, skippablePosition, creativeId, adId, clickable, verifications, nonLinearInfo, errorURL) {
    var _this3;
    _classCallCheck(this, AdTracker);
    _this3 = _callSuper(this, AdTracker);
    /**
     * Ad type
     * @type {'linear' | 'nonlinear' | 'linear_and_nonlinear' | 'unsupported'} 
     */
    _defineProperty(_this3, "adType", void 0);
    /**
     * Ad break tracker
     */
    _defineProperty(_this3, "adBreak", void 0);
    /**
     * Index in the current ad break
     */
    _defineProperty(_this3, "index", void 0);
    /**
     * BkYou starttime_ms
     */
    _defineProperty(_this3, "position", void 0);
    /**
     * BkYou duration_ms
     */
    _defineProperty(_this3, "duration", void 0);
    /**
     * BkYou skippable_ms
     */
    _defineProperty(_this3, "skippablePosition", void 0);
    /**
     * True if the ad is skippable
     */
    _defineProperty(_this3, "skippable", void 0);
    /**
     * BkYou creativeid
     */
    _defineProperty(_this3, "creativeId", void 0);
    /**
     * BkYou adid + '-' + starttime_ms
     */
    _defineProperty(_this3, "adId", void 0);
    /**
     * BkYou trackingevents
     */
    _defineProperty(_this3, "events", void 0);
    /**
     * BkYou videoclicks object
     * JSON value : { clickthroughurl: string, clicktracking: [{clickurl: string}], customclick: [{clickurl: string}] }
     * Mapped value : { uri: string, trackers: [{clickurl: string}], customClick: [{clickurl: string}] }
     */
    _defineProperty(_this3, "clickable", void 0);
    // videoclicks { clickthroughurl, clicktracking, customclick } => uri, trackers, customClick
    /**
     * BkYou adverifications array
     * JSON value : [ { vendor: string, javascriptresources: [{}], executableresources: [{}], trackingevents: [{}], verificationparameters: string} ]
     * Mapped value : [ {vendor: string, javascriptResources: [{}], executableResources: [{}], trackingEvents: [{}], verificationParameters: string } ]
     */
    _defineProperty(_this3, "verifications", void 0);
    /**
     * Array of interval watched
     * Flatted at each ad iteration
     */
    _defineProperty(_this3, "watched", void 0);
    /**
     * Current progression (0.0 to 1.0)
     * Reset when seek
     */
    _defineProperty(_this3, "progression", void 0);
    /**
     * Array of non-linear ads for the current creative
     */
    _defineProperty(_this3, "nonLinearInfo", void 0);
    /**
     * Error tracker URL
     */
    _defineProperty(_this3, "errorURL", void 0);
    _this3.adType = adType;
    _this3.adBreak = adBreak;
    _this3.index = index;
    _this3.position = position;
    _this3.duration = duration;
    _this3.skippable = skippable;
    _this3.skippablePosition = skippablePosition;
    _this3.creativeId = creativeId;
    _this3.adId = adId;
    _this3.events = [];
    _this3.clickable = clickable;
    _this3.verifications = verifications;
    _this3.watched = [];
    _this3.progression = 0;
    _this3.nonLinearInfo = nonLinearInfo;
    _this3.errorURL = errorURL;
    return _this3;
  }

  /**
   * Flat watch intervals array
   */
  _inherits(AdTracker, _Tracker4);
  return _createClass(AdTracker, [{
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
     * Only reset if seeking before ad start position to avoid tracking the same ad twice
     * In some case, the player can trigger undesired backward seeking event when switching the period
     * 
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

      // Done when exiting ad
      /* if (progressionStart <= 1.00 && progressionEnd >= 1.00) {
          adTrackingManager.notifyAdProgress(adData.sessionToken, this.creativeId, this.adId, 100);
      }*/

      this.events.forEach(function (event) {
        return event.processEvent(progressionStart, progressionEnd);
      });
      if (progressionStart === 1 && progressionEnd === 1) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Ad already seen (100%)', adTrackingManager.handler.id);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Ad progressed from ' + Math.floor(progressionStart * 100000) / 1000 + '% to ' + Math.floor(progressionEnd * 100000) / 1000 + '% (id: ' + this.adId + ')', adTrackingManager.handler.id);
      }
    }

    /**
     * Trigger public event to announce an ad
     */
  }, {
    key: "processPrepare",
    value: function processPrepare() {
      var _adTrackingManager$ha4;
      var adTrackingManager = this.adBreak.adData.adTrackingManager;
      var adEventsListener = (_adTrackingManager$ha4 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha4 === void 0 ? void 0 : _adTrackingManager$ha4.adEventsListener;
      if (this.prepared === false && (adEventsListener === null || adEventsListener === void 0 ? void 0 : adEventsListener.onPrepareAd) !== undefined) {
        adEventsListener.onPrepareAd(this.toData(), this.adBreak.toData());
        this.prepared = true;
      }
    }

    /**
     * Process trackers when starting an ad
     */
  }, {
    key: "processBegin",
    value: function processBegin() {
      var _adTrackingManager$ha5, _adTrackingManager$ha6;
      if (!this.canProcess(0)) {
        return;
      }
      var adData = this.adBreak.adData;
      var adTrackingManager = adData.adTrackingManager;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Processing ad begin ' + this.adId + '...', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Start: ' + this.position + 'ms', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'End  : ' + (this.position + this.duration) + 'ms', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Duration: ' + this.duration + 'ms', adTrackingManager.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Type: ' + this.adType, adTrackingManager.handler.id);

      // Trigger internal events
      adTrackingManager.notifyAdData(this);
      adTrackingManager.notifyAdBegin(adData.sessionToken, this);
      if (this.skippable === true) {
        adTrackingManager.notifyAdSkippable(adData.sessionToken, this.skippablePosition, this.position + this.duration, this.adBreak.position + this.adBreak.duration);
      }
      adTrackingManager.notifyAdProgress(adData.sessionToken, this, 0);

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha5 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha5 === void 0 ? void 0 : _adTrackingManager$ha5.adEventsListener;
      var ad = this.toData();
      var adBreak = this.adBreak.toData();
      this.processPrepare();

      // OMSDK specific
      if ((_adTrackingManager$ha6 = adTrackingManager.handler) !== null && _adTrackingManager$ha6 !== void 0 && _adTrackingManager$ha6.omSessionHandler) {
        var _adTrackingManager$ha7;
        ad['omAdSessionId'] = (_adTrackingManager$ha7 = adTrackingManager.handler.omSessionHandler.omAdSession) === null || _adTrackingManager$ha7 === void 0 || (_adTrackingManager$ha7 = _adTrackingManager$ha7.adSession) === null || _adTrackingManager$ha7 === void 0 ? void 0 : _adTrackingManager$ha7.getAdSessionId();
        adTrackingManager.currentAdData = ad;
      }
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
      var _adTrackingManager$ha8;
      if (!this.canProcess(1)) {
        return;
      }
      var adData = this.adBreak.adData;
      var adTrackingManager = adData.adTrackingManager;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Processing ad end ' + this.adId + '...', adTrackingManager.handler.id);

      // Trigger internal events
      // Handle errors, process 100% if tracking progression is 0.95%+
      if (this.progression >= 0.95) {
        // Set progression to 1
        this.updateProgression(this.position, this.position + this.duration);
        adTrackingManager.notifyAdProgress(adData.sessionToken, this, 100);
      }
      adTrackingManager.notifyAdEnd(adData.sessionToken, this);

      // Trigger public events
      var adEventsListener = (_adTrackingManager$ha8 = adTrackingManager.handler.adSession) === null || _adTrackingManager$ha8 === void 0 ? void 0 : _adTrackingManager$ha8.adEventsListener;
      adEventsListener === null || adEventsListener === void 0 || adEventsListener.onAdEnd(this.toData(), this.adBreak.toData());

      // In-band ads:
      //      Once played, the ad can be replayed again
      // Out-of-band ads:
      //      Once played, the ad is deleted
      if (this.adBreak.ooba === undefined) {
        this.resetProcess();
        this.prepared = false;
      }
    }
  }, {
    key: "getNonLinearResources",
    value: function getNonLinearResources(resourceType) {
      return this.nonLinearInfo.filter(function (obj) {
        return obj[resourceType] !== '';
      }).map(function (obj) {
        return {
          url: obj[resourceType],
          parameters: obj.adParameters,
          creativeId: obj.creativeId
        };
      });
    }
  }, {
    key: "toData",
    value: function toData() {
      return {
        adType: this.adType,
        index: this.index,
        creativeId: this.creativeId,
        adId: this.adId,
        startPosition: this.position,
        skipPosition: this.skippablePosition,
        duration: this.duration,
        clickURL: this.clickable.uri,
        nonLinearIframeResources: this.getNonLinearResources('iframeResource'),
        nonLinearStaticResources: this.getNonLinearResources('staticResource')
      };
    }
  }]);
}(Tracker);

/**
 * Ad event data
 */
var AdEventTracker = /*#__PURE__*/function (_Tracker5) {
  function AdEventTracker(ad, type, url, offset, position) {
    var _this4;
    _classCallCheck(this, AdEventTracker);
    _this4 = _callSuper(this, AdEventTracker);
    /**
     * Ad tracker
     */
    _defineProperty(_this4, "ad", void 0);
    /**
     * BkYou type
     */
    _defineProperty(_this4, "type", void 0);
    /**
     * BkYou callbackurl
     */
    _defineProperty(_this4, "url", void 0);
    /**
     * BkYou offset
     */
    _defineProperty(_this4, "offset", void 0);
    /**
     * BkYou time_ms
     * Deprecated
     */
    _defineProperty(_this4, "position", void 0);
    /**
     * Event trigger position
     */
    _defineProperty(_this4, "progression", void 0);
    _this4.ad = ad;
    _this4.type = type;
    _this4.url = url;
    _this4.offset = offset;
    _this4.position = position;
    _this4.progression = 0;
    _this4.processProgression();
    return _this4;
  }

  /**
   * Reset progression if seeking
   * @param position current position
   */
  _inherits(AdEventTracker, _Tracker5);
  return _createClass(AdEventTracker, [{
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
      var type = this.type === undefined ? undefined : this.type.toLowerCase();
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
    key: "processEvent",
    value: function processEvent(progressionStart, progressionEnd) {
      // console.log(progressionStart + ' < ' + this.progression + ' < ' + progressionEnd);
      var adTrackingManager = this.ad.adBreak.adData.adTrackingManager;
      if (progressionStart <= this.progression && this.progression <= progressionEnd) {
        if (!this.canProcess()) {
          return false;
        }
        if (this.ad.adType === _AdManager__WEBPACK_IMPORTED_MODULE_31__.AdType.AD_NON_LINEAR && this.type === 'impression') {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Found impression tracker on non-linear ad, please use sendTracker(\'creativeView\', adId) to send it', adTrackingManager.handler.id);
          return false;
        }
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Processing ' + (this.type || 'timed event') + ' (' + Math.floor(this.progression * 100) + '%)...', adTrackingManager.handler.id);
        if (this.url !== undefined && this.url.length > 0) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_29__.LoggerManager.d(TAG, 'Requesting ' + this.url, adTrackingManager.handler.id);
          _request_RequestManager__WEBPACK_IMPORTED_MODULE_30__["default"].getInstance().adEvent(adTrackingManager.handler, this.url);
        }
      }
      return true;
    }
  }]);
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.flat-map.js */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map.js */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../service/JobManager */ "./src_core/service/JobManager.js");
/* harmony import */ var _request_RequestManager__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../request/RequestManager */ "./src_core/request/RequestManager.js");
/* harmony import */ var _session_streaming_StreamingSessionOptions__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../session/streaming/StreamingSessionOptions */ "./src_core/session/streaming/StreamingSessionOptions.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_URL__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../utils/URL */ "./src_core/utils/URL.js");
/* harmony import */ var _AdTracker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./AdTracker */ "./src_core/ad/tracking/AdTracker.js");
/* harmony import */ var _AdManager__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./../AdManager */ "./src_core/ad/AdManager.js");
var _AdTrackingManager;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







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
     * Current out-of-band ad list
     */
    _defineProperty(this, "outOfBandAdList", void 0);
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
     * Current out-of-band ad trackers
     */
    _defineProperty(this, "currentOutOfBandAdTrackers", void 0);
    /**
     * Current out-of-band ad break trackers
     */
    _defineProperty(this, "currentOutOfBandAdBreakTrackers", void 0);
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
    /**
     * Playback history for when receiving tracking file asynchronously
     * Format: [{start: 0, end: 1000}, {start: 1200, end: 1800}, ...]
     */
    _defineProperty(this, "positionHistory", void 0);
    this.handler = handler;
    this.playerAdapter = playerAdapter;
    this.listeners = [];
    this.adData = undefined;
    this.adList = [];
    this.outOfBandAdList = [];
    this.currentOutOfBandAdTrackers = [];
    this.currentOutOfBandAdBreakTrackers = [];
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
    this.positionHistory = [];
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
  return _createClass(AdTrackingManager, [{
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'BkYou session initialized', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Updating ad tracking file...', this.handler.id);

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
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().adTracking(this.handler, parameters, adTrackingURL, true).then(function (result) {
          // Cancel request if session has been stopped
          if (_this.handler.stopped === true) {
            return;
          }

          // Cancel active keepalive job
          if (_this.updateSessionJob !== undefined) {
            _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().cancel(_this.updateSessionJob);
          }
          if (result.httpStatus >= 200 && result.httpStatus < 300) {
            // Parse the BkYou JSON file
            var data;
            try {
              data = JSON.parse(result.content);
            } catch (e) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking updated file unreadable', _this.handler.id);

              // Restart keepalive job
              if (_this.firstFileReceived === true) {
                _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
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
              _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
                _this.updateSessionJob = undefined;
                _this.updateBkYouSession();
              });
            } else {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Stopping ad tracking file update (VOD stream)...', _this.handler.id);
            }
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Stopping ad tracking file update (status code ' + result.httpStatus + ')', _this.handler.id);
          }
        });
      }
    }

    /* updateNonce() {
        LoggerManager.d(TAG, 'Updating nonce...', this.handler.id);
         this.nonce = undefined;
        this.adPalSessionRequest = this.handler.smartLib.internalAdManager.getAdPalSessionRequest();
    }*/

    /**
     * In some cases, ads may overlap
     * This is because some HLS / DASH representations may be longer than others (players should be prepared for this: for example DASH cuts before ad end)
     * BkYou forwards info as is
     * This method removes overlap by shifting next ad start to end of current ad
     * 
     * Also, this method recomputes ad break duration
     *  - whether due to ads overlap (see above)
     *  - whether due to ads being added in ad break
     *      - during LIVE contents
     *      - after notifyFirstImage for bk-ml=2.0 workflow (LIVE or VOD)
     * 
     * @param adBreak ad break to fix
     */
  }, {
    key: "fixAdBreak",
    value: function fixAdBreak(adBreak) {
      var _this2 = this;
      var lastAd;
      adBreak.ads.forEach(function (ad, index) {
        var nextAd = adBreak.ads[index + 1];
        if (nextAd !== undefined) {
          var currentAdEnd = ad.position + ad.duration;
          if (nextAd.position < currentAdEnd) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad overlap detected, position updated from ' + nextAd.position + ' to ' + currentAdEnd + ' (id: ' + nextAd.adId + ')', _this2.handler.id);
            nextAd.position = currentAdEnd;
            nextAd.events.filter(function (event) {
              return event.position < currentAdEnd;
            }).forEach(function (event) {
              event.position = currentAdEnd;
            });
          }
        }
        lastAd = ad;
      });
      if (lastAd !== undefined) {
        var expectedDuration = lastAd.position + lastAd.duration - adBreak.position;
        if (adBreak.duration !== expectedDuration) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad break duration updated from ' + adBreak.duration + ' to ' + expectedDuration + ' (id: ' + adBreak.id + ')', this.handler.id);
          adBreak.duration = expectedDuration;
        }
      }
    }

    /**
     * Parse ad data JSON and merge with existing ad data
     *
     * @param data ad data JSON
     * @param ooba out-of-band ad related data
     */
  }, {
    key: "parseAdPods",
    value: function parseAdPods(data, ooba) {
      var _this3 = this;
      var sessionToken = data['sessiontoken'] || '';
      var timeReference = data['timereference_ms'] || 0;
      if (ooba === undefined) {
        // Set refresh delay if defined (2 to 5 secs)
        var refreshDelay = data['refresh_delay_ms'] || AdTrackingManager.SESSION_UPDATE_INTERVAL;
        if (refreshDelay >= 2000 && refreshDelay <= AdTrackingManager.SESSION_UPDATE_INTERVAL) {
          this.sessionUpdateInterval = refreshDelay;
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Setting refresh delay to ' + this.sessionUpdateInterval + 'ms', this.handler.id);
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Setting refresh delay to ' + AdTrackingManager.SESSION_UPDATE_INTERVAL + 'ms (default value)', this.handler.id);
        }
      }
      var adDataTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_40__.AdDataTracker(this, sessionToken, timeReference);
      var adPods = data['adpods'];
      if (Array.isArray(adPods)) {
        adPods.forEach(function (adPod) {
          var adBreakId = adPod['id'] || '';
          var startTime = adPod['starttime_ms'] + timeReference;
          var duration = adPod['duration_ms'] || 0;
          var ads = adPod['ads'];
          var adBreakTrackingEvents = adPod['adbreaktrackingevents'];

          // Create ad break
          var adBreakTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_40__.AdBreakTracker(adDataTracker, adBreakId, startTime, duration, _this3.isLive(), ooba);
          if (Array.isArray(adBreakTrackingEvents)) {
            adBreakTrackingEvents.forEach(function (adBreakTrackingEvent) {
              var callbackurl = adBreakTrackingEvent['callbackurl'];
              if (callbackurl !== undefined) {
                var type = adBreakTrackingEvent['type'];

                // no need to get time for ad break event tracker because start/end times are already handled in AdBreakTracker
                var adBreakEventTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_40__.AdBreakEventTracker(adBreakTracker, type, callbackurl);
                adBreakTracker.trackingEvents.push(adBreakEventTracker);
              }
            });
          }

          // Parse ads
          if (Array.isArray(ads)) {
            ads.forEach(function (ad, sequenceNumber) {
              var startTime = ad['starttime_ms'] + timeReference;
              var duration = ad['duration_ms'];
              var events = ad['trackingevents'];

              // Do not add ad with time_ms equal to 0, it means it is not fully proceeded by the BkYou
              var isValidAd = true;
              if (Array.isArray(events) && events.length > 0) {
                isValidAd = startTime > 0 && events[0]['time_ms'] > 0 || startTime === 0;
              }

              // Parse ad
              if (startTime !== undefined && duration !== undefined && isValidAd === true) {
                var _ad$videoclicks, _ad$videoclicks2, _ad$videoclicks3;
                var adType = _AdManager__WEBPACK_IMPORTED_MODULE_41__.AdType.getAdType(ad['adtype']);
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
                var adNonLinearInfo = ad['nonlinearinfo'] || [];
                var nonLinearInfo = [];
                adNonLinearInfo.forEach(function (element) {
                  nonLinearInfo.push({
                    creativeId: element.creativeid || '',
                    staticResource: element.staticresource || '',
                    iframeResource: element.iframeresource || '',
                    adParameters: element.adparameters || '',
                    trackingEvents: element.trackingevents || []
                  });
                });
                var errorURL = ad['errorurl'] || '';
                var adTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_40__.AdTracker(adType, adBreakTracker, sequenceNumber, startTime, duration, skippable, skippableTime, creativeId, adId, clickable, verifications, nonLinearInfo, errorURL);
                adBreakTracker.ads.push(adTracker);

                // Parse callback events
                if (Array.isArray(events)) {
                  events.forEach(function (event) {
                    var url = event['callbackurl'];
                    if (url !== undefined) {
                      var type = event['type'];
                      var offset = event['offset_ms'];
                      var time = event['time_ms'] + timeReference || startTime;
                      var adEventTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_40__.AdEventTracker(adTracker, type, url, offset, time);
                      adTracker.events.push(adEventTracker);
                    }
                  });
                }
              }
            });
          }

          // Separate in-band ads workflow
          if (ooba === undefined) {
            // Only add ad break with ads
            if (adBreakTracker.ads.length > 0) {
              adDataTracker.adBreaks.push(adBreakTracker);
            }
          } else {
            adDataTracker.outOfBandAdBreaks.push(adBreakTracker);
          }
        });
        adDataTracker.adBreaks.forEach(function (adBreak) {
          _this3.fixAdBreak(adBreak);
        });
      }

      // Separate in-band ads workflow
      if (ooba === undefined) {
        // Add all events to the database
        var dataUpdated = this.mergeEvents(adDataTracker);

        // Generate ad list
        this.adList = this.adData.adBreaks.map(function (adBreak) {
          return adBreak.toData();
        });

        // Send ad data even if there is no ad pod (BkYou not supporting bk-ml=2.0)
        this.notifyAdDataListener(dataUpdated);
      } else {
        // Add out-of-band ads to the database
        this.adData.outOfBandAdBreaks = [].concat(_toConsumableArray(this.adData.outOfBandAdBreaks), _toConsumableArray(adDataTracker.outOfBandAdBreaks));

        // Generate out-of-band ad list
        this.outOfBandAdList = this.adData.outOfBandAdBreaks.map(function (outOfBandAdBreak) {
          return outOfBandAdBreak.toData();
        });

        // Send out-of-band ad data
        this.notifyOutOfBandAdDataListener(this.outOfBandAdList);
      }
    }
  }, {
    key: "beginOutOfBandAdBreak",
    value: function beginOutOfBandAdBreak(adBreakId) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Calling beginOutOfBandAdBreak with id: ' + adBreakId, this.handler.id);
      var adBreakTracker = this.adData.outOfBandAdBreaks.find(function (adBreak) {
        return adBreak.id === adBreakId;
      });
      if (adBreakTracker) {
        // Set ad break and ads position to player position
        var playerPosition = this.playerAdapter.getPosition();
        adBreakTracker.position = playerPosition;
        adBreakTracker.processBegin();
        adBreakTracker.ads.map(function (adTracker) {
          adTracker.position = playerPosition;
          adTracker.processBegin();
          return adTracker;
        });
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.w(TAG, 'Out-of-band ad break with id ' + adBreakId + ' not found', this.handler.id);
      }
    }
  }, {
    key: "endOutOfBandAdBreak",
    value: function endOutOfBandAdBreak(adBreakId) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Calling endOutOfBandAdBreak() with id: ' + adBreakId, this.handler.id);
      var index = this.adData.outOfBandAdBreaks.findIndex(function (adBreak) {
        return adBreak.id === adBreakId;
      });
      if (index !== -1) {
        var adBreakTracker = this.adData.outOfBandAdBreaks[index];
        adBreakTracker.processEnd();
        adBreakTracker.ads.forEach(function (adTracker) {
          adTracker.processEnd();
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Deleting out-of-band ad break with id: ' + adBreakId, this.handler.id);
        this.adData.outOfBandAdBreaks.splice(index, 1);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.w(TAG, 'Out-of-band ad break with id ' + adBreakId + ' not found', this.handler.id);
      }
    }

    /**
     * Start the update position job
     */
  }, {
    key: "start",
    value: function start() {
      var _this4 = this;
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AdTrackingManager.POSITION_UPDATE_INTERVAL;
      var position = arguments.length > 1 ? arguments[1] : undefined;
      if (this.updatePositionJob === undefined) {
        // LoggerManager.d(TAG, 'Starting ad tracking...');
        this.updatePositionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().asyncDelay(delay, function () {
          _this4.updatePositionJob = undefined;

          // LoggerManager.d(TAG, 'onPositionUpdated');
          _this4.onPositionUpdated(position !== undefined ? position : _this4.playerAdapter.getPosition());
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking paused (player event)', this.handler.id);
        _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().cancel(this.updatePositionJob);
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
      var _this5 = this;
      var dataUpdated = false;

      // Set ad data the first time
      if (this.adData === undefined) {
        this.adData = adData;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, adData.adBreaks.length + ' ad break(s) parsed', this.handler.id);
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
          var _this5$currentAdTrack;
          // If ad break from memory not present in updated data and not playing the ad break, remove it
          if (!currentIds.includes(adBreak.id) && ((_this5$currentAdTrack = _this5.currentAdTracker) === null || _this5$currentAdTrack === void 0 ? void 0 : _this5$currentAdTrack.adBreak.id) !== adBreak.id) {
            var remove = true;
            // Except if AD_TRACKERS_STORE_DURATION has been set
            var adTrackersPeriod = _this5.handler.options.get(_session_streaming_StreamingSessionOptions__WEBPACK_IMPORTED_MODULE_37__.StreamingSessionOptions.AD_TRACKERS_STORE_DURATION);
            if (adTrackersPeriod !== undefined) {
              if (adTrackersPeriod === -1) {
                remove = false;
              } else {
                var startTime = Date.now() - adTrackersPeriod * 1000;
                if (adBreak.position + adBreak.duration > startTime) {
                  remove = false;
                }
              }
            }
            if (remove) {
              array.splice(index, 1);
              deletedAdCount++;
              dataUpdated = true;
            }
          }
        });

        // Update ad breaks (duration, ads list)
        adData.adBreaks.forEach(function (adBreak, index) {
          // Update ad data pointer
          adBreak.adData = _this5.adData;

          // Get ad break in memory if it exists
          var currentAdBreak = _this5.adData.adBreaks.find(function (currentAdBreak) {
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
            _this5.fixAdBreak(currentAdBreak);

            // Set ended flag to true if ad break ended
            // currentAdBreak.updateEnded(adData.lastRequest);
          } else {
            // Add the new ad break
            _this5.adData.adBreaks.push(adBreak);

            // Set ended flag to true if ad break ended
            // adBreak.updateEnded(adData.lastRequest);

            newAdCount += adBreak.ads.length;
            dataUpdated = true;
          }
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, this.adData.adBreaks.length + ' ad break(s) in total, ' + adData.adBreaks.length + ' ad break(s) parsed, ' + newAdCount + ' new ad(s), ' + deletedAdCount + ' deleted ad(s)', this.handler.id);
      }

      // Notify event array updated
      this.notifyAdsUpdated(this.adData);

      // Start if necessary
      if (this.started && !this.paused && !this.buffering) {
        var position = this.playerAdapter.getPosition();

        // If update position process stopped, reset last position to the current position
        if (this.updatePositionJob === undefined && this.adData.hasRemainingAdBreaks(position) > 0) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking resumed', this.handler.id);

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
      var _this6 = this;
      var positionStart = this.lastPosition !== currentPosition ? this.lastPosition : currentPosition - 1;
      var positionEnd = currentPosition;

      // If the BkYou json file is received asynchronously after first image
      if (this.firstFileReceived === true && this.firstFileProceeded === false) {
        this.firstFileProceeded = true;

        // Process all events from the beginning
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Processing all events since first image...', this.handler.id);
        if (this.positionHistory[this.positionHistory.length - 1].end === undefined) {
          // Patch end if doesn't exist
          this.positionHistory[this.positionHistory.length - 1].end = currentPosition;
        }
        this.positionHistory.forEach(function (playingPeriod) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Between ' + playingPeriod.start + ' and ' + playingPeriod.end, _this6.handler.id);
          _this6.lastPosition = playingPeriod.start;
          for (var i = playingPeriod.start; i <= playingPeriod.end + AdTrackingManager.POSITION_UPDATE_INTERVAL; i += AdTrackingManager.POSITION_UPDATE_INTERVAL) {
            var position = Math.min(i, playingPeriod.end);
            _this6.onPositionUpdated(position);
            _this6.lastPosition = position;
          }
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Tracking catch-up finished', this.handler.id);
      }
      if (positionStart < positionEnd && positionEnd - positionStart < AdTrackingManager.POSITION_SEEK_ERROR_DELTA /* 2 * AdTrackingManager.POSITION_UPDATE_INTERVAL*/) {
        var _this$adData, _this$adData2, _this$adData3, _this$adData4, _this$adData5;
        // Debug (to comment before release)
        /* const dStart = (positionStart + 1);
        const dEnd = positionEnd;
        LoggerManager.d(TAG, 'Processing trackers from ' + Math.floor(dStart / 1000) + '.' +
            (dStart - Math.floor(dStart / 1000) * 1000) + 'secs to ' + Math.floor(dEnd / 1000) + '.' +
            (dEnd - Math.floor(dEnd / 1000) * 1000) + 'ms', this.handler.id);*/

        // Ad break at the current position
        var adBreakTracker = (_this$adData = this.adData) === null || _this$adData === void 0 ? void 0 : _this$adData.adBreaks.find(function (adBreak) {
          return adBreak.position <= positionEnd && positionEnd < adBreak.position + adBreak.duration;
        });

        // Ad break at the current position + PREPARE_DELTA
        var nextAdBreakTracker = (_this$adData2 = this.adData) === null || _this$adData2 === void 0 ? void 0 : _this$adData2.adBreaks.find(function (adBreak) {
          return adBreak.position <= positionEnd + AdTrackingManager.POSITION_PREPARE_DELTA && positionEnd + AdTrackingManager.POSITION_PREPARE_DELTA < adBreak.position + adBreak.duration;
        });

        // Ad at the current position
        var adTracker = adBreakTracker === null || adBreakTracker === void 0 ? void 0 : adBreakTracker.ads.find(function (ad) {
          return ad.position <= positionEnd && positionEnd < ad.position + ad.duration;
        });

        // Ad at the current position + PREPARE_DELTA
        var nextAdTracker = nextAdBreakTracker === null || nextAdBreakTracker === void 0 ? void 0 : nextAdBreakTracker.ads.find(function (ad) {
          return ad.position <= positionEnd + AdTrackingManager.POSITION_PREPARE_DELTA && positionEnd + AdTrackingManager.POSITION_PREPARE_DELTA < ad.position + ad.duration;
        });
        nextAdBreakTracker === null || nextAdBreakTracker === void 0 || nextAdBreakTracker.processPrepare();
        nextAdTracker === null || nextAdTracker === void 0 || nextAdTracker.processPrepare();

        // ----------------------------------- In-band ads ----------------------------------- //
        // Current position in an ad
        if (adTracker !== undefined) {
          // Entering an ad
          if (this.currentAdTracker === undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Entering ad ' + adTracker.adId + '...', this.handler.id);
            var skipped = positionStart - adTracker.position >= AdTrackingManager.POSITION_SEEK_ERROR_DELTA;

            // If entering an ad, handle position start precision error
            if (!skipped) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Update position start from ' + positionStart + ' to ' + adTracker.position, this.handler.id);
              positionStart = adTracker.position;
            }

            // console.log('SKIPPED', skipped, positionStart);

            // Storing ad data
            this.currentAdData = adTracker.toData();
            this.currentAdBreakData = adBreakTracker.toData();

            // Process events
            adBreakTracker.processBegin();
            adTracker.processBegin();
            adTracker.updateProgression(positionStart, positionEnd);

            // Notify ad skipped
            if (skipped) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad skipped (previous position was ' + AdTrackingManager.POSITION_SEEK_ERROR_DELTA + 'ms after ad start)', this.handler.id);
              this.notifyAdSkipped(this.adData.sessionToken, adTracker);
            }
          } else if (this.currentAdTracker === adTracker) {
            // In the same ad
            adTracker.updateProgression(positionStart, positionEnd);
          } else if (this.currentAdTracker !== adTracker) {
            // Changing ad
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Changing from ad ' + this.currentAdTracker.adId + ' to ' + adTracker.adId + '...', this.handler.id);

            // Update current ad progression to 1.0
            if (adTracker.adBreak.id === this.currentAdTracker.adBreak.id) {
              this.currentAdTracker.updateProgression(positionStart, this.currentAdTracker.position + this.currentAdTracker.duration);
            }
            // If exiting ad before the end, count it as skipped
            if (this.currentAdTracker.progression < 1.0) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad skipped (progression not complete)', this.handler.id);
              this.notifyAdSkipped(this.adData.sessionToken, this.currentAdTracker);
            }
            // Process the previous ad
            this.currentAdTracker.processEnd();

            // Changing ad break
            if (adTracker.adBreak.id !== this.currentAdTracker.adBreak.id) {
              this.currentAdTracker.adBreak.processEnd();
              // this.currentAdTracker.adBreak.updateEnded(this.playerAdapter.getPosition());

              // Storing ad data
              this.currentAdData = adTracker.toData();
              this.currentAdBreakData = adBreakTracker.toData();
              adBreakTracker.processBegin();
            } else {
              // Storing ad data
              this.currentAdData = adTracker.toData();
            }

            // Process the current ad if canProcess() allows it
            adTracker.processBegin();

            // If changing ad after a seek, and the seek end position is not close to the ad start position, count it as skipped
            if (positionEnd - adTracker.position >= AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad skipped (new position is ' + AdTrackingManager.POSITION_SEEK_ERROR_DELTA + 'ms after ad start)', this.handler.id);
              this.notifyAdSkipped(this.adData.sessionToken, adTracker);
            } else {
              // Handle seek position precision error
              adTracker.updateProgression(adTracker.position, positionEnd);
            }
          }
          this.currentAdTracker = adTracker;
          this.currentAdBreakTracker = adBreakTracker;
        } else {
          // Exiting ad
          if (this.currentAdTracker !== undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Exiting ad ' + this.currentAdTracker.adId + '...', this.handler.id);

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
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad skipped (progression not complete)', this.handler.id);
              this.notifyAdSkipped(this.adData.sessionToken, this.currentAdTracker);
            }

            // Process the end events
            this.currentAdTracker.processEnd();

            // For LIVE contents, we need the response from the BkYou if the ad break is actually done
            // In some cases, we receive updated trackers too late, so we need to wait newer data before actually closing the ad
            // For VOD contents, end the break now
            if (adBreakTracker === undefined && !this.isLive()) {
              this.currentAdBreakTracker.processEnd();
              // this.currentAdBreakTracker.updateEnded(this.playerAdapter.getPosition());
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

        // ----------------------------------- Out-of-band ads ----------------------------------- //
        // Out-of-band ad breaks at the current position (can have multiple ones)
        // Only if duration is positive, the others don't depend on player position ("pause" for example)
        var outOfBandAdBreakTrackers = (_this$adData3 = this.adData) === null || _this$adData3 === void 0 ? void 0 : _this$adData3.outOfBandAdBreaks.filter(function (adBreak) {
          return adBreak.proceeded[1] === undefined && adBreak.duration > 0 && adBreak.position <= positionEnd && positionEnd < adBreak.position + adBreak.duration;
        });
        var outOfBandAdTrackers = outOfBandAdBreakTrackers.reduce(function (array, outOfBandAdBreakTracker) {
          return [].concat(_toConsumableArray(array), _toConsumableArray(outOfBandAdBreakTracker.ads.filter(function (ad) {
            return ad.proceeded[1] === undefined && ad.duration > 0 && ad.position <= positionEnd && positionEnd < ad.position + ad.duration;
          })));
        }, []);

        // Since there can be multiple out-of-band ad breaks / ads at once, an array is used to store current ones
        // Start ad breaks if necessary
        outOfBandAdBreakTrackers === null || outOfBandAdBreakTrackers === void 0 || outOfBandAdBreakTrackers.forEach(function (outOfBandAdBreakTracker) {
          // If has not began yet
          if (_this6.currentOutOfBandAdBreakTrackers.find(function (currentOutOfBandAdBreak) {
            return currentOutOfBandAdBreak.id === outOfBandAdBreakTracker.id;
          }) === undefined) {
            // Entering out-of-band ad break
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Entering out-of-band ad break ' + outOfBandAdBreakTracker.id + '...', _this6.handler.id);
            outOfBandAdBreakTracker.processBegin();
            _this6.currentOutOfBandAdBreakTrackers.push(outOfBandAdBreakTracker);
          } else {
            // In the same out-of-band ad break
          }
        });

        // Start ads if necessary
        outOfBandAdTrackers.forEach(function (outOfBandAdTracker) {
          // If has not began yet
          if (_this6.currentOutOfBandAdTrackers.find(function (currentOutOfBandAd) {
            return currentOutOfBandAd.adId === outOfBandAdTracker.adId;
          }) === undefined) {
            // Entering out-of-band ad
            outOfBandAdTracker.processBegin();
            _this6.currentOutOfBandAdTrackers.push(outOfBandAdTracker);
          } else {
            // In the same out-of-band ad
            outOfBandAdTracker.updateProgression(positionStart, positionEnd);
          }
        });

        // Check if ended out-of-band ads
        this.currentOutOfBandAdTrackers.forEach(function (currentOutOfBandAdTracker, i) {
          // If not among the out-of-band ad at current position
          if (outOfBandAdTrackers.find(function (outOfBandAd) {
            return outOfBandAd.adId === currentOutOfBandAdTracker.adId;
          }) === undefined) {
            currentOutOfBandAdTracker.processEnd();
            _this6.currentOutOfBandAdTrackers.splice(i, 1);
          }
        });

        // Check if ended out-of-band ad breaks
        this.currentOutOfBandAdBreakTrackers.forEach(function (currentOutOfBandAdBreakTracker, i) {
          // If not among the out-of-band ad breaks at current position
          if (outOfBandAdBreakTrackers.find(function (outOfBandAdBreak) {
            return outOfBandAdBreak.id === currentOutOfBandAdBreakTracker.id;
          }) === undefined) {
            currentOutOfBandAdBreakTracker.processEnd();
            _this6.currentOutOfBandAdBreakTrackers.splice(i, 1);
          }
        });

        // ----------------------------------- Back to in-band ads workflow ----------------------------------- //
        // Keep last position for next iteration
        this.lastPosition = currentPosition;

        // If events remaining, continue the tracking
        if ((_this$adData4 = this.adData) !== null && _this$adData4 !== void 0 && _this$adData4.hasRemainingAdBreaks(positionEnd) || ((_this$adData5 = this.adData) === null || _this$adData5 === void 0 ? void 0 : _this$adData5.outOfBandAdBreaks.length) > 0) {
          if (!this.paused && !this.buffering) {
            // Optimize update timing by synchronizing with ad begin/end instead of waiting default 1s intervals
            // Allows to trigger public events (onAdBegin, onAdEnd...) precisely
            // If update happens within the next 1.2s, schedule the update to coincide with that event
            // Use 1.2s threshold (20% buffer over default 1s interval) to avoid scheduling updates too close together
            // Use ad begin/end position instead of player position because some players update their position asynchronously

            var nextUpdateTime = AdTrackingManager.POSITION_UPDATE_INTERVAL;
            var nextPosition;
            if (nextAdTracker !== undefined) {
              var adIncomingTime = nextAdTracker.position - currentPosition;
              if (adIncomingTime > 0 && adIncomingTime < AdTrackingManager.NEAR_AD_DELTA) {
                nextUpdateTime = adIncomingTime;
                nextPosition = nextAdTracker.position;
                _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.getInstance().printDebugLogs(TAG, 'Ad incoming in ' + adIncomingTime + 'ms', this.handler.id);
              }
            }
            if (adTracker !== undefined) {
              var adRemainingTime = adTracker.position + adTracker.duration - currentPosition;
              if (adRemainingTime > 0 && adRemainingTime < AdTrackingManager.NEAR_AD_DELTA) {
                nextUpdateTime = adRemainingTime;
                nextPosition = adTracker.position + adTracker.duration;
                _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.getInstance().printDebugLogs(TAG, 'Ad ending in ' + adRemainingTime + 'ms', this.handler.id);
              }
            }
            nextUpdateTime = Math.round(nextUpdateTime);
            this.start(nextUpdateTime, nextPosition);
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking paused (playback paused, onPositionUpdated)', this.handler.id);
          }
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, onPositionUpdated)', this.handler.id);
        }
      } else {
        var _this$adData6;
        if ((_this$adData6 = this.adData) !== null && _this$adData6 !== void 0 && _this$adData6.hasRemainingAdBreaks(positionEnd)) {
          if (!this.paused && !this.buffering) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Processing trackers from ' + positionStart + 'ms to ' + positionEnd + 'ms, resuming tracking...', this.handler.id);
            this.start();
          }
        }
      }
    }
  }, {
    key: "checkStart",
    value: function checkStart() {
      var _this$adData7, _this$adData8;
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.playerAdapter.getPosition();
      // If events remaining, continue the tracking
      if (((_this$adData7 = this.adData) === null || _this$adData7 === void 0 ? void 0 : _this$adData7.hasRemainingAdBreaks(position)) > 0 || ((_this$adData8 = this.adData) === null || _this$adData8 === void 0 ? void 0 : _this$adData8.outOfBandAdBreaks.length) > 0) {
        this.onPositionUpdated(position);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, checkStart)', this.handler.id);
      }
    }
  }, {
    key: "checkAdBreakEnded",
    value: function checkAdBreakEnded(position) {
      var positionStart = this.lastPosition !== position ? this.lastPosition : position - 1;
      var positionEnd = position;
      if (positionStart < positionEnd && positionEnd - positionStart < AdTrackingManager.POSITION_SEEK_ERROR_DELTA /* 2 * AdTrackingManager.POSITION_UPDATE_INTERVAL*/) {
        var _this$adData9;
        // Ad break at the current position
        var adBreakTracker = (_this$adData9 = this.adData) === null || _this$adData9 === void 0 ? void 0 : _this$adData9.adBreaks.find(function (adBreak) {
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
            // this.currentAdBreakTracker.updateEnded(this.playerAdapter.getPosition());
            this.currentAdBreakTracker = undefined;

            // Storing ad data
            this.currentAdBreakData = undefined;
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad break end detected', this.handler.id);
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad break not yet ended', this.handler.id);
          }
        }
      }
    }
  }, {
    key: "adUserInteraction",
    value: function adUserInteraction(interactionType) {
      var _this$currentAdTracke,
        _this7 = this;
      (_this$currentAdTracke = this.currentAdTracker) === null || _this$currentAdTracke === void 0 || (_this$currentAdTracke = _this$currentAdTracke.clickable) === null || _this$currentAdTracke === void 0 || _this$currentAdTracke.trackers.forEach(function (tracker) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Requesting click tracker ' + tracker.clickurl, _this7.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().adEvent(_this7.handler, tracker.clickurl);
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
     * Return the position including current ads with the position in the content without ads
     * Can be called after or inside onAdData
     * For VOD contents only
     *
     * @param positionInBookmark position in the content without ad (with the stored value got from the method getPositionForBookmark())
     * @param beforeAdBreak if set to true, return position before ad break
     * @returns {number} Position including current ads
     */
  }, {
    key: "getPositionForPlayback",
    value: function getPositionForPlayback(positionInBookmark, beforeAdBreak) {
      var position = positionInBookmark;

      // Sort ad break by startPosition
      var adList = this.adList.sort(function (a, b) {
        return a.startPosition - b.startPosition;
      });
      var lastAdBreak;
      var _iterator = _createForOfIteratorHelper(adList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var adBreak = _step.value;
          // If the current ad break is after the position, the calculation is done
          if (adBreak.startPosition > position) {
            break;
          } else {
            // Else, add the current ad break duration
            position += adBreak.duration;

            // Update with last used ad break
            lastAdBreak = adBreak;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return beforeAdBreak === true && lastAdBreak !== undefined && position === lastAdBreak.startPosition + lastAdBreak.duration ? lastAdBreak.startPosition : position;
    }

    // Return the total ads duration in the content, in milliseconds
  }, {
    key: "getTotalAdsDuration",
    value: function getTotalAdsDuration() {
      if (this.isLive()) {
        return -1;
      }
      return this.adList.reduce(function (total, adBreak) {
        return adBreak.duration < 0 ? total : total + adBreak.duration;
      }, 0);
    }
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      var _this8 = this,
        _this$adPalSession;
      // Init variables
      this.started = true;
      this.paused = false;
      this.buffering = false;
      this.lastPosition = startPosition;
      this.firstImageDate = Date.now();
      this.positionHistory.push({
        start: startPosition
      });
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad tracking enabled (live:' + this.isLive() + ')', this.handler.id);

      // Workaround because BkYou not returning vod/live in tracking
      // When accessing the tracking file before opening the manifest (bk-ml=2.0 workflow), we don't know if the content is live or vod
      // In case of live, ad break duration is -1
      if (this.adData !== undefined) {
        this.adList = this.adData.adBreaks.map(function (adBreak) {
          adBreak.live = _this8.isLive();
          return adBreak.toData();
        });
      }

      // Start if necessary
      this.checkStart(startPosition);

      // Update BkYou session
      this.updateBkYouSession();

      // Show error if the content is LIVE but the duration is not a timestamp
      if (this.isLive() && this.playerAdapter.getPosition() < 1262300400000) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.e(TAG, 'The player position does not return a position as a timestamp in millis. The ad tracking might not work.', this.handler.id);
      }

      // Call PAL SDK API through target adPalSession
      (_this$adPalSession = this.adPalSession) === null || _this$adPalSession === void 0 || _this$adPalSession.sendPlaybackStart();
    }
  }, {
    key: "onPause",
    value: function onPause() {
      var playerPosition = this.playerAdapter.getPosition();
      if (!this.buffering && !this.firstFileProceeded) {
        this.positionHistory[this.positionHistory.length - 1].end = playerPosition;
      }

      // Stop tracking
      this.paused = true;
      this.stop();

      // Process event at the paused position
      if (this.lastPosition !== playerPosition) {
        this.onPositionUpdated(playerPosition);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
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

        // Save start position for async workflow
        if (this.firstFileProceeded === false) {
          this.positionHistory.push({
            start: this.lastPosition
          });
        }

        // Handle bad position when resuming
        if (Math.abs(this.lastPosition - this.lastPositionBeforePause) < 1000) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Reverting position because of bad position when resuming...', this.handler.id);
          this.lastPosition = this.lastPositionBeforePause;
          this.lastPositionBeforePause = 0;
        }
        this.checkStart();
      }
    }
  }, {
    key: "onBufferingStart",
    value: function onBufferingStart() {
      var playerPosition = this.playerAdapter.getPosition();
      if (this.buffering === false && this.firstFileProceeded === false) {
        // Playback has stopped
        this.positionHistory[this.positionHistory.length - 1].end = playerPosition;
      }

      // Stop tracking
      this.buffering = true;
      this.stop();

      // Process event at the buffering position
      if (this.lastPosition !== playerPosition) {
        this.onPositionUpdated(playerPosition);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
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

        // Save position for async workflow
        if (this.firstFileProceeded === false) {
          if (this.positionHistory.length > 0 && this.positionHistory[this.positionHistory.length - 1].end === undefined) {
            // Patch end if doesn't exist
            this.positionHistory[this.positionHistory.length - 1].end = this.lastPosition;
          }
          this.positionHistory.push({
            start: playerPosition
          });
        }
        if (this.lastPosition !== playerPosition) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Position updated during buffering, period switch ?', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Reverting position because of seek...', this.handler.id);
          this.lastPosition = this.lastPositionAfterSeek;
          this.lastPositionAfterSeek = 0;
        }
        this.checkStart();
      }
    }
  }, {
    key: "handlePlayerSeek",
    value: function handlePlayerSeek(start, end, lastPosition) {
      if (end < start) {
        var _this$adData10;
        // Backward seek
        // Ignore if < 2 seconds (period switch error)
        if (start - end < 2000) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ignoring seek...', this.handler.id);
          this.lastPosition = start;
          this.onPositionUpdated(start);
          return;
        }
        // Else reset trackers
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + end, this.handler.id);
        (_this$adData10 = this.adData) === null || _this$adData10 === void 0 || _this$adData10.resetProgression(end);
      } else {
        // Forward seek
        // Catch-up events from seek start (or buffering start) to seek end
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Small seek detected, proceeding events from ' + lastPosition + ' to ' + end, this.handler.id);
        for (var i = lastPosition; i <= end; i += AdTrackingManager.POSITION_UPDATE_INTERVAL) {
          var position = Math.min(i + AdTrackingManager.POSITION_UPDATE_INTERVAL, end);
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Between ' + i + ' and ' + position, this.handler.id);
          this.lastPosition = i;
          this.onPositionUpdated(position);
        }
      }
    }
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      var _this$adData11;
      // Save position for async workflow
      if (this.firstFileProceeded === false && this.buffering === false) {
        this.positionHistory[this.positionHistory.length - 1].end = start;
        this.positionHistory.push({
          start: end
        });
      }

      // Don't remember what this is doing...
      //   If buffering, use position from buffering start instead of seek start (fix a player behavior)
      //   If not buffering, this condition will never be true I guess since lastPosition is update every second
      if (start < this.lastPosition && this.lastPosition - start < AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Updating seek start position from ' + start + ' to ' + this.lastPosition, this.handler.id);
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

      // Handle seek during period switch, the player can generate small seek (< 6 secs) and it has to be distinguished from a user seek
      if (Math.abs(end - start) < AdTrackingManager.POSITION_SEEK_ERROR_DELTA) {
        this.handlePlayerSeek(start, end, lastPosition);
        return;
      }

      // Notify skip even though we might still be in the same ad
      if (this.currentAdTracker !== undefined) {
        this.notifyAdSkipped(this.adData.sessionToken, this.currentAdTracker);
      }

      // Process event at the seeked position
      this.onPositionUpdated(end);

      // Reset progression
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + end, this.handler.id);
      (_this$adData11 = this.adData) === null || _this$adData11 === void 0 || _this$adData11.resetProgression(end);
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
        _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().cancel(this.updateSessionJob);
      }

      // Call PAL SDK API through target adPalSession
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
      var _this9 = this;
      this.listeners.forEach(function (listener) {
        _this9.notifyEvent(listener, 'onAdBreakData', adBreakData);
      });
    }
  }, {
    key: "notifyAdBreakBegin",
    value: function notifyAdBreakBegin(sessionToken) {
      var _this10 = this;
      this.listeners.forEach(function (listener) {
        _this10.notifyEvent(listener, 'onAdBreakBegin', sessionToken);
      });
    }
  }, {
    key: "notifyAdData",
    value: function notifyAdData(ad) {
      var _this11 = this;
      this.listeners.forEach(function (listener) {
        _this11.notifyEvent(listener, 'onAdData', ad);
      });
    }
  }, {
    key: "notifyAdBegin",
    value: function notifyAdBegin(sessionToken, ad) {
      var _this12 = this,
        _this$adPalSession3;
      this.listeners.forEach(function (listener) {
        _this12.notifyEvent(listener, 'onAdBegin', sessionToken, ad.creativeId, ad.adId);
      });

      // Call PAL SDK API through target adPalSession
      // Deprecated in latest versions, kept for retrocompatibility
      (_this$adPalSession3 = this.adPalSession) === null || _this$adPalSession3 === void 0 || _this$adPalSession3.sendAdImpression();
    }
  }, {
    key: "notifyAdSkippable",
    value: function notifyAdSkippable(sessionToken) {
      var _this13 = this;
      this.listeners.forEach(function (listener) {
        _this13.notifyEvent(listener, 'onAdSkippable', sessionToken);
      });
    }
  }, {
    key: "notifyAdProgress",
    value: function notifyAdProgress(sessionToken, ad, progress) {
      var _this14 = this;
      this.listeners.forEach(function (listener) {
        _this14.notifyEvent(listener, 'onAdProgress', sessionToken, ad.creativeId, ad.adId, progress);
      });
    }
  }, {
    key: "notifyAdSkipped",
    value: function notifyAdSkipped(sessionToken, ad) {
      var _this15 = this;
      var otherSkippedAdIds = [];
      ad.adBreak.ads.forEach(function (e) {
        // check if other ads were skipped following the current one
        // ad position > current ad position
        // player position > ad position + ad duration (full ad)
        if (e.position > ad.position && _this15.lastPosition >= e.position + e.duration) {
          otherSkippedAdIds.push(e.adId);
        }
      });
      this.listeners.forEach(function (listener) {
        _this15.notifyEvent(listener, 'onAdSkipped', sessionToken, ad.creativeId, ad.adId, otherSkippedAdIds);
      });
    }
  }, {
    key: "notifyAdEnd",
    value: function notifyAdEnd(sessionToken, ad) {
      var _this16 = this;
      // Force session update at ad end (useful for small segment contents)
      if (this.isLive()) {
        if (this.updateSessionJob !== undefined) {
          _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().cancel(this.updateSessionJob);
        }
        this.updateBkYouSession();
      }
      this.listeners.forEach(function (listener) {
        _this16.notifyEvent(listener, 'onAdEnd', sessionToken, ad.creativeId, ad.adId);
      });
    }
  }, {
    key: "notifyAdBreakEnd",
    value: function notifyAdBreakEnd(sessionToken) {
      var _this17 = this;
      this.listeners.forEach(function (listener) {
        _this17.notifyEvent(listener, 'onAdBreakEnd', sessionToken);
      });
    }
  }, {
    key: "notifyAdsUpdated",
    value: function notifyAdsUpdated(adData) {
      var _this18 = this;
      this.listeners.forEach(function (listener) {
        _this18.notifyEvent(listener, 'onAdsUpdated', adData);
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
      var firstData = this.podsSentNumber === 0 && this.firstFileProceeded === false && Date.now() - firstImageDate <= AdTrackingManager.POSITION_START_DELTA;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'On ad data (firstData: ' + firstData + ', dataUpdated: ' + dataUpdated + ')', this.handler.id);
      if (firstData === true || dataUpdated === true) {
        var _this$handler$adSessi;
        this.podsSentNumber = this.adList.length;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'On ad data (length: ' + this.podsSentNumber + ')', this.handler.id);
        if (((_this$handler$adSessi = this.handler.adSession) === null || _this$handler$adSessi === void 0 || (_this$handler$adSessi = _this$handler$adSessi.adDataListener) === null || _this$handler$adSessi === void 0 ? void 0 : _this$handler$adSessi.onAdData) !== undefined) {
          this.handler.adSession.adDataListener.onAdData(this.adList);
        }
      }
    }

    /**
     * Trigger event onOutOfBandAdData registered through session.setOnAdDataListener(...)
     */
  }, {
    key: "notifyOutOfBandAdDataListener",
    value: function notifyOutOfBandAdDataListener(outOfBandAdList) {
      var _this$handler$adSessi2;
      if (((_this$handler$adSessi2 = this.handler.adSession) === null || _this$handler$adSessi2 === void 0 || (_this$handler$adSessi2 = _this$handler$adSessi2.adDataListener) === null || _this$handler$adSessi2 === void 0 ? void 0 : _this$handler$adSessi2.onOutOfBandAdData) !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.i(TAG, 'Out-of-band ad breaks updated, notifying onOutOfBandAdData', this.handler.id);
        this.handler.adSession.adDataListener.onOutOfBandAdData(outOfBandAdList);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.i(TAG, 'Out-of-band ad breaks updated, add onOutOfBandAdData listener to access current list', this.handler.id);
      }
    }
  }, {
    key: "requestOutOfBandAds",
    value: function requestOutOfBandAds(name, duration, autoBegin, additionalQueryParams) {
      var _this19 = this;
      var adGatewayURL = _utils_URL__WEBPACK_IMPORTED_MODULE_39__["default"].clone(this.handler.sessionReport.redirectedURL);
      adGatewayURL.setParam('bk-ml', '1.0');
      adGatewayURL.setParam('bk-ooba', name);
      if (duration !== undefined) {
        adGatewayURL.setParam('bk-ooba-dur', duration);
      }
      for (var key in additionalQueryParams) {
        var value = additionalQueryParams[key];
        adGatewayURL.setParam(key, value);
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.i(TAG, 'Sending request to the ad gateway: ' + adGatewayURL, this.handler.id);
      var headers = _request_RequestManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().getHeaders();

      // Request ad gateway with 5s timeout
      _service_JobManager__WEBPACK_IMPORTED_MODULE_35__["default"].getInstance().asyncGet(adGatewayURL.href, headers, AdTrackingManager.OOBA_REQUEST_TIMEOUT, function (result) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad gateway responded ' + result.statusCode, _this19.handler.id);
        // Parse ad data
        if (result.statusCode >= 200 && result.statusCode < 300) {
          var data;
          try {
            data = JSON.parse(result.body);
          } catch (e) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad gateway file unreadable (parsing)', _this19.handler.id);
            // Notify with empty list
            _this19.notifyOutOfBandAdDataListener([]);
            return;
          }

          // Save parameters used for requesting out-of-band ads
          var ooba = {
            name: name,
            duration: duration,
            autoBegin: autoBegin,
            additionalQueryParams: additionalQueryParams
          };
          _this19.parseAdPods(data, ooba);

          // Only start newly created ad breaks
          if (autoBegin === true) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.i(TAG, 'requestOutOfBandAds autoBegin set to true, calling beginOutOfBandAdBreak now', _this19.handler.id);
            data['adpods'].forEach(function (adpod) {
              _this19.beginOutOfBandAdBreak(adpod['id']);
            });
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.i(TAG, 'requestOutOfBandAds autoBegin set to false, call beginOutOfBandAdBreak to begin ad breaks', _this19.handler.id);
          }
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Ad gateway response unreadable (status code)', _this19.handler.id);
          // Notify with empty list
          _this19.notifyOutOfBandAdDataListener([]);
        }
      });
    }
  }, {
    key: "sendTracker",
    value: function sendTracker(trackingEventName, adId, creativeId) {
      var _adNonLinearInfo$trac,
        _adNonLinearInfo,
        _this20 = this;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.i(TAG, 'Calling sendTracker(' + trackingEventName + ', ' + adId + (creativeId ? ', ' + creativeId : '') + ')', this.id);

      // Cannot rely on currentOutOfBandAdTrackers because it doesn't contain ads with duration 0
      // So we look in all ads and it's up to the app integrator to use the correct adId
      var allAds = [].concat(_toConsumableArray(this.adData.adBreaks), _toConsumableArray(this.adData.outOfBandAdBreaks)).flatMap(function (adBreak) {
        return adBreak.ads;
      });
      var adTracker = allAds.find(function (ad) {
        return ad.adId === adId;
      });
      if (adTracker === undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.e(TAG, 'No match for adId: ' + adId, this.id);
        return;
      }

      // If ad is nonlinear or linear_and_nonlinear, there are additional trackers in nonLinearInfo
      // The ad can have multiple nonLinearInfos (aka creatives), so we must find the correct one
      var adNonLinearInfo;
      if (adTracker.nonLinearInfo.length > 0) {
        // By default, use the first one
        adNonLinearInfo = adTracker.nonLinearInfo[0];

        // If a creativeId is provided, find matching nonLinearInfo
        if (creativeId !== undefined) {
          adNonLinearInfo = adTracker.nonLinearInfo.find(function (nonLinearInfo) {
            return nonLinearInfo.creativeId === creativeId;
          });
          if (adNonLinearInfo === undefined) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.e(TAG, 'No match for creativeId: ' + creativeId, this.id);
          }
        }
      }
      var nonLinearTrackingEvents = (_adNonLinearInfo$trac = (_adNonLinearInfo = adNonLinearInfo) === null || _adNonLinearInfo === void 0 ? void 0 : _adNonLinearInfo.trackingEvents) !== null && _adNonLinearInfo$trac !== void 0 ? _adNonLinearInfo$trac : [];

      // Now that we have all events, we can filter by name
      var events = [].concat(_toConsumableArray(adTracker.events), _toConsumableArray(nonLinearTrackingEvents)).filter(function (event) {
        return event.type === trackingEventName;
      });
      if (events.length === 0) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.e(TAG, 'No match for trackingEventName: ' + trackingEventName, this.id);
      }
      events.forEach(function (event) {
        var url = event['url'] || event['callbackurl'];
        if (url === undefined) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'No url found for event ' + event.type, _this20.handler.id);
          return;
        }
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_38__.LoggerManager.d(TAG, 'Requesting ' + url, _this20.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().adEvent(_this20.handler, url);
      });
    }
  }]);
}();
_AdTrackingManager = AdTrackingManager;
_defineProperty(AdTrackingManager, "POSITION_UPDATE_INTERVAL", 1000);
_defineProperty(AdTrackingManager, "POSITION_START_DELTA", 4000);
_defineProperty(AdTrackingManager, "POSITION_SEEK_ERROR_DELTA", 6000);
_defineProperty(AdTrackingManager, "POSITION_PREPARE_DELTA", 3000);
_defineProperty(AdTrackingManager, "SESSION_UPDATE_INTERVAL", 5000);
_defineProperty(AdTrackingManager, "NEAR_AD_DELTA", _AdTrackingManager.POSITION_UPDATE_INTERVAL * 1.2);
_defineProperty(AdTrackingManager, "OOBA_REQUEST_TIMEOUT", 5000);


/***/ }),

/***/ "./src_core/index.ad.js":
/*!******************************!*\
  !*** ./src_core/index.ad.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdBreakEventTracker: function() { return /* reexport safe */ _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdBreakEventTracker; },
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
/* harmony export */   AdType: function() { return /* reexport safe */ _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdType; },
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
  AdBreakEventTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdBreakEventTracker,
  AdTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdTracker,
  AdEventTracker: _ad_tracking_AdTracker__WEBPACK_IMPORTED_MODULE_3__.AdEventTracker,
  AdManager: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdManager,
  AdViewState: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdViewState,
  AdFriendlyObstructionPurpose: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdFriendlyObstructionPurpose,
  AdType: _ad_AdManager__WEBPACK_IMPORTED_MODULE_4__.AdType,
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkOMSDKMgr';
var OMSDKHandler = /*#__PURE__*/function () {
  function OMSDKHandler() {
    _classCallCheck(this, OMSDKHandler);
  }
  return _createClass(OMSDKHandler, [{
    key: "createOMAdSession",
    value:
    // eslint-disable-line no-unused-vars
    function createOMAdSession(partnerName, partnerVersion, customReferenceData, verificationData, callback) {}
  }]);
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
  return _createClass(OMSDKManager, [{
    key: "init",
    value: function init() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Initializing OM SDK manager...');
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Attaching OM SDK handler...');
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
      if (!_instance._) {
        _instance._ = new OMSDKManager();
      }
      return _instance._;
    }
  }]);
}();
var _instance = {
  _: void 0
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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _OMSDKManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./OMSDKManager */ "./src_core/plugins/omsdk/OMSDKManager.js");
/* harmony import */ var _ad_tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../ad/tracking/AdTrackingManager */ "./src_core/ad/tracking/AdTrackingManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TAG = 'BpkOMSessionHandler';
var OMSessionHandler = /*#__PURE__*/function () {
  function OMSessionHandler(handler, playerAdapter) {
    _classCallCheck(this, OMSessionHandler);
    _defineProperty(this, "handler", void 0);
    /** 
     * SmartLib ad session 
     */
    _defineProperty(this, "adSession", void 0);
    _defineProperty(this, "playerAdapter", void 0);
    _defineProperty(this, "internalAdManager", void 0);
    _defineProperty(this, "omsdkHandler", void 0);
    /** 
     * OM SDK ad session
     */
    _defineProperty(this, "omAdSession", void 0);
    _defineProperty(this, "firstImageDate", void 0);
    _defineProperty(this, "adBreakPosition", void 0);
    _defineProperty(this, "pause", void 0);
    _defineProperty(this, "buffering", void 0);
    this.handler = handler;
    this.adSession = handler.adSession;
    this.playerAdapter = playerAdapter;
    this.internalAdManager = this.handler.smartLib.internalAdManager;
    this.omsdkHandler = _OMSDKManager__WEBPACK_IMPORTED_MODULE_21__["default"].getInstance().omsdkHandler;
    this.firstImageDate = 0;
    this.adBreakPosition = 'midroll';
    this.pause = false;
    this.buffering = false;
  }
  return _createClass(OMSessionHandler, [{
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
      } else if (Date.now() - this.firstImageDate < _ad_tracking_AdTrackingManager__WEBPACK_IMPORTED_MODULE_22__["default"].POSITION_START_DELTA) {
        this.adBreakPosition = 'preroll';
      } else {
        this.adBreakPosition = 'midroll';
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Ad break position is ' + this.adBreakPosition, this.handler.id);
    }
  }, {
    key: "onPrepareAdBreak",
    value: function onPrepareAdBreak(sessionToken) {}
  }, {
    key: "onAdBreakBegin",
    value: function onAdBreakBegin(sessionToken) {}
  }, {
    key: "startAdSession",
    value: function startAdSession(omAdSession, adData) {
      var _this$adSession,
        _this$adSession2,
        _this = this,
        _this$adSession3;
      this.omAdSession = omAdSession;

      // Set the ad view if it has been registered before the ad break (Android, iOS)
      if (((_this$adSession = this.adSession) === null || _this$adSession === void 0 ? void 0 : _this$adSession.adView) !== undefined) {
        this.omAdSession.setAdView(this.adSession.adView);
      }

      // Register native elements that belong to the ad, such as a close button, some logo text or another decoration (Android, iOS)
      if (((_this$adSession2 = this.adSession) === null || _this$adSession2 === void 0 ? void 0 : _this$adSession2.adFriendlyObstructionViews.length) > 0) {
        this.adSession.adFriendlyObstructionViews.forEach(function (item) {
          _this.omAdSession.registerAdFriendlyObstructionView(item.view, item.purpose, item.reason);
        });
      }
      this.omAdSession.start();

      // Set the ad view state if it has been registered before the ad break
      if (((_this$adSession3 = this.adSession) === null || _this$adSession3 === void 0 ? void 0 : _this$adSession3.adViewState) !== undefined) {
        this.omAdSession.setAdViewState(this.adSession.adViewState);
      }
      if (adData.skippable === true) {
        this.omAdSession.loaded(adData.skippablePosition - adData.position, adData.duration, this.adBreakPosition, this.playerAdapter.getVolume());
      } else {
        this.omAdSession.loaded(-1, adData.duration, this.adBreakPosition, this.playerAdapter.getVolume());
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'OM ad session loaded', this.handler.id);
    }
  }, {
    key: "onAdData",
    value: function onAdData(adData) {
      var _this$adSession4,
        _this$adSession5,
        _this2 = this;
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
      if (((_this$adSession4 = this.adSession) === null || _this$adSession4 === void 0 ? void 0 : _this$adSession4.adVerificationData) !== undefined) {
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
      var omAdSession = this.omsdkHandler.createOMAdSession(this.internalAdManager.omPartnerName, this.internalAdManager.omPartnerVersion, (_this$adSession5 = this.adSession) === null || _this$adSession5 === void 0 ? void 0 : _this$adSession5.adCustomReference, adVerificationData, function (result) {
        // Handle iOS
        _this2.startAdSession(result, adData);
      });

      // Handle Android and Web
      if (omAdSession !== undefined) {
        this.startAdSession(omAdSession, adData);
      }
    }
  }, {
    key: "onPrepareAd",
    value: function onPrepareAd(sessionToken, creativeId, adId) {}
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.d(TAG, 'Volume is now ' + volume, this.handler.id);
      (_this$omAdSession9 = this.omAdSession) === null || _this$omAdSession9 === void 0 || _this$omAdSession9.volumeChange(volume);
    }
  }, {
    key: "onPlayerError",
    value: function onPlayerError(broadpeakStatusCode, playerErrorCode) {
      var _this$omAdSession10;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.e(TAG, 'Broadpeak status code ' + broadpeakStatusCode, this.handler.id);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_20__.LoggerManager.e(TAG, 'Player error code ' + playerErrorCode, this.handler.id);
      (_this$omAdSession10 = this.omAdSession) === null || _this$omAdSession10 === void 0 || _this$omAdSession10.error(broadpeakStatusCode, playerErrorCode);
    }
  }]);
}();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpVyxtQkFBQSxlQUFoQkEsbUJBQUEsQ0FBa0JDLEtBQUssQ0FBQ0gsbUJBQW1CLEVBQUVDLGVBQWUsQ0FBQztJQUNqRTtFQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmxhdHRlbi1pbnRvLWFycmF5LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC1pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0Lml0ZXJhdG9yLnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL21ldHJpY3MvQWRNZXRyaWNzLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYWQvbWV0cmljcy9BZE1ldHJpY3NNYW5hZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYWQvdHJhY2tpbmcvQWRUcmFja2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYWQvdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9pbmRleC5hZC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3BsdWdpbnMvb21zZGsvT01TREtNYW5hZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvcGx1Z2lucy9vbXNkay9PTVNlc3Npb25IYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYWRTbWFydExpYk1vZHVsZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhZFNtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFkU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG59KSgoZnVuY3Rpb24oKSB7IHJldHVybiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCl9KSgpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIndXNlIHN0cmljdCc7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xuXG4vLyBgRmxhdHRlbkludG9BcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG52YXIgZmxhdHRlbkludG9BcnJheSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9yaWdpbmFsLCBzb3VyY2UsIHNvdXJjZUxlbiwgc3RhcnQsIGRlcHRoLCBtYXBwZXIsIHRoaXNBcmcpIHtcbiAgdmFyIHRhcmdldEluZGV4ID0gc3RhcnQ7XG4gIHZhciBzb3VyY2VJbmRleCA9IDA7XG4gIHZhciBtYXBGbiA9IG1hcHBlciA/IGJpbmQobWFwcGVyLCB0aGlzQXJnKSA6IGZhbHNlO1xuICB2YXIgZWxlbWVudCwgZWxlbWVudExlbjtcblxuICB3aGlsZSAoc291cmNlSW5kZXggPCBzb3VyY2VMZW4pIHtcbiAgICBpZiAoc291cmNlSW5kZXggaW4gc291cmNlKSB7XG4gICAgICBlbGVtZW50ID0gbWFwRm4gPyBtYXBGbihzb3VyY2Vbc291cmNlSW5kZXhdLCBzb3VyY2VJbmRleCwgb3JpZ2luYWwpIDogc291cmNlW3NvdXJjZUluZGV4XTtcblxuICAgICAgaWYgKGRlcHRoID4gMCAmJiBpc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnRMZW4gPSBsZW5ndGhPZkFycmF5TGlrZShlbGVtZW50KTtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIGVsZW1lbnQsIGVsZW1lbnRMZW4sIHRhcmdldEluZGV4LCBkZXB0aCAtIDEpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcih0YXJnZXRJbmRleCArIDEpO1xuICAgICAgICB0YXJnZXRbdGFyZ2V0SW5kZXhdID0gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0SW5kZXgrKztcbiAgICB9XG4gICAgc291cmNlSW5kZXgrKztcbiAgfVxuICByZXR1cm4gdGFyZ2V0SW5kZXg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsYXR0ZW5JbnRvQXJyYXk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIG9iamVjdEdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKCRwcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBpbiBzb21lIElFIHZlcnNpb25zLCBgcHJvcGVydHlJc0VudW1lcmFibGVgIHJldHVybnMgaW5jb3JyZWN0IHJlc3VsdCBvbiBpbnRlZ2VyIGtleXNcbi8vIG9mIGBudWxsYCBwcm90b3R5cGUgb2JqZWN0c1xudmFyIElFX0JVRyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxuICB2YXIgTyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIE9bMl0gPSAyO1xuICByZXR1cm4gIXByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIDIpO1xufSk7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBJRV9XT1JLQVJPVU5EID0gSUVfQlVHICYmIG9iamVjdEdldFByb3RvdHlwZU9mKE8pID09PSBudWxsO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgKElFX1dPUktBUk9VTkQgPyBrZXkgaW4gTyA6IHByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIGtleSkpKSB7XG4gICAgICAgIHB1c2gocmVzdWx0LCBUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuICBlbnRyaWVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBPYmplY3QudmFsdWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4gIHZhbHVlczogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZEluZGV4O1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EX0lOREVYID0gJ2ZpbmRJbmRleCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kaW5kZXggLS0gdGVzdGluZ1xuaWYgKEZJTkRfSU5ERVggaW4gW10pIEFycmF5KDEpW0ZJTkRfSU5ERVhdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRpbmRleFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORF9JTkRFWCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mbGF0TWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZsYXRtYXBcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgZmxhdE1hcDogZnVuY3Rpb24gZmxhdE1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIHNvdXJjZUxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBBO1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIEEubGVuZ3RoID0gZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIDEsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtbm9kZScpO1xuXG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcbnZhciBGT1JDRUQgPSBDSFJPTUVfQlVHIHx8ICFhcnJheU1ldGhvZElzU3RyaWN0KCdyZWR1Y2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgbGVuZ3RoLCBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyB0aGlzIG1ldGhvZCB3YXMgYWRkZWQgdG8gdW5zY29wYWJsZXMgYWZ0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGluIHBvcHVsYXIgZW5naW5lcywgc28gaXQncyBtb3ZlZCB0byBhIHNlcGFyYXRlIG1vZHVsZVxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2ZsYXRNYXAnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKHJlZHVjZXIgLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICBhQ2FsbGFibGUocmVkdWNlcik7XG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBub0luaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoIDwgMjtcbiAgICB2YXIgYWNjdW11bGF0b3IgPSBub0luaXRpYWwgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChub0luaXRpYWwpIHtcbiAgICAgICAgbm9Jbml0aWFsID0gZmFsc2U7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2N1bXVsYXRvciA9IHJlZHVjZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBjb3VudGVyKTtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSB9KTtcbiAgICBpZiAobm9Jbml0aWFsKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGl0ZXJhdG9yIHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1hcnJheScpLnZhbHVlcztcblxuLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKE8pIHtcbiAgICByZXR1cm4gJHZhbHVlcyhPKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5yZWR1Y2UnKTtcbiIsImltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRGF0ZVV0aWxzJztcblxuZXhwb3J0IGNvbnN0IFRBRyA9ICdCcGtBZE1ldHJpY3MnO1xuXG5leHBvcnQgY2xhc3MgQWRNZXRyaWNzIHtcbiAgICBhZFNraXBwYWJsZTsgLy8gcGVyIGFkXG5cbiAgICBhZFNraXBwZWQ7IC8vIHBlciBpbXByZXNzaW9uXG5cbiAgICBhZFByb2dyZXNzOyAvLyBwZXIgaW1wcmVzc2lvblxuXG4gICAgYWREdXJhdGlvbjsgLy8gcGVyIGltcHJlc3Npb25cblxuICAgIHN0YWxsc051bWJlcjsgLy8gcGVyIGltcHJlc3Npb25cblxuICAgIHN0YWxsc0R1cmF0aW9uOyAvLyBwZXIgaW1wcmVzc2lvblxuXG4gICAgbGF5ZXJTd2l0Y2hlc051bWJlcjsgLy8gcGVyIGltcHJlc3Npb25cblxuICAgIGF2ZXJhZ2VCaXRyYXRlOyAvLyBwZXIgaW1wcmVzc2lvblxuXG4gICAgY3JlYXRpdmVJZDsgLy8gcGVyIGFkXG5cbiAgICBhZElkOyAvLyBwZXIgYWRcblxuICAgIGFkSW5kZXg7IC8vIHBlciBhZFxuXG4gICAgYWRDb3VudDsgLy8gcGVyIGFkLCBzZXQgdmFsdWUgb25jZSBhZCBicmVhayBmaW5pc2hlZFxuXG4gICAgYWRGb3JtYXQ7IC8vIHBlciBhZFxuXG4gICAgaW1wcmVzc2lvbkRhdGU7IC8vIHBlciBpbXByZXNzaW9uXG5cbiAgICBjb25zdHJ1Y3RvcihtZXRyaWNzID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChtZXRyaWNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFkUHJvZ3Jlc3MgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuYWREdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YWxsc051bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YWxsc0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJTd2l0Y2hlc051bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLmF2ZXJhZ2VCaXRyYXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpdmVJZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hZElkID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMuYWRDb3VudCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5hZEZvcm1hdCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbXByZXNzaW9uRGF0ZSA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwYWJsZSA9IG1ldHJpY3MuYWRTa2lwcGFibGU7XG4gICAgICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IG1ldHJpY3MuYWRTa2lwcGVkO1xuICAgICAgICAgICAgdGhpcy5hZFByb2dyZXNzID0gbWV0cmljcy5hZFByb2dyZXNzO1xuICAgICAgICAgICAgdGhpcy5hZER1cmF0aW9uID0gbWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zdGFsbHNOdW1iZXIgPSBtZXRyaWNzLnN0YWxsc051bWJlcjtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzRHVyYXRpb24gPSBtZXRyaWNzLnN0YWxsc0R1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyID0gbWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5hdmVyYWdlQml0cmF0ZSA9IG1ldHJpY3MuYXZlcmFnZUJpdHJhdGU7XG4gICAgICAgICAgICB0aGlzLmNyZWF0aXZlSWQgPSBtZXRyaWNzLmNyZWF0aXZlSWQ7XG4gICAgICAgICAgICB0aGlzLmFkSWQgPSBtZXRyaWNzLmFkSWQ7XG4gICAgICAgICAgICB0aGlzLmFkSW5kZXggPSBtZXRyaWNzLmFkSW5kZXg7XG4gICAgICAgICAgICB0aGlzLmFkQ291bnQgPSBtZXRyaWNzLmFkQ291bnQ7XG4gICAgICAgICAgICB0aGlzLmFkRm9ybWF0ID0gbWV0cmljcy5hZEZvcm1hdDtcbiAgICAgICAgICAgIHRoaXMuaW1wcmVzc2lvbkRhdGUgPSBtZXRyaWNzLmltcHJlc3Npb25EYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwcmVjYXRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfEFkTWV0cmljc31cbiAgICAgKi9cbiAgICBzdGF0aWMgbWVyZ2UobGlzdCkge1xuICAgICAgICBpZiAobGlzdCAhPT0gdW5kZWZpbmVkICYmIGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkTWV0cmljcyA9IG5ldyBBZE1ldHJpY3MoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RNZXRyaWNzID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkU2tpcHBhYmxlID0gbGFzdE1ldHJpY3MuYWRTa2lwcGFibGU7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkU2tpcHBlZCA9IGxhc3RNZXRyaWNzLmFkU2tpcHBlZDtcbiAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYWRQcm9ncmVzcyA9IGxhc3RNZXRyaWNzLmFkUHJvZ3Jlc3M7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmNyZWF0aXZlSWQgPSBsYXN0TWV0cmljcy5jcmVhdGl2ZUlkO1xuICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZElkID0gbGFzdE1ldHJpY3MuYWRJZDtcblxuICAgICAgICAgICAgbGV0IGxheWVyUGVyRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgbGV0IHRvdGFsRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGlzdC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZE1ldHJpY3MgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYWREdXJhdGlvbiArPSBhZE1ldHJpY3MuYWREdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBtZXJnZWRNZXRyaWNzLnN0YWxsc051bWJlciArPSBhZE1ldHJpY3Muc3RhbGxzTnVtYmVyO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3Muc3RhbGxzRHVyYXRpb24gKz0gYWRNZXRyaWNzLnN0YWxsc0R1cmF0aW9uO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlciArPSBhZE1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlcjtcblxuICAgICAgICAgICAgICAgIGxheWVyUGVyRHVyYXRpb24gKz0gYWRNZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlICogYWRNZXRyaWNzLmFkRHVyYXRpb247XG4gICAgICAgICAgICAgICAgdG90YWxEdXJhdGlvbiArPSBhZE1ldHJpY3MuYWREdXJhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvdGFsRHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlID0gTWF0aC5yb3VuZChsYXllclBlckR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNZXRyaWNzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdcXG57IGFkU2tpcHBhYmxlPScgKyB0aGlzLmFkU2tpcHBhYmxlICtcbiAgICAgICAgICAgICdcXG4gIGFkU2tpcHBlZD0nICsgdGhpcy5hZFNraXBwZWQgK1xuICAgICAgICAgICAgJ1xcbiAgYWRQcm9ncmVzcz0nICsgdGhpcy5hZFByb2dyZXNzICtcbiAgICAgICAgICAgICdcXG4gIGFkRHVyYXRpb249JyArIHRoaXMuYWREdXJhdGlvbiArXG4gICAgICAgICAgICAnXFxuICBzdGFsbHNOdW1iZXI9JyArIHRoaXMuc3RhbGxzTnVtYmVyICtcbiAgICAgICAgICAgICdcXG4gIHN0YWxsc0R1cmF0aW9uPScgKyB0aGlzLnN0YWxsc0R1cmF0aW9uICtcbiAgICAgICAgICAgICdcXG4gIGxheWVyU3dpdGNoZXNOdW1iZXI9JyArIHRoaXMubGF5ZXJTd2l0Y2hlc051bWJlciArXG4gICAgICAgICAgICAnXFxuICBhdmVyYWdlQml0cmF0ZT0nICsgdGhpcy5hdmVyYWdlQml0cmF0ZSArXG4gICAgICAgICAgICBcIlxcbiAgY3JlYXRpdmVJZD0nXCIgKyB0aGlzLmNyZWF0aXZlSWQgKyAnXFwnJyArXG4gICAgICAgICAgICBcIlxcbiAgYWRJZD0nXCIgKyB0aGlzLmFkSWQgKyAnXFwnJyArXG4gICAgICAgICAgICAnXFxuICBhZEluZGV4PScgKyB0aGlzLmFkSW5kZXggK1xuICAgICAgICAgICAgJ1xcbiAgYWRDb3VudD0nICsgdGhpcy5hZENvdW50ICtcbiAgICAgICAgICAgIFwiXFxuICBhZEZvcm1hdD0nXCIgKyB0aGlzLmFkRm9ybWF0ICsgJ1xcJycgK1xuICAgICAgICAgICAgJ1xcbiAgaW1wcmVzc2lvbkRhdGU9JyArIHRoaXMuaW1wcmVzc2lvbkRhdGUgKyAnICgnICsgRGF0ZVV0aWxzLmZvcm1hdFRpbWUodGhpcy5pbXByZXNzaW9uRGF0ZSkgKyAnKScgK1xuICAgICAgICAgICAgJ1xcbn0nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkTWV0cmljc0J1aWxkZXIge1xuICAgIGFkTWV0cmljcztcblxuICAgIHRpbWVTcGVudFBlckxheWVyO1xuXG4gICAgcXVhcnRpbGVzO1xuXG4gICAgY29uc3RydWN0b3IoYWRNZXRyaWNzID0gdW5kZWZpbmVkLCB0aW1lU3BlbnRQZXJMYXllciA9IHVuZGVmaW5lZCwgcXVhcnRpbGVzID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhZE1ldHJpY3MgPT09IHVuZGVmaW5lZCAmJiB0aW1lU3BlbnRQZXJMYXllciA9PT0gdW5kZWZpbmVkICYmIHF1YXJ0aWxlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0ge307XG4gICAgICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSBhZE1ldHJpY3M7XG4gICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0gdGltZVNwZW50UGVyTGF5ZXI7XG4gICAgICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHF1YXJ0aWxlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBidWlsZCBhcyBiZWVuIGluaXRpYWxpemVkIChhZCBpZCBzZXQpXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJbml0aWFsaXplZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRNZXRyaWNzLmFkSWQgIT09ICcnO1xuICAgIH1cblxuICAgIGltcG9ydChhZE1ldHJpY3MpIHtcbiAgICAgICAgaWYgKGFkTWV0cmljcyAhPT0gdW5kZWZpbmVkICYmIGFkTWV0cmljcy5sZW5ndGggPT09IDEgJiYgYWRNZXRyaWNzWzBdLmltcHJlc3Npb25EYXRlIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzID0gYWRNZXRyaWNzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWQgaXMgYmVpbmcgZGlzcGxheWVkLCBzZXQgaW1wcmVzc2lvbiBkYXRlXG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmltcHJlc3Npb25EYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBZFNraXBwYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5hZFNraXBwYWJsZSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFkU2tpcHBlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5hZFNraXBwZWQgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRQcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLnF1YXJ0aWxlc1t2YWx1ZV0gPSB0cnVlO1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5hZFByb2dyZXNzID0gTWF0aC5tYXgodGhpcy5hZE1ldHJpY3MuYWRQcm9ncmVzcywgdmFsdWUpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQUk9HUkVTUycsIHRoaXMuYWRNZXRyaWNzLmFkUHJvZ3Jlc3MsIHRoaXMucXVhcnRpbGVzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0KGZvcm1hdCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkRm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5hZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkQ291bnQgPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDcmVhdGl2ZUlkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmNyZWF0aXZlSWQgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRBZElkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkSWQgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUaW1lU3BlbnRQZXJMYXllcihiaXRyYXRlLCBkdXJhdGlvbikge1xuICAgICAgICBiaXRyYXRlID0gTWF0aC5yb3VuZChiaXRyYXRlKTtcblxuICAgICAgICBpZiAoYml0cmF0ZSA+IDApIHtcbiAgICAgICAgICAgIGxldCB0aW1lU3BlbnRPbkxheWVyID0gdGhpcy50aW1lU3BlbnRQZXJMYXllcltiaXRyYXRlXTtcbiAgICAgICAgICAgIGlmICh0aW1lU3BlbnRPbkxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdICs9IGR1cmF0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdID0gZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRMYXllclN3aXRjaCgpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlcisrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFN0YWxsKGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLnN0YWxsc051bWJlcisrO1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5zdGFsbHNEdXJhdGlvbiArPSBkdXJhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSBuZXcgQWRNZXRyaWNzKCk7XG4gICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXIgPSB7fTtcbiAgICAgICAgdGhpcy5xdWFydGlsZXMgPSB7fTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBZE1ldHJpY3NCdWlsZGVyKG5ldyBBZE1ldHJpY3ModGhpcy5hZE1ldHJpY3MpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRpbWVTcGVudFBlckxheWVyKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5xdWFydGlsZXMpKTtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgbGV0IGxheWVyUGVyRHVyYXRpb24gPSAwO1xuICAgICAgICBsZXQgdG90YWxEdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBiaXRyYXRlIGluIHRoaXMudGltZVNwZW50UGVyTGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy50aW1lU3BlbnRQZXJMYXllcltiaXRyYXRlXTtcblxuICAgICAgICAgICAgbGF5ZXJQZXJEdXJhdGlvbiArPSBiaXRyYXRlICogZHVyYXRpb247XG4gICAgICAgICAgICB0b3RhbER1cmF0aW9uICs9IGR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdGFsRHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlID0gTWF0aC5yb3VuZChsYXllclBlckR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkTWV0cmljcy5hZER1cmF0aW9uID0gdG90YWxEdXJhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5hZE1ldHJpY3M7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0FkTWV0cmljc0J1aWxkZXJ9IGZyb20gJy4vQWRNZXRyaWNzJztcbmltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RhdGVVdGlscyc7XG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi4vLi4vU21hcnRMaWInO1xuaW1wb3J0IEFkVHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uL3RyYWNraW5nL0FkVHJhY2tpbmdNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0FkTWV0cmljc01ncic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkTWV0cmljc01hbmFnZXIge1xuICAgIGhhbmRsZXI7XG5cbiAgICB0aW1lbGluZTtcblxuICAgIGJ1aWxkZXI7XG5cbiAgICBhZE1ldHJpY3M7XG5cbiAgICBmaXJzdEltYWdlRGF0ZTtcbiAgICBsYXN0TGF5ZXJCaXRyYXRlO1xuXG4gICAgYWRCcmVha1BsYXlpbmc7XG4gICAgYWRQbGF5aW5nO1xuICAgIGFkU2tpcHBlZDtcbiAgICBhZExhc3RMYXllclN3aXRjaERhdGU7XG4gICAgYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlO1xuICAgIGFkQnJlYWtQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnRpbWVsaW5lO1xuXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBBZE1ldHJpY3NCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzID0ge307XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuYWRNZXRyaWNzID0ge307XG5cbiAgICAgICAgdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUgPSAwO1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2VEYXRlID0gMDtcbiAgICAgICAgdGhpcy5sYXN0TGF5ZXJCaXRyYXRlID0gMDtcblxuICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IC0xO1xuXG4gICAgICAgIHRoaXMuYWRCcmVha1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZFBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgfVxuXG4gICAgb25GaXJzdEltYWdlKGJpdHJhdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMubGFzdExheWVyQml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgICAgIHRoaXMuYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgb25MYXllclN3aXRjaChiaXRyYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nICYmIHRoaXMuZmlyc3RJbWFnZURhdGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkVGltZVNwZW50UGVyTGF5ZXIodGhpcy5sYXN0TGF5ZXJCaXRyYXRlLCBEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUpO1xuICAgICAgICAgICAgdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0TGF5ZXJCaXRyYXRlICE9PSBiaXRyYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZExheWVyU3dpdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RMYXllckJpdHJhdGUgPSBiaXRyYXRlO1xuICAgIH1cblxuICAgIG9uQnVmZmVyaW5nU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nKSB7XG4gICAgICAgICAgICAvLyBTdGFydCBzdGFsbCB0aW1lclxuICAgICAgICAgICAgdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFsbEVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcgJiYgdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPj0gMCkge1xuICAgICAgICAgICAgLy8gQWRkIHN0YWxsXG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkU3RhbGwoRGF0ZS5ub3coKSAtIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID0gLTE7XG4gICAgfVxuXG4gICAgb25SZWJ1ZmZlcmluZ0VuZCgpIHtcbiAgICAgICAgdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPSAtMTtcbiAgICB9XG5cbiAgICBvblNlZWsoc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHNlZWtlZCBmcm9tICcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZShzdGFydCkgKyAnIHRvICcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZShlbmQpLCB0aGlzLmhhbmRsZXI/LmlkKTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZCAtIHN0YXJ0KSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmluZyBzZWVrXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0lnbm9yaW5nIHNlZWsgPCAnICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSArICdtcycsIHRoaXMuaGFuZGxlcj8uaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGFkIGlzIGJlaW5nIHNraXBwZWRcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgc2tpcHBlZCAoYWJvdmUgc2VlayB0aHJlc2hvbGQpJywgdGhpcy5oYW5kbGVyPy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZFNraXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdG9wKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgLy8gQWQgZW5kIHdpdGggc3RvcFN0cmVhbWluZ1Nlc3Npb25cbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRCcmVha0RhdGEoYWRCcmVha1RyYWNrZXIpIHtcbiAgICAgICAgLy8gRGV0ZWN0IGFkIGJyZWFrIHBvc2l0aW9uXG4gICAgICAgIGlmIChNYXRoLmFicygoYWRCcmVha1RyYWNrZXIucG9zaXRpb24gKyBhZEJyZWFrVHJhY2tlci5kdXJhdGlvbikgLSB0aGlzLmhhbmRsZXIucGxheWVyQWRhcHRlcj8uZ2V0RHVyYXRpb24oKSkgPCAxMDAwMCkge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAncG9zdHJvbGwnO1xuICAgICAgICB9IGVsc2UgaWYgKERhdGUubm93KCkgLSB0aGlzLmZpcnN0SW1hZ2VEYXRlIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU1RBUlRfREVMVEEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3ByZXJvbGwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIub29iYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYnJlYWsgcG9zaXRpb24gaXMgJyArIHRoaXMuYWRCcmVha1Bvc2l0aW9uLCB0aGlzLmhhbmRsZXI/LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkIGJyZWFrcyBzdGFydFxuICAgICAgICB0aGlzLmFkQnJlYWtQbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyBBZGQgYWQgYnJlYWsgYmVnaW4gdG8gdGltZWxpbmVcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5wdXNoRXZlbnQoU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlPy5TZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZERhdGEoYWREYXRhKSB7XG4gICAgICAgIC8vIFRvIGRldGVjdCBza2lwIG9mIGFuIGFkIGluc2lkZSBhbiBhZCBicmVha3NcbiAgICAgICAgaWYgKHRoaXMuYnVpbGRlci5pc0luaXRpYWxpemVkKCkgJiYgdGhpcy5hZFNraXBwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhZCBjb3VudCAoLTEgdW50aWwgQmtZb3UgcmV0dXJucyBlbmRlZCBmbGFnKVxuICAgICAgICBjb25zdCBhZENvdW50ID0gKGFkRGF0YS5hZEJyZWFrLmxpdmUgPT09IHRydWUgPyAtMSA6IGFkRGF0YS5hZEJyZWFrLmFkcy5sZW5ndGgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgYnVpbGRlclxuICAgICAgICB0aGlzLmJ1aWxkZXIucmVzZXQoKVxuICAgICAgICAgICAgLmltcG9ydCh0aGlzLmFkTWV0cmljc1thZERhdGEuYWRJZF0pIC8vIGltcG9ydCBhZCBtZXRyaWNzIFNSIGlmIGl0IGV4aXN0cyBhbmQgbm90IHlldCBkaXNwbGF5ZWRcbiAgICAgICAgICAgIC5zZXRDcmVhdGl2ZUlkKGFkRGF0YS5jcmVhdGl2ZUlkKVxuICAgICAgICAgICAgLnNldEFkSWQoYWREYXRhLmFkSWQpXG4gICAgICAgICAgICAuaW5pdCh0aGlzLmFkQnJlYWtQb3NpdGlvbiwgYWREYXRhLmluZGV4LCBhZENvdW50KTtcblxuICAgICAgICAvLyBJbml0IGFkIG1ldHJpY3NcbiAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmFkUGxheWluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25BZFNraXBwYWJsZShzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5idWlsZGVyLnNldEFkU2tpcHBhYmxlKHRydWUpO1xuICAgIH1cblxuICAgIG9uQWRTa2lwcGVkKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCwgb3RoZXJTa2lwcGVkQWRJZHMpIHtcbiAgICAgICAgdGhpcy5hZFNraXBwZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNraXAgYWxsIG90aGVyIG5leHQgYWRzXG4gICAgICAgIGlmIChvdGhlclNraXBwZWRBZElkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYnJlYWsgc2tpcHBlZCcsIHRoaXMuaGFuZGxlcj8uaWQpO1xuXG4gICAgICAgICAgICBsZXQgYWRJbmRleCA9IDE7XG4gICAgICAgICAgICBvdGhlclNraXBwZWRBZElkcy5mb3JFYWNoKGFkSWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzW2FkSWRdLmZvckVhY2gocmVwb3J0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcG9ydC5pbXByZXNzaW9uRGF0ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgYWQgYXMgc2tpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0LmFkU2tpcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnQuYWRQcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnQuaW1wcmVzc2lvbkRhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbml0IG90aGVyIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlcG9ydCA9IHRoaXMuYnVpbGRlci5hZE1ldHJpY3M7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnQuYWRJbmRleCA9IGN1cnJlbnRSZXBvcnQuYWRJbmRleCArIGFkSW5kZXg7IC8vIHNldCBpbmRleCB3aXRoIHNraXBwZWQgYWQgaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnQuYWRDb3VudCA9IGN1cnJlbnRSZXBvcnQuYWRDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydC5hZEZvcm1hdCA9IGN1cnJlbnRSZXBvcnQuYWRGb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkUHJvZ3Jlc3Moc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkLCBwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA+IDAgJiYgdGhpcy5idWlsZGVyLnF1YXJ0aWxlc1socHJvZ3Jlc3MgLSAyNSldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBza2lwcGVkIChubyBwcmV2aW91cyBwcm9ncmVzcyknLCB0aGlzLmhhbmRsZXI/LmlkKTtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRFbmQoc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkKSB7XG4gICAgICAgIC8vIERlZmF1bHQgYWQgZW5kXG4gICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcblxuICAgICAgICB0aGlzLmFkUGxheWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQWRCcmVha0VuZChzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgLy8gQWQgZW5kIHdpdGggc2tpcFxuICAgICAgICBpZiAodGhpcy5hZFBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5zZXRBZFNraXBwZWQodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkIGJyZWFrcyBlbmRcbiAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFkZCBhZCBicmVhayBlbmQgdG8gdGltZWxpbmVcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5wdXNoRXZlbnRQcm9ncmVzcyhTbWFydExpYi5hbmFseXRpY3NNb2R1bGU/LlNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyID0gdGhpcy5idWlsZGVyLmNsb25lKClcbiAgICAgICAgICAgICAgICAuYWRkVGltZVNwZW50UGVyTGF5ZXIodGhpcy5sYXN0TGF5ZXJCaXRyYXRlLCBEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPj0gMCkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkU3RhbGwoRGF0ZS5ub3coKSAtIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWV0cmljcyA9IGJ1aWxkZXIuYnVpbGQoKTtcbiAgICAgICAgICAgIGlmIChtZXRyaWNzLmFkSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRNZXRyaWNzW21ldHJpY3MuYWRJZF0gPSBtZXRyaWNzO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVNZXRyaWNzKG1ldHJpY3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2Vzc2lvblJlcG9ydC5hZE1ldHJpY3MgPSBPYmplY3QudmFsdWVzKHRoaXMuYWRNZXRyaWNzKTtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5hZE1ldHJpY3MgPSB0aGlzLmdlbmVyYXRlTWV0cmljcygpO1xuICAgIH1cblxuICAgIG9uRW5kU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIC8vIHNlc3Npb25SZXBvcnQuYWRNZXRyaWNzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmFkTWV0cmljcyk7XG4gICAgICAgIHNlc3Npb25SZXBvcnQuYWRNZXRyaWNzID0gdGhpcy5nZW5lcmF0ZU1ldHJpY3MoKTtcbiAgICB9XG5cbiAgICBzdG9yZU1ldHJpY3MobWV0cmljcykge1xuICAgICAgICBjb25zdCBhZElkID0gbWV0cmljcy5hZElkO1xuXG4gICAgICAgIGlmICh0aGlzLmFkTWV0cmljc1thZElkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljc1thZElkXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZSBtZXRyaWNzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hZE1ldHJpY3NbYWRJZF0uZmluZEluZGV4KHJlcG9ydCA9PiByZXBvcnQuaW1wcmVzc2lvbkRhdGUgPT09IG1ldHJpY3MuaW1wcmVzc2lvbkRhdGUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljc1thZElkXS5wdXNoKG1ldHJpY3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3NbYWRJZF1baW5kZXhdID0gbWV0cmljcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlTWV0cmljcygpIHtcbiAgICAgICAgbGV0IG1ldHJpY3MgPSBbXTtcblxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuYWRNZXRyaWNzKVxuICAgICAgICAgICAgLmZvckVhY2gocmVwb3J0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmVwb3J0cy5mb3JFYWNoKHJlcG9ydCA9PiBtZXRyaWNzLnB1c2gocmVwb3J0KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWV0cmljcztcbiAgICB9XG5cbiAgICBoYW5kbGVBZEVuZCgpIHtcbiAgICAgICAgLy8gU3RvcmUgZmluYWwgcHJvZ3Jlc3MgYW5kIHRpbWUgc3BlbnQgb24gbGF5ZXIgdW50aWwgZW5kXG4gICAgICAgIHRoaXMuYnVpbGRlci5zZXRBZFNraXBwZWQodGhpcy5hZFNraXBwZWQpXG4gICAgICAgICAgICAuYWRkVGltZVNwZW50UGVyTGF5ZXIodGhpcy5sYXN0TGF5ZXJCaXRyYXRlLCBEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBhZCBtZXRyaWNzXG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgICAgICAgaWYgKG1ldHJpY3MuYWRJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFkTWV0cmljc1ttZXRyaWNzLmFkSWRdID0gbWV0cmljcztcbiAgICAgICAgICAgIHRoaXMuc3RvcmVNZXRyaWNzKG1ldHJpY3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIG1ldHJpY3MgOiAnICsgbWV0cmljcy50b1N0cmluZygpLCB0aGlzLmhhbmRsZXI/LmlkKTtcblxuICAgICAgICAvLyBSZXNldCBhZCBtZXRyaWNzIGZvciB0aGUgbmV4dCBhZFxuICAgICAgICB0aGlzLmJ1aWxkZXIucmVzZXQoKTtcbiAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkFkc1VwZGF0ZWQoYWREYXRhKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbXB0eSBhZCByZXBvcnQgKHVzZWQgdG8gY291bnQgdGhlIG51bWJlciBvZiBhZCBnZW5lcmF0ZWQgYnkgdGhlIEJrWW91KVxuICAgICAgICBhZERhdGEuYWRCcmVha3MuZm9yRWFjaChhZEJyZWFrID0+IHtcbiAgICAgICAgICAgIGFkQnJlYWsuYWRzLmZvckVhY2goYWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkTWV0cmljc1thZC5hZElkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRNZXRyaWNzQnVpbGRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRyaWNzID0gYnVpbGRlci5zZXRDcmVhdGl2ZUlkKGFkLmNyZWF0aXZlSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0QWRJZChhZC5hZElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzW2FkLmFkSWRdID0gW21ldHJpY3NdO1xuXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZGRpbmcgYWQgbWV0cmljcyByZXBvcnQgZm9yIGFkIGlkICcgKyBhZC5hZElkLCB0aGlzLmhhbmRsZXI/LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBSZXF1ZXN0TWFuYWdlciBmcm9tICcuLi8uLi9yZXF1ZXN0L1JlcXVlc3RNYW5hZ2VyJztcbmltcG9ydCB7IEFkVHlwZSB9IGZyb20gJy4uL0FkTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtBZFRyYWNrZXInO1xuXG5jbGFzcyBUcmFja2VyIHtcbiAgICAvKipcbiAgICAgKiBUcmFja2VycyBuZWVkIHRvIGtub3cgaWYgaXQgaGFzIGJlZW4gYWxyZWFkeSBwcm9jZWVkZWRcbiAgICAgKiBJbiBjYXNlIG9mIHNlZWsgYW5kIGluIHNvbWUgY2FzZXMsIHRyYWNrZXJzIHNob3VsZCBub3QgYmUgY2FsbGVkXG4gICAgICogQSBzZWVrIGJlZm9yZSBhbiBhZCByZXNldCB0aGlzIG1hcFxuICAgICAqL1xuICAgIHByb2NlZWRlZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2NlZWRlZCA9IHt9O1xuICAgICAgICB0aGlzLnByZXBhcmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHRyYWNrZXIgY2FuIGV4ZWN1dGUgaXRzIGNvZGVcbiAgICAgKiBXYXJuaW5nOiBjYWxsaW5nIHRoaXMgbWV0aG9kIHNldHMgYSB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGlkIFByb2Nlc3MgaWQuIEluIHNvbWUgdHJhY2tlciwgaXQgcmVxdWlyZXMgbXVsdGlwbGUgY2FuIHByb2Nlc3MgKHByb2Nlc3MgYmVnaW4sIHByb2Nlc3MgZW5kIGZvciB0aGUgYWQgYnJlYWsgdHJhY2tlcilcbiAgICAgKiAgICAgICAgICAgMCA9IHByb2Nlc3NCZWdpbiwgMSA9IHByb2Nlc3NFbmRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaWYgcmV0dXJuIHRydWUsIHRoZSByZXN0IG9mIHRoZSBtZXRob2Qgd2hpY2ggY2FsbHMgdGhpcyBjYW4gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBjYW5Qcm9jZXNzKGlkID0gMCkge1xuICAgICAgICAvLyBjb25zdCBjYW5Qcm9jZXNzID0gRGF0ZS5ub3coKSAtICh0aGlzLnByb2NlZWRlZFtpZF0gfHwgMCkgPiBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBO1xuICAgICAgICBjb25zdCBjYW5Qcm9jZXNzID0gdGhpcy5wcm9jZWVkZWRbaWRdID09PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGNhblByb2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPSycsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgdGhpcy5hZElkIHx8IHRoaXMuYWQ/LmFkSWQsICdpZCAnICsgaWQsIHRoaXMudHlwZSk7XG4gICAgICAgICAgICB0aGlzLnByb2NlZWRlZFtpZF0gPSBEYXRlLm5vdygpO1xuICAgICAgICB9LyogZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTk9LJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzLmFkSWQgfHwgdGhpcy5hZD8uYWRJZCwgJ2lkICcgKyBpZCwgdGhpcy50eXBlKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgcmV0dXJuIGNhblByb2Nlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHByb2NlZWRlZCBtYXBcbiAgICAgKi9cbiAgICByZXNldFByb2Nlc3MoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdSRVNFVCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgdGhpcy5hZElkIHx8IHRoaXMuYWQ/LmFkSWQsIHRoaXMudHlwZSk7XG4gICAgICAgIHRoaXMucHJvY2VlZGVkID0ge307XG4gICAgfVxufVxuXG4vKipcbiAqIEJhc2UgYWQgZGF0YSBvYmplY3RcbiAqIFN0b3JlZCBpbiBhZCB0cmFja2luZyBtYW5hZ2VyIGFuZCB1c2VkIHRvIGJyb3dzZSBhZHNcbiAqL1xuZXhwb3J0IGNsYXNzIEFkRGF0YVRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIFNtYXJ0TGliIGFkIHRyYWNraW5nIG1hbmFnZXJcbiAgICAgKi9cbiAgICBhZFRyYWNraW5nTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHNlc3Npb250b2tlblxuICAgICAqL1xuICAgIHNlc3Npb25Ub2tlbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHRpbWVyZWZlcmVuY2VfbXNcbiAgICAgKi9cbiAgICB0aW1lUmVmZXJlbmNlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWRwb2RzXG4gICAgICovXG4gICAgYWRCcmVha3M7XG5cbiAgICAvKipcbiAgICAgKiBBZCBnYXRld2F5IG91dC1vZi1iYW5kIGFkcG9kc1xuICAgICAqL1xuICAgIG91dE9mQmFuZEFkQnJlYWtzO1xuXG4gICAgY29uc3RydWN0b3IoYWRUcmFja2luZ01hbmFnZXIsIHNlc3Npb25Ub2tlbiwgdGltZVJlZmVyZW5jZSkge1xuICAgICAgICB0aGlzLmFkVHJhY2tpbmdNYW5hZ2VyID0gYWRUcmFja2luZ01hbmFnZXI7XG4gICAgICAgIHRoaXMuc2Vzc2lvblRva2VuID0gc2Vzc2lvblRva2VuO1xuICAgICAgICB0aGlzLnRpbWVSZWZlcmVuY2UgPSB0aW1lUmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmFkQnJlYWtzID0gW107XG4gICAgICAgIHRoaXMub3V0T2ZCYW5kQWRCcmVha3MgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgYWQgYnJlYWsgYWZ0ZXIgdGhlIGdpdmVuIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIHBvc2l0aW9uIHRvIGNoZWNrXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgb2YgaGFzIHJlbWFpbmluZyBhZCBicmVha3MgYWZ0ZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBoYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZEJyZWFrcy5maW5kKGFkQnJlYWsgPT4gcG9zaXRpb24gPCBhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbikgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRCcmVha3MuZm9yRWFjaChhZEJyZWFrID0+IGFkQnJlYWsucmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZCBicmVhayBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBBZEJyZWFrVHJhY2tlciBleHRlbmRzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIEFkIGRhdGEgdHJhY2tlclxuICAgICAqL1xuICAgIGFkRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGlkXG4gICAgICovXG4gICAgaWQ7IC8vIGlkXG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBzdGFydHRpbWVfbXNcbiAgICAgKi9cbiAgICBwb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEFkanVzdGVkIGFkIGJyZWFrIGR1cmF0aW9uIGNhbGN1bGF0ZWQgYnkgU21hcnRMaWIgYW5kIHVzZWQgYnkgdGhlIHRyYWNraW5nXG4gICAgICogSW4gc29tZSBjYXNlcywgdGhlIGR1cmF0aW9uIHJldHVybmVkIGJ5IHRoZSBCa1lvdSBpcyBub3QgY29ycmVjdCBhbmQgaGFzIHRvIGJlIGFkanVzdGVkXG4gICAgICovXG4gICAgZHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBEdXJhdGlvbiBvZiB0aGUgY3VycmVudCBhZCBicmVhayBpbiB0aGUgdHJhY2tpbmcgZmlsZSAoQmtZb3UgZHVyYXRpb25fbXMpXG4gICAgICogRm9yIExJVkUgY29udGVudHMsIGFjdHVhbER1cmF0aW9uIGNhbiBiZSBkaWZmZXJlbnQgb2YgZXhwZWN0ZWREdXJhdGlvbiB3aGVuIHRoZSBhZCBicmVhayBpcyBub3QgdG90YWxseSBnZW5lcmF0ZWRcbiAgICAgKi9cbiAgICAvLyBhY3R1YWxEdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEV4cGVjdGVkIGR1cmF0aW9uIG9mIHRoZSBmdWxsIGFkIGJyZWFrXG4gICAgICogRm9yIFZPRCBjb250ZW50cywgZXhwZWN0ZWREdXJhdGlvbiA9PSBhY3R1YWxEdXJhdGlvblxuICAgICAqL1xuICAgIC8vIGV4cGVjdGVkRHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBDb250ZW50IHR5cGVcbiAgICAgKi9cbiAgICBsaXZlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWRzXG4gICAgICovXG4gICAgYWRzO1xuXG4gICAgLyoqXG4gICAgICogQWQgYnJlYWsgdHJhY2tpbmcgZXZlbnRzXG4gICAgICovXG4gICAgdHJhY2tpbmdFdmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBPdXQtb2YtYmFuZCBhZCByZWxhdGVkIGRhdGFcbiAgICAgKiBcbiAgICAgKiBVbmRlZmluZWQgZm9yIGluLWJhbmQgYWRzXG4gICAgICogXG4gICAgICovXG4gICAgb29iYTtcblxuICAgIGNvbnN0cnVjdG9yKGFkRGF0YSwgaWQsIHBvc2l0aW9uLCBkdXJhdGlvbiwgbGl2ZSwgb29iYSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYWREYXRhID0gYWREYXRhO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmxpdmUgPSBsaXZlO1xuICAgICAgICB0aGlzLmFkcyA9IFtdO1xuICAgICAgICB0aGlzLnRyYWNraW5nRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMub29iYSA9IG9vYmE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcHJvZ3Jlc3Npb24gaWYgc2Vla2luZ1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgICovXG4gICAgcmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZXNldFByb2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRzLmZvckVhY2goYWQgPT4gYWQucmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgcHVibGljIGV2ZW50IHRvIGFubm91bmNlIGFuIGFkIGJyZWFrXG4gICAgICovXG4gICAgcHJvY2Vzc1ByZXBhcmUoKSB7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG4gICAgICAgIGNvbnN0IGFkRXZlbnRzTGlzdGVuZXIgPSBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmFkU2Vzc2lvbj8uYWRFdmVudHNMaXN0ZW5lcjtcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWQgPT09IGZhbHNlICYmIGFkRXZlbnRzTGlzdGVuZXI/Lm9uUHJlcGFyZUFkQnJlYWsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRFdmVudHNMaXN0ZW5lci5vblByZXBhcmVBZEJyZWFrKHRoaXMudG9EYXRhKCkpO1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRyYWNrZXJzIHdoZW4gc3RhcnRpbmcgYW4gYWRcbiAgICAgKi9cbiAgICBwcm9jZXNzQmVnaW4oKSB7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoMCkpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBhbHJlYWR5IGJlZ2FuIChpZDogJyArIHRoaXMuaWQgKyAnKScsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgYWQgYnJlYWsgYmVnaW4uLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0R1cmF0aW9uOiAnICsgdGhpcy5kdXJhdGlvbiArICdtcycsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgaW50ZXJuYWwgZXZlbnRzXG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQnJlYWtEYXRhKHRoaXMpO1xuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZEJyZWFrQmVnaW4odGhpcy5hZERhdGEuc2Vzc2lvblRva2VuKTtcbiAgICAgICAgdGhpcy50cmFja2luZ0V2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQudHlwZSA9PT0gJ2JyZWFrU3RhcnQnKS5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50LnByb2Nlc3NFdmVudCgpKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHB1YmxpYyBldmVudHNcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICB0aGlzLnByb2Nlc3NQcmVwYXJlKCk7XG4gICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRCcmVha0JlZ2luKHRoaXMudG9EYXRhKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdHJhY2tlcnMgd2hlbiBlbmRpbmcgYW4gYWQgYnJlYWtcbiAgICAgKi9cbiAgICBwcm9jZXNzRW5kKCkge1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IHRoaXMuYWREYXRhLmFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzKDEpKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYnJlYWsgYWxyZWFkeSBlbmRlZCAoaWQ6ICcgKyB0aGlzLmlkICsgJyknLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIGFkIGJyZWFrIGVuZC4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgaW50ZXJuYWwgZXZlbnRzXG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQnJlYWtFbmQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuKTtcbiAgICAgICAgdGhpcy50cmFja2luZ0V2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQudHlwZSA9PT0gJ2JyZWFrRW5kJykuZm9yRWFjaChldmVudCA9PiBldmVudC5wcm9jZXNzRXZlbnQoKSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBwdWJsaWMgZXZlbnRzXG4gICAgICAgIGNvbnN0IGFkRXZlbnRzTGlzdGVuZXIgPSBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmFkU2Vzc2lvbj8uYWRFdmVudHNMaXN0ZW5lcjtcbiAgICAgICAgYWRFdmVudHNMaXN0ZW5lcj8ub25BZEJyZWFrRW5kKHRoaXMudG9EYXRhKCkpO1xuXG4gICAgICAgIC8vIEluLWJhbmQgYWRzOlxuICAgICAgICAvLyAgICAgIE9uY2UgcGxheWVkLCB0aGUgYWQgYnJlYWsgY2FuIGJlIHJlcGxheWVkIGFnYWluXG4gICAgICAgIC8vICAgICAgSW4gc29tZSBjYXNlIG9mIEJrWW91IG5vIGluc2VydGlvbiBlcnJvciwgYWQgYnJlYWsgZW5kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGFjdHVhbCBwb3NpdGlvbi5cbiAgICAgICAgLy8gICAgICBXaGVuIGFuIGFkIGlzIGRldGVjdGVkIGFkIGJyZWFrIGJlZ2luIHNob3VsZCBiZSBjYWxsZWQgYWdhaW5cbiAgICAgICAgLy8gT3V0LW9mLWJhbmQgYWRzOlxuICAgICAgICAvLyAgICAgIE9uY2UgcGxheWVkLCB0aGUgYWQgYnJlYWsgaXMgZGVsZXRlZFxuICAgICAgICBpZiAodGhpcy5vb2JhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9jZXNzKCk7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFByb2Nlc3MoKSB7XG4gICAgICAgIHN1cGVyLnJlc2V0UHJvY2VzcygpO1xuXG4gICAgICAgIC8vIE9uY2UgYW4gYWQgYnJlYWsgaGFzIGJlZW4gY29tcGxldGVkLCBhbGwgYWQgY2FuIGJlIHJlcGxheWVkIGFnYWluXG4gICAgICAgIC8vICAgRG9uJ3QgcmVzZXQgdGhlIHByb2dyZXNzaW9uLCBpdCByZXF1aXJlcyB0byBzZWVrIGJlZm9yZSB0aGUgYWQgc3RhcnQgcG9zaXRpb24gdG8gcmVzZXQgaXQuXG4gICAgICAgIC8vICAgT25seSBuZWVkIHRvIHRyaWdnZXIgYWQgZXZlbnRzIGlmIHNlZWtpbmcgYmFja3dhcmRcbiAgICAgICAgdGhpcy5hZHMuZm9yRWFjaChhZCA9PiBhZC5yZXNldFByb2Nlc3MoKSk7XG4gICAgfVxuXG4gICAgdG9EYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uIHx8IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5saXZlID09PSB0cnVlID8gLTEgOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgYWRzOiB0aGlzLmFkcy5tYXAoYWQgPT4gYWQudG9EYXRhKCkpLFxuICAgICAgICAgICAgYWRDb3VudDogdGhpcy5saXZlID09PSB0cnVlID8gLTEgOiB0aGlzLmFkcy5sZW5ndGgsXG4gICAgICAgICAgICBvb2JhOiB0aGlzLm9vYmFcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogQWQgZXZlbnQgZGF0YVxuICovXG5leHBvcnQgY2xhc3MgQWRCcmVha0V2ZW50VHJhY2tlciBleHRlbmRzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIEFkQnJlYWsgdHJhY2tlclxuICAgICAqL1xuICAgIGFkQnJlYWs7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSB0eXBlXG4gICAgICovXG4gICAgdHlwZTtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGNhbGxiYWNrdXJsXG4gICAgICovXG4gICAgdXJsO1xuXG4gICAgY29uc3RydWN0b3IoYWRCcmVhaywgdHlwZSwgdXJsKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZEJyZWFrID0gYWRCcmVhaztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBldmVudFxuICAgICAqIFRyaWdnZXIgZXZlbnQgaWYgaGFzIG5vdCBiZWVuIGFscmVhZHkgcHJvY2VlZGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZXZlbnQgaGFzIGJlZW4gcHJvY2VlZGVkXG4gICAgICovXG4gICAgcHJvY2Vzc0V2ZW50KCkge1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IHRoaXMuYWRCcmVhay5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgJyArIHRoaXMudHlwZSArICcuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICBpZiAodGhpcy51cmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVxdWVzdGluZyAnICsgdGhpcy51cmwsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZEV2ZW50KGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZCBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBBZFRyYWNrZXIgZXh0ZW5kcyBUcmFja2VyIHtcbiAgICAvKipcbiAgICAgKiBBZCB0eXBlXG4gICAgICogQHR5cGUgeydsaW5lYXInIHwgJ25vbmxpbmVhcicgfCAnbGluZWFyX2FuZF9ub25saW5lYXInIHwgJ3Vuc3VwcG9ydGVkJ30gXG4gICAgICovXG4gICAgYWRUeXBlO1xuXG4gICAgLyoqXG4gICAgICogQWQgYnJlYWsgdHJhY2tlclxuICAgICAqL1xuICAgIGFkQnJlYWs7XG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBpbiB0aGUgY3VycmVudCBhZCBicmVha1xuICAgICAqL1xuICAgIGluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc3RhcnR0aW1lX21zXG4gICAgICovXG4gICAgcG9zaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBkdXJhdGlvbl9tc1xuICAgICAqL1xuICAgIGR1cmF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2tpcHBhYmxlX21zXG4gICAgICovXG4gICAgc2tpcHBhYmxlUG9zaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBhZCBpcyBza2lwcGFibGVcbiAgICAgKi9cbiAgICBza2lwcGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBjcmVhdGl2ZWlkXG4gICAgICovXG4gICAgY3JlYXRpdmVJZDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkaWQgKyAnLScgKyBzdGFydHRpbWVfbXNcbiAgICAgKi9cbiAgICBhZElkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdHJhY2tpbmdldmVudHNcbiAgICAgKi9cbiAgICBldmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSB2aWRlb2NsaWNrcyBvYmplY3RcbiAgICAgKiBKU09OIHZhbHVlIDogeyBjbGlja3Rocm91Z2h1cmw6IHN0cmluZywgY2xpY2t0cmFja2luZzogW3tjbGlja3VybDogc3RyaW5nfV0sIGN1c3RvbWNsaWNrOiBbe2NsaWNrdXJsOiBzdHJpbmd9XSB9XG4gICAgICogTWFwcGVkIHZhbHVlIDogeyB1cmk6IHN0cmluZywgdHJhY2tlcnM6IFt7Y2xpY2t1cmw6IHN0cmluZ31dLCBjdXN0b21DbGljazogW3tjbGlja3VybDogc3RyaW5nfV0gfVxuICAgICAqL1xuICAgIGNsaWNrYWJsZTsgLy8gdmlkZW9jbGlja3MgeyBjbGlja3Rocm91Z2h1cmwsIGNsaWNrdHJhY2tpbmcsIGN1c3RvbWNsaWNrIH0gPT4gdXJpLCB0cmFja2VycywgY3VzdG9tQ2xpY2tcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkdmVyaWZpY2F0aW9ucyBhcnJheVxuICAgICAqIEpTT04gdmFsdWUgOiBbIHsgdmVuZG9yOiBzdHJpbmcsIGphdmFzY3JpcHRyZXNvdXJjZXM6IFt7fV0sIGV4ZWN1dGFibGVyZXNvdXJjZXM6IFt7fV0sIHRyYWNraW5nZXZlbnRzOiBbe31dLCB2ZXJpZmljYXRpb25wYXJhbWV0ZXJzOiBzdHJpbmd9IF1cbiAgICAgKiBNYXBwZWQgdmFsdWUgOiBbIHt2ZW5kb3I6IHN0cmluZywgamF2YXNjcmlwdFJlc291cmNlczogW3t9XSwgZXhlY3V0YWJsZVJlc291cmNlczogW3t9XSwgdHJhY2tpbmdFdmVudHM6IFt7fV0sIHZlcmlmaWNhdGlvblBhcmFtZXRlcnM6IHN0cmluZyB9IF1cbiAgICAgKi9cbiAgICB2ZXJpZmljYXRpb25zO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgaW50ZXJ2YWwgd2F0Y2hlZFxuICAgICAqIEZsYXR0ZWQgYXQgZWFjaCBhZCBpdGVyYXRpb25cbiAgICAgKi9cbiAgICB3YXRjaGVkO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBwcm9ncmVzc2lvbiAoMC4wIHRvIDEuMClcbiAgICAgKiBSZXNldCB3aGVuIHNlZWtcbiAgICAgKi9cbiAgICBwcm9ncmVzc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIG5vbi1saW5lYXIgYWRzIGZvciB0aGUgY3VycmVudCBjcmVhdGl2ZVxuICAgICAqL1xuICAgIG5vbkxpbmVhckluZm87XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciB0cmFja2VyIFVSTFxuICAgICAqL1xuICAgIGVycm9yVVJMO1xuXG4gICAgY29uc3RydWN0b3IoYWRUeXBlLCBhZEJyZWFrLCBpbmRleCwgcG9zaXRpb24sIGR1cmF0aW9uLCBza2lwcGFibGUsIHNraXBwYWJsZVBvc2l0aW9uLCBjcmVhdGl2ZUlkLCBhZElkLCBjbGlja2FibGUsIHZlcmlmaWNhdGlvbnMsIG5vbkxpbmVhckluZm8sIGVycm9yVVJMKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZFR5cGUgPSBhZFR5cGU7XG4gICAgICAgIHRoaXMuYWRCcmVhayA9IGFkQnJlYWs7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuc2tpcHBhYmxlID0gc2tpcHBhYmxlO1xuICAgICAgICB0aGlzLnNraXBwYWJsZVBvc2l0aW9uID0gc2tpcHBhYmxlUG9zaXRpb247XG4gICAgICAgIHRoaXMuY3JlYXRpdmVJZCA9IGNyZWF0aXZlSWQ7XG4gICAgICAgIHRoaXMuYWRJZCA9IGFkSWQ7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gY2xpY2thYmxlO1xuICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbnMgPSB2ZXJpZmljYXRpb25zO1xuICAgICAgICB0aGlzLndhdGNoZWQgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDA7XG4gICAgICAgIHRoaXMubm9uTGluZWFySW5mbyA9IG5vbkxpbmVhckluZm87XG4gICAgICAgIHRoaXMuZXJyb3JVUkwgPSBlcnJvclVSTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGbGF0IHdhdGNoIGludGVydmFscyBhcnJheVxuICAgICAqL1xuICAgIGZsYXRXYXRjaGVkKCkge1xuICAgICAgICBjb25zdCByYW5nZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMud2F0Y2hlZCkpOyAvLyBkZWVwIGNvcHlcbiAgICAgICAgbGV0IGludGVydmFscyA9IHJhbmdlcy5zbGljZSgwKTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgbGV0IHRvcCA9IG51bGw7XG5cbiAgICAgICAgLy8gc29ydCB0aGUgaW50ZXJ2YWxzIGJhc2VkIG9uIHRoZWlyIHN0YXJ0IHZhbHVlc1xuICAgICAgICBpbnRlcnZhbHMgPSBpbnRlcnZhbHMuc29ydCgoc3RhcnQsIGVuZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0WzBdID4gZW5kWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRbMF0gPCBlbmRbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHVzaCB0aGUgMXN0IGludGVydmFsIGludG8gdGhlIHN0YWNrXG4gICAgICAgIHN0YWNrLnB1c2goaW50ZXJ2YWxzWzBdKTtcblxuICAgICAgICAvLyBzdGFydCBmcm9tIHRoZSBuZXh0IGludGVydmFsIGFuZCBtZXJnZSBpZiBuZWVkZWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbnRlcnZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgdG9wIGVsZW1lbnRcbiAgICAgICAgICAgIHRvcCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAodG9wWzFdIDwgaW50ZXJ2YWxzW2ldWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NUQUNLIDEnKTtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBpbnRlcnZhbCBkb2Vzbid0IG92ZXJsYXAgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyBzdGFjayB0b3AgZWxlbWVudCwgcHVzaCBpdCB0byB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGludGVydmFsc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvcFsxXSA8IGludGVydmFsc1tpXVsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTVEFDSyAyJyk7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHVwZGF0ZSB0aGUgZW5kIHZhbHVlIG9mIHRoZSB0b3AgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGlmIGVuZCBvZiBjdXJyZW50IGludGVydmFsIGlzIGhpZ2hlclxuICAgICAgICAgICAgICAgIHRvcFsxXSA9IGludGVydmFsc1tpXVsxXTtcbiAgICAgICAgICAgICAgICAvLyB0b3AuZHVyYXRpb24gPSB0b3AuZW5kIC0gdG9wLnN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgZXF1YWwgPSBKU09OLnN0cmluZ2lmeSh0aGlzLndhdGNoZWQpID09PSBKU09OLnN0cmluZ2lmeShzdGFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGTEFUJywgZXF1YWwsIHN0YWNrKTtcblxuICAgICAgICB0aGlzLndhdGNoZWQgPSBzdGFjaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogT25seSByZXNldCBpZiBzZWVraW5nIGJlZm9yZSBhZCBzdGFydCBwb3NpdGlvbiB0byBhdm9pZCB0cmFja2luZyB0aGUgc2FtZSBhZCB0d2ljZVxuICAgICAqIEluIHNvbWUgY2FzZSwgdGhlIHBsYXllciBjYW4gdHJpZ2dlciB1bmRlc2lyZWQgYmFja3dhcmQgc2Vla2luZyBldmVudCB3aGVuIHN3aXRjaGluZyB0aGUgcGVyaW9kXG4gICAgICogXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZWQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwO1xuXG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudHMgPT4gZXZlbnRzLnJlc2V0UHJvZ3Jlc3Npb24ocG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHByb2dyZXNzaW9uXG4gICAgICogQ2FsbCB0cmFja2VycyBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb3NpdGlvblN0YXJ0IHByb2dyZXNzaW9uIHN0YXJ0IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHBvc2l0aW9uRW5kIHByb2dyZXNzaW9uIGVuZCBwb3NpdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKSB7XG4gICAgICAgIGlmIChwb3NpdGlvblN0YXJ0ID4gcG9zaXRpb25FbmQgfHxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RhcnQgPCB0aGlzLnBvc2l0aW9uIHx8IHBvc2l0aW9uRW5kIDwgdGhpcy5wb3NpdGlvbiB8fFxuICAgICAgICAgICAgcG9zaXRpb25TdGFydCA+IHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uIHx8IHBvc2l0aW9uRW5kID4gdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE8gc2F2ZSBsYXN0IHByb2dyZXNzaW9uID8/IGF2b2lkIGNhbGN1bGF0aW5nIGF0IGVhY2ggaXRlcmF0aW9uXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uU3RhcnQgPSB0aGlzLndhdGNoZWQucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyAodmFsdWVbMV0gLSB2YWx1ZVswXSksIDApO1xuICAgICAgICBjb25zdCBwcm9ncmVzc2lvblN0YXJ0ID0gZHVyYXRpb25TdGFydCAvIHRoaXMuZHVyYXRpb247XG5cbiAgICAgICAgdGhpcy53YXRjaGVkLnB1c2goW3Bvc2l0aW9uU3RhcnQgLSB0aGlzLnBvc2l0aW9uLCBwb3NpdGlvbkVuZCAtIHRoaXMucG9zaXRpb25dKTsgLy8gdG9kbyByb3VuZCB2YWx1ZXNcbiAgICAgICAgdGhpcy5mbGF0V2F0Y2hlZCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnV0FUQ0hFRCcsIHRoaXMud2F0Y2hlZCk7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb25FbmQgPSB0aGlzLndhdGNoZWQucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyAodmFsdWVbMV0gLSB2YWx1ZVswXSksIDApO1xuICAgICAgICBjb25zdCBwcm9ncmVzc2lvbkVuZCA9IGR1cmF0aW9uRW5kIC8gdGhpcy5kdXJhdGlvbjtcblxuICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gcHJvZ3Jlc3Npb25FbmQ7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBwcm9ncmVzcyBldmVudFxuICAgICAgICBjb25zdCBhZERhdGEgPSB0aGlzLmFkQnJlYWsuYWREYXRhO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IGFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICAvKiBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSAwLjAwICYmIHByb2dyZXNzaW9uRW5kID49IDAuMDApIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcy5jcmVhdGl2ZUlkLCB0aGlzLmFkSWQsIDApO1xuICAgICAgICB9Ki9cblxuICAgICAgICBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSAwLjI1ICYmIHByb2dyZXNzaW9uRW5kID49IDAuMjUpIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcywgMjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gMC41MCAmJiBwcm9ncmVzc2lvbkVuZCA+PSAwLjUwKSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMsIDUwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDAuNzUgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMC43NSkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCA3NSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb25lIHdoZW4gZXhpdGluZyBhZFxuICAgICAgICAvKiBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSAxLjAwICYmIHByb2dyZXNzaW9uRW5kID49IDEuMDApIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcy5jcmVhdGl2ZUlkLCB0aGlzLmFkSWQsIDEwMCk7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQucHJvY2Vzc0V2ZW50KHByb2dyZXNzaW9uU3RhcnQsIHByb2dyZXNzaW9uRW5kKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocHJvZ3Jlc3Npb25TdGFydCA9PT0gMSAmJiBwcm9ncmVzc2lvbkVuZCA9PT0gMSkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGFscmVhZHkgc2VlbiAoMTAwJSknLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBwcm9ncmVzc2VkIGZyb20gJyArIE1hdGguZmxvb3IocHJvZ3Jlc3Npb25TdGFydCAqIDEwMDAwMCkgLyAxMDAwICsgJyUgdG8gJyArIE1hdGguZmxvb3IocHJvZ3Jlc3Npb25FbmQgKiAxMDAwMDApIC8gMTAwMCArICclIChpZDogJyArIHRoaXMuYWRJZCArICcpJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIHB1YmxpYyBldmVudCB0byBhbm5vdW5jZSBhbiBhZFxuICAgICAqL1xuICAgIHByb2Nlc3NQcmVwYXJlKCkge1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IHRoaXMuYWRCcmVhay5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG4gICAgICAgIGNvbnN0IGFkRXZlbnRzTGlzdGVuZXIgPSBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmFkU2Vzc2lvbj8uYWRFdmVudHNMaXN0ZW5lcjtcbiAgICAgICAgaWYgKHRoaXMucHJlcGFyZWQgPT09IGZhbHNlICYmIGFkRXZlbnRzTGlzdGVuZXI/Lm9uUHJlcGFyZUFkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkRXZlbnRzTGlzdGVuZXIub25QcmVwYXJlQWQodGhpcy50b0RhdGEoKSwgdGhpcy5hZEJyZWFrLnRvRGF0YSgpKTtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0cmFja2VycyB3aGVuIHN0YXJ0aW5nIGFuIGFkXG4gICAgICovXG4gICAgcHJvY2Vzc0JlZ2luKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWREYXRhID0gdGhpcy5hZEJyZWFrLmFkRGF0YTtcbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSBhZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgYWQgYmVnaW4gJyArIHRoaXMuYWRJZCArICcuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1N0YXJ0OiAnICsgKHRoaXMucG9zaXRpb24pICsgJ21zJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdFbmQgIDogJyArICh0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbikgKyAnbXMnLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0R1cmF0aW9uOiAnICsgdGhpcy5kdXJhdGlvbiArICdtcycsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVHlwZTogJyArIHRoaXMuYWRUeXBlLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGludGVybmFsIGV2ZW50c1xuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZERhdGEodGhpcyk7XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQmVnaW4oYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnNraXBwYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRTa2lwcGFibGUoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcy5za2lwcGFibGVQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24sIHRoaXMuYWRCcmVhay5wb3NpdGlvbiArIHRoaXMuYWRCcmVhay5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCAwKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHB1YmxpYyBldmVudHNcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBjb25zdCBhZCA9IHRoaXMudG9EYXRhKCk7XG4gICAgICAgIGNvbnN0IGFkQnJlYWsgPSB0aGlzLmFkQnJlYWsudG9EYXRhKCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1ByZXBhcmUoKTtcblxuICAgICAgICAvLyBPTVNESyBzcGVjaWZpY1xuICAgICAgICBpZiAoYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlcj8ub21TZXNzaW9uSGFuZGxlcikge1xuICAgICAgICAgICAgYWRbJ29tQWRTZXNzaW9uSWQnXSA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIub21TZXNzaW9uSGFuZGxlci5vbUFkU2Vzc2lvbj8uYWRTZXNzaW9uPy5nZXRBZFNlc3Npb25JZCgpO1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIuY3VycmVudEFkRGF0YSA9IGFkO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRFdmVudHNMaXN0ZW5lcj8ub25BZEJlZ2luKGFkLCBhZEJyZWFrKTtcbiAgICAgICAgaWYgKHRoaXMuc2tpcHBhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhZEV2ZW50c0xpc3RlbmVyPy5vbkFkU2tpcHBhYmxlKGFkLCBhZEJyZWFrLCB0aGlzLnNraXBwYWJsZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbiwgdGhpcy5hZEJyZWFrLnBvc2l0aW9uICsgdGhpcy5hZEJyZWFrLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdHJhY2tlcnMgd2hlbiBlbmRpbmcgYW4gYWRcbiAgICAgKi9cbiAgICBwcm9jZXNzRW5kKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWREYXRhID0gdGhpcy5hZEJyZWFrLmFkRGF0YTtcbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSBhZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgYWQgZW5kICcgKyB0aGlzLmFkSWQgKyAnLi4uJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgLy8gSGFuZGxlIGVycm9ycywgcHJvY2VzcyAxMDAlIGlmIHRyYWNraW5nIHByb2dyZXNzaW9uIGlzIDAuOTUlK1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc2lvbiA+PSAwLjk1KSB7XG4gICAgICAgICAgICAvLyBTZXQgcHJvZ3Jlc3Npb24gdG8gMVxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcywgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZEVuZChhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHB1YmxpYyBldmVudHNcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBhZEV2ZW50c0xpc3RlbmVyPy5vbkFkRW5kKHRoaXMudG9EYXRhKCksIHRoaXMuYWRCcmVhay50b0RhdGEoKSk7XG5cbiAgICAgICAgLy8gSW4tYmFuZCBhZHM6XG4gICAgICAgIC8vICAgICAgT25jZSBwbGF5ZWQsIHRoZSBhZCBjYW4gYmUgcmVwbGF5ZWQgYWdhaW5cbiAgICAgICAgLy8gT3V0LW9mLWJhbmQgYWRzOlxuICAgICAgICAvLyAgICAgIE9uY2UgcGxheWVkLCB0aGUgYWQgaXMgZGVsZXRlZFxuICAgICAgICBpZiAodGhpcy5hZEJyZWFrLm9vYmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFByb2Nlc3MoKTtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5vbkxpbmVhclJlc291cmNlcyhyZXNvdXJjZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9uTGluZWFySW5mby5maWx0ZXIob2JqID0+IG9ialtyZXNvdXJjZVR5cGVdICE9PSAnJykubWFwKG9iaiA9PiAoe1xuICAgICAgICAgICAgdXJsOiBvYmpbcmVzb3VyY2VUeXBlXSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IG9iai5hZFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBjcmVhdGl2ZUlkOiBvYmouY3JlYXRpdmVJZFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgdG9EYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRUeXBlOiB0aGlzLmFkVHlwZSxcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgY3JlYXRpdmVJZDogdGhpcy5jcmVhdGl2ZUlkLFxuICAgICAgICAgICAgYWRJZDogdGhpcy5hZElkLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICAgIHNraXBQb3NpdGlvbjogdGhpcy5za2lwcGFibGVQb3NpdGlvbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgY2xpY2tVUkw6IHRoaXMuY2xpY2thYmxlLnVyaSxcbiAgICAgICAgICAgIG5vbkxpbmVhcklmcmFtZVJlc291cmNlczogdGhpcy5nZXROb25MaW5lYXJSZXNvdXJjZXMoJ2lmcmFtZVJlc291cmNlJyksXG4gICAgICAgICAgICBub25MaW5lYXJTdGF0aWNSZXNvdXJjZXM6IHRoaXMuZ2V0Tm9uTGluZWFyUmVzb3VyY2VzKCdzdGF0aWNSZXNvdXJjZScpXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIEFkIGV2ZW50IGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEFkRXZlbnRUcmFja2VyIGV4dGVuZHMgVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogQWQgdHJhY2tlclxuICAgICAqL1xuICAgIGFkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdHlwZVxuICAgICAqL1xuICAgIHR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBjYWxsYmFja3VybFxuICAgICAqL1xuICAgIHVybDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IG9mZnNldFxuICAgICAqL1xuICAgIG9mZnNldDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHRpbWVfbXNcbiAgICAgKiBEZXByZWNhdGVkXG4gICAgICovXG4gICAgcG9zaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJvZ3Jlc3Npb247XG5cbiAgICBjb25zdHJ1Y3RvcihhZCwgdHlwZSwgdXJsLCBvZmZzZXQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZCA9IGFkO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUHJvZ3Jlc3Npb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSB0aGlzLmFkLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV2ZW50IHRyaWdnZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwcm9jZXNzUHJvZ3Jlc3Npb24oKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAodGhpcy50eXBlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB0aGlzLnR5cGUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gKHRoaXMucG9zaXRpb24gLSB0aGlzLmFkLnBvc2l0aW9uKSAvIHRoaXMuYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDAuMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0cXVhcnRpbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWlkcG9pbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aGlyZHF1YXJ0aWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC43NTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMS4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSB0aGlzLm9mZnNldCAvIHRoaXMuYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbXByZXNzaW9uJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ5IHRvIHByb2Nlc3MgZXZlbnRcbiAgICAgKiBUcmlnZ2VyIGV2ZW50IGlmIGV2ZW50IHRyaWdnZXIgcHJvZ3Jlc3Npb24gaXMgYmV0d2VlbiBwcm9ncmVzc2lvbiBzdGFydCBhbmQgcHJvZ3Jlc3Npb24gZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3Npb25TdGFydCBwcm9ncmVzc2lvbiBzdGFydFxuICAgICAqIEBwYXJhbSBwcm9ncmVzc2lvbkVuZCBwcm9ncmVzc2lvbiBlbmRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZXZlbnQgaGFzIGJlZW4gcHJvY2VlZGVkXG4gICAgICovXG4gICAgcHJvY2Vzc0V2ZW50KHByb2dyZXNzaW9uU3RhcnQsIHByb2dyZXNzaW9uRW5kKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzaW9uU3RhcnQgKyAnIDwgJyArIHRoaXMucHJvZ3Jlc3Npb24gKyAnIDwgJyArIHByb2dyZXNzaW9uRW5kKTtcbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSB0aGlzLmFkLmFkQnJlYWsuYWREYXRhLmFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgICAgIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IHRoaXMucHJvZ3Jlc3Npb24gJiYgdGhpcy5wcm9ncmVzc2lvbiA8PSBwcm9ncmVzc2lvbkVuZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYWQuYWRUeXBlID09PSBBZFR5cGUuQURfTk9OX0xJTkVBUiAmJiB0aGlzLnR5cGUgPT09ICdpbXByZXNzaW9uJykge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdGb3VuZCBpbXByZXNzaW9uIHRyYWNrZXIgb24gbm9uLWxpbmVhciBhZCwgcGxlYXNlIHVzZSBzZW5kVHJhY2tlcihcXCdjcmVhdGl2ZVZpZXdcXCcsIGFkSWQpIHRvIHNlbmQgaXQnLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nICcgKyAodGhpcy50eXBlIHx8ICd0aW1lZCBldmVudCcpICsgJyAoJyArIChNYXRoLmZsb29yKHRoaXMucHJvZ3Jlc3Npb24gKiAxMDApKSArICclKS4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51cmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlcXVlc3RpbmcgJyArIHRoaXMudXJsLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkRXZlbnQoYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlciwgdGhpcy51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEpvYk1hbmFnZXIgZnJvbSAnLi4vLi4vc2VydmljZS9Kb2JNYW5hZ2VyJztcbmltcG9ydCBSZXF1ZXN0TWFuYWdlciBmcm9tICcuLi8uLi9yZXF1ZXN0L1JlcXVlc3RNYW5hZ2VyJztcbmltcG9ydCB7U3RyZWFtaW5nU2Vzc2lvbk9wdGlvbnN9IGZyb20gJy4uLy4uL3Nlc3Npb24vc3RyZWFtaW5nL1N0cmVhbWluZ1Nlc3Npb25PcHRpb25zJztcbmltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgVVJMIGZyb20gJy4uLy4uL3V0aWxzL1VSTCc7XG5cbmltcG9ydCB7QWRCcmVha1RyYWNrZXIsIEFkQnJlYWtFdmVudFRyYWNrZXIsIEFkRGF0YVRyYWNrZXIsIEFkRXZlbnRUcmFja2VyLCBBZFRyYWNrZXJ9IGZyb20gJy4vQWRUcmFja2VyJztcblxuaW1wb3J0IHtBZFR5cGV9IGZyb20gJy4vLi4vQWRNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0FkVHJhY2tpbmdNZ3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZFRyYWNraW5nTWFuYWdlciB7XG4gICAgc3RhdGljIFBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCA9IDEwMDA7XG5cbiAgICBzdGF0aWMgUE9TSVRJT05fU1RBUlRfREVMVEEgPSA0MDAwO1xuXG4gICAgc3RhdGljIFBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEgPSA2MDAwO1xuXG4gICAgc3RhdGljIFBPU0lUSU9OX1BSRVBBUkVfREVMVEEgPSAzMDAwO1xuXG4gICAgc3RhdGljIFNFU1NJT05fVVBEQVRFX0lOVEVSVkFMID0gNTAwMDtcblxuICAgIHN0YXRpYyBORUFSX0FEX0RFTFRBID0gdGhpcy5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwgKiAxLjI7XG5cbiAgICBzdGF0aWMgT09CQV9SRVFVRVNUX1RJTUVPVVQgPSA1MDAwO1xuXG4gICAgLy8gc3RhdGljIE5PTkNFX0VYUElSQVRJT05fVElNRSA9IDUgKiA2MCAqIDEwMDA7XG5cbiAgICAvKipcbiAgICAgKiBTZXNzaW9uIGhhbmRsZXJcbiAgICAgKi9cbiAgICBoYW5kbGVyO1xuXG4gICAgLyoqXG4gICAgICogUGxheWVyIGFkYXB0ZXJcbiAgICAgKi9cbiAgICBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgLyoqXG4gICAgICogQWQgdHJhY2tpbmcgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgbGlzdGVuZXJzO1xuXG4gICAgLyoqXG4gICAgICogQWQgZGF0YSAoYWxsIGFkIGJyZWFrcywgYWxsIGFkcyBhbmQgYWxsIGV2ZW50cylcbiAgICAgKi9cbiAgICBhZERhdGE7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGFkIGxpc3RcbiAgICAgKi9cbiAgICBhZExpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG91dC1vZi1iYW5kIGFkIGxpc3RcbiAgICAgKi9cbiAgICBvdXRPZkJhbmRBZExpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgcG9zaXRpb24gam9iXG4gICAgICogVXNlZCB0byB0cmFjayB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZVBvc2l0aW9uSm9iO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEJrWW91IHNlc3Npb24gam9iXG4gICAgICovXG4gICAgdXBkYXRlU2Vzc2lvbkpvYjtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIHNlc3Npb24gc3RhcnRlZFxuICAgICAqL1xuICAgIHN0YXJ0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwYXVzZWRcbiAgICAgKi9cbiAgICBwYXVzZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBidWZmZXJpbmdcbiAgICAgKi9cbiAgICBidWZmZXJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwb3NpdGlvblxuICAgICAqL1xuICAgIGxhc3RQb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIHBvc2l0aW9uIHdoZW4gb25QYXVzZSBpcyBjYWxsZWRcbiAgICAgKi9cbiAgICBsYXN0UG9zaXRpb25CZWZvcmVQYXVzZTtcblxuICAgIC8qKlxuICAgICAqIExhc3Qgc2VlayBwb3NpdGlvbiwgdXNlZCB0byBoYW5kbGUgYmFkIHBvc2l0aW9uIHdoZW4gb25CdWZmZXJpbmdFbmQgY2FsbGVkXG4gICAgICovXG4gICAgbGFzdFBvc2l0aW9uQWZ0ZXJTZWVrO1xuXG4gICAgLyoqXG4gICAgICogRmlyc3QgaW1hZ2UgZGF0ZVxuICAgICAqL1xuICAgIGZpcnN0SW1hZ2VEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCB0cmFja2VyXG4gICAgICovXG4gICAgY3VycmVudEFkVHJhY2tlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgYnJlYWsgdHJhY2tlclxuICAgICAqL1xuICAgIGN1cnJlbnRBZEJyZWFrVHJhY2tlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgb3V0LW9mLWJhbmQgYWQgdHJhY2tlcnNcbiAgICAgKi9cbiAgICBjdXJyZW50T3V0T2ZCYW5kQWRUcmFja2VycztcbiAgICBcbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG91dC1vZi1iYW5kIGFkIGJyZWFrIHRyYWNrZXJzXG4gICAgICovXG4gICAgY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2VycztcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgZGF0YSBmb3IgZ2V0Q3VycmVudEFkKClcbiAgICAgKi9cbiAgICBjdXJyZW50QWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCBicmVhayBkYXRhIGZvciBnZXRDdXJyZW50QWRCcmVhaygpXG4gICAgICovXG4gICAgY3VycmVudEFkQnJlYWtEYXRhO1xuXG4gICAgLyoqXG4gICAgICogR29vZ2xlIFBBTCBzZXNzaW9uXG4gICAgICovXG4gICAgYWRQYWxTZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbiBmbGFnXG4gICAgICovXG4gICAgYmtZb3VTZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbiB0b2tlblxuICAgICAqL1xuICAgIHNlc3Npb25Ub2tlbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkIHRyYWNraW5nIGJhc2UgVVJMXG4gICAgICovXG4gICAgYmFzZVVSTDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkIHRyYWNraW5nIG5vbmNlXG4gICAgICovXG4gICAgbm9uY2U7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZSBjcmVhdGlvbiBkYXRlXG4gICAgICovXG4gICAgLy8gbm9uY2VEYXRlXG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZSByZXF1ZXN0XG4gICAgICovXG4gICAgYWRQYWxTZXNzaW9uUmVxdWVzdDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGZpcnN0IGZ1bGwgYWQgdHJhY2tpbmcgZmlsZSByZWNlaXZlZFxuICAgICAqL1xuICAgIGZpcnN0RmlsZVJlY2VpdmVkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgZmlyc3QgZnVsbCBhZCB0cmFja2luZyBmaWxlIHByb2NlZWRlZFxuICAgICAqL1xuICAgIGZpcnN0RmlsZVByb2NlZWRlZDtcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBwb2RzIHNlbnQgdG8gb25BZERhdGEgYmVmb3JlIGZpcnN0RmlsZVByb2NlZWRlZCA9PT0gdHJ1ZVxuICAgICAqIG9uQWREYXRhIGlzIHJlZ2lzdGVyZWQgdGhyb3VnaCBzZXNzaW9uLnNldEFkRGF0YUxpc3RlbmVyKC4uLilcbiAgICAgKi9cbiAgICBwb2RzU2VudE51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcmVmcmVzaCBkZWxheSB0byB1cGRhdGUgdGhlIHRyYWNrZXJzIGZyb20gQmtZb3VcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIFNFU1NJT05fVVBEQVRFX0lOVEVSVkFMXG4gICAgICovXG4gICAgc2Vzc2lvblVwZGF0ZUludGVydmFsO1xuXG4gICAgLyoqXG4gICAgICogUGxheWJhY2sgaGlzdG9yeSBmb3Igd2hlbiByZWNlaXZpbmcgdHJhY2tpbmcgZmlsZSBhc3luY2hyb25vdXNseVxuICAgICAqIEZvcm1hdDogW3tzdGFydDogMCwgZW5kOiAxMDAwfSwge3N0YXJ0OiAxMjAwLCBlbmQ6IDE4MDB9LCAuLi5dXG4gICAgICovXG4gICAgcG9zaXRpb25IaXN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIgPSBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5hZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5hZExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5vdXRPZkJhbmRBZExpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXJzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2VycyA9IFtdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UgPSAwO1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlayA9IDA7XG5cbiAgICAgICAgdGhpcy5ia1lvdVNlc3Npb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm5vbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyB0aGlzLm5vbmNlRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5maXJzdEZpbGVSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvZHNTZW50TnVtYmVyID0gMDtcblxuICAgICAgICB0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCA9IEFkVHJhY2tpbmdNYW5hZ2VyLlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgc2Vzc2lvbiBvbiB0aGUgQmtZb3VcbiAgICAgKiBDYWxsZWQgd2hlbiBzdGFydGluZyBhIHNlc3Npb24gKGR1cmluZyBnZXRVUkwgb3IgZmlyc3QgaW1hZ2UgZXZlbnQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmFzZVVSTCBNYW5pZmVzdCBiYXNlIFVSTFxuICAgICAqIEBwYXJhbSBzZXNzaW9uVG9rZW4gQmtZb3Ugc2Vzc2lvbiB0b2tlblxuICAgICAqIEBwYXJhbSBkYXRhIEJrWW91IEpTT05cbiAgICAgKiBAcGFyYW0gYWRQYWxTZXNzaW9uIEdvb2dsZSBQQUwgc2Vzc2lvbiBkYXRhXG4gICAgICogQHBhcmFtIG5vbmNlIEdvb2dsZSBQQUwgbm9uY2VcbiAgICAgKi9cbiAgICBpbml0QmtZb3VTZXNzaW9uKGJhc2VVUkwsIHNlc3Npb25Ub2tlbiwgZGF0YSwgYWRQYWxTZXNzaW9uLCBub25jZSkge1xuICAgICAgICAvLyBTdG9yZSBiYXNlIHVybFxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBiYXNlVVJMO1xuXG4gICAgICAgIC8vIFNldCBCa1lvdSBzZXNzaW9uXG4gICAgICAgIHRoaXMuc2Vzc2lvblRva2VuID0gc2Vzc2lvblRva2VuO1xuICAgICAgICB0aGlzLmJrWW91U2Vzc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gR2V0IG5vbmNlXG4gICAgICAgIGlmIChhZFBhbFNlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZFBhbFNlc3Npb24gPSBhZFBhbFNlc3Npb247XG4gICAgICAgICAgICB0aGlzLm5vbmNlID0gbm9uY2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBCa1lvdSBmaWxlXG4gICAgICAgIHRoaXMucGFyc2VBZFBvZHMoZGF0YSk7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0JrWW91IHNlc3Npb24gaW5pdGlhbGl6ZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbG9hZCBCa1lvdSBKU09OXG4gICAgICovXG4gICAgdXBkYXRlQmtZb3VTZXNzaW9uKCkge1xuICAgICAgICAvLyBDYW5jZWwgcmVxdWVzdCBpZiBzZXNzaW9uIGhhcyBiZWVuIHN0b3BwZWRcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5zdG9wcGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ia1lvdVNlc3Npb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGluZyBhZCB0cmFja2luZyBmaWxlLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgLy8gQWRkIG5vbmNlIHRvIHRoZSByZXF1ZXN0IHVybFxuICAgICAgICAgICAgbGV0IGFkVHJhY2tpbmdVUkwgPSB0aGlzLmJhc2VVUkw7XG5cbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBuZXcgbm9uY2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAvKiBpZiAodGhpcy5hZFBhbFNlc3Npb25SZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vbmNlID0gdGhpcy5hZFBhbFNlc3Npb25SZXF1ZXN0LmFkUGFsU2Vzc2lvbj8uZ2V0Tm9uY2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vbmNlRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnTmV3IGFkIFBBTCBzZXNzaW9uIG5vbmNlICcgKyB0aGlzLm5vbmNlLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIGNvbnN0IHNtYXJ0TGliUGFyYW1ldGVycyA9IHRoaXMuaGFuZGxlci5zbWFydExpYi5nZXRQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICAgIHVzZXJBZ2VudDogc21hcnRMaWJQYXJhbWV0ZXJzLnVzZXJBZ2VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFJlcXVlc3RNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRUcmFja2luZyh0aGlzLmhhbmRsZXIsIHBhcmFtZXRlcnMsIGFkVHJhY2tpbmdVUkwsIHRydWUpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIHJlcXVlc3QgaWYgc2Vzc2lvbiBoYXMgYmVlbiBzdG9wcGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXIuc3RvcHBlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGFjdGl2ZSBrZWVwYWxpdmUgam9iXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhbmNlbCh0aGlzLnVwZGF0ZVNlc3Npb25Kb2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5odHRwU3RhdHVzID49IDIwMCAmJiByZXN1bHQuaHR0cFN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIEJrWW91IEpTT04gZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgdXBkYXRlZCBmaWxlIHVucmVhZGFibGUnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdGFydCBrZWVwYWxpdmUgam9iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RGaWxlUmVjZWl2ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXNzaW9uSm9iID0gSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFzeW5jRGVsYXkodGhpcy5zZXNzaW9uVXBkYXRlSW50ZXJ2YWwsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCa1lvdVNlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCBmaWxlIHJlY2VpdmVkICh1c2VkIHRvIGV4ZWN1dGUgZXZlbnQgZnJvbSBmaXJzdCBpbWFnZSB0byBjdXJyZW50IHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEZpbGVSZWNlaXZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGFkcyBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQWRQb2RzKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBEaXNhYmxlZDogTm8gbmVlZCB0byB1cGRhdGUgdGhlIG5vbmNlLCBvbmx5IDEgbm9uY2UgcGVyIHNlc3Npb24gaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkIGJyZWFrcyBhZnRlciB1cGRhdGUgKHRvIGJlIGNvbXBhcmVkIHdpdGggYWRCcmVha3NCZWZvcmVVcGRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrc0FmdGVyVXBkYXRlID0gdGhpcy5iYXNlRXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC50cmFja2VyIGluc3RhbmNlb2YgQWRCcmVha0JlZ2luVHJhY2tlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGFkIGJyZWFrcyBhcmUgZGlmZmVyZW50LCBnZW5lcmF0ZSBhIG5ldyBub25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkQnJlYWtzQmVmb3JlVXBkYXRlLmxlbmd0aCAhPT0gYWRCcmVha3NBZnRlclVwZGF0ZS5sZW5ndGggfHwgRGF0ZS5ub3coKSAtIHRoaXMubm9uY2VEYXRlID4gQWRUcmFja2luZ01hbmFnZXIuTk9OQ0VfRVhQSVJBVElPTl9USU1FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgbm9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5vbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRCcmVha3NCZWZvcmVVcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha0JlZm9yZVVwZGF0ZSA9IGFkQnJlYWtzQmVmb3JlVXBkYXRlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrQWZ0ZXJVcGRhdGUgPSBhZEJyZWFrc0FmdGVyVXBkYXRlW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrQmVmb3JlVXBkYXRlLmFkQnJlYWtJZCAhPT0gYWRCcmVha0FmdGVyVXBkYXRlLmFkQnJlYWtJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgbm9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTm9uY2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXMgbGl2ZSwgcmVzdGFydCB1cGRhdGUgQmtZb3UgZGF0YSBqb2JcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgYSBrZWVwYWxpdmUgam9iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXNzaW9uSm9iID0gSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFzeW5jRGVsYXkodGhpcy5zZXNzaW9uVXBkYXRlSW50ZXJ2YWwsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXNzaW9uSm9iID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTdG9wcGluZyBhZCB0cmFja2luZyBmaWxlIHVwZGF0ZSAoVk9EIHN0cmVhbSkuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1N0b3BwaW5nIGFkIHRyYWNraW5nIGZpbGUgdXBkYXRlIChzdGF0dXMgY29kZSAnICsgcmVzdWx0Lmh0dHBTdGF0dXMgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIHVwZGF0ZU5vbmNlKCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVXBkYXRpbmcgbm9uY2UuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIHRoaXMubm9uY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdCA9IHRoaXMuaGFuZGxlci5zbWFydExpYi5pbnRlcm5hbEFkTWFuYWdlci5nZXRBZFBhbFNlc3Npb25SZXF1ZXN0KCk7XG4gICAgfSovXG5cbiAgICAvKipcbiAgICAgKiBJbiBzb21lIGNhc2VzLCBhZHMgbWF5IG92ZXJsYXBcbiAgICAgKiBUaGlzIGlzIGJlY2F1c2Ugc29tZSBITFMgLyBEQVNIIHJlcHJlc2VudGF0aW9ucyBtYXkgYmUgbG9uZ2VyIHRoYW4gb3RoZXJzIChwbGF5ZXJzIHNob3VsZCBiZSBwcmVwYXJlZCBmb3IgdGhpczogZm9yIGV4YW1wbGUgREFTSCBjdXRzIGJlZm9yZSBhZCBlbmQpXG4gICAgICogQmtZb3UgZm9yd2FyZHMgaW5mbyBhcyBpc1xuICAgICAqIFRoaXMgbWV0aG9kIHJlbW92ZXMgb3ZlcmxhcCBieSBzaGlmdGluZyBuZXh0IGFkIHN0YXJ0IHRvIGVuZCBvZiBjdXJyZW50IGFkXG4gICAgICogXG4gICAgICogQWxzbywgdGhpcyBtZXRob2QgcmVjb21wdXRlcyBhZCBicmVhayBkdXJhdGlvblxuICAgICAqICAtIHdoZXRoZXIgZHVlIHRvIGFkcyBvdmVybGFwIChzZWUgYWJvdmUpXG4gICAgICogIC0gd2hldGhlciBkdWUgdG8gYWRzIGJlaW5nIGFkZGVkIGluIGFkIGJyZWFrXG4gICAgICogICAgICAtIGR1cmluZyBMSVZFIGNvbnRlbnRzXG4gICAgICogICAgICAtIGFmdGVyIG5vdGlmeUZpcnN0SW1hZ2UgZm9yIGJrLW1sPTIuMCB3b3JrZmxvdyAoTElWRSBvciBWT0QpXG4gICAgICogXG4gICAgICogQHBhcmFtIGFkQnJlYWsgYWQgYnJlYWsgdG8gZml4XG4gICAgICovXG4gICAgZml4QWRCcmVhayhhZEJyZWFrKSB7XG4gICAgICAgIGxldCBsYXN0QWQ7XG4gICAgICAgIGFkQnJlYWsuYWRzLmZvckVhY2goKGFkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEFkID0gYWRCcmVhay5hZHNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIGlmIChuZXh0QWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBZEVuZCA9IGFkLnBvc2l0aW9uICsgYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgaWYgKG5leHRBZC5wb3NpdGlvbiA8IGN1cnJlbnRBZEVuZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgb3ZlcmxhcCBkZXRlY3RlZCwgcG9zaXRpb24gdXBkYXRlZCBmcm9tICcgKyBuZXh0QWQucG9zaXRpb24gKyAnIHRvICcgKyBjdXJyZW50QWRFbmQgKyAnIChpZDogJyArIG5leHRBZC5hZElkICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0QWQucG9zaXRpb24gPSBjdXJyZW50QWRFbmQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRBZC5ldmVudHMuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBvc2l0aW9uIDwgY3VycmVudEFkRW5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnBvc2l0aW9uID0gY3VycmVudEFkRW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0QWQgPSBhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxhc3RBZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZER1cmF0aW9uID0gbGFzdEFkLnBvc2l0aW9uICsgbGFzdEFkLmR1cmF0aW9uIC0gYWRCcmVhay5wb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChhZEJyZWFrLmR1cmF0aW9uICE9PSBleHBlY3RlZER1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIGR1cmF0aW9uIHVwZGF0ZWQgZnJvbSAnICsgYWRCcmVhay5kdXJhdGlvbiArICcgdG8gJyArIGV4cGVjdGVkRHVyYXRpb24gKyAnIChpZDogJyArIGFkQnJlYWsuaWQgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgYWRCcmVhay5kdXJhdGlvbiA9IGV4cGVjdGVkRHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhZCBkYXRhIEpTT04gYW5kIG1lcmdlIHdpdGggZXhpc3RpbmcgYWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgYWQgZGF0YSBKU09OXG4gICAgICogQHBhcmFtIG9vYmEgb3V0LW9mLWJhbmQgYWQgcmVsYXRlZCBkYXRhXG4gICAgICovXG4gICAgcGFyc2VBZFBvZHMoZGF0YSwgb29iYSkge1xuICAgICAgICBjb25zdCBzZXNzaW9uVG9rZW4gPSBkYXRhWydzZXNzaW9udG9rZW4nXSB8fCAnJztcbiAgICAgICAgY29uc3QgdGltZVJlZmVyZW5jZSA9IGRhdGFbJ3RpbWVyZWZlcmVuY2VfbXMnXSB8fCAwO1xuXG4gICAgICAgIGlmIChvb2JhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFNldCByZWZyZXNoIGRlbGF5IGlmIGRlZmluZWQgKDIgdG8gNSBzZWNzKVxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaERlbGF5ID0gZGF0YVsncmVmcmVzaF9kZWxheV9tcyddIHx8IEFkVHJhY2tpbmdNYW5hZ2VyLlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMO1xuICAgICAgICAgICAgaWYgKHJlZnJlc2hEZWxheSA+PSAyMDAwICYmIHJlZnJlc2hEZWxheSA8PSBBZFRyYWNraW5nTWFuYWdlci5TRVNTSU9OX1VQREFURV9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsID0gcmVmcmVzaERlbGF5O1xuXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NldHRpbmcgcmVmcmVzaCBkZWxheSB0byAnICsgdGhpcy5zZXNzaW9uVXBkYXRlSW50ZXJ2YWwgKyAnbXMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2V0dGluZyByZWZyZXNoIGRlbGF5IHRvICcgKyBBZFRyYWNraW5nTWFuYWdlci5TRVNTSU9OX1VQREFURV9JTlRFUlZBTCArICdtcyAoZGVmYXVsdCB2YWx1ZSknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWREYXRhVHJhY2tlciA9IG5ldyBBZERhdGFUcmFja2VyKHRoaXMsIHNlc3Npb25Ub2tlbiwgdGltZVJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnN0IGFkUG9kcyA9IGRhdGFbJ2FkcG9kcyddO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhZFBvZHMpKSB7XG4gICAgICAgICAgICBhZFBvZHMuZm9yRWFjaChhZFBvZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha0lkID0gYWRQb2RbJ2lkJ10gfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gYWRQb2RbJ3N0YXJ0dGltZV9tcyddICsgdGltZVJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBhZFBvZFsnZHVyYXRpb25fbXMnXSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkcyA9IGFkUG9kWydhZHMnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tpbmdFdmVudHMgPSBhZFBvZFsnYWRicmVha3RyYWNraW5nZXZlbnRzJ107XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tlciA9IG5ldyBBZEJyZWFrVHJhY2tlcihhZERhdGFUcmFja2VyLCBhZEJyZWFrSWQsIHN0YXJ0VGltZSwgZHVyYXRpb24sIHRoaXMuaXNMaXZlKCksIG9vYmEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWRCcmVha1RyYWNraW5nRXZlbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICBhZEJyZWFrVHJhY2tpbmdFdmVudHMuZm9yRWFjaChhZEJyZWFrVHJhY2tpbmdFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja3VybCA9IGFkQnJlYWtUcmFja2luZ0V2ZW50WydjYWxsYmFja3VybCddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2t1cmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBhZEJyZWFrVHJhY2tpbmdFdmVudFsndHlwZSddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBnZXQgdGltZSBmb3IgYWQgYnJlYWsgZXZlbnQgdHJhY2tlciBiZWNhdXNlIHN0YXJ0L2VuZCB0aW1lcyBhcmUgYWxyZWFkeSBoYW5kbGVkIGluIEFkQnJlYWtUcmFja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha0V2ZW50VHJhY2tlciA9IG5ldyBBZEJyZWFrRXZlbnRUcmFja2VyKGFkQnJlYWtUcmFja2VyLCB0eXBlLCBjYWxsYmFja3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIudHJhY2tpbmdFdmVudHMucHVzaChhZEJyZWFrRXZlbnRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgYWRzXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWRzKSkge1xuICAgICAgICAgICAgICAgICAgICBhZHMuZm9yRWFjaCgoYWQsIHNlcXVlbmNlTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBhZFsnc3RhcnR0aW1lX21zJ10gKyB0aW1lUmVmZXJlbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBhZFsnZHVyYXRpb25fbXMnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGFkWyd0cmFja2luZ2V2ZW50cyddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgYWRkIGFkIHdpdGggdGltZV9tcyBlcXVhbCB0byAwLCBpdCBtZWFucyBpdCBpcyBub3QgZnVsbHkgcHJvY2VlZGVkIGJ5IHRoZSBCa1lvdVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWRBZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudHMpICYmIGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZEFkID0gKHN0YXJ0VGltZSA+IDAgJiYgZXZlbnRzWzBdWyd0aW1lX21zJ10gPiAwKSB8fCBzdGFydFRpbWUgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGFkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUaW1lICE9PSB1bmRlZmluZWQgJiYgZHVyYXRpb24gIT09IHVuZGVmaW5lZCAmJiBpc1ZhbGlkQWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFR5cGUgPSBBZFR5cGUuZ2V0QWRUeXBlKGFkWydhZHR5cGUnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpcHBhYmxlVGltZSA9IGFkWydza2lwcGFibGVfbXMnXSArIHRpbWVSZWZlcmVuY2UgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBza2lwcGFibGUgPSBza2lwcGFibGVUaW1lICE9PSAwICYmIHNraXBwYWJsZVRpbWUgIT09IHVuZGVmaW5lZCAmJiBza2lwcGFibGVUaW1lICE9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0aXZlSWQgPSBhZFsnY3JlYXRpdmVpZCddIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkSWQgPSBhZFsnYWRpZCddICsgJy0nICsgc3RhcnRUaW1lIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBhZC52aWRlb2NsaWNrcz8uY2xpY2t0aHJvdWdodXJsIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2VyczogYWQudmlkZW9jbGlja3M/LmNsaWNrdHJhY2tpbmcgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsaWNrOiBhZC52aWRlb2NsaWNrcz8uY3VzdG9tY2xpY2sgfHwgW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkVmVyaWZpY2F0aW9ucyA9IGFkLmFkdmVyaWZpY2F0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVyaWZpY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVmVyaWZpY2F0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVuZG9yOiBlbGVtZW50LnZlbmRvciB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHRSZXNvdXJjZXM6IGVsZW1lbnQuamF2YXNjcmlwdHJlc291cmNlcyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVSZXNvdXJjZXM6IGVsZW1lbnQuZXhlY3V0YWJsZXJlc291cmNlcyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNraW5nRXZlbnRzOiBlbGVtZW50LnRyYWNraW5nZXZlbnRzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uUGFyYW1ldGVyczogZWxlbWVudC52ZXJpZmljYXRpb25wYXJhbWV0ZXJzIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWROb25MaW5lYXJJbmZvID0gYWRbJ25vbmxpbmVhcmluZm8nXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9uTGluZWFySW5mbyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkTm9uTGluZWFySW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25MaW5lYXJJbmZvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRpdmVJZDogZWxlbWVudC5jcmVhdGl2ZWlkIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljUmVzb3VyY2U6IGVsZW1lbnQuc3RhdGljcmVzb3VyY2UgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVSZXNvdXJjZTogZWxlbWVudC5pZnJhbWVyZXNvdXJjZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkUGFyYW1ldGVyczogZWxlbWVudC5hZHBhcmFtZXRlcnMgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2luZ0V2ZW50czogZWxlbWVudC50cmFja2luZ2V2ZW50cyB8fCBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclVSTCA9IGFkWydlcnJvcnVybCddIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkVHJhY2tlciA9IG5ldyBBZFRyYWNrZXIoYWRUeXBlLCBhZEJyZWFrVHJhY2tlciwgc2VxdWVuY2VOdW1iZXIsIHN0YXJ0VGltZSwgZHVyYXRpb24sIHNraXBwYWJsZSwgc2tpcHBhYmxlVGltZSwgY3JlYXRpdmVJZCwgYWRJZCwgY2xpY2thYmxlLCB2ZXJpZmljYXRpb25zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFySW5mbywgZXJyb3JVUkwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLmFkcy5wdXNoKGFkVHJhY2tlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGV2ZW50WydjYWxsYmFja3VybCddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gZXZlbnRbJ3R5cGUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBldmVudFsnb2Zmc2V0X21zJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGV2ZW50Wyd0aW1lX21zJ10gKyB0aW1lUmVmZXJlbmNlIHx8IHN0YXJ0VGltZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkRXZlbnRUcmFja2VyID0gbmV3IEFkRXZlbnRUcmFja2VyKGFkVHJhY2tlciwgdHlwZSwgdXJsLCBvZmZzZXQsIHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci5ldmVudHMucHVzaChhZEV2ZW50VHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2VwYXJhdGUgaW4tYmFuZCBhZHMgd29ya2Zsb3dcbiAgICAgICAgICAgICAgICBpZiAob29iYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIGFkIGJyZWFrIHdpdGggYWRzXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrVHJhY2tlci5hZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWREYXRhVHJhY2tlci5hZEJyZWFrcy5wdXNoKGFkQnJlYWtUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkRGF0YVRyYWNrZXIub3V0T2ZCYW5kQWRCcmVha3MucHVzaChhZEJyZWFrVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkRGF0YVRyYWNrZXIuYWRCcmVha3MuZm9yRWFjaChhZEJyZWFrID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpeEFkQnJlYWsoYWRCcmVhayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcGFyYXRlIGluLWJhbmQgYWRzIHdvcmtmbG93XG4gICAgICAgIGlmIChvb2JhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIEFkZCBhbGwgZXZlbnRzIHRvIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgbGV0IGRhdGFVcGRhdGVkID0gdGhpcy5tZXJnZUV2ZW50cyhhZERhdGFUcmFja2VyKTtcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYWQgbGlzdFxuICAgICAgICAgICAgdGhpcy5hZExpc3QgPSB0aGlzLmFkRGF0YS5hZEJyZWFrcy5tYXAoYWRCcmVhayA9PiBhZEJyZWFrLnRvRGF0YSgpKTtcblxuICAgICAgICAgICAgLy8gU2VuZCBhZCBkYXRhIGV2ZW4gaWYgdGhlcmUgaXMgbm8gYWQgcG9kIChCa1lvdSBub3Qgc3VwcG9ydGluZyBiay1tbD0yLjApXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUFkRGF0YUxpc3RlbmVyKGRhdGFVcGRhdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCBvdXQtb2YtYmFuZCBhZHMgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICB0aGlzLmFkRGF0YS5vdXRPZkJhbmRBZEJyZWFrcyA9IFsuLi50aGlzLmFkRGF0YS5vdXRPZkJhbmRBZEJyZWFrcywgLi4uYWREYXRhVHJhY2tlci5vdXRPZkJhbmRBZEJyZWFrc107XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIG91dC1vZi1iYW5kIGFkIGxpc3RcbiAgICAgICAgICAgIHRoaXMub3V0T2ZCYW5kQWRMaXN0ID0gdGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3MubWFwKG91dE9mQmFuZEFkQnJlYWsgPT4gb3V0T2ZCYW5kQWRCcmVhay50b0RhdGEoKSk7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgb3V0LW9mLWJhbmQgYWQgZGF0YVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlPdXRPZkJhbmRBZERhdGFMaXN0ZW5lcih0aGlzLm91dE9mQmFuZEFkTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWdpbk91dE9mQmFuZEFkQnJlYWsoYWRCcmVha0lkKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdDYWxsaW5nIGJlZ2luT3V0T2ZCYW5kQWRCcmVhayB3aXRoIGlkOiAnICsgYWRCcmVha0lkLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3MuZmluZChhZEJyZWFrID0+IGFkQnJlYWsuaWQgPT09IGFkQnJlYWtJZCk7XG4gICAgICAgXG4gICAgICAgIGlmIChhZEJyZWFrVHJhY2tlcikge1xuICAgICAgICAgICAgLy8gU2V0IGFkIGJyZWFrIGFuZCBhZHMgcG9zaXRpb24gdG8gcGxheWVyIHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIucG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIuYWRzLm1hcChhZFRyYWNrZXIgPT4ge1xuICAgICAgICAgICAgICAgIGFkVHJhY2tlci5wb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGFkVHJhY2tlci5wcm9jZXNzQmVnaW4oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRUcmFja2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLncoVEFHLCAnT3V0LW9mLWJhbmQgYWQgYnJlYWsgd2l0aCBpZCAnICsgYWRCcmVha0lkICsgJyBub3QgZm91bmQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kT3V0T2ZCYW5kQWRCcmVhayhhZEJyZWFrSWQpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0NhbGxpbmcgZW5kT3V0T2ZCYW5kQWRCcmVhaygpIHdpdGggaWQ6ICcgKyBhZEJyZWFrSWQsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFkRGF0YS5vdXRPZkJhbmRBZEJyZWFrcy5maW5kSW5kZXgoYWRCcmVhayA9PiBhZEJyZWFrLmlkID09PSBhZEJyZWFrSWQpO1xuICAgICAgIFxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tlciA9IHRoaXMuYWREYXRhLm91dE9mQmFuZEFkQnJlYWtzW2luZGV4XTtcbiAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnByb2Nlc3NFbmQoKTtcbiAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLmFkcy5mb3JFYWNoKGFkVHJhY2tlciA9PiB7XG4gICAgICAgICAgICAgICAgYWRUcmFja2VyLnByb2Nlc3NFbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0RlbGV0aW5nIG91dC1vZi1iYW5kIGFkIGJyZWFrIHdpdGggaWQ6ICcgKyBhZEJyZWFrSWQsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICB0aGlzLmFkRGF0YS5vdXRPZkJhbmRBZEJyZWFrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ091dC1vZi1iYW5kIGFkIGJyZWFrIHdpdGggaWQgJyArIGFkQnJlYWtJZCArICcgbm90IGZvdW5kJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSB1cGRhdGUgcG9zaXRpb24gam9iXG4gICAgICovXG4gICAgc3RhcnQoZGVsYXkgPSBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICdTdGFydGluZyBhZCB0cmFja2luZy4uLicpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9IEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hc3luY0RlbGF5KGRlbGF5LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICdvblBvc2l0aW9uVXBkYXRlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IHBvc2l0aW9uIDogdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHRoZSB1cGRhdGUgcG9zaXRpb24gam9iXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHBhdXNlZCAocGxheWVyIGV2ZW50KScsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVQb3NpdGlvbkpvYik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGNvbnRlbnQgaXMgbGl2ZSAob3BlbiBtYW5pZmVzdClcbiAgICAgKiBCZWZvcmUgZmlyc3QgaW1hZ2UsIGNvbnNpZGVyIGFzIFZPRCB0byBhbHdheXMgaGF2ZSBhbiBhZCBicmVhayBkdXJhdGlvblxuICAgICAqIEFmdGVyIGZpcnN0IGltYWdlLCBjb25zaWRlciB0aGUgYWN0dWFsIGNvbnRlbnQgdHlwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGlzIGxpdmVcbiAgICAgKi9cbiAgICBpc0xpdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0SW1hZ2VEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0RHVyYXRpb24oKSA8PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlIG5ldyBldmVudHMgd2l0aCBjdXJyZW50IGV2ZW50c1xuICAgICAqXG4gICAgICogQW4gZXhpc3RpbmcgYWQgYnJlYWsgY2FuIHVwZGF0ZSBpdHMgYWQgbGlzdCwgYnV0IGFuIGV4aXN0aW5nIGFkIGNhbm5vdCBiZSByZW1vdmVkIG9yIHVwZGF0ZWRcbiAgICAgKiBBZCBicmVha3MgY2FuIGJlIGFkZGVkIGR1cmluZyB0aGUgc2Vzc2lvblxuICAgICAqIElmIGFuIGFkIGJyZWFrIGRvZXMgbm90IGFwcGVhciBhbnltb3JlIGluIHRoZSBCa3lvdSBkYXRhLCBpdCBoYXMgdG8gc3RheSBpbiBtZW1vcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhZERhdGEgbmV3IGRhdGEgcmVjZWl2ZWQgYnkgdGhlIEJrWW91XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBuZXcgZGF0YSBzdG9yZWQgaW4gbWVtb3J5XG4gICAgICovXG4gICAgbWVyZ2VFdmVudHMoYWREYXRhKSB7XG4gICAgICAgIGxldCBkYXRhVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldCBhZCBkYXRhIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIGlmICh0aGlzLmFkRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkRGF0YSA9IGFkRGF0YTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgYWREYXRhLmFkQnJlYWtzLmxlbmd0aCArICcgYWQgYnJlYWsocykgcGFyc2VkJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgZGF0YVVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5ld0FkQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZWRBZENvdW50ID0gMDtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGJhc2UgYWQgZGF0YVxuICAgICAgICAgICAgdGhpcy5hZERhdGEuc2Vzc2lvblRva2VuID0gYWREYXRhLnNlc3Npb25Ub2tlbjtcbiAgICAgICAgICAgIHRoaXMuYWREYXRhLnRpbWVSZWZlcmVuY2UgPSBhZERhdGEudGltZVJlZmVyZW5jZTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGV4cGlyZWQgYWQgYnJlYWtzXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SWRzID0gYWREYXRhLmFkQnJlYWtzLm1hcChhZEJyZWFrID0+IGFkQnJlYWsuaWQpO1xuICAgICAgICAgICAgdGhpcy5hZERhdGEuYWRCcmVha3MuZm9yRWFjaCgoYWRCcmVhaywgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYWQgYnJlYWsgZnJvbSBtZW1vcnkgbm90IHByZXNlbnQgaW4gdXBkYXRlZCBkYXRhIGFuZCBub3QgcGxheWluZyB0aGUgYWQgYnJlYWssIHJlbW92ZSBpdFxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudElkcy5pbmNsdWRlcyhhZEJyZWFrLmlkKSAmJiB0aGlzLmN1cnJlbnRBZFRyYWNrZXI/LmFkQnJlYWsuaWQgIT09IGFkQnJlYWsuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2VwdCBpZiBBRF9UUkFDS0VSU19TVE9SRV9EVVJBVElPTiBoYXMgYmVlbiBzZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRUcmFja2Vyc1BlcmlvZCA9IHRoaXMuaGFuZGxlci5vcHRpb25zLmdldChTdHJlYW1pbmdTZXNzaW9uT3B0aW9ucy5BRF9UUkFDS0VSU19TVE9SRV9EVVJBVElPTik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZFRyYWNrZXJzUGVyaW9kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZFRyYWNrZXJzUGVyaW9kID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpIC0gYWRUcmFja2Vyc1BlcmlvZCAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbikgPiBzdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRBZENvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWQgYnJlYWtzIChkdXJhdGlvbiwgYWRzIGxpc3QpXG4gICAgICAgICAgICBhZERhdGEuYWRCcmVha3MuZm9yRWFjaCgoYWRCcmVhaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYWQgZGF0YSBwb2ludGVyXG4gICAgICAgICAgICAgICAgYWRCcmVhay5hZERhdGEgPSB0aGlzLmFkRGF0YTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBhZCBicmVhayBpbiBtZW1vcnkgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFkQnJlYWsgPSB0aGlzLmFkRGF0YS5hZEJyZWFrcy5maW5kKGN1cnJlbnRBZEJyZWFrID0+IGN1cnJlbnRBZEJyZWFrLmlkID09PSBhZEJyZWFrLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFkQnJlYWsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdW4tZXhpc3RpbmcgYWRzIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgYWRCcmVhay5hZHMuZmlsdGVyKGFkID0+IGN1cnJlbnRBZEJyZWFrLmFkcy5maW5kKGN1cnJlbnRBZCA9PiBjdXJyZW50QWQuYWRJZCA9PT0gYWQuYWRJZCkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGFkIGF0IHRoZSBjb3JyZWN0IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gY29tZSBjYXNlLCB0aGUgU0xBVEUgKGVuZCBvZiB0aGUgYWQgYnJlYWspIGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgaW5zZXJ0aW5nIGludGVybWVkaWF0ZSBhZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRJbmRleCA9IGN1cnJlbnRBZEJyZWFrLmFkcy5maW5kSW5kZXgoY3VycmVudEFkID0+IGN1cnJlbnRBZC5wb3NpdGlvbiA+IGFkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBZEJyZWFrLmFkcy5wdXNoKGFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWRCcmVhay5hZHMuc3BsaWNlKGluc2VydEluZGV4LCAwLCBhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWRDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFkIHBvc2l0aW9ucyBhbmQgYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXhBZEJyZWFrKGN1cnJlbnRBZEJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZW5kZWQgZmxhZyB0byB0cnVlIGlmIGFkIGJyZWFrIGVuZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRBZEJyZWFrLnVwZGF0ZUVuZGVkKGFkRGF0YS5sYXN0UmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZERhdGEuYWRCcmVha3MucHVzaChhZEJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZW5kZWQgZmxhZyB0byB0cnVlIGlmIGFkIGJyZWFrIGVuZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkQnJlYWsudXBkYXRlRW5kZWQoYWREYXRhLmxhc3RSZXF1ZXN0KTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdBZENvdW50ICs9IGFkQnJlYWsuYWRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsIHRoaXMuYWREYXRhLmFkQnJlYWtzLmxlbmd0aCArICcgYWQgYnJlYWsocykgaW4gdG90YWwsICcgKyBhZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJyBhZCBicmVhayhzKSBwYXJzZWQsICcgKyBuZXdBZENvdW50ICsgJyBuZXcgYWQocyksICcgKyBcbiAgICAgICAgICAgIGRlbGV0ZWRBZENvdW50ICsgJyBkZWxldGVkIGFkKHMpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGlmeSBldmVudCBhcnJheSB1cGRhdGVkXG4gICAgICAgIHRoaXMubm90aWZ5QWRzVXBkYXRlZCh0aGlzLmFkRGF0YSk7XG5cbiAgICAgICAgLy8gU3RhcnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQgJiYgIXRoaXMucGF1c2VkICYmICF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gSWYgdXBkYXRlIHBvc2l0aW9uIHByb2Nlc3Mgc3RvcHBlZCwgcmVzZXQgbGFzdCBwb3NpdGlvbiB0byB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkRGF0YS5oYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbikgPiAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHJlc3VtZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVzdW1lIGF0IHRoZSBjdXJyZW50IHBsYXllciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc3RhcnQgdXBkYXRlIHBvc2l0aW9uIHByb2Nlc3NcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdGFydCgpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhZCBicmVhayBlbmRlZFxuICAgICAgICAgICAgLy8gT25seSBjaGVjayBpbiBjYXNlIG9mIExJVkUsIGZvciBWT0QgY29udGVudHMsIGFkIGJyZWFrIGVuZCBhbHJlYWR5IHRyaWdnZXJlZCBzaW5jZSBicmVha3MgYXJlIHN0YXRpY1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWRCcmVha0VuZGVkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhVXBkYXRlZDtcbiAgICB9XG5cbiAgICBvblBvc2l0aW9uVXBkYXRlZChjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uU3RhcnQgPSAodGhpcy5sYXN0UG9zaXRpb24gIT09IGN1cnJlbnRQb3NpdGlvbiA/IHRoaXMubGFzdFBvc2l0aW9uIDogY3VycmVudFBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGxldCBwb3NpdGlvbkVuZCA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgICAvLyBJZiB0aGUgQmtZb3UganNvbiBmaWxlIGlzIHJlY2VpdmVkIGFzeW5jaHJvbm91c2x5IGFmdGVyIGZpcnN0IGltYWdlXG4gICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVJlY2VpdmVkID09PSB0cnVlICYmIHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGFsbCBldmVudHMgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhbGwgZXZlbnRzIHNpbmNlIGZpcnN0IGltYWdlLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIFBhdGNoIGVuZCBpZiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhpc3RvcnlbdGhpcy5wb3NpdGlvbkhpc3RvcnkubGVuZ3RoIC0gMV0uZW5kID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeS5mb3JFYWNoKHBsYXlpbmdQZXJpb2QgPT4ge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdCZXR3ZWVuICcgKyBwbGF5aW5nUGVyaW9kLnN0YXJ0ICsgJyBhbmQgJyArIHBsYXlpbmdQZXJpb2QuZW5kLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcGxheWluZ1BlcmlvZC5zdGFydDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGxheWluZ1BlcmlvZC5zdGFydDsgaSA8PSBwbGF5aW5nUGVyaW9kLmVuZCArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTDsgaSArPSBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXRoLm1pbihpLCBwbGF5aW5nUGVyaW9kLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdUcmFja2luZyBjYXRjaC11cCBmaW5pc2hlZCcsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25TdGFydCA8IHBvc2l0aW9uRW5kICYmIChwb3NpdGlvbkVuZCAtIHBvc2l0aW9uU3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSAvKiAyICogQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKi8pIHtcbiAgICAgICAgICAgIC8vIERlYnVnICh0byBjb21tZW50IGJlZm9yZSByZWxlYXNlKVxuICAgICAgICAgICAgLyogY29uc3QgZFN0YXJ0ID0gKHBvc2l0aW9uU3RhcnQgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGRFbmQgPSBwb3NpdGlvbkVuZDtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIHRyYWNrZXJzIGZyb20gJyArIE1hdGguZmxvb3IoZFN0YXJ0IC8gMTAwMCkgKyAnLicgK1xuICAgICAgICAgICAgICAgIChkU3RhcnQgLSBNYXRoLmZsb29yKGRTdGFydCAvIDEwMDApICogMTAwMCkgKyAnc2VjcyB0byAnICsgTWF0aC5mbG9vcihkRW5kIC8gMTAwMCkgKyAnLicgK1xuICAgICAgICAgICAgICAgIChkRW5kIC0gTWF0aC5mbG9vcihkRW5kIC8gMTAwMCkgKiAxMDAwKSArICdtcycsIHRoaXMuaGFuZGxlci5pZCk7Ki9cblxuICAgICAgICAgICAgLy8gQWQgYnJlYWsgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGE/LmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIHBvc2l0aW9uRW5kIDwgYWRCcmVhay5wb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBBZCBicmVhayBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiArIFBSRVBBUkVfREVMVEFcbiAgICAgICAgICAgIGNvbnN0IG5leHRBZEJyZWFrVHJhY2tlciA9IHRoaXMuYWREYXRhPy5hZEJyZWFrcy5maW5kKGFkQnJlYWsgPT4gYWRCcmVhay5wb3NpdGlvbiA8PSBwb3NpdGlvbkVuZCArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1BSRVBBUkVfREVMVEEgJiYgXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbmQgKyBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9QUkVQQVJFX0RFTFRBIDwgYWRCcmVhay5wb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBBZCBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgYWRUcmFja2VyID0gYWRCcmVha1RyYWNrZXI/LmFkcy5maW5kKGFkID0+IGFkLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIHBvc2l0aW9uRW5kIDwgYWQucG9zaXRpb24gKyBhZC5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEFkIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uICsgUFJFUEFSRV9ERUxUQVxuICAgICAgICAgICAgY29uc3QgbmV4dEFkVHJhY2tlciA9IG5leHRBZEJyZWFrVHJhY2tlcj8uYWRzLmZpbmQoYWQgPT4gYWQucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgKyBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9QUkVQQVJFX0RFTFRBICYmIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRW5kICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fUFJFUEFSRV9ERUxUQSA8IGFkLnBvc2l0aW9uICsgYWQuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBuZXh0QWRCcmVha1RyYWNrZXI/LnByb2Nlc3NQcmVwYXJlKCk7XG4gICAgICAgICAgICBuZXh0QWRUcmFja2VyPy5wcm9jZXNzUHJlcGFyZSgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbi1iYW5kIGFkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgICAgICAgICAgLy8gQ3VycmVudCBwb3NpdGlvbiBpbiBhbiBhZFxuICAgICAgICAgICAgaWYgKGFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gRW50ZXJpbmcgYW4gYWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0VudGVyaW5nIGFkICcgKyBhZFRyYWNrZXIuYWRJZCArICcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraXBwZWQgPSBwb3NpdGlvblN0YXJ0IC0gYWRUcmFja2VyLnBvc2l0aW9uID49IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZW50ZXJpbmcgYW4gYWQsIGhhbmRsZSBwb3NpdGlvbiBzdGFydCBwcmVjaXNpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVXBkYXRlIHBvc2l0aW9uIHN0YXJ0IGZyb20gJyArIHBvc2l0aW9uU3RhcnQgKyAnIHRvICcgKyBhZFRyYWNrZXIucG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblN0YXJ0ID0gYWRUcmFja2VyLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NLSVBQRUQnLCBza2lwcGVkLCBwb3NpdGlvblN0YXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gYWRUcmFja2VyLnRvRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YSA9IGFkQnJlYWtUcmFja2VyLnRvRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICBhZFRyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihwb3NpdGlvblN0YXJ0LCBwb3NpdGlvbkVuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGFkIHNraXBwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBza2lwcGVkIChwcmV2aW91cyBwb3NpdGlvbiB3YXMgJyArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEgKyAnbXMgYWZ0ZXIgYWQgc3RhcnQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5QWRTa2lwcGVkKHRoaXMuYWREYXRhLnNlc3Npb25Ub2tlbiwgYWRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyID09PSBhZFRyYWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIHNhbWUgYWRcbiAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciAhPT0gYWRUcmFja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIGFkXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdDaGFuZ2luZyBmcm9tIGFkICcgKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRJZCArICcgdG8gJyArIGFkVHJhY2tlci5hZElkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgYWQgcHJvZ3Jlc3Npb24gdG8gMS4wXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZFRyYWNrZXIuYWRCcmVhay5pZCA9PT0gdGhpcy5jdXJyZW50QWRUcmFja2VyLmFkQnJlYWsuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihwb3NpdGlvblN0YXJ0LCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV4aXRpbmcgYWQgYmVmb3JlIHRoZSBlbmQsIGNvdW50IGl0IGFzIHNraXBwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9ncmVzc2lvbiA8IDEuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHNraXBwZWQgKHByb2dyZXNzaW9uIG5vdCBjb21wbGV0ZSknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlBZFNraXBwZWQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHByZXZpb3VzIGFkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkVHJhY2tlci5hZEJyZWFrLmlkICE9PSB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRCcmVhay5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLmFkQnJlYWsucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QWRUcmFja2VyLmFkQnJlYWsudXBkYXRlRW5kZWQodGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IGFkVHJhY2tlci50b0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhID0gYWRCcmVha1RyYWNrZXIudG9EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZERhdGEgPSBhZFRyYWNrZXIudG9EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBjdXJyZW50IGFkIGlmIGNhblByb2Nlc3MoKSBhbGxvd3MgaXRcbiAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGNoYW5naW5nIGFkIGFmdGVyIGEgc2VlaywgYW5kIHRoZSBzZWVrIGVuZCBwb3NpdGlvbiBpcyBub3QgY2xvc2UgdG8gdGhlIGFkIHN0YXJ0IHBvc2l0aW9uLCBjb3VudCBpdCBhcyBza2lwcGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkVuZCAtIGFkVHJhY2tlci5wb3NpdGlvbiA+PSBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgc2tpcHBlZCAobmV3IHBvc2l0aW9uIGlzICcgKyBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBICsgJ21zIGFmdGVyIGFkIHN0YXJ0KScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIGFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgc2VlayBwb3NpdGlvbiBwcmVjaXNpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihhZFRyYWNrZXIucG9zaXRpb24sIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlciA9IGFkVHJhY2tlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlciA9IGFkQnJlYWtUcmFja2VyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0aW5nIGFkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdFeGl0aW5nIGFkICcgKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRJZCArICcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEF2b2lkIHByb2dyZXNzaW9uID4gMTAwJVxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25FbmQgLSAodGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uKSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25FbmQgPSB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBBIHNlZWsgaGFwcGVuZWQgYW5kIHRoZSBwb3NpdGlvbiBjb3VsZCBub3QgYmUgaW4gdGhlIGFkLCB0aGUgcHJvZ3Jlc3Npb24gaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkIGluIHRoZSBzZWVrIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblN0YXJ0ID49IHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV4aXRpbmcgYWQgYmVmb3JlIHRoZSBlbmQsIGNvdW50IGl0IGFzIHNraXBwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9ncmVzc2lvbiA8IDEuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHNraXBwZWQgKHByb2dyZXNzaW9uIG5vdCBjb21wbGV0ZSknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlBZFNraXBwZWQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgZW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucHJvY2Vzc0VuZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBMSVZFIGNvbnRlbnRzLCB3ZSBuZWVkIHRoZSByZXNwb25zZSBmcm9tIHRoZSBCa1lvdSBpZiB0aGUgYWQgYnJlYWsgaXMgYWN0dWFsbHkgZG9uZVxuICAgICAgICAgICAgICAgICAgICAvLyBJbiBzb21lIGNhc2VzLCB3ZSByZWNlaXZlIHVwZGF0ZWQgdHJhY2tlcnMgdG9vIGxhdGUsIHNvIHdlIG5lZWQgdG8gd2FpdCBuZXdlciBkYXRhIGJlZm9yZSBhY3R1YWxseSBjbG9zaW5nIHRoZSBhZFxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgVk9EIGNvbnRlbnRzLCBlbmQgdGhlIGJyZWFrIG5vd1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIgPT09IHVuZGVmaW5lZCAmJiAhdGhpcy5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIudXBkYXRlRW5kZWQodGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0aW5nIHRoZSBhZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE91dC1vZi1iYW5kIGFkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgICAgICAgICAgLy8gT3V0LW9mLWJhbmQgYWQgYnJlYWtzIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIChjYW4gaGF2ZSBtdWx0aXBsZSBvbmVzKVxuICAgICAgICAgICAgLy8gT25seSBpZiBkdXJhdGlvbiBpcyBwb3NpdGl2ZSwgdGhlIG90aGVycyBkb24ndCBkZXBlbmQgb24gcGxheWVyIHBvc2l0aW9uIChcInBhdXNlXCIgZm9yIGV4YW1wbGUpXG4gICAgICAgICAgICBjb25zdCBvdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMgPSB0aGlzLmFkRGF0YT8ub3V0T2ZCYW5kQWRCcmVha3MuZmlsdGVyKGFkQnJlYWsgPT4gXG4gICAgICAgICAgICAgICAgYWRCcmVhay5wcm9jZWVkZWRbMV0gPT09IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgICAgICBhZEJyZWFrLmR1cmF0aW9uID4gMCAmJiBcbiAgICAgICAgICAgICAgICBhZEJyZWFrLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRW5kIDwgYWRCcmVhay5wb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBvdXRPZkJhbmRBZFRyYWNrZXJzID0gb3V0T2ZCYW5kQWRCcmVha1RyYWNrZXJzLnJlZHVjZSgoYXJyYXksIG91dE9mQmFuZEFkQnJlYWtUcmFja2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5hcnJheSwgLi4ub3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIuYWRzLmZpbHRlcihhZCA9PiBcbiAgICAgICAgICAgICAgICAgICAgYWQucHJvY2VlZGVkWzFdID09PSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICAgICAgICAgIGFkLmR1cmF0aW9uID4gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgYWQucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgJiYgXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uRW5kIDwgYWQucG9zaXRpb24gKyBhZC5kdXJhdGlvbildO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAvLyBTaW5jZSB0aGVyZSBjYW4gYmUgbXVsdGlwbGUgb3V0LW9mLWJhbmQgYWQgYnJlYWtzIC8gYWRzIGF0IG9uY2UsIGFuIGFycmF5IGlzIHVzZWQgdG8gc3RvcmUgY3VycmVudCBvbmVzXG4gICAgICAgICAgICAvLyBTdGFydCBhZCBicmVha3MgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICBvdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnM/LmZvckVhY2gob3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGhhcyBub3QgYmVnYW4geWV0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2Vycy5maW5kKGN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrID0+IGN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrLmlkID09PSBvdXRPZkJhbmRBZEJyZWFrVHJhY2tlci5pZCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnRlcmluZyBvdXQtb2YtYmFuZCBhZCBicmVha1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRW50ZXJpbmcgb3V0LW9mLWJhbmQgYWQgYnJlYWsgJyArIG91dE9mQmFuZEFkQnJlYWtUcmFja2VyLmlkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIG91dE9mQmFuZEFkQnJlYWtUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMucHVzaChvdXRPZkJhbmRBZEJyZWFrVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIHNhbWUgb3V0LW9mLWJhbmQgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU3RhcnQgYWRzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgb3V0T2ZCYW5kQWRUcmFja2Vycy5mb3JFYWNoKG91dE9mQmFuZEFkVHJhY2tlciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgaGFzIG5vdCBiZWdhbiB5ZXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T3V0T2ZCYW5kQWRUcmFja2Vycy5maW5kKGN1cnJlbnRPdXRPZkJhbmRBZCA9PiBjdXJyZW50T3V0T2ZCYW5kQWQuYWRJZCA9PT0gb3V0T2ZCYW5kQWRUcmFja2VyLmFkSWQpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW50ZXJpbmcgb3V0LW9mLWJhbmQgYWRcbiAgICAgICAgICAgICAgICAgICAgb3V0T2ZCYW5kQWRUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXJzLnB1c2gob3V0T2ZCYW5kQWRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgc2FtZSBvdXQtb2YtYmFuZCBhZFxuICAgICAgICAgICAgICAgICAgICBvdXRPZkJhbmRBZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBlbmRlZCBvdXQtb2YtYmFuZCBhZHNcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE91dE9mQmFuZEFkVHJhY2tlcnMuZm9yRWFjaCgoY3VycmVudE91dE9mQmFuZEFkVHJhY2tlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vdCBhbW9uZyB0aGUgb3V0LW9mLWJhbmQgYWQgYXQgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGlmIChvdXRPZkJhbmRBZFRyYWNrZXJzLmZpbmQob3V0T2ZCYW5kQWQgPT4gb3V0T2ZCYW5kQWQuYWRJZCA9PT0gY3VycmVudE91dE9mQmFuZEFkVHJhY2tlci5hZElkKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZW5kZWQgb3V0LW9mLWJhbmQgYWQgYnJlYWtzXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMuZm9yRWFjaCgoY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2VyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IGFtb25nIHRoZSBvdXQtb2YtYmFuZCBhZCBicmVha3MgYXQgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGlmIChvdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMuZmluZChvdXRPZkJhbmRBZEJyZWFrID0+IG91dE9mQmFuZEFkQnJlYWsuaWQgPT09IGN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlci5pZCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCYWNrIHRvIGluLWJhbmQgYWRzIHdvcmtmbG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gICAgICAgICAgICAvLyBLZWVwIGxhc3QgcG9zaXRpb24gZm9yIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgICAgICAgLy8gSWYgZXZlbnRzIHJlbWFpbmluZywgY29udGludWUgdGhlIHRyYWNraW5nXG4gICAgICAgICAgICBpZiAodGhpcy5hZERhdGE/Lmhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uRW5kKSB8fCB0aGlzLmFkRGF0YT8ub3V0T2ZCYW5kQWRCcmVha3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW1pemUgdXBkYXRlIHRpbWluZyBieSBzeW5jaHJvbml6aW5nIHdpdGggYWQgYmVnaW4vZW5kIGluc3RlYWQgb2Ygd2FpdGluZyBkZWZhdWx0IDFzIGludGVydmFsc1xuICAgICAgICAgICAgICAgICAgICAvLyBBbGxvd3MgdG8gdHJpZ2dlciBwdWJsaWMgZXZlbnRzIChvbkFkQmVnaW4sIG9uQWRFbmQuLi4pIHByZWNpc2VseVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB1cGRhdGUgaGFwcGVucyB3aXRoaW4gdGhlIG5leHQgMS4ycywgc2NoZWR1bGUgdGhlIHVwZGF0ZSB0byBjb2luY2lkZSB3aXRoIHRoYXQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIDEuMnMgdGhyZXNob2xkICgyMCUgYnVmZmVyIG92ZXIgZGVmYXVsdCAxcyBpbnRlcnZhbCkgdG8gYXZvaWQgc2NoZWR1bGluZyB1cGRhdGVzIHRvbyBjbG9zZSB0b2dldGhlclxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYWQgYmVnaW4vZW5kIHBvc2l0aW9uIGluc3RlYWQgb2YgcGxheWVyIHBvc2l0aW9uIGJlY2F1c2Ugc29tZSBwbGF5ZXJzIHVwZGF0ZSB0aGVpciBwb3NpdGlvbiBhc3luY2hyb25vdXNseVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0VXBkYXRlVGltZSA9IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZEluY29taW5nVGltZSA9IG5leHRBZFRyYWNrZXIucG9zaXRpb24gLSBjdXJyZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRJbmNvbWluZ1RpbWUgPiAwICYmIGFkSW5jb21pbmdUaW1lIDwgQWRUcmFja2luZ01hbmFnZXIuTkVBUl9BRF9ERUxUQSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRVcGRhdGVUaW1lID0gYWRJbmNvbWluZ1RpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvc2l0aW9uID0gbmV4dEFkVHJhY2tlci5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHJpbnREZWJ1Z0xvZ3MoVEFHLCAnQWQgaW5jb21pbmcgaW4gJyArIGFkSW5jb21pbmdUaW1lICsgJ21zJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZFRyYWNrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRSZW1haW5pbmdUaW1lID0gYWRUcmFja2VyLnBvc2l0aW9uICsgYWRUcmFja2VyLmR1cmF0aW9uIC0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkUmVtYWluaW5nVGltZSA+IDAgJiYgYWRSZW1haW5pbmdUaW1lIDwgQWRUcmFja2luZ01hbmFnZXIuTkVBUl9BRF9ERUxUQSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRVcGRhdGVUaW1lID0gYWRSZW1haW5pbmdUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3NpdGlvbiA9IGFkVHJhY2tlci5wb3NpdGlvbiArIGFkVHJhY2tlci5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHJpbnREZWJ1Z0xvZ3MoVEFHLCAnQWQgZW5kaW5nIGluICcgKyBhZFJlbWFpbmluZ1RpbWUgKyAnbXMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFVwZGF0ZVRpbWUgPSBNYXRoLnJvdW5kKG5leHRVcGRhdGVUaW1lKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KG5leHRVcGRhdGVUaW1lLCBuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBwYXVzZWQgKHBsYXliYWNrIHBhdXNlZCwgb25Qb3NpdGlvblVwZGF0ZWQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBwYXVzZWQgKG5vIG1vcmUgZXZlbnQsIG9uUG9zaXRpb25VcGRhdGVkKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hZERhdGE/Lmhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uRW5kKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIHRyYWNrZXJzIGZyb20gJyArIHBvc2l0aW9uU3RhcnQgKyAnbXMgdG8gJyArIHBvc2l0aW9uRW5kICsgJ21zLCByZXN1bWluZyB0cmFja2luZy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1N0YXJ0KHBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpIHtcbiAgICAgICAgLy8gSWYgZXZlbnRzIHJlbWFpbmluZywgY29udGludWUgdGhlIHRyYWNraW5nXG4gICAgICAgIGlmICh0aGlzLmFkRGF0YT8uaGFzUmVtYWluaW5nQWRCcmVha3MocG9zaXRpb24pID4gMCB8fCB0aGlzLmFkRGF0YT8ub3V0T2ZCYW5kQWRCcmVha3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgcGF1c2VkIChubyBtb3JlIGV2ZW50LCBjaGVja1N0YXJ0KScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0FkQnJlYWtFbmRlZChwb3NpdGlvbikge1xuICAgICAgICBsZXQgcG9zaXRpb25TdGFydCA9ICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcG9zaXRpb24gPyB0aGlzLmxhc3RQb3NpdGlvbiA6IHBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGxldCBwb3NpdGlvbkVuZCA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChwb3NpdGlvblN0YXJ0IDwgcG9zaXRpb25FbmQgJiYgKHBvc2l0aW9uRW5kIC0gcG9zaXRpb25TdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBIC8qIDIgKiBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwqLykge1xuICAgICAgICAgICAgLy8gQWQgYnJlYWsgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGE/LmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIHBvc2l0aW9uRW5kIDwgYWRCcmVhay5wb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrVHJhY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIgIT09IHVuZGVmaW5lZCAmJiAodGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uIC0gcG9zaXRpb25FbmQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiwgdGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlci51cGRhdGVFbmRlZCh0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYnJlYWsgZW5kIGRldGVjdGVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYnJlYWsgbm90IHlldCBlbmRlZCcsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRVc2VySW50ZXJhY3Rpb24oaW50ZXJhY3Rpb25UeXBlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlcj8uY2xpY2thYmxlPy50cmFja2Vycy5mb3JFYWNoKHRyYWNrZXIgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlcXVlc3RpbmcgY2xpY2sgdHJhY2tlciAnICsgdHJhY2tlci5jbGlja3VybCwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIFJlcXVlc3RNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRFdmVudCh0aGlzLmhhbmRsZXIsIHRyYWNrZXIuY2xpY2t1cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50QWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBZERhdGE7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudEFkQnJlYWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIHRoZSBjb250ZW50IHdpdGhvdXQgYWRzXG4gICAgICogVGhpcyBwb3NpdGlvbiBjYW4gYmUgc2F2ZWQgdG8gYmUgcmVzdG9yZWQgbGF0ZXIgdGhyb3VnaCBnZXRQb3NpdGlvbkZvclBsYXliYWNrKHBvc2l0aW9uSW5Cb29rbWFyaylcbiAgICAgKiBGb3IgVk9EIGNvbnRlbnRzIG9ubHlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFBvc2l0aW9uIGluIHRoZSBjb250ZW50IHdpdGhvdXQgYWRzXG4gICAgICovXG4gICAgZ2V0UG9zaXRpb25Gb3JCb29rbWFyaygpIHtcbiAgICAgICAgLy8gSWYgdm9kIGNvbnRlbnQgKGkuZSBkdXJhdGlvbiA+IDApXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldER1cmF0aW9uKCk7XG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBwb3NpdGlvbiBpcyBpbiBhbiBhZCBicmVhaywgc2V0IGJvb2ttYXJrIHBvc2l0aW9uIHRvIHRoZSBhZCBicmVhayBzdGFydCBwb3NpdGlvbiAobGFzdCByaWdodCBwb3NpdGlvbiBiZWZvcmUgdGhlIGFkKVxuICAgICAgICAgICAgY29uc3QgY3VycmVudEFkQnJlYWsgPSB0aGlzLmFkTGlzdC5maW5kKGFkQnJlYWsgPT4gYWRCcmVhay5zdGFydFBvc2l0aW9uIDwgcG9zaXRpb24gJiYgcG9zaXRpb24gPD0gYWRCcmVhay5zdGFydFBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbik7XG4gICAgICAgICAgICBpZiAoY3VycmVudEFkQnJlYWsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gY3VycmVudEFkQnJlYWsuc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggYWQgYmVmb3JlIHRoZSBjdXJyZW50IHBvc2l0aW9uLCBzdWJzdHJhdGUgdGhlIGJvb2ttYXJrIHBvc2l0aW9uIGJ5IHRoZSBhZCBicmVhayBkdXJhdGlvblxuICAgICAgICAgICAgdGhpcy5hZExpc3QuZmlsdGVyKGFkQnJlYWsgPT4gYWRCcmVhay5zdGFydFBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbiA8IHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFkQnJlYWsgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBhZEJyZWFrLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBwb3NpdGlvbiBpbmNsdWRpbmcgY3VycmVudCBhZHMgd2l0aCB0aGUgcG9zaXRpb24gaW4gdGhlIGNvbnRlbnQgd2l0aG91dCBhZHNcbiAgICAgKiBDYW4gYmUgY2FsbGVkIGFmdGVyIG9yIGluc2lkZSBvbkFkRGF0YVxuICAgICAqIEZvciBWT0QgY29udGVudHMgb25seVxuICAgICAqXG4gICAgICogQHBhcmFtIHBvc2l0aW9uSW5Cb29rbWFyayBwb3NpdGlvbiBpbiB0aGUgY29udGVudCB3aXRob3V0IGFkICh3aXRoIHRoZSBzdG9yZWQgdmFsdWUgZ290IGZyb20gdGhlIG1ldGhvZCBnZXRQb3NpdGlvbkZvckJvb2ttYXJrKCkpXG4gICAgICogQHBhcmFtIGJlZm9yZUFkQnJlYWsgaWYgc2V0IHRvIHRydWUsIHJldHVybiBwb3NpdGlvbiBiZWZvcmUgYWQgYnJlYWtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBQb3NpdGlvbiBpbmNsdWRpbmcgY3VycmVudCBhZHNcbiAgICAgKi9cbiAgICBnZXRQb3NpdGlvbkZvclBsYXliYWNrKHBvc2l0aW9uSW5Cb29rbWFyaywgYmVmb3JlQWRCcmVhaykge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbkluQm9va21hcms7XG5cbiAgICAgICAgLy8gU29ydCBhZCBicmVhayBieSBzdGFydFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGFkTGlzdCA9IHRoaXMuYWRMaXN0LnNvcnQoKGEsIGIpID0+IGEuc3RhcnRQb3NpdGlvbiAtIGIuc3RhcnRQb3NpdGlvbik7XG5cbiAgICAgICAgbGV0IGxhc3RBZEJyZWFrO1xuICAgICAgICBmb3IgKGxldCBhZEJyZWFrIG9mIGFkTGlzdCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgYWQgYnJlYWsgaXMgYWZ0ZXIgdGhlIHBvc2l0aW9uLCB0aGUgY2FsY3VsYXRpb24gaXMgZG9uZVxuICAgICAgICAgICAgaWYgKGFkQnJlYWsuc3RhcnRQb3NpdGlvbiA+IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVsc2UsIGFkZCB0aGUgY3VycmVudCBhZCBicmVhayBkdXJhdGlvblxuICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IGFkQnJlYWsuZHVyYXRpb247XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgd2l0aCBsYXN0IHVzZWQgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICBsYXN0QWRCcmVhayA9IGFkQnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVmb3JlQWRCcmVhayA9PT0gdHJ1ZSAmJiBsYXN0QWRCcmVhayAhPT0gdW5kZWZpbmVkICYmIHBvc2l0aW9uID09PSBsYXN0QWRCcmVhay5zdGFydFBvc2l0aW9uICsgbGFzdEFkQnJlYWsuZHVyYXRpb24gPyBsYXN0QWRCcmVhay5zdGFydFBvc2l0aW9uIDogcG9zaXRpb247XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSB0b3RhbCBhZHMgZHVyYXRpb24gaW4gdGhlIGNvbnRlbnQsIGluIG1pbGxpc2Vjb25kc1xuICAgIGdldFRvdGFsQWRzRHVyYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiB0aGlzLmFkTGlzdC5yZWR1Y2UoKHRvdGFsLCBhZEJyZWFrKSA9PiBhZEJyZWFrLmR1cmF0aW9uIDwgMCA/IHRvdGFsIDogdG90YWwgKyBhZEJyZWFrLmR1cmF0aW9uLCAwKTtcbiAgICB9XG5cbiAgICBvbkZpcnN0SW1hZ2UoYml0cmF0ZSwgc3RhcnRQb3NpdGlvbikge1xuICAgICAgICAvLyBJbml0IHZhcmlhYmxlc1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZURhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeS5wdXNoKHsgc3RhcnQ6IHN0YXJ0UG9zaXRpb259KTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgZW5hYmxlZCAobGl2ZTonICsgdGhpcy5pc0xpdmUoKSArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBXb3JrYXJvdW5kIGJlY2F1c2UgQmtZb3Ugbm90IHJldHVybmluZyB2b2QvbGl2ZSBpbiB0cmFja2luZ1xuICAgICAgICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgdHJhY2tpbmcgZmlsZSBiZWZvcmUgb3BlbmluZyB0aGUgbWFuaWZlc3QgKGJrLW1sPTIuMCB3b3JrZmxvdyksIHdlIGRvbid0IGtub3cgaWYgdGhlIGNvbnRlbnQgaXMgbGl2ZSBvciB2b2RcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBsaXZlLCBhZCBicmVhayBkdXJhdGlvbiBpcyAtMVxuICAgICAgICBpZiAodGhpcy5hZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZExpc3QgPSB0aGlzLmFkRGF0YS5hZEJyZWFrcy5tYXAoYWRCcmVhayA9PiB7XG4gICAgICAgICAgICAgICAgYWRCcmVhay5saXZlID0gdGhpcy5pc0xpdmUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhZEJyZWFrLnRvRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdGhpcy5jaGVja1N0YXJ0KHN0YXJ0UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBCa1lvdSBzZXNzaW9uXG4gICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG5cbiAgICAgICAgLy8gU2hvdyBlcnJvciBpZiB0aGUgY29udGVudCBpcyBMSVZFIGJ1dCB0aGUgZHVyYXRpb24gaXMgbm90IGEgdGltZXN0YW1wXG4gICAgICAgIGlmICh0aGlzLmlzTGl2ZSgpICYmIHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpIDwgMTI2MjMwMDQwMDAwMCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1RoZSBwbGF5ZXIgcG9zaXRpb24gZG9lcyBub3QgcmV0dXJuIGEgcG9zaXRpb24gYXMgYSB0aW1lc3RhbXAgaW4gbWlsbGlzLiBUaGUgYWQgdHJhY2tpbmcgbWlnaHQgbm90IHdvcmsuJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgUEFMIFNESyBBUEkgdGhyb3VnaCB0YXJnZXQgYWRQYWxTZXNzaW9uXG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uPy5zZW5kUGxheWJhY2tTdGFydCgpO1xuICAgIH1cblxuICAgIG9uUGF1c2UoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyaW5nICYmICF0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhpc3RvcnlbdGhpcy5wb3NpdGlvbkhpc3RvcnkubGVuZ3RoIC0gMV0uZW5kID0gcGxheWVyUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIHRyYWNraW5nXG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgcGF1c2VkIHBvc2l0aW9uXG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcGxheWVyUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocGxheWVyUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0lnbm9yaW5nIHBsYXllciBwb3NpdGlvbiAnICsgcGxheWVyUG9zaXRpb24gKyAnLCBhbHJlYWR5IHByb2NlZWRlZC4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uO1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlID0gdGhpcy5sYXN0UG9zaXRpb247IC8vIGlmIHBsYXlpbmcgP1xuICAgIH1cblxuICAgIG9uUmVzdW1lKCkge1xuICAgICAgICAvLyBTdGFydCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gU2F2ZSBzdGFydCBwb3NpdGlvbiBmb3IgYXN5bmMgd29ya2Zsb3dcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeS5wdXNoKHsgc3RhcnQ6IHRoaXMubGFzdFBvc2l0aW9ufSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBiYWQgcG9zaXRpb24gd2hlbiByZXN1bWluZ1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdFBvc2l0aW9uIC0gdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVQYXVzZSkgPCAxMDAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JldmVydGluZyBwb3NpdGlvbiBiZWNhdXNlIG9mIGJhZCBwb3NpdGlvbiB3aGVuIHJlc3VtaW5nLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVQYXVzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZ1N0YXJ0KCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZyA9PT0gZmFsc2UgJiYgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBQbGF5YmFjayBoYXMgc3RvcHBlZFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhpc3RvcnlbdGhpcy5wb3NpdGlvbkhpc3RvcnkubGVuZ3RoIC0gMV0uZW5kID0gcGxheWVyUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIHRyYWNraW5nXG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgYnVmZmVyaW5nIHBvc2l0aW9uXG4gICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcGxheWVyUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocGxheWVyUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0lnbm9yaW5nIHBsYXllciBwb3NpdGlvbiAnICsgcGxheWVyUG9zaXRpb24gKyAnLCBhbHJlYWR5IHByb2NlZWRlZC4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uO1xuICAgIH1cblxuICAgIG9uQnVmZmVyaW5nRW5kKHBsYXlpbmcpIHtcbiAgICAgICAgLy8gU3RhcnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgcGxheWVyIGlzIHVwZGF0aW5nIGl0cyBwb3NpdGlvbiBhdCBidWZmZXJpbmcgZW5kIChwZXJpb2Qgc3dpdGNoKVxuICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gU2F2ZSBwb3NpdGlvbiBmb3IgYXN5bmMgd29ya2Zsb3dcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbkhpc3RvcnkubGVuZ3RoID4gMCAmJiB0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXRjaCBlbmQgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPSB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhpc3RvcnkucHVzaCh7c3RhcnQ6IHBsYXllclBvc2l0aW9ufSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gcGxheWVyUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUG9zaXRpb24gdXBkYXRlZCBkdXJpbmcgYnVmZmVyaW5nLCBwZXJpb2Qgc3dpdGNoID8nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocGxheWVyUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGUgcG9zaXRpb24gc2VlayBiZXR3ZWVuIDIgcGVyaW9kcyAoaGFwcGVucyBvbiBzb21lIHBsYXllcnMpXG4gICAgICAgICAgICAvKiBpZiAoTWF0aC5hYnModGhpcy5sYXN0UG9zaXRpb24gLSB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZUJ1ZmZlcmluZykgPCAxMDAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JldmVydGluZyBwb3NpdGlvbiBiZWNhdXNlIG9mIHBlcmlvZCBzd2l0Y2guLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZUJ1ZmZlcmluZztcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZUJ1ZmZlcmluZyA9IDA7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgLy8gSGFuZGxlIGJhZCBwb3NpdGlvbiBhZnRlciBzZWVrIChoYXBwZW5zIG9uIHNvbWUgcGxheWVycylcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3RQb3NpdGlvbiAtIHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrKSA8IDEwMDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmV2ZXJ0aW5nIHBvc2l0aW9uIGJlY2F1c2Ugb2Ygc2Vlay4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJTZWVrKHN0YXJ0LCBlbmQsIGxhc3RQb3NpdGlvbikge1xuICAgICAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkIHNlZWtcbiAgICAgICAgICAgIC8vIElnbm9yZSBpZiA8IDIgc2Vjb25kcyAocGVyaW9kIHN3aXRjaCBlcnJvcilcbiAgICAgICAgICAgIGlmIChzdGFydCAtIGVuZCA8IDIwMDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3Jpbmcgc2Vlay4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBzdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFbHNlIHJlc2V0IHRyYWNrZXJzXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVzZXQgYWQgdHJhY2tlcnMgd2l0aCBwb3NpdGlvbiAnICsgZW5kLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgdGhpcy5hZERhdGE/LnJlc2V0UHJvZ3Jlc3Npb24oZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvcndhcmQgc2Vla1xuICAgICAgICAgICAgLy8gQ2F0Y2gtdXAgZXZlbnRzIGZyb20gc2VlayBzdGFydCAob3IgYnVmZmVyaW5nIHN0YXJ0KSB0byBzZWVrIGVuZFxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NtYWxsIHNlZWsgZGV0ZWN0ZWQsIHByb2NlZWRpbmcgZXZlbnRzIGZyb20gJyArIGxhc3RQb3NpdGlvbiArICcgdG8gJyArIGVuZCwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsYXN0UG9zaXRpb247IGkgPD0gZW5kOyBpICs9IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5taW4oaSArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCwgZW5kKTtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQmV0d2VlbiAnICsgaSArICcgYW5kICcgKyBwb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIC8vIFNhdmUgcG9zaXRpb24gZm9yIGFzeW5jIHdvcmtmbG93XG4gICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9PT0gZmFsc2UgJiYgdGhpcy5idWZmZXJpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5LnB1c2goe3N0YXJ0OiBlbmR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHJlbWVtYmVyIHdoYXQgdGhpcyBpcyBkb2luZy4uLlxuICAgICAgICAvLyAgIElmIGJ1ZmZlcmluZywgdXNlIHBvc2l0aW9uIGZyb20gYnVmZmVyaW5nIHN0YXJ0IGluc3RlYWQgb2Ygc2VlayBzdGFydCAoZml4IGEgcGxheWVyIGJlaGF2aW9yKVxuICAgICAgICAvLyAgIElmIG5vdCBidWZmZXJpbmcsIHRoaXMgY29uZGl0aW9uIHdpbGwgbmV2ZXIgYmUgdHJ1ZSBJIGd1ZXNzIHNpbmNlIGxhc3RQb3NpdGlvbiBpcyB1cGRhdGUgZXZlcnkgc2Vjb25kXG4gICAgICAgIGlmIChzdGFydCA8IHRoaXMubGFzdFBvc2l0aW9uICYmIHRoaXMubGFzdFBvc2l0aW9uIC0gc3RhcnQgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVXBkYXRpbmcgc2VlayBzdGFydCBwb3NpdGlvbiBmcm9tICcgKyBzdGFydCArICcgdG8gJyArIHRoaXMubGFzdFBvc2l0aW9uLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgc3RhcnQgPSB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXN0UG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGJhZCBwb3NpdGlvbiB3aGVuIHNlZWtpbmcgd2hlbiBvbkJ1ZmZlcmluZ0VuZCBpcyBjYWxsZWRcbiAgICAgICAgICAgIC8vIFdoZW4gYnVmZmVyaW5nIGVuZCwgc2V0IHRoaXMubGFzdFBvc2l0aW9uIHRvIHRoZSBlbmQgc2VlayBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWsgPSBlbmQ7XG5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgdG8gYnVmZmVyaW5nIHN0YXJ0LCBsYXN0IHBvc2l0aW9uIGlzIHVwZGF0ZWQgaW4gc3RhcnQgYnVmZmVyaW5nIGV2ZW50XG4gICAgICAgICAgICBsYXN0UG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIG5vdCBidWZmZXJpbmcsIHByb2Nlc3MgZXZlbnRzIGJlZm9yZSBzZWVraW5nXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0UG9zaXRpb24gLSBzdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChzdGFydCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBzdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dGluZyB0byBzdGFydCBiZWNhdXNlIGlmIHVwZGF0ZSBwcm9jZXNzIGlzIG5vdCBydW5uaW5nLCBsYXN0IHBvc2l0aW9uIGNhbiBiZSB3YXkgYmFjayBpbiB0aGUgcGFzdFxuICAgICAgICAgICAgLy8gRm9yIGluc3RhbmNlIHNlZWsgdG8gYSBidWZmZXJlZCBwb3NpdGlvblxuICAgICAgICAgICAgbGFzdFBvc2l0aW9uID0gc3RhcnQ7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQWZ0ZXJTZWVrID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0cmFja2luZyBwb3NpdGlvblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IGVuZDtcblxuICAgICAgICAvLyBIYW5kbGUgc2VlayBkdXJpbmcgcGVyaW9kIHN3aXRjaCwgdGhlIHBsYXllciBjYW4gZ2VuZXJhdGUgc21hbGwgc2VlayAoPCA2IHNlY3MpIGFuZCBpdCBoYXMgdG8gYmUgZGlzdGluZ3Vpc2hlZCBmcm9tIGEgdXNlciBzZWVrXG4gICAgICAgIGlmIChNYXRoLmFicyhlbmQgLSBzdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBsYXllclNlZWsoc3RhcnQsIGVuZCwgbGFzdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGlmeSBza2lwIGV2ZW4gdGhvdWdoIHdlIG1pZ2h0IHN0aWxsIGJlIGluIHRoZSBzYW1lIGFkXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlBZFNraXBwZWQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgc2Vla2VkIHBvc2l0aW9uXG4gICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQoZW5kKTtcblxuICAgICAgICAvLyBSZXNldCBwcm9ncmVzc2lvblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVzZXQgYWQgdHJhY2tlcnMgd2l0aCBwb3NpdGlvbiAnICsgZW5kLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB0aGlzLmFkRGF0YT8ucmVzZXRQcm9ncmVzc2lvbihlbmQpO1xuICAgIH1cblxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIC8vIFN0b3AgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgc3RvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHRoaXMubGFzdFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBTdG9wIGFkIHRyYWNraW5nXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIC8vIFN0b3Agc2Vzc2lvbiB1cGRhdGVcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlU2Vzc2lvbkpvYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FuY2VsKHRoaXMudXBkYXRlU2Vzc2lvbkpvYik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIFBBTCBTREsgQVBJIHRocm91Z2ggdGFyZ2V0IGFkUGFsU2Vzc2lvblxuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvbj8uc2VuZFBsYXliYWNrRW5kKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgIXRoaXMubGlzdGVuZXJzLmluY2x1ZGVzKGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUV2ZW50KGxpc3RlbmVyLCBldmVudE5hbWUsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcltldmVudE5hbWVdKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5QWRCcmVha0RhdGEoYWRCcmVha0RhdGEpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZEJyZWFrRGF0YScsIGFkQnJlYWtEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRCcmVha0JlZ2luKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkQnJlYWtCZWdpbicsIHNlc3Npb25Ub2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkRGF0YShhZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkRGF0YScsIGFkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRCZWdpbihzZXNzaW9uVG9rZW4sIGFkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRCZWdpbicsIHNlc3Npb25Ub2tlbiwgYWQuY3JlYXRpdmVJZCwgYWQuYWRJZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENhbGwgUEFMIFNESyBBUEkgdGhyb3VnaCB0YXJnZXQgYWRQYWxTZXNzaW9uXG4gICAgICAgIC8vIERlcHJlY2F0ZWQgaW4gbGF0ZXN0IHZlcnNpb25zLCBrZXB0IGZvciByZXRyb2NvbXBhdGliaWxpdHlcbiAgICAgICAgdGhpcy5hZFBhbFNlc3Npb24/LnNlbmRBZEltcHJlc3Npb24oKTtcbiAgICB9XG5cbiAgICBub3RpZnlBZFNraXBwYWJsZShzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZFNraXBwYWJsZScsIHNlc3Npb25Ub2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkUHJvZ3Jlc3Moc2Vzc2lvblRva2VuLCBhZCwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZFByb2dyZXNzJywgc2Vzc2lvblRva2VuLCBhZC5jcmVhdGl2ZUlkLCBhZC5hZElkLCBwcm9ncmVzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkU2tpcHBlZChzZXNzaW9uVG9rZW4sIGFkKSB7XG4gICAgICAgIGNvbnN0IG90aGVyU2tpcHBlZEFkSWRzID0gW107XG4gICAgICAgIGFkLmFkQnJlYWsuYWRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBvdGhlciBhZHMgd2VyZSBza2lwcGVkIGZvbGxvd2luZyB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgICAgIC8vIGFkIHBvc2l0aW9uID4gY3VycmVudCBhZCBwb3NpdGlvblxuICAgICAgICAgICAgLy8gcGxheWVyIHBvc2l0aW9uID4gYWQgcG9zaXRpb24gKyBhZCBkdXJhdGlvbiAoZnVsbCBhZClcbiAgICAgICAgICAgIGlmIChlLnBvc2l0aW9uID4gYWQucG9zaXRpb24gJiYgdGhpcy5sYXN0UG9zaXRpb24gPj0gZS5wb3NpdGlvbiArIGUuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvdGhlclNraXBwZWRBZElkcy5wdXNoKGUuYWRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRTa2lwcGVkJywgc2Vzc2lvblRva2VuLCBhZC5jcmVhdGl2ZUlkLCBhZC5hZElkLCBvdGhlclNraXBwZWRBZElkcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUFkRW5kKHNlc3Npb25Ub2tlbiwgYWQpIHtcbiAgICAgICAgLy8gRm9yY2Ugc2Vzc2lvbiB1cGRhdGUgYXQgYWQgZW5kICh1c2VmdWwgZm9yIHNtYWxsIHNlZ21lbnQgY29udGVudHMpXG4gICAgICAgIGlmICh0aGlzLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVTZXNzaW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FuY2VsKHRoaXMudXBkYXRlU2Vzc2lvbkpvYik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkRW5kJywgc2Vzc2lvblRva2VuLCBhZC5jcmVhdGl2ZUlkLCBhZC5hZElkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRCcmVha0VuZChzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZEJyZWFrRW5kJywgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRzVXBkYXRlZChhZERhdGEpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZHNVcGRhdGVkJywgYWREYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBldmVudCBvbkFkRGF0YSByZWdpc3RlcmVkIHRocm91Z2ggc2Vzc2lvbi5zZXRBZERhdGFMaXN0ZW5lciguLi4pXG4gICAgICogSWYgZGF0YSBhcmUgYWxyZWFkeSBzZW50LCBkbyBub3Qgc2VuZCBpdCB0d2ljZVxuICAgICAqL1xuICAgIG5vdGlmeUFkRGF0YUxpc3RlbmVyKGRhdGFVcGRhdGVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0SW1hZ2VEYXRlID0gdGhpcy5maXJzdEltYWdlRGF0ZSB8fCBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBmaXJzdERhdGEgPSB0aGlzLnBvZHNTZW50TnVtYmVyID09PSAwICYmIHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSAmJiBEYXRlLm5vdygpIC0gZmlyc3RJbWFnZURhdGUgPD0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU1RBUlRfREVMVEE7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdPbiBhZCBkYXRhIChmaXJzdERhdGE6ICcgKyBmaXJzdERhdGEgKyAnLCBkYXRhVXBkYXRlZDogJyArIGRhdGFVcGRhdGVkICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIGlmIChmaXJzdERhdGEgPT09IHRydWUgfHwgZGF0YVVwZGF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucG9kc1NlbnROdW1iZXIgPSB0aGlzLmFkTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdPbiBhZCBkYXRhIChsZW5ndGg6ICcgKyB0aGlzLnBvZHNTZW50TnVtYmVyICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5hZFNlc3Npb24/LmFkRGF0YUxpc3RlbmVyPy5vbkFkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmFkU2Vzc2lvbi5hZERhdGFMaXN0ZW5lci5vbkFkRGF0YSh0aGlzLmFkTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGV2ZW50IG9uT3V0T2ZCYW5kQWREYXRhIHJlZ2lzdGVyZWQgdGhyb3VnaCBzZXNzaW9uLnNldE9uQWREYXRhTGlzdGVuZXIoLi4uKVxuICAgICAqL1xuICAgIG5vdGlmeU91dE9mQmFuZEFkRGF0YUxpc3RlbmVyKG91dE9mQmFuZEFkTGlzdCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyLmFkU2Vzc2lvbj8uYWREYXRhTGlzdGVuZXI/Lm9uT3V0T2ZCYW5kQWREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdPdXQtb2YtYmFuZCBhZCBicmVha3MgdXBkYXRlZCwgbm90aWZ5aW5nIG9uT3V0T2ZCYW5kQWREYXRhJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5hZFNlc3Npb24uYWREYXRhTGlzdGVuZXIub25PdXRPZkJhbmRBZERhdGEob3V0T2ZCYW5kQWRMaXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdPdXQtb2YtYmFuZCBhZCBicmVha3MgdXBkYXRlZCwgYWRkIG9uT3V0T2ZCYW5kQWREYXRhIGxpc3RlbmVyIHRvIGFjY2VzcyBjdXJyZW50IGxpc3QnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdE91dE9mQmFuZEFkcyhuYW1lLCBkdXJhdGlvbiwgYXV0b0JlZ2luLCBhZGRpdGlvbmFsUXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgYWRHYXRld2F5VVJMID0gVVJMLmNsb25lKHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnJlZGlyZWN0ZWRVUkwpO1xuXG4gICAgICAgIGFkR2F0ZXdheVVSTC5zZXRQYXJhbSgnYmstbWwnLCAnMS4wJyk7XG4gICAgICAgIGFkR2F0ZXdheVVSTC5zZXRQYXJhbSgnYmstb29iYScsIG5hbWUpO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZEdhdGV3YXlVUkwuc2V0UGFyYW0oJ2JrLW9vYmEtZHVyJywgZHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYWRkaXRpb25hbFF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFkZGl0aW9uYWxRdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgYWRHYXRld2F5VVJMLnNldFBhcmFtKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NlbmRpbmcgcmVxdWVzdCB0byB0aGUgYWQgZ2F0ZXdheTogJyArIGFkR2F0ZXdheVVSTCwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEhlYWRlcnMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlcXVlc3QgYWQgZ2F0ZXdheSB3aXRoIDVzIHRpbWVvdXRcbiAgICAgICAgSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFzeW5jR2V0KGFkR2F0ZXdheVVSTC5ocmVmLCBoZWFkZXJzLCBBZFRyYWNraW5nTWFuYWdlci5PT0JBX1JFUVVFU1RfVElNRU9VVCwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBnYXRld2F5IHJlc3BvbmRlZCAnICsgcmVzdWx0LnN0YXR1c0NvZGUsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAvLyBQYXJzZSBhZCBkYXRhXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlc3VsdC5zdGF0dXNDb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0LmJvZHkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGdhdGV3YXkgZmlsZSB1bnJlYWRhYmxlIChwYXJzaW5nKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSB3aXRoIGVtcHR5IGxpc3RcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPdXRPZkJhbmRBZERhdGFMaXN0ZW5lcihbXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHBhcmFtZXRlcnMgdXNlZCBmb3IgcmVxdWVzdGluZyBvdXQtb2YtYmFuZCBhZHNcbiAgICAgICAgICAgICAgICBjb25zdCBvb2JhID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGF1dG9CZWdpbjogYXV0b0JlZ2luLFxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUXVlcnlQYXJhbXM6IGFkZGl0aW9uYWxRdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQWRQb2RzKGRhdGEsIG9vYmEpO1xuXG4gICAgICAgICAgICAgICAgLy8gT25seSBzdGFydCBuZXdseSBjcmVhdGVkIGFkIGJyZWFrc1xuICAgICAgICAgICAgICAgIGlmIChhdXRvQmVnaW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ3JlcXVlc3RPdXRPZkJhbmRBZHMgYXV0b0JlZ2luIHNldCB0byB0cnVlLCBjYWxsaW5nIGJlZ2luT3V0T2ZCYW5kQWRCcmVhayBub3cnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhWydhZHBvZHMnXS5mb3JFYWNoKGFkcG9kID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5PdXRPZkJhbmRBZEJyZWFrKGFkcG9kWydpZCddKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ3JlcXVlc3RPdXRPZkJhbmRBZHMgYXV0b0JlZ2luIHNldCB0byBmYWxzZSwgY2FsbCBiZWdpbk91dE9mQmFuZEFkQnJlYWsgdG8gYmVnaW4gYWQgYnJlYWtzJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBnYXRld2F5IHJlc3BvbnNlIHVucmVhZGFibGUgKHN0YXR1cyBjb2RlKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgLy8gTm90aWZ5IHdpdGggZW1wdHkgbGlzdFxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T3V0T2ZCYW5kQWREYXRhTGlzdGVuZXIoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kVHJhY2tlcih0cmFja2luZ0V2ZW50TmFtZSwgYWRJZCwgY3JlYXRpdmVJZCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnQ2FsbGluZyBzZW5kVHJhY2tlcignICsgdHJhY2tpbmdFdmVudE5hbWUgKyAnLCAnICsgYWRJZCArIChjcmVhdGl2ZUlkID8gJywgJyArIGNyZWF0aXZlSWQgOiAnJykgKyAnKScsIHRoaXMuaWQpO1xuXG4gICAgICAgIC8vIENhbm5vdCByZWx5IG9uIGN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXJzIGJlY2F1c2UgaXQgZG9lc24ndCBjb250YWluIGFkcyB3aXRoIGR1cmF0aW9uIDBcbiAgICAgICAgLy8gU28gd2UgbG9vayBpbiBhbGwgYWRzIGFuZCBpdCdzIHVwIHRvIHRoZSBhcHAgaW50ZWdyYXRvciB0byB1c2UgdGhlIGNvcnJlY3QgYWRJZFxuICAgICAgICBjb25zdCBhbGxBZHMgPSBbLi4udGhpcy5hZERhdGEuYWRCcmVha3MsIC4uLnRoaXMuYWREYXRhLm91dE9mQmFuZEFkQnJlYWtzXS5mbGF0TWFwKGFkQnJlYWsgPT4gYWRCcmVhay5hZHMpO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkVHJhY2tlciA9IGFsbEFkcy5maW5kKGFkID0+IGFkLmFkSWQgPT09IGFkSWQpO1xuXG4gICAgICAgIGlmIChhZFRyYWNrZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ05vIG1hdGNoIGZvciBhZElkOiAnICsgYWRJZCwgdGhpcy5pZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhZCBpcyBub25saW5lYXIgb3IgbGluZWFyX2FuZF9ub25saW5lYXIsIHRoZXJlIGFyZSBhZGRpdGlvbmFsIHRyYWNrZXJzIGluIG5vbkxpbmVhckluZm9cbiAgICAgICAgLy8gVGhlIGFkIGNhbiBoYXZlIG11bHRpcGxlIG5vbkxpbmVhckluZm9zIChha2EgY3JlYXRpdmVzKSwgc28gd2UgbXVzdCBmaW5kIHRoZSBjb3JyZWN0IG9uZVxuICAgICAgICBsZXQgYWROb25MaW5lYXJJbmZvO1xuICAgICAgICBpZiAoYWRUcmFja2VyLm5vbkxpbmVhckluZm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgdXNlIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgIGFkTm9uTGluZWFySW5mbyA9IGFkVHJhY2tlci5ub25MaW5lYXJJbmZvWzBdO1xuXG4gICAgICAgICAgICAvLyBJZiBhIGNyZWF0aXZlSWQgaXMgcHJvdmlkZWQsIGZpbmQgbWF0Y2hpbmcgbm9uTGluZWFySW5mb1xuICAgICAgICAgICAgaWYgKGNyZWF0aXZlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFkTm9uTGluZWFySW5mbyA9IGFkVHJhY2tlci5ub25MaW5lYXJJbmZvLmZpbmQobm9uTGluZWFySW5mbyA9PiBub25MaW5lYXJJbmZvLmNyZWF0aXZlSWQgPT09IGNyZWF0aXZlSWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkTm9uTGluZWFySW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdObyBtYXRjaCBmb3IgY3JlYXRpdmVJZDogJyArIGNyZWF0aXZlSWQsIHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgbm9uTGluZWFyVHJhY2tpbmdFdmVudHMgPSBhZE5vbkxpbmVhckluZm8/LnRyYWNraW5nRXZlbnRzID8/IFtdO1xuXG4gICAgICAgIC8vIE5vdyB0aGF0IHdlIGhhdmUgYWxsIGV2ZW50cywgd2UgY2FuIGZpbHRlciBieSBuYW1lXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IFsuLi5hZFRyYWNrZXIuZXZlbnRzLCAuLi5ub25MaW5lYXJUcmFja2luZ0V2ZW50c10uZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnR5cGUgPT09IHRyYWNraW5nRXZlbnROYW1lKTtcblxuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ05vIG1hdGNoIGZvciB0cmFja2luZ0V2ZW50TmFtZTogJyArIHRyYWNraW5nRXZlbnROYW1lLCB0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gZXZlbnRbJ3VybCddIHx8IGV2ZW50WydjYWxsYmFja3VybCddO1xuICAgICAgICAgICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ05vIHVybCBmb3VuZCBmb3IgZXZlbnQgJyArIGV2ZW50LnR5cGUsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlcXVlc3RpbmcgJyArIHVybCwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIFJlcXVlc3RNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRFdmVudCh0aGlzLmhhbmRsZXIsIHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWRNZXRyaWNzLCBBZE1ldHJpY3NCdWlsZGVyfSBmcm9tICcuL2FkL21ldHJpY3MvQWRNZXRyaWNzJztcbmltcG9ydCBBZE1ldHJpY3NNYW5hZ2VyIGZyb20gJy4vYWQvbWV0cmljcy9BZE1ldHJpY3NNYW5hZ2VyJztcbmltcG9ydCBBZFRyYWNraW5nTWFuYWdlciBmcm9tICcuL2FkL3RyYWNraW5nL0FkVHJhY2tpbmdNYW5hZ2VyJztcbmltcG9ydCB7IEFkRGF0YVRyYWNrZXIsIEFkQnJlYWtUcmFja2VyLCBBZEJyZWFrRXZlbnRUcmFja2VyLCBBZFRyYWNrZXIsIEFkRXZlbnRUcmFja2VyIH0gZnJvbSAnLi9hZC90cmFja2luZy9BZFRyYWNrZXInO1xuaW1wb3J0IHtBZE1hbmFnZXIsIEFkVmlld1N0YXRlLCBBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlLCBBZFR5cGV9IGZyb20gJy4vYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7QWRTZXNzaW9ufSBmcm9tICcuL2FkL0FkU2Vzc2lvbic7XG5pbXBvcnQgSW50ZXJuYWxBZE1hbmFnZXIgZnJvbSAnLi9hZC9JbnRlcm5hbEFkTWFuYWdlcic7XG5pbXBvcnQgT01TREtNYW5hZ2VyIGZyb20gJy4vcGx1Z2lucy9vbXNkay9PTVNES01hbmFnZXInO1xuaW1wb3J0IE9NU2Vzc2lvbkhhbmRsZXIgZnJvbSAnLi9wbHVnaW5zL29tc2RrL09NU2Vzc2lvbkhhbmRsZXInO1xuXG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi9TbWFydExpYic7XG5TbWFydExpYi5hZE1vZHVsZSA9IHtcbiAgICBBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXIsXG4gICAgQWRNZXRyaWNzTWFuYWdlcixcbiAgICBBZFRyYWNraW5nTWFuYWdlcixcbiAgICBBZERhdGFUcmFja2VyLCBBZEJyZWFrVHJhY2tlciwgQWRCcmVha0V2ZW50VHJhY2tlciwgQWRUcmFja2VyLCBBZEV2ZW50VHJhY2tlcixcbiAgICBBZE1hbmFnZXIsIEFkVmlld1N0YXRlLCBBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlLCBBZFR5cGUsXG4gICAgQWRTZXNzaW9uLFxuICAgIEludGVybmFsQWRNYW5hZ2VyLFxuICAgIE9NU0RLTWFuYWdlciwgT01TZXNzaW9uSGFuZGxlclxufTtcblxuZXhwb3J0IHtcbiAgICBBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXIsXG4gICAgQWRNZXRyaWNzTWFuYWdlcixcbiAgICBBZFRyYWNraW5nTWFuYWdlcixcbiAgICBBZERhdGFUcmFja2VyLCBBZEJyZWFrVHJhY2tlciwgQWRCcmVha0V2ZW50VHJhY2tlciwgQWRUcmFja2VyLCBBZEV2ZW50VHJhY2tlcixcbiAgICBBZE1hbmFnZXIsIEFkVmlld1N0YXRlLCBBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlLCBBZFR5cGUsXG4gICAgQWRTZXNzaW9uLFxuICAgIEludGVybmFsQWRNYW5hZ2VyLFxuICAgIE9NU0RLTWFuYWdlciwgT01TZXNzaW9uSGFuZGxlclxufTtcbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtPTVNES01ncic7XG5cbmNsYXNzIE9NU0RLSGFuZGxlciB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjcmVhdGVPTUFkU2Vzc2lvbihwYXJ0bmVyTmFtZSwgcGFydG5lclZlcnNpb24sIGN1c3RvbVJlZmVyZW5jZURhdGEsIHZlcmlmaWNhdGlvbkRhdGEsIGNhbGxiYWNrKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9NU0RLTWFuYWdlciB7XG4gICAgc3RhdGljICNpbnN0YW5jZTtcblxuICAgIHNtYXJ0TGliO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIU9NU0RLTWFuYWdlci4jaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE9NU0RLTWFuYWdlci4jaW5zdGFuY2UgPSBuZXcgT01TREtNYW5hZ2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT01TREtNYW5hZ2VyLiNpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIC8qIGluaXQoc21hcnRMaWIpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0luaXRpYWxpemluZyBPTSBTREsgbWFuYWdlci4uLicpO1xuXG4gICAgICAgIHRoaXMuc21hcnRMaWIgPSBzbWFydExpYjtcbiAgICB9XG5cbiAgICByZWxlYXNlKCkge1xuXG4gICAgfSovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0luaXRpYWxpemluZyBPTSBTREsgbWFuYWdlci4uLicpO1xuICAgIH1cblxuICAgIHJlbGVhc2UoKSB7XG5cbiAgICB9XG5cbiAgICBhdHRhY2hJbnN0YW5jZShzbWFydExpYikge1xuICAgICAgICB0aGlzLnNtYXJ0TGliID0gc21hcnRMaWI7XG4gICAgfVxuXG4gICAgYXR0YWNoSGFuZGxlcihvbXNka0hhbmRsZXIpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0F0dGFjaGluZyBPTSBTREsgaGFuZGxlci4uLicpO1xuXG4gICAgICAgIHRoaXMub21zZGtIYW5kbGVyID0gb21zZGtIYW5kbGVyO1xuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub21zZGtIYW5kbGVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vbXNka0hhbmRsZXIgIT09IG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBPTVNES01hbmFnZXIgZnJvbSAnLi9PTVNES01hbmFnZXInO1xuaW1wb3J0IEFkVHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2FkL3RyYWNraW5nL0FkVHJhY2tpbmdNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa09NU2Vzc2lvbkhhbmRsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPTVNlc3Npb25IYW5kbGVyIHtcbiAgICBoYW5kbGVyO1xuXG4gICAgLyoqIFxuICAgICAqIFNtYXJ0TGliIGFkIHNlc3Npb24gXG4gICAgICovXG4gICAgYWRTZXNzaW9uO1xuXG4gICAgcGxheWVyQWRhcHRlcjtcblxuICAgIGludGVybmFsQWRNYW5hZ2VyO1xuXG4gICAgb21zZGtIYW5kbGVyO1xuXG4gICAgLyoqIFxuICAgICAqIE9NIFNESyBhZCBzZXNzaW9uXG4gICAgICovXG4gICAgb21BZFNlc3Npb247XG5cbiAgICBmaXJzdEltYWdlRGF0ZTtcblxuICAgIGFkQnJlYWtQb3NpdGlvbjtcblxuICAgIHBhdXNlO1xuXG4gICAgYnVmZmVyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgICAgIHRoaXMuYWRTZXNzaW9uID0gaGFuZGxlci5hZFNlc3Npb247XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcblxuICAgICAgICB0aGlzLmludGVybmFsQWRNYW5hZ2VyID0gdGhpcy5oYW5kbGVyLnNtYXJ0TGliLmludGVybmFsQWRNYW5hZ2VyO1xuXG4gICAgICAgIHRoaXMub21zZGtIYW5kbGVyID0gT01TREtNYW5hZ2VyLmdldEluc3RhbmNlKCkub21zZGtIYW5kbGVyO1xuXG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZURhdGUgPSAwO1xuICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdtaWRyb2xsJztcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvblJlZGlyZWN0aW9uRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25GaXJzdEltYWdlKGJpdHJhdGUsIHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgb25MYXllclN3aXRjaChiaXRyYXRlKSB7XG5cbiAgICB9XG5cbiAgICBvblBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uYnVmZmVyU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdFbmQoaXNQbGF5aW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uYnVmZmVyRmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblN0YWxsRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25SZWJ1ZmZlcmluZ0VuZCgpIHtcblxuICAgIH1cblxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmFkRGF0YSAhPT0gdW5kZWZpbmVkICYmIE1hdGguYWJzKGVuZCAtIHN0YXJ0KSA+PSAxMDAwKSB7XG4gICAgICAgICAgICBpZiAoZW5kID49IHRoaXMuYWREYXRhLnBvc2l0aW9uICsgdGhpcy5hZERhdGEuZHVyYXRpb24gfHwgZW5kIDwgdGhpcy5hZERhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5za2lwcGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0b3Aoc3RhdHVzQ29kZSkge1xuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5vbUFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgIH1cblxuICAgIG9uU3RhcnRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcblxuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG5cbiAgICB9XG5cbiAgICBvbkVuZFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuXG4gICAgfVxuXG4gICAgb25BZEJyZWFrRGF0YShhZEJyZWFrVHJhY2tlcikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoKGFkQnJlYWtUcmFja2VyLnBvc2l0aW9uICsgYWRCcmVha1RyYWNrZXIuZHVyYXRpb24pIC0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldER1cmF0aW9uKCkpIDwgMTAwMDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3Bvc3Ryb2xsJztcbiAgICAgICAgfSBlbHNlIGlmIChEYXRlLm5vdygpIC0gdGhpcy5maXJzdEltYWdlRGF0ZSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NUQVJUX0RFTFRBKSB7XG4gICAgICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdwcmVyb2xsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgICAgICB9XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBwb3NpdGlvbiBpcyAnICsgdGhpcy5hZEJyZWFrUG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgfVxuXG4gICAgb25QcmVwYXJlQWRCcmVhayhzZXNzaW9uVG9rZW4pIHtcblxuICAgIH1cblxuICAgIG9uQWRCcmVha0JlZ2luKHNlc3Npb25Ub2tlbikge1xuXG4gICAgfVxuXG4gICAgc3RhcnRBZFNlc3Npb24ob21BZFNlc3Npb24sIGFkRGF0YSkge1xuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uID0gb21BZFNlc3Npb247XG5cbiAgICAgICAgLy8gU2V0IHRoZSBhZCB2aWV3IGlmIGl0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBhZCBicmVhayAoQW5kcm9pZCwgaU9TKVxuICAgICAgICBpZiAodGhpcy5hZFNlc3Npb24/LmFkVmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLnNldEFkVmlldyh0aGlzLmFkU2Vzc2lvbi5hZFZpZXcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgbmF0aXZlIGVsZW1lbnRzIHRoYXQgYmVsb25nIHRvIHRoZSBhZCwgc3VjaCBhcyBhIGNsb3NlIGJ1dHRvbiwgc29tZSBsb2dvIHRleHQgb3IgYW5vdGhlciBkZWNvcmF0aW9uIChBbmRyb2lkLCBpT1MpXG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRGcmllbmRseU9ic3RydWN0aW9uVmlld3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZFNlc3Npb24uYWRGcmllbmRseU9ic3RydWN0aW9uVmlld3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLnJlZ2lzdGVyQWRGcmllbmRseU9ic3RydWN0aW9uVmlldyhpdGVtLnZpZXcsIGl0ZW0ucHVycG9zZSwgaXRlbS5yZWFzb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBhZCB2aWV3IHN0YXRlIGlmIGl0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBhZCBicmVha1xuICAgICAgICBpZiAodGhpcy5hZFNlc3Npb24/LmFkVmlld1N0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24uc2V0QWRWaWV3U3RhdGUodGhpcy5hZFNlc3Npb24uYWRWaWV3U3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFkRGF0YS5za2lwcGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24ubG9hZGVkKGFkRGF0YS5za2lwcGFibGVQb3NpdGlvbiAtIGFkRGF0YS5wb3NpdGlvbiwgYWREYXRhLmR1cmF0aW9uLCB0aGlzLmFkQnJlYWtQb3NpdGlvbiwgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFZvbHVtZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24ubG9hZGVkKC0xLCBhZERhdGEuZHVyYXRpb24sIHRoaXMuYWRCcmVha1Bvc2l0aW9uLCB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0Vm9sdW1lKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ09NIGFkIHNlc3Npb24gbG9hZGVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICBvbkFkRGF0YShhZERhdGEpIHtcbiAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5lKFRBRywgJ2FkIGRhdGE9JyArIEpTT04uc3RyaW5naWZ5KGFkRGF0YSksIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIHNraXAgPyArIHNlc3Npb24gZmluaXNoXG4gICAgICAgICAgICAvLyB0aGlzLm9tQWRTZXNzaW9uPy5za2lwcGVkKCk7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5maW5pc2goKTtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkRGF0YSA9IGFkRGF0YTtcblxuICAgICAgICAvLyBCdWlsZCBhZCB2ZXJpZmljYXRpb24gZGF0YVxuICAgICAgICBsZXQgYWRWZXJpZmljYXRpb25EYXRhO1xuICAgICAgICBpZiAodGhpcy5hZFNlc3Npb24/LmFkVmVyaWZpY2F0aW9uRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZFZlcmlmaWNhdGlvbkRhdGEgPSBbLi4udGhpcy5hZFNlc3Npb24uYWRWZXJpZmljYXRpb25EYXRhXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkVmVyaWZpY2F0aW9uRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWREYXRhLnZlcmlmaWNhdGlvbnMuZm9yRWFjaCh2ZXJpZmljYXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgamF2YXNjcmlwdFJlc291cmNlcyA9IHZlcmlmaWNhdGlvbi5qYXZhc2NyaXB0UmVzb3VyY2VzLmZpbmQocmVzb3VyY2UgPT4gcmVzb3VyY2UuYXBpZnJhbWV3b3JrID09PSAnb21pZCcpO1xuICAgICAgICAgICAgYWRWZXJpZmljYXRpb25EYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblZlbmRvcjogdmVyaWZpY2F0aW9uLnZlbmRvcixcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25VUkw6IGphdmFzY3JpcHRSZXNvdXJjZXMudXJsLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblBhcmFtZXRlcnM6IHZlcmlmaWNhdGlvbi52ZXJpZmljYXRpb25QYXJhbWV0ZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFkIHNlc3Npb25cbiAgICAgICAgY29uc3Qgb21BZFNlc3Npb24gPSB0aGlzLm9tc2RrSGFuZGxlci5jcmVhdGVPTUFkU2Vzc2lvbih0aGlzLmludGVybmFsQWRNYW5hZ2VyLm9tUGFydG5lck5hbWUsIHRoaXMuaW50ZXJuYWxBZE1hbmFnZXIub21QYXJ0bmVyVmVyc2lvbiwgdGhpcy5hZFNlc3Npb24/LmFkQ3VzdG9tUmVmZXJlbmNlLCBhZFZlcmlmaWNhdGlvbkRhdGEsIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgaU9TXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWRTZXNzaW9uKHJlc3VsdCwgYWREYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIEFuZHJvaWQgYW5kIFdlYlxuICAgICAgICBpZiAob21BZFNlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydEFkU2Vzc2lvbihvbUFkU2Vzc2lvbiwgYWREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJlcGFyZUFkKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCkge1xuXG4gICAgfVxuXG4gICAgb25BZEJlZ2luKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCkge1xuXG4gICAgfVxuXG4gICAgb25BZFNraXBwYWJsZShzZXNzaW9uVG9rZW4pIHtcblxuICAgIH1cblxuICAgIG9uQWRQcm9ncmVzcyhzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQsIHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMub21BZFNlc3Npb24/LnByb2dyZXNzKHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBvbkFkRW5kKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCkge1xuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5maW5pc2goKTtcbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvbkFkQnJlYWtFbmQoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHRoaXMuYWREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLm9tQWRTZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24uZmluaXNoKCk7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgfVxuXG4gICAgb25Wb2x1bWVDaGFuZ2VkKHZvbHVtZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVm9sdW1lIGlzIG5vdyAnICsgdm9sdW1lLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIHRoaXMub21BZFNlc3Npb24/LnZvbHVtZUNoYW5nZSh2b2x1bWUpO1xuICAgIH1cblxuICAgIG9uUGxheWVyRXJyb3IoYnJvYWRwZWFrU3RhdHVzQ29kZSwgcGxheWVyRXJyb3JDb2RlKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdCcm9hZHBlYWsgc3RhdHVzIGNvZGUgJyArIGJyb2FkcGVha1N0YXR1c0NvZGUsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdQbGF5ZXIgZXJyb3IgY29kZSAnICsgcGxheWVyRXJyb3JDb2RlLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIHRoaXMub21BZFNlc3Npb24/LmVycm9yKGJyb2FkcGVha1N0YXR1c0NvZGUsIHBsYXllckVycm9yQ29kZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkRhdGVVdGlscyIsIlRBRyIsIkFkTWV0cmljcyIsIm1ldHJpY3MiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJhZFNraXBwYWJsZSIsImFkU2tpcHBlZCIsImFkUHJvZ3Jlc3MiLCJhZER1cmF0aW9uIiwic3RhbGxzTnVtYmVyIiwic3RhbGxzRHVyYXRpb24iLCJsYXllclN3aXRjaGVzTnVtYmVyIiwiYXZlcmFnZUJpdHJhdGUiLCJjcmVhdGl2ZUlkIiwiYWRJZCIsImFkSW5kZXgiLCJhZENvdW50IiwiYWRGb3JtYXQiLCJpbXByZXNzaW9uRGF0ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwidG9TdHJpbmciLCJmb3JtYXRUaW1lIiwibWVyZ2UiLCJsaXN0IiwibWVyZ2VkTWV0cmljcyIsImxhc3RNZXRyaWNzIiwibGF5ZXJQZXJEdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJpIiwiYWRNZXRyaWNzIiwiTWF0aCIsInJvdW5kIiwiQWRNZXRyaWNzQnVpbGRlciIsInRpbWVTcGVudFBlckxheWVyIiwicXVhcnRpbGVzIiwicmVzZXQiLCJpc0luaXRpYWxpemVkIiwiaW1wb3J0IiwiRGF0ZSIsIm5vdyIsInNldEFkU2tpcHBhYmxlIiwic2V0QWRTa2lwcGVkIiwiYWRkUHJvZ3Jlc3MiLCJtYXgiLCJpbml0IiwiZm9ybWF0IiwiaW5kZXgiLCJjb3VudCIsInNldENyZWF0aXZlSWQiLCJzZXRBZElkIiwiYWRkVGltZVNwZW50UGVyTGF5ZXIiLCJiaXRyYXRlIiwiZHVyYXRpb24iLCJ0aW1lU3BlbnRPbkxheWVyIiwiYWRkTGF5ZXJTd2l0Y2giLCJhZGRTdGFsbCIsImNsb25lIiwiT2JqZWN0IiwiYXNzaWduIiwiYnVpbGQiLCJMb2dnZXJNYW5hZ2VyIiwiU21hcnRMaWIiLCJBZFRyYWNraW5nTWFuYWdlciIsIkFkTWV0cmljc01hbmFnZXIiLCJoYW5kbGVyIiwidGltZWxpbmUiLCJzZXNzaW9uUmVwb3J0IiwiYnVpbGRlciIsIm9uU3RhcnQiLCJhZExhc3RMYXllclN3aXRjaERhdGUiLCJmaXJzdEltYWdlRGF0ZSIsImxhc3RMYXllckJpdHJhdGUiLCJhZExhc3RCdWZmZXJpbmdTdGFydERhdGUiLCJhZEJyZWFrUGxheWluZyIsImFkUGxheWluZyIsImFkQnJlYWtQb3NpdGlvbiIsIm9uRmlyc3RJbWFnZSIsInBvc2l0aW9uIiwib25MYXllclN3aXRjaCIsIm9uQnVmZmVyaW5nU3RhcnQiLCJvblN0YWxsRW5kIiwib25SZWJ1ZmZlcmluZ0VuZCIsIm9uU2VlayIsInN0YXJ0IiwiZW5kIiwiX3RoaXMkaGFuZGxlciIsImQiLCJpZCIsImFicyIsIlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEiLCJfdGhpcyRoYW5kbGVyMiIsIl90aGlzJGhhbmRsZXIzIiwib25TdG9wIiwic3RhdHVzQ29kZSIsImhhbmRsZUFkRW5kIiwib25BZEJyZWFrRGF0YSIsImFkQnJlYWtUcmFja2VyIiwiX3RoaXMkaGFuZGxlciRwbGF5ZXJBIiwicGxheWVyQWRhcHRlciIsImdldER1cmF0aW9uIiwiUE9TSVRJT05fU1RBUlRfREVMVEEiLCJvb2JhIiwiX3RoaXMkaGFuZGxlcjQiLCJfU21hcnRMaWIkYW5hbHl0aWNzTW8iLCJwdXNoRXZlbnQiLCJhbmFseXRpY3NNb2R1bGUiLCJTZXNzaW9uVHJhY2tlckV2ZW50cyIsIkFkQnJlYWtTdGFydCIsIm9uQWREYXRhIiwiYWREYXRhIiwiYWRCcmVhayIsImxpdmUiLCJhZHMiLCJvbkFkU2tpcHBhYmxlIiwic2Vzc2lvblRva2VuIiwib25BZFNraXBwZWQiLCJvdGhlclNraXBwZWRBZElkcyIsIl90aGlzIiwiX3RoaXMkaGFuZGxlcjUiLCJmb3JFYWNoIiwicmVwb3J0IiwiY3VycmVudFJlcG9ydCIsIm9uQWRQcm9ncmVzcyIsInByb2dyZXNzIiwiX3RoaXMkaGFuZGxlcjYiLCJvbkFkRW5kIiwib25BZEJyZWFrRW5kIiwiX1NtYXJ0TGliJGFuYWx5dGljc01vMiIsInB1c2hFdmVudFByb2dyZXNzIiwiQWRCcmVha1N0b3AiLCJvbktlZXBhbGl2ZVNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQiLCJzdG9yZU1ldHJpY3MiLCJnZW5lcmF0ZU1ldHJpY3MiLCJvbkVuZFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQiLCJmaW5kSW5kZXgiLCJwdXNoIiwidmFsdWVzIiwicmVwb3J0cyIsIl90aGlzJGhhbmRsZXI3Iiwib25BZHNVcGRhdGVkIiwiX3RoaXMyIiwiYWRCcmVha3MiLCJhZCIsIl90aGlzMiRoYW5kbGVyIiwiZGVmYXVsdCIsIlJlcXVlc3RNYW5hZ2VyIiwiQWRUeXBlIiwiVHJhY2tlciIsInByb2NlZWRlZCIsInByZXBhcmVkIiwiY2FuUHJvY2VzcyIsInJlc2V0UHJvY2VzcyIsIkFkRGF0YVRyYWNrZXIiLCJhZFRyYWNraW5nTWFuYWdlciIsInRpbWVSZWZlcmVuY2UiLCJvdXRPZkJhbmRBZEJyZWFrcyIsImhhc1JlbWFpbmluZ0FkQnJlYWtzIiwiZmluZCIsInJlc2V0UHJvZ3Jlc3Npb24iLCJBZEJyZWFrVHJhY2tlciIsIl9UcmFja2VyMiIsIl9jYWxsU3VwZXIiLCJ0cmFja2luZ0V2ZW50cyIsIl9pbmhlcml0cyIsInByb2Nlc3NQcmVwYXJlIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhIiwiYWRFdmVudHNMaXN0ZW5lciIsImFkU2Vzc2lvbiIsIm9uUHJlcGFyZUFkQnJlYWsiLCJ0b0RhdGEiLCJwcm9jZXNzQmVnaW4iLCJfYWRUcmFja2luZ01hbmFnZXIkaGEyIiwibm90aWZ5QWRCcmVha0RhdGEiLCJub3RpZnlBZEJyZWFrQmVnaW4iLCJmaWx0ZXIiLCJldmVudCIsInR5cGUiLCJwcm9jZXNzRXZlbnQiLCJvbkFkQnJlYWtCZWdpbiIsInByb2Nlc3NFbmQiLCJfYWRUcmFja2luZ01hbmFnZXIkaGEzIiwibm90aWZ5QWRCcmVha0VuZCIsIl9zdXBlclByb3BHZXQiLCJzdGFydFBvc2l0aW9uIiwibWFwIiwiQWRCcmVha0V2ZW50VHJhY2tlciIsIl9UcmFja2VyMyIsInVybCIsImdldEluc3RhbmNlIiwiYWRFdmVudCIsIkFkVHJhY2tlciIsIl9UcmFja2VyNCIsImFkVHlwZSIsInNraXBwYWJsZSIsInNraXBwYWJsZVBvc2l0aW9uIiwiY2xpY2thYmxlIiwidmVyaWZpY2F0aW9ucyIsIm5vbkxpbmVhckluZm8iLCJlcnJvclVSTCIsIl90aGlzMyIsImV2ZW50cyIsIndhdGNoZWQiLCJwcm9ncmVzc2lvbiIsImZsYXRXYXRjaGVkIiwicmFuZ2VzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaW50ZXJ2YWxzIiwic2xpY2UiLCJzdGFjayIsInRvcCIsInNvcnQiLCJwb3AiLCJ1cGRhdGVQcm9ncmVzc2lvbiIsInBvc2l0aW9uU3RhcnQiLCJwb3NpdGlvbkVuZCIsImR1cmF0aW9uU3RhcnQiLCJyZWR1Y2UiLCJzdW0iLCJwcm9ncmVzc2lvblN0YXJ0IiwiZHVyYXRpb25FbmQiLCJwcm9ncmVzc2lvbkVuZCIsIm5vdGlmeUFkUHJvZ3Jlc3MiLCJmbG9vciIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTQiLCJvblByZXBhcmVBZCIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTUiLCJfYWRUcmFja2luZ01hbmFnZXIkaGE2Iiwibm90aWZ5QWREYXRhIiwibm90aWZ5QWRCZWdpbiIsIm5vdGlmeUFkU2tpcHBhYmxlIiwib21TZXNzaW9uSGFuZGxlciIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTciLCJvbUFkU2Vzc2lvbiIsImdldEFkU2Vzc2lvbklkIiwiY3VycmVudEFkRGF0YSIsIm9uQWRCZWdpbiIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTgiLCJub3RpZnlBZEVuZCIsImdldE5vbkxpbmVhclJlc291cmNlcyIsInJlc291cmNlVHlwZSIsIm9iaiIsInBhcmFtZXRlcnMiLCJhZFBhcmFtZXRlcnMiLCJza2lwUG9zaXRpb24iLCJjbGlja1VSTCIsInVyaSIsIm5vbkxpbmVhcklmcmFtZVJlc291cmNlcyIsIm5vbkxpbmVhclN0YXRpY1Jlc291cmNlcyIsIkFkRXZlbnRUcmFja2VyIiwiX1RyYWNrZXI1Iiwib2Zmc2V0IiwiX3RoaXM0IiwicHJvY2Vzc1Byb2dyZXNzaW9uIiwidG9Mb3dlckNhc2UiLCJBRF9OT05fTElORUFSIiwiSm9iTWFuYWdlciIsIlN0cmVhbWluZ1Nlc3Npb25PcHRpb25zIiwiVVJMIiwibGlzdGVuZXJzIiwiYWRMaXN0Iiwib3V0T2ZCYW5kQWRMaXN0IiwiY3VycmVudE91dE9mQmFuZEFkVHJhY2tlcnMiLCJjdXJyZW50T3V0T2ZCYW5kQWRCcmVha1RyYWNrZXJzIiwidXBkYXRlUG9zaXRpb25Kb2IiLCJ1cGRhdGVTZXNzaW9uSm9iIiwic3RhcnRlZCIsInBhdXNlZCIsImJ1ZmZlcmluZyIsImxhc3RQb3NpdGlvbiIsImxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlIiwibGFzdFBvc2l0aW9uQWZ0ZXJTZWVrIiwiYmtZb3VTZXNzaW9uIiwiYmFzZVVSTCIsIm5vbmNlIiwiYWRQYWxTZXNzaW9uUmVxdWVzdCIsImZpcnN0RmlsZVJlY2VpdmVkIiwiZmlyc3RGaWxlUHJvY2VlZGVkIiwicG9kc1NlbnROdW1iZXIiLCJzZXNzaW9uVXBkYXRlSW50ZXJ2YWwiLCJTRVNTSU9OX1VQREFURV9JTlRFUlZBTCIsInBvc2l0aW9uSGlzdG9yeSIsImluaXRCa1lvdVNlc3Npb24iLCJkYXRhIiwiYWRQYWxTZXNzaW9uIiwicGFyc2VBZFBvZHMiLCJ1cGRhdGVCa1lvdVNlc3Npb24iLCJzdG9wcGVkIiwiYWRUcmFja2luZ1VSTCIsInNtYXJ0TGliUGFyYW1ldGVycyIsInNtYXJ0TGliIiwiZ2V0UGFyYW1ldGVycyIsInVzZXJBZ2VudCIsImFkVHJhY2tpbmciLCJ0aGVuIiwicmVzdWx0IiwiY2FuY2VsIiwiaHR0cFN0YXR1cyIsImNvbnRlbnQiLCJlIiwiYXN5bmNEZWxheSIsImlzTGl2ZSIsImZpeEFkQnJlYWsiLCJsYXN0QWQiLCJuZXh0QWQiLCJjdXJyZW50QWRFbmQiLCJleHBlY3RlZER1cmF0aW9uIiwicmVmcmVzaERlbGF5IiwiYWREYXRhVHJhY2tlciIsImFkUG9kcyIsIkFycmF5IiwiaXNBcnJheSIsImFkUG9kIiwiYWRCcmVha0lkIiwic3RhcnRUaW1lIiwiYWRCcmVha1RyYWNraW5nRXZlbnRzIiwiYWRCcmVha1RyYWNraW5nRXZlbnQiLCJjYWxsYmFja3VybCIsImFkQnJlYWtFdmVudFRyYWNrZXIiLCJzZXF1ZW5jZU51bWJlciIsImlzVmFsaWRBZCIsIl9hZCR2aWRlb2NsaWNrcyIsIl9hZCR2aWRlb2NsaWNrczIiLCJfYWQkdmlkZW9jbGlja3MzIiwiZ2V0QWRUeXBlIiwic2tpcHBhYmxlVGltZSIsInZpZGVvY2xpY2tzIiwiY2xpY2t0aHJvdWdodXJsIiwidHJhY2tlcnMiLCJjbGlja3RyYWNraW5nIiwiY3VzdG9tQ2xpY2siLCJjdXN0b21jbGljayIsImFkVmVyaWZpY2F0aW9ucyIsImFkdmVyaWZpY2F0aW9ucyIsImVsZW1lbnQiLCJ2ZW5kb3IiLCJqYXZhc2NyaXB0UmVzb3VyY2VzIiwiamF2YXNjcmlwdHJlc291cmNlcyIsImV4ZWN1dGFibGVSZXNvdXJjZXMiLCJleGVjdXRhYmxlcmVzb3VyY2VzIiwidHJhY2tpbmdldmVudHMiLCJ2ZXJpZmljYXRpb25QYXJhbWV0ZXJzIiwidmVyaWZpY2F0aW9ucGFyYW1ldGVycyIsImFkTm9uTGluZWFySW5mbyIsImNyZWF0aXZlaWQiLCJzdGF0aWNSZXNvdXJjZSIsInN0YXRpY3Jlc291cmNlIiwiaWZyYW1lUmVzb3VyY2UiLCJpZnJhbWVyZXNvdXJjZSIsImFkcGFyYW1ldGVycyIsImFkVHJhY2tlciIsInRpbWUiLCJhZEV2ZW50VHJhY2tlciIsImRhdGFVcGRhdGVkIiwibWVyZ2VFdmVudHMiLCJub3RpZnlBZERhdGFMaXN0ZW5lciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIm91dE9mQmFuZEFkQnJlYWsiLCJub3RpZnlPdXRPZkJhbmRBZERhdGFMaXN0ZW5lciIsImJlZ2luT3V0T2ZCYW5kQWRCcmVhayIsInBsYXllclBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJ3IiwiZW5kT3V0T2ZCYW5kQWRCcmVhayIsInNwbGljZSIsImRlbGF5IiwiUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMIiwib25Qb3NpdGlvblVwZGF0ZWQiLCJzdG9wIiwiX3RoaXM1IiwibmV3QWRDb3VudCIsImRlbGV0ZWRBZENvdW50IiwiY3VycmVudElkcyIsImFycmF5IiwiX3RoaXM1JGN1cnJlbnRBZFRyYWNrIiwiaW5jbHVkZXMiLCJjdXJyZW50QWRUcmFja2VyIiwicmVtb3ZlIiwiYWRUcmFja2Vyc1BlcmlvZCIsIm9wdGlvbnMiLCJnZXQiLCJBRF9UUkFDS0VSU19TVE9SRV9EVVJBVElPTiIsImN1cnJlbnRBZEJyZWFrIiwiY3VycmVudEFkIiwiaW5zZXJ0SW5kZXgiLCJub3RpZnlBZHNVcGRhdGVkIiwiY2hlY2tTdGFydCIsImNoZWNrQWRCcmVha0VuZGVkIiwiY3VycmVudFBvc2l0aW9uIiwiX3RoaXM2IiwicGxheWluZ1BlcmlvZCIsIm1pbiIsIl90aGlzJGFkRGF0YSIsIl90aGlzJGFkRGF0YTIiLCJfdGhpcyRhZERhdGEzIiwiX3RoaXMkYWREYXRhNCIsIl90aGlzJGFkRGF0YTUiLCJuZXh0QWRCcmVha1RyYWNrZXIiLCJQT1NJVElPTl9QUkVQQVJFX0RFTFRBIiwibmV4dEFkVHJhY2tlciIsInNraXBwZWQiLCJjdXJyZW50QWRCcmVha0RhdGEiLCJub3RpZnlBZFNraXBwZWQiLCJjdXJyZW50QWRCcmVha1RyYWNrZXIiLCJvdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMiLCJvdXRPZkJhbmRBZFRyYWNrZXJzIiwib3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIiLCJjdXJyZW50T3V0T2ZCYW5kQWRCcmVhayIsIm91dE9mQmFuZEFkVHJhY2tlciIsImN1cnJlbnRPdXRPZkJhbmRBZCIsImN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXIiLCJvdXRPZkJhbmRBZCIsImN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlciIsIm5leHRVcGRhdGVUaW1lIiwibmV4dFBvc2l0aW9uIiwiYWRJbmNvbWluZ1RpbWUiLCJORUFSX0FEX0RFTFRBIiwicHJpbnREZWJ1Z0xvZ3MiLCJhZFJlbWFpbmluZ1RpbWUiLCJfdGhpcyRhZERhdGE2IiwiX3RoaXMkYWREYXRhNyIsIl90aGlzJGFkRGF0YTgiLCJfdGhpcyRhZERhdGE5IiwiYWRVc2VySW50ZXJhY3Rpb24iLCJpbnRlcmFjdGlvblR5cGUiLCJfdGhpcyRjdXJyZW50QWRUcmFja2UiLCJfdGhpczciLCJ0cmFja2VyIiwiY2xpY2t1cmwiLCJnZXRDdXJyZW50QWQiLCJnZXRDdXJyZW50QWRCcmVhayIsImdldFBvc2l0aW9uRm9yQm9va21hcmsiLCJnZXRQb3NpdGlvbkZvclBsYXliYWNrIiwicG9zaXRpb25JbkJvb2ttYXJrIiwiYmVmb3JlQWRCcmVhayIsImEiLCJiIiwibGFzdEFkQnJlYWsiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZXJyIiwiZiIsImdldFRvdGFsQWRzRHVyYXRpb24iLCJ0b3RhbCIsIl90aGlzOCIsIl90aGlzJGFkUGFsU2Vzc2lvbiIsInNlbmRQbGF5YmFja1N0YXJ0Iiwib25QYXVzZSIsIm9uUmVzdW1lIiwib25CdWZmZXJpbmdFbmQiLCJwbGF5aW5nIiwiaGFuZGxlUGxheWVyU2VlayIsIl90aGlzJGFkRGF0YTEwIiwiX3RoaXMkYWREYXRhMTEiLCJfdGhpcyRhZFBhbFNlc3Npb24yIiwic2VuZFBsYXliYWNrRW5kIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiaW5kZXhPZiIsIm5vdGlmeUV2ZW50IiwiZXZlbnROYW1lIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiYXJnNCIsImFkQnJlYWtEYXRhIiwiX3RoaXM5IiwiX3RoaXMxMCIsIl90aGlzMTEiLCJfdGhpczEyIiwiX3RoaXMkYWRQYWxTZXNzaW9uMyIsInNlbmRBZEltcHJlc3Npb24iLCJfdGhpczEzIiwiX3RoaXMxNCIsIl90aGlzMTUiLCJfdGhpczE2IiwiX3RoaXMxNyIsIl90aGlzMTgiLCJmaXJzdERhdGEiLCJfdGhpcyRoYW5kbGVyJGFkU2Vzc2kiLCJhZERhdGFMaXN0ZW5lciIsIl90aGlzJGhhbmRsZXIkYWRTZXNzaTIiLCJvbk91dE9mQmFuZEFkRGF0YSIsInJlcXVlc3RPdXRPZkJhbmRBZHMiLCJuYW1lIiwiYXV0b0JlZ2luIiwiYWRkaXRpb25hbFF1ZXJ5UGFyYW1zIiwiX3RoaXMxOSIsImFkR2F0ZXdheVVSTCIsInJlZGlyZWN0ZWRVUkwiLCJzZXRQYXJhbSIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwiYXN5bmNHZXQiLCJocmVmIiwiT09CQV9SRVFVRVNUX1RJTUVPVVQiLCJib2R5IiwiYWRwb2QiLCJzZW5kVHJhY2tlciIsInRyYWNraW5nRXZlbnROYW1lIiwiX2FkTm9uTGluZWFySW5mbyR0cmFjIiwiX2FkTm9uTGluZWFySW5mbyIsIl90aGlzMjAiLCJhbGxBZHMiLCJmbGF0TWFwIiwibm9uTGluZWFyVHJhY2tpbmdFdmVudHMiLCJfQWRUcmFja2luZ01hbmFnZXIiLCJBZE1hbmFnZXIiLCJBZFZpZXdTdGF0ZSIsIkFkRnJpZW5kbHlPYnN0cnVjdGlvblB1cnBvc2UiLCJBZFNlc3Npb24iLCJJbnRlcm5hbEFkTWFuYWdlciIsIk9NU0RLTWFuYWdlciIsIk9NU2Vzc2lvbkhhbmRsZXIiLCJhZE1vZHVsZSIsIk9NU0RLSGFuZGxlciIsImNyZWF0ZU9NQWRTZXNzaW9uIiwicGFydG5lck5hbWUiLCJwYXJ0bmVyVmVyc2lvbiIsImN1c3RvbVJlZmVyZW5jZURhdGEiLCJ2ZXJpZmljYXRpb25EYXRhIiwiY2FsbGJhY2siLCJyZWxlYXNlIiwiYXR0YWNoSW5zdGFuY2UiLCJhdHRhY2hIYW5kbGVyIiwib21zZGtIYW5kbGVyIiwiaXNFbmFibGVkIiwiX2luc3RhbmNlIiwiXyIsImludGVybmFsQWRNYW5hZ2VyIiwicGF1c2UiLCJvblJlZGlyZWN0aW9uRW5kIiwiX3RoaXMkb21BZFNlc3Npb24iLCJfdGhpcyRvbUFkU2Vzc2lvbjIiLCJyZXN1bWUiLCJfdGhpcyRvbUFkU2Vzc2lvbjMiLCJidWZmZXJTdGFydCIsImlzUGxheWluZyIsIl90aGlzJG9tQWRTZXNzaW9uNCIsImJ1ZmZlckZpbmlzaCIsIl90aGlzJG9tQWRTZXNzaW9uNSIsImZpbmlzaCIsIm9uU3RhcnRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkIiwic3RhcnRBZFNlc3Npb24iLCJfdGhpcyRhZFNlc3Npb24iLCJfdGhpcyRhZFNlc3Npb24yIiwiX3RoaXMkYWRTZXNzaW9uMyIsImFkVmlldyIsInNldEFkVmlldyIsImFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzIiwiaXRlbSIsInJlZ2lzdGVyQWRGcmllbmRseU9ic3RydWN0aW9uVmlldyIsInZpZXciLCJwdXJwb3NlIiwicmVhc29uIiwiYWRWaWV3U3RhdGUiLCJzZXRBZFZpZXdTdGF0ZSIsImxvYWRlZCIsImdldFZvbHVtZSIsIl90aGlzJGFkU2Vzc2lvbjQiLCJfdGhpcyRhZFNlc3Npb241IiwiX3RoaXMkb21BZFNlc3Npb242IiwiYWRWZXJpZmljYXRpb25EYXRhIiwidmVyaWZpY2F0aW9uIiwicmVzb3VyY2UiLCJhcGlmcmFtZXdvcmsiLCJ2ZXJpZmljYXRpb25WZW5kb3IiLCJ2ZXJpZmljYXRpb25VUkwiLCJvbVBhcnRuZXJOYW1lIiwib21QYXJ0bmVyVmVyc2lvbiIsImFkQ3VzdG9tUmVmZXJlbmNlIiwiX3RoaXMkb21BZFNlc3Npb243IiwiX3RoaXMkb21BZFNlc3Npb244Iiwib25Wb2x1bWVDaGFuZ2VkIiwidm9sdW1lIiwiX3RoaXMkb21BZFNlc3Npb245Iiwidm9sdW1lQ2hhbmdlIiwib25QbGF5ZXJFcnJvciIsImJyb2FkcGVha1N0YXR1c0NvZGUiLCJwbGF5ZXJFcnJvckNvZGUiLCJfdGhpcyRvbUFkU2Vzc2lvbjEwIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9