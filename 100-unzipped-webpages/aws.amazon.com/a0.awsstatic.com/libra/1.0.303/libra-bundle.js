(function() {
    define("libra/core/libra-namespace", [], function() {
        if (typeof Libra !== "object") {
            Libra = {}
        }
        return Libra
    });
    define("librastandardlib/test-helpers/browser-globals/window", [], function() {
        return window
    });
    define("librastandardlib/obj-utils/assign", [], function() {
        return function assign(target, args) {
            "use strict";
            if (target === null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                if (source !== null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            to[key] = source[key]
                        }
                    }
                }
            }
            return to
        }
    });
    define("librastandardlib/id-utils/generateUUID", [], function() {
        "use strict";
        return function generateUUID() {
            var d = (new Date).getTime();
            var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === "x" ? r : r & 3 | 8).toString(16)
            });
            return id
        }
    });
    define("librastandardlib/url-utils/buildQueryString", [], function() {
        "use strict";
        return function buildQueryString(params) {
            var parts = [];
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    parts[parts.length] = encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
                }
            }
            return parts.join("&")
        }
    });
    define("librastandardlib/url-utils/getQueryStringParam", [], function() {
        "use strict";
        return function getQueryStringParam(name, querySrting) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var re = new RegExp("[\\?&]" + name + "=([^&#]*)");
            var res = re.exec(querySrting);
            if (res === null) {
                return ""
            }
            return decodeURIComponent(res[1].replace(/\+/g, " "))
        }
    });
    define("librastandardlib/aws/page-settings", ["librastandardlib/obj-utils/assign"], function(_assign) {
        "use strict";
        var defaults = {
            staticAssetPath: "https://a0.awsstatic.com",
            jsAssetPath: "https://a0.awsstatic.com/libra/1",
            isLoggingEnabled: true
        };
        var PageSettings = {};
        if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
            _assign(PageSettings, AWS.PageSettings)
        }
        var tagSettings = document.getElementsByTagName("html").dataset;
        if (tagSettings) {
            PageSettings.staticAssetPath = tagSettings.staticAssets;
            PageSettings.jsAssetPath = PageSettings.staticAssetPath + "/libra/" + tagSettings.jsVersion
        }
        PageSettings = _assign({}, defaults, PageSettings);
        if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
            AWS.PageSettings = PageSettings
        }
        return PageSettings
    });
    define("librastandardlib/logger/logger", ["librastandardlib/test-helpers/browser-globals/window", "librastandardlib/obj-utils/assign", "librastandardlib/id-utils/generateUUID", "librastandardlib/url-utils/buildQueryString", "librastandardlib/url-utils/getQueryStringParam", "librastandardlib/aws/page-settings"], function(window, _assign, generateUUID, buildQueryString, getQueryStringParam, PageSettings) {
        "use strict";
        var Logger = function() {
            var LOG_LEVELS = {
                info: {
                    warn: true,
                    error: true
                },
                warn: {
                    error: true
                },
                error: {},
                debug: {
                    info: true,
                    warn: true,
                    error: true
                }
            };
            var RAW_ENDPOINT = "https://fls-na.amazon.com/1/aws-mktg/1/OE/";
            var AI_ENDPOINT = "https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/";
            var COMMON_AI_PARAMS = {
                marketplaceId: "A12QK8IU0H0XW5",
                requestId: "ABCDEFGHIJKLMNOPQRST",
                session: "123-1234567-1234567"
            };
            var DEFAULT_AI_UNITS = "ms";
            var DEFAULT_AI_VALUE_SET = "count";
            var AI_VALUE_SETS = {
                count: {
                    value: "1",
                    units: "c"
                },
                timeSinceResponseEnd: {
                    valueFunction: "getElapsedTimeSincePageLoad",
                    units: "ms"
                }
            };
            var HOSTNAMES_TO_SERVICES = [{
                hostname: "console.aws.amazon.com",
                service: "console"
            }, {
                hostname: "aws.amazon.com",
                service: "awsm"
            }, {
                hostname: "amazonaws-china.com",
                service: "awsm"
            }, {
                hostname: "www.amazonaws.cn",
                service: "cn"
            }];
            var LogType = {
                RAW: "RAW",
                AI: "AI",
                LOCAL: "LOCAL"
            };
            var PlatformType = {
                CMS: "CMS",
                DEFAULT: "DEFAULT"
            };
            var SERVICES_TO_PLATFORM_TYPES = {
                awsm: PlatformType.CMS,
                cn: PlatformType.CMS,
                console: PlatformType.DEFAULT,
                marketplace: PlatformType.CMS
            };
            var MARKETPLACE_SERVICE = "marketplace";
            var CONSOLE_SERVICE_NAME_PREFIX = "console-";
            var SERVICE_NAME_REGEX = /console\.(aws\.amazon\.com|amazonaws\.cn)\/([a-z0-9]+)\//;
            var ALLOWED_HOSTNAME_SUFFIXES = ["console.aws.amazon.com", "console.amazonaws.cn"];
            var ALLOWED_EXACT_MATCH_HOSTNAMES = {
                "aws.amazon.com": 1,
                "amazonaws-china.com": 1,
                "www.amazonaws.cn": 1
            };
            var pageRequestId = null;
            var instances = {};

            function Logger(namespace, logLevel) {
                if (instances.hasOwnProperty(namespace)) {
                    instances[namespace].logLevel = logLevel || instances[namespace].logLevel;
                    return instances[namespace]
                }
                this.namespace = namespace;
                this.logLevel = logLevel || this.getLogLevelByQueryString();
                this.pageRequestId = this.getPageRequestId();
                this.dataSet = this.getDataSet();
                this.service = this.getService();
                this.instance = this.getInstance(this.service);
                this.longLanguage = this.getLongLanguage();
                this.client = this.getClient();
                this.host = this.getHost();
                instances[namespace] = this
            }
            Logger.prototype = {
                getService: function() {
                    if (typeof window.location.hostname !== "undefined" && typeof window.location.pathname !== "undefined") {
                        if (PageSettings.isMarketplace) {
                            return MARKETPLACE_SERVICE
                        }
                        var consoleServiceNameMatch = (window.location.hostname + window.location.pathname).match(SERVICE_NAME_REGEX);
                        if (consoleServiceNameMatch && consoleServiceNameMatch.length === 3) {
                            return CONSOLE_SERVICE_NAME_PREFIX + consoleServiceNameMatch[2]
                        }
                    }
                    for (var i = 0, len = HOSTNAMES_TO_SERVICES.length; i < len; i++) {
                        var hostname = HOSTNAMES_TO_SERVICES[i].hostname;
                        var re = new RegExp(hostname + "\\/");
                        if (re.test(window.location.hostname + "/") || re.test(window.location.pathname) || re.test(window.location.hash)) {
                            return HOSTNAMES_TO_SERVICES[i].service
                        }
                    }
                    return "NA"
                },
                getHost: function() {
                    if (typeof window.location.hostname !== "undefined") {
                        var hostname = window.location.hostname;
                        if (ALLOWED_EXACT_MATCH_HOSTNAMES.hasOwnProperty(hostname)) {
                            return hostname
                        }
                        for (var i = 0; i < ALLOWED_HOSTNAME_SUFFIXES.length; i++) {
                            var currentHost = ALLOWED_HOSTNAME_SUFFIXES[i];
                            var indexOf = hostname.indexOf(currentHost);
                            var endsWithCurrentHost = indexOf >= 0 && indexOf === hostname.length - currentHost.length;
                            if (endsWithCurrentHost) {
                                return currentHost
                            }
                        }
                    }
                    return "NA"
                },
                getLongLanguage: function() {
                    var langAttr = $("html").attr("lang");
                    if (typeof langAttr !== "undefined") {
                        return langAttr.replace("-", "_")
                    }
                    return "NA"
                },
                getInstance: function(service) {
                    var platformType = PlatformType.DEFAULT;
                    if (SERVICES_TO_PLATFORM_TYPES.hasOwnProperty(service)) {
                        platformType = SERVICES_TO_PLATFORM_TYPES[service]
                    }
                    if (platformType === PlatformType.CMS) {
                        if (window.location.pathname.indexOf(".html") === window.location.pathname.length - 5) {
                            if ("logInstance" in PageSettings) {
                                return PageSettings.logInstance
                            }
                            return "NA"
                        }
                        return "LIVE"
                    }
                    return "LIVE"
                },
                getDataSet: function() {
                    if ("logDataSet" in PageSettings) {
                        return PageSettings.logDataSet
                    }
                    return "NA"
                },
                getClient: function() {
                    var re = new RegExp(/iPhone|iPod|iPad|Android|(?=.*\bAndroid\b)(?=.*\bMobile\b)|IEMobile|(?=.*\bWindows\b)(?=.*\bTouch\b)|Windows Phone|Opera Mini|(?=.*\bFirefox\b)(?=.*\bMobile\b)|BlackBerry|Nexus 7|BNTV250|Kindle Fire|Silk|webOS|GT-P1000/i);
                    if (re.test(window.navigator.userAgent)) {
                        return "mobile"
                    }
                    return "dsk"
                },
                logAI: function(metric, params) {
                    params = params || {};
                    var valueSet;
                    if (params.hasOwnProperty("valueSet")) {
                        if (AI_VALUE_SETS.hasOwnProperty(params.valueSet)) {
                            valueSet = AI_VALUE_SETS[params.valueSet];
                            params.units = valueSet.units;
                            if (valueSet.hasOwnProperty("valueFunction")) {
                                params.value = this[valueSet.valueFunction]()
                            } else {
                                params.value = valueSet.value
                            }
                        } else {
                            valueSet = AI_VALUE_SETS[DEFAULT_AI_VALUE_SET];
                            params.value = valueSet.value;
                            params.units = valueSet.units
                        }
                    } else if (!params.hasOwnProperty("value")) {
                        valueSet = AI_VALUE_SETS[DEFAULT_AI_VALUE_SET];
                        params.value = valueSet.value;
                        params.units = valueSet.units
                    }
                    if (!params.hasOwnProperty("units")) {
                        params.units = DEFAULT_AI_UNITS
                    }
                    var url = AI_ENDPOINT + metric + "@v=" + encodeURIComponent(params.value) + ":u=" + encodeURIComponent(params.units);
                    var standardParams = {
                        dataset: this.dataSet,
                        instance: this.instance,
                        service: this.service,
                        marketplace: this.longLanguage,
                        client: this.client,
                        host: this.host
                    };
                    var queryStringParams = _assign(standardParams, COMMON_AI_PARAMS);
                    url += "?" + buildQueryString(queryStringParams);
                    this.logUrl(url)
                },
                logRaw: function(logLevel, msg, currentTime, pageTime, customParams) {
                    var standardParams = {
                        cat: this.namespace,
                        level: logLevel,
                        msg: msg,
                        currentTime: currentTime,
                        pageTime: pageTime,
                        pageRequestId: pageRequestId,
                        page: window.location.toString()
                    };
                    var params = _assign({}, customParams, standardParams);
                    var url = RAW_ENDPOINT + "?" + buildQueryString(params);
                    this.logUrl(url)
                },
                logUrl: function(url) {
                    if (PageSettings.isLoggingEnabled) {
                        setTimeout(function() {
                            (new Image).src = url
                        }, 0);
                        this._lastImageUrl = url
                    }
                },
                getLogLevelByQueryString: function() {
                    var level = getQueryStringParam("debug" + this.namespace, window.location.search);
                    if (level === "") {
                        return null
                    }
                    return level
                },
                getElapsedTimeSincePageLoad: function() {
                    if ("performance" in window && "timing" in window.performance) {
                        return (new Date).getTime() - window.performance.timing.responseEnd
                    }
                    return -1
                },
                getPageRequestId: function() {
                    pageRequestId = pageRequestId || generateUUID();
                    return pageRequestId
                },
                _rawEndpoint: RAW_ENDPOINT,
                _aiEndpoint: AI_ENDPOINT
            };
            for (var level in LOG_LEVELS) {
                if (LOG_LEVELS.hasOwnProperty(level)) {
                    (function(level) {
                        Logger.prototype[level] = function(msg, logType, params) {
                            logType = logType || "LOCAL";
                            var currentTime = (new Date).getTime();
                            var pageTime = this.getElapsedTimeSincePageLoad();
                            var logLevelStr = level.toUpperCase();
                            if (logType === LogType.AI) {
                                this.logAI(msg, params)
                            } else if (logType === LogType.RAW) {
                                this.logRaw(logLevelStr, msg, currentTime, pageTime, params)
                            }
                            if (this.logLevel !== null) {
                                if (level === this.logLevel || LOG_LEVELS[this.logLevel].hasOwnProperty(level)) {
                                    if (LogType.hasOwnProperty(logType)) {
                                        var out = "[" + logLevelStr + "][" + LogType[logType] + "] " + this.namespace + ": " + msg + "; @" + pageTime + "ms";
                                        if (typeof params !== "undefined") {
                                            out += "; " + JSON.stringify(params)
                                        }
                                        console.log(out);
                                        this._lastConsoleLog = out
                                    } else {
                                        var args = Array.prototype.slice.call(arguments);
                                        var logObjPrefix = "[" + logLevelStr + "][" + LogType.LOCAL + "] " + this.namespace + ": " + args[0];
                                        console.log(logObjPrefix, [].concat(args.slice(1)))
                                    }
                                }
                            }
                        }
                    })(level)
                }
            }
            return Logger
        }();
        return Logger
    });
    define("librastandardlib/event-utils/polling-registrar", [], function() {
        "use strict";
        var pollGroups = {};
        var evtCount = 0;

        function loop(pollGroup) {
            var key;
            for (key in pollGroup.events) {
                if (pollGroup.events.hasOwnProperty(key)) {
                    pollGroup.events[key].isActive = true
                }
            }
            for (key in pollGroup.events) {
                if (pollGroup.events.hasOwnProperty(key)) {
                    var evt = pollGroup.events[key];
                    if (evt.isActive) {
                        if (evt.condition()) {
                            evt.resolve()
                        } else if ((new Date).getTime() - evt.startTime > evt.timeout) {
                            evt.reject()
                        }
                    }
                }
            }
            var hasEvents = false;
            for (key in pollGroup.events) {
                if (pollGroup.events.hasOwnProperty(key)) {
                    hasEvents = true;
                    break
                }
            }
            if (hasEvents) {
                setTimeout(function() {
                    loop(pollGroup)
                }, pollGroup.interval)
            } else {
                pollGroup.isPolling = false
            }
        }
        return {
            register: function(condition, done, fail, timeout, interval) {
                var evt = {
                    key: (++evtCount).toString(),
                    isActive: false,
                    startTime: (new Date).getTime(),
                    condition: condition,
                    done: done,
                    fail: fail,
                    timeout: timeout,
                    interval: interval,
                    resolve: function() {
                        var fct = this.done;
                        this.destroy();
                        fct()
                    },
                    reject: function() {
                        var fct = this.fail;
                        this.destroy();
                        fct()
                    },
                    destroy: function() {
                        delete pollGroups[this.interval].events[this.key]
                    }
                };
                var pollGroup;
                if (!pollGroups.hasOwnProperty(interval)) {
                    pollGroup = {};
                    pollGroup.events = {};
                    pollGroup.interval = interval;
                    pollGroup.isPolling = false;
                    pollGroups[interval] = pollGroup
                } else {
                    pollGroup = pollGroups[interval]
                }
                pollGroup.events[evt.key] = evt;
                if (!pollGroup.isPolling) {
                    pollGroup.isPolling = true;
                    loop(pollGroup)
                }
            },
            _pollGroups: pollGroups
        }
    });
    define("librastandardlib/event-utils/onWindowLoad", [], function() {
        "use strict";
        return function onWindowLoad(cb, context) {
            context = context || this;
            if (document.readyState === "complete") {
                cb.call(context)
            } else {
                document.addEventListener("readystatechange", function() {
                    if (document.readyState === "complete") {
                        cb.call(context)
                    }
                }, false)
            }
        }
    });
    define("librastandardlib/event-utils/onDOMContentLoaded", ["librastandardlib/event-utils/onWindowLoad"], function(onWindowLoad) {
        "use strict";
        return function onDOMContentLoaded(cb, context) {
            context = context || this;
            var resolved = false;
            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
                resolved = true;
                cb.call(context)
            } else {
                document.addEventListener("DOMContentLoaded", function() {
                    if (!resolved) {
                        resolved = true;
                        cb.call(context)
                    }
                }, false);
                onWindowLoad(function() {
                    if (!resolved) {
                        resolved = true;
                        cb.call(context)
                    }
                })
            }
        }
    });
    define("libra/core/libra-require", ["libra/core/libra-namespace", "librastandardlib/logger/logger", "librastandardlib/aws/page-settings", "librastandardlib/event-utils/polling-registrar", "librastandardlib/event-utils/onWindowLoad", "librastandardlib/event-utils/onDOMContentLoaded"], function(Libra, Logger, PageSettings, PollingRegistrar, onWindowLoad, onDOMContentLoaded) {
        "use strict";
        var InitTime = {
            immediate: "immediate",
            documentReady: "documentReady",
            windowLoad: "windowLoad"
        };
        var logger = new Logger("LibraRequire");
        var loadedComponentRegistry = {};
        var eventQueue = [];
        var hasDocumentReadyFired = false;
        var hasWindowLoadFired = false;
        var pollingInterval = 100;
        var pageLoadTimeout = 3e4;
        if ("pageLoadTimeout" in PageSettings) {
            pageLoadTimeout = PageSettings.pageLoadTimeout
        }
        var defaultComponentPath = "libra/components/";
        if (typeof Libra.Comp !== "object") {
            Libra.Comp = {}
        }
        Libra.Comp.registry = {};

        function initEvent(name, elem) {
            logger.info("Init event: '" + name + "'");
            loadedComponentRegistry[name].initFct(elem);
            Libra.Comp.registry[name].initCount++
        }

        function processEvent(name, elem) {
            var msg = "Process event: '" + name + "'; ";
            var initTime = loadedComponentRegistry[name].initTime;
            if (hasDocumentReadyFired && initTime === InitTime.documentReady) {
                logger.debug(msg + "document ready already fired");
                initEvent(name, elem)
            } else if (hasWindowLoadFired && initTime === InitTime.windowLoad) {
                logger.debug(msg + "window load already fired");
                initEvent(name, elem)
            } else if (initTime === InitTime.immediate) {
                logger.debug(msg + "immediate");
                initEvent(name, elem)
            } else {
                logger.debug(msg + "add to event queue '" + initTime + "'");
                eventQueue.push({
                    name: name,
                    elem: elem
                })
            }
        }

        function waitForEventAvailability(name, elem) {
            logger.debug("Wait for event registration: '" + name + "'");
            if (name in loadedComponentRegistry) {
                processEvent(name, elem);
                return
            }
            PollingRegistrar.register(function() {
                return name in loadedComponentRegistry
            }, function() {
                processEvent(name, elem)
            }, function() {
                logger.error("awsm_v2_:comp_ScriptTimeoutError", "AI", {
                    msg: "Failed to recognize component script within the timeout: '" + name + "'"
                })
            }, 15e3, pollingInterval)
        }

        function processEventQueue(initTime) {
            for (var i = 0, len = eventQueue.length; i < len; i++) {
                var event = eventQueue[i];
                if (event.name in loadedComponentRegistry) {
                    if (loadedComponentRegistry[event.name].initTime === initTime) {
                        initEvent(event.name, event.elem)
                    }
                }
            }
        }

        function findUnregisteredComponents() {
            var elems = $("[data-lb-comp]:not([data-lb-comp-registered])").filter(function() {
                return $(this).parents("[data-lb-comp-ignore]").length === 0
            });
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                var $elem = $(elem);
                $elem.attr("data-lb-comp-registered", "true");
                var name = $elem.attr("data-lb-comp");
                Libra.require(name, elem)
            }
        }

        function watchForNewComponents() {
            $(document).on("custom_libra_require_new-content", function() {
                findUnregisteredComponents()
            })
        }

        function pollToFindUnregisteredComponents() {
            PollingRegistrar.register(function() {
                findUnregisteredComponents();
                if (document.getElementById("lb-page-end")) {
                    logger.info("Saw Page end");
                    return true
                }
                return false
            }, function() {}, function() {
                logger.error("awsm_v2_:comp_PageEndTimeoutError", "AI", {
                    msg: "Failed to recognize page end within the timeout"
                });
                logger.error("PageEndTimeoutError", "RAW", {
                    msg: "Failed to recognize page end within the timeout"
                })
            }, pageLoadTimeout, pollingInterval)
        }

        function getScriptPath(str) {
            return str.indexOf(":") > -1 ? str.replace(":", "/") : defaultComponentPath + str
        }
        Libra.Comp.register = function(event) {
            logger.debug("Register '" + event.name + "'");
            loadedComponentRegistry[event.name] = {
                initFct: event.initFct,
                initTime: event.initTime
            };
            Libra.Comp.registry[event.name] = Libra.Comp.registry[event.name] || {
                requireCount: 0,
                initCount: 0,
                elem: []
            };
            Libra.Comp.registry[event.name].registered = true;
            if (event.selfRequire) {
                Libra.require(event.name)
            }
        };
        Libra.require = function(eventName, elem) {
            if (!Libra.Comp.registry.hasOwnProperty(eventName)) {
                Libra.Comp.registry[eventName] = {
                    requireCount: 1,
                    initCount: 0,
                    registered: false,
                    elem: []
                }
            }
            Libra.Comp.registry[eventName].elem.push(elem);
            if (eventName in loadedComponentRegistry) {
                processEvent(eventName, elem)
            } else {
                var scriptPath = getScriptPath(eventName);
                try {
                    logger.debug("Require '" + scriptPath + "'");
                    require([scriptPath])
                } catch (ex) {
                    logger.error(ex.message)
                } finally {
                    waitForEventAvailability(eventName, elem)
                }
            }
        };
        var LibraRequire = {
            init: function() {
                onDOMContentLoaded(function() {
                    logger.info("Saw document ready");
                    hasDocumentReadyFired = true;
                    processEventQueue(InitTime.documentReady)
                });
                onWindowLoad(function() {
                    logger.info("Saw window load");
                    hasWindowLoadFired = true;
                    processEventQueue(InitTime.windowLoad)
                });
                pollToFindUnregisteredComponents();
                watchForNewComponents()
            }
        };
        return LibraRequire
    });
    define("libra/event-utils/event-hub", ["libra/core/libra-namespace", "librastandardlib/logger/logger"], function(Libra, Logger) {
        "use strict";
        var logger = new Logger("EventHub");
        var customEventPrefix = "custom_lirbra_event-hub_";
        if (typeof Libra.EventHub !== "object") {
            Libra.EventHub = {}
        }
        Libra.EventHub.subscribers = {};
        Libra.EventHub.publishQueue = {};
        var EventHub = {
            subscribe: function(topic, options) {
                if (topic.length === 0 || options === undefined || !options.hasOwnProperty("cb")) {
                    return false
                }
                var cb = options.cb;
                var once = options.once === undefined ? true : options.once;
                if (Libra.EventHub.subscribers[topic] === undefined) {
                    Libra.EventHub.subscribers[topic] = [];
                    $(document).on(customEventPrefix + topic, function() {
                        processEvents(topic)
                    })
                }
                Libra.EventHub.subscribers[topic].push({
                    cb: cb,
                    once: once,
                    subscriberId: "sub" + Libra.EventHub.subscribers[topic].length
                });
                $(document).trigger(customEventPrefix + topic);
                logger.debug("Subscriber added to the topic:", topic)
            },
            publish: function(topic, data) {
                if (topic === undefined) {
                    return false
                }
                logger.debug("Published:", topic, data);
                if (Libra.EventHub.publishQueue[topic] === undefined) {
                    Libra.EventHub.publishQueue[topic] = []
                }
                var publishData = data || {};
                Libra.EventHub.publishQueue[topic].push({
                    data: publishData,
                    processed: {}
                });
                $(document).trigger(customEventPrefix + topic)
            },
            remove: function(topic) {
                if (!Libra.EventHub.subscribers.hasOwnProperty(topic)) {
                    return
                }
                delete Libra.EventHub.subscribers[topic]
            }
        };

        function processEvents(topic) {
            var subscribers = Libra.EventHub.subscribers[topic];
            if (!subscribers || subscribers.length === 0) {
                return false
            }
            var publishQueue = Libra.EventHub.publishQueue[topic];
            if (!publishQueue) {
                return false
            }
            subscribers.forEach(function(subscriber) {
                if (!subscriber.deleted) {
                    publishQueue.forEach(function(publishedItem) {
                        var subscriberId = subscriber.subscriberId;
                        if (!publishedItem.processed[subscriberId]) {
                            subscriber.cb(topic, publishedItem.data)
                        }
                        publishedItem.processed[subscriberId] = true
                    })
                }
                if (subscriber.once) {
                    subscriber.deleted = true
                }
            })
        }
        return EventHub
    });
    /*!

     handlebars v4.0.5

    Copyright (C) 2011-2015 by Yehuda Katz

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

    @license
    */
    (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object") module.exports = factory();
        else if (typeof define === "function" && define.amd) define("libra/vendor/handlebars", [], factory);
        else if (typeof exports === "object") exports["Handlebars"] = factory();
        else root["Handlebars"] = factory()
    })(this, function() {
        return function(modules) {
            var installedModules = {};

            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                var module = installedModules[moduleId] = {
                    exports: {},
                    id: moduleId,
                    loaded: false
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.loaded = true;
                return module.exports
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.p = "";
            return __webpack_require__(0)
        }([function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _handlebarsRuntime = __webpack_require__(2);
            var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
            var _handlebarsCompilerAst = __webpack_require__(21);
            var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
            var _handlebarsCompilerBase = __webpack_require__(22);
            var _handlebarsCompilerCompiler = __webpack_require__(27);
            var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);
            var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
            var _handlebarsCompilerVisitor = __webpack_require__(25);
            var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
            var _handlebarsNoConflict = __webpack_require__(20);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            var _create = _handlebarsRuntime2["default"].create;

            function create() {
                var hb = _create();
                hb.compile = function(input, options) {
                    return _handlebarsCompilerCompiler.compile(input, options, hb)
                };
                hb.precompile = function(input, options) {
                    return _handlebarsCompilerCompiler.precompile(input, options, hb)
                };
                hb.AST = _handlebarsCompilerAst2["default"];
                hb.Compiler = _handlebarsCompilerCompiler.Compiler;
                hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
                hb.Parser = _handlebarsCompilerBase.parser;
                hb.parse = _handlebarsCompilerBase.parse;
                return hb
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst.Visitor = _handlebarsCompilerVisitor2["default"];
            inst["default"] = inst;
            exports["default"] = inst;
            module.exports = exports["default"]
        }, function(module, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            };
            exports.__esModule = true
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(3)["default"];
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(4);
            var base = _interopRequireWildcard(_handlebarsBase);
            var _handlebarsSafeString = __webpack_require__(18);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(6);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(5);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(19);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(20);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

            function create() {
                var hb = new base.HandlebarsEnvironment;
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb)
                };
                return hb
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst["default"] = inst;
            exports["default"] = inst;
            module.exports = exports["default"]
        }, function(module, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) {
                    return obj
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]
                        }
                    }
                    newObj["default"] = obj;
                    return newObj
                }
            };
            exports.__esModule = true
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(5);
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(7);
            var _decorators = __webpack_require__(15);
            var _logger = __webpack_require__(17);
            var _logger2 = _interopRequireDefault(_logger);
            var VERSION = "4.0.5";
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 7;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0"
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = "[object Object]";

            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this)
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) {
                            throw new _exception2["default"]("Arg not supported with multiple helpers")
                        }
                        _utils.extend(this.helpers, name)
                    } else {
                        this.helpers[name] = fn
                    }
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name]
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) {
                        _utils.extend(this.partials, name)
                    } else {
                        if (typeof partial === "undefined") {
                            throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined')
                        }
                        this.partials[name] = partial
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name]
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) {
                            throw new _exception2["default"]("Arg not supported with multiple decorators")
                        }
                        _utils.extend(this.decorators, name)
                    } else {
                        this.decorators[name] = fn
                    }
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name]
                }
            };
            var log = _logger2["default"].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2["default"]
        }, function(module, exports) {
            "use strict";
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var badChars = /[&<>"'`=]/g,
                possible = /[&<>"'`=]/;

            function escapeChar(chr) {
                return escape[chr]
            }

            function extend(obj) {
                for (var i = 1; i < arguments.length; i++) {
                    for (var key in arguments[i]) {
                        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                            obj[key] = arguments[i][key]
                        }
                    }
                }
                return obj
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            var isFunction = function isFunction(value) {
                return typeof value === "function"
            };
            if (isFunction(/x/)) {
                exports.isFunction = isFunction = function(value) {
                    return typeof value === "function" && toString.call(value) === "[object Function]"
                }
            }
            exports.isFunction = isFunction;
            var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false
            };
            exports.isArray = isArray;

            function indexOf(array, value) {
                for (var i = 0, len = array.length; i < len; i++) {
                    if (array[i] === value) {
                        return i
                    }
                }
                return -1
            }

            function escapeExpression(string) {
                if (typeof string !== "string") {
                    if (string && string.toHTML) {
                        return string.toHTML()
                    } else if (string == null) {
                        return ""
                    } else if (!string) {
                        return string + ""
                    }
                    string = "" + string
                }
                if (!possible.test(string)) {
                    return string
                }
                return string.replace(badChars, escapeChar)
            }

            function isEmpty(value) {
                if (!value && value !== 0) {
                    return true
                } else if (isArray(value) && value.length === 0) {
                    return true
                } else {
                    return false
                }
            }

            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame
            }

            function blockParams(params, ids) {
                params.path = ids;
                return params
            }

            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id
            }
        }, function(module, exports) {
            "use strict";
            exports.__esModule = true;
            var errorProps = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

            function Exception(message, node) {
                var loc = node && node.loc,
                    line = undefined,
                    column = undefined;
                if (loc) {
                    line = loc.start.line;
                    column = loc.start.column;
                    message += " - " + line + ":" + column
                }
                var tmp = Error.prototype.constructor.call(this, message);
                for (var idx = 0; idx < errorProps.length; idx++) {
                    this[errorProps[idx]] = tmp[errorProps[idx]]
                }
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, Exception)
                }
                if (loc) {
                    this.lineNumber = line;
                    this.column = column
                }
            }
            Exception.prototype = new Error;
            exports["default"] = Exception;
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            var _helpersBlockHelperMissing = __webpack_require__(8);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(9);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(10);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(11);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(12);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(13);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(14);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);

            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance)
            }
        }, function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            exports["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse,
                        fn = options.fn;
                    if (context === true) {
                        return fn(this)
                    } else if (context === false || context == null) {
                        return inverse(this)
                    } else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) {
                                options.ids = [options.name]
                            }
                            return instance.helpers.each(context, options)
                        } else {
                            return inverse(this)
                        }
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            }
                        }
                        return fn(context, options)
                    }
                })
            };
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("each", function(context, options) {
                    if (!options) {
                        throw new _exception2["default"]("Must pass iterator to #each")
                    }
                    var fn = options.fn,
                        inverse = options.inverse,
                        i = 0,
                        ret = "",
                        data = undefined,
                        contextPath = undefined;
                    if (options.data && options.ids) {
                        contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + "."
                    }
                    if (_utils.isFunction(context)) {
                        context = context.call(this)
                    }
                    if (options.data) {
                        data = _utils.createFrame(options.data)
                    }

                    function execIteration(field, index, last) {
                        if (data) {
                            data.key = field;
                            data.index = index;
                            data.first = index === 0;
                            data.last = !!last;
                            if (contextPath) {
                                data.contextPath = contextPath + field
                            }
                        }
                        ret = ret + fn(context[field], {
                            data: data,
                            blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
                        })
                    }
                    if (context && typeof context === "object") {
                        if (_utils.isArray(context)) {
                            for (var j = context.length; i < j; i++) {
                                if (i in context) {
                                    execIteration(i, i, i === context.length - 1)
                                }
                            }
                        } else {
                            var priorKey = undefined;
                            for (var key in context) {
                                if (context.hasOwnProperty(key)) {
                                    if (priorKey !== undefined) {
                                        execIteration(priorKey, i - 1)
                                    }
                                    priorKey = key;
                                    i++
                                }
                            }
                            if (priorKey !== undefined) {
                                execIteration(priorKey, i - 1, true)
                            }
                        }
                    }
                    if (i === 0) {
                        ret = inverse(this)
                    }
                    return ret
                })
            };
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() {
                    if (arguments.length === 1) {
                        return undefined
                    } else {
                        throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                    }
                })
            };
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            exports["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (_utils.isFunction(conditional)) {
                        conditional = conditional.call(this)
                    }
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
                        return options.inverse(this)
                    } else {
                        return options.fn(this)
                    }
                });
                instance.registerHelper("unless", function(conditional, options) {
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    })
                })
            };
            module.exports = exports["default"]
        }, function(module, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("log", function() {
                    var args = [undefined],
                        options = arguments[arguments.length - 1];
                    for (var i = 0; i < arguments.length - 1; i++) {
                        args.push(arguments[i])
                    }
                    var level = 1;
                    if (options.hash.level != null) {
                        level = options.hash.level
                    } else if (options.data && options.data.level != null) {
                        level = options.data.level
                    }
                    args[0] = level;
                    instance.log.apply(instance, args)
                })
            };
            module.exports = exports["default"]
        }, function(module, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field) {
                    return obj && obj[field]
                })
            };
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            exports["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (_utils.isFunction(context)) {
                        context = context.call(this)
                    }
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0])
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([context], [data && data.contextPath])
                        })
                    } else {
                        return options.inverse(this)
                    }
                })
            };
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(16);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

            function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance)
            }
        }, function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            exports["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function(context, options) {
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret
                        }
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret
                })
            };
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            var logger = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === "string") {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) {
                            level = levelMap
                        } else {
                            level = parseInt(level, 10)
                        }
                    }
                    return level
                },
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        if (!console[method]) {
                            method = "log"
                        }
                        for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            message[_key - 1] = arguments[_key]
                        }
                        console[method].apply(console, message)
                    }
                }
            };
            exports["default"] = logger;
            module.exports = exports["default"]
        }, function(module, exports) {
            "use strict";
            exports.__esModule = true;

            function SafeString(string) {
                this.string = string
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string
            };
            exports["default"] = SafeString;
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(3)["default"];
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(5);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(4);

            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1,
                    currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision !== currentRevision) {
                    if (compilerRevision < currentRevision) {
                        var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
                            compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                        throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").")
                    } else {
                        throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + compilerInfo[1] + ").")
                    }
                }
            }

            function template(templateSpec, env) {
                if (!env) {
                    throw new _exception2["default"]("No environment passed to template")
                }
                if (!templateSpec || !templateSpec.main) {
                    throw new _exception2["default"]("Unknown template object: " + typeof templateSpec)
                }
                templateSpec.main.decorator = templateSpec.main_d;
                env.VM.checkRevision(templateSpec.compiler);

                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) {
                            options.ids[0] = true
                        }
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var result = env.VM.invokePartial.call(this, partial, context, options);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, options)
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split("\n");
                            for (var i = 0, l = lines.length; i < l; i++) {
                                if (!lines[i] && i + 1 === l) {
                                    break
                                }
                                lines[i] = options.indent + lines[i]
                            }
                            result = lines.join("\n")
                        }
                        return result
                    } else {
                        throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode")
                    }
                }
                var container = {
                    strict: function strict(obj, name) {
                        if (!(name in obj)) {
                            throw new _exception2["default"]('"' + name + '" not defined in ' + obj)
                        }
                        return obj[name]
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for (var i = 0; i < len; i++) {
                            if (depths[i] && depths[i][name] != null) {
                                return depths[i][name]
                            }
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === "function" ? current.call(context) : current
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + "_d"];
                        return ret
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i],
                            fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) {
                            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths)
                        } else if (!programWrapper) {
                            programWrapper = this.programs[i] = wrapProgram(this, i, fn)
                        }
                        return programWrapper
                    },
                    data: function data(value, depth) {
                        while (value && depth--) {
                            value = value._parent
                        }
                        return value
                    },
                    merge: function merge(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) {
                            obj = Utils.extend({}, common, param)
                        }
                        return obj
                    },
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };

                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) {
                        data = initData(context, data)
                    }
                    var depths = undefined,
                        blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) {
                            depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths
                        } else {
                            depths = [context]
                        }
                    }

                    function main(context) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths)
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options)
                }
                ret.isTop = true;
                ret._setup = function(options) {
                    if (!options.partial) {
                        container.helpers = container.merge(options.helpers, env.helpers);
                        if (templateSpec.usePartial) {
                            container.partials = container.merge(options.partials, env.partials)
                        }
                        if (templateSpec.usePartial || templateSpec.useDecorators) {
                            container.decorators = container.merge(options.decorators, env.decorators)
                        }
                    } else {
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators
                    }
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) {
                        throw new _exception2["default"]("must pass block params")
                    }
                    if (templateSpec.useDepths && !depths) {
                        throw new _exception2["default"]("must pass parent depths")
                    }
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths)
                };
                return ret
            }

            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context !== depths[0]) {
                        currentDepths = [context].concat(depths)
                    }
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths)
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog
            }

            function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === "@partial-block") {
                        partial = options.data["partial-block"]
                    } else {
                        partial = options.partials[options.name]
                    }
                } else if (!partial.call && !options.name) {
                    options.name = partial;
                    partial = options.partials[partial]
                }
                return partial
            }

            function invokePartial(partial, context, options) {
                options.partial = true;
                if (options.ids) {
                    options.data.contextPath = options.ids[0] || options.data.contextPath
                }
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) {
                    options.data = _base.createFrame(options.data);
                    partialBlock = options.data["partial-block"] = options.fn;
                    if (partialBlock.partials) {
                        options.partials = Utils.extend({}, options.partials, partialBlock.partials)
                    }
                }
                if (partial === undefined && partialBlock) {
                    partial = partialBlock
                }
                if (partial === undefined) {
                    throw new _exception2["default"]("The partial " + options.name + " could not be found")
                } else if (partial instanceof Function) {
                    return partial(context, options)
                }
            }

            function noop() {
                return ""
            }

            function initData(context, data) {
                if (!data || !("root" in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context
                }
                return data
            }

            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props)
                }
                return prog
            }
        }, function(module, exports) {
            (function(global) {
                "use strict";
                exports.__esModule = true;
                exports["default"] = function(Handlebars) {
                    var root = typeof global !== "undefined" ? global : window,
                        $Handlebars = root.Handlebars;
                    Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) {
                            root.Handlebars = $Handlebars
                        }
                        return Handlebars
                    }
                };
                module.exports = exports["default"]
            }).call(exports, function() {
                return this
            }())
        }, function(module, exports) {
            "use strict";
            exports.__esModule = true;
            var AST = {
                helpers: {
                    helperExpression: function helperExpression(node) {
                        return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash)
                    },
                    scopedId: function scopedId(path) {
                        return /^\.|this\b/.test(path.original)
                    },
                    simpleId: function simpleId(path) {
                        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth
                    }
                }
            };
            exports["default"] = AST;
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            var _interopRequireWildcard = __webpack_require__(3)["default"];
            exports.__esModule = true;
            exports.parse = parse;
            var _parser = __webpack_require__(23);
            var _parser2 = _interopRequireDefault(_parser);
            var _whitespaceControl = __webpack_require__(24);
            var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
            var _helpers = __webpack_require__(26);
            var Helpers = _interopRequireWildcard(_helpers);
            var _utils = __webpack_require__(5);
            exports.parser = _parser2["default"];
            var yy = {};
            _utils.extend(yy, Helpers);

            function parse(input, options) {
                if (input.type === "Program") {
                    return input
                }
                _parser2["default"].yy = yy;
                yy.locInfo = function(locInfo) {
                    return new yy.SourceLocation(options && options.srcName, locInfo)
                };
                var strip = new _whitespaceControl2["default"](options);
                return strip.accept(_parser2["default"].parse(input))
            }
        }, function(module, exports) {
            "use strict";
            var handlebars = function() {
                var parser = {
                    trace: function trace() {},
                    yy: {},
                    symbols_: {
                        error: 2,
                        root: 3,
                        program: 4,
                        EOF: 5,
                        program_repetition0: 6,
                        statement: 7,
                        mustache: 8,
                        block: 9,
                        rawBlock: 10,
                        partial: 11,
                        partialBlock: 12,
                        content: 13,
                        COMMENT: 14,
                        CONTENT: 15,
                        openRawBlock: 16,
                        rawBlock_repetition_plus0: 17,
                        END_RAW_BLOCK: 18,
                        OPEN_RAW_BLOCK: 19,
                        helperName: 20,
                        openRawBlock_repetition0: 21,
                        openRawBlock_option0: 22,
                        CLOSE_RAW_BLOCK: 23,
                        openBlock: 24,
                        block_option0: 25,
                        closeBlock: 26,
                        openInverse: 27,
                        block_option1: 28,
                        OPEN_BLOCK: 29,
                        openBlock_repetition0: 30,
                        openBlock_option0: 31,
                        openBlock_option1: 32,
                        CLOSE: 33,
                        OPEN_INVERSE: 34,
                        openInverse_repetition0: 35,
                        openInverse_option0: 36,
                        openInverse_option1: 37,
                        openInverseChain: 38,
                        OPEN_INVERSE_CHAIN: 39,
                        openInverseChain_repetition0: 40,
                        openInverseChain_option0: 41,
                        openInverseChain_option1: 42,
                        inverseAndProgram: 43,
                        INVERSE: 44,
                        inverseChain: 45,
                        inverseChain_option0: 46,
                        OPEN_ENDBLOCK: 47,
                        OPEN: 48,
                        mustache_repetition0: 49,
                        mustache_option0: 50,
                        OPEN_UNESCAPED: 51,
                        mustache_repetition1: 52,
                        mustache_option1: 53,
                        CLOSE_UNESCAPED: 54,
                        OPEN_PARTIAL: 55,
                        partialName: 56,
                        partial_repetition0: 57,
                        partial_option0: 58,
                        openPartialBlock: 59,
                        OPEN_PARTIAL_BLOCK: 60,
                        openPartialBlock_repetition0: 61,
                        openPartialBlock_option0: 62,
                        param: 63,
                        sexpr: 64,
                        OPEN_SEXPR: 65,
                        sexpr_repetition0: 66,
                        sexpr_option0: 67,
                        CLOSE_SEXPR: 68,
                        hash: 69,
                        hash_repetition_plus0: 70,
                        hashSegment: 71,
                        ID: 72,
                        EQUALS: 73,
                        blockParams: 74,
                        OPEN_BLOCK_PARAMS: 75,
                        blockParams_repetition_plus0: 76,
                        CLOSE_BLOCK_PARAMS: 77,
                        path: 78,
                        dataName: 79,
                        STRING: 80,
                        NUMBER: 81,
                        BOOLEAN: 82,
                        UNDEFINED: 83,
                        NULL: 84,
                        DATA: 85,
                        pathSegments: 86,
                        SEP: 87,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        14: "COMMENT",
                        15: "CONTENT",
                        18: "END_RAW_BLOCK",
                        19: "OPEN_RAW_BLOCK",
                        23: "CLOSE_RAW_BLOCK",
                        29: "OPEN_BLOCK",
                        33: "CLOSE",
                        34: "OPEN_INVERSE",
                        39: "OPEN_INVERSE_CHAIN",
                        44: "INVERSE",
                        47: "OPEN_ENDBLOCK",
                        48: "OPEN",
                        51: "OPEN_UNESCAPED",
                        54: "CLOSE_UNESCAPED",
                        55: "OPEN_PARTIAL",
                        60: "OPEN_PARTIAL_BLOCK",
                        65: "OPEN_SEXPR",
                        68: "CLOSE_SEXPR",
                        72: "ID",
                        73: "EQUALS",
                        75: "OPEN_BLOCK_PARAMS",
                        77: "CLOSE_BLOCK_PARAMS",
                        80: "STRING",
                        81: "NUMBER",
                        82: "BOOLEAN",
                        83: "UNDEFINED",
                        84: "NULL",
                        85: "DATA",
                        87: "SEP"
                    },
                    productions_: [0, [3, 2],
                        [4, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [13, 1],
                        [10, 3],
                        [16, 5],
                        [9, 4],
                        [9, 4],
                        [24, 6],
                        [27, 6],
                        [38, 6],
                        [43, 2],
                        [45, 3],
                        [45, 1],
                        [26, 3],
                        [8, 5],
                        [8, 5],
                        [11, 5],
                        [12, 3],
                        [59, 5],
                        [63, 1],
                        [63, 1],
                        [64, 5],
                        [69, 1],
                        [71, 3],
                        [74, 3],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [56, 1],
                        [56, 1],
                        [79, 2],
                        [78, 1],
                        [86, 3],
                        [86, 1],
                        [6, 0],
                        [6, 2],
                        [17, 1],
                        [17, 2],
                        [21, 0],
                        [21, 2],
                        [22, 0],
                        [22, 1],
                        [25, 0],
                        [25, 1],
                        [28, 0],
                        [28, 1],
                        [30, 0],
                        [30, 2],
                        [31, 0],
                        [31, 1],
                        [32, 0],
                        [32, 1],
                        [35, 0],
                        [35, 2],
                        [36, 0],
                        [36, 1],
                        [37, 0],
                        [37, 1],
                        [40, 0],
                        [40, 2],
                        [41, 0],
                        [41, 1],
                        [42, 0],
                        [42, 1],
                        [46, 0],
                        [46, 1],
                        [49, 0],
                        [49, 2],
                        [50, 0],
                        [50, 1],
                        [52, 0],
                        [52, 2],
                        [53, 0],
                        [53, 1],
                        [57, 0],
                        [57, 2],
                        [58, 0],
                        [58, 1],
                        [61, 0],
                        [61, 2],
                        [62, 0],
                        [62, 1],
                        [66, 0],
                        [66, 2],
                        [67, 0],
                        [67, 1],
                        [70, 1],
                        [70, 2],
                        [76, 1],
                        [76, 2]
                    ],
                    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                        var $0 = $$.length - 1;
                        switch (yystate) {
                            case 1:
                                return $$[$0 - 1];
                                break;
                            case 2:
                                this.$ = yy.prepareProgram($$[$0]);
                                break;
                            case 3:
                                this.$ = $$[$0];
                                break;
                            case 4:
                                this.$ = $$[$0];
                                break;
                            case 5:
                                this.$ = $$[$0];
                                break;
                            case 6:
                                this.$ = $$[$0];
                                break;
                            case 7:
                                this.$ = $$[$0];
                                break;
                            case 8:
                                this.$ = $$[$0];
                                break;
                            case 9:
                                this.$ = {
                                    type: "CommentStatement",
                                    value: yy.stripComment($$[$0]),
                                    strip: yy.stripFlags($$[$0], $$[$0]),
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 10:
                                this.$ = {
                                    type: "ContentStatement",
                                    original: $$[$0],
                                    value: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 11:
                                this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                                break;
                            case 12:
                                this.$ = {
                                    path: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1]
                                };
                                break;
                            case 13:
                                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                                break;
                            case 14:
                                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                                break;
                            case 15:
                                this.$ = {
                                    open: $$[$0 - 5],
                                    path: $$[$0 - 4],
                                    params: $$[$0 - 3],
                                    hash: $$[$0 - 2],
                                    blockParams: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                                };
                                break;
                            case 16:
                                this.$ = {
                                    path: $$[$0 - 4],
                                    params: $$[$0 - 3],
                                    hash: $$[$0 - 2],
                                    blockParams: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                                };
                                break;
                            case 17:
                                this.$ = {
                                    path: $$[$0 - 4],
                                    params: $$[$0 - 3],
                                    hash: $$[$0 - 2],
                                    blockParams: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                                };
                                break;
                            case 18:
                                this.$ = {
                                    strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                                    program: $$[$0]
                                };
                                break;
                            case 19:
                                var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                                    program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                                program.chained = true;
                                this.$ = {
                                    strip: $$[$0 - 2].strip,
                                    program: program,
                                    chain: true
                                };
                                break;
                            case 20:
                                this.$ = $$[$0];
                                break;
                            case 21:
                                this.$ = {
                                    path: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 2], $$[$0])
                                };
                                break;
                            case 22:
                                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                                break;
                            case 23:
                                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                                break;
                            case 24:
                                this.$ = {
                                    type: "PartialStatement",
                                    name: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1],
                                    indent: "",
                                    strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 25:
                                this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                                break;
                            case 26:
                                this.$ = {
                                    path: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1],
                                    strip: yy.stripFlags($$[$0 - 4], $$[$0])
                                };
                                break;
                            case 27:
                                this.$ = $$[$0];
                                break;
                            case 28:
                                this.$ = $$[$0];
                                break;
                            case 29:
                                this.$ = {
                                    type: "SubExpression",
                                    path: $$[$0 - 3],
                                    params: $$[$0 - 2],
                                    hash: $$[$0 - 1],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 30:
                                this.$ = {
                                    type: "Hash",
                                    pairs: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 31:
                                this.$ = {
                                    type: "HashPair",
                                    key: yy.id($$[$0 - 2]),
                                    value: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 32:
                                this.$ = yy.id($$[$0 - 1]);
                                break;
                            case 33:
                                this.$ = $$[$0];
                                break;
                            case 34:
                                this.$ = $$[$0];
                                break;
                            case 35:
                                this.$ = {
                                    type: "StringLiteral",
                                    value: $$[$0],
                                    original: $$[$0],
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 36:
                                this.$ = {
                                    type: "NumberLiteral",
                                    value: Number($$[$0]),
                                    original: Number($$[$0]),
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 37:
                                this.$ = {
                                    type: "BooleanLiteral",
                                    value: $$[$0] === "true",
                                    original: $$[$0] === "true",
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 38:
                                this.$ = {
                                    type: "UndefinedLiteral",
                                    original: undefined,
                                    value: undefined,
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 39:
                                this.$ = {
                                    type: "NullLiteral",
                                    original: null,
                                    value: null,
                                    loc: yy.locInfo(this._$)
                                };
                                break;
                            case 40:
                                this.$ = $$[$0];
                                break;
                            case 41:
                                this.$ = $$[$0];
                                break;
                            case 42:
                                this.$ = yy.preparePath(true, $$[$0], this._$);
                                break;
                            case 43:
                                this.$ = yy.preparePath(false, $$[$0], this._$);
                                break;
                            case 44:
                                $$[$0 - 2].push({
                                    part: yy.id($$[$0]),
                                    original: $$[$0],
                                    separator: $$[$0 - 1]
                                });
                                this.$ = $$[$0 - 2];
                                break;
                            case 45:
                                this.$ = [{
                                    part: yy.id($$[$0]),
                                    original: $$[$0]
                                }];
                                break;
                            case 46:
                                this.$ = [];
                                break;
                            case 47:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 48:
                                this.$ = [$$[$0]];
                                break;
                            case 49:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 50:
                                this.$ = [];
                                break;
                            case 51:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 58:
                                this.$ = [];
                                break;
                            case 59:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 64:
                                this.$ = [];
                                break;
                            case 65:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 70:
                                this.$ = [];
                                break;
                            case 71:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 78:
                                this.$ = [];
                                break;
                            case 79:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 82:
                                this.$ = [];
                                break;
                            case 83:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 86:
                                this.$ = [];
                                break;
                            case 87:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 90:
                                this.$ = [];
                                break;
                            case 91:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 94:
                                this.$ = [];
                                break;
                            case 95:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 98:
                                this.$ = [$$[$0]];
                                break;
                            case 99:
                                $$[$0 - 1].push($$[$0]);
                                break;
                            case 100:
                                this.$ = [$$[$0]];
                                break;
                            case 101:
                                $$[$0 - 1].push($$[$0]);
                                break
                        }
                    },
                    table: [{
                        3: 1,
                        4: 2,
                        5: [2, 46],
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        1: [3]
                    }, {
                        5: [1, 4]
                    }, {
                        5: [2, 2],
                        7: 5,
                        8: 6,
                        9: 7,
                        10: 8,
                        11: 9,
                        12: 10,
                        13: 11,
                        14: [1, 12],
                        15: [1, 20],
                        16: 17,
                        19: [1, 23],
                        24: 15,
                        27: 16,
                        29: [1, 21],
                        34: [1, 22],
                        39: [2, 2],
                        44: [2, 2],
                        47: [2, 2],
                        48: [1, 13],
                        51: [1, 14],
                        55: [1, 18],
                        59: 19,
                        60: [1, 24]
                    }, {
                        1: [2, 1]
                    }, {
                        5: [2, 47],
                        14: [2, 47],
                        15: [2, 47],
                        19: [2, 47],
                        29: [2, 47],
                        34: [2, 47],
                        39: [2, 47],
                        44: [2, 47],
                        47: [2, 47],
                        48: [2, 47],
                        51: [2, 47],
                        55: [2, 47],
                        60: [2, 47]
                    }, {
                        5: [2, 3],
                        14: [2, 3],
                        15: [2, 3],
                        19: [2, 3],
                        29: [2, 3],
                        34: [2, 3],
                        39: [2, 3],
                        44: [2, 3],
                        47: [2, 3],
                        48: [2, 3],
                        51: [2, 3],
                        55: [2, 3],
                        60: [2, 3]
                    }, {
                        5: [2, 4],
                        14: [2, 4],
                        15: [2, 4],
                        19: [2, 4],
                        29: [2, 4],
                        34: [2, 4],
                        39: [2, 4],
                        44: [2, 4],
                        47: [2, 4],
                        48: [2, 4],
                        51: [2, 4],
                        55: [2, 4],
                        60: [2, 4]
                    }, {
                        5: [2, 5],
                        14: [2, 5],
                        15: [2, 5],
                        19: [2, 5],
                        29: [2, 5],
                        34: [2, 5],
                        39: [2, 5],
                        44: [2, 5],
                        47: [2, 5],
                        48: [2, 5],
                        51: [2, 5],
                        55: [2, 5],
                        60: [2, 5]
                    }, {
                        5: [2, 6],
                        14: [2, 6],
                        15: [2, 6],
                        19: [2, 6],
                        29: [2, 6],
                        34: [2, 6],
                        39: [2, 6],
                        44: [2, 6],
                        47: [2, 6],
                        48: [2, 6],
                        51: [2, 6],
                        55: [2, 6],
                        60: [2, 6]
                    }, {
                        5: [2, 7],
                        14: [2, 7],
                        15: [2, 7],
                        19: [2, 7],
                        29: [2, 7],
                        34: [2, 7],
                        39: [2, 7],
                        44: [2, 7],
                        47: [2, 7],
                        48: [2, 7],
                        51: [2, 7],
                        55: [2, 7],
                        60: [2, 7]
                    }, {
                        5: [2, 8],
                        14: [2, 8],
                        15: [2, 8],
                        19: [2, 8],
                        29: [2, 8],
                        34: [2, 8],
                        39: [2, 8],
                        44: [2, 8],
                        47: [2, 8],
                        48: [2, 8],
                        51: [2, 8],
                        55: [2, 8],
                        60: [2, 8]
                    }, {
                        5: [2, 9],
                        14: [2, 9],
                        15: [2, 9],
                        19: [2, 9],
                        29: [2, 9],
                        34: [2, 9],
                        39: [2, 9],
                        44: [2, 9],
                        47: [2, 9],
                        48: [2, 9],
                        51: [2, 9],
                        55: [2, 9],
                        60: [2, 9]
                    }, {
                        20: 25,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 36,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 37,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        39: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        4: 38,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        13: 40,
                        15: [1, 20],
                        17: 39
                    }, {
                        20: 42,
                        56: 41,
                        64: 43,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 45,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        5: [2, 10],
                        14: [2, 10],
                        15: [2, 10],
                        18: [2, 10],
                        19: [2, 10],
                        29: [2, 10],
                        34: [2, 10],
                        39: [2, 10],
                        44: [2, 10],
                        47: [2, 10],
                        48: [2, 10],
                        51: [2, 10],
                        55: [2, 10],
                        60: [2, 10]
                    }, {
                        20: 46,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 47,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 48,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 42,
                        56: 49,
                        64: 43,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [2, 78],
                        49: 50,
                        65: [2, 78],
                        72: [2, 78],
                        80: [2, 78],
                        81: [2, 78],
                        82: [2, 78],
                        83: [2, 78],
                        84: [2, 78],
                        85: [2, 78]
                    }, {
                        23: [2, 33],
                        33: [2, 33],
                        54: [2, 33],
                        65: [2, 33],
                        68: [2, 33],
                        72: [2, 33],
                        75: [2, 33],
                        80: [2, 33],
                        81: [2, 33],
                        82: [2, 33],
                        83: [2, 33],
                        84: [2, 33],
                        85: [2, 33]
                    }, {
                        23: [2, 34],
                        33: [2, 34],
                        54: [2, 34],
                        65: [2, 34],
                        68: [2, 34],
                        72: [2, 34],
                        75: [2, 34],
                        80: [2, 34],
                        81: [2, 34],
                        82: [2, 34],
                        83: [2, 34],
                        84: [2, 34],
                        85: [2, 34]
                    }, {
                        23: [2, 35],
                        33: [2, 35],
                        54: [2, 35],
                        65: [2, 35],
                        68: [2, 35],
                        72: [2, 35],
                        75: [2, 35],
                        80: [2, 35],
                        81: [2, 35],
                        82: [2, 35],
                        83: [2, 35],
                        84: [2, 35],
                        85: [2, 35]
                    }, {
                        23: [2, 36],
                        33: [2, 36],
                        54: [2, 36],
                        65: [2, 36],
                        68: [2, 36],
                        72: [2, 36],
                        75: [2, 36],
                        80: [2, 36],
                        81: [2, 36],
                        82: [2, 36],
                        83: [2, 36],
                        84: [2, 36],
                        85: [2, 36]
                    }, {
                        23: [2, 37],
                        33: [2, 37],
                        54: [2, 37],
                        65: [2, 37],
                        68: [2, 37],
                        72: [2, 37],
                        75: [2, 37],
                        80: [2, 37],
                        81: [2, 37],
                        82: [2, 37],
                        83: [2, 37],
                        84: [2, 37],
                        85: [2, 37]
                    }, {
                        23: [2, 38],
                        33: [2, 38],
                        54: [2, 38],
                        65: [2, 38],
                        68: [2, 38],
                        72: [2, 38],
                        75: [2, 38],
                        80: [2, 38],
                        81: [2, 38],
                        82: [2, 38],
                        83: [2, 38],
                        84: [2, 38],
                        85: [2, 38]
                    }, {
                        23: [2, 39],
                        33: [2, 39],
                        54: [2, 39],
                        65: [2, 39],
                        68: [2, 39],
                        72: [2, 39],
                        75: [2, 39],
                        80: [2, 39],
                        81: [2, 39],
                        82: [2, 39],
                        83: [2, 39],
                        84: [2, 39],
                        85: [2, 39]
                    }, {
                        23: [2, 43],
                        33: [2, 43],
                        54: [2, 43],
                        65: [2, 43],
                        68: [2, 43],
                        72: [2, 43],
                        75: [2, 43],
                        80: [2, 43],
                        81: [2, 43],
                        82: [2, 43],
                        83: [2, 43],
                        84: [2, 43],
                        85: [2, 43],
                        87: [1, 51]
                    }, {
                        72: [1, 35],
                        86: 52
                    }, {
                        23: [2, 45],
                        33: [2, 45],
                        54: [2, 45],
                        65: [2, 45],
                        68: [2, 45],
                        72: [2, 45],
                        75: [2, 45],
                        80: [2, 45],
                        81: [2, 45],
                        82: [2, 45],
                        83: [2, 45],
                        84: [2, 45],
                        85: [2, 45],
                        87: [2, 45]
                    }, {
                        52: 53,
                        54: [2, 82],
                        65: [2, 82],
                        72: [2, 82],
                        80: [2, 82],
                        81: [2, 82],
                        82: [2, 82],
                        83: [2, 82],
                        84: [2, 82],
                        85: [2, 82]
                    }, {
                        25: 54,
                        38: 56,
                        39: [1, 58],
                        43: 57,
                        44: [1, 59],
                        45: 55,
                        47: [2, 54]
                    }, {
                        28: 60,
                        43: 61,
                        44: [1, 59],
                        47: [2, 56]
                    }, {
                        13: 63,
                        15: [1, 20],
                        18: [1, 62]
                    }, {
                        15: [2, 48],
                        18: [2, 48]
                    }, {
                        33: [2, 86],
                        57: 64,
                        65: [2, 86],
                        72: [2, 86],
                        80: [2, 86],
                        81: [2, 86],
                        82: [2, 86],
                        83: [2, 86],
                        84: [2, 86],
                        85: [2, 86]
                    }, {
                        33: [2, 40],
                        65: [2, 40],
                        72: [2, 40],
                        80: [2, 40],
                        81: [2, 40],
                        82: [2, 40],
                        83: [2, 40],
                        84: [2, 40],
                        85: [2, 40]
                    }, {
                        33: [2, 41],
                        65: [2, 41],
                        72: [2, 41],
                        80: [2, 41],
                        81: [2, 41],
                        82: [2, 41],
                        83: [2, 41],
                        84: [2, 41],
                        85: [2, 41]
                    }, {
                        20: 65,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        26: 66,
                        47: [1, 67]
                    }, {
                        30: 68,
                        33: [2, 58],
                        65: [2, 58],
                        72: [2, 58],
                        75: [2, 58],
                        80: [2, 58],
                        81: [2, 58],
                        82: [2, 58],
                        83: [2, 58],
                        84: [2, 58],
                        85: [2, 58]
                    }, {
                        33: [2, 64],
                        35: 69,
                        65: [2, 64],
                        72: [2, 64],
                        75: [2, 64],
                        80: [2, 64],
                        81: [2, 64],
                        82: [2, 64],
                        83: [2, 64],
                        84: [2, 64],
                        85: [2, 64]
                    }, {
                        21: 70,
                        23: [2, 50],
                        65: [2, 50],
                        72: [2, 50],
                        80: [2, 50],
                        81: [2, 50],
                        82: [2, 50],
                        83: [2, 50],
                        84: [2, 50],
                        85: [2, 50]
                    }, {
                        33: [2, 90],
                        61: 71,
                        65: [2, 90],
                        72: [2, 90],
                        80: [2, 90],
                        81: [2, 90],
                        82: [2, 90],
                        83: [2, 90],
                        84: [2, 90],
                        85: [2, 90]
                    }, {
                        20: 75,
                        33: [2, 80],
                        50: 72,
                        63: 73,
                        64: 76,
                        65: [1, 44],
                        69: 74,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        72: [1, 80]
                    }, {
                        23: [2, 42],
                        33: [2, 42],
                        54: [2, 42],
                        65: [2, 42],
                        68: [2, 42],
                        72: [2, 42],
                        75: [2, 42],
                        80: [2, 42],
                        81: [2, 42],
                        82: [2, 42],
                        83: [2, 42],
                        84: [2, 42],
                        85: [2, 42],
                        87: [1, 51]
                    }, {
                        20: 75,
                        53: 81,
                        54: [2, 84],
                        63: 82,
                        64: 76,
                        65: [1, 44],
                        69: 83,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        26: 84,
                        47: [1, 67]
                    }, {
                        47: [2, 55]
                    }, {
                        4: 85,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        39: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        47: [2, 20]
                    }, {
                        20: 86,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 87,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        26: 88,
                        47: [1, 67]
                    }, {
                        47: [2, 57]
                    }, {
                        5: [2, 11],
                        14: [2, 11],
                        15: [2, 11],
                        19: [2, 11],
                        29: [2, 11],
                        34: [2, 11],
                        39: [2, 11],
                        44: [2, 11],
                        47: [2, 11],
                        48: [2, 11],
                        51: [2, 11],
                        55: [2, 11],
                        60: [2, 11]
                    }, {
                        15: [2, 49],
                        18: [2, 49]
                    }, {
                        20: 75,
                        33: [2, 88],
                        58: 89,
                        63: 90,
                        64: 76,
                        65: [1, 44],
                        69: 91,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        65: [2, 94],
                        66: 92,
                        68: [2, 94],
                        72: [2, 94],
                        80: [2, 94],
                        81: [2, 94],
                        82: [2, 94],
                        83: [2, 94],
                        84: [2, 94],
                        85: [2, 94]
                    }, {
                        5: [2, 25],
                        14: [2, 25],
                        15: [2, 25],
                        19: [2, 25],
                        29: [2, 25],
                        34: [2, 25],
                        39: [2, 25],
                        44: [2, 25],
                        47: [2, 25],
                        48: [2, 25],
                        51: [2, 25],
                        55: [2, 25],
                        60: [2, 25]
                    }, {
                        20: 93,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        31: 94,
                        33: [2, 60],
                        63: 95,
                        64: 76,
                        65: [1, 44],
                        69: 96,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 60],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 66],
                        36: 97,
                        63: 98,
                        64: 76,
                        65: [1, 44],
                        69: 99,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 66],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        22: 100,
                        23: [2, 52],
                        63: 101,
                        64: 76,
                        65: [1, 44],
                        69: 102,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 92],
                        62: 103,
                        63: 104,
                        64: 76,
                        65: [1, 44],
                        69: 105,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [1, 106]
                    }, {
                        33: [2, 79],
                        65: [2, 79],
                        72: [2, 79],
                        80: [2, 79],
                        81: [2, 79],
                        82: [2, 79],
                        83: [2, 79],
                        84: [2, 79],
                        85: [2, 79]
                    }, {
                        33: [2, 81]
                    }, {
                        23: [2, 27],
                        33: [2, 27],
                        54: [2, 27],
                        65: [2, 27],
                        68: [2, 27],
                        72: [2, 27],
                        75: [2, 27],
                        80: [2, 27],
                        81: [2, 27],
                        82: [2, 27],
                        83: [2, 27],
                        84: [2, 27],
                        85: [2, 27]
                    }, {
                        23: [2, 28],
                        33: [2, 28],
                        54: [2, 28],
                        65: [2, 28],
                        68: [2, 28],
                        72: [2, 28],
                        75: [2, 28],
                        80: [2, 28],
                        81: [2, 28],
                        82: [2, 28],
                        83: [2, 28],
                        84: [2, 28],
                        85: [2, 28]
                    }, {
                        23: [2, 30],
                        33: [2, 30],
                        54: [2, 30],
                        68: [2, 30],
                        71: 107,
                        72: [1, 108],
                        75: [2, 30]
                    }, {
                        23: [2, 98],
                        33: [2, 98],
                        54: [2, 98],
                        68: [2, 98],
                        72: [2, 98],
                        75: [2, 98]
                    }, {
                        23: [2, 45],
                        33: [2, 45],
                        54: [2, 45],
                        65: [2, 45],
                        68: [2, 45],
                        72: [2, 45],
                        73: [1, 109],
                        75: [2, 45],
                        80: [2, 45],
                        81: [2, 45],
                        82: [2, 45],
                        83: [2, 45],
                        84: [2, 45],
                        85: [2, 45],
                        87: [2, 45]
                    }, {
                        23: [2, 44],
                        33: [2, 44],
                        54: [2, 44],
                        65: [2, 44],
                        68: [2, 44],
                        72: [2, 44],
                        75: [2, 44],
                        80: [2, 44],
                        81: [2, 44],
                        82: [2, 44],
                        83: [2, 44],
                        84: [2, 44],
                        85: [2, 44],
                        87: [2, 44]
                    }, {
                        54: [1, 110]
                    }, {
                        54: [2, 83],
                        65: [2, 83],
                        72: [2, 83],
                        80: [2, 83],
                        81: [2, 83],
                        82: [2, 83],
                        83: [2, 83],
                        84: [2, 83],
                        85: [2, 83]
                    }, {
                        54: [2, 85]
                    }, {
                        5: [2, 13],
                        14: [2, 13],
                        15: [2, 13],
                        19: [2, 13],
                        29: [2, 13],
                        34: [2, 13],
                        39: [2, 13],
                        44: [2, 13],
                        47: [2, 13],
                        48: [2, 13],
                        51: [2, 13],
                        55: [2, 13],
                        60: [2, 13]
                    }, {
                        38: 56,
                        39: [1, 58],
                        43: 57,
                        44: [1, 59],
                        45: 112,
                        46: 111,
                        47: [2, 76]
                    }, {
                        33: [2, 70],
                        40: 113,
                        65: [2, 70],
                        72: [2, 70],
                        75: [2, 70],
                        80: [2, 70],
                        81: [2, 70],
                        82: [2, 70],
                        83: [2, 70],
                        84: [2, 70],
                        85: [2, 70]
                    }, {
                        47: [2, 18]
                    }, {
                        5: [2, 14],
                        14: [2, 14],
                        15: [2, 14],
                        19: [2, 14],
                        29: [2, 14],
                        34: [2, 14],
                        39: [2, 14],
                        44: [2, 14],
                        47: [2, 14],
                        48: [2, 14],
                        51: [2, 14],
                        55: [2, 14],
                        60: [2, 14]
                    }, {
                        33: [1, 114]
                    }, {
                        33: [2, 87],
                        65: [2, 87],
                        72: [2, 87],
                        80: [2, 87],
                        81: [2, 87],
                        82: [2, 87],
                        83: [2, 87],
                        84: [2, 87],
                        85: [2, 87]
                    }, {
                        33: [2, 89]
                    }, {
                        20: 75,
                        63: 116,
                        64: 76,
                        65: [1, 44],
                        67: 115,
                        68: [2, 96],
                        69: 117,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [1, 118]
                    }, {
                        32: 119,
                        33: [2, 62],
                        74: 120,
                        75: [1, 121]
                    }, {
                        33: [2, 59],
                        65: [2, 59],
                        72: [2, 59],
                        75: [2, 59],
                        80: [2, 59],
                        81: [2, 59],
                        82: [2, 59],
                        83: [2, 59],
                        84: [2, 59],
                        85: [2, 59]
                    }, {
                        33: [2, 61],
                        75: [2, 61]
                    }, {
                        33: [2, 68],
                        37: 122,
                        74: 123,
                        75: [1, 121]
                    }, {
                        33: [2, 65],
                        65: [2, 65],
                        72: [2, 65],
                        75: [2, 65],
                        80: [2, 65],
                        81: [2, 65],
                        82: [2, 65],
                        83: [2, 65],
                        84: [2, 65],
                        85: [2, 65]
                    }, {
                        33: [2, 67],
                        75: [2, 67]
                    }, {
                        23: [1, 124]
                    }, {
                        23: [2, 51],
                        65: [2, 51],
                        72: [2, 51],
                        80: [2, 51],
                        81: [2, 51],
                        82: [2, 51],
                        83: [2, 51],
                        84: [2, 51],
                        85: [2, 51]
                    }, {
                        23: [2, 53]
                    }, {
                        33: [1, 125]
                    }, {
                        33: [2, 91],
                        65: [2, 91],
                        72: [2, 91],
                        80: [2, 91],
                        81: [2, 91],
                        82: [2, 91],
                        83: [2, 91],
                        84: [2, 91],
                        85: [2, 91]
                    }, {
                        33: [2, 93]
                    }, {
                        5: [2, 22],
                        14: [2, 22],
                        15: [2, 22],
                        19: [2, 22],
                        29: [2, 22],
                        34: [2, 22],
                        39: [2, 22],
                        44: [2, 22],
                        47: [2, 22],
                        48: [2, 22],
                        51: [2, 22],
                        55: [2, 22],
                        60: [2, 22]
                    }, {
                        23: [2, 99],
                        33: [2, 99],
                        54: [2, 99],
                        68: [2, 99],
                        72: [2, 99],
                        75: [2, 99]
                    }, {
                        73: [1, 109]
                    }, {
                        20: 75,
                        63: 126,
                        64: 76,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        5: [2, 23],
                        14: [2, 23],
                        15: [2, 23],
                        19: [2, 23],
                        29: [2, 23],
                        34: [2, 23],
                        39: [2, 23],
                        44: [2, 23],
                        47: [2, 23],
                        48: [2, 23],
                        51: [2, 23],
                        55: [2, 23],
                        60: [2, 23]
                    }, {
                        47: [2, 19]
                    }, {
                        47: [2, 77]
                    }, {
                        20: 75,
                        33: [2, 72],
                        41: 127,
                        63: 128,
                        64: 76,
                        65: [1, 44],
                        69: 129,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 72],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        5: [2, 24],
                        14: [2, 24],
                        15: [2, 24],
                        19: [2, 24],
                        29: [2, 24],
                        34: [2, 24],
                        39: [2, 24],
                        44: [2, 24],
                        47: [2, 24],
                        48: [2, 24],
                        51: [2, 24],
                        55: [2, 24],
                        60: [2, 24]
                    }, {
                        68: [1, 130]
                    }, {
                        65: [2, 95],
                        68: [2, 95],
                        72: [2, 95],
                        80: [2, 95],
                        81: [2, 95],
                        82: [2, 95],
                        83: [2, 95],
                        84: [2, 95],
                        85: [2, 95]
                    }, {
                        68: [2, 97]
                    }, {
                        5: [2, 21],
                        14: [2, 21],
                        15: [2, 21],
                        19: [2, 21],
                        29: [2, 21],
                        34: [2, 21],
                        39: [2, 21],
                        44: [2, 21],
                        47: [2, 21],
                        48: [2, 21],
                        51: [2, 21],
                        55: [2, 21],
                        60: [2, 21]
                    }, {
                        33: [1, 131]
                    }, {
                        33: [2, 63]
                    }, {
                        72: [1, 133],
                        76: 132
                    }, {
                        33: [1, 134]
                    }, {
                        33: [2, 69]
                    }, {
                        15: [2, 12]
                    }, {
                        14: [2, 26],
                        15: [2, 26],
                        19: [2, 26],
                        29: [2, 26],
                        34: [2, 26],
                        47: [2, 26],
                        48: [2, 26],
                        51: [2, 26],
                        55: [2, 26],
                        60: [2, 26]
                    }, {
                        23: [2, 31],
                        33: [2, 31],
                        54: [2, 31],
                        68: [2, 31],
                        72: [2, 31],
                        75: [2, 31]
                    }, {
                        33: [2, 74],
                        42: 135,
                        74: 136,
                        75: [1, 121]
                    }, {
                        33: [2, 71],
                        65: [2, 71],
                        72: [2, 71],
                        75: [2, 71],
                        80: [2, 71],
                        81: [2, 71],
                        82: [2, 71],
                        83: [2, 71],
                        84: [2, 71],
                        85: [2, 71]
                    }, {
                        33: [2, 73],
                        75: [2, 73]
                    }, {
                        23: [2, 29],
                        33: [2, 29],
                        54: [2, 29],
                        65: [2, 29],
                        68: [2, 29],
                        72: [2, 29],
                        75: [2, 29],
                        80: [2, 29],
                        81: [2, 29],
                        82: [2, 29],
                        83: [2, 29],
                        84: [2, 29],
                        85: [2, 29]
                    }, {
                        14: [2, 15],
                        15: [2, 15],
                        19: [2, 15],
                        29: [2, 15],
                        34: [2, 15],
                        39: [2, 15],
                        44: [2, 15],
                        47: [2, 15],
                        48: [2, 15],
                        51: [2, 15],
                        55: [2, 15],
                        60: [2, 15]
                    }, {
                        72: [1, 138],
                        77: [1, 137]
                    }, {
                        72: [2, 100],
                        77: [2, 100]
                    }, {
                        14: [2, 16],
                        15: [2, 16],
                        19: [2, 16],
                        29: [2, 16],
                        34: [2, 16],
                        44: [2, 16],
                        47: [2, 16],
                        48: [2, 16],
                        51: [2, 16],
                        55: [2, 16],
                        60: [2, 16]
                    }, {
                        33: [1, 139]
                    }, {
                        33: [2, 75]
                    }, {
                        33: [2, 32]
                    }, {
                        72: [2, 101],
                        77: [2, 101]
                    }, {
                        14: [2, 17],
                        15: [2, 17],
                        19: [2, 17],
                        29: [2, 17],
                        34: [2, 17],
                        39: [2, 17],
                        44: [2, 17],
                        47: [2, 17],
                        48: [2, 17],
                        51: [2, 17],
                        55: [2, 17],
                        60: [2, 17]
                    }],
                    defaultActions: {
                        4: [2, 1],
                        55: [2, 55],
                        57: [2, 20],
                        61: [2, 57],
                        74: [2, 81],
                        83: [2, 85],
                        87: [2, 18],
                        91: [2, 89],
                        102: [2, 53],
                        105: [2, 93],
                        111: [2, 19],
                        112: [2, 77],
                        117: [2, 97],
                        120: [2, 63],
                        123: [2, 69],
                        124: [2, 12],
                        136: [2, 75],
                        137: [2, 32]
                    },
                    parseError: function parseError(str, hash) {
                        throw new Error(str)
                    },
                    parse: function parse(input) {
                        var self = this,
                            stack = [0],
                            vstack = [null],
                            lstack = [],
                            table = this.table,
                            yytext = "",
                            yylineno = 0,
                            yyleng = 0,
                            recovering = 0,
                            TERROR = 2,
                            EOF = 1;
                        this.lexer.setInput(input);
                        this.lexer.yy = this.yy;
                        this.yy.lexer = this.lexer;
                        this.yy.parser = this;
                        if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
                        var yyloc = this.lexer.yylloc;
                        lstack.push(yyloc);
                        var ranges = this.lexer.options && this.lexer.options.ranges;
                        if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;

                        function popStack(n) {
                            stack.length = stack.length - 2 * n;
                            vstack.length = vstack.length - n;
                            lstack.length = lstack.length - n
                        }

                        function lex() {
                            var token;
                            token = self.lexer.lex() || 1;
                            if (typeof token !== "number") {
                                token = self.symbols_[token] || token
                            }
                            return token
                        }
                        var symbol, preErrorSymbol, state, action, a, r, yyval = {},
                            p, len, newState, expected;
                        while (true) {
                            state = stack[stack.length - 1];
                            if (this.defaultActions[state]) {
                                action = this.defaultActions[state]
                            } else {
                                if (symbol === null || typeof symbol == "undefined") {
                                    symbol = lex()
                                }
                                action = table[state] && table[state][symbol]
                            }
                            if (typeof action === "undefined" || !action.length || !action[0]) {
                                var errStr = "";
                                if (!recovering) {
                                    expected = [];
                                    for (p in table[state])
                                        if (this.terminals_[p] && p > 2) {
                                            expected.push("'" + this.terminals_[p] + "'")
                                        }
                                    if (this.lexer.showPosition) {
                                        errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'"
                                    } else {
                                        errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'")
                                    }
                                    this.parseError(errStr, {
                                        text: this.lexer.match,
                                        token: this.terminals_[symbol] || symbol,
                                        line: this.lexer.yylineno,
                                        loc: yyloc,
                                        expected: expected
                                    })
                                }
                            }
                            if (action[0] instanceof Array && action.length > 1) {
                                throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol)
                            }
                            switch (action[0]) {
                                case 1:
                                    stack.push(symbol);
                                    vstack.push(this.lexer.yytext);
                                    lstack.push(this.lexer.yylloc);
                                    stack.push(action[1]);
                                    symbol = null;
                                    if (!preErrorSymbol) {
                                        yyleng = this.lexer.yyleng;
                                        yytext = this.lexer.yytext;
                                        yylineno = this.lexer.yylineno;
                                        yyloc = this.lexer.yylloc;
                                        if (recovering > 0) recovering--
                                    } else {
                                        symbol = preErrorSymbol;
                                        preErrorSymbol = null
                                    }
                                    break;
                                case 2:
                                    len = this.productions_[action[1]][1];
                                    yyval.$ = vstack[vstack.length - len];
                                    yyval._$ = {
                                        first_line: lstack[lstack.length - (len || 1)].first_line,
                                        last_line: lstack[lstack.length - 1].last_line,
                                        first_column: lstack[lstack.length - (len || 1)].first_column,
                                        last_column: lstack[lstack.length - 1].last_column
                                    };
                                    if (ranges) {
                                        yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]
                                    }
                                    r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                                    if (typeof r !== "undefined") {
                                        return r
                                    }
                                    if (len) {
                                        stack = stack.slice(0, -1 * len * 2);
                                        vstack = vstack.slice(0, -1 * len);
                                        lstack = lstack.slice(0, -1 * len)
                                    }
                                    stack.push(this.productions_[action[1]][0]);
                                    vstack.push(yyval.$);
                                    lstack.push(yyval._$);
                                    newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                    stack.push(newState);
                                    break;
                                case 3:
                                    return true
                            }
                        }
                        return true
                    }
                };
                var lexer = function() {
                    var lexer = {
                        EOF: 1,
                        parseError: function parseError(str, hash) {
                            if (this.yy.parser) {
                                this.yy.parser.parseError(str, hash)
                            } else {
                                throw new Error(str)
                            }
                        },
                        setInput: function setInput(input) {
                            this._input = input;
                            this._more = this._less = this.done = false;
                            this.yylineno = this.yyleng = 0;
                            this.yytext = this.matched = this.match = "";
                            this.conditionStack = ["INITIAL"];
                            this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            };
                            if (this.options.ranges) this.yylloc.range = [0, 0];
                            this.offset = 0;
                            return this
                        },
                        input: function input() {
                            var ch = this._input[0];
                            this.yytext += ch;
                            this.yyleng++;
                            this.offset++;
                            this.match += ch;
                            this.matched += ch;
                            var lines = ch.match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno++;
                                this.yylloc.last_line++
                            } else {
                                this.yylloc.last_column++
                            }
                            if (this.options.ranges) this.yylloc.range[1]++;
                            this._input = this._input.slice(1);
                            return ch
                        },
                        unput: function unput(ch) {
                            var len = ch.length;
                            var lines = ch.split(/(?:\r\n?|\n)/g);
                            this._input = ch + this._input;
                            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                            this.offset -= len;
                            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1);
                            this.matched = this.matched.substr(0, this.matched.length - 1);
                            if (lines.length - 1) this.yylineno -= lines.length - 1;
                            var r = this.yylloc.range;
                            this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                            };
                            if (this.options.ranges) {
                                this.yylloc.range = [r[0], r[0] + this.yyleng - len]
                            }
                            return this
                        },
                        more: function more() {
                            this._more = true;
                            return this
                        },
                        less: function less(n) {
                            this.unput(this.match.slice(n))
                        },
                        pastInput: function pastInput() {
                            var past = this.matched.substr(0, this.matched.length - this.match.length);
                            return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
                        },
                        upcomingInput: function upcomingInput() {
                            var next = this.match;
                            if (next.length < 20) {
                                next += this._input.substr(0, 20 - next.length)
                            }
                            return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "")
                        },
                        showPosition: function showPosition() {
                            var pre = this.pastInput();
                            var c = new Array(pre.length + 1).join("-");
                            return pre + this.upcomingInput() + "\n" + c + "^"
                        },
                        next: function next() {
                            if (this.done) {
                                return this.EOF
                            }
                            if (!this._input) this.done = true;
                            var token, match, tempMatch, index, col, lines;
                            if (!this._more) {
                                this.yytext = "";
                                this.match = ""
                            }
                            var rules = this._currentRules();
                            for (var i = 0; i < rules.length; i++) {
                                tempMatch = this._input.match(this.rules[rules[i]]);
                                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                    match = tempMatch;
                                    index = i;
                                    if (!this.options.flex) break
                                }
                            }
                            if (match) {
                                lines = match[0].match(/(?:\r\n?|\n).*/g);
                                if (lines) this.yylineno += lines.length;
                                this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                                };
                                this.yytext += match[0];
                                this.match += match[0];
                                this.matches = match;
                                this.yyleng = this.yytext.length;
                                if (this.options.ranges) {
                                    this.yylloc.range = [this.offset, this.offset += this.yyleng]
                                }
                                this._more = false;
                                this._input = this._input.slice(match[0].length);
                                this.matched += match[0];
                                token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                                if (this.done && this._input) this.done = false;
                                if (token) return token;
                                else return
                            }
                            if (this._input === "") {
                                return this.EOF
                            } else {
                                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            }
                        },
                        lex: function lex() {
                            var r = this.next();
                            if (typeof r !== "undefined") {
                                return r
                            } else {
                                return this.lex()
                            }
                        },
                        begin: function begin(condition) {
                            this.conditionStack.push(condition)
                        },
                        popState: function popState() {
                            return this.conditionStack.pop()
                        },
                        _currentRules: function _currentRules() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                        },
                        topState: function topState() {
                            return this.conditionStack[this.conditionStack.length - 2]
                        },
                        pushState: function begin(condition) {
                            this.begin(condition)
                        }
                    };
                    lexer.options = {};
                    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                        function strip(start, end) {
                            return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end)
                        }
                        var YYSTATE = YY_START;
                        switch ($avoiding_name_collisions) {
                            case 0:
                                if (yy_.yytext.slice(-2) === "\\\\") {
                                    strip(0, 1);
                                    this.begin("mu")
                                } else if (yy_.yytext.slice(-1) === "\\") {
                                    strip(0, 1);
                                    this.begin("emu")
                                } else {
                                    this.begin("mu")
                                }
                                if (yy_.yytext) return 15;
                                break;
                            case 1:
                                return 15;
                                break;
                            case 2:
                                this.popState();
                                return 15;
                                break;
                            case 3:
                                this.begin("raw");
                                return 15;
                                break;
                            case 4:
                                this.popState();
                                if (this.conditionStack[this.conditionStack.length - 1] === "raw") {
                                    return 15
                                } else {
                                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                                    return "END_RAW_BLOCK"
                                }
                                break;
                            case 5:
                                return 15;
                                break;
                            case 6:
                                this.popState();
                                return 14;
                                break;
                            case 7:
                                return 65;
                                break;
                            case 8:
                                return 68;
                                break;
                            case 9:
                                return 19;
                                break;
                            case 10:
                                this.popState();
                                this.begin("raw");
                                return 23;
                                break;
                            case 11:
                                return 55;
                                break;
                            case 12:
                                return 60;
                                break;
                            case 13:
                                return 29;
                                break;
                            case 14:
                                return 47;
                                break;
                            case 15:
                                this.popState();
                                return 44;
                                break;
                            case 16:
                                this.popState();
                                return 44;
                                break;
                            case 17:
                                return 34;
                                break;
                            case 18:
                                return 39;
                                break;
                            case 19:
                                return 51;
                                break;
                            case 20:
                                return 48;
                                break;
                            case 21:
                                this.unput(yy_.yytext);
                                this.popState();
                                this.begin("com");
                                break;
                            case 22:
                                this.popState();
                                return 14;
                                break;
                            case 23:
                                return 48;
                                break;
                            case 24:
                                return 73;
                                break;
                            case 25:
                                return 72;
                                break;
                            case 26:
                                return 72;
                                break;
                            case 27:
                                return 87;
                                break;
                            case 28:
                                break;
                            case 29:
                                this.popState();
                                return 54;
                                break;
                            case 30:
                                this.popState();
                                return 33;
                                break;
                            case 31:
                                yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                                return 80;
                                break;
                            case 32:
                                yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                                return 80;
                                break;
                            case 33:
                                return 85;
                                break;
                            case 34:
                                return 82;
                                break;
                            case 35:
                                return 82;
                                break;
                            case 36:
                                return 83;
                                break;
                            case 37:
                                return 84;
                                break;
                            case 38:
                                return 81;
                                break;
                            case 39:
                                return 75;
                                break;
                            case 40:
                                return 77;
                                break;
                            case 41:
                                return 72;
                                break;
                            case 42:
                                yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                                return 72;
                                break;
                            case 43:
                                return "INVALID";
                                break;
                            case 44:
                                return 5;
                                break
                        }
                    };
                    lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
                    lexer.conditions = {
                        mu: {
                            rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                            inclusive: false
                        },
                        emu: {
                            rules: [2],
                            inclusive: false
                        },
                        com: {
                            rules: [6],
                            inclusive: false
                        },
                        raw: {
                            rules: [3, 4, 5],
                            inclusive: false
                        },
                        INITIAL: {
                            rules: [0, 1, 44],
                            inclusive: true
                        }
                    };
                    return lexer
                }();
                parser.lexer = lexer;

                function Parser() {
                    this.yy = {}
                }
                Parser.prototype = parser;
                parser.Parser = Parser;
                return new Parser
            }();
            exports.__esModule = true;
            exports["default"] = handlebars
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _visitor = __webpack_require__(25);
            var _visitor2 = _interopRequireDefault(_visitor);

            function WhitespaceControl() {
                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                this.options = options
            }
            WhitespaceControl.prototype = new _visitor2["default"];
            WhitespaceControl.prototype.Program = function(program) {
                var doStandalone = !this.options.ignoreStandalone;
                var isRoot = !this.isRootSeen;
                this.isRootSeen = true;
                var body = program.body;
                for (var i = 0, l = body.length; i < l; i++) {
                    var current = body[i],
                        strip = this.accept(current);
                    if (!strip) {
                        continue
                    }
                    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
                        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
                        openStandalone = strip.openStandalone && _isPrevWhitespace,
                        closeStandalone = strip.closeStandalone && _isNextWhitespace,
                        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
                    if (strip.close) {
                        omitRight(body, i, true)
                    }
                    if (strip.open) {
                        omitLeft(body, i, true)
                    }
                    if (doStandalone && inlineStandalone) {
                        omitRight(body, i);
                        if (omitLeft(body, i)) {
                            if (current.type === "PartialStatement") {
                                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1]
                            }
                        }
                    }
                    if (doStandalone && openStandalone) {
                        omitRight((current.program || current.inverse).body);
                        omitLeft(body, i)
                    }
                    if (doStandalone && closeStandalone) {
                        omitRight(body, i);
                        omitLeft((current.inverse || current.program).body)
                    }
                }
                return program
            };
            WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
                this.accept(block.program);
                this.accept(block.inverse);
                var program = block.program || block.inverse,
                    inverse = block.program && block.inverse,
                    firstInverse = inverse,
                    lastInverse = inverse;
                if (inverse && inverse.chained) {
                    firstInverse = inverse.body[0].program;
                    while (lastInverse.chained) {
                        lastInverse = lastInverse.body[lastInverse.body.length - 1].program
                    }
                }
                var strip = {
                    open: block.openStrip.open,
                    close: block.closeStrip.close,
                    openStandalone: isNextWhitespace(program.body),
                    closeStandalone: isPrevWhitespace((firstInverse || program).body)
                };
                if (block.openStrip.close) {
                    omitRight(program.body, null, true)
                }
                if (inverse) {
                    var inverseStrip = block.inverseStrip;
                    if (inverseStrip.open) {
                        omitLeft(program.body, null, true)
                    }
                    if (inverseStrip.close) {
                        omitRight(firstInverse.body, null, true)
                    }
                    if (block.closeStrip.open) {
                        omitLeft(lastInverse.body, null, true)
                    }
                    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
                        omitLeft(program.body);
                        omitRight(firstInverse.body)
                    }
                } else if (block.closeStrip.open) {
                    omitLeft(program.body, null, true)
                }
                return strip
            };
            WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
                return mustache.strip
            };
            WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
                var strip = node.strip || {};
                return {
                    inlineStandalone: true,
                    open: strip.open,
                    close: strip.close
                }
            };

            function isPrevWhitespace(body, i, isRoot) {
                if (i === undefined) {
                    i = body.length
                }
                var prev = body[i - 1],
                    sibling = body[i - 2];
                if (!prev) {
                    return isRoot
                }
                if (prev.type === "ContentStatement") {
                    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original)
                }
            }

            function isNextWhitespace(body, i, isRoot) {
                if (i === undefined) {
                    i = -1
                }
                var next = body[i + 1],
                    sibling = body[i + 2];
                if (!next) {
                    return isRoot
                }
                if (next.type === "ContentStatement") {
                    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original)
                }
            }
            // Marks the node to the right of the position as omitted.
            // I.e. {{foo}}' ' will mark the ' ' node as omitted.
            function omitRight(body, i, multiple) {
                var current = body[i == null ? 0 : i + 1];
                if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) {
                    return
                }
                var original = current.value;
                current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
                current.rightStripped = current.value !== original
            }
            // Marks the node to the left of the position as omitted.
            // I.e. ' '{{foo}} will mark the ' ' node as omitted.
            function omitLeft(body, i, multiple) {
                var current = body[i == null ? body.length - 1 : i - 1];
                if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) {
                    return
                }
                // We omit the last node if it's whitespace only and not preceeded by a non-content node.
                var original = current.value;
                current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
                current.leftStripped = current.value !== original;
                return current.leftStripped
            }
            exports["default"] = WhitespaceControl;
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);

            function Visitor() {
                this.parents = []
            }
            Visitor.prototype = {
                constructor: Visitor,
                mutating: false,
                acceptKey: function acceptKey(node, name) {
                    var value = this.accept(node[name]);
                    if (this.mutating) {
                        if (value && !Visitor.prototype[value.type]) {
                            throw new _exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type)
                        }
                        node[name] = value
                    }
                },
                acceptRequired: function acceptRequired(node, name) {
                    this.acceptKey(node, name);
                    if (!node[name]) {
                        throw new _exception2["default"](node.type + " requires " + name)
                    }
                },
                acceptArray: function acceptArray(array) {
                    for (var i = 0, l = array.length; i < l; i++) {
                        this.acceptKey(array, i);
                        if (!array[i]) {
                            array.splice(i, 1);
                            i--;
                            l--
                        }
                    }
                },
                accept: function accept(object) {
                    if (!object) {
                        return
                    }
                    if (!this[object.type]) {
                        throw new _exception2["default"]("Unknown type: " + object.type, object)
                    }
                    if (this.current) {
                        this.parents.unshift(this.current)
                    }
                    this.current = object;
                    var ret = this[object.type](object);
                    this.current = this.parents.shift();
                    if (!this.mutating || ret) {
                        return ret
                    } else if (ret !== false) {
                        return object
                    }
                },
                Program: function Program(program) {
                    this.acceptArray(program.body)
                },
                MustacheStatement: visitSubExpression,
                Decorator: visitSubExpression,
                BlockStatement: visitBlock,
                DecoratorBlock: visitBlock,
                PartialStatement: visitPartial,
                PartialBlockStatement: function PartialBlockStatement(partial) {
                    visitPartial.call(this, partial);
                    this.acceptKey(partial, "program")
                },
                ContentStatement: function ContentStatement() {},
                CommentStatement: function CommentStatement() {},
                SubExpression: visitSubExpression,
                PathExpression: function PathExpression() {},
                StringLiteral: function StringLiteral() {},
                NumberLiteral: function NumberLiteral() {},
                BooleanLiteral: function BooleanLiteral() {},
                UndefinedLiteral: function UndefinedLiteral() {},
                NullLiteral: function NullLiteral() {},
                Hash: function Hash(hash) {
                    this.acceptArray(hash.pairs)
                },
                HashPair: function HashPair(pair) {
                    this.acceptRequired(pair, "value")
                }
            };

            function visitSubExpression(mustache) {
                this.acceptRequired(mustache, "path");
                this.acceptArray(mustache.params);
                this.acceptKey(mustache, "hash")
            }

            function visitBlock(block) {
                visitSubExpression.call(this, block);
                this.acceptKey(block, "program");
                this.acceptKey(block, "inverse")
            }

            function visitPartial(partial) {
                this.acceptRequired(partial, "name");
                this.acceptArray(partial.params);
                this.acceptKey(partial, "hash")
            }
            exports["default"] = Visitor;
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.SourceLocation = SourceLocation;
            exports.id = id;
            exports.stripFlags = stripFlags;
            exports.stripComment = stripComment;
            exports.preparePath = preparePath;
            exports.prepareMustache = prepareMustache;
            exports.prepareRawBlock = prepareRawBlock;
            exports.prepareBlock = prepareBlock;
            exports.prepareProgram = prepareProgram;
            exports.preparePartialBlock = preparePartialBlock;
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);

            function validateClose(open, close) {
                close = close.path ? close.path.original : close;
                if (open.path.original !== close) {
                    var errorNode = {
                        loc: open.path.loc
                    };
                    throw new _exception2["default"](open.path.original + " doesn't match " + close, errorNode)
                }
            }

            function SourceLocation(source, locInfo) {
                this.source = source;
                this.start = {
                    line: locInfo.first_line,
                    column: locInfo.first_column
                };
                this.end = {
                    line: locInfo.last_line,
                    column: locInfo.last_column
                }
            }

            function id(token) {
                if (/^\[.*\]$/.test(token)) {
                    return token.substr(1, token.length - 2)
                } else {
                    return token
                }
            }

            function stripFlags(open, close) {
                return {
                    open: open.charAt(2) === "~",
                    close: close.charAt(close.length - 3) === "~"
                }
            }

            function stripComment(comment) {
                return comment.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
            }

            function preparePath(data, parts, loc) {
                loc = this.locInfo(loc);
                var original = data ? "@" : "",
                    dig = [],
                    depth = 0,
                    depthString = "";
                for (var i = 0, l = parts.length; i < l; i++) {
                    var part = parts[i].part,
                        isLiteral = parts[i].original !== part;
                    original += (parts[i].separator || "") + part;
                    if (!isLiteral && (part === ".." || part === "." || part === "this")) {
                        if (dig.length > 0) {
                            throw new _exception2["default"]("Invalid path: " + original, {
                                loc: loc
                            })
                        } else if (part === "..") {
                            depth++;
                            depthString += "../"
                        }
                    } else {
                        dig.push(part)
                    }
                }
                return {
                    type: "PathExpression",
                    data: data,
                    depth: depth,
                    parts: dig,
                    original: original,
                    loc: loc
                }
            }

            function prepareMustache(path, params, hash, open, strip, locInfo) {
                var escapeFlag = open.charAt(3) || open.charAt(2),
                    escaped = escapeFlag !== "{" && escapeFlag !== "&";
                var decorator = /\*/.test(open);
                return {
                    type: decorator ? "Decorator" : "MustacheStatement",
                    path: path,
                    params: params,
                    hash: hash,
                    escaped: escaped,
                    strip: strip,
                    loc: this.locInfo(locInfo)
                }
            }

            function prepareRawBlock(openRawBlock, contents, close, locInfo) {
                validateClose(openRawBlock, close);
                locInfo = this.locInfo(locInfo);
                var program = {
                    type: "Program",
                    body: contents,
                    strip: {},
                    loc: locInfo
                };
                return {
                    type: "BlockStatement",
                    path: openRawBlock.path,
                    params: openRawBlock.params,
                    hash: openRawBlock.hash,
                    program: program,
                    openStrip: {},
                    inverseStrip: {},
                    closeStrip: {},
                    loc: locInfo
                }
            }

            function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
                if (close && close.path) {
                    validateClose(openBlock, close)
                }
                var decorator = /\*/.test(openBlock.open);
                program.blockParams = openBlock.blockParams;
                var inverse = undefined,
                    inverseStrip = undefined;
                if (inverseAndProgram) {
                    if (decorator) {
                        throw new _exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram)
                    }
                    if (inverseAndProgram.chain) {
                        inverseAndProgram.program.body[0].closeStrip = close.strip
                    }
                    inverseStrip = inverseAndProgram.strip;
                    inverse = inverseAndProgram.program
                }
                if (inverted) {
                    inverted = inverse;
                    inverse = program;
                    program = inverted
                }
                return {
                    type: decorator ? "DecoratorBlock" : "BlockStatement",
                    path: openBlock.path,
                    params: openBlock.params,
                    hash: openBlock.hash,
                    program: program,
                    inverse: inverse,
                    openStrip: openBlock.strip,
                    inverseStrip: inverseStrip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                }
            }

            function prepareProgram(statements, loc) {
                if (!loc && statements.length) {
                    var firstLoc = statements[0].loc,
                        lastLoc = statements[statements.length - 1].loc;
                    if (firstLoc && lastLoc) {
                        loc = {
                            source: firstLoc.source,
                            start: {
                                line: firstLoc.start.line,
                                column: firstLoc.start.column
                            },
                            end: {
                                line: lastLoc.end.line,
                                column: lastLoc.end.column
                            }
                        }
                    }
                }
                return {
                    type: "Program",
                    body: statements,
                    strip: {},
                    loc: loc
                }
            }

            function preparePartialBlock(open, program, close, locInfo) {
                validateClose(open, close);
                return {
                    type: "PartialBlockStatement",
                    name: open.path,
                    params: open.params,
                    hash: open.hash,
                    program: program,
                    openStrip: open.strip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                }
            }
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.Compiler = Compiler;
            exports.precompile = precompile;
            exports.compile = compile;
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);
            var _utils = __webpack_require__(5);
            var _ast = __webpack_require__(21);
            var _ast2 = _interopRequireDefault(_ast);
            var slice = [].slice;

            function Compiler() {}
            Compiler.prototype = {
                compiler: Compiler,
                equals: function equals(other) {
                    var len = this.opcodes.length;
                    if (other.opcodes.length !== len) {
                        return false
                    }
                    for (var i = 0; i < len; i++) {
                        var opcode = this.opcodes[i],
                            otherOpcode = other.opcodes[i];
                        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
                            return false
                        }
                    }
                    len = this.children.length;
                    for (var i = 0; i < len; i++) {
                        if (!this.children[i].equals(other.children[i])) {
                            return false
                        }
                    }
                    return true
                },
                guid: 0,
                compile: function compile(program, options) {
                    this.sourceNode = [];
                    this.opcodes = [];
                    this.children = [];
                    this.options = options;
                    this.stringParams = options.stringParams;
                    this.trackIds = options.trackIds;
                    options.blockParams = options.blockParams || [];
                    var knownHelpers = options.knownHelpers;
                    options.knownHelpers = {
                        helperMissing: true,
                        blockHelperMissing: true,
                        each: true,
                        "if": true,
                        unless: true,
                        "with": true,
                        log: true,
                        lookup: true
                    };
                    if (knownHelpers) {
                        for (var _name in knownHelpers) {
                            if (_name in knownHelpers) {
                                options.knownHelpers[_name] = knownHelpers[_name]
                            }
                        }
                    }
                    return this.accept(program)
                },
                compileProgram: function compileProgram(program) {
                    var childCompiler = new this.compiler,
                        result = childCompiler.compile(program, this.options),
                        guid = this.guid++;
                    this.usePartial = this.usePartial || result.usePartial;
                    this.children[guid] = result;
                    this.useDepths = this.useDepths || result.useDepths;
                    return guid
                },
                accept: function accept(node) {
                    if (!this[node.type]) {
                        throw new _exception2["default"]("Unknown type: " + node.type, node)
                    }
                    this.sourceNode.unshift(node);
                    var ret = this[node.type](node);
                    this.sourceNode.shift();
                    return ret
                },
                Program: function Program(program) {
                    this.options.blockParams.unshift(program.blockParams);
                    var body = program.body,
                        bodyLength = body.length;
                    for (var i = 0; i < bodyLength; i++) {
                        this.accept(body[i])
                    }
                    this.options.blockParams.shift();
                    this.isSimple = bodyLength === 1;
                    this.blockParams = program.blockParams ? program.blockParams.length : 0;
                    return this
                },
                BlockStatement: function BlockStatement(block) {
                    transformLiteralToPath(block);
                    var program = block.program,
                        inverse = block.inverse;
                    program = program && this.compileProgram(program);
                    inverse = inverse && this.compileProgram(inverse);
                    var type = this.classifySexpr(block);
                    if (type === "helper") {
                        this.helperSexpr(block, program, inverse)
                    } else if (type === "simple") {
                        this.simpleSexpr(block);
                        this.opcode("pushProgram", program);
                        this.opcode("pushProgram", inverse);
                        this.opcode("emptyHash");
                        this.opcode("blockValue", block.path.original)
                    } else {
                        this.ambiguousSexpr(block, program, inverse);
                        this.opcode("pushProgram", program);
                        this.opcode("pushProgram", inverse);
                        this.opcode("emptyHash");
                        this.opcode("ambiguousBlockValue")
                    }
                    this.opcode("append")
                },
                DecoratorBlock: function DecoratorBlock(decorator) {
                    var program = decorator.program && this.compileProgram(decorator.program);
                    var params = this.setupFullMustacheParams(decorator, program, undefined),
                        path = decorator.path;
                    this.useDecorators = true;
                    this.opcode("registerDecorator", params.length, path.original)
                },
                PartialStatement: function PartialStatement(partial) {
                    this.usePartial = true;
                    var program = partial.program;
                    if (program) {
                        program = this.compileProgram(partial.program)
                    }
                    var params = partial.params;
                    if (params.length > 1) {
                        throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial)
                    } else if (!params.length) {
                        if (this.options.explicitPartialContext) {
                            this.opcode("pushLiteral", "undefined")
                        } else {
                            params.push({
                                type: "PathExpression",
                                parts: [],
                                depth: 0
                            })
                        }
                    }
                    var partialName = partial.name.original,
                        isDynamic = partial.name.type === "SubExpression";
                    if (isDynamic) {
                        this.accept(partial.name)
                    }
                    this.setupFullMustacheParams(partial, program, undefined, true);
                    var indent = partial.indent || "";
                    if (this.options.preventIndent && indent) {
                        this.opcode("appendContent", indent);
                        indent = ""
                    }
                    this.opcode("invokePartial", isDynamic, partialName, indent);
                    this.opcode("append")
                },
                PartialBlockStatement: function PartialBlockStatement(partialBlock) {
                    this.PartialStatement(partialBlock)
                },
                MustacheStatement: function MustacheStatement(mustache) {
                    this.SubExpression(mustache);
                    if (mustache.escaped && !this.options.noEscape) {
                        this.opcode("appendEscaped")
                    } else {
                        this.opcode("append")
                    }
                },
                Decorator: function Decorator(decorator) {
                    this.DecoratorBlock(decorator)
                },
                ContentStatement: function ContentStatement(content) {
                    if (content.value) {
                        this.opcode("appendContent", content.value)
                    }
                },
                CommentStatement: function CommentStatement() {},
                SubExpression: function SubExpression(sexpr) {
                    transformLiteralToPath(sexpr);
                    var type = this.classifySexpr(sexpr);
                    if (type === "simple") {
                        this.simpleSexpr(sexpr)
                    } else if (type === "helper") {
                        this.helperSexpr(sexpr)
                    } else {
                        this.ambiguousSexpr(sexpr)
                    }
                },
                ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
                    var path = sexpr.path,
                        name = path.parts[0],
                        isBlock = program != null || inverse != null;
                    this.opcode("getContext", path.depth);
                    this.opcode("pushProgram", program);
                    this.opcode("pushProgram", inverse);
                    path.strict = true;
                    this.accept(path);
                    this.opcode("invokeAmbiguous", name, isBlock)
                },
                simpleSexpr: function simpleSexpr(sexpr) {
                    var path = sexpr.path;
                    path.strict = true;
                    this.accept(path);
                    this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function helperSexpr(sexpr, program, inverse) {
                    var params = this.setupFullMustacheParams(sexpr, program, inverse),
                        path = sexpr.path,
                        name = path.parts[0];
                    if (this.options.knownHelpers[name]) {
                        this.opcode("invokeKnownHelper", params.length, name)
                    } else if (this.options.knownHelpersOnly) {
                        throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr)
                    } else {
                        path.strict = true;
                        path.falsy = true;
                        this.accept(path);
                        this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path))
                    }
                },
                PathExpression: function PathExpression(path) {
                    this.addDepth(path.depth);
                    this.opcode("getContext", path.depth);
                    var name = path.parts[0],
                        scoped = _ast2["default"].helpers.scopedId(path),
                        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
                    if (blockParamId) {
                        this.opcode("lookupBlockParam", blockParamId, path.parts)
                    } else if (!name) {
                        this.opcode("pushContext")
                    } else if (path.data) {
                        this.options.data = true;
                        this.opcode("lookupData", path.depth, path.parts, path.strict)
                    } else {
                        this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped)
                    }
                },
                StringLiteral: function StringLiteral(string) {
                    this.opcode("pushString", string.value)
                },
                NumberLiteral: function NumberLiteral(number) {
                    this.opcode("pushLiteral", number.value)
                },
                BooleanLiteral: function BooleanLiteral(bool) {
                    this.opcode("pushLiteral", bool.value)
                },
                UndefinedLiteral: function UndefinedLiteral() {
                    this.opcode("pushLiteral", "undefined")
                },
                NullLiteral: function NullLiteral() {
                    this.opcode("pushLiteral", "null")
                },
                Hash: function Hash(hash) {
                    var pairs = hash.pairs,
                        i = 0,
                        l = pairs.length;
                    this.opcode("pushHash");
                    for (; i < l; i++) {
                        this.pushParam(pairs[i].value)
                    }
                    while (i--) {
                        this.opcode("assignToHash", pairs[i].key)
                    }
                    this.opcode("popHash")
                },
                opcode: function opcode(name) {
                    this.opcodes.push({
                        opcode: name,
                        args: slice.call(arguments, 1),
                        loc: this.sourceNode[0].loc
                    })
                },
                addDepth: function addDepth(depth) {
                    if (!depth) {
                        return
                    }
                    this.useDepths = true
                },
                classifySexpr: function classifySexpr(sexpr) {
                    var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);
                    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
                    var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
                    var isEligible = !isBlockParam && (isHelper || isSimple);
                    if (isEligible && !isHelper) {
                        var _name2 = sexpr.path.parts[0],
                            options = this.options;
                        if (options.knownHelpers[_name2]) {
                            isHelper = true
                        } else if (options.knownHelpersOnly) {
                            isEligible = false
                        }
                    }
                    if (isHelper) {
                        return "helper"
                    } else if (isEligible) {
                        return "ambiguous"
                    } else {
                        return "simple"
                    }
                },
                pushParams: function pushParams(params) {
                    for (var i = 0, l = params.length; i < l; i++) {
                        this.pushParam(params[i])
                    }
                },
                pushParam: function pushParam(val) {
                    var value = val.value != null ? val.value : val.original || "";
                    if (this.stringParams) {
                        if (value.replace) {
                            value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")
                        }
                        if (val.depth) {
                            this.addDepth(val.depth)
                        }
                        this.opcode("getContext", val.depth || 0);
                        this.opcode("pushStringParam", value, val.type);
                        if (val.type === "SubExpression") {
                            this.accept(val)
                        }
                    } else {
                        if (this.trackIds) {
                            var blockParamIndex = undefined;
                            if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) {
                                blockParamIndex = this.blockParamIndex(val.parts[0])
                            }
                            if (blockParamIndex) {
                                var blockParamChild = val.parts.slice(1).join(".");
                                this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild)
                            } else {
                                value = val.original || value;
                                if (value.replace) {
                                    value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")
                                }
                                this.opcode("pushId", val.type, value)
                            }
                        }
                        this.accept(val)
                    }
                },
                setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
                    var params = sexpr.params;
                    this.pushParams(params);
                    this.opcode("pushProgram", program);
                    this.opcode("pushProgram", inverse);
                    if (sexpr.hash) {
                        this.accept(sexpr.hash)
                    } else {
                        this.opcode("emptyHash", omitEmpty)
                    }
                    return params
                },
                blockParamIndex: function blockParamIndex(name) {
                    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
                        var blockParams = this.options.blockParams[depth],
                            param = blockParams && _utils.indexOf(blockParams, name);
                        if (blockParams && param >= 0) {
                            return [depth, param]
                        }
                    }
                }
            };

            function precompile(input, options, env) {
                if (input == null || typeof input !== "string" && input.type !== "Program") {
                    throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input)
                }
                options = options || {};
                if (!("data" in options)) {
                    options.data = true
                }
                if (options.compat) {
                    options.useDepths = true
                }
                var ast = env.parse(input, options),
                    environment = (new env.Compiler).compile(ast, options);
                return (new env.JavaScriptCompiler).compile(environment, options)
            }

            function compile(input, options, env) {
                if (options === undefined) options = {};
                if (input == null || typeof input !== "string" && input.type !== "Program") {
                    throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input)
                }
                if (!("data" in options)) {
                    options.data = true
                }
                if (options.compat) {
                    options.useDepths = true
                }
                var compiled = undefined;

                function compileInput() {
                    var ast = env.parse(input, options),
                        environment = (new env.Compiler).compile(ast, options),
                        templateSpec = (new env.JavaScriptCompiler).compile(environment, options, undefined, true);
                    return env.template(templateSpec)
                }

                function ret(context, execOptions) {
                    if (!compiled) {
                        compiled = compileInput()
                    }
                    return compiled.call(this, context, execOptions)
                }
                ret._setup = function(setupOptions) {
                    if (!compiled) {
                        compiled = compileInput()
                    }
                    return compiled._setup(setupOptions)
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (!compiled) {
                        compiled = compileInput()
                    }
                    return compiled._child(i, data, blockParams, depths)
                };
                return ret
            }

            function argEquals(a, b) {
                if (a === b) {
                    return true
                }
                if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
                    for (var i = 0; i < a.length; i++) {
                        if (!argEquals(a[i], b[i])) {
                            return false
                        }
                    }
                    return true
                }
            }

            function transformLiteralToPath(sexpr) {
                if (!sexpr.path.parts) {
                    var literal = sexpr.path;
                    sexpr.path = {
                        type: "PathExpression",
                        data: false,
                        depth: 0,
                        parts: [literal.original + ""],
                        original: literal.original + "",
                        loc: literal.loc
                    }
                }
            }
        }, function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(1)["default"];
            exports.__esModule = true;
            var _base = __webpack_require__(4);
            var _exception = __webpack_require__(6);
            var _exception2 = _interopRequireDefault(_exception);
            var _utils = __webpack_require__(5);
            var _codeGen = __webpack_require__(29);
            var _codeGen2 = _interopRequireDefault(_codeGen);

            function Literal(value) {
                this.value = value
            }

            function JavaScriptCompiler() {}
            JavaScriptCompiler.prototype = {
                nameLookup: function nameLookup(parent, name) {
                    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                        return [parent, ".", name]
                    } else {
                        return [parent, "[", JSON.stringify(name), "]"]
                    }
                },
                depthedLookup: function depthedLookup(name) {
                    return [this.aliasable("container.lookup"), '(depths, "', name, '")']
                },
                compilerInfo: function compilerInfo() {
                    var revision = _base.COMPILER_REVISION,
                        versions = _base.REVISION_CHANGES[revision];
                    return [revision, versions]
                },
                appendToBuffer: function appendToBuffer(source, location, explicit) {
                    if (!_utils.isArray(source)) {
                        source = [source]
                    }
                    source = this.source.wrap(source, location);
                    if (this.environment.isSimple) {
                        return ["return ", source, ";"]
                    } else if (explicit) {
                        // operations to ensure that the emitted code goes in the correct location.
                        return ["buffer += ", source, ";"]
                    } else {
                        source.appendToBuffer = true;
                        return source
                    }
                },
                initializeBuffer: function initializeBuffer() {
                    return this.quotedString("")
                },
                compile: function compile(environment, options, context, asObject) {
                    this.environment = environment;
                    this.options = options;
                    this.stringParams = this.options.stringParams;
                    this.trackIds = this.options.trackIds;
                    this.precompile = !asObject;
                    this.name = this.environment.name;
                    this.isChild = !!context;
                    this.context = context || {
                        decorators: [],
                        programs: [],
                        environments: []
                    };
                    this.preamble();
                    this.stackSlot = 0;
                    this.stackVars = [];
                    this.aliases = {};
                    this.registers = {
                        list: []
                    };
                    this.hashes = [];
                    this.compileStack = [];
                    this.inlineStack = [];
                    this.blockParams = [];
                    this.compileChildren(environment, options);
                    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
                    this.useBlockParams = this.useBlockParams || environment.useBlockParams;
                    var opcodes = environment.opcodes,
                        opcode = undefined,
                        firstLoc = undefined,
                        i = undefined,
                        l = undefined;
                    for (i = 0, l = opcodes.length; i < l; i++) {
                        opcode = opcodes[i];
                        this.source.currentLocation = opcode.loc;
                        firstLoc = firstLoc || opcode.loc;
                        this[opcode.opcode].apply(this, opcode.args)
                    }
                    this.source.currentLocation = firstLoc;
                    this.pushSource("");
                    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
                        throw new _exception2["default"]("Compile completed with content left on stack")
                    }
                    if (!this.decorators.isEmpty()) {
                        this.useDecorators = true;
                        this.decorators.prepend("var decorators = container.decorators;\n");
                        this.decorators.push("return fn;");
                        if (asObject) {
                            this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()])
                        } else {
                            this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
                            this.decorators.push("}\n");
                            this.decorators = this.decorators.merge()
                        }
                    } else {
                        this.decorators = undefined
                    }
                    var fn = this.createFunctionContext(asObject);
                    if (!this.isChild) {
                        var ret = {
                            compiler: this.compilerInfo(),
                            main: fn
                        };
                        if (this.decorators) {
                            ret.main_d = this.decorators;
                            ret.useDecorators = true
                        }
                        var _context = this.context;
                        var programs = _context.programs;
                        var decorators = _context.decorators;
                        for (i = 0, l = programs.length; i < l; i++) {
                            if (programs[i]) {
                                ret[i] = programs[i];
                                if (decorators[i]) {
                                    ret[i + "_d"] = decorators[i];
                                    ret.useDecorators = true
                                }
                            }
                        }
                        if (this.environment.usePartial) {
                            ret.usePartial = true
                        }
                        if (this.options.data) {
                            ret.useData = true
                        }
                        if (this.useDepths) {
                            ret.useDepths = true
                        }
                        if (this.useBlockParams) {
                            ret.useBlockParams = true
                        }
                        if (this.options.compat) {
                            ret.compat = true
                        }
                        if (!asObject) {
                            ret.compiler = JSON.stringify(ret.compiler);
                            this.source.currentLocation = {
                                start: {
                                    line: 1,
                                    column: 0
                                }
                            };
                            ret = this.objectLiteral(ret);
                            if (options.srcName) {
                                ret = ret.toStringWithSourceMap({
                                    file: options.destName
                                });
                                ret.map = ret.map && ret.map.toString()
                            } else {
                                ret = ret.toString()
                            }
                        } else {
                            ret.compilerOptions = this.options
                        }
                        return ret
                    } else {
                        return fn
                    }
                },
                preamble: function preamble() {
                    this.lastContext = 0;
                    this.source = new _codeGen2["default"](this.options.srcName);
                    this.decorators = new _codeGen2["default"](this.options.srcName)
                },
                createFunctionContext: function createFunctionContext(asObject) {
                    var varDeclarations = "";
                    var locals = this.stackVars.concat(this.registers.list);
                    if (locals.length > 0) {
                        varDeclarations += ", " + locals.join(", ")
                    }
                    var aliasCount = 0;
                    for (var alias in this.aliases) {
                        var node = this.aliases[alias];
                        if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
                            varDeclarations += ", alias" + ++aliasCount + "=" + alias;
                            node.children[0] = "alias" + aliasCount
                        }
                    }
                    var params = ["container", "depth0", "helpers", "partials", "data"];
                    if (this.useBlockParams || this.useDepths) {
                        params.push("blockParams")
                    }
                    if (this.useDepths) {
                        params.push("depths")
                    }
                    var source = this.mergeSource(varDeclarations);
                    if (asObject) {
                        params.push(source);
                        return Function.apply(this, params)
                    } else {
                        return this.source.wrap(["function(", params.join(","), ") {\n  ", source, "}"])
                    }
                },
                mergeSource: function mergeSource(varDeclarations) {
                    var isSimple = this.environment.isSimple,
                        appendOnly = !this.forceBuffer,
                        appendFirst = undefined,
                        sourceSeen = undefined,
                        bufferStart = undefined,
                        bufferEnd = undefined;
                    this.source.each(function(line) {
                        if (line.appendToBuffer) {
                            if (bufferStart) {
                                line.prepend("  + ")
                            } else {
                                bufferStart = line
                            }
                            bufferEnd = line
                        } else {
                            if (bufferStart) {
                                if (!sourceSeen) {
                                    appendFirst = true
                                } else {
                                    bufferStart.prepend("buffer += ")
                                }
                                bufferEnd.add(";");
                                bufferStart = bufferEnd = undefined
                            }
                            sourceSeen = true;
                            if (!isSimple) {
                                appendOnly = false
                            }
                        }
                    });
                    if (appendOnly) {
                        if (bufferStart) {
                            bufferStart.prepend("return ");
                            bufferEnd.add(";")
                        } else if (!sourceSeen) {
                            this.source.push('return "";')
                        }
                    } else {
                        varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
                        if (bufferStart) {
                            bufferStart.prepend("return buffer + ");
                            bufferEnd.add(";")
                        } else {
                            this.source.push("return buffer;")
                        }
                    }
                    if (varDeclarations) {
                        this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"))
                    }
                    return this.source.merge()
                },
                blockValue: function blockValue(name) {
                    var blockHelperMissing = this.aliasable("helpers.blockHelperMissing"),
                        params = [this.contextName(0)];
                    this.setupHelperArgs(name, 0, params);
                    var blockName = this.popStack();
                    params.splice(1, 0, blockName);
                    this.push(this.source.functionCall(blockHelperMissing, "call", params))
                },
                ambiguousBlockValue: function ambiguousBlockValue() {
                    var blockHelperMissing = this.aliasable("helpers.blockHelperMissing"),
                        params = [this.contextName(0)];
                    this.setupHelperArgs("", 0, params, true);
                    this.flushInline();
                    var current = this.topStack();
                    params.splice(1, 0, current);
                    this.pushSource(["if (!", this.lastHelper, ") { ", current, " = ", this.source.functionCall(blockHelperMissing, "call", params), "}"])
                },
                appendContent: function appendContent(content) {
                    if (this.pendingContent) {
                        content = this.pendingContent + content
                    } else {
                        this.pendingLocation = this.source.currentLocation
                    }
                    this.pendingContent = content
                },
                append: function append() {
                    if (this.isInline()) {
                        this.replaceStack(function(current) {
                            return [" != null ? ", current, ' : ""']
                        });
                        this.pushSource(this.appendToBuffer(this.popStack()))
                    } else {
                        var local = this.popStack();
                        this.pushSource(["if (", local, " != null) { ", this.appendToBuffer(local, undefined, true), " }"]);
                        if (this.environment.isSimple) {
                            this.pushSource(["else { ", this.appendToBuffer("''", undefined, true), " }"])
                        }
                    }
                },
                appendEscaped: function appendEscaped() {
                    this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
                },
                getContext: function getContext(depth) {
                    this.lastContext = depth
                },
                pushContext: function pushContext() {
                    this.pushStackLiteral(this.contextName(this.lastContext))
                },
                lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
                    var i = 0;
                    if (!scoped && this.options.compat && !this.lastContext) {
                        this.push(this.depthedLookup(parts[i++]))
                    } else {
                        this.pushContext()
                    }
                    this.resolvePath("context", parts, i, falsy, strict)
                },
                lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
                    this.useBlockParams = true;
                    this.push(["blockParams[", blockParamId[0], "][", blockParamId[1], "]"]);
                    this.resolvePath("context", parts, 1)
                },
                lookupData: function lookupData(depth, parts, strict) {
                    if (!depth) {
                        this.pushStackLiteral("data")
                    } else {
                        this.pushStackLiteral("container.data(data, " + depth + ")")
                    }
                    this.resolvePath("data", parts, 0, true, strict)
                },
                resolvePath: function resolvePath(type, parts, i, falsy, strict) {
                    var _this = this;
                    if (this.options.strict || this.options.assumeObjects) {
                        this.push(strictLookup(this.options.strict && strict, this, parts, type));
                        return
                    }
                    var len = parts.length;
                    for (; i < len; i++) {
                        this.replaceStack(function(current) {
                            var lookup = _this.nameLookup(current, parts[i], type);
                            if (!falsy) {
                                return [" != null ? ", lookup, " : ", current]
                            } else {
                                return [" && ", lookup]
                            }
                        })
                    }
                },
                resolvePossibleLambda: function resolvePossibleLambda() {
                    this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                },
                pushStringParam: function pushStringParam(string, type) {
                    this.pushContext();
                    this.pushString(type);
                    if (type !== "SubExpression") {
                        if (typeof string === "string") {
                            this.pushString(string)
                        } else {
                            this.pushStackLiteral(string)
                        }
                    }
                },
                emptyHash: function emptyHash(omitEmpty) {
                    if (this.trackIds) {
                        this.push("{}")
                    }
                    if (this.stringParams) {
                        this.push("{}");
                        this.push("{}")
                    }
                    this.pushStackLiteral(omitEmpty ? "undefined" : "{}")
                },
                pushHash: function pushHash() {
                    if (this.hash) {
                        this.hashes.push(this.hash)
                    }
                    this.hash = {
                        values: [],
                        types: [],
                        contexts: [],
                        ids: []
                    }
                },
                popHash: function popHash() {
                    var hash = this.hash;
                    this.hash = this.hashes.pop();
                    if (this.trackIds) {
                        this.push(this.objectLiteral(hash.ids))
                    }
                    if (this.stringParams) {
                        this.push(this.objectLiteral(hash.contexts));
                        this.push(this.objectLiteral(hash.types))
                    }
                    this.push(this.objectLiteral(hash.values))
                },
                pushString: function pushString(string) {
                    this.pushStackLiteral(this.quotedString(string))
                },
                pushLiteral: function pushLiteral(value) {
                    this.pushStackLiteral(value)
                },
                pushProgram: function pushProgram(guid) {
                    if (guid != null) {
                        this.pushStackLiteral(this.programExpression(guid))
                    } else {
                        this.pushStackLiteral(null)
                    }
                },
                registerDecorator: function registerDecorator(paramSize, name) {
                    var foundDecorator = this.nameLookup("decorators", name, "decorator"),
                        options = this.setupHelperArgs(name, paramSize);
                    this.decorators.push(["fn = ", this.decorators.functionCall(foundDecorator, "", ["fn", "props", "container", options]), " || fn;"])
                },
                invokeHelper: function invokeHelper(paramSize, name, isSimple) {
                    var nonHelper = this.popStack(),
                        helper = this.setupHelper(paramSize, name),
                        simple = isSimple ? [helper.name, " || "] : "";
                    var lookup = ["("].concat(simple, nonHelper);
                    if (!this.options.strict) {
                        lookup.push(" || ", this.aliasable("helpers.helperMissing"))
                    }
                    lookup.push(")");
                    this.push(this.source.functionCall(lookup, "call", helper.callParams))
                },
                invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
                    var helper = this.setupHelper(paramSize, name);
                    this.push(this.source.functionCall(helper.name, "call", helper.callParams))
                },
                // This operation emits more code than the other options,
                invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
                    this.useRegister("helper");
                    var nonHelper = this.popStack();
                    this.emptyHash();
                    var helper = this.setupHelper(0, name, helperCall);
                    var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
                    var lookup = ["(", "(helper = ", helperName, " || ", nonHelper, ")"];
                    if (!this.options.strict) {
                        lookup[0] = "(helper = ";
                        lookup.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))
                    }
                    this.push(["(", lookup, helper.paramsInit ? ["),(", helper.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", helper.callParams), " : helper))"])
                },
                invokePartial: function invokePartial(isDynamic, name, indent) {
                    var params = [],
                        options = this.setupParams(name, 1, params);
                    if (isDynamic) {
                        name = this.popStack();
                        delete options.name
                    }
                    if (indent) {
                        options.indent = JSON.stringify(indent)
                    }
                    options.helpers = "helpers";
                    options.partials = "partials";
                    options.decorators = "container.decorators";
                    if (!isDynamic) {
                        params.unshift(this.nameLookup("partials", name, "partial"))
                    } else {
                        params.unshift(name)
                    }
                    if (this.options.compat) {
                        options.depths = "depths"
                    }
                    options = this.objectLiteral(options);
                    params.push(options);
                    this.push(this.source.functionCall("container.invokePartial", "", params))
                },
                assignToHash: function assignToHash(key) {
                    var value = this.popStack(),
                        context = undefined,
                        type = undefined,
                        id = undefined;
                    if (this.trackIds) {
                        id = this.popStack()
                    }
                    if (this.stringParams) {
                        type = this.popStack();
                        context = this.popStack()
                    }
                    var hash = this.hash;
                    if (context) {
                        hash.contexts[key] = context
                    }
                    if (type) {
                        hash.types[key] = type
                    }
                    if (id) {
                        hash.ids[key] = id
                    }
                    hash.values[key] = value
                },
                pushId: function pushId(type, name, child) {
                    if (type === "BlockParam") {
                        this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""))
                    } else if (type === "PathExpression") {
                        this.pushString(name)
                    } else if (type === "SubExpression") {
                        this.pushStackLiteral("true")
                    } else {
                        this.pushStackLiteral("null")
                    }
                },
                compiler: JavaScriptCompiler,
                compileChildren: function compileChildren(environment, options) {
                    var children = environment.children,
                        child = undefined,
                        compiler = undefined;
                    for (var i = 0, l = children.length; i < l; i++) {
                        child = children[i];
                        compiler = new this.compiler;
                        var index = this.matchExistingProgram(child);
                        if (index == null) {
                            this.context.programs.push("");
                            index = this.context.programs.length;
                            child.index = index;
                            child.name = "program" + index;
                            this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                            this.context.decorators[index] = compiler.decorators;
                            this.context.environments[index] = child;
                            this.useDepths = this.useDepths || compiler.useDepths;
                            this.useBlockParams = this.useBlockParams || compiler.useBlockParams
                        } else {
                            child.index = index;
                            child.name = "program" + index;
                            this.useDepths = this.useDepths || child.useDepths;
                            this.useBlockParams = this.useBlockParams || child.useBlockParams
                        }
                    }
                },
                matchExistingProgram: function matchExistingProgram(child) {
                    for (var i = 0, len = this.context.environments.length; i < len; i++) {
                        var environment = this.context.environments[i];
                        if (environment && environment.equals(child)) {
                            return i
                        }
                    }
                },
                programExpression: function programExpression(guid) {
                    var child = this.environment.children[guid],
                        programParams = [child.index, "data", child.blockParams];
                    if (this.useBlockParams || this.useDepths) {
                        programParams.push("blockParams")
                    }
                    if (this.useDepths) {
                        programParams.push("depths")
                    }
                    return "container.program(" + programParams.join(", ") + ")"
                },
                useRegister: function useRegister(name) {
                    if (!this.registers[name]) {
                        this.registers[name] = true;
                        this.registers.list.push(name)
                    }
                },
                push: function push(expr) {
                    if (!(expr instanceof Literal)) {
                        expr = this.source.wrap(expr)
                    }
                    this.inlineStack.push(expr);
                    return expr
                },
                pushStackLiteral: function pushStackLiteral(item) {
                    this.push(new Literal(item))
                },
                pushSource: function pushSource(source) {
                    if (this.pendingContent) {
                        this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
                        this.pendingContent = undefined
                    }
                    if (source) {
                        this.source.push(source)
                    }
                },
                replaceStack: function replaceStack(callback) {
                    var prefix = ["("],
                        stack = undefined,
                        createdStack = undefined,
                        usedLiteral = undefined;
                    if (!this.isInline()) {
                        throw new _exception2["default"]("replaceStack on non-inline")
                    }
                    var top = this.popStack(true);
                    if (top instanceof Literal) {
                        stack = [top.value];
                        prefix = ["(", stack];
                        usedLiteral = true
                    } else {
                        createdStack = true;
                        var _name = this.incrStack();
                        prefix = ["((", this.push(_name), " = ", top, ")"];
                        stack = this.topStack()
                    }
                    var item = callback.call(this, stack);
                    if (!usedLiteral) {
                        this.popStack()
                    }
                    if (createdStack) {
                        this.stackSlot--
                    }
                    this.push(prefix.concat(item, ")"))
                },
                incrStack: function incrStack() {
                    this.stackSlot++;
                    if (this.stackSlot > this.stackVars.length) {
                        this.stackVars.push("stack" + this.stackSlot)
                    }
                    return this.topStackName()
                },
                topStackName: function topStackName() {
                    return "stack" + this.stackSlot
                },
                flushInline: function flushInline() {
                    var inlineStack = this.inlineStack;
                    this.inlineStack = [];
                    for (var i = 0, len = inlineStack.length; i < len; i++) {
                        var entry = inlineStack[i];
                        if (entry instanceof Literal) {
                            this.compileStack.push(entry)
                        } else {
                            var stack = this.incrStack();
                            this.pushSource([stack, " = ", entry, ";"]);
                            this.compileStack.push(stack)
                        }
                    }
                },
                isInline: function isInline() {
                    return this.inlineStack.length
                },
                popStack: function popStack(wrapped) {
                    var inline = this.isInline(),
                        item = (inline ? this.inlineStack : this.compileStack).pop();
                    if (!wrapped && item instanceof Literal) {
                        return item.value
                    } else {
                        if (!inline) {
                            if (!this.stackSlot) {
                                throw new _exception2["default"]("Invalid stack pop")
                            }
                            this.stackSlot--
                        }
                        return item
                    }
                },
                topStack: function topStack() {
                    var stack = this.isInline() ? this.inlineStack : this.compileStack,
                        item = stack[stack.length - 1];
                    if (item instanceof Literal) {
                        return item.value
                    } else {
                        return item
                    }
                },
                contextName: function contextName(context) {
                    if (this.useDepths && context) {
                        return "depths[" + context + "]"
                    } else {
                        return "depth" + context
                    }
                },
                quotedString: function quotedString(str) {
                    return this.source.quotedString(str)
                },
                objectLiteral: function objectLiteral(obj) {
                    return this.source.objectLiteral(obj)
                },
                aliasable: function aliasable(name) {
                    var ret = this.aliases[name];
                    if (ret) {
                        ret.referenceCount++;
                        return ret
                    }
                    ret = this.aliases[name] = this.source.wrap(name);
                    ret.aliasable = true;
                    ret.referenceCount = 1;
                    return ret
                },
                setupHelper: function setupHelper(paramSize, name, blockHelper) {
                    var params = [],
                        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
                    var foundHelper = this.nameLookup("helpers", name, "helper"),
                        callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : {}");
                    return {
                        params: params,
                        paramsInit: paramsInit,
                        name: foundHelper,
                        callParams: [callContext].concat(params)
                    }
                },
                setupParams: function setupParams(helper, paramSize, params) {
                    var options = {},
                        contexts = [],
                        types = [],
                        ids = [],
                        objectArgs = !params,
                        param = undefined;
                    if (objectArgs) {
                        params = []
                    }
                    options.name = this.quotedString(helper);
                    options.hash = this.popStack();
                    if (this.trackIds) {
                        options.hashIds = this.popStack()
                    }
                    if (this.stringParams) {
                        options.hashTypes = this.popStack();
                        options.hashContexts = this.popStack()
                    }
                    var inverse = this.popStack(),
                        program = this.popStack();
                    if (program || inverse) {
                        options.fn = program || "container.noop";
                        options.inverse = inverse || "container.noop"
                    }
                    var i = paramSize;
                    while (i--) {
                        param = this.popStack();
                        params[i] = param;
                        if (this.trackIds) {
                            ids[i] = this.popStack()
                        }
                        if (this.stringParams) {
                            types[i] = this.popStack();
                            contexts[i] = this.popStack()
                        }
                    }
                    if (objectArgs) {
                        options.args = this.source.generateArray(params)
                    }
                    if (this.trackIds) {
                        options.ids = this.source.generateArray(ids)
                    }
                    if (this.stringParams) {
                        options.types = this.source.generateArray(types);
                        options.contexts = this.source.generateArray(contexts)
                    }
                    if (this.options.data) {
                        options.data = "data"
                    }
                    if (this.useBlockParams) {
                        options.blockParams = "blockParams"
                    }
                    return options
                },
                setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
                    var options = this.setupParams(helper, paramSize, params);
                    options = this.objectLiteral(options);
                    if (useRegister) {
                        this.useRegister("options");
                        params.push("options");
                        return ["options=", options]
                    } else if (params) {
                        params.push(options);
                        return ""
                    } else {
                        return options
                    }
                }
            };
            (function() {
                var reservedWords = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield await" + " null true false").split(" ");
                var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
                for (var i = 0, l = reservedWords.length; i < l; i++) {
                    compilerWords[reservedWords[i]] = true
                }
            })();
            JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
                return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)
            };

            function strictLookup(requireTerminal, compiler, parts, type) {
                var stack = compiler.popStack(),
                    i = 0,
                    len = parts.length;
                if (requireTerminal) {
                    len--
                }
                for (; i < len; i++) {
                    stack = compiler.nameLookup(stack, parts[i], type)
                }
                if (requireTerminal) {
                    return [compiler.aliasable("container.strict"), "(", stack, ", ", compiler.quotedString(parts[i]), ")"]
                } else {
                    return stack
                }
            }
            exports["default"] = JavaScriptCompiler;
            module.exports = exports["default"]
        }, function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(5);
            var SourceNode = undefined;
            try {
                if (false) {
                    var SourceMap = require("source-map");
                    SourceNode = SourceMap.SourceNode
                }
            } catch (err) {}
            if (!SourceNode) {
                SourceNode = function(line, column, srcFile, chunks) {
                    this.src = "";
                    if (chunks) {
                        this.add(chunks)
                    }
                };
                SourceNode.prototype = {
                    add: function add(chunks) {
                        if (_utils.isArray(chunks)) {
                            chunks = chunks.join("")
                        }
                        this.src += chunks
                    },
                    prepend: function prepend(chunks) {
                        if (_utils.isArray(chunks)) {
                            chunks = chunks.join("")
                        }
                        this.src = chunks + this.src
                    },
                    toStringWithSourceMap: function toStringWithSourceMap() {
                        return {
                            code: this.toString()
                        }
                    },
                    toString: function toString() {
                        return this.src
                    }
                }
            }

            function castChunk(chunk, codeGen, loc) {
                if (_utils.isArray(chunk)) {
                    var ret = [];
                    for (var i = 0, len = chunk.length; i < len; i++) {
                        ret.push(codeGen.wrap(chunk[i], loc))
                    }
                    return ret
                } else if (typeof chunk === "boolean" || typeof chunk === "number") {
                    // Handle primitives that the SourceNode will throw up on
                    return chunk + ""
                }
                return chunk
            }

            function CodeGen(srcFile) {
                this.srcFile = srcFile;
                this.source = []
            }
            CodeGen.prototype = {
                isEmpty: function isEmpty() {
                    return !this.source.length
                },
                prepend: function prepend(source, loc) {
                    this.source.unshift(this.wrap(source, loc))
                },
                push: function push(source, loc) {
                    this.source.push(this.wrap(source, loc))
                },
                merge: function merge() {
                    var source = this.empty();
                    this.each(function(line) {
                        source.add(["  ", line, "\n"])
                    });
                    return source
                },
                each: function each(iter) {
                    for (var i = 0, len = this.source.length; i < len; i++) {
                        iter(this.source[i])
                    }
                },
                empty: function empty() {
                    var loc = this.currentLocation || {
                        start: {}
                    };
                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile)
                },
                wrap: function wrap(chunk) {
                    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
                        start: {}
                    } : arguments[1];
                    if (chunk instanceof SourceNode) {
                        return chunk
                    }
                    chunk = castChunk(chunk, this, loc);
                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk)
                },
                functionCall: function functionCall(fn, type, params) {
                    params = this.generateList(params);
                    return this.wrap([fn, type ? "." + type + "(" : "(", params, ")"])
                },
                quotedString: function quotedString(str) {
                    return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                objectLiteral: function objectLiteral(obj) {
                    var pairs = [];
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            var value = castChunk(obj[key], this);
                            if (value !== "undefined") {
                                pairs.push([this.quotedString(key), ":", value])
                            }
                        }
                    }
                    var ret = this.generateList(pairs);
                    ret.prepend("{");
                    ret.add("}");
                    return ret
                },
                generateList: function generateList(entries) {
                    var ret = this.empty();
                    for (var i = 0, len = entries.length; i < len; i++) {
                        if (i) {
                            ret.add(",")
                        }
                        ret.add(castChunk(entries[i], this))
                    }
                    return ret
                },
                generateArray: function generateArray(entries) {
                    var ret = this.generateList(entries);
                    ret.prepend("[");
                    ret.add("]");
                    return ret
                }
            };
            exports["default"] = CodeGen;
            module.exports = exports["default"]
        }])
    });
    (function() {
        define("directories/directories-utils/controller-utils", [], function() {
            var ControllerUtils = {
                numOfCompsInScope: function(compsArr, cardsId) {
                    var numOfComps = 0;
                    compsArr.forEach(function(comp) {
                        if (Libra.Comp.registry.hasOwnProperty(comp)) {
                            var elems = Libra.Comp.registry[comp].elem || [];
                            elems.forEach(function(elem) {
                                var data = $(elem).data();
                                var uiScope = data.uiScope || data.filterScope;
                                if (uiScope && uiScope === cardsId) {
                                    numOfComps++
                                }
                            })
                        }
                    });
                    return numOfComps
                },
                numOfPublishedEvents: function(evt) {
                    if (!Libra.EventHub.publishQueue.hasOwnProperty(evt)) {
                        return 0
                    }
                    var events = Libra.EventHub.publishQueue[evt] || [];
                    return events.length
                },
                getParamsObjFromQS: function(qsArray, qs, cardsId) {
                    var filterParams = [];
                    var sortParams = {
                        sortOrder: "",
                        sortBy: ""
                    };
                    var searchParams = {
                        q: "",
                        q_operator: ""
                    };
                    var filterNames = {};
                    var filterNamespace = qs.filterNamespace.slice(0, -1);
                    qsArray.forEach(function(val) {
                        var param = val.split("=");
                        if (param.length > 1) {
                            var qsKey = param[0];
                            if (qsKey.split(".")[0] === filterNamespace) {
                                var filterName = qsKey.split(".")[1];
                                if (!filterNames.hasOwnProperty(filterName)) {
                                    filterNames[filterName] = true;
                                    var filterParam = {
                                        filterName: filterName
                                    };
                                    param[1].split(qs.orMarker).forEach(function(value) {
                                        var keyVal = value.split(qs.delimiter);
                                        if (!filterParam.hasOwnProperty("key")) {
                                            filterParam.key = keyVal[0];
                                            filterParam.value = []
                                        }
                                        filterParam.value.push(keyVal[1])
                                    });
                                    if (filterParam.value.length === 1) {
                                        filterParam.value = filterParam.value.toString()
                                    }
                                    filterParams.push(filterParam)
                                }
                            } else if (param[0] === cardsId + qs.sortOrder) {
                                sortParams.sortOrder = param[1]
                            } else if (param[0] === cardsId + qs.sortBy) {
                                sortParams.sortBy = param[1]
                            } else if (param[0] === cardsId + qs.searchQuery) {
                                searchParams.q = param[1]
                            } else if (param[0] === cardsId + qs.qOperator) {
                                searchParams.q_operator = param[1]
                            }
                        }
                    });
                    return {
                        filterParams: filterParams,
                        sortParams: sortParams,
                        searchParams: searchParams
                    }
                }
            };
            return ControllerUtils
        });
        define("directories/configurations/event-config", [], function() {
            return {
                update: "libra_directories_comp_update",
                initialLoad: "libra_directories_comp_initial_load",
                setDefaultFromQS: "libra_directories_comp_set_default_from_qs",
                dataReady: "libra_directories_comp_data_ready"
            }
        });
        define("librastandardlib/url-utils/getQueryStringParam", [], function() {
            "use strict";
            return function getQueryStringParam(name, querySrting) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var re = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var res = re.exec(querySrting);
                if (res === null) {
                    return ""
                }
                return decodeURIComponent(res[1].replace(/\+/g, " "))
            }
        });
        define("librastandardlib/url-utils/updateQueryStringParam", [], function() {
            "use strict";
            return function updateQueryStringParam(str, key, value) {
                key = encodeURIComponent(key) || "";
                value = encodeURIComponent(value) || "";
                var newParam = key + "=" + value;
                var params = "?" + newParam;
                if (str) {
                    var updateRegex = new RegExp("([?&])" + key + "=([^&#]*)");
                    var removeRegex = new RegExp("([?&])" + key + "=[^&#]+[&#]?");
                    if (value === "") {
                        params = str.replace(removeRegex, "$1");
                        params = params.replace(/[&?]$/, "")
                    } else if (str.match(updateRegex) !== null) {
                        params = str.replace(updateRegex, "$1" + newParam)
                    } else {
                        params = str + "&" + newParam
                    }
                } else if (value === "") {
                    return ""
                }
                return params
            }
        });
        define("directories/controllers/directories-cards-controller", ["directories/directories-utils/controller-utils", "directories/configurations/event-config", "libra/event-utils/event-hub", "librastandardlib/url-utils/getQueryStringParam", "librastandardlib/url-utils/updateQueryStringParam"], function(ControllerUtils, EventConfig, EventHub, getQueryStringParam, updateQueryStringParam) {
            var defaults = {
                qs: {
                    allOptionValue: "*all",
                    filterNamespace: "awsf.",
                    delimiter: "%23",
                    orMarker: "%7C",
                    sortBy: ".sort-by",
                    sortOrder: ".sort-order",
                    searchQuery: ".q",
                    qOperator: ".q_operator"
                },
                events: EventConfig
            };
            var DirectoriesCardsController = {
                initController: function(options, initialParam) {
                    this.options = $.extend({}, defaults, options);
                    this.events = {
                        updateEvent: this.options.events.update + "-" + this.options.cardsId,
                        initialLoadEvent: this.options.events.initialLoad + "-" + this.options.cardsId
                    };
                    this.paramsObj = {
                        filters: {},
                        sort: {},
                        search: {}
                    };
                    this.filterParamsArr = [];
                    this.filterKeys = [];
                    this.numOfComps = ControllerUtils.numOfCompsInScope(["checkbox-filter", "dropdown-filter", "tab-filter", "sort", "directories-search"], this.options.cardsId);
                    if (this.numOfComps > 0) {
                        var qsParamsObj = ControllerUtils.getParamsObjFromQS(location.search.replace("?", "").split("&"), this.options.qs, this.options.cardsId);
                        EventHub.publish(this.options.events.setDefaultFromQS + "-" + this.options.cardsId, qsParamsObj);
                        this.subscribeForEvents(initialParam);
                        EventHub.publish(this.options.events.dataReady + "-" + this.options.cardsId)
                    } else {
                        this.loadData(initialParam)
                    }
                },
                subscribeForEvents: function(initialParam) {
                    var callback = function(evt, data) {
                        if (data === undefined) {
                            return
                        }
                        var eventData = typeof data === "object" ? data : JSON.parse(data);
                        this.setParamsObj(eventData);
                        if (this.areAllComponentsLoaded() && !this.isMobileEventToSkip(eventData, evt)) {
                            this.addUpdatedQueryStringToURL();
                            this.loadData(this.getParamsForApi(initialParam, evt), true)
                        }
                    }.bind(this);
                    Object.keys(this.events).forEach(function(key) {
                        EventHub.subscribe(this.events[key], {
                            once: false,
                            cb: callback
                        })
                    }.bind(this))
                },
                setParamsObj: function(eventData) {
                    if (eventData.applyBtn) {
                        return
                    }
                    if (eventData.filters) {
                        if (!eventData.hasOwnProperty("filterName")) {
                            this.paramsObj.filters = {}
                        } else {
                            this.filterKeys.push(eventData.filterName);
                            this.paramsObj.filters[eventData.filterName] = {
                                "tags.id": "",
                                qsParam: ""
                            };
                            if (eventData.filters[0]) {
                                var filterData = eventData.filters[0];
                                Object.keys(this.paramsObj.filters[eventData.filterName]).forEach(function(key) {
                                    if (filterData[key]) {
                                        this.paramsObj.filters[eventData.filterName][key] = filterData[key]
                                    }
                                }.bind(this))
                            }
                        }
                    }
                    if (eventData.sort_by && eventData.sort_order) {
                        this.paramsObj.sort.sort_by = eventData.sort_by;
                        this.paramsObj.sort.sort_order = eventData.sort_order
                    }
                    if (eventData.q || eventData.q === "") {
                        this.paramsObj.search.q = eventData.q;
                        this.paramsObj.search.q_operator = eventData.q_operator
                    }
                },
                addUpdatedQueryStringToURL: function() {
                    var qs = location.search;
                    if (Object.keys(this.paramsObj.sort).length > 0) {
                        qs = updateQueryStringParam(qs, this.options.cardsId + this.options.qs.sortBy, decodeURIComponent(this.paramsObj.sort.sort_by));
                        qs = updateQueryStringParam(qs, this.options.cardsId + this.options.qs.sortOrder, this.paramsObj.sort.sort_order)
                    }
                    if (Object.keys(this.paramsObj.search).length > 0) {
                        qs = updateQueryStringParam(qs, this.options.cardsId + this.options.qs.searchQuery, decodeURIComponent(this.paramsObj.search.q));
                        qs = updateQueryStringParam(qs, this.options.cardsId + this.options.qs.qOperator, this.paramsObj.search.q_operator)
                    }
                    this.filterKeys.forEach(function(key) {
                        var qsVal = this.options.qs.allOptionValue;
                        if (this.paramsObj.filters.hasOwnProperty(key) && this.paramsObj.filters[key].hasOwnProperty("qsParam")) {
                            qsVal = this.paramsObj.filters[key].qsParam
                        }
                        qs = updateQueryStringParam(qs, this.options.qs.filterNamespace + key, qsVal)
                    }.bind(this));
                    window.history.replaceState("", "", qs + location.hash)
                },
                getParamsForApi: function(initialParam, evt) {
                    var params = {};
                    if (Object.keys(this.paramsObj.sort).length > 0) {
                        params.sort_by = this.paramsObj.sort.sort_by;
                        params.sort_order = this.paramsObj.sort.sort_order
                    }
                    if (Object.keys(this.paramsObj.search).length > 0 && this.paramsObj.search.q) {
                        params.q = this.paramsObj.search.q;
                        params.q_operator = this.paramsObj.search.q_operator
                    }
                    var filterKeys = Object.keys(this.paramsObj.filters);
                    if (filterKeys.length > 0) {
                        params["tags.id"] = [];
                        filterKeys.forEach(function(key) {
                            if (this.paramsObj.filters[key]["tags.id"] !== "") {
                                params["tags.id"].push(this.paramsObj.filters[key]["tags.id"])
                            }
                        }.bind(this))
                    }
                    if (initialParam.hasOwnProperty("page") && evt === this.events.initialLoadEvent) {
                        params.page = initialParam.page
                    } else {
                        this.resetPageNum = true
                    }
                    return params
                },
                isMobileEventToSkip: function(eventData, evt) {
                    return eventData.hasOwnProperty("isMobileLayoutActive") && eventData.isMobileLayoutActive && !eventData.applyBtn && evt !== this.events.initialLoadEvent
                },
                areAllComponentsLoaded: function() {
                    return this.numOfComps === ControllerUtils.numOfPublishedEvents(this.events.initialLoadEvent)
                }
            };
            return DirectoriesCardsController
        });
        define("librastandardlib/vendor/lodash-amd/modern/array/compact", [], function() {
            function compact(array) {
                var index = -1,
                    length = array ? array.length : 0,
                    resIndex = -1,
                    result = [];
                while (++index < length) {
                    var value = array[index];
                    if (value) {
                        result[++resIndex] = value
                    }
                }
                return result
            }
            return compact
        });
        define("directories/directories-utils/path-utils", ["librastandardlib/vendor/lodash-amd/modern/array/compact"], function(_compact) {
            var PathUtils = {
                getRelativeItemId: function(directoryId, itemId) {
                    var relativeItemId = false;
                    if (typeof directoryId !== "undefined" && directoryId !== "" && typeof itemId !== "undefined" && itemId !== "") {
                        var re = new RegExp("^" + directoryId + "#");
                        relativeItemId = itemId.replace(re, "")
                    }
                    return relativeItemId
                },
                getItemIdFromPath: function(path) {
                    var parts = path.split(/\//);
                    if (parts.length <= 3) {
                        return false
                    }
                    return parts[parts.length - 2]
                },
                cleanPath: function(path) {
                    return path.replace(/\/{2,}/, "/")
                },
                getLocaleFromHtmlTag: function() {
                    var lang = $("html").attr("lang");
                    if (lang) {
                        return lang.replace("-", "_")
                    }
                    return "en_US"
                },
                getTagFromURL: function(fullPath, rootPath) {
                    if (rootPath === undefined) {
                        rootPath = ""
                    }
                    var index = fullPath.indexOf(rootPath) + rootPath.length;
                    var arrPath = _compact(fullPath.slice(index).split("/"));
                    return arrPath.reduce(function(str, value, ind) {
                        if (ind > 0) {
                            str = decodeURIComponent(str);
                            if (ind === arrPath.length - 1) {
                                str += "#"
                            } else {
                                str += "-"
                            }
                        }
                        return str + decodeURIComponent(value)
                    }, "")
                }
            };
            return PathUtils
        });
        define("directories/configurations/default-config", ["directories/directories-utils/path-utils"], function(PathUtils) {
            return {
                templateConfig: {
                    itemUrlTemplate: "{{basePath}}/{{itemPath}}/",
                    language: $("html").attr("lang") || "en-US"
                },
                itemsConfig: {
                    selector: ".aws-directories-items",
                    endpoint: "/api/dirs/{{directoryId}}/items",
                    eventDataLoad: "directory-cards-data-load",
                    eventNamespace: "aws_directories_items",
                    activeClass: "lb-active",
                    containerClass: ".aws-directories-container",
                    loadTemplate: true
                },
                itemConfig: {
                    selector: ".aws-directories-item",
                    endpoint: "/api/dirs/{{directoryId}}/items/{{itemId}}"
                },
                APIs: {
                    getItems: {
                        endpoint: "/api/dirs/{{directoryId}}/items",
                        defaultParams: {
                            order_by: "dateCreated",
                            sort_ascending: false,
                            limit: 25,
                            locale: PathUtils.getLocaleFromHtmlTag()
                        }
                    },
                    search: {
                        endpoint: "/api/dirs/items/search?item.directoryId={{directoryId}}",
                        defaultParams: {
                            sort_by: "item.dateCreated",
                            sort_order: "desc",
                            size: 25,
                            "item.locale": PathUtils.getLocaleFromHtmlTag()
                        }
                    }
                },
                metricsConfig: {
                    prefix: "awsm_v2_:comp_",
                    metric: {
                        LoadError: "TemplateLoadError",
                        AjaxError: "AjaxFailure",
                        AjaxSuccess: "AjaxSuccess",
                        AjaxRoundTripTime: "AjaxRoundTripTime"
                    }
                }
            }
        });
        define("directories/directories-utils/template-cache", ["libra/vendor/handlebars", "librastandardlib/logger/logger"], function(Handlebars, Logger) {
            var logger = new Logger("Directories");

            function TemplateCache() {
                this.cache = {}
            }
            TemplateCache.prototype = {
                hasTemplate: function(key) {
                    return this.cache.hasOwnProperty(key)
                },
                getTemplate: function(key) {
                    return this.cache[key]
                },
                putTemplate: function(key, template) {
                    this.cache[key] = template;
                    return template
                },
                cacheTemplate: function(key, source) {
                    var template = Handlebars.compile(source);
                    this.putTemplate(key, template);
                    return template
                },
                loadTemplate: function(elem) {
                    var template;
                    var key = $(elem);
                    if (this.hasTemplate(key)) {
                        logger.debug("Using cached template for key", key);
                        template = this.getTemplate(key)
                    } else {
                        var $template = $(elem).find('script[type="text/x-handlebars-template"]');
                        if ($template.length <= 0) {
                            logger.debug("No template element found for key", key);
                            return
                        }
                        logger.debug("Found template for key", key, $template);
                        var source = $template.html();
                        template = this.cacheTemplate(key, source)
                    }
                    return template
                }
            };
            return TemplateCache
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("directories/vendor/moment/moment", factory) : global.moment = factory()
        })(this, function() {
            "use strict";
            var hookCallback;

            function hooks() {
                return hookCallback.apply(null, arguments)
            }

            function setHookCallback(callback) {
                hookCallback = callback
            }

            function isArray(input) {
                return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]"
            }

            function isObject(input) {
                return input != null && Object.prototype.toString.call(input) === "[object Object]"
            }

            function isObjectEmpty(obj) {
                var k;
                for (k in obj) {
                    return false
                }
                return true
            }

            function isNumber(input) {
                return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]"
            }

            function isDate(input) {
                return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]"
            }

            function map(arr, fn) {
                var res = [],
                    i;
                for (i = 0; i < arr.length; ++i) {
                    res.push(fn(arr[i], i))
                }
                return res
            }

            function hasOwnProp(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function extend(a, b) {
                for (var i in b) {
                    if (hasOwnProp(b, i)) {
                        a[i] = b[i]
                    }
                }
                if (hasOwnProp(b, "toString")) {
                    a.toString = b.toString
                }
                if (hasOwnProp(b, "valueOf")) {
                    a.valueOf = b.valueOf
                }
                return a
            }

            function createUTC(input, format, locale, strict) {
                return createLocalOrUTC(input, format, locale, strict, true).utc()
            }

            function defaultParsingFlags() {
                return {
                    empty: false,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: false,
                    invalidMonth: null,
                    invalidFormat: false,
                    userInvalidated: false,
                    iso: false,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function getParsingFlags(m) {
                if (m._pf == null) {
                    m._pf = defaultParsingFlags()
                }
                return m._pf
            }
            var some;
            if (Array.prototype.some) {
                some = Array.prototype.some
            } else {
                some = function(fun) {
                    var t = Object(this);
                    var len = t.length >>> 0;
                    for (var i = 0; i < len; i++) {
                        if (i in t && fun.call(this, t[i], i, t)) {
                            return true
                        }
                    }
                    return false
                }
            }
            var some$1 = some;

            function isValid(m) {
                if (m._isValid == null) {
                    var flags = getParsingFlags(m);
                    var parsedParts = some$1.call(flags.parsedDateParts, function(i) {
                        return i != null
                    });
                    var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
                    if (m._strict) {
                        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined
                    }
                    if (Object.isFrozen == null || !Object.isFrozen(m)) {
                        m._isValid = isNowValid
                    } else {
                        return isNowValid
                    }
                }
                return m._isValid
            }

            function createInvalid(flags) {
                var m = createUTC(NaN);
                if (flags != null) {
                    extend(getParsingFlags(m), flags)
                } else {
                    getParsingFlags(m).userInvalidated = true
                }
                return m
            }

            function isUndefined(input) {
                return input === void 0
            }
            var momentProperties = hooks.momentProperties = [];

            function copyConfig(to, from) {
                var i, prop, val;
                if (!isUndefined(from._isAMomentObject)) {
                    to._isAMomentObject = from._isAMomentObject
                }
                if (!isUndefined(from._i)) {
                    to._i = from._i
                }
                if (!isUndefined(from._f)) {
                    to._f = from._f
                }
                if (!isUndefined(from._l)) {
                    to._l = from._l
                }
                if (!isUndefined(from._strict)) {
                    to._strict = from._strict
                }
                if (!isUndefined(from._tzm)) {
                    to._tzm = from._tzm
                }
                if (!isUndefined(from._isUTC)) {
                    to._isUTC = from._isUTC
                }
                if (!isUndefined(from._offset)) {
                    to._offset = from._offset
                }
                if (!isUndefined(from._pf)) {
                    to._pf = getParsingFlags(from)
                }
                if (!isUndefined(from._locale)) {
                    to._locale = from._locale
                }
                if (momentProperties.length > 0) {
                    for (i in momentProperties) {
                        prop = momentProperties[i];
                        val = from[prop];
                        if (!isUndefined(val)) {
                            to[prop] = val
                        }
                    }
                }
                return to
            }
            var updateInProgress = false;

            function Moment(config) {
                copyConfig(this, config);
                this._d = new Date(config._d != null ? config._d.getTime() : NaN);
                if (!this.isValid()) {
                    this._d = new Date(NaN)
                }
                if (updateInProgress === false) {
                    updateInProgress = true;
                    hooks.updateOffset(this);
                    updateInProgress = false
                }
            }

            function isMoment(obj) {
                return obj instanceof Moment || obj != null && obj._isAMomentObject != null
            }

            function absFloor(number) {
                if (number < 0) {
                    return Math.ceil(number) || 0
                } else {
                    return Math.floor(number)
                }
            }

            function toInt(argumentForCoercion) {
                var coercedNumber = +argumentForCoercion,
                    value = 0;
                if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                    value = absFloor(coercedNumber)
                }
                return value
            }

            function compareArrays(array1, array2, dontConvert) {
                var len = Math.min(array1.length, array2.length),
                    lengthDiff = Math.abs(array1.length - array2.length),
                    diffs = 0,
                    i;
                for (i = 0; i < len; i++) {
                    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                        diffs++
                    }
                }
                return diffs + lengthDiff
            }

            function warn(msg) {
                if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                    console.warn("Deprecation warning: " + msg)
                }
            }

            function deprecate(msg, fn) {
                var firstTime = true;
                return extend(function() {
                    if (hooks.deprecationHandler != null) {
                        hooks.deprecationHandler(null, msg)
                    }
                    if (firstTime) {
                        var args = [];
                        var arg;
                        for (var i = 0; i < arguments.length; i++) {
                            arg = "";
                            if (typeof arguments[i] === "object") {
                                arg += "\n[" + i + "] ";
                                for (var key in arguments[0]) {
                                    arg += key + ": " + arguments[0][key] + ", "
                                }
                                arg = arg.slice(0, -2)
                            } else {
                                arg = arguments[i]
                            }
                            args.push(arg)
                        }
                        warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + (new Error).stack);
                        firstTime = false
                    }
                    return fn.apply(this, arguments)
                }, fn)
            }
            var deprecations = {};

            function deprecateSimple(name, msg) {
                if (hooks.deprecationHandler != null) {
                    hooks.deprecationHandler(name, msg)
                }
                if (!deprecations[name]) {
                    warn(msg);
                    deprecations[name] = true
                }
            }
            hooks.suppressDeprecationWarnings = false;
            hooks.deprecationHandler = null;

            function isFunction(input) {
                return input instanceof Function || Object.prototype.toString.call(input) === "[object Function]"
            }

            function set(config) {
                var prop, i;
                for (i in config) {
                    prop = config[i];
                    if (isFunction(prop)) {
                        this[i] = prop
                    } else {
                        this["_" + i] = prop
                    }
                }
                this._config = config;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function mergeConfigs(parentConfig, childConfig) {
                var res = extend({}, parentConfig),
                    prop;
                for (prop in childConfig) {
                    if (hasOwnProp(childConfig, prop)) {
                        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                            res[prop] = {};
                            extend(res[prop], parentConfig[prop]);
                            extend(res[prop], childConfig[prop])
                        } else if (childConfig[prop] != null) {
                            res[prop] = childConfig[prop]
                        } else {
                            delete res[prop]
                        }
                    }
                }
                for (prop in parentConfig) {
                    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                        res[prop] = extend({}, res[prop])
                    }
                }
                return res
            }

            function Locale(config) {
                if (config != null) {
                    this.set(config)
                }
            }
            var keys;
            if (Object.keys) {
                keys = Object.keys
            } else {
                keys = function(obj) {
                    var i, res = [];
                    for (i in obj) {
                        if (hasOwnProp(obj, i)) {
                            res.push(i)
                        }
                    }
                    return res
                }
            }
            var keys$1 = keys;
            var defaultCalendar = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };

            function calendar(key, mom, now) {
                var output = this._calendar[key] || this._calendar["sameElse"];
                return isFunction(output) ? output.call(mom, now) : output
            }
            var defaultLongDateFormat = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };

            function longDateFormat(key) {
                var format = this._longDateFormat[key],
                    formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
                    return val.slice(1)
                });
                return this._longDateFormat[key]
            }
            var defaultInvalidDate = "Invalid date";

            function invalidDate() {
                return this._invalidDate
            }
            var defaultOrdinal = "%d";
            var defaultOrdinalParse = /\d{1,2}/;

            function ordinal(number) {
                return this._ordinal.replace("%d", number)
            }
            var defaultRelativeTime = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };

            function relativeTime(number, withoutSuffix, string, isFuture) {
                var output = this._relativeTime[string];
                return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
            }

            function pastFuture(diff, output) {
                var format = this._relativeTime[diff > 0 ? "future" : "past"];
                return isFunction(format) ? format(output) : format.replace(/%s/i, output)
            }
            var aliases = {};

            function addUnitAlias(unit, shorthand) {
                var lowerCase = unit.toLowerCase();
                aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit
            }

            function normalizeUnits(units) {
                return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined
            }

            function normalizeObjectUnits(inputObject) {
                var normalizedInput = {},
                    normalizedProp, prop;
                for (prop in inputObject) {
                    if (hasOwnProp(inputObject, prop)) {
                        normalizedProp = normalizeUnits(prop);
                        if (normalizedProp) {
                            normalizedInput[normalizedProp] = inputObject[prop]
                        }
                    }
                }
                return normalizedInput
            }
            var priorities = {};

            function addUnitPriority(unit, priority) {
                priorities[unit] = priority
            }

            function getPrioritizedUnits(unitsObj) {
                var units = [];
                for (var u in unitsObj) {
                    units.push({
                        unit: u,
                        priority: priorities[u]
                    })
                }
                units.sort(function(a, b) {
                    return a.priority - b.priority
                });
                return units
            }

            function makeGetSet(unit, keepTime) {
                return function(value) {
                    if (value != null) {
                        set$1(this, unit, value);
                        hooks.updateOffset(this, keepTime);
                        return this
                    } else {
                        return get(this, unit)
                    }
                }
            }

            function get(mom, unit) {
                return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN
            }

            function set$1(mom, unit, value) {
                if (mom.isValid()) {
                    mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value)
                }
            }

            function stringGet(units) {
                units = normalizeUnits(units);
                if (isFunction(this[units])) {
                    return this[units]()
                }
                return this
            }

            function stringSet(units, value) {
                if (typeof units === "object") {
                    units = normalizeObjectUnits(units);
                    var prioritized = getPrioritizedUnits(units);
                    for (var i = 0; i < prioritized.length; i++) {
                        this[prioritized[i].unit](units[prioritized[i].unit])
                    }
                } else {
                    units = normalizeUnits(units);
                    if (isFunction(this[units])) {
                        return this[units](value)
                    }
                }
                return this
            }

            function zeroFill(number, targetLength, forceSign) {
                var absNumber = "" + Math.abs(number),
                    zerosToFill = targetLength - absNumber.length,
                    sign = number >= 0;
                return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber
            }
            var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
            var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
            var formatFunctions = {};
            var formatTokenFunctions = {};

            function addFormatToken(token, padded, ordinal, callback) {
                var func = callback;
                if (typeof callback === "string") {
                    func = function() {
                        return this[callback]()
                    }
                }
                if (token) {
                    formatTokenFunctions[token] = func
                }
                if (padded) {
                    formatTokenFunctions[padded[0]] = function() {
                        return zeroFill(func.apply(this, arguments), padded[1], padded[2])
                    }
                }
                if (ordinal) {
                    formatTokenFunctions[ordinal] = function() {
                        return this.localeData().ordinal(func.apply(this, arguments), token)
                    }
                }
            }

            function removeFormattingTokens(input) {
                if (input.match(/\[[\s\S]/)) {
                    return input.replace(/^\[|\]$/g, "")
                }
                return input.replace(/\\/g, "")
            }

            function makeFormatFunction(format) {
                var array = format.match(formattingTokens),
                    i, length;
                for (i = 0, length = array.length; i < length; i++) {
                    if (formatTokenFunctions[array[i]]) {
                        array[i] = formatTokenFunctions[array[i]]
                    } else {
                        array[i] = removeFormattingTokens(array[i])
                    }
                }
                return function(mom) {
                    var output = "",
                        i;
                    for (i = 0; i < length; i++) {
                        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i]
                    }
                    return output
                }
            }

            function formatMoment(m, format) {
                if (!m.isValid()) {
                    return m.localeData().invalidDate()
                }
                format = expandFormat(format, m.localeData());
                formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
                return formatFunctions[format](m)
            }

            function expandFormat(format, locale) {
                var i = 5;

                function replaceLongDateFormatTokens(input) {
                    return locale.longDateFormat(input) || input
                }
                localFormattingTokens.lastIndex = 0;
                while (i >= 0 && localFormattingTokens.test(format)) {
                    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
                    localFormattingTokens.lastIndex = 0;
                    i -= 1
                }
                return format
            }
            var match1 = /\d/;
            var match2 = /\d\d/;
            var match3 = /\d{3}/;
            var match4 = /\d{4}/;
            var match6 = /[+-]?\d{6}/;
            var match1to2 = /\d\d?/;
            var match3to4 = /\d\d\d\d?/;
            var match5to6 = /\d\d\d\d\d\d?/;
            var match1to3 = /\d{1,3}/;
            var match1to4 = /\d{1,4}/;
            var match1to6 = /[+-]?\d{1,6}/;
            var matchUnsigned = /\d+/;
            var matchSigned = /[+-]?\d+/;
            var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
            var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
            var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
            var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
            var regexes = {};

            function addRegexToken(token, regex, strictRegex) {
                regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
                    return isStrict && strictRegex ? strictRegex : regex
                }
            }

            function getParseRegexForToken(token, config) {
                if (!hasOwnProp(regexes, token)) {
                    return new RegExp(unescapeFormat(token))
                }
                return regexes[token](config._strict, config._locale)
            }

            function unescapeFormat(s) {
                return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
                    return p1 || p2 || p3 || p4
                }))
            }

            function regexEscape(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var tokens = {};

            function addParseToken(token, callback) {
                var i, func = callback;
                if (typeof token === "string") {
                    token = [token]
                }
                if (isNumber(callback)) {
                    func = function(input, array) {
                        array[callback] = toInt(input)
                    }
                }
                for (i = 0; i < token.length; i++) {
                    tokens[token[i]] = func
                }
            }

            function addWeekParseToken(token, callback) {
                addParseToken(token, function(input, array, config, token) {
                    config._w = config._w || {};
                    callback(input, config._w, config, token)
                })
            }

            function addTimeToArrayFromToken(token, input, config) {
                if (input != null && hasOwnProp(tokens, token)) {
                    tokens[token](input, config._a, config, token)
                }
            }
            var YEAR = 0;
            var MONTH = 1;
            var DATE = 2;
            var HOUR = 3;
            var MINUTE = 4;
            var SECOND = 5;
            var MILLISECOND = 6;
            var WEEK = 7;
            var WEEKDAY = 8;
            var indexOf;
            if (Array.prototype.indexOf) {
                indexOf = Array.prototype.indexOf
            } else {
                indexOf = function(o) {
                    var i;
                    for (i = 0; i < this.length; ++i) {
                        if (this[i] === o) {
                            return i
                        }
                    }
                    return -1
                }
            }
            var indexOf$1 = indexOf;

            function daysInMonth(year, month) {
                return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
            }
            addFormatToken("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            });
            addFormatToken("MMM", 0, 0, function(format) {
                return this.localeData().monthsShort(this, format)
            });
            addFormatToken("MMMM", 0, 0, function(format) {
                return this.localeData().months(this, format)
            });
            addUnitAlias("month", "M");
            addUnitPriority("month", 8);
            addRegexToken("M", match1to2);
            addRegexToken("MM", match1to2, match2);
            addRegexToken("MMM", function(isStrict, locale) {
                return locale.monthsShortRegex(isStrict)
            });
            addRegexToken("MMMM", function(isStrict, locale) {
                return locale.monthsRegex(isStrict)
            });
            addParseToken(["M", "MM"], function(input, array) {
                array[MONTH] = toInt(input) - 1
            });
            addParseToken(["MMM", "MMMM"], function(input, array, config, token) {
                var month = config._locale.monthsParse(input, token, config._strict);
                if (month != null) {
                    array[MONTH] = month
                } else {
                    getParsingFlags(config).invalidMonth = input
                }
            });
            var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
            var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");

            function localeMonths(m, format) {
                if (!m) {
                    return this._months
                }
                return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()]
            }
            var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function localeMonthsShort(m, format) {
                if (!m) {
                    return this._monthsShort
                }
                return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()]
            }

            function handleStrictParse(monthName, format, strict) {
                var i, ii, mom, llc = monthName.toLocaleLowerCase();
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (i = 0; i < 12; ++i) {
                        mom = createUTC([2e3, i]);
                        this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
                        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase()
                    }
                }
                if (strict) {
                    if (format === "MMM") {
                        ii = indexOf$1.call(this._shortMonthsParse, llc);
                        return ii !== -1 ? ii : null
                    } else {
                        ii = indexOf$1.call(this._longMonthsParse, llc);
                        return ii !== -1 ? ii : null
                    }
                } else {
                    if (format === "MMM") {
                        ii = indexOf$1.call(this._shortMonthsParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._longMonthsParse, llc);
                        return ii !== -1 ? ii : null
                    } else {
                        ii = indexOf$1.call(this._longMonthsParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._shortMonthsParse, llc);
                        return ii !== -1 ? ii : null
                    }
                }
            }

            function localeMonthsParse(monthName, format, strict) {
                var i, mom, regex;
                if (this._monthsParseExact) {
                    return handleStrictParse.call(this, monthName, format, strict)
                }
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = []
                }
                for (i = 0; i < 12; i++) {
                    mom = createUTC([2e3, i]);
                    if (strict && !this._longMonthsParse[i]) {
                        this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
                        this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i")
                    }
                    if (!strict && !this._monthsParse[i]) {
                        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")
                    }
                    if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
                        return i
                    } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
                        return i
                    } else if (!strict && this._monthsParse[i].test(monthName)) {
                        return i
                    }
                }
            }

            function setMonth(mom, value) {
                var dayOfMonth;
                if (!mom.isValid()) {
                    return mom
                }
                if (typeof value === "string") {
                    if (/^\d+$/.test(value)) {
                        value = toInt(value)
                    } else {
                        value = mom.localeData().monthsParse(value);
                        if (!isNumber(value)) {
                            return mom
                        }
                    }
                }
                dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
                mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
                return mom
            }

            function getSetMonth(value) {
                if (value != null) {
                    setMonth(this, value);
                    hooks.updateOffset(this, true);
                    return this
                } else {
                    return get(this, "Month")
                }
            }

            function getDaysInMonth() {
                return daysInMonth(this.year(), this.month())
            }
            var defaultMonthsShortRegex = matchWord;

            function monthsShortRegex(isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, "_monthsRegex")) {
                        computeMonthsParse.call(this)
                    }
                    if (isStrict) {
                        return this._monthsShortStrictRegex
                    } else {
                        return this._monthsShortRegex
                    }
                } else {
                    if (!hasOwnProp(this, "_monthsShortRegex")) {
                        this._monthsShortRegex = defaultMonthsShortRegex
                    }
                    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex
                }
            }
            var defaultMonthsRegex = matchWord;

            function monthsRegex(isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, "_monthsRegex")) {
                        computeMonthsParse.call(this)
                    }
                    if (isStrict) {
                        return this._monthsStrictRegex
                    } else {
                        return this._monthsRegex
                    }
                } else {
                    if (!hasOwnProp(this, "_monthsRegex")) {
                        this._monthsRegex = defaultMonthsRegex
                    }
                    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex
                }
            }

            function computeMonthsParse() {
                function cmpLenRev(a, b) {
                    return b.length - a.length
                }
                var shortPieces = [],
                    longPieces = [],
                    mixedPieces = [],
                    i, mom;
                for (i = 0; i < 12; i++) {
                    mom = createUTC([2e3, i]);
                    shortPieces.push(this.monthsShort(mom, ""));
                    longPieces.push(this.months(mom, ""));
                    mixedPieces.push(this.months(mom, ""));
                    mixedPieces.push(this.monthsShort(mom, ""))
                }
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 12; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i])
                }
                for (i = 0; i < 24; i++) {
                    mixedPieces[i] = regexEscape(mixedPieces[i])
                }
                this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
                this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i")
            }
            addFormatToken("Y", 0, 0, function() {
                var y = this.year();
                return y <= 9999 ? "" + y : "+" + y
            });
            addFormatToken(0, ["YY", 2], 0, function() {
                return this.year() % 100
            });
            addFormatToken(0, ["YYYY", 4], 0, "year");
            addFormatToken(0, ["YYYYY", 5], 0, "year");
            addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
            addUnitAlias("year", "y");
            addUnitPriority("year", 1);
            addRegexToken("Y", matchSigned);
            addRegexToken("YY", match1to2, match2);
            addRegexToken("YYYY", match1to4, match4);
            addRegexToken("YYYYY", match1to6, match6);
            addRegexToken("YYYYYY", match1to6, match6);
            addParseToken(["YYYYY", "YYYYYY"], YEAR);
            addParseToken("YYYY", function(input, array) {
                array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input)
            });
            addParseToken("YY", function(input, array) {
                array[YEAR] = hooks.parseTwoDigitYear(input)
            });
            addParseToken("Y", function(input, array) {
                array[YEAR] = parseInt(input, 10)
            });

            function daysInYear(year) {
                return isLeapYear(year) ? 366 : 365
            }

            function isLeapYear(year) {
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
            }
            hooks.parseTwoDigitYear = function(input) {
                return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3)
            };
            var getSetYear = makeGetSet("FullYear", true);

            function getIsLeapYear() {
                return isLeapYear(this.year())
            }

            function createDate(y, m, d, h, M, s, ms) {
                var date = new Date(y, m, d, h, M, s, ms);
                if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
                    date.setFullYear(y)
                }
                return date
            }

            function createUTCDate(y) {
                var date = new Date(Date.UTC.apply(null, arguments));
                if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
                    date.setUTCFullYear(y)
                }
                return date
            }

            function firstWeekOffset(year, dow, doy) {
                var fwd = 7 + dow - doy,
                    fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
                return -fwdlw + fwd - 1
            }

            function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
                var localWeekday = (7 + weekday - dow) % 7,
                    weekOffset = firstWeekOffset(year, dow, doy),
                    dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
                    resYear, resDayOfYear;
                if (dayOfYear <= 0) {
                    resYear = year - 1;
                    resDayOfYear = daysInYear(resYear) + dayOfYear
                } else if (dayOfYear > daysInYear(year)) {
                    resYear = year + 1;
                    resDayOfYear = dayOfYear - daysInYear(year)
                } else {
                    resYear = year;
                    resDayOfYear = dayOfYear
                }
                return {
                    year: resYear,
                    dayOfYear: resDayOfYear
                }
            }

            function weekOfYear(mom, dow, doy) {
                var weekOffset = firstWeekOffset(mom.year(), dow, doy),
                    week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
                    resWeek, resYear;
                if (week < 1) {
                    resYear = mom.year() - 1;
                    resWeek = week + weeksInYear(resYear, dow, doy)
                } else if (week > weeksInYear(mom.year(), dow, doy)) {
                    resWeek = week - weeksInYear(mom.year(), dow, doy);
                    resYear = mom.year() + 1
                } else {
                    resYear = mom.year();
                    resWeek = week
                }
                return {
                    week: resWeek,
                    year: resYear
                }
            }

            function weeksInYear(year, dow, doy) {
                var weekOffset = firstWeekOffset(year, dow, doy),
                    weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
                return (daysInYear(year) - weekOffset + weekOffsetNext) / 7
            }
            addFormatToken("w", ["ww", 2], "wo", "week");
            addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
            addUnitAlias("week", "w");
            addUnitAlias("isoWeek", "W");
            addUnitPriority("week", 5);
            addUnitPriority("isoWeek", 5);
            addRegexToken("w", match1to2);
            addRegexToken("ww", match1to2, match2);
            addRegexToken("W", match1to2);
            addRegexToken("WW", match1to2, match2);
            addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token) {
                week[token.substr(0, 1)] = toInt(input)
            });

            function localeWeek(mom) {
                return weekOfYear(mom, this._week.dow, this._week.doy).week
            }
            var defaultLocaleWeek = {
                dow: 0,
                doy: 6
            };

            function localeFirstDayOfWeek() {
                return this._week.dow
            }

            function localeFirstDayOfYear() {
                return this._week.doy
            }

            function getSetWeek(input) {
                var week = this.localeData().week(this);
                return input == null ? week : this.add((input - week) * 7, "d")
            }

            function getSetISOWeek(input) {
                var week = weekOfYear(this, 1, 4).week;
                return input == null ? week : this.add((input - week) * 7, "d")
            }
            addFormatToken("d", 0, "do", "day");
            addFormatToken("dd", 0, 0, function(format) {
                return this.localeData().weekdaysMin(this, format)
            });
            addFormatToken("ddd", 0, 0, function(format) {
                return this.localeData().weekdaysShort(this, format)
            });
            addFormatToken("dddd", 0, 0, function(format) {
                return this.localeData().weekdays(this, format)
            });
            addFormatToken("e", 0, 0, "weekday");
            addFormatToken("E", 0, 0, "isoWeekday");
            addUnitAlias("day", "d");
            addUnitAlias("weekday", "e");
            addUnitAlias("isoWeekday", "E");
            addUnitPriority("day", 11);
            addUnitPriority("weekday", 11);
            addUnitPriority("isoWeekday", 11);
            addRegexToken("d", match1to2);
            addRegexToken("e", match1to2);
            addRegexToken("E", match1to2);
            addRegexToken("dd", function(isStrict, locale) {
                return locale.weekdaysMinRegex(isStrict)
            });
            addRegexToken("ddd", function(isStrict, locale) {
                return locale.weekdaysShortRegex(isStrict)
            });
            addRegexToken("dddd", function(isStrict, locale) {
                return locale.weekdaysRegex(isStrict)
            });
            addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token) {
                var weekday = config._locale.weekdaysParse(input, token, config._strict);
                if (weekday != null) {
                    week.d = weekday
                } else {
                    getParsingFlags(config).invalidWeekday = input
                }
            });
            addWeekParseToken(["d", "e", "E"], function(input, week, config, token) {
                week[token] = toInt(input)
            });

            function parseWeekday(input, locale) {
                if (typeof input !== "string") {
                    return input
                }
                if (!isNaN(input)) {
                    return parseInt(input, 10)
                }
                input = locale.weekdaysParse(input);
                if (typeof input === "number") {
                    return input
                }
                return null
            }

            function parseIsoWeekday(input, locale) {
                if (typeof input === "string") {
                    return locale.weekdaysParse(input) % 7 || 7
                }
                return isNaN(input) ? null : input
            }
            var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");

            function localeWeekdays(m, format) {
                if (!m) {
                    return this._weekdays
                }
                return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? "format" : "standalone"][m.day()]
            }
            var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

            function localeWeekdaysShort(m) {
                return m ? this._weekdaysShort[m.day()] : this._weekdaysShort
            }
            var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

            function localeWeekdaysMin(m) {
                return m ? this._weekdaysMin[m.day()] : this._weekdaysMin
            }

            function handleStrictParse$1(weekdayName, format, strict) {
                var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    for (i = 0; i < 7; ++i) {
                        mom = createUTC([2e3, 1]).day(i);
                        this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
                        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
                        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase()
                    }
                }
                if (strict) {
                    if (format === "dddd") {
                        ii = indexOf$1.call(this._weekdaysParse, llc);
                        return ii !== -1 ? ii : null
                    } else if (format === "ddd") {
                        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                        return ii !== -1 ? ii : null
                    } else {
                        ii = indexOf$1.call(this._minWeekdaysParse, llc);
                        return ii !== -1 ? ii : null
                    }
                } else {
                    if (format === "dddd") {
                        ii = indexOf$1.call(this._weekdaysParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._minWeekdaysParse, llc);
                        return ii !== -1 ? ii : null
                    } else if (format === "ddd") {
                        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._weekdaysParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._minWeekdaysParse, llc);
                        return ii !== -1 ? ii : null
                    } else {
                        ii = indexOf$1.call(this._minWeekdaysParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._weekdaysParse, llc);
                        if (ii !== -1) {
                            return ii
                        }
                        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                        return ii !== -1 ? ii : null
                    }
                }
            }

            function localeWeekdaysParse(weekdayName, format, strict) {
                var i, mom, regex;
                if (this._weekdaysParseExact) {
                    return handleStrictParse$1.call(this, weekdayName, format, strict)
                }
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._minWeekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._fullWeekdaysParse = []
                }
                for (i = 0; i < 7; i++) {
                    mom = createUTC([2e3, 1]).day(i);
                    if (strict && !this._fullWeekdaysParse[i]) {
                        this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", ".?") + "$", "i");
                        this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", ".?") + "$", "i");
                        this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", ".?") + "$", "i")
                    }
                    if (!this._weekdaysParse[i]) {
                        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")
                    }
                    if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
                        return i
                    } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
                        return i
                    } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
                        return i
                    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                        return i
                    }
                }
            }

            function getSetDayOfWeek(input) {
                if (!this.isValid()) {
                    return input != null ? this : NaN
                }
                var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                if (input != null) {
                    input = parseWeekday(input, this.localeData());
                    return this.add(input - day, "d")
                } else {
                    return day
                }
            }

            function getSetLocaleDayOfWeek(input) {
                if (!this.isValid()) {
                    return input != null ? this : NaN
                }
                var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return input == null ? weekday : this.add(input - weekday, "d")
            }

            function getSetISODayOfWeek(input) {
                if (!this.isValid()) {
                    return input != null ? this : NaN
                }
                if (input != null) {
                    var weekday = parseIsoWeekday(input, this.localeData());
                    return this.day(this.day() % 7 ? weekday : weekday - 7)
                } else {
                    return this.day() || 7
                }
            }
            var defaultWeekdaysRegex = matchWord;

            function weekdaysRegex(isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, "_weekdaysRegex")) {
                        computeWeekdaysParse.call(this)
                    }
                    if (isStrict) {
                        return this._weekdaysStrictRegex
                    } else {
                        return this._weekdaysRegex
                    }
                } else {
                    if (!hasOwnProp(this, "_weekdaysRegex")) {
                        this._weekdaysRegex = defaultWeekdaysRegex
                    }
                    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex
                }
            }
            var defaultWeekdaysShortRegex = matchWord;

            function weekdaysShortRegex(isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, "_weekdaysRegex")) {
                        computeWeekdaysParse.call(this)
                    }
                    if (isStrict) {
                        return this._weekdaysShortStrictRegex
                    } else {
                        return this._weekdaysShortRegex
                    }
                } else {
                    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
                        this._weekdaysShortRegex = defaultWeekdaysShortRegex
                    }
                    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
                }
            }
            var defaultWeekdaysMinRegex = matchWord;

            function weekdaysMinRegex(isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, "_weekdaysRegex")) {
                        computeWeekdaysParse.call(this)
                    }
                    if (isStrict) {
                        return this._weekdaysMinStrictRegex
                    } else {
                        return this._weekdaysMinRegex
                    }
                } else {
                    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
                        this._weekdaysMinRegex = defaultWeekdaysMinRegex
                    }
                    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
                }
            }

            function computeWeekdaysParse() {
                function cmpLenRev(a, b) {
                    return b.length - a.length
                }
                var minPieces = [],
                    shortPieces = [],
                    longPieces = [],
                    mixedPieces = [],
                    i, mom, minp, shortp, longp;
                for (i = 0; i < 7; i++) {
                    mom = createUTC([2e3, 1]).day(i);
                    minp = this.weekdaysMin(mom, "");
                    shortp = this.weekdaysShort(mom, "");
                    longp = this.weekdays(mom, "");
                    minPieces.push(minp);
                    shortPieces.push(shortp);
                    longPieces.push(longp);
                    mixedPieces.push(minp);
                    mixedPieces.push(shortp);
                    mixedPieces.push(longp)
                }
                minPieces.sort(cmpLenRev);
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 7; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                    mixedPieces[i] = regexEscape(mixedPieces[i])
                }
                this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
                this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
                this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i")
            }

            function hFormat() {
                return this.hours() % 12 || 12
            }

            function kFormat() {
                return this.hours() || 24
            }
            addFormatToken("H", ["HH", 2], 0, "hour");
            addFormatToken("h", ["hh", 2], 0, hFormat);
            addFormatToken("k", ["kk", 2], 0, kFormat);
            addFormatToken("hmm", 0, 0, function() {
                return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2)
            });
            addFormatToken("hmmss", 0, 0, function() {
                return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2)
            });
            addFormatToken("Hmm", 0, 0, function() {
                return "" + this.hours() + zeroFill(this.minutes(), 2)
            });
            addFormatToken("Hmmss", 0, 0, function() {
                return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2)
            });

            function meridiem(token, lowercase) {
                addFormatToken(token, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase)
                })
            }
            meridiem("a", true);
            meridiem("A", false);
            addUnitAlias("hour", "h");
            addUnitPriority("hour", 13);

            function matchMeridiem(isStrict, locale) {
                return locale._meridiemParse
            }
            addRegexToken("a", matchMeridiem);
            addRegexToken("A", matchMeridiem);
            addRegexToken("H", match1to2);
            addRegexToken("h", match1to2);
            addRegexToken("HH", match1to2, match2);
            addRegexToken("hh", match1to2, match2);
            addRegexToken("hmm", match3to4);
            addRegexToken("hmmss", match5to6);
            addRegexToken("Hmm", match3to4);
            addRegexToken("Hmmss", match5to6);
            addParseToken(["H", "HH"], HOUR);
            addParseToken(["a", "A"], function(input, array, config) {
                config._isPm = config._locale.isPM(input);
                config._meridiem = input
            });
            addParseToken(["h", "hh"], function(input, array, config) {
                array[HOUR] = toInt(input);
                getParsingFlags(config).bigHour = true
            });
            addParseToken("hmm", function(input, array, config) {
                var pos = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos));
                array[MINUTE] = toInt(input.substr(pos));
                getParsingFlags(config).bigHour = true
            });
            addParseToken("hmmss", function(input, array, config) {
                var pos1 = input.length - 4;
                var pos2 = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos1));
                array[MINUTE] = toInt(input.substr(pos1, 2));
                array[SECOND] = toInt(input.substr(pos2));
                getParsingFlags(config).bigHour = true
            });
            addParseToken("Hmm", function(input, array, config) {
                var pos = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos));
                array[MINUTE] = toInt(input.substr(pos))
            });
            addParseToken("Hmmss", function(input, array, config) {
                var pos1 = input.length - 4;
                var pos2 = input.length - 2;
                array[HOUR] = toInt(input.substr(0, pos1));
                array[MINUTE] = toInt(input.substr(pos1, 2));
                array[SECOND] = toInt(input.substr(pos2))
            });

            function localeIsPM(input) {
                return (input + "").toLowerCase().charAt(0) === "p"
            }
            var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

            function localeMeridiem(hours, minutes, isLower) {
                if (hours > 11) {
                    return isLower ? "pm" : "PM"
                } else {
                    return isLower ? "am" : "AM"
                }
            }
            var getSetHour = makeGetSet("Hours", true);
            var baseConfig = {
                calendar: defaultCalendar,
                longDateFormat: defaultLongDateFormat,
                invalidDate: defaultInvalidDate,
                ordinal: defaultOrdinal,
                ordinalParse: defaultOrdinalParse,
                relativeTime: defaultRelativeTime,
                months: defaultLocaleMonths,
                monthsShort: defaultLocaleMonthsShort,
                week: defaultLocaleWeek,
                weekdays: defaultLocaleWeekdays,
                weekdaysMin: defaultLocaleWeekdaysMin,
                weekdaysShort: defaultLocaleWeekdaysShort,
                meridiemParse: defaultLocaleMeridiemParse
            };
            var locales = {};
            var localeFamilies = {};
            var globalLocale;

            function normalizeLocale(key) {
                return key ? key.toLowerCase().replace("_", "-") : key
            }

            function chooseLocale(names) {
                var i = 0,
                    j, next, locale, split;
                while (i < names.length) {
                    split = normalizeLocale(names[i]).split("-");
                    j = split.length;
                    next = normalizeLocale(names[i + 1]);
                    next = next ? next.split("-") : null;
                    while (j > 0) {
                        locale = loadLocale(split.slice(0, j).join("-"));
                        if (locale) {
                            return locale
                        }
                        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                            break
                        }
                        j--
                    }
                    i++
                }
                return null
            }

            function loadLocale(name) {
                var oldLocale = null;
                if (!locales[name] && typeof module !== "undefined" && module && module.exports) {
                    try {
                        oldLocale = globalLocale._abbr;
                        require("./locale/" + name);
                        getSetGlobalLocale(oldLocale)
                    } catch (e) {}
                }
                return locales[name]
            }

            function getSetGlobalLocale(key, values) {
                var data;
                if (key) {
                    if (isUndefined(values)) {
                        data = getLocale(key)
                    } else {
                        data = defineLocale(key, values)
                    }
                    if (data) {
                        globalLocale = data
                    }
                }
                return globalLocale._abbr
            }

            function defineLocale(name, config) {
                if (config !== null) {
                    var parentConfig = baseConfig;
                    config.abbr = name;
                    if (locales[name] != null) {
                        deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                        parentConfig = locales[name]._config
                    } else if (config.parentLocale != null) {
                        if (locales[config.parentLocale] != null) {
                            parentConfig = locales[config.parentLocale]._config
                        } else {
                            if (!localeFamilies[config.parentLocale]) {
                                localeFamilies[config.parentLocale] = []
                            }
                            localeFamilies[config.parentLocale].push({
                                name: name,
                                config: config
                            });
                            return null
                        }
                    }
                    locales[name] = new Locale(mergeConfigs(parentConfig, config));
                    if (localeFamilies[name]) {
                        localeFamilies[name].forEach(function(x) {
                            defineLocale(x.name, x.config)
                        })
                    }
                    getSetGlobalLocale(name);
                    return locales[name]
                } else {
                    delete locales[name];
                    return null
                }
            }

            function updateLocale(name, config) {
                if (config != null) {
                    var locale, parentConfig = baseConfig;
                    if (locales[name] != null) {
                        parentConfig = locales[name]._config
                    }
                    config = mergeConfigs(parentConfig, config);
                    locale = new Locale(config);
                    locale.parentLocale = locales[name];
                    locales[name] = locale;
                    getSetGlobalLocale(name)
                } else {
                    if (locales[name] != null) {
                        if (locales[name].parentLocale != null) {
                            locales[name] = locales[name].parentLocale
                        } else if (locales[name] != null) {
                            delete locales[name]
                        }
                    }
                }
                return locales[name]
            }

            function getLocale(key) {
                var locale;
                if (key && key._locale && key._locale._abbr) {
                    key = key._locale._abbr
                }
                if (!key) {
                    return globalLocale
                }
                if (!isArray(key)) {
                    locale = loadLocale(key);
                    if (locale) {
                        return locale
                    }
                    key = [key]
                }
                return chooseLocale(key)
            }

            function listLocales() {
                return keys$1(locales)
            }

            function checkOverflow(m) {
                var overflow;
                var a = m._a;
                if (a && getParsingFlags(m).overflow === -2) {
                    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
                    if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                        overflow = DATE
                    }
                    if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                        overflow = WEEK
                    }
                    if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                        overflow = WEEKDAY
                    }
                    getParsingFlags(m).overflow = overflow
                }
                return m
            }
            var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
            var isoDates = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, false],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, false],
                ["YYYYDDD", /\d{7}/]
            ];
            var isoTimes = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ];
            var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

            function configFromISO(config) {
                var i, l, string = config._i,
                    match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
                    allowTime, dateFormat, timeFormat, tzFormat;
                if (match) {
                    getParsingFlags(config).iso = true;
                    for (i = 0, l = isoDates.length; i < l; i++) {
                        if (isoDates[i][1].exec(match[1])) {
                            dateFormat = isoDates[i][0];
                            allowTime = isoDates[i][2] !== false;
                            break
                        }
                    }
                    if (dateFormat == null) {
                        config._isValid = false;
                        return
                    }
                    if (match[3]) {
                        for (i = 0, l = isoTimes.length; i < l; i++) {
                            if (isoTimes[i][1].exec(match[3])) {
                                timeFormat = (match[2] || " ") + isoTimes[i][0];
                                break
                            }
                        }
                        if (timeFormat == null) {
                            config._isValid = false;
                            return
                        }
                    }
                    if (!allowTime && timeFormat != null) {
                        config._isValid = false;
                        return
                    }
                    if (match[4]) {
                        if (tzRegex.exec(match[4])) {
                            tzFormat = "Z"
                        } else {
                            config._isValid = false;
                            return
                        }
                    }
                    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
                    configFromStringAndFormat(config)
                } else {
                    config._isValid = false
                }
            }

            function configFromString(config) {
                var matched = aspNetJsonRegex.exec(config._i);
                if (matched !== null) {
                    config._d = new Date(+matched[1]);
                    return
                }
                configFromISO(config);
                if (config._isValid === false) {
                    delete config._isValid;
                    hooks.createFromInputFallback(config)
                }
            }
            hooks.createFromInputFallback = deprecate("value provided is not in a recognized ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
                config._d = new Date(config._i + (config._useUTC ? " UTC" : ""))
            });

            function defaults(a, b, c) {
                if (a != null) {
                    return a
                }
                if (b != null) {
                    return b
                }
                return c
            }

            function currentDateArray(config) {
                var nowValue = new Date(hooks.now());
                if (config._useUTC) {
                    return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()]
                }
                return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()]
            }

            function configFromArray(config) {
                var i, date, input = [],
                    currentDate, yearToUse;
                if (config._d) {
                    return
                }
                currentDate = currentDateArray(config);
                if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
                    dayOfYearFromWeekInfo(config)
                }
                if (config._dayOfYear) {
                    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
                    if (config._dayOfYear > daysInYear(yearToUse)) {
                        getParsingFlags(config)._overflowDayOfYear = true
                    }
                    date = createUTCDate(yearToUse, 0, config._dayOfYear);
                    config._a[MONTH] = date.getUTCMonth();
                    config._a[DATE] = date.getUTCDate()
                }
                for (i = 0; i < 3 && config._a[i] == null; ++i) {
                    config._a[i] = input[i] = currentDate[i]
                }
                for (; i < 7; i++) {
                    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i]
                }
                if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
                    config._nextDay = true;
                    config._a[HOUR] = 0
                }
                config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
                if (config._tzm != null) {
                    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm)
                }
                if (config._nextDay) {
                    config._a[HOUR] = 24
                }
            }

            function dayOfYearFromWeekInfo(config) {
                var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
                w = config._w;
                if (w.GG != null || w.W != null || w.E != null) {
                    dow = 1;
                    doy = 4;
                    weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
                    week = defaults(w.W, 1);
                    weekday = defaults(w.E, 1);
                    if (weekday < 1 || weekday > 7) {
                        weekdayOverflow = true
                    }
                } else {
                    dow = config._locale._week.dow;
                    doy = config._locale._week.doy;
                    var curWeek = weekOfYear(createLocal(), dow, doy);
                    weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
                    week = defaults(w.w, curWeek.week);
                    if (w.d != null) {
                        weekday = w.d;
                        if (weekday < 0 || weekday > 6) {
                            weekdayOverflow = true
                        }
                    } else if (w.e != null) {
                        weekday = w.e + dow;
                        if (w.e < 0 || w.e > 6) {
                            weekdayOverflow = true
                        }
                    } else {
                        weekday = dow
                    }
                }
                if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
                    getParsingFlags(config)._overflowWeeks = true
                } else if (weekdayOverflow != null) {
                    getParsingFlags(config)._overflowWeekday = true
                } else {
                    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
                    config._a[YEAR] = temp.year;
                    config._dayOfYear = temp.dayOfYear
                }
            }
            hooks.ISO_8601 = function() {};

            function configFromStringAndFormat(config) {
                if (config._f === hooks.ISO_8601) {
                    configFromISO(config);
                    return
                }
                config._a = [];
                getParsingFlags(config).empty = true;
                var string = "" + config._i,
                    i, parsedInput, tokens, token, skipped, stringLength = string.length,
                    totalParsedInputLength = 0;
                tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];
                    parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
                    if (parsedInput) {
                        skipped = string.substr(0, string.indexOf(parsedInput));
                        if (skipped.length > 0) {
                            getParsingFlags(config).unusedInput.push(skipped)
                        }
                        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                        totalParsedInputLength += parsedInput.length
                    }
                    if (formatTokenFunctions[token]) {
                        if (parsedInput) {
                            getParsingFlags(config).empty = false
                        } else {
                            getParsingFlags(config).unusedTokens.push(token)
                        }
                        addTimeToArrayFromToken(token, parsedInput, config)
                    } else if (config._strict && !parsedInput) {
                        getParsingFlags(config).unusedTokens.push(token)
                    }
                }
                getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
                if (string.length > 0) {
                    getParsingFlags(config).unusedInput.push(string)
                }
                if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
                    getParsingFlags(config).bigHour = undefined
                }
                getParsingFlags(config).parsedDateParts = config._a.slice(0);
                getParsingFlags(config).meridiem = config._meridiem;
                config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
                configFromArray(config);
                checkOverflow(config)
            }

            function meridiemFixWrap(locale, hour, meridiem) {
                var isPm;
                if (meridiem == null) {
                    return hour
                }
                if (locale.meridiemHour != null) {
                    return locale.meridiemHour(hour, meridiem)
                } else if (locale.isPM != null) {
                    isPm = locale.isPM(meridiem);
                    if (isPm && hour < 12) {
                        hour += 12
                    }
                    if (!isPm && hour === 12) {
                        hour = 0
                    }
                    return hour
                } else {
                    return hour
                }
            }

            function configFromStringAndArray(config) {
                var tempConfig, bestMoment, scoreToBeat, i, currentScore;
                if (config._f.length === 0) {
                    getParsingFlags(config).invalidFormat = true;
                    config._d = new Date(NaN);
                    return
                }
                for (i = 0; i < config._f.length; i++) {
                    currentScore = 0;
                    tempConfig = copyConfig({}, config);
                    if (config._useUTC != null) {
                        tempConfig._useUTC = config._useUTC
                    }
                    tempConfig._f = config._f[i];
                    configFromStringAndFormat(tempConfig);
                    if (!isValid(tempConfig)) {
                        continue
                    }
                    currentScore += getParsingFlags(tempConfig).charsLeftOver;
                    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
                    getParsingFlags(tempConfig).score = currentScore;
                    if (scoreToBeat == null || currentScore < scoreToBeat) {
                        scoreToBeat = currentScore;
                        bestMoment = tempConfig
                    }
                }
                extend(config, bestMoment || tempConfig)
            }

            function configFromObject(config) {
                if (config._d) {
                    return
                }
                var i = normalizeObjectUnits(config._i);
                config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
                    return obj && parseInt(obj, 10)
                });
                configFromArray(config)
            }

            function createFromConfig(config) {
                var res = new Moment(checkOverflow(prepareConfig(config)));
                if (res._nextDay) {
                    res.add(1, "d");
                    res._nextDay = undefined
                }
                return res
            }

            function prepareConfig(config) {
                var input = config._i,
                    format = config._f;
                config._locale = config._locale || getLocale(config._l);
                if (input === null || format === undefined && input === "") {
                    return createInvalid({
                        nullInput: true
                    })
                }
                if (typeof input === "string") {
                    config._i = input = config._locale.preparse(input)
                }
                if (isMoment(input)) {
                    return new Moment(checkOverflow(input))
                } else if (isDate(input)) {
                    config._d = input
                } else if (isArray(format)) {
                    configFromStringAndArray(config)
                } else if (format) {
                    configFromStringAndFormat(config)
                } else {
                    configFromInput(config)
                }
                if (!isValid(config)) {
                    config._d = null
                }
                return config
            }

            function configFromInput(config) {
                var input = config._i;
                if (input === undefined) {
                    config._d = new Date(hooks.now())
                } else if (isDate(input)) {
                    config._d = new Date(input.valueOf())
                } else if (typeof input === "string") {
                    configFromString(config)
                } else if (isArray(input)) {
                    config._a = map(input.slice(0), function(obj) {
                        return parseInt(obj, 10)
                    });
                    configFromArray(config)
                } else if (typeof input === "object") {
                    configFromObject(config)
                } else if (isNumber(input)) {
                    config._d = new Date(input)
                } else {
                    hooks.createFromInputFallback(config)
                }
            }

            function createLocalOrUTC(input, format, locale, strict, isUTC) {
                var c = {};
                if (locale === true || locale === false) {
                    strict = locale;
                    locale = undefined
                }
                if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
                    input = undefined
                }
                c._isAMomentObject = true;
                c._useUTC = c._isUTC = isUTC;
                c._l = locale;
                c._i = input;
                c._f = format;
                c._strict = strict;
                return createFromConfig(c)
            }

            function createLocal(input, format, locale, strict) {
                return createLocalOrUTC(input, format, locale, strict, false)
            }
            var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other
                } else {
                    return createInvalid()
                }
            });
            var prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other
                } else {
                    return createInvalid()
                }
            });

            function pickBy(fn, moments) {
                var res, i;
                if (moments.length === 1 && isArray(moments[0])) {
                    moments = moments[0]
                }
                if (!moments.length) {
                    return createLocal()
                }
                res = moments[0];
                for (i = 1; i < moments.length; ++i) {
                    if (!moments[i].isValid() || moments[i][fn](res)) {
                        res = moments[i]
                    }
                }
                return res
            }

            function min() {
                var args = [].slice.call(arguments, 0);
                return pickBy("isBefore", args)
            }

            function max() {
                var args = [].slice.call(arguments, 0);
                return pickBy("isAfter", args)
            }
            var now = function() {
                return Date.now ? Date.now() : +new Date
            };

            function Duration(duration) {
                var normalizedInput = normalizeObjectUnits(duration),
                    years = normalizedInput.year || 0,
                    quarters = normalizedInput.quarter || 0,
                    months = normalizedInput.month || 0,
                    weeks = normalizedInput.week || 0,
                    days = normalizedInput.day || 0,
                    hours = normalizedInput.hour || 0,
                    minutes = normalizedInput.minute || 0,
                    seconds = normalizedInput.second || 0,
                    milliseconds = normalizedInput.millisecond || 0;
                this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1e3 * 60 * 60;
                this._days = +days + weeks * 7;
                this._months = +months + quarters * 3 + years * 12;
                this._data = {};
                this._locale = getLocale();
                this._bubble()
            }

            function isDuration(obj) {
                return obj instanceof Duration
            }

            function absRound(number) {
                if (number < 0) {
                    return Math.round(-1 * number) * -1
                } else {
                    return Math.round(number)
                }
            }

            function offset(token, separator) {
                addFormatToken(token, 0, 0, function() {
                    var offset = this.utcOffset();
                    var sign = "+";
                    if (offset < 0) {
                        offset = -offset;
                        sign = "-"
                    }
                    return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2)
                })
            }
            offset("Z", ":");
            offset("ZZ", "");
            addRegexToken("Z", matchShortOffset);
            addRegexToken("ZZ", matchShortOffset);
            addParseToken(["Z", "ZZ"], function(input, array, config) {
                config._useUTC = true;
                config._tzm = offsetFromString(matchShortOffset, input)
            });
            var chunkOffset = /([\+\-]|\d\d)/gi;

            function offsetFromString(matcher, string) {
                var matches = (string || "").match(matcher);
                if (matches === null) {
                    return null
                }
                var chunk = matches[matches.length - 1] || [];
                var parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
                var minutes = +(parts[1] * 60) + toInt(parts[2]);
                return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes
            }

            function cloneWithOffset(input, model) {
                var res, diff;
                if (model._isUTC) {
                    res = model.clone();
                    diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
                    res._d.setTime(res._d.valueOf() + diff);
                    hooks.updateOffset(res, false);
                    return res
                } else {
                    return createLocal(input).local()
                }
            }

            function getDateOffset(m) {
                return -Math.round(m._d.getTimezoneOffset() / 15) * 15
            }
            hooks.updateOffset = function() {};

            function getSetOffset(input, keepLocalTime) {
                var offset = this._offset || 0,
                    localAdjust;
                if (!this.isValid()) {
                    return input != null ? this : NaN
                }
                if (input != null) {
                    if (typeof input === "string") {
                        input = offsetFromString(matchShortOffset, input);
                        if (input === null) {
                            return this
                        }
                    } else if (Math.abs(input) < 16) {
                        input = input * 60
                    }
                    if (!this._isUTC && keepLocalTime) {
                        localAdjust = getDateOffset(this)
                    }
                    this._offset = input;
                    this._isUTC = true;
                    if (localAdjust != null) {
                        this.add(localAdjust, "m")
                    }
                    if (offset !== input) {
                        if (!keepLocalTime || this._changeInProgress) {
                            addSubtract(this, createDuration(input - offset, "m"), 1, false)
                        } else if (!this._changeInProgress) {
                            this._changeInProgress = true;
                            hooks.updateOffset(this, true);
                            this._changeInProgress = null
                        }
                    }
                    return this
                } else {
                    return this._isUTC ? offset : getDateOffset(this)
                }
            }

            function getSetZone(input, keepLocalTime) {
                if (input != null) {
                    if (typeof input !== "string") {
                        input = -input
                    }
                    this.utcOffset(input, keepLocalTime);
                    return this
                } else {
                    return -this.utcOffset()
                }
            }

            function setOffsetToUTC(keepLocalTime) {
                return this.utcOffset(0, keepLocalTime)
            }

            function setOffsetToLocal(keepLocalTime) {
                if (this._isUTC) {
                    this.utcOffset(0, keepLocalTime);
                    this._isUTC = false;
                    if (keepLocalTime) {
                        this.subtract(getDateOffset(this), "m")
                    }
                }
                return this
            }

            function setOffsetToParsedOffset() {
                if (this._tzm != null) {
                    this.utcOffset(this._tzm)
                } else if (typeof this._i === "string") {
                    var tZone = offsetFromString(matchOffset, this._i);
                    if (tZone != null) {
                        this.utcOffset(tZone)
                    } else {
                        this.utcOffset(0, true)
                    }
                }
                return this
            }

            function hasAlignedHourOffset(input) {
                if (!this.isValid()) {
                    return false
                }
                input = input ? createLocal(input).utcOffset() : 0;
                return (this.utcOffset() - input) % 60 === 0
            }

            function isDaylightSavingTime() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function isDaylightSavingTimeShifted() {
                if (!isUndefined(this._isDSTShifted)) {
                    return this._isDSTShifted
                }
                var c = {};
                copyConfig(c, this);
                c = prepareConfig(c);
                if (c._a) {
                    var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
                    this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0
                } else {
                    this._isDSTShifted = false
                }
                return this._isDSTShifted
            }

            function isLocal() {
                return this.isValid() ? !this._isUTC : false
            }

            function isUtcOffset() {
                return this.isValid() ? this._isUTC : false
            }

            function isUtc() {
                return this.isValid() ? this._isUTC && this._offset === 0 : false
            }
            var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
            var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

            function createDuration(input, key) {
                var duration = input,
                    match = null,
                    sign, ret, diffRes;
                if (isDuration(input)) {
                    duration = {
                        ms: input._milliseconds,
                        d: input._days,
                        M: input._months
                    }
                } else if (isNumber(input)) {
                    duration = {};
                    if (key) {
                        duration[key] = input
                    } else {
                        duration.milliseconds = input
                    }
                } else if (!!(match = aspNetRegex.exec(input))) {
                    sign = match[1] === "-" ? -1 : 1;
                    duration = {
                        y: 0,
                        d: toInt(match[DATE]) * sign,
                        h: toInt(match[HOUR]) * sign,
                        m: toInt(match[MINUTE]) * sign,
                        s: toInt(match[SECOND]) * sign,
                        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign
                    }
                } else if (!!(match = isoRegex.exec(input))) {
                    sign = match[1] === "-" ? -1 : 1;
                    duration = {
                        y: parseIso(match[2], sign),
                        M: parseIso(match[3], sign),
                        w: parseIso(match[4], sign),
                        d: parseIso(match[5], sign),
                        h: parseIso(match[6], sign),
                        m: parseIso(match[7], sign),
                        s: parseIso(match[8], sign)
                    }
                } else if (duration == null) {
                    duration = {}
                } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
                    diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
                    duration = {};
                    duration.ms = diffRes.milliseconds;
                    duration.M = diffRes.months
                }
                ret = new Duration(duration);
                if (isDuration(input) && hasOwnProp(input, "_locale")) {
                    ret._locale = input._locale
                }
                return ret
            }
            createDuration.fn = Duration.prototype;

            function parseIso(inp, sign) {
                var res = inp && parseFloat(inp.replace(",", "."));
                return (isNaN(res) ? 0 : res) * sign
            }

            function positiveMomentsDifference(base, other) {
                var res = {
                    milliseconds: 0,
                    months: 0
                };
                res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
                if (base.clone().add(res.months, "M").isAfter(other)) {
                    --res.months
                }
                res.milliseconds = +other - +base.clone().add(res.months, "M");
                return res
            }

            function momentsDifference(base, other) {
                var res;
                if (!(base.isValid() && other.isValid())) {
                    return {
                        milliseconds: 0,
                        months: 0
                    }
                }
                other = cloneWithOffset(other, base);
                if (base.isBefore(other)) {
                    res = positiveMomentsDifference(base, other)
                } else {
                    res = positiveMomentsDifference(other, base);
                    res.milliseconds = -res.milliseconds;
                    res.months = -res.months
                }
                return res
            }

            function createAdder(direction, name) {
                return function(val, period) {
                    var dur, tmp;
                    if (period !== null && !isNaN(+period)) {
                        deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                        tmp = val;
                        val = period;
                        period = tmp
                    }
                    val = typeof val === "string" ? +val : val;
                    dur = createDuration(val, period);
                    addSubtract(this, dur, direction);
                    return this
                }
            }

            function addSubtract(mom, duration, isAdding, updateOffset) {
                var milliseconds = duration._milliseconds,
                    days = absRound(duration._days),
                    months = absRound(duration._months);
                if (!mom.isValid()) {
                    return
                }
                updateOffset = updateOffset == null ? true : updateOffset;
                if (milliseconds) {
                    mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding)
                }
                if (days) {
                    set$1(mom, "Date", get(mom, "Date") + days * isAdding)
                }
                if (months) {
                    setMonth(mom, get(mom, "Month") + months * isAdding)
                }
                if (updateOffset) {
                    hooks.updateOffset(mom, days || months)
                }
            }
            var add = createAdder(1, "add");
            var subtract = createAdder(-1, "subtract");

            function getCalendarFormat(myMoment, now) {
                var diff = myMoment.diff(now, "days", true);
                return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse"
            }

            function calendar$1(time, formats) {
                var now = time || createLocal(),
                    sod = cloneWithOffset(now, this).startOf("day"),
                    format = hooks.calendarFormat(this, sod) || "sameElse";
                var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
                return this.format(output || this.localeData().calendar(format, this, createLocal(now)))
            }

            function clone() {
                return new Moment(this)
            }

            function isAfter(input, units) {
                var localInput = isMoment(input) ? input : createLocal(input);
                if (!(this.isValid() && localInput.isValid())) {
                    return false
                }
                units = normalizeUnits(!isUndefined(units) ? units : "millisecond");
                if (units === "millisecond") {
                    return this.valueOf() > localInput.valueOf()
                } else {
                    return localInput.valueOf() < this.clone().startOf(units).valueOf()
                }
            }

            function isBefore(input, units) {
                var localInput = isMoment(input) ? input : createLocal(input);
                if (!(this.isValid() && localInput.isValid())) {
                    return false
                }
                units = normalizeUnits(!isUndefined(units) ? units : "millisecond");
                if (units === "millisecond") {
                    return this.valueOf() < localInput.valueOf()
                } else {
                    return this.clone().endOf(units).valueOf() < localInput.valueOf()
                }
            }

            function isBetween(from, to, units, inclusivity) {
                inclusivity = inclusivity || "()";
                return (inclusivity[0] === "(" ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ")" ? this.isBefore(to, units) : !this.isAfter(to, units))
            }

            function isSame(input, units) {
                var localInput = isMoment(input) ? input : createLocal(input),
                    inputMs;
                if (!(this.isValid() && localInput.isValid())) {
                    return false
                }
                units = normalizeUnits(units || "millisecond");
                if (units === "millisecond") {
                    return this.valueOf() === localInput.valueOf()
                } else {
                    inputMs = localInput.valueOf();
                    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf()
                }
            }

            function isSameOrAfter(input, units) {
                return this.isSame(input, units) || this.isAfter(input, units)
            }

            function isSameOrBefore(input, units) {
                return this.isSame(input, units) || this.isBefore(input, units)
            }

            function diff(input, units, asFloat) {
                var that, zoneDelta, delta, output;
                if (!this.isValid()) {
                    return NaN
                }
                that = cloneWithOffset(input, this);
                if (!that.isValid()) {
                    return NaN
                }
                zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
                units = normalizeUnits(units);
                if (units === "year" || units === "month" || units === "quarter") {
                    output = monthDiff(this, that);
                    if (units === "quarter") {
                        output = output / 3
                    } else if (units === "year") {
                        output = output / 12
                    }
                } else {
                    delta = this - that;
                    output = units === "second" ? delta / 1e3 : units === "minute" ? delta / 6e4 : units === "hour" ? delta / 36e5 : units === "day" ? (delta - zoneDelta) / 864e5 : units === "week" ? (delta - zoneDelta) / 6048e5 : delta
                }
                return asFloat ? output : absFloor(output)
            }

            function monthDiff(a, b) {
                var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
                    anchor = a.clone().add(wholeMonthDiff, "months"),
                    anchor2, adjust;
                if (b - anchor < 0) {
                    anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
                    adjust = (b - anchor) / (anchor - anchor2)
                } else {
                    anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
                    adjust = (b - anchor) / (anchor2 - anchor)
                }
                return -(wholeMonthDiff + adjust) || 0
            }
            hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

            function toString() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function toISOString() {
                var m = this.clone().utc();
                if (0 < m.year() && m.year() <= 9999) {
                    if (isFunction(Date.prototype.toISOString)) {
                        return this.toDate().toISOString()
                    } else {
                        return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                    }
                } else {
                    return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }
            }

            function inspect() {
                if (!this.isValid()) {
                    return "moment.invalid(/* " + this._i + " */)"
                }
                var func = "moment";
                var zone = "";
                if (!this.isLocal()) {
                    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
                    zone = "Z"
                }
                var prefix = "[" + func + '("]';
                var year = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                var datetime = "-MM-DD[T]HH:mm:ss.SSS";
                var suffix = zone + '[")]';
                return this.format(prefix + year + datetime + suffix)
            }

            function format(inputString) {
                if (!inputString) {
                    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat
                }
                var output = formatMoment(this, inputString);
                return this.localeData().postformat(output)
            }

            function from(time, withoutSuffix) {
                if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
                    return createDuration({
                        to: this,
                        from: time
                    }).locale(this.locale()).humanize(!withoutSuffix)
                } else {
                    return this.localeData().invalidDate()
                }
            }

            function fromNow(withoutSuffix) {
                return this.from(createLocal(), withoutSuffix)
            }

            function to(time, withoutSuffix) {
                if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
                    return createDuration({
                        from: this,
                        to: time
                    }).locale(this.locale()).humanize(!withoutSuffix)
                } else {
                    return this.localeData().invalidDate()
                }
            }

            function toNow(withoutSuffix) {
                return this.to(createLocal(), withoutSuffix)
            }

            function locale(key) {
                var newLocaleData;
                if (key === undefined) {
                    return this._locale._abbr
                } else {
                    newLocaleData = getLocale(key);
                    if (newLocaleData != null) {
                        this._locale = newLocaleData
                    }
                    return this
                }
            }
            var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
                if (key === undefined) {
                    return this.localeData()
                } else {
                    return this.locale(key)
                }
            });

            function localeData() {
                return this._locale
            }

            function startOf(units) {
                units = normalizeUnits(units);
                // the following switch intentionally omits break keywords
                switch (units) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                if (units === "week") {
                    this.weekday(0)
                }
                if (units === "isoWeek") {
                    this.isoWeekday(1)
                }
                if (units === "quarter") {
                    this.month(Math.floor(this.month() / 3) * 3)
                }
                return this
            }

            function endOf(units) {
                units = normalizeUnits(units);
                if (units === undefined || units === "millisecond") {
                    return this
                }
                if (units === "date") {
                    units = "day"
                }
                return this.startOf(units).add(1, units === "isoWeek" ? "week" : units).subtract(1, "ms")
            }

            function valueOf() {
                return this._d.valueOf() - (this._offset || 0) * 6e4
            }

            function unix() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function toDate() {
                return new Date(this.valueOf())
            }

            function toArray() {
                var m = this;
                return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()]
            }

            function toObject() {
                var m = this;
                return {
                    years: m.year(),
                    months: m.month(),
                    date: m.date(),
                    hours: m.hours(),
                    minutes: m.minutes(),
                    seconds: m.seconds(),
                    milliseconds: m.milliseconds()
                }
            }

            function toJSON() {
                return this.isValid() ? this.toISOString() : null
            }

            function isValid$1() {
                return isValid(this)
            }

            function parsingFlags() {
                return extend({}, getParsingFlags(this))
            }

            function invalidAt() {
                return getParsingFlags(this).overflow
            }

            function creationData() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            addFormatToken(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            });
            addFormatToken(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            });

            function addWeekYearFormatToken(token, getter) {
                addFormatToken(0, [token, token.length], 0, getter)
            }
            addWeekYearFormatToken("gggg", "weekYear");
            addWeekYearFormatToken("ggggg", "weekYear");
            addWeekYearFormatToken("GGGG", "isoWeekYear");
            addWeekYearFormatToken("GGGGG", "isoWeekYear");
            addUnitAlias("weekYear", "gg");
            addUnitAlias("isoWeekYear", "GG");
            addUnitPriority("weekYear", 1);
            addUnitPriority("isoWeekYear", 1);
            addRegexToken("G", matchSigned);
            addRegexToken("g", matchSigned);
            addRegexToken("GG", match1to2, match2);
            addRegexToken("gg", match1to2, match2);
            addRegexToken("GGGG", match1to4, match4);
            addRegexToken("gggg", match1to4, match4);
            addRegexToken("GGGGG", match1to6, match6);
            addRegexToken("ggggg", match1to6, match6);
            addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token) {
                week[token.substr(0, 2)] = toInt(input)
            });
            addWeekParseToken(["gg", "GG"], function(input, week, config, token) {
                week[token] = hooks.parseTwoDigitYear(input)
            });

            function getSetWeekYear(input) {
                return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function getSetISOWeekYear(input) {
                return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function getISOWeeksInYear() {
                return weeksInYear(this.year(), 1, 4)
            }

            function getWeeksInYear() {
                var weekInfo = this.localeData()._week;
                return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
            }

            function getSetWeekYearHelper(input, week, weekday, dow, doy) {
                var weeksTarget;
                if (input == null) {
                    return weekOfYear(this, dow, doy).year
                } else {
                    weeksTarget = weeksInYear(input, dow, doy);
                    if (week > weeksTarget) {
                        week = weeksTarget
                    }
                    return setWeekAll.call(this, input, week, weekday, dow, doy)
                }
            }

            function setWeekAll(weekYear, week, weekday, dow, doy) {
                var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
                    date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
                this.year(date.getUTCFullYear());
                this.month(date.getUTCMonth());
                this.date(date.getUTCDate());
                return this
            }
            addFormatToken("Q", 0, "Qo", "quarter");
            addUnitAlias("quarter", "Q");
            addUnitPriority("quarter", 7);
            addRegexToken("Q", match1);
            addParseToken("Q", function(input, array) {
                array[MONTH] = (toInt(input) - 1) * 3
            });

            function getSetQuarter(input) {
                return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3)
            }
            addFormatToken("D", ["DD", 2], "Do", "date");
            addUnitAlias("date", "D");
            addUnitPriority("date", 9);
            addRegexToken("D", match1to2);
            addRegexToken("DD", match1to2, match2);
            addRegexToken("Do", function(isStrict, locale) {
                return isStrict ? locale._ordinalParse : locale._ordinalParseLenient
            });
            addParseToken(["D", "DD"], DATE);
            addParseToken("Do", function(input, array) {
                array[DATE] = toInt(input.match(match1to2)[0], 10)
            });
            var getSetDayOfMonth = makeGetSet("Date", true);
            addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
            addUnitAlias("dayOfYear", "DDD");
            addUnitPriority("dayOfYear", 4);
            addRegexToken("DDD", match1to3);
            addRegexToken("DDDD", match3);
            addParseToken(["DDD", "DDDD"], function(input, array, config) {
                config._dayOfYear = toInt(input)
            });

            function getSetDayOfYear(input) {
                var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return input == null ? dayOfYear : this.add(input - dayOfYear, "d")
            }
            addFormatToken("m", ["mm", 2], 0, "minute");
            addUnitAlias("minute", "m");
            addUnitPriority("minute", 14);
            addRegexToken("m", match1to2);
            addRegexToken("mm", match1to2, match2);
            addParseToken(["m", "mm"], MINUTE);
            var getSetMinute = makeGetSet("Minutes", false);
            addFormatToken("s", ["ss", 2], 0, "second");
            addUnitAlias("second", "s");
            addUnitPriority("second", 15);
            addRegexToken("s", match1to2);
            addRegexToken("ss", match1to2, match2);
            addParseToken(["s", "ss"], SECOND);
            var getSetSecond = makeGetSet("Seconds", false);
            addFormatToken("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            });
            addFormatToken(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            });
            addFormatToken(0, ["SSS", 3], 0, "millisecond");
            addFormatToken(0, ["SSSS", 4], 0, function() {
                return this.millisecond() * 10
            });
            addFormatToken(0, ["SSSSS", 5], 0, function() {
                return this.millisecond() * 100
            });
            addFormatToken(0, ["SSSSSS", 6], 0, function() {
                return this.millisecond() * 1e3
            });
            addFormatToken(0, ["SSSSSSS", 7], 0, function() {
                return this.millisecond() * 1e4
            });
            addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
                return this.millisecond() * 1e5
            });
            addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
                return this.millisecond() * 1e6
            });
            addUnitAlias("millisecond", "ms");
            addUnitPriority("millisecond", 16);
            addRegexToken("S", match1to3, match1);
            addRegexToken("SS", match1to3, match2);
            addRegexToken("SSS", match1to3, match3);
            var token;
            for (token = "SSSS"; token.length <= 9; token += "S") {
                addRegexToken(token, matchUnsigned)
            }

            function parseMs(input, array) {
                array[MILLISECOND] = toInt(("0." + input) * 1e3)
            }
            for (token = "S"; token.length <= 9; token += "S") {
                addParseToken(token, parseMs)
            }
            var getSetMillisecond = makeGetSet("Milliseconds", false);
            addFormatToken("z", 0, 0, "zoneAbbr");
            addFormatToken("zz", 0, 0, "zoneName");

            function getZoneAbbr() {
                return this._isUTC ? "UTC" : ""
            }

            function getZoneName() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            var proto = Moment.prototype;
            proto.add = add;
            proto.calendar = calendar$1;
            proto.clone = clone;
            proto.diff = diff;
            proto.endOf = endOf;
            proto.format = format;
            proto.from = from;
            proto.fromNow = fromNow;
            proto.to = to;
            proto.toNow = toNow;
            proto.get = stringGet;
            proto.invalidAt = invalidAt;
            proto.isAfter = isAfter;
            proto.isBefore = isBefore;
            proto.isBetween = isBetween;
            proto.isSame = isSame;
            proto.isSameOrAfter = isSameOrAfter;
            proto.isSameOrBefore = isSameOrBefore;
            proto.isValid = isValid$1;
            proto.lang = lang;
            proto.locale = locale;
            proto.localeData = localeData;
            proto.max = prototypeMax;
            proto.min = prototypeMin;
            proto.parsingFlags = parsingFlags;
            proto.set = stringSet;
            proto.startOf = startOf;
            proto.subtract = subtract;
            proto.toArray = toArray;
            proto.toObject = toObject;
            proto.toDate = toDate;
            proto.toISOString = toISOString;
            proto.inspect = inspect;
            proto.toJSON = toJSON;
            proto.toString = toString;
            proto.unix = unix;
            proto.valueOf = valueOf;
            proto.creationData = creationData;
            proto.year = getSetYear;
            proto.isLeapYear = getIsLeapYear;
            proto.weekYear = getSetWeekYear;
            proto.isoWeekYear = getSetISOWeekYear;
            proto.quarter = proto.quarters = getSetQuarter;
            proto.month = getSetMonth;
            proto.daysInMonth = getDaysInMonth;
            proto.week = proto.weeks = getSetWeek;
            proto.isoWeek = proto.isoWeeks = getSetISOWeek;
            proto.weeksInYear = getWeeksInYear;
            proto.isoWeeksInYear = getISOWeeksInYear;
            proto.date = getSetDayOfMonth;
            proto.day = proto.days = getSetDayOfWeek;
            proto.weekday = getSetLocaleDayOfWeek;
            proto.isoWeekday = getSetISODayOfWeek;
            proto.dayOfYear = getSetDayOfYear;
            proto.hour = proto.hours = getSetHour;
            proto.minute = proto.minutes = getSetMinute;
            proto.second = proto.seconds = getSetSecond;
            proto.millisecond = proto.milliseconds = getSetMillisecond;
            proto.utcOffset = getSetOffset;
            proto.utc = setOffsetToUTC;
            proto.local = setOffsetToLocal;
            proto.parseZone = setOffsetToParsedOffset;
            proto.hasAlignedHourOffset = hasAlignedHourOffset;
            proto.isDST = isDaylightSavingTime;
            proto.isLocal = isLocal;
            proto.isUtcOffset = isUtcOffset;
            proto.isUtc = isUtc;
            proto.isUTC = isUtc;
            proto.zoneAbbr = getZoneAbbr;
            proto.zoneName = getZoneName;
            proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
            proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
            proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
            proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
            proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);

            function createUnix(input) {
                return createLocal(input * 1e3)
            }

            function createInZone() {
                return createLocal.apply(null, arguments).parseZone()
            }

            function preParsePostFormat(string) {
                return string
            }
            var proto$1 = Locale.prototype;
            proto$1.calendar = calendar;
            proto$1.longDateFormat = longDateFormat;
            proto$1.invalidDate = invalidDate;
            proto$1.ordinal = ordinal;
            proto$1.preparse = preParsePostFormat;
            proto$1.postformat = preParsePostFormat;
            proto$1.relativeTime = relativeTime;
            proto$1.pastFuture = pastFuture;
            proto$1.set = set;
            proto$1.months = localeMonths;
            proto$1.monthsShort = localeMonthsShort;
            proto$1.monthsParse = localeMonthsParse;
            proto$1.monthsRegex = monthsRegex;
            proto$1.monthsShortRegex = monthsShortRegex;
            proto$1.week = localeWeek;
            proto$1.firstDayOfYear = localeFirstDayOfYear;
            proto$1.firstDayOfWeek = localeFirstDayOfWeek;
            proto$1.weekdays = localeWeekdays;
            proto$1.weekdaysMin = localeWeekdaysMin;
            proto$1.weekdaysShort = localeWeekdaysShort;
            proto$1.weekdaysParse = localeWeekdaysParse;
            proto$1.weekdaysRegex = weekdaysRegex;
            proto$1.weekdaysShortRegex = weekdaysShortRegex;
            proto$1.weekdaysMinRegex = weekdaysMinRegex;
            proto$1.isPM = localeIsPM;
            proto$1.meridiem = localeMeridiem;

            function get$1(format, index, field, setter) {
                var locale = getLocale();
                var utc = createUTC().set(setter, index);
                return locale[field](utc, format)
            }

            function listMonthsImpl(format, index, field) {
                if (isNumber(format)) {
                    index = format;
                    format = undefined
                }
                format = format || "";
                if (index != null) {
                    return get$1(format, index, field, "month")
                }
                var i;
                var out = [];
                for (i = 0; i < 12; i++) {
                    out[i] = get$1(format, i, field, "month")
                }
                return out
            }

            function listWeekdaysImpl(localeSorted, format, index, field) {
                if (typeof localeSorted === "boolean") {
                    if (isNumber(format)) {
                        index = format;
                        format = undefined
                    }
                    format = format || ""
                } else {
                    format = localeSorted;
                    index = format;
                    localeSorted = false;
                    if (isNumber(format)) {
                        index = format;
                        format = undefined
                    }
                    format = format || ""
                }
                var locale = getLocale(),
                    shift = localeSorted ? locale._week.dow : 0;
                if (index != null) {
                    return get$1(format, (index + shift) % 7, field, "day")
                }
                var i;
                var out = [];
                for (i = 0; i < 7; i++) {
                    out[i] = get$1(format, (i + shift) % 7, field, "day")
                }
                return out
            }

            function listMonths(format, index) {
                return listMonthsImpl(format, index, "months")
            }

            function listMonthsShort(format, index) {
                return listMonthsImpl(format, index, "monthsShort")
            }

            function listWeekdays(localeSorted, format, index) {
                return listWeekdaysImpl(localeSorted, format, index, "weekdays")
            }

            function listWeekdaysShort(localeSorted, format, index) {
                return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort")
            }

            function listWeekdaysMin(localeSorted, format, index) {
                return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin")
            }
            getSetGlobalLocale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(number) {
                    var b = number % 10,
                        output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
                    return number + output
                }
            });
            hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
            hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
            var mathAbs = Math.abs;

            function abs() {
                var data = this._data;
                this._milliseconds = mathAbs(this._milliseconds);
                this._days = mathAbs(this._days);
                this._months = mathAbs(this._months);
                data.milliseconds = mathAbs(data.milliseconds);
                data.seconds = mathAbs(data.seconds);
                data.minutes = mathAbs(data.minutes);
                data.hours = mathAbs(data.hours);
                data.months = mathAbs(data.months);
                data.years = mathAbs(data.years);
                return this
            }

            function addSubtract$1(duration, input, value, direction) {
                var other = createDuration(input, value);
                duration._milliseconds += direction * other._milliseconds;
                duration._days += direction * other._days;
                duration._months += direction * other._months;
                return duration._bubble()
            }

            function add$1(input, value) {
                return addSubtract$1(this, input, value, 1)
            }

            function subtract$1(input, value) {
                return addSubtract$1(this, input, value, -1)
            }

            function absCeil(number) {
                if (number < 0) {
                    return Math.floor(number)
                } else {
                    return Math.ceil(number)
                }
            }

            function bubble() {
                var milliseconds = this._milliseconds;
                var days = this._days;
                var months = this._months;
                var data = this._data;
                var seconds, minutes, hours, years, monthsFromDays;
                if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
                    milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
                    days = 0;
                    months = 0
                }
                data.milliseconds = milliseconds % 1e3;
                seconds = absFloor(milliseconds / 1e3);
                data.seconds = seconds % 60;
                minutes = absFloor(seconds / 60);
                data.minutes = minutes % 60;
                hours = absFloor(minutes / 60);
                data.hours = hours % 24;
                days += absFloor(hours / 24);
                monthsFromDays = absFloor(daysToMonths(days));
                months += monthsFromDays;
                days -= absCeil(monthsToDays(monthsFromDays));
                years = absFloor(months / 12);
                months %= 12;
                data.days = days;
                data.months = months;
                data.years = years;
                return this
            }

            function daysToMonths(days) {
                return days * 4800 / 146097
            }

            function monthsToDays(months) {
                return months * 146097 / 4800
            }

            function as(units) {
                var days;
                var months;
                var milliseconds = this._milliseconds;
                units = normalizeUnits(units);
                if (units === "month" || units === "year") {
                    days = this._days + milliseconds / 864e5;
                    months = this._months + daysToMonths(days);
                    return units === "month" ? months : months / 12
                } else {
                    days = this._days + Math.round(monthsToDays(this._months));
                    switch (units) {
                        case "week":
                            return days / 7 + milliseconds / 6048e5;
                        case "day":
                            return days + milliseconds / 864e5;
                        case "hour":
                            return days * 24 + milliseconds / 36e5;
                        case "minute":
                            return days * 1440 + milliseconds / 6e4;
                        case "second":
                            return days * 86400 + milliseconds / 1e3;
                        case "millisecond":
                            return Math.floor(days * 864e5) + milliseconds;
                        default:
                            throw new Error("Unknown unit " + units)
                    }
                }
            }

            function valueOf$1() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6
            }

            function makeAs(alias) {
                return function() {
                    return this.as(alias)
                }
            }
            var asMilliseconds = makeAs("ms");
            var asSeconds = makeAs("s");
            var asMinutes = makeAs("m");
            var asHours = makeAs("h");
            var asDays = makeAs("d");
            var asWeeks = makeAs("w");
            var asMonths = makeAs("M");
            var asYears = makeAs("y");

            function get$2(units) {
                units = normalizeUnits(units);
                return this[units + "s"]()
            }

            function makeGetter(name) {
                return function() {
                    return this._data[name]
                }
            }
            var milliseconds = makeGetter("milliseconds");
            var seconds = makeGetter("seconds");
            var minutes = makeGetter("minutes");
            var hours = makeGetter("hours");
            var days = makeGetter("days");
            var months = makeGetter("months");
            var years = makeGetter("years");

            function weeks() {
                return absFloor(this.days() / 7)
            }
            var round = Math.round;
            var thresholds = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            };

            function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
                return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
            }

            function relativeTime$1(posNegDuration, withoutSuffix, locale) {
                var duration = createDuration(posNegDuration).abs();
                var seconds = round(duration.as("s"));
                var minutes = round(duration.as("m"));
                var hours = round(duration.as("h"));
                var days = round(duration.as("d"));
                var months = round(duration.as("M"));
                var years = round(duration.as("y"));
                var a = seconds < thresholds.s && ["s", seconds] || minutes <= 1 && ["m"] || minutes < thresholds.m && ["mm", minutes] || hours <= 1 && ["h"] || hours < thresholds.h && ["hh", hours] || days <= 1 && ["d"] || days < thresholds.d && ["dd", days] || months <= 1 && ["M"] || months < thresholds.M && ["MM", months] || years <= 1 && ["y"] || ["yy", years];
                a[2] = withoutSuffix;
                a[3] = +posNegDuration > 0;
                a[4] = locale;
                return substituteTimeAgo.apply(null, a)
            }

            function getSetRelativeTimeRounding(roundingFunction) {
                if (roundingFunction === undefined) {
                    return round
                }
                if (typeof roundingFunction === "function") {
                    round = roundingFunction;
                    return true
                }
                return false
            }

            function getSetRelativeTimeThreshold(threshold, limit) {
                if (thresholds[threshold] === undefined) {
                    return false
                }
                if (limit === undefined) {
                    return thresholds[threshold]
                }
                thresholds[threshold] = limit;
                return true
            }

            function humanize(withSuffix) {
                var locale = this.localeData();
                var output = relativeTime$1(this, !withSuffix, locale);
                if (withSuffix) {
                    output = locale.pastFuture(+this, output)
                }
                return locale.postformat(output)
            }
            var abs$1 = Math.abs;

            function toISOString$1() {
                var seconds = abs$1(this._milliseconds) / 1e3;
                var days = abs$1(this._days);
                var months = abs$1(this._months);
                var minutes, hours, years;
                minutes = absFloor(seconds / 60);
                hours = absFloor(minutes / 60);
                seconds %= 60;
                minutes %= 60;
                years = absFloor(months / 12);
                months %= 12;
                var Y = years;
                var M = months;
                var D = days;
                var h = hours;
                var m = minutes;
                var s = seconds;
                var total = this.asSeconds();
                if (!total) {
                    return "P0D"
                }
                return (total < 0 ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "")
            }
            var proto$2 = Duration.prototype;
            proto$2.abs = abs;
            proto$2.add = add$1;
            proto$2.subtract = subtract$1;
            proto$2.as = as;
            proto$2.asMilliseconds = asMilliseconds;
            proto$2.asSeconds = asSeconds;
            proto$2.asMinutes = asMinutes;
            proto$2.asHours = asHours;
            proto$2.asDays = asDays;
            proto$2.asWeeks = asWeeks;
            proto$2.asMonths = asMonths;
            proto$2.asYears = asYears;
            proto$2.valueOf = valueOf$1;
            proto$2._bubble = bubble;
            proto$2.get = get$2;
            proto$2.milliseconds = milliseconds;
            proto$2.seconds = seconds;
            proto$2.minutes = minutes;
            proto$2.hours = hours;
            proto$2.days = days;
            proto$2.weeks = weeks;
            proto$2.months = months;
            proto$2.years = years;
            proto$2.humanize = humanize;
            proto$2.toISOString = toISOString$1;
            proto$2.toString = toISOString$1;
            proto$2.toJSON = toISOString$1;
            proto$2.locale = locale;
            proto$2.localeData = localeData;
            proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
            proto$2.lang = lang;
            addFormatToken("X", 0, 0, "unix");
            addFormatToken("x", 0, 0, "valueOf");
            addRegexToken("x", matchSigned);
            addRegexToken("X", matchTimestamp);
            addParseToken("X", function(input, array, config) {
                config._d = new Date(parseFloat(input, 10) * 1e3)
            });
            addParseToken("x", function(input, array, config) {
                config._d = new Date(toInt(input))
            });
            hooks.version = "2.17.1";
            setHookCallback(createLocal);
            hooks.fn = proto;
            hooks.min = min;
            hooks.max = max;
            hooks.now = now;
            hooks.utc = createUTC;
            hooks.unix = createUnix;
            hooks.months = listMonths;
            hooks.isDate = isDate;
            hooks.locale = getSetGlobalLocale;
            hooks.invalid = createInvalid;
            hooks.duration = createDuration;
            hooks.isMoment = isMoment;
            hooks.weekdays = listWeekdays;
            hooks.parseZone = createInZone;
            hooks.localeData = getLocale;
            hooks.isDuration = isDuration;
            hooks.monthsShort = listMonthsShort;
            hooks.weekdaysMin = listWeekdaysMin;
            hooks.defineLocale = defineLocale;
            hooks.updateLocale = updateLocale;
            hooks.locales = listLocales;
            hooks.weekdaysShort = listWeekdaysShort;
            hooks.normalizeUnits = normalizeUnits;
            hooks.relativeTimeRounding = getSetRelativeTimeRounding;
            hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
            hooks.calendarFormat = getCalendarFormat;
            hooks.prototype = proto;
            return hooks
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/ar-sa", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var symbolMap = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            };
            var numberMap = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
            var arSa = moment.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(input) {
                    return "م" === input
                },
                meridiem: function(hour, minute, isLower) {
                    if (hour < 12) {
                        return "ص"
                    } else {
                        return "م"
                    }
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(string) {
                    return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
                        return numberMap[match]
                    }).replace(/،/g, ",")
                },
                postformat: function(string) {
                    return string.replace(/\d/g, function(match) {
                        return symbolMap[match]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return arSa
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/de", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";

            function processRelativeTime(number, withoutSuffix, key, isFuture) {
                var format = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [number + " Tage", number + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [number + " Monate", number + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [number + " Jahre", number + " Jahren"]
                };
                return withoutSuffix ? format[key][0] : format[key][1]
            }
            var de = moment.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: true,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: processRelativeTime,
                    mm: "%d Minuten",
                    h: processRelativeTime,
                    hh: "%d Stunden",
                    d: processRelativeTime,
                    dd: processRelativeTime,
                    M: processRelativeTime,
                    MM: processRelativeTime,
                    y: processRelativeTime,
                    yy: processRelativeTime
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return de
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/es", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var monthsShortDot = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
            var monthsShort = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            var es = moment.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(m, format) {
                    if (/-MMM-/.test(format)) {
                        return monthsShort[m.month()]
                    } else {
                        return monthsShortDot[m.month()]
                    }
                },
                monthsParseExact: true,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return es
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/fr", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var fr = moment.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: true,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|)/,
                ordinal: function(number) {
                    return number + (number === 1 ? "er" : "")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return fr
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/id", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var id = moment.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(hour, meridiem) {
                    if (hour === 12) {
                        hour = 0
                    }
                    if (meridiem === "pagi") {
                        return hour
                    } else if (meridiem === "siang") {
                        return hour >= 11 ? hour : hour + 12
                    } else if (meridiem === "sore" || meridiem === "malam") {
                        return hour + 12
                    }
                },
                meridiem: function(hours, minutes, isLower) {
                    if (hours < 11) {
                        return "pagi"
                    } else if (hours < 15) {
                        return "siang"
                    } else if (hours < 19) {
                        return "sore"
                    } else {
                        return "malam"
                    }
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return id
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/it", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var it = moment.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(s) {
                        return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return it
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/ja", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var ja = moment.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "Ah時m分",
                    LTS: "Ah時m分s秒",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah時m分",
                    LLLL: "YYYY年M月D日Ah時m分 dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(input) {
                    return input === "午後"
                },
                meridiem: function(hour, minute, isLower) {
                    if (hour < 12) {
                        return "午前"
                    } else {
                        return "午後"
                    }
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}日/,
                ordinal: function(number, period) {
                    switch (period) {
                        case "d":
                        case "D":
                        case "DDD":
                            return number + "日";
                        default:
                            return number
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            });
            return ja
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/ko", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var ko = moment.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h시 m분",
                    LTS: "A h시 m분 s초",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h시 m분",
                    LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "일분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                ordinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(token) {
                    return token === "오후"
                },
                meridiem: function(hour, minute, isUpper) {
                    return hour < 12 ? "오전" : "오후"
                }
            });
            return ko
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/pt-br", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var ptBr = moment.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            });
            return ptBr
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/ru", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";

            function plural(word, num) {
                var forms = word.split("_");
                return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]
            }

            function relativeTimeWithPlural(number, withoutSuffix, key) {
                var format = {
                    mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                if (key === "m") {
                    return withoutSuffix ? "минута" : "минуту"
                } else {
                    return number + " " + plural(format[key], +number)
                }
            }
            var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            var ru = moment.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: monthsParse,
                longMonthsParse: monthsParse,
                shortMonthsParse: monthsParse,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(now) {
                        if (now.week() !== this.week()) {
                            switch (this.day()) {
                                case 0:
                                    return "[В следующее] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В следующий] dddd [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В следующую] dddd [в] LT"
                            }
                        } else {
                            if (this.day() === 2) {
                                return "[Во] dddd [в] LT"
                            } else {
                                return "[В] dddd [в] LT"
                            }
                        }
                    },
                    lastWeek: function(now) {
                        if (now.week() !== this.week()) {
                            switch (this.day()) {
                                case 0:
                                    return "[В прошлое] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В прошлый] dddd [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В прошлую] dddd [в] LT"
                            }
                        } else {
                            if (this.day() === 2) {
                                return "[Во] dddd [в] LT"
                            } else {
                                return "[В] dddd [в] LT"
                            }
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: relativeTimeWithPlural,
                    mm: relativeTimeWithPlural,
                    h: "час",
                    hh: relativeTimeWithPlural,
                    d: "день",
                    dd: relativeTimeWithPlural,
                    M: "месяц",
                    MM: relativeTimeWithPlural,
                    y: "год",
                    yy: relativeTimeWithPlural
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(input) {
                    return /^(дня|вечера)$/.test(input)
                },
                meridiem: function(hour, minute, isLower) {
                    if (hour < 4) {
                        return "ночи"
                    } else if (hour < 12) {
                        return "утра"
                    } else if (hour < 17) {
                        return "дня"
                    } else {
                        return "вечера"
                    }
                },
                ordinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(number, period) {
                    switch (period) {
                        case "M":
                        case "d":
                        case "DDD":
                            return number + "-й";
                        case "D":
                            return number + "-го";
                        case "w":
                        case "W":
                            return number + "-я";
                        default:
                            return number
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return ru
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/th", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var th = moment.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: true,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(input) {
                    return input === "หลังเที่ยง"
                },
                meridiem: function(hour, minute, isLower) {
                    if (hour < 12) {
                        return "ก่อนเที่ยง"
                    } else {
                        return "หลังเที่ยง"
                    }
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            });
            return th
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/tr", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var suffixes = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            var tr = moment.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(number) {
                    if (number === 0) {
                        return number + "'ıncı"
                    }
                    var a = number % 10,
                        b = number % 100 - a,
                        c = number >= 100 ? 100 : null;
                    return number + (suffixes[a] || suffixes[b] || suffixes[c])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return tr
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/vi", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var vi = moment.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: true,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: true,
                meridiemParse: /sa|ch/i,
                isPM: function(input) {
                    return /^ch$/i.test(input)
                },
                meridiem: function(hours, minutes, isLower) {
                    if (hours < 12) {
                        return isLower ? "sa" : "SA"
                    } else {
                        return isLower ? "ch" : "CH"
                    }
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(number) {
                    return number
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return vi
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/zh-cn", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var zhCn = moment.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah点mm分",
                    LTS: "Ah点m分s秒",
                    L: "YYYY-MM-DD",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l: "YYYY-MM-DD",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日Ah点mm分",
                    llll: "YYYY年MMMD日ddddAh点mm分"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(hour, meridiem) {
                    if (hour === 12) {
                        hour = 0
                    }
                    if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
                        return hour
                    } else if (meridiem === "下午" || meridiem === "晚上") {
                        return hour + 12
                    } else {
                        return hour >= 11 ? hour : hour + 12
                    }
                },
                meridiem: function(hour, minute, isLower) {
                    var hm = hour * 100 + minute;
                    if (hm < 600) {
                        return "凌晨"
                    } else if (hm < 900) {
                        return "早上"
                    } else if (hm < 1130) {
                        return "上午"
                    } else if (hm < 1230) {
                        return "中午"
                    } else if (hm < 1800) {
                        return "下午"
                    } else {
                        return "晚上"
                    }
                },
                calendar: {
                    sameDay: function() {
                        return this.minutes() === 0 ? "[今天]Ah[点整]" : "[今天]LT"
                    },
                    nextDay: function() {
                        return this.minutes() === 0 ? "[明天]Ah[点整]" : "[明天]LT"
                    },
                    lastDay: function() {
                        return this.minutes() === 0 ? "[昨天]Ah[点整]" : "[昨天]LT"
                    },
                    nextWeek: function() {
                        var startOfWeek, prefix;
                        startOfWeek = moment().startOf("week");
                        prefix = this.diff(startOfWeek, "days") >= 7 ? "[下]" : "[本]";
                        return this.minutes() === 0 ? prefix + "dddAh点整" : prefix + "dddAh点mm"
                    },
                    lastWeek: function() {
                        var startOfWeek, prefix;
                        startOfWeek = moment().startOf("week");
                        prefix = this.unix() < startOfWeek.unix() ? "[上]" : "[本]";
                        return this.minutes() === 0 ? prefix + "dddAh点整" : prefix + "dddAh点mm"
                    },
                    sameElse: "LL"
                },
                ordinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(number, period) {
                    switch (period) {
                        case "d":
                        case "D":
                        case "DDD":
                            return number + "日";
                        case "M":
                            return number + "月";
                        case "w":
                        case "W":
                            return number + "周";
                        default:
                            return number
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return zhCn
        });
        (function(global, factory) {
            typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define("directories/vendor/moment/locale/zh-tw", ["../moment"], factory) : factory(global.moment)
        })(this, function(moment) {
            "use strict";
            var zhTw = moment.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah點mm分",
                    LTS: "Ah點m分s秒",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah點mm分",
                    LLLL: "YYYY年MMMD日ddddAh點mm分",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日Ah點mm分",
                    llll: "YYYY年MMMD日ddddAh點mm分"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(hour, meridiem) {
                    if (hour === 12) {
                        hour = 0
                    }
                    if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
                        return hour
                    } else if (meridiem === "中午") {
                        return hour >= 11 ? hour : hour + 12
                    } else if (meridiem === "下午" || meridiem === "晚上") {
                        return hour + 12
                    }
                },
                meridiem: function(hour, minute, isLower) {
                    var hm = hour * 100 + minute;
                    if (hm < 600) {
                        return "凌晨"
                    } else if (hm < 900) {
                        return "早上"
                    } else if (hm < 1130) {
                        return "上午"
                    } else if (hm < 1230) {
                        return "中午"
                    } else if (hm < 1800) {
                        return "下午"
                    } else {
                        return "晚上"
                    }
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(number, period) {
                    switch (period) {
                        case "d":
                        case "D":
                        case "DDD":
                            return number + "日";
                        case "M":
                            return number + "月";
                        case "w":
                        case "W":
                            return number + "週";
                        default:
                            return number
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            });
            return zhTw
        });
        define("directories/vendor/moment/moment-with-locale", ["directories/vendor/moment/moment", "directories/vendor/moment/locale/ar-sa", "directories/vendor/moment/locale/de", "directories/vendor/moment/locale/es", "directories/vendor/moment/locale/fr", "directories/vendor/moment/locale/id", "directories/vendor/moment/locale/it", "directories/vendor/moment/locale/ja", "directories/vendor/moment/locale/ko", "directories/vendor/moment/locale/pt-br", "directories/vendor/moment/locale/ru", "directories/vendor/moment/locale/th", "directories/vendor/moment/locale/tr", "directories/vendor/moment/locale/vi", "directories/vendor/moment/locale/zh-cn", "directories/vendor/moment/locale/zh-tw"], function(moment) {
            return moment
        });
        define("directories/directories-utils/validation-utils", [], function() {
            var ValidationUtils = {
                isAbsoluteUrl: function(url) {
                    var re = new RegExp(/^https?:\/\//i);
                    return re.test(url)
                }
            };
            return ValidationUtils
        });
        define("directories/directories-utils/data-utils", ["directories/directories-utils/validation-utils", "librastandardlib/logger/logger"], function(ValidationUtils, Logger) {
            var logger = new Logger("Directories");
            var DataUtils = {
                removeEmptyString: function(objArr) {
                    var newArr = objArr.map(function(obj) {
                        var fields = obj.additionalFields || obj.item.additionalFields;
                        if (fields) {
                            fields = Object.keys(fields).reduce(function(additionalFields, key) {
                                additionalFields[key.trim()] = fields[key];
                                return additionalFields
                            }, {});
                            if (obj.additionalFields) {
                                obj.additionalFields = fields
                            } else {
                                obj.item.additionalFields = fields
                            }
                        }
                        return obj
                    });
                    return newArr
                },
                strToBool: function(value) {
                    switch (value) {
                        case "1":
                            return true;
                        case "0":
                            return false;
                        default:
                            return false
                    }
                },
                splitJSONByFieldValue: function(fldName, fldVals, items) {
                    var splitData = {};
                    items.forEach(function(item) {
                        var fldVal = item.additionalFields[fldName];
                        if (fldVals[fldVal]) {
                            splitData[fldVal] = splitData[fldVal] || [];
                            splitData[fldVal].push(item)
                        }
                    });
                    return splitData
                },
                removeItemWithInvalidUrl: function(items, idx, url) {
                    if (!ValidationUtils.isAbsoluteUrl(url)) {
                        items.splice(idx, 1)
                    }
                    return items
                },
                mapAdditionalFields: function(item, fields, fieldTypes) {
                    var additionalFields = item.additionalFields;
                    var mappedFields = {};
                    Object.keys(fields).forEach(function(key) {
                        var fldValue = this.getFieldValue(additionalFields, fields[key].trim(), fieldTypes);
                        mappedFields[key] = fldValue !== undefined ? fldValue : ""
                    }.bind(this));
                    Object.keys(additionalFields).forEach(function(key) {
                        if (!mappedFields.hasOwnProperty(key)) {
                            var fldVal = this.getFieldValue(additionalFields, key, fieldTypes);
                            if (fldVal !== undefined) {
                                mappedFields[key] = fldVal
                            }
                        }
                    }.bind(this));
                    return mappedFields
                },
                fieldTypeMap: {
                    LongText: function(_fldValue) {
                        return {
                            type: "LongText",
                            value: _fldValue
                        }
                    },
                    Boolean: function(_fldValue) {
                        return DataUtils.strToBool(_fldValue)
                    },
                    Asset: function(_fldValue) {
                        try {
                            var assetObj = JSON.parse(_fldValue);
                            var publicUrl = assetObj.publicUrl;
                            if (!publicUrl) {
                                throw new Error("publicUrl is not found: " + _fldValue)
                            }
                            if (publicUrl.indexOf("https://") === 0) {
                                return publicUrl
                            }
                            return "https://" + publicUrl
                        } catch (e) {
                            logger.debug("JSON parsing error: " + e.message + ", " + _fldValue);
                            return ""
                        }
                    }
                },
                getFieldValue: function(additionalFields, fldName, fieldTypes) {
                    if (fldName === "" || !additionalFields.hasOwnProperty(fldName)) {
                        return
                    }
                    var fldValue = additionalFields[fldName];
                    if (fieldTypes === undefined || !fieldTypes.hasOwnProperty(fldName)) {
                        return fldValue
                    }
                    var fldType = fieldTypes[fldName];
                    if (this.fieldTypeMap[fldType] === undefined) {
                        return fldValue
                    }
                    return this.fieldTypeMap[fldType](fldValue)
                }
            };
            return DataUtils
        });
        define("librastandardlib/obj-utils/assign", [], function() {
            return function assign(target, args) {
                "use strict";
                if (target === null) {
                    throw new TypeError("Cannot convert undefined or null to object")
                }
                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    if (source !== null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                to[key] = source[key]
                            }
                        }
                    }
                }
                return to
            }
        });
        define("librastandardlib/aws/page-settings", ["librastandardlib/obj-utils/assign"], function(_assign) {
            "use strict";
            var defaults = {
                staticAssetPath: "https://a0.awsstatic.com",
                jsAssetPath: "https://a0.awsstatic.com/libra/1",
                isLoggingEnabled: true
            };
            var PageSettings = {};
            if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
                _assign(PageSettings, AWS.PageSettings)
            }
            var tagSettings = document.getElementsByTagName("html").dataset;
            if (tagSettings) {
                PageSettings.staticAssetPath = tagSettings.staticAssets;
                PageSettings.jsAssetPath = PageSettings.staticAssetPath + "/libra/" + tagSettings.jsVersion
            }
            PageSettings = _assign({}, defaults, PageSettings);
            if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
                AWS.PageSettings = PageSettings
            }
            return PageSettings
        });
        define("directories/directories-utils/template-helpers", ["libra/vendor/handlebars", "directories/directories-utils/path-utils", "librastandardlib/logger/logger", "directories/vendor/moment/moment-with-locale", "directories/directories-utils/data-utils", "directories/directories-utils/validation-utils", "librastandardlib/aws/page-settings"], function(Handlebars, PathUtils, Logger, moment, DataUtils, ValidationUtils, PageSettings) {
            var logger = new Logger("Directories");
            var directions = {
                left: "right",
                right: "left"
            };
            var TemplateHelpers = {
                defaults: {
                    dateFormat: "LL"
                },
                init: function(options) {
                    this.options = $.extend({}, this.defaults, options);
                    this.itemUrlTemplate = Handlebars.compile(this.options.itemUrlTemplate);
                    moment.locale(this.options.language);
                    this.registerHelpers()
                },
                registerHelpers: function() {
                    var that = this;
                    Handlebars.registerHelper("dateCreated", function() {
                        return that.formatDate(this.dateCreated)
                    });
                    Handlebars.registerHelper("dateUpdated", function() {
                        return that.formatDate(this.dateUpdated)
                    });
                    Handlebars.registerHelper("formatDate", function(date, formatOption) {
                        return that.formatDate(date, formatOption)
                    });
                    Handlebars.registerHelper("itemUrl", function() {
                        return that.getItemUrl(this.directoryId, this.id, window.location)
                    });
                    Handlebars.registerHelper("lessThan", function(v1, v2, options) {
                        if (v1 < v2) {
                            return options.fn(this)
                        }
                        return options.inverse(this)
                    });
                    Handlebars.registerHelper("ifOr", function(v1, v2, options) {
                        if (v1 || v2) {
                            return options.fn(this)
                        }
                        return options.inverse(this)
                    });
                    Handlebars.registerHelper("ifValue", function(conditional, options) {
                        if (conditional === options.hash.value) {
                            return options.fn(this)
                        }
                        return options.inverse(this)
                    });
                    Handlebars.registerHelper("link", function(options) {
                        var result = "";
                        var url = options.hash.url;
                        var text = options.hash.text;
                        if (text !== undefined) {
                            text = Handlebars.escapeExpression(text);
                            if (url !== undefined) {
                                url = Handlebars.escapeExpression(url);
                                result = '<a href="' + url + '">' + text + "</a>"
                            } else {
                                result = text
                            }
                        }
                        return new Handlebars.SafeString(result)
                    });
                    // A limited each loop
                    // Usage: {{#each (limit items 2 2)}} : 2 items from 2nd position
                    Handlebars.registerHelper("limit", function(items, offset, limit) {
                        if (!$.isArray(items)) {
                            return []
                        }
                        if (typeof offset !== "number") {
                            offset = 0
                        }
                        if (typeof limit !== "number") {
                            limit = items.length
                        }
                        return items.slice(offset, offset + limit)
                    });
                    Handlebars.registerHelper("stringArray", function(array, addAndBeforeLast) {
                        return that.formatStringArray(array, addAndBeforeLast)
                    });
                    Handlebars.registerHelper("cleanText", function(item) {
                        return that.cleanText(item)
                    });
                    Handlebars.registerHelper("cleanHTMLEntity", function(item) {
                        if (typeof item !== "object") {
                            item = that.cleanHTMLEntity(item)
                        } else if (!item.hasOwnProperty("type") || item.type !== "LongText") {
                            item.value = that.cleanHTMLEntity(item.value)
                        }
                        return that.cleanText(item)
                    });
                    Handlebars.registerHelper("encodeCleanQSParam", function(item) {
                        return that.encodeQSParam(that.cleanText(item))
                    });
                    Handlebars.registerHelper("strToBool", function(item) {
                        return DataUtils.strToBool(item)
                    });
                    Handlebars.registerHelper("ifIsAbsoluteUrl", function(item, options) {
                        if (item && ValidationUtils.isAbsoluteUrl(item)) {
                            return options.fn(this)
                        }
                        return options.inverse(this)
                    });
                    Handlebars.registerHelper("directionLeft", function() {
                        return that.getDirection("left")
                    });
                    Handlebars.registerHelper("directionRight", function() {
                        return that.getDirection("right")
                    })
                },
                getDirection: function(str) {
                    if (directions.hasOwnProperty(str) && PageSettings.isRTL) {
                        return directions[str]
                    }
                    return str
                },
                formatDate: function(timestamp, option) {
                    if (option === undefined) {
                        option = this.options.dateFormat
                    }
                    return moment(timestamp).format(option)
                },
                getItemUrl: function(directoryId, itemId, currentLocation) {
                    var itemUrl = "";
                    logger.debug("Computing Item URL", directoryId, itemId, currentLocation);
                    var itemPath = PathUtils.getRelativeItemId(directoryId, itemId);
                    if (itemPath) {
                        itemUrl = this.itemUrlTemplate({
                            basePath: currentLocation.pathname,
                            itemPath: itemPath
                        });
                        if (currentLocation.search) {
                            itemUrl += currentLocation.search
                        }
                        if (currentLocation.hash) {
                            itemUrl += currentLocation.hash
                        }
                        itemUrl = PathUtils.cleanPath(itemUrl);
                        logger.debug("Computed Item URL", itemUrl)
                    } else {
                        logger.warn("Invalid IDs; cannot compute Item URL", directoryId, itemId)
                    }
                    return itemUrl
                },
                formatStringArray: function(value, addAndBeforeLast) {
                    if (typeof value === "string") {
                        try {
                            value = JSON.parse(value)
                        } catch (e) {
                            logger.debug("The value is not in a valid JSON format", value);
                            return value
                        }
                    }
                    if (Array.isArray(value)) {
                        var str = value.join(", ");
                        if (value.length === 1 || !addAndBeforeLast || this.options.language !== "en-US") {
                            return str
                        }
                        var pos = str.lastIndexOf(",");
                        str = str.substring(0, pos) + " and" + str.substring(pos + 1);
                        return str
                    }
                    return value
                },
                cleanText: function(item) {
                    if (typeof item !== "object") {
                        return item
                    }
                    if (item.hasOwnProperty("type") && item.type === "LongText") {
                        return new Handlebars.SafeString(item.value)
                    }
                    return item.value
                },
                cleanHTMLEntity: function(value) {
                    return $("<div/>").html(value).text()
                },
                encodeQSParam: function(item) {
                    return encodeURIComponent(item)
                }
            };
            return TemplateHelpers
        });
        define("directories/mixin/directories-mixin", ["directories/configurations/default-config", "directories/directories-utils/template-cache", "directories/directories-utils/template-helpers", "directories/directories-utils/data-utils", "directories/directories-utils/path-utils", "librastandardlib/logger/logger"], function(defaultConfig, TemplateCache, TemplateHelpers, DataUtils, PathUtils, Logger) {
            var logger = new Logger("Directories");
            var METRIC_PREFIX = defaultConfig.metricsConfig.prefix;
            var Metric = defaultConfig.metricsConfig.metric;
            var DirectoriesMixin = {
                init: function(options) {
                    this.data = this.$elem.data();
                    var config = $.extend(true, {}, defaultConfig, options);
                    this.options = $.extend({}, config, this.data);
                    this.$container = this.$elem.find(this.options.itemsConfig.containerClass);
                    this.directoryId = this.data.directoryId;
                    this.APIdata = {};
                    this.api = this.getAPI();
                    this.url = this.getAPIUrl();
                    TemplateHelpers.init(this.options.templateConfig);
                    if (this.options.itemsConfig.loadTemplate) {
                        this.template = this.getTemplate()
                    }
                },
                getTemplate: function() {
                    var templateCache = new TemplateCache;
                    var template = templateCache.loadTemplate(this.$elem);
                    if (template) {
                        return template
                    }
                    var metricName = this.getMetricName(Metric.LoadError);
                    logger.error(metricName, "AI");
                    logger.error(metricName + ": Error loading template for directory - " + this.directoryId, "RAW");
                    logger.debug("Error loading template for element", this.$elem)
                },
                getAPI: function() {
                    var apiName = this.options.api || "getItems";
                    var api = this.options.APIs[apiName];
                    if (api === undefined) {
                        return this.options.APIs.getItems
                    }
                    return api
                },
                getAPIUrl: function() {
                    if (this.data.fixture) {
                        return this.data.fixture
                    }
                    return this.api.endpoint.replace(/{{directoryId}}/g, this.directoryId)
                },
                loadData: function(params, replaceContent) {
                    var that = this;
                    this.updatedParams = this.getUpdatedParams(params);
                    this.callStartTime = (new Date).getTime();
                    this.callAPI(this.url, this.updatedParams).done(function(data) {
                        logger.info(that.getMetricName(Metric.AjaxRoundTripTime), "AI", {
                            value: (new Date).getTime() - that.callStartTime,
                            directoryId: that.directoryId
                        });
                        logger.info(that.getMetricName(Metric.AjaxSuccess), "AI");
                        logger.debug("Fetched data", data);
                        if (typeof that.processData === "function") {
                            data.items = DataUtils.removeEmptyString(data.items);
                            that.processData(data, Boolean(replaceContent), that.updatedParams)
                        }
                        that.triggerEvents(that.updatedParams)
                    }).fail(function(xhr, status, err) {
                        var metricName = that.getMetricName(Metric.AjaxError);
                        logger.error(metricName, "AI");
                        logger.error(metricName + "; DirectoryId=" + that.directoryId + "; " + status + "; " + err + "; " + JSON.stringify(that.updatedParams), "RAW");
                        that.$container.append("<p>Oops, something went wrong. We have been notified and are working to fix this issue.</p>")
                    })
                },
                displayItems: function(data, replaceContent) {
                    var html = this.template(data);
                    logger.debug("Filled template; adding to page", html);
                    if (replaceContent === true) {
                        logger.debug("Replacing content in container", this.$container);
                        this.$container.html(html)
                    } else {
                        logger.debug("Appending content to container", this.$container);
                        this.$container.append(html)
                    }
                },
                triggerEvents: function(params) {
                    var itemsData = {
                        directoryId: this.directoryId,
                        orderBy: params.order_by,
                        sortAscending: params.sort_ascending,
                        tag: params.tag,
                        locale: params.locale
                    };
                    this.$elem.trigger("custom_" + this.options.itemsConfig.eventNamespace + "_items-rendered", itemsData);
                    $(window).trigger("custom_" + this.options.itemsConfig.eventNamespace + "_filled-template");
                    this.$elem.trigger(this.options.itemsConfig.eventDataLoad)
                },
                callAPI: function(url, params) {
                    logger.debug("Fetching data", url, params);
                    return $.get(url, $.param(params, true))
                },
                getUpdatedParams: function(params) {
                    var updatedParams = $.extend({}, this.api.defaultParams, params);
                    var tag = "";
                    Object.keys(updatedParams).forEach(function(key) {
                        if (this.data[key] !== undefined && params && params[key] === undefined) {
                            updatedParams[key] = this.data[key]
                        }
                    }.bind(this));
                    if (this.data.tag !== undefined) {
                        tag = this.data.tag
                    }
                    if (this.data.urlAsTag !== undefined) {
                        tag = this.directoryId + "#" + PathUtils.getTagFromURL(location.pathname, this.data.rootPath)
                    }
                    if (tag.length > 0) {
                        if (this.options.api === "search") {
                            updatedParams["tags.id"] = [];
                            if (params.hasOwnProperty("tags.id")) {
                                updatedParams["tags.id"] = params["tags.id"]
                            }
                            if (Array.isArray(tag)) {
                                tag.forEach(function(item) {
                                    updatedParams["tags.id"].push(item)
                                })
                            } else {
                                updatedParams["tags.id"].push(tag)
                            }
                        } else {
                            updatedParams.tag = tag
                        }
                    }
                    return updatedParams
                },
                getMetricName: function(metric) {
                    var compName = this.options.componentName || "directories";
                    return METRIC_PREFIX + compName.toLowerCase() + "_" + metric
                }
            };
            return DirectoriesMixin
        });
        define("directories/directories-bundle", ["directories/controllers/directories-cards-controller", "directories/mixin/directories-mixin"], function(DirectoriesCardsController, DirectoriesMixin) {
            return {
                DirectoriesCardsController: DirectoriesCardsController,
                DirectoriesMixin: DirectoriesMixin
            }
        })
    })();
    define("librastandardlib/test-helpers/browser-globals/document", [], function() {
        return document
    });
    define("librastandardlib/dom-utils/breakpoint-helper", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        return {
            breakpoints: {
                tiny: 480,
                small: 768,
                mid: 980,
                large: 1200,
                xlarge: 1920
            },
            isTinyOnly: function() {
                return window.innerWidth <= this.breakpoints.tiny
            },
            isSmallOnly: function() {
                return window.innerWidth > this.breakpoints.tiny && window.innerWidth <= this.breakpoints.small
            },
            isMidOnly: function() {
                return window.innerWidth > this.breakpoints.small && window.innerWidth <= this.breakpoints.mid - 1
            },
            isLargeOnly: function() {
                return window.innerWidth > this.breakpoints.mid - 1 && window.innerWidth <= this.breakpoints.large - 1
            },
            isTinyUp: function() {
                return true
            },
            isSmallUp: function() {
                return window.innerWidth > this.breakpoints.tiny
            },
            isMidUp: function() {
                return window.innerWidth > this.breakpoints.small
            },
            isLargeUp: function() {
                return window.innerWidth > this.breakpoints.mid - 1
            },
            isXlargeUp: function() {
                return window.innerWidth > this.breakpoints.large - 1
            }
        }
    });
    define("librastandardlib/dom-utils/smoothScroll", ["librastandardlib/obj-utils/assign"], function(_assign) {
        "use strict";
        var defaults = {
            targetTop: 0,
            duration: 400,
            callback: null
        };
        var smoothScroll = function(options) {
            options = _assign({}, defaults, options);
            $("html, body").stop().animate({
                scrollTop: options.targetTop
            }, options.duration, function() {
                if (options.callback !== null) {
                    options.callback()
                }
            })
        };
        return smoothScroll
    });
    define("librastandardlib/dom-utils/smoothScrollToElem", ["librastandardlib/dom-utils/smoothScroll", "librastandardlib/obj-utils/assign"], function(smoothScroll, _assign) {
        "use strict";
        var defaults = {
            scrollPadding: 0,
            duration: 400,
            headerSelector: null,
            callback: null
        };
        var smoothScrollToElem = function(elem, options) {
            options = _assign({}, defaults, options);
            if (elem) {
                var fixedHeaderOffset = 0;
                var header = document.querySelector(options.headerSelector);
                if (header !== null && getComputedStyle(header).position === "fixed") {
                    fixedHeaderOffset = header.clientHeight
                }
                smoothScroll({
                    targetTop: $(elem).offset().top - (fixedHeaderOffset + options.scrollPadding),
                    duration: options.duration,
                    callback: options.callback
                })
            }
        };
        return smoothScrollToElem
    });
    define("librastandardlib/event-utils/debounceWindowEvent", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        "use strict";
        return function debounceWindowEvent(fct, eventName, timeout, context) {
            var that = context || this,
                count = 0;
            $(window).on(eventName, function() {
                var id = ++count;
                window.setTimeout(function() {
                    if (id === count) {
                        fct.call(that)
                    }
                }, timeout)
            })
        }
    });
    define("libra/components/alert-box", [], function() {
        "use strict";
        var defaults = {
            alertClassName: "lb-alert",
            callback: function() {},
            closeButtonClassName: "lb-close",
            content: "",
            fadeSpeed: 200,
            hasCloseButton: true,
            lang: "",
            titleCopy: "",
            type: "warning"
        };
        var AlertBox = function(settings) {
            this.$alertTarget = $("[data-page-alert-target]").first();
            this.options = $.extend({}, defaults, settings);
            this.$alert = $("<div/>", {
                role: "alert",
                "class": "lb-alert-wrapper"
            });
            this.createAlert();
            this.bindEventHandlers()
        };
        AlertBox.prototype.bindEventHandlers = function() {
            var that = this;
            this.$alert.on("click.lb-alert_close-button", "." + this.options.closeButtonClassName, function() {
                that.closeAlert()
            });
            $(document).on("custom_lb-alert_close-all", function() {
                $("." + that.options.alertClassName).closeAlert()
            })
        };
        AlertBox.prototype.buildAlertTemplate = function() {
            this.alertTemplate = '<div class="' + this.options.alertClassName + " " + this.options.alertClassName + "-" + this.options.type + '"';
            if (this.options.lang.length > 0) {
                this.alertTemplate = this.alertTemplate + ' lang="' + encodeURIComponent(this.options.lang) + '"'
            }
            this.alertTemplate = this.alertTemplate + ">";
            if (this.options.titleCopy.length > 0) {
                this.alertTemplate = this.alertTemplate + '<h4 class="lb-title">' + this.options.titleCopy + "</h4>"
            }
            if (this.options.content.length > 0) {
                this.alertTemplate = this.alertTemplate + this.options.content
            }
            if (this.options.hasCloseButton) {
                this.alertTemplate = this.alertTemplate + '<button class="' + this.options.closeButtonClassName + '"></button>'
            }
            this.alertTemplate = this.alertTemplate + "</div>"
        };
        AlertBox.prototype.createAlert = function() {
            this.buildAlertTemplate();
            this.$alert.html(this.alertTemplate);
            this.$alertTarget.prepend(this.$alert);
            this.$alert.trigger("custom_lb-alert_" + this.options.type + "_create")
        };
        AlertBox.prototype.closeAlert = function() {
            this.$alert.fadeOut(this.options.fadeSpeed);
            this.$alert.trigger("custom_lb-alert_" + this.options.type + "_close");
            if (typeof this.options.callback === "function") {
                this.options.callback()
            }
        };
        return AlertBox
    });
    define("librastandardlib/url-utils/getCurrentDomainParts", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        "use strict";
        return function getCurrentDomainParts(num) {
            if (typeof num === "undefined") {
                return window.location.hostname
            }
            var parts = window.location.hostname.split(".");
            while (parts.length > num) {
                parts.shift()
            }
            return parts.join(".")
        }
    });
    define("librastandardlib/cookie-utils/tiny-cookie", ["librastandardlib/url-utils/getCurrentDomainParts", "librastandardlib/test-helpers/browser-globals/document", "librastandardlib/obj-utils/assign"], function(getCurrentDomainParts, document, _assign) {
        "use strict";
        var defaults = {
            expires: 3600,
            path: "/",
            secure: true,
            domain: getCurrentDomainParts()
        };
        var regReserved = /^(?:expires|max-age|path|domain|secure)$/i;
        var ERR_RESERVED_WORD = "Name cannot contain reserved cookie property names.";
        var regSpecial = /[.*+?^${}()|[\]\\]/g;

        function set(name, val, opts) {
            opts = _assign({}, defaults, opts);
            var d = new Date;
            d.setTime(d.getTime() + opts.expires * 1e3);
            var exp = d.toUTCString();
            if (typeof opts.cb === "function") {
                val = opts.cb(val)
            }
            document.cookie = name + "=" + val + ";expires=" + exp + ";domain=" + opts.domain + ";path=" + opts.path + (opts.secure ? ";secure" : "")
        }

        function get(name, cb) {
            var val = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(regSpecial, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;
            if (typeof cb === "function") {
                return cb(val)
            }
            return val
        }

        function remove(name, opts) {
            if (!name) {
                return false
            }
            if (regReserved.test(name)) {
                throw new Error(ERR_RESERVED_WORD)
            }
            opts = _assign({}, defaults, opts);
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + opts.domain + ";path=" + opts.path
        }

        function api() {
            if (arguments.length === 0 || !arguments[0]) {
                return false
            }
            if (regReserved.test(arguments[0])) {
                throw new Error(ERR_RESERVED_WORD)
            }
            if (arguments.length === 1 || typeof arguments[1] === "function" || typeof arguments[1] === "undefined") {
                return get.apply(this, arguments)
            }
            return set.apply(this, arguments)
        }
        api.remove = remove;
        return api
    });
    define("librastandardlib/cookie-utils/cookie", ["librastandardlib/cookie-utils/tiny-cookie"], function(tinyCookie) {
        "use strict";

        function set(name, val, opts) {
            if (typeof val === "object") {
                val = JSON.stringify(val)
            }
            tinyCookie(encodeURIComponent(name), encodeURIComponent(val), opts)
        }

        function get(name, cb) {
            var v = tinyCookie(encodeURIComponent(name), cb);
            if (v) {
                v = decodeURIComponent(v);
                try {
                    return JSON.parse(v)
                } catch (e) {
                    return v
                }
            }
            return null
        }

        function remove(name, opts) {
            if (!name) {
                return false
            }
            return tinyCookie.remove(encodeURIComponent(name), opts)
        }

        function api() {
            if (arguments.length === 0) {
                return false
            }
            if (arguments.length === 1 || typeof arguments[1] === "function" || typeof arguments[1] === "undefined") {
                return get.apply(this, arguments)
            }
            set.apply(this, arguments)
        }
        api.remove = remove;
        return api
    });
    define("libra/components/lang-not-found", ["libra/components/alert-box", "librastandardlib/cookie-utils/cookie"], function(AlertBox, cookie) {
        "use strict";
        var LangNotFound = {
            closeButton: '<button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>',
            messages: {
                ar_SA: "هذا المحتوى غير متوفر باللغة المحددة. إننا نعمل باستمرار لتوفير المحتوى باللغة المحددة. نشكرك على صبرك.",
                en_US: "This content is not available in the selected language. We are working constantly to provide our content in the selected language. Thank you for your patience.",
                de_DE: "Dieser Inhalt steht in der ausgewählten Sprache nicht zur Verfügung. Wir arbeiten beständig daran, unsere Inhalte auch in der ausgewählten Sprache zur Verfügung zu stellen. Vielen Dank für Ihre Geduld.",
                es_ES: "El contenido no se encuentra disponible en el idioma seleccionado. Trabajamos continuamente para proveer nuestro contenido en dicho idioma. Agradecemos su comprensión.",
                fr_FR: "Ce contenu n'est pas disponible dans la langue sélectionnée. Nous travaillons en permanence à la mise à disposition du contenu dans la langue sélectionnée. Merci pour votre patience.",
                id_ID: "Konten ini tidak tersedia dalam bahasa yang dipilih. Kami terus berusaha menyediakan konten kami dalam bahasa yang dipilih. Terima kasih atas pengertian Anda.",
                it_IT: "I contenuti di questa pagina non sono al momento disponibili nella lingua selezionata. Il nostro impegno è tuttavia di fornire più contenuti localizzati possibili. Grazie per la pazienza.",
                pt_BR: "Este conteúdo não está disponível no idioma selecionado. Estamos trabalhando constantemente para disponibilizar nosso conteúdo no idioma selecionado. Agradecemos pela paciência.",
                ru_RU: "К сожалению, данный материал на выбранном языке не доступен. Мы постоянно работаем над расширением контента, предоставляемого пользователю на выбранном языке. Благодарим вас за терпение!",
                ja_JP: "このコンテンツは選択された言語でご利用いただけません。選択された言語でコンテンツをご利用いただけるよう現在準備中です。ご不便をおかけしますが、しばらくお待ちください。",
                ko_KR: "이 콘텐츠는 선택하신 언어로 제공되지 않습니다. AWS에서는 선택하신 언어로 콘텐츠를 제공하기 위해 계속 노력하고 있습니다. 양해해주셔서 감사합니다.",
                th_TH: "เนื้อหานี้ไม่พร้อมใช้งานในภาษาที่คุณเลือก เรากำลังดำเนินการอย่างต่อเนื่องเพื่อจัดทำเนื้อหาในภาษาที่คุณเลือก ขอบคุณที่อดใจรอ",
                tr_TR: "Bu içerik seçilen dilde kullanılamıyor. İçeriğimizi seçilen dilde sunmak için sürekli olarak çalışmaya devam ediyoruz. Sabrınız için teşekkürler.",
                vi_VN: "Nội dung này hiện chưa có ở ngôn ngữ được chọn. Chúng tôi đang nỗ lực để cung cấp nội dung cho ngôn ngữ bạn chọn. Cảm ơn sự kiên nhẫn của bạn.",
                zh_CN: "此内容的所选语言版本不可用。我们一直在不断努力，以便以所选语言提供我们的内容。感谢您的耐心等待。",
                zh_TW: "此內容尚未提供您所選取的語言。我們持續努力為您提供選取的語言內容。感謝您的耐心等待！"
            },
            defaults: {
                fallbackLang: "en_US",
                cookieName: "aws_lang_not_found",
                cookieDomain: ".amazon.com"
            },
            init: function(options) {
                this.options = $.extend({}, this.defaults, options);
                var lang = cookie(this.options.cookieName);
                if (lang) {
                    if (!this.messages.hasOwnProperty(lang)) {
                        lang = this.options.fallbackLang
                    }
                    this.alertBoxWarning = new AlertBox({
                        content: this.messages[lang],
                        type: "warning",
                        lang: lang
                    })
                }
            }
        };
        Libra.Comp.register({
            name: "lang-not-found",
            initFct: function() {
                LangNotFound.init()
            },
            initTime: "documentReady",
            selfRequire: true
        });
        return LangNotFound
    });
    define("librastandardlib/detection-utils/detection-utils", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        "use strict";
        var DetectionUtils = {
            cache: {},
            isMobile: function() {
                if (typeof DetectionUtils.cache.isMobile === "undefined") {
                    var re = new RegExp(/iPhone|iPod|iPad|Android|(?=.*\bAndroid\b)(?=.*\bMobile\b)|IEMobile|(?=.*\bWindows\b)(?=.*\bTouch\b)|Windows Phone|Opera Mini|(?=.*\bFirefox\b)(?=.*\bMobile\b)|BlackBerry|Nexus 7|BNTV250|Kindle Fire|Silk|webOS|GT-P1000/i);
                    var res = re.test(window.navigator.userAgent);
                    DetectionUtils.cache.isMobile = res;
                    return res
                }
                return DetectionUtils.cache.isMobile
            },
            isLikelyMobile: function() {
                if (typeof DetectionUtils.cache.isLikelyMobile === "undefined") {
                    var res = DetectionUtils.isMobile() || DetectionUtils.isTouchCapable() && window.innerWidth <= 800;
                    DetectionUtils.cache.isLikelyMobile = res;
                    return res
                }
                return DetectionUtils.cache.isLikelyMobile
            },
            isTouchCapable: function() {
                if (typeof DetectionUtils.cache.isTouchCapable === "undefined") {
                    var res = !!("Modernizr" in window && window.Modernizr.touchevents || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints || ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch));
                    DetectionUtils.cache.isTouchCapable = res;
                    return res
                }
                return DetectionUtils.cache.isTouchCapable
            }
        };
        return DetectionUtils
    });
    /*!
     * Copyright (c) Tristen Brown
     * MIT LICENSE
     * https://github.com/tristen/hoverintent/blob/b17a178574f80bd794238783e57ae66fb5301fc1/LICENCE
     */
    define("librastandardlib/vendor/hoverintent/hoverIntent", [], function() {
        "use strict";
        var hoverIntent = function(el, onOver, onOut) {
            var x, y, pX, pY;
            var h = {},
                state = 0,
                timer = 0;
            var options = {
                sensitivity: 7,
                interval: 100,
                timeout: 0
            };

            function delay(el, e) {
                if (timer) timer = clearTimeout(timer);
                state = 0;
                return onOut.call(el, e)
            }

            function tracker(e) {
                x = e.clientX;
                y = e.clientY
            }

            function compare(el, e) {
                if (timer) timer = clearTimeout(timer);
                if (Math.abs(pX - x) + Math.abs(pY - y) < options.sensitivity) {
                    state = 1;
                    return onOver.call(el, e)
                } else {
                    pX = x;
                    pY = y;
                    timer = setTimeout(function() {
                        compare(el, e)
                    }, options.interval)
                }
            }
            h.options = function(opt) {
                options = $.extend({}, options, opt);
                return h
            };

            function dispatchOver(e) {
                if (timer) timer = clearTimeout(timer);
                el.removeEventListener("mousemove", tracker, false);
                if (state !== 1) {
                    pX = e.clientX;
                    pY = e.clientY;
                    el.addEventListener("mousemove", tracker, false);
                    timer = setTimeout(function() {
                        compare(el, e)
                    }, options.interval)
                }
                return this
            }

            function dispatchOut(e) {
                if (timer) timer = clearTimeout(timer);
                el.removeEventListener("mousemove", tracker, false);
                if (state === 1) {
                    timer = setTimeout(function() {
                        delay(el, e)
                    }, options.timeout)
                }
                return this
            }
            h.remove = function() {
                if (!el) return;
                el.removeEventListener("mouseover", dispatchOver, false);
                el.removeEventListener("mouseout", dispatchOut, false)
            };
            if (el) {
                el.addEventListener("mouseover", dispatchOver, false);
                el.addEventListener("mouseout", dispatchOut, false)
            }
            return h
        };
        return hoverIntent
    });
    define("libra/navigation/v3/utils/language-utils", ["librastandardlib/url-utils/getQueryStringParam", "librastandardlib/url-utils/updateQueryStringParam", "librastandardlib/aws/page-settings"], function(getQueryStringParam, updateQueryStringParam, PageSettings) {
        "use strict";
        var LanguageUtils = {
            languageCookieName: "aws_lang",
            queryParamKeys: [],
            queryParamKeyList: [{
                scope: "/search",
                params: ["q", "searchQuery"]
            }, {
                scope: "/partners/find/results",
                params: ["facets", "keyword", "location", "size", "sort", "start", "t", "view"]
            }, {
                scope: "/partners/find/partnerdetails",
                params: ["id", "n"]
            }],
            addCurrentPathnameToLanguageLinks: function(selector) {
                var langLinks = $(selector).find("li[data-language]");
                var origin = window.location.protocol + "//" + window.location.host;
                var pathname = window.location.pathname || "/";
                var hash = "";
                var isScopeSearch = false;
                var searchScope = "/search";
                this.queryParamKeyList.forEach(function(item) {
                    if (pathname.indexOf(item.scope) === 0 || PageSettings.supportedLanguages.indexOf(pathname.split(item.scope)[0].slice(1)) > -1) {
                        if (!isScopeSearch) {
                            isScopeSearch = item.scope === searchScope
                        }
                        this.queryParamKeys = this.queryParamKeys.concat(item.params)
                    }
                }.bind(this));
                var queryParamValues = this.queryParamKeys.map(function(key) {
                    return getQueryStringParam(key, window.location.search)
                });
                var hasQueryParam = queryParamValues.some(function(val) {
                    return val !== ""
                });
                var hasSearchQueryParam = isScopeSearch && hasQueryParam;
                if (hasSearchQueryParam) {
                    hash = window.location.hash
                }
                for (var i = 0, len = langLinks.length; i < len; i++) {
                    var $langLink = $(langLinks[i]);
                    var linkUrl = $langLink.find("a").attr("href");
                    var linkQueryString = "";
                    var parts = linkUrl.split("?");
                    if (parts.length > 1) {
                        var hashParts = parts[1].split("#");
                        linkQueryString = "?" + hashParts[0]
                    }
                    if (hasQueryParam) {
                        this.queryParamKeys.forEach(function(key, idx) {
                            if (queryParamValues[idx]) {
                                linkQueryString = updateQueryStringParam(linkQueryString, key, queryParamValues[idx])
                            }
                        })
                    }
                    var langCode = $langLink.attr("data-language");
                    if (langCode !== "") {
                        var found = false;
                        var j = 0;
                        var len2 = this.options.supportedLanguages.length;
                        while (!found && j < len2) {
                            var codeInPath = "/" + this.options.supportedLanguages[j] + "/";
                            var idx = pathname.indexOf(codeInPath);
                            if (idx === 0) {
                                pathname = pathname.substr(3, pathname.length);
                                found = true
                            }
                            j++
                        }
                        var newUrl;
                        if (langCode === this.options.defaultLanguage) {
                            newUrl = origin + pathname + linkQueryString + hash
                        } else {
                            newUrl = origin + "/" + langCode + pathname + linkQueryString + hash
                        }
                        $langLink.find("a").attr("href", newUrl)
                    }
                }
            },
            bindPreferredLanguageSelectionEvent: function(selector) {
                var that = this;
                $(selector).on("click", "li[data-language]", function() {
                    that.setLanguageCookie($(this).data("language"));
                    that.addCurrentPathnameToLanguageLinks($(selector))
                })
            },
            setLanguageCookie: function(val) {
                var parentDomain = "." + window.location.hostname.split(".").slice(-2).join(".");
                $.cookie(this.languageCookieName, val, {
                    expires: 30,
                    domain: parentDomain,
                    path: "/"
                })
            },
            removeUnsupportedLanguages: function(languageLinkSelector) {
                var $languageLinkContainer = $(languageLinkSelector);
                var langLinks = $languageLinkContainer.find("li[data-language]");
                for (var i = 0, len = langLinks.length; i < len; i++) {
                    var $langLink = $(langLinks[i]);
                    var langCode = $langLink.data("language");
                    if ($.inArray(langCode, this.options.supportedLanguages) === -1) {
                        $langLink.remove()
                    }
                }
            }
        };
        return LanguageUtils
    });
    define("librastandardlib/obj-utils/mixin", [], function() {
        "use strict";
        return function mixin(target, source) {
            if (typeof target !== "object" || typeof source !== "object") {
                return target
            }
            Object.keys(source).forEach(function(key) {
                if (!target.hasOwnProperty(key)) {
                    target[key] = source[key]
                }
            });
            return target
        }
    });
    define("libra/components/pixel-mixin", [], function() {
        "use strict";
        return {
            firePixel: function() {
                if (this.pixelUrl) {
                    var url = this.pixelUrl;
                    if (/^\/(?!\/)/.test(url)) {
                        url = window.location.origin + url
                    }
                    setTimeout(function() {
                        this._firedPixel = url;
                        (new Image).src = url
                    }.bind(this), 0)
                }
            }
        }
    });
    define("librastandardlib/aws/aws-namespace", [], function() {
        if (typeof AWS !== "object") {
            AWS = {}
        }
        return AWS
    });
    define("libra/core/aws-current-user", ["librastandardlib/aws/aws-namespace"], function() {
        function CurrentUser() {
            this.cookies = $.cookie();
            this.getCurrentUserData()
        }
        CurrentUser.prototype = {
            getCurrentUserData: function() {
                this.isAuthenticated = this.getAuthenticationStatus();
                this.isIAMUser = this.getIsIAMUser();
                this.registrationStatus = this.cookies.regStatus || "pre-register";
                this.awsAccountId = this.cookies["aws-reg-aid"] || null;
                this.targetVisitorId = this.cookies["aws-target-visitor-id"] || null;
                this.urchinId = this.cookies.__utmc || null;
                this.munchkinId = this.cookies._mkto_trk || null;
                this.siteCatalystFallbackId = this.cookies.s_fid || null
            },
            getAuthenticationStatus: function() {
                return !!this.cookies["aws-x-main"]
            },
            getIsIAMUser: function() {
                return !!this.cookies["aws-account-alias"]
            }
        };
        AWS.CurrentUser = new CurrentUser;
        return AWS.CurrentUser
    });
    define("libra/components/google-rlsa-pixel", ["librastandardlib/obj-utils/mixin", "libra/components/pixel-mixin", "libra/core/aws-current-user"], function(mixin, PixelMixin, CurrentUser) {
        "use strict";
        var PIXEL_URL = "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/952612511/?guid=ON&script=0";
        var hasFired = false;
        var regStatusMap = {
            registered: 100,
            "pre-register": 200,
            registering: 300
        };

        function GoogleRLSAPixel() {
            if (!hasFired) {
                hasFired = true;
                this.pixelUrl = PIXEL_URL + "&data.rs=" + encodeURIComponent(regStatusMap[CurrentUser.registrationStatus]);
                this.firePixel()
            }
        }
        mixin(GoogleRLSAPixel.prototype, PixelMixin);
        Libra.Comp.register({
            name: "google-rlsa-pixel",
            initFct: function() {
                new GoogleRLSAPixel
            },
            initTime: "documentReady"
        });
        return GoogleRLSAPixel
    });
    define("libra/footer/page-footer", ["libra/navigation/v3/utils/language-utils", "libra/components/google-rlsa-pixel"], function(LanguageUtils) {
        "use strict";
        var PageFooter = {
            defaults: {
                footerV3Selector: ".m-page-footer",
                footerV2LanguageSelector: "#aws-page-footer-lang-links"
            },
            init: function($container, options) {
                this.options = $.extend({}, this.defaults, options);
                $.extend(this, LanguageUtils);
                var isFooterV2 = $("#aws-page-footer").hasClass("aws-page-footer");
                var footerLanguageSelector = this.options.footerV3Selector;
                if (isFooterV2) {
                    footerLanguageSelector = this.options.footerV2LanguageSelector
                }
                this.removeUnsupportedLanguages(footerLanguageSelector);
                this.addCurrentPathnameToLanguageLinks(footerLanguageSelector);
                this.bindPreferredLanguageSelectionEvent(footerLanguageSelector);
                return this
            }
        };
        return PageFooter
    });
    define("librastandardlib/event-utils/debounceElemEvent", [], function() {
        "use strict";
        return function debounceElemEvent(fct, elem, eventName, timeout, context) {
            var that = context || this,
                count = 0;

            function listener() {
                var id = ++count;
                window.setTimeout(function() {
                    if (id === count) {
                        fct.call(that)
                    }
                }, timeout)
            }
            elem.addEventListener(eventName, listener);
            return listener
        }
    });
    define("libra/navigation/v3/mouse-tracker", [], function() {
        "use strict";
        var regions = [],
            n = 3,
            cursor = [{
                x: 0,
                y: 0
            }],
            c = 0,
            listening = false;
        var callbackArgs = function() {
            var pCursors = [];
            for (var i = 1; i < n; i++) {
                pCursors.push(cursor[(c - i + n) % n])
            }
            return $.extend(true, {}, {
                cursor: cursor[c],
                priorCursors: pCursors
            })
        };
        var check = function(immediately) {
            for (var i = 0; i < regions.length; i++) {
                var r = regions[i];
                var inside = $.grep(r.rects, function(j) {
                    return cursor[c].x >= j[0] && cursor[c].y >= j[1] && cursor[c].x < j[0] + j[2] && cursor[c].y < j[1] + j[3]
                }).length > 0;
                if (r.inside !== null && inside && !r.inside && r.mouseEnter) {
                    r.inside = r.mouseEnter(callbackArgs())
                } else if (r.inside !== null && !inside && r.inside && r.mouseLeave) {
                    r.inside = !r.mouseLeave(immediately, callbackArgs())
                }
            }
        };
        var startListening = function() {
            $(document).mousemove(function(e) {
                c = (c + 1) % n;
                cursor[c] = {
                    x: e.pageX,
                    y: e.pageY
                };
                check()
            });
            listening = true
        };
        return {
            add: function(rectsArray, options) {
                if (!listening) {
                    startListening()
                }
                var r = $.extend({
                    rects: rectsArray
                }, options);
                regions.push(r);
                return r
            },
            remove: function(region) {
                for (var i = 0; i < regions.length; i++) {
                    if (regions[i] === region) {
                        regions.splice(i, 1);
                        return
                    }
                }
            },
            checkNow: function() {
                check(true)
            },
            getCallbackArgs: function() {
                return callbackArgs()
            }
        }
    });
    define("libra/navigation/v3/calculate-delay", [], function() {
        "use strict";
        var mouseTrackerDefaults = {
            mouseTrackerMajorDelay: 220,
            mouseTrackerMinorDelay: 80
        };
        var cursorPosition = function(cursor, rect, isRTL) {
            var h = "c",
                v = "c";
            if (cursor && rect) {
                if (isRTL) {
                    if (cursor.x > rect.x1) {
                        h = "hs"
                    } else if (cursor.x < rect.x2) {
                        h = "he"
                    }
                } else if (cursor.x < rect.x1) {
                    h = "hs"
                } else if (cursor.x > rect.x2) {
                    h = "he"
                }
                if (cursor.y < rect.y1) {
                    v = "t"
                } else if (cursor.y > rect.y2) {
                    v = "b"
                }
            }
            return v + h
        };
        var calculateDelay = function(args, rect, isRTL) {
            var delay = 0,
                c = args.cursor,
                p1 = args.priorCursors[0] || {},
                p2 = args.priorCursors[1] || {};
            //    are limited to the pixel grid.  So, if that appears to be the case, wait a brief time instead of
            if (c.x === p1.x && Math.abs(c.y - p1.y) < 2 && c.x > p2.x) {
                delay = mouseTrackerDefaults.mouseTrackerMinorDelay
            } else {
                var r = rect,
                    pts = [c, p1];
                switch (cursorPosition(c, r, isRTL)) {
                    case "ths":
                        if (isRTL) {
                            pts.push({
                                x: r.x2,
                                y: r.y2
                            }, {
                                x: r.x1,
                                y: r.y1
                            })
                        } else {
                            pts.push({
                                x: r.x1,
                                y: r.y2
                            }, {
                                x: r.x2,
                                y: r.y1
                            })
                        }
                        break;
                    case "bhs":
                        if (isRTL) {
                            pts.push({
                                x: r.x2,
                                y: r.y1
                            }, {
                                x: r.x1,
                                y: r.y2
                            })
                        } else {
                            pts.push({
                                x: r.x1,
                                y: r.y1
                            }, {
                                x: r.x2,
                                y: r.y2
                            })
                        }
                        break;
                    case "chs":
                        if (isRTL) {
                            pts.push({
                                x: r.x2,
                                y: r.y1
                            }, {
                                x: r.x1,
                                y: r.y2
                            })
                        } else {
                            pts.push({
                                x: r.x1,
                                y: r.y1
                            }, {
                                x: r.x1,
                                y: r.y2
                            })
                        }
                        break;
                    default:
                        pts.push({
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        });
                        delay = -1
                }
                if (delay === 0) {
                    var b0 = (pts[2].x - pts[1].x) * (pts[3].y - pts[1].y) - (pts[3].x - pts[1].x) * (pts[2].y - pts[1].y),
                        b1 = ((pts[2].x - pts[0].x) * (pts[3].y - pts[0].y) - (pts[3].x - pts[0].x) * (pts[2].y - pts[0].y)) / b0,
                        b2 = ((pts[3].x - pts[0].x) * (pts[1].y - pts[0].y) - (pts[1].x - pts[0].x) * (pts[3].y - pts[0].y)) / b0,
                        b3 = ((pts[1].x - pts[0].x) * (pts[2].y - pts[0].y) - (pts[2].x - pts[0].x) * (pts[1].y - pts[0].y)) / b0;
                    delay = b1 > 0 && b2 > 0 && b3 > 0 ? mouseTrackerDefaults.mouseTrackerMajorDelay : 0
                }
            }
            return delay
        };
        return calculateDelay
    });
    define("libra/navigation/v3/utils/unwrap-mbox-contents", [], function() {
        "use strict";
        return function unwrapMboxContents(elem) {
            var $mbox = $(elem).parents(".lb-mbox");
            if ($mbox.length > 0) {
                $mbox.replaceWith($mbox.children(".awsm").html())
            }
        }
    });
    define("libra/navigation/v3/sidebar-item", ["libra/navigation/v3/mouse-tracker", "libra/navigation/v3/calculate-delay", "libra/navigation/v3/utils/unwrap-mbox-contents", "libra/event-utils/event-hub"], function(MouseTracker, calculateDelay, unwrapMboxContents, EventHub) {
        "use strict";
        var defaults = {
            contentColumnSelector: 'div[class^="m-nav-col"]',
            transitionInClass: "m-transition-in",
            timeout: 280,
            triggerOuterHeight: 29
        };

        function SidebarItem(id, panel) {
            this.options = $.extend({}, defaults, panel.options);
            this.id = id;
            this.$target = $("#" + this.id);
            this.panel = panel;
            this.$trigger = panel.$elem.find('[data-sidebar="' + id + '"]').first();
            this.isMouseTrackerEnabled = false
        }
        SidebarItem.prototype = {
            toggle: function() {
                if (!$(this).hasClass(this.options.activeClass)) {
                    this.expand()
                }
            },
            expand: function() {
                var resetScrollTop = false;
                if (!this.$target.hasClass(this.options.activeClass)) {
                    resetScrollTop = true
                }
                this.$target.addClass(this.options.activeClass).outerWidth();
                this.$target.addClass(this.options.transitionInClass);
                if (resetScrollTop) {
                    this.$target.find(this.options.contentColumnSelector).scrollTop(0)
                }
                var i, len;
                var siblings = this.siblings();
                if (this.hasActiveSibings(siblings)) {
                    this.giveMouseTrackerPriority(siblings);
                    for (i = 0, len = siblings.length; i < len; i++) {
                        siblings[i].$trigger.removeClass(this.options.activeClass);
                        siblings[i].$target.removeClass(this.options.activeClass + " " + this.options.transitionInClass)
                    }
                }
                this.$trigger.addClass(this.options.activeClass);
                setTimeout(function() {
                    this.$target.trigger(this.options.contentRevealEvent)
                }.bind(this), this.options.transitionDoneWaitTime)
            },
            setupMouseTrackers: function(viewportHeight) {
                var that = this;
                var x1 = this.panel.sidebarPanelContentHorizontalStartPosition;
                if (this.panel.targetY === null) {
                    this.panel.targetY = this.$target.offset().top
                }
                var destinationRect = {
                    x1: x1,
                    y1: this.panel.targetY,
                    x2: x1 + this.panel.options.sidebarWidth,
                    y2: this.panel.targetY + viewportHeight
                };
                var leaveTrigger = function() {
                    that.panel.clearTimeoutRegistry()
                };
                this.$trigger.on("mouseleave", leaveTrigger);
                this.panel.eventStack[this.panel.eventStack.length] = {
                    obj: this.$trigger,
                    eventType: "mouseleave",
                    handler: leaveTrigger
                };
                var enterTrigger = function(args) {
                    var delay = calculateDelay(args, destinationRect, that.panel.isRTL);
                    that.panel.clearTimeoutRegistry();
                    that.panel.timeoutRegistry[that.panel.timeoutRegistry.length] = {
                        fn: setTimeout(function() {
                            that.expand()
                        }, delay)
                    };
                    return true
                };
                this.panel.mouseTrackerRegistry[this.id] = MouseTracker.add([
                    [this.panel.sidebarPanelHorizontalStartPosition, this.$trigger.offset().top, this.panel.options.sidebarWidth, this.options.triggerOuterHeight]
                ], {
                    inside: false,
                    mouseEnter: enterTrigger,
                    mouseLeave: function() {
                        return true
                    }
                })
            },
            siblings: function() {
                var items = this.panel.sidebarItems;
                var siblings = [];
                for (var key in items) {
                    if (items.hasOwnProperty(key)) {
                        var node = items[key];
                        if (key !== this.id) {
                            siblings[siblings.length] = node
                        }
                    }
                }
                return siblings
            },
            hasActiveSibings: function(siblings) {
                siblings = siblings || this.siblings();
                var found = false;
                var i = 0;
                var len = siblings.length;
                while (i < len) {
                    if ($(siblings[i].$trigger).hasClass(this.options.activeClass)) {
                        found = true
                    }
                    i++
                }
                return found
            },
            giveMouseTrackerPriority: function(siblings) {
                for (var i = 0, len = siblings.length; i < len; i++) {
                    siblings[i].isMouseTrackerEnabled = false
                }
                this.isMouseTrackerEnabled = true
            }
        };
        Libra.Comp.register({
            name: "global-nav-sidebar-item",
            initFct: function(elem) {
                unwrapMboxContents(elem);
                EventHub.publish("libra_global-nav-sidebar-item_ready_" + elem.id, {
                    id: elem.id
                })
            },
            initTime: "immediate"
        });
        return SidebarItem
    });
    define("libra/navigation/v3/nav-panel", ["librastandardlib/event-utils/debounceElemEvent", "librastandardlib/event-utils/debounceWindowEvent", "librastandardlib/detection-utils/detection-utils", "libra/navigation/v3/mouse-tracker", "libra/navigation/v3/calculate-delay", "libra/navigation/v3/sidebar-item", "libra/navigation/v3/utils/unwrap-mbox-contents", "librastandardlib/aws/page-settings", "libra/event-utils/event-hub"], function(debounceElemEvent, debounceWindowEvent, DetectionUtils, MouseTracker, calculateDelay, SidebarItem, unwrapMboxContents, PageSettings, EventHub) {
        "use strict";
        var defaults = {
            jQueryEventNamespace: "aws_nav-sidebar-group",
            navPanelContentSelector: ".m-nav-panel-content",
            panelLinkSelector: ".m-nav-panel-link",
            sidebarFirstContentColumnsSelector: '.m-nav-sidebar-menu + .m-nav-panel-content div[class^="m-nav-col"]',
            sidebarMenuSelector: ".m-nav-sidebar-menu",
            sidebarTriggerDataAttr: "data-sidebar",
            sidebarTriggerDataElem: "a[data-sidebar]",
            sidebarWidth: 260
        };

        function NavPanel(id, options) {
            this.options = $.extend({}, defaults, options);
            this.id = id;
            this.$elem = $("#" + id);
            this.isRTL = PageSettings.isRTL;
            this.$sidebarMenus = this.$elem.find(this.options.sidebarMenuSelector);
            this.sidebarItems = {};
            this.timeoutRegistry = [];
            this.scrollAtSmallDebouncedIntervalEventRegistry = null;
            this.scrollAtLargeDebouncedIntervalEventRegistry = null;
            this.eventStack = [];
            this.mouseTrackerRegistry = {};
            this.sidebarItemsHavingEnabledMouseTrackersAtScrollTime = [];
            this.targetY = null;
            this.sidebarItemPanelLeftPositions = [];
            this.init()
        }
        NavPanel.prototype = {
            init: function() {
                if (this.$elem.hasClass(this.options.sidebarPanelClass)) {
                    this.addSidebarItems()
                }
            },
            addSidebarItems: function() {
                var cb = function(evt, data) {
                    var sidebarItem = new SidebarItem(data.id, this);
                    this.sidebarItems[data.id] = sidebarItem;
                    this.bindClickEvents(sidebarItem)
                }.bind(this);
                var triggers = this.$elem.get(0).querySelectorAll(this.options.sidebarTriggerDataElem);
                for (var i = 0; i < triggers.length; i++) {
                    var trigger = triggers[i];
                    var id = $(trigger).attr(this.options.sidebarTriggerDataAttr);
                    EventHub.subscribe("libra_global-nav-sidebar-item_ready_" + id, {
                        cb: cb
                    })
                }
            },
            triggerPanelMenuLink: function() {
                var $menuLinks = this.$elem.find(this.options.panelLinkSelector + " a");
                var firstKey = $menuLinks.first().attr(this.options.sidebarTriggerDataAttr);
                this.sidebarItems[firstKey].state = $(this.sidebarItems[firstKey]).addClass(this.options.activeClass);
                this.watchResize();
                $menuLinks.removeClass(this.options.activeClass);
                $($menuLinks[0]).addClass(this.options.activeClass);
                if (!this.options.isTouchOnly) {
                    this.recreateMouseTrackers();
                    this.destroyWatchScrollAtSmallDebouncedInterval();
                    this.destroyWatchScrollAtLargeDebouncedInterval();
                    this.watchScrollAtSmallDebouncedInterval();
                    this.watchScrollAtLargeDebouncedInterval()
                }
            },
            recreateMouseTrackers: function() {
                this.tearDownAllMouseTrackers();
                this.calculateSidebarPanelLeftPositions();
                this.setupAllMouseTrackers()
            },
            bindClickEvents: function(sidebarItem) {
                sidebarItem.$trigger.on("click", function(e) {
                    if (this.options.isTouchOnly) {
                        e.preventDefault()
                    }
                    sidebarItem.toggle()
                }.bind(this))
            },
            watchScrollAtSmallDebouncedInterval: function() {
                this.scrollAtSmallDebouncedIntervalEventRegistry = debounceElemEvent(function() {
                    for (var key in this.sidebarItems) {
                        if (this.sidebarItems.hasOwnProperty(key)) {
                            var node = this.sidebarItems[key];
                            if (node.isMouseTrackerEnabled) {
                                this.sidebarItemsHavingEnabledMouseTrackersAtScrollTime.push(node)
                            }
                        }
                    }
                    this.tearDownAllMouseTrackers()
                }.bind(this), this.$sidebarMenus.get(0), "scroll", 20, this)
            },
            destroyWatchScrollAtSmallDebouncedInterval: function() {
                this.$sidebarMenus.get(0).removeEventListener("scroll", this.scrollAtSmallDebouncedIntervalEventRegistry)
            },
            watchScrollAtLargeDebouncedInterval: function() {
                this.scrollAtLargeDebouncedIntervalEventRegistry = debounceElemEvent(function() {
                    this.recreateMouseTrackers();
                    for (var i = 0, len = this.sidebarItemsHavingEnabledMouseTrackersAtScrollTime.length; i < len; i++) {
                        this.sidebarItemsHavingEnabledMouseTrackersAtScrollTime[i].isMouseTrackerEnabled = true
                    }
                    this.sidebarItemsHavingEnabledMouseTrackersAtScrollTime.length = 0
                }.bind(this), this.$sidebarMenus.get(0), "scroll", 300, this)
            },
            destroyWatchScrollAtLargeDebouncedInterval: function() {
                this.$sidebarMenus.get(0).removeEventListener("scroll", this.scrollAtLargeDebouncedIntervalEventRegistry)
            },
            watchResize: function() {
                debounceWindowEvent(function() {
                    this.recreateMouseTrackers()
                }, "resize." + this.options.jQueryEventNamespace + "-watch_resize", 40, this)
            },
            destroyWatchResize: function() {
                $(window).off("resize." + this.options.jQueryEventNamespace + "-watch_resize")
            },
            clearTimeoutRegistry: function() {
                this.timeoutRegistry.forEach(function(item) {
                    clearTimeout(item.fn)
                })
            },
            flushEventStack: function() {
                for (var i = 0, len = this.eventStack.length; i < len; i++) {
                    var event = this.eventStack[i];
                    event.obj.off(event.eventType, event.handler)
                }
                this.eventStack.length = 0
            },
            calculateSidebarPanelLeftPositions: function() {
                if (this.isRTL) {
                    this.sidebarPanelHorizontalStartPosition = this.$elem.offset().left - parseInt(this.$elem.css("padding-left"), 10) + this.$elem.outerWidth() - this.options.sidebarWidth;
                    this.sidebarPanelContentHorizontalStartPosition = this.sidebarPanelHorizontalStartPosition - this.options.sidebarWidth
                } else {
                    this.sidebarPanelHorizontalStartPosition = this.$elem.offset().left + parseInt(this.$elem.css("padding-left"), 10);
                    this.sidebarPanelContentHorizontalStartPosition = this.sidebarPanelHorizontalStartPosition + this.options.sidebarWidth
                }
            },
            setupAllMouseTrackers: function() {
                var viewportHeight = $(window).height();
                var items = this.sidebarItems;
                for (var key in items) {
                    if (items.hasOwnProperty(key)) {
                        var node = items[key];
                        node.setupMouseTrackers(viewportHeight)
                    }
                }
            },
            tearDownAllMouseTrackers: function() {
                for (var id in this.mouseTrackerRegistry) {
                    if (this.mouseTrackerRegistry.hasOwnProperty(id)) {
                        MouseTracker.remove(this.mouseTrackerRegistry[id]);
                        delete this.mouseTrackerRegistry[id]
                    }
                }
                this.flushEventStack();
                var items = this.sidebarItems;
                for (var key in items) {
                    if (items.hasOwnProperty(key)) {
                        items[key].isMouseTrackerEnabled = false
                    }
                }
            },
            resetPanelContentScrollTops: function() {
                this.$elem.find(this.options.sidebarMenuSelector).scrollTop(0);
                this.$elem.find(this.options.sidebarFirstContentColumnsSelector).each(function() {
                    $(this).scrollTop(0)
                });
                this.$elem.scrollTop(0)
            },
            setFirstPanelContentActive: function() {
                var $panelContent = this.$elem.find(this.options.navPanelContentSelector);
                $panelContent.removeClass(this.options.activeClass);
                $panelContent.first().addClass(this.options.activeClass).outerWidth();
                $panelContent.first().addClass(this.options.transitionInClass)
            },
            addTargetPanelActiveClass: function() {
                this.$elem.addClass(this.options.activeClass);
                this.$elem.siblings().removeClass(this.options.activeClass)
            }
        };
        Libra.Comp.register({
            name: "global-nav-panel",
            initFct: function(elem) {
                unwrapMboxContents(elem);
                EventHub.publish("libra_global-nav-panel_ready_" + elem.id, {
                    id: elem.id
                })
            },
            initTime: "immediate"
        });
        return NavPanel
    });
    define("libra/navigation/v3/language-dropdown", ["libra/navigation/v3/utils/language-utils"], function(LanguageUtils) {
        "use strict";
        var defaults = {
            languageDropdownLinkSelector: '[data-id="popover-language-selector"]',
            languageLinksSelector: "li[data-language]",
            triggerSelector: "#m-nav-language-selector"
        };

        function LanguageDropdown(options) {
            this.options = $.extend({}, defaults, options);
            this.hasAlternateLanguages = true;
            this.$trigger = $(this.options.triggerSelector);
            this.init()
        }
        LanguageDropdown.prototype = {
            init: function() {
                $.extend(this, LanguageUtils);
                this.bindTouchEvents();
                this.removeUnsupportedLanguages(this.options.languageDropdownLinkSelector, this.options.languageDropdownLinkSelector);
                this.removeCurrentLanguage();
                if (!this.hasAlternateLanguages) {
                    return false
                }
                this.addCurrentPathnameToLanguageLinks(this.options.languageDropdownLinkSelector);
                this.bindPreferredLanguageSelectionEvent(this.options.languageDropdownLinkSelector);
                return true
            },
            bindTouchEvents: function() {
                this.$trigger.on("click", function(e) {
                    e.preventDefault()
                })
            },
            removeCurrentLanguage: function() {
                var currentLanguage = this.$trigger.data("language");
                var $languageDropdown = $(this.options.languageDropdownLinkSelector);
                var langLinks = $languageDropdown.find("li[data-language]");
                var i = 0;
                var len = langLinks.length;
                var linksRemaining = langLinks.length;
                while (i < len) {
                    var $langLink = $(langLinks[i]);
                    var langCode = $langLink.data("language");
                    if (langCode === currentLanguage) {
                        $langLink.remove();
                        linksRemaining--
                    }
                    i++
                }
                if (linksRemaining <= 0) {
                    this.$trigger.remove();
                    $languageDropdown.remove();
                    this.hasAlternateLanguages = false
                }
            }
        };
        return LanguageDropdown
    });
    define("librastandardlib/detection-utils/isLocalStorageSupported", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        "use strict";
        var isSupported = false;
        return function isLocalStorageSupported() {
            if (isSupported) {
                return isSupported
            }
            var storage = window.localStorage;
            try {
                storage.setItem("test", "test");
                storage.removeItem("test");
                isSupported = true;
                return true
            } catch (e) {
                return false
            }
        }
    });
    define("librastandardlib/storage-utils/localstorage-facade", ["librastandardlib/test-helpers/browser-globals/window", "librastandardlib/detection-utils/isLocalStorageSupported"], function(window, isLocalStorageSupported) {
        "use strict";
        var storage = window.localStorage;
        var LocalStorageFacade = {
            getData: function(key) {
                if (!isLocalStorageSupported()) {
                    return null
                }
                var json = storage.getItem(key);
                if (!json) {
                    return null
                }
                try {
                    json = JSON.parse(json)
                } catch (err) {
                    return null
                }
                if (Date.now() <= json.expiryTimestamp) {
                    return json.data
                }
                this.removeData(key);
                return null
            },
            setData: function(storageKey, data, expiresSeconds) {
                if (!isLocalStorageSupported()) {
                    return false
                }
                if (!expiresSeconds || typeof expiresSeconds !== "number" || expiresSeconds < 1) {
                    throw new Error("'expires time' cannot be falsy OR negative")
                }
                var expirationTime = new Date(Date.now() + 1e3 * expiresSeconds);
                var cachedData = {
                    data: data,
                    expiryTimestamp: expirationTime.getTime()
                };
                try {
                    storage.setItem(storageKey, JSON.stringify(cachedData));
                    return true
                } catch (err) {
                    return false
                }
            },
            removeData: function(key) {
                if (!isLocalStorageSupported() || !key) {
                    return false
                }
                storage.removeItem(key);
                return true
            }
        };
        return LocalStorageFacade
    });
    define("libra/dom-utils/transition", [], function() {
        return {
            Speed: {
                effectsDefault: 200,
                scrollDefault: 400,
                fast: 200
            },
            Timing: {
                effectsDefault: "ease-in-out"
            }
        }
    });
    define("libra/dom-utils/smoothScrollOptions", ["libra/dom-utils/transition"], function(Transition) {
        "use strict";
        return {
            scrollPadding: 30,
            duration: Transition.Speed.scrollDefault,
            headerSelector: "#aws-page-header",
            parentSelector: "#aws-page-content",
            callback: function() {}
        }
    });
    define("libra/navigation/v3/mobile", ["librastandardlib/event-utils/onDOMContentLoaded", "librastandardlib/logger/logger", "librastandardlib/dom-utils/smoothScrollToElem", "librastandardlib/storage-utils/localstorage-facade", "librastandardlib/aws/page-settings", "libra/dom-utils/smoothScrollOptions"], function(onDOMContentLoaded, Logger, smoothScrollToElem, LocalStorageFacade, PageSettings, smoothScrollOptions) {
        "use strict";
        var logger = new Logger("NavMobileV3");
        var defaults = {
            header: "#m-nav-mobile-header",
            menuSelector: ".icon-reorder",
            searchMenuSelector: ".icon-search",
            searchMenuClass: "icon-search",
            searchPanelSelector: "#m-nav-mobile-search",
            searchInputSelector: ".m-nav-search-field",
            linksPanel: "#m-nav-mobile-links",
            linkParentSelector: ".m-nav-mobile-link-parent a",
            parentSelector: ".m-nav-mobile-link-parent",
            linksChild: ".m-nav-mobile-links-child",
            activeClass: "active",
            activeSelector: ".active",
            pageContentSelector: "#aws-page-content",
            pageFooterSelector: "#aws-page-footer",
            mobilePanelActive: "m-nav-mobile-panel-active",
            ajaxRetryLimit: 3,
            menuDataStorageKey: "awsm:navMobileMenuData",
            trimmedContentSelector: "#m-nav-trimdown",
            contentExpirationTime: 1800,
            metricPrefix: "awsm_v2_:comp_navMobile_",
            scrollAnimationDuration: 300,
            transitionDelayStart: 70,
            transitionDelayIncrement: 25,
            transitionDelayGrandchildrenStart: 70,
            allowScrollingToActiveMenu: true,
            contentRevealEvent: "custom_lb-comp-content-container_reveal"
        };

        function NavMobileV3() {
            this.options = $.extend({}, defaults);
            if (PageSettings.currentLanguage) {
                this.options.menuDataStorageKey = this.options.menuDataStorageKey + "_" + PageSettings.currentLanguage
            } else {
                this.options.menuDataStorageKey = this.options.menuDataStorageKey + "_" + $("html").attr("lang")
            }
            this.$body = $("body");
            this.$pageContent = $(this.options.pageContentSelector);
            this.$footer = $(this.options.pageFooterSelector);
            this.$header = $(this.options.header);
            this.$searchMenu = this.$header.find(this.options.searchMenuSelector);
            this.$searchPanel = $(this.options.searchPanelSelector);
            this.$searchInput = $(this.options.searchInputSelector);
            this.$menu = this.$header.find(this.options.menuSelector);
            this.$trimmedMenu = $(this.options.trimmedContentSelector);
            this.init()
        }
        NavMobileV3.prototype = {
            init: function() {
                if (!this.$header.length) {
                    return
                }
                this.loadContent()
            },
            setMenuContent: function(data) {
                if (!data) {
                    return
                }
                this.$header.append(data);
                this.options.isMenuEnabled = true;
                this.$linksContainer = $(this.options.linksPanel);
                this.$menuLinks = $(this.options.linkParentSelector);
                this.setAnimationDelays();
                this.bindMobileLinkEvents();
                this.bindLayoutChangeEvent();
                $(document).trigger("custom_aws_da_new-content")
            },
            loadTrimmedMenu: function() {
                var trimmedMenu = this.$trimmedMenu.html();
                var trimmedHtml = [];
                trimmedHtml.push('<nav id="m-nav-mobile-links" role="navigation">');
                trimmedHtml.push(trimmedMenu);
                trimmedHtml.push("</nav>");
                this.setMenuContent(trimmedHtml.join(""))
            },
            setAnimationDelays: function() {
                this.$links = $(this.options.linksPanel + " > ul > li");
                this.$subLinks = $(this.options.linksPanel + " > ul > li > ul > li");
                var that = this;
                that.$links.each(function() {
                    that.options.transitionDelayStart += that.options.transitionDelayIncrement;
                    $(this).css("transition-delay", that.options.transitionDelayStart + "ms")
                });
                that.$subLinks.each(function() {
                    that.options.transitionDelayGrandchildrenStart += that.options.transitionDelayIncrement;
                    $(this).css("transition-delay", that.options.transitionDelayGrandchildrenStart + "ms")
                })
            },
            loadContent: function() {
                var data = LocalStorageFacade.getData(this.options.menuDataStorageKey);
                if (!data) {
                    this.getMenuContent()
                } else {
                    this.setMenuContent(data)
                }
                var that = this;
                this.$searchMenu.on("click", function() {
                    that.close(that.$menu);
                    that.togglePanel($(this));
                    that.$searchInput.focus()
                })
            },
            getMenuContent: function() {
                var that = this;
                var menuContentUrl = that.$header.data("menu-url");
                if (!menuContentUrl) {
                    that.logError("MobileMenuMissingContentError", "Mobile menu URL is empty or doesn't exist");
                    that.loadTrimmedMenu();
                    return
                }
                this.callStartTime = (new Date).getTime();
                $.ajax({
                    url: menuContentUrl,
                    success: function(data) {
                        logger.info(that.options.metricPrefix + "MobileMenuContentAjaxRoundTripTime", "AI", {
                            value: (new Date).getTime() - that.callStartTime
                        });
                        that.cacheData(data);
                        that.setMenuContent(data);
                        that.logSuccess()
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        that.logError("MobileMenuContentAjaxError", errorThrown + "Mobile Menu content URL:" + menuContentUrl);
                        that.options.ajaxRetryLimit -= 1;
                        if (that.options.ajaxRetryLimit < 0) {
                            that.logError("MobileMenuMissingContentRetryError", "Mobile Menu content loading retried failed. Menu content URL:" + menuContentUrl);
                            that.loadTrimmedMenu();
                            return
                        }
                        $.ajax(this)
                    }
                })
            },
            cacheData: function(data) {
                if (!data) {
                    return
                }
                LocalStorageFacade.setData(this.options.menuDataStorageKey, data, this.options.contentExpirationTime)
            },
            logSuccess: function() {
                logger.debug(this.options.metricPrefix + "MobileMenuContentLoadedSuccess", "AI")
            },
            bindMobileLinkEvents: function() {
                var that = this;
                this.$menu.on("click", function() {
                    if (that.options.isMenuEnabled) {
                        that.close(that.$searchMenu);
                        that.togglePanel($(this))
                    }
                });
                this.$menuLinks.on("click", function() {
                    var $this = $(this);
                    $this.parent().find(that.options.parentSelector).find(that.options.activeSelector).removeClass(that.options.activeClass);
                    $this.toggleClass(that.options.activeClass);
                    $this.parent().toggleClass(that.options.activeClass);
                    $this.next(that.options.linksChild).toggleClass(that.options.activeClass, 600);
                    $this.parent().siblings().find(that.options.activeSelector).removeClass(that.options.activeClass);
                    if (that.options.allowScrollingToActiveMenu && $this.parent().find(that.options.linksChild).length) {
                        smoothScrollToElem(this, smoothScrollOptions)
                    }
                })
            },
            bindLayoutChangeEvent: function() {
                var that = this;
                $(window).on("resize", function() {
                    if (that.$header.is(":hidden")) {
                        that.close(that.$searchMenu);
                        that.close(that.$menu);
                        that.togglePageContent(true)
                    }
                })
            },
            close: function(elem) {
                if (elem.hasClass(this.options.activeClass)) {
                    this.toggleFullHeight(elem, true);
                    this.toggleSearchMobilePanel(elem, true)
                }
            },
            togglePanel: function(elem) {
                var isActive = elem.hasClass(this.options.activeClass);
                this.toggleSearchMobilePanel(elem, isActive);
                this.togglePageContent(isActive);
                this.$linksContainer.trigger(this.options.contentRevealEvent)
            },
            togglePageContent: function(isMenuActive) {
                if (!isMenuActive) {
                    this.$pageContent.hide();
                    this.$footer.hide()
                } else {
                    this.$pageContent.show();
                    this.$footer.show()
                }
            },
            toggleFullHeight: function(elem, isActive) {
                if (isActive) {
                    this.$linksContainer.find(this.options.activeSelector).removeClass(this.options.activeClass);
                    this.$body.removeClass(this.options.mobilePanelActive);
                    elem.removeClass(this.options.activeClass)
                } else {
                    var bodyHeight = this.$body.height();
                    this.$body.addClass(this.options.mobilePanelActive);
                    this.$searchPanel.height(bodyHeight);
                    $(this.options.linksPanel).height(bodyHeight);
                    elem.addClass(this.options.activeClass)
                }
            },
            toggleSearchMobilePanel: function(elem, isActive) {
                this.toggleFullHeight(elem, isActive);
                if (elem.hasClass(this.options.searchMenuClass)) {
                    this.$searchPanel.toggleClass(this.options.activeClass, !isActive)
                } else {
                    this.$linksContainer.toggleClass(this.options.activeClass, !isActive)
                }
            },
            logError: function(errorType, error) {
                logger.error(this.options.metricPrefix + errorType, "AI");
                logger.error(errorType + ": " + error, "RAW")
            }
        };
        onDOMContentLoaded(function() {
            new NavMobileV3
        })
    });
    define("libra/navigation/v3/navigation", ["librastandardlib/detection-utils/detection-utils", "librastandardlib/vendor/hoverintent/hoverIntent", "libra/footer/page-footer", "libra/navigation/v3/nav-panel", "libra/navigation/v3/language-dropdown", "librastandardlib/logger/logger", "libra/navigation/v3/mobile", "librastandardlib/storage-utils/localstorage-facade", "librastandardlib/aws/page-settings", "libra/event-utils/event-hub"], function(DetectionUtils, hoverIntent, PageFooter, NavPanel, LanguageDropdown, Logger, Mobile, LocalStorageFacade, PageSettings, EventHub) {
        "use strict";
        var logger = new Logger("NavDesktopV3");
        var defaults = {
            activeClass: "m-active",
            activeSelector: ".m-active",
            blogSubNavSelector: ".lb-blog-nav",
            clickSearchEvent: "click.awsm_m-nav_header-search",
            clickCloseSearchEvent: "click.awsm_m-nav_header-close-search",
            clickClosePanelEvent: "click.awsm_m-nav_header-close-panel",
            clickSliderLeftEvent: "click.awsm_m-nav_nav-slider-left",
            clickSliderRightEvent: "click.awsm_m-nav_nav-slider-right",
            closeIconSelector: ".m-nav-close-icon",
            contentRevealEvent: "custom_lb-comp-content-container_reveal",
            dataPanelAttribute: "data-panel",
            exitWrapperSelector: ".m-nav-panel-exits",
            transitionedClass: "m-transitioned",
            transitionInClass: "m-transition-in",
            transitionOutClass: "m-transition-out",
            isTouchOnly: false,
            leftArrowSelector: ".m-nav-angle-left-icon",
            leftArrowOffset: 73,
            lastLinkSelector: ".m-nav-panel-link:last-child",
            logoSelector: ".m-nav-logo",
            navSelector: "#m-nav",
            navHeaderSelector: ".m-nav-header",
            navHeaderSearchActiveClass: "m-nav-search-active",
            navHeaderPopoverClass: "m-nav-header-popover",
            navPanelActiveClass: "m-nav-panel-active",
            navPanelContentSelector: ".m-nav-panel-content",
            navSingleRowLayoutClass: "m-nav-single-row",
            navDoubleRowLayoutClass: "m-nav-double-row",
            keydownClosePanelEvent: "keydown.awsm_m-nav_header-close-panel",
            keydownCloseSearchEvent: "keydown.awsm_m-nav_header-close-search",
            orientationChangeEvent: "orientationchange.m-nav_orientation-change",
            pageContentSelector: "#aws-page-content",
            pageHeaderSelector: ".m-page-header",
            panelTransitionedClass: "m-nav-panel-transitioned",
            panelGridColSelector: ".lb-xbcol",
            panelWrapperSelector: ".m-nav-panel-wrapper",
            panelWrapperClass: "m-nav-panel-wrapper",
            popoverDataAttribute: "[data-lb-popover-trigger]",
            popoverDataKey: "lb-popover-trigger",
            primaryLinksSelector: ".m-nav-primary-links",
            primaryIconGroupSelector: ".m-icon-group",
            primaryIconGroupOffset: 126,
            hideClass: "m-hide",
            rightArrowSelector: ".m-nav-angle-right-icon",
            showClass: "m-show",
            searchBoxSelector: ".m-nav-search",
            searchFormSelector: ".m-nav-search form",
            searchBoxInputFieldSelector: ".m-nav-search-field",
            searchIconSelector: ".m-nav-search-icon",
            secondaryLinksSelector: ".m-nav-secondary-links",
            searchMobileSeacrhIconSelector: ".m-nav-mobile-button.m-nav-search-icon",
            sidebarPanelClass: "m-nav-sidebar-panel",
            supportedLanguages: ["en"],
            defaultLanguage: "en",
            timeout: 220,
            transitionEnd: "otransitionend oTransitionEnd msTransitionEnd transitionend",
            transitionDoneWaitTime: 300,
            hoverInterval: 120,
            ajaxRetryLimit: 3,
            metricPrefix: "awsm_v2_:comp_navDesktop_",
            desktopMenuDataStorageKey: "awsm:navDesktopMenuData",
            contentExpirationTime: 1800
        };

        function Navigation() {
            this.options = $.extend({}, defaults);
            this.$html = $("html");
            if (PageSettings.currentLanguage) {
                this.options.desktopMenuDataStorageKey = this.options.desktopMenuDataStorageKey + "_" + PageSettings.currentLanguage
            } else {
                this.options.desktopMenuDataStorageKey = this.options.desktopMenuDataStorageKey + "_" + this.$html.attr("lang")
            }
            this.isRTL = PageSettings.isRTL;
            this.$body = $("body");
            this.isV1Page = this.$html.hasClass("aws-v1-page");
            this.isBlogPage = this.$body.hasClass("aws-blogs-page");
            this.$blogSubNav = $(this.options.blogSubNavSelector);
            this.isMegaMenuOpen = false;
            this.isPrimarySliderActivated = false;
            this.$leftArrow = $(this.options.leftArrowSelector);
            this.$logo = $(this.options.logoSelector);
            this.$nav = $(this.options.navSelector);
            this.$pageContent = $(this.options.pageContentSelector);
            this.$pageHeader = $(this.options.pageHeaderSelector);
            this.$navHeader = $(this.options.navHeaderSelector);
            this.navHeaderDOMElem = this.$navHeader[0];
            this.$primaryLinksContainer = $(this.options.primaryLinksSelector);
            this.$primaryLinksList = $(this.options.primaryLinksSelector + " ul");
            this.$primaryLinks = $(this.options.primaryLinksSelector + " ul > li");
            this.$primaryIconGroup = $(this.options.primaryIconGroupSelector);
            this.$rightArrow = $(this.options.rightArrowSelector);
            this.$secondaryLinks = $(this.options.secondaryLinksSelector);
            this.$searchBox = $(this.options.searchBoxSelector);
            this.$searchBoxInput = $(this.options.searchBoxInputFieldSelector);
            this.$searchCloseIcon = $(this.options.searchBoxSelector + " " + this.options.closeIconSelector);
            this.$searchIcon = $(this.options.searchIconSelector);
            this.$searchMobileSearchIcon = $(this.options.searchMobileSeacrhIconSelector);
            this.$searchBoxInputField = $(this.options.searchBoxInputFieldSelector);
            this.$navHeaderLeftPadding = parseInt(this.$navHeader.css("padding-left"), 10);
            this.$navHeaderRightPadding = parseInt(this.$navHeader.css("padding-right"), 10);
            this.timeout = null;
            this.v1PageTopPadding = 30;
            this.navPanels = {};
            this.init()
        }
        Navigation.prototype = {
            init: function() {
                if (!this.$nav.length) {
                    return
                }
                this.addNavPanels();
                this.loadContent();
                this.cacheNavSiblingsHeight();
                this.addMobileClass();
                this.bindOpenSearchEvents();
                this.bindHeaderLayoutEvents();
                this.assignNavHeaderLayout();
                this.checkScrollbarWidth();
                this.addPopoverClass();
                if (PageSettings.supportedLanguages) {
                    this.options.supportedLanguages = PageSettings.supportedLanguages
                }
                if (PageSettings.defaultLanguage) {
                    this.options.defaultLanguage = PageSettings.defaultLanguage
                }
                this.languageDropdown = new LanguageDropdown({
                    supportedLanguages: this.options.supportedLanguages,
                    defaultLanguage: this.options.defaultLanguage
                });
                this.pageFooter = PageFooter.init(this.$el, $.extend({}, {
                    supportedLanguages: this.options.supportedLanguages,
                    defaultLanguage: this.options.defaultLanguage
                }, this.options.pageFooter))
            },
            addNavPanels: function() {
                var cb = function(evt, data) {
                    this.navPanels[data.id] = new NavPanel(data.id, this.options)
                }.bind(this);
                var that = this;
                this.$primaryLinks.each(function() {
                    var id = that.getLinkTargetId(this, that.options.dataPanelAttribute);
                    EventHub.subscribe("libra_global-nav-panel_ready_" + id, {
                        cb: cb
                    })
                })
            },
            loadContent: function() {
                var data = LocalStorageFacade.getData(this.options.desktopMenuDataStorageKey);
                if (!data) {
                    this.getMenuContent()
                } else {
                    this.setMenuContent(data)
                }
            },
            getMenuContent: function() {
                var that = this;
                var menuContentUrl = that.$navHeader.data("menu-url");
                if (!menuContentUrl) {
                    that.logError("MenuMissingContentError", "Menu URL is empty or doesn't exist");
                    return
                }
                this.callStartTime = (new Date).getTime();
                $.ajax({
                    url: menuContentUrl,
                    success: function(data) {
                        logger.info(that.options.metricPrefix + "MenuContentAjaxRoundTripTime", "AI", {
                            value: (new Date).getTime() - that.callStartTime
                        });
                        that.cacheData(data);
                        that.setMenuContent(data);
                        that.logSuccess()
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        that.logError("MenuContentAjaxError", errorThrown + "Menu content URL:" + menuContentUrl);
                        that.options.ajaxRetryLimit -= 1;
                        if (that.options.ajaxRetryLimit < 0) {
                            that.logError("MenuMissingContentRetryError", "Menu content loading retried failed. Menu content URL:" + menuContentUrl);
                            return
                        }
                        $.ajax(this)
                    }
                })
            },
            cacheData: function(data) {
                if (!data) {
                    return
                }
                LocalStorageFacade.setData(this.options.desktopMenuDataStorageKey, data, this.options.contentExpirationTime)
            },
            setMenuContent: function(data) {
                if (!data && data.length === 0) {
                    return
                }
                this.$navHeader.after(data);
                this.$navHeader.trigger("custom_tm_new-content");
                this.$navHeader.trigger("custom_libra_require_new-content");
                this.$panelCloseIcon = $(this.options.panelWrapperSelector + " " + this.options.closeIconSelector);
                this.$panelWrapper = $(this.options.panelWrapperSelector);
                this.$panelExitWrapper = $(this.options.exitWrapperSelector);
                this.setPanelTopPosition();
                if (DetectionUtils.isLikelyMobile() || this.options.isTouchOnly) {
                    this.options.isTouchOnly = true;
                    this.bindTouchEvents();
                    this.bindOrientationChangeEvent()
                } else {
                    this.bindTouchEvents();
                    this.bindHoverPrimaryLinksEvents();
                    this.callMegamenuTriggerEvents(this.$panelWrapper)
                }
                $(document).trigger("custom_aws_da_new-content")
            },
            logSuccess: function() {
                logger.debug(this.options.metricPrefix + "MenuContentLoadedSuccess", "AI")
            },
            logError: function(errorType, error) {
                logger.error(this.options.metricPrefix + errorType, "AI");
                logger.error(errorType + ": " + error, "RAW")
            },
            addMobileClass: function() {
                if (DetectionUtils.isLikelyMobile()) {
                    $("html").addClass("m-mobile")
                }
            },
            leaveTrigger: function() {
                this.timeout = setTimeout(function() {
                    if (this.isMegaMenuOpen) {
                        this.closeMegaMenuPanel()
                    }
                }.bind(this), this.options.timeout)
            },
            enterTrigger: function() {
                clearTimeout(this.timeout)
            },
            getLinkTargetId: function(elem, attribute) {
                return $(elem).find("a").attr(attribute)
            },
            bindTouchEvents: function() {
                var that = this;
                this.$primaryLinks.each(function() {
                    $(this).on("click", function(e) {
                        var linkTargetId = that.getLinkTargetId(this, that.options.dataPanelAttribute);
                        var $targetPanel = $("#" + linkTargetId);
                        if (!$targetPanel.length) {
                            return
                        }
                        e.preventDefault();
                        that.openMegaMenuPanel(this)
                    })
                })
            },
            bindHoverPrimaryLinksEvents: function() {
                var that = this;
                this.$primaryLinks.each(function() {
                    hoverIntent(this, function() {
                        that.openMegaMenuPanel(this)
                    }, function() {}).options({
                        interval: that.options.hoverInterval
                    });
                    that.callMegamenuTriggerEvents($(this))
                })
            },
            bindCloseMegaMenuEvents: function() {
                this.$panelCloseIcon.on(this.options.clickClosePanelEvent, function() {
                    this.closeMegaMenuPanel()
                }.bind(this));
                $(document).on(this.options.keydownClosePanelEvent, function(e) {
                    if (e.keyCode === 27 && !this.$searchBox.hasClass(this.options.activeClass) && this.$body.hasClass(this.options.navPanelActiveClass)) {
                        this.closeMegaMenuPanel()
                    }
                }.bind(this));
                this.$panelExitWrapper.on("click", function() {
                    this.closeMegaMenuPanel()
                }.bind(this))
            },
            bindOpenSearchEvents: function() {
                this.$searchIcon.on(this.options.clickSearchEvent, function() {
                    this.openSearch()
                }.bind(this))
            },
            bindSearchEvents: function() {
                this.$searchCloseIcon.on(this.options.clickCloseSearchEvent, function() {
                    this.closeSearch()
                }.bind(this));
                $(document).on(this.options.clickCloseSearchEvent, function(e) {
                    if (!$(e.target).closest(this.options.searchIconSelector).length && !$(e.target).closest(this.options.searchBoxSelector).length) {
                        this.closeSearch()
                    }
                }.bind(this));
                $(document).on(this.options.keydownCloseSearchEvent, function(e) {
                    if (e.keyCode === 27) {
                        this.closeSearch()
                    }
                }.bind(this));
                this.callMegamenuTriggerEvents(this.$primaryIconGroup)
            },
            bindHeaderLayoutEvents: function() {
                $(window).on("resize", function() {
                    if (this.isPrimarySliderActivated) {
                        this.resetPrimarySlider()
                    }
                    this.assignNavHeaderLayout();
                    if (!this.$body.hasClass(this.options.navPanelActiveClass)) {
                        this.cacheNavSiblingsHeight();
                        this.setPageContentMarginTop()
                    }
                    if (this.$panelWrapper) {
                        this.setPanelTopPosition()
                    }
                }.bind(this))
            },
            bindOrientationChangeEvent: function() {
                $(window).on(this.options.orientationChangeEvent, function() {
                    if (this.isMegaMenuOpen) {
                        this.closeMegaMenuPanel()
                    }
                    this.setPageContentMarginTop()
                }.bind(this))
            },
            callMegamenuTriggerEvents: function(elem) {
                elem.on("mouseenter", this.enterTrigger.bind(this));
                elem.on("mouseleave", this.leaveTrigger.bind(this))
            },
            openSearch: function() {
                this.bindSearchEvents();
                this.$searchBox.addClass(this.options.activeClass).outerWidth();
                this.$searchBox.addClass(this.options.transitionInClass);
                this.$searchBoxInputField.focus();
                this.$navHeader.addClass(this.options.navHeaderSearchActiveClass);
                this.$searchMobileSearchIcon.addClass(this.options.activeClass);
                this.$primaryLinksContainer.addClass(this.options.hideClass);
                this.$searchBoxInput.one(this.options.transitionEnd, function() {
                    this.$searchBoxInput.addClass(this.options.transitionedClass)
                }.bind(this))
            },
            closeSearch: function() {
                this.$searchBox.removeClass(this.options.transitionInClass + " " + this.options.activeClass);
                this.$searchBoxInput.removeClass(this.options.transitionedClass);
                this.$searchMobileSearchIcon.removeClass(this.options.activeClass);
                this.$navHeader.removeClass(this.options.navHeaderSearchActiveClass);
                this.$primaryLinksContainer.removeClass(this.options.hideClass);
                this.$searchCloseIcon.off(this.options.clickCloseSearchEvent);
                $(document).off(this.options.clickCloseSearchEvent + " , " + this.options.keydownCloseSearchEvent)
            },
            assignNavHeaderLayout: function() {
                var primaryLinksContainerOffset = this.$primaryLinksContainer.offset();
                var primaryLinksRightOffset = Math.round($(window).width() - (primaryLinksContainerOffset.left + this.$primaryLinksContainer.outerWidth()));
                var sumOfNavHeaderChildrenWidths = Math.round(this.$primaryLinksContainer.outerWidth(true) + this.$secondaryLinks.outerWidth(true) + this.$logo.outerWidth(true));
                var navHeaderInnerWidth = parseInt(window.getComputedStyle(this.navHeaderDOMElem).getPropertyValue("width"), 10) - this.$navHeaderLeftPadding - this.$navHeaderRightPadding;
                this.isPrimarySliderActivated = primaryLinksRightOffset <= this.$navHeaderRightPadding;
                if (this.isRTL) {
                    this.isPrimarySliderActivated = primaryLinksContainerOffset.left <= this.$navHeaderLeftPadding
                }
                if (navHeaderInnerWidth > sumOfNavHeaderChildrenWidths) {
                    this.processNavHeaderLayoutClasses(this.options.navSingleRowLayoutClass, this.options.navDoubleRowLayoutClass)
                } else {
                    this.processNavHeaderLayoutClasses(this.options.navDoubleRowLayoutClass, this.options.navSingleRowLayoutClass)
                }
                if (this.isPrimarySliderActivated && !this.isSliderBound) {
                    this.bindPrimarySlider();
                    this.isSliderBound = true
                } else if (!this.isPrimarySliderActivated && this.isSliderBound) {
                    this.$rightArrow.off(this.options.clickSliderRightEvent);
                    this.$leftArrow.off(this.options.clickSliderLeftEvent);
                    this.isSliderBound = false
                }
                this.$rightArrow.toggleClass(this.options.showClass, this.isPrimarySliderActivated)
            },
            processNavHeaderLayoutClasses: function(classToAdd, classToRemove) {
                this.$navHeader.addClass(classToAdd);
                this.$navHeader.removeClass(classToRemove)
            },
            getFirstOverflowedPrimaryLinkOffset: function() {
                var thisLinkOffsetRight;
                var arrowEdge = this.$rightArrow.offset().left;
                var thisLinkOffsetLeft;
                if (this.isRTL) {
                    arrowEdge += this.$rightArrow.width()
                }
                var that = this;
                this.$primaryLinks.each(function() {
                    thisLinkOffsetLeft = $(this).offset().left;
                    thisLinkOffsetRight = thisLinkOffsetLeft + $(this).width();
                    var checkOverflowCondition = thisLinkOffsetRight > arrowEdge;
                    if (that.isRTL) {
                        checkOverflowCondition = thisLinkOffsetLeft < arrowEdge
                    }
                    if (checkOverflowCondition) {
                        return false
                    }
                });
                if (this.isRTL) {
                    return thisLinkOffsetRight
                }
                return thisLinkOffsetLeft
            },
            bindPrimarySlider: function() {
                this.$rightArrow.on(this.options.clickSliderRightEvent, function() {
                    this.sliderSide = this.isRTL ? "right" : "left";
                    if (!this.isRTL) {
                        this.$primaryLinksList.css(this.sliderSide, "-" + (this.getFirstOverflowedPrimaryLinkOffset() - this.options.leftArrowOffset) + "px")
                    } else {
                        this.$primaryLinksList.css(this.sliderSide, "-" + (this.$primaryLinksContainer.width() - this.getFirstOverflowedPrimaryLinkOffset()) + "px")
                    }
                    this.$leftArrow.addClass(this.options.showClass);
                    this.$rightArrow.removeClass(this.options.showClass)
                }.bind(this));
                this.$leftArrow.on(this.options.clickSliderLeftEvent, function() {
                    this.$primaryLinksList.css(this.sliderSide, "0");
                    this.$rightArrow.addClass(this.options.showClass);
                    this.$leftArrow.removeClass(this.options.showClass)
                }.bind(this))
            },
            resetPrimarySlider: function() {
                if (this.sliderSide) {
                    this.$primaryLinksList.css(this.sliderSide, "0");
                    this.$leftArrow.removeClass(this.options.showClass)
                }
            },
            setPageContentMarginTop: function() {
                var pageHeaderHeight = this.$navHeader.outerHeight() + this.navSiblingsHeight;
                if (this.$navHeader.is(":hidden")) {
                    this.$body.css("padding-top", "");
                    this.$pageContent.css("margin-top", "");
                    this.$blogSubNav.css("top", "")
                } else if (this.$body.hasClass("homepage")) {
                    this.$body.css("padding-top", pageHeaderHeight)
                } else if (this.isV1Page) {
                    this.$body.css("padding-top", parseInt(pageHeaderHeight, 10) + this.v1PageTopPadding + "px")
                } else if (this.isBlogPage) {
                    this.$blogSubNav.css("top", pageHeaderHeight);
                    this.$pageContent.css("margin-top", pageHeaderHeight + this.$blogSubNav.outerHeight())
                } else {
                    this.$pageContent.css("margin-top", pageHeaderHeight)
                }
            },
            setPanelTopPosition: function() {
                var top = this.$navHeader.outerHeight();
                if ($("body").hasClass("m-page-with-optin")) {
                    top = Math.floor(top + $(".aws-cn-optin").outerHeight())
                }
                this.$panelWrapper.css("top", top);
                this.$panelExitWrapper.css("top", top)
            },
            cacheNavSiblingsHeight: function() {
                this.navSiblingsHeight = this.$pageHeader.outerHeight() - this.$navHeader.outerHeight()
            },
            openMegaMenuPanel: function(elem) {
                var linkTargetId = this.getLinkTargetId(elem, this.options.dataPanelAttribute);
                var panel = this.navPanels[linkTargetId];
                if (panel === undefined) {
                    this.closeMegaMenuPanel(true);
                    return
                }
                var $targetPanel = panel.$elem;
                if (!$targetPanel.length) {
                    this.closeMegaMenuPanel(true);
                    return
                }
                var $siblings = $(elem).siblings();
                this.$panelContent = this.$panelContent || $(this.options.navPanelContentSelector);
                panel.resetPanelContentScrollTops();
                if (!$targetPanel.hasClass(this.options.activeClass)) {
                    this.$panelContent.removeClass(this.options.transitionInClass);
                    if (!this.$panelWrapper.hasClass(this.options.transitionedClass)) {
                        this.setPanelWrapperTransitionedClass($targetPanel)
                    }
                }
                if ($targetPanel.hasClass(this.options.sidebarPanelClass) && !$targetPanel.hasClass(this.options.activeClass)) {
                    panel.triggerPanelMenuLink();
                    panel.setFirstPanelContentActive()
                }
                $siblings.removeClass(this.options.activeClass);
                $(elem).addClass(this.options.activeClass);
                if (!this.isMegaMenuOpen) {
                    this.$body.addClass(this.options.navPanelActiveClass);
                    this.$panelWrapper.one(this.options.transitionEnd, function() {
                        this.$body.addClass(this.options.panelTransitionedClass);
                        this.addPaddingForScrollbarOffset(true);
                        panel.addTargetPanelActiveClass()
                    }.bind(this));
                    this.bindCloseMegaMenuEvents();
                    this.isMegaMenuOpen = true
                } else {
                    panel.addTargetPanelActiveClass()
                }
                setTimeout(function() {
                    $targetPanel.trigger(this.options.contentRevealEvent)
                }.bind(this), this.options.transitionDoneWaitTime)
            },
            closeMegaMenuPanel: function(hasNoPanel) {
                this.$body.removeClass(this.options.panelTransitionedClass);
                this.addPaddingForScrollbarOffset(false);
                this.$body.removeClass(this.options.navPanelActiveClass);
                if (hasNoPanel) {
                    this.isMegaMenuOpen = false
                } else {
                    this.$panelWrapper.addClass(this.options.transitionOutClass);
                    this.$panelWrapper.one(this.options.transitionEnd, function() {
                        this.$panelWrapper.removeClass(this.options.transitionOutClass);
                        this.isMegaMenuOpen = false
                    }.bind(this))
                }
                this.setPageContentMarginTop();
                this.$primaryLinksContainer.find("li" + this.options.activeSelector).removeClass(this.options.activeClass);
                this.$panelWrapper.find("> div" + this.options.activeSelector).removeClass(this.options.activeClass);
                this.$panelWrapper.removeClass(this.options.transitionedClass);
                this.$panelContent.removeClass(this.options.transitionInClass);
                $(document).off(this.options.keydownClosePanelEvent);
                this.$panelCloseIcon.off(this.options.clickClosePanelEvent)
            },
            setPanelWrapperTransitionedClass: function($targetPanel) {
                if ($targetPanel.hasClass(this.options.sidebarPanelClass)) {
                    var $lastLink = $targetPanel.find(this.options.lastLinkSelector);
                    $lastLink.one(this.options.transitionEnd, function() {
                        this.$panelWrapper.addClass(this.options.transitionedClass)
                    }.bind(this))
                } else {
                    var $cols = $targetPanel.find(this.options.panelGridColSelector);
                    var heights = $cols.map(function() {
                        return this.offsetHeight
                    }).get();
                    var maxHeight = Math.max.apply(null, heights);
                    var tallestCol = $cols[heights.indexOf(maxHeight)];
                    $(tallestCol).one(this.options.transitionEnd, function() {
                        this.$panelWrapper.addClass(this.options.transitionedClass)
                    }.bind(this))
                }
            },
            addPopoverClass: function() {
                var that = this;
                this.$navHeader.find(that.options.popoverDataAttribute).each(function() {
                    var popoverId = $(this).data(that.options.popoverDataKey);
                    $("[data-id=" + popoverId + "]").addClass(that.options.navHeaderPopoverClass)
                })
            },
            checkScrollbarWidth: function() {
                var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
                $("body").append(div);
                var w1 = $("div", div).innerWidth();
                div.css("overflow-y", "scroll");
                var w2 = $("div", div).innerWidth();
                $(div).remove();
                this.scrollbarWidth = w1 - w2
            },
            addPaddingForScrollbarOffset: function(addPadding) {
                if (this.scrollbarWidth === 0) {
                    return
                }
                if (addPadding) {
                    this.$navHeader.css("padding-right", this.$navHeaderRightPadding + this.scrollbarWidth + "px")
                } else {
                    this.$navHeader.css("padding-right", this.$navHeaderRightPadding + "px")
                }
            }
        };
        Libra.Comp.register({
            name: "navigation",
            initFct: function() {
                new Navigation
            },
            initTime: "documentReady",
            selfRequire: true
        });
        return Navigation
    });
    define("libra/components/on-event-tracking-pixels", ["librastandardlib/obj-utils/mixin", "libra/components/pixel-mixin", "libra/core/aws-current-user", "librastandardlib/url-utils/getQueryStringParam"], function(mixin, PixelMixin, CurrentUser, getQueryStringParam) {
        "use strict";
        var DEFAULT_CONFIG = {
            pixelUrls: {
                googleCustomerMatch: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/952612511/?userId=" + CurrentUser.siteCatalystFallbackId + "&guid=ON&script=0&"
            },
            eventElems: {
                signUp: {
                    elem: 'a[href^="https://portal.aws.amazon.com/gp/aws/developer/registration"]',
                    eventName: "click.add-tracking-pixels",
                    qsParams: ["data.in=" + encodeURIComponent(100)]
                },
                completeSignup: {
                    elem: 'a[href^="https://portal.aws.amazon.com/billing/signup"]',
                    eventName: "click.add-tracking-pixels",
                    qsParams: ["data.in=" + encodeURIComponent(100)]
                },
                signIn: {
                    elem: 'a[href^="https://console.aws.amazon.com"]',
                    eventName: "click.add-tracking-pixels",
                    qsParams: ["data.in=" + encodeURIComponent(200)]
                },
                formSubmit: {
                    elem: ".aws-form",
                    eventName: "custom_add-tracking-pixels_on-form-submit",
                    qsParams: ["data.fs=" + encodeURIComponent(100)]
                },
                regConfirmation: {
                    qsParams: ["data.rc=" + encodeURIComponent(100)]
                }
            }
        };
        var TrackingPixels = {
            init: function() {
                if (window.location.href.indexOf("registration-confirmation") > -1) {
                    this.firePixelUrls(DEFAULT_CONFIG.eventElems.regConfirmation.qsParams)
                }
                this.bindListeners()
            },
            bindListeners: function() {
                var eventElems = DEFAULT_CONFIG.eventElems;
                var signUp = eventElems.signUp;
                var completeSignup = eventElems.completeSignup;
                var signIn = eventElems.signIn;
                var formSubmit = eventElems.formSubmit;
                var completeSignupParamKey = "type";
                var completeSignupParamValue = "resubscribe";
                this.bindEventListener($(signUp.elem), signUp.eventName, signUp.qsParams);
                $(completeSignup.elem).each(function(idx, elem) {
                    if (getQueryStringParam(completeSignupParamKey, elem.search) === completeSignupParamValue) {
                        this.bindEventListener($(elem), completeSignup.eventName, completeSignup.qsParams)
                    }
                }.bind(this));
                this.bindEventListener($(signIn.elem), signIn.eventName, signIn.qsParams);
                // Fire pixel-urls on form submit
                this.bindEventListener($(formSubmit.elem), formSubmit.eventName, formSubmit.qsParams)
            },
            appendQSParams: function(qsParams) {
                return qsParams.join("&")
            },
            bindEventListener: function($elem, eventName, qsParams) {
                $elem.off(eventName).on(eventName, function() {
                    this.firePixelUrls(qsParams)
                }.bind(this))
            },
            firePixelUrls: function(qsParams) {
                var pixelUrls = DEFAULT_CONFIG.pixelUrls;
                for (var key in pixelUrls) {
                    if (pixelUrls.hasOwnProperty(key)) {
                        if (key === "googleCustomerMatch") {
                            this.pixelUrl = pixelUrls[key] + this.appendQSParams(qsParams)
                        }
                        this.firePixel()
                    }
                }
            }
        };
        mixin(TrackingPixels, PixelMixin);
        Libra.Comp.register({
            name: "on-event-tracking-pixels",
            initFct: function() {
                TrackingPixels.init()
            },
            initTime: "documentReady",
            selfRequire: true
        });
        $(document).on("custom_libra_require_new-content", function() {
            TrackingPixels.bindListeners()
        })
    });
    define("libra/self-required-components", ["libra/components/lang-not-found", "libra/navigation/v3/navigation", "libra/components/on-event-tracking-pixels"], function() {});
    define("librastandardlib/dom-utils/isInViewport", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        return function isInViewport($elem, top, left, width, height, viewPercentage, $window) {
            if (viewPercentage < 0 || viewPercentage > 100) {
                throw new Error("Invalid range for 'viewPercentage'")
            }
            if ($elem.css("visibility") === "hidden") {
                return false
            }
            $window = $window || $(window);
            var viewportTop = $window.scrollTop();
            var viewportHeight = $window.height();
            var viewportBottom = viewportTop + viewportHeight;
            var viewportLeft = $window.scrollLeft();
            var viewportWidth = $window.width();
            var viewportRight = viewportLeft + viewportWidth;
            var bottom = top + height;
            var right = left + width;
            var middleTop = top + height * viewPercentage / 100;
            var middleBottom = top + height - height * viewPercentage / 100;
            var horizViewPercentage = 80;
            var middleLeft = left + width * horizViewPercentage / 100;
            var middleRight = left + width - width * horizViewPercentage / 100;
            var isMiddleTopInViewport = viewportTop <= middleTop && middleTop <= viewportBottom;
            var isTopInViewport = viewportTop <= top && top <= viewportBottom;
            var isMiddleBottomInViewport = viewportTop <= middleBottom && middleBottom <= viewportBottom;
            var isBottomInViewport = viewportTop <= bottom && bottom <= viewportBottom;
            var isVerticallySpanningViewport = top <= viewportTop && viewportBottom <= bottom;
            if (isMiddleTopInViewport && isTopInViewport || isMiddleBottomInViewport && isBottomInViewport || isVerticallySpanningViewport) {
                var isMiddleLeftInViewport = viewportLeft <= middleLeft && middleLeft <= viewportRight;
                var isLeftInViewport = viewportLeft <= left && left <= viewportRight;
                var isMiddleRightInViewport = viewportLeft <= middleRight && middleRight <= viewportRight;
                var isRightInViewport = viewportLeft <= right && right <= viewportRight;
                var isHorizontallySpanningViewport = left <= viewportLeft && viewportRight <= right;
                if (isMiddleLeftInViewport && isLeftInViewport || isMiddleRightInViewport && isRightInViewport || isHorizontallySpanningViewport) {
                    return true
                }
            }
            return false
        }
    });
    define("librastandardlib/dom-utils/viewport-tracker", ["librastandardlib/obj-utils/assign", "librastandardlib/dom-utils/isInViewport"], function(_assign, isInViewport) {
        "use strict";
        var defaults = {
            viewPercentageIn: 50,
            viewPercentageOut: 0,
            viewTime: 500,
            startDelay: 0,
            activateOnce: false
        };
        var viewportQueue = {};
        var count = 0;

        function processViewportQueueItem(key, item) {
            if (!item.locked) {
                var check = item.check(item.active);
                if (check === 1) {
                    item.locked = true;
                    setTimeout(function() {
                        if (viewportQueue.hasOwnProperty(key)) {
                            if (item.check(item.active) === 1) {
                                item.active = true;
                                setTimeout(function() {
                                    if (viewportQueue.hasOwnProperty(key)) {
                                        item.locked = false;
                                        item.onActivate();
                                        if (item.activateOnce) {
                                            delete viewportQueue[key]
                                        }
                                    }
                                }, item.startDelay)
                            } else {
                                item.locked = false
                            }
                        }
                    }, item.viewTime)
                } else if (check === -1) {
                    item.active = false;
                    item.onDeactivate()
                }
            }
        }

        function processViewportQueue() {
            for (var key in viewportQueue) {
                if (viewportQueue.hasOwnProperty(key)) {
                    processViewportQueueItem(key, viewportQueue[key])
                }
            }
        }
        var ViewportItem = function() {
            function Item(item) {
                this.item = item
            }
            Item.prototype = {
                activate: function() {
                    if (!this.item.active) {
                        this.item.active = true;
                        this.item.onActivate()
                    }
                },
                deactivate: function() {
                    if (this.item.active) {
                        this.item.active = false;
                        this.item.onDeactivate()
                    }
                },
                processQueue: function() {
                    processViewportQueue()
                }
            };
            return Item
        }();
        var ViewportTracker = {
            watch: function($elem, onActivate, onDeactivate, options) {
                options = _assign({}, defaults, options);
                var elem = $elem[0];
                var check = function(isActive) {
                    var offset = $elem.offset();
                    var top = offset.top;
                    var left = offset.left;
                    if (!isActive && isInViewport($elem, top, left, elem.clientWidth, elem.clientHeight, options.viewPercentageIn)) {
                        return 1
                    } else if (isActive && !isInViewport($elem, top, left, elem.clientWidth, elem.clientHeight, options.viewPercentageOut)) {
                        return -1
                    }
                    return 0
                };
                var item = {
                    check: check,
                    onActivate: onActivate,
                    onDeactivate: onDeactivate,
                    viewTime: options.viewTime,
                    startDelay: options.startDelay,
                    activateOnce: options.activateOnce,
                    active: false
                };
                viewportQueue[++count] = item;
                processViewportQueue();
                return new ViewportItem(item)
            }
        };
        var ticking = false;
        window.addEventListener("scroll", function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    processViewportQueue();
                    ticking = false
                });
                ticking = true
            }
        }, false);
        return ViewportTracker
    });
    define("libra/dom-utils/component-viewport-tracker", ["librastandardlib/dom-utils/viewport-tracker"], function(ViewportTracker) {
        "use strict";
        var defaults = {
            carouselSelector: ".lb-carousel",
            contentRevealEvent: "custom_lb-comp-content-container_reveal",
            tabsSelector: ".lb-tabs",
            tabsChangeEvent: "custom_lb-tabs_change"
        };

        function watchCarousel($elem, tracker) {
            var $carousel = $elem.parents(defaults.carouselSelector);
            if ($carousel.length) {
                $carousel.first().on(defaults.contentRevealEvent, function() {
                    tracker.processQueue()
                })
            }
        }

        function watchTabs($elem, tracker) {
            var $tabs = $elem.parents(defaults.tabsSelector);
            if ($tabs.length) {
                $tabs.first().on(defaults.tabsChangeEvent, function(e) {
                    if ($.contains(e.target, $elem[0])) {
                        tracker.deactivate();
                        tracker.activate()
                    } else {
                        tracker.deactivate()
                    }
                })
            }
        }
        return {
            watch: function($elem, onActivate, onDeactivate, options) {
                var tracker = ViewportTracker.watch($elem, onActivate, onDeactivate, options);
                watchCarousel($elem, tracker);
                watchTabs($elem, tracker);
                return tracker
            }
        }
    });
    define("librastandardlib/detection-utils/isUserAgentRobot", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        "use strict";
        var ROBOTS_USER_AGENTS = ["SixthSense-AmazonAutoTester"];
        var userAgentRobot = null;
        return function isUserAgentRobot(recalculate) {
            if (userAgentRobot === null || recalculate) {
                var re = new RegExp(ROBOTS_USER_AGENTS.join("|"), "i");
                userAgentRobot = re.test(window.navigator.userAgent)
            }
            return userAgentRobot
        }
    });
    define("libra/dom-utils/lazy-load", ["librastandardlib/logger/logger", "librastandardlib/event-utils/onWindowLoad", "librastandardlib/detection-utils/isUserAgentRobot"], function(Logger, onWindowLoad, isUserAgentRobot) {
        "use strict";
        var METRIC_PREFIX = "awsm_v2_:comp_lazyimage_";
        var LAZY_IMAGE_LOADING_CLASS = "lb-is-lazyloaded";
        var LAZY_WRAPPER_CLASS = "lb-lazy-img-wrapper";
        var logger = new Logger("LazyLoad");
        var isRobotUserAgent = isUserAgentRobot();
        var lazyImageCounter = 0;

        function lazyLoadImages() {
            var lazyImages = document.getElementsByClassName(LAZY_IMAGE_LOADING_CLASS);
            for (var i = 0, len = lazyImages.length; i < len; i++) {
                if (!lazyImages[i].dataset.lazyImgSeen) {
                    lazyImages[i].setAttribute("data-lazy-img-seen", "true");
                    lazyImageCounter++;
                    loadImage(lazyImages[i])
                }
            }
        }

        function loadImage(elem) {
            elem.src = elem.dataset.src;
            if (elem.complete) {
                imageLoaded(elem)
            } else {
                elem.addEventListener("load", loadHandler, false);
                elem.addEventListener("error", errorHandler, false)
            }
        }

        function loadHandler(e) {
            if (e.target) {
                imageLoaded(e.target)
            }
        }

        function errorHandler(e) {
            imageCounter();
            if (!isRobotUserAgent && e.target) {
                logger.error(METRIC_PREFIX + "LazyImageLoadError", "AI");
                logger.error("LazyImageLoadError: " + e.target.dataset.src, "RAW")
            }
            unbind(e.target)
        }

        function imageLoaded(elem) {
            var parentWrapper = elem.parentNode;
            if (parentWrapper && parentWrapper.classList.contains(LAZY_WRAPPER_CLASS)) {
                parentWrapper.classList.remove(LAZY_WRAPPER_CLASS);
                parentWrapper.removeAttribute("style")
            }
            imageCounter();
            unbind(elem)
        }

        function imageCounter() {
            lazyImageCounter -= 1;
            if (lazyImageCounter === 0) {
                $(document).trigger("custom_libra_lazy-load_complete")
            }
        }

        function unbind(elem) {
            if (elem) {
                elem.removeEventListener("load", loadHandler, false);
                elem.removeEventListener("error", errorHandler, false)
            }
        }
        var isWindowLoaded = false;
        onWindowLoad(function() {
            isWindowLoaded = true;
            lazyLoadImages()
        });
        $(document).on("custom_libra_require_new-content", function() {
            if (isWindowLoaded) {
                lazyLoadImages()
            }
        })
    }); /*! https://mths.be/cssescape v1.5.0 by @mathias | MIT license */
    define("librastandardlib/vendor/cssEscape/cssEscape", [], function() {
        "use strict";
        var cssEscape = function(value) {
            var string = String(value);
            var length = string.length;
            var index = -1;
            var codeUnit;
            var result = "";
            var firstCodeUnit = string.charCodeAt(0);
            while (++index < length) {
                codeUnit = string.charCodeAt(index);
                if (codeUnit === 0) {
                    result += "�";
                    continue
                }
                if (codeUnit >= 1 && codeUnit <= 31 || codeUnit === 127 || index === 0 && codeUnit >= 48 && codeUnit <= 57 || index === 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit === 45) {
                    result += "\\" + codeUnit.toString(16) + " ";
                    continue
                }
                if (index === 0 && length === 1 && codeUnit === 45) {
                    result += "\\" + string.charAt(index);
                    continue
                }
                if (codeUnit >= 128 || codeUnit === 45 || codeUnit === 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
                    result += string.charAt(index);
                    continue
                }
                result += "\\" + string.charAt(index)
            }
            return result
        };
        return cssEscape
    });
    define("librastandardlib/dom-utils/getHashDestination", ["librastandardlib/vendor/cssEscape/cssEscape"], function(cssEscape) {
        "use strict";
        var getHashDestination = function(hash, parentSelector) {
            var destination;
            var parent = parentSelector === undefined ? document : document.querySelector(parentSelector);
            if (hash && hash.length > 0) {
                hash = hash.trim();
                if (hash.charAt(0) === "#") {
                    hash = hash.slice(1)
                }
                hash = cssEscape(hash);
                destination = parent.querySelector("#" + hash);
                if (destination === null) {
                    destination = parent.querySelector("[name=" + hash + "]")
                }
            }
            return destination
        };
        return getHashDestination
    });
    define("libra/dom-utils/smoothScroller", ["librastandardlib/event-utils/onDOMContentLoaded", "librastandardlib/dom-utils/smoothScrollToElem", "librastandardlib/dom-utils/getHashDestination", "libra/dom-utils/smoothScrollOptions", "librastandardlib/obj-utils/assign"], function(onDOMContentLoaded, smoothScrollToElem, getHashDestination, smoothScrollOptions, _assign) {
        "use strict";
        var defaults = {
            smoothScrollAnchorSelector: "a[href*=\\#]:not([href=\\#])"
        };

        function SmoothScroller(options) {
            this.options = _assign({}, defaults, options);
            if (window.location.hash) {
                this.scrollToDestination(window.location.hash)
            }
            this.bindHandlers()
        }
        SmoothScroller.prototype = {
            bindHandlers: function() {
                var that = this;
                $(document).on("click", this.options.smoothScrollAnchorSelector, function() {
                    if (window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && window.location.hostname === this.hostname) {
                        that.scrollToDestination(this.hash);
                        return false
                    }
                })
            },
            scrollToDestination: function(hash) {
                var destination = getHashDestination(hash, smoothScrollOptions.parentSelector);
                if (destination !== null) {
                    smoothScrollToElem(destination, smoothScrollOptions)
                }
            }
        };
        onDOMContentLoaded(function() {
            new SmoothScroller
        })
    });
    define("libra/components/mbox", [], function() {
        "use strict";
        var Mbox = function(elem) {
            if (AWS.TargetMediator && AWS.TargetMediator.options && AWS.TargetMediator.options.hasLoaded) {
                return
            }
            var observer;
            if (typeof MutationObserver === "function") {
                observer = new MutationObserver(function() {
                    $(document).trigger("custom_libra_require_new-content");
                    $(document).trigger("custom_aws_da_new-content");
                    observer.disconnect()
                });
                observer.observe(elem, {
                    attributes: true
                })
            }
            elem.removeAttribute("data-lb-comp-ignore")
        };
        Libra.Comp.register({
            name: "mbox",
            initFct: function(elem) {
                new Mbox(elem)
            },
            initTime: "immediate"
        })
    });
    define("libra/components/tracking-pixel", ["librastandardlib/obj-utils/mixin", "libra/components/pixel-mixin"], function(mixin, PixelMixin) {
        "use strict";

        function TrackingPixel(elem, options) {
            this.$elem = $(elem);
            options = $.extend({}, this.$elem.data(), options);
            this.pixelUrl = options.url;
            this.firePixel()
        }
        mixin(TrackingPixel.prototype, PixelMixin);
        Libra.Comp.register({
            name: "tracking-pixel",
            initFct: function(elem) {
                new TrackingPixel(elem)
            },
            initTime: "documentReady"
        });
        return TrackingPixel
    });
    /*!
     * typeahead.js 0.11.1
     * https://github.com/twitter/typeahead.js
     * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
     */
    define("libra/vendor/bloodhound", [], function() {
        var _ = function() {
            "use strict";
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false
                },
                isBlankString: function(str) {
                    return !str || /^\s*$/.test(str)
                },
                escapeRegExChars: function(str) {
                    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(obj) {
                    return typeof obj === "string"
                },
                isNumber: function(obj) {
                    return typeof obj === "number"
                },
                isArray: $.isArray,
                isFunction: $.isFunction,
                isObject: $.isPlainObject,
                isUndefined: function(obj) {
                    return typeof obj === "undefined"
                },
                isElement: function(obj) {
                    return !!(obj && obj.nodeType === 1)
                },
                isJQuery: function(obj) {
                    return obj instanceof $
                },
                toStr: function toStr(s) {
                    return _.isUndefined(s) || s === null ? "" : s + ""
                },
                bind: $.proxy,
                each: function(collection, cb) {
                    $.each(collection, reverseArgs);

                    function reverseArgs(index, value) {
                        return cb(value, index)
                    }
                },
                map: $.map,
                filter: $.grep,
                every: function(obj, test) {
                    var result = true;
                    if (!obj) {
                        return result
                    }
                    $.each(obj, function(key, val) {
                        if (!(result = test.call(null, val, key, obj))) {
                            return false
                        }
                    });
                    return !!result
                },
                some: function(obj, test) {
                    var result = false;
                    if (!obj) {
                        return result
                    }
                    $.each(obj, function(key, val) {
                        if (result = test.call(null, val, key, obj)) {
                            return false
                        }
                    });
                    return !!result
                },
                mixin: $.extend,
                identity: function(x) {
                    return x
                },
                clone: function(obj) {
                    return $.extend(true, {}, obj)
                },
                getIdGenerator: function() {
                    var counter = 0;
                    return function() {
                        return counter++
                    }
                },
                templatify: function templatify(obj) {
                    return $.isFunction(obj) ? obj : template;

                    function template() {
                        return String(obj)
                    }
                },
                defer: function(fn) {
                    setTimeout(fn, 0)
                },
                debounce: function(func, wait, immediate) {
                    var timeout, result;
                    return function() {
                        var context = this,
                            args = arguments,
                            later, callNow;
                        later = function() {
                            timeout = null;
                            if (!immediate) {
                                result = func.apply(context, args)
                            }
                        };
                        callNow = immediate && !timeout;
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);
                        if (callNow) {
                            result = func.apply(context, args)
                        }
                        return result
                    }
                },
                throttle: function(func, wait) {
                    var context, args, timeout, result, previous, later;
                    previous = 0;
                    later = function() {
                        previous = new Date;
                        timeout = null;
                        result = func.apply(context, args)
                    };
                    return function() {
                        var now = new Date,
                            remaining = wait - (now - previous);
                        context = this;
                        args = arguments;
                        if (remaining <= 0) {
                            clearTimeout(timeout);
                            timeout = null;
                            previous = now;
                            result = func.apply(context, args)
                        } else if (!timeout) {
                            timeout = setTimeout(later, remaining)
                        }
                        return result
                    }
                },
                stringify: function(val) {
                    return _.isString(val) ? val : JSON.stringify(val)
                },
                noop: function() {}
            }
        }();
        var VERSION = "0.11.1";
        var tokenizers = function() {
            "use strict";
            return {
                nonword: nonword,
                whitespace: whitespace,
                obj: {
                    nonword: getObjTokenizer(nonword),
                    whitespace: getObjTokenizer(whitespace)
                }
            };

            function whitespace(str) {
                str = _.toStr(str);
                return str ? str.split(/\s+/) : []
            }

            function nonword(str) {
                str = _.toStr(str);
                return str ? str.split(/\W+/) : []
            }

            function getObjTokenizer(tokenizer) {
                return function setKey(keys) {
                    keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                    return function tokenize(o) {
                        var tokens = [];
                        _.each(keys, function(k) {
                            tokens = tokens.concat(tokenizer(_.toStr(o[k])))
                        });
                        return tokens
                    }
                }
            }
        }();
        var LruCache = function() {
            "use strict";

            function LruCache(maxSize) {
                this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
                this.reset();
                if (this.maxSize <= 0) {
                    this.set = this.get = $.noop
                }
            }
            _.mixin(LruCache.prototype, {
                set: function set(key, val) {
                    var tailItem = this.list.tail,
                        node;
                    if (this.size >= this.maxSize) {
                        this.list.remove(tailItem);
                        delete this.hash[tailItem.key];
                        this.size--
                    }
                    if (node = this.hash[key]) {
                        node.val = val;
                        this.list.moveToFront(node)
                    } else {
                        node = new Node(key, val);
                        this.list.add(node);
                        this.hash[key] = node;
                        this.size++
                    }
                },
                get: function get(key) {
                    var node = this.hash[key];
                    if (node) {
                        this.list.moveToFront(node);
                        return node.val
                    }
                },
                reset: function reset() {
                    this.size = 0;
                    this.hash = {};
                    this.list = new List
                }
            });

            function List() {
                this.head = this.tail = null
            }
            _.mixin(List.prototype, {
                add: function add(node) {
                    if (this.head) {
                        node.next = this.head;
                        this.head.prev = node
                    }
                    this.head = node;
                    this.tail = this.tail || node
                },
                remove: function remove(node) {
                    node.prev ? node.prev.next = node.next : this.head = node.next;
                    node.next ? node.next.prev = node.prev : this.tail = node.prev
                },
                moveToFront: function(node) {
                    this.remove(node);
                    this.add(node)
                }
            });

            function Node(key, val) {
                this.key = key;
                this.val = val;
                this.prev = this.next = null
            }
            return LruCache
        }();
        var PersistentStorage = function() {
            "use strict";
            var LOCAL_STORAGE;
            try {
                LOCAL_STORAGE = window.localStorage;
                LOCAL_STORAGE.setItem("~~~", "!");
                LOCAL_STORAGE.removeItem("~~~")
            } catch (err) {
                LOCAL_STORAGE = null
            }

            function PersistentStorage(namespace, override) {
                this.prefix = ["__", namespace, "__"].join("");
                this.ttlKey = "__ttl__";
                this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
                this.ls = override || LOCAL_STORAGE;
                !this.ls && this._noop()
            }
            _.mixin(PersistentStorage.prototype, {
                _prefix: function(key) {
                    return this.prefix + key
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey
                },
                _noop: function() {
                    this.get = this.set = this.remove = this.clear = this.isExpired = _.noop
                },
                _safeSet: function(key, val) {
                    try {
                        this.ls.setItem(key, val)
                    } catch (err) {
                        if (err.name === "QuotaExceededError") {
                            this.clear();
                            this._noop()
                        }
                    }
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key)
                    }
                    return decode(this.ls.getItem(this._prefix(key)))
                },
                set: function(key, val, ttl) {
                    if (_.isNumber(ttl)) {
                        this._safeSet(this._ttlKey(key), encode(now() + ttl))
                    } else {
                        this.ls.removeItem(this._ttlKey(key))
                    }
                    return this._safeSet(this._prefix(key), encode(val))
                },
                remove: function(key) {
                    this.ls.removeItem(this._ttlKey(key));
                    this.ls.removeItem(this._prefix(key));
                    return this
                },
                clear: function() {
                    var i, keys = gatherMatchingKeys(this.keyMatcher);
                    for (i = keys.length; i--;) {
                        this.remove(keys[i])
                    }
                    return this
                },
                isExpired: function(key) {
                    var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                    return _.isNumber(ttl) && now() > ttl ? true : false
                }
            });
            return PersistentStorage;

            function now() {
                return (new Date).getTime()
            }

            function encode(val) {
                return JSON.stringify(_.isUndefined(val) ? null : val)
            }

            function decode(val) {
                return $.parseJSON(val)
            }

            function gatherMatchingKeys(keyMatcher) {
                var i, key, keys = [],
                    len = LOCAL_STORAGE.length;
                for (i = 0; i < len; i++) {
                    if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                        keys.push(key.replace(keyMatcher, ""))
                    }
                }
                return keys
            }
        }();
        var Transport = function() {
            "use strict";
            var pendingRequestsCount = 0,
                pendingRequests = {},
                maxPendingRequests = 6,
                sharedCache = new LruCache(10);

            function Transport(o) {
                o = o || {};
                this.cancelled = false;
                this.lastReq = null;
                this._send = o.transport;
                this._get = o.limiter ? o.limiter(this._get) : this._get;
                this._cache = o.cache === false ? new LruCache(0) : sharedCache
            }
            Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
                maxPendingRequests = num
            };
            Transport.resetCache = function resetCache() {
                sharedCache.reset()
            };
            _.mixin(Transport.prototype, {
                _fingerprint: function fingerprint(o) {
                    o = o || {};
                    return o.url + o.type + $.param(o.data || {})
                },
                _get: function(o, cb) {
                    var that = this,
                        fingerprint, jqXhr;
                    fingerprint = this._fingerprint(o);
                    if (this.cancelled || fingerprint !== this.lastReq) {
                        return
                    }
                    if (jqXhr = pendingRequests[fingerprint]) {
                        jqXhr.done(done).fail(fail)
                    } else if (pendingRequestsCount < maxPendingRequests) {
                        pendingRequestsCount++;
                        pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always)
                    } else {
                        this.onDeckRequestArgs = [].slice.call(arguments, 0)
                    }

                    function done(resp) {
                        cb(null, resp);
                        that._cache.set(fingerprint, resp)
                    }

                    function fail() {
                        cb(true)
                    }

                    function always() {
                        pendingRequestsCount--;
                        delete pendingRequests[fingerprint];
                        if (that.onDeckRequestArgs) {
                            that._get.apply(that, that.onDeckRequestArgs);
                            that.onDeckRequestArgs = null
                        }
                    }
                },
                get: function(o, cb) {
                    var resp, fingerprint;
                    cb = cb || $.noop;
                    o = _.isString(o) ? {
                        url: o
                    } : o || {};
                    fingerprint = this._fingerprint(o);
                    this.cancelled = false;
                    this.lastReq = fingerprint;
                    if (resp = this._cache.get(fingerprint)) {
                        cb(null, resp)
                    } else {
                        this._get(o, cb)
                    }
                },
                cancel: function() {
                    this.cancelled = true
                }
            });
            return Transport
        }();
        var SearchIndex = window.SearchIndex = function() {
            "use strict";
            var CHILDREN = "c",
                IDS = "i";

            function SearchIndex(o) {
                o = o || {};
                if (!o.datumTokenizer || !o.queryTokenizer) {
                    $.error("datumTokenizer and queryTokenizer are both required")
                }
                this.identify = o.identify || _.stringify;
                this.datumTokenizer = o.datumTokenizer;
                this.queryTokenizer = o.queryTokenizer;
                this.reset()
            }
            _.mixin(SearchIndex.prototype, {
                bootstrap: function bootstrap(o) {
                    this.datums = o.datums;
                    this.trie = o.trie
                },
                add: function(data) {
                    var that = this;
                    data = _.isArray(data) ? data : [data];
                    _.each(data, function(datum) {
                        var id, tokens;
                        that.datums[id = that.identify(datum)] = datum;
                        tokens = normalizeTokens(that.datumTokenizer(datum));
                        _.each(tokens, function(token) {
                            var node, chars, ch;
                            node = that.trie;
                            chars = token.split("");
                            while (ch = chars.shift()) {
                                node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                                node[IDS].push(id)
                            }
                        })
                    })
                },
                get: function get(ids) {
                    var that = this;
                    return _.map(ids, function(id) {
                        return that.datums[id]
                    })
                },
                search: function search(query) {
                    var that = this,
                        tokens, matches;
                    tokens = normalizeTokens(this.queryTokenizer(query));
                    _.each(tokens, function(token) {
                        var node, chars, ch, ids;
                        if (matches && matches.length === 0) {
                            return false
                        }
                        node = that.trie;
                        chars = token.split("");
                        while (node && (ch = chars.shift())) {
                            node = node[CHILDREN][ch]
                        }
                        if (node && chars.length === 0) {
                            ids = node[IDS].slice(0);
                            matches = matches ? getIntersection(matches, ids) : ids
                        } else {
                            matches = [];
                            return false
                        }
                    });
                    return matches ? _.map(unique(matches), function(id) {
                        return that.datums[id]
                    }) : []
                },
                all: function all() {
                    var values = [];
                    for (var key in this.datums) {
                        values.push(this.datums[key])
                    }
                    return values
                },
                reset: function reset() {
                    this.datums = {};
                    this.trie = newNode()
                },
                serialize: function serialize() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            });
            return SearchIndex;

            function normalizeTokens(tokens) {
                tokens = _.filter(tokens, function(token) {
                    return !!token
                });
                tokens = _.map(tokens, function(token) {
                    return token.toLowerCase()
                });
                return tokens
            }

            function newNode() {
                var node = {};
                node[IDS] = [];
                node[CHILDREN] = {};
                return node
            }

            function unique(array) {
                var seen = {},
                    uniques = [];
                for (var i = 0, len = array.length; i < len; i++) {
                    if (!seen[array[i]]) {
                        seen[array[i]] = true;
                        uniques.push(array[i])
                    }
                }
                return uniques
            }

            function getIntersection(arrayA, arrayB) {
                var ai = 0,
                    bi = 0,
                    intersection = [];
                arrayA = arrayA.sort();
                arrayB = arrayB.sort();
                var lenArrayA = arrayA.length,
                    lenArrayB = arrayB.length;
                while (ai < lenArrayA && bi < lenArrayB) {
                    if (arrayA[ai] < arrayB[bi]) {
                        ai++
                    } else if (arrayA[ai] > arrayB[bi]) {
                        bi++
                    } else {
                        intersection.push(arrayA[ai]);
                        ai++;
                        bi++
                    }
                }
                return intersection
            }
        }();
        var Prefetch = function() {
            "use strict";
            var keys;
            keys = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            };

            function Prefetch(o) {
                this.url = o.url;
                this.ttl = o.ttl;
                this.cache = o.cache;
                this.prepare = o.prepare;
                this.transform = o.transform;
                this.transport = o.transport;
                this.thumbprint = o.thumbprint;
                this.storage = new PersistentStorage(o.cacheKey)
            }
            _.mixin(Prefetch.prototype, {
                _settings: function settings() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                store: function store(data) {
                    if (!this.cache) {
                        return
                    }
                    this.storage.set(keys.data, data, this.ttl);
                    this.storage.set(keys.protocol, location.protocol, this.ttl);
                    this.storage.set(keys.thumbprint, this.thumbprint, this.ttl)
                },
                fromCache: function fromCache() {
                    var stored = {},
                        isExpired;
                    if (!this.cache) {
                        return null
                    }
                    stored.data = this.storage.get(keys.data);
                    stored.protocol = this.storage.get(keys.protocol);
                    stored.thumbprint = this.storage.get(keys.thumbprint);
                    isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                    return stored.data && !isExpired ? stored.data : null
                },
                fromNetwork: function(cb) {
                    var that = this,
                        settings;
                    if (!cb) {
                        return
                    }
                    settings = this.prepare(this._settings());
                    this.transport(settings).fail(onError).done(onResponse);

                    function onError() {
                        cb(true)
                    }

                    function onResponse(resp) {
                        cb(null, that.transform(resp))
                    }
                },
                clear: function clear() {
                    this.storage.clear();
                    return this
                }
            });
            return Prefetch
        }();
        var Remote = function() {
            "use strict";

            function Remote(o) {
                this.url = o.url;
                this.prepare = o.prepare;
                this.transform = o.transform;
                this.transport = new Transport({
                    cache: o.cache,
                    limiter: o.limiter,
                    transport: o.transport
                })
            }
            _.mixin(Remote.prototype, {
                _settings: function settings() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                get: function get(query, cb) {
                    var that = this,
                        settings;
                    if (!cb) {
                        return
                    }
                    query = query || "";
                    settings = this.prepare(query, this._settings());
                    return this.transport.get(settings, onResponse);

                    function onResponse(err, resp) {
                        err ? cb([]) : cb(that.transform(resp))
                    }
                },
                cancelLastRequest: function cancelLastRequest() {
                    this.transport.cancel()
                }
            });
            return Remote
        }();
        var oParser = function() {
            "use strict";
            return function parse(o) {
                var defaults, sorter;
                defaults = {
                    initialize: true,
                    identify: _.stringify,
                    datumTokenizer: null,
                    queryTokenizer: null,
                    sufficient: 5,
                    sorter: null,
                    local: [],
                    prefetch: null,
                    remote: null
                };
                o = _.mixin(defaults, o || {});
                !o.datumTokenizer && $.error("datumTokenizer is required");
                !o.queryTokenizer && $.error("queryTokenizer is required");
                sorter = o.sorter;
                o.sorter = sorter ? function(x) {
                    return x.sort(sorter)
                } : _.identity;
                o.local = _.isFunction(o.local) ? o.local() : o.local;
                o.prefetch = parsePrefetch(o.prefetch);
                o.remote = parseRemote(o.remote);
                return o
            };

            function parsePrefetch(o) {
                var defaults;
                if (!o) {
                    return null
                }
                defaults = {
                    url: null,
                    ttl: 24 * 60 * 60 * 1e3,
                    cache: true,
                    cacheKey: null,
                    thumbprint: "",
                    prepare: _.identity,
                    transform: _.identity,
                    transport: null
                };
                o = _.isString(o) ? {
                    url: o
                } : o;
                o = _.mixin(defaults, o);
                !o.url && $.error("prefetch requires url to be set");
                o.transform = o.filter || o.transform;
                o.cacheKey = o.cacheKey || o.url;
                o.thumbprint = VERSION + o.thumbprint;
                o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
                return o
            }

            function parseRemote(o) {
                var defaults;
                if (!o) {
                    return
                }
                defaults = {
                    url: null,
                    cache: true,
                    prepare: null,
                    replace: null,
                    wildcard: null,
                    limiter: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    transform: _.identity,
                    transport: null
                };
                o = _.isString(o) ? {
                    url: o
                } : o;
                o = _.mixin(defaults, o);
                !o.url && $.error("remote requires url to be set");
                o.transform = o.filter || o.transform;
                o.prepare = toRemotePrepare(o);
                o.limiter = toLimiter(o);
                o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
                delete o.replace;
                delete o.wildcard;
                delete o.rateLimitBy;
                delete o.rateLimitWait;
                return o
            }

            function toRemotePrepare(o) {
                var prepare, replace, wildcard;
                prepare = o.prepare;
                replace = o.replace;
                wildcard = o.wildcard;
                if (prepare) {
                    return prepare
                }
                if (replace) {
                    prepare = prepareByReplace
                } else if (o.wildcard) {
                    prepare = prepareByWildcard
                } else {
                    prepare = idenityPrepare
                }
                return prepare;

                function prepareByReplace(query, settings) {
                    settings.url = replace(settings.url, query);
                    return settings
                }

                function prepareByWildcard(query, settings) {
                    settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                    return settings
                }

                function idenityPrepare(query, settings) {
                    return settings
                }
            }

            function toLimiter(o) {
                var limiter, method, wait;
                limiter = o.limiter;
                method = o.rateLimitBy;
                wait = o.rateLimitWait;
                if (!limiter) {
                    limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait)
                }
                return limiter;

                function debounce(wait) {
                    return function debounce(fn) {
                        return _.debounce(fn, wait)
                    }
                }

                function throttle(wait) {
                    return function throttle(fn) {
                        return _.throttle(fn, wait)
                    }
                }
            }

            function callbackToDeferred(fn) {
                return function wrapper(o) {
                    var deferred = $.Deferred();
                    fn(o, onSuccess, onError);
                    return deferred;

                    function onSuccess(resp) {
                        _.defer(function() {
                            deferred.resolve(resp)
                        })
                    }

                    function onError(err) {
                        _.defer(function() {
                            deferred.reject(err)
                        })
                    }
                }
            }
        }();
        var Bloodhound = function() {
            "use strict";
            var old;
            old = window && window.Bloodhound;

            function Bloodhound(o) {
                o = oParser(o);
                this.sorter = o.sorter;
                this.identify = o.identify;
                this.sufficient = o.sufficient;
                this.local = o.local;
                this.remote = o.remote ? new Remote(o.remote) : null;
                this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
                this.index = new SearchIndex({
                    identify: this.identify,
                    datumTokenizer: o.datumTokenizer,
                    queryTokenizer: o.queryTokenizer
                });
                o.initialize !== false && this.initialize()
            }
            Bloodhound.noConflict = function noConflict() {
                window && (window.Bloodhound = old);
                return Bloodhound
            };
            Bloodhound.tokenizers = tokenizers;
            _.mixin(Bloodhound.prototype, {
                __ttAdapter: function ttAdapter() {
                    var that = this;
                    return this.remote ? withAsync : withoutAsync;

                    function withAsync(query, sync, async) {
                        return that.search(query, sync, async)
                    }

                    function withoutAsync(query, sync) {
                        return that.search(query, sync)
                    }
                },
                _loadPrefetch: function loadPrefetch() {
                    var that = this,
                        deferred, serialized;
                    deferred = $.Deferred();
                    if (!this.prefetch) {
                        deferred.resolve()
                    } else if (serialized = this.prefetch.fromCache()) {
                        this.index.bootstrap(serialized);
                        deferred.resolve()
                    } else {
                        this.prefetch.fromNetwork(done)
                    }
                    return deferred.promise();

                    function done(err, data) {
                        if (err) {
                            return deferred.reject()
                        }
                        that.add(data);
                        that.prefetch.store(that.index.serialize());
                        deferred.resolve()
                    }
                },
                _initialize: function initialize() {
                    var that = this,
                        deferred;
                    this.clear();
                    (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                    return this.initPromise;

                    function addLocalToIndex() {
                        that.add(that.local)
                    }
                },
                initialize: function initialize(force) {
                    return !this.initPromise || force ? this._initialize() : this.initPromise
                },
                add: function add(data) {
                    this.index.add(data);
                    return this
                },
                get: function get(ids) {
                    ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                    return this.index.get(ids)
                },
                search: function search(query, sync, async) {
                    var that = this,
                        local;
                    local = this.sorter(this.index.search(query));
                    sync(this.remote ? local.slice() : local);
                    if (this.remote && local.length < this.sufficient) {
                        this.remote.get(query, processRemote)
                    } else if (this.remote) {
                        this.remote.cancelLastRequest()
                    }
                    return this;

                    function processRemote(remote) {
                        var nonDuplicates = [];
                        _.each(remote, function(r) {
                            !_.some(local, function(l) {
                                return that.identify(r) === that.identify(l)
                            }) && nonDuplicates.push(r)
                        });
                        async && async (nonDuplicates)
                    }
                },
                all: function all() {
                    return this.index.all()
                },
                clear: function clear() {
                    this.index.reset();
                    return this
                },
                clearPrefetchCache: function clearPrefetchCache() {
                    this.prefetch && this.prefetch.clear();
                    return this
                },
                clearRemoteCache: function clearRemoteCache() {
                    Transport.resetCache();
                    return this
                },
                ttAdapter: function ttAdapter() {
                    return this.__ttAdapter()
                }
            });
            return Bloodhound
        }();
        return Bloodhound
    });
    /*!
     * typeahead.js 0.11.1
     * https://github.com/twitter/typeahead.js
     * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
     */
    define("libra/vendor/typeahead", [], function() {
        var _ = function() {
            "use strict";
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false
                },
                isBlankString: function(str) {
                    return !str || /^\s*$/.test(str)
                },
                escapeRegExChars: function(str) {
                    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(obj) {
                    return typeof obj === "string"
                },
                isNumber: function(obj) {
                    return typeof obj === "number"
                },
                isArray: $.isArray,
                isFunction: $.isFunction,
                isObject: $.isPlainObject,
                isUndefined: function(obj) {
                    return typeof obj === "undefined"
                },
                isElement: function(obj) {
                    return !!(obj && obj.nodeType === 1)
                },
                isJQuery: function(obj) {
                    return obj instanceof $
                },
                toStr: function toStr(s) {
                    return _.isUndefined(s) || s === null ? "" : s + ""
                },
                bind: $.proxy,
                each: function(collection, cb) {
                    $.each(collection, reverseArgs);

                    function reverseArgs(index, value) {
                        return cb(value, index)
                    }
                },
                map: $.map,
                filter: $.grep,
                every: function(obj, test) {
                    var result = true;
                    if (!obj) {
                        return result
                    }
                    $.each(obj, function(key, val) {
                        if (!(result = test.call(null, val, key, obj))) {
                            return false
                        }
                    });
                    return !!result
                },
                some: function(obj, test) {
                    var result = false;
                    if (!obj) {
                        return result
                    }
                    $.each(obj, function(key, val) {
                        if (result = test.call(null, val, key, obj)) {
                            return false
                        }
                    });
                    return !!result
                },
                mixin: $.extend,
                identity: function(x) {
                    return x
                },
                clone: function(obj) {
                    return $.extend(true, {}, obj)
                },
                getIdGenerator: function() {
                    var counter = 0;
                    return function() {
                        return counter++
                    }
                },
                templatify: function templatify(obj) {
                    return $.isFunction(obj) ? obj : template;

                    function template() {
                        return String(obj)
                    }
                },
                defer: function(fn) {
                    setTimeout(fn, 0)
                },
                debounce: function(func, wait, immediate) {
                    var timeout, result;
                    return function() {
                        var context = this,
                            args = arguments,
                            later, callNow;
                        later = function() {
                            timeout = null;
                            if (!immediate) {
                                result = func.apply(context, args)
                            }
                        };
                        callNow = immediate && !timeout;
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);
                        if (callNow) {
                            result = func.apply(context, args)
                        }
                        return result
                    }
                },
                throttle: function(func, wait) {
                    var context, args, timeout, result, previous, later;
                    previous = 0;
                    later = function() {
                        previous = new Date;
                        timeout = null;
                        result = func.apply(context, args)
                    };
                    return function() {
                        var now = new Date,
                            remaining = wait - (now - previous);
                        context = this;
                        args = arguments;
                        if (remaining <= 0) {
                            clearTimeout(timeout);
                            timeout = null;
                            previous = now;
                            result = func.apply(context, args)
                        } else if (!timeout) {
                            timeout = setTimeout(later, remaining)
                        }
                        return result
                    }
                },
                stringify: function(val) {
                    return _.isString(val) ? val : JSON.stringify(val)
                },
                noop: function() {}
            }
        }();
        var WWW = function() {
            "use strict";
            var defaultClassNames = {
                wrapper: "twitter-typeahead",
                input: "tt-input",
                hint: "tt-hint",
                menu: "tt-menu",
                dataset: "tt-dataset",
                suggestion: "tt-suggestion",
                selectable: "tt-selectable",
                empty: "tt-empty",
                open: "tt-open",
                cursor: "tt-cursor",
                highlight: "tt-highlight"
            };
            return build;

            function build(o) {
                var www, classes;
                classes = _.mixin({}, defaultClassNames, o);
                www = {
                    css: buildCss(),
                    classes: classes,
                    html: buildHtml(classes),
                    selectors: buildSelectors(classes)
                };
                return {
                    css: www.css,
                    html: www.html,
                    classes: www.classes,
                    selectors: www.selectors,
                    mixin: function(o) {
                        _.mixin(o, www)
                    }
                }
            }

            function buildHtml(c) {
                return {
                    wrapper: '<span class="' + c.wrapper + '"></span>',
                    menu: '<div class="' + c.menu + '"></div>'
                }
            }

            function buildSelectors(classes) {
                var selectors = {};
                _.each(classes, function(v, k) {
                    selectors[k] = "." + v
                });
                return selectors
            }

            function buildCss() {
                var css = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    menu: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                if (_.isMsie()) {
                    _.mixin(css.input, {
                        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                    })
                }
                return css
            }
        }();
        var EventBus = function() {
            "use strict";
            var namespace, deprecationMap;
            namespace = "typeahead:";
            deprecationMap = {
                render: "rendered",
                cursorchange: "cursorchanged",
                select: "selected",
                autocomplete: "autocompleted"
            };

            function EventBus(o) {
                if (!o || !o.el) {
                    $.error("EventBus initialized without el")
                }
                this.$el = $(o.el)
            }
            _.mixin(EventBus.prototype, {
                _trigger: function(type, args) {
                    var $e;
                    $e = $.Event(namespace + type);
                    (args = args || []).unshift($e);
                    this.$el.trigger.apply(this.$el, args);
                    return $e
                },
                before: function(type) {
                    var args, $e;
                    args = [].slice.call(arguments, 1);
                    $e = this._trigger("before" + type, args);
                    return $e.isDefaultPrevented()
                },
                trigger: function(type) {
                    var deprecatedType;
                    this._trigger(type, [].slice.call(arguments, 1));
                    if (deprecatedType = deprecationMap[type]) {
                        this._trigger(deprecatedType, [].slice.call(arguments, 1))
                    }
                }
            });
            return EventBus
        }();
        var EventEmitter = function() {
            "use strict";
            var splitter = /\s+/,
                nextTick = getNextTick();
            return {
                onSync: onSync,
                onAsync: onAsync,
                off: off,
                trigger: trigger
            };

            function on(method, types, cb, context) {
                var type;
                if (!cb) {
                    return this
                }
                types = types.split(splitter);
                cb = context ? bindContext(cb, context) : cb;
                this._callbacks = this._callbacks || {};
                while (type = types.shift()) {
                    this._callbacks[type] = this._callbacks[type] || {
                        sync: [],
                        async: []
                    };
                    this._callbacks[type][method].push(cb)
                }
                return this
            }

            function onAsync(types, cb, context) {
                return on.call(this, "async", types, cb, context)
            }

            function onSync(types, cb, context) {
                return on.call(this, "sync", types, cb, context)
            }

            function off(types) {
                var type;
                if (!this._callbacks) {
                    return this
                }
                types = types.split(splitter);
                while (type = types.shift()) {
                    delete this._callbacks[type]
                }
                return this
            }

            function trigger(types) {
                var type, callbacks, args, syncFlush, asyncFlush;
                if (!this._callbacks) {
                    return this
                }
                types = types.split(splitter);
                args = [].slice.call(arguments, 1);
                while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                    syncFlush = getFlush(callbacks.sync, this, [type].concat(args));
                    asyncFlush = getFlush(callbacks.async, this, [type].concat(args));
                    syncFlush() && nextTick(asyncFlush)
                }
                return this
            }

            function getFlush(callbacks, context, args) {
                return flush;

                function flush() {
                    var cancelled;
                    for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                        cancelled = callbacks[i].apply(context, args) === false
                    }
                    return !cancelled
                }
            }

            function getNextTick() {
                var nextTickFn;
                if (window.setImmediate) {
                    nextTickFn = function nextTickSetImmediate(fn) {
                        setImmediate(function() {
                            fn()
                        })
                    }
                } else {
                    nextTickFn = function nextTickSetTimeout(fn) {
                        setTimeout(function() {
                            fn()
                        }, 0)
                    }
                }
                return nextTickFn
            }

            function bindContext(fn, context) {
                return fn.bind ? fn.bind(context) : function() {
                    fn.apply(context, [].slice.call(arguments, 0))
                }
            }
        }();
        var highlight = function(doc) {
            "use strict";
            var defaults = {
                node: null,
                pattern: null,
                tagName: "span",
                className: null,
                wordsOnly: false,
                caseSensitive: false
            };
            return function hightlight(o) {
                var regex;
                o = _.mixin({}, defaults, o);
                if (!o.node || !o.pattern) {
                    return
                }
                o.pattern = _.isArray(o.pattern) ? o.pattern : [o.pattern];
                regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
                traverse(o.node, hightlightTextNode);

                function hightlightTextNode(textNode) {
                    var match, patternNode, wrapperNode;
                    if (match = regex.exec(textNode.data)) {
                        wrapperNode = doc.createElement(o.tagName);
                        o.className && (wrapperNode.className = o.className);
                        patternNode = textNode.splitText(match.index);
                        patternNode.splitText(match[0].length);
                        wrapperNode.appendChild(patternNode.cloneNode(true));
                        textNode.parentNode.replaceChild(wrapperNode, patternNode)
                    }
                    return !!match
                }

                function traverse(el, hightlightTextNode) {
                    var childNode, TEXT_NODE_TYPE = 3;
                    for (var i = 0; i < el.childNodes.length; i++) {
                        childNode = el.childNodes[i];
                        if (childNode.nodeType === TEXT_NODE_TYPE) {
                            i += hightlightTextNode(childNode) ? 1 : 0
                        } else {
                            traverse(childNode, hightlightTextNode)
                        }
                    }
                }
            };

            function getRegex(patterns, caseSensitive, wordsOnly) {
                var escapedPatterns = [],
                    regexStr;
                for (var i = 0, len = patterns.length; i < len; i++) {
                    escapedPatterns.push(_.escapeRegExChars(patterns[i]))
                }
                regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
                return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i")
            }
        }(window.document);
        var Input = function() {
            "use strict";
            var specialKeyCodeMap;
            specialKeyCodeMap = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            };

            function Input(o, www) {
                o = o || {};
                if (!o.input) {
                    $.error("input is missing")
                }
                www.mixin(this);
                this.$hint = $(o.hint);
                this.$input = $(o.input);
                this.query = this.$input.val();
                this.queryWhenFocused = this.hasFocus() ? this.query : null;
                this.$overflowHelper = buildOverflowHelper(this.$input);
                this._checkLanguageDirection();
                if (this.$hint.length === 0) {
                    this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop
                }
            }
            Input.normalizeQuery = function(str) {
                return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
            };
            _.mixin(Input.prototype, EventEmitter, {
                _onBlur: function onBlur() {
                    this.resetInputValue();
                    this.trigger("blurred")
                },
                _onFocus: function onFocus() {
                    this.queryWhenFocused = this.query;
                    this.trigger("focused")
                },
                _onKeydown: function onKeydown($e) {
                    var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                    this._managePreventDefault(keyName, $e);
                    if (keyName && this._shouldTrigger(keyName, $e)) {
                        this.trigger(keyName + "Keyed", $e)
                    }
                },
                _onInput: function onInput() {
                    this._setQuery(this.getInputValue());
                    this.clearHintIfInvalid();
                    this._checkLanguageDirection()
                },
                _managePreventDefault: function managePreventDefault(keyName, $e) {
                    var preventDefault;
                    switch (keyName) {
                        case "up":
                        case "down":
                            preventDefault = !withModifier($e);
                            break;
                        default:
                            preventDefault = false
                    }
                    preventDefault && $e.preventDefault()
                },
                _shouldTrigger: function shouldTrigger(keyName, $e) {
                    var trigger;
                    switch (keyName) {
                        case "tab":
                            trigger = !withModifier($e);
                            break;
                        default:
                            trigger = true
                    }
                    return trigger
                },
                _checkLanguageDirection: function checkLanguageDirection() {
                    var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                    if (this.dir !== dir) {
                        this.dir = dir;
                        this.$hint.attr("dir", dir);
                        this.trigger("langDirChanged", dir)
                    }
                },
                _setQuery: function setQuery(val, silent) {
                    var areEquivalent, hasDifferentWhitespace;
                    areEquivalent = areQueriesEquivalent(val, this.query);
                    hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                    this.query = val;
                    if (!silent && !areEquivalent) {
                        this.trigger("queryChanged", this.query)
                    } else if (!silent && hasDifferentWhitespace) {
                        this.trigger("whitespaceChanged", this.query)
                    }
                },
                bind: function() {
                    var that = this,
                        onBlur, onFocus, onKeydown, onInput;
                    onBlur = _.bind(this._onBlur, this);
                    onFocus = _.bind(this._onFocus, this);
                    onKeydown = _.bind(this._onKeydown, this);
                    onInput = _.bind(this._onInput, this);
                    this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                    if (!_.isMsie() || _.isMsie() > 9) {
                        this.$input.on("input.tt", onInput)
                    } else {
                        this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                            if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                                return
                            }
                            _.defer(_.bind(that._onInput, that, $e))
                        })
                    }
                    return this
                },
                focus: function focus() {
                    this.$input.focus()
                },
                blur: function blur() {
                    this.$input.blur()
                },
                getLangDir: function getLangDir() {
                    return this.dir
                },
                getQuery: function getQuery() {
                    return this.query || ""
                },
                setQuery: function setQuery(val, silent) {
                    this.setInputValue(val);
                    this._setQuery(val, silent)
                },
                hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                    return this.query !== this.queryWhenFocused
                },
                getInputValue: function getInputValue() {
                    return this.$input.val()
                },
                setInputValue: function setInputValue(value) {
                    this.$input.val(value);
                    this.clearHintIfInvalid();
                    this._checkLanguageDirection()
                },
                resetInputValue: function resetInputValue() {
                    this.setInputValue(this.query)
                },
                getHint: function getHint() {
                    return this.$hint.val()
                },
                setHint: function setHint(value) {
                    this.$hint.val(value)
                },
                clearHint: function clearHint() {
                    this.setHint("")
                },
                clearHintIfInvalid: function clearHintIfInvalid() {
                    var val, hint, valIsPrefixOfHint, isValid;
                    val = this.getInputValue();
                    hint = this.getHint();
                    valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                    isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                    !isValid && this.clearHint()
                },
                hasFocus: function hasFocus() {
                    return this.$input.is(":focus")
                },
                hasOverflow: function hasOverflow() {
                    var constraint = this.$input.width() - 2;
                    this.$overflowHelper.text(this.getInputValue());
                    return this.$overflowHelper.width() >= constraint
                },
                isCursorAtEnd: function() {
                    var valueLength, selectionStart, range;
                    valueLength = this.$input.val().length;
                    selectionStart = this.$input[0].selectionStart;
                    if (_.isNumber(selectionStart)) {
                        return selectionStart === valueLength
                    } else if (document.selection) {
                        range = document.selection.createRange();
                        range.moveStart("character", -valueLength);
                        return valueLength === range.text.length
                    }
                    return true
                },
                destroy: function destroy() {
                    this.$hint.off(".tt");
                    this.$input.off(".tt");
                    this.$overflowHelper.remove();
                    this.$hint = this.$input = this.$overflowHelper = $("<div>")
                }
            });
            return Input;

            function buildOverflowHelper($input) {
                return $('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: $input.css("font-family"),
                    fontSize: $input.css("font-size"),
                    fontStyle: $input.css("font-style"),
                    fontVariant: $input.css("font-variant"),
                    fontWeight: $input.css("font-weight"),
                    wordSpacing: $input.css("word-spacing"),
                    letterSpacing: $input.css("letter-spacing"),
                    textIndent: $input.css("text-indent"),
                    textRendering: $input.css("text-rendering"),
                    textTransform: $input.css("text-transform")
                }).insertAfter($input)
            }

            function areQueriesEquivalent(a, b) {
                return Input.normalizeQuery(a) === Input.normalizeQuery(b)
            }

            function withModifier($e) {
                return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey
            }
        }();
        var Dataset = function() {
            "use strict";
            var keys, nameGenerator;
            keys = {
                val: "tt-selectable-display",
                obj: "tt-selectable-object"
            };
            nameGenerator = _.getIdGenerator();

            function Dataset(o, www) {
                o = o || {};
                o.templates = o.templates || {};
                o.templates.notFound = o.templates.notFound || o.templates.empty;
                if (!o.source) {
                    $.error("missing source")
                }
                if (!o.node) {
                    $.error("missing node")
                }
                if (o.name && !isValidName(o.name)) {
                    $.error("invalid dataset name: " + o.name)
                }
                www.mixin(this);
                this.highlight = !!o.highlight;
                this.name = o.name || nameGenerator();
                this.limit = o.limit || 5;
                this.displayFn = getDisplayFn(o.display || o.displayKey);
                this.templates = getTemplates(o.templates, this.displayFn);
                this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
                this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
                this._resetLastSuggestion();
                this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
            }
            Dataset.extractData = function extractData(el) {
                var $el = $(el);
                if ($el.data(keys.obj)) {
                    return {
                        val: $el.data(keys.val) || "",
                        obj: $el.data(keys.obj) || null
                    }
                }
                return null
            };
            _.mixin(Dataset.prototype, EventEmitter, {
                _overwrite: function overwrite(query, suggestions) {
                    suggestions = suggestions || [];
                    if (suggestions.length) {
                        this._renderSuggestions(query, suggestions)
                    } else if (this.async && this.templates.pending) {
                        this._renderPending(query)
                    } else if (!this.async && this.templates.notFound) {
                        this._renderNotFound(query)
                    } else {
                        this._empty()
                    }
                    this.trigger("rendered", this.name, suggestions, false)
                },
                _append: function append(query, suggestions) {
                    suggestions = suggestions || [];
                    if (suggestions.length && this.$lastSuggestion.length) {
                        this._appendSuggestions(query, suggestions)
                    } else if (suggestions.length) {
                        this._renderSuggestions(query, suggestions)
                    } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                        this._renderNotFound(query)
                    }
                    this.trigger("rendered", this.name, suggestions, true)
                },
                _renderSuggestions: function renderSuggestions(query, suggestions) {
                    var $fragment;
                    $fragment = this._getSuggestionsFragment(query, suggestions);
                    this.$lastSuggestion = $fragment.children().last();
                    this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions))
                },
                _appendSuggestions: function appendSuggestions(query, suggestions) {
                    var $fragment, $lastSuggestion;
                    $fragment = this._getSuggestionsFragment(query, suggestions);
                    $lastSuggestion = $fragment.children().last();
                    this.$lastSuggestion.after($fragment);
                    this.$lastSuggestion = $lastSuggestion
                },
                _renderPending: function renderPending(query) {
                    var template = this.templates.pending;
                    this._resetLastSuggestion();
                    template && this.$el.html(template({
                        query: query,
                        dataset: this.name
                    }))
                },
                _renderNotFound: function renderNotFound(query) {
                    var template = this.templates.notFound;
                    this._resetLastSuggestion();
                    template && this.$el.html(template({
                        query: query,
                        dataset: this.name
                    }))
                },
                _empty: function empty() {
                    this.$el.empty();
                    this._resetLastSuggestion()
                },
                _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                    var that = this,
                        fragment;
                    fragment = document.createDocumentFragment();
                    _.each(suggestions, function getSuggestionNode(suggestion) {
                        var $el, context;
                        context = that._injectQuery(query, suggestion);
                        $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                        fragment.appendChild($el[0])
                    });
                    this.highlight && highlight({
                        className: this.classes.highlight,
                        node: fragment,
                        pattern: query
                    });
                    return $(fragment)
                },
                _getFooter: function getFooter(query, suggestions) {
                    return this.templates.footer ? this.templates.footer({
                        query: query,
                        suggestions: suggestions,
                        dataset: this.name
                    }) : null
                },
                _getHeader: function getHeader(query, suggestions) {
                    return this.templates.header ? this.templates.header({
                        query: query,
                        suggestions: suggestions,
                        dataset: this.name
                    }) : null
                },
                _resetLastSuggestion: function resetLastSuggestion() {
                    this.$lastSuggestion = $()
                },
                _injectQuery: function injectQuery(query, obj) {
                    return _.isObject(obj) ? _.mixin({
                        _query: query
                    }, obj) : obj
                },
                update: function update(query) {
                    var that = this,
                        canceled = false,
                        syncCalled = false,
                        rendered = 0;
                    this.cancel();
                    this.cancel = function cancel() {
                        canceled = true;
                        that.cancel = $.noop;
                        that.async && that.trigger("asyncCanceled", query)
                    };
                    this.source(query, sync, async);
                    !syncCalled && sync([]);

                    function sync(suggestions) {
                        if (syncCalled) {
                            return
                        }
                        syncCalled = true;
                        suggestions = (suggestions || []).slice(0, that.limit);
                        rendered = suggestions.length;
                        that._overwrite(query, suggestions);
                        if (rendered < that.limit && that.async) {
                            that.trigger("asyncRequested", query)
                        }
                    }

                    function async (suggestions) {
                        suggestions = suggestions || [];
                        if (!canceled && rendered < that.limit) {
                            that.cancel = $.noop;
                            rendered += suggestions.length;
                            that._append(query, suggestions.slice(0, that.limit - rendered));
                            that.async && that.trigger("asyncReceived", query)
                        }
                    }
                },
                cancel: $.noop,
                clear: function clear() {
                    this._empty();
                    this.cancel();
                    this.trigger("cleared")
                },
                isEmpty: function isEmpty() {
                    return this.$el.is(":empty")
                },
                destroy: function destroy() {
                    this.$el = $("<div>")
                }
            });
            return Dataset;

            function getDisplayFn(display) {
                display = display || _.stringify;
                return _.isFunction(display) ? display : displayFn;

                function displayFn(obj) {
                    return obj[display]
                }
            }

            function getTemplates(templates, displayFn) {
                return {
                    notFound: templates.notFound && _.templatify(templates.notFound),
                    pending: templates.pending && _.templatify(templates.pending),
                    header: templates.header && _.templatify(templates.header),
                    footer: templates.footer && _.templatify(templates.footer),
                    suggestion: templates.suggestion || suggestionTemplate
                };

                function suggestionTemplate(context) {
                    return $("<div>").text(displayFn(context))
                }
            }

            function isValidName(str) {
                return /^[_a-zA-Z0-9-]+$/.test(str)
            }
        }();
        var Menu = function() {
            "use strict";

            function Menu(o, www) {
                var that = this;
                o = o || {};
                if (!o.node) {
                    $.error("node is required")
                }
                www.mixin(this);
                this.$node = $(o.node);
                this.query = null;
                this.datasets = _.map(o.datasets, initializeDataset);

                function initializeDataset(oDataset) {
                    var node = that.$node.find(oDataset.node).first();
                    oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                    return new Dataset(oDataset, www)
                }
            }
            _.mixin(Menu.prototype, EventEmitter, {
                _onSelectableClick: function onSelectableClick($e) {
                    this.trigger("selectableClicked", $($e.currentTarget))
                },
                _onRendered: function onRendered(type, dataset, suggestions, async) {
                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                    this.trigger("datasetRendered", dataset, suggestions, async)
                },
                _onCleared: function onCleared() {
                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                    this.trigger("datasetCleared")
                },
                _propagate: function propagate() {
                    this.trigger.apply(this, arguments)
                },
                _allDatasetsEmpty: function allDatasetsEmpty() {
                    return _.every(this.datasets, isDatasetEmpty);

                    function isDatasetEmpty(dataset) {
                        return dataset.isEmpty()
                    }
                },
                _getSelectables: function getSelectables() {
                    return this.$node.find(this.selectors.selectable)
                },
                _removeCursor: function _removeCursor() {
                    var $selectable = this.getActiveSelectable();
                    $selectable && $selectable.removeClass(this.classes.cursor)
                },
                _ensureVisible: function ensureVisible($el) {
                    var elTop, elBottom, nodeScrollTop, nodeHeight;
                    elTop = $el.position().top;
                    elBottom = elTop + $el.outerHeight(true);
                    nodeScrollTop = this.$node.scrollTop();
                    nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                    if (elTop < 0) {
                        this.$node.scrollTop(nodeScrollTop + elTop)
                    } else if (nodeHeight < elBottom) {
                        this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight))
                    }
                },
                bind: function() {
                    var that = this,
                        onSelectableClick;
                    onSelectableClick = _.bind(this._onSelectableClick, this);
                    this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                    _.each(this.datasets, function(dataset) {
                        dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that)
                    });
                    return this
                },
                isOpen: function isOpen() {
                    return this.$node.hasClass(this.classes.open)
                },
                open: function open() {
                    this.$node.addClass(this.classes.open)
                },
                close: function close() {
                    this.$node.removeClass(this.classes.open);
                    this._removeCursor()
                },
                setLanguageDirection: function setLanguageDirection(dir) {
                    this.$node.attr("dir", dir)
                },
                selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                    var $selectables, $oldCursor, oldIndex, newIndex;
                    $oldCursor = this.getActiveSelectable();
                    $selectables = this._getSelectables();
                    oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                    newIndex = oldIndex + delta;
                    newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                    newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                    return newIndex === -1 ? null : $selectables.eq(newIndex)
                },
                setCursor: function setCursor($selectable) {
                    this._removeCursor();
                    if ($selectable = $selectable && $selectable.first()) {
                        $selectable.addClass(this.classes.cursor);
                        this._ensureVisible($selectable)
                    }
                },
                getSelectableData: function getSelectableData($el) {
                    return $el && $el.length ? Dataset.extractData($el) : null
                },
                getActiveSelectable: function getActiveSelectable() {
                    var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                    return $selectable.length ? $selectable : null
                },
                getTopSelectable: function getTopSelectable() {
                    var $selectable = this._getSelectables().first();
                    return $selectable.length ? $selectable : null
                },
                update: function update(query) {
                    var isValidUpdate = query !== this.query;
                    if (isValidUpdate) {
                        this.query = query;
                        _.each(this.datasets, updateDataset)
                    }
                    return isValidUpdate;

                    function updateDataset(dataset) {
                        dataset.update(query)
                    }
                },
                empty: function empty() {
                    _.each(this.datasets, clearDataset);
                    this.query = null;
                    this.$node.addClass(this.classes.empty);

                    function clearDataset(dataset) {
                        dataset.clear()
                    }
                },
                destroy: function destroy() {
                    this.$node.off(".tt");
                    this.$node = $("<div>");
                    _.each(this.datasets, destroyDataset);

                    function destroyDataset(dataset) {
                        dataset.destroy()
                    }
                }
            });
            return Menu
        }();
        var DefaultMenu = function() {
            "use strict";
            var s = Menu.prototype;

            function DefaultMenu() {
                Menu.apply(this, [].slice.call(arguments, 0))
            }
            _.mixin(DefaultMenu.prototype, Menu.prototype, {
                open: function open() {
                    !this._allDatasetsEmpty() && this._show();
                    return s.open.apply(this, [].slice.call(arguments, 0))
                },
                close: function close() {
                    this._hide();
                    return s.close.apply(this, [].slice.call(arguments, 0))
                },
                _onRendered: function onRendered() {
                    if (this._allDatasetsEmpty()) {
                        this._hide()
                    } else {
                        this.isOpen() && this._show()
                    }
                    return s._onRendered.apply(this, [].slice.call(arguments, 0))
                },
                _onCleared: function onCleared() {
                    if (this._allDatasetsEmpty()) {
                        this._hide()
                    } else {
                        this.isOpen() && this._show()
                    }
                    return s._onCleared.apply(this, [].slice.call(arguments, 0))
                },
                setLanguageDirection: function setLanguageDirection(dir) {
                    this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                    return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
                },
                _hide: function hide() {
                    this.$node.hide()
                },
                _show: function show() {
                    this.$node.css("display", "block")
                }
            });
            return DefaultMenu
        }();
        var Typeahead = function() {
            "use strict";

            function Typeahead(o, www) {
                var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
                o = o || {};
                if (!o.input) {
                    $.error("missing input")
                }
                if (!o.menu) {
                    $.error("missing menu")
                }
                if (!o.eventBus) {
                    $.error("missing event bus")
                }
                www.mixin(this);
                this.eventBus = o.eventBus;
                this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
                this.input = o.input;
                this.menu = o.menu;
                this.enabled = true;
                this.active = false;
                this.input.hasFocus() && this.activate();
                this.dir = this.input.getLangDir();
                this._hacks();
                this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
                onFocused = c(this, "activate", "open", "_onFocused");
                onBlurred = c(this, "deactivate", "_onBlurred");
                onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
                onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
                onEscKeyed = c(this, "isActive", "_onEscKeyed");
                onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
                onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
                onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
                onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
                onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
                onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
                this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this)
            }
            _.mixin(Typeahead.prototype, {
                _hacks: function hacks() {
                    var $input, $menu;
                    $input = this.input.$input || $("<div>");
                    $menu = this.menu.$node || $("<div>");
                    $input.on("blur.tt", function($e) {
                        var active, isActive, hasActive;
                        active = document.activeElement;
                        isActive = $menu.is(active);
                        hasActive = $menu.has(active).length > 0;
                        if (_.isMsie() && (isActive || hasActive)) {
                            $e.preventDefault();
                            $e.stopImmediatePropagation();
                            _.defer(function() {
                                $input.focus()
                            })
                        }
                    });
                    $menu.on("mousedown.tt", function($e) {
                        $e.preventDefault()
                    })
                },
                _onSelectableClicked: function onSelectableClicked(type, $el) {
                    this.select($el)
                },
                _onDatasetCleared: function onDatasetCleared() {
                    this._updateHint()
                },
                _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                    this._updateHint();
                    this.eventBus.trigger("render", suggestions, async, dataset)
                },
                _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                    this.eventBus.trigger("asyncrequest", query, dataset)
                },
                _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                    this.eventBus.trigger("asynccancel", query, dataset)
                },
                _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                    this.eventBus.trigger("asyncreceive", query, dataset)
                },
                _onFocused: function onFocused() {
                    this._minLengthMet() && this.menu.update(this.input.getQuery())
                },
                _onBlurred: function onBlurred() {
                    if (this.input.hasQueryChangedSinceLastFocus()) {
                        this.eventBus.trigger("change", this.input.getQuery())
                    }
                },
                _onEnterKeyed: function onEnterKeyed(type, $e) {
                    var $selectable;
                    if ($selectable = this.menu.getActiveSelectable()) {
                        this.select($selectable) && $e.preventDefault()
                    }
                },
                _onTabKeyed: function onTabKeyed(type, $e) {
                    var $selectable;
                    if ($selectable = this.menu.getActiveSelectable()) {
                        this.select($selectable) && $e.preventDefault()
                    } else if ($selectable = this.menu.getTopSelectable()) {
                        this.autocomplete($selectable) && $e.preventDefault()
                    }
                },
                _onEscKeyed: function onEscKeyed() {
                    this.close()
                },
                _onUpKeyed: function onUpKeyed() {
                    this.moveCursor(-1)
                },
                _onDownKeyed: function onDownKeyed() {
                    this.moveCursor(+1)
                },
                _onLeftKeyed: function onLeftKeyed() {
                    if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                        this.autocomplete(this.menu.getTopSelectable())
                    }
                },
                _onRightKeyed: function onRightKeyed() {
                    if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                        this.autocomplete(this.menu.getTopSelectable())
                    }
                },
                _onQueryChanged: function onQueryChanged(e, query) {
                    this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty()
                },
                _onWhitespaceChanged: function onWhitespaceChanged() {
                    this._updateHint()
                },
                _onLangDirChanged: function onLangDirChanged(e, dir) {
                    if (this.dir !== dir) {
                        this.dir = dir;
                        this.menu.setLanguageDirection(dir)
                    }
                },
                _openIfActive: function openIfActive() {
                    this.isActive() && this.open()
                },
                _minLengthMet: function minLengthMet(query) {
                    query = _.isString(query) ? query : this.input.getQuery() || "";
                    return query.length >= this.minLength
                },
                _updateHint: function updateHint() {
                    var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                    $selectable = this.menu.getTopSelectable();
                    data = this.menu.getSelectableData($selectable);
                    val = this.input.getInputValue();
                    if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                        query = Input.normalizeQuery(val);
                        escapedQuery = _.escapeRegExChars(query);
                        frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                        match = frontMatchRegEx.exec(data.val);
                        match && this.input.setHint(val + match[1])
                    } else {
                        this.input.clearHint()
                    }
                },
                isEnabled: function isEnabled() {
                    return this.enabled
                },
                enable: function enable() {
                    this.enabled = true
                },
                disable: function disable() {
                    this.enabled = false
                },
                isActive: function isActive() {
                    return this.active
                },
                activate: function activate() {
                    if (this.isActive()) {
                        return true
                    } else if (!this.isEnabled() || this.eventBus.before("active")) {
                        return false
                    } else {
                        this.active = true;
                        this.eventBus.trigger("active");
                        return true
                    }
                },
                deactivate: function deactivate() {
                    if (!this.isActive()) {
                        return true
                    } else if (this.eventBus.before("idle")) {
                        return false
                    } else {
                        this.active = false;
                        this.close();
                        this.eventBus.trigger("idle");
                        return true
                    }
                },
                isOpen: function isOpen() {
                    return this.menu.isOpen()
                },
                open: function open() {
                    if (!this.isOpen() && !this.eventBus.before("open")) {
                        this.menu.open();
                        this._updateHint();
                        this.eventBus.trigger("open")
                    }
                    return this.isOpen()
                },
                close: function close() {
                    if (this.isOpen() && !this.eventBus.before("close")) {
                        this.menu.close();
                        this.input.clearHint();
                        this.input.resetInputValue();
                        this.eventBus.trigger("close")
                    }
                    return !this.isOpen()
                },
                setVal: function setVal(val) {
                    this.input.setQuery(_.toStr(val))
                },
                getVal: function getVal() {
                    return this.input.getQuery()
                },
                select: function select($selectable) {
                    var data = this.menu.getSelectableData($selectable);
                    if (data && !this.eventBus.before("select", data.obj)) {
                        this.input.setQuery(data.val, true);
                        this.eventBus.trigger("select", data.obj);
                        this.close();
                        return true
                    }
                    return false
                },
                autocomplete: function autocomplete($selectable) {
                    var query, data, isValid;
                    query = this.input.getQuery();
                    data = this.menu.getSelectableData($selectable);
                    isValid = data && query !== data.val;
                    if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                        this.input.setQuery(data.val);
                        this.eventBus.trigger("autocomplete", data.obj);
                        return true
                    }
                    return false
                },
                moveCursor: function moveCursor(delta) {
                    var query, $candidate, data, payload, cancelMove;
                    query = this.input.getQuery();
                    $candidate = this.menu.selectableRelativeToCursor(delta);
                    data = this.menu.getSelectableData($candidate);
                    payload = data ? data.obj : null;
                    cancelMove = this._minLengthMet() && this.menu.update(query);
                    if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                        this.menu.setCursor($candidate);
                        if (data) {
                            this.input.setInputValue(data.val)
                        } else {
                            this.input.resetInputValue();
                            this._updateHint()
                        }
                        this.eventBus.trigger("cursorchange", payload);
                        return true
                    }
                    return false
                },
                destroy: function destroy() {
                    this.input.destroy();
                    this.menu.destroy()
                }
            });
            return Typeahead;

            function c(ctx) {
                var methods = [].slice.call(arguments, 1);
                return function() {
                    var args = [].slice.call(arguments);
                    _.each(methods, function(method) {
                        return ctx[method].apply(ctx, args)
                    })
                }
            }
        }();
        (function() {
            "use strict";
            var old, keys, methods;
            old = $.fn.typeahead;
            keys = {
                www: "tt-www",
                attrs: "tt-attrs",
                typeahead: "tt-typeahead"
            };
            methods = {
                initialize: function initialize(o, datasets) {
                    var www;
                    datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                    o = o || {};
                    www = WWW(o.classNames);
                    return this.each(attach);

                    function attach() {
                        var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                        _.each(datasets, function(d) {
                            d.highlight = !!o.highlight
                        });
                        $input = $(this);
                        $wrapper = $(www.html.wrapper);
                        $hint = $elOrNull(o.hint);
                        $menu = $elOrNull(o.menu);
                        defaultHint = o.hint !== false && !$hint;
                        defaultMenu = o.menu !== false && !$menu;
                        defaultHint && ($hint = buildHintFromInput($input, www));
                        defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                        $hint && $hint.val("");
                        $input = prepInput($input, www);
                        if (defaultHint || defaultMenu) {
                            $wrapper.css(www.css.wrapper);
                            $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                            $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null)
                        }
                        MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                        eventBus = new EventBus({
                            el: $input
                        });
                        input = new Input({
                            hint: $hint,
                            input: $input
                        }, www);
                        menu = new MenuConstructor({
                            node: $menu,
                            datasets: datasets
                        }, www);
                        typeahead = new Typeahead({
                            input: input,
                            menu: menu,
                            eventBus: eventBus,
                            minLength: o.minLength
                        }, www);
                        $input.data(keys.www, www);
                        $input.data(keys.typeahead, typeahead)
                    }
                },
                isEnabled: function isEnabled() {
                    var enabled;
                    ttEach(this.first(), function(t) {
                        enabled = t.isEnabled()
                    });
                    return enabled
                },
                enable: function enable() {
                    ttEach(this, function(t) {
                        t.enable()
                    });
                    return this
                },
                disable: function disable() {
                    ttEach(this, function(t) {
                        t.disable()
                    });
                    return this
                },
                isActive: function isActive() {
                    var active;
                    ttEach(this.first(), function(t) {
                        active = t.isActive()
                    });
                    return active
                },
                activate: function activate() {
                    ttEach(this, function(t) {
                        t.activate()
                    });
                    return this
                },
                deactivate: function deactivate() {
                    ttEach(this, function(t) {
                        t.deactivate()
                    });
                    return this
                },
                isOpen: function isOpen() {
                    var open;
                    ttEach(this.first(), function(t) {
                        open = t.isOpen()
                    });
                    return open
                },
                open: function open() {
                    ttEach(this, function(t) {
                        t.open()
                    });
                    return this
                },
                close: function close() {
                    ttEach(this, function(t) {
                        t.close()
                    });
                    return this
                },
                select: function select(el) {
                    var success = false,
                        $el = $(el);
                    ttEach(this.first(), function(t) {
                        success = t.select($el)
                    });
                    return success
                },
                autocomplete: function autocomplete(el) {
                    var success = false,
                        $el = $(el);
                    ttEach(this.first(), function(t) {
                        success = t.autocomplete($el)
                    });
                    return success
                },
                moveCursor: function moveCursoe(delta) {
                    var success = false;
                    ttEach(this.first(), function(t) {
                        success = t.moveCursor(delta)
                    });
                    return success
                },
                val: function val(newVal) {
                    var query;
                    if (!arguments.length) {
                        ttEach(this.first(), function(t) {
                            query = t.getVal()
                        });
                        return query
                    } else {
                        ttEach(this, function(t) {
                            t.setVal(newVal)
                        });
                        return this
                    }
                },
                destroy: function destroy() {
                    ttEach(this, function(typeahead, $input) {
                        revert($input);
                        typeahead.destroy()
                    });
                    return this
                }
            };
            $.fn.typeahead = function(method) {
                if (methods[method]) {
                    return methods[method].apply(this, [].slice.call(arguments, 1))
                } else {
                    return methods.initialize.apply(this, arguments)
                }
            };
            $.fn.typeahead.noConflict = function noConflict() {
                $.fn.typeahead = old;
                return this
            };

            function ttEach($els, fn) {
                $els.each(function() {
                    var $input = $(this),
                        typeahead;
                    (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input)
                })
            }

            function buildHintFromInput($input, www) {
                return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                    autocomplete: "off",
                    spellcheck: "false",
                    tabindex: -1
                })
            }

            function prepInput($input, www) {
                $input.data(keys.attrs, {
                    dir: $input.attr("dir"),
                    autocomplete: $input.attr("autocomplete"),
                    spellcheck: $input.attr("spellcheck"),
                    style: $input.attr("style")
                });
                $input.addClass(www.classes.input).attr({
                    autocomplete: "off",
                    spellcheck: false
                });
                try {
                    !$input.attr("dir") && $input.attr("dir", "auto")
                } catch (e) {}
                return $input
            }

            function getBackgroundStyles($el) {
                return {
                    backgroundAttachment: $el.css("background-attachment"),
                    backgroundClip: $el.css("background-clip"),
                    backgroundColor: $el.css("background-color"),
                    backgroundImage: $el.css("background-image"),
                    backgroundOrigin: $el.css("background-origin"),
                    backgroundPosition: $el.css("background-position"),
                    backgroundRepeat: $el.css("background-repeat"),
                    backgroundSize: $el.css("background-size")
                }
            }

            function revert($input) {
                var www, $wrapper;
                www = $input.data(keys.www);
                $wrapper = $input.parent().filter(www.selectors.wrapper);
                _.each($input.data(keys.attrs), function(val, key) {
                    _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val)
                });
                $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
                if ($wrapper.length) {
                    $input.detach().insertAfter($wrapper);
                    $wrapper.remove()
                }
            }

            function $elOrNull(obj) {
                var isValid, $el;
                isValid = _.isJQuery(obj) || _.isElement(obj);
                $el = isValid ? $(obj).first() : [];
                return $el.length ? $el : null
            }
        })()
    });
    define("directories/directories-utils/validation-utils", [], function() {
        var ValidationUtils = {
            isAbsoluteUrl: function(url) {
                var re = new RegExp(/^https?:\/\//i);
                return re.test(url)
            }
        };
        return ValidationUtils
    });
    define("libra/components/typeahead", ["libra/vendor/bloodhound", "libra/vendor/typeahead", "libra/vendor/handlebars", "directories/directories-bundle", "directories/directories-utils/validation-utils", "librastandardlib/logger/logger", "librastandardlib/obj-utils/mixin"], function(Bloodhound, typeahead, Handlebars, DirectoriesBundle, ValidationUtils, Logger, mixin) {
        "use strict";
        var logger = new Logger("Typeahead");
        var options = {
            componentName: "Typeahead",
            itemsConfig: {
                loadTemplate: false
            },
            fldToSplitBy: "category",
            fldVals: {
                products: true,
                keypages: true,
                tutorials: true,
                blogs: true
            },
            requiredFields: {
                primaryUrl: true,
                title: true
            },
            APIs: {
                getItems: {
                    defaultParams: {
                        order_by: "SortOrderValue",
                        sort_ascending: true,
                        limit: 250
                    }
                }
            }
        };
        var defaults = {
            inputSelector: ".m-nav-search-field",
            focusedInputSelector: ".m-nav-search-field:focus",
            searchFormSelector: '[class^="m-nav"] form',
            menuCloseEvent: "typeahead:close",
            menuActiveEvent: "typeahead:active",
            menuSelector: ".m-nav .tt-menu",
            menuScrollClassName: "tt-scroll",
            suggestionHandlebarSelector: ".m-nav .tt-suggestion-tpl",
            seeAllHandlebarSelector: ".m-nav .tt-see-all-tpl",
            productHeaderHandlebarSelector: ".m-nav .tt-products-head-tpl",
            keypagesHeaderHandlebarSelector: ".m-nav .tt-keypages-head-tpl",
            tutorialsHeaderHandlebarSelector: ".m-nav .tt-tutorials-head-tpl",
            blogsHeaderHandlebarSelector: ".m-nav .tt-blogs-head-tpl"
        };

        function Typeahead(elem) {
            this.$elem = $(elem);
            this.options = $.extend({}, defaults);
            this.$form = $(this.options.searchFormSelector);
            this.$input = $(this.options.inputSelector);
            this.suggestionTemplate = $(this.options.suggestionHandlebarSelector).html();
            this.seeAllTemplate = $(this.options.seeAllHandlebarSelector).html();
            this.productHeaderTemplate = $(this.options.productHeaderHandlebarSelector).html();
            this.keypagesHeaderTemplate = $(this.options.keypagesHeaderHandlebarSelector).html();
            this.tutorialsHeaderTemplate = $(this.options.tutorialsHeaderHandlebarSelector).html();
            this.blogsHeaderTemplate = $(this.options.blogsHeaderHandlebarSelector).html();
            this.allDataItems;
            this.bindEventHandlers();
            this.init(options);
            this.loadData()
        }
        Typeahead.prototype = {
            processData: function(data) {
                logger.debug("Fetched data: ", data);
                if (data.metadata.endMarker) {
                    logger.debug("endMarker found:", data.metadata.endMarker);
                    this.updatedParams.start_marker = data.metadata.endMarker;
                    this.getAdditionalData(data)
                } else {
                    logger.debug("Complete Dataset: ", data);
                    this.formatData(data)
                }
            },
            getAdditionalData: function(data) {
                this.callAPI(this.url, this.updatedParams).done(function(addiontalData) {
                    this.allDataItems = data.items.concat(addiontalData.items);
                    $.extend(addiontalData.items, this.allDataItems);
                    logger.info(this.getMetricName(this.options.metricsConfig.metric.AjaxSuccess), "AI");
                    this.processData(addiontalData)
                }.bind(this)).fail(function(xhr, status, error) {
                    var metricName = this.getMetricName(this.options.metricsConfig.metric.AjaxError);
                    logger.error(metricName, "AI");
                    logger.error(metricName + ": Error with loading additional items; " + status + "; " + error, "RAW")
                }.bind(this))
            },
            formatData: function(data) {
                this.splitData = this.splitDataByFldVals(data.items, data.fieldTypes);
                logger.debug("Data split by category values: ", this.splitData);
                this.setBloodhoundObjects(this.splitData)
            },
            setBloodhoundObjects: function(data) {
                var that = this;
                this.productSuggestions = new Bloodhound({
                    datumTokenizer: that.tokenizeData,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: that.getAdditonalFields(data.products)
                });
                this.keypageSuggestions = new Bloodhound({
                    datumTokenizer: that.tokenizeData,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: that.getAdditonalFields(data.keypages)
                });
                this.tutorialsSuggestions = new Bloodhound({
                    datumTokenizer: that.tokenizeData,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: that.getAdditonalFields(data.tutorials)
                });
                if (data.hasOwnProperty("blogs")) {
                    this.blogsSuggestions = new Bloodhound({
                        datumTokenizer: that.tokenizeData,
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        local: that.getAdditonalFields(data.blogs)
                    })
                }
                this.setTypeaheadObject()
            },
            setTypeaheadObject: function() {
                var that = this;
                var productsConfig = {
                    name: "products",
                    display: "title",
                    source: that.productSuggestions,
                    limit: 3,
                    templates: {
                        header: Handlebars.compile(that.productHeaderTemplate),
                        empty: Handlebars.compile(that.seeAllTemplate),
                        suggestion: Handlebars.compile(that.suggestionTemplate),
                        footer: Handlebars.compile(that.seeAllTemplate)
                    }
                };
                var keypagesConfig = {
                    name: "keypages",
                    display: "title",
                    source: that.keypageSuggestions,
                    limit: 2,
                    templates: {
                        header: Handlebars.compile(that.keypagesHeaderTemplate),
                        suggestion: Handlebars.compile(that.suggestionTemplate)
                    }
                };
                var tutorialsConfig = {
                    name: "tutorials",
                    display: "title",
                    source: that.tutorialsSuggestions,
                    limit: 2,
                    templates: {
                        header: Handlebars.compile(that.tutorialsHeaderTemplate),
                        suggestion: Handlebars.compile(that.suggestionTemplate)
                    }
                };
                var categoryConfigs = [productsConfig, keypagesConfig, tutorialsConfig];
                if (this.blogsSuggestions !== undefined) {
                    var blogsConfig = {
                        name: "blogs",
                        display: "title",
                        source: that.blogsSuggestions,
                        limit: 2,
                        templates: {
                            header: Handlebars.compile(that.blogsHeaderTemplate),
                            suggestion: Handlebars.compile(that.suggestionTemplate)
                        }
                    };
                    categoryConfigs.push(blogsConfig)
                }
                this.$input.typeahead({
                    hint: true,
                    highlight: true,
                    minLength: 1
                }, categoryConfigs)
            },
            tokenizeData: function(d) {
                var tokens = [];
                var titleLength = d.title.length;
                for (var n = 1; n <= titleLength; n++) {
                    for (var i = 0; i + n <= titleLength; i++) {
                        tokens.push(d.title.substr(i, n))
                    }
                }
                return tokens
            },
            getAdditonalFields: function(data) {
                return data.map(function(item) {
                    return item.additionalFields
                })
            },
            bindEventHandlers: function() {
                this.$input.on(this.options.menuCloseEvent, function() {
                    this.$input.typeahead("val", "")
                }.bind(this));
                this.$input.on("keydown", function(e) {
                    if (e.key === "Enter") {
                        $(this).closest("form").submit()
                    }
                });
                this.$form.on("submit", function(e) {
                    this.$focusedInput = $(defaults.focusedInputSelector);
                    var query = this.$focusedInput.typeahead("val").trim();
                    if (!query) {
                        e.preventDefault()
                    }
                }.bind(this));
                this.$input.on(this.options.menuActiveEvent, function() {
                    this.checkDesktopMenuScroll()
                }.bind(this))
            },
            splitDataByFldVals: function(items, fieldTypes) {
                var splitData = {};
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var isValid = true;
                    var additionalFields = item.additionalFields;
                    var fldVal = additionalFields[options.fldToSplitBy];
                    for (var key in additionalFields) {
                        if (additionalFields.hasOwnProperty(key)) {
                            var val = additionalFields[key];
                            if (options.requiredFields[key] && val === "") {
                                isValid = false;
                                break
                            } else if (fieldTypes[key].toLowerCase() === "url" && val !== "") {
                                isValid = ValidationUtils.isAbsoluteUrl(val);
                                break
                            }
                        }
                    }
                    if (options.fldVals[fldVal] && isValid) {
                        splitData[fldVal] = splitData[fldVal] || [];
                        splitData[fldVal].push(item)
                    }
                }
                return splitData
            },
            checkDesktopMenuScroll: function() {
                this.$menu = $(defaults.menuSelector);
                this.windowHeight = $(window).height();
                this.menuMinimumFullHeight = 620;
                this.menuScrollOffset = this.windowHeight - 100;
                this.menuHeightExceedsWindow = this.windowHeight < this.menuMinimumFullHeight;
                this.hasScrollClass = this.$menu.hasClass(defaults.menuScrollClassName);
                if (this.hasScrollClass && !this.menuHeightExceedsWindow) {
                    this.$menu.css("max-height", "none");
                    this.$menu.removeClass(defaults.menuScrollClassName)
                } else if (this.menuHeightExceedsWindow) {
                    this.$menu.css("max-height", this.menuScrollOffset);
                    this.$menu.addClass(defaults.menuScrollClassName)
                }
            }
        };
        mixin(Typeahead.prototype, DirectoriesBundle.DirectoriesMixin);
        Libra.Comp.register({
            name: "typeahead",
            initFct: function(elem) {
                new Typeahead(elem)
            },
            initTime: "immediate"
        });
        return Typeahead
    });
    define("libra/components/static-card", [], function() {
        "use strict";
        var defaults = {
            eventDataLoad: "card-data-load"
        };
        var StaticCard = function(elem) {
            this.$elem = $(elem);
            this.options = $.extend({}, defaults, this.$elem.data());
            if (this.options.cardsThemeJs !== undefined) {
                this.loadUI()
            }
        };
        StaticCard.prototype = {
            loadUI: function() {
                require([this.options.cardsThemeJs], function(ThemeUI) {
                    new ThemeUI(this.$elem, this.options);
                    this.$elem.trigger(this.options.eventDataLoad)
                }.bind(this))
            }
        };
        Libra.Comp.register({
            name: "static-card",
            initFct: function(elem) {
                new StaticCard(elem)
            },
            initTime: "immediate"
        });
        return StaticCard
    });
    define("libra/components/transition-wrapper", ["libra/dom-utils/component-viewport-tracker"], function(Tracker) {
        "use strict";
        var defaults = {
            viewPercentageIn: 20,
            activeClass: "lb-active"
        };

        function TransitionWrapper(elem) {
            var $elem = $(elem);
            var options = $.extend({}, defaults, $elem.data());
            Tracker.watch($elem, function() {
                $elem.addClass(options.activeClass)
            }, function() {
                $elem.removeClass(options.activeClass)
            }, options)
        }
        Libra.Comp.register({
            name: "transition-wrapper",
            initFct: function(elem) {
                new TransitionWrapper(elem)
            },
            initTime: "immediate"
        });
        return TransitionWrapper
    });
    define("libra/navigation/utils/navigation-utils", [], function() {
        "use strict";
        var Util = {
            simpleCache: {},
            isTouchCapable: function() {
                if (typeof Util.simpleCache.isTouchCapable === "undefined") {
                    var res = window.Modernizr.touchevents;
                    Util.simpleCache.isTouchCapable = res;
                    return res
                }
                return Util.simpleCache.isTouchCapable
            },
            isMobile: function() {
                if (typeof Util.simpleCache.isMobile === "undefined") {
                    var re = new RegExp(/iPhone|iPod|iPad|Android|(?=.*\bAndroid\b)(?=.*\bMobile\b)|IEMobile|(?=.*\bWindows\b)(?=.*\bTouch\b)|Windows Phone|Opera Mini|(?=.*\bFirefox\b)(?=.*\bMobile\b)|BlackBerry|Nexus 7|BNTV250|Kindle Fire|Silk|webOS|GT-P1000/i);
                    var res = re.test(navigator.userAgent);
                    Util.simpleCache.isMobile = res;
                    return res
                }
                return Util.simpleCache.isMobile
            },
            isLikelyMobile: function() {
                if (typeof Util.simpleCache.isLikelyMobile === "undefined") {
                    var res = Util.isMobile() || Util.isTouchCapable() && $(window).width <= 800;
                    Util.simpleCache.isLikelyMobile = res;
                    return res
                }
                return Util.simpleCache.isLikelyMobile
            },
            isIPad: function() {
                if (typeof Util.simpleCache.isIPad === "undefined") {
                    var res = navigator.userAgent.indexOf("iPad") !== -1;
                    Util.simpleCache.isIPad = res;
                    return res
                }
                return Util.simpleCache.isIPad
            },
            debounceWindowEvent: function(func, eventName, timeout, context) {
                var that = context || this;
                var count = 0;
                $(window).on(eventName, function() {
                    var id = ++count;
                    setTimeout(function() {
                        if (id === count) {
                            func.call(that)
                        }
                    }, timeout)
                })
            }
        };
        return Util
    });
    define("libra/navigation/dropdown", ["libra/navigation/utils/navigation-utils", "librastandardlib/vendor/hoverintent/hoverIntent"], function(Util, hoverIntent) {
        "use strict";
        var defaults = {
            footerSelector: "#aws-page-footer",
            dropdownSelector: ".aws-nav-popover",
            jQueryEventNamespace: "aws_nav-dropdown",
            isTouchOnly: false,
            isAnimated: true,
            hoverSensitivity: 7,
            hoverInterval: 50,
            timeout: 260,
            verticalTravelDistance: 14,
            horizontalOffset: 15,
            verticalOffset: 30,
            startingOpacity: .1
        };
        var activeRegistry = {};
        var instantiationCount = 0;

        function Dropdown(triggerEl, group, options) {
            this.options = $.extend({}, defaults, options);
            this.instantiationId = instantiationCount;
            instantiationCount++;
            this.$trigger = $(triggerEl);
            this.$triggerIcon = this.$trigger.find("i");
            this.id = this.$trigger.attr("data-dropdown");
            this.$target = $("#" + this.id);
            this.group = group;
            this.isActive = false;
            this.isEnabled = true;
            this.timeout = null;
            this.topStart = 0;
            this.topDest = 0
        }
        Dropdown.prototype = {
            init: function() {
                if (!this.beforeInit()) {
                    return
                }
                if (this.$target.data("registered")) {
                    return
                }
                this.$target.attr("data-registered", "true");
                if (Util.isLikelyMobile() || this.options.isTouchOnly) {
                    this.options.isTouchOnly = true;
                    this.bindTouchEvents()
                } else {
                    this.bindTouchEvents();
                    this.bindHoverEvents()
                }
                this.bindWindowResizeEvent()
            },
            bindHoverEvents: function() {
                var that = this;
                hoverIntent(this.$trigger[0], function() {
                    if (!that.isActive) {
                        that.activate()
                    }
                }, function() {}).options({
                    timeout: 0,
                    sensitivity: this.options.hoverSensitivity,
                    interval: this.options.hoverInterval
                });
                var enterTrigger = function() {
                    clearTimeout(that.timeout)
                };
                this.$trigger.on("mouseenter", enterTrigger);
                var enterTarget = function() {
                    clearTimeout(that.timeout)
                };
                this.$target.on("mouseenter", enterTarget);
                var leaveTrigger = function() {
                    that.timeout = setTimeout(function() {
                        that.deactivate()
                    }, that.options.timeout)
                };
                this.$trigger.on("mouseleave", leaveTrigger);
                var leaveTarget = function() {
                    that.timeout = setTimeout(function() {
                        that.deactivate()
                    }, that.options.timeout)
                };
                this.$target.on("mouseleave", leaveTarget)
            },
            bindTouchEvents: function() {
                var that = this;
                this.$trigger.on("click", function(e) {
                    if (that.isEnabled) {
                        e.preventDefault()
                    }
                    that.toggle()
                });
                this.listenForCloseEvent()
            },
            bindWindowResizeEvent: function() {
                var that = this;
                Util.debounceWindowEvent(function() {
                    that.setPosition();
                    setTimeout(function() {
                        that.setPosition()
                    }, 300)
                }, "resize." + this.options.jQueryEventNamespace + "_" + this.instantiationId, 20, this)
            },
            destroyWindowResizeEvent: function() {
                $(window).off("resize." + this.options.jQueryEventNamespace + "_" + this.instantiationId)
            },
            listenForCloseEvent: function() {
                var that = this;
                $(document).on("custom_" + this.options.jQueryEventNamespace + "_close", function() {
                    that.deactivate()
                })
            },
            toggle: function() {
                if (this.isActive) {
                    this.deactivate()
                } else {
                    this.activate();
                    this.bindDocumentClickHandler()
                }
            },
            bindDocumentClickHandler: function() {
                var eventName;
                if ("ontouchstart" in window) {
                    eventName = "touchstart." + this.options.jQueryEventNamespace + "_" + this.instantiationId
                } else {
                    eventName = "click." + this.options.jQueryEventNamespace + "_" + this.instantiationId
                }
                var that = this;
                $(document).on(eventName, function(event) {
                    var $eventTarget = $(event.target);
                    if (!$eventTarget.closest("[data-dropdown]").length && !$eventTarget.closest(that.options.dropdownSelector).length) {
                        that.deactivate()
                    }
                })
            },
            destroyDocumentClickHandler: function() {
                var eventName;
                if ("ontouchstart" in window) {
                    eventName = "touchstart." + this.options.jQueryEventNamespace + "_" + this.instantiationId
                } else {
                    eventName = "click." + this.options.jQueryEventNamespace + "_" + this.instantiationId
                }
                $(document).off(eventName)
            },
            activate: function() {
                if (!this.isEnabled) {
                    return
                }
                for (var key in activeRegistry) {
                    if (activeRegistry.hasOwnProperty(key)) {
                        activeRegistry[key].deactivate()
                    }
                }
                this.setPosition();
                this.isActive = true;
                activeRegistry[this.id] = this;
                $(this.options.footerSelector).css("z-index", 6e3);
                this.$target.removeClass("inactive");
                this.$target.addClass("active");
                this.$trigger.addClass("active")
            },
            deactivate: function() {
                this.isActive = false;
                delete activeRegistry[this.id];
                if (this.$target.hasClass("active")) {
                    setTimeout(function() {
                        $(this.options.footerSelector).css("z-index", 6001)
                    }.bind(this), 110);
                    this.$target.removeClass("active");
                    this.$target.addClass("inactive");
                    this.$trigger.removeClass("active")
                }
                this.destroyDocumentClickHandler()
            },
            setPosition: function() {
                var triggerOffset = this.$triggerIcon.offset();
                var triggerPos = this.$triggerIcon.position();
                var topDest = this.group.$container.position().top + triggerPos.top + this.options.verticalOffset;
                var topStart = topDest - this.options.verticalTravelDistance;
                var targetWidth = this.$target.width();
                var left = triggerOffset.left - targetWidth / 2 - this.options.horizontalOffset;
                if (this.isActive || !this.options.isAnimated) {
                    this.$target.css({
                        top: topDest,
                        left: left
                    })
                } else {
                    this.$target.css({
                        top: topStart,
                        left: left
                    })
                }
            },
            beforeInit: function() {
                return true
            }
        };
        return Dropdown
    });
    define("libra/navigation/cookie-manager", [], function() {
        "use strict";

        function CookieManager(name) {
            this.name = name;
            this.exists = false;
            this.rawValue = null;
            this.value = null;
            this.domain = null;
            this.expireSeconds = 86400;
            if (document.cookie.length && document.cookie.indexOf(this.name) !== -1) {
                this.exists = true
            }
        }
        CookieManager.prototype = {
            read: function() {
                var found = false;
                if (document.cookie.length) {
                    var cookieStart = document.cookie.indexOf(this.name);
                    if (cookieStart !== -1) {
                        found = true;
                        var valueStart = cookieStart + this.name.length + 1;
                        var cookieEnd = document.cookie.indexOf(";", valueStart);
                        if (cookieEnd === -1) {
                            cookieEnd = document.cookie.length
                        }
                        this.rawValue = document.cookie.substring(valueStart, cookieEnd)
                    }
                }
                if (!found) {
                    this.exists = false
                }
            },
            write: function() {
                var options = {};
                options.value = this.name + "=" + this.rawValue;
                var expiresDate = new Date;
                expiresDate.setSeconds(expiresDate.getSeconds() + this.expireSeconds);
                options.expires = "; expires=" + expiresDate.toUTCString();
                options.path = "; path=/";
                var domain = this.domain || this.getCurrentHostname();
                domain = document.location.hostname === "localhost" ? "" : domain;
                options.domain = "; domain=" + domain;
                document.cookie = [options.value, options.expires, options.path, options.domain].join("");
                this.exists = true
            },
            getCurrentHostname: function() {
                var hostname = document.location.hostname;
                var periodCount = hostname.split(".").length - 1;
                if (periodCount > 2) {
                    var lastIndex = 0;
                    var unneededPeriods = periodCount - 2;
                    for (var i = 0, len = unneededPeriods; i < len; i++) {
                        lastIndex = hostname.indexOf(".", lastIndex + 1)
                    }
                    hostname = hostname.substring(lastIndex + 1)
                }
                hostname = hostname === "localhost" ? "" : hostname;
                return hostname
            }
        };
        return CookieManager
    });
    define("libra/navigation/utils/language-utils", ["libra/navigation/cookie-manager", "librastandardlib/url-utils/getQueryStringParam", "librastandardlib/url-utils/updateQueryStringParam"], function(CookieManager, getQueryStringParam, updateQueryStringParam) {
        "use strict";
        var LanguageUtils = {
            languageCookieName: "aws_lang",
            searchQueryKey: "searchQuery",
            addCurrentPathnameToLanguageLinks: function(selector) {
                var langLinks = $(selector).find("li[data-language]");
                var origin = window.location.protocol + "//" + window.location.host;
                var pathname = window.location.pathname || "/";
                var hash = "";
                var searchQueryVal = getQueryStringParam(this.searchQueryKey, window.location.search);
                if (searchQueryVal !== "") {
                    hash = window.location.hash
                }
                for (var i = 0, len = langLinks.length; i < len; i++) {
                    var $langLink = $(langLinks[i]);
                    var linkUrl = $langLink.find("a").attr("href");
                    var linkQueryString = "";
                    var parts = linkUrl.split("?");
                    if (parts.length > 1) {
                        var hashParts = parts[1].split("#");
                        linkQueryString = "?" + hashParts[0]
                    }
                    if (searchQueryVal !== "") {
                        linkQueryString = updateQueryStringParam(linkQueryString, this.searchQueryKey, searchQueryVal)
                    }
                    var langCode = $langLink.attr("data-language");
                    if (langCode !== "") {
                        var found = false;
                        var j = 0;
                        var len2 = this.options.supportedLanguages.length;
                        while (!found && j < len2) {
                            var codeInPath = "/" + this.options.supportedLanguages[j] + "/";
                            var idx = pathname.indexOf(codeInPath);
                            if (idx === 0) {
                                pathname = pathname.substr(3, pathname.length);
                                found = true
                            }
                            j++
                        }
                        var newUrl;
                        if (langCode === this.options.defaultLanguage) {
                            newUrl = origin + pathname + linkQueryString + hash
                        } else {
                            newUrl = origin + "/" + langCode + pathname + linkQueryString + hash
                        }
                        $langLink.find("a").attr("href", newUrl)
                    }
                }
            },
            bindPreferredLanguageSelectionEvent: function(selector) {
                var that = this;
                $(selector).on("click", "li[data-language] a", function() {
                    that.setLanguageCookie($(this).data("language"));
                    that.addCurrentPathnameToLanguageLinks($(selector))
                })
            },
            setLanguageCookie: function(val) {
                var parentDomain = "." + window.location.hostname.split(".").slice(-2).join(".");
                var langCookie = new CookieManager(this.languageCookieName);
                langCookie.rawValue = val;
                langCookie.expireSeconds = 2592e3;
                langCookie.domain = parentDomain;
                langCookie.write()
            },
            removeUnsupportedLanguages: function(languageLinkSelector) {
                var $languageLinkContainer = $(languageLinkSelector);
                var langLinks = $languageLinkContainer.find("li[data-language]");
                for (var i = 0, len = langLinks.length; i < len; i++) {
                    var $langLink = $(langLinks[i]);
                    var langCode = $langLink.data("language");
                    if ($.inArray(langCode, this.options.supportedLanguages) === -1) {
                        $langLink.remove()
                    }
                }
            }
        };
        return LanguageUtils
    });
    define("libra/navigation/language-dropdown-mixin", ["libra/navigation/utils/language-utils"], function(LanguageUtils) {
        "use strict";
        var LanguageDropdownMixin = {
            languageDropdownSelector: "#aws-nav-dropdown-lang",
            hasAlternateLanguages: true,
            beforeInit: function() {
                $.extend(this, LanguageUtils);
                this.removeUnsupportedLanguages(this.languageDropdownSelector);
                this.removeCurrentLanguage();
                if (!this.hasAlternateLanguages) {
                    return false
                }
                this.addCurrentPathnameToLanguageLinks(this.languageDropdownSelector);
                this.bindPreferredLanguageSelectionEvent(this.languageDropdownSelector);
                return true
            },
            removeCurrentLanguage: function() {
                var currentLanguage = this.$trigger.data("language");
                var $languageDropdown = $(this.languageDropdownSelector);
                var langLinks = $languageDropdown.find("li[data-language]");
                var i = 0;
                var len = langLinks.length;
                var linksRemaining = langLinks.length;
                while (i < len) {
                    var $langLink = $(langLinks[i]);
                    var langCode = $langLink.data("language");
                    if (langCode === currentLanguage) {
                        $langLink.remove();
                        linksRemaining--
                    }
                    i++
                }
                if (linksRemaining <= 0) {
                    this.$trigger.remove();
                    $languageDropdown.remove();
                    this.hasAlternateLanguages = false
                }
            }
        };
        return LanguageDropdownMixin
    });
    define("libra/navigation/megamenu-mixin", ["libra/navigation/utils/navigation-utils"], function(Util) {
        "use strict";
        var MegamenuMixin = {
            megamenuWidthThreshold: 1260,
            horizontalOffset: 114,
            arrowOffset: 3,
            leftWindowPadding: 20,
            rightWindowPadding: 30,
            beforeInit: function() {
                if (Util.isLikelyMobile()) {
                    return false
                }
                this.doOnWidthThreshold();
                this.watchResize();
                return true
            },
            watchResize: function() {
                var resizeEventName = "resize." + this.jQueryEventNamespace + "_deactivate-megamenu";
                Util.debounceWindowEvent(this.doOnWidthThreshold, resizeEventName, 40, this)
            },
            doOnWidthThreshold: function() {
                if ($(window).width() < this.megamenuWidthThreshold) {
                    if (this.isActive) {
                        this.deactivate()
                    }
                    this.isEnabled = false;
                    if (this.$trigger.hasClass("enabled")) {
                        this.$trigger.removeClass("enabled");
                        this.$trigger.find("a").attr("data-mbox-ignore", "false")
                    }
                } else {
                    this.isEnabled = true;
                    if (!this.$trigger.hasClass("enabled")) {
                        this.$trigger.addClass("enabled");
                        this.$trigger.find("a").attr("data-mbox-ignore", "true")
                    }
                }
            },
            setPosition: function() {
                var triggerOffset = this.$triggerIcon.offset();
                var triggerPos = this.$triggerIcon.position();
                var triggerLeft = triggerOffset.left;
                var dropdownWidth = this.$target.outerWidth();
                var topDest = this.group.$container.position().top + triggerPos.top + this.options.verticalOffset;
                var topStart = topDest - this.options.verticalTravelDistance;
                var leftDest = triggerLeft - this.horizontalOffset;
                var maxLeft = $(window).width() - this.rightWindowPadding - dropdownWidth;
                if (leftDest > maxLeft) {
                    leftDest = maxLeft
                }
                var minLeft = this.leftWindowPadding;
                if (leftDest < minLeft) {
                    leftDest = minLeft
                }
                var leftArrowDest = triggerLeft - leftDest + this.arrowOffset;
                this.$target.find(".aws-nav-popover-arrow").css("left", leftArrowDest);
                this.$target.find(".aws-nav-popover-arrow-inner").css("left", leftArrowDest);
                if (this.isActive || !this.options.isAnimated) {
                    this.$target.css({
                        top: topDest,
                        left: leftDest
                    })
                } else {
                    this.$target.css({
                        top: topStart,
                        left: leftDest
                    })
                }
            }
        };
        return MegamenuMixin
    });
    define("libra/navigation/dropdown-group", ["libra/navigation/dropdown", "libra/navigation/language-dropdown-mixin", "libra/navigation/megamenu-mixin"], function(Dropdown, LanguageDropdownMixin, MegamenuMixin) {
        "use strict";
        var DropdownGroup = {
            defaults: {
                isTouchOnly: false,
                isAnimated: true
            },
            init: function($container, options) {
                this.options = $.extend({}, this.defaults, options);
                this.$container = $container;
                var triggers = this.$container.find("[data-dropdown]");
                for (var i = 0, len = triggers.length; i < len; i++) {
                    var id = $(triggers[i]).data("dropdown");
                    var dropdown = new Dropdown(triggers[i], this, this.options);
                    if (id === "aws-nav-dropdown-lang") {
                        $.extend(dropdown, LanguageDropdownMixin)
                    } else if ($("#" + id).hasClass("aws-nav-megamenu")) {
                        $.extend(dropdown, MegamenuMixin)
                    }
                    dropdown.init()
                }
                return this
            }
        };
        return DropdownGroup
    });
    define("libra/navigation/quick-links", ["librastandardlib/event-utils/polling-registrar", "librastandardlib/logger/logger", "librastandardlib/url-utils/getQueryStringParam", "libra/navigation/dropdown-group", "libra/navigation/utils/navigation-utils"], function(PollingRegistrar, Logger, getQueryStringParam, DropdownGroup, Util) {
        "use strict";
        var METRIC_ID_QSP_KEY = "awsm";
        var METRIC_ID_QSP_VALUE = "ql";
        var defaults = {
            quicklinksSelector: "#aws-nav-quicklinks",
            quicklinksOverflowSelector: "#aws-nav-quicklinks-overflow",
            quicklinksSeparator: "#aws-nav-quicklinks-separator",
            quicklinkSelector: ".aws-nav-quicklink",
            quicklinksDropdownListSelector: "#aws-nav-dropdown-quicklinks ul",
            headerRightSelector: "#aws-nav-header-right",
            jQueryEventNamespace: "aws_nav-quicklinks",
            quicklinksDropdownTriggerWidth: 85,
            availableWidthCorrection: 18
        };
        var isQuicklinksShown = false;
        var logger = new Logger("AWSNav");

        function QuicklinksController($container, options) {
            this.options = $.extend({}, defaults, options);
            this.$container = $container;
            this.quicklinks = [];
            this.quicklinksInDropdown = [];
            this.linkWidths = [];
            this.leftBound = null;
            this.$quicklinksContainer = this.$container.find(this.options.quicklinksSelector);
            this.$quicklinksOverflow = this.$container.find(this.options.quicklinksOverflowSelector);
            this.$quicklinksSeparator = this.$container.find(this.options.quicklinksSeparator);
            this.$headerRight = this.$container.find(this.options.headerRightSelector);
            this.logOnQuicklinkParam();
            var that = this;
            var pollingTimeout = 4e3;
            var pollingInterval = 100;
            var additionalRenderingTime = 300;
            PollingRegistrar.register(function() {
                that.$quicklinksContainer = that.$container.find(that.options.quicklinksSelector);
                if (that.$quicklinksContainer.length) {
                    setTimeout(function() {
                        that.init()
                    }, additionalRenderingTime);
                    return true
                }
            }, function() {}, function() {}, pollingTimeout, pollingInterval)
        }
        QuicklinksController.prototype = {
            init: function() {
                this.updateLinksWithMetricIdentifier();
                this.copyAllLinksToDropdown();
                this.getAreaDimensions();
                this.updatePositions();
                this.watchResize();
                this.pollForHeaderRightWidthChange();
                DropdownGroup.init(this.$container, this.options)
            },
            logOnQuicklinkParam: function() {
                if (getQueryStringParam(METRIC_ID_QSP_KEY, window.location.search).indexOf(METRIC_ID_QSP_VALUE) === 0) {
                    logger.debug("awsm_:comp_nav_QuicklinkClick", "AI")
                }
            },
            updateLinksWithMetricIdentifier: function() {
                this.$quicklinksContainer.find("a").each(function(idx, a) {
                    var str = [encodeURIComponent(METRIC_ID_QSP_KEY), encodeURIComponent(METRIC_ID_QSP_VALUE + "-" + idx)].join("=");
                    var $a = $(a);
                    var url = $a.attr("href");
                    var separator = url.indexOf("?") === -1 ? "?" : "&";
                    url += separator + str;
                    $a.attr("href", url)
                })
            },
            watchResize: function() {
                Util.debounceWindowEvent(function() {
                    this.updatePositions()
                }, "resize." + this.options.jQueryEventNamespace, 20, this)
            },
            pollForHeaderRightWidthChange: function() {
                var that = this;
                var pollingTimeout = 2e3;
                var pollingInterval = 100;
                var lastWidth = this.$headerRight.outerWidth(true);
                PollingRegistrar.register(function() {
                    if (that.$headerRight.outerWidth(true) !== lastWidth) {
                        return true
                    }
                }, function() {
                    that.updatePositions()
                }, function() {}, pollingTimeout, pollingInterval)
            },
            updatePositions: function() {
                var constrainWidth = $(window).width() - this.leftBound - this.$headerRight.outerWidth(true);
                this.$quicklinksContainer.width(constrainWidth);
                var availableWidth = constrainWidth - this.options.quicklinksDropdownTriggerWidth - this.options.availableWidthCorrection;
                var totalWidth = 0;
                var hasOverflowed = false;
                var overflowedAtIdx = -1;
                for (var i = 0, len = this.quicklinks.length; i < len; i++) {
                    totalWidth += this.linkWidths[i];
                    if (totalWidth > availableWidth) {
                        this.hideLink(i);
                        hasOverflowed = true;
                        if (overflowedAtIdx === -1) {
                            overflowedAtIdx = i
                        }
                    } else {
                        this.showLink(i)
                    }
                }
                if (hasOverflowed && overflowedAtIdx !== 0) {
                    this.$quicklinksOverflow.css("visibility", "visible")
                } else {
                    this.$quicklinksOverflow.css("visibility", "hidden")
                }
                if (!isQuicklinksShown) {
                    this.$quicklinksContainer.css("visibility", "visible");
                    if (this.quicklinks.length) {
                        this.$quicklinksSeparator.css("visibility", "visible")
                    }
                    isQuicklinksShown = true
                }
            },
            showLink: function(idx) {
                $(this.quicklinks).eq(idx).show();
                var that = this;
                setTimeout(function() {
                    $(that.quicklinksInDropdown).eq(idx).hide()
                }, 0)
            },
            hideLink: function(idx) {
                $(this.quicklinks).eq(idx).hide();
                var that = this;
                setTimeout(function() {
                    $(that.quicklinksInDropdown).eq(idx).show()
                }, 0)
            },
            copyAllLinksToDropdown: function() {
                this.$container.find(this.options.quicklinksDropdownListSelector).empty();
                this.quicklinks = this.$quicklinksContainer.find(this.options.quicklinkSelector);
                for (var i = 0, len = this.quicklinks.length; i < len; i++) {
                    var $quicklink = $(this.quicklinks[i]);
                    this.$container.find(this.options.quicklinksDropdownListSelector).append($('<li><a href="' + $quicklink.children().first().attr("href") + '">' + $quicklink.children().first().html() + "</a></li>"))
                }
                this.quicklinksInDropdown = this.$container.find(this.options.quicklinksDropdownListSelector + " li")
            },
            getAreaDimensions: function() {
                this.leftBound = this.$quicklinksContainer.offset().left;
                this.linkWidths.length = 0;
                this.quicklinks = this.$quicklinksContainer.find(this.options.quicklinkSelector);
                for (var i = 0, len = this.quicklinks.length; i < len; i++) {
                    var $quicklink = $(this.quicklinks[i]);
                    var quicklinkClientRect = this.quicklinks[i].getBoundingClientRect();
                    this.linkWidths[this.linkWidths.length] = "width" in quicklinkClientRect ? Math.ceil(quicklinkClientRect.width) : $quicklink.outerWidth()
                }
            }
        };
        return QuicklinksController
    });
    define("libra/navigation/popover", ["libra/navigation/cookie-manager", "libra/navigation/utils/navigation-utils"], function(CookieManager, Util) {
        "use strict";
        var PopoverController = {
            defaults: {
                isAnimated: true
            },
            init: function($container, options) {
                this.options = $.extend({}, this.defaults, options);
                this.$container = $container;
                new Popover($('.aws-nav-popover[data-popover-anchor="aws-nav-flyout-trigger"]'), this.$container, this.options);
                return this
            }
        };
        var defaults = {
            popoverSelector: ".aws-nav-popover",
            closeButtonSelector: ".aws-nav-popover-close",
            jQueryEventNamespace: "aws_nav-popover",
            isAnimated: true,
            fadeInDuration: 140,
            fadeOutDuration: 90,
            startingOpacity: .1,
            visualArrowWidth: 8,
            verticalOffset: 8,
            arrowHorizontalOffset: 20,
            waitToShowDuration: 600,
            closeOnDocumentClick: true,
            autoCloseDuration: false,
            onlyFirstVisit: false,
            firstVisitDuration: 2592e3
        };
        var instantiationCount = 0;
        var firstVisitCookieExists = null;

        function Popover(el, $container, options) {
            this.options = $.extend({}, defaults, options);
            this.instantiationId = instantiationCount;
            instantiationCount++;
            this.$el = $(el);
            this.popoverAnchorId = this.$el.attr("data-popover-anchor");
            this.$anchor = $container.find("#" + this.popoverAnchorId);
            $.extend(this.options, this.$el.data());
            if (this.$anchor.length === 1) {
                if (this.showOnLoad()) {
                    this.init()
                }
            }
        }
        Popover.prototype = {
            init: function() {
                this.setPosition();
                this.bindCloseButtonEvent();
                var that = this;
                setTimeout(function() {
                    that.activate()
                }, this.options.waitToShowDuration);
                if (this.options.closeOnDocumentClick) {
                    this.bindDocumentClickHandler()
                }
                this.listenForCloseEvent()
            },
            bindCloseButtonEvent: function() {
                var that = this;
                this.$el.find(this.options.closeButtonSelector).on("click", function() {
                    that.deactivate()
                })
            },
            bindWindowResizeEvent: function() {
                var that = this;
                Util.debounceWindowEvent(function() {
                    that.setPosition();
                    setTimeout(function() {
                        that.setPosition()
                    }, 300)
                }, "resize." + this.options.jQueryEventNamespace + "_" + this.instantiationId, 20, this)
            },
            destroyWindowResizeEvent: function() {
                $(window).off("resize." + this.options.jQueryEventNamespace + "_" + this.instantiationId)
            },
            bindDocumentClickHandler: function() {
                var eventNames = [];
                if ("ontouchstart" in window) {
                    eventNames.push("touchstart." + this.options.jQueryEventNamespace + "_" + this.instantiationId)
                }
                eventNames.push("click." + this.options.jQueryEventNamespace + "_" + this.instantiationId);
                var that = this;
                $(document).on(eventNames.join(" "), function(event) {
                    if (!$(event.target).closest(that.options.popoverSelector).length) {
                        for (var i = 0, len = eventNames.length; i < len; i++) {
                            $(document).off(eventNames[i])
                        }
                        that.deactivate()
                    }
                })
            },
            listenForCloseEvent: function() {
                var that = this;
                var eventName = "custom_" + this.options.jQueryEventNamespace + "_close_" + this.popoverAnchorId;
                $(document).on(eventName, function() {
                    that.deactivate();
                    $(document).off(eventName)
                })
            },
            activate: function() {
                if (this.options.isAnimated) {
                    this.$el.css({
                        opacity: this.options.startingOpacity,
                        visibility: "visible"
                    }).animate({
                        opacity: 1
                    }, {
                        duration: this.options.fadeInDuration
                    })
                } else {
                    this.$el.css({
                        opacity: 1,
                        visibility: "visible"
                    })
                }
                if (this.options.autoCloseDuration) {
                    var that = this;
                    setTimeout(function() {
                        that.deactivate()
                    }, this.options.autoCloseDuration)
                } else {
                    this.bindWindowResizeEvent()
                }
            },
            deactivate: function() {
                if (this.options.isAnimated) {
                    this.$el.fadeOut(this.options.fadeOutDuration, function() {
                        $(this).css({
                            visibility: "hidden",
                            display: "block",
                            top: 0,
                            left: 0
                        })
                    })
                } else {
                    this.$el.css({
                        visibility: "hidden",
                        top: 0,
                        left: 0
                    })
                }
                this.destroyWindowResizeEvent()
            },
            setPosition: function() {
                var anchorPos = this.$anchor.offset();
                var anchorWidth = this.$anchor.outerWidth();
                var anchorHeight = this.$anchor.outerHeight();
                var anchorMiddlePos = anchorPos.left + anchorWidth / 2;
                var popoverWidth = this.$el.outerWidth();
                var popoverPos = this.$el.offset();
                var popoverTopMiddleArrowPos = popoverPos.left + popoverWidth / 2;
                var leftDestOfAnchorHavingTopMiddleArrow = anchorMiddlePos - (popoverTopMiddleArrowPos - popoverPos.left);
                var popoverTopLeftArrowPos = popoverPos.left + this.options.arrowHorizontalOffset;
                var leftDestOfAnchorHavingTopLeftArrow = anchorMiddlePos - (popoverTopLeftArrowPos - popoverPos.left + this.options.visualArrowWidth);
                var popoverTopRightArrowPos = popoverPos.left + popoverWidth - this.options.arrowHorizontalOffset;
                var leftDestOfAnchorHavingTopRightArrow = anchorMiddlePos - (popoverTopRightArrowPos - popoverPos.left - this.options.visualArrowWidth);
                var leftDest = leftDestOfAnchorHavingTopMiddleArrow;
                var navHeaderMargin = 0;
                if (leftDestOfAnchorHavingTopMiddleArrow < navHeaderMargin) {
                    this.$el.addClass("aws-top-left");
                    leftDest = leftDestOfAnchorHavingTopLeftArrow
                } else if (leftDestOfAnchorHavingTopMiddleArrow + popoverWidth > $(window).width() - navHeaderMargin) {
                    this.$el.addClass("aws-top-right");
                    leftDest = leftDestOfAnchorHavingTopRightArrow
                }
                this.$el.css({
                    top: anchorPos.top + anchorHeight + this.options.verticalOffset,
                    left: leftDest
                })
            },
            showOnLoad: function() {
                if (this.options.onlyFirstVisit) {
                    if (!this.isFirstTimeVisitor()) {
                        return false
                    }
                }
                return true
            },
            isFirstTimeVisitor: function() {
                if (firstVisitCookieExists === null) {
                    var visitorCookie = new CookieManager("aws-first-visit-2");
                    firstVisitCookieExists = visitorCookie.exists;
                    visitorCookie.domain = "." + window.location.hostname;
                    visitorCookie.expireSeconds = this.options.firstVisitDuration;
                    visitorCookie.rawValue = "0";
                    visitorCookie.write()
                }
                return !firstVisitCookieExists
            }
        };
        return PopoverController
    });
    define("libra/navigation/mouse-tracker", [], function() {
        "use strict";
        var regions = [],
            n = 3,
            cursor = [{
                x: 0,
                y: 0
            }],
            c = 0,
            listening = false;
        var callbackArgs = function() {
            var pCursors = [];
            for (var i = 1; i < n; i++) {
                pCursors.push(cursor[(c - i + n) % n])
            }
            return $.extend(true, {}, {
                cursor: cursor[c],
                priorCursors: pCursors
            })
        };
        var check = function(immediately) {
            for (var i = 0; i < regions.length; i++) {
                var r = regions[i];
                var inside = $.grep(r.rects, function(j) {
                    return cursor[c].x >= j[0] && cursor[c].y >= j[1] && cursor[c].x < j[0] + j[2] && cursor[c].y < j[1] + j[3]
                }).length > 0;
                if (r.inside !== null && inside && !r.inside && r.mouseEnter) {
                    r.inside = r.mouseEnter(callbackArgs())
                } else if (r.inside !== null && !inside && r.inside && r.mouseLeave) {
                    r.inside = !r.mouseLeave(immediately, callbackArgs())
                }
            }
        };
        var startListening = function() {
            $(document).mousemove(function(e) {
                c = (c + 1) % n;
                cursor[c] = {
                    x: e.pageX,
                    y: e.pageY
                };
                check()
            });
            listening = true
        };
        return {
            add: function(rectsArray, options) {
                if (!listening) {
                    startListening()
                }
                var r = $.extend({
                    rects: rectsArray
                }, options);
                regions.push(r);
                return r
            },
            remove: function(region) {
                for (var i = 0; i < regions.length; i++) {
                    if (regions[i] === region) {
                        regions.splice(i, 1);
                        return
                    }
                }
            },
            checkNow: function() {
                check(true)
            },
            getCallbackArgs: function() {
                return callbackArgs()
            }
        }
    });
    define("libra/navigation/calculate-delay", [], function() {
        "use strict";
        var mouseTrackerDefaults = {
            mouseTrackerMajorDelay: 220,
            mouseTrackerMinorDelay: 80
        };
        var cursorPosition = function(cursor, rect) {
            var h = "c",
                v = "c";
            if (cursor && rect) {
                if (cursor.x < rect.x1) {
                    h = "l"
                } else if (cursor.x > rect.x2) {
                    h = "r"
                }
                if (cursor.y < rect.y1) {
                    v = "t"
                } else if (cursor.y > rect.y2) {
                    v = "b"
                }
            }
            return v + h
        };
        var calculateDelay = function(args, rect) {
            var delay = 0,
                c = args.cursor,
                p1 = args.priorCursors[0] || {},
                p2 = args.priorCursors[1] || {};
            //    are limited to the pixel grid.  So, if that appears to be the case, wait a brief time instead of
            if (c.x === p1.x && Math.abs(c.y - p1.y) < 2 && c.x > p2.x) {
                delay = mouseTrackerDefaults.mouseTrackerMinorDelay
            } else {
                var r = rect,
                    pts = [c, p1];
                switch (cursorPosition(c, r)) {
                    case "tl":
                        pts.push({
                            x: r.x1,
                            y: r.y2
                        }, {
                            x: r.x2,
                            y: r.y1
                        });
                        break;
                    case "bl":
                        pts.push({
                            x: r.x1,
                            y: r.y1
                        }, {
                            x: r.x2,
                            y: r.y2
                        });
                        break;
                    case "cl":
                        pts.push({
                            x: r.x1,
                            y: r.y1
                        }, {
                            x: r.x1,
                            y: r.y2
                        });
                        break;
                    default:
                        pts.push({
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        });
                        delay = -1
                }
                if (delay === 0) {
                    var b0 = (pts[2].x - pts[1].x) * (pts[3].y - pts[1].y) - (pts[3].x - pts[1].x) * (pts[2].y - pts[1].y),
                        b1 = ((pts[2].x - pts[0].x) * (pts[3].y - pts[0].y) - (pts[3].x - pts[0].x) * (pts[2].y - pts[0].y)) / b0,
                        b2 = ((pts[3].x - pts[0].x) * (pts[1].y - pts[0].y) - (pts[1].x - pts[0].x) * (pts[3].y - pts[0].y)) / b0,
                        b3 = ((pts[1].x - pts[0].x) * (pts[2].y - pts[0].y) - (pts[2].x - pts[0].x) * (pts[1].y - pts[0].y)) / b0;
                    delay = b1 > 0 && b2 > 0 && b3 > 0 ? mouseTrackerDefaults.mouseTrackerMajorDelay : 0
                }
            }
            return delay
        };
        return calculateDelay
    });
    define("libra/navigation/flyout", ["libra/navigation/utils/navigation-utils", "libra/navigation/mouse-tracker", "libra/navigation/calculate-delay"], function(Util, MouseTracker, calculateDelay) {
        "use strict";
        var defaults = {
            isAnimated: true,
            isTouchOnly: false,
            expandDuration: 170,
            collapseDuration: 210,
            timeout: 280,
            triggerOuterHeight: 33,
            zIndexBase: 5900
        };
        var AnimatedState = {
            COLLAPSED: "x",
            COLLAPSING: "-",
            EXPANDED: "o",
            EXPANDING: "+"
        };

        function Flyout(triggerEl, group, options) {
            this.options = $.extend({}, defaults, options);
            this.$trigger = $(triggerEl);
            this.id = this.$trigger.attr("data-flyout");
            this.$target = $("#" + this.id);
            this.group = group;
            this.$container = this.$target.closest(this.group.options.flyoutPanelSelector);
            this.parent = null;
            this.level = null;
            this.state = AnimatedState.COLLAPSED;
            this.isMouseTrackerEnabled = false;
            this.clearTimeoutsOfDescendants = null;
            this.timeout = null
        }
        Flyout.prototype = {
            toggle: function() {
                switch (this.state) {
                    case AnimatedState.COLLAPSED:
                        this.expand();
                        break;
                    case AnimatedState.EXPANDED:
                        this.collapse();
                        break;
                    case AnimatedState.EXPANDING:
                        this.collapse();
                        break;
                    case AnimatedState.COLLAPSING:
                        this.expand();
                        break
                }
            },
            expand: function() {
                var i, len;
                if (this.parent.state === AnimatedState.COLLAPSED || this.parent.state === AnimatedState.COLLAPSING) {
                    return true
                }
                var siblings = this.siblings();
                this.giveZIndexPriority(siblings);
                var that = this;
                var newLeftPos = this.group.flyoutPanelLeftPositions[this.level];
                if (this.state === AnimatedState.EXPANDED || this.state === AnimatedState.EXPANDING) {
                    return true
                } else if (this.state === AnimatedState.COLLAPSING) {
                    this.state = AnimatedState.EXPANDING;
                    for (i = 0, len = siblings.length; i < len; i++) {
                        siblings[i].isMouseTrackerEnabled = false
                    }
                    this.$container.stop({
                        clearQueue: true
                    }).animate({
                        left: newLeftPos
                    }, {
                        duration: this.options.expandDuration,
                        done: function() {
                            if (that.state === AnimatedState.EXPANDING) {
                                that.state = AnimatedState.EXPANDED;
                                that.isMouseTrackerEnabled = true
                            }
                        }
                    });
                    this.$trigger.addClass("active");
                    return true
                }
                if (this.level === 0) {
                    this.group.onRootFlyoutActivation()
                }
                if (this.hasExpandedSiblings(siblings)) {
                    var activeChildrenOfActiveSiblings = this.activeChildrenOfActiveSiblings();
                    for (i = 0, len = activeChildrenOfActiveSiblings.length; i < len; i++) {
                        activeChildrenOfActiveSiblings[i].collapse()
                    }
                    this.state = AnimatedState.EXPANDED;
                    this.giveMouseTrackerPriority(siblings);
                    for (i = 0, len = siblings.length; i < len; i++) {
                        siblings[i].state = AnimatedState.COLLAPSED;
                        siblings[i].$trigger.removeClass("active");
                        siblings[i].$target[0].scrollTop = 0
                    }
                } else if (this.hasExpandingSiblings(siblings)) {
                    this.state = AnimatedState.EXPANDED;
                    this.giveMouseTrackerPriority(siblings);
                    for (i = 0, len = siblings.length; i < len; i++) {
                        siblings[i].state = AnimatedState.COLLAPSED;
                        siblings[i].$trigger.removeClass("active");
                        siblings[i].$target[0].scrollTop = 0
                    }
                } else if (this.hasCollapsingSiblings(siblings)) {
                    this.state = AnimatedState.EXPANDING;
                    for (i = 0, len = siblings.length; i < len; i++) {
                        siblings[i].state = AnimatedState.COLLAPSED;
                        siblings[i].$trigger.removeClass("active");
                        siblings[i].$target[0].scrollTop = 0
                    }
                    this.$container.stop({
                        clearQueue: true
                    }).animate({
                        left: newLeftPos
                    }, {
                        duration: this.options.expandDuration,
                        done: function() {
                            if (that.state === AnimatedState.EXPANDING) {
                                that.state = AnimatedState.EXPANDED;
                                that.isMouseTrackerEnabled = true
                            }
                        }
                    })
                } else {
                    if (this.options.isAnimated) {
                        this.state = AnimatedState.EXPANDING;
                        this.$container[0].style.left = this.group.flyoutPanelParentLeftPositions[this.level] + "px";
                        this.$container[0].style.visibility = "visible";
                        this.$container.animate({
                            left: newLeftPos
                        }, {
                            duration: this.options.expandDuration,
                            done: function() {
                                if (that.state === AnimatedState.EXPANDING) {
                                    that.state = AnimatedState.EXPANDED;
                                    that.isMouseTrackerEnabled = true
                                }
                            }
                        })
                    } else {
                        this.state = AnimatedState.EXPANDED;
                        this.$container[0].style.left = newLeftPos + "px";
                        this.$container[0].style.visibility = "visible";
                        that.isMouseTrackerEnabled = true
                    }
                }
                this.$trigger.addClass("active")
            },
            collapse: function() {
                var i, len;
                var that = this;
                var dfd = $.Deferred();
                var onCollapsed = function() {
                    that.state = AnimatedState.COLLAPSED;
                    that.$container[0].style.visibility = "hidden";
                    if (that.level === 0) {
                        that.group.onRootFlyoutDeactivation()
                    }
                    that.$target[0].scrollTop = 0;
                    dfd.resolve()
                };
                var onDone = function() {
                    if (that.state === AnimatedState.COLLAPSING) {
                        onCollapsed()
                    }
                };
                var onFail = function() {
                    dfd.reject()
                };
                if (this.state === AnimatedState.COLLAPSED || this.state === AnimatedState.COLLAPSING) {
                    return false
                } else if (this.state === AnimatedState.EXPANDING) {
                    this.state = AnimatedState.COLLAPSING;
                    this.isMouseTrackerEnabled = false;
                    this.$container.stop({
                        clearQueue: true
                    }).animate({
                        left: that.group.flyoutPanelParentLeftPositions[that.level]
                    }, {
                        duration: this.options.collapseDuration,
                        done: onDone,
                        fail: onFail
                    })
                } else if (this.state === AnimatedState.EXPANDED) {
                    this.state = AnimatedState.COLLAPSING;
                    this.isMouseTrackerEnabled = false;
                    var activeChildren = this.activeChildren();
                    if (this.options.isAnimated) {
                        var animations = [];
                        for (i = 0, len = activeChildren.length; i < len; i++) {
                            animations[animations.length] = function(j) {
                                return activeChildren[j].collapse()
                            }(i)
                        }
                        var childAnimation = {};
                        if (activeChildren.length) {
                            childAnimation = animations[0]
                        }
                        $.when(childAnimation).done(function() {
                            that.$container.animate({
                                left: that.group.flyoutPanelParentLeftPositions[that.level]
                            }, {
                                duration: that.options.collapseDuration,
                                done: onDone,
                                fail: onFail
                            })
                        })
                    } else {
                        for (i = 0, len = activeChildren.length; i < len; i++) {
                            activeChildren[i].collapse()
                        }
                        onCollapsed()
                    }
                }
                this.$trigger.removeClass("active");
                return dfd.promise()
            },
            setupMouseTrackers: function(viewportHeight) {
                var that = this;
                var x1 = this.group.flyoutPanelLeftPositions[this.level];
                var y1 = this.$target.offset().top;
                var destinationRect = {
                    x1: x1,
                    y1: y1,
                    x2: x1 + this.group.options.flyoutPanelWidths[this.level],
                    y2: y1 + viewportHeight
                };
                var leaveTarget = function() {
                    if (that.isMouseTrackerEnabled) {
                        that.inTarget = false;
                        that.group.clearTimeoutRegistry(that.level);
                        if (that.level === 1) {
                            that.clearTimeoutsOfDescendants = setTimeout(function() {
                                that.group.clearTimeoutRegistry(2)
                            }, 10)
                        }
                        that.group.timeoutRegistry[that.group.timeoutRegistry.length] = {
                            level: that.level,
                            fn: setTimeout(function() {
                                if (that.parent.inTarget) {
                                    that.collapse()
                                } else {
                                    that.group.clearTimeoutRegistry();
                                    that.group.rootFlyout.collapse()
                                }
                            }, that.options.timeout)
                        }
                    }
                };
                this.$container.on("mouseleave", leaveTarget);
                this.group.eventStack[this.group.eventStack.length] = {
                    obj: this.$container,
                    eventType: "mouseleave",
                    handler: leaveTarget
                };
                var enterTarget = function() {
                    if (that.state === AnimatedState.EXPANDED || that.state === AnimatedState.EXPANDING) {
                        that.inTarget = true;
                        that.group.clearTimeoutRegistry();
                        clearTimeout(that.group.rootFlyout.timeout)
                    }
                };
                this.$container.on("mouseenter", enterTarget);
                this.group.eventStack[this.group.eventStack.length] = {
                    obj: this.$container,
                    eventType: "mouseenter",
                    handler: enterTarget
                };
                var leaveTrigger = function() {
                    if (that.parent.isMouseTrackerEnabled) {
                        that.group.clearTimeoutRegistry(that.level);
                        that.group.timeoutRegistry[that.group.timeoutRegistry.length] = {
                            level: that.level,
                            fn: setTimeout(function() {
                                that.collapse()
                            }, that.options.timeout)
                        }
                    }
                };
                this.$trigger.on("mouseleave", leaveTrigger);
                this.group.eventStack[this.group.eventStack.length] = {
                    obj: this.$trigger,
                    eventType: "mouseleave",
                    handler: leaveTrigger
                };
                var enterTrigger = function(args) {
                    if (that.parent.isMouseTrackerEnabled) {
                        var delay = calculateDelay(args, destinationRect);
                        that.group.clearTimeoutRegistry(that.level);
                        clearTimeout(that.group.rootFlyout.clearTimeoutsOfDescendants);
                        clearTimeout(that.clearTimeoutsOfDescendants);
                        if (that.hasActiveSiblings()) {
                            that.group.timeoutRegistry[that.group.timeoutRegistry.length] = {
                                level: that.level,
                                fn: setTimeout(function() {
                                    that.expand()
                                }, delay)
                            }
                        } else {
                            that.expand()
                        }
                        return true
                    }
                };
                this.group.mouseTrackerRegistry[this.id] = MouseTracker.add([
                    [this.group.flyoutPanelLeftPositions[this.level - 1], this.$trigger.offset().top, this.group.options.flyoutPanelWidths[this.level - 1], this.options.triggerOuterHeight]
                ], {
                    inside: false,
                    mouseEnter: enterTrigger,
                    mouseLeave: function() {
                        return true
                    }
                })
            },
            siblings: function() {
                var tree = this.group.tree;
                var siblings = [];
                for (var key in tree) {
                    if (tree.hasOwnProperty(key)) {
                        var node = tree[key];
                        if (node.level === this.level) {
                            if (key !== this.id) {
                                siblings[siblings.length] = node
                            }
                        }
                    }
                }
                return siblings
            },
            children: function() {
                var tree = this.group.tree;
                var children = [];
                for (var key in tree) {
                    if (tree.hasOwnProperty(key)) {
                        var node = tree[key];
                        if (node.level === this.level + 1) {
                            children[children.length] = node
                        }
                    }
                }
                return children
            },
            descendants: function() {
                var tree = this.group.tree;
                var descendants = [];
                for (var key in tree) {
                    if (tree.hasOwnProperty(key)) {
                        var node = tree[key];
                        if (node.level > this.level) {
                            if (node.hasAncestor(this)) {
                                descendants[descendants.length] = node
                            }
                        }
                    }
                }
                return descendants
            },
            activeChildrenOfActiveSiblings: function() {
                var tree = this.group.tree;
                var children = [];
                for (var key in tree) {
                    if (tree.hasOwnProperty(key)) {
                        var node = tree[key];
                        if (node.level === this.level) {
                            if (node.state === AnimatedState.EXPANDED || node.state === AnimatedState.EXPANDING) {
                                children = children.concat(node.activeChildren())
                            }
                        }
                    }
                }
                return children
            },
            hasAncestor: function(possibleAncestor) {
                if (this.parent.id === possibleAncestor.id) {
                    return true
                } else if (this.parent.level === 0) {
                    return false
                }
                return this.parent.hasAncestor.call(this.parent, possibleAncestor)
            },
            hasExpandedSiblings: function(siblings) {
                siblings = siblings || this.siblings();
                var found = false;
                var i = 0;
                var len = siblings.length;
                while (!found && i < len) {
                    if (siblings[i].state === AnimatedState.EXPANDED) {
                        found = true
                    }
                    i++
                }
                return found
            },
            hasExpandingSiblings: function(siblings) {
                siblings = siblings || this.siblings();
                var found = false;
                var i = 0;
                var len = siblings.length;
                while (!found && i < len) {
                    if (siblings[i].state === AnimatedState.EXPANDING) {
                        found = true
                    }
                    i++
                }
                return found
            },
            hasActiveSiblings: function(siblings) {
                siblings = siblings || this.siblings();
                var found = false;
                var i = 0;
                var len = siblings.length;
                while (!found && i < len) {
                    if (siblings[i].state === AnimatedState.EXPANDED || siblings[i].state === AnimatedState.EXPANDING) {
                        found = true
                    }
                    i++
                }
                return found
            },
            hasCollapsingSiblings: function(siblings) {
                siblings = siblings || this.siblings();
                var found = false;
                var i = 0;
                var len = siblings.length;
                while (!found && i < len) {
                    if (siblings[i].state === AnimatedState.COLLAPSING) {
                        found = true
                    }
                    i++
                }
                return found
            },
            activeChildren: function() {
                var children = this.children();
                var activeChildren = [];
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (child.state === AnimatedState.EXPANDED || child.state === AnimatedState.EXPANDING) {
                        activeChildren[activeChildren.length] = child
                    }
                }
                return activeChildren
            },
            setContainerZIndex: function() {
                this.$container[0].style.zIndex = this.options.zIndexBase - parseInt(this.level, 10) * 100
            },
            giveZIndexPriority: function(siblings) {
                var zIndexBase = this.options.zIndexBase - parseInt(this.level, 10) * 100;
                this.$target[0].style.zIndex = zIndexBase + siblings.length;
                for (var i = 0, len = siblings.length; i < len; i++) {
                    siblings[i].$target[0].style.zIndex = zIndexBase++
                }
            },
            giveMouseTrackerPriority: function(siblings) {
                for (var i = 0, len = siblings.length; i < len; i++) {
                    siblings[i].isMouseTrackerEnabled = false
                }
                this.isMouseTrackerEnabled = true
            }
        };
        return Flyout
    });
    define("libra/navigation/flyout-group", ["libra/navigation/utils/navigation-utils", "libra/navigation/mouse-tracker", "libra/navigation/calculate-delay", "libra/navigation/flyout", "librastandardlib/vendor/hoverintent/hoverIntent", "librastandardlib/event-utils/onWindowLoad"], function(Util, MouseTracker, calculateDelay, Flyout, hoverIntent, onWindowLoad) {
        "use strict";
        var defaults = {
            rootFlyoutTriggerSelector: "#aws-nav-flyout-trigger",
            searchfieldSelector: "#aws-nav-search",
            navSelector: "#aws-nav",
            footerSelector: "#aws-page-footer",
            flyoutPanelSelector: ".aws-nav-flyout",
            flyoutPanelContentSelector: ".aws-nav-flyout-content",
            jQueryEventNamespace: "aws_nav-flyout-group",
            isAnimated: true,
            isTouchOnly: false,
            hoverSensitivity: 7,
            hoverInterval: 50,
            mobileLayoutWidthThreshold: 768,
            flyoutPanelWidths: [281, 320, 320]
        };
        var buildTree = function(parent, tree, level) {
            if (tree === undefined) {
                tree = {};
                parent.parent = 0;
                parent.level = 0;
                tree[parent.id] = parent
            }
            level = level || 1;
            var triggers = parent.$target.find("a[data-flyout]");
            for (var i = 0, len = triggers.length; i < len; i++) {
                var flyout = new Flyout(triggers[i], this, this.options);
                flyout.parent = parent;
                flyout.level = level;
                tree[flyout.id] = flyout;
                buildTree.call(this, flyout, tree, level + 1)
            }
            return tree
        };
        var footerHeight = null;
        var headerHeight = null;
        var flyoutPanelElemsStyles = null;
        var $flyoutPanelContentElems = null;

        function FlyoutGroup($container, options) {
            this.options = $.extend({}, defaults, options);
            this.$container = $container;
            this.tree = {};
            this.rootFlyout = null;
            this.timeoutRegistry = [];
            this.eventStack = [];
            this.mouseTrackerRegistry = {};
            this.isFixedPositionLayout = true;
            this.flyoutsHavingEnabledMouseTrackersAtScrollTime = [];
            this.viewportHeightBeforeInputFocus = null;
            this.viewportHeightChangeAfterInputFocus = 0;
            this.footerZIndexFlyoutClosed = 6001;
            this.footerZIndexFlyoutOpen = 6004;
            this.$footer = $(this.options.footerSelector);
            this.flyoutPanelLeftPositions = [];
            this.flyoutPanelParentLeftPositions = [];
            this.calculateFlyoutPanelLeftPositions();
            this.init()
        }
        FlyoutGroup.prototype = {
            init: function() {
                this.rootFlyout = new Flyout(this.options.rootFlyoutTriggerSelector, this, this.options);
                this.tree = buildTree.call(this, this.rootFlyout);
                this.cacheHeaderHeight();
                this.cacheFooterHeight();
                if (Util.isLikelyMobile() || this.options.isTouchOnly) {
                    this.options.isTouchOnly = true;
                    this.bindTouchEvents();
                    if (Util.isLikelyMobile()) {
                        this.watchOrientationChangeEvent();
                        this.watchInputFocusEvents()
                    }
                } else {
                    this.bindTouchEvents();
                    this.bindHoverEventsOnRootFlyout()
                }
                var that = this;
                onWindowLoad(function() {
                    if ($(window).width > this.options.mobileLayoutWidthThreshold) {
                        this.resizeFlyoutHeights()
                    }
                }.bind(this));
                this.setContainerZIndexes();
                if (!Util.isLikelyMobile() || Util.isIPad()) {
                    this.$container.find(this.options.flyoutPanelSelector).addClass("opacity")
                }
                this.bindSearchfieldFocusEvent();
                if (Util.isLikelyMobile()) {
                    this.isFixedPositionLayout = false
                }
                if (this.isFixedPositionLayout) {
                    this.applyFixedPositioning()
                }
                setTimeout(function() {
                    var isAnimated = that.options.isAnimated;
                    that.options.isAnimated = false;
                    that.rootFlyout.collapse();
                    that.options.isAnimated = isAnimated
                }, 0)
            },
            bindHoverEventsOnRootFlyout: function() {
                var that = this;
                hoverIntent($(this.rootFlyout.$trigger)[0], function() {
                    clearTimeout(that.rootFlyout.timeout);
                    that.rootFlyout.expand()
                }, function() {}).options({
                    timeout: 0,
                    sensitivity: this.options.hoverSensitivity,
                    interval: this.options.hoverInterval
                });
                var leaveTarget = function() {
                    that.rootFlyout.inTarget = false;
                    that.rootFlyout.clearTimeoutsOfDescendants = setTimeout(function() {
                        that.clearTimeoutRegistry(1);
                        that.clearTimeoutRegistry(2)
                    }, 10);
                    that.rootFlyout.timeout = setTimeout(function() {
                        that.rootFlyout.collapse()
                    }, that.rootFlyout.options.timeout)
                };
                this.rootFlyout.$container.on("mouseleave", leaveTarget);
                var enterTarget = function() {
                    that.rootFlyout.inTarget = true;
                    clearTimeout(that.rootFlyout.timeout)
                };
                this.rootFlyout.$container.on("mouseenter", enterTarget);
                var leaveTrigger = function() {
                    that.rootFlyout.timeout = setTimeout(function() {
                        that.rootFlyout.collapse()
                    }, that.rootFlyout.options.timeout)
                };
                this.rootFlyout.$trigger.on("mouseleave", leaveTrigger);
                var enterTrigger = function() {
                    clearTimeout(that.rootFlyout.timeout);
                    clearTimeout(that.rootFlyout.clearTimeoutsOfDescendants)
                };
                this.rootFlyout.$trigger.on("mouseenter", enterTrigger)
            },
            bindTouchEvents: function() {
                var that = this;
                this.rootFlyout.$trigger.on("click", function() {
                    that.rootFlyout.toggle()
                });
                this.$container.find('a[data-flyout][href^="javascript"]').each(function() {
                    var flyout = that.findByTrigger(this);
                    flyout.$trigger.on("click", function() {
                        flyout.toggle()
                    })
                })
            },
            bindCloseRootFlyoutOnDocumentClickEvent: function() {
                var eventName;
                if ("ontouchstart" in window) {
                    eventName = "touchstart." + this.options.jQueryEventNamespace + "_close"
                } else {
                    eventName = "click." + this.options.jQueryEventNamespace + "_close"
                }
                var that = this;
                $(document).on(eventName, function(event) {
                    var $eventTarget = $(event.target);
                    if (!$eventTarget.closest(that.options.flyoutPanelSelector).length && !$eventTarget.closest(that.options.rootFlyoutTriggerSelector).length) {
                        $(document).off(eventName);
                        that.rootFlyout.collapse()
                    }
                })
            },
            destroyCloseRootFlyoutOnDocumentClickEvent: function() {
                $(document).off("click." + this.options.jQueryEventNamespace + "_close")
            },
            bindSearchfieldFocusEvent: function() {
                var $input = this.$container.find(this.options.searchfieldSelector + ' input[type="text"]');
                $input.on("focus", function() {
                    $(this).parent().addClass("active")
                }).on("blur", function() {
                    $(this).parent().removeClass("active")
                })
            },
            applyFixedPositioning: function() {
                $(this.options.flyoutPanelSelector).addClass("fixed");
                this.setFlyoutPanelTops()
            },
            watchScroll: function() {
                var that = this;
                $(window).on("scroll." + this.options.jQueryEventNamespace + "_watch-scroll", function() {
                    that.setFlyoutPanelTops()
                })
            },
            destroyWatchScroll: function() {
                $(window).off("scroll." + this.options.jQueryEventNamespace + "_watch-scroll")
            },
            watchScrollAtSmallDebouncedInterval: function() {
                var that = this;
                Util.debounceWindowEvent(function() {
                    for (var key in that.tree) {
                        if (that.tree.hasOwnProperty(key)) {
                            var node = that.tree[key];
                            if (node.isMouseTrackerEnabled) {
                                that.flyoutsHavingEnabledMouseTrackersAtScrollTime[that.flyoutsHavingEnabledMouseTrackersAtScrollTime.length] = node
                            }
                        }
                    }
                    that.tearDownAllMouseTrackers()
                }, "scroll." + this.options.jQueryEventNamespace + "_watch-small-scroll", 20, this)
            },
            destroyWatchScrollAtSmallDebouncedInterval: function() {
                $(window).off("scroll." + this.options.jQueryEventNamespace + "_watch-small-scroll")
            },
            watchScrollAtLargeDebouncedInterval: function() {
                var that = this;
                Util.debounceWindowEvent(function() {
                    that.setupAllMouseTrackers();
                    for (var i = 0, len = that.flyoutsHavingEnabledMouseTrackersAtScrollTime.length; i < len; i++) {
                        that.flyoutsHavingEnabledMouseTrackersAtScrollTime[i].isMouseTrackerEnabled = true
                    }
                    that.flyoutsHavingEnabledMouseTrackersAtScrollTime.length = 0
                }, "scroll." + this.options.jQueryEventNamespace + "_watch-large-scroll", 300, this)
            },
            destroyWatchScrollAtLargeDebouncedInterval: function() {
                $(window).off("scroll." + this.options.jQueryEventNamespace + "_watch-large-scroll")
            },
            watchResize: function() {
                Util.debounceWindowEvent(function() {
                    this.cacheHeaderHeight();
                    this.cacheFooterHeight();
                    this.resizeFlyoutHeights()
                }, "resize." + this.options.jQueryEventNamespace + "-watch_resize", 40, this)
            },
            destroyWatchResize: function() {
                $(window).off("resize." + this.options.jQueryEventNamespace + "-watch_resize")
            },
            watchOrientationChangeEvent: function() {
                this.options.viewportHeightBeforeInputFocus = $(window).height();
                var that = this;
                $(window).on("orientationchange." + this.options.jQueryEventNamespace, function() {
                    that.options.viewportHeightBeforeInputFocus = $(window).height();
                    that.rootFlyout.collapse()
                })
            },
            watchInputFocusEvents: function() {
                var that = this;
                $(':input[type="text"]').one("focus." + this.options.jQueryEventNamespace, function() {
                    that.viewportHeightChangeAfterInputFocus = that.viewportHeightBeforeInputFocus - $(window).height()
                })
            },
            onRootFlyoutActivation: function() {
                this.$footer.css("z-index", this.footerZIndexFlyoutOpen);
                this.cacheHeaderHeight();
                this.cacheFooterHeight();
                this.resizeFlyoutHeights();
                if (this.isFixedPositionLayout) {
                    this.setFlyoutPanelTops();
                    this.watchScroll()
                }
                this.watchResize();
                if (!this.options.isTouchOnly) {
                    this.setupAllMouseTrackers();
                    this.watchScrollAtSmallDebouncedInterval();
                    this.watchScrollAtLargeDebouncedInterval()
                }
                this.$container.trigger("custom_aws_nav-popover_close_aws-nav-flyout-trigger");
                this.$container.trigger("custom_aws_nav-dropdown_close");
                var $rootFlyout = $(this.options.flyoutPanelSelector + ".level-0");
                $rootFlyout.trigger("custom_aws_nav-flyout_before-root-open");
                setTimeout(function() {
                    $rootFlyout.trigger("custom_aws_nav-flyout_after-root-open")
                }, this.rootFlyout.options.expandDuration);
                this.bindCloseRootFlyoutOnDocumentClickEvent()
            },
            onRootFlyoutDeactivation: function() {
                this.$footer.css("z-index", this.footerZIndexFlyoutClosed);
                if (!this.options.isTouchOnly) {
                    this.tearDownAllMouseTrackers();
                    this.destroyWatchScrollAtSmallDebouncedInterval();
                    this.destroyWatchScrollAtLargeDebouncedInterval()
                }
                this.destroyWatchResize();
                if (this.isFixedPositionLayout) {
                    this.destroyWatchScroll()
                }
                if (Util.isLikelyMobile()) {
                    $(this.options.searchfieldSelector + ' input[type="text"]').blur();
                    window.scroll(0, 0)
                }
                this.destroyCloseRootFlyoutOnDocumentClickEvent()
            },
            clearTimeoutRegistry: function(level) {
                for (var i = 0, len = this.timeoutRegistry.length; i < len; i++) {
                    if (this.timeoutRegistry[i].level === level || typeof level === "undefined") {
                        clearTimeout(this.timeoutRegistry[i].fn)
                    }
                }
                if (typeof level === "undefined") {
                    this.timeoutRegistry.length = 0
                }
            },
            flushEventStack: function() {
                for (var i = 0, len = this.eventStack.length; i < len; i++) {
                    var event = this.eventStack[i];
                    event.obj.off(event.eventType, event.handler)
                }
                this.eventStack.length = 0
            },
            findByTrigger: function(el) {
                var $trigger = $(el);
                var id = $trigger.attr("data-flyout");
                return this.tree[id]
            },
            cacheHeaderHeight: function() {
                headerHeight = $(this.options.navSelector).height()
            },
            cacheFooterHeight: function() {
                if (this.$footer.length) {
                    footerHeight = $(document).height() - this.$footer.offset().top
                } else {
                    footerHeight = 0
                }
            },
            calculateFlyoutPanelLeftPositions: function() {
                var widths = this.options.flyoutPanelWidths;
                var leftPositions = [];
                var parentLeftPositions = [];
                var total = 0;
                leftPositions[leftPositions.length] = total;
                parentLeftPositions[parentLeftPositions.length] = -widths[0];
                parentLeftPositions[parentLeftPositions.length] = widths[0] - widths[1];
                for (var i = 0, len = widths.length - 1; i < len; i++) {
                    if (i !== 0) {
                        parentLeftPositions[parentLeftPositions.length] = total - (widths[i + 1] - widths[i])
                    }
                    total += widths[i];
                    leftPositions[leftPositions.length] = total
                }
                this.flyoutPanelLeftPositions = leftPositions;
                this.flyoutPanelParentLeftPositions = parentLeftPositions
            },
            setContainerZIndexes: function() {
                for (var node in this.tree) {
                    if (this.tree.hasOwnProperty(node)) {
                        this.tree[node].setContainerZIndex()
                    }
                }
            },
            setFlyoutPanelTops: function() {
                var $document = $(document);
                var documentHeight = $document.height();
                var scrollTop = $document.scrollTop();
                var viewportHeight = $(window).height();
                var i, len;
                var targetTop = headerHeight;
                if (flyoutPanelElemsStyles === null) {
                    var $flyoutPanelElems = $(this.options.flyoutPanelContentSelector);
                    flyoutPanelElemsStyles = [];
                    for (i = 0, len = $flyoutPanelElems.length; i < len; i++) {
                        flyoutPanelElemsStyles[flyoutPanelElemsStyles.length] = $flyoutPanelElems[i].style
                    }
                }
                if (targetTop !== null) {
                    for (i = 0, len = flyoutPanelElemsStyles.length; i < len; i++) {
                        flyoutPanelElemsStyles[i].top = targetTop + "px"
                    }
                    this.resizeFlyoutContentHeights(documentHeight, viewportHeight, scrollTop);
                    var that = this;
                    setTimeout(function() {
                        that.resizeFlyoutContentHeights()
                    }, 500)
                }
            },
            resizeFlyoutHeights: function() {
                var documentHeight = $(document).height();
                var viewportHeight = $(window).height();
                this.resizeFlyoutPanelHeights(documentHeight);
                this.resizeFlyoutContentHeights(documentHeight, viewportHeight)
            },
            resizeFlyoutPanelHeights: function(documentHeight) {
                var footerBottom = this.$footer.offset().top + this.$footer.height();
                var targetHeight = Math.min(footerBottom, documentHeight);
                $(this.options.flyoutPanelSelector).css({
                    height: targetHeight
                })
            },
            resizeFlyoutContentHeights: function(documentHeight, viewportHeight, scrollTop) {
                documentHeight = documentHeight || $(document).height();
                viewportHeight = viewportHeight || $(window).height();
                scrollTop = scrollTop || $(window).scrollTop();
                if (Util.isLikelyMobile()) {
                    this.viewportHeightBeforeInputFocus = viewportHeight
                }
                var ruleA, ruleB;
                var footerHeightOffset = this.getVisibleFooterHeight();
                ruleA = viewportHeight - headerHeight - footerHeightOffset;
                ruleB = documentHeight - headerHeight - footerHeight;
                if ($flyoutPanelContentElems === null) {
                    $flyoutPanelContentElems = $(this.options.flyoutPanelContentSelector)
                }
                $flyoutPanelContentElems.css({
                    height: Math.min(ruleA, ruleB)
                })
            },
            setupAllMouseTrackers: function() {
                var viewportHeight = $(window).height();
                var tree = this.tree;
                for (var key in tree) {
                    if (tree.hasOwnProperty(key)) {
                        var node = tree[key];
                        if (node !== this.rootFlyout) {
                            node.setupMouseTrackers(viewportHeight)
                        }
                    }
                }
            },
            tearDownAllMouseTrackers: function() {
                for (var id in this.mouseTrackerRegistry) {
                    if (this.mouseTrackerRegistry.hasOwnProperty(id)) {
                        MouseTracker.remove(this.mouseTrackerRegistry[id]);
                        delete this.mouseTrackerRegistry[id]
                    }
                }
                this.flushEventStack();
                var tree = this.tree;
                for (var key in tree) {
                    if (tree.hasOwnProperty(key)) {
                        tree[key].isMouseTrackerEnabled = false
                    }
                }
            },
            getVisibleFooterHeight: function() {
                var scrollTop = $(window).scrollTop();
                var scrollBottom = scrollTop + $(window).height();
                var footerTop = this.$footer.offset().top;
                var footerBottom = footerTop + this.$footer.outerHeight();
                var visibleTop = footerTop;
                var visibleBottom = footerBottom;
                if (footerTop < scrollTop) {
                    visibleTop = scrollTop
                }
                if (footerBottom > scrollBottom) {
                    visibleBottom = scrollBottom
                }
                if (visibleBottom - visibleTop > 0) {
                    return visibleBottom - visibleTop
                }
                return 0
            }
        };
        return FlyoutGroup
    });
    define("libra/navigation/navigation-mobile", [], function() {
        "use strict";
        var Util = {
            debounceWindowEvent: function(func, eventName, timeout, context) {
                var that = context || this;
                var count = 0;
                $(window).on(eventName, function() {
                    var id = ++count;
                    window.setTimeout(function() {
                        if (id === count) {
                            func.call(that)
                        }
                    }, timeout)
                })
            }
        };
        var defaults = {
            navMobileSelector: "#aws-nav-mobile",
            mobileDropdownSelector: ".aws-nav-mobile-dropdown",
            mobileDropdownMenuSelector: "#aws-nav-mobile-dropdown-menu",
            mobileDropdownMenuGroupSelector: ".aws-nav-mobile-menu-group",
            pageContentSelector: "#aws-page-content",
            headerSelector: "#aws-nav-mobile-header",
            footerSelector: "#aws-page-footer",
            searchFormSelector: "#aws-nav-mobile-dropdown-search form",
            subnavSelector: ".lb-sticky-subnav",
            jQueryEventNamespace: "aws-nav-mobile",
            menuItemShowDurationPerChild: 130,
            menuItemHideDuration: 160,
            hideActiveSiblings: true,
            mobileLayoutWidthThreshold: 768
        };

        function NavMobile() {
            var configOptions = typeof AWS.NavMobile !== "undefined" ? AWS.NavMobile : {};
            this.options = $.extend({}, defaults, configOptions);
            this.$el = $(this.options.navMobileSelector);
            if (!this.$el.length) {
                return
            }
            this.init()
        }
        NavMobile.prototype = {
            init: function() {
                if ($(window).width() > this.options.mobileLayoutWidthThreshold) {
                    this.isMobileLayoutActive = false
                } else {
                    this.isMobileLayoutActive = true;
                    this.bindDeactivateMobileLayoutResizeEvent()
                }
                this.bindDropdownEvents();
                this.bindMenuItemEvents();
                this.preventEmptySearch()
            },
            bindDropdownEvents: function() {
                var that = this;
                this.$el.find("div[data-dropdown]").each(function() {
                    var $this = $(this);
                    var id = $this.attr("data-dropdown");
                    var eventName = "click." + that.options.jQueryEventNamespace;
                    $this.on(eventName, function() {
                        var target = that.$el.find("#" + id);
                        that.toggleDropdown(this, target)
                    })
                })
            },
            bindMenuItemEvents: function() {
                var that = this;
                var eventName = "click." + that.options.jQueryEventNamespace;
                $(this.options.mobileDropdownMenuSelector).on(eventName, 'a[href^="javascript"]', function() {
                    var $this = $(this);
                    if ($this.next(that.options.mobileDropdownMenuGroupSelector).length) {
                        that.toggleMenuItem($this.parent())
                    }
                })
            },
            bindPageContentHeightResizeEvent: function() {
                var resizeEventName = "resize." + this.options.jQueryEventNamespace + "_page-content-height";
                Util.debounceWindowEvent(this.setPageContentHeightToActiveDropdownHeight, resizeEventName, 80, this)
            },
            destroyPageContentHeightResizeEvent: function() {
                var eventName = "resize." + this.options.jQueryEventNamespace + "_page-content-height";
                $(window).off(eventName)
            },
            bindDeactivateMobileLayoutResizeEvent: function() {
                var resizeEventName = "resize." + this.options.jQueryEventNamespace + "_deactivate-mobile-layout";
                Util.debounceWindowEvent(this.deactivateMobileLayout, resizeEventName, 40, this)
            },
            destroyDeactivateMobileLayoutResizeEvent: function() {
                var eventName = "resize." + this.options.jQueryEventNamespace + "_deactivate-mobile-layout";
                $(window).off(eventName)
            },
            toggleMenuItem: function(el) {
                var $el = $(el);
                if ($el.hasClass("expanded")) {
                    this.hideMenuItem(el)
                } else if ($el.hasClass("expanding")) {
                    this.hideMenuItem(el)
                } else if ($el.hasClass("collapsing")) {
                    this.showMenuItem(el)
                } else {
                    this.showMenuItem(el)
                }
            },
            showMenuItem: function(el) {
                var that = this;
                var $el = $(el);
                var $group = $el.children(this.options.mobileDropdownMenuGroupSelector).first();
                var groupLevel = $group.parentsUntil(this.options.navMobileSelector, this.options.mobileDropdownMenuGroupSelector).length + 1;
                $el.addClass("active expanding").removeClass("expanded collapsing");
                $el.parentsUntil(this.options.navMobileSelector, ".active").addClass("aws-has-active-children");
                var childLiCount = $group.find(".aws-link").filter(function(idx, elem) {
                    var elGroupLevel = $(elem).parentsUntil(that.options.navMobileSelector, that.options.mobileDropdownMenuGroupSelector).length;
                    if (groupLevel === elGroupLevel) {
                        return true
                    }
                    return false
                }).length;
                var duration = this.options.menuItemShowDurationPerChild * childLiCount * Math.pow(.88, childLiCount);
                duration = Math.ceil(duration);
                duration = Math.max(duration, 100);
                duration = Math.min(duration, 2e3);
                $group.slideToggle({
                    duration: duration,
                    done: function() {
                        if ($el.hasClass("expanding")) {
                            $el.addClass("expanded").removeClass("expanding")
                        }
                    }
                });
                if (this.options.hideActiveSiblings) {
                    $el.closest(this.options.mobileDropdownMenuGroupSelector).find(".aws-parent.active").not($el).each(function() {
                        that.hideMenuItemNow(this);
                        that.hideDescendantMenuItems(this)
                    })
                }
            },
            hideMenuItem: function(el) {
                var that = this;
                var $el = $(el);
                $el.addClass("collapsing").removeClass("expanded expanding");
                $el.children(this.options.mobileDropdownMenuGroupSelector).first().slideToggle({
                    duration: this.options.menuItemHideDuration,
                    done: function() {
                        if ($el.hasClass("collapsing")) {
                            $el.removeClass("active collapsing");
                            that.hideDescendantMenuItems(this);
                            if (!$el.closest(that.options.mobileDropdownMenuGroupSelector).closest(".aws-has-active-children").find(".aws-parent.active").length) {
                                $el.parentsUntil(that.options.navMobileSelector, ".aws-has-active-children").removeClass("aws-has-active-children")
                            }
                        }
                    }
                })
            },
            hideMenuItemNow: function(el) {
                var $el = $(el);
                $el.removeClass("active expanded expanding collapsing");
                $el.children(this.options.mobileDropdownMenuGroupSelector).hide();
                if (!$el.closest(this.options.mobileDropdownMenuGroupSelector).closest(".aws-has-active-children").find(".aws-parent.active").length) {
                    $el.parentsUntil(this.options.navMobileSelector, ".aws-has-active-children").removeClass("aws-has-active-children")
                }
            },
            hideDescendantMenuItems: function(el) {
                var that = this;
                $(el).find(".aws-parent.active").each(function() {
                    that.hideMenuItemNow(this)
                })
            },
            hideAllMenuItems: function() {
                var that = this;
                $(this.options.mobileDropdownMenuSelector).find(".aws-parent.active").each(function() {
                    that.hideMenuItemNow(this)
                })
            },
            getHeaderHeight: function() {
                var $header = $(this.options.headerSelector);
                var headerHeight = $header.outerHeight() + $header.offset().top;
                return headerHeight
            },
            toggleDropdown: function(el, target) {
                if ($(target).is(":visible")) {
                    this.hideDropdown(el, target)
                } else {
                    this.hideAllDropdowns();
                    this.showDropdown(el, target)
                }
            },
            showDropdown: function(el, target) {
                var $target = $(target);
                $(el).addClass("active");
                $target.css("top", this.getHeaderHeight());
                $target.show();
                this.hidePageContent();
                this.bindPageContentHeightResizeEvent();
                if (!this.isMobileLayoutActive) {
                    this.isMobileLayoutActive = true;
                    this.bindDeactivateMobileLayoutResizeEvent()
                }
            },
            hideDropdown: function(el, target) {
                $(el).removeClass("active");
                this.showPageContent();
                $(target).hide();
                var that = this;
                if ("#" + $(this).attr("id") === that.options.mobileDropdownMenuSelector) {
                    that.hideAllMenuItems()
                }
                this.destroyPageContentHeightResizeEvent()
            },
            hideAllDropdowns: function() {
                this.$el.find("div[data-dropdown]").each(function() {
                    var $this = $(this);
                    $this.removeClass("active");
                    var id = $this.attr("data-dropdown");
                    var $el = $("#" + id);
                    $el.hide()
                });
                this.hideAllMenuItems()
            },
            showPageContent: function() {
                $(this.options.footerSelector).show();
                $(this.options.pageContentSelector).css("height", "auto").css("overflow", "visible")
            },
            hidePageContent: function() {
                $(this.options.footerSelector).hide();
                this.setPageContentHeightToActiveDropdownHeight()
            },
            setPageContentHeightToActiveDropdownHeight: function() {
                var $activeDropdown = $(this.options.mobileDropdownSelector).filter(":visible");
                if ($activeDropdown.length) {
                    var dropdownHeight = $activeDropdown.height() - ($(this.options.headerSelector).outerHeight(true) - $(this.options.headerSelector).height());
                    if ($(this.options.subnavSelector).length > 0) {
                        dropdownHeight -= $(this.options.subnavSelector).outerHeight(true)
                    }
                    $(this.options.pageContentSelector).css("height", dropdownHeight).css("overflow", "hidden")
                }
                $(this.options.mobileDropdownSelector).css("top", this.getHeaderHeight())
            },
            deactivateMobileLayout: function() {
                if ($(window).width() > this.options.mobileLayoutWidthThreshold && this.isMobileLayoutActive) {
                    this.isMobileLayoutActive = false;
                    this.hideAllDropdowns();
                    this.showPageContent();
                    this.destroyDeactivateMobileLayoutResizeEvent()
                }
            },
            preventEmptySearch: function() {
                this.$el.on("submit", $(this.options.searchFormSelector), function(e) {
                    var $requiredFields = $(this).find("[data-aws-required]");
                    for (var i = 0, len = $requiredFields.length; i < len; i++) {
                        if ($requiredFields[i].value === "") {
                            e.preventDefault()
                        }
                    }
                })
            }
        };
        AWS.NavMobile = NavMobile;
        $(document).ready(function() {
            new NavMobile
        })
    });
    /*! modernizr 3.5.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-touchevents-setclasses !*/
    define("libra/vendor/modernizr", [], function() {
        ! function(e, n, t) {
            function o(e, n) {
                return typeof e === n
            }

            function s() {
                var e, n, t, s, a, i, r;
                for (var l in c)
                    if (c.hasOwnProperty(l)) {
                        if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                            for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                        for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"))
                    }
            }

            function a(e) {
                var n = u.className,
                    t = Modernizr._config.classPrefix || "";
                if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
                    var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                    n = n.replace(o, "$1" + t + "js$2")
                }
                Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n)
            }

            function i() {
                return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
            }

            function r() {
                var e = n.body;
                return e || (e = i(p ? "svg" : "body"), e.fake = !0), e
            }

            function l(e, t, o, s) {
                var a, l, f, c, d = "modernizr",
                    p = i("div"),
                    h = r();
                if (parseInt(o, 10))
                    for (; o--;) f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
                return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l
            }
            var f = [],
                c = [],
                d = {
                    _version: "3.5.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, n) {
                        var t = this;
                        setTimeout(function() {
                            n(t[e])
                        }, 0)
                    },
                    addTest: function(e, n, t) {
                        c.push({
                            name: e,
                            fn: n,
                            options: t
                        })
                    },
                    addAsyncTest: function(e) {
                        c.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                Modernizr = function() {};
            Modernizr.prototype = d, Modernizr = new Modernizr;
            var u = n.documentElement,
                p = "svg" === u.nodeName.toLowerCase(),
                h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            d._prefixes = h;
            var m = d.testStyles = l;
            Modernizr.addTest("touchevents", function() {
                var t;
                if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
                else {
                    var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    m(o, function(e) {
                        t = 9 === e.offsetTop
                    })
                }
                return t
            }), s(), a(f), delete d.addTest, delete d.addAsyncTest;
            for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
            e.Modernizr = Modernizr
        }(window, document)
    });
    define("libra/navigation/navigation", ["libra/navigation/utils/navigation-utils", "libra/navigation/quick-links", "libra/navigation/dropdown-group", "libra/footer/page-footer", "libra/navigation/popover", "libra/navigation/flyout-group", "librastandardlib/event-utils/onWindowLoad", "libra/navigation/navigation-mobile", "libra/vendor/modernizr"], function(Util, QuicklinksController, DropdownGroup, PageFooter, PopoverController, FlyoutGroup, onWindowLoad) {
        "use strict";
        var Nav = {
            defaults: {
                navSelector: "#aws-nav",
                animationsEnabled: true,
                forceTouch: false,
                supportedLanguages: ["en"],
                defaultLanguage: "en",
                searchFormSelector: "#aws-nav-search form"
            },
            init: function() {
                var configOptions = typeof AWS.Nav !== "undefined" ? AWS.Nav : {};
                this.options = $.extend({}, this.defaults, configOptions);
                this.$el = $(this.options.navSelector);
                if (!this.$el.length) {
                    return
                }
                if (AWS.PageSettings && AWS.PageSettings.supportedLanguages) {
                    this.options.supportedLanguages = AWS.PageSettings.supportedLanguages
                }
                if (AWS.PageSettings && AWS.PageSettings.defaultLanguage) {
                    this.options.defaultLanguage = AWS.PageSettings.defaultLanguage
                }
                this.isTouchOnly = this.options.forceTouch;
                if (Util.isLikelyMobile() && !Util.isIPad()) {
                    this.options.animationsEnabled = false
                }
                this.$el.on("submit", $(this.options.searchFormSelector), function(e) {
                    var $requiredFields = $(this).find("[data-aws-required]");
                    for (var i = 0, len = $requiredFields.length; i < len; i++) {
                        if ($requiredFields[i].value === "") {
                            e.preventDefault()
                        }
                    }
                });
                this.quicklinksController = new QuicklinksController(this.$el, {
                    isTouchOnly: this.isTouchOnly,
                    isAnimated: this.options.animationsEnabled,
                    supportedLanguages: this.options.supportedLanguages,
                    defaultLanguage: this.options.defaultLanguage
                });
                this.dropdownGroup = DropdownGroup.init(this.$el, $.extend({}, {
                    isTouchOnly: this.isTouchOnly,
                    isAnimated: this.options.animationsEnabled,
                    supportedLanguages: this.options.supportedLanguages,
                    defaultLanguage: this.options.defaultLanguage
                }, this.options.dropdown));
                this.pageFooter = PageFooter.init(this.$el, $.extend({}, {
                    supportedLanguages: this.options.supportedLanguages,
                    defaultLanguage: this.options.defaultLanguage
                }, this.options.pageFooter));
                this.popoverController = PopoverController.init(this.$el, $.extend({}, {
                    isTouchOnly: this.isTouchOnly,
                    isAnimated: this.options.animationsEnabled
                }, this.options.popover));
                this.flyoutGroup = new FlyoutGroup(this.$el, $.extend({}, {
                    isTouchOnly: this.isTouchOnly,
                    isAnimated: this.options.animationsEnabled && !Util.isIPad()
                }, this.options.flyout))
            },
            isTouchOnly: false
        };
        AWS.Nav = Nav;
        if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
            Nav.init()
        } else {
            var hasFired = false;
            document.addEventListener("DOMContentLoaded", function() {
                if (!hasFired) {
                    hasFired = true;
                    Nav.init()
                }
            }, false);
            onWindowLoad(function() {
                if (!hasFired) {
                    hasFired = true;
                    Nav.init()
                }
            })
        }
    });
    define("scripts", [], function() {
        "use strict";
        $.awsComponent = {
            columnBuilder: function() {}
        }
    });
    define("libra/v1-polyfills/polyfills", ["scripts"], function() {});
    define("libraui/components/checkbox", [], function() {
        "use strict";
        var defaults = {
            checkboxSelector: ".lb-checkbox input",
            checkEventName: "custom_libra_checkbox_changed"
        };
        var instantiationCount = 0;
        var Checkbox = function(elem) {
            this.$elem = $(elem);
            this.options = $.extend({}, defaults, this.$elem.data());
            this.uid = ++instantiationCount;
            this.$checkbox = this.$elem.find("input");
            this.checkboxId = this.$checkbox.attr("id");
            this.checkboxVal = this.$checkbox.val();
            this.checkboxKey = this.$checkbox.data("key");
            this.changeEvent = "change" + this.options.checkboxSelector + "_" + this.uid;
            this.keydownEvent = "keydown" + this.options.checkboxSelector + "_" + this.uid;
            this.bindEventHandlers()
        };
        Checkbox.prototype = {
            bindEventHandlers: function() {
                this.$elem.on(this.changeEvent, function() {
                    this.triggerCheckedEvent()
                }.bind(this));
                this.$elem.on(this.keydownEvent, function(e) {
                    if (e.keyCode === 32) {
                        e.preventDefault();
                        this.$checkbox.prop("checked", !this.$checkbox.prop("checked"));
                        this.triggerCheckedEvent()
                    }
                }.bind(this))
            },
            triggerCheckedEvent: function() {
                var checkboxState = this.$checkbox.prop("checked") ? "checked" : "unchecked";
                var checkBoxObj = {
                    id: this.checkboxId,
                    state: checkboxState,
                    value: this.checkboxVal
                };
                if (this.checkboxKey !== undefined) {
                    checkBoxObj.key = this.checkboxKey
                }
                this.$elem.trigger(this.options.checkEventName, [checkBoxObj])
            }
        };
        return Checkbox
    });
    define("libraui/dom-utils/navigateElements", [], function() {
        "use strict";
        var ops = {
            forward: {
                iter: "nextAll",
                reset: "first"
            },
            reverse: {
                iter: "prevAll",
                reset: "last"
            }
        };
        var navigateElements = function(direction, $elem) {
            var op = ops[direction];
            var $visibleElems = $elem[op.iter]().filter(":visible");
            if ($visibleElems.length > 0) {
                $visibleElems.eq(0)[0].focus()
            } else {
                $elem.siblings(":visible")[op.reset]()[0].focus()
            }
        };
        return navigateElements
    });
    define("libraui/components/dropdown", ["librastandardlib/obj-utils/assign", "librastandardlib/dom-utils/smoothScrollToElem", "librastandardlib/dom-utils/getHashDestination", "libraui/dom-utils/navigateElements"], function(_assign, smoothScrollToElem, getHashDestination, navigateElements) {
        "use strict";
        var defaults = {
            dropdownSelector: ".lb-dropdown",
            hiddenInputSelector: ".lb-dropdown-selected",
            labelSelector: ".lb-dropdown-label",
            inputChangeEvent: null,
            equalizeWidths: false,
            redirect: false,
            smoothScrollOptions: {}
        };
        var ACTIVE_CLASS = "lb-active";
        var OPEN_CLASS = "lb-open";
        var DISABLED_CLASS = "lb-disabled";
        var instantiationCount = 0;
        var Dropdown = function(elem, options) {
            this.$elem = $(elem);
            this.options = _assign({}, defaults, this.$elem.data(), options);
            this.$items = this.$elem.find("li");
            this.$selected = this.$elem.find(this.options.hiddenInputSelector);
            this.$label = this.$elem.find(this.options.labelSelector);
            this.uid = ++instantiationCount;
            this.clickEvent = "click" + this.options.dropdownSelector;
            this.keydownEvent = "keydown" + this.options.dropdownSelector;
            this.documentClickEvent = this.clickEvent + "_" + this.uid;
            this.eventBound = false;
            var selectedValue = this.options.activeItem === undefined ? this.$items.first().data("value") : this.options.activeItem;
            this.select(selectedValue);
            if (this.options.equalizeWidths) {
                this.$label.outerWidth(this.$elem.get(0).getBoundingClientRect().width)
            }
            this.bindEventHandlers()
        };
        Dropdown.prototype = {
            bindEventHandlers: function() {
                var that = this;
                this.$label.on(this.clickEvent + " " + this.keydownEvent, function(e) {
                    if (e.type !== "keydown" || e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        if (that.$elem.hasClass(OPEN_CLASS)) {
                            that.close()
                        } else {
                            that.open()
                        }
                    }
                });
                this.$elem.on(this.clickEvent + " " + this.keydownEvent, "li", function(e) {
                    var $item = $(this);
                    e.preventDefault();
                    if (e.type === "click" || e.key === " " || e.key === "Enter") {
                        that.select($item.data("value"));
                        if (that.options.inputChangeEvent !== null) {
                            that.$selected.trigger(that.options.inputChangeEvent)
                        }
                        that.close();
                        if (that.options.redirect === true) {
                            var href = $item.data("value");
                            if (href) {
                                that.redirect(href)
                            }
                        }
                    } else {
                        switch (e.key) {
                            case "ArrowDown":
                            case "down":
                                navigateElements("forward", $item);
                                break;
                            case "ArrowUp":
                            case "up":
                                navigateElements("reverse", $item);
                                break
                        }
                    }
                });
                this.eventBound = true
            },
            unbindEventHandlers: function() {
                this.$label.off(this.clickEvent + " " + this.keydownEvent);
                this.$elem.off(this.clickEvent + " " + this.keydownEvent);
                this.eventBound = false
            },
            open: function() {
                this.$elem.addClass(OPEN_CLASS);
                this.activeItem[0].focus();
                this.addDocumentClickHandler()
            },
            close: function() {
                this.$elem.removeClass(OPEN_CLASS);
                this.$label.focus();
                this.removeDocumentClickHandler()
            },
            select: function(selectedValue) {
                this.setActiveItem(selectedValue);
                this.$selected.val(selectedValue);
                this.updateLabel()
            },
            updateLabel: function() {
                if (this.activeItem.length > 0) {
                    this.$label.html(this.activeItem[0].innerHTML)
                }
            },
            setActiveItem: function(selectedValue) {
                this.$items.removeClass(ACTIVE_CLASS);
                this.activeItem = this.$items.filter('[data-value="' + selectedValue + '"]');
                this.activeItem.addClass(ACTIVE_CLASS)
            },
            addDocumentClickHandler: function() {
                $(document).on(this.documentClickEvent, function(e) {
                    var evt = e.target || e.srcElement;
                    var $target = $(evt);
                    if (!$target.closest(this.$elem).length) {
                        this.$elem.removeClass(OPEN_CLASS);
                        this.removeDocumentClickHandler()
                    }
                }.bind(this))
            },
            removeDocumentClickHandler: function() {
                $(document).off(this.documentClickEvent)
            },
            redirect: function(href) {
                if (href.charAt(0) === "#") {
                    var destination = getHashDestination(href, this.options.smoothScrollOptions.parentSelector);
                    if (destination !== null) {
                        smoothScrollToElem(destination, this.options.smoothScrollOptions)
                    }
                } else {
                    location.href = href
                }
            },
            enable: function() {
                this.$elem.removeClass(DISABLED_CLASS);
                if (!this.eventBound) {
                    this.bindEventHandlers()
                }
            },
            disable: function() {
                this.$elem.addClass(DISABLED_CLASS);
                this.unbindEventHandlers()
            }
        };
        return Dropdown
    });
    define("libraui/components/popover", ["librastandardlib/test-helpers/browser-globals/window", "librastandardlib/obj-utils/assign", "librastandardlib/dom-utils/breakpoint-helper", "librastandardlib/detection-utils/detection-utils", "librastandardlib/event-utils/debounceWindowEvent", "librastandardlib/vendor/hoverintent/hoverIntent"], function(window, _assign, BreakpointHelper, DetectionUtils, debounceWindowEvent, hoverIntent) {
        "use strict";

        function bindWindowResizeEvent(resizeEvent) {
            debounceWindowEvent(function() {
                popoverRegistry.forEach(function(popover) {
                    if (popover.isActive) {
                        popover.deactivate()
                    }
                })
            }, resizeEvent, 40);
            debounceWindowEvent(function() {
                popoverRegistry.forEach(function(popover) {
                    popover.resetStyle = true;
                    popover.setPosition();
                    setTimeout(function() {
                        popover.setPosition()
                    }, 400)
                })
            }, resizeEvent, 100)
        }
        var defaults = {
            popoverSelector: ".lb-popover",
            triggerSelector: "data-lb-popover-trigger",
            mountSelector: ".lb-trigger-mount",
            activeClass: "lb-active",
            inactiveClass: "lb-inactive",
            openClass: "lb-open",
            readyClass: "lb-ready",
            arrowClass: "lb-arrow",
            innerArrowClass: "lb-arrow-inner",
            action: "click",
            position: "top",
            anchorOffset: 10,
            arrowWidth: 9,
            viewportMargin: 20,
            hoverSensitivity: 7,
            hoverInterval: 50,
            timeout: 260
        };
        var positions = {
            "top-left": true,
            top: true,
            "top-right": true,
            "bottom-left": true,
            bottom: true,
            "bottom-right": true,
            "left-top": false,
            left: false,
            "left-bottom": false,
            "right-top": false,
            right: false,
            "right-bottom": false
        };
        var opposites = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        };
        var instantiationCount = 0;
        var hasSetClassHandlers = false;
        var popoverRegistry = [];
        var Popover = function(elem) {
            this.$elem = $(elem);
            this.options = _assign({}, defaults, this.$elem.data());
            this.uid = ++instantiationCount;
            this.$trigger = $("[" + this.options.triggerSelector + '="' + this.options.id + '"]');
            if (this.$trigger.length) {
                this.$elem.detach().appendTo("body");
                var $mount = this.$trigger.find(this.options.mountSelector);
                if ($mount.length) {
                    this.$mount = $mount
                } else {
                    this.$mount = this.$trigger
                }
                this.clickEvent = "click." + this.options.popoverSelector + "_" + this.uid;
                this.resizeEvent = "resize." + this.options.popoverSelector;
                this.scrollEvent = "scroll." + this.options.popoverSelector + "_" + this.uid;
                this.isActive = false;
                this.timeout = null;
                this.hasActivatedByHover = false;
                this.isTriggerFixed = false;
                this.hasDeterminedFixedPosition = false;
                this.resetStyle = true;
                this.bindActivationHandlers();
                this.addArrow();
                this.$arrow = this.$elem.find("." + this.options.arrowClass);
                popoverRegistry.push(this);
                if (!hasSetClassHandlers) {
                    bindWindowResizeEvent(this.resizeEvent);
                    hasSetClassHandlers = true
                }
            }
        };
        Popover.prototype = {
            bindActivationHandlers: function() {
                if (this.options.action === "hover" || this.options.action === "clickAndHover") {
                    this.bindClickEvents();
                    if (!DetectionUtils.isLikelyMobile()) {
                        this.bindHoverEvents()
                    }
                } else {
                    this.bindClickEvents()
                }
            },
            bindClickEvents: function() {
                this.$trigger.on(this.clickEvent, function(e) {
                    if (e.target.href && e.target.href !== "#") {
                        if (this.options.action === "clickAndHover" || this.options.action === "hover" && !DetectionUtils.isLikelyMobile()) {
                            return
                        }
                    }
                    e.preventDefault();
                    if (this.hasActivatedByHover) {
                        return
                    }
                    this.toggle()
                }.bind(this))
            },
            bindHoverEvents: function() {
                var that = this;
                hoverIntent(this.$trigger[0], function() {
                    that.hasActivatedByHover = true;
                    if (!that.isActive) {
                        that.activate()
                    }
                }, function() {}).options({
                    timeout: 0,
                    sensitivity: this.options.hoverSensitivity,
                    interval: this.options.hoverInterval
                });
                var enterTrigger = function() {
                    clearTimeout(that.timeout)
                };
                this.$trigger.on("mouseenter", enterTrigger);
                var enterTarget = function() {
                    clearTimeout(that.timeout)
                };
                this.$elem.on("mouseenter", enterTarget);
                var leaveTrigger = function() {
                    that.timeout = setTimeout(function() {
                        that.deactivate()
                    }, that.options.timeout)
                };
                this.$trigger.on("mouseleave", leaveTrigger);
                var leaveTarget = function() {
                    that.timeout = setTimeout(function() {
                        that.deactivate()
                    }, that.options.timeout)
                };
                this.$elem.on("mouseleave", leaveTarget)
            },
            setPosition: function() {
                var $window = $(window);
                if (this.resetStyle) {
                    this.removeClassesHavingPrefix(this.$elem, this.options.openClass)
                }
                this.$elem.css("width", "");
                this.$arrow.css({
                    left: "",
                    top: ""
                });
                var parts = this.options.position.split("-");
                var side = parts[0];
                var offsetSide = parts.length > 1 ? parts[1] : "center";
                var isDirectionVertical = positions[this.options.position];
                var mountWidth = this.$mount.outerWidth();
                var mountHeight = this.$mount.outerHeight();
                var mountOffset = this.$mount.offset();
                var mountPos = {};
                mountPos.top = mountOffset.top;
                mountPos.left = mountOffset.left;
                mountPos.bottom = mountPos.top + mountHeight;
                mountPos.right = mountPos.left + mountWidth;
                var targetWidth = this.$elem.outerWidth();
                var targetHeight = this.$elem.outerHeight();
                var arrowWidth = this.options.arrowWidth;
                // Switch to vertical direction on mobile because of limited viewport
                if (!BreakpointHelper.isMidUp() && !isDirectionVertical) {
                    side = "top";
                    offsetSide = "center";
                    isDirectionVertical = true
                }

                function getTargetPosition(side, correction) {
                    var top;
                    var left;
                    if (isDirectionVertical) {
                        top = mountPos[opposites[side]] + arrowWidth;
                        if (side === "bottom") {
                            top -= targetHeight + arrowWidth * 2
                        }
                        left = mountPos.left + mountWidth / 2 + correction;
                        if (offsetSide === "center") {
                            left += -(targetWidth / 2)
                        } else if (offsetSide === "left") {
                            left += -arrowWidth - this.options.anchorOffset
                        } else if (offsetSide === "right") {
                            left += arrowWidth - targetWidth + this.options.anchorOffset
                        }
                        if (correction !== 0) {
                            var arrowLeft = mountPos.left + mountWidth / 2 - left;
                            this.$arrow.css("left", arrowLeft + "px")
                        }
                    } else {
                        left = mountPos[opposites[side]] + arrowWidth;
                        if (side === "right") {
                            left -= targetWidth + arrowWidth * 2
                        }
                        top = mountPos.top + mountHeight / 2 + correction;
                        if (offsetSide === "center") {
                            top += -(targetHeight / 2)
                        } else if (offsetSide === "top") {
                            top += -arrowWidth - this.options.anchorOffset
                        } else if (offsetSide === "bottom") {
                            top += arrowWidth - targetHeight + this.options.anchorOffset
                        }
                        if (correction < 0) {
                            top = Math.max(top, mountPos.top + mountHeight / 2 - targetHeight + arrowWidth + this.options.anchorOffset)
                        } else if (correction > 0) {
                            top = Math.min(top, mountPos.top + mountHeight / 2 - arrowWidth - this.options.anchorOffset)
                        }
                        if (correction !== 0) {
                            var arrowTop = mountPos.top + mountHeight / 2 - top;
                            this.$arrow.css("top", arrowTop + "px")
                        }
                    }
                    return {
                        top: top,
                        left: left
                    }
                }
                var pos = getTargetPosition.call(this, side, 0);
                var collisions = this.getPositionRelativeToViewport(pos.top, pos.left, targetWidth, targetHeight, $window);
                var newSide = this.getNewAnchorSide(side, collisions, mountPos, mountWidth, mountHeight, targetHeight, window);
                if (newSide) {
                    side = newSide
                }
                var hasNewWidth = false;
                if (!isDirectionVertical) {
                    var width = -(this.options.arrowWidth + this.options.viewportMargin);
                    if (side === "left") {
                        width += window.innerWidth - mountPos.left - mountWidth
                    } else if (side === "right") {
                        width += mountPos.left
                    }
                    if (targetWidth > width) {
                        this.$elem.css("width", width + "px");
                        targetWidth = width;
                        hasNewWidth = true;
                        targetHeight = this.$elem.outerHeight();
                        collisions = this.getPositionRelativeToViewport(pos.top, pos.left, targetWidth, targetHeight, $window)
                    }
                }
                var correction = this.getCorrection(isDirectionVertical, collisions);
                if (newSide || hasNewWidth || correction !== 0) {
                    pos = getTargetPosition.call(this, side, correction)
                }
                this.$elem.css({
                    top: pos.top,
                    left: pos.left
                });
                this.$elem.addClass([this.options.openClass, side, offsetSide].join("-"))
            },
            getCorrection: function(isDirectionVertical, collisions) {
                var correction = 0;
                if (isDirectionVertical) {
                    if (collisions.right < 0) {
                        correction = collisions.right
                    } else if (collisions.left > 0) {
                        correction = collisions.left
                    }
                } else {
                    if (collisions.bottom < 0) {
                        correction = collisions.bottom
                    } else if (collisions.top > 0) {
                        correction = collisions.top
                    }
                }
                return correction
            },
            getNewAnchorSide: function(side, collisions, mountPos, mountWidth, mountHeight, targetHeight, window) {
                if (side === "top" && collisions.bottom < 0 || side === "bottom" && collisions.top > 0) {
                    var topSpaceInViewport = mountPos.top - $(document).scrollTop();
                    var bottomSpace = window.innerHeight - topSpaceInViewport - mountHeight;
                    if (side === "top" && topSpaceInViewport > bottomSpace && targetHeight < topSpaceInViewport || side === "bottom" && (bottomSpace > topSpaceInViewport || targetHeight > topSpaceInViewport)) {
                        return opposites[side]
                    }
                }
                if (side === "left" && collisions.right < 0 || side === "right" && collisions.left > 0) {
                    var rightSpace = window.innerWidth - mountPos.left - mountWidth;
                    var leftSpace = mountPos.left;
                    if (side === "left" && leftSpace > rightSpace || side === "right" && rightSpace > leftSpace) {
                        return opposites[side]
                    }
                }
                return false
            },
            getPositionRelativeToViewport: function(top, left, width, height, $window) {
                var bottom = top + height;
                var right = left + width;
                var viewportTop = $window.scrollTop();
                var viewportHeight = $window.height();
                var viewportBottom = viewportTop + viewportHeight;
                var viewportLeft = $window.scrollLeft();
                var viewportWidth = $window.width();
                var viewportRight = viewportLeft + viewportWidth;
                var margin = this.options.viewportMargin;
                return {
                    top: viewportTop - top + margin,
                    right: viewportRight - right - margin,
                    bottom: viewportBottom - bottom - margin,
                    left: viewportLeft - left + margin
                }
            },
            toggle: function() {
                if (this.isActive) {
                    this.deactivate()
                } else {
                    this.activate()
                }
            },
            activate: function() {
                if (!this.hasDeterminedFixedPosition) {
                    this.currentTopPosition = this.$trigger.offset().top - $(window).scrollTop()
                }
                this.isActive = true;
                this.$elem.addClass(this.options.readyClass);
                this.setPosition();
                this.$elem.removeClass(this.options.inactiveClass).addClass(this.options.activeClass);
                this.$trigger.addClass(this.options.activeClass);
                this.bindDocumentClickHandler();
                if (!this.hasDeterminedFixedPosition || this.isTriggerFixed) {
                    this.bindScrollEvent()
                }
            },
            deactivate: function() {
                this.isActive = false;
                this.$elem.removeClass(this.options.activeClass).addClass(this.options.inactiveClass);
                this.$trigger.removeClass(this.options.activeClass);
                setTimeout(function() {
                    this.$elem.removeClass(this.options.readyClass)
                }.bind(this), 130);
                this.removeDocumentClickHandler();
                if (this.isTriggerFixed) {
                    this.removeScrollHandler()
                }
            },
            bindDocumentClickHandler: function() {
                $(document).on(this.clickEvent, function(e) {
                    var evt = e.target || e.srcElement;
                    var $target = $(evt);
                    if (!$target.closest(this.$trigger).length && !$target.closest(this.$elem).length) {
                        this.deactivate()
                    }
                }.bind(this))
            },
            removeDocumentClickHandler: function() {
                $(document).off(this.clickEvent)
            },
            bindScrollEvent: function() {
                var $window = $(window);
                $window.on(this.scrollEvent, function() {
                    if (!this.hasDeterminedFixedPosition) {
                        var top = this.$trigger.offset().top - $window.scrollTop();
                        this.isTriggerFixed = this.currentTopPosition === top;
                        this.hasDeterminedFixedPosition = true
                    }
                    if (this.isTriggerFixed) {
                        this.resetStyle = false;
                        this.setPosition()
                    } else {
                        this.removeScrollHandler()
                    }
                }.bind(this))
            },
            removeScrollHandler: function() {
                $(window).off(this.scrollEvent)
            },
            addArrow: function() {
                var d = document;
                var df = d.createDocumentFragment();
                var elem = this.$elem[0];
                var arrow = d.createElement("div");
                arrow.classList.add(this.options.arrowClass);
                var innerArrow = d.createElement("div");
                innerArrow.classList.add(this.options.innerArrowClass);
                df.appendChild(arrow).appendChild(innerArrow);
                elem.appendChild(df)
            },
            removeClassesHavingPrefix: function($elem, prefix) {
                $elem.removeClass(function(idx, className) {
                    var re = new RegExp("(^|\\s)" + prefix + "\\S+", "g");
                    return (className.match(re) || []).join(" ")
                })
            },
            _popoverRegistry: popoverRegistry
        };
        return Popover
    });
    define("libra/tracking-utils/tracking-mixin", ["librastandardlib/url-utils/getQueryStringParam", "librastandardlib/url-utils/updateQueryStringParam", "librastandardlib/test-helpers/browser-globals/window"], function(getQueryStringParam, updateQueryStringParam, window) {
        "use strict";
        var TrackingMixin = {
            init: function() {
                this.queryString = window.location.search.toLowerCase();
                this.addTracking()
            },
            getTrackingObject: function(attrData) {
                try {
                    return JSON.parse(attrData)
                } catch (err) {
                    return null
                }
            },
            updateHref: function(href, obj, allowOverride) {
                if (!obj || !href || href === "#") {
                    return href
                }
                var deepLink = "";
                var deepLinkIndex = href.indexOf("#");
                if (deepLinkIndex > -1) {
                    deepLink = href.substring(deepLinkIndex);
                    href = href.substring(0, deepLinkIndex)
                }
                Object.keys(obj).forEach(function(key) {
                    if (getQueryStringParam(key.toLowerCase(), href.toLowerCase()).length === 0 && obj[key]) {
                        href += (href.match(/\?/) ? "&" : "?") + encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
                    } else if (allowOverride && obj[key]) {
                        href = updateQueryStringParam(href, key, obj[key])
                    }
                });
                if (deepLink) {
                    href += deepLink
                }
                return href
            }
        };
        return TrackingMixin
    });
    define("libra/tracking-utils/trk-cookie", ["librastandardlib/cookie-utils/cookie"], function(cookie) {
        "use strict";
        var COOKIE_NAME = "aws_campaign_trk";
        var COOKIE_DURATION = 7200;
        var TrkCookie = {
            set: function(qsTrkCampaign, qsTrk) {
                if (qsTrk.length === 0) {
                    return false
                }
                var campaignCookie = cookie(COOKIE_NAME) || {};
                campaignCookie.campaign = qsTrkCampaign;
                campaignCookie.trk = qsTrk;
                cookie(COOKIE_NAME, JSON.stringify(campaignCookie), {
                    expires: COOKIE_DURATION
                })
            },
            get: function() {
                return cookie(COOKIE_NAME)
            }
        };
        return TrkCookie
    });
    define("libra/tracking-utils/trk-tracking", ["librastandardlib/obj-utils/mixin", "libra/tracking-utils/tracking-mixin", "libra/tracking-utils/trk-cookie", "librastandardlib/url-utils/getQueryStringParam"], function(mixin, TrackingMixin, trkCookie, getQueryStringParam) {
        "use strict";
        var TRK_CAMPAIGN = "trkcampaign";
        var TRK = "trk";
        var DEFAULT_OUTPUT_KEY = "refid";
        var PREV_TRK_ELEM = {
            selector: "a[data-aws-params]",
            attrName: "awsParams"
        };
        var TRK_ELEM = {
            selector: "a[data-trk-params]",
            attrName: "trkParams"
        };
        var ALL_TRK_ELEMS = [TRK_ELEM, PREV_TRK_ELEM];
        var TrkTracking = function() {
            this.init()
        };
        TrkTracking.prototype = {
            addTracking: function() {
                var qsTrkCampaign = getQueryStringParam(TRK_CAMPAIGN, this.queryString);
                var qsTrk = getQueryStringParam(TRK, this.queryString);
                if (qsTrkCampaign.length === 0) {
                    qsTrkCampaign = this.getExistingCampaign()
                }
                trkCookie.set(qsTrkCampaign, qsTrk);
                var campaignCookie = trkCookie.get();
                if (!qsTrk && !campaignCookie) {
                    return
                }
                ALL_TRK_ELEMS.forEach(function(trk) {
                    var elems = document.querySelectorAll(trk.selector);
                    for (var i = 0; i < elems.length; i++) {
                        var elem = elems[i];
                        var elemDataObj = this.getTrackingObject(elem.dataset[trk.attrName]);
                        var campaign = elemDataObj.trkCampaign ? elemDataObj.trkCampaign.toLowerCase() : "";
                        var allowOverride = elemDataObj.trkOverrideWithQs;
                        if (!campaign || campaignCookie && campaign === campaignCookie.campaign) {
                            var val = qsTrk || campaignCookie.trk;
                            if (val) {
                                var outputParam = elemDataObj.trkOutputParam || DEFAULT_OUTPUT_KEY;
                                var obj = {};
                                obj[outputParam] = val;
                                obj[TRK_CAMPAIGN] = qsTrkCampaign;
                                elem.setAttribute("href", this.updateHref(elem.getAttribute("href"), obj, allowOverride));
                                $(elem).on("click", function() {
                                    trkCookie.set(qsTrkCampaign, val)
                                })
                            }
                        }
                    }
                }.bind(this))
            },
            getExistingCampaign: function() {
                var campaignCookie = trkCookie.get();
                if (campaignCookie && campaignCookie.campaign) {
                    return campaignCookie.campaign
                }
                return ""
            }
        };
        mixin(TrkTracking.prototype, TrackingMixin);
        Libra.Comp.register({
            name: "trk-tracking",
            initFct: function() {
                new TrkTracking
            },
            initTime: "immediate",
            selfRequire: true
        });
        return TrkTracking
    });
    define("libra/tracking-utils/tracking", ["librastandardlib/obj-utils/mixin", "librastandardlib/url-utils/getQueryStringParam", "libra/tracking-utils/tracking-mixin"], function(mixin, getQueryStringParam, TrackingMixin) {
        "use strict";
        var TRACKING_SELECTOR = "a[data-custom-params]";
        var DATA_ATTR_NAME = "customParams";
        var Tracking = function() {
            this.init()
        };
        Tracking.prototype = {
            addTracking: function() {
                if (!this.queryString) {
                    return
                }
                var elems = document.querySelectorAll(TRACKING_SELECTOR);
                for (var j = 0; j < elems.length; j++) {
                    var elem = elems[j];
                    var elemDataObj = this.getTrackingObject(elem.dataset[DATA_ATTR_NAME]);
                    if (elemDataObj && elemDataObj.passOnKeys) {
                        var obj = {};
                        elemDataObj.passOnKeys.forEach(function(key) {
                            var value = getQueryStringParam(key, this.queryString);
                            if (key && value) {
                                obj[key] = value
                            }
                        }.bind(this));
                        elem.setAttribute("href", this.updateHref(elem.getAttribute("href"), obj))
                    }
                }
            }
        };
        mixin(Tracking.prototype, TrackingMixin);
        Libra.Comp.register({
            name: "tracking",
            initFct: function() {
                new Tracking
            },
            initTime: "immediate",
            selfRequire: true
        });
        return Tracking
    });
    define("libra/libra-bundle", ["libra/core/libra-require", "libra/event-utils/event-hub", "libra/vendor/handlebars", "directories/directories-bundle", "librastandardlib/test-helpers/browser-globals/document", "librastandardlib/test-helpers/browser-globals/window", "librastandardlib/dom-utils/breakpoint-helper", "librastandardlib/dom-utils/smoothScrollToElem", "librastandardlib/event-utils/debounceWindowEvent", "libra/self-required-components", "libra/dom-utils/component-viewport-tracker", "libra/dom-utils/transition", "libra/dom-utils/lazy-load", "libra/dom-utils/smoothScroller", "libra/dom-utils/smoothScrollOptions", "libra/components/mbox", "libra/components/tracking-pixel", "libra/components/typeahead", "libra/components/google-rlsa-pixel", "libra/components/static-card", "libra/components/transition-wrapper", "libra/navigation/navigation", "libra/navigation/v3/navigation", "libra/v1-polyfills/polyfills", "libraui/components/checkbox", "libraui/components/dropdown", "libraui/components/popover", "libra/tracking-utils/trk-tracking", "libra/tracking-utils/tracking"], function(LibraRequire) {
        LibraRequire.init()
    })
})();