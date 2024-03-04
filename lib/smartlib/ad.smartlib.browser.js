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

/***/ "./node_modules/@broadpeak/simid/dist/simid.js":
/*!*****************************************************!*\
  !*** ./node_modules/@broadpeak/simid/dist/simid.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  var ProtocolMessage = {
      CREATE_SESSION: 'createSession',
      RESOLVE: 'resolve',
      REJECT: 'reject'
  };
  var MediaMessage = {
      DURATION_CHANGE: 'Media:durationchange',
      ENDED: 'Media:ended',
      ERROR: 'Media:error',
      PAUSE: 'Media:pause',
      PLAY: 'Media:play',
      PLAYING: 'Media:playing',
      SEEKED: 'Media:seeked',
      SEEKING: 'Media:seeking',
      STALLED: 'Media:stalled',
      TIME_UPDATE: 'Media:timeupdate',
      VOLUME_CHANGE: 'Media:volumechange',
  };
  var PlayerMessage = {
      AD_SKIPPED: 'Player:adSkipped',
      AD_STOPPED: 'Player:adStopped',
      FATAL_ERROR: 'Player:fatalError',
      INIT: 'Player:init',
      // BPK
      KEY_DOWN: 'Player:keyDown',
      LOG: 'Player:log',
      RESIZE: 'Player:resize',
      START_CREATIVE: 'Player:startCreative',
  };
  var VideoEvent = {
      DURATION_CHANGE: 'durationchange',
      ENDED: 'ended',
      ERROR: 'error',
      PAUSE: 'pause',
      PLAY: 'play',
      PLAYING: 'playing',
      SEEKED: 'seeked',
      SEEKING: 'seeking',
      STALLED: 'stalled',
      TIME_UPDATE: 'timeupdate',
      VOLUME_CHANGE: 'volumechange',
  };
  /** Messages from the creative */
  var CreativeMessage = {
      CLICK_THRU: 'Creative:clickThru',
      EXPAND_NONLINEAR: 'Creative:expandNonlinear',
      COLLAPSE_NONLINEAR: 'Creative:collapseNonlinear',
      FATAL_ERROR: 'Creative:fatalError',
      GET_MEDIA_STATE: 'Creative:getMediaState',
      LOG: 'Creative:log',
      READY: 'Creative:Ready',
      REPORT_TRACKING: 'Creative:reportTracking',
      REQUEST_FULL_SCREEN: 'Creative:requestFullScreen',
      REQUEST_SKIP: 'Creative:requestSkip',
      REQUEST_STOP: 'Creative:requestStop',
      REQUEST_PAUSE: 'Creative:requestPause',
      REQUEST_PLAY: 'Creative:requestPlay',
      REQUEST_RESIZE: 'Creative:requestResize',
      REQUEST_VOLUME: 'Creative:requestVolume',
      REQUEST_TRACKING: 'Creative:reportTracking',
      REQUEST_CHANGE_AD_DURATION: 'Creative:requestChangeAdDuration',
      REQUEST_VIDEO_LOCATION: 'Creative:requestVideoLocation'
  };
  /**
   * These messages require a response (either resolve or reject).
   * All other messages do not require a response and are information only.
   */
  var MessagesWithResponse = [
      CreativeMessage.CLICK_THRU,
      CreativeMessage.GET_MEDIA_STATE,
      CreativeMessage.READY,
      CreativeMessage.REPORT_TRACKING,
      CreativeMessage.REQUEST_CHANGE_AD_DURATION,
      CreativeMessage.REQUEST_FULL_SCREEN,
      CreativeMessage.REQUEST_PAUSE,
      CreativeMessage.REQUEST_PLAY,
      CreativeMessage.REQUEST_RESIZE,
      CreativeMessage.REQUEST_SKIP,
      CreativeMessage.REQUEST_STOP,
      CreativeMessage.REQUEST_VIDEO_LOCATION,
      CreativeMessage.REQUEST_VOLUME,
      PlayerMessage.AD_SKIPPED,
      PlayerMessage.AD_STOPPED,
      PlayerMessage.FATAL_ERROR,
      PlayerMessage.INIT,
      PlayerMessage.START_CREATIVE,
      ProtocolMessage.CREATE_SESSION,
  ];
  // A list of errors the creative might send to the player.
  var CreativeErrorCode = {
      UNSPECIFIED: 1100,
      CANNOT_LOAD_RESOURCE: 1101,
      PLAYBACK_AREA_UNUSABLE: 1102,
      INCORRECT_VERSION: 1103,
      TECHNICAL_ERROR: 1104,
      EXPAND_NOT_POSSIBLE: 1105,
      PAUSE_NOT_HONORED: 1106,
      PLAYMODE_NOT_ADEQUATE: 1107,
      CREATIVE_INTERNAL_ERROR: 1108,
      DEVICE_NOT_SUPPORTED: 1109,
      MESSAGES_NOT_FOLLOWING_SPEC: 1110,
      PLAYER_RESPONSE_TIMEOUT: 1111,
  };
  // A list of errors the player might send to the creative.
  var PlayerErrorCode = {
      UNSPECIFIED: 1200,
      WRONG_VERSION: 1201,
      UNSUPPORTED_TIME: 1202,
      UNSUPPORTED_FUNCTIONALITY_REQUEST: 1203,
      UNSUPPORTED_ACTIONS: 1204,
      POSTMESSAGE_CHANNEL_OVERLOADED: 1205,
      VIDEO_COULD_NOT_LOAD: 1206,
      VIDEO_TIME_OUT: 1207,
      RESPONSE_TIMEOUT: 1208,
      MEDIA_NOT_SUPPORTED: 1209,
      SPEC_NOT_FOLLOWED_ON_INIT: 1210,
      SPEC_NOT_FOLLOWED_ON_MESSAGES: 1211,
  };
  // A list of reasons a player could stop the ad.
  var StopCode = {
      UNSPECIFIED: 0,
      USER_INITIATED: 1,
      MEDIA_PLAYBACK_COMPLETE: 2,
      PLAYER_INITATED: 3,
      CREATIVE_INITIATED: 4,
      NON_LINEAR_DURATION_COMPLETE: 5,
  };
  var SkippableState;
  (function (SkippableState) {
      SkippableState["PLAYER_HANDLES"] = "playerHandles";
      SkippableState["AD_HANDLES"] = "adHandles";
      SkippableState["NOT_SKIPPABLE"] = "notSkippable";
  })(SkippableState || (SkippableState = {}));
  var NavigationSupport;
  (function (NavigationSupport) {
      NavigationSupport["AD_HANDLES"] = "adHandles";
      NavigationSupport["PLAYER_HANDLES"] = "playerHandles";
      NavigationSupport["NOT_SUPPORTED"] = "notSupported";
  })(NavigationSupport || (NavigationSupport = {}));
  var CloseButtonSupport;
  (function (CloseButtonSupport) {
      CloseButtonSupport["AD_HANDLES"] = "adHandles";
      CloseButtonSupport["PLAYER_HANDLES"] = "playerHandles";
  })(CloseButtonSupport || (CloseButtonSupport = {}));
  // #endregion CREATIVE MESSAGES ARGS

  var SIMID_NS = 'SIMID:';
  /**
   * Contains logic for sending mesages between the SIMID creative and the player.
   * Note: Some browsers do not support promises and a more complete implementation
   *       should consider using a polyfill.
   */
  var SimidComponent = /** @class */ (function () {
      // #endregion MEMBERS
      // #region CONSTRUCTOR
      function SimidComponent(type) {
          this._type = type;
          this._listeners = new Map();
          this._sessionId = '';
          this._nextMessageId = 1;
          this._target = window.parent;
          this._responseListeners = new Map();
          window.addEventListener('message', this.receiveMessage.bind(this), false);
      }
      // #endregion CONSTRUCTOR
      // #region PUBLIC METHODS
      /**
       * Sends a message using post message.
       * Returns a promise that will resolve or reject after the message receives a response.
       * @param messageType The name of the message.
       * @param messageArgs The arguments for the message, may be null.
       * @return A promise that will be fulfilled when client resolves or rejects.
       */
      SimidComponent.prototype.sendMessage = function (messageType, messageArgs) {
          var _this = this;
          console.log("[SIMID][".concat(this._type, "] S"), messageType, messageArgs || {});
          // Incrementing between messages keeps each message id unique.
          var messageId = this._nextMessageId++;
          // Only create session does not need to be in the SIMID name space
          // because it is part of the protocol.
          var nameSpacedMessage = messageType === ProtocolMessage.CREATE_SESSION ? messageType : SIMID_NS + messageType;
          // The message object as defined by the SIMID spec.
          var message = {
              sessionId: this._sessionId,
              messageId: messageId,
              type: nameSpacedMessage,
              timestamp: Date.now(),
              args: messageArgs
          };
          if (MessagesWithResponse.includes(messageType)) {
              // If the message requires a callback this code will set
              // up a promise that will call resolve or reject with its parameters.
              return new Promise(function (resolve, reject) {
                  _this._addResponseListener(messageId, resolve, reject);
                  _this._target.postMessage(JSON.stringify(message), '*');
              });
          }
          // A default promise will just resolve immediately.
          // It is assumed no one would listen to these promises, but if they do it will "just work".
          return new Promise(function (resolve, reject) {
              _this._target.postMessage(JSON.stringify(message), '*');
              resolve();
          });
      };
      /**
       * Add a listener for a given message.
       */
      SimidComponent.prototype.addMessageListener = function (messageType, callback) {
          if (!this._listeners.has(messageType)) {
              this._listeners.set(messageType, []);
          }
          this._listeners.get(messageType).push(callback);
      };
      /**
       * Reset/revert this protocol to its original state
       */
      SimidComponent.prototype.reset = function () {
          this._listeners.clear();
          this._sessionId = '';
          this._nextMessageId = 1;
          // TODO: Perhaps we should reject all associated promises.
          this._responseListeners.clear();
      };
      // #endregion PUBLIC METHODS
      // #region PROTECTED METHODS
      SimidComponent.prototype.setMessageTarget = function (target) {
          this._target = target;
      };
      SimidComponent.prototype.receiveMessage = function (event) {
          if (!event || !event.data) {
              return;
          }
          var message;
          try {
              message = JSON.parse(event.data);
          }
          catch (e) {
              return;
          }
          if (!message) {
              // If there is no data in the event this is not a SIMID message.
              return;
          }
          var sessionId = message.sessionId;
          var type = message.type;
          // A sessionId is valid in one of two cases:
          // 1. It is not set and the message type is createSession.
          // 2. The session ids match exactly.
          var isCreatingSession = this._sessionId === '' && type === ProtocolMessage.CREATE_SESSION;
          var isSessionIdMatch = this._sessionId === sessionId;
          var validSessionId = isCreatingSession || isSessionIdMatch;
          if (!validSessionId || type == null) {
              // Ignore invalid messages.
              return;
          }
          // There are 2 types of messages to handle:
          // 1. Protocol messages (like resolve, reject and createSession)
          // 2. Messages starting with SIMID:
          // All other messages are ignored.
          if (Object.values(ProtocolMessage).includes(type)) {
              this._handleProtocolMessage(message);
          }
          else if (type.startsWith(SIMID_NS)) {
              // Remove SIMID: from the front of the message so we can compare them with the map.
              message.type = type.substring(6);
              console.log("[SIMID][".concat(this._type, "] R"), message.type, message.args || {});
              var listeners = this._listeners.get(message.type);
              if (listeners) {
                  listeners.forEach(function (listener) { return listener(message); });
              }
          }
      };
      SimidComponent.prototype.resolveMessage = function (incomingMessage, outgoingArgs) {
          var messageId = this._nextMessageId++;
          var args = {
              messageId: incomingMessage.messageId,
              value: outgoingArgs,
          };
          var message = {
              sessionId: this._sessionId,
              messageId: messageId,
              type: ProtocolMessage.RESOLVE,
              timestamp: Date.now(),
              args: args,
          };
          this._target.postMessage(JSON.stringify(message), '*');
      };
      /**
       * Rejects an incoming message.
       * @param {!Object} incomingMessage the message that is being resolved.
       * @param {!Object} outgoingArgs Any arguments that are part of the resolution.
       */
      SimidComponent.prototype.rejectMessage = function (incomingMessage, outgoingArgs) {
          var messageId = this._nextMessageId++;
          var args = {
              messageId: incomingMessage.messageId,
              value: outgoingArgs,
          };
          var message = {
              sessionId: this._sessionId,
              messageId: messageId,
              type: ProtocolMessage.REJECT,
              timestamp: Date.now(),
              args: args,
          };
          this._target.postMessage(JSON.stringify(message), '*');
      };
      // #endregion PROTECTED METHODS
      // #region PRIVATE METHODS
      /**
       * Sets up a listener for response resolve/reject messages.
       * @private
       */
      SimidComponent.prototype._addResponseListener = function (messageId, resolve, reject) {
          var listener = function (response) {
              if (response.type === ProtocolMessage.RESOLVE) {
                  resolve(response.args);
              }
              else if (response.type === ProtocolMessage.REJECT) {
                  reject(response.args);
              }
          };
          this._responseListeners.set(messageId, listener.bind(this));
      };
      /**
       * Handles incoming messages specifically for the protocol
       * @param {!Object} data Data passed back from the message
       * @private
       */
      SimidComponent.prototype._handleProtocolMessage = function (message) {
          switch (message.type) {
              case ProtocolMessage.CREATE_SESSION:
                  this._sessionId = message.sessionId;
                  this.resolveMessage(message);
                  var listeners = this._listeners.get(message.type);
                  if (listeners) {
                      // calls each of the listeners with the data.
                      listeners.forEach(function (listener) { return listener(message); });
                  }
                  break;
              case ProtocolMessage.RESOLVE:
              // intentional fallthrough
              case ProtocolMessage.REJECT:
                  var args = message.args;
                  var correlatingId = args.messageId;
                  var resolutionFunction = this._responseListeners.get(correlatingId);
                  if (resolutionFunction) {
                      // If the listener exists call it once only.
                      resolutionFunction(message);
                      this._responseListeners.delete(correlatingId);
                  }
                  break;
          }
      };
      return SimidComponent;
  }());
  // #endregion PRIVATE METHODS

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  /*
  * A subclass of a SIMID ad that implements functionality that will be the same for all simid ads.
  */
  var SimidCreative = /** @class */ (function (_super) {
      __extends(SimidCreative, _super);
      // #endregion MEMBERS
      function SimidCreative() {
          var _this = _super.call(this, 'Creative') || this;
          _this.simidVersion = '';
          _this._addMessageListeners();
          return _this;
      }
      /**
       * Creates a new session.
       * This message is sent by the Creative to initialize the session.
       * @param sessionId
       */
      SimidCreative.prototype.createSession = function (sessionId) {
          this._sessionId = sessionId || this._generateSessionId();
          this.sendMessage(ProtocolMessage.CREATE_SESSION).then(function () {
              console.log('Session created.');
          }, function () {
              // If this ever happens, it may be impossible for the ad to ever communicate with the player.
              console.log('Session creation was rejected.');
          });
      };
      SimidCreative.prototype._addMessageListeners = function () {
          var _this = this;
          Object.values(PlayerMessage).forEach(function (value) {
              _this.addMessageListener(value, function (message) { return _this.onPlayerMessage(message); });
          });
          Object.values(MediaMessage).forEach(function (value) {
              _this.addMessageListener(value, function (message) { return _this.onMediaMessage(message); });
          });
      };
      // #region PROTECTED METHODS
      SimidCreative.prototype.onPlayerMessage = function (message) {
          var rejectArgs = undefined;
          switch (message.type) {
              case PlayerMessage.AD_STOPPED:
                  break;
              case PlayerMessage.AD_SKIPPED:
                  break;
              case PlayerMessage.FATAL_ERROR:
                  break;
              case PlayerMessage.INIT:
                  rejectArgs = this._onPlayerInit(message);
                  break;
              case PlayerMessage.KEY_DOWN:
                  this.onPlayerKeyDown(message);
                  break;
              case PlayerMessage.LOG:
                  break;
              case PlayerMessage.RESIZE:
                  rejectArgs = this._onPlayerResize(message);
                  break;
              case PlayerMessage.START_CREATIVE:
                  break;
          }
          if (MessagesWithResponse.includes(message.type)) {
              if (rejectArgs) {
                  this.rejectMessage(message, rejectArgs);
              }
              else {
                  this.resolveMessage(message);
              }
          }
      };
      SimidCreative.prototype.onMediaMessage = function (message) {
          switch (message.type) {
              case MediaMessage.DURATION_CHANGE:
                  break;
              case MediaMessage.ENDED:
                  this.videoState.ended = true;
                  break;
              case MediaMessage.ERROR:
                  break;
              case MediaMessage.PAUSE:
                  this.videoState.paused = true;
                  break;
              case MediaMessage.PLAY:
                  this.videoState.paused = false;
                  break;
              case MediaMessage.PLAYING:
                  this.videoState.paused = false;
                  break;
              case MediaMessage.SEEKED:
                  break;
              case MediaMessage.SEEKING:
                  break;
              case MediaMessage.STALLED:
                  break;
              case MediaMessage.TIME_UPDATE:
                  this.videoState.currentTime = message.args.currentTime;
                  break;
              case MediaMessage.VOLUME_CHANGE:
                  var args = message.args;
                  this.videoState.volume = args.volume;
                  this.videoState.muted = args.muted;
                  break;
          }
      };
      // Creatives can override these methods to add message handler
      // Note: Creatives source code can be written in javascript, in which methods inheritance is not supported
      SimidCreative.prototype.onPlayerInit = function (message) {
          return undefined;
      };
      SimidCreative.prototype.onPlayerKeyDown = function (message) {
          return undefined;
      };
      SimidCreative.prototype.onPlayerResize = function (message) {
          return undefined;
      };
      SimidCreative.prototype.sendRequestResize = function (mediaDimensions, creativeDimensions) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, , 3]);
                          return [4 /*yield*/, this.sendMessage(CreativeMessage.REQUEST_RESIZE, {
                                  mediaDimensions: mediaDimensions,
                                  creativeDimensions: creativeDimensions
                              })];
                      case 1:
                          _a.sent();
                          this.environmentData.videoDimensions = mediaDimensions;
                          this.environmentData.creativeDimensions = creativeDimensions;
                          return [3 /*break*/, 3];
                      case 2:
                          _a.sent();
                          return [3 /*break*/, 3];
                      case 3: return [2 /*return*/];
                  }
              });
          });
      };
      // #endregion PROTECTED METHODS
      // #region PRIVATE METHODS
      SimidCreative.prototype._onPlayerInit = function (message) {
          var args = message.args;
          this.environmentData = args.environmentData;
          this.creativeData = args.creativeData;
          return this.onPlayerInit(message);
      };
      SimidCreative.prototype._onPlayerResize = function (message) {
          var args = message.args;
          this.environmentData.creativeDimensions = args.creativeDimensions;
          this.environmentData.videoDimensions = args.videoDimensions;
          this.environmentData.fullscreen = args.fullscreen;
          return this.onPlayerResize(message);
      };
      /**
       * Sets the session ID, this should only be used on session creation.
       * @private
       */
      SimidCreative.prototype._generateSessionId = function () {
          // This function generates a random v4 UUID. In a v4 UUID, of the format
          // xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx, all bits are selected randomly,
          // except the bits of 'M', which must be equal to 4, and 'N', whose first 2
          // most significant bits must be set to 10b. So in total only 122 of the 128
          // bits are random. See
          // https://en.wikipedia.org/wiki/Universally_unique_identifier for more.
          // crypto.getRandomValues is preferred over crypto.randomUUID since it
          // supports much older browsers including IE, and doesn't require a secure
          // context.
          // Create 128 random bits (8-bit * 16).
          var random16Uint8s = new Uint8Array(16);
          window.crypto.getRandomValues(random16Uint8s);
          // Split each 8-bit int into two 4-bit ints (4-bit * 32).
          var random32Uint4s = Array.from(Array(32).keys()).map(function (index) {
              var isEven = index % 2 == 0;
              var randomUint8 = random16Uint8s[Math.floor(index / 2)];
              // Pick the high 4 bits for even indices, the low 4 bits for odd.
              return isEven ? (randomUint8 >> 4) : (randomUint8 & 15);
          });
          // Fix the 12th digit to 4 for the UUID version.
          random32Uint4s[12] = 4;
          // Fix the 16th digit's 2 high bits to 10b for UUID variant 1.
          random32Uint4s[16] = 8 | (random32Uint4s[16] & 3);
          var hexDigits = random32Uint4s.map(function (v) { return v.toString(16); });
          var uuidComponents = [
              hexDigits.slice(0, 8).join(''),
              hexDigits.slice(8, 12).join(''),
              hexDigits.slice(12, 16).join(''),
              hexDigits.slice(16, 20).join(''),
              hexDigits.slice(20).join(''),
          ];
          var uuid = uuidComponents.join('-');
          return uuid;
      };
      return SimidCreative;
  }(SimidComponent));

  var NO_REQUESTED_DURATION = 0;
  var UNLIMITED_DURATION = -2;
  // interface HTMLElement {
  //   requestFullscreen?: () => Promise<void>
  //   msRequestFullscreen?: () => Promise<void>
  //   webkitRequestFullscreen?: () => Promise<void>
  //   mozRequestFullScreen?: () => Promise<void>
  // }
  /**
   * All the logic for a simple SIMID player
   */
  var SimidPlayer = /** @class */ (function (_super) {
      __extends(SimidPlayer, _super);
      // #endregion MEMBERS
      /**
       * Sets up the creative iframe and starts listening for messages from the creative.
       * @param mainVideo The main video element
       * @param isLinearAd Represents if the ad is a linear one.
       * @param adComplete This function gets called when the ad stops.
       */
      function SimidPlayer(mainVideo, creativeUri, isLinearAd, adComplete, adParams, adDuration) {
          if (adComplete === void 0) { adComplete = function () { }; }
          if (adParams === void 0) { adParams = ''; }
          if (adDuration === void 0) { adDuration = NO_REQUESTED_DURATION; }
          var _this = _super.call(this, 'Player') || this;
          _this._addCreativeMessageListeners();
          _this._mainVideoElement = mainVideo;
          _this._mainVideoDimensions = mainVideo.getBoundingClientRect();
          _this._creativeUri = creativeUri;
          _this._adParams = adParams;
          _this._isLinearAd = isLinearAd;
          _this._adComplete = adComplete;
          // Consider main video element parent as container element for iframe and ad video player
          _this._playerContainerElement = _this._mainVideoElement.parentElement;
          _this._adVideoElement = undefined; //document.getElementById('ad_video_player') as HTMLMediaElement
          _this._simidIframe = undefined;
          _this._nonLinearStartTime = undefined;
          _this._requestedDuration = adDuration;
          _this._nonLinearDimensions = undefined;
          _this._durationInterval = NaN;
          _this._addMainVideoEventListeners();
          _this._hideAdPlayer();
          document.addEventListener('keydown', function (e) { return _this._onKeyDown(e); });
          return _this;
      }
      /**
       * Initialize and load ad. This should be called before an ad plays.
       * Creates an iframe with the creative in it, then uses a promise to call init on the creative as soon as the creative initializes a session.
       */
      SimidPlayer.prototype.load = function () {
          // if (!this._isLinearAd && !this._isValidDimensions(this._getNonlinearDimensions())) {
          //   console.log('Unable to play a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.')
          //   return
          // }
          // After the iframe is created the player will wait until the ad initializes the communication channel.
          // Then it will call sendInitMessage.
          // [2] - Create iframe element
          this._simidIframe = this._createSimidIframe();
          // if (!this._isLinearAd) {
          //   this._displayNonlinearCreative()
          // }
      };
      SimidPlayer.prototype.reset = function () {
          this._stopAd();
      };
      SimidPlayer.prototype._addCreativeMessageListeners = function () {
          var _this = this;
          this.addMessageListener(ProtocolMessage.CREATE_SESSION, function (message) { return _this.onCreateSession(message); });
          this.addMessageListener(CreativeMessage.COLLAPSE_NONLINEAR, function (message) { return _this.onCreativeCollapseNonLinear(message); });
          this.addMessageListener(CreativeMessage.EXPAND_NONLINEAR, function (message) { return _this.onCreativeExpandNonLinear(message); });
          this.addMessageListener(CreativeMessage.FATAL_ERROR, function (message) { return _this.onCreativeFatalError(message); });
          this.addMessageListener(CreativeMessage.GET_MEDIA_STATE, function (message) { return _this.onCreativeGetMediaState(message); });
          // this.addMessageListener(CreativeMessage.LOG, this.onReceiveCreativeLog.bind(this))
          // this.addMessageListener(CreativeMessage.REQUEST_CHANGE_AD_DURATION, this.onRequestChangeAdDuration.bind(this))
          // this.addMessageListener(CreativeMessage.REQUEST_FULL_SCREEN, this.onRequestFullScreen.bind(this))
          // this.addMessageListener(CreativeMessage.REQUEST_PLAY, this.onRequestPlay.bind(this))
          // this.addMessageListener(CreativeMessage.REQUEST_PAUSE, this.onRequestPause.bind(this))
          this.addMessageListener(CreativeMessage.REQUEST_RESIZE, function (message) { return _this.onCreativeRequestResize(message); });
          this.addMessageListener(CreativeMessage.REQUEST_SKIP, function (message) { return _this.onCreativeRequestSkip(message); });
          this.addMessageListener(CreativeMessage.REQUEST_STOP, function (message) { return _this.onCreativeRequestStop(message); });
      };
      // #region CREATIVE MESSAGE HANDLERS
      SimidPlayer.prototype.onCreateSession = function (message) {
          // [3] - createSession sent by the creative
          this.resolveMessage(message);
          // [4] - send Player:init message
          this._sendInitMessage();
      };
      SimidPlayer.prototype.onCreativeCollapseNonLinear = function (message) {
          if (this._isLinearAd) {
              this.rejectMessage(message, {
                  errorCode: PlayerErrorCode.UNSPECIFIED,
                  message: 'Cannot collapse linear ads'
              });
              return;
          }
          var creativeDimensions = this._getNonlinearDimensions();
          if (!this._isValidDimensions(creativeDimensions)) {
              this.rejectMessage(message, {
                  errorCode: PlayerErrorCode.UNSPECIFIED,
                  message: 'Unable to collapse to dimensions bigger than the player. Please modify dimensions to a smaller size'
              });
          }
          // In response to collapseNonlinear, the player resizes the ad to its original state and resumes the content media playback.
          this._setSimidIframeDimensions(creativeDimensions);
          this._simidIframe.style.position = "absolute";
          this._mainVideoElement.play();
          this.resolveMessage(message);
      };
      SimidPlayer.prototype.onCreativeExpandNonLinear = function (message) {
          if (this._isLinearAd) {
              this.rejectMessage(message);
              return;
          }
          var fullDimensions = this._getFullDimensions(this._mainVideoElement);
          this._setSimidIframeDimensions(fullDimensions);
          this._mainVideoElement.pause();
          var args = {
              creativeDimensions: fullDimensions
          };
          this.resolveMessage(message, args);
      };
      SimidPlayer.prototype.onCreativeFatalError = function (message) {
          this.resolveMessage(message);
          this._stopAd(StopCode.CREATIVE_INITIATED);
      };
      SimidPlayer.prototype.onCreativeGetMediaState = function (message) {
          var args = {
              currentSrc: this._adVideoElement ? this._adVideoElement.currentSrc : '',
              currentTime: this._adVideoElement ? this._adVideoElement.currentTime : 0,
              duration: this._adVideoElement ? this._adVideoElement.duration : 0,
              ended: this._adVideoElement ? this._adVideoElement.ended : true,
              muted: this._adVideoElement ? this._adVideoElement.muted : false,
              paused: this._adVideoElement ? this._adVideoElement.paused : true,
              volume: this._adVideoElement ? this._adVideoElement.volume : 0,
              fullscreen: this._adVideoElement ? this._adVideoElement['fullscreen'] : false,
          };
          this.resolveMessage(message, args);
      };
      // onReceiveCreativeLog(incomingMessage) {
      //   const logMessage = incomingMessage.args['message']
      //   console.log("Received message from creative: " + logMessage)
      // }
      // /**
      //  * The player must implement sending tracking pixels from the creative.
      //  * This sample implementation does not show how to send tracking pixels or
      //  * replace macros. That should be done using the players standard workflow.
      //  */
      // onReportTracking(incomingMessage) {
      //   const requestedUrlArray = incomingMessage.args['trackingUrls']
      //   console.log('The creative has asked for the player to ping ' + requestedUrlArray)
      // }
      // /**
      //  * Called when creative requests a change in duration of ad.
      //  * @private
      //  */
      // onRequestChangeAdDuration(incomingMessage) {
      //   const newRequestedDuration = incomingMessage.args['duration']
      //   if (newRequestedDuration != UNLIMITED_DURATION && newRequestedDuration < 0) {
      //     const durationErrorMessage = {
      //       errorCode: PlayerErrorCode.UNSUPPORTED_TIME,
      //       message: 'A negative duration is not valid.'
      //     }
      //     this.rejectMessage(incomingMessage, durationErrorMessage)
      //   }
      //   else {
      //     this._requestedDuration = newRequestedDuration
      //     //If requested duration is any other acceptable value
      //     this.compareAdAndRequestedDurations_()
      //     this.resolveMessage(incomingMessage)
      //   }
      // }
      // public onRequestFullScreen(incomingMessage) {
      //   const element = this._simidIframe as HTMLElement
      //   var requestFullScreen =
      //     element.requestFullscreen ||
      //     element.webkitRequestFullscreen ||
      //     element.mozRequestFullScreen ||
      //     element.msRequestFullscreen
      //   // The spec currently says to only request fullscreen for the iframe.
      //   const promise: Promise<void> = requestFullScreen()
      //   if (promise) {
      //     promise.then(() => this.resolveMessage(incomingMessage))
      //   } else {
      //     // TODO: Many browsers are not returning promises but are still
      //     // going full screen. Assuming resolve (bad).
      //     this.resolveMessage(incomingMessage)
      //   }
      // }
      // onRequestPlay(incomingMessage) {
      //   if (this._isLinearAd) {
      //     this._adVideoElement.play()
      //     .then(() => this.resolveMessage(incomingMessage))
      //     .catch(() => {
      //       const errorMessage = {
      //         errorCode : PlayerErrorCode.VIDEO_COULD_NOT_LOAD,
      //         message: 'The SIMID media could not be loaded.'
      //       }
      //       this.rejectMessage(incomingMessage, errorMessage)
      //     })
      //   } else {
      //     const errorMessage = {
      //       errorCode : CreativeErrorCode.PLAYBACK_AREA_UNUSABLE,
      //       message: 'Non linear ads do not play video.'
      //     }
      //     this.rejectMessage(incomingMessage, errorMessage)
      //   }
      // }
      // onRequestPause(incomingMessage) {
      //   this._adVideoElement.pause()
      //   this.resolveMessage(incomingMessage)
      // }
      SimidPlayer.prototype.onCreativeRequestSkip = function (message) {
          this.resolveMessage(message);
          this._skipAd();
      };
      SimidPlayer.prototype.onCreativeRequestStop = function (message) {
          this.resolveMessage(message);
          this._stopAd(StopCode.CREATIVE_INITIATED);
      };
      SimidPlayer.prototype.onCreativeRequestResize = function (message) {
          var args = message.args;
          if (this._isLinearAd) {
              this.rejectMessage(message, {
                  errorCode: CreativeErrorCode.EXPAND_NOT_POSSIBLE,
                  message: 'Linear resize not yet supported.'
              });
          }
          else if (!this._isValidDimensions(args.creativeDimensions)) {
              this.rejectMessage(message, {
                  errorCode: CreativeErrorCode.EXPAND_NOT_POSSIBLE,
                  message: 'Unable to resize a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.'
              });
          }
          else {
              this._nonLinearDimensions = args.creativeDimensions;
              this._setSimidIframeDimensions(args.creativeDimensions);
              this._setElementDimensions(this._mainVideoElement, args.mediaDimensions);
              this.resolveMessage(message);
          }
      };
      // #endregion CREATIVE MESSAGE HANDLERS
      // #region PRIVATE METHODS
      SimidPlayer.prototype._sendInitMessage = function () {
          return __awaiter(this, void 0, void 0, function () {
              var videoDimensions, creativeDimensions, environmentData, creativeData, args, e_1;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          videoDimensions = this._getFullDimensions(this._mainVideoElement);
                          creativeDimensions = this._isLinearAd ?
                              this._getFullDimensions(this._mainVideoElement) :
                              this._getNonlinearDimensions();
                          environmentData = {
                              videoDimensions: videoDimensions,
                              creativeDimensions: creativeDimensions,
                              fullscreen: false,
                              fullscreenAllowed: true,
                              variableDurationAllowed: true,
                              skippableState: SkippableState.AD_HANDLES,
                              version: '',
                              siteUrl: document.location.host,
                              appId: '',
                              useragent: '',
                              deviceId: '',
                              muted: this._adVideoElement ? this._adVideoElement.muted : false,
                              volume: this._adVideoElement ? this._adVideoElement.volume : 1
                          };
                          creativeData = {
                              adParameters: this._adParams,
                              clickThruUrl: '',
                              // These values should be populated from the VAST response
                              // adId: '',
                              // creativeId : '',
                              // adServingId: '',
                          };
                          args = {
                              environmentData: environmentData,
                              creativeData: creativeData,
                          };
                          _a.label = 1;
                      case 1:
                          _a.trys.push([1, 3, , 4]);
                          return [4 /*yield*/, this.sendMessage(PlayerMessage.INIT, args)];
                      case 2:
                          _a.sent();
                          this._startCreative();
                          return [3 /*break*/, 4];
                      case 3:
                          e_1 = _a.sent();
                          console.error('[PLAYER] Init failed', e_1);
                          this._stopSession();
                          return [3 /*break*/, 4];
                      case 4: return [2 /*return*/];
                  }
              });
          });
      };
      /**
       * Stop/reset session
       * Remove and destroy the SIMID creative iframe and resumes video playback.
       */
      SimidPlayer.prototype._stopSession = function () {
          this._stopAdPlayer();
          this._hideAdPlayer();
          this._destroySimidIframe();
          this._setElementDimensions(this._mainVideoElement, this._mainVideoDimensions);
          this._removeAdVideoEventListeners();
          this._removeMainVideoEventListeners();
          this._adComplete();
          this._mainVideoElement.play();
      };
      // #region IFRAME MANAGEMENT
      SimidPlayer.prototype._createSimidIframe = function () {
          // Note: once the SIMID iframe is created, it will send a "createSession" message to this SIMId player (see _onCreateSession()) 
          var _this = this;
          // [2] - create iframe element
          var simidIframe = document.createElement('iframe');
          simidIframe.style.display = 'none';
          simidIframe.setAttribute('allowFullScreen', '');
          simidIframe.setAttribute('allow', 'geolocation');
          if (this._isLinearAd) ;
          // Set the iframe creative, this should be an html creative.
          // TODO: This sample does not show what to do when loading fails.
          // [2.1] - set iframe.src
          simidIframe.src = this._creativeUri;
          simidIframe.onfocus = function () {
              _this._playerContainerElement.focus();
          };
          // [2.2] - add do DOM
          this._playerContainerElement.appendChild(simidIframe);
          // The target of the player to send messages to is the newly created iframe.
          this.setMessageTarget(simidIframe.contentWindow);
          return simidIframe;
      };
      SimidPlayer.prototype._destroySimidIframe = function () {
          if (!this._simidIframe) {
              return;
          }
          this._simidIframe.remove();
          this._simidIframe = null;
          this.reset();
      };
      SimidPlayer.prototype._showSimidIFrame = function () {
          if (!this._simidIframe) {
              return;
          }
          this._simidIframe.style.display = 'block';
      };
      SimidPlayer.prototype._hideSimidIFrame = function () {
          if (!this._simidIframe) {
              return;
          }
          this._simidIframe.style.display = 'none';
      };
      SimidPlayer.prototype._setSimidIframeDimensions = function (dimensions) {
          if (!this._simidIframe) {
              return;
          }
          this._setElementDimensions(this._simidIframe, dimensions);
      };
      // #endregion IFRAME
      // #region AD PLAYBACK
      SimidPlayer.prototype._startCreative = function () {
          return __awaiter(this, void 0, void 0, function () {
              var e_2;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (this._isLinearAd) {
                              this._playLinearVideoAd();
                          }
                          else {
                              this._nonLinearStartTime = this._mainVideoElement.currentTime;
                              this._mainVideoElement.play();
                          }
                          _a.label = 1;
                      case 1:
                          _a.trys.push([1, 3, , 4]);
                          return [4 /*yield*/, this.sendMessage(PlayerMessage.START_CREATIVE)];
                      case 2:
                          _a.sent();
                          this._showSimidIFrame();
                          return [3 /*break*/, 4];
                      case 3:
                          e_2 = _a.sent();
                          console.error('[PLAYER] Failed to start creative', e_2);
                          return [3 /*break*/, 4];
                      case 4: return [2 /*return*/];
                  }
              });
          });
      };
      /**
       * Stops the ad and destroys the ad iframe.
       * @param reason The reason the ad will stop.
       */
      SimidPlayer.prototype._stopAd = function (reason) {
          if (reason === void 0) { reason = StopCode.PLAYER_INITATED; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (!this._simidIframe) return [3 /*break*/, 2];
                          this._hideSimidIFrame();
                          // Wait for the SIMID creative to acknowledge stop and then clean up the iframe.
                          return [4 /*yield*/, this.sendMessage(PlayerMessage.AD_STOPPED, {
                                  code: reason
                              })];
                      case 1:
                          // Wait for the SIMID creative to acknowledge stop and then clean up the iframe.
                          _a.sent();
                          this._stopSession();
                          _a.label = 2;
                      case 2: return [2 /*return*/];
                  }
              });
          });
      };
      SimidPlayer.prototype._skipAd = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          // The iframe is only hidden on ad skipped. The ad might still request tracking pixels before it is cleaned up.
                          this._hideSimidIFrame();
                          // Wait for the SIMID creative to acknowledge skip and then clean up the iframe.
                          return [4 /*yield*/, this.sendMessage(PlayerMessage.AD_SKIPPED)];
                      case 1:
                          // Wait for the SIMID creative to acknowledge skip and then clean up the iframe.
                          _a.sent();
                          this._stopSession();
                          return [2 /*return*/];
                  }
              });
          });
      };
      SimidPlayer.prototype._playLinearVideoAd = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._mainVideoElement.pause();
          this._showAdPlayer();
          this._loadAdPlayer();
      };
      SimidPlayer.prototype._loadAdPlayer = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._adVideoElement.src = document.getElementById('video_url').value;
          this._adVideoElement.play();
      };
      SimidPlayer.prototype._pauseAdPlayer = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._adVideoElement.pause();
      };
      SimidPlayer.prototype._playAdPlayer = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._adVideoElement.play();
      };
      SimidPlayer.prototype._stopAdPlayer = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._adVideoElement.src = '';
      };
      SimidPlayer.prototype._showAdPlayer = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._adVideoElement.style.display = 'block';
          // document.getElementById('ad_video_div').style.display = 'block'
      };
      SimidPlayer.prototype._hideAdPlayer = function () {
          if (!this._adVideoElement) {
              return;
          }
          this._adVideoElement.style.display = 'none';
          // document.getElementById('ad_video_div').style.display = 'none'
      };
      // #endregion AD PLAYBACK
      // #region AD VIDEO EVENTS
      SimidPlayer.prototype._addAdVideoEventListeners = function () {
          var _this = this;
          if (!this._adVideoElement) {
              return;
          }
          Object.values(VideoEvent).forEach(function (value) {
              _this._adVideoElement.addEventListener(value, function (event) { return _this._onAdVideoEvent(event); }, true);
          });
      };
      SimidPlayer.prototype._removeAdVideoEventListeners = function () {
          var _this = this;
          if (!this._adVideoElement) {
              return;
          }
          Object.values(VideoEvent).forEach(function (value) {
              _this._adVideoElement.removeEventListener(value, function (event) { return _this._onAdVideoEvent(event); }, true);
          });
      };
      SimidPlayer.prototype._onAdVideoEvent = function (event) {
          console.log('[PLAYER] Ad video event:', event.type);
          switch (event.type) {
              case VideoEvent.DURATION_CHANGE:
                  this.sendMessage(MediaMessage.DURATION_CHANGE, {
                      duration: this._adVideoElement.duration
                  });
                  break;
              case VideoEvent.ENDED:
                  this._onAdVideoEnded();
                  break;
              case VideoEvent.ERROR:
                  var errorEvent = event;
                  this.sendMessage(MediaMessage.ERROR, {
                      error: errorEvent.error,
                      message: errorEvent.message
                  });
                  break;
              case VideoEvent.TIME_UPDATE:
                  this.sendMessage(MediaMessage.TIME_UPDATE, {
                      currentTime: this._adVideoElement.currentTime
                  });
                  break;
              case VideoEvent.VOLUME_CHANGE:
                  this.sendMessage(MediaMessage.VOLUME_CHANGE, {
                      muted: this._adVideoElement.muted,
                      volume: this._adVideoElement.volume
                  });
                  break;
              default:
                  // By default, simply forward event message by prepending 'Media:' to the event type/name 
                  this.sendMessage('Media:' + event.type);
                  break;
          }
      };
      SimidPlayer.prototype._onAdVideoEnded = function () {
          var _this = this;
          this.sendMessage(MediaMessage.ENDED);
          if (this._requestedDuration === NO_REQUESTED_DURATION) {
              this._stopAd(StopCode.MEDIA_PLAYBACK_COMPLETE);
          }
          else if (this._requestedDuration != UNLIMITED_DURATION) {
              // If the request duration is longer than the ad duration, the ad extends for the requested amount of time
              var durationChangeMs = (this._requestedDuration - this._adVideoElement.duration) * 1000;
              setTimeout(function () {
                  _this._stopAd(StopCode.CREATIVE_INITIATED);
              }, durationChangeMs);
          }
      };
      // #endregion AD VIDEO EVENTS
      // #region MAIN VIDEO EVENTS
      SimidPlayer.prototype._addMainVideoEventListeners = function () {
          var _this = this;
          Object.values(VideoEvent).forEach(function (value) {
              _this._mainVideoElement.addEventListener(value, function (event) { return _this._onMainVideoEvent(event); }, true);
          });
      };
      SimidPlayer.prototype._removeMainVideoEventListeners = function () {
          var _this = this;
          Object.values(VideoEvent).forEach(function (value) {
              _this._mainVideoElement.removeEventListener(value, function (event) { return _this._onMainVideoEvent(event); }, true);
          });
      };
      SimidPlayer.prototype._onMainVideoEvent = function (event) {
          console.log('[PLAYER] Main video event:', event.type);
          switch (event.type) {
              case VideoEvent.TIME_UPDATE:
                  // For non-linear ads, stop the ad once requested duration is over
                  if (this._nonLinearStartTime && this._mainVideoElement.currentTime - this._nonLinearStartTime > this._requestedDuration) {
                      this._stopAd(StopCode.NON_LINEAR_DURATION_COMPLETE);
                  }
                  break;
          }
      };
      // #endregion MAIN VIDEO EVENTS
      SimidPlayer.prototype._onKeyDown = function (event) {
          console.log('### KEY_DOWN', event);
          this.sendMessage(PlayerMessage.KEY_DOWN, {
              key: event.key,
              code: event.keyCode
          });
          event.preventDefault();
      };
      // #endregion PRIVATE METHODS
      SimidPlayer.prototype._getFullDimensions = function (element) {
          var videoRect = element.getBoundingClientRect();
          return {
              x: 0,
              y: 0,
              width: videoRect.width,
              height: videoRect.height,
          };
      };
      /**
       * Checks whether the input dimensions are valid and fit in the player window.
       * @param dimensions A dimension that contains x, y, width & height fields.
       * @return true if the input dimensions are valid and fit in the player window
       */
      SimidPlayer.prototype._isValidDimensions = function (dimensions) {
          var playerRect = this._playerContainerElement.getBoundingClientRect();
          var heightFits = dimensions.y + dimensions.height <= playerRect.height;
          var widthFits = dimensions.x + dimensions.width <= playerRect.width;
          return heightFits && widthFits;
      };
      /**
       * Returns the specified dimensions of the non-linear creative.
       * @return the dimensions of the non-linear creative
       */
      SimidPlayer.prototype._getNonlinearDimensions = function () {
          if (this._nonLinearDimensions) {
              return this._nonLinearDimensions;
          }
          // Take player contaier dimensions as initial creative dimensions
          return this._getFullDimensions(this._playerContainerElement);
      };
      SimidPlayer.prototype._displayNonlinearCreative = function () {
          var newDimensions = this._getNonlinearDimensions();
          if (!this._isValidDimensions(newDimensions)) {
              console.log('Unable to play a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.');
              return;
          }
          else {
              this._setSimidIframeDimensions(newDimensions);
              this._simidIframe.style.position = "absolute";
              this._mainVideoElement.play();
              // TODO: get creative duration
              this._requestedDuration = 10;
          }
      };
      SimidPlayer.prototype._setElementDimensions = function (element, dimensions) {
          element.style.height = "".concat(dimensions.height);
          element.style.width = "".concat(dimensions.width);
          element.style.left = "".concat(dimensions.x, "px");
          element.style.top = "".concat(dimensions.y, "px");
      };
      // /**
      //  * Compares the duration of the ad with the requested change duration.
      //  * If request duration is the same as the ad duration, ad ends as normal.
      //  * If request duration is unlimited, ad stays on screen until user closes ad.
      //  * If request duration is shorter, the ad stops early. 
      //  * @private
      //  */
      // compareAdAndRequestedDurations_() {
      //   if (this._requestedDuration == NO_REQUESTED_DURATION ||  this._requestedDuration == UNLIMITED_DURATION) {
      //     //Note: Users can end the ad with unlimited duration with
      //     // the close ad button on the player
      //     return
      //   } else if (this._adVideoElement.currentTime >= this._requestedDuration) {
      //     //Creative requested a duration shorter than the ad
      //     this.stopAd(StopCode.CREATIVE_INITIATED)
      //   }
      // } 
      SimidPlayer.prototype._sendLog = function (message) {
          this.sendMessage(PlayerMessage.LOG, {
              message: message
          });
      };
      return SimidPlayer;
  }(SimidComponent));

  exports.CreativeErrorCode = CreativeErrorCode;
  exports.CreativeMessage = CreativeMessage;
  exports.MediaMessage = MediaMessage;
  exports.PlayerErrorCode = PlayerErrorCode;
  exports.PlayerMessage = PlayerMessage;
  exports.SimidComponent = SimidComponent;
  exports.SimidCreative = SimidCreative;
  exports.SimidPlayer = SimidPlayer;
  exports.StopCode = StopCode;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=simid.js.map


/***/ }),

/***/ "./src_core/ad/metrics/AdMetrics.js":
/*!******************************************!*\
  !*** ./src_core/ad/metrics/AdMetrics.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _service_JobManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../service/JobManager */ "./src_core/service/JobManager.js");
/* harmony import */ var _request_RequestManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../request/RequestManager */ "./src_core/request/RequestManager.js");
/* harmony import */ var _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/LoggerManager */ "./src_core/utils/LoggerManager.js");
/* harmony import */ var _AdTracker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AdTracker */ "./src_core/ad/tracking/AdTracker.js");
/* harmony import */ var _broadpeak_simid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @broadpeak/simid */ "./node_modules/@broadpeak/simid/dist/simid.js");
/* harmony import */ var _broadpeak_simid__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_broadpeak_simid__WEBPACK_IMPORTED_MODULE_21__);

















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
     * SIMID player
     */
    _defineProperty(this, "simidPlayer", void 0);
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
    this.simidPlayer = undefined;
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'BkYou session initialized', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Updating ad tracking file...', this.handler.id);

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
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().adTracking(this.handler, parameters, adTrackingURL, true).then(function (result) {
          // Cancel request if session has been stopped
          if (_this.handler.stopped === true) {
            return;
          }

          // Cancel active keepalive job
          if (_this.updateSessionJob !== undefined) {
            _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().cancel(_this.updateSessionJob);
          }
          if (result.httpStatus >= 200 && result.httpStatus < 300) {
            // Parse the BkYou JSON file
            var data;
            try {
              data = JSON.parse(result.content);
            } catch (e) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking updated file unreadable', _this.handler.id);

              // Restart keepalive job
              if (_this.firstFileReceived === true) {
                _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
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
              _this.updateSessionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().asyncDelay(_this.sessionUpdateInterval, function () {
                _this.updateSessionJob = undefined;
                _this.updateBkYouSession();
              });
            } else {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Stopping ad tracking file update (VOD stream)...', _this.handler.id);
            }
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Stopping ad tracking file update (status code ' + result.httpStatus + ')', _this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Setting refresh delay to ' + this.sessionUpdateInterval + 'ms', this.handler.id);
      } else {
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Setting refresh delay to ' + AdTrackingManager.SESSION_UPDATE_INTERVAL + 'ms (default value)', this.handler.id);
      }
      var adDataTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_20__.AdDataTracker(this, sessionToken, timeReference);
      var adPods = data['adpods'];
      if (Array.isArray(adPods)) {
        adPods.forEach(function (adPod) {
          var adBreakId = adPod['id'] || '';
          var startTime = adPod['starttime_ms'] + timeReference;
          var duration = adPod['duration_ms'] || 0;
          var ads = adPod['ads'];

          // Create ad break
          var adBreakTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_20__.AdBreakTracker(adDataTracker, adBreakId, startTime, duration, _this2.isLive());

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
              var nonLinearAd = ad['nonLinearAd'];

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
                var adTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_20__.AdTracker(adBreakTracker, sequenceNumber, startTime, duration, skippable, skippableTime, creativeId, adId, clickable, verifications, nonLinearAd);
                adBreakTracker.ads.push(adTracker);

                // Parse callback events
                if (Array.isArray(events)) {
                  events.forEach(function (event) {
                    var url = event['callbackurl'];
                    if (url !== undefined) {
                      var type = event['type'];
                      var offset = event['offset_ms'];
                      var time = event['time_ms'] + timeReference || startTime;
                      var adEventTracker = new _AdTracker__WEBPACK_IMPORTED_MODULE_20__.AdEventTracker(adTracker, type, url, offset, time);
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
        this.updatePositionJob = _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().asyncDelay(AdTrackingManager.POSITION_UPDATE_INTERVAL, function () {
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking paused (player event)', this.handler.id);
        _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().cancel(this.updatePositionJob);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, adData.adBreaks.length + ' ad break(s) parsed', this.handler.id);
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
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad break ' + (index + 1) + '/' + _this4.adData.adBreaks.length + ': updated duration from ' + oldDuration + ' to ' + currentAdBreak.duration, _this4.handler.id);
            }
          } else {
            // Add the new ad break
            _this4.adData.adBreaks.push(adBreak);
            newAdCount += adBreak.ads.length;
            dataUpdated = true;
          }
        });
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, this.adData.adBreaks.length + ' ad break(s) in total, ' + adData.adBreaks.length + ' ad break(s) parsed, ' + newAdCount + ' new ad(s), ' + deletedAdCount + ' deleted ad(s)', this.handler.id);
      }

      // Notify event array updated
      this.notifyAdsUpdated(this.adData);

      // Start if necessary
      if (this.started && !this.paused && !this.buffering) {
        var position = this.playerAdapter.getPosition();

        // If update position process stopped, reset last position to the current position
        if (this.updatePositionJob === undefined && this.adData.hasRemainingAdBreaks(position) > 0) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking resumed', this.handler.id);

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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Processing all events since first image...', this.handler.id);

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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Entering ad ' + _adTracker.adId + '...', this.handler.id);

            // Ad skipped, a seek happened
            var skipped = positionStart - _adTracker.position >= AdTrackingManager.POSITION_SEEK_ERROR_DELTA;

            // If entering an ad, handle position start precision error
            if (!skipped) {
              _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Update position start from ' + positionStart + ' to ' + _adTracker.position, this.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Changing from ad ' + this.currentAdTracker.adId + ' to ' + _adTracker.adId + '...', this.handler.id);

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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Exiting ad ' + this.currentAdTracker.adId + '...', this.handler.id);

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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking paused (playback paused, onPositionUpdated)', this.handler.id);
          }
        } else {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, onPositionUpdated)', this.handler.id);
        }
      } else {
        var _this$adData3;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Processing trackers from ' + positionStart + 'ms to ' + positionEnd + 'ms, resuming tracking...', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking paused (no more event, checkStart)', this.handler.id);
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
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad break end detected', this.handler.id);
          } else {
            _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad break not yet ended', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Requesting click tracker ' + tracker.clickurl, _this5.handler.id);
        _request_RequestManager__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().adEvent(_this5.handler, tracker.clickurl);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ad tracking enabled (live:' + this.isLive() + ')', this.handler.id);

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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.e(TAG, 'The player position does not return a position as a timestamp in millis. The ad tracking might not work.', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Reverting position because of bad position when resuming...', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ignoring player position ' + playerPosition + ', already proceeded...', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Position updated during buffering, period switch ?', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Reverting position because of seek...', this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Updating seek start position from ' + start + ' to ' + this.lastPosition, this.handler.id);
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
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Seek detected, proceeding events...', this.handler.id);

        // Ignore seek backward if < 2 seconds (period switch error)
        if (end < start && start - end < 2000) {
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Ignoring seek...', this.handler.id);
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
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Between ' + i + ' and ' + position, this.handler.id);
          this.lastPosition = i;
          this.onPositionUpdated(position);
        }
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Seek processed start:' + startSeekPosition + ' end:' + endSeekPosition, this.handler.id);
        if (end - start < 0) {
          var _this$adData6;
          _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + endSeekPosition, this.handler.id);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Reset ad trackers with position ' + end, this.handler.id);
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
        _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().cancel(this.updateSessionJob);
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
      var _this9 = this,
        _this$handler$adSessi;
      this.listeners.forEach(function (listener) {
        _this9.notifyEvent(listener, 'onAdData', ad);
      });

      // PATCH for demo purpose waiting for bkp.io to support nonLinearAd ad property
      var adsExtData = (_this$handler$adSessi = this.handler.adSession) === null || _this$handler$adSessi === void 0 || (_this$handler$adSessi = _this$handler$adSessi.adParameters) === null || _this$handler$adSessi === void 0 ? void 0 : _this$handler$adSessi.adsExtData;
      if (adsExtData && adsExtData[ad.creativeId] && adsExtData[ad.creativeId].nonLinearAd) {
        ad.nonLinearAd = adsExtData[ad.creativeId].nonLinearAd;
      }
      if (ad.nonLinearAd) {
        this.loadNonLinearInteractiveAd(ad.nonLinearAd, ad.duration);
      }
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
          _service_JobManager__WEBPACK_IMPORTED_MODULE_17__["default"].getInstance().cancel(this.updateSessionJob);
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
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'On ad data (firstData: ' + firstData + ', dataUpdated: ' + dataUpdated + ')', this.handler.id);
      if (firstData === true || dataUpdated === true) {
        var _this$handler$adSessi2;
        this.podsSentNumber = this.adList.length;
        _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'On ad data (length: ' + this.podsSentNumber + ')', this.handler.id);
        (_this$handler$adSessi2 = this.handler.adSession) === null || _this$handler$adSessi2 === void 0 || (_this$handler$adSessi2 = _this$handler$adSessi2.adDataListener) === null || _this$handler$adSessi2 === void 0 || _this$handler$adSessi2.onAdData(this.adList);
      }
    }

    /**
     * Load non-linear interactive ad
     */
  }, {
    key: "loadNonLinearInteractiveAd",
    value: function loadNonLinearInteractiveAd(nonLinearAd, adDuration) {
      var _this17 = this;
      var mainVideoElement = this.playerAdapter.getMediaElement ? this.playerAdapter.getMediaElement() : undefined;
      if (!mainVideoElement || nonLinearAd.apiFramework.toLowerCase() !== 'simid') {
        return;
      }
      var creativeUri = nonLinearAd.iframeResource;
      var adParams = nonLinearAd.adParams;
      var duration = adDuration / 1000 - 2;
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Load non-linear interactive ad from uri' + creativeUri);
      this.simidPlayer = new _broadpeak_simid__WEBPACK_IMPORTED_MODULE_21__.SimidPlayer(mainVideoElement, creativeUri, false, function () {
        return _this17.unloadNonLinearInteractiveAd();
      }, JSON.stringify(adParams), duration);
      this.simidPlayer.load();
    }

    /**
     * Unload non-linear interactive ad
     */
  }, {
    key: "unloadNonLinearInteractiveAd",
    value: function unloadNonLinearInteractiveAd() {
      if (!this.simidPlayer) {
        return;
      }
      _utils_LoggerManager__WEBPACK_IMPORTED_MODULE_19__.LoggerManager.d(TAG, 'Unload non-linear interactive ad');
      this.simidPlayer.reset();
      this.simidPlayer = undefined;
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLHVIQUE4Qzs7QUFFNUQ7QUFDQTtBQUNBLElBQUksOEJBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvQGJyb2FkcGVhay9zaW1pZC9kaXN0L3NpbWlkLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvYWQvbWV0cmljcy9BZE1ldHJpY3MuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC9tZXRyaWNzL0FkTWV0cmljc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC90cmFja2luZy9BZFRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9hZC90cmFja2luZy9BZFRyYWNraW5nTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9TbWFydExpYk1vZHVsZS8uL3NyY19jb3JlL2luZGV4LmFkLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vc3JjX2NvcmUvcGx1Z2lucy9vbXNkay9PTVNES01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9zcmNfY29yZS9wbHVnaW5zL29tc2RrL09NU2Vzc2lvbkhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovL1NtYXJ0TGliTW9kdWxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vU21hcnRMaWJNb2R1bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC52YWx1ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhZFNtYXJ0TGliTW9kdWxlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFkU21hcnRMaWJNb2R1bGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYWRTbWFydExpYk1vZHVsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKChmdW5jdGlvbigpIHsgcmV0dXJuICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogZ2xvYmFsKX0pKCksIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuc2ltaWQgPSB7fSkpO1xufSkodGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgUHJvdG9jb2xNZXNzYWdlID0ge1xuICAgICAgQ1JFQVRFX1NFU1NJT046ICdjcmVhdGVTZXNzaW9uJyxcbiAgICAgIFJFU09MVkU6ICdyZXNvbHZlJyxcbiAgICAgIFJFSkVDVDogJ3JlamVjdCdcbiAgfTtcbiAgdmFyIE1lZGlhTWVzc2FnZSA9IHtcbiAgICAgIERVUkFUSU9OX0NIQU5HRTogJ01lZGlhOmR1cmF0aW9uY2hhbmdlJyxcbiAgICAgIEVOREVEOiAnTWVkaWE6ZW5kZWQnLFxuICAgICAgRVJST1I6ICdNZWRpYTplcnJvcicsXG4gICAgICBQQVVTRTogJ01lZGlhOnBhdXNlJyxcbiAgICAgIFBMQVk6ICdNZWRpYTpwbGF5JyxcbiAgICAgIFBMQVlJTkc6ICdNZWRpYTpwbGF5aW5nJyxcbiAgICAgIFNFRUtFRDogJ01lZGlhOnNlZWtlZCcsXG4gICAgICBTRUVLSU5HOiAnTWVkaWE6c2Vla2luZycsXG4gICAgICBTVEFMTEVEOiAnTWVkaWE6c3RhbGxlZCcsXG4gICAgICBUSU1FX1VQREFURTogJ01lZGlhOnRpbWV1cGRhdGUnLFxuICAgICAgVk9MVU1FX0NIQU5HRTogJ01lZGlhOnZvbHVtZWNoYW5nZScsXG4gIH07XG4gIHZhciBQbGF5ZXJNZXNzYWdlID0ge1xuICAgICAgQURfU0tJUFBFRDogJ1BsYXllcjphZFNraXBwZWQnLFxuICAgICAgQURfU1RPUFBFRDogJ1BsYXllcjphZFN0b3BwZWQnLFxuICAgICAgRkFUQUxfRVJST1I6ICdQbGF5ZXI6ZmF0YWxFcnJvcicsXG4gICAgICBJTklUOiAnUGxheWVyOmluaXQnLFxuICAgICAgLy8gQlBLXG4gICAgICBLRVlfRE9XTjogJ1BsYXllcjprZXlEb3duJyxcbiAgICAgIExPRzogJ1BsYXllcjpsb2cnLFxuICAgICAgUkVTSVpFOiAnUGxheWVyOnJlc2l6ZScsXG4gICAgICBTVEFSVF9DUkVBVElWRTogJ1BsYXllcjpzdGFydENyZWF0aXZlJyxcbiAgfTtcbiAgdmFyIFZpZGVvRXZlbnQgPSB7XG4gICAgICBEVVJBVElPTl9DSEFOR0U6ICdkdXJhdGlvbmNoYW5nZScsXG4gICAgICBFTkRFRDogJ2VuZGVkJyxcbiAgICAgIEVSUk9SOiAnZXJyb3InLFxuICAgICAgUEFVU0U6ICdwYXVzZScsXG4gICAgICBQTEFZOiAncGxheScsXG4gICAgICBQTEFZSU5HOiAncGxheWluZycsXG4gICAgICBTRUVLRUQ6ICdzZWVrZWQnLFxuICAgICAgU0VFS0lORzogJ3NlZWtpbmcnLFxuICAgICAgU1RBTExFRDogJ3N0YWxsZWQnLFxuICAgICAgVElNRV9VUERBVEU6ICd0aW1ldXBkYXRlJyxcbiAgICAgIFZPTFVNRV9DSEFOR0U6ICd2b2x1bWVjaGFuZ2UnLFxuICB9O1xuICAvKiogTWVzc2FnZXMgZnJvbSB0aGUgY3JlYXRpdmUgKi9cbiAgdmFyIENyZWF0aXZlTWVzc2FnZSA9IHtcbiAgICAgIENMSUNLX1RIUlU6ICdDcmVhdGl2ZTpjbGlja1RocnUnLFxuICAgICAgRVhQQU5EX05PTkxJTkVBUjogJ0NyZWF0aXZlOmV4cGFuZE5vbmxpbmVhcicsXG4gICAgICBDT0xMQVBTRV9OT05MSU5FQVI6ICdDcmVhdGl2ZTpjb2xsYXBzZU5vbmxpbmVhcicsXG4gICAgICBGQVRBTF9FUlJPUjogJ0NyZWF0aXZlOmZhdGFsRXJyb3InLFxuICAgICAgR0VUX01FRElBX1NUQVRFOiAnQ3JlYXRpdmU6Z2V0TWVkaWFTdGF0ZScsXG4gICAgICBMT0c6ICdDcmVhdGl2ZTpsb2cnLFxuICAgICAgUkVBRFk6ICdDcmVhdGl2ZTpSZWFkeScsXG4gICAgICBSRVBPUlRfVFJBQ0tJTkc6ICdDcmVhdGl2ZTpyZXBvcnRUcmFja2luZycsXG4gICAgICBSRVFVRVNUX0ZVTExfU0NSRUVOOiAnQ3JlYXRpdmU6cmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgUkVRVUVTVF9TS0lQOiAnQ3JlYXRpdmU6cmVxdWVzdFNraXAnLFxuICAgICAgUkVRVUVTVF9TVE9QOiAnQ3JlYXRpdmU6cmVxdWVzdFN0b3AnLFxuICAgICAgUkVRVUVTVF9QQVVTRTogJ0NyZWF0aXZlOnJlcXVlc3RQYXVzZScsXG4gICAgICBSRVFVRVNUX1BMQVk6ICdDcmVhdGl2ZTpyZXF1ZXN0UGxheScsXG4gICAgICBSRVFVRVNUX1JFU0laRTogJ0NyZWF0aXZlOnJlcXVlc3RSZXNpemUnLFxuICAgICAgUkVRVUVTVF9WT0xVTUU6ICdDcmVhdGl2ZTpyZXF1ZXN0Vm9sdW1lJyxcbiAgICAgIFJFUVVFU1RfVFJBQ0tJTkc6ICdDcmVhdGl2ZTpyZXBvcnRUcmFja2luZycsXG4gICAgICBSRVFVRVNUX0NIQU5HRV9BRF9EVVJBVElPTjogJ0NyZWF0aXZlOnJlcXVlc3RDaGFuZ2VBZER1cmF0aW9uJyxcbiAgICAgIFJFUVVFU1RfVklERU9fTE9DQVRJT046ICdDcmVhdGl2ZTpyZXF1ZXN0VmlkZW9Mb2NhdGlvbidcbiAgfTtcbiAgLyoqXG4gICAqIFRoZXNlIG1lc3NhZ2VzIHJlcXVpcmUgYSByZXNwb25zZSAoZWl0aGVyIHJlc29sdmUgb3IgcmVqZWN0KS5cbiAgICogQWxsIG90aGVyIG1lc3NhZ2VzIGRvIG5vdCByZXF1aXJlIGEgcmVzcG9uc2UgYW5kIGFyZSBpbmZvcm1hdGlvbiBvbmx5LlxuICAgKi9cbiAgdmFyIE1lc3NhZ2VzV2l0aFJlc3BvbnNlID0gW1xuICAgICAgQ3JlYXRpdmVNZXNzYWdlLkNMSUNLX1RIUlUsXG4gICAgICBDcmVhdGl2ZU1lc3NhZ2UuR0VUX01FRElBX1NUQVRFLFxuICAgICAgQ3JlYXRpdmVNZXNzYWdlLlJFQURZLFxuICAgICAgQ3JlYXRpdmVNZXNzYWdlLlJFUE9SVF9UUkFDS0lORyxcbiAgICAgIENyZWF0aXZlTWVzc2FnZS5SRVFVRVNUX0NIQU5HRV9BRF9EVVJBVElPTixcbiAgICAgIENyZWF0aXZlTWVzc2FnZS5SRVFVRVNUX0ZVTExfU0NSRUVOLFxuICAgICAgQ3JlYXRpdmVNZXNzYWdlLlJFUVVFU1RfUEFVU0UsXG4gICAgICBDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9QTEFZLFxuICAgICAgQ3JlYXRpdmVNZXNzYWdlLlJFUVVFU1RfUkVTSVpFLFxuICAgICAgQ3JlYXRpdmVNZXNzYWdlLlJFUVVFU1RfU0tJUCxcbiAgICAgIENyZWF0aXZlTWVzc2FnZS5SRVFVRVNUX1NUT1AsXG4gICAgICBDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9WSURFT19MT0NBVElPTixcbiAgICAgIENyZWF0aXZlTWVzc2FnZS5SRVFVRVNUX1ZPTFVNRSxcbiAgICAgIFBsYXllck1lc3NhZ2UuQURfU0tJUFBFRCxcbiAgICAgIFBsYXllck1lc3NhZ2UuQURfU1RPUFBFRCxcbiAgICAgIFBsYXllck1lc3NhZ2UuRkFUQUxfRVJST1IsXG4gICAgICBQbGF5ZXJNZXNzYWdlLklOSVQsXG4gICAgICBQbGF5ZXJNZXNzYWdlLlNUQVJUX0NSRUFUSVZFLFxuICAgICAgUHJvdG9jb2xNZXNzYWdlLkNSRUFURV9TRVNTSU9OLFxuICBdO1xuICAvLyBBIGxpc3Qgb2YgZXJyb3JzIHRoZSBjcmVhdGl2ZSBtaWdodCBzZW5kIHRvIHRoZSBwbGF5ZXIuXG4gIHZhciBDcmVhdGl2ZUVycm9yQ29kZSA9IHtcbiAgICAgIFVOU1BFQ0lGSUVEOiAxMTAwLFxuICAgICAgQ0FOTk9UX0xPQURfUkVTT1VSQ0U6IDExMDEsXG4gICAgICBQTEFZQkFDS19BUkVBX1VOVVNBQkxFOiAxMTAyLFxuICAgICAgSU5DT1JSRUNUX1ZFUlNJT046IDExMDMsXG4gICAgICBURUNITklDQUxfRVJST1I6IDExMDQsXG4gICAgICBFWFBBTkRfTk9UX1BPU1NJQkxFOiAxMTA1LFxuICAgICAgUEFVU0VfTk9UX0hPTk9SRUQ6IDExMDYsXG4gICAgICBQTEFZTU9ERV9OT1RfQURFUVVBVEU6IDExMDcsXG4gICAgICBDUkVBVElWRV9JTlRFUk5BTF9FUlJPUjogMTEwOCxcbiAgICAgIERFVklDRV9OT1RfU1VQUE9SVEVEOiAxMTA5LFxuICAgICAgTUVTU0FHRVNfTk9UX0ZPTExPV0lOR19TUEVDOiAxMTEwLFxuICAgICAgUExBWUVSX1JFU1BPTlNFX1RJTUVPVVQ6IDExMTEsXG4gIH07XG4gIC8vIEEgbGlzdCBvZiBlcnJvcnMgdGhlIHBsYXllciBtaWdodCBzZW5kIHRvIHRoZSBjcmVhdGl2ZS5cbiAgdmFyIFBsYXllckVycm9yQ29kZSA9IHtcbiAgICAgIFVOU1BFQ0lGSUVEOiAxMjAwLFxuICAgICAgV1JPTkdfVkVSU0lPTjogMTIwMSxcbiAgICAgIFVOU1VQUE9SVEVEX1RJTUU6IDEyMDIsXG4gICAgICBVTlNVUFBPUlRFRF9GVU5DVElPTkFMSVRZX1JFUVVFU1Q6IDEyMDMsXG4gICAgICBVTlNVUFBPUlRFRF9BQ1RJT05TOiAxMjA0LFxuICAgICAgUE9TVE1FU1NBR0VfQ0hBTk5FTF9PVkVSTE9BREVEOiAxMjA1LFxuICAgICAgVklERU9fQ09VTERfTk9UX0xPQUQ6IDEyMDYsXG4gICAgICBWSURFT19USU1FX09VVDogMTIwNyxcbiAgICAgIFJFU1BPTlNFX1RJTUVPVVQ6IDEyMDgsXG4gICAgICBNRURJQV9OT1RfU1VQUE9SVEVEOiAxMjA5LFxuICAgICAgU1BFQ19OT1RfRk9MTE9XRURfT05fSU5JVDogMTIxMCxcbiAgICAgIFNQRUNfTk9UX0ZPTExPV0VEX09OX01FU1NBR0VTOiAxMjExLFxuICB9O1xuICAvLyBBIGxpc3Qgb2YgcmVhc29ucyBhIHBsYXllciBjb3VsZCBzdG9wIHRoZSBhZC5cbiAgdmFyIFN0b3BDb2RlID0ge1xuICAgICAgVU5TUEVDSUZJRUQ6IDAsXG4gICAgICBVU0VSX0lOSVRJQVRFRDogMSxcbiAgICAgIE1FRElBX1BMQVlCQUNLX0NPTVBMRVRFOiAyLFxuICAgICAgUExBWUVSX0lOSVRBVEVEOiAzLFxuICAgICAgQ1JFQVRJVkVfSU5JVElBVEVEOiA0LFxuICAgICAgTk9OX0xJTkVBUl9EVVJBVElPTl9DT01QTEVURTogNSxcbiAgfTtcbiAgdmFyIFNraXBwYWJsZVN0YXRlO1xuICAoZnVuY3Rpb24gKFNraXBwYWJsZVN0YXRlKSB7XG4gICAgICBTa2lwcGFibGVTdGF0ZVtcIlBMQVlFUl9IQU5ETEVTXCJdID0gXCJwbGF5ZXJIYW5kbGVzXCI7XG4gICAgICBTa2lwcGFibGVTdGF0ZVtcIkFEX0hBTkRMRVNcIl0gPSBcImFkSGFuZGxlc1wiO1xuICAgICAgU2tpcHBhYmxlU3RhdGVbXCJOT1RfU0tJUFBBQkxFXCJdID0gXCJub3RTa2lwcGFibGVcIjtcbiAgfSkoU2tpcHBhYmxlU3RhdGUgfHwgKFNraXBwYWJsZVN0YXRlID0ge30pKTtcbiAgdmFyIE5hdmlnYXRpb25TdXBwb3J0O1xuICAoZnVuY3Rpb24gKE5hdmlnYXRpb25TdXBwb3J0KSB7XG4gICAgICBOYXZpZ2F0aW9uU3VwcG9ydFtcIkFEX0hBTkRMRVNcIl0gPSBcImFkSGFuZGxlc1wiO1xuICAgICAgTmF2aWdhdGlvblN1cHBvcnRbXCJQTEFZRVJfSEFORExFU1wiXSA9IFwicGxheWVySGFuZGxlc1wiO1xuICAgICAgTmF2aWdhdGlvblN1cHBvcnRbXCJOT1RfU1VQUE9SVEVEXCJdID0gXCJub3RTdXBwb3J0ZWRcIjtcbiAgfSkoTmF2aWdhdGlvblN1cHBvcnQgfHwgKE5hdmlnYXRpb25TdXBwb3J0ID0ge30pKTtcbiAgdmFyIENsb3NlQnV0dG9uU3VwcG9ydDtcbiAgKGZ1bmN0aW9uIChDbG9zZUJ1dHRvblN1cHBvcnQpIHtcbiAgICAgIENsb3NlQnV0dG9uU3VwcG9ydFtcIkFEX0hBTkRMRVNcIl0gPSBcImFkSGFuZGxlc1wiO1xuICAgICAgQ2xvc2VCdXR0b25TdXBwb3J0W1wiUExBWUVSX0hBTkRMRVNcIl0gPSBcInBsYXllckhhbmRsZXNcIjtcbiAgfSkoQ2xvc2VCdXR0b25TdXBwb3J0IHx8IChDbG9zZUJ1dHRvblN1cHBvcnQgPSB7fSkpO1xuICAvLyAjZW5kcmVnaW9uIENSRUFUSVZFIE1FU1NBR0VTIEFSR1NcblxuICB2YXIgU0lNSURfTlMgPSAnU0lNSUQ6JztcbiAgLyoqXG4gICAqIENvbnRhaW5zIGxvZ2ljIGZvciBzZW5kaW5nIG1lc2FnZXMgYmV0d2VlbiB0aGUgU0lNSUQgY3JlYXRpdmUgYW5kIHRoZSBwbGF5ZXIuXG4gICAqIE5vdGU6IFNvbWUgYnJvd3NlcnMgZG8gbm90IHN1cHBvcnQgcHJvbWlzZXMgYW5kIGEgbW9yZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvblxuICAgKiAgICAgICBzaG91bGQgY29uc2lkZXIgdXNpbmcgYSBwb2x5ZmlsbC5cbiAgICovXG4gIHZhciBTaW1pZENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICNlbmRyZWdpb24gTUVNQkVSU1xuICAgICAgLy8gI3JlZ2lvbiBDT05TVFJVQ1RPUlxuICAgICAgZnVuY3Rpb24gU2ltaWRDb21wb25lbnQodHlwZSkge1xuICAgICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICB0aGlzLl9zZXNzaW9uSWQgPSAnJztcbiAgICAgICAgICB0aGlzLl9uZXh0TWVzc2FnZUlkID0gMTtcbiAgICAgICAgICB0aGlzLl90YXJnZXQgPSB3aW5kb3cucGFyZW50O1xuICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlTGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5yZWNlaXZlTWVzc2FnZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyAjZW5kcmVnaW9uIENPTlNUUlVDVE9SXG4gICAgICAvLyAjcmVnaW9uIFBVQkxJQyBNRVRIT0RTXG4gICAgICAvKipcbiAgICAgICAqIFNlbmRzIGEgbWVzc2FnZSB1c2luZyBwb3N0IG1lc3NhZ2UuXG4gICAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvciByZWplY3QgYWZ0ZXIgdGhlIG1lc3NhZ2UgcmVjZWl2ZXMgYSByZXNwb25zZS5cbiAgICAgICAqIEBwYXJhbSBtZXNzYWdlVHlwZSBUaGUgbmFtZSBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSBtZXNzYWdlQXJncyBUaGUgYXJndW1lbnRzIGZvciB0aGUgbWVzc2FnZSwgbWF5IGJlIG51bGwuXG4gICAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgZnVsZmlsbGVkIHdoZW4gY2xpZW50IHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKi9cbiAgICAgIFNpbWlkQ29tcG9uZW50LnByb3RvdHlwZS5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlVHlwZSwgbWVzc2FnZUFyZ3MpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NJTUlEXVtcIi5jb25jYXQodGhpcy5fdHlwZSwgXCJdIFNcIiksIG1lc3NhZ2VUeXBlLCBtZXNzYWdlQXJncyB8fCB7fSk7XG4gICAgICAgICAgLy8gSW5jcmVtZW50aW5nIGJldHdlZW4gbWVzc2FnZXMga2VlcHMgZWFjaCBtZXNzYWdlIGlkIHVuaXF1ZS5cbiAgICAgICAgICB2YXIgbWVzc2FnZUlkID0gdGhpcy5fbmV4dE1lc3NhZ2VJZCsrO1xuICAgICAgICAgIC8vIE9ubHkgY3JlYXRlIHNlc3Npb24gZG9lcyBub3QgbmVlZCB0byBiZSBpbiB0aGUgU0lNSUQgbmFtZSBzcGFjZVxuICAgICAgICAgIC8vIGJlY2F1c2UgaXQgaXMgcGFydCBvZiB0aGUgcHJvdG9jb2wuXG4gICAgICAgICAgdmFyIG5hbWVTcGFjZWRNZXNzYWdlID0gbWVzc2FnZVR5cGUgPT09IFByb3RvY29sTWVzc2FnZS5DUkVBVEVfU0VTU0lPTiA/IG1lc3NhZ2VUeXBlIDogU0lNSURfTlMgKyBtZXNzYWdlVHlwZTtcbiAgICAgICAgICAvLyBUaGUgbWVzc2FnZSBvYmplY3QgYXMgZGVmaW5lZCBieSB0aGUgU0lNSUQgc3BlYy5cbiAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgc2Vzc2lvbklkOiB0aGlzLl9zZXNzaW9uSWQsXG4gICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICB0eXBlOiBuYW1lU3BhY2VkTWVzc2FnZSxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBhcmdzOiBtZXNzYWdlQXJnc1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKE1lc3NhZ2VzV2l0aFJlc3BvbnNlLmluY2x1ZGVzKG1lc3NhZ2VUeXBlKSkge1xuICAgICAgICAgICAgICAvLyBJZiB0aGUgbWVzc2FnZSByZXF1aXJlcyBhIGNhbGxiYWNrIHRoaXMgY29kZSB3aWxsIHNldFxuICAgICAgICAgICAgICAvLyB1cCBhIHByb21pc2UgdGhhdCB3aWxsIGNhbGwgcmVzb2x2ZSBvciByZWplY3Qgd2l0aCBpdHMgcGFyYW1ldGVycy5cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLl9hZGRSZXNwb25zZUxpc3RlbmVyKG1lc3NhZ2VJZCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgIF90aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksICcqJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBIGRlZmF1bHQgcHJvbWlzZSB3aWxsIGp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAvLyBJdCBpcyBhc3N1bWVkIG5vIG9uZSB3b3VsZCBsaXN0ZW4gdG8gdGhlc2UgcHJvbWlzZXMsIGJ1dCBpZiB0aGV5IGRvIGl0IHdpbGwgXCJqdXN0IHdvcmtcIi5cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICBfdGhpcy5fdGFyZ2V0LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCAnKicpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBtZXNzYWdlLlxuICAgICAgICovXG4gICAgICBTaW1pZENvbXBvbmVudC5wcm90b3R5cGUuYWRkTWVzc2FnZUxpc3RlbmVyID0gZnVuY3Rpb24gKG1lc3NhZ2VUeXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzLmhhcyhtZXNzYWdlVHlwZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldChtZXNzYWdlVHlwZSwgW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZ2V0KG1lc3NhZ2VUeXBlKS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0L3JldmVydCB0aGlzIHByb3RvY29sIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuICAgICAgICovXG4gICAgICBTaW1pZENvbXBvbmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5fc2Vzc2lvbklkID0gJyc7XG4gICAgICAgICAgdGhpcy5fbmV4dE1lc3NhZ2VJZCA9IDE7XG4gICAgICAgICAgLy8gVE9ETzogUGVyaGFwcyB3ZSBzaG91bGQgcmVqZWN0IGFsbCBhc3NvY2lhdGVkIHByb21pc2VzLlxuICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlTGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB9O1xuICAgICAgLy8gI2VuZHJlZ2lvbiBQVUJMSUMgTUVUSE9EU1xuICAgICAgLy8gI3JlZ2lvbiBQUk9URUNURUQgTUVUSE9EU1xuICAgICAgU2ltaWRDb21wb25lbnQucHJvdG90eXBlLnNldE1lc3NhZ2VUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgfTtcbiAgICAgIFNpbWlkQ29tcG9uZW50LnByb3RvdHlwZS5yZWNlaXZlTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQgfHwgIWV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gZGF0YSBpbiB0aGUgZXZlbnQgdGhpcyBpcyBub3QgYSBTSU1JRCBtZXNzYWdlLlxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzZXNzaW9uSWQgPSBtZXNzYWdlLnNlc3Npb25JZDtcbiAgICAgICAgICB2YXIgdHlwZSA9IG1lc3NhZ2UudHlwZTtcbiAgICAgICAgICAvLyBBIHNlc3Npb25JZCBpcyB2YWxpZCBpbiBvbmUgb2YgdHdvIGNhc2VzOlxuICAgICAgICAgIC8vIDEuIEl0IGlzIG5vdCBzZXQgYW5kIHRoZSBtZXNzYWdlIHR5cGUgaXMgY3JlYXRlU2Vzc2lvbi5cbiAgICAgICAgICAvLyAyLiBUaGUgc2Vzc2lvbiBpZHMgbWF0Y2ggZXhhY3RseS5cbiAgICAgICAgICB2YXIgaXNDcmVhdGluZ1Nlc3Npb24gPSB0aGlzLl9zZXNzaW9uSWQgPT09ICcnICYmIHR5cGUgPT09IFByb3RvY29sTWVzc2FnZS5DUkVBVEVfU0VTU0lPTjtcbiAgICAgICAgICB2YXIgaXNTZXNzaW9uSWRNYXRjaCA9IHRoaXMuX3Nlc3Npb25JZCA9PT0gc2Vzc2lvbklkO1xuICAgICAgICAgIHZhciB2YWxpZFNlc3Npb25JZCA9IGlzQ3JlYXRpbmdTZXNzaW9uIHx8IGlzU2Vzc2lvbklkTWF0Y2g7XG4gICAgICAgICAgaWYgKCF2YWxpZFNlc3Npb25JZCB8fCB0eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gSWdub3JlIGludmFsaWQgbWVzc2FnZXMuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVGhlcmUgYXJlIDIgdHlwZXMgb2YgbWVzc2FnZXMgdG8gaGFuZGxlOlxuICAgICAgICAgIC8vIDEuIFByb3RvY29sIG1lc3NhZ2VzIChsaWtlIHJlc29sdmUsIHJlamVjdCBhbmQgY3JlYXRlU2Vzc2lvbilcbiAgICAgICAgICAvLyAyLiBNZXNzYWdlcyBzdGFydGluZyB3aXRoIFNJTUlEOlxuICAgICAgICAgIC8vIEFsbCBvdGhlciBtZXNzYWdlcyBhcmUgaWdub3JlZC5cbiAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhQcm90b2NvbE1lc3NhZ2UpLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVByb3RvY29sTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodHlwZS5zdGFydHNXaXRoKFNJTUlEX05TKSkge1xuICAgICAgICAgICAgICAvLyBSZW1vdmUgU0lNSUQ6IGZyb20gdGhlIGZyb250IG9mIHRoZSBtZXNzYWdlIHNvIHdlIGNhbiBjb21wYXJlIHRoZW0gd2l0aCB0aGUgbWFwLlxuICAgICAgICAgICAgICBtZXNzYWdlLnR5cGUgPSB0eXBlLnN1YnN0cmluZyg2KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbU0lNSURdW1wiLmNvbmNhdCh0aGlzLl90eXBlLCBcIl0gUlwiKSwgbWVzc2FnZS50eXBlLCBtZXNzYWdlLmFyZ3MgfHwge30pO1xuICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzLmdldChtZXNzYWdlLnR5cGUpO1xuICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICBTaW1pZENvbXBvbmVudC5wcm90b3R5cGUucmVzb2x2ZU1lc3NhZ2UgPSBmdW5jdGlvbiAoaW5jb21pbmdNZXNzYWdlLCBvdXRnb2luZ0FyZ3MpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZUlkID0gdGhpcy5fbmV4dE1lc3NhZ2VJZCsrO1xuICAgICAgICAgIHZhciBhcmdzID0ge1xuICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGluY29taW5nTWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgIHZhbHVlOiBvdXRnb2luZ0FyZ3MsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgc2Vzc2lvbklkOiB0aGlzLl9zZXNzaW9uSWQsXG4gICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICB0eXBlOiBQcm90b2NvbE1lc3NhZ2UuUkVTT0xWRSxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5fdGFyZ2V0LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCAnKicpO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogUmVqZWN0cyBhbiBpbmNvbWluZyBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHshT2JqZWN0fSBpbmNvbWluZ01lc3NhZ2UgdGhlIG1lc3NhZ2UgdGhhdCBpcyBiZWluZyByZXNvbHZlZC5cbiAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gb3V0Z29pbmdBcmdzIEFueSBhcmd1bWVudHMgdGhhdCBhcmUgcGFydCBvZiB0aGUgcmVzb2x1dGlvbi5cbiAgICAgICAqL1xuICAgICAgU2ltaWRDb21wb25lbnQucHJvdG90eXBlLnJlamVjdE1lc3NhZ2UgPSBmdW5jdGlvbiAoaW5jb21pbmdNZXNzYWdlLCBvdXRnb2luZ0FyZ3MpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZUlkID0gdGhpcy5fbmV4dE1lc3NhZ2VJZCsrO1xuICAgICAgICAgIHZhciBhcmdzID0ge1xuICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGluY29taW5nTWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgIHZhbHVlOiBvdXRnb2luZ0FyZ3MsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgc2Vzc2lvbklkOiB0aGlzLl9zZXNzaW9uSWQsXG4gICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICB0eXBlOiBQcm90b2NvbE1lc3NhZ2UuUkVKRUNULFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksICcqJyk7XG4gICAgICB9O1xuICAgICAgLy8gI2VuZHJlZ2lvbiBQUk9URUNURUQgTUVUSE9EU1xuICAgICAgLy8gI3JlZ2lvbiBQUklWQVRFIE1FVEhPRFNcbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB1cCBhIGxpc3RlbmVyIGZvciByZXNwb25zZSByZXNvbHZlL3JlamVjdCBtZXNzYWdlcy5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIFNpbWlkQ29tcG9uZW50LnByb3RvdHlwZS5fYWRkUmVzcG9uc2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChtZXNzYWdlSWQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gUHJvdG9jb2xNZXNzYWdlLlJFU09MVkUpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuYXJncyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UudHlwZSA9PT0gUHJvdG9jb2xNZXNzYWdlLlJFSkVDVCkge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLmFyZ3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLl9yZXNwb25zZUxpc3RlbmVycy5zZXQobWVzc2FnZUlkLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgaW5jb21pbmcgbWVzc2FnZXMgc3BlY2lmaWNhbGx5IGZvciB0aGUgcHJvdG9jb2xcbiAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gZGF0YSBEYXRhIHBhc3NlZCBiYWNrIGZyb20gdGhlIG1lc3NhZ2VcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIFNpbWlkQ29tcG9uZW50LnByb3RvdHlwZS5faGFuZGxlUHJvdG9jb2xNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFByb3RvY29sTWVzc2FnZS5DUkVBVEVfU0VTU0lPTjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25JZCA9IG1lc3NhZ2Uuc2Vzc2lvbklkO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMuZ2V0KG1lc3NhZ2UudHlwZSk7XG4gICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHdpdGggdGhlIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcihtZXNzYWdlKTsgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBQcm90b2NvbE1lc3NhZ2UuUkVTT0xWRTpcbiAgICAgICAgICAgICAgLy8gaW50ZW50aW9uYWwgZmFsbHRocm91Z2hcbiAgICAgICAgICAgICAgY2FzZSBQcm90b2NvbE1lc3NhZ2UuUkVKRUNUOlxuICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBtZXNzYWdlLmFyZ3M7XG4gICAgICAgICAgICAgICAgICB2YXIgY29ycmVsYXRpbmdJZCA9IGFyZ3MubWVzc2FnZUlkO1xuICAgICAgICAgICAgICAgICAgdmFyIHJlc29sdXRpb25GdW5jdGlvbiA9IHRoaXMuX3Jlc3BvbnNlTGlzdGVuZXJzLmdldChjb3JyZWxhdGluZ0lkKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHV0aW9uRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZXhpc3RzIGNhbGwgaXQgb25jZSBvbmx5LlxuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25GdW5jdGlvbihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNwb25zZUxpc3RlbmVycy5kZWxldGUoY29ycmVsYXRpbmdJZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFNpbWlkQ29tcG9uZW50O1xuICB9KCkpO1xuICAvLyAjZW5kcmVnaW9uIFBSSVZBVEUgTUVUSE9EU1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cbiAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG4gIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG4gIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG4gIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIC8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG4gIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIH07XG5cbiAgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgICB9XG4gIH1cblxuICB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbiAgfTtcblxuICAvKlxuICAqIEEgc3ViY2xhc3Mgb2YgYSBTSU1JRCBhZCB0aGF0IGltcGxlbWVudHMgZnVuY3Rpb25hbGl0eSB0aGF0IHdpbGwgYmUgdGhlIHNhbWUgZm9yIGFsbCBzaW1pZCBhZHMuXG4gICovXG4gIHZhciBTaW1pZENyZWF0aXZlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgX19leHRlbmRzKFNpbWlkQ3JlYXRpdmUsIF9zdXBlcik7XG4gICAgICAvLyAjZW5kcmVnaW9uIE1FTUJFUlNcbiAgICAgIGZ1bmN0aW9uIFNpbWlkQ3JlYXRpdmUoKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ0NyZWF0aXZlJykgfHwgdGhpcztcbiAgICAgICAgICBfdGhpcy5zaW1pZFZlcnNpb24gPSAnJztcbiAgICAgICAgICBfdGhpcy5fYWRkTWVzc2FnZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIG5ldyBzZXNzaW9uLlxuICAgICAgICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgYnkgdGhlIENyZWF0aXZlIHRvIGluaXRpYWxpemUgdGhlIHNlc3Npb24uXG4gICAgICAgKiBAcGFyYW0gc2Vzc2lvbklkXG4gICAgICAgKi9cbiAgICAgIFNpbWlkQ3JlYXRpdmUucHJvdG90eXBlLmNyZWF0ZVNlc3Npb24gPSBmdW5jdGlvbiAoc2Vzc2lvbklkKSB7XG4gICAgICAgICAgdGhpcy5fc2Vzc2lvbklkID0gc2Vzc2lvbklkIHx8IHRoaXMuX2dlbmVyYXRlU2Vzc2lvbklkKCk7XG4gICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShQcm90b2NvbE1lc3NhZ2UuQ1JFQVRFX1NFU1NJT04pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvbiBjcmVhdGVkLicpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhpcyBldmVyIGhhcHBlbnMsIGl0IG1heSBiZSBpbXBvc3NpYmxlIGZvciB0aGUgYWQgdG8gZXZlciBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwbGF5ZXIuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uIGNyZWF0aW9uIHdhcyByZWplY3RlZC4nKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBTaW1pZENyZWF0aXZlLnByb3RvdHlwZS5fYWRkTWVzc2FnZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoUGxheWVyTWVzc2FnZSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgX3RoaXMuYWRkTWVzc2FnZUxpc3RlbmVyKHZhbHVlLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25QbGF5ZXJNZXNzYWdlKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBPYmplY3QudmFsdWVzKE1lZGlhTWVzc2FnZSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgX3RoaXMuYWRkTWVzc2FnZUxpc3RlbmVyKHZhbHVlLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25NZWRpYU1lc3NhZ2UobWVzc2FnZSk7IH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIC8vICNyZWdpb24gUFJPVEVDVEVEIE1FVEhPRFNcbiAgICAgIFNpbWlkQ3JlYXRpdmUucHJvdG90eXBlLm9uUGxheWVyTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgdmFyIHJlamVjdEFyZ3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJNZXNzYWdlLkFEX1NUT1BQRUQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJNZXNzYWdlLkFEX1NLSVBQRUQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJNZXNzYWdlLkZBVEFMX0VSUk9SOlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgUGxheWVyTWVzc2FnZS5JTklUOlxuICAgICAgICAgICAgICAgICAgcmVqZWN0QXJncyA9IHRoaXMuX29uUGxheWVySW5pdChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFBsYXllck1lc3NhZ2UuS0VZX0RPV046XG4gICAgICAgICAgICAgICAgICB0aGlzLm9uUGxheWVyS2V5RG93bihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFBsYXllck1lc3NhZ2UuTE9HOlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgUGxheWVyTWVzc2FnZS5SRVNJWkU6XG4gICAgICAgICAgICAgICAgICByZWplY3RBcmdzID0gdGhpcy5fb25QbGF5ZXJSZXNpemUobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJNZXNzYWdlLlNUQVJUX0NSRUFUSVZFOlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChNZXNzYWdlc1dpdGhSZXNwb25zZS5pbmNsdWRlcyhtZXNzYWdlLnR5cGUpKSB7XG4gICAgICAgICAgICAgIGlmIChyZWplY3RBcmdzKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlamVjdE1lc3NhZ2UobWVzc2FnZSwgcmVqZWN0QXJncyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFNpbWlkQ3JlYXRpdmUucHJvdG90eXBlLm9uTWVkaWFNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIE1lZGlhTWVzc2FnZS5EVVJBVElPTl9DSEFOR0U6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBNZWRpYU1lc3NhZ2UuRU5ERUQ6XG4gICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvU3RhdGUuZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgTWVkaWFNZXNzYWdlLkVSUk9SOlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgTWVkaWFNZXNzYWdlLlBBVVNFOlxuICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1N0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBNZWRpYU1lc3NhZ2UuUExBWTpcbiAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9TdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIE1lZGlhTWVzc2FnZS5QTEFZSU5HOlxuICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1N0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgTWVkaWFNZXNzYWdlLlNFRUtFRDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIE1lZGlhTWVzc2FnZS5TRUVLSU5HOlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgTWVkaWFNZXNzYWdlLlNUQUxMRUQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBNZWRpYU1lc3NhZ2UuVElNRV9VUERBVEU6XG4gICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvU3RhdGUuY3VycmVudFRpbWUgPSBtZXNzYWdlLmFyZ3MuY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBNZWRpYU1lc3NhZ2UuVk9MVU1FX0NIQU5HRTpcbiAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gbWVzc2FnZS5hcmdzO1xuICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1N0YXRlLnZvbHVtZSA9IGFyZ3Mudm9sdW1lO1xuICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1N0YXRlLm11dGVkID0gYXJncy5tdXRlZDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBDcmVhdGl2ZXMgY2FuIG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMgdG8gYWRkIG1lc3NhZ2UgaGFuZGxlclxuICAgICAgLy8gTm90ZTogQ3JlYXRpdmVzIHNvdXJjZSBjb2RlIGNhbiBiZSB3cml0dGVuIGluIGphdmFzY3JpcHQsIGluIHdoaWNoIG1ldGhvZHMgaW5oZXJpdGFuY2UgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgU2ltaWRDcmVhdGl2ZS5wcm90b3R5cGUub25QbGF5ZXJJbml0ID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfTtcbiAgICAgIFNpbWlkQ3JlYXRpdmUucHJvdG90eXBlLm9uUGxheWVyS2V5RG93biA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG4gICAgICBTaW1pZENyZWF0aXZlLnByb3RvdHlwZS5vblBsYXllclJlc2l6ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG4gICAgICBTaW1pZENyZWF0aXZlLnByb3RvdHlwZS5zZW5kUmVxdWVzdFJlc2l6ZSA9IGZ1bmN0aW9uIChtZWRpYURpbWVuc2lvbnMsIGNyZWF0aXZlRGltZW5zaW9ucykge1xuICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kTWVzc2FnZShDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9SRVNJWkUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYURpbWVuc2lvbnM6IG1lZGlhRGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGl2ZURpbWVuc2lvbnM6IGNyZWF0aXZlRGltZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudmlyb25tZW50RGF0YS52aWRlb0RpbWVuc2lvbnMgPSBtZWRpYURpbWVuc2lvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnREYXRhLmNyZWF0aXZlRGltZW5zaW9ucyA9IGNyZWF0aXZlRGltZW5zaW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAvLyAjZW5kcmVnaW9uIFBST1RFQ1RFRCBNRVRIT0RTXG4gICAgICAvLyAjcmVnaW9uIFBSSVZBVEUgTUVUSE9EU1xuICAgICAgU2ltaWRDcmVhdGl2ZS5wcm90b3R5cGUuX29uUGxheWVySW5pdCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBtZXNzYWdlLmFyZ3M7XG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudERhdGEgPSBhcmdzLmVudmlyb25tZW50RGF0YTtcbiAgICAgICAgICB0aGlzLmNyZWF0aXZlRGF0YSA9IGFyZ3MuY3JlYXRpdmVEYXRhO1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uUGxheWVySW5pdChtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgICBTaW1pZENyZWF0aXZlLnByb3RvdHlwZS5fb25QbGF5ZXJSZXNpemUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgIHZhciBhcmdzID0gbWVzc2FnZS5hcmdzO1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnREYXRhLmNyZWF0aXZlRGltZW5zaW9ucyA9IGFyZ3MuY3JlYXRpdmVEaW1lbnNpb25zO1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnREYXRhLnZpZGVvRGltZW5zaW9ucyA9IGFyZ3MudmlkZW9EaW1lbnNpb25zO1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnREYXRhLmZ1bGxzY3JlZW4gPSBhcmdzLmZ1bGxzY3JlZW47XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25QbGF5ZXJSZXNpemUobWVzc2FnZSk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHRoZSBzZXNzaW9uIElELCB0aGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgb24gc2Vzc2lvbiBjcmVhdGlvbi5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIFNpbWlkQ3JlYXRpdmUucHJvdG90eXBlLl9nZW5lcmF0ZVNlc3Npb25JZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhIHJhbmRvbSB2NCBVVUlELiBJbiBhIHY0IFVVSUQsIG9mIHRoZSBmb3JtYXRcbiAgICAgICAgICAvLyB4eHh4eHh4eC14eHh4LU14eHgtTnh4eC14eHh4eHh4eHh4eHgsIGFsbCBiaXRzIGFyZSBzZWxlY3RlZCByYW5kb21seSxcbiAgICAgICAgICAvLyBleGNlcHQgdGhlIGJpdHMgb2YgJ00nLCB3aGljaCBtdXN0IGJlIGVxdWFsIHRvIDQsIGFuZCAnTicsIHdob3NlIGZpcnN0IDJcbiAgICAgICAgICAvLyBtb3N0IHNpZ25pZmljYW50IGJpdHMgbXVzdCBiZSBzZXQgdG8gMTBiLiBTbyBpbiB0b3RhbCBvbmx5IDEyMiBvZiB0aGUgMTI4XG4gICAgICAgICAgLy8gYml0cyBhcmUgcmFuZG9tLiBTZWVcbiAgICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxseV91bmlxdWVfaWRlbnRpZmllciBmb3IgbW9yZS5cbiAgICAgICAgICAvLyBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzIGlzIHByZWZlcnJlZCBvdmVyIGNyeXB0by5yYW5kb21VVUlEIHNpbmNlIGl0XG4gICAgICAgICAgLy8gc3VwcG9ydHMgbXVjaCBvbGRlciBicm93c2VycyBpbmNsdWRpbmcgSUUsIGFuZCBkb2Vzbid0IHJlcXVpcmUgYSBzZWN1cmVcbiAgICAgICAgICAvLyBjb250ZXh0LlxuICAgICAgICAgIC8vIENyZWF0ZSAxMjggcmFuZG9tIGJpdHMgKDgtYml0ICogMTYpLlxuICAgICAgICAgIHZhciByYW5kb20xNlVpbnQ4cyA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb20xNlVpbnQ4cyk7XG4gICAgICAgICAgLy8gU3BsaXQgZWFjaCA4LWJpdCBpbnQgaW50byB0d28gNC1iaXQgaW50cyAoNC1iaXQgKiAzMikuXG4gICAgICAgICAgdmFyIHJhbmRvbTMyVWludDRzID0gQXJyYXkuZnJvbShBcnJheSgzMikua2V5cygpKS5tYXAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgIHZhciBpc0V2ZW4gPSBpbmRleCAlIDIgPT0gMDtcbiAgICAgICAgICAgICAgdmFyIHJhbmRvbVVpbnQ4ID0gcmFuZG9tMTZVaW50OHNbTWF0aC5mbG9vcihpbmRleCAvIDIpXTtcbiAgICAgICAgICAgICAgLy8gUGljayB0aGUgaGlnaCA0IGJpdHMgZm9yIGV2ZW4gaW5kaWNlcywgdGhlIGxvdyA0IGJpdHMgZm9yIG9kZC5cbiAgICAgICAgICAgICAgcmV0dXJuIGlzRXZlbiA/IChyYW5kb21VaW50OCA+PiA0KSA6IChyYW5kb21VaW50OCAmIDE1KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBGaXggdGhlIDEydGggZGlnaXQgdG8gNCBmb3IgdGhlIFVVSUQgdmVyc2lvbi5cbiAgICAgICAgICByYW5kb20zMlVpbnQ0c1sxMl0gPSA0O1xuICAgICAgICAgIC8vIEZpeCB0aGUgMTZ0aCBkaWdpdCdzIDIgaGlnaCBiaXRzIHRvIDEwYiBmb3IgVVVJRCB2YXJpYW50IDEuXG4gICAgICAgICAgcmFuZG9tMzJVaW50NHNbMTZdID0gOCB8IChyYW5kb20zMlVpbnQ0c1sxNl0gJiAzKTtcbiAgICAgICAgICB2YXIgaGV4RGlnaXRzID0gcmFuZG9tMzJVaW50NHMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnRvU3RyaW5nKDE2KTsgfSk7XG4gICAgICAgICAgdmFyIHV1aWRDb21wb25lbnRzID0gW1xuICAgICAgICAgICAgICBoZXhEaWdpdHMuc2xpY2UoMCwgOCkuam9pbignJyksXG4gICAgICAgICAgICAgIGhleERpZ2l0cy5zbGljZSg4LCAxMikuam9pbignJyksXG4gICAgICAgICAgICAgIGhleERpZ2l0cy5zbGljZSgxMiwgMTYpLmpvaW4oJycpLFxuICAgICAgICAgICAgICBoZXhEaWdpdHMuc2xpY2UoMTYsIDIwKS5qb2luKCcnKSxcbiAgICAgICAgICAgICAgaGV4RGlnaXRzLnNsaWNlKDIwKS5qb2luKCcnKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIHZhciB1dWlkID0gdXVpZENvbXBvbmVudHMuam9pbignLScpO1xuICAgICAgICAgIHJldHVybiB1dWlkO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBTaW1pZENyZWF0aXZlO1xuICB9KFNpbWlkQ29tcG9uZW50KSk7XG5cbiAgdmFyIE5PX1JFUVVFU1RFRF9EVVJBVElPTiA9IDA7XG4gIHZhciBVTkxJTUlURURfRFVSQVRJT04gPSAtMjtcbiAgLy8gaW50ZXJmYWNlIEhUTUxFbGVtZW50IHtcbiAgLy8gICByZXF1ZXN0RnVsbHNjcmVlbj86ICgpID0+IFByb21pc2U8dm9pZD5cbiAgLy8gICBtc1JlcXVlc3RGdWxsc2NyZWVuPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAvLyAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAvLyAgIG1velJlcXVlc3RGdWxsU2NyZWVuPzogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICAvLyB9XG4gIC8qKlxuICAgKiBBbGwgdGhlIGxvZ2ljIGZvciBhIHNpbXBsZSBTSU1JRCBwbGF5ZXJcbiAgICovXG4gIHZhciBTaW1pZFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgIF9fZXh0ZW5kcyhTaW1pZFBsYXllciwgX3N1cGVyKTtcbiAgICAgIC8vICNlbmRyZWdpb24gTUVNQkVSU1xuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHVwIHRoZSBjcmVhdGl2ZSBpZnJhbWUgYW5kIHN0YXJ0cyBsaXN0ZW5pbmcgZm9yIG1lc3NhZ2VzIGZyb20gdGhlIGNyZWF0aXZlLlxuICAgICAgICogQHBhcmFtIG1haW5WaWRlbyBUaGUgbWFpbiB2aWRlbyBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0gaXNMaW5lYXJBZCBSZXByZXNlbnRzIGlmIHRoZSBhZCBpcyBhIGxpbmVhciBvbmUuXG4gICAgICAgKiBAcGFyYW0gYWRDb21wbGV0ZSBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gdGhlIGFkIHN0b3BzLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBTaW1pZFBsYXllcihtYWluVmlkZW8sIGNyZWF0aXZlVXJpLCBpc0xpbmVhckFkLCBhZENvbXBsZXRlLCBhZFBhcmFtcywgYWREdXJhdGlvbikge1xuICAgICAgICAgIGlmIChhZENvbXBsZXRlID09PSB2b2lkIDApIHsgYWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgfTsgfVxuICAgICAgICAgIGlmIChhZFBhcmFtcyA9PT0gdm9pZCAwKSB7IGFkUGFyYW1zID0gJyc7IH1cbiAgICAgICAgICBpZiAoYWREdXJhdGlvbiA9PT0gdm9pZCAwKSB7IGFkRHVyYXRpb24gPSBOT19SRVFVRVNURURfRFVSQVRJT047IH1cbiAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnUGxheWVyJykgfHwgdGhpcztcbiAgICAgICAgICBfdGhpcy5fYWRkQ3JlYXRpdmVNZXNzYWdlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgX3RoaXMuX21haW5WaWRlb0VsZW1lbnQgPSBtYWluVmlkZW87XG4gICAgICAgICAgX3RoaXMuX21haW5WaWRlb0RpbWVuc2lvbnMgPSBtYWluVmlkZW8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgX3RoaXMuX2NyZWF0aXZlVXJpID0gY3JlYXRpdmVVcmk7XG4gICAgICAgICAgX3RoaXMuX2FkUGFyYW1zID0gYWRQYXJhbXM7XG4gICAgICAgICAgX3RoaXMuX2lzTGluZWFyQWQgPSBpc0xpbmVhckFkO1xuICAgICAgICAgIF90aGlzLl9hZENvbXBsZXRlID0gYWRDb21wbGV0ZTtcbiAgICAgICAgICAvLyBDb25zaWRlciBtYWluIHZpZGVvIGVsZW1lbnQgcGFyZW50IGFzIGNvbnRhaW5lciBlbGVtZW50IGZvciBpZnJhbWUgYW5kIGFkIHZpZGVvIHBsYXllclxuICAgICAgICAgIF90aGlzLl9wbGF5ZXJDb250YWluZXJFbGVtZW50ID0gX3RoaXMuX21haW5WaWRlb0VsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBfdGhpcy5fYWRWaWRlb0VsZW1lbnQgPSB1bmRlZmluZWQ7IC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkX3ZpZGVvX3BsYXllcicpIGFzIEhUTUxNZWRpYUVsZW1lbnRcbiAgICAgICAgICBfdGhpcy5fc2ltaWRJZnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgX3RoaXMuX25vbkxpbmVhclN0YXJ0VGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBfdGhpcy5fcmVxdWVzdGVkRHVyYXRpb24gPSBhZER1cmF0aW9uO1xuICAgICAgICAgIF90aGlzLl9ub25MaW5lYXJEaW1lbnNpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICAgIF90aGlzLl9kdXJhdGlvbkludGVydmFsID0gTmFOO1xuICAgICAgICAgIF90aGlzLl9hZGRNYWluVmlkZW9FdmVudExpc3RlbmVycygpO1xuICAgICAgICAgIF90aGlzLl9oaWRlQWRQbGF5ZXIoKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLl9vbktleURvd24oZSk7IH0pO1xuICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogSW5pdGlhbGl6ZSBhbmQgbG9hZCBhZC4gVGhpcyBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBhbiBhZCBwbGF5cy5cbiAgICAgICAqIENyZWF0ZXMgYW4gaWZyYW1lIHdpdGggdGhlIGNyZWF0aXZlIGluIGl0LCB0aGVuIHVzZXMgYSBwcm9taXNlIHRvIGNhbGwgaW5pdCBvbiB0aGUgY3JlYXRpdmUgYXMgc29vbiBhcyB0aGUgY3JlYXRpdmUgaW5pdGlhbGl6ZXMgYSBzZXNzaW9uLlxuICAgICAgICovXG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBpZiAoIXRoaXMuX2lzTGluZWFyQWQgJiYgIXRoaXMuX2lzVmFsaWREaW1lbnNpb25zKHRoaXMuX2dldE5vbmxpbmVhckRpbWVuc2lvbnMoKSkpIHtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gcGxheSBhIG5vbi1saW5lYXIgYWQgd2l0aCBkaW1lbnNpb25zIGJpZ2dlciB0aGFuIHRoZSBwbGF5ZXIuIFBsZWFzZSBtb2RpZnkgZGltZW5zaW9ucyB0byBhIHNtYWxsZXIgc2l6ZS4nKVxuICAgICAgICAgIC8vICAgcmV0dXJuXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIEFmdGVyIHRoZSBpZnJhbWUgaXMgY3JlYXRlZCB0aGUgcGxheWVyIHdpbGwgd2FpdCB1bnRpbCB0aGUgYWQgaW5pdGlhbGl6ZXMgdGhlIGNvbW11bmljYXRpb24gY2hhbm5lbC5cbiAgICAgICAgICAvLyBUaGVuIGl0IHdpbGwgY2FsbCBzZW5kSW5pdE1lc3NhZ2UuXG4gICAgICAgICAgLy8gWzJdIC0gQ3JlYXRlIGlmcmFtZSBlbGVtZW50XG4gICAgICAgICAgdGhpcy5fc2ltaWRJZnJhbWUgPSB0aGlzLl9jcmVhdGVTaW1pZElmcmFtZSgpO1xuICAgICAgICAgIC8vIGlmICghdGhpcy5faXNMaW5lYXJBZCkge1xuICAgICAgICAgIC8vICAgdGhpcy5fZGlzcGxheU5vbmxpbmVhckNyZWF0aXZlKClcbiAgICAgICAgICAvLyB9XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuX3N0b3BBZCgpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fYWRkQ3JlYXRpdmVNZXNzYWdlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5hZGRNZXNzYWdlTGlzdGVuZXIoUHJvdG9jb2xNZXNzYWdlLkNSRUFURV9TRVNTSU9OLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25DcmVhdGVTZXNzaW9uKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuQ09MTEFQU0VfTk9OTElORUFSLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25DcmVhdGl2ZUNvbGxhcHNlTm9uTGluZWFyKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuRVhQQU5EX05PTkxJTkVBUiwgZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIF90aGlzLm9uQ3JlYXRpdmVFeHBhbmROb25MaW5lYXIobWVzc2FnZSk7IH0pO1xuICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZUxpc3RlbmVyKENyZWF0aXZlTWVzc2FnZS5GQVRBTF9FUlJPUiwgZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIF90aGlzLm9uQ3JlYXRpdmVGYXRhbEVycm9yKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuR0VUX01FRElBX1NUQVRFLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25DcmVhdGl2ZUdldE1lZGlhU3RhdGUobWVzc2FnZSk7IH0pO1xuICAgICAgICAgIC8vIHRoaXMuYWRkTWVzc2FnZUxpc3RlbmVyKENyZWF0aXZlTWVzc2FnZS5MT0csIHRoaXMub25SZWNlaXZlQ3JlYXRpdmVMb2cuYmluZCh0aGlzKSlcbiAgICAgICAgICAvLyB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9DSEFOR0VfQURfRFVSQVRJT04sIHRoaXMub25SZXF1ZXN0Q2hhbmdlQWREdXJhdGlvbi5iaW5kKHRoaXMpKVxuICAgICAgICAgIC8vIHRoaXMuYWRkTWVzc2FnZUxpc3RlbmVyKENyZWF0aXZlTWVzc2FnZS5SRVFVRVNUX0ZVTExfU0NSRUVOLCB0aGlzLm9uUmVxdWVzdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSlcbiAgICAgICAgICAvLyB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9QTEFZLCB0aGlzLm9uUmVxdWVzdFBsYXkuYmluZCh0aGlzKSlcbiAgICAgICAgICAvLyB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9QQVVTRSwgdGhpcy5vblJlcXVlc3RQYXVzZS5iaW5kKHRoaXMpKVxuICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZUxpc3RlbmVyKENyZWF0aXZlTWVzc2FnZS5SRVFVRVNUX1JFU0laRSwgZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIF90aGlzLm9uQ3JlYXRpdmVSZXF1ZXN0UmVzaXplKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9TS0lQLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25DcmVhdGl2ZVJlcXVlc3RTa2lwKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2VMaXN0ZW5lcihDcmVhdGl2ZU1lc3NhZ2UuUkVRVUVTVF9TVE9QLCBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMub25DcmVhdGl2ZVJlcXVlc3RTdG9wKG1lc3NhZ2UpOyB9KTtcbiAgICAgIH07XG4gICAgICAvLyAjcmVnaW9uIENSRUFUSVZFIE1FU1NBR0UgSEFORExFUlNcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5vbkNyZWF0ZVNlc3Npb24gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgIC8vIFszXSAtIGNyZWF0ZVNlc3Npb24gc2VudCBieSB0aGUgY3JlYXRpdmVcbiAgICAgICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgIC8vIFs0XSAtIHNlbmQgUGxheWVyOmluaXQgbWVzc2FnZVxuICAgICAgICAgIHRoaXMuX3NlbmRJbml0TWVzc2FnZSgpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5vbkNyZWF0aXZlQ29sbGFwc2VOb25MaW5lYXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0xpbmVhckFkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVqZWN0TWVzc2FnZShtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IFBsYXllckVycm9yQ29kZS5VTlNQRUNJRklFRCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgY29sbGFwc2UgbGluZWFyIGFkcydcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGNyZWF0aXZlRGltZW5zaW9ucyA9IHRoaXMuX2dldE5vbmxpbmVhckRpbWVuc2lvbnMoKTtcbiAgICAgICAgICBpZiAoIXRoaXMuX2lzVmFsaWREaW1lbnNpb25zKGNyZWF0aXZlRGltZW5zaW9ucykpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWplY3RNZXNzYWdlKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogUGxheWVyRXJyb3JDb2RlLlVOU1BFQ0lGSUVELFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VuYWJsZSB0byBjb2xsYXBzZSB0byBkaW1lbnNpb25zIGJpZ2dlciB0aGFuIHRoZSBwbGF5ZXIuIFBsZWFzZSBtb2RpZnkgZGltZW5zaW9ucyB0byBhIHNtYWxsZXIgc2l6ZSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEluIHJlc3BvbnNlIHRvIGNvbGxhcHNlTm9ubGluZWFyLCB0aGUgcGxheWVyIHJlc2l6ZXMgdGhlIGFkIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZSBhbmQgcmVzdW1lcyB0aGUgY29udGVudCBtZWRpYSBwbGF5YmFjay5cbiAgICAgICAgICB0aGlzLl9zZXRTaW1pZElmcmFtZURpbWVuc2lvbnMoY3JlYXRpdmVEaW1lbnNpb25zKTtcbiAgICAgICAgICB0aGlzLl9zaW1pZElmcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICB0aGlzLl9tYWluVmlkZW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5vbkNyZWF0aXZlRXhwYW5kTm9uTGluZWFyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICBpZiAodGhpcy5faXNMaW5lYXJBZCkge1xuICAgICAgICAgICAgICB0aGlzLnJlamVjdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGZ1bGxEaW1lbnNpb25zID0gdGhpcy5fZ2V0RnVsbERpbWVuc2lvbnModGhpcy5fbWFpblZpZGVvRWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5fc2V0U2ltaWRJZnJhbWVEaW1lbnNpb25zKGZ1bGxEaW1lbnNpb25zKTtcbiAgICAgICAgICB0aGlzLl9tYWluVmlkZW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgICAgIGNyZWF0aXZlRGltZW5zaW9uczogZnVsbERpbWVuc2lvbnNcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucmVzb2x2ZU1lc3NhZ2UobWVzc2FnZSwgYXJncyk7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLm9uQ3JlYXRpdmVGYXRhbEVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuX3N0b3BBZChTdG9wQ29kZS5DUkVBVElWRV9JTklUSUFURUQpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5vbkNyZWF0aXZlR2V0TWVkaWFTdGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRTcmM6IHRoaXMuX2FkVmlkZW9FbGVtZW50ID8gdGhpcy5fYWRWaWRlb0VsZW1lbnQuY3VycmVudFNyYyA6ICcnLFxuICAgICAgICAgICAgICBjdXJyZW50VGltZTogdGhpcy5fYWRWaWRlb0VsZW1lbnQgPyB0aGlzLl9hZFZpZGVvRWxlbWVudC5jdXJyZW50VGltZSA6IDAsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLl9hZFZpZGVvRWxlbWVudCA/IHRoaXMuX2FkVmlkZW9FbGVtZW50LmR1cmF0aW9uIDogMCxcbiAgICAgICAgICAgICAgZW5kZWQ6IHRoaXMuX2FkVmlkZW9FbGVtZW50ID8gdGhpcy5fYWRWaWRlb0VsZW1lbnQuZW5kZWQgOiB0cnVlLFxuICAgICAgICAgICAgICBtdXRlZDogdGhpcy5fYWRWaWRlb0VsZW1lbnQgPyB0aGlzLl9hZFZpZGVvRWxlbWVudC5tdXRlZCA6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXVzZWQ6IHRoaXMuX2FkVmlkZW9FbGVtZW50ID8gdGhpcy5fYWRWaWRlb0VsZW1lbnQucGF1c2VkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgdm9sdW1lOiB0aGlzLl9hZFZpZGVvRWxlbWVudCA/IHRoaXMuX2FkVmlkZW9FbGVtZW50LnZvbHVtZSA6IDAsXG4gICAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRoaXMuX2FkVmlkZW9FbGVtZW50ID8gdGhpcy5fYWRWaWRlb0VsZW1lbnRbJ2Z1bGxzY3JlZW4nXSA6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5yZXNvbHZlTWVzc2FnZShtZXNzYWdlLCBhcmdzKTtcbiAgICAgIH07XG4gICAgICAvLyBvblJlY2VpdmVDcmVhdGl2ZUxvZyhpbmNvbWluZ01lc3NhZ2UpIHtcbiAgICAgIC8vICAgY29uc3QgbG9nTWVzc2FnZSA9IGluY29taW5nTWVzc2FnZS5hcmdzWydtZXNzYWdlJ11cbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBtZXNzYWdlIGZyb20gY3JlYXRpdmU6IFwiICsgbG9nTWVzc2FnZSlcbiAgICAgIC8vIH1cbiAgICAgIC8vIC8qKlxuICAgICAgLy8gICogVGhlIHBsYXllciBtdXN0IGltcGxlbWVudCBzZW5kaW5nIHRyYWNraW5nIHBpeGVscyBmcm9tIHRoZSBjcmVhdGl2ZS5cbiAgICAgIC8vICAqIFRoaXMgc2FtcGxlIGltcGxlbWVudGF0aW9uIGRvZXMgbm90IHNob3cgaG93IHRvIHNlbmQgdHJhY2tpbmcgcGl4ZWxzIG9yXG4gICAgICAvLyAgKiByZXBsYWNlIG1hY3Jvcy4gVGhhdCBzaG91bGQgYmUgZG9uZSB1c2luZyB0aGUgcGxheWVycyBzdGFuZGFyZCB3b3JrZmxvdy5cbiAgICAgIC8vICAqL1xuICAgICAgLy8gb25SZXBvcnRUcmFja2luZyhpbmNvbWluZ01lc3NhZ2UpIHtcbiAgICAgIC8vICAgY29uc3QgcmVxdWVzdGVkVXJsQXJyYXkgPSBpbmNvbWluZ01lc3NhZ2UuYXJnc1sndHJhY2tpbmdVcmxzJ11cbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1RoZSBjcmVhdGl2ZSBoYXMgYXNrZWQgZm9yIHRoZSBwbGF5ZXIgdG8gcGluZyAnICsgcmVxdWVzdGVkVXJsQXJyYXkpXG4gICAgICAvLyB9XG4gICAgICAvLyAvKipcbiAgICAgIC8vICAqIENhbGxlZCB3aGVuIGNyZWF0aXZlIHJlcXVlc3RzIGEgY2hhbmdlIGluIGR1cmF0aW9uIG9mIGFkLlxuICAgICAgLy8gICogQHByaXZhdGVcbiAgICAgIC8vICAqL1xuICAgICAgLy8gb25SZXF1ZXN0Q2hhbmdlQWREdXJhdGlvbihpbmNvbWluZ01lc3NhZ2UpIHtcbiAgICAgIC8vICAgY29uc3QgbmV3UmVxdWVzdGVkRHVyYXRpb24gPSBpbmNvbWluZ01lc3NhZ2UuYXJnc1snZHVyYXRpb24nXVxuICAgICAgLy8gICBpZiAobmV3UmVxdWVzdGVkRHVyYXRpb24gIT0gVU5MSU1JVEVEX0RVUkFUSU9OICYmIG5ld1JlcXVlc3RlZER1cmF0aW9uIDwgMCkge1xuICAgICAgLy8gICAgIGNvbnN0IGR1cmF0aW9uRXJyb3JNZXNzYWdlID0ge1xuICAgICAgLy8gICAgICAgZXJyb3JDb2RlOiBQbGF5ZXJFcnJvckNvZGUuVU5TVVBQT1JURURfVElNRSxcbiAgICAgIC8vICAgICAgIG1lc3NhZ2U6ICdBIG5lZ2F0aXZlIGR1cmF0aW9uIGlzIG5vdCB2YWxpZC4nXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICAgIHRoaXMucmVqZWN0TWVzc2FnZShpbmNvbWluZ01lc3NhZ2UsIGR1cmF0aW9uRXJyb3JNZXNzYWdlKVxuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGVsc2Uge1xuICAgICAgLy8gICAgIHRoaXMuX3JlcXVlc3RlZER1cmF0aW9uID0gbmV3UmVxdWVzdGVkRHVyYXRpb25cbiAgICAgIC8vICAgICAvL0lmIHJlcXVlc3RlZCBkdXJhdGlvbiBpcyBhbnkgb3RoZXIgYWNjZXB0YWJsZSB2YWx1ZVxuICAgICAgLy8gICAgIHRoaXMuY29tcGFyZUFkQW5kUmVxdWVzdGVkRHVyYXRpb25zXygpXG4gICAgICAvLyAgICAgdGhpcy5yZXNvbHZlTWVzc2FnZShpbmNvbWluZ01lc3NhZ2UpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIHB1YmxpYyBvblJlcXVlc3RGdWxsU2NyZWVuKGluY29taW5nTWVzc2FnZSkge1xuICAgICAgLy8gICBjb25zdCBlbGVtZW50ID0gdGhpcy5fc2ltaWRJZnJhbWUgYXMgSFRNTEVsZW1lbnRcbiAgICAgIC8vICAgdmFyIHJlcXVlc3RGdWxsU2NyZWVuID1cbiAgICAgIC8vICAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuIHx8XG4gICAgICAvLyAgICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiB8fFxuICAgICAgLy8gICAgIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHxcbiAgICAgIC8vICAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW5cbiAgICAgIC8vICAgLy8gVGhlIHNwZWMgY3VycmVudGx5IHNheXMgdG8gb25seSByZXF1ZXN0IGZ1bGxzY3JlZW4gZm9yIHRoZSBpZnJhbWUuXG4gICAgICAvLyAgIGNvbnN0IHByb21pc2U6IFByb21pc2U8dm9pZD4gPSByZXF1ZXN0RnVsbFNjcmVlbigpXG4gICAgICAvLyAgIGlmIChwcm9taXNlKSB7XG4gICAgICAvLyAgICAgcHJvbWlzZS50aGVuKCgpID0+IHRoaXMucmVzb2x2ZU1lc3NhZ2UoaW5jb21pbmdNZXNzYWdlKSlcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAvLyBUT0RPOiBNYW55IGJyb3dzZXJzIGFyZSBub3QgcmV0dXJuaW5nIHByb21pc2VzIGJ1dCBhcmUgc3RpbGxcbiAgICAgIC8vICAgICAvLyBnb2luZyBmdWxsIHNjcmVlbi4gQXNzdW1pbmcgcmVzb2x2ZSAoYmFkKS5cbiAgICAgIC8vICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKGluY29taW5nTWVzc2FnZSlcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgICAgLy8gb25SZXF1ZXN0UGxheShpbmNvbWluZ01lc3NhZ2UpIHtcbiAgICAgIC8vICAgaWYgKHRoaXMuX2lzTGluZWFyQWQpIHtcbiAgICAgIC8vICAgICB0aGlzLl9hZFZpZGVvRWxlbWVudC5wbGF5KClcbiAgICAgIC8vICAgICAudGhlbigoKSA9PiB0aGlzLnJlc29sdmVNZXNzYWdlKGluY29taW5nTWVzc2FnZSkpXG4gICAgICAvLyAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHtcbiAgICAgIC8vICAgICAgICAgZXJyb3JDb2RlIDogUGxheWVyRXJyb3JDb2RlLlZJREVPX0NPVUxEX05PVF9MT0FELFxuICAgICAgLy8gICAgICAgICBtZXNzYWdlOiAnVGhlIFNJTUlEIG1lZGlhIGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgICAgdGhpcy5yZWplY3RNZXNzYWdlKGluY29taW5nTWVzc2FnZSwgZXJyb3JNZXNzYWdlKVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0ge1xuICAgICAgLy8gICAgICAgZXJyb3JDb2RlIDogQ3JlYXRpdmVFcnJvckNvZGUuUExBWUJBQ0tfQVJFQV9VTlVTQUJMRSxcbiAgICAgIC8vICAgICAgIG1lc3NhZ2U6ICdOb24gbGluZWFyIGFkcyBkbyBub3QgcGxheSB2aWRlby4nXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICAgIHRoaXMucmVqZWN0TWVzc2FnZShpbmNvbWluZ01lc3NhZ2UsIGVycm9yTWVzc2FnZSlcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgICAgLy8gb25SZXF1ZXN0UGF1c2UoaW5jb21pbmdNZXNzYWdlKSB7XG4gICAgICAvLyAgIHRoaXMuX2FkVmlkZW9FbGVtZW50LnBhdXNlKClcbiAgICAgIC8vICAgdGhpcy5yZXNvbHZlTWVzc2FnZShpbmNvbWluZ01lc3NhZ2UpXG4gICAgICAvLyB9XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUub25DcmVhdGl2ZVJlcXVlc3RTa2lwID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuX3NraXBBZCgpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5vbkNyZWF0aXZlUmVxdWVzdFN0b3AgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fc3RvcEFkKFN0b3BDb2RlLkNSRUFUSVZFX0lOSVRJQVRFRCk7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLm9uQ3JlYXRpdmVSZXF1ZXN0UmVzaXplID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICB2YXIgYXJncyA9IG1lc3NhZ2UuYXJncztcbiAgICAgICAgICBpZiAodGhpcy5faXNMaW5lYXJBZCkge1xuICAgICAgICAgICAgICB0aGlzLnJlamVjdE1lc3NhZ2UobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBDcmVhdGl2ZUVycm9yQ29kZS5FWFBBTkRfTk9UX1BPU1NJQkxFLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xpbmVhciByZXNpemUgbm90IHlldCBzdXBwb3J0ZWQuJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoIXRoaXMuX2lzVmFsaWREaW1lbnNpb25zKGFyZ3MuY3JlYXRpdmVEaW1lbnNpb25zKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlamVjdE1lc3NhZ2UobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBDcmVhdGl2ZUVycm9yQ29kZS5FWFBBTkRfTk9UX1BPU1NJQkxFLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VuYWJsZSB0byByZXNpemUgYSBub24tbGluZWFyIGFkIHdpdGggZGltZW5zaW9ucyBiaWdnZXIgdGhhbiB0aGUgcGxheWVyLiBQbGVhc2UgbW9kaWZ5IGRpbWVuc2lvbnMgdG8gYSBzbWFsbGVyIHNpemUuJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX25vbkxpbmVhckRpbWVuc2lvbnMgPSBhcmdzLmNyZWF0aXZlRGltZW5zaW9ucztcbiAgICAgICAgICAgICAgdGhpcy5fc2V0U2ltaWRJZnJhbWVEaW1lbnNpb25zKGFyZ3MuY3JlYXRpdmVEaW1lbnNpb25zKTtcbiAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5fbWFpblZpZGVvRWxlbWVudCwgYXJncy5tZWRpYURpbWVuc2lvbnMpO1xuICAgICAgICAgICAgICB0aGlzLnJlc29sdmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyAjZW5kcmVnaW9uIENSRUFUSVZFIE1FU1NBR0UgSEFORExFUlNcbiAgICAgIC8vICNyZWdpb24gUFJJVkFURSBNRVRIT0RTXG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3NlbmRJbml0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB2aWRlb0RpbWVuc2lvbnMsIGNyZWF0aXZlRGltZW5zaW9ucywgZW52aXJvbm1lbnREYXRhLCBjcmVhdGl2ZURhdGEsIGFyZ3MsIGVfMTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9EaW1lbnNpb25zID0gdGhpcy5fZ2V0RnVsbERpbWVuc2lvbnModGhpcy5fbWFpblZpZGVvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aXZlRGltZW5zaW9ucyA9IHRoaXMuX2lzTGluZWFyQWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0RnVsbERpbWVuc2lvbnModGhpcy5fbWFpblZpZGVvRWxlbWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Tm9ubGluZWFyRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0RpbWVuc2lvbnM6IHZpZGVvRGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aXZlRGltZW5zaW9uczogY3JlYXRpdmVEaW1lbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQWxsb3dlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlRHVyYXRpb25BbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcHBhYmxlU3RhdGU6IFNraXBwYWJsZVN0YXRlLkFEX0hBTkRMRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVVcmw6IGRvY3VtZW50LmxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyYWdlbnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWQ6IHRoaXMuX2FkVmlkZW9FbGVtZW50ID8gdGhpcy5fYWRWaWRlb0VsZW1lbnQubXV0ZWQgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZTogdGhpcy5fYWRWaWRlb0VsZW1lbnQgPyB0aGlzLl9hZFZpZGVvRWxlbWVudC52b2x1bWUgOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aXZlRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkUGFyYW1ldGVyczogdGhpcy5fYWRQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja1RocnVVcmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgdmFsdWVzIHNob3VsZCBiZSBwb3B1bGF0ZWQgZnJvbSB0aGUgVkFTVCByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGl2ZUlkIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZFNlcnZpbmdJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudERhdGE6IGVudmlyb25tZW50RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aXZlRGF0YTogY3JlYXRpdmVEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRNZXNzYWdlKFBsYXllck1lc3NhZ2UuSU5JVCwgYXJncyldO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydENyZWF0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbUExBWUVSXSBJbml0IGZhaWxlZCcsIGVfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFN0b3AvcmVzZXQgc2Vzc2lvblxuICAgICAgICogUmVtb3ZlIGFuZCBkZXN0cm95IHRoZSBTSU1JRCBjcmVhdGl2ZSBpZnJhbWUgYW5kIHJlc3VtZXMgdmlkZW8gcGxheWJhY2suXG4gICAgICAgKi9cbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fc3RvcFNlc3Npb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5fc3RvcEFkUGxheWVyKCk7XG4gICAgICAgICAgdGhpcy5faGlkZUFkUGxheWVyKCk7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveVNpbWlkSWZyYW1lKCk7XG4gICAgICAgICAgdGhpcy5fc2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5fbWFpblZpZGVvRWxlbWVudCwgdGhpcy5fbWFpblZpZGVvRGltZW5zaW9ucyk7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQWRWaWRlb0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlTWFpblZpZGVvRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICB0aGlzLl9hZENvbXBsZXRlKCk7XG4gICAgICAgICAgdGhpcy5fbWFpblZpZGVvRWxlbWVudC5wbGF5KCk7XG4gICAgICB9O1xuICAgICAgLy8gI3JlZ2lvbiBJRlJBTUUgTUFOQUdFTUVOVFxuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9jcmVhdGVTaW1pZElmcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBOb3RlOiBvbmNlIHRoZSBTSU1JRCBpZnJhbWUgaXMgY3JlYXRlZCwgaXQgd2lsbCBzZW5kIGEgXCJjcmVhdGVTZXNzaW9uXCIgbWVzc2FnZSB0byB0aGlzIFNJTUlkIHBsYXllciAoc2VlIF9vbkNyZWF0ZVNlc3Npb24oKSkgXG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAvLyBbMl0gLSBjcmVhdGUgaWZyYW1lIGVsZW1lbnRcbiAgICAgICAgICB2YXIgc2ltaWRJZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICBzaW1pZElmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHNpbWlkSWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dGdWxsU2NyZWVuJywgJycpO1xuICAgICAgICAgIHNpbWlkSWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAnZ2VvbG9jYXRpb24nKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNMaW5lYXJBZCkgO1xuICAgICAgICAgIC8vIFNldCB0aGUgaWZyYW1lIGNyZWF0aXZlLCB0aGlzIHNob3VsZCBiZSBhbiBodG1sIGNyZWF0aXZlLlxuICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2FtcGxlIGRvZXMgbm90IHNob3cgd2hhdCB0byBkbyB3aGVuIGxvYWRpbmcgZmFpbHMuXG4gICAgICAgICAgLy8gWzIuMV0gLSBzZXQgaWZyYW1lLnNyY1xuICAgICAgICAgIHNpbWlkSWZyYW1lLnNyYyA9IHRoaXMuX2NyZWF0aXZlVXJpO1xuICAgICAgICAgIHNpbWlkSWZyYW1lLm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLl9wbGF5ZXJDb250YWluZXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBbMi4yXSAtIGFkZCBkbyBET01cbiAgICAgICAgICB0aGlzLl9wbGF5ZXJDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNpbWlkSWZyYW1lKTtcbiAgICAgICAgICAvLyBUaGUgdGFyZ2V0IG9mIHRoZSBwbGF5ZXIgdG8gc2VuZCBtZXNzYWdlcyB0byBpcyB0aGUgbmV3bHkgY3JlYXRlZCBpZnJhbWUuXG4gICAgICAgICAgdGhpcy5zZXRNZXNzYWdlVGFyZ2V0KHNpbWlkSWZyYW1lLmNvbnRlbnRXaW5kb3cpO1xuICAgICAgICAgIHJldHVybiBzaW1pZElmcmFtZTtcbiAgICAgIH07XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX2Rlc3Ryb3lTaW1pZElmcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX3NpbWlkSWZyYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2ltaWRJZnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5fc2ltaWRJZnJhbWUgPSBudWxsO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH07XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3Nob3dTaW1pZElGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX3NpbWlkSWZyYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2ltaWRJZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9oaWRlU2ltaWRJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9zaW1pZElmcmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NpbWlkSWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9zZXRTaW1pZElmcmFtZURpbWVuc2lvbnMgPSBmdW5jdGlvbiAoZGltZW5zaW9ucykge1xuICAgICAgICAgIGlmICghdGhpcy5fc2ltaWRJZnJhbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50RGltZW5zaW9ucyh0aGlzLl9zaW1pZElmcmFtZSwgZGltZW5zaW9ucyk7XG4gICAgICB9O1xuICAgICAgLy8gI2VuZHJlZ2lvbiBJRlJBTUVcbiAgICAgIC8vICNyZWdpb24gQUQgUExBWUJBQ0tcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fc3RhcnRDcmVhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBlXzI7XG4gICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0xpbmVhckFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5TGluZWFyVmlkZW9BZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9uTGluZWFyU3RhcnRUaW1lID0gdGhpcy5fbWFpblZpZGVvRWxlbWVudC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21haW5WaWRlb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZE1lc3NhZ2UoUGxheWVyTWVzc2FnZS5TVEFSVF9DUkVBVElWRSldO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG93U2ltaWRJRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tQTEFZRVJdIEZhaWxlZCB0byBzdGFydCBjcmVhdGl2ZScsIGVfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFN0b3BzIHRoZSBhZCBhbmQgZGVzdHJveXMgdGhlIGFkIGlmcmFtZS5cbiAgICAgICAqIEBwYXJhbSByZWFzb24gVGhlIHJlYXNvbiB0aGUgYWQgd2lsbCBzdG9wLlxuICAgICAgICovXG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3N0b3BBZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICBpZiAocmVhc29uID09PSB2b2lkIDApIHsgcmVhc29uID0gU3RvcENvZGUuUExBWUVSX0lOSVRBVEVEOyB9XG4gICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NpbWlkSWZyYW1lKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVNpbWlkSUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBTSU1JRCBjcmVhdGl2ZSB0byBhY2tub3dsZWRnZSBzdG9wIGFuZCB0aGVuIGNsZWFuIHVwIHRoZSBpZnJhbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZE1lc3NhZ2UoUGxheWVyTWVzc2FnZS5BRF9TVE9QUEVELCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogcmVhc29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgU0lNSUQgY3JlYXRpdmUgdG8gYWNrbm93bGVkZ2Ugc3RvcCBhbmQgdGhlbiBjbGVhbiB1cCB0aGUgaWZyYW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9za2lwQWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgaWZyYW1lIGlzIG9ubHkgaGlkZGVuIG9uIGFkIHNraXBwZWQuIFRoZSBhZCBtaWdodCBzdGlsbCByZXF1ZXN0IHRyYWNraW5nIHBpeGVscyBiZWZvcmUgaXQgaXMgY2xlYW5lZCB1cC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlkZVNpbWlkSUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBTSU1JRCBjcmVhdGl2ZSB0byBhY2tub3dsZWRnZSBza2lwIGFuZCB0aGVuIGNsZWFuIHVwIHRoZSBpZnJhbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZE1lc3NhZ2UoUGxheWVyTWVzc2FnZS5BRF9TS0lQUEVEKV07XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgU0lNSUQgY3JlYXRpdmUgdG8gYWNrbm93bGVkZ2Ugc2tpcCBhbmQgdGhlbiBjbGVhbiB1cCB0aGUgaWZyYW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9wbGF5TGluZWFyVmlkZW9BZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2FkVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbWFpblZpZGVvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgIHRoaXMuX3Nob3dBZFBsYXllcigpO1xuICAgICAgICAgIHRoaXMuX2xvYWRBZFBsYXllcigpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fbG9hZEFkUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghdGhpcy5fYWRWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9hZFZpZGVvRWxlbWVudC5zcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9fdXJsJykudmFsdWU7XG4gICAgICAgICAgdGhpcy5fYWRWaWRlb0VsZW1lbnQucGxheSgpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fcGF1c2VBZFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2FkVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fYWRWaWRlb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgIH07XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3BsYXlBZFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2FkVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fYWRWaWRlb0VsZW1lbnQucGxheSgpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fc3RvcEFkUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghdGhpcy5fYWRWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9hZFZpZGVvRWxlbWVudC5zcmMgPSAnJztcbiAgICAgIH07XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3Nob3dBZFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2FkVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fYWRWaWRlb0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkX3ZpZGVvX2RpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9oaWRlQWRQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9hZFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2FkVmlkZW9FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkX3ZpZGVvX2RpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH07XG4gICAgICAvLyAjZW5kcmVnaW9uIEFEIFBMQVlCQUNLXG4gICAgICAvLyAjcmVnaW9uIEFEIFZJREVPIEVWRU5UU1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9hZGRBZFZpZGVvRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICBpZiAoIXRoaXMuX2FkVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhWaWRlb0V2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBfdGhpcy5fYWRWaWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih2YWx1ZSwgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5fb25BZFZpZGVvRXZlbnQoZXZlbnQpOyB9LCB0cnVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3JlbW92ZUFkVmlkZW9FdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIGlmICghdGhpcy5fYWRWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBPYmplY3QudmFsdWVzKFZpZGVvRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF90aGlzLl9hZFZpZGVvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZhbHVlLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLl9vbkFkVmlkZW9FdmVudChldmVudCk7IH0sIHRydWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fb25BZFZpZGVvRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW1BMQVlFUl0gQWQgdmlkZW8gZXZlbnQ6JywgZXZlbnQudHlwZSk7XG4gICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgVmlkZW9FdmVudC5EVVJBVElPTl9DSEFOR0U6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKE1lZGlhTWVzc2FnZS5EVVJBVElPTl9DSEFOR0UsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5fYWRWaWRlb0VsZW1lbnQuZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgVmlkZW9FdmVudC5FTkRFRDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uQWRWaWRlb0VuZGVkKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBWaWRlb0V2ZW50LkVSUk9SOlxuICAgICAgICAgICAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoTWVkaWFNZXNzYWdlLkVSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yRXZlbnQuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JFdmVudC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFZpZGVvRXZlbnQuVElNRV9VUERBVEU6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKE1lZGlhTWVzc2FnZS5USU1FX1VQREFURSwge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lOiB0aGlzLl9hZFZpZGVvRWxlbWVudC5jdXJyZW50VGltZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBWaWRlb0V2ZW50LlZPTFVNRV9DSEFOR0U6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKE1lZGlhTWVzc2FnZS5WT0xVTUVfQ0hBTkdFLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbXV0ZWQ6IHRoaXMuX2FkVmlkZW9FbGVtZW50Lm11dGVkLFxuICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZTogdGhpcy5fYWRWaWRlb0VsZW1lbnQudm9sdW1lXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgc2ltcGx5IGZvcndhcmQgZXZlbnQgbWVzc2FnZSBieSBwcmVwZW5kaW5nICdNZWRpYTonIHRvIHRoZSBldmVudCB0eXBlL25hbWUgXG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdNZWRpYTonICsgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9vbkFkVmlkZW9FbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoTWVkaWFNZXNzYWdlLkVOREVEKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVxdWVzdGVkRHVyYXRpb24gPT09IE5PX1JFUVVFU1RFRF9EVVJBVElPTikge1xuICAgICAgICAgICAgICB0aGlzLl9zdG9wQWQoU3RvcENvZGUuTUVESUFfUExBWUJBQ0tfQ09NUExFVEUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0aGlzLl9yZXF1ZXN0ZWREdXJhdGlvbiAhPSBVTkxJTUlURURfRFVSQVRJT04pIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgZHVyYXRpb24gaXMgbG9uZ2VyIHRoYW4gdGhlIGFkIGR1cmF0aW9uLCB0aGUgYWQgZXh0ZW5kcyBmb3IgdGhlIHJlcXVlc3RlZCBhbW91bnQgb2YgdGltZVxuICAgICAgICAgICAgICB2YXIgZHVyYXRpb25DaGFuZ2VNcyA9ICh0aGlzLl9yZXF1ZXN0ZWREdXJhdGlvbiAtIHRoaXMuX2FkVmlkZW9FbGVtZW50LmR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuX3N0b3BBZChTdG9wQ29kZS5DUkVBVElWRV9JTklUSUFURUQpO1xuICAgICAgICAgICAgICB9LCBkdXJhdGlvbkNoYW5nZU1zKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLy8gI2VuZHJlZ2lvbiBBRCBWSURFTyBFVkVOVFNcbiAgICAgIC8vICNyZWdpb24gTUFJTiBWSURFTyBFVkVOVFNcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fYWRkTWFpblZpZGVvRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICBPYmplY3QudmFsdWVzKFZpZGVvRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF90aGlzLl9tYWluVmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodmFsdWUsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuX29uTWFpblZpZGVvRXZlbnQoZXZlbnQpOyB9LCB0cnVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3JlbW92ZU1haW5WaWRlb0V2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhWaWRlb0V2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBfdGhpcy5fbWFpblZpZGVvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZhbHVlLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLl9vbk1haW5WaWRlb0V2ZW50KGV2ZW50KTsgfSwgdHJ1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9vbk1haW5WaWRlb0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tQTEFZRVJdIE1haW4gdmlkZW8gZXZlbnQ6JywgZXZlbnQudHlwZSk7XG4gICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgVmlkZW9FdmVudC5USU1FX1VQREFURTpcbiAgICAgICAgICAgICAgICAgIC8vIEZvciBub24tbGluZWFyIGFkcywgc3RvcCB0aGUgYWQgb25jZSByZXF1ZXN0ZWQgZHVyYXRpb24gaXMgb3ZlclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vbkxpbmVhclN0YXJ0VGltZSAmJiB0aGlzLl9tYWluVmlkZW9FbGVtZW50LmN1cnJlbnRUaW1lIC0gdGhpcy5fbm9uTGluZWFyU3RhcnRUaW1lID4gdGhpcy5fcmVxdWVzdGVkRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQWQoU3RvcENvZGUuTk9OX0xJTkVBUl9EVVJBVElPTl9DT01QTEVURSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLy8gI2VuZHJlZ2lvbiBNQUlOIFZJREVPIEVWRU5UU1xuICAgICAgU2ltaWRQbGF5ZXIucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIEtFWV9ET1dOJywgZXZlbnQpO1xuICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoUGxheWVyTWVzc2FnZS5LRVlfRE9XTiwge1xuICAgICAgICAgICAgICBrZXk6IGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgY29kZTogZXZlbnQua2V5Q29kZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9O1xuICAgICAgLy8gI2VuZHJlZ2lvbiBQUklWQVRFIE1FVEhPRFNcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fZ2V0RnVsbERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHZhciB2aWRlb1JlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiB2aWRlb1JlY3Qud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogdmlkZW9SZWN0LmhlaWdodCxcbiAgICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGlucHV0IGRpbWVuc2lvbnMgYXJlIHZhbGlkIGFuZCBmaXQgaW4gdGhlIHBsYXllciB3aW5kb3cuXG4gICAgICAgKiBAcGFyYW0gZGltZW5zaW9ucyBBIGRpbWVuc2lvbiB0aGF0IGNvbnRhaW5zIHgsIHksIHdpZHRoICYgaGVpZ2h0IGZpZWxkcy5cbiAgICAgICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgaW5wdXQgZGltZW5zaW9ucyBhcmUgdmFsaWQgYW5kIGZpdCBpbiB0aGUgcGxheWVyIHdpbmRvd1xuICAgICAgICovXG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX2lzVmFsaWREaW1lbnNpb25zID0gZnVuY3Rpb24gKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgICB2YXIgcGxheWVyUmVjdCA9IHRoaXMuX3BsYXllckNvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIGhlaWdodEZpdHMgPSBkaW1lbnNpb25zLnkgKyBkaW1lbnNpb25zLmhlaWdodCA8PSBwbGF5ZXJSZWN0LmhlaWdodDtcbiAgICAgICAgICB2YXIgd2lkdGhGaXRzID0gZGltZW5zaW9ucy54ICsgZGltZW5zaW9ucy53aWR0aCA8PSBwbGF5ZXJSZWN0LndpZHRoO1xuICAgICAgICAgIHJldHVybiBoZWlnaHRGaXRzICYmIHdpZHRoRml0cztcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIHNwZWNpZmllZCBkaW1lbnNpb25zIG9mIHRoZSBub24tbGluZWFyIGNyZWF0aXZlLlxuICAgICAgICogQHJldHVybiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgbm9uLWxpbmVhciBjcmVhdGl2ZVxuICAgICAgICovXG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX2dldE5vbmxpbmVhckRpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX25vbkxpbmVhckRpbWVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vbkxpbmVhckRpbWVuc2lvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFRha2UgcGxheWVyIGNvbnRhaWVyIGRpbWVuc2lvbnMgYXMgaW5pdGlhbCBjcmVhdGl2ZSBkaW1lbnNpb25zXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEZ1bGxEaW1lbnNpb25zKHRoaXMuX3BsYXllckNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fZGlzcGxheU5vbmxpbmVhckNyZWF0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBuZXdEaW1lbnNpb25zID0gdGhpcy5fZ2V0Tm9ubGluZWFyRGltZW5zaW9ucygpO1xuICAgICAgICAgIGlmICghdGhpcy5faXNWYWxpZERpbWVuc2lvbnMobmV3RGltZW5zaW9ucykpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBwbGF5IGEgbm9uLWxpbmVhciBhZCB3aXRoIGRpbWVuc2lvbnMgYmlnZ2VyIHRoYW4gdGhlIHBsYXllci4gUGxlYXNlIG1vZGlmeSBkaW1lbnNpb25zIHRvIGEgc21hbGxlciBzaXplLicpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9zZXRTaW1pZElmcmFtZURpbWVuc2lvbnMobmV3RGltZW5zaW9ucyk7XG4gICAgICAgICAgICAgIHRoaXMuX3NpbWlkSWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICB0aGlzLl9tYWluVmlkZW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgLy8gVE9ETzogZ2V0IGNyZWF0aXZlIGR1cmF0aW9uXG4gICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RlZER1cmF0aW9uID0gMTA7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFNpbWlkUGxheWVyLnByb3RvdHlwZS5fc2V0RWxlbWVudERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgZGltZW5zaW9ucykge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJcIi5jb25jYXQoZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChkaW1lbnNpb25zLndpZHRoKTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBcIlwiLmNvbmNhdChkaW1lbnNpb25zLngsIFwicHhcIik7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdChkaW1lbnNpb25zLnksIFwicHhcIik7XG4gICAgICB9O1xuICAgICAgLy8gLyoqXG4gICAgICAvLyAgKiBDb21wYXJlcyB0aGUgZHVyYXRpb24gb2YgdGhlIGFkIHdpdGggdGhlIHJlcXVlc3RlZCBjaGFuZ2UgZHVyYXRpb24uXG4gICAgICAvLyAgKiBJZiByZXF1ZXN0IGR1cmF0aW9uIGlzIHRoZSBzYW1lIGFzIHRoZSBhZCBkdXJhdGlvbiwgYWQgZW5kcyBhcyBub3JtYWwuXG4gICAgICAvLyAgKiBJZiByZXF1ZXN0IGR1cmF0aW9uIGlzIHVubGltaXRlZCwgYWQgc3RheXMgb24gc2NyZWVuIHVudGlsIHVzZXIgY2xvc2VzIGFkLlxuICAgICAgLy8gICogSWYgcmVxdWVzdCBkdXJhdGlvbiBpcyBzaG9ydGVyLCB0aGUgYWQgc3RvcHMgZWFybHkuIFxuICAgICAgLy8gICogQHByaXZhdGVcbiAgICAgIC8vICAqL1xuICAgICAgLy8gY29tcGFyZUFkQW5kUmVxdWVzdGVkRHVyYXRpb25zXygpIHtcbiAgICAgIC8vICAgaWYgKHRoaXMuX3JlcXVlc3RlZER1cmF0aW9uID09IE5PX1JFUVVFU1RFRF9EVVJBVElPTiB8fCAgdGhpcy5fcmVxdWVzdGVkRHVyYXRpb24gPT0gVU5MSU1JVEVEX0RVUkFUSU9OKSB7XG4gICAgICAvLyAgICAgLy9Ob3RlOiBVc2VycyBjYW4gZW5kIHRoZSBhZCB3aXRoIHVubGltaXRlZCBkdXJhdGlvbiB3aXRoXG4gICAgICAvLyAgICAgLy8gdGhlIGNsb3NlIGFkIGJ1dHRvbiBvbiB0aGUgcGxheWVyXG4gICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAvLyAgIH0gZWxzZSBpZiAodGhpcy5fYWRWaWRlb0VsZW1lbnQuY3VycmVudFRpbWUgPj0gdGhpcy5fcmVxdWVzdGVkRHVyYXRpb24pIHtcbiAgICAgIC8vICAgICAvL0NyZWF0aXZlIHJlcXVlc3RlZCBhIGR1cmF0aW9uIHNob3J0ZXIgdGhhbiB0aGUgYWRcbiAgICAgIC8vICAgICB0aGlzLnN0b3BBZChTdG9wQ29kZS5DUkVBVElWRV9JTklUSUFURUQpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0gXG4gICAgICBTaW1pZFBsYXllci5wcm90b3R5cGUuX3NlbmRMb2cgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoUGxheWVyTWVzc2FnZS5MT0csIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBTaW1pZFBsYXllcjtcbiAgfShTaW1pZENvbXBvbmVudCkpO1xuXG4gIGV4cG9ydHMuQ3JlYXRpdmVFcnJvckNvZGUgPSBDcmVhdGl2ZUVycm9yQ29kZTtcbiAgZXhwb3J0cy5DcmVhdGl2ZU1lc3NhZ2UgPSBDcmVhdGl2ZU1lc3NhZ2U7XG4gIGV4cG9ydHMuTWVkaWFNZXNzYWdlID0gTWVkaWFNZXNzYWdlO1xuICBleHBvcnRzLlBsYXllckVycm9yQ29kZSA9IFBsYXllckVycm9yQ29kZTtcbiAgZXhwb3J0cy5QbGF5ZXJNZXNzYWdlID0gUGxheWVyTWVzc2FnZTtcbiAgZXhwb3J0cy5TaW1pZENvbXBvbmVudCA9IFNpbWlkQ29tcG9uZW50O1xuICBleHBvcnRzLlNpbWlkQ3JlYXRpdmUgPSBTaW1pZENyZWF0aXZlO1xuICBleHBvcnRzLlNpbWlkUGxheWVyID0gU2ltaWRQbGF5ZXI7XG4gIGV4cG9ydHMuU3RvcENvZGUgPSBTdG9wQ29kZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1pZC5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBUQUcgPSAnQnBrQWRNZXRyaWNzJztcblxuZXhwb3J0IGNsYXNzIEFkTWV0cmljcyB7XG4gICAgYWRTa2lwcGFibGU7XG5cbiAgICBhZFNraXBwZWQ7XG5cbiAgICBhZFByb2dyZXNzO1xuXG4gICAgYWREdXJhdGlvbjtcblxuICAgIHN0YWxsc051bWJlcjtcblxuICAgIHN0YWxsc0R1cmF0aW9uO1xuXG4gICAgbGF5ZXJTd2l0Y2hlc051bWJlcjtcblxuICAgIGF2ZXJhZ2VCaXRyYXRlO1xuXG4gICAgc2Vzc2lvblRva2VuO1xuXG4gICAgY3JlYXRpdmVJZDtcblxuICAgIGFkSWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRyaWNzID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChtZXRyaWNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFkUHJvZ3Jlc3MgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuYWREdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YWxsc051bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YWxsc0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJTd2l0Y2hlc051bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLmF2ZXJhZ2VCaXRyYXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblRva2VuID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNyZWF0aXZlSWQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWRJZCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZFNraXBwYWJsZSA9IG1ldHJpY3MuYWRTa2lwcGFibGU7XG4gICAgICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IG1ldHJpY3MuYWRTa2lwcGVkO1xuICAgICAgICAgICAgdGhpcy5hZFByb2dyZXNzID0gbWV0cmljcy5hZFByb2dyZXNzO1xuICAgICAgICAgICAgdGhpcy5hZER1cmF0aW9uID0gbWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zdGFsbHNOdW1iZXIgPSBtZXRyaWNzLnN0YWxsc051bWJlcjtcbiAgICAgICAgICAgIHRoaXMuc3RhbGxzRHVyYXRpb24gPSBtZXRyaWNzLnN0YWxsc0R1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5sYXllclN3aXRjaGVzTnVtYmVyID0gbWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5hdmVyYWdlQml0cmF0ZSA9IG1ldHJpY3MuYXZlcmFnZUJpdHJhdGU7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25Ub2tlbiA9IG1ldHJpY3Muc2Vzc2lvblRva2VuO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGl2ZUlkID0gbWV0cmljcy5jcmVhdGl2ZUlkO1xuICAgICAgICAgICAgdGhpcy5hZElkID0gbWV0cmljcy5hZElkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1lcmdlKGxpc3QpIHtcbiAgICAgICAgaWYgKGxpc3QgIT09IHVuZGVmaW5lZCAmJiBsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZE1ldHJpY3MgPSBuZXcgQWRNZXRyaWNzKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0TWV0cmljcyA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZFNraXBwYWJsZSA9IGxhc3RNZXRyaWNzLmFkU2tpcHBhYmxlO1xuICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZFNraXBwZWQgPSBsYXN0TWV0cmljcy5hZFNraXBwZWQ7XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmFkUHJvZ3Jlc3MgPSBsYXN0TWV0cmljcy5hZFByb2dyZXNzO1xuICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5zZXNzaW9uVG9rZW4gPSBsYXN0TWV0cmljcy5zZXNzaW9uVG9rZW47XG4gICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmNyZWF0aXZlSWQgPSBsYXN0TWV0cmljcy5jcmVhdGl2ZUlkO1xuICAgICAgICAgICAgbWVyZ2VkTWV0cmljcy5hZElkID0gbGFzdE1ldHJpY3MuYWRJZDtcblxuICAgICAgICAgICAgbGV0IGxheWVyUGVyRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgbGV0IHRvdGFsRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGlzdC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZE1ldHJpY3MgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MuYWREdXJhdGlvbiArPSBhZE1ldHJpY3MuYWREdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBtZXJnZWRNZXRyaWNzLnN0YWxsc051bWJlciArPSBhZE1ldHJpY3Muc3RhbGxzTnVtYmVyO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3Muc3RhbGxzRHVyYXRpb24gKz0gYWRNZXRyaWNzLnN0YWxsc0R1cmF0aW9uO1xuICAgICAgICAgICAgICAgIG1lcmdlZE1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlciArPSBhZE1ldHJpY3MubGF5ZXJTd2l0Y2hlc051bWJlcjtcblxuICAgICAgICAgICAgICAgIGxheWVyUGVyRHVyYXRpb24gKz0gYWRNZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlICogYWRNZXRyaWNzLmFkRHVyYXRpb247XG4gICAgICAgICAgICAgICAgdG90YWxEdXJhdGlvbiArPSBhZE1ldHJpY3MuYWREdXJhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvdGFsRHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRNZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlID0gTWF0aC5yb3VuZChsYXllclBlckR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNZXRyaWNzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdcXG57IGFkU2tpcHBhYmxlPScgKyB0aGlzLmFkU2tpcHBhYmxlICtcbiAgICAgICAgICAgICdcXG4gIGFkU2tpcHBlZD0nICsgdGhpcy5hZFNraXBwZWQgK1xuICAgICAgICAgICAgJ1xcbiAgYWRQcm9ncmVzcz0nICsgdGhpcy5hZFByb2dyZXNzICtcbiAgICAgICAgICAgICdcXG4gIGFkRHVyYXRpb249JyArIHRoaXMuYWREdXJhdGlvbiArXG4gICAgICAgICAgICAnXFxuICBzdGFsbHNOdW1iZXI9JyArIHRoaXMuc3RhbGxzTnVtYmVyICtcbiAgICAgICAgICAgICdcXG4gIHN0YWxsc0R1cmF0aW9uPScgKyB0aGlzLnN0YWxsc0R1cmF0aW9uICtcbiAgICAgICAgICAgICdcXG4gIGxheWVyU3dpdGNoZXNOdW1iZXI9JyArIHRoaXMubGF5ZXJTd2l0Y2hlc051bWJlciArXG4gICAgICAgICAgICAnXFxuICBhdmVyYWdlQml0cmF0ZT0nICsgdGhpcy5hdmVyYWdlQml0cmF0ZSArXG4gICAgICAgICAgICBcIlxcbiAgc2Vzc2lvblRva2VuPSdcIiArIHRoaXMuc2Vzc2lvblRva2VuICsgJ1xcJycgK1xuICAgICAgICAgICAgXCJcXG4gIGNyZWF0aXZlSWQ9J1wiICsgdGhpcy5jcmVhdGl2ZUlkICsgJ1xcJycgK1xuICAgICAgICAgICAgXCJcXG4gIGFkSWQ9J1wiICsgdGhpcy5hZElkICsgXCJcXCcgfVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkTWV0cmljc0J1aWxkZXIge1xuICAgIGFkTWV0cmljcztcblxuICAgIHRpbWVTcGVudFBlckxheWVyO1xuXG4gICAgcXVhcnRpbGVzO1xuXG4gICAgY29uc3RydWN0b3IoYWRNZXRyaWNzID0gdW5kZWZpbmVkLCB0aW1lU3BlbnRQZXJMYXllciA9IHVuZGVmaW5lZCwgcXVhcnRpbGVzID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhZE1ldHJpY3MgPT09IHVuZGVmaW5lZCAmJiB0aW1lU3BlbnRQZXJMYXllciA9PT0gdW5kZWZpbmVkICYmIHF1YXJ0aWxlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0ge307XG4gICAgICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3MgPSBhZE1ldHJpY3M7XG4gICAgICAgICAgICB0aGlzLnRpbWVTcGVudFBlckxheWVyID0gdGltZVNwZW50UGVyTGF5ZXI7XG4gICAgICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHF1YXJ0aWxlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltcG9ydChhZE1ldHJpY3MpIHtcbiAgICAgICAgaWYgKGFkTWV0cmljcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljcyA9IGFkTWV0cmljcztcbiAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXIgPSB7fTtcbiAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYWRNZXRyaWNzLmF2ZXJhZ2VCaXRyYXRlXSA9IGFkTWV0cmljcy5hZER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5xdWFydGlsZXMgPSB7fTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8PSAoYWRNZXRyaWNzLmFkUHJvZ3Jlc3MgLyAyNSkgOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXJ0aWxlc1tpICogMjVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFkU2tpcHBhYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkU2tpcHBhYmxlID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QWRTa2lwcGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkU2tpcHBlZCA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFByb2dyZXNzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucXVhcnRpbGVzW3ZhbHVlXSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkUHJvZ3Jlc3MgPSBPYmplY3Qua2V5cyh0aGlzLnF1YXJ0aWxlcykubGVuZ3RoICogMjUgLSAyNTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUFJPR1JFU1MnLCB0aGlzLmFkTWV0cmljcy5hZFByb2dyZXNzLCB0aGlzLnF1YXJ0aWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0U2Vzc2lvblRva2VuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLnNlc3Npb25Ub2tlbiA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldENyZWF0aXZlSWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuY3JlYXRpdmVJZCA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEFkSWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3MuYWRJZCA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFRpbWVTcGVudFBlckxheWVyKGJpdHJhdGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGJpdHJhdGUgPSBNYXRoLnJvdW5kKGJpdHJhdGUpO1xuXG4gICAgICAgIGlmIChiaXRyYXRlID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWVTcGVudE9uTGF5ZXIgPSB0aGlzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdO1xuICAgICAgICAgICAgaWYgKHRpbWVTcGVudE9uTGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV0gKz0gZHVyYXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNwZW50UGVyTGF5ZXJbYml0cmF0ZV0gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZExheWVyU3dpdGNoKCkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcy5sYXllclN3aXRjaGVzTnVtYmVyKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkU3RhbGwoZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hZE1ldHJpY3Muc3RhbGxzTnVtYmVyKys7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLnN0YWxsc0R1cmF0aW9uICs9IGR1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFkTWV0cmljcyA9IG5ldyBBZE1ldHJpY3MoKTtcbiAgICAgICAgdGhpcy50aW1lU3BlbnRQZXJMYXllciA9IHt9O1xuICAgICAgICB0aGlzLnF1YXJ0aWxlcyA9IHt9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFkTWV0cmljc0J1aWxkZXIobmV3IEFkTWV0cmljcyh0aGlzLmFkTWV0cmljcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZVNwZW50UGVyTGF5ZXIpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnF1YXJ0aWxlcykpO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICBsZXQgbGF5ZXJQZXJEdXJhdGlvbiA9IDA7XG4gICAgICAgIGxldCB0b3RhbER1cmF0aW9uID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IGJpdHJhdGUgaW4gdGhpcy50aW1lU3BlbnRQZXJMYXllcikge1xuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnRpbWVTcGVudFBlckxheWVyW2JpdHJhdGVdO1xuXG4gICAgICAgICAgICBsYXllclBlckR1cmF0aW9uICs9IGJpdHJhdGUgKiBkdXJhdGlvbjtcbiAgICAgICAgICAgIHRvdGFsRHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG90YWxEdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3MuYXZlcmFnZUJpdHJhdGUgPSBNYXRoLnJvdW5kKGxheWVyUGVyRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRNZXRyaWNzLmFkRHVyYXRpb24gPSB0b3RhbER1cmF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFkTWV0cmljcztcbiAgICB9XG59XG5cbiIsImltcG9ydCB7QWRNZXRyaWNzQnVpbGRlcn0gZnJvbSAnLi9BZE1ldHJpY3MnO1xuaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRGF0ZVV0aWxzJztcbmltcG9ydCBTbWFydExpYiBmcm9tICcuLi8uLi9TbWFydExpYic7XG5pbXBvcnQgQWRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnQnBrQWRNZXRyaWNzTWdyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRNZXRyaWNzTWFuYWdlciB7XG4gICAgaGFuZGxlcjtcblxuICAgIHRpbWVsaW5lO1xuXG4gICAgYnVpbGRlcjtcblxuICAgIGFkTWV0cmljcztcblxuICAgIGZpcnN0SW1hZ2U7XG4gICAgbGFzdExheWVyQml0cmF0ZTtcblxuICAgIGFkQnJlYWtQbGF5aW5nO1xuICAgIGFkUGxheWluZztcbiAgICBhZFNraXBwZWQ7XG4gICAgYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlO1xuICAgIGFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRoaXMuaGFuZGxlci5zZXNzaW9uUmVwb3J0LnRpbWVsaW5lO1xuXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBBZE1ldHJpY3NCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMuYWRNZXRyaWNzID0ge307XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuYWRNZXRyaWNzID0ge307XG5cbiAgICAgICAgdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUgPSAwO1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0TGF5ZXJCaXRyYXRlID0gMDtcblxuICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IC0xO1xuXG4gICAgICAgIHRoaXMuYWRCcmVha1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZFBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZFNraXBwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkZpcnN0SW1hZ2UoYml0cmF0ZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5sYXN0TGF5ZXJCaXRyYXRlID0gYml0cmF0ZTtcbiAgICAgICAgdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTGF5ZXJTd2l0Y2goYml0cmF0ZSkge1xuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZyAmJiB0aGlzLmZpcnN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRUaW1lU3BlbnRQZXJMYXllcih0aGlzLmxhc3RMYXllckJpdHJhdGUsIERhdGUubm93KCkgLSB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RMYXllckJpdHJhdGUgIT09IGJpdHJhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYWRkTGF5ZXJTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdExheWVyQml0cmF0ZSA9IGJpdHJhdGU7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRCcmVha1BsYXlpbmcpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHN0YWxsIHRpbWVyXG4gICAgICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YWxsRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZyAmJiB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc3RhbGxcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5hZGRTdGFsbChEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZExhc3RCdWZmZXJpbmdTdGFydERhdGUgPSAtMTtcbiAgICB9XG5cbiAgICBvblJlYnVmZmVyaW5nRW5kKCkge1xuICAgICAgICB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSA9IC0xO1xuICAgIH1cblxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgc2Vla2VkIGZyb20gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKHN0YXJ0KSArICcgdG8gJyArIERhdGVVdGlscy5mb3JtYXRUaW1lKGVuZCkpO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kIC0gc3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yaW5nIHNlZWtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3Jpbmcgc2VlayA8ICcgKyBBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9TRUVLX0VSUk9SX0RFTFRBICsgJ21zJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgYWQgaXMgYmVpbmcgc2tpcHBlZFxuICAgICAgICAgICAgICAgIHRoaXMuYWRTa2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIC8vIEFkIGVuZCB3aXRoIHN0b3BTdHJlYW1pbmdTZXNzaW9uXG4gICAgICAgIGlmICh0aGlzLmFkQnJlYWtQbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRCcmVha0JlZ2luKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAvLyBBZCBicmVha3Mgc3RhcnRcbiAgICAgICAgdGhpcy5hZEJyZWFrUGxheWluZyA9IHRydWU7XG5cbiAgICAgICAgLy8gQWRkIGFkIGJyZWFrIGJlZ2luIHRvIHRpbWVsaW5lXG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmUucHVzaEV2ZW50KFNtYXJ0TGliLmFuYWx5dGljc01vZHVsZT8uU2Vzc2lvblRyYWNrZXJFdmVudHMuQWRCcmVha1N0YXJ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRCZWdpbihzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQpIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IHNraXAgb2YgYW4gYWQgaW5zaWRlIGFuIGFkIGJyZWFrc1xuICAgICAgICBpZiAodGhpcy5hZFNraXBwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRFbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgYWQgbWV0cmljc1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkTGFzdExheWVyU3dpdGNoRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5idWlsZGVyLnJlc2V0KClcbiAgICAgICAgICAgIC5pbXBvcnQodGhpcy5hZE1ldHJpY3NbYWRJZF0pIC8vIGltcG9ydCBvbGQgYWQgbWV0cmljcyBTUiBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIC5zZXRTZXNzaW9uVG9rZW4oc2Vzc2lvblRva2VuKVxuICAgICAgICAgICAgLnNldENyZWF0aXZlSWQoY3JlYXRpdmVJZClcbiAgICAgICAgICAgIC5zZXRBZElkKGFkSWQpO1xuXG4gICAgICAgIHRoaXMuYWRQbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkFkU2tpcHBhYmxlKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0QWRTa2lwcGFibGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgb25BZFNraXBwZWQoc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkLCBvdGhlclNraXBwZWRBZElkcykge1xuICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gU2tpcCBhbGwgb3RoZXIgbmV4dCBhZHNcbiAgICAgICAgaWYgKG90aGVyU2tpcHBlZEFkSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBza2lwcGVkJyk7XG5cbiAgICAgICAgICAgIG90aGVyU2tpcHBlZEFkSWRzLmZvckVhY2goYWRJZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3NbYWRJZF0uYWRTa2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZFByb2dyZXNzKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5idWlsZGVyLmFkZFByb2dyZXNzKHByb2dyZXNzKTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwICYmIHRoaXMuYnVpbGRlci5xdWFydGlsZXNbKHByb2dyZXNzIC0gMjUpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkU2tpcHBlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkRW5kKHNlc3Npb25Ub2tlbiwgY3JlYXRpdmVJZCwgYWRJZCkge1xuICAgICAgICAvLyBEZWZhdWx0IGFkIGVuZFxuICAgICAgICB0aGlzLmhhbmRsZUFkRW5kKCk7XG5cbiAgICAgICAgdGhpcy5hZFBsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkFkQnJlYWtFbmQoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIC8vIEFkIGVuZCB3aXRoIHNraXBcbiAgICAgICAgaWYgKHRoaXMuYWRQbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuc2V0QWRTa2lwcGVkKHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFkRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZCBicmVha3MgZW5kXG4gICAgICAgIHRoaXMuYWRCcmVha1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICAvLyBBZGQgYWQgYnJlYWsgZW5kIHRvIHRpbWVsaW5lXG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmUucHVzaEV2ZW50UHJvZ3Jlc3MoU21hcnRMaWIuYW5hbHl0aWNzTW9kdWxlPy5TZXNzaW9uVHJhY2tlckV2ZW50cy5BZEJyZWFrU3RvcCwgdGhpcy5hZE1ldHJpY3MuYWRQcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktlZXBhbGl2ZVNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuICAgICAgICBpZiAodGhpcy5hZEJyZWFrUGxheWluZykge1xuICAgICAgICAgICAgY29uc3QgYnVpbGRlciA9IHRoaXMuYnVpbGRlci5jbG9uZSgpXG4gICAgICAgICAgICAgICAgLmFkZFRpbWVTcGVudFBlckxheWVyKHRoaXMubGFzdExheWVyQml0cmF0ZSwgRGF0ZS5ub3coKSAtIHRoaXMuYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRMYXN0QnVmZmVyaW5nU3RhcnREYXRlID49IDApIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFkZFN0YWxsKERhdGUubm93KCkgLSB0aGlzLmFkTGFzdEJ1ZmZlcmluZ1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1ldHJpY3MgPSBidWlsZGVyLmJ1aWxkKCk7XG4gICAgICAgICAgICBpZiAobWV0cmljcy5hZElkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkTWV0cmljc1ttZXRyaWNzLmFkSWRdID0gbWV0cmljcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlc3Npb25SZXBvcnQuYWRNZXRyaWNzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmFkTWV0cmljcyk7XG4gICAgfVxuXG4gICAgb25FbmRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcbiAgICAgICAgc2Vzc2lvblJlcG9ydC5hZE1ldHJpY3MgPSBPYmplY3QudmFsdWVzKHRoaXMuYWRNZXRyaWNzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBZEVuZCgpIHtcbiAgICAgICAgLy8gU3RvcmUgZmluYWwgcHJvZ3Jlc3MgYW5kIHRpbWUgc3BlbnQgb24gbGF5ZXIgdW50aWwgZW5kXG4gICAgICAgIHRoaXMuYnVpbGRlci5zZXRBZFNraXBwZWQodGhpcy5hZFNraXBwZWQpXG4gICAgICAgICAgICAuYWRkVGltZVNwZW50UGVyTGF5ZXIodGhpcy5sYXN0TGF5ZXJCaXRyYXRlLCBEYXRlLm5vdygpIC0gdGhpcy5hZExhc3RMYXllclN3aXRjaERhdGUpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBhZCBtZXRyaWNzXG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgICAgICAgaWYgKG1ldHJpY3MuYWRJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkTWV0cmljc1ttZXRyaWNzLmFkSWRdID0gbWV0cmljcztcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBtZXRyaWNzIDogJyArIG1ldHJpY3MudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gUmVzZXQgYWQgbWV0cmljcyBmb3IgdGhlIG5leHQgYWRcbiAgICAgICAgdGhpcy5idWlsZGVyLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWRTa2lwcGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25BZHNVcGRhdGVkKGFkRGF0YSkge1xuICAgICAgICAvLyBDcmVhdGUgZW1wdHkgYWQgcmVwb3J0ICh1c2VkIHRvIGNvdW50IHRoZSBudW1iZXIgb2YgYWQgZ2VuZXJhdGVkIGJ5IHRoZSBCa1lvdSlcbiAgICAgICAgYWREYXRhLmFkQnJlYWtzLmZvckVhY2goYWRCcmVhayA9PiB7XG4gICAgICAgICAgICBhZEJyZWFrLmFkcy5mb3JFYWNoKGFkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZE1ldHJpY3NbYWQuYWRJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWlsZGVyID0gbmV3IEFkTWV0cmljc0J1aWxkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZE1ldHJpY3NbYWQuYWRJZF0gPSBidWlsZGVyLnNldFNlc3Npb25Ub2tlbihhZERhdGEuc2Vzc2lvblRva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldENyZWF0aXZlSWQoYWQuY3JlYXRpdmVJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRBZElkKGFkLmFkSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKTtcblxuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWRkaW5nIGFkIG1ldHJpY3MgcmVwb3J0IGZvciBhZCBpZCAnICsgYWQuYWRJZCwgdGhpcy5oYW5kbGVyPy5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgUmVxdWVzdE1hbmFnZXIgZnJvbSAnLi4vLi4vcmVxdWVzdC9SZXF1ZXN0TWFuYWdlcic7XG5cbmNvbnN0IFRBRyA9ICdCcGtBZFRyYWNrZXInO1xuXG5jbGFzcyBUcmFja2VyIHtcbiAgICAvKipcbiAgICAgKiBUcmFja2VycyBuZWVkIHRvIGtub3cgaWYgaXQgaGFzIGJlZW4gYWxyZWFkeSBwcm9jZWVkZWRcbiAgICAgKiBJbiBjYXNlIG9mIHNlZWsgYW5kIGluIHNvbWUgY2FzZXMsIHRyYWNrZXJzIHNob3VsZCBub3QgYmUgY2FsbGVkXG4gICAgICogQSBzZWVrIGJlZm9yZSBhbiBhZCByZXNldCB0aGlzIG1hcFxuICAgICAqL1xuICAgIHByb2NlZWRlZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2NlZWRlZCA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSB0cmFja2VyIGNhbiBleGVjdXRlIGl0cyBjb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWQgUHJvY2VzcyBpZC4gSW4gc29tZSB0cmFja2VyLCBpdCByZXF1aXJlcyBtdWx0aXBsZSBjYW4gcHJvY2VzcyAocHJvY2VzcyBiZWdpbiwgcHJvY2VzcyBlbmQgZm9yIHRoZSBhZCBicmVhayB0cmFja2VyKVxuICAgICAqICAgICAgICAgICAwID0gcHJvY2Vzc0JlZ2luLCAxID0gcHJvY2Vzc0VuZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpZiByZXR1cm4gdHJ1ZSwgdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZCB3aGljaCBjYWxscyB0aGlzIGNhbiBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGNhblByb2Nlc3MoaWQgPSAwKSB7XG4gICAgICAgIC8vIGNvbnN0IGNhblByb2Nlc3MgPSBEYXRlLm5vdygpIC0gKHRoaXMucHJvY2VlZGVkW2lkXSB8fCAwKSA+IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEE7XG4gICAgICAgIGNvbnN0IGNhblByb2Nlc3MgPSB0aGlzLnByb2NlZWRlZFtpZF0gPT09IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoY2FuUHJvY2Vzcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ09LJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzLmFkSWQgfHwgdGhpcy5hZD8uYWRJZCwgJ2lkICcgKyBpZCwgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VlZGVkW2lkXSA9IERhdGUubm93KCk7XG4gICAgICAgIH0vKiBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOT0snLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHRoaXMuYWRJZCB8fCB0aGlzLmFkPy5hZElkLCAnaWQgJyArIGlkLCB0aGlzLnR5cGUpO1xuICAgICAgICB9Ki9cblxuICAgICAgICByZXR1cm4gY2FuUHJvY2VzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcHJvY2VlZGVkIG1hcFxuICAgICAqL1xuICAgIHJlc2V0UHJvY2VzcygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1JFU0VUJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzLmFkSWQgfHwgdGhpcy5hZD8uYWRJZCwgdGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5wcm9jZWVkZWQgPSB7fTtcbiAgICB9XG59XG5cbi8qKlxuICogQmFzZSBhZCBkYXRhIG9iamVjdFxuICogU3RvcmVkIGluIGFkIHRyYWNraW5nIG1hbmFnZXIgYW5kIHVzZWQgdG8gYnJvd3NlciBhZHNcbiAqL1xuZXhwb3J0IGNsYXNzIEFkRGF0YVRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIFNtYXJ0TGliIGFkIHRyYWNraW5nIG1hbmFnZXJcbiAgICAgKi9cbiAgICBhZFRyYWNraW5nTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHNlc3Npb250b2tlblxuICAgICAqL1xuICAgIHNlc3Npb25Ub2tlbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHRpbWVyZWZlcmVuY2VfbXNcbiAgICAgKi9cbiAgICB0aW1lUmVmZXJlbmNlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWRwb2RzXG4gICAgICovXG4gICAgYWRCcmVha3M7XG5cbiAgICBjb25zdHJ1Y3RvcihhZFRyYWNraW5nTWFuYWdlciwgc2Vzc2lvblRva2VuLCB0aW1lUmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMuYWRUcmFja2luZ01hbmFnZXIgPSBhZFRyYWNraW5nTWFuYWdlcjtcbiAgICAgICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBzZXNzaW9uVG9rZW47XG4gICAgICAgIHRoaXMudGltZVJlZmVyZW5jZSA9IHRpbWVSZWZlcmVuY2U7XG4gICAgICAgIHRoaXMuYWRCcmVha3MgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgYWQgYnJlYWsgYWZ0ZXIgdGhlIGdpdmVuIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIHBvc2l0aW9uIHRvIGNoZWNrXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgb2YgaGFzIHJlbWFpbmluZyBhZCBicmVha3MgYWZ0ZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBoYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZEJyZWFrcy5maW5kKGFkQnJlYWsgPT4gcG9zaXRpb24gPCBhZEJyZWFrLnBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbikgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBwcm9ncmVzc2lvbiBpZiBzZWVraW5nXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKi9cbiAgICByZXNldFByb2dyZXNzaW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRCcmVha3MuZm9yRWFjaChhZEJyZWFrID0+IGFkQnJlYWsucmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZCBicmVhayBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBBZEJyZWFrVHJhY2tlciBleHRlbmRzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIEFkIGRhdGEgdHJhY2tlclxuICAgICAqL1xuICAgIGFkRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGlkXG4gICAgICovXG4gICAgaWQ7IC8vIGlkXG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBzdGFydHRpbWVfbXNcbiAgICAgKi9cbiAgICBwb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEFkanVzdGVkIGFkIGJyZWFrIGR1cmF0aW9uIGNhbGN1bGF0ZWQgYnkgU21hcnRMaWIgYW5kIHVzZWQgYnkgdGhlIHRyYWNraW5nXG4gICAgICogSW4gc29tZSBjYXNlcywgdGhlIGR1cmF0aW9uIHJldHVybmVkIGJ5IHRoZSBCa1lvdSBpcyBub3QgY29ycmVjdCBhbmQgaGFzIHRvIGJlIGFkanVzdGVkXG4gICAgICovXG4gICAgZHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBEdXJhdGlvbiBvZiB0aGUgY3VycmVudCBhZCBicmVhayBpbiB0aGUgdHJhY2tpbmcgZmlsZSAoQmtZb3UgZHVyYXRpb25fbXMpXG4gICAgICogRm9yIExJVkUgY29udGVudHMsIGFjdHVhbER1cmF0aW9uIGNhbiBiZSBkaWZmZXJlbnQgb2YgZXhwZWN0ZWREdXJhdGlvbiB3aGVuIHRoZSBhZCBicmVhayBpcyBub3QgdG90YWxseSBnZW5lcmF0ZWRcbiAgICAgKi9cbiAgICAvLyBhY3R1YWxEdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEV4cGVjdGVkIGR1cmF0aW9uIG9mIHRoZSBmdWxsIGFkIGJyZWFrXG4gICAgICogRm9yIFZPRCBjb250ZW50cywgZXhwZWN0ZWREdXJhdGlvbiA9PSBhY3R1YWxEdXJhdGlvblxuICAgICAqL1xuICAgIC8vIGV4cGVjdGVkRHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBDb250ZW50IHR5cGVcbiAgICAgKi9cbiAgICBsaXZlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWRzXG4gICAgICovXG4gICAgYWRzO1xuXG4gICAgY29uc3RydWN0b3IoYWREYXRhLCBpZCwgcG9zaXRpb24sIGR1cmF0aW9uLCBsaXZlKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZERhdGEgPSBhZERhdGE7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMubGl2ZSA9IGxpdmU7XG4gICAgICAgIHRoaXMuYWRzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcHJvZ3Jlc3Npb24gaWYgc2Vla2luZ1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgICovXG4gICAgcmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZXNldFByb2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRzLmZvckVhY2goYWQgPT4gYWQucmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdHJhY2tlcnMgd2hlbiBzdGFydGluZyBhbiBhZFxuICAgICAqL1xuICAgIHByb2Nlc3NCZWdpbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgYWQgYnJlYWsgYmVnaW4uLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0R1cmF0aW9uOiAnICsgdGhpcy5kdXJhdGlvbiArICdtcycsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgaW50ZXJuYWwgZXZlbnRzXG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkQnJlYWtEYXRhKHRoaXMpO1xuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZEJyZWFrQmVnaW4odGhpcy5hZERhdGEuc2Vzc2lvblRva2VuKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHB1YmxpYyBldmVudHNcbiAgICAgICAgY29uc3QgYWRFdmVudHNMaXN0ZW5lciA9IGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuYWRTZXNzaW9uPy5hZEV2ZW50c0xpc3RlbmVyO1xuICAgICAgICBhZEV2ZW50c0xpc3RlbmVyPy5vbkFkQnJlYWtCZWdpbih0aGlzLnRvRGF0YSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRyYWNrZXJzIHdoZW4gZW5kaW5nIGFuIGFkXG4gICAgICovXG4gICAgcHJvY2Vzc0VuZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3MoMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gdGhpcy5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Byb2Nlc3NpbmcgYWQgYnJlYWsgZW5kLi4uJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRCcmVha0VuZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4pO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHVibGljIGV2ZW50c1xuICAgICAgICBjb25zdCBhZEV2ZW50c0xpc3RlbmVyID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5hZFNlc3Npb24/LmFkRXZlbnRzTGlzdGVuZXI7XG4gICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRCcmVha0VuZCh0aGlzLnRvRGF0YSgpKTtcblxuICAgICAgICAvLyBPbmNlIHBsYXllZCwgdGhlIGFkIGJyZWFrIGNhbiBiZSByZXBsYXllZCBhZ2FpblxuICAgICAgICAvLyBJbiBzb21lIGNhc2Ugb2YgQmtZb3Ugbm8gaW5zZXJ0aW9uIGVycm9yLCBhZCBicmVhayBlbmQgaXMgY2FsbGVkIGJlZm9yZSB0aGUgYWN0dWFsIHBvc2l0aW9uLlxuICAgICAgICAvLyAgIFdoZW4gYW4gYWQgaXMgZGV0ZWN0ZWQgYWQgYnJlYWsgYmVnaW4gc2hvdWxkIGJlIGNhbGxlZCBhZ2FpblxuICAgICAgICB0aGlzLnJlc2V0UHJvY2VzcygpO1xuICAgIH1cblxuICAgIHJlc2V0UHJvY2VzcygpIHtcbiAgICAgICAgc3VwZXIucmVzZXRQcm9jZXNzKCk7XG5cbiAgICAgICAgLy8gT25jZSBhbiBhZCBicmVhayBoYXMgYmVlbiBjb21wbGV0ZWQsIGFsbCBhZCBjYW4gYmUgcmVwbGF5ZWQgYWdhaW5cbiAgICAgICAgLy8gICBEb24ndCByZXNldCB0aGUgcHJvZ3Jlc3Npb24sIGl0IHJlcXVpcmVzIHRvIHNlZWsgYmVmb3JlIHRoZSBhZCBzdGFydCBwb3NpdGlvbiB0byByZXNldCBpdC5cbiAgICAgICAgLy8gICBPbmx5IG5lZWQgdG8gdHJpZ2dlciBhZCBldmVudHMgaWYgc2Vla2luZyBiYWNrd2FyZFxuICAgICAgICB0aGlzLmFkcy5mb3JFYWNoKGFkID0+IGFkLnJlc2V0UHJvY2VzcygpKTtcbiAgICB9XG5cbiAgICB0b0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb246IHRoaXMucG9zaXRpb24gfHwgMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmxpdmUgPT09IHRydWUgPyAtMSA6IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICBhZHM6IHRoaXMuYWRzLm1hcChhZCA9PiBhZC50b0RhdGEoKSksXG4gICAgICAgICAgICBhZENvdW50OiB0aGlzLmxpdmUgPT09IHRydWUgPyAtMSA6IHRoaXMuYWRzLmxlbmd0aFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZCBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBBZFRyYWNrZXIgZXh0ZW5kcyBUcmFja2VyIHtcbiAgICAvKipcbiAgICAgKiBBZCBicmVhayB0cmFja2VyXG4gICAgICovXG4gICAgYWRCcmVhaztcblxuICAgIC8qKlxuICAgICAqIEluZGV4IGluIHRoZSBjdXJyZW50IGFkIGJyZWFrXG4gICAgICovXG4gICAgaW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBzdGFydHRpbWVfbXNcbiAgICAgKi9cbiAgICBwb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGR1cmF0aW9uX21zXG4gICAgICovXG4gICAgZHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBza2lwcGFibGVfbXNcbiAgICAgKi9cbiAgICBza2lwcGFibGVQb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGFkIGlzIHNraXBwYWJsZVxuICAgICAqL1xuICAgIHNraXBwYWJsZTtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGNyZWF0aXZlaWRcbiAgICAgKi9cbiAgICBjcmVhdGl2ZUlkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWRpZCArICctJyArIHN0YXJ0dGltZV9tc1xuICAgICAqL1xuICAgIGFkSWQ7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSB0cmFja2luZ2V2ZW50c1xuICAgICAqL1xuICAgIGV2ZW50cztcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHZpZGVvY2xpY2tzIG9iamVjdFxuICAgICAqIEpTT04gdmFsdWUgOiB7IGNsaWNrdGhyb3VnaHVybDogc3RyaW5nLCBjbGlja3RyYWNraW5nOiBbe2NsaWNrdXJsOiBzdHJpbmd9XSwgY3VzdG9tY2xpY2s6IFt7Y2xpY2t1cmw6IHN0cmluZ31dIH1cbiAgICAgKiBNYXBwZWQgdmFsdWUgOiB7IHVyaTogc3RyaW5nLCB0cmFja2VyczogW3tjbGlja3VybDogc3RyaW5nfV0sIGN1c3RvbUNsaWNrOiBbe2NsaWNrdXJsOiBzdHJpbmd9XSB9XG4gICAgICovXG4gICAgY2xpY2thYmxlOyAvLyB2aWRlb2NsaWNrcyB7IGNsaWNrdGhyb3VnaHVybCwgY2xpY2t0cmFja2luZywgY3VzdG9tY2xpY2sgfSA9PiB1cmksIHRyYWNrZXJzLCBjdXN0b21DbGlja1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgYWR2ZXJpZmljYXRpb25zIGFycmF5XG4gICAgICogSlNPTiB2YWx1ZSA6IFsgeyB2ZW5kb3I6IHN0cmluZywgamF2YXNjcmlwdHJlc291cmNlczogW3t9XSwgZXhlY3V0YWJsZXJlc291cmNlczogW3t9XSwgdHJhY2tpbmdldmVudHM6IFt7fV0sIHZlcmlmaWNhdGlvbnBhcmFtZXRlcnM6IHN0cmluZ30gXVxuICAgICAqIE1hcHBlZCB2YWx1ZSA6IFsge3ZlbmRvcjogc3RyaW5nLCBqYXZhc2NyaXB0UmVzb3VyY2VzOiBbe31dLCBleGVjdXRhYmxlUmVzb3VyY2VzOiBbe31dLCB0cmFja2luZ0V2ZW50czogW3t9XSwgdmVyaWZpY2F0aW9uUGFyYW1ldGVyczogc3RyaW5nIH0gXVxuICAgICAqL1xuICAgIHZlcmlmaWNhdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBpbnRlcnZhbCB3YXRjaGVkXG4gICAgICogRmxhdHRlZCBhdCBlYWNoIGFkIGl0ZXJhdGlvblxuICAgICAqL1xuICAgIHdhdGNoZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHByb2dyZXNzaW9uICgwLjAgdG8gMS4wKVxuICAgICAqIFJlc2V0IHdoZW4gc2Vla1xuICAgICAqL1xuICAgIHByb2dyZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQXNzb2NpYXRlZCBub24gbGluZWFyIGFkIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgbm9uTGluZWFyQWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihhZEJyZWFrLCBpbmRleCwgcG9zaXRpb24sIGR1cmF0aW9uLCBza2lwcGFibGUsIHNraXBwYWJsZVBvc2l0aW9uLCBjcmVhdGl2ZUlkLCBhZElkLCBjbGlja2FibGUsIHZlcmlmaWNhdGlvbnMsIG5vbkxpbmVhckFkKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hZEJyZWFrID0gYWRCcmVhaztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5za2lwcGFibGUgPSBza2lwcGFibGU7XG4gICAgICAgIHRoaXMuc2tpcHBhYmxlUG9zaXRpb24gPSBza2lwcGFibGVQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5jcmVhdGl2ZUlkID0gY3JlYXRpdmVJZDtcbiAgICAgICAgdGhpcy5hZElkID0gYWRJZDtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSBjbGlja2FibGU7XG4gICAgICAgIHRoaXMudmVyaWZpY2F0aW9ucyA9IHZlcmlmaWNhdGlvbnM7XG4gICAgICAgIHRoaXMud2F0Y2hlZCA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMDtcbiAgICAgICAgdGhpcy5ub25MaW5lYXJBZCA9IG5vbkxpbmVhckFkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZsYXQgd2F0Y2ggaW50ZXJ2YWxzIGFycmF5XG4gICAgICovXG4gICAgZmxhdFdhdGNoZWQoKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy53YXRjaGVkKSk7IC8vIGRlZXAgY29weVxuICAgICAgICBsZXQgaW50ZXJ2YWxzID0gcmFuZ2VzLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICBsZXQgdG9wID0gbnVsbDtcblxuICAgICAgICAvLyBzb3J0IHRoZSBpbnRlcnZhbHMgYmFzZWQgb24gdGhlaXIgc3RhcnQgdmFsdWVzXG4gICAgICAgIGludGVydmFscyA9IGludGVydmFscy5zb3J0KChzdGFydCwgZW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnRbMF0gPiBlbmRbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydFswXSA8IGVuZFswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwdXNoIHRoZSAxc3QgaW50ZXJ2YWwgaW50byB0aGUgc3RhY2tcbiAgICAgICAgc3RhY2sucHVzaChpbnRlcnZhbHNbMF0pO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gdGhlIG5leHQgaW50ZXJ2YWwgYW5kIG1lcmdlIGlmIG5lZWRlZFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGludGVydmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSB0b3AgZWxlbWVudFxuICAgICAgICAgICAgdG9wID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGlmICh0b3BbMV0gPCBpbnRlcnZhbHNbaV1bMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU1RBQ0sgMScpO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IGludGVydmFsIGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIHN0YWNrIHRvcCBlbGVtZW50LCBwdXNoIGl0IHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goaW50ZXJ2YWxzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9wWzFdIDwgaW50ZXJ2YWxzW2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NUQUNLIDInKTtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgdXBkYXRlIHRoZSBlbmQgdmFsdWUgb2YgdGhlIHRvcCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gaWYgZW5kIG9mIGN1cnJlbnQgaW50ZXJ2YWwgaXMgaGlnaGVyXG4gICAgICAgICAgICAgICAgdG9wWzFdID0gaW50ZXJ2YWxzW2ldWzFdO1xuICAgICAgICAgICAgICAgIC8vIHRvcC5kdXJhdGlvbiA9IHRvcC5lbmQgLSB0b3Auc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBlcXVhbCA9IEpTT04uc3RyaW5naWZ5KHRoaXMud2F0Y2hlZCkgPT09IEpTT04uc3RyaW5naWZ5KHN0YWNrKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZMQVQnLCBlcXVhbCwgc3RhY2spO1xuXG4gICAgICAgIHRoaXMud2F0Y2hlZCA9IHN0YWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2dyZXNzaW9uIGlmIHNlZWtpbmdcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3Npb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDw9IHRoaXMucG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9jZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50cyA9PiBldmVudHMucmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgcHJvZ3Jlc3Npb25cbiAgICAgKiBDYWxsIHRyYWNrZXJzIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHBvc2l0aW9uU3RhcnQgcHJvZ3Jlc3Npb24gc3RhcnQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gcG9zaXRpb25FbmQgcHJvZ3Jlc3Npb24gZW5kIHBvc2l0aW9uXG4gICAgICovXG4gICAgdXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uU3RhcnQgPiBwb3NpdGlvbkVuZCB8fFxuICAgICAgICAgICAgcG9zaXRpb25TdGFydCA8IHRoaXMucG9zaXRpb24gfHwgcG9zaXRpb25FbmQgPCB0aGlzLnBvc2l0aW9uIHx8XG4gICAgICAgICAgICBwb3NpdGlvblN0YXJ0ID4gdGhpcy5wb3NpdGlvbiArIHRoaXMuZHVyYXRpb24gfHwgcG9zaXRpb25FbmQgPiB0aGlzLnBvc2l0aW9uICsgdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBzYXZlIGxhc3QgcHJvZ3Jlc3Npb24gPz8gYXZvaWQgY2FsY3VsYXRpbmcgYXQgZWFjaCBpdGVyYXRpb25cbiAgICAgICAgY29uc3QgZHVyYXRpb25TdGFydCA9IHRoaXMud2F0Y2hlZC5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArICh2YWx1ZVsxXSAtIHZhbHVlWzBdKSwgMCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzaW9uU3RhcnQgPSBkdXJhdGlvblN0YXJ0IC8gdGhpcy5kdXJhdGlvbjtcblxuICAgICAgICB0aGlzLndhdGNoZWQucHVzaChbcG9zaXRpb25TdGFydCAtIHRoaXMucG9zaXRpb24sIHBvc2l0aW9uRW5kIC0gdGhpcy5wb3NpdGlvbl0pOyAvLyB0b2RvIHJvdW5kIHZhbHVlc1xuICAgICAgICB0aGlzLmZsYXRXYXRjaGVkKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdXQVRDSEVEJywgdGhpcy53YXRjaGVkKTtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbkVuZCA9IHRoaXMud2F0Y2hlZC5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArICh2YWx1ZVsxXSAtIHZhbHVlWzBdKSwgMCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzaW9uRW5kID0gZHVyYXRpb25FbmQgLyB0aGlzLmR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSBwcm9ncmVzc2lvbkVuZDtcblxuICAgICAgICAvLyBUcmlnZ2VyIHByb2dyZXNzIGV2ZW50XG4gICAgICAgIGNvbnN0IGFkRGF0YSA9IHRoaXMuYWRCcmVhay5hZERhdGE7XG4gICAgICAgIGNvbnN0IGFkVHJhY2tpbmdNYW5hZ2VyID0gYWREYXRhLmFkVHJhY2tpbmdNYW5hZ2VyO1xuXG4gICAgICAgIC8qIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDAuMDAgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMC4wMCkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmNyZWF0aXZlSWQsIHRoaXMuYWRJZCwgMCk7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDAuMjUgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMC4yNSkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCAyNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZ3Jlc3Npb25TdGFydCA8PSAwLjUwICYmIHByb2dyZXNzaW9uRW5kID49IDAuNTApIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcywgNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gMC43NSAmJiBwcm9ncmVzc2lvbkVuZCA+PSAwLjc1KSB7XG4gICAgICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZFByb2dyZXNzKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMsIDc1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlmIChwcm9ncmVzc2lvblN0YXJ0IDw9IDEuMDAgJiYgcHJvZ3Jlc3Npb25FbmQgPj0gMS4wMCkge1xuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmNyZWF0aXZlSWQsIHRoaXMuYWRJZCwgMTAwKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudCA9PiBldmVudC5wcm9jZXNzRXZlbnRzKHByb2dyZXNzaW9uU3RhcnQsIHByb2dyZXNzaW9uRW5kKSk7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHByb2dyZXNzZWQgZnJvbSAnICsgTWF0aC5mbG9vcihwcm9ncmVzc2lvblN0YXJ0ICogMTAwMDAwKSAvIDEwMDAgKyAnJSB0byAnICsgTWF0aC5mbG9vcihwcm9ncmVzc2lvbkVuZCAqIDEwMDAwMCkgLyAxMDAwICsgJyUnLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRyYWNrZXJzIHdoZW4gc3RhcnRpbmcgYW4gYWRcbiAgICAgKi9cbiAgICBwcm9jZXNzQmVnaW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzKDApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZERhdGEgPSB0aGlzLmFkQnJlYWsuYWREYXRhO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IGFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBiZWdpbiAnICsgdGhpcy5hZElkICsgJy4uLicsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU3RhcnQ6ICcgKyAodGhpcy5wb3NpdGlvbikgKyAnbXMnLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0VuZCAgOiAnICsgKHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uKSArICdtcycsIGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnRHVyYXRpb246ICcgKyB0aGlzLmR1cmF0aW9uICsgJ21zJywgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWREYXRhKHRoaXMpO1xuICAgICAgICBhZFRyYWNraW5nTWFuYWdlci5ub3RpZnlBZEJlZ2luKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5za2lwcGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkU2tpcHBhYmxlKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMuc2tpcHBhYmxlUG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uLCB0aGlzLmFkQnJlYWsucG9zaXRpb24gKyB0aGlzLmFkQnJlYWsuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkUHJvZ3Jlc3MoYWREYXRhLnNlc3Npb25Ub2tlbiwgdGhpcywgMCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBwdWJsaWMgZXZlbnRzXG4gICAgICAgIGNvbnN0IGFkRXZlbnRzTGlzdGVuZXIgPSBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmFkU2Vzc2lvbj8uYWRFdmVudHNMaXN0ZW5lcjtcbiAgICAgICAgY29uc3QgYWQgPSB0aGlzLnRvRGF0YSgpO1xuICAgICAgICBjb25zdCBhZEJyZWFrID0gdGhpcy5hZEJyZWFrLnRvRGF0YSgpO1xuICAgICAgICBhZEV2ZW50c0xpc3RlbmVyPy5vbkFkQmVnaW4oYWQsIGFkQnJlYWspO1xuICAgICAgICBpZiAodGhpcy5za2lwcGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRTa2lwcGFibGUoYWQsIGFkQnJlYWssIHRoaXMuc2tpcHBhYmxlUG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uLCB0aGlzLmFkQnJlYWsucG9zaXRpb24gKyB0aGlzLmFkQnJlYWsuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0cmFja2VycyB3aGVuIGVuZGluZyBhbiBhZFxuICAgICAqL1xuICAgIHByb2Nlc3NFbmQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzKDEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZERhdGEgPSB0aGlzLmFkQnJlYWsuYWREYXRhO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IGFkRGF0YS5hZFRyYWNraW5nTWFuYWdlcjtcblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhZCBlbmQgJyArIHRoaXMuYWRJZCArICcuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGludGVybmFsIGV2ZW50c1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzLCBwcm9jZXNzIDEwMCUgaWYgdHJhY2tpbmcgcHJvZ3Jlc3Npb24gaXMgMC45NSUrXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzaW9uID49IDAuOTUpIHtcbiAgICAgICAgICAgIC8vIFNldCBwcm9ncmVzc2lvbiB0byAxXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyB0aGlzLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgYWRUcmFja2luZ01hbmFnZXIubm90aWZ5QWRQcm9ncmVzcyhhZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGFkVHJhY2tpbmdNYW5hZ2VyLm5vdGlmeUFkRW5kKGFkRGF0YS5zZXNzaW9uVG9rZW4sIHRoaXMpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgcHVibGljIGV2ZW50c1xuICAgICAgICBjb25zdCBhZEV2ZW50c0xpc3RlbmVyID0gYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5hZFNlc3Npb24/LmFkRXZlbnRzTGlzdGVuZXI7XG4gICAgICAgIGFkRXZlbnRzTGlzdGVuZXI/Lm9uQWRFbmQodGhpcy50b0RhdGEoKSwgdGhpcy5hZEJyZWFrLnRvRGF0YSgpKTtcbiAgICB9XG5cbiAgICB0b0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIGNyZWF0aXZlSWQ6IHRoaXMuY3JlYXRpdmVJZCxcbiAgICAgICAgICAgIGFkSWQ6IHRoaXMuYWRJZCxcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICBza2lwUG9zaXRpb246IHRoaXMuc2tpcHBhYmxlUG9zaXRpb24sXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIGNsaWNrVVJMOiB0aGlzLmNsaWNrYWJsZS51cmksXG4gICAgICAgICAgICBub25MaW5lYXJBZDogdGhpcy5ub25MaW5lYXJBZFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZCBldmVudCBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBBZEV2ZW50VHJhY2tlciBleHRlbmRzIFRyYWNrZXIge1xuICAgIC8qKlxuICAgICAqIEFkIHRyYWNrZXJcbiAgICAgKi9cbiAgICBhZDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IHR5cGVcbiAgICAgKi9cbiAgICB0eXBlO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgY2FsbGJhY2t1cmxcbiAgICAgKi9cbiAgICB1cmw7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBvZmZzZXRcbiAgICAgKi9cbiAgICBvZmZzZXQ7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSB0aW1lX21zXG4gICAgICogRGVwcmVjYXRlZFxuICAgICAqL1xuICAgIHBvc2l0aW9uO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdHJpZ2dlciBwb3NpdGlvblxuICAgICAqL1xuICAgIHByb2dyZXNzaW9uO1xuXG4gICAgY29uc3RydWN0b3IoYWQsIHR5cGUsIHVybCwgb2Zmc2V0LCBwb3NpdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYWQgPSBhZDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc1Byb2dyZXNzaW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcHJvZ3Jlc3Npb24gaWYgc2Vla2luZ1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgICovXG4gICAgcmVzZXRQcm9ncmVzc2lvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gdGhpcy5hZC5wb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZXNldFByb2Nlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBldmVudCB0cmlnZ2VyIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJvY2Vzc1Byb2dyZXNzaW9uKCkge1xuICAgICAgICBjb25zdCB0eXBlID0gKHRoaXMudHlwZSAhPT0gdW5kZWZpbmVkID8gdGhpcy50eXBlLnRvTG93ZXJDYXNlKCkgOiB1bmRlZmluZWQpO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9ICh0aGlzLnBvc2l0aW9uIC0gdGhpcy5hZC5wb3NpdGlvbikgLyB0aGlzLmFkLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Npb24gPSAwLjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmaXJzdHF1YXJ0aWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC4yNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pZHBvaW50JzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGhpcmRxdWFydGlsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDAuNzU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDEuMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2dyZXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzaW9uID0gdGhpcy5vZmZzZXQgLyB0aGlzLmFkLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW1wcmVzc2lvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc2lvbiA9IDAuMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyeSB0byBwcm9jZXNzIGV2ZW50XG4gICAgICogVHJpZ2dlciBldmVudCBpZiBldmVudCB0cmlnZ2VyIHByb2dyZXNzaW9uIGlzIGJldHdlZW4gcHJvZ3Jlc3Npb24gc3RhcnQgYW5kIHByb2dyZXNzaW9uIGVuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2dyZXNzaW9uU3RhcnQgcHJvZ3Jlc3Npb24gc3RhcnRcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3Npb25FbmQgcHJvZ3Jlc3Npb24gZW5kXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IGhhcyBiZWVuIHByb2NlZWRlZFxuICAgICAqL1xuICAgIHByb2Nlc3NFdmVudHMocHJvZ3Jlc3Npb25TdGFydCwgcHJvZ3Jlc3Npb25FbmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3Npb25TdGFydCArICcgPCAnICsgdGhpcy5wcm9ncmVzc2lvbiArICcgPCAnICsgcHJvZ3Jlc3Npb25FbmQpO1xuICAgICAgICBjb25zdCBhZFRyYWNraW5nTWFuYWdlciA9IHRoaXMuYWQuYWRCcmVhay5hZERhdGEuYWRUcmFja2luZ01hbmFnZXI7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzaW9uU3RhcnQgPD0gdGhpcy5wcm9ncmVzc2lvbiAmJiB0aGlzLnByb2dyZXNzaW9uIDw9IHByb2dyZXNzaW9uRW5kKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2VzcygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyAnICsgKHRoaXMudHlwZSB8fCAndGltZWQgZXZlbnQnKSArICcgKCcgKyAoTWF0aC5mbG9vcih0aGlzLnByb2dyZXNzaW9uICogMTAwKSkgKyAnJSkuLi4nLCBhZFRyYWNraW5nTWFuYWdlci5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXJsICE9PSB1bmRlZmluZWQgJiYgdGhpcy51cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXF1ZXN0aW5nICcgKyB0aGlzLnVybCwgYWRUcmFja2luZ01hbmFnZXIuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZEV2ZW50KGFkVHJhY2tpbmdNYW5hZ2VyLmhhbmRsZXIsIHRoaXMudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBKb2JNYW5hZ2VyIGZyb20gJy4uLy4uL3NlcnZpY2UvSm9iTWFuYWdlcic7XG5pbXBvcnQgUmVxdWVzdE1hbmFnZXIgZnJvbSAnLi4vLi4vcmVxdWVzdC9SZXF1ZXN0TWFuYWdlcic7XG5pbXBvcnQge0xvZ2dlck1hbmFnZXJ9IGZyb20gJy4uLy4uL3V0aWxzL0xvZ2dlck1hbmFnZXInO1xuXG5pbXBvcnQge0FkQnJlYWtUcmFja2VyLCBBZERhdGFUcmFja2VyLCBBZEV2ZW50VHJhY2tlciwgQWRUcmFja2VyfSBmcm9tICcuL0FkVHJhY2tlcic7XG5cbmltcG9ydCB7IFNpbWlkUGxheWVyIH0gZnJvbSAnQGJyb2FkcGVhay9zaW1pZCc7XG5cbmNvbnN0IFRBRyA9ICdCcGtBZFRyYWNraW5nTWdyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRUcmFja2luZ01hbmFnZXIge1xuICAgIHN0YXRpYyBQT1NJVElPTl9VUERBVEVfSU5URVJWQUwgPSAxMDAwO1xuXG4gICAgc3RhdGljIFBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEgPSA2MDAwO1xuXG4gICAgc3RhdGljIFNFU1NJT05fVVBEQVRFX0lOVEVSVkFMID0gNTAwMDtcblxuICAgIC8vIHN0YXRpYyBOT05DRV9FWFBJUkFUSU9OX1RJTUUgPSA1ICogNjAgKiAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogU2Vzc2lvbiBoYW5kbGVyXG4gICAgICovXG4gICAgaGFuZGxlcjtcblxuICAgIC8qKlxuICAgICAqIFBsYXllciBhZGFwdGVyXG4gICAgICovXG4gICAgcGxheWVyQWRhcHRlcjtcblxuICAgIC8qKlxuICAgICAqIEFkIHRyYWNraW5nIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGxpc3RlbmVycztcblxuICAgIC8qKlxuICAgICAqIFNJTUlEIHBsYXllclxuICAgICAqL1xuICAgIHNpbWlkUGxheWVyO1xuXG4gICAgLyoqXG4gICAgICogQWQgZGF0YSAoYWxsIGFkIGJyZWFrcywgYWxsIGFkcyBhbmQgYWxsIGV2ZW50cylcbiAgICAgKi9cbiAgICBhZERhdGE7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGFkIGxpc3RcbiAgICAgKi9cbiAgICBhZExpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgcG9zaXRpb24gam9iXG4gICAgICogVXNlZCB0byB0cmFjayB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZVBvc2l0aW9uSm9iO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEJrWW91IHNlc3Npb24gam9iXG4gICAgICovXG4gICAgdXBkYXRlU2Vzc2lvbkpvYjtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIHNlc3Npb24gc3RhcnRlZFxuICAgICAqL1xuICAgIHN0YXJ0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwYXVzZWRcbiAgICAgKi9cbiAgICBwYXVzZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBidWZmZXJpbmdcbiAgICAgKi9cbiAgICBidWZmZXJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5YmFjayBwb3NpdGlvblxuICAgICAqL1xuICAgIGxhc3RQb3NpdGlvbjtcblxuICAgIC8qKlxuICAgICAqIFBsYXliYWNrIHBvc2l0aW9uIHdoZW4gb25QYXVzZSBpcyBjYWxsZWRcbiAgICAgKi9cbiAgICBsYXN0UG9zaXRpb25CZWZvcmVQYXVzZTtcblxuICAgIC8qKlxuICAgICAqIExhc3Qgc2VlayBwb3NpdGlvbiwgdXNlZCB0byBoYW5kbGUgYmFkIHBvc2l0aW9uIHdoZW4gb25CdWZmZXJpbmdFbmQgY2FsbGVkXG4gICAgICovXG4gICAgbGFzdFBvc2l0aW9uQWZ0ZXJTZWVrO1xuXG4gICAgLyoqXG4gICAgICogRmlyc3QgaW1hZ2UgZGF0ZVxuICAgICAqL1xuICAgIGZpcnN0SW1hZ2VEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCB0cmFja2VyXG4gICAgICovXG4gICAgY3VycmVudEFkVHJhY2tlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgYnJlYWsgdHJhY2tlclxuICAgICAqL1xuICAgIGN1cnJlbnRBZEJyZWFrVHJhY2tlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYWQgZGF0YSBmb3IgZ2V0Q3VycmVudEFkKClcbiAgICAgKi9cbiAgICBjdXJyZW50QWREYXRhO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBhZCBicmVhayBkYXRhIGZvciBnZXRDdXJyZW50QWRCcmVhaygpXG4gICAgICovXG4gICAgY3VycmVudEFkQnJlYWtEYXRhO1xuXG4gICAgLyoqXG4gICAgICogR29vZ2xlIFBBTCBzZXNzaW9uXG4gICAgICovXG4gICAgYWRQYWxTZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbiBmbGFnXG4gICAgICovXG4gICAgYmtZb3VTZXNzaW9uO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3Ugc2Vzc2lvbiB0b2tlblxuICAgICAqL1xuICAgIHNlc3Npb25Ub2tlbjtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkIHRyYWNraW5nIGJhc2UgVVJMXG4gICAgICovXG4gICAgYmFzZVVSTDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGFkIHRyYWNraW5nIG5vbmNlXG4gICAgICovXG4gICAgbm9uY2U7XG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZSBjcmVhdGlvbiBkYXRlXG4gICAgICovXG4gICAgLy8gbm9uY2VEYXRlXG5cbiAgICAvKipcbiAgICAgKiBCa1lvdSBhZCB0cmFja2luZyBub25jZSByZXF1ZXN0XG4gICAgICovXG4gICAgYWRQYWxTZXNzaW9uUmVxdWVzdDtcblxuICAgIC8qKlxuICAgICAqIEJrWW91IGZpcnN0IGZ1bGwgYWQgdHJhY2tpbmcgZmlsZSByZWNlaXZlZFxuICAgICAqL1xuICAgIGZpcnN0RmlsZVJlY2VpdmVkO1xuXG4gICAgLyoqXG4gICAgICogQmtZb3UgZmlyc3QgZnVsbCBhZCB0cmFja2luZyBmaWxlIHByb2NlZWRlZFxuICAgICAqL1xuICAgIGZpcnN0RmlsZVByb2NlZWRlZDtcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBwb2RzIHNlbnQgdG8gb25BZERhdGEgYmVmb3JlIGZpcnN0RmlsZVByb2NlZWRlZCA9PT0gdHJ1ZVxuICAgICAqIG9uQWREYXRhIGlzIHJlZ2lzdGVyZWQgdGhyb3VnaCBzZXNzaW9uLnNldEFkRGF0YUxpc3RlbmVyKC4uLilcbiAgICAgKi9cbiAgICBwb2RzU2VudE51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcmVmcmVzaCBkZWxheSB0byB1cGRhdGUgdGhlIHRyYWNrZXJzIGZyb20gQmtZb3VcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIFNFU1NJT05fVVBEQVRFX0lOVEVSVkFMXG4gICAgICovXG4gICAgc2Vzc2lvblVwZGF0ZUludGVydmFsO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnBsYXllckFkYXB0ZXIgPSBwbGF5ZXJBZGFwdGVyO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5zaW1pZFBsYXllciA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLmFkTGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UgPSAwO1xuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlayA9IDA7XG5cbiAgICAgICAgdGhpcy5ia1lvdVNlc3Npb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm5vbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyB0aGlzLm5vbmNlRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5maXJzdEZpbGVSZWNlaXZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvZHNTZW50TnVtYmVyID0gMDtcblxuICAgICAgICB0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCA9IEFkVHJhY2tpbmdNYW5hZ2VyLlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIHNlc3Npb24gb24gdGhlIEJrWW91XG4gICAgICogQ2FsbGVkIHdoZW4gc3RhcnRpbmcgYSBzZXNzaW9uIChkdXJpbmcgZ2V0VVJMIG9yIGZpcnN0IGltYWdlIGV2ZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIGJhc2VVUkwgTWFuaWZlc3QgYmFzZSBVUkxcbiAgICAgKiBAcGFyYW0gc2Vzc2lvblRva2VuIEJrWW91IHNlc3Npb24gdG9rZW5cbiAgICAgKiBAcGFyYW0gZGF0YSBCa1lvdSBKU09OXG4gICAgICogQHBhcmFtIGFkUGFsU2Vzc2lvbiBHb29nbGUgUEFMIHNlc3Npb24gZGF0YVxuICAgICAqIEBwYXJhbSBub25jZSBHb29nbGUgUEFMIG5vbmNlXG4gICAgICovXG4gICAgaW5pdEJrWW91U2Vzc2lvbihiYXNlVVJMLCBzZXNzaW9uVG9rZW4sIGRhdGEsIGFkUGFsU2Vzc2lvbiwgbm9uY2UpIHtcbiAgICAgICAgLy8gU3RvcmUgYmFzZSB1cmxcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZVVSTDtcblxuICAgICAgICAvLyBTZXQgQmtZb3Ugc2Vzc2lvblxuICAgICAgICB0aGlzLnNlc3Npb25Ub2tlbiA9IHNlc3Npb25Ub2tlbjtcbiAgICAgICAgdGhpcy5ia1lvdVNlc3Npb24gPSB0cnVlO1xuXG4gICAgICAgIC8vIEdldCBub25jZVxuICAgICAgICBpZiAoYWRQYWxTZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uID0gYWRQYWxTZXNzaW9uO1xuICAgICAgICAgICAgdGhpcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgQmtZb3UgZmlsZVxuICAgICAgICB0aGlzLnBhcnNlQWRQb2RzKGRhdGEpO1xuXG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdCa1lvdSBzZXNzaW9uIGluaXRpYWxpemVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxvYWQgQmtZb3UgSlNPTlxuICAgICAqL1xuICAgIHVwZGF0ZUJrWW91U2Vzc2lvbigpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHJlcXVlc3QgaWYgc2Vzc2lvbiBoYXMgYmVlbiBzdG9wcGVkXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIuc3RvcHBlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmtZb3VTZXNzaW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnVXBkYXRpbmcgYWQgdHJhY2tpbmcgZmlsZS4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBub25jZSB0byB0aGUgcmVxdWVzdCB1cmxcbiAgICAgICAgICAgIGxldCBhZFRyYWNraW5nVVJMID0gdGhpcy5iYXNlVVJMO1xuXG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgbmV3IG5vbmNlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgLyogaWYgKHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub25jZSA9IHRoaXMuYWRQYWxTZXNzaW9uUmVxdWVzdC5hZFBhbFNlc3Npb24/LmdldE5vbmNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub25jZURhdGUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZFBhbFNlc3Npb25SZXF1ZXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ05ldyBhZCBQQUwgc2Vzc2lvbiBub25jZSAnICsgdGhpcy5ub25jZSwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICBjb25zdCBzbWFydExpYlBhcmFtZXRlcnMgPSB0aGlzLmhhbmRsZXIuc21hcnRMaWIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IHNtYXJ0TGliUGFyYW1ldGVycy51c2VyQWdlbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBSZXF1ZXN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkVHJhY2tpbmcodGhpcy5oYW5kbGVyLCBwYXJhbWV0ZXJzLCBhZFRyYWNraW5nVVJMLCB0cnVlKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCByZXF1ZXN0IGlmIHNlc3Npb24gaGFzIGJlZW4gc3RvcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyLnN0b3BwZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBhY3RpdmUga2VlcGFsaXZlIGpvYlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVTZXNzaW9uSm9iICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVTZXNzaW9uSm9iKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaHR0cFN0YXR1cyA+PSAyMDAgJiYgcmVzdWx0Lmh0dHBTdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBCa1lvdSBKU09OIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHVwZGF0ZWQgZmlsZSB1bnJlYWRhYmxlJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQga2VlcGFsaXZlIGpvYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RmlsZVJlY2VpdmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hc3luY0RlbGF5KHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQmtZb3VTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3QgZmlsZSByZWNlaXZlZCAodXNlZCB0byBleGVjdXRlIGV2ZW50IGZyb20gZmlyc3QgaW1hZ2UgdG8gY3VycmVudCBwb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RGaWxlUmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBhZHMgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUFkUG9kcyhkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRGlzYWJsZWQ6IE5vIG5lZWQgdG8gdXBkYXRlIHRoZSBub25jZSwgb25seSAxIG5vbmNlIHBlciBzZXNzaW9uIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZCBicmVha3MgYWZ0ZXIgdXBkYXRlICh0byBiZSBjb21wYXJlZCB3aXRoIGFkQnJlYWtzQmVmb3JlVXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha3NBZnRlclVwZGF0ZSA9IHRoaXMuYmFzZUV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQudHJhY2tlciBpbnN0YW5jZW9mIEFkQnJlYWtCZWdpblRyYWNrZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhZCBicmVha3MgYXJlIGRpZmZlcmVudCwgZ2VuZXJhdGUgYSBuZXcgbm9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZEJyZWFrc0JlZm9yZVVwZGF0ZS5sZW5ndGggIT09IGFkQnJlYWtzQWZ0ZXJVcGRhdGUubGVuZ3RoIHx8IERhdGUubm93KCkgLSB0aGlzLm5vbmNlRGF0ZSA+IEFkVHJhY2tpbmdNYW5hZ2VyLk5PTkNFX0VYUElSQVRJT05fVElNRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IG5vbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOb25jZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkQnJlYWtzQmVmb3JlVXBkYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtCZWZvcmVVcGRhdGUgPSBhZEJyZWFrc0JlZm9yZVVwZGF0ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha0FmdGVyVXBkYXRlID0gYWRCcmVha3NBZnRlclVwZGF0ZVtpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRCcmVha0JlZm9yZVVwZGF0ZS5hZEJyZWFrSWQgIT09IGFkQnJlYWtBZnRlclVwZGF0ZS5hZEJyZWFrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IG5vbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5vbmNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGlzIGxpdmUsIHJlc3RhcnQgdXBkYXRlIEJrWW91IGRhdGEgam9iXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGEga2VlcGFsaXZlIGpvYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hc3luY0RlbGF5KHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2Vzc2lvbkpvYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJrWW91U2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU3RvcHBpbmcgYWQgdHJhY2tpbmcgZmlsZSB1cGRhdGUgKFZPRCBzdHJlYW0pLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdTdG9wcGluZyBhZCB0cmFja2luZyBmaWxlIHVwZGF0ZSAoc3RhdHVzIGNvZGUgJyArIHJlc3VsdC5odHRwU3RhdHVzICsgJyknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiB1cGRhdGVOb25jZSgpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1VwZGF0aW5nIG5vbmNlLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLm5vbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFkUGFsU2Vzc2lvblJlcXVlc3QgPSB0aGlzLmhhbmRsZXIuc21hcnRMaWIuaW50ZXJuYWxBZE1hbmFnZXIucmVxdWVzdEFkUGFsU2Vzc2lvbigpO1xuICAgIH0qL1xuXG4gICAgLyoqXG4gICAgICogSW4gc29tZSBjYXNlLCB0aGUgQmtZb3Ugc2VuZHMgYmFkIGRhdGEsIHRoZSBtZXRob2QgZml4IHRoZW1cbiAgICAgKiBAcGFyYW0gYWRCcmVhayBhZCBicmVhayB0byBmaXhcbiAgICAgKi9cbiAgICBmaXhBZEJyZWFrKGFkQnJlYWspIHtcbiAgICAgICAgLy8gV29ya2Fyb3VuZCB3aGVuIEJrWW91IGlzIHJldHVybmluZyBhIGJhZCBhZCBzdGFydCBwb3NpdGlvblxuICAgICAgICAvLyBGaXggbmV4dCBhZCBhbmQgZXZlbnRzIHBvc2l0aW9ucyB3aGVuIG5leHRBZCBwb3NpdGlvbiBpcyBpbnNpZGUgY3VycmVudCBhZFxuICAgICAgICBsZXQgbGFzdEFkO1xuICAgICAgICBhZEJyZWFrLmFkcy5mb3JFYWNoKChhZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRBZCA9IGFkQnJlYWsuYWRzW2luZGV4ICsgMV07XG4gICAgICAgICAgICBpZiAobmV4dEFkICE9PSB1bmRlZmluZWQgJiYgbmV4dEFkLnBvc2l0aW9uIDwgYWQucG9zaXRpb24gKyBhZC5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIG5leHRBZC5wb3NpdGlvbiA9IGFkLnBvc2l0aW9uICsgYWQuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgbmV4dEFkLmV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQucG9zaXRpb24gPCBuZXh0QWQucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnBvc2l0aW9uID0gbmV4dEFkLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEFkID0gYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdvcmthcm91bmQgd2hlbiBCa1lvdSBpcyBub3QgY2FsY3VsYXRpbmcgd2VsbCB0aGUgYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgICAgLy8gVXBkYXRpbmcgYWQgYnJlYWsgZHVyYXRpb24gYmVjYXVzZSBvZiBCa1lvdSBwcmVjaXNpb24gZXJyb3JcbiAgICAgICAgaWYgKGxhc3RBZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZEJyZWFrLmR1cmF0aW9uID0gbGFzdEFkLnBvc2l0aW9uICsgbGFzdEFkLmR1cmF0aW9uIC0gYWRCcmVhay5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIEJrWW91IEpTT05cbiAgICAgKiBNZXJnZSB0aGUgY3VycmVudCBhZERhdGEgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBCa1lvdSBKU09OXG4gICAgICovXG4gICAgcGFyc2VBZFBvZHMoZGF0YSkge1xuICAgICAgICBjb25zdCBzZXNzaW9uVG9rZW4gPSBkYXRhWydzZXNzaW9udG9rZW4nXSB8fCAnJztcbiAgICAgICAgY29uc3QgdGltZVJlZmVyZW5jZSA9IGRhdGFbJ3RpbWVyZWZlcmVuY2VfbXMnXSB8fCAwO1xuXG4gICAgICAgIC8vIFNldCByZWZyZXNoIGRlbGF5IGlmIGRlZmluZWQgKDIgdG8gNSBzZWNzKVxuICAgICAgICBjb25zdCByZWZyZXNoRGVsYXkgPSBkYXRhWydyZWZyZXNoX2RlbGF5X21zJ10gfHwgQWRUcmFja2luZ01hbmFnZXIuU0VTU0lPTl9VUERBVEVfSU5URVJWQUw7XG4gICAgICAgIGlmIChyZWZyZXNoRGVsYXkgPj0gMjAwMCAmJiByZWZyZXNoRGVsYXkgPD0gQWRUcmFja2luZ01hbmFnZXIuU0VTU0lPTl9VUERBVEVfSU5URVJWQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblVwZGF0ZUludGVydmFsID0gcmVmcmVzaERlbGF5O1xuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2V0dGluZyByZWZyZXNoIGRlbGF5IHRvICcgKyB0aGlzLnNlc3Npb25VcGRhdGVJbnRlcnZhbCArICdtcycsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU2V0dGluZyByZWZyZXNoIGRlbGF5IHRvICcgKyBBZFRyYWNraW5nTWFuYWdlci5TRVNTSU9OX1VQREFURV9JTlRFUlZBTCArICdtcyAoZGVmYXVsdCB2YWx1ZSknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWREYXRhVHJhY2tlciA9IG5ldyBBZERhdGFUcmFja2VyKHRoaXMsIHNlc3Npb25Ub2tlbiwgdGltZVJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnN0IGFkUG9kcyA9IGRhdGFbJ2FkcG9kcyddO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhZFBvZHMpKSB7XG4gICAgICAgICAgICBhZFBvZHMuZm9yRWFjaChhZFBvZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRCcmVha0lkID0gYWRQb2RbJ2lkJ10gfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gYWRQb2RbJ3N0YXJ0dGltZV9tcyddICsgdGltZVJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBhZFBvZFsnZHVyYXRpb25fbXMnXSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkcyA9IGFkUG9kWydhZHMnXTtcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhZCBicmVha1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gbmV3IEFkQnJlYWtUcmFja2VyKGFkRGF0YVRyYWNrZXIsIGFkQnJlYWtJZCwgc3RhcnRUaW1lLCBkdXJhdGlvbiwgdGhpcy5pc0xpdmUoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBhZHNcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkcy5mb3JFYWNoKChhZCwgc2VxdWVuY2VOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gcmVtb3ZlIHRlc3QgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgLyogYWQuYWR2ZXJpZmljYXRpb25zID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmVuZG9yJzogJ2Jyb2FkcGVhay50di1vbWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnamF2YXNjcmlwdHJlc291cmNlcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaWZyYW1ld29yayc6ICdvbWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdicm93c2Vyb3B0aW9uYWwnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vdmVyaWZpY2F0aW9uLmNvbS9vbWlkX3ZlcmlmaWNhdGlvbi5qcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlcmlmaWNhdGlvbnBhcmFtZXRlcnMnOiAncGFybTE9WFgmcGFyYW0yPVlZWSZwYXJhbTM9WlpaJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhZC52aWRlb2NsaWNrcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2t0aHJvdWdodXJsJzogJ2h0dHBzOi8vYnJvYWRwZWFrLnR2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2t0cmFja2luZyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrdXJsJzogJ2h0dHA6XFwvXFwvc21hcnRsaWIuYnJvYWRwZWFrLnR2XFwvY2xpY2thZHRyYWNraW5nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrdXJsJzogJ2h0dHA6XFwvXFwvdHJhY2tpbmcuYnJvYWRwZWFrLnR2XFwvY2xpY2thZHRyYWNraW5nMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbWNsaWNrJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2t1cmwnOiAnaHR0cDpcXC9cXC9zbWFydGxpYi5icm9hZHBlYWsudHZcXC9jbGlja2FkdHJhY2tpbmcxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkWydza2lwcGFibGVfbXMnXSA9IGFkWydzdGFydHRpbWVfbXMnXSArIDUwMDA7Ki9cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gYWRbJ3N0YXJ0dGltZV9tcyddICsgdGltZVJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gYWRbJ2R1cmF0aW9uX21zJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBhZFsndHJhY2tpbmdldmVudHMnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbkxpbmVhckFkID0gYWRbJ25vbkxpbmVhckFkJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBhZGQgYWQgd2l0aCB0aW1lX21zIGVxdWFsIHRvIDAsIGl0IG1lYW5zIGl0IGlzIG5vdCBmdWxseSBwcm9jZWVkZWQgYnkgdGhlIEJrWW91XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNWYWxpZEFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50cykgJiYgZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkQWQgPSAoc3RhcnRUaW1lID4gMCAmJiBldmVudHNbMF1bJ3RpbWVfbXMnXSA+IDApIHx8IHN0YXJ0VGltZSA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFRpbWUgIT09IHVuZGVmaW5lZCAmJiBkdXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmIGlzVmFsaWRBZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraXBwYWJsZVRpbWUgPSBhZFsnc2tpcHBhYmxlX21zJ10gKyB0aW1lUmVmZXJlbmNlIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpcHBhYmxlID0gc2tpcHBhYmxlVGltZSAhPT0gMCAmJiBza2lwcGFibGVUaW1lICE9PSB1bmRlZmluZWQgJiYgc2tpcHBhYmxlVGltZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGl2ZUlkID0gYWRbJ2NyZWF0aXZlaWQnXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZElkID0gYWRbJ2FkaWQnXSArICctJyArIHN0YXJ0VGltZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2FibGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogYWQudmlkZW9jbGlja3M/LmNsaWNrdGhyb3VnaHVybCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlcnM6IGFkLnZpZGVvY2xpY2tzPy5jbGlja3RyYWNraW5nIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGljazogYWQudmlkZW9jbGlja3M/LmN1c3RvbWNsaWNrIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFZlcmlmaWNhdGlvbnMgPSBhZC5hZHZlcmlmaWNhdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlcmlmaWNhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFZlcmlmaWNhdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcjogZWxlbWVudC52ZW5kb3IgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqYXZhc2NyaXB0UmVzb3VyY2VzOiBlbGVtZW50LmphdmFzY3JpcHRyZXNvdXJjZXMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlUmVzb3VyY2VzOiBlbGVtZW50LmV4ZWN1dGFibGVyZXNvdXJjZXMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2luZ0V2ZW50czogZWxlbWVudC50cmFja2luZ2V2ZW50cyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblBhcmFtZXRlcnM6IGVsZW1lbnQudmVyaWZpY2F0aW9ucGFyYW1ldGVycyB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkVHJhY2tlciA9IG5ldyBBZFRyYWNrZXIoYWRCcmVha1RyYWNrZXIsIHNlcXVlbmNlTnVtYmVyLCBzdGFydFRpbWUsIGR1cmF0aW9uLCBza2lwcGFibGUsIHNraXBwYWJsZVRpbWUsIGNyZWF0aXZlSWQsIGFkSWQsIGNsaWNrYWJsZSwgdmVyaWZpY2F0aW9ucywgbm9uTGluZWFyQWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLmFkcy5wdXNoKGFkVHJhY2tlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGV2ZW50WydjYWxsYmFja3VybCddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gZXZlbnRbJ3R5cGUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBldmVudFsnb2Zmc2V0X21zJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGV2ZW50Wyd0aW1lX21zJ10gKyB0aW1lUmVmZXJlbmNlIHx8IHN0YXJ0VGltZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkRXZlbnRUcmFja2VyID0gbmV3IEFkRXZlbnRUcmFja2VyKGFkVHJhY2tlciwgdHlwZSwgdXJsLCBvZmZzZXQsIHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci5ldmVudHMucHVzaChhZEV2ZW50VHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT25seSBhZGQgYWQgYnJlYWsgd2l0aCBhZHNcbiAgICAgICAgICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIuYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWREYXRhVHJhY2tlci5hZEJyZWFrcy5wdXNoKGFkQnJlYWtUcmFja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWREYXRhVHJhY2tlci5hZEJyZWFrcy5mb3JFYWNoKGFkQnJlYWsgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZml4QWRCcmVhayhhZEJyZWFrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGFsbCBldmVudHMgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIGxldCBkYXRhVXBkYXRlZCA9IHRoaXMubWVyZ2VFdmVudHMoYWREYXRhVHJhY2tlcik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYWQgbGlzdFxuICAgICAgICB0aGlzLmFkTGlzdCA9IHRoaXMuYWREYXRhLmFkQnJlYWtzLm1hcChhZEJyZWFrID0+IGFkQnJlYWsudG9EYXRhKCkpO1xuXG4gICAgICAgIC8vIFNlbmQgYWQgZGF0YSBldmVuIGlmIHRoZXJlIGlzIG5vIGFkIHBvZCAoQmtZb3Ugbm90IHN1cHBvcnRpbmcgYmstbWw9Mi4wKVxuICAgICAgICB0aGlzLm5vdGlmeUFkRGF0YUxpc3RlbmVyKGRhdGFVcGRhdGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgdXBkYXRlIHBvc2l0aW9uIGpvYlxuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy51cGRhdGVQb3NpdGlvbkpvYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnU3RhcnRpbmcgYWQgdHJhY2tpbmcuLi4nKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPSBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuYXN5bmNEZWxheShBZFRyYWNraW5nTWFuYWdlci5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9nZ2VyTWFuYWdlci5kKFRBRywgJ29uUG9zaXRpb25VcGRhdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZCh0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgdGhlIHVwZGF0ZSBwb3NpdGlvbiBqb2JcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy51cGRhdGVQb3NpdGlvbkpvYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgdHJhY2tpbmcgcGF1c2VkIChwbGF5ZXIgZXZlbnQpJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgSm9iTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNhbmNlbCh0aGlzLnVwZGF0ZVBvc2l0aW9uSm9iKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgY29udGVudCBpcyBsaXZlIChvcGVuIG1hbmlmZXN0KVxuICAgICAqIEJlZm9yZSBmaXJzdCBpbWFnZSwgY29uc2lkZXIgYXMgVk9EIHRvIGFsd2F5cyBoYXZlIGFuIGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICogQWZ0ZXIgZmlyc3QgaW1hZ2UsIGNvbnNpZGVyIHRoZSBhY3R1YWwgY29udGVudCB0eXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgaXMgbGl2ZVxuICAgICAqL1xuICAgIGlzTGl2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RJbWFnZURhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyQWRhcHRlci5nZXREdXJhdGlvbigpIDw9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgbmV3IGV2ZW50cyB3aXRoIGN1cnJlbnQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBBbiBleGlzdGluZyBhZCBicmVhayBjYW4gdXBkYXRlIGl0cyBhZCBsaXN0LCBidXQgYW4gZXhpc3RpbmcgYWQgY2Fubm90IGJlIHJlbW92ZWQgb3IgdXBkYXRlZFxuICAgICAqIEFkIGJyZWFrcyBjYW4gYmUgYWRkZWQgZHVyaW5nIHRoZSBzZXNzaW9uXG4gICAgICogSWYgYW4gYWQgYnJlYWsgZG9lcyBub3QgYXBwZWFyIGFueW1vcmUgaW4gdGhlIEJreW91IGRhdGEsIGl0IGhhcyB0byBzdGF5IGluIG1lbW9yeVxuICAgICAqXG4gICAgICogQHBhcmFtIGFkRGF0YSBuZXcgZGF0YSByZWNlaXZlZCBieSB0aGUgQmtZb3VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIG5ldyBkYXRhIHN0b3JlZCBpbiBtZW1vcnlcbiAgICAgKi9cbiAgICBtZXJnZUV2ZW50cyhhZERhdGEpIHtcbiAgICAgICAgbGV0IGRhdGFVcGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IGFkIGRhdGEgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgaWYgKHRoaXMuYWREYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWREYXRhID0gYWREYXRhO1xuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCBhZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJyBhZCBicmVhayhzKSBwYXJzZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3QWRDb3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgZGVsZXRlZEFkQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYmFzZSBhZCBkYXRhXG4gICAgICAgICAgICB0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4gPSBhZERhdGEuc2Vzc2lvblRva2VuO1xuICAgICAgICAgICAgdGhpcy5hZERhdGEudGltZVJlZmVyZW5jZSA9IGFkRGF0YS50aW1lUmVmZXJlbmNlO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgZXhwaXJlZCBhZCBicmVha3NcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZHMgPSBhZERhdGEuYWRCcmVha3MubWFwKGFkQnJlYWsgPT4gYWRCcmVhay5pZCk7XG4gICAgICAgICAgICB0aGlzLmFkRGF0YS5hZEJyZWFrcy5mb3JFYWNoKChhZEJyZWFrLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhZCBicmVhayBmcm9tIG1lbW9yeSBub3QgcHJlc2VudCBpbiB1cGRhdGVkIGRhdGEgYW5kIG5vdCBwbGF5aW5nIHRoZSBhZCBicmVhaywgcmVtb3ZlIGl0XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50SWRzLmluY2x1ZGVzKGFkQnJlYWsuaWQpICYmIHRoaXMuY3VycmVudEFkVHJhY2tlcj8uYWRCcmVhay5pZCAhPT0gYWRCcmVhay5pZCkge1xuICAgICAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRBZENvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWQgYnJlYWtzIChkdXJhdGlvbiwgYWRzIGxpc3QpXG4gICAgICAgICAgICBhZERhdGEuYWRCcmVha3MuZm9yRWFjaCgoYWRCcmVhaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYWQgZGF0YSBwb2ludGVyXG4gICAgICAgICAgICAgICAgYWRCcmVhay5hZERhdGEgPSB0aGlzLmFkRGF0YTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBhZCBicmVhayBpbiBtZW1vcnkgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFkQnJlYWsgPSB0aGlzLmFkRGF0YS5hZEJyZWFrcy5maW5kKGN1cnJlbnRBZEJyZWFrID0+IGN1cnJlbnRBZEJyZWFrLmlkID09PSBhZEJyZWFrLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFkQnJlYWsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdW4tZXhpc3RpbmcgYWRzIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgYWRCcmVhay5hZHMuZmlsdGVyKGFkID0+IGN1cnJlbnRBZEJyZWFrLmFkcy5maW5kKGN1cnJlbnRBZCA9PiBjdXJyZW50QWQuYWRJZCA9PT0gYWQuYWRJZCkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGFkIGF0IHRoZSBjb3JyZWN0IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gY29tZSBjYXNlLCB0aGUgU0xBVEUgKGVuZCBvZiB0aGUgYWQgYnJlYWspIGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgaW5zZXJ0aW5nIGludGVybWVkaWF0ZSBhZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRJbmRleCA9IGN1cnJlbnRBZEJyZWFrLmFkcy5maW5kSW5kZXgoY3VycmVudEFkID0+IGN1cnJlbnRBZC5wb3NpdGlvbiA+IGFkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBZEJyZWFrLmFkcy5wdXNoKGFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWRCcmVhay5hZHMuc3BsaWNlKGluc2VydEluZGV4LCAwLCBhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWRDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFkIHBvc2l0aW9ucyBhbmQgYWQgYnJlYWsgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRHVyYXRpb24gPSBjdXJyZW50QWRCcmVhay5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXhBZEJyZWFrKGN1cnJlbnRBZEJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkRHVyYXRpb24gIT09IGN1cnJlbnRBZEJyZWFrLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQWQgYnJlYWsgJyArIChpbmRleCArIDEpICsgJy8nICsgdGhpcy5hZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJzogdXBkYXRlZCBkdXJhdGlvbiBmcm9tICcgKyBvbGREdXJhdGlvbiArICcgdG8gJyArIGN1cnJlbnRBZEJyZWFrLmR1cmF0aW9uLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZERhdGEuYWRCcmVha3MucHVzaChhZEJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdBZENvdW50ICs9IGFkQnJlYWsuYWRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsIHRoaXMuYWREYXRhLmFkQnJlYWtzLmxlbmd0aCArICcgYWQgYnJlYWsocykgaW4gdG90YWwsICcgKyBhZERhdGEuYWRCcmVha3MubGVuZ3RoICsgJyBhZCBicmVhayhzKSBwYXJzZWQsICcgKyBuZXdBZENvdW50ICsgJyBuZXcgYWQocyksICcgKyBcbiAgICAgICAgICAgIGRlbGV0ZWRBZENvdW50ICsgJyBkZWxldGVkIGFkKHMpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGlmeSBldmVudCBhcnJheSB1cGRhdGVkXG4gICAgICAgIHRoaXMubm90aWZ5QWRzVXBkYXRlZCh0aGlzLmFkRGF0YSk7XG5cbiAgICAgICAgLy8gU3RhcnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQgJiYgIXRoaXMucGF1c2VkICYmICF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gSWYgdXBkYXRlIHBvc2l0aW9uIHByb2Nlc3Mgc3RvcHBlZCwgcmVzZXQgbGFzdCBwb3NpdGlvbiB0byB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlUG9zaXRpb25Kb2IgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkRGF0YS5oYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbikgPiAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHJlc3VtZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVzdW1lIGF0IHRoZSBjdXJyZW50IHBsYXllciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc3RhcnQgdXBkYXRlIHBvc2l0aW9uIHByb2Nlc3NcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdGFydCgpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhZCBicmVhayBlbmRlZFxuICAgICAgICAgICAgLy8gT25seSBjaGVjayBpbiBjYXNlIG9mIExJVkUsIGZvciBWT0QgY29udGVudHMsIGFkIGJyZWFrIGVuZCBhbHJlYWR5IHRyaWdnZXJlZCBzaW5jZSBicmVha3MgYXJlIHN0YXRpY1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWRCcmVha0VuZGVkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhVXBkYXRlZDtcbiAgICB9XG5cbiAgICBvblBvc2l0aW9uVXBkYXRlZChjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uU3RhcnQgPSAodGhpcy5sYXN0UG9zaXRpb24gIT09IGN1cnJlbnRQb3NpdGlvbiA/IHRoaXMubGFzdFBvc2l0aW9uIDogY3VycmVudFBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGxldCBwb3NpdGlvbkVuZCA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50cyB3aGVuIHJlY2VpdmluZyB0aGUgYWQgdHJhY2tpbmcgZmlsZSBhZnRlciB0aGUgcGxheWJhY2sgc3RhcnRlZFxuICAgICAgICBpZiAodGhpcy5maXJzdEZpbGVSZWNlaXZlZCA9PT0gdHJ1ZSAmJiB0aGlzLmZpcnN0RmlsZVByb2NlZWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RGaWxlUHJvY2VlZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gUHJvY2VzcyBhbGwgZXZlbnRzIGZyb20gdGhlIGJlZ2lubmluZyBpZiBwbGF5ZXIgc3RhcnRzIHVwIHRvIDAwOjAwOjA0LjAwMFxuICAgICAgICAgICAgLy8gVGhlIEJrWW91IGpzb24gZmlsZSBpcyByZWNlaXZlZCBhc3luY2hyb25vdXNseSBhZnRlciBmaXJzdCBpbWFnZVxuICAgICAgICAgICAgY29uc3Qgc3RhcnRQcmVjaXNpb24gPSA0MDAwO1xuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLmZpcnN0SW1hZ2VEYXRlIDw9IHN0YXJ0UHJlY2lzaW9uICYmIHBvc2l0aW9uRW5kIC0gcG9zaXRpb25TdGFydCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQktZT1UgU1RBUlQgUFJFQ0lTSU9OJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyBhbGwgZXZlbnRzIHNpbmNlIGZpcnN0IGltYWdlLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgYWRcbiAgICAgICAgICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tlciA9IHRoaXMuYWREYXRhLmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBwb3NpdGlvblN0YXJ0IC0gc3RhcnRQcmVjaXNpb24gPD0gYWRCcmVhay5wb3NpdGlvbiAmJiBhZEJyZWFrLnBvc2l0aW9uIDwgcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRUcmFja2VyID0gYWRCcmVha1RyYWNrZXI/LmFkcy5maW5kKGFkID0+IHBvc2l0aW9uU3RhcnQgLSBzdGFydFByZWNpc2lvbiA8PSBhZC5wb3NpdGlvbiAmJiBhZC5wb3NpdGlvbiA8IHBvc2l0aW9uU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWREYXRhID0gYWRUcmFja2VyPy50b0RhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrRGF0YSA9IGFkQnJlYWtUcmFja2VyPy50b0RhdGEoKTtcblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgYWxsIGV2ZW50IGZyb20gdGhlIGFkIHBvc2l0aW9uIHRvIGVuZCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyPy5wcm9jZXNzQmVnaW4oKTtcbiAgICAgICAgICAgICAgICBhZFRyYWNrZXI/LnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgIGFkVHJhY2tlcj8udXBkYXRlUHJvZ3Jlc3Npb24oYWRUcmFja2VyLnBvc2l0aW9uLCBwb3NpdGlvblN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIEVudGVyaW5nIGFuIGFkXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyID0gYWRUcmFja2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyID0gYWRCcmVha1RyYWNrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25TdGFydCA8IHBvc2l0aW9uRW5kICYmIChwb3NpdGlvbkVuZCAtIHBvc2l0aW9uU3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSAvKiAyICogQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKi8pIHtcbiAgICAgICAgICAgIC8vIERlYnVnICh0byBjb21tZW50IGJlZm9yZSByZWxlYXNlKVxuICAgICAgICAgICAgLyogY29uc3QgZFN0YXJ0ID0gKHBvc2l0aW9uU3RhcnQgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGRFbmQgPSBwb3NpdGlvbkVuZDtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdQcm9jZXNzaW5nIHRyYWNrZXJzIGZyb20gJyArIE1hdGguZmxvb3IoZFN0YXJ0IC8gMTAwMCkgKyAnLicgK1xuICAgICAgICAgICAgICAgIChkU3RhcnQgLSBNYXRoLmZsb29yKGRTdGFydCAvIDEwMDApICogMTAwMCkgKyAnc2VjcyB0byAnICsgTWF0aC5mbG9vcihkRW5kIC8gMTAwMCkgKyAnLicgK1xuICAgICAgICAgICAgICAgIChkRW5kIC0gTWF0aC5mbG9vcihkRW5kIC8gMTAwMCkgKiAxMDAwKSArICdtcycsIHRoaXMuaGFuZGxlci5pZCk7Ki9cblxuICAgICAgICAgICAgLy8gQWQgYnJlYWsgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFkQnJlYWtUcmFja2VyID0gdGhpcy5hZERhdGE/LmFkQnJlYWtzLmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIHBvc2l0aW9uRW5kIDwgYWRCcmVhay5wb3NpdGlvbiArIGFkQnJlYWsuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBBZCBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgYWRUcmFja2VyID0gYWRCcmVha1RyYWNrZXI/LmFkcy5maW5kKGFkID0+IGFkLnBvc2l0aW9uIDw9IHBvc2l0aW9uRW5kICYmIHBvc2l0aW9uRW5kIDwgYWQucG9zaXRpb24gKyBhZC5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEN1cnJlbnQgcG9zaXRpb24gaW4gYW4gYWRcbiAgICAgICAgICAgIGlmIChhZFRyYWNrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIEVudGVyaW5nIGFuIGFkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdFbnRlcmluZyBhZCAnICsgYWRUcmFja2VyLmFkSWQgKyAnLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZCBza2lwcGVkLCBhIHNlZWsgaGFwcGVuZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpcHBlZCA9IHBvc2l0aW9uU3RhcnQgLSBhZFRyYWNrZXIucG9zaXRpb24gPj0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbnRlcmluZyBhbiBhZCwgaGFuZGxlIHBvc2l0aW9uIHN0YXJ0IHByZWNpc2lvbiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGUgcG9zaXRpb24gc3RhcnQgZnJvbSAnICsgcG9zaXRpb25TdGFydCArICcgdG8gJyArIGFkVHJhY2tlci5wb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25TdGFydCA9IGFkVHJhY2tlci5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTS0lQUEVEJywgc2tpcHBlZCwgcG9zaXRpb25TdGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IGFkVHJhY2tlci50b0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha0RhdGEgPSBhZEJyZWFrVHJhY2tlci50b0RhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICBhZEJyZWFrVHJhY2tlci5wcm9jZXNzQmVnaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgYWRUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICBhZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBhZCBza2lwcGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2lwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIGFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciA9PT0gYWRUcmFja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBzYW1lIGFkXG4gICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihwb3NpdGlvblN0YXJ0LCBwb3NpdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBZFRyYWNrZXIgIT09IGFkVHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyBhZFxuICAgICAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnQ2hhbmdpbmcgZnJvbSBhZCAnICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmFkSWQgKyAnIHRvICcgKyBhZFRyYWNrZXIuYWRJZCArICcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEEgc2VlayBoYXBwZW5lZCBhbmQgdGhlIHBvc2l0aW9uIGlzIGluIGFub3RoZXIgYWQgYnJlYWssIHRoZSBwcm9ncmVzc2lvbiBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWQgaW4gdGhlIHNlZWsgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBoYW5kbGUgc2VlayBwb3NpdGlvbiBwcmVjaXNpb24gZXJyb3IgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRUcmFja2VyLmFkQnJlYWsuaWQgPT09IHRoaXMuY3VycmVudEFkVHJhY2tlci5hZEJyZWFrLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIudXBkYXRlUHJvZ3Jlc3Npb24ocG9zaXRpb25TdGFydCwgdGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHByZXZpb3VzIGFkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9jZXNzRW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQSBzZWVrIGhhcHBlbmVkIGFuZCB0aGUgcG9zaXRpb24gaXMgaW4gYW5vdGhlciBhZCBicmVhayBidXQgc3RpbGwgaW4gYW4gYWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkVHJhY2tlci5hZEJyZWFrLmlkICE9PSB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRCcmVhay5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLmFkQnJlYWsucHJvY2Vzc0VuZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IGFkVHJhY2tlci50b0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhID0gYWRCcmVha1RyYWNrZXIudG9EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkQnJlYWtUcmFja2VyLnByb2Nlc3NCZWdpbigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZERhdGEgPSBhZFRyYWNrZXIudG9EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBjdXJyZW50IGFkXG4gICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci5wcm9jZXNzQmVnaW4oKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBjaGFuZ2luZyBhZCBhZnRlciBhIHNlZWssIGFuZCB0aGUgc2VlayBlbmQgcG9zaXRpb24gaXMgbm90IGNsb3NlIHRvIHRoZSBhZCBzdGFydCBwb3NpdGlvbiwgY291bnQgaXQgYXMgc2tpcHBlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25FbmQgLSBhZFRyYWNrZXIucG9zaXRpb24gPj0gQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFkU2tpcHBlZCh0aGlzLmFkRGF0YS5zZXNzaW9uVG9rZW4sIGFkVHJhY2tlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgc2VlayBwb3NpdGlvbiBwcmVjaXNpb24gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbihhZFRyYWNrZXIucG9zaXRpb24sIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlciA9IGFkVHJhY2tlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZEJyZWFrVHJhY2tlciA9IGFkQnJlYWtUcmFja2VyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0aW5nIGFkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdFeGl0aW5nIGFkICcgKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuYWRJZCArICcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEF2b2lkIHByb2dyZXNzaW9uID4gMTAwJVxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25FbmQgLSAodGhpcy5jdXJyZW50QWRUcmFja2VyLnBvc2l0aW9uICsgdGhpcy5jdXJyZW50QWRUcmFja2VyLmR1cmF0aW9uKSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25FbmQgPSB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24gKyB0aGlzLmN1cnJlbnRBZFRyYWNrZXIuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBBIHNlZWsgaGFwcGVuZWQgYW5kIHRoZSBwb3NpdGlvbiBjb3VsZCBub3QgYmUgaW4gdGhlIGFkLCB0aGUgcHJvZ3Jlc3Npb24gaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkIGluIHRoZSBzZWVrIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblN0YXJ0ID49IHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyLnVwZGF0ZVByb2dyZXNzaW9uKHBvc2l0aW9uU3RhcnQsIHBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV4aXRpbmcgYWQgYmVmb3JlIHRoZSBlbmQsIGNvdW50IGl0IGFzIHNraXBwZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkVHJhY2tlci5wcm9ncmVzc2lvbiA8IDEuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlBZFNraXBwZWQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgZW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucHJvY2Vzc0VuZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBMSVZFIGNvbnRlbnRzLCB3ZSBuZWVkIHRoZSByZXNwb25zZSBmcm9tIHRoZSBCa1lvdSBpZiB0aGUgYWQgYnJlYWsgaXMgYWN0dWFsbHkgZG9uZVxuICAgICAgICAgICAgICAgICAgICAvLyBJbiBzb21lIGNhc2VzLCB3ZSByZWNlaXZlIHVwZGF0ZWQgdHJhY2tlcnMgdG9vIGxhdGUsIHNvIHdlIG5lZWQgdG8gd2FpdCBuZXdlciBkYXRhIGJlZm9yZSBhY3R1YWxseSBjbG9zaW5nIHRoZSBhZFxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgVk9EIGNvbnRlbnRzLCBlbmQgdGhlIGJyZWFrIG5vd1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIgPT09IHVuZGVmaW5lZCAmJiAhdGhpcy5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JpbmcgYWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0aW5nIHRoZSBhZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEtlZXAgbGFzdCBwb3NpdGlvbiBmb3IgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICAgICAgICAvLyBJZiBldmVudHMgcmVtYWluaW5nLCBjb250aW51ZSB0aGUgdHJhY2tpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLmFkRGF0YT8uaGFzUmVtYWluaW5nQWRCcmVha3MocG9zaXRpb25FbmQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCAmJiAhdGhpcy5idWZmZXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBwYXVzZWQgKHBsYXliYWNrIHBhdXNlZCwgb25Qb3NpdGlvblVwZGF0ZWQpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCB0cmFja2luZyBwYXVzZWQgKG5vIG1vcmUgZXZlbnQsIG9uUG9zaXRpb25VcGRhdGVkKScsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUHJvY2Vzc2luZyB0cmFja2VycyBmcm9tICcgKyBwb3NpdGlvblN0YXJ0ICsgJ21zIHRvICcgKyBwb3NpdGlvbkVuZCArICdtcywgcmVzdW1pbmcgdHJhY2tpbmcuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWREYXRhPy5oYXNSZW1haW5pbmdBZEJyZWFrcyhwb3NpdGlvbkVuZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkICYmICF0aGlzLmJ1ZmZlcmluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tTdGFydChwb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpKSB7XG4gICAgICAgIC8vIElmIGV2ZW50cyByZW1haW5pbmcsIGNvbnRpbnVlIHRoZSB0cmFja2luZ1xuICAgICAgICBpZiAodGhpcy5hZERhdGE/Lmhhc1JlbWFpbmluZ0FkQnJlYWtzKHBvc2l0aW9uKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIHBhdXNlZCAobm8gbW9yZSBldmVudCwgY2hlY2tTdGFydCknLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tBZEJyZWFrRW5kZWQocG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uU3RhcnQgPSAodGhpcy5sYXN0UG9zaXRpb24gIT09IHBvc2l0aW9uID8gdGhpcy5sYXN0UG9zaXRpb24gOiBwb3NpdGlvbiAtIDEpO1xuICAgICAgICBsZXQgcG9zaXRpb25FbmQgPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAocG9zaXRpb25TdGFydCA8IHBvc2l0aW9uRW5kICYmIChwb3NpdGlvbkVuZCAtIHBvc2l0aW9uU3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSAvKiAyICogQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fVVBEQVRFX0lOVEVSVkFMKi8pIHtcbiAgICAgICAgICAgIC8vIEFkIGJyZWFrIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBhZEJyZWFrVHJhY2tlciA9IHRoaXMuYWREYXRhPy5hZEJyZWFrcy5maW5kKGFkQnJlYWsgPT4gYWRCcmVhay5wb3NpdGlvbiA8PSBwb3NpdGlvbkVuZCAmJiBwb3NpdGlvbkVuZCA8IGFkQnJlYWsucG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRCcmVha1RyYWNrZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QWRUcmFja2VyICE9PSB1bmRlZmluZWQgJiYgKHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiArIHRoaXMuY3VycmVudEFkVHJhY2tlci5kdXJhdGlvbiAtIHBvc2l0aW9uRW5kKSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkVHJhY2tlci51cGRhdGVQcm9ncmVzc2lvbih0aGlzLmN1cnJlbnRBZFRyYWNrZXIucG9zaXRpb24sIHRoaXMuY3VycmVudEFkVHJhY2tlci5wb3NpdGlvbiArIHRoaXMuY3VycmVudEFkVHJhY2tlci5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBZFRyYWNrZXIucHJvY2Vzc0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yaW5nIGFkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtUcmFja2VyLnByb2Nlc3NFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWRCcmVha1RyYWNrZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmluZyBhZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBlbmQgZGV0ZWN0ZWQnLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBZCBicmVhayBub3QgeWV0IGVuZGVkJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZFVzZXJJbnRlcmFjdGlvbihpbnRlcmFjdGlvblR5cGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWRUcmFja2VyPy5jbGlja2FibGU/LnRyYWNrZXJzLmZvckVhY2godHJhY2tlciA9PiB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVxdWVzdGluZyBjbGljayB0cmFja2VyICcgKyB0cmFja2VyLmNsaWNrdXJsLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgUmVxdWVzdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZEV2ZW50KHRoaXMuaGFuZGxlciwgdHJhY2tlci5jbGlja3VybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRBZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFkRGF0YTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50QWRCcmVhaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFkQnJlYWtEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gdGhlIGNvbnRlbnQgd2l0aG91dCBhZHNcbiAgICAgKiBUaGlzIHBvc2l0aW9uIGNhbiBiZSBzYXZlZCB0byBiZSByZXN0b3JlZCBsYXRlciB0aHJvdWdoIGdldFBvc2l0aW9uRm9yUGxheWJhY2socG9zaXRpb25JbkJvb2ttYXJrKVxuICAgICAqIEZvciBWT0QgY29udGVudHMgb25seVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0gUG9zaXRpb24gaW4gdGhlIGNvbnRlbnQgd2l0aG91dCBhZHNcbiAgICAgKi9cbiAgICBnZXRQb3NpdGlvbkZvckJvb2ttYXJrKCkge1xuICAgICAgICAvLyBJZiB2b2QgY29udGVudCAoaS5lIGR1cmF0aW9uID4gMClcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IHBvc2l0aW9uIGlzIGluIGFuIGFkIGJyZWFrLCBzZXQgYm9va21hcmsgcG9zaXRpb24gdG8gdGhlIGFkIGJyZWFrIHN0YXJ0IHBvc2l0aW9uIChsYXN0IHJpZ2h0IHBvc2l0aW9uIGJlZm9yZSB0aGUgYWQpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWRCcmVhayA9IHRoaXMuYWRMaXN0LmZpbmQoYWRCcmVhayA9PiBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gPCBwb3NpdGlvbiAmJiBwb3NpdGlvbiA8PSBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWRCcmVhayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBjdXJyZW50QWRCcmVhay5zdGFydFBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBhZCBiZWZvcmUgdGhlIGN1cnJlbnQgcG9zaXRpb24sIHN1YnN0cmF0ZSB0aGUgYm9va21hcmsgcG9zaXRpb24gYnkgdGhlIGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLmFkTGlzdC5maWx0ZXIoYWRCcmVhayA9PiBhZEJyZWFrLnN0YXJ0UG9zaXRpb24gKyBhZEJyZWFrLmR1cmF0aW9uIDwgcG9zaXRpb24pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goYWRCcmVhayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIC09IGFkQnJlYWsuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHBvc2l0aW9uIGZvbGxvd2luZyBjdXJyZW50IGFkcyB3aXRoIHRoZSBwb3NpdGlvbiBpbiB0aGUgY29udGVudCB3aXRob3V0IGFkc1xuICAgICAqIENhbiBiZSBjYWxsZWQgYWZ0ZXIgb3IgaW5zaWRlIG9uQWREYXRhXG4gICAgICogRm9yIFZPRCBjb250ZW50cyBvbmx5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25JbkJvb2ttYXJrIHBvc2l0aW9uIGluIHRoZSBjb250ZW50IHdpdGhvdXQgYWQgKHdpdGggdGhlIHN0b3JlZCB2YWx1ZSBnb3QgZnJvbSB0aGUgbWV0aG9kIGdldFBvc2l0aW9uRm9yQm9va21hcmsoKSlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBQb3NpdGlvbiBmb2xsb3dpbmcgY3VycmVudCBhZHNcbiAgICAgKi9cbiAgICBnZXRQb3NpdGlvbkZvclBsYXliYWNrKHBvc2l0aW9uSW5Cb29rbWFyaykge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbkluQm9va21hcms7XG5cbiAgICAgICAgLy8gU29ydCBhZCBicmVhayBieSBzdGFydFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGFkTGlzdCA9IHRoaXMuYWRMaXN0LnNvcnQoKGEsIGIpID0+IGEuc3RhcnRQb3NpdGlvbiAtIGIuc3RhcnRQb3NpdGlvbik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFkQnJlYWsgPSBhZExpc3RbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGFkIGJyZWFrIGlzIGFmdGVyIHRoZSBwb3NpdGlvbiwgdGhlIGNhbGN1bGF0aW9uIGlzIGRvbmVcbiAgICAgICAgICAgIGlmIChhZEJyZWFrLnN0YXJ0UG9zaXRpb24gPiBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWRCcmVhay5zdGFydFBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbiA8IHBvc2l0aW9uIHx8IChhZEJyZWFrLnN0YXJ0UG9zaXRpb24gPD0gcG9zaXRpb24gJiYgcG9zaXRpb24gPD0gYWRCcmVhay5zdGFydFBvc2l0aW9uICsgYWRCcmVhay5kdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBhZCBicmVhayBpcyBiZWZvcmUgdGhlIHBvc2l0aW9uLCBhZGQgdGhlIGFkIGJyZWFrIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHBvc2l0aW9uIGlzIHdpdGhpbiB0aGUgY3VycmVudCBhZCBicmVhaywgc2V0IHRoZSBwb3NpdGlvbiByaWdodCBhZnRlciB0aGUgYWQgYnJlYWtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSBhZEJyZWFrLmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIG9uRmlyc3RJbWFnZShiaXRyYXRlLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIEluaXQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIHRyYWNraW5nIGVuYWJsZWQgKGxpdmU6JyArIHRoaXMuaXNMaXZlKCkgKyAnKScsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgLy8gV29ya2Fyb3VuZCBiZWNhdXNlIEJrWW91IG5vdCByZXR1cm5pbmcgdm9kL2xpdmUgaW4gdHJhY2tpbmdcbiAgICAgICAgLy8gV2hlbiBhY2Nlc3NpbmcgdGhlIHRyYWNraW5nIGZpbGUgYmVmb3JlIG9wZW5pbmcgdGhlIG1hbmlmZXN0IChiay1tbD0yLjAgd29ya2Zsb3cpLCB3ZSBkb24ndCBrbm93IGlmIHRoZSBjb250ZW50IGlzIGxpdmUgb3Igdm9kXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgbGl2ZSwgYWQgYnJlYWsgZHVyYXRpb24gaXMgLTFcbiAgICAgICAgaWYgKHRoaXMuYWREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRMaXN0ID0gdGhpcy5hZERhdGEuYWRCcmVha3MubWFwKGFkQnJlYWsgPT4ge1xuICAgICAgICAgICAgICAgIGFkQnJlYWsubGl2ZSA9IHRoaXMuaXNMaXZlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWRCcmVhay50b0RhdGEoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhcnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIHRoaXMuY2hlY2tTdGFydChzdGFydFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgQmtZb3Ugc2Vzc2lvblxuICAgICAgICB0aGlzLnVwZGF0ZUJrWW91U2Vzc2lvbigpO1xuXG4gICAgICAgIC8vIFNob3cgZXJyb3IgaWYgdGhlIGNvbnRlbnQgaXMgTElWRSBidXQgdGhlIGR1cmF0aW9uIGlzIG5vdCBhIHRpbWVzdGFtcFxuICAgICAgICBpZiAodGhpcy5pc0xpdmUoKSAmJiB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKSA8IDEyNjIzMDA0MDAwMDApIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZShUQUcsICdUaGUgcGxheWVyIHBvc2l0aW9uIGRvZXMgbm90IHJldHVybiBhIHBvc2l0aW9uIGFzIGEgdGltZXN0YW1wIGluIG1pbGxpcy4gVGhlIGFkIHRyYWNraW5nIG1pZ2h0IG5vdCB3b3JrLicsIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZW5kIEdvb2dsZSBQQUsgcGxheWJhY2sgZW5kIGNhbGxiYWNrXG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uPy5zZW5kUGxheWJhY2tTdGFydCgpO1xuICAgIH1cblxuICAgIG9uUGF1c2UoKSB7XG4gICAgICAgIC8vIFN0b3AgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV2ZW50IGF0IHRoZSBwYXVzZWQgcG9zaXRpb25cbiAgICAgICAgY29uc3QgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllckFkYXB0ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uICE9PSBwbGF5ZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChwbGF5ZXJQb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnSWdub3JpbmcgcGxheWVyIHBvc2l0aW9uICcgKyBwbGF5ZXJQb3NpdGlvbiArICcsIGFscmVhZHkgcHJvY2VlZGVkLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcGxheWVyUG9zaXRpb247XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UgPSB0aGlzLmxhc3RQb3NpdGlvbjsgLy8gaWYgcGxheWluZyA/XG4gICAgfVxuXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIC8vIFN0YXJ0IGlmIG5lY2Vzc2FyeVxuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFkIHBvc2l0aW9uIHdoZW4gcmVzdW1pbmdcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3RQb3NpdGlvbiAtIHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UpIDwgMTAwMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXZlcnRpbmcgcG9zaXRpb24gYmVjYXVzZSBvZiBiYWQgcG9zaXRpb24gd2hlbiByZXN1bWluZy4uLicsIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uQmVmb3JlUGF1c2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVQYXVzZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgLy8gU3RvcCB0cmFja2luZ1xuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZXZlbnQgYXQgdGhlIGJ1ZmZlcmluZyBwb3NpdGlvblxuICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gIT09IHBsYXllclBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHBsYXllclBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJZ25vcmluZyBwbGF5ZXIgcG9zaXRpb24gJyArIHBsYXllclBvc2l0aW9uICsgJywgYWxyZWFkeSBwcm9jZWVkZWQuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBvbkJ1ZmZlcmluZ0VuZChwbGF5aW5nKSB7XG4gICAgICAgIC8vIFN0YXJ0IGlmIG5lY2Vzc2FyeVxuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAvLyBTb21ldGltZXMgdGhlIHBsYXllciBpcyB1cGRhdGluZyBpdHMgcG9zaXRpb24gYXQgYnVmZmVyaW5nIGVuZCAocGVyaW9kIHN3aXRjaClcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gIT09IHBsYXllclBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1Bvc2l0aW9uIHVwZGF0ZWQgZHVyaW5nIGJ1ZmZlcmluZywgcGVyaW9kIHN3aXRjaCA/JywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHBsYXllclBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIHBvc2l0aW9uIHNlZWsgYmV0d2VlbiAyIHBlcmlvZHMgKGhhcHBlbnMgb24gc29tZSBwbGF5ZXJzKVxuICAgICAgICAgICAgLyogaWYgKE1hdGguYWJzKHRoaXMubGFzdFBvc2l0aW9uIC0gdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVCdWZmZXJpbmcpIDwgMTAwMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdSZXZlcnRpbmcgcG9zaXRpb24gYmVjYXVzZSBvZiBwZXJpb2Qgc3dpdGNoLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVCdWZmZXJpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25CZWZvcmVCdWZmZXJpbmcgPSAwO1xuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBiYWQgcG9zaXRpb24gYWZ0ZXIgc2VlayAoaGFwcGVucyBvbiBzb21lIHBsYXllcnMpXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0UG9zaXRpb24gLSB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlaykgPCAxMDAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1JldmVydGluZyBwb3NpdGlvbiBiZWNhdXNlIG9mIHNlZWsuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlaztcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlayA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TZWVrKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgLy8gRG9uJ3QgcmVtZW1iZXIgd2hhdCB0aGlzIGlzIGRvaW5nLi4uXG4gICAgICAgIC8vICAgSWYgYnVmZmVyaW5nLCB1c2UgcG9zaXRpb24gZnJvbSBidWZmZXJpbmcgc3RhcnQgaW5zdGVhZCBvZiBzZWVrIHN0YXJ0IChmaXggYSBwbGF5ZXIgYmVoYXZpb3IpXG4gICAgICAgIC8vICAgSWYgbm90IGJ1ZmZlcmluZywgdGhpcyBjb25kaXRpb24gd2lsbCBuZXZlciBiZSB0cnVlIEkgZ3Vlc3Mgc2luY2UgbGFzdFBvc2l0aW9uIGlzIHVwZGF0ZSBldmVyeSBzZWNvbmRcbiAgICAgICAgaWYgKHN0YXJ0IDwgdGhpcy5sYXN0UG9zaXRpb24gJiYgdGhpcy5sYXN0UG9zaXRpb24gLSBzdGFydCA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVcGRhdGluZyBzZWVrIHN0YXJ0IHBvc2l0aW9uIGZyb20gJyArIHN0YXJ0ICsgJyB0byAnICsgdGhpcy5sYXN0UG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMubGFzdFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhc3RQb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFkIHBvc2l0aW9uIHdoZW4gc2Vla2luZyB3aGVuIG9uQnVmZmVyaW5nRW5kIGlzIGNhbGxlZFxuICAgICAgICAgICAgLy8gV2hlbiBidWZmZXJpbmcgZW5kLCBzZXQgdGhpcy5sYXN0UG9zaXRpb24gdG8gdGhlIGVuZCBzZWVrIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbkFmdGVyU2VlayA9IGVuZDtcblxuICAgICAgICAgICAgLy8gU2V0dGluZyB0byBidWZmZXJpbmcgc3RhcnQsIGxhc3QgcG9zaXRpb24gaXMgdXBkYXRlZCBpbiBzdGFydCBidWZmZXJpbmcgZXZlbnRcbiAgICAgICAgICAgIGxhc3RQb3NpdGlvbiA9IHRoaXMubGFzdFBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgbm90IGJ1ZmZlcmluZywgcHJvY2VzcyBldmVudHMgYmVmb3JlIHNlZWtpbmdcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3RQb3NpdGlvbiAtIHN0YXJ0KSA8IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1NFRUtfRVJST1JfREVMVEEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXR0aW5nIHRvIHN0YXJ0IGJlY2F1c2UgaWYgdXBkYXRlIHByb2Nlc3MgaXMgbm90IHJ1bm5pbmcsIGxhc3QgcG9zaXRpb24gY2FuIGJlIHdheSBiYWNrIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAvLyBGb3IgaW5zdGFuY2Ugc2VlayB0byBhIGJ1ZmZlcmVkIHBvc2l0aW9uXG4gICAgICAgICAgICBsYXN0UG9zaXRpb24gPSBzdGFydDtcblxuICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb25BZnRlclNlZWsgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRyYWNraW5nIHBvc2l0aW9uXG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gZW5kO1xuXG4gICAgICAgIC8vIEhhbmRsZSBzZWVrIGR1cmluZyBwZXJpb2Qgc3dpdGNoLCB0aGUgcGxheWVyIGNhbiBnZW5lcmF0ZSBzbWFsbCBzZWVrICg8IDYgc2VjcykgYW5kIGl0IGhhcyB0byBiZSBpZ25vcmVkIGFuZCBub3QgY291bnRlZCBhcyBhIHVzZXIgc2Vla1xuICAgICAgICBpZiAoTWF0aC5hYnMoZW5kIC0gc3RhcnQpIDwgQWRUcmFja2luZ01hbmFnZXIuUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSkge1xuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NlZWsgZGV0ZWN0ZWQsIHByb2NlZWRpbmcgZXZlbnRzLi4uJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICAgICAgLy8gSWdub3JlIHNlZWsgYmFja3dhcmQgaWYgPCAyIHNlY29uZHMgKHBlcmlvZCBzd2l0Y2ggZXJyb3IpXG4gICAgICAgICAgICBpZiAoZW5kIDwgc3RhcnQgJiYgc3RhcnQgLSBlbmQgPCAyMDAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0lnbm9yaW5nIHNlZWsuLi4nLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvc2l0aW9uVXBkYXRlZChzdGFydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgcG9zaXRpb25zXG4gICAgICAgICAgICBsZXQgc3RhcnRTZWVrUG9zaXRpb247XG4gICAgICAgICAgICBsZXQgZW5kU2Vla1Bvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7IC8vIHNlZWsgZm9yd2FyZFxuICAgICAgICAgICAgICAgIHN0YXJ0U2Vla1Bvc2l0aW9uID0gbGFzdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGVuZFNlZWtQb3NpdGlvbiA9IGVuZDtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHNlZWsgYmFja3dhcmRcbiAgICAgICAgICAgICAgICBzdGFydFNlZWtQb3NpdGlvbiA9IGVuZDtcbiAgICAgICAgICAgICAgICBlbmRTZWVrUG9zaXRpb24gPSAobGFzdFBvc2l0aW9uIDwgc3RhcnQgPyBzdGFydCA6IGxhc3RQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlZWsgYmFja3dhcmQgd2hpbGUgbm90IHBsYXlpbmcgYW4gYWQsIGRvIG5vdCBwcm9jZXNzIGFsbCB0cmFja2VycyBmcm9tIGVuZCB0byBzdGFydFxuICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgd2hvbGUgYWQgd2lsbCBiZSBwcm9jZWVkZWRcbiAgICAgICAgICAgIGlmIChlbmQgLSBzdGFydCA8IDAvKiAmJiB0aGlzLmN1cnJlbnRBZFRyYWNrZXIgPT09IHVuZGVmaW5lZCovKSB7XG4gICAgICAgICAgICAgICAgZW5kU2Vla1Bvc2l0aW9uID0gZW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGFsbCBldmVudHMgYmV0d2VlbiBzdGFydCBhbmQgZW5kXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRTZWVrUG9zaXRpb247IGkgPD0gZW5kU2Vla1Bvc2l0aW9uOyBpICs9IEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5taW4oaSArIEFkVHJhY2tpbmdNYW5hZ2VyLlBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCwgZW5kU2Vla1Bvc2l0aW9uKTtcblxuICAgICAgICAgICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdCZXR3ZWVuICcgKyBpICsgJyBhbmQgJyArIHBvc2l0aW9uLCB0aGlzLmhhbmRsZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1NlZWsgcHJvY2Vzc2VkIHN0YXJ0OicgKyBzdGFydFNlZWtQb3NpdGlvbiArICcgZW5kOicgKyBlbmRTZWVrUG9zaXRpb24sIHRoaXMuaGFuZGxlci5pZCk7XG5cbiAgICAgICAgICAgIGlmIChlbmQgLSBzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVzZXQgYWQgdHJhY2tlcnMgd2l0aCBwb3NpdGlvbiAnICsgZW5kU2Vla1Bvc2l0aW9uLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWREYXRhPy5yZXNldFByb2dyZXNzaW9uKGVuZFNlZWtQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlZWsgZnJvbSBpbnNpZGUgdG8gaW5zaWRlIGFuIGFkIGJyZWFrXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQWRUcmFja2VyID0gdGhpcy5jdXJyZW50QWRUcmFja2VyO1xuICAgICAgICBpZiAocHJldmlvdXNBZFRyYWNrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlBZFNraXBwZWQodGhpcy5hZERhdGEuc2Vzc2lvblRva2VuLCB0aGlzLmN1cnJlbnRBZFRyYWNrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgc2Vla2VkIHBvc2l0aW9uXG4gICAgICAgIHRoaXMub25Qb3NpdGlvblVwZGF0ZWQoZW5kKTtcblxuICAgICAgICAvLyBSZXNldCBwcm9ncmVzc2lvblxuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnUmVzZXQgYWQgdHJhY2tlcnMgd2l0aCBwb3NpdGlvbiAnICsgZW5kLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICB0aGlzLmFkRGF0YT8ucmVzZXRQcm9ncmVzc2lvbihlbmQpO1xuICAgIH1cblxuICAgIG9uU3RvcChzdGF0dXNDb2RlKSB7XG4gICAgICAgIC8vIFN0b3AgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBldmVudCBhdCB0aGUgc3RvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyQWRhcHRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLm9uUG9zaXRpb25VcGRhdGVkKHRoaXMubGFzdFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBTdG9wIGFkIHRyYWNraW5nXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIC8vIFN0b3Agc2Vzc2lvbiB1cGRhdGVcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlU2Vzc2lvbkpvYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBKb2JNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FuY2VsKHRoaXMudXBkYXRlU2Vzc2lvbkpvYik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZW5kIEdvb2dsZSBQQUsgcGxheWJhY2sgZW5kIGNhbGxiYWNrXG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uPy5zZW5kUGxheWJhY2tFbmQoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5saXN0ZW5lcnMuaW5jbHVkZXMobGlzdGVuZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5RXZlbnQobGlzdGVuZXIsIGV2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyW2V2ZW50TmFtZV0oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlBZEJyZWFrRGF0YShhZEJyZWFrRGF0YSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkQnJlYWtEYXRhJywgYWRCcmVha0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZEJyZWFrQmVnaW4oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRCcmVha0JlZ2luJywgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWREYXRhKGFkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWREYXRhJywgYWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQQVRDSCBmb3IgZGVtbyBwdXJwb3NlIHdhaXRpbmcgZm9yIGJrcC5pbyB0byBzdXBwb3J0IG5vbkxpbmVhckFkIGFkIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IGFkc0V4dERhdGEgPSB0aGlzLmhhbmRsZXIuYWRTZXNzaW9uPy5hZFBhcmFtZXRlcnM/LmFkc0V4dERhdGE7XG4gICAgICAgIGlmIChhZHNFeHREYXRhICYmIGFkc0V4dERhdGFbYWQuY3JlYXRpdmVJZF0gJiYgYWRzRXh0RGF0YVthZC5jcmVhdGl2ZUlkXS5ub25MaW5lYXJBZCkge1xuICAgICAgICAgICAgYWQubm9uTGluZWFyQWQgPSBhZHNFeHREYXRhW2FkLmNyZWF0aXZlSWRdLm5vbkxpbmVhckFkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZC5ub25MaW5lYXJBZCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkTm9uTGluZWFySW50ZXJhY3RpdmVBZChhZC5ub25MaW5lYXJBZCwgYWQuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5QWRCZWdpbihzZXNzaW9uVG9rZW4sIGFkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRCZWdpbicsIHNlc3Npb25Ub2tlbiwgYWQuY3JlYXRpdmVJZCwgYWQuYWRJZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNlbmQgR29vZ2xlIFBBSyBhZCBpbXByZXNzaW9uIGNhbGxiYWNrXG4gICAgICAgIHRoaXMuYWRQYWxTZXNzaW9uPy5zZW5kQWRJbXByZXNzaW9uKCk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRTa2lwcGFibGUoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRTa2lwcGFibGUnLCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZFByb2dyZXNzKHNlc3Npb25Ub2tlbiwgYWQsIHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRQcm9ncmVzcycsIHNlc3Npb25Ub2tlbiwgYWQuY3JlYXRpdmVJZCwgYWQuYWRJZCwgcHJvZ3Jlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZFNraXBwZWQoc2Vzc2lvblRva2VuLCBhZCkge1xuICAgICAgICBjb25zdCBvdGhlclNraXBwZWRBZElkcyA9IFtdO1xuICAgICAgICBhZC5hZEJyZWFrLmFkcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgb3RoZXIgYWRzIHdlcmUgc2tpcHBlZCBmb2xsb3dpbmcgdGhlIGN1cnJlbnQgb25lXG4gICAgICAgICAgICBpZiAoZS5wb3NpdGlvbiA+IGFkLnBvc2l0aW9uICYmIGUucG9zaXRpb24gPCB0aGlzLmxhc3RQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIG90aGVyU2tpcHBlZEFkSWRzLnB1c2goZS5hZElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGxpc3RlbmVyLCAnb25BZFNraXBwZWQnLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQsIG90aGVyU2tpcHBlZEFkSWRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5QWRFbmQoc2Vzc2lvblRva2VuLCBhZCkge1xuICAgICAgICAvLyBGb3JjZSBzZXNzaW9uIHVwZGF0ZSBhdCBhZCBlbmQgKHVzZWZ1bCBmb3Igc21hbGwgc2VnbWVudCBjb250ZW50cylcbiAgICAgICAgaWYgKHRoaXMuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVNlc3Npb25Kb2IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIEpvYk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYW5jZWwodGhpcy51cGRhdGVTZXNzaW9uSm9iKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVCa1lvdVNlc3Npb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFdmVudChsaXN0ZW5lciwgJ29uQWRFbmQnLCBzZXNzaW9uVG9rZW4sIGFkLmNyZWF0aXZlSWQsIGFkLmFkSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZEJyZWFrRW5kKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkQnJlYWtFbmQnLCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlBZHNVcGRhdGVkKGFkRGF0YSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RXZlbnQobGlzdGVuZXIsICdvbkFkc1VwZGF0ZWQnLCBhZERhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGV2ZW50IG9uQWREYXRhIHJlZ2lzdGVyZWQgdGhyb3VnaCBzZXNzaW9uLnNldEFkRGF0YUxpc3RlbmVyKC4uLilcbiAgICAgKiBJZiBkYXRhIGFyZSBhbHJlYWR5IHNlbnQsIGRvIG5vdCBzZW5kIGl0IHR3aWNlXG4gICAgICovXG4gICAgbm90aWZ5QWREYXRhTGlzdGVuZXIoZGF0YVVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RJbWFnZURhdGUgPSB0aGlzLmZpcnN0SW1hZ2VEYXRlIHx8IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGZpcnN0RGF0YSA9IHRoaXMucG9kc1NlbnROdW1iZXIgPT09IDAgJiYgdGhpcy5maXJzdEZpbGVQcm9jZWVkZWQgPT09IGZhbHNlICYmIERhdGUubm93KCkgLSBmaXJzdEltYWdlRGF0ZSA8PSA0MDAwO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnT24gYWQgZGF0YSAoZmlyc3REYXRhOiAnICsgZmlyc3REYXRhICsgJywgZGF0YVVwZGF0ZWQ6ICcgKyBkYXRhVXBkYXRlZCArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICBpZiAoZmlyc3REYXRhID09PSB0cnVlIHx8IGRhdGFVcGRhdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBvZHNTZW50TnVtYmVyID0gdGhpcy5hZExpc3QubGVuZ3RoO1xuXG4gICAgICAgICAgICBMb2dnZXJNYW5hZ2VyLmQoVEFHLCAnT24gYWQgZGF0YSAobGVuZ3RoOiAnICsgdGhpcy5wb2RzU2VudE51bWJlciArICcpJywgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5hZFNlc3Npb24/LmFkRGF0YUxpc3RlbmVyPy5vbkFkRGF0YSh0aGlzLmFkTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIG5vbi1saW5lYXIgaW50ZXJhY3RpdmUgYWRcbiAgICAgKi9cbiAgICBsb2FkTm9uTGluZWFySW50ZXJhY3RpdmVBZChub25MaW5lYXJBZCwgYWREdXJhdGlvbikge1xuICAgICAgICBjb25zdCBtYWluVmlkZW9FbGVtZW50ID0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldE1lZGlhRWxlbWVudCA/IHRoaXMucGxheWVyQWRhcHRlci5nZXRNZWRpYUVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFtYWluVmlkZW9FbGVtZW50IHx8IG5vbkxpbmVhckFkLmFwaUZyYW1ld29yay50b0xvd2VyQ2FzZSgpICE9PSAnc2ltaWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3JlYXRpdmVVcmkgPSBub25MaW5lYXJBZC5pZnJhbWVSZXNvdXJjZTtcbiAgICAgICAgY29uc3QgYWRQYXJhbXMgPSBub25MaW5lYXJBZC5hZFBhcmFtcztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBhZER1cmF0aW9uIC8gMTAwMCAtIDI7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdMb2FkIG5vbi1saW5lYXIgaW50ZXJhY3RpdmUgYWQgZnJvbSB1cmknICsgY3JlYXRpdmVVcmkpO1xuICAgICAgICB0aGlzLnNpbWlkUGxheWVyID0gbmV3IFNpbWlkUGxheWVyKG1haW5WaWRlb0VsZW1lbnQsIGNyZWF0aXZlVXJpLCBmYWxzZSwgKCkgPT4gdGhpcy51bmxvYWROb25MaW5lYXJJbnRlcmFjdGl2ZUFkKCksIEpTT04uc3RyaW5naWZ5KGFkUGFyYW1zKSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnNpbWlkUGxheWVyLmxvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmxvYWQgbm9uLWxpbmVhciBpbnRlcmFjdGl2ZSBhZFxuICAgICAqL1xuICAgIHVubG9hZE5vbkxpbmVhckludGVyYWN0aXZlQWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zaW1pZFBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdVbmxvYWQgbm9uLWxpbmVhciBpbnRlcmFjdGl2ZSBhZCcpO1xuICAgICAgICB0aGlzLnNpbWlkUGxheWVyLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuc2ltaWRQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXJ9IGZyb20gJy4vYWQvbWV0cmljcy9BZE1ldHJpY3MnO1xuaW1wb3J0IEFkTWV0cmljc01hbmFnZXIgZnJvbSAnLi9hZC9tZXRyaWNzL0FkTWV0cmljc01hbmFnZXInO1xuaW1wb3J0IEFkVHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4vYWQvdHJhY2tpbmcvQWRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IHsgQWREYXRhVHJhY2tlciwgQWRCcmVha1RyYWNrZXIsIEFkVHJhY2tlciwgQWRFdmVudFRyYWNrZXIgfSBmcm9tICcuL2FkL3RyYWNraW5nL0FkVHJhY2tlcic7XG5pbXBvcnQge0FkTWFuYWdlciwgQWRWaWV3U3RhdGUsIEFkRnJpZW5kbHlPYnN0cnVjdGlvblB1cnBvc2V9IGZyb20gJy4vYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7QWRTZXNzaW9ufSBmcm9tICcuL2FkL0FkU2Vzc2lvbic7XG5pbXBvcnQgSW50ZXJuYWxBZE1hbmFnZXIgZnJvbSAnLi9hZC9JbnRlcm5hbEFkTWFuYWdlcic7XG5pbXBvcnQgT01TREtNYW5hZ2VyIGZyb20gJy4vcGx1Z2lucy9vbXNkay9PTVNES01hbmFnZXInO1xuaW1wb3J0IE9NU2Vzc2lvbkhhbmRsZXIgZnJvbSAnLi9wbHVnaW5zL29tc2RrL09NU2Vzc2lvbkhhbmRsZXInO1xuXG5pbXBvcnQgU21hcnRMaWIgZnJvbSAnLi9TbWFydExpYic7XG5TbWFydExpYi5hZE1vZHVsZSA9IHtcbiAgICBBZE1ldHJpY3MsIEFkTWV0cmljc0J1aWxkZXIsXG4gICAgQWRNZXRyaWNzTWFuYWdlcixcbiAgICBBZFRyYWNraW5nTWFuYWdlcixcbiAgICBBZERhdGFUcmFja2VyLCBBZEJyZWFrVHJhY2tlciwgQWRUcmFja2VyLCBBZEV2ZW50VHJhY2tlcixcbiAgICBBZE1hbmFnZXIsIEFkVmlld1N0YXRlLCBBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlLFxuICAgIEFkU2Vzc2lvbixcbiAgICBJbnRlcm5hbEFkTWFuYWdlcixcbiAgICBPTVNES01hbmFnZXIsIE9NU2Vzc2lvbkhhbmRsZXJcbn07XG5cbmV4cG9ydCB7XG4gICAgQWRNZXRyaWNzLCBBZE1ldHJpY3NCdWlsZGVyLFxuICAgIEFkTWV0cmljc01hbmFnZXIsXG4gICAgQWRUcmFja2luZ01hbmFnZXIsXG4gICAgQWREYXRhVHJhY2tlciwgQWRCcmVha1RyYWNrZXIsIEFkVHJhY2tlciwgQWRFdmVudFRyYWNrZXIsXG4gICAgQWRNYW5hZ2VyLCBBZFZpZXdTdGF0ZSwgQWRGcmllbmRseU9ic3RydWN0aW9uUHVycG9zZSxcbiAgICBBZFNlc3Npb24sXG4gICAgSW50ZXJuYWxBZE1hbmFnZXIsXG4gICAgT01TREtNYW5hZ2VyLCBPTVNlc3Npb25IYW5kbGVyXG59O1xuIiwiaW1wb3J0IHtMb2dnZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi91dGlscy9Mb2dnZXJNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa09NU0RLTWdyJztcblxuY2xhc3MgT01TREtIYW5kbGVyIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNyZWF0ZU9NQWRTZXNzaW9uKHBhcnRuZXJOYW1lLCBwYXJ0bmVyVmVyc2lvbiwgY3VzdG9tUmVmZXJlbmNlRGF0YSwgdmVyaWZpY2F0aW9uRGF0YSkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPTVNES01hbmFnZXIge1xuICAgIHN0YXRpYyAjaW5zdGFuY2U7XG5cbiAgICBzbWFydExpYjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFPTVNES01hbmFnZXIuI2luc3RhbmNlKSB7XG4gICAgICAgICAgICBPTVNES01hbmFnZXIuI2luc3RhbmNlID0gbmV3IE9NU0RLTWFuYWdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9NU0RLTWFuYWdlci4jaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICAvKiBpbml0KHNtYXJ0TGliKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJbml0aWFsaXppbmcgT00gU0RLIG1hbmFnZXIuLi4nKTtcblxuICAgICAgICB0aGlzLnNtYXJ0TGliID0gc21hcnRMaWI7XG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcblxuICAgIH0qL1xuICAgIGluaXQoKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdJbml0aWFsaXppbmcgT00gU0RLIG1hbmFnZXIuLi4nKTtcbiAgICB9XG5cbiAgICByZWxlYXNlKCkge1xuXG4gICAgfVxuXG4gICAgYXR0YWNoSW5zdGFuY2Uoc21hcnRMaWIpIHtcbiAgICAgICAgdGhpcy5zbWFydExpYiA9IHNtYXJ0TGliO1xuICAgIH1cblxuICAgIGF0dGFjaEhhbmRsZXIob21zZGtIYW5kbGVyKSB7XG4gICAgICAgIExvZ2dlck1hbmFnZXIuZChUQUcsICdBdHRhY2hpbmcgT00gU0RLIGhhbmRsZXIuLi4nKTtcblxuICAgICAgICB0aGlzLm9tc2RrSGFuZGxlciA9IG9tc2RrSGFuZGxlcjtcbiAgICB9XG5cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9tc2RrSGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMub21zZGtIYW5kbGVyICE9PSBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TG9nZ2VyTWFuYWdlcn0gZnJvbSAnLi4vLi4vdXRpbHMvTG9nZ2VyTWFuYWdlcic7XG5pbXBvcnQgT01TREtNYW5hZ2VyIGZyb20gJy4vT01TREtNYW5hZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jwa09NU2Vzc2lvbkhhbmRsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPTVNlc3Npb25IYW5kbGVyIHtcbiAgICBoYW5kbGVyO1xuXG4gICAgYWRTZXNzaW9uO1xuXG4gICAgcGxheWVyQWRhcHRlcjtcblxuICAgIGludGVybmFsQWRNYW5hZ2VyO1xuXG4gICAgb21zZGtIYW5kbGVyO1xuXG4gICAgb21BZFNlc3Npb247XG5cbiAgICBmaXJzdEltYWdlRGF0ZTtcblxuICAgIGFkQnJlYWtQb3NpdGlvbjtcblxuICAgIHBhdXNlO1xuXG4gICAgYnVmZmVyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgcGxheWVyQWRhcHRlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgICAgIHRoaXMuYWRTZXNzaW9uID0gaGFuZGxlci5hZFNlc3Npb247XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBZGFwdGVyID0gcGxheWVyQWRhcHRlcjtcblxuICAgICAgICB0aGlzLmludGVybmFsQWRNYW5hZ2VyID0gdGhpcy5oYW5kbGVyLnNtYXJ0TGliLmludGVybmFsQWRNYW5hZ2VyO1xuXG4gICAgICAgIHRoaXMub21zZGtIYW5kbGVyID0gT01TREtNYW5hZ2VyLmdldEluc3RhbmNlKCkub21zZGtIYW5kbGVyO1xuXG4gICAgICAgIHRoaXMuZmlyc3RJbWFnZURhdGUgPSAwO1xuICAgICAgICB0aGlzLmFkQnJlYWtQb3NpdGlvbiA9ICdtaWRyb2xsJztcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvblJlZGlyZWN0aW9uRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25GaXJzdEltYWdlKGJpdHJhdGUsIHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5maXJzdEltYWdlRGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgb25MYXllclN3aXRjaChiaXRyYXRlKSB7XG5cbiAgICB9XG5cbiAgICBvblBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25SZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uYnVmZmVyU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1ZmZlcmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CdWZmZXJpbmdFbmQoaXNQbGF5aW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uYnVmZmVyRmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWZmZXJpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblN0YWxsRW5kKCkge1xuXG4gICAgfVxuXG4gICAgb25SZWJ1ZmZlcmluZ0VuZCgpIHtcblxuICAgIH1cblxuICAgIG9uU2VlayhzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmFkRGF0YSAhPT0gdW5kZWZpbmVkICYmIE1hdGguYWJzKGVuZCAtIHN0YXJ0KSA+PSAxMDAwKSB7XG4gICAgICAgICAgICBpZiAoZW5kID49IHRoaXMuYWREYXRhLnBvc2l0aW9uICsgdGhpcy5hZERhdGEuZHVyYXRpb24gfHwgZW5kIDwgdGhpcy5hZERhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5za2lwcGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0b3Aoc3RhdHVzQ29kZSkge1xuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5vbUFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgIH1cblxuICAgIG9uU3RhcnRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkKHNlc3Npb25SZXBvcnQpIHtcblxuICAgIH1cblxuICAgIG9uS2VlcGFsaXZlU2Vzc2lvblJlcG9ydFVwZGF0ZVJlcXVlc3RlZChzZXNzaW9uUmVwb3J0KSB7XG5cbiAgICB9XG5cbiAgICBvbkVuZFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQoc2Vzc2lvblJlcG9ydCkge1xuXG4gICAgfVxuXG4gICAgb25BZEJyZWFrRGF0YShhZEJyZWFrVHJhY2tlcikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoKGFkQnJlYWtUcmFja2VyLnBvc2l0aW9uICsgYWRCcmVha1RyYWNrZXIuZHVyYXRpb24pIC0gdGhpcy5wbGF5ZXJBZGFwdGVyLmdldER1cmF0aW9uKCkpIDwgMTAwMDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3Bvc3Ryb2xsJztcbiAgICAgICAgfSBlbHNlIGlmIChEYXRlLm5vdygpIC0gdGhpcy5maXJzdEltYWdlRGF0ZSA8IDMwMDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ3ByZXJvbGwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZEJyZWFrUG9zaXRpb24gPSAnbWlkcm9sbCc7XG4gICAgICAgIH1cbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ0FkIGJyZWFrIHBvc2l0aW9uIGlzICcgKyB0aGlzLmFkQnJlYWtQb3NpdGlvbiwgdGhpcy5oYW5kbGVyLmlkKTtcbiAgICB9XG5cbiAgICBvbkFkQnJlYWtCZWdpbihzZXNzaW9uVG9rZW4pIHtcblxuICAgIH1cblxuICAgIG9uQWREYXRhKGFkRGF0YSkge1xuICAgICAgICAvLyBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnYWQgZGF0YT0nICsgSlNPTi5zdHJpbmdpZnkoYWREYXRhKSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5hZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gc2tpcCA/ICsgc2Vzc2lvbiBmaW5pc2hcbiAgICAgICAgICAgIC8vIHRoaXMub21BZFNlc3Npb24/LnNraXBwZWQoKTtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24/LmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWREYXRhID0gYWREYXRhO1xuXG4gICAgICAgIC8vIEJ1aWxkIGFkIHZlcmlmaWNhdGlvbiBkYXRhXG4gICAgICAgIGxldCBhZFZlcmlmaWNhdGlvbkRhdGE7XG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWZXJpZmljYXRpb25EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkVmVyaWZpY2F0aW9uRGF0YSA9IFsuLi50aGlzLmFkU2Vzc2lvbi5hZFZlcmlmaWNhdGlvbkRhdGFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRWZXJpZmljYXRpb25EYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZERhdGEudmVyaWZpY2F0aW9ucy5mb3JFYWNoKHZlcmlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBqYXZhc2NyaXB0UmVzb3VyY2VzID0gdmVyaWZpY2F0aW9uLmphdmFzY3JpcHRSZXNvdXJjZXMuZmluZChyZXNvdXJjZSA9PiByZXNvdXJjZS5hcGlmcmFtZXdvcmsgPT09ICdvbWlkJyk7XG4gICAgICAgICAgICBhZFZlcmlmaWNhdGlvbkRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uVmVuZG9yOiB2ZXJpZmljYXRpb24udmVuZG9yLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblVSTDogamF2YXNjcmlwdFJlc291cmNlcy51cmwsXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uUGFyYW1ldGVyczogdmVyaWZpY2F0aW9uLnZlcmlmaWNhdGlvblBhcmFtZXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgYWQgc2Vzc2lvblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uID0gdGhpcy5vbXNka0hhbmRsZXIuY3JlYXRlT01BZFNlc3Npb24odGhpcy5pbnRlcm5hbEFkTWFuYWdlci5vbVBhcnRuZXJOYW1lLCB0aGlzLmludGVybmFsQWRNYW5hZ2VyLm9tUGFydG5lclZlcnNpb24sIHRoaXMuYWRTZXNzaW9uPy5hZEN1c3RvbVJlZmVyZW5jZSwgYWRWZXJpZmljYXRpb25EYXRhKTtcblxuICAgICAgICAvLyBTZXQgdGhlIGFkIHZpZXcgaWYgaXQgaGFzIGJlZW4gcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGFkIGJyZWFrXG4gICAgICAgIGlmICh0aGlzLmFkU2Vzc2lvbj8uYWRWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub21BZFNlc3Npb24uc2V0QWRWaWV3KHRoaXMuYWRTZXNzaW9uLmFkVmlldyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hZFNlc3Npb24/LmFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRTZXNzaW9uLmFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5yZWdpc3RlckFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXcoaXRlbS52aWV3LCBpdGVtLnB1cnBvc2UsIGl0ZW0ucmVhc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbi5zdGFydCgpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgYWQgdmlldyBzdGF0ZSBpZiBpdCBoYXMgYmVlbiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYWQgYnJlYWtcbiAgICAgICAgaWYgKHRoaXMuYWRTZXNzaW9uPy5hZFZpZXdTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLnNldEFkVmlld1N0YXRlKHRoaXMuYWRTZXNzaW9uLmFkVmlld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZERhdGEuc2tpcHBhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmxvYWRlZChhZERhdGEuc2tpcHBhYmxlUG9zaXRpb24gLSBhZERhdGEucG9zaXRpb24sIGFkRGF0YS5kdXJhdGlvbiwgdGhpcy5hZEJyZWFrUG9zaXRpb24sIHRoaXMucGxheWVyQWRhcHRlci5nZXRWb2x1bWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmxvYWRlZCgtMSwgYWREYXRhLmR1cmF0aW9uLCB0aGlzLmFkQnJlYWtQb3NpdGlvbiwgdGhpcy5wbGF5ZXJBZGFwdGVyLmdldFZvbHVtZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRCZWdpbihzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQpIHtcblxuICAgIH1cblxuICAgIG9uQWRTa2lwcGFibGUoc2Vzc2lvblRva2VuKSB7XG5cbiAgICB9XG5cbiAgICBvbkFkUHJvZ3Jlc3Moc2Vzc2lvblRva2VuLCBjcmVhdGl2ZUlkLCBhZElkLCBwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5wcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgb25BZEVuZChzZXNzaW9uVG9rZW4sIGNyZWF0aXZlSWQsIGFkSWQpIHtcbiAgICAgICAgdGhpcy5hZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbj8uZmluaXNoKCk7XG4gICAgICAgIHRoaXMub21BZFNlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb25BZEJyZWFrRW5kKHNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLmFkRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5vbUFkU2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tQWRTZXNzaW9uLmZpbmlzaCgpO1xuICAgICAgICAgICAgdGhpcy5vbUFkU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRCcmVha1Bvc2l0aW9uID0gJ21pZHJvbGwnO1xuICAgIH1cblxuICAgIG9uVm9sdW1lQ2hhbmdlZCh2b2x1bWUpIHtcbiAgICAgICAgTG9nZ2VyTWFuYWdlci5kKFRBRywgJ1ZvbHVtZSBpcyBub3cgJyArIHZvbHVtZSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy52b2x1bWVDaGFuZ2Uodm9sdW1lKTtcbiAgICB9XG5cbiAgICBvblBsYXllckVycm9yKGJyb2FkcGVha1N0YXR1c0NvZGUsIHBsYXllckVycm9yQ29kZSkge1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnQnJvYWRwZWFrIHN0YXR1cyBjb2RlICcgKyBicm9hZHBlYWtTdGF0dXNDb2RlLCB0aGlzLmhhbmRsZXIuaWQpO1xuICAgICAgICBMb2dnZXJNYW5hZ2VyLmUoVEFHLCAnUGxheWVyIGVycm9yIGNvZGUgJyArIHBsYXllckVycm9yQ29kZSwgdGhpcy5oYW5kbGVyLmlkKTtcblxuICAgICAgICB0aGlzLm9tQWRTZXNzaW9uPy5lcnJvcihicm9hZHBlYWtTdGF0dXNDb2RlLCBwbGF5ZXJFcnJvckNvZGUpO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgb2JqZWN0R2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJykuZjtcblxudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gdW5jdXJyeVRoaXMoJHByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbi8vIGluIHNvbWUgSUUgdmVyc2lvbnMsIGBwcm9wZXJ0eUlzRW51bWVyYWJsZWAgcmV0dXJucyBpbmNvcnJlY3QgcmVzdWx0IG9uIGludGVnZXIga2V5c1xuLy8gb2YgYG51bGxgIHByb3RvdHlwZSBvYmplY3RzXG52YXIgSUVfQlVHID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG4gIHZhciBPID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgT1syXSA9IDI7XG4gIHJldHVybiAhcHJvcGVydHlJc0VudW1lcmFibGUoTywgMik7XG59KTtcblxuLy8gYE9iamVjdC57IGVudHJpZXMsIHZhbHVlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRPX0VOVFJJRVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IG9iamVjdEtleXMoTyk7XG4gICAgdmFyIElFX1dPUktBUk9VTkQgPSBJRV9CVUcgJiYgb2JqZWN0R2V0UHJvdG90eXBlT2YoTykgPT09IG51bGw7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkge1xuICAgICAga2V5ID0ga2V5c1tpKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCAoSUVfV09SS0FST1VORCA/IGtleSBpbiBPIDogcHJvcGVydHlJc0VudW1lcmFibGUoTywga2V5KSkpIHtcbiAgICAgICAgcHVzaChyZXN1bHQsIFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kSW5kZXg7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkRfSU5ERVggPSAnZmluZEluZGV4JztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZpbmRpbmRleCAtLSB0ZXN0aW5nXG5pZiAoRklORF9JTkRFWCBpbiBbXSkgQXJyYXkoMSlbRklORF9JTkRFWF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZGluZGV4XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kSW5kZXgodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EX0lOREVYKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kIC0tIHRlc3RpbmdcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbi8vIENocm9tZSA4MC04MiBoYXMgYSBjcml0aWNhbCBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwNDk5ODJcbnZhciBDSFJPTUVfQlVHID0gIUlTX05PREUgJiYgQ0hST01FX1ZFUlNJT04gPiA3OSAmJiBDSFJPTUVfVkVSU0lPTiA8IDgzO1xudmFyIEZPUkNFRCA9IENIUk9NRV9CVUcgfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ3JlZHVjZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBsZW5ndGgsIGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJUQUciLCJBZE1ldHJpY3MiLCJtZXRyaWNzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiYWRTa2lwcGFibGUiLCJhZFNraXBwZWQiLCJhZFByb2dyZXNzIiwiYWREdXJhdGlvbiIsInN0YWxsc051bWJlciIsInN0YWxsc0R1cmF0aW9uIiwibGF5ZXJTd2l0Y2hlc051bWJlciIsImF2ZXJhZ2VCaXRyYXRlIiwic2Vzc2lvblRva2VuIiwiY3JlYXRpdmVJZCIsImFkSWQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwibWVyZ2UiLCJsaXN0IiwibWVyZ2VkTWV0cmljcyIsImxhc3RNZXRyaWNzIiwibGF5ZXJQZXJEdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJpIiwiYWRNZXRyaWNzIiwiTWF0aCIsInJvdW5kIiwiQWRNZXRyaWNzQnVpbGRlciIsInRpbWVTcGVudFBlckxheWVyIiwicXVhcnRpbGVzIiwicmVzZXQiLCJfaW1wb3J0Iiwic2V0QWRTa2lwcGFibGUiLCJzZXRBZFNraXBwZWQiLCJhZGRQcm9ncmVzcyIsIk9iamVjdCIsImtleXMiLCJzZXRTZXNzaW9uVG9rZW4iLCJzZXRDcmVhdGl2ZUlkIiwic2V0QWRJZCIsImFkZFRpbWVTcGVudFBlckxheWVyIiwiYml0cmF0ZSIsImR1cmF0aW9uIiwidGltZVNwZW50T25MYXllciIsImFkZExheWVyU3dpdGNoIiwiYWRkU3RhbGwiLCJjbG9uZSIsImFzc2lnbiIsImJ1aWxkIiwiTG9nZ2VyTWFuYWdlciIsIkRhdGVVdGlscyIsIlNtYXJ0TGliIiwiQWRUcmFja2luZ01hbmFnZXIiLCJBZE1ldHJpY3NNYW5hZ2VyIiwiaGFuZGxlciIsInRpbWVsaW5lIiwic2Vzc2lvblJlcG9ydCIsImJ1aWxkZXIiLCJvblN0YXJ0IiwiYWRMYXN0TGF5ZXJTd2l0Y2hEYXRlIiwiZmlyc3RJbWFnZSIsImxhc3RMYXllckJpdHJhdGUiLCJhZExhc3RCdWZmZXJpbmdTdGFydERhdGUiLCJhZEJyZWFrUGxheWluZyIsImFkUGxheWluZyIsIm9uRmlyc3RJbWFnZSIsInBvc2l0aW9uIiwiRGF0ZSIsIm5vdyIsIm9uTGF5ZXJTd2l0Y2giLCJvbkJ1ZmZlcmluZ1N0YXJ0Iiwib25TdGFsbEVuZCIsIm9uUmVidWZmZXJpbmdFbmQiLCJvblNlZWsiLCJzdGFydCIsImVuZCIsImQiLCJmb3JtYXRUaW1lIiwiYWJzIiwiUE9TSVRJT05fU0VFS19FUlJPUl9ERUxUQSIsIm9uU3RvcCIsInN0YXR1c0NvZGUiLCJoYW5kbGVBZEVuZCIsIm9uQWRCcmVha0JlZ2luIiwiX1NtYXJ0TGliJGFuYWx5dGljc01vIiwicHVzaEV2ZW50IiwiYW5hbHl0aWNzTW9kdWxlIiwiU2Vzc2lvblRyYWNrZXJFdmVudHMiLCJBZEJyZWFrU3RhcnQiLCJvbkFkQmVnaW4iLCJpbXBvcnQiLCJvbkFkU2tpcHBhYmxlIiwib25BZFNraXBwZWQiLCJvdGhlclNraXBwZWRBZElkcyIsIl90aGlzIiwiZm9yRWFjaCIsIm9uQWRQcm9ncmVzcyIsInByb2dyZXNzIiwib25BZEVuZCIsIm9uQWRCcmVha0VuZCIsIl9TbWFydExpYiRhbmFseXRpY3NNbzIiLCJwdXNoRXZlbnRQcm9ncmVzcyIsIkFkQnJlYWtTdG9wIiwib25LZWVwYWxpdmVTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkIiwidmFsdWVzIiwib25FbmRTZXNzaW9uUmVwb3J0VXBkYXRlUmVxdWVzdGVkIiwib25BZHNVcGRhdGVkIiwiYWREYXRhIiwiX3RoaXMyIiwiYWRCcmVha3MiLCJhZEJyZWFrIiwiYWRzIiwiYWQiLCJfdGhpczIkaGFuZGxlciIsImlkIiwiZGVmYXVsdCIsIlJlcXVlc3RNYW5hZ2VyIiwiVHJhY2tlciIsInByb2NlZWRlZCIsImNhblByb2Nlc3MiLCJyZXNldFByb2Nlc3MiLCJBZERhdGFUcmFja2VyIiwiYWRUcmFja2luZ01hbmFnZXIiLCJ0aW1lUmVmZXJlbmNlIiwiaGFzUmVtYWluaW5nQWRCcmVha3MiLCJmaW5kIiwicmVzZXRQcm9ncmVzc2lvbiIsIkFkQnJlYWtUcmFja2VyIiwiX1RyYWNrZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJsaXZlIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJwcm9jZXNzQmVnaW4iLCJfYWRUcmFja2luZ01hbmFnZXIkaGEiLCJub3RpZnlBZEJyZWFrRGF0YSIsIm5vdGlmeUFkQnJlYWtCZWdpbiIsImFkRXZlbnRzTGlzdGVuZXIiLCJhZFNlc3Npb24iLCJ0b0RhdGEiLCJwcm9jZXNzRW5kIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhMiIsIm5vdGlmeUFkQnJlYWtFbmQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwic3RhcnRQb3NpdGlvbiIsIm1hcCIsImFkQ291bnQiLCJBZFRyYWNrZXIiLCJfVHJhY2tlcjIiLCJfc3VwZXIyIiwiaW5kZXgiLCJza2lwcGFibGUiLCJza2lwcGFibGVQb3NpdGlvbiIsImNsaWNrYWJsZSIsInZlcmlmaWNhdGlvbnMiLCJub25MaW5lYXJBZCIsImV2ZW50cyIsIndhdGNoZWQiLCJwcm9ncmVzc2lvbiIsImZsYXRXYXRjaGVkIiwicmFuZ2VzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaW50ZXJ2YWxzIiwic2xpY2UiLCJzdGFjayIsInRvcCIsInNvcnQiLCJwdXNoIiwicG9wIiwidXBkYXRlUHJvZ3Jlc3Npb24iLCJwb3NpdGlvblN0YXJ0IiwicG9zaXRpb25FbmQiLCJkdXJhdGlvblN0YXJ0IiwicmVkdWNlIiwic3VtIiwicHJvZ3Jlc3Npb25TdGFydCIsImR1cmF0aW9uRW5kIiwicHJvZ3Jlc3Npb25FbmQiLCJub3RpZnlBZFByb2dyZXNzIiwiZXZlbnQiLCJwcm9jZXNzRXZlbnRzIiwiZmxvb3IiLCJfYWRUcmFja2luZ01hbmFnZXIkaGEzIiwibm90aWZ5QWREYXRhIiwibm90aWZ5QWRCZWdpbiIsIm5vdGlmeUFkU2tpcHBhYmxlIiwiX2FkVHJhY2tpbmdNYW5hZ2VyJGhhNCIsIm5vdGlmeUFkRW5kIiwic2tpcFBvc2l0aW9uIiwiY2xpY2tVUkwiLCJ1cmkiLCJBZEV2ZW50VHJhY2tlciIsIl9UcmFja2VyMyIsIl9zdXBlcjMiLCJ0eXBlIiwidXJsIiwib2Zmc2V0IiwiX3RoaXMzIiwicHJvY2Vzc1Byb2dyZXNzaW9uIiwidG9Mb3dlckNhc2UiLCJnZXRJbnN0YW5jZSIsImFkRXZlbnQiLCJKb2JNYW5hZ2VyIiwiU2ltaWRQbGF5ZXIiLCJwbGF5ZXJBZGFwdGVyIiwibGlzdGVuZXJzIiwic2ltaWRQbGF5ZXIiLCJhZExpc3QiLCJ1cGRhdGVQb3NpdGlvbkpvYiIsInVwZGF0ZVNlc3Npb25Kb2IiLCJzdGFydGVkIiwicGF1c2VkIiwiYnVmZmVyaW5nIiwibGFzdFBvc2l0aW9uIiwibGFzdFBvc2l0aW9uQmVmb3JlUGF1c2UiLCJsYXN0UG9zaXRpb25BZnRlclNlZWsiLCJia1lvdVNlc3Npb24iLCJiYXNlVVJMIiwibm9uY2UiLCJhZFBhbFNlc3Npb25SZXF1ZXN0IiwiZmlyc3RGaWxlUmVjZWl2ZWQiLCJmaXJzdEZpbGVQcm9jZWVkZWQiLCJwb2RzU2VudE51bWJlciIsInNlc3Npb25VcGRhdGVJbnRlcnZhbCIsIlNFU1NJT05fVVBEQVRFX0lOVEVSVkFMIiwiaW5pdEJrWW91U2Vzc2lvbiIsImRhdGEiLCJhZFBhbFNlc3Npb24iLCJwYXJzZUFkUG9kcyIsInVwZGF0ZUJrWW91U2Vzc2lvbiIsInN0b3BwZWQiLCJhZFRyYWNraW5nVVJMIiwic21hcnRMaWJQYXJhbWV0ZXJzIiwic21hcnRMaWIiLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW1ldGVycyIsInVzZXJBZ2VudCIsImFkVHJhY2tpbmciLCJ0aGVuIiwicmVzdWx0IiwiY2FuY2VsIiwiaHR0cFN0YXR1cyIsImNvbnRlbnQiLCJlIiwiYXN5bmNEZWxheSIsImlzTGl2ZSIsImZpeEFkQnJlYWsiLCJsYXN0QWQiLCJuZXh0QWQiLCJmaWx0ZXIiLCJyZWZyZXNoRGVsYXkiLCJhZERhdGFUcmFja2VyIiwiYWRQb2RzIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRQb2QiLCJhZEJyZWFrSWQiLCJzdGFydFRpbWUiLCJhZEJyZWFrVHJhY2tlciIsInNlcXVlbmNlTnVtYmVyIiwiaXNWYWxpZEFkIiwiX2FkJHZpZGVvY2xpY2tzIiwiX2FkJHZpZGVvY2xpY2tzMiIsIl9hZCR2aWRlb2NsaWNrczMiLCJza2lwcGFibGVUaW1lIiwidmlkZW9jbGlja3MiLCJjbGlja3Rocm91Z2h1cmwiLCJ0cmFja2VycyIsImNsaWNrdHJhY2tpbmciLCJjdXN0b21DbGljayIsImN1c3RvbWNsaWNrIiwiYWRWZXJpZmljYXRpb25zIiwiYWR2ZXJpZmljYXRpb25zIiwiZWxlbWVudCIsInZlbmRvciIsImphdmFzY3JpcHRSZXNvdXJjZXMiLCJqYXZhc2NyaXB0cmVzb3VyY2VzIiwiZXhlY3V0YWJsZVJlc291cmNlcyIsImV4ZWN1dGFibGVyZXNvdXJjZXMiLCJ0cmFja2luZ0V2ZW50cyIsInRyYWNraW5nZXZlbnRzIiwidmVyaWZpY2F0aW9uUGFyYW1ldGVycyIsInZlcmlmaWNhdGlvbnBhcmFtZXRlcnMiLCJhZFRyYWNrZXIiLCJ0aW1lIiwiYWRFdmVudFRyYWNrZXIiLCJkYXRhVXBkYXRlZCIsIm1lcmdlRXZlbnRzIiwibm90aWZ5QWREYXRhTGlzdGVuZXIiLCJQT1NJVElPTl9VUERBVEVfSU5URVJWQUwiLCJvblBvc2l0aW9uVXBkYXRlZCIsImdldFBvc2l0aW9uIiwic3RvcCIsImZpcnN0SW1hZ2VEYXRlIiwiZ2V0RHVyYXRpb24iLCJfdGhpczQiLCJuZXdBZENvdW50IiwiZGVsZXRlZEFkQ291bnQiLCJjdXJyZW50SWRzIiwiYXJyYXkiLCJfdGhpczQkY3VycmVudEFkVHJhY2siLCJpbmNsdWRlcyIsImN1cnJlbnRBZFRyYWNrZXIiLCJzcGxpY2UiLCJjdXJyZW50QWRCcmVhayIsImN1cnJlbnRBZCIsImluc2VydEluZGV4IiwiZmluZEluZGV4Iiwib2xkRHVyYXRpb24iLCJub3RpZnlBZHNVcGRhdGVkIiwiY2hlY2tTdGFydCIsImNoZWNrQWRCcmVha0VuZGVkIiwiY3VycmVudFBvc2l0aW9uIiwic3RhcnRQcmVjaXNpb24iLCJjdXJyZW50QWREYXRhIiwiY3VycmVudEFkQnJlYWtEYXRhIiwiY3VycmVudEFkQnJlYWtUcmFja2VyIiwiX3RoaXMkYWREYXRhIiwiX3RoaXMkYWREYXRhMiIsInNraXBwZWQiLCJub3RpZnlBZFNraXBwZWQiLCJfdGhpcyRhZERhdGEzIiwiX3RoaXMkYWREYXRhNCIsIl90aGlzJGFkRGF0YTUiLCJhZFVzZXJJbnRlcmFjdGlvbiIsImludGVyYWN0aW9uVHlwZSIsIl90aGlzJGN1cnJlbnRBZFRyYWNrZSIsIl90aGlzNSIsInRyYWNrZXIiLCJjbGlja3VybCIsImdldEN1cnJlbnRBZCIsImdldEN1cnJlbnRBZEJyZWFrIiwiZ2V0UG9zaXRpb25Gb3JCb29rbWFyayIsImdldFBvc2l0aW9uRm9yUGxheWJhY2siLCJwb3NpdGlvbkluQm9va21hcmsiLCJhIiwiYiIsIl90aGlzNiIsIl90aGlzJGFkUGFsU2Vzc2lvbiIsInNlbmRQbGF5YmFja1N0YXJ0Iiwib25QYXVzZSIsInBsYXllclBvc2l0aW9uIiwib25SZXN1bWUiLCJvbkJ1ZmZlcmluZ0VuZCIsInBsYXlpbmciLCJfdGhpcyRhZERhdGE3Iiwic3RhcnRTZWVrUG9zaXRpb24iLCJlbmRTZWVrUG9zaXRpb24iLCJtaW4iLCJfdGhpcyRhZERhdGE2IiwicHJldmlvdXNBZFRyYWNrZXIiLCJfdGhpcyRhZFBhbFNlc3Npb24yIiwic2VuZFBsYXliYWNrRW5kIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiaW5kZXhPZiIsIm5vdGlmeUV2ZW50IiwiZXZlbnROYW1lIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiYXJnNCIsImFkQnJlYWtEYXRhIiwiX3RoaXM3IiwiX3RoaXM4IiwiX3RoaXM5IiwiX3RoaXMkaGFuZGxlciRhZFNlc3NpIiwiYWRzRXh0RGF0YSIsImFkUGFyYW1ldGVycyIsImxvYWROb25MaW5lYXJJbnRlcmFjdGl2ZUFkIiwiX3RoaXMxMCIsIl90aGlzJGFkUGFsU2Vzc2lvbjMiLCJzZW5kQWRJbXByZXNzaW9uIiwiX3RoaXMxMSIsIl90aGlzMTIiLCJfdGhpczEzIiwiX3RoaXMxNCIsIl90aGlzMTUiLCJfdGhpczE2IiwiZmlyc3REYXRhIiwiX3RoaXMkaGFuZGxlciRhZFNlc3NpMiIsImFkRGF0YUxpc3RlbmVyIiwib25BZERhdGEiLCJfdGhpczE3IiwibWFpblZpZGVvRWxlbWVudCIsImdldE1lZGlhRWxlbWVudCIsImFwaUZyYW1ld29yayIsImNyZWF0aXZlVXJpIiwiaWZyYW1lUmVzb3VyY2UiLCJhZFBhcmFtcyIsInVubG9hZE5vbkxpbmVhckludGVyYWN0aXZlQWQiLCJsb2FkIiwiQWRNYW5hZ2VyIiwiQWRWaWV3U3RhdGUiLCJBZEZyaWVuZGx5T2JzdHJ1Y3Rpb25QdXJwb3NlIiwiQWRTZXNzaW9uIiwiSW50ZXJuYWxBZE1hbmFnZXIiLCJPTVNES01hbmFnZXIiLCJPTVNlc3Npb25IYW5kbGVyIiwiYWRNb2R1bGUiLCJPTVNES0hhbmRsZXIiLCJjcmVhdGVPTUFkU2Vzc2lvbiIsInBhcnRuZXJOYW1lIiwicGFydG5lclZlcnNpb24iLCJjdXN0b21SZWZlcmVuY2VEYXRhIiwidmVyaWZpY2F0aW9uRGF0YSIsImluaXQiLCJyZWxlYXNlIiwiYXR0YWNoSW5zdGFuY2UiLCJhdHRhY2hIYW5kbGVyIiwib21zZGtIYW5kbGVyIiwiaXNFbmFibGVkIiwiX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCIsIl9pbnN0YW5jZSIsIl9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZFNwZWNTZXQiLCJ3cml0YWJsZSIsImludGVybmFsQWRNYW5hZ2VyIiwiYWRCcmVha1Bvc2l0aW9uIiwicGF1c2UiLCJvblJlZGlyZWN0aW9uRW5kIiwiX3RoaXMkb21BZFNlc3Npb24iLCJvbUFkU2Vzc2lvbiIsIl90aGlzJG9tQWRTZXNzaW9uMiIsInJlc3VtZSIsIl90aGlzJG9tQWRTZXNzaW9uMyIsImJ1ZmZlclN0YXJ0IiwiaXNQbGF5aW5nIiwiX3RoaXMkb21BZFNlc3Npb240IiwiYnVmZmVyRmluaXNoIiwiX3RoaXMkb21BZFNlc3Npb241IiwiZmluaXNoIiwib25TdGFydFNlc3Npb25SZXBvcnRVcGRhdGVSZXF1ZXN0ZWQiLCJvbkFkQnJlYWtEYXRhIiwiX3RoaXMkYWRTZXNzaW9uIiwiX3RoaXMkYWRTZXNzaW9uMiIsIl90aGlzJGFkU2Vzc2lvbjMiLCJfdGhpcyRhZFNlc3Npb240IiwiX3RoaXMkYWRTZXNzaW9uNSIsIl90aGlzJG9tQWRTZXNzaW9uNiIsImFkVmVyaWZpY2F0aW9uRGF0YSIsIl90b0NvbnN1bWFibGVBcnJheSIsInZlcmlmaWNhdGlvbiIsInJlc291cmNlIiwiYXBpZnJhbWV3b3JrIiwidmVyaWZpY2F0aW9uVmVuZG9yIiwidmVyaWZpY2F0aW9uVVJMIiwib21QYXJ0bmVyTmFtZSIsIm9tUGFydG5lclZlcnNpb24iLCJhZEN1c3RvbVJlZmVyZW5jZSIsImFkVmlldyIsInNldEFkVmlldyIsImFkRnJpZW5kbHlPYnN0cnVjdGlvblZpZXdzIiwiaXRlbSIsInJlZ2lzdGVyQWRGcmllbmRseU9ic3RydWN0aW9uVmlldyIsInZpZXciLCJwdXJwb3NlIiwicmVhc29uIiwiYWRWaWV3U3RhdGUiLCJzZXRBZFZpZXdTdGF0ZSIsImxvYWRlZCIsImdldFZvbHVtZSIsIl90aGlzJG9tQWRTZXNzaW9uNyIsIl90aGlzJG9tQWRTZXNzaW9uOCIsIm9uVm9sdW1lQ2hhbmdlZCIsInZvbHVtZSIsIl90aGlzJG9tQWRTZXNzaW9uOSIsInZvbHVtZUNoYW5nZSIsIm9uUGxheWVyRXJyb3IiLCJicm9hZHBlYWtTdGF0dXNDb2RlIiwicGxheWVyRXJyb3JDb2RlIiwiX3RoaXMkb21BZFNlc3Npb24xMCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==