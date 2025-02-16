(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define("core", [], factory);
    else if (typeof exports === 'object')
        exports["core"] = factory();
    else
        root["playkit"] = root["playkit"] || {}, root["playkit"]["core"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/
                    configurable: false,
                    /******/
                    enumerable: true,
                    /******/
                    get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 39);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setLogLevel = exports.getLogLevel = exports.LogLevelType = exports.LogLevel = undefined;

            var _jsLogger = __webpack_require__(44);

            var JsLogger = _interopRequireWildcard(_jsLogger);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            var LogLevel = {
                DEBUG: JsLogger.DEBUG,
                INFO: JsLogger.INFO,
                TIME: JsLogger.TIME,
                WARN: JsLogger.WARN,
                ERROR: JsLogger.ERROR,
                OFF: JsLogger.OFF
            };


            var LogLevelType = {};

            // Build the log level types enums according to the LogLevel object
            Object.keys(LogLevel).forEach(function(key) {
                LogLevelType[key] = key;
            });

            JsLogger.useDefaults({
                defaultLevel: JsLogger.ERROR
            });

            /**
             * get a logger
             * @param {?string} name - the logger name
             * @returns {Object} - the logger class
             */
            function getLogger(name) {
                if (!name) {
                    return JsLogger;
                }
                return JsLogger.get(name);
            }

            /**
             * get the log level
             * @param {?string} name - the logger name
             * @returns {PKLogLevelObject} - the log level
             */
            function getLogLevel(name) {
                return getLogger(name).getLevel();
            }

            /**
             * sets the logger level
             * @param {PKLogLevelObject} level - the log level
             * @param {?string} name - the logger name
             * @returns {void}
             */
            function setLogLevel(level, name) {
                getLogger(name).setLevel(level);
            }

            exports.default = getLogger;
            exports.LogLevel = LogLevel;
            exports.LogLevelType = LogLevelType;
            exports.getLogLevel = getLogLevel;
            exports.setLogLevel = setLogLevel;

            /***/
        }),
        /* 1 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Create an Event work-alike object based on the dictionary.
             * The event should contain all of the same properties from the dict.
             * @param {string} type -
             * @param {Object=} opt_dict -
             * @constructor
             * @extends {Event}
             */
            var FakeEvent = function() {

                /**
                 * Non-standard property read by FakeEventTarget to stop processing listeners.
                 * @type {boolean}
                 */


                /** @type {EventTarget} */


                /** @const {string} */


                /** @const {boolean} */

                /** @const {boolean} */
                function FakeEvent(type, payload) {
                    _classCallCheck(this, FakeEvent);

                    // These Properties below cannot be set by dict.  They are all provided for
                    // compatibility with native events.

                    /** @const {boolean} */
                    this.bubbles = false;

                    /** @const {boolean} */
                    this.cancelable = false;

                    /** @const {boolean} */
                    this.defaultPrevented = false;

                    /**
                     * According to MDN, Chrome uses high-res timers instead of epoch time.
                     * Follow suit so that timeStamps on FakeEvents use the same base as
                     * on native Events.
                     * @const {number}
                     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
                     */
                    this.timeStamp = window.performance ? window.performance.now() : Date.now();

                    /** @const {string} */
                    this.type = type;

                    /** @const {boolean} */
                    this.isTrusted = false;

                    /** @type {EventTarget} */
                    this.currentTarget = null;

                    /** @type {EventTarget} */
                    this.target = null;

                    /**
                     * Non-standard property read by FakeEventTarget to stop processing listeners.
                     * @type {boolean}
                     */
                    this.stopped = false;

                    this.payload = payload;
                }

                /**
                 * Does nothing, since FakeEvents have no default.  Provided for compatibility
                 * with native Events.
                 * @override
                 */


                /** @type {EventTarget} */


                /** @const {boolean} */


                /**
                 * According to MDN, Chrome uses high-res timers instead of epoch time.
                 * Follow suit so that timeStamps on FakeEvents use the same base as
                 * on native Events.
                 * @const {number}
                 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
                 */


                /** @const {boolean} */


                _createClass(FakeEvent, [{
                    key: "preventDefault",
                    value: function preventDefault() {}

                    /**
                     * Stops processing event listeners for this event.  Provided for compatibility
                     * with native Events.
                     * @override
                     */

                }, {
                    key: "stopImmediatePropagation",
                    value: function stopImmediatePropagation() {
                        this.stopped = true;
                    }

                    /**
                     * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
                     * with native Events.
                     * @override
                     */

                }, {
                    key: "stopPropagation",
                    value: function stopPropagation() {}
                }]);

                return FakeEvent;
            }();

            exports.default = FakeEvent;

            /***/
        }),
        /* 2 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _severity = __webpack_require__(45);

            var _code = __webpack_require__(46);

            var _category = __webpack_require__(48);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CLASS_NAME = 'Error';

            /**
             * @classdesc This is a description of the error class.
             */

            var Error =

                /**
                 * @constructor
                 * @param {number} severity - error's severity
                 * @param {number} category - error's category.
                 * @param {number} code - error's code.
                 * @param {any} data - additional data for the error.
                 */

                /**
                 * @enum {number}
                 */

                /**
                 * @enum {number}
                 */
                function Error(severity, category, code) {
                    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                    _classCallCheck(this, Error);

                    this.severity = severity;
                    this.category = category;
                    this.code = code;
                    this.data = data;
                    if ((0, _logger.getLogLevel)(CLASS_NAME) !== _logger.LogLevel.OFF) {
                        Error._logger.error('Category:' + category + ' | Code:' + code + ' |', data);
                    }
                }
            /**
             * @enum {number}
             */
            ;

            Error.Severity = _severity.Severity;
            Error.Category = _category.Category;
            Error.Code = _code.Code;
            Error._logger = (0, _logger2.default)(CLASS_NAME);
            exports.default = Error;

            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CustomEventType = exports.Html5EventType = exports.EventType = undefined;

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _adEventType = __webpack_require__(16);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            var Html5EventType = {
                /**
                 * Fires when the loading of an audio/video is aborted
                 */
                ABORT: 'abort',
                /**
                 * Fires when the browser can start playing the audio/video
                 */
                CAN_PLAY: 'canplay',
                /**
                 * Fires when the browser can play through the audio/video without stopping for buffering
                 */
                CAN_PLAY_THROUGH: 'canplaythrough',
                /**
                 * Fires when the duration of the audio/video is changed
                 */
                DURATION_CHANGE: 'durationchange',
                /**
                 * Fires when the current playlist is empty
                 */
                EMPTIED: 'emptied',
                /**
                 * Fires when the current playlist is ended
                 */
                ENDED: 'ended',
                /**
                 * Fires when an error occurred during the loading of an audio/video
                 */
                ERROR: 'error',
                /**
                 * Fires when the browser has loaded the current frame of the audio/video
                 */
                LOADED_DATA: 'loadeddata',
                /**
                 * Fires when the browser has loaded meta data for the audio/video
                 */
                LOADED_METADATA: 'loadedmetadata',
                /**
                 * Fires when the browser starts looking for the audio/video
                 */
                LOAD_START: 'loadstart',
                /**
                 * Fires when the audio/video has been paused
                 */
                PAUSE: 'pause',
                /**
                 * Fires when the audio/video has been started or is no longer paused
                 */
                PLAY: 'play',
                /**
                 * Fires when the audio/video is playing after having been paused or stopped for buffering
                 */
                PLAYING: 'playing',
                /**
                 * Fires when the browser is downloading the audio/video
                 */
                PROGRESS: 'progress',
                /**
                 * Fires when the playing speed of the audio/video is changed
                 */
                RATE_CHANGE: 'ratechange',
                /**
                 * Fires when the user is finished moving/skipping to a new position in the audio/video
                 */
                SEEKED: 'seeked',
                /**
                 * Fires when the user starts moving/skipping to a new position in the audio/video
                 */
                SEEKING: 'seeking',
                /**
                 * Fires when the browser is trying to get media data, but data is not available
                 */
                STALLED: 'stalled',
                /**
                 * Fires when the browser is intentionally not getting media data
                 */
                SUSPEND: 'suspend',
                /**
                 * Fires when the current playback position has changed
                 */
                TIME_UPDATE: 'timeupdate',
                /**
                 * Fires when the volume has been changed
                 */
                VOLUME_CHANGE: 'volumechange',
                /**
                 * Fires when the video stops because it needs to buffer the next frame
                 */
                WAITING: 'waiting',
                /**
                 * Fires when the engine enters picture in picture
                 */
                ENTER_PICTURE_IN_PICTURE: 'enterpictureinpicture',
                /**
                 * Fires when the engine exits picture in picture
                 */
                LEAVE_PICTURE_IN_PICTURE: 'leavepictureinpicture',
                /**
                 * Fires when the engine changes presentation mode on safari webkitpresentationmodechanged
                 */
                PRESENTATION_MODE_CHANGED: 'webkitpresentationmodechanged'
            };

            var CustomEventType = {
                /**
                 * Fires when the media is loaded.
                 */
                MEDIA_LOADED: 'medialoaded',
                /**
                 * Fires when the player ends reset operation.
                 */
                PLAYER_RESET: 'playerreset',
                /**
                 * Fires when the player ends destroy operation.
                 */
                PLAYER_DESTROY: 'playerdestroy',
                /**
                 * Fires when the player enters fullscreen.
                 */
                ENTER_FULLSCREEN: 'enterfullscreen',
                /**
                 * Fires when the player exits fullscreen.
                 */
                EXIT_FULLSCREEN: 'exitfullscreen',
                /**
                 * Fires when browser fails to autoplay with sound.
                 */
                AUTOPLAY_FAILED: 'autoplayfailed',
                /**
                 * Fires when browser fails to autoplay with sound but start muted autoplay instead.
                 */
                FALLBACK_TO_MUTED_AUTOPLAY: 'fallbacktomutedautoplay',
                /**
                 * Fires when change source flow started.
                 */
                CHANGE_SOURCE_STARTED: 'changesourcestarted',
                /**
                 * Fires when change source flow ended.
                 */
                CHANGE_SOURCE_ENDED: 'changesourceended',
                /**
                 * Fires when the volume has been muted/unmute.
                 */
                MUTE_CHANGE: 'mutechange',
                /**
                 * Fires when the active video track has been changed.
                 */
                VIDEO_TRACK_CHANGED: 'videotrackchanged',
                /**
                 * Fires when the active audio track has been changed.
                 */
                AUDIO_TRACK_CHANGED: 'audiotrackchanged',
                /**
                 * Fires when the active text track has been changed.
                 */
                TEXT_TRACK_CHANGED: 'texttrackchanged',
                /**
                 * Fires when the active text track cue has changed.
                 */
                TEXT_CUE_CHANGED: 'textcuechanged',
                /**
                 * Fires when the player tracks have been changed.
                 */
                TRACKS_CHANGED: 'trackschanged',
                /**
                 * Fires when the abr mode change from 'auto' to 'manual' or vice versa.
                 */
                ABR_MODE_CHANGED: 'abrmodechanged',
                /**
                 * Fires when the player state has been changed.
                 */
                PLAYER_STATE_CHANGED: 'playerstatechanged',
                /**
                 * Fires when playback start requested.
                 */
                PLAYBACK_START: 'playbackstart',
                /**
                 * Fires on the first 'play' event.
                 */
                FIRST_PLAY: 'firstplay',
                /**
                 * Fires on the first 'playing' event.
                 */
                FIRST_PLAYING: 'firstplaying',
                /**
                 * Fires when the playback (includes postrolls) is ended.
                 */
                PLAYBACK_ENDED: 'playbackended',
                /**
                 * Fires when the player has selected the source to play.
                 */
                SOURCE_SELECTED: 'sourceselected',
                /**
                 * Fires when the text track style has changed.
                 */
                TEXT_STYLE_CHANGED: 'textstylechanged',
                /**
                 * Fired when the adapter recovered from a media error
                 */
                MEDIA_RECOVERED: 'mediarecovered',
                /**
                 * Fired when the vr stereo mode changed
                 */
                VR_STEREO_MODE_CHANGED: 'vrstereomodechanged',
                /**
                 * Fired when the frames drop are exceeds the allowed (configured) threshold
                 */
                FPS_DROP: 'fpsdrop',
                /**
                 * Fired when the a bookmark service returns an error
                 * This event will be removed once plugins will have a way to expose their event enums
                 */
                BOOKMARK_ERROR: 'bookmarkerror',
                /**
                 * Fired when the a bookmark service returns a concurrency limit error
                 * This event will be removed once plugins will have a way to expose their event enums
                 */
                CONCURRENCY_LIMIT: 'concurrencylimit',
                /**
                 * Fired when the player container changes it's dimensions
                 */
                RESIZE: 'resize'
            };

            var EventType = Utils.Object.merge([Html5EventType, CustomEventType, _adEventType.AdEventType]);

            exports.EventType = EventType;
            exports.Html5EventType = Html5EventType;
            exports.CustomEventType = CustomEventType;

            /***/
        }),
        /* 4 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _multiMap = __webpack_require__(15);

            var _multiMap2 = _interopRequireDefault(_multiMap);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Creates a new EventManager. An EventManager maintains a collection of "event
             * bindings" between event targets and event listeners.
             *
             * @struct
             * @constructor
             * @implements {IDestroyable}
             */
            var EventManager = function() {
                function EventManager() {
                    _classCallCheck(this, EventManager);

                    /**
                     * Maps an event type to an array of event bindings.
                     * @private {MultiMap.<!EventManager.Binding_>}
                     */
                    this._bindingMap = new _multiMap2.default();
                }

                /**
                 * Detaches all event listeners.
                 * @override
                 */


                _createClass(EventManager, [{
                    key: 'destroy',
                    value: function destroy() {
                        this.removeAll();
                        this._bindingMap = null;
                        return Promise.resolve();
                    }

                    /**
                     * Attaches an event listener to an event target for only one time.
                     * @param {EventTarget} target - The event target.
                     * @param {string} type - The event type.
                     * @param {EventManager.ListenerType} listener - The event listener.
                     * @param {?Object} options - The event options.
                     * @returns {void}
                     */

                }, {
                    key: 'listenOnce',
                    value: function listenOnce(target, type, listener, options) {
                        var _this = this;

                        var oneListener = function oneListener(event) {
                            _this.unlisten(target, type, oneListener);
                            listener.call(_this, event);
                        };
                        this.listen(target, type, oneListener, options);
                    }

                    /**
                     * Attaches an event listener to an event target.
                     * @param {EventTarget} target The event target.
                     * @param {string} type The event type.
                     * @param {EventManager.ListenerType} listener The event listener.
                     * @param {?Object} options The event options.
                     * @returns {void}
                     */

                }, {
                    key: 'listen',
                    value: function listen(target, type, listener, options) {
                        var binding = new Binding_(target, type, listener, options);
                        if (this._bindingMap) {
                            this._bindingMap.push(type, binding);
                        }
                    }

                    /**
                     * Detaches an event listener from an event target.
                     * @param {EventTarget} target The event target.
                     * @param {string} type The event type.
                     * @param {EventManager.ListenerType} [listener] The event listener to detach. If no given, detaches all event listeners of the target and type.
                     * @returns {void}
                     */

                }, {
                    key: 'unlisten',
                    value: function unlisten(target, type, listener) {
                        if (this._bindingMap) {
                            var list = this._bindingMap.get(type);

                            for (var i = 0; i < list.length; ++i) {
                                var binding = list[i];

                                if (binding.target === target && (binding.listener === listener || !listener)) {
                                    binding.unlisten();
                                    if (this._bindingMap) {
                                        this._bindingMap.remove(type, binding);
                                    }
                                }
                            }
                        }
                    }

                    /**
                     * Detaches all event listeners from all targets.
                     * @returns {void}
                     */

                }, {
                    key: 'removeAll',
                    value: function removeAll() {
                        if (this._bindingMap) {
                            var listeners = this._bindingMap.getAll();

                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var listener = _step.value;

                                    listener.unlisten();
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            if (this._bindingMap) {
                                this._bindingMap.clear();
                            }
                        }
                    }
                }]);

                return EventManager;
            }();

            /**
             * @typedef {function(!Event)}
             */


            /**
             * Creates a new Binding_ and attaches the event listener to the event target.
             * @param {EventTarget} target The event target.
             * @param {string} type The event type.
             * @param {EventManager.ListenerType} listener The event listener.
             * @constructor
             * @private
             */
            var Binding_ = function() {
                function Binding_(target, type, listener, options) {
                    _classCallCheck(this, Binding_);

                    /** @type {EventTarget} */
                    this.target = target;

                    /** @type {string} */
                    this.type = type;

                    /** @type {?EventManager.ListenerType} */
                    this.listener = listener;

                    /** @type {?Object} */
                    this.options = options;

                    this.target.addEventListener(type, listener, options);
                }

                /**
                 * Detaches the event listener from the event target. This does nothing if the
                 * event listener is already detached.
                 * @returns {void}
                 */


                _createClass(Binding_, [{
                    key: 'unlisten',
                    value: function unlisten() {
                        if (!this.target) return;

                        this.target.removeEventListener(this.type, this.listener, this.options);

                        this.target = null;
                        this.listener = null;
                        this.options = null;
                    }
                }]);

                return Binding_;
            }();

            exports.default = EventManager;

            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.VERSION = exports.Http = exports.Dom = exports.Generator = exports.Object = exports.String = exports.Number = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            var _jsonp = __webpack_require__(43);

            function _toArray(arr) {
                return Array.isArray(arr) ? arr : Array.from(arr);
            }

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            'use strict';

            var _Number = {
                /**
                 * @param {number} n - A certain number
                 * @returns {boolean} - If the input is a number
                 */
                isNumber: function isNumber(n) {
                    return Number(n) === n;
                },

                /**
                 * @param {number} n - A certain number
                 * @returns {boolean} - If the input is an integer
                 */
                isInt: function isInt(n) {
                    return this.isNumber(n) && n % 1 === 0;
                },

                /**
                 * @param {number} n - A certain number
                 * @returns {boolean} - If the input is a float
                 */
                isFloat: function isFloat(n) {
                    return this.isNumber(n) && n % 1 !== 0;
                }
            };

            var _String = {
                /**
                 * Uppercase the first letter of a string
                 * @param  {String} string - String to be uppercased
                 * @return {String} - The uppercased string
                 * @public
                 * @method toTitleCase
                 */
                capitlize: function capitlize(string) {
                    if (typeof string !== 'string') {
                        return string;
                    }
                    return string.charAt(0).toUpperCase() + string.slice(1);
                },

                /**
                 * @param {string} string - Certain string
                 * @param {string} searchString - Certain string
                 * @returns {boolean} - Whether the string: string is ending with string: searchString
                 */
                endsWith: function endsWith(string, searchString) {
                    if (typeof string !== 'string' || typeof searchString !== 'string') {
                        return false;
                    }
                    return string.indexOf(searchString, string.length - searchString.length) != -1;
                }
            };

            var _Object = {
                /**
                 * @param {Array<Object>} objects - The objects to merge
                 * @returns {Object} - The merged object.
                 */
                merge: function merge(objects) {
                    var target = {};
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var obj = _step.value;

                            Object.assign(target, obj);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return target;
                },

                /**
                 * @param {any} item - The item to check.
                 * @returns {boolean} - Whether the item is an object.
                 */
                isObject: function isObject(item) {
                    return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
                },

                /**
                 * @param {any} target - The target object.
                 * @param {any} sources - The objects to merge.
                 * @returns {Object} - The merged object.
                 */
                mergeDeep: function mergeDeep(target) {
                    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        sources[_key - 1] = arguments[_key];
                    }

                    if (!sources.length) {
                        return target;
                    }
                    var source = sources.shift();
                    if (this.isObject(target) && this.isObject(source)) {
                        for (var key in source) {
                            if (this.isObject(source[key])) {
                                if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
                                this.mergeDeep(target[key], source[key]);
                            } else {
                                Object.assign(target, _defineProperty({}, key, source[key]));
                            }
                        }
                    }
                    return this.mergeDeep.apply(this, [target].concat(_toConsumableArray(sources)));
                },

                /**
                 * @param {any} data - The data to copy.
                 * @returns {any} - The copied data.
                 */
                copyDeep: function copyDeep(data) {
                    var _this = this;

                    var node = void 0;
                    if (Array.isArray(data)) {
                        node = data.length > 0 ? data.slice(0) : [];
                        node.forEach(function(e, i) {
                            if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && e !== {} || Array.isArray(e) && e.length > 0) {
                                node[i] = _this.copyDeep(e);
                            }
                        });
                    } else if (data !== null && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
                        if (data.clone && typeof data.clone === 'function') {
                            node = data.clone();
                        } else {
                            node = Object.assign({
                                __proto__: data.__proto__
                            }, data);
                            Object.keys(node).forEach(function(key) {
                                if (_typeof(node[key]) === 'object' && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
                                    node[key] = _this.copyDeep(node[key]);
                                }
                            });
                        }
                    } else {
                        node = data;
                    }
                    return node;
                },

                /**
                 * Checks if an object is an empy object.
                 * @param {Object} obj - The object to check
                 * @returns {boolean} - Whether the object is empty.
                 */
                isEmptyObject: function isEmptyObject(obj) {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) return false;
                    }
                    return true;
                },

                /**
                 * Checks for nested object properties.
                 * @param {Object} obj - The object to check.
                 * @param {string} propertyPath - The path to check.
                 * @returns {boolean} - The value in this path.
                 */
                getPropertyPath: function getPropertyPath(obj, propertyPath) {
                    return propertyPath.split('.').reduce(function(o, x) {
                        return typeof o === 'undefined' || o === null ? o : o[x];
                    }, obj);
                },

                /**
                 * Checks for nested object properties.
                 * @param {Object} obj - The object to check.
                 * @param {string} propertyPath - The path to check.
                 * @returns {boolean} - Whether the path exists in the object.
                 */
                hasPropertyPath: function hasPropertyPath(obj, propertyPath) {
                    if (!propertyPath) {
                        return false;
                    }
                    var properties = propertyPath.split('.');
                    for (var i = 0; i < properties.length; i++) {
                        var prop = properties[i];
                        if (!obj || !obj.hasOwnProperty(prop)) {
                            return false;
                        } else {
                            obj = obj[prop];
                        }
                    }
                    return true;
                },

                /**
                 * Create an object with a given property path.
                 * @param {Object} obj - The object to create on.
                 * @param {string} path - The path to create in the object.
                 * @param {any} value - The value to set in the path.
                 * @returns {Object} - The result object.
                 */
                createPropertyPath: function createPropertyPath(obj, path) {
                    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                    var pathArray = path.split('.');
                    var current = obj;
                    while (pathArray.length > 1) {
                        var _pathArray = pathArray,
                            _pathArray2 = _toArray(_pathArray),
                            head = _pathArray2[0],
                            tail = _pathArray2.slice(1);

                        pathArray = tail;
                        if (current[head] === undefined) {
                            current[head] = {};
                        }
                        current = current[head];
                    }
                    current[pathArray[0]] = value;
                    return obj;
                },

                /**
                 * Deleted a property path from an object.
                 * @param {Object} obj - The object to delete the property path from.
                 * @param {string} path - The path to delete in the object.
                 * @returns {void}
                 */
                deletePropertyPath: function deletePropertyPath(obj, path) {
                    if (!obj || !path) {
                        return;
                    }
                    var pathArray = path.split('.');
                    for (var i = 0; i < pathArray.length - 1; i++) {
                        obj = obj[pathArray[i]];
                        if (typeof obj === 'undefined') {
                            return;
                        }
                    }
                    delete obj[pathArray.pop()];
                },

                /**
                 * Creates deferred promise which can resolved/rejected outside the promise scope.
                 * @returns {DeferredPromise} - The promise with resolve and reject props.
                 */
                defer: function defer() {
                    var res = void 0,
                        rej = void 0;
                    // $FlowFixMe
                    var promise = new Promise(function(resolve, reject) {
                        res = resolve;
                        rej = reject;
                    });
                    // $FlowFixMe
                    promise.resolve = res;
                    // $FlowFixMe
                    promise.reject = rej;
                    return promise;
                },

                /**
                 * Binds an handler to a desired context.
                 * @param {any} thisObj - The handler context.
                 * @param {Function} fn - The handler.
                 * @returns {Function} - The new bound function.
                 * @public
                 */
                bind: function bind(thisObj, fn) {
                    return function() {
                        fn.apply(thisObj, arguments);
                    };
                }
            };

            var _Generator = {
                /**
                 * Generates unique id.
                 * @param {number} length - The length of the id.
                 * @returns {string} - The generated id.
                 */
                uniqueId: function uniqueId(length) {
                    var from = 2;
                    var to = from + (!length || length < 0 ? 0 : length - 2);
                    return '_' + Math.random().toString(36).substr(from, to);
                },

                /**
                 * Generates GUID.
                 * @return {string} - GUID
                 * @private
                 */
                guid: function guid() {
                    var S4 = function S4() {
                        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                    };
                    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
                }
            };

            var _Dom = {
                /**
                 * Adds class name to an element
                 * @param {Element} element - an HTML element
                 * @param {string} className - a class name
                 * @returns {void}
                 */
                addClassName: function addClassName(element, className) {
                    if (element.classList) {
                        element.classList.add(className);
                    } else {
                        if (!_Dom.hasClassName(element, className)) {
                            element.className += className;
                        }
                    }
                },


                /**
                 * Removes class name from an element
                 * @param {Element} element - an HTML element
                 * @param {string} className - a class name
                 * @returns {void}
                 */
                removeClassName: function removeClassName(element, className) {
                    if (element.classList) {
                        element.classList.remove(className);
                    } else {
                        if (_Dom.hasClassName(element, className)) {
                            element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
                        }
                    }
                },

                /**
                 * Checks if an element has a class name
                 * @param {Element} element - an HTML element
                 * @param {string} className - a class name
                 * @returns {boolean} - weather an element contains a class name
                 */
                hasClassName: function hasClassName(element, className) {
                    return element.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className);
                },

                /**
                 * Add element attribute
                 * @param {Element} element - an HTML element
                 * @param {string} name - attribute name
                 * @param {string} value - attribute value
                 * @returns {void}
                 */
                setAttribute: function setAttribute(element, name, value) {
                    element.setAttribute(name, value);
                },

                /**
                 * Remove element attribute
                 * @param {Element} element - an HTML element
                 * @param {string} name - attribute name
                 * @returns {void}
                 */
                removeAttribute: function removeAttribute(element, name) {
                    element.removeAttribute(name);
                },

                /**
                 * Set element style
                 * @param {Element} element - an HTML element
                 * @param {string} name - style name
                 * @param {string} value - style value
                 * @returns {void}
                 */
                setStyle: function setStyle(element, name, value) {
                    if (element.style.getPropertyValue(name) !== undefined) {
                        element.style.setProperty(name, value);
                    }
                },

                /**
                 * Adds a node to the end of the list of children of a specified parent node.
                 * @param {Element} parent - The parent node.
                 * @param {Element} child - The child node.
                 * @returns {void}
                 */
                appendChild: function appendChild(parent, child) {
                    if (parent && child && parent.appendChild) {
                        parent.appendChild(child);
                    }
                },

                /**
                 * Removes an element from his parent node.
                 * @param {Element} parent - The parent node.
                 * @param {Element} child - The child node.
                 * @returns {void}
                 */
                removeChild: function removeChild(parent, child) {
                    if (parent && child && parent.removeChild) {
                        parent.removeChild(child);
                    }
                },

                /**
                 * Prepend HTML element
                 * @param {HTMLElement} child - the child to prepend
                 * @param {HTMLElement} parent - the parent to preprend to
                 * @returns {void}
                 */
                prependTo: function prependTo(child, parent) {
                    if (parent.firstChild) {
                        parent.insertBefore(child, parent.firstChild);
                    } else {
                        parent.appendChild(child);
                    }
                },

                /**
                 * Returns a reference to the element by its ID.
                 * @param {string} id - The desired id.
                 * @returns {Element} - The element with the desired id.
                 */
                getElementById: function getElementById(id) {
                    return document.getElementById(id);
                },

                /**
                 * Returns a live HTMLCollection of elements with the given tag name.
                 * @param {string} tagName - The desired tag name.
                 * @returns {Element} - The elements with the desired tag name.
                 */
                getElementsByTagName: function getElementsByTagName(tagName) {
                    return document.getElementsByTagName(tagName);
                },

                /**
                 * Creates the HTML element specified by tagName.
                 * @param {string} tagName - The tag name.
                 * @returns {Element} - The element just created.
                 */
                createElement: function createElement(tagName) {
                    return document.createElement(tagName);
                },

                /**
                 * Loads script asynchronously.
                 * @param {string} url - The url to load.
                 * @return {Promise} - The loading promise.
                 * @public
                 */
                loadScriptAsync: function loadScriptAsync(url) {
                    var _this2 = this;

                    return new Promise(function(resolve, reject) {
                        var r = false,
                            t = document.getElementsByTagName('script')[0],
                            s = _this2.createElement('script');
                        s.type = 'text/javascript';
                        s.src = url;
                        s.async = true;
                        s.onload = s.onreadystatechange = function() {
                            if (!r && (!this.readyState || this.readyState === 'complete')) {
                                r = true;
                                resolve(this);
                            }
                        };
                        s.onerror = s.onabort = reject;
                        if (t && t.parentNode) {
                            t.parentNode.insertBefore(s, t);
                        }
                    });
                },

                /**
                 * Returns the first element that matches a specified CSS selector(s) in the document.
                 * @param {string} selector - One or more CSS selectors to match the element.
                 * @returns {Element} - The first element that matches a specified CSS selector(s) in the document.
                 */
                getElementBySelector: function getElementBySelector(selector) {
                    try {
                        return document.querySelector(selector);
                    } catch (e) {
                        return;
                    }
                },

                /**
                 * Inserts a node as a child, right before an existing child.
                 * @param {HTMLElement} parent -  The parent node object.
                 * @param {HTMLElement} newChild -  The node object to insert.
                 * @param {?HTMLElement} existingChild - The child node to insert the new node before. If set to null, the insertBefore method will insert the newChild at the end.
                 * @returns {Element} - The first element that matches a specified CSS selector(s) in the document.
                 */
                insertBefore: function insertBefore(parent, newChild, existingChild) {
                    try {
                        return parent.insertBefore(newChild, existingChild);
                    } catch (e) {
                        return null;
                    }
                }
            };

            var _Http = {
                execute: function execute(url, params) {
                    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
                    var headers = arguments[3];

                    var request = new XMLHttpRequest();
                    return new Promise(function(resolve, reject) {
                        request.onreadystatechange = function() {
                            if (request.readyState === 4) {
                                if (request.status === 200) {
                                    try {
                                        var jsonResponse = JSON.parse(request.responseText);
                                        resolve(jsonResponse);
                                    } catch (e) {
                                        resolve(request.responseText);
                                    }
                                } else {
                                    reject(request.responseText);
                                }
                            }
                        };
                        request.open(method, url);
                        if (headers) {
                            headers.forEach(function(value, key) {
                                request.setRequestHeader(key, value);
                            });
                        }
                        request.send(params);
                    });
                },
                jsonp: _jsonp.jsonp
            };

            var _VERSION = {
                /**
                 * Compares two software version numbers (e.g. "1.7.1" or "1.2b").
                 *
                 * @param {string} v1 The first version to be compared.
                 * @param {string} v2 The second version to be compared.
                 * @param {object} [options] Optional flags that affect comparison behavior:
                 * lexicographical: (true/[false]) compares each part of the version strings lexicographically instead of naturally;
                 *                  this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than "1.2".
                 * zeroExtend: ([true]/false) changes the result if one version string has less parts than the other. In
                 *             this case the shorter string will be padded with "zero" parts instead of being considered smaller.
                 *
                 * @returns {number|NaN}
                 * - 0 if the versions are equal
                 * - a negative integer iff v1 < v2
                 * - a positive integer iff v1 > v2
                 * - NaN if either version string is in the wrong format
                 */

                compare: function compare(v1, v2) {
                    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                    options = _Object.merge([{
                        lexicographical: false,
                        zeroExtend: true
                    }, options]);
                    var lexicographical = options.lexicographical;
                    var zeroExtend = options.zeroExtend;
                    var v1parts = (v1 || '0').split('.');
                    var v2parts = (v2 || '0').split('.');

                    var isValidPart = function isValidPart(x) {
                        return (lexicographical ? /^\d+[A-Za-zαß]*$/ : /^\d+[A-Za-zαß]?$/).test(x);
                    };

                    var mapParts = function mapParts(parts) {
                        return parts.map(function(x) {
                            var match = /[A-Za-zαß]/.exec(x);
                            return Number(match ? x.replace(match[0], '.' + x.charCodeAt(match.index)) : x);
                        });
                    };

                    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
                        return NaN;
                    }

                    if (zeroExtend) {
                        while (v1parts.length < v2parts.length) {
                            v1parts.push('0');
                        }
                        while (v2parts.length < v1parts.length) {
                            v2parts.push('0');
                        }
                    }

                    if (!lexicographical) {
                        v1parts = mapParts(v1parts);
                        v2parts = mapParts(v2parts);
                    }

                    for (var i = 0; i < v1parts.length; ++i) {
                        if (v2parts.length === i) {
                            return 1;
                        }

                        if (v1parts[i] === v2parts[i]) {
                            continue;
                        }
                        // $FlowFixMe
                        else if (v1parts[i] > v2parts[i]) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }

                    if (v1parts.length !== v2parts.length) {
                        return -1;
                    }

                    return 0;
                }
            };

            exports.Number = _Number;
            exports.String = _String;
            exports.Object = _Object;
            exports.Generator = _Generator;
            exports.Dom = _Dom;
            exports.Http = _Http;
            exports.VERSION = _VERSION;

            /***/
        }),
        /* 6 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _multiMap = __webpack_require__(15);

            var _multiMap2 = _interopRequireDefault(_multiMap);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
             * but this can be used as a base class to provide event dispatch to non-DOM
             * classes.  Only FakeEvents should be dispatched.
             *
             * @struct
             * @constructor
             * @implements {EventTarget}
             * @export
             */
            var FakeEventTarget = function() {
                function FakeEventTarget() {
                    _classCallCheck(this, FakeEventTarget);

                    /**
                     * @private {!MultiMap.<FakeEventTarget.ListenerType>}
                     */
                    this._listeners = new _multiMap2.default();

                    /**
                     * The target of all dispatched events.  Defaults to |this|.
                     * @type {EventTarget}
                     */
                    this.dispatchTarget = this;
                }

                /**
                 * Add an event listener to this object.
                 *
                 * @param {string} type The event type to listen for.
                 * @param {FakeEventTarget.ListenerType} listener The callback or
                 *   listener object to invoke.
                 * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
                 *   parents, so events neither capture nor bubble.
                 * @override
                 * @export
                 */


                _createClass(FakeEventTarget, [{
                    key: 'addEventListener',
                    value: function addEventListener(type, listener) {
                        this._listeners.push(type, listener);
                    }

                    /**
                     * Remove an event listener from this object.
                     *
                     * @param {string} type The event type for which you wish to remove a listener.
                     * @param {FakeEventTarget.ListenerType} listener The callback or
                     *   listener object to remove.
                     * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
                     *   parents, so events neither capture nor bubble.
                     * @override
                     * @export
                     */

                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener(type, listener) {
                        this._listeners.remove(type, listener);
                    }

                    /**
                     * Dispatch an event from this object.
                     *
                     * @param {!Event} event The event to be dispatched from this object.
                     * @return {boolean} True if the default action was prevented.
                     * @override
                     * @export
                     */

                }, {
                    key: 'dispatchEvent',
                    value: function dispatchEvent(event) {
                        // In many browsers, it is complex to overwrite properties of actual Events.
                        // Here we expect only to dispatch FakeEvents, which are simpler.
                        //goog.asserts.assert(event instanceof FakeEvent,
                        //    'FakeEventTarget can only dispatch FakeEvents!');

                        var list = this._listeners.get(event.type) || [];

                        for (var i = 0; i < list.length; ++i) {
                            // Do this every time, since events can be re-dispatched from handlers.
                            event.target = this.dispatchTarget;
                            event.currentTarget = this.dispatchTarget;

                            var listener = list[i];
                            try {
                                if (listener.handleEvent) {
                                    listener.handleEvent(event);
                                } else {
                                    listener.call(this, event);
                                }
                            } catch (exception) {
                                // Exceptions during event handlers should not affect the caller,
                                // but should appear on the console as uncaught, according to MDN:
                                // http://goo.gl/N6Ff27
                                // TODO: add log
                            }

                            if (event.stopped) {
                                break;
                            }
                        }

                        return event.defaultPrevented;
                    }
                }]);

                return FakeEventTarget;
            }();

            /**
             * These are the listener types defined in the closure extern for EventTarget.
             * @typedef {EventListener|function(!Event):(boolean|undefined)}
             */


            exports.default = FakeEventTarget;

            /***/
        }),
        /* 7 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * General track representation of the player.
             * @classdesc
             */
            var Track = function() {
                _createClass(Track, [{
                    key: "id",


                    /**
                     * Getter for the track id.
                     * @public
                     * @returns {?string} - The track id.
                     */
                    get: function get() {
                        return this._id;
                    }

                    /**
                     * Getter for the active mode of the track.
                     * @public
                     * @returns {boolean} - The active mode of the track.
                     */

                }, {
                    key: "active",
                    get: function get() {
                            return this._active;
                        }

                        /**
                         * Setter for the active mode of the track.
                         * @public
                         * @param {boolean} value - Whether the track is active or not.
                         */
                        ,
                    set: function set(value) {
                        this._active = value;
                    }

                    /**
                     * Getter for the label of the track.
                     * @public
                     * @returns {string} - The label of the track.
                     */

                }, {
                    key: "label",
                    get: function get() {
                            return this._label;
                        }

                        /**
                         * Getter for the language of the track.
                         * @public
                         * @returns {string} - The language of the track.
                         */
                        ,


                    /**
                     * Setter for the label of the track.
                     * @public
                     * @param {string} value - The label of the track.
                     */
                    set: function set(value) {
                        this._label = value;
                    }

                    /**
                     * @constructor
                     * @param {Object} settings - The track settings object.
                     */

                }, {
                    key: "language",
                    get: function get() {
                        return this._language;
                    }

                    /**
                     * Getter for the index of the track.
                     * @public
                     * @returns {number} - The index of the track.
                     */

                }, {
                    key: "index",
                    get: function get() {
                            return this._index;
                        }

                        /**
                         * Setter for the index of the track.
                         * @public
                         * @param {number} value - The index of the track.
                         * @returns {void}
                         */
                        ,
                    set: function set(value) {
                        this._index = value;
                    }
                }], [{
                    key: "langComparer",

                    /**
                     * Comparing language strings.
                     * @param {string} inputLang - The configured language.
                     * @param {string} trackLang - The default track language.
                     * @returns {boolean} - Whether the strings are equal or starts with the same substring.
                     */
                    value: function langComparer(inputLang, trackLang) {
                        try {
                            inputLang = inputLang.toLowerCase();
                            trackLang = trackLang.toLowerCase();
                            return inputLang ? inputLang.startsWith(trackLang) || trackLang.startsWith(inputLang) : false;
                        } catch (e) {
                            return false;
                        }
                    }
                }, {
                    key: "clone",
                    value: function clone(track) {
                        return Object.assign(Object.create(Object.getPrototypeOf(track)), track);
                    }

                    /**
                     * The id of the track.
                     * @member
                     * @type {string}
                     * @private
                     */

                    /**
                     * The active mode of the track.
                     * @member
                     * @type {boolean}
                     * @private
                     */

                    /**
                     * The label of the track.
                     * @member
                     * @type {string}
                     * @private
                     */

                    /**
                     * The language of the track.
                     * @member
                     * @type {string}
                     * @private
                     */

                    /**
                     * The index of the track.
                     * @member
                     * @type {number}
                     * @private
                     */

                    /**
                     * The clone function reference.
                     * @member
                     * @type {Function}
                     * @public
                     */

                }]);

                function Track() {
                    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, Track);

                    this._id = settings.id;
                    this._active = settings.active;
                    this._label = settings.label;
                    this._language = settings.language;
                    this._index = settings.index;
                    this.clone = Track.clone.bind(null, this);
                }

                return Track;
            }();

            exports.default = Track;

            /***/
        }),
        /* 8 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _env = __webpack_require__(12);

            var _env2 = _interopRequireDefault(_env);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _posterManager = __webpack_require__(42);

            var _posterManager2 = _interopRequireDefault(_posterManager);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _eventType = __webpack_require__(3);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _locale = __webpack_require__(49);

            var _locale2 = _interopRequireDefault(_locale);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _pluginManager = __webpack_require__(17);

            var _pluginManager2 = _interopRequireDefault(_pluginManager);

            var _basePlugin = __webpack_require__(18);

            var _basePlugin2 = _interopRequireDefault(_basePlugin);

            var _stateManager = __webpack_require__(50);

            var _stateManager2 = _interopRequireDefault(_stateManager);

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            var _videoTrack = __webpack_require__(10);

            var _videoTrack2 = _interopRequireDefault(_videoTrack);

            var _audioTrack = __webpack_require__(11);

            var _audioTrack2 = _interopRequireDefault(_audioTrack);

            var _textTrack = __webpack_require__(9);

            var _textTrack2 = _interopRequireDefault(_textTrack);

            var _textStyle = __webpack_require__(20);

            var _textStyle2 = _interopRequireDefault(_textStyle);

            var _vttCue = __webpack_require__(13);

            var _textTrackDisplay = __webpack_require__(21);

            var _stateType = __webpack_require__(19);

            var _trackType = __webpack_require__(14);

            var _labelToTrackMap = __webpack_require__(52);

            var _streamType = __webpack_require__(25);

            var _engineType = __webpack_require__(26);

            var _mediaType = __webpack_require__(27);

            var _abrModeType = __webpack_require__(28);

            var _corsTypes = __webpack_require__(29);

            var _playbackMiddleware = __webpack_require__(54);

            var _playbackMiddleware2 = _interopRequireDefault(_playbackMiddleware);

            var _playerConfig = __webpack_require__(56);

            __webpack_require__(57);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _engineProvider = __webpack_require__(30);

            var _externalCaptionsHandler = __webpack_require__(72);

            var _adBreakType = __webpack_require__(34);

            var _adTagType = __webpack_require__(35);

            var _adsController = __webpack_require__(36);

            var _adEventType = __webpack_require__(16);

            var _controllerProvider = __webpack_require__(73);

            var _resizeWatcher = __webpack_require__(74);

            var _fullscreenController = __webpack_require__(75);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * The black cover class name.
             * @type {string}
             * @const
             */
            var BLACK_COVER_CLASS_NAME = 'playkit-black-cover';
            /**
             * The player container class name.
             * @type {string}
             * @const
             */
            var CONTAINER_CLASS_NAME = 'playkit-container';

            /**
             /**
             * The player poster class name.
             * @type {string}
             * @const
             */
            var POSTER_CLASS_NAME = 'playkit-poster';

            /**
             * The engine class name.
             * @type {string}
             * @const
             */
            var ENGINE_CLASS_NAME = 'playkit-engine';

            /**
             * The text style class name.
             * @type {string}
             * @const
             */
            var SUBTITLES_STYLE_CLASS_NAME = 'playkit-subtitles-style';

            /**
             * The subtitles class name.
             * @type {string}
             * @const
             */
            var SUBTITLES_CLASS_NAME = 'playkit-subtitles';

            /**
             *  The auto string, for captions
             *  @type {string}
             *  @const
             */
            var AUTO = 'auto';

            /**
             *  The off string, for captions
             *  @type {string}
             *  @const
             */
            var OFF = 'off';

            /**
             *  The duration offset, for seeking to duration safety.
             *  @type {number}
             *  @const
             */
            var DURATION_OFFSET = 0.1;

            /**
             * The toggle fullscreen rendering timeout value
             * @type {number}
             * @const
             */
            var REPOSITION_CUES_TIMEOUT = 1000;

            /**
             * The HTML5 player class.
             * @classdesc
             */

            var Player = function(_FakeEventTarget) {
                _inherits(Player, _FakeEventTarget);

                _createClass(Player, null, [{
                    key: 'runCapabilities',


                    /**
                     * Runs the engines capabilities tests.
                     * @returns {void}
                     * @public
                     * @static
                     */

                    /**
                     * The player class logger.
                     * @type {any}
                     * @static
                     * @private
                     */
                    value: function runCapabilities() {
                        Player._logger.debug('Running player capabilities');
                        _engineProvider.EngineProvider.getEngines().forEach(function(Engine) {
                            return Engine.runCapabilities();
                        });
                    }

                    /**
                     * Gets the engines capabilities.
                     * @param {?string} engineType - The engine type.
                     * @return {Promise<Object>} - The engines capabilities object.
                     * @public
                     * @static
                     */

                    /**
                     * The player capabilities result object.
                     * @type {Object}
                     * @private
                     * @static
                     */

                }, {
                    key: 'getCapabilities',
                    value: function getCapabilities(engineType) {
                        Player._logger.debug('Get player capabilities', engineType);
                        var promises = [];
                        _engineProvider.EngineProvider.getEngines().forEach(function(Engine) {
                            return promises.push(Engine.getCapabilities());
                        });
                        return Promise.all(promises).then(function(arrayOfResults) {
                            var playerCapabilities = {};
                            arrayOfResults.forEach(function(res) {
                                return Object.assign(playerCapabilities, res);
                            });
                            Utils.Object.mergeDeep(playerCapabilities, Player._playerCapabilities);
                            return engineType ? playerCapabilities[engineType] : playerCapabilities;
                        });
                    }

                    /**
                     * Sets an engine capabilities.
                     * @param {string} engineType - The engine type.
                     * @param {Object} capabilities - The engine capabilities.
                     * @returns {void}
                     * @public
                     * @static
                     */

                }, {
                    key: 'setCapabilities',
                    value: function setCapabilities(engineType, capabilities) {
                        Player._logger.debug('Set player capabilities', engineType, capabilities);
                        Player._playerCapabilities[engineType] = Utils.Object.mergeDeep({}, Player._playerCapabilities[engineType], capabilities);
                    }

                    /**
                     * The plugin manager of the player.
                     * @type {PluginManager}
                     * @private
                     */

                    /**
                     * The controller provider of the player.
                     * @type {ControllerProvider}
                     * @private
                     */

                    /**
                     * The event manager of the player.
                     * @type {EventManager}
                     * @private
                     */

                    /**
                     * The poster manager of the player.
                     * @type {PosterManager}
                     * @private
                     */

                    /**
                     * The runtime configuration of the player.
                     * @type {Object}
                     * @private
                     */

                    /**
                     * The playback engine.
                     * @type {IEngine}
                     * @private
                     */

                    /**
                     * The state manager of the player.
                     * @type {StateManager}
                     * @private
                     */

                    /**
                     * The tracks of the player.
                     * @type {Array<Track>}
                     * @private
                     */

                    /**
                     * The player ready promise
                     * @type {Promise<*>}
                     * @private
                     */

                    /**
                     * Whether the play is the first or not
                     * @type {boolean}
                     * @private
                     */

                    /**
                     * Whether the playing is the first or not
                     * @type {boolean}
                     * @private
                     */

                    /**
                     * Whether the playback already start
                     * @type {boolean}
                     * @private
                     */

                    /**
                     * The player DOM element container.
                     * @type {HTMLDivElement}
                     * @private
                     */

                    /**
                     * The player text DOM element container.
                     * @type {HTMLDivElement}
                     * @private
                     */

                    /**
                     * The player black cover div.
                     * @type {HTMLDivElement}
                     * @private
                     */

                    /**
                     * The player DOM id.
                     * @type {string}
                     * @private
                     */

                    /**
                     * The player last updated text cues list
                     * @type {Array<any>}
                     * @private
                     */

                    /**
                     * The player text disaply settings
                     * @type {Object}
                     * @private
                     */

                    /**
                     * The current playback attributes state
                     * @type {Object}
                     * @private
                     */

                    /**
                     * The player text style settings
                     * @type {TextStyle}
                     * @private
                     */

                    /**
                     * The playback middleware of the player.
                     * @type {PlaybackMiddleware}
                     * @private
                     */

                    /**
                     * The environment(os,device,browser) object of the player.
                     * @type {Object}
                     * @private
                     */

                    /**
                     * The currently selected engine type
                     * @type {string}
                     * @private
                     */

                    /**
                     * The currently selected stream type
                     * @type {string}
                     * @private
                     */

                }]);

                /**
                 * @param {Object} config - The configuration for the player instance.
                 * @constructor
                 */


                /**
                 * holds false or an id for the timeout the reposition the text cues after togelling full screen
                 * @type {any}
                 * @private
                 */

                /**
                 * Whether a load media request has sent, the player should wait to media.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * Whether the player is loading a source.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * Reset indicator state.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * Destroyed indicator state.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * Fallback to muted auto play mode indicator.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * holds the external tracks handler controller
                 * @type {ExternalCaptionsHandler}
                 * @private
                 */

                /**
                 * holds the full screen controller
                 * @type {FullscreenController}
                 * @private
                 */

                /**
                 * holds the ads controller
                 * @type {?AdsController}
                 * @private
                 */

                /**
                 * holds the resize observer. Incharge of notifying on resize changes.
                 * @type {?AdsController}
                 * @private
                 */
                function Player() {
                    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, Player);

                    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

                    _this._activeTextCues = [];
                    _this._textDisplaySettings = {};
                    _this._playbackAttributesState = {
                        muted: undefined,
                        volume: undefined,
                        rate: undefined,
                        audioLanguage: '',
                        textLanguage: ''
                    };

                    _this._setConfigLogLevel(config);
                    _this._playerId = Utils.Generator.uniqueId(5);
                    _this._prepareVideoElement();
                    Player.runCapabilities();
                    _this._env = _env2.default;
                    _this._tracks = [];
                    _this._firstPlay = true;
                    _this._repositionCuesTimeout = false;
                    _this._loadingMedia = false;
                    _this._loading = false;
                    _this._playbackStart = false;
                    _this._firstPlaying = false;
                    _this._reset = true;
                    _this._destroyed = false;
                    _this._fallbackToMutedAutoPlay = false;
                    _this._config = Player._defaultConfig;
                    _this._eventManager = new _eventManager2.default();
                    _this._posterManager = new _posterManager2.default();
                    _this._stateManager = new _stateManager2.default(_this);
                    _this._pluginManager = new _pluginManager2.default();
                    _this._controllerProvider = new _controllerProvider.ControllerProvider(_this._pluginManager);
                    _this._resizeWatcher = new _resizeWatcher.ResizeWatcher();
                    _this._playbackMiddleware = new _playbackMiddleware2.default();
                    _this._textStyle = new _textStyle2.default();
                    _this._createReadyPromise();
                    _this._createPlayerContainer();
                    _this._appendDomElements();
                    _this._externalCaptionsHandler = new _externalCaptionsHandler.ExternalCaptionsHandler(_this);
                    _this.configure(config);
                    _this._fullscreenController = new _fullscreenController.FullscreenController(_this);
                    return _this;
                }

                // <editor-fold desc="Public API">

                // <editor-fold desc="Playback API">

                /**
                 * Configures the player according to a given configuration.
                 * @param {Object} config - The configuration for the player instance.
                 * @returns {void}
                 */


                _createClass(Player, [{
                    key: 'configure',
                    value: function configure() {
                        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        this._setConfigLogLevel(config);
                        if (this._hasSources(config.sources)) {
                            this._configureOrLoadPlugins(config.plugins);
                            this._maybeCreateAdsController();
                            this.reset();
                            this._resizeWatcher.init(Utils.Dom.getElementById(this._playerId));
                            Player._logger.debug('Change source started');
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.CHANGE_SOURCE_STARTED));
                            this._pluginManager.loadMedia();
                            Utils.Object.mergeDeep(this._config, config);
                            this._reset = false;
                            if (this._selectEngineByPriority()) {
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.SOURCE_SELECTED, {
                                    selectedSource: this._config.sources[this._streamType]
                                }));
                                this._attachMedia();
                                this._handlePlaybackOptions();
                                this._posterManager.setSrc(this._config.sources.poster);
                                this._handlePreload();
                                this._handleAutoPlay();
                                Player._logger.debug('Change source ended');
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.CHANGE_SOURCE_ENDED));
                            } else {
                                Player._logger.warn('No playable engines was found to play the given sources');
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.NO_ENGINE_FOUND_TO_PLAY_THE_SOURCE, 'No Engine Found To Play The Source')));
                            }
                        } else {
                            Utils.Object.mergeDeep(this._config, config);
                            this._configureOrLoadPlugins(config.plugins);
                            this._maybeCreateAdsController();
                        }
                    }

                    /**
                     * The player readiness
                     * @public
                     * @returns {Promise<*>} - The ready promise
                     */

                }, {
                    key: 'ready',
                    value: function ready() {
                        return this._readyPromise ? this._readyPromise : Promise.resolve();
                    }

                    /**
                     * Load media
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'load',
                    value: function load() {
                        var _this2 = this;

                        var resetFlags = function resetFlags() {
                            _this2._loading = false;
                            _this2._reset = false;
                        };
                        if (this._engine && !this.src && !this._loading) {
                            this._loading = true;
                            var startTime = this._config.playback.startTime;
                            this._engine.load(startTime).then(function(data) {
                                _this2._updateTracks(data.tracks);
                                _this2.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TRACKS_CHANGED, {
                                    tracks: _this2._tracks
                                }));
                                resetFlags();
                            }).catch(function(error) {
                                _this2.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, error));
                                resetFlags();
                            });
                        }
                    }

                    /**
                     * Start/resume playback.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'play',
                    value: function play() {
                        var _this3 = this;

                        if (!this._playbackStart) {
                            this._playbackStart = true;
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.PLAYBACK_START));
                        }
                        if (this._engine) {
                            this._playbackMiddleware.play(function() {
                                return _this3._play();
                            });
                        } else if (this._loadingMedia) {
                            // load media requested but the response is delayed
                            this._prepareVideoElement();
                            this._playbackMiddleware.play(function() {
                                return _this3._playAfterAsyncMiddleware();
                            });
                        } else {
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.NO_SOURCE_PROVIDED, 'No Source Provided')));
                        }
                    }

                    /**
                     * Pause playback.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'pause',
                    value: function pause() {
                        if (this._engine) {
                            this._playbackMiddleware.pause(this._pause.bind(this));
                        }
                    }

                    /**
                     * Gets the view of the player (i.e the dom container object).
                     * @return {HTMLElement} - The dom container.
                     * @public
                     */

                }, {
                    key: 'getView',
                    value: function getView() {
                        return this._el;
                    }

                    /**
                     * @returns {HTMLVideoElement} - The video element.
                     * @public
                     */

                }, {
                    key: 'getVideoElement',
                    value: function getVideoElement() {
                        if (this._engine) {
                            return this._engine.getVideoElement();
                        }
                    }

                    /**
                     * Resets the necessary components before change media.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        if (this._reset) return;
                        this.pause();
                        //make sure all services are reset before engine and engine attributes are reset
                        this._externalCaptionsHandler.reset();
                        this._posterManager.reset();
                        this._pluginManager.reset();
                        this._stateManager.reset();
                        this._config.sources = {};
                        this._activeTextCues = [];
                        this._updateTextDisplay([]);
                        this._tracks = [];
                        this._resetStateFlags();
                        this._engineType = '';
                        this._streamType = '';
                        this._engine.reset();
                        this._showBlackCover();
                        this._reset = true;
                        this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.PLAYER_RESET));
                        this._eventManager.removeAll();
                        this._resizeWatcher.init(Utils.Dom.getElementById(this._playerId));
                        this._createReadyPromise();
                    }

                    /**
                     * Destroys the player.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this._destroyed) return;
                        //make sure all services are destroyed before engine and engine attributes are destroyed
                        this._externalCaptionsHandler.destroy();
                        Player._playerCapabilities = {};
                        this._posterManager.destroy();
                        this._pluginManager.destroy();
                        this._stateManager.destroy();
                        this._clearRepositionTimeout();
                        this._activeTextCues = [];
                        this._textDisplaySettings = {};
                        this._config = {};
                        this._tracks = [];
                        this._engineType = '';
                        this._streamType = '';
                        this._readyPromise = null;
                        this._resetStateFlags();
                        this._playbackAttributesState = {};
                        if (this._engine) {
                            this._engine.destroy();
                        }
                        this._resizeWatcher.destroy();
                        if (this._el) {
                            Utils.Dom.removeChild(this._el.parentNode, this._el);
                        }
                        this._destroyed = true;
                        this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.PLAYER_DESTROY));
                        this._eventManager.destroy();
                    }

                    /**
                     * Get the first buffered range of the engine.
                     * @returns {TimeRanges} - First buffered range of the engine in seconds.
                     * @public
                     */

                }, {
                    key: 'isLive',


                    // </editor-fold>

                    // <editor-fold desc="Live API">

                    /**
                     * Checking if the current playback is live.
                     * @function isLive
                     * @returns {boolean} - Whether playback is live.
                     * @public
                     */
                    value: function isLive() {
                        return !!(this._config.sources.type === _mediaType.MediaType.LIVE || this._engine && this._engine.isLive());
                    }

                    /**
                     * Checking if the current live playback has DVR window.
                     * @function isDvr
                     * @returns {boolean} - Whether live playback has DVR window.
                     * @public
                     */

                }, {
                    key: 'isDvr',
                    value: function isDvr() {
                        return this.isLive() && this._config.sources.dvr;
                    }

                    /**
                     * Seeking to live edge.
                     * @function seekToLiveEdge
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'seekToLiveEdge',
                    value: function seekToLiveEdge() {
                        if (this._engine && this.isLive()) {
                            this._engine.seekToLiveEdge();
                        }
                    }

                    /**
                     * Get the start time of DVR window in live playback in seconds.
                     * @returns {Number} - start time of DVR window.
                     * @public
                     */

                }, {
                    key: 'getStartTimeOfDvrWindow',
                    value: function getStartTimeOfDvrWindow() {
                        return this._engine ? this._engine.getStartTimeOfDvrWindow() : 0;
                    }

                    // </editor-fold>

                    // <editor-fold desc="Tracks API">

                    /**
                     * Returns the tracks according to the filter. if no filter given returns the all tracks.
                     * @function getTracks
                     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
                     * @returns {Array<Track>} - The parsed tracks.
                     * @public
                     */

                }, {
                    key: 'getTracks',
                    value: function getTracks(type) {
                        return Utils.Object.copyDeep(this._getTracksByType(type));
                    }

                    /**
                     * Get an object includes the active video/audio/text tracks
                     * @return {{video: VideoTrack, audio: AudioTrack, text: TextTrack}} - The active tracks object
                     */

                }, {
                    key: 'getActiveTracks',
                    value: function getActiveTracks() {
                        return Utils.Object.copyDeep({
                            video: this._getTracksByType(_trackType.TrackType.VIDEO).find(function(track) {
                                return track.active;
                            }),
                            audio: this._getTracksByType(_trackType.TrackType.AUDIO).find(function(track) {
                                return track.active;
                            }),
                            text: this._getTracksByType(_trackType.TrackType.TEXT).find(function(track) {
                                return track.active;
                            })
                        });
                    }

                    /**
                     * Select a track
                     * @function selectTrack
                     * @param {?Track} track - the track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectTrack',
                    value: function selectTrack(track) {
                        if (this._engine) {
                            if (track instanceof _videoTrack2.default) {
                                this._engine.selectVideoTrack(track);
                            } else if (track instanceof _audioTrack2.default) {
                                this._engine.selectAudioTrack(track);
                            } else if (track instanceof _textTrack2.default) {
                                this._resetTextDisplay();
                                if (track.language === OFF) {
                                    this.hideTextTrack();
                                    this._externalCaptionsHandler.hideTextTrack();
                                    this._playbackAttributesState.textLanguage = OFF;
                                } else if (track.external && !this._config.playback.useNativeTextTrack) {
                                    this._engine.hideTextTrack();
                                    this._externalCaptionsHandler.selectTextTrack(track);
                                } else {
                                    this._externalCaptionsHandler.hideTextTrack();
                                    this._engine.selectTextTrack(track);
                                }
                            }
                        }
                    }

                    /**
                     * Hide the text track
                     * @function hideTextTrack
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {
                        if (this._engine) {
                            this._engine.hideTextTrack();
                            this._resetTextDisplay();
                            var textTracks = this._getTracksByType(_trackType.TrackType.TEXT);
                            textTracks.map(function(track) {
                                return track.active = false;
                            });
                            var textTrack = textTracks.find(function(track) {
                                return track.language === OFF;
                            });
                            if (textTrack) {
                                textTrack.active = true;
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_TRACK_CHANGED, {
                                    selectedTextTrack: textTrack
                                }));
                            }
                        }
                    }

                    /**
                     * Enables adaptive bitrate switching.
                     * @function enableAdaptiveBitrate
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'enableAdaptiveBitrate',
                    value: function enableAdaptiveBitrate() {
                        if (this._engine) {
                            this._engine.enableAdaptiveBitrate();
                        }
                    }

                    /**
                     * Checking if adaptive bitrate switching is enabled.
                     * @function isAdaptiveBitrateEnabled
                     * @returns {boolean} - Whether adaptive bitrate is enabled.
                     * @public
                     */

                }, {
                    key: 'isAdaptiveBitrateEnabled',
                    value: function isAdaptiveBitrateEnabled() {
                        if (this._engine) {
                            return this._engine.isAdaptiveBitrateEnabled();
                        }
                        return false;
                    }

                    /**
                     * update the text display settings
                     * @param {Object} settings - text cue display settings
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'setTextDisplaySettings',
                    value: function setTextDisplaySettings(settings) {
                        this._textDisplaySettings = settings;
                        this._updateCueDisplaySettings();
                        for (var i = 0; i < this._activeTextCues.length; i++) {
                            this._activeTextCues[i].hasBeenReset = true;
                        }
                        this._updateTextDisplay(this._activeTextCues);
                    }

                    /**
                     * Sets style attributes for text tracks.
                     * @param {TextStyle} style - text styling settings
                     * @returns {void}
                     */

                }, {
                    key: 'isFullscreen',


                    // </editor-fold>

                    // <editor-fold desc="Fullscreen API">
                    /**
                     * @returns {boolean} - Whether the player is in fullscreen mode.
                     * @public
                     */
                    value: function isFullscreen() {
                        return this._fullscreenController.isFullscreen();
                    }

                    /**
                     * Notify the player that the ui application entered to fullscreen.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'notifyEnterFullscreen',
                    value: function notifyEnterFullscreen() {
                        if (this.isFullscreen()) {
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.ENTER_FULLSCREEN));
                        }
                    }

                    /**
                     * Notify the player that the ui application exited from fullscreen.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'notifyExitFullscreen',
                    value: function notifyExitFullscreen() {
                        if (!this.isFullscreen()) {
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.EXIT_FULLSCREEN));
                        }
                    }

                    /**
                     * Request the player to enter fullscreen.
                     * @public
                     * @param {string} elementId - element id to full screen
                     * @returns {void}
                     */

                }, {
                    key: 'enterFullscreen',
                    value: function enterFullscreen(elementId) {
                        this._fullscreenController.enterFullscreen(elementId);
                    }

                    /**
                     * Request the player to exit fullscreen.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'exitFullscreen',
                    value: function exitFullscreen() {
                        this._fullscreenController.exitFullscreen();
                    }

                    // </editor-fold>

                    // <editor-fold desc="Picture In Picture API">

                    /**
                     * Request the player to enter picture in picture mode
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'enterPictureInPicture',
                    value: function enterPictureInPicture() {
                        if (this.isFullscreen()) {
                            this.exitFullscreen();
                        }
                        if (!this._engine.isInPictureInPicture) {
                            this._engine.enterPictureInPicture();
                        }
                    }

                    /**
                     * Request the player to exit picture in picture mode
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'exitPictureInPicture',
                    value: function exitPictureInPicture() {
                        if (this._engine.isInPictureInPicture) {
                            this._engine.exitPictureInPicture();
                        }
                    }

                    /**
                     * Check if the player is in picture in picture mode
                     * @public
                     * @return {boolean} if the player is in picture in picture mode or not
                     */

                }, {
                    key: 'isInPictureInPicture',
                    value: function isInPictureInPicture() {
                        return this._engine.isInPictureInPicture;
                    }

                    /**
                     * Check if picture in picture supported in this environment
                     * @public
                     * @return {boolean} if the picture in picture feature is supported in this environment
                     */

                }, {
                    key: 'isPictureInPictureSupported',
                    value: function isPictureInPictureSupported() {
                        return !!this._config.playback.pictureInPicture && this._engine.isPictureInPictureSupported();
                    }

                    // </editor-fold>

                    // <editor-fold desc="VR API">

                    /**
                     * Checking if the selected source is VR.
                     * @returns {boolean} - Whether is VR.
                     * @public
                     */

                }, {
                    key: 'isVr',
                    value: function isVr() {
                        return !!this._config.sources.vr;
                    }

                    /**
                     * Toggling the VR mode
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'toggleVrStereoMode',
                    value: function toggleVrStereoMode() {
                        var vrPlugin = this._pluginManager.get('vr');
                        if (vrPlugin && typeof vrPlugin.toggleVrStereoMode === 'function') {
                            vrPlugin.toggleVrStereoMode();
                        }
                    }

                    /**
                     * Checking if the VR stereo mode is active.
                     * @returns {boolean} - Whether is active.
                     * @public
                     */

                }, {
                    key: 'isInVrStereoMode',
                    value: function isInVrStereoMode() {
                        var vrPlugin = this._pluginManager.get('vr');
                        if (vrPlugin && typeof vrPlugin.isInStereoMode === 'function') {
                            return vrPlugin.isInStereoMode();
                        }
                        return false;
                    }

                    // </editor-fold>

                    // <editor-fold desc="Logger API">

                    /**
                     * get the log level
                     * @param {?string} name - the logger name
                     * @returns {Object} - the log level
                     */

                }, {
                    key: 'getLogLevel',
                    value: function getLogLevel(name) {
                        return (0, _logger.getLogLevel)(name);
                    }

                    /**
                     * sets the logger level
                     * @param {Object} level - the log level
                     * @param {?string} name - the logger name
                     * @returns {void}
                     */

                }, {
                    key: 'setLogLevel',
                    value: function setLogLevel(level, name) {
                        (0, _logger.setLogLevel)(level, name);
                    }

                    // </editor-fold>

                    // <editor-fold desc="Plugins API">

                    /**
                     * Gets the plugins instances.
                     * @returns {Object} - Plugin name to plugin instance object map.
                     */

                }, {
                    key: '_resetTextDisplay',


                    // </editor-fold>

                    // </editor-fold>

                    // <editor-fold desc="Private Methods">

                    // <editor-fold desc="Playback">

                    /**
                     * Remove the current text track from the player view.
                     * @returns {void}
                     * @private
                     */
                    value: function _resetTextDisplay() {
                        this._activeTextCues = [];
                        this._updateTextDisplay([]);
                    }

                    /**
                     * For browsers which block auto play, use the user gesture to open the video element and enable playing via API.
                     * @returns {void}
                     * @param {string} playerId - the id of the player
                     * @private
                     */

                }, {
                    key: '_prepareVideoElement',
                    value: function _prepareVideoElement() {
                        var _this4 = this;

                        _engineProvider.EngineProvider.getEngines().forEach(function(Engine) {
                            Engine.prepareVideoElement(_this4._playerId);
                        });
                    }

                    /**
                     * Set the config level of the player
                     * @returns {void}
                     * @param {Object} config - object containing the log level.
                     * @private
                     */

                }, {
                    key: '_setConfigLogLevel',
                    value: function _setConfigLogLevel(config) {
                        if (config.logLevel && _logger.LogLevel[config.logLevel]) {
                            (0, _logger.setLogLevel)(_logger.LogLevel[config.logLevel]);
                        }
                    }

                    /**
                     * Check if sources has been received.
                     * @param {Object} sources - sources config object.
                     * @returns {boolean} - Whether sources has been received to the player.
                     * @private
                     */

                }, {
                    key: '_hasSources',
                    value: function _hasSources(sources) {
                        if (sources) {
                            return !!Object.values(_streamType.StreamType).find(function(type) {
                                return sources[type] && sources[type].length > 0;
                            });
                        }
                        return false;
                    }

                    /**
                     * Creates the player container.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_createPlayerContainer',
                    value: function _createPlayerContainer() {
                        var el = this._el = Utils.Dom.createElement('div');
                        Utils.Dom.addClassName(el, CONTAINER_CLASS_NAME);
                        Utils.Dom.setAttribute(el, 'id', this._playerId);
                        Utils.Dom.setAttribute(el, 'tabindex', '-1');
                    }

                    /**
                     * Appends the engine's video element to the player's div container.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_appendEngineEl',
                    value: function _appendEngineEl() {
                        if (this._el) {
                            var engineEl = this._engine.getVideoElement();
                            var className = '' + ENGINE_CLASS_NAME;
                            Utils.Dom.addClassName(engineEl, className);
                            var classNameWithId = ENGINE_CLASS_NAME + '-' + this._engine.id;
                            Utils.Dom.addClassName(engineEl, classNameWithId);
                            Utils.Dom.prependTo(engineEl, this._el);
                        }
                    }

                    /**
                     * Appends DOM elements by the following priority:
                     * 1. poster (strongest)
                     * 2. black screen
                     * 3. subtitles (weakest)
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_appendDomElements',
                    value: function _appendDomElements() {
                        // Append playkit-subtitles
                        this._textDisplayEl = Utils.Dom.createElement('div');
                        Utils.Dom.addClassName(this._textDisplayEl, SUBTITLES_CLASS_NAME);
                        Utils.Dom.appendChild(this._el, this._textDisplayEl);
                        // Append playkit-black-cover
                        this._blackCoverEl = Utils.Dom.createElement('div');
                        Utils.Dom.addClassName(this._blackCoverEl, BLACK_COVER_CLASS_NAME);
                        Utils.Dom.appendChild(this._el, this._blackCoverEl);
                        // Append playkit-poster
                        var el = this._posterManager.getElement();
                        Utils.Dom.addClassName(el, POSTER_CLASS_NAME);
                        Utils.Dom.appendChild(this._el, el);
                    }

                    /**
                     * Configures or load the plugins defined in the configuration.
                     * @param {Object} plugins - The new received plugins configuration.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_configureOrLoadPlugins',
                    value: function _configureOrLoadPlugins() {
                        var _this5 = this;

                        var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        if (plugins) {
                            Object.keys(plugins).forEach(function(name) {
                                // If the plugin is already exists in the registry we are updating his config
                                var plugin = _this5._pluginManager.get(name);
                                if (plugin) {
                                    plugin.updateConfig(plugins[name]);
                                    _this5._config.plugins[name] = plugin.getConfig();
                                } else {
                                    // We allow to load plugins as long as the player has no engine
                                    if (!_this5._engine) {
                                        try {
                                            _this5._pluginManager.load(name, _this5, plugins[name]);
                                        } catch (e) {
                                            //bounce the plugin load error up
                                            _this5.dispatchEvent(e);
                                        }
                                        var _plugin = _this5._pluginManager.get(name);
                                        if (_plugin) {
                                            _this5._config.plugins[name] = _plugin.getConfig();
                                            if (typeof _plugin.getMiddlewareImpl === 'function') {
                                                _this5._playbackMiddleware.use(_plugin.getMiddlewareImpl());
                                            }
                                        }
                                    } else {
                                        delete _this5._config.plugins[name];
                                    }
                                }
                            });
                        }
                    }

                    /**
                     * Creates the ready promise.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_createReadyPromise',
                    value: function _createReadyPromise() {
                        var _this6 = this;

                        this._readyPromise = new Promise(function(resolve, reject) {
                            _this6._eventManager.listenOnce(_this6, _eventType.CustomEventType.TRACKS_CHANGED, function() {
                                _this6.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.MEDIA_LOADED));
                                resolve();
                            });
                            _this6._eventManager.listen(_this6, _eventType.Html5EventType.ERROR, reject);
                        }).catch(function() {
                            // silence the promise rejection, error is handled by the error event
                        });
                    }

                    /**
                     * Selects an engine to play a source according to a given stream priority.
                     * @return {boolean} - Whether a proper engine was found to play the given sources
                     * according to the priority.
                     * @private
                     */

                }, {
                    key: '_selectEngineByPriority',
                    value: function _selectEngineByPriority() {
                        var _this7 = this;

                        var streamPriority = this._config.playback.streamPriority;
                        var preferNative = this._config.playback.preferNative;
                        var sources = this._config.sources;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            var _loop = function _loop() {
                                var priority = _step.value;

                                var engineId = typeof priority.engine === 'string' ? priority.engine.toLowerCase() : '';
                                var format = typeof priority.format === 'string' ? priority.format.toLowerCase() : '';
                                var Engine = _engineProvider.EngineProvider.getEngines().find(function(Engine) {
                                    return Engine.id === engineId;
                                });
                                if (Engine) {
                                    var formatSources = sources[format];
                                    if (formatSources && formatSources.length > 0) {
                                        var source = formatSources[0];
                                        if (Engine.canPlaySource(source, preferNative[format], _this7._config.drm)) {
                                            Player._logger.debug('Source selected: ', formatSources);
                                            _this7._loadEngine(Engine, source);
                                            _this7._engineType = engineId;
                                            _this7._streamType = format;
                                            return {
                                                v: true
                                            };
                                        }
                                    }
                                }
                            };

                            for (var _iterator = streamPriority[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var _ret = _loop();

                                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        return false;
                    }

                    /**
                     * Loads the selected engine.
                     * @param {IEngine} Engine - The selected engine.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_loadEngine',
                    value: function _loadEngine(Engine, source) {
                        if (!this._engine) {
                            this._engine = Engine.createEngine(source, this._config, this._playerId);
                            this._appendEngineEl();
                        } else {
                            if (this._engine.id === Engine.id) {
                                this._engine.restore(source, this._config);
                            } else {
                                this._engine.destroy();
                                this._engine = Engine.createEngine(source, this._config, this._playerId);
                                this._appendEngineEl();
                            }
                        }
                    }

                    /**
                     * Listen to all HTML5 defined events and trigger them on the player
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_attachMedia',
                    value: function _attachMedia() {
                        var _this8 = this;

                        if (this._engine) {
                            Object.keys(_eventType.Html5EventType).forEach(function(html5Event) {
                                _this8._eventManager.listen(_this8._engine, _eventType.Html5EventType[html5Event], function(event) {
                                    return _this8.dispatchEvent(event);
                                });
                            });
                            this._eventManager.listen(this._engine, _eventType.Html5EventType.SEEKED, function() {
                                var browser = _this8._env.browser.name;
                                if (browser === 'Edge' || browser === 'IE') {
                                    _this8._removeTextCuePatch();
                                }
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.VIDEO_TRACK_CHANGED, function(event) {
                                _this8._markActiveTrack(event.payload.selectedVideoTrack);
                                return _this8.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.AUDIO_TRACK_CHANGED, function(event) {
                                _this8.ready().then(function() {
                                    return _this8._playbackAttributesState.audioLanguage = event.payload.selectedAudioTrack.language;
                                });
                                _this8._markActiveTrack(event.payload.selectedAudioTrack);
                                _this8.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.TEXT_TRACK_CHANGED, function(event) {
                                return _this8._onTextTrackChanged(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.TRACKS_CHANGED, function(event) {
                                return _this8._onTracksChanged(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.TEXT_CUE_CHANGED, function(event) {
                                return _this8._onCueChange(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.ABR_MODE_CHANGED, function(event) {
                                return _this8.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.AUTOPLAY_FAILED, function(event) {
                                _this8.pause();
                                if (_this8._firstPlay && _this8._config.playback.autoplay) {
                                    _this8.dispatchEvent(event);
                                }
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.FPS_DROP, function(event) {
                                return _this8.dispatchEvent(event);
                            });
                            this._eventManager.listen(this, _eventType.Html5EventType.PLAY, this._onPlay.bind(this));
                            this._eventManager.listen(this, _eventType.Html5EventType.PLAYING, this._onPlaying.bind(this));
                            this._eventManager.listen(this, _eventType.Html5EventType.ENDED, this._onEnded.bind(this));
                            this._eventManager.listen(this, _eventType.CustomEventType.PLAYBACK_ENDED, this._onPlaybackEnded.bind(this));
                            this._eventManager.listen(this, _eventType.CustomEventType.MUTE_CHANGE, function() {
                                _this8._playbackAttributesState.muted = _this8.muted;
                            });
                            this._eventManager.listen(this, _eventType.Html5EventType.VOLUME_CHANGE, function() {
                                _this8._playbackAttributesState.volume = _this8.volume;
                            });
                            this._eventManager.listen(this, _eventType.Html5EventType.RATE_CHANGE, function() {
                                _this8._playbackAttributesState.rate = _this8.playbackRate;
                            });
                            this._eventManager.listen(this, _eventType.CustomEventType.ENTER_FULLSCREEN, function() {
                                return _this8._resetTextCuesAndReposition();
                            });
                            this._eventManager.listen(this, _eventType.CustomEventType.EXIT_FULLSCREEN, function() {
                                return _this8._resetTextCuesAndReposition();
                            });
                            this._eventManager.listen(this._resizeWatcher, _eventType.CustomEventType.RESIZE, function(event) {
                                _this8._resetTextCuesAndReposition();
                                _this8.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._engine, _eventType.CustomEventType.MEDIA_RECOVERED, function() {
                                return _this8._handleRecovered();
                            });
                            this._eventManager.listen(this._externalCaptionsHandler, _eventType.CustomEventType.TEXT_CUE_CHANGED, function(event) {
                                return _this8._onCueChange(event);
                            });
                            this._eventManager.listen(this._externalCaptionsHandler, _eventType.CustomEventType.TEXT_TRACK_CHANGED, function(event) {
                                return _this8._onTextTrackChanged(event);
                            });
                            this._eventManager.listen(this._externalCaptionsHandler, _eventType.Html5EventType.ERROR, function(event) {
                                return _this8.dispatchEvent(event);
                            });
                        }
                    }

                    /**
                     * if the media was recovered (after a media failure) then initiate play again (if that was the state before)
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleRecovered',
                    value: function _handleRecovered() {
                        if (this._stateManager.currentState.type === _stateType.StateType.PLAYING) {
                            this.play();
                        }
                    }

                    /**
                     * The text track changed event object
                     * @param {FakeEvent} event - payload with text track
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_onTextTrackChanged',
                    value: function _onTextTrackChanged(event) {
                        var _this9 = this;

                        this.ready().then(function() {
                            return _this9._playbackAttributesState.textLanguage = event.payload.selectedTextTrack.language;
                        });
                        this._markActiveTrack(event.payload.selectedTextTrack);
                        if (this._config.playback.useNativeTextTrack) {
                            this._externalCaptionsHandler.selectTextTrack(event.payload.selectedTextTrack);
                        }
                        this.dispatchEvent(event);
                    }

                    /**
                     * Reset the active cues hasBeenReset = true and then reposition it, timeout here is for the screen to
                     * finish render the fullscreen
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_resetTextCuesAndReposition',
                    value: function _resetTextCuesAndReposition() {
                        var _this10 = this;

                        this._engine.resetAllCues();
                        this._updateTextDisplay([]);
                        for (var i = 0; i < this._activeTextCues.length; i++) {
                            this._activeTextCues[i].hasBeenReset = true;
                        }
                        // handling only the last reposition
                        this._clearRepositionTimeout();
                        this._repositionCuesTimeout = setTimeout(function() {
                            _this10._updateTextDisplay(_this10._activeTextCues);
                            _this10._repositionCuesTimeout = false;
                        }, REPOSITION_CUES_TIMEOUT);
                    }
                }, {
                    key: '_clearRepositionTimeout',
                    value: function _clearRepositionTimeout() {
                        if (this._repositionCuesTimeout) {
                            clearTimeout(this._repositionCuesTimeout);
                        }
                    }

                    /**
                     * Handles the cue text removal issue, when seeking to a time without captions in IE \ edge the previous captions
                     * are not removed
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_removeTextCuePatch',
                    value: function _removeTextCuePatch() {
                        var _this11 = this;

                        var filteredActiveTextCues = this._activeTextCues.filter(function(textCue) {
                            var cueEndTime = textCue._endTime;
                            var cueStartTime = textCue._startTime;
                            var currTime = _this11.currentTime;
                            if (currTime < cueEndTime && currTime > cueStartTime) {
                                return textCue;
                            }
                        });
                        this._updateTextDisplay(filteredActiveTextCues);
                    }

                    /**
                     * Handles the playback options, from current state or config.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handlePlaybackOptions',
                    value: function _handlePlaybackOptions() {
                        this._config.playback = this._config.playback || {};
                        if (typeof this._playbackAttributesState.muted === 'boolean') {
                            this.muted = this._playbackAttributesState.muted;
                        } else if (typeof this._config.playback.muted === 'boolean') {
                            this.muted = this._config.playback.muted;
                        }
                        if (typeof this._playbackAttributesState.volume === 'number') {
                            this.volume = this._playbackAttributesState.volume;
                        } else if (typeof this._config.playback.volume === 'number') {
                            this.volume = this._config.playback.volume;
                        }
                        if (typeof this._config.playback.playsinline === 'boolean') {
                            this.playsinline = this._config.playback.playsinline;
                        }
                        if (typeof this._config.playback.crossOrigin === 'string') {
                            this.crossOrigin = this._config.playback.crossOrigin;
                        }
                    }

                    /**
                     * Handles preload.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handlePreload',
                    value: function _handlePreload() {
                        if (this._config.playback.preload === 'auto' && !this._config.playback.autoplay && this._canPreload()) {
                            this.load();
                        }
                    }

                    /**
                     * If ads plugin enabled it's his responsibility to preload the content player.
                     * So to avoid loading the player twice which can cause errors on MSEs we are not
                     * calling load from the player.
                     * TODO: Change it to check the ads configuration when we will develop the ads manager.
                     * @returns {boolean} - Whether the player can perform preload.
                     * @private
                     */

                }, {
                    key: '_canPreload',
                    value: function _canPreload() {
                        return !this._config.plugins || this._config.plugins && !this._config.plugins.ima || this._config.plugins.ima && this._config.plugins.ima.disable;
                    }

                    /**
                     * Handles auto play.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleAutoPlay',
                    value: function _handleAutoPlay() {
                        var _this12 = this;

                        if (this._config.playback.autoplay === true) {
                            var allowMutedAutoPlay = this._config.playback.allowMutedAutoPlay;
                            Player.getCapabilities(this.engineType).then(function(capabilities) {
                                if (capabilities.autoplay) {
                                    onAutoPlay();
                                } else {
                                    if (capabilities.mutedAutoPlay) {
                                        if (_this12.muted && !_this12._fallbackToMutedAutoPlay) {
                                            onMutedAutoPlay();
                                        } else if (allowMutedAutoPlay) {
                                            onFallbackToMutedAutoPlay();
                                        } else {
                                            onAutoPlayFailed();
                                        }
                                    } else {
                                        onAutoPlayFailed();
                                    }
                                }
                            });
                        } else {
                            this._posterManager.show();
                        }

                        var onAutoPlay = function onAutoPlay() {
                            Player._logger.debug('Start autoplay');
                            // If the previous state was fallback to muted autoplay:
                            // unmute the player and clear the fallback state
                            if (_this12._fallbackToMutedAutoPlay) {
                                _this12._fallbackToMutedAutoPlay = false;
                                _this12.muted = false;
                            }
                            _this12.play();
                        };

                        var onMutedAutoPlay = function onMutedAutoPlay() {
                            Player._logger.debug('Start muted autoplay');
                            _this12.play();
                        };

                        var onFallbackToMutedAutoPlay = function onFallbackToMutedAutoPlay() {
                            Player._logger.debug('Fallback to muted autoplay');
                            _this12._fallbackToMutedAutoPlay = true;
                            _this12.muted = true;
                            _this12.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.FALLBACK_TO_MUTED_AUTOPLAY));
                            _this12.play();
                        };

                        var onAutoPlayFailed = function onAutoPlayFailed() {
                            Player._logger.warn('Autoplay failed, pause player');
                            _this12._posterManager.show();
                            if (_this12._canPreload()) {
                                _this12.load();
                            }
                            _this12.ready().then(function() {
                                return _this12.pause();
                            });
                            _this12.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.AUTOPLAY_FAILED));
                        };
                    }
                }, {
                    key: '_maybeCreateAdsController',
                    value: function _maybeCreateAdsController() {
                        if (!this._adsController) {
                            var adsPluginController = this._controllerProvider.getAdsController();
                            if (adsPluginController) {
                                this._adsController = new _adsController.AdsController(this, adsPluginController);
                            }
                        }
                    }

                    /**
                     * Play after async ads
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_playAfterAsyncMiddleware',
                    value: function _playAfterAsyncMiddleware() {
                        var _this13 = this;

                        if (this._engine) {
                            this._play();
                        } else {
                            this._eventManager.listenOnce(this, _eventType.CustomEventType.SOURCE_SELECTED, function() {
                                return _this13._play();
                            });
                        }
                    }

                    /**
                     * Start/resume the engine playback.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_play',
                    value: function _play() {
                        var _this14 = this;

                        if (!this._engine.src) {
                            this.load();
                        }
                        this.ready().then(function() {
                            if (_this14.isLive() && !_this14.isDvr()) {
                                _this14.seekToLiveEdge();
                            }
                            _this14._engine.play();
                        }).catch(function(error) {
                            _this14.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, error));
                        });
                    }

                    /**
                     * Starts the engine pause.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_pause',
                    value: function _pause() {
                        this._engine.pause();
                    }

                    /**
                     * @function _onPlay
                     * @return {void}
                     * @private
                     */

                }, {
                    key: '_onPlay',
                    value: function _onPlay() {
                        if (this._firstPlay) {
                            this._firstPlay = false;
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.FIRST_PLAY));
                            this._posterManager.hide();
                            this._hideBlackCover();
                            if (typeof this._playbackAttributesState.rate === 'number') {
                                this.playbackRate = this._playbackAttributesState.rate;
                            }
                        }
                    }

                    /**
                     * @function _onPlaying
                     * @return {void}
                     * @private
                     */

                }, {
                    key: '_onPlaying',
                    value: function _onPlaying() {
                        if (!this._firstPlaying) {
                            this._firstPlaying = true;
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.FIRST_PLAYING));
                        }
                    }

                    /**
                     * Hides the black cover div.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_hideBlackCover',
                    value: function _hideBlackCover() {
                        if (this._blackCoverEl) {
                            this._blackCoverEl.style.visibility = 'hidden';
                        }
                    }

                    /**
                     * Shows the black cover div.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_showBlackCover',
                    value: function _showBlackCover() {
                        if (this._blackCoverEl) {
                            this._blackCoverEl.style.visibility = 'visible';
                        }
                    }

                    /**
                     * @function _onEnded
                     * @return {void}
                     * @private
                     */

                }, {
                    key: '_onEnded',
                    value: function _onEnded() {
                        var _this15 = this;

                        if (this._adsController && !this._adsController.allAdsCompleted) {
                            this._eventManager.listenOnce(this._adsController, _adEventType.AdEventType.ALL_ADS_COMPLETED, function() {
                                _this15.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.PLAYBACK_ENDED));
                            });
                        } else {
                            // Make sure the all ENDED listeners have been invoked
                            setTimeout(function() {
                                return _this15.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.PLAYBACK_ENDED));
                            }, 0);
                        }
                        if (!this.paused) {
                            this._pause();
                        }
                    }

                    /**
                     * @function _onPlaybackEnded
                     * @return {void}
                     * @private
                     */

                }, {
                    key: '_onPlaybackEnded',
                    value: function _onPlaybackEnded() {
                        if (this.config.playback.loop) {
                            this.currentTime = 0;
                            this.play();
                        }
                    }

                    /**
                     * Resets the state flags of the player.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_resetStateFlags',
                    value: function _resetStateFlags() {
                        this._loading = false;
                        this._firstPlay = true;
                        this._loadingMedia = false;
                        this._playbackStart = false;
                        this._firstPlaying = false;
                    }

                    /**
                     * @returns {Object} - The default configuration of the player.
                     * @private
                     * @static
                     */

                }, {
                    key: '_onTracksChanged',


                    // </editor-fold>

                    // <editor-fold desc="Tracks">

                    /**
                     * handle tracks change
                     * @param {FakeEvent} event - the tracks change event payload
                     * @private
                     * @returns {void}
                     */
                    value: function _onTracksChanged(event) {
                        this._updateTracks(event.payload.tracks);
                        this.dispatchEvent(event);
                    }

                    /**
                     * update the player tracks
                     * @param {Array<Track>} tracks - the player tracks
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_updateTracks',
                    value: function _updateTracks(tracks) {
                        Player._logger.debug('Tracks changed', tracks);
                        this._tracks = tracks.concat(this._externalCaptionsHandler.getExternalTracks(tracks));
                        this._addTextTrackOffOption();
                        this._maybeSetTracksLabels();
                        this._maybeAdjustTextTracksIndexes();
                        this._setDefaultTracks();
                    }

                    /**
                     * If we added external tracks to the video element, we might need to adjust the text tracks indexes between the video
                     * element and the players tracks list
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_maybeAdjustTextTracksIndexes',
                    value: function _maybeAdjustTextTracksIndexes() {
                        var _this16 = this;

                        if (this._config.playback.useNativeTextTrack) {
                            var getNativeLanguageTrackIndex = function getNativeLanguageTrackIndex(textTrack) {
                                var videoElement = _this16.getVideoElement();
                                return videoElement ? Array.from(videoElement.textTracks).findIndex(function(track) {
                                    return track ? track.language === textTrack.language : false;
                                }) : -1;
                            };
                            this._getTracksByType(_trackType.TrackType.TEXT).forEach(function(track) {
                                return track.index = getNativeLanguageTrackIndex(track);
                            });
                        }
                    }

                    /**
                     * Returns the tracks according to the filter. if no filter given returns the all tracks.
                     * @function _getTracksByType
                     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
                     * @returns {Array<Track>} - The parsed tracks.
                     * @private
                     */

                }, {
                    key: '_getTracksByType',
                    value: function _getTracksByType(type) {
                        return !type ? this._tracks : this._tracks.filter(function(track) {
                            if (type === _trackType.TrackType.VIDEO) {
                                return track instanceof _videoTrack2.default;
                            } else if (type === _trackType.TrackType.AUDIO) {
                                return track instanceof _audioTrack2.default;
                            } else if (type === _trackType.TrackType.TEXT) {
                                return track instanceof _textTrack2.default;
                            } else {
                                return true;
                            }
                        });
                    }

                    /**
                     * Mark the selected track as active
                     * @function _markActiveTrack
                     * @param {Track} track - the track to mark
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_markActiveTrack',
                    value: function _markActiveTrack(track) {
                        var type = void 0;
                        if (track instanceof _videoTrack2.default) {
                            type = _trackType.TrackType.VIDEO;
                        } else if (track instanceof _audioTrack2.default) {
                            type = _trackType.TrackType.AUDIO;
                        } else if (track instanceof _textTrack2.default) {
                            type = _trackType.TrackType.TEXT;
                        }
                        if (type) {
                            var tracks = this._getTracksByType(type);
                            for (var i = 0; i < tracks.length; i++) {
                                tracks[i].active = track.index === tracks[i].index;
                            }
                        }
                    }

                    /**
                     * handle text cue change
                     * @param {FakeEvent} event - the cue change event payload
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onCueChange',
                    value: function _onCueChange(event) {
                        Player._logger.debug('Text cue changed', event.payload.cues);
                        this._activeTextCues = event.payload.cues;
                        this._updateCueDisplaySettings();
                        this._updateTextDisplay(this._activeTextCues);
                    }

                    /**
                     * update the text cue display settings
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_updateCueDisplaySettings',
                    value: function _updateCueDisplaySettings() {
                        var activeCues = this._activeTextCues;
                        var settings = this._textDisplaySettings;
                        for (var i = 0; i < activeCues.length; i++) {
                            var cue = activeCues[i];
                            for (var _name in settings) {
                                cue[_name] = settings[_name];
                            }
                        }
                    }

                    /**
                     * update the text display
                     * @param {Array<Cue>} cues - list of cues
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_updateTextDisplay',
                    value: function _updateTextDisplay(cues) {
                        if (!this._config.playback.useNativeTextTrack) {
                            (0, _textTrackDisplay.processCues)(window, cues, this._textDisplayEl, this._textStyle);
                        }
                    }

                    /**
                     * Add off text track if there are actual text tracks associated with media
                     * setting this track is the same as calling Player's hideTextTrack
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_addTextTrackOffOption',
                    value: function _addTextTrackOffOption() {
                        var textTracks = this._getTracksByType(_trackType.TrackType.TEXT);
                        if (textTracks && textTracks.length) {
                            this._tracks.push(new _textTrack2.default({
                                active: false,
                                index: textTracks.length,
                                kind: 'subtitles',
                                label: 'Off',
                                language: OFF
                            }));
                        }
                    }

                    /**
                     * Sets the default tracks defined in the player config.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_setDefaultTracks',
                    value: function _setDefaultTracks() {
                        var activeTracks = this.getActiveTracks();
                        var playbackConfig = this.config.playback;
                        var offTextTrack = this._getTracksByType(_trackType.TrackType.TEXT).find(function(track) {
                            return _textTrack2.default.langComparer(OFF, track.language);
                        });
                        var currentOrConfiguredTextLang = this._playbackAttributesState.textLanguage || this._getLanguage(playbackConfig.textLanguage, activeTracks.text, _trackType.TrackType.TEXT);
                        var currentOrConfiguredAudioLang = this._playbackAttributesState.audioLanguage || playbackConfig.audioLanguage;
                        this._setDefaultTrack(_trackType.TrackType.TEXT, currentOrConfiguredTextLang, offTextTrack);
                        this._setDefaultTrack(_trackType.TrackType.AUDIO, currentOrConfiguredAudioLang, activeTracks.audio);
                    }

                    /**
                     * Gets the track language that should be set by default.
                     * @param {string} configuredLanguage - The configured language (can be also "auto").
                     * @param {Track} defaultTrack - The default track.
                     * @param {string} type - The track type.
                     * @private
                     * @returns {string} - The track language to set by default.
                     */

                }, {
                    key: '_getLanguage',
                    value: function _getLanguage(configuredLanguage, defaultTrack, type) {
                        var language = configuredLanguage;
                        if (language === AUTO) {
                            var tracks = this._getTracksByType(type);
                            var localeTrack = tracks.find(function(track) {
                                return _track2.default.langComparer(_locale2.default.language, track.language);
                            });
                            if (localeTrack) {
                                language = localeTrack.language;
                            } else if (defaultTrack && defaultTrack.language !== OFF) {
                                language = defaultTrack.language;
                            } else if (tracks && tracks.length > 0) {
                                language = tracks[0].language;
                            }
                        }
                        return language;
                    }

                    /**
                     * Sets a specific default track.
                     * @param {string} type - The track type.
                     * @param {string} language - The track language.
                     * @param {?Track} defaultTrack - The default track to set in case there is no language configured.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_setDefaultTrack',
                    value: function _setDefaultTrack(type, language, defaultTrack) {
                        var track = this._getTracksByType(type).find(function(track) {
                            return _track2.default.langComparer(language, track.language);
                        });
                        if (track) {
                            this.selectTrack(track);
                            this._markActiveTrack(track);
                        } else if (defaultTrack && !defaultTrack.active) {
                            this.selectTrack(defaultTrack);
                        }
                    }

                    /**
                     * Checks for callbacks that should change the tracks, and call them on the
                     * respective track group (audio/text/video)
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_maybeSetTracksLabels',
                    value: function _maybeSetTracksLabels() {
                        var customLabels = this._config.customLabels;
                        if (customLabels) {
                            for (var callbackType in customLabels) {
                                this._setTracksCustomLabels(this._getTracksByType(_labelToTrackMap.LabelToTrackMap[callbackType]), customLabels[callbackType]);
                            }
                        }
                    }

                    /**
                     *
                     * @param {Array<Track>} tracks - tracks
                     * @param {Function} callback - application label callback, returns a string
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_setTracksCustomLabels',
                    value: function _setTracksCustomLabels(tracks, callback) {
                        tracks.forEach(function(track) {
                            var result = callback(Utils.Object.copyDeep(track));
                            if (result) {
                                track.label = result;
                            }
                        });
                    }
                    // </editor-fold>

                    // </editor-fold>

                    // <editor-fold desc="Enums">

                    /**
                     * Gets the player event types.
                     * @returns {PKEventTypes} - The event types of the player.
                     * @public
                     */

                }, {
                    key: 'buffered',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.buffered;
                        }
                    }

                    /**
                     * Set the current time in seconds.
                     * @param {Number} to - The number to set in seconds.
                     * @public
                     */

                }, {
                    key: 'currentTime',
                    set: function set(to) {
                            if (this._engine) {
                                if (Utils.Number.isNumber(to)) {
                                    var boundedTo = to;
                                    if (to < 0) {
                                        boundedTo = 0;
                                    }
                                    if (boundedTo > this._engine.duration - DURATION_OFFSET) {
                                        boundedTo = this._engine.duration - DURATION_OFFSET;
                                    }
                                    this._engine.currentTime = boundedTo;
                                }
                            }
                        }

                        /**
                         * Get the current time in seconds.
                         * @returns {?Number} - The playback current time.
                         * @public
                         */
                        ,
                    get: function get() {
                        if (this._engine) {
                            return this._engine.currentTime;
                        }
                    }

                    /**
                     * Get the duration in seconds.
                     * @returns {?Number} - The playback duration.
                     * @public
                     */

                }, {
                    key: 'duration',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.duration;
                        }
                    }

                    /**
                     * Set playback volume.
                     * @param {Number} vol - The volume to set.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'volume',
                    set: function set(vol) {
                            if (this._engine) {
                                if (Utils.Number.isFloat(vol) || vol === 0 || vol === 1) {
                                    var boundedVol = vol;
                                    if (boundedVol < 0) {
                                        boundedVol = 0;
                                    }
                                    if (boundedVol > 1) {
                                        boundedVol = 1;
                                    }
                                    this._engine.volume = boundedVol;
                                }
                            }
                        }

                        /**
                         * Get playback volume.
                         * @returns {?Number} - The playback volume.
                         * @public
                         */
                        ,
                    get: function get() {
                        if (this._engine) {
                            return this._engine.volume;
                        }
                    }

                    /**
                     * Get paused state.
                     * @returns {?boolean} - Whether the video is paused or not.
                     * @public
                     */

                }, {
                    key: 'paused',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.paused;
                        }
                    }

                    /**
                     * Get seeking state.
                     * @returns {?boolean} - Whether the video is seeking or not.
                     * @public
                     */

                }, {
                    key: 'seeking',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.seeking;
                        }
                    }

                    /**
                     * Set playsinline attribute.
                     * Relevant for iOS 10 and up:
                     * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
                     * @param {boolean} playsinline - Whether the video should plays in line.
                     */

                }, {
                    key: 'playsinline',
                    set: function set(playsinline) {
                            if (this._engine) {
                                this._engine.playsinline = playsinline;
                            }
                        }

                        /**
                         * Get playsinline attribute.
                         * Relevant for iOS 10 and up:
                         * Elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins.
                         * @returns {boolean} - Whether the video plays in line.
                         */
                        ,
                    get: function get() {
                        if (this._engine) {
                            return this._engine.playsinline;
                        }
                    }

                    /**
                     * Set player muted state.
                     * @param {boolean} mute - The mute value.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'muted',
                    set: function set(mute) {
                            if (this._engine) {
                                this._engine.muted = mute;
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.MUTE_CHANGE, {
                                    mute: mute
                                }));
                                if (mute === false) {
                                    this._fallbackToMutedAutoPlay = mute;
                                }
                            }
                        }

                        /**
                         * Get player muted state.
                         * @returns {?boolean} - Whether the video is muted or not.
                         * @public
                         */
                        ,
                    get: function get() {
                        if (this._engine) {
                            return this._engine.muted;
                        }
                    }

                    /**
                     * Get the player source.
                     * @returns {?string} - The current source of the player.
                     * @public
                     */

                }, {
                    key: 'src',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.src;
                        }
                    }

                    /**
                     * Get the dimensions of the player.
                     * @returns {{width: number, height: number}} - The dimensions of the player.
                     * @public
                     */

                }, {
                    key: 'dimensions',
                    get: function get() {
                        return {
                            width: this._el.clientWidth,
                            height: this._el.clientHeight
                        };
                    }

                    /**
                     * Get the poster source URL
                     * @returns {string} - the poster image URL
                     */

                }, {
                    key: 'poster',
                    get: function get() {
                        return this._posterManager.src;
                    }

                    /**
                     * Sets the playbackRate property.
                     * @param {number} rate - The playback speed of the video.
                     */

                }, {
                    key: 'playbackRate',
                    set: function set(rate) {
                            if (this._engine) {
                                this._engine.playbackRate = rate;
                            }
                        }

                        /**
                         * Gets the current playback speed of the video.
                         * @returns {number} - The current playback speed of the video.
                         */
                        ,
                    get: function get() {
                        if (this._engine) {
                            return this._engine.playbackRate;
                        }
                    }

                    /**
                     * Gets the possible playback speeds of the video.
                     * @returns {Array<number>} - The possible playback speeds speed of the video.
                     */

                }, {
                    key: 'playbackRates',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.playbackRates;
                        }
                        return [];
                    }

                    /**
                     * Gets the default playback speed of the video.
                     * @returns {number} - The default playback speed of the video.
                     */

                }, {
                    key: 'defaultPlaybackRate',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.defaultPlaybackRate;
                        }
                        return 1;
                    }

                    /**
                     * get the engine type
                     * @returns {string} - html5
                     */

                }, {
                    key: 'engineType',
                    get: function get() {
                        return this._engineType;
                    }

                    /**
                     * get the stream type
                     * @returns {string} - hls|dash|progressive
                     */

                }, {
                    key: 'streamType',
                    get: function get() {
                        return this._streamType;
                    }

                    /**
                     * Getter for the environment of the player instance.
                     * @return {Object} - The current environment object.
                     * @public
                     */

                }, {
                    key: 'env',
                    get: function get() {
                        return this._env;
                    }

                    /**
                     * Get the player config.
                     * @returns {Object} - A copy of the player configuration.
                     * @public
                     */

                }, {
                    key: 'config',
                    get: function get() {
                        return Utils.Object.mergeDeep({}, this._config);
                    }

                    /**
                     * Set the _loadingMedia flag to inform the player that a load media request has sent.
                     * @param {boolean} loading - Whether a load media request has sent.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'loadingMedia',
                    set: function set(loading) {
                        this._loadingMedia = loading;
                    }

                    /**
                     * Set crossOrigin attribute.
                     * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
                     * anonymous: CORS requests for this element will not have the credentials flag set.
                     * use-credentials: CORS requests for this element will have the credentials flag set; this means the request will provide credentials.
                     */

                }, {
                    key: 'crossOrigin',
                    set: function set(crossOrigin) {
                            if (this._engine) {
                                this._engine.crossOrigin = crossOrigin;
                            }
                        }

                        /**
                         * Get crossOrigin attribute.
                         * @returns {?string} - 'anonymous' or 'use-credentials'
                         */
                        ,
                    get: function get() {
                        if (this._engine) {
                            return this._engine.crossOrigin;
                        }
                    }

                    /**
                     * Get ended attribute state.
                     * @returns {?boolean} - Whether the media has been ended.
                     */

                }, {
                    key: 'ended',
                    get: function get() {
                        if (this._engine) {
                            return this._engine.ended;
                        }
                    }
                }, {
                    key: 'textStyle',
                    set: function set(style) {
                            if (!(style instanceof _textStyle2.default)) {
                                throw new Error('Style must be instance of TextStyle');
                            }
                            var element = Utils.Dom.getElementBySelector('.' + this._playerId + '.' + SUBTITLES_STYLE_CLASS_NAME);
                            if (!element) {
                                element = Utils.Dom.createElement('style');
                                Utils.Dom.addClassName(element, this._playerId);
                                Utils.Dom.addClassName(element, SUBTITLES_STYLE_CLASS_NAME);
                                Utils.Dom.appendChild(document.head, element);
                            }
                            var sheet = element.sheet;

                            while (sheet.cssRules.length) {
                                sheet.deleteRule(0);
                            }

                            try {
                                this._textStyle = style;
                                if (this._config.playback.useNativeTextTrack) {
                                    sheet.insertRule('#' + this._playerId + ' video.' + ENGINE_CLASS_NAME + '::cue { ' + style.toCSS() + ' }', 0);
                                } else if (this._engine) {
                                    this._engine.resetAllCues();
                                    this._externalCaptionsHandler.resetAllCues();
                                    this._updateTextDisplay(this._activeTextCues);
                                }
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_STYLE_CHANGED));
                            } catch (e) {
                                Player._logger.error(e.message);
                            }
                        }

                        /**
                         * Gets style attributes for text tracks.
                         * @returns {?TextStyle} - the current style attribute
                         */
                        ,
                    get: function get() {
                        return this._textStyle.clone();
                    }

                    // </editor-fold>

                    // <editor-fold desc="Ads API">

                    /**
                     * Gets the ads controller.
                     * @returns {?AdsController} - the ads controller
                     */

                }, {
                    key: 'ads',
                    get: function get() {
                        return this._adsController;
                    }
                }, {
                    key: 'plugins',
                    get: function get() {
                        return this._pluginManager.getAll();
                    }
                }, {
                    key: 'Event',
                    get: function get() {
                        return _eventType.EventType;
                    }

                    /**
                     * Gets the player TextStyle.
                     * @returns {TextStyle} - The TextStyle class
                     * @public
                     */

                }, {
                    key: 'TextStyle',
                    get: function get() {
                        return _textStyle2.default;
                    }

                    /**
                     * Gets the player state types.
                     * @returns {PKStateTypes} - The state types of the player.
                     * @public
                     */

                }, {
                    key: 'State',
                    get: function get() {
                        return _stateType.StateType;
                    }

                    /**
                     * Gets the player tracks types.
                     * @returns {PKTrackTypes} - The tracks types of the player.
                     * @public
                     */

                }, {
                    key: 'Track',
                    get: function get() {
                        return _trackType.TrackType;
                    }

                    /**
                     * Gets the player log level types.
                     * @returns {PKLogLevelTypes} - The log level types of the player.
                     * @public
                     */

                }, {
                    key: 'LogLevelType',
                    get: function get() {
                        return _logger.LogLevelType;
                    }

                    /**
                     * Gets the player log level objects.
                     * @returns {PKLogLevels} - The log levels objects of the player.
                     * @public
                     */

                }, {
                    key: 'LogLevel',
                    get: function get() {
                        return _logger.LogLevel;
                    }

                    /**
                     * Gets the player abr modes.
                     * @returns {PKAbrModes} - The abr modes of the player.
                     * @public
                     */

                }, {
                    key: 'AbrMode',
                    get: function get() {
                        return _abrModeType.AbrMode;
                    }

                    /**
                     * Gets the player media types.
                     * @returns {PKMediaTypes} - The media types of the player.
                     * @public
                     */

                }, {
                    key: 'MediaType',
                    get: function get() {
                        return _mediaType.MediaType;
                    }

                    /**
                     * Gets the player stream types.
                     * @returns {PKStreamTypes} - The stream types of the player.
                     * @public
                     */

                }, {
                    key: 'StreamType',
                    get: function get() {
                        return _streamType.StreamType;
                    }

                    /**
                     * Gets the player engine types.
                     * @returns {PKEngineTypes} - The engine types of the player.
                     * @public
                     */

                }, {
                    key: 'EngineType',
                    get: function get() {
                        return _engineType.EngineType;
                    }

                    /**
                     * Gets the player cors types.
                     * @returns {PKCorsTypes} - The player cors types.
                     * @public
                     */

                }, {
                    key: 'CorsType',
                    get: function get() {
                        return _corsTypes.CorsType;
                    }

                    /**
                     * Gets the ad break types.
                     * @returns {PKAdBreakTypes} - The ad break types of the player.
                     * @public
                     */

                }, {
                    key: 'AdBreakType',
                    get: function get() {
                        return _adBreakType.AdBreakType;
                    }

                    /**
                     * Gets the ad break tag types.
                     * @returns {PKAdTagTypes} - The ad tag types of the player.
                     * @public
                     */

                }, {
                    key: 'AdTagType',
                    get: function get() {
                        return _adTagType.AdTagType;
                    }

                    /**
                     * Gets the player static error class.
                     * @returns {PKError} - The player static error class.
                     * @public
                     */

                }, {
                    key: 'Error',
                    get: function get() {
                        return _error2.default;
                    }

                    // </editor-fold>

                }], [{
                    key: '_defaultConfig',
                    get: function get() {
                        return Utils.Object.copyDeep(_playerConfig.DefaultConfig);
                    }
                }]);

                return Player;
            }(_fakeEventTarget2.default);

            Player._logger = (0, _logger2.default)('Player');
            Player._playerCapabilities = {};
            exports.default = Player;

            /***/
        }),
        /* 9 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.TextTrack = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * Text track representation of the player.
             * @classdesc
             */
            var TextTrack = function(_Track) {
                _inherits(TextTrack, _Track);

                _createClass(TextTrack, [{
                    key: 'kind',


                    /**
                     * Getter for the kind of the text track.
                     * @public
                     * @returns {string} - The kind of the text track.
                     */

                    /**
                     * The kind of the text track:
                     * subtitles/captions/metadata.
                     * @member
                     * @type {string}
                     * @private
                     */
                    get: function get() {
                        return this._kind;
                    }

                    /**
                     * Getter for the external of the text track.
                     * @public
                     * @returns {boolean} - The kind of the text track.
                     */

                    /**
                     * flag to know if it's external or not
                     * @member
                     * @type {boolean}
                     * @private
                     */

                }, {
                    key: 'external',
                    get: function get() {
                        return this._external;
                    }

                    /**
                     * @constructor
                     * @param {Object} settings - The track settings object.
                     */

                }]);

                function TextTrack() {
                    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, TextTrack);

                    // use language tag if no display label is available
                    var _this = _possibleConstructorReturn(this, (TextTrack.__proto__ || Object.getPrototypeOf(TextTrack)).call(this, settings));

                    _this._label = _this.label || _this.language;
                    _this._kind = settings.kind;
                    _this._external = settings.external;
                    return _this;
                }

                return TextTrack;
            }(_track2.default);

            exports.default = TextTrack;
            exports.TextTrack = TextTrack;

            /***/
        }),
        /* 10 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * Video track representation of the player.
             * @classdesc
             */
            var VideoTrack = function(_Track) {
                _inherits(VideoTrack, _Track);

                _createClass(VideoTrack, [{
                    key: 'bandwidth',


                    /**
                     * @public
                     * @returns {number} - The bandwidth of the video track
                     */


                    /**
                     * @member {number} _width - The width of the video track
                     * @type {number}
                     * @private
                     */
                    get: function get() {
                        return this._bandwidth;
                    }

                    /**
                     * @public
                     * @returns {number} - The width of the video track
                     */


                    /**
                     * @member {number} _height - The height of the video track
                     * @type {number}
                     * @private
                     */

                    /**
                     * @member {number} _bandwidth - The bandwidth of the video track
                     * @type {number}
                     * @private
                     */

                }, {
                    key: 'width',
                    get: function get() {
                        return this._width;
                    }

                    /**
                     * @public
                     * @returns {number} - The height of the video track
                     */

                }, {
                    key: 'height',
                    get: function get() {
                        return this._height;
                    }

                    /**
                     * @constructor
                     * @param {Object} settings - The track settings object
                     */

                }]);

                function VideoTrack() {
                    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, VideoTrack);

                    var _this = _possibleConstructorReturn(this, (VideoTrack.__proto__ || Object.getPrototypeOf(VideoTrack)).call(this, settings));

                    _this._bandwidth = settings.bandwidth;
                    _this._width = settings.width;
                    _this._height = settings.height;
                    _this._label = settings.label ? settings.label : _this._height ? _this._height + 'p' : undefined;
                    return _this;
                }

                return VideoTrack;
            }(_track2.default);

            exports.default = VideoTrack;

            /***/
        }),
        /* 11 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * Audio track representation of the player.
             * @classdesc
             */
            var AudioTrack = function(_Track) {
                _inherits(AudioTrack, _Track);

                function AudioTrack() {
                    _classCallCheck(this, AudioTrack);

                    return _possibleConstructorReturn(this, (AudioTrack.__proto__ || Object.getPrototypeOf(AudioTrack)).apply(this, arguments));
                }

                return AudioTrack;
            }(_track2.default);

            exports.default = AudioTrack;

            /***/
        }),
        /* 12 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _uaParserJs = __webpack_require__(40);

            var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Env = new _uaParserJs2.default().getResult();
            exports.default = Env;

            /***/
        }),
        /* 13 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Cue = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _textTrackDisplay = __webpack_require__(21);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var autoKeyword = 'auto';
            var directionSetting = {
                '': true,
                lr: true,
                rl: true
            };
            var alignSetting = {
                start: true,
                middle: true,
                end: true,
                left: true,
                right: true
            };

            /**
             * helper
             * @param {string} value - the string to find
             * @returns {string | boolean} - the aligned sting if found
             */
            function findDirectionSetting(value) {
                if (typeof value !== 'string') {
                    return false;
                }
                var dir = directionSetting[value.toLowerCase()];
                return dir ? value.toLowerCase() : false;
            }

            /**
             * helper
             * @param {string} value - the string
             * @returns {string | boolean} - the aligned sting if found
             */
            function findAlignSetting(value) {
                if (typeof value !== 'string') {
                    return false;
                }
                var align = alignSetting[value.toLowerCase()];
                return align ? value.toLowerCase() : false;
            }

            /**
             * VTTCue model
             * @class
             * @classdesc VTT Cue model to represent VTT cues internally
             */

            var VTTCue = function() {
                /**
                 * A number giving the size of the cue box, to be interpreted as a percentage of the video, as defined
                 * by the writing direction.
                 * @type {number}
                 * @private
                 */

                /**
                 * The position defines the indent of the cue box in the direction defined by the writing direction
                 * @type {number}
                 * @private
                 */

                /**
                 * The line defines positioning of the cue box.
                 * @type {string | number}
                 * @private
                 */

                /**
                 * configures the cue to use vertical text layout rather than horizontal text layout.
                 * Vertical text layout is sometimes used in Japanese, for example. The default is horizontal layout
                 * @type {string}
                 * @private
                 */

                /**
                 * A boolean indicating whether playback of the media resource is to pause when the end of the
                 * range to which the cue applies is reached.
                 * @type {boolean}
                 * @private
                 */


                /**
                 * This is used as part of the rendering model, to keep cues in a consistent position.
                 * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
                 * @type {undefined}
                 */
                function VTTCue(startTime, endTime, text) {
                    _classCallCheck(this, VTTCue);

                    this.hasBeenReset = false;
                    this.displayState = undefined;
                    this._id = '';
                    this._pauseOnExit = false;
                    this._region = null;
                    this._vertical = '';
                    this._snapToLines = true;
                    this._line = 'auto';
                    this._lineAlign = 'start';
                    this._position = 50;
                    this._positionAlign = 'middle';
                    this._size = 50;
                    this._align = 'middle';

                    this._startTime = startTime;
                    this._endTime = endTime;
                    this._text = text;
                    /**
                     * Other <track> spec defined properties
                     */
                }
                /**
                 * An alignment for all lines of text within the cue box, in the dimension of the writing direction
                 * @type {string}
                 * @private
                 */

                /**
                 * An alignment for the cue box in the dimension of the writing direction, describing what the position
                 * is anchored to
                 * @type {string}
                 * @private
                 */

                /**
                 * An alignment for the cue box’s line, one of start/center/end alignment
                 * @type {string}
                 * @private
                 */

                /**
                 * A boolean indicating whether the line is an integer number of lines (using the line dimensions of
                 * the first line of the cue), or whether it is a percentage of the dimension of the video.
                 * The flag is set to true when lines are counted, and false otherwise.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * An optional WebVTT region to which a cue belongs.
                 * By default, the region is set to null.
                 * @type {null}
                 * @private
                 */

                /**
                 * The time, in seconds and fractions of a second, that describes the beginning of the range of
                 * the media data to which the cue applies.
                 * @type {number}
                 * @private
                 */

                /**
                 * The time, in seconds and fractions of a second, that describes the end of the range of
                 * the media data to which the cue applies.
                 * @type {number}
                 * @private
                 */

                /**
                 * The raw text of the cue, and rules for its interpretation, allowing the text to be
                 * rendered and converted to a DOM fragment.
                 * @type {string}
                 * @private
                 */

                /**
                 * VTTCue and TextTrackCue properties
                 * http://dev.w3.org/html5/webvtt/#vttcue-interface
                 */
                /**
                 * An arbitrary string.
                 * @type {string}
                 * @private
                 */

                /**
                 * // Lets us know when the VTTCue's data has changed in such a way that we need
                 * to recompute its display state. This lets us compute its display state lazily.
                 * @type {boolean}
                 */


                _createClass(VTTCue, [{
                    key: 'resetCue',
                    value: function resetCue() {
                        this.hasBeenReset = true;
                    }
                }, {
                    key: 'getCueAsHTML',
                    value: function getCueAsHTML() {
                        return (0, _textTrackDisplay.convertCueToDOMTree)(window, this.text);
                    }
                }, {
                    key: 'id',
                    get: function get() {
                        return this._id;
                    },
                    set: function set(value) {
                        this._id = '' + value;
                    }
                }, {
                    key: 'pauseOnExit',
                    get: function get() {
                        return this._pauseOnExit;
                    },
                    set: function set(value) {
                        this._pauseOnExit = value;
                    }
                }, {
                    key: 'startTime',
                    get: function get() {
                        return this._startTime;
                    },
                    set: function set(value) {
                        if (typeof value !== 'number') {
                            throw new TypeError('Start time must be set to a number.');
                        }
                        this._startTime = value;
                        this.resetCue();
                    }
                }, {
                    key: 'endTime',
                    get: function get() {
                        return this._endTime;
                    },
                    set: function set(value) {
                        if (typeof value !== 'number') {
                            throw new TypeError('End time must be set to a number.');
                        }
                        this._endTime = value;
                        this.resetCue();
                    }
                }, {
                    key: 'text',
                    get: function get() {
                        return this._text;
                    },
                    set: function set(value) {
                        this._text = '' + value;
                        this.resetCue();
                    }
                }, {
                    key: 'region',
                    get: function get() {
                        return this._region;
                    },
                    set: function set(value) {
                        this._region = value;
                        this.resetCue();
                    }
                }, {
                    key: 'vertical',
                    get: function get() {
                        return this._vertical;
                    },
                    set: function set(value) {
                        var setting = findDirectionSetting(value);
                        // Have to check for false because the setting an be an empty string.
                        if (setting === false) {
                            throw new SyntaxError('An invalid or illegal string was specified.');
                        } else if (typeof setting === 'string') {
                            this._vertical = setting;
                            this.resetCue();
                        }
                    }
                }, {
                    key: 'snapToLines',
                    get: function get() {
                        return this._snapToLines;
                    },
                    set: function set(value) {
                        this._snapToLines = value;
                        this.resetCue();
                    }
                }, {
                    key: 'line',
                    get: function get() {
                        return this._line;
                    },
                    set: function set(value) {
                        if (typeof value !== 'number' && value !== autoKeyword) {
                            throw new SyntaxError('An invalid number or illegal string was specified.');
                        }
                        this._line = value;
                        this.resetCue();
                    }
                }, {
                    key: 'lineAlign',
                    get: function get() {
                        return this._lineAlign;
                    },
                    set: function set(value) {
                        var setting = findAlignSetting(value);
                        if (!setting) {
                            throw new SyntaxError('An invalid or illegal string was specified.');
                        } else if (typeof setting === 'string') {
                            this._lineAlign = setting;
                            this.resetCue();
                        }
                    }
                }, {
                    key: 'position',
                    get: function get() {
                        return this._position;
                    },
                    set: function set(value) {
                        if (value < 0 || value > 100) {
                            throw new Error('Position must be between 0 and 100.');
                        }
                        this._position = value;
                        this.resetCue();
                    }
                }, {
                    key: 'positionAlign',
                    get: function get() {
                        return this._positionAlign;
                    },
                    set: function set(value) {
                        var setting = findAlignSetting(value);
                        if (!setting) {
                            throw new SyntaxError('An invalid or illegal string was specified.');
                        } else if (typeof setting === 'string') {
                            this._positionAlign = setting;
                            this.resetCue();
                        }
                    }
                }, {
                    key: 'size',
                    get: function get() {
                        return this._size;
                    },
                    set: function set(value) {
                        if (value < 0 || value > 100) {
                            throw new Error('Size must be between 0 and 100.');
                        }
                        this._size = value;
                        this.resetCue();
                    }
                }, {
                    key: 'align',
                    get: function get() {
                        return this._align;
                    },
                    set: function set(value) {
                        var setting = findAlignSetting(value);
                        if (!setting) {
                            throw new SyntaxError('An invalid or illegal string was specified.');
                        } else if (typeof setting === 'string') {
                            this._align = setting;
                            this.resetCue();
                        }
                    }
                }]);

                return VTTCue;
            }();

            var Cue = void 0;
            if (typeof window !== 'undefined' && window.VTTCue) {
                exports.Cue = Cue = window.VTTCue;
            } else {
                exports.Cue = Cue = VTTCue;
            }

            exports.Cue = Cue;

            /***/
        }),
        /* 14 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var TrackType = {
                VIDEO: 'video',
                AUDIO: 'audio',
                TEXT: 'text'
            };

            exports.TrackType = TrackType;

            /***/
        }),
        /* 15 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * A simple multimap template.
             * @constructor
             * @struct
             * @template T
             */
            var MultiMap = function() {
                function MultiMap() {
                    _classCallCheck(this, MultiMap);

                    /** @private {!Object.<string, !Array.<T>>} */
                    this._map = new Map();
                }

                /**
                 * Add a key, value pair to the map.
                 * @param {string} key -
                 * @param {T} value  -
                 * @returns {void}
                 */


                _createClass(MultiMap, [{
                    key: "push",
                    value: function push(key, value) {
                        if (this._map.has(key)) {
                            var list = this._map.get(key);
                            if (Array.isArray(list)) {
                                list.push(value);
                                this._map.set(key, list);
                            }
                        } else {
                            this._map.set(key, [value]);
                        }
                    }

                    /**
                     * Set an array of values for the key, overwriting any previous data.
                     * @param {string} key -
                     * @param {!Array.<T>} values -
                     * @returns {void}
                     */

                }, {
                    key: "set",
                    value: function set(key, values) {
                        this._map.set(key, values);
                    }

                    /**
                     * Check for a key.
                     * @param {string} key -
                     * @return {boolean} true if the key exists.
                     */

                }, {
                    key: "has",
                    value: function has(key) {
                        return this._map.has(key);
                    }

                    /**
                     * Get a list of values by key.
                     * @param {string} key -
                     * @return {Array.<T>} or null if no suZch key exists.
                     */

                }, {
                    key: "get",
                    value: function get(key) {
                        var list = this._map.get(key);
                        // slice() clones the list so that it and the map can each be modified
                        // without affecting the other.
                        return list ? list.slice() : [];
                    }

                    /**
                     * Get a list of all values.
                     * @returns {!Array.<T>} -
                     */

                }, {
                    key: "getAll",
                    value: function getAll() {
                        var list = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this._map.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var value = _step.value;

                                list = list.concat(value);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        return list;
                    }

                    /**
                     * Remove a specific value, if it exists.
                     * @param {string} key -
                     * @param {T} value -
                     * @returns {void}
                     */

                }, {
                    key: "remove",
                    value: function remove(key, value) {
                        if (!this._map.has(key)) return;
                        var list = this._map.get(key);
                        if (Array.isArray(list)) {
                            for (var i = 0; i < list.length; ++i) {
                                if (list[i] == value) {
                                    list.splice(i, 1);
                                    --i;
                                }
                            }
                        }
                    }

                    /**
                     * Get all keys from the multimap.
                     * @return {!Array.<string>}
                     */
                    // eslint-disable-next-line no-undef

                }, {
                    key: "keys",
                    value: function keys() {
                        return this._map.keys();
                    }

                    /**
                     * Clear all keys and values from the multimap.
                     * @returns {void}
                     */

                }, {
                    key: "clear",
                    value: function clear() {
                        this._map.clear();
                    }
                }]);

                return MultiMap;
            }();

            exports.default = MultiMap;

            /***/
        }),
        /* 16 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var AdEventType = {
                /**
                 * Fired when the ad can be skip by the user.
                 */
                AD_CAN_SKIP: 'adcanskip',
                /**
                 * Fired when the ad manifest has been loaded.
                 */
                AD_MANIFEST_LOADED: 'admanifestloaded',
                /**
                 * Fired when ad data is available.
                 */
                AD_LOADED: 'adloaded',
                /**
                 * Fired when the ad starts playing.
                 */
                AD_STARTED: 'adstarted',
                /**
                 * Fired when the ad is resumed.
                 */
                AD_RESUMED: 'adresumed',
                /**
                 * Fired when the ad is paused.
                 */
                AD_PAUSED: 'adpaused',
                /**
                 * Fired when the ad is clicked.
                 */
                AD_CLICKED: 'adclicked',
                /**
                 * Fired when the ad is skipped by the user.
                 */
                AD_SKIPPED: 'adskipped',
                /**
                 * Fired when the ad completes playing.
                 */
                AD_COMPLETED: 'adcompleted',
                /**
                 * Fired when an error occurred while the ad was loading or playing.
                 */
                AD_ERROR: 'aderror',
                /**
                 * Fired when the ads manager is done playing all the ads.
                 */
                ALL_ADS_COMPLETED: 'alladscompleted',
                /**
                 * Fired when content should be paused. This usually happens right before an ad is about to cover the content.
                 */
                AD_BREAK_START: 'adbreakstart',
                /**
                 * Fired when content should be resumed. This usually happens when an ad finishes or collapses.
                 */
                AD_BREAK_END: 'adbreakend',
                /**
                 * Fired when the ad playhead crosses first quartile.
                 */
                AD_FIRST_QUARTILE: 'adfirstquartile',
                /**
                 * Fired when the ad playhead crosses midpoint.
                 */
                AD_MIDPOINT: 'admidpoint',
                /**
                 * Fired when the ad playhead crosses third quartile.
                 */
                AD_THIRD_QUARTILE: 'adthirdquartile',
                /**
                 * Fired when the ad is closed by the user.
                 */
                USER_CLOSED_AD: 'userclosedad',
                /**
                 * Fired when the ad volume has changed.
                 */
                AD_VOLUME_CHANGED: 'advolumechanged',
                /**
                 * Fired when the ad volume has been muted.
                 */
                AD_MUTED: 'admuted',
                /**
                 * Fired on ad time progress.
                 */
                AD_PROGRESS: 'adprogress',
                /**
                 * Fired when the ad has stalled playback to buffer.
                 */
                AD_BUFFERING: 'adbuffering'
            };

            exports.AdEventType = AdEventType;

            /***/
        }),
        /* 17 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.registerPlugin = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _basePlugin = __webpack_require__(18);

            var _basePlugin2 = _interopRequireDefault(_basePlugin);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * The logger of the PluginManager class.
             * @private
             * @const
             */
            var logger = (0, _logger2.default)('PluginManager');

            /** The PluginManager responsible for register plugins definitions and store plugins instances.
             * @classdesc
             */

            var PluginManager = function() {
                function PluginManager() {
                    _classCallCheck(this, PluginManager);

                    this._plugins = {};
                    this._isDisabledPluginMap = new Map();
                }
                /**
                 * The registry of the plugins.
                 * Maps plugin's name to his class.
                 * @type {Map}
                 * @static
                 * @private
                 */

                /**
                 * The active plugins in the player.
                 * Maps plugin's name to his instance.
                 * @type {Object}
                 * @private
                 */

                /**
                 * Is disabled plugin map.
                 * Maps plugin's name to a boolean.
                 * false means the plugin is disable. true or plugin name doesn't exist in the map means the plugin is not disable.
                 * @type {Map}
                 * @private
                 */


                _createClass(PluginManager, [{
                    key: 'load',


                    /**
                     * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
                     * @param {string} name - The plugin name
                     * @param {Player} player - The player reference
                     * @param {Object} [config={}] - The plugin configuration
                     * @returns {boolean} - Whether the plugin load was successful
                     * @public
                     */
                    value: function load(name, player) {
                        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                        if (!PluginManager._registry.has(name)) {
                            logger.warn('Plugin <' + name + '> loading failed, plugin is not registered');
                            throw new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.PLAYER, _error2.default.Code.RUNTIME_ERROR_NOT_REGISTERED_PLUGIN, name);
                        }
                        var pluginClass = PluginManager._registry.get(name);
                        if (typeof config.disable === 'boolean') {
                            this._isDisabledPluginMap.set(name, config.disable);
                        }
                        var isDisablePlugin = !!this._isDisabledPluginMap.get(name);
                        var isValidPlugin = pluginClass ? pluginClass.isValid() : false;
                        if (pluginClass && isValidPlugin && !isDisablePlugin) {
                            this._plugins[name] = pluginClass.createPlugin(name, player, config);
                            this._isDisabledPluginMap.set(name, false);
                            logger.debug('Plugin <' + name + '> has been loaded');
                            return true;
                        }
                        logger.debug('Plugin <' + name + '> isn\'t loaded, isValid()=' + isValidPlugin.toString() + ', disabled=' + isDisablePlugin.toString());
                        return false;
                    }

                    /**
                     * Iterates over all the plugins and calls loadMedia().
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'loadMedia',
                    value: function loadMedia() {
                        var _this = this;

                        Object.keys(this._plugins).forEach(function(k) {
                            return _this._plugins[k].loadMedia();
                        });
                    }

                    /**
                     * Iterates over all the plugins and calls destroy().
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this2 = this;

                        Object.keys(this._plugins).forEach(function(k) {
                            _this2._plugins[k].destroy();
                            delete _this2._plugins[k];
                        });
                    }

                    /**
                     * Iterates over all the plugins and calls reset() method of the plugin's impl.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        var _this3 = this;

                        Object.keys(this._plugins).forEach(function(k) {
                            return _this3._plugins[k].reset();
                        });
                    }

                    /**
                     * Returns the plugin's instance.
                     * @param {string} name - The plugin name.
                     * @returns {BasePlugin} - The plugin instance.
                     * @public
                     */

                }, {
                    key: 'get',
                    value: function get(name) {
                        return this._plugins[name];
                    }

                    /**
                     * Returns all plugins.
                     * @returns {Object} - All plugins.
                     * @public
                     */

                }, {
                    key: 'getAll',
                    value: function getAll() {
                        return this._plugins;
                    }
                }], [{
                    key: 'register',


                    /**
                     * Writes the plugin in the registry.
                     * Maps: plugin name -> plugin class.
                     * @param {string} name - The plugin name
                     * @param {Function} handler - The plugin class
                     * @returns {boolean} - If the registration request succeeded
                     * @static
                     * @public
                     */
                    value: function register(name, handler) {
                        if (typeof handler !== 'function' || handler.prototype instanceof _basePlugin2.default === false) {
                            logger.error('Plugin <' + name + '> registration failed, either plugin is not an instance of BasePlugin or plugin handler is not a function');
                            return false;
                        }
                        if (!PluginManager._registry.has(name)) {
                            PluginManager._registry.set(name, handler);
                            logger.debug('Plugin <' + name + '> has been registered successfully');
                            return true;
                        }
                        logger.debug('Plugin <' + name + '> is already registered, do not register again');
                        return false;
                    }

                    /**
                     * Removes the plugin from the registry.
                     * @param {string} name - The plugin name
                     * @static
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'unRegister',
                    value: function unRegister(name) {
                        if (PluginManager._registry.has(name)) {
                            PluginManager._registry.delete(name);
                            logger.debug('Unregistered <' + name + '> plugin.');
                        }
                    }
                }]);

                return PluginManager;
            }();

            /**
             * Export the register method.
             * @type {function}
             * @constant
             */


            PluginManager._registry = new Map();
            exports.default = PluginManager;
            var registerPlugin = PluginManager.register;
            exports.registerPlugin = registerPlugin;

            /***/
        }),
        /* 18 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /** The BasePlugin responsible to implement the plugin interface.
             * Contains several default implementations.
             * Other plugins should extend this class.
             * @classdesc
             */
            var BasePlugin = function() {
                _createClass(BasePlugin, null, [{
                    key: 'createPlugin',


                    /**
                     * Factory method to create the actual plugin.
                     * @param {string} name - The plugin name
                     * @param {Player} player - The player reference
                     * @param {Object} config - The plugin configuration
                     * @returns {BasePlugin} - New runtime plugin instance
                     * @static
                     * @public
                     */

                    /**
                     * The event manager of the plugin.
                     * @member
                     */

                    /**
                     * The logger of the plugin.
                     * @member
                     */

                    /**
                     * The runtime configuration of the plugin.
                     * @member
                     */
                    value: function createPlugin(name, player) {
                        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                        return new this(name, player, config);
                    }

                    /**
                     * Returns under what conditions the plugin is valid.
                     * Plugin must implement this method.
                     * @returns {boolean} - Whether the plugin is valid and can be initiated. Default implementation is true
                     * @static
                     * @public
                     * @abstract
                     */

                    /**
                     * The default configuration of the plugin.
                     * Inherited plugins should override this property.
                     * @type {Object}
                     * @static
                     * @member
                     */

                    /**
                     * Reference to the actual player.
                     * @member
                     */

                    /**
                     * The name of the plugin.
                     * @member
                     */

                }, {
                    key: 'isValid',
                    value: function isValid() {
                        throw new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'isValid()');
                    }

                    /**
                     * constructor
                     * @param {string} name - The plugin name
                     * @param {Player} player - The player reference
                     * @param {Object} config - The plugin configuration
                     * @constructor
                     * @private
                     */

                }]);

                function BasePlugin(name, player, config) {
                    _classCallCheck(this, BasePlugin);

                    this.name = name;
                    this.player = player;
                    this.eventManager = new _eventManager2.default();
                    this.logger = (0, _logger2.default)(Utils.String.capitlize(this.name));
                    this.config = {};
                    Utils.Object.mergeDeep(this.config, this.constructor.defaultConfig, config);
                }

                /**
                 * Getter for the configuration of the plugin.
                 * @param {string} attr - The key in the plugin configuration (optional).
                 * @returns {*} - If attribute is provided, returns its value. Else, Returns the config of the plugin.
                 * @public
                 */


                _createClass(BasePlugin, [{
                    key: 'getConfig',
                    value: function getConfig(attr) {
                        if (attr) {
                            return Utils.Object.copyDeep(this.config[attr]);
                        }
                        return Utils.Object.copyDeep(this.config);
                    }

                    /**
                     * Updates the config of the plugin.
                     * @param {Object} update - The updated configuration.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'updateConfig',
                    value: function updateConfig(update) {
                        Utils.Object.mergeDeep(this.config, update);
                    }

                    /**
                     * Runs the loadMedia logic of the plugin.
                     * plugin must implement this method.
                     * @public
                     * @virtual
                     * @returns {void}
                     */

                }, {
                    key: 'loadMedia',
                    value: function loadMedia() {}

                    /**
                     * Runs the destroy logic of the plugin.
                     * plugin must implement this method.
                     * @public
                     * @virtual
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {}

                    /**
                     * Runs the reset logic of the plugin.
                     * plugin must implement this method.
                     * @public
                     * @virtual
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {}

                    /**
                     * Getter for the plugin's name.
                     * @returns {string} - The name of the plugin.
                     * @public
                     */

                }, {
                    key: 'getName',
                    value: function getName() {
                        return this.name;
                    }

                    /**
                     * Dispatch an event via the plugin.
                     * @param {string} name - The event name.
                     * @param {any} payload - The event payload.
                     * @returns {void}
                     */

                }, {
                    key: 'dispatchEvent',
                    value: function dispatchEvent(name, payload) {
                        this.logger.debug('Fire event: ' + name, payload);
                        this.player.dispatchEvent(new _fakeEvent2.default(name, payload));
                    }
                }]);

                return BasePlugin;
            }();

            BasePlugin.defaultConfig = {};
            exports.default = BasePlugin;

            /***/
        }),
        /* 19 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var StateType = {
                IDLE: 'idle',
                LOADING: 'loading',
                PLAYING: 'playing',
                PAUSED: 'paused',
                BUFFERING: 'buffering'
            };

            exports.StateType = StateType;

            /***/
        }),
        /* 20 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var IMPLICIT_SCALE_PERCENTAGE = 0.25;

            /**
             * Creates a TextStyle object.
             *
             * <p><i>
             * Note that although this API is based on FCC guidelines, we cannot guarantee
             * that your application is in compliance with this or any other guideline.
             * </i></p>
             *
             * @constructor
             * @struct
             * @export
             */

            var TextStyle = function() {
                function TextStyle() {
                    _classCallCheck(this, TextStyle);

                    this.fontSize = '100%';
                    this.fontScale = 1;
                    this.fontFamily = TextStyle.FontFamily.SANS_SERIF;
                    this.fontColor = TextStyle.StandardColors.WHITE;
                    this.fontOpacity = TextStyle.StandardOpacities.OPAQUE;
                    this.backgroundColor = TextStyle.StandardColors.BLACK;
                    this.backgroundOpacity = TextStyle.StandardOpacities.OPAQUE;
                    this.fontEdge = TextStyle.EdgeStyles.NONE;
                }
                /**
                 * Defined set of font families
                 * @enum {Object.<string, string>}}
                 * @export
                 */


                /**
                 * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111, footnote
                 * 448.  Each value is an array of the three RGB values for that color.
                 * @enum {Object.<string, Array.<number>>}}
                 * @export
                 */


                /**
                 * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111.
                 * @enum {Object.<string, number>}}
                 * @export
                 */


                /**
                 * Defined in {@link https://goo.gl/ZcqOOM FCC 12-9}, paragraph 111.
                 * The styles to achieve these effects are not specified anywhere.
                 *
                 * Each inner array represents a shadow, and is composed of RGB values for the
                 * shadow color, followed by pixel values for x-offset, y-offset, and blur.
                 *
                 * @enum {!Array.<!Array.<number>>}
                 * @export
                 */


                _createClass(TextStyle, [{
                    key: 'getTextShadow',
                    value: function getTextShadow() {
                        // A given edge effect may be implemented with multiple shadows.
                        var shadows = [];
                        for (var i = 0; i < this.fontEdge.length; i++) {
                            // shaka.asserts.assert(this.fontEdge[i].length == 6);
                            var color = this.fontEdge[i].slice(0, 3);
                            var shadow = this.fontEdge[i].slice(3, 6);
                            shadows.push(TextStyle.toRGBA(color, this.fontOpacity) + ' ' + shadow.join('px ') + 'px');
                        }
                        return shadows.join(',');
                    }

                    /**
                     * Compute the CSS text necessary to represent this TextStyle.
                     * Output does not contain any selectors.
                     *
                     * @return {string} - ::CUE CSS string
                     */

                }, {
                    key: 'toCSS',
                    value: function toCSS() {
                        var attributes = [];
                        attributes.push('font-family: ' + this.fontFamily);
                        attributes.push('color: ' + TextStyle.toRGBA(this.fontColor, this.fontOpacity));
                        attributes.push('background-color: ' + TextStyle.toRGBA(this.backgroundColor, this.backgroundOpacity));
                        attributes.push('text-shadow: ' + this.getTextShadow());
                        return attributes.join('!important; ');
                    }

                    /**
                     * clones the textStyle object
                     * @returns {TextStyle} the cloned textStyle object
                     */

                }, {
                    key: 'clone',
                    value: function clone() {
                        var clonedTextStyle = new TextStyle();
                        clonedTextStyle.fontEdge = this.fontEdge;
                        clonedTextStyle.fontSize = this.fontSize;
                        clonedTextStyle.fontScale = this.fontScale;
                        clonedTextStyle.fontColor = this.fontColor;
                        clonedTextStyle.fontOpacity = this.fontOpacity;
                        clonedTextStyle.backgroundColor = this.backgroundColor;
                        clonedTextStyle.backgroundOpacity = this.backgroundOpacity;
                        clonedTextStyle.fontFamily = this.fontFamily;
                        return clonedTextStyle;
                    }

                    /**
                     * comparing between 2 textStyle objects.
                     * @param {TextStyle} textStyle - The textStyle to compare with.
                     * @returns {boolean} - Whether the text styles are equal.
                     */

                }, {
                    key: 'isEqual',
                    value: function isEqual(textStyle) {
                        return textStyle.fontEdge === this.fontEdge && textStyle.fontSize === this.fontSize && textStyle.fontColor === this.fontColor && textStyle.fontOpacity === this.fontOpacity && textStyle.backgroundColor === this.backgroundColor && textStyle.backgroundOpacity === this.backgroundOpacity;
                    }
                }, {
                    key: 'implicitFontScale',
                    get: function get() {
                        return IMPLICIT_SCALE_PERCENTAGE * this.fontScale + 1;
                    }
                }], [{
                    key: 'toRGBA',


                    /**
                     * Creates a CSS RGBA sctring for a given color and opacity values
                     * @param {TextStyle.StandardColors} color - color value in RGB
                     * @param {TextStyle.StandardOpacities} opacity - opacity value
                     * @return {string} - CSS rgba string
                     * @private
                     */
                    value: function toRGBA(color, opacity) {
                        // shaka.asserts.assert(color.length == 3);
                        return 'rgba(' + color.concat(opacity).join(',') + ')';
                    }

                    /**
                     * Font size, such as 1, 2, 3...
                     * @type {number}
                     */


                    /**
                     * @type {TextStyle.FontFamily}
                     */


                    /**
                     * @type {TextStyle.StandardColors}
                     */


                    /**
                     * @type {TextStyle.StandardOpacities}
                     * @expose
                     */


                    /**
                     * @type {TextStyle.StandardColors}
                     */


                    /**
                     * @type {TextStyle.StandardOpacities}
                     */


                    /**
                     * @type {TextStyle.EdgeStyles}
                     * @expose
                     */

                }]);

                return TextStyle;
            }();

            TextStyle.FontFamily = {
                ARIAL: 'Arial',
                HELVETICA: 'Helvetica',
                VERDANA: 'Verdana',
                SANS_SERIF: 'sans-serif'
            };
            TextStyle.StandardColors = {
                WHITE: [255, 255, 255],
                BLACK: [0, 0, 0],
                RED: [255, 0, 0],
                GREEN: [0, 255, 0],
                BLUE: [0, 0, 255],
                YELLOW: [255, 255, 0],
                MAGENTA: [255, 0, 255],
                CYAN: [0, 255, 255]
            };
            TextStyle.StandardOpacities = {
                OPAQUE: 1,
                SEMI_HIGH: 0.75,
                SEMI_LOW: 0.25,
                TRANSPARENT: 0
            };
            TextStyle.EdgeStyles = {
                NONE: [],
                RAISED: [
                    [34, 34, 34, 1, 1, 0],
                    [34, 34, 34, 2, 2, 0],
                    [34, 34, 34, 3, 3, 0]
                ],
                DEPRESSED: [
                    [204, 204, 204, 1, 1, 0],
                    [204, 204, 204, 0, 1, 0],
                    [34, 34, 34, -1, -1, 0],
                    [34, 34, 34, 0, -1, 0]
                ],
                UNIFORM: [
                    [34, 34, 34, 0, 0, 4],
                    [34, 34, 34, 0, 0, 4],
                    [34, 34, 34, 0, 0, 4],
                    [34, 34, 34, 0, 0, 4]
                ],
                DROP: [
                    [34, 34, 34, 2, 2, 3],
                    [34, 34, 34, 2, 2, 4],
                    [34, 34, 34, 2, 2, 5]
                ]
            };
            TextStyle.FontSizes = [{
                value: -2,
                label: '50%'
            }, {
                value: -1,
                label: '75%'
            }, {
                value: 0,
                label: '100%'
            }, {
                value: 2,
                label: '200%'
            }, {
                value: 3,
                label: '300%'
            }, {
                value: 4,
                label: '400%'
            }];
            exports.default = TextStyle;

            /***/
        }),
        /* 21 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.StringDecoder = exports.Parser = exports.convertCueToDOMTree = exports.processCues = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _vttCue = __webpack_require__(13);

            var _vttRegion = __webpack_require__(51);

            var _textStyle = __webpack_require__(20);

            var _textStyle2 = _interopRequireDefault(_textStyle);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /* eslint-disable */
            /**
             * Copyright 2013 vtt.js Contributors
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */

            /* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

            /* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

            var fontScale = 1;

            // Try to parse input as a time stamp.
            function parseTimeStamp(input) {
                function computeSeconds(h, m, s, f) {
                    return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
                }

                var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                if (!m) {
                    return null;
                }

                if (m[3]) {
                    // Timestamp takes the form of [hours]:[minutes]:[seconds].[milliseconds]
                    return computeSeconds(m[1], m[2], m[3].replace(':', ''), m[4]);
                } else if (m[1] > 59) {
                    // Timestamp takes the form of [hours]:[minutes].[milliseconds]
                    // First position is hours as it's over 59.
                    return computeSeconds(m[1], m[2], 0, m[4]);
                } else {
                    // Timestamp takes the form of [minutes]:[seconds].[milliseconds]
                    return computeSeconds(0, m[1], m[2], m[4]);
                }
            }

            var ESCAPE = {
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&lrm;': '\u200E',
                '&rlm;': '\u200F',
                '&nbsp;': '\xA0'
            };

            var TAG_NAME = {
                c: 'span',
                i: 'i',
                b: 'b',
                u: 'u',
                ruby: 'ruby',
                rt: 'rt',
                v: 'span',
                lang: 'span'
            };

            var TAG_ANNOTATION = {
                v: 'title',
                lang: 'lang'
            };

            var NEEDS_PARENT = {
                rt: 'ruby'
            };

            // A settings object holds key/value pairs and will ignore anything but the first
            // assignment to a specific key.
            function Settings() {
                this.values = _objCreate(null);
            }

            Settings.prototype = {
                // Only accept the first assignment to any key.
                set: function set(k, v) {
                    if (!this.get(k) && v !== '') {
                        this.values[k] = v;
                    }
                },
                // Return the value for a key, or a default value.
                // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
                // a number of possible default values as properties where 'defaultKey' is
                // the key of the property that will be chosen; otherwise it's assumed to be
                // a single value.
                get: function get(k, dflt, defaultKey) {
                    if (defaultKey) {
                        return this.has(k) ? this.values[k] : dflt[defaultKey];
                    }
                    return this.has(k) ? this.values[k] : dflt;
                },
                // Check whether we have a value for a key.
                has: function has(k) {
                    return k in this.values;
                },
                // Accept a setting if its one of the given alternatives.
                alt: function alt(k, v, a) {
                    for (var n = 0; n < a.length; ++n) {
                        if (v === a[n]) {
                            this.set(k, v);
                            break;
                        }
                    }
                },
                // Accept a setting if its a valid (signed) integer.
                integer: function integer(k, v) {
                    if (/^-?\d+$/.test(v)) {
                        // integer
                        this.set(k, parseInt(v, 10));
                    }
                },
                // Accept a setting if its a valid percentage.
                percent: function percent(k, v) {
                    var m;
                    if (m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/)) {
                        v = parseFloat(v);
                        if (v >= 0 && v <= 100) {
                            this.set(k, v);
                            return true;
                        }
                    }
                    return false;
                }
            };

            // Helper function to parse input into groups separated by 'groupDelim', and
            // interprete each group as a key/value pair separated by 'keyValueDelim'.
            function parseOptions(input, callback, keyValueDelim, groupDelim) {
                var groups = groupDelim ? input.split(groupDelim) : [input];
                for (var i in groups) {
                    if (typeof groups[i] !== 'string') {
                        continue;
                    }
                    var kv = groups[i].split(keyValueDelim);
                    if (kv.length !== 2) {
                        continue;
                    }
                    var k = kv[0];
                    var v = kv[1];
                    callback(k, v);
                }
            }

            function parseCue(input, cue, regionList) {
                // Remember the original input if we need to throw an error.
                var oInput = input;

                // 4.1 WebVTT timestamp
                function consumeTimeStamp() {
                    var ts = parseTimeStamp(input);
                    if (ts === null) {
                        throw new ParsingError(ParsingError.Errors.BadTimeStamp, 'Malformed timestamp: ' + oInput);
                    }
                    // Remove time stamp from input.
                    input = input.replace(/^[^\sa-zA-Z-]+/, '');
                    return ts;
                }

                // 4.4.2 WebVTT cue settings
                function consumeCueSettings(input, cue) {
                    var settings = new Settings();

                    parseOptions(input, function(k, v) {
                        switch (k) {
                            case 'region':
                                // Find the last region we parsed with the same region id.
                                for (var i = regionList.length - 1; i >= 0; i--) {
                                    if (regionList[i].id === v) {
                                        settings.set(k, regionList[i].region);
                                        break;
                                    }
                                }
                                break;
                            case 'vertical':
                                settings.alt(k, v, ['rl', 'lr']);
                                break;
                            case 'line':
                                var vals = v.split(','),
                                    vals0 = vals[0];
                                settings.integer(k, vals0);
                                settings.percent(k, vals0) ? settings.set('snapToLines', false) : null;
                                settings.alt(k, vals0, ['auto']);
                                if (vals.length === 2) {
                                    settings.alt('lineAlign', vals[1], ['start', 'middle', 'end']);
                                }
                                break;
                            case 'position':
                                vals = v.split(',');
                                settings.percent(k, vals[0]);
                                if (vals.length === 2) {
                                    settings.alt('positionAlign', vals[1], ['start', 'middle', 'end']);
                                }
                                break;
                            case 'size':
                                settings.percent(k, v);
                                break;
                            case 'align':
                                settings.alt(k, v, ['start', 'middle', 'end', 'left', 'right']);
                                break;
                        }
                    }, /:/, /\s/);

                    // Apply default values for any missing fields.
                    cue.region = settings.get('region', null);
                    cue.vertical = settings.get('vertical', '');
                    cue.line = settings.get('line', cue.line || 'auto');
                    cue.lineAlign = settings.get('lineAlign', 'start');
                    cue.snapToLines = settings.get('snapToLines', true);
                    cue.size = settings.get('size', 100);
                    cue.align = settings.get('align', 'middle');
                    cue.position = settings.get('position', cue.position || 'auto');
                    cue.positionAlign = settings.get('positionAlign', {
                        start: 'start',
                        left: 'start',
                        middle: 'middle',
                        end: 'end',
                        right: 'end'
                    }, cue.align);
                }

                function skipWhitespace() {
                    input = input.replace(/^\s+/, '');
                }

                // 4.1 WebVTT cue timings.
                skipWhitespace();
                cue.startTime = consumeTimeStamp(); // (1) collect cue start time
                skipWhitespace();
                if (input.substr(0, 3) !== '-->') {
                    // (3) next characters must match "-->"
                    throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + oInput);
                }
                input = input.substr(3);
                skipWhitespace();
                cue.endTime = consumeTimeStamp(); // (5) collect cue end time

                // 4.1 WebVTT cue settings list.
                skipWhitespace();
                consumeCueSettings(input, cue);
            }

            // Parse content into a document fragment.
            function parseContent(window, input) {
                function nextToken() {
                    // Check for end-of-string.
                    if (!input) {
                        return null;
                    }

                    // Consume 'n' characters from the input.
                    function consume(result) {
                        input = input.substr(result.length);
                        return result;
                    }

                    var m = input.match(/^([^<]*)(<[^>]+>?)?/);
                    // If there is some text before the next tag, return it, otherwise return
                    // the tag.
                    return consume(m[1] ? m[1] : m[2]);
                }

                // Unescape a string 's'.
                function unescape1(e) {
                    return ESCAPE[e];
                }

                function unescape(s) {
                    var m = void 0;
                    while (m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) {
                        s = s.replace(m[0], unescape1);
                    }
                    return s;
                }

                function shouldAdd(current, element) {
                    return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
                }

                // Create an element for this tag.
                function createElement(type, annotation) {
                    var tagName = TAG_NAME[type];
                    if (!tagName) {
                        return null;
                    }
                    var element = window.document.createElement(tagName);
                    var name = TAG_ANNOTATION[type];
                    if (name && annotation) {
                        element[name] = annotation.trim();
                    }
                    return element;
                }

                var rootDiv = window.document.createElement('div'),
                    current = rootDiv,
                    t = void 0,
                    tagStack = [];

                while ((t = nextToken()) !== null) {
                    if (t[0] === '<') {
                        if (t[1] === '/') {
                            // If the closing tag matches, move back up to the parent node.
                            if (tagStack.length && tagStack[tagStack.length - 1] === t.substr(2).replace('>', '')) {
                                tagStack.pop();
                                current = current.parentNode;
                            }
                            // Otherwise just ignore the end tag.
                            continue;
                        }
                        var ts = parseTimeStamp(t.substr(1, t.length - 2));
                        var node = void 0;
                        if (ts) {
                            // Timestamps are lead nodes as well.
                            node = window.document.createProcessingInstruction('timestamp', ts);
                            current.appendChild(node);
                            continue;
                        }
                        var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        // If we can't parse the tag, skip to the next tag.
                        if (!m) {
                            continue;
                        }
                        // Try to construct an element, and ignore the tag if we couldn't.
                        node = createElement(m[1], m[3]);
                        if (!node) {
                            continue;
                        }
                        // Determine if the tag should be added based on the context of where it
                        // is placed in the cuetext.
                        if (!shouldAdd(current, node)) {
                            continue;
                        }
                        // Set the class list (as a list of classes, separated by space).
                        if (m[2]) {
                            node.className = m[2].substr(1).replace('.', ' ');
                        }
                        // Append the node to the current node, and enter the scope of the new
                        // node.
                        tagStack.push(m[1]);
                        current.appendChild(node);
                        current = node;
                        continue;
                    }

                    // Text nodes are leaf nodes.
                    current.appendChild(window.document.createTextNode(unescape(t)));
                }

                return rootDiv;
            }

            // This is a list of all the Unicode characters that have a strong
            // right-to-left category. What this means is that these characters are
            // written right-to-left for sure. It was generated by pulling all the strong
            // right-to-left characters out of the Unicode data table. That table can
            // found at: http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
            var strongRTLRanges = [
                [0x5be, 0x5be],
                [0x5c0, 0x5c0],
                [0x5c3, 0x5c3],
                [0x5c6, 0x5c6],
                [0x5d0, 0x5ea],
                [0x5f0, 0x5f4],
                [0x608, 0x608],
                [0x60b, 0x60b],
                [0x60d, 0x60d],
                [0x61b, 0x61b],
                [0x61e, 0x64a],
                [0x66d, 0x66f],
                [0x671, 0x6d5],
                [0x6e5, 0x6e6],
                [0x6ee, 0x6ef],
                [0x6fa, 0x70d],
                [0x70f, 0x710],
                [0x712, 0x72f],
                [0x74d, 0x7a5],
                [0x7b1, 0x7b1],
                [0x7c0, 0x7ea],
                [0x7f4, 0x7f5],
                [0x7fa, 0x7fa],
                [0x800, 0x815],
                [0x81a, 0x81a],
                [0x824, 0x824],
                [0x828, 0x828],
                [0x830, 0x83e],
                [0x840, 0x858],
                [0x85e, 0x85e],
                [0x8a0, 0x8a0],
                [0x8a2, 0x8ac],
                [0x200f, 0x200f],
                [0xfb1d, 0xfb1d],
                [0xfb1f, 0xfb28],
                [0xfb2a, 0xfb36],
                [0xfb38, 0xfb3c],
                [0xfb3e, 0xfb3e],
                [0xfb40, 0xfb41],
                [0xfb43, 0xfb44],
                [0xfb46, 0xfbc1],
                [0xfbd3, 0xfd3d],
                [0xfd50, 0xfd8f],
                [0xfd92, 0xfdc7],
                [0xfdf0, 0xfdfc],
                [0xfe70, 0xfe74],
                [0xfe76, 0xfefc],
                [0x10800, 0x10805],
                [0x10808, 0x10808],
                [0x1080a, 0x10835],
                [0x10837, 0x10838],
                [0x1083c, 0x1083c],
                [0x1083f, 0x10855],
                [0x10857, 0x1085f],
                [0x10900, 0x1091b],
                [0x10920, 0x10939],
                [0x1093f, 0x1093f],
                [0x10980, 0x109b7],
                [0x109be, 0x109bf],
                [0x10a00, 0x10a00],
                [0x10a10, 0x10a13],
                [0x10a15, 0x10a17],
                [0x10a19, 0x10a33],
                [0x10a40, 0x10a47],
                [0x10a50, 0x10a58],
                [0x10a60, 0x10a7f],
                [0x10b00, 0x10b35],
                [0x10b40, 0x10b55],
                [0x10b58, 0x10b72],
                [0x10b78, 0x10b7f],
                [0x10c00, 0x10c48],
                [0x1ee00, 0x1ee03],
                [0x1ee05, 0x1ee1f],
                [0x1ee21, 0x1ee22],
                [0x1ee24, 0x1ee24],
                [0x1ee27, 0x1ee27],
                [0x1ee29, 0x1ee32],
                [0x1ee34, 0x1ee37],
                [0x1ee39, 0x1ee39],
                [0x1ee3b, 0x1ee3b],
                [0x1ee42, 0x1ee42],
                [0x1ee47, 0x1ee47],
                [0x1ee49, 0x1ee49],
                [0x1ee4b, 0x1ee4b],
                [0x1ee4d, 0x1ee4f],
                [0x1ee51, 0x1ee52],
                [0x1ee54, 0x1ee54],
                [0x1ee57, 0x1ee57],
                [0x1ee59, 0x1ee59],
                [0x1ee5b, 0x1ee5b],
                [0x1ee5d, 0x1ee5d],
                [0x1ee5f, 0x1ee5f],
                [0x1ee61, 0x1ee62],
                [0x1ee64, 0x1ee64],
                [0x1ee67, 0x1ee6a],
                [0x1ee6c, 0x1ee72],
                [0x1ee74, 0x1ee77],
                [0x1ee79, 0x1ee7c],
                [0x1ee7e, 0x1ee7e],
                [0x1ee80, 0x1ee89],
                [0x1ee8b, 0x1ee9b],
                [0x1eea1, 0x1eea3],
                [0x1eea5, 0x1eea9],
                [0x1eeab, 0x1eebb],
                [0x10fffd, 0x10fffd]
            ];

            function isStrongRTLChar(charCode) {
                for (var i = 0; i < strongRTLRanges.length; i++) {
                    var currentRange = strongRTLRanges[i];
                    if (charCode >= currentRange[0] && charCode <= currentRange[1]) {
                        return true;
                    }
                }

                return false;
            }

            function determineBidi(cueDiv) {
                var nodeStack = [],
                    text = '',
                    charCode = void 0;

                if (!cueDiv || !cueDiv.childNodes) {
                    return 'ltr';
                }

                function pushNodes(nodeStack, node) {
                    for (var i = node.childNodes.length - 1; i >= 0; i--) {
                        nodeStack.push(node.childNodes[i]);
                    }
                }

                function nextTextNode(nodeStack) {
                    if (!nodeStack || !nodeStack.length) {
                        return null;
                    }

                    var node = nodeStack.pop(),
                        text = node.textContent || node.innerText;
                    if (text) {
                        // TODO: This should match all unicode type B characters (paragraph
                        // separator characters). See issue #115.
                        var m = text.match(/^.*(\n|\r)/);
                        if (m) {
                            nodeStack.length = 0;
                            return m[0];
                        }
                        return text;
                    }
                    if (node.tagName === 'ruby') {
                        return nextTextNode(nodeStack);
                    }
                    if (node.childNodes) {
                        pushNodes(nodeStack, node);
                        return nextTextNode(nodeStack);
                    }
                }

                pushNodes(nodeStack, cueDiv);
                while (text = nextTextNode(nodeStack)) {
                    for (var i = 0; i < text.length; i++) {
                        charCode = text.charCodeAt(i);
                        if (isStrongRTLChar(charCode)) {
                            return 'rtl';
                        }
                    }
                }
                return 'ltr';
            }

            function computeLinePos(cue) {
                if (typeof cue.line === 'number' && (cue.snapToLines || cue.line >= 0 && cue.line <= 100)) {
                    return cue.line;
                }
                if (!cue.track || !cue.track.textTrackList || !cue.track.textTrackList.mediaElement) {
                    return -1;
                }
                var track = cue.track;
                var trackList = track.textTrackList;
                var count = 0;
                for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
                    if (trackList[i].mode === 'showing') {
                        count++;
                    }
                }
                return ++count * -1;
            }

            var StyleBox = function() {
                function StyleBox() {
                    _classCallCheck(this, StyleBox);
                }

                // Apply styles to a div. If there is no div passed then it defaults to the
                // div on 'this'.


                _createClass(StyleBox, [{
                    key: 'applyStyles',
                    value: function applyStyles(styles, div) {
                        div = div || this.div;
                        for (var prop in styles) {
                            if (styles.hasOwnProperty(prop)) {
                                div.style[prop] = styles[prop];
                            }
                        }
                    }
                }, {
                    key: 'formatStyle',
                    value: function formatStyle(val, unit) {
                        return val === 0 ? 0 : val + unit;
                    }
                }]);

                return StyleBox;
            }();

            // Constructs the computed display state of the cue (a div). Places the div
            // into the overlay which should be a block level element (usually a div).


            var CueStyleBox = function(_StyleBox) {
                _inherits(CueStyleBox, _StyleBox);

                function CueStyleBox(window, cue, styleOptions) {
                    _classCallCheck(this, CueStyleBox);

                    var _this = _possibleConstructorReturn(this, (CueStyleBox.__proto__ || Object.getPrototypeOf(CueStyleBox)).call(this));

                    var isIE8 = typeof navigator !== 'undefined' && /MSIE\s8\.0/.test(navigator.userAgent);
                    var color = 'rgba(255, 255, 255, 1)';
                    var backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    var textShadow = '';

                    if (typeof WebVTTSet !== 'undefined') {
                        color = WebVTTSet.fontSet;
                        backgroundColor = WebVTTSet.backgroundSet;
                        textShadow = WebVTTSet.edgeSet;
                    }

                    if (isIE8) {
                        color = 'rgb(255, 255, 255)';
                        backgroundColor = 'rgb(0, 0, 0)';
                    }

                    _this.cue = cue;

                    // Parse our cue's text into a DOM tree rooted at 'cueDiv'. This div will
                    // have inline positioning and will function as the cue background box.
                    _this.cueDiv = parseContent(window, cue.text);
                    var styles = {
                        color: styleOptions.color,
                        backgroundColor: styleOptions.backgroundColor,
                        textShadow: styleOptions.textShadow,
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: 'inline'
                    };

                    if (!isIE8) {
                        styles.writingMode = cue.vertical === '' ? 'horizontal-tb' : cue.vertical === 'lr' ? 'vertical-lr' : 'vertical-rl';
                        styles.unicodeBidi = 'plaintext';
                    }
                    _this.applyStyles(styles, _this.cueDiv);

                    // Create an absolutely positioned div that will be used to position the cue
                    // div. Note, all WebVTT cue-setting alignments are equivalent to the CSS
                    // mirrors of them except "middle" which is "center" in CSS.
                    _this.div = window.document.createElement('div');
                    styles = {
                        textAlign: cue.align === 'middle' ? 'center' : cue.align,
                        font: styleOptions.font,
                        whiteSpace: 'pre-line',
                        position: 'absolute'
                    };

                    if (!isIE8) {
                        styles.direction = determineBidi(_this.cueDiv);
                        styles.writingMode = cue.vertical === '' ? 'horizontal-tb' : cue.vertical === 'lr' ? 'vertical-lr' : 'vertical-rl'.stylesunicodeBidi = 'plaintext';
                    }

                    _this.applyStyles(styles);

                    _this.div.appendChild(_this.cueDiv);

                    // Calculate the distance from the reference edge of the viewport to the text
                    // position of the cue box. The reference edge will be resolved later when
                    // the box orientation styles are applied.
                    var textPos = 0;
                    switch (cue.positionAlign) {
                        case 'start':
                            textPos = cue.position;
                            break;
                        case 'middle':
                            textPos = cue.position - cue.size / 2;
                            break;
                        case 'end':
                            textPos = cue.position - cue.size;
                            break;
                    }

                    // Horizontal box orientation; textPos is the distance from the left edge of the
                    // area to the left edge of the box and cue.size is the distance extending to
                    // the right from there.
                    if (cue.vertical === '') {
                        _this.applyStyles({
                            left: _this.formatStyle(textPos, '%'),
                            width: _this.formatStyle(cue.size, '%')
                        });
                        // Vertical box orientation; textPos is the distance from the top edge of the
                        // area to the top edge of the box and cue.size is the height extending
                        // downwards from there.
                    } else {
                        _this.applyStyles({
                            top: _this.formatStyle(textPos, '%'),
                            height: _this.formatStyle(cue.size, '%')
                        });
                    }

                    _this.move = function(box) {
                        this.applyStyles({
                            top: this.formatStyle(box.top, 'px'),
                            bottom: this.formatStyle(box.bottom, 'px'),
                            left: this.formatStyle(box.left, 'px'),
                            right: this.formatStyle(box.right, 'px'),
                            height: this.formatStyle(box.height, 'px'),
                            width: this.formatStyle(box.width, 'px')
                        });
                    };
                    return _this;
                }

                return CueStyleBox;
            }(StyleBox);

            // Represents the co-ordinates of an Element in a way that we can easily
            // compute things with such as if it overlaps or intersects with another Element.
            // Can initialize it with either a StyleBox or another BoxPosition.


            var BoxPosition = function() {
                function BoxPosition(obj) {
                    _classCallCheck(this, BoxPosition);

                    this.overlaps = function(b2) {
                        return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
                    };

                    var isIE8 = typeof navigator !== 'undefined' && /MSIE\s8\.0/.test(navigator.userAgent);

                    // Either a BoxPosition was passed in and we need to copy it, or a StyleBox
                    // was passed in and we need to copy the results of 'getBoundingClientRect'
                    // as the object returned is readonly. All co-ordinate values are in reference
                    // to the viewport origin (top left).
                    var lh = void 0,
                        height = void 0,
                        width = void 0,
                        top = void 0;
                    if (obj.div) {
                        height = obj.div.offsetHeight;
                        width = obj.div.offsetWidth;
                        top = obj.div.offsetTop;

                        var rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
                        obj = obj.div.getBoundingClientRect();
                        // In certain cases the outter div will be slightly larger then the sum of
                        // the inner div's lines. This could be due to bold text, etc, on some platforms.
                        // In this case we should get the average line height and use that. This will
                        // result in the desired behaviour.
                        lh = rects ? Math.max(rects[0] && rects[0].height || 0, obj.height / rects.length) : 0;
                    }
                    this.left = obj.left;
                    this.right = obj.right;
                    this.top = obj.top || top;
                    this.height = obj.height || height;
                    this.bottom = obj.bottom || top + (obj.height || height);
                    this.width = obj.width || width;
                    this.lineHeight = lh !== undefined ? lh : obj.lineHeight;

                    if (isIE8 && !this.lineHeight) {
                        this.lineHeight = 13;
                    }
                }

                // Move the box along a particular axis. Optionally pass in an amount to move
                // the box. If no amount is passed then the default is the line height of the
                // box.


                _createClass(BoxPosition, [{
                    key: 'move',
                    value: function move(axis, toMove) {
                        toMove = toMove !== undefined ? toMove : this.lineHeight;
                        switch (axis) {
                            case '+x':
                                this.left += toMove;
                                this.right += toMove;
                                break;
                            case '-x':
                                this.left -= toMove;
                                this.right -= toMove;
                                break;
                            case '+y':
                                this.top += toMove;
                                this.bottom += toMove;
                                break;
                            case '-y':
                                this.top -= toMove;
                                this.bottom -= toMove;
                                break;
                        }
                    }

                    // Check if this box overlaps another box, b2.

                }, {
                    key: 'overlapsAny',


                    // Check if this box overlaps any other boxes in boxes.
                    value: function overlapsAny(boxes) {
                        for (var i = 0; i < boxes.length; i++) {
                            if (this.overlaps(boxes[i])) {
                                return true;
                            }
                        }
                        return false;
                    }

                    // Check if this box is within another box.

                }, {
                    key: 'within',
                    value: function within(container) {
                        return this.top >= container.top && this.bottom <= container.bottom && this.left >= container.left && this.right <= container.right;
                    }

                    // Check if this box is entirely within the container or it is overlapping
                    // on the edge opposite of the axis direction passed. For example, if "+x" is
                    // passed and the box is overlapping on the left edge of the container, then
                    // return true.

                }, {
                    key: 'overlapsOppositeAxis',
                    value: function overlapsOppositeAxis(container, axis) {
                        switch (axis) {
                            case '+x':
                                return this.left < container.left;
                            case '-x':
                                return this.right > container.right;
                            case '+y':
                                return this.top < container.top;
                            case '-y':
                                return this.bottom > container.bottom;
                        }
                    }

                    // Find the percentage of the area that this box is overlapping with another
                    // box.

                }, {
                    key: 'intersectPercentage',
                    value: function intersectPercentage(b2) {
                        var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
                            y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
                            intersectArea = x * y;
                        return intersectArea / (this.height * this.width);
                    }

                    // Convert the positions from this box to CSS compatible positions using
                    // the reference container's positions. This has to be done because this
                    // box's positions are in reference to the viewport origin, whereas, CSS
                    // values are in referecne to their respective edges.

                }, {
                    key: 'toCSSCompatValues',
                    value: function toCSSCompatValues(reference) {
                        return {
                            top: this.top - reference.top,
                            bottom: reference.bottom - this.bottom,
                            left: this.left - reference.left,
                            right: reference.right - this.right,
                            height: this.height,
                            width: this.width
                        };
                    }

                    // Get an object that represents the box's position without anything extra.
                    // Can pass a StyleBox, HTMLElement, or another BoxPositon.

                }], [{
                    key: 'getSimpleBoxPosition',
                    value: function getSimpleBoxPosition(obj) {
                        var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
                        var width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
                        var top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;

                        obj = obj.div ? obj.div.getBoundingClientRect() : obj.tagName ? obj.getBoundingClientRect() : obj;
                        return {
                            left: obj.left,
                            right: obj.right,
                            top: obj.top || top,
                            height: obj.height || height,
                            bottom: obj.bottom || top + (obj.height || height),
                            width: obj.width || width
                        };
                    }
                }]);

                return BoxPosition;
            }();

            // Move a StyleBox to its specified, or next best, position. The containerBox
            // is the box that contains the StyleBox, such as a div. boxPositions are
            // a list of other boxes that the styleBox can't overlap with.


            function moveBoxToLinePosition(styleBox, containerBox, boxPositions) {
                // Find the best position for a cue box, b, on the video. The axis parameter
                // is a list of axis, the order of which, it will move the box along. For example:
                // Passing ["+x", "-x"] will move the box first along the x axis in the positive
                // direction. If it doesn't find a good position for it there it will then move
                // it along the x axis in the negative direction.
                function findBestPosition(b, axis) {
                    var bestPosition = void 0,
                        specifiedPosition = new BoxPosition(b),
                        percentage = 1; // Highest possible so the first thing we get is better.

                    for (var i = 0; i < axis.length; i++) {
                        while (b.overlapsOppositeAxis(containerBox, axis[i]) || b.within(containerBox) && b.overlapsAny(boxPositions)) {
                            b.move(axis[i]);
                        }
                        // We found a spot where we aren't overlapping anything. This is our
                        // best position.
                        if (b.within(containerBox)) {
                            return b;
                        }
                        var p = b.intersectPercentage(containerBox);
                        // If we're outside the container box less then we were on our last try
                        // then remember this position as the best position.
                        if (percentage > p) {
                            bestPosition = new BoxPosition(b);
                            percentage = p;
                        }
                        // Reset the box position to the specified position.
                        b = new BoxPosition(specifiedPosition);
                    }
                    return bestPosition || specifiedPosition;
                }

                var boxPosition = new BoxPosition(styleBox),
                    cue = styleBox.cue,
                    linePos = computeLinePos(cue),
                    axis = [];

                // If we have a line number to align the cue to.
                if (cue.snapToLines) {
                    var size = void 0;
                    switch (cue.vertical) {
                        case '':
                            axis = ['+y', '-y'];
                            size = 'height';
                            break;
                        case 'rl':
                            axis = ['+x', '-x'];
                            size = 'width';
                            break;
                        case 'lr':
                            axis = ['-x', '+x'];
                            size = 'width';
                            break;
                    }

                    var step = boxPosition.lineHeight,
                        position = step * Math.round(linePos),
                        maxPosition = containerBox[size] + step,
                        initialAxis = axis[0];

                    // If the specified intial position is greater then the max position then
                    // clamp the box to the amount of steps it would take for the box to
                    // reach the max position.
                    if (Math.abs(position) > maxPosition) {
                        position = position < 0 ? -1 : 1;
                        position *= Math.ceil(maxPosition / step) * step;
                    }

                    // If computed line position returns negative then line numbers are
                    // relative to the bottom of the video instead of the top. Therefore, we
                    // need to increase our initial position by the length or width of the
                    // video, depending on the writing direction, and reverse our axis directions.
                    if (linePos < 0) {
                        position += cue.vertical === '' ? containerBox.height : containerBox.width;
                        axis = axis.reverse();
                    }

                    // Move the box to the specified position. This may not be its best
                    // position.
                    boxPosition.move(initialAxis, position);
                } else {
                    // If we have a percentage line value for the cue.
                    var calculatedPercentage = boxPosition.lineHeight / containerBox.height * 100;

                    switch (cue.lineAlign) {
                        case 'middle':
                            linePos -= calculatedPercentage / 2;
                            break;
                        case 'end':
                            linePos -= calculatedPercentage;
                            break;
                    }

                    // Apply initial line position to the cue box.
                    switch (cue.vertical) {
                        case '':
                            styleBox.applyStyles({
                                top: styleBox.formatStyle(linePos, '%')
                            });
                            break;
                        case 'rl':
                            styleBox.applyStyles({
                                left: styleBox.formatStyle(linePos, '%')
                            });
                            break;
                        case 'lr':
                            styleBox.applyStyles({
                                right: styleBox.formatStyle(linePos, '%')
                            });
                            break;
                    }

                    axis = ['+y', '-x', '+x', '-y'];

                    // Get the box position again after we've applied the specified positioning
                    // to it.
                    boxPosition = new BoxPosition(styleBox);
                }

                var bestPosition = findBestPosition(boxPosition, axis);
                styleBox.move(bestPosition.toCSSCompatValues(containerBox));
            }

            function convertCueToDOMTree(window, cuetext) {
                if (!window || !cuetext) {
                    return null;
                }
                return parseContent(window, cuetext);
            }

            var FONT_SIZE_PERCENT = 0.058;
            var FONT_STYLE = 'sans-serif';
            var CUE_BACKGROUND_PADDING = '1.5%';

            // Runs the processing model over the cues and regions passed to it.
            // @param overlay A block level element (usually a div) that the computed cues
            //                and regions will be placed into.
            function processCues(window, cues, overlay, style) {
                if (!window || !cues || !overlay) {
                    return null;
                }

                // Remove all previous children.
                while (overlay.firstChild) {
                    overlay.removeChild(overlay.firstChild);
                }

                var paddedOverlay = window.document.createElement('div');
                paddedOverlay.style.position = 'absolute';
                paddedOverlay.style.left = '0';
                paddedOverlay.style.right = '0';
                paddedOverlay.style.top = '0';
                paddedOverlay.style.bottom = '0';
                paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
                overlay.appendChild(paddedOverlay);

                // Determine if we need to compute the display states of the cues. This could
                // be the case if a cue's state has been changed since the last computation or
                // if it has not been computed yet.
                function shouldCompute(cues) {
                    for (var i = 0; i < cues.length; i++) {
                        if (cues[i].hasBeenReset || !cues[i].displayState) {
                            return true;
                        }
                    }
                    return false;
                }

                // We don't need to recompute the cues' display states. Just reuse them.
                if (!shouldCompute(cues)) {
                    for (var i = 0; i < cues.length; i++) {
                        paddedOverlay.appendChild(cues[i].displayState);
                    }
                    return;
                }

                var boxPositions = [],
                    containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
                    dimensionSize = containerBox.height < containerBox.width ? containerBox.height : containerBox.width,
                    fontSize = Math.round(dimensionSize * FONT_SIZE_PERCENT * 100) / 100;
                var styleOptions = {
                    font: fontSize * fontScale * style.implicitFontScale + 'px ' + style.fontFamily,
                    color: _textStyle2.default.toRGBA(style.fontColor, style.fontOpacity),
                    backgroundColor: _textStyle2.default.toRGBA(style.backgroundColor, style.backgroundOpacity),
                    textShadow: style.getTextShadow()
                };

                (function() {
                    var styleBox = void 0,
                        cue = void 0;

                    for (var _i = 0; _i < cues.length; _i++) {
                        cue = cues[_i];

                        // Compute the intial position and styles of the cue div.
                        styleBox = new CueStyleBox(window, cue, styleOptions);
                        paddedOverlay.appendChild(styleBox.div);

                        // Move the cue div to it's correct line position.
                        moveBoxToLinePosition(styleBox, containerBox, boxPositions);

                        // Remember the computed div so that we don't have to recompute it later
                        // if we don't have too.
                        cue.displayState = styleBox.div;

                        boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
                    }
                })();
            }

            var Parser = function Parser(window, decoder) {
                this.window = window;
                this.state = 'INITIAL';
                this.buffer = '';
                this.decoder = decoder || new TextDecoder('utf8');
                this.regionList = [];
            };

            var StringDecoder = function StringDecoder() {
                return {
                    decode: function decode(data) {
                        if (!data) {
                            return '';
                        }
                        if (typeof data !== 'string') {
                            throw new Error('Error - expected string data.');
                        }
                        return decodeURIComponent(encodeURIComponent(data));
                    }
                };
            };

            var _objCreate = Object.create || function() {
                function F() {}

                return function(o) {
                    if (arguments.length !== 1) {
                        throw new Error('Object.create shim only accepts one parameter.');
                    }
                    F.prototype = o;
                    return new F();
                };
            }();

            // Creates a new ParserError object from an errorData object. The errorData
            // object should have default code and message properties. The default message
            // property can be overriden by passing in a message parameter.
            // See ParsingError.Errors below for acceptable errors.
            function ParsingError(errorData, message) {
                this.name = 'ParsingError';
                this.code = errorData.code;
                this.message = message || errorData.message;
            }

            ParsingError.prototype = _objCreate(Error.prototype);
            ParsingError.prototype.constructor = ParsingError;

            // ParsingError metadata for acceptable ParsingErrors.
            ParsingError.Errors = {
                BadSignature: {
                    code: 0,
                    message: 'Malformed WebVTT signature.'
                },
                BadTimeStamp: {
                    code: 1,
                    message: 'Malformed time stamp.'
                }
            };

            Parser.prototype = {
                // If the error is a ParsingError then report it to the consumer if
                // possible. If it's not a ParsingError then throw it like normal.
                reportOrThrowError: function reportOrThrowError(e) {
                    if (e instanceof ParsingError) {
                        this.onparsingerror && this.onparsingerror(e);
                    } else {
                        throw e;
                    }
                },
                parse: function parse(data) {
                    var self = this;

                    // If there is no data then we won't decode it, but will just try to parse
                    // whatever is in buffer already. This may occur in circumstances, for
                    // example when flush() is called.
                    if (data) {
                        // Try to decode the data that we received.
                        self.buffer += self.decoder.decode(data, {
                            stream: true
                        });
                    }

                    function collectNextLine() {
                        var buffer = self.buffer;
                        var pos = 0;
                        while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
                            ++pos;
                        }
                        var line = buffer.substr(0, pos);
                        // Advance the buffer early in case we fail below.
                        if (buffer[pos] === '\r') {
                            ++pos;
                        }
                        if (buffer[pos] === '\n') {
                            ++pos;
                        }
                        self.buffer = buffer.substr(pos);
                        return line;
                    }

                    // 3.4 WebVTT region and WebVTT region settings syntax
                    function parseRegion(input) {
                        var settings = new Settings();

                        parseOptions(input, function(k, v) {
                            switch (k) {
                                case 'id':
                                    settings.set(k, v);
                                    break;
                                case 'width':
                                    settings.percent(k, v);
                                    break;
                                case 'lines':
                                    settings.integer(k, v);
                                    break;
                                case 'regionanchor':
                                case 'viewportanchor':
                                    var xy = v.split(',');
                                    if (xy.length !== 2) {
                                        break;
                                    }
                                    // We have to make sure both x and y parse, so use a temporary
                                    // settings object here.
                                    var anchor = new Settings();
                                    anchor.percent('x', xy[0]);
                                    anchor.percent('y', xy[1]);
                                    if (!anchor.has('x') || !anchor.has('y')) {
                                        break;
                                    }
                                    settings.set(k + 'X', anchor.get('x'));
                                    settings.set(k + 'Y', anchor.get('y'));
                                    break;
                                case 'scroll':
                                    settings.alt(k, v, ['up']);
                                    break;
                            }
                        }, /=/, /\s/);

                        // Create the region, using default values for any values that were not
                        // specified.
                        if (settings.has('id')) {
                            var region = new _vttRegion.Region();
                            region.width = settings.get('width', 100);
                            region.lines = settings.get('lines', 3);
                            region.regionAnchorX = settings.get('regionanchorX', 0);
                            region.regionAnchorY = settings.get('regionanchorY', 100);
                            region.viewportAnchorX = settings.get('viewportanchorX', 0);
                            region.viewportAnchorY = settings.get('viewportanchorY', 100);
                            region.scroll = settings.get('scroll', '');
                            // Register the region.
                            self.onregion && self.onregion(region);
                            // Remember the VTTRegion for later in case we parse any VTTCues that
                            // reference it.
                            self.regionList.push({
                                id: settings.get('id'),
                                region: region
                            });
                        }
                    }

                    // 3.2 WebVTT metadata header syntax
                    function parseHeader(input) {
                        parseOptions(input, function(k, v) {
                            switch (k) {
                                case 'Region':
                                    // 3.3 WebVTT region metadata header syntax
                                    parseRegion(v);
                                    break;
                            }
                        }, /:/);
                    }

                    // 5.1 WebVTT file parsing.
                    try {
                        var line;
                        if (self.state === 'INITIAL') {
                            // We can't start parsing until we have the first line.
                            if (!/\r\n|\n/.test(self.buffer)) {
                                return this;
                            }

                            line = collectNextLine();

                            var m = line.match(/^WEBVTT([ \t].*)?$/);
                            if (!m || !m[0]) {
                                throw new ParsingError(ParsingError.Errors.BadSignature);
                            }

                            self.state = 'HEADER';
                        }

                        var alreadyCollectedLine = false;
                        while (self.buffer) {
                            // We can't parse a line until we have the full line.
                            if (!/\r\n|\n/.test(self.buffer)) {
                                return this;
                            }

                            if (!alreadyCollectedLine) {
                                line = collectNextLine();
                            } else {
                                alreadyCollectedLine = false;
                            }

                            switch (self.state) {
                                case 'HEADER':
                                    // 13-18 - Allow a header (metadata) under the WEBVTT line.
                                    if (/:/.test(line)) {
                                        parseHeader(line);
                                    } else if (!line) {
                                        // An empty line terminates the header and starts the body (cues).
                                        self.state = 'ID';
                                    }
                                    continue;
                                case 'NOTE':
                                    // Ignore NOTE blocks.
                                    if (!line) {
                                        self.state = 'ID';
                                    }
                                    continue;
                                case 'ID':
                                    // Check for the start of NOTE blocks.
                                    if (/^NOTE($|[ \t])/.test(line)) {
                                        self.state = 'NOTE';
                                        break;
                                    }
                                    // 19-29 - Allow any number of line terminators, then initialize new cue values.
                                    if (!line) {
                                        continue;
                                    }
                                    self.cue = new _vttCue.Cue(0, 0, '');
                                    self.state = 'CUE';
                                    // 30-39 - Check if self line contains an optional identifier or timing data.
                                    if (line.indexOf('-->') === -1) {
                                        self.cue.id = line;
                                        continue;
                                    }
                                    // Process line as start of a cue.
                                    /*falls through*/
                                case 'CUE':
                                    // 40 - Collect cue timings and settings.
                                    try {
                                        parseCue(line, self.cue, self.regionList);
                                    } catch (e) {
                                        self.reportOrThrowError(e);
                                        // In case of an error ignore rest of the cue.
                                        self.cue = null;
                                        self.state = 'BADCUE';
                                        continue;
                                    }
                                    self.state = 'CUETEXT';
                                    continue;
                                case 'CUETEXT':
                                    var hasSubstring = line.indexOf('-->') !== -1;
                                    // 34 - If we have an empty line then report the cue.
                                    // 35 - If we have the special substring '-->' then report the cue,
                                    // but do not collect the line as we need to process the current
                                    // one as a new cue.
                                    if (!line || hasSubstring && (alreadyCollectedLine = true)) {
                                        // We are done parsing self cue.
                                        self.oncue && self.oncue(self.cue);
                                        self.cue = null;
                                        self.state = 'ID';
                                        continue;
                                    }
                                    if (self.cue.text) {
                                        self.cue.text += '\n';
                                    }
                                    self.cue.text += line;
                                    continue;
                                case 'BADCUE':
                                    // BADCUE
                                    // 54-62 - Collect and discard the remaining cue.
                                    if (!line) {
                                        self.state = 'ID';
                                    }
                                    continue;
                            }
                        }
                    } catch (e) {
                        self.reportOrThrowError(e);

                        // If we are currently parsing a cue, report what we have.
                        if (self.state === 'CUETEXT' && self.cue && self.oncue) {
                            self.oncue(self.cue);
                        }
                        self.cue = null;
                        // Enter BADWEBVTT state if header was not parsed correctly otherwise
                        // another exception occurred so enter BADCUE state.
                        self.state = self.state === 'INITIAL' ? 'BADWEBVTT' : 'BADCUE';
                    }
                    return this;
                },
                flush: function flush() {
                    var self = this;
                    try {
                        // Finish decoding the stream.
                        self.buffer += self.decoder.decode();
                        // Synthesize the end of the current cue or region.
                        if (self.cue || self.state === 'HEADER') {
                            self.buffer += '\n\n';
                            self.parse();
                        }
                        // If we've flushed, parsed, and we're still on the INITIAL state then
                        // that means we don't have enough of the stream to parse the first
                        // line.
                        if (self.state === 'INITIAL') {
                            throw new ParsingError(ParsingError.Errors.BadSignature);
                        }
                    } catch (e) {
                        self.reportOrThrowError(e);
                    }
                    self.onflush && self.onflush();
                    return this;
                }
            };

            exports.processCues = processCues;
            exports.convertCueToDOMTree = convertCueToDOMTree;
            exports.Parser = Parser;
            exports.StringDecoder = StringDecoder;

            /***/
        }),
        /* 22 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Base middleware.
             * @classdesc
             */
            var BaseMiddleware = function() {
                function BaseMiddleware() {
                    _classCallCheck(this, BaseMiddleware);
                }

                _createClass(BaseMiddleware, [{
                    key: "callNext",


                    /**
                     * Calls the next handler in the middleware chain.
                     * @param {Function} next - The next handler in the middleware chain.
                     * @returns {void}
                     */
                    value: function callNext(next) {
                        if (next) {
                            next();
                        }
                    }
                    /**
                     * Id of the middleware instance.
                     * @public
                     */

                }]);

                return BaseMiddleware;
            }();

            exports.default = BaseMiddleware;

            /***/
        }),
        /* 23 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var DrmScheme = exports.DrmScheme = {
                WIDEVINE: 'com.widevine.alpha',
                PLAYREADY: 'com.microsoft.playready',
                FAIRPLAY: 'com.apple.fairplay'
            };

            /***/
        }),
        /* 24 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * This class describes a player state.
             * @classdesc
             */
            var State = function() {

                /**
                 * @constructor
                 * @param {string} type - The type of the state.
                 */

                /**
                 * The duration that the player was in this state.
                 * @member
                 * @type {number}
                 * @private
                 */
                function State(type) {
                    _classCallCheck(this, State);

                    this.type = type;
                    this._duration = 0;
                    this._timestamp = Date.now() / 1000;
                }

                /**
                 * Getter for the duration of the state.
                 * @returns {number} - The duration of the state
                 */

                /**
                 * The timestamp that this state started.
                 * @member
                 * @type {number}
                 * @private
                 */

                /**
                 * The type of the state.
                 * Can be one of those describes in states.js
                 * @member
                 * @type {string}
                 * @public
                 */


                _createClass(State, [{
                    key: "duration",
                    get: function get() {
                            return this._duration;
                        }

                        /**
                         * Setter for the duration of the state.
                         * @param {number} endTime - The timestamp of the next state.
                         */
                        ,
                    set: function set(endTime) {
                        this._duration = endTime - this._timestamp;
                    }
                }]);

                return State;
            }();

            exports.default = State;

            /***/
        }),
        /* 25 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var StreamType = {
                DASH: 'dash',
                HLS: 'hls',
                PROGRESSIVE: 'progressive'
            };

            exports.StreamType = StreamType;

            /***/
        }),
        /* 26 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var EngineType = {
                HTML5: 'html5',
                FLASH: 'flash',
                SILVERLIGHT: 'silverlight',
                CAST: 'cast'
            };

            exports.EngineType = EngineType;

            /***/
        }),
        /* 27 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var MediaType = {
                VOD: 'Vod',
                LIVE: 'Live',
                AUDIO: 'Audio',
                UNKNOWN: 'Unknown'
            };

            exports.MediaType = MediaType;

            /***/
        }),
        /* 28 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var AbrMode = {
                MANUAL: 'manual',
                AUTO: 'auto'
            };

            exports.AbrMode = AbrMode;

            /***/
        }),
        /* 29 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var CorsType = {
                ANONYMOUS: 'anonymous',
                USE_CREDENTIALS: 'use-credentials'
            };

            exports.CorsType = CorsType;

            /***/
        }),
        /* 30 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.EngineProvider = exports.unRegisterEngine = exports.registerEngine = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _html = __webpack_require__(62);

            var _html2 = _interopRequireDefault(_html);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Engine Provider
             * @classdesc
             */
            var EngineProvider = function() {
                function EngineProvider() {
                    _classCallCheck(this, EngineProvider);
                }

                _createClass(EngineProvider, null, [{
                    key: 'register',


                    /**
                     * Add an engine to the registry.
                     * @function register
                     * @param {string} id - The engine id.
                     * @param {IEngine} engine -  The engine to register.
                     * @static
                     * @returns {void}
                     */

                    /**
                     * The logger of the Engine provider.
                     * @member {any} _logger
                     * @static
                     * @private
                     */
                    value: function register(id, engine) {
                        if (id && !EngineProvider._engineProviders[id]) {
                            EngineProvider._logger.debug('Engine <' + id + '> has been registered successfully');
                            EngineProvider._engineProviders[id] = engine;
                        } else {
                            EngineProvider._logger.debug('Engine <' + id + '> is already registered, do not register again');
                        }
                    }

                    /**
                     * Remove an engine from the registry.
                     * @function unRegister
                     * @param {string} id - The engine id.
                     * @static
                     * @returns {void}
                     */


                    /**
                     * The Engine registry.
                     * @member {Object} _engineProviders
                     * @static
                     * @private
                     */

                }, {
                    key: 'unRegister',
                    value: function unRegister(id) {
                        if (EngineProvider._engineProviders[id]) {
                            EngineProvider._logger.debug('Unregistered <' + id + '> Engine');
                            delete EngineProvider._engineProviders[id];
                        }
                    }

                    /**
                     * Get the appropriate Engines.
                     * @function getEngines
                     * @returns {Array<IEngine>} - The Array of engines, or null if such doesn't exists.
                     * @static
                     */

                }, {
                    key: 'getEngines',
                    value: function getEngines() {
                        return Object.keys(EngineProvider._engineProviders).map(function(key) {
                            return EngineProvider._engineProviders[key];
                        });
                    }

                    /**
                     * Destroys and clear the registered engines
                     * @static
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        EngineProvider._engineProviders = {};
                    }
                }]);

                return EngineProvider;
            }();

            EngineProvider._logger = (0, _logger2.default)('EngineProvider');
            EngineProvider._engineProviders = {};


            if (_html2.default.isSupported()) {
                EngineProvider.register(_html2.default.id, _html2.default);
            }

            var registerEngine = EngineProvider.register;
            var unRegisterEngine = EngineProvider.unRegister;
            exports.registerEngine = registerEngine;
            exports.unRegisterEngine = unRegisterEngine;
            exports.EngineProvider = EngineProvider;

            /***/
        }),
        /* 31 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.registerMediaSourceAdapter = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _nativeAdapter = __webpack_require__(63);

            var _nativeAdapter2 = _interopRequireDefault(_nativeAdapter);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Media source provider
             * @classdesc
             */
            var MediaSourceProvider = function() {
                function MediaSourceProvider() {
                    _classCallCheck(this, MediaSourceProvider);
                }

                _createClass(MediaSourceProvider, null, [{
                    key: 'register',


                    /**
                     * Add a media source adapter to the registry.
                     * @function register
                     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to register.
                     * @static
                     * @returns {void}
                     */

                    /**
                     * The media source adapter registry.
                     * @member {Array<IMediaSourceAdapter>} _mediaSourceAdapters
                     * @static
                     * @private
                     */
                    value: function register(mediaSourceAdapter) {
                        if (mediaSourceAdapter) {
                            if (!MediaSourceProvider._mediaSourceAdapters.includes(mediaSourceAdapter)) {
                                MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.id + '> has been registered successfully');
                                MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
                            } else {
                                MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.id + '> is already registered, do not register again');
                            }
                        }
                    }

                    /**
                     * Remove a media source adapter from the registry.
                     * @function unRegister
                     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to unRegister.
                     * @static
                     * @returns {void}
                     */

                    /**
                     * The selected adapter for playback.
                     * @type {null|IMediaSourceAdapter}
                     * @static
                     * @private
                     */

                    /**
                     * The logger of the media source provider.
                     * @member {any} _logger
                     * @static
                     * @private
                     */

                }, {
                    key: 'unRegister',
                    value: function unRegister(mediaSourceAdapter) {
                        var index = MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter);
                        if (index > -1) {
                            MediaSourceProvider._logger.debug('Unregistered <' + mediaSourceAdapter.id + '> adapter');
                            MediaSourceProvider._mediaSourceAdapters.splice(index, 1);
                        }
                    }

                    /**
                     * Checks if the a media source adapter can play a given source.
                     * @param {PKMediaSourceObject} source - The source object to check.
                     * @param {boolean} [preferNative=true] - prefer native flag.
                     * @param {PKDrmConfigObject} drmConfig - The drm config.
                     * @returns {boolean} - Whether a media source adapter can play the source.
                     * @public
                     * @static
                     */

                }, {
                    key: 'canPlaySource',
                    value: function canPlaySource(source) {
                        var preferNative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                        var drmConfig = arguments[2];

                        MediaSourceProvider._orderMediaSourceAdapters(preferNative);
                        var mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;
                        if (source && source.mimetype) {
                            for (var i = 0; i < mediaSourceAdapters.length; i++) {
                                if (mediaSourceAdapters[i].canPlayType(source.mimetype) && (!source.drmData || mediaSourceAdapters[i].canPlayDrm(source.drmData, drmConfig))) {
                                    MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
                                    MediaSourceProvider._logger.debug('Selected adapter is <' + MediaSourceProvider._selectedAdapter.id + '>');
                                    return true;
                                }
                            }
                        }
                        return false;
                    }

                    /**
                     * Orders the media source adapters array according to the preferNative value.
                     * @param {boolean} preferNative - Whether to prefer native playback.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_orderMediaSourceAdapters',
                    value: function _orderMediaSourceAdapters(preferNative) {
                        MediaSourceProvider._mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters.filter(function(mse) {
                            return mse.id !== 'NativeAdapter';
                        });
                        if (preferNative) {
                            MediaSourceProvider._mediaSourceAdapters.unshift(_nativeAdapter2.default);
                        } else {
                            MediaSourceProvider._mediaSourceAdapters.push(_nativeAdapter2.default);
                        }
                    }

                    /**
                     * Get the appropriate media source adapter to the video source.
                     * @function getMediaSourceAdapter
                     * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @param {Object} config - The player configuration.
                     * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists.
                     * @static
                     */

                }, {
                    key: 'getMediaSourceAdapter',
                    value: function getMediaSourceAdapter(videoElement, source, config) {
                        if (videoElement && source && config) {
                            if (!MediaSourceProvider._selectedAdapter) {
                                MediaSourceProvider.canPlaySource(source, true, config.drm);
                            }
                            return MediaSourceProvider._selectedAdapter ? MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config) : null;
                        }
                        return null;
                    }

                    /**
                     * Destroys the media source adapter provider necessary props.
                     * @static
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        MediaSourceProvider._selectedAdapter = null;
                    }
                }]);

                return MediaSourceProvider;
            }();

            MediaSourceProvider._logger = (0, _logger2.default)('MediaSourceProvider');
            MediaSourceProvider._mediaSourceAdapters = [_nativeAdapter2.default];
            MediaSourceProvider._selectedAdapter = null;
            exports.default = MediaSourceProvider;


            var registerMediaSourceAdapter = MediaSourceProvider.register;
            exports.registerMediaSourceAdapter = registerMediaSourceAdapter;

            /***/
        }),
        /* 32 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _eventType = __webpack_require__(3);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            var _videoTrack = __webpack_require__(10);

            var _videoTrack2 = _interopRequireDefault(_videoTrack);

            var _audioTrack = __webpack_require__(11);

            var _audioTrack2 = _interopRequireDefault(_audioTrack);

            var _textTrack = __webpack_require__(9);

            var _textTrack2 = _interopRequireDefault(_textTrack);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            /* eslint-disable no-unused-vars */


            var BaseMediaSourceAdapter = function(_FakeEventTarget) {
                _inherits(BaseMediaSourceAdapter, _FakeEventTarget);

                _createClass(BaseMediaSourceAdapter, null, [{
                    key: 'isSupported',


                    /**
                     * Checks if the media source adapter is supported.
                     * @function isSupported
                     * @returns {boolean} - Whether the media source adapter is supported.
                     * @static
                     */

                    /**
                     * Passing the getLogger function to the actual media source adapter.
                     * @type {Function}
                     * @static
                     */
                    value: function isSupported() {
                        return true;
                    }

                    /**
                     * @constructor
                     * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
                     * @param {PKMediaSourceObject} source - The source object.
                     * @param {Object} config - The media source adapter configuration.
                     */


                    /**
                     * The adapter capabilities
                     * @private
                     */


                    /**
                     * The adapter config.
                     * @member {Object} _config
                     * @private
                     */


                    /**
                     * The source object.
                     * @member {PKMediaSourceObject} _sourceObj
                     * @private
                     */


                    /**
                     * The dom video element.
                     * @member {HTMLVideoElement} _videoElement
                     * @private
                     */

                }]);

                function BaseMediaSourceAdapter(videoElement, source) {
                    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                    _classCallCheck(this, BaseMediaSourceAdapter);

                    var _this = _possibleConstructorReturn(this, (BaseMediaSourceAdapter.__proto__ || Object.getPrototypeOf(BaseMediaSourceAdapter)).call(this));

                    _this._capabilities = {
                        fpsControl: false
                    };

                    _this._videoElement = videoElement;
                    _this._sourceObj = source;
                    _this._config = config;
                    _this._handleLiveTimeUpdate();
                    return _this;
                }

                /**
                 * Destroys the media source adapter.
                 * @function destroy
                 * @returns {void}
                 */


                _createClass(BaseMediaSourceAdapter, [{
                    key: 'destroy',
                    value: function destroy() {
                        this._sourceObj = null;
                        this._config = {};
                        return Promise.resolve();
                    }

                    /**
                     * Triggers the appropriate track changed event.
                     * @param {Track} track - The selected track.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onTrackChanged',
                    value: function _onTrackChanged(track) {
                        if (track instanceof _videoTrack2.default) {
                            this._trigger(_eventType.CustomEventType.VIDEO_TRACK_CHANGED, {
                                selectedVideoTrack: track
                            });
                        } else if (track instanceof _audioTrack2.default) {
                            this._trigger(_eventType.CustomEventType.AUDIO_TRACK_CHANGED, {
                                selectedAudioTrack: track
                            });
                        } else if (track instanceof _textTrack2.default) {
                            this._trigger(_eventType.CustomEventType.TEXT_TRACK_CHANGED, {
                                selectedTextTrack: track
                            });
                        }
                    }

                    /**
                     * Dispatch an adapter event forward.
                     * @param {string} name - The name of the event.
                     * @param {?Object} payload - The event payload.
                     * @returns {void}
                     */

                }, {
                    key: '_trigger',
                    value: function _trigger(name, payload) {
                        this.dispatchEvent(new _fakeEvent2.default(name, payload));
                    }

                    /** Must implemented methods by the derived media source adapter **/

                }, {
                    key: 'load',
                    value: function load() {
                        return BaseMediaSourceAdapter._throwNotImplementedError('load');
                    }
                }, {
                    key: 'selectVideoTrack',
                    value: function selectVideoTrack(videoTrack) {
                        return BaseMediaSourceAdapter._throwNotImplementedError('selectVideoTrack');
                    }
                }, {
                    key: 'selectAudioTrack',
                    value: function selectAudioTrack(audioTrack) {
                        BaseMediaSourceAdapter._throwNotImplementedError('selectAudioTrack');
                    }
                }, {
                    key: 'selectTextTrack',
                    value: function selectTextTrack(textTrack) {
                        BaseMediaSourceAdapter._throwNotImplementedError('selectTextTrack');
                    }
                }, {
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {
                        BaseMediaSourceAdapter._throwNotImplementedError('hideTextTrack');
                    }
                }, {
                    key: 'enableAdaptiveBitrate',
                    value: function enableAdaptiveBitrate() {
                        BaseMediaSourceAdapter._throwNotImplementedError('enableAdaptiveBitrate');
                    }
                }, {
                    key: 'isAdaptiveBitrateEnabled',
                    value: function isAdaptiveBitrateEnabled() {
                        return BaseMediaSourceAdapter._throwNotImplementedError('isAdaptiveBitrateEnabled');
                    }
                }, {
                    key: '_getLiveEdge',
                    value: function _getLiveEdge() {
                        return BaseMediaSourceAdapter._throwNotImplementedError('_getLiveEdge');
                    }
                }, {
                    key: 'seekToLiveEdge',
                    value: function seekToLiveEdge() {
                        BaseMediaSourceAdapter._throwNotImplementedError('seekToLiveEdge');
                    }
                }, {
                    key: 'isLive',
                    value: function isLive() {
                        return BaseMediaSourceAdapter._throwNotImplementedError('isLive');
                    }
                }, {
                    key: 'setMaxBitrate',
                    value: function setMaxBitrate(bitrate) {
                        return;
                    }

                    /**
                     * Handling live time update (as is not triggered when video is paused, but the current time changed)
                     * @function _handleLiveTimeUpdate
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleLiveTimeUpdate',
                    value: function _handleLiveTimeUpdate() {
                        var _this2 = this;

                        this._videoElement.addEventListener(_eventType.Html5EventType.DURATION_CHANGE, function() {
                            if (_this2.isLive() && _this2._videoElement.paused) {
                                _this2._trigger(_eventType.Html5EventType.TIME_UPDATE);
                            }
                        });
                    }

                    /**
                     * Checks if the adapter can recover from an error triggered by the video element error
                     * @param {Event} event - the html5 video element error
                     * @returns {boolean} - if it can recover or not
                     * @public
                     */

                }, {
                    key: 'handleMediaError',
                    value: function handleMediaError(event) {
                        return false;
                    }
                }, {
                    key: 'getStartTimeOfDvrWindow',
                    value: function getStartTimeOfDvrWindow() {
                        return BaseMediaSourceAdapter._throwNotImplementedError('getStartTimeOfDvrWindow');
                    }

                    /**
                     * throw a run time error
                     * @param {string} name of the unimplemented function
                     * @returns {any} void/string/boolean
                     */

                }, {
                    key: 'currentTime',


                    /**
                     * Get the current time in seconds.
                     * @returns {Number} - The current playback time.
                     * @public
                     */
                    get: function get() {
                            if (this.isLive()) {
                                return this._videoElement.currentTime - this.getStartTimeOfDvrWindow();
                            } else {
                                return this._videoElement.currentTime;
                            }
                        }

                        /**
                         * Set the current time in seconds.
                         * @param {Number} to - The number to set in seconds.
                         * @public
                         * @returns {void}
                         */
                        ,
                    set: function set(to) {
                        if (this.isLive()) {
                            to += this.getStartTimeOfDvrWindow();
                        }
                        this._videoElement.currentTime = to;
                    }

                    /**
                     * Get the duration in seconds.
                     * @returns {Number} - The playback duration.
                     * @public
                     */

                }, {
                    key: 'duration',
                    get: function get() {
                        if (this.isLive()) {
                            return this._getLiveEdge() - this.getStartTimeOfDvrWindow();
                        } else {
                            return this._videoElement.duration;
                        }
                    }

                    /**
                     * Getter for the src that the adapter plays on the video element.
                     * In case the adapter preformed a load it will return the manifest url.
                     * @public
                     * @returns {string} - The src url.
                     */

                }, {
                    key: 'src',
                    get: function get() {
                        if (this._loadPromise && this._sourceObj) {
                            return this._sourceObj.url;
                        }
                        return '';
                    }
                }, {
                    key: 'capabilities',
                    get: function get() {
                        return this._capabilities;
                    }
                }], [{
                    key: 'canPlayType',
                    value: function canPlayType(mimeType, preferNative) {
                        return BaseMediaSourceAdapter._throwNotImplementedError('static canPlayType');
                    }
                }, {
                    key: '_throwNotImplementedError',
                    value: function _throwNotImplementedError(name) {
                        throw new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, name);
                    }
                }]);

                return BaseMediaSourceAdapter;
            }(_fakeEventTarget2.default);

            BaseMediaSourceAdapter.getLogger = _logger2.default;
            exports.default = BaseMediaSourceAdapter;

            /***/
        }),
        /* 33 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            /* eslint-disable no-unused-vars */


            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _drmSupport = __webpack_require__(66);

            var _drmSupport2 = _interopRequireDefault(_drmSupport);

            var _drmScheme = __webpack_require__(23);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var BaseDrmProtocol = function() {
                function BaseDrmProtocol() {
                    _classCallCheck(this, BaseDrmProtocol);
                }

                _createClass(BaseDrmProtocol, null, [{
                    key: 'isConfigured',
                    value: function isConfigured(drmData, drmConfig) {
                        throw new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'static isConfigured');
                    }
                }, {
                    key: 'canPlayDrm',
                    value: function canPlayDrm(drmData) {
                        throw new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'static canPlayDrm');
                    }
                }, {
                    key: 'setDrmPlayback',
                    value: function setDrmPlayback() {
                        throw new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.PLAYER, _error2.default.Code.RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED, 'static setDrmPlayback');
                    }
                }]);

                return BaseDrmProtocol;
            }();

            BaseDrmProtocol.getLogger = _logger2.default;
            BaseDrmProtocol.DrmSupport = _drmSupport2.default;
            BaseDrmProtocol.DrmScheme = _drmScheme.DrmScheme;
            exports.default = BaseDrmProtocol;

            /***/
        }),
        /* 34 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var AdBreakType = {
                PRE: 'preroll',
                MID: 'midroll',
                POST: 'postroll',
                OVERLAY: 'overlay'
            };

            exports.AdBreakType = AdBreakType;

            /***/
        }),
        /* 35 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var AdTagType = {
                VAST: 'vast',
                VMAP: 'vmap'
            };

            exports.AdTagType = AdTagType;

            /***/
        }),
        /* 36 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AdsController = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            var _adEventType = __webpack_require__(16);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _eventType = __webpack_require__(3);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _adBreak = __webpack_require__(37);

            var _ad = __webpack_require__(38);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * @class AdsController
             * @param {Player} player - The player.
             * @param {IAdsController} adsPluginController - The controller of the current ads plugin instance.
             */
            var AdsController = function(_FakeEventTarget) {
                _inherits(AdsController, _FakeEventTarget);

                function AdsController(player, adsPluginController) {
                    _classCallCheck(this, AdsController);

                    var _this = _possibleConstructorReturn(this, (AdsController.__proto__ || Object.getPrototypeOf(AdsController)).call(this));

                    _this._player = player;
                    _this._adsPluginController = adsPluginController;
                    _this._initMembers();
                    _this._addBindings();
                    return _this;
                }

                /**
                 * @instance
                 * @memberof AdsController
                 * @returns {boolean} - Whether all ads completed.
                 */


                _createClass(AdsController, [{
                    key: 'isAdBreak',


                    /**
                     * @instance
                     * @memberof AdsController
                     * @returns {boolean} - Whether we're in an ad break.
                     */
                    value: function isAdBreak() {
                        return !!this._adBreak;
                    }

                    /**
                     * @instance
                     * @memberof AdsController
                     * @returns {Array<number>} - The ad breaks layout (cue points).
                     */

                }, {
                    key: 'getAdBreaksLayout',
                    value: function getAdBreaksLayout() {
                        return this._adBreaksLayout;
                    }

                    /**
                     * @instance
                     * @memberof AdsController
                     * @returns {?AdBreak} - Gets the current ad break data.
                     */

                }, {
                    key: 'getAdBreak',
                    value: function getAdBreak() {
                        return this._adBreak;
                    }

                    /**
                     * @instance
                     * @memberof AdsController
                     * @returns {?Ad} - Gets the current ad data.
                     */

                }, {
                    key: 'getAd',
                    value: function getAd() {
                        return this._ad;
                    }

                    /**
                     * Skip on an ad.
                     * @instance
                     * @memberof AdsController
                     * @returns {void}
                     */

                }, {
                    key: 'skipAd',
                    value: function skipAd() {
                        this._adsPluginController.skipAd();
                    }

                    /**
                     * Play an ad on demand.
                     * @param {string} adTagUrl - The ad tag url to play.
                     * @instance
                     * @memberof AdsController
                     * @returns {void}
                     */

                }, {
                    key: 'playAdNow',
                    value: function playAdNow(adTagUrl) {
                        this._adsPluginController.playAdNow(adTagUrl);
                    }
                }, {
                    key: '_initMembers',
                    value: function _initMembers() {
                        this._allAdsCompleted = true;
                        this._adBreaksLayout = [];
                        this._adBreak = null;
                        this._ad = null;
                    }
                }, {
                    key: '_addBindings',
                    value: function _addBindings() {
                        var _this2 = this;

                        this._eventManager = new _eventManager2.default();
                        this._eventManager.listen(this._player, _adEventType.AdEventType.AD_MANIFEST_LOADED, function(event) {
                            return _this2._onAdManifestLoaded(event);
                        });
                        this._eventManager.listen(this._player, _adEventType.AdEventType.AD_BREAK_START, function(event) {
                            return _this2._onAdBreakStart(event);
                        });
                        this._eventManager.listen(this._player, _adEventType.AdEventType.AD_LOADED, function(event) {
                            return _this2._onAdLoaded(event);
                        });
                        this._eventManager.listen(this._player, _adEventType.AdEventType.AD_BREAK_END, function() {
                            return _this2._onAdBreakEnd();
                        });
                        this._eventManager.listen(this._player, _adEventType.AdEventType.ALL_ADS_COMPLETED, function(event) {
                            return _this2._onAllAdsCompleted(event);
                        });
                        this._eventManager.listen(this._player, _adEventType.AdEventType.AD_ERROR, function(event) {
                            return _this2._onAdError(event);
                        });
                        this._eventManager.listen(this._player, _eventType.CustomEventType.PLAYER_RESET, function() {
                            return _this2._reset();
                        });
                        this._eventManager.listen(this._player, _eventType.Html5EventType.ENDED, function() {
                            return _this2._onEnded();
                        });
                    }
                }, {
                    key: '_onAdManifestLoaded',
                    value: function _onAdManifestLoaded(event) {
                        this._adBreaksLayout = event.payload.adBreaksPosition;
                        this._allAdsCompleted = false;
                    }
                }, {
                    key: '_onAdBreakStart',
                    value: function _onAdBreakStart(event) {
                        this._adBreak = event.payload.adBreak;
                    }
                }, {
                    key: '_onAdLoaded',
                    value: function _onAdLoaded(event) {
                        this._ad = event.payload.ad;
                    }
                }, {
                    key: '_onAdBreakEnd',
                    value: function _onAdBreakEnd() {
                        this._adBreak = null;
                        this._ad = null;
                    }
                }, {
                    key: '_onAllAdsCompleted',
                    value: function _onAllAdsCompleted(event) {
                        this._allAdsCompleted = true;
                        this.dispatchEvent(event);
                    }
                }, {
                    key: '_onAdError',
                    value: function _onAdError(event) {
                        if (event.payload.severity === _error2.default.Severity.CRITICAL) {
                            this._allAdsCompleted = true;
                        }
                    }
                }, {
                    key: '_onEnded',
                    value: function _onEnded() {
                        if (!this._allAdsCompleted && !this._adBreaksLayout.includes(-1)) {
                            this._allAdsCompleted = true;
                        }
                    }
                }, {
                    key: '_reset',
                    value: function _reset() {
                        this._initMembers();
                    }
                }, {
                    key: 'allAdsCompleted',
                    get: function get() {
                        return this._allAdsCompleted;
                    }
                }]);

                return AdsController;
            }(_fakeEventTarget2.default);

            exports.AdsController = AdsController;

            /***/
        }),
        /* 37 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * @class AdBreak
             * @param {PKAdBreakOptions} options - Ad break data options.
             */
            var AdBreak = function() {
                function AdBreak(options) {
                    _classCallCheck(this, AdBreak);

                    this._type = options.type;
                    this._position = options.position;
                    this._numAds = options.numAds;
                }

                /**
                 * @instance
                 * @memberof AdBreak
                 * @return {string} - Ad break type - pre/mid/post.
                 */


                _createClass(AdBreak, [{
                    key: "toJSON",
                    value: function toJSON() {
                        return {
                            type: this.type,
                            position: this.position,
                            numAds: this.numAds
                        };
                    }
                }, {
                    key: "type",
                    get: function get() {
                        return this._type;
                    }

                    /**
                     * @instance
                     * @memberof AdBreak
                     * @return {string} - Ad break position on the playback timeline.
                     */

                }, {
                    key: "position",
                    get: function get() {
                        return this._position;
                    }

                    /**
                     * @instance
                     * @memberof AdBreak
                     * @return {string} - The number of ads inside the ad break.
                     */

                }, {
                    key: "numAds",
                    get: function get() {
                        return this._numAds;
                    }
                }]);

                return AdBreak;
            }();

            exports.AdBreak = AdBreak;

            /***/
        }),
        /* 38 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * @class Ad
             * @param {string} id - Ad ID.
             * @param {PKAdOptions} options - Ad data options.
             */
            var Ad = function() {
                function Ad(id, options) {
                    _classCallCheck(this, Ad);

                    this._id = id;
                    this._url = options.url;
                    this._contentType = options.contentType;
                    this._title = options.title;
                    this._position = options.position;
                    this._duration = options.duration;
                    this._clickThroughUrl = options.clickThroughUrl;
                    this._posterUrl = options.posterUrl;
                    this._skipOffset = options.skipOffset;
                    this._linear = options.linear;
                    this._width = options.width || 0;
                    this._height = options.height || 0;
                    this._bitrate = options.bitrate || 0;
                }

                /**
                 * @instance
                 * @memberof Ad
                 * @return {string} - Ad ID.
                 */


                _createClass(Ad, [{
                    key: "toJSON",
                    value: function toJSON() {
                        return {
                            id: this.id,
                            url: this.url,
                            contentType: this.contentType,
                            title: this.title,
                            position: this.position,
                            duration: this.duration,
                            clickThroughUrl: this.clickThroughUrl,
                            posterUrl: this.posterUrl,
                            skipOffset: this.skipOffset,
                            linear: this.linear,
                            skippable: this.skippable,
                            width: this.width,
                            height: this.height,
                            bitrate: this.bitrate
                        };
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad ID.
                     */

                }, {
                    key: "contentType",
                    get: function get() {
                        return this._contentType;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad URL.
                     */

                }, {
                    key: "url",
                    get: function get() {
                        return this._url;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad title.
                     */

                }, {
                    key: "title",
                    get: function get() {
                        return this._title;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad position inside the ad break.
                     */

                }, {
                    key: "position",
                    get: function get() {
                        return this._position;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad duration.
                     */

                }, {
                    key: "duration",
                    get: function get() {
                        return this._duration;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad click through URL.
                     */

                }, {
                    key: "clickThroughUrl",
                    get: function get() {
                        return this._clickThroughUrl;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad poster URL.
                     */

                }, {
                    key: "posterUrl",
                    get: function get() {
                        return this._posterUrl;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad skip offset.
                     */

                }, {
                    key: "skipOffset",
                    get: function get() {
                        return this._skipOffset;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Whether the ad is linear.
                     */

                }, {
                    key: "linear",
                    get: function get() {
                        return this._linear;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad width.
                     */

                }, {
                    key: "width",
                    get: function get() {
                        return this._width;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad height.
                     */

                }, {
                    key: "height",
                    get: function get() {
                        return this._height;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Ad bitrate.
                     */

                }, {
                    key: "bitrate",
                    get: function get() {
                        return this._bitrate;
                    }

                    /**
                     * @instance
                     * @memberof Ad
                     * @return {string} - Whether the ad is skippable or not.
                     */

                }, {
                    key: "skippable",
                    get: function get() {
                        return !!(this.skipOffset && this.skipOffset > 0);
                    }
                }]);

                return Ad;
            }();

            exports.Ad = Ad;

            /***/
        }),
        /* 39 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setLogLevel = exports.getLogLevel = exports.LogLevel = exports.getLogger = exports.MimeType = exports.DrmScheme = exports.CorsType = exports.LogLevelType = exports.AbrMode = exports.StreamType = exports.MediaType = exports.EngineType = exports.TrackType = exports.StateType = exports.EventType = exports.AdsController = exports.AdTagType = exports.AdBreakType = exports.AdBreak = exports.Ad = exports.unRegisterEngine = exports.registerEngine = exports.setCapabilities = exports.getCapabilities = exports.BaseDrmProtocol = exports.State = exports.Env = exports.PLAYER_NAME = exports.VERSION = exports.EventManager = exports.FakeEventTarget = exports.FakeEvent = exports.Error = exports.Utils = exports.TextStyle = exports.TextTrack = exports.AudioTrack = exports.VideoTrack = exports.Track = exports.BaseMiddleware = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerMediaSourceAdapter = undefined;
            exports.loadPlayer = loadPlayer;

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            var _baseMediaSourceAdapter = __webpack_require__(32);

            var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

            var _mediaSourceProvider = __webpack_require__(31);

            var _engineProvider = __webpack_require__(30);

            var _pluginManager = __webpack_require__(17);

            var _baseDrmProtocol = __webpack_require__(33);

            var _baseDrmProtocol2 = _interopRequireDefault(_baseDrmProtocol);

            var _baseMiddleware = __webpack_require__(22);

            var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

            var _basePlugin = __webpack_require__(18);

            var _basePlugin2 = _interopRequireDefault(_basePlugin);

            var _state = __webpack_require__(24);

            var _state2 = _interopRequireDefault(_state);

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            var _videoTrack = __webpack_require__(10);

            var _videoTrack2 = _interopRequireDefault(_videoTrack);

            var _audioTrack = __webpack_require__(11);

            var _audioTrack2 = _interopRequireDefault(_audioTrack);

            var _textTrack = __webpack_require__(9);

            var _textTrack2 = _interopRequireDefault(_textTrack);

            var _textStyle = __webpack_require__(20);

            var _textStyle2 = _interopRequireDefault(_textStyle);

            var _env = __webpack_require__(12);

            var _env2 = _interopRequireDefault(_env);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _stateType = __webpack_require__(19);

            var _trackType = __webpack_require__(14);

            var _streamType = __webpack_require__(25);

            var _engineType = __webpack_require__(26);

            var _mediaType = __webpack_require__(27);

            var _eventType = __webpack_require__(3);

            var _abrModeType = __webpack_require__(28);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _corsTypes = __webpack_require__(29);

            var _drmScheme = __webpack_require__(23);

            var _mimeType = __webpack_require__(76);

            var _ad = __webpack_require__(38);

            var _adBreak = __webpack_require__(37);

            var _adBreakType = __webpack_require__(34);

            var _adTagType = __webpack_require__(35);

            var _adsController = __webpack_require__(36);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            /**
             * @param {Object} config - The configuration of the player
             * @returns {Player} - The player instance
             */
            function loadPlayer(config) {
                return new _player2.default(config || {});
            }

            // Export the media source adapters necessary utils
            exports.registerMediaSourceAdapter = _mediaSourceProvider.registerMediaSourceAdapter;
            exports.BaseMediaSourceAdapter = _baseMediaSourceAdapter2.default;

            // Export the plugin framework

            exports.registerPlugin = _pluginManager.registerPlugin;
            exports.BasePlugin = _basePlugin2.default;
            exports.BaseMiddleware = _baseMiddleware2.default;

            // Export the tracks classes

            exports.Track = _track2.default;
            exports.VideoTrack = _videoTrack2.default;
            exports.AudioTrack = _audioTrack2.default;
            exports.TextTrack = _textTrack2.default;
            exports.TextStyle = _textStyle2.default;

            // Export utils library

            exports.Utils = Utils;

            // Export Error class

            exports.Error = _error2.default;

            // Export Event system

            exports.FakeEvent = _fakeEvent2.default;
            exports.FakeEventTarget = _fakeEventTarget2.default;
            exports.EventManager = _eventManager2.default;

            // Export version

            exports.VERSION = "0.45.8";

            // Export player name

            exports.PLAYER_NAME = "@playkit-js/playkit-js";

            // Export environment data

            exports.Env = _env2.default;

            // Export State class

            exports.State = _state2.default;

            // Export base DRM protocol

            exports.BaseDrmProtocol = _baseDrmProtocol2.default;

            // Export the player capabilities

            var getCapabilities = _player2.default.getCapabilities;
            var setCapabilities = _player2.default.setCapabilities;

            // Export capabilities utils
            exports.getCapabilities = getCapabilities;
            exports.setCapabilities = setCapabilities;

            // Export engine framework

            exports.registerEngine = _engineProvider.registerEngine;
            exports.unRegisterEngine = _engineProvider.unRegisterEngine;

            // Export ads framework

            exports.Ad = _ad.Ad;
            exports.AdBreak = _adBreak.AdBreak;
            exports.AdBreakType = _adBreakType.AdBreakType;
            exports.AdTagType = _adTagType.AdTagType;
            exports.AdsController = _adsController.AdsController;

            // Export enums

            exports.EventType = _eventType.EventType;
            exports.StateType = _stateType.StateType;
            exports.TrackType = _trackType.TrackType;
            exports.EngineType = _engineType.EngineType;
            exports.MediaType = _mediaType.MediaType;
            exports.StreamType = _streamType.StreamType;
            exports.AbrMode = _abrModeType.AbrMode;
            exports.LogLevelType = _logger.LogLevelType;
            exports.CorsType = _corsTypes.CorsType;
            exports.DrmScheme = _drmScheme.DrmScheme;
            exports.MimeType = _mimeType.MimeType;

            // Export logger utils

            exports.getLogger = _logger2.default;
            exports.LogLevel = _logger.LogLevel;
            exports.getLogLevel = _logger.getLogLevel;
            exports.setLogLevel = _logger.setLogLevel;
            exports.default = loadPlayer;

            /***/
        }),
        /* 40 */
        /***/
        (function(module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_RESULT__;
            /**
             * UAParser.js v0.7.13
             * Lightweight JavaScript-based User-Agent string parser
             * https://github.com/faisalman/ua-parser-js
             *
             * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
             * Dual licensed under GPLv2 & MIT
             */

            (function(window, undefined) {

                'use strict';

                //////////////
                // Constants
                /////////////


                var LIBVERSION = '0.7.13',
                    EMPTY = '',
                    UNKNOWN = '?',
                    FUNC_TYPE = 'function',
                    UNDEF_TYPE = 'undefined',
                    OBJ_TYPE = 'object',
                    STR_TYPE = 'string',
                    MAJOR = 'major', // deprecated
                    MODEL = 'model',
                    NAME = 'name',
                    TYPE = 'type',
                    VENDOR = 'vendor',
                    VERSION = 'version',
                    ARCHITECTURE = 'architecture',
                    CONSOLE = 'console',
                    MOBILE = 'mobile',
                    TABLET = 'tablet',
                    SMARTTV = 'smarttv',
                    WEARABLE = 'wearable',
                    EMBEDDED = 'embedded';


                ///////////
                // Helper
                //////////


                var util = {
                    extend: function(regexes, extensions) {
                        var margedRegexes = {};
                        for (var i in regexes) {
                            if (extensions[i] && extensions[i].length % 2 === 0) {
                                margedRegexes[i] = extensions[i].concat(regexes[i]);
                            } else {
                                margedRegexes[i] = regexes[i];
                            }
                        }
                        return margedRegexes;
                    },
                    has: function(str1, str2) {
                        if (typeof str1 === "string") {
                            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                        } else {
                            return false;
                        }
                    },
                    lowerize: function(str) {
                        return str.toLowerCase();
                    },
                    major: function(version) {
                        return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                    },
                    trim: function(str) {
                        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    }
                };


                ///////////////
                // Map helper
                //////////////


                var mapper = {

                    rgx: function(ua, arrays) {

                        //var result = {},
                        var i = 0,
                            j, k, p, q, matches, match; //, args = arguments;

                        /*// construct object barebones
                        for (p = 0; p < args[1].length; p++) {
                            q = args[1][p];
                            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                        }*/

                        // loop through all regexes maps
                        while (i < arrays.length && !matches) {

                            var regex = arrays[i], // even sequence (0,2,4,..)
                                props = arrays[i + 1]; // odd sequence (1,3,5,..)
                            j = k = 0;

                            // try matching uastring with regexes
                            while (j < regex.length && !matches) {

                                matches = regex[j++].exec(ua);

                                if (!!matches) {
                                    for (p = 0; p < props.length; p++) {
                                        match = matches[++k];
                                        q = props[p];
                                        // check if given property is actually array
                                        if (typeof q === OBJ_TYPE && q.length > 0) {
                                            if (q.length == 2) {
                                                if (typeof q[1] == FUNC_TYPE) {
                                                    // assign modified match
                                                    this[q[0]] = q[1].call(this, match);
                                                } else {
                                                    // assign given value, ignore regex match
                                                    this[q[0]] = q[1];
                                                }
                                            } else if (q.length == 3) {
                                                // check whether function or regex
                                                if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                    // call function (usually string mapper)
                                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                } else {
                                                    // sanitize match using given regex
                                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                }
                                            } else if (q.length == 4) {
                                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                            }
                                        } else {
                                            this[q] = match ? match : undefined;
                                        }
                                    }
                                }
                            }
                            i += 2;
                        }
                        //console.log(this);
                        //return this;
                    },

                    str: function(str, map) {

                        for (var i in map) {
                            // check if array
                            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                                for (var j = 0; j < map[i].length; j++) {
                                    if (util.has(map[i][j], str)) {
                                        return (i === UNKNOWN) ? undefined : i;
                                    }
                                }
                            } else if (util.has(map[i], str)) {
                                return (i === UNKNOWN) ? undefined : i;
                            }
                        }
                        return str;
                    }
                };


                ///////////////
                // String map
                //////////////


                var maps = {

                    browser: {
                        oldsafari: {
                            version: {
                                '1.0': '/8',
                                '1.2': '/1',
                                '1.3': '/3',
                                '2.0': '/412',
                                '2.0.2': '/416',
                                '2.0.3': '/417',
                                '2.0.4': '/419',
                                '?': '/'
                            }
                        }
                    },

                    device: {
                        amazon: {
                            model: {
                                'Fire Phone': ['SD', 'KF']
                            }
                        },
                        sprint: {
                            model: {
                                'Evo Shift 4G': '7373KT'
                            },
                            vendor: {
                                'HTC': 'APA',
                                'Sprint': 'Sprint'
                            }
                        }
                    },

                    os: {
                        windows: {
                            version: {
                                'ME': '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                '2000': 'NT 5.0',
                                'XP': ['NT 5.1', 'NT 5.2'],
                                'Vista': 'NT 6.0',
                                '7': 'NT 6.1',
                                '8': 'NT 6.2',
                                '8.1': 'NT 6.3',
                                '10': ['NT 6.4', 'NT 10.0'],
                                'RT': 'ARM'
                            }
                        }
                    }
                };


                //////////////
                // Regex map
                /////////////


                var regexes = {

                    browser: [
                        [

                            // Presto based
                            /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
                            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
                            /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
                            /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                        ],
                        [NAME, VERSION],
                        [

                            /(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                        ],
                        [
                            [NAME, 'Opera Mini'], VERSION
                        ],
                        [

                            /\s(opr)\/([\w\.]+)/i // Opera Webkit
                        ],
                        [
                            [NAME, 'Opera'], VERSION
                        ],
                        [

                            // Mixed
                            /(kindle)\/([\w\.]+)/i, // Kindle
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                            // Lunascape/Maxthon/Netfront/Jasmine/Blazer

                            // Trident based
                            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                            // Avant/IEMobile/SlimBrowser/Baidu
                            /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer

                            // Webkit/KHTML based
                            /(rekonq)\/([\w\.]+)*/i, // Rekonq
                            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                            // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                        ],
                        [NAME, VERSION],
                        [

                            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                        ],
                        [
                            [NAME, 'IE'], VERSION
                        ],
                        [

                            /(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                        ],
                        [NAME, VERSION],
                        [

                            /(yabrowser)\/([\w\.]+)/i // Yandex
                        ],
                        [
                            [NAME, 'Yandex'], VERSION
                        ],
                        [

                            /(puffin)\/([\w\.]+)/i // Puffin
                        ],
                        [
                            [NAME, 'Puffin'], VERSION
                        ],
                        [

                            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
                            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
                            /juc.+(ucweb)[\/\s]?([\w\.]+)/i,
                            /(ucbrowser)\/([\w\.]+)/i
                            // UCBrowser
                        ],
                        [
                            [NAME, 'UCBrowser'], VERSION
                        ],
                        [

                            /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                        ],
                        [
                            [NAME, /_/g, ' '], VERSION
                        ],
                        [

                            /(micromessenger)\/([\w\.]+)/i // WeChat
                        ],
                        [
                            [NAME, 'WeChat'], VERSION
                        ],
                        [

                            /m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                        ],
                        [NAME, VERSION],
                        [

                            /xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                        ],
                        [VERSION, [NAME, 'MIUI Browser']],
                        [

                            /;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                        ],
                        [VERSION, [NAME, 'Facebook']],
                        [

                            /(headlesschrome) ([\w\.]+)/i // Chrome Headless
                        ],
                        [VERSION, [NAME, 'Chrome Headless']],
                        [

                            /\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                        ],
                        [
                            [NAME, /(.+)/, '$1 WebView'], VERSION
                        ],
                        [

                            /android.+samsungbrowser\/([\w\.]+)/i,
                            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                        ],
                        [VERSION, [NAME, 'Android Browser']],
                        [

                            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                            // Chrome/OmniWeb/Arora/Tizen/Nokia
                        ],
                        [NAME, VERSION],
                        [

                            /(dolfin)\/([\w\.]+)/i // Dolphin
                        ],
                        [
                            [NAME, 'Dolphin'], VERSION
                        ],
                        [

                            /((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                        ],
                        [
                            [NAME, 'Chrome'], VERSION
                        ],
                        [

                            /(coast)\/([\w\.]+)/i // Opera Coast
                        ],
                        [
                            [NAME, 'Opera Coast'], VERSION
                        ],
                        [

                            /fxios\/([\w\.-]+)/i // Firefox for iOS
                        ],
                        [VERSION, [NAME, 'Firefox']],
                        [

                            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                        ],
                        [VERSION, [NAME, 'Mobile Safari']],
                        [

                            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                        ],
                        [VERSION, NAME],
                        [

                            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                        ],
                        [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
                        [

                            /(konqueror)\/([\w\.]+)/i, // Konqueror
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [NAME, VERSION],
                        [

                            // Gecko based
                            /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                        ],
                        [
                            [NAME, 'Netscape'], VERSION
                        ],
                        [
                            /(swiftfox)/i, // Swiftfox
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla

                            // Other
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                            /(links)\s\(([\w\.]+)/i, // Links
                            /(gobrowser)\/?([\w\.]+)*/i, // GoBrowser
                            /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
                            /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                        ],
                        [NAME, VERSION]

                        /* /////////////////////
                        // Media players BEGIN
                        ////////////////////////

                        , [

                        /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                        /(coremedia) v((\d+)[\w\._]+)/i
                        ], [NAME, VERSION], [

                        /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                        ], [NAME, VERSION], [

                        /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                        ], [NAME, VERSION], [

                        /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                            // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                            // NSPlayer/PSP-InternetRadioPlayer/Videos
                        /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                        /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                        /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                        ], [NAME, VERSION], [
                        /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                        ], [NAME, VERSION], [

                        /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                        ], [[NAME, 'Flip Player'], VERSION], [

                        /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                            // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                        ], [NAME], [

                        /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                            // Gstreamer
                        ], [NAME, VERSION], [

                        /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                        /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                            // Java/urllib/requests/wget/cURL
                        /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                        ], [NAME, VERSION], [

                        /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                        ], [[NAME, /_/g, ' '], VERSION], [

                        /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                            // MPlayer SVN
                        ], [NAME, VERSION], [

                        /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                        ], [NAME, VERSION], [

                        /(mplayer)/i,                                                       // MPlayer (no other info)
                        /(yourmuze)/i,                                                      // YourMuze
                        /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                        ], [NAME], [

                        /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                        ], [NAME, VERSION], [

                        /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                        ], [NAME, VERSION], [

                        /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                        ], [NAME, VERSION], [

                        /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                        /(winamp)\s((\d+)[\w\.-]+)/i,
                        /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                        ], [NAME, VERSION], [

                        /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                            // inlight radio
                        ], [NAME], [

                        /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                            // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                            // SoundTap/Totem/Stagefright/Streamium
                        ], [NAME, VERSION], [

                        /(smp)((\d+)[\d\.]+)/i                                              // SMP
                        ], [NAME, VERSION], [

                        /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                        /(vlc)\/((\d+)[\w\.-]+)/i,
                        /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                        /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                        /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                        ], [NAME, VERSION], [

                        /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                        /(windows-media-player)\/((\d+)[\w\.-]+)/i
                        ], [[NAME, /-/g, ' '], VERSION], [

                        /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                            // Windows Media Server
                        ], [VERSION, [NAME, 'Windows']], [

                        /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                        ], [NAME, VERSION], [

                        /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                        /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                        ], [[NAME, 'rad.io'], VERSION]

                        //////////////////////
                        // Media players END
                        ////////////////////*/

                    ],

                    cpu: [
                        [

                            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                        ],
                        [
                            [ARCHITECTURE, 'amd64']
                        ],
                        [

                            /(ia32(?=;))/i // IA32 (quicktime)
                        ],
                        [
                            [ARCHITECTURE, util.lowerize]
                        ],
                        [

                            /((?:i[346]|x)86)[;\)]/i // IA32
                        ],
                        [
                            [ARCHITECTURE, 'ia32']
                        ],
                        [

                            // PocketPC mistakenly identified as PowerPC
                            /windows\s(ce|mobile);\sppc;/i
                        ],
                        [
                            [ARCHITECTURE, 'arm']
                        ],
                        [

                            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                        ],
                        [
                            [ARCHITECTURE, /ower/, '', util.lowerize]
                        ],
                        [

                            /(sun4\w)[;\)]/i // SPARC
                        ],
                        [
                            [ARCHITECTURE, 'sparc']
                        ],
                        [

                            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                        ],
                        [
                            [ARCHITECTURE, util.lowerize]
                        ]
                    ],

                    device: [
                        [

                            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
                        ],
                        [MODEL, VENDOR, [TYPE, TABLET]],
                        [

                            /applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                        ],
                        [MODEL, [VENDOR, 'Apple'],
                            [TYPE, TABLET]
                        ],
                        [

                            /(apple\s{0,1}tv)/i // Apple TV
                        ],
                        [
                            [MODEL, 'Apple TV'],
                            [VENDOR, 'Apple']
                        ],
                        [

                            /(archos)\s(gamepad2?)/i, // Archos
                            /(hp).+(touchpad)/i, // HP TouchPad
                            /(hp).+(tablet)/i, // HP Tablet
                            /(kindle)\/([\w\.]+)/i, // Kindle
                            /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
                            /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                        ],
                        [VENDOR, MODEL, [TYPE, TABLET]],
                        [

                            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
                        ],
                        [MODEL, [VENDOR, 'Amazon'],
                            [TYPE, TABLET]
                        ],
                        [
                            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
                        ],
                        [
                            [MODEL, mapper.str, maps.device.amazon.model],
                            [VENDOR, 'Amazon'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                        ],
                        [MODEL, VENDOR, [TYPE, MOBILE]],
                        [
                            /\((ip[honed|\s\w*]+);/i // iPod/iPhone
                        ],
                        [MODEL, [VENDOR, 'Apple'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /(blackberry)[\s-]?(\w+)/i, // BlackBerry
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                            // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
                            /(hp)\s([\w\s]+\w)/i, // HP iPAQ
                            /(asus)-?(\w+)/i // Asus
                        ],
                        [VENDOR, MODEL, [TYPE, MOBILE]],
                        [
                            /\(bb10;\s(\w+)/i // BlackBerry 10
                        ],
                        [MODEL, [VENDOR, 'BlackBerry'],
                            [TYPE, MOBILE]
                        ],
                        [
                            // Asus Tablets
                            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
                        ],
                        [MODEL, [VENDOR, 'Asus'],
                            [TYPE, TABLET]
                        ],
                        [

                            /(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
                            /(sony)?(?:sgp.+)\sbuild\//i
                        ],
                        [
                            [VENDOR, 'Sony'],
                            [MODEL, 'Xperia Tablet'],
                            [TYPE, TABLET]
                        ],
                        [
                            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
                        ],
                        [
                            [VENDOR, 'Sony'],
                            [MODEL, 'Xperia Phone'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /\s(ouya)\s/i, // Ouya
                            /(nintendo)\s([wids3u]+)/i // Nintendo
                        ],
                        [VENDOR, MODEL, [TYPE, CONSOLE]],
                        [

                            /android.+;\s(shield)\sbuild/i // Nvidia
                        ],
                        [MODEL, [VENDOR, 'Nvidia'],
                            [TYPE, CONSOLE]
                        ],
                        [

                            /(playstation\s[34portablevi]+)/i // Playstation
                        ],
                        [MODEL, [VENDOR, 'Sony'],
                            [TYPE, CONSOLE]
                        ],
                        [

                            /(sprint\s(\w+))/i // Sprint Phones
                        ],
                        [
                            [VENDOR, mapper.str, maps.device.sprint.vendor],
                            [MODEL, mapper.str, maps.device.sprint.model],
                            [TYPE, MOBILE]
                        ],
                        [

                            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
                        ],
                        [VENDOR, MODEL, [TYPE, TABLET]],
                        [

                            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, // HTC
                            /(zte)-(\w+)*/i, // ZTE
                            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                            // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
                        ],
                        [VENDOR, [MODEL, /_/g, ' '],
                            [TYPE, MOBILE]
                        ],
                        [

                            /(nexus\s9)/i // HTC Nexus 9
                        ],
                        [MODEL, [VENDOR, 'HTC'],
                            [TYPE, TABLET]
                        ],
                        [

                            /(nexus\s6p)/i // Huawei Nexus 6P
                        ],
                        [MODEL, [VENDOR, 'Huawei'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                        ],
                        [VENDOR, MODEL, [TYPE, MOBILE]],
                        [

                            /[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                        ],
                        [MODEL, [VENDOR, 'Microsoft'],
                            [TYPE, CONSOLE]
                        ],
                        [
                            /(kin\.[onetw]{3})/i // Microsoft Kin
                        ],
                        [
                            [MODEL, /\./g, ' '],
                            [VENDOR, 'Microsoft'],
                            [TYPE, MOBILE]
                        ],
                        [

                            // Motorola
                            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
                            /mot[\s-]?(\w+)*/i,
                            /(XT\d{3,4}) build\//i,
                            /(nexus\s6)/i
                        ],
                        [MODEL, [VENDOR, 'Motorola'],
                            [TYPE, MOBILE]
                        ],
                        [
                            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
                        ],
                        [MODEL, [VENDOR, 'Motorola'],
                            [TYPE, TABLET]
                        ],
                        [

                            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                        ],
                        [
                            [VENDOR, util.trim],
                            [MODEL, util.trim],
                            [TYPE, SMARTTV]
                        ],
                        [

                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [MODEL, /^/, 'SmartTV'],
                            [VENDOR, 'Samsung'],
                            [TYPE, SMARTTV]
                        ],
                        [

                            /\(dtv[\);].+(aquos)/i // Sharp
                        ],
                        [MODEL, [VENDOR, 'Sharp'],
                            [TYPE, SMARTTV]
                        ],
                        [

                            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                            /((SM-T\w+))/i
                        ],
                        [
                            [VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]
                        ],
                        [ // Samsung
                            /smart-tv.+(samsung)/i
                        ],
                        [VENDOR, [TYPE, SMARTTV], MODEL],
                        [
                            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
                            /sec-((sgh\w+))/i
                        ],
                        [
                            [VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]
                        ],
                        [

                            /sie-(\w+)*/i // Siemens
                        ],
                        [MODEL, [VENDOR, 'Siemens'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
                            /(nokia)[\s_-]?([\w-]+)*/i
                        ],
                        [
                            [VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]
                        ],
                        [

                            /android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
                        ],
                        [MODEL, [VENDOR, 'Acer'],
                            [TYPE, TABLET]
                        ],
                        [

                            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                        ],
                        [
                            [VENDOR, 'LG'], MODEL, [TYPE, TABLET]
                        ],
                        [
                            /(lg) netcast\.tv/i // LG SmartTV
                        ],
                        [VENDOR, MODEL, [TYPE, SMARTTV]],
                        [
                            /(nexus\s[45])/i, // LG
                            /lg[e;\s\/-]+(\w+)*/i
                        ],
                        [MODEL, [VENDOR, 'LG'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                        ],
                        [MODEL, [VENDOR, 'Lenovo'],
                            [TYPE, TABLET]
                        ],
                        [

                            /linux;.+((jolla));/i // Jolla
                        ],
                        [VENDOR, MODEL, [TYPE, MOBILE]],
                        [

                            /((pebble))app\/[\d\.]+\s/i // Pebble
                        ],
                        [VENDOR, MODEL, [TYPE, WEARABLE]],
                        [

                            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                        ],
                        [VENDOR, MODEL, [TYPE, MOBILE]],
                        [

                            /crkey/i // Google Chromecast
                        ],
                        [
                            [MODEL, 'Chromecast'],
                            [VENDOR, 'Google']
                        ],
                        [

                            /android.+;\s(glass)\s\d/i // Google Glass
                        ],
                        [MODEL, [VENDOR, 'Google'],
                            [TYPE, WEARABLE]
                        ],
                        [

                            /android.+;\s(pixel c)\s/i // Google Pixel C
                        ],
                        [MODEL, [VENDOR, 'Google'],
                            [TYPE, TABLET]
                        ],
                        [

                            /android.+;\s(pixel xl|pixel)\s/i // Google Pixel
                        ],
                        [MODEL, [VENDOR, 'Google'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /android.+(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
                            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
                            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i // Xiaomi Mi
                        ],
                        [
                            [MODEL, /_/g, ' '],
                            [VENDOR, 'Xiaomi'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /android.+a000(1)\s+build/i // OnePlus
                        ],
                        [MODEL, [VENDOR, 'OnePlus'],
                            [TYPE, MOBILE]
                        ],
                        [

                            /\s(tablet)[;\/]/i, // Unidentifiable Tablet
                            /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                        ],
                        [
                            [TYPE, util.lowerize], VENDOR, MODEL
                        ]

                        /*//////////////////////////
                        // TODO: move to string map
                        ////////////////////////////

                        /(C6603)/i                                                          // Sony Xperia Z C6603
                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                        /(C6903)/i                                                          // Sony Xperia Z 1
                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

                        /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

                        /(T3C)/i                                                            // Advan Vandroid T3C
                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

                        /(V972M)/i                                                          // ZTE V972M
                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

                        /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

                        /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

                        /////////////
                        // END TODO
                        ///////////*/

                    ],

                    engine: [
                        [

                            /windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                        ],
                        [VERSION, [NAME, 'EdgeHTML']],
                        [

                            /(presto)\/([\w\.]+)/i, // Presto
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
                            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
                            /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                        ],
                        [NAME, VERSION],
                        [

                            /rv\:([\w\.]+).*(gecko)/i // Gecko
                        ],
                        [VERSION, NAME]
                    ],

                    os: [
                        [

                            // Windows based
                            /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                        ],
                        [NAME, VERSION],
                        [
                            /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
                            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, // Windows Phone
                            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                        ],
                        [NAME, [VERSION, mapper.str, maps.os.windows.version]],
                        [
                            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
                        ],
                        [
                            [NAME, 'Windows'],
                            [VERSION, mapper.str, maps.os.windows.version]
                        ],
                        [

                            // Mobile/Embedded OS
                            /\((bb)(10);/i // BlackBerry 10
                        ],
                        [
                            [NAME, 'BlackBerry'], VERSION
                        ],
                        [
                            /(blackberry)\w*\/?([\w\.]+)*/i, // Blackberry
                            /(tizen)[\/\s]([\w\.]+)/i, // Tizen
                            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                            // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                            /linux;.+(sailfish);/i // Sailfish OS
                        ],
                        [NAME, VERSION],
                        [
                            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
                        ],
                        [
                            [NAME, 'Symbian'], VERSION
                        ],
                        [
                            /\((series40);/i // Series 40
                        ],
                        [NAME],
                        [
                            /mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                        ],
                        [
                            [NAME, 'Firefox OS'], VERSION
                        ],
                        [

                            // Console
                            /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation

                            // GNU/Linux based
                            /(mint)[\/\s\(]?(\w+)*/i, // Mint
                            /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
                            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                            // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                            // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                            /(hurd|linux)\s?([\w\.]+)*/i, // Hurd/Linux
                            /(gnu)\s?([\w\.]+)*/i // GNU
                        ],
                        [NAME, VERSION],
                        [

                            /(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                        ],
                        [
                            [NAME, 'Chromium OS'], VERSION
                        ],
                        [

                            // Solaris
                            /(sunos)\s?([\w\.]+\d)*/i // Solaris
                        ],
                        [
                            [NAME, 'Solaris'], VERSION
                        ],
                        [

                            // BSD based
                            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                        ],
                        [NAME, VERSION],
                        [

                            /(haiku)\s(\w+)/i // Haiku
                        ],
                        [NAME, VERSION],
                        [

                            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i // iOS
                        ],
                        [
                            [NAME, 'iOS'],
                            [VERSION, /_/g, '.']
                        ],
                        [

                            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                            /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                        ],
                        [
                            [NAME, 'Mac OS'],
                            [VERSION, /_/g, '.']
                        ],
                        [

                            // Other
                            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, // Solaris
                            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, // AIX
                            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                            // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                            /(unix)\s?([\w\.]+)*/i // UNIX
                        ],
                        [NAME, VERSION]
                    ]
                };


                /////////////////
                // Constructor
                ////////////////

                var Browser = function(name, version) {
                    this[NAME] = name;
                    this[VERSION] = version;
                };
                var CPU = function(arch) {
                    this[ARCHITECTURE] = arch;
                };
                var Device = function(vendor, model, type) {
                    this[VENDOR] = vendor;
                    this[MODEL] = model;
                    this[TYPE] = type;
                };
                var Engine = Browser;
                var OS = Browser;

                var UAParser = function(uastring, extensions) {

                    if (!(this instanceof UAParser)) {
                        return new UAParser(uastring, extensions).getResult();
                    }

                    var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
                    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                    var browser = new Browser();
                    var cpu = new CPU();
                    var device = new Device();
                    var engine = new Engine();
                    var os = new OS();

                    this.getBrowser = function() {
                        mapper.rgx.call(browser, ua, rgxmap.browser);
                        browser.major = util.major(browser.version); // deprecated
                        return browser;
                    };
                    this.getCPU = function() {
                        mapper.rgx.call(cpu, ua, rgxmap.cpu);
                        return cpu;
                    };
                    this.getDevice = function() {
                        mapper.rgx.call(device, ua, rgxmap.device);
                        return device;
                    };
                    this.getEngine = function() {
                        mapper.rgx.call(engine, ua, rgxmap.engine);
                        return engine;
                    };
                    this.getOS = function() {
                        mapper.rgx.call(os, ua, rgxmap.os);
                        return os;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return ua;
                    };
                    this.setUA = function(uastring) {
                        ua = uastring;
                        browser = new Browser();
                        cpu = new CPU();
                        device = new Device();
                        engine = new Engine();
                        os = new OS();
                        return this;
                    };
                    return this;
                };

                UAParser.VERSION = LIBVERSION;
                UAParser.BROWSER = {
                    NAME: NAME,
                    MAJOR: MAJOR, // deprecated
                    VERSION: VERSION
                };
                UAParser.CPU = {
                    ARCHITECTURE: ARCHITECTURE
                };
                UAParser.DEVICE = {
                    MODEL: MODEL,
                    VENDOR: VENDOR,
                    TYPE: TYPE,
                    CONSOLE: CONSOLE,
                    MOBILE: MOBILE,
                    SMARTTV: SMARTTV,
                    TABLET: TABLET,
                    WEARABLE: WEARABLE,
                    EMBEDDED: EMBEDDED
                };
                UAParser.ENGINE = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                UAParser.OS = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                //UAParser.Utils = util;

                ///////////
                // Export
                //////////


                // check js environment
                if (typeof(exports) !== UNDEF_TYPE) {
                    // nodejs env
                    if (typeof module !== UNDEF_TYPE && module.exports) {
                        exports = module.exports = UAParser;
                    }
                    exports.UAParser = UAParser;
                } else {
                    // requirejs env (optional)
                    if ("function" === FUNC_TYPE && __webpack_require__(41)) {
                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                return UAParser;
                            }.call(exports, __webpack_require__, exports, module),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else {
                        // browser env
                        window.UAParser = UAParser;
                    }
                }

                // jQuery/Zepto specific (optional)
                // Note:
                //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                //   and we should catch that.
                var $ = window.jQuery || window.Zepto;
                if (typeof $ !== UNDEF_TYPE) {
                    var parser = new UAParser();
                    $.ua = parser.getResult();
                    $.ua.get = function() {
                        return parser.getUA();
                    };
                    $.ua.set = function(uastring) {
                        parser.setUA(uastring);
                        var result = parser.getResult();
                        for (var prop in result) {
                            $.ua[prop] = result[prop];
                        }
                    };
                }

            })(typeof window === 'object' ? window : this);


            /***/
        }),
        /* 41 */
        /***/
        (function(module, exports) {

            /* WEBPACK VAR INJECTION */
            (function(__webpack_amd_options__) { /* globals __webpack_amd_options__ */
                module.exports = __webpack_amd_options__;

                /* WEBPACK VAR INJECTION */
            }.call(exports, {}))

            /***/
        }),
        /* 42 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var PosterManager = function() {
                /**
                 * Poster image URL
                 * @type {string}
                 * @private
                 */
                function PosterManager() {
                    _classCallCheck(this, PosterManager);

                    this._createEl();
                }

                /**
                 * Set the poster source URL
                 * @param {string} posterUrl - the poster image URL
                 * @public
                 * @returns {void}
                 */

                /**
                 * The poster HTML Div element.
                 * @type {HTMLDivElement}
                 * @private
                 */


                _createClass(PosterManager, [{
                    key: 'setSrc',
                    value: function setSrc(posterUrl) {
                        if (posterUrl) {
                            this._posterUrl = posterUrl;
                            Utils.Dom.setStyle(this._el, 'background-image', 'url("' + this._posterUrl + '")');
                            this.hide();
                        }
                    }

                    /**
                     * Get the poster source URL
                     * @public
                     * @returns {string} - the poster image URL
                     */

                }, {
                    key: 'getElement',


                    /**
                     * Get the poster HTML Div element
                     * @public
                     * @returns {HTMLDivElement} - Poster HTML Dom element
                     */
                    value: function getElement() {
                        return this._el;
                    }

                    /**
                     * Create the HTML Div element of the poster
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_createEl',
                    value: function _createEl() {
                        if (!this._el) {
                            var el = this._el = Utils.Dom.createElement('div');
                            Utils.Dom.setAttribute(el, 'id', Utils.Generator.uniqueId(5));
                            Utils.Dom.setAttribute(el, 'tabindex', '-1');
                        }
                    }

                    /**
                     * Removes the poster element from the dom
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_removeEl',
                    value: function _removeEl() {
                        if (this._el) {
                            Utils.Dom.removeChild(this._el.parentNode, this._el);
                        }
                    }

                    /**
                     * Show the poster image
                     * @public
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: 'show',
                    value: function show() {
                        Utils.Dom.setStyle(this._el, 'display', '');
                    }

                    /**
                     * Hide the poster image
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'hide',
                    value: function hide() {
                        Utils.Dom.setStyle(this._el, 'display', 'none');
                    }

                    /**
                     * Resets the poster url and the background image
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        this._posterUrl = '';
                        Utils.Dom.setStyle(this._el, 'background-image', '');
                    }

                    /**
                     * Destroys the poster element
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.reset();
                        this._removeEl();
                    }
                }, {
                    key: 'src',
                    get: function get() {
                        return this._posterUrl;
                    }
                }]);

                return PosterManager;
            }();

            exports.default = PosterManager;

            /***/
        }),
        /* 43 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.jsonp = undefined;

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var JSONP_TIMEOUT = 5000;

            var CALLBACK_PREFIX = 'jsonpcallback';
            var JSONP_FORMAT_STRING = 'responseFormat=jsonp&callback=';

            /**
             * JSONP utility.
             * @param {string} url - The url of the request.
             * @param {string} callback - Callback function to be called when the request returns.
             * @param {Object} options - Object contains configuration (currently only timeout).
             * @returns {Promise<*>} - A promise with the callback output.
             */
            function jsonp(url, callback, options) {
                options = options || {};
                var timeout = options.timeout ? options.timeout : JSONP_TIMEOUT;
                var script = document.createElement('script');
                var callbackId = CALLBACK_PREFIX + Math.round(Date.now() + Math.random() * 1000001);
                var scriptUri = url;
                var timer = void 0;

                /**
                 * function to clean the DOM from the script tag and from the function
                 * @returns {void}
                 */
                var _cleanup = function _cleanup() {
                    if (script && script.parentNode) {
                        script.parentNode.removeChild(script);
                    }
                    window[callbackId] = function() {};
                    if (timer) {
                        clearTimeout(timer);
                    }
                };

                return new Promise(function(resolve, reject) {
                    if (timeout) {
                        timer = setTimeout(function() {
                            _cleanup();
                            reject(new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.NETWORK, _error2.default.Code.TIMEOUT, url));
                        }, timeout);
                    }

                    /**
                     * a wrapper to the callback function, to save a closure
                     * @param {Object} data - the data we get from the server, in response to the request
                     * @returns {void}
                     */
                    window[callbackId] = function(data) {
                        var callbackResult = callback(data, url);
                        _cleanup();
                        resolve(callbackResult);
                    };

                    if (scriptUri.match(/\?/)) {
                        scriptUri += '&' + JSONP_FORMAT_STRING + callbackId;
                    } else {
                        scriptUri += '?' + JSONP_FORMAT_STRING + callbackId;
                    }

                    script.type = 'text/javascript';
                    script.src = scriptUri;
                    document.getElementsByTagName('head')[0].appendChild(script);
                });
            }

            exports.jsonp = jsonp;

            /***/
        }),
        /* 44 */
        /***/
        (function(module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
             * js-logger - http://github.com/jonnyreeves/js-logger
             * Jonny Reeves, http://jonnyreeves.co.uk/
             * js-logger may be freely distributed under the MIT license.
             */
            (function(global) {
                "use strict";

                // Top level module for the global, static logger instance.
                var Logger = {};

                // For those that are at home that are keeping score.
                Logger.VERSION = "1.4.1";

                // Function which handles all incoming log messages.
                var logHandler;

                // Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
                var contextualLoggersByNameMap = {};

                // Polyfill for ES5's Function.bind.
                var bind = function(scope, func) {
                    return function() {
                        return func.apply(scope, arguments);
                    };
                };

                // Super exciting object merger-matron 9000 adding another 100 bytes to your download.
                var merge = function() {
                    var args = arguments,
                        target = args[0],
                        key, i;
                    for (i = 1; i < args.length; i++) {
                        for (key in args[i]) {
                            if (!(key in target) && args[i].hasOwnProperty(key)) {
                                target[key] = args[i][key];
                            }
                        }
                    }
                    return target;
                };

                // Helper to define a logging level object; helps with optimisation.
                var defineLogLevel = function(value, name) {
                    return {
                        value: value,
                        name: name
                    };
                };

                // Predefined logging levels.
                Logger.DEBUG = defineLogLevel(1, 'DEBUG');
                Logger.INFO = defineLogLevel(2, 'INFO');
                Logger.TIME = defineLogLevel(3, 'TIME');
                Logger.WARN = defineLogLevel(4, 'WARN');
                Logger.ERROR = defineLogLevel(8, 'ERROR');
                Logger.OFF = defineLogLevel(99, 'OFF');

                // Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
                // of each other.
                var ContextualLogger = function(defaultContext) {
                    this.context = defaultContext;
                    this.setLevel(defaultContext.filterLevel);
                    this.log = this.info; // Convenience alias.
                };

                ContextualLogger.prototype = {
                    // Changes the current logging level for the logging instance.
                    setLevel: function(newLevel) {
                        // Ensure the supplied Level object looks valid.
                        if (newLevel && "value" in newLevel) {
                            this.context.filterLevel = newLevel;
                        }
                    },

                    // Gets the current logging level for the logging instance
                    getLevel: function() {
                        return this.context.filterLevel;
                    },

                    // Is the logger configured to output messages at the supplied level?
                    enabledFor: function(lvl) {
                        var filterLevel = this.context.filterLevel;
                        return lvl.value >= filterLevel.value;
                    },

                    debug: function() {
                        this.invoke(Logger.DEBUG, arguments);
                    },

                    info: function() {
                        this.invoke(Logger.INFO, arguments);
                    },

                    warn: function() {
                        this.invoke(Logger.WARN, arguments);
                    },

                    error: function() {
                        this.invoke(Logger.ERROR, arguments);
                    },

                    time: function(label) {
                        if (typeof label === 'string' && label.length > 0) {
                            this.invoke(Logger.TIME, [label, 'start']);
                        }
                    },

                    timeEnd: function(label) {
                        if (typeof label === 'string' && label.length > 0) {
                            this.invoke(Logger.TIME, [label, 'end']);
                        }
                    },

                    // Invokes the logger callback if it's not being filtered.
                    invoke: function(level, msgArgs) {
                        if (logHandler && this.enabledFor(level)) {
                            logHandler(msgArgs, merge({
                                level: level
                            }, this.context));
                        }
                    }
                };

                // Protected instance which all calls to the to level `Logger` module will be routed through.
                var globalLogger = new ContextualLogger({
                    filterLevel: Logger.OFF
                });

                // Configure the global Logger instance.
                (function() {
                    // Shortcut for optimisers.
                    var L = Logger;

                    L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
                    L.debug = bind(globalLogger, globalLogger.debug);
                    L.time = bind(globalLogger, globalLogger.time);
                    L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
                    L.info = bind(globalLogger, globalLogger.info);
                    L.warn = bind(globalLogger, globalLogger.warn);
                    L.error = bind(globalLogger, globalLogger.error);

                    // Don't forget the convenience alias!
                    L.log = L.info;
                }());

                // Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
                // object with the supplied log messages and the second being a context object which contains a hash of stateful
                // parameters which the logging function can consume.
                Logger.setHandler = function(func) {
                    logHandler = func;
                };

                // Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
                // (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
                Logger.setLevel = function(level) {
                    // Set the globalLogger's level.
                    globalLogger.setLevel(level);

                    // Apply this level to all registered contextual loggers.
                    for (var key in contextualLoggersByNameMap) {
                        if (contextualLoggersByNameMap.hasOwnProperty(key)) {
                            contextualLoggersByNameMap[key].setLevel(level);
                        }
                    }
                };

                // Gets the global logging filter level
                Logger.getLevel = function() {
                    return globalLogger.getLevel();
                };

                // Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
                // default context and log handler.
                Logger.get = function(name) {
                    // All logger instances are cached so they can be configured ahead of use.
                    return contextualLoggersByNameMap[name] ||
                        (contextualLoggersByNameMap[name] = new ContextualLogger(merge({
                            name: name
                        }, globalLogger.context)));
                };

                // CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
                // write to the window's console object (if present); the optional options object can be used to customise the
                // formatter used to format each log message.
                Logger.createDefaultHandler = function(options) {
                    options = options || {};

                    options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
                        // Prepend the logger's name to the log message for easy identification.
                        if (context.name) {
                            messages.unshift("[" + context.name + "]");
                        }
                    };

                    // Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
                    // that don't offer a native console method.
                    var timerStartTimeByLabelMap = {};

                    // Support for IE8+ (and other, slightly more sane environments)
                    var invokeConsoleMethod = function(hdlr, messages) {
                        Function.prototype.apply.call(hdlr, console, messages);
                    };

                    // Check for the presence of a logger.
                    if (typeof console === "undefined") {
                        return function() { /* no console */ };
                    }

                    return function(messages, context) {
                        // Convert arguments object to Array.
                        messages = Array.prototype.slice.call(messages);

                        var hdlr = console.log;
                        var timerLabel;

                        if (context.level === Logger.TIME) {
                            timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

                            if (messages[1] === 'start') {
                                if (console.time) {
                                    console.time(timerLabel);
                                } else {
                                    timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
                                }
                            } else {
                                if (console.timeEnd) {
                                    console.timeEnd(timerLabel);
                                } else {
                                    invokeConsoleMethod(hdlr, [timerLabel + ': ' +
                                        (new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms'
                                    ]);
                                }
                            }
                        } else {
                            // Delegate through to custom warn/error loggers if present on the console.
                            if (context.level === Logger.WARN && console.warn) {
                                hdlr = console.warn;
                            } else if (context.level === Logger.ERROR && console.error) {
                                hdlr = console.error;
                            } else if (context.level === Logger.INFO && console.info) {
                                hdlr = console.info;
                            } else if (context.level === Logger.DEBUG && console.debug) {
                                hdlr = console.debug;
                            }

                            options.formatter(messages, context);
                            invokeConsoleMethod(hdlr, messages);
                        }
                    };
                };

                // Configure and example a Default implementation which writes to the `window.console` (if present).  The
                // `options` hash can be used to configure the default logLevel and provide a custom message formatter.
                Logger.useDefaults = function(options) {
                    Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
                    Logger.setHandler(Logger.createDefaultHandler(options));
                };

                // Export to popular environments boilerplate.
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
                        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                            __WEBPACK_AMD_DEFINE_FACTORY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof module !== 'undefined' && module.exports) {
                    module.exports = Logger;
                } else {
                    Logger._prevLogger = global.Logger;

                    Logger.noConflict = function() {
                        global.Logger = Logger._prevLogger;
                        return Logger;
                    };

                    global.Logger = Logger;
                }
            }(this));


            /***/
        }),
        /* 45 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });


            var Severity = {
                /**
                 * An error occurred, but the Player is attempting to recover from the error.
                 *
                 * If the Player cannot ultimately recover, it still may not throw a CRITICAL
                 * error.  For example, retrying for a media segment will never result in
                 * a CRITICAL error (the Player will just retry forever).
                 */
                RECOVERABLE: 1,
                /**
                 * A critical error that the library cannot recover from.  These usually cause
                 * the Player to stop loading or updating.  A new manifest must be loaded
                 * to reset the library.
                 */
                CRITICAL: 2
            };

            exports.Severity = Severity;

            /***/
        }),
        /* 46 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Code = undefined;

            var _adErrorCode = __webpack_require__(47);

            var Code = {
                /**
                 * A network request was made using an unsupported URI scheme.
                 */
                UNSUPPORTED_SCHEME: 1000,

                /**
                 * An HTTP network request returned an HTTP status that indicated a failure.
                 */
                BAD_HTTP_STATUS: 1001,

                /**
                 * An HTTP network request failed with an error, but not from the server.
                 */
                HTTP_ERROR: 1002,

                /**
                 * A network request timed out.
                 */
                TIMEOUT: 1003,

                /**
                 * A network request was made with a malformed data URI.
                 */
                MALFORMED_DATA_URI: 1004,

                /**
                 * A network request was made with a data URI using an unknown encoding.
                 */
                UNKNOWN_DATA_URI_ENCODING: 1005,

                /**
                 * A request filter threw an error.
                 */
                REQUEST_FILTER_ERROR: 1006,

                /**
                 * A response filter threw an error.
                 */
                RESPONSE_FILTER_ERROR: 1007,

                /** The text parser failed to parse a text stream due to an invalid header. */
                INVALID_TEXT_HEADER: 2000,

                /** The text parser failed to parse a text stream due to an invalid cue. */
                INVALID_TEXT_CUE: 2001,

                /**
                 * Was unable to detect the encoding of the response text.  Suggest adding
                 * byte-order-markings to the response data.
                 */
                UNABLE_TO_DETECT_ENCODING: 2003,

                /** The response data contains invalid Unicode character encoding. */
                BAD_ENCODING: 2004,

                /**
                 * The XML parser failed to parse an xml stream, or the XML lacks mandatory
                 * elements for TTML.
                 * in the data is the URI associated with the XML.
                 */
                INVALID_XML: 2005,

                /**
                 * MP4 segment does not contain TTML.
                 */
                INVALID_MP4_TTML: 2007,

                /**
                 * MP4 segment does not contain VTT.
                 */
                INVALID_MP4_VTT: 2008,

                /**
                 *  VTT module issue, see the date for more details
                 */
                UNABLE_TO_CREATE_TEXT_CUE: 2009,
                /**
                 * error parsing the dash adapter error (for instance, could not parse an error shaka raised)
                 */
                DASH_ADAPTER_ERROR_PARSE_ISSUE: 2010,
                /**
                 * the file that the external captions handler is trying to download could not be determined / unsupported.
                 */
                UNKNOWN_FILE_TYPE: 2011,
                /**
                 * The language key in the caption object is empty / does not exist. Language is a mandatory field.
                 * https://github.com/kaltura/playkit-js/blob/master/docs/configuration.md#configsourcescaptions
                 */
                UNKNOWN_LANGUAGE: 2012,
                /**
                 * Some component tried to read past the end of a buffer.  The segment index,
                 * init segment, or PSSH may be malformed.
                 */
                BUFFER_READ_OUT_OF_BOUNDS: 3000,

                /**
                 * Some component tried to parse an integer that was too large to fit in a
                 * JavaScript number without rounding error.  JavaScript can only natively
                 * represent integers up to 53 bits.
                 */
                JS_INTEGER_OVERFLOW: 3001,

                /**
                 * The EBML parser used to parse the WebM container encountered an integer,
                 * ID, or other field larger than the maximum supported by the parser.
                 */
                EBML_OVERFLOW: 3002,

                /**
                 * The EBML parser used to parse the WebM container encountered a floating-
                 * point field of a size not supported by the parser.
                 */
                EBML_BAD_FLOATING_POINT_SIZE: 3003,

                /**
                 * The MP4 SIDX parser found the wrong box type.
                 * Either the segment index range is incorrect or the data is corrupt.
                 */
                MP4_SIDX_WRONG_BOX_TYPE: 3004,

                /**
                 * The MP4 SIDX parser encountered an invalid timescale.
                 * The segment index data may be corrupt.
                 */
                MP4_SIDX_INVALID_TIMESCALE: 3005,

                /** The MP4 SIDX parser encountered a type of SIDX that is not supported. */
                MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,

                /**
                 * The WebM Cues parser was unable to locate the Cues element.
                 * The segment index data may be corrupt.
                 */
                WEBM_CUES_ELEMENT_MISSING: 3007,

                /**
                 * The WebM header parser was unable to locate the Ebml element.
                 * The init segment data may be corrupt.
                 */
                WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,

                /**
                 * The WebM header parser was unable to locate the Segment element.
                 * The init segment data may be corrupt.
                 */
                WEBM_SEGMENT_ELEMENT_MISSING: 3009,

                /**
                 * The WebM header parser was unable to locate the Info element.
                 * The init segment data may be corrupt.
                 */
                WEBM_INFO_ELEMENT_MISSING: 3010,

                /**
                 * The WebM header parser was unable to locate the Duration element.
                 * The init segment data may be corrupt or may have been incorrectly encoded.
                 * Shaka requires a duration in WebM DASH content.
                 */
                WEBM_DURATION_ELEMENT_MISSING: 3011,

                /**
                 * The WebM Cues parser was unable to locate the Cue Track Positions element.
                 * The segment index data may be corrupt.
                 */
                WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,

                /**
                 * The WebM Cues parser was unable to locate the Cue Time element.
                 * The segment index data may be corrupt.
                 */
                WEBM_CUE_TIME_ELEMENT_MISSING: 3013,

                /**
                 * A MediaSource operation failed.
                 * a MediaError code from the video element.
                 */
                MEDIA_SOURCE_OPERATION_FAILED: 3014,

                /**
                 * A MediaSource operation threw an exception.
                 */
                MEDIA_SOURCE_OPERATION_THREW: 3015,

                /**
                 * The video element reported an error.
                 * - error.data[0] is a MediaError code.js from the video element.
                 * - On Edge & IE, error.data[1] is a Microsoft extended error code.js in hex.
                 * - On Chrome, error.data[2] is a string with details on the error.
                 */
                VIDEO_ERROR: 3016,

                /**
                 * A MediaSource operation threw QuotaExceededError and recovery failed. The
                 * content cannot be played correctly because the segments are too large for
                 * the browser/platform. This may occur when attempting to play very high
                 * quality, very high bitrate content on low-end devices.
                 */
                QUOTA_EXCEEDED_ERROR: 3017,

                /**
                 * a media error from hlsjs adapter
                 */
                HLS_FATAL_MEDIA_ERROR: 3018,

                /**
                 * HLSJS fragment parsing issue
                 */
                HLS_FRAG_PARSING_ERROR: 3019,

                /**
                 * HLSJS buffer append issue
                 */
                HLS_BUFFER_APPEND_ISSUE: 3020,
                /**
                 * HLSJS buffer appending error
                 */
                HLS_BUFFER_APPENDING_ISSUE: 3021,
                /**
                 * Native adapter error, more info in the data part
                 */
                NATIVE_ADAPTER_LOAD_FAILED: 3022,
                /**
                 * HLSjs buffer stalled issue
                 */
                HLS_BUFFER_STALLED_ERROR: 3023,
                /**
                 * The Player was unable to guess the manifest type based on file extension
                 * or MIME type.  To fix, try one of the following:
                 * Rename the manifest so that the URI ends in a well-known extension.
                 * Configure the server to send a recognizable Content-Type header.
                 * Configure the server to accept a HEAD request for the manifest.
                 */
                UNABLE_TO_GUESS_MANIFEST_TYPE: 4000,

                /** The DASH Manifest contained invalid XML markup. */
                DASH_INVALID_XML: 4001,

                /**
                 * The DASH Manifest contained a Representation with insufficient segment
                 * information.
                 */
                DASH_NO_SEGMENT_INFO: 4002,

                /** The DASH Manifest contained an AdaptationSet with no Representations. */
                DASH_EMPTY_ADAPTATION_SET: 4003,

                /** The DASH Manifest contained an Period with no AdaptationSets. */
                DASH_EMPTY_PERIOD: 4004,

                /**
                 * The DASH Manifest does not specify an init segment with a WebM container.
                 */
                DASH_WEBM_MISSING_INIT: 4005,

                /** The DASH Manifest contained an unsupported container format. */
                DASH_UNSUPPORTED_CONTAINER: 4006,

                /** The embedded PSSH data has invalid encoding. */
                DASH_PSSH_BAD_ENCODING: 4007,

                /**
                 * There is an AdaptationSet whose Representations do not have any common
                 * key-systems.
                 */
                DASH_NO_COMMON_KEY_SYSTEM: 4008,

                /** Having multiple key IDs per Representation is not supported. */
                DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,

                /** The DASH Manifest specifies conflicting key IDs. */
                DASH_CONFLICTING_KEY_IDS: 4010,

                /**
                 * The manifest contains a period with no playable streams.
                 * Either the period was originally empty, or the streams within cannot be
                 * played on this browser or platform.
                 */
                UNPLAYABLE_PERIOD: 4011,

                /**
                 * There exist some streams that could be decoded, but restrictions imposed
                 * by the application or the key system prevent us from playing.  This may
                 * happen under the following conditions:
                 * The application has given restrictions to the Player that restrict
                 * at least one content type completely (e.g. no playable audio),
                 * The key system has imposed output restrictions that cannot be met
                 * (such as HDCP) and there are no unrestricted alternatives.
                 */
                RESTRICTIONS_CANNOT_BE_MET: 4012,

                /**
                 * No valid periods were found in the manifest.  Please check that your
                 * manifest is correct and free of typos.
                 */
                NO_PERIODS: 4014,

                /**
                 * HLS playlist doesn't start with a mandory #EXTM3U tag.
                 */
                HLS_PLAYLIST_HEADER_MISSING: 4015,

                /**
                 * HLS tag has an invalid name that doesn't start with '#EXT'
                 */
                INVALID_HLS_TAG: 4016,

                /**
                 * HLS playlist has both Master and Media/Segment tags.
                 */
                HLS_INVALID_PLAYLIST_HIERARCHY: 4017,

                /**
                 * A Representation has an id that is the same as another Representation in
                 * the same Period.  This makes manifest updates impossible since we cannot
                 * map the updated Representation to the old one.
                 */
                DASH_DUPLICATE_REPRESENTATION_ID: 4018,

                /**
                 * HLS manifest has several #EXT-X-MAP tags. We can only
                 * support one at the moment.
                 */
                HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,

                /**
                 * HLS parser was unable to guess mime type of a stream.
                 */
                HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,

                /**
                 * No Master Playlist has been provided. Master playlist provides
                 * vital information about the streams (like codecs) that is
                 * required for MediaSource. We don't support directly providing
                 * a Media Playlist.
                 */
                HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,

                /**
                 * One of the required attributes was not provided.
                 * HLS manifest is invalid.
                 */
                HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,

                /**
                 * One of the required tags was not provided.
                 * HLS manifest is invalid.
                 */
                HLS_REQUIRED_TAG_MISSING: 4024,

                /**
                 * HLS parser was unable to guess codecs of a stream.
                 */
                HLS_COULD_NOT_GUESS_CODECS: 4025,

                /**
                 * HLS parser has encountered encrypted content with unsupported
                 * KEYFORMAT attributes.
                 */
                HLS_KEYFORMATS_NOT_SUPPORTED: 4026,

                /**
                 * The manifest parser only supports xlink links with
                 * xlink:actuate='onLoad'.
                 */
                DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,

                /**
                 * The manifest parser has hit its depth limit on
                 * xlink link chains.
                 */
                DASH_XLINK_DEPTH_LIMIT: 4028,

                /**
                 * HLS parser encountered a live playlist.
                 */
                HLS_LIVE_CONTENT_NOT_SUPPORTED: 4029,

                /**
                 * HLSJS cannot parse error
                 */
                HLSJS_CANNOT_PARSE: 4030,

                /**
                 * The StreamingEngine called onChooseStreams() but the callback receiver
                 * did not return the correct number or type of Streams.
                 *
                 * This can happen when there is multi-Period content where one Period is
                 * video+audio and another is video-only or audio-only.  We don't support this
                 * case because it is incompatible with MSE.  When the browser reaches the
                 * transition, it will pause, waiting for the audio stream.
                 */
                INVALID_STREAMS_CHOSEN: 5005,

                /**
                 * The manifest indicated protected content, but the manifest parser was
                 * unable to determine what key systems should be used.
                 */
                NO_RECOGNIZED_KEY_SYSTEMS: 6000,

                /**
                 * None of the requested key system configurations are available.  This may
                 * happen under the following conditions:
                 *  The key system is not supported,
                 *  The key system does not support the features requested (e.g.
                 *        persistent state),
                 *  A user prompt was shown and the user denied access,
                 *   The key system is not available from unsecure contexts. (ie.
                 * requires HTTPS) See https://goo.gl/EEhZqT.
                 */
                REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,

                /**
                 * The browser found one of the requested key systems, but it failed to
                 * create an instance of the CDM for some unknown reason.
                 */
                FAILED_TO_CREATE_CDM: 6002,

                /**
                 * The browser found one of the requested key systems and created an instance
                 * of the CDM, but it failed to attach the CDM to the video for some unknown
                 * reason.
                 */
                FAILED_TO_ATTACH_TO_VIDEO: 6003,

                /**
                 * The CDM rejected the server certificate supplied by the application.
                 * The certificate may be malformed or in an unsupported format.
                 */
                INVALID_SERVER_CERTIFICATE: 6004,

                /**
                 * The CDM refused to create a session for some unknown reason.
                 */
                FAILED_TO_CREATE_SESSION: 6005,

                /**
                 * The CDM was unable to generate a license request for the init data it was
                 * given.  The init data may be malformed or in an unsupported format.
                 */
                FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,

                /**
                 * The license request failed.  This could be a timeout, a network failure, or
                 * a rejection by the server.
                 */
                LICENSE_REQUEST_FAILED: 6007,

                /**
                 * The license response was rejected by the CDM.  The server's response may be
                 * invalid or malformed for this CDM.
                 */
                LICENSE_RESPONSE_REJECTED: 6008,

                /**
                 * The manifest does not specify any DRM info, but the content is encrypted.
                 * Either the manifest or the manifest parser are broken.
                 */
                ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,

                /**
                 * No license server was given for the key system signaled by the manifest.
                 * A license server URI is required for every key system.
                 */
                NO_LICENSE_SERVER_GIVEN: 6012,

                /**
                 * A required offline session was removed.  The content is not playable.
                 */
                OFFLINE_SESSION_REMOVED: 6013,

                /**
                 * The license has expired.  This is triggered when playback is stalled on a
                 * 'waitingforkeys' event and there are any expired keys in the key status map
                 * of any active session.
                 */
                EXPIRED: 6014,
                /**
                 * DRM
                 */
                BAD_FAIRPLAY_RESPONSE: 6015,
                /**
                 * DRM
                 */
                COULD_NOT_CREATE_MEDIA_KEYS: 6016,
                /**
                 * DRM
                 */
                COULD_NOT_CREATE_KEY_SESSION: 6017,

                /**
                 * The call to Player.load() was interrupted by a call to Player.unload()
                 * or another call to Player.load().
                 */
                LOAD_INTERRUPTED: 7000,
                /**
                 * HLSJS levelSwitchError - bitrate switch issue
                 */
                BITRATE_SWITCH_ISSUE: 7001,
                /**
                 * The call to Player.load() failed. see other data for more details.
                 */
                LOAD_FAILED: 7002,
                /**
                 * Build error. unregistered plugin
                 */
                RUNTIME_ERROR_NOT_REGISTERED_PLUGIN: 7003,
                /**
                 * Build error. Unimplemnted method
                 */
                RUNTIME_ERROR_METHOD_NOT_IMPLEMENTED: 7004,
                /**
                 * Build error. not a valid handler
                 */
                RUNTIME_ERROR_NOT_VALID_HANDLER: 7005,
                /**
                 * When the play API called without any source
                 */
                NO_SOURCE_PROVIDED: 7006,
                /**
                 * When the load API called without compatible engine to play the source
                 */
                NO_ENGINE_FOUND_TO_PLAY_THE_SOURCE: 7007,
                /**
                 * An error occurred while trying to enter picture in picture mode, more info in the data
                 */
                ENTER_PICTURE_IN_PICTURE_FAILED: 7008,
                /**
                 * An error occurred while trying to exit picture in picture mode, more info in the data
                 */
                EXIT_PICTURE_IN_PICTURE_FAILED: 7009,

                /**
                 * The Cast API is unavailable.  This may be because of one of the following:
                 * - The browser may not have Cast support
                 * - The browser may be missing a necessary Cast extension
                 * - The Cast sender library may not be loaded in your app
                 */
                CAST_API_UNAVAILABLE: 8000,

                /**
                 * No cast receivers are available at this time.
                 */
                NO_CAST_RECEIVERS: 8001,

                /**
                 * The library is already casting.
                 */
                ALREADY_CASTING: 8002,

                /**
                 * A Cast SDK error that we did not explicitly plan for has occurred.
                 * Check data[0] and refer to the Cast SDK documentation for details.
                 */
                UNEXPECTED_CAST_ERROR: 8003,

                /**
                 * The cast operation was canceled by the user.
                 */
                CAST_CANCELED_BY_USER: 8004,

                /**
                 * The cast connection timed out.
                 */
                CAST_CONNECTION_TIMED_OUT: 8005,

                /**
                 * The requested receiver app ID does not exist or is unavailable.
                 * Check the requested app ID for typos.
                 */
                CAST_RECEIVER_APP_UNAVAILABLE: 8006,

                /**
                 * Offline storage is not supported on this browser; it is required for
                 * offline support.
                 */
                STORAGE_NOT_SUPPORTED: 9000,

                /**
                 * An unknown error occurred in the IndexedDB.
                 * On Firefox, one common source for UnknownError calls is reverting
                 * Firefox to an old version. This makes the indexedDB storage inaccessible
                 * for older versions. The only way to fix this is to delete the storage
                 * data in your profile. See https://goo.gl/eKVPPe.
                 */
                INDEXED_DB_ERROR: 9001,

                /**
                 * The operation was aborted.  For example, by a call to destroy().
                 */
                OPERATION_ABORTED: 9002,

                /**
                 * The specified item was not found in the IndexedDB.
                 */
                REQUESTED_ITEM_NOT_FOUND: 9003,

                /**
                 * A network request was made with a malformed offline URI.
                 */
                MALFORMED_OFFLINE_URI: 9004,

                /**
                 * The specified content is live or in-progress.
                 */
                CANNOT_STORE_LIVE_OFFLINE: 9005,

                /**
                 * There is already a store operation in-progress, wait until it completes
                 * before starting another.
                 */
                STORE_ALREADY_IN_PROGRESS: 9006,

                /**
                 * The specified manifest is encrypted but does not specify any init data.
                 * Without init data specified in the manifest, the content will not be
                 * playable offline.
                 */
                NO_INIT_DATA_FOR_OFFLINE: 9007,

                /**
                 * shaka.offline.Storage was constructed with a Player proxy instead of a
                 * local player instance.  To fix this, use Player directly with Storage
                 * instead of the results of CastProxy.prototype.getPlayer().
                 */
                LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,

                /**
                 * When the manifest contains no period playable streams, it means the
                 * manifest is unsupported by the browser.
                 */
                CONTENT_UNSUPPORTED_BY_BROWSER: 9009,

                /**
                 * Cannot add Item to the indexed db
                 */
                CANNOT_ADD_ITEM: 9010,

                /**
                 * Download operation aborted.
                 */
                DOWNLOAD_FAILED: 9011,

                /**
                 * Fetching the entry provider information failed.
                 */
                COULD_NOT_GET_INFO_FROM_MEDIA_PROVIDER: 9012,

                /**
                 * Could not find the entry id in the DB.
                 */
                ENTRY_DOES_NOT_EXIST: 9013,

                /**
                 * Pause operation failed
                 */
                PAUSE_FAILED: 9014,

                /**
                 * Resume operation failed
                 */
                RESUME_FAILED: 9015,

                /**
                 * Renewing the license of the entry failed
                 */
                RENEW_LICENSE_FAILED: 9016,

                /**
                 * Could not download the entry as it already exists in the data base.
                 */
                ENTRY_ALREADY_EXISTS: 9017,

                /**
                 * Could not remove the requested entry
                 */
                REMOVE_FAILED: 9018,

                /**
                 * Load media failed.
                 */
                CAST_LOAD_MEDIA_FAILED: 10001,

                /**
                 * Custom message parsing error.
                 */
                CAST_CUSTOM_MESSAGE_PARSING_ERROR: 100002,

                /**
                 * Edit tracks info error.
                 */
                CAST_EDIT_TRACKS_INFO_ERROR: 10003,

                /**
                 * VR plugin is not supported.
                 */
                VR_NOT_SUPPORTED: 11000
            };


            Object.assign(Code, _adErrorCode.AdErrorCode);

            exports.Code = Code;

            /***/
        }),
        /* 47 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var AdErrorCode = {
                /**
                 * VAST supplied in adm is not a valid XML document.
                 * URL supplied in nurl does not resolve to a valid XML document.
                 * Nurl only: Server did not respond with VAST, or at all when player called the nurl.
                 * Perhaps a CORS issue
                 * Ensure VAST XML is properly formatted per IAB spec
                 */
                XML_PARSING_ERROR: 8100,
                /**
                 * The VAST validates as XML, but does not validate per the VAST schema (i.e. there are missing mandatory elements or attributes, or combinations of elements/attributes that are not permissible).
                 */
                VAST_SCHEMA_VALIDATION_ERROR: 8101,
                /**
                 * idder did not respect the VAST version(s) listed in the bid request.
                 * Exchange is sending wrong VAST version(s) in bid request.
                 * VAST does not contain version (this could also be considered a schema validation issue)
                 */
                VAST_RESPONSE_VERSION_NOT_SUPPORTED: 8102,
                /**
                 * Player wanted Skippable Linear, but got back Linear.
                 * Player wanted Linear, but got back Skippable Linear.
                 * For Skippable Linear, skipoffset doesn’t meet publisher expectations.
                 * Bidder did not respect the skippability/skipoffset in the bid request.
                 * Exchange is sending wrong skippability/skipoffset in the bid request.
                 * Potentially any of the reasons in 201-203
                 * Make sure proper ad types are being sent and skippable attributes are being respected
                 */
                TRAFFICKING_ERROR: 8200,
                /**
                 * Bidder did not respect the linearity in the bid request.
                 * Exchange is sending wrong linearity in the bid request
                 * Ensure linearity requested is being respected
                 */
                VAST_UNEXPECTED_LINEARITY: 8201,
                /**
                 * Bidder did not respect the duration in the bid request.
                 * Exchange is sending wrong duration in the bid request
                 * Ensure duration requested is being respected
                 */
                VAST_UNEXPECTED_DURATION_ERROR: 8201,
                /**
                 * No MediaFile is available with dimensions that are matching for the device (i.e. mobile devices that cannot play full HD).
                 * No MediaFile is available with an acceptable bitrate.
                 * Bidder did not respect maxbitrate
                 * Exchange is not sending maxbitrate
                 * High bitrate creatives attempting to serve on mobile devices
                 * Ensure multiple mediafiles options to cover different devices and environments
                 */
                VAST_UNEXPECTED_SIZE_ERROR: 8203,
                /**
                 * Check that all VAST URIs are reachable and not timing out
                 * Ensure wrapper limit is not reached
                 */
                VAST_WRAPPER_ERROR: 8300,
                /**
                 * Check that the VAST URI is valid and reachable.
                 * This could be due to poor internet connection or non-optimized page and therefore request times out. Check whether this occurs more on mobile devices (may not be reproducible due to network limits).
                 * Check timeout limit of your player to ensure this isn't being reached
                 * This can be caused by HTTP serving to HTTPS.
                 */
                VAST_URI_ERROR: 8301,
                /**
                 * This can be caused by a circular loop of daisy chaining (one network bouncing to another and another).
                 * Too many wrappers
                 * Look into increasing the wrapper limit of your player to accommodate these creatives
                 */
                VAST_TOO_MANY_REDIRECTS: 8302,
                /**
                 * No Ad element in VAST doc (after following wrappers).
                 * When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.
                 * Ensure the bids being returned do not have empty VAST
                 */
                NO_ADS_VAST_RESPONSE: 8303,
                /**
                 * Check that the MediaFile a valid video file of the specified format in the request
                 * Make sure the URL returns a valid video asset
                 * Check for browser restrictions such as autoplay blocking, auto-mute, etc
                 * See also possible causes for 401-405
                 */
                GENERAL_LINEAR_ERROR: 8400,
                /**
                 * Ensure that all MediaFiles in the response return a valid video asset
                 */
                FILE_NOT_FOUND: 8401,
                /**
                 * Issue with CDN server.
                 * Timeout (in milliseconds) when loading a video ad media file. If loading takes longer than this timeout, the ad playback is canceled.
                 * Can be caused by low bandwidth, or poor website implementation with competing requests that delay loading of the media file.
                 * Can occur when a video auto-plays in a mobile environment, since it should be click-to-play (there are some exceptions).
                 * Increase the timeout limit of your player
                 */
                VAST_MEDIA_LOAD_TIMEOUT: 8402,
                /**
                 * Bidder did not respect mime types in bid request.
                 * Exchange did not send correct mime types.
                 * This may indicate that the wrong creative type attempted to play. For example, a Flash creative attempted to play on a mobile device or WebM on iOS.
                 * This error type is more common on mobile.
                 * Ad is inline but no compatible media file found. Generally, if the player reaches a point where it sees no MediaFiles in the array of mediafiles considered eligible
                 */
                MEDIA_FILE_NOT_FOUND: 8403,
                /**
                 * CORS issue for CDN server.
                 * Unsupported Codecs.
                 * Mismatch between MIME type and video file type.
                 * Unsupported delivery method
                 */
                MEDIA_FILE_DISPLAY_ERROR: 8405,
                /**
                 * Ensure that there is a mezzanine file included in the response
                 */
                MEZZANINE_FILE_NOT_PROVIDED: 8406,
                /**
                 * This is an expected error while the video is being transcoded. This error will stop once transcoding is complete and available.
                 */
                MEZZANINE_DOWNLOADED_FOR_THE_FIRST_TIME: 8407,
                /**
                 * The ad returned in the VAST response was rejected.
                 */
                VAST_RESPONSE_AD_REJECTED: 8408,
                /**
                 * The interactive creative defined in the InteractiveCreativeFile node was not executed.
                 */
                CREATIVE_WAS_NOT_EXECUTED: 8409,
                /**
                 * The code referenced in the Verification node was not executed.
                 */
                CODE_REFERENCED_NOT_EXECUTED: 8410,
                /**
                 * General NonLinearAds error.
                 */
                GENERAL_NON_LINEAR_AD_ERROR: 8500,
                /**
                 * Unable to display non-linear ad because creative dimensions do not align with creative display area (in other words, the creative dimension was too large).
                 */
                NON_LINEAR_CREATIVE_DIMENSIONS_NOT_ALIGN_ERROR: 8501,
                /**
                 * Unable to fetch NonLinearAds/NonLinear resource.
                 */
                NON_LINEAR_FETCH_ERROR: 8502,
                /**
                 * Could not find NonLinear resource with supported type.
                 */
                NON_LINEAR_RESOURCE_NOT_FOUND: 8503,
                /**
                 * General CompanionAds error.
                 */
                GENERAL_COMPANION_ADS_ERROR: 8600,
                /**
                 * Unable to display companion because creative dimensions do not fit within the companion display area (in other words, space was not available).
                 */
                COMPANION_DIMENSIONS_NOT_FIT: 8601,
                /**
                 * Unable to display Required Companion.
                 */
                COMPANION_CANNOT_BE_DISPLAY: 8602,
                /**
                 * Unable to fetch CompanionAds/Companion resource.
                 */
                COMPANION_CANNOT_BE_FETCHED: 8603,
                /**
                 * Could not find Companion resource with supported type.
                 */
                COMPANION_TYPE_NOT_FOUND: 8604,
                /**
                 * This error is usually fired when the error does not match the criteria of any of the other errors.
                 */
                AD_UNDEFINED_ERROR: 8900,
                /**
                 * General VPAID error.
                 */
                GENERAL_VPAID_ERROR: 8901
            };

            exports.AdErrorCode = AdErrorCode;

            /***/
        }),
        /* 48 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });


            var Category = {
                /** Errors from the network stack. */
                NETWORK: 1,

                /** Errors parsing text streams. */
                TEXT: 2,

                /** Errors parsing or processing audio or video streams. */
                MEDIA: 3,

                /** Errors parsing the Manifest. */
                MANIFEST: 4,

                /** Errors related to streaming. */
                STREAMING: 5,

                /** Errors related to DRM. */
                DRM: 6,

                /** Miscellaneous errors from the player. */
                PLAYER: 7,

                /** Errors related to ads. */
                ADS: 8,

                /** Errors in the database storage (offline). */
                STORAGE: 9,

                /** Errors related to cast. */
                CAST: 10,

                /** Errors from VR plugin. */
                VR: 11
            };
            exports.Category = Category;

            /***/
        }),
        /* 49 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Locale class
             * @class
             *
             */
            var Locale = function() {
                function Locale() {
                    _classCallCheck(this, Locale);
                }

                _createClass(Locale, null, [{
                    key: 'language',

                    /**
                     * tries to return the locale language in IOS-693-1 format(two-letter codes, one per language for)
                     * @returns {string} - the IOS-693-1 language string
                     * @static
                     */
                    get: function get() {
                        var lang = void 0;

                        if (navigator.languages && navigator.languages.length) {
                            // latest versions of Chrome and Firefox set this correctly
                            lang = navigator.languages[0];
                        } else if (navigator.userLanguage) {
                            // IE only
                            //$FlowFixMe - userLanguage is IE specific and flow doesn't have it in definitions
                            lang = navigator.userLanguage;
                        } else {
                            // latest versions of Chrome, Firefox, and Safari set this correctly
                            lang = navigator.language;
                        }

                        if (lang && lang.match('-')) {
                            lang = lang.split('-')[0];
                        }

                        return lang;
                    }
                }]);

                return Locale;
            }();

            exports.default = Locale;

            /***/
        }),
        /* 50 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _state = __webpack_require__(24);

            var _state2 = _interopRequireDefault(_state);

            var _stateType = __webpack_require__(19);

            var _eventType = __webpack_require__(3);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * This class responsible to manage all the state machine of the player.
             * @classdesc
             */
            var StateManager = function() {

                /**
                 * @constructor
                 * @param {Player} player - Reference to the player.
                 */

                /**
                 * Holds the state history of the player.
                 * @member
                 * @type {Array<State>}
                 * @private
                 */

                /**
                 * Holds the previous state of the player.
                 * @member
                 * @type {State | null}
                 * @private
                 */

                /**
                 * The event manager of the class.
                 * @member
                 * @type {EventManager}
                 * @private
                 */

                /**
                 * The logger of the class.
                 * @member
                 * @type {any}
                 * @private
                 */
                function StateManager(player) {
                    var _this = this,
                        _StateType$IDLE,
                        _StateType$LOADING,
                        _StateType$PAUSED,
                        _StateType$PLAYING,
                        _StateType$BUFFERING,
                        _transitions;

                    _classCallCheck(this, StateManager);

                    this._transitions = (_transitions = {}, _defineProperty(_transitions, _stateType.StateType.IDLE, (_StateType$IDLE = {}, _defineProperty(_StateType$IDLE, _eventType.Html5EventType.LOAD_START, function() {
                        _this._updateState(_stateType.StateType.LOADING);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$IDLE, _eventType.Html5EventType.PLAY, function() {
                        _this._updateState(_stateType.StateType.BUFFERING);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$IDLE, _eventType.Html5EventType.SEEKED, function() {
                        _this._updateState(_stateType.StateType.PAUSED);
                        _this._dispatchEvent();
                    }), _StateType$IDLE)), _defineProperty(_transitions, _stateType.StateType.LOADING, (_StateType$LOADING = {}, _defineProperty(_StateType$LOADING, _eventType.Html5EventType.LOADED_METADATA, function() {
                        _this._updateState(_stateType.StateType.PAUSED);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$LOADING, _eventType.Html5EventType.ERROR, function() {
                        _this._updateState(_stateType.StateType.IDLE);
                        _this._dispatchEvent();
                    }), _StateType$LOADING)), _defineProperty(_transitions, _stateType.StateType.PAUSED, (_StateType$PAUSED = {}, _defineProperty(_StateType$PAUSED, _eventType.Html5EventType.PLAY, function() {
                        _this._updateState(_stateType.StateType.PLAYING);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$PAUSED, _eventType.Html5EventType.PLAYING, function() {
                        _this._updateState(_stateType.StateType.PLAYING);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$PAUSED, _eventType.Html5EventType.ENDED, function() {
                        _this._updateState(_stateType.StateType.IDLE);
                        _this._dispatchEvent();
                    }), _StateType$PAUSED)), _defineProperty(_transitions, _stateType.StateType.PLAYING, (_StateType$PLAYING = {}, _defineProperty(_StateType$PLAYING, _eventType.Html5EventType.PAUSE, function() {
                        _this._updateState(_stateType.StateType.PAUSED);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$PLAYING, _eventType.Html5EventType.WAITING, function() {
                        _this._updateState(_stateType.StateType.BUFFERING);
                        _this._lastWaitingTime = _this._player.currentTime;
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$PLAYING, _eventType.Html5EventType.ENDED, function() {
                        _this._updateState(_stateType.StateType.IDLE);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$PLAYING, _eventType.Html5EventType.ERROR, function() {
                        _this._updateState(_stateType.StateType.IDLE);
                        _this._dispatchEvent();
                    }), _StateType$PLAYING)), _defineProperty(_transitions, _stateType.StateType.BUFFERING, (_StateType$BUFFERING = {}, _defineProperty(_StateType$BUFFERING, _eventType.Html5EventType.PLAYING, function() {
                        _this._updateState(_stateType.StateType.PLAYING);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$BUFFERING, _eventType.Html5EventType.PAUSE, function() {
                        _this._updateState(_stateType.StateType.PAUSED);
                        _this._dispatchEvent();
                    }), _defineProperty(_StateType$BUFFERING, _eventType.Html5EventType.SEEKED, function() {
                        if (_this._prevState && _this._prevState.type === _stateType.StateType.PLAYING) {
                            _this._updateState(_stateType.StateType.PLAYING);
                            _this._dispatchEvent();
                        }
                    }), _defineProperty(_StateType$BUFFERING, _eventType.Html5EventType.TIME_UPDATE, function() {
                        if (_this._player.currentTime !== _this._lastWaitingTime && _this._prevState && _this._prevState.type === _stateType.StateType.PLAYING) {
                            _this._lastWaitingTime = null;
                            _this._updateState(_stateType.StateType.PLAYING);
                            _this._dispatchEvent();
                        }
                    }), _StateType$BUFFERING)), _transitions);

                    this._player = player;
                    this._logger = (0, _logger2.default)('StateManager');
                    this._eventManager = new _eventManager2.default();
                    this._history = [];
                    this._prevState = null;
                    this._curState = new _state2.default(_stateType.StateType.IDLE);
                    this._attachListeners();
                }

                /**
                 * Register to all necessary events which impacts on the player state.
                 * @private
                 * @returns {void}
                 */

                /**
                 * The possible transitions from one state to another.
                 * @type {Array<Transition>}
                 * @private
                 */

                /**
                 * Holds the time of the beginning of the last buffering (waiting event)
                 * @member
                 * @type {number | null}
                 * @private
                 */

                /**
                 * Holds the current state of the player.
                 * @member
                 * @type {State}
                 * @private
                 */

                /**
                 * Reference to the actual player.
                 * @member
                 * @type {Player}
                 * @private
                 */


                _createClass(StateManager, [{
                    key: '_attachListeners',
                    value: function _attachListeners() {
                        this._eventManager.listen(this._player, _eventType.Html5EventType.ERROR, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.ENDED, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.PLAY, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.LOAD_START, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.PLAYING, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.LOADED_METADATA, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.PAUSE, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.WAITING, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.SEEKED, this._doTransition.bind(this));
                        this._eventManager.listen(this._player, _eventType.Html5EventType.TIME_UPDATE, this._doTransition.bind(this));
                    }

                    /**
                     * Performs a state transition depends on the event which occurs in the player system.
                     * @param {FakeEvent} event - The event occurs in the player system.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_doTransition',
                    value: function _doTransition(event) {
                        if (event.type !== _eventType.Html5EventType.TIME_UPDATE || this._curState === _stateType.StateType.BUFFERING && event.type === _eventType.Html5EventType.TIME_UPDATE) {
                            this._logger.debug('Do transition request', event.type); // don't show most of 'timeupdate' events
                        }
                        var transition = this._transitions[this._curState.type];
                        if (typeof transition[event.type] === 'function') {
                            transition[event.type]();
                        }
                    }

                    /**
                     * Updates the player's state.
                     * @param {string} type - The type of the new state.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_updateState',
                    value: function _updateState(type) {
                        if (this._curState.type !== type) {
                            this._curState.duration = Date.now() / 1000;
                            this._history.push(this._curState);
                            this._prevState = this._curState;
                            this._curState = new _state2.default(type);
                            this._logger.debug('Switch player state: from ' + this._prevState.type + ' to ' + this._curState.type);
                        }
                    }

                    /**
                     * Fires the playerStateChanged event after state has been changed.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_dispatchEvent',
                    value: function _dispatchEvent() {
                        var event = new _fakeEvent2.default(_eventType.CustomEventType.PLAYER_STATE_CHANGED, {
                            oldState: this._prevState,
                            newState: this._curState
                        });
                        this._player.dispatchEvent(event);
                    }

                    /**
                     * Destroys the state manager.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this._history = [];
                        this._eventManager.destroy();
                    }

                    /**
                     * Resets the state manager.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        this._history = [];
                    }

                    /**
                     * Getter to the current state of the player.
                     * @public
                     * @returns {State} - The current state object
                     */

                }, {
                    key: 'currentState',
                    get: function get() {
                        return this._curState;
                    }

                    /**
                     * Getter to the previous state of the player.
                     * @public
                     * @returns {State|null} - The previous state object, or null if such doesn't exists
                     */

                }, {
                    key: 'previousState',
                    get: function get() {
                        return this._prevState;
                    }

                    /**
                     * Getter to the state history of the player.
                     * @public
                     * @returns {Array.<State>} - The full states history objects
                     */

                }, {
                    key: 'history',
                    get: function get() {
                        return this._history;
                    }
                }]);

                return StateManager;
            }();

            exports.default = StateManager;

            /***/
        }),
        /* 51 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Copyright 2013 vtt.js Contributors
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var scrollSetting = {
                '': true,
                up: true
            };

            /**
             * find scroll setting
             * @param {string} value - a string
             * @returns {*} the settings
             */
            function findScrollSetting(value) {
                if (typeof value !== 'string') {
                    return false;
                }
                var scroll = scrollSetting[value.toLowerCase()];
                return scroll ? value.toLowerCase() : false;
            }

            /**
             * check percentage validation
             * @param {number} value - percentage
             * @returns {boolean} - boolean
             */
            function isValidPercentValue(value) {
                return typeof value === 'number' && value >= 0 && value <= 100;
            }

            // VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface

            var VTTRegion = function() {
                function VTTRegion() {
                    _classCallCheck(this, VTTRegion);

                    this._width = 100;
                    this._lines = 3;
                    this._regionAnchorX = 0;
                    this._regionAnchorY = 100;
                    this._viewportAnchorX = 0;
                    this._viewportAnchorY = 100;
                    this._scroll = '';
                }

                _createClass(VTTRegion, [{
                    key: 'width',
                    get: function get() {
                        return this._width;
                    },
                    set: function set(value) {
                        if (!isValidPercentValue(value)) {
                            throw new Error('Width must be between 0 and 100.');
                        }
                        this._width = value;
                    }
                }, {
                    key: 'scroll',
                    get: function get() {
                        return this._scroll;
                    },
                    set: function set(value) {
                        var setting = findScrollSetting(value);
                        // Have to check for false as an empty string is a legal value.
                        if (setting === false) {
                            throw new SyntaxError('An invalid or illegal string was specified.');
                        }
                        this._scroll = setting;
                    }
                }, {
                    key: 'viewportAnchorY',
                    get: function get() {
                        return this._viewportAnchorY;
                    },
                    set: function set(value) {
                        if (!isValidPercentValue(value)) {
                            throw new Error('ViewportAnchorY must be between 0 and 100.');
                        }
                        this._viewportAnchorY = value;
                    }
                }, {
                    key: 'viewportAnchorX',
                    get: function get() {
                        return this._viewportAnchorX;
                    },
                    set: function set(value) {
                        if (!isValidPercentValue(value)) {
                            throw new Error('ViewportAnchorX must be between 0 and 100.');
                        }
                        this._viewportAnchorX = value;
                    }
                }, {
                    key: 'regionAnchorX',
                    get: function get() {
                        return this._regionAnchorX;
                    },
                    set: function set(value) {
                        if (!isValidPercentValue(value)) {
                            throw new Error('RegionAnchorY must be between 0 and 100.');
                        }
                        this._regionAnchorX = value;
                    }
                }, {
                    key: 'lines',
                    get: function get() {
                        return this._lines;
                    },
                    set: function set(value) {
                        if (typeof value !== 'number') {
                            throw new TypeError('Lines must be set to a number.');
                        }
                        this._lines = value;
                    }
                }, {
                    key: 'regionAnchorY',
                    get: function get() {
                        return this._regionAnchorY;
                    },
                    set: function set(value) {
                        if (!isValidPercentValue(value)) {
                            throw new Error('RegionAnchorX must be between 0 and 100.');
                        }
                        this._regionAnchorY = value;
                    }
                }]);

                return VTTRegion;
            }();

            var Region = void 0;
            if (typeof window !== 'undefined' && window.VTTRegion) {
                exports.Region = Region = window.VTTRegion;
            } else {
                exports.Region = Region = VTTRegion;
            }

            exports.Region = Region;

            /***/
        }),
        /* 52 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.LabelToTrackMap = undefined;

            var _LabelToTrackMap;

            var _trackType = __webpack_require__(14);

            var _labelOptions = __webpack_require__(53);

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            var LabelToTrackMap = (_LabelToTrackMap = {}, _defineProperty(_LabelToTrackMap, _labelOptions.LabelOptions.AUDIO, _trackType.TrackType.AUDIO), _defineProperty(_LabelToTrackMap, _labelOptions.LabelOptions.CAPTIONS, _trackType.TrackType.TEXT), _defineProperty(_LabelToTrackMap, _labelOptions.LabelOptions.QUALITIES, _trackType.TrackType.VIDEO), _LabelToTrackMap);

            exports.LabelToTrackMap = LabelToTrackMap;

            /***/
        }),
        /* 53 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var LabelOptions = {
                AUDIO: 'audio',
                CAPTIONS: 'captions',
                QUALITIES: 'qualities'
            };

            exports.LabelOptions = LabelOptions;

            /***/
        }),
        /* 54 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _middleware = __webpack_require__(55);

            var _middleware2 = _interopRequireDefault(_middleware);

            var _baseMiddleware = __webpack_require__(22);

            var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * The playback middleware.
             */
            var PlaybackMiddleware = function() {

                /**
                 * @constructor
                 */

                /**
                 * The middleware implementation.
                 * @private
                 * @member
                 */
                function PlaybackMiddleware() {
                    _classCallCheck(this, PlaybackMiddleware);

                    this._middleware = new _middleware2.default(PlaybackMiddleware.Actions);
                }

                /**
                 * Registers a playback middleware instance to the middleware chain.
                 * @param {BaseMiddleware} middlewareInstance - The middleware instance.
                 * @public
                 * @returns {void}
                 */

                /**
                 * The actions of the playback middleware.
                 * @static
                 */


                _createClass(PlaybackMiddleware, [{
                    key: 'use',
                    value: function use(middlewareInstance) {
                        this._middleware.use(middlewareInstance);
                    }

                    /**
                     * Runs a play chain.
                     * @param {Function} callback - The last play handler in the chain.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'play',
                    value: function play(callback) {
                        this._middleware.run(PlaybackMiddleware.Actions.PLAY, callback);
                    }

                    /**
                     * Runs a pause chain.
                     * @param {Function} callback - The last pause handler in the chain.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'pause',
                    value: function pause(callback) {
                        this._middleware.run(PlaybackMiddleware.Actions.PAUSE, callback);
                    }
                }]);

                return PlaybackMiddleware;
            }();

            PlaybackMiddleware.Actions = {
                PLAY: 'play',
                PAUSE: 'pause'
            };
            exports.default = PlaybackMiddleware;

            /***/
        }),
        /* 55 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _multiMap = __webpack_require__(15);

            var _multiMap2 = _interopRequireDefault(_multiMap);

            var _baseMiddleware = __webpack_require__(22);

            var _baseMiddleware2 = _interopRequireDefault(_baseMiddleware);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Generic middleware implementation.
             */
            var Middleware = function() {

                /**
                 * @constructor
                 * @param {Object} actions - The actions for the middleware.
                 */

                /**
                 * The actions supported by the middleware.
                 * @private
                 * @member
                 */
                function Middleware(actions) {
                    _classCallCheck(this, Middleware);

                    this._actions = actions;
                    this._middlewares = new _multiMap2.default();
                    this._logger = (0, _logger2.default)('Middleware');
                }

                /**
                 * Registers a middleware instance to the middleware chain.
                 * @param {BaseMiddleware} middlewareInstance - The middleware instance.
                 * @public
                 * @returns {void}
                 */

                /**
                 * The logger of the middleware.
                 * @private
                 * @member
                 */

                /**
                 * The registered middlewares.
                 * @private
                 * @member
                 */


                _createClass(Middleware, [{
                    key: 'use',
                    value: function use(middlewareInstance) {
                        for (var _action in this._actions) {
                            var apiAction = this._actions[_action];
                            // $FlowFixMe
                            if (typeof middlewareInstance[apiAction] === 'function') {
                                this._logger.debug('Register <' + middlewareInstance.id + '> for action ' + apiAction);
                                // $FlowFixMe
                                this._middlewares.push(apiAction, middlewareInstance[apiAction].bind(middlewareInstance));
                            }
                        }
                    }

                    /**
                     * Runs a middleware chain for a specific action.
                     * @param {string} action - The action to run.
                     * @param {Function} callback - The callback function.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'run',
                    value: function run(action, callback) {
                        var _this = this;

                        this._logger.debug('Start middleware chain for action ' + action);
                        var middlewares = this._middlewares.get(action);
                        this._executeMiddleware(middlewares, function() {
                            _this._logger.debug('Finish middleware chain for action ' + action);
                            callback();
                        });
                    }

                    /**
                     * Executes all the middlewares one by one.
                     * @param {Array<Function>} middlewares - The middlewares for a specific action.
                     * @param {Function} callback - The callback function.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_executeMiddleware',
                    value: function _executeMiddleware(middlewares, callback) {
                        var composition = middlewares.reduceRight(
                            // eslint-disable-next-line no-unused-vars
                            function(next, fn) {
                                return function(v) {
                                    fn(next);
                                };
                            }, callback);
                        composition();
                    }
                }]);

                return Middleware;
            }();

            exports.default = Middleware;

            /***/
        }),
        /* 56 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var DefaultConfig = {
                logLevel: 'ERROR',
                sources: {
                    options: {
                        forceRedirectExternalStreams: false
                    },
                    metadata: {}
                },
                plugins: {},
                playback: {
                    audioLanguage: '',
                    textLanguage: '',
                    useNativeTextTrack: false,
                    enableCEA708Captions: false,
                    captionsTextTrack1Label: 'English',
                    captionsTextTrack1LanguageCode: 'en',
                    captionsTextTrack2Label: 'Spanish',
                    captionsTextTrack2LanguageCode: 'es',
                    volume: 1,
                    startTime: -1,
                    playsinline: true,
                    preload: 'none',
                    autoplay: false,
                    loop: false,
                    allowMutedAutoPlay: true,
                    muted: false,
                    pictureInPicture: true,
                    options: {
                        html5: {
                            hls: {},
                            dash: {},
                            native: {}
                        }
                    },
                    preferNative: {
                        hls: false,
                        dash: false
                    },
                    inBrowserFullscreen: false,
                    streamPriority: [{
                        engine: 'html5',
                        format: 'hls'
                    }, {
                        engine: 'html5',
                        format: 'dash'
                    }, {
                        engine: 'html5',
                        format: 'progressive'
                    }, {
                        engine: 'flash',
                        format: 'hls'
                    }]
                },
                abr: {
                    enabled: true,
                    fpsDroppedFramesInterval: 5000,
                    fpsDroppedMonitoringThreshold: 0.2,
                    capLevelOnFPSDrop: true,
                    capLevelToPlayerSize: false,
                    defaultBandwidthEstimate: 500e3,
                    restrictions: {
                        minBitrate: 0,
                        maxBitrate: Infinity
                    }
                },
                drm: {
                    keySystem: ''
                }
            };

            exports.DefaultConfig = DefaultConfig;

            /***/
        }),
        /* 57 */
        /***/
        (function(module, exports, __webpack_require__) {

            // style-loader: Adds some css to the DOM by adding a <style> tag

            // load the styles
            var content = __webpack_require__(58);
            if (typeof content === 'string') content = [
                [module.i, content, '']
            ];
            // Prepare cssTransformation
            var transform;

            var options = {}
            options.transform = transform
            // add the styles to the DOM
            var update = __webpack_require__(60)(content, options);
            if (content.locals) module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
                        var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
                        if (typeof newContent === 'string') newContent = [
                            [module.id, newContent, '']
                        ];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function() {
                    update();
                });
            }

            /***/
        }),
        /* 58 */
        /***/
        (function(module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(59)(undefined);
            // imports


            // module
            exports.push([module.i, ".playkit-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  outline: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.playkit-engine {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  object-fit: contain;\n}\n\n.playkit-engine video::-webkit-media-controls-panel,\n.playkit-engine video::-webkit-media-controls-panel-container,\n.playkit-engine video::-webkit-media-controls-start-playback-button,\n.playkit-engine video::-webkit-media-controls-play-button {\n  display: none;\n  -webkit-appearance: none;\n}\n\n.playkit-poster {\n  position: absolute;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #000;\n}\n\n.playkit-subtitles {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.playkit-black-cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n\n.playkit-size-iframe {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  visibility: hidden;\n}\n\n.playkit-in-browser-fullscreen-mode {\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  /*added for blocking element with fixed position which could be on the top of the player */\n  z-index: 999999 !important;\n}\n", ""]);

            // exports


            /***/
        }),
        /* 59 */
        /***/
        (function(module, exports) {

            /*
            	MIT License http://www.opensource.org/licenses/mit-license.php
            	Author Tobias Koppers @sokra
            */
            // css base code, injected by the css-loader
            module.exports = function(useSourceMap) {
                var list = [];

                // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function(item) {
                        var content = cssWithMappingToString(item, useSourceMap);
                        if (item[2]) {
                            return "@media " + item[2] + "{" + content + "}";
                        } else {
                            return content;
                        }
                    }).join("");
                };

                // import a list of modules into the list
                list.i = function(modules, mediaQuery) {
                    if (typeof modules === "string")
                        modules = [
                            [null, modules, ""]
                        ];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            } else if (mediaQuery) {
                                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };

            function cssWithMappingToString(item, useSourceMap) {
                var content = item[1] || '';
                var cssMapping = item[3];
                if (!cssMapping) {
                    return content;
                }

                if (useSourceMap && typeof btoa === 'function') {
                    var sourceMapping = toComment(cssMapping);
                    var sourceURLs = cssMapping.sources.map(function(source) {
                        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                    });

                    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                }

                return [content].join('\n');
            }

            // Adapted from convert-source-map (MIT)
            function toComment(sourceMap) {
                // eslint-disable-next-line no-undef
                var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

                return '/*# ' + data + ' */';
            }


            /***/
        }),
        /* 60 */
        /***/
        (function(module, exports, __webpack_require__) {

            /*
            	MIT License http://www.opensource.org/licenses/mit-license.php
            	Author Tobias Koppers @sokra
            */

            var stylesInDom = {};

            var memoize = function(fn) {
                var memo;

                return function() {
                    if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                    return memo;
                };
            };

            var isOldIE = memoize(function() {
                // Test for IE <= 9 as proposed by Browserhacks
                // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                // Tests for existence of standard globals is to allow style-loader
                // to operate correctly into non-standard environments
                // @see https://github.com/webpack-contrib/style-loader/issues/177
                return window && document && document.all && !window.atob;
            });

            var getElement = (function(fn) {
                var memo = {};

                return function(selector) {
                    if (typeof memo[selector] === "undefined") {
                        memo[selector] = fn.call(this, selector);
                    }

                    return memo[selector]
                };
            })(function(target) {
                return document.querySelector(target)
            });

            var singleton = null;
            var singletonCounter = 0;
            var stylesInsertedAtTop = [];

            var fixUrls = __webpack_require__(61);

            module.exports = function(list, options) {
                if (typeof DEBUG !== "undefined" && DEBUG) {
                    if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                }

                options = options || {};

                options.attrs = typeof options.attrs === "object" ? options.attrs : {};

                // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton) options.singleton = isOldIE();

                // By default, add <style> tags to the <head> element
                if (!options.insertInto) options.insertInto = "head";

                // By default, add <style> tags to the bottom of the target
                if (!options.insertAt) options.insertAt = "bottom";

                var styles = listToStyles(list, options);

                addStylesToDom(styles, options);

                return function update(newList) {
                    var mayRemove = [];

                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];

                        domStyle.refs--;
                        mayRemove.push(domStyle);
                    }

                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }

                    for (var i = 0; i < mayRemove.length; i++) {
                        var domStyle = mayRemove[i];

                        if (domStyle.refs === 0) {
                            for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                            delete stylesInDom[domStyle.id];
                        }
                    }
                };
            };

            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];

                    if (domStyle) {
                        domStyle.refs++;

                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }

                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    } else {
                        var parts = [];

                        for (var j = 0; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }

                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }

            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};

                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };

                    if (!newStyles[id]) styles.push(newStyles[id] = {
                        id: id,
                        parts: [part]
                    });
                    else newStyles[id].parts.push(part);
                }

                return styles;
            }

            function insertStyleElement(options, style) {
                var target = getElement(options.insertInto)

                if (!target) {
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                }

                var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

                if (options.insertAt === "top") {
                    if (!lastStyleElementInsertedAtTop) {
                        target.insertBefore(style, target.firstChild);
                    } else if (lastStyleElementInsertedAtTop.nextSibling) {
                        target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                    } else {
                        target.appendChild(style);
                    }
                    stylesInsertedAtTop.push(style);
                } else if (options.insertAt === "bottom") {
                    target.appendChild(style);
                } else {
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                }
            }

            function removeStyleElement(style) {
                if (style.parentNode === null) return false;
                style.parentNode.removeChild(style);

                var idx = stylesInsertedAtTop.indexOf(style);
                if (idx >= 0) {
                    stylesInsertedAtTop.splice(idx, 1);
                }
            }

            function createStyleElement(options) {
                var style = document.createElement("style");

                options.attrs.type = "text/css";

                addAttrs(style, options.attrs);
                insertStyleElement(options, style);

                return style;
            }

            function createLinkElement(options) {
                var link = document.createElement("link");

                options.attrs.type = "text/css";
                options.attrs.rel = "stylesheet";

                addAttrs(link, options.attrs);
                insertStyleElement(options, link);

                return link;
            }

            function addAttrs(el, attrs) {
                Object.keys(attrs).forEach(function(key) {
                    el.setAttribute(key, attrs[key]);
                });
            }

            function addStyle(obj, options) {
                var style, update, remove, result;

                // If a transform function was defined, run it on the css
                if (options.transform && obj.css) {
                    result = options.transform(obj.css);

                    if (result) {
                        // If transform returns a value, use that instead of the original css.
                        // This allows running runtime transformations on the css.
                        obj.css = result;
                    } else {
                        // If the transform function returns a falsy value, don't add this css.
                        // This allows conditional loading of css
                        return function() {
                            // noop
                        };
                    }
                }

                if (options.singleton) {
                    var styleIndex = singletonCounter++;

                    style = singleton || (singleton = createStyleElement(options));

                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);

                } else if (
                    obj.sourceMap &&
                    typeof URL === "function" &&
                    typeof URL.createObjectURL === "function" &&
                    typeof URL.revokeObjectURL === "function" &&
                    typeof Blob === "function" &&
                    typeof btoa === "function"
                ) {
                    style = createLinkElement(options);
                    update = updateLink.bind(null, style, options);
                    remove = function() {
                        removeStyleElement(style);

                        if (style.href) URL.revokeObjectURL(style.href);
                    };
                } else {
                    style = createStyleElement(options);
                    update = applyToTag.bind(null, style);
                    remove = function() {
                        removeStyleElement(style);
                    };
                }

                update(obj);

                return function updateStyle(newObj) {
                    if (newObj) {
                        if (
                            newObj.css === obj.css &&
                            newObj.media === obj.media &&
                            newObj.sourceMap === obj.sourceMap
                        ) {
                            return;
                        }

                        update(obj = newObj);
                    } else {
                        remove();
                    }
                };
            }

            var replaceText = (function() {
                var textStore = [];

                return function(index, replacement) {
                    textStore[index] = replacement;

                    return textStore.filter(Boolean).join('\n');
                };
            })();

            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? "" : obj.css;

                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                } else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;

                    if (childNodes[index]) style.removeChild(childNodes[index]);

                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    } else {
                        style.appendChild(cssNode);
                    }
                }
            }

            function applyToTag(style, obj) {
                var css = obj.css;
                var media = obj.media;

                if (media) {
                    style.setAttribute("media", media)
                }

                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }

                    style.appendChild(document.createTextNode(css));
                }
            }

            function updateLink(link, options, obj) {
                var css = obj.css;
                var sourceMap = obj.sourceMap;

                /*
                	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
                	and there is no publicPath defined then lets turn convertToAbsoluteUrls
                	on by default.  Otherwise default to the convertToAbsoluteUrls option
                	directly
                */
                var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

                if (options.convertToAbsoluteUrls || autoFixUrls) {
                    css = fixUrls(css);
                }

                if (sourceMap) {
                    // http://stackoverflow.com/a/26603875
                    css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
                }

                var blob = new Blob([css], {
                    type: "text/css"
                });

                var oldSrc = link.href;

                link.href = URL.createObjectURL(blob);

                if (oldSrc) URL.revokeObjectURL(oldSrc);
            }


            /***/
        }),
        /* 61 */
        /***/
        (function(module, exports) {


            /**
             * When source maps are enabled, `style-loader` uses a link element with a data-uri to
             * embed the css on the page. This breaks all relative urls because now they are relative to a
             * bundle instead of the current page.
             *
             * One solution is to only use full urls, but that may be impossible.
             *
             * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
             *
             * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
             *
             */

            module.exports = function(css) {
                // get current location
                var location = typeof window !== "undefined" && window.location;

                if (!location) {
                    throw new Error("fixUrls requires window.location");
                }

                // blank or null?
                if (!css || typeof css !== "string") {
                    return css;
                }

                var baseUrl = location.protocol + "//" + location.host;
                var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

                // convert each url(...)
                /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
                var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
                    // strip quotes (if they exist)
                    var unquotedOrigUrl = origUrl
                        .trim()
                        .replace(/^"(.*)"$/, function(o, $1) {
                            return $1;
                        })
                        .replace(/^'(.*)'$/, function(o, $1) {
                            return $1;
                        });

                    // already a full url? no change
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
                        return fullMatch;
                    }

                    // convert the url to a full url
                    var newUrl;

                    if (unquotedOrigUrl.indexOf("//") === 0) {
                        //TODO: should we add protocol?
                        newUrl = unquotedOrigUrl;
                    } else if (unquotedOrigUrl.indexOf("/") === 0) {
                        // path should be relative to the base url
                        newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                    } else {
                        // path should be relative to current directory
                        newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
                    }

                    // send back the fixed url(...)
                    return "url(" + JSON.stringify(newUrl) + ")";
                });

                // send back the fixed css
                return fixedCss;
            };


            /***/
        }),
        /* 62 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _eventType = __webpack_require__(3);

            var _mediaSourceProvider = __webpack_require__(31);

            var _mediaSourceProvider2 = _interopRequireDefault(_mediaSourceProvider);

            var _videoTrack = __webpack_require__(10);

            var _videoTrack2 = _interopRequireDefault(_videoTrack);

            var _audioTrack = __webpack_require__(11);

            var _audioTrack2 = _interopRequireDefault(_audioTrack);

            var _textTrack = __webpack_require__(9);

            var _vttCue = __webpack_require__(13);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _html5Autoplay = __webpack_require__(69);

            var _html5Autoplay2 = _interopRequireDefault(_html5Autoplay);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _droppedFramesWatcher = __webpack_require__(71);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * Html5 engine for playback.
             * @classdesc
             */
            var Html5 = function(_FakeEventTarget) {
                _inherits(Html5, _FakeEventTarget);

                _createClass(Html5, null, [{
                    key: 'isSupported',


                    /**
                     * Checks if html5 is supported.
                     * @returns {boolean} - Whether the html5 is supported.
                     */


                    /**
                     * @type {string} - The engine id.
                     * @public
                     * @static
                     */


                    /**
                     * The html5 class logger.
                     * @type {any}
                     * @static
                     * @private
                     */

                    /**
                     * Promise to indicate when a media source adapter can be loaded.
                     * @type {Promise<*>}
                     * @private
                     */

                    /**
                     * The selected media source adapter of the engine.
                     * @type {?IMediaSourceAdapter}
                     * @private
                     */

                    /**
                     * The video element.
                     * @type {HTMLVideoElement}
                     * @private
                     */
                    value: function isSupported() {
                        try {
                            var el = Utils.Dom.createElement('video');
                            el.volume = 0.5;
                            return !!el.canPlayType;
                        } catch (e) {
                            return false;
                        }
                    }

                    /**
                     * Factory method to create an engine.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @param {Object} config - The player configuration.
                     * @param {string} playerId - The player id.
                     * @returns {IEngine} - New instance of the run time engine.
                     * @public
                     * @static
                     */


                    /**
                     * @type {PKVideoElementStore} - Store object which maps between playerId to its video element.
                     */


                    /**
                     * The html5 capabilities handlers.
                     * @private
                     * @static
                     */

                    /**
                     * The player config object.
                     * @type {Object}
                     * @private
                     */

                    /**
                     * The event manager of the engine.
                     * @type {EventManager}
                     * @private
                     */

                }, {
                    key: 'createEngine',
                    value: function createEngine(source, config, playerId) {
                        return new this(source, config, playerId);
                    }

                    /**
                     * Checks if the engine can play a given source.
                     * @param {PKMediaSourceObject} source - The source object to check.
                     * @param {boolean} preferNative - prefer native flag.
                     * @param {PKDrmConfigObject} drmConfig - The drm config.
                     * @returns {boolean} - Whether the engine can play the source.
                     * @public
                     * @static
                     */

                }, {
                    key: 'canPlaySource',
                    value: function canPlaySource(source, preferNative, drmConfig) {
                        return _mediaSourceProvider2.default.canPlaySource(source, preferNative, drmConfig);
                    }

                    /**
                     * Runs the html5 capabilities tests.
                     * @returns {void}
                     * @public
                     * @static
                     */

                }, {
                    key: 'runCapabilities',
                    value: function runCapabilities() {
                        Html5._capabilities.forEach(function(capability) {
                            return capability.runCapability();
                        });
                    }

                    /**
                     * Gets the html5 capabilities.
                     * @return {Promise<Object>} - The html5 capabilities object.
                     * @public
                     * @static
                     */

                }, {
                    key: 'getCapabilities',
                    value: function getCapabilities() {
                        var promises = [];
                        Html5._capabilities.forEach(function(capability) {
                            return promises.push(capability.getCapability());
                        });
                        return Promise.all(promises).then(function(arrayOfResults) {
                            var mergedResults = {};
                            arrayOfResults.forEach(function(res) {
                                return Object.assign(mergedResults, res);
                            });
                            return _defineProperty({}, Html5.id, mergedResults);
                        });
                    }

                    /**
                     * For browsers which block auto play, use the user gesture to open the video element and enable playing via API.
                     * @returns {void}
                     * @param {string} playerId - the id to be set as the key of the video element
                     * @private
                     * @public
                     */

                }, {
                    key: 'prepareVideoElement',
                    value: function prepareVideoElement(playerId) {
                        if (!Html5.videoElementStore[playerId]) {
                            Html5._logger.debug('Create the video element for playing ' + playerId);
                            var videoElement = Utils.Dom.createElement('video');
                            Html5.videoElementStore[playerId] = videoElement;
                        }
                        Html5._logger.debug('Prepare the video element for playing ' + playerId);
                        Html5.videoElementStore[playerId].load();
                    }

                    /**
                     * The player playback rates.
                     * @type {Array<number>}
                     */

                }]);

                /**
                 * @constructor
                 * @param {PKMediaSourceObject} source - The selected source object.
                 * @param {Object} config - The player configuration.
                 * @param {string} playerId - The player id.
                 */
                function Html5(source, config, playerId) {
                    _classCallCheck(this, Html5);

                    var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this));

                    _this._eventManager = new _eventManager2.default();
                    _this._canLoadMediaSourceAdapterPromise = Promise.resolve();
                    _this._createVideoElement(playerId);
                    _this._init(source, config);
                    return _this;
                }

                /**
                 * Restores the engine.
                 * @param {PKMediaSourceObject} source - The selected source object.
                 * @param {Object} config - The player configuration.
                 * @returns {void}
                 */


                _createClass(Html5, [{
                    key: 'restore',
                    value: function restore(source, config) {
                        this.reset();
                        this._init(source, config);
                    }

                    /**
                     * Resets the engine.
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        this.detach();
                        this._eventManager.removeAll();
                        if (this._mediaSourceAdapter) {
                            this._canLoadMediaSourceAdapterPromise = this._mediaSourceAdapter.destroy();
                            this._mediaSourceAdapter = null;
                        }
                        if (this._el && this._el.src) {
                            Utils.Dom.setAttribute(this._el, 'src', '');
                            Utils.Dom.removeAttribute(this._el, 'src');
                        }
                    }

                    /**
                     * Destroys the engine.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.detach();
                        this._droppedFramesWatcher.destroy();
                        if (this._el) {
                            this.pause();
                            Utils.Dom.removeAttribute(this._el, 'src');
                            Utils.Dom.removeChild(this._el.parentNode, this._el);
                        }
                        this._eventManager.destroy();
                        _mediaSourceProvider2.default.destroy();
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.destroy();
                            this._mediaSourceAdapter = null;
                        }
                    }

                    /**
                     * Get the engine's id
                     * @public
                     * @returns {string} the engine's id
                     */

                }, {
                    key: 'attach',


                    /**
                     * Listen to the video element events and triggers them from the engine.
                     * @public
                     * @returns {void}
                     */
                    value: function attach() {
                        var _this2 = this;

                        Object.keys(_eventType.Html5EventType).forEach(function(html5Event) {
                            _this2._eventManager.listen(_this2._el, _eventType.Html5EventType[html5Event], function() {
                                if (_eventType.Html5EventType[html5Event] === _eventType.Html5EventType.ERROR) {
                                    _this2._handleVideoError();
                                } else {
                                    _this2.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType[html5Event]));
                                }
                            });
                        });
                        if (this._mediaSourceAdapter) {
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.VIDEO_TRACK_CHANGED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.AUDIO_TRACK_CHANGED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.TEXT_TRACK_CHANGED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.ABR_MODE_CHANGED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.TEXT_CUE_CHANGED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.TRACKS_CHANGED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.Html5EventType.ERROR, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.Html5EventType.TIME_UPDATE, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.Html5EventType.PLAYING, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.Html5EventType.WAITING, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.MEDIA_RECOVERED, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                            this._eventManager.listen(this._droppedFramesWatcher, _eventType.CustomEventType.FPS_DROP, function(event) {
                                return _this2.dispatchEvent(event);
                            });
                        }
                    }

                    /**
                     * Remove the listeners of the video element events.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'detach',
                    value: function detach() {
                        var _this3 = this;

                        Object.keys(_eventType.Html5EventType).forEach(function(html5Event) {
                            _this3._eventManager.unlisten(_this3._el, _eventType.Html5EventType[html5Event]);
                        });
                        if (this._mediaSourceAdapter) {
                            this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.CustomEventType.VIDEO_TRACK_CHANGED);
                            this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.CustomEventType.AUDIO_TRACK_CHANGED);
                            this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.CustomEventType.TEXT_TRACK_CHANGED);
                            this._eventManager.unlisten(this._mediaSourceAdapter, _eventType.CustomEventType.TEXT_CUE_CHANGED);
                        }
                    }

                    /**
                     * @returns {HTMLVideoElement} - The video element.
                     * @public
                     */

                }, {
                    key: 'getVideoElement',
                    value: function getVideoElement() {
                        return this._el;
                    }

                    /**
                     * Select a new video track.
                     * @param {VideoTrack} videoTrack - The video track object to set.
                     * @returns {void}
                     */

                }, {
                    key: 'selectVideoTrack',
                    value: function selectVideoTrack(videoTrack) {
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.selectVideoTrack(videoTrack);
                        }
                    }

                    /**
                     * Select a new audio track.
                     * @param {AudioTrack} audioTrack - The video track object to set.
                     * @returns {void}
                     */

                }, {
                    key: 'selectAudioTrack',
                    value: function selectAudioTrack(audioTrack) {
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.selectAudioTrack(audioTrack);
                        }
                    }

                    /**
                     * Select a new text track.
                     * @param {PKTextTrack} textTrack - The playkit text track object to set.
                     * @returns {void}
                     */

                }, {
                    key: 'selectTextTrack',
                    value: function selectTextTrack(textTrack) {
                        this._removeCueChangeListeners();
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.selectTextTrack(textTrack);
                        }
                        this.resetAllCues();
                        this._addCueChangeListener();
                    }

                    /**
                     * Hide the text track
                     * @function hideTextTrack
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.hideTextTrack();
                        }
                        this._removeCueChangeListeners();
                    }

                    /**
                     * Enables adaptive bitrate switching according to the media source extension logic.
                     * @function enableAdaptiveBitrate
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'enableAdaptiveBitrate',
                    value: function enableAdaptiveBitrate() {
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.enableAdaptiveBitrate();
                        }
                    }

                    /**
                     * Checking if adaptive bitrate switching is enabled.
                     * @function isAdaptiveBitrateEnabled
                     * @returns {boolean} - Whether adaptive bitrate is enabled.
                     * @public
                     */

                }, {
                    key: 'isAdaptiveBitrateEnabled',
                    value: function isAdaptiveBitrateEnabled() {
                        if (this._mediaSourceAdapter) {
                            return this._mediaSourceAdapter.isAdaptiveBitrateEnabled();
                        }
                        return false;
                    }

                    /**
                     * Seeking to live edge.
                     * @function seekToLiveEdge
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'seekToLiveEdge',
                    value: function seekToLiveEdge() {
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.seekToLiveEdge();
                        }
                    }

                    /**
                     * Get the start time of DVR window in live playback in seconds.
                     * @returns {Number} - start time of DVR window.
                     * @public
                     */

                }, {
                    key: 'getStartTimeOfDvrWindow',
                    value: function getStartTimeOfDvrWindow() {
                        return this._mediaSourceAdapter ? this._mediaSourceAdapter.getStartTimeOfDvrWindow() : 0;
                    }

                    /**
                     * Checking if the current playback is live.
                     * @function isLive
                     * @returns {boolean} - Whether playback is live.
                     * @public
                     */

                }, {
                    key: 'isLive',
                    value: function isLive() {
                        return this._mediaSourceAdapter ? this._mediaSourceAdapter.isLive() : false;
                    }

                    /**
                     * Start/resume playback.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'play',
                    value: function play() {
                        var _this4 = this;

                        var playPromise = this._el.play();
                        if (playPromise) {
                            playPromise.catch(function() {
                                return _this4.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.AUTOPLAY_FAILED));
                            });
                        }
                    }

                    /**
                     * Pause playback.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'pause',
                    value: function pause() {
                        return this._el.pause();
                    }

                    /**
                     * Load media.
                     * @param {number} startTime - Optional time to start the video from.
                     * @public
                     * @returns {Promise<Object>} - The loaded data
                     */

                }, {
                    key: 'load',
                    value: function load(startTime) {
                        var _this5 = this;

                        this._el.load();
                        return this._canLoadMediaSourceAdapterPromise.then(function() {
                            if (_this5._mediaSourceAdapter) {
                                return _this5._mediaSourceAdapter.load(startTime).catch(function(error) {
                                    return Promise.reject(error);
                                });
                            }
                            return Promise.resolve({});
                        }).catch(function(error) {
                            return Promise.reject(error);
                        });
                    }

                    /**
                     * Set a source.
                     * @param {string} source - Source to set.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'ready',
                    value: function ready() {}

                    /**
                     * Get paused state.
                     * @returns {boolean} - The paused value of the video element.
                     * @public
                     */

                }, {
                    key: '_init',


                    /**
                     * Initializes the engine.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @param {Object} config - The player configuration.
                     * @private
                     * @returns {void}
                     */
                    value: function _init(source, config) {
                        this._config = config;
                        this._loadMediaSourceAdapter(source);
                        this.attach();
                    }

                    /**
                     * Creates a video element dom object.
                     * @param {string} playerId - the id to be set as the key of the video element
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_createVideoElement',
                    value: function _createVideoElement(playerId) {
                        this._el = Html5.videoElementStore[playerId] || Utils.Dom.createElement('video');
                        this._el.id = Utils.Generator.uniqueId(5);
                        this._el.controls = false;
                    }

                    /**
                     * Loads the appropriate media source extension adapter.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_loadMediaSourceAdapter',
                    value: function _loadMediaSourceAdapter(source) {
                        this._mediaSourceAdapter = _mediaSourceProvider2.default.getMediaSourceAdapter(this.getVideoElement(), source, this._config);
                        if (this._mediaSourceAdapter) {
                            this._droppedFramesWatcher = new _droppedFramesWatcher.DroppedFramesWatcher(this._mediaSourceAdapter, this._config.abr, this._el);
                        }
                    }

                    /**
                     * Add cuechange listener to active textTrack.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_addCueChangeListener',
                    value: function _addCueChangeListener() {
                        var _this6 = this;

                        var textTrackEl = Array.from(this._el.textTracks).find(function(track) {
                            return track && track.mode !== 'disabled';
                        });
                        if (textTrackEl) {
                            this._eventManager.listen(textTrackEl, 'cuechange', function(e) {
                                return _this6._onCueChange(e);
                            });
                        }
                    }

                    /**
                     * Remove cuechange listeners from textTracks
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_removeCueChangeListeners',
                    value: function _removeCueChangeListeners() {
                        for (var i = 0; i < this._el.textTracks.length; i++) {
                            this._eventManager.unlisten(this._el.textTracks[i], 'cuechange');
                        }
                    }

                    /**
                     * oncuechange event handler.
                     * @param {FakeEvent} e - The event arg.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_onCueChange',
                    value: function _onCueChange(e) {
                        var textTrack = e.currentTarget;
                        var activeCues = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = textTrack.activeCues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var cue = _step.value;

                                //Normalize cues to be of type of VTT model
                                if (window.VTTCue && cue instanceof window.VTTCue) {
                                    activeCues.push(cue);
                                } else if (window.TextTrackCue && cue instanceof window.TextTrackCue) {
                                    try {
                                        activeCues.push(new _vttCue.Cue(cue.startTime, cue.endTime, cue.text));
                                    } catch (error) {
                                        new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.TEXT, _error2.default.Code.UNABLE_TO_CREATE_TEXT_CUE, error);
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_CUE_CHANGED, {
                            cues: activeCues
                        }));
                    }

                    /**
                     * set hasBeenReset to true for all the cues. (use case: when cues should be recalculated for display)
                     * @returns {void}
                     */

                }, {
                    key: 'resetAllCues',
                    value: function resetAllCues() {
                        var activeTextTrack = Array.from(this._el.textTracks).find(function(track) {
                            return track && track.mode !== 'disabled';
                        });
                        if (activeTextTrack) {
                            for (var i = 0; i < activeTextTrack.cues.length; i++) {
                                activeTextTrack.cues[i].hasBeenReset = true;
                            }
                        }
                    }

                    /**
                     * Handles errors from the video element
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleVideoError',
                    value: function _handleVideoError() {
                        if (!this._el.error) return;
                        var code = this._el.error.code;
                        if (code === 1 /* MEDIA_ERR_ABORTED */ ) {
                            // Ignore this error code.js, which should only occur when navigating away or
                            // deliberately stopping playback of HTTP content.
                            return;
                        }

                        // Extra error information from MS Edge and IE11:
                        var extended = this._getMsExtendedError();

                        // Extra error information from Chrome:
                        // $FlowFixMe
                        var message = this._el.error.message;
                        if (this._mediaSourceAdapter && !this._mediaSourceAdapter.handleMediaError(this._el.error)) {
                            var error = new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.MEDIA, _error2.default.Code.VIDEO_ERROR, {
                                code: code,
                                extended: extended,
                                message: message
                            });
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, error));
                        }
                    }

                    /**
                     * more info about the error
                     * @returns {string} info about the video element error
                     * @private
                     */

                }, {
                    key: '_getMsExtendedError',
                    value: function _getMsExtendedError() {
                        // $FlowFixMe
                        var extended = this._el.error.msExtendedCode;
                        if (extended) {
                            // Convert to unsigned:
                            if (extended < 0) {
                                extended += Math.pow(2, 32);
                            }
                            // Format as hex:
                            extended = extended.toString(16);
                        }
                        return extended;
                    }
                }, {
                    key: 'enterPictureInPicture',
                    value: function enterPictureInPicture() {
                        var _this7 = this;

                        try {
                            // Currently it's supported in chrome and in safari. So if we consider checking support before,
                            // we can use this flag to distinguish between the two. In the future we might need a different method.
                            // Second condition is because flow does not support this API yet
                            if (document.pictureInPictureEnabled && typeof this._el.requestPictureInPicture === 'function') {
                                this._el.requestPictureInPicture().catch(function(error) {
                                    _this7.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.PLAYER, _error2.default.Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)));
                                });
                            } else if (typeof this._el.webkitSetPresentationMode === 'function') {
                                this._el.webkitSetPresentationMode('picture-in-picture');
                                // Safari does not fire this event but Chrome does, normalizing the behaviour
                                setTimeout(function() {
                                    return _this7.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ENTER_PICTURE_IN_PICTURE));
                                }, 0);
                            }
                        } catch (error) {
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.PLAYER, _error2.default.Code.ENTER_PICTURE_IN_PICTURE_FAILED, error)));
                        }
                    }
                }, {
                    key: 'exitPictureInPicture',
                    value: function exitPictureInPicture() {
                        var _this8 = this;

                        try {
                            // Currently it's supported in chrome and in safari. So if we consider checking support before,
                            // we can use this flag to distinguish between the two. In the future we might need a different method.
                            // Second condition is because flow does not support this API yet
                            if (document.pictureInPictureEnabled && typeof document.exitPictureInPicture === 'function') {
                                document.exitPictureInPicture().catch(function(error) {
                                    _this8.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.PLAYER, _error2.default.Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)));
                                });
                            } else if (typeof this._el.webkitSetPresentationMode === 'function') {
                                this._el.webkitSetPresentationMode('inline');
                                // Safari does not fire this event but Chrome does, normalizing the behaviour
                                setTimeout(function() {
                                    return _this8.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.LEAVE_PICTURE_IN_PICTURE));
                                }, 0);
                            }
                        } catch (error) {
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.PLAYER, _error2.default.Code.EXIT_PICTURE_IN_PICTURE_FAILED, error)));
                        }
                    }
                }, {
                    key: 'isPictureInPictureSupported',
                    value: function isPictureInPictureSupported() {
                        return !!document.pictureInPictureEnabled || typeof this._el.webkitSupportsPresentationMode === 'function' && this._el.webkitSupportsPresentationMode('picture-in-picture');
                    }
                }, {
                    key: 'id',
                    get: function get() {
                        return Html5.id;
                    }
                }, {
                    key: 'src',
                    set: function set(source) {
                            this._el.src = source;
                        }

                        /**
                         * Get the source url.
                         * @returns {string} - The source url.
                         * @public
                         */
                        ,
                    get: function get() {
                        if (this._mediaSourceAdapter) {
                            return this._mediaSourceAdapter.src;
                        }
                        return '';
                    }

                    /**
                     * Get the current time in seconds.
                     * @returns {Number} - The current playback time.
                     * @public
                     */

                }, {
                    key: 'currentTime',
                    get: function get() {
                            return this._mediaSourceAdapter ? this._mediaSourceAdapter.currentTime : 0;
                        }

                        /**
                         * Set the current time in seconds.
                         * @param {Number} to - The number to set in seconds.
                         * @public
                         * @returns {void}
                         */
                        ,
                    set: function set(to) {
                        if (this._mediaSourceAdapter) {
                            this._mediaSourceAdapter.currentTime = to;
                        }
                    }

                    /**
                     * Get the duration in seconds.
                     * @returns {Number} - The playback duration.
                     * @public
                     */

                }, {
                    key: 'duration',
                    get: function get() {
                        return this._mediaSourceAdapter ? this._mediaSourceAdapter.duration : NaN;
                    }

                    /**
                     * Set playback volume.
                     * @param {Number} vol - The volume to set.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'volume',
                    set: function set(vol) {
                            this._el.volume = vol;
                        }

                        /**
                         * Get playback volume.
                         * @returns {Number} - The volume value of the video element.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.volume;
                    }
                }, {
                    key: 'paused',
                    get: function get() {
                        return this._el.paused;
                    }

                    /**
                     * Get seeking state.
                     * @returns {boolean} - The seeking value of the video element.
                     * @public
                     */

                }, {
                    key: 'seeking',
                    get: function get() {
                        return this._el.seeking;
                    }

                    /**
                     * Get the first seekable range (part) of the video in seconds.
                     * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
                     * @public
                     */

                }, {
                    key: 'seekable',
                    get: function get() {
                        return this._el.seekable;
                    }

                    /**
                     * Get the first played range (part) of the video in seconds.
                     * @returns {TimeRanges} - First played range (part) of the video in seconds.
                     * @public
                     */

                }, {
                    key: 'played',
                    get: function get() {
                        return this._el.played;
                    }

                    /**
                     * Get the first buffered range (part) of the video in seconds.
                     * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
                     * @public
                     */

                }, {
                    key: 'buffered',
                    get: function get() {
                        return this._el.buffered;
                    }

                    /**
                     * Set player muted state.
                     * @param {boolean} mute - The new mute value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'muted',
                    set: function set(mute) {
                            this._el.muted = mute;
                        }

                        /**
                         * Get player muted state.
                         * @returns {boolean} - The muted value of the video element.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.muted;
                    }

                    /**
                     * Get the default mute value.
                     * @returns {boolean} - The defaultMuted of the video element.
                     * @public
                     */

                }, {
                    key: 'defaultMuted',
                    get: function get() {
                        return this._el.defaultMuted;
                    }

                    /**
                     * Sets an image to be shown while the video is downloading, or until the user hits the play button.
                     * @param {string} poster - The image url to be shown.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'poster',
                    set: function set(poster) {
                            this._el.poster = poster;
                        }

                        /**
                         * Gets an image to be shown while the video is downloading, or until the user hits the play button.
                         * @returns {poster} - The image url.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.poster;
                    }

                    /**
                     * Specifies if and how the author thinks that the video should be loaded when the page loads.
                     * @param {string} preload - The preload value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'preload',
                    set: function set(preload) {
                            this._el.preload = preload;
                        }

                        /**
                         * Gets the preload value of the video element.
                         * @returns {string} - The preload value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.preload;
                    }

                    /**
                     * Set if the video will automatically start playing as soon as it can do so without stopping.
                     * @param {boolean} autoplay - The autoplay value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'autoplay',
                    set: function set(autoplay) {
                            this._el.autoplay = autoplay;
                        }

                        /**
                         * Gets the autoplay value of the video element.
                         * @returns {boolean} - The autoplay value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.autoplay;
                    }

                    /**
                     * Set to specifies that the video will start over again, every time it is finished.
                     * @param {boolean} loop - the loop value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'loop',
                    set: function set(loop) {
                            this._el.loop = loop;
                        }

                        /**
                         * Gets the loop value of the video element.
                         * @returns {boolean} - The loop value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.loop;
                    }

                    /**
                     * Set to specifies that video controls should be displayed.
                     * @param {boolean} controls - the controls value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'controls',
                    set: function set(controls) {
                            this._el.controls = controls;
                        }

                        /**
                         * Gets the controls value of the video element.
                         * @returns {boolean} - The controls value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.controls;
                    }

                    /**
                     * Sets the current playback speed of the audio/video.
                     * @param {Number} playbackRate - The playback speed value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'playbackRate',
                    set: function set(playbackRate) {
                            this._el.playbackRate = playbackRate;
                        }

                        /**
                         * Gets the current playback speed of the audio/video.
                         * @returns {Number} - The current playback speed value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.playbackRate;
                    }

                    /**
                     * Sets the default playback speed of the audio/video.
                     * @param {Number} defaultPlaybackRate - The default playback speed value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'defaultPlaybackRate',
                    set: function set(defaultPlaybackRate) {
                            this._el.defaultPlaybackRate = defaultPlaybackRate;
                        }

                        /**
                         * Gets the default playback speed of the audio/video.
                         * @returns {Number} - The default playback speed value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._el.defaultPlaybackRate;
                    }

                    /**
                     * The ended property returns whether the playback of the audio/video has ended.
                     * @returns {boolean} - The ended value.
                     * @public
                     */

                }, {
                    key: 'ended',
                    get: function get() {
                        return this._el.ended;
                    }

                    /**
                     * The error property returns a MediaError object.
                     * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
                     * @public
                     */

                }, {
                    key: 'error',
                    get: function get() {
                        return this._el.error;
                    }

                    /**
                     * @returns {Number} - The current network state (activity) of the audio/video.
                     * @public
                     */

                }, {
                    key: 'networkState',
                    get: function get() {
                        return this._el.networkState;
                    }

                    /**
                     * Indicates if the audio/video is ready to play or not.
                     * @returns {Number} - The current ready state of the audio/video.
                     * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
                     * 1 = HAVE_METADATA - metadata for the audio/video is ready.
                     * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
                     * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
                     * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
                     */

                }, {
                    key: 'readyState',
                    get: function get() {
                        return this._el.readyState;
                    }

                    /**
                     * @returns {Number} - The height of the video player, in pixels.
                     * @public
                     */

                }, {
                    key: 'videoHeight',
                    get: function get() {
                        return this._el.videoHeight;
                    }

                    /**
                     * @returns {Number} - The width of the video player, in pixels.
                     * @public
                     */

                }, {
                    key: 'videoWidth',
                    get: function get() {
                        return this._el.videoWidth;
                    }

                    /**
                     * @param {boolean} playsinline - Whether to set on the video tag the playsinline attribute.
                     */

                }, {
                    key: 'playsinline',
                    set: function set(playsinline) {
                            if (playsinline) {
                                this._el.setAttribute('playsinline', '');
                            } else {
                                this._el.removeAttribute('playsinline');
                            }
                        }

                        /**
                         * @returns {boolean} - Whether the video tag has an attribute of playsinline.
                         */
                        ,
                    get: function get() {
                        return this._el.getAttribute('playsinline') === '';
                    }

                    /**
                     * Set crossOrigin attribute.
                     * @param {?string} crossOrigin - 'anonymous' or 'use-credentials'
                     */

                }, {
                    key: 'crossOrigin',
                    set: function set(crossOrigin) {
                            if (typeof crossOrigin === 'string') {
                                this._el.setAttribute('crossorigin', crossOrigin);
                            } else {
                                this._el.removeAttribute('crossorigin');
                            }
                        }

                        /**
                         * Get crossOrigin attribute.
                         * @returns {?string} - 'anonymous' or 'use-credentials'
                         */
                        ,
                    get: function get() {
                        return this._el.getAttribute('crossorigin');
                    }

                    /**
                     * get the playback rates
                     * @return {number[]} - playback rates
                     */

                }, {
                    key: 'playbackRates',
                    get: function get() {
                        return Html5.PLAYBACK_RATES;
                    }
                }, {
                    key: 'isInPictureInPicture',
                    get: function get() {
                        // Check if the engine's video element is the one in the PIP
                        return !!document.pictureInPictureElement && document.pictureInPictureElement != null && this._el === document.pictureInPictureElement || !!this._el.webkitPresentationMode && this._el.webkitPresentationMode === 'picture-in-picture';
                    }
                }]);

                return Html5;
            }(_fakeEventTarget2.default);

            Html5._logger = (0, _logger2.default)('Html5');
            Html5._capabilities = [_html5Autoplay2.default];
            Html5.id = 'html5';
            Html5.videoElementStore = {};
            Html5.PLAYBACK_RATES = [0.5, 1, 2, 4];
            exports.default = Html5;

            /***/
        }),
        /* 63 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _get = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);
                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);
                    if (parent === null) {
                        return undefined;
                    } else {
                        return get(parent, property, receiver);
                    }
                } else if ("value" in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined;
                    }
                    return getter.call(receiver);
                }
            };

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _eventType = __webpack_require__(3);

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            var _videoTrack = __webpack_require__(10);

            var _videoTrack2 = _interopRequireDefault(_videoTrack);

            var _audioTrack = __webpack_require__(11);

            var _audioTrack2 = _interopRequireDefault(_audioTrack);

            var _textTrack = __webpack_require__(9);

            var _baseMediaSourceAdapter = __webpack_require__(32);

            var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

            var _resolution = __webpack_require__(64);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _fairplay = __webpack_require__(65);

            var _fairplay2 = _interopRequireDefault(_fairplay);

            var _env = __webpack_require__(12);

            var _env2 = _interopRequireDefault(_env);

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _nativeAdapterDefaultConfig = __webpack_require__(67);

            var _nativeAdapterDefaultConfig2 = _interopRequireDefault(_nativeAdapterDefaultConfig);

            var _fairplayDrmHandler = __webpack_require__(68);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * An illustration of media source extension for progressive download
             * @classdesc
             * @implements {IMediaSourceAdapter}
             */
            var NativeAdapter = function(_BaseMediaSourceAdapt) {
                _inherits(NativeAdapter, _BaseMediaSourceAdapt);

                _createClass(NativeAdapter, null, [{
                    key: 'canPlayType',


                    /**
                     * Checks if NativeAdapter can play a given mime type.
                     * @function canPlayType
                     * @param {string} mimeType - The mime type to check
                     * @returns {boolean} - Whether the native adapter can play a specific mime type
                     * @static
                     */

                    /**
                     * The DRM handler playback.
                     * @type {?FairplayDrmHandler}
                     * @private
                     */

                    /**
                     * The event manager of the class.
                     * @member {EventManager} - _eventManager
                     * @type {EventManager}
                     * @private
                     */

                    /**
                     * The load promise
                     * @member {Promise<Object>} - _loadPromise
                     * @type {Promise<Object>}
                     * @private
                     */

                    /**
                     * The original progressive sources
                     * @member {Array<PKMediaSourceObject>} - _progressiveSources
                     * @private
                     */

                    /**
                     * The player tracks.
                     * @member {Array<Track>} - _playerTracks
                     * @private
                     */

                    /**
                     * The id of _liveDurationChangeInterval
                     * @member {?number} - _liveDurationChangeInterval
                     * @private
                     */

                    /**
                     * The live edge value
                     * @member {number} - _liveEdge
                     * @private
                     */

                    /**
                     * Id for interval that starts upon waiting/stalling event and check if we are offline
                     * @member {number} - _waitingIntervalId
                     * @private
                     */

                    /**
                     * The DRM protocols implementations for native adapter.
                     * @type {Array<Function>}
                     * @private
                     * @static
                     */


                    /**
                     * The adapter logger
                     * @member {any} _logger
                     * @private
                     * @static
                     */
                    value: function canPlayType(mimeType) {
                        var canPlayType = false;
                        if (typeof mimeType === 'string') {
                            canPlayType = !!NativeAdapter.TEST_VIDEO.canPlayType(mimeType.toLowerCase());
                        }
                        NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
                        return canPlayType;
                    }

                    /**
                     * Checks if NativeAdapter can play a given drm data.
                     * @function canPlayDrm
                     * @param {Array<Object>} drmData - The drm data to check.
                     * @param {PKDrmConfigObject} drmConfig - The drm config.
                     * @returns {boolean} - Whether the native adapter can play a specific drm data.
                     * @static
                     */

                    /**
                     * The DRM protocol for the current playback.
                     * @type {?Function}
                     * @private
                     * @static
                     */

                    /**
                     * static video element for canPlayType testing
                     * @member {} TEST_VIDEO
                     * @type {HTMLVideoElement}
                     * @static
                     */

                    /**
                     * The id of the Adapter
                     * @member {string} id
                     * @static
                     * @public
                     */

                }, {
                    key: 'canPlayDrm',
                    value: function canPlayDrm(drmData, drmConfig) {
                        var canPlayDrm = false;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = NativeAdapter._drmProtocols[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var _drmProtocol = _step.value;

                                if (_drmProtocol.isConfigured(drmData, drmConfig)) {
                                    NativeAdapter._drmProtocol = _drmProtocol;
                                    canPlayDrm = true;
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        if (!canPlayDrm) {
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = NativeAdapter._drmProtocols[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var drmProtocol = _step2.value;

                                    if (drmProtocol.canPlayDrm(drmData)) {
                                        NativeAdapter._drmProtocol = drmProtocol;
                                        canPlayDrm = true;
                                        break;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }
                        }
                        NativeAdapter._logger.debug('canPlayDrm result is ' + canPlayDrm.toString(), drmData);
                        return canPlayDrm;
                    }

                    /**
                     * Factory method to create media source adapter.
                     * @function createAdapter
                     * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
                     * @param {PKMediaSourceObject} source - The source Object.
                     * @param {Object} config - The player configuration.
                     * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
                     * @static
                     */

                }, {
                    key: 'createAdapter',
                    value: function createAdapter(videoElement, source, config) {
                        var adapterConfig = {
                            displayTextTrack: false,
                            progressiveSources: []
                        };
                        if (Utils.Object.hasPropertyPath(config, 'playback.useNativeTextTrack')) {
                            adapterConfig.displayTextTrack = Utils.Object.getPropertyPath(config, 'playback.useNativeTextTrack');
                        }
                        if (Utils.Object.hasPropertyPath(config, 'sources.progressive')) {
                            adapterConfig.progressiveSources = Utils.Object.getPropertyPath(config, 'sources.progressive');
                        }
                        if (config.playback) {
                            adapterConfig.enableCEA708Captions = config.playback.enableCEA708Captions;
                            adapterConfig.captionsTextTrack1Label = config.playback.captionsTextTrack1Label;
                            adapterConfig.captionsTextTrack1LanguageCode = config.playback.captionsTextTrack1LanguageCode;
                            adapterConfig.captionsTextTrack2Label = config.playback.captionsTextTrack2Label;
                            adapterConfig.captionsTextTrack2LanguageCode = config.playback.captionsTextTrack2LanguageCode;
                            if (Utils.Object.hasPropertyPath(config.playback, 'options.html5.native')) {
                                Utils.Object.mergeDeep(adapterConfig, config.playback.options.html5.native);
                            }
                        }
                        return new this(videoElement, source, adapterConfig);
                    }

                    /**
                     * @constructor
                     * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
                     * @param {PKMediaSourceObject} source - The source object
                     * @param {Object} config - The player configuration
                     */

                }]);

                function NativeAdapter(videoElement, source, config) {
                    _classCallCheck(this, NativeAdapter);

                    NativeAdapter._logger.debug('Creating adapter');

                    var _this = _possibleConstructorReturn(this, (NativeAdapter.__proto__ || Object.getPrototypeOf(NativeAdapter)).call(this, videoElement, source, config));

                    _this._lastTimeUpdate = 0;
                    _this._waitingEventTriggered = false;

                    _this._eventManager = new _eventManager2.default();
                    _this._config = Utils.Object.mergeDeep({}, _nativeAdapterDefaultConfig2.default, _this._config);
                    _this._progressiveSources = config.progressiveSources;
                    _this._liveEdge = 0;
                    return _this;
                }

                /**
                 * dispatches an error (is given to a class the cannot dispatch, like static fair play class)
                 * @private
                 * @param {Error} error - the error to dispatch
                 * @returns {void}
                 */


                _createClass(NativeAdapter, [{
                    key: '_dispatchErrorCallback',
                    value: function _dispatchErrorCallback(error) {
                        this._trigger(_eventType.Html5EventType.ERROR, error);
                    }

                    /**
                     * Sets the DRM playback in case such needed.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_maybeSetDrmPlayback',
                    value: function _maybeSetDrmPlayback() {
                        var _this2 = this;

                        if (NativeAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
                            var drmConfig = {
                                licenseUrl: '',
                                certificate: ''
                            };
                            NativeAdapter._drmProtocol.setDrmPlayback(drmConfig, this._sourceObj.drmData);
                            this._drmHandler = new _fairplayDrmHandler.FairplayDrmHandler(this._videoElement, drmConfig, function(error) {
                                return _this2._dispatchErrorCallback(error);
                            });
                        }
                    }

                    /**
                     * Set the suitable progressive source according the current resolution
                     * @function _setProgressiveSource
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_setProgressiveSource',
                    value: function _setProgressiveSource() {
                        var suitableTrack = (0, _resolution.getSuitableSourceForResolution)(this._progressiveSources, this._videoElement.offsetWidth, this._videoElement.offsetHeight);
                        if (suitableTrack) {
                            this._sourceObj = suitableTrack;
                        }
                    }

                    /**
                     * Checks if the playback source is progressive
                     * @function _isProgressivePlayback
                     * @returns {boolean} - is progressive source
                     * @private
                     */

                }, {
                    key: '_isProgressivePlayback',
                    value: function _isProgressivePlayback() {
                        return this._sourceObj ? this._sourceObj.mimetype === 'video/mp4' : false;
                    }

                    /**
                     * Load the video source
                     * @param {number} startTime - Optional time to start the video from.
                     * @function load
                     * @returns {Promise<Object>} - The loaded data
                     */

                }, {
                    key: 'load',
                    value: function load(startTime) {
                        var _this3 = this;

                        this._maybeSetDrmPlayback();
                        if (!this._loadPromise) {
                            this._loadPromise = new Promise(function(resolve, reject) {
                                _this3._lastTimeUpdate = startTime || 0;
                                _this3._loadPromiseReject = reject;
                                _this3._eventManager.listenOnce(_this3._videoElement, _eventType.Html5EventType.LOADED_DATA, function() {
                                    return _this3._onLoadedData(resolve, startTime);
                                });
                                _this3._eventManager.listen(_this3._videoElement, _eventType.Html5EventType.TIME_UPDATE, function() {
                                    return _this3._onTimeUpdate();
                                });
                                _this3._eventManager.listen(_this3._videoElement, _eventType.Html5EventType.PLAY, function() {
                                    return _this3._resetHeartbeatTimeout();
                                });
                                _this3._eventManager.listen(_this3._videoElement, _eventType.Html5EventType.PAUSE, function() {
                                    return _this3._clearHeartbeatTimeout();
                                });
                                _this3._eventManager.listen(_this3._videoElement, _eventType.Html5EventType.ENDED, function() {
                                    return _this3._clearHeartbeatTimeout();
                                });
                                _this3._eventManager.listen(_this3._videoElement, _eventType.Html5EventType.ABORT, function() {
                                    return _this3._clearHeartbeatTimeout();
                                });
                                _this3._eventManager.listen(_this3._videoElement, _eventType.Html5EventType.SEEKED, function() {
                                    return _this3._onSeeked();
                                });
                                if (_this3._isProgressivePlayback()) {
                                    _this3._setProgressiveSource();
                                }
                                if (_this3._sourceObj && _this3._sourceObj.url) {
                                    _this3._videoElement.src = _this3._sourceObj.url;
                                    _this3._trigger(_eventType.CustomEventType.ABR_MODE_CHANGED, {
                                        mode: _this3._isProgressivePlayback() ? 'manual' : 'auto'
                                    });
                                }
                                _this3._videoElement.load();
                            });
                        }
                        return this._loadPromise;
                    }
                }, {
                    key: 'handleMediaError',
                    value: function handleMediaError(error) {
                        if (this._loadPromiseReject) {
                            this._loadPromiseReject(new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.MEDIA, _error2.default.Code.NATIVE_ADAPTER_LOAD_FAILED, error));
                            return true;
                        } else {
                            return false;
                        }
                    }

                    /**
                     * Loaded data event handler.
                     * @param {Function} resolve - The resolve promise function.
                     * @param {number} startTime - Optional time to start the video from.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onLoadedData',
                    value: function _onLoadedData(resolve, startTime) {
                        var _this4 = this;

                        var parseTracksAndResolve = function parseTracksAndResolve() {
                            _this4._playerTracks = _this4._getParsedTracks();
                            _this4._addNativeAudioTrackChangeListener();
                            _this4._addNativeTextTrackChangeListener();
                            _this4._addNativeTextTrackAddedListener();
                            NativeAdapter._logger.debug('The source has been loaded successfully');
                            _this4._loadPromiseReject = null;
                            resolve({
                                tracks: _this4._playerTracks
                            });
                            if (_this4.isLive()) {
                                _this4._handleLiveDurationChange();
                            }
                        };
                        if (startTime && startTime > -1) {
                            this._videoElement.currentTime = startTime;
                        }
                        if (this._videoElement.textTracks.length > 0) {
                            parseTracksAndResolve();
                        } else {
                            this._eventManager.listenOnce(this._videoElement, _eventType.Html5EventType.CAN_PLAY, parseTracksAndResolve.bind(this));
                        }
                    }
                }, {
                    key: '_onTimeUpdate',
                    value: function _onTimeUpdate() {
                        if (!this._videoElement.paused && this._videoElement.currentTime > this._lastTimeUpdate) {
                            if (this._waitingEventTriggered) {
                                this._waitingEventTriggered = false;
                                this._trigger(_eventType.Html5EventType.PLAYING);
                            }
                            this._resetHeartbeatTimeout();
                        } else if (!this._videoElement.paused) {
                            this._waitingEventTriggered = true;
                            this._trigger(_eventType.Html5EventType.WAITING);
                        }
                    }
                }, {
                    key: '_onSeeked',
                    value: function _onSeeked() {
                        this._lastTimeUpdate = this._videoElement.currentTime;
                    }
                }, {
                    key: '_resetHeartbeatTimeout',
                    value: function _resetHeartbeatTimeout() {
                        var _this5 = this;

                        this._lastTimeUpdate = this._videoElement.currentTime;
                        this._clearHeartbeatTimeout();
                        var onTimeout = function onTimeout() {
                            _this5._clearHeartbeatTimeout();
                            _this5._trigger(_eventType.Html5EventType.ERROR, new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.NETWORK, _error2.default.Code.TIMEOUT, 'The player exceeded max buffer time of ' + _this5._config.heartbeatTimeout + ' ms. No progress has been done during this time.'));
                        };
                        this._heartbeatTimeoutId = setTimeout(onTimeout, this._config.heartbeatTimeout);
                    }
                }, {
                    key: '_clearHeartbeatTimeout',
                    value: function _clearHeartbeatTimeout() {
                        if (this._heartbeatTimeoutId) {
                            clearTimeout(this._heartbeatTimeoutId);
                            this._heartbeatTimeoutId = null;
                        }
                    }

                    /**
                     * Destroys the native adapter.
                     * @function destroy
                     * @returns {Promise<*>} - The destroy promise.
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this6 = this;

                        NativeAdapter._logger.debug('destroy');
                        return _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'destroy', this).call(this).then(function() {
                            _this6._eventManager.destroy();
                            _this6._drmHandler && _this6._drmHandler.destroy();
                            _this6._waitingEventTriggered = false;
                            _this6._progressiveSources = [];
                            _this6._loadPromise = null;
                            _this6._loadPromiseReject = null;
                            _this6._liveEdge = 0;
                            _this6._lastTimeUpdate = 0;
                            _this6._clearHeartbeatTimeout();
                            if (_this6._liveDurationChangeInterval) {
                                clearInterval(_this6._liveDurationChangeInterval);
                                _this6._liveDurationChangeInterval = null;
                            }
                        });
                    }

                    /**
                     * Get the parsed tracks
                     * @function _getParsedTracks
                     * @returns {Array<Track>} - The parsed tracks
                     * @private
                     */

                }, {
                    key: '_getParsedTracks',
                    value: function _getParsedTracks() {
                        var videoTracks = this._getParsedVideoTracks();
                        var audioTracks = this._getParsedAudioTracks();
                        var textTracks = this._getParsedTextTracks();
                        return videoTracks.concat(audioTracks).concat(textTracks);
                    }

                    /**
                     * Get the parsed video tracks
                     * @function _getParsedVideoTracks
                     * @returns {Array<Track>} - The parsed video tracks
                     * @private
                     */

                }, {
                    key: '_getParsedVideoTracks',
                    value: function _getParsedVideoTracks() {
                        if (this._isProgressivePlayback()) {
                            return this._getParsedProgressiveVideoTracks();
                        } else {
                            return this._getParsedAdaptiveVideoTracks();
                        }
                    }

                    /**
                     * Get the parsed progressive video tracks
                     * @function _getParsedProgressiveVideoTracks
                     * @returns {Array<Track>} - The parsed progressive video tracks
                     * @private
                     */

                }, {
                    key: '_getParsedProgressiveVideoTracks',
                    value: function _getParsedProgressiveVideoTracks() {
                        var videoTracks = this._progressiveSources;
                        var parsedTracks = [];
                        if (videoTracks) {
                            for (var i = 0; i < videoTracks.length; i++) {
                                var settings = {
                                    id: videoTracks[i].id,
                                    bandwidth: videoTracks[i].bandwidth,
                                    width: videoTracks[i].width,
                                    height: videoTracks[i].height,
                                    active: this._sourceObj ? videoTracks[i].id === this._sourceObj.id : false,
                                    index: i
                                };
                                parsedTracks.push(new _videoTrack2.default(settings));
                            }
                        }
                        return parsedTracks;
                    }

                    /**
                     * Get the parsed adaptive video tracks
                     * @function _getParsedAdaptiveVideoTracks
                     * @returns {Array<Track>} - The parsed adaptive video tracks
                     * @private
                     */

                }, {
                    key: '_getParsedAdaptiveVideoTracks',
                    value: function _getParsedAdaptiveVideoTracks() {
                        //TODO check adaptation in safari hls
                        var videoTracks = this._videoElement.videoTracks;
                        var parsedTracks = [];
                        if (videoTracks) {
                            for (var i = 0; i < videoTracks.length; i++) {
                                var settings = {
                                    //TODO calculate width/height/bandwidth
                                    id: videoTracks[i].id,
                                    active: videoTracks[i].selected,
                                    label: videoTracks[i].label,
                                    language: videoTracks[i].language,
                                    index: i
                                };
                                parsedTracks.push(new _videoTrack2.default(settings));
                            }
                        }
                        return parsedTracks;
                    }

                    /**
                     * Get the parsed audio tracks
                     * @function _getParsedAudioTracks
                     * @returns {Array<AudioTrack>} - The parsed audio tracks
                     * @private
                     */

                }, {
                    key: '_getParsedAudioTracks',
                    value: function _getParsedAudioTracks() {
                        var audioTracks = this._videoElement.audioTracks;
                        var parsedTracks = [];
                        if (audioTracks) {
                            for (var i = 0; i < audioTracks.length; i++) {
                                var settings = {
                                    id: audioTracks[i].id,
                                    active: audioTracks[i].enabled,
                                    label: audioTracks[i].label,
                                    language: audioTracks[i].language,
                                    index: i
                                };
                                parsedTracks.push(new _audioTrack2.default(settings));
                            }
                        }
                        return parsedTracks;
                    }

                    /**
                     * Get the parsed text tracks
                     * @function _getParsedTextTracks
                     * @returns {Array<PKTextTrack>} - The parsed text tracks
                     * @private
                     */

                }, {
                    key: '_getParsedTextTracks',
                    value: function _getParsedTextTracks() {
                        var captionsTextTrackLabels = [this._config.captionsTextTrack1Label, this._config.captionsTextTrack2Label];
                        var captionsTextTrackLanguageCodes = [this._config.captionsTextTrack1LanguageCode, this._config.captionsTextTrack2LanguageCode];
                        var textTracks = this._videoElement.textTracks;
                        var parsedTracks = [];
                        if (textTracks) {
                            for (var i = 0; i < textTracks.length; i++) {
                                var settings = {
                                    kind: textTracks[i].kind,
                                    active: textTracks[i].mode === 'showing',
                                    label: textTracks[i].label,
                                    language: textTracks[i].language,
                                    index: i
                                };
                                if (settings.kind === 'subtitles') {
                                    parsedTracks.push(new _textTrack.TextTrack(settings));
                                } else if (settings.kind === 'captions' && this._config.enableCEA708Captions) {
                                    settings.label = settings.label || captionsTextTrackLabels.shift();
                                    settings.language = settings.language || captionsTextTrackLanguageCodes.shift();
                                    parsedTracks.push(new _textTrack.TextTrack(settings));
                                }
                            }
                        }
                        return parsedTracks;
                    }

                    /**
                     * Select a video track
                     * @function selectVideoTrack
                     * @param {VideoTrack} videoTrack - the track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectVideoTrack',
                    value: function selectVideoTrack(videoTrack) {
                        if (this._isProgressivePlayback()) {
                            this._selectProgressiveVideoTrack(videoTrack);
                        } else {
                            this.selectAdaptiveVideoTrack(videoTrack);
                        }
                    }

                    /**
                     * Select a progressive video track
                     * @function _selectProgressiveVideoTrack
                     * @param {VideoTrack} videoTrack - the track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: '_selectProgressiveVideoTrack',
                    value: function _selectProgressiveVideoTrack(videoTrack) {
                        var _this7 = this;

                        var videoTracks = this._progressiveSources;
                        if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
                            var currentTime = this._videoElement.currentTime;
                            var paused = this._videoElement.paused;
                            this._sourceObj = videoTracks[videoTrack.index];
                            this._eventManager.listenOnce(this._videoElement, _eventType.Html5EventType.LOADED_DATA, function() {
                                if (_env2.default.browser.name === 'Android Browser') {
                                    // In android browser we have to seek only after some playback.
                                    _this7._eventManager.listenOnce(_this7._videoElement, _eventType.Html5EventType.DURATION_CHANGE, function() {
                                        _this7._videoElement.currentTime = currentTime;
                                    });
                                    _this7._eventManager.listenOnce(_this7._videoElement, _eventType.Html5EventType.SEEKED, function() {
                                        _this7._onTrackChanged(videoTrack);
                                        if (paused) {
                                            _this7._videoElement.pause();
                                        }
                                    });
                                    _this7._videoElement.play();
                                } else {
                                    _this7._eventManager.listenOnce(_this7._videoElement, _eventType.Html5EventType.SEEKED, function() {
                                        _this7._onTrackChanged(videoTrack);
                                    });
                                    _this7._videoElement.currentTime = currentTime;
                                    if (!paused) {
                                        _this7._videoElement.play();
                                    }
                                }
                            });
                            this._videoElement.src = this._sourceObj ? this._sourceObj.url : '';
                        }
                    }

                    /**
                     * Select a native video track
                     * @function selectAdaptiveVideoTrack
                     * @param {VideoTrack} videoTrack - the track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectAdaptiveVideoTrack',
                    value: function selectAdaptiveVideoTrack(videoTrack) {
                        var videoTracks = this._videoElement.videoTracks;
                        if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
                            this._disableVideoTracks();
                            videoTracks[videoTrack.index].selected = true;
                            this._onTrackChanged(videoTrack);
                        }
                    }

                    /**
                     * Select an audio track
                     * @function selectAudioTrack
                     * @param {AudioTrack} audioTrack - the  audio track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectAudioTrack',
                    value: function selectAudioTrack(audioTrack) {
                        var audioTracks = this._videoElement.audioTracks;
                        if (audioTrack instanceof _audioTrack2.default && audioTracks && audioTracks[audioTrack.index]) {
                            this._removeNativeAudioTrackChangeListener();
                            this._disableAudioTracks();
                            audioTracks[audioTrack.index].enabled = true;
                            this._onTrackChanged(audioTrack);
                            this._addNativeAudioTrackChangeListener();
                        }
                    }

                    /**
                     * Remove the onchange listenr of the video element AudioTrackList.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_removeNativeAudioTrackChangeListener',
                    value: function _removeNativeAudioTrackChangeListener() {
                        if (this._videoElement.audioTracks) {
                            this._eventManager.unlisten(this._videoElement.audioTracks, 'change');
                        }
                    }

                    /**
                     * Add the onchange listenr of the video element AudioTrackList.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_addNativeAudioTrackChangeListener',
                    value: function _addNativeAudioTrackChangeListener() {
                        var _this8 = this;

                        if (this._videoElement.audioTracks) {
                            this._eventManager.listen(this._videoElement.audioTracks, 'change', function() {
                                return _this8._onNativeAudioTrackChange();
                            });
                        }
                    }

                    /**
                     * Handler of the video element AudioTrackList onchange event.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onNativeAudioTrackChange',
                    value: function _onNativeAudioTrackChange() {
                        var _this9 = this;

                        var pkAudioTracks = this._playerTracks.filter(function(track) {
                            return track instanceof _audioTrack2.default;
                        });
                        var getActivePKAudioTrackIndex = function getActivePKAudioTrackIndex() {
                            var activeAudioTrack = pkAudioTracks.find(function(track) {
                                return track.active === true;
                            });
                            return activeAudioTrack ? activeAudioTrack.index : -1;
                        };
                        var getActiveVidAudioTrackIndex = function getActiveVidAudioTrackIndex() {
                            for (var i = 0; i < _this9._videoElement.audioTracks.length; i++) {
                                var audioTrack = _this9._videoElement.audioTracks[i];
                                if (audioTrack.enabled) {
                                    return i;
                                }
                            }
                            return -1;
                        };
                        NativeAdapter._logger.debug('Video element audio track change');
                        var vidIndex = getActiveVidAudioTrackIndex();
                        var pkIndex = getActivePKAudioTrackIndex();
                        if (vidIndex !== pkIndex) {
                            var pkAudioTrack = pkAudioTracks.find(function(track) {
                                return track.index === vidIndex;
                            });
                            if (pkAudioTrack) {
                                NativeAdapter._logger.debug('Native selection of track, update the player audio track (' + pkIndex + ' -> ' + vidIndex + ')');
                                this._onTrackChanged(pkAudioTrack);
                            }
                        }
                    }

                    /**
                     * Select a text track
                     * @function selectTextTrack
                     * @param {PKTextTrack} textTrack - The playkit text track
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectTextTrack',
                    value: function selectTextTrack(textTrack) {
                        var textTracks = this._videoElement.textTracks;
                        if (textTrack instanceof _textTrack.TextTrack && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks) {
                            this._removeNativeTextTrackChangeListener();
                            var selectedTrack = Array.from(textTracks).find(function(track, index) {
                                return textTrack.index === index && track && (track.kind === 'subtitles' || track.kind === 'captions');
                            });
                            if (selectedTrack) {
                                this._disableTextTracks();
                                selectedTrack.mode = this._getDisplayTextTrackModeString();
                                NativeAdapter._logger.debug('Text track changed', selectedTrack);
                                this._onTrackChanged(textTrack);
                                this._addNativeTextTrackChangeListener();
                            }
                        }
                    }

                    /**
                     * Remove the onchange listenr of the video element TextTrackList.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_removeNativeTextTrackChangeListener',
                    value: function _removeNativeTextTrackChangeListener() {
                        if (this._videoElement.textTracks) {
                            this._eventManager.unlisten(this._videoElement.textTracks, 'change');
                        }
                    }

                    /**
                     * Add the onchange listenr of the video element TextTrackList.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_addNativeTextTrackChangeListener',
                    value: function _addNativeTextTrackChangeListener() {
                        var _this10 = this;

                        if (this._videoElement.textTracks) {
                            this._eventManager.listen(this._videoElement.textTracks, 'change', function() {
                                return _this10._onNativeTextTrackChange();
                            });
                        }
                    }

                    /**
                     * Handler of the video element TextTrackList onchange event.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onNativeTextTrackChange',
                    value: function _onNativeTextTrackChange() {
                        var _this11 = this;

                        var pkTextTracks = this._playerTracks.filter(function(track) {
                            return track instanceof _textTrack.TextTrack;
                        });
                        var pkOffTrack = pkTextTracks.find(function(track) {
                            return track.language === 'off';
                        });
                        var getActivePKTextTrackIndex = function getActivePKTextTrackIndex() {
                            var activeTextTrack = pkTextTracks.find(function(track) {
                                return track.active === true;
                            });
                            return activeTextTrack ? activeTextTrack.index : -1;
                        };
                        var getActiveVidTextTrackIndex = function getActiveVidTextTrackIndex() {
                            for (var i = 0; i < _this11._videoElement.textTracks.length; i++) {
                                var textTrack = _this11._videoElement.textTracks[i];
                                if (_this11._getDisplayTextTrackModeString() === textTrack.mode) {
                                    return i;
                                }
                            }
                            return -1;
                        };
                        NativeAdapter._logger.debug('Video element text track change');
                        var vidIndex = getActiveVidTextTrackIndex();
                        var pkIndex = getActivePKTextTrackIndex();

                        if (vidIndex !== pkIndex) {
                            // In case no text track with 'showing' mode
                            // we need to set the off track
                            if (vidIndex == -1) {
                                if (pkOffTrack) {
                                    NativeAdapter._logger.debug('Native selection of track, update the player text track (' + pkIndex + ' -> off)');
                                    this._onTrackChanged(pkOffTrack);
                                }
                            } else {
                                // In case the text track on the video element is
                                // different then the text track of the player
                                // we need to set the correct one
                                var pkTextTrack = pkTextTracks.find(function(track) {
                                    return track.index === vidIndex;
                                });
                                if (pkTextTrack) {
                                    NativeAdapter._logger.debug('Native selection of track, update the player text track (' + pkIndex + ' -> ' + vidIndex + ')');
                                    this._onTrackChanged(pkTextTrack);
                                }
                            }
                        }
                    }

                    /**
                     * Returns the mode (hidden / showing) of the native text track should have according to the displayTextTrack config.
                     * Both 'showing' and 'hidden' indicates the the text track is active and trigger cue events but 'hidden' hides it
                     * from the UI.
                     * @returns {string} the mode string
                     * @private
                     */

                }, {
                    key: '_getDisplayTextTrackModeString',
                    value: function _getDisplayTextTrackModeString() {
                        return this._config.displayTextTrack ? 'showing' : 'hidden';
                    }

                    /**
                     * Add the onaddtrack listenr of the video element TextTrackList.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_addNativeTextTrackAddedListener',
                    value: function _addNativeTextTrackAddedListener() {
                        var _this12 = this;

                        if (!this._config.displayTextTrack && this._videoElement.textTracks) {
                            this._eventManager.listen(this._videoElement.textTracks, 'addtrack', function() {
                                return _this12._onNativeTextTrackAdded();
                            });
                        }
                    }

                    /**
                     * Handler of the video element TextTrackList onaddtrack event.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onNativeTextTrackAdded',
                    value: function _onNativeTextTrackAdded() {
                        this._playerTracks = this._getParsedTracks();
                        this._trigger(_eventType.CustomEventType.TRACKS_CHANGED, {
                            tracks: this._playerTracks
                        });
                    }

                    /**
                     * Hide the text track
                     * @function hideTextTrack
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {
                        this._disableTextTracks();
                    }

                    /**
                     * Enables adaptive bitrate
                     * @function enableAdaptiveBitrate
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'enableAdaptiveBitrate',
                    value: function enableAdaptiveBitrate() {
                        NativeAdapter._logger.warn('Enabling adaptive bitrate is not supported for native playback');
                    }

                    /**
                     * Checking if adaptive bitrate switching is enabled.
                     * For progressive playback will always returns false.
                     * For adaptive playback will always returns true.
                     * @function isAdaptiveBitrateEnabled
                     * @returns {boolean} - Whether adaptive bitrate is enabled.
                     * @public
                     */

                }, {
                    key: 'isAdaptiveBitrateEnabled',
                    value: function isAdaptiveBitrateEnabled() {
                        return !this._isProgressivePlayback();
                    }

                    /**
                     * Disables all the existing video tracks.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_disableVideoTracks',
                    value: function _disableVideoTracks() {
                        var videoTracks = this._videoElement.videoTracks;
                        if (videoTracks) {
                            for (var i = 0; i < videoTracks.length; i++) {
                                videoTracks[i].selected = false;
                            }
                        }
                    }

                    /**
                     * Disables all the existing audio tracks.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_disableAudioTracks',
                    value: function _disableAudioTracks() {
                        var audioTracks = this._videoElement.audioTracks;
                        if (audioTracks) {
                            for (var i = 0; i < audioTracks.length; i++) {
                                audioTracks[i].enabled = false;
                            }
                        }
                    }

                    /**
                     * Disables all the existing text tracks.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_disableTextTracks',
                    value: function _disableTextTracks() {
                        var textTracks = this._videoElement.textTracks;
                        if (textTracks) {
                            for (var i = 0; i < textTracks.length; i++) {
                                textTracks[i].mode = 'disabled';
                            }
                        }
                    }

                    /**
                     * Returns the live edge
                     * @returns {number} - live edge
                     * @private
                     */

                }, {
                    key: '_getLiveEdge',
                    value: function _getLiveEdge() {
                        if (this._videoElement.seekable.length) {
                            return this._videoElement.seekable.end(this._videoElement.seekable.length - 1);
                        } else if (this._videoElement.buffered.length) {
                            return this._videoElement.buffered.end(this._videoElement.buffered.length - 1);
                        } else {
                            return this._videoElement.duration;
                        }
                    }

                    /**
                     * Seeking to live edge.
                     * @function seekToLiveEdge
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'seekToLiveEdge',
                    value: function seekToLiveEdge() {
                        try {
                            this._videoElement.currentTime = this._getLiveEdge();
                        } catch (e) {
                            return;
                        }
                    }

                    /**
                     * Checking if the current playback is live.
                     * @function isLive
                     * @returns {boolean} - Whether playback is live.
                     * @public
                     */

                }, {
                    key: 'isLive',
                    value: function isLive() {
                        return this._videoElement.duration === Infinity;
                    }

                    /**
                     * Handling live duration change (as safari doesn't trigger durationchange event on live playback)
                     * @function _handleLiveDurationChange
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleLiveDurationChange',
                    value: function _handleLiveDurationChange() {
                        var _this13 = this;

                        this._liveDurationChangeInterval = setInterval(function() {
                            var liveEdge = _this13._getLiveEdge();
                            if (_this13._liveEdge !== liveEdge) {
                                _this13._liveEdge = liveEdge;
                                _this13._videoElement.dispatchEvent(new window.Event(_eventType.Html5EventType.DURATION_CHANGE));
                            }
                        }, 2000);
                    }

                    /**
                     * Get the start time of DVR window in live playback in seconds.
                     * @returns {Number} - start time of DVR window.
                     * @public
                     */

                }, {
                    key: 'getStartTimeOfDvrWindow',
                    value: function getStartTimeOfDvrWindow() {
                        if (this.isLive() && this._videoElement.seekable.length) {
                            return this._videoElement.seekable.start(0);
                        } else {
                            return 0;
                        }
                    }
                }]);

                return NativeAdapter;
            }(_baseMediaSourceAdapter2.default);

            NativeAdapter.id = 'NativeAdapter';
            NativeAdapter._logger = _baseMediaSourceAdapter2.default.getLogger(NativeAdapter.id);
            NativeAdapter.TEST_VIDEO = Utils.Dom.createElement('video');
            NativeAdapter._drmProtocols = [_fairplay2.default];
            NativeAdapter._drmProtocol = null;
            exports.default = NativeAdapter;

            /***/
        }),
        /* 64 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });


            /**
             * Calculates the most suitable source to the container size
             * @function getSuitableSourceForResolution
             * @param {Array<Object>} tracks - The tracks
             * @param {number} width - The width to calculate with
             * @param {number} height - The height to calculate with
             * @returns {Object} - The most suitable source to the container size
             */
            function getSuitableSourceForResolution(tracks, width, height) {
                var mostSuitableWidth = null;
                if (height && tracks) {
                    var mostSuitableWidthTracks = [];
                    var minWidthDiff = Infinity;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = tracks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var track = _step.value;

                            // first filter the most width suitable
                            var widthDiff = Math.abs(track.width - width);
                            if (widthDiff < minWidthDiff) {
                                minWidthDiff = widthDiff;
                                mostSuitableWidthTracks = [track];
                            } else if (widthDiff === minWidthDiff) {
                                mostSuitableWidthTracks.push(track);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    var videoRatio = width / height;
                    var mostSuitableWidthAndRatioTracks = mostSuitableWidthTracks;
                    var minRatioDiff = Infinity;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = mostSuitableWidthTracks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _track = _step2.value;

                            // filter the most ratio suitable from the width filter results
                            if (_track.height) {
                                var ratioDiff = Math.abs(_track.width / _track.height - videoRatio);
                                if (ratioDiff < minRatioDiff) {
                                    minRatioDiff = ratioDiff;
                                    mostSuitableWidthAndRatioTracks = [_track];
                                } else if (ratioDiff === minRatioDiff) {
                                    mostSuitableWidthAndRatioTracks.push(_track);
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    var maxBandwidth = 0;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = mostSuitableWidthAndRatioTracks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _track2 = _step3.value;

                            // select the top bitrate from the ratio filter results
                            if (_track2.bandwidth > maxBandwidth || !_track2.bandwidth) {
                                maxBandwidth = _track2.bandwidth || maxBandwidth;
                                mostSuitableWidth = _track2;
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
                return mostSuitableWidth;
            }

            exports.getSuitableSourceForResolution = getSuitableSourceForResolution;

            /***/
        }),
        /* 65 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _baseDrmProtocol = __webpack_require__(33);

            var _baseDrmProtocol2 = _interopRequireDefault(_baseDrmProtocol);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var FairPlay = function(_BaseDrmProtocol) {
                _inherits(FairPlay, _BaseDrmProtocol);

                function FairPlay() {
                    _classCallCheck(this, FairPlay);

                    return _possibleConstructorReturn(this, (FairPlay.__proto__ || Object.getPrototypeOf(FairPlay)).apply(this, arguments));
                }

                _createClass(FairPlay, null, [{
                    key: 'isConfigured',


                    /**
                     * FairPlay is the configure key system.
                     * @param {Array<Object>} drmData - The drm data.
                     * @param {PKDrmConfigObject} drmConfig - The drm config.
                     * @return {boolean} - Whether FairPlay is the configure key system.
                     */
                    value: function isConfigured(drmData, drmConfig) {
                        return _baseDrmProtocol2.default.DrmScheme.FAIRPLAY === drmConfig.keySystem && !!drmData.find(function(drmEntry) {
                            return drmEntry.scheme === drmConfig.keySystem;
                        });
                    }

                    /**
                     * FairPlay playback supports in case 2 conditions are met:
                     * 1. The environment supports FairPlay playback.
                     * 2. The drm data of the source object contains entry with FairPlay scheme.
                     * @param {Array<Object>} drmData - The drm data to check.
                     * @return {boolean} - Whether FairPlay can be play on the current environment.
                     */

                }, {
                    key: 'canPlayDrm',
                    value: function canPlayDrm(drmData) {
                        FairPlay._logger.debug('Can play DRM scheme of: ' + _baseDrmProtocol2.default.DrmScheme.FAIRPLAY);
                        return _baseDrmProtocol2.default.DrmSupport.isProtocolSupported(_baseDrmProtocol2.default.DrmScheme.FAIRPLAY, drmData);
                    }

                    /**
                     * Sets the FairPlay playback.
                     * @param {FairplayDrmConfigType} config - The config to manipulate.
                     * @param {Array<Object>} drmData - The drm data.
                     * @returns {void}
                     */

                }, {
                    key: 'setDrmPlayback',
                    value: function setDrmPlayback(config, drmData) {
                        FairPlay._logger.debug('Sets drm playback');
                        var drmEntry = drmData.find(function(drmEntry) {
                            return drmEntry.scheme === _baseDrmProtocol2.default.DrmScheme.FAIRPLAY;
                        });
                        if (drmEntry) {
                            config.licenseUrl = drmEntry.licenseUrl;
                            config.certificate = drmEntry.certificate;
                        }
                    }
                }]);

                return FairPlay;
            }(_baseDrmProtocol2.default);

            FairPlay._logger = _baseDrmProtocol2.default.getLogger('FairPlay');
            FairPlay._KeySystem = 'com.apple.fps.1_0';
            FairPlay._WebkitEvents = {
                NEED_KEY: 'webkitneedkey',
                KEY_MESSAGE: 'webkitkeymessage',
                KEY_ADDED: 'webkitkeyadded',
                KEY_ERROR: 'webkitkeyerror'
            };
            exports.default = FairPlay;

            /***/
        }),
        /* 66 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _env = __webpack_require__(12);

            var _env2 = _interopRequireDefault(_env);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _drmScheme = __webpack_require__(23);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var NOT_SUPPORTED = 'not_supported_drm_playback';

            var DrmSupport = function() {
                function DrmSupport() {
                    _classCallCheck(this, DrmSupport);
                }

                _createClass(DrmSupport, null, [{
                    key: 'isProtocolSupported',


                    /**
                     * Checks if a certain DRM scheme is supported in the current environment.
                     * @param {string} scheme - The drm scheme.
                     * @param {Array<Object>} drmData - The drm data to check.
                     * @return {boolean} - Whether scheme can be play on the current environment.
                     */
                    value: function isProtocolSupported(scheme, drmData) {
                        var browser = _env2.default.browser.name;
                        if (typeof DrmSupport._Browsers[browser] === 'function') {
                            var drmScheme = DrmSupport._Browsers[browser]();
                            DrmSupport._logger.debug('Supported DRM scheme for current environment is: ' + drmScheme);
                            return drmScheme === scheme && !!drmData.find(function(drmEntry) {
                                return drmEntry.scheme === scheme;
                            });
                        }
                        return false;
                    }
                }]);

                return DrmSupport;
            }();

            DrmSupport._logger = (0, _logger2.default)('DrmSupport');
            DrmSupport._Browsers = {
                Safari: function Safari() {
                    var device = _env2.default.device.type;
                    var os = _env2.default.os.name;
                    if (!device && os === 'Mac OS') {
                        return _drmScheme.DrmScheme.FAIRPLAY;
                    }
                    return NOT_SUPPORTED;
                },
                Chrome: function Chrome() {
                    var device = _env2.default.device.type;
                    var os = _env2.default.os.name;
                    if (!device || os === 'Android') {
                        return _drmScheme.DrmScheme.WIDEVINE;
                    }
                    return NOT_SUPPORTED;
                },
                Firefox: function Firefox() {
                    var device = _env2.default.device.type;
                    if (!device) {
                        return _drmScheme.DrmScheme.WIDEVINE;
                    }
                    return NOT_SUPPORTED;
                },
                Edge: function Edge() {
                    var device = _env2.default.device.type;
                    if (!device) {
                        return _drmScheme.DrmScheme.PLAYREADY;
                    }
                    return NOT_SUPPORTED;
                },
                IE: function IE() {
                    var device = _env2.default.device.type;
                    var os = _env2.default.os.name;
                    var osVersion = _env2.default.os.version;
                    if (!device && os === 'Windows' && Number.parseFloat(osVersion) >= 8.1) {
                        return _drmScheme.DrmScheme.PLAYREADY;
                    }
                    return NOT_SUPPORTED;
                },
                'Mobile Safari': function MobileSafari() {
                    var majorVersion = _env2.default.browser.major;
                    if (majorVersion >= 11) {
                        return _drmScheme.DrmScheme.FAIRPLAY;
                    }
                    return NOT_SUPPORTED;
                }
            };
            exports.default = DrmSupport;

            /***/
        }),
        /* 67 */
        /***/
        (function(module, exports) {

            module.exports = {
                "heartbeatTimeout": 30000
            };

            /***/
        }),
        /* 68 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.FairplayDrmHandler = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var KeySystem = 'com.apple.fps.1_0';

            var WebkitEvents = {
                NEED_KEY: 'webkitneedkey',
                KEY_MESSAGE: 'webkitkeymessage',
                KEY_ADDED: 'webkitkeyadded',
                KEY_ERROR: 'webkitkeyerror'
            };

            var FairplayDrmHandler = function() {

                /**
                 * Fairplay DRM handler
                 * @param {HTMLVideoElement} videoElement - the video element
                 * @param {FairplayDrmConfigType} config - config object
                 * @param {Function} errorCallback - error callback function
                 */
                function FairplayDrmHandler(videoElement, config, errorCallback) {
                    var _this = this;

                    _classCallCheck(this, FairplayDrmHandler);

                    this._logger = (0, _logger2.default)('FairPlayDrmHandler');
                    this._retryLicenseRequest = 4;

                    this._config = config;
                    this._errorCallback = errorCallback;
                    this._videoElement = videoElement;
                    this._onWebkitNeedKeyHandler = function(e) {
                        return _this._onWebkitNeedKey(e);
                    };
                    this._videoElement.addEventListener(WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler, false);
                }

                _createClass(FairplayDrmHandler, [{
                    key: '_onWebkitNeedKey',
                    value: function _onWebkitNeedKey(event) {
                        var _this2 = this;

                        this._logger.debug('Webkit need key triggered');
                        var videoElement = event.target;
                        var initData = event.initData;

                        var contentId = FairplayDrmHandler._extractContentId(initData);
                        var fpsCertificate = FairplayDrmHandler._base64DecodeUint8Array(this._config.certificate);

                        initData = FairplayDrmHandler._concatInitDataIdAndCertificate(initData, contentId, fpsCertificate);

                        if (!videoElement.webkitKeys) {
                            var keySystem = this._selectKeySystem();
                            this._logger.debug('Sets media keys');
                            videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(keySystem));
                        }
                        if (!videoElement.webkitKeys) {
                            this._onError(_error2.default.Code.COULD_NOT_CREATE_MEDIA_KEYS);
                        }
                        this._logger.debug('Creates session');
                        this._keySession = videoElement.webkitKeys.createSession('video/mp4', initData);
                        if (!this._keySession) {
                            this._onError(_error2.default.Code.COULD_NOT_CREATE_KEY_SESSION);
                        }
                        this._keySession.contentId = contentId;
                        this._keySession.addEventListener(WebkitEvents.KEY_MESSAGE, function(e) {
                            return _this2._onWebkitKeyMessage(e);
                        }, false);
                        this._keySession.addEventListener(WebkitEvents.KEY_ADDED, function() {
                            return _this2._onWebkitKeyAdded();
                        }, false);
                        this._keySession.addEventListener(WebkitEvents.KEY_ERROR, function(e) {
                            return _this2._onWebkitKeyError(e);
                        }, false);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this._videoElement.removeEventListener(WebkitEvents.NEED_KEY, this._onWebkitNeedKeyHandler);
                        this._keySession.close();
                        this._keySession = null;
                    }
                }, {
                    key: '_onWebkitKeyMessage',
                    value: function _onWebkitKeyMessage(event) {
                        var _this3 = this;

                        this._logger.debug('Webkit key message triggered');
                        var message = event.message;
                        var request = new XMLHttpRequest();
                        request.responseType = 'text';
                        request.addEventListener('load', function(e) {
                            return _this3._licenseRequestLoaded(e);
                        }, false);
                        var params = FairplayDrmHandler._base64EncodeUint8Array(message);
                        request.open('POST', this._config.licenseUrl, true);
                        request.setRequestHeader('Content-type', 'application/json');
                        this._logger.debug('Ready for license request');
                        request.onerror = function() {
                            _this3._onError(_error2.default.Code.LICENSE_REQUEST_FAILED, {
                                status: request.status,
                                responseText: request.responseText
                            });
                        };
                        request.send(params);
                    }
                }, {
                    key: '_onWebkitKeyAdded',
                    value: function _onWebkitKeyAdded() {
                        this._logger.debug('Decryption key was added to session');
                    }
                }, {
                    key: '_onWebkitKeyError',
                    value: function _onWebkitKeyError(e) {
                        this._logger.error('A decryption key error was encountered', e);
                        if (this._retryLicenseRequest <= 0) {
                            this._onError(_error2.default.Code.LICENSE_REQUEST_FAILED, e.target.error);
                        }
                        this._retryLicenseRequest--;
                    }
                }, {
                    key: '_licenseRequestLoaded',
                    value: function _licenseRequestLoaded(event) {
                        this._logger.debug('License request loaded');
                        var request = event.target;
                        if (request.status > 299) {
                            this._onError(_error2.default.Code.LICENSE_REQUEST_FAILED, {
                                status: request.status,
                                error: request.responseText
                            });
                            return;
                        }
                        var responseObj = {};
                        try {
                            var keyText = request.responseText.trim();
                            responseObj = JSON.parse(keyText);
                        } catch (error) {
                            this._onError(_error2.default.Code.BAD_FAIRPLAY_RESPONSE, {
                                error: error,
                                responseText: request.responseText
                            });
                        }
                        var isValidResponse = FairplayDrmHandler._validateResponse(responseObj);
                        if (isValidResponse.valid) {
                            var key = FairplayDrmHandler._base64DecodeUint8Array(responseObj.ckc);
                            this._keySession.update(key);
                        } else {
                            this._onError(_error2.default.Code.BAD_FAIRPLAY_RESPONSE, isValidResponse);
                        }
                    }
                }, {
                    key: '_onError',
                    value: function _onError(code, data) {
                        this._errorCallback(new _error2.default(_error2.default.Severity.CRITICAL, _error2.default.Category.DRM, code, data));
                    }
                }, {
                    key: '_selectKeySystem',
                    value: function _selectKeySystem() {
                        var keySystem = null;
                        if (window.WebKitMediaKeys.isTypeSupported(KeySystem, 'video/mp4')) {
                            keySystem = KeySystem;
                        } else {
                            this._logger.warn('Key System not supported');
                        }
                        return keySystem;
                    }
                }], [{
                    key: '_validateResponse',
                    value: function _validateResponse(responseObj) {
                        if (responseObj.message && responseObj.message.indexOf('error') > 0 || responseObj.reference === null || responseObj.status_code === 500) {
                            return {
                                //todo: create & edit an error object
                                valid: false,
                                details: 'internal server error' // would be ERROR.INTERNAL or something like that
                            };
                        } else if (responseObj.ckc === '') {
                            return {
                                valid: false,
                                details: 'ckc is missing' // would be ERROR.MISSING_CKC or something like that
                            };
                        } else {
                            return {
                                valid: true
                            };
                        }
                    }
                }, {
                    key: '_extractContentId',
                    value: function _extractContentId(initData) {
                        var link = document.createElement('a');
                        link.href = FairplayDrmHandler._arrayToString(initData);
                        return link.hostname;
                    }
                }, {
                    key: '_arrayToString',
                    value: function _arrayToString(array) {
                        return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
                    }
                }, {
                    key: '_base64DecodeUint8Array',
                    value: function _base64DecodeUint8Array(input) {
                        var raw = window.atob(input);
                        var rawLength = raw.length;
                        var array = new Uint8Array(new ArrayBuffer(rawLength));
                        for (var i = 0; i < rawLength; i++) {
                            array[i] = raw.charCodeAt(i);
                        }
                        return array;
                    }
                }, {
                    key: '_concatInitDataIdAndCertificate',
                    value: function _concatInitDataIdAndCertificate(initData, id, cert) {
                        if (typeof id === 'string') {
                            id = FairplayDrmHandler._stringToArray(id);
                        }
                        var offset = 0;
                        var buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
                        var dataView = new DataView(buffer);

                        var initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
                        initDataArray.set(initData);
                        offset += initData.byteLength;

                        dataView.setUint32(offset, id.byteLength, true);
                        offset += 4;

                        var idArray = new Uint8Array(buffer, offset, id.byteLength);
                        idArray.set(id);
                        offset += idArray.byteLength;

                        dataView.setUint32(offset, cert.byteLength, true);
                        offset += 4;

                        var certArray = new Uint8Array(buffer, offset, cert.byteLength);
                        certArray.set(cert);

                        return new Uint8Array(buffer, 0, buffer.byteLength);
                    }
                }, {
                    key: '_stringToArray',
                    value: function _stringToArray(string) {
                        var buffer = new ArrayBuffer(string.length * 2);
                        var array = new Uint16Array(buffer);
                        for (var i = 0, strLen = string.length; i < strLen; i++) {
                            array[i] = string.charCodeAt(i);
                        }
                        return array;
                    }
                }, {
                    key: '_base64EncodeUint8Array',
                    value: function _base64EncodeUint8Array(input) {
                        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                        var output = '';
                        var chr1 = void 0,
                            chr2 = void 0,
                            chr3 = void 0,
                            enc1 = void 0,
                            enc2 = void 0,
                            enc3 = void 0,
                            enc4 = void 0;
                        var i = 0;
                        while (i < input.length) {
                            chr1 = input[i++];
                            chr2 = i < input.length ? input[i++] : Number.NaN;
                            chr3 = i < input.length ? input[i++] : Number.NaN;

                            enc1 = chr1 >> 2;
                            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                            enc4 = chr3 & 63;

                            if (isNaN(chr2)) {
                                enc3 = enc4 = 64;
                            } else if (isNaN(chr3)) {
                                enc4 = 64;
                            }
                            output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
                        }
                        return output;
                    }
                }]);

                return FairplayDrmHandler;
            }();

            FairplayDrmHandler.WebkitEvents = WebkitEvents;


            FairplayDrmHandler.WebkitEvents = WebkitEvents;

            exports.FairplayDrmHandler = FairplayDrmHandler;

            /***/
        }),
        /* 69 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _eventType = __webpack_require__(3);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _encodingSources = __webpack_require__(70);

            var EncodingSources = _interopRequireWildcard(_encodingSources);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var WAIT_TIME = 500;

            var Html5AutoPlayCapability = function() {
                function Html5AutoPlayCapability() {
                    _classCallCheck(this, Html5AutoPlayCapability);
                }

                _createClass(Html5AutoPlayCapability, null, [{
                    key: 'runCapability',


                    /**
                     * Runs the test for autoplay capability.
                     * @public
                     * @static
                     * @returns {void}
                     */
                    value: function runCapability() {
                        if (!Html5AutoPlayCapability._vid) {
                            Html5AutoPlayCapability._vid = Utils.Dom.createElement('video');
                            Html5AutoPlayCapability._vid.src = EncodingSources.Base64Mp4Source;
                            // For iOS devices needs to turn the playsinline attribute on
                            Html5AutoPlayCapability._vid.setAttribute('playsinline', '');
                        }
                        Html5AutoPlayCapability._playPromiseResult = new Promise(function(resolve) {
                            Html5AutoPlayCapability._setMuted(false);
                            Html5AutoPlayCapability._getPlayPromise().then(function() {
                                return resolve({
                                    autoplay: true,
                                    mutedAutoPlay: true
                                });
                            }).catch(function() {
                                Html5AutoPlayCapability._setMuted(true);
                                Html5AutoPlayCapability._getPlayPromise().then(function() {
                                    return resolve({
                                        autoplay: false,
                                        mutedAutoPlay: true
                                    });
                                }).catch(function() {
                                    return resolve({
                                        autoplay: false,
                                        mutedAutoPlay: false
                                    });
                                });
                            });
                        });
                    }

                    /**
                     * Gets the test result for autoplay capability.
                     * @returns {Promise<CapabilityResult>} - The result object for autoplay capability.
                     * @static
                     * @public
                     */

                }, {
                    key: 'getCapability',
                    value: function getCapability() {
                        return Html5AutoPlayCapability._playPromiseResult.then(function(res) {
                            // If autoplay is not allowed - try again and return the updated result
                            if (!res.autoplay) {
                                Html5AutoPlayCapability.runCapability();
                                return Html5AutoPlayCapability._playPromiseResult;
                            }
                            return res;
                        });
                    }

                    /**
                     * Gets the play promise.
                     * @return {Promise<*>} - Play promise which resolved or rejected.
                     * @private
                     */

                }, {
                    key: '_getPlayPromise',
                    value: function _getPlayPromise() {
                        return Html5AutoPlayCapability._vid.play() || Html5AutoPlayCapability._forcePromiseReturnValue();
                    }

                    /**
                     * Sets the test video element muted value.
                     * @param {boolean} muted - The muted value.
                     * @private
                     * @returns {void}
                     * @static
                     */

                }, {
                    key: '_setMuted',
                    value: function _setMuted(muted) {
                        if (muted) {
                            Html5AutoPlayCapability._vid.muted = true;
                            Html5AutoPlayCapability._vid.setAttribute('muted', '');
                        } else {
                            Html5AutoPlayCapability._vid.muted = false;
                            Html5AutoPlayCapability._vid.removeAttribute('muted');
                        }
                    }

                    /**
                     * For browsers which are not supported promise return value from play()
                     * request we are simulate the same behaviour.
                     * @return {Promise<*>} - Play promise which resolved or rejected.
                     * @private
                     * @static
                     */

                }, {
                    key: '_forcePromiseReturnValue',
                    value: function _forcePromiseReturnValue() {
                        return new Promise(function(resolve, reject) {
                            Html5AutoPlayCapability._vid.addEventListener(_eventType.Html5EventType.ERROR, function() {
                                reject();
                            });
                            var supported = setTimeout(function() {
                                Html5AutoPlayCapability._logger.debug('Timeout ' + WAIT_TIME + ' ms has been reached');
                                reject();
                            }, WAIT_TIME);
                            if (Html5AutoPlayCapability._vid.paused === true) {
                                clearTimeout(supported);
                                reject();
                            } else {
                                clearTimeout(supported);
                                resolve();
                            }
                        });
                    }
                }]);

                return Html5AutoPlayCapability;
            }();

            Html5AutoPlayCapability._logger = (0, _logger2.default)('Html5AutoPlayCapability');
            exports.default = Html5AutoPlayCapability;

            /***/
        }),
        /* 70 */
        /***/
        (function(module, exports) {

            module.exports = {
                "Base64Mp4Source": "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE="
            };

            /***/
        }),
        /* 71 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DroppedFramesWatcher = undefined;

            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _eventType = __webpack_require__(3);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var NOT_SUPPORTED = -1;

            var DroppedFramesWatcher = function(_FakeEventTarget) {
                _inherits(DroppedFramesWatcher, _FakeEventTarget);

                function DroppedFramesWatcher(mediaSourceAdapter, config, videoElement) {
                    _classCallCheck(this, DroppedFramesWatcher);

                    var _this = _possibleConstructorReturn(this, (DroppedFramesWatcher.__proto__ || Object.getPrototypeOf(DroppedFramesWatcher)).call(this));

                    _this._droppedFramesInterval = null;
                    _this._lastDroppedFrames = 0;
                    _this._lastDecodedFrames = 0;
                    _this._lastTime = 0;
                    _this._currentBitrate = 0;

                    _this._eventManager = new _eventManager2.default();
                    _this._mediaSourceAdapter = mediaSourceAdapter;
                    _this._config = config;
                    _this._videoElement = videoElement;
                    if (_this._mediaSourceAdapter.capabilities.fpsControl) {
                        _this._eventManager.listen(_this._mediaSourceAdapter, _eventType.CustomEventType.FPS_DROP, function(event) {
                            return _this._triggerFPSDrop(event.payload.data);
                        });
                        return _possibleConstructorReturn(_this);
                    }
                    if (_this._getDroppedAndDecodedFrames()[0] === NOT_SUPPORTED) {
                        DroppedFramesWatcher._logger.debug('Dropped frame watcher is not supported');
                    } else if (_this._config.capLevelOnFPSDrop) {
                        _this._init();
                    }
                    return _this;
                }

                _createClass(DroppedFramesWatcher, [{
                    key: '_init',
                    value: function _init() {
                        var _this2 = this;

                        this._eventManager.listen(this._mediaSourceAdapter, _eventType.CustomEventType.VIDEO_TRACK_CHANGED, function(event) {
                            return _this2._currentBitrate = event.payload.selectedVideoTrack.bandwidth;
                        });
                        this._droppedFramesInterval = setInterval(function() {
                            return _this2._checkFPS();
                        }, this._config.fpsDroppedFramesInterval);
                    }
                }, {
                    key: '_triggerFPSDrop',
                    value: function _triggerFPSDrop(data) {
                        this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.FPS_DROP, data));
                    }
                }, {
                    key: '_getDroppedAndDecodedFrames',
                    value: function _getDroppedAndDecodedFrames() {
                        if (typeof this._videoElement.getVideoPlaybackQuality === 'function') {
                            var videoPlaybackQuality = this._videoElement.getVideoPlaybackQuality();
                            return [videoPlaybackQuality.droppedVideoFrames, videoPlaybackQuality.totalVideoFrames];
                        } else if (typeof this._videoElement.webkitDroppedFrameCount == 'number' && typeof this._videoElement.webkitDecodedFrameCount == 'number') {
                            return [this._videoElement.webkitDroppedFrameCount, this._videoElement.webkitDecodedFrameCount];
                        } else {
                            return [NOT_SUPPORTED, NOT_SUPPORTED];
                        }
                    }
                }, {
                    key: '_checkFPS',
                    value: function _checkFPS() {
                        var _getDroppedAndDecoded = this._getDroppedAndDecodedFrames(),
                            _getDroppedAndDecoded2 = _slicedToArray(_getDroppedAndDecoded, 2),
                            droppedFrames = _getDroppedAndDecoded2[0],
                            decodedFrames = _getDroppedAndDecoded2[1];

                        try {
                            var currentTime = performance.now();
                            if (decodedFrames) {
                                if (this._lastTime) {
                                    var currentPeriod = currentTime - this._lastTime,
                                        currentDropped = droppedFrames - this._lastDroppedFrames,
                                        currentDecoded = decodedFrames - this._lastDecodedFrames,
                                        droppedFPS = 1000 * currentDropped / currentPeriod;
                                    if (droppedFPS > 0) {
                                        DroppedFramesWatcher._logger.debug('checkFPS : droppedFPS/decodedFPS:' + droppedFPS / (1000 * currentDecoded / currentPeriod));
                                        if (currentDropped > this._config.fpsDroppedMonitoringThreshold * currentDecoded) {
                                            this._mediaSourceAdapter.setMaxBitrate(this._currentBitrate - 1);
                                            this._triggerFPSDrop({
                                                currentDropped: currentDropped,
                                                currentDecoded: currentDecoded,
                                                totalDroppedFrames: droppedFPS
                                            });
                                        }
                                    }
                                }
                                this._lastTime = currentTime;
                                this._lastDroppedFrames = droppedFrames;
                                this._lastDecodedFrames = decodedFrames;
                            }
                        } catch (error) {
                            DroppedFramesWatcher._logger.error('Error occur while trying to check dropFrames: ', error);
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this._droppedFramesInterval) {
                            clearInterval(this._droppedFramesInterval);
                        }
                        this._droppedFramesInterval = null;
                        this._eventManager.destroy();
                    }
                }]);

                return DroppedFramesWatcher;
            }(_fakeEventTarget2.default);

            DroppedFramesWatcher._logger = (0, _logger2.default)('droppedFramesWatcher');
            exports.DroppedFramesWatcher = DroppedFramesWatcher;

            /***/
        }),
        /* 72 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ExternalCaptionsHandler = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _error = __webpack_require__(2);

            var _error2 = _interopRequireDefault(_error);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            var _textTrackDisplay = __webpack_require__(21);

            var _trackType = __webpack_require__(14);

            var _textTrack = __webpack_require__(9);

            var _textTrack2 = _interopRequireDefault(_textTrack);

            var _track = __webpack_require__(7);

            var _track2 = _interopRequireDefault(_track);

            var _eventType = __webpack_require__(3);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _logger = __webpack_require__(0);

            var _logger2 = _interopRequireDefault(_logger);

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _vttCue = __webpack_require__(13);

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * enum for cues statuses
             * @const
             * @type {Object}
             */
            var CuesStatus = {
                NOT_DOWNLOADED: 1,
                DOWNLOADING: 2,
                DOWNLOADED: 3
            };

            var SRT_POSTFIX = 'srt';

            var VTT_POSTFIX = 'vtt';

            var ExternalCaptionsHandler = function(_FakeEventTarget) {
                _inherits(ExternalCaptionsHandler, _FakeEventTarget);

                /**
                 * constructor
                 * @param {Player} player - the player object.
                 */

                /**
                 * indicates if a current external (non native) track is active or not.
                 * @type {boolean}
                 * @private
                 */

                /**
                 * a map that holds the current cues that are in process. process may be in download or that the cues are being parsed.
                 * @type {Object}
                 * @private
                 */

                /**
                 * the player object.
                 * @type {Player}
                 * @private
                 */

                /**
                 * event manager for the external caption handler
                 * @type {EventManager}
                 * @private
                 */

                /**
                 * The external captions handler class logger.
                 * @type {any}
                 * @static
                 * @private
                 */
                function ExternalCaptionsHandler(player) {
                    _classCallCheck(this, ExternalCaptionsHandler);

                    var _this = _possibleConstructorReturn(this, (ExternalCaptionsHandler.__proto__ || Object.getPrototypeOf(ExternalCaptionsHandler)).call(this));

                    _this._externalCueIndex = 0;
                    _this._textTrackModel = {};
                    _this._activeTextCues = [];
                    _this._isTextTrackActive = false;
                    _this._lastTimeUpdate = 0;

                    _this._player = player;
                    _this._eventManager = new _eventManager2.default();
                    return _this;
                }

                /**
                 * selects external track start listening to cues
                 * @returns {void}
                 * @public
                 */

                /**
                 * indicates the last player time in the last time update event.
                 * @type {number}
                 * @private
                 */

                /**
                 * array of the active text cues of current track
                 * @type {Array<Cue>}
                 * @private
                 */

                /**
                 * Index that specifies the last cue that is playing / played in the text track cue array.
                 * @type {number}
                 * @private
                 */


                _createClass(ExternalCaptionsHandler, [{
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {
                        // only if external text track was active we need to hide it.
                        if (this._isTextTrackActive) {
                            this._eventManager.unlisten(this._player, _eventType.Html5EventType.TIME_UPDATE);
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_CUE_CHANGED, {
                                cues: []
                            }));
                            this._resetCurrentTrack();
                        }
                    }

                    /**
                     * get external tracks (native and/or player module tracks)
                     * @returns {Array<TextTrack>} returns an array with the new external tracks
                     * @param {Array<Track>} tracks array with the player text tracks.
                     * @public
                     */

                }, {
                    key: 'getExternalTracks',
                    value: function getExternalTracks(tracks) {
                        var _this2 = this;

                        var captions = this._player.config.sources.captions;
                        if (!captions) {
                            return [];
                        }
                        var playerTextTracks = tracks.filter(function(track) {
                            return track instanceof _textTrack2.default;
                        });
                        var textTracksLength = playerTextTracks.length || 0;
                        var newTextTracks = [];
                        captions.forEach(function(caption) {
                            if (!caption.language) {
                                var error = new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.TEXT, _error2.default.Code.UNKNOWN_LANGUAGE, {
                                    caption: caption
                                });
                                _this2.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, error));
                            } else {
                                var track = _this2._createTextTrack(caption, textTracksLength++);
                                _this2._maybeAddTrack(track, caption, playerTextTracks, newTextTracks);
                            }
                        });
                        return newTextTracks;
                    }

                    /**
                     * checking if there is already a track with the same language
                     * @param {TextTrack} track - textTrack to be added text tracks array that will be returned to the player
                     * @param {PKExternalCaptionObject} caption - caption to be added to the model
                     * @param {Array<Text>} playerTextTracks - player text tracks array
                     * @param {Array<TextTrack>} newTextTracks - text track array that will be returned to the player
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_maybeAddTrack',
                    value: function _maybeAddTrack(track, caption, playerTextTracks, newTextTracks) {
                        var sameLangTrack = playerTextTracks.find(function(textTrack) {
                            return _track2.default.langComparer(caption.language, textTrack.language);
                        });
                        if (!sameLangTrack) {
                            if (this._player.config.playback.useNativeTextTrack) {
                                this._addNativeTextTrack(track);
                            }
                            newTextTracks.push(track);
                            this._updateTextTracksModel(caption);
                        } else {
                            ExternalCaptionsHandler._logger.warn('duplicated language, taking the inband option. Language: ', sameLangTrack.language);
                        }
                    }

                    /**
                     * creates a new text track
                     * @param {PKExternalCaptionObject} caption - caption to create the text track with
                     * @param {number} index - index of the text track
                     * @returns {TextTrack} - new text track
                     * @private
                     */

                }, {
                    key: '_createTextTrack',
                    value: function _createTextTrack(caption, index) {
                        return new _textTrack2.default({
                            active: !!caption.default,
                            index: index,
                            kind: 'subtitles',
                            label: caption.label,
                            language: caption.language,
                            external: true
                        });
                    }

                    /**
                     * adding the caption to the class texttracks model
                     * @param {PKExternalCaptionObject} caption - the caption to be added
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_updateTextTracksModel',
                    value: function _updateTextTracksModel(caption) {
                        this._textTrackModel[caption.language] = {
                            cuesStatus: CuesStatus.NOT_DOWNLOADED,
                            cues: [],
                            url: caption.url,
                            type: caption.type
                        };
                    }

                    /**
                     * selects external track start listening to cues
                     * @param {TextTrack} textTrack - selected text track
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectTextTrack',
                    value: function selectTextTrack(textTrack) {
                        var _this3 = this;

                        if (this._textTrackModel[textTrack.language]) {
                            if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.DOWNLOADED && !this._player.config.playback.useNativeTextTrack) {
                                textTrack.active = true;
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_TRACK_CHANGED, {
                                    selectedTextTrack: textTrack
                                }));
                                this.hideTextTrack();
                                this._setTextTrack(textTrack);
                            } else if (this._textTrackModel[textTrack.language].cuesStatus === CuesStatus.NOT_DOWNLOADED) {
                                textTrack.active = true;
                                if (!this._player.config.playback.useNativeTextTrack) {
                                    this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_TRACK_CHANGED, {
                                        selectedTextTrack: textTrack
                                    }));
                                }
                                this._downloadAndParseCues(textTrack).then(function() {
                                    _this3._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADED;
                                    if (_this3._player.config.playback.useNativeTextTrack) {
                                        _this3._addCuesToNativeTextTrack(textTrack, _this3._textTrackModel[textTrack.language].cues);
                                    } else {
                                        _this3.hideTextTrack();
                                        _this3._setTextTrack(textTrack);
                                    }
                                }).catch(function(error) {
                                    return _this3.dispatchEvent(new _fakeEvent2.default(_eventType.Html5EventType.ERROR, error));
                                });
                            }
                        }
                    }

                    /**
                     * set hasBeenReset to true for all the cues.
                     * @returns {void}
                     */

                }, {
                    key: 'resetAllCues',
                    value: function resetAllCues() {
                        for (var textTrack in this._textTrackModel) {
                            this._textTrackModel[textTrack].cues.forEach(function(cue) {
                                cue.hasBeenReset = true;
                            });
                        }
                    }

                    /**
                     * resets the handler
                     * @returns {void}
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        this._resetCurrentTrack();
                        this._textTrackModel = {};
                        this._eventManager.removeAll();
                    }

                    /**
                     * destroy function
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this._textTrackModel = {};
                        this._eventManager.destroy();
                        this._activeTextCues = [];
                    }

                    /**
                     * resets all the params of the current external text track that is playing
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_resetCurrentTrack',
                    value: function _resetCurrentTrack() {
                        this._activeTextCues = [];
                        this._isTextTrackActive = false;
                        this._maybeSetExternalCueIndex();
                    }

                    /**
                     * Make a request to download a caption and parse it's content to cues.
                     * @param {TextTrack} textTrack - download and parse the cues of the text track
                     * @returns {Promise<any>} - resolves when the request returns and the caption string is parsed to cues.
                     * @private
                     */

                }, {
                    key: '_getCuesString',
                    value: function _getCuesString(textTrack) {
                        var _this4 = this;

                        return new Promise(function(resolve, reject) {
                            var track = _this4._textTrackModel[textTrack.language];
                            var captionType = track.type || _this4._getFileType(track.url);
                            if (![SRT_POSTFIX, VTT_POSTFIX].includes(captionType)) {
                                _this4._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
                                reject(new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.TEXT, _error2.default.Code.UNKNOWN_FILE_TYPE, {
                                    captionType: captionType
                                }));
                            }
                            Utils.Http.execute(track.url, {}, 'GET').then(function(response) {
                                resolve(captionType === SRT_POSTFIX ? _this4._convertSrtToVtt(response) : response);
                            }).catch(function() {
                                _this4._textTrackModel[textTrack.language].cuesStatus = CuesStatus.NOT_DOWNLOADED;
                                reject(new _error2.default(_error2.default.Severity.RECOVERABLE, _error2.default.Category.TEXT, _error2.default.Code.HTTP_ERROR, {
                                    url: track.url
                                }));
                            });
                        });
                    }

                    /**
                     * this calls the VTTCue parser and parse the .vtt captions string into vttCues objects
                     * @param {string} vttStr - a string in a .vtt format to parse into VTTCues
                     * @returns {Promise<*>} - parsed cues array
                     * @private
                     */

                }, {
                    key: '_parseCues',
                    value: function _parseCues(vttStr) {
                        return new Promise(function(resolve, reject) {
                            var parser = new _textTrackDisplay.Parser(window, (0, _textTrackDisplay.StringDecoder)());
                            var cues = [];
                            parser.oncue = function(cue) {
                                return cues.push(cue);
                            };
                            parser.onflush = function() {
                                ExternalCaptionsHandler._logger.debug('finished parsing external cues');
                                resolve(cues);
                            };
                            parser.parse(vttStr);
                            parser.flush();
                            parser.onparsingerror(function(e) {
                                return reject(e);
                            });
                        });
                    }

                    /**
                     * converts a .SRT string into .VTT string
                     * @param {string} str - a string in a .SRT format
                     * @returns {string} - a string in a .VTT format
                     * @private
                     */

                }, {
                    key: '_convertSrtToVtt',
                    value: function _convertSrtToVtt(str) {
                        var vttStr = str.replace(/(\d\d:\d\d:\d\d),(\d\d\d) --> (\d\d:\d\d:\d\d),(\d\d\d)/g, function(match, part1, part2, part3, part4) {
                            return part1 + '.' + part2 + ' --> ' + part3 + '.' + part4;
                        });
                        return 'WEBVTT\n\n' + vttStr;
                    }

                    /**
                     * resolves with a caption object that contains all the caption data
                     * start the parsing, creation and addition of the external captions.
                     * @param {TextTrack} textTrack - create a single caption. when the process ends, this._textTrackModel is updated with
                     * DOWNLOADED status
                     * @returns {Promise<any>} - a promise that the action ended
                     * @private
                     */

                }, {
                    key: '_downloadAndParseCues',
                    value: function _downloadAndParseCues(textTrack) {
                        var _this5 = this;

                        this._textTrackModel[textTrack.language].cuesStatus = CuesStatus.DOWNLOADING;
                        return new Promise(function(resolve, reject) {
                            _this5._getCuesString(textTrack).then(function(vttString) {
                                return _this5._parseCues(vttString);
                            }).then(function(cuesArray) {
                                _this5._textTrackModel[textTrack.language].cues = cuesArray;
                                resolve();
                            }).catch(function(error) {
                                return reject(error);
                            });
                        });
                    }

                    /**
                     * getting the file extension
                     * @param {string} url - the url of the file
                     * @returns {string} type of the file
                     * @private
                     */

                }, {
                    key: '_getFileType',
                    value: function _getFileType(url) {
                        return url.split(/[#?]/)[0].split('.').pop().trim();
                    }

                    /**
                     * callback for the 'timeupdate' event. on each time update this runs and checks if the active text cues array
                     * was changed.
                     * @param {TextTrack} track - the text track that that is currently displayed (active)
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleCaptionOnTimeUpdate',
                    value: function _handleCaptionOnTimeUpdate(track) {
                        var currentTime = this._player.currentTime;
                        if (currentTime) {
                            var cueIndexUpdated = false;
                            if (this._hadSeeked()) {
                                this._activeTextCues = [];
                                cueIndexUpdated = this._maybeSetExternalCueIndex();
                            }
                            var activeCuesRemoved = this._maybeRemoveActiveCues();
                            var activeCuesAdded = this._maybeAddToActiveCues(track);

                            if (cueIndexUpdated || activeCuesAdded || activeCuesRemoved) {
                                this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_CUE_CHANGED, {
                                    cues: this._activeTextCues
                                }));
                            }
                            // sometimes the timeupdate event is fired before the seeked event - so we need to know the user seeked.
                            this._lastTimeUpdate = currentTime;
                        }
                    }

                    /**
                     * check if there was a seek. we do that because 'timeupdate' is fired before 'seeked' event.
                     * @returns {boolean} if there was a seek before
                     * @private
                     */

                }, {
                    key: '_hadSeeked',
                    value: function _hadSeeked() {
                        return !!this._player.currentTime && Math.abs(this._player.currentTime - this._lastTimeUpdate) > 1;
                    }

                    /**
                     * @returns {boolean} if a cue/cues were removed from the active text cues array
                     * @private
                     */

                }, {
                    key: '_maybeRemoveActiveCues',
                    value: function _maybeRemoveActiveCues() {
                        var currentTime = this._player.currentTime;
                        if (!currentTime) {
                            return false;
                        }
                        var hadRemoved = false;
                        for (var activeTextCuesIndex = 0; activeTextCuesIndex < this._activeTextCues.length; activeTextCuesIndex++) {
                            var cue = this._activeTextCues[activeTextCuesIndex];
                            if (currentTime < cue.startTime || cue.endTime < currentTime) {
                                this._activeTextCues.splice(activeTextCuesIndex, 1);
                                hadRemoved = true;
                            }
                        }
                        return hadRemoved;
                    }

                    /**
                     * @param {TextTrack} track - the selected text track
                     * @returns {boolean} - if cues were added to the active text track
                     * @private
                     */

                }, {
                    key: '_maybeAddToActiveCues',
                    value: function _maybeAddToActiveCues(track) {
                        var currentTime = this._player.currentTime;
                        if (!currentTime) {
                            return false;
                        }
                        var hadAdded = false;
                        var cues = this._textTrackModel[track.language].cues;
                        while (this._externalCueIndex < cues.length && currentTime > cues[this._externalCueIndex].startTime) {
                            this._activeTextCues.push(cues[this._externalCueIndex]);
                            this._externalCueIndex++;
                            hadAdded = true;
                        }
                        return hadAdded;
                    }

                    /**
                     * updating the index of the text cues to the right location after a user seeked.
                     * @returns {boolean} if the index was changed
                     * @private
                     */

                }, {
                    key: '_maybeSetExternalCueIndex',
                    value: function _maybeSetExternalCueIndex() {
                        var textTrack = this._player.getTracks(_trackType.TrackType.TEXT).find(function(track) {
                            return track instanceof _textTrack2.default && track.active && track.external;
                        });
                        if (textTrack && textTrack.external) {
                            var cues = this._textTrackModel[textTrack.language] ? this._textTrackModel[textTrack.language].cues : [];
                            var i = 0;
                            for (; i < cues.length; i++) {
                                // if there is a cue that should be displayed right now, cue start time < current time < cue end time
                                if (cues[i].startTime < this._player.currentTime && this._player.currentTime < cues[i].endTime) {
                                    break;
                                    // this is for the first cue that is after the current time
                                } else if (cues[i].endTime > this._player.currentTime && cues[i].startTime > this._player.currentTime) {
                                    break;
                                }
                            }
                            this._externalCueIndex = i;
                            return true;
                        }
                        return false;
                    }

                    /**
                     * adding cues to an existing text element in a video tag
                     * @param {TextTrack} textTrack - adding cues to an exiting text track element
                     * @param {Array<Cue>} cues - the cues to be added
                     * @return {void}
                     */

                }, {
                    key: '_addCuesToNativeTextTrack',
                    value: function _addCuesToNativeTextTrack(textTrack, cues) {
                        var videoElement = this._player.getVideoElement();
                        if (videoElement) {
                            var track = Array.from(videoElement.textTracks).find(function(track) {
                                return track ? track.language === textTrack.language : false;
                            });
                            if (track) {
                                cues.forEach(function(cue) {
                                    return track.addCue(cue);
                                });
                            }
                        }
                    }

                    /**
                     * adds a new text track element to the video element or set an existing one
                     * (when adding a text track with existing language to the video element it will remove all its cues)
                     * @param {TextTrack} textTrack - the playkit text track object to be added
                     * @returns {void}
                     */

                }, {
                    key: '_addNativeTextTrack',
                    value: function _addNativeTextTrack(textTrack) {
                        var videoElement = this._player.getVideoElement();
                        if (videoElement) {
                            var sameLanguageTrackIndex = Array.from(videoElement.textTracks).findIndex(function(track) {
                                return track ? track.language === textTrack.language : false;
                            });
                            if (sameLanguageTrackIndex > -1) {
                                var domTrack = videoElement.textTracks[sameLanguageTrackIndex];
                                if (domTrack.cues) {
                                    Object.values(domTrack.cues).forEach(function(cue) {
                                        return domTrack.removeCue(cue);
                                    });
                                }
                            } else {
                                videoElement.addTextTrack('subtitles', textTrack.label || textTrack.language, textTrack.language);
                            }
                        }
                    }

                    /**
                     * triggering the text track changed event and start listening to the time update on the player (for the the external text track).
                     * @param {TextTrack} textTrack - text track to be set
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_setTextTrack',
                    value: function _setTextTrack(textTrack) {
                        var _this6 = this;

                        if (!this._player.config.playback.useNativeTextTrack) {
                            this._isTextTrackActive = true;
                            ExternalCaptionsHandler._logger.debug('External text track changed', textTrack);
                            this._activeTextCues = [];
                            this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.TEXT_CUE_CHANGED, {
                                cues: this._activeTextCues
                            }));
                            this._eventManager.listen(this._player, _eventType.Html5EventType.TIME_UPDATE, function() {
                                return _this6._handleCaptionOnTimeUpdate(textTrack);
                            });
                        }
                    }
                }]);

                return ExternalCaptionsHandler;
            }(_fakeEventTarget2.default);

            ExternalCaptionsHandler._logger = (0, _logger2.default)('ExternalCaptionsHandler');
            exports.ExternalCaptionsHandler = ExternalCaptionsHandler;

            /***/
        }),
        /* 73 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ControllerProvider = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _pluginManager = __webpack_require__(17);

            var _pluginManager2 = _interopRequireDefault(_pluginManager);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Controller provider
             * @classdesc
             */
            var ControllerProvider = function() {

                /**
                 * @constructor
                 * @param {PluginManager} pluginManager - the plugin manager
                 */
                function ControllerProvider(pluginManager) {
                    _classCallCheck(this, ControllerProvider);

                    this._pluginManager = pluginManager;
                }

                /**
                 * Get the ads controller of the current ads plugin.
                 * @returns {?IAdsController} - the ads controller.
                 */


                _createClass(ControllerProvider, [{
                    key: 'getAdsController',
                    value: function getAdsController() {
                        //$FlowFixMe
                        var adPlugin = Object.values(this._pluginManager.getAll()).find(
                            //$FlowFixMe
                            function(plugin) {
                                return typeof plugin.getAdsController === 'function';
                            });
                        return adPlugin && adPlugin.getAdsController();
                    }
                }]);

                return ControllerProvider;
            }();

            exports.ControllerProvider = ControllerProvider;

            /***/
        }),
        /* 74 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ResizeWatcher = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _fakeEventTarget = __webpack_require__(6);

            var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

            var _eventType = __webpack_require__(3);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            /**
             * A Factory class to create a resize observer for the player.
             */
            var ResizeWatcher = function(_FakeEventTarget) {
                _inherits(ResizeWatcher, _FakeEventTarget);

                function ResizeWatcher() {
                    _classCallCheck(this, ResizeWatcher);

                    return _possibleConstructorReturn(this, (ResizeWatcher.__proto__ || Object.getPrototypeOf(ResizeWatcher)).call(this));
                }

                /**
                 * Removes resize listeners.
                 * @returns {void}
                 */


                _createClass(ResizeWatcher, [{
                    key: 'destroy',
                    value: function destroy() {
                        if (this._observer) {
                            this._observer.disconnect();
                        }
                        this._observer = null;
                        this._el = null;
                    }

                    /**
                     * Start listening to a resize of the element.
                     * @param {HTMLElement} el - the element to listen to.
                     * @returns {void}
                     */

                }, {
                    key: 'init',
                    value: function init(el) {
                        if (this._observer) {
                            return;
                        }
                        this._el = el;
                        window.ResizeObserver ? this._createNativeObserver() : this._createIframeObserver();
                        if (this._el instanceof HTMLElement && this._observer) {
                            this._observer.observe(this._el);
                        }
                    }
                }, {
                    key: '_createNativeObserver',
                    value: function _createNativeObserver() {
                        var _this2 = this;

                        this._observer = new window.ResizeObserver(function(entries) {
                            entries.forEach(function() {
                                _this2._triggerResize();
                            });
                        });
                    }
                }, {
                    key: '_createIframeObserver',
                    value: function _createIframeObserver() {
                        this._observer = new IFrameObserver(this._triggerResize.bind(this));
                    }
                }, {
                    key: '_triggerResize',
                    value: function _triggerResize() {
                        this.dispatchEvent(new _fakeEvent2.default(_eventType.CustomEventType.RESIZE));
                    }
                }]);

                return ResizeWatcher;
            }(_fakeEventTarget2.default);

            var IFRAME_CLASS_NAME = 'playkit-size-iframe';

            /**
             * This class mimics the API of the ResizeObserver API (currently available only in Chrome).
             * Creates an empty iFrame next to the player container, which gets the dimensions of it's parent and listens to
             * the iframes resize event.
             * @param {Function} callback - the function to be called when a resize event is detected.
             */

            var IFrameObserver = function() {
                function IFrameObserver(callback) {
                    _classCallCheck(this, IFrameObserver);

                    this._observersStore = {};

                    this._onChangeCallback = callback;
                }

                /**
                 * start detecting resize event
                 * @param {HTMLElement} el - The element that is going to be resized.
                 * @returns {void}
                 */


                _createClass(IFrameObserver, [{
                    key: 'observe',
                    value: function observe(el) {
                        var _this3 = this;

                        var iframe = this._createIframe();
                        var playerId = el.getAttribute('id');
                        this._observersStore[playerId] = iframe;
                        el.appendChild(iframe);
                        iframe.contentWindow.onresize = function() {
                            return _this3._onChangeCallback();
                        };
                    }

                    /**
                     * remove all resize listeners
                     * @returns {void}
                     */

                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        for (var target in this._observersStore) {
                            var el = document.getElementById(target);
                            var iframe = this._observersStore[target];
                            iframe.onresize = null;
                            if (el) {
                                el.removeChild(iframe);
                                delete this._observersStore[el.getAttribute('id')];
                            }
                        }
                    }
                }, {
                    key: '_createIframe',
                    value: function _createIframe() {
                        var iframe = document.createElement('iframe');
                        iframe.className = IFRAME_CLASS_NAME;
                        return iframe;
                    }
                }]);

                return IFrameObserver;
            }();

            exports.ResizeWatcher = ResizeWatcher;

            /***/
        }),
        /* 75 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.FullscreenController = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _eventManager = __webpack_require__(4);

            var _eventManager2 = _interopRequireDefault(_eventManager);

            var _player = __webpack_require__(8);

            var _player2 = _interopRequireDefault(_player);

            var _fakeEvent = __webpack_require__(1);

            var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

            var _util = __webpack_require__(5);

            var Utils = _interopRequireWildcard(_util);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * The IOS fullscreen class name.
             * @type {string}
             * @const
             */
            var IN_BROWSER_FULLSCREEN_FOR_IOS = 'playkit-in-browser-fullscreen-mode';

            /**
             * @class FullscreenController
             * @param {Player} player - The player.
             */

            var FullscreenController = function() {

                /**
                 * after component mounted, set up event listeners to window fullscreen state change
                 * @param {Player} player - element to enter fullscreen
                 * @memberof FullScreenController
                 * @returns {void}
                 */
                function FullscreenController(player) {
                    _classCallCheck(this, FullscreenController);

                    this._player = player;
                    this._inBrowserFullscreenConfig = this._player.config.playback.inBrowserFullscreen;
                    this._playsinlineConfig = this._player.config.playback.playsinline;
                    //flag to cover the option that inBrowserFullscreen selected and we should know if it's full screen
                    this._isInBrowserFullscreen = false;
                    //added to avoid duplicate dispatch event
                    this._isEnterFullscreenEventFired = false;
                    this.registerFullScreenEvents();
                }

                /**
                 * if native fullscreen mode
                 * @memberof FullScreenController
                 * @returns {boolean} - the current fullscreen state of the document
                 */


                _createClass(FullscreenController, [{
                    key: '_isNativeFullscreen',
                    value: function _isNativeFullscreen() {
                        //for ios mobile checking video element
                        var videoElement = typeof this._player.getVideoElement === 'function' ? this._player.getVideoElement() : null;
                        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ||
                            // $FlowFixMe for ios mobile
                            !!videoElement && !!videoElement.webkitDisplayingFullscreen);
                    }

                    /**
                     * if fullscreen mode
                     * @memberof FullScreenController
                     * @returns {boolean} - the current fullscreen state of the document
                     */

                }, {
                    key: 'isFullscreen',
                    value: function isFullscreen() {
                        return this._isNativeFullscreen() ||
                            //indicator for manually full screen in ios - with css flag
                            this._isInBrowserFullscreen;
                    }

                    /**
                     * if mobile detected, get the video element and request fullscreen.
                     * otherwise, request fullscreen to the parent player view than includes the GUI as well
                     * @param {?string} elementId - element to enter fullscreen
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: 'enterFullscreen',
                    value: function enterFullscreen(elementId) {
                        if (!this.isFullscreen()) {
                            var fullScreenElement = elementId && Utils.Dom.getElementById(elementId);
                            if (!fullScreenElement) {
                                fullScreenElement = this._player.getView();
                            }
                            if (this._player.env.os.name === 'iOS') {
                                if (this._inBrowserFullscreenConfig && this._playsinlineConfig) {
                                    this._enterInBrowserFullscreen(fullScreenElement);
                                } else {
                                    var videoElement = this._player.getVideoElement();
                                    if (videoElement && typeof videoElement.webkitEnterFullScreen === 'function') {
                                        videoElement.webkitEnterFullScreen();
                                    }
                                }
                            } else {
                                this._requestFullscreen(fullScreenElement);
                            }
                        }
                    }

                    /**
                     * exit fullscreen cross platform function
                     *
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: 'exitFullscreen',
                    value: function exitFullscreen() {
                        if (this.isFullscreen()) {
                            if (this._player.env.os.name === 'iOS') {
                                // player will be in full screen with this flag or otherwise will be natively full screen
                                if (this._inBrowserFullscreenConfig && this._playsinlineConfig) {
                                    this._exitInBrowserFullscreen();
                                } else {
                                    var videoElement = this._player.getVideoElement();
                                    if (videoElement && typeof videoElement.webkitExitFullscreen === 'function') {
                                        videoElement.webkitExitFullscreen();
                                    }
                                }
                            } else {
                                this._requestExitFullscreen();
                            }
                        }
                    }

                    /**
                     * request fullscreen function to all browsers
                     *
                     * @param {HTMLElement} fullScreenElement - element to enter fullscreen
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_requestFullscreen',
                    value: function _requestFullscreen(fullScreenElement) {
                        if (this._player.isInPictureInPicture()) {
                            this._player.exitPictureInPicture();
                        }
                        if (typeof fullScreenElement.requestFullscreen === 'function') {
                            fullScreenElement.requestFullscreen();
                        } else if (typeof fullScreenElement.mozRequestFullScreen === 'function') {
                            fullScreenElement.mozRequestFullScreen();
                        } else if (typeof fullScreenElement.webkitRequestFullScreen === 'function') {
                            fullScreenElement.webkitRequestFullScreen();
                        } else if (typeof fullScreenElement.msRequestFullscreen === 'function') {
                            fullScreenElement.msRequestFullscreen();
                        }
                    }

                    /**
                     * request exit from fullscreen function for all browsers
                     *
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_requestExitFullscreen',
                    value: function _requestExitFullscreen() {
                        if (typeof document.exitFullscreen === 'function') {
                            document.exitFullscreen();
                        } else if (typeof document.webkitExitFullscreen === 'function') {
                            document.webkitExitFullscreen();
                        } else if (typeof document.mozCancelFullScreen === 'function') {
                            document.mozCancelFullScreen();
                        } else if (typeof document.msExitFullscreen === 'function') {
                            document.msExitFullscreen();
                        }
                    }
                    /**
                     * enter from ios manually method enter to fullscreen with css
                     * @memberof FullScreenController
                     * @param {HTMLElement} fullScreenElement - element to enter fullscreen
                     * @returns {void}
                     */

                }, {
                    key: '_enterInBrowserFullscreen',
                    value: function _enterInBrowserFullscreen(fullScreenElement) {
                        // add class for fullscreen
                        Utils.Dom.addClassName(fullScreenElement, IN_BROWSER_FULLSCREEN_FOR_IOS);
                        this._isInBrowserFullscreen = true;
                        this._fullscreenEnterHandler();
                        this._player.dispatchEvent(new _fakeEvent2.default(this._player.Event.RESIZE));
                    }

                    /**
                     * exit from ios manually method enter to fullscreen with css
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_exitInBrowserFullscreen',
                    value: function _exitInBrowserFullscreen() {
                        //get the element with relevant css, otherwise keep the flow of exit manually
                        var fullScreenElement = Utils.Dom.getElementBySelector('.' + IN_BROWSER_FULLSCREEN_FOR_IOS);
                        if (fullScreenElement) {
                            Utils.Dom.removeClassName(fullScreenElement, IN_BROWSER_FULLSCREEN_FOR_IOS);
                        }
                        this._isInBrowserFullscreen = false;
                        this._fullscreenExitHandler();
                        this._player.dispatchEvent(new _fakeEvent2.default(this._player.Event.RESIZE));
                    }

                    /**
                     * set up event listeners to window fullscreen state change
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: 'registerFullScreenEvents',
                    value: function registerFullScreenEvents() {
                        var _this = this;

                        var eventManager = new _eventManager2.default();
                        eventManager.listen(document, 'webkitfullscreenchange', function() {
                            return _this._fullscreenChangeHandler();
                        });
                        eventManager.listen(document, 'mozfullscreenchange', function() {
                            return _this._fullscreenChangeHandler();
                        });
                        eventManager.listen(document, 'fullscreenchange', function() {
                            return _this._fullscreenChangeHandler();
                        });
                        eventManager.listen(document, 'MSFullscreenChange', function() {
                            return _this._fullscreenChangeHandler();
                        });
                        this._handleIosFullscreen(eventManager);
                    }

                    /**
                     * Handle iOS full screen changes
                     * @param {EventManager} eventManager - event manager
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_handleIosFullscreen',
                    value: function _handleIosFullscreen(eventManager) {
                        var _this2 = this;

                        if (this._player.env.os.name === 'iOS') {
                            /**
                             * Attach listeners to ios full screen change.
                             * @returns {void}
                             */
                            var attachIosFullscreenListeners = function attachIosFullscreenListeners() {
                                eventManager.listen(_this2._player.getVideoElement(), 'webkitbeginfullscreen', function() {
                                    return _this2._fullscreenEnterHandler();
                                });
                                eventManager.listen(_this2._player.getVideoElement(), 'webkitendfullscreen', function() {
                                    return _this2._fullscreenExitHandler();
                                });
                            };
                            if (this._player.getVideoElement()) {
                                attachIosFullscreenListeners();
                            } else {
                                eventManager.listenOnce(this._player, this._player.Event.SOURCE_SELECTED, function() {
                                    return attachIosFullscreenListeners();
                                });
                            }
                        }
                    }

                    /**
                     * fullscreen change handler function.
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_fullscreenChangeHandler',
                    value: function _fullscreenChangeHandler() {
                        //fire player event for current state, if player is in fullscreen fire player fullscreen event otherwise exit
                        this.isFullscreen() ? this._fullscreenEnterHandler() : this._fullscreenExitHandler();
                    }

                    /**
                     * fullscreen enter handler function.
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_fullscreenEnterHandler',
                    value: function _fullscreenEnterHandler() {
                        if (this.isFullscreen() && !this._isEnterFullscreenEventFired) {
                            this._player.dispatchEvent(new _fakeEvent2.default(this._player.Event.ENTER_FULLSCREEN));
                            this._isEnterFullscreenEventFired = true;
                        }
                    }

                    /**
                     * fullscreen exit handler function.
                     * @memberof FullScreenController
                     * @returns {void}
                     */

                }, {
                    key: '_fullscreenExitHandler',
                    value: function _fullscreenExitHandler() {
                        if (!this.isFullscreen() && this._isEnterFullscreenEventFired) {
                            this._player.dispatchEvent(new _fakeEvent2.default(this._player.Event.EXIT_FULLSCREEN));
                            this._isEnterFullscreenEventFired = false;
                        }
                    }
                }]);

                return FullscreenController;
            }();

            exports.FullscreenController = FullscreenController;

            /***/
        }),
        /* 76 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var MimeType = {
                HLS: ['application/x-mpegurl', 'application/vnd.apple.mpegurl'],
                DASH: ['application/dash+xml'],
                PROGRESSIVE: ['video/mp4'],
                SMOOTH_STREAMING: ['application/vnd.ms-sstr+xml']
            };

            exports.MimeType = MimeType;

            /***/
        })
        /******/
    ]);
});


// WEBPACK FOOTER //
// playkit.js


// WEBPACK FOOTER //
// core/playkit.js