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
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
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
var Int8Array = globalThis.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = globalThis.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = globalThis.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis.opera) !== 'Opera';
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
    var TypedArrayConstructor = globalThis[ARRAY];
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
      TypedArrayConstructor = globalThis[ARRAY];
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
    TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = globalThis[NAME];
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
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME].prototype, TypedArrayPrototype);
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
  for (NAME in TypedArrayConstructorsList) if (globalThis[NAME]) {
    createNonEnumerableProperty(globalThis[NAME], TYPED_ARRAY_TAG, NAME);
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


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
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
var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
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
var NativeArrayBuffer = globalThis[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = globalThis[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = globalThis.Array;
var RangeError = globalThis.RangeError;
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
  /* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
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
    /* eslint-enable no-new, sonarjs/inconsistent-function-call -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return inheritIfRequired(new NativeArrayBuffer(toIndex(length)), this, $ArrayBuffer);
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    ArrayBufferPrototype.constructor = $ArrayBuffer;

    copyConstructorProperties($ArrayBuffer, NativeArrayBuffer);
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

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
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
        throw new $TypeError(REDUCE_EMPTY);
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
  buffer[index - 1] |= sign * 128;
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
var roundTiesToEven = __webpack_require__(/*! ../internals/math-round-ties-to-even */ "./node_modules/core-js/internals/math-round-ties-to-even.js");

var abs = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON

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

/***/ "./node_modules/core-js/internals/math-round-ties-to-even.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/math-round-ties-to-even.js ***!
  \*******************************************************************/
/***/ (function(module) {


var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON;

module.exports = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
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
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
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
var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ "./node_modules/core-js/internals/array-from-constructor-and-list.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError = globalThis.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

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
    var NativeTypedArrayConstructor = globalThis[CONSTRUCTOR_NAME];
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
          return arrayFromConstructorAndList(TypedArrayConstructor, data);
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
          if (isTypedArray(data)) return arrayFromConstructorAndList(TypedArrayConstructor, data);
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


/* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var NATIVE_ARRAY_BUFFER_VIEWS = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").NATIVE_ARRAY_BUFFER_VIEWS);

var ArrayBuffer = globalThis.ArrayBuffer;
var Int8Array = globalThis.Int8Array;

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

/***/ "./node_modules/core-js/internals/typed-array-from-same-type-and-list.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from-same-type-and-list.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ "./node_modules/core-js/internals/array-from-constructor-and-list.js");
var getTypedArrayConstructor = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").getTypedArrayConstructor);

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(getTypedArrayConstructor(instance), list);
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

/***/ "./node_modules/core-js/modules/es.reflect.to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(globalThis.Reflect, 'Reflect', true);


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
var fromSameTypeAndList = __webpack_require__(/*! ../internals/typed-array-from-same-type-and-list */ "./node_modules/core-js/internals/typed-array-from-same-type-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
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


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = globalThis.Uint8Array;
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

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (getTypedArrayConstructor(O))(length);
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


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var RangeError = globalThis.RangeError;
var Int8Array = globalThis.Int8Array;
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
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = arraySlice(aTypedArray(this), start, end);
  var C = getTypedArrayConstructor(this);
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


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var FF = __webpack_require__(/*! ../internals/environment-ff-version */ "./node_modules/core-js/internals/environment-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/environment-is-ie-or-edge */ "./node_modules/core-js/internals/environment-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/environment-webkit-version */ "./node_modules/core-js/internals/environment-webkit-version.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = globalThis.Uint16Array;
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


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var Int8Array = globalThis.Int8Array;
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
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var Uint8Array = globalThis.Uint8Array;
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


/***/ }),

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




_src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__["default"].analyticsModule = {
  PlayerManagerHandler: _src_engine_player_PlayerManagerHandler__WEBPACK_IMPORTED_MODULE_1__["default"],
  PlayerEventListener: analytics__WEBPACK_IMPORTED_MODULE_3__.PlayerEventListener,
  GenericPlayerApi: analytics__WEBPACK_IMPORTED_MODULE_3__.GenericPlayerApi,
  CacheHandler: _src_engine_system_CacheHandler__WEBPACK_IMPORTED_MODULE_2__.CacheHandler
};
_src_engine_CoreEngine__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().registerPlayerAdapters();



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
/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! analytics */ "./src_core/index.analytics.js");
/* harmony import */ var _CoreEngine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CoreEngine */ "./src/engine/CoreEngine.js");
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
// import { GenericPlayerAdapter } from 'core';

/* import ShakaPlayerAdapter from '../../../players/shaka/ShakaPlayerAdapter';
import DashJsPlayerAdapter from '../../../players/dashjs/DashJsPlayerAdapter';
import HTML5PlayerAdapter from '../../../players/html5/HTML5PlayerAdapter';
import AVPlayAdapter from '../../../players/avplay/AVPlayAdapter';
import SagemcomDIW387Adapter from '../../../players/sagemcom-diw387/SagemcomDIW387Adapter';
import HbbTV1PlayerAdapter from '../../../players/hbbtv1/HbbTV1PlayerAdapter';
import KalturaPlayerAdapter from '../../../players/kaltura/KalturaPlayerAdapter';
import VideoJsPlayerAdapter from '../../../players/videojs/VideoJsPlayerAdapter';
import ConnectPlayerAdapter from '../../../players/connectplayer/ConnectPlayerAdapter';*/

var _adapters = /*#__PURE__*/new WeakMap();
var PlayerManagerHandler = /*#__PURE__*/function () {
  function PlayerManagerHandler() {
    _classCallCheck(this, PlayerManagerHandler);
    _classPrivateFieldInitSpec(this, _adapters, void 0);
  }
  return _createClass(PlayerManagerHandler, [{
    key: "loadPlayerAdapters",
    value: function loadPlayerAdapters() {
      var _CoreEngine$voplayerM, _CoreEngine$theoplaye, _CoreEngine$shakaModu, _CoreEngine$dashjsMod, _CoreEngine$html5Modu, _CoreEngine$avplayMod, _CoreEngine$diw387Mod, _CoreEngine$hbbtv1Mod, _CoreEngine$kalturaMo, _CoreEngine$connectpl, _CoreEngine$rxplayerM, _CoreEngine$videojsMo, _CoreEngine$hlsjsModu, _CoreEngine$bitmovinM, _CoreEngine$reactnati, _CoreEngine$reactnati2, _CoreEngine$reactnati3, _CoreEngine$chromecas;
      _classPrivateFieldSet(_adapters, this, {});
      _classPrivateFieldGet(_adapters, this)['generic'] = analytics__WEBPACK_IMPORTED_MODULE_11__.GenericPlayerAdapter;
      this.addAdapter('voplayer', (_CoreEngine$voplayerM = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].voplayerModule) === null || _CoreEngine$voplayerM === void 0 ? void 0 : _CoreEngine$voplayerM.VOPlayerAdapter);
      this.addAdapter('theoplayer', (_CoreEngine$theoplaye = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].theoplayerModule) === null || _CoreEngine$theoplaye === void 0 ? void 0 : _CoreEngine$theoplaye.THEOPlayerAdapter);
      this.addAdapter('shaka', (_CoreEngine$shakaModu = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].shakaModule) === null || _CoreEngine$shakaModu === void 0 ? void 0 : _CoreEngine$shakaModu.ShakaPlayerAdapter);
      this.addAdapter('dashjs', (_CoreEngine$dashjsMod = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].dashjsModule) === null || _CoreEngine$dashjsMod === void 0 ? void 0 : _CoreEngine$dashjsMod.DashJsPlayerAdapter);
      this.addAdapter('html5', (_CoreEngine$html5Modu = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].html5Module) === null || _CoreEngine$html5Modu === void 0 ? void 0 : _CoreEngine$html5Modu.HTML5PlayerAdapter);
      this.addAdapter('avplay', (_CoreEngine$avplayMod = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].avplayModule) === null || _CoreEngine$avplayMod === void 0 ? void 0 : _CoreEngine$avplayMod.AVPlayAdapter);
      this.addAdapter('diw387', (_CoreEngine$diw387Mod = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].diw387Module) === null || _CoreEngine$diw387Mod === void 0 ? void 0 : _CoreEngine$diw387Mod.SagemcomDIW387Adapter);
      this.addAdapter('hbbtv1', (_CoreEngine$hbbtv1Mod = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].hbbtv1Module) === null || _CoreEngine$hbbtv1Mod === void 0 ? void 0 : _CoreEngine$hbbtv1Mod.HbbTV1PlayerAdapter);
      this.addAdapter('kaltura', (_CoreEngine$kalturaMo = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].kalturaModule) === null || _CoreEngine$kalturaMo === void 0 ? void 0 : _CoreEngine$kalturaMo.KalturaPlayerAdapter);
      this.addAdapter('connectplayer', (_CoreEngine$connectpl = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].connectplayerModule) === null || _CoreEngine$connectpl === void 0 ? void 0 : _CoreEngine$connectpl.ConnectPlayerAdapter);
      this.addAdapter('rxplayer', (_CoreEngine$rxplayerM = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].rxplayerModule) === null || _CoreEngine$rxplayerM === void 0 ? void 0 : _CoreEngine$rxplayerM.RxPlayerAdapter);
      this.addAdapter('videojs', (_CoreEngine$videojsMo = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].videojsModule) === null || _CoreEngine$videojsMo === void 0 ? void 0 : _CoreEngine$videojsMo.VideoJsPlayerAdapter);
      this.addAdapter('hlsjs', (_CoreEngine$hlsjsModu = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].hlsjsModule) === null || _CoreEngine$hlsjsModu === void 0 ? void 0 : _CoreEngine$hlsjsModu.HlsJsPlayerAdapter);
      this.addAdapter('bitmovin', (_CoreEngine$bitmovinM = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].bitmovinModule) === null || _CoreEngine$bitmovinM === void 0 ? void 0 : _CoreEngine$bitmovinM.BitmovinPlayerAdapter);
      this.addAdapter('reactnativeconnectplayer', (_CoreEngine$reactnati = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].reactnativeconnectplayerModule) === null || _CoreEngine$reactnati === void 0 ? void 0 : _CoreEngine$reactnati.ReactNativeConnectPlayerAdapter);
      this.addAdapter('reactnativetheoplayer', (_CoreEngine$reactnati2 = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].reactnativetheoplayerModule) === null || _CoreEngine$reactnati2 === void 0 ? void 0 : _CoreEngine$reactnati2.ReactNativeTHEOplayerAdapter);
      this.addAdapter('reactnativebitmovin', (_CoreEngine$reactnati3 = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].reactnativebitmovinModule) === null || _CoreEngine$reactnati3 === void 0 ? void 0 : _CoreEngine$reactnati3.ReactNativeBitmovinPlayerAdapter);
      this.addAdapter('chromecast', (_CoreEngine$chromecas = _CoreEngine__WEBPACK_IMPORTED_MODULE_12__["default"].chromecastModule) === null || _CoreEngine$chromecas === void 0 ? void 0 : _CoreEngine$chromecas.ChromecastPlayerAdapter);
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
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      for (var key in _classPrivateFieldGet(_adapters, this)) {
        if (_classPrivateFieldGet(_adapters, this)[key] !== undefined && _classPrivateFieldGet(_adapters, this)[key].checkPlayer(player, listener)) {
          var adapter = new (_classPrivateFieldGet(_adapters, this)[key])();
          adapter.attachPlayer(player, listener);
          return adapter;
        }
      }
      return undefined;
    }
  }]);
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core */ "./src_core/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkCacheHandler';
var PREFIX = 'sl-';
var CacheHandler = /*#__PURE__*/function () {
  function CacheHandler() {
    var _this = this;
    _classCallCheck(this, CacheHandler);
    _defineProperty(this, "storage", void 0);
    core__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Init cache handler, localStorage is ' + (typeof localStorage !== 'undefined' ? 'available' : 'unavailable') + '...');

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
  return _createClass(CacheHandler, [{
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
}();

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
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_MathUtils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../utils/MathUtils */ "./src_core/utils/MathUtils.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../SmartLib */ "./src_core/SmartLib.js");
/* harmony import */ var _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../request/AnalyticsRequestManager */ "./src_core/request/AnalyticsRequestManager.js");
/* harmony import */ var _network_KeepAliveManager__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../network/KeepAliveManager */ "./src_core/network/KeepAliveManager.js");
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../service/JobManager */ "./src_core/service/JobManager.js");
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }


























function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var TAG = 'BpkCacheMgr';

/**
 * Cache handler wrapper
 */
var AbstractCacheHandler = /*#__PURE__*/function () {
  function AbstractCacheHandler() {
    _classCallCheck(this, AbstractCacheHandler);
  }
  return _createClass(AbstractCacheHandler, [{
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
  return _createClass(CacheManager, [{
    key: "init",
    value: function init(cacheHandler) {
      this.cacheHandler = cacheHandler;
    }
  }, {
    key: "attachInstance",
    value: function attachInstance(smartLib) {
      var _this = this;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Init cache manager...');
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
          data = _utils_MathUtils__WEBPACK_IMPORTED_MODULE_27__["default"].base64ToString(data);
        }
        data = JSON.parse(data);
        return data;
      } catch (e) {
        // Remove report if it cannot be read
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.e(TAG, 'Error while parsing ' + key + ' (' + e.message + ')');
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
      this.cacheHandler.set(key, _utils_MathUtils__WEBPACK_IMPORTED_MODULE_27__["default"].stringToBase64(JSON.stringify(value)));
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Updating ' + key + ', set ' + name + ' to ' + value);
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
      var id = 'report-' + _utils_MathUtils__WEBPACK_IMPORTED_MODULE_27__["default"].randomIntFromInterval(1000000, 9999999) + '' + date;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.i(TAG, 'Storing ' + id + ' in cache...');
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
        this.cleanCache();
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.i(TAG, 'Deleting ' + id + ' from cache...');
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.i(TAG, 'Storing keepalive-' + report['session_id'] + ' in cache...');
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.i(TAG, 'Deleting keepalive-' + sessionId + ' from cache...');
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
      this.cleanCache();

      // Send reports
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.i(TAG, 'Sending cache content if any...');
      this.getCacheData('report-').forEach(function (cache) {
        if (cache !== undefined) {
          if (cache.value.sending === true) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Sending cache ' + cache.key + ' already in progress...');
          } else {
            var _SmartLib$analyticsMo;
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Sending cache ' + cache.key + '...');

            // Update sending status, to avoid sending a report twice
            cache.value.sending = true;

            // Add delay field, delta between current date and first sent date
            cache.value.report.delay = Math.round((Date.now() - cache.value.date) / 1000);

            // Update cache
            _this3.store(cache.key, cache.value);

            // Send cache
            (_SmartLib$analyticsMo = _SmartLib__WEBPACK_IMPORTED_MODULE_28__["default"].analyticsModule) === null || _SmartLib$analyticsMo === void 0 || _SmartLib$analyticsMo.AnalyticsRequestManager.getInstance().endSessionCache(cache.value.address, cache.value.report, _this3.smartLib.getParameters()).then(function (sent) {
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Cleaning ' + cache.key + ' (cache duration reached)...');
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
    key: "cleanCache",
    value: function cleanCache() {
      var _this5 = this;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.i(TAG, 'Clean expired data if any...');

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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Migrating keepalive ' + cache.value.report['session_id'] + ' to session...');

          // Add a timeout flag to the session report
          cache.value.report.timeout = true;

          // Store it to session report
          var analyticsAddresses = cache.value.address.split(',');
          analyticsAddresses.forEach(function (analyticsAddress) {
            if (analyticsAddress.indexOf(_request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_29__["default"].NOCACHE_PREFIX) === 0) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_29__["default"].NOCACHE_PREFIX + ' option used, no need to store the report in cache');
            } else {
              _this5.storeSessionReport(_request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_29__["default"].getInstance().buildAnalyticsAddress(analyticsAddress), cache.value.report, false, cache.value.date);
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
    key: "clean",
    value: function clean() {
      var _this6 = this;
      _service_JobManager__WEBPACK_IMPORTED_MODULE_31__["default"].getInstance().asyncDelay(0, function () {
        _this6.cleanCache();
      });
    }
  }, {
    key: "release",
    value: function release() {
      this.cleanCache();
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_instance._) {
        _instance._ = new CacheManager();
      }
      return _instance._;
    }
  }]);
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
  _: void 0
};
var CacheKeepaliveManager = /*#__PURE__*/function (_KeepAliveManager) {
  function CacheKeepaliveManager(handler) {
    var _this7;
    _classCallCheck(this, CacheKeepaliveManager);
    _this7 = _callSuper(this, CacheKeepaliveManager, [handler]);
    _defineProperty(_this7, "analyticsAddress", void 0);
    _this7.analyticsAddress = _this7.handler.smartLib.getParameters().analyticsAddress;
    _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_26__.LoggerManager.d(TAG, 'Using cache keepalive manager...', _this7.handler.id);
    return _this7;
  }
  _inherits(CacheKeepaliveManager, _KeepAliveManager);
  return _createClass(CacheKeepaliveManager, [{
    key: "start",
    value: function start() {
      _superPropGet(CacheKeepaliveManager, "start", this, 3)([]);

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
      _superPropGet(CacheKeepaliveManager, "stop", this, 3)([]);

      // Delete the keepalive report from the cache when the session is stopped
      this.delete();
    }
  }, {
    key: "store",
    value: function store() {
      var _SmartLib$analyticsMo2;
      (_SmartLib$analyticsMo2 = _SmartLib__WEBPACK_IMPORTED_MODULE_28__["default"].analyticsModule) === null || _SmartLib$analyticsMo2 === void 0 || _SmartLib$analyticsMo2.CacheManager.getInstance().storeKeepaliveReport(this.analyticsAddress, this.handler.sessionReport.toEndSessionJSON());
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _SmartLib$analyticsMo3;
      (_SmartLib$analyticsMo3 = _SmartLib__WEBPACK_IMPORTED_MODULE_28__["default"].analyticsModule) === null || _SmartLib$analyticsMo3 === void 0 || _SmartLib$analyticsMo3.CacheManager.getInstance().deleteKeepaliveReport(this.handler.sessionReport.sessionId);
    }
  }]);
}(_network_KeepAliveManager__WEBPACK_IMPORTED_MODULE_30__.KeepAliveManager);

/**
 * Keepalive manager if using Broadpeak CDN and metrics receiver reporting mode
 */
var BroadpeakCDNCacheKeepaliveManager = /*#__PURE__*/function (_BroadpeakCDNKeepaliv) {
  function BroadpeakCDNCacheKeepaliveManager(handler) {
    var _this8;
    _classCallCheck(this, BroadpeakCDNCacheKeepaliveManager);
    _this8 = _callSuper(this, BroadpeakCDNCacheKeepaliveManager, [handler]);

    // Overwrite next callback to remove the CacheKeepaliveManager, and only use the keepalive of BroadpeakCDNKeepaliveManager
    /**
     * third party CDN keepalive manager
     */
    _defineProperty(_this8, "cacheKeepaliveManager", void 0);
    _this8.cacheKeepaliveManager = new CacheKeepaliveManager(handler);
    _this8.cacheKeepaliveManager.next = function () {};
    return _this8;
  }
  _inherits(BroadpeakCDNCacheKeepaliveManager, _BroadpeakCDNKeepaliv);
  return _createClass(BroadpeakCDNCacheKeepaliveManager, [{
    key: "start",
    value: function start() {
      _superPropGet(BroadpeakCDNCacheKeepaliveManager, "start", this, 3)([]);

      // Store a keepalive report when the session is starting
      this.cacheKeepaliveManager.store();
    }
  }, {
    key: "callback",
    value: function callback(parameters) {
      // Store keepalive reports at every keepalive
      this.cacheKeepaliveManager.callback(parameters);
      _superPropGet(BroadpeakCDNCacheKeepaliveManager, "callback", this, 3)([parameters]);
    }
  }, {
    key: "stop",
    value: function stop() {
      _superPropGet(BroadpeakCDNCacheKeepaliveManager, "stop", this, 3)([]);

      // Delete the keepalive report from the cache when the session is stopped
      this.cacheKeepaliveManager.delete();
    }
  }]);
}(_network_KeepAliveManager__WEBPACK_IMPORTED_MODULE_30__.BroadpeakCDNKeepaliveManager);

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
/* harmony export */   GenericPlayerAdapter: function() { return /* reexport safe */ _player_GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   GenericPlayerApi: function() { return /* reexport safe */ _player_GenericPlayerApi__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   Metrics: function() { return /* reexport safe */ _metrics_Metrics__WEBPACK_IMPORTED_MODULE_8__.Metrics; },
/* harmony export */   MetricsManager: function() { return /* reexport safe */ _metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   PlayerAdapter: function() { return /* reexport safe */ _player_PlayerAdapter__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   PlayerEventListener: function() { return /* reexport safe */ _player_PlayerEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   PlayerManager: function() { return /* reexport safe */ _player_PlayerManager__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   SessionTrackerEvent: function() { return /* reexport safe */ _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvent; },
/* harmony export */   SessionTrackerEvents: function() { return /* reexport safe */ _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvents; },
/* harmony export */   SessionTrackerTimeline: function() { return /* reexport safe */ _tracker_SessionTrackerTimeline__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var _player_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/PlayerManager */ "./src_core/player/PlayerManager.js");
/* harmony import */ var _player_PlayerAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/PlayerAdapter */ "./src_core/player/PlayerAdapter.js");
/* harmony import */ var _player_GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/GenericPlayerAdapter */ "./src_core/player/GenericPlayerAdapter.js");
/* harmony import */ var _player_PlayerEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/PlayerEventListener */ "./src_core/player/PlayerEventListener.js");
/* harmony import */ var _player_GenericPlayerApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/GenericPlayerApi */ "./src_core/player/GenericPlayerApi.js");
/* harmony import */ var _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request/AnalyticsRequestManager */ "./src_core/request/AnalyticsRequestManager.js");
/* harmony import */ var _tracker_SessionTrackerTimeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracker/SessionTrackerTimeline */ "./src_core/tracker/SessionTrackerTimeline.js");
/* harmony import */ var _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tracker/SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _metrics_Metrics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metrics/Metrics */ "./src_core/metrics/Metrics.js");
/* harmony import */ var _metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metrics/MetricsManager */ "./src_core/metrics/MetricsManager.js");
/* harmony import */ var _session_analytics_AnalyticsSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./session/analytics/AnalyticsSession */ "./src_core/session/analytics/AnalyticsSession.js");
/* harmony import */ var _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cache/CacheManager */ "./src_core/cache/CacheManager.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SmartLib */ "./src_core/SmartLib.js");













_SmartLib__WEBPACK_IMPORTED_MODULE_12__["default"].analyticsModule = {
  PlayerManager: _player_PlayerManager__WEBPACK_IMPORTED_MODULE_0__["default"],
  PlayerAdapter: _player_PlayerAdapter__WEBPACK_IMPORTED_MODULE_1__["default"],
  GenericPlayerAdapter: _player_GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"],
  PlayerEventListener: _player_PlayerEventListener__WEBPACK_IMPORTED_MODULE_3__["default"],
  GenericPlayerApi: _player_GenericPlayerApi__WEBPACK_IMPORTED_MODULE_4__["default"],
  AnalyticsRequestManager: _request_AnalyticsRequestManager__WEBPACK_IMPORTED_MODULE_5__["default"],
  SessionTrackerTimeline: _tracker_SessionTrackerTimeline__WEBPACK_IMPORTED_MODULE_6__["default"],
  SessionTrackerEvent: _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvent,
  SessionTrackerEvents: _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_7__.SessionTrackerEvents,
  Metrics: _metrics_Metrics__WEBPACK_IMPORTED_MODULE_8__.Metrics,
  MetricsManager: _metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_9__["default"],
  AnalyticsSession: _session_analytics_AnalyticsSession__WEBPACK_IMPORTED_MODULE_10__.AnalyticsSession,
  CacheManager: _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.CacheManager,
  CacheKeepaliveManager: _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.CacheKeepaliveManager,
  BroadpeakCDNCacheKeepaliveManager: _cache_CacheManager__WEBPACK_IMPORTED_MODULE_11__.BroadpeakCDNCacheKeepaliveManager
};


/***/ }),

/***/ "./src_core/metrics/Metrics.js":
/*!*************************************!*\
  !*** ./src_core/metrics/Metrics.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metrics: function() { return /* binding */ Metrics; },
/* harmony export */   MetricsBuilder: function() { return /* binding */ MetricsBuilder; }
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }













function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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
  return _createClass(MetricsBuilder, [{
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_13__.LoggerManager.v(TAG, 'Add watching range, duration ' + (end - start) + 'ms');
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
}();

/***/ }),

/***/ "./src_core/metrics/MetricsManager.js":
/*!********************************************!*\
  !*** ./src_core/metrics/MetricsManager.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MetricsManager; }
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
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Metrics */ "./src_core/metrics/Metrics.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tracker/SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    this.builder = new _Metrics__WEBPACK_IMPORTED_MODULE_11__.MetricsBuilder();
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
  return _createClass(MetricsManager, [{
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
    key: "onPrecacheEnded",
    value: function onPrecacheEnded() {
      this.playingStartDate = Date.now();
    }

    // @override
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.i(TAG, 'Streaming session started (' + bitrate + 'kbps,' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_12__["default"].formatTime(startPosition) + ')', this.handler.id);
      this.started = true;
      this.playing = true;
      this.startPosition = startPosition;
      this.builder.setContentDuration(this.playerAdapter.getDuration()).setPlaybackType(this.playerAdapter.getDuration() <= 0 ? _Metrics__WEBPACK_IMPORTED_MODULE_11__.Metrics.PLAYBACK_TYPE_LIVE : _Metrics__WEBPACK_IMPORTED_MODULE_11__.Metrics.PLAYBACK_TYPE_VOD);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player changed layer to ' + bitrate + 'kbps', this.handler.id);
      if (this.started) {
        this.builder.addTimeSpentPerLayer(this.bitrate, Date.now() - this.lastLayerSwitchDate);
        this.lastLayerSwitchDate = Date.now();
        if (this.bitrate !== bitrate && this.bitrate > 0) {
          var _this$timeline;
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player changed layer, before: ' + this.bitrate + 'kbps, now: ' + bitrate + 'kbps', this.handler.id);
          (_this$timeline = this.timeline) === null || _this$timeline === void 0 || _this$timeline.pushEventBitrate(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.LayerSwitch, bitrate);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player is paused', this.handler.id);
        (_this$timeline2 = this.timeline) === null || _this$timeline2 === void 0 || _this$timeline2.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Pause);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player is resumed', this.handler.id);
        (_this$timeline3 = this.timeline) === null || _this$timeline3 === void 0 || _this$timeline3.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Resume);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player is buffering', this.handler.id);
        (_this$timeline4 = this.timeline) === null || _this$timeline4 === void 0 || _this$timeline4.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.BufferingStart);
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
      (_this$timeline5 = this.timeline) === null || _this$timeline5 === void 0 || _this$timeline5.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.StallStop);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player stalled for ' + bufferingDuration + 'ms', this.handler.id);
    }

    // @override
  }, {
    key: "onRebufferingEnd",
    value: function onRebufferingEnd() {
      var _this$timeline6;
      var bufferingDuration = Date.now() - this.bufferingStartDate;
      this.builder.addRebuffering(bufferingDuration);
      (_this$timeline6 = this.timeline) === null || _this$timeline6 === void 0 || _this$timeline6.pushEvent(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.RebufferingStop);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player buffered for ' + bufferingDuration + 'ms', this.handler.id);
    }

    // @override
  }, {
    key: "onSeek",
    value: function onSeek(start, end) {
      var _this$timeline7;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.d(TAG, 'Player seeked from ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_12__["default"].formatTime(start) + ' to ' + _utils_DateUtils__WEBPACK_IMPORTED_MODULE_12__["default"].formatTime(end), this.handler.id);
      (_this$timeline7 = this.timeline) === null || _this$timeline7 === void 0 || _this$timeline7.pushEventPositionStartEnd(_tracker_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Seek, start, end);
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
}();
_defineProperty(MetricsManager, "MAX_TIME_BETWEEN_SEEK_AND_REBUFFERING", 1000);


/***/ }),

/***/ "./src_core/player/GenericPlayerAdapter.js":
/*!*************************************************!*\
  !*** ./src_core/player/GenericPlayerAdapter.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenericPlayerAdapter; }
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
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _PlayerAdapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PlayerAdapter */ "./src_core/player/PlayerAdapter.js");
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/ObjectUtils */ "./src_core/utils/ObjectUtils.js");















function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var GenericPlayerAdapter = /*#__PURE__*/function (_PlayerAdapter) {
  function GenericPlayerAdapter() {
    var _this;
    _classCallCheck(this, GenericPlayerAdapter);
    _this = _callSuper(this, GenericPlayerAdapter);
    _defineProperty(_this, "player", void 0);
    _defineProperty(_this, "listener", void 0);
    return _this;
  }
  _inherits(GenericPlayerAdapter, _PlayerAdapter);
  return _createClass(GenericPlayerAdapter, [{
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
      return _superPropGet(GenericPlayerAdapter, "getCapabilities", this, 3)([]);
    }
  }, {
    key: "initDiversitySession",
    value: function initDiversitySession(options) {
      return this.player.initDiversitySession(options);
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
      return _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_16__["default"].hasMethods(player, ['getPlayerName', 'getVersion', 'getOSName', 'getDeviceVersion', 'getDeviceType', 'getCurrentPosition', 'getTotalDuration', 'getCurrentBitrate']);
    }
  }]);
}(_PlayerAdapter__WEBPACK_IMPORTED_MODULE_15__["default"]);


/***/ }),

/***/ "./src_core/player/GenericPlayerApi.js":
/*!*********************************************!*\
  !*** ./src_core/player/GenericPlayerApi.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenericPlayerApi; }
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
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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
  return _createClass(GenericPlayerApi, [{
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
     * When the SESSION_PRECACHE option is enabled, notify that the session is no longer idling and that the player is starting to buffer the content
     * It has to be called after calling getURL and before notifyFirstImage
     */
  }, {
    key: "notifyPrecacheEnded",
    value: function notifyPrecacheEnded() {
      if (this.playerAdapter !== undefined) {
        this.playerAdapter.notifyPrecacheEnded();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyPrecacheEnded. This event is called when the player starts buffering chunks.');
      }
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyFirstImage. This event is called when the first image is displayed.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyPause.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyResume.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyLayerSwitch.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyStallStart.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifyStallEnd.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to notifySeek.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer(...) should be ' + 'called prior to setPlayerErrorCode. This has to be called before stopStreamingSession when the player error code as a string.');
      }
    }
  }]);
}();


/***/ }),

/***/ "./src_core/player/PlayerAdapter.js":
/*!******************************************!*\
  !*** ./src_core/player/PlayerAdapter.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerAdapter; }
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
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _service_AppStateManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/AppStateManager */ "./src_core/service/AppStateManager.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var TAG = 'BpkPlayerAdapter';
var PlayerAdapter = /*#__PURE__*/function () {
  function PlayerAdapter() {
    var _this = this;
    _classCallCheck(this, PlayerAdapter);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "diversityPlugin", void 0);
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
  return _createClass(PlayerAdapter, [{
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
      return _service_AppStateManager__WEBPACK_IMPORTED_MODULE_11__["default"].getInstance().osName;
    }
  }, {
    key: "getOSVersion",
    value: function getOSVersion() {
      return _service_AppStateManager__WEBPACK_IMPORTED_MODULE_11__["default"].getInstance().osVersion;
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      return _service_AppStateManager__WEBPACK_IMPORTED_MODULE_11__["default"].getInstance().deviceType;
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
  }, {
    key: "checkPlaybackState",
    value: function checkPlaybackState() {}

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

    /**
     * To be defined in each specific player adapter
     */
  }, {
    key: "initDiversityPlugin",
    value: function initDiversityPlugin(name /* : String */, player /* : Any? */) /* : Any? */{
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.i(TAG, 'Diversity plugin not yet supported for player ' + name);
      return undefined;
    }

    /**
     * Called by SmartLib when diversity is activated
     */
  }, {
    key: "initDiversitySession",
    value: function initDiversitySession(options) {}

    /**
     * Called by SmartLib when diversity is activated
     */
  }, {
    key: "setDiversityManifest",
    value: function setDiversityManifest(manifest) {}

    /**
     * Called by SmartLib when diversity is activated
     */
  }, {
    key: "releaseDiversitySession",
    value: function releaseDiversitySession() {}
  }, {
    key: "fillSessionReport",
    value: function fillSessionReport(sessionReport) {
      sessionReport.playerName = this.getName();
      sessionReport.playerVersion = this.getVersion();
      sessionReport.osName = this.getOSName();
      sessionReport.osVersion = this.getOSVersion();
      sessionReport.deviceType = this.getDeviceType();
    }
  }, {
    key: "onStart",
    value: function onStart() {
      var sessionReport = this.handler.sessionReport;
      this.fillSessionReport(sessionReport);
    }
  }, {
    key: "onKeepaliveSessionReportUpdateRequested",
    value: function onKeepaliveSessionReportUpdateRequested(sessionReport) {
      this.fillSessionReport(sessionReport);
    }
  }, {
    key: "onEndSessionReportUpdateRequested",
    value: function onEndSessionReportUpdateRequested(sessionReport) {
      this.fillSessionReport(sessionReport);
    }
  }, {
    key: "notifyLoading",
    value: function notifyLoading() {
      if (this.handler !== undefined) {
        this.handler.notifyLoading();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer should be called prior to onLoading event. ' + 'This event is called when the player starts buffering the first time.');
      }
    }
  }, {
    key: "notifyPrecacheEnded",
    value: function notifyPrecacheEnded() {
      if (this.handler !== undefined) {
        this.handler.notifyPrecacheEnded();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer should be called prior to onPrecachedEnded event. ' + 'This event is called when the player starts buffering chunks.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSessionStart event. This event is called when the first image is displayed.');
      }
    }
  }, {
    key: "notifyPause",
    value: function notifyPause() {
      if (this.handler !== undefined) {
        this.handler.notifyPause();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSessionPause event.');
      }
    }
  }, {
    key: "notifyResume",
    value: function notifyResume() {
      if (this.handler !== undefined) {
        this.handler.notifyResume();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSessionResume event.');
      }
    }
  }, {
    key: "notifyLayerSwitch",
    value: function notifyLayerSwitch() {
      var bitrate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getBitrate();
      if (this.handler !== undefined) {
        this.handler.notifyLayerSwitch(bitrate);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onLayerSwitch event.');
      }
    }
  }, {
    key: "notifySeek",
    value: function notifySeek(start, end) {
      if (this.handler !== undefined) {
        this.handler.notifySeek(start, end);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onSeek event.');
      }
    }
  }, {
    key: "notifyStallStart",
    value: function notifyStallStart() {
      if (this.handler !== undefined) {
        this.handler.notifyBufferingStart();
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onStallStart event.');
      }
    }
  }, {
    key: "notifyStallEnd",
    value: function notifyStallEnd() {
      var isPlaying = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.handler !== undefined) {
        this.handler.notifyBufferingEnd(isPlaying);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onStallEnd event.');
      }
    }
  }, {
    key: "notifyClose",
    value: function notifyClose() {
      var broadpeakStatusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.handler !== undefined) {
        this.handler.notifyClose(broadpeakStatusCode);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.attachPlayer should be called prior to onSessionStart event. ' + 'This event is called when the player is closing.');
      }
    }
  }, {
    key: "notifyVolumeChanged",
    value: function notifyVolumeChanged(volume) {
      if (this.handler !== undefined) {
        this.handler.notifyVolumeChanged(volume);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onVolumeChanged event.');
      }
    }
  }, {
    key: "notifyPlayerError",
    value: function notifyPlayerError(broadpeakStatusCode, playerErrorCode) {
      if (this.handler !== undefined) {
        this.handler.notifyPlayerError(broadpeakStatusCode, playerErrorCode);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: session.getURL(...) or session.getQuery()/session.startStreamingSession(...) should be ' + 'called prior to onPlayerError event.');
      }
    }
  }, {
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: attachPlayer not implemented for this adapter.');
      return false;
    }
  }, {
    key: "detachPlayer",
    value: function detachPlayer() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: detachPlayer not implemented for this adapter.');
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Set custom parameter on player adapter is only available when using StreamingSession API.', this.handler.id);
        } else {
          this.handler.streamingSession.setCustomParameter(name, value);
        }
      }
    }
  }], [{
    key: "checkPlayer",
    value: function checkPlayer(player, listener) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.e(TAG, 'Implementation error: static checkPlayer not implemented for this adapter.');
      return false;
    }
  }]);
}();


/***/ }),

/***/ "./src_core/player/PlayerEventListener.js":
/*!************************************************!*\
  !*** ./src_core/player/PlayerEventListener.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerEventListener; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TAG = 'BpkPlayerEventListener';
var PlayerEventListener = /*#__PURE__*/function () {
  function PlayerEventListener() {
    _classCallCheck(this, PlayerEventListener);
  }
  return _createClass(PlayerEventListener, null, [{
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSessionStart event. If you don\'t attach any player, ' + 'please remove this call, SmartLib is now handling it automatically.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSessionPause event.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSessionResume event.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onLayerSwitch event.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onSeek event.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onStallStart event.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_15__.LoggerManager.e(TAG, 'Implementation error: SmartLib.attachPlayer(...) should be called prior to onStallEnd event.');
      }
    }
  }]);
}();
_defineProperty(PlayerEventListener, "playerAdapters", []);


/***/ }),

/***/ "./src_core/player/PlayerManager.js":
/*!******************************************!*\
  !*** ./src_core/player/PlayerManager.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlayerManager; }
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
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GenericPlayerAdapter */ "./src_core/player/GenericPlayerAdapter.js");
/* harmony import */ var _PlayerEventListener__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PlayerEventListener */ "./src_core/player/PlayerEventListener.js");
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



var TAG = 'BpkPlayerMgr';
var AbstractPlayerManagerHandler = /*#__PURE__*/function () {
  function AbstractPlayerManagerHandler() {
    _classCallCheck(this, AbstractPlayerManagerHandler);
  }
  return _createClass(AbstractPlayerManagerHandler, null, [{
    key: "loadPlayerAdapters",
    value: function loadPlayerAdapters() {
      return {};
    }
  }]);
}();
var _playerManagerHandler = /*#__PURE__*/new WeakMap();
var _playerAdapters = /*#__PURE__*/new WeakMap();
var _playerAdapter = /*#__PURE__*/new WeakMap();
var PlayerManager = /*#__PURE__*/function () {
  function PlayerManager() {
    _classCallCheck(this, PlayerManager);
    _defineProperty(this, "smartLib", void 0);
    _classPrivateFieldInitSpec(this, _playerManagerHandler, AbstractPlayerManagerHandler);
    _classPrivateFieldInitSpec(this, _playerAdapters, {});
    _classPrivateFieldInitSpec(this, _playerAdapter, void 0);
  }
  return _createClass(PlayerManager, [{
    key: "init",
    value: function init(playerManagerHandler) {
      if (_classPrivateFieldGet(_playerManagerHandler, this) === AbstractPlayerManagerHandler) {
        _classPrivateFieldSet(_playerManagerHandler, this, playerManagerHandler);
        _classPrivateFieldSet(_playerAdapters, this, _classPrivateFieldGet(_playerManagerHandler, this).loadPlayerAdapters());
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.v(TAG, 'Compatible players: ' + Object.keys(_classPrivateFieldGet(_playerAdapters, this)));
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
      return _classPrivateFieldGet(_playerAdapters, this);
    }
  }, {
    key: "setPlayerAdapter",
    value: function setPlayerAdapter(playerAdapter) {
      if (_classPrivateFieldGet(_playerAdapter, this) !== undefined && _classPrivateFieldGet(_playerAdapter, this) !== playerAdapter) {
        // When called twice, events are removed on detachPlayer(), but PlayerAdapter is not reinitialized
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.i(TAG, 'Player ' + _classPrivateFieldGet(_playerAdapter, this).getName() + ' detached');
        _classPrivateFieldGet(_playerAdapter, this).detachPlayer();
      }
      if (_classPrivateFieldGet(_playerAdapter, this) !== playerAdapter && playerAdapter !== undefined) {
        if (playerAdapter instanceof _GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_12__["default"]) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.d(TAG, 'Attaching generic player to SmartLib singleton');
          _PlayerEventListener__WEBPACK_IMPORTED_MODULE_13__["default"].addPlayerAdapter(playerAdapter);
        }
      } else if (_classPrivateFieldGet(_playerAdapter, this) !== playerAdapter && playerAdapter === undefined) {
        if (_classPrivateFieldGet(_playerAdapter, this) instanceof _GenericPlayerAdapter__WEBPACK_IMPORTED_MODULE_12__["default"]) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.d(TAG, 'Detaching generic player from SmartLib singleton');
          _PlayerEventListener__WEBPACK_IMPORTED_MODULE_13__["default"].removePlayerAdapter(_classPrivateFieldGet(_playerAdapter, this));
        }
      }
      if (_classPrivateFieldGet(_playerAdapter, this) !== playerAdapter) {
        _classPrivateFieldSet(_playerAdapter, this, playerAdapter);
      } else if (playerAdapter !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.i(TAG, 'Player ' + _classPrivateFieldGet(_playerAdapter, this).getName() + ' already attached');
      }
      if (playerAdapter !== undefined) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_11__.LoggerManager.i(TAG, 'Player ' + playerAdapter.getName() + ' attached');
      }
    }
  }, {
    key: "getPlayerAdapter",
    value: function getPlayerAdapter() {
      return _classPrivateFieldGet(_playerAdapter, this);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!_instance._) {
        _instance._ = new PlayerManager();
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

/***/ "./src_core/request/AnalyticsRequestManager.js":
/*!*****************************************************!*\
  !*** ./src_core/request/AnalyticsRequestManager.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AnalyticsRequestManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../service/JobManager */ "./src_core/service/JobManager.js");
/* harmony import */ var _SmartLib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../SmartLib */ "./src_core/SmartLib.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TAG = 'BpkAnalyticsRequestMgr';
var AnalyticsRequestManager = /*#__PURE__*/function () {
  function AnalyticsRequestManager() {
    _classCallCheck(this, AnalyticsRequestManager);
  }
  return _createClass(AnalyticsRequestManager, [{
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
          var noCache = analyticsAddress.indexOf(AnalyticsRequestManager.NOCACHE_PREFIX) === 0;
          if (noCache) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, AnalyticsRequestManager.NOCACHE_PREFIX + ' option used, no need to store the report in cache');
            analyticsAddress = _this.buildAnalyticsAddress(analyticsAddress.substring(AnalyticsRequestManager.NOCACHE_PREFIX.length));
          } else {
            analyticsAddress = _this.buildAnalyticsAddress(analyticsAddress);
          }

          // Post end session
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.i(TAG, 'Posting metrics to ' + analyticsAddress, handler.id);
          var promise = _this.postSession(analyticsAddress, sessionReport.toEndSessionJSON(), parameters).then(function (result) {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.i(TAG, 'Send session metrics ended with status code ' + result.httpStatus + ' (' + analyticsAddress + ')', handler.id);
            if (result.httpStatus >= 200 && result.httpStatus < 300) {
              // Send cache on success
              _SmartLib__WEBPACK_IMPORTED_MODULE_20__["default"].analyticsModule.CacheManager.getInstance().push();
              return true;
            }

            // Store report in cache
            if (!noCache) {
              _SmartLib__WEBPACK_IMPORTED_MODULE_20__["default"].analyticsModule.CacheManager.getInstance().storeSessionReport(analyticsAddress, sessionReport.toEndSessionJSON(), true, Date.now());
            }
            return false;
          });
          promises.push(promise);
        });
        return Promise.all(promises).then(function () {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.d(TAG, 'Send session metrics done', handler.id);
        });
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.w(TAG, 'Metrics platform URL is null, metrics won\'t be posted anywhere.', handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.i(TAG, 'Posting cache to ' + analyticsAddress);
        return this.postSession(analyticsAddress, sessionReportJson, parameters).then(function (result) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.i(TAG, 'Send cache ended with status code ' + result.httpStatus + ' (' + analyticsAddress + ')');
          return result.httpStatus >= 200 && result.httpStatus < 300;
        });
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.w(TAG, 'Metrics platform URL is null, cache won\'t be posted anywhere.');
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_18__.LoggerManager.v(TAG, 'Executing POST request with body: ' + encodedBody);
        _service_JobManager__WEBPACK_IMPORTED_MODULE_19__["default"].getInstance().asyncPost(url, headers, encodedBody, AnalyticsRequestManager.POST_SESSION_REQUEST_TIMEOUT, function (result) {
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
      if (!_instance._) {
        _instance._ = new AnalyticsRequestManager();
      }
      return _instance._;
    }
  }]);
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
  _: void 0
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
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _streaming_StreamingSession__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../streaming/StreamingSession */ "./src_core/session/streaming/StreamingSession.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");















function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var TAG = 'BpkAnalyticsSession';

/**
 * Once a session has been created, all next calls have to be done on that object.
 */
var AnalyticsSession = /*#__PURE__*/function (_StreamingSession) {
  function AnalyticsSession(smartLib, options) {
    var _this;
    _classCallCheck(this, AnalyticsSession);
    _this = _callSuper(this, AnalyticsSession, [smartLib, options]);
    _defineProperty(_this, "started", void 0);
    _this.getURL = undefined;
    _this.getQuery = undefined;
    _this.startStreamingSession = undefined;
    _this.stopAnalyticsSession = _this.stopStreamingSession;
    _this.stopStreamingSession = undefined;
    _this.started = false;
    return _this;
  }
  _inherits(AnalyticsSession, _StreamingSession);
  return _createClass(AnalyticsSession, [{
    key: "attachPlayer",
    value: function attachPlayer(player, listener) {
      _superPropGet(AnalyticsSession, "attachPlayer", this, 3)([player, listener]);

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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_16__.LoggerManager.i(TAG, 'Session is loading...', this.id);
      if (this.started === false) {
        this.started = true;

        // Set ad session handler
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_16__.LoggerManager.d(TAG, 'Exception: onLoading, the session is already running.', this.id);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_16__.LoggerManager.i(TAG, 'Session is closing (status code: ' + broadpeakStatusCode + ')...', this.id);

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
}(_streaming_StreamingSession__WEBPACK_IMPORTED_MODULE_15__.StreamingSession);

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
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SessionTrackerSummary */ "./src_core/tracker/SessionTrackerSummary.js");
/* harmony import */ var _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/ByteBuffer */ "./src_core/utils/ByteBuffer.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }











function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




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
    this.uncompressedData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_13__["default"](this.maxBufferSize);
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
  return _createClass(SessionTrackerEncoder, [{
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
        this.compressedStartData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_13__["default"](this.maxBufferSize);
      }
    }
  }, {
    key: "onEventUpdated",
    value: function onEventUpdated() {
      this.uncompressedData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_13__["default"](this.maxBufferSize);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Timeline encoder generated uncompressed data (' + this.events.length + ' events, ' + this.uncompressedData.length() + ' bytes)');

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
        var maxSize = this.maxBufferSize - _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_12__["default"].BUFFER_SIZE - size;
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
        this.maxEndBufferSize = this.compressedStartData.remaining() - _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_12__["default"].BUFFER_SIZE;

        // Removing unused buffer
        this.uncompressedData = undefined;

        // Debug log
        outputLog += 'first iteration, ';
      }

      // Creating output buffer
      var buffer = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_13__["default"](this.maxBufferSize);

      // Set start data
      buffer.putByteBuffer(this.compressedStartData, this.compressedStartData.length());

      // Set summary
      // LoggerManager.d(TAG, '  Summarizing data...');
      // LoggerManager.d(TAG, '    minSummaryIndex:' + this.minSummaryIndex + ',maxSummaryIndex:' + maxSummaryIndex);
      if (this.minSummaryIndex === maxSummaryIndex) {
        // EGA: is this even possible, regarding the DataSummary event size VS another event size?
        // No summary needed
        buffer.put(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_11__.SessionTrackerEvents.EmptySummary);

        // LoggerManager.d(TAG, '    No summary needed');
        outputLog += 'no summary';
      } else {
        if (this.summary === undefined) {
          this.summary = new _SessionTrackerSummary__WEBPACK_IMPORTED_MODULE_12__["default"](this.timeline, this.minSummaryIndex);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Timeline encoder generated compressed data (' + this.events.length + ' events before encoding, ' + (this.minSummaryIndex + endBuffers.length) + ' events after encoding, ' + buffer.length() + ' bytes, ~' + (Date.now() - date) + 'ms, ' + outputLog + ')');

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
        this.uncompressedData = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_13__["default"](this.maxBufferSize);
        this.uncompressedData.putByteBuffer(data, data.length());
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.v(TAG, 'Extended size from ' + SessionTrackerEncoder.DEFAULT_BUFFER_SIZE + ' to ' + this.maxBufferSize);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.w(TAG, 'Failed to extend size from ' + SessionTrackerEncoder.DEFAULT_BUFFER_SIZE + ' to ' + this.maxBufferSize);
      }
    }
  }]);
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
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ByteBuffer */ "./src_core/utils/ByteBuffer.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../metrics/MetricsManager */ "./src_core/metrics/MetricsManager.js");
/* harmony import */ var _utils_MathUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/MathUtils */ "./src_core/utils/MathUtils.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





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
  PrecacheEnded: 0x16,
  DataSummary: 0x90,
  EmptySummary: 0x91
};
var TYPES_WITHOUT_DATA = [SessionTrackerEvents.RedirectionEnd, SessionTrackerEvents.Pause, SessionTrackerEvents.Resume, SessionTrackerEvents.BufferingStart, SessionTrackerEvents.StallStart, SessionTrackerEvents.StallStop, SessionTrackerEvents.RebufferingStart, SessionTrackerEvents.RebufferingStop, SessionTrackerEvents.AdBreakStart, SessionTrackerEvents.NetworkLost, SessionTrackerEvents.Mute, SessionTrackerEvents.Unmute, SessionTrackerEvents.Multicast, SessionTrackerEvents.Unicast, SessionTrackerEvents.PrecacheEnded];
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
  return _createClass(SessionTrackerEvent, [{
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
          this.attachEventId = SessionTrackerEvents.Start;
          break;
        case SessionTrackerEvents.FirstImage:
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
          this.attachMaxDurationBeforeStart = _metrics_MetricsManager__WEBPACK_IMPORTED_MODULE_13__["default"].MAX_TIME_BETWEEN_SEEK_AND_REBUFFERING;
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
          // nothing to do
          break;
        case SessionTrackerEvents.Mute:
        case SessionTrackerEvents.Unmute:
        case SessionTrackerEvents.Multicast:
        case SessionTrackerEvents.Unicast:
        case SessionTrackerEvents.PrecacheEnded:
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
        case SessionTrackerEvents.PrecacheEnded:
          return 'PrecacheEnded';
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
      var emptyEventCount = _utils_MathUtils__WEBPACK_IMPORTED_MODULE_14__["default"].floor(duration / 65535);
      var remainingDuration = duration % 65535;
      var dataLength = Object.keys(this.eventData).length;
      var capacity = emptyEventCount * 3 + 1 + 2 + dataLength * 2 + (this.addDataSizeInTimeline ? 1 : 0);
      var buffer = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_11__["default"](capacity);
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
      return _utils_DateUtils__WEBPACK_IMPORTED_MODULE_12__["default"].formatDate(new Date(timestamp));
    }
  }, {
    key: "print",
    value: function print() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   |');
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   ├--> ' + this.getEventName() + ' -> ' + (this.compressed === true ? 'compressed' : 'not compressed') + ' -> ' + this.eventDate);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   |      date: ' + this.formatDate(this.eventDate));
      for (var key in this.eventData) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   |      ' + key + ': ' + this.eventData[key]);
      }
      if (this.isStartEvent() && this.stopEvent !== null) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   |      stop event: ' + this.stopEvent.getEventName() + ' ' + this.stopEvent.eventDate);
      }
      if (this.isStopEvent() && this.startEvent !== null) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   |      start event: ' + this.startEvent.getEventName() + ' ' + this.startEvent.eventDate);
      }
      if (this.attachedEvent !== null) {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_10__.LoggerManager.v(TAG, '   |      attached event: ' + this.attachedEvent.getEventName() + ' ' + this.attachedEvent.eventDate);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.getEventName() + ' (' + this.formatDate(this.eventDate) + ')';
    }
  }]);
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
/* harmony import */ var _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _metrics_Metrics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../metrics/Metrics */ "./src_core/metrics/Metrics.js");
/* harmony import */ var _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/ByteBuffer */ "./src_core/utils/ByteBuffer.js");










function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



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
  return _createClass(SessionTrackerSummary, [{
    key: "init",
    value: function init() {
      for (var i = this.minIndex; i >= 0; i--) {
        var event = this.timeline.events[i];
        switch (event.eventId) {
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.LayerSwitch:
            if (this.initialBitrate === undefined) {
              this.initialBitrate = parseInt(event.eventData['bitrate'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.FirstImage:
            if (this.initialBitrate === undefined) {
              this.initialBitrate = parseInt(event.eventData['bitrate'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Start:
            if (this.lastNetworkState === undefined) {
              this.lastNetworkState = parseInt(event.eventData['networkType'], 10);
            }
            if (this.lastMuteState === undefined) {
              this.lastMuteState = parseInt(event.eventData['muteState'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.NetworkAvailable:
            if (this.lastNetworkState === undefined) {
              this.lastNetworkState = parseInt(event.eventData['state'], 10);
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.NetworkLost:
            if (this.lastNetworkState === undefined) {
              this.lastNetworkState = 0;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Mute:
            if (this.lastMuteState === undefined) {
              this.lastMuteState = 1;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Unmute:
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
      this.builder = new _metrics_Metrics__WEBPACK_IMPORTED_MODULE_11__.MetricsBuilder();
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
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Pause:
            // If not paused or first pause event
            if (paused === false || paused === undefined) {
              // If stopEvent found && stopEvent before maxIndex
              if (event.stopEvent !== null && event.stopEvent.eventDate <= maxEvent.eventDate) {
                this.pauseDuration += event.stopEvent.eventDate - event.eventDate;
              }
              paused = true;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Resume:
            // If first pause event
            if (paused === undefined) {
              this.pauseDuration += event.eventDate - minEvent.eventDate;
            }
            paused = false;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.StallStart:
            if (stalling === false || stalling === undefined) {
              if (event.stopEvent !== null && event.stopEvent.eventDate <= maxEvent.eventDate) {
                this.builder.addStall(event.stopEvent.eventDate - event.eventDate);
              }
              stalling = true;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.StallStop:
            if (stalling === undefined) {
              this.builder.addStall(event.eventDate - minEvent.eventDate);
            }
            stalling = false;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.RebufferingStart:
            if (rebuffering === false || rebuffering === undefined) {
              if (event.stopEvent !== null && event.stopEvent.eventDate <= maxEvent.eventDate) {
                this.builder.addRebuffering(event.stopEvent.eventDate - event.eventDate);
              }
              rebuffering = true;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.RebufferingStop:
            if (rebuffering === undefined) {
              this.builder.addRebuffering(event.eventDate - minEvent.eventDate);
            }
            rebuffering = false;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.LayerSwitch:
            this.builder.addLayerSwitch();

            // If bitrate registered
            if (bitrate !== -1) {
              this.builder.addTimeSpentPerLayer(bitrate, event.eventDate - lastLayerSwitchDate);
            }

            // Store bitrate
            bitrate = parseInt(event.eventData['bitrate'], 10);
            lastLayerSwitchDate = event.eventDate;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.NetworkAvailable:
            this.lastNetworkState = parseInt(event.eventData['state'], 10);
            if (this.lastNetworkState >= 10 && this.lastNetworkState < 20) {
              this.nbNetworkWifi++;
            } else if (this.lastNetworkState >= 20 && this.lastNetworkState < 30) {
              this.nbNetworkMobile++;
            } else if (this.lastNetworkState >= 30 && this.lastNetworkState < 40) {
              this.nbNetworkEthernet++;
            }
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.NetworkLost:
            this.lastNetworkState = 0;
            this.nbNetworkDisconnected++;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Mute:
            this.lastMuteState = 1;
            lastMuteDate = event.eventDate;
            break;
          case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.Unmute:
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
        return _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_12__["default"].EMPTY;
      }
      var buffer = new _utils_ByteBuffer__WEBPACK_IMPORTED_MODULE_12__["default"](SessionTrackerSummary.BUFFER_SIZE);
      var metrics = this.builder.metrics;
      buffer.put(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_10__.SessionTrackerEvents.DataSummary).putChar(Math.round(this.summaryDuration / 1000)) // rounded to 1 sec
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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SessionTrackerEvent */ "./src_core/tracker/SessionTrackerEvent.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/DateUtils */ "./src_core/utils/DateUtils.js");
/* harmony import */ var _SessionTrackerEncoder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SessionTrackerEncoder */ "./src_core/tracker/SessionTrackerEncoder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }













function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




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
    this.encoder = new _SessionTrackerEncoder__WEBPACK_IMPORTED_MODULE_16__.SessionTrackerEncoder(this);
  }
  return _createClass(SessionTrackerTimeline, [{
    key: "pushEvent",
    value: function pushEvent(type) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITHOUT_DATA)) {
        var event = this.createEvent(type);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventStart",
    value: function pushEventStart(type, networkType, muteState) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_START)) {
        var event = this.createEvent(type);
        event.addEventData('networkType', networkType);
        event.addEventData('muteState', muteState);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventBitrate",
    value: function pushEventBitrate(type, bitrate) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITH_BITRATE)) {
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
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITH_BITRATE_POSITION)) {
        var event = this.createEvent(type);
        event.addEventData('bitrate', bitrate);
        event.addEventData('position', position);
        if (type === _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.FirstImage && bitrate <= 0) {
          this.firstImageWithoutBitrateEvent = event;
        }
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventPositionStartEnd",
    value: function pushEventPositionStartEnd(type, positionStart, positionEnd) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITH_POSITIONS_START_END)) {
        var event = this.createEvent(type);
        event.addEventData('positionStart', positionStart);
        event.addEventData('positionEnd', positionEnd);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventStatusCode",
    value: function pushEventStatusCode(type, statusCode) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITH_STATUS_CODE)) {
        var event = this.createEvent(type);
        event.addEventData('statusCode', statusCode);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventProgress",
    value: function pushEventProgress(type, progress) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITH_PROGRESS)) {
        var event = this.createEvent(type);
        event.addEventData('progress', progress);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "pushEventState",
    value: function pushEventState(type, state) {
      if (this.checkType(type, _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.TYPES_WITH_STATE)) {
        var event = this.createEvent(type);
        event.addEventData('state', state);
        this.encoder.onEventAdded(event);
      }
    }
  }, {
    key: "createEvent",
    value: function createEvent(type) {
      var event = new _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvent(type);
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.v(TAG, 'Creating event ' + event.getEventName() + '...');

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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.v(TAG, 'Can\'t push event \'' + type + '\' to timeline, invalid parameters');
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
      if (event.attachEventId > _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.None) {
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
        case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Start:
          this.startDate = Date.now();
          break;
        case _SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Stop:
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
      this.pushEventStart(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Start, networkType, muteState);
    }
  }, {
    key: "onRedirectionEnd",
    value: function onRedirectionEnd() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.RedirectionEnd);
    }
  }, {
    key: "onPrecacheEnded",
    value: function onPrecacheEnded() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.PrecacheEnded);
    }
  }, {
    key: "onFirstImage",
    value: function onFirstImage(bitrate, startPosition) {
      this.pushEventBitratePosition(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.FirstImage, bitrate, startPosition);
    }
  }, {
    key: "onStop",
    value: function onStop(statusCode) {
      this.pushEventStatusCode(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Stop, statusCode);

      // this.print();
    }

    // **** APPStateManager events ****
  }, {
    key: "onForeground",
    value: function onForeground() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Received event onForeground but ignored');
    }
  }, {
    key: "onBackground",
    value: function onBackground() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Received event onBackground but ignored');
    }
  }, {
    key: "onNetworkAvailable",
    value: function onNetworkAvailable(networkType) {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.v(TAG, 'Received event onNetworkAvailable type:' + networkType);
      this.pushEventState(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.NetworkAvailable, networkType);
    }
  }, {
    key: "onNetworkLost",
    value: function onNetworkLost() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Received event onNetworkLost');
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.NetworkLost);
    }
  }, {
    key: "onMute",
    value: function onMute() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Received event onMute');
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Mute);
    }
  }, {
    key: "onUnmute",
    value: function onUnmute() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.d(TAG, 'Received event onUnmute');
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Unmute);
    }
  }, {
    key: "onMulticastUsed",
    value: function onMulticastUsed() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Multicast);
    }
  }, {
    key: "onUnicastUsed",
    value: function onUnicastUsed() {
      this.pushEvent(_SessionTrackerEvent__WEBPACK_IMPORTED_MODULE_13__.SessionTrackerEvents.Unicast);
    }
  }, {
    key: "data",
    value: function data() {
      return this.encoder.process();
    }
  }, {
    key: "formatDate",
    value: function formatDate(timestamp) {
      return _utils_DateUtils__WEBPACK_IMPORTED_MODULE_15__["default"].formatDate(new Date(timestamp));
    }
  }, {
    key: "print",
    value: function print() {
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_14__.LoggerManager.v(TAG, 'Timeline (startDate:' + this.formatDate(this.startDate) + ', stopDate:' + this.formatDate(this.stopDate) + ')');
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_typed_array_at_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.at.js */ "./node_modules/core-js/modules/esnext.typed-array.at.js");
/* harmony import */ var core_js_modules_esnext_typed_array_at_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_at_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./MathUtils */ "./src_core/utils/MathUtils.js");
var _ByteBuffer;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ByteBuffer = /*#__PURE__*/function () {
  function ByteBuffer(capacity) {
    _classCallCheck(this, ByteBuffer);
    _defineProperty(this, "index", void 0);
    _defineProperty(this, "buffer", void 0);
    this.index = 0;
    this.buffer = new Uint8Array(capacity);
  }
  return _createClass(ByteBuffer, [{
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
        this.buffer.set(buffer, this.index); // no need to use buffer.subarray(0, length) because index is incremented by length
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
      return _MathUtils__WEBPACK_IMPORTED_MODULE_36__["default"].bufferToBase64(this);
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
      return _MathUtils__WEBPACK_IMPORTED_MODULE_36__["default"].bufferToString(this.buffer, this.index) + '(length:' + this.length() + ')';
    }
  }]);
}();
_ByteBuffer = ByteBuffer;
_defineProperty(ByteBuffer, "EMPTY", new _ByteBuffer(0));


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
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }













function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }
  return _createClass(ObjectUtils, null, [{
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
}();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./players/index.js"));
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MWxCLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRTtVQUNyQzRaLE1BQU0sRUFBRTtRQUNaO01BQ0o7TUFFQSxPQUFPQSxNQUFNO0lBQ2pCO0VBQUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1NtYXJ0TGliTW9kdWxlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1idWZmZXItYmFzaWMtZGV0ZWN0aW9uLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWNvcHktd2l0aGluLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS1jb25zdHJ1Y3Rvci1hbmQtbGlzdC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24tZnJvbS1sYXN0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXJlZHVjZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZWVlNzU0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWJpZy1pbnQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZGF0YS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWludGVncmFsLW51bWJlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLWZsb2F0LXJvdW5kLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21hdGgtZnJvdW5kLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21hdGgtcm91bmQtdGllcy10by1ldmVuLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21hdGgtc2lnbi5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1iaWctaW50LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9mZnNldC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wb3NpdGl2ZS1pbnRlZ2VyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXVpbnQ4LWNsYW1wZWQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHlwZWQtYXJyYXktY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHlwZWQtYXJyYXktY29uc3RydWN0b3JzLXJlcXVpcmUtd3JhcHBlcnMuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHlwZWQtYXJyYXktZnJvbS1zYW1lLXR5cGUtYW5kLWxpc3QuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHlwZWQtYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVmbGVjdC5nZXQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QudG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuYXQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmNvcHktd2l0aGluLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5ldmVyeS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maW5kLWxhc3QtaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZpbmQtbGFzdC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5Lmxhc3QtaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkucmVkdWNlLXJpZ2h0LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnJldmVyc2UuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnNldC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnNvbWUuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnRvLWxvY2FsZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkudWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC50eXBlZC1hcnJheS5hdC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnR5cGVkLWFycmF5LmZpbmQtbGFzdC1pbmRleC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnR5cGVkLWFycmF5LmZpbmQtbGFzdC5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3BsYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmMvZW5naW5lL3BsYXllci9QbGF5ZXJNYW5hZ2VySGFuZGxlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyYy9lbmdpbmUvc3lzdGVtL0NhY2hlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2NhY2hlL0NhY2hlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2luZGV4LmFuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL21ldHJpY3MvTWV0cmljcy5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL21ldHJpY3MvTWV0cmljc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9wbGF5ZXIvR2VuZXJpY1BsYXllckFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9wbGF5ZXIvR2VuZXJpY1BsYXllckFwaS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3BsYXllci9QbGF5ZXJBZGFwdGVyLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvcGxheWVyL1BsYXllckV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9wbGF5ZXIvUGxheWVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3JlcXVlc3QvQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9zZXNzaW9uL2FuYWx5dGljcy9BbmFseXRpY3NTZXNzaW9uLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvdHJhY2tlci9TZXNzaW9uVHJhY2tlckVuY29kZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS90cmFja2VyL1Nlc3Npb25UcmFja2VyRXZlbnQuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS90cmFja2VyL1Nlc3Npb25UcmFja2VyU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3RyYWNrZXIvU2Vzc2lvblRyYWNrZXJUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL3V0aWxzL0J5dGVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS91dGlscy9PYmplY3RVdGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFuYWx5dGljc1NtYXJ0TGliTW9kdWxlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFuYWx5dGljc1NtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuYWx5dGljc1NtYXJ0TGliTW9kdWxlXCJdID0gZmFjdG9yeSgpO1xufSkoKGZ1bmN0aW9uKCkgeyByZXR1cm4gKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiBnbG9iYWwpfSkoKSwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXR5cGVkLWFycmF5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBBcnJheUJ1ZmZlciAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRGF0YVZpZXcgIT0gJ3VuZGVmaW5lZCc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0FSUkFZX0JVRkZFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWxUaGlzLkludDhBcnJheTtcbnZhciBJbnQ4QXJyYXlQcm90b3R5cGUgPSBJbnQ4QXJyYXkgJiYgSW50OEFycmF5LnByb3RvdHlwZTtcbnZhciBVaW50OENsYW1wZWRBcnJheSA9IGdsb2JhbFRoaXMuVWludDhDbGFtcGVkQXJyYXk7XG52YXIgVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUgPSBVaW50OENsYW1wZWRBcnJheSAmJiBVaW50OENsYW1wZWRBcnJheS5wcm90b3R5cGU7XG52YXIgVHlwZWRBcnJheSA9IEludDhBcnJheSAmJiBnZXRQcm90b3R5cGVPZihJbnQ4QXJyYXkpO1xudmFyIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBJbnQ4QXJyYXlQcm90b3R5cGUgJiYgZ2V0UHJvdG90eXBlT2YoSW50OEFycmF5UHJvdG90eXBlKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBUWVBFRF9BUlJBWV9UQUcgPSB1aWQoJ1RZUEVEX0FSUkFZX1RBRycpO1xudmFyIFRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SID0gJ1R5cGVkQXJyYXlDb25zdHJ1Y3Rvcic7XG4vLyBGaXhpbmcgbmF0aXZlIHR5cGVkIGFycmF5cyBpbiBPcGVyYSBQcmVzdG8gY3Jhc2hlcyB0aGUgYnJvd3Nlciwgc2VlICM1OTVcbnZhciBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTID0gTkFUSVZFX0FSUkFZX0JVRkZFUiAmJiAhIXNldFByb3RvdHlwZU9mICYmIGNsYXNzb2YoZ2xvYmFsVGhpcy5vcGVyYSkgIT09ICdPcGVyYSc7XG52YXIgVFlQRURfQVJSQVlfVEFHX1JFUVVJUkVEID0gZmFsc2U7XG52YXIgTkFNRSwgQ29uc3RydWN0b3IsIFByb3RvdHlwZTtcblxudmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0ID0ge1xuICBJbnQ4QXJyYXk6IDEsXG4gIFVpbnQ4QXJyYXk6IDEsXG4gIFVpbnQ4Q2xhbXBlZEFycmF5OiAxLFxuICBJbnQxNkFycmF5OiAyLFxuICBVaW50MTZBcnJheTogMixcbiAgSW50MzJBcnJheTogNCxcbiAgVWludDMyQXJyYXk6IDQsXG4gIEZsb2F0MzJBcnJheTogNCxcbiAgRmxvYXQ2NEFycmF5OiA4XG59O1xuXG52YXIgQmlnSW50QXJyYXlDb25zdHJ1Y3RvcnNMaXN0ID0ge1xuICBCaWdJbnQ2NEFycmF5OiA4LFxuICBCaWdVaW50NjRBcnJheTogOFxufTtcblxudmFyIGlzVmlldyA9IGZ1bmN0aW9uIGlzVmlldyhpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGZhbHNlO1xuICB2YXIga2xhc3MgPSBjbGFzc29mKGl0KTtcbiAgcmV0dXJuIGtsYXNzID09PSAnRGF0YVZpZXcnXG4gICAgfHwgaGFzT3duKFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0LCBrbGFzcylcbiAgICB8fCBoYXNPd24oQmlnSW50QXJyYXlDb25zdHJ1Y3RvcnNMaXN0LCBrbGFzcyk7XG59O1xuXG52YXIgZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZU9mKGl0KTtcbiAgaWYgKCFpc09iamVjdChwcm90bykpIHJldHVybjtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm90byk7XG4gIHJldHVybiAoc3RhdGUgJiYgaGFzT3duKHN0YXRlLCBUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUikpID8gc3RhdGVbVFlQRURfQVJSQVlfQ09OU1RSVUNUT1JdIDogZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKHByb3RvKTtcbn07XG5cbnZhciBpc1R5cGVkQXJyYXkgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBmYWxzZTtcbiAgdmFyIGtsYXNzID0gY2xhc3NvZihpdCk7XG4gIHJldHVybiBoYXNPd24oVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QsIGtsYXNzKVxuICAgIHx8IGhhc093bihCaWdJbnRBcnJheUNvbnN0cnVjdG9yc0xpc3QsIGtsYXNzKTtcbn07XG5cbnZhciBhVHlwZWRBcnJheSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNUeXBlZEFycmF5KGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGEgdHlwZWQgYXJyYXknKTtcbn07XG5cbnZhciBhVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKEMpIHtcbiAgaWYgKGlzQ2FsbGFibGUoQykgJiYgKCFzZXRQcm90b3R5cGVPZiB8fCBpc1Byb3RvdHlwZU9mKFR5cGVkQXJyYXksIEMpKSkgcmV0dXJuIEM7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IodHJ5VG9TdHJpbmcoQykgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yJyk7XG59O1xuXG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IGZ1bmN0aW9uIChLRVksIHByb3BlcnR5LCBmb3JjZWQsIG9wdGlvbnMpIHtcbiAgaWYgKCFERVNDUklQVE9SUykgcmV0dXJuO1xuICBpZiAoZm9yY2VkKSBmb3IgKHZhciBBUlJBWSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgIHZhciBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxUaGlzW0FSUkFZXTtcbiAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmIGhhc093bihUeXBlZEFycmF5Q29uc3RydWN0b3IucHJvdG90eXBlLCBLRVkpKSB0cnkge1xuICAgICAgZGVsZXRlIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGVbS0VZXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gb2xkIFdlYktpdCBidWcgLSBzb21lIG1ldGhvZHMgYXJlIG5vbi1jb25maWd1cmFibGVcbiAgICAgIHRyeSB7XG4gICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGVbS0VZXSA9IHByb3BlcnR5O1xuICAgICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFUeXBlZEFycmF5UHJvdG90eXBlW0tFWV0gfHwgZm9yY2VkKSB7XG4gICAgZGVmaW5lQnVpbHRJbihUeXBlZEFycmF5UHJvdG90eXBlLCBLRVksIGZvcmNlZCA/IHByb3BlcnR5XG4gICAgICA6IE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgJiYgSW50OEFycmF5UHJvdG90eXBlW0tFWV0gfHwgcHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuXG52YXIgZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCA9IGZ1bmN0aW9uIChLRVksIHByb3BlcnR5LCBmb3JjZWQpIHtcbiAgdmFyIEFSUkFZLCBUeXBlZEFycmF5Q29uc3RydWN0b3I7XG4gIGlmICghREVTQ1JJUFRPUlMpIHJldHVybjtcbiAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgaWYgKGZvcmNlZCkgZm9yIChBUlJBWSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZ2xvYmFsVGhpc1tBUlJBWV07XG4gICAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmIGhhc093bihUeXBlZEFycmF5Q29uc3RydWN0b3IsIEtFWSkpIHRyeSB7XG4gICAgICAgIGRlbGV0ZSBUeXBlZEFycmF5Q29uc3RydWN0b3JbS0VZXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICB9XG4gICAgaWYgKCFUeXBlZEFycmF5W0tFWV0gfHwgZm9yY2VkKSB7XG4gICAgICAvLyBWOCB+IENocm9tZSA0OS01MCBgJVR5cGVkQXJyYXklYCBtZXRob2RzIGFyZSBub24td3JpdGFibGUgbm9uLWNvbmZpZ3VyYWJsZVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlZmluZUJ1aWx0SW4oVHlwZWRBcnJheSwgS0VZLCBmb3JjZWQgPyBwcm9wZXJ0eSA6IE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgJiYgVHlwZWRBcnJheVtLRVldIHx8IHByb3BlcnR5KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9XG4gIGZvciAoQVJSQVkgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIHtcbiAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxUaGlzW0FSUkFZXTtcbiAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmICghVHlwZWRBcnJheUNvbnN0cnVjdG9yW0tFWV0gfHwgZm9yY2VkKSkge1xuICAgICAgZGVmaW5lQnVpbHRJbihUeXBlZEFycmF5Q29uc3RydWN0b3IsIEtFWSwgcHJvcGVydHkpO1xuICAgIH1cbiAgfVxufTtcblxuZm9yIChOQU1FIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gIENvbnN0cnVjdG9yID0gZ2xvYmFsVGhpc1tOQU1FXTtcbiAgUHJvdG90eXBlID0gQ29uc3RydWN0b3IgJiYgQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICBpZiAoUHJvdG90eXBlKSBlbmZvcmNlSW50ZXJuYWxTdGF0ZShQcm90b3R5cGUpW1RZUEVEX0FSUkFZX0NPTlNUUlVDVE9SXSA9IENvbnN0cnVjdG9yO1xuICBlbHNlIE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgPSBmYWxzZTtcbn1cblxuZm9yIChOQU1FIGluIEJpZ0ludEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICBDb25zdHJ1Y3RvciA9IGdsb2JhbFRoaXNbTkFNRV07XG4gIFByb3RvdHlwZSA9IENvbnN0cnVjdG9yICYmIENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgaWYgKFByb3RvdHlwZSkgZW5mb3JjZUludGVybmFsU3RhdGUoUHJvdG90eXBlKVtUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUl0gPSBDb25zdHJ1Y3Rvcjtcbn1cblxuLy8gV2ViS2l0IGJ1ZyAtIHR5cGVkIGFycmF5cyBjb25zdHJ1Y3RvcnMgcHJvdG90eXBlIGlzIE9iamVjdC5wcm90b3R5cGVcbmlmICghTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyB8fCAhaXNDYWxsYWJsZShUeXBlZEFycmF5KSB8fCBUeXBlZEFycmF5ID09PSBGdW5jdGlvbi5wcm90b3R5cGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvdyAtLSBzYWZlXG4gIFR5cGVkQXJyYXkgPSBmdW5jdGlvbiBUeXBlZEFycmF5KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH07XG4gIGlmIChOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTKSBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIHtcbiAgICBpZiAoZ2xvYmFsVGhpc1tOQU1FXSkgc2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpc1tOQU1FXSwgVHlwZWRBcnJheSk7XG4gIH1cbn1cblxuaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIHx8ICFUeXBlZEFycmF5UHJvdG90eXBlIHx8IFR5cGVkQXJyYXlQcm90b3R5cGUgPT09IE9iamVjdFByb3RvdHlwZSkge1xuICBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheS5wcm90b3R5cGU7XG4gIGlmIChOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTKSBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIHtcbiAgICBpZiAoZ2xvYmFsVGhpc1tOQU1FXSkgc2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpc1tOQU1FXS5wcm90b3R5cGUsIFR5cGVkQXJyYXlQcm90b3R5cGUpO1xuICB9XG59XG5cbi8vIFdlYktpdCBidWcgLSBvbmUgbW9yZSBvYmplY3QgaW4gVWludDhDbGFtcGVkQXJyYXkgcHJvdG90eXBlIGNoYWluXG5pZiAoTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyAmJiBnZXRQcm90b3R5cGVPZihVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSkgIT09IFR5cGVkQXJyYXlQcm90b3R5cGUpIHtcbiAgc2V0UHJvdG90eXBlT2YoVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUsIFR5cGVkQXJyYXlQcm90b3R5cGUpO1xufVxuXG5pZiAoREVTQ1JJUFRPUlMgJiYgIWhhc093bihUeXBlZEFycmF5UHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICBUWVBFRF9BUlJBWV9UQUdfUkVRVUlSRUQgPSB0cnVlO1xuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoVHlwZWRBcnJheVByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpc09iamVjdCh0aGlzKSA/IHRoaXNbVFlQRURfQVJSQVlfVEFHXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIGlmIChnbG9iYWxUaGlzW05BTUVdKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbFRoaXNbTkFNRV0sIFRZUEVEX0FSUkFZX1RBRywgTkFNRSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1M6IE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MsXG4gIFRZUEVEX0FSUkFZX1RBRzogVFlQRURfQVJSQVlfVEFHX1JFUVVJUkVEICYmIFRZUEVEX0FSUkFZX1RBRyxcbiAgYVR5cGVkQXJyYXk6IGFUeXBlZEFycmF5LFxuICBhVHlwZWRBcnJheUNvbnN0cnVjdG9yOiBhVHlwZWRBcnJheUNvbnN0cnVjdG9yLFxuICBleHBvcnRUeXBlZEFycmF5TWV0aG9kOiBleHBvcnRUeXBlZEFycmF5TWV0aG9kLFxuICBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kOiBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kLFxuICBnZXRUeXBlZEFycmF5Q29uc3RydWN0b3I6IGdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvcixcbiAgaXNWaWV3OiBpc1ZpZXcsXG4gIGlzVHlwZWRBcnJheTogaXNUeXBlZEFycmF5LFxuICBUeXBlZEFycmF5OiBUeXBlZEFycmF5LFxuICBUeXBlZEFycmF5UHJvdG90eXBlOiBUeXBlZEFycmF5UHJvdG90eXBlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIEZ1bmN0aW9uTmFtZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleCcpO1xudmFyIGZyb3VuZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLWZyb3VuZCcpO1xudmFyIElFRUU3NTQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWVlZTc1NCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBhcnJheUZpbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZmlsbCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gRnVuY3Rpb25OYW1lLlBST1BFUjtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5DT05GSUdVUkFCTEU7XG52YXIgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcbnZhciBEQVRBX1ZJRVcgPSAnRGF0YVZpZXcnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFdST05HX0xFTkdUSCA9ICdXcm9uZyBsZW5ndGgnO1xudmFyIFdST05HX0lOREVYID0gJ1dyb25nIGluZGV4JztcbnZhciBnZXRJbnRlcm5hbEFycmF5QnVmZmVyU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9CVUZGRVIpO1xudmFyIGdldEludGVybmFsRGF0YVZpZXdTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKERBVEFfVklFVyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIE5hdGl2ZUFycmF5QnVmZmVyID0gZ2xvYmFsVGhpc1tBUlJBWV9CVUZGRVJdO1xudmFyICRBcnJheUJ1ZmZlciA9IE5hdGl2ZUFycmF5QnVmZmVyO1xudmFyIEFycmF5QnVmZmVyUHJvdG90eXBlID0gJEFycmF5QnVmZmVyICYmICRBcnJheUJ1ZmZlcltQUk9UT1RZUEVdO1xudmFyICREYXRhVmlldyA9IGdsb2JhbFRoaXNbREFUQV9WSUVXXTtcbnZhciBEYXRhVmlld1Byb3RvdHlwZSA9ICREYXRhVmlldyAmJiAkRGF0YVZpZXdbUFJPVE9UWVBFXTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xudmFyIEFycmF5ID0gZ2xvYmFsVGhpcy5BcnJheTtcbnZhciBSYW5nZUVycm9yID0gZ2xvYmFsVGhpcy5SYW5nZUVycm9yO1xudmFyIGZpbGwgPSB1bmN1cnJ5VGhpcyhhcnJheUZpbGwpO1xudmFyIHJldmVyc2UgPSB1bmN1cnJ5VGhpcyhbXS5yZXZlcnNlKTtcblxudmFyIHBhY2tJRUVFNzU0ID0gSUVFRTc1NC5wYWNrO1xudmFyIHVucGFja0lFRUU3NTQgPSBJRUVFNzU0LnVucGFjaztcblxudmFyIHBhY2tJbnQ4ID0gZnVuY3Rpb24gKG51bWJlcikge1xuICByZXR1cm4gW251bWJlciAmIDB4RkZdO1xufTtcblxudmFyIHBhY2tJbnQxNiA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIFtudW1iZXIgJiAweEZGLCBudW1iZXIgPj4gOCAmIDB4RkZdO1xufTtcblxudmFyIHBhY2tJbnQzMiA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgcmV0dXJuIFtudW1iZXIgJiAweEZGLCBudW1iZXIgPj4gOCAmIDB4RkYsIG51bWJlciA+PiAxNiAmIDB4RkYsIG51bWJlciA+PiAyNCAmIDB4RkZdO1xufTtcblxudmFyIHVucGFja0ludDMyID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyWzNdIDw8IDI0IHwgYnVmZmVyWzJdIDw8IDE2IHwgYnVmZmVyWzFdIDw8IDggfCBidWZmZXJbMF07XG59O1xuXG52YXIgcGFja0Zsb2F0MzIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHJldHVybiBwYWNrSUVFRTc1NChmcm91bmQobnVtYmVyKSwgMjMsIDQpO1xufTtcblxudmFyIHBhY2tGbG9hdDY0ID0gZnVuY3Rpb24gKG51bWJlcikge1xuICByZXR1cm4gcGFja0lFRUU3NTQobnVtYmVyLCA1MiwgOCk7XG59O1xuXG52YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBrZXksIGdldEludGVybmFsU3RhdGUpIHtcbiAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKENvbnN0cnVjdG9yW1BST1RPVFlQRV0sIGtleSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpW2tleV07XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBnZXQgPSBmdW5jdGlvbiAodmlldywgY291bnQsIGluZGV4LCBpc0xpdHRsZUVuZGlhbikge1xuICB2YXIgc3RvcmUgPSBnZXRJbnRlcm5hbERhdGFWaWV3U3RhdGUodmlldyk7XG4gIHZhciBpbnRJbmRleCA9IHRvSW5kZXgoaW5kZXgpO1xuICB2YXIgYm9vbElzTGl0dGxlRW5kaWFuID0gISFpc0xpdHRsZUVuZGlhbjtcbiAgaWYgKGludEluZGV4ICsgY291bnQgPiBzdG9yZS5ieXRlTGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBieXRlcyA9IHN0b3JlLmJ5dGVzO1xuICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHN0b3JlLmJ5dGVPZmZzZXQ7XG4gIHZhciBwYWNrID0gYXJyYXlTbGljZShieXRlcywgc3RhcnQsIHN0YXJ0ICsgY291bnQpO1xuICByZXR1cm4gYm9vbElzTGl0dGxlRW5kaWFuID8gcGFjayA6IHJldmVyc2UocGFjayk7XG59O1xuXG52YXIgc2V0ID0gZnVuY3Rpb24gKHZpZXcsIGNvdW50LCBpbmRleCwgY29udmVyc2lvbiwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKSB7XG4gIHZhciBzdG9yZSA9IGdldEludGVybmFsRGF0YVZpZXdTdGF0ZSh2aWV3KTtcbiAgdmFyIGludEluZGV4ID0gdG9JbmRleChpbmRleCk7XG4gIHZhciBwYWNrID0gY29udmVyc2lvbigrdmFsdWUpO1xuICB2YXIgYm9vbElzTGl0dGxlRW5kaWFuID0gISFpc0xpdHRsZUVuZGlhbjtcbiAgaWYgKGludEluZGV4ICsgY291bnQgPiBzdG9yZS5ieXRlTGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBieXRlcyA9IHN0b3JlLmJ5dGVzO1xuICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHN0b3JlLmJ5dGVPZmZzZXQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykgYnl0ZXNbc3RhcnQgKyBpXSA9IHBhY2tbYm9vbElzTGl0dGxlRW5kaWFuID8gaSA6IGNvdW50IC0gaSAtIDFdO1xufTtcblxuaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSKSB7XG4gICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCkge1xuICAgIGFuSW5zdGFuY2UodGhpcywgQXJyYXlCdWZmZXJQcm90b3R5cGUpO1xuICAgIHZhciBieXRlTGVuZ3RoID0gdG9JbmRleChsZW5ndGgpO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogQVJSQVlfQlVGRkVSLFxuICAgICAgYnl0ZXM6IGZpbGwoQXJyYXkoYnl0ZUxlbmd0aCksIDApLFxuICAgICAgYnl0ZUxlbmd0aDogYnl0ZUxlbmd0aFxuICAgIH0pO1xuICAgIGlmICghREVTQ1JJUFRPUlMpIHtcbiAgICAgIHRoaXMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGg7XG4gICAgICB0aGlzLmRldGFjaGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIEFycmF5QnVmZmVyUHJvdG90eXBlID0gJEFycmF5QnVmZmVyW1BST1RPVFlQRV07XG5cbiAgJERhdGFWaWV3ID0gZnVuY3Rpb24gRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCBEYXRhVmlld1Byb3RvdHlwZSk7XG4gICAgYW5JbnN0YW5jZShidWZmZXIsIEFycmF5QnVmZmVyUHJvdG90eXBlKTtcbiAgICB2YXIgYnVmZmVyU3RhdGUgPSBnZXRJbnRlcm5hbEFycmF5QnVmZmVyU3RhdGUoYnVmZmVyKTtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyU3RhdGUuYnl0ZUxlbmd0aDtcbiAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyT3JJbmZpbml0eShieXRlT2Zmc2V0KTtcbiAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPiBidWZmZXJMZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQnKTtcbiAgICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gYnVmZmVyTGVuZ3RoIC0gb2Zmc2V0IDogdG9MZW5ndGgoYnl0ZUxlbmd0aCk7XG4gICAgaWYgKG9mZnNldCArIGJ5dGVMZW5ndGggPiBidWZmZXJMZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB0eXBlOiBEQVRBX1ZJRVcsXG4gICAgICBidWZmZXI6IGJ1ZmZlcixcbiAgICAgIGJ5dGVMZW5ndGg6IGJ5dGVMZW5ndGgsXG4gICAgICBieXRlT2Zmc2V0OiBvZmZzZXQsXG4gICAgICBieXRlczogYnVmZmVyU3RhdGUuYnl0ZXNcbiAgICB9KTtcbiAgICBpZiAoIURFU0NSSVBUT1JTKSB7XG4gICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgIHRoaXMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGg7XG4gICAgICB0aGlzLmJ5dGVPZmZzZXQgPSBvZmZzZXQ7XG4gICAgfVxuICB9O1xuXG4gIERhdGFWaWV3UHJvdG90eXBlID0gJERhdGFWaWV3W1BST1RPVFlQRV07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgYWRkR2V0dGVyKCRBcnJheUJ1ZmZlciwgJ2J5dGVMZW5ndGgnLCBnZXRJbnRlcm5hbEFycmF5QnVmZmVyU3RhdGUpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsICdidWZmZXInLCBnZXRJbnRlcm5hbERhdGFWaWV3U3RhdGUpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsICdieXRlTGVuZ3RoJywgZ2V0SW50ZXJuYWxEYXRhVmlld1N0YXRlKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCAnYnl0ZU9mZnNldCcsIGdldEludGVybmFsRGF0YVZpZXdTdGF0ZSk7XG4gIH1cblxuICBkZWZpbmVCdWlsdElucyhEYXRhVmlld1Byb3RvdHlwZSwge1xuICAgIGdldEludDg6IGZ1bmN0aW9uIGdldEludDgoYnl0ZU9mZnNldCkge1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXSA8PCAyNCA+PiAyNDtcbiAgICB9LFxuICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlKTtcbiAgICAgIHJldHVybiAoYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdKSA8PCAxNiA+PiAxNjtcbiAgICB9LFxuICAgIGdldFVpbnQxNjogZnVuY3Rpb24gZ2V0VWludDE2KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlKTtcbiAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG4gICAgfSxcbiAgICBnZXRJbnQzMjogZnVuY3Rpb24gZ2V0SW50MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0ludDMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlKSk7XG4gICAgfSxcbiAgICBnZXRVaW50MzI6IGZ1bmN0aW9uIGdldFVpbnQzMihieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICByZXR1cm4gdW5wYWNrSW50MzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogZmFsc2UpKSA+Pj4gMDtcbiAgICB9LFxuICAgIGdldEZsb2F0MzI6IGZ1bmN0aW9uIGdldEZsb2F0MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogZmFsc2UpLCAyMyk7XG4gICAgfSxcbiAgICBnZXRGbG9hdDY0OiBmdW5jdGlvbiBnZXRGbG9hdDY0KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlKSwgNTIpO1xuICAgIH0sXG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJbnQ4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSW50OCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2V0SW50MTY6IGZ1bmN0aW9uIHNldEludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0ludDE2LCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBmYWxzZSk7XG4gICAgfSxcbiAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJbnQxNiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogZmFsc2UpO1xuICAgIH0sXG4gICAgc2V0SW50MzI6IGZ1bmN0aW9uIHNldEludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0ludDMyLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBmYWxzZSk7XG4gICAgfSxcbiAgICBzZXRVaW50MzI6IGZ1bmN0aW9uIHNldFVpbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJbnQzMiwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogZmFsc2UpO1xuICAgIH0sXG4gICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGbG9hdDMyLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBmYWxzZSk7XG4gICAgfSxcbiAgICBzZXRGbG9hdDY0OiBmdW5jdGlvbiBzZXRGbG9hdDY0KGJ5dGVPZmZzZXQsIHZhbHVlIC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICBzZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgcGFja0Zsb2F0NjQsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgdmFyIElOQ09SUkVDVF9BUlJBWV9CVUZGRVJfTkFNRSA9IFBST1BFUl9GVU5DVElPTl9OQU1FICYmIE5hdGl2ZUFycmF5QnVmZmVyLm5hbWUgIT09IEFSUkFZX0JVRkZFUjtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LCBzb25hcmpzL2luY29uc2lzdGVudC1mdW5jdGlvbi1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG4gIGlmICghZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIE5hdGl2ZUFycmF5QnVmZmVyKDEpO1xuICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBOYXRpdmVBcnJheUJ1ZmZlcigtMSk7XG4gIH0pIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgTmF0aXZlQXJyYXlCdWZmZXIoKTtcbiAgICBuZXcgTmF0aXZlQXJyYXlCdWZmZXIoMS41KTtcbiAgICBuZXcgTmF0aXZlQXJyYXlCdWZmZXIoTmFOKTtcbiAgICByZXR1cm4gTmF0aXZlQXJyYXlCdWZmZXIubGVuZ3RoICE9PSAxIHx8IElOQ09SUkVDVF9BUlJBWV9CVUZGRVJfTkFNRSAmJiAhQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUU7XG4gIH0pKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcsIHNvbmFyanMvaW5jb25zaXN0ZW50LWZ1bmN0aW9uLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbiAgICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhpcywgQXJyYXlCdWZmZXJQcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVBcnJheUJ1ZmZlcih0b0luZGV4KGxlbmd0aCkpLCB0aGlzLCAkQXJyYXlCdWZmZXIpO1xuICAgIH07XG5cbiAgICAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXSA9IEFycmF5QnVmZmVyUHJvdG90eXBlO1xuXG4gICAgQXJyYXlCdWZmZXJQcm90b3R5cGUuY29uc3RydWN0b3IgPSAkQXJyYXlCdWZmZXI7XG5cbiAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKCRBcnJheUJ1ZmZlciwgTmF0aXZlQXJyYXlCdWZmZXIpO1xuICB9IGVsc2UgaWYgKElOQ09SUkVDVF9BUlJBWV9CVUZGRVJfTkFNRSAmJiBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShOYXRpdmVBcnJheUJ1ZmZlciwgJ25hbWUnLCBBUlJBWV9CVUZGRVIpO1xuICB9XG5cbiAgLy8gV2ViS2l0IGJ1ZyAtIHRoZSBzYW1lIHBhcmVudCBwcm90b3R5cGUgZm9yIHR5cGVkIGFycmF5cyBhbmQgZGF0YSB2aWV3XG4gIGlmIChzZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihEYXRhVmlld1Byb3RvdHlwZSkgIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIHNldFByb3RvdHlwZU9mKERhdGFWaWV3UHJvdG90eXBlLCBPYmplY3RQcm90b3R5cGUpO1xuICB9XG5cbiAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG4gIHZhciB0ZXN0VmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSk7XG4gIHZhciAkc2V0SW50OCA9IHVuY3VycnlUaGlzKERhdGFWaWV3UHJvdG90eXBlLnNldEludDgpO1xuICB0ZXN0Vmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuICB0ZXN0Vmlldy5zZXRJbnQ4KDEsIDIxNDc0ODM2NDkpO1xuICBpZiAodGVzdFZpZXcuZ2V0SW50OCgwKSB8fCAhdGVzdFZpZXcuZ2V0SW50OCgxKSkgZGVmaW5lQnVpbHRJbnMoRGF0YVZpZXdQcm90b3R5cGUsIHtcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICAkc2V0SW50OCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgICRzZXRJbnQ4KHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuXG5zZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5zZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyLFxuICBEYXRhVmlldzogJERhdGFWaWV3XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZGVsZXRlUHJvcGVydHlPclRocm93ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdycpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbmAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb3B5d2l0aGluXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWNvcHl3aXRoaW4gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0IC8qID0gMCAqLywgc3RhcnQgLyogPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIHRvID0gdG9BYnNvbHV0ZUluZGV4KHRhcmdldCwgbGVuKTtcbiAgdmFyIGZyb20gPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGNvdW50ID0gbWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pO1xuICB2YXIgaW5jID0gMTtcbiAgaWYgKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCkge1xuICAgIGluYyA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICs9IGNvdW50IC0gMTtcbiAgfVxuICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgIHRvICs9IGluYztcbiAgICBmcm9tICs9IGluYztcbiAgfSByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWxsYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbGxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleCkgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIGxpc3QsICRsZW5ndGgpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gJGxlbmd0aCA6IGxlbmd0aE9mQXJyYXlMaWtlKGxpc3QpO1xuICB2YXIgcmVzdWx0ID0gbmV3IENvbnN0cnVjdG9yKGxlbmd0aCk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgcmVzdWx0W2luZGV4XSA9IGxpc3RbaW5kZXgrK107XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmaW5kTGFzdCwgZmluZExhc3RJbmRleCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX0ZJTkRfTEFTVF9JTkRFWCA9IFRZUEUgPT09IDE7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGluZGV4ID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIHdoaWxlIChpbmRleC0tID4gMCkge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiB2YWx1ZTsgLy8gZmluZExhc3RcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gaW5kZXg7IC8vIGZpbmRMYXN0SW5kZXhcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfTEFTVF9JTkRFWCA/IC0xIDogdW5kZWZpbmVkO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZExhc3RgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maW5kLWZyb20tbGFzdFxuICBmaW5kTGFzdDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRMYXN0SW5kZXhgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maW5kLWZyb20tbGFzdFxuICBmaW5kTGFzdEluZGV4OiBjcmVhdGVNZXRob2QoMSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbnZhciBSRURVQ0VfRU1QVFkgPSAnUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSc7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgYUNhbGxhYmxlKGNhbGxiYWNrZm4pO1xuICAgIGlmIChsZW5ndGggPT09IDAgJiYgYXJndW1lbnRzTGVuZ3RoIDwgMikgdGhyb3cgbmV3ICRUeXBlRXJyb3IoUkVEVUNFX0VNUFRZKTtcbiAgICB2YXIgaW5kZXggPSBJU19SSUdIVCA/IGxlbmd0aCAtIDEgOiAwO1xuICAgIHZhciBpID0gSVNfUklHSFQgPyAtMSA6IDE7XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA8IDIpIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGlmIChJU19SSUdIVCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihSRURVQ0VfRU1QVFkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gSUVFRTc1NCBjb252ZXJzaW9ucyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2llZWU3NTRcbnZhciAkQXJyYXkgPSBBcnJheTtcbnZhciBhYnMgPSBNYXRoLmFicztcbnZhciBwb3cgPSBNYXRoLnBvdztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgbG9nID0gTWF0aC5sb2c7XG52YXIgTE4yID0gTWF0aC5MTjI7XG5cbnZhciBwYWNrID0gZnVuY3Rpb24gKG51bWJlciwgbWFudGlzc2FMZW5ndGgsIGJ5dGVzKSB7XG4gIHZhciBidWZmZXIgPSAkQXJyYXkoYnl0ZXMpO1xuICB2YXIgZXhwb25lbnRMZW5ndGggPSBieXRlcyAqIDggLSBtYW50aXNzYUxlbmd0aCAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZXhwb25lbnRMZW5ndGgpIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgcnQgPSBtYW50aXNzYUxlbmd0aCA9PT0gMjMgPyBwb3coMiwgLTI0KSAtIHBvdygyLCAtNzcpIDogMDtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwIHx8IG51bWJlciA9PT0gMCAmJiAxIC8gbnVtYmVyIDwgMCA/IDEgOiAwO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgZXhwb25lbnQsIG1hbnRpc3NhLCBjO1xuICBudW1iZXIgPSBhYnMobnVtYmVyKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgaWYgKG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gSW5maW5pdHkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIG1hbnRpc3NhID0gbnVtYmVyICE9PSBudW1iZXIgPyAxIDogMDtcbiAgICBleHBvbmVudCA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZXhwb25lbnQgPSBmbG9vcihsb2cobnVtYmVyKSAvIExOMik7XG4gICAgYyA9IHBvdygyLCAtZXhwb25lbnQpO1xuICAgIGlmIChudW1iZXIgKiBjIDwgMSkge1xuICAgICAgZXhwb25lbnQtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGV4cG9uZW50ICsgZUJpYXMgPj0gMSkge1xuICAgICAgbnVtYmVyICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgbnVtYmVyICs9IHJ0ICogcG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmIChudW1iZXIgKiBjID49IDIpIHtcbiAgICAgIGV4cG9uZW50Kys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmIChleHBvbmVudCArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG1hbnRpc3NhID0gMDtcbiAgICAgIGV4cG9uZW50ID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGV4cG9uZW50ICsgZUJpYXMgPj0gMSkge1xuICAgICAgbWFudGlzc2EgPSAobnVtYmVyICogYyAtIDEpICogcG93KDIsIG1hbnRpc3NhTGVuZ3RoKTtcbiAgICAgIGV4cG9uZW50ICs9IGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYW50aXNzYSA9IG51bWJlciAqIHBvdygyLCBlQmlhcyAtIDEpICogcG93KDIsIG1hbnRpc3NhTGVuZ3RoKTtcbiAgICAgIGV4cG9uZW50ID0gMDtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKG1hbnRpc3NhTGVuZ3RoID49IDgpIHtcbiAgICBidWZmZXJbaW5kZXgrK10gPSBtYW50aXNzYSAmIDI1NTtcbiAgICBtYW50aXNzYSAvPSAyNTY7XG4gICAgbWFudGlzc2FMZW5ndGggLT0gODtcbiAgfVxuICBleHBvbmVudCA9IGV4cG9uZW50IDw8IG1hbnRpc3NhTGVuZ3RoIHwgbWFudGlzc2E7XG4gIGV4cG9uZW50TGVuZ3RoICs9IG1hbnRpc3NhTGVuZ3RoO1xuICB3aGlsZSAoZXhwb25lbnRMZW5ndGggPiAwKSB7XG4gICAgYnVmZmVyW2luZGV4KytdID0gZXhwb25lbnQgJiAyNTU7XG4gICAgZXhwb25lbnQgLz0gMjU2O1xuICAgIGV4cG9uZW50TGVuZ3RoIC09IDg7XG4gIH1cbiAgYnVmZmVyW2luZGV4IC0gMV0gfD0gc2lnbiAqIDEyODtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbnZhciB1bnBhY2sgPSBmdW5jdGlvbiAoYnVmZmVyLCBtYW50aXNzYUxlbmd0aCkge1xuICB2YXIgYnl0ZXMgPSBidWZmZXIubGVuZ3RoO1xuICB2YXIgZXhwb25lbnRMZW5ndGggPSBieXRlcyAqIDggLSBtYW50aXNzYUxlbmd0aCAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZXhwb25lbnRMZW5ndGgpIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgbkJpdHMgPSBleHBvbmVudExlbmd0aCAtIDc7XG4gIHZhciBpbmRleCA9IGJ5dGVzIC0gMTtcbiAgdmFyIHNpZ24gPSBidWZmZXJbaW5kZXgtLV07XG4gIHZhciBleHBvbmVudCA9IHNpZ24gJiAxMjc7XG4gIHZhciBtYW50aXNzYTtcbiAgc2lnbiA+Pj0gNztcbiAgd2hpbGUgKG5CaXRzID4gMCkge1xuICAgIGV4cG9uZW50ID0gZXhwb25lbnQgKiAyNTYgKyBidWZmZXJbaW5kZXgtLV07XG4gICAgbkJpdHMgLT0gODtcbiAgfVxuICBtYW50aXNzYSA9IGV4cG9uZW50ICYgKDEgPDwgLW5CaXRzKSAtIDE7XG4gIGV4cG9uZW50ID4+PSAtbkJpdHM7XG4gIG5CaXRzICs9IG1hbnRpc3NhTGVuZ3RoO1xuICB3aGlsZSAobkJpdHMgPiAwKSB7XG4gICAgbWFudGlzc2EgPSBtYW50aXNzYSAqIDI1NiArIGJ1ZmZlcltpbmRleC0tXTtcbiAgICBuQml0cyAtPSA4O1xuICB9XG4gIGlmIChleHBvbmVudCA9PT0gMCkge1xuICAgIGV4cG9uZW50ID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGV4cG9uZW50ID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG1hbnRpc3NhID8gTmFOIDogc2lnbiA/IC1JbmZpbml0eSA6IEluZmluaXR5O1xuICB9IGVsc2Uge1xuICAgIG1hbnRpc3NhICs9IHBvdygyLCBtYW50aXNzYUxlbmd0aCk7XG4gICAgZXhwb25lbnQgLT0gZUJpYXM7XG4gIH0gcmV0dXJuIChzaWduID8gLTEgOiAxKSAqIG1hbnRpc3NhICogcG93KDIsIGV4cG9uZW50IC0gbWFudGlzc2FMZW5ndGgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhY2s6IHBhY2ssXG4gIHVucGFjazogdW5wYWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIga2xhc3MgPSBjbGFzc29mKGl0KTtcbiAgcmV0dXJuIGtsYXNzID09PSAnQmlnSW50NjRBcnJheScgfHwga2xhc3MgPT09ICdCaWdVaW50NjRBcnJheSc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlc2NyaXB0b3IpIHtcbiAgcmV0dXJuIGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCAmJiAoaGFzT3duKGRlc2NyaXB0b3IsICd2YWx1ZScpIHx8IGhhc093bihkZXNjcmlwdG9yLCAnd3JpdGFibGUnKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgSXNJbnRlZ3JhbE51bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzaW50ZWdyYWxudW1iZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1udW1iZXItaXNpbnRlZ2VyIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzSW50ZWdlciB8fCBmdW5jdGlvbiBpc0ludGVnZXIoaXQpIHtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHNpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC1zaWduJyk7XG52YXIgcm91bmRUaWVzVG9FdmVuID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtcm91bmQtdGllcy10by1ldmVuJyk7XG5cbnZhciBhYnMgPSBNYXRoLmFicztcblxudmFyIEVQU0lMT04gPSAyLjIyMDQ0NjA0OTI1MDMxM2UtMTY7IC8vIE51bWJlci5FUFNJTE9OXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgsIEZMT0FUX0VQU0lMT04sIEZMT0FUX01BWF9WQUxVRSwgRkxPQVRfTUlOX1ZBTFVFKSB7XG4gIHZhciBuID0gK3g7XG4gIHZhciBhYnNvbHV0ZSA9IGFicyhuKTtcbiAgdmFyIHMgPSBzaWduKG4pO1xuICBpZiAoYWJzb2x1dGUgPCBGTE9BVF9NSU5fVkFMVUUpIHJldHVybiBzICogcm91bmRUaWVzVG9FdmVuKGFic29sdXRlIC8gRkxPQVRfTUlOX1ZBTFVFIC8gRkxPQVRfRVBTSUxPTikgKiBGTE9BVF9NSU5fVkFMVUUgKiBGTE9BVF9FUFNJTE9OO1xuICB2YXIgYSA9ICgxICsgRkxPQVRfRVBTSUxPTiAvIEVQU0lMT04pICogYWJzb2x1dGU7XG4gIHZhciByZXN1bHQgPSBhIC0gKGEgLSBhYnNvbHV0ZSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIGlmIChyZXN1bHQgPiBGTE9BVF9NQVhfVkFMVUUgfHwgcmVzdWx0ICE9PSByZXN1bHQpIHJldHVybiBzICogSW5maW5pdHk7XG4gIHJldHVybiBzICogcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmbG9hdFJvdW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtZmxvYXQtcm91bmQnKTtcblxudmFyIEZMT0FUMzJfRVBTSUxPTiA9IDEuMTkyMDkyODk1NTA3ODEyNWUtNzsgLy8gMiAqKiAtMjM7XG52YXIgRkxPQVQzMl9NQVhfVkFMVUUgPSAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4OyAvLyAyICoqIDEyOCAtIDIgKiogMTA0XG52YXIgRkxPQVQzMl9NSU5fVkFMVUUgPSAxLjE3NTQ5NDM1MDgyMjI4NzVlLTM4OyAvLyAyICoqIC0xMjY7XG5cbi8vIGBNYXRoLmZyb3VuZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGguZnJvdW5kXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC1mcm91bmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmZyb3VuZCB8fCBmdW5jdGlvbiBmcm91bmQoeCkge1xuICByZXR1cm4gZmxvYXRSb3VuZCh4LCBGTE9BVDMyX0VQU0lMT04sIEZMT0FUMzJfTUFYX1ZBTFVFLCBGTE9BVDMyX01JTl9WQUxVRSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEVQU0lMT04gPSAyLjIyMDQ0NjA0OTI1MDMxM2UtMTY7IC8vIE51bWJlci5FUFNJTE9OXG52YXIgSU5WRVJTRV9FUFNJTE9OID0gMSAvIEVQU0lMT047XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyBJTlZFUlNFX0VQU0lMT04gLSBJTlZFUlNFX0VQU0lMT047XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gYE1hdGguc2lnbmAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGguc2lnblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtc2lnbiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG4gPT09IDAgfHwgbiAhPT0gbiA/IG4gOiBuIDwgMCA/IC0xIDogMTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgVG9CaWdJbnRgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2JpZ2ludFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIHByaW0gPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ251bWJlcicpO1xuICBpZiAodHlwZW9mIHByaW0gPT0gJ251bWJlcicpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBudW1iZXIgdG8gYmlnaW50XCIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYmlnaW50IC0tIHNhZmVcbiAgcmV0dXJuIEJpZ0ludChwcmltKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbi8vIGBUb0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICB2YXIgbnVtYmVyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpdCk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChudW1iZXIpO1xuICBpZiAobnVtYmVyICE9PSBsZW5ndGgpIHRocm93IG5ldyAkUmFuZ2VFcnJvcignV3JvbmcgbGVuZ3RoIG9yIGluZGV4Jyk7XG4gIHJldHVybiBsZW5ndGg7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUG9zaXRpdmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXBvc2l0aXZlLWludGVnZXInKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIEJZVEVTKSB7XG4gIHZhciBvZmZzZXQgPSB0b1Bvc2l0aXZlSW50ZWdlcihpdCk7XG4gIGlmIChvZmZzZXQgJSBCWVRFUykgdGhyb3cgbmV3ICRSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQnKTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSB0b0ludGVnZXJPckluZmluaXR5KGl0KTtcbiAgaWYgKHJlc3VsdCA8IDApIHRocm93IG5ldyAkUmFuZ2VFcnJvcihcIlRoZSBhcmd1bWVudCBjYW4ndCBiZSBsZXNzIHRoYW4gMFwiKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdmFsdWUgPSByb3VuZChpdCk7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyAwIDogdmFsdWUgPiAweEZGID8gMHhGRiA6IHZhbHVlICYgMHhGRjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBUWVBFRF9BUlJBWVNfQ09OU1RSVUNUT1JTX1JFUVVJUkVTX1dSQVBQRVJTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3R5cGVkLWFycmF5LWNvbnN0cnVjdG9ycy1yZXF1aXJlLXdyYXBwZXJzJyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgQXJyYXlCdWZmZXJNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBpc0ludGVncmFsTnVtYmVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWludGVncmFsLW51bWJlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXgnKTtcbnZhciB0b09mZnNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vZmZzZXQnKTtcbnZhciB0b1VpbnQ4Q2xhbXBlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by11aW50OC1jbGFtcGVkJyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciB0eXBlZEFycmF5RnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1mcm9tJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgYXJyYXlGcm9tQ29uc3RydWN0b3JBbmRMaXN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20tY29uc3RydWN0b3ItYW5kLWxpc3QnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgUmFuZ2VFcnJvciA9IGdsb2JhbFRoaXMuUmFuZ2VFcnJvcjtcbnZhciBBcnJheUJ1ZmZlciA9IEFycmF5QnVmZmVyTW9kdWxlLkFycmF5QnVmZmVyO1xudmFyIEFycmF5QnVmZmVyUHJvdG90eXBlID0gQXJyYXlCdWZmZXIucHJvdG90eXBlO1xudmFyIERhdGFWaWV3ID0gQXJyYXlCdWZmZXJNb2R1bGUuRGF0YVZpZXc7XG52YXIgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IEFycmF5QnVmZmVyVmlld0NvcmUuTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUztcbnZhciBUWVBFRF9BUlJBWV9UQUcgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLlRZUEVEX0FSUkFZX1RBRztcbnZhciBUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5UeXBlZEFycmF5O1xudmFyIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLlR5cGVkQXJyYXlQcm90b3R5cGU7XG52YXIgaXNUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5pc1R5cGVkQXJyYXk7XG52YXIgQllURVNfUEVSX0VMRU1FTlQgPSAnQllURVNfUEVSX0VMRU1FTlQnO1xudmFyIFdST05HX0xFTkdUSCA9ICdXcm9uZyBsZW5ndGgnO1xuXG52YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKGl0LCBrZXksIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKVtrZXldO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgaXNBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIga2xhc3M7XG4gIHJldHVybiBpc1Byb3RvdHlwZU9mKEFycmF5QnVmZmVyUHJvdG90eXBlLCBpdCkgfHwgKGtsYXNzID0gY2xhc3NvZihpdCkpID09PSAnQXJyYXlCdWZmZXInIHx8IGtsYXNzID09PSAnU2hhcmVkQXJyYXlCdWZmZXInO1xufTtcblxudmFyIGlzVHlwZWRBcnJheUluZGV4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gIHJldHVybiBpc1R5cGVkQXJyYXkodGFyZ2V0KVxuICAgICYmICFpc1N5bWJvbChrZXkpXG4gICAgJiYga2V5IGluIHRhcmdldFxuICAgICYmIGlzSW50ZWdyYWxOdW1iZXIoK2tleSlcbiAgICAmJiBrZXkgPj0gMDtcbn07XG5cbnZhciB3cmFwcGVkR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgcmV0dXJuIGlzVHlwZWRBcnJheUluZGV4KHRhcmdldCwga2V5KVxuICAgID8gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDIsIHRhcmdldFtrZXldKVxuICAgIDogbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbn07XG5cbnZhciB3cmFwcGVkRGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChpc1R5cGVkQXJyYXlJbmRleCh0YXJnZXQsIGtleSlcbiAgICAmJiBpc09iamVjdChkZXNjcmlwdG9yKVxuICAgICYmIGhhc093bihkZXNjcmlwdG9yLCAndmFsdWUnKVxuICAgICYmICFoYXNPd24oZGVzY3JpcHRvciwgJ2dldCcpXG4gICAgJiYgIWhhc093bihkZXNjcmlwdG9yLCAnc2V0JylcbiAgICAvLyBUT0RPOiBhZGQgdmFsaWRhdGlvbiBkZXNjcmlwdG9yIHcvbyBjYWxsaW5nIGFjY2Vzc29yc1xuICAgICYmICFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZVxuICAgICYmICghaGFzT3duKGRlc2NyaXB0b3IsICd3cml0YWJsZScpIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUpXG4gICAgJiYgKCFoYXNPd24oZGVzY3JpcHRvciwgJ2VudW1lcmFibGUnKSB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUpXG4gICkge1xuICAgIHRhcmdldFtrZXldID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG59O1xuXG5pZiAoREVTQ1JJUFRPUlMpIHtcbiAgaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTKSB7XG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSB3cmFwcGVkR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIGRlZmluZVByb3BlcnR5TW9kdWxlLmYgPSB3cmFwcGVkRGVmaW5lUHJvcGVydHk7XG4gICAgYWRkR2V0dGVyKFR5cGVkQXJyYXlQcm90b3R5cGUsICdidWZmZXInKTtcbiAgICBhZGRHZXR0ZXIoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2J5dGVPZmZzZXQnKTtcbiAgICBhZGRHZXR0ZXIoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2J5dGVMZW5ndGgnKTtcbiAgICBhZGRHZXR0ZXIoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2xlbmd0aCcpO1xuICB9XG5cbiAgJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgfSwge1xuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogd3JhcHBlZEdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICBkZWZpbmVQcm9wZXJ0eTogd3JhcHBlZERlZmluZVByb3BlcnR5XG4gIH0pO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsIHdyYXBwZXIsIENMQU1QRUQpIHtcbiAgICB2YXIgQllURVMgPSBUWVBFLm1hdGNoKC9cXGQrLylbMF0gLyA4O1xuICAgIHZhciBDT05TVFJVQ1RPUl9OQU1FID0gVFlQRSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5JztcbiAgICB2YXIgR0VUVEVSID0gJ2dldCcgKyBUWVBFO1xuICAgIHZhciBTRVRURVIgPSAnc2V0JyArIFRZUEU7XG4gICAgdmFyIE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IGdsb2JhbFRoaXNbQ09OU1RSVUNUT1JfTkFNRV07XG4gICAgdmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IE5hdGl2ZVR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbiAgICB2YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yICYmIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgdmFyIGV4cG9ydGVkID0ge307XG5cbiAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24gKHRoYXQsIGluZGV4KSB7XG4gICAgICB2YXIgZGF0YSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICByZXR1cm4gZGF0YS52aWV3W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEuYnl0ZU9mZnNldCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAodGhhdCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICB2YXIgZGF0YSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICBkYXRhLnZpZXdbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5ieXRlT2Zmc2V0LCBDTEFNUEVEID8gdG9VaW50OENsYW1wZWQodmFsdWUpIDogdmFsdWUsIHRydWUpO1xuICAgIH07XG5cbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uICh0aGF0LCBpbmRleCkge1xuICAgICAgbmF0aXZlRGVmaW5lUHJvcGVydHkodGhhdCwgaW5kZXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKCFOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTKSB7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBkYXRhLCBvZmZzZXQsICRsZW5ndGgpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUpO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgYnl0ZU9mZnNldCA9IDA7XG4gICAgICAgIHZhciBidWZmZXIsIGJ5dGVMZW5ndGgsIGxlbmd0aDtcbiAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgICAgICAgIGxlbmd0aCA9IHRvSW5kZXgoZGF0YSk7XG4gICAgICAgICAgYnl0ZUxlbmd0aCA9IGxlbmd0aCAqIEJZVEVTO1xuICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgICBieXRlT2Zmc2V0ID0gdG9PZmZzZXQob2Zmc2V0LCBCWVRFUyk7XG4gICAgICAgICAgdmFyICRsZW4gPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgaWYgKCRsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCRsZW4gJSBCWVRFUykgdGhyb3cgbmV3IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIGlmIChieXRlTGVuZ3RoIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCArIGJ5dGVPZmZzZXQgPiAkbGVuKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNUeXBlZEFycmF5KGRhdGEpKSB7XG4gICAgICAgICAgcmV0dXJuIGFycmF5RnJvbUNvbnN0cnVjdG9yQW5kTGlzdChUeXBlZEFycmF5Q29uc3RydWN0b3IsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjYWxsKHR5cGVkQXJyYXlGcm9tLCBUeXBlZEFycmF5Q29uc3RydWN0b3IsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgICAgIGJ5dGVPZmZzZXQ6IGJ5dGVPZmZzZXQsXG4gICAgICAgICAgYnl0ZUxlbmd0aDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICB2aWV3OiBuZXcgRGF0YVZpZXcoYnVmZmVyKVxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSBhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBUeXBlZEFycmF5KTtcbiAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSA9IFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoVHlwZWRBcnJheVByb3RvdHlwZSk7XG4gICAgfSBlbHNlIGlmIChUWVBFRF9BUlJBWVNfQ09OU1RSVUNUT1JTX1JFUVVJUkVTX1dSQVBQRVJTKSB7XG4gICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChkdW1teSwgZGF0YSwgdHlwZWRBcnJheU9mZnNldCwgJGxlbmd0aCkge1xuICAgICAgICBhbkluc3RhbmNlKGR1bW15LCBUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gaW5oZXJpdElmUmVxdWlyZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHJldHVybiBuZXcgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKHRvSW5kZXgoZGF0YSkpO1xuICAgICAgICAgIGlmIChpc0FycmF5QnVmZmVyKGRhdGEpKSByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG5ldyBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3IoZGF0YSwgdG9PZmZzZXQodHlwZWRBcnJheU9mZnNldCwgQllURVMpLCAkbGVuZ3RoKVxuICAgICAgICAgICAgOiB0eXBlZEFycmF5T2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBuZXcgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKGRhdGEsIHRvT2Zmc2V0KHR5cGVkQXJyYXlPZmZzZXQsIEJZVEVTKSlcbiAgICAgICAgICAgICAgOiBuZXcgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKGRhdGEpO1xuICAgICAgICAgIGlmIChpc1R5cGVkQXJyYXkoZGF0YSkpIHJldHVybiBhcnJheUZyb21Db25zdHJ1Y3RvckFuZExpc3QoVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBkYXRhKTtcbiAgICAgICAgICByZXR1cm4gY2FsbCh0eXBlZEFycmF5RnJvbSwgVHlwZWRBcnJheUNvbnN0cnVjdG9yLCBkYXRhKTtcbiAgICAgICAgfSgpLCBkdW1teSwgVHlwZWRBcnJheUNvbnN0cnVjdG9yKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHNldFByb3RvdHlwZU9mKFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgVHlwZWRBcnJheSk7XG4gICAgICBmb3JFYWNoKGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIShrZXkgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShUeXBlZEFycmF5Q29uc3RydWN0b3IsIGtleSwgTmF0aXZlVHlwZWRBcnJheUNvbnN0cnVjdG9yW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGU7XG4gICAgfVxuXG4gICAgaWYgKFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZS5jb25zdHJ1Y3RvciAhPT0gVHlwZWRBcnJheUNvbnN0cnVjdG9yKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBUeXBlZEFycmF5Q29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSkuVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKFRZUEVEX0FSUkFZX1RBRykge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFR5cGVkQXJyYXlDb25zdHJ1Y3RvclByb3RvdHlwZSwgVFlQRURfQVJSQVlfVEFHLCBDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICB9XG5cbiAgICB2YXIgRk9SQ0VEID0gVHlwZWRBcnJheUNvbnN0cnVjdG9yICE9PSBOYXRpdmVUeXBlZEFycmF5Q29uc3RydWN0b3I7XG5cbiAgICBleHBvcnRlZFtDT05TVFJVQ1RPUl9OQU1FXSA9IFR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcblxuICAgICQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgfSwgZXhwb3J0ZWQpO1xuXG4gICAgaWYgKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgQllURVNfUEVSX0VMRU1FTlQsIEJZVEVTKTtcbiAgICB9XG5cbiAgICBpZiAoIShCWVRFU19QRVJfRUxFTUVOVCBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JQcm90b3R5cGUpKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoVHlwZWRBcnJheUNvbnN0cnVjdG9yUHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuICAgIH1cblxuICAgIHNldFNwZWNpZXMoQ09OU1RSVUNUT1JfTkFNRSk7XG4gIH07XG59IGVsc2UgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcsIHNvbmFyanMvaW5jb25zaXN0ZW50LWZ1bmN0aW9uLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJykuTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUztcblxudmFyIEFycmF5QnVmZmVyID0gZ2xvYmFsVGhpcy5BcnJheUJ1ZmZlcjtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWxUaGlzLkludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSAhTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBJbnQ4QXJyYXkoMSk7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBuZXcgSW50OEFycmF5KC0xKTtcbn0pIHx8ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIG5ldyBJbnQ4QXJyYXkoKTtcbiAgbmV3IEludDhBcnJheShudWxsKTtcbiAgbmV3IEludDhBcnJheSgxLjUpO1xuICBuZXcgSW50OEFycmF5KGl0ZXJhYmxlKTtcbn0sIHRydWUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gU2FmYXJpICgxMSspIGJ1ZyAtIGEgcmVhc29uIHdoeSBldmVuIFNhZmFyaSAxMyBzaG91bGQgbG9hZCBhIHR5cGVkIGFycmF5IHBvbHlmaWxsXG4gIHJldHVybiBuZXcgSW50OEFycmF5KG5ldyBBcnJheUJ1ZmZlcigyKSwgMSwgdW5kZWZpbmVkKS5sZW5ndGggIT09IDE7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhcnJheUZyb21Db25zdHJ1Y3RvckFuZExpc3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbS1jb25zdHJ1Y3Rvci1hbmQtbGlzdCcpO1xudmFyIGdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJykuZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgbGlzdCkge1xuICByZXR1cm4gYXJyYXlGcm9tQ29uc3RydWN0b3JBbmRMaXN0KGdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvcihpbnN0YW5jZSksIGxpc3QpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNvbnN0cnVjdG9yJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGlzQmlnSW50QXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYmlnLWludC1hcnJheScpO1xudmFyIGFUeXBlZEFycmF5Q29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpLmFUeXBlZEFycmF5Q29uc3RydWN0b3I7XG52YXIgdG9CaWdJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYmlnLWludCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwZm4sIHRoaXNBcmcgKi8pIHtcbiAgdmFyIEMgPSBhQ29uc3RydWN0b3IodGhpcyk7XG4gIHZhciBPID0gdG9PYmplY3Qoc291cmNlKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpLCBsZW5ndGgsIHJlc3VsdCwgdGhpc0lzQmlnSW50QXJyYXksIHZhbHVlLCBzdGVwLCBpdGVyYXRvciwgbmV4dDtcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICYmICFpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSB7XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihPLCBpdGVyYXRvck1ldGhvZCk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgTyA9IFtdO1xuICAgIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgICAgTy5wdXNoKHN0ZXAudmFsdWUpO1xuICAgIH1cbiAgfVxuICBpZiAobWFwcGluZyAmJiBhcmd1bWVudHNMZW5ndGggPiAyKSB7XG4gICAgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNbMl0pO1xuICB9XG4gIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICByZXN1bHQgPSBuZXcgKGFUeXBlZEFycmF5Q29uc3RydWN0b3IoQykpKGxlbmd0aCk7XG4gIHRoaXNJc0JpZ0ludEFycmF5ID0gaXNCaWdJbnRBcnJheShyZXN1bHQpO1xuICBmb3IgKGkgPSAwOyBsZW5ndGggPiBpOyBpKyspIHtcbiAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG4gICAgLy8gRkYzMC0gdHlwZWQgYXJyYXlzIGRvZXNuJ3QgcHJvcGVybHkgY29udmVydCBvYmplY3RzIHRvIHR5cGVkIGFycmF5IHZhbHVlc1xuICAgIHJlc3VsdFtpXSA9IHRoaXNJc0JpZ0ludEFycmF5ID8gdG9CaWdJbnQodmFsdWUpIDogK3ZhbHVlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNEYXRhRGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1kYXRhLWRlc2NyaXB0b3InKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIGBSZWZsZWN0LmdldGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZmxlY3QuZ2V0XG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSAvKiAsIHJlY2VpdmVyICovKSB7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdO1xuICB2YXIgZGVzY3JpcHRvciwgcHJvdG90eXBlO1xuICBpZiAoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIGlmIChkZXNjcmlwdG9yKSByZXR1cm4gaXNEYXRhRGVzY3JpcHRvcihkZXNjcmlwdG9yKVxuICAgID8gZGVzY3JpcHRvci52YWx1ZVxuICAgIDogZGVzY3JpcHRvci5nZXQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGNhbGwoZGVzY3JpcHRvci5nZXQsIHJlY2VpdmVyKTtcbiAgaWYgKGlzT2JqZWN0KHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSByZXR1cm4gZ2V0KHByb3RvdHlwZSwgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgZ2V0OiBnZXRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbiQoeyBnbG9iYWw6IHRydWUgfSwgeyBSZWZsZWN0OiB7fSB9KTtcblxuLy8gUmVmbGVjdFtAQHRvU3RyaW5nVGFnXSBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWZsZWN0LUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKGdsb2JhbFRoaXMuUmVmbGVjdCwgJ1JlZmxlY3QnLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmF0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5hdFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnYXQnLCBmdW5jdGlvbiBhdChpbmRleCkge1xuICB2YXIgTyA9IGFUeXBlZEFycmF5KHRoaXMpO1xuICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciByZWxhdGl2ZUluZGV4ID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHZhciBrID0gcmVsYXRpdmVJbmRleCA+PSAwID8gcmVsYXRpdmVJbmRleCA6IGxlbiArIHJlbGF0aXZlSW5kZXg7XG4gIHJldHVybiAoayA8IDAgfHwgayA+PSBsZW4pID8gdW5kZWZpbmVkIDogT1trXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRBcnJheUNvcHlXaXRoaW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktY29weS13aXRoaW4nKTtcblxudmFyIHUkQXJyYXlDb3B5V2l0aGluID0gdW5jdXJyeVRoaXMoJEFycmF5Q29weVdpdGhpbik7XG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmNvcHlXaXRoaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmNvcHl3aXRoaW5cbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2NvcHlXaXRoaW4nLCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQgLyogLCBlbmQgKi8pIHtcbiAgcmV0dXJuIHUkQXJyYXlDb3B5V2l0aGluKGFUeXBlZEFycmF5KHRoaXMpLCB0YXJnZXQsIHN0YXJ0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkZXZlcnkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZXZlcnk7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmV2ZXJ5XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdldmVyeScsIGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZXZlcnkoYVR5cGVkQXJyYXkodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRmaWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZpbGwnKTtcbnZhciB0b0JpZ0ludCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1iaWctaW50Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG4vLyBWOCB+IENocm9tZSA8IDU5LCBTYWZhcmkgPCAxNC4xLCBGRiA8IDU1LCBFZGdlIDw9MThcbnZhciBDT05WRVJTSU9OX0JVRyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXR5cGVkLWFycmF5cyAtLSBzYWZlXG4gIG5ldyBJbnQ4QXJyYXkoMikuZmlsbCh7IHZhbHVlT2Y6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvdW50Kys7IH0gfSk7XG4gIHJldHVybiBjb3VudCAhPT0gMTtcbn0pO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5maWxsYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5maWxsXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdmaWxsJywgZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0LCBlbmQgKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGFUeXBlZEFycmF5KHRoaXMpO1xuICB2YXIgYWN0dWFsVmFsdWUgPSBzbGljZShjbGFzc29mKHRoaXMpLCAwLCAzKSA9PT0gJ0JpZycgPyB0b0JpZ0ludCh2YWx1ZSkgOiArdmFsdWU7XG4gIHJldHVybiBjYWxsKCRmaWxsLCB0aGlzLCBhY3R1YWxWYWx1ZSwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG59LCBDT05WRVJTSU9OX0JVRyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgZnJvbVNhbWVUeXBlQW5kTGlzdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90eXBlZC1hcnJheS1mcm9tLXNhbWUtdHlwZS1hbmQtbGlzdCcpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuZmlsdGVyXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdmaWx0ZXInLCBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgdmFyIGxpc3QgPSAkZmlsdGVyKGFUeXBlZEFycmF5KHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIHJldHVybiBmcm9tU2FtZVR5cGVBbmRMaXN0KHRoaXMsIGxpc3QpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgJGZpbmRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kSW5kZXg7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5maW5kaW5kZXhcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2ZpbmRJbmRleCcsIGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUgLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZmluZEluZGV4KGFUeXBlZEFycmF5KHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRmaW5kTGFzdEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi1mcm9tLWxhc3QnKS5maW5kTGFzdEluZGV4O1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZpbmRMYXN0SW5kZXhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmZpbmRsYXN0aW5kZXhcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2ZpbmRMYXN0SW5kZXgnLCBmdW5jdGlvbiBmaW5kTGFzdEluZGV4KHByZWRpY2F0ZSAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmaW5kTGFzdEluZGV4KGFUeXBlZEFycmF5KHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRmaW5kTGFzdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24tZnJvbS1sYXN0JykuZmluZExhc3Q7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZmluZExhc3RgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmZpbmRsYXN0XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdmaW5kTGFzdCcsIGZ1bmN0aW9uIGZpbmRMYXN0KHByZWRpY2F0ZSAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmaW5kTGFzdChhVHlwZWRBcnJheSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLmZpbmRcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2ZpbmQnLCBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmaW5kKGFUeXBlZEFycmF5KHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuZm9yZWFjaFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnZm9yRWFjaCcsIGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgJGZvckVhY2goYVR5cGVkQXJyYXkodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluY2x1ZGVzO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5pbmNsdWRlc1xuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnaW5jbHVkZXMnLCBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ICovKSB7XG4gIHJldHVybiAkaW5jbHVkZXMoYVR5cGVkQXJyYXkodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5pbmRleG9mXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdpbmRleE9mJywgZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ICovKSB7XG4gIHJldHVybiAkaW5kZXhPZihhVHlwZWRBcnJheSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgQXJyYXlJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBVaW50OEFycmF5ID0gZ2xvYmFsVGhpcy5VaW50OEFycmF5O1xudmFyIGFycmF5VmFsdWVzID0gdW5jdXJyeVRoaXMoQXJyYXlJdGVyYXRvcnMudmFsdWVzKTtcbnZhciBhcnJheUtleXMgPSB1bmN1cnJ5VGhpcyhBcnJheUl0ZXJhdG9ycy5rZXlzKTtcbnZhciBhcnJheUVudHJpZXMgPSB1bmN1cnJ5VGhpcyhBcnJheUl0ZXJhdG9ycy5lbnRyaWVzKTtcbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcbnZhciBUeXBlZEFycmF5UHJvdG90eXBlID0gVWludDhBcnJheSAmJiBVaW50OEFycmF5LnByb3RvdHlwZTtcblxudmFyIEdFTkVSSUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKFsxXSk7XG59KTtcblxudmFyIElURVJBVE9SX0lTX1ZBTFVFUyA9ICEhVHlwZWRBcnJheVByb3RvdHlwZVxuICAmJiBUeXBlZEFycmF5UHJvdG90eXBlLnZhbHVlc1xuICAmJiBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gVHlwZWRBcnJheVByb3RvdHlwZS52YWx1ZXNcbiAgJiYgVHlwZWRBcnJheVByb3RvdHlwZS52YWx1ZXMubmFtZSA9PT0gJ3ZhbHVlcyc7XG5cbnZhciB0eXBlZEFycmF5VmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICByZXR1cm4gYXJyYXlWYWx1ZXMoYVR5cGVkQXJyYXkodGhpcykpO1xufTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuZW50cmllc1xuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnZW50cmllcycsIGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gIHJldHVybiBhcnJheUVudHJpZXMoYVR5cGVkQXJyYXkodGhpcykpO1xufSwgR0VORVJJQyk7XG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5rZXlzXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdrZXlzJywgZnVuY3Rpb24ga2V5cygpIHtcbiAgcmV0dXJuIGFycmF5S2V5cyhhVHlwZWRBcnJheSh0aGlzKSk7XG59LCBHRU5FUklDKTtcbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUudmFsdWVzXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCd2YWx1ZXMnLCB0eXBlZEFycmF5VmFsdWVzLCBHRU5FUklDIHx8ICFJVEVSQVRPUl9JU19WQUxVRVMsIHsgbmFtZTogJ3ZhbHVlcycgfSk7XG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUtQEBpdGVyYXRvclxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZChJVEVSQVRPUiwgdHlwZWRBcnJheVZhbHVlcywgR0VORVJJQyB8fCAhSVRFUkFUT1JfSVNfVkFMVUVTLCB7IG5hbWU6ICd2YWx1ZXMnIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgJGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuam9pblxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnam9pbicsIGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gIHJldHVybiAkam9pbihhVHlwZWRBcnJheSh0aGlzKSwgc2VwYXJhdG9yKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgJGxhc3RJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YnKTtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUubGFzdGluZGV4b2ZcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ2xhc3RJbmRleE9mJywgZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgcmV0dXJuIGFwcGx5KCRsYXN0SW5kZXhPZiwgYVR5cGVkQXJyYXkodGhpcyksIGxlbmd0aCA+IDEgPyBbc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdXSA6IFtzZWFyY2hFbGVtZW50XSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBnZXRUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLm1hcFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnbWFwJywgZnVuY3Rpb24gbWFwKG1hcGZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJG1hcChhVHlwZWRBcnJheSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyAoZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKE8pKShsZW5ndGgpO1xuICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRyZWR1Y2VSaWdodCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1yZWR1Y2UnKS5yaWdodDtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5yZWR1Y2VSaWdodGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUucmVkdWNlcmlnaHRcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3JlZHVjZVJpZ2h0JywgZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgcmV0dXJuICRyZWR1Y2VSaWdodChhVHlwZWRBcnJheSh0aGlzKSwgY2FsbGJhY2tmbiwgbGVuZ3RoLCBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykubGVmdDtcblxudmFyIGFUeXBlZEFycmF5ID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5hVHlwZWRBcnJheTtcbnZhciBleHBvcnRUeXBlZEFycmF5TWV0aG9kID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5leHBvcnRUeXBlZEFycmF5TWV0aG9kO1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnJlZHVjZVxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgncmVkdWNlJywgZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHJldHVybiAkcmVkdWNlKGFUeXBlZEFycmF5KHRoaXMpLCBjYWxsYmFja2ZuLCBsZW5ndGgsIGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG5cbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnJldmVyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnJldmVyc2VcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3JldmVyc2UnLCBmdW5jdGlvbiByZXZlcnNlKCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBsZW5ndGggPSBhVHlwZWRBcnJheSh0aGF0KS5sZW5ndGg7XG4gIHZhciBtaWRkbGUgPSBmbG9vcihsZW5ndGggLyAyKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHZhbHVlO1xuICB3aGlsZSAoaW5kZXggPCBtaWRkbGUpIHtcbiAgICB2YWx1ZSA9IHRoYXRbaW5kZXhdO1xuICAgIHRoYXRbaW5kZXgrK10gPSB0aGF0Wy0tbGVuZ3RoXTtcbiAgICB0aGF0W2xlbmd0aF0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdGhhdDtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHRvT2Zmc2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9mZnNldCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgUmFuZ2VFcnJvciA9IGdsb2JhbFRoaXMuUmFuZ2VFcnJvcjtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWxUaGlzLkludDhBcnJheTtcbnZhciBJbnQ4QXJyYXlQcm90b3R5cGUgPSBJbnQ4QXJyYXkgJiYgSW50OEFycmF5LnByb3RvdHlwZTtcbnZhciAkc2V0ID0gSW50OEFycmF5UHJvdG90eXBlICYmIEludDhBcnJheVByb3RvdHlwZS5zZXQ7XG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbnZhciBXT1JLU19XSVRIX09CSkVDVFNfQU5EX0dFTkVSSUNfT05fVFlQRURfQVJSQVlTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXR5cGVkLWFycmF5cyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgYXJyYXkgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoMik7XG4gIGNhbGwoJHNldCwgYXJyYXksIHsgbGVuZ3RoOiAxLCAwOiAzIH0sIDEpO1xuICByZXR1cm4gYXJyYXlbMV0gIT09IDM7XG59KTtcblxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTEyOTQgYW5kIG90aGVyXG52YXIgVE9fT0JKRUNUX0JVRyA9IFdPUktTX1dJVEhfT0JKRUNUU19BTkRfR0VORVJJQ19PTl9UWVBFRF9BUlJBWVMgJiYgQXJyYXlCdWZmZXJWaWV3Q29yZS5OQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gbmV3IEludDhBcnJheSgyKTtcbiAgYXJyYXkuc2V0KDEpO1xuICBhcnJheS5zZXQoJzInLCAxKTtcbiAgcmV0dXJuIGFycmF5WzBdICE9PSAwIHx8IGFycmF5WzFdICE9PSAyO1xufSk7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnNldGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuc2V0XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdzZXQnLCBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qICwgb2Zmc2V0ICovKSB7XG4gIGFUeXBlZEFycmF5KHRoaXMpO1xuICB2YXIgb2Zmc2V0ID0gdG9PZmZzZXQoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDEpO1xuICB2YXIgc3JjID0gdG9JbmRleGVkT2JqZWN0KGFycmF5TGlrZSk7XG4gIGlmIChXT1JLU19XSVRIX09CSkVDVFNfQU5EX0dFTkVSSUNfT05fVFlQRURfQVJSQVlTKSByZXR1cm4gY2FsbCgkc2V0LCB0aGlzLCBzcmMsIG9mZnNldCk7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKHNyYyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIGlmIChsZW4gKyBvZmZzZXQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdXcm9uZyBsZW5ndGgnKTtcbiAgd2hpbGUgKGluZGV4IDwgbGVuKSB0aGlzW29mZnNldCArIGluZGV4XSA9IHNyY1tpbmRleCsrXTtcbn0sICFXT1JLU19XSVRIX09CSkVDVFNfQU5EX0dFTkVSSUNfT05fVFlQRURfQVJSQVlTIHx8IFRPX09CSkVDVF9CVUcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEFycmF5QnVmZmVyVmlld0NvcmUuZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yO1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby10eXBlZC1hcnJheXMgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgbmV3IEludDhBcnJheSgxKS5zbGljZSgpO1xufSk7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5zbGljZVxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnc2xpY2UnLCBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gIHZhciBsaXN0ID0gYXJyYXlTbGljZShhVHlwZWRBcnJheSh0aGlzKSwgc3RhcnQsIGVuZCk7XG4gIHZhciBDID0gZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKHRoaXMpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICByZXR1cm4gcmVzdWx0O1xufSwgRk9SQ0VEKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciAkc29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5zb21lO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnNvbWVcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3NvbWUnLCBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkc29tZShhVHlwZWRBcnJheSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaW50ZXJuYWxTb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNvcnQnKTtcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciBGRiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1mZi12ZXJzaW9uJyk7XG52YXIgSUVfT1JfRURHRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1pZS1vci1lZGdlJyk7XG52YXIgVjggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIFdFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC13ZWJraXQtdmVyc2lvbicpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgVWludDE2QXJyYXkgPSBnbG9iYWxUaGlzLlVpbnQxNkFycmF5O1xudmFyIG5hdGl2ZVNvcnQgPSBVaW50MTZBcnJheSAmJiB1bmN1cnJ5VGhpcyhVaW50MTZBcnJheS5wcm90b3R5cGUuc29ydCk7XG5cbi8vIFdlYktpdFxudmFyIEFDQ0VQVF9JTkNPUlJFQ1RfQVJHVU1FTlRTID0gISFuYXRpdmVTb3J0ICYmICEoZmFpbHMoZnVuY3Rpb24gKCkge1xuICBuYXRpdmVTb3J0KG5ldyBVaW50MTZBcnJheSgyKSwgbnVsbCk7XG59KSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIG5hdGl2ZVNvcnQobmV3IFVpbnQxNkFycmF5KDIpLCB7fSk7XG59KSk7XG5cbnZhciBTVEFCTEVfU09SVCA9ICEhbmF0aXZlU29ydCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBmZWF0dXJlIGRldGVjdGlvbiBjYW4gYmUgdG9vIHNsb3csIHNvIGNoZWNrIGVuZ2luZXMgdmVyc2lvbnNcbiAgaWYgKFY4KSByZXR1cm4gVjggPCA3NDtcbiAgaWYgKEZGKSByZXR1cm4gRkYgPCA2NztcbiAgaWYgKElFX09SX0VER0UpIHJldHVybiB0cnVlO1xuICBpZiAoV0VCS0lUKSByZXR1cm4gV0VCS0lUIDwgNjAyO1xuXG4gIHZhciBhcnJheSA9IG5ldyBVaW50MTZBcnJheSg1MTYpO1xuICB2YXIgZXhwZWN0ZWQgPSBBcnJheSg1MTYpO1xuICB2YXIgaW5kZXgsIG1vZDtcblxuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCA1MTY7IGluZGV4KyspIHtcbiAgICBtb2QgPSBpbmRleCAlIDQ7XG4gICAgYXJyYXlbaW5kZXhdID0gNTE1IC0gaW5kZXg7XG4gICAgZXhwZWN0ZWRbaW5kZXhdID0gaW5kZXggLSAyICogbW9kICsgMztcbiAgfVxuXG4gIG5hdGl2ZVNvcnQoYXJyYXksIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIChhIC8gNCB8IDApIC0gKGIgLyA0IHwgMCk7XG4gIH0pO1xuXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IDUxNjsgaW5kZXgrKykge1xuICAgIGlmIChhcnJheVtpbmRleF0gIT09IGV4cGVjdGVkW2luZGV4XSkgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG52YXIgZ2V0U29ydENvbXBhcmUgPSBmdW5jdGlvbiAoY29tcGFyZWZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmIChjb21wYXJlZm4gIT09IHVuZGVmaW5lZCkgcmV0dXJuICtjb21wYXJlZm4oeCwgeSkgfHwgMDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmICh5ICE9PSB5KSByZXR1cm4gLTE7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoeCAhPT0geCkgcmV0dXJuIDE7XG4gICAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkgcmV0dXJuIDEgLyB4ID4gMCAmJiAxIC8geSA8IDAgPyAxIDogLTE7XG4gICAgcmV0dXJuIHggPiB5O1xuICB9O1xufTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUuc29ydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuc29ydFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnc29ydCcsIGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gIGlmIChjb21wYXJlZm4gIT09IHVuZGVmaW5lZCkgYUNhbGxhYmxlKGNvbXBhcmVmbik7XG4gIGlmIChTVEFCTEVfU09SVCkgcmV0dXJuIG5hdGl2ZVNvcnQodGhpcywgY29tcGFyZWZuKTtcblxuICByZXR1cm4gaW50ZXJuYWxTb3J0KGFUeXBlZEFycmF5KHRoaXMpLCBnZXRTb3J0Q29tcGFyZShjb21wYXJlZm4pKTtcbn0sICFTVEFCTEVfU09SVCB8fCBBQ0NFUFRfSU5DT1JSRUNUX0FSR1VNRU5UUyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWxUaGlzLkludDhBcnJheTtcbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcbnZhciAkdG9Mb2NhbGVTdHJpbmcgPSBbXS50b0xvY2FsZVN0cmluZztcblxuLy8gaU9TIFNhZmFyaSA2LnggZmFpbHMgaGVyZVxudmFyIFRPX0xPQ0FMRV9TVFJJTkdfQlVHID0gISFJbnQ4QXJyYXkgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAkdG9Mb2NhbGVTdHJpbmcuY2FsbChuZXcgSW50OEFycmF5KDEpKTtcbn0pO1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT09IG5ldyBJbnQ4QXJyYXkoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgSW50OEFycmF5LnByb3RvdHlwZS50b0xvY2FsZVN0cmluZy5jYWxsKFsxLCAyXSk7XG59KTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnRvbG9jYWxlc3RyaW5nXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCd0b0xvY2FsZVN0cmluZycsIGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCkge1xuICByZXR1cm4gYXBwbHkoXG4gICAgJHRvTG9jYWxlU3RyaW5nLFxuICAgIFRPX0xPQ0FMRV9TVFJJTkdfQlVHID8gYXJyYXlTbGljZShhVHlwZWRBcnJheSh0aGlzKSkgOiBhVHlwZWRBcnJheSh0aGlzKSxcbiAgICBhcnJheVNsaWNlKGFyZ3VtZW50cylcbiAgKTtcbn0sIEZPUkNFRCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJykuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIFVpbnQ4QXJyYXkgPSBnbG9iYWxUaGlzLlVpbnQ4QXJyYXk7XG52YXIgVWludDhBcnJheVByb3RvdHlwZSA9IFVpbnQ4QXJyYXkgJiYgVWludDhBcnJheS5wcm90b3R5cGUgfHwge307XG52YXIgYXJyYXlUb1N0cmluZyA9IFtdLnRvU3RyaW5nO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxuaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHsgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTsgfSkpIHtcbiAgYXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBqb2luKHRoaXMpO1xuICB9O1xufVxuXG52YXIgSVNfTk9UX0FSUkFZX01FVEhPRCA9IFVpbnQ4QXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT09IGFycmF5VG9TdHJpbmc7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS50b3N0cmluZ1xuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgndG9TdHJpbmcnLCBhcnJheVRvU3RyaW5nLCBJU19OT1RfQVJSQVlfTUVUSE9EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGVUeXBlZEFycmF5Q29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHlwZWQtYXJyYXktY29uc3RydWN0b3InKTtcblxuLy8gYFVpbnQ4QXJyYXlgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXR5cGVkYXJyYXktb2JqZWN0c1xuY3JlYXRlVHlwZWRBcnJheUNvbnN0cnVjdG9yKCdVaW50OCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmF0Jyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy50eXBlZC1hcnJheS5maW5kLWxhc3QtaW5kZXgnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LmZpbmQtbGFzdCcpO1xuIiwiaW1wb3J0IENvcmVFbmdpbmUgZnJvbSAnLi4vc3JjL2VuZ2luZS9Db3JlRW5naW5lJztcbmltcG9ydCBQbGF5ZXJNYW5hZ2VySGFuZGxlciBmcm9tICcuLi9zcmMvZW5naW5lL3BsYXllci9QbGF5ZXJNYW5hZ2VySGFuZGxlcic7XG5pbXBvcnQgeyBDYWNoZUhhbmRsZXIgfSBmcm9tICcuLi9zcmMvZW5naW5lL3N5c3RlbS9DYWNoZUhhbmRsZXInO1xuaW1wb3J0IHsgUGxheWVyRXZlbnRMaXN0ZW5lciwgR2VuZXJpY1BsYXllckFwaSB9IGZyb20gJ2FuYWx5dGljcyc7XG5cbkNvcmVFbmdpbmUuYW5hbHl0aWNzTW9kdWxlID0ge1xuICAgIFBsYXllck1hbmFnZXJIYW5kbGVyLFxuICAgIFBsYXllckV2ZW50TGlzdGVuZXIsXG4gICAgR2VuZXJpY1BsYXllckFwaSxcbiAgICBDYWNoZUhhbmRsZXJcbn07XG5Db3JlRW5naW5lLmdldEluc3RhbmNlKCkucmVnaXN0ZXJQbGF5ZXJBZGFwdGVycygpO1xuXG5leHBvcnQgKiBmcm9tICdhbmFseXRpY3MnO1xuZXhwb3J0IHtcbiAgICBDYWNoZUhhbmRsZXJcbn07XG4iLCIvLyBpbXBvcnQgeyBHZW5lcmljUGxheWVyQWRhcHRlciB9IGZyb20gJ2NvcmUnO1xuaW1wb3J0IHsgR2VuZXJpY1BsYXllckFkYXB0ZXIgfSBmcm9tICdhbmFseXRpY3MnO1xuLyogaW1wb3J0IFNoYWthUGxheWVyQWRhcHRlciBmcm9tICcuLi8uLi8uLi9wbGF5ZXJzL3NoYWthL1NoYWthUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgRGFzaEpzUGxheWVyQWRhcHRlciBmcm9tICcuLi8uLi8uLi9wbGF5ZXJzL2Rhc2hqcy9EYXNoSnNQbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBIVE1MNVBsYXllckFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9odG1sNS9IVE1MNVBsYXllckFkYXB0ZXInO1xuaW1wb3J0IEFWUGxheUFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9hdnBsYXkvQVZQbGF5QWRhcHRlcic7XG5pbXBvcnQgU2FnZW1jb21ESVczODdBZGFwdGVyIGZyb20gJy4uLy4uLy4uL3BsYXllcnMvc2FnZW1jb20tZGl3Mzg3L1NhZ2VtY29tRElXMzg3QWRhcHRlcic7XG5pbXBvcnQgSGJiVFYxUGxheWVyQWRhcHRlciBmcm9tICcuLi8uLi8uLi9wbGF5ZXJzL2hiYnR2MS9IYmJUVjFQbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBLYWx0dXJhUGxheWVyQWRhcHRlciBmcm9tICcuLi8uLi8uLi9wbGF5ZXJzL2thbHR1cmEvS2FsdHVyYVBsYXllckFkYXB0ZXInO1xuaW1wb3J0IFZpZGVvSnNQbGF5ZXJBZGFwdGVyIGZyb20gJy4uLy4uLy4uL3BsYXllcnMvdmlkZW9qcy9WaWRlb0pzUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgQ29ubmVjdFBsYXllckFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vcGxheWVycy9jb25uZWN0cGxheWVyL0Nvbm5lY3RQbGF5ZXJBZGFwdGVyJzsqL1xuaW1wb3J0IENvcmVFbmdpbmUgZnJvbSAnLi4vQ29yZUVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1hbmFnZXJIYW5kbGVyIHtcbiAgICAjYWRhcHRlcnM7XG5cbiAgICBsb2FkUGxheWVyQWRhcHRlcnMoKSB7XG4gICAgICAgIHRoaXMuI2FkYXB0ZXJzID0ge307XG4gICAgICAgIHRoaXMuI2FkYXB0ZXJzWydnZW5lcmljJ10gPSBHZW5lcmljUGxheWVyQWRhcHRlcjtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCd2b3BsYXllcicsIENvcmVFbmdpbmUudm9wbGF5ZXJNb2R1bGU/LlZPUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcigndGhlb3BsYXllcicsIENvcmVFbmdpbmUudGhlb3BsYXllck1vZHVsZT8uVEhFT1BsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ3NoYWthJywgQ29yZUVuZ2luZS5zaGFrYU1vZHVsZT8uU2hha2FQbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdkYXNoanMnLCBDb3JlRW5naW5lLmRhc2hqc01vZHVsZT8uRGFzaEpzUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcignaHRtbDUnLCBDb3JlRW5naW5lLmh0bWw1TW9kdWxlPy5IVE1MNVBsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ2F2cGxheScsIENvcmVFbmdpbmUuYXZwbGF5TW9kdWxlPy5BVlBsYXlBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdkaXczODcnLCBDb3JlRW5naW5lLmRpdzM4N01vZHVsZT8uU2FnZW1jb21ESVczODdBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdoYmJ0djEnLCBDb3JlRW5naW5lLmhiYnR2MU1vZHVsZT8uSGJiVFYxUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcigna2FsdHVyYScsIENvcmVFbmdpbmUua2FsdHVyYU1vZHVsZT8uS2FsdHVyYVBsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ2Nvbm5lY3RwbGF5ZXInLCBDb3JlRW5naW5lLmNvbm5lY3RwbGF5ZXJNb2R1bGU/LkNvbm5lY3RQbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdyeHBsYXllcicsIENvcmVFbmdpbmUucnhwbGF5ZXJNb2R1bGU/LlJ4UGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcigndmlkZW9qcycsIENvcmVFbmdpbmUudmlkZW9qc01vZHVsZT8uVmlkZW9Kc1BsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ2hsc2pzJywgQ29yZUVuZ2luZS5obHNqc01vZHVsZT8uSGxzSnNQbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdiaXRtb3ZpbicsIENvcmVFbmdpbmUuYml0bW92aW5Nb2R1bGU/LkJpdG1vdmluUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcigncmVhY3RuYXRpdmVjb25uZWN0cGxheWVyJywgQ29yZUVuZ2luZS5yZWFjdG5hdGl2ZWNvbm5lY3RwbGF5ZXJNb2R1bGU/LlJlYWN0TmF0aXZlQ29ubmVjdFBsYXllckFkYXB0ZXIpO1xuICAgICAgICB0aGlzLmFkZEFkYXB0ZXIoJ3JlYWN0bmF0aXZldGhlb3BsYXllcicsIENvcmVFbmdpbmUucmVhY3RuYXRpdmV0aGVvcGxheWVyTW9kdWxlPy5SZWFjdE5hdGl2ZVRIRU9wbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hZGRBZGFwdGVyKCdyZWFjdG5hdGl2ZWJpdG1vdmluJywgQ29yZUVuZ2luZS5yZWFjdG5hdGl2ZWJpdG1vdmluTW9kdWxlPy5SZWFjdE5hdGl2ZUJpdG1vdmluUGxheWVyQWRhcHRlcik7XG4gICAgICAgIHRoaXMuYWRkQWRhcHRlcignY2hyb21lY2FzdCcsIENvcmVFbmdpbmUuY2hyb21lY2FzdE1vZHVsZT8uQ2hyb21lY2FzdFBsYXllckFkYXB0ZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNhZGFwdGVycztcbiAgICB9XG5cbiAgICBhZGRBZGFwdGVyKG5hbWUsIGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy4jYWRhcHRlcnNbbmFtZV0gPSBhZGFwdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNoUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuI2FkYXB0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jYWRhcHRlcnNba2V5XSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuI2FkYXB0ZXJzW2tleV0uY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFwdGVyID0gbmV3IHRoaXMuI2FkYXB0ZXJzW2tleV0oKTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLmF0dGFjaFBsYXllcihwbGF5ZXIsIGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMb2dnZXJNYW5hZ2VyIH0gZnJvbSAnY29yZSc7XG5cbmNvbnN0IFRBRyA9ICdCcGtDYWNoZUhhbmRsZXInO1xuXG5jb25zdCBQUkVGSVggPSAnc2wtJztcblxuZXhwb3J0IGNsYXNzIENhY2hlSGFuZGxlciB7XG4gICAgc3RvcmFnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSW5pdCBjYWNoZSBoYW5kbGVyLCBsb2NhbFN0b3JhZ2UgaXMgJyArICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyA/ICdhdmFpbGFibGUnIDogJ3VuYXZhaWxhYmxlJykgKyAnLi4uJyk7XG5cbiAgICAgICAgLy8gSW5pdCBzdG9yYWdlXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHt9O1xuXG4gICAgICAgIC8vIExvYWQgZXhpc3RpbmcgY2FjaGVcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5cy5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKFBSRUZJWCkpIC8vIEZpbHRlciBvbiBTbWFydExpYiBkYXRhXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGFsbCByZXBvcnRzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGNhY2hlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtjYWNoZS5rZXldID0gY2FjaGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IFBSRUZJWCArIGtleTtcblxuICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlPy5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBnZXQoa2V5LCBrZXlJbmNsdWRlc1ByZWZpeCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChrZXlJbmNsdWRlc1ByZWZpeCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGtleSA9IFBSRUZJWCArIGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBleGlzdHMsIHJldHVybiBpdFxuICAgICAgICBpZiAoa2V5IGluIHRoaXMuc3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSG90IGxvYWQgbG9jYWwgc3RvcmFnZVxuICAgICAgICBsZXQgaXRlbTtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gaXRlbTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgICAga2V5ID0gUFJFRklYICsga2V5O1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0b3JhZ2Vba2V5XTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZT8ucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBrZXlzKCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4ga2V5LnJlcGxhY2UoUFJFRklYLCAnJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4uL3V0aWxzL01hdGhVdGlscyc7XG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi4vU21hcnRMaWInO1xuaW1wb3J0IEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyIGZyb20gJy4uL3JlcXVlc3QvQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXInO1xuaW1wb3J0IHtCcm9hZHBlYWtDRE5LZWVwYWxpdmVNYW5hZ2VyLCBLZWVwQWxpdmVNYW5hZ2VyfSBmcm9tICcuLi9uZXR3b3JrL0tlZXBBbGl2ZU1hbmFnZXInO1xuaW1wb3J0IEpvYk1hbmFnZXIgZnJvbSAnLi4vc2VydmljZS9Kb2JNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0NhY2hlTWdyJztcblxuLyoqXG4gKiBDYWNoZSBoYW5kbGVyIHdyYXBwZXJcbiAqL1xuY2xhc3MgQWJzdHJhY3RDYWNoZUhhbmRsZXIge1xuICAgIHNldChrZXksIHZhbHVlKSB7XG5cbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZGVsZXRlKGtleSkge1xuXG4gICAgfVxuXG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWNoZSBzdG9yYWdlIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogTWF4IGNhY2hlIHN0b3JhZ2UgZHVyYXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgQ0FDSEVfRFVSQVRJT04gPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMjsgLy8gMiBkYXlzXG5cbiAgICAvKipcbiAgICAgKiBNYXggbnVtYmVyIG9mIGl0ZW0gaW4gY2FjaGVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBDQUNIRV9MSU1JVCA9IDIwO1xuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uXG4gICAgICovXG4gICAgc3RhdGljICNpbnN0YW5jZTtcblxuICAgIHNtYXJ0TGliO1xuXG4gICAgLyoqXG4gICAgICogUGxhdGZvcm0gc3BlY2lmaWMgY2FjaGUgaGFuZGxlclxuICAgICAqL1xuICAgIGNhY2hlSGFuZGxlcjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFDYWNoZU1hbmFnZXIuI2luc3RhbmNlKSB7XG4gICAgICAgICAgICBDYWNoZU1hbmFnZXIuI2luc3RhbmNlID0gbmV3IENhY2hlTWFuYWdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENhY2hlTWFuYWdlci4jaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGVIYW5kbGVyID0gbmV3IEFic3RyYWN0Q2FjaGVIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYWNoZSBtYW5hZ2VyXG4gICAgICogSXQgaGFzIHRvIGNhbGxlZCBieSB0aGUgd3JhcHBlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlSGFuZGxlciBwbGF0Zm9ybSBzcGVjaWZpYyBjYWNoZSBoYW5kbGVyXG4gICAgICovXG4gICAgaW5pdChjYWNoZUhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIgPSBjYWNoZUhhbmRsZXI7XG4gICAgfVxuXG4gICAgYXR0YWNoSW5zdGFuY2Uoc21hcnRMaWIpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0luaXQgY2FjaGUgbWFuYWdlci4uLicpO1xuICAgICAgICB0aGlzLnNtYXJ0TGliID0gc21hcnRMaWI7XG5cbiAgICAgICAgLy8gUmVzZXQgYWxsIGZsYWdzXG4gICAgICAgIHRoaXMuZ2V0Q2FjaGVEYXRhKCdyZXBvcnQtJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGNhY2hlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS52YWx1ZS5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoY2FjaGUua2V5LCBjYWNoZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhY2hlIHZhbHVlIHBhcnNlZFxuICAgICAqIEBwYXJhbSBrZXkga2V5IGluIGNhY2hlXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZHwqfSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jYWNoZUhhbmRsZXIuZ2V0KGtleSk7XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUGFyc2UgcmVwb3J0XG4gICAgICAgICAgICBpZiAoIWRhdGEuc3RhcnRzV2l0aCgneycpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYmFzZTY0XG4gICAgICAgICAgICAgICAgZGF0YSA9IE1hdGhVdGlscy5iYXNlNjRUb1N0cmluZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHJlcG9ydCBpZiBpdCBjYW5ub3QgYmUgcmVhZFxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0Vycm9yIHdoaWxlIHBhcnNpbmcgJyArIGtleSArICcgKCcgKyBlLm1lc3NhZ2UgKyAnKScpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuZGVsZXRlKGtleSk7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBhbnkgdmFsdWUgdG8gdGhlIGNhY2hlXG4gICAgICogVGhlIHZhbHVlIGlzIHN0cmluZ2lmaWVkIGFuZCBlbmNvZGVkIHdpdGggYmFzZTY0XG4gICAgICogQHBhcmFtIGtleSBjYWNoZSBpZFxuICAgICAqIEBwYXJhbSB2YWx1ZSBjYWNoZSB2YWx1ZVxuICAgICAqL1xuICAgIHN0b3JlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuc2V0KGtleSwgTWF0aFV0aWxzLnN0cmluZ1RvQmFzZTY0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xuICAgICAgICAvLyB0aGlzLmNhY2hlSGFuZGxlci5zZXQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpOyAvLyB3aXRob3V0IGJhc2U2NFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhIGZpZWxkIGluIGNhY2hlXG4gICAgICogQHBhcmFtIGtleSBrZXkgaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gbmFtZSBmaWVsZCBuYW1lXG4gICAgICogQHBhcmFtIHZhbHVlIGZpZWxkIHZhbHVlXG4gICAgICovXG4gICAgdXBkYXRlKGtleSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGluZyAnICsga2V5ICsgJywgc2V0ICcgKyBuYW1lICsgJyB0byAnICsgdmFsdWUpO1xuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JlKGtleSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBhIGhhbmRsZXIgcmVwb3J0IGluIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSBhZGRyZXNzIGFuYWx5dGljcyBmdWxsIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gcmVwb3J0IFNlc3Npb25SZXBvcnQgaW4gSlNPTlxuICAgICAqIEBwYXJhbSBjbGVhbiBjbGVhbiBjYWNoZSBhZnRlciBzdG9yaW5nIHRoZSByZXBvcnRcbiAgICAgKiBAcGFyYW0gZGF0ZSBkYXRlIG9mIHRoZSBzZXNzaW9uIHJlcG9ydFxuICAgICAqIEBwYXJhbSBzZW5kaW5nIGRlZmF1bHQgc2VuZGluZyBmbGFnXG4gICAgICovXG4gICAgc3RvcmVTZXNzaW9uUmVwb3J0KGFkZHJlc3MsIHJlcG9ydCwgY2xlYW4gPSB0cnVlLCBkYXRlID0gRGF0ZS5ub3coKSwgc2VuZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJ3JlcG9ydC0nICsgTWF0aFV0aWxzLnJhbmRvbUludEZyb21JbnRlcnZhbCgxMDAwMDAwLCA5OTk5OTk5KSArICcnICsgZGF0ZTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1N0b3JpbmcgJyArIGlkICsgJyBpbiBjYWNoZS4uLicpO1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5zbWFydExpYi5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgc2VuZGluZzogc2VuZGluZyxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICByZXBvcnQ6IHJlcG9ydFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RvcmUoaWQsIGRhdGEpO1xuXG4gICAgICAgIC8vIENsZWFuIGNhY2hlIHdoZW4gc3RvcmluZyBhIG5ldyByZXBvcnQgKGVuYWJsZWQgYnkgZGVmYXVsdClcbiAgICAgICAgaWYgKGNsZWFuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuQ2FjaGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgc2Vzc2lvbiByZXBvcnQgYnkgc2Vzc2lvbiByZXBvcnQgaWRcbiAgICAgKiBAcGFyYW0gaWQgc2Vzc2lvbiByZXBvcnQgaWRcbiAgICAgKi9cbiAgICBkZWxldGVTZXNzaW9uUmVwb3J0KGlkKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdEZWxldGluZyAnICsgaWQgKyAnIGZyb20gY2FjaGUuLi4nKTtcblxuICAgICAgICB0aGlzLmNhY2hlSGFuZGxlci5kZWxldGUoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlIGEga2VlcGFsaXZlIHJlcG9ydFxuICAgICAqIEBwYXJhbSBhZGRyZXNzIGJhc2UgYW5hbHl0aWNzIGFkZHJlc3NlcywgaGFuZGxlIG11bHRpcGxlIGVuZHBvaW50XG4gICAgICogQHBhcmFtIHJlcG9ydCBTZXNzaW9uUmVwb3J0IGluIEpTT05cbiAgICAgKi9cbiAgICBzdG9yZUtlZXBhbGl2ZVJlcG9ydChhZGRyZXNzLCByZXBvcnQpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1N0b3Jpbmcga2VlcGFsaXZlLScgKyByZXBvcnRbJ3Nlc3Npb25faWQnXSArICcgaW4gY2FjaGUuLi4nKTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMuc21hcnRMaWIuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICByZXBvcnQ6IHJlcG9ydFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RvcmUoJ2tlZXBhbGl2ZS0nICsgcmVwb3J0WydzZXNzaW9uX2lkJ10sIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBrZWVwYWxpdmUgcmVwb3J0IGJ5IHNlc3Npb24gcmVwb3J0IGlkXG4gICAgICogQHBhcmFtIHNlc3Npb25JZCBzZXNzaW9uIHJlcG9ydCBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUtlZXBhbGl2ZVJlcG9ydChzZXNzaW9uSWQpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ0RlbGV0aW5nIGtlZXBhbGl2ZS0nICsgc2Vzc2lvbklkICsgJyBmcm9tIGNhY2hlLi4uJyk7XG5cbiAgICAgICAgdGhpcy5jYWNoZUhhbmRsZXIuZGVsZXRlKCdrZWVwYWxpdmUtJyArIHNlc3Npb25JZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhbGwgc2Vzc2lvbiByZXBvcnRzIGZyb20gdGhlIGNhY2hlXG4gICAgICogQHJldHVybnMgeyp9IEFsbCBzZXNzaW9uIHJlcG9ydHMsIEpTT04gcGFyc2VkLCBvcmRlcmVkIGJ5IHN0b3JlZCBkYXRlXG4gICAgICovXG4gICAgZ2V0Q2FjaGVEYXRhKGZpbHRlciA9ICcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlSGFuZGxlci5rZXlzKCkgLy8gR2V0IGFsbCBjYWNoZSBrZXlzXG4gICAgICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aChmaWx0ZXIpKSAvLyBGaWx0ZXIgb24gcmVwb3J0c1xuICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgYWxsIHJlcG9ydHNcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGNhY2hlIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwdXNoKCkge1xuICAgICAgICAvLyBDbGVhbiBjYWNoZSBiZWZvcmUgcHVzaGluZ1xuICAgICAgICB0aGlzLmNsZWFuQ2FjaGUoKTtcblxuICAgICAgICAvLyBTZW5kIHJlcG9ydHNcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NlbmRpbmcgY2FjaGUgY29udGVudCBpZiBhbnkuLi4nKTtcbiAgICAgICAgdGhpcy5nZXRDYWNoZURhdGEoJ3JlcG9ydC0nKVxuICAgICAgICAgICAgLmZvckVhY2goY2FjaGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZS52YWx1ZS5zZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2VuZGluZyBjYWNoZSAnICsgY2FjaGUua2V5ICsgJyBhbHJlYWR5IGluIHByb2dyZXNzLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2VuZGluZyBjYWNoZSAnICsgY2FjaGUua2V5ICsgJy4uLicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2VuZGluZyBzdGF0dXMsIHRvIGF2b2lkIHNlbmRpbmcgYSByZXBvcnQgdHdpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnZhbHVlLnNlbmRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZGVsYXkgZmllbGQsIGRlbHRhIGJldHdlZW4gY3VycmVudCBkYXRlIGFuZCBmaXJzdCBzZW50IGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnZhbHVlLnJlcG9ydC5kZWxheSA9IE1hdGgucm91bmQoKERhdGUubm93KCkgLSBjYWNoZS52YWx1ZS5kYXRlKSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoY2FjaGUua2V5LCBjYWNoZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFNtYXJ0TGliLmFuYWx5dGljc01vZHVsZT8uQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmRTZXNzaW9uQ2FjaGUoY2FjaGUudmFsdWUuYWRkcmVzcywgY2FjaGUudmFsdWUucmVwb3J0LCB0aGlzLnNtYXJ0TGliLmdldFBhcmFtZXRlcnMoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihzZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU2Vzc2lvblJlcG9ydChjYWNoZS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNlbmRpbmcgc3RhdHVzLCB0byBhdm9pZCBzZW5kaW5nIGEgcmVwb3J0IHR3aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS52YWx1ZS5zZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZShjYWNoZS5rZXksIGNhY2hlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gZGF0YSB3aXRoIGFuIGV4cGlyZWQgZGF0ZVxuICAgICAqIEBwYXJhbSBmaWx0ZXIgZmlsdGVyIG9uIGtleVxuICAgICAqIEByZXR1cm5zIHsqfSByZW1haW5pbmcgZGF0YSBvcmRlciBieSBuZXdlc3QgZmlyc3RcbiAgICAgKi9cbiAgICBjbGVhbkV4cGlyZWREYXRhKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDYWNoZURhdGEoZmlsdGVyKVxuICAgICAgICAgICAgLm1hcChjYWNoZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gZXhwaXJlZCByZXBvcnRzXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlICE9PSB1bmRlZmluZWQgJiYgKGNhY2hlLnZhbHVlLmRhdGUgPT09IHVuZGVmaW5lZCB8fCBEYXRlLm5vdygpIC0gY2FjaGUudmFsdWUuZGF0ZSA+IENhY2hlTWFuYWdlci5DQUNIRV9EVVJBVElPTikpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0NsZWFuaW5nICcgKyBjYWNoZS5rZXkgKyAnIChjYWNoZSBkdXJhdGlvbiByZWFjaGVkKS4uLicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlSGFuZGxlci5kZWxldGUoY2FjaGUua2V5KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGNhY2hlID0+IGNhY2hlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZS5kYXRlIC0gYS52YWx1ZS5kYXRlKTsgLy8gbmV3ZXIgc2Vzc2lvbiBoYXZlIGxvdyBpbmRleFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGFsbCBleHBpcmVkIGRhdGFcbiAgICAgKi9cbiAgICBjbGVhbkNhY2hlKCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnQ2xlYW4gZXhwaXJlZCBkYXRhIGlmIGFueS4uLicpO1xuXG4gICAgICAgIC8vIENsZWFuIGV4cGlyZWQga2VlcGFsaXZlIHJlcG9ydHNcbiAgICAgICAgY29uc3Qga2VlcGFsaXZlUmVwb3J0cyA9IHRoaXMuY2xlYW5FeHBpcmVkRGF0YSgna2VlcGFsaXZlLScpO1xuXG4gICAgICAgIC8vIE1pZ3JhdGUgZW5kZWQga2VlcGFsaXZlIHRvIHNlc3Npb24gcmVwb3J0XG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlc3Npb25JZHMgPSB0aGlzLnNtYXJ0TGliLnNlc3Npb25NYW5hZ2VyLnNlc3Npb25zLm1hcChzZXNzaW9uID0+IHNlc3Npb24uaGFuZGxlcj8uc2Vzc2lvblJlcG9ydD8uc2Vzc2lvbklkKTtcbiAgICAgICAga2VlcGFsaXZlUmVwb3J0cy5mb3JFYWNoKGNhY2hlID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZWVwYWxpdmUgcmVwb3J0IGlzIG5vdCBhbiBhY3RpdmUgc2Vzc2lvblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVNlc3Npb25JZHMuaW5kZXhPZihjYWNoZS52YWx1ZS5yZXBvcnRbJ3Nlc3Npb25faWQnXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ01pZ3JhdGluZyBrZWVwYWxpdmUgJyArIGNhY2hlLnZhbHVlLnJlcG9ydFsnc2Vzc2lvbl9pZCddICsgJyB0byBzZXNzaW9uLi4uJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSB0aW1lb3V0IGZsYWcgdG8gdGhlIHNlc3Npb24gcmVwb3J0XG4gICAgICAgICAgICAgICAgY2FjaGUudmFsdWUucmVwb3J0LnRpbWVvdXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgaXQgdG8gc2Vzc2lvbiByZXBvcnRcbiAgICAgICAgICAgICAgICBjb25zdCBhbmFseXRpY3NBZGRyZXNzZXMgPSBjYWNoZS52YWx1ZS5hZGRyZXNzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgYW5hbHl0aWNzQWRkcmVzc2VzLmZvckVhY2goYW5hbHl0aWNzQWRkcmVzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmFseXRpY3NBZGRyZXNzLmluZGV4T2YoQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuTk9DQUNIRV9QUkVGSVgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5OT0NBQ0hFX1BSRUZJWCArICcgb3B0aW9uIHVzZWQsIG5vIG5lZWQgdG8gc3RvcmUgdGhlIHJlcG9ydCBpbiBjYWNoZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZVNlc3Npb25SZXBvcnQoQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5idWlsZEFuYWx5dGljc0FkZHJlc3MoYW5hbHl0aWNzQWRkcmVzcyksIGNhY2hlLnZhbHVlLnJlcG9ydCwgZmFsc2UsIGNhY2hlLnZhbHVlLmRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUga2VlcGFsaXZlIHJlcG9ydFxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVIYW5kbGVyLmRlbGV0ZShjYWNoZS5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDbGVhbiBleHBpcmVkIHNlc3Npb24gcmVwb3J0cyBhbmQgZ2V0IHJlbWFpbmluZyByZXBvcnRzIG9yZGVyZWQgYnkgcmVjZW50IHRvIG9sZGVzdFxuICAgICAgICBjb25zdCBzZXNzaW9uUmVwb3J0cyA9IHRoaXMuY2xlYW5FeHBpcmVkRGF0YSgncmVwb3J0LScpO1xuXG4gICAgICAgIC8vIENsZWFuIG9sZGVzdCByZXBvcnRzIHdoZW4gbGltaXQgaXMgcmVhY2hlZFxuICAgICAgICBpZiAoc2Vzc2lvblJlcG9ydHMubGVuZ3RoID49IENhY2hlTWFuYWdlci5DQUNIRV9MSU1JVCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IENhY2hlTWFuYWdlci5DQUNIRV9MSU1JVCA7IGkgPCBzZXNzaW9uUmVwb3J0cy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNlc3Npb25SZXBvcnQoc2Vzc2lvblJlcG9ydHNbaV0ua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFuKCkge1xuICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXN5bmNEZWxheSgwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuQ2FjaGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhbkNhY2hlKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEtlZXBhbGl2ZSBtYW5hZ2VyIGluIHVzaW5nIHRoaXJkIHBhcnR5IENETlxuICovXG5leHBvcnQgY2xhc3MgQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyIGV4dGVuZHMgS2VlcEFsaXZlTWFuYWdlciB7XG4gICAgYW5hbHl0aWNzQWRkcmVzcztcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcbiAgICAgICAgc3VwZXIoaGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy5hbmFseXRpY3NBZGRyZXNzID0gdGhpcy5oYW5kbGVyLnNtYXJ0TGliLmdldFBhcmFtZXRlcnMoKS5hbmFseXRpY3NBZGRyZXNzO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVc2luZyBjYWNoZSBrZWVwYWxpdmUgbWFuYWdlci4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gU3RvcmUgYSBrZWVwYWxpdmUgcmVwb3J0IHdoZW4gdGhlIHNlc3Npb24gaXMgc3RhcnRpbmdcbiAgICAgICAgdGhpcy5zdG9yZSgpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKHBhcmFtZXRlcnMsIG5leHQgPSB0cnVlKSB7XG4gICAgICAgIC8vIFN0b3JlIGtlZXBhbGl2ZSByZXBvcnRzIGF0IGV2ZXJ5IGtlZXBhbGl2ZVxuICAgICAgICB0aGlzLnN0b3JlKCk7XG5cbiAgICAgICAgaWYgKG5leHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUga2VlcGFsaXZlIHJlcG9ydCBmcm9tIHRoZSBjYWNoZSB3aGVuIHRoZSBzZXNzaW9uIGlzIHN0b3BwZWRcbiAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBzdG9yZSgpIHtcbiAgICAgICAgU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlPy5DYWNoZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zdG9yZUtlZXBhbGl2ZVJlcG9ydCh0aGlzLmFuYWx5dGljc0FkZHJlc3MsIHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnRvRW5kU2Vzc2lvbkpTT04oKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBTbWFydExpYi5hbmFseXRpY3NNb2R1bGU/LkNhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlbGV0ZUtlZXBhbGl2ZVJlcG9ydCh0aGlzLmhhbmRsZXIuc2Vzc2lvblJlcG9ydC5zZXNzaW9uSWQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBLZWVwYWxpdmUgbWFuYWdlciBpZiB1c2luZyBCcm9hZHBlYWsgQ0ROIGFuZCBtZXRyaWNzIHJlY2VpdmVyIHJlcG9ydGluZyBtb2RlXG4gKi9cbmV4cG9ydCBjbGFzcyBCcm9hZHBlYWtDRE5DYWNoZUtlZXBhbGl2ZU1hbmFnZXIgZXh0ZW5kcyBCcm9hZHBlYWtDRE5LZWVwYWxpdmVNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiB0aGlyZCBwYXJ0eSBDRE4ga2VlcGFsaXZlIG1hbmFnZXJcbiAgICAgKi9cbiAgICBjYWNoZUtlZXBhbGl2ZU1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyKSB7XG4gICAgICAgIHN1cGVyKGhhbmRsZXIpO1xuXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBuZXh0IGNhbGxiYWNrIHRvIHJlbW92ZSB0aGUgQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyLCBhbmQgb25seSB1c2UgdGhlIGtlZXBhbGl2ZSBvZiBCcm9hZHBlYWtDRE5LZWVwYWxpdmVNYW5hZ2VyXG4gICAgICAgIHRoaXMuY2FjaGVLZWVwYWxpdmVNYW5hZ2VyID0gbmV3IENhY2hlS2VlcGFsaXZlTWFuYWdlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5jYWNoZUtlZXBhbGl2ZU1hbmFnZXIubmV4dCA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIC8vIFN0b3JlIGEga2VlcGFsaXZlIHJlcG9ydCB3aGVuIHRoZSBzZXNzaW9uIGlzIHN0YXJ0aW5nXG4gICAgICAgIHRoaXMuY2FjaGVLZWVwYWxpdmVNYW5hZ2VyLnN0b3JlKCk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2socGFyYW1ldGVycykge1xuICAgICAgICAvLyBTdG9yZSBrZWVwYWxpdmUgcmVwb3J0cyBhdCBldmVyeSBrZWVwYWxpdmVcbiAgICAgICAgdGhpcy5jYWNoZUtlZXBhbGl2ZU1hbmFnZXIuY2FsbGJhY2socGFyYW1ldGVycyk7XG5cbiAgICAgICAgc3VwZXIuY2FsbGJhY2socGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUga2VlcGFsaXZlIHJlcG9ydCBmcm9tIHRoZSBjYWNoZSB3aGVuIHRoZSBzZXNzaW9uIGlzIHN0b3BwZWRcbiAgICAgICAgdGhpcy5jYWNoZUtlZXBhbGl2ZU1hbmFnZXIuZGVsZXRlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllck1hbmFnZXIgZnJvbSAnLi9wbGF5ZXIvUGxheWVyTWFuYWdlcic7XG5pbXBvcnQgUGxheWVyQWRhcHRlciBmcm9tICcuL3BsYXllci9QbGF5ZXJBZGFwdGVyJztcbmltcG9ydCBHZW5lcmljUGxheWVyQWRhcHRlciBmcm9tICcuL3BsYXllci9HZW5lcmljUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgUGxheWVyRXZlbnRMaXN0ZW5lciBmcm9tICcuL3BsYXllci9QbGF5ZXJFdmVudExpc3RlbmVyJztcbmltcG9ydCBHZW5lcmljUGxheWVyQXBpIGZyb20gJy4vcGxheWVyL0dlbmVyaWNQbGF5ZXJBcGknO1xuaW1wb3J0IEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyIGZyb20gJy4vcmVxdWVzdC9BbmFseXRpY3NSZXF1ZXN0TWFuYWdlcic7XG5pbXBvcnQgU2Vzc2lvblRyYWNrZXJUaW1lbGluZSBmcm9tICcuL3RyYWNrZXIvU2Vzc2lvblRyYWNrZXJUaW1lbGluZSc7XG5pbXBvcnQgeyBTZXNzaW9uVHJhY2tlckV2ZW50LCBTZXNzaW9uVHJhY2tlckV2ZW50cyB9IGZyb20gJy4vdHJhY2tlci9TZXNzaW9uVHJhY2tlckV2ZW50JztcbmltcG9ydCB7IE1ldHJpY3MgfSBmcm9tICcuL21ldHJpY3MvTWV0cmljcyc7XG5pbXBvcnQgTWV0cmljc01hbmFnZXIgZnJvbSAnLi9tZXRyaWNzL01ldHJpY3NNYW5hZ2VyJztcbmltcG9ydCB7QW5hbHl0aWNzU2Vzc2lvbn0gZnJvbSAnLi9zZXNzaW9uL2FuYWx5dGljcy9BbmFseXRpY3NTZXNzaW9uJztcbmltcG9ydCB7Q2FjaGVNYW5hZ2VyLCBDYWNoZUtlZXBhbGl2ZU1hbmFnZXIsIEJyb2FkcGVha0NETkNhY2hlS2VlcGFsaXZlTWFuYWdlcn0gZnJvbSAnLi9jYWNoZS9DYWNoZU1hbmFnZXInO1xuXG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi9TbWFydExpYic7XG5TbWFydExpYi5hbmFseXRpY3NNb2R1bGUgPSB7XG4gICAgUGxheWVyTWFuYWdlciwgUGxheWVyQWRhcHRlciwgR2VuZXJpY1BsYXllckFkYXB0ZXIsIFBsYXllckV2ZW50TGlzdGVuZXIsIEdlbmVyaWNQbGF5ZXJBcGksXG4gICAgQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIsXG4gICAgU2Vzc2lvblRyYWNrZXJUaW1lbGluZSwgU2Vzc2lvblRyYWNrZXJFdmVudCwgU2Vzc2lvblRyYWNrZXJFdmVudHMsXG4gICAgTWV0cmljcywgTWV0cmljc01hbmFnZXIsXG4gICAgQW5hbHl0aWNzU2Vzc2lvbixcbiAgICBDYWNoZU1hbmFnZXIsIENhY2hlS2VlcGFsaXZlTWFuYWdlciwgQnJvYWRwZWFrQ0ROQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyXG59O1xuXG5leHBvcnQge1xuICAgIFBsYXllck1hbmFnZXIsIFBsYXllckFkYXB0ZXIsIEdlbmVyaWNQbGF5ZXJBZGFwdGVyLCBQbGF5ZXJFdmVudExpc3RlbmVyLCBHZW5lcmljUGxheWVyQXBpLFxuICAgIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLFxuICAgIFNlc3Npb25UcmFja2VyVGltZWxpbmUsIFNlc3Npb25UcmFja2VyRXZlbnQsIFNlc3Npb25UcmFja2VyRXZlbnRzLFxuICAgIE1ldHJpY3MsIE1ldHJpY3NNYW5hZ2VyLFxuICAgIEFuYWx5dGljc1Nlc3Npb24sXG4gICAgQ2FjaGVNYW5hZ2VyLCBDYWNoZUtlZXBhbGl2ZU1hbmFnZXIsIEJyb2FkcGVha0NETkNhY2hlS2VlcGFsaXZlTWFuYWdlclxufTtcbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtNZXRyaWNzJztcblxuZXhwb3J0IGNsYXNzIE1ldHJpY3Mge1xuICAgIHN0YXRpYyBQTEFZQkFDS19UWVBFX0xJVkUgPSAnTElWRSc7XG4gICAgc3RhdGljIFBMQVlCQUNLX1RZUEVfVk9EID0gJ1ZPRCc7XG5cbiAgICByZWRpcmVjdGlvblRpbWU7XG4gICAgc3RhcnR1cFRpbWU7XG4gICAgY29tcGxldGlvbjtcbiAgICBwbGF5YmFja1R5cGU7XG4gICAgcGxheWJhY2tEdXJhdGlvbjtcbiAgICBzZXNzaW9uRHVyYXRpb247XG4gICAgY29udGVudER1cmF0aW9uO1xuXG4gICAgc3RhbGxzTnVtYmVyO1xuICAgIG1heFN0YWxsRHVyYXRpb247XG4gICAgdG90YWxTdGFsbHNEdXJhdGlvbjtcbiAgICByZWJ1ZmZlcmluZ3NOdW1iZXI7XG4gICAgbWF4UmVidWZmZXJpbmdEdXJhdGlvbjtcbiAgICB0b3RhbFJlYnVmZmVyaW5nRHVyYXRpb247XG5cbiAgICBtaW5CaXRyYXRlO1xuICAgIG1heEJpdHJhdGU7XG4gICAgYXZlcmFnZUJpdHJhdGU7XG5cbiAgICBsYXllclN3aXRjaGVzTnVtYmVyO1xuICAgIHRpbWVTcGVudFBlckxheWVyO1xuXG4gICAgcHJlU3RhcnR1cFRpbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRyaWNzKSB7XG4gICAgICAgIGlmIChtZXRyaWNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3Rpb25UaW1lID0gbWV0cmljcy5yZWRpcmVjdGlvblRpbWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0dXBUaW1lID0gbWV0cmljcy5zdGFydHVwVGltZTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGlvbiA9IG1ldHJpY3MuY29tcGxldGlvbjtcbiAgICAgICAgICAgIHRoaXMucGxheWJhY2tUeXBlID0gbWV0cmljcy5wbGF5YmFja1R5cGU7XG4gICAgICAgICAgICB0aGlzLnBsYXliYWNrRHVyYXRpb24gPSBtZXRyaWNzLnBsYXliYWNrRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25EdXJhdGlvbiA9IG1ldHJpY3Muc2Vzc2lvbkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50RHVyYXRpb24gPSBtZXRyaWNzLmNvbnRlbnREdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzTnVtYmVyID0gbWV0cmljcy5zdGFsbHNOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLm1heFN0YWxsRHVyYXRpb24gPSBtZXRyaWNzLm1heFN0YWxsRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnRvdGFsU3RhbGxzRHVyYXRpb24gPSBtZXRyaWNzLnRvdGFsU3RhbGxzRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnJlYnVmZmVyaW5nc051bWJlciA9IG1ldHJpY3MucmVidWZmZXJpbmdzTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5tYXhSZWJ1ZmZlcmluZ0R1cmF0aW9uID0gbWV0cmljcy5tYXhSZWJ1ZmZlcmluZ0R1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy50b3RhbFJlYnVmZmVyaW5nRHVyYXRpb24gPSBtZXRyaWNzLnRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMubWluQml0cmF0ZSA9IG1ldHJpY3MubWluQml0cmF0ZTtcbiAgICAgICAgICAgIHRoaXMubWF4Qml0cmF0ZSA9IG1ldHJpY3MubWF4Qml0cmF0ZTtcbiAgICAgICAgICAgIHRoaXMuYXZlcmFnZUJpdHJhdGUgPSBtZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlO1xuICAgICAgICAgICAgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyID0gbWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWV0cmljcy50aW1lU3BlbnRQZXJMYXllcikpO1xuICAgICAgICAgICAgdGhpcy5wcmVTdGFydHVwVGltZSA9IG1ldHJpY3MucHJlU3RhcnR1cFRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0aW9uVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0dXBUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLnBsYXliYWNrVHlwZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wbGF5YmFja0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuY29udGVudER1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMubWF4U3RhbGxEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLnRvdGFsU3RhbGxzRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdGhpcy5yZWJ1ZmZlcmluZ3NOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5tYXhSZWJ1ZmZlcmluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMudG90YWxSZWJ1ZmZlcmluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMubWluQml0cmF0ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1heEJpdHJhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5hdmVyYWdlQml0cmF0ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxheWVyU3dpdGNoZXNOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllciA9IHt9O1xuICAgICAgICAgICAgdGhpcy5wcmVTdGFydHVwVGltZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRyaWNzQnVpbGRlciB7XG4gICAgbWV0cmljcztcblxuICAgIHdhdGNoaW5nUmFuZ2VzO1xuXG4gICAgY29uc3RydWN0b3IobWV0cmljcyA9IG5ldyBNZXRyaWNzKCkpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzID0gbWV0cmljcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgc2V0UmVkaXJlY3Rpb25UaW1lKHJlZGlyZWN0aW9uVGltZSkge1xuICAgICAgICB0aGlzLm1ldHJpY3MucmVkaXJlY3Rpb25UaW1lID0gcmVkaXJlY3Rpb25UaW1lO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFN0YXJ0dXBUaW1lKHN0YXJ0dXBUaW1lKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5zdGFydHVwVGltZSA9IHN0YXJ0dXBUaW1lO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFNlc3Npb25EdXJhdGlvbihzZXNzaW9uRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLnNlc3Npb25EdXJhdGlvbiA9IHNlc3Npb25EdXJhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDb250ZW50RHVyYXRpb24oY29udGVudER1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5jb250ZW50RHVyYXRpb24gPSBjb250ZW50RHVyYXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UGxheWJhY2tUeXBlKHBsYXliYWNrVHlwZSkge1xuICAgICAgICB0aGlzLm1ldHJpY3MucGxheWJhY2tUeXBlID0gcGxheWJhY2tUeXBlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEZpcnN0TGF5ZXIoYml0cmF0ZSkge1xuICAgICAgICBpZiAoYml0cmF0ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubWV0cmljcy5tYXhCaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgICAgICAgIHRoaXMubWV0cmljcy5taW5CaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFByZVN0YXJ0dXBUaW1lKHByZVN0YXJ0dXBUaW1lKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5wcmVTdGFydHVwVGltZSA9IHByZVN0YXJ0dXBUaW1lO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFRpbWVTcGVudFBlckxheWVyKGJpdHJhdGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGJpdHJhdGUgPSBNYXRoLnJvdW5kKGJpdHJhdGUpO1xuXG4gICAgICAgIGlmIChiaXRyYXRlID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWVTcGVudE9uTGF5ZXIgPSB0aGlzLm1ldHJpY3MudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV07XG4gICAgICAgICAgICBpZiAodGltZVNwZW50T25MYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGltZVNwZW50T25MYXllciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVTcGVudE9uTGF5ZXIgKz0gZHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV0gPSB0aW1lU3BlbnRPbkxheWVyO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tZXRyaWNzLm1heEJpdHJhdGUgPCBiaXRyYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRyaWNzLm1heEJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5tZXRyaWNzLm1pbkJpdHJhdGUgPiBiaXRyYXRlIHx8IHRoaXMubWV0cmljcy5taW5CaXRyYXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRyaWNzLm1pbkJpdHJhdGUgPSBiaXRyYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkTGF5ZXJTd2l0Y2goKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkUGxheWJhY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICB0aGlzLm1ldHJpY3MucGxheWJhY2tEdXJhdGlvbiArPSBkdXJhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRXYXRjaGluZ1JhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnQWRkIHdhdGNoaW5nIHJhbmdlLCBkdXJhdGlvbiAnICsgKGVuZCAtIHN0YXJ0KSArICdtcycpO1xuICAgICAgICAgICAgdGhpcy53YXRjaGluZ1Jhbmdlcy5wdXNoKHtzdGFydDogc3RhcnQsIGVuZDogZW5kLCBkdXJhdGlvbjogZW5kIC0gc3RhcnR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFN0YWxsKGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWV0cmljcy5zdGFsbHNOdW1iZXIrKztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnRvdGFsU3RhbGxzRHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgIGlmICh0aGlzLm1ldHJpY3MubWF4U3RhbGxEdXJhdGlvbiA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MubWF4U3RhbGxEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkUmVidWZmZXJpbmcoZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzLnJlYnVmZmVyaW5nc051bWJlcisrO1xuICAgICAgICB0aGlzLm1ldHJpY3MudG90YWxSZWJ1ZmZlcmluZ0R1cmF0aW9uICs9IGR1cmF0aW9uO1xuICAgICAgICBpZiAodGhpcy5tZXRyaWNzLm1heFJlYnVmZmVyaW5nRHVyYXRpb24gPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzLm1heFJlYnVmZmVyaW5nRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBidWlsZGVyID0gbmV3IE1ldHJpY3NCdWlsZGVyKG5ldyBNZXRyaWNzKHRoaXMubWV0cmljcykpO1xuICAgICAgICBidWlsZGVyLndhdGNoaW5nUmFuZ2VzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLndhdGNoaW5nUmFuZ2VzKSk7XG4gICAgICAgIHJldHVybiBidWlsZGVyO1xuICAgIH1cblxuICAgIGNvbXB1dGVDb21wbGV0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5tZXRyaWNzLnBsYXliYWNrVHlwZSA9PT0gTWV0cmljcy5QTEFZQkFDS19UWVBFX0xJVkUgfHwgdGhpcy5tZXRyaWNzLmNvbnRlbnREdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByYW5nZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMud2F0Y2hpbmdSYW5nZXMpKTtcbiAgICAgICAgbGV0IGludGVydmFscyA9IHJhbmdlcy5zbGljZSgwKTtcblxuICAgICAgICBpZiAocmFuZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWxzWzBdLmR1cmF0aW9uICogMTAwMCAvIHRoaXMubWV0cmljcy5jb250ZW50RHVyYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgbGV0IHRvcCA9IG51bGw7XG5cbiAgICAgICAgLy8gc29ydCB0aGUgaW50ZXJ2YWxzIGJhc2VkIG9uIHRoZWlyIHN0YXJ0IHZhbHVlc1xuICAgICAgICBpbnRlcnZhbHMgPSBpbnRlcnZhbHMuc29ydCgoc3RhcnRWYWx1ZSwgZW5kVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChzdGFydFZhbHVlLnN0YXJ0LCAxMCkgPiBwYXJzZUludChlbmRWYWx1ZS5zdGFydCwgMTApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoc3RhcnRWYWx1ZS5zdGFydCwgMTApIDwgcGFyc2VJbnQoZW5kVmFsdWUuc3RhcnQsIDEwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwdXNoIHRoZSAxc3QgaW50ZXJ2YWwgaW50byB0aGUgc3RhY2tcbiAgICAgICAgc3RhY2sucHVzaChpbnRlcnZhbHNbMF0pO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gdGhlIG5leHQgaW50ZXJ2YWwgYW5kIG1lcmdlIGlmIG5lZWRlZFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGludGVydmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSB0b3AgZWxlbWVudFxuICAgICAgICAgICAgdG9wID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludCh0b3AuZW5kLCAxMCkgPCBwYXJzZUludChpbnRlcnZhbHNbaV0uc3RhcnQsIDEwKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IGludGVydmFsIGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIHN0YWNrIHRvcCBlbGVtZW50LCBwdXNoIGl0IHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goaW50ZXJ2YWxzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodG9wLmVuZCwgMTApIDwgcGFyc2VJbnQoaW50ZXJ2YWxzW2ldLmVuZCwgMTApKSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHVwZGF0ZSB0aGUgZW5kIHZhbHVlIG9mIHRoZSB0b3AgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGlmIGVuZCBvZiBjdXJyZW50IGludGVydmFsIGlzIGhpZ2hlclxuICAgICAgICAgICAgICAgIHRvcC5lbmQgPSBwYXJzZUludChpbnRlcnZhbHNbaV0uZW5kLCAxMCk7XG4gICAgICAgICAgICAgICAgdG9wLmR1cmF0aW9uID0gdG9wLmVuZCAtIHRvcC5zdGFydDtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN0YWNrW2ldLmR1cmF0aW9uID0gcGFyc2VJbnQoc3RhY2tbaV0uZW5kLCAxMCkgLSBwYXJzZUludChzdGFja1tpXS5zdGFydCwgMTApO1xuICAgICAgICAgICAgZHVyYXRpb24gKz0gcGFyc2VJbnQoc3RhY2tbaV0uZHVyYXRpb24sIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2F0Y2hpbmdSYW5nZXMgPSBzdGFjaztcblxuICAgICAgICBsZXQgY29tcGxldGlvbiA9IE1hdGguZmxvb3IoZHVyYXRpb24gKiAxMDAwIC8gdGhpcy5tZXRyaWNzLmNvbnRlbnREdXJhdGlvbik7XG4gICAgICAgIGlmIChjb21wbGV0aW9uID4gMTAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGxldGlvbjtcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgbGV0IGxheWVyUGVyRHVyYXRpb24gPSAwO1xuICAgICAgICBsZXQgdG90YWxEdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgYml0cmF0ZSBpbiB0aGlzLm1ldHJpY3MudGltZVNwZW50UGVyTGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5tZXRyaWNzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdO1xuXG4gICAgICAgICAgICBsYXllclBlckR1cmF0aW9uICs9IGJpdHJhdGUgKiBkdXJhdGlvbjtcbiAgICAgICAgICAgIHRvdGFsRHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG90YWxEdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlID0gTWF0aC5yb3VuZChsYXllclBlckR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ldHJpY3MuY29tcGxldGlvbiA9IHRoaXMuY29tcHV0ZUNvbXBsZXRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMubWV0cmljcy5jb21wbGV0aW9uIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzLmNvbXBsZXRpb24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWV0cmljcy5jb21wbGV0aW9uID4gMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzLmNvbXBsZXRpb24gPSAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZXRyaWNzLnN0YXJ0dXBUaW1lICs9IHRoaXMubWV0cmljcy5wcmVTdGFydHVwVGltZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZXRyaWNzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLndhdGNoaW5nUmFuZ2VzID0gW107XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiLyogaW1wb3J0IHtcbiAgICBTZXNzaW9uVHJhY2tlckJ1ZmZlcmluZ1N0YXJ0LCBTZXNzaW9uVHJhY2tlckxheWVyU3dpdGNoLFxuICAgIFNlc3Npb25UcmFja2VyUGF1c2UsIFNlc3Npb25UcmFja2VyUmVidWZmZXJpbmdTdG9wLFxuICAgIFNlc3Npb25UcmFja2VyUmVzdW1lLCBTZXNzaW9uVHJhY2tlclNlZWssXG4gICAgU2Vzc2lvblRyYWNrZXJTdGFsbFN0b3Bcbn0gZnJvbSAnLi4vLi4vdHJhY2tlci9TZXNzaW9uVHJhY2tlckV2ZW50JzsqL1xuaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCB7TWV0cmljcywgTWV0cmljc0J1aWxkZXJ9IGZyb20gJy4vTWV0cmljcyc7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gJy4uL3V0aWxzL0RhdGVVdGlscyc7XG5pbXBvcnQgeyBTZXNzaW9uVHJhY2tlckV2ZW50cyB9IGZyb20gJy4uL3RyYWNrZXIvU2Vzc2lvblRyYWNrZXJFdmVudCc7XG5cbmNvbnN0IFRBRyA9ICdCcGtNZXRyaWNzTWdyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc01hbmFnZXIge1xuICAgIHN0YXRpYyBNQVhfVElNRV9CRVRXRUVOX1NFRUtfQU5EX1JFQlVGRkVSSU5HID0gMTAwMDtcblxuICAgIGhhbmRsZXI7XG4gICAgYnVpbGRlcjtcbiAgICBwbGF5ZXJBZGFwdGVyO1xuICAgIHRpbWVsaW5lO1xuXG4gICAgc3RhcnRlZDtcbiAgICBwbGF5aW5nO1xuICAgIGJ1ZmZlcmluZztcbiAgICBzZWVraW5nO1xuICAgIGJpdHJhdGU7XG5cbiAgICByZWRpcmVjdGlvblN0YXJ0RGF0ZTtcbiAgICBwbGF5aW5nU3RhcnREYXRlO1xuICAgIGJ1ZmZlcmluZ1N0YXJ0RGF0ZTtcbiAgICBsYXN0TGF5ZXJTd2l0Y2hEYXRlO1xuICAgIGxhc3RTZWVrRGF0ZTtcbiAgICBwbGF5T25OZXh0QnVmZmVyaW5nRW5kO1xuXG4gICAgc3RhcnRQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHBsYXllckFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IE1ldHJpY3NCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyQWRhcHRlciA9IHBsYXllckFkYXB0ZXI7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmhhbmRsZXIuc2Vzc2lvblJlcG9ydC50aW1lbGluZTtcblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2Vla2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJpdHJhdGUgPSAtMTtcblxuICAgICAgICB0aGlzLnJlZGlyZWN0aW9uU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmdTdGFydERhdGUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RMYXllclN3aXRjaERhdGUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RTZWVrRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGxheU9uTmV4dEJ1ZmZlcmluZ0VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdGlvblN0YXJ0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25SZWRpcmVjdGlvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5idWlsZGVyLnNldFJlZGlyZWN0aW9uVGltZShEYXRlLm5vdygpIC0gdGhpcy5yZWRpcmVjdGlvblN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMucGxheWluZ1N0YXJ0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25QcmVjYWNoZUVuZGVkKCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdTdGFydERhdGUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uRmlyc3RJbWFnZShiaXRyYXRlLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdTdHJlYW1pbmcgc2Vzc2lvbiBzdGFydGVkICgnICsgYml0cmF0ZSArICdrYnBzLCcgKyBEYXRlVXRpbHMuZm9ybWF0VGltZShzdGFydFBvc2l0aW9uKSArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gICAgICAgIHRoaXMuYnVpbGRlci5zZXRDb250ZW50RHVyYXRpb24odGhpcy5wbGF5ZXJBZGFwdGVyLmdldER1cmF0aW9uKCkpXG4gICAgICAgICAgICAuc2V0UGxheWJhY2tUeXBlKHRoaXMucGxheWVyQWRhcHRlci5nZXREdXJhdGlvbigpIDw9IDAgPyBNZXRyaWNzLlBMQVlCQUNLX1RZUEVfTElWRSA6IE1ldHJpY3MuUExBWUJBQ0tfVFlQRV9WT0QpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRlci5zZXRTdGFydHVwVGltZShEYXRlLm5vdygpIC0gdGhpcy5yZWRpcmVjdGlvblN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgdGhpcy5wbGF5aW5nU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0Rmlyc3RMYXllcihiaXRyYXRlKTtcbiAgICAgICAgdGhpcy5iaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgICAgdGhpcy5sYXN0TGF5ZXJTd2l0Y2hEYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvbkxheWVyU3dpdGNoKGJpdHJhdGUpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBjaGFuZ2VkIGxheWVyIHRvICcgKyBiaXRyYXRlICsgJ2ticHMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmJpdHJhdGUsIERhdGUubm93KCkgLSB0aGlzLmxhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RMYXllclN3aXRjaERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5iaXRyYXRlICE9PSBiaXRyYXRlICYmIHRoaXMuYml0cmF0ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGNoYW5nZWQgbGF5ZXIsIGJlZm9yZTogJyArIHRoaXMuYml0cmF0ZSArICdrYnBzLCBub3c6ICcgKyBiaXRyYXRlICsgJ2ticHMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZT8ucHVzaEV2ZW50Qml0cmF0ZShTZXNzaW9uVHJhY2tlckV2ZW50cy5MYXllclN3aXRjaCwgYml0cmF0ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkTGF5ZXJTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgfVxuXG4gICAgLy8gQG92ZXJyaWRlXG4gICAgb25QYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1BsYXllciBpcyBwYXVzZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lPy5wdXNoRXZlbnQoU2Vzc2lvblRyYWNrZXJFdmVudHMuUGF1c2UpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRQbGF5YmFja0R1cmF0aW9uKERhdGUubm93KCkgLSB0aGlzLnBsYXlpbmdTdGFydERhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkV2F0Y2hpbmdSYW5nZSh0aGlzLnN0YXJ0UG9zaXRpb24sIHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uUmVzdW1lKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkICYmICF0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgaXMgcmVzdW1lZCcsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZWxpbmU/LnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5SZXN1bWUpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5wbGF5aW5nU3RhcnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uQnVmZmVyaW5nU3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5idWZmZXJpbmcgJiYgdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGlzIGJ1ZmZlcmluZycsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZWxpbmU/LnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5CdWZmZXJpbmdTdGFydCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2Vla2luZyAmJiBjdXJyZW50RGF0ZSAtIHRoaXMubGFzdFNlZWtEYXRlID4gTWV0cmljc01hbmFnZXIuTUFYX1RJTUVfQkVUV0VFTl9TRUVLX0FORF9SRUJVRkZFUklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgICAgICAgdGhpcy5wbGF5T25OZXh0QnVmZmVyaW5nRW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkUGxheWJhY2tEdXJhdGlvbihjdXJyZW50RGF0ZSAtIHRoaXMucGxheWluZ1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvbkJ1ZmZlcmluZ0VuZChpc1BsYXlpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmIChpc1BsYXlpbmcgJiYgdGhpcy5wbGF5T25OZXh0QnVmZmVyaW5nRW5kICYmICF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nU3RhcnREYXRlID0gY3VycmVudERhdGU7XG4gICAgICAgICAgICB0aGlzLnBsYXlPbk5leHRCdWZmZXJpbmdFbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQgJiYgdGhpcy5idWZmZXJpbmdTdGFydERhdGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nU3RhcnREYXRlID0gY3VycmVudERhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheU9uTmV4dEJ1ZmZlcmluZ0VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlZWtpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5UmVidWZmZXJpbmdFbmQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeVN0YWxsRW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYnVmZmVyaW5nU3RhcnREYXRlID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uU3RhbGxFbmQoKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcmluZ0R1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHRoaXMuYnVmZmVyaW5nU3RhcnREYXRlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkU3RhbGwoYnVmZmVyaW5nRHVyYXRpb24pO1xuXG4gICAgICAgIHRoaXMudGltZWxpbmU/LnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3ApO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgc3RhbGxlZCBmb3IgJyArIGJ1ZmZlcmluZ0R1cmF0aW9uICsgJ21zJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvblJlYnVmZmVyaW5nRW5kKCkge1xuICAgICAgICBjb25zdCBidWZmZXJpbmdEdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLmJ1ZmZlcmluZ1N0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5idWlsZGVyLmFkZFJlYnVmZmVyaW5nKGJ1ZmZlcmluZ0R1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLnRpbWVsaW5lPy5wdXNoRXZlbnQoU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdG9wKTtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUGxheWVyIGJ1ZmZlcmVkIGZvciAnICsgYnVmZmVyaW5nRHVyYXRpb24gKyAnbXMnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQbGF5ZXIgc2Vla2VkIGZyb20gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKHN0YXJ0KSArICcgdG8gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKGVuZCksIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgdGhpcy50aW1lbGluZT8ucHVzaEV2ZW50UG9zaXRpb25TdGFydEVuZChTZXNzaW9uVHJhY2tlckV2ZW50cy5TZWVrLCBzdGFydCwgZW5kKTtcblxuICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkV2F0Y2hpbmdSYW5nZSh0aGlzLnN0YXJ0UG9zaXRpb24sIHN0YXJ0KTtcblxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBlbmQ7XG4gICAgICAgIHRoaXMuc2Vla2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFNlZWtEYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvblN0b3Aoc3RhdHVzQ29kZSkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlpbmcgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFBsYXliYWNrRHVyYXRpb24oY3VycmVudERhdGUgLSB0aGlzLnBsYXlpbmdTdGFydERhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnVmZmVyaW5nRW5kKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRXYXRjaGluZ1JhbmdlKHRoaXMuc3RhcnRQb3NpdGlvbiwgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5zZXRTZXNzaW9uRHVyYXRpb24oY3VycmVudERhdGUgLSB0aGlzLnJlZGlyZWN0aW9uU3RhcnREYXRlKVxuICAgICAgICAgICAgICAgIC5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmJpdHJhdGUsIGN1cnJlbnREYXRlIC0gdGhpcy5sYXN0TGF5ZXJTd2l0Y2hEYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvblN0YXJ0U2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIHNlc3Npb25SZXBvcnQubWV0cmljcyA9IHRoaXMuYnVpbGRlci5idWlsZCgpO1xuICAgIH1cblxuICAgIC8vIEBvdmVycmlkZVxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgYnVpbGRlciA9IHRoaXMuYnVpbGRlci5jbG9uZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcgJiYgIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICBidWlsZGVyLmFkZFBsYXliYWNrRHVyYXRpb24oY3VycmVudERhdGUgLSB0aGlzLnBsYXlpbmdTdGFydERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCAmJiB0aGlzLmJ1ZmZlcmluZ1N0YXJ0RGF0ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcmluZ0R1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHRoaXMuYnVmZmVyaW5nU3RhcnREYXRlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Vla2luZykge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkUmVidWZmZXJpbmcoYnVmZmVyaW5nRHVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFkZFN0YWxsKGJ1ZmZlcmluZ0R1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYWRkV2F0Y2hpbmdSYW5nZSh0aGlzLnN0YXJ0UG9zaXRpb24sIHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1aWxkZXIuc2V0U2Vzc2lvbkR1cmF0aW9uKGN1cnJlbnREYXRlIC0gdGhpcy5yZWRpcmVjdGlvblN0YXJ0RGF0ZSlcbiAgICAgICAgICAgIC5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmJpdHJhdGUsIGN1cnJlbnREYXRlIC0gdGhpcy5sYXN0TGF5ZXJTd2l0Y2hEYXRlKTtcblxuICAgICAgICBjb25zdCBwcmVTdGFydHVwVGltZVN0cmluZyA9IHRoaXMuaGFuZGxlci5nZXRDdXN0b21QYXJhbWV0ZXJzKClbJ3ByZV9zdGFydHVwX3RpbWUnXTtcbiAgICAgICAgbGV0IHByZVN0YXJ0dXBUaW1lID0gMDtcbiAgICAgICAgaWYgKHByZVN0YXJ0dXBUaW1lU3RyaW5nICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKHByZVN0YXJ0dXBUaW1lU3RyaW5nKSkge1xuICAgICAgICAgICAgcHJlU3RhcnR1cFRpbWUgPSBwYXJzZUludChwcmVTdGFydHVwVGltZVN0cmluZywgMTApO1xuICAgICAgICB9XG4gICAgICAgIGJ1aWxkZXIuc2V0UHJlU3RhcnR1cFRpbWUocHJlU3RhcnR1cFRpbWUpO1xuXG4gICAgICAgIHNlc3Npb25SZXBvcnQubWV0cmljcyA9IGJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9XG5cbiAgICAvLyBAb3ZlcnJpZGVcbiAgICBvbkVuZFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5idWlsZGVyLnNldFNlc3Npb25EdXJhdGlvbihjdXJyZW50RGF0ZSAtIHRoaXMucmVkaXJlY3Rpb25TdGFydERhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByZVN0YXJ0dXBUaW1lU3RyaW5nID0gdGhpcy5oYW5kbGVyLmdldEN1c3RvbVBhcmFtZXRlcnMoKVsncHJlX3N0YXJ0dXBfdGltZSddO1xuICAgICAgICBsZXQgcHJlU3RhcnR1cFRpbWUgPSAwO1xuICAgICAgICBpZiAocHJlU3RhcnR1cFRpbWVTdHJpbmcgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ocHJlU3RhcnR1cFRpbWVTdHJpbmcpKSB7XG4gICAgICAgICAgICBwcmVTdGFydHVwVGltZSA9IHBhcnNlSW50KHByZVN0YXJ0dXBUaW1lU3RyaW5nLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWlsZGVyLnNldFByZVN0YXJ0dXBUaW1lKHByZVN0YXJ0dXBUaW1lKTtcblxuICAgICAgICBzZXNzaW9uUmVwb3J0Lm1ldHJpY3MgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGxheWVyQWRhcHRlciBmcm9tICcuL1BsYXllckFkYXB0ZXInO1xuaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gJy4uL3V0aWxzL09iamVjdFV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY1BsYXllckFkYXB0ZXIgZXh0ZW5kcyBQbGF5ZXJBZGFwdGVyIHtcbiAgICBwbGF5ZXI7XG4gICAgbGlzdGVuZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0UGxheWVyTmFtZSgpO1xuICAgIH1cblxuICAgIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXRWZXJzaW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0T1NOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0T1NOYW1lKCk7XG4gICAgfVxuXG4gICAgZ2V0T1NWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0RGV2aWNlVmVyc2lvbigpO1xuICAgIH1cblxuICAgIGdldERldmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXREZXZpY2VUeXBlKCk7XG4gICAgfVxuXG4gICAgZ2V0Qml0cmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmdldEN1cnJlbnRCaXRyYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXREdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmdldFRvdGFsRHVyYXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wbGF5ZXJbJ2dldENhcGFiaWxpdGllcyddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmhhc01ldGhvZHMocGxheWVyLCBbXG4gICAgICAgICAgICAnZ2V0UGxheWVyTmFtZScsICdnZXRWZXJzaW9uJywgJ2dldE9TTmFtZScsICdnZXREZXZpY2VWZXJzaW9uJywgJ2dldERldmljZVR5cGUnLFxuICAgICAgICAgICAgJ2dldEN1cnJlbnRQb3NpdGlvbicsICdnZXRUb3RhbER1cmF0aW9uJywgJ2dldEN1cnJlbnRCaXRyYXRlJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpbml0RGl2ZXJzaXR5U2Vzc2lvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5pbml0RGl2ZXJzaXR5U2Vzc2lvbihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBhdHRhY2hQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoR2VuZXJpY1BsYXllckFkYXB0ZXIuY2hlY2tQbGF5ZXIocGxheWVyLCBsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJBZGFwdGVyID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGV0YWNoUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyQWRhcHRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrR2VuZXJpY1BsYXllckFwaSc7XG5cbi8qKiBAbW9kdWxlIEFuYWx5dGljcyAqL1xuXG4vKipcbiAqIEdlbmVyaWMgcGxheWVyIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljUGxheWVyQXBpIHtcbiAgICBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBsYXllciBuYW1lXG4gICAgICovXG4gICAgZ2V0UGxheWVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGxheWVyIHZlcnNpb25cbiAgICAgKi9cbiAgICBnZXRWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0T1NOYW1lKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlVmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGdldERldmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gICAgICovXG4gICAgZ2V0Q3VycmVudFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRvdGFsIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogTm90ZTogcmV0dXJuIDAgaWYgdGhlIGN1cnJlbnQgbWVkaWEgaXMgYSBMSVZFXG4gICAgICovXG4gICAgZ2V0VG90YWxEdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGJpdHJhdGUgaW4ga2Jwc1xuICAgICAqL1xuICAgIGdldEN1cnJlbnRCaXRyYXRlKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcGxheWVyIGNhcGFiaWxpdGllcyBmb3IgU21hcnRMaWJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gTWFwIHdpdGggY2FwYWJpbGl0aWVzXG4gICAgICovXG4gICAgZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgU0VTU0lPTl9QUkVDQUNIRSBvcHRpb24gaXMgZW5hYmxlZCwgbm90aWZ5IHRoYXQgdGhlIHNlc3Npb24gaXMgbm8gbG9uZ2VyIGlkbGluZyBhbmQgdGhhdCB0aGUgcGxheWVyIGlzIHN0YXJ0aW5nIHRvIGJ1ZmZlciB0aGUgY29udGVudFxuICAgICAqIEl0IGhhcyB0byBiZSBjYWxsZWQgYWZ0ZXIgY2FsbGluZyBnZXRVUkwgYW5kIGJlZm9yZSBub3RpZnlGaXJzdEltYWdlXG4gICAgICovXG4gICAgbm90aWZ5UHJlY2FjaGVFbmRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5UHJlY2FjaGVFbmRlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG5vdGlmeVByZWNhY2hlRW5kZWQuIFRoaXMgZXZlbnQgaXMgY2FsbGVkIHdoZW4gdGhlIHBsYXllciBzdGFydHMgYnVmZmVyaW5nIGNodW5rcy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5vdGlmeSB0aGF0IHRoZSBzZXNzaW9uIGhhcyBzdGFydGVkXG4gICAgICpcbiAgICAgKiBUbyBjYWxsIHdoZW4gdGhlIGZpcnN0IGltYWdlIGlzIGRpc3BsYXllZFxuICAgICAqL1xuICAgIG5vdGlmeUZpcnN0SW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyLm5vdGlmeUZpcnN0SW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBub3RpZnlGaXJzdEltYWdlLiBUaGlzIGV2ZW50IGlzIGNhbGxlZCB3aGVuIHRoZSBmaXJzdCBpbWFnZSBpcyBkaXNwbGF5ZWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgdGhhdCB0aGUgcGxheWVyIGhhcyBiZWVuIHBhdXNlZFxuICAgICAqL1xuICAgIG5vdGlmeVBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWRhcHRlci5ub3RpZnlQYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG5vdGlmeVBhdXNlLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZ5IHRoYXQgdGhlIHBsYXllciBoYXMgYmVlbiByZXN1bWVkXG4gICAgICovXG4gICAgbm90aWZ5UmVzdW1lKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWRhcHRlci5ub3RpZnlSZXN1bWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBub3RpZnlSZXN1bWUuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgdGhhdCB0aGUgcGxheWVyIGRpZCBjaGFuZ2UgdGhlIGN1cnJlbnQgbGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiaXRyYXRlIGJpdHJhdGUgaW4ga2Jwc1xuICAgICAqL1xuICAgIG5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5TGF5ZXJTd2l0Y2goYml0cmF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gbm90aWZ5TGF5ZXJTd2l0Y2guJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgdGhhdCB0aGUgcGxheWVyIGRpZCBzdGFydCBzdGFsbGluZy9idWZmZXJpbmdcbiAgICAgKi9cbiAgICBub3RpZnlTdGFsbFN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWRhcHRlci5ub3RpZnlTdGFsbFN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gbm90aWZ5U3RhbGxTdGFydC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5vdGlmeSB0aGF0IHRoZSBwbGF5ZXIgZGlkIGVuZCBzdGFsbGluZy9idWZmZXJpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpc1BsYXlpbmcgVGhlIHBsYXllciBpcyBwbGF5aW5nIHdoZW4gdGhlIGJ1ZmZlcmluZyBlbmRzIChpLmUgdXNlciBkaWQgbm90IHBhdXNlIHRoZSBwbGF5YmFjayBkdXJpbmcgYnVmZmVyaW5nKVxuICAgICAqL1xuICAgIG5vdGlmeVN0YWxsRW5kKGlzUGxheWluZykge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWRhcHRlci5ub3RpZnlTdGFsbEVuZChpc1BsYXlpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG5vdGlmeVN0YWxsRW5kLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90aWZ5IHRoYXQgdGhlIHBsYXllciBkaWQgc2Vla1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IHBvc2l0aW9uIGJlZm9yZSBzZWVrIGluIG1pbGxpc2Vjb25kc1xuICAgICAqIEBwYXJhbSBlbmQgcG9zaXRpb24gd2hlcmUgdGhlIHBsYXllciBkaWQgc2VlayBpbiBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBub3RpZnlTZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIubm90aWZ5U2VlayhzdGFydCwgZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBub3RpZnlTZWVrLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwbGF5ZXIgZXJyb3IgY29kZSBhcyBhIHN0cmluZy4gVGhpcyB2YWx1ZSB3aWxsIGJlIHNlbnQgdG8gdGhlIGFuYWx5dGljcyBzb2x1dGlvbi5cbiAgICAgKlxuICAgICAqIFRvIGNhbGwgd2hlbiB0aGUgcGxheWVyIGlzIHRyaWdnZXJpbmcgYSBub24tcmVjb3ZlcmFibGUgZXJyb3JcbiAgICAgKiBAcGFyYW0gcGxheWVyRXJyb3JDb2RlIFBsYXllciBlcnJvciBjb2RlXG4gICAgICovXG4gICAgc2V0UGxheWVyRXJyb3JDb2RlKHBsYXllckVycm9yQ29kZSkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQWRhcHRlci5zZXRQbGF5ZXJFcnJvckNvZGUocGxheWVyRXJyb3JDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBzZXRQbGF5ZXJFcnJvckNvZGUuIFRoaXMgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgc3RvcFN0cmVhbWluZ1Nlc3Npb24gd2hlbiB0aGUgcGxheWVyIGVycm9yIGNvZGUgYXMgYSBzdHJpbmcuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IEFwcFN0YXRlTWFuYWdlciBmcm9tICcuLi9zZXJ2aWNlL0FwcFN0YXRlTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtQbGF5ZXJBZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQWRhcHRlciB7XG4gICAgaGFuZGxlcjtcbiAgICBkaXZlcnNpdHlQbHVnaW47XG4gICAgd2ViT1NWZXJzaW9uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2ViT1MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3ZWJPUy5kZXZpY2VJbmZvKGluZm8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2ViT1NWZXJzaW9uID0gaW5mby5zZGtWZXJzaW9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgU21hcnRMaWJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBQbGF5ZXIgbmFtZVxuICAgICAqL1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgU21hcnRMaWJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBQbGF5ZXIgdmVyc2lvblxuICAgICAqL1xuICAgIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRPU05hbWUoKSB7XG4gICAgICAgIHJldHVybiBBcHBTdGF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vc05hbWU7XG4gICAgfVxuXG4gICAgZ2V0T1NWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gQXBwU3RhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkub3NWZXJzaW9uO1xuICAgIH1cblxuICAgIGdldERldmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBBcHBTdGF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZXZpY2VUeXBlO1xuICAgIH1cblxuICAgIGdldEJpdHJhdGUoKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0RHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldFZvbHVtZSgpIHtcbiAgICAgICAgcmV0dXJuIDEuMDtcbiAgICB9XG5cbiAgICBnZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnYWRUcmFja2luZyc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hlY2tQbGF5YmFja1N0YXRlKCkge31cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSBTbWFydExpYiB3aGVuIHRoZSBzZXNzaW9uIGlzIHN0YXJ0aW5nXG4gICAgICovXG4gICAgaW5pdFNlc3Npb25QbGF5ZXJPYmplY3RzKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IFNtYXJ0TGliIHdoZW4gdGhlIHNlc3Npb24gaXMgc3RvcHBlZFxuICAgICAqL1xuICAgIHJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cygpIHtcblxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBUbyBiZSBkZWZpbmVkIGluIGVhY2ggc3BlY2lmaWMgcGxheWVyIGFkYXB0ZXJcbiAgICAgKi9cbiAgICBpbml0RGl2ZXJzaXR5UGx1Z2luKG5hbWUgLyogOiBTdHJpbmcgKi8sIHBsYXllciAvKiA6IEFueT8gKi8pLyogOiBBbnk/ICovIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ0RpdmVyc2l0eSBwbHVnaW4gbm90IHlldCBzdXBwb3J0ZWQgZm9yIHBsYXllciAnICsgbmFtZSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IFNtYXJ0TGliIHdoZW4gZGl2ZXJzaXR5IGlzIGFjdGl2YXRlZFxuICAgICAqL1xuICAgIGluaXREaXZlcnNpdHlTZXNzaW9uKG9wdGlvbnMpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSBTbWFydExpYiB3aGVuIGRpdmVyc2l0eSBpcyBhY3RpdmF0ZWRcbiAgICAgKi9cbiAgICBzZXREaXZlcnNpdHlNYW5pZmVzdChtYW5pZmVzdCkge1xuXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSBTbWFydExpYiB3aGVuIGRpdmVyc2l0eSBpcyBhY3RpdmF0ZWRcbiAgICAgKi9cbiAgICByZWxlYXNlRGl2ZXJzaXR5U2Vzc2lvbigpIHtcblxuICAgIH1cblxuICAgIGZpbGxTZXNzaW9uUmVwb3J0KHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5wbGF5ZXJOYW1lID0gdGhpcy5nZXROYW1lKCk7XG4gICAgICAgIHNlc3Npb25SZXBvcnQucGxheWVyVmVyc2lvbiA9IHRoaXMuZ2V0VmVyc2lvbigpO1xuICAgICAgICBzZXNzaW9uUmVwb3J0Lm9zTmFtZSA9IHRoaXMuZ2V0T1NOYW1lKCk7XG4gICAgICAgIHNlc3Npb25SZXBvcnQub3NWZXJzaW9uID0gdGhpcy5nZXRPU1ZlcnNpb24oKTtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5kZXZpY2VUeXBlID0gdGhpcy5nZXREZXZpY2VUeXBlKCk7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblJlcG9ydCA9IHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0O1xuICAgICAgICB0aGlzLmZpbGxTZXNzaW9uUmVwb3J0KHNlc3Npb25SZXBvcnQpO1xuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG4gICAgICAgIHRoaXMuZmlsbFNlc3Npb25SZXBvcnQoc2Vzc2lvblJlcG9ydCk7XG4gICAgfVxuXG4gICAgb25FbmRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgdGhpcy5maWxsU2Vzc2lvblJlcG9ydChzZXNzaW9uUmVwb3J0KTtcbiAgICB9XG5cbiAgICBub3RpZnlMb2FkaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlMb2FkaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25Mb2FkaW5nIGV2ZW50LiAnICtcbiAgICAgICAgICAgICAgICAnVGhpcyBldmVudCBpcyBjYWxsZWQgd2hlbiB0aGUgcGxheWVyIHN0YXJ0cyBidWZmZXJpbmcgdGhlIGZpcnN0IHRpbWUuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlQcmVjYWNoZUVuZGVkKCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlQcmVjYWNoZUVuZGVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uYXR0YWNoUGxheWVyIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25QcmVjYWNoZWRFbmRlZCBldmVudC4gJyArXG4gICAgICAgICAgICAgICAgJ1RoaXMgZXZlbnQgaXMgY2FsbGVkIHdoZW4gdGhlIHBsYXllciBzdGFydHMgYnVmZmVyaW5nIGNodW5rcy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSB0aGUgcGxheWVyXG4gICAgICovXG4gICAgbm90aWZ5Rmlyc3RJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5Rmlyc3RJbWFnZSh0aGlzLmdldEJpdHJhdGUoKSwgdGhpcy5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvblNlc3Npb25TdGFydCBldmVudC4gVGhpcyBldmVudCBpcyBjYWxsZWQgd2hlbiB0aGUgZmlyc3QgaW1hZ2UgaXMgZGlzcGxheWVkLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5UGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeVBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uZ2V0VVJMKC4uLikgb3Igc2Vzc2lvbi5nZXRRdWVyeSgpL3Nlc3Npb24uc3RhcnRTdHJlYW1pbmdTZXNzaW9uKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gb25TZXNzaW9uUGF1c2UgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlSZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeVJlc3VtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmdldFVSTCguLi4pIG9yIHNlc3Npb24uZ2V0UXVlcnkoKS9zZXNzaW9uLnN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG9uU2Vzc2lvblJlc3VtZSBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUgPSB0aGlzLmdldEJpdHJhdGUoKSkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlMYXllclN3aXRjaChiaXRyYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvbkxheWVyU3dpdGNoIGV2ZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5U2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeVNlZWsoc3RhcnQsIGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uZ2V0VVJMKC4uLikgb3Igc2Vzc2lvbi5nZXRRdWVyeSgpL3Nlc3Npb24uc3RhcnRTdHJlYW1pbmdTZXNzaW9uKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gb25TZWVrIGV2ZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5U3RhbGxTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIubm90aWZ5QnVmZmVyaW5nU3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc2Vzc2lvbi5nZXRVUkwoLi4uKSBvciBzZXNzaW9uLmdldFF1ZXJ5KCkvc2Vzc2lvbi5zdGFydFN0cmVhbWluZ1Nlc3Npb24oLi4uKSBzaG91bGQgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGxlZCBwcmlvciB0byBvblN0YWxsU3RhcnQgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlTdGFsbEVuZChpc1BsYXlpbmcgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeUJ1ZmZlcmluZ0VuZChpc1BsYXlpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmdldFVSTCguLi4pIG9yIHNlc3Npb24uZ2V0UXVlcnkoKS9zZXNzaW9uLnN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiguLi4pIHNob3VsZCBiZSAnICtcbiAgICAgICAgICAgICAgICAnY2FsbGVkIHByaW9yIHRvIG9uU3RhbGxFbmQgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlDbG9zZShicm9hZHBlYWtTdGF0dXNDb2RlID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeUNsb3NlKGJyb2FkcGVha1N0YXR1c0NvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBzZXNzaW9uLmF0dGFjaFBsYXllciBzaG91bGQgYmUgY2FsbGVkIHByaW9yIHRvIG9uU2Vzc2lvblN0YXJ0IGV2ZW50LiAnICtcbiAgICAgICAgICAgICAgICAnVGhpcyBldmVudCBpcyBjYWxsZWQgd2hlbiB0aGUgcGxheWVyIGlzIGNsb3NpbmcuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlWb2x1bWVDaGFuZ2VkKHZvbHVtZSkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5ub3RpZnlWb2x1bWVDaGFuZ2VkKHZvbHVtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uZ2V0VVJMKC4uLikgb3Igc2Vzc2lvbi5nZXRRdWVyeSgpL3Nlc3Npb24uc3RhcnRTdHJlYW1pbmdTZXNzaW9uKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gb25Wb2x1bWVDaGFuZ2VkIGV2ZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5UGxheWVyRXJyb3IoYnJvYWRwZWFrU3RhdHVzQ29kZSwgcGxheWVyRXJyb3JDb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm5vdGlmeVBsYXllckVycm9yKGJyb2FkcGVha1N0YXR1c0NvZGUsIHBsYXllckVycm9yQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IHNlc3Npb24uZ2V0VVJMKC4uLikgb3Igc2Vzc2lvbi5nZXRRdWVyeSgpL3Nlc3Npb24uc3RhcnRTdHJlYW1pbmdTZXNzaW9uKC4uLikgc2hvdWxkIGJlICcgK1xuICAgICAgICAgICAgICAgICdjYWxsZWQgcHJpb3IgdG8gb25QbGF5ZXJFcnJvciBldmVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja1BsYXllcihwbGF5ZXIsIGxpc3RlbmVyKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogc3RhdGljIGNoZWNrUGxheWVyIG5vdCBpbXBsZW1lbnRlZCBmb3IgdGhpcyBhZGFwdGVyLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYXR0YWNoUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBhdHRhY2hQbGF5ZXIgbm90IGltcGxlbWVudGVkIGZvciB0aGlzIGFkYXB0ZXIuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZXRhY2hQbGF5ZXIoKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogZGV0YWNoUGxheWVyIG5vdCBpbXBsZW1lbnRlZCBmb3IgdGhpcyBhZGFwdGVyLicpO1xuICAgIH1cblxuICAgIGF0dGFjaFNlc3Npb24oaGFuZGxlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGRldGFjaFNlc3Npb24oKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNDb2RlKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2Vzc2lvblJlcG9ydC5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFBsYXllckVycm9yQ29kZShwbGF5ZXJFcnJvckNvZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2Vzc2lvblJlcG9ydC5wbGF5ZXJFcnJvckNvZGUgPSBTdHJpbmcocGxheWVyRXJyb3JDb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEN1c3RvbVBhcmFtZXRlcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXIuc3RyZWFtaW5nU2Vzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ1NldCBjdXN0b20gcGFyYW1ldGVyIG9uIHBsYXllciBhZGFwdGVyIGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gdXNpbmcgU3RyZWFtaW5nU2Vzc2lvbiBBUEkuJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnN0cmVhbWluZ1Nlc3Npb24uc2V0Q3VzdG9tUGFyYW1ldGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtQbGF5ZXJFdmVudExpc3RlbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyRXZlbnRMaXN0ZW5lciB7XG4gICAgc3RhdGljIHBsYXllckFkYXB0ZXJzID0gW107XG5cbiAgICBzdGF0aWMgYWRkUGxheWVyQWRhcHRlcihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzLmluZGV4T2YoYWRhcHRlcikgPT09IC0xKSB7XG4gICAgICAgICAgICBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzLnB1c2goYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlUGxheWVyQWRhcHRlcihhZGFwdGVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnMuaW5kZXhPZihhZGFwdGVyKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGlzU3RhcnRlZCgpIHtcbiAgICAgICAgLyogaWYgKFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkICYmIFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlci5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXIuaGFuZGxlci5tZXRyaWNzTWFuYWdlci5zdGFydGVkO1xuICAgICAgICB9Ki9cbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFkYXB0ZXJzW2FkYXB0ZXJzLmxlbmd0aCAtIDFdLmhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiBhZGFwdGVyc1thZGFwdGVycy5sZW5ndGggLSAxXS5oYW5kbGVyLm1ldHJpY3NNYW5hZ2VyLnN0YXJ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUGxheWluZygpIHtcbiAgICAgICAgLyogaWYgKFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkICYmIFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlci5oYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXIuaGFuZGxlci5tZXRyaWNzTWFuYWdlci5wbGF5aW5nO1xuICAgICAgICB9Ki9cbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFkYXB0ZXJzW2FkYXB0ZXJzLmxlbmd0aCAtIDFdLmhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiBhZGFwdGVyc1thZGFwdGVycy5sZW5ndGggLSAxXS5oYW5kbGVyLm1ldHJpY3NNYW5hZ2VyLnBsYXlpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQnVmZmVyaW5nKCkge1xuICAgICAgICAvKiBpZiAoUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQgJiYgUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVyLmhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlci5oYW5kbGVyLm1ldHJpY3NNYW5hZ2VyLmJ1ZmZlcmluZztcbiAgICAgICAgfSovXG4gICAgICAgIGNvbnN0IGFkYXB0ZXJzID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycztcbiAgICAgICAgaWYgKGFkYXB0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhZGFwdGVyc1thZGFwdGVycy5sZW5ndGggLSAxXS5oYW5kbGVyICE9PSB1bmRlZmluZWQgJiYgYWRhcHRlcnNbYWRhcHRlcnMubGVuZ3RoIC0gMV0uaGFuZGxlci5tZXRyaWNzTWFuYWdlci5idWZmZXJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uU2Vzc2lvblN0YXJ0KCkge1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGFwdGVycy5mb3JFYWNoKGFkYXB0ZXIgPT4gYWRhcHRlci5ub3RpZnlGaXJzdEltYWdlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBTbWFydExpYi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgY2FsbGVkIHByaW9yIHRvIG9uU2Vzc2lvblN0YXJ0IGV2ZW50LiBJZiB5b3UgZG9uXFwndCBhdHRhY2ggYW55IHBsYXllciwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSByZW1vdmUgdGhpcyBjYWxsLCBTbWFydExpYiBpcyBub3cgaGFuZGxpbmcgaXQgYXV0b21hdGljYWxseS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBvblNlc3Npb25QYXVzZSgpIHtcbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRhcHRlcnMuZm9yRWFjaChhZGFwdGVyID0+IGFkYXB0ZXIubm90aWZ5UGF1c2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IFNtYXJ0TGliLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TZXNzaW9uUGF1c2UgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgb25TZXNzaW9uUmVzdW1lKCkge1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGFwdGVycy5mb3JFYWNoKGFkYXB0ZXIgPT4gYWRhcHRlci5ub3RpZnlSZXN1bWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IFNtYXJ0TGliLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TZXNzaW9uUmVzdW1lIGV2ZW50LicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25MYXllclN3aXRjaChiaXRyYXRlKSB7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXJzID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycztcbiAgICAgICAgaWYgKGFkYXB0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkYXB0ZXJzLmZvckVhY2goYWRhcHRlciA9PiBhZGFwdGVyLm5vdGlmeUxheWVyU3dpdGNoKGJpdHJhdGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdJbXBsZW1lbnRhdGlvbiBlcnJvcjogU21hcnRMaWIuYXR0YWNoUGxheWVyKC4uLikgc2hvdWxkIGJlIGNhbGxlZCBwcmlvciB0byBvbkxheWVyU3dpdGNoIGV2ZW50LicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25TZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgY29uc3QgYWRhcHRlcnMgPSBQbGF5ZXJFdmVudExpc3RlbmVyLnBsYXllckFkYXB0ZXJzO1xuICAgICAgICBpZiAoYWRhcHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRhcHRlcnMuZm9yRWFjaChhZGFwdGVyID0+IGFkYXB0ZXIubm90aWZ5U2VlayhzdGFydCwgZW5kKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnSW1wbGVtZW50YXRpb24gZXJyb3I6IFNtYXJ0TGliLmF0dGFjaFBsYXllciguLi4pIHNob3VsZCBiZSBjYWxsZWQgcHJpb3IgdG8gb25TZWVrIGV2ZW50LicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25TdGFsbFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBhZGFwdGVycyA9IFBsYXllckV2ZW50TGlzdGVuZXIucGxheWVyQWRhcHRlcnM7XG4gICAgICAgIGlmIChhZGFwdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGFwdGVycy5mb3JFYWNoKGFkYXB0ZXIgPT4gYWRhcHRlci5ub3RpZnlTdGFsbFN0YXJ0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBTbWFydExpYi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgY2FsbGVkIHByaW9yIHRvIG9uU3RhbGxTdGFydCBldmVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIG9uU3RhbGxFbmQoaXNQbGF5aW5nKSB7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXJzID0gUGxheWVyRXZlbnRMaXN0ZW5lci5wbGF5ZXJBZGFwdGVycztcbiAgICAgICAgaWYgKGFkYXB0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkYXB0ZXJzLmZvckVhY2goYWRhcHRlciA9PiBhZGFwdGVyLm5vdGlmeVN0YWxsRW5kKGlzUGxheWluZykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5lKFRBRywgJ0ltcGxlbWVudGF0aW9uIGVycm9yOiBTbWFydExpYi5hdHRhY2hQbGF5ZXIoLi4uKSBzaG91bGQgYmUgY2FsbGVkIHByaW9yIHRvIG9uU3RhbGxFbmQgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMb2dnZXJNYW5hZ2VyIH0gZnJvbSAnLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgR2VuZXJpY1BsYXllckFkYXB0ZXIgZnJvbSAnLi9HZW5lcmljUGxheWVyQWRhcHRlcic7XG5pbXBvcnQgUGxheWVyRXZlbnRMaXN0ZW5lciBmcm9tICcuL1BsYXllckV2ZW50TGlzdGVuZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrUGxheWVyTWdyJztcblxuY2xhc3MgQWJzdHJhY3RQbGF5ZXJNYW5hZ2VySGFuZGxlciB7XG4gICAgc3RhdGljIGxvYWRQbGF5ZXJBZGFwdGVycygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uXG4gICAgICovXG4gICAgc3RhdGljICNpbnN0YW5jZTtcblxuICAgIHNtYXJ0TGliO1xuXG4gICAgI3BsYXllck1hbmFnZXJIYW5kbGVyID0gQWJzdHJhY3RQbGF5ZXJNYW5hZ2VySGFuZGxlcjtcblxuICAgICNwbGF5ZXJBZGFwdGVycyA9IHt9O1xuXG4gICAgI3BsYXllckFkYXB0ZXI7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghUGxheWVyTWFuYWdlci4jaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFBsYXllck1hbmFnZXIuI2luc3RhbmNlID0gbmV3IFBsYXllck1hbmFnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQbGF5ZXJNYW5hZ2VyLiNpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbml0KHBsYXllck1hbmFnZXJIYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXJNYW5hZ2VySGFuZGxlciA9PT0gQWJzdHJhY3RQbGF5ZXJNYW5hZ2VySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy4jcGxheWVyTWFuYWdlckhhbmRsZXIgPSBwbGF5ZXJNYW5hZ2VySGFuZGxlcjtcblxuICAgICAgICAgICAgdGhpcy4jcGxheWVyQWRhcHRlcnMgPSB0aGlzLiNwbGF5ZXJNYW5hZ2VySGFuZGxlci5sb2FkUGxheWVyQWRhcHRlcnMoKTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0NvbXBhdGlibGUgcGxheWVyczogJyArIE9iamVjdC5rZXlzKHRoaXMuI3BsYXllckFkYXB0ZXJzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlKCkge1xuICAgICAgICB0aGlzLnNldFBsYXllckFkYXB0ZXIodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBhdHRhY2hJbnN0YW5jZShzbWFydExpYikge1xuICAgICAgICB0aGlzLnNtYXJ0TGliID0gc21hcnRMaWI7XG4gICAgfVxuXG4gICAgZ2V0QWRhcHRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJBZGFwdGVycztcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJBZGFwdGVyKHBsYXllckFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllckFkYXB0ZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLiNwbGF5ZXJBZGFwdGVyICE9PSBwbGF5ZXJBZGFwdGVyKSB7XG4gICAgICAgICAgICAvLyBXaGVuIGNhbGxlZCB0d2ljZSwgZXZlbnRzIGFyZSByZW1vdmVkIG9uIGRldGFjaFBsYXllcigpLCBidXQgUGxheWVyQWRhcHRlciBpcyBub3QgcmVpbml0aWFsaXplZFxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1BsYXllciAnICsgdGhpcy4jcGxheWVyQWRhcHRlci5nZXROYW1lKCkgKyAnIGRldGFjaGVkJyk7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXJBZGFwdGVyLmRldGFjaFBsYXllcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuI3BsYXllckFkYXB0ZXIgIT09IHBsYXllckFkYXB0ZXIgJiYgcGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyQWRhcHRlciBpbnN0YW5jZW9mIEdlbmVyaWNQbGF5ZXJBZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0F0dGFjaGluZyBnZW5lcmljIHBsYXllciB0byBTbWFydExpYiBzaW5nbGV0b24nKTtcblxuICAgICAgICAgICAgICAgIFBsYXllckV2ZW50TGlzdGVuZXIuYWRkUGxheWVyQWRhcHRlcihwbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLiNwbGF5ZXJBZGFwdGVyICE9PSBwbGF5ZXJBZGFwdGVyICYmIHBsYXllckFkYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3BsYXllckFkYXB0ZXIgaW5zdGFuY2VvZiBHZW5lcmljUGxheWVyQWRhcHRlcikge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdEZXRhY2hpbmcgZ2VuZXJpYyBwbGF5ZXIgZnJvbSBTbWFydExpYiBzaW5nbGV0b24nKTtcblxuICAgICAgICAgICAgICAgIFBsYXllckV2ZW50TGlzdGVuZXIucmVtb3ZlUGxheWVyQWRhcHRlcih0aGlzLiNwbGF5ZXJBZGFwdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXJBZGFwdGVyICE9PSBwbGF5ZXJBZGFwdGVyKSB7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJBZGFwdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdQbGF5ZXIgJyArIHRoaXMuI3BsYXllckFkYXB0ZXIuZ2V0TmFtZSgpICsgJyBhbHJlYWR5IGF0dGFjaGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyQWRhcHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnUGxheWVyICcgKyBwbGF5ZXJBZGFwdGVyLmdldE5hbWUoKSArICcgYXR0YWNoZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBsYXllckFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJBZGFwdGVyO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgSm9iTWFuYWdlciBmcm9tICcuLi9zZXJ2aWNlL0pvYk1hbmFnZXInO1xuaW1wb3J0IFNtYXJ0TGliIGZyb20gJy4uL1NtYXJ0TGliJztcblxuY29uc3QgVEFHID0gJ0Jwa0FuYWx5dGljc1JlcXVlc3RNZ3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbWV0cmljcyByZWNlaXZlciBCa0EgQVBJXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgTUVUUklDU19SRUNFSVZFUl9QQVRIID0gJ2ZzZXJ2aWNlcy9tZXRyaWNzUmVjZWl2ZXInO1xuXG4gICAgLyoqXG4gICAgICogVGltZW91dCB1c2VkIGZvciBwb3N0aW5nIGRhdGEgdG8gdGhlIEJrQVxuICAgICAqIEB0eXBlIHtudW1iZXJ9IGluIG1pbGxpc1xuICAgICAqL1xuICAgIHN0YXRpYyBQT1NUX1NFU1NJT05fUkVRVUVTVF9USU1FT1VUID0gNTAwMDtcblxuICAgIC8qKlxuICAgICAqIFByZWZpeCB0byBwcmV2ZW50IHN0b3JpbmcgdGhlIHJlcG9ydCBpbiBjYWNoZSAoZXg6IGZvciBzdGFnaW5nIEJrQXMpXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgTk9DQUNIRV9QUkVGSVggPSAnbm9jYWNoZT0nO1xuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uXG4gICAgICovXG4gICAgc3RhdGljICNpbnN0YW5jZTtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci4jaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLiNpbnN0YW5jZSA9IG5ldyBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLiNpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgZnVsbCBwb3N0IGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gYW5hbHl0aWNzQWRkcmVzcyBTZXJ2ZXIgYmFzZSBhZGRyZXNzXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBhZGRyZXNzXG4gICAgICovXG4gICAgYnVpbGRBbmFseXRpY3NBZGRyZXNzKGFuYWx5dGljc0FkZHJlc3MpIHtcbiAgICAgICAgYW5hbHl0aWNzQWRkcmVzcyA9IGFuYWx5dGljc0FkZHJlc3MudHJpbSgpO1xuICAgICAgICBpZiAoIWFuYWx5dGljc0FkZHJlc3MuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWRkcmVzcyArPSAnLyc7XG4gICAgICAgIH1cbiAgICAgICAgYW5hbHl0aWNzQWRkcmVzcyArPSBBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5NRVRSSUNTX1JFQ0VJVkVSX1BBVEg7XG5cbiAgICAgICAgcmV0dXJuIGFuYWx5dGljc0FkZHJlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBzdGFydCBzZXNzaW9uIHJlcXVlc3QgdG8gdGhlIEJrQVxuICAgICAqIEBwYXJhbSBoYW5kbGVyIHNlc3Npb24gaGFuZGxlclxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHNtYXJ0bGliIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmVxdWVzdCBlbmQgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qIHN0YXJ0U2Vzc2lvbihoYW5kbGVyLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25SZXBvcnQgPSBoYW5kbGVyLnNlc3Npb25SZXBvcnQ7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmFuYWx5dGljc0FkZHJlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBhbmFseXRpY3NBZGRyZXNzZXMgPSBwYXJhbWV0ZXJzLmFuYWx5dGljc0FkZHJlc3Muc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICBhbmFseXRpY3NBZGRyZXNzZXMuZm9yRWFjaChhbmFseXRpY3NBZGRyZXNzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZGluZyBhbmFseXRpY3MgYWRkcmVzc1xuICAgICAgICAgICAgICAgIGFuYWx5dGljc0FkZHJlc3MgPSB0aGlzLmJ1aWxkQW5hbHl0aWNzQWRkcmVzcyhhbmFseXRpY3NBZGRyZXNzKTtcblxuICAgICAgICAgICAgICAgIC8vIFBvc3Qgc3RhcnQgc2Vzc2lvblxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdQb3N0aW5nIG1ldHJpY3MgdG8gJyArIGFuYWx5dGljc0FkZHJlc3MsIGhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnBvc3RTZXNzaW9uKGFuYWx5dGljc0FkZHJlc3MsIHNlc3Npb25SZXBvcnQudG9TdGFydFNlc3Npb25KU09OKCksIHBhcmFtZXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU2VuZCBjcmVhdGlvbiBzZXNzaW9uIG1ldHJpY3MgZW5kZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzdWx0Lmh0dHBTdGF0dXMgKyAnICgnICsgYW5hbHl0aWNzQWRkcmVzcyArICcpJywgaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuaHR0cFN0YXR1cyA+PSAyMDAgJiYgcmVzdWx0Lmh0dHBTdGF0dXMgPCAzMDA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NlbmQgY3JlYXRpb24gc2Vzc2lvbiBtZXRyaWNzIGRvbmUnLCBoYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlck1hbmFnZXIudyhUQUcsICdNZXRyaWNzIHBsYXRmb3JtIFVSTCBpcyBudWxsLCBjcmVhdGlvbiBtZXRyaWNzIHdvblxcJ3QgYmUgcG9zdGVkIGFueXdoZXJlLicsIGhhbmRsZXIuaWQpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH0qL1xuXG4gICAgLyoqXG4gICAgICogU2VuZCBlbmQgc2Vzc2lvbiByZXF1ZXN0IHRvIHRoZSBCa0FcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBzZXNzaW9uIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVycyBzbWFydGxpYiBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJlcXVlc3QgZW5kIHByb21pc2VcbiAgICAgKi9cbiAgICBlbmRTZXNzaW9uKGhhbmRsZXIsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblJlcG9ydCA9IGhhbmRsZXIuc2Vzc2lvblJlcG9ydDtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuYW5hbHl0aWNzQWRkcmVzcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FkZHJlc3NlcyA9IHBhcmFtZXRlcnMuYW5hbHl0aWNzQWRkcmVzcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XG5cbiAgICAgICAgICAgIGFuYWx5dGljc0FkZHJlc3Nlcy5mb3JFYWNoKGFuYWx5dGljc0FkZHJlc3MgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5vQ2FjaGUgPSBhbmFseXRpY3NBZGRyZXNzLmluZGV4T2YoQW5hbHl0aWNzUmVxdWVzdE1hbmFnZXIuTk9DQUNIRV9QUkVGSVgpID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChub0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLk5PQ0FDSEVfUFJFRklYICsgJyBvcHRpb24gdXNlZCwgbm8gbmVlZCB0byBzdG9yZSB0aGUgcmVwb3J0IGluIGNhY2hlJyk7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5dGljc0FkZHJlc3MgPSB0aGlzLmJ1aWxkQW5hbHl0aWNzQWRkcmVzcyhhbmFseXRpY3NBZGRyZXNzLnN1YnN0cmluZyhBbmFseXRpY3NSZXF1ZXN0TWFuYWdlci5OT0NBQ0hFX1BSRUZJWC5sZW5ndGgpKTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3NBZGRyZXNzID0gdGhpcy5idWlsZEFuYWx5dGljc0FkZHJlc3MoYW5hbHl0aWNzQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUG9zdCBlbmQgc2Vzc2lvblxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdQb3N0aW5nIG1ldHJpY3MgdG8gJyArIGFuYWx5dGljc0FkZHJlc3MsIGhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnBvc3RTZXNzaW9uKGFuYWx5dGljc0FkZHJlc3MsIHNlc3Npb25SZXBvcnQudG9FbmRTZXNzaW9uSlNPTigpLCBwYXJhbWV0ZXJzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1NlbmQgc2Vzc2lvbiBtZXRyaWNzIGVuZGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3VsdC5odHRwU3RhdHVzICsgJyAoJyArIGFuYWx5dGljc0FkZHJlc3MgKyAnKScsIGhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmh0dHBTdGF0dXMgPj0gMjAwICYmIHJlc3VsdC5odHRwU3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBjYWNoZSBvbiBzdWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlLkNhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgcmVwb3J0IGluIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbWFydExpYi5hbmFseXRpY3NNb2R1bGUuQ2FjaGVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RvcmVTZXNzaW9uUmVwb3J0KGFuYWx5dGljc0FkZHJlc3MsIHNlc3Npb25SZXBvcnQudG9FbmRTZXNzaW9uSlNPTigpLCB0cnVlLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTZW5kIHNlc3Npb24gbWV0cmljcyBkb25lJywgaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLncoVEFHLCAnTWV0cmljcyBwbGF0Zm9ybSBVUkwgaXMgbnVsbCwgbWV0cmljcyB3b25cXCd0IGJlIHBvc3RlZCBhbnl3aGVyZS4nLCBoYW5kbGVyLmlkKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIHNlc3Npb24gcmVwb3J0IHN0b3JlZCBpbiBjYWNoZVxuICAgICAqIEBwYXJhbSBhbmFseXRpY3NBZGRyZXNzIGZ1bGwgYW5hbHl0aWNzIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gc2Vzc2lvblJlcG9ydEpzb24gc2Vzc2lvbiByZXBvcnQgYXQgSlNPTiBmb3JtYXRcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVycyBzbWFydGxpYiBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJlcXVlc3QgZW5kIHByb21pc2VcbiAgICAgKi9cbiAgICBlbmRTZXNzaW9uQ2FjaGUoYW5hbHl0aWNzQWRkcmVzcywgc2Vzc2lvblJlcG9ydEpzb24sIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKGFuYWx5dGljc0FkZHJlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBQb3N0IGVuZCBzZXNzaW9uXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnUG9zdGluZyBjYWNoZSB0byAnICsgYW5hbHl0aWNzQWRkcmVzcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3N0U2Vzc2lvbihhbmFseXRpY3NBZGRyZXNzLCBzZXNzaW9uUmVwb3J0SnNvbiwgcGFyYW1ldGVycylcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU2VuZCBjYWNoZSBlbmRlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXN1bHQuaHR0cFN0YXR1cyArICcgKCcgKyBhbmFseXRpY3NBZGRyZXNzICsgJyknKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmh0dHBTdGF0dXMgPj0gMjAwICYmIHJlc3VsdC5odHRwU3RhdHVzIDwgMzAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ01ldHJpY3MgcGxhdGZvcm0gVVJMIGlzIG51bGwsIGNhY2hlIHdvblxcJ3QgYmUgcG9zdGVkIGFueXdoZXJlLicpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgc2Vzc2lvbiByZXBvcnQgUE9TVCByZXF1ZXN0XG4gICAgICogQHBhcmFtIHVybCB1cmxcbiAgICAgKiBAcGFyYW0gYm9keSBib2R5XG4gICAgICogQHBhcmFtIHBhcmFtZXRlcnMgc21hcnRsaWIgcGFyYW1ldGVycyB1c2VkIGZvciBoZWFkZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59IHJlcXVlc3QgZW5kIHByb21pc2VcbiAgICAgKi9cbiAgICBwb3N0U2Vzc2lvbih1cmwsIGJvZHksIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0Nvbm5lY3Rpb24nOiAnY2xvc2UnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy51c2VyQWdlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGhlYWRlcnNbJ1VzZXItQWdlbnQnXSA9IHBhcmFtZXRlcnMudXNlckFnZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZW5jb2RlZEJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0V4ZWN1dGluZyBQT1NUIHJlcXVlc3Qgd2l0aCBib2R5OiAnICsgZW5jb2RlZEJvZHkpO1xuXG4gICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXN5bmNQb3N0KHVybCwgaGVhZGVycywgZW5jb2RlZEJvZHksIEFuYWx5dGljc1JlcXVlc3RNYW5hZ2VyLlBPU1RfU0VTU0lPTl9SRVFVRVNUX1RJTUVPVVQsIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFsnc3RhdHVzQ29kZSddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHBhcnNlSW50KHJlc3VsdFsnc3RhdHVzQ29kZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7aHR0cFN0YXR1czogc3RhdHVzQ29kZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7U3RyZWFtaW5nU2Vzc2lvbn0gZnJvbSAnLi4vc3RyZWFtaW5nL1N0cmVhbWluZ1Nlc3Npb24nO1xuaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa0FuYWx5dGljc1Nlc3Npb24nO1xuXG4vKipcbiAqIE9uY2UgYSBzZXNzaW9uIGhhcyBiZWVuIGNyZWF0ZWQsIGFsbCBuZXh0IGNhbGxzIGhhdmUgdG8gYmUgZG9uZSBvbiB0aGF0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1Nlc3Npb24gZXh0ZW5kcyBTdHJlYW1pbmdTZXNzaW9uIHtcblxuICAgIHN0YXJ0ZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzbWFydExpYiwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihzbWFydExpYiwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5nZXRVUkwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5nZXRRdWVyeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zdGFydFN0cmVhbWluZ1Nlc3Npb24gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5zdG9wQW5hbHl0aWNzU2Vzc2lvbiA9IHRoaXMuc3RvcFN0cmVhbWluZ1Nlc3Npb247XG4gICAgICAgIHRoaXMuc3RvcFN0cmVhbWluZ1Nlc3Npb24gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXR0YWNoUGxheWVyKHBsYXllciwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIuYXR0YWNoUGxheWVyKHBsYXllciwgbGlzdGVuZXIpO1xuXG4gICAgICAgIC8vIExpc3RlbiB0byBwbGF5ZXIgZXZlbnRzIHdoZW4gYXR0YWNoaW5nIGl0XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gdGhpcy5zbWFydExpYi5zZXNzaW9uTWFuYWdlci5jcmVhdGVTZXNzaW9uSGFuZGxlcih0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5pbml0UGxheWVyQWRhcHRlcigpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmFkZExpc3RlbmVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0VVJMIHN0YXJ0IGVxdWl2YWxlbnRcbiAgICBvbkxvYWRpbmcoKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuaShUQUcsICdTZXNzaW9uIGlzIGxvYWRpbmcuLi4nLCB0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5zdGFydGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gU2V0IGFkIHNlc3Npb24gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmFkU2Vzc2lvbiA9IHRoaXMuYWRTZXNzaW9uO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRTZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkU2Vzc2lvbi5oYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU2Vzc2lvbiBpcyBzdGFydGluZyB3aXRoIFVSTCAnICsgdGhpcy5jdXN0b21QYXJhbWV0ZXJzWydyZXBvcnQucmVxdWVzdGVkVVJMJ10sIHRoaXMuaWQpO1xuICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5pKFRBRywgJ1Nlc3Npb24gaXMgc3RhcnRpbmcuLi4nKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zdGFydCgnJylcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0V4Y2VwdGlvbjogb25Mb2FkaW5nLCB0aGUgc2Vzc2lvbiBpcyBhbHJlYWR5IHJ1bm5pbmcuJywgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTZXNzaW9uUmVwb3J0VmFsdWUobmFtZSkge1xuICAgICAgICBjb25zdCBzZXNzaW9uUmVwb3J0ID0gdGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQ7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVBhcmFtZXRlcnNbJ3JlcG9ydC4nICsgbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2Vzc2lvblJlcG9ydFtuYW1lXSA9IHRoaXMuY3VzdG9tUGFyYW1ldGVyc1sncmVwb3J0LicgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xvc2UoYnJvYWRwZWFrU3RhdHVzQ29kZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmkoVEFHLCAnU2Vzc2lvbiBpcyBjbG9zaW5nIChzdGF0dXMgY29kZTogJyArIGJyb2FkcGVha1N0YXR1c0NvZGUgKyAnKS4uLicsIHRoaXMuaWQpO1xuXG4gICAgICAgIC8vIERpc2FibGUgcmVkaXJlY3Rpb24gdGltZVxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyLnNlc3Npb25SZXBvcnQubWV0cmljcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2Vzc2lvblJlcG9ydC5tZXRyaWNzLnJlZGlyZWN0aW9uVGltZSA9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHNlc3Npb24gcmVwb3J0IHdpdGggY3VzdG9tIHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvblJlcG9ydFZhbHVlKCdyZXF1ZXN0ZWRVUkwnKTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXNzaW9uUmVwb3J0VmFsdWUoJ3JlZGlyZWN0ZWRVUkwnKTtcblxuICAgICAgICB0aGlzLnN0b3BBbmFseXRpY3NTZXNzaW9uKGJyb2FkcGVha1N0YXR1c0NvZGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgU2Vzc2lvblRyYWNrZXJFdmVudHNcbn0gZnJvbSAnLi9TZXNzaW9uVHJhY2tlckV2ZW50JztcbmltcG9ydCBTZXNzaW9uVHJhY2tlclN1bW1hcnkgZnJvbSAnLi9TZXNzaW9uVHJhY2tlclN1bW1hcnknO1xuaW1wb3J0IEJ5dGVCdWZmZXIgZnJvbSAnLi4vdXRpbHMvQnl0ZUJ1ZmZlcic7XG5pbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrU2Vzc2lvblRyYWNrZXJFbmNvZGVyJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25UcmFja2VyRW5jb2RlciB7XG4gICAgc3RhdGljIERFRkFVTFRfQlVGRkVSX1NJWkUgPSAzODQ7XG5cbiAgICBzdGF0aWMgREVGQVVMVF9FTkRfRVZFTlRTX0RVUkFUSU9OID0gMTUwMDA7XG5cbiAgICBzdGF0aWMgREVGQVVMVF9FTkRfRVZFTlRTX05VTUJFUiA9IDIwO1xuXG4gICAgLyoqXG4gICAgICogVGltZWxpbmUgdG8gZW5jb2RlXG4gICAgICovXG4gICAgdGltZWxpbmU7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG1heCBidWZmZXIgc2l6ZSAoc2V0IG9uIGluaXQgb3IgZXh0ZW5kZWQgaW4gZXh0ZW5kIG1ldGhvZClcbiAgICAgKi9cbiAgICBtYXhCdWZmZXJTaXplO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBtYXggZHVyYXRpb24gb2YgZXZlbnRzIGluIGVuZCBidWZmZXJcbiAgICAgKi9cbiAgICBtYXhFbmRFdmVudHNEdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbWF4IG51bWJlciBvZiBldmVudHMgaW4gZW5kIGJ1ZmZlclxuICAgICAqL1xuICAgIG1heEVuZEV2ZW50c051bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50cyBhcnJheSBvZiB0aW1lbGluZVxuICAgICAqL1xuICAgIGV2ZW50cztcblxuICAgIC8qKlxuICAgICAqIFVuY29tcHJlc3NlZCBkYXRhIGJ1ZmZlclxuICAgICAqIEVtcHRpZWQgZHVyaW5nIGZpcnN0IGNvbXByZXNzaW9uIHdpdGggdW5jb21wcmVzc2VkRGF0YUZ1bGwgPT09IHRydWVcbiAgICAgKi9cbiAgICB1bmNvbXByZXNzZWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogVW5jb21wcmVzc2VkIGRhdGEgYnVmZmVyIGZ1bGxcbiAgICAgKi9cbiAgICB1bmNvbXByZXNzZWREYXRhRnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbXByZXNzZWQgc3RhcnQgZGF0YSBidWZmZXJcbiAgICAgKi9cbiAgICBjb21wcmVzc2VkU3RhcnREYXRhO1xuXG4gICAgLyoqXG4gICAgICogTWluIGluZGV4IGluIGV2ZW50cyB0byBzdW1tYXJpemVkXG4gICAgICovXG4gICAgbWluU3VtbWFyeUluZGV4O1xuXG4gICAgLyoqXG4gICAgICogTWF4IGJ1ZmZlciBzaXplIGZvciBlbmQgZXZlbnRzXG4gICAgICogQ2FsY3VsYXRlZCBkdXJpbmcgZmlyc3QgY29tcHJlc3Npb24gd2l0aCB1bmNvbXByZXNzZWREYXRhRnVsbCA9PT0gdHJ1ZVxuICAgICAqL1xuICAgIG1heEVuZEJ1ZmZlclNpemU7XG5cbiAgICAvKipcbiAgICAgKiBTdW1tYXJ5IG9iamVjdFxuICAgICAqL1xuICAgIHN1bW1hcnk7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aW1lbGluZSwgbWF4QnVmZmVyU2l6ZSA9IFNlc3Npb25UcmFja2VyRW5jb2Rlci5ERUZBVUxUX0JVRkZFUl9TSVpFLFxuICAgICAgICBtYXhFbmRFdmVudHNEdXJhdGlvbiA9IFNlc3Npb25UcmFja2VyRW5jb2Rlci5ERUZBVUxUX0VORF9FVkVOVFNfRFVSQVRJT04sXG4gICAgICAgIG1heEVuZEV2ZW50c051bWJlciA9IFNlc3Npb25UcmFja2VyRW5jb2Rlci5ERUZBVUxUX0VORF9FVkVOVFNfTlVNQkVSKSB7XG4gICAgLy8gSkZNXG4gICAgLy8gY29uc3RydWN0b3IodGltZWxpbmUsIG1heEJ1ZmZlclNpemUgPSA4MCxcbiAgICAvLyAgICBtYXhFbmRFdmVudHNEdXJhdGlvbiA9IFNlc3Npb25UcmFja2VyRW5jb2Rlci5ERUZBVUxUX0VORF9FVkVOVFNfRFVSQVRJT04sXG4gICAgLy8gICAgbWF4RW5kRXZlbnRzTnVtYmVyID0gNSkge1xuXG4gICAgICAgIHRoaXMubWF4QnVmZmVyU2l6ZSA9IG1heEJ1ZmZlclNpemU7XG4gICAgICAgIHRoaXMubWF4RW5kRXZlbnRzRHVyYXRpb24gPSBtYXhFbmRFdmVudHNEdXJhdGlvbjtcbiAgICAgICAgdGhpcy5tYXhFbmRFdmVudHNOdW1iZXIgPSBtYXhFbmRFdmVudHNOdW1iZXI7XG5cbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuXG4gICAgICAgIHRoaXMuZXZlbnRzID0gdGhpcy50aW1lbGluZS5ldmVudHM7XG5cbiAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5tYXhCdWZmZXJTaXplKTtcbiAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhRnVsbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXByZXNzZWRTdGFydERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5taW5TdW1tYXJ5SW5kZXggPSAwO1xuXG4gICAgICAgIHRoaXMubWF4RW5kQnVmZmVyU2l6ZSA9IHRoaXMubWF4QnVmZmVyU2l6ZTtcblxuICAgICAgICB0aGlzLnN1bW1hcnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIGxhc3QgZXZlbnQgaW4gdGltZWxpbmVcbiAgICAgKlxuICAgICAqIFRvIGNhbGwgd2hlbiBhbiBldmVudCBpcyBhZGRlZCB0byBldmVudHNcbiAgICAgKiBPbmx5IHVzZWQgaW4gdW5jb21wcmVzc2VkIG1vZGUgYmVjYXVzZSBzdGFydCBldmVudHMgZG9uJ3QgbmVlZCB0byBiZSBlbmNvZGVkIHR3aWNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkV2ZW50QWRkZWQoZXZlbnQpIHtcbiAgICAgICAgLy8gSWYgY29tcHJlc3Npb24gbW9kZSBlbmFibGVkLCB0aGUgZW5jb2RpbmcgaXMgZG9uZSBpbiB0aGUgcHJvY2VzcyBtZXRob2RcbiAgICAgICAgaWYgKHRoaXMudW5jb21wcmVzc2VkRGF0YUZ1bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBwcmV2aW91cyBldmVudFxuICAgICAgICBsZXQgcHJldmlvdXNFdmVudCA9IGV2ZW50O1xuICAgICAgICBpZiAodGhpcy5ldmVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIHByZXZpb3VzRXZlbnQgPSB0aGlzLmV2ZW50c1t0aGlzLmV2ZW50cy5sZW5ndGggLSAyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuY29kZSB0aGUgZXZlbnRcbiAgICAgICAgZXZlbnQuY29tcHJlc3NlZERhdGEgPSBldmVudC50b0RhdGEocHJldmlvdXNFdmVudC5ldmVudERhdGUpO1xuICAgICAgICBldmVudC5jb21wcmVzc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgaWYgKGV2ZW50LmNvbXByZXNzZWREYXRhLmNhcGFjaXR5KCkgPD0gdGhpcy51bmNvbXByZXNzZWREYXRhLnJlbWFpbmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnVuY29tcHJlc3NlZERhdGEucHV0Qnl0ZUJ1ZmZlcihldmVudC5jb21wcmVzc2VkRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuY29tcHJlc3NlZERhdGFGdWxsID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gSW5pdCBjb21wcmVzc2VkIHN0YXJ0IGRhdGEgYnVmZmVyXG4gICAgICAgICAgICB0aGlzLmNvbXByZXNzZWRTdGFydERhdGEgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLm1heEJ1ZmZlclNpemUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FdmVudFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMudW5jb21wcmVzc2VkRGF0YSA9IG5ldyBCeXRlQnVmZmVyKHRoaXMubWF4QnVmZmVyU2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChldmVudC5jb21wcmVzc2VkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhLnB1dEJ5dGVCdWZmZXIodGhpcy5ldmVudHNbaV0uY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIHRoZSBjdXJyZW50IHRpbWVsaW5lXG4gICAgICogQ2FuIGJlIGNhbGxlZCBhdCBhbnkgdGltZSB0byBwcm9jZXNzIGN1cnJlbnQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qnl0ZUJ1ZmZlcn1cbiAgICAgKi9cbiAgICBwcm9jZXNzKCkge1xuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRW5jb2RpbmcgJyArIHRoaXMuZXZlbnRzLmxlbmd0aCArICcgZXZlbnRzLi4uJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghdGhpcy51bmNvbXByZXNzZWREYXRhRnVsbCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1RpbWVsaW5lIGVuY29kZXIgZ2VuZXJhdGVkIHVuY29tcHJlc3NlZCBkYXRhICgnICsgdGhpcy5ldmVudHMubGVuZ3RoICsgJyBldmVudHMsICcgKyB0aGlzLnVuY29tcHJlc3NlZERhdGEubGVuZ3RoKCkgKyAnIGJ5dGVzKScpO1xuXG4gICAgICAgICAgICAvLyByZXR1cm4gZGF0YSBkaXJlY3RseSBpZiBubyBjb21wcmVzc2lvbiBuZWVkZWRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVuY29tcHJlc3NlZERhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnICBFbmNvZGVyIHVzaW5nIGNvbXByZXNzZWQgZGF0YScpO1xuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnICBDb21wcmVzc2luZyBlbmQgZXZlbnRzLi4uJyk7XG5cbiAgICAgICAgLy8gTG9nXG4gICAgICAgIGxldCBvdXRwdXRMb2cgPSAnJztcblxuICAgICAgICAvLyBFbmNvZGUgZW5kIGV2ZW50c1xuICAgICAgICBsZXQgZW5kQnVmZmVycyA9IFtdO1xuICAgICAgICBsZXQgc2l6ZSA9IDA7XG4gICAgICAgIGxldCBtYXhTdW1tYXJ5SW5kZXg7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChkYXRlIC0gZXZlbnQuZXZlbnREYXRlIDwgdGhpcy5tYXhFbmRFdmVudHNEdXJhdGlvbiAmJiBlbmRCdWZmZXJzLmxlbmd0aCA8IHRoaXMubWF4RW5kRXZlbnRzTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gRW5jb2RlIGV2ZW50XG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHRoaXMuZXZlbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEV2ZW50ID0gdGhpcy5ldmVudHNbaSArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGV2ZW50LnRvRGF0YShsYXN0RXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBldmVudC50b0RhdGEoZXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgb2xkZXN0IGVuZCBldmVudCBjYW4gZml0IGluIHRoZSBidWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSArIGJ1ZmZlci5sZW5ndGgoKSA8PSB0aGlzLm1heEVuZEJ1ZmZlclNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kQnVmZmVycy5wdXNoKGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIHNpemUgKz0gYnVmZmVyLmxlbmd0aCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICcgICAgUmVtb3ZpbmcgbGF0ZXN0IGVuZCBldmVudCAobWF4IHNpemUgcmVhY2hlZCknKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4U3VtbWFyeUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXhTdW1tYXJ5SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5jb2Rpbmcgc3RhcnQgZXZlbnRzIChmaXJzdCB0aW1lIG9ubHkpXG4gICAgICAgIGlmICh0aGlzLmNvbXByZXNzZWRTdGFydERhdGEubGVuZ3RoKCkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICcgIENvbXByZXNzaW5nIHN0YXJ0IGV2ZW50cy4uLicpO1xuICAgICAgICAgICAgdGhpcy5taW5TdW1tYXJ5SW5kZXggPSBtYXhTdW1tYXJ5SW5kZXg7XG5cbiAgICAgICAgICAgIGNvbnN0IG1heFNpemUgPSB0aGlzLm1heEJ1ZmZlclNpemUgLSBTZXNzaW9uVHJhY2tlclN1bW1hcnkuQlVGRkVSX1NJWkUgLSBzaXplO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbWF4U3VtbWFyeUluZGV4IDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXByZXNzZWRTdGFydERhdGEubGVuZ3RoKCkgKyBldmVudC5jb21wcmVzc2VkRGF0YS5sZW5ndGgoKSA+IG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5TdW1tYXJ5SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzZWRTdGFydERhdGEucHV0Qnl0ZUJ1ZmZlcihldmVudC5jb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIG1heCBidWZmZXIgc2l6ZSBmb3IgZW5kIGV2ZW50cyAodXNlZCBpbiB0aGUgbmV4dCBwcm9jZXNzIGl0ZXJhdGlvbiwgc2VlIGJlbG93KVxuICAgICAgICAgICAgdGhpcy5tYXhFbmRCdWZmZXJTaXplID0gdGhpcy5jb21wcmVzc2VkU3RhcnREYXRhLnJlbWFpbmluZygpIC0gU2Vzc2lvblRyYWNrZXJTdW1tYXJ5LkJVRkZFUl9TSVpFO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmluZyB1bnVzZWQgYnVmZmVyXG4gICAgICAgICAgICB0aGlzLnVuY29tcHJlc3NlZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIC8vIERlYnVnIGxvZ1xuICAgICAgICAgICAgb3V0cHV0TG9nICs9ICdmaXJzdCBpdGVyYXRpb24sICc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGluZyBvdXRwdXQgYnVmZmVyXG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLm1heEJ1ZmZlclNpemUpO1xuXG4gICAgICAgIC8vIFNldCBzdGFydCBkYXRhXG4gICAgICAgIGJ1ZmZlci5wdXRCeXRlQnVmZmVyKHRoaXMuY29tcHJlc3NlZFN0YXJ0RGF0YSwgdGhpcy5jb21wcmVzc2VkU3RhcnREYXRhLmxlbmd0aCgpKTtcblxuICAgICAgICAvLyBTZXQgc3VtbWFyeVxuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnICBTdW1tYXJpemluZyBkYXRhLi4uJyk7XG4gICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICcgICAgbWluU3VtbWFyeUluZGV4OicgKyB0aGlzLm1pblN1bW1hcnlJbmRleCArICcsbWF4U3VtbWFyeUluZGV4OicgKyBtYXhTdW1tYXJ5SW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5taW5TdW1tYXJ5SW5kZXggPT09IG1heFN1bW1hcnlJbmRleCkgeyAvLyBFR0E6IGlzIHRoaXMgZXZlbiBwb3NzaWJsZSwgcmVnYXJkaW5nIHRoZSBEYXRhU3VtbWFyeSBldmVudCBzaXplIFZTIGFub3RoZXIgZXZlbnQgc2l6ZT9cbiAgICAgICAgICAgIC8vIE5vIHN1bW1hcnkgbmVlZGVkXG4gICAgICAgICAgICBidWZmZXIucHV0KFNlc3Npb25UcmFja2VyRXZlbnRzLkVtcHR5U3VtbWFyeSk7XG5cbiAgICAgICAgICAgIC8vIExvZ2dlck1hbmFnZXIuZChUQUcsICcgICAgTm8gc3VtbWFyeSBuZWVkZWQnKTtcbiAgICAgICAgICAgIG91dHB1dExvZyArPSAnbm8gc3VtbWFyeSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdW1tYXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnkgPSBuZXcgU2Vzc2lvblRyYWNrZXJTdW1tYXJ5KHRoaXMudGltZWxpbmUsIHRoaXMubWluU3VtbWFyeUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeS51cGRhdGUobWF4U3VtbWFyeUluZGV4KTtcblxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeUJ1ZmZlciA9IHRoaXMuc3VtbWFyeS5kYXRhKCk7XG4gICAgICAgICAgICBidWZmZXIucHV0Qnl0ZUJ1ZmZlcihzdW1tYXJ5QnVmZmVyKTtcblxuICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgICBTdW1tYXJ5OicgKyB0aGlzLnN1bW1hcnkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIG91dHB1dExvZyArPSAnc3VtbWFyeSB7JyArIHRoaXMuc3VtbWFyeS50b1N0cmluZygpICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGVuZCBkYXRhXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGVuZEJ1ZmZlcnMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBidWZmZXIucHV0Qnl0ZUJ1ZmZlcihlbmRCdWZmZXJzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdUaW1lbGluZSBlbmNvZGVyIGdlbmVyYXRlZCBjb21wcmVzc2VkIGRhdGEgKCcgKyB0aGlzLmV2ZW50cy5sZW5ndGggKyAnIGV2ZW50cyBiZWZvcmUgZW5jb2RpbmcsICcgK1xuICAgICAgICAgICAgKHRoaXMubWluU3VtbWFyeUluZGV4ICsgZW5kQnVmZmVycy5sZW5ndGgpICsgJyBldmVudHMgYWZ0ZXIgZW5jb2RpbmcsICcgKyBidWZmZXIubGVuZ3RoKCkgKyAnIGJ5dGVzLCB+JyArIChEYXRlLm5vdygpIC0gZGF0ZSkgKyAnbXMsICcgKyBvdXRwdXRMb2cgKyAnKScpO1xuXG4gICAgICAgIC8vIHRoaXMucHJpbnQoYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIC8qIHByaW50KGJ1ZmZlcikge1xuICAgICAgICAvLyBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQYXJzaW5nIGJ1ZmZlcjonKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYnVmZmVyLmJ1ZmZlcjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBidWZmZXIubGVuZ3RoKCkgOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbaW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IGluIFNlc3Npb25UcmFja2VyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNlc3Npb25UcmFja2VyRXZlbnRzW2V2ZW50XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJyAgJyArIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFNlc3Npb25UcmFja2VyRXZlbnRzLk5vbmUpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gU2Vzc2lvblRyYWNrZXJFdmVudHMuRW1wdHlTdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nlc3Npb25UcmFja2VyRXZlbnRzLkVtcHR5U3VtbWFyeScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gU2Vzc2lvblRyYWNrZXJFdmVudHMuRGF0YVN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAyNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVFlQRVNfV0lUSE9VVF9EQVRBLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRZUEVTX1NUQVJULmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRZUEVTX1dJVEhfQklUUkFURS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSA0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChUWVBFU19XSVRIX0JJVFJBVEVfUE9TSVRJT04uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVFlQRVNfV0lUSF9QT1NJVElPTlNfU1RBUlRfRU5ELmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRZUEVTX1dJVEhfU1RBVFVTX0NPREUuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gNDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVFlQRVNfV0lUSF9QUk9HUkVTUy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSA0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChUWVBFU19XSVRIX1NUQVRFLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIGV4dGVuZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVuY29tcHJlc3NlZERhdGFGdWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1heEJ1ZmZlclNpemUgPSA3Njg7XG4gICAgICAgICAgICB0aGlzLm1heEVuZEV2ZW50c0R1cmF0aW9uID0gNDAwMDA7XG4gICAgICAgICAgICB0aGlzLm1heEVuZEV2ZW50c051bWJlciA9IDQwO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMudW5jb21wcmVzc2VkRGF0YTtcblxuICAgICAgICAgICAgdGhpcy51bmNvbXByZXNzZWREYXRhID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5tYXhCdWZmZXJTaXplKTtcbiAgICAgICAgICAgIHRoaXMudW5jb21wcmVzc2VkRGF0YS5wdXRCeXRlQnVmZmVyKGRhdGEsIGRhdGEubGVuZ3RoKCkpO1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0V4dGVuZGVkIHNpemUgZnJvbSAnICsgU2Vzc2lvblRyYWNrZXJFbmNvZGVyLkRFRkFVTFRfQlVGRkVSX1NJWkUgKyAnIHRvICcgKyB0aGlzLm1heEJ1ZmZlclNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci53KFRBRywgJ0ZhaWxlZCB0byBleHRlbmQgc2l6ZSBmcm9tICcgKyBTZXNzaW9uVHJhY2tlckVuY29kZXIuREVGQVVMVF9CVUZGRVJfU0laRSArICcgdG8gJyArIHRoaXMubWF4QnVmZmVyU2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuaW1wb3J0IEJ5dGVCdWZmZXIgZnJvbSAnLi4vdXRpbHMvQnl0ZUJ1ZmZlcic7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gJy4uL3V0aWxzL0RhdGVVdGlscyc7XG5pbXBvcnQgTWV0cmljc01hbmFnZXIgZnJvbSAnLi4vbWV0cmljcy9NZXRyaWNzTWFuYWdlcic7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4uL3V0aWxzL01hdGhVdGlscyc7XG5cbmV4cG9ydCBjb25zdCBTZXNzaW9uVHJhY2tlckV2ZW50cyA9IHtcbiAgICBOb25lOiAweDAwLFxuICAgIFN0YXJ0OiAweDAxLFxuICAgIFN0b3A6IDB4MDIsXG4gICAgUmVkaXJlY3Rpb25FbmQ6IDB4MDMsXG4gICAgRmlyc3RJbWFnZTogMHgwNCxcbiAgICBQYXVzZTogMHgwNSxcbiAgICBSZXN1bWU6IDB4MDYsXG4gICAgQnVmZmVyaW5nU3RhcnQ6IDB4MDcsXG4gICAgU3RhbGxTdGFydDogMHgwOCxcbiAgICBTdGFsbFN0b3A6IDB4MDksXG4gICAgUmVidWZmZXJpbmdTdGFydDogMHgwYSxcbiAgICBSZWJ1ZmZlcmluZ1N0b3A6IDB4MGIsXG4gICAgU2VlazogMHgwYyxcbiAgICBMYXllclN3aXRjaDogMHgwZCxcbiAgICBBZEJyZWFrU3RhcnQ6IDB4MGUsXG4gICAgQWRCcmVha1N0b3A6IDB4MGYsXG4gICAgTmV0d29ya0F2YWlsYWJsZTogMHgxMCxcbiAgICBOZXR3b3JrTG9zdDogMHgxMSxcbiAgICBNdXRlOiAweDEyLFxuICAgIFVubXV0ZTogMHgxMyxcbiAgICBNdWx0aWNhc3Q6IDB4MTQsXG4gICAgVW5pY2FzdDogMHgxNSxcbiAgICBQcmVjYWNoZUVuZGVkOiAweDE2LFxuXG4gICAgRGF0YVN1bW1hcnk6IDB4OTAsXG4gICAgRW1wdHlTdW1tYXJ5OiAweDkxXG59O1xuXG5leHBvcnQgY29uc3QgVFlQRVNfV0lUSE9VVF9EQVRBID0gWyBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWRpcmVjdGlvbkVuZCwgU2Vzc2lvblRyYWNrZXJFdmVudHMuUGF1c2UsXG4gICAgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVzdW1lLCBTZXNzaW9uVHJhY2tlckV2ZW50cy5CdWZmZXJpbmdTdGFydCwgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdGFydCxcbiAgICBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3AsIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlYnVmZmVyaW5nU3RhcnQsIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlYnVmZmVyaW5nU3RvcCwgU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0YXJ0LFxuICAgIFNlc3Npb25UcmFja2VyRXZlbnRzLk5ldHdvcmtMb3N0LCBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlLCBTZXNzaW9uVHJhY2tlckV2ZW50cy5Vbm11dGUsXG4gICAgU2Vzc2lvblRyYWNrZXJFdmVudHMuTXVsdGljYXN0LCBTZXNzaW9uVHJhY2tlckV2ZW50cy5VbmljYXN0LFxuICAgIFNlc3Npb25UcmFja2VyRXZlbnRzLlByZWNhY2hlRW5kZWRcbl07XG5leHBvcnQgY29uc3QgVFlQRVNfU1RBUlQgPSBbU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnRdO1xuZXhwb3J0IGNvbnN0IFRZUEVTX1dJVEhfQklUUkFURSA9IFtTZXNzaW9uVHJhY2tlckV2ZW50cy5MYXllclN3aXRjaF07XG5leHBvcnQgY29uc3QgVFlQRVNfV0lUSF9CSVRSQVRFX1BPU0lUSU9OID0gW1Nlc3Npb25UcmFja2VyRXZlbnRzLkZpcnN0SW1hZ2VdO1xuZXhwb3J0IGNvbnN0IFRZUEVTX1dJVEhfUE9TSVRJT05TX1NUQVJUX0VORCA9IFtTZXNzaW9uVHJhY2tlckV2ZW50cy5TZWVrXTtcbmV4cG9ydCBjb25zdCBUWVBFU19XSVRIX1NUQVRVU19DT0RFID0gW1Nlc3Npb25UcmFja2VyRXZlbnRzLlN0b3BdO1xuZXhwb3J0IGNvbnN0IFRZUEVTX1dJVEhfUFJPR1JFU1MgPSBbU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0b3BdO1xuZXhwb3J0IGNvbnN0IFRZUEVTX1dJVEhfU1RBVEUgPSBbU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0F2YWlsYWJsZV07XG5cbmNvbnN0IFRBRyA9ICdCcGtTZXNzaW9uVHJhY2tlckV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25UcmFja2VyRXZlbnQge1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGlkXG4gICAgICovXG4gICAgZXZlbnRJZDtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGRhdGVcbiAgICAgKi9cbiAgICBldmVudERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBjdXN0b20gZGF0YVxuICAgICAqL1xuICAgIGV2ZW50RGF0YTtcblxuICAgIC8qKlxuICAgICAqIElzIGEgc3RhcnQvc3RvcCBldmVudFxuICAgICAqL1xuICAgIHN0YXJ0U3RvcEV2ZW50O1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgZXZlbnQgaWRcbiAgICAgKi9cbiAgICBzdGFydEV2ZW50SWQ7XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGV2ZW50IGlkXG4gICAgICovXG4gICAgc3RvcEV2ZW50SWQ7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBpZCB0byBzZWVrXG4gICAgICogSWYgZm91bmQsIHRyYW5zZm9ybSB0aGUgZm91bmQgZXZlbnQgd2l0aCB0aGUgZGVmaW5lZCBzdGFydCBldmVudFxuICAgICAqXG4gICAgICogQnVmZmVyaW5nU3RhcnQgPiBSZWJ1ZmZlcmluZ1N0b3AgPT4gUmVidWZmZXJpbmdTdGFydCA+IFJlYnVmZmVyaW5nU3RvcFxuICAgICAqIFdoZW4gUmVidWZmZXJpbmdTdG9wIGlzIHB1c2hlZCwgaXQgd2lsbCB0cnkgdG8gZmluZCBhIEJ1ZmZlcmluZ1N0YXJ0IGFuZCB0cmFuc2Zvcm0gaXQgdG8gUmVidWZmZXJpbmdTdGFydFxuICAgICAqL1xuICAgIHRyaWdnZXJTdGFydEV2ZW50SWQ7XG5cbiAgICAvKipcbiAgICAgKiBJZiBwcmV2aW91cyBldmVudCBpcyB0aGUgc2FtZSwgcmVtb3ZlIHByZXZpb3VzIGV2ZW50XG4gICAgICovXG4gICAga2VlcExhc3RPbmx5O1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGZpcnN0IGV2ZW50IGZvdW5kIHdpdGggaWRcbiAgICAgKi9cbiAgICBhdHRhY2hFdmVudElkO1xuXG4gICAgLyoqXG4gICAgICogTWF4IGR1cmF0aW9uIGJldHdlZW4gZm91bmQgZXZlbnQgYW5kIGN1cnJlbnQgc3RhcnQgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0O1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBzdGFydCBldmVudCBpZiBmb3VuZFxuICAgICAqL1xuICAgIHN0YXJ0RXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHN0b3AgZXZlbnQgaWYgZm91bmRcbiAgICAgKi9cbiAgICBzdG9wRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGF0dGFjaGVkIGV2ZW50IChzZXQgYXR0YWNoRXZlbnRJZClcbiAgICAgKiBPcHRpb25hbDogYXR0YWNoTWF4RHVyYXRpb25CZWZvcmVTdGFydFxuICAgICAqL1xuICAgIGF0dGFjaGVkRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBjb21wcmVzc2VkXG4gICAgICogRW5jb2RlciBmbGFnXG4gICAgICovXG4gICAgY29tcHJlc3NlZDtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGJ1ZmZlciBkYXRhXG4gICAgICogRW5jb2RlciBidWZmZXJcbiAgICAgKi9cbiAgICBjb21wcmVzc2VkRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy5ldmVudElkID0gdHlwZTtcbiAgICAgICAgdGhpcy5ldmVudERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmV2ZW50RGF0YSA9IHt9O1xuXG4gICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSAwO1xuICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gMDtcbiAgICAgICAgdGhpcy50cmlnZ2VyU3RhcnRFdmVudElkID0gMDtcbiAgICAgICAgdGhpcy5rZWVwTGFzdE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudElkID0gMDtcbiAgICAgICAgdGhpcy5hdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0ID0gLTE7XG4gICAgICAgIHRoaXMuc3RhcnRFdmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcEV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRhY2hlZEV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGREYXRhU2l6ZUluVGltZWxpbmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNvbXByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wcmVzc2VkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLnVwZGF0ZU1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWV0YWRhdGEoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Ob25lO1xuICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZTtcbiAgICAgICAgdGhpcy50cmlnZ2VyU3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZTtcbiAgICAgICAgdGhpcy5rZWVwTGFzdE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZTtcbiAgICAgICAgdGhpcy5hdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0ID0gLTE7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmV2ZW50SWQpIHtcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTm9uZTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdG9wO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGF0YVNpemVJblRpbWVsaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdG9wOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTdG9wRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlN0b3A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVkaXJlY3Rpb25FbmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZTpcbiAgICAgICAgICAgICAgICB0aGlzLmtlZXBMYXN0T25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVkaXJlY3Rpb25FbmQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUGF1c2U6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlc3VtZTpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlBhdXNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZXN1bWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdGFydDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YWxsU3RvcDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3A6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3A7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyU3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuQnVmZmVyaW5nU3RhcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdGFydDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlJlYnVmZmVyaW5nU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlJlYnVmZmVyaW5nU3RvcDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0b3A6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0b3A7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyU3RhcnRFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuQnVmZmVyaW5nU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuU2VlaztcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQgPSBNZXRyaWNzTWFuYWdlci5NQVhfVElNRV9CRVRXRUVOX1NFRUtfQU5EX1JFQlVGRkVSSU5HO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdGFydDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RvcEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudElkID0gU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0b3A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0b3A6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN0b3BFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEV2ZW50SWQgPSBTZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnRJZCA9IFNlc3Npb25UcmFja2VyRXZlbnRzLlNlZWs7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5CdWZmZXJpbmdTdGFydDpcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU2VlazpcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTGF5ZXJTd2l0Y2g6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk5ldHdvcmtBdmFpbGFibGU6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk5ldHdvcmtMb3N0OlxuICAgICAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlOlxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Vbm11dGU6XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk11bHRpY2FzdDpcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuVW5pY2FzdDpcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUHJlY2FjaGVFbmRlZDpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZERhdGFTaXplSW5UaW1lbGluZSA9IHRydWU7IC8vIG5ldyBldmVudCB1bmtub3duIGJ5IG9sZCBia2FcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RXZlbnROYW1lKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZXZlbnRJZCkge1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5Ob25lOlxuICAgICAgICAgICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YXJ0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnU3RhcnQnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdG9wOlxuICAgICAgICAgICAgICAgIHJldHVybiAnU3RvcCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlZGlyZWN0aW9uRW5kOlxuICAgICAgICAgICAgICAgIHJldHVybiAnUmVkaXJlY3Rpb25FbmQnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5GaXJzdEltYWdlOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRmlyc3RJbWFnZSc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlBhdXNlOlxuICAgICAgICAgICAgICAgIHJldHVybiAnUGF1c2UnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZXN1bWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdSZXN1bWUnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5CdWZmZXJpbmdTdGFydDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0J1ZmZlcmluZ1N0YXJ0JztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhbGxTdGFydDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1N0YWxsU3RhcnQnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3A6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTdGFsbFN0b3AnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5SZWJ1ZmZlcmluZ1N0YXJ0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnUmVidWZmZXJpbmdTdGFydCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlJlYnVmZmVyaW5nU3RvcDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1JlYnVmZmVyaW5nU3RvcCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlNlZWs6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTZWVrJztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTGF5ZXJTd2l0Y2g6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdMYXllclN3aXRjaCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdGFydDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FkQnJlYWtTdGFydCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQWRCcmVha1N0b3AnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlOlxuICAgICAgICAgICAgICAgIHJldHVybiAnTmV0d29ya0F2YWlsYWJsZSc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk5ldHdvcmtMb3N0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnTmV0d29ya0xvc3QnO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlOlxuICAgICAgICAgICAgICAgIHJldHVybiAnTXV0ZSc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlVubXV0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1VubXV0ZSc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk11bHRpY2FzdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ011bHRpY2FzdCc7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlVuaWNhc3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdVbmljYXN0JztcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUHJlY2FjaGVFbmRlZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1ByZWNhY2hlRW5kZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlzU3RhcnRFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTdG9wRXZlbnQgJiYgdGhpcy5ldmVudElkID09PSB0aGlzLnN0YXJ0RXZlbnRJZDtcbiAgICB9XG5cbiAgICBpc1N0b3BFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTdG9wRXZlbnQgJiYgdGhpcy5ldmVudElkID09PSB0aGlzLnN0b3BFdmVudElkO1xuICAgIH1cblxuICAgIGFkZEV2ZW50RGF0YShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudERhdGFba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuY29kZSB0aGUgY3VycmVudCBldmVudFxuICAgICAqXG4gICAgICogQHJldHVybnMge0J5dGVCdWZmZXJ9XG4gICAgICovXG4gICAgdG9EYXRhKHByZXZpb3VzRXZlbnREYXRlKSB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5hYnModGhpcy5ldmVudERhdGUgLSBwcmV2aW91c0V2ZW50RGF0ZSkgLyAxMDA7XG4gICAgICAgIGNvbnN0IGVtcHR5RXZlbnRDb3VudCA9IE1hdGhVdGlscy5mbG9vcihkdXJhdGlvbiAvIDY1NTM1KTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb24gPSBkdXJhdGlvbiAlIDY1NTM1O1xuXG4gICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50RGF0YSkubGVuZ3RoIDtcbiAgICAgICAgbGV0IGNhcGFjaXR5ID0gZW1wdHlFdmVudENvdW50ICogMyArIDEgKyAyICsgZGF0YUxlbmd0aCAqIDIgKyAodGhpcy5hZGREYXRhU2l6ZUluVGltZWxpbmUgPyAxIDogMCk7XG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgQnl0ZUJ1ZmZlcihjYXBhY2l0eSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgZW1wdHlFdmVudENvdW50IDsgaSsrKSB7XG4gICAgICAgICAgICBidWZmZXIucHV0KFNlc3Npb25UcmFja2VyRXZlbnRzLk5vbmUpO1xuICAgICAgICAgICAgYnVmZmVyLnB1dCgweGZmKTtcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoMHhmZik7XG4gICAgICAgIH1cblxuICAgICAgICBidWZmZXIucHV0KHRoaXMuZXZlbnRJZCk7XG4gICAgICAgIGJ1ZmZlci5wdXRDaGFyKHJlbWFpbmluZ0R1cmF0aW9uKTsgLy8gYWRkIGR1cmF0aW9uIGluIGRlY2lzZWNvbmRzXG4gICAgICAgIGlmICh0aGlzLmFkZERhdGFTaXplSW5UaW1lbGluZSkgeyAvLyBhZGQgZGF0YSBzaXplIGluIG5iIEJ5dGVzLCB0aHVzIGJrYSBjb3VsZCBpZ25vcmUgdW5rbm93biBldmVudCBvciBkYXRhIGV2ZW50XG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGFMZW5ndGggKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ldmVudElkKSB7XG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya1R5cGUgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsnbmV0d29ya1R5cGUnXSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGVTdGF0ZSA9IHBhcnNlSW50KHRoaXMuZXZlbnREYXRhWydtdXRlU3RhdGUnXSwgMTApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXRDaGFyKG5ldHdvcmtUeXBlKTtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihtdXRlU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdG9wOiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IHBhcnNlSW50KHRoaXMuZXZlbnREYXRhWydzdGF0dXNDb2RlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihzdGF0dXNDb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5GaXJzdEltYWdlOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYml0cmF0ZUZpcnN0SW1hZ2UgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsnYml0cmF0ZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsncG9zaXRpb24nXSwgMTApO1xuXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIoYml0cmF0ZUZpcnN0SW1hZ2UpO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXRDaGFyKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TZWVrOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25TdGFydCA9IHBhcnNlSW50KHRoaXMuZXZlbnREYXRhWydwb3NpdGlvblN0YXJ0J10sIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbkVuZCA9IHBhcnNlSW50KHRoaXMuZXZlbnREYXRhWydwb3NpdGlvbkVuZCddLCAxMCk7XG5cbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihwb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihwb3NpdGlvbkVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTGF5ZXJTd2l0Y2g6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRyYXRlTGF5ZXJTd2l0Y2ggPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsnYml0cmF0ZSddLCAxMCk7XG5cbiAgICAgICAgICAgICAgICBidWZmZXIucHV0Q2hhcihiaXRyYXRlTGF5ZXJTd2l0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkFkQnJlYWtTdG9wOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsncHJvZ3Jlc3MnXSwgMTApO1xuXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dENoYXIocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya1R5cGUgPSBwYXJzZUludCh0aGlzLmV2ZW50RGF0YVsnc3RhdGUnXSwgMTApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXRDaGFyKG5ldHdvcmtUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgZm9ybWF0RGF0ZSh0aW1lc3RhbXApIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlscy5mb3JtYXREYXRlKG5ldyBEYXRlKHRpbWVzdGFtcCkpO1xuICAgIH1cblxuICAgIHByaW50KCkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnICAgfCcpO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICcgICDilJwtLT4gJyArIHRoaXMuZ2V0RXZlbnROYW1lKCkgKyAnIC0+ICcgKyAodGhpcy5jb21wcmVzc2VkID09PSB0cnVlID8gJ2NvbXByZXNzZWQnIDogJ25vdCBjb21wcmVzc2VkJykgKyAnIC0+ICcgKyB0aGlzLmV2ZW50RGF0ZSk7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJyAgIHwgICAgICBkYXRlOiAnICsgdGhpcy5mb3JtYXREYXRlKHRoaXMuZXZlbnREYXRlKSk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuZXZlbnREYXRhKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnICAgfCAgICAgICcgKyBrZXkgKyAnOiAnICsgdGhpcy5ldmVudERhdGFba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0RXZlbnQoKSAmJiB0aGlzLnN0b3BFdmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJyAgIHwgICAgICBzdG9wIGV2ZW50OiAnICsgdGhpcy5zdG9wRXZlbnQuZ2V0RXZlbnROYW1lKCkgKyAnICcgKyB0aGlzLnN0b3BFdmVudC5ldmVudERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wRXZlbnQoKSAmJiB0aGlzLnN0YXJ0RXZlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICcgICB8ICAgICAgc3RhcnQgZXZlbnQ6ICcgKyB0aGlzLnN0YXJ0RXZlbnQuZ2V0RXZlbnROYW1lKCkgKyAnICcgKyB0aGlzLnN0YXJ0RXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF0dGFjaGVkRXZlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICcgICB8ICAgICAgYXR0YWNoZWQgZXZlbnQ6ICcgKyB0aGlzLmF0dGFjaGVkRXZlbnQuZ2V0RXZlbnROYW1lKCkgKyAnICcgKyB0aGlzLmF0dGFjaGVkRXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFdmVudE5hbWUoKSArICcgKCcgKyB0aGlzLmZvcm1hdERhdGUodGhpcy5ldmVudERhdGUpICsgJyknO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNlc3Npb25UcmFja2VyRXZlbnRzIH0gZnJvbSAnLi9TZXNzaW9uVHJhY2tlckV2ZW50JztcbmltcG9ydCB7TWV0cmljc0J1aWxkZXJ9IGZyb20gJy4uL21ldHJpY3MvTWV0cmljcyc7XG5pbXBvcnQgQnl0ZUJ1ZmZlciBmcm9tICcuLi91dGlscy9CeXRlQnVmZmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvblRyYWNrZXJTdW1tYXJ5IHtcbiAgICAvKipcbiAgICAgKiBFdmVudCBzaXplXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgQlVGRkVSX1NJWkUgPSAyODtcblxuICAgIC8qKlxuICAgICAqIFRpbWVsaW5lIHRvIHN1bW1hcml6ZWRcbiAgICAgKi9cbiAgICB0aW1lbGluZTtcblxuICAgIC8qKlxuICAgICAqIE1pbiBpbmRleCBpbiB0aW1lbGluZVxuICAgICAqL1xuICAgIG1pbkluZGV4O1xuXG4gICAgLyoqXG4gICAgICogTGFzdCByZWdpc3RlcmVkIGJpdHJhdGUgYmVmb3JlIG1pbkluZGV4XG4gICAgICovXG4gICAgaW5pdGlhbEJpdHJhdGU7XG5cbiAgICAvKipcbiAgICAgKiBTdW1tYXJ5IG1ldHJpY3NcbiAgICAgKi9cbiAgICBidWlsZGVyO1xuXG4gICAgLyoqXG4gICAgICogU3VtbWFyeSBkdXJhdGlvblxuICAgICAqL1xuICAgIHN1bW1hcnlEdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGR1cmF0aW9uXG4gICAgICovXG4gICAgcGF1c2VEdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlIG5ldHdvcmsgYWN0aXZpdHkgZHVyaW5nIHN1bW1hcnkgdGltZVxuICAgICAqL1xuICAgIG5iTmV0d29ya0Rpc2Nvbm5lY3RlZDtcbiAgICBuYk5ldHdvcmtXaWZpO1xuICAgIG5iTmV0d29ya01vYmlsZTtcbiAgICBuYk5ldHdvcmtFdGhlcm5ldDtcbiAgICBsYXN0TmV0d29ya1N0YXRlO1xuXG4gICAgLyoqXG4gICAgICogTXV0ZSBhY3Rpdml0eSBkdXJpbmcgc3VtbWFyeVxuICAgICAqL1xuICAgIG11dGVEdXJhdGlvbjtcbiAgICBsYXN0TXV0ZVN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IodGltZWxpbmUsIG1pbkluZGV4KSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy5taW5JbmRleCA9IG1pbkluZGV4O1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbEJpdHJhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5idWlsZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnN1bW1hcnlEdXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VEdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5uYk5ldHdvcmtEaXNjb25uZWN0ZWQgPSAwO1xuICAgICAgICB0aGlzLm5iTmV0d29ya1dpZmkgPSAwO1xuICAgICAgICB0aGlzLm5iTmV0d29ya01vYmlsZSA9IDA7XG4gICAgICAgIHRoaXMubmJOZXR3b3JrRXRoZXJuZXQgPSAwO1xuICAgICAgICB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5tdXRlRHVyYXRpb24gPSAwO1xuICAgICAgICB0aGlzLmxhc3RNdXRlU3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWluSW5kZXggOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy50aW1lbGluZS5ldmVudHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTGF5ZXJTd2l0Y2g6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxCaXRyYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbEJpdHJhdGUgPSBwYXJzZUludChldmVudC5ldmVudERhdGFbJ2JpdHJhdGUnXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuRmlyc3RJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbEJpdHJhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsQml0cmF0ZSA9IHBhcnNlSW50KGV2ZW50LmV2ZW50RGF0YVsnYml0cmF0ZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFydDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPSBwYXJzZUludChldmVudC5ldmVudERhdGFbJ25ldHdvcmtUeXBlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0TXV0ZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE11dGVTdGF0ZSA9IHBhcnNlSW50KGV2ZW50LmV2ZW50RGF0YVsnbXV0ZVN0YXRlJ10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLk5ldHdvcmtBdmFpbGFibGU6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TmV0d29ya1N0YXRlID0gcGFyc2VJbnQoZXZlbnQuZXZlbnREYXRhWydzdGF0ZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrTG9zdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTXV0ZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdE11dGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNdXRlU3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuVW5tdXRlOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0TXV0ZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE11dGVTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbEJpdHJhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmluaXRpYWxCaXRyYXRlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxCaXRyYXRlID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0TmV0d29ya1N0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0TXV0ZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE11dGVTdGF0ZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUobWF4SW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMubWluSW5kZXggPj0gdGhpcy50aW1lbGluZS5ldmVudHMubGVuZ3RoIHx8IG1heEluZGV4ID49IHRoaXMudGltZWxpbmUuZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWluRXZlbnQgPSB0aGlzLnRpbWVsaW5lLmV2ZW50c1t0aGlzLm1pbkluZGV4XTtcbiAgICAgICAgY29uc3QgbWF4RXZlbnQgPSB0aGlzLnRpbWVsaW5lLmV2ZW50c1ttYXhJbmRleF07XG4gICAgICAgIGxldCBiaXRyYXRlID0gdGhpcy5pbml0aWFsQml0cmF0ZTtcbiAgICAgICAgbGV0IGxhc3RMYXllclN3aXRjaERhdGUgPSBtaW5FdmVudC5ldmVudERhdGU7XG4gICAgICAgIGxldCBsYXN0TXV0ZURhdGUgPSAodGhpcy5sYXN0TXV0ZVN0YXRlID09PSAxID8gbWluRXZlbnQuZXZlbnREYXRlIDogLTEpOyAvLyBpZiBtdXRlZCBiZWZvcmUgc3VtbWFyeSwgc3RhcnQgdGhlIGR1cmF0aW9uIGZyb20gdGhlIGZpcnN0IGV2ZW50XG4gICAgICAgIGxldCBwYXVzZWQ7XG4gICAgICAgIGxldCBzdGFsbGluZztcbiAgICAgICAgbGV0IHJlYnVmZmVyaW5nO1xuXG4gICAgICAgIC8vIFJlc2V0IG1ldHJpY3NcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IE1ldHJpY3NCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMuc3VtbWFyeUR1cmF0aW9uID0gbWF4RXZlbnQuZXZlbnREYXRlIC0gbWluRXZlbnQuZXZlbnREYXRlO1xuICAgICAgICB0aGlzLnBhdXNlRHVyYXRpb24gPSAwO1xuICAgICAgICB0aGlzLm5iTmV0d29ya0Rpc2Nvbm5lY3RlZCA9IDA7XG4gICAgICAgIHRoaXMubmJOZXR3b3JrV2lmaSA9IDA7XG4gICAgICAgIHRoaXMubmJOZXR3b3JrTW9iaWxlID0gMDtcbiAgICAgICAgdGhpcy5uYk5ldHdvcmtFdGhlcm5ldCA9IDA7XG4gICAgICAgIHRoaXMubXV0ZUR1cmF0aW9uID0gMDtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgbWV0cmljcyBiZXR3ZWVuIG1pbkluZGV4IGFuZCBtYXhJbmRleFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5taW5JbmRleCA7IGkgPD0gbWF4SW5kZXggOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy50aW1lbGluZS5ldmVudHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUGF1c2U6XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCBwYXVzZWQgb3IgZmlyc3QgcGF1c2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdXNlZCA9PT0gZmFsc2UgfHwgcGF1c2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHN0b3BFdmVudCBmb3VuZCAmJiBzdG9wRXZlbnQgYmVmb3JlIG1heEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcEV2ZW50ICE9PSBudWxsICYmIGV2ZW50LnN0b3BFdmVudC5ldmVudERhdGUgPD0gbWF4RXZlbnQuZXZlbnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZUR1cmF0aW9uICs9IGV2ZW50LnN0b3BFdmVudC5ldmVudERhdGUgLSBldmVudC5ldmVudERhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVzdW1lOlxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBmaXJzdCBwYXVzZSBldmVudFxuICAgICAgICAgICAgICAgICAgICBpZiAocGF1c2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2VEdXJhdGlvbiArPSBldmVudC5ldmVudERhdGUgLSBtaW5FdmVudC5ldmVudERhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhbGxpbmcgPT09IGZhbHNlIHx8IHN0YWxsaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wRXZlbnQgIT09IG51bGwgJiYgZXZlbnQuc3RvcEV2ZW50LmV2ZW50RGF0ZSA8PSBtYXhFdmVudC5ldmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkU3RhbGwoZXZlbnQuc3RvcEV2ZW50LmV2ZW50RGF0ZSAtIGV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5TdGFsbFN0b3A6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFsbGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkU3RhbGwoZXZlbnQuZXZlbnREYXRlIC0gbWluRXZlbnQuZXZlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGFsbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdGFydDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYnVmZmVyaW5nID09PSBmYWxzZSB8fCByZWJ1ZmZlcmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcEV2ZW50ICE9PSBudWxsICYmIGV2ZW50LnN0b3BFdmVudC5ldmVudERhdGUgPD0gbWF4RXZlbnQuZXZlbnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFJlYnVmZmVyaW5nKGV2ZW50LnN0b3BFdmVudC5ldmVudERhdGUgLSBldmVudC5ldmVudERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWZmZXJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuUmVidWZmZXJpbmdTdG9wOlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVidWZmZXJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLmFkZFJlYnVmZmVyaW5nKGV2ZW50LmV2ZW50RGF0ZSAtIG1pbkV2ZW50LmV2ZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVidWZmZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLkxheWVyU3dpdGNoOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkTGF5ZXJTd2l0Y2goKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBiaXRyYXRlIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpdHJhdGUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkVGltZVNwZW50UGVyTGF5ZXIoYml0cmF0ZSwgZXZlbnQuZXZlbnREYXRlIC0gbGFzdExheWVyU3dpdGNoRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSBiaXRyYXRlXG4gICAgICAgICAgICAgICAgICAgIGJpdHJhdGUgPSBwYXJzZUludChldmVudC5ldmVudERhdGFbJ2JpdHJhdGUnXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBsYXN0TGF5ZXJTd2l0Y2hEYXRlID0gZXZlbnQuZXZlbnREYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0F2YWlsYWJsZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TmV0d29ya1N0YXRlID0gcGFyc2VJbnQoZXZlbnQuZXZlbnREYXRhWydzdGF0ZSddLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPj0gMTAgJiYgdGhpcy5sYXN0TmV0d29ya1N0YXRlIDwgMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmJOZXR3b3JrV2lmaSsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA+PSAyMCAmJiB0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYk5ldHdvcmtNb2JpbGUrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhc3ROZXR3b3JrU3RhdGUgPj0gMzAgJiYgdGhpcy5sYXN0TmV0d29ya1N0YXRlIDwgNDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmJOZXR3b3JrRXRoZXJuZXQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0xvc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5ldHdvcmtTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmJOZXR3b3JrRGlzY29ubmVjdGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNdXRlU3RhdGUgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNdXRlRGF0ZSA9IGV2ZW50LmV2ZW50RGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlVubXV0ZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TXV0ZVN0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RNdXRlRGF0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXV0ZUR1cmF0aW9uICs9IGV2ZW50LmV2ZW50RGF0ZSAtIGxhc3RNdXRlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNdXRlRGF0ZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBsYXN0IGJpdHJhdGVcbiAgICAgICAgaWYgKGJpdHJhdGUgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkVGltZVNwZW50UGVyTGF5ZXIoYml0cmF0ZSwgbWF4RXZlbnQuZXZlbnREYXRlIC0gbGFzdExheWVyU3dpdGNoRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIG11dGUgZHVyYXRpb25cbiAgICAgICAgaWYgKGxhc3RNdXRlRGF0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubXV0ZUR1cmF0aW9uICs9IG1heEV2ZW50LmV2ZW50RGF0ZSAtIGxhc3RNdXRlRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ1aWxkIG1ldHJpY3NcbiAgICAgICAgdGhpcy5idWlsZGVyLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVpbGRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gQnl0ZUJ1ZmZlci5FTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCeXRlQnVmZmVyKFNlc3Npb25UcmFja2VyU3VtbWFyeS5CVUZGRVJfU0laRSk7XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB0aGlzLmJ1aWxkZXIubWV0cmljcztcblxuICAgICAgICBidWZmZXIucHV0KFNlc3Npb25UcmFja2VyRXZlbnRzLkRhdGFTdW1tYXJ5KVxuICAgICAgICAgICAgLnB1dENoYXIoTWF0aC5yb3VuZCh0aGlzLnN1bW1hcnlEdXJhdGlvbiAvIDEwMDApKSAvLyByb3VuZGVkIHRvIDEgc2VjXG4gICAgICAgICAgICAucHV0KFNlc3Npb25UcmFja2VyU3VtbWFyeS5CVUZGRVJfU0laRSAtIDIgLSAxIC0gMSkgLy8gZG8gbm90IGNvdW50IGlkLCBkdXJhdGlvbiwgYW5kIHNpemUgKHRoZSBjdXJyZW50IGJ5dGUpXG4gICAgICAgICAgICAucHV0Q2hhcih0aGlzLnBhdXNlRHVyYXRpb24gLyAxMDApIC8vIHJvdW5kZWQgdG8gMC4xIHNlY1xuICAgICAgICAgICAgLnB1dChtZXRyaWNzLnN0YWxsc051bWJlcilcbiAgICAgICAgICAgIC5wdXRDaGFyKG1ldHJpY3MudG90YWxTdGFsbHNEdXJhdGlvbiAvIDEwMCkgLy8gcm91bmRlZCB0byAwLjEgc2VjXG4gICAgICAgICAgICAucHV0KG1ldHJpY3MucmVidWZmZXJpbmdzTnVtYmVyKVxuICAgICAgICAgICAgLnB1dENoYXIobWV0cmljcy50b3RhbFJlYnVmZmVyaW5nRHVyYXRpb24gLyAxMDApIC8vIHJvdW5kZWQgdG8gMC4xIHNlY1xuICAgICAgICAgICAgLnB1dChtZXRyaWNzLmxheWVyU3dpdGNoZXNOdW1iZXIpXG4gICAgICAgICAgICAucHV0Q2hhcihtZXRyaWNzLm1pbkJpdHJhdGUpXG4gICAgICAgICAgICAucHV0Q2hhcihtZXRyaWNzLm1heEJpdHJhdGUpXG4gICAgICAgICAgICAucHV0Q2hhcihtZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlKVxuICAgICAgICAgICAgLnB1dCh0aGlzLm5iTmV0d29ya0Rpc2Nvbm5lY3RlZClcbiAgICAgICAgICAgIC5wdXQodGhpcy5uYk5ldHdvcmtXaWZpKVxuICAgICAgICAgICAgLnB1dCh0aGlzLm5iTmV0d29ya01vYmlsZSlcbiAgICAgICAgICAgIC5wdXQodGhpcy5uYk5ldHdvcmtFdGhlcm5ldClcbiAgICAgICAgICAgIC5wdXRDaGFyKHRoaXMubGFzdE5ldHdvcmtTdGF0ZSlcbiAgICAgICAgICAgIC5wdXRDaGFyKE1hdGgucm91bmQodGhpcy5tdXRlRHVyYXRpb24gLyAxMDAwKSlcbiAgICAgICAgICAgIC5wdXQodGhpcy5sYXN0TXV0ZVN0YXRlKTtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5idWlsZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnbm8gZGF0YSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXRyaWNzID0gdGhpcy5idWlsZGVyLm1ldHJpY3M7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bW1hcnlEdXJhdGlvbiArICcsICcgKyB0aGlzLnBhdXNlRHVyYXRpb24gKyAnLCAnICtcbiAgICAgICAgICAgIG1ldHJpY3MubWluQml0cmF0ZSArICcsICcgKyBtZXRyaWNzLm1heEJpdHJhdGUgKyAnLCAnICtcbiAgICAgICAgICAgIG1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlciArICcsICcgKyBtZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlICsgJywgJyArXG4gICAgICAgICAgICBtZXRyaWNzLnN0YWxsc051bWJlciArICcsICcgKyBtZXRyaWNzLnRvdGFsU3RhbGxzRHVyYXRpb24gKyAnLCAnICtcbiAgICAgICAgICAgIG1ldHJpY3MucmVidWZmZXJpbmdzTnVtYmVyICsgJywgJyArIG1ldHJpY3MudG90YWxSZWJ1ZmZlcmluZ0R1cmF0aW9uICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLm5iTmV0d29ya0Rpc2Nvbm5lY3RlZCArICcsICcgK1xuICAgICAgICAgICAgdGhpcy5uYk5ldHdvcmtXaWZpICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLm5iTmV0d29ya01vYmlsZSArICcsICcgK1xuICAgICAgICAgICAgdGhpcy5uYk5ldHdvcmtFdGhlcm5ldCArICcsICcgK1xuICAgICAgICAgICAgdGhpcy5sYXN0TmV0d29ya1N0YXRlICsgJywgJyArXG4gICAgICAgICAgICB0aGlzLm11dGVEdXJhdGlvbiArICcsICcgK1xuICAgICAgICAgICAgdGhpcy5sYXN0TXV0ZVN0YXRlO1xuXG4gICAgICAgIC8qIHJldHVybiAnXFxueyBzdW1tYXJ5RHVyYXRpb246ICcgKyB0aGlzLnN1bW1hcnlEdXJhdGlvbiArICcsIHBhdXNlRHVyYXRpb246ICcgKyB0aGlzLnBhdXNlRHVyYXRpb24gKyAnIH0sIFxcbicgK1xuICAgICAgICAgICAgJ3sgbWluQml0cmF0ZTogJyArIG1ldHJpY3MubWluQml0cmF0ZSArICcsIG1heEJpdHJhdGU6ICcgKyBtZXRyaWNzLm1heEJpdHJhdGUgKyAnIH0sIFxcbicgK1xuICAgICAgICAgICAgJ3sgbGF5ZXJTd2l0Y2hlc051bWJlcjogJyArIG1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlciArICcsIGF2ZXJhZ2VCaXRyYXRlOiAnICsgbWV0cmljcy5hdmVyYWdlQml0cmF0ZSArICcgfSwgXFxuJyArXG4gICAgICAgICAgICAneyBzdGFsbHNOdW1iZXI6ICcgKyBtZXRyaWNzLnN0YWxsc051bWJlciArICcsIHRvdGFsU3RhbGxzRHVyYXRpb246ICcgKyBtZXRyaWNzLnRvdGFsU3RhbGxzRHVyYXRpb24gKyAnIH0sIFxcbicgK1xuICAgICAgICAgICAgJ3sgcmVidWZmZXJpbmdzTnVtYmVyOiAnICsgbWV0cmljcy5yZWJ1ZmZlcmluZ3NOdW1iZXIgKyAnLCB0b3RhbFJlYnVmZmVyaW5nRHVyYXRpb246ICcgKyBtZXRyaWNzLnRvdGFsUmVidWZmZXJpbmdEdXJhdGlvbiArICcgfSc7Ki9cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIFNlc3Npb25UcmFja2VyRXZlbnRzLCBTZXNzaW9uVHJhY2tlckV2ZW50LFxuICAgIFRZUEVTX1NUQVJULCBUWVBFU19XSVRIX0JJVFJBVEUsIFRZUEVTX1dJVEhfQklUUkFURV9QT1NJVElPTixcbiAgICBUWVBFU19XSVRIX1BPU0lUSU9OU19TVEFSVF9FTkQsIFRZUEVTX1dJVEhfUFJPR1JFU1MsIFRZUEVTX1dJVEhfU1RBVFVTX0NPREUsIFRZUEVTX1dJVEhfU1RBVEUsIFRZUEVTX1dJVEhPVVRfREFUQVxufSBmcm9tICcuL1Nlc3Npb25UcmFja2VyRXZlbnQnO1xuaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi4vdXRpbHMvRGF0ZVV0aWxzJztcbmltcG9ydCB7U2Vzc2lvblRyYWNrZXJFbmNvZGVyfSBmcm9tICcuL1Nlc3Npb25UcmFja2VyRW5jb2Rlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtTZXNzaW9uVHJhY2tlclRpbWVsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvblRyYWNrZXJUaW1lbGluZSB7XG5cbiAgICBzZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGltZWxpbmUgc3RhcnQgZGF0ZVxuICAgICAqL1xuICAgIHN0YXJ0RGF0ZTtcblxuICAgIC8qKlxuICAgICAqIFRpbWVsaW5lIHN0b3AgZGF0ZVxuICAgICAqL1xuICAgIHN0b3BEYXRlO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRzIGxpc3RcbiAgICAgKi9cbiAgICBldmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHdoZW4gZmlyc3QgaW1hZ2UgZXZlbnQgaXMgcHVzaGVkIHdpdGggYml0cmF0ZVxuICAgICAqIEJpdHJhdGUgaXMgdXBkYXRlZCB3aGVuIHRoZSBuZXh0IGJpdHJhdGUgZXZlbnQgaXMgcHVzaGVkXG4gICAgICovXG4gICAgZmlyc3RJbWFnZVdpdGhvdXRCaXRyYXRlRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgdGltZWxpbmUgaW50byBiaW5hcnkgZGF0YVxuICAgICAqL1xuICAgIGVuY29kZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnN0b3BEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlV2l0aG91dEJpdHJhdGVFdmVudCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5lbmNvZGVyID0gbmV3IFNlc3Npb25UcmFja2VyRW5jb2Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdXNoRXZlbnQodHlwZSkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1R5cGUodHlwZSwgVFlQRVNfV0lUSE9VVF9EQVRBKSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNyZWF0ZUV2ZW50KHR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmVuY29kZXIub25FdmVudEFkZGVkKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1c2hFdmVudFN0YXJ0KHR5cGUsIG5ldHdvcmtUeXBlLCBtdXRlU3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUeXBlKHR5cGUsIFRZUEVTX1NUQVJUKSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNyZWF0ZUV2ZW50KHR5cGUpO1xuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCduZXR3b3JrVHlwZScsIG5ldHdvcmtUeXBlKTtcbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50RGF0YSgnbXV0ZVN0YXRlJywgbXV0ZVN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50Qml0cmF0ZSh0eXBlLCBiaXRyYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVHlwZSh0eXBlLCBUWVBFU19XSVRIX0JJVFJBVEUpKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY3JlYXRlRXZlbnQodHlwZSk7XG5cbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50RGF0YSgnYml0cmF0ZScsIGJpdHJhdGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdEltYWdlV2l0aG91dEJpdHJhdGVFdmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbWFnZVdpdGhvdXRCaXRyYXRlRXZlbnQuYWRkRXZlbnREYXRhKCdiaXRyYXRlJywgYml0cmF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEltYWdlV2l0aG91dEJpdHJhdGVFdmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50Qml0cmF0ZVBvc2l0aW9uKHR5cGUsIGJpdHJhdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVHlwZSh0eXBlLCBUWVBFU19XSVRIX0JJVFJBVEVfUE9TSVRJT04pKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY3JlYXRlRXZlbnQodHlwZSk7XG5cbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50RGF0YSgnYml0cmF0ZScsIGJpdHJhdGUpO1xuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdwb3NpdGlvbicsIHBvc2l0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFNlc3Npb25UcmFja2VyRXZlbnRzLkZpcnN0SW1hZ2UgJiYgYml0cmF0ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEltYWdlV2l0aG91dEJpdHJhdGVFdmVudCA9IGV2ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVuY29kZXIub25FdmVudEFkZGVkKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1c2hFdmVudFBvc2l0aW9uU3RhcnRFbmQodHlwZSwgcG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUeXBlKHR5cGUsIFRZUEVTX1dJVEhfUE9TSVRJT05TX1NUQVJUX0VORCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudCh0eXBlKTtcblxuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdwb3NpdGlvblN0YXJ0JywgcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgICBldmVudC5hZGRFdmVudERhdGEoJ3Bvc2l0aW9uRW5kJywgcG9zaXRpb25FbmQpO1xuXG4gICAgICAgICAgICB0aGlzLmVuY29kZXIub25FdmVudEFkZGVkKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1c2hFdmVudFN0YXR1c0NvZGUodHlwZSwgc3RhdHVzQ29kZSkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1R5cGUodHlwZSwgVFlQRVNfV0lUSF9TVEFUVVNfQ09ERSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jcmVhdGVFdmVudCh0eXBlKTtcblxuICAgICAgICAgICAgZXZlbnQuYWRkRXZlbnREYXRhKCdzdGF0dXNDb2RlJywgc3RhdHVzQ29kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50UHJvZ3Jlc3ModHlwZSwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUeXBlKHR5cGUsIFRZUEVTX1dJVEhfUFJPR1JFU1MpKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY3JlYXRlRXZlbnQodHlwZSk7XG5cbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50RGF0YSgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVzaEV2ZW50U3RhdGUodHlwZSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUeXBlKHR5cGUsIFRZUEVTX1dJVEhfU1RBVEUpKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY3JlYXRlRXZlbnQodHlwZSk7XG5cbiAgICAgICAgICAgIGV2ZW50LmFkZEV2ZW50RGF0YSgnc3RhdGUnLCBzdGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5vbkV2ZW50QWRkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRXZlbnQodHlwZSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBTZXNzaW9uVHJhY2tlckV2ZW50KHR5cGUpO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIudihUQUcsICdDcmVhdGluZyBldmVudCAnICsgZXZlbnQuZ2V0RXZlbnROYW1lKCkgKyAnLi4uJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIG9sZCBldmVudHMgd2hlbiBrZWVwIGxhc3Qgb25seSBlbmFibGVkXG4gICAgICAgIHRoaXMuYXBwbHlLZWVwTGFzdE9ubHkoZXZlbnQpO1xuXG4gICAgICAgIC8vIEFkZCBldmVudCB0byB0aGUgdGltZWxpbmVcbiAgICAgICAgdGhpcy5ldmVudHMucHVzaChldmVudCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRpbWVsaW5lIHByb3BlcnRpZXMgKHN0YXJ0IGRhdGUsIHN0b3AgZGF0ZS4uLilcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lbGluZVByb3BlcnRpZXMoZXZlbnQpO1xuXG4gICAgICAgIC8vIFJlY29uY2lsaWF0ZSBzdGFydCB3aXRoIHN0b3AgZXZlbnRzXG4gICAgICAgIHRoaXMucmVjb25jaWxpYXRlU3RvcFdpdGhTdGFydEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhbmQgYXR0YWNoIHRoZSBhdHRhY2hlZCBldmVudFxuICAgICAgICAvLyB0aGlzLmF0dGFjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuXG4gICAgY2hlY2tUeXBlKHR5cGUsIHR5cGVzKSB7XG4gICAgICAgIGlmICh0eXBlcy5pbmRleE9mKHR5cGUpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ0NhblxcJ3QgcHVzaCBldmVudCBcXCcnICsgdHlwZSArICdcXCcgdG8gdGltZWxpbmUsIGludmFsaWQgcGFyYW1ldGVycycpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhcHBseUtlZXBMYXN0T25seShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2VlcExhc3RPbmx5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ldmVudHMubGVuZ3RoIC0gMTsgaSA+PSAwIDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZWxpbmVFdmVudCA9IHRoaXMuZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgaWYgdGhlIGV2ZW50IGlzIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVsaW5lRXZlbnQuZXZlbnRJZCA9PT0gZXZlbnQuZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRVcGRhdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuYXR0YWNoRXZlbnRJZCA+IFNlc3Npb25UcmFja2VyRXZlbnRzLk5vbmUpIHtcbiAgICAgICAgICAgIGxldCBtaW5EYXRlID0gLTE7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc3RhcnRFdmVudCAhPT0gbnVsbCAmJiBldmVudC5hdHRhY2hNYXhEdXJhdGlvbkJlZm9yZVN0YXJ0ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG1pbkRhdGUgPSBldmVudC5zdGFydEV2ZW50LmV2ZW50RGF0ZSAtIGV2ZW50LmF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lbGluZUV2ZW50ID0gdGhpcy5ldmVudHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGltZWxpbmVFdmVudC5ldmVudElkID09PSBldmVudC5hdHRhY2hFdmVudElkICYmIChtaW5EYXRlID09PSAtMSB8fCB0aW1lbGluZUV2ZW50LmV2ZW50RGF0ZSA+PSBtaW5EYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5hdHRhY2hlZEV2ZW50ID0gdGltZWxpbmVFdmVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRpbWVsaW5lUHJvcGVydGllcyhldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmV2ZW50SWQpIHtcbiAgICAgICAgICAgIGNhc2UgU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNlc3Npb25UcmFja2VyRXZlbnRzLlN0b3A6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvbmNpbGlhdGVTdG9wV2l0aFN0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmlzU3RvcEV2ZW50KCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lbGluZUV2ZW50ID0gdGhpcy5ldmVudHNbaV07XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgc3RhcnQgZXZlbnQgb2YgXCJldmVudFwiXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVsaW5lRXZlbnQuZXZlbnRJZCA9PT0gZXZlbnQuc3RhcnRFdmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc29jaWF0ZSB0aGUgc3RhcnQgYW5kIHRoZSBzdG9wXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lRXZlbnQuc3RvcEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0RXZlbnQgPSB0aW1lbGluZUV2ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgdHJpZ2dlciBzdGFydCBldmVudCBvZiBcImV2ZW50XCJcbiAgICAgICAgICAgICAgICBpZiAodGltZWxpbmVFdmVudC5ldmVudElkID09PSBldmVudC50cmlnZ2VyU3RhcnRFdmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgc3RhcnQgZXZlbnQgdG8gY29ycmVzcG9uZCB0byB0aGUgc3RvcCBldmVudFxuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZUV2ZW50LmV2ZW50SWQgPSBldmVudC5zdGFydEV2ZW50SWQ7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lRXZlbnQuc3RhcnRTdG9wRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZUV2ZW50LnN0YXJ0RXZlbnRJZCA9IGV2ZW50LnN0YXJ0RXZlbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVFdmVudC5zdG9wRXZlbnRJZCA9IGV2ZW50LnN0b3BFdmVudElkO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBldmVudCBpZCBpbiBlbmNvZGVkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVsaW5lRXZlbnQuY29tcHJlc3NlZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVFdmVudC5jb21wcmVzc2VkRGF0YS5zZXQodGltZWxpbmVFdmVudC5ldmVudElkLCAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmNvZGVyLm9uRXZlbnRVcGRhdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBBc3NvY2lhdGUgdGhlIHN0YXJ0IGFuZCB0aGUgc3RvcFxuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZUV2ZW50LnN0b3BFdmVudCA9IGV2ZW50O1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdGFydEV2ZW50ID0gdGltZWxpbmVFdmVudDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydChuZXR3b3JrVHlwZSwgbXV0ZVN0YXRlKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50U3RhcnQoU2Vzc2lvblRyYWNrZXJFdmVudHMuU3RhcnQsIG5ldHdvcmtUeXBlLCBtdXRlU3RhdGUpO1xuICAgIH1cblxuICAgIG9uUmVkaXJlY3Rpb25FbmQoKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlJlZGlyZWN0aW9uRW5kKTtcbiAgICB9XG5cbiAgICBvblByZWNhY2hlRW5kZWQoKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlByZWNhY2hlRW5kZWQpO1xuICAgIH1cblxuICAgIG9uRmlyc3RJbWFnZShiaXRyYXRlLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50Qml0cmF0ZVBvc2l0aW9uKFNlc3Npb25UcmFja2VyRXZlbnRzLkZpcnN0SW1hZ2UsIGJpdHJhdGUsIHN0YXJ0UG9zaXRpb24pO1xuICAgIH1cblxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50U3RhdHVzQ29kZShTZXNzaW9uVHJhY2tlckV2ZW50cy5TdG9wLCBzdGF0dXNDb2RlKTtcblxuICAgICAgICAvLyB0aGlzLnByaW50KCk7XG4gICAgfVxuXG4gICAgLy8gKioqKiBBUFBTdGF0ZU1hbmFnZXIgZXZlbnRzICoqKipcblxuICAgIG9uRm9yZWdyb3VuZCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uRm9yZWdyb3VuZCBidXQgaWdub3JlZCcpO1xuICAgIH1cblxuICAgIG9uQmFja2dyb3VuZCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uQmFja2dyb3VuZCBidXQgaWdub3JlZCcpO1xuICAgIH1cblxuICAgIG9uTmV0d29ya0F2YWlsYWJsZShuZXR3b3JrVHlwZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLnYoVEFHLCAnUmVjZWl2ZWQgZXZlbnQgb25OZXR3b3JrQXZhaWxhYmxlIHR5cGU6JyArIG5ldHdvcmtUeXBlKTtcbiAgICAgICAgdGhpcy5wdXNoRXZlbnRTdGF0ZShTZXNzaW9uVHJhY2tlckV2ZW50cy5OZXR3b3JrQXZhaWxhYmxlLCBuZXR3b3JrVHlwZSk7XG4gICAgfVxuXG4gICAgb25OZXR3b3JrTG9zdCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uTmV0d29ya0xvc3QnKTtcbiAgICAgICAgdGhpcy5wdXNoRXZlbnQoU2Vzc2lvblRyYWNrZXJFdmVudHMuTmV0d29ya0xvc3QpO1xuICAgIH1cblxuICAgIG9uTXV0ZSgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uTXV0ZScpO1xuICAgICAgICB0aGlzLnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5NdXRlKTtcbiAgICB9XG5cbiAgICBvblVubXV0ZSgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JlY2VpdmVkIGV2ZW50IG9uVW5tdXRlJyk7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlVubXV0ZSk7XG4gICAgfVxuXG4gICAgb25NdWx0aWNhc3RVc2VkKCkge1xuICAgICAgICB0aGlzLnB1c2hFdmVudChTZXNzaW9uVHJhY2tlckV2ZW50cy5NdWx0aWNhc3QpO1xuICAgIH1cblxuICAgIG9uVW5pY2FzdFVzZWQoKSB7XG4gICAgICAgIHRoaXMucHVzaEV2ZW50KFNlc3Npb25UcmFja2VyRXZlbnRzLlVuaWNhc3QpO1xuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuY29kZXIucHJvY2VzcygpO1xuICAgIH1cblxuICAgIGZvcm1hdERhdGUodGltZXN0YW1wKSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aW1lc3RhbXApKTtcbiAgICB9XG5cbiAgICBwcmludCgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci52KFRBRywgJ1RpbWVsaW5lIChzdGFydERhdGU6JyArIHRoaXMuZm9ybWF0RGF0ZSh0aGlzLnN0YXJ0RGF0ZSkgKyAnLCBzdG9wRGF0ZTonICsgdGhpcy5mb3JtYXREYXRlKHRoaXMuc3RvcERhdGUpICsgJyknKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbaV0ucHJpbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZlbnRzW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcsICcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi9NYXRoVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCeXRlQnVmZmVyIHtcbiAgICBzdGF0aWMgRU1QVFkgPSBuZXcgdGhpcygwKTtcblxuICAgIGluZGV4O1xuICAgIGJ1ZmZlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhcGFjaXR5KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGNhcGFjaXR5KTtcbiAgICB9XG5cbiAgICBwdXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1dENoYXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9ICh2YWx1ZSAmIDB4ZmYwMCkgPj4gODtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9ICh2YWx1ZSAmIDB4MDBmZik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyogcHV0VGltZXN0YW1wKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuaW5kZXgrK10gPSAodmFsdWUgJiAweGZmMDAwMCkgPj4gMTY7XG4gICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuaW5kZXgrK10gPSAodmFsdWUgJiAweDAwZmYwMCkgPj4gODtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5pbmRleCsrXSA9ICh2YWx1ZSAmIDB4MDAwMGZmKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9Ki9cblxuICAgIC8qIHB1dEFycmF5KGFycmF5KSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPj0gdGhpcy5pbmRleCArIGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0KGFycmF5LCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSovXG5cbiAgICBwdXRCeXRlQnVmZmVyKGJ5dGVCdWZmZXIsIGxlbmd0aCA9IGJ5dGVCdWZmZXIuYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBieXRlQnVmZmVyLmJ1ZmZlcjtcblxuICAgICAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoID49IHRoaXMuaW5kZXggKyBsZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnNldChidWZmZXIsIHRoaXMuaW5kZXgpOyAvLyBubyBuZWVkIHRvIHVzZSBidWZmZXIuc3ViYXJyYXkoMCwgbGVuZ3RoKSBiZWNhdXNlIGluZGV4IGlzIGluY3JlbWVudGVkIGJ5IGxlbmd0aFxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKiBpbmNyZW1lbnQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbaW5kZXhdKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSovXG5cbiAgICBzZXQodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qIHNldENoYXIodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4XSA9ICh2YWx1ZSAmIDB4ZmYwMCkgPj4gODtcbiAgICAgICAgdGhpcy5idWZmZXJbaW5kZXggKyAxXSA9ICh2YWx1ZSAmIDB4MDBmZik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSovXG5cbiAgICAvKiBzZXRUaW1lc3RhbXAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW2luZGV4XSA9ICh2YWx1ZSAmIDB4ZmYwMDAwKSA+PiAxNjtcbiAgICAgICAgdGhpcy5idWZmZXJbaW5kZXggKyAxXSA9ICh2YWx1ZSAmIDB4MDBmZjAwKSA+PiA4O1xuICAgICAgICB0aGlzLmJ1ZmZlcltpbmRleCArIDJdID0gKHZhbHVlICYgMHgwMDAwZmYpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0qL1xuXG4gICAgLyogc2hpZnQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5idWZmZXIuY29weVdpdGhpbihpbmRleCArIDEsIGluZGV4KTtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0qL1xuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cblxuICAgIGJhc2U2NCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhVdGlscy5idWZmZXJUb0Jhc2U2NCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiBiYXNlNjRPbGQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoVXRpbHMuYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVmZmVyKSk7XG4gICAgfSAqL1xuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgICB9XG5cbiAgICBjYXBhY2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZW1haW5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcGFjaXR5KCkgLSB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gTWF0aFV0aWxzLmJ1ZmZlclRvU3RyaW5nKHRoaXMuYnVmZmVyLCB0aGlzLmluZGV4KSArICcobGVuZ3RoOicgKyB0aGlzLmxlbmd0aCgpICsgJyknO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFV0aWxzIHtcbiAgICAvKiBzdGF0aWMgZ2V0TWV0aG9kcyhvYmopIHtcbiAgICAgICAgLy8gcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZmlsdGVyKGtleSA9PiB0eXBlb2Ygb2JqW2tleV0gPT09ICdmdW5jdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICAgICAgICBsZXQgbWV0aG9kcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoWydjYWxsZXInLCAnY2FsbGVlJywgJ2FyZ3VtZW50cyddLmluZGV4T2YocHJvcGVydGllc1tpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBvYmpbcHJvcGVydGllc1tpXV07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChwcm9wZXJ0aWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICB9Ki9cblxuICAgIHN0YXRpYyBoYXNNZXRob2RzKG9iamVjdCwgbWV0aG9kcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W25hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyogc3RhdGljIGhhc1R5cGVPck51bGwob2JqZWN0LCB0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSB0eXBlIHx8IG9iamVjdCA9PT0gbnVsbDtcbiAgICB9Ki9cblxuICAgIHN0YXRpYyBjb3VudChvYmplY3QsIGNvbmRpdGlvbikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKHByb3BlcnR5LCB2YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvcmVFbmdpbmUiLCJQbGF5ZXJNYW5hZ2VySGFuZGxlciIsIkNhY2hlSGFuZGxlciIsIlBsYXllckV2ZW50TGlzdGVuZXIiLCJHZW5lcmljUGxheWVyQXBpIiwiYW5hbHl0aWNzTW9kdWxlIiwiZ2V0SW5zdGFuY2UiLCJyZWdpc3RlclBsYXllckFkYXB0ZXJzIiwiR2VuZXJpY1BsYXllckFkYXB0ZXIiLCJfYWRhcHRlcnMiLCJXZWFrTWFwIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImxvYWRQbGF5ZXJBZGFwdGVycyIsIl9Db3JlRW5naW5lJHZvcGxheWVyTSIsIl9Db3JlRW5naW5lJHRoZW9wbGF5ZSIsIl9Db3JlRW5naW5lJHNoYWthTW9kdSIsIl9Db3JlRW5naW5lJGRhc2hqc01vZCIsIl9Db3JlRW5naW5lJGh0bWw1TW9kdSIsIl9Db3JlRW5naW5lJGF2cGxheU1vZCIsIl9Db3JlRW5naW5lJGRpdzM4N01vZCIsIl9Db3JlRW5naW5lJGhiYnR2MU1vZCIsIl9Db3JlRW5naW5lJGthbHR1cmFNbyIsIl9Db3JlRW5naW5lJGNvbm5lY3RwbCIsIl9Db3JlRW5naW5lJHJ4cGxheWVyTSIsIl9Db3JlRW5naW5lJHZpZGVvanNNbyIsIl9Db3JlRW5naW5lJGhsc2pzTW9kdSIsIl9Db3JlRW5naW5lJGJpdG1vdmluTSIsIl9Db3JlRW5naW5lJHJlYWN0bmF0aSIsIl9Db3JlRW5naW5lJHJlYWN0bmF0aTIiLCJfQ29yZUVuZ2luZSRyZWFjdG5hdGkzIiwiX0NvcmVFbmdpbmUkY2hyb21lY2FzIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiYWRkQWRhcHRlciIsInZvcGxheWVyTW9kdWxlIiwiVk9QbGF5ZXJBZGFwdGVyIiwidGhlb3BsYXllck1vZHVsZSIsIlRIRU9QbGF5ZXJBZGFwdGVyIiwic2hha2FNb2R1bGUiLCJTaGFrYVBsYXllckFkYXB0ZXIiLCJkYXNoanNNb2R1bGUiLCJEYXNoSnNQbGF5ZXJBZGFwdGVyIiwiaHRtbDVNb2R1bGUiLCJIVE1MNVBsYXllckFkYXB0ZXIiLCJhdnBsYXlNb2R1bGUiLCJBVlBsYXlBZGFwdGVyIiwiZGl3Mzg3TW9kdWxlIiwiU2FnZW1jb21ESVczODdBZGFwdGVyIiwiaGJidHYxTW9kdWxlIiwiSGJiVFYxUGxheWVyQWRhcHRlciIsImthbHR1cmFNb2R1bGUiLCJLYWx0dXJhUGxheWVyQWRhcHRlciIsImNvbm5lY3RwbGF5ZXJNb2R1bGUiLCJDb25uZWN0UGxheWVyQWRhcHRlciIsInJ4cGxheWVyTW9kdWxlIiwiUnhQbGF5ZXJBZGFwdGVyIiwidmlkZW9qc01vZHVsZSIsIlZpZGVvSnNQbGF5ZXJBZGFwdGVyIiwiaGxzanNNb2R1bGUiLCJIbHNKc1BsYXllckFkYXB0ZXIiLCJiaXRtb3Zpbk1vZHVsZSIsIkJpdG1vdmluUGxheWVyQWRhcHRlciIsInJlYWN0bmF0aXZlY29ubmVjdHBsYXllck1vZHVsZSIsIlJlYWN0TmF0aXZlQ29ubmVjdFBsYXllckFkYXB0ZXIiLCJyZWFjdG5hdGl2ZXRoZW9wbGF5ZXJNb2R1bGUiLCJSZWFjdE5hdGl2ZVRIRU9wbGF5ZXJBZGFwdGVyIiwicmVhY3RuYXRpdmViaXRtb3Zpbk1vZHVsZSIsIlJlYWN0TmF0aXZlQml0bW92aW5QbGF5ZXJBZGFwdGVyIiwiY2hyb21lY2FzdE1vZHVsZSIsIkNocm9tZWNhc3RQbGF5ZXJBZGFwdGVyIiwibmFtZSIsImFkYXB0ZXIiLCJ1bmRlZmluZWQiLCJhdHRhY2hQbGF5ZXIiLCJwbGF5ZXIiLCJsaXN0ZW5lciIsImNoZWNrUGxheWVyIiwiZGVmYXVsdCIsIkxvZ2dlck1hbmFnZXIiLCJUQUciLCJQUkVGSVgiLCJfdGhpcyIsIl9kZWZpbmVQcm9wZXJ0eSIsImQiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yYWdlIiwia2V5cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZmlsdGVyIiwic3RhcnRzV2l0aCIsIm1hcCIsImdldEl0ZW0iLCJmb3JFYWNoIiwiY2FjaGUiLCJzZXQiLCJzZXRUaW1lb3V0IiwiX2xvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXQiLCJrZXlJbmNsdWRlc1ByZWZpeCIsImFyZ3VtZW50cyIsIml0ZW0iLCJkZWxldGUiLCJfbG9jYWxTdG9yYWdlMiIsInJlbW92ZUl0ZW0iLCJPYmplY3QiLCJyZXBsYWNlIiwiTWF0aFV0aWxzIiwiU21hcnRMaWIiLCJBbmFseXRpY3NSZXF1ZXN0TWFuYWdlciIsIkJyb2FkcGVha0NETktlZXBhbGl2ZU1hbmFnZXIiLCJLZWVwQWxpdmVNYW5hZ2VyIiwiSm9iTWFuYWdlciIsIkFic3RyYWN0Q2FjaGVIYW5kbGVyIiwiQ2FjaGVNYW5hZ2VyIiwiY2FjaGVIYW5kbGVyIiwiaW5pdCIsImF0dGFjaEluc3RhbmNlIiwic21hcnRMaWIiLCJnZXRDYWNoZURhdGEiLCJzZW5kaW5nIiwic3RvcmUiLCJkYXRhIiwiYmFzZTY0VG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJlIiwibWVzc2FnZSIsInN0cmluZ1RvQmFzZTY0Iiwic3RyaW5naWZ5IiwidXBkYXRlIiwic3RvcmVTZXNzaW9uUmVwb3J0IiwiYWRkcmVzcyIsInJlcG9ydCIsImNsZWFuIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJpZCIsInJhbmRvbUludEZyb21JbnRlcnZhbCIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwiY2xlYW5DYWNoZSIsImRlbGV0ZVNlc3Npb25SZXBvcnQiLCJzdG9yZUtlZXBhbGl2ZVJlcG9ydCIsImRlbGV0ZUtlZXBhbGl2ZVJlcG9ydCIsInNlc3Npb25JZCIsIl90aGlzMiIsIl90aGlzMyIsIl9TbWFydExpYiRhbmFseXRpY3NNbyIsImRlbGF5IiwiTWF0aCIsInJvdW5kIiwiZW5kU2Vzc2lvbkNhY2hlIiwiZ2V0UGFyYW1ldGVycyIsInRoZW4iLCJzZW50IiwiY2xlYW5FeHBpcmVkRGF0YSIsIl90aGlzNCIsIkNBQ0hFX0RVUkFUSU9OIiwic29ydCIsImEiLCJiIiwiX3RoaXM1Iiwia2VlcGFsaXZlUmVwb3J0cyIsImFjdGl2ZVNlc3Npb25JZHMiLCJzZXNzaW9uTWFuYWdlciIsInNlc3Npb25zIiwic2Vzc2lvbiIsIl9zZXNzaW9uJGhhbmRsZXIiLCJoYW5kbGVyIiwic2Vzc2lvblJlcG9ydCIsImluZGV4T2YiLCJ0aW1lb3V0IiwiYW5hbHl0aWNzQWRkcmVzc2VzIiwic3BsaXQiLCJhbmFseXRpY3NBZGRyZXNzIiwiTk9DQUNIRV9QUkVGSVgiLCJidWlsZEFuYWx5dGljc0FkZHJlc3MiLCJzZXNzaW9uUmVwb3J0cyIsIkNBQ0hFX0xJTUlUIiwiX3RoaXM2IiwiYXN5bmNEZWxheSIsInJlbGVhc2UiLCJfaW5zdGFuY2UiLCJfIiwiQ2FjaGVLZWVwYWxpdmVNYW5hZ2VyIiwiX0tlZXBBbGl2ZU1hbmFnZXIiLCJfdGhpczciLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwic3RhcnQiLCJfc3VwZXJQcm9wR2V0IiwiY2FsbGJhY2siLCJwYXJhbWV0ZXJzIiwibmV4dCIsInN0b3AiLCJfU21hcnRMaWIkYW5hbHl0aWNzTW8yIiwidG9FbmRTZXNzaW9uSlNPTiIsIl9TbWFydExpYiRhbmFseXRpY3NNbzMiLCJCcm9hZHBlYWtDRE5DYWNoZUtlZXBhbGl2ZU1hbmFnZXIiLCJfQnJvYWRwZWFrQ0ROS2VlcGFsaXYiLCJfdGhpczgiLCJjYWNoZUtlZXBhbGl2ZU1hbmFnZXIiLCJQbGF5ZXJNYW5hZ2VyIiwiUGxheWVyQWRhcHRlciIsIlNlc3Npb25UcmFja2VyVGltZWxpbmUiLCJTZXNzaW9uVHJhY2tlckV2ZW50IiwiU2Vzc2lvblRyYWNrZXJFdmVudHMiLCJNZXRyaWNzIiwiTWV0cmljc01hbmFnZXIiLCJBbmFseXRpY3NTZXNzaW9uIiwibWV0cmljcyIsInJlZGlyZWN0aW9uVGltZSIsInN0YXJ0dXBUaW1lIiwiY29tcGxldGlvbiIsInBsYXliYWNrVHlwZSIsInBsYXliYWNrRHVyYXRpb24iLCJzZXNzaW9uRHVyYXRpb24iLCJjb250ZW50RHVyYXRpb24iLCJzdGFsbHNOdW1iZXIiLCJtYXhTdGFsbER1cmF0aW9uIiwidG90YWxTdGFsbHNEdXJhdGlvbiIsInJlYnVmZmVyaW5nc051bWJlciIsIm1heFJlYnVmZmVyaW5nRHVyYXRpb24iLCJ0b3RhbFJlYnVmZmVyaW5nRHVyYXRpb24iLCJtaW5CaXRyYXRlIiwibWF4Qml0cmF0ZSIsImF2ZXJhZ2VCaXRyYXRlIiwibGF5ZXJTd2l0Y2hlc051bWJlciIsInRpbWVTcGVudFBlckxheWVyIiwicHJlU3RhcnR1cFRpbWUiLCJNZXRyaWNzQnVpbGRlciIsInJlc2V0Iiwic2V0UmVkaXJlY3Rpb25UaW1lIiwic2V0U3RhcnR1cFRpbWUiLCJzZXRTZXNzaW9uRHVyYXRpb24iLCJzZXRDb250ZW50RHVyYXRpb24iLCJzZXRQbGF5YmFja1R5cGUiLCJzZXRGaXJzdExheWVyIiwiYml0cmF0ZSIsInNldFByZVN0YXJ0dXBUaW1lIiwiYWRkVGltZVNwZW50UGVyTGF5ZXIiLCJkdXJhdGlvbiIsInRpbWVTcGVudE9uTGF5ZXIiLCJhZGRMYXllclN3aXRjaCIsImFkZFBsYXliYWNrRHVyYXRpb24iLCJhZGRXYXRjaGluZ1JhbmdlIiwiZW5kIiwidiIsIndhdGNoaW5nUmFuZ2VzIiwiYWRkU3RhbGwiLCJhZGRSZWJ1ZmZlcmluZyIsImNsb25lIiwiYnVpbGRlciIsImNvbXB1dGVDb21wbGV0aW9uIiwiUExBWUJBQ0tfVFlQRV9MSVZFIiwicmFuZ2VzIiwiaW50ZXJ2YWxzIiwic2xpY2UiLCJmbG9vciIsInN0YWNrIiwidG9wIiwic3RhcnRWYWx1ZSIsImVuZFZhbHVlIiwicGFyc2VJbnQiLCJwb3AiLCJidWlsZCIsImxheWVyUGVyRHVyYXRpb24iLCJ0b3RhbER1cmF0aW9uIiwiRGF0ZVV0aWxzIiwicGxheWVyQWRhcHRlciIsInRpbWVsaW5lIiwic3RhcnRlZCIsInBsYXlpbmciLCJidWZmZXJpbmciLCJzZWVraW5nIiwicmVkaXJlY3Rpb25TdGFydERhdGUiLCJwbGF5aW5nU3RhcnREYXRlIiwiYnVmZmVyaW5nU3RhcnREYXRlIiwibGFzdExheWVyU3dpdGNoRGF0ZSIsImxhc3RTZWVrRGF0ZSIsInBsYXlPbk5leHRCdWZmZXJpbmdFbmQiLCJzdGFydFBvc2l0aW9uIiwib25TdGFydCIsIm9uUmVkaXJlY3Rpb25FbmQiLCJvblByZWNhY2hlRW5kZWQiLCJvbkZpcnN0SW1hZ2UiLCJmb3JtYXRUaW1lIiwiZ2V0RHVyYXRpb24iLCJQTEFZQkFDS19UWVBFX1ZPRCIsIm9uTGF5ZXJTd2l0Y2giLCJfdGhpcyR0aW1lbGluZSIsInB1c2hFdmVudEJpdHJhdGUiLCJMYXllclN3aXRjaCIsIm9uUGF1c2UiLCJfdGhpcyR0aW1lbGluZTIiLCJwdXNoRXZlbnQiLCJQYXVzZSIsImdldFBvc2l0aW9uIiwib25SZXN1bWUiLCJfdGhpcyR0aW1lbGluZTMiLCJSZXN1bWUiLCJvbkJ1ZmZlcmluZ1N0YXJ0IiwiX3RoaXMkdGltZWxpbmU0IiwiQnVmZmVyaW5nU3RhcnQiLCJjdXJyZW50RGF0ZSIsIk1BWF9USU1FX0JFVFdFRU5fU0VFS19BTkRfUkVCVUZGRVJJTkciLCJvbkJ1ZmZlcmluZ0VuZCIsImlzUGxheWluZyIsIm5vdGlmeVJlYnVmZmVyaW5nRW5kIiwibm90aWZ5U3RhbGxFbmQiLCJvblN0YWxsRW5kIiwiX3RoaXMkdGltZWxpbmU1IiwiYnVmZmVyaW5nRHVyYXRpb24iLCJTdGFsbFN0b3AiLCJvblJlYnVmZmVyaW5nRW5kIiwiX3RoaXMkdGltZWxpbmU2IiwiUmVidWZmZXJpbmdTdG9wIiwib25TZWVrIiwiX3RoaXMkdGltZWxpbmU3IiwicHVzaEV2ZW50UG9zaXRpb25TdGFydEVuZCIsIlNlZWsiLCJvblN0b3AiLCJzdGF0dXNDb2RlIiwib25TdGFydFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQiLCJvbktlZXBhbGl2ZVNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQiLCJwcmVTdGFydHVwVGltZVN0cmluZyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJpc05hTiIsIm9uRW5kU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZCIsIk9iamVjdFV0aWxzIiwiX1BsYXllckFkYXB0ZXIiLCJnZXROYW1lIiwiZ2V0UGxheWVyTmFtZSIsImdldE9TTmFtZSIsImdldE9TVmVyc2lvbiIsImdldERldmljZVZlcnNpb24iLCJnZXREZXZpY2VUeXBlIiwiZ2V0Qml0cmF0ZSIsImdldEN1cnJlbnRCaXRyYXRlIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZ2V0VG90YWxEdXJhdGlvbiIsImdldENhcGFiaWxpdGllcyIsImluaXREaXZlcnNpdHlTZXNzaW9uIiwib3B0aW9ucyIsImRldGFjaFBsYXllciIsImhhc01ldGhvZHMiLCJub3RpZnlQcmVjYWNoZUVuZGVkIiwibm90aWZ5Rmlyc3RJbWFnZSIsIm5vdGlmeVBhdXNlIiwibm90aWZ5UmVzdW1lIiwibm90aWZ5TGF5ZXJTd2l0Y2giLCJub3RpZnlTdGFsbFN0YXJ0Iiwibm90aWZ5U2VlayIsInNldFBsYXllckVycm9yQ29kZSIsInBsYXllckVycm9yQ29kZSIsIkFwcFN0YXRlTWFuYWdlciIsIndlYk9TIiwiZGV2aWNlSW5mbyIsImluZm8iLCJ3ZWJPU1ZlcnNpb24iLCJzZGtWZXJzaW9uIiwib3NOYW1lIiwib3NWZXJzaW9uIiwiZGV2aWNlVHlwZSIsImdldFZvbHVtZSIsImNoZWNrUGxheWJhY2tTdGF0ZSIsImluaXRTZXNzaW9uUGxheWVyT2JqZWN0cyIsInJlbGVhc2VTZXNzaW9uUGxheWVyT2JqZWN0cyIsImluaXREaXZlcnNpdHlQbHVnaW4iLCJzZXREaXZlcnNpdHlNYW5pZmVzdCIsIm1hbmlmZXN0IiwicmVsZWFzZURpdmVyc2l0eVNlc3Npb24iLCJmaWxsU2Vzc2lvblJlcG9ydCIsInBsYXllck5hbWUiLCJwbGF5ZXJWZXJzaW9uIiwibm90aWZ5TG9hZGluZyIsIm5vdGlmeUJ1ZmZlcmluZ1N0YXJ0Iiwibm90aWZ5QnVmZmVyaW5nRW5kIiwibm90aWZ5Q2xvc2UiLCJicm9hZHBlYWtTdGF0dXNDb2RlIiwibm90aWZ5Vm9sdW1lQ2hhbmdlZCIsInZvbHVtZSIsIm5vdGlmeVBsYXllckVycm9yIiwiYXR0YWNoU2Vzc2lvbiIsImRldGFjaFNlc3Npb24iLCJzZXRTdGF0dXNDb2RlIiwiU3RyaW5nIiwic2V0Q3VzdG9tUGFyYW1ldGVyIiwic3RyZWFtaW5nU2Vzc2lvbiIsImFkZFBsYXllckFkYXB0ZXIiLCJwbGF5ZXJBZGFwdGVycyIsInJlbW92ZVBsYXllckFkYXB0ZXIiLCJpbmRleCIsInNwbGljZSIsImlzU3RhcnRlZCIsImFkYXB0ZXJzIiwibWV0cmljc01hbmFnZXIiLCJpc0J1ZmZlcmluZyIsIm9uU2Vzc2lvblN0YXJ0Iiwib25TZXNzaW9uUGF1c2UiLCJvblNlc3Npb25SZXN1bWUiLCJvblN0YWxsU3RhcnQiLCJBYnN0cmFjdFBsYXllck1hbmFnZXJIYW5kbGVyIiwiX3BsYXllck1hbmFnZXJIYW5kbGVyIiwiX3BsYXllckFkYXB0ZXJzIiwiX3BsYXllckFkYXB0ZXIiLCJwbGF5ZXJNYW5hZ2VySGFuZGxlciIsInNldFBsYXllckFkYXB0ZXIiLCJnZXRBZGFwdGVycyIsImdldFBsYXllckFkYXB0ZXIiLCJ0cmltIiwiZW5kc1dpdGgiLCJNRVRSSUNTX1JFQ0VJVkVSX1BBVEgiLCJlbmRTZXNzaW9uIiwicHJvbWlzZXMiLCJub0NhY2hlIiwic3Vic3RyaW5nIiwicHJvbWlzZSIsInBvc3RTZXNzaW9uIiwicmVzdWx0IiwiaHR0cFN0YXR1cyIsIlByb21pc2UiLCJhbGwiLCJ3IiwicmVzb2x2ZSIsInNlc3Npb25SZXBvcnRKc29uIiwidXJsIiwiYm9keSIsInJlamVjdCIsImhlYWRlcnMiLCJ1c2VyQWdlbnQiLCJlbmNvZGVkQm9keSIsImFzeW5jUG9zdCIsIlBPU1RfU0VTU0lPTl9SRVFVRVNUX1RJTUVPVVQiLCJTdHJlYW1pbmdTZXNzaW9uIiwiX1N0cmVhbWluZ1Nlc3Npb24iLCJnZXRVUkwiLCJnZXRRdWVyeSIsInN0YXJ0U3RyZWFtaW5nU2Vzc2lvbiIsInN0b3BBbmFseXRpY3NTZXNzaW9uIiwic3RvcFN0cmVhbWluZ1Nlc3Npb24iLCJjcmVhdGVTZXNzaW9uSGFuZGxlciIsImluaXRQbGF5ZXJBZGFwdGVyIiwiYWRkTGlzdGVuZXIiLCJvbkxvYWRpbmciLCJhZFNlc3Npb24iLCJjYXRjaCIsInVwZGF0ZVNlc3Npb25SZXBvcnRWYWx1ZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJvbkNsb3NlIiwiU2Vzc2lvblRyYWNrZXJTdW1tYXJ5IiwiQnl0ZUJ1ZmZlciIsIlNlc3Npb25UcmFja2VyRW5jb2RlciIsIm1heEJ1ZmZlclNpemUiLCJERUZBVUxUX0JVRkZFUl9TSVpFIiwibWF4RW5kRXZlbnRzRHVyYXRpb24iLCJERUZBVUxUX0VORF9FVkVOVFNfRFVSQVRJT04iLCJtYXhFbmRFdmVudHNOdW1iZXIiLCJERUZBVUxUX0VORF9FVkVOVFNfTlVNQkVSIiwiZXZlbnRzIiwidW5jb21wcmVzc2VkRGF0YSIsInVuY29tcHJlc3NlZERhdGFGdWxsIiwiY29tcHJlc3NlZFN0YXJ0RGF0YSIsIm1pblN1bW1hcnlJbmRleCIsIm1heEVuZEJ1ZmZlclNpemUiLCJzdW1tYXJ5Iiwib25FdmVudEFkZGVkIiwiZXZlbnQiLCJwcmV2aW91c0V2ZW50IiwiY29tcHJlc3NlZERhdGEiLCJ0b0RhdGEiLCJldmVudERhdGUiLCJjb21wcmVzc2VkIiwiY2FwYWNpdHkiLCJyZW1haW5pbmciLCJwdXRCeXRlQnVmZmVyIiwib25FdmVudFVwZGF0ZWQiLCJwcm9jZXNzIiwib3V0cHV0TG9nIiwiZW5kQnVmZmVycyIsInNpemUiLCJtYXhTdW1tYXJ5SW5kZXgiLCJidWZmZXIiLCJsYXN0RXZlbnQiLCJtYXhTaXplIiwiQlVGRkVSX1NJWkUiLCJwdXQiLCJFbXB0eVN1bW1hcnkiLCJzdW1tYXJ5QnVmZmVyIiwidG9TdHJpbmciLCJleHRlbmQiLCJOb25lIiwiU3RhcnQiLCJTdG9wIiwiUmVkaXJlY3Rpb25FbmQiLCJGaXJzdEltYWdlIiwiU3RhbGxTdGFydCIsIlJlYnVmZmVyaW5nU3RhcnQiLCJBZEJyZWFrU3RhcnQiLCJBZEJyZWFrU3RvcCIsIk5ldHdvcmtBdmFpbGFibGUiLCJOZXR3b3JrTG9zdCIsIk11dGUiLCJVbm11dGUiLCJNdWx0aWNhc3QiLCJVbmljYXN0IiwiUHJlY2FjaGVFbmRlZCIsIkRhdGFTdW1tYXJ5IiwiVFlQRVNfV0lUSE9VVF9EQVRBIiwiVFlQRVNfU1RBUlQiLCJUWVBFU19XSVRIX0JJVFJBVEUiLCJUWVBFU19XSVRIX0JJVFJBVEVfUE9TSVRJT04iLCJUWVBFU19XSVRIX1BPU0lUSU9OU19TVEFSVF9FTkQiLCJUWVBFU19XSVRIX1NUQVRVU19DT0RFIiwiVFlQRVNfV0lUSF9QUk9HUkVTUyIsIlRZUEVTX1dJVEhfU1RBVEUiLCJ0eXBlIiwiZXZlbnRJZCIsImV2ZW50RGF0YSIsInN0YXJ0U3RvcEV2ZW50Iiwic3RhcnRFdmVudElkIiwic3RvcEV2ZW50SWQiLCJ0cmlnZ2VyU3RhcnRFdmVudElkIiwia2VlcExhc3RPbmx5IiwiYXR0YWNoRXZlbnRJZCIsImF0dGFjaE1heER1cmF0aW9uQmVmb3JlU3RhcnQiLCJzdGFydEV2ZW50Iiwic3RvcEV2ZW50IiwiYXR0YWNoZWRFdmVudCIsImFkZERhdGFTaXplSW5UaW1lbGluZSIsInVwZGF0ZU1ldGFkYXRhIiwiZ2V0RXZlbnROYW1lIiwiaXNTdGFydEV2ZW50IiwiaXNTdG9wRXZlbnQiLCJhZGRFdmVudERhdGEiLCJwcmV2aW91c0V2ZW50RGF0ZSIsImFicyIsImVtcHR5RXZlbnRDb3VudCIsInJlbWFpbmluZ0R1cmF0aW9uIiwiZGF0YUxlbmd0aCIsInB1dENoYXIiLCJuZXR3b3JrVHlwZSIsIm11dGVTdGF0ZSIsImJpdHJhdGVGaXJzdEltYWdlIiwicG9zaXRpb24iLCJwb3NpdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJiaXRyYXRlTGF5ZXJTd2l0Y2giLCJwcm9ncmVzcyIsImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJwcmludCIsIm1pbkluZGV4IiwiaW5pdGlhbEJpdHJhdGUiLCJzdW1tYXJ5RHVyYXRpb24iLCJwYXVzZUR1cmF0aW9uIiwibmJOZXR3b3JrRGlzY29ubmVjdGVkIiwibmJOZXR3b3JrV2lmaSIsIm5iTmV0d29ya01vYmlsZSIsIm5iTmV0d29ya0V0aGVybmV0IiwibGFzdE5ldHdvcmtTdGF0ZSIsIm11dGVEdXJhdGlvbiIsImxhc3RNdXRlU3RhdGUiLCJtYXhJbmRleCIsIm1pbkV2ZW50IiwibWF4RXZlbnQiLCJsYXN0TXV0ZURhdGUiLCJwYXVzZWQiLCJzdGFsbGluZyIsInJlYnVmZmVyaW5nIiwiRU1QVFkiLCJzdGFydERhdGUiLCJzdG9wRGF0ZSIsImZpcnN0SW1hZ2VXaXRob3V0Qml0cmF0ZUV2ZW50IiwiZW5jb2RlciIsImNoZWNrVHlwZSIsImNyZWF0ZUV2ZW50IiwicHVzaEV2ZW50U3RhcnQiLCJwdXNoRXZlbnRCaXRyYXRlUG9zaXRpb24iLCJwdXNoRXZlbnRTdGF0dXNDb2RlIiwicHVzaEV2ZW50UHJvZ3Jlc3MiLCJwdXNoRXZlbnRTdGF0ZSIsInN0YXRlIiwiYXBwbHlLZWVwTGFzdE9ubHkiLCJ1cGRhdGVUaW1lbGluZVByb3BlcnRpZXMiLCJyZWNvbmNpbGlhdGVTdG9wV2l0aFN0YXJ0RXZlbnQiLCJ0eXBlcyIsInRpbWVsaW5lRXZlbnQiLCJhdHRhY2hFdmVudCIsIm1pbkRhdGUiLCJvbkZvcmVncm91bmQiLCJvbkJhY2tncm91bmQiLCJvbk5ldHdvcmtBdmFpbGFibGUiLCJvbk5ldHdvcmtMb3N0Iiwib25NdXRlIiwib25Vbm11dGUiLCJvbk11bHRpY2FzdFVzZWQiLCJvblVuaWNhc3RVc2VkIiwiam9pbiIsIlVpbnQ4QXJyYXkiLCJieXRlQnVmZmVyIiwiYmFzZTY0IiwiYnVmZmVyVG9CYXNlNjQiLCJidWZmZXJUb1N0cmluZyIsIl9CeXRlQnVmZmVyIiwib2JqZWN0IiwibWV0aG9kcyIsImNvdW50IiwiY29uZGl0aW9uIiwicHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9