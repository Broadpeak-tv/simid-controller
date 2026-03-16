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

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = (__webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
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

        // Impression events for non-linear only ads must be triggered manually using sendTracker()
        if (this.ad.adType === _AdManager__WEBPACK_IMPORTED_MODULE_31__.AdType.AD_NON_LINEAR && this.type === 'impression') {
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
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../service/JobManager */ "./src_core/service/JobManager.js");
/* harmony import */ var _request_RequestManager__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../request/RequestManager */ "./src_core/request/RequestManager.js");
/* harmony import */ var _session_streaming_StreamingSessionOptions__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../session/streaming/StreamingSessionOptions */ "./src_core/session/streaming/StreamingSessionOptions.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_URL__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../utils/URL */ "./src_core/utils/URL.js");
/* harmony import */ var _AdTracker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./AdTracker */ "./src_core/ad/tracking/AdTracker.js");
/* harmony import */ var _AdManager__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./../AdManager */ "./src_core/ad/AdManager.js");
var _AdTrackingManager;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'BkYou session initialized', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Updating ad tracking file...', this.handler.id);

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
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_37__["default"].getInstance().adTracking(this.handler, parameters, adTrackingURL, true).then(function (result) {
          // Cancel request if session has been stopped
          if (_this.handler.stopped === true) {
            return;
          }

          // Cancel active keepalive job
          if (_this.updateSessionJob !== undefined) {
            _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().cancel(_this.updateSessionJob);
          }
          if (result.httpStatus >= 200 && result.httpStatus < 300) {
            // Parse the BkYou JSON file
            var data;
            try {
              data = JSON.parse(result.content);
            } catch (e) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking updated file unreadable', _this.handler.id);

              // Restart keepalive job
              if (_this.firstFileReceived === true) {
                _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
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
              _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
                _this.updateSessionJob = undefined;
                _this.updateBkYouSession();
              });
            } else {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Stopping ad tracking file update (VOD stream)...', _this.handler.id);
            }
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Stopping ad tracking file update (status code ' + result.httpStatus + ')', _this.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad overlap detected, position updated from ' + nextAd.position + ' to ' + currentAdEnd + ' (id: ' + nextAd.adId + ')', _this2.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad break duration updated from ' + adBreak.duration + ' to ' + expectedDuration + ' (id: ' + adBreak.id + ')', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Setting refresh delay to ' + this.sessionUpdateInterval + 'ms', this.handler.id);
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Setting refresh delay to ' + AdTrackingManager.SESSION_UPDATE_INTERVAL + 'ms (default value)', this.handler.id);
        }
      }
      var adDataTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_41__.AdDataTracker(this, sessionToken, timeReference);
      var adPods = data['adpods'];
      if (Array.isArray(adPods)) {
        adPods.forEach(function (adPod) {
          var adBreakId = adPod['id'] || '';
          var startTime = adPod['starttime_ms'] + timeReference;
          var duration = adPod['duration_ms'] || 0;
          var ads = adPod['ads'];
          var adBreakTrackingEvents = adPod['adbreaktrackingevents'];

          // Create ad break
          var adBreakTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_41__.AdBreakTracker(adDataTracker, adBreakId, startTime, duration, _this3.isLive(), ooba);
          if (Array.isArray(adBreakTrackingEvents)) {
            adBreakTrackingEvents.forEach(function (adBreakTrackingEvent) {
              var callbackurl = adBreakTrackingEvent['callbackurl'];
              if (callbackurl !== undefined) {
                var type = adBreakTrackingEvent['type'];

                // no need to get time for ad break event tracker because start/end times are already handled in AdBreakTracker
                var adBreakEventTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_41__.AdBreakEventTracker(adBreakTracker, type, callbackurl);
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
                var adType = _AdManager__WEBPACK_IMPORTED_MODULE_42__.AdType.getAdType(ad['adtype']);
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
                var adTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_41__.AdTracker(adType, adBreakTracker, sequenceNumber, startTime, duration, skippable, skippableTime, creativeId, adId, clickable, verifications, nonLinearInfo, errorURL);
                adBreakTracker.ads.push(adTracker);

                // Parse callback events
                if (Array.isArray(events)) {
                  events.forEach(function (event) {
                    var url = event['callbackurl'];
                    if (url !== undefined) {
                      var type = event['type'];
                      var offset = event['offset_ms'];
                      var time = event['time_ms'] + timeReference || startTime;
                      var adEventTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_41__.AdEventTracker(adTracker, type, url, offset, time);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Calling beginOutOfBandAdBreak with id: ' + adBreakId, this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.w(TAG, 'Out-of-band ad break with id ' + adBreakId + ' not found', this.handler.id);
      }
    }
  }, {
    key: "endOutOfBandAdBreak",
    value: function endOutOfBandAdBreak(adBreakId) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Calling endOutOfBandAdBreak() with id: ' + adBreakId, this.handler.id);
      var index = this.adData.outOfBandAdBreaks.findIndex(function (adBreak) {
        return adBreak.id === adBreakId;
      });
      if (index !== -1) {
        var adBreakTracker = this.adData.outOfBandAdBreaks[index];
        adBreakTracker.processEnd();
        adBreakTracker.ads.forEach(function (adTracker) {
          return adTracker.processEnd();
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Deleting out-of-band ad break with id: ' + adBreakId, this.handler.id);
        this.adData.outOfBandAdBreaks.splice(index, 1);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.w(TAG, 'Out-of-band ad break with id ' + adBreakId + ' not found', this.handler.id);
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
        this.updatePositionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().asyncDelay(delay, function () {
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking paused (player event)', this.handler.id);
        _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().cancel(this.updatePositionJob);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, adData.adBreaks.length + ' ad break(s) parsed', this.handler.id);
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
            var adTrackersPeriod = _this5.handler.options.get(_session_streaming_StreamingSessionOptions__WEBPACK_IMPORTED_MODULE_38__.StreamingSessionOptions.AD_TRACKERS_STORE_DURATION);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, this.adData.adBreaks.length + ' ad break(s) in total, ' + adData.adBreaks.length + ' ad break(s) parsed, ' + newAdCount + ' new ad(s), ' + deletedAdCount + ' deleted ad(s)', this.handler.id);
      }

      // Notify event array updated
      this.notifyAdsUpdated(this.adData);

      // Start if necessary
      if (this.started && !this.paused && !this.buffering) {
        var position = this.playerAdapter.getPosition();

        // If update position process stopped, reset last position to the current position
        if (this.updatePositionJob === undefined && this.adData.hasRemainingAdBreaks(position) > 0) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking resumed', this.handler.id);

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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Processing all events since first image...', this.handler.id);
        if (this.positionHistory[this.positionHistory.length - 1].end === undefined) {
          // Patch end if doesn't exist
          this.positionHistory[this.positionHistory.length - 1].end = currentPosition;
        }
        this.positionHistory.forEach(function (playingPeriod) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Between ' + playingPeriod.start + ' and ' + playingPeriod.end, _this6.handler.id);
          _this6.lastPosition = playingPeriod.start;
          for (var i = playingPeriod.start; i <= playingPeriod.end + AdTrackingManager.POSITION_UPDATE_INTERVAL; i += AdTrackingManager.POSITION_UPDATE_INTERVAL) {
            var position = Math.min(i, playingPeriod.end);
            _this6.onPositionUpdated(position);
            _this6.lastPosition = position;
          }
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Tracking catch-up finished', this.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Entering ad ' + adTracker.adId + '...', this.handler.id);
            var skipped = positionStart - adTracker.position >= AdTrackingManager.POSITION_SEEK_ERROR_DELTA;

            // If entering an ad, handle position start precision error
            if (!skipped) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Update position start from ' + positionStart + ' to ' + adTracker.position, this.handler.id);
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
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad skipped (previous position was ' + AdTrackingManager.POSITION_SEEK_ERROR_DELTA + 'ms after ad start)', this.handler.id);
              this.notifyAdSkipped(this.adData.sessionToken, adTracker);
            }
          } else if (this.currentAdTracker === adTracker) {
            // In the same ad
            adTracker.updateProgression(positionStart, positionEnd);
          } else if (this.currentAdTracker !== adTracker) {
            // Changing ad
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Changing from ad ' + this.currentAdTracker.adId + ' to ' + adTracker.adId + '...', this.handler.id);

            // Update current ad progression to 1.0
            if (adTracker.adBreak.id === this.currentAdTracker.adBreak.id) {
              this.currentAdTracker.updateProgression(positionStart, this.currentAdTracker.position + this.currentAdTracker.duration);
            }
            // If exiting ad before the end, count it as skipped
            if (this.currentAdTracker.progression < 1.0) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad skipped (progression not complete)', this.handler.id);
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
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad skipped (new position is ' + AdTrackingManager.POSITION_SEEK_ERROR_DELTA + 'ms after ad start)', this.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Exiting ad ' + this.currentAdTracker.adId + '...', this.handler.id);

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
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad skipped (progression not complete)', this.handler.id);
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
        if (((_this$adData3 = this.adData) === null || _this$adData3 === void 0 ? void 0 : _this$adData3.outOfBandAdBreaks) !== undefined) {
          // Out-of-band ad breaks at the current position (can have multiple ones)
          // Only if duration is positive, the others don't depend on player position ("pause" for example)
          var isActiveAtPosition = function isActiveAtPosition(ad) {
            return ad.proceeded[1] === undefined && ad.duration > 0 && ad.position <= positionEnd && positionEnd < ad.position + ad.duration;
          };
          var outOfBandAdBreakTrackers = this.adData.outOfBandAdBreaks.filter(isActiveAtPosition);
          var outOfBandAdTrackers = outOfBandAdBreakTrackers.reduce(function (array, outOfBandAdBreakTracker) {
            return [].concat(_toConsumableArray(array), _toConsumableArray(outOfBandAdBreakTracker.ads.filter(isActiveAtPosition)));
          }, []);

          // Since there can be multiple out-of-band ad breaks / ads at once, an array is used to store current ones
          // Start ad breaks if necessary
          outOfBandAdBreakTrackers.forEach(function (outOfBandAdBreakTracker) {
            // If has not began yet
            if (_this6.currentOutOfBandAdBreakTrackers.find(function (currentOutOfBandAdBreak) {
              return currentOutOfBandAdBreak.id === outOfBandAdBreakTracker.id;
            }) === undefined) {
              // Entering out-of-band ad break
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Entering out-of-band ad break ' + outOfBandAdBreakTracker.id + '...', _this6.handler.id);
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
        }

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
                _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.getInstance().printDebugLogs(TAG, 'Ad incoming in ' + adIncomingTime + 'ms', this.handler.id);
              }
            }
            if (adTracker !== undefined) {
              var adRemainingTime = adTracker.position + adTracker.duration - currentPosition;
              if (adRemainingTime > 0 && adRemainingTime < AdTrackingManager.NEAR_AD_DELTA) {
                nextUpdateTime = adRemainingTime;
                nextPosition = adTracker.position + adTracker.duration;
                _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.getInstance().printDebugLogs(TAG, 'Ad ending in ' + adRemainingTime + 'ms', this.handler.id);
              }
            }
            nextUpdateTime = Math.round(nextUpdateTime);
            this.start(nextUpdateTime, nextPosition);
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking paused (playback paused, onPositionUpdated)', this.handler.id);
          }
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, onPositionUpdated)', this.handler.id);
        }
      } else {
        var _this$adData6;
        if ((_this$adData6 = this.adData) !== null && _this$adData6 !== void 0 && _this$adData6.hasRemainingAdBreaks(positionEnd)) {
          if (!this.paused && !this.buffering) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Processing trackers from ' + positionStart + 'ms to ' + positionEnd + 'ms, resuming tracking...', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, checkStart)', this.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad break end detected', this.handler.id);
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad break not yet ended', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Requesting click tracker ' + tracker.clickurl, _this7.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_37__["default"].getInstance().adEvent(_this7.handler, tracker.clickurl);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad tracking enabled (live:' + this.isLive() + ')', this.handler.id);

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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.e(TAG, 'The player position does not return a position as a timestamp in millis. The ad tracking might not work.', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Reverting position because of bad position when resuming...', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Position updated during buffering, period switch ?', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Reverting position because of seek...', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ignoring seek...', this.handler.id);
          this.lastPosition = start;
          this.onPositionUpdated(start);
          return;
        }
        // Else reset trackers
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + end, this.handler.id);
        (_this$adData10 = this.adData) === null || _this$adData10 === void 0 || _this$adData10.resetProgression(end);
      } else {
        // Forward seek
        // Catch-up events from seek start (or buffering start) to seek end
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Small seek detected, proceeding events from ' + lastPosition + ' to ' + end, this.handler.id);
        for (var i = lastPosition; i <= end; i += AdTrackingManager.POSITION_UPDATE_INTERVAL) {
          var position = Math.min(i + AdTrackingManager.POSITION_UPDATE_INTERVAL, end);
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Between ' + i + ' and ' + position, this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Updating seek start position from ' + start + ' to ' + this.lastPosition, this.handler.id);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + end, this.handler.id);
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
        _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().cancel(this.updateSessionJob);
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
          _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().cancel(this.updateSessionJob);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'On ad data (firstData: ' + firstData + ', dataUpdated: ' + dataUpdated + ')', this.handler.id);
      if (firstData === true || dataUpdated === true) {
        var _this$handler$adSessi;
        this.podsSentNumber = this.adList.length;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'On ad data (length: ' + this.podsSentNumber + ')', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.i(TAG, 'Out-of-band ad breaks updated, notifying onOutOfBandAdData', this.handler.id);
        this.handler.adSession.adDataListener.onOutOfBandAdData(outOfBandAdList);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.i(TAG, 'Out-of-band ad breaks updated, add onOutOfBandAdData listener to access current list', this.handler.id);
      }
    }
  }, {
    key: "requestOutOfBandAds",
    value: function requestOutOfBandAds(name, duration, autoBegin, additionalQueryParams) {
      var _this19 = this;
      var adGatewayURL = _utils_URL__WEBPACK_IMPORTED_MODULE_40__["default"].clone(this.handler.sessionReport.redirectedURL);
      adGatewayURL.setParam('bk-ml', '1.0');
      adGatewayURL.setParam('bk-ooba', name);
      if (duration !== undefined) {
        adGatewayURL.setParam('bk-ooba-dur', duration);
      }
      if (additionalQueryParams !== undefined) {
        for (var _i = 0, _Object$entries = Object.entries(additionalQueryParams); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          adGatewayURL.setParam(key, value);
        }
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.i(TAG, 'Sending request to the ad gateway: ' + adGatewayURL, this.handler.id);
      var headers = _request_RequestManager__WEBPACK_IMPORTED_MODULE_37__["default"].getInstance().getHeaders();

      // Request ad gateway with 5s timeout
      _service_JobManager__WEBPACK_IMPORTED_MODULE_36__["default"].getInstance().asyncGet(adGatewayURL.href, headers, AdTrackingManager.OOBA_REQUEST_TIMEOUT, function (result) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad gateway responded ' + result.statusCode, _this19.handler.id);
        // Parse ad data
        if (result.statusCode >= 200 && result.statusCode < 300) {
          var data;
          try {
            data = JSON.parse(result.body);
          } catch (e) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad gateway file unreadable (parsing)', _this19.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'requestOutOfBandAds autoBegin set to true, calling beginOutOfBandAdBreak now', _this19.handler.id);
            data['adpods'].forEach(function (adpod) {
              _this19.beginOutOfBandAdBreak(adpod['id']);
            });
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'requestOutOfBandAds autoBegin set to false, call beginOutOfBandAdBreak to begin ad breaks', _this19.handler.id);
          }
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Ad gateway response unreadable (status code)', _this19.handler.id);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.i(TAG, 'Calling sendTracker(' + trackingEventName + ', ' + adId + (creativeId ? ', ' + creativeId : '') + ')', this.id);

      // Cannot rely on currentOutOfBandAdTrackers because it doesn't contain ads with duration 0
      // So we look in all ads and it's up to the app integrator to use the correct adId
      var allAds = [].concat(_toConsumableArray(this.adData.adBreaks), _toConsumableArray(this.adData.outOfBandAdBreaks)).flatMap(function (adBreak) {
        return adBreak.ads;
      });
      var adTracker = allAds.find(function (ad) {
        return ad.adId === adId;
      });
      if (adTracker === undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.e(TAG, 'No match for adId: ' + adId, this.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.e(TAG, 'No match for creativeId: ' + creativeId, this.id);
          }
        }
      }
      var nonLinearTrackingEvents = (_adNonLinearInfo$trac = (_adNonLinearInfo = adNonLinearInfo) === null || _adNonLinearInfo === void 0 ? void 0 : _adNonLinearInfo.trackingEvents) !== null && _adNonLinearInfo$trac !== void 0 ? _adNonLinearInfo$trac : [];

      // Now that we have all events, we can filter by name
      var events = [].concat(_toConsumableArray(adTracker.events), _toConsumableArray(nonLinearTrackingEvents)).filter(function (event) {
        return event.type === trackingEventName;
      });
      if (events.length === 0) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.e(TAG, 'No match for trackingEventName: ' + trackingEventName, this.id);
      }
      events.forEach(function (event) {
        var url = event['url'] || event['callbackurl'];
        if (url === undefined) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'No url found for event ' + event.type, _this20.handler.id);
          return;
        }
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_39__.LoggerManager.d(TAG, 'Requesting ' + url, _this20.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_37__["default"].getInstance().adEvent(_this20.handler, url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9CQUFvQixHQUFHcWxCLGVBQWUsRUFBRSxJQUFJLENBQUNoaEIsT0FBTyxDQUFDdUIsRUFBRSxDQUFDO01BRTdFLENBQUEwZixtQkFBQSxPQUFJLENBQUN2VyxXQUFXLGNBQUF1VyxtQkFBQSxlQUFoQkEsbUJBQUEsQ0FBa0JDLEtBQUssQ0FBQ0gsbUJBQW1CLEVBQUVDLGVBQWUsQ0FBQztJQUNqRTtFQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmxhdHRlbi1pbnRvLWFycmF5LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC1pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLnJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmVudHJpZXMuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC9tZXRyaWNzL0FkTWV0cmljcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL21ldHJpY3MvQWRNZXRyaWNzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL3RyYWNraW5nL0FkVHJhY2tlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2FkL3RyYWNraW5nL0FkVHJhY2tpbmdNYW5hZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvaW5kZXguYWQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9wbHVnaW5zL29tc2RrL09NU0RLTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3BsdWdpbnMvb21zZGsvT01TZXNzaW9uSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFkU21hcnRMaWJNb2R1bGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYWRTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhZFNtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xufSkoKGZ1bmN0aW9uKCkgeyByZXR1cm4gKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiBnbG9iYWwpfSkoKSwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcblxuLy8gYEZsYXR0ZW5JbnRvQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1mbGF0TWFwLyNzZWMtRmxhdHRlbkludG9BcnJheVxudmFyIGZsYXR0ZW5JbnRvQXJyYXkgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcmlnaW5hbCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCwgbWFwcGVyLCB0aGlzQXJnKSB7XG4gIHZhciB0YXJnZXRJbmRleCA9IHN0YXJ0O1xuICB2YXIgc291cmNlSW5kZXggPSAwO1xuICB2YXIgbWFwRm4gPSBtYXBwZXIgPyBiaW5kKG1hcHBlciwgdGhpc0FyZykgOiBmYWxzZTtcbiAgdmFyIGVsZW1lbnQsIGVsZW1lbnRMZW47XG5cbiAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgaWYgKHNvdXJjZUluZGV4IGluIHNvdXJjZSkge1xuICAgICAgZWxlbWVudCA9IG1hcEZuID8gbWFwRm4oc291cmNlW3NvdXJjZUluZGV4XSwgc291cmNlSW5kZXgsIG9yaWdpbmFsKSA6IHNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICAgIGlmIChkZXB0aCA+IDAgJiYgaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50TGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoZWxlbWVudCk7XG4gICAgICAgIHRhcmdldEluZGV4ID0gZmxhdHRlbkludG9BcnJheSh0YXJnZXQsIG9yaWdpbmFsLCBlbGVtZW50LCBlbGVtZW50TGVuLCB0YXJnZXRJbmRleCwgZGVwdGggLSAxKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIodGFyZ2V0SW5kZXggKyAxKTtcbiAgICAgICAgdGFyZ2V0W3RhcmdldEluZGV4XSA9IGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldEluZGV4Kys7XG4gICAgfVxuICAgIHNvdXJjZUluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHRhcmdldEluZGV4O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuSW50b0FycmF5O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBvYmplY3RHZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKS5mO1xuXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSB1bmN1cnJ5VGhpcygkcHJvcGVydHlJc0VudW1lcmFibGUpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuLy8gaW4gc29tZSBJRSB2ZXJzaW9ucywgYHByb3BlcnR5SXNFbnVtZXJhYmxlYCByZXR1cm5zIGluY29ycmVjdCByZXN1bHQgb24gaW50ZWdlciBrZXlzXG4vLyBvZiBgbnVsbGAgcHJvdG90eXBlIG9iamVjdHNcbnZhciBJRV9CVUcgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbiAgdmFyIE8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBPWzJdID0gMjtcbiAgcmV0dXJuICFwcm9wZXJ0eUlzRW51bWVyYWJsZShPLCAyKTtcbn0pO1xuXG4vLyBgT2JqZWN0LnsgZW50cmllcywgdmFsdWVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVE9fRU5UUklFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhPKTtcbiAgICB2YXIgSUVfV09SS0FST1VORCA9IElFX0JVRyAmJiBvYmplY3RHZXRQcm90b3R5cGVPZihPKSA9PT0gbnVsbDtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICBrZXkgPSBrZXlzW2krK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IChJRV9XT1JLQVJPVU5EID8ga2V5IGluIE8gOiBwcm9wZXJ0eUlzRW51bWVyYWJsZShPLCBrZXkpKSkge1xuICAgICAgICBwdXNoKHJlc3VsdCwgVE9fRU5UUklFUyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBPYmplY3QuZW50cmllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiAgZW50cmllczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuICB2YWx1ZXM6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZmluZGluZGV4IC0tIHRlc3RpbmdcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kaW5kZXhcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmRJbmRleCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmxhdHRlbkludG9BcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mbGF0dGVuLWludG8tYXJyYXknKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmxhdE1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mbGF0bWFwXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGZsYXRNYXA6IGZ1bmN0aW9uIGZsYXRNYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzb3VyY2VMZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgQTtcbiAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBBLmxlbmd0aCA9IGZsYXR0ZW5JbnRvQXJyYXkoQSwgTywgTywgc291cmNlTGVuLCAwLCAxLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHJlZHVjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1yZWR1Y2UnKS5sZWZ0O1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIENIUk9NRV9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLW5vZGUnKTtcblxuLy8gQ2hyb21lIDgwLTgyIGhhcyBhIGNyaXRpY2FsIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTA0OTk4MlxudmFyIENIUk9NRV9CVUcgPSAhSVNfTk9ERSAmJiBDSFJPTUVfVkVSU0lPTiA+IDc5ICYmIENIUk9NRV9WRVJTSU9OIDwgODM7XG52YXIgRk9SQ0VEID0gQ0hST01FX0JVRyB8fCAhYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0TWFwJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLnJlZHVjZVxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShyZWR1Y2VyIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHJlZHVjZXIpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgbm9Jbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA8IDI7XG4gICAgdmFyIGFjY3VtdWxhdG9yID0gbm9Jbml0aWFsID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICBpdGVyYXRlKHJlY29yZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAobm9Jbml0aWFsKSB7XG4gICAgICAgIG5vSW5pdGlhbCA9IGZhbHNlO1xuICAgICAgICBhY2N1bXVsYXRvciA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjdW11bGF0b3IgPSByZWR1Y2VyKGFjY3VtdWxhdG9yLCB2YWx1ZSwgY291bnRlcik7XG4gICAgICB9XG4gICAgICBjb3VudGVyKys7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUgfSk7XG4gICAgaWYgKG5vSW5pdGlhbCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBpdGVyYXRvciB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykuZW50cmllcztcblxuLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhPKSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLnJlZHVjZScpO1xuIiwiaW1wb3J0IERhdGVVdGlscyBmcm9tICcuLi8uLi91dGlscy9EYXRlVXRpbHMnO1xuXG5leHBvcnQgY29uc3QgVEFHID0gJ0Jwa0FkTWV0cmljcyc7XG5cbmV4cG9ydCBjbGFzcyBBZE1ldHJpY3Mge1xuICAgIGFkU2tpcHBhYmxlOyAvLyBwZXIgYWRcblxuICAgIGFkU2tpcHBlZDsgLy8gcGVyIGltcHJlc3Npb25cblxuICAgIGFkUHJvZ3Jlc3M7IC8vIHBlciBpbXByZXNzaW9uXG5cbiAgICBhZER1cmF0aW9uOyAvLyBwZXIgaW1wcmVzc2lvblxuXG4gICAgc3RhbGxzTnVtYmVyOyAvLyBwZXIgaW1wcmVzc2lvblxuXG4gICAgc3RhbGxzRHVyYXRpb247IC8vIHBlciBpbXByZXNzaW9uXG5cbiAgICBsYXllclN3aXRjaGVzTnVtYmVyOyAvLyBwZXIgaW1wcmVzc2lvblxuXG4gICAgYXZlcmFnZUJpdHJhdGU7IC8vIHBlciBpbXByZXNzaW9uXG5cbiAgICBjcmVhdGl2ZUlkOyAvLyBwZXIgYWRcblxuICAgIGFkSWQ7IC8vIHBlciBhZFxuXG4gICAgYWRJbmRleDsgLy8gcGVyIGFkXG5cbiAgICBhZENvdW50OyAvLyBwZXIgYWQsIHNldCB2YWx1ZSBvbmNlIGFkIGJyZWFrIGZpbmlzaGVkXG5cbiAgICBhZEZvcm1hdDsgLy8gcGVyIGFkXG5cbiAgICBpbXByZXNzaW9uRGF0ZTsgLy8gcGVyIGltcHJlc3Npb25cblxuICAgIGNvbnN0cnVjdG9yKG1ldHJpY3MgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG1ldHJpY3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWRQcm9ncmVzcyA9IC0xO1xuICAgICAgICAgICAgdGhpcy5hZER1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuYXZlcmFnZUJpdHJhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGl2ZUlkID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFkSWQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5hZENvdW50ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmFkRm9ybWF0ID0gJyc7XG4gICAgICAgICAgICB0aGlzLmltcHJlc3Npb25EYXRlID0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkU2tpcHBhYmxlID0gbWV0cmljcy5hZFNraXBwYWJsZTtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gbWV0cmljcy5hZFNraXBwZWQ7XG4gICAgICAgICAgICB0aGlzLmFkUHJvZ3Jlc3MgPSBtZXRyaWNzLmFkUHJvZ3Jlc3M7XG4gICAgICAgICAgICB0aGlzLmFkRHVyYXRpb24gPSBtZXRyaWNzLmFkRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnN0YWxsc051bWJlciA9IG1ldHJpY3Muc3RhbGxzTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5zdGFsbHNEdXJhdGlvbiA9IG1ldHJpY3Muc3RhbGxzRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmxheWVyU3dpdGNoZXNOdW1iZXIgPSBtZXRyaWNzLmxheWVyU3dpdGNoZXNOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLmF2ZXJhZ2VCaXRyYXRlID0gbWV0cmljcy5hdmVyYWdlQml0cmF0ZTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpdmVJZCA9IG1ldHJpY3MuY3JlYXRpdmVJZDtcbiAgICAgICAgICAgIHRoaXMuYWRJZCA9IG1ldHJpY3MuYWRJZDtcbiAgICAgICAgICAgIHRoaXMuYWRJbmRleCA9IG1ldHJpY3MuYWRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuYWRDb3VudCA9IG1ldHJpY3MuYWRDb3VudDtcbiAgICAgICAgICAgIHRoaXMuYWRGb3JtYXQgPSBtZXRyaWNzLmFkRm9ybWF0O1xuICAgICAgICAgICAgdGhpcy5pbXByZXNzaW9uRGF0ZSA9IG1ldHJpY3MuaW1wcmVzc2lvbkRhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXByZWNhdGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdFxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR8QWRNZXRyaWNzfVxuICAgICAqL1xuICAgIHN0YXRpYyBtZXJnZShsaXN0KSB7XG4gICAgICAgIGlmIChsaXN0ICE9PSB1bmRlZmluZWQgJiYgbGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWRNZXRyaWNzID0gbmV3IEFkTWV0cmljcygpO1xuICAgICAgICAgICAgY29uc3QgbGFzdE1ldHJpY3MgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYWRTa2lwcGFibGUgPSBsYXN0TWV0cmljcy5hZFNraXBwYWJsZTtcbiAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYWRTa2lwcGVkID0gbGFzdE1ldHJpY3MuYWRTa2lwcGVkO1xuICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZFByb2dyZXNzID0gbGFzdE1ldHJpY3MuYWRQcm9ncmVzcztcbiAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuY3JlYXRpdmVJZCA9IGxhc3RNZXRyaWNzLmNyZWF0aXZlSWQ7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkSWQgPSBsYXN0TWV0cmljcy5hZElkO1xuXG4gICAgICAgICAgICBsZXQgbGF5ZXJQZXJEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICBsZXQgdG90YWxEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsaXN0Lmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkTWV0cmljcyA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZER1cmF0aW9uICs9IGFkTWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3Muc3RhbGxzTnVtYmVyICs9IGFkTWV0cmljcy5zdGFsbHNOdW1iZXI7XG4gICAgICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5zdGFsbHNEdXJhdGlvbiArPSBhZE1ldHJpY3Muc3RhbGxzRHVyYXRpb247XG4gICAgICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyICs9IGFkTWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyO1xuXG4gICAgICAgICAgICAgICAgbGF5ZXJQZXJEdXJhdGlvbiArPSBhZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgKiBhZE1ldHJpY3MuYWREdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB0b3RhbER1cmF0aW9uICs9IGFkTWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG90YWxEdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgPSBNYXRoLnJvdW5kKGxheWVyUGVyRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZE1ldHJpY3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJ1xcbnsgYWRTa2lwcGFibGU9JyArIHRoaXMuYWRTa2lwcGFibGUgK1xuICAgICAgICAgICAgJ1xcbiAgYWRTa2lwcGVkPScgKyB0aGlzLmFkU2tpcHBlZCArXG4gICAgICAgICAgICAnXFxuICBhZFByb2dyZXNzPScgKyB0aGlzLmFkUHJvZ3Jlc3MgK1xuICAgICAgICAgICAgJ1xcbiAgYWREdXJhdGlvbj0nICsgdGhpcy5hZER1cmF0aW9uICtcbiAgICAgICAgICAgICdcXG4gIHN0YWxsc051bWJlcj0nICsgdGhpcy5zdGFsbHNOdW1iZXIgK1xuICAgICAgICAgICAgJ1xcbiAgc3RhbGxzRHVyYXRpb249JyArIHRoaXMuc3RhbGxzRHVyYXRpb24gK1xuICAgICAgICAgICAgJ1xcbiAgbGF5ZXJTd2l0Y2hlc051bWJlcj0nICsgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyICtcbiAgICAgICAgICAgICdcXG4gIGF2ZXJhZ2VCaXRyYXRlPScgKyB0aGlzLmF2ZXJhZ2VCaXRyYXRlICtcbiAgICAgICAgICAgIFwiXFxuICBjcmVhdGl2ZUlkPSdcIiArIHRoaXMuY3JlYXRpdmVJZCArICdcXCcnICtcbiAgICAgICAgICAgIFwiXFxuICBhZElkPSdcIiArIHRoaXMuYWRJZCArICdcXCcnICtcbiAgICAgICAgICAgICdcXG4gIGFkSW5kZXg9JyArIHRoaXMuYWRJbmRleCArXG4gICAgICAgICAgICAnXFxuICBhZENvdW50PScgKyB0aGlzLmFkQ291bnQgK1xuICAgICAgICAgICAgXCJcXG4gIGFkRm9ybWF0PSdcIiArIHRoaXMuYWRGb3JtYXQgKyAnXFwnJyArXG4gICAgICAgICAgICAnXFxuICBpbXByZXNzaW9uRGF0ZT0nICsgdGhpcy5pbXByZXNzaW9uRGF0ZSArICcgKCcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZSh0aGlzLmltcHJlc3Npb25EYXRlKSArICcpJyArXG4gICAgICAgICAgICAnXFxufSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRNZXRyaWNzQnVpbGRlciB7XG4gICAgYWRNZXRyaWNzO1xuXG4gICAgdGltZVNwZW50UGVyTGF5ZXI7XG5cbiAgICBxdWFydGlsZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihhZE1ldHJpY3MgPSB1bmRlZmluZWQsIHRpbWVTcGVudFBlckxheWVyID0gdW5kZWZpbmVkLCBxdWFydGlsZXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFkTWV0cmljcyA9PT0gdW5kZWZpbmVkICYmIHRpbWVTcGVudFBlckxheWVyID09PSB1bmRlZmluZWQgJiYgcXVhcnRpbGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXIgPSB7fTtcbiAgICAgICAgICAgIHRoaXMucXVhcnRpbGVzID0ge307XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljcyA9IGFkTWV0cmljcztcbiAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXIgPSB0aW1lU3BlbnRQZXJMYXllcjtcbiAgICAgICAgICAgIHRoaXMucXVhcnRpbGVzID0gcXVhcnRpbGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGJ1aWxkIGFzIGJlZW4gaW5pdGlhbGl6ZWQgKGFkIGlkIHNldClcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0luaXRpYWxpemVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZE1ldHJpY3MuYWRJZCAhPT0gJyc7XG4gICAgfVxuXG4gICAgaW1wb3J0KGFkTWV0cmljcykge1xuICAgICAgICBpZiAoYWRNZXRyaWNzICE9PSB1bmRlZmluZWQgJiYgYWRNZXRyaWNzLmxlbmd0aCA9PT0gMSAmJiBhZE1ldHJpY3NbMF0uaW1wcmVzc2lvbkRhdGUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSBhZE1ldHJpY3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZCBpcyBiZWluZyBkaXNwbGF5ZWQsIHNldCBpbXByZXNzaW9uIGRhdGVcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuaW1wcmVzc2lvbkRhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFkU2tpcHBhYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkU2tpcHBhYmxlID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWRTa2lwcGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkU2tpcHBlZCA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFByb2dyZXNzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucXVhcnRpbGVzW3ZhbHVlXSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkUHJvZ3Jlc3MgPSBNYXRoLm1heCh0aGlzLmFkTWV0cmljcy5hZFByb2dyZXNzLCB2YWx1ZSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1BST0dSRVNTJywgdGhpcy5hZE1ldHJpY3MuYWRQcm9ncmVzcywgdGhpcy5xdWFydGlsZXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXQoZm9ybWF0LCBpbmRleCwgY291bnQpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRGb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRDb3VudCA9IGNvdW50O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldENyZWF0aXZlSWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuY3JlYXRpdmVJZCA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFkSWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRJZCA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFRpbWVTcGVudFBlckxheWVyKGJpdHJhdGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGJpdHJhdGUgPSBNYXRoLnJvdW5kKGJpdHJhdGUpO1xuXG4gICAgICAgIGlmIChiaXRyYXRlID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWVTcGVudE9uTGF5ZXIgPSB0aGlzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdO1xuICAgICAgICAgICAgaWYgKHRpbWVTcGVudE9uTGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV0gKz0gZHVyYXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV0gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZExheWVyU3dpdGNoKCkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkU3RhbGwoZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3Muc3RhbGxzTnVtYmVyKys7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLnN0YWxsc0R1cmF0aW9uICs9IGR1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcyA9IG5ldyBBZE1ldHJpY3MoKTtcbiAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllciA9IHt9O1xuICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHt9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFkTWV0cmljc0J1aWxkZXIobmV3IEFkTWV0cmljcyh0aGlzLmFkTWV0cmljcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZVNwZW50UGVyTGF5ZXIpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnF1YXJ0aWxlcykpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBsZXQgbGF5ZXJQZXJEdXJhdGlvbiA9IDA7XG4gICAgICAgIGxldCB0b3RhbER1cmF0aW9uID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IGJpdHJhdGUgaW4gdGhpcy50aW1lU3BlbnRQZXJMYXllcikge1xuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdO1xuXG4gICAgICAgICAgICBsYXllclBlckR1cmF0aW9uICs9IGJpdHJhdGUgKiBkdXJhdGlvbjtcbiAgICAgICAgICAgIHRvdGFsRHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG90YWxEdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgPSBNYXRoLnJvdW5kKGxheWVyUGVyRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkRHVyYXRpb24gPSB0b3RhbER1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFkTWV0cmljcztcbiAgICB9XG59XG5cbiIsImltcG9ydCB7QWRNZXRyaWNzQnVpbGRlcn0gZnJvbSAnLi9BZE1ldHJpY3MnO1xuaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRGF0ZVV0aWxzJztcbmltcG9ydCBTbWFydExpYiBmcm9tICcuLi8uLi9TbWFydExpYic7XG5pbXBvcnQgQWRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrQWRNZXRyaWNzTWdyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRNZXRyaWNzTWFuYWdlciB7XG4gICAgaGFuZGxlcjtcblxuICAgIHRpbWVsaW5lO1xuXG4gICAgYnVpbGRlcjtcblxuICAgIGFkTWV0cmljcztcblxuICAgIGZpcnN0SW1hZ2VEYXRlO1xuICAgIGxhc3RMYXllckJpdHJhdGU7XG5cbiAgICBhZEJyZWFrUGxheWluZztcbiAgICBhZFBsYXlpbmc7XG4gICAgYWRTa2lwcGVkO1xuICAgIGFkTGFzdExheWVyU3dpdGNoRGF0ZTtcbiAgICBhZExhc3RCdWZmZXJpbmdTdGFydERhdGU7XG4gICAgYWRCcmVha1Bvc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQudGltZWxpbmU7XG5cbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEFkTWV0cmljc0J1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSB7fTtcbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyBSZXNldCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSB7fTtcblxuICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZURhdGUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RMYXllckJpdHJhdGUgPSAwO1xuXG4gICAgICAgIHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID0gLTE7XG5cbiAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdtaWRyb2xsJztcbiAgICB9XG5cbiAgICBvbkZpcnN0SW1hZ2UoYml0cmF0ZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5sYXN0TGF5ZXJCaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgICAgdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2VEYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBvbkxheWVyU3dpdGNoKGJpdHJhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcgJiYgdGhpcy5maXJzdEltYWdlRGF0ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmxhc3RMYXllckJpdHJhdGUsIERhdGUubm93KCkgLSB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RMYXllckJpdHJhdGUgIT09IGJpdHJhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkTGF5ZXJTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdExheWVyQml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHN0YWxsIHRpbWVyXG4gICAgICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YWxsRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZyAmJiB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc3RhbGxcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRTdGFsbChEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPSAtMTtcbiAgICB9XG5cbiAgICBvblJlYnVmZmVyaW5nRW5kKCkge1xuICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IC0xO1xuICAgIH1cblxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgc2Vla2VkIGZyb20gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKHN0YXJ0KSArICcgdG8gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKGVuZCksIHRoaXMuaGFuZGxlcj8uaWQpO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kIC0gc3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yaW5nIHNlZWtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3Jpbmcgc2VlayA8ICcgKyBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBICsgJ21zJywgdGhpcy5oYW5kbGVyPy5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgYWQgaXMgYmVpbmcgc2tpcHBlZFxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBza2lwcGVkIChhYm92ZSBzZWVrIHRocmVzaG9sZCknLCB0aGlzLmhhbmRsZXI/LmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0b3Aoc3RhdHVzQ29kZSkge1xuICAgICAgICAvLyBBZCBlbmQgd2l0aCBzdG9wU3RyZWFtaW5nU2Vzc2lvblxuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZEVuZCgpO1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZEJyZWFrRGF0YShhZEJyZWFrVHJhY2tlcikge1xuICAgICAgICAvLyBEZXRlY3QgYWQgYnJlYWsgcG9zaXRpb25cbiAgICAgICAgaWYgKE1hdGguYWJzKChhZEJyZWFrVHJhY2tlci5wb3NpdGlvbiArIGFkQnJlYWtUcmFja2VyLmR1cmF0aW9uKSAtIHRoaXMuaGFuZGxlci5wbGF5ZXJBZGFwdGVyPy5nZXREdXJhdGlvbigpKSA8IDEwMDAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdwb3N0cm9sbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoRGF0ZS5ub3coKSAtIHRoaXMuZmlyc3RJbWFnZURhdGUgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TVEFSVF9ERUxUQSkge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAncHJlcm9sbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdtaWRyb2xsJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZEJyZWFrVHJhY2tlci5vb2JhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBwb3NpdGlvbiBpcyAnICsgdGhpcy5hZEJyZWFrUG9zaXRpb24sIHRoaXMuaGFuZGxlcj8uaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWQgYnJlYWtzIHN0YXJ0XG4gICAgICAgIHRoaXMuYWRCcmVha1BsYXlpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFkZCBhZCBicmVhayBiZWdpbiB0byB0aW1lbGluZVxuICAgICAgICBpZiAodGhpcy50aW1lbGluZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLnB1c2hFdmVudChTbWFydExpYi5hbmFseXRpY3NNb2R1bGU/LlNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkRGF0YShhZERhdGEpIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IHNraXAgb2YgYW4gYWQgaW5zaWRlIGFuIGFkIGJyZWFrc1xuICAgICAgICBpZiAodGhpcy5idWlsZGVyLmlzSW5pdGlhbGl6ZWQoKSAmJiB0aGlzLmFkU2tpcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZEVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGFkIGNvdW50ICgtMSB1bnRpbCBCa1lvdSByZXR1cm5zIGVuZGVkIGZsYWcpXG4gICAgICAgIGNvbnN0IGFkQ291bnQgPSAoYWREYXRhLmFkQnJlYWsubGl2ZSA9PT0gdHJ1ZSA/IC0xIDogYWREYXRhLmFkQnJlYWsuYWRzLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBidWlsZGVyXG4gICAgICAgIHRoaXMuYnVpbGRlci5yZXNldCgpXG4gICAgICAgICAgICAuaW1wb3J0KHRoaXMuYWRNZXRyaWNzW2FkRGF0YS5hZElkXSkgLy8gaW1wb3J0IGFkIG1ldHJpY3MgU1IgaWYgaXQgZXhpc3RzIGFuZCBub3QgeWV0IGRpc3BsYXllZFxuICAgICAgICAgICAgLnNldENyZWF0aXZlSWQoYWREYXRhLmNyZWF0aXZlSWQpXG4gICAgICAgICAgICAuc2V0QWRJZChhZERhdGEuYWRJZClcbiAgICAgICAgICAgIC5pbml0KHRoaXMuYWRCcmVha1Bvc2l0aW9uLCBhZERhdGEuaW5kZXgsIGFkQ291bnQpO1xuXG4gICAgICAgIC8vIEluaXQgYWQgbWV0cmljc1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYWRQbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkFkU2tpcHBhYmxlKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0QWRTa2lwcGFibGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgb25BZFNraXBwZWQoc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkLCBvdGhlclNraXBwZWRBZElkcykge1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gU2tpcCBhbGwgb3RoZXIgbmV4dCBhZHNcbiAgICAgICAgaWYgKG90aGVyU2tpcHBlZEFkSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBza2lwcGVkJywgdGhpcy5oYW5kbGVyPy5pZCk7XG5cbiAgICAgICAgICAgIGxldCBhZEluZGV4ID0gMTtcbiAgICAgICAgICAgIG90aGVyU2tpcHBlZEFkSWRzLmZvckVhY2goYWRJZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3NbYWRJZF0uZm9yRWFjaChyZXBvcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVwb3J0LmltcHJlc3Npb25EYXRlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBhZCBhcyBza2lwcGVkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnQuYWRTa2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydC5hZFByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydC5pbXByZXNzaW9uRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluaXQgb3RoZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVwb3J0ID0gdGhpcy5idWlsZGVyLmFkTWV0cmljcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydC5hZEluZGV4ID0gY3VycmVudFJlcG9ydC5hZEluZGV4ICsgYWRJbmRleDsgLy8gc2V0IGluZGV4IHdpdGggc2tpcHBlZCBhZCBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydC5hZENvdW50ID0gY3VycmVudFJlcG9ydC5hZENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0LmFkRm9ybWF0ID0gY3VycmVudFJlcG9ydC5hZEZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYWRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRQcm9ncmVzcyhzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQsIHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuYnVpbGRlci5hZGRQcm9ncmVzcyhwcm9ncmVzcyk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzID4gMCAmJiB0aGlzLmJ1aWxkZXIucXVhcnRpbGVzWyhwcm9ncmVzcyAtIDI1KV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHNraXBwZWQgKG5vIHByZXZpb3VzIHByb2dyZXNzKScsIHRoaXMuaGFuZGxlcj8uaWQpO1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZEVuZChzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQpIHtcbiAgICAgICAgLy8gRGVmYXVsdCBhZCBlbmRcbiAgICAgICAgdGhpcy5oYW5kbGVBZEVuZCgpO1xuXG4gICAgICAgIHRoaXMuYWRQbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25BZEJyZWFrRW5kKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAvLyBBZCBlbmQgd2l0aCBza2lwXG4gICAgICAgIGlmICh0aGlzLmFkUGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLnNldEFkU2tpcHBlZCh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZEVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWQgYnJlYWtzIGVuZFxuICAgICAgICB0aGlzLmFkQnJlYWtQbGF5aW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWRkIGFkIGJyZWFrIGVuZCB0byB0aW1lbGluZVxuICAgICAgICBpZiAodGhpcy50aW1lbGluZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLnB1c2hFdmVudFByb2dyZXNzKFNtYXJ0TGliLmFuYWx5dGljc01vZHVsZT8uU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0b3AsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZWVwYWxpdmVTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIuY2xvbmUoKVxuICAgICAgICAgICAgICAgIC5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmxhc3RMYXllckJpdHJhdGUsIERhdGUubm93KCkgLSB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlci5hZGRTdGFsbChEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtZXRyaWNzID0gYnVpbGRlci5idWlsZCgpO1xuICAgICAgICAgICAgaWYgKG1ldHJpY3MuYWRJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hZE1ldHJpY3NbbWV0cmljcy5hZElkXSA9IG1ldHJpY3M7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZU1ldHJpY3MobWV0cmljcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXNzaW9uUmVwb3J0LmFkTWV0cmljcyA9IE9iamVjdC52YWx1ZXModGhpcy5hZE1ldHJpY3MpO1xuICAgICAgICBzZXNzaW9uUmVwb3J0LmFkTWV0cmljcyA9IHRoaXMuZ2VuZXJhdGVNZXRyaWNzKCk7XG4gICAgfVxuXG4gICAgb25FbmRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgLy8gc2Vzc2lvblJlcG9ydC5hZE1ldHJpY3MgPSBPYmplY3QudmFsdWVzKHRoaXMuYWRNZXRyaWNzKTtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5hZE1ldHJpY3MgPSB0aGlzLmdlbmVyYXRlTWV0cmljcygpO1xuICAgIH1cblxuICAgIHN0b3JlTWV0cmljcyhtZXRyaWNzKSB7XG4gICAgICAgIGNvbnN0IGFkSWQgPSBtZXRyaWNzLmFkSWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuYWRNZXRyaWNzW2FkSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzW2FkSWRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgb3IgdXBkYXRlIG1ldHJpY3NcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFkTWV0cmljc1thZElkXS5maW5kSW5kZXgocmVwb3J0ID0+IHJlcG9ydC5pbXByZXNzaW9uRGF0ZSA9PT0gbWV0cmljcy5pbXByZXNzaW9uRGF0ZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRNZXRyaWNzW2FkSWRdLnB1c2gobWV0cmljcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljc1thZElkXVtpbmRleF0gPSBtZXRyaWNzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVNZXRyaWNzKCkge1xuICAgICAgICBsZXQgbWV0cmljcyA9IFtdO1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5hZE1ldHJpY3MpXG4gICAgICAgICAgICAuZm9yRWFjaChyZXBvcnRzID0+IHtcbiAgICAgICAgICAgICAgICByZXBvcnRzLmZvckVhY2gocmVwb3J0ID0+IG1ldHJpY3MucHVzaChyZXBvcnQpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtZXRyaWNzO1xuICAgIH1cblxuICAgIGhhbmRsZUFkRW5kKCkge1xuICAgICAgICAvLyBTdG9yZSBmaW5hbCBwcm9ncmVzcyBhbmQgdGltZSBzcGVudCBvbiBsYXllciB1bnRpbCBlbmRcbiAgICAgICAgdGhpcy5idWlsZGVyLnNldEFkU2tpcHBlZCh0aGlzLmFkU2tpcHBlZClcbiAgICAgICAgICAgIC5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmxhc3RMYXllckJpdHJhdGUsIERhdGUubm93KCkgLSB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSk7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGFkIG1ldHJpY3NcbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHRoaXMuYnVpbGRlci5idWlsZCgpO1xuICAgICAgICBpZiAobWV0cmljcy5hZElkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYWRNZXRyaWNzW21ldHJpY3MuYWRJZF0gPSBtZXRyaWNzO1xuICAgICAgICAgICAgdGhpcy5zdG9yZU1ldHJpY3MobWV0cmljcyk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgbWV0cmljcyA6ICcgKyBtZXRyaWNzLnRvU3RyaW5nKCksIHRoaXMuaGFuZGxlcj8uaWQpO1xuXG4gICAgICAgIC8vIFJlc2V0IGFkIG1ldHJpY3MgZm9yIHRoZSBuZXh0IGFkXG4gICAgICAgIHRoaXMuYnVpbGRlci5yZXNldCgpO1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQWRzVXBkYXRlZChhZERhdGEpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGVtcHR5IGFkIHJlcG9ydCAodXNlZCB0byBjb3VudCB0aGUgbnVtYmVyIG9mIGFkIGdlbmVyYXRlZCBieSB0aGUgQmtZb3UpXG4gICAgICAgIGFkRGF0YS5hZEJyZWFrcy5mb3JFYWNoKGFkQnJlYWsgPT4ge1xuICAgICAgICAgICAgYWRCcmVhay5hZHMuZm9yRWFjaChhZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRNZXRyaWNzW2FkLmFkSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVpbGRlciA9IG5ldyBBZE1ldHJpY3NCdWlsZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldHJpY3MgPSBidWlsZGVyLnNldENyZWF0aXZlSWQoYWQuY3JlYXRpdmVJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRBZElkKGFkLmFkSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3NbYWQuYWRJZF0gPSBbbWV0cmljc107XG5cbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkZGluZyBhZCBtZXRyaWNzIHJlcG9ydCBmb3IgYWQgaWQgJyArIGFkLmFkSWQsIHRoaXMuaGFuZGxlcj8uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IFJlcXVlc3RNYW5hZ2VyIGZyb20gJy4uLy4uL3JlcXVlc3QvUmVxdWVzdE1hbmFnZXInO1xuaW1wb3J0IHsgQWRUeXBlIH0gZnJvbSAnLi4vQWRNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0FkVHJhY2tlcic7XG5cbmNsYXNzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIFRyYWNrZXJzIG5lZWQgdG8ga25vdyBpZiBpdCBoYXMgYmVlbiBhbHJlYWR5IHByb2NlZWRlZFxuICAgICAqIEluIGNhc2Ugb2Ygc2VlayBhbmQgaW4gc29tZSBjYXNlcywgdHJhY2tlcnMgc2hvdWxkIG5vdCBiZSBjYWxsZWRcbiAgICAgKiBBIHNlZWsgYmVmb3JlIGFuIGFkIHJlc2V0IHRoaXMgbWFwXG4gICAgICovXG4gICAgcHJvY2VlZGVkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvY2VlZGVkID0ge307XG4gICAgICAgIHRoaXMucHJlcGFyZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgdHJhY2tlciBjYW4gZXhlY3V0ZSBpdHMgY29kZVxuICAgICAqIFdhcm5pbmc6IGNhbGxpbmcgdGhpcyBtZXRob2Qgc2V0cyBhIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWQgUHJvY2VzcyBpZC4gSW4gc29tZSB0cmFja2VyLCBpdCByZXF1aXJlcyBtdWx0aXBsZSBjYW4gcHJvY2VzcyAocHJvY2VzcyBiZWdpbiwgcHJvY2VzcyBlbmQgZm9yIHRoZSBhZCBicmVhayB0cmFja2VyKVxuICAgICAqICAgICAgICAgICAwID0gcHJvY2Vzc0JlZ2luLCAxID0gcHJvY2Vzc0VuZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpZiByZXR1cm4gdHJ1ZSwgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZCB3aGljaCBjYWxscyB0aGlzIGNhbiBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGNhblByb2Nlc3MoaWQgPSAwKSB7XG4gICAgICAgIC8vIGNvbnN0IGNhblByb2Nlc3MgPSBEYXRlLm5vdygpIC0gKHRoaXMucHJvY2VlZGVkW2lkXSB8fCAwKSA+IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEE7XG4gICAgICAgIGNvbnN0IGNhblByb2Nlc3MgPSB0aGlzLnByb2NlZWRlZFtpZF0gPT09IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoY2FuUHJvY2Vzcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ09LJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzLmFkSWQgfHwgdGhpcy5hZD8uYWRJZCwgJ2lkICcgKyBpZCwgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VlZGVkW2lkXSA9IERhdGUubm93KCk7XG4gICAgICAgIH0vKiBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOT0snLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHRoaXMuYWRJZCB8fCB0aGlzLmFkPy5hZElkLCAnaWQgJyArIGlkLCB0aGlzLnR5cGUpO1xuICAgICAgICB9Ki9cblxuICAgICAgICByZXR1cm4gY2FuUHJvY2VzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcHJvY2VlZGVkIG1hcFxuICAgICAqL1xuICAgIHJlc2V0UHJvY2VzcygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1JFU0VUJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzLmFkSWQgfHwgdGhpcy5hZD8uYWRJZCwgdGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5wcm9jZWVkZWQgPSB7fTtcbiAgICB9XG59XG5cbi8qKlxuICogQmFzZSBhZCBkYXRhIG9iamVjdFxuICogU3RvcmVkIGluIGFkIHRyYWNraW5nIG1hbmFnZXIgYW5kIHVzZWQgdG8gYnJvd3NlIGFkc1xuICovXG5leHBvcnQgY2xhc3MgQWREYXRhVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogU21hcnRMaWIgYWQgdHJhY2tpbmcgbWFuYWdlclxuICAgICAqL1xuICAgIGFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbnRva2VuXG4gICAgICovXG4gICAgc2Vzc2lvblRva2VuO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdGltZXJlZmVyZW5jZV9tc1xuICAgICAqL1xuICAgIHRpbWVSZWZlcmVuY2U7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZHBvZHNcbiAgICAgKi9cbiAgICBhZEJyZWFrcztcblxuICAgIC8qKlxuICAgICAqIEFkIGdhdGV3YXkgb3V0LW9mLWJhbmQgYWRwb2RzXG4gICAgICovXG4gICAgb3V0T2ZCYW5kQWRCcmVha3M7XG5cbiAgICBjb25zdHJ1Y3RvcihhZFRyYWNraW5nTWFuYWdlciwgc2Vzc2lvblRva2VuLCB0aW1lUmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMuYWRUcmFja2luZ01hbmFnZXIgPSBhZFRyYWNraW5nTWFuYWdlcjtcbiAgICAgICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBzZXNzaW9uVG9rZW47XG4gICAgICAgIHRoaXMudGltZVJlZmVyZW5jZSA9IHRpbWVSZWZlcmVuY2U7XG4gICAgICAgIHRoaXMuYWRCcmVha3MgPSBbXTtcbiAgICAgICAgdGhpcy5vdXRPZkJhbmRBZEJyZWFrcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBhZCBicmVhayBhZnRlciB0aGUgZ2l2ZW4gcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gcG9zaXRpb24gdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBvZiBoYXMgcmVtYWluaW5nIGFkIGJyZWFrcyBhZnRlciBwb3NpdGlvblxuICAgICAqL1xuICAgIGhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBwb3NpdGlvbiA8IGFkQnJlYWsucG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2dyZXNzaW9uIGlmIHNlZWtpbmdcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3Npb24ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5hZEJyZWFrcy5mb3JFYWNoKGFkQnJlYWsgPT4gYWRCcmVhay5yZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkIGJyZWFrIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEFkQnJlYWtUcmFja2VyIGV4dGVuZHMgVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogQWQgZGF0YSB0cmFja2VyXG4gICAgICovXG4gICAgYWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgaWRcbiAgICAgKi9cbiAgICBpZDsgLy8gaWRcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHN0YXJ0dGltZV9tc1xuICAgICAqL1xuICAgIHBvc2l0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQWRqdXN0ZWQgYWQgYnJlYWsgZHVyYXRpb24gY2FsY3VsYXRlZCBieSBTbWFydExpYiBhbmQgdXNlZCBieSB0aGUgdHJhY2tpbmdcbiAgICAgKiBJbiBzb21lIGNhc2VzLCB0aGUgZHVyYXRpb24gcmV0dXJuZWQgYnkgdGhlIEJrWW91IGlzIG5vdCBjb3JyZWN0IGFuZCBoYXMgdG8gYmUgYWRqdXN0ZWRcbiAgICAgKi9cbiAgICBkdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSBjdXJyZW50IGFkIGJyZWFrIGluIHRoZSB0cmFja2luZyBmaWxlIChCa1lvdSBkdXJhdGlvbl9tcylcbiAgICAgKiBGb3IgTElWRSBjb250ZW50cywgYWN0dWFsRHVyYXRpb24gY2FuIGJlIGRpZmZlcmVudCBvZiBleHBlY3RlZER1cmF0aW9uIHdoZW4gdGhlIGFkIGJyZWFrIGlzIG5vdCB0b3RhbGx5IGdlbmVyYXRlZFxuICAgICAqL1xuICAgIC8vIGFjdHVhbER1cmF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogRXhwZWN0ZWQgZHVyYXRpb24gb2YgdGhlIGZ1bGwgYWQgYnJlYWtcbiAgICAgKiBGb3IgVk9EIGNvbnRlbnRzLCBleHBlY3RlZER1cmF0aW9uID09IGFjdHVhbER1cmF0aW9uXG4gICAgICovXG4gICAgLy8gZXhwZWN0ZWREdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIENvbnRlbnQgdHlwZVxuICAgICAqL1xuICAgIGxpdmU7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZHNcbiAgICAgKi9cbiAgICBhZHM7XG5cbiAgICAvKipcbiAgICAgKiBBZCBicmVhayB0cmFja2luZyBldmVudHNcbiAgICAgKi9cbiAgICB0cmFja2luZ0V2ZW50cztcblxuICAgIC8qKlxuICAgICAqIE91dC1vZi1iYW5kIGFkIHJlbGF0ZWQgZGF0YVxuICAgICAqIFxuICAgICAqIFVuZGVmaW5lZCBmb3IgaW4tYmFuZCBhZHNcbiAgICAgKiBcbiAgICAgKi9cbiAgICBvb2JhO1xuXG4gICAgY29uc3RydWN0b3IoYWREYXRhLCBpZCwgcG9zaXRpb24sIGR1cmF0aW9uLCBsaXZlLCBvb2JhKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZERhdGEgPSBhZERhdGE7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMubGl2ZSA9IGxpdmU7XG4gICAgICAgIHRoaXMuYWRzID0gW107XG4gICAgICAgIHRoaXMudHJhY2tpbmdFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5vb2JhID0gb29iYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZHMuZm9yRWFjaChhZCA9PiBhZC5yZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBwdWJsaWMgZXZlbnQgdG8gYW5ub3VuY2UgYW4gYWQgYnJlYWtcbiAgICAgKi9cbiAgICBwcm9jZXNzUHJlcGFyZSgpIHtcbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSB0aGlzLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBpZiAodGhpcy5wcmVwYXJlZCA9PT0gZmFsc2UgJiYgYWRFdmVudHNMaXN0ZW5lcj8ub25QcmVwYXJlQWRCcmVhayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZEV2ZW50c0xpc3RlbmVyLm9uUHJlcGFyZUFkQnJlYWsodGhpcy50b0RhdGEoKSk7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdHJhY2tlcnMgd2hlbiBzdGFydGluZyBhbiBhZFxuICAgICAqL1xuICAgIHByb2Nlc3NCZWdpbigpIHtcbiAgICAgICAgY29uc3QgYWRUcmFja2luZ01hbmFnZXIgPSB0aGlzLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygwKSkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIGFscmVhZHkgYmVnYW4gKGlkOiAnICsgdGhpcy5pZCArICcpJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBicmVhayBiZWdpbi4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRHVyYXRpb246ICcgKyB0aGlzLmR1cmF0aW9uICsgJ21zJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRCcmVha0RhdGEodGhpcyk7XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQnJlYWtCZWdpbih0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4pO1xuICAgICAgICB0aGlzLnRyYWNraW5nRXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC50eXBlID09PSAnYnJlYWtTdGFydCcpLmZvckVhY2goZXZlbnQgPT4gZXZlbnQucHJvY2Vzc0V2ZW50KCkpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHVibGljIGV2ZW50c1xuICAgICAgICBjb25zdCBhZEV2ZW50c0xpc3RlbmVyID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5hZFNlc3Npb24/LmFkRXZlbnRzTGlzdGVuZXI7XG4gICAgICAgIHRoaXMucHJvY2Vzc1ByZXBhcmUoKTtcbiAgICAgICAgYWRFdmVudHNMaXN0ZW5lcj8ub25BZEJyZWFrQmVnaW4odGhpcy50b0RhdGEoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0cmFja2VycyB3aGVuIGVuZGluZyBhbiBhZCBicmVha1xuICAgICAqL1xuICAgIHByb2Nlc3NFbmQoKSB7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoMSkpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBhbHJlYWR5IGVuZGVkIChpZDogJyArIHRoaXMuaWQgKyAnKScsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgYWQgYnJlYWsgZW5kLi4uJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRCcmVha0VuZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4pO1xuICAgICAgICB0aGlzLnRyYWNraW5nRXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC50eXBlID09PSAnYnJlYWtFbmQnKS5mb3JFYWNoKGV2ZW50ID0+IGV2ZW50LnByb2Nlc3NFdmVudCgpKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHB1YmxpYyBldmVudHNcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBhZEV2ZW50c0xpc3RlbmVyPy5vbkFkQnJlYWtFbmQodGhpcy50b0RhdGEoKSk7XG5cbiAgICAgICAgLy8gSW4tYmFuZCBhZHM6XG4gICAgICAgIC8vICAgICAgT25jZSBwbGF5ZWQsIHRoZSBhZCBicmVhayBjYW4gYmUgcmVwbGF5ZWQgYWdhaW5cbiAgICAgICAgLy8gICAgICBJbiBzb21lIGNhc2Ugb2YgQmtZb3Ugbm8gaW5zZXJ0aW9uIGVycm9yLCBhZCBicmVhayBlbmQgaXMgY2FsbGVkIGJlZm9yZSB0aGUgYWN0dWFsIHBvc2l0aW9uLlxuICAgICAgICAvLyAgICAgIFdoZW4gYW4gYWQgaXMgZGV0ZWN0ZWQgYWQgYnJlYWsgYmVnaW4gc2hvdWxkIGJlIGNhbGxlZCBhZ2FpblxuICAgICAgICAvLyBPdXQtb2YtYmFuZCBhZHM6XG4gICAgICAgIC8vICAgICAgT25jZSBwbGF5ZWQsIHRoZSBhZCBicmVhayBpcyBkZWxldGVkXG4gICAgICAgIGlmICh0aGlzLm9vYmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFByb2Nlc3MoKTtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0UHJvY2VzcygpIHtcbiAgICAgICAgc3VwZXIucmVzZXRQcm9jZXNzKCk7XG5cbiAgICAgICAgLy8gT25jZSBhbiBhZCBicmVhayBoYXMgYmVlbiBjb21wbGV0ZWQsIGFsbCBhZCBjYW4gYmUgcmVwbGF5ZWQgYWdhaW5cbiAgICAgICAgLy8gICBEb24ndCByZXNldCB0aGUgcHJvZ3Jlc3Npb24sIGl0IHJlcXVpcmVzIHRvIHNlZWsgYmVmb3JlIHRoZSBhZCBzdGFydCBwb3NpdGlvbiB0byByZXNldCBpdC5cbiAgICAgICAgLy8gICBPbmx5IG5lZWQgdG8gdHJpZ2dlciBhZCBldmVudHMgaWYgc2Vla2luZyBiYWNrd2FyZFxuICAgICAgICB0aGlzLmFkcy5mb3JFYWNoKGFkID0+IGFkLnJlc2V0UHJvY2VzcygpKTtcbiAgICB9XG5cbiAgICB0b0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb246IHRoaXMucG9zaXRpb24gfHwgMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmxpdmUgPT09IHRydWUgPyAtMSA6IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICBhZHM6IHRoaXMuYWRzLm1hcChhZCA9PiBhZC50b0RhdGEoKSksXG4gICAgICAgICAgICBhZENvdW50OiB0aGlzLmxpdmUgPT09IHRydWUgPyAtMSA6IHRoaXMuYWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG9vYmE6IHRoaXMub29iYVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZCBldmVudCBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBBZEJyZWFrRXZlbnRUcmFja2VyIGV4dGVuZHMgVHJhY2tlciB7XG4gICAgLyoqXG4gICAgICogQWRCcmVhayB0cmFja2VyXG4gICAgICovXG4gICAgYWRCcmVhaztcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHR5cGVcbiAgICAgKi9cbiAgICB0eXBlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgY2FsbGJhY2t1cmxcbiAgICAgKi9cbiAgICB1cmw7XG5cbiAgICBjb25zdHJ1Y3RvcihhZEJyZWFrLCB0eXBlLCB1cmwpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmFkQnJlYWsgPSBhZEJyZWFrO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGV2ZW50XG4gICAgICogVHJpZ2dlciBldmVudCBpZiBoYXMgbm90IGJlZW4gYWxyZWFkeSBwcm9jZWVkZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCBoYXMgYmVlbiBwcm9jZWVkZWRcbiAgICAgKi9cbiAgICBwcm9jZXNzRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZEJyZWFrLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyAnICsgdGhpcy50eXBlICsgJy4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLnVybCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXF1ZXN0aW5nICcgKyB0aGlzLnVybCwgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkRXZlbnQoYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlciwgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEFkVHJhY2tlciBleHRlbmRzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIEFkIHR5cGVcbiAgICAgKiBAdHlwZSB7J2xpbmVhcicgfCAnbm9ubGluZWFyJyB8ICdsaW5lYXJfYW5kX25vbmxpbmVhcicgfCAndW5zdXBwb3J0ZWQnfSBcbiAgICAgKi9cbiAgICBhZFR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBBZCBicmVhayB0cmFja2VyXG4gICAgICovXG4gICAgYWRCcmVhaztcblxuICAgIC8qKlxuICAgICAqIEluZGV4IGluIHRoZSBjdXJyZW50IGFkIGJyZWFrXG4gICAgICovXG4gICAgaW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBzdGFydHRpbWVfbXNcbiAgICAgKi9cbiAgICBwb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGR1cmF0aW9uX21zXG4gICAgICovXG4gICAgZHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBza2lwcGFibGVfbXNcbiAgICAgKi9cbiAgICBza2lwcGFibGVQb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGFkIGlzIHNraXBwYWJsZVxuICAgICAqL1xuICAgIHNraXBwYWJsZTtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGNyZWF0aXZlaWRcbiAgICAgKi9cbiAgICBjcmVhdGl2ZUlkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWRpZCArICctJyArIHN0YXJ0dGltZV9tc1xuICAgICAqL1xuICAgIGFkSWQ7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSB0cmFja2luZ2V2ZW50c1xuICAgICAqL1xuICAgIGV2ZW50cztcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHZpZGVvY2xpY2tzIG9iamVjdFxuICAgICAqIEpTT04gdmFsdWUgOiB7IGNsaWNrdGhyb3VnaHVybDogc3RyaW5nLCBjbGlja3RyYWNraW5nOiBbe2NsaWNrdXJsOiBzdHJpbmd9XSwgY3VzdG9tY2xpY2s6IFt7Y2xpY2t1cmw6IHN0cmluZ31dIH1cbiAgICAgKiBNYXBwZWQgdmFsdWUgOiB7IHVyaTogc3RyaW5nLCB0cmFja2VyczogW3tjbGlja3VybDogc3RyaW5nfV0sIGN1c3RvbUNsaWNrOiBbe2NsaWNrdXJsOiBzdHJpbmd9XSB9XG4gICAgICovXG4gICAgY2xpY2thYmxlOyAvLyB2aWRlb2NsaWNrcyB7IGNsaWNrdGhyb3VnaHVybCwgY2xpY2t0cmFja2luZywgY3VzdG9tY2xpY2sgfSA9PiB1cmksIHRyYWNrZXJzLCBjdXN0b21DbGlja1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWR2ZXJpZmljYXRpb25zIGFycmF5XG4gICAgICogSlNPTiB2YWx1ZSA6IFsgeyB2ZW5kb3I6IHN0cmluZywgamF2YXNjcmlwdHJlc291cmNlczogW3t9XSwgZXhlY3V0YWJsZXJlc291cmNlczogW3t9XSwgdHJhY2tpbmdldmVudHM6IFt7fV0sIHZlcmlmaWNhdGlvbnBhcmFtZXRlcnM6IHN0cmluZ30gXVxuICAgICAqIE1hcHBlZCB2YWx1ZSA6IFsge3ZlbmRvcjogc3RyaW5nLCBqYXZhc2NyaXB0UmVzb3VyY2VzOiBbe31dLCBleGVjdXRhYmxlUmVzb3VyY2VzOiBbe31dLCB0cmFja2luZ0V2ZW50czogW3t9XSwgdmVyaWZpY2F0aW9uUGFyYW1ldGVyczogc3RyaW5nIH0gXVxuICAgICAqL1xuICAgIHZlcmlmaWNhdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBpbnRlcnZhbCB3YXRjaGVkXG4gICAgICogRmxhdHRlZCBhdCBlYWNoIGFkIGl0ZXJhdGlvblxuICAgICAqL1xuICAgIHdhdGNoZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHByb2dyZXNzaW9uICgwLjAgdG8gMS4wKVxuICAgICAqIFJlc2V0IHdoZW4gc2Vla1xuICAgICAqL1xuICAgIHByb2dyZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2Ygbm9uLWxpbmVhciBhZHMgZm9yIHRoZSBjdXJyZW50IGNyZWF0aXZlXG4gICAgICovXG4gICAgbm9uTGluZWFySW5mbztcblxuICAgIC8qKlxuICAgICAqIEVycm9yIHRyYWNrZXIgVVJMXG4gICAgICovXG4gICAgZXJyb3JVUkw7XG5cbiAgICBjb25zdHJ1Y3RvcihhZFR5cGUsIGFkQnJlYWssIGluZGV4LCBwb3NpdGlvbiwgZHVyYXRpb24sIHNraXBwYWJsZSwgc2tpcHBhYmxlUG9zaXRpb24sIGNyZWF0aXZlSWQsIGFkSWQsIGNsaWNrYWJsZSwgdmVyaWZpY2F0aW9ucywgbm9uTGluZWFySW5mbywgZXJyb3JVUkwpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmFkVHlwZSA9IGFkVHlwZTtcbiAgICAgICAgdGhpcy5hZEJyZWFrID0gYWRCcmVhaztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5za2lwcGFibGUgPSBza2lwcGFibGU7XG4gICAgICAgIHRoaXMuc2tpcHBhYmxlUG9zaXRpb24gPSBza2lwcGFibGVQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5jcmVhdGl2ZUlkID0gY3JlYXRpdmVJZDtcbiAgICAgICAgdGhpcy5hZElkID0gYWRJZDtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSBjbGlja2FibGU7XG4gICAgICAgIHRoaXMudmVyaWZpY2F0aW9ucyA9IHZlcmlmaWNhdGlvbnM7XG4gICAgICAgIHRoaXMud2F0Y2hlZCA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMDtcbiAgICAgICAgdGhpcy5ub25MaW5lYXJJbmZvID0gbm9uTGluZWFySW5mbztcbiAgICAgICAgdGhpcy5lcnJvclVSTCA9IGVycm9yVVJMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZsYXQgd2F0Y2ggaW50ZXJ2YWxzIGFycmF5XG4gICAgICovXG4gICAgZmxhdFdhdGNoZWQoKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy53YXRjaGVkKSk7IC8vIGRlZXAgY29weVxuICAgICAgICBsZXQgaW50ZXJ2YWxzID0gcmFuZ2VzLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICBsZXQgdG9wID0gbnVsbDtcblxuICAgICAgICAvLyBzb3J0IHRoZSBpbnRlcnZhbHMgYmFzZWQgb24gdGhlaXIgc3RhcnQgdmFsdWVzXG4gICAgICAgIGludGVydmFscyA9IGludGVydmFscy5zb3J0KChzdGFydCwgZW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnRbMF0gPiBlbmRbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydFswXSA8IGVuZFswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwdXNoIHRoZSAxc3QgaW50ZXJ2YWwgaW50byB0aGUgc3RhY2tcbiAgICAgICAgc3RhY2sucHVzaChpbnRlcnZhbHNbMF0pO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gdGhlIG5leHQgaW50ZXJ2YWwgYW5kIG1lcmdlIGlmIG5lZWRlZFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGludGVydmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSB0b3AgZWxlbWVudFxuICAgICAgICAgICAgdG9wID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGlmICh0b3BbMV0gPCBpbnRlcnZhbHNbaV1bMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU1RBQ0sgMScpO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IGludGVydmFsIGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIHN0YWNrIHRvcCBlbGVtZW50LCBwdXNoIGl0IHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goaW50ZXJ2YWxzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9wWzFdIDwgaW50ZXJ2YWxzW2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NUQUNLIDInKTtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgdXBkYXRlIHRoZSBlbmQgdmFsdWUgb2YgdGhlIHRvcCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gaWYgZW5kIG9mIGN1cnJlbnQgaW50ZXJ2YWwgaXMgaGlnaGVyXG4gICAgICAgICAgICAgICAgdG9wWzFdID0gaW50ZXJ2YWxzW2ldWzFdO1xuICAgICAgICAgICAgICAgIC8vIHRvcC5kdXJhdGlvbiA9IHRvcC5lbmQgLSB0b3Auc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBlcXVhbCA9IEpTT04uc3RyaW5naWZ5KHRoaXMud2F0Y2hlZCkgPT09IEpTT04uc3RyaW5naWZ5KHN0YWNrKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZMQVQnLCBlcXVhbCwgc3RhY2spO1xuXG4gICAgICAgIHRoaXMud2F0Y2hlZCA9IHN0YWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2dyZXNzaW9uIGlmIHNlZWtpbmdcbiAgICAgKiBPbmx5IHJlc2V0IGlmIHNlZWtpbmcgYmVmb3JlIGFkIHN0YXJ0IHBvc2l0aW9uIHRvIGF2b2lkIHRyYWNraW5nIHRoZSBzYW1lIGFkIHR3aWNlXG4gICAgICogSW4gc29tZSBjYXNlLCB0aGUgcGxheWVyIGNhbiB0cmlnZ2VyIHVuZGVzaXJlZCBiYWNrd2FyZCBzZWVraW5nIGV2ZW50IHdoZW4gc3dpdGNoaW5nIHRoZSBwZXJpb2RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3Npb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDw9IHRoaXMucG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9jZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50cyA9PiBldmVudHMucmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgcHJvZ3Jlc3Npb25cbiAgICAgKiBDYWxsIHRyYWNrZXJzIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHBvc2l0aW9uU3RhcnQgcHJvZ3Jlc3Npb24gc3RhcnQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gcG9zaXRpb25FbmQgcHJvZ3Jlc3Npb24gZW5kIHBvc2l0aW9uXG4gICAgICovXG4gICAgdXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uU3RhcnQgPiBwb3NpdGlvbkVuZCB8fFxuICAgICAgICAgICAgcG9zaXRpb25TdGFydCA8IHRoaXMucG9zaXRpb24gfHwgcG9zaXRpb25FbmQgPCB0aGlzLnBvc2l0aW9uIHx8XG4gICAgICAgICAgICBwb3NpdGlvblN0YXJ0ID4gdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24gfHwgcG9zaXRpb25FbmQgPiB0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBzYXZlIGxhc3QgcHJvZ3Jlc3Npb24gPz8gYXZvaWQgY2FsY3VsYXRpbmcgYXQgZWFjaCBpdGVyYXRpb25cbiAgICAgICAgY29uc3QgZHVyYXRpb25TdGFydCA9IHRoaXMud2F0Y2hlZC5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArICh2YWx1ZVsxXSAtIHZhbHVlWzBdKSwgMCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzaW9uU3RhcnQgPSBkdXJhdGlvblN0YXJ0IC8gdGhpcy5kdXJhdGlvbjtcblxuICAgICAgICB0aGlzLndhdGNoZWQucHVzaChbcG9zaXRpb25TdGFydCAtIHRoaXMucG9zaXRpb24sIHBvc2l0aW9uRW5kIC0gdGhpcy5wb3NpdGlvbl0pOyAvLyB0b2RvIHJvdW5kIHZhbHVlc1xuICAgICAgICB0aGlzLmZsYXRXYXRjaGVkKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdXQVRDSEVEJywgdGhpcy53YXRjaGVkKTtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbkVuZCA9IHRoaXMud2F0Y2hlZC5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArICh2YWx1ZVsxXSAtIHZhbHVlWzBdKSwgMCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzaW9uRW5kID0gZHVyYXRpb25FbmQgLyB0aGlzLmR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSBwcm9ncmVzc2lvbkVuZDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHByb2dyZXNzIGV2ZW50XG4gICAgICAgIGNvbnN0IGFkRGF0YSA9IHRoaXMuYWRCcmVhay5hZERhdGE7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gYWREYXRhLmFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgICAgIC8qIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDAuMDAgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMC4wMCkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmNyZWF0aXZlSWQsIHRoaXMuYWRJZCwgMCk7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDAuMjUgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMC4yNSkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCAyNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSAwLjUwICYmIHByb2dyZXNzaW9uRW5kID49IDAuNTApIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcywgNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gMC43NSAmJiBwcm9ncmVzc2lvbkVuZCA+PSAwLjc1KSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMsIDc1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbmUgd2hlbiBleGl0aW5nIGFkXG4gICAgICAgIC8qIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDEuMDAgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMS4wMCkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmNyZWF0aXZlSWQsIHRoaXMuYWRJZCwgMTAwKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudC5wcm9jZXNzRXZlbnQocHJvZ3Jlc3Npb25TdGFydCwgcHJvZ3Jlc3Npb25FbmQpKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwcm9ncmVzc2lvblN0YXJ0ID09PSAxICYmIHByb2dyZXNzaW9uRW5kID09PSAxKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYWxyZWFkeSBzZWVuICgxMDAlKScsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHByb2dyZXNzZWQgZnJvbSAnICsgTWF0aC5mbG9vcihwcm9ncmVzc2lvblN0YXJ0ICogMTAwMDAwKSAvIDEwMDAgKyAnJSB0byAnICsgTWF0aC5mbG9vcihwcm9ncmVzc2lvbkVuZCAqIDEwMDAwMCkgLyAxMDAwICsgJyUgKGlkOiAnICsgdGhpcy5hZElkICsgJyknLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgcHVibGljIGV2ZW50IHRvIGFubm91bmNlIGFuIGFkXG4gICAgICovXG4gICAgcHJvY2Vzc1ByZXBhcmUoKSB7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZEJyZWFrLmFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBpZiAodGhpcy5wcmVwYXJlZCA9PT0gZmFsc2UgJiYgYWRFdmVudHNMaXN0ZW5lcj8ub25QcmVwYXJlQWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRFdmVudHNMaXN0ZW5lci5vblByZXBhcmVBZCh0aGlzLnRvRGF0YSgpLCB0aGlzLmFkQnJlYWsudG9EYXRhKCkpO1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRyYWNrZXJzIHdoZW4gc3RhcnRpbmcgYW4gYWRcbiAgICAgKi9cbiAgICBwcm9jZXNzQmVnaW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzKDApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZERhdGEgPSB0aGlzLmFkQnJlYWsuYWREYXRhO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IGFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBiZWdpbiAnICsgdGhpcy5hZElkICsgJy4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU3RhcnQ6ICcgKyAodGhpcy5wb3NpdGlvbikgKyAnbXMnLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0VuZCAgOiAnICsgKHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uKSArICdtcycsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRHVyYXRpb246ICcgKyB0aGlzLmR1cmF0aW9uICsgJ21zJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdUeXBlOiAnICsgdGhpcy5hZFR5cGUsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgaW50ZXJuYWwgZXZlbnRzXG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkRGF0YSh0aGlzKTtcbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRCZWdpbihhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuc2tpcHBhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFNraXBwYWJsZShhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLnNraXBwYWJsZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbiwgdGhpcy5hZEJyZWFrLnBvc2l0aW9uICsgdGhpcy5hZEJyZWFrLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMsIDApO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHVibGljIGV2ZW50c1xuICAgICAgICBjb25zdCBhZEV2ZW50c0xpc3RlbmVyID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5hZFNlc3Npb24/LmFkRXZlbnRzTGlzdGVuZXI7XG4gICAgICAgIGNvbnN0IGFkID0gdGhpcy50b0RhdGEoKTtcbiAgICAgICAgY29uc3QgYWRCcmVhayA9IHRoaXMuYWRCcmVhay50b0RhdGEoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzUHJlcGFyZSgpO1xuXG4gICAgICAgIC8vIE9NU0RLIHNwZWNpZmljXG4gICAgICAgIGlmIChhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyPy5vbVNlc3Npb25IYW5kbGVyKSB7XG4gICAgICAgICAgICBhZFsnb21BZFNlc3Npb25JZCddID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5vbVNlc3Npb25IYW5kbGVyLm9tQWRTZXNzaW9uPy5hZFNlc3Npb24/LmdldEFkU2Vzc2lvbklkKCk7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5jdXJyZW50QWREYXRhID0gYWQ7XG4gICAgICAgIH1cblxuICAgICAgICBhZEV2ZW50c0xpc3RlbmVyPy5vbkFkQmVnaW4oYWQsIGFkQnJlYWspO1xuICAgICAgICBpZiAodGhpcy5za2lwcGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRTa2lwcGFibGUoYWQsIGFkQnJlYWssIHRoaXMuc2tpcHBhYmxlUG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uLCB0aGlzLmFkQnJlYWsucG9zaXRpb24gKyB0aGlzLmFkQnJlYWsuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0cmFja2VycyB3aGVuIGVuZGluZyBhbiBhZFxuICAgICAqL1xuICAgIHByb2Nlc3NFbmQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzKDEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZERhdGEgPSB0aGlzLmFkQnJlYWsuYWREYXRhO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IGFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBlbmQgJyArIHRoaXMuYWRJZCArICcuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGludGVybmFsIGV2ZW50c1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzLCBwcm9jZXNzIDEwMCUgaWYgdHJhY2tpbmcgcHJvZ3Jlc3Npb24gaXMgMC45NSUrXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzaW9uID49IDAuOTUpIHtcbiAgICAgICAgICAgIC8vIFNldCBwcm9ncmVzc2lvbiB0byAxXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkRW5kKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHVibGljIGV2ZW50c1xuICAgICAgICBjb25zdCBhZEV2ZW50c0xpc3RlbmVyID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5hZFNlc3Npb24/LmFkRXZlbnRzTGlzdGVuZXI7XG4gICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRFbmQodGhpcy50b0RhdGEoKSwgdGhpcy5hZEJyZWFrLnRvRGF0YSgpKTtcblxuICAgICAgICAvLyBJbi1iYW5kIGFkczpcbiAgICAgICAgLy8gICAgICBPbmNlIHBsYXllZCwgdGhlIGFkIGNhbiBiZSByZXBsYXllZCBhZ2FpblxuICAgICAgICAvLyBPdXQtb2YtYmFuZCBhZHM6XG4gICAgICAgIC8vICAgICAgT25jZSBwbGF5ZWQsIHRoZSBhZCBpcyBkZWxldGVkXG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWsub29iYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Tm9uTGluZWFyUmVzb3VyY2VzKHJlc291cmNlVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub25MaW5lYXJJbmZvLmZpbHRlcihvYmogPT4gb2JqW3Jlc291cmNlVHlwZV0gIT09ICcnKS5tYXAob2JqID0+ICh7XG4gICAgICAgICAgICB1cmw6IG9ialtyZXNvdXJjZVR5cGVdLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogb2JqLmFkUGFyYW1ldGVycyxcbiAgICAgICAgICAgIGNyZWF0aXZlSWQ6IG9iai5jcmVhdGl2ZUlkXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0b0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZFR5cGU6IHRoaXMuYWRUeXBlLFxuICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICBjcmVhdGl2ZUlkOiB0aGlzLmNyZWF0aXZlSWQsXG4gICAgICAgICAgICBhZElkOiB0aGlzLmFkSWQsXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2tpcFBvc2l0aW9uOiB0aGlzLnNraXBwYWJsZVBvc2l0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICBjbGlja1VSTDogdGhpcy5jbGlja2FibGUudXJpLFxuICAgICAgICAgICAgbm9uTGluZWFySWZyYW1lUmVzb3VyY2VzOiB0aGlzLmdldE5vbkxpbmVhclJlc291cmNlcygnaWZyYW1lUmVzb3VyY2UnKSxcbiAgICAgICAgICAgIG5vbkxpbmVhclN0YXRpY1Jlc291cmNlczogdGhpcy5nZXROb25MaW5lYXJSZXNvdXJjZXMoJ3N0YXRpY1Jlc291cmNlJylcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogQWQgZXZlbnQgZGF0YVxuICovXG5leHBvcnQgY2xhc3MgQWRFdmVudFRyYWNrZXIgZXh0ZW5kcyBUcmFja2VyIHtcbiAgICAvKipcbiAgICAgKiBBZCB0cmFja2VyXG4gICAgICovXG4gICAgYWQ7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSB0eXBlXG4gICAgICovXG4gICAgdHlwZTtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGNhbGxiYWNrdXJsXG4gICAgICovXG4gICAgdXJsO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugb2Zmc2V0XG4gICAgICovXG4gICAgb2Zmc2V0O1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgdGltZV9tc1xuICAgICAqIERlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwcm9ncmVzc2lvbjtcblxuICAgIGNvbnN0cnVjdG9yKGFkLCB0eXBlLCB1cmwsIG9mZnNldCwgcG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmFkID0gYWQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMDtcblxuICAgICAgICB0aGlzLnByb2Nlc3NQcm9ncmVzc2lvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2dyZXNzaW9uIGlmIHNlZWtpbmdcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3Npb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDw9IHRoaXMuYWQucG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9jZXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZXZlbnQgdHJpZ2dlciBwb3NpdGlvblxuICAgICAqL1xuICAgIHByb2Nlc3NQcm9ncmVzc2lvbigpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICh0aGlzLnR5cGUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHRoaXMudHlwZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAodGhpcy5wb3NpdGlvbiAtIHRoaXMuYWQucG9zaXRpb24pIC8gdGhpcy5hZC5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmlyc3RxdWFydGlsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDAuMjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaWRwb2ludCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RoaXJkcXVhcnRpbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjc1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAxLjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IHRoaXMub2Zmc2V0IC8gdGhpcy5hZC5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ltcHJlc3Npb24nOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gcHJvY2VzcyBldmVudFxuICAgICAqIFRyaWdnZXIgZXZlbnQgaWYgZXZlbnQgdHJpZ2dlciBwcm9ncmVzc2lvbiBpcyBiZXR3ZWVuIHByb2dyZXNzaW9uIHN0YXJ0IGFuZCBwcm9ncmVzc2lvbiBlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9ncmVzc2lvblN0YXJ0IHByb2dyZXNzaW9uIHN0YXJ0XG4gICAgICogQHBhcmFtIHByb2dyZXNzaW9uRW5kIHByb2dyZXNzaW9uIGVuZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCBoYXMgYmVlbiBwcm9jZWVkZWRcbiAgICAgKi9cbiAgICBwcm9jZXNzRXZlbnQocHJvZ3Jlc3Npb25TdGFydCwgcHJvZ3Jlc3Npb25FbmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3Npb25TdGFydCArICcgPCAnICsgdGhpcy5wcm9ncmVzc2lvbiArICcgPCAnICsgcHJvZ3Jlc3Npb25FbmQpO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IHRoaXMuYWQuYWRCcmVhay5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gdGhpcy5wcm9ncmVzc2lvbiAmJiB0aGlzLnByb2dyZXNzaW9uIDw9IHByb2dyZXNzaW9uRW5kKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbXByZXNzaW9uIGV2ZW50cyBmb3Igbm9uLWxpbmVhciBvbmx5IGFkcyBtdXN0IGJlIHRyaWdnZXJlZCBtYW51YWxseSB1c2luZyBzZW5kVHJhY2tlcigpXG4gICAgICAgICAgICBpZiAodGhpcy5hZC5hZFR5cGUgPT09IEFkVHlwZS5BRF9OT05fTElORUFSICYmIHRoaXMudHlwZSA9PT0gJ2ltcHJlc3Npb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyAnICsgKHRoaXMudHlwZSB8fCAndGltZWQgZXZlbnQnKSArICcgKCcgKyAoTWF0aC5mbG9vcih0aGlzLnByb2dyZXNzaW9uICogMTAwKSkgKyAnJSkuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXJsICE9PSB1bmRlZmluZWQgJiYgdGhpcy51cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXF1ZXN0aW5nICcgKyB0aGlzLnVybCwgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZEV2ZW50KGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIsIHRoaXMudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBKb2JNYW5hZ2VyIGZyb20gJy4uLy4uL3NlcnZpY2UvSm9iTWFuYWdlcic7XG5pbXBvcnQgUmVxdWVzdE1hbmFnZXIgZnJvbSAnLi4vLi4vcmVxdWVzdC9SZXF1ZXN0TWFuYWdlcic7XG5pbXBvcnQge1N0cmVhbWluZ1Nlc3Npb25PcHRpb25zfSBmcm9tICcuLi8uLi9zZXNzaW9uL3N0cmVhbWluZy9TdHJlYW1pbmdTZXNzaW9uT3B0aW9ucyc7XG5pbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IFVSTCBmcm9tICcuLi8uLi91dGlscy9VUkwnO1xuXG5pbXBvcnQge0FkQnJlYWtUcmFja2VyLCBBZEJyZWFrRXZlbnRUcmFja2VyLCBBZERhdGFUcmFja2VyLCBBZEV2ZW50VHJhY2tlciwgQWRUcmFja2VyfSBmcm9tICcuL0FkVHJhY2tlcic7XG5cbmltcG9ydCB7QWRUeXBlfSBmcm9tICcuLy4uL0FkTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtBZFRyYWNraW5nTWdyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRUcmFja2luZ01hbmFnZXIge1xuICAgIHN0YXRpYyBQT1NJVElPTl9VUERBVEVfSU5URVJWQUwgPSAxMDAwO1xuXG4gICAgc3RhdGljIFBPU0lUSU9OX1NUQVJUX0RFTFRBID0gNDAwMDtcblxuICAgIHN0YXRpYyBQT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBID0gNjAwMDtcblxuICAgIHN0YXRpYyBQT1NJVElPTl9QUkVQQVJFX0RFTFRBID0gMzAwMDtcblxuICAgIHN0YXRpYyBTRVNTSU9OX1VQREFURV9JTlRFUlZBTCA9IDUwMDA7XG5cbiAgICBzdGF0aWMgTkVBUl9BRF9ERUxUQSA9IHRoaXMuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMICogMS4yO1xuXG4gICAgc3RhdGljIE9PQkFfUkVRVUVTVF9USU1FT1VUID0gNTAwMDtcblxuICAgIC8vIHN0YXRpYyBOT05DRV9FWFBJUkFUSU9OX1RJTUUgPSA1ICogNjAgKiAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogU2Vzc2lvbiBoYW5kbGVyXG4gICAgICovXG4gICAgaGFuZGxlcjtcblxuICAgIC8qKlxuICAgICAqIFBsYXllciBhZGFwdGVyXG4gICAgICovXG4gICAgcGxheWVyQWRhcHRlcjtcblxuICAgIC8qKlxuICAgICAqIEFkIHRyYWNraW5nIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGxpc3RlbmVycztcblxuICAgIC8qKlxuICAgICAqIEFkIGRhdGEgKGFsbCBhZCBicmVha3MsIGFsbCBhZHMgYW5kIGFsbCBldmVudHMpXG4gICAgICovXG4gICAgYWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCBsaXN0XG4gICAgICovXG4gICAgYWRMaXN0O1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBvdXQtb2YtYmFuZCBhZCBsaXN0XG4gICAgICovXG4gICAgb3V0T2ZCYW5kQWRMaXN0O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHBvc2l0aW9uIGpvYlxuICAgICAqIFVzZWQgdG8gdHJhY2sgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICB1cGRhdGVQb3NpdGlvbkpvYjtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBCa1lvdSBzZXNzaW9uIGpvYlxuICAgICAqL1xuICAgIHVwZGF0ZVNlc3Npb25Kb2I7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBzZXNzaW9uIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBzdGFydGVkO1xuXG4gICAgLyoqXG4gICAgICogUGxheWJhY2sgcGF1c2VkXG4gICAgICovXG4gICAgcGF1c2VkO1xuXG4gICAgLyoqXG4gICAgICogUGxheWJhY2sgYnVmZmVyaW5nXG4gICAgICovXG4gICAgYnVmZmVyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUGxheWJhY2sgcG9zaXRpb25cbiAgICAgKi9cbiAgICBsYXN0UG9zaXRpb247XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwb3NpdGlvbiB3aGVuIG9uUGF1c2UgaXMgY2FsbGVkXG4gICAgICovXG4gICAgbGFzdFBvc2l0aW9uQmVmb3JlUGF1c2U7XG5cbiAgICAvKipcbiAgICAgKiBMYXN0IHNlZWsgcG9zaXRpb24sIHVzZWQgdG8gaGFuZGxlIGJhZCBwb3NpdGlvbiB3aGVuIG9uQnVmZmVyaW5nRW5kIGNhbGxlZFxuICAgICAqL1xuICAgIGxhc3RQb3NpdGlvbkFmdGVyU2VlaztcblxuICAgIC8qKlxuICAgICAqIEZpcnN0IGltYWdlIGRhdGVcbiAgICAgKi9cbiAgICBmaXJzdEltYWdlRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgdHJhY2tlclxuICAgICAqL1xuICAgIGN1cnJlbnRBZFRyYWNrZXI7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGFkIGJyZWFrIHRyYWNrZXJcbiAgICAgKi9cbiAgICBjdXJyZW50QWRCcmVha1RyYWNrZXI7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG91dC1vZi1iYW5kIGFkIHRyYWNrZXJzXG4gICAgICovXG4gICAgY3VycmVudE91dE9mQmFuZEFkVHJhY2tlcnM7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBvdXQtb2YtYmFuZCBhZCBicmVhayB0cmFja2Vyc1xuICAgICAqL1xuICAgIGN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnM7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGFkIGRhdGEgZm9yIGdldEN1cnJlbnRBZCgpXG4gICAgICovXG4gICAgY3VycmVudEFkRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgYnJlYWsgZGF0YSBmb3IgZ2V0Q3VycmVudEFkQnJlYWsoKVxuICAgICAqL1xuICAgIGN1cnJlbnRBZEJyZWFrRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEdvb2dsZSBQQUwgc2Vzc2lvblxuICAgICAqL1xuICAgIGFkUGFsU2Vzc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHNlc3Npb24gZmxhZ1xuICAgICAqL1xuICAgIGJrWW91U2Vzc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHNlc3Npb24gdG9rZW5cbiAgICAgKi9cbiAgICBzZXNzaW9uVG9rZW47XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBiYXNlIFVSTFxuICAgICAqL1xuICAgIGJhc2VVUkw7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZVxuICAgICAqL1xuICAgIG5vbmNlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWQgdHJhY2tpbmcgbm9uY2UgY3JlYXRpb24gZGF0ZVxuICAgICAqL1xuICAgIC8vIG5vbmNlRGF0ZVxuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWQgdHJhY2tpbmcgbm9uY2UgcmVxdWVzdFxuICAgICAqL1xuICAgIGFkUGFsU2Vzc2lvblJlcXVlc3Q7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBmaXJzdCBmdWxsIGFkIHRyYWNraW5nIGZpbGUgcmVjZWl2ZWRcbiAgICAgKi9cbiAgICBmaXJzdEZpbGVSZWNlaXZlZDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGZpcnN0IGZ1bGwgYWQgdHJhY2tpbmcgZmlsZSBwcm9jZWVkZWRcbiAgICAgKi9cbiAgICBmaXJzdEZpbGVQcm9jZWVkZWQ7XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgcG9kcyBzZW50IHRvIG9uQWREYXRhIGJlZm9yZSBmaXJzdEZpbGVQcm9jZWVkZWQgPT09IHRydWVcbiAgICAgKiBvbkFkRGF0YSBpcyByZWdpc3RlcmVkIHRocm91Z2ggc2Vzc2lvbi5zZXRBZERhdGFMaXN0ZW5lciguLi4pXG4gICAgICovXG4gICAgcG9kc1NlbnROdW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHJlZnJlc2ggZGVsYXkgdG8gdXBkYXRlIHRoZSB0cmFja2VycyBmcm9tIEJrWW91XG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBTRVNTSU9OX1VQREFURV9JTlRFUlZBTFxuICAgICAqL1xuICAgIHNlc3Npb25VcGRhdGVJbnRlcnZhbDtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIGhpc3RvcnkgZm9yIHdoZW4gcmVjZWl2aW5nIHRyYWNraW5nIGZpbGUgYXN5bmNocm9ub3VzbHlcbiAgICAgKiBGb3JtYXQ6IFt7c3RhcnQ6IDAsIGVuZDogMTAwMH0sIHtzdGFydDogMTIwMCwgZW5kOiAxODAwfSwgLi4uXVxuICAgICAqL1xuICAgIHBvc2l0aW9uSGlzdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHBsYXllckFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcblxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMuYWREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuYWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMub3V0T2ZCYW5kQWRMaXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5jdXJyZW50T3V0T2ZCYW5kQWRUcmFja2VycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMgPSBbXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlID0gMDtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWsgPSAwO1xuXG4gICAgICAgIHRoaXMuYmtZb3VTZXNzaW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ub25jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gdGhpcy5ub25jZURhdGUgPSAwO1xuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZmlyc3RGaWxlUmVjZWl2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2RzU2VudE51bWJlciA9IDA7XG5cbiAgICAgICAgdGhpcy5zZXNzaW9uVXBkYXRlSW50ZXJ2YWwgPSBBZFRyYWNraW5nTWFuYWdlci5TRVNTSU9OX1VQREFURV9JTlRFUlZBTDtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIHNlc3Npb24gb24gdGhlIEJrWW91XG4gICAgICogQ2FsbGVkIHdoZW4gc3RhcnRpbmcgYSBzZXNzaW9uIChkdXJpbmcgZ2V0VVJMIG9yIGZpcnN0IGltYWdlIGV2ZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIGJhc2VVUkwgTWFuaWZlc3QgYmFzZSBVUkxcbiAgICAgKiBAcGFyYW0gc2Vzc2lvblRva2VuIEJrWW91IHNlc3Npb24gdG9rZW5cbiAgICAgKiBAcGFyYW0gZGF0YSBCa1lvdSBKU09OXG4gICAgICogQHBhcmFtIGFkUGFsU2Vzc2lvbiBHb29nbGUgUEFMIHNlc3Npb24gZGF0YVxuICAgICAqIEBwYXJhbSBub25jZSBHb29nbGUgUEFMIG5vbmNlXG4gICAgICovXG4gICAgaW5pdEJrWW91U2Vzc2lvbihiYXNlVVJMLCBzZXNzaW9uVG9rZW4sIGRhdGEsIGFkUGFsU2Vzc2lvbiwgbm9uY2UpIHtcbiAgICAgICAgLy8gU3RvcmUgYmFzZSB1cmxcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZVVSTDtcblxuICAgICAgICAvLyBTZXQgQmtZb3Ugc2Vzc2lvblxuICAgICAgICB0aGlzLnNlc3Npb25Ub2tlbiA9IHNlc3Npb25Ub2tlbjtcbiAgICAgICAgdGhpcy5ia1lvdVNlc3Npb24gPSB0cnVlO1xuXG4gICAgICAgIC8vIEdldCBub25jZVxuICAgICAgICBpZiAoYWRQYWxTZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uID0gYWRQYWxTZXNzaW9uO1xuICAgICAgICAgICAgdGhpcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgQmtZb3UgZmlsZVxuICAgICAgICB0aGlzLnBhcnNlQWRQb2RzKGRhdGEpO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdCa1lvdSBzZXNzaW9uIGluaXRpYWxpemVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxvYWQgQmtZb3UgSlNPTlxuICAgICAqL1xuICAgIHVwZGF0ZUJrWW91U2Vzc2lvbigpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHJlcXVlc3QgaWYgc2Vzc2lvbiBoYXMgYmVlbiBzdG9wcGVkXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIuc3RvcHBlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmtZb3VTZXNzaW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVXBkYXRpbmcgYWQgdHJhY2tpbmcgZmlsZS4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBub25jZSB0byB0aGUgcmVxdWVzdCB1cmxcbiAgICAgICAgICAgIGxldCBhZFRyYWNraW5nVVJMID0gdGhpcy5iYXNlVVJMO1xuXG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgbmV3IG5vbmNlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgLyogaWYgKHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub25jZSA9IHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdC5hZFBhbFNlc3Npb24/LmdldE5vbmNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub25jZURhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZFBhbFNlc3Npb25SZXF1ZXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ05ldyBhZCBQQUwgc2Vzc2lvbiBub25jZSAnICsgdGhpcy5ub25jZSwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICBjb25zdCBzbWFydExpYlBhcmFtZXRlcnMgPSB0aGlzLmhhbmRsZXIuc21hcnRMaWIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IHNtYXJ0TGliUGFyYW1ldGVycy51c2VyQWdlbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkVHJhY2tpbmcodGhpcy5oYW5kbGVyLCBwYXJhbWV0ZXJzLCBhZFRyYWNraW5nVVJMLCB0cnVlKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCByZXF1ZXN0IGlmIHNlc3Npb24gaGFzIGJlZW4gc3RvcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyLnN0b3BwZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBhY3RpdmUga2VlcGFsaXZlIGpvYlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVTZXNzaW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVTZXNzaW9uSm9iKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaHR0cFN0YXR1cyA+PSAyMDAgJiYgcmVzdWx0Lmh0dHBTdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBCa1lvdSBKU09OIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHVwZGF0ZWQgZmlsZSB1bnJlYWRhYmxlJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQga2VlcGFsaXZlIGpvYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVJlY2VpdmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hc3luY0RlbGF5KHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3QgZmlsZSByZWNlaXZlZCAodXNlZCB0byBleGVjdXRlIGV2ZW50IGZyb20gZmlyc3QgaW1hZ2UgdG8gY3VycmVudCBwb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RGaWxlUmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBhZHMgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUFkUG9kcyhkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRGlzYWJsZWQ6IE5vIG5lZWQgdG8gdXBkYXRlIHRoZSBub25jZSwgb25seSAxIG5vbmNlIHBlciBzZXNzaW9uIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZCBicmVha3MgYWZ0ZXIgdXBkYXRlICh0byBiZSBjb21wYXJlZCB3aXRoIGFkQnJlYWtzQmVmb3JlVXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha3NBZnRlclVwZGF0ZSA9IHRoaXMuYmFzZUV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQudHJhY2tlciBpbnN0YW5jZW9mIEFkQnJlYWtCZWdpblRyYWNrZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhZCBicmVha3MgYXJlIGRpZmZlcmVudCwgZ2VuZXJhdGUgYSBuZXcgbm9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrc0JlZm9yZVVwZGF0ZS5sZW5ndGggIT09IGFkQnJlYWtzQWZ0ZXJVcGRhdGUubGVuZ3RoIHx8IERhdGUubm93KCkgLSB0aGlzLm5vbmNlRGF0ZSA+IEFkVHJhY2tpbmdNYW5hZ2VyLk5PTkNFX0VYUElSQVRJT05fVElNRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IG5vbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOb25jZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkQnJlYWtzQmVmb3JlVXBkYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtCZWZvcmVVcGRhdGUgPSBhZEJyZWFrc0JlZm9yZVVwZGF0ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha0FmdGVyVXBkYXRlID0gYWRCcmVha3NBZnRlclVwZGF0ZVtpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRCcmVha0JlZm9yZVVwZGF0ZS5hZEJyZWFrSWQgIT09IGFkQnJlYWtBZnRlclVwZGF0ZS5hZEJyZWFrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IG5vbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5vbmNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGlzIGxpdmUsIHJlc3RhcnQgdXBkYXRlIEJrWW91IGRhdGEgam9iXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGEga2VlcGFsaXZlIGpvYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hc3luY0RlbGF5KHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJrWW91U2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU3RvcHBpbmcgYWQgdHJhY2tpbmcgZmlsZSB1cGRhdGUgKFZPRCBzdHJlYW0pLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTdG9wcGluZyBhZCB0cmFja2luZyBmaWxlIHVwZGF0ZSAoc3RhdHVzIGNvZGUgJyArIHJlc3VsdC5odHRwU3RhdHVzICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiB1cGRhdGVOb25jZSgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1VwZGF0aW5nIG5vbmNlLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLm5vbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QgPSB0aGlzLmhhbmRsZXIuc21hcnRMaWIuaW50ZXJuYWxBZE1hbmFnZXIuZ2V0QWRQYWxTZXNzaW9uUmVxdWVzdCgpO1xuICAgIH0qL1xuXG4gICAgLyoqXG4gICAgICogSW4gc29tZSBjYXNlcywgYWRzIG1heSBvdmVybGFwXG4gICAgICogVGhpcyBpcyBiZWNhdXNlIHNvbWUgSExTIC8gREFTSCByZXByZXNlbnRhdGlvbnMgbWF5IGJlIGxvbmdlciB0aGFuIG90aGVycyAocGxheWVycyBzaG91bGQgYmUgcHJlcGFyZWQgZm9yIHRoaXM6IGZvciBleGFtcGxlIERBU0ggY3V0cyBiZWZvcmUgYWQgZW5kKVxuICAgICAqIEJrWW91IGZvcndhcmRzIGluZm8gYXMgaXNcbiAgICAgKiBUaGlzIG1ldGhvZCByZW1vdmVzIG92ZXJsYXAgYnkgc2hpZnRpbmcgbmV4dCBhZCBzdGFydCB0byBlbmQgb2YgY3VycmVudCBhZFxuICAgICAqIFxuICAgICAqIEFsc28sIHRoaXMgbWV0aG9kIHJlY29tcHV0ZXMgYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgKiAgLSB3aGV0aGVyIGR1ZSB0byBhZHMgb3ZlcmxhcCAoc2VlIGFib3ZlKVxuICAgICAqICAtIHdoZXRoZXIgZHVlIHRvIGFkcyBiZWluZyBhZGRlZCBpbiBhZCBicmVha1xuICAgICAqICAgICAgLSBkdXJpbmcgTElWRSBjb250ZW50c1xuICAgICAqICAgICAgLSBhZnRlciBub3RpZnlGaXJzdEltYWdlIGZvciBiay1tbD0yLjAgd29ya2Zsb3cgKExJVkUgb3IgVk9EKVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhZEJyZWFrIGFkIGJyZWFrIHRvIGZpeFxuICAgICAqL1xuICAgIGZpeEFkQnJlYWsoYWRCcmVhaykge1xuICAgICAgICBsZXQgbGFzdEFkO1xuICAgICAgICBhZEJyZWFrLmFkcy5mb3JFYWNoKChhZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRBZCA9IGFkQnJlYWsuYWRzW2luZGV4ICsgMV07XG4gICAgICAgICAgICBpZiAobmV4dEFkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QWRFbmQgPSBhZC5wb3NpdGlvbiArIGFkLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0QWQucG9zaXRpb24gPCBjdXJyZW50QWRFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIG92ZXJsYXAgZGV0ZWN0ZWQsIHBvc2l0aW9uIHVwZGF0ZWQgZnJvbSAnICsgbmV4dEFkLnBvc2l0aW9uICsgJyB0byAnICsgY3VycmVudEFkRW5kICsgJyAoaWQ6ICcgKyBuZXh0QWQuYWRJZCArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFkLnBvc2l0aW9uID0gY3VycmVudEFkRW5kO1xuICAgICAgICAgICAgICAgICAgICBuZXh0QWQuZXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC5wb3NpdGlvbiA8IGN1cnJlbnRBZEVuZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wb3NpdGlvbiA9IGN1cnJlbnRBZEVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEFkID0gYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsYXN0QWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWREdXJhdGlvbiA9IGxhc3RBZC5wb3NpdGlvbiArIGxhc3RBZC5kdXJhdGlvbiAtIGFkQnJlYWsucG9zaXRpb247XG4gICAgICAgICAgICBpZiAoYWRCcmVhay5kdXJhdGlvbiAhPT0gZXhwZWN0ZWREdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBkdXJhdGlvbiB1cGRhdGVkIGZyb20gJyArIGFkQnJlYWsuZHVyYXRpb24gKyAnIHRvICcgKyBleHBlY3RlZER1cmF0aW9uICsgJyAoaWQ6ICcgKyBhZEJyZWFrLmlkICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIGFkQnJlYWsuZHVyYXRpb24gPSBleHBlY3RlZER1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYWQgZGF0YSBKU09OIGFuZCBtZXJnZSB3aXRoIGV4aXN0aW5nIGFkIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIGFkIGRhdGEgSlNPTlxuICAgICAqIEBwYXJhbSBvb2JhIG91dC1vZi1iYW5kIGFkIHJlbGF0ZWQgZGF0YVxuICAgICAqL1xuICAgIHBhcnNlQWRQb2RzKGRhdGEsIG9vYmEpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblRva2VuID0gZGF0YVsnc2Vzc2lvbnRva2VuJ10gfHwgJyc7XG4gICAgICAgIGNvbnN0IHRpbWVSZWZlcmVuY2UgPSBkYXRhWyd0aW1lcmVmZXJlbmNlX21zJ10gfHwgMDtcblxuICAgICAgICBpZiAob29iYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTZXQgcmVmcmVzaCBkZWxheSBpZiBkZWZpbmVkICgyIHRvIDUgc2VjcylcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hEZWxheSA9IGRhdGFbJ3JlZnJlc2hfZGVsYXlfbXMnXSB8fCBBZFRyYWNraW5nTWFuYWdlci5TRVNTSU9OX1VQREFURV9JTlRFUlZBTDtcbiAgICAgICAgICAgIGlmIChyZWZyZXNoRGVsYXkgPj0gMjAwMCAmJiByZWZyZXNoRGVsYXkgPD0gQWRUcmFja2luZ01hbmFnZXIuU0VTU0lPTl9VUERBVEVfSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCA9IHJlZnJlc2hEZWxheTtcblxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTZXR0aW5nIHJlZnJlc2ggZGVsYXkgdG8gJyArIHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsICsgJ21zJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NldHRpbmcgcmVmcmVzaCBkZWxheSB0byAnICsgQWRUcmFja2luZ01hbmFnZXIuU0VTU0lPTl9VUERBVEVfSU5URVJWQUwgKyAnbXMgKGRlZmF1bHQgdmFsdWUpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkRGF0YVRyYWNrZXIgPSBuZXcgQWREYXRhVHJhY2tlcih0aGlzLCBzZXNzaW9uVG9rZW4sIHRpbWVSZWZlcmVuY2UpO1xuICAgICAgICBjb25zdCBhZFBvZHMgPSBkYXRhWydhZHBvZHMnXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWRQb2RzKSkge1xuICAgICAgICAgICAgYWRQb2RzLmZvckVhY2goYWRQb2QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtJZCA9IGFkUG9kWydpZCddIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGFkUG9kWydzdGFydHRpbWVfbXMnXSArIHRpbWVSZWZlcmVuY2U7XG4gICAgICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gYWRQb2RbJ2R1cmF0aW9uX21zJ10gfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHMgPSBhZFBvZFsnYWRzJ107XG4gICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha1RyYWNraW5nRXZlbnRzID0gYWRQb2RbJ2FkYnJlYWt0cmFja2luZ2V2ZW50cyddO1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFkIGJyZWFrXG4gICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha1RyYWNrZXIgPSBuZXcgQWRCcmVha1RyYWNrZXIoYWREYXRhVHJhY2tlciwgYWRCcmVha0lkLCBzdGFydFRpbWUsIGR1cmF0aW9uLCB0aGlzLmlzTGl2ZSgpLCBvb2JhKTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFkQnJlYWtUcmFja2luZ0V2ZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRCcmVha1RyYWNraW5nRXZlbnRzLmZvckVhY2goYWRCcmVha1RyYWNraW5nRXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2t1cmwgPSBhZEJyZWFrVHJhY2tpbmdFdmVudFsnY2FsbGJhY2t1cmwnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrdXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gYWRCcmVha1RyYWNraW5nRXZlbnRbJ3R5cGUnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZ2V0IHRpbWUgZm9yIGFkIGJyZWFrIGV2ZW50IHRyYWNrZXIgYmVjYXVzZSBzdGFydC9lbmQgdGltZXMgYXJlIGFscmVhZHkgaGFuZGxlZCBpbiBBZEJyZWFrVHJhY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtFdmVudFRyYWNrZXIgPSBuZXcgQWRCcmVha0V2ZW50VHJhY2tlcihhZEJyZWFrVHJhY2tlciwgdHlwZSwgY2FsbGJhY2t1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnRyYWNraW5nRXZlbnRzLnB1c2goYWRCcmVha0V2ZW50VHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIGFkc1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFkcykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRzLmZvckVhY2goKGFkLCBzZXF1ZW5jZU51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gYWRbJ3N0YXJ0dGltZV9tcyddICsgdGltZVJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gYWRbJ2R1cmF0aW9uX21zJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBhZFsndHJhY2tpbmdldmVudHMnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGFkZCBhZCB3aXRoIHRpbWVfbXMgZXF1YWwgdG8gMCwgaXQgbWVhbnMgaXQgaXMgbm90IGZ1bGx5IHByb2NlZWRlZCBieSB0aGUgQmtZb3VcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkQWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRzKSAmJiBldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRBZCA9IChzdGFydFRpbWUgPiAwICYmIGV2ZW50c1swXVsndGltZV9tcyddID4gMCkgfHwgc3RhcnRUaW1lID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBhZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSAhPT0gdW5kZWZpbmVkICYmIGR1cmF0aW9uICE9PSB1bmRlZmluZWQgJiYgaXNWYWxpZEFkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRUeXBlID0gQWRUeXBlLmdldEFkVHlwZShhZFsnYWR0eXBlJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraXBwYWJsZVRpbWUgPSBhZFsnc2tpcHBhYmxlX21zJ10gKyB0aW1lUmVmZXJlbmNlIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpcHBhYmxlID0gc2tpcHBhYmxlVGltZSAhPT0gMCAmJiBza2lwcGFibGVUaW1lICE9PSB1bmRlZmluZWQgJiYgc2tpcHBhYmxlVGltZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGl2ZUlkID0gYWRbJ2NyZWF0aXZlaWQnXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZElkID0gYWRbJ2FkaWQnXSArICctJyArIHN0YXJ0VGltZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2FibGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogYWQudmlkZW9jbGlja3M/LmNsaWNrdGhyb3VnaHVybCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlcnM6IGFkLnZpZGVvY2xpY2tzPy5jbGlja3RyYWNraW5nIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGljazogYWQudmlkZW9jbGlja3M/LmN1c3RvbWNsaWNrIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFZlcmlmaWNhdGlvbnMgPSBhZC5hZHZlcmlmaWNhdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlcmlmaWNhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFZlcmlmaWNhdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcjogZWxlbWVudC52ZW5kb3IgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqYXZhc2NyaXB0UmVzb3VyY2VzOiBlbGVtZW50LmphdmFzY3JpcHRyZXNvdXJjZXMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlUmVzb3VyY2VzOiBlbGVtZW50LmV4ZWN1dGFibGVyZXNvdXJjZXMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2luZ0V2ZW50czogZWxlbWVudC50cmFja2luZ2V2ZW50cyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblBhcmFtZXRlcnM6IGVsZW1lbnQudmVyaWZpY2F0aW9ucGFyYW1ldGVycyB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkTm9uTGluZWFySW5mbyA9IGFkWydub25saW5lYXJpbmZvJ10gfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vbkxpbmVhckluZm8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZE5vbkxpbmVhckluZm8uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFySW5mby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aXZlSWQ6IGVsZW1lbnQuY3JlYXRpdmVpZCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1Jlc291cmNlOiBlbGVtZW50LnN0YXRpY3Jlc291cmNlIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lUmVzb3VyY2U6IGVsZW1lbnQuaWZyYW1lcmVzb3VyY2UgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFBhcmFtZXRlcnM6IGVsZW1lbnQuYWRwYXJhbWV0ZXJzIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tpbmdFdmVudHM6IGVsZW1lbnQudHJhY2tpbmdldmVudHMgfHwgW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JVUkwgPSBhZFsnZXJyb3J1cmwnXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFRyYWNrZXIgPSBuZXcgQWRUcmFja2VyKGFkVHlwZSwgYWRCcmVha1RyYWNrZXIsIHNlcXVlbmNlTnVtYmVyLCBzdGFydFRpbWUsIGR1cmF0aW9uLCBza2lwcGFibGUsIHNraXBwYWJsZVRpbWUsIGNyZWF0aXZlSWQsIGFkSWQsIGNsaWNrYWJsZSwgdmVyaWZpY2F0aW9ucywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbkxpbmVhckluZm8sIGVycm9yVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZEJyZWFrVHJhY2tlci5hZHMucHVzaChhZFRyYWNrZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgY2FsbGJhY2sgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBldmVudFsnY2FsbGJhY2t1cmwnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGV2ZW50Wyd0eXBlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZlbnRbJ29mZnNldF9tcyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBldmVudFsndGltZV9tcyddICsgdGltZVJlZmVyZW5jZSB8fCBzdGFydFRpbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZEV2ZW50VHJhY2tlciA9IG5ldyBBZEV2ZW50VHJhY2tlcihhZFRyYWNrZXIsIHR5cGUsIHVybCwgb2Zmc2V0LCB0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRyYWNrZXIuZXZlbnRzLnB1c2goYWRFdmVudFRyYWNrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNlcGFyYXRlIGluLWJhbmQgYWRzIHdvcmtmbG93XG4gICAgICAgICAgICAgICAgaWYgKG9vYmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCBhZCBicmVhayB3aXRoIGFkc1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIuYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkRGF0YVRyYWNrZXIuYWRCcmVha3MucHVzaChhZEJyZWFrVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhZERhdGFUcmFja2VyLm91dE9mQmFuZEFkQnJlYWtzLnB1c2goYWRCcmVha1RyYWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZERhdGFUcmFja2VyLmFkQnJlYWtzLmZvckVhY2goYWRCcmVhayA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXhBZEJyZWFrKGFkQnJlYWspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXBhcmF0ZSBpbi1iYW5kIGFkcyB3b3JrZmxvd1xuICAgICAgICBpZiAob29iYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBBZGQgYWxsIGV2ZW50cyB0byB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgIGxldCBkYXRhVXBkYXRlZCA9IHRoaXMubWVyZ2VFdmVudHMoYWREYXRhVHJhY2tlcik7XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFkIGxpc3RcbiAgICAgICAgICAgIHRoaXMuYWRMaXN0ID0gdGhpcy5hZERhdGEuYWRCcmVha3MubWFwKGFkQnJlYWsgPT4gYWRCcmVhay50b0RhdGEoKSk7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgYWQgZGF0YSBldmVuIGlmIHRoZXJlIGlzIG5vIGFkIHBvZCAoQmtZb3Ugbm90IHN1cHBvcnRpbmcgYmstbWw9Mi4wKVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlBZERhdGFMaXN0ZW5lcihkYXRhVXBkYXRlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGQgb3V0LW9mLWJhbmQgYWRzIHRvIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgdGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3MgPSBbLi4udGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3MsIC4uLmFkRGF0YVRyYWNrZXIub3V0T2ZCYW5kQWRCcmVha3NdO1xuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBvdXQtb2YtYmFuZCBhZCBsaXN0XG4gICAgICAgICAgICB0aGlzLm91dE9mQmFuZEFkTGlzdCA9IHRoaXMuYWREYXRhLm91dE9mQmFuZEFkQnJlYWtzLm1hcChvdXRPZkJhbmRBZEJyZWFrID0+IG91dE9mQmFuZEFkQnJlYWsudG9EYXRhKCkpO1xuXG4gICAgICAgICAgICAvLyBTZW5kIG91dC1vZi1iYW5kIGFkIGRhdGFcbiAgICAgICAgICAgIHRoaXMubm90aWZ5T3V0T2ZCYW5kQWREYXRhTGlzdGVuZXIodGhpcy5vdXRPZkJhbmRBZExpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmVnaW5PdXRPZkJhbmRBZEJyZWFrKGFkQnJlYWtJZCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQ2FsbGluZyBiZWdpbk91dE9mQmFuZEFkQnJlYWsgd2l0aCBpZDogJyArIGFkQnJlYWtJZCwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tlciA9IHRoaXMuYWREYXRhLm91dE9mQmFuZEFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLmlkID09PSBhZEJyZWFrSWQpO1xuICAgICAgIFxuICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCBhZCBicmVhayBhbmQgYWRzIHBvc2l0aW9uIHRvIHBsYXllciBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnBvc2l0aW9uID0gcGxheWVyUG9zaXRpb247XG4gICAgICAgICAgICBhZEJyZWFrVHJhY2tlci5wcm9jZXNzQmVnaW4oKTtcbiAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLmFkcy5tYXAoYWRUcmFja2VyID0+IHtcbiAgICAgICAgICAgICAgICBhZFRyYWNrZXIucG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBhZFRyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkVHJhY2tlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ091dC1vZi1iYW5kIGFkIGJyZWFrIHdpdGggaWQgJyArIGFkQnJlYWtJZCArICcgbm90IGZvdW5kJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZE91dE9mQmFuZEFkQnJlYWsoYWRCcmVha0lkKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdDYWxsaW5nIGVuZE91dE9mQmFuZEFkQnJlYWsoKSB3aXRoIGlkOiAnICsgYWRCcmVha0lkLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3MuZmluZEluZGV4KGFkQnJlYWsgPT4gYWRCcmVhay5pZCA9PT0gYWRCcmVha0lkKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgYWRCcmVha1RyYWNrZXIgPSB0aGlzLmFkRGF0YS5vdXRPZkJhbmRBZEJyZWFrc1tpbmRleF07XG4gICAgICAgICAgICBhZEJyZWFrVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICBhZEJyZWFrVHJhY2tlci5hZHMuZm9yRWFjaChhZFRyYWNrZXIgPT4gYWRUcmFja2VyLnByb2Nlc3NFbmQoKSk7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRGVsZXRpbmcgb3V0LW9mLWJhbmQgYWQgYnJlYWsgd2l0aCBpZDogJyArIGFkQnJlYWtJZCwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIHRoaXMuYWREYXRhLm91dE9mQmFuZEFkQnJlYWtzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLncoVEFHLCAnT3V0LW9mLWJhbmQgYWQgYnJlYWsgd2l0aCBpZCAnICsgYWRCcmVha0lkICsgJyBub3QgZm91bmQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIHVwZGF0ZSBwb3NpdGlvbiBqb2JcbiAgICAgKi9cbiAgICBzdGFydChkZWxheSA9IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCwgcG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1N0YXJ0aW5nIGFkIHRyYWNraW5nLi4uJyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID0gSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFzeW5jRGVsYXkoZGVsYXksICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJ29uUG9zaXRpb25VcGRhdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkID8gcG9zaXRpb24gOiB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgdGhlIHVwZGF0ZSBwb3NpdGlvbiBqb2JcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51cGRhdGVQb3NpdGlvbkpvYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgcGF1c2VkIChwbGF5ZXIgZXZlbnQpJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhbmNlbCh0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgY29udGVudCBpcyBsaXZlIChvcGVuIG1hbmlmZXN0KVxuICAgICAqIEJlZm9yZSBmaXJzdCBpbWFnZSwgY29uc2lkZXIgYXMgVk9EIHRvIGFsd2F5cyBoYXZlIGFuIGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICogQWZ0ZXIgZmlyc3QgaW1hZ2UsIGNvbnNpZGVyIHRoZSBhY3R1YWwgY29udGVudCB0eXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgaXMgbGl2ZVxuICAgICAqL1xuICAgIGlzTGl2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RJbWFnZURhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyQWRhcHRlci5nZXREdXJhdGlvbigpIDw9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgbmV3IGV2ZW50cyB3aXRoIGN1cnJlbnQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBBbiBleGlzdGluZyBhZCBicmVhayBjYW4gdXBkYXRlIGl0cyBhZCBsaXN0LCBidXQgYW4gZXhpc3RpbmcgYWQgY2Fubm90IGJlIHJlbW92ZWQgb3IgdXBkYXRlZFxuICAgICAqIEFkIGJyZWFrcyBjYW4gYmUgYWRkZWQgZHVyaW5nIHRoZSBzZXNzaW9uXG4gICAgICogSWYgYW4gYWQgYnJlYWsgZG9lcyBub3QgYXBwZWFyIGFueW1vcmUgaW4gdGhlIEJreW91IGRhdGEsIGl0IGhhcyB0byBzdGF5IGluIG1lbW9yeVxuICAgICAqXG4gICAgICogQHBhcmFtIGFkRGF0YSBuZXcgZGF0YSByZWNlaXZlZCBieSB0aGUgQmtZb3VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIG5ldyBkYXRhIHN0b3JlZCBpbiBtZW1vcnlcbiAgICAgKi9cbiAgICBtZXJnZUV2ZW50cyhhZERhdGEpIHtcbiAgICAgICAgbGV0IGRhdGFVcGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IGFkIGRhdGEgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgaWYgKHRoaXMuYWREYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWREYXRhID0gYWREYXRhO1xuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCBhZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJyBhZCBicmVhayhzKSBwYXJzZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3QWRDb3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgZGVsZXRlZEFkQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYmFzZSBhZCBkYXRhXG4gICAgICAgICAgICB0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4gPSBhZERhdGEuc2Vzc2lvblRva2VuO1xuICAgICAgICAgICAgdGhpcy5hZERhdGEudGltZVJlZmVyZW5jZSA9IGFkRGF0YS50aW1lUmVmZXJlbmNlO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgZXhwaXJlZCBhZCBicmVha3NcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZHMgPSBhZERhdGEuYWRCcmVha3MubWFwKGFkQnJlYWsgPT4gYWRCcmVhay5pZCk7XG4gICAgICAgICAgICB0aGlzLmFkRGF0YS5hZEJyZWFrcy5mb3JFYWNoKChhZEJyZWFrLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhZCBicmVhayBmcm9tIG1lbW9yeSBub3QgcHJlc2VudCBpbiB1cGRhdGVkIGRhdGEgYW5kIG5vdCBwbGF5aW5nIHRoZSBhZCBicmVhaywgcmVtb3ZlIGl0XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50SWRzLmluY2x1ZGVzKGFkQnJlYWsuaWQpICYmIHRoaXMuY3VycmVudEFkVHJhY2tlcj8uYWRCcmVhay5pZCAhPT0gYWRCcmVhay5pZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjZXB0IGlmIEFEX1RSQUNLRVJTX1NUT1JFX0RVUkFUSU9OIGhhcyBiZWVuIHNldFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFRyYWNrZXJzUGVyaW9kID0gdGhpcy5oYW5kbGVyLm9wdGlvbnMuZ2V0KFN0cmVhbWluZ1Nlc3Npb25PcHRpb25zLkFEX1RSQUNLRVJTX1NUT1JFX0RVUkFUSU9OKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkVHJhY2tlcnNQZXJpb2QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkVHJhY2tlcnNQZXJpb2QgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCkgLSBhZFRyYWNrZXJzUGVyaW9kICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGFkQnJlYWsucG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKSA+IHN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEFkQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhZCBicmVha3MgKGR1cmF0aW9uLCBhZHMgbGlzdClcbiAgICAgICAgICAgIGFkRGF0YS5hZEJyZWFrcy5mb3JFYWNoKChhZEJyZWFrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhZCBkYXRhIHBvaW50ZXJcbiAgICAgICAgICAgICAgICBhZEJyZWFrLmFkRGF0YSA9IHRoaXMuYWREYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkIGJyZWFrIGluIG1lbW9yeSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QWRCcmVhayA9IHRoaXMuYWREYXRhLmFkQnJlYWtzLmZpbmQoY3VycmVudEFkQnJlYWsgPT4gY3VycmVudEFkQnJlYWsuaWQgPT09IGFkQnJlYWsuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWRCcmVhayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB1bi1leGlzdGluZyBhZHMgb25seVxuICAgICAgICAgICAgICAgICAgICBhZEJyZWFrLmFkcy5maWx0ZXIoYWQgPT4gY3VycmVudEFkQnJlYWsuYWRzLmZpbmQoY3VycmVudEFkID0+IGN1cnJlbnRBZC5hZElkID09PSBhZC5hZElkKSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCB0aGUgYWQgYXQgdGhlIGNvcnJlY3QgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBjb21lIGNhc2UsIHRoZSBTTEFURSAoZW5kIG9mIHRoZSBhZCBicmVhaykgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBpbnNlcnRpbmcgaW50ZXJtZWRpYXRlIGFkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydEluZGV4ID0gY3VycmVudEFkQnJlYWsuYWRzLmZpbmRJbmRleChjdXJyZW50QWQgPT4gY3VycmVudEFkLnBvc2l0aW9uID4gYWQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFkQnJlYWsuYWRzLnB1c2goYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBZEJyZWFrLmFkcy5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBZENvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYWQgcG9zaXRpb25zIGFuZCBhZCBicmVhayBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeEFkQnJlYWsoY3VycmVudEFkQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBlbmRlZCBmbGFnIHRvIHRydWUgaWYgYWQgYnJlYWsgZW5kZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudEFkQnJlYWsudXBkYXRlRW5kZWQoYWREYXRhLmxhc3RSZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBhZCBicmVha1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkRGF0YS5hZEJyZWFrcy5wdXNoKGFkQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBlbmRlZCBmbGFnIHRvIHRydWUgaWYgYWQgYnJlYWsgZW5kZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRCcmVhay51cGRhdGVFbmRlZChhZERhdGEubGFzdFJlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld0FkQ291bnQgKz0gYWRCcmVhay5hZHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgdGhpcy5hZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJyBhZCBicmVhayhzKSBpbiB0b3RhbCwgJyArIGFkRGF0YS5hZEJyZWFrcy5sZW5ndGggKyAnIGFkIGJyZWFrKHMpIHBhcnNlZCwgJyArIG5ld0FkQ291bnQgKyAnIG5ldyBhZChzKSwgJyArIFxuICAgICAgICAgICAgZGVsZXRlZEFkQ291bnQgKyAnIGRlbGV0ZWQgYWQocyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90aWZ5IGV2ZW50IGFycmF5IHVwZGF0ZWRcbiAgICAgICAgdGhpcy5ub3RpZnlBZHNVcGRhdGVkKHRoaXMuYWREYXRhKTtcblxuICAgICAgICAvLyBTdGFydCBpZiBuZWNlc3NhcnlcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCAmJiAhdGhpcy5wYXVzZWQgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBJZiB1cGRhdGUgcG9zaXRpb24gcHJvY2VzcyBzdG9wcGVkLCByZXNldCBsYXN0IHBvc2l0aW9uIHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWREYXRhLmhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uKSA+IDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgcmVzdW1lZCcsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXN1bWUgYXQgdGhlIGN1cnJlbnQgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzdGFydCB1cGRhdGUgcG9zaXRpb24gcHJvY2Vzc1xuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXJ0KCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGFkIGJyZWFrIGVuZGVkXG4gICAgICAgICAgICAvLyBPbmx5IGNoZWNrIGluIGNhc2Ugb2YgTElWRSwgZm9yIFZPRCBjb250ZW50cywgYWQgYnJlYWsgZW5kIGFscmVhZHkgdHJpZ2dlcmVkIHNpbmNlIGJyZWFrcyBhcmUgc3RhdGljXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBZEJyZWFrRW5kZWQocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFVcGRhdGVkO1xuICAgIH1cblxuICAgIG9uUG9zaXRpb25VcGRhdGVkKGN1cnJlbnRQb3NpdGlvbikge1xuICAgICAgICBsZXQgcG9zaXRpb25TdGFydCA9ICh0aGlzLmxhc3RQb3NpdGlvbiAhPT0gY3VycmVudFBvc2l0aW9uID8gdGhpcy5sYXN0UG9zaXRpb24gOiBjdXJyZW50UG9zaXRpb24gLSAxKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uRW5kID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICAgIC8vIElmIHRoZSBCa1lvdSBqc29uIGZpbGUgaXMgcmVjZWl2ZWQgYXN5bmNocm9ub3VzbHkgYWZ0ZXIgZmlyc3QgaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RGaWxlUmVjZWl2ZWQgPT09IHRydWUgJiYgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3MgYWxsIGV2ZW50cyBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIGFsbCBldmVudHMgc2luY2UgZmlyc3QgaW1hZ2UuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25IaXN0b3J5W3RoaXMucG9zaXRpb25IaXN0b3J5Lmxlbmd0aCAtIDFdLmVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gUGF0Y2ggZW5kIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPSBjdXJyZW50UG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5LmZvckVhY2gocGxheWluZ1BlcmlvZCA9PiB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0JldHdlZW4gJyArIHBsYXlpbmdQZXJpb2Quc3RhcnQgKyAnIGFuZCAnICsgcGxheWluZ1BlcmlvZC5lbmQsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwbGF5aW5nUGVyaW9kLnN0YXJ0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwbGF5aW5nUGVyaW9kLnN0YXJ0OyBpIDw9IHBsYXlpbmdQZXJpb2QuZW5kICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMOyBpICs9IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE1hdGgubWluKGksIHBsYXlpbmdQZXJpb2QuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1RyYWNraW5nIGNhdGNoLXVwIGZpbmlzaGVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvblN0YXJ0IDwgcG9zaXRpb25FbmQgJiYgKHBvc2l0aW9uRW5kIC0gcG9zaXRpb25TdGFydCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBIC8qIDIgKiBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwqLykge1xuICAgICAgICAgICAgLy8gRGVidWcgKHRvIGNvbW1lbnQgYmVmb3JlIHJlbGVhc2UpXG4gICAgICAgICAgICAvKiBjb25zdCBkU3RhcnQgPSAocG9zaXRpb25TdGFydCArIDEpO1xuICAgICAgICAgICAgY29uc3QgZEVuZCA9IHBvc2l0aW9uRW5kO1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgdHJhY2tlcnMgZnJvbSAnICsgTWF0aC5mbG9vcihkU3RhcnQgLyAxMDAwKSArICcuJyArXG4gICAgICAgICAgICAgICAgKGRTdGFydCAtIE1hdGguZmxvb3IoZFN0YXJ0IC8gMTAwMCkgKiAxMDAwKSArICdzZWNzIHRvICcgKyBNYXRoLmZsb29yKGRFbmQgLyAxMDAwKSArICcuJyArXG4gICAgICAgICAgICAgICAgKGRFbmQgLSBNYXRoLmZsb29yKGRFbmQgLyAxMDAwKSAqIDEwMDApICsgJ21zJywgdGhpcy5oYW5kbGVyLmlkKTsqL1xuXG4gICAgICAgICAgICAvLyBBZCBicmVhayBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgYWRCcmVha1RyYWNrZXIgPSB0aGlzLmFkRGF0YT8uYWRCcmVha3MuZmluZChhZEJyZWFrID0+IGFkQnJlYWsucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgJiYgcG9zaXRpb25FbmQgPCBhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEFkIGJyZWFrIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uICsgUFJFUEFSRV9ERUxUQVxuICAgICAgICAgICAgY29uc3QgbmV4dEFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGE/LmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fUFJFUEFSRV9ERUxUQSAmJiBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVuZCArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1BSRVBBUkVfREVMVEEgPCBhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEFkIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBhZFRyYWNrZXIgPSBhZEJyZWFrVHJhY2tlcj8uYWRzLmZpbmQoYWQgPT4gYWQucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgJiYgcG9zaXRpb25FbmQgPCBhZC5wb3NpdGlvbiArIGFkLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gQWQgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gKyBQUkVQQVJFX0RFTFRBXG4gICAgICAgICAgICBjb25zdCBuZXh0QWRUcmFja2VyID0gbmV4dEFkQnJlYWtUcmFja2VyPy5hZHMuZmluZChhZCA9PiBhZC5wb3NpdGlvbiA8PSBwb3NpdGlvbkVuZCArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1BSRVBBUkVfREVMVEEgJiYgXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbmQgKyBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9QUkVQQVJFX0RFTFRBIDwgYWQucG9zaXRpb24gKyBhZC5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIG5leHRBZEJyZWFrVHJhY2tlcj8ucHJvY2Vzc1ByZXBhcmUoKTtcbiAgICAgICAgICAgIG5leHRBZFRyYWNrZXI/LnByb2Nlc3NQcmVwYXJlKCk7XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluLWJhbmQgYWRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gICAgICAgICAgICAvLyBDdXJyZW50IHBvc2l0aW9uIGluIGFuIGFkXG4gICAgICAgICAgICBpZiAoYWRUcmFja2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnRlcmluZyBhbiBhZFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRW50ZXJpbmcgYWQgJyArIGFkVHJhY2tlci5hZElkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpcHBlZCA9IHBvc2l0aW9uU3RhcnQgLSBhZFRyYWNrZXIucG9zaXRpb24gPj0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbnRlcmluZyBhbiBhZCwgaGFuZGxlIHBvc2l0aW9uIHN0YXJ0IHByZWNpc2lvbiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGUgcG9zaXRpb24gc3RhcnQgZnJvbSAnICsgcG9zaXRpb25TdGFydCArICcgdG8gJyArIGFkVHJhY2tlci5wb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RhcnQgPSBhZFRyYWNrZXIucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU0tJUFBFRCcsIHNraXBwZWQsIHBvc2l0aW9uU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZERhdGEgPSBhZFRyYWNrZXIudG9EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhID0gYWRCcmVha1RyYWNrZXIudG9EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci5wcm9jZXNzQmVnaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RpZnkgYWQgc2tpcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHNraXBwZWQgKHByZXZpb3VzIHBvc2l0aW9uIHdhcyAnICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSArICdtcyBhZnRlciBhZCBzdGFydCknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlBZFNraXBwZWQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuLCBhZFRyYWNrZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPT09IGFkVHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgc2FtZSBhZFxuICAgICAgICAgICAgICAgICAgICBhZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyICE9PSBhZFRyYWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgYWRcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0NoYW5naW5nIGZyb20gYWQgJyArIHRoaXMuY3VycmVudEFkVHJhY2tlci5hZElkICsgJyB0byAnICsgYWRUcmFja2VyLmFkSWQgKyAnLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBhZCBwcm9ncmVzc2lvbiB0byAxLjBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkVHJhY2tlci5hZEJyZWFrLmlkID09PSB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRCcmVhay5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiArIHRoaXMuY3VycmVudEFkVHJhY2tlci5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZXhpdGluZyBhZCBiZWZvcmUgdGhlIGVuZCwgY291bnQgaXQgYXMgc2tpcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyLnByb2dyZXNzaW9uIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgc2tpcHBlZCAocHJvZ3Jlc3Npb24gbm90IGNvbXBsZXRlKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3VycmVudEFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcHJldmlvdXMgYWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnByb2Nlc3NFbmQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyBhZCBicmVha1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRUcmFja2VyLmFkQnJlYWsuaWQgIT09IHRoaXMuY3VycmVudEFkVHJhY2tlci5hZEJyZWFrLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRCcmVhay5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRCcmVhay51cGRhdGVFbmRlZCh0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gYWRUcmFja2VyLnRvRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha0RhdGEgPSBhZEJyZWFrVHJhY2tlci50b0RhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYWRCcmVha1RyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IGFkVHJhY2tlci50b0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGN1cnJlbnQgYWQgaWYgY2FuUHJvY2VzcygpIGFsbG93cyBpdFxuICAgICAgICAgICAgICAgICAgICBhZFRyYWNrZXIucHJvY2Vzc0JlZ2luKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgY2hhbmdpbmcgYWQgYWZ0ZXIgYSBzZWVrLCBhbmQgdGhlIHNlZWsgZW5kIHBvc2l0aW9uIGlzIG5vdCBjbG9zZSB0byB0aGUgYWQgc3RhcnQgcG9zaXRpb24sIGNvdW50IGl0IGFzIHNraXBwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uRW5kIC0gYWRUcmFja2VyLnBvc2l0aW9uID49IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBza2lwcGVkIChuZXcgcG9zaXRpb24gaXMgJyArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEgKyAnbXMgYWZ0ZXIgYWQgc3RhcnQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5QWRTa2lwcGVkKHRoaXMuYWREYXRhLnNlc3Npb25Ub2tlbiwgYWRUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzZWVrIHBvc2l0aW9uIHByZWNpc2lvbiBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKGFkVHJhY2tlci5wb3NpdGlvbiwgcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyID0gYWRUcmFja2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyID0gYWRCcmVha1RyYWNrZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEV4aXRpbmcgYWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0V4aXRpbmcgYWQgJyArIHRoaXMuY3VycmVudEFkVHJhY2tlci5hZElkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgcHJvZ3Jlc3Npb24gPiAxMDAlXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkVuZCAtICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb24pIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkVuZCA9IHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiArIHRoaXMuY3VycmVudEFkVHJhY2tlci5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEEgc2VlayBoYXBwZW5lZCBhbmQgdGhlIHBvc2l0aW9uIGNvdWxkIG5vdCBiZSBpbiB0aGUgYWQsIHRoZSBwcm9ncmVzc2lvbiBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWQgaW4gdGhlIHNlZWsgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uU3RhcnQgPj0gdGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZXhpdGluZyBhZCBiZWZvcmUgdGhlIGVuZCwgY291bnQgaXQgYXMgc2tpcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyLnByb2dyZXNzaW9uIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgc2tpcHBlZCAocHJvZ3Jlc3Npb24gbm90IGNvbXBsZXRlKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3VycmVudEFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBlbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIExJVkUgY29udGVudHMsIHdlIG5lZWQgdGhlIHJlc3BvbnNlIGZyb20gdGhlIEJrWW91IGlmIHRoZSBhZCBicmVhayBpcyBhY3R1YWxseSBkb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHNvbWUgY2FzZXMsIHdlIHJlY2VpdmUgdXBkYXRlZCB0cmFja2VycyB0b28gbGF0ZSwgc28gd2UgbmVlZCB0byB3YWl0IG5ld2VyIGRhdGEgYmVmb3JlIGFjdHVhbGx5IGNsb3NpbmcgdGhlIGFkXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBWT0QgY29udGVudHMsIGVuZCB0aGUgYnJlYWsgbm93XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrVHJhY2tlciA9PT0gdW5kZWZpbmVkICYmICF0aGlzLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlci51cGRhdGVFbmRlZCh0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXRpbmcgdGhlIGFkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0LW9mLWJhbmQgYWRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gICAgICAgICAgICBpZiAodGhpcy5hZERhdGE/Lm91dE9mQmFuZEFkQnJlYWtzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBPdXQtb2YtYmFuZCBhZCBicmVha3MgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gKGNhbiBoYXZlIG11bHRpcGxlIG9uZXMpXG4gICAgICAgICAgICAgICAgLy8gT25seSBpZiBkdXJhdGlvbiBpcyBwb3NpdGl2ZSwgdGhlIG90aGVycyBkb24ndCBkZXBlbmQgb24gcGxheWVyIHBvc2l0aW9uIChcInBhdXNlXCIgZm9yIGV4YW1wbGUpXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVBdFBvc2l0aW9uID0gYWQgPT4gXG4gICAgICAgICAgICAgICAgICAgIGFkLnByb2NlZWRlZFsxXSA9PT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgICAgICAgICBhZC5kdXJhdGlvbiA+IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgIGFkLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkVuZCA8IGFkLnBvc2l0aW9uICsgYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0T2ZCYW5kQWRCcmVha1RyYWNrZXJzID0gdGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3MuZmlsdGVyKGlzQWN0aXZlQXRQb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdXRPZkJhbmRBZFRyYWNrZXJzID0gb3V0T2ZCYW5kQWRCcmVha1RyYWNrZXJzLnJlZHVjZSgoYXJyYXksIG91dE9mQmFuZEFkQnJlYWtUcmFja2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uYXJyYXksIC4uLm91dE9mQmFuZEFkQnJlYWtUcmFja2VyLmFkcy5maWx0ZXIoaXNBY3RpdmVBdFBvc2l0aW9uKV07XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlcmUgY2FuIGJlIG11bHRpcGxlIG91dC1vZi1iYW5kIGFkIGJyZWFrcyAvIGFkcyBhdCBvbmNlLCBhbiBhcnJheSBpcyB1c2VkIHRvIHN0b3JlIGN1cnJlbnQgb25lc1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGFkIGJyZWFrcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICBvdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMuZm9yRWFjaChvdXRPZkJhbmRBZEJyZWFrVHJhY2tlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGhhcyBub3QgYmVnYW4geWV0XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMuZmluZChjdXJyZW50T3V0T2ZCYW5kQWRCcmVhayA9PiBjdXJyZW50T3V0T2ZCYW5kQWRCcmVhay5pZCA9PT0gb3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIuaWQpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVudGVyaW5nIG91dC1vZi1iYW5kIGFkIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRW50ZXJpbmcgb3V0LW9mLWJhbmQgYWQgYnJlYWsgJyArIG91dE9mQmFuZEFkQnJlYWtUcmFja2VyLmlkICsgJy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRPZkJhbmRBZEJyZWFrVHJhY2tlci5wcm9jZXNzQmVnaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2Vycy5wdXNoKG91dE9mQmFuZEFkQnJlYWtUcmFja2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBzYW1lIG91dC1vZi1iYW5kIGFkIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGFkcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICBvdXRPZkJhbmRBZFRyYWNrZXJzLmZvckVhY2gob3V0T2ZCYW5kQWRUcmFja2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaGFzIG5vdCBiZWdhbiB5ZXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE91dE9mQmFuZEFkVHJhY2tlcnMuZmluZChjdXJyZW50T3V0T2ZCYW5kQWQgPT4gY3VycmVudE91dE9mQmFuZEFkLmFkSWQgPT09IG91dE9mQmFuZEFkVHJhY2tlci5hZElkKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbnRlcmluZyBvdXQtb2YtYmFuZCBhZFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0T2ZCYW5kQWRUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3V0T2ZCYW5kQWRUcmFja2Vycy5wdXNoKG91dE9mQmFuZEFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgc2FtZSBvdXQtb2YtYmFuZCBhZFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0T2ZCYW5kQWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZW5kZWQgb3V0LW9mLWJhbmQgYWRzXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3V0T2ZCYW5kQWRUcmFja2Vycy5mb3JFYWNoKChjdXJyZW50T3V0T2ZCYW5kQWRUcmFja2VyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCBhbW9uZyB0aGUgb3V0LW9mLWJhbmQgYWQgYXQgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0T2ZCYW5kQWRUcmFja2Vycy5maW5kKG91dE9mQmFuZEFkID0+IG91dE9mQmFuZEFkLmFkSWQgPT09IGN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXIuYWRJZCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE91dE9mQmFuZEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZFRyYWNrZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGVuZGVkIG91dC1vZi1iYW5kIGFkIGJyZWFrc1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2Vycy5mb3JFYWNoKChjdXJyZW50T3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90IGFtb25nIHRoZSBvdXQtb2YtYmFuZCBhZCBicmVha3MgYXQgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0T2ZCYW5kQWRCcmVha1RyYWNrZXJzLmZpbmQob3V0T2ZCYW5kQWRCcmVhayA9PiBvdXRPZkJhbmRBZEJyZWFrLmlkID09PSBjdXJyZW50T3V0T2ZCYW5kQWRCcmVha1RyYWNrZXIuaWQpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2sgdG8gaW4tYmFuZCBhZHMgd29ya2Zsb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAgICAgICAgIC8vIEtlZXAgbGFzdCBwb3NpdGlvbiBmb3IgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICAgICAgICAvLyBJZiBldmVudHMgcmVtYWluaW5nLCBjb250aW51ZSB0aGUgdHJhY2tpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLmFkRGF0YT8uaGFzUmVtYWluaW5nQWRCcmVha3MocG9zaXRpb25FbmQpIHx8IHRoaXMuYWREYXRhPy5vdXRPZkJhbmRBZEJyZWFrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCAmJiAhdGhpcy5idWZmZXJpbmcpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPcHRpbWl6ZSB1cGRhdGUgdGltaW5nIGJ5IHN5bmNocm9uaXppbmcgd2l0aCBhZCBiZWdpbi9lbmQgaW5zdGVhZCBvZiB3YWl0aW5nIGRlZmF1bHQgMXMgaW50ZXJ2YWxzXG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbG93cyB0byB0cmlnZ2VyIHB1YmxpYyBldmVudHMgKG9uQWRCZWdpbiwgb25BZEVuZC4uLikgcHJlY2lzZWx5XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHVwZGF0ZSBoYXBwZW5zIHdpdGhpbiB0aGUgbmV4dCAxLjJzLCBzY2hlZHVsZSB0aGUgdXBkYXRlIHRvIGNvaW5jaWRlIHdpdGggdGhhdCBldmVudFxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgMS4ycyB0aHJlc2hvbGQgKDIwJSBidWZmZXIgb3ZlciBkZWZhdWx0IDFzIGludGVydmFsKSB0byBhdm9pZCBzY2hlZHVsaW5nIHVwZGF0ZXMgdG9vIGNsb3NlIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBhZCBiZWdpbi9lbmQgcG9zaXRpb24gaW5zdGVhZCBvZiBwbGF5ZXIgcG9zaXRpb24gYmVjYXVzZSBzb21lIHBsYXllcnMgdXBkYXRlIHRoZWlyIHBvc2l0aW9uIGFzeW5jaHJvbm91c2x5XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRVcGRhdGVUaW1lID0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0QWRUcmFja2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkSW5jb21pbmdUaW1lID0gbmV4dEFkVHJhY2tlci5wb3NpdGlvbiAtIGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZEluY29taW5nVGltZSA+IDAgJiYgYWRJbmNvbWluZ1RpbWUgPCBBZFRyYWNraW5nTWFuYWdlci5ORUFSX0FEX0RFTFRBKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFVwZGF0ZVRpbWUgPSBhZEluY29taW5nVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zaXRpb24gPSBuZXh0QWRUcmFja2VyLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wcmludERlYnVnTG9ncyhUQUcsICdBZCBpbmNvbWluZyBpbiAnICsgYWRJbmNvbWluZ1RpbWUgKyAnbXMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFJlbWFpbmluZ1RpbWUgPSBhZFRyYWNrZXIucG9zaXRpb24gKyBhZFRyYWNrZXIuZHVyYXRpb24gLSBjdXJyZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRSZW1haW5pbmdUaW1lID4gMCAmJiBhZFJlbWFpbmluZ1RpbWUgPCBBZFRyYWNraW5nTWFuYWdlci5ORUFSX0FEX0RFTFRBKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFVwZGF0ZVRpbWUgPSBhZFJlbWFpbmluZ1RpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvc2l0aW9uID0gYWRUcmFja2VyLnBvc2l0aW9uICsgYWRUcmFja2VyLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wcmludERlYnVnTG9ncyhUQUcsICdBZCBlbmRpbmcgaW4gJyArIGFkUmVtYWluaW5nVGltZSArICdtcycsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXh0VXBkYXRlVGltZSA9IE1hdGgucm91bmQobmV4dFVwZGF0ZVRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQobmV4dFVwZGF0ZVRpbWUsIG5leHRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHBhdXNlZCAocGxheWJhY2sgcGF1c2VkLCBvblBvc2l0aW9uVXBkYXRlZCknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHBhdXNlZCAobm8gbW9yZSBldmVudCwgb25Qb3NpdGlvblVwZGF0ZWQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkRGF0YT8uaGFzUmVtYWluaW5nQWRCcmVha3MocG9zaXRpb25FbmQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCAmJiAhdGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgdHJhY2tlcnMgZnJvbSAnICsgcG9zaXRpb25TdGFydCArICdtcyB0byAnICsgcG9zaXRpb25FbmQgKyAnbXMsIHJlc3VtaW5nIHRyYWNraW5nLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU3RhcnQocG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSkge1xuICAgICAgICAvLyBJZiBldmVudHMgcmVtYWluaW5nLCBjb250aW51ZSB0aGUgdHJhY2tpbmdcbiAgICAgICAgaWYgKHRoaXMuYWREYXRhPy5oYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbikgPiAwIHx8IHRoaXMuYWREYXRhPy5vdXRPZkJhbmRBZEJyZWFrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBwYXVzZWQgKG5vIG1vcmUgZXZlbnQsIGNoZWNrU3RhcnQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQWRCcmVha0VuZGVkKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBwb3NpdGlvblN0YXJ0ID0gKHRoaXMubGFzdFBvc2l0aW9uICE9PSBwb3NpdGlvbiA/IHRoaXMubGFzdFBvc2l0aW9uIDogcG9zaXRpb24gLSAxKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uRW5kID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uU3RhcnQgPCBwb3NpdGlvbkVuZCAmJiAocG9zaXRpb25FbmQgLSBwb3NpdGlvblN0YXJ0KSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEgLyogMiAqIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCovKSB7XG4gICAgICAgICAgICAvLyBBZCBicmVhayBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgYWRCcmVha1RyYWNrZXIgPSB0aGlzLmFkRGF0YT8uYWRCcmVha3MuZmluZChhZEJyZWFrID0+IGFkQnJlYWsucG9zaXRpb24gPD0gcG9zaXRpb25FbmQgJiYgcG9zaXRpb25FbmQgPCBhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkQnJlYWtUcmFja2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciAhPT0gdW5kZWZpbmVkICYmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb24gLSBwb3NpdGlvbkVuZCkgPCBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24odGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uLCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnByb2Nlc3NFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZERhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlci5wcm9jZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyLnVwZGF0ZUVuZGVkKHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBlbmQgZGV0ZWN0ZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBub3QgeWV0IGVuZGVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZFVzZXJJbnRlcmFjdGlvbihpbnRlcmFjdGlvblR5cGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyPy5jbGlja2FibGU/LnRyYWNrZXJzLmZvckVhY2godHJhY2tlciA9PiB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVxdWVzdGluZyBjbGljayB0cmFja2VyICcgKyB0cmFja2VyLmNsaWNrdXJsLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZEV2ZW50KHRoaXMuaGFuZGxlciwgdHJhY2tlci5jbGlja3VybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRBZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFkRGF0YTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50QWRCcmVhaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gdGhlIGNvbnRlbnQgd2l0aG91dCBhZHNcbiAgICAgKiBUaGlzIHBvc2l0aW9uIGNhbiBiZSBzYXZlZCB0byBiZSByZXN0b3JlZCBsYXRlciB0aHJvdWdoIGdldFBvc2l0aW9uRm9yUGxheWJhY2socG9zaXRpb25JbkJvb2ttYXJrKVxuICAgICAqIEZvciBWT0QgY29udGVudHMgb25seVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0gUG9zaXRpb24gaW4gdGhlIGNvbnRlbnQgd2l0aG91dCBhZHNcbiAgICAgKi9cbiAgICBnZXRQb3NpdGlvbkZvckJvb2ttYXJrKCkge1xuICAgICAgICAvLyBJZiB2b2QgY29udGVudCAoaS5lIGR1cmF0aW9uID4gMClcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IHBvc2l0aW9uIGlzIGluIGFuIGFkIGJyZWFrLCBzZXQgYm9va21hcmsgcG9zaXRpb24gdG8gdGhlIGFkIGJyZWFrIHN0YXJ0IHBvc2l0aW9uIChsYXN0IHJpZ2h0IHBvc2l0aW9uIGJlZm9yZSB0aGUgYWQpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWRCcmVhayA9IHRoaXMuYWRMaXN0LmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gPCBwb3NpdGlvbiAmJiBwb3NpdGlvbiA8PSBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWRCcmVhayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBjdXJyZW50QWRCcmVhay5zdGFydFBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBhZCBiZWZvcmUgdGhlIGN1cnJlbnQgcG9zaXRpb24sIHN1YnN0cmF0ZSB0aGUgYm9va21hcmsgcG9zaXRpb24gYnkgdGhlIGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLmFkTGlzdC5maWx0ZXIoYWRCcmVhayA9PiBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uIDwgcG9zaXRpb24pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goYWRCcmVhayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIC09IGFkQnJlYWsuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHBvc2l0aW9uIGluY2x1ZGluZyBjdXJyZW50IGFkcyB3aXRoIHRoZSBwb3NpdGlvbiBpbiB0aGUgY29udGVudCB3aXRob3V0IGFkc1xuICAgICAqIENhbiBiZSBjYWxsZWQgYWZ0ZXIgb3IgaW5zaWRlIG9uQWREYXRhXG4gICAgICogRm9yIFZPRCBjb250ZW50cyBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25JbkJvb2ttYXJrIHBvc2l0aW9uIGluIHRoZSBjb250ZW50IHdpdGhvdXQgYWQgKHdpdGggdGhlIHN0b3JlZCB2YWx1ZSBnb3QgZnJvbSB0aGUgbWV0aG9kIGdldFBvc2l0aW9uRm9yQm9va21hcmsoKSlcbiAgICAgKiBAcGFyYW0gYmVmb3JlQWRCcmVhayBpZiBzZXQgdG8gdHJ1ZSwgcmV0dXJuIHBvc2l0aW9uIGJlZm9yZSBhZCBicmVha1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFBvc2l0aW9uIGluY2x1ZGluZyBjdXJyZW50IGFkc1xuICAgICAqL1xuICAgIGdldFBvc2l0aW9uRm9yUGxheWJhY2socG9zaXRpb25JbkJvb2ttYXJrLCBiZWZvcmVBZEJyZWFrKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uSW5Cb29rbWFyaztcblxuICAgICAgICAvLyBTb3J0IGFkIGJyZWFrIGJ5IHN0YXJ0UG9zaXRpb25cbiAgICAgICAgY29uc3QgYWRMaXN0ID0gdGhpcy5hZExpc3Quc29ydCgoYSwgYikgPT4gYS5zdGFydFBvc2l0aW9uIC0gYi5zdGFydFBvc2l0aW9uKTtcblxuICAgICAgICBsZXQgbGFzdEFkQnJlYWs7XG4gICAgICAgIGZvciAobGV0IGFkQnJlYWsgb2YgYWRMaXN0KSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBhZCBicmVhayBpcyBhZnRlciB0aGUgcG9zaXRpb24sIHRoZSBjYWxjdWxhdGlvbiBpcyBkb25lXG4gICAgICAgICAgICBpZiAoYWRCcmVhay5zdGFydFBvc2l0aW9uID4gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWxzZSwgYWRkIHRoZSBjdXJyZW50IGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gYWRCcmVhay5kdXJhdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB3aXRoIGxhc3QgdXNlZCBhZCBicmVha1xuICAgICAgICAgICAgICAgIGxhc3RBZEJyZWFrID0gYWRCcmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiZWZvcmVBZEJyZWFrID09PSB0cnVlICYmIGxhc3RBZEJyZWFrICE9PSB1bmRlZmluZWQgJiYgcG9zaXRpb24gPT09IGxhc3RBZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBsYXN0QWRCcmVhay5kdXJhdGlvbiA/IGxhc3RBZEJyZWFrLnN0YXJ0UG9zaXRpb24gOiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHRvdGFsIGFkcyBkdXJhdGlvbiBpbiB0aGUgY29udGVudCwgaW4gbWlsbGlzZWNvbmRzXG4gICAgZ2V0VG90YWxBZHNEdXJhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRMaXN0LnJlZHVjZSgodG90YWwsIGFkQnJlYWspID0+IGFkQnJlYWsuZHVyYXRpb24gPCAwID8gdG90YWwgOiB0b3RhbCArIGFkQnJlYWsuZHVyYXRpb24sIDApO1xuICAgIH1cblxuICAgIG9uRmlyc3RJbWFnZShiaXRyYXRlLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIEluaXQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5LnB1c2goeyBzdGFydDogc3RhcnRQb3NpdGlvbn0pO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBlbmFibGVkIChsaXZlOicgKyB0aGlzLmlzTGl2ZSgpICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIC8vIFdvcmthcm91bmQgYmVjYXVzZSBCa1lvdSBub3QgcmV0dXJuaW5nIHZvZC9saXZlIGluIHRyYWNraW5nXG4gICAgICAgIC8vIFdoZW4gYWNjZXNzaW5nIHRoZSB0cmFja2luZyBmaWxlIGJlZm9yZSBvcGVuaW5nIHRoZSBtYW5pZmVzdCAoYmstbWw9Mi4wIHdvcmtmbG93KSwgd2UgZG9uJ3Qga25vdyBpZiB0aGUgY29udGVudCBpcyBsaXZlIG9yIHZvZFxuICAgICAgICAvLyBJbiBjYXNlIG9mIGxpdmUsIGFkIGJyZWFrIGR1cmF0aW9uIGlzIC0xXG4gICAgICAgIGlmICh0aGlzLmFkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkTGlzdCA9IHRoaXMuYWREYXRhLmFkQnJlYWtzLm1hcChhZEJyZWFrID0+IHtcbiAgICAgICAgICAgICAgICBhZEJyZWFrLmxpdmUgPSB0aGlzLmlzTGl2ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkQnJlYWsudG9EYXRhKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0IGlmIG5lY2Vzc2FyeVxuICAgICAgICB0aGlzLmNoZWNrU3RhcnQoc3RhcnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIEJrWW91IHNlc3Npb25cbiAgICAgICAgdGhpcy51cGRhdGVCa1lvdVNlc3Npb24oKTtcblxuICAgICAgICAvLyBTaG93IGVycm9yIGlmIHRoZSBjb250ZW50IGlzIExJVkUgYnV0IHRoZSBkdXJhdGlvbiBpcyBub3QgYSB0aW1lc3RhbXBcbiAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkgJiYgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkgPCAxMjYyMzAwNDAwMDAwKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnVGhlIHBsYXllciBwb3NpdGlvbiBkb2VzIG5vdCByZXR1cm4gYSBwb3NpdGlvbiBhcyBhIHRpbWVzdGFtcCBpbiBtaWxsaXMuIFRoZSBhZCB0cmFja2luZyBtaWdodCBub3Qgd29yay4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBQQUwgU0RLIEFQSSB0aHJvdWdoIHRhcmdldCBhZFBhbFNlc3Npb25cbiAgICAgICAgdGhpcy5hZFBhbFNlc3Npb24/LnNlbmRQbGF5YmFja1N0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25QYXVzZSgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5idWZmZXJpbmcgJiYgIXRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBwYXVzZWQgcG9zaXRpb25cbiAgICAgICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uICE9PSBwbGF5ZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwbGF5ZXJQb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3JpbmcgcGxheWVyIHBvc2l0aW9uICcgKyBwbGF5ZXJQb3NpdGlvbiArICcsIGFscmVhZHkgcHJvY2VlZGVkLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcGxheWVyUG9zaXRpb247XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UgPSB0aGlzLmxhc3RQb3NpdGlvbjsgLy8gaWYgcGxheWluZyA/XG4gICAgfVxuXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIC8vIFN0YXJ0IGlmIG5lY2Vzc2FyeVxuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBTYXZlIHN0YXJ0IHBvc2l0aW9uIGZvciBhc3luYyB3b3JrZmxvd1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5LnB1c2goeyBzdGFydDogdGhpcy5sYXN0UG9zaXRpb259KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIGJhZCBwb3NpdGlvbiB3aGVuIHJlc3VtaW5nXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0UG9zaXRpb24gLSB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlKSA8IDEwMDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmV2ZXJ0aW5nIHBvc2l0aW9uIGJlY2F1c2Ugb2YgYmFkIHBvc2l0aW9uIHdoZW4gcmVzdW1pbmcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbkJlZm9yZVBhdXNlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnVmZmVyaW5nU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nID09PSBmYWxzZSAmJiB0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIFBsYXliYWNrIGhhcyBzdG9wcGVkXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeVt0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggLSAxXS5lbmQgPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBidWZmZXJpbmcgcG9zaXRpb25cbiAgICAgICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uICE9PSBwbGF5ZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwbGF5ZXJQb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3JpbmcgcGxheWVyIHBvc2l0aW9uICcgKyBwbGF5ZXJQb3NpdGlvbiArICcsIGFscmVhZHkgcHJvY2VlZGVkLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcGxheWVyUG9zaXRpb247XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdFbmQocGxheWluZykge1xuICAgICAgICAvLyBTdGFydCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgLy8gU29tZXRpbWVzIHRoZSBwbGF5ZXIgaXMgdXBkYXRpbmcgaXRzIHBvc2l0aW9uIGF0IGJ1ZmZlcmluZyBlbmQgKHBlcmlvZCBzd2l0Y2gpXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBTYXZlIHBvc2l0aW9uIGZvciBhc3luYyB3b3JrZmxvd1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggPiAwICYmIHRoaXMucG9zaXRpb25IaXN0b3J5W3RoaXMucG9zaXRpb25IaXN0b3J5Lmxlbmd0aCAtIDFdLmVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhdGNoIGVuZCBpZiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5W3RoaXMucG9zaXRpb25IaXN0b3J5Lmxlbmd0aCAtIDFdLmVuZCA9IHRoaXMubGFzdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeS5wdXNoKHtzdGFydDogcGxheWVyUG9zaXRpb259KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uICE9PSBwbGF5ZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQb3NpdGlvbiB1cGRhdGVkIGR1cmluZyBidWZmZXJpbmcsIHBlcmlvZCBzd2l0Y2ggPycsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwbGF5ZXJQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBwb3NpdGlvbiBzZWVrIGJldHdlZW4gMiBwZXJpb2RzIChoYXBwZW5zIG9uIHNvbWUgcGxheWVycylcbiAgICAgICAgICAgIC8qIGlmIChNYXRoLmFicyh0aGlzLmxhc3RQb3NpdGlvbiAtIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlQnVmZmVyaW5nKSA8IDEwMDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmV2ZXJ0aW5nIHBvc2l0aW9uIGJlY2F1c2Ugb2YgcGVyaW9kIHN3aXRjaC4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlQnVmZmVyaW5nO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlQnVmZmVyaW5nID0gMDtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFkIHBvc2l0aW9uIGFmdGVyIHNlZWsgKGhhcHBlbnMgb24gc29tZSBwbGF5ZXJzKVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdFBvc2l0aW9uIC0gdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWspIDwgMTAwMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXZlcnRpbmcgcG9zaXRpb24gYmVjYXVzZSBvZiBzZWVrLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWs7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWsgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXllclNlZWsoc3RhcnQsIGVuZCwgbGFzdFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChlbmQgPCBzdGFydCkge1xuICAgICAgICAgICAgLy8gQmFja3dhcmQgc2Vla1xuICAgICAgICAgICAgLy8gSWdub3JlIGlmIDwgMiBzZWNvbmRzIChwZXJpb2Qgc3dpdGNoIGVycm9yKVxuICAgICAgICAgICAgaWYgKHN0YXJ0IC0gZW5kIDwgMjAwMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJZ25vcmluZyBzZWVrLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQoc3RhcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVsc2UgcmVzZXQgdHJhY2tlcnNcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXNldCBhZCB0cmFja2VycyB3aXRoIHBvc2l0aW9uICcgKyBlbmQsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICB0aGlzLmFkRGF0YT8ucmVzZXRQcm9ncmVzc2lvbihlbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yd2FyZCBzZWVrXG4gICAgICAgICAgICAvLyBDYXRjaC11cCBldmVudHMgZnJvbSBzZWVrIHN0YXJ0IChvciBidWZmZXJpbmcgc3RhcnQpIHRvIHNlZWsgZW5kXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU21hbGwgc2VlayBkZXRlY3RlZCwgcHJvY2VlZGluZyBldmVudHMgZnJvbSAnICsgbGFzdFBvc2l0aW9uICsgJyB0byAnICsgZW5kLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxhc3RQb3NpdGlvbjsgaSA8PSBlbmQ7IGkgKz0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXRoLm1pbihpICsgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMLCBlbmQpO1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdCZXR3ZWVuICcgKyBpICsgJyBhbmQgJyArIHBvc2l0aW9uLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgb25TZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgLy8gU2F2ZSBwb3NpdGlvbiBmb3IgYXN5bmMgd29ya2Zsb3dcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID09PSBmYWxzZSAmJiB0aGlzLmJ1ZmZlcmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25IaXN0b3J5W3RoaXMucG9zaXRpb25IaXN0b3J5Lmxlbmd0aCAtIDFdLmVuZCA9IHN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkhpc3RvcnkucHVzaCh7c3RhcnQ6IGVuZH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgcmVtZW1iZXIgd2hhdCB0aGlzIGlzIGRvaW5nLi4uXG4gICAgICAgIC8vICAgSWYgYnVmZmVyaW5nLCB1c2UgcG9zaXRpb24gZnJvbSBidWZmZXJpbmcgc3RhcnQgaW5zdGVhZCBvZiBzZWVrIHN0YXJ0IChmaXggYSBwbGF5ZXIgYmVoYXZpb3IpXG4gICAgICAgIC8vICAgSWYgbm90IGJ1ZmZlcmluZywgdGhpcyBjb25kaXRpb24gd2lsbCBuZXZlciBiZSB0cnVlIEkgZ3Vlc3Mgc2luY2UgbGFzdFBvc2l0aW9uIGlzIHVwZGF0ZSBldmVyeSBzZWNvbmRcbiAgICAgICAgaWYgKHN0YXJ0IDwgdGhpcy5sYXN0UG9zaXRpb24gJiYgdGhpcy5sYXN0UG9zaXRpb24gLSBzdGFydCA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGluZyBzZWVrIHN0YXJ0IHBvc2l0aW9uIGZyb20gJyArIHN0YXJ0ICsgJyB0byAnICsgdGhpcy5sYXN0UG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMubGFzdFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhc3RQb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFkIHBvc2l0aW9uIHdoZW4gc2Vla2luZyB3aGVuIG9uQnVmZmVyaW5nRW5kIGlzIGNhbGxlZFxuICAgICAgICAgICAgLy8gV2hlbiBidWZmZXJpbmcgZW5kLCBzZXQgdGhpcy5sYXN0UG9zaXRpb24gdG8gdGhlIGVuZCBzZWVrIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlayA9IGVuZDtcblxuICAgICAgICAgICAgLy8gU2V0dGluZyB0byBidWZmZXJpbmcgc3RhcnQsIGxhc3QgcG9zaXRpb24gaXMgdXBkYXRlZCBpbiBzdGFydCBidWZmZXJpbmcgZXZlbnRcbiAgICAgICAgICAgIGxhc3RQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgbm90IGJ1ZmZlcmluZywgcHJvY2VzcyBldmVudHMgYmVmb3JlIHNlZWtpbmdcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3RQb3NpdGlvbiAtIHN0YXJ0KSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXR0aW5nIHRvIHN0YXJ0IGJlY2F1c2UgaWYgdXBkYXRlIHByb2Nlc3MgaXMgbm90IHJ1bm5pbmcsIGxhc3QgcG9zaXRpb24gY2FuIGJlIHdheSBiYWNrIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAvLyBGb3IgaW5zdGFuY2Ugc2VlayB0byBhIGJ1ZmZlcmVkIHBvc2l0aW9uXG4gICAgICAgICAgICBsYXN0UG9zaXRpb24gPSBzdGFydDtcblxuICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWsgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRyYWNraW5nIHBvc2l0aW9uXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gZW5kO1xuXG4gICAgICAgIC8vIEhhbmRsZSBzZWVrIGR1cmluZyBwZXJpb2Qgc3dpdGNoLCB0aGUgcGxheWVyIGNhbiBnZW5lcmF0ZSBzbWFsbCBzZWVrICg8IDYgc2VjcykgYW5kIGl0IGhhcyB0byBiZSBkaXN0aW5ndWlzaGVkIGZyb20gYSB1c2VyIHNlZWtcbiAgICAgICAgaWYgKE1hdGguYWJzKGVuZCAtIHN0YXJ0KSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGxheWVyU2VlayhzdGFydCwgZW5kLCBsYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90aWZ5IHNraXAgZXZlbiB0aG91Z2ggd2UgbWlnaHQgc3RpbGwgYmUgaW4gdGhlIHNhbWUgYWRcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuY3VycmVudEFkVHJhY2tlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBzZWVrZWQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChlbmQpO1xuXG4gICAgICAgIC8vIFJlc2V0IHByb2dyZXNzaW9uXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXNldCBhZCB0cmFja2VycyB3aXRoIHBvc2l0aW9uICcgKyBlbmQsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIHRoaXMuYWREYXRhPy5yZXNldFByb2dyZXNzaW9uKGVuZCk7XG4gICAgfVxuXG4gICAgb25TdG9wKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgLy8gU3RvcCB0cmFja2luZ1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBzdG9wIHBvc2l0aW9uXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQodGhpcy5sYXN0UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIFN0b3AgYWQgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gU3RvcCBzZXNzaW9uIHVwZGF0ZVxuICAgICAgICBpZiAodGhpcy51cGRhdGVTZXNzaW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVTZXNzaW9uSm9iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgUEFMIFNESyBBUEkgdGhyb3VnaCB0YXJnZXQgYWRQYWxTZXNzaW9uXG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uPy5zZW5kUGxheWJhY2tFbmQoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5saXN0ZW5lcnMuaW5jbHVkZXMobGlzdGVuZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5RXZlbnQobGlzdGVuZXIsIGV2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyW2V2ZW50TmFtZV0oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlBZEJyZWFrRGF0YShhZEJyZWFrRGF0YSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkQnJlYWtEYXRhJywgYWRCcmVha0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZEJyZWFrQmVnaW4oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRCcmVha0JlZ2luJywgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWREYXRhKGFkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWREYXRhJywgYWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZEJlZ2luKHNlc3Npb25Ub2tlbiwgYWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZEJlZ2luJywgc2Vzc2lvblRva2VuLCBhZC5jcmVhdGl2ZUlkLCBhZC5hZElkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2FsbCBQQUwgU0RLIEFQSSB0aHJvdWdoIHRhcmdldCBhZFBhbFNlc3Npb25cbiAgICAgICAgLy8gRGVwcmVjYXRlZCBpbiBsYXRlc3QgdmVyc2lvbnMsIGtlcHQgZm9yIHJldHJvY29tcGF0aWJpbGl0eVxuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvbj8uc2VuZEFkSW1wcmVzc2lvbigpO1xuICAgIH1cblxuICAgIG5vdGlmeUFkU2tpcHBhYmxlKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkU2tpcHBhYmxlJywgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRQcm9ncmVzcyhzZXNzaW9uVG9rZW4sIGFkLCBwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkUHJvZ3Jlc3MnLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQsIHByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRTa2lwcGVkKHNlc3Npb25Ub2tlbiwgYWQpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJTa2lwcGVkQWRJZHMgPSBbXTtcbiAgICAgICAgYWQuYWRCcmVhay5hZHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG90aGVyIGFkcyB3ZXJlIHNraXBwZWQgZm9sbG93aW5nIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICAgICAgLy8gYWQgcG9zaXRpb24gPiBjdXJyZW50IGFkIHBvc2l0aW9uXG4gICAgICAgICAgICAvLyBwbGF5ZXIgcG9zaXRpb24gPiBhZCBwb3NpdGlvbiArIGFkIGR1cmF0aW9uIChmdWxsIGFkKVxuICAgICAgICAgICAgaWYgKGUucG9zaXRpb24gPiBhZC5wb3NpdGlvbiAmJiB0aGlzLmxhc3RQb3NpdGlvbiA+PSBlLnBvc2l0aW9uICsgZS5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIG90aGVyU2tpcHBlZEFkSWRzLnB1c2goZS5hZElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZFNraXBwZWQnLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQsIG90aGVyU2tpcHBlZEFkSWRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRFbmQoc2Vzc2lvblRva2VuLCBhZCkge1xuICAgICAgICAvLyBGb3JjZSBzZXNzaW9uIHVwZGF0ZSBhdCBhZCBlbmQgKHVzZWZ1bCBmb3Igc21hbGwgc2VnbWVudCBjb250ZW50cylcbiAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVTZXNzaW9uSm9iKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVCa1lvdVNlc3Npb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRFbmQnLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZEJyZWFrRW5kKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkQnJlYWtFbmQnLCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZHNVcGRhdGVkKGFkRGF0YSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkc1VwZGF0ZWQnLCBhZERhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGV2ZW50IG9uQWREYXRhIHJlZ2lzdGVyZWQgdGhyb3VnaCBzZXNzaW9uLnNldEFkRGF0YUxpc3RlbmVyKC4uLilcbiAgICAgKiBJZiBkYXRhIGFyZSBhbHJlYWR5IHNlbnQsIGRvIG5vdCBzZW5kIGl0IHR3aWNlXG4gICAgICovXG4gICAgbm90aWZ5QWREYXRhTGlzdGVuZXIoZGF0YVVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RJbWFnZURhdGUgPSB0aGlzLmZpcnN0SW1hZ2VEYXRlIHx8IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGZpcnN0RGF0YSA9IHRoaXMucG9kc1NlbnROdW1iZXIgPT09IDAgJiYgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPT09IGZhbHNlICYmIERhdGUubm93KCkgLSBmaXJzdEltYWdlRGF0ZSA8PSBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TVEFSVF9ERUxUQTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ09uIGFkIGRhdGEgKGZpcnN0RGF0YTogJyArIGZpcnN0RGF0YSArICcsIGRhdGFVcGRhdGVkOiAnICsgZGF0YVVwZGF0ZWQgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgaWYgKGZpcnN0RGF0YSA9PT0gdHJ1ZSB8fCBkYXRhVXBkYXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5wb2RzU2VudE51bWJlciA9IHRoaXMuYWRMaXN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ09uIGFkIGRhdGEgKGxlbmd0aDogJyArIHRoaXMucG9kc1NlbnROdW1iZXIgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyLmFkU2Vzc2lvbj8uYWREYXRhTGlzdGVuZXI/Lm9uQWREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuYWRTZXNzaW9uLmFkRGF0YUxpc3RlbmVyLm9uQWREYXRhKHRoaXMuYWRMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgZXZlbnQgb25PdXRPZkJhbmRBZERhdGEgcmVnaXN0ZXJlZCB0aHJvdWdoIHNlc3Npb24uc2V0T25BZERhdGFMaXN0ZW5lciguLi4pXG4gICAgICovXG4gICAgbm90aWZ5T3V0T2ZCYW5kQWREYXRhTGlzdGVuZXIob3V0T2ZCYW5kQWRMaXN0KSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIuYWRTZXNzaW9uPy5hZERhdGFMaXN0ZW5lcj8ub25PdXRPZkJhbmRBZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ091dC1vZi1iYW5kIGFkIGJyZWFrcyB1cGRhdGVkLCBub3RpZnlpbmcgb25PdXRPZkJhbmRBZERhdGEnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmFkU2Vzc2lvbi5hZERhdGFMaXN0ZW5lci5vbk91dE9mQmFuZEFkRGF0YShvdXRPZkJhbmRBZExpc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ091dC1vZi1iYW5kIGFkIGJyZWFrcyB1cGRhdGVkLCBhZGQgb25PdXRPZkJhbmRBZERhdGEgbGlzdGVuZXIgdG8gYWNjZXNzIGN1cnJlbnQgbGlzdCcsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0T3V0T2ZCYW5kQWRzKG5hbWUsIGR1cmF0aW9uLCBhdXRvQmVnaW4sIGFkZGl0aW9uYWxRdWVyeVBhcmFtcykge1xuICAgICAgICBjb25zdCBhZEdhdGV3YXlVUkwgPSBVUkwuY2xvbmUodGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQucmVkaXJlY3RlZFVSTCk7XG5cbiAgICAgICAgYWRHYXRld2F5VVJMLnNldFBhcmFtKCdiay1tbCcsICcxLjAnKTtcbiAgICAgICAgYWRHYXRld2F5VVJMLnNldFBhcmFtKCdiay1vb2JhJywgbmFtZSk7XG5cbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkR2F0ZXdheVVSTC5zZXRQYXJhbSgnYmstb29iYS1kdXInLCBkdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkaXRpb25hbFF1ZXJ5UGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFkZGl0aW9uYWxRdWVyeVBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICBhZEdhdGV3YXlVUkwuc2V0UGFyYW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU2VuZGluZyByZXF1ZXN0IHRvIHRoZSBhZCBnYXRld2F5OiAnICsgYWRHYXRld2F5VVJMLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IFJlcXVlc3RNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SGVhZGVycygpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVxdWVzdCBhZCBnYXRld2F5IHdpdGggNXMgdGltZW91dFxuICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXN5bmNHZXQoYWRHYXRld2F5VVJMLmhyZWYsIGhlYWRlcnMsIEFkVHJhY2tpbmdNYW5hZ2VyLk9PQkFfUkVRVUVTVF9USU1FT1VULCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGdhdGV3YXkgcmVzcG9uZGVkICcgKyByZXN1bHQuc3RhdHVzQ29kZSwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIC8vIFBhcnNlIGFkIGRhdGFcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzQ29kZSA+PSAyMDAgJiYgcmVzdWx0LnN0YXR1c0NvZGUgPCAzMDApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuYm9keSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgZ2F0ZXdheSBmaWxlIHVucmVhZGFibGUgKHBhcnNpbmcpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IHdpdGggZW1wdHkgbGlzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU91dE9mQmFuZEFkRGF0YUxpc3RlbmVyKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgcGFyYW1ldGVycyB1c2VkIGZvciByZXF1ZXN0aW5nIG91dC1vZi1iYW5kIGFkc1xuICAgICAgICAgICAgICAgIGNvbnN0IG9vYmEgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYXV0b0JlZ2luOiBhdXRvQmVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxRdWVyeVBhcmFtczogYWRkaXRpb25hbFF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VBZFBvZHMoZGF0YSwgb29iYSk7XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IHN0YXJ0IG5ld2x5IGNyZWF0ZWQgYWQgYnJlYWtzXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9CZWdpbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAncmVxdWVzdE91dE9mQmFuZEFkcyBhdXRvQmVnaW4gc2V0IHRvIHRydWUsIGNhbGxpbmcgYmVnaW5PdXRPZkJhbmRBZEJyZWFrIG5vdycsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ2FkcG9kcyddLmZvckVhY2goYWRwb2QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbk91dE9mQmFuZEFkQnJlYWsoYWRwb2RbJ2lkJ10pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAncmVxdWVzdE91dE9mQmFuZEFkcyBhdXRvQmVnaW4gc2V0IHRvIGZhbHNlLCBjYWxsIGJlZ2luT3V0T2ZCYW5kQWRCcmVhayB0byBiZWdpbiBhZCBicmVha3MnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGdhdGV3YXkgcmVzcG9uc2UgdW5yZWFkYWJsZSAoc3RhdHVzIGNvZGUpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAvLyBOb3RpZnkgd2l0aCBlbXB0eSBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPdXRPZkJhbmRBZERhdGFMaXN0ZW5lcihbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbmRUcmFja2VyKHRyYWNraW5nRXZlbnROYW1lLCBhZElkLCBjcmVhdGl2ZUlkKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdDYWxsaW5nIHNlbmRUcmFja2VyKCcgKyB0cmFja2luZ0V2ZW50TmFtZSArICcsICcgKyBhZElkICsgKGNyZWF0aXZlSWQgPyAnLCAnICsgY3JlYXRpdmVJZCA6ICcnKSArICcpJywgdGhpcy5pZCk7XG5cbiAgICAgICAgLy8gQ2Fubm90IHJlbHkgb24gY3VycmVudE91dE9mQmFuZEFkVHJhY2tlcnMgYmVjYXVzZSBpdCBkb2Vzbid0IGNvbnRhaW4gYWRzIHdpdGggZHVyYXRpb24gMFxuICAgICAgICAvLyBTbyB3ZSBsb29rIGluIGFsbCBhZHMgYW5kIGl0J3MgdXAgdG8gdGhlIGFwcCBpbnRlZ3JhdG9yIHRvIHVzZSB0aGUgY29ycmVjdCBhZElkXG4gICAgICAgIGNvbnN0IGFsbEFkcyA9IFsuLi50aGlzLmFkRGF0YS5hZEJyZWFrcywgLi4udGhpcy5hZERhdGEub3V0T2ZCYW5kQWRCcmVha3NdLmZsYXRNYXAoYWRCcmVhayA9PiBhZEJyZWFrLmFkcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgYWRUcmFja2VyID0gYWxsQWRzLmZpbmQoYWQgPT4gYWQuYWRJZCA9PT0gYWRJZCk7XG5cbiAgICAgICAgaWYgKGFkVHJhY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnTm8gbWF0Y2ggZm9yIGFkSWQ6ICcgKyBhZElkLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGFkIGlzIG5vbmxpbmVhciBvciBsaW5lYXJfYW5kX25vbmxpbmVhciwgdGhlcmUgYXJlIGFkZGl0aW9uYWwgdHJhY2tlcnMgaW4gbm9uTGluZWFySW5mb1xuICAgICAgICAvLyBUaGUgYWQgY2FuIGhhdmUgbXVsdGlwbGUgbm9uTGluZWFySW5mb3MgKGFrYSBjcmVhdGl2ZXMpLCBzbyB3ZSBtdXN0IGZpbmQgdGhlIGNvcnJlY3Qgb25lXG4gICAgICAgIGxldCBhZE5vbkxpbmVhckluZm87XG4gICAgICAgIGlmIChhZFRyYWNrZXIubm9uTGluZWFySW5mby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBCeSBkZWZhdWx0LCB1c2UgdGhlIGZpcnN0IG9uZVxuICAgICAgICAgICAgYWROb25MaW5lYXJJbmZvID0gYWRUcmFja2VyLm5vbkxpbmVhckluZm9bMF07XG5cbiAgICAgICAgICAgIC8vIElmIGEgY3JlYXRpdmVJZCBpcyBwcm92aWRlZCwgZmluZCBtYXRjaGluZyBub25MaW5lYXJJbmZvXG4gICAgICAgICAgICBpZiAoY3JlYXRpdmVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYWROb25MaW5lYXJJbmZvID0gYWRUcmFja2VyLm5vbkxpbmVhckluZm8uZmluZChub25MaW5lYXJJbmZvID0+IG5vbkxpbmVhckluZm8uY3JlYXRpdmVJZCA9PT0gY3JlYXRpdmVJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWROb25MaW5lYXJJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ05vIG1hdGNoIGZvciBjcmVhdGl2ZUlkOiAnICsgY3JlYXRpdmVJZCwgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBub25MaW5lYXJUcmFja2luZ0V2ZW50cyA9IGFkTm9uTGluZWFySW5mbz8udHJhY2tpbmdFdmVudHMgPz8gW107XG5cbiAgICAgICAgLy8gTm93IHRoYXQgd2UgaGF2ZSBhbGwgZXZlbnRzLCB3ZSBjYW4gZmlsdGVyIGJ5IG5hbWVcbiAgICAgICAgY29uc3QgZXZlbnRzID0gWy4uLmFkVHJhY2tlci5ldmVudHMsIC4uLm5vbkxpbmVhclRyYWNraW5nRXZlbnRzXS5maWx0ZXIoZXZlbnQgPT4gZXZlbnQudHlwZSA9PT0gdHJhY2tpbmdFdmVudE5hbWUpO1xuXG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnTm8gbWF0Y2ggZm9yIHRyYWNraW5nRXZlbnROYW1lOiAnICsgdHJhY2tpbmdFdmVudE5hbWUsIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBldmVudFsndXJsJ10gfHwgZXZlbnRbJ2NhbGxiYWNrdXJsJ107XG4gICAgICAgICAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnTm8gdXJsIGZvdW5kIGZvciBldmVudCAnICsgZXZlbnQudHlwZSwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVxdWVzdGluZyAnICsgdXJsLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZEV2ZW50KHRoaXMuaGFuZGxlciwgdXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXJ9IGZyb20gJy4vYWQvbWV0cmljcy9BZE1ldHJpY3MnO1xuaW1wb3J0IEFkTWV0cmljc01hbmFnZXIgZnJvbSAnLi9hZC9tZXRyaWNzL0FkTWV0cmljc01hbmFnZXInO1xuaW1wb3J0IEFkVHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4vYWQvdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IHsgQWREYXRhVHJhY2tlciwgQWRCcmVha1RyYWNrZXIsIEFkQnJlYWtFdmVudFRyYWNrZXIsIEFkVHJhY2tlciwgQWRFdmVudFRyYWNrZXIgfSBmcm9tICcuL2FkL3RyYWNraW5nL0FkVHJhY2tlcic7XG5pbXBvcnQge0FkTWFuYWdlciwgQWRWaWV3U3RhdGUsIEFkRnJpZW5kbHlPYnN0cnVjdGlvblB1cnBvc2UsIEFkVHlwZX0gZnJvbSAnLi9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IHtBZFNlc3Npb259IGZyb20gJy4vYWQvQWRTZXNzaW9uJztcbmltcG9ydCBJbnRlcm5hbEFkTWFuYWdlciBmcm9tICcuL2FkL0ludGVybmFsQWRNYW5hZ2VyJztcbmltcG9ydCBPTVNES01hbmFnZXIgZnJvbSAnLi9wbHVnaW5zL29tc2RrL09NU0RLTWFuYWdlcic7XG5pbXBvcnQgT01TZXNzaW9uSGFuZGxlciBmcm9tICcuL3BsdWdpbnMvb21zZGsvT01TZXNzaW9uSGFuZGxlcic7XG5cbmltcG9ydCBTbWFydExpYiBmcm9tICcuL1NtYXJ0TGliJztcblNtYXJ0TGliLmFkTW9kdWxlID0ge1xuICAgIEFkTWV0cmljcywgQWRNZXRyaWNzQnVpbGRlcixcbiAgICBBZE1ldHJpY3NNYW5hZ2VyLFxuICAgIEFkVHJhY2tpbmdNYW5hZ2VyLFxuICAgIEFkRGF0YVRyYWNrZXIsIEFkQnJlYWtUcmFja2VyLCBBZEJyZWFrRXZlbnRUcmFja2VyLCBBZFRyYWNrZXIsIEFkRXZlbnRUcmFja2VyLFxuICAgIEFkTWFuYWdlciwgQWRWaWV3U3RhdGUsIEFkRnJpZW5kbHlPYnN0cnVjdGlvblB1cnBvc2UsIEFkVHlwZSxcbiAgICBBZFNlc3Npb24sXG4gICAgSW50ZXJuYWxBZE1hbmFnZXIsXG4gICAgT01TREtNYW5hZ2VyLCBPTVNlc3Npb25IYW5kbGVyXG59O1xuXG5leHBvcnQge1xuICAgIEFkTWV0cmljcywgQWRNZXRyaWNzQnVpbGRlcixcbiAgICBBZE1ldHJpY3NNYW5hZ2VyLFxuICAgIEFkVHJhY2tpbmdNYW5hZ2VyLFxuICAgIEFkRGF0YVRyYWNrZXIsIEFkQnJlYWtUcmFja2VyLCBBZEJyZWFrRXZlbnRUcmFja2VyLCBBZFRyYWNrZXIsIEFkRXZlbnRUcmFja2VyLFxuICAgIEFkTWFuYWdlciwgQWRWaWV3U3RhdGUsIEFkRnJpZW5kbHlPYnN0cnVjdGlvblB1cnBvc2UsIEFkVHlwZSxcbiAgICBBZFNlc3Npb24sXG4gICAgSW50ZXJuYWxBZE1hbmFnZXIsXG4gICAgT01TREtNYW5hZ2VyLCBPTVNlc3Npb25IYW5kbGVyXG59O1xuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa09NU0RLTWdyJztcblxuY2xhc3MgT01TREtIYW5kbGVyIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNyZWF0ZU9NQWRTZXNzaW9uKHBhcnRuZXJOYW1lLCBwYXJ0bmVyVmVyc2lvbiwgY3VzdG9tUmVmZXJlbmNlRGF0YSwgdmVyaWZpY2F0aW9uRGF0YSwgY2FsbGJhY2spIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT01TREtNYW5hZ2VyIHtcbiAgICBzdGF0aWMgI2luc3RhbmNlO1xuXG4gICAgc21hcnRMaWI7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghT01TREtNYW5hZ2VyLiNpbnN0YW5jZSkge1xuICAgICAgICAgICAgT01TREtNYW5hZ2VyLiNpbnN0YW5jZSA9IG5ldyBPTVNES01hbmFnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPTVNES01hbmFnZXIuI2luc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLyogaW5pdChzbWFydExpYikge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSW5pdGlhbGl6aW5nIE9NIFNESyBtYW5hZ2VyLi4uJyk7XG5cbiAgICAgICAgdGhpcy5zbWFydExpYiA9IHNtYXJ0TGliO1xuICAgIH1cblxuICAgIHJlbGVhc2UoKSB7XG5cbiAgICB9Ki9cbiAgICBpbml0KCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSW5pdGlhbGl6aW5nIE9NIFNESyBtYW5hZ2VyLi4uJyk7XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcblxuICAgIH1cblxuICAgIGF0dGFjaEluc3RhbmNlKHNtYXJ0TGliKSB7XG4gICAgICAgIHRoaXMuc21hcnRMaWIgPSBzbWFydExpYjtcbiAgICB9XG5cbiAgICBhdHRhY2hIYW5kbGVyKG9tc2RrSGFuZGxlcikge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQXR0YWNoaW5nIE9NIFNESyBoYW5kbGVyLi4uJyk7XG5cbiAgICAgICAgdGhpcy5vbXNka0hhbmRsZXIgPSBvbXNka0hhbmRsZXI7XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbXNka0hhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9tc2RrSGFuZGxlciAhPT0gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IE9NU0RLTWFuYWdlciBmcm9tICcuL09NU0RLTWFuYWdlcic7XG5pbXBvcnQgQWRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vLi4vYWQvdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrT01TZXNzaW9uSGFuZGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9NU2Vzc2lvbkhhbmRsZXIge1xuICAgIGhhbmRsZXI7XG5cbiAgICAvKiogXG4gICAgICogU21hcnRMaWIgYWQgc2Vzc2lvbiBcbiAgICAgKi9cbiAgICBhZFNlc3Npb247XG5cbiAgICBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgaW50ZXJuYWxBZE1hbmFnZXI7XG5cbiAgICBvbXNka0hhbmRsZXI7XG5cbiAgICAvKiogXG4gICAgICogT00gU0RLIGFkIHNlc3Npb25cbiAgICAgKi9cbiAgICBvbUFkU2Vzc2lvbjtcblxuICAgIGZpcnN0SW1hZ2VEYXRlO1xuXG4gICAgYWRCcmVha1Bvc2l0aW9uO1xuXG4gICAgcGF1c2U7XG5cbiAgICBidWZmZXJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCBwbGF5ZXJBZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG5cbiAgICAgICAgdGhpcy5hZFNlc3Npb24gPSBoYW5kbGVyLmFkU2Vzc2lvbjtcblxuICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIgPSBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgICAgIHRoaXMuaW50ZXJuYWxBZE1hbmFnZXIgPSB0aGlzLmhhbmRsZXIuc21hcnRMaWIuaW50ZXJuYWxBZE1hbmFnZXI7XG5cbiAgICAgICAgdGhpcy5vbXNka0hhbmRsZXIgPSBPTVNES01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vbXNka0hhbmRsZXI7XG5cbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcblxuICAgIH1cblxuICAgIG9uUmVkaXJlY3Rpb25FbmQoKSB7XG5cbiAgICB9XG5cbiAgICBvbkZpcnN0SW1hZ2UoYml0cmF0ZSwgc3RhcnRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2VEYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBvbkxheWVyU3dpdGNoKGJpdHJhdGUpIHtcblxuICAgIH1cblxuICAgIG9uUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblJlc3VtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZ1N0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5idWZmZXJpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5idWZmZXJTdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZ0VuZChpc1BsYXlpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5idWZmZXJGaW5pc2goKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhbGxFbmQoKSB7XG5cbiAgICB9XG5cbiAgICBvblJlYnVmZmVyaW5nRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25TZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWREYXRhICE9PSB1bmRlZmluZWQgJiYgTWF0aC5hYnMoZW5kIC0gc3RhcnQpID49IDEwMDApIHtcbiAgICAgICAgICAgIGlmIChlbmQgPj0gdGhpcy5hZERhdGEucG9zaXRpb24gKyB0aGlzLmFkRGF0YS5kdXJhdGlvbiB8fCBlbmQgPCB0aGlzLmFkRGF0YS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LnNraXBwZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIHRoaXMuYWREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLm9tQWRTZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24uZmluaXNoKCk7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgfVxuXG4gICAgb25TdGFydFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuXG4gICAgfVxuXG4gICAgb25LZWVwYWxpdmVTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcblxuICAgIH1cblxuICAgIG9uRW5kU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG5cbiAgICB9XG5cbiAgICBvbkFkQnJlYWtEYXRhKGFkQnJlYWtUcmFja2VyKSB7XG4gICAgICAgIGlmIChNYXRoLmFicygoYWRCcmVha1RyYWNrZXIucG9zaXRpb24gKyBhZEJyZWFrVHJhY2tlci5kdXJhdGlvbikgLSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0RHVyYXRpb24oKSkgPCAxMDAwMCkge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAncG9zdHJvbGwnO1xuICAgICAgICB9IGVsc2UgaWYgKERhdGUubm93KCkgLSB0aGlzLmZpcnN0SW1hZ2VEYXRlIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU1RBUlRfREVMVEEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3ByZXJvbGwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgICAgIH1cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIHBvc2l0aW9uIGlzICcgKyB0aGlzLmFkQnJlYWtQb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICBvblByZXBhcmVBZEJyZWFrKHNlc3Npb25Ub2tlbikge1xuXG4gICAgfVxuXG4gICAgb25BZEJyZWFrQmVnaW4oc2Vzc2lvblRva2VuKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydEFkU2Vzc2lvbihvbUFkU2Vzc2lvbiwgYWREYXRhKSB7XG4gICAgICAgIHRoaXMub21BZFNlc3Npb24gPSBvbUFkU2Vzc2lvbjtcblxuICAgICAgICAvLyBTZXQgdGhlIGFkIHZpZXcgaWYgaXQgaGFzIGJlZW4gcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGFkIGJyZWFrIChBbmRyb2lkLCBpT1MpXG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24uc2V0QWRWaWV3KHRoaXMuYWRTZXNzaW9uLmFkVmlldyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWdpc3RlciBuYXRpdmUgZWxlbWVudHMgdGhhdCBiZWxvbmcgdG8gdGhlIGFkLCBzdWNoIGFzIGEgY2xvc2UgYnV0dG9uLCBzb21lIGxvZ28gdGV4dCBvciBhbm90aGVyIGRlY29yYXRpb24gKEFuZHJvaWQsIGlPUylcbiAgICAgICAgaWYgKHRoaXMuYWRTZXNzaW9uPy5hZEZyaWVuZGx5T2JzdHJ1Y3Rpb25WaWV3cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkU2Vzc2lvbi5hZEZyaWVuZGx5T2JzdHJ1Y3Rpb25WaWV3cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24ucmVnaXN0ZXJBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25WaWV3KGl0ZW0udmlldywgaXRlbS5wdXJwb3NlLCBpdGVtLnJlYXNvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub21BZFNlc3Npb24uc3RhcnQoKTtcblxuICAgICAgICAvLyBTZXQgdGhlIGFkIHZpZXcgc3RhdGUgaWYgaXQgaGFzIGJlZW4gcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGFkIGJyZWFrXG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWaWV3U3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5zZXRBZFZpZXdTdGF0ZSh0aGlzLmFkU2Vzc2lvbi5hZFZpZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWREYXRhLnNraXBwYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5sb2FkZWQoYWREYXRhLnNraXBwYWJsZVBvc2l0aW9uIC0gYWREYXRhLnBvc2l0aW9uLCBhZERhdGEuZHVyYXRpb24sIHRoaXMuYWRCcmVha1Bvc2l0aW9uLCB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0Vm9sdW1lKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5sb2FkZWQoLTEsIGFkRGF0YS5kdXJhdGlvbiwgdGhpcy5hZEJyZWFrUG9zaXRpb24sIHRoaXMucGxheWVyQWRhcHRlci5nZXRWb2x1bWUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnT00gYWQgc2Vzc2lvbiBsb2FkZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgIH1cblxuICAgIG9uQWREYXRhKGFkRGF0YSkge1xuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnYWQgZGF0YT0nICsgSlNPTi5zdHJpbmdpZnkoYWREYXRhKSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5hZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gc2tpcCA/ICsgc2Vzc2lvbiBmaW5pc2hcbiAgICAgICAgICAgIC8vIHRoaXMub21BZFNlc3Npb24/LnNraXBwZWQoKTtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWREYXRhID0gYWREYXRhO1xuXG4gICAgICAgIC8vIEJ1aWxkIGFkIHZlcmlmaWNhdGlvbiBkYXRhXG4gICAgICAgIGxldCBhZFZlcmlmaWNhdGlvbkRhdGE7XG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWZXJpZmljYXRpb25EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkVmVyaWZpY2F0aW9uRGF0YSA9IFsuLi50aGlzLmFkU2Vzc2lvbi5hZFZlcmlmaWNhdGlvbkRhdGFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRWZXJpZmljYXRpb25EYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZERhdGEudmVyaWZpY2F0aW9ucy5mb3JFYWNoKHZlcmlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBqYXZhc2NyaXB0UmVzb3VyY2VzID0gdmVyaWZpY2F0aW9uLmphdmFzY3JpcHRSZXNvdXJjZXMuZmluZChyZXNvdXJjZSA9PiByZXNvdXJjZS5hcGlmcmFtZXdvcmsgPT09ICdvbWlkJyk7XG4gICAgICAgICAgICBhZFZlcmlmaWNhdGlvbkRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uVmVuZG9yOiB2ZXJpZmljYXRpb24udmVuZG9yLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblVSTDogamF2YXNjcmlwdFJlc291cmNlcy51cmwsXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uUGFyYW1ldGVyczogdmVyaWZpY2F0aW9uLnZlcmlmaWNhdGlvblBhcmFtZXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgYWQgc2Vzc2lvblxuICAgICAgICBjb25zdCBvbUFkU2Vzc2lvbiA9IHRoaXMub21zZGtIYW5kbGVyLmNyZWF0ZU9NQWRTZXNzaW9uKHRoaXMuaW50ZXJuYWxBZE1hbmFnZXIub21QYXJ0bmVyTmFtZSwgdGhpcy5pbnRlcm5hbEFkTWFuYWdlci5vbVBhcnRuZXJWZXJzaW9uLCB0aGlzLmFkU2Vzc2lvbj8uYWRDdXN0b21SZWZlcmVuY2UsIGFkVmVyaWZpY2F0aW9uRGF0YSwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBpT1NcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBZFNlc3Npb24ocmVzdWx0LCBhZERhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIYW5kbGUgQW5kcm9pZCBhbmQgV2ViXG4gICAgICAgIGlmIChvbUFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QWRTZXNzaW9uKG9tQWRTZXNzaW9uLCBhZERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmVwYXJlQWQoc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkKSB7XG5cbiAgICB9XG5cbiAgICBvbkFkQmVnaW4oc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkKSB7XG5cbiAgICB9XG5cbiAgICBvbkFkU2tpcHBhYmxlKHNlc3Npb25Ub2tlbikge1xuXG4gICAgfVxuXG4gICAgb25BZFByb2dyZXNzKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8ucHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIG9uQWRFbmQoc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkKSB7XG4gICAgICAgIHRoaXMuYWREYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMub21BZFNlc3Npb24/LmZpbmlzaCgpO1xuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9uQWRCcmVha0VuZChzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5hZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMub21BZFNlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5maW5pc2goKTtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdtaWRyb2xsJztcbiAgICB9XG5cbiAgICBvblZvbHVtZUNoYW5nZWQodm9sdW1lKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdWb2x1bWUgaXMgbm93ICcgKyB2b2x1bWUsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8udm9sdW1lQ2hhbmdlKHZvbHVtZSk7XG4gICAgfVxuXG4gICAgb25QbGF5ZXJFcnJvcihicm9hZHBlYWtTdGF0dXNDb2RlLCBwbGF5ZXJFcnJvckNvZGUpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0Jyb2FkcGVhayBzdGF0dXMgY29kZSAnICsgYnJvYWRwZWFrU3RhdHVzQ29kZSwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1BsYXllciBlcnJvciBjb2RlICcgKyBwbGF5ZXJFcnJvckNvZGUsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uZXJyb3IoYnJvYWRwZWFrU3RhdHVzQ29kZSwgcGxheWVyRXJyb3JDb2RlKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRGF0ZVV0aWxzIiwiVEFHIiwiQWRNZXRyaWNzIiwibWV0cmljcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0eSIsImFkU2tpcHBhYmxlIiwiYWRTa2lwcGVkIiwiYWRQcm9ncmVzcyIsImFkRHVyYXRpb24iLCJzdGFsbHNOdW1iZXIiLCJzdGFsbHNEdXJhdGlvbiIsImxheWVyU3dpdGNoZXNOdW1iZXIiLCJhdmVyYWdlQml0cmF0ZSIsImNyZWF0aXZlSWQiLCJhZElkIiwiYWRJbmRleCIsImFkQ291bnQiLCJhZEZvcm1hdCIsImltcHJlc3Npb25EYXRlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ0b1N0cmluZyIsImZvcm1hdFRpbWUiLCJtZXJnZSIsImxpc3QiLCJtZXJnZWRNZXRyaWNzIiwibGFzdE1ldHJpY3MiLCJsYXllclBlckR1cmF0aW9uIiwidG90YWxEdXJhdGlvbiIsImkiLCJhZE1ldHJpY3MiLCJNYXRoIiwicm91bmQiLCJBZE1ldHJpY3NCdWlsZGVyIiwidGltZVNwZW50UGVyTGF5ZXIiLCJxdWFydGlsZXMiLCJyZXNldCIsImlzSW5pdGlhbGl6ZWQiLCJpbXBvcnQiLCJEYXRlIiwibm93Iiwic2V0QWRTa2lwcGFibGUiLCJzZXRBZFNraXBwZWQiLCJhZGRQcm9ncmVzcyIsIm1heCIsImluaXQiLCJmb3JtYXQiLCJpbmRleCIsImNvdW50Iiwic2V0Q3JlYXRpdmVJZCIsInNldEFkSWQiLCJhZGRUaW1lU3BlbnRQZXJMYXllciIsImJpdHJhdGUiLCJkdXJhdGlvbiIsInRpbWVTcGVudE9uTGF5ZXIiLCJhZGRMYXllclN3aXRjaCIsImFkZFN0YWxsIiwiY2xvbmUiLCJPYmplY3QiLCJhc3NpZ24iLCJidWlsZCIsIkxvZ2dlck1hbmFnZXIiLCJTbWFydExpYiIsIkFkVHJhY2tpbmdNYW5hZ2VyIiwiQWRNZXRyaWNzTWFuYWdlciIsImhhbmRsZXIiLCJ0aW1lbGluZSIsInNlc3Npb25SZXBvcnQiLCJidWlsZGVyIiwib25TdGFydCIsImFkTGFzdExheWVyU3dpdGNoRGF0ZSIsImZpcnN0SW1hZ2VEYXRlIiwibGFzdExheWVyQml0cmF0ZSIsImFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSIsImFkQnJlYWtQbGF5aW5nIiwiYWRQbGF5aW5nIiwiYWRCcmVha1Bvc2l0aW9uIiwib25GaXJzdEltYWdlIiwicG9zaXRpb24iLCJvbkxheWVyU3dpdGNoIiwib25CdWZmZXJpbmdTdGFydCIsIm9uU3RhbGxFbmQiLCJvblJlYnVmZmVyaW5nRW5kIiwib25TZWVrIiwic3RhcnQiLCJlbmQiLCJfdGhpcyRoYW5kbGVyIiwiZCIsImlkIiwiYWJzIiwiUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSIsIl90aGlzJGhhbmRsZXIyIiwiX3RoaXMkaGFuZGxlcjMiLCJvblN0b3AiLCJzdGF0dXNDb2RlIiwiaGFuZGxlQWRFbmQiLCJvbkFkQnJlYWtEYXRhIiwiYWRCcmVha1RyYWNrZXIiLCJfdGhpcyRoYW5kbGVyJHBsYXllckEiLCJwbGF5ZXJBZGFwdGVyIiwiZ2V0RHVyYXRpb24iLCJQT1NJVElPTl9TVEFSVF9ERUxUQSIsIm9vYmEiLCJfdGhpcyRoYW5kbGVyNCIsIl9TbWFydExpYiRhbmFseXRpY3NNbyIsInB1c2hFdmVudCIsImFuYWx5dGljc01vZHVsZSIsIlNlc3Npb25UcmFja2VyRXZlbnRzIiwiQWRCcmVha1N0YXJ0Iiwib25BZERhdGEiLCJhZERhdGEiLCJhZEJyZWFrIiwibGl2ZSIsImFkcyIsIm9uQWRTa2lwcGFibGUiLCJzZXNzaW9uVG9rZW4iLCJvbkFkU2tpcHBlZCIsIm90aGVyU2tpcHBlZEFkSWRzIiwiX3RoaXMiLCJfdGhpcyRoYW5kbGVyNSIsImZvckVhY2giLCJyZXBvcnQiLCJjdXJyZW50UmVwb3J0Iiwib25BZFByb2dyZXNzIiwicHJvZ3Jlc3MiLCJfdGhpcyRoYW5kbGVyNiIsIm9uQWRFbmQiLCJvbkFkQnJlYWtFbmQiLCJfU21hcnRMaWIkYW5hbHl0aWNzTW8yIiwicHVzaEV2ZW50UHJvZ3Jlc3MiLCJBZEJyZWFrU3RvcCIsIm9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZCIsInN0b3JlTWV0cmljcyIsImdlbmVyYXRlTWV0cmljcyIsIm9uRW5kU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZCIsImZpbmRJbmRleCIsInB1c2giLCJ2YWx1ZXMiLCJyZXBvcnRzIiwiX3RoaXMkaGFuZGxlcjciLCJvbkFkc1VwZGF0ZWQiLCJfdGhpczIiLCJhZEJyZWFrcyIsImFkIiwiX3RoaXMyJGhhbmRsZXIiLCJkZWZhdWx0IiwiUmVxdWVzdE1hbmFnZXIiLCJBZFR5cGUiLCJUcmFja2VyIiwicHJvY2VlZGVkIiwicHJlcGFyZWQiLCJjYW5Qcm9jZXNzIiwicmVzZXRQcm9jZXNzIiwiQWREYXRhVHJhY2tlciIsImFkVHJhY2tpbmdNYW5hZ2VyIiwidGltZVJlZmVyZW5jZSIsIm91dE9mQmFuZEFkQnJlYWtzIiwiaGFzUmVtYWluaW5nQWRCcmVha3MiLCJmaW5kIiwicmVzZXRQcm9ncmVzc2lvbiIsIkFkQnJlYWtUcmFja2VyIiwiX1RyYWNrZXIyIiwiX2NhbGxTdXBlciIsInRyYWNraW5nRXZlbnRzIiwiX2luaGVyaXRzIiwicHJvY2Vzc1ByZXBhcmUiLCJfYWRUcmFja2luZ01hbmFnZXIkaGEiLCJhZEV2ZW50c0xpc3RlbmVyIiwiYWRTZXNzaW9uIiwib25QcmVwYXJlQWRCcmVhayIsInRvRGF0YSIsInByb2Nlc3NCZWdpbiIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTIiLCJub3RpZnlBZEJyZWFrRGF0YSIsIm5vdGlmeUFkQnJlYWtCZWdpbiIsImZpbHRlciIsImV2ZW50IiwidHlwZSIsInByb2Nlc3NFdmVudCIsIm9uQWRCcmVha0JlZ2luIiwicHJvY2Vzc0VuZCIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTMiLCJub3RpZnlBZEJyZWFrRW5kIiwiX3N1cGVyUHJvcEdldCIsInN0YXJ0UG9zaXRpb24iLCJtYXAiLCJBZEJyZWFrRXZlbnRUcmFja2VyIiwiX1RyYWNrZXIzIiwidXJsIiwiZ2V0SW5zdGFuY2UiLCJhZEV2ZW50IiwiQWRUcmFja2VyIiwiX1RyYWNrZXI0IiwiYWRUeXBlIiwic2tpcHBhYmxlIiwic2tpcHBhYmxlUG9zaXRpb24iLCJjbGlja2FibGUiLCJ2ZXJpZmljYXRpb25zIiwibm9uTGluZWFySW5mbyIsImVycm9yVVJMIiwiX3RoaXMzIiwiZXZlbnRzIiwid2F0Y2hlZCIsInByb2dyZXNzaW9uIiwiZmxhdFdhdGNoZWQiLCJyYW5nZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJpbnRlcnZhbHMiLCJzbGljZSIsInN0YWNrIiwidG9wIiwic29ydCIsInBvcCIsInVwZGF0ZVByb2dyZXNzaW9uIiwicG9zaXRpb25TdGFydCIsInBvc2l0aW9uRW5kIiwiZHVyYXRpb25TdGFydCIsInJlZHVjZSIsInN1bSIsInByb2dyZXNzaW9uU3RhcnQiLCJkdXJhdGlvbkVuZCIsInByb2dyZXNzaW9uRW5kIiwibm90aWZ5QWRQcm9ncmVzcyIsImZsb29yIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhNCIsIm9uUHJlcGFyZUFkIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhNSIsIl9hZFRyYWNraW5nTWFuYWdlciRoYTYiLCJub3RpZnlBZERhdGEiLCJub3RpZnlBZEJlZ2luIiwibm90aWZ5QWRTa2lwcGFibGUiLCJvbVNlc3Npb25IYW5kbGVyIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhNyIsIm9tQWRTZXNzaW9uIiwiZ2V0QWRTZXNzaW9uSWQiLCJjdXJyZW50QWREYXRhIiwib25BZEJlZ2luIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhOCIsIm5vdGlmeUFkRW5kIiwiZ2V0Tm9uTGluZWFyUmVzb3VyY2VzIiwicmVzb3VyY2VUeXBlIiwib2JqIiwicGFyYW1ldGVycyIsImFkUGFyYW1ldGVycyIsInNraXBQb3NpdGlvbiIsImNsaWNrVVJMIiwidXJpIiwibm9uTGluZWFySWZyYW1lUmVzb3VyY2VzIiwibm9uTGluZWFyU3RhdGljUmVzb3VyY2VzIiwiQWRFdmVudFRyYWNrZXIiLCJfVHJhY2tlcjUiLCJvZmZzZXQiLCJfdGhpczQiLCJwcm9jZXNzUHJvZ3Jlc3Npb24iLCJ0b0xvd2VyQ2FzZSIsIkFEX05PTl9MSU5FQVIiLCJKb2JNYW5hZ2VyIiwiU3RyZWFtaW5nU2Vzc2lvbk9wdGlvbnMiLCJVUkwiLCJsaXN0ZW5lcnMiLCJhZExpc3QiLCJvdXRPZkJhbmRBZExpc3QiLCJjdXJyZW50T3V0T2ZCYW5kQWRUcmFja2VycyIsImN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrVHJhY2tlcnMiLCJ1cGRhdGVQb3NpdGlvbkpvYiIsInVwZGF0ZVNlc3Npb25Kb2IiLCJzdGFydGVkIiwicGF1c2VkIiwiYnVmZmVyaW5nIiwibGFzdFBvc2l0aW9uIiwibGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UiLCJsYXN0UG9zaXRpb25BZnRlclNlZWsiLCJia1lvdVNlc3Npb24iLCJiYXNlVVJMIiwibm9uY2UiLCJhZFBhbFNlc3Npb25SZXF1ZXN0IiwiZmlyc3RGaWxlUmVjZWl2ZWQiLCJmaXJzdEZpbGVQcm9jZWVkZWQiLCJwb2RzU2VudE51bWJlciIsInNlc3Npb25VcGRhdGVJbnRlcnZhbCIsIlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMIiwicG9zaXRpb25IaXN0b3J5IiwiaW5pdEJrWW91U2Vzc2lvbiIsImRhdGEiLCJhZFBhbFNlc3Npb24iLCJwYXJzZUFkUG9kcyIsInVwZGF0ZUJrWW91U2Vzc2lvbiIsInN0b3BwZWQiLCJhZFRyYWNraW5nVVJMIiwic21hcnRMaWJQYXJhbWV0ZXJzIiwic21hcnRMaWIiLCJnZXRQYXJhbWV0ZXJzIiwidXNlckFnZW50IiwiYWRUcmFja2luZyIsInRoZW4iLCJyZXN1bHQiLCJjYW5jZWwiLCJodHRwU3RhdHVzIiwiY29udGVudCIsImUiLCJhc3luY0RlbGF5IiwiaXNMaXZlIiwiZml4QWRCcmVhayIsImxhc3RBZCIsIm5leHRBZCIsImN1cnJlbnRBZEVuZCIsImV4cGVjdGVkRHVyYXRpb24iLCJyZWZyZXNoRGVsYXkiLCJhZERhdGFUcmFja2VyIiwiYWRQb2RzIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRQb2QiLCJhZEJyZWFrSWQiLCJzdGFydFRpbWUiLCJhZEJyZWFrVHJhY2tpbmdFdmVudHMiLCJhZEJyZWFrVHJhY2tpbmdFdmVudCIsImNhbGxiYWNrdXJsIiwiYWRCcmVha0V2ZW50VHJhY2tlciIsInNlcXVlbmNlTnVtYmVyIiwiaXNWYWxpZEFkIiwiX2FkJHZpZGVvY2xpY2tzIiwiX2FkJHZpZGVvY2xpY2tzMiIsIl9hZCR2aWRlb2NsaWNrczMiLCJnZXRBZFR5cGUiLCJza2lwcGFibGVUaW1lIiwidmlkZW9jbGlja3MiLCJjbGlja3Rocm91Z2h1cmwiLCJ0cmFja2VycyIsImNsaWNrdHJhY2tpbmciLCJjdXN0b21DbGljayIsImN1c3RvbWNsaWNrIiwiYWRWZXJpZmljYXRpb25zIiwiYWR2ZXJpZmljYXRpb25zIiwiZWxlbWVudCIsInZlbmRvciIsImphdmFzY3JpcHRSZXNvdXJjZXMiLCJqYXZhc2NyaXB0cmVzb3VyY2VzIiwiZXhlY3V0YWJsZVJlc291cmNlcyIsImV4ZWN1dGFibGVyZXNvdXJjZXMiLCJ0cmFja2luZ2V2ZW50cyIsInZlcmlmaWNhdGlvblBhcmFtZXRlcnMiLCJ2ZXJpZmljYXRpb25wYXJhbWV0ZXJzIiwiYWROb25MaW5lYXJJbmZvIiwiY3JlYXRpdmVpZCIsInN0YXRpY1Jlc291cmNlIiwic3RhdGljcmVzb3VyY2UiLCJpZnJhbWVSZXNvdXJjZSIsImlmcmFtZXJlc291cmNlIiwiYWRwYXJhbWV0ZXJzIiwiYWRUcmFja2VyIiwidGltZSIsImFkRXZlbnRUcmFja2VyIiwiZGF0YVVwZGF0ZWQiLCJtZXJnZUV2ZW50cyIsIm5vdGlmeUFkRGF0YUxpc3RlbmVyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib3V0T2ZCYW5kQWRCcmVhayIsIm5vdGlmeU91dE9mQmFuZEFkRGF0YUxpc3RlbmVyIiwiYmVnaW5PdXRPZkJhbmRBZEJyZWFrIiwicGxheWVyUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInciLCJlbmRPdXRPZkJhbmRBZEJyZWFrIiwic3BsaWNlIiwiZGVsYXkiLCJQT1NJVElPTl9VUERBVEVfSU5URVJWQUwiLCJvblBvc2l0aW9uVXBkYXRlZCIsInN0b3AiLCJfdGhpczUiLCJuZXdBZENvdW50IiwiZGVsZXRlZEFkQ291bnQiLCJjdXJyZW50SWRzIiwiYXJyYXkiLCJfdGhpczUkY3VycmVudEFkVHJhY2siLCJpbmNsdWRlcyIsImN1cnJlbnRBZFRyYWNrZXIiLCJyZW1vdmUiLCJhZFRyYWNrZXJzUGVyaW9kIiwib3B0aW9ucyIsImdldCIsIkFEX1RSQUNLRVJTX1NUT1JFX0RVUkFUSU9OIiwiY3VycmVudEFkQnJlYWsiLCJjdXJyZW50QWQiLCJpbnNlcnRJbmRleCIsIm5vdGlmeUFkc1VwZGF0ZWQiLCJjaGVja1N0YXJ0IiwiY2hlY2tBZEJyZWFrRW5kZWQiLCJjdXJyZW50UG9zaXRpb24iLCJfdGhpczYiLCJwbGF5aW5nUGVyaW9kIiwibWluIiwiX3RoaXMkYWREYXRhIiwiX3RoaXMkYWREYXRhMiIsIl90aGlzJGFkRGF0YTMiLCJfdGhpcyRhZERhdGE0IiwiX3RoaXMkYWREYXRhNSIsIm5leHRBZEJyZWFrVHJhY2tlciIsIlBPU0lUSU9OX1BSRVBBUkVfREVMVEEiLCJuZXh0QWRUcmFja2VyIiwic2tpcHBlZCIsImN1cnJlbnRBZEJyZWFrRGF0YSIsIm5vdGlmeUFkU2tpcHBlZCIsImN1cnJlbnRBZEJyZWFrVHJhY2tlciIsImlzQWN0aXZlQXRQb3NpdGlvbiIsIm91dE9mQmFuZEFkQnJlYWtUcmFja2VycyIsIm91dE9mQmFuZEFkVHJhY2tlcnMiLCJvdXRPZkJhbmRBZEJyZWFrVHJhY2tlciIsImN1cnJlbnRPdXRPZkJhbmRBZEJyZWFrIiwib3V0T2ZCYW5kQWRUcmFja2VyIiwiY3VycmVudE91dE9mQmFuZEFkIiwiY3VycmVudE91dE9mQmFuZEFkVHJhY2tlciIsIm91dE9mQmFuZEFkIiwiY3VycmVudE91dE9mQmFuZEFkQnJlYWtUcmFja2VyIiwibmV4dFVwZGF0ZVRpbWUiLCJuZXh0UG9zaXRpb24iLCJhZEluY29taW5nVGltZSIsIk5FQVJfQURfREVMVEEiLCJwcmludERlYnVnTG9ncyIsImFkUmVtYWluaW5nVGltZSIsIl90aGlzJGFkRGF0YTYiLCJfdGhpcyRhZERhdGE3IiwiX3RoaXMkYWREYXRhOCIsIl90aGlzJGFkRGF0YTkiLCJhZFVzZXJJbnRlcmFjdGlvbiIsImludGVyYWN0aW9uVHlwZSIsIl90aGlzJGN1cnJlbnRBZFRyYWNrZSIsIl90aGlzNyIsInRyYWNrZXIiLCJjbGlja3VybCIsImdldEN1cnJlbnRBZCIsImdldEN1cnJlbnRBZEJyZWFrIiwiZ2V0UG9zaXRpb25Gb3JCb29rbWFyayIsImdldFBvc2l0aW9uRm9yUGxheWJhY2siLCJwb3NpdGlvbkluQm9va21hcmsiLCJiZWZvcmVBZEJyZWFrIiwiYSIsImIiLCJsYXN0QWRCcmVhayIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJlcnIiLCJmIiwiZ2V0VG90YWxBZHNEdXJhdGlvbiIsInRvdGFsIiwiX3RoaXM4IiwiX3RoaXMkYWRQYWxTZXNzaW9uIiwic2VuZFBsYXliYWNrU3RhcnQiLCJvblBhdXNlIiwib25SZXN1bWUiLCJvbkJ1ZmZlcmluZ0VuZCIsInBsYXlpbmciLCJoYW5kbGVQbGF5ZXJTZWVrIiwiX3RoaXMkYWREYXRhMTAiLCJfdGhpcyRhZERhdGExMSIsIl90aGlzJGFkUGFsU2Vzc2lvbjIiLCJzZW5kUGxheWJhY2tFbmQiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbmRleE9mIiwibm90aWZ5RXZlbnQiLCJldmVudE5hbWUiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJhcmc0IiwiYWRCcmVha0RhdGEiLCJfdGhpczkiLCJfdGhpczEwIiwiX3RoaXMxMSIsIl90aGlzMTIiLCJfdGhpcyRhZFBhbFNlc3Npb24zIiwic2VuZEFkSW1wcmVzc2lvbiIsIl90aGlzMTMiLCJfdGhpczE0IiwiX3RoaXMxNSIsIl90aGlzMTYiLCJfdGhpczE3IiwiX3RoaXMxOCIsImZpcnN0RGF0YSIsIl90aGlzJGhhbmRsZXIkYWRTZXNzaSIsImFkRGF0YUxpc3RlbmVyIiwiX3RoaXMkaGFuZGxlciRhZFNlc3NpMiIsIm9uT3V0T2ZCYW5kQWREYXRhIiwicmVxdWVzdE91dE9mQmFuZEFkcyIsIm5hbWUiLCJhdXRvQmVnaW4iLCJhZGRpdGlvbmFsUXVlcnlQYXJhbXMiLCJfdGhpczE5IiwiYWRHYXRld2F5VVJMIiwicmVkaXJlY3RlZFVSTCIsInNldFBhcmFtIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJoZWFkZXJzIiwiZ2V0SGVhZGVycyIsImFzeW5jR2V0IiwiaHJlZiIsIk9PQkFfUkVRVUVTVF9USU1FT1VUIiwiYm9keSIsImFkcG9kIiwic2VuZFRyYWNrZXIiLCJ0cmFja2luZ0V2ZW50TmFtZSIsIl9hZE5vbkxpbmVhckluZm8kdHJhYyIsIl9hZE5vbkxpbmVhckluZm8iLCJfdGhpczIwIiwiYWxsQWRzIiwiZmxhdE1hcCIsIm5vbkxpbmVhclRyYWNraW5nRXZlbnRzIiwiX0FkVHJhY2tpbmdNYW5hZ2VyIiwiQWRNYW5hZ2VyIiwiQWRWaWV3U3RhdGUiLCJBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlIiwiQWRTZXNzaW9uIiwiSW50ZXJuYWxBZE1hbmFnZXIiLCJPTVNES01hbmFnZXIiLCJPTVNlc3Npb25IYW5kbGVyIiwiYWRNb2R1bGUiLCJPTVNES0hhbmRsZXIiLCJjcmVhdGVPTUFkU2Vzc2lvbiIsInBhcnRuZXJOYW1lIiwicGFydG5lclZlcnNpb24iLCJjdXN0b21SZWZlcmVuY2VEYXRhIiwidmVyaWZpY2F0aW9uRGF0YSIsImNhbGxiYWNrIiwicmVsZWFzZSIsImF0dGFjaEluc3RhbmNlIiwiYXR0YWNoSGFuZGxlciIsIm9tc2RrSGFuZGxlciIsImlzRW5hYmxlZCIsIl9pbnN0YW5jZSIsIl8iLCJpbnRlcm5hbEFkTWFuYWdlciIsInBhdXNlIiwib25SZWRpcmVjdGlvbkVuZCIsIl90aGlzJG9tQWRTZXNzaW9uIiwiX3RoaXMkb21BZFNlc3Npb24yIiwicmVzdW1lIiwiX3RoaXMkb21BZFNlc3Npb24zIiwiYnVmZmVyU3RhcnQiLCJpc1BsYXlpbmciLCJfdGhpcyRvbUFkU2Vzc2lvbjQiLCJidWZmZXJGaW5pc2giLCJfdGhpcyRvbUFkU2Vzc2lvbjUiLCJmaW5pc2giLCJvblN0YXJ0U2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZCIsInN0YXJ0QWRTZXNzaW9uIiwiX3RoaXMkYWRTZXNzaW9uIiwiX3RoaXMkYWRTZXNzaW9uMiIsIl90aGlzJGFkU2Vzc2lvbjMiLCJhZFZpZXciLCJzZXRBZFZpZXciLCJhZEZyaWVuZGx5T2JzdHJ1Y3Rpb25WaWV3cyIsIml0ZW0iLCJyZWdpc3RlckFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXciLCJ2aWV3IiwicHVycG9zZSIsInJlYXNvbiIsImFkVmlld1N0YXRlIiwic2V0QWRWaWV3U3RhdGUiLCJsb2FkZWQiLCJnZXRWb2x1bWUiLCJfdGhpcyRhZFNlc3Npb240IiwiX3RoaXMkYWRTZXNzaW9uNSIsIl90aGlzJG9tQWRTZXNzaW9uNiIsImFkVmVyaWZpY2F0aW9uRGF0YSIsInZlcmlmaWNhdGlvbiIsInJlc291cmNlIiwiYXBpZnJhbWV3b3JrIiwidmVyaWZpY2F0aW9uVmVuZG9yIiwidmVyaWZpY2F0aW9uVVJMIiwib21QYXJ0bmVyTmFtZSIsIm9tUGFydG5lclZlcnNpb24iLCJhZEN1c3RvbVJlZmVyZW5jZSIsIl90aGlzJG9tQWRTZXNzaW9uNyIsIl90aGlzJG9tQWRTZXNzaW9uOCIsIm9uVm9sdW1lQ2hhbmdlZCIsInZvbHVtZSIsIl90aGlzJG9tQWRTZXNzaW9uOSIsInZvbHVtZUNoYW5nZSIsIm9uUGxheWVyRXJyb3IiLCJicm9hZHBlYWtTdGF0dXNDb2RlIiwicGxheWVyRXJyb3JDb2RlIiwiX3RoaXMkb21BZFNlc3Npb24xMCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==