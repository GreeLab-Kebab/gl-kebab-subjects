(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        483: function(e, t) {
            ! function(e) {
                var t = window.pbjsChunk;
                window.pbjsChunk = function(r, o, a) {
                    for (var s, c, d, u = 0, l = []; u < r.length; u++) c = r[u], n[c] && l.push(n[c][0]), n[c] = 0;
                    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
                    for (t && t(r, o, a); l.length;) l.shift()();
                    if (a)
                        for (u = 0; u < a.length; u++) d = i(i.s = a[u]);
                    return d
                };
                var r = {},
                    n = {
                        266: 0
                    };

                function i(t) {
                    if (r[t]) return r[t].exports;
                    var n = r[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                }
                i.m = e, i.c = r, i.d = function(e, t, r) {
                    i.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, i.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(t, "a", t), t
                }, i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, i.p = "", i.oe = function(e) {
                    throw console.error(e), e
                }, i(i.s = 667)
            }({
                0: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "internal", function() {
                        return R
                    }), r.d(t, "bind", function() {
                        return N
                    }), t.replaceTokenInString = function(e, t, r) {
                        return re(t, function(t, n) {
                            t = void 0 === t ? "" : t;
                            var i = r + n.toUpperCase() + r,
                                o = new RegExp(i, "g");
                            e = e.replace(o, t)
                        }), e
                    }, t.getUniqueIdentifierStr = U, t.generateUUID = function e(t) {
                        return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                    }, t.getBidIdParameter = function(e, t) {
                        return t && t[e] ? t[e] : ""
                    }, t.tryAppendQueryString = function(e, t, r) {
                        return r ? e + (t + "=") + encodeURIComponent(r) + "&" : e
                    }, t.parseQueryStringParameters = function(e) {
                        var t = "";
                        for (var r in e) e.hasOwnProperty(r) && (t += r + "=" + encodeURIComponent(e[r]) + "&");
                        return t
                    }, t.transformAdServerTargetingObj = function(e) {
                        return e && 0 < Object.getOwnPropertyNames(e).length ? fe(e).map(function(t) {
                            return "".concat(t, "=").concat(encodeURIComponent(pe(e, t)))
                        }).join("&") : ""
                    }, t.getAdUnitSizes = function(e) {
                        if (e) {
                            var t = [];
                            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                                var r = e.mediaTypes.banner.sizes;
                                Array.isArray(r[0]) ? t = r : t.push(r)
                            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
                            return t
                        }
                    }, t.parseSizesInput = function(e) {
                        var t = [];
                        if ("string" == typeof e) {
                            var r = e.split(","),
                                n = /^(\d)+x(\d)+$/i;
                            if (r)
                                for (var i in r) ie(r, i) && r[i].match(n) && t.push(r[i])
                        } else if ("object" === b(e)) {
                            var o = e.length;
                            if (0 < o)
                                if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e));
                                else
                                    for (var a = 0; a < o; a++) t.push(k(e[a]))
                        }
                        return t
                    }, t.parseGPTSingleSizeArray = k, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
                        if (P(e)) return {
                            w: e[0],
                            h: e[1]
                        }
                    }, t.getTopWindowLocation = B, t.getTopFrameReferrer = q, t.getAncestorOrigins = z, t.getWindowTop = M, t.getWindowSelf = L, t.getWindowLocation = W, t.getTopWindowUrl = function() {
                        var e;
                        try {
                            e = R.getTopWindowLocation().href
                        } catch (t) {
                            e = ""
                        }
                        return e
                    }, t.getTopWindowReferrer = function() {
                        try {
                            return window.top.document.referrer
                        } catch (e) {
                            return document.referrer
                        }
                    }, t.logMessage = G, t.logInfo = V, t.logWarn = F, t.logError = Y, t.hasConsoleLogger = function() {
                        return w
                    }, t.debugTurnedOn = H, t.createInvisibleIframe = function() {
                        var e = document.createElement("iframe");
                        return e.id = U(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
                    }, t.getParameterByName = function(e) {
                        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                        return null !== t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : ""
                    }, t.hasValidBidRequest = function(e, t, r) {
                        var n = !1;

                        function i(e, r) {
                            r === t[o] && (n = !0)
                        }
                        for (var o = 0; o < t.length; o++)
                            if (n = !1, re(e, i), !n) return Y("Params are missing for bid request. One of these required paramaters are missing: " + t, r), !1;
                        return !0
                    }, t.addEventHandler = function(e, t, r) {
                        e.addEventListener ? e.addEventListener(t, r, !0) : e.attachEvent && e.attachEvent("on" + t, r)
                    }, t.isA = J, t.isFn = Z, t.isStr = Q, t.isArray = X, t.isNumber = $, t.isPlainObject = ee, t.isBoolean = function(e) {
                        return J(e, O)
                    }, t.isEmpty = te, t.isEmptyStr = function(e) {
                        return Q(e) && (!e || 0 === e.length)
                    }, t._each = re, t.contains = function(e, t) {
                        if (te(e)) return !1;
                        if (Z(e.indexOf)) return -1 !== e.indexOf(t);
                        for (var r = e.length; r--;)
                            if (e[r] === t) return !0;
                        return !1
                    }, r.d(t, "indexOf", function() {
                        return ne
                    }), t._map = function(e, t) {
                        if (te(e)) return [];
                        if (Z(e.map)) return e.map(t);
                        var r = [];
                        return re(e, function(n, i) {
                            r.push(t(n, i, e))
                        }), r
                    }, t.hasOwn = ie, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
                        var t = e.source,
                            r = e.burl;
                        t === v.S2S.SRC && r && R.triggerPixel(r)
                    }, t.insertHtmlIntoIframe = function(e) {
                        if (e) {
                            var t = document.createElement("iframe");
                            t.id = U(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", R.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
                        }
                    }, t.insertUserSyncIframe = se, t.createTrackPixelHtml = function(e) {
                        return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="' + encodeURI(e) + '"></div>' : ""
                    }, t.createTrackPixelIframeHtml = ce, t.getIframeDocument = function(e) {
                        if (e) {
                            var t;
                            try {
                                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                            } catch (e) {
                                R.logError("Cannot get iframe document", e)
                            }
                            return t
                        }
                    }, t.getValueString = de, t.uniques = ue, t.flatten = le, t.getBidRequest = function(e, t) {
                        return e ? (t.some(function(t) {
                            var n = s()(t.bids, function(t) {
                                return ["bidId", "adId", "bid_id"].some(function(r) {
                                    return t[r] === e
                                })
                            });
                            return n && (r = n), n
                        }), r) : void 0;
                        var r
                    }, t.getKeys = fe, t.getValue = pe, t.getKeyByValue = function(e, t) {
                        for (var r in e)
                            if (e.hasOwnProperty(r) && e[r] === t) return r
                    }, t.getBidderCodes = function() {
                        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                            return e.bids.map(function(e) {
                                return e.bidder
                            }).reduce(le, [])
                        }).reduce(le).filter(ue)
                    }, t.isGptPubadsDefined = function() {
                        if (window.googletag && Z(window.googletag.pubads) && Z(window.googletag.pubads().getSlots)) return !0
                    }, r.d(t, "getHighestCpm", function() {
                        return ge
                    }), r.d(t, "getOldestHighestCpmBid", function() {
                        return be
                    }), r.d(t, "getLatestHighestCpmBid", function() {
                        return me
                    }), t.shuffle = function(e) {
                        for (var t = e.length; 0 < t;) {
                            var r = Math.floor(Math.random() * t),
                                n = e[--t];
                            e[t] = e[r], e[r] = n
                        }
                        return e
                    }, t.adUnitsFilter = function(e, t) {
                        return d()(e, t && t.adUnitCode)
                    }, t.isSrcdocSupported = function(e) {
                        return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
                    }, t.deepClone = ye, t.inIframe = he, t.isSafariBrowser = function() {
                        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                    }, t.replaceAuctionPrice = function(e, t) {
                        if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, t)
                    }, t.timestamp = function() {
                        return (new Date).getTime()
                    }, t.checkCookieSupport = Ie, t.cookiesAreEnabled = function() {
                        return !!R.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest"))
                    }, t.getCookie = function(e) {
                        var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return t ? decodeURIComponent(t[2]) : null
                    }, t.setCookie = function(e, t, r) {
                        document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== r ? "; expires=".concat(r) : "", "; path=/")
                    }, t.localStorageIsEnabled = function() {
                        try {
                            return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                        } catch (e) {
                            return !1
                        }
                    }, t.delayExecution = function(e, t) {
                        if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
                        var r = 0;
                        return function() {
                            ++r === t && e.apply(null, arguments)
                        }
                    }, t.groupBy = function(e, t) {
                        return e.reduce(function(e, r) {
                            return (e[r[t]] = e[r[t]] || []).push(r), e
                        }, {})
                    }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
                        return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
                    }, t.getDefinedParams = function(e, t) {
                        return t.filter(function(t) {
                            return e[t]
                        }).reduce(function(t, r) {
                            return g(t, function(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }({}, r, e[r]))
                        }, {})
                    }, t.isValidMediaTypes = function(e) {
                        var t = ["banner", "native", "video"];
                        return !!Object.keys(e).every(function(e) {
                            return d()(t, e)
                        }) && (!e.video || !e.video.context || d()(["instream", "outstream", "adpod"], e.video.context))
                    }, t.getBidderRequest = function(e, t, r) {
                        return s()(e, function(e) {
                            return 0 < e.bids.filter(function(e) {
                                return e.bidder === t && e.adUnitCode === r
                            }).length
                        }) || {
                            start: null,
                            auctionId: null
                        }
                    }, t.getUserConfiguredParams = function(e, t, r) {
                        return e.filter(function(e) {
                            return e.code === t
                        }).map(function(e) {
                            return e.bids
                        }).reduce(le, []).filter(function(e) {
                            return e.bidder === r
                        }).map(function(e) {
                            return e.params || {}
                        })
                    }, t.getOrigin = function() {
                        return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                    }, t.getDNT = function() {
                        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                    }, t.isAdUnitCodeMatchingSlot = function(e) {
                        return function(t) {
                            return Ee(e, t)
                        }
                    }, t.isSlotMatchingAdUnitCode = function(e) {
                        return function(t) {
                            return Ee(t, e)
                        }
                    }, t.unsupportedBidderMessage = function(e, t) {
                        var r = Object.keys(e.mediaTypes || {
                            banner: "banner"
                        }).join(", ");
                        return "\n    ".concat(e.code, " is a ").concat(r, " ad unit\n    containing bidders that don't support ").concat(r, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
                    }, t.deletePropertyFromObject = function(e, t) {
                        var r = g({}, e);
                        return delete r[t], r
                    }, t.isInteger = Se, t.convertCamelToUnderscore = function(e) {
                        return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                            return "_" + t.toLowerCase()
                        }).replace(/^_/, "")
                    }, t.cleanObj = function(e) {
                        return Object.keys(e).reduce(function(t, r) {
                            return void 0 !== e[r] && (t[r] = e[r]), t
                        }, {})
                    }, t.pick = function(e, t) {
                        return "object" === b(e) ? t.reduce(function(r, n, i) {
                            if ("function" == typeof n) return r;
                            var o = n,
                                a = n.match(/^(.+?)\sas\s(.+?)$/i);
                            a && (n = a[1], o = a[2]);
                            var s = e[n];
                            return "function" == typeof t[i + 1] && (s = t[i + 1](s, r)), void 0 !== s && (r[o] = s), r
                        }, {}) : {}
                    }, t.transformBidderParamKeywords = function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                            r = [];
                        return re(e, function(e, n) {
                            if (X(e)) {
                                var i = [];
                                re(e, function(e) {
                                    !(e = de(t + "." + n, e)) && "" !== e || i.push(e)
                                }), e = i
                            } else {
                                if (!Q(e = de(t + "." + n, e))) return;
                                e = [e]
                            }
                            r.push({
                                key: n,
                                value: e
                            })
                        }), r
                    }, t.convertTypes = function(e, t) {
                        return Object.keys(e).forEach(function(r) {
                            t[r] && (Z(e[r]) ? t[r] = e[r](t[r]) : t[r] = function(e, t) {
                                return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                            }(e[r], t[r]), isNaN(t[r]) && delete t.key)
                        }), t
                    }, t.setDataInLocalStorage = function(e, t) {
                        Oe() && window.localStorage.setItem(e, t)
                    }, t.getDataFromLocalStorage = function(e) {
                        if (Oe()) return window.localStorage.getItem(e)
                    }, t.hasLocalStorage = Oe, t.isArrayOfNums = function(e, t) {
                        return X(e) && (!t || e.length === t) && e.every(function(e) {
                            return Se(e)
                        })
                    }, t.fill = function(e, t) {
                        for (var r = [], n = 0; n < t; n++) {
                            var i = ee(e) ? ye(e) : e;
                            r.push(i)
                        }
                        return r
                    }, t.chunk = function(e, t) {
                        for (var r = [], n = 0; n < Math.ceil(e.length / t); n++) {
                            var i = n * t,
                                o = i + t;
                            r.push(e.slice(i, o))
                        }
                        return r
                    }, t.getMinValueFromArray = function(e) {
                        return Math.min.apply(Math, p(e))
                    }, t.getMaxValueFromArray = function(e) {
                        return Math.max.apply(Math, p(e))
                    }, t.compareOn = function(e) {
                        return function(t, r) {
                            return t[e] < r[e] ? 1 : t[e] > r[e] ? -1 : 0
                        }
                    };
                    var n = r(3),
                        i = r(88),
                        o = r.n(i),
                        a = r(12),
                        s = r.n(a),
                        c = r(9),
                        d = r.n(c),
                        u = r(10),
                        l = r(89);
                    r.d(t, "deepAccess", function() {
                        return l.a
                    });
                    var f = r(90);

                    function p(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }

                    function g() {
                        return (g = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function b(e) {
                        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    r.d(t, "deepSetValue", function() {
                        return f.a
                    });
                    var m, v = r(4),
                        y = "Array",
                        h = "String",
                        I = "Function",
                        E = "Number",
                        S = "Object",
                        O = "Boolean",
                        T = Object.prototype.toString,
                        A = Boolean(window.console),
                        w = Boolean(A && window.console.log),
                        _ = Boolean(A && window.console.info),
                        C = Boolean(A && window.console.warn),
                        j = Boolean(A && window.console.error),
                        R = {
                            checkCookieSupport: Ie,
                            createTrackPixelIframeHtml: ce,
                            getWindowSelf: L,
                            getWindowTop: M,
                            getAncestorOrigins: z,
                            getTopFrameReferrer: q,
                            getWindowLocation: W,
                            getTopWindowLocation: B,
                            insertUserSyncIframe: se,
                            insertElement: oe,
                            isFn: Z,
                            triggerPixel: ae,
                            logError: Y,
                            logWarn: F,
                            logMessage: G,
                            logInfo: V
                        },
                        D = {},
                        N = function(e, t) {
                            return t
                        }.bind(null, 1, D)() === D ? Function.prototype.bind : function(e) {
                            var t = this,
                                r = Array.prototype.slice.call(arguments, 1);
                            return function() {
                                return t.apply(e, r.concat(Array.prototype.slice.call(arguments)))
                            }
                        },
                        x = (m = 0, function() {
                            return ++m
                        });

                    function U() {
                        return x() + Math.random().toString(16).substr(2)
                    }

                    function k(e) {
                        if (P(e)) return e[0] + "x" + e[1]
                    }

                    function P(e) {
                        return X(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
                    }

                    function B() {
                        if (he()) {
                            var e;
                            try {
                                e = R.getAncestorOrigins() || R.getTopFrameReferrer()
                            } catch (e) {
                                V("could not obtain top window location", e)
                            }
                            if (e) return Object(u.c)(e, {
                                decodeSearchAsString: !0
                            })
                        }
                        return R.getWindowLocation()
                    }

                    function q() {
                        try {
                            window.top.location.toString();
                            for (var e, t = "";
                                (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                            return t
                        } catch (e) {
                            return window.document.referrer
                        }
                    }

                    function z() {
                        if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
                    }

                    function M() {
                        return window.top
                    }

                    function L() {
                        return window.self
                    }

                    function W() {
                        return window.location
                    }

                    function G() {
                        H() && w && console.log.apply(console, K(arguments, "MESSAGE:"))
                    }

                    function V() {
                        H() && _ && console.info.apply(console, K(arguments, "INFO:"))
                    }

                    function F() {
                        H() && C && console.warn.apply(console, K(arguments, "WARNING:"))
                    }

                    function Y() {
                        H() && j && console.error.apply(console, K(arguments, "ERROR:"))
                    }

                    function K(e, t) {
                        return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
                    }

                    function H() {
                        return !!n.b.getConfig("debug")
                    }

                    function J(e, t) {
                        return T.call(e) === "[object " + t + "]"
                    }

                    function Z(e) {
                        return J(e, I)
                    }

                    function Q(e) {
                        return J(e, h)
                    }

                    function X(e) {
                        return J(e, y)
                    }

                    function $(e) {
                        return J(e, E)
                    }

                    function ee(e) {
                        return J(e, S)
                    }

                    function te(e) {
                        if (!e) return !0;
                        if (X(e) || Q(e)) return !(0 < e.length);
                        for (var t in e)
                            if (hasOwnProperty.call(e, t)) return !1;
                        return !0
                    }

                    function re(e, t) {
                        if (!te(e)) {
                            if (Z(e.forEach)) return e.forEach(t, this);
                            var r = 0,
                                n = e.length;
                            if (0 < n)
                                for (; r < n; r++) t(e[r], r, e);
                            else
                                for (r in e) hasOwnProperty.call(e, r) && t.call(this, e[r], r)
                        }
                    }
                    var ne = function() {
                        if (Array.prototype.indexOf) return Array.prototype.indexOf
                    }();

                    function ie(e, t) {
                        return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
                    }

                    function oe(e, t, r, n) {
                        var i;
                        t = t || document, i = r ? t.getElementsByTagName(r) : t.getElementsByTagName("head");
                        try {
                            if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                                i = i[0];
                                var o = n ? null : i.firstChild;
                                return i.insertBefore(e, o)
                            }
                        } catch (e) {}
                    }

                    function ae(e, t) {
                        var r = new Image;
                        t && R.isFn(t) && (r.addEventListener("load", t), r.addEventListener("error", t)), r.src = e
                    }

                    function se(e, t) {
                        var r = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                            n = document.createElement("div");
                        n.innerHTML = r;
                        var i = n.firstChild;
                        t && R.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), R.insertElement(i, document, "html", !0)
                    }

                    function ce(e) {
                        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                        return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(U(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
                    }

                    function de(e, t, r) {
                        return null == t ? r : Q(t) ? t : $(t) ? t.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String")
                    }

                    function ue(e, t, r) {
                        return r.indexOf(e) === t
                    }

                    function le(e, t) {
                        return e.concat(t)
                    }

                    function fe(e) {
                        return Object.keys(e)
                    }

                    function pe(e, t) {
                        return e[t]
                    }
                    var ge = ve("timeToRespond", function(e, t) {
                            return t < e
                        }),
                        be = ve("responseTimestamp", function(e, t) {
                            return t < e
                        }),
                        me = ve("responseTimestamp", function(e, t) {
                            return e < t
                        });

                    function ve(e, t) {
                        return function(r, n) {
                            return r.cpm === n.cpm ? t(r[e], n[e]) ? n : r : r.cpm < n.cpm ? n : r
                        }
                    }

                    function ye(e) {
                        return o()(e)
                    }

                    function he() {
                        try {
                            return R.getWindowSelf() !== R.getWindowTop()
                        } catch (e) {
                            return !0
                        }
                    }

                    function Ie() {
                        if (window.navigator.cookieEnabled || document.cookie.length) return !0
                    }
                    var Ee = function(e, t) {
                        return e.getAdUnitPath() === t || e.getSlotElementId() === t
                    };

                    function Se(e) {
                        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
                    }

                    function Oe() {
                        try {
                            return !!window.localStorage
                        } catch (e) {
                            Y("Local storage api disabled")
                        }
                    }
                },
                1: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.registerBidder = function(e) {
                        var t = Array.isArray(e.supportedMediaTypes) ? {
                            supportedMediaTypes: e.supportedMediaTypes
                        } : void 0;

                        function r(e) {
                            var r = T(e);
                            i.default.registerBidAdapter(r, e.code, t)
                        }
                        r(e), Array.isArray(e.aliases) && e.aliases.forEach(function(t) {
                            i.default.aliasRegistry[t] = e.code, r(E({}, e, {
                                code: t
                            }))
                        })
                    }, t.newBidder = T, t.preloadBidderMappingFile = A, t.getIabSubCategory = function(e, t) {
                        var r = i.default.getBidAdapter(e);
                        if (r.getSpec().getMappingFileInfo) {
                            var n = r.getSpec().getMappingFileInfo(),
                                o = n.localStorageKey ? n.localStorageKey : r.getBidderCode(),
                                a = Object(v.getDataFromLocalStorage)(o);
                            if (a) {
                                try {
                                    a = JSON.parse(a)
                                } catch (t) {
                                    Object(v.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"))
                                }
                                return a.mapping[t] ? a.mapping[t] : null
                            }
                        }
                    }, t.isValid = w;
                    var n = r(42),
                        i = r(8),
                        o = r(3),
                        a = r(24),
                        s = r(26),
                        c = r(23),
                        d = r(31),
                        u = r(4),
                        l = r.n(u),
                        f = r(7),
                        p = r.n(f),
                        g = r(9),
                        b = r.n(g),
                        m = r(5),
                        v = r(0),
                        y = r(2),
                        h = r(13);

                    function I(e) {
                        return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function E() {
                        return (E = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var S = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
                        O = 1;

                    function T(e) {
                        return E(new n.a(e.code), {
                            getSpec: function() {
                                return Object.freeze(e)
                            },
                            registerSyncs: t,
                            callBids: function(n, i, o, s, c) {
                                if (Array.isArray(n.bids)) {
                                    var d = {},
                                        u = [],
                                        f = n.bids.filter(r);
                                    if (0 !== f.length) {
                                        var g = {};
                                        f.forEach(function(e) {
                                            (g[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                                        });
                                        var b = e.buildRequests(f, n);
                                        if (b && 0 !== b.length) {
                                            Array.isArray(b) || (b = [b]);
                                            var m = Object(v.delayExecution)(y, b.length);
                                            b.forEach(function(t) {
                                                switch (t.method) {
                                                    case "GET":
                                                        s("".concat(t.url).concat(function(e) {
                                                            return e ? "?".concat("object" === I(e) ? Object(v.parseQueryStringParameters)(e) : e) : ""
                                                        }(t.data)), {
                                                            success: r,
                                                            error: o
                                                        }, void 0, E({
                                                            method: "GET",
                                                            withCredentials: !0
                                                        }, t.options));
                                                        break;
                                                    case "POST":
                                                        s(t.url, {
                                                            success: r,
                                                            error: o
                                                        }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), E({
                                                            method: "POST",
                                                            contentType: "text/plain",
                                                            withCredentials: !0
                                                        }, t.options));
                                                        break;
                                                    default:
                                                        Object(v.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(t.type, " must be GET or POST")), m()
                                                }

                                                function r(r, o) {
                                                    c(e.code);
                                                    try {
                                                        r = JSON.parse(r)
                                                    } catch (r) {}
                                                    var s;
                                                    r = {
                                                        body: r,
                                                        headers: {
                                                            get: o.getResponseHeader.bind(o)
                                                        }
                                                    }, u.push(r);
                                                    try {
                                                        s = e.interpretResponse(r, t)
                                                    } catch (r) {
                                                        return Object(v.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, r), void m()
                                                    }

                                                    function f(t) {
                                                        var r = g[t.requestId];
                                                        if (r) {
                                                            var o = E(Object(a.a)(l.a.STATUS.GOOD, r), t);
                                                            ! function(e, t) {
                                                                d[e] = !0, w(e, t, [n]) && i(e, t)
                                                            }(r.adUnitCode, o)
                                                        } else Object(v.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(t.requestId, ". Ignoring."))
                                                    }
                                                    s && (s.forEach ? s.forEach(f) : f(s)), m(s)
                                                }

                                                function o(t) {
                                                    c(e.code), Object(v.logError)("Server call for ".concat(e.code, " failed: ").concat(t, ". Continuing without bids.")), m()
                                                }
                                            })
                                        } else y()
                                    } else y()
                                }

                                function y() {
                                    o(), p.a.emit(l.a.EVENTS.BIDDER_DONE, n), t(u, n.gdprConsent)
                                }
                            }
                        });

                        function t(t, r) {
                            if (e.getUserSyncs) {
                                var n = o.b.getConfig("userSync.filterSettings"),
                                    i = e.getUserSyncs({
                                        iframeEnabled: !!(o.b.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                                        pixelEnabled: !!(o.b.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                                    }, t, r);
                                i && (Array.isArray(i) || (i = [i]), i.forEach(function(t) {
                                    s.a.registerSync(t.type, e.code, t.url)
                                }))
                            }
                        }

                        function r(t) {
                            return !!e.isBidRequestValid(t) || (Object(v.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(t))), !1)
                        }
                    }

                    function A(e, t) {
                        if (!o.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
                        t.filter(function(e) {
                            return Object(v.deepAccess)(e, "mediaTypes.video.context") === y.a
                        }).map(function(e) {
                            return e.bids.map(function(e) {
                                return e.bidder
                            })
                        }).reduce(v.flatten, []).filter(v.uniques).forEach(function(e) {
                            var t = i.default.getBidAdapter(e);
                            if (t.getSpec().getMappingFileInfo) {
                                var r = t.getSpec().getMappingFileInfo(),
                                    n = r.refreshInDays ? r.refreshInDays : O,
                                    o = r.localStorageKey ? r.localStorageKey : t.getSpec().code,
                                    a = Object(v.getDataFromLocalStorage)(o);
                                (!a || Object(v.timestamp)() < a.lastUpdated + 24 * n * 60 * 60 * 1e3) && Object(m.a)(r.url, {
                                    success: function(t) {
                                        try {
                                            t = JSON.parse(t);
                                            var r = {
                                                lastUpdated: Object(v.timestamp)(),
                                                mapping: t.mapping
                                            };
                                            Object(v.setDataInLocalStorage)(o, JSON.stringify(r))
                                        } catch (t) {
                                            Object(v.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                                        }
                                    },
                                    error: function() {
                                        Object(v.logError)("Failed to load ".concat(e, " bidder translation file"))
                                    }
                                })
                            }
                        }), e.call(this, t)
                    }

                    function w(e, t, r) {
                        function n(e) {
                            return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
                        }
                        return e ? t ? (i = Object.keys(t), S.every(function(e) {
                            return b()(i, e) && !b()([void 0, null], t[e])
                        }) ? "native" !== t.mediaType || Object(c.f)(t, r) ? "video" !== t.mediaType || Object(d.d)(t, r) ? !("banner" === t.mediaType && ! function(e, t, r) {
                            if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                            var n = Object(v.getBidderRequest)(r, t.bidderCode, e),
                                i = n && n.bids && n.bids[0] && n.bids[0].sizes,
                                o = Object(v.parseSizesInput)(i);
                            if (1 !== o.length) return !1;
                            var a = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                            var r = [],
                                                n = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                                            } catch (e) {
                                                i = !0, o = e
                                            } finally {
                                                try {
                                                    n || null == s.return || s.return()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                            return r
                                        }
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                                }(o[0].split("x")),
                                s = a[0],
                                c = a[1];
                            return t.width = parseInt(s, 10), t.height = parseInt(c, 10), !0
                        }(e, t, r) && (Object(v.logError)(n("Banner bids require a width and height")), 1)) : (Object(v.logError)(n("Video bid does not have required vastUrl or renderer property")), !1) : (Object(v.logError)(n("Native bid missing some required properties.")), !1) : (Object(v.logError)(n("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(v.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(v.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
                        var i
                    }
                    Object(h.a)("checkAdUnitSetup").before(A)
                },
                10: function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                            var r = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                            var r = [],
                                                n = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                                            } catch (e) {
                                                i = !0, o = e
                                            } finally {
                                                try {
                                                    n || null == s.return || s.return()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                            return r
                                        }
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                                }(t.split("=")),
                                n = r[0],
                                i = r[1];
                            return /\[\]$/.test(n) ? (e[n = n.replace("[]", "")] = e[n] || [], e[n].push(i)) : e[n] = i || "", e
                        }, {}) : {}
                    }

                    function i(e) {
                        return Object.keys(e).map(function(t) {
                            return Array.isArray(e[t]) ? e[t].map(function(e) {
                                return "".concat(t, "[]=").concat(e)
                            }).join("&") : "".concat(t, "=").concat(e[t])
                        }).join("&")
                    }
                    t.d = n, t.b = i, t.c = function(e, t) {
                        var r = document.createElement("a");
                        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? r.href = e : r.href = decodeURIComponent(e);
                        var i = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                        return {
                            href: r.href,
                            protocol: (r.protocol || "").replace(/:$/, ""),
                            hostname: r.hostname,
                            port: +r.port,
                            pathname: r.pathname.replace(/^(?!\/)/, "/"),
                            search: i ? r.search : n(r.search || ""),
                            hash: (r.hash || "").replace(/^#/, ""),
                            host: r.host || window.location.host
                        }
                    }, t.a = function(e) {
                        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(i(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
                    }
                },
                11: function(e, t, r) {
                    "use strict";
                    t.a = s, t.c = function(e) {
                        return !(!e || !e.url)
                    }, t.b = function(e, t) {
                        e.render(t)
                    };
                    var n = r(52),
                        i = r(0),
                        o = r(12),
                        a = r.n(o);

                    function s(e) {
                        var t = this,
                            r = e.url,
                            o = e.config,
                            s = e.id,
                            c = e.callback,
                            d = e.loaded,
                            u = e.adUnitCode;
                        this.url = r, this.config = o, this.handlers = {}, this.id = s, this.loaded = d, this.cmd = [], this.push = function(e) {
                                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : i.logError("Commands given to Renderer.push must be wrapped in a function")
                            }, this.callback = c || function() {
                                t.loaded = !0, t.process()
                            },
                            function(e) {
                                var t = pbjs.adUnits,
                                    r = a()(t, function(t) {
                                        return t.code === e
                                    });
                                return !!(r && r.renderer && r.renderer.url && r.renderer.render)
                            }(u) ? i.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u)) : Object(n.b)(r, this.callback, !0)
                    }
                    s.install = function(e) {
                        return new s({
                            url: e.url,
                            config: e.config,
                            id: e.id,
                            callback: e.callback,
                            loaded: e.loaded,
                            adUnitCode: e.adUnitCode
                        })
                    }, s.prototype.getConfig = function() {
                        return this.config
                    }, s.prototype.setRender = function(e) {
                        this.render = e
                    }, s.prototype.setEventHandlers = function(e) {
                        this.handlers = e
                    }, s.prototype.handleVideoEvent = function(e) {
                        var t = e.id,
                            r = e.eventName;
                        "function" == typeof this.handlers[r] && this.handlers[r](), i.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(r))
                    }, s.prototype.process = function() {
                        for (; 0 < this.cmd.length;) try {
                            this.cmd.shift().call()
                        } catch (e) {
                            i.logError("Error processing Renderer command: ", e)
                        }
                    }
                },
                12: function(e, t, r) {
                    r(80), e.exports = r(16).Array.find
                },
                13: function(e, t, r) {
                    "use strict";
                    r.d(t, "b", function() {
                        return o
                    }), r.d(t, "a", function() {
                        return a
                    }), t.d = function(e, t) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
                        0 === e.getHooks({
                            hook: t
                        }).length && e.before(t, r)
                    }, t.c = function(e, t) {
                        o("async", function(e) {
                            e.forEach(function(e) {
                                return t.apply(void 0, function(e) {
                                    return function(e) {
                                        if (Array.isArray(e)) {
                                            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                            return r
                                        }
                                    }(e) || function(e) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                                    }()
                                }(e))
                            })
                        }, e)([])
                    }, t.e = function(e) {
                        for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        a(e).before(function(e, t) {
                            t.push(r), e(t)
                        })
                    };
                    var n = r(91),
                        i = r.n(n),
                        o = i()({
                            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
                        }),
                        a = o.get
                },
                130: function(e, t, r) {
                    "use strict";
                    var n = r(15),
                        i = r(45)(6),
                        o = "findIndex",
                        a = !0;
                    o in [] && Array(1)[o](function() {
                        a = !1
                    }), n(n.P + n.F * a, "Array", {
                        findIndex: function(e, t) {
                            return i(this, e, 1 < arguments.length ? t : void 0)
                        }
                    }), r(37)(o)
                },
                133: function(e, t, r) {
                    "use strict";
                    t.a = function() {
                        addEventListener("message", p, !1)
                    };
                    var n = r(7),
                        i = r.n(n),
                        o = r(23),
                        a = r(4),
                        s = (r.n(a), r(0)),
                        c = r(28),
                        d = r(12),
                        u = r.n(d),
                        l = r(11),
                        f = a.EVENTS.BID_WON;

                    function p(e) {
                        var t = e.message ? "message" : "data",
                            r = {};
                        try {
                            r = JSON.parse(e[t])
                        } catch (e) {
                            return
                        }
                        if (r && r.adId) {
                            var n = u()(c.a.getBidsReceived(), function(e) {
                                return e.adId === r.adId
                            });
                            if (n && "Prebid Request" === r.message && (function(e, t, r) {
                                    var n = e.adId,
                                        i = e.ad,
                                        o = e.adUrl,
                                        a = e.width,
                                        c = e.height,
                                        d = e.renderer,
                                        f = e.cpm;
                                    Object(l.c)(d) ? Object(l.b)(d, e) : n && (function(e) {
                                        var t = e.adUnitCode,
                                            r = e.width,
                                            n = e.height;
                                        ["div:last-child", "div:last-child iframe"].forEach(function(e) {
                                            var i = function(e) {
                                                var r = function(e) {
                                                        return window.googletag ? function(e) {
                                                            return u()(window.googletag.pubads().getSlots().filter(Object(s.isSlotMatchingAdUnitCode)(e)), function(e) {
                                                                return e
                                                            }).getSlotElementId()
                                                        }(e) : window.apntag ? function(e) {
                                                            var t = window.apntag.getTag(e);
                                                            return t && t.targetId
                                                        }(e) : e
                                                    }(t),
                                                    n = document.getElementById(r);
                                                return n && n.querySelector(e)
                                            }(e);
                                            if (i) {
                                                var o = i.style;
                                                o.width = r + "px", o.height = n + "px"
                                            } else Object(s.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."))
                                        })
                                    }(e), r.postMessage(JSON.stringify({
                                        message: "Prebid Response",
                                        ad: Object(s.replaceAuctionPrice)(i, f),
                                        adUrl: Object(s.replaceAuctionPrice)(o, f),
                                        adId: n,
                                        width: a,
                                        height: c
                                    }), t))
                                }(n, r.adServerDomain, e.source), c.a.addWinningBid(n), i.a.emit(f, n)), n && "Prebid Native" === r.message) {
                                if ("assetRequest" === r.action) {
                                    var a = Object(o.c)(r, n);
                                    return void e.source.postMessage(JSON.stringify(a), e.origin)
                                }
                                if ("click" === Object(o.b)(r, n)) return;
                                c.a.addWinningBid(n), i.a.emit(f, n)
                            }
                        }
                    }
                },
                134: function(e, t, r) {
                    "use strict";
                    t.a = function(e) {
                        var t;
                        try {
                            e = e || window.sessionStorage, t = JSON.parse(e.getItem(c))
                        } catch (e) {}
                        t && l(t, !0)
                    };
                    var n = r(3),
                        i = r(0),
                        o = r(40);

                    function a() {
                        return (a = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var s, c = "pbjs:debugging";

                    function d(e) {
                        Object(i.logMessage)("DEBUG: " + e)
                    }

                    function u() {
                        o.c.getHooks({
                            hook: s
                        }).remove()
                    }

                    function l(e, t) {
                        var r = 1 < arguments.length && void 0 !== t && t;
                        n.b.setConfig({
                            debug: !0
                        }), d("bidder overrides enabled".concat(r ? " from session" : "")), u(), s = function(e, t, r) {
                            Array.isArray(this.bidders) && -1 === this.bidders.indexOf(r.bidderCode) ? function(e) {
                                Object(i.logWarn)("DEBUG: " + e)
                            }("bidder '".concat(r.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(this.bids) && this.bids.forEach(function(e) {
                                e.bidder && e.bidder !== r.bidderCode || e.adUnitCode && e.adUnitCode !== t || (r = a({}, r), Object.keys(e).filter(function(e) {
                                    return -1 === ["bidder", "adUnitCode"].indexOf(e)
                                }).forEach(function(n) {
                                    var i = e[n];
                                    d("bidder overrides changed '".concat(t, "/").concat(r.bidderCode, "' bid.").concat(n, " from '").concat(r[n], "' to '").concat(i, "'")), r[n] = i
                                }))
                            }), e(t, r))
                        }.bind(e), o.c.before(s, 5)
                    }
                    n.b.getConfig("debugging", function(e) {
                        return function(e) {
                            if (e.enabled) {
                                try {
                                    window.sessionStorage.setItem(c, JSON.stringify(e))
                                } catch (e) {}
                                l(e)
                            } else {
                                u(), d("bidder overrides disabled");
                                try {
                                    window.sessionStorage.removeItem(c)
                                } catch (e) {}
                            }
                        }(e.debugging)
                    })
                },
                135: function(e, t, r) {
                    r(136), r(65), r(145), r(147), r(151), r(154), r(156), e.exports = r(16).Set
                },
                136: function(e, t) {},
                137: function(e, t, r) {
                    var n = r(47),
                        i = r(35);
                    e.exports = function(e) {
                        return function(t, r) {
                            var o, a, s = String(i(t)),
                                c = n(r),
                                d = s.length;
                            return c < 0 || d <= c ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || 56319 < o || c + 1 === d || (a = s.charCodeAt(c + 1)) < 56320 || 57343 < a ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
                        }
                    }
                },
                138: function(e, t, r) {
                    e.exports = r(21)
                },
                139: function(e, t, r) {
                    "use strict";
                    var n = r(66),
                        i = r(44),
                        o = r(55),
                        a = {};
                    r(21)(a, r(14)("iterator"), function() {
                        return this
                    }), e.exports = function(e, t, r) {
                        e.prototype = n(a, {
                            next: i(1, r)
                        }), o(e, t + " Iterator")
                    }
                },
                14: function(e, t, r) {
                    var n = r(59)("wks"),
                        i = r(48),
                        o = r(19).Symbol,
                        a = "function" == typeof o;
                    (e.exports = function(e) {
                        return n[e] || (n[e] = a && o[e] || (a ? o : i)("Symbol." + e))
                    }).store = n
                },
                140: function(e, t, r) {
                    var n = r(20),
                        i = r(29),
                        o = r(141);
                    e.exports = r(22) ? Object.defineProperties : function(e, t) {
                        i(e);
                        for (var r, a = o(t), s = a.length, c = 0; c < s;) n.f(e, r = a[c++], t[r]);
                        return e
                    }
                },
                141: function(e, t, r) {
                    var n = r(142),
                        i = r(67);
                    e.exports = Object.keys || function(e) {
                        return n(e, i)
                    }
                },
                142: function(e, t, r) {
                    var n = r(30),
                        i = r(49),
                        o = r(61)(!1),
                        a = r(54)("IE_PROTO");
                    e.exports = function(e, t) {
                        var r, s = i(e),
                            c = 0,
                            d = [];
                        for (r in s) r != a && n(s, r) && d.push(r);
                        for (; t.length > c;) n(s, r = t[c++]) && (~o(d, r) || d.push(r));
                        return d
                    }
                },
                143: function(e, t, r) {
                    var n = r(19).document;
                    e.exports = n && n.documentElement
                },
                144: function(e, t, r) {
                    var n = r(30),
                        i = r(46),
                        o = r(54)("IE_PROTO"),
                        a = Object.prototype;
                    e.exports = Object.getPrototypeOf || function(e) {
                        return e = i(e), n(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
                    }
                },
                145: function(e, t, r) {
                    r(146);
                    for (var n = r(19), i = r(21), o = r(32), a = r(14)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
                        var d = s[c],
                            u = n[d],
                            l = u && u.prototype;
                        l && !l[a] && i(l, a, d), o[d] = o.Array
                    }
                },
                146: function(e, t, r) {
                    "use strict";
                    var n = r(37),
                        i = r(68),
                        o = r(32),
                        a = r(49);
                    e.exports = r(53)(Array, "Array", function(e, t) {
                        this._t = a(e), this._i = 0, this._k = t
                    }, function() {
                        var e = this._t,
                            t = this._k,
                            r = this._i++;
                        return !e || r >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
                    }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
                },
                147: function(e, t, r) {
                    "use strict";
                    var n = r(148),
                        i = r(76);
                    e.exports = r(150)("Set", function(e) {
                        return function(t) {
                            return e(this, 0 < arguments.length ? t : void 0)
                        }
                    }, {
                        add: function(e) {
                            return n.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
                        }
                    }, n)
                },
                148: function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        var r, n = g(t);
                        if ("F" !== n) return e._i[n];
                        for (r = e._f; r; r = r.n)
                            if (r.k == t) return r
                    }
                    var i = r(20).f,
                        o = r(66),
                        a = r(69),
                        s = r(25),
                        c = r(70),
                        d = r(41),
                        u = r(53),
                        l = r(68),
                        f = r(149),
                        p = r(22),
                        g = r(75).fastKey,
                        b = r(76),
                        m = p ? "_s" : "size";
                    e.exports = {
                        getConstructor: function(e, t, r, u) {
                            var l = e(function(e, n) {
                                c(e, l, t, "_i"), e._t = t, e._i = o(null), e._f = void 0, e._l = void 0, e[m] = 0, null != n && d(n, r, e[u], e)
                            });
                            return a(l.prototype, {
                                clear: function() {
                                    for (var e = b(this, t), r = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete r[n.i];
                                    e._f = e._l = void 0, e[m] = 0
                                },
                                delete: function(e) {
                                    var r = b(this, t),
                                        i = n(r, e);
                                    if (i) {
                                        var o = i.n,
                                            a = i.p;
                                        delete r._i[i.i], i.r = !0, a && (a.n = o), o && (o.p = a), r._f == i && (r._f = o), r._l == i && (r._l = a), r[m]--
                                    }
                                    return !!i
                                },
                                forEach: function(e, r) {
                                    b(this, t);
                                    for (var n, i = s(e, 1 < arguments.length ? r : void 0, 3); n = n ? n.n : this._f;)
                                        for (i(n.v, n.k, this); n && n.r;) n = n.p
                                },
                                has: function(e) {
                                    return !!n(b(this, t), e)
                                }
                            }), p && i(l.prototype, "size", {
                                get: function() {
                                    return b(this, t)[m]
                                }
                            }), l
                        },
                        def: function(e, t, r) {
                            var i, o, a = n(e, t);
                            return a ? a.v = r : (e._l = a = {
                                i: o = g(t, !0),
                                k: t,
                                v: r,
                                p: i = e._l,
                                n: void 0,
                                r: !1
                            }, e._f || (e._f = a), i && (i.n = a), e[m]++, "F" !== o && (e._i[o] = a)), e
                        },
                        getEntry: n,
                        setStrong: function(e, t, r) {
                            u(e, t, function(e, r) {
                                this._t = b(e, t), this._k = r, this._l = void 0
                            }, function() {
                                for (var e = this, t = e._k, r = e._l; r && r.r;) r = r.p;
                                return e._t && (e._l = r = r ? r.n : e._t._f) ? l(0, "keys" == t ? r.k : "values" == t ? r.v : [r.k, r.v]) : (e._t = void 0, l(1))
                            }, r ? "entries" : "values", !r, !0), f(t)
                        }
                    }
                },
                149: function(e, t, r) {
                    "use strict";
                    var n = r(19),
                        i = r(16),
                        o = r(20),
                        a = r(22),
                        s = r(14)("species");
                    e.exports = function(e) {
                        var t = "function" == typeof i[e] ? i[e] : n[e];
                        a && t && !t[s] && o.f(t, s, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                },
                15: function(e, t, r) {
                    var n = r(19),
                        i = r(16),
                        o = r(25),
                        a = r(21),
                        s = r(30),
                        c = "prototype",
                        d = function(e, t, r) {
                            var u, l, f, p = e & d.F,
                                g = e & d.G,
                                b = e & d.S,
                                m = e & d.P,
                                v = e & d.B,
                                y = e & d.W,
                                h = g ? i : i[t] || (i[t] = {}),
                                I = h[c],
                                E = g ? n : b ? n[t] : (n[t] || {})[c];
                            for (u in g && (r = t), r)(l = !p && E && void 0 !== E[u]) && s(h, u) || (f = l ? E[u] : r[u], h[u] = g && "function" != typeof E[u] ? r[u] : v && l ? o(f, n) : y && E[u] == f ? function(e) {
                                function t(t, r, n) {
                                    if (this instanceof e) {
                                        switch (arguments.length) {
                                            case 0:
                                                return new e;
                                            case 1:
                                                return new e(t);
                                            case 2:
                                                return new e(t, r)
                                        }
                                        return new e(t, r, n)
                                    }
                                    return e.apply(this, arguments)
                                }
                                return t[c] = e[c], t
                            }(f) : m && "function" == typeof f ? o(Function.call, f) : f, m && ((h.virtual || (h.virtual = {}))[u] = f, e & d.R && I && !I[u] && a(I, u, f)))
                        };
                    d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
                },
                150: function(e, t, r) {
                    "use strict";
                    var n = r(19),
                        i = r(15),
                        o = r(75),
                        a = r(33),
                        s = r(21),
                        c = r(69),
                        d = r(41),
                        u = r(70),
                        l = r(18),
                        f = r(55),
                        p = r(20).f,
                        g = r(45)(0),
                        b = r(22);
                    e.exports = function(e, t, r, m, v, y) {
                        var h = n[e],
                            I = h,
                            E = v ? "set" : "add",
                            S = I && I.prototype,
                            O = {};
                        return b && "function" == typeof I && (y || S.forEach && !a(function() {
                            (new I).entries().next()
                        })) ? (I = t(function(t, r) {
                            u(t, I, e, "_c"), t._c = new h, null != r && d(r, v, t[E], t)
                        }), g("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                            var t = "add" == e || "set" == e;
                            e in S && (!y || "clear" != e) && s(I.prototype, e, function(r, n) {
                                if (u(this, I, e), !t && y && !l(r)) return "get" == e && void 0;
                                var i = this._c[e](0 === r ? 0 : r, n);
                                return t ? this : i
                            })
                        }), y || p(I.prototype, "size", {
                            get: function() {
                                return this._c.size
                            }
                        })) : (I = m.getConstructor(t, e, v, E), c(I.prototype, r), o.NEED = !0), f(I, e), O[e] = I, i(i.G + i.W + i.F, O), y || m.setStrong(I, e, v), I
                    }
                },
                151: function(e, t, r) {
                    var n = r(15);
                    n(n.P + n.R, "Set", {
                        toJSON: r(152)("Set")
                    })
                },
                152: function(e, t, r) {
                    var n = r(74),
                        i = r(153);
                    e.exports = function(e) {
                        return function() {
                            if (n(this) != e) throw TypeError(e + "#toJSON isn't generic");
                            return i(this)
                        }
                    }
                },
                153: function(e, t, r) {
                    var n = r(41);
                    e.exports = function(e, t) {
                        var r = [];
                        return n(e, !1, r.push, r, t), r
                    }
                },
                154: function(e, t, r) {
                    r(155)("Set")
                },
                155: function(e, t, r) {
                    "use strict";
                    var n = r(15);
                    e.exports = function(e) {
                        n(n.S, e, { of: function() {
                                for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                                return new this(t)
                            }
                        })
                    }
                },
                156: function(e, t, r) {
                    r(157)("Set")
                },
                157: function(e, t, r) {
                    "use strict";
                    var n = r(15),
                        i = r(56),
                        o = r(25),
                        a = r(41);
                    e.exports = function(e) {
                        n(n.S, e, {
                            from: function(e, t, r) {
                                var n, s, c, d, u = t;
                                return i(this), (n = void 0 !== u) && i(u), null == e ? new this : (s = [], n ? (c = 0, d = o(u, r, 2), a(e, !1, function(e) {
                                    s.push(d(e, c++))
                                })) : a(e, !1, s.push, s), new this(s))
                            }
                        })
                    }
                },
                158: function(e, t, r) {
                    r(65), r(159), e.exports = r(16).Array.from
                },
                159: function(e, t, r) {
                    "use strict";
                    var n = r(25),
                        i = r(15),
                        o = r(46),
                        a = r(71),
                        s = r(72),
                        c = r(36),
                        d = r(160),
                        u = r(73);
                    i(i.S + i.F * !r(161)(function(e) {
                        Array.from(e)
                    }), "Array", {
                        from: function(e, t, r) {
                            var i, l, f, p, g = o(e),
                                b = "function" == typeof this ? this : Array,
                                m = arguments.length,
                                v = 1 < m ? t : void 0,
                                y = void 0 !== v,
                                h = 0,
                                I = u(g);
                            if (y && (v = n(v, 2 < m ? r : void 0, 2)), null == I || b == Array && s(I))
                                for (l = new b(i = c(g.length)); h < i; h++) d(l, h, y ? v(g[h], h) : g[h]);
                            else
                                for (p = I.call(g), l = new b; !(f = p.next()).done; h++) d(l, h, y ? a(p, v, [f.value, h], !0) : f.value);
                            return l.length = h, l
                        }
                    })
                },
                16: function(e, t) {
                    var r = e.exports = {
                        version: "2.6.9"
                    };
                    "number" == typeof __e && (__e = r)
                },
                160: function(e, t, r) {
                    "use strict";
                    var n = r(20),
                        i = r(44);
                    e.exports = function(e, t, r) {
                        t in e ? n.f(e, t, i(0, r)) : e[t] = r
                    }
                },
                161: function(e, t, r) {
                    var n = r(14)("iterator"),
                        i = !1;
                    try {
                        var o = [7][n]();
                        o.return = function() {
                            i = !0
                        }, Array.from(o, function() {
                            throw 2
                        })
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !i) return !1;
                        var r = !1;
                        try {
                            var o = [7],
                                a = o[n]();
                            a.next = function() {
                                return {
                                    done: r = !0
                                }
                            }, o[n] = function() {
                                return a
                            }, e(o)
                        } catch (e) {}
                        return r
                    }
                },
                18: function(e, t) {
                    e.exports = function(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }
                },
                19: function(e, t) {
                    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = r)
                },
                2: function(e, t, r) {
                    "use strict";
                    r.d(t, "c", function() {
                        return n
                    }), r.d(t, "d", function() {
                        return i
                    }), r.d(t, "b", function() {
                        return o
                    }), r.d(t, "a", function() {
                        return a
                    });
                    var n = "native",
                        i = "video",
                        o = "banner",
                        a = "adpod"
                },
                20: function(e, t, r) {
                    var n = r(29),
                        i = r(81),
                        o = r(82),
                        a = Object.defineProperty;
                    t.f = r(22) ? Object.defineProperty : function(e, t, r) {
                        if (n(e), t = o(t, !0), n(r), i) try {
                            return a(e, t, r)
                        } catch (e) {}
                        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                        return "value" in r && (e[t] = r.value), e
                    }
                },
                21: function(e, t, r) {
                    var n = r(20),
                        i = r(44);
                    e.exports = r(22) ? function(e, t, r) {
                        return n.f(e, t, i(1, r))
                    } : function(e, t, r) {
                        return e[t] = r, e
                    }
                },
                22: function(e, t, r) {
                    e.exports = !r(33)(function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })
                },
                23: function(e, t, r) {
                    "use strict";
                    r.d(t, "e", function() {
                        return c
                    }), r.d(t, "a", function() {
                        return d
                    }), t.g = function(e) {
                        return e && e.type && function(e) {
                            return !(!e || !o()(Object.keys(u), e)) || (Object(n.logError)("".concat(e, " nativeParam is not supported")), !1)
                        }(e.type) ? u[e.type] : e
                    }, t.f = function(e, t) {
                        var r = Object(n.getBidRequest)(e.requestId, t);
                        if (!r) return !1;
                        if (!Object(n.deepAccess)(e, "native.clickUrl")) return !1;
                        if (Object(n.deepAccess)(e, "native.image") && (!Object(n.deepAccess)(e, "native.image.height") || !Object(n.deepAccess)(e, "native.image.width"))) return !1;
                        if (Object(n.deepAccess)(e, "native.icon") && (!Object(n.deepAccess)(e, "native.icon.height") || !Object(n.deepAccess)(e, "native.icon.width"))) return !1;
                        var i = r.nativeParams;
                        if (!i) return !0;
                        var a = Object.keys(i).filter(function(e) {
                                return i[e].required
                            }),
                            s = Object.keys(e.native).filter(function(t) {
                                return e.native[t]
                            });
                        return a.every(function(e) {
                            return o()(s, e)
                        })
                    }, t.b = function(e, t) {
                        var r;
                        return "click" === e.action ? r = t.native && t.native.clickTrackers : (r = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(n.insertHtmlIntoIframe)(t.native.javascriptTrackers)), (r || []).forEach(n.triggerPixel), e.action
                    }, t.d = function(e, t) {
                        var r = {};
                        return Object.keys(e.native).forEach(function(i) {
                            var o = s.NATIVE_KEYS[i],
                                a = l(e.native[i]);
                            Object(n.deepAccess)(t, "mediaTypes.native.".concat(i, ".sendId")) && (a = "".concat(o, ":").concat(e.adId)), o && a && (r[o] = a)
                        }), r
                    }, t.c = function(e, t) {
                        var r = {
                            message: "assetResponse",
                            adId: e.adId,
                            assets: []
                        };
                        return e.assets.forEach(function(e) {
                            var i = Object(n.getKeyByValue)(s.NATIVE_KEYS, e),
                                o = l(t.native[i]);
                            r.assets.push({
                                key: i,
                                value: o
                            })
                        }), r
                    };
                    var n = r(0),
                        i = r(9),
                        o = r.n(i);

                    function a(e) {
                        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var s = r(4),
                        c = [],
                        d = Object.keys(s.NATIVE_KEYS).map(function(e) {
                            return s.NATIVE_KEYS[e]
                        }),
                        u = {
                            image: {
                                image: {
                                    required: !0
                                },
                                title: {
                                    required: !0
                                },
                                sponsoredBy: {
                                    required: !0
                                },
                                clickUrl: {
                                    required: !0
                                },
                                body: {
                                    required: !1
                                },
                                icon: {
                                    required: !1
                                }
                            }
                        };

                    function l(e) {
                        return "object" === a(e) && e.url ? e.url : e
                    }
                },
                24: function(e, t, r) {
                    "use strict";
                    t.a = function(e, t) {
                        return new function(e, t) {
                            var r = t && t.src || "client",
                                i = e || 0;
                            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                                switch (i) {
                                    case 0:
                                        return "Pending";
                                    case 1:
                                        return "Bid available";
                                    case 2:
                                        return "Bid returned empty or error response";
                                    case 3:
                                        return "Bid timed out"
                                }
                            }(), this.adId = n.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
                                return i
                            }, this.getSize = function() {
                                return this.width + "x" + this.height
                            }
                        }(e, t)
                    };
                    var n = r(0)
                },
                25: function(e, t, r) {
                    var n = r(56);
                    e.exports = function(e, t, r) {
                        if (n(e), void 0 === t) return e;
                        switch (r) {
                            case 1:
                                return function(r) {
                                    return e.call(t, r)
                                };
                            case 2:
                                return function(r, n) {
                                    return e.call(t, r, n)
                                };
                            case 3:
                                return function(r, n, i) {
                                    return e.call(t, r, n, i)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }
                },
                250: function(e, t, r) {
                    r(251), e.exports = r(16).String.includes
                },
                251: function(e, t, r) {
                    "use strict";
                    var n = r(15),
                        i = r(252),
                        o = "includes";
                    n(n.P + n.F * r(254)(o), "String", {
                        includes: function(e, t) {
                            return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
                        }
                    })
                },
                252: function(e, t, r) {
                    var n = r(253),
                        i = r(35);
                    e.exports = function(e, t, r) {
                        if (n(t)) throw TypeError("String#" + r + " doesn't accept regex!");
                        return String(i(e))
                    }
                },
                253: function(e, t, r) {
                    var n = r(18),
                        i = r(34),
                        o = r(14)("match");
                    e.exports = function(e) {
                        var t;
                        return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
                    }
                },
                254: function(e, t, r) {
                    var n = r(14)("match");
                    e.exports = function(e) {
                        var t = /./;
                        try {
                            "/./" [e](t)
                        } catch (r) {
                            try {
                                return t[n] = !1, !"/./" [e](t)
                            } catch (e) {}
                        }
                        return !0
                    }
                },
                257: function(e, t, r) {
                    "use strict";
                    var n = r(0),
                        i = r(50),
                        o = r(23),
                        a = r(1),
                        s = r(5),
                        c = r(3),
                        d = r(9),
                        u = r.n(d),
                        l = r(12),
                        f = r.n(l),
                        p = r(51),
                        g = r(38);

                    function b() {
                        return (b = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var m, v = r(0),
                        y = r(4),
                        h = r(7),
                        I = {},
                        E = I.bidderRegistry = {},
                        S = I.aliasRegistry = {},
                        O = {};
                    c.b.getConfig("s2sConfig", function(e) {
                        O = e.s2sConfig
                    });
                    var T = {};

                    function A(e) {
                        var t = e.bidderCode,
                            r = e.auctionId,
                            a = e.bidderRequestId,
                            s = e.adUnits,
                            c = e.labels,
                            d = e.src;
                        return s.reduce(function(e, s) {
                            var u = Object(i.b)(Object(i.a)(s, c), s.mediaTypes, s.sizes),
                                l = u.active,
                                f = u.mediaTypes,
                                g = u.filterResults;
                            return l ? g && v.logInfo('Size mapping filtered adUnit "'.concat(s.code, '" banner sizes from '), g.before, "to ", g.after) : v.logInfo('Size mapping disabled adUnit "'.concat(s.code, '"')), l && e.push(s.bids.filter(function(e) {
                                return e.bidder === t
                            }).reduce(function(e, t) {
                                var u = s.nativeParams || v.deepAccess(s, "mediaTypes.native");
                                u && (t = b({}, t, {
                                    nativeParams: Object(o.g)(u)
                                })), t = b({}, t, Object(n.getDefinedParams)(s, ["mediaType", "renderer"]));
                                var l = Object(i.b)(Object(i.a)(t, c), f),
                                    g = l.active,
                                    m = l.mediaTypes,
                                    y = l.filterResults;
                                return g ? y && v.logInfo('Size mapping filtered adUnit "'.concat(s.code, '" bidder "').concat(t.bidder, '" banner sizes from '), y.before, "to ", y.after) : v.logInfo('Size mapping deactivated adUnit "'.concat(s.code, '" bidder "').concat(t.bidder, '"')), v.isValidMediaTypes(m) ? t = b({}, t, {
                                    mediaTypes: m
                                }) : v.logError("mediaTypes is not correctly configured for adunit ".concat(s.code)), g && e.push(b({}, t, {
                                    adUnitCode: s.code,
                                    transactionId: s.transactionId,
                                    sizes: v.deepAccess(m, "banner.sizes") || v.deepAccess(m, "video.playerSize") || [],
                                    bidId: t.bid_id || v.getUniqueIdentifierStr(),
                                    bidderRequestId: a,
                                    auctionId: r,
                                    src: d,
                                    bidRequestsCount: p.a.getCounter(s.code)
                                })), e
                            }, [])), e
                        }, []).reduce(n.flatten, []).filter(function(e) {
                            return "" !== e
                        })
                    }
                    var w = {
                        consentData: null,
                        setConsentData: function(e) {
                            w.consentData = e
                        },
                        getConsentData: function() {
                            return w.consentData
                        }
                    };

                    function _() {
                        return O && O.enabled && O.testing && m
                    }

                    function C(e, t, r) {
                        try {
                            var n = E[e].getSpec();
                            n && n[t] && "function" == typeof n[t] && (v.logInfo("Invoking ".concat(e, ".").concat(t)), n[t](r))
                        } catch (r) {
                            v.logWarn("Error calling ".concat(t, " of ").concat(e))
                        }
                    }
                    I.makeBidRequests = function(e, t, r, i, o) {
                        var a = [],
                            s = Object(n.getBidderCodes)(e);
                        c.b.getConfig("bidderSequence") === c.a && (s = Object(n.shuffle)(s));
                        var d, l = Object(g.b)(),
                            p = s,
                            b = [];
                        if (O.enabled) {
                            if (_()) {
                                var h = m.getSourceBidderMap(e);
                                b = h[m.CLIENT]
                            }
                            var I = O.bidders;
                            p = s.filter(function(e) {
                                return !u()(I, e) || u()(b, e)
                            }), Boolean(_() && O.testServerOnly) && (d = e, Boolean(f()(d, function(e) {
                                return f()(e.bids, function(e) {
                                    return (e.bidSource || O.bidderControl && O.bidderControl[e.bidder]) && e.finalSource === m.SERVER
                                })
                            }))) && (p.length = 0);
                            var S = function(e) {
                                    var t = O.bidders,
                                        r = v.deepClone(e);
                                    return r.forEach(function(e) {
                                        e.bids = e.bids.filter(function(e) {
                                            return u()(t, e.bidder) && (!_() || e.finalSource !== m.CLIENT)
                                        }).map(function(e) {
                                            return e.bid_id = v.getUniqueIdentifierStr(), e
                                        })
                                    }), r.filter(function(e) {
                                        return 0 !== e.bids.length
                                    })
                                }(e),
                                T = v.generateUUID();
                            I.forEach(function(e) {
                                var n = v.getUniqueIdentifierStr(),
                                    i = {
                                        bidderCode: e,
                                        auctionId: r,
                                        bidderRequestId: n,
                                        tid: T,
                                        bids: A({
                                            bidderCode: e,
                                            auctionId: r,
                                            bidderRequestId: n,
                                            adUnits: v.deepClone(S),
                                            labels: o,
                                            src: y.S2S.SRC
                                        }),
                                        auctionStart: t,
                                        timeout: O.timeout,
                                        src: y.S2S.SRC,
                                        refererInfo: l
                                    };
                                0 !== i.bids.length && a.push(i)
                            }), S.forEach(function(e) {
                                var t = e.bids.filter(function(e) {
                                    return f()(a, function(t) {
                                        return f()(t.bids, function(t) {
                                            return t.bidId === e.bid_id
                                        })
                                    })
                                });
                                e.bids = t
                            }), a.forEach(function(e) {
                                e.adUnitsS2SCopy = S.filter(function(e) {
                                    return 0 < e.bids.length
                                })
                            })
                        }
                        var C = function(e) {
                            var t = v.deepClone(e);
                            return t.forEach(function(e) {
                                e.bids = e.bids.filter(function(e) {
                                    return !_() || e.finalSource !== m.SERVER
                                })
                            }), t.filter(function(e) {
                                return 0 !== e.bids.length
                            })
                        }(e);
                        return p.forEach(function(e) {
                            var n = v.getUniqueIdentifierStr(),
                                s = {
                                    bidderCode: e,
                                    auctionId: r,
                                    bidderRequestId: n,
                                    bids: A({
                                        bidderCode: e,
                                        auctionId: r,
                                        bidderRequestId: n,
                                        adUnits: v.deepClone(C),
                                        labels: o,
                                        src: "client"
                                    }),
                                    auctionStart: t,
                                    timeout: i,
                                    refererInfo: l
                                },
                                c = E[e];
                            c || v.logError("Trying to make a request for bidder that does not exist: ".concat(e)), c && s.bids && 0 !== s.bids.length && a.push(s)
                        }), w.getConsentData() && a.forEach(function(e) {
                            e.gdprConsent = w.getConsentData()
                        }), a
                    }, I.callBids = function(e, t, r, i, o, a, c) {
                        if (t.length) {
                            var d = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                            var r = [],
                                                n = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                                            } catch (e) {
                                                i = !0, o = e
                                            } finally {
                                                try {
                                                    n || null == s.return || s.return()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                            return r
                                        }
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                                }(t.reduce(function(e, t) {
                                    return e[Number(void 0 !== t.src && t.src === y.S2S.SRC)].push(t), e
                                }, [
                                    [],
                                    []
                                ])),
                                l = d[0],
                                f = d[1];
                            if (f.length) {
                                var p = Object(s.b)(a, o ? {
                                        request: o.request.bind(null, "s2s"),
                                        done: o.done
                                    } : void 0),
                                    g = O.bidders,
                                    b = E[O.adapter],
                                    m = f[0].tid,
                                    I = f[0].adUnitsS2SCopy;
                                if (b) {
                                    var S = {
                                        tid: m,
                                        ad_units: I
                                    };
                                    if (S.ad_units.length) {
                                        var T = f.map(function(e) {
                                                return e.start = Object(n.timestamp)(), i.bind(e)
                                            }),
                                            A = S.ad_units.reduce(function(e, t) {
                                                return e.concat((t.bids || []).reduce(function(e, t) {
                                                    return e.concat(t.bidder)
                                                }, []))
                                            }, []);
                                        v.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(g.filter(function(e) {
                                            return u()(A, e)
                                        }).join(","))), f.forEach(function(e) {
                                            h.emit(y.EVENTS.BID_REQUESTED, e)
                                        }), b.callBids(S, f, function(e, t) {
                                            var i = Object(n.getBidderRequest)(f, t.bidderCode, e);
                                            i && r.call(i, e, t)
                                        }, function() {
                                            return T.forEach(function(e) {
                                                return e()
                                            })
                                        }, p)
                                    }
                                }
                            }
                            l.forEach(function(e) {
                                e.start = Object(n.timestamp)();
                                var t = E[e.bidderCode];
                                v.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), h.emit(y.EVENTS.BID_REQUESTED, e);
                                var d = Object(s.b)(a, o ? {
                                    request: o.request.bind(null, e.bidderCode),
                                    done: o.done
                                } : void 0);
                                t.callBids(e, r.bind(e), i.bind(e), d, c)
                            })
                        } else v.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
                    }, I.videoAdapters = [], I.registerBidAdapter = function(e, t) {
                        var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                            n = void 0 === r ? [] : r;
                        e && t ? "function" == typeof e.callBids ? (E[t] = e, u()(n, "video") && I.videoAdapters.push(t), u()(n, "native") && o.e.push(t)) : v.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : v.logError("bidAdaptor or bidderCode not specified")
                    }, I.aliasBidAdapter = function(e, t) {
                        if (void 0 === E[t]) {
                            var r = E[e];
                            if (void 0 === r) {
                                var n = c.b.getConfig("s2sConfig"),
                                    i = n && n.bidders;
                                i && u()(i, t) ? S[t] = e : v.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            } else try {
                                var s, d = function(e) {
                                    var t = [];
                                    return u()(I.videoAdapters, e) && t.push("video"), u()(o.e, e) && t.push("native"), t
                                }(e);
                                if (r.constructor.prototype != Object.prototype)(s = new r.constructor).setBidderCode(t);
                                else {
                                    var l = r.getSpec();
                                    s = Object(a.newBidder)(b({}, l, {
                                        code: t
                                    })), S[t] = e
                                }
                                I.registerBidAdapter(s, t, {
                                    supportedMediaTypes: d
                                })
                            } catch (t) {
                                v.logError(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                            }
                        } else v.logMessage('alias name "' + t + '" has been already specified.')
                    }, I.registerAnalyticsAdapter = function(e) {
                        var t = e.adapter,
                            r = e.code;
                        t && r ? "function" == typeof t.enableAnalytics ? (t.code = r, T[r] = t) : v.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(r, '"\n        analytics adapter must implement an enableAnalytics() function')) : v.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
                    }, I.enableAnalytics = function(e) {
                        v.isArray(e) || (e = [e]), v._each(e, function(e) {
                            var t = T[e.provider];
                            t ? t.enableAnalytics(e) : v.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
                        })
                    }, I.getBidAdapter = function(e) {
                        return E[e]
                    }, I.callTimedOutBidders = function(e, t, r) {
                        t = t.map(function(t) {
                            return t.params = v.getUserConfiguredParams(e, t.adUnitCode, t.bidder), t.timeout = r, t
                        }), t = v.groupBy(t, "bidder"), Object.keys(t).forEach(function(e) {
                            C(e, "onTimeout", t[e])
                        })
                    }, I.callBidWonBidder = function(e, t, r) {
                        t.params = v.getUserConfiguredParams(r, t.adUnitCode, t.bidder), C(e, "onBidWon", t)
                    }, I.callSetTargetingBidder = function(e, t) {
                        C(e, "onSetTargeting", t)
                    }, t.a = I
                },
                26: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return v
                    });
                    var n = r(0),
                        i = r(3),
                        o = r(9),
                        a = r.n(o);

                    function s(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                var r = [],
                                    n = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        n || null == s.return || s.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return r
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }

                    function c() {
                        return (c = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    i.b.setDefaults({
                        userSync: {
                            syncEnabled: !0,
                            pixelEnabled: !0,
                            syncsPerBidder: 5,
                            syncDelay: 3e3
                        }
                    });
                    var d, u, l, f, p, g, b, m = !n.isSafariBrowser() && n.cookiesAreEnabled(),
                        v = (d = {
                            config: i.b.getConfig("userSync"),
                            browserSupportsCookies: m
                        }, u = {}, l = {
                            image: [],
                            iframe: []
                        }, f = new Set, g = {
                            image: !(p = {}),
                            iframe: !1
                        }, b = d.config, i.b.getConfig("userSync", function(e) {
                            b = c(b, e.userSync)
                        }), u.registerSync = function(e, t, r) {
                            return f.has(t) ? n.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : b.syncEnabled && n.isArray(l[e]) ? t ? 0 !== b.syncsPerBidder && Number(p[t]) >= b.syncsPerBidder ? n.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : u.canBidderRegisterSync(e, t) ? (l[e].push([t, r]), void(p = function(e, t) {
                                return e[t] ? e[t] += 1 : e[t] = 1, e
                            }(p, t))) : n.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : n.logWarn("Bidder is required for registering sync") : n.logWarn('User sync type "'.concat(e, '" not supported'))
                        }, u.syncUsers = function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (e) return setTimeout(y, Number(e));
                            y()
                        }, u.triggerUserSyncs = function() {
                            b.enableOverride && u.syncUsers()
                        }, u.canBidderRegisterSync = function(e, t) {
                            if (b.filterSettings) {
                                if (function(e, t) {
                                        var r = b.filterSettings;
                                        if (function(e, t) {
                                                if (e.all && e[t]) return n.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                                                var r = e.all ? e.all : e[t],
                                                    i = e.all ? "all" : t;
                                                if (!r) return !1;
                                                var o = r.filter,
                                                    a = r.bidders;
                                                return o && "include" !== o && "exclude" !== o ? (n.logWarn('UserSync "filterSettings.'.concat(i, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === a || Array.isArray(a) && 0 < a.length && a.every(function(e) {
                                                    return n.isStr(e) && "*" !== e
                                                })) || (n.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(i, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                                            }(r, e)) {
                                            g[e] = !0;
                                            var i = r.all ? r.all : r[e],
                                                o = "*" === i.bidders ? [t] : i.bidders;
                                            return {
                                                include: function(e, t) {
                                                    return !a()(e, t)
                                                },
                                                exclude: function(e, t) {
                                                    return a()(e, t)
                                                }
                                            }[i.filter || "include"](o, t)
                                        }
                                        return !1
                                    }(e, t)) return !1
                            } else {
                                if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                                if ("iframe" === e && !b.iframeEnabled && !g.iframe) return !1;
                                if ("image" === e && !b.pixelEnabled && !g.image) return !1
                            }
                            return !0
                        }, u);

                    function y() {
                        if (b.syncEnabled && d.browserSupportsCookies) {
                            try {
                                (b.pixelEnabled || g.image) && h(l.image, function(e) {
                                    var t = s(e, 2),
                                        r = t[0],
                                        i = t[1];
                                    n.logMessage("Invoking image pixel user sync for bidder: ".concat(r)), n.triggerPixel(i)
                                }), (b.iframeEnabled || g.iframe) && h(l.iframe, function(e) {
                                    var t = s(e, 2),
                                        r = t[0],
                                        i = t[1];
                                    n.logMessage("Invoking iframe user sync for bidder: ".concat(r)), n.insertUserSyncIframe(i)
                                })
                            } catch (e) {
                                return n.logError("Error firing user syncs", e)
                            }
                            l = {
                                image: [],
                                iframe: []
                            }
                        }
                    }

                    function h(e, t) {
                        n.shuffle(e).forEach(function(e) {
                            t(e), f.add(e[0])
                        })
                    }
                },
                27: function(e, t, r) {
                    "use strict";
                    t.a = function() {
                        return window.pbjs
                    }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
                },
                28: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return u
                    });
                    var n, i, o = r(0),
                        a = r(40),
                        s = r(12),
                        c = r.n(s),
                        d = r(4),
                        u = (n = [], (i = {}).addWinningBid = function(e) {
                            var t = c()(n, function(t) {
                                return t.getAuctionId() === e.auctionId
                            });
                            t ? t.addWinningBid(e) : utils.logWarn("Auction not found when adding winning bid")
                        }, i.getAllWinningBids = function() {
                            return n.map(function(e) {
                                return e.getWinningBids()
                            }).reduce(o.flatten, [])
                        }, i.getBidsRequested = function() {
                            return n.map(function(e) {
                                return e.getBidRequests()
                            }).reduce(o.flatten, [])
                        }, i.getNoBids = function() {
                            return n.map(function(e) {
                                return e.getNoBids()
                            }).reduce(o.flatten, [])
                        }, i.getBidsReceived = function() {
                            return n.map(function(e) {
                                if (e.getAuctionStatus() === a.a) return e.getBidsReceived()
                            }).reduce(o.flatten, []).filter(function(e) {
                                return e
                            })
                        }, i.getAdUnits = function() {
                            return n.map(function(e) {
                                return e.getAdUnits()
                            }).reduce(o.flatten, [])
                        }, i.getAdUnitCodes = function() {
                            return n.map(function(e) {
                                return e.getAdUnitCodes()
                            }).reduce(o.flatten, []).filter(o.uniques)
                        }, i.createAuction = function(e) {
                            var t = e.adUnits,
                                r = e.adUnitCodes,
                                i = e.callback,
                                o = e.cbTimeout,
                                s = e.labels,
                                c = e.auctionId,
                                d = Object(a.j)({
                                    adUnits: t,
                                    adUnitCodes: r,
                                    callback: i,
                                    cbTimeout: o,
                                    labels: s,
                                    auctionId: c
                                });
                            return function(e) {
                                n.push(e)
                            }(d), d
                        }, i.findBidByAdId = function(e) {
                            return c()(n.map(function(e) {
                                return e.getBidsReceived()
                            }).reduce(o.flatten, []), function(t) {
                                return t.adId === e
                            })
                        }, i.getStandardBidderAdServerTargeting = function() {
                            return Object(a.i)()[d.JSON_MAPPING.ADSERVER_TARGETING]
                        }, i.setStatusForBids = function(e, t) {
                            var r = i.findBidByAdId(e);
                            if (r && (r.status = t), r && t === d.BID_STATUS.BID_TARGETING_SET) {
                                var o = c()(n, function(e) {
                                    return e.getAuctionId() === r.auctionId
                                });
                                o && o.setBidTargeting(r)
                            }
                        }, i.getLastAuctionId = function() {
                            return n.length && n[n.length - 1].getAuctionId()
                        }, i)
                },
                29: function(e, t, r) {
                    var n = r(18);
                    e.exports = function(e) {
                        if (!n(e)) throw TypeError(e + " is not an object!");
                        return e
                    }
                },
                3: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return b
                    }), r.d(t, "b", function() {
                        return S
                    });
                    var n = r(43),
                        i = r(12),
                        o = r.n(i),
                        a = r(9),
                        s = r.n(a),
                        c = r(10);

                    function d() {
                        return (d = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function u(e) {
                        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var l = r(0),
                        f = r(4),
                        p = "TRUE" === (Object(c.d)(window.location.search)[f.DEBUG_MODE] || "").toUpperCase(),
                        g = window.location.origin,
                        b = "random",
                        m = {};
                    m[b] = !0, m.fixed = !0;
                    var v, y, h, I = b,
                        E = {
                            LOW: "low",
                            MEDIUM: "medium",
                            HIGH: "high",
                            AUTO: "auto",
                            DENSE: "dense",
                            CUSTOM: "custom"
                        },
                        S = (h = [], O(), {
                            getConfig: function() {
                                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                                    return e ? l.deepAccess(y, e) : y
                                }
                                return function(e, t) {
                                    var r = t;
                                    return "string" != typeof e && (r = e, e = "*"), "function" == typeof r ? (h.push({
                                        topic: e,
                                        callback: r
                                    }), function() {
                                        h.splice(h.indexOf(t), 1)
                                    }) : void l.logError("listener must be a function")
                                }.apply(void 0, arguments)
                            },
                            setConfig: function(e) {
                                if ("object" === u(e)) {
                                    var t = {};
                                    Object.keys(e).forEach(function(r) {
                                        var n = e[r];
                                        "object" === u(v[r]) && "object" === u(n) && (n = d({}, v[r], n)), t[r] = y[r] = n
                                    }), T(t)
                                } else l.logError("setConfig options must be an object")
                            },
                            setDefaults: function(e) {
                                "object" === u(v) ? (d(v, e), d(y, e)) : l.logError("defaults must be an object")
                            },
                            resetConfig: O
                        });

                    function O() {
                        var e = {
                            _debug: p,
                            get debug() {
                                return this._debug
                            },
                            set debug(e) {
                                this._debug = e
                            },
                            _bidderTimeout: 3e3,
                            get bidderTimeout() {
                                return this._bidderTimeout
                            },
                            set bidderTimeout(e) {
                                this._bidderTimeout = e
                            },
                            _publisherDomain: g,
                            get publisherDomain() {
                                return this._publisherDomain
                            },
                            set publisherDomain(e) {
                                this._publisherDomain = e
                            },
                            _priceGranularity: E.MEDIUM,
                            set priceGranularity(e) {
                                r(e) && ("string" == typeof e ? this._priceGranularity = t(e) ? e : E.MEDIUM : "object" === u(e) && (this._customPriceBucket = e, this._priceGranularity = E.CUSTOM, l.logMessage("Using custom price granularity")))
                            },
                            get priceGranularity() {
                                return this._priceGranularity
                            },
                            _customPriceBucket: {},
                            get customPriceBucket() {
                                return this._customPriceBucket
                            },
                            _mediaTypePriceGranularity: {},
                            get mediaTypePriceGranularity() {
                                return this._mediaTypePriceGranularity
                            },
                            set mediaTypePriceGranularity(e) {
                                var n = this;
                                this._mediaTypePriceGranularity = Object.keys(e).reduce(function(i, o) {
                                    return r(e[o]) ? "string" == typeof e ? i[o] = t(e[o]) ? e[o] : n._priceGranularity : "object" === u(e) && (i[o] = e[o], l.logMessage("Using custom price granularity for ".concat(o))) : l.logWarn("Invalid price granularity for media type: ".concat(o)), i
                                }, {})
                            },
                            _sendAllBids: !0,
                            get enableSendAllBids() {
                                return this._sendAllBids
                            },
                            set enableSendAllBids(e) {
                                this._sendAllBids = e
                            },
                            _useBidCache: !(v = {}),
                            get useBidCache() {
                                return this._useBidCache
                            },
                            set useBidCache(e) {
                                this._useBidCache = e
                            },
                            _bidderSequence: I,
                            get bidderSequence() {
                                return this._bidderSequence
                            },
                            set bidderSequence(e) {
                                m[e] ? this._bidderSequence = e : l.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                            },
                            _timeoutBuffer: 400,
                            get timeoutBuffer() {
                                return this._timeoutBuffer
                            },
                            set timeoutBuffer(e) {
                                this._timeoutBuffer = e
                            },
                            _disableAjaxTimeout: !1,
                            get disableAjaxTimeout() {
                                return this._disableAjaxTimeout
                            },
                            set disableAjaxTimeout(e) {
                                this._disableAjaxTimeout = e
                            }
                        };

                        function t(e) {
                            return o()(Object.keys(E), function(t) {
                                return e === E[t]
                            })
                        }

                        function r(e) {
                            if (!e) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                            if ("string" == typeof e) t(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                            else if ("object" === u(e) && !Object(n.b)(e)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                            return !0
                        }
                        y && T(Object.keys(y).reduce(function(t, r) {
                            return y[r] !== e[r] && (t[r] = e[r] || {}), t
                        }, {})), y = e
                    }

                    function T(e) {
                        var t = Object.keys(e);
                        h.filter(function(e) {
                            return s()(t, e.topic)
                        }).forEach(function(t) {
                            t.callback(function(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }({}, t.topic, e[t.topic]))
                        }), h.filter(function(e) {
                            return "*" === e.topic
                        }).forEach(function(t) {
                            return t.callback(e)
                        })
                    }
                },
                30: function(e, t) {
                    var r = {}.hasOwnProperty;
                    e.exports = function(e, t) {
                        return r.call(e, t)
                    }
                },
                31: function(e, t, r) {
                    "use strict";
                    r.d(t, "b", function() {
                        return s
                    }), r.d(t, "a", function() {
                        return c
                    }), t.d = function(e, t) {
                        var r = Object(n.getBidRequest)(e.requestId, t),
                            i = r && Object(n.deepAccess)(r, "mediaTypes.video"),
                            o = i && Object(n.deepAccess)(i, "context");
                        return d(e, r, i, o)
                    }, r.d(t, "c", function() {
                        return d
                    }), r(8);
                    var n = r(0),
                        i = r(3),
                        o = r(9),
                        a = (r.n(o), r(13)),
                        s = "outstream",
                        c = "instream",
                        d = Object(a.b)("sync", function(e, t, r, o) {
                            return !t || r && o !== s ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(n.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : o !== s || !(!e.renderer && !t.renderer)
                        }, "checkVideoBidSetup")
                },
                32: function(e, t) {
                    e.exports = {}
                },
                33: function(e, t) {
                    e.exports = function(e) {
                        try {
                            return !!e()
                        } catch (e) {
                            return !0
                        }
                    }
                },
                34: function(e, t) {
                    var r = {}.toString;
                    e.exports = function(e) {
                        return r.call(e).slice(8, -1)
                    }
                },
                35: function(e, t) {
                    e.exports = function(e) {
                        if (null == e) throw TypeError("Can't call method on  " + e);
                        return e
                    }
                },
                36: function(e, t, r) {
                    var n = r(47),
                        i = Math.min;
                    e.exports = function(e) {
                        return 0 < e ? i(n(e), 9007199254740991) : 0
                    }
                },
                37: function(e, t) {
                    e.exports = function() {}
                },
                371: function(e, t, r) {
                    r(372), e.exports = r(16).Number.isInteger
                },
                372: function(e, t, r) {
                    var n = r(15);
                    n(n.S, "Number", {
                        isInteger: r(373)
                    })
                },
                373: function(e, t, r) {
                    var n = r(18),
                        i = Math.floor;
                    e.exports = function(e) {
                        return !n(e) && isFinite(e) && i(e) === e
                    }
                },
                38: function(e, t, r) {
                    "use strict";
                    t.a = o, r.d(t, "b", function() {
                        return a
                    });
                    var n = r(0);

                    function i() {
                        return (i = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function o(e) {
                        function t() {
                            var t = function() {
                                    var t, o = [];
                                    do {
                                        try {
                                            t = t ? t.parent : e;
                                            try {
                                                var a = t == e.top,
                                                    s = {
                                                        referrer: t.document.referrer || null,
                                                        location: t.location.href || null,
                                                        isTop: a
                                                    };
                                                a && (s = i(s, {
                                                    canonicalUrl: r(t.document)
                                                })), o.push(s)
                                            } catch (a) {
                                                o.push({
                                                    referrer: null,
                                                    location: null,
                                                    isTop: t == e.top
                                                }), Object(n.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                            }
                                        } catch (a) {
                                            return o.push({
                                                referrer: null,
                                                location: null,
                                                isTop: !1
                                            }), o
                                        }
                                    } while (t != e.top);
                                    return o
                                }(),
                                o = function() {
                                    try {
                                        if (!e.location.ancestorOrigins) return;
                                        return e.location.ancestorOrigins
                                    } catch (e) {}
                                }();
                            if (o)
                                for (var a = 0, s = o.length; a < s; a++) t[a].ancestor = o[a];
                            return t
                        }

                        function r(e) {
                            try {
                                var t = e.querySelector("link[rel='canonical']");
                                if (null !== t) return t.href
                            } catch (e) {}
                            return null
                        }
                        return function() {
                            try {
                                var e, r = t(),
                                    n = r.length - 1,
                                    i = null !== r[n].location || 0 < n && null !== r[n - 1].referrer,
                                    o = function(e) {
                                        var t, r = [],
                                            n = null,
                                            i = null,
                                            o = null,
                                            a = null,
                                            s = null;
                                        for (t = e.length - 1; 0 <= t; t--) {
                                            try {
                                                n = e[t].location
                                            } catch (e) {}
                                            if (n) r.push(n), s = s || n;
                                            else if (0 !== t) {
                                                i = e[t - 1];
                                                try {
                                                    o = i.referrer, a = i.ancestor
                                                } catch (e) {}
                                                o ? (r.push(o), s = s || o) : a ? (r.push(a), s = s || a) : r.push(null)
                                            } else r.push(null)
                                        }
                                        return {
                                            stack: r,
                                            detectedRefererUrl: s
                                        }
                                    }(r);
                                return r[r.length - 1].canonicalUrl && (e = r[r.length - 1].canonicalUrl), {
                                    referer: o.detectedRefererUrl,
                                    reachedTop: i,
                                    numIframes: n,
                                    stack: o.stack,
                                    canonicalUrl: e
                                }
                            } catch (e) {}
                        }
                    }
                    var a = o(window)
                },
                39: function(e, t, r) {
                    r(130), e.exports = r(16).Array.findIndex
                },
                4: function(e, t) {
                    e.exports = {
                        JSON_MAPPING: {
                            PL_CODE: "code",
                            PL_SIZE: "sizes",
                            PL_BIDS: "bids",
                            BD_BIDDER: "bidder",
                            BD_ID: "paramsd",
                            BD_PL_ID: "placementId",
                            ADSERVER_TARGETING: "adserverTargeting",
                            BD_SETTING_STANDARD: "standard"
                        },
                        DEBUG_MODE: "pbjs_debug",
                        STATUS: {
                            GOOD: 1,
                            NO_BID: 2
                        },
                        CB: {
                            TYPE: {
                                ALL_BIDS_BACK: "allRequestedBidsBack",
                                AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                                BID_WON: "bidWon",
                                REQUEST_BIDS: "requestBids"
                            }
                        },
                        EVENTS: {
                            AUCTION_INIT: "auctionInit",
                            AUCTION_END: "auctionEnd",
                            BID_ADJUSTMENT: "bidAdjustment",
                            BID_TIMEOUT: "bidTimeout",
                            BID_REQUESTED: "bidRequested",
                            BID_RESPONSE: "bidResponse",
                            NO_BID: "noBid",
                            BID_WON: "bidWon",
                            BIDDER_DONE: "bidderDone",
                            SET_TARGETING: "setTargeting",
                            REQUEST_BIDS: "requestBids",
                            ADD_AD_UNITS: "addAdUnits",
                            AD_RENDER_FAILED: "adRenderFailed"
                        },
                        AD_RENDER_FAILED_REASON: {
                            PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                            NO_AD: "noAd",
                            EXCEPTION: "exception",
                            CANNOT_FIND_AD: "cannotFindAd",
                            MISSING_DOC_OR_ADID: "missingDocOrAdid"
                        },
                        EVENT_ID_PATHS: {
                            bidWon: "adUnitCode"
                        },
                        GRANULARITY_OPTIONS: {
                            LOW: "low",
                            MEDIUM: "medium",
                            HIGH: "high",
                            AUTO: "auto",
                            DENSE: "dense",
                            CUSTOM: "custom"
                        },
                        TARGETING_KEYS: {
                            BIDDER: "hb_bidder",
                            AD_ID: "hb_adid",
                            CPM: "hb_cpm",
                            PRICE_BUCKET: "hb_pb",
                            SIZE: "hb_size",
                            DEAL: "hb_deal",
                            SOURCE: "hb_source",
                            FORMAT: "hb_format",
                            TIME_TO_RESPOND: "hb_ttr",
                            AUCTION_ID: "hb_auction",
                            UUID: "hb_uuid",
                            CACHE_ID: "hb_cache_id",
                            CACHE_HOST: "hb_cache_host"
                        },
                        NATIVE_KEYS: {
                            title: "hb_native_title",
                            body: "hb_native_body",
                            body2: "hb_native_body2",
                            privacyLink: "hb_native_privacy",
                            privacyIcon: "hb_native_privicon",
                            sponsoredBy: "hb_native_brand",
                            image: "hb_native_image",
                            icon: "hb_native_icon",
                            clickUrl: "hb_native_linkurl",
                            displayUrl: "hb_native_displayurl",
                            cta: "hb_native_cta",
                            rating: "hb_native_rating",
                            address: "hb_native_address",
                            downloads: "hb_native_downloads",
                            likes: "hb_native_likes",
                            phone: "hb_native_phone",
                            price: "hb_native_price",
                            salePrice: "hb_native_saleprice"
                        },
                        S2S: {
                            SRC: "s2s",
                            DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                            SYNCED_BIDDERS_KEY: "pbjsSyncs"
                        },
                        BID_STATUS: {
                            BID_TARGETING_SET: "targetingSet",
                            RENDERED: "rendered"
                        }
                    }
                },
                40: function(e, t, r) {
                    "use strict";
                    r.d(t, "b", function() {
                        return S
                    }), r.d(t, "a", function() {
                        return O
                    }), t.j = function(e) {
                        var t, r, i, a, s = e.adUnits,
                            u = e.adUnitCodes,
                            l = e.callback,
                            f = e.cbTimeout,
                            j = e.labels,
                            N = e.auctionId,
                            x = s,
                            U = j,
                            k = u,
                            B = [],
                            q = [],
                            z = [],
                            M = N || v.generateUUID(),
                            L = l,
                            W = f,
                            G = [],
                            V = new Set;

                        function F() {
                            return {
                                auctionId: M,
                                timestamp: t,
                                auctionEnd: r,
                                auctionStatus: i,
                                adUnits: x,
                                adUnitCodes: k,
                                labels: U,
                                bidderRequests: B,
                                noBids: z,
                                bidsReceived: q,
                                winningBids: G,
                                timeout: W
                            }
                        }

                        function Y(e, t) {
                            if (t && clearTimeout(a), void 0 === r) {
                                var o = [];
                                e && (v.logMessage("Auction ".concat(M, " timedOut")), (o = function(e, t) {
                                    return B.map(function(e) {
                                        return (e.bids || []).filter(function(e) {
                                            return !t.has(e.bidder)
                                        })
                                    }).reduce(n.flatten, []).map(function(e) {
                                        return {
                                            bidId: e.bidId,
                                            bidder: e.bidder,
                                            adUnitCode: e.adUnitCode,
                                            auctionId: e.auctionId
                                        }
                                    })
                                }(0, V)).length && h.emit(I.EVENTS.BID_TIMEOUT, o)), i = O, r = Date.now(), h.emit(I.EVENTS.AUCTION_END, F());
                                try {
                                    if (null != L) {
                                        var c = k,
                                            u = q.filter(v.bind.call(n.adUnitsFilter, this, c)).reduce(P, {});
                                        L.apply(pbjs, [u, e]), L = null
                                    }
                                } catch (e) {
                                    v.logError("Error executing bidsBackHandler", null, e)
                                } finally {
                                    o.length && y.callTimedOutBidders(s, o, W);
                                    var l = d.b.getConfig("userSync") || {};
                                    l.enableOverride || m(l.syncDelay)
                                }
                            }
                        }

                        function K() {
                            v.logInfo("Bids Received for Auction with id: ".concat(M), q), i = O, Y(!1, !0)
                        }

                        function H(e) {
                            V.add(e)
                        }
                        return {
                            addBidReceived: function(e) {
                                q = q.concat(e)
                            },
                            addNoBid: function(e) {
                                z = z.concat(e)
                            },
                            executeCallback: Y,
                            callBids: function() {
                                var e = this;
                                i = E, t = Date.now();
                                var r = y.makeBidRequests(x, t, M, W, U);
                                v.logInfo("Bids Requested for Auction with id: ".concat(M), r), r.forEach(function(e) {
                                    ! function(e) {
                                        B = B.concat(e)
                                    }(e)
                                });
                                var s = {};
                                if (r.length < 1) v.logWarn("No valid bid requests returned for auction"), K();
                                else {
                                    var u = {
                                        bidRequests: r,
                                        run: function() {
                                            ! function() {
                                                var e = Y.bind(null, !0),
                                                    t = setTimeout(e, W);
                                                a = t
                                            }(), i = S, h.emit(I.EVENTS.AUCTION_INIT, F());
                                            var t = function(e, t) {
                                                var r = 0,
                                                    i = !1,
                                                    a = new Set,
                                                    s = {};

                                                function u() {
                                                    r--, i && 0 === r && e()
                                                }
                                                return {
                                                    addBidResponse: function(e, i) {
                                                        s[i.requestId] = !0, r++;
                                                        var a = function(e) {
                                                            var t = e.adUnitCode,
                                                                r = e.bid,
                                                                i = e.bidderRequest,
                                                                a = e.auctionId,
                                                                s = i.start,
                                                                u = b({}, r, {
                                                                    auctionId: a,
                                                                    responseTimestamp: Object(n.timestamp)(),
                                                                    requestTimestamp: s,
                                                                    cpm: parseFloat(r.cpm) || 0,
                                                                    bidder: r.bidderCode,
                                                                    adUnitCode: t
                                                                });
                                                            u.timeToRespond = u.responseTimestamp - u.requestTimestamp, h.emit(I.EVENTS.BID_ADJUSTMENT, u);
                                                            var l = i.bids && p()(i.bids, function(e) {
                                                                    return e.adUnitCode == t
                                                                }),
                                                                f = l && l.renderer;
                                                            f && f.url && (u.renderer = c.a.install({
                                                                url: f.url
                                                            }), u.renderer.setRender(f.render));
                                                            var g = d.b.getConfig("mediaTypePriceGranularity.".concat(r.mediaType)),
                                                                m = Object(o.a)(u.cpm, "object" === function(e) {
                                                                    return ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                                                        return typeof e
                                                                    } : function(e) {
                                                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                                                    })(e)
                                                                }(g) ? g : d.b.getConfig("customPriceBucket"), d.b.getConfig("currency.granularityMultiplier"));
                                                            return u.pbLg = m.low, u.pbMg = m.med, u.pbHg = m.high, u.pbAg = m.auto, u.pbDg = m.dense, u.pbCg = m.custom, u
                                                        }({
                                                            adUnitCode: e,
                                                            bid: i,
                                                            bidderRequest: this,
                                                            auctionId: t.getAuctionId()
                                                        });
                                                        "video" === a.mediaType ? function(e, t, r, i) {
                                                            var o = !0,
                                                                a = Object(n.getBidRequest)(t.requestId, [r]),
                                                                s = a && Object(n.deepAccess)(a, "mediaTypes.video"),
                                                                c = s && Object(n.deepAccess)(s, "context");
                                                            d.b.getConfig("cache.url") && c !== g.b && (t.videoCacheKey ? t.vastUrl || (v.logError("videoCacheKey specified but not required vastUrl for video bid"), o = !1) : (o = !1, D(e, t, i, a))), o && (R(e, t), i())
                                                        }(t, a, this, u) : (R(t, a), u())
                                                    },
                                                    adapterDone: function() {
                                                        a.add(this), i = t.getBidRequests().every(function(e) {
                                                            return a.has(e)
                                                        }), this.bids.forEach(function(e) {
                                                            s[e.bidId] || (t.addNoBid(e), h.emit(I.EVENTS.NO_BID, e))
                                                        }), i && 0 === r && e()
                                                    }
                                                }
                                            }(K, e);
                                            y.callBids(x, r, function() {
                                                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                                C.apply({
                                                    dispatch: t.addBidResponse,
                                                    bidderRequest: this
                                                }, r)
                                            }, t.adapterDone, {
                                                request: function(e, t) {
                                                    f(A, t), f(s, e), w[e] || (w[e] = {
                                                        SRA: !0,
                                                        origin: t
                                                    }), 1 < s[e] && (w[e].SRA = !1)
                                                },
                                                done: function(e) {
                                                    A[e]--, _[0] && l(_[0]) && _.shift()
                                                }
                                            }, W, H)
                                        }
                                    };
                                    l(u) || (v.logWarn("queueing auction due to limited endpoint capacity"), _.push(u))
                                }

                                function l(e) {
                                    var t = !0,
                                        r = d.b.getConfig("maxRequestsPerOrigin") || T;
                                    return e.bidRequests.some(function(e) {
                                        var n = 1,
                                            i = void 0 !== e.src && e.src === I.S2S.SRC ? "s2s" : e.bidderCode;
                                        return w[i] && (!1 === w[i].SRA && (n = Math.min(e.bids.length, r)), A[w[i].origin] + n > r && (t = !1)), !t
                                    }), t && e.run(), t
                                }

                                function f(e, t) {
                                    void 0 === e[t] ? e[t] = 1 : e[t]++
                                }
                            },
                            addWinningBid: function(e) {
                                G = G.concat(e), y.callBidWonBidder(e.bidder, e, s)
                            },
                            setBidTargeting: function(e) {
                                y.callSetTargetingBidder(e.bidder, e)
                            },
                            getWinningBids: function() {
                                return G
                            },
                            getTimeout: function() {
                                return W
                            },
                            getAuctionId: function() {
                                return M
                            },
                            getAuctionStatus: function() {
                                return i
                            },
                            getAdUnits: function() {
                                return x
                            },
                            getAdUnitCodes: function() {
                                return k
                            },
                            getBidRequests: function() {
                                return B
                            },
                            getBidsReceived: function() {
                                return q
                            },
                            getNoBids: function() {
                                return z
                            }
                        }
                    }, r.d(t, "c", function() {
                        return C
                    }), t.f = j, t.d = R, r.d(t, "e", function() {
                        return D
                    }), r.d(t, "h", function() {
                        return N
                    }), r.d(t, "g", function() {
                        return x
                    }), t.i = U;
                    var n = r(0),
                        i = r(10),
                        o = r(43),
                        a = r(23),
                        s = r(62),
                        c = r(11),
                        d = r(3),
                        u = r(26),
                        l = r(13),
                        f = r(12),
                        p = r.n(f),
                        g = r(31);

                    function b() {
                        return (b = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var m = u.a.syncUsers,
                        v = r(0),
                        y = r(8).default,
                        h = r(7),
                        I = r(4),
                        E = "started",
                        S = "inProgress",
                        O = "completed";
                    h.on(I.EVENTS.BID_ADJUSTMENT, function(e) {
                        ! function(e) {
                            var t, r = e.bidderCode,
                                n = e.cpm;
                            if (pbjs.bidderSettings && (r && pbjs.bidderSettings[r] && "function" == typeof pbjs.bidderSettings[r].bidCpmAdjustment ? t = pbjs.bidderSettings[r].bidCpmAdjustment : pbjs.bidderSettings[I.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[I.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[I.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                                n = t(e.cpm, b({}, e))
                            } catch (e) {
                                v.logError("Error during bid adjustment", "bidmanager.js", e)
                            }
                            0 <= n && (e.cpm = n)
                        }(e)
                    });
                    var T = 4,
                        A = {},
                        w = {},
                        _ = [],
                        C = Object(l.b)("async", function(e, t) {
                            this.dispatch.call(this.bidderRequest, e, t)
                        }, "addBidResponse");

                    function j(e, t) {
                        t.timeToRespond > e.getTimeout() + d.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
                    }

                    function R(e, t) {
                        var r = e.getBidRequests(),
                            n = p()(r, function(e) {
                                return e.bidderCode === t.bidderCode
                            });
                        ! function(e, t) {
                            var r;
                            if (e.bidderCode && (0 < e.cpm || e.dealId)) {
                                var n = p()(t.bids, function(t) {
                                    return t.adUnitCode === e.adUnitCode
                                });
                                r = function(e, t, r) {
                                    if (!t) return {};
                                    var n = {},
                                        i = pbjs.bidderSettings;
                                    return i && (k(n, U(t.mediaType, e), t), e && i[e] && i[e][I.JSON_MAPPING.ADSERVER_TARGETING] && (k(n, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)), t.native && (n = b({}, n, Object(a.d)(t, r))), n
                                }(e.bidderCode, e, n)
                            }
                            e.adserverTargeting = b(e.adserverTargeting || {}, r)
                        }(t, n), h.emit(I.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), j(e, t)
                    }
                    var D = Object(l.b)("async", function(e, t, r, n) {
                            Object(s.b)([t], function(n, i) {
                                n ? (v.logWarn("Failed to save to the video cache: ".concat(n, ". Video bid must be discarded.")), j(e, t)) : "" === i[0].uuid ? (v.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), j(e, t)) : (t.videoCacheKey = i[0].uuid, t.vastUrl || (t.vastUrl = Object(s.a)(t.videoCacheKey)), R(e, t), r())
                            })
                        }, "callPrebidCache"),
                        N = function(e) {
                            var t = d.b.getConfig("mediaTypePriceGranularity.".concat(e));
                            return "string" == typeof e && t ? "string" == typeof t ? t : "custom" : d.b.getConfig("priceGranularity")
                        },
                        x = function(e) {
                            return function(t) {
                                return e === I.GRANULARITY_OPTIONS.AUTO ? t.pbAg : e === I.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === I.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === I.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === I.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === I.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0
                            }
                        };

                    function U(e, t) {
                        function r(e, t) {
                            return {
                                key: e,
                                val: "function" == typeof t ? function(e) {
                                    return t(e)
                                } : function(e) {
                                    return Object(n.getValue)(e, t)
                                }
                            }
                        }
                        var o = I.TARGETING_KEYS,
                            a = N(e),
                            s = pbjs.bidderSettings;
                        if (s[I.JSON_MAPPING.BD_SETTING_STANDARD] || (s[I.JSON_MAPPING.BD_SETTING_STANDARD] = {}), s[I.JSON_MAPPING.BD_SETTING_STANDARD][I.JSON_MAPPING.ADSERVER_TARGETING] || (s[I.JSON_MAPPING.BD_SETTING_STANDARD][I.JSON_MAPPING.ADSERVER_TARGETING] = [r(o.BIDDER, "bidderCode"), r(o.AD_ID, "adId"), r(o.PRICE_BUCKET, x(a)), r(o.SIZE, "size"), r(o.DEAL, "dealId"), r(o.SOURCE, "source"), r(o.FORMAT, "mediaType"), r(o.CPM, "cpm"), r(o.TIME_TO_RESPOND, "timeToRespond"), r(o.AUCTION_ID, "auctionId")]), "video" === e) {
                            var c = s[I.JSON_MAPPING.BD_SETTING_STANDARD][I.JSON_MAPPING.ADSERVER_TARGETING];
                            if ([o.UUID, o.CACHE_ID].forEach(function(e) {
                                    void 0 === p()(c, function(t) {
                                        return t.key === e
                                    }) && c.push(r(e, "videoCacheKey"))
                                }), d.b.getConfig("cache.url") && (!t || !1 !== v.deepAccess(s, "".concat(t, ".sendStandardTargeting")))) {
                                var u = Object(i.c)(d.b.getConfig("cache.url"));
                                void 0 === p()(c, function(e) {
                                    return e.key === o.CACHE_HOST
                                }) && c.push(r(o.CACHE_HOST, function(e) {
                                    return v.deepAccess(e, "adserverTargeting.".concat(o.CACHE_HOST)) ? e.adserverTargeting[o.CACHE_HOST] : u.hostname
                                }))
                            }
                        }
                        return s[I.JSON_MAPPING.BD_SETTING_STANDARD]
                    }

                    function k(e, t, r) {
                        var n = t[I.JSON_MAPPING.ADSERVER_TARGETING];
                        return r.size = r.getSize(), v._each(n, function(n) {
                            var i = n.key,
                                o = n.val;
                            if (e[i] && v.logWarn("The key: " + i + " is getting ovewritten"), v.isFn(o)) try {
                                o = o(r)
                            } catch (n) {
                                v.logError("bidmanager", "ERROR", n)
                            }(void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && i !== I.TARGETING_KEYS.DEAL || !v.isEmptyStr(o) && null != o ? e[i] = o : v.logInfo("suppressing empty key '" + i + "' from adserver targeting")
                        }), e
                    }

                    function P(e, t) {
                        return e[t.adUnitCode] || (e[t.adUnitCode] = {
                            bids: []
                        }), e[t.adUnitCode].bids.push(t), e
                    }
                },
                41: function(e, t, r) {
                    var n = r(25),
                        i = r(71),
                        o = r(72),
                        a = r(29),
                        s = r(36),
                        c = r(73),
                        d = {},
                        u = {};
                    (t = e.exports = function(e, t, r, l, f) {
                        var p, g, b, m, v = f ? function() {
                                return e
                            } : c(e),
                            y = n(r, l, t ? 2 : 1),
                            h = 0;
                        if ("function" != typeof v) throw TypeError(e + " is not iterable!");
                        if (o(v)) {
                            for (p = s(e.length); h < p; h++)
                                if ((m = t ? y(a(g = e[h])[0], g[1]) : y(e[h])) === d || m === u) return m
                        } else
                            for (b = v.call(e); !(g = b.next()).done;)
                                if ((m = i(b, y, g.value, t)) === d || m === u) return m
                    }).BREAK = d, t.RETURN = u
                },
                42: function(e, t, r) {
                    "use strict";
                    t.a = function(e) {
                        var t = e;
                        return {
                            callBids: function() {},
                            setBidderCode: function(e) {
                                t = e
                            },
                            getBidderCode: function() {
                                return t
                            }
                        }
                    }
                },
                43: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return f
                    }), r.d(t, "b", function() {
                        return g
                    });
                    var n = r(12),
                        i = r.n(n),
                        o = r(0),
                        a = 2,
                        s = {
                            buckets: [{
                                min: 0,
                                max: 5,
                                increment: .5
                            }]
                        },
                        c = {
                            buckets: [{
                                min: 0,
                                max: 20,
                                increment: .1
                            }]
                        },
                        d = {
                            buckets: [{
                                min: 0,
                                max: 20,
                                increment: .01
                            }]
                        },
                        u = {
                            buckets: [{
                                min: 0,
                                max: 3,
                                increment: .01
                            }, {
                                min: 3,
                                max: 8,
                                increment: .05
                            }, {
                                min: 8,
                                max: 20,
                                increment: .5
                            }]
                        },
                        l = {
                            buckets: [{
                                min: 0,
                                max: 5,
                                increment: .05
                            }, {
                                min: 5,
                                max: 10,
                                increment: .1
                            }, {
                                min: 10,
                                max: 20,
                                increment: .5
                            }]
                        };

                    function f(e, t) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                            n = parseFloat(e);
                        return isNaN(n) && (n = ""), {
                            low: "" === n ? "" : p(e, s, r),
                            med: "" === n ? "" : p(e, c, r),
                            high: "" === n ? "" : p(e, d, r),
                            auto: "" === n ? "" : p(e, l, r),
                            dense: "" === n ? "" : p(e, u, r),
                            custom: "" === n ? "" : p(e, t, r)
                        }
                    }

                    function p(e, t, r) {
                        var n = "";
                        if (!g(t)) return n;
                        var o = t.buckets.reduce(function(e, t) {
                                return e.max > t.max ? e : t
                            }, {
                                max: 0
                            }),
                            s = i()(t.buckets, function(t) {
                                if (e > o.max * r) {
                                    var i = t.precision;
                                    void 0 === i && (i = a), n = (t.max * r).toFixed(i)
                                } else if (e <= t.max * r && e >= t.min * r) return t
                            });
                        return s && (n = function(e, t, r) {
                            var n = void 0 !== t.precision ? t.precision : a,
                                i = t.increment * r,
                                o = t.min * r,
                                s = Math.pow(10, n + 2),
                                c = (e * s - o * s) / (i * s),
                                d = Math.floor(c) * i + o;
                            return (d = Number(d.toFixed(10))).toFixed(n)
                        }(e, s, r)), n
                    }

                    function g(e) {
                        if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                        var t = !0;
                        return e.buckets.forEach(function(e) {
                            void 0 !== e.min && e.max && e.increment || (t = !1)
                        }), t
                    }
                },
                44: function(e, t) {
                    e.exports = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }
                },
                45: function(e, t, r) {
                    var n = r(25),
                        i = r(58),
                        o = r(46),
                        a = r(36),
                        s = r(83);
                    e.exports = function(e, t) {
                        var r = 1 == e,
                            c = 2 == e,
                            d = 3 == e,
                            u = 4 == e,
                            l = 6 == e,
                            f = 5 == e || l,
                            p = t || s;
                        return function(t, s, g) {
                            for (var b, m, v = o(t), y = i(v), h = n(s, g, 3), I = a(y.length), E = 0, S = r ? p(t, I) : c ? p(t, 0) : void 0; E < I; E++)
                                if ((f || E in y) && (m = h(b = y[E], E, v), e))
                                    if (r) S[E] = m;
                                    else if (m) switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return b;
                                case 6:
                                    return E;
                                case 2:
                                    S.push(b)
                            } else if (u) return !1;
                            return l ? -1 : d || u ? u : S
                        }
                    }
                },
                46: function(e, t, r) {
                    var n = r(35);
                    e.exports = function(e) {
                        return Object(n(e))
                    }
                },
                47: function(e, t) {
                    var r = Math.ceil,
                        n = Math.floor;
                    e.exports = function(e) {
                        return isNaN(e = +e) ? 0 : (0 < e ? n : r)(e)
                    }
                },
                48: function(e, t) {
                    var r = 0,
                        n = Math.random();
                    e.exports = function(e) {
                        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
                    }
                },
                49: function(e, t, r) {
                    var n = r(58),
                        i = r(35);
                    e.exports = function(e) {
                        return n(i(e))
                    }
                },
                5: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return d
                    }), t.b = u;
                    var n = r(10),
                        i = r(3);

                    function o() {
                        return (o = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function a(e) {
                        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var s = r(0),
                        c = 4,
                        d = u();

                    function u() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.request,
                            d = t.done;
                        return function(t, u, l) {
                            var f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                            try {
                                var p, g = f.method || (l ? "POST" : "GET"),
                                    b = document.createElement("a");
                                b.href = t;
                                var m = "object" === a(u) && null !== u ? u : {
                                    success: function() {
                                        s.logMessage("xhr success")
                                    },
                                    error: function(e) {
                                        s.logError("xhr error", null, e)
                                    }
                                };
                                if ("function" == typeof u && (m.success = u), (p = new window.XMLHttpRequest).onreadystatechange = function() {
                                        if (p.readyState === c) {
                                            "function" == typeof d && d(b.origin);
                                            var e = p.status;
                                            200 <= e && e < 300 || 304 === e ? m.success(p.responseText, p) : m.error(p.statusText, p)
                                        }
                                    }, i.b.getConfig("disableAjaxTimeout") || (p.ontimeout = function() {
                                        s.logError("  xhr timeout after ", p.timeout, "ms")
                                    }), "GET" === g && l) {
                                    var v = Object(n.c)(t, f);
                                    o(v.search, l), t = Object(n.a)(v)
                                }
                                p.open(g, t, !0), i.b.getConfig("disableAjaxTimeout") || (p.timeout = e), f.withCredentials && (p.withCredentials = !0), s._each(f.customHeaders, function(e, t) {
                                    p.setRequestHeader(t, e)
                                }), f.preflight && p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), p.setRequestHeader("Content-Type", f.contentType || "text/plain"), "function" == typeof r && r(b.origin), "POST" === g && l ? p.send(l) : p.send()
                            } catch (t) {
                                s.logError("xhr construction", t)
                            }
                        }
                    }
                },
                50: function(e, t, r) {
                    "use strict";
                    t.a = function(e, t) {
                        return e.labelAll ? {
                            labelAll: !0,
                            labels: e.labelAll,
                            activeLabels: t
                        } : {
                            labelAll: !1,
                            labels: e.labelAny,
                            activeLabels: t
                        }
                    }, t.c = function(e) {
                        var t = d(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : c);
                        return !t.shouldFilter || !!t.sizesSupported[e]
                    }, t.b = function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.labels,
                            r = void 0 === t ? [] : t,
                            n = e.labelAll,
                            o = void 0 !== n && n,
                            s = e.activeLabels,
                            u = void 0 === s ? [] : s,
                            l = 1 < arguments.length ? arguments[1] : void 0,
                            f = 2 < arguments.length ? arguments[2] : void 0,
                            p = d(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : c);
                        l = Object(i.isPlainObject)(l) ? Object(i.deepClone)(l) : f ? {
                            banner: {
                                sizes: f
                            }
                        } : {};
                        var g = Object(i.deepAccess)(l, "banner.sizes");
                        p.shouldFilter && g && (l.banner.sizes = g.filter(function(e) {
                            return p.sizesSupported[e]
                        }));
                        var b = Object.keys(l),
                            m = {
                                active: b.every(function(e) {
                                    return "banner" !== e
                                }) || b.some(function(e) {
                                    return "banner" === e
                                }) && 0 < Object(i.deepAccess)(l, "banner.sizes.length") && (0 === r.length || !o && (r.some(function(e) {
                                    return p.labels[e]
                                }) || r.some(function(e) {
                                    return a()(u, e)
                                })) || o && r.reduce(function(e, t) {
                                    return e ? p.labels[t] || a()(u, t) : e
                                }, !0)),
                                mediaTypes: l
                            };
                        return g && g.length !== l.banner.sizes.length && (m.filterResults = {
                            before: g,
                            after: l.banner.sizes
                        }), m
                    };
                    var n = r(3),
                        i = r(0),
                        o = r(9),
                        a = r.n(o);

                    function s(e) {
                        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var c = [];

                    function d(e) {
                        return e.reduce(function(e, t) {
                            if ("object" === s(t) && "string" == typeof t.mediaQuery) {
                                var r = !1;
                                try {
                                    r = Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches
                                } catch (e) {
                                    Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), r = matchMedia(t.mediaQuery).matches
                                }
                                r && (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(r) {
                                    return (t[r] || []).forEach(function(t) {
                                        return e[r][t] = !0
                                    })
                                }))
                            } else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                            return e
                        }, {
                            labels: {},
                            sizesSupported: {},
                            shouldFilter: !1
                        })
                    }
                    n.b.getConfig("sizeConfig", function(e) {
                        return function(e) {
                            c = e
                        }(e.sizeConfig)
                    })
                },
                51: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return o
                    });
                    var n = r(0),
                        i = {},
                        o = {
                            incrementCounter: function(e) {
                                return i[e] = i[e] || {}, i[e].counter = Object(n.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
                            },
                            getCounter: function(e) {
                                return Object(n.deepAccess)(i, "".concat(e, ".counter")) || 0
                            }
                        }
                },
                52: function(e, t, r) {
                    "use strict";
                    t.a = function(e, t) {
                        if (t && e)
                            if (i()(s, t)) {
                                if (!a[e]) {
                                    o.logWarn("module ".concat(t, " is loading external JavaScript"));
                                    var r = document.createElement("script");
                                    r.type = "text/javascript", r.async = !0, r.src = e, o.insertElement(r), a[e] = !0
                                }
                            } else o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
                        else o.logError("cannot load external script without url and moduleCode")
                    }, t.b = function(e, t, r) {
                        e ? r ? a[e] ? t && "function" == typeof t && (a[e].loaded ? t() : a[e].callbacks.push(t)) : (a[e] = {
                            loaded: !1,
                            callbacks: []
                        }, t && "function" == typeof t && a[e].callbacks.push(t), c(e, function() {
                            a[e].loaded = !0;
                            try {
                                for (var t = 0; t < a[e].callbacks.length; t++) a[e].callbacks[t]()
                            } catch (t) {
                                o.logError("Error executing callback", "adloader.js:loadScript", t)
                            }
                        })) : c(e, t) : o.logError("Error attempting to request empty URL", "adloader.js:loadScript")
                    };
                    var n = r(9),
                        i = r.n(n),
                        o = r(0),
                        a = {},
                        s = ["criteo"];

                    function c(e, t) {
                        var r = document.createElement("script");
                        r.type = "text/javascript", r.async = !0, t && "function" == typeof t && (r.readyState ? r.onreadystatechange = function() {
                            "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, t())
                        } : r.onload = function() {
                            t()
                        }), r.src = e;
                        var n = document.getElementsByTagName("head");
                        (n = n.length ? n : document.getElementsByTagName("body")).length && (n = n[0]).insertBefore(r, n.firstChild)
                    }
                },
                53: function(e, t, r) {
                    "use strict";

                    function n() {
                        return this
                    }
                    var i = r(60),
                        o = r(15),
                        a = r(138),
                        s = r(21),
                        c = r(32),
                        d = r(139),
                        u = r(55),
                        l = r(144),
                        f = r(14)("iterator"),
                        p = !([].keys && "next" in [].keys()),
                        g = "values";
                    e.exports = function(e, t, r, b, m, v, y) {
                        function h(e) {
                            if (!p && e in w) return w[e];
                            switch (e) {
                                case "keys":
                                case g:
                                    return function() {
                                        return new r(this, e)
                                    }
                            }
                            return function() {
                                return new r(this, e)
                            }
                        }
                        d(r, t, b);
                        var I, E, S, O = t + " Iterator",
                            T = m == g,
                            A = !1,
                            w = e.prototype,
                            _ = w[f] || w["@@iterator"] || m && w[m],
                            C = _ || h(m),
                            j = m ? T ? h("entries") : C : void 0,
                            R = "Array" == t && w.entries || _;
                        if (R && (S = l(R.call(new e))) !== Object.prototype && S.next && (u(S, O, !0), i || "function" == typeof S[f] || s(S, f, n)), T && _ && _.name !== g && (A = !0, C = function() {
                                return _.call(this)
                            }), i && !y || !p && !A && w[f] || s(w, f, C), c[t] = C, c[O] = n, m)
                            if (I = {
                                    values: T ? C : h(g),
                                    keys: v ? C : h("keys"),
                                    entries: j
                                }, y)
                                for (E in I) E in w || a(w, E, I[E]);
                            else o(o.P + o.F * (p || A), t, I);
                        return I
                    }
                },
                54: function(e, t, r) {
                    var n = r(59)("keys"),
                        i = r(48);
                    e.exports = function(e) {
                        return n[e] || (n[e] = i(e))
                    }
                },
                55: function(e, t, r) {
                    var n = r(20).f,
                        i = r(30),
                        o = r(14)("toStringTag");
                    e.exports = function(e, t, r) {
                        e && !i(e = r ? e : e.prototype, o) && n(e, o, {
                            configurable: !0,
                            value: t
                        })
                    }
                },
                56: function(e, t) {
                    e.exports = function(e) {
                        if ("function" != typeof e) throw TypeError(e + " is not a function!");
                        return e
                    }
                },
                57: function(e, t, r) {
                    var n = r(18),
                        i = r(19).document,
                        o = n(i) && n(i.createElement);
                    e.exports = function(e) {
                        return o ? i.createElement(e) : {}
                    }
                },
                58: function(e, t, r) {
                    var n = r(34);
                    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                        return "String" == n(e) ? e.split("") : Object(e)
                    }
                },
                59: function(e, t, r) {
                    var n = r(16),
                        i = r(19),
                        o = "__core-js_shared__",
                        a = i[o] || (i[o] = {});
                    (e.exports = function(e, t) {
                        return a[e] || (a[e] = void 0 !== t ? t : {})
                    })("versions", []).push({
                        version: n.version,
                        mode: r(60) ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    })
                },
                60: function(e, t) {
                    e.exports = !0
                },
                61: function(e, t, r) {
                    var n = r(49),
                        i = r(36),
                        o = r(87);
                    e.exports = function(e) {
                        return function(t, r, a) {
                            var s, c = n(t),
                                d = i(c.length),
                                u = o(a, d);
                            if (e && r != r) {
                                for (; u < d;)
                                    if ((s = c[u++]) != s) return !0
                            } else
                                for (; u < d; u++)
                                    if ((e || u in c) && c[u] === r) return e || u || 0;
                            return !e && -1
                        }
                    }
                },
                62: function(e, t, r) {
                    "use strict";
                    t.b = function(e, t) {
                        var r = {
                            puts: e.map(o)
                        };
                        Object(n.a)(i.b.getConfig("cache.url"), function(e) {
                            return {
                                success: function(t) {
                                    var r;
                                    try {
                                        r = JSON.parse(t).responses
                                    } catch (t) {
                                        return void e(t, [])
                                    }
                                    r ? e(null, r) : e(new Error("The cache server didn't respond with a responses property."), [])
                                },
                                error: function(t, r) {
                                    e(new Error("Error storing video ad in the cache: ".concat(t, ": ").concat(JSON.stringify(r))), [])
                                }
                            }
                        }(t), JSON.stringify(r), {
                            contentType: "text/plain",
                            withCredentials: !0
                        })
                    }, t.a = function(e) {
                        return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
                    };
                    var n = r(5),
                        i = r(3);

                    function o(e) {
                        var t = {
                            type: "xml",
                            value: e.vastXml ? e.vastXml : function(e, t) {
                                var r = t ? "<![CDATA[".concat(t, "]]>") : "";
                                return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                            }(e.vastUrl, e.vastImpUrl),
                            ttlseconds: Number(e.ttl)
                        };
                        return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
                    }
                },
                63: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "checkAdUnitSetup", function() {
                        return M
                    });
                    var n = r(27),
                        i = r(0),
                        o = r(133),
                        a = r(26),
                        s = r(52),
                        c = r(3),
                        d = r(28),
                        u = r(64),
                        l = r(13),
                        f = r(134),
                        p = r(9),
                        g = r.n(p),
                        b = r(51),
                        m = r(11),
                        v = r(24);

                    function y(e) {
                        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function h() {
                        return (h = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var I = Object(n.a)(),
                        E = r(4),
                        S = r(0),
                        O = r(8).default,
                        T = r(7),
                        A = a.a.triggerUserSyncs,
                        w = E.EVENTS,
                        _ = w.ADD_AD_UNITS,
                        C = w.BID_WON,
                        j = w.REQUEST_BIDS,
                        R = w.SET_TARGETING,
                        D = w.AD_RENDER_FAILED,
                        N = E.AD_RENDER_FAILED_REASON,
                        x = N.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                        U = N.NO_AD,
                        k = N.EXCEPTION,
                        P = N.CANNOT_FIND_AD,
                        B = N.MISSING_DOC_OR_ADID,
                        q = {
                            bidWon: function(e) {
                                var t = d.a.getBidsRequested().map(function(e) {
                                    return e.bids.map(function(e) {
                                        return e.adUnitCode
                                    })
                                }).reduce(i.flatten).filter(i.uniques);
                                return !!S.contains(t, e) || void S.logError('The "' + e + '" placement is not defined.')
                            }
                        };

                    function z(e, t, r) {
                        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = r)
                    }
                    Object(f.a)(), I.bidderSettings = I.bidderSettings || {}, I.libLoaded = !0, I.version = "v2.33.0", S.logInfo("Prebid.js v2.33.0 loaded"), I.adUnits = I.adUnits || [], I.triggerUserSyncs = A;
                    var M = Object(l.b)("sync", function(e) {
                        return e.forEach(function(e) {
                            var t = e.mediaTypes,
                                r = S.getAdUnitSizes(e);
                            if (t && t.banner) {
                                var n = t.banner;
                                n.sizes ? (n.sizes = r, e.sizes = r) : (S.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                            } else e.sizes && (S.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = r);
                            if (t && t.video) {
                                var o = t.video;
                                if (o.playerSize)
                                    if (Array.isArray(o.playerSize) && 1 === o.playerSize.length && o.playerSize.every(function(e) {
                                            return Object(i.isArrayOfNums)(e, 2)
                                        })) e.sizes = o.playerSize;
                                    else if (Object(i.isArrayOfNums)(o.playerSize, 2)) {
                                    var a = [];
                                    a.push(o.playerSize), S.logInfo("Transforming video.playerSize from [".concat(o.playerSize, "] to [[").concat(a, "]] so it's in the proper format.")), e.sizes = o.playerSize = a
                                } else S.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                            }
                            if (t && t.native) {
                                var s = t.native;
                                s.image && s.image.sizes && !Array.isArray(s.image.sizes) && (S.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), s.image && s.image.aspect_ratios && !Array.isArray(s.image.aspect_ratios) && (S.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), s.icon && s.icon.sizes && !Array.isArray(s.icon.sizes) && (S.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                            }
                        }), e
                    }, "checkAdUnitSetup");

                    function L(e) {
                        var t = d.a[e]().filter(S.bind.call(i.adUnitsFilter, this, d.a.getAdUnitCodes())),
                            r = d.a.getLastAuctionId();
                        return t.map(function(e) {
                            return e.adUnitCode
                        }).filter(i.uniques).map(function(e) {
                            return t.filter(function(t) {
                                return t.auctionId === r && t.adUnitCode === e
                            })
                        }).filter(function(e) {
                            return e && e[0] && e[0].adUnitCode
                        }).map(function(e) {
                            return function(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }({}, e[0].adUnitCode, {
                                bids: e
                            })
                        }).reduce(function(e, t) {
                            return h(e, t)
                        }, {})
                    }

                    function W(e, t, r) {
                        var n = {};
                        n.reason = e, n.message = t, r && (n.bid = r), S.logError(t), T.emit(D, n)
                    }

                    function G(e) {
                        e.forEach(function(e) {
                            if (void 0 === e.called) try {
                                e.call(), e.called = !0
                            } catch (e) {
                                S.logError("Error processing command :", "prebid.js", e)
                            }
                        })
                    }
                    I.getAdserverTargetingForAdUnitCodeStr = function(e) {
                        if (S.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                            var t = I.getAdserverTargetingForAdUnitCode(e);
                            return S.transformAdServerTargetingObj(t)
                        }
                        S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                    }, I.getAdserverTargetingForAdUnitCode = function(e) {
                        return I.getAdserverTargeting(e)[e]
                    }, I.getAdserverTargeting = function(e) {
                        return S.logInfo("Invoking pbjs.getAdserverTargeting", arguments), u.b.getAllTargeting(e)
                    }, I.getNoBids = function() {
                        return S.logInfo("Invoking pbjs.getNoBids", arguments), L("getNoBids")
                    }, I.getBidResponses = function() {
                        return S.logInfo("Invoking pbjs.getBidResponses", arguments), L("getBidsReceived")
                    }, I.getBidResponsesForAdUnitCode = function(e) {
                        return {
                            bids: d.a.getBidsReceived().filter(function(t) {
                                return t.adUnitCode === e
                            })
                        }
                    }, I.setTargetingForGPTAsync = function(e, t) {
                        if (S.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)()) {
                            var r = u.b.getAllTargeting(e);
                            u.b.resetPresetTargeting(e), u.b.setTargetingForGPT(r, t), Object.keys(r).forEach(function(e) {
                                Object.keys(r[e]).forEach(function(t) {
                                    "hb_adid" === t && d.a.setStatusForBids(r[e][t], E.BID_STATUS.BID_TARGETING_SET)
                                })
                            }), T.emit(R, r)
                        } else S.logError("window.googletag is not defined on the page")
                    }, I.setTargetingForAst = function(e) {
                        S.logInfo("Invoking pbjs.setTargetingForAn", arguments), u.b.isApntagDefined() ? (u.b.setTargetingForAst(e), T.emit(R, u.b.getAllTargeting())) : S.logError("window.apntag is not defined on the page")
                    }, I.renderAd = function(e, t) {
                        if (S.logInfo("Invoking pbjs.renderAd", arguments), S.logMessage("Calling renderAd with adId :" + t), e && t) try {
                            var r = d.a.findBidByAdId(t);
                            if (r) {
                                r.status = E.BID_STATUS.RENDERED, r.ad = S.replaceAuctionPrice(r.ad, r.cpm), r.adUrl = S.replaceAuctionPrice(r.adUrl, r.cpm), d.a.addWinningBid(r), T.emit(C, r);
                                var n = r.height,
                                    i = r.width,
                                    o = r.ad,
                                    a = r.mediaType,
                                    s = r.adUrl,
                                    c = r.renderer,
                                    u = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                                if (S.insertElement(u, e, "body"), Object(m.c)(c)) Object(m.b)(c, r);
                                else if (e === document && !S.inIframe() || "video" === a) {
                                    var l = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                                    W(x, l, r)
                                } else if (o) {
                                    if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                                        var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                                        f && parseInt(f, 10) < 67 && e.open("text/html", "replace")
                                    }
                                    e.write(o), e.close(), z(e, i, n), S.callBurl(r)
                                } else if (s) {
                                    var p = S.createInvisibleIframe();
                                    p.height = n, p.width = i, p.style.display = "inline", p.style.overflow = "hidden", p.src = s, S.insertElement(p, e, "body"), z(e, i, n), S.callBurl(r)
                                } else {
                                    var g = "Error trying to write ad. No ad for bid response id: ".concat(t);
                                    W(U, g, r)
                                }
                            } else {
                                var b = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                                W(P, b)
                            }
                        } catch (e) {
                            var v = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                            W(k, v)
                        } else {
                            var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                            W(B, y)
                        }
                    }, I.removeAdUnit = function(e) {
                        S.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (S.isArray(e) ? e : [e]).forEach(function(e) {
                            for (var t = I.adUnits.length - 1; 0 <= t; t--) I.adUnits[t].code === e && I.adUnits.splice(t, 1)
                        }) : I.adUnits = []
                    }, I.requestBids = Object(l.b)("async", function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.bidsBackHandler,
                            r = e.timeout,
                            n = e.adUnits,
                            i = e.adUnitCodes,
                            o = e.labels,
                            a = e.auctionId;
                        T.emit(j);
                        var s = r || c.b.getConfig("bidderTimeout");
                        if (n = n || I.adUnits, S.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? n = n.filter(function(e) {
                                return g()(i, e.code)
                            }) : i = n && n.map(function(e) {
                                return e.code
                            }), (n = M(n)).forEach(function(e) {
                                var t = Object.keys(e.mediaTypes || {
                                        banner: "banner"
                                    }),
                                    r = e.bids.map(function(e) {
                                        return e.bidder
                                    }),
                                    n = O.bidderRegistry,
                                    i = c.b.getConfig("s2sConfig"),
                                    o = i && i.bidders,
                                    a = o ? r.filter(function(e) {
                                        return !g()(o, e)
                                    }) : r;
                                e.transactionId = S.generateUUID(), a.forEach(function(r) {
                                    var i = n[r],
                                        o = i && i.getSpec && i.getSpec(),
                                        a = o && o.supportedMediaTypes || ["banner"];
                                    t.some(function(e) {
                                        return g()(a, e)
                                    }) || (S.logWarn(S.unsupportedBidderMessage(e, r)), e.bids = e.bids.filter(function(e) {
                                        return e.bidder !== r
                                    }))
                                }), b.a.incrementCounter(e.code)
                            }), n && 0 !== n.length) {
                            var l = d.a.createAuction({
                                    adUnits: n,
                                    adUnitCodes: i,
                                    callback: t,
                                    cbTimeout: s,
                                    labels: o,
                                    auctionId: a
                                }),
                                f = n.length;
                            return 15 < f && S.logInfo("Current auction ".concat(l.getAuctionId(), " contains ").concat(f, " adUnits."), n), i.forEach(function(e) {
                                return u.b.setLatestAuctionForAdUnit(e, l.getAuctionId())
                            }), l.callBids(), l
                        }
                        if (S.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                            t()
                        } catch (e) {
                            S.logError("Error executing bidsBackHandler", null, e)
                        }
                    }), I.addAdUnits = function(e) {
                        S.logInfo("Invoking pbjs.addAdUnits", arguments), S.isArray(e) ? I.adUnits.push.apply(I.adUnits, e) : "object" === y(e) && I.adUnits.push(e), T.emit(_)
                    }, I.onEvent = function(e, t, r) {
                        S.logInfo("Invoking pbjs.onEvent", arguments), S.isFn(t) ? !r || q[e].call(null, r) ? T.on(e, t, r) : S.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : S.logError('The event handler provided is not a function and was not set on event "' + e + '".')
                    }, I.offEvent = function(e, t, r) {
                        S.logInfo("Invoking pbjs.offEvent", arguments), r && !q[e].call(null, r) || T.off(e, t, r)
                    }, I.registerBidAdapter = function(e, t) {
                        S.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                        try {
                            O.registerBidAdapter(e(), t)
                        } catch (e) {
                            S.logError("Error registering bidder adapter : " + e.message)
                        }
                    }, I.registerAnalyticsAdapter = function(e) {
                        S.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                        try {
                            O.registerAnalyticsAdapter(e)
                        } catch (e) {
                            S.logError("Error registering analytics adapter : " + e.message)
                        }
                    }, I.createBid = function(e) {
                        return S.logInfo("Invoking pbjs.createBid", arguments), Object(v.a)(e)
                    }, I.loadScript = function(e, t, r) {
                        S.logInfo("Invoking pbjs.loadScript", arguments), Object(s.b)(e, t, r)
                    }, I.enableAnalytics = function(e) {
                        e && !S.isEmpty(e) ? (S.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : S.logError("pbjs.enableAnalytics should be called with option {}")
                    }, I.aliasBidder = function(e, t) {
                        S.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t) : S.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
                    }, I.getAllWinningBids = function() {
                        return d.a.getAllWinningBids()
                    }, I.getAllPrebidWinningBids = function() {
                        return d.a.getBidsReceived().filter(function(e) {
                            return e.status === E.BID_STATUS.BID_TARGETING_SET
                        })
                    }, I.getHighestCpmBids = function(e) {
                        var t = Object(u.a)(d.a.getBidsReceived(), i.getLatestHighestCpmBid);
                        return u.b.getWinningBids(e, t)
                    }, I.markWinningBidAsUsed = function(e) {
                        var t = [];
                        e.adUnitCode && e.adId ? t = d.a.getBidsReceived().filter(function(t) {
                            return t.adId === e.adId && t.adUnitCode === e.adUnitCode
                        }) : e.adUnitCode ? t = u.b.getWinningBids(e.adUnitCode) : e.adId ? t = d.a.getBidsReceived().filter(function(t) {
                            return t.adId === e.adId
                        }) : S.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < t.length && (t[0].status = E.BID_STATUS.RENDERED)
                    }, I.getConfig = c.b.getConfig, I.setConfig = c.b.setConfig, I.que.push(function() {
                        return Object(o.a)()
                    }), I.cmd.push = function(e) {
                        if ("function" == typeof e) try {
                            e.call()
                        } catch (e) {
                            S.logError("Error processing command :", e.message, e.stack)
                        } else S.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
                    }, I.que.push = I.cmd.push, I.processQueue = function() {
                        l.b.ready(), G(I.que), G(I.cmd)
                    }, t.default = I
                },
                64: function(e, t, r) {
                    "use strict";
                    t.a = I, r.d(t, "b", function() {
                        return A
                    });
                    var n = r(0),
                        i = r(3),
                        o = r(23),
                        a = r(28),
                        s = r(50),
                        c = r(2),
                        d = r(9),
                        u = r.n(d);

                    function l(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }

                    function f() {
                        return (f = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function p(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    var g = r(0),
                        b = r(4),
                        m = [],
                        v = Object.keys(b.TARGETING_KEYS).map(function(e) {
                            return b.TARGETING_KEYS[e]
                        }),
                        y = function(e) {
                            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(n.timestamp)()
                        },
                        h = function(e) {
                            return e && (e.status && !u()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status) || !e.status)
                        };

                    function I(e, t) {
                        var r = [],
                            i = Object(n.groupBy)(e, "adUnitCode");
                        return Object.keys(i).forEach(function(e) {
                            var o = Object(n.groupBy)(i[e], "bidderCode");
                            Object.keys(o).forEach(function(e) {
                                return r.push(o[e].reduce(t))
                            })
                        }), r
                    }

                    function E(e, t) {
                        return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
                    }
                    var S, O, T, A = (S = a.a, T = {}, (O = {}).setLatestAuctionForAdUnit = function(e, t) {
                        T[e] = t
                    }, O.resetPresetTargeting = function(e) {
                        if (Object(n.isGptPubadsDefined)()) {
                            var t = _(e),
                                r = S.getAdUnits().filter(function(e) {
                                    return u()(t, e.code)
                                });
                            window.googletag.pubads().getSlots().forEach(function(e) {
                                m.forEach(function(t) {
                                    r.forEach(function(r) {
                                        r.code !== e.getAdUnitPath() && r.code !== e.getSlotElementId() || e.setTargeting(t, null)
                                    })
                                })
                            })
                        }
                    }, O.resetPresetTargetingAST = function(e) {
                        _(e).forEach(function(e) {
                            var t = window.apntag.getTag(e);
                            if (t && t.keywords) {
                                var r = {};
                                Object.keys(t.keywords).forEach(function(e) {
                                    u()(m, e.toLowerCase()) || (r[e] = t.keywords[e])
                                }), window.apntag.modifyTag(e, {
                                    keywords: r
                                })
                            }
                        })
                    }, O.getAllTargeting = function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : C(),
                            r = _(e),
                            a = function(e, t) {
                                var r = O.getWinningBids(e, t),
                                    n = j();
                                return r.map(function(e) {
                                    return p({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function(t) {
                                        return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === n.indexOf(t)
                                    }).reduce(function(t, r) {
                                        var n = [e.adserverTargeting[r]],
                                            i = p({}, r.substring(0, 20), n);
                                        if (r !== b.TARGETING_KEYS.DEAL) return [].concat(l(t), [i]);
                                        var o = p({}, "".concat(r, "_").concat(e.bidderCode).substring(0, 20), n);
                                        return [].concat(l(t), [i, o])
                                    }, []))
                                })
                            }(r, t),
                            s = a.concat(function(e, t) {
                                return t.filter(function(t) {
                                    return u()(e, t.adUnitCode)
                                }).map(function(e) {
                                    return f({}, e)
                                }).reduce(R, []).map(N).filter(function(e) {
                                    return e
                                })
                            }(r, t)).concat(i.b.getConfig("enableSendAllBids") ? function(e, t) {
                                var r = v.concat(o.a);
                                return I(t, n.getHighestCpm).map(function(t) {
                                    if (w(t, e)) return p({}, t.adUnitCode, x(t, r.filter(function(e) {
                                        return void 0 !== t.adserverTargeting[e]
                                    })))
                                }).filter(function(e) {
                                    return e
                                })
                            }(r, t) : function(e, t) {
                                if (!0 !== i.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                                var r = v.concat(o.a);
                                return I(t, n.getHighestCpm).map(function(t) {
                                    if (t.dealId && w(t, e)) return p({}, t.adUnitCode, x(t, r.filter(function(e) {
                                        return void 0 !== t.adserverTargeting[e]
                                    })))
                                }).filter(function(e) {
                                    return e
                                })
                            }(r, t));
                        s.map(function(e) {
                            Object.keys(e).map(function(t) {
                                e[t].map(function(e) {
                                    -1 === m.indexOf(Object.keys(e)[0]) && (m = Object.keys(e).concat(m))
                                })
                            })
                        });
                        var c = 0 < a.length,
                            d = S.getBidsRequested().some(function(e) {
                                return 0 === e.doneCbCallCount
                            });
                        !c && d && function(e, t) {
                            s.push(p({}, e, [{
                                hb_ttr: [-1]
                            }]))
                        }(r[0]), s = s.map(function(e) {
                            return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                                return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                            }).reduce(function(e, t) {
                                return f(t, e)
                            }, {}))
                        }).reduce(function(e, t) {
                            var r = Object.keys(t)[0];
                            return e[r] = f({}, e[r], t[r]), e
                        }, {});
                        var g = i.b.getConfig("targetingControls.auctionKeyMaxChars");
                        return g && (Object(n.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(g, " characters.  Running checks on auction keys...")), s = function(e, t) {
                            var r = Object(n.deepClone)(e);
                            return Object.keys(r).map(function(e) {
                                return {
                                    adUnitCode: e,
                                    adUnitTargeting: r[e]
                                }
                            }).sort(E).reduce(function(e, i, o, a) {
                                var s = function(e) {
                                    return Object.keys(e).reduce(function(t, r) {
                                        return t + "".concat(r, "%3d").concat(encodeURIComponent(e[r]), "%26")
                                    }, "")
                                }(i.adUnitTargeting);
                                o + 1 === a.length && (s = s.slice(0, -3));
                                var c = i.adUnitCode,
                                    d = s.length;
                                return d <= t ? (t -= d, Object(n.logInfo)("AdUnit '".concat(c, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(t), r[c]), e[c] = r[c]) : Object(n.logWarn)("The following keys for adUnitCode '".concat(c, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(t, ".\n"), r[c]), o + 1 === a.length && 0 === Object.keys(e).length && Object(n.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                            }, {})
                        }(s, g)), r.forEach(function(e) {
                            s[e] || (s[e] = {})
                        }), s
                    }, O.setTargetingForGPT = function(e, t) {
                        window.googletag.pubads().getSlots().forEach(function(r) {
                            Object.keys(e).filter(t ? t(r) : Object(n.isAdUnitCodeMatchingSlot)(r)).forEach(function(t) {
                                return Object.keys(e[t]).forEach(function(n) {
                                    var i = e[t][n].split(",");
                                    (i = 1 < i.length ? [i] : i).map(function(e) {
                                        return g.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(n, " value: ").concat(e)), e
                                    }).forEach(function(e) {
                                        r.setTargeting(n, e)
                                    })
                                })
                            })
                        })
                    }, O.getWinningBids = function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : C(),
                            r = _(e);
                        return t.filter(function(e) {
                            return u()(r, e.adUnitCode)
                        }).filter(function(e) {
                            return 0 < e.cpm
                        }).map(function(e) {
                            return e.adUnitCode
                        }).filter(n.uniques).map(function(e) {
                            return t.filter(function(t) {
                                return t.adUnitCode === e ? t : null
                            }).reduce(n.getHighestCpm)
                        })
                    }, O.setTargetingForAst = function(e) {
                        var t = O.getAllTargeting(e);
                        try {
                            O.resetPresetTargetingAST(e)
                        } catch (e) {
                            g.logError("unable to reset targeting for AST" + e)
                        }
                        Object.keys(t).forEach(function(e) {
                            return Object.keys(t[e]).forEach(function(r) {
                                if (g.logMessage("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(r, " value: ").concat(t[e][r])), g.isStr(t[e][r]) || g.isArray(t[e][r])) {
                                    var n = {};
                                    r.search(/pt[0-9]/) < 0 ? n[r.toUpperCase()] = t[e][r] : n[r] = t[e][r], window.apntag.setKeywords(e, n, {
                                        overrideKeyValue: !0
                                    })
                                }
                            })
                        })
                    }, O.isApntagDefined = function() {
                        if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0
                    }, O);

                    function w(e, t) {
                        return e.adserverTargeting && t && (g.isArray(t) && u()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
                    }

                    function _(e) {
                        return "string" == typeof e ? [e] : g.isArray(e) ? e : S.getAdUnitCodes() || []
                    }

                    function C() {
                        var e = S.getBidsReceived();
                        return i.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                            return T[e.adUnitCode] === e.auctionId
                        })), I(e = e.filter(function(e) {
                            return Object(n.deepAccess)(e, "video.context") !== c.a
                        }).filter(function(e) {
                            return "banner" !== e.mediaType || Object(s.c)([e.width, e.height])
                        }).filter(h).filter(y), n.getOldestHighestCpmBid)
                    }

                    function j() {
                        return S.getStandardBidderAdServerTargeting().map(function(e) {
                            return e.key
                        }).concat(v).filter(n.uniques)
                    }

                    function R(e, t, r, i) {
                        return Object.keys(t.adserverTargeting).filter(D()).forEach(function(r) {
                            e.length && e.filter(function(e) {
                                return function(r) {
                                    return r.adUnitCode === t.adUnitCode && r.adserverTargeting[e]
                                }
                            }(r)).forEach(function(e) {
                                return function(r) {
                                    g.isArray(r.adserverTargeting[e]) || (r.adserverTargeting[e] = [r.adserverTargeting[e]]), r.adserverTargeting[e] = r.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(n.uniques), delete t.adserverTargeting[e]
                                }
                            }(r))
                        }), e.push(t), e
                    }

                    function D() {
                        var e = j().concat(o.a);
                        return function(t) {
                            return -1 === e.indexOf(t)
                        }
                    }

                    function N(e) {
                        return p({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(D()).map(function(t) {
                            return p({}, t.substring(0, 20), [e.adserverTargeting[t]])
                        }))
                    }

                    function x(e, t) {
                        return t.map(function(t) {
                            return p({}, "".concat(t, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[t]])
                        })
                    }
                },
                65: function(e, t, r) {
                    "use strict";
                    var n = r(137)(!0);
                    r(53)(String, "String", function(e) {
                        this._t = String(e), this._i = 0
                    }, function() {
                        var e, t = this._t,
                            r = this._i;
                        return r >= t.length ? {
                            value: void 0,
                            done: !0
                        } : (e = n(t, r), this._i += e.length, {
                            value: e,
                            done: !1
                        })
                    })
                },
                66: function(e, t, r) {
                    function n() {}
                    var i = r(29),
                        o = r(140),
                        a = r(67),
                        s = r(54)("IE_PROTO"),
                        c = "prototype",
                        d = function() {
                            var e, t = r(57)("iframe"),
                                n = a.length;
                            for (t.style.display = "none", r(143).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[c][a[n]];
                            return d()
                        };
                    e.exports = Object.create || function(e, t) {
                        var r;
                        return null !== e ? (n[c] = i(e), r = new n, n[c] = null, r[s] = e) : r = d(), void 0 === t ? r : o(r, t)
                    }
                },
                667: function(e, t, r) {
                    e.exports = r(63)
                },
                67: function(e, t) {
                    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                },
                68: function(e, t) {
                    e.exports = function(e, t) {
                        return {
                            value: t,
                            done: !!e
                        }
                    }
                },
                69: function(e, t, r) {
                    var n = r(21);
                    e.exports = function(e, t, r) {
                        for (var i in t) r && e[i] ? e[i] = t[i] : n(e, i, t[i]);
                        return e
                    }
                },
                7: function(e, t, r) {
                    function n() {
                        return (n = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var i, o, a = r(0),
                        s = r(4),
                        c = Array.prototype.slice,
                        d = Array.prototype.push,
                        u = a._map(s.EVENTS, function(e) {
                            return e
                        }),
                        l = s.EVENT_ID_PATHS,
                        f = [];
                    e.exports = (i = {}, (o = {}).on = function(e, t, r) {
                        if (function(e) {
                                return a.contains(u, e)
                            }(e)) {
                            var n = i[e] || {
                                que: []
                            };
                            r ? (n[r] = n[r] || {
                                que: []
                            }, n[r].que.push(t)) : n.que.push(t), i[e] = n
                        } else a.logError("Wrong event name : " + e + " Valid event names :" + u)
                    }, o.emit = function(e) {
                        ! function(e, t) {
                            a.logMessage("Emitting event for: " + e);
                            var r = t[0] || {},
                                n = r[l[e]],
                                o = i[e] || {
                                    que: []
                                },
                                s = a._map(o, function(e, t) {
                                    return t
                                }),
                                c = [];
                            f.push({
                                eventType: e,
                                args: r,
                                id: n
                            }), n && a.contains(s, n) && d.apply(c, o[n].que), d.apply(c, o.que), a._each(c, function(e) {
                                if (e) try {
                                    e.apply(null, t)
                                } catch (e) {
                                    a.logError("Error executing handler:", "events.js", e)
                                }
                            })
                        }(e, c.call(arguments, 1))
                    }, o.off = function(e, t, r) {
                        var n = i[e];
                        a.isEmpty(n) || a.isEmpty(n.que) && a.isEmpty(n[r]) || r && (a.isEmpty(n[r]) || a.isEmpty(n[r].que)) || (r ? a._each(n[r].que, function(e) {
                            var i = n[r].que;
                            e === t && i.splice(a.indexOf.call(i, e), 1)
                        }) : a._each(n.que, function(e) {
                            var r = n.que;
                            e === t && r.splice(a.indexOf.call(r, e), 1)
                        }), i[e] = n)
                    }, o.get = function() {
                        return i
                    }, o.getEvents = function() {
                        var e = [];
                        return a._each(f, function(t) {
                            var r = n({}, t);
                            e.push(r)
                        }), e
                    }, o)
                },
                70: function(e, t) {
                    e.exports = function(e, t, r, n) {
                        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");
                        return e
                    }
                },
                71: function(e, t, r) {
                    var n = r(29);
                    e.exports = function(e, t, r, i) {
                        try {
                            return i ? t(n(r)[0], r[1]) : t(r)
                        } catch (t) {
                            var o = e.return;
                            throw void 0 !== o && n(o.call(e)), t
                        }
                    }
                },
                72: function(e, t, r) {
                    var n = r(32),
                        i = r(14)("iterator"),
                        o = Array.prototype;
                    e.exports = function(e) {
                        return void 0 !== e && (n.Array === e || o[i] === e)
                    }
                },
                73: function(e, t, r) {
                    var n = r(74),
                        i = r(14)("iterator"),
                        o = r(32);
                    e.exports = r(16).getIteratorMethod = function(e) {
                        if (null != e) return e[i] || e["@@iterator"] || o[n(e)]
                    }
                },
                74: function(e, t, r) {
                    var n = r(34),
                        i = r(14)("toStringTag"),
                        o = "Arguments" == n(function() {
                            return arguments
                        }());
                    e.exports = function(e) {
                        var t, r, a;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                            try {
                                return e[t]
                            } catch (e) {}
                        }(t = Object(e), i)) ? r : o ? n(t) : "Object" == (a = n(t)) && "function" == typeof t.callee ? "Arguments" : a
                    }
                },
                75: function(e, t, r) {
                    function n(e) {
                        s(e, i, {
                            value: {
                                i: "O" + ++c,
                                w: {}
                            }
                        })
                    }
                    var i = r(48)("meta"),
                        o = r(18),
                        a = r(30),
                        s = r(20).f,
                        c = 0,
                        d = Object.isExtensible || function() {
                            return !0
                        },
                        u = !r(33)(function() {
                            return d(Object.preventExtensions({}))
                        }),
                        l = e.exports = {
                            KEY: i,
                            NEED: !1,
                            fastKey: function(e, t) {
                                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                                if (!a(e, i)) {
                                    if (!d(e)) return "F";
                                    if (!t) return "E";
                                    n(e)
                                }
                                return e[i].i
                            },
                            getWeak: function(e, t) {
                                if (!a(e, i)) {
                                    if (!d(e)) return !0;
                                    if (!t) return !1;
                                    n(e)
                                }
                                return e[i].w
                            },
                            onFreeze: function(e) {
                                return u && l.NEED && d(e) && !a(e, i) && n(e), e
                            }
                        }
                },
                76: function(e, t, r) {
                    var n = r(18);
                    e.exports = function(e, t) {
                        if (!n(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
                        return e
                    }
                },
                77: function(e, t, r) {
                    "use strict";
                    t.a = function(e, t) {
                        o.adServers = o.adServers || {}, o.adServers[e] = o.adServers[e] || {}, Object.keys(t).forEach(function(r) {
                            o.adServers[e][r] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(r, " for AdServer ").concat(e, ".")) : o.adServers[e][r] = t[r]
                        })
                    };
                    var n = r(27),
                        i = r(0),
                        o = Object(n.a)()
                },
                8: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "gdprDataHandler", function() {
                        return w
                    }), t.setS2STestingModule = function(e) {
                        m = e
                    };
                    var n = r(0),
                        i = r(50),
                        o = r(23),
                        a = r(1),
                        s = r(5),
                        c = r(3),
                        d = r(9),
                        u = r.n(d),
                        l = r(12),
                        f = r.n(l),
                        p = r(51),
                        g = r(38);

                    function b() {
                        return (b = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var m, v = r(0),
                        y = r(4),
                        h = r(7),
                        I = {},
                        E = I.bidderRegistry = {},
                        S = I.aliasRegistry = {},
                        O = {};
                    c.b.getConfig("s2sConfig", function(e) {
                        O = e.s2sConfig
                    });
                    var T = {};

                    function A(e) {
                        var t = e.bidderCode,
                            r = e.auctionId,
                            a = e.bidderRequestId,
                            s = e.adUnits,
                            c = e.labels,
                            d = e.src;
                        return s.reduce(function(e, s) {
                            var u = Object(i.b)(Object(i.a)(s, c), s.mediaTypes, s.sizes),
                                l = u.active,
                                f = u.mediaTypes,
                                g = u.filterResults;
                            return l ? g && v.logInfo('Size mapping filtered adUnit "'.concat(s.code, '" banner sizes from '), g.before, "to ", g.after) : v.logInfo('Size mapping disabled adUnit "'.concat(s.code, '"')), l && e.push(s.bids.filter(function(e) {
                                return e.bidder === t
                            }).reduce(function(e, t) {
                                var u = s.nativeParams || v.deepAccess(s, "mediaTypes.native");
                                u && (t = b({}, t, {
                                    nativeParams: Object(o.g)(u)
                                })), t = b({}, t, Object(n.getDefinedParams)(s, ["mediaType", "renderer"]));
                                var l = Object(i.b)(Object(i.a)(t, c), f),
                                    g = l.active,
                                    m = l.mediaTypes,
                                    y = l.filterResults;
                                return g ? y && v.logInfo('Size mapping filtered adUnit "'.concat(s.code, '" bidder "').concat(t.bidder, '" banner sizes from '), y.before, "to ", y.after) : v.logInfo('Size mapping deactivated adUnit "'.concat(s.code, '" bidder "').concat(t.bidder, '"')), v.isValidMediaTypes(m) ? t = b({}, t, {
                                    mediaTypes: m
                                }) : v.logError("mediaTypes is not correctly configured for adunit ".concat(s.code)), g && e.push(b({}, t, {
                                    adUnitCode: s.code,
                                    transactionId: s.transactionId,
                                    sizes: v.deepAccess(m, "banner.sizes") || v.deepAccess(m, "video.playerSize") || [],
                                    bidId: t.bid_id || v.getUniqueIdentifierStr(),
                                    bidderRequestId: a,
                                    auctionId: r,
                                    src: d,
                                    bidRequestsCount: p.a.getCounter(s.code)
                                })), e
                            }, [])), e
                        }, []).reduce(n.flatten, []).filter(function(e) {
                            return "" !== e
                        })
                    }
                    var w = {
                        consentData: null,
                        setConsentData: function(e) {
                            w.consentData = e
                        },
                        getConsentData: function() {
                            return w.consentData
                        }
                    };

                    function _() {
                        return O && O.enabled && O.testing && m
                    }

                    function C(e, t, r) {
                        try {
                            var n = E[e].getSpec();
                            n && n[t] && "function" == typeof n[t] && (v.logInfo("Invoking ".concat(e, ".").concat(t)), n[t](r))
                        } catch (r) {
                            v.logWarn("Error calling ".concat(t, " of ").concat(e))
                        }
                    }
                    I.makeBidRequests = function(e, t, r, i, o) {
                        var a = [],
                            s = Object(n.getBidderCodes)(e);
                        c.b.getConfig("bidderSequence") === c.a && (s = Object(n.shuffle)(s));
                        var d, l = Object(g.b)(),
                            p = s,
                            b = [];
                        if (O.enabled) {
                            if (_()) {
                                var h = m.getSourceBidderMap(e);
                                b = h[m.CLIENT]
                            }
                            var I = O.bidders;
                            p = s.filter(function(e) {
                                return !u()(I, e) || u()(b, e)
                            }), Boolean(_() && O.testServerOnly) && (d = e, Boolean(f()(d, function(e) {
                                return f()(e.bids, function(e) {
                                    return (e.bidSource || O.bidderControl && O.bidderControl[e.bidder]) && e.finalSource === m.SERVER
                                })
                            }))) && (p.length = 0);
                            var S = function(e) {
                                    var t = O.bidders,
                                        r = v.deepClone(e);
                                    return r.forEach(function(e) {
                                        e.bids = e.bids.filter(function(e) {
                                            return u()(t, e.bidder) && (!_() || e.finalSource !== m.CLIENT)
                                        }).map(function(e) {
                                            return e.bid_id = v.getUniqueIdentifierStr(), e
                                        })
                                    }), r.filter(function(e) {
                                        return 0 !== e.bids.length
                                    })
                                }(e),
                                T = v.generateUUID();
                            I.forEach(function(e) {
                                var n = v.getUniqueIdentifierStr(),
                                    i = {
                                        bidderCode: e,
                                        auctionId: r,
                                        bidderRequestId: n,
                                        tid: T,
                                        bids: A({
                                            bidderCode: e,
                                            auctionId: r,
                                            bidderRequestId: n,
                                            adUnits: v.deepClone(S),
                                            labels: o,
                                            src: y.S2S.SRC
                                        }),
                                        auctionStart: t,
                                        timeout: O.timeout,
                                        src: y.S2S.SRC,
                                        refererInfo: l
                                    };
                                0 !== i.bids.length && a.push(i)
                            }), S.forEach(function(e) {
                                var t = e.bids.filter(function(e) {
                                    return f()(a, function(t) {
                                        return f()(t.bids, function(t) {
                                            return t.bidId === e.bid_id
                                        })
                                    })
                                });
                                e.bids = t
                            }), a.forEach(function(e) {
                                e.adUnitsS2SCopy = S.filter(function(e) {
                                    return 0 < e.bids.length
                                })
                            })
                        }
                        var C = function(e) {
                            var t = v.deepClone(e);
                            return t.forEach(function(e) {
                                e.bids = e.bids.filter(function(e) {
                                    return !_() || e.finalSource !== m.SERVER
                                })
                            }), t.filter(function(e) {
                                return 0 !== e.bids.length
                            })
                        }(e);
                        return p.forEach(function(e) {
                            var n = v.getUniqueIdentifierStr(),
                                s = {
                                    bidderCode: e,
                                    auctionId: r,
                                    bidderRequestId: n,
                                    bids: A({
                                        bidderCode: e,
                                        auctionId: r,
                                        bidderRequestId: n,
                                        adUnits: v.deepClone(C),
                                        labels: o,
                                        src: "client"
                                    }),
                                    auctionStart: t,
                                    timeout: i,
                                    refererInfo: l
                                },
                                c = E[e];
                            c || v.logError("Trying to make a request for bidder that does not exist: ".concat(e)), c && s.bids && 0 !== s.bids.length && a.push(s)
                        }), w.getConsentData() && a.forEach(function(e) {
                            e.gdprConsent = w.getConsentData()
                        }), a
                    }, I.callBids = function(e, t, r, i, o, a, c) {
                        if (t.length) {
                            var d = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                            var r = [],
                                                n = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                                            } catch (e) {
                                                i = !0, o = e
                                            } finally {
                                                try {
                                                    n || null == s.return || s.return()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                            return r
                                        }
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                                }(t.reduce(function(e, t) {
                                    return e[Number(void 0 !== t.src && t.src === y.S2S.SRC)].push(t), e
                                }, [
                                    [],
                                    []
                                ])),
                                l = d[0],
                                f = d[1];
                            if (f.length) {
                                var p = Object(s.b)(a, o ? {
                                        request: o.request.bind(null, "s2s"),
                                        done: o.done
                                    } : void 0),
                                    g = O.bidders,
                                    b = E[O.adapter],
                                    m = f[0].tid,
                                    I = f[0].adUnitsS2SCopy;
                                if (b) {
                                    var S = {
                                        tid: m,
                                        ad_units: I
                                    };
                                    if (S.ad_units.length) {
                                        var T = f.map(function(e) {
                                                return e.start = Object(n.timestamp)(), i.bind(e)
                                            }),
                                            A = S.ad_units.reduce(function(e, t) {
                                                return e.concat((t.bids || []).reduce(function(e, t) {
                                                    return e.concat(t.bidder)
                                                }, []))
                                            }, []);
                                        v.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(g.filter(function(e) {
                                            return u()(A, e)
                                        }).join(","))), f.forEach(function(e) {
                                            h.emit(y.EVENTS.BID_REQUESTED, e)
                                        }), b.callBids(S, f, function(e, t) {
                                            var i = Object(n.getBidderRequest)(f, t.bidderCode, e);
                                            i && r.call(i, e, t)
                                        }, function() {
                                            return T.forEach(function(e) {
                                                return e()
                                            })
                                        }, p)
                                    }
                                }
                            }
                            l.forEach(function(e) {
                                e.start = Object(n.timestamp)();
                                var t = E[e.bidderCode];
                                v.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), h.emit(y.EVENTS.BID_REQUESTED, e);
                                var d = Object(s.b)(a, o ? {
                                    request: o.request.bind(null, e.bidderCode),
                                    done: o.done
                                } : void 0);
                                t.callBids(e, r.bind(e), i.bind(e), d, c)
                            })
                        } else v.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
                    }, I.videoAdapters = [], I.registerBidAdapter = function(e, t) {
                        var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                            n = void 0 === r ? [] : r;
                        e && t ? "function" == typeof e.callBids ? (E[t] = e, u()(n, "video") && I.videoAdapters.push(t), u()(n, "native") && o.e.push(t)) : v.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : v.logError("bidAdaptor or bidderCode not specified")
                    }, I.aliasBidAdapter = function(e, t) {
                        if (void 0 === E[t]) {
                            var r = E[e];
                            if (void 0 === r) {
                                var n = c.b.getConfig("s2sConfig"),
                                    i = n && n.bidders;
                                i && u()(i, t) ? S[t] = e : v.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            } else try {
                                var s, d = function(e) {
                                    var t = [];
                                    return u()(I.videoAdapters, e) && t.push("video"), u()(o.e, e) && t.push("native"), t
                                }(e);
                                if (r.constructor.prototype != Object.prototype)(s = new r.constructor).setBidderCode(t);
                                else {
                                    var l = r.getSpec();
                                    s = Object(a.newBidder)(b({}, l, {
                                        code: t
                                    })), S[t] = e
                                }
                                I.registerBidAdapter(s, t, {
                                    supportedMediaTypes: d
                                })
                            } catch (t) {
                                v.logError(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                            }
                        } else v.logMessage('alias name "' + t + '" has been already specified.')
                    }, I.registerAnalyticsAdapter = function(e) {
                        var t = e.adapter,
                            r = e.code;
                        t && r ? "function" == typeof t.enableAnalytics ? (t.code = r, T[r] = t) : v.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(r, '"\n        analytics adapter must implement an enableAnalytics() function')) : v.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
                    }, I.enableAnalytics = function(e) {
                        v.isArray(e) || (e = [e]), v._each(e, function(e) {
                            var t = T[e.provider];
                            t ? t.enableAnalytics(e) : v.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
                        })
                    }, I.getBidAdapter = function(e) {
                        return E[e]
                    }, I.callTimedOutBidders = function(e, t, r) {
                        t = t.map(function(t) {
                            return t.params = v.getUserConfiguredParams(e, t.adUnitCode, t.bidder), t.timeout = r, t
                        }), t = v.groupBy(t, "bidder"), Object.keys(t).forEach(function(e) {
                            C(e, "onTimeout", t[e])
                        })
                    }, I.callBidWonBidder = function(e, t, r) {
                        t.params = v.getUserConfiguredParams(r, t.adUnitCode, t.bidder), C(e, "onBidWon", t)
                    }, I.callSetTargetingBidder = function(e, t) {
                        C(e, "onSetTargeting", t)
                    }, t.default = I
                },
                80: function(e, t, r) {
                    "use strict";
                    var n = r(15),
                        i = r(45)(5),
                        o = "find",
                        a = !0;
                    o in [] && Array(1)[o](function() {
                        a = !1
                    }), n(n.P + n.F * a, "Array", {
                        find: function(e, t) {
                            return i(this, e, 1 < arguments.length ? t : void 0)
                        }
                    }), r(37)(o)
                },
                81: function(e, t, r) {
                    e.exports = !r(22) && !r(33)(function() {
                        return 7 != Object.defineProperty(r(57)("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })
                },
                82: function(e, t, r) {
                    var n = r(18);
                    e.exports = function(e, t) {
                        if (!n(e)) return e;
                        var r, i;
                        if (t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
                        if ("function" == typeof(r = e.valueOf) && !n(i = r.call(e))) return i;
                        if (!t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
                        throw TypeError("Can't convert object to primitive value")
                    }
                },
                83: function(e, t, r) {
                    var n = r(84);
                    e.exports = function(e, t) {
                        return new(n(e))(t)
                    }
                },
                84: function(e, t, r) {
                    var n = r(18),
                        i = r(85),
                        o = r(14)("species");
                    e.exports = function(e) {
                        var t;
                        return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), n(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
                    }
                },
                85: function(e, t, r) {
                    var n = r(34);
                    e.exports = Array.isArray || function(e) {
                        return "Array" == n(e)
                    }
                },
                86: function(e, t, r) {
                    "use strict";
                    var n = r(15),
                        i = r(61)(!0);
                    n(n.P, "Array", {
                        includes: function(e, t) {
                            return i(this, e, 1 < arguments.length ? t : void 0)
                        }
                    }), r(37)("includes")
                },
                87: function(e, t, r) {
                    var n = r(47),
                        i = Math.max,
                        o = Math.min;
                    e.exports = function(e, t) {
                        return (e = n(e)) < 0 ? i(e + t, 0) : o(e, t)
                    }
                },
                88: function(e, t) {
                    e.exports = function e(t) {
                        var r = Array.isArray(t) ? [] : {};
                        for (var n in t) {
                            var i = t[n];
                            r[n] = i && "object" == typeof i ? e(i) : i
                        }
                        return r
                    }
                },
                89: function(e, t, r) {
                    "use strict";
                    t.a = function(e, t, r, n, i) {
                        for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : i;
                        return e === i ? r : e
                    }
                },
                9: function(e, t, r) {
                    r(86), e.exports = r(16).Array.includes
                },
                90: function(e, t, r) {
                    "use strict";
                    t.a = function(e, t, r) {
                        t.split && (t = t.split("."));
                        for (var n, i = 0, o = t.length, a = e; i < o; ++i) n = a[t[i]], a = a[t[i]] = i === o - 1 ? r : null != n ? n : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
                    }
                },
                91: function(e, t) {
                    c.SYNC = 1, c.ASYNC = 2, c.QUEUE = 4;
                    var r = "fun-hooks",
                        n = Object.freeze({
                            useProxy: !0,
                            ready: 0
                        }),
                        i = new WeakMap,
                        o = "2,1,0" === [1].reduce(function(e, t, r) {
                            return [e, t, r]
                        }, 2).toString() ? Array.prototype.reduce : function(e, t) {
                            var r, n = Object(this),
                                i = n.length >>> 0,
                                o = 0;
                            if (t) r = t;
                            else {
                                for (; o < i && !(o in n);) o++;
                                r = n[o++]
                            }
                            for (; o < i;) o in n && (r = e(r, n[o], o, n)), o++;
                            return r
                        };

                    function a(e, t) {
                        return Array.prototype.slice.call(e, t)
                    }
                    var s = Object.assign || function(e) {
                        return o.call(a(arguments, 1), function(e, t) {
                            return t && Object.keys(t).forEach(function(r) {
                                e[r] = t[r]
                            }), e
                        }, e)
                    };

                    function c(e) {
                        var t, d = {},
                            u = [];

                        function l(e, t) {
                            return "function" == typeof e ? g.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? g.apply(null, arguments) : "object" == typeof e ? function(e, t, r) {
                                var n = !0;
                                void 0 === t && (t = Object.getOwnPropertyNames(e), n = !1);
                                for (var i = {}, o = ["constructor"];
                                    (t = t.filter(function(t) {
                                        return !("function" != typeof e[t] || -1 !== o.indexOf(t) || t.match(/^_/))
                                    })).forEach(function(t) {
                                        var n = t.split(":"),
                                            o = n[0],
                                            a = n[1] || "sync";
                                        if (!i[o]) {
                                            var s = e[o];
                                            i[o] = e[o] = g(a, s, r ? [r, o] : void 0)
                                        }
                                    }), e = Object.getPrototypeOf(e), n && e;);
                                return i
                            }.apply(null, arguments) : void 0
                        }

                        function f(e) {
                            var n = Array.isArray(e) ? e : e.split(".");
                            return o.call(n, function(i, o, a) {
                                var s = !1;
                                return i[o] || (a === n.length - 1 ? (t || u.push(function() {
                                    s || console.warn(r + ": referenced '" + e + "' but it was never created")
                                }), i[o] = p(function(e) {
                                    i[o] = e, s = !0
                                })) : i[o] = {})
                            }, d)
                        }

                        function p(e) {
                            var t = [],
                                r = [],
                                n = function() {},
                                o = {
                                    before: function(e, r) {
                                        return c.call(this, t, "before", e, r)
                                    },
                                    after: function(e, t) {
                                        return c.call(this, r, "after", e, t)
                                    },
                                    getHooks: function(e) {
                                        var n = t.concat(r);
                                        return "object" == typeof e && (n = n.filter(function(t) {
                                            return Object.keys(e).every(function(r) {
                                                return t[r] === e[r]
                                            })
                                        })), s(n, {
                                            remove: function() {
                                                return n.forEach(function(e) {
                                                    e.remove()
                                                }), this
                                            }
                                        })
                                    },
                                    removeAll: function() {
                                        return this.getHooks().remove()
                                    }
                                },
                                a = {
                                    install: function(i, o, a) {
                                        this.type = i, (n = a)(t, r), e && e(o)
                                    }
                                };
                            return i.set(o.after, a), o;

                            function c(e, i, o, a) {
                                var s = {
                                    hook: o,
                                    type: i,
                                    priority: a || 10,
                                    remove: function() {
                                        var i = e.indexOf(s); - 1 !== i && (e.splice(i, 1), n(t, r))
                                    }
                                };
                                return e.push(s), e.sort(function(e, t) {
                                    return t.priority - e.priority
                                }), n(t, r), this
                            }
                        }

                        function g(n, o, d) {
                            var l = o.after && i.get(o.after);
                            if (l) {
                                if (l.type !== n) throw r + ": recreated hookable with different type";
                                return o
                            }
                            var g, b, m = d ? f(d) : p(),
                                v = {
                                    get: function(e, t) {
                                        return m[t] || Reflect.get.apply(Reflect, arguments)
                                    }
                                };
                            return t || u.push(y), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? b = new Proxy(o, v) : s(b = function() {
                                return v.apply ? v.apply(o, this, a(arguments)) : o.apply(this, arguments)
                            }, m), i.get(b.after).install(n, b, function(e, t) {
                                var r, i = [];

                                function o(e) {
                                    i.push(e.hook)
                                }
                                g = e.length || t.length ? (e.forEach(o), r = i.push(void 0) - 1, t.forEach(o), function(e, t, o) {
                                    var s, c = 0,
                                        d = "async" === n && "function" == typeof o[o.length - 1] && o.pop();

                                    function u(e) {
                                        "sync" === n ? s = e : d && d.apply(null, arguments)
                                    }

                                    function l(e) {
                                        if (i[c]) {
                                            var r = a(arguments);
                                            return l.bail = u, r.unshift(l), i[c++].apply(t, r)
                                        }
                                        "sync" === n ? s = e : d && d.apply(null, arguments)
                                    }
                                    return i[r] = function() {
                                        var r = a(arguments, 1);
                                        "async" === n && d && (delete l.bail, r.push(l));
                                        var i = e.apply(t, r);
                                        "sync" === n && l(i)
                                    }, l.apply(null, o), s
                                }) : void 0, y()
                            }), b;

                            function y() {
                                !t && ("sync" !== n || e.ready & c.SYNC) && ("async" !== n || e.ready & c.ASYNC) ? "sync" !== n && e.ready & c.QUEUE ? v.apply = function() {
                                    var e = arguments;
                                    u.push(function() {
                                        b.apply(e[1], e[2])
                                    })
                                } : v.apply = function() {
                                    throw r + ": hooked function not ready"
                                } : v.apply = g
                            }
                        }
                        return (e = s({}, n, e)).ready ? l.ready = function() {
                            t = !0,
                                function(e) {
                                    for (var t; t = e.shift();) t()
                                }(u)
                        } : t = !0, l.get = f, l
                    }
                    e.exports = c
                }
            }), pbjsChunk([240], {
                182: function(e, t, r) {
                    e.exports = r(183)
                },
                183: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return c
                    });
                    var n = r(0),
                        i = r(10),
                        o = r(1),
                        a = r(12),
                        s = r.n(a),
                        c = {
                            code: "adyoulike",
                            aliases: ["ayl"],
                            isBidRequestValid: function(e) {
                                var t = u(d(e));
                                return !!(e.params && e.params.placement && t.width && t.height)
                            },
                            buildRequests: function(e, t) {
                                var r = {
                                    Version: "1.0",
                                    Bids: e.reduce(function(e, t) {
                                        var r = d(t),
                                            n = u(r);
                                        return e[t.bidId] = {}, e[t.bidId].PlacementID = t.params.placement, e[t.bidId].TransactionID = t.transactionId, e[t.bidId].Width = n.width, e[t.bidId].Height = n.height, e[t.bidId].AvailableSizes = r.join(","), e
                                    }, {}),
                                    PageRefreshed: function() {
                                        try {
                                            if (performance && performance.navigation) return performance.navigation.type === performance.navigation.TYPE_RELOAD
                                        } catch (e) {}
                                        return !1
                                    }()
                                };
                                t && t.gdprConsent && (r.gdprConsent = {
                                    consentString: t.gdprConsent.consentString,
                                    consentRequired: "boolean" != typeof t.gdprConsent.gdprApplies || t.gdprConsent.gdprApplies
                                });
                                var n = JSON.stringify(r);
                                return {
                                    method: "POST",
                                    url: function(e, t) {
                                        var r = function(e) {
                                            var t = s()(e, function(e) {
                                                return e.params.DC
                                            });
                                            return t ? "-" + t.params.DC : ""
                                        }(e);
                                        return Object(i.a)({
                                            protocol: "https",
                                            host: "".concat("hb-api").concat(r, ".omnitagjs.com"),
                                            pathname: "/hb-api/prebid/v1",
                                            search: function(e) {
                                                var t = {},
                                                    r = function(e) {
                                                        var t = "";
                                                        return e && e.refererInfo && (t = encodeURIComponent(e.refererInfo.referer)), t
                                                    }(e);
                                                r && (t.RefererUrl = encodeURIComponent(r));
                                                var n = function() {
                                                    var e;
                                                    if (window.self !== window.top) try {
                                                        e = window.top.document.head.querySelector('link[rel="canonical"][href]')
                                                    } catch (e) {} else e = document.head.querySelector('link[rel="canonical"][href]');
                                                    return e ? e.href : ""
                                                }();
                                                return n && (t.CanonicalUrl = encodeURIComponent(n)), t
                                            }(t)
                                        })
                                    }(e, t),
                                    data: n,
                                    options: {
                                        withCredentials: !0
                                    }
                                }
                            },
                            interpretResponse: function(e, t) {
                                var r = [];
                                return e.body.forEach(function(e) {
                                    var t = function(e) {
                                        return e && e.Ad ? {
                                            requestId: e.BidID,
                                            width: e.Width,
                                            height: e.Height,
                                            ad: e.Ad,
                                            ttl: 3600,
                                            creativeId: e.CreativeID,
                                            cpm: e.Price,
                                            netRevenue: !0,
                                            currency: "USD"
                                        } : void 0
                                    }(e);
                                    t && r.push(t)
                                }), r
                            }
                        };

                    function d(e) {
                        var t = e.sizes;
                        return e.mediaTypes && e.mediaTypes.banner && (t = e.mediaTypes.banner.sizes), n.parseSizesInput(t)
                    }

                    function u(e) {
                        var t = {},
                            r = e[0];
                        if ("string" != typeof r) return t;
                        var n = r.toUpperCase().split("X"),
                            i = parseInt(n[0], 10);
                        i && (t.width = i);
                        var o = parseInt(n[1], 10);
                        return o && (t.height = o), t
                    }
                    Object(o.registerBidder)(c)
                }
            }, [182]), pbjsChunk([234], {
                198: function(e, t, r) {
                    e.exports = r(199)
                },
                199: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return _
                    });
                    var n = r(11),
                        i = r(0),
                        o = r(3),
                        a = r(1),
                        s = r(2),
                        c = r(28),
                        d = r(12),
                        u = r.n(d),
                        l = r(9),
                        f = r.n(l),
                        p = r(31);

                    function g(e) {
                        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function b() {
                        return (b = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function m(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }
                    var v = "appnexus",
                        y = "//ib.adnxs.com/ut/v3/prebid",
                        h = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
                        I = ["age", "externalUid", "segments", "gender", "dnt", "language"],
                        E = ["geo", "device_id"],
                        S = ["enabled", "dongle", "member_id", "debug_timeout"],
                        O = {
                            body: "description",
                            body2: "desc2",
                            cta: "ctatext",
                            image: {
                                serverName: "main_image",
                                requiredParams: {
                                    required: !0
                                }
                            },
                            icon: {
                                serverName: "icon",
                                requiredParams: {
                                    required: !0
                                }
                            },
                            sponsoredBy: "sponsored_by",
                            privacyLink: "privacy_link",
                            salePrice: "saleprice",
                            displayUrl: "displayurl"
                        },
                        T = "<script",
                        A = /http:\/\/cdn\.adnxs\.com\/v/,
                        w = "trk.js",
                        _ = {
                            code: v,
                            aliases: ["appnexusAst", "and", "brealtime", "emxdigital", "pangaea", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm", "xhb"],
                            supportedMediaTypes: [s.b, s.d, s.c],
                            isBidRequestValid: function(e) {
                                return !!(e.params.placementId || e.params.member && e.params.invCode)
                            },
                            buildRequests: function(e, t) {
                                var r, n = e.map(D),
                                    a = u()(e, x);
                                a && (r = {}, Object.keys(a.params.user).filter(function(e) {
                                    return f()(I, e)
                                }).forEach(function(e) {
                                    return r[e] = a.params.user[e]
                                }));
                                var s, c = u()(e, k);
                                c && c.params && c.params.app && (s = {}, Object.keys(c.params.app).filter(function(e) {
                                    return f()(E, e)
                                }).forEach(function(e) {
                                    return s[e] = c.params.app[e]
                                }));
                                var d, l = u()(e, P);
                                l && l.params && c.params.app && c.params.app.id && (d = {
                                    appid: l.params.app.id
                                });
                                var p = {},
                                    g = {},
                                    b = i.getCookie("apn_prebid_debug") || null;
                                if (b) try {
                                    p = JSON.parse(b)
                                } catch (e) {
                                    i.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                                } else {
                                    var h = u()(e, B);
                                    h && h.debug && (p = h.debug)
                                }
                                p && p.enabled && Object.keys(p).filter(function(e) {
                                    return f()(S, e)
                                }).forEach(function(e) {
                                    g[e] = p[e]
                                });
                                var O = u()(e, U),
                                    T = O ? parseInt(O.params.member, 10) : 0,
                                    A = {
                                        tags: m(n),
                                        user: r,
                                        sdk: {
                                            source: "pbjs",
                                            version: "2.33.0"
                                        }
                                    };
                                if (0 < T && (A.member_id = T), c && (A.device = s), l && (A.app = d), o.b.getConfig("adpod.brandCategoryExclusion") && (A.brand_category_uniqueness = !0), g.enabled && (A.debug = g, i.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(g, null, 4))), t && t.gdprConsent && (A.gdpr_consent = {
                                        consent_string: t.gdprConsent.consentString,
                                        consent_required: t.gdprConsent.gdprApplies
                                    }), t && t.refererInfo) {
                                    var w = {
                                        rd_ref: encodeURIComponent(t.refererInfo.referer),
                                        rd_top: t.refererInfo.reachedTop,
                                        rd_ifs: t.refererInfo.numIframes,
                                        rd_stk: t.refererInfo.stack.map(function(e) {
                                            return encodeURIComponent(e)
                                        }).join(",")
                                    };
                                    A.referrer_detection = w
                                }
                                u()(e, q) && e.filter(q).forEach(function(e) {
                                    var t = function(e, t) {
                                            var r = t.mediaTypes.video,
                                                n = r.durationRangeSec,
                                                o = r.requireExactDuration,
                                                a = function(e) {
                                                    var t = e.adPodDurationSec,
                                                        r = e.durationRangeSec,
                                                        n = e.requireExactDuration,
                                                        o = i.getMinValueFromArray(r),
                                                        a = Math.floor(t / o);
                                                    return n ? Math.max(a, r.length) : a
                                                }(t.mediaTypes.video),
                                                s = i.getMaxValueFromArray(n),
                                                c = e.filter(function(e) {
                                                    return e.uuid === t.bidId
                                                }),
                                                d = i.fill.apply(i, m(c).concat([a]));
                                            if (o) {
                                                var u = Math.ceil(a / n.length),
                                                    l = i.chunk(d, u);
                                                n.forEach(function(e, t) {
                                                    l[t].map(function(t) {
                                                        z(t, "minduration", e), z(t, "maxduration", e)
                                                    })
                                                })
                                            } else d.map(function(e) {
                                                return z(e, "maxduration", s)
                                            });
                                            return d
                                        }(n, e),
                                        r = A.tags.filter(function(t) {
                                            return t.uuid !== e.bidId
                                        });
                                    A.tags = [].concat(m(r), m(t))
                                });
                                var _ = i.deepAccess(e[0], "userId.criteortus.".concat(v, ".userid"));
                                if (_) {
                                    var C = [];
                                    C.push({
                                        provider: "criteo",
                                        user_id: _
                                    }), A.tpuids = C
                                }
                                return function(e, t) {
                                    var r = [];
                                    if (15 < e.tags.length) {
                                        var n = i.deepClone(e);
                                        i.chunk(e.tags, 15).forEach(function(e) {
                                            n.tags = e;
                                            var i = JSON.stringify(n);
                                            r.push({
                                                method: "POST",
                                                url: y,
                                                data: i,
                                                bidderRequest: t
                                            })
                                        })
                                    } else {
                                        var o = JSON.stringify(e);
                                        r = {
                                            method: "POST",
                                            url: y,
                                            data: o,
                                            bidderRequest: t
                                        }
                                    }
                                    return r
                                }(A, t)
                            },
                            interpretResponse: function(e, t) {
                                var r = this,
                                    o = t.bidderRequest,
                                    c = [];
                                if (!(e = e.body) || e.error) {
                                    var d = "in response for ".concat(o.bidderCode, " adapter");
                                    return e && e.error && (d += ": ".concat(e.error)), i.logError(d), c
                                }
                                if (e.tags && e.tags.forEach(function(e) {
                                        var t = function(e) {
                                            return e && e.ads && e.ads.length && u()(e.ads, function(e) {
                                                return e.rtb
                                            })
                                        }(e);
                                        if (t && 0 !== t.cpm && f()(r.supportedMediaTypes, t.ad_type)) {
                                            var d = function(e, t, r) {
                                                var o = i.getBidRequest(e.uuid, [r]),
                                                    c = {
                                                        requestId: e.uuid,
                                                        cpm: t.cpm,
                                                        creativeId: t.creative_id,
                                                        dealId: t.deal_id,
                                                        currency: "USD",
                                                        netRevenue: !0,
                                                        ttl: 300,
                                                        adUnitCode: o.adUnitCode,
                                                        appnexus: {
                                                            buyerMemberId: t.buyer_member_id,
                                                            dealPriority: t.deal_priority,
                                                            dealCode: t.deal_code
                                                        }
                                                    };
                                                if (t.advertiser_id && (c.meta = b({}, c.meta, {
                                                        advertiserId: t.advertiser_id
                                                    })), t.rtb.video) switch (b(c, {
                                                    width: t.rtb.video.player_width,
                                                    height: t.rtb.video.player_height,
                                                    vastImpUrl: t.notify_url,
                                                    ttl: 3600
                                                }), i.deepAccess(o, "mediaTypes.video.context")) {
                                                    case s.a:
                                                        var d = Object(a.getIabSubCategory)(o.bidder, t.brand_category_id);
                                                        c.meta = b({}, c.meta, {
                                                            iabSubCatId: d
                                                        }), c.video = {
                                                            context: s.a,
                                                            durationSeconds: Math.floor(t.rtb.video.duration_ms / 1e3)
                                                        }, c.vastUrl = t.rtb.video.asset_url;
                                                        break;
                                                    case p.b:
                                                        if (c.adResponse = e, c.adResponse.ad = c.adResponse.ads[0], c.adResponse.ad.video = c.adResponse.ad.rtb.video, c.vastXml = t.rtb.video.content, t.renderer_url) {
                                                            var l = u()(r.bids, function(t) {
                                                                    return t.bidId === e.uuid
                                                                }),
                                                                f = i.deepAccess(l, "renderer.options");
                                                            c.renderer = function(e, t) {
                                                                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                                    o = n.a.install({
                                                                        id: t.renderer_id,
                                                                        url: t.renderer_url,
                                                                        config: r,
                                                                        loaded: !1,
                                                                        adUnitCode: e
                                                                    });
                                                                try {
                                                                    o.setRender(M)
                                                                } catch (e) {
                                                                    i.logWarn("Prebid Error calling setRender on renderer", e)
                                                                }
                                                                return o.setEventHandlers({
                                                                    impression: function() {
                                                                        return i.logMessage("AppNexus outstream video impression event")
                                                                    },
                                                                    loaded: function() {
                                                                        return i.logMessage("AppNexus outstream video loaded event")
                                                                    },
                                                                    ended: function() {
                                                                        i.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                                    }
                                                                }), o
                                                            }(c.adUnitCode, t, f)
                                                        }
                                                        break;
                                                    case p.a:
                                                        c.vastUrl = t.rtb.video.asset_url
                                                } else if (t.rtb[s.c]) {
                                                    var g = t.rtb[s.c],
                                                        m = t.viewability.config.replace("src=", "data-src="),
                                                        v = g.javascript_trackers;
                                                    null == v ? v = m : i.isStr(v) ? v = [v, m] : v.push(m), c[s.c] = {
                                                        title: g.title,
                                                        body: g.desc,
                                                        body2: g.desc2,
                                                        cta: g.ctatext,
                                                        rating: g.rating,
                                                        sponsoredBy: g.sponsored,
                                                        privacyLink: g.privacy_link,
                                                        address: g.address,
                                                        downloads: g.downloads,
                                                        likes: g.likes,
                                                        phone: g.phone,
                                                        price: g.price,
                                                        salePrice: g.saleprice,
                                                        clickUrl: g.link.url,
                                                        displayUrl: g.displayurl,
                                                        clickTrackers: g.link.click_trackers,
                                                        impressionTrackers: g.impression_trackers,
                                                        javascriptTrackers: v
                                                    }, g.main_img && (c.native.image = {
                                                        url: g.main_img.url,
                                                        height: g.main_img.height,
                                                        width: g.main_img.width
                                                    }), g.icon && (c.native.icon = {
                                                        url: g.icon.url,
                                                        height: g.icon.height,
                                                        width: g.icon.width
                                                    })
                                                } else {
                                                    b(c, {
                                                        width: t.rtb.banner.width,
                                                        height: t.rtb.banner.height,
                                                        ad: t.rtb.banner.content
                                                    });
                                                    try {
                                                        var y = t.rtb.trackers[0].impression_urls[0],
                                                            h = i.createTrackPixelHtml(y);
                                                        c.ad += h
                                                    } catch (t) {
                                                        i.logError("Error appending tracking pixel", t)
                                                    }
                                                }
                                                return c
                                            }(e, t, o);
                                            d.mediaType = function(e) {
                                                var t = e.ad_type;
                                                return t === s.d ? s.d : t === s.c ? s.c : s.b
                                            }(t), c.push(d)
                                        }
                                    }), e.debug && e.debug.debug_info) {
                                    var l = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                                    l = l.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), i.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), i.logMessage(l)
                                }
                                return c
                            },
                            getMappingFileInfo: function() {
                                return {
                                    url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                                    refreshInDays: 7
                                }
                            },
                            getUserSyncs: function(e) {
                                if (e.iframeEnabled) return [{
                                    type: "iframe",
                                    url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                                }]
                            },
                            transformBidParams: function(e, t) {
                                return e = i.convertTypes({
                                    member: "string",
                                    invCode: "string",
                                    placementId: "number",
                                    keywords: i.transformBidderParamKeywords
                                }, e), t && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule, e.usePaymentRule && delete e.usePaymentRule, C(e.keywords) && e.keywords.forEach(j), Object.keys(e).forEach(function(t) {
                                    var r = i.convertCamelToUnderscore(t);
                                    r !== t && (e[r] = e[t], delete e[t])
                                })), e
                            },
                            onBidWon: function(e) {
                                e.native && function(e) {
                                    var t = function(e) {
                                        var t;
                                        if (i.isStr(e) && R(e)) t = e;
                                        else if (i.isArray(e))
                                            for (var r = 0; r < e.length; r++) {
                                                var n = e[r];
                                                R(n) && (t = n)
                                            }
                                        return t
                                    }(e.native.javascriptTrackers);
                                    if (t)
                                        for (var r = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, n = function(e) {
                                                var t = e.indexOf('src="') + 5,
                                                    r = e.indexOf('"', t);
                                                return e.substring(t, r)
                                            }(t), o = n.replace("dom_id=%native_dom_id%", r), a = document.getElementsByTagName("iframe"), s = !1, c = 0; c < a.length && !s; c++) {
                                            var d = a[c];
                                            try {
                                                var u = d.contentDocument || d.contentWindow.document;
                                                if (u)
                                                    for (var l = u.getElementsByTagName("script"), f = 0; f < l.length && !s; f++) {
                                                        var p = l[f];
                                                        p.getAttribute("data-src") == n && (p.setAttribute("src", o), p.setAttribute("data-src", ""), p.removeAttribute && p.removeAttribute("data-src"), s = !0)
                                                    }
                                            } catch (e) {
                                                if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                            }
                                        }
                                }(e)
                            }
                        };

                    function C(e) {
                        return !!(i.isArray(e) && 0 < e.length)
                    }

                    function j(e) {
                        C(e.value) && "" === e.value[0] && delete e.value
                    }

                    function R(e) {
                        var t = e.match(A),
                            r = null != t && 1 <= t.length,
                            n = e.match(w),
                            i = null != n && 1 <= n.length;
                        return e.startsWith(T) && i && r
                    }

                    function D(e) {
                        var t = {};
                        if (t.sizes = N(e.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = e.bidId, e.params.placementId ? t.id = parseInt(e.params.placementId, 10) : t.code = e.params.invCode, t.allow_smaller_sizes = e.params.allowSmallerSizes || !1, t.use_pmt_rule = e.params.usePaymentRule || !1, t.prebid = !0, t.disable_psa = !0, e.params.reserve && (t.reserve = e.params.reserve), e.params.position && (t.position = {
                                above: 1,
                                below: 2
                            }[e.params.position] || 0), e.params.trafficSourceCode && (t.traffic_source_code = e.params.trafficSourceCode), e.params.privateSizes && (t.private_sizes = N(e.params.privateSizes)), e.params.supplyType && (t.supply_type = e.params.supplyType), e.params.pubClick && (t.pubclick = e.params.pubClick), e.params.extInvCode && (t.ext_inv_code = e.params.extInvCode), e.params.externalImpId && (t.external_imp_id = e.params.externalImpId), !i.isEmpty(e.params.keywords)) {
                            var r = i.transformBidderParamKeywords(e.params.keywords);
                            0 < r.length && r.forEach(j), t.keywords = r
                        }
                        if ((e.mediaType === s.c || i.deepAccess(e, "mediaTypes.".concat(s.c))) && (t.ad_types.push(s.c), 0 === t.sizes.length && (t.sizes = N([1, 1])), e.nativeParams)) {
                            var n = function(e) {
                                var t = {};
                                return Object.keys(e).forEach(function(r) {
                                    var n = O[r] && O[r].serverName || O[r] || r,
                                        o = O[r] && O[r].requiredParams;
                                    if (t[n] = b({}, o, e[r]), (n === O.image.serverName || n === O.icon.serverName) && t[n].sizes) {
                                        var a = t[n].sizes;
                                        (i.isArrayOfNums(a) || i.isArray(a) && 0 < a.length && a.every(function(e) {
                                            return i.isArrayOfNums(e)
                                        })) && (t[n].sizes = N(t[n].sizes))
                                    }
                                    n === O.privacyLink && (t.privacy_supported = !0)
                                }), t
                            }(e.nativeParams);
                            t[s.c] = {
                                layouts: [n]
                            }
                        }
                        var o = i.deepAccess(e, "mediaTypes.".concat(s.d)),
                            a = i.deepAccess(e, "mediaTypes.video.context");
                        e.mediaType !== s.d && !o || t.ad_types.push(s.d), (e.mediaType === s.d || o && "outstream" !== a) && (t.require_asset_url = !0), e.params.video && (t.video = {}, Object.keys(e.params.video).filter(function(e) {
                            return f()(h, e)
                        }).forEach(function(r) {
                            return t.video[r] = e.params.video[r]
                        })), e.renderer && (t.video = b({}, t.video, {
                            custom_renderer_present: !0
                        }));
                        var d = u()(c.a.getAdUnits(), function(t) {
                            return e.transactionId === t.transactionId
                        });
                        return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(s.b), 0 === t.ad_types.length && delete t.ad_types, t
                    }

                    function N(e) {
                        var t = [],
                            r = {};
                        if (i.isArray(e) && 2 === e.length && !i.isArray(e[0])) r.width = parseInt(e[0], 10), r.height = parseInt(e[1], 10), t.push(r);
                        else if ("object" === g(e))
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                (r = {}).width = parseInt(o[0], 10), r.height = parseInt(o[1], 10), t.push(r)
                            }
                        return t
                    }

                    function x(e) {
                        return !!e.params.user
                    }

                    function U(e) {
                        return !!parseInt(e.params.member, 10)
                    }

                    function k(e) {
                        if (e.params) return !!e.params.app
                    }

                    function P(e) {
                        return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
                    }

                    function B(e) {
                        return !!e.debug
                    }

                    function q(e) {
                        return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === s.a
                    }

                    function z(e, t, r) {
                        i.isEmpty(e.video) && (e.video = {}), e.video[t] = r
                    }

                    function M(e) {
                        e.renderer.push(function() {
                            window.ANOutstreamVideo.renderAd({
                                tagId: e.adResponse.tag_id,
                                sizes: [e.getSize().split("x")],
                                targetId: e.adUnitCode,
                                uuid: e.adResponse.uuid,
                                adResponse: e.adResponse,
                                rendererOptions: e.renderer.getConfig()
                            }, function(e, t, r) {
                                e.renderer.handleVideoEvent({
                                    id: t,
                                    eventName: r
                                })
                            }.bind(null, e))
                        })
                    }
                    Object(a.registerBidder)(_)
                }
            }, [198]), pbjsChunk([209], {
                248: function(e, t, r) {
                    e.exports = r(249)
                },
                249: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "userCMP", function() {
                        return n
                    }), r.d(t, "consentTimeout", function() {
                        return i
                    }), r.d(t, "allowAuction", function() {
                        return o
                    }), r.d(t, "staticConsentData", function() {
                        return a
                    }), t.requestBidsHook = I, t.resetConsentData = function() {
                        s = void 0, u.gdprDataHandler.setConsentData(null)
                    }, t.setConsentConfig = A;
                    var n, i, o, a, s, c = r(0),
                        d = r(3),
                        u = r(8),
                        l = r(9),
                        f = r.n(l),
                        p = r(250),
                        g = r.n(p),
                        b = "iab",
                        m = 1e4,
                        v = !0,
                        y = !1,
                        h = {
                            iab: function(e, t, r) {
                                var n, i = function() {
                                        var t = {};

                                        function n() {
                                            t.getConsentData && t.getVendorConsents && e(t, r)
                                        }
                                        return {
                                            consentDataCallback: function(e) {
                                                t.getConsentData = e, n()
                                            },
                                            vendorConsentsCallback: function(e) {
                                                t.getVendorConsents = e, n()
                                            }
                                        }
                                    }(),
                                    o = {};
                                try {
                                    n = window.__cmp || c.getWindowTop().__cmp
                                } catch (e) {}
                                if (c.isFn(n)) n("getConsentData", null, i.consentDataCallback), n("getVendorConsents", null, i.vendorConsentsCallback);
                                else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) d("getConsentData", i.consentDataCallback), d("getVendorConsents", i.vendorConsentsCallback);
                                else {
                                    for (var a, s = window; !a;) {
                                        try {
                                            s.frames.__cmpLocator && (a = s)
                                        } catch (e) {}
                                        if (s === window.top) break;
                                        s = s.parent
                                    }
                                    if (!a) return t("CMP not found.", r);
                                    u("getConsentData", a, i.consentDataCallback), u("getVendorConsents", a, i.vendorConsentsCallback)
                                }

                                function d(e, t) {
                                    var n = r.adUnits,
                                        i = 1,
                                        o = 1;
                                    if (Array.isArray(n) && 0 < n.length) {
                                        var a = c.getAdUnitSizes(n[0]);
                                        i = a[0][0], o = a[0][1]
                                    }
                                    window.$sf.ext.register(i, o, function(r, n) {
                                        if ("cmpReturn" === r) {
                                            var i = "getConsentData" === e ? n.vendorConsentData : n.vendorConsents;
                                            t(i)
                                        }
                                    }), window.$sf.ext.cmp(e)
                                }

                                function u(e, t, r) {
                                    function n(e) {
                                        var t = "string" == typeof e.data && g()(e.data, "cmpReturn") ? JSON.parse(e.data) : e.data;
                                        if (t.__cmpReturn && t.__cmpReturn.callId) {
                                            var r = t.__cmpReturn;
                                            void 0 !== o[r.callId] && (o[r.callId](r.returnValue, r.success), delete o[r.callId])
                                        }
                                    }
                                    window.__cmp = function(e, r, n) {
                                        var i = Math.random() + "",
                                            a = {
                                                __cmpCall: {
                                                    command: e,
                                                    parameter: r,
                                                    callId: i
                                                }
                                            };
                                        o[i] = n, t.postMessage(a, "*")
                                    }, window.addEventListener("message", n, !1), window.__cmp(e, null, function(e) {
                                        window.removeEventListener("message", n, !1), r(e)
                                    })
                                }
                            },
                            static: function(e, t, r) {
                                e(a, r)
                            }
                        };

                    function I(e, t) {
                        var r = {
                            context: this,
                            args: [t],
                            nextFn: e,
                            adUnits: t.adUnits || pbjs.adUnits,
                            bidsBackHandler: t.bidsBackHandler,
                            haveExited: !1,
                            timer: null
                        };
                        return s ? T(null, r) : f()(Object.keys(h), n) ? (h[n].call(this, E, S, r), void(r.haveExited || (0 === i ? E(void 0, r) : r.timer = setTimeout(function(e) {
                            S("CMP workflow exceeded timeout threshold.", e)
                        }.bind(null, r), i)))) : (c.logWarn("CMP framework (".concat(n, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), r.nextFn.apply(r.context, r.args))
                    }

                    function E(e, t) {
                        var r = e && e.getConsentData && e.getConsentData.gdprApplies;
                        "boolean" == typeof r && (!0 !== r || c.isStr(e.getConsentData.consentData) && c.isPlainObject(e.getVendorConsents) && 1 < Object.keys(e.getVendorConsents).length) ? (clearTimeout(t.timer), O(e), T(null, t)) : S("CMP returned unexpected value during lookup process.", t, e)
                    }

                    function S(e, t, r) {
                        clearTimeout(t.timer), o && O(void 0), T(e, t, r)
                    }

                    function O(e) {
                        s = {
                            consentString: e ? e.getConsentData.consentData : void 0,
                            vendorData: e ? e.getVendorConsents : void 0,
                            gdprApplies: e ? e.getConsentData.gdprApplies : void 0
                        }, u.gdprDataHandler.setConsentData(s)
                    }

                    function T(e, t, r) {
                        if (!1 === t.haveExited) {
                            t.haveExited = !0;
                            var n = t.context,
                                i = t.args,
                                a = t.nextFn;
                            e ? o ? (c.logWarn(e + " Resuming auction without consent data as per consentManagement config.", r), a.apply(n, i)) : (c.logError(e + " Canceling auction as per consentManagement config.", r), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : c.logError("Error executing bidsBackHandler")) : a.apply(n, i)
                        }
                    }

                    function A(e) {
                        c.isStr(e.cmpApi) ? n = e.cmpApi : (n = b, c.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(b, ")."))), c.isNumber(e.timeout) ? i = e.timeout : (i = m, c.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(m, ")."))), "boolean" == typeof e.allowAuctionWithoutConsent ? o = e.allowAuctionWithoutConsent : (o = v, c.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(v, ")."))), c.logInfo("consentManagement module has been activated..."), "static" === n && (c.isPlainObject(e.consentData) ? (a = e.consentData, i = 0) : c.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), y || pbjs.requestBids.before(I, 50), y = !0
                    }
                    d.b.getConfig("consentManagement", function(e) {
                        return A(e.consentManagement)
                    })
                }
            }, [248]), pbjsChunk([28], {
                339: function(e, t, r) {
                    e.exports = r(340)
                },
                340: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AnalyticsQueue = I, r.d(t, "_", function() {
                        return E
                    });
                    var n = r(6),
                        i = r(4),
                        o = r.n(i),
                        a = r(8),
                        s = r(0),
                        c = r(5);

                    function d() {
                        return (d = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var u = {};
                    u[o.a.EVENTS.AUCTION_END] = !0, u[o.a.EVENTS.BID_WON] = !0;
                    var l = d(Object(n.a)({
                        analyticsType: "endpoint"
                    }), {
                        track: function(e) {
                            var t = e.eventType,
                                r = e.args;
                            if (l.context) {
                                var n = null;
                                switch (t) {
                                    case o.a.EVENTS.AUCTION_INIT:
                                        l.context.queue && l.context.queue.init(), n = g;
                                        break;
                                    case o.a.EVENTS.BID_REQUESTED:
                                        n = b;
                                        break;
                                    case o.a.EVENTS.BID_RESPONSE:
                                        n = m;
                                        break;
                                    case o.a.EVENTS.NO_BID:
                                        n = v;
                                        break;
                                    case o.a.EVENTS.AUCTION_END:
                                        n = y;
                                        break;
                                    case o.a.EVENTS.BID_WON:
                                        n = p
                                }
                                if (n) {
                                    var i = n(r);
                                    i && l.context.queue && (t === o.a.EVENTS.BID_WON && l.context.queue.init(), l.context.queue.push(i)), u[t] && function() {
                                        var e = l.context.queue.popAll();
                                        if (function(e) {
                                                return 0 < e.length && ("init" === e[0].ev || "bidwon" === e[0].ev)
                                            }(e)) {
                                            var t = d({}, l.context.requestTemplate, {
                                                hb_ev: e
                                            });
                                            l.ajaxCall(JSON.stringify(t))
                                        }
                                    }()
                                }
                            }
                        }
                    });

                    function f(e) {
                        return "ozone" === e.bidderCode ? e.adserverTargeting && e.adserverTargeting.oz_winner && "string" == typeof e.adserverTargeting.oz_winner ? "".concat(e.bidderCode, "-").concat(e.adserverTargeting.oz_winner) : "".concat(e.bidderCode, "-unknown") : e.bidderCode
                    }

                    function p(e) {
                        var t = {
                            ev: "bidwon"
                        };
                        return h(t, "aid", e.auctionId), h(t, "bid", e.requestId), [t]
                    }

                    function g(e) {
                        l.context.auctionTimeStart = Date.now();
                        var t = {
                            ev: "init"
                        };
                        return h(t, "aid", e.auctionId), h(t, "st", l.context.auctionTimeStart), [t]
                    }

                    function b(e) {
                        return e.bids ? e.bids.map(function(t) {
                            var r = {
                                ev: "request"
                            };
                            return h(r, "n", e.bidderCode), h(r, "sid", t.adUnitCode), h(r, "bid", t.bidId), h(r, "st", e.start), r
                        }) : null
                    }

                    function m(e) {
                        if ("Bid available" !== e.statusMessage) return null;
                        var t = {
                            ev: "response"
                        };
                        return h(t, "n", f(e)), h(t, "bid", e.requestId), h(t, "sid", e.adUnitCode), h(t, "cpm", e.cpm), h(t, "pb", e.pbCg), h(t, "cry", e.currency), h(t, "net", e.netRevenue), h(t, "did", e.adId), h(t, "cid", e.creativeId), h(t, "sz", e.size), h(t, "ttr", e.timeToRespond), h(t, "lid", e.dealId), e.meta && (h(t, "dsp", e.meta.networkId), h(t, "adv", e.meta.buyerId), h(t, "bri", e.meta.brandId), h(t, "brn", e.meta.brandName), h(t, "add", e.meta.clickUrl)), [t]
                    }

                    function v(e) {
                        var t = Date.now() - l.context.auctionTimeStart,
                            r = {
                                ev: "nobid"
                            };
                        return h(r, "n", e.bidder), h(r, "bid", e.bidId), h(r, "sid", e.adUnitCode), h(r, "aid", e.auctionId), h(r, "ttr", t), [r]
                    }

                    function y(e) {
                        var t = Date.now() - l.context.auctionTimeStart,
                            r = {
                                ev: "end"
                            };
                        return h(r, "aid", e.auctionId), h(r, "ttr", t), [r]
                    }

                    function h(e, t, r) {
                        null != r && d(e, function(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }({}, t, r))
                    }

                    function I() {
                        var e = [];
                        this.push = function(t) {
                            t instanceof Array ? e.push.apply(e, t) : e.push(t)
                        }, this.popAll = function() {
                            var t = e;
                            return e = [], t
                        }, this.peekAll = function() {
                            return e
                        }, this.init = function() {
                            e = []
                        }
                    }
                    l.ajaxCall = function(e) {
                        var t = "".concat(l.context.ajaxUrl, "/commercial/api/hb");
                        Object(c.a)(t, function() {}, e, {
                            method: "POST",
                            contentType: "text/plain; charset=utf-8"
                        })
                    }, l.context = {}, l.originEnableAnalytics = l.enableAnalytics, l.enableAnalytics = function(e) {
                        e.options.ajaxUrl ? e.options.pv ? (l.context = {
                            ajaxUrl: e.options.ajaxUrl,
                            pv: e.options.pv,
                            requestTemplate: function(e) {
                                return {
                                    v: 8,
                                    pv: e.pv
                                }
                            }(e.options),
                            queue: new I
                        }, l.originEnableAnalytics(e)) : s.logError("pv is not defined. Analytics won't work") : s.logError("ajaxUrl is not defined. Analytics won't work")
                    }, a.default.registerAnalyticsAdapter({
                        adapter: l,
                        code: "gu"
                    }), t.default = l;
                    var E = {
                        getBidderCode: f
                    }
                },
                6: function(e, t, r) {
                    "use strict";
                    t.a = function(e) {
                        var t, r = e.url,
                            n = e.analyticsType,
                            i = e.global,
                            u = e.handler,
                            w = [],
                            _ = 0,
                            C = !0;
                        return n !== T && !A || function() {
                            if (C) {
                                for (var e = 0; e < w.length; e++) w[e]();
                                w.push = function(e) {
                                    e()
                                }, C = !1
                            }
                            d.logMessage("event count sent to ".concat(i, ": ").concat(_))
                        }(), {
                            track: function(e) {
                                var t = e.eventType,
                                    n = e.args;
                                this.getAdapterType() === A && window[i](u, t, n), this.getAdapterType() === T && function(e) {
                                    var t = e.eventType,
                                        n = e.args,
                                        i = e.callback;
                                    Object(o.a)(r, i, JSON.stringify({
                                        eventType: t,
                                        args: n
                                    }))
                                }.apply(void 0, arguments)
                            },
                            enqueue: j,
                            enableAnalytics: R,
                            disableAnalytics: function() {
                                d._each(t, function(e, t) {
                                    c.off(t, e)
                                }), this.enableAnalytics = this._oldEnable ? this._oldEnable : R
                            },
                            getAdapterType: function() {
                                return n
                            },
                            getGlobal: function() {
                                return i
                            },
                            getHandler: function() {
                                return u
                            },
                            getUrl: function() {
                                return r
                            }
                        };

                        function j(e) {
                            var t = e.eventType,
                                r = e.args,
                                n = this;
                            i && window[i] && t && r ? this.track({
                                eventType: t,
                                args: r
                            }) : w.push(function() {
                                _++, n.track({
                                    eventType: t,
                                    args: r
                                })
                            })
                        }

                        function R(e) {
                            var r, n = this,
                                o = this;
                            "object" !== s(e) || "object" !== s(e.options) || void 0 === e.options.sampling || Math.random() < parseFloat(e.options.sampling) ? (c.getEvents().forEach(function(e) {
                                if (e) {
                                    var t = e.eventType,
                                        r = e.args;
                                    t !== b && j.call(o, {
                                        eventType: t,
                                        args: r
                                    })
                                }
                            }), a(r = {}, p, function(e) {
                                return n.enqueue({
                                    eventType: p,
                                    args: e
                                })
                            }), a(r, g, function(e) {
                                return n.enqueue({
                                    eventType: g,
                                    args: e
                                })
                            }), a(r, m, function(e) {
                                return n.enqueue({
                                    eventType: m,
                                    args: e
                                })
                            }), a(r, v, function(e) {
                                return n.enqueue({
                                    eventType: v,
                                    args: e
                                })
                            }), a(r, b, function(e) {
                                return n.enqueue({
                                    eventType: b,
                                    args: e
                                })
                            }), a(r, y, function(e) {
                                return n.enqueue({
                                    eventType: y,
                                    args: e
                                })
                            }), a(r, h, function(e) {
                                return n.enqueue({
                                    eventType: h,
                                    args: e
                                })
                            }), a(r, I, function(e) {
                                return n.enqueue({
                                    eventType: I,
                                    args: e
                                })
                            }), a(r, E, function(e) {
                                return n.enqueue({
                                    eventType: E,
                                    args: e
                                })
                            }), a(r, f, function(e) {
                                return n.enqueue({
                                    eventType: f,
                                    args: e
                                })
                            }), a(r, S, function(e) {
                                return n.enqueue({
                                    eventType: S,
                                    args: e
                                })
                            }), a(r, O, function(e) {
                                return n.enqueue({
                                    eventType: O,
                                    args: e
                                })
                            }), a(r, l, function(t) {
                                t.config = "object" === s(e) && e.options || {}, n.enqueue({
                                    eventType: l,
                                    args: t
                                })
                            }), t = r, d._each(t, function(e, t) {
                                c.on(t, e)
                            })) : d.logMessage('Analytics adapter for "'.concat(i, '" disabled by sampling')), this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                                return d.logMessage('Analytics adapter for "'.concat(i, '" already enabled, unnecessary call to `enableAnalytics`.'))
                            }
                        }
                    };
                    var n = r(4),
                        i = r.n(n),
                        o = r(5);

                    function a(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function s(e) {
                        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var c = r(7),
                        d = r(0),
                        u = i.a.EVENTS,
                        l = u.AUCTION_INIT,
                        f = u.AUCTION_END,
                        p = u.REQUEST_BIDS,
                        g = u.BID_REQUESTED,
                        b = u.BID_TIMEOUT,
                        m = u.BID_RESPONSE,
                        v = u.NO_BID,
                        y = u.BID_WON,
                        h = u.BID_ADJUSTMENT,
                        I = u.BIDDER_DONE,
                        E = u.SET_TARGETING,
                        S = u.AD_RENDER_FAILED,
                        O = u.ADD_AD_UNITS,
                        T = "endpoint",
                        A = "bundle"
                }
            }, [339]), pbjsChunk([166], {
                357: function(e, t, r) {
                    e.exports = r(358)
                },
                358: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return s
                    }), t.ImproveDigitalAdServerJSClient = c;
                    var n = r(0),
                        i = r(1),
                        o = r(3),
                        a = r(2),
                        s = {
                            version: "5.2.0",
                            code: "improvedigital",
                            aliases: ["id"],
                            supportedMediaTypes: [a.b, a.c],
                            isBidRequestValid: function(e) {
                                return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId))
                            },
                            buildRequests: function(e, t) {
                                var r = e.map(function(e) {
                                        return function(e) {
                                            var t = n.getBidIdParameter("adUnitCode", e) || null,
                                                r = n.getBidIdParameter("placementId", e.params) || null,
                                                i = null,
                                                a = null;
                                            null === r && (i = n.getBidIdParameter("publisherId", e.params) || null, a = n.getBidIdParameter("placementKey", e.params) || null);
                                            var s = n.getBidIdParameter("keyValues", e.params) || null,
                                                c = n.getBidIdParameter("size", e.params) || null,
                                                d = n.getBidIdParameter("bidId", e),
                                                u = n.getBidIdParameter("transactionId", e),
                                                l = o.b.getConfig("currency.adServerCurrency"),
                                                f = n.getBidIdParameter("bidFloor", e.params),
                                                p = n.getBidIdParameter("bidFloorCur", e.params),
                                                g = {};
                                            return r ? g.placementId = r : (i && (g.publisherId = i), a && (g.placementKey = a)), s && (g.keyValues = s), !0 === o.b.getConfig("improvedigital.usePrebidSizes") && e.sizes && 0 < e.sizes.length ? g.format = e.sizes : c && c.w && c.h && (g.size = {}, g.size.h = c.h, g.size.w = c.w), d && (g.id = d), t && (g.adUnitId = t), u && (g.transactionId = u), l && (g.currency = l), f && (g.bidFloor = f, g.bidFloorCur = p ? p.toUpperCase() : "USD"), g
                                        }(e)
                                    }),
                                    i = new c("hb"),
                                    a = {
                                        singleRequestMode: !0 === o.b.getConfig("improvedigital.singleRequest"),
                                        returnObjType: i.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT,
                                        libVersion: this.version
                                    };
                                t && t.gdprConsent && t.gdprConsent.consentString && (a.gdpr = t.gdprConsent.consentString), t && t.refererInfo && t.refererInfo.referer && (a.referrer = t.refererInfo.referer);
                                var s = i.createRequest(r, a);
                                return s.errors && 0 < s.errors.length && n.logError("ID WARNING 0x01"), s.requests
                            },
                            interpretResponse: function(e, t) {
                                var r = [];
                                return n._each(e.body.bid, function(e) {
                                    if (e.price && null !== e.price && !e.hasOwnProperty("errorCode") && (e.adm || e.native)) {
                                        var i = {};
                                        if (e.native) i.native = function(e) {
                                            var t = {};
                                            return e && n.isArray(e.assets) ? (e.assets.forEach(function(e) {
                                                if (e.title) t.title = e.title.text;
                                                else if (e.data) switch (e.data.type) {
                                                    case 1:
                                                        t.sponsoredBy = e.data.value;
                                                        break;
                                                    case 2:
                                                        t.body = e.data.value;
                                                        break;
                                                    case 3:
                                                        t.rating = e.data.value;
                                                        break;
                                                    case 4:
                                                        t.likes = e.data.value;
                                                        break;
                                                    case 5:
                                                        t.downloads = e.data.value;
                                                        break;
                                                    case 6:
                                                        t.price = e.data.value;
                                                        break;
                                                    case 7:
                                                        t.salePrice = e.data.value;
                                                        break;
                                                    case 8:
                                                        t.phone = e.data.value;
                                                        break;
                                                    case 9:
                                                        t.address = e.data.value;
                                                        break;
                                                    case 10:
                                                        t.body2 = e.data.value;
                                                        break;
                                                    case 11:
                                                        t.displayUrl = e.data.value;
                                                        break;
                                                    case 12:
                                                        t.cta = e.data.value
                                                } else if (e.img) switch (e.img.type) {
                                                    case 2:
                                                        t.icon = {
                                                            url: e.img.url,
                                                            width: e.img.w,
                                                            height: e.img.h
                                                        };
                                                        break;
                                                    case 3:
                                                        t.image = {
                                                            url: e.img.url,
                                                            width: e.img.w,
                                                            height: e.img.h
                                                        }
                                                }
                                            }), e.eventtrackers ? (t.impressionTrackers = [], e.eventtrackers.forEach(function(e) {
                                                if (1 === e.event) switch (e.method) {
                                                    case 1:
                                                        t.impressionTrackers.push(e.url);
                                                        break;
                                                    case 2:
                                                        t.javascriptTrackers = '<script src="'.concat(e.url, '"><\/script>')
                                                }
                                            })) : (t.impressionTrackers = e.imptrackers || [], t.javascriptTrackers = e.jstracker), e.link && (t.clickUrl = e.link.url, t.clickTrackers = e.link.clicktrackers), e.privacy && (t.privacyLink = e.privacy), t) : null
                                        }(e.native), i.ortbNative = e.native, e.nurl && i.native.impressionTrackers.unshift(e.nurl), i.mediaType = a.c;
                                        else {
                                            var o = "";
                                            e.nurl && 0 < e.nurl.length && (o = '<img src="'.concat(e.nurl, '" width="0" height="0" style="display:none">')), i.ad = "".concat(o, "<script>").concat(e.adm, "<\/script>"), i.mediaType = a.b
                                        }
                                        if (i.adId = e.id, i.cpm = parseFloat(e.price), i.creativeId = e.crid, i.currency = e.currency ? e.currency.toUpperCase() : "USD", n.isNumber(e.lid) && "deal_id" === e.buying_type) i.dealId = e.lid;
                                        else if (Array.isArray(e.lid) && Array.isArray(e.buying_type) && e.lid.length === e.buying_type.length) {
                                            var s = !1;
                                            e.buying_type.forEach(function(t, r) {
                                                s || "deal_id" === t && (s = !0, i.dealId = e.lid[r])
                                            })
                                        }
                                        i.height = e.h, i.netRevenue = !!e.isNet && e.isNet, i.requestId = e.id, i.ttl = 300, i.width = e.w, i.width && i.height || (i.width = 1, i.height = 1, t.sizes && (i.width = t.sizes[0][0], i.height = t.sizes[0][1])), r.push(i)
                                    }
                                }), r
                            },
                            getUserSyncs: function(e, t) {
                                if (e.pixelEnabled) {
                                    var r = [];
                                    return t.forEach(function(e) {
                                        e.body.bid.forEach(function(e) {
                                            n.isArray(e.sync) && e.sync.forEach(function(e) {
                                                -1 === r.indexOf(e) && r.push(e)
                                            })
                                        })
                                    }), r.map(function(e) {
                                        return {
                                            type: "image",
                                            url: e
                                        }
                                    })
                                }
                                return []
                            }
                        };

                    function c(e) {
                        this.CONSTANTS = {
                            AD_SERVER_BASE_URL: "ice.360yield.com",
                            END_POINT: e || "hb",
                            AD_SERVER_URL_PARAM: "jsonp=",
                            CLIENT_VERSION: "JS-6.2.0",
                            MAX_URL_LENGTH: 2083,
                            ERROR_CODES: {
                                MISSING_PLACEMENT_PARAMS: 2,
                                LIB_VERSION_MISSING: 3
                            },
                            RETURN_OBJ_TYPE: {
                                DEFAULT: 0,
                                URL_PARAMS_SPLIT: 1
                            }
                        }, this.getErrorReturn = function(e) {
                            return {
                                idMappings: {},
                                requests: {},
                                errorCode: e
                            }
                        }, this.createRequest = function(e, t, r) {
                            if (!t.libVersion) return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);
                            t.returnObjType = t.returnObjType || this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT, t.adServerBaseUrl = "https://" + (t.adServerBaseUrl || this.CONSTANTS.AD_SERVER_BASE_URL);
                            var i, o = [];
                            if (n.isArray(e))
                                for (var a = 0; a < e.length; a++) i = this.createImpressionObject(e[a]), o.push(i);
                            else i = this.createImpressionObject(e), o.push(i);
                            var s = !0;
                            t.returnObjType === this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT && (s = !1);
                            var c = {
                                requests: []
                            };
                            s && (c.idMappings = []);
                            for (var d = null, u = "".concat(t.adServerBaseUrl, "/").concat(this.CONSTANTS.END_POINT, "?").concat(this.CONSTANTS.AD_SERVER_URL_PARAM), l = {
                                    bid_request: this.createBasicBidRequestObject(t, r)
                                }, f = 0; f < o.length; f++)
                                if ((i = o[f]).errorCode)(d = d || []).push({
                                    errorCode: i.errorCode,
                                    adUnitId: i.adUnitId
                                });
                                else {
                                    s && c.idMappings.push({
                                        adUnitId: i.adUnitId,
                                        id: i.impressionObject.id
                                    }), l.bid_request.imp = l.bid_request.imp || [], l.bid_request.imp.push(i.impressionObject);
                                    var p = !1;
                                    (u + encodeURIComponent(JSON.stringify(l))).length > this.CONSTANTS.MAX_URL_LENGTH && (p = !0, 1 < l.bid_request.imp.length && (l.bid_request.imp.pop(), s && c.idMappings.pop(), f--)), !p && t.singleRequestMode && f !== o.length - 1 || (c.requests.push(this.formatRequest(t, l)), l = {
                                        bid_request: this.createBasicBidRequestObject(t, r)
                                    })
                                }
                            return d && (c.errors = d), c
                        }, this.formatRequest = function(e, t) {
                            switch (e.returnObjType) {
                                case this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT:
                                    return {
                                        method: "GET",
                                        url: "".concat(e.adServerBaseUrl, "/").concat(this.CONSTANTS.END_POINT),
                                        data: "".concat(this.CONSTANTS.AD_SERVER_URL_PARAM).concat(encodeURIComponent(JSON.stringify(t)))
                                    };
                                default:
                                    return {
                                        url: "".concat(e.adServerBaseUrl, "/") + "".concat(this.CONSTANTS.END_POINT, "?").concat(this.CONSTANTS.AD_SERVER_URL_PARAM) + encodeURIComponent(JSON.stringify(t))
                                    }
                            }
                        }, this.createBasicBidRequestObject = function(e, t) {
                            var r = {
                                secure: 1
                            };
                            if (e.requestId ? r.id = e.requestId : r.id = n.getUniqueIdentifierStr(), e.domain && (r.domain = e.domain), e.page && (r.page = e.page), e.ref && (r.ref = e.ref), e.callback && (r.callback = e.callback), e.libVersion && (r.version = e.libVersion + "-" + this.CONSTANTS.CLIENT_VERSION), e.referrer && (r.referrer = e.referrer), !e.gdpr && 0 !== e.gdpr || (r.gdpr = e.gdpr), t)
                                for (var i in t) r[i] = t[i];
                            return r
                        }, this.createImpressionObject = function(e) {
                            var t = {},
                                r = {};
                            if (t.impressionObject = r, e.id ? r.id = e.id : r.id = n.getUniqueIdentifierStr(), e.adUnitId && (t.adUnitId = e.adUnitId), e.currency && (r.currency = e.currency.toUpperCase()), e.bidFloor && (r.bidfloor = e.bidFloor), e.bidFloorCur && (r.bidfloorcur = e.bidFloorCur.toUpperCase()), e.placementId && (r.pid = e.placementId), e.publisherId && (r.pubid = e.publisherId), e.placementKey && (r.pkey = e.placementKey), e.transactionId && (r.tid = e.transactionId), e.keyValues)
                                for (var i in e.keyValues)
                                    for (var o = 0; o < e.keyValues[i].length; o++) r.kvw = r.kvw || {}, r.kvw[i] = r.kvw[i] || [], r.kvw[i].push(e.keyValues[i][o]);
                            if (r.banner = {}, e.size && e.size.w && e.size.h && (r.banner.w = e.size.w, r.banner.h = e.size.h), e.format && n.isArray(e.format)) {
                                var a = e.format.filter(function(e) {
                                    return 2 === e.length && n.isInteger(e[0]) && n.isInteger(e[1]) && 0 <= e[0] && 0 <= e[1]
                                }).map(function(e) {
                                    return {
                                        w: e[0],
                                        h: e[1]
                                    }
                                });
                                0 < a.length && (r.banner.format = a)
                            }
                            return r.pid || r.pubid || r.pkey || r.banner && r.banner.w && r.banner.h || (t.impressionObject = null, t.errorCode = this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS), t
                        }
                    }
                    Object(i.registerBidder)(s)
                }
            }, [357]), pbjsChunk([161], {
                369: function(e, t, r) {
                    e.exports = r(370)
                },
                370: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return f
                    });
                    var n = r(0),
                        i = r(2),
                        o = r(3),
                        a = r(371),
                        s = r.n(a),
                        c = r(1);

                    function d(e) {
                        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var u = {
                        JPY: 1
                    };

                    function l(e) {
                        return Array.isArray(e) && 2 === e.length && s()(e[0]) && s()(e[1])
                    }
                    var f = {
                        code: "ix",
                        supportedMediaTypes: [i.b],
                        isBidRequestValid: function(e) {
                            if (!l(e.params.size)) return !1;
                            if (! function(e, t) {
                                    if (l(e)) return e[0] === t[0] && e[1] === t[1];
                                    for (var r = 0; r < e.length; r++)
                                        if (e[r][0] === t[0] && e[r][1] === t[1]) return !0;
                                    return !1
                                }(e.sizes, e.params.size)) return !1;
                            if (e.hasOwnProperty("mediaType") && "banner" !== e.mediaType) return !1;
                            if (e.hasOwnProperty("mediaTypes") && !n.deepAccess(e, "mediaTypes.banner.sizes")) return !1;
                            if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return !1;
                            var t = e.params.hasOwnProperty("bidFloor"),
                                r = e.params.hasOwnProperty("bidFloorCur");
                            return !t && !r || t && r && function(e, t) {
                                return Boolean("number" == typeof e && "string" == typeof t && t.match(/^[A-Z]{3}$/))
                            }(e.params.bidFloor, e.params.bidFloorCur)
                        },
                        buildRequests: function(e, t) {
                            for (var r, i, a = [], s = [], c = null, u = null, l = "https://as-sec.casalemedia.com/cygnus", f = 0; f < e.length; f++) c = e[f], i = void 0, (i = {}).id = (r = c).bidId, i.banner = {}, i.banner.w = r.params.size[0], i.banner.h = r.params.size[1], i.banner.topframe = n.inIframe() ? 0 : 1, i.ext = {}, i.ext.siteID = r.params.siteId, !r.params.hasOwnProperty("id") || "string" != typeof r.params.id && "number" != typeof r.params.id ? i.ext.sid = "".concat(r.params.size[0], "x").concat(r.params.size[1]) : i.ext.sid = String(r.params.id), r.params.hasOwnProperty("bidFloor") && r.params.hasOwnProperty("bidFloorCur") && (i.bidfloor = r.params.bidFloor, i.bidfloorcur = r.params.bidFloorCur), u = i, a.push(u);
                            if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                                var p = window.headertag.getIdentityInfo();
                                if (p && "object" === d(p))
                                    for (var g in p)
                                        if (p.hasOwnProperty(g)) {
                                            var b = p[g];
                                            !b.responsePending && b.data && "object" === d(b.data) && Object.keys(b.data).length && s.push(b.data)
                                        }
                            }
                            var m = {};
                            if (m.id = e[0].bidderRequestId, m.imp = a, m.site = {}, m.ext = {}, m.ext.source = "prebid", 0 < s.length && (m.user = {}, m.user.eids = s), document.referrer && "" !== document.referrer && (m.site.ref = document.referrer), t) {
                                if (t.gdprConsent) {
                                    var v = t.gdprConsent;
                                    v.hasOwnProperty("gdprApplies") && (m.regs = {
                                        ext: {
                                            gdpr: v.gdprApplies ? 1 : 0
                                        }
                                    }), v.hasOwnProperty("consentString") && (m.user = m.user || {}, m.user.ext = {
                                        consent: v.consentString || ""
                                    })
                                }
                                t.refererInfo && (m.site.page = t.refererInfo.referer, t.refererInfo.referer && 0 !== t.refererInfo.referer.indexOf("https") && (l = "http://as.casalemedia.com/cygnus"))
                            }
                            var y = {},
                                h = o.b.getConfig("ix");
                            if (h) {
                                if ("object" === d(h.firstPartyData)) {
                                    var I = h.firstPartyData,
                                        E = "?";
                                    for (var S in I) I.hasOwnProperty(S) && (E += "".concat(encodeURIComponent(S), "=").concat(encodeURIComponent(I[S]), "&"));
                                    E = E.slice(0, -1), m.site.page += E
                                }
                                "number" == typeof h.timeout && (y.t = h.timeout)
                            }
                            return y.s = e[0].params.siteId, y.v = 7.2, y.r = JSON.stringify(m), y.ac = "j", y.sd = 1, {
                                method: "GET",
                                url: l,
                                data: y
                            }
                        },
                        interpretResponse: function(e) {
                            var t = [],
                                r = null;
                            if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return t;
                            for (var i, o, a, s = e.body, c = s.seatbid, d = 0; d < c.length; d++)
                                if (c[d].hasOwnProperty("bid"))
                                    for (var l = c[d].bid, f = 0; f < l.length; f++) i = l[f], o = s.cur, a = void 0, a = {}, u.hasOwnProperty(o) ? a.cpm = i.price / u[o] : a.cpm = i.price / 100, a.requestId = i.impid, a.width = i.w, a.height = i.h, a.ad = i.adm, a.dealId = n.deepAccess(i, "ext.dealid"), a.ttl = 10, a.netRevenue = !0, a.currency = o, a.creativeId = i.hasOwnProperty("crid") ? i.crid : "-", a.meta = {}, a.meta.networkId = n.deepAccess(i, "ext.dspid"), a.meta.brandId = n.deepAccess(i, "ext.advbrandid"), a.meta.brandName = n.deepAccess(i, "ext.advbrand"), r = a, t.push(r);
                            return t
                        },
                        transformBidParams: function(e, t) {
                            return n.convertTypes({
                                siteID: "number"
                            }, e)
                        }
                    };
                    Object(c.registerBidder)(f)
                }
            }, [369]), pbjsChunk([130], {
                444: function(e, t, r) {
                    e.exports = r(445)
                },
                445: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.resetBoPixel = function() {
                        p = !0
                    }, r.d(t, "spec", function() {
                        return g
                    });
                    var n = r(3),
                        i = r(1),
                        o = r(0),
                        a = r(26),
                        s = r(2),
                        c = r(10),
                        d = [s.b, s.d],
                        u = "openx",
                        l = "hb_pb",
                        f = "2.1.9",
                        p = !0,
                        g = {
                            code: u,
                            aliases: ["oxd"],
                            supportedMediaTypes: d,
                            isBidRequestValid: function(e) {
                                var t = e.params.delDomain || e.params.platform;
                                return o.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < o.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
                            },
                            buildRequests: function(e, t) {
                                if (0 === e.length) return [];
                                var r = [],
                                    i = function(e, t) {
                                        return function(e) {
                                            if (Array.isArray(e)) return e
                                        }(e) || function(e, t) {
                                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                                var r = [],
                                                    n = !0,
                                                    i = !1,
                                                    o = void 0;
                                                try {
                                                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                                                } catch (e) {
                                                    i = !0, o = e
                                                } finally {
                                                    try {
                                                        n || null == s.return || s.return()
                                                    } finally {
                                                        if (i) throw o
                                                    }
                                                }
                                                return r
                                            }
                                        }(e) || function() {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                        }()
                                    }(function(e) {
                                        return e.reduce(function(e, t) {
                                            return function(e) {
                                                return o.deepAccess(e, "mediaTypes.video") && !o.deepAccess(e, "mediaTypes.banner") || e.mediaType === s.d
                                            }(t) ? e[0].push(t) : e[1].push(t), e
                                        }, [
                                            [],
                                            []
                                        ])
                                    }(e)),
                                    a = i[0],
                                    c = i[1];
                                return 0 < c.length && r.push(function(e, t) {
                                    var r = [],
                                        i = !1,
                                        a = m(e, t),
                                        s = o._map(e, function(e) {
                                            return e.params.unit
                                        });
                                    a.aus = o._map(e, function(e) {
                                        return o.parseSizesInput(e.sizes).join(",")
                                    }).join("|"), a.divIds = o._map(e, function(e) {
                                        return encodeURIComponent(e.adUnitCode)
                                    }).join(","), s.some(function(e) {
                                        return e
                                    }) && (a.auid = s.join(",")), e.some(function(e) {
                                        return e.params.doNotTrack
                                    }) && (a.ns = 1), !0 !== n.b.getConfig("coppa") && !e.some(function(e) {
                                        return e.params.coppa
                                    }) || (a.tfcd = 1), e.forEach(function(e) {
                                        if (e.params.customParams) {
                                            var t = o._map(Object.keys(e.params.customParams), function(t) {
                                                    return function(e, t) {
                                                        var r = t[e];
                                                        return o.isArray(r) && (r = r.join(",")), (e.toLowerCase() + "=" + r.toLowerCase()).replace("+", ".").replace("/", "_")
                                                    }(t, e.params.customParams)
                                                }),
                                                n = window.btoa(t.join("&"));
                                            i = !0, r.push(n)
                                        } else r.push("")
                                    }), i && (a.tps = r.join(","));
                                    var c = [],
                                        d = !1;
                                    return e.forEach(function(e) {
                                        e.params.customFloor ? (c.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), d = !0) : c.push(0)
                                    }), d && (a.aumfs = c.join(",")), {
                                        method: "GET",
                                        url: a.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(e[0].params.delDomain, "/w/1.0/arj"),
                                        data: a,
                                        payload: {
                                            bids: e,
                                            startTime: new Date
                                        }
                                    }
                                }(c, t)), 0 < a.length && a.forEach(function(e) {
                                    r.push(function(e, t) {
                                        var r = function(e, t) {
                                            var r, n, i = m([e], t),
                                                a = o.deepAccess(e, "params.video") || {},
                                                s = o.deepAccess(e, "mediaTypes.video.context"),
                                                c = o.deepAccess(e, "mediaTypes.video.playerSize");
                                            return o.isArray(e.sizes) && 2 === e.sizes.length && !o.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : o.isArray(e.sizes) && o.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : o.isArray(c) && 2 === c.length && (r = parseInt(c[0], 10), n = parseInt(c[1], 10)), Object.keys(a).forEach(function(e) {
                                                "openrtb" === e ? (a[e].w = r || a[e].w, a[e].v = n || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || "url" === e || (i[e] = a[e])
                                            }), i.auid = e.params.unit, i.vwd = r || a.vwd, i.vht = n || a.vht, "outstream" === s && (i.vos = "101"), a.mimes && (i.vmimes = a.mimes), i
                                        }(e, t);
                                        return {
                                            method: "GET",
                                            url: r.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(e.params.delDomain, "/v/1.0/avjp"),
                                            data: r,
                                            payload: {
                                                bid: e,
                                                startTime: new Date
                                            }
                                        }
                                    }(e, t))
                                }), r
                            },
                            interpretResponse: function(e, t) {
                                var r = e.body;
                                return (/avjp$/.test(t.url) ? s.d : s.b) === s.d ? function(e, t) {
                                    var r = t.bid,
                                        n = t.startTime,
                                        i = [];
                                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                                        var o = Object(c.c)(e.vastUrl).search || {},
                                            a = {};
                                        a.requestId = r.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = Number(e.pub_rev) / 1e3, a.width = e.width, a.height = e.height, a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = s.d, e.ph = o.ph, e.colo = o.colo, e.ts = o.ts, i.push(a), v(s.d, e, n)
                                    }
                                    return i
                                }(r, t.payload) : function(e, t) {
                                    for (var r = t.bids, n = t.startTime, i = e.ads.ad, o = [], a = 0; a < i.length; a++) {
                                        var c = i[a],
                                            d = parseInt(c.idx, 10),
                                            u = {};
                                        if (u.requestId = r[d].bidId, c.pub_rev) {
                                            u.cpm = Number(c.pub_rev) / 1e3;
                                            var l = c.creative[0];
                                            l && (u.width = l.width, u.height = l.height), u.creativeId = l.id, u.ad = c.html, c.deal_id && (u.dealId = c.deal_id), u.ttl = 300, u.netRevenue = !0, u.currency = c.currency, c.tbd && (u.tbd = c.tbd), u.ts = c.ts, u.meta = {}, c.brand_id && (u.meta.brandId = c.brand_id), c.adv_id && (u.meta.dspid = c.adv_id), o.push(u), v(s.b, c, n)
                                        }
                                    }
                                    return o
                                }(r, t.payload)
                            },
                            getUserSyncs: function(e, t) {
                                if (e.iframeEnabled || e.pixelEnabled) return [{
                                    type: e.iframeEnabled ? "iframe" : "image",
                                    url: o.deepAccess(t, "0.body.ads.pixels") || o.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                                }]
                            },
                            transformBidParams: function(e, t) {
                                return o.convertTypes({
                                    unit: "string",
                                    customFloor: "number"
                                }, e)
                            }
                        };

                    function b(e) {
                        for (var t in e) e.hasOwnProperty(t) && (e[t] || delete e[t]);
                        return o._map(Object.keys(e), function(t) {
                            return "".concat(t, "=").concat(e[t])
                        }).join("&")
                    }

                    function m(e, t) {
                        var r, i = o.inIframe();
                        if (r = {
                                ju: n.b.getConfig("pageUrl") || o.getTopWindowUrl(),
                                jr: o.getTopWindowReferrer(),
                                ch: document.charSet || document.characterSet,
                                res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                                ifr: i,
                                tz: (new Date).getTimezoneOffset(),
                                tws: function(e) {
                                    var t, r, n, i = window,
                                        o = document,
                                        a = o.documentElement;
                                    if (e) {
                                        try {
                                            i = window.top, o = window.top.document
                                        } catch (e) {
                                            return
                                        }
                                        a = o.documentElement, n = o.body, t = i.innerWidth || a.clientWidth || n.clientWidth, r = i.innerHeight || a.clientHeight || n.clientHeight
                                    } else a = o.documentElement, t = i.innerWidth || a.clientWidth, r = i.innerHeight || a.clientHeight;
                                    return "".concat(t, "x").concat(r)
                                }(i),
                                be: 1,
                                bc: e[0].params.bc || "".concat(l, "_").concat(f),
                                dddid: o._map(e, function(e) {
                                    return e.transactionId
                                }).join(","),
                                nocache: (new Date).getTime()
                            }, e[0].params.platform && (r.ph = e[0].params.platform), o.deepAccess(t, "gdprConsent")) {
                            var a = t.gdprConsent;
                            void 0 !== a.consentString && (r.gdpr_consent = a.consentString), void 0 !== a.gdprApplies && (r.gdpr = a.gdprApplies ? 1 : 0), "iab" === n.b.getConfig("consentManagement.cmpApi") && (r.x_gdpr_f = 1)
                        }
                        return e[0].userId && e[0].userId.pubcid ? r.pubcid = e[0].userId.pubcid : e[0].crumbs && e[0].crumbs.pubcid && (r.pubcid = e[0].crumbs.pubcid), e[0].schain && (r.schain = function(e) {
                            return "".concat(e.ver, ",").concat(e.complete, "!").concat(function(e) {
                                var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                                return e.map(function(e) {
                                    return t.map(function(t) {
                                        return e[t] || ""
                                    }).join(",")
                                }).join("!")
                            }(e.nodes))
                        }(e[0].schain)), r
                    }

                    function v(e, t, r) {
                        if (p) {
                            p = !1;
                            var i, d = n.b.getConfig("bidderTimeout");
                            window.PREBID_TIMEOUT && (d = Math.min(window.PREBID_TIMEOUT, d));
                            var l = {
                                bd: +new Date - r,
                                bp: t.pub_rev,
                                br: "0",
                                bs: o.getTopWindowLocation().hostname,
                                bt: d,
                                ts: t.ts
                            };
                            if (l.br = l.bt < l.bd ? "t" : "p", e === s.d) {
                                var f = Object(c.c)(t.colo);
                                l.ph = t.ph, i = "//".concat(f.hostname, "/w/1.0/bo?").concat(b(l))
                            } else {
                                var g = o.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                                g && 1 < g.length && (i = "".concat(g[1], "bo?").concat(b(l)))
                            }
                            i && a.a.registerSync("image", u, i)
                        }
                    }
                    Object(i.registerBidder)(g)
                }
            }, [444]), pbjsChunk([123], {
                458: function(e, t, r) {
                    e.exports = r(459)
                },
                459: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return p
                    }), t.injectAdIdsIntoAllBidResponses = g, t.checkDeepArray = b, t.defaultSize = m, t.ozoneGetWinnerForRequestBid = v, t.ozoneGetAllBidsForBidId = y, t.getRoundedBid = h, t.getGranularityKeyName = I, t.getGranularityObject = E, t.ozoneAddStandardProperties = S, t.getTestQuerystringValue = O, t.pgGuid = function() {
                        return (new Date).getTime() + "xxxxxxxx".replace(/x/g, function(e) {
                            return Math.round(36 * Math.random()).toString(36)
                        })
                    }, t.getWidthAndHeightFromVideoObject = A, t.playerSizeIsNestedArray = w;
                    var n = r(0),
                        i = r(1),
                        o = r(2),
                        a = r(3),
                        s = r(43),
                        c = r(11);

                    function d() {
                        return (d = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function u(e) {
                        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var l = "https://elb.the-ozone-project.com/openrtb2/auction",
                        f = "2.1.2",
                        p = {
                            code: "ozone",
                            supportedMediaTypes: [o.d, o.b],
                            isBidRequestValid: function(e) {
                                if (!e.params.hasOwnProperty("placementId")) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : missing placementId : siteId, placementId and publisherId are REQUIRED"), !1;
                                if (!e.params.placementId.toString().match(/^[0-9]{10}$/)) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : placementId must be exactly 10 numeric characters"), !1;
                                if (!e.params.hasOwnProperty("publisherId")) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : missing publisherId : siteId, placementId and publisherId are REQUIRED"), !1;
                                if (!e.params.publisherId.toString().match(/^[a-zA-Z0-9\-]{12}$/)) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : publisherId must be exactly 12 alphanumieric characters including hyphens"), !1;
                                if (!e.params.hasOwnProperty("siteId")) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : missing siteId : siteId, placementId and publisherId are REQUIRED"), !1;
                                if (!e.params.siteId.toString().match(/^[0-9]{10}$/)) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : siteId must be exactly 10 numeric characters"), !1;
                                if (e.params.hasOwnProperty("customData") && "object" !== u(e.params.customData)) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : customData is not an object"), !1;
                                if (e.params.hasOwnProperty("customParams")) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : customParams should be renamed to customData"), !1;
                                if (e.params.hasOwnProperty("lotameData") && "object" !== u(e.params.lotameData)) return n.logInfo("OZONE: OZONE BID ADAPTER VALIDATION FAILED : lotameData is not an object"), !1;
                                if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.d)) {
                                    if (!e.mediaTypes.video.hasOwnProperty("context")) return n.logInfo("OZONE: [WARNING] No context key/value in bid. Rejecting bid: ", e), !1;
                                    if ("outstream" !== e.mediaTypes.video.context) return n.logInfo("OZONE: [WARNING] Only outstream video is supported. Rejecting bid: ", e), !1
                                }
                                return !0
                            },
                            buildRequests: function(e, t) {
                                n.logInfo("OZONE: ozone v2.1.2 validBidRequests", e, "bidderRequest", t);
                                var r = a.b.getConfig("ozone.singleRequest");
                                r = !1 !== r, n.logInfo("OZONE: config ozone.singleRequest : ", r);
                                var i = e[0].params,
                                    s = {};
                                if (delete s.test, t && t.gdprConsent)
                                    if (n.logInfo("OZONE: ADDING GDPR info"), s.regs = {}, s.regs.ext = {}, s.regs.ext.gdpr = t.gdprConsent.gdprApplies ? 1 : 0, s.regs.ext.gdpr) {
                                        if (s.user = s.user || {}, t.gdprConsent.vendorData && t.gdprConsent.vendorData.vendorConsents && void 0 !== t.gdprConsent.consentString) {
                                            n.logInfo("OZONE: found all info we need for GDPR - will add info to request object"), s.user.ext = {
                                                consent: t.gdprConsent.consentString
                                            };
                                            var c = t.gdprConsent.vendorData.vendorConsents[524],
                                                p = function(e) {
                                                    var t = [];
                                                    return Object.keys(e).forEach(function(r) {
                                                        e[r] && t.push(parseInt(r))
                                                    }), n.logInfo("OZONE: toFlatArray:", e, "returning", t), t
                                                }(t.gdprConsent.vendorData.purposeConsents);
                                            s.regs.ext.oz_con = c ? 1 : 0, s.regs.ext.gap = p
                                        }
                                    } else n.logInfo("OZONE: **** Failed to find required info for GDPR for request object, even though bidderRequest.gdprConsent is TRUE ****");
                                else n.logInfo("OZONE: WILL NOT ADD GDPR info; no bidderRequest.gdprConsent object was present.");
                                s.device = {
                                    w: window.innerWidth,
                                    h: window.innerHeight
                                };
                                var g = e.map(function(e) {
                                    var t = {};
                                    t.id = e.bidId, t.tagid = e.params.placementId.toString(), t.secure = "https:" === window.location.protocol ? 1 : 0;
                                    var r = [];
                                    if (e.hasOwnProperty("mediaTypes")) {
                                        if (e.mediaTypes.hasOwnProperty(o.b) && (r = e.mediaTypes[o.b].sizes, n.logInfo("OZONE: setting banner size from the mediaTypes.banner element for bidId " + t.id + ": ", r)), e.mediaTypes.hasOwnProperty(o.d)) {
                                            t.video = e.mediaTypes[o.d];
                                            var i = A(t.video);
                                            n.logInfo("OZONE: setting video object from the mediaTypes.video element: " + t.id + ":", t.video, "wh=", i), i && "object" === u(i) ? (t.video.w = i.w, t.video.h = i.h, w(t.video) ? (n.logInfo("OZONE: setting obj.video.format to be an array of objects"), t.video.format = [i]) : (n.logInfo("OZONE: setting obj.video.format to be an object"), t.video.format = i)) : n.logInfo("OZONE: cannot set w, h & format values for video; the config is not right")
                                        }
                                        e.mediaTypes.hasOwnProperty(o.c) && (t.native = e.mediaTypes[o.c], n.logInfo("OZONE: setting native object from the mediaTypes.native element: " + t.id + ":", t.native))
                                    } else e.hasOwnProperty("sizes") ? (n.logInfo("OZONE: no mediaTypes detected - will use the sizes array in the config root"), r = e.sizes) : n.logInfo("OZONE: no mediaTypes detected, no sizes array in the config root either. Cannot set sizes for banner type");
                                    return 0 < r.length && (t.banner = {
                                        topframe: 1,
                                        w: r[0][0] || 0,
                                        h: r[0][1] || 0,
                                        format: r.map(function(e) {
                                            return {
                                                w: e[0],
                                                h: e[1]
                                            }
                                        })
                                    }), t.placementId = e.params.placementId.toString(), t.publisherId = e.params.publisherId.toString(), t.siteId = e.params.siteId.toString(), t.ext = {
                                        prebid: {
                                            storedrequest: {
                                                id: e.params.placementId.toString()
                                            }
                                        },
                                        ozone: {}
                                    }, t.ext.ozone.adUnitCode = e.adUnitCode, t.ext.ozone.transactionId = e.transactionId, t.ext.ozone.oz_pb_v = f, e.params.hasOwnProperty("customData") && (t.ext.ozone.customData = e.params.customData), e.params.hasOwnProperty("lotameData") && (t.ext.ozone.lotameData = e.params.lotameData), n.deepAccess(e, "crumbs.pubcid") && (t.ext.ozone.pubcid = e.crumbs.pubcid), t
                                });
                                if (s.site = {
                                        publisher: {
                                            id: i.publisherId
                                        },
                                        page: document.location.href
                                    }, s.test = parseInt(O()), r) {
                                    n.logInfo("OZONE: buildRequests starting to generate response for a single request"), s.id = t.auctionId, s.auctionId = t.auctionId, s.imp = g, s.source = {
                                        tid: t.auctionId
                                    };
                                    var b = {
                                        method: "POST",
                                        url: l,
                                        data: JSON.stringify(s),
                                        bidderRequest: t
                                    };
                                    return n.logInfo("OZONE: buildRequests ozoneRequest for single = ", s), n.logInfo("OZONE: buildRequests going to return for single: ", b), b
                                }
                                var m = g.map(function(e) {
                                    n.logInfo("OZONE: buildRequests starting to generate non-single response, working on imp : ", e);
                                    var r = d({}, s);
                                    return e.ext.ozone.pageAuctionId = t.auctionId, r.id = e.ext.ozone.transactionId, r.auctionId = e.ext.ozone.transactionId, r.imp = [e], r.source = {
                                        tid: e.ext.ozone.transactionId
                                    }, n.logInfo("OZONE: buildRequests ozoneRequestSingle (for non-single) = ", r), {
                                        method: "POST",
                                        url: l,
                                        data: JSON.stringify(r),
                                        bidderRequest: t
                                    }
                                });
                                return n.logInfo("OZONE: buildRequests going to return for non-single: ", m), m
                            },
                            interpretResponse: function(e, t) {
                                if (!(e = e.body || {}).hasOwnProperty("seatbid")) return [];
                                if ("object" !== u(e.seatbid)) return [];
                                var r = [];
                                e.seatbid = g(e.seatbid);
                                for (var i = 0; i < e.seatbid.length; i++)
                                    for (var a = e.seatbid[i], s = function(i) {
                                            var s, d = m(t.bidderRequest.bids[i]),
                                                u = d.defaultWidth,
                                                l = d.defaultHeight,
                                                p = S(a.bid[i], u, l);
                                            if (n.deepAccess(p, "ext.prebid.type") === o.d) {
                                                n.logInfo("OZONE: going to attach a renderer to:", i);
                                                var g = (s = p, {
                                                    url: "https://prebid.the-ozone-project.com/ozone-renderer.js",
                                                    callback: function() {
                                                        return function(e) {
                                                            try {
                                                                e.renderer.setRender(T)
                                                            } catch (e) {
                                                                n.logWarn("Prebid Error calling setRender on renderer", e)
                                                            }
                                                        }(s)
                                                    }
                                                });
                                                p.renderer = c.a.install(g)
                                            } else n.logInfo("OZONE: bid is not a video, will not attach a renderer: ", i);
                                            var b = p.bidId,
                                                I = {},
                                                E = y(b, e.seatbid);
                                            n.logInfo("OZONE: Going to iterate allBidsForThisBidId", E), Object.keys(E).forEach(function(e, t, r) {
                                                I["oz_" + e] = e, I["oz_" + e + "_pb"] = String(E[e].price), I["oz_" + e + "_crid"] = String(E[e].crid), I["oz_" + e + "_adv"] = String(E[e].adomain), I["oz_" + e + "_imp_id"] = String(E[e].impid), I["oz_" + e + "_adId"] = String(E[e].adId), I["oz_" + e + "_pb_r"] = h(E[e].price, E[e].ext.prebid.type), E[e].hasOwnProperty("dealid") && (I["oz_" + e + "_dealid"] = String(E[e].dealid))
                                            });
                                            var O = v(b, e.seatbid),
                                                A = O.seat,
                                                w = O.bid;
                                            I.oz_auc_id = String(t.bidderRequest.auctionId), I.oz_winner = String(A), I.oz_winner_auc_id = String(w.id), I.oz_winner_imp_id = String(w.impid), I.oz_response_id = String(e.id), I.oz_pb_v = f, p.adserverTargeting = I, r.push(p)
                                        }, d = 0; d < a.bid.length; d++) s(d);
                                return r
                            },
                            getUserSyncs: function(e, t) {
                                return t && 0 !== t.length ? e.iframeEnabled ? [{
                                    type: "iframe",
                                    url: "https://elb.the-ozone-project.com/static/load-cookie.html"
                                }] : void 0 : []
                            }
                        };

                    function g(e) {
                        for (var t = 0; t < e.length; t++)
                            for (var r = e[t], n = 0; n < r.bid.length; n++) r.bid[n].adId = r.bid[n].impid + "-" + t;
                        return e
                    }

                    function b(e) {
                        return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
                    }

                    function m(e) {
                        if (!e) return n.logInfo("OZONE: defaultSize received empty bid obj! going to return fixed default size"), {
                            defaultHeight: 250,
                            defaultWidth: 300
                        };
                        var t = e.sizes,
                            r = {};
                        return r.defaultWidth = b(t)[0], r.defaultHeight = b(t)[1], r
                    }

                    function v(e, t) {
                        for (var r = null, n = null, i = 0; i < t.length; i++)
                            for (var o = t[i].bid, a = t[i].seat, s = 0; s < o.length; s++)
                                if (o[s].impid === e && (null == r || r.price < o[s].price)) {
                                    r = o[s], n = a;
                                    break
                                }
                        return {
                            seat: n,
                            bid: r
                        }
                    }

                    function y(e, t) {
                        for (var r = {}, n = 0; n < t.length; n++)
                            for (var i = t[n].bid, o = t[n].seat, a = 0; a < i.length; a++) i[a].impid === e && (r[o] = i[a]);
                        return r
                    }

                    function h(e, t) {
                        var r = a.b.getConfig("mediaTypePriceGranularity.".concat(t)),
                            i = a.b.getConfig("customPriceBucket"),
                            o = a.b.getConfig("priceGranularity"),
                            c = E(t, r, o, i),
                            d = I(t, r, o);
                        n.logInfo("OZONE: getRoundedBid. price:", e, "mediaType:", t, "configkey:", d, "configObject:", c, "mediaTypeGranularity:", r, "strBuckets:", o);
                        var u = Object(s.a)(e, c, a.b.getConfig("currency.granularityMultiplier"));
                        n.logInfo("OZONE: priceStringsObj", u);
                        var l = {
                            medium: "med",
                            custom: "custom",
                            high: "high",
                            low: "low",
                            dense: "dense"
                        };
                        if (l.hasOwnProperty(d)) {
                            var f = l[d];
                            return n.logInfo("OZONE: looking for priceStringsKey:", f), u[f]
                        }
                        return u.auto
                    }

                    function I(e, t, r) {
                        return "string" == typeof t ? t : "object" === u(t) ? "custom" : "string" == typeof r ? r : "auto"
                    }

                    function E(e, t, r, n) {
                        return "object" === u(t) ? t : "custom" === r ? n : ""
                    }

                    function S(e, t, r) {
                        return e.cpm = e.price, e.bidId = e.impid, e.requestId = e.impid, e.width = e.w || t, e.height = e.h || r, e.ad = e.adm, e.netRevenue = !0, e.creativeId = e.crid, e.currency = "USD", e.ttl = 60, e
                    }

                    function O() {
                        for (var e = window.location.search.substring(1).split("&"), t = 0; t < e.length; t++) {
                            var r = e[t].split("=");
                            if ("pbjs_debug" === r[0]) return "true" === r[1] ? 1 : 0
                        }
                        return 0
                    }

                    function T(e) {
                        window.ozoneVideo.outstreamRender(e)
                    }

                    function A(e) {
                        var t = _(e);
                        return t ? t[0] && "object" === u(t[0]) && (n.logInfo("OZONE: getWidthAndHeightFromVideoObject found nested array inside playerSize.", t[0]), "number" != typeof(t = t[0])[0] && "string" != typeof t[0]) ? (n.logInfo("OZONE: getWidthAndHeightFromVideoObject found non-number/string type inside the INNER array in playerSize. This is totally wrong - cannot continue.", t[0]), null) : 2 !== t.length ? (n.logInfo("OZONE: getWidthAndHeightFromVideoObject found playerSize with length of " + t.length + ". This is totally wrong - cannot continue."), null) : {
                            w: t[0],
                            h: t[1]
                        } : null
                    }

                    function w(e) {
                        var t = _(e);
                        return t ? t.length < 1 ? null : t[0] && "object" === u(t[0]) : null
                    }

                    function _(e) {
                        if (n.logInfo("OZONE: getPlayerSizeFromObject received object", e), !e.hasOwnProperty("playerSize")) return n.logError("OZONE: getPlayerSizeFromObject FAILED: no playerSize in video object", e), null;
                        var t = e.playerSize;
                        return "object" !== u(t) ? (n.logError("OZONE: getPlayerSizeFromObject FAILED: playerSize is not an object/array", e), null) : t
                    }
                    Object(i.registerBidder)(p), n.logInfo("OZONE: ozoneBidAdapter ended")
                }
            }, [458]), pbjsChunk([19], {
                476: function(e, t, r) {
                    e.exports = r(477)
                },
                477: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.resetSyncedStatus = function() {
                        T = !1
                    }, t.PrebidServer = M;
                    var n = r(42),
                        i = r(24),
                        o = r(0),
                        a = r(5),
                        s = r(4),
                        c = (r.n(s), r(8)),
                        d = r(3),
                        u = r(2),
                        l = r(23),
                        f = r(1),
                        p = r(7),
                        g = r.n(p),
                        b = r(9),
                        m = r.n(b),
                        v = r(478);

                    function y(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function h() {
                        return (h = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function I(e) {
                        return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var E, S = d.b.getConfig,
                        O = s.S2S.SRC,
                        T = !1,
                        A = {
                            enabled: !1,
                            timeout: 1e3,
                            maxBids: 1,
                            adapter: "prebidServer",
                            adapterOptions: {},
                            syncUrlModifier: {}
                        };

                    function w(e) {
                        if (0 !== e.length) {
                            var t = e.pop();
                            t.no_cookie ? function(e, t, r, n) {
                                E.syncUrlModifier && "function" == typeof E.syncUrlModifier[r] ? _(e, E.syncUrlModifier[r](e, t, r), r, n) : _(e, t, r, n)
                            }(t.usersync.type, t.usersync.url, t.bidder, o.bind.call(w, null, e)) : w(e)
                        }
                    }

                    function _(e, t, r, n) {
                        t ? "image" === e || "redirect" === e ? (o.logMessage('Invoking image pixel user sync for bidder: "'.concat(r, '"')), o.triggerPixel(t, n)) : "iframe" == e ? (o.logMessage('Invoking iframe user sync for bidder: "'.concat(r, '"')), o.insertUserSyncIframe(t, n)) : (o.logError('User sync type "'.concat(e, '" not supported for bidder: "').concat(r, '"')), n()) : (o.logError('No sync url for bidder "'.concat(r, '": ').concat(t)), n())
                    }

                    function C(e) {
                        var t = function(e) {
                            var t = o.deepAccess(e, "bids.0.userId.digitrustid.data");
                            if (t) return t;
                            var r = d.b.getConfig("digiTrustId");
                            return r && r.success && r.identity || null
                        }(0 < arguments.length && void 0 !== e ? e : {});
                        return !t || t.privacy && t.privacy.optout ? null : {
                            id: t.id,
                            keyv: t.keyv
                        }
                    }

                    function j(e) {
                        e && ("object" === I(d.b.getConfig("app")) ? (e.app = d.b.getConfig("app"), e.app.publisher = {
                            id: E.accountId
                        }) : e.site = {
                            publisher: {
                                id: E.accountId
                            },
                            page: o.getTopWindowUrl()
                        }, "object" === I(d.b.getConfig("device")) && (e.device = d.b.getConfig("device")), e.device || (e.device = {}), e.device.w || (e.device.w = window.innerWidth), e.device.h || (e.device.h = window.innerHeight))
                    }
                    d.b.setDefaults({
                        s2sConfig: A
                    }), S("s2sConfig", function(e) {
                        return function(e) {
                            if (e.defaultVendor) {
                                var t = e.defaultVendor,
                                    r = Object.keys(e);
                                if (!v.a[t]) return o.logError("Incorrect or unavailable prebid server default vendor option: " + t), !1;
                                Object.keys(v.a[t]).forEach(function(n) {
                                    A[n] !== e[n] && m()(r, n) || (e[n] = v.a[t][n])
                                })
                            }
                            var n = Object.keys(e);
                            0 < ["accountId", "bidders", "endpoint"].filter(function(e) {
                                return !m()(n, e) && (o.logError(e + " missing in server to server config"), !0)
                            }).length || (E = e)
                        }(e.s2sConfig)
                    });
                    var R = {
                            buildRequest: function(e, t, r) {
                                r.forEach(function(e) {
                                    e.bids.forEach(function(e) {
                                        var t = c.default.bidderRegistry[e.bidder];
                                        t && t.getSpec().transformBidParams && (e.params = t.getSpec().transformBidParams(e.params, q()))
                                    })
                                }), r.forEach(function(e) {
                                    e.sizes = function(e) {
                                        var t = [];
                                        return o.parseSizesInput(e.sizes).forEach(function(e) {
                                            var r = e.split("x"),
                                                n = {
                                                    w: parseInt(r[0]),
                                                    h: parseInt(r[1])
                                                };
                                            t.push(n)
                                        }), t
                                    }(e);
                                    var t = o.deepAccess(e, "mediaTypes.video");
                                    t && (e.video = h({}, t), delete e.mediaTypes, e.media_types = [u.d])
                                });
                                var n = {
                                    account_id: E.accountId,
                                    tid: e.tid,
                                    max_bids: E.maxBids,
                                    timeout_millis: E.timeout,
                                    secure: E.secure,
                                    cache_markup: 1 === E.cacheMarkup || 2 === E.cacheMarkup ? E.cacheMarkup : 0,
                                    url: o.getTopWindowUrl(),
                                    prebid_version: "2.33.0",
                                    ad_units: r,
                                    is_debug: !!S("debug")
                                };
                                j(n);
                                var i = C(t && t[0]);
                                return i && (n.digiTrust = i), n
                            },
                            interpretResponse: function(e, t) {
                                var r = [];
                                return "OK" !== e.status && "no_cookie" !== e.status || (e.bidder_status && e.bidder_status.forEach(function(e) {
                                    e.error && o.logWarn("Prebid Server returned error: '".concat(e.error, "' for ").concat(e.bidder)), t.filter(function(t) {
                                        return t.bidderCode === e.bidder
                                    }).forEach(function(t) {
                                        return (t.bids || []).forEach(function(t) {
                                            return t.serverResponseTimeMs = e.response_time_ms
                                        })
                                    })
                                }), e.bids && e.bids.forEach(function(n) {
                                    var a = o.getBidRequest(n.bid_id, t),
                                        c = n.price,
                                        d = 0 !== c ? s.STATUS.GOOD : s.STATUS.NO_BID,
                                        l = Object(i.a)(d, a);
                                    l.source = O, l.creative_id = n.creative_id, l.bidderCode = n.bidder, l.cpm = c, n.cache_id && (l.cache_id = n.cache_id), n.cache_url && (l.cache_url = n.cache_url), n.media_type === u.d ? (l.mediaType = u.d, n.adm && (l.vastXml = n.adm), n.nurl && (l.vastUrl = n.nurl), n.cache_id && n.cache_url && (l.videoCacheKey = n.cache_id, l.vastUrl = n.cache_url)) : n.adm && n.nurl ? (l.ad = n.adm, l.ad += o.createTrackPixelHtml(decodeURIComponent(n.nurl))) : n.adm ? l.ad = n.adm : n.nurl && (l.adUrl = n.nurl), l.width = n.width, l.height = n.height, l.adserverTargeting = n.ad_server_targeting, n.deal_id && (l.dealId = n.deal_id), l.requestId = a.bidId || a.bid_Id, l.creativeId = n.creative_id, l.ttl = n.ttl ? n.ttl : 60, l.currency = n.currency ? n.currency : "USD", l.netRevenue = !n.netRevenue || n.netRevenue, e.burl && (l.burl = e.burl), r.push({
                                        adUnit: n.code,
                                        bid: l
                                    })
                                })), r
                            }
                        },
                        D = {
                            sponsoredBy: 1,
                            body: 2,
                            rating: 3,
                            likes: 4,
                            downloads: 5,
                            price: 6,
                            salePrice: 7,
                            phone: 8,
                            address: 9,
                            body2: 10,
                            cta: 12
                        },
                        N = Object.keys(D),
                        x = {
                            icon: 1,
                            image: 3
                        },
                        U = {
                            img: 1,
                            js: 2
                        };
                    [D, x, {
                        impression: 1,
                        "viewable-mrc50": 2,
                        "viewable-mrc100": 3,
                        "viewable-video50": 4
                    }, U].forEach(function(e) {
                        Object.keys(e).forEach(function(t) {
                            e[e[t]] = t
                        })
                    });
                    var k = {},
                        P = {},
                        B = {
                            buildRequest: function(e, t, r) {
                                var n = [],
                                    i = {};
                                if (r.forEach(function(e) {
                                        var t, r = Object(l.g)(o.deepAccess(e, "mediaTypes.native"));
                                        if (r) try {
                                            t = P[e.code] = Object.keys(r).reduce(function(e, t) {
                                                var n = r[t];

                                                function i(e) {
                                                    return h({
                                                        required: n.required ? 1 : 0
                                                    }, e ? o.cleanObj(e) : {})
                                                }
                                                switch (t) {
                                                    case "image":
                                                    case "icon":
                                                        var a = x[t],
                                                            s = o.cleanObj({
                                                                type: a,
                                                                w: o.deepAccess(n, "sizes.0"),
                                                                h: o.deepAccess(n, "sizes.1"),
                                                                wmin: o.deepAccess(n, "aspect_ratios.0.min_width")
                                                            });
                                                        if (!s.w && !s.wmin) throw "invalid img sizes (must provided sizes or aspect_ratios)";
                                                        Array.isArray(n.aspect_ratios) && (s.ext = {
                                                            aspectratios: n.aspect_ratios.map(function(e) {
                                                                return "".concat(e.ratio_width, ":").concat(e.ratio_height)
                                                            })
                                                        }), e.push(i({
                                                            img: s
                                                        }));
                                                        break;
                                                    case "title":
                                                        if (!n.len) throw "invalid title.len";
                                                        e.push(i({
                                                            title: {
                                                                len: n.len
                                                            }
                                                        }));
                                                        break;
                                                    default:
                                                        var c = D[t];
                                                        c && e.push(i({
                                                            data: {
                                                                type: c,
                                                                len: n.len
                                                            }
                                                        }))
                                                }
                                                return e
                                            }, [])
                                        } catch (t) {
                                            o.logError("error creating native request: " + String(t))
                                        }
                                        var a = o.deepAccess(e, "mediaTypes.video"),
                                            s = o.deepAccess(e, "mediaTypes.banner");
                                        e.bids.forEach(function(t) {
                                            k["".concat(e.code).concat(t.bidder)] = t.bid_id, c.default.aliasRegistry[t.bidder] && (i[t.bidder] = c.default.aliasRegistry[t.bidder])
                                        });
                                        var d = {};
                                        if (!(r || a || s)) {
                                            var u = e.sizes.map(function(e) {
                                                return {
                                                    w: e[0],
                                                    h: e[1]
                                                }
                                            });
                                            d.banner = {
                                                format: u
                                            }
                                        }
                                        if (s && s.sizes) {
                                            var f = o.parseSizesInput(s.sizes).map(function(e) {
                                                var t = function(e, t) {
                                                        return function(e) {
                                                            if (Array.isArray(e)) return e
                                                        }(e) || function(e, t) {
                                                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                                                var r = [],
                                                                    n = !0,
                                                                    i = !1,
                                                                    o = void 0;
                                                                try {
                                                                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), 2 !== r.length); n = !0);
                                                                } catch (e) {
                                                                    i = !0, o = e
                                                                } finally {
                                                                    try {
                                                                        n || null == s.return || s.return()
                                                                    } finally {
                                                                        if (i) throw o
                                                                    }
                                                                }
                                                                return r
                                                            }
                                                        }(e) || function() {
                                                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                                        }()
                                                    }(e.split("x")),
                                                    r = t[0],
                                                    n = t[1];
                                                return {
                                                    w: parseInt(r, 10),
                                                    h: parseInt(n, 10)
                                                }
                                            });
                                            d.banner = {
                                                format: f
                                            }
                                        }
                                        if (o.isEmpty(a) || ("outstream" !== a.context || e.renderer ? d.video = a : o.logError("Outstream bid without renderer cannot be sent to Prebid Server.")), t) try {
                                            d.native = {
                                                request: JSON.stringify({
                                                    context: 1,
                                                    plcmttype: 1,
                                                    eventtrackers: [{
                                                        event: 1,
                                                        methods: [1]
                                                    }],
                                                    assets: t
                                                }),
                                                ver: "1.2"
                                            }
                                        } catch (t) {
                                            o.logError("error creating native request: " + String(t))
                                        }
                                        var p = e.bids.reduce(function(e, t) {
                                                var r = c.default.bidderRegistry[t.bidder];
                                                return r && r.getSpec().transformBidParams && (t.params = r.getSpec().transformBidParams(t.params, q())), e[t.bidder] = E.adapterOptions && E.adapterOptions[t.bidder] ? h({}, t.params, E.adapterOptions[t.bidder]) : t.params, e
                                            }, {}),
                                            g = {
                                                id: e.code,
                                                ext: p,
                                                secure: E.secure
                                            };
                                        h(g, d), (g.banner || g.video || g.native) && n.push(g)
                                    }), n.length) {
                                    var a = {
                                        id: e.tid,
                                        source: {
                                            tid: e.tid
                                        },
                                        tmax: E.timeout,
                                        imp: n,
                                        test: S("debug") ? 1 : 0,
                                        ext: {
                                            prebid: {
                                                targeting: {
                                                    includewinners: !0,
                                                    includebidderkeys: !1
                                                }
                                            }
                                        }
                                    };
                                    E.extPrebid && "object" === I(E.extPrebid) && (a.ext.prebid = h(a.ext.prebid, E.extPrebid));
                                    var s = d.b.getConfig("currency.adServerCurrency");
                                    s && "string" == typeof s ? a.cur = [s] : Array.isArray(s) && s.length && (a.cur = [s[0]]), j(a);
                                    var u = C(t && t[0]);
                                    u && o.deepSetValue(a, "user.ext.digitrust", u);
                                    var f = o.deepAccess(t, "0.bids.0.schain");
                                    f && (a.source.ext = {
                                        schain: f
                                    }), o.isEmpty(i) || (a.ext.prebid.aliases = i);
                                    var p, g = o.deepAccess(t, "0.bids.0.userId");
                                    return g && "object" === I(g) && (g.tdid || g.pubcid) && (o.deepSetValue(a, "user.ext.eids", []), g.tdid && a.user.ext.eids.push({
                                        source: "adserver.org",
                                        uids: [{
                                            id: g.tdid,
                                            ext: {
                                                rtiPartner: "TDID"
                                            }
                                        }]
                                    }), g.pubcid && a.user.ext.eids.push({
                                        source: "pubcommon",
                                        uids: [{
                                            id: g.pubcid
                                        }]
                                    })), t && t[0].gdprConsent && ("boolean" == typeof t[0].gdprConsent.gdprApplies && (p = t[0].gdprConsent.gdprApplies ? 1 : 0), a.regs ? a.regs.ext ? a.regs.ext.gdpr = p : a.regs.ext = {
                                        gdpr: p
                                    } : a.regs = {
                                        ext: {
                                            gdpr: p
                                        }
                                    }, o.deepSetValue(a, "user.ext.consent", t[0].gdprConsent.consentString)), !0 === S("coppa") && o.deepSetValue(a, "regs.coppa", 1), a
                                }
                                o.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")
                            },
                            interpretResponse: function(e, t) {
                                var r = [];
                                return e.seatbid && e.seatbid.forEach(function(n) {
                                    (n.bid || []).forEach(function(a) {
                                        var c, d = "".concat(a.impid).concat(n.seat);
                                        k[d] && (c = o.getBidRequest(k[d], t));
                                        var l = a.price,
                                            f = 0 !== l ? s.STATUS.GOOD : s.STATUS.NO_BID,
                                            p = Object(i.a)(f, c || {
                                                bidder: n.seat,
                                                src: O
                                            });
                                        p.cpm = l;
                                        var g = o.deepAccess(e, ["ext", "responsetimemillis", n.seat].join("."));
                                        c && g && (c.serverResponseTimeMs = g);
                                        var b = o.deepAccess(a, "ext.prebid.targeting");
                                        if (b && "object" === I(b) && (p.adserverTargeting = b), o.deepAccess(a, "ext.prebid.type") === u.d) {
                                            p.mediaType = u.d;
                                            var m = c.sizes && c.sizes[0];
                                            p.playerHeight = m[0], p.playerWidth = m[1], a.ext.prebid.cache && "object" === I(a.ext.prebid.cache.vastXml) && a.ext.prebid.cache.vastXml.cacheId && a.ext.prebid.cache.vastXml.url ? (p.videoCacheKey = a.ext.prebid.cache.vastXml.cacheId, p.vastUrl = a.ext.prebid.cache.vastXml.url) : b && b.hb_uuid && b.hb_cache_host && b.hb_cache_path && (p.videoCacheKey = b.hb_uuid, p.vastUrl = "https://".concat(b.hb_cache_host).concat(b.hb_cache_path, "?uuid=").concat(b.hb_uuid)), a.adm && (p.vastXml = a.adm), !p.vastUrl && a.nurl && (p.vastUrl = a.nurl)
                                        } else if (o.deepAccess(a, "ext.prebid.type") === u.c) {
                                            var v, h;
                                            p.mediaType = u.c, h = "string" == typeof a.adm ? p.adm = JSON.parse(a.adm) : p.adm = a.adm;
                                            var E = (y(v = {}, U.img, h.imptrackers || []), y(v, U.js, h.jstracker ? [h.jstracker] : []), v);
                                            if (h.eventtrackers && h.eventtrackers.forEach(function(e) {
                                                    switch (e.method) {
                                                        case U.img:
                                                            E[U.img].push(e.url);
                                                            break;
                                                        case U.js:
                                                            E[U.js].push(e.url)
                                                    }
                                                }), o.isPlainObject(h) && Array.isArray(h.assets)) {
                                                var S = P[c.adUnitCode];
                                                p.native = o.cleanObj(h.assets.reduce(function(e, t) {
                                                    var r = S[t.id];
                                                    return o.isPlainObject(t.img) ? e[r.img.type ? x[r.img.type] : "image"] = o.pick(t.img, ["url", "w as width", "h as height"]) : o.isPlainObject(t.title) ? e.title = t.title.text : o.isPlainObject(t.data) && N.forEach(function(n) {
                                                        D[n] === r.data.type && (e[n] = t.data.value)
                                                    }), e
                                                }, o.cleanObj({
                                                    clickUrl: h.link,
                                                    clickTrackers: o.deepAccess(h, "link.clicktrackers"),
                                                    impressionTrackers: E[U.img],
                                                    javascriptTrackers: E[U.js]
                                                })))
                                            } else o.logError("prebid server native response contained no assets")
                                        } else a.adm && a.nurl ? (p.ad = a.adm, p.ad += o.createTrackPixelHtml(decodeURIComponent(a.nurl))) : a.adm ? p.ad = a.adm : a.nurl && (p.adUrl = a.nurl);
                                        p.width = a.w, p.height = a.h, a.dealid && (p.dealId = a.dealid), p.requestId = c.bidId || c.bid_Id, p.creative_id = a.crid, p.creativeId = a.crid, a.burl && (p.burl = a.burl), p.ttl = a.ttl ? a.ttl : 60, p.currency = a.currency ? a.currency : "USD", p.netRevenue = !a.netRevenue || a.netRevenue, r.push({
                                            adUnit: a.impid,
                                            bid: p
                                        })
                                    })
                                }), r
                            }
                        },
                        q = function() {
                            return ~(E && E.endpoint || "").indexOf("/openrtb2/")
                        },
                        z = function() {
                            return q() ? B : R
                        };

                    function M() {
                        var e = new n.a("prebidServer");
                        return e.callBids = function(e, t, r, n, i) {
                            var d = o.deepClone(e.ad_units).filter(function(e) {
                                    return e.sizes && e.sizes.length || e.mediaTypes && e.mediaTypes.native
                                }),
                                u = d.map(function(e) {
                                    return e.bids.map(function(e) {
                                        return e.bidder
                                    }).filter(o.uniques)
                                }).reduce(o.flatten).filter(o.uniques);
                            if (E && E.syncEndpoint) {
                                var l = Array.isArray(t) && 0 < t.length ? t[0].gdprConsent : void 0;
                                ! function(e, t) {
                                    if (!T) {
                                        T = !0;
                                        var r = {
                                                uuid: o.generateUUID(),
                                                bidders: e,
                                                account: E.accountId
                                            },
                                            n = E.userSyncLimit;
                                        o.isNumber(n) && 0 < n && (r.limit = n), t && (void 0 !== t.consentString && (r.gdpr = t.gdprApplies ? 1 : 0), !1 !== t.gdprApplies && (r.gdpr_consent = t.consentString));
                                        var i = JSON.stringify(r);
                                        Object(a.a)(E.syncEndpoint, function(e) {
                                            try {
                                                w((e = JSON.parse(e)).bidder_status)
                                            } catch (e) {
                                                o.logError(e)
                                            }
                                        }, i, {
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        })
                                    }
                                }(E.bidders, l)
                            }
                            var p = z().buildRequest(e, t, d),
                                b = p && JSON.stringify(p);
                            p && b && i(E.endpoint, {
                                success: function(e) {
                                    return function(e, t, r, n, i) {
                                        var a;
                                        try {
                                            a = JSON.parse(e), z().interpretResponse(a, r, t).forEach(function(e) {
                                                var t = e.adUnit,
                                                    i = e.bid;
                                                Object(f.isValid)(t, i, r) && n(t, i)
                                            }), r.forEach(function(e) {
                                                return g.a.emit(s.EVENTS.BIDDER_DONE, e)
                                            })
                                        } catch (e) {
                                            o.logError(e)
                                        }(!a || a.status && m()(a.status, "Error")) && o.logError("error parsing response: ", a.status), i(), t.forEach(function(e) {
                                            var t = c.default.getBidAdapter(e);
                                            t && t.registerSyncs && t.registerSyncs([])
                                        })
                                    }(e, u, t, r, n)
                                },
                                error: n
                            }, b, {
                                contentType: "text/plain",
                                withCredentials: !0
                            })
                        }, h(this, {
                            callBids: e.callBids,
                            setBidderCode: e.setBidderCode,
                            type: O
                        })
                    }
                    c.default.registerBidAdapter(new M, "prebidServer")
                },
                478: function(e, t, r) {
                    "use strict";
                    r.d(t, "a", function() {
                        return n
                    });
                    var n = {
                        appnexus: {
                            adapter: "prebidServer",
                            enabled: !0,
                            endpoint: "//prebid.adnxs.com/pbs/v1/openrtb2/auction",
                            syncEndpoint: "//prebid.adnxs.com/pbs/v1/cookie_sync",
                            timeout: 1e3
                        },
                        rubicon: {
                            adapter: "prebidServer",
                            enabled: !0,
                            endpoint: "//prebid-server.rubiconproject.com/openrtb2/auction",
                            syncEndpoint: "//prebid-server.rubiconproject.com/cookie_sync",
                            timeout: 500
                        }
                    }
                }
            }, [476]), pbjsChunk([114], {
                483: function(e, t, r) {
                    e.exports = r(484)
                },
                484: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.setStorageItem = b, t.getStorageItem = m, t.removeStorageItem = v, t.isPubcidEnabled = function() {
                        return g.enabled
                    }, t.getExpInterval = function() {
                        return g.interval
                    }, t.getPubcidConfig = function() {
                        return g
                    }, t.requestBidHook = I, t.setCookie = E, t.getCookie = S, t.setConfig = O, t.initPubcid = T;
                    var n = r(0),
                        i = r(3);

                    function o() {
                        return (o = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function a(e) {
                        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var s = "_pubcid",
                        c = "_pubcid_optout",
                        d = 525600,
                        u = "PublisherCommonId",
                        l = "_exp",
                        f = "cookie",
                        p = "html5",
                        g = {
                            enabled: !0,
                            interval: d,
                            typeEnabled: p,
                            readOnly: !1
                        };

                    function b(e, t, r) {
                        try {
                            if (void 0 !== r && null != r) {
                                var i = new Date(Date.now() + 60 * r * 1e3).toUTCString();
                                localStorage.setItem(e + l, i)
                            }
                            localStorage.setItem(e, t)
                        } catch (e) {
                            n.logMessage(e)
                        }
                    }

                    function m(e) {
                        var t = null;
                        try {
                            var r = localStorage.getItem(e + l);
                            r ? 0 < new Date(r).getTime() - Date.now() ? t = localStorage.getItem(e) : v(e) : t = localStorage.getItem(e)
                        } catch (e) {
                            n.logMessage(e)
                        }
                        return t
                    }

                    function v(e) {
                        try {
                            localStorage.removeItem(e + l), localStorage.removeItem(e)
                        } catch (e) {
                            n.logMessage(e)
                        }
                    }

                    function y(e) {
                        var t;
                        return g.typeEnabled === f ? t = S(e) : g.typeEnabled === p && (t = (t = m(e)) || S(e)), "undefined" === t || "null" === t ? null : t
                    }

                    function h(e, t, r) {
                        e && t && (g.typeEnabled === f ? E(e, t, r) : g.typeEnabled === p && b(e, t, r))
                    }

                    function I(e, t) {
                        var r = t.adUnits || pbjs.adUnits,
                            i = null;
                        return g.enabled && g.typeEnabled && ("object" === a(window[u]) ? (i = window[u].getId(), n.logMessage(u + ": pubcid = " + i)) : (i = y(s), g.readOnly || (i ? h(s, i, g.interval) : (i = n.generateUUID(), h(s, i, g.interval), i = y(s))), n.logMessage("pbjs: pubcid = " + i)), r && i && r.forEach(function(e) {
                            e.bids.forEach(function(e) {
                                o(e, {
                                    crumbs: {
                                        pubcid: i
                                    }
                                })
                            })
                        })), e.call(this, t)
                    }

                    function E(e, t, r) {
                        var n = new Date;
                        n.setTime(n.getTime() + 1e3 * r * 60), window.document.cookie = e + "=" + encodeURIComponent(t) + ";path=/;expires=" + n.toGMTString()
                    }

                    function S(e) {
                        if (e && window.document.cookie) {
                            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return t ? decodeURIComponent(t[2]) : null
                        }
                        return null
                    }

                    function O() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.enable,
                            r = void 0 === t || t,
                            i = e.expInterval,
                            o = void 0 === i ? d : i,
                            a = e.type,
                            s = void 0 === a ? "html5,cookie" : a,
                            c = e.readOnly,
                            u = void 0 !== c && c;
                        g.enabled = r, g.interval = parseInt(o, 10), isNaN(g.interval) && (g.interval = d), g.readOnly = u, g.typeEnabled = null;
                        for (var l = s.split(","), b = 0; b < l.length; ++b) {
                            var m = l[b].trim();
                            if (m === f) {
                                if (n.cookiesAreEnabled()) {
                                    g.typeEnabled = f;
                                    break
                                }
                            } else if (m === p && n.hasLocalStorage()) {
                                g.typeEnabled = p;
                                break
                            }
                        }
                    }

                    function T() {
                        i.b.getConfig("pubcid", function(e) {
                            return O(e.pubcid)
                        }), y(c) || pbjs.requestBids.before(I)
                    }
                    T()
                }
            }, [483]), pbjsChunk([113], {
                485: function(e, t, r) {
                    e.exports = r(486)
                },
                486: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return j
                    });
                    var n = r(0),
                        i = r(1),
                        o = r(2),
                        a = r(3);

                    function s(e) {
                        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var c = "PubMatic: ",
                        d = "USD",
                        u = "nFIn8aLzbd",
                        l = void 0,
                        f = {
                            kadpageurl: "",
                            gender: "",
                            yob: "",
                            lat: "",
                            lon: "",
                            wiid: "",
                            profId: "",
                            verId: ""
                        },
                        p = {
                            NUMBER: "number",
                            STRING: "string",
                            BOOLEAN: "boolean",
                            ARRAY: "array",
                            OBJECT: "object"
                        },
                        g = {
                            mimes: p.ARRAY,
                            minduration: p.NUMBER,
                            maxduration: p.NUMBER,
                            startdelay: p.NUMBER,
                            playbackmethod: p.ARRAY,
                            api: p.ARRAY,
                            protocols: p.ARRAY,
                            w: p.NUMBER,
                            h: p.NUMBER,
                            battr: p.ARRAY,
                            linearity: p.NUMBER,
                            placement: p.NUMBER,
                            minbitrate: p.NUMBER,
                            maxbitrate: p.NUMBER
                        },
                        b = {
                            TITLE: {
                                ID: 1,
                                KEY: "title",
                                TYPE: 0
                            },
                            IMAGE: {
                                ID: 2,
                                KEY: "image",
                                TYPE: 0
                            },
                            ICON: {
                                ID: 3,
                                KEY: "icon",
                                TYPE: 0
                            },
                            SPONSOREDBY: {
                                ID: 4,
                                KEY: "sponsoredBy",
                                TYPE: 1
                            },
                            BODY: {
                                ID: 5,
                                KEY: "body",
                                TYPE: 2
                            },
                            CLICKURL: {
                                ID: 6,
                                KEY: "clickUrl",
                                TYPE: 0
                            },
                            VIDEO: {
                                ID: 7,
                                KEY: "video",
                                TYPE: 0
                            },
                            EXT: {
                                ID: 8,
                                KEY: "ext",
                                TYPE: 0
                            },
                            DATA: {
                                ID: 9,
                                KEY: "data",
                                TYPE: 0
                            },
                            LOGO: {
                                ID: 10,
                                KEY: "logo",
                                TYPE: 0
                            },
                            SPONSORED: {
                                ID: 11,
                                KEY: "sponsored",
                                TYPE: 1
                            },
                            DESC: {
                                ID: 12,
                                KEY: "data",
                                TYPE: 2
                            },
                            RATING: {
                                ID: 13,
                                KEY: "rating",
                                TYPE: 3
                            },
                            LIKES: {
                                ID: 14,
                                KEY: "likes",
                                TYPE: 4
                            },
                            DOWNLOADS: {
                                ID: 15,
                                KEY: "downloads",
                                TYPE: 5
                            },
                            PRICE: {
                                ID: 16,
                                KEY: "price",
                                TYPE: 6
                            },
                            SALEPRICE: {
                                ID: 17,
                                KEY: "saleprice",
                                TYPE: 7
                            },
                            PHONE: {
                                ID: 18,
                                KEY: "phone",
                                TYPE: 8
                            },
                            ADDRESS: {
                                ID: 19,
                                KEY: "address",
                                TYPE: 9
                            },
                            DESC2: {
                                ID: 20,
                                KEY: "desc2",
                                TYPE: 10
                            },
                            DISPLAYURL: {
                                ID: 21,
                                KEY: "displayurl",
                                TYPE: 11
                            },
                            CTA: {
                                ID: 22,
                                KEY: "cta",
                                TYPE: 12
                            }
                        },
                        m = {
                            ICON: 1,
                            LOGO: 2,
                            IMAGE: 3
                        },
                        v = [{
                            id: b.SPONSOREDBY.ID,
                            required: !0,
                            data: {
                                type: 1
                            }
                        }, {
                            id: b.TITLE.ID,
                            required: !0
                        }, {
                            id: b.IMAGE.ID,
                            required: !0
                        }],
                        y = {
                            1: "PMP",
                            5: "PREF",
                            6: "PMPG"
                        },
                        h = 0,
                        I = !1,
                        E = {},
                        S = {};

                    function O(e, t) {
                        if (!n.isStr(t)) return t && n.logWarn(c + "Ignoring param key: " + e + ", expects string-value, found " + s(t)), l;
                        switch (e) {
                            case "pmzoneid":
                                return t.split(",").slice(0, 50).map(function(e) {
                                    return e.trim()
                                }).join();
                            case "kadfloor":
                            case "lat":
                            case "lon":
                                return parseFloat(t) || l;
                            case "yob":
                                return parseInt(t) || l;
                            default:
                                return t
                        }
                    }

                    function T(e, t, r) {
                        var i, o = "Ignoring param key: " + e + ", expects " + r + ", found " + s(t);
                        switch (r) {
                            case p.BOOLEAN:
                                i = n.isBoolean;
                                break;
                            case p.NUMBER:
                                i = n.isNumber;
                                break;
                            case p.STRING:
                                i = n.isStr;
                                break;
                            case p.ARRAY:
                                i = n.isArray
                        }
                        return i(t) ? t : (n.logWarn(c + o), l)
                    }

                    function A(e) {
                        var t, r, i, o = {
                            assets: []
                        };
                        for (var a in e) {
                            if (e.hasOwnProperty(a)) {
                                var s = {};
                                if (!(o.assets && 0 < o.assets.length && o.assets.hasOwnProperty(a))) switch (a) {
                                    case b.TITLE.KEY:
                                        e[a].len || e[a].length ? s = {
                                            id: b.TITLE.ID,
                                            required: e[a].required ? 1 : 0,
                                            title: {
                                                len: e[a].len || e[a].length,
                                                ext: e[a].ext
                                            }
                                        } : n.logWarn(c + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                                        break;
                                    case b.IMAGE.KEY:
                                        e[a].sizes && 0 < e[a].sizes.length ? s = {
                                            id: b.IMAGE.ID,
                                            required: e[a].required ? 1 : 0,
                                            img: {
                                                type: m.IMAGE,
                                                w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : l),
                                                h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : l),
                                                wmin: e[a].wmin || e[a].minimumWidth || (e[a].minsizes ? e[a].minsizes[0] : l),
                                                hmin: e[a].hmin || e[a].minimumHeight || (e[a].minsizes ? e[a].minsizes[1] : l),
                                                mimes: e[a].mimes,
                                                ext: e[a].ext
                                            }
                                        } : n.logWarn(c + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                        break;
                                    case b.ICON.KEY:
                                        e[a].sizes && 0 < e[a].sizes.length ? s = {
                                            id: b.ICON.ID,
                                            required: e[a].required ? 1 : 0,
                                            img: {
                                                type: m.ICON,
                                                w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : l),
                                                h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : l)
                                            }
                                        } : n.logWarn(c + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                        break;
                                    case b.VIDEO.KEY:
                                        s = {
                                            id: b.VIDEO.ID,
                                            required: e[a].required ? 1 : 0,
                                            video: {
                                                minduration: e[a].minduration,
                                                maxduration: e[a].maxduration,
                                                protocols: e[a].protocols,
                                                mimes: e[a].mimes,
                                                ext: e[a].ext
                                            }
                                        };
                                        break;
                                    case b.EXT.KEY:
                                        s = {
                                            id: b.EXT.ID,
                                            required: e[a].required ? 1 : 0
                                        };
                                        break;
                                    case b.LOGO.KEY:
                                        s = {
                                            id: b.LOGO.ID,
                                            required: e[a].required ? 1 : 0,
                                            img: {
                                                type: m.LOGO,
                                                w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : l),
                                                h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : l)
                                            }
                                        };
                                        break;
                                    case b.SPONSOREDBY.KEY:
                                    case b.BODY.KEY:
                                    case b.RATING.KEY:
                                    case b.LIKES.KEY:
                                    case b.DOWNLOADS.KEY:
                                    case b.PRICE.KEY:
                                    case b.SALEPRICE.KEY:
                                    case b.PHONE.KEY:
                                    case b.ADDRESS.KEY:
                                    case b.DESC2.KEY:
                                    case b.DISPLAYURL.KEY:
                                    case b.CTA.KEY:
                                        r = e, i = (t = S[a]).KEY, s = {
                                            id: t.ID,
                                            required: r[i].required ? 1 : 0,
                                            data: {
                                                type: t.TYPE,
                                                len: r[i].len,
                                                ext: r[i].ext
                                            }
                                        }
                                }
                            }
                            s && s.id && (o.assets[o.assets.length] = s)
                        }
                        var d = v.length,
                            u = 0;
                        return v.forEach(function(e) {
                            for (var t = o.assets.length, r = 0; r < t; r++)
                                if (e.id == o.assets[r].id) {
                                    u++;
                                    break
                                }
                        }), I = d != u, o
                    }

                    function w(e) {
                        var t, r = e.mediaTypes.banner.sizes,
                            i = [];
                        if (r !== l && n.isArray(r)) {
                            if (t = {}, e.params.width || e.params.height) t.w = e.params.width, t.h = e.params.height;
                            else {
                                if (0 === r.length) return t = l, n.logWarn(c + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), t;
                                t.w = parseInt(r[0][0]), t.h = parseInt(r[0][1]), r = r.splice(1, r.length - 1)
                            }
                            0 < r.length && (i = [], r.forEach(function(e) {
                                1 < e.length && i.push({
                                    w: e[0],
                                    h: e[1]
                                })
                            }), 0 < i.length && (t.format = i)), t.pos = 0, t.topframe = n.inIframe() ? 0 : 1
                        } else n.logWarn(c + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), t = l;
                        return t
                    }

                    function _(e) {
                        var t, r = e.params.video;
                        if (r !== l) {
                            for (var i in t = {}, g) r.hasOwnProperty(i) && (t[i] = T(i, r[i], g[i]));
                            n.isArray(e.mediaTypes.video.playerSize[0]) ? (t.w = parseInt(e.mediaTypes.video.playerSize[0][0]), t.h = parseInt(e.mediaTypes.video.playerSize[0][1])) : n.isNumber(e.mediaTypes.video.playerSize[0]) && (t.w = parseInt(e.mediaTypes.video.playerSize[0]), t.h = parseInt(e.mediaTypes.video.playerSize[1])), e.params.video.hasOwnProperty("skippable") && (t.ext = {
                                video_skippable: e.params.video.skippable ? 1 : 0
                            })
                        } else t = l, n.logWarn(c + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
                        return t
                    }

                    function C(e, t) {
                        var r = [];
                        (function(e) {
                            var t = function(e) {
                                var t, r = (t = window.DigiTrust && (a.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                    member: e
                                }))) && t.success && t.identity || null;
                                return !r || r.privacy && r.privacy.optout ? null : r
                            }(u);
                            null !== t && e.push({
                                source: "digitru.st",
                                uids: [{
                                    id: t.id || "",
                                    atype: 1,
                                    ext: {
                                        keyv: parseInt(t.keyv) || 0
                                    }
                                }]
                            })
                        })(r),
                        function(e, t) {
                            var r = null,
                                i = a.b.getConfig("adsrvrOrgId");
                            n.isStr(n.deepAccess(t, "0.userId.tdid")) ? r = t[0].userId.tdid : i && n.isStr(i.TDID) && (r = i.TDID), null !== r && e.push({
                                source: "adserver.org",
                                uids: [{
                                    id: r,
                                    atype: 1,
                                    ext: {
                                        rtiPartner: "TDID"
                                    }
                                }]
                            })
                        }(r, t), 0 < r.length && (e.user.eids = r)
                    }
                    n._each(b, function(e) {
                        E[e.ID] = e.KEY
                    }), n._each(b, function(e) {
                        S[e.KEY] = e
                    });
                    var j = {
                        code: "pubmatic",
                        supportedMediaTypes: [o.b, o.d, o.c],
                        isBidRequestValid: function(e) {
                            return !(!e || !e.params || (n.isStr(e.params.publisherId) ? !(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && n.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) && (n.logWarn(c + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 1) : (n.logWarn(c + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 1)))
                        },
                        buildRequests: function(e, t) {
                            var r;
                            t && t.refererInfo && (r = t.refererInfo);
                            var i, a = function(e) {
                                    var t = {};
                                    return t.pageURL = n.getTopWindowUrl(), e && e.referer ? t.refURL = e.referer : t.refURL = "", t
                                }(r),
                                u = function(e) {
                                    return {
                                        id: "" + (new Date).getTime(),
                                        at: 1,
                                        cur: [d],
                                        imp: [],
                                        site: {
                                            page: e.pageURL,
                                            ref: e.refURL,
                                            publisher: {}
                                        },
                                        device: {
                                            ua: navigator.userAgent,
                                            js: 1,
                                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                            h: screen.height,
                                            w: screen.width,
                                            language: navigator.language
                                        },
                                        user: {},
                                        ext: {}
                                    }
                                }(a),
                                p = "",
                                g = [],
                                b = [];
                            if (e.forEach(function(e) {
                                    if ((i = n.deepClone(e)).params.adSlot = i.params.adSlot || "", function(e) {
                                            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = function(e) {
                                                return n.isStr(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
                                            }(e.params.adSlot);
                                            var t = e.params.adSlot,
                                                r = t.split(":");
                                            if (t = r[0], 2 == r.length && (e.params.adUnitIndex = r[1]), r = t.split("@"), e.params.adUnit = r[0], 1 < r.length) {
                                                if (2 != (r = r[1].split("x")).length) return void n.logWarn(c + "AdSlot Error: adSlot not in required format");
                                                e.params.width = parseInt(r[0]), e.params.height = parseInt(r[1])
                                            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                                                for (var i = 0, a = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && a.push(e.mediaTypes.banner.sizes[i]);
                                                e.mediaTypes.banner.sizes = a, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
                                            }
                                        }(i), i.params.hasOwnProperty("video"));
                                    else if (!(i.hasOwnProperty("mediaTypes") && i.mediaTypes.hasOwnProperty(o.c) || 0 !== i.params.width || 0 !== i.params.height)) return void n.logWarn(c + "Skipping the non-standard adslot: ", i.params.adSlot, JSON.stringify(i));
                                    a.pubId = a.pubId || i.params.publisherId, (a = function(e, t) {
                                        var r, i, o;
                                        for (r in t.kadpageurl || (t.kadpageurl = t.pageURL), f) f.hasOwnProperty(r) && (i = e[r]) && ("object" === s(o = f[r]) && (i = o.f(i, t)), n.isStr(i) ? t[r] = i : n.logWarn(c + "Ignoring param : " + r + " with value : " + f[r] + ", expects string-value, found " + s(i)));
                                        return t
                                    }(i.params, a)).transactionId = i.transactionId, "" === p ? p = i.params.currency || l : i.params.hasOwnProperty("currency") && p !== i.params.currency && n.logWarn(c + "Currency specifier ignored. Only one currency permitted."), i.params.currency = p, i.params.hasOwnProperty("dctr") && n.isStr(i.params.dctr) && g.push(i.params.dctr), i.params.hasOwnProperty("bcat") && n.isArray(i.params.bcat) && (b = b.concat(i.params.bcat));
                                    var t = function(e) {
                                        var t, r, i = {},
                                            a = {},
                                            s = e.hasOwnProperty("sizes") ? e.sizes : [],
                                            u = "",
                                            f = [];
                                        if (i = {
                                                id: e.bidId,
                                                tagid: e.params.adUnit || void 0,
                                                bidfloor: O("kadfloor", e.params.kadfloor),
                                                secure: 1,
                                                ext: {
                                                    pmZoneId: O("pmzoneid", e.params.pmzoneid)
                                                },
                                                bidfloorcur: e.params.currency ? O("currency", e.params.currency) : d
                                            }, e.hasOwnProperty("mediaTypes"))
                                            for (u in e.mediaTypes) switch (u) {
                                                case o.b:
                                                    (t = w(e)) !== l && (i.banner = t);
                                                    break;
                                                case o.c:
                                                    a.request = JSON.stringify(A(e.nativeParams)), I ? n.logWarn(c + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = a;
                                                    break;
                                                case o.d:
                                                    (r = _(e)) !== l && (i.video = r)
                                            } else t = {
                                                pos: 0,
                                                w: e.params.width,
                                                h: e.params.height,
                                                topframe: n.inIframe() ? 0 : 1
                                            }, n.isArray(s) && 1 < s.length && ((s = s.splice(1, s.length - 1)).forEach(function(e) {
                                                f.push({
                                                    w: e[0],
                                                    h: e[1]
                                                })
                                            }), t.format = f), i.banner = t;
                                        return i.hasOwnProperty(o.b) || i.hasOwnProperty(o.c) || i.hasOwnProperty(o.d) ? i : l
                                    }(i);
                                    t && u.imp.push(t)
                                }), 0 != u.imp.length) return u.site.publisher.id = a.pubId.trim(), h = a.pubId.trim(), u.ext.wrapper = {}, u.ext.wrapper.profile = parseInt(a.profId) || l, u.ext.wrapper.version = parseInt(a.verId) || l, u.ext.wrapper.wiid = a.wiid || l, u.ext.wrapper.wv = "prebid_prebid_2.33.0", u.ext.wrapper.transactionId = a.transactionId, u.ext.wrapper.wp = "pbjs", u.user.gender = a.gender ? a.gender.trim() : l, u.user.geo = {}, u.user.geo.lat = O("lat", a.lat), u.user.geo.lon = O("lon", a.lon), u.user.yob = O("yob", a.yob), u.device.geo = u.user.geo, u.site.page = a.kadpageurl.trim() || u.site.page.trim(), u.site.domain = function(e) {
                                    var t = document.createElement("a");
                                    return t.href = e, t.hostname
                                }(u.site.page), e[0].schain && (u.source = {
                                    ext: {
                                        schain: e[0].schain
                                    }
                                }), t && t.gdprConsent && (u.user.ext = {
                                    consent: t.gdprConsent.consentString
                                }, u.regs = {
                                    ext: {
                                        gdpr: t.gdprConsent.gdprApplies ? 1 : 0
                                    }
                                }),
                                function(e, t, r) {
                                    var i, o = "";
                                    if (0 < t.length)
                                        if (r[0].params.hasOwnProperty("dctr")) {
                                            if (o = r[0].params.dctr, n.isStr(o) && 0 < o.length) {
                                                var a = o.split("|");
                                                o = "", a.forEach(function(e) {
                                                    o += 0 < e.length ? e.trim() + "|" : ""
                                                }), i = o.length, "|" === o.substring(i, i - 1) && (o = o.substring(0, i - 1)), e.site.ext = {
                                                    key_val: o.trim()
                                                }
                                            } else n.logWarn(c + "Ignoring param : dctr with value : " + o + ", expects string-value, found empty or non-string value");
                                            1 < t.length && n.logWarn(c + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                                        } else n.logWarn(c + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")
                                }(u, g, e), C(u, e),
                                function(e, t) {
                                    0 < (t = t.filter(function(e) {
                                        return "string" == typeof e || (n.logWarn(c + "bcat: Each category should be a string, ignoring category: " + e), !1)
                                    }).map(function(e) {
                                        return e.trim()
                                    }).filter(function(e, t, r) {
                                        if (3 < e.length) return r.indexOf(e) === t;
                                        n.logWarn(c + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                                    })).length && (n.logWarn(c + "bcat: Selected: ", t), e.bcat = t)
                                }(u, b), {
                                    method: "POST",
                                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                                    data: JSON.stringify(u)
                                }
                        },
                        interpretResponse: function(e, t) {
                            var r = [],
                                i = d,
                                a = JSON.parse(t.data),
                                s = a.site && a.site.ref ? a.site.ref : "";
                            try {
                                e.body && e.body.seatbid && n.isArray(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach(function(e) {
                                    e.bid && n.isArray(e.bid) && e.bid.forEach(function(e) {
                                        var t = {
                                            requestId: e.impid,
                                            cpm: (parseFloat(e.price) || 0).toFixed(2),
                                            width: e.w,
                                            height: e.h,
                                            creativeId: e.crid || e.id,
                                            dealId: e.dealid,
                                            currency: i,
                                            netRevenue: !1,
                                            ttl: 300,
                                            referrer: s,
                                            ad: e.adm
                                        };
                                        a.imp && 0 < a.imp.length && a.imp.forEach(function(r) {
                                            if (e.impid === r.id) switch (function(e, t) {
                                                var r = "",
                                                    i = new RegExp(/VAST\s+version/);
                                                if (0 <= e.indexOf('span class="PubAPIAd"')) t.mediaType = o.b;
                                                else if (i.test(e)) t.mediaType = o.d;
                                                else try {
                                                    (r = JSON.parse(e.replace(/\\/g, ""))) && r.native && (t.mediaType = o.c)
                                                } catch (t) {
                                                    n.logWarn(c + "Error: Cannot parse native reponse for ad response: " + e)
                                                }
                                            }(e.adm, t), t.mediaType) {
                                                case o.b:
                                                    break;
                                                case o.d:
                                                    t.width = e.hasOwnProperty("w") ? e.w : r.video.w, t.height = e.hasOwnProperty("h") ? e.h : r.video.h, t.vastXml = e.adm;
                                                    break;
                                                case o.c:
                                                    ! function(e, t) {
                                                        if (t.native = {}, e.hasOwnProperty("adm")) {
                                                            var r = "";
                                                            try {
                                                                r = JSON.parse(e.adm.replace(/\\/g, ""))
                                                            } catch (e) {
                                                                return n.logWarn(c + "Error: Cannot parse native reponse for ad response: " + t.adm)
                                                            }
                                                            if (r && r.native && r.native.assets && 0 < r.native.assets.length) {
                                                                t.mediaType = o.c;
                                                                for (var i = 0, a = r.native.assets.length; i < a; i++) switch (r.native.assets[i].id) {
                                                                    case b.TITLE.ID:
                                                                        t.native.title = r.native.assets[i].title && r.native.assets[i].title.text;
                                                                        break;
                                                                    case b.IMAGE.ID:
                                                                        t.native.image = {
                                                                            url: r.native.assets[i].img && r.native.assets[i].img.url,
                                                                            height: r.native.assets[i].img && r.native.assets[i].img.h,
                                                                            width: r.native.assets[i].img && r.native.assets[i].img.w
                                                                        };
                                                                        break;
                                                                    case b.ICON.ID:
                                                                        t.native.icon = {
                                                                            url: r.native.assets[i].img && r.native.assets[i].img.url,
                                                                            height: r.native.assets[i].img && r.native.assets[i].img.h,
                                                                            width: r.native.assets[i].img && r.native.assets[i].img.w
                                                                        };
                                                                        break;
                                                                    case b.SPONSOREDBY.ID:
                                                                    case b.BODY.ID:
                                                                    case b.LIKES.ID:
                                                                    case b.DOWNLOADS.ID:
                                                                    case b.PRICE:
                                                                    case b.SALEPRICE.ID:
                                                                    case b.PHONE.ID:
                                                                    case b.ADDRESS.ID:
                                                                    case b.DESC2.ID:
                                                                    case b.CTA.ID:
                                                                    case b.RATING.ID:
                                                                    case b.DISPLAYURL.ID:
                                                                        t.native[E[r.native.assets[i].id]] = r.native.assets[i].data && r.native.assets[i].data.value
                                                                }
                                                                t.native.clickUrl = r.native.link && r.native.link.url, t.native.clickTrackers = r.native.link && r.native.link.clicktrackers || [], t.native.impressionTrackers = r.native.imptrackers || [], t.native.jstracker = r.native.jstracker || [], t.width || (t.width = 0), t.height || (t.height = 0)
                                                            }
                                                        }
                                                    }(e, t)
                                            }
                                        }), e.ext && e.ext.deal_channel && (t.dealChannel = y[e.ext.deal_channel] || null), t.meta = {}, e.ext && e.ext.dspid && (t.meta.networkId = e.ext.dspid), e.ext && e.ext.advid && (t.meta.buyerId = e.ext.advid), e.adomain && 0 < e.adomain.length && (t.meta.clickUrl = e.adomain[0]), r.push(t)
                                    })
                                }))
                            } catch (e) {
                                n.logError(e)
                            }
                            return r
                        },
                        getUserSyncs: function(e, t, r) {
                            var i = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + h;
                            if (r && (i += "&gdpr=" + (r.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(r.consentString || "")), e.iframeEnabled) return [{
                                type: "iframe",
                                url: i
                            }];
                            n.logWarn(c + "Please enable iframe based user sync.")
                        },
                        transformBidParams: function(e, t) {
                            return n.convertTypes({
                                publisherId: "string",
                                adSlot: "string"
                            }, e)
                        }
                    };
                    Object(i.registerBidder)(j)
                }
            }, [485]), pbjsChunk([82], {
                569: function(e, t, r) {
                    e.exports = r(570)
                },
                570: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return g
                    }), r.d(t, "_isInbounds", function() {
                        return y
                    }), t._getPlatform = h;
                    var n = r(1),
                        i = r(0),
                        o = r(2),
                        a = r(3),
                        s = r(11),
                        c = r(26);

                    function d(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                var r = [],
                                    n = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        n || null == s.return || s.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return r
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }

                    function u() {
                        return (u = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function l(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    var f = "sonobi",
                        p = Object(i.generateUUID)(),
                        g = {
                            code: f,
                            supportedMediaTypes: [o.b, o.d],
                            isBidRequestValid: function(e) {
                                return !(!e.params || !e.params.ad_unit && !e.params.placement_id || !e.params.sizes && !e.sizes)
                            },
                            buildRequests: function(e, t) {
                                var r = {};
                                e.map(function(e) {
                                    var t = function(e) {
                                        return e.params.ad_unit ? e.params.ad_unit : e.params.placement_id
                                    }(e);
                                    return /^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t) ? (t = "/" === t.charAt(0) ? t : "/" + t, l({}, "".concat(t, "|").concat(e.bidId), "".concat(b(e)).concat(m(e)))) : /^[0-9a-fA-F]{20}$/.test(t) && 20 === t.length ? l({}, e.bidId, "".concat(t, "|").concat(b(e)).concat(m(e))) : void Object(i.logError)("The ad unit code or Sonobi Placement id for slot ".concat(e.bidId, " is invalid"))
                                }).forEach(function(e) {
                                    u(r, e)
                                });
                                var n = {
                                    key_maker: JSON.stringify(r),
                                    ref: t.refererInfo.referer,
                                    s: Object(i.generateUUID)(),
                                    pv: p,
                                    vp: h(),
                                    lib_name: "prebid",
                                    lib_v: "2.33.0",
                                    us: 0
                                };
                                a.b.getConfig("userSync") && a.b.getConfig("userSync").syncsPerBidder && (n.us = a.b.getConfig("userSync").syncsPerBidder), c.a.canBidderRegisterSync("iframe", f) ? n.ius = 1 : n.ius = 0, Object(i.deepAccess)(e[0], "params.hfa") ? n.hfa = Object(i.deepAccess)(e[0], "params.hfa") : Object(i.deepAccess)(e[0], "userId.pubcid") ? n.hfa = "PRE-".concat(e[0].userId.pubcid) : Object(i.deepAccess)(e[0], "crumbs.pubcid") && (n.hfa = "PRE-".concat(e[0].crumbs.pubcid)), Object(i.deepAccess)(e[0], "userId.tdid") && (n.tdid = e[0].userId.tdid), e[0].params.referrer && (n.ref = e[0].params.referrer), e[0].params.pageViewId && (n.pv = e[0].params.pageViewId), e[0].params.appNexusTargeting && (n.gmgt = e[0].params.appNexusTargeting), e[0].params.render && (n.render = e[0].params.render), t && t.gdprConsent && (n.gdpr = t.gdprConsent.gdprApplies ? "true" : "false", t.gdprConsent.consentString && (n.consent_string = t.gdprConsent.consentString));
                                var o = function(e) {
                                    var t = function() {
                                        var e = window.DigiTrust && (a.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                            member: "fhnS5drwmH"
                                        }));
                                        return e && e.success && e.identity || null
                                    }();
                                    return !t || t.privacy && t.privacy.optout ? null : t
                                }();
                                return o && (n.digid = o.id, n.digkeyv = o.keyv), e[0].schain && (n.schain = JSON.stringify(e[0].schain)), Object(i.deepAccess)(e[0], "userId") && 0 < Object.keys(e[0].userId).length && (n.userid = JSON.stringify(e[0].userId)), Object(i.isEmpty)(r) ? null : {
                                    method: "GET",
                                    url: "https://apex.go.sonobi.com/trinity.json",
                                    withCredentials: !0,
                                    data: n,
                                    bidderRequests: e
                                }
                            },
                            interpretResponse: function(e, t) {
                                var r = e.body,
                                    n = [],
                                    o = t.data.ref;
                                return 0 === Object.keys(r.slots).length || Object.keys(r.slots).forEach(function(e) {
                                    var a = r.slots[e],
                                        c = function(e) {
                                            return e.split("|").slice(-1)[0]
                                        }(e),
                                        u = function(e, t) {
                                            for (var r = 0; r < e.length; r++)
                                                if (e[r].bidId === t) return e[r]
                                        }(t.bidderRequests, c),
                                        l = null;
                                    "video" === a.sbi_ct && (l = "video", "outstream" === Object(i.deepAccess)(u, "mediaTypes.video.context") && (l = "outstream"));
                                    var f = v(l, o);
                                    if (a.sbi_aid && a.sbi_mouse && a.sbi_size) {
                                        var p = d(a.sbi_size.split("x"), 2),
                                            g = p[0],
                                            b = void 0 === g ? 1 : g,
                                            m = p[1],
                                            y = void 0 === m ? 1 : m,
                                            h = {
                                                requestId: c,
                                                cpm: Number(a.sbi_mouse),
                                                width: Number(b),
                                                height: Number(y),
                                                ad: f(r.sbi_dc, a.sbi_aid),
                                                ttl: 500,
                                                creativeId: a.sbi_crid || a.sbi_aid,
                                                aid: a.sbi_aid,
                                                netRevenue: !0,
                                                currency: "USD"
                                            };
                                        if (a.sbi_dozer && (h.dealId = a.sbi_dozer), "video" === l) h.mediaType = "video", h.vastUrl = f(r.sbi_dc, a.sbi_aid), delete h.ad, delete h.width, delete h.height;
                                        else if ("outstream" === l && u) {
                                            h.mediaType = "video", h.vastUrl = f(r.sbi_dc, a.sbi_aid), h.renderer = function(e, t) {
                                                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                    n = s.a.install({
                                                        id: t.aid,
                                                        url: "https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",
                                                        config: r,
                                                        loaded: !1,
                                                        adUnitCode: e
                                                    });
                                                try {
                                                    n.setRender(I)
                                                } catch (e) {
                                                    Object(i.logWarn)("Prebid Error calling setRender on renderer", e)
                                                }
                                                return n.setEventHandlers({
                                                    impression: function() {
                                                        return Object(i.logMessage)("Sonobi outstream video impression event")
                                                    },
                                                    loaded: function() {
                                                        return Object(i.logMessage)("Sonobi outstream video loaded event")
                                                    },
                                                    ended: function() {
                                                        Object(i.logMessage)("Sonobi outstream renderer video event")
                                                    }
                                                }), n
                                            }(u.adUnitCode, h, Object(i.deepAccess)(u, "renderer.options"));
                                            var E = Object(i.deepAccess)(u, "params.sizes");
                                            Array.isArray(E) && Array.isArray(E[0]) && (E = E[0]), E && (h.width = E[0], h.height = E[1])
                                        }
                                        n.push(h)
                                    }
                                }), n
                            },
                            getUserSyncs: function(e, t) {
                                var r = [];
                                try {
                                    e.pixelEnabled && t[0].body.sbi_px.forEach(function(e) {
                                        r.push({
                                            type: e.type,
                                            url: e.url
                                        })
                                    })
                                } catch (e) {}
                                return r
                            }
                        };

                    function b(e) {
                        return e.params.sizes ? Object(i.parseSizesInput)(e.params.sizes).join(",") : Object(i.parseSizesInput)(e.sizes).join(",")
                    }

                    function m(e) {
                        return e.params.floor ? "|f=".concat(e.params.floor) : ""
                    }
                    var v = function(e, t) {
                            return function(r, n) {
                                return "video" === e || "outstream" === e ? function(e, t, r) {
                                    return "https://".concat(e, "apex.go.sonobi.com/vast.xml?vid=").concat(t, "&ref=").concat(encodeURIComponent(r))
                                }(r, n, t) : '<script type="text/javascript" src="' + "https://".concat(r, "apex.go.sonobi.com/sbi.js?aid=").concat(n, "&as=null&ref=").concat(encodeURIComponent(t)) + '"><\/script>'
                            }
                        },
                        y = function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : window;
                            return function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                    r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
                                return t.innerWidth >= e && t.innerWidth < r
                            }
                        };

                    function h() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window,
                            t = y(e);
                        return t(0, 768) ? "mobile" : t(768, 992) ? "tablet" : "desktop"
                    }

                    function I(e) {
                        e.renderer.push(function() {
                            var t = d(e.getSize().split("x"), 2),
                                r = t[0],
                                n = t[1],
                                i = new window.SbiOutstreamRenderer;
                            i.init({
                                vastUrl: e.vastUrl,
                                height: n,
                                width: r
                            }), i.setRootElement(e.adUnitCode)
                        })
                    }
                    Object(n.registerBidder)(g)
                }
            }, [569]), pbjsChunk([66], {
                607: function(e, t, r) {
                    e.exports = r(608)
                },
                608: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "tripleliftAdapterSpec", function() {
                        return c
                    });
                    var n = r(2),
                        i = r(1),
                        o = r(0),
                        a = !0,
                        s = null,
                        c = {
                            code: "triplelift",
                            supportedMediaTypes: [n.b],
                            isBidRequestValid: function(e) {
                                return void 0 !== e.params.inventoryCode
                            },
                            buildRequests: function(e, t) {
                                var r = "https://tlx.3lift.com/header/auction?",
                                    n = function(e, t) {
                                        var r = {};
                                        r.imp = e.map(function(e, t) {
                                            return {
                                                id: t,
                                                tagid: e.params.inventoryCode,
                                                floor: e.params.floor,
                                                banner: {
                                                    format: function(e) {
                                                        return e.filter(d).map(function(e) {
                                                            return {
                                                                w: e[0],
                                                                h: e[1]
                                                            }
                                                        })
                                                    }(e.sizes)
                                                }
                                            }
                                        });
                                        var n = function(e) {
                                            var t = [];
                                            return e.userId && e.userId.tdid && t.push({
                                                source: "adserver.org",
                                                uids: [{
                                                    id: e.userId.tdid,
                                                    ext: {
                                                        rtiPartner: "TDID"
                                                    }
                                                }]
                                            }), t
                                        }(t);
                                        return 0 < n.length && (r.user = {
                                            ext: {
                                                eids: n
                                            }
                                        }), r
                                    }(e, t);
                                if (r = o.tryAppendQueryString(r, "lib", "prebid"), r = o.tryAppendQueryString(r, "v", "2.33.0"), t && t.refererInfo) {
                                    var i = t.refererInfo.referer;
                                    r = o.tryAppendQueryString(r, "referrer", i)
                                }
                                return t && t.timeout && (r = o.tryAppendQueryString(r, "tmax", t.timeout)), t && t.gdprConsent && (void 0 !== t.gdprConsent.gdprApplies && (a = t.gdprConsent.gdprApplies, r = o.tryAppendQueryString(r, "gdpr", a.toString())), void 0 !== t.gdprConsent.consentString && (s = t.gdprConsent.consentString, r = o.tryAppendQueryString(r, "cmp_cs", s))), r.lastIndexOf("&") === r.length - 1 && (r = r.substring(0, r.length - 1)), o.logMessage("tlCall request built: " + r), {
                                    method: "POST",
                                    url: r,
                                    data: n,
                                    bidderRequest: t
                                }
                            },
                            interpretResponse: function(e, t) {
                                var r = t.bidderRequest;
                                return (e.body.bids || []).map(function(e) {
                                    return function(e, t) {
                                        var r = {},
                                            n = t.width || 1,
                                            i = t.height || 1,
                                            o = t.deal_id || "",
                                            a = t.crid || "";
                                        return 0 != t.cpm && t.ad && (r = {
                                            requestId: e.bids[t.imp_id].bidId,
                                            cpm: t.cpm,
                                            width: n,
                                            height: i,
                                            netRevenue: !0,
                                            ad: t.ad,
                                            creativeId: a,
                                            dealId: o,
                                            currency: "USD",
                                            ttl: 33
                                        }), r
                                    }(r, e)
                                })
                            },
                            getUserSyncs: function(e) {
                                var t = "//ib.3lift.com/sync?";
                                if (null !== s && (t = o.tryAppendQueryString(t, "gdpr", a), t = o.tryAppendQueryString(t, "cmp_cs", s)), e.iframeEnabled) return [{
                                    type: "iframe",
                                    url: t
                                }]
                            }
                        };

                    function d(e) {
                        return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
                    }
                    Object(i.registerBidder)(c)
                }
            }, [607]), pbjsChunk([65], {
                609: function(e, t, r) {
                    e.exports = r(610)
                },
                610: function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "spec", function() {
                        return s
                    });
                    var n = r(0),
                        i = r(1),
                        o = r(11),
                        a = r(2),
                        s = {
                            code: "trustx",
                            supportedMediaTypes: [a.b, a.d],
                            isBidRequestValid: function(e) {
                                return !!e.params.uid
                            },
                            buildRequests: function(e, t) {
                                var r, i = [],
                                    o = {},
                                    a = {},
                                    s = {},
                                    c = "net";
                                (e || []).forEach(function(e) {
                                    "gross" === e.params.priceType && (c = "gross"), r = e.bidderRequestId;
                                    var t = e.params.uid,
                                        d = e.adUnitCode;
                                    i.push(t);
                                    var u = n.parseSizesInput(e.sizes);
                                    a[t] || (a[t] = {});
                                    var l = a[t];
                                    l[d] ? l[d].bids.push(e) : l[d] = {
                                        adUnitCode: d,
                                        bids: [e],
                                        parents: []
                                    };
                                    var f = l[d];
                                    u.forEach(function(e) {
                                        s[e] = !0, o[t] || (o[t] = {}), o[t][e] ? o[t][e].push(f) : o[t][e] = [f], f.parents.push({
                                            parent: o[t],
                                            key: e,
                                            uid: t
                                        })
                                    })
                                });
                                var d = {
                                    pt: c,
                                    auids: i.join(","),
                                    sizes: n.getKeys(s).join(","),
                                    r: r,
                                    wrapperType: "Prebid_js",
                                    wrapperVersion: "2.33.0"
                                };
                                return t && (t.refererInfo && t.refererInfo.referer && (d.u = t.refererInfo.referer), t.timeout && (d.wtimeout = t.timeout), t.gdprConsent && (t.gdprConsent.consentString && (d.gdpr_consent = t.gdprConsent.consentString), d.gdpr_applies = "boolean" == typeof t.gdprConsent.gdprApplies ? Number(t.gdprConsent.gdprApplies) : 1)), {
                                    method: "GET",
                                    url: "//sofia.trustx.org/hb",
                                    data: n.parseQueryStringParameters(d).replace(/\&$/, ""),
                                    bidsMap: o
                                }
                            },
                            interpretResponse: function(e, t, r) {
                                var i = 2 < arguments.length && void 0 !== r ? r : o.a;
                                e = e && e.body;
                                var d, u = [],
                                    l = t.bidsMap,
                                    f = t.data.pt;
                                return e ? e.seatbid && !e.seatbid.length && (d = "Response has empty seatbid array") : d = "Response is empty", !d && e.seatbid && e.seatbid.forEach(function(e) {
                                    ! function(e, t, r, i, o) {
                                        if (e) {
                                            var d;
                                            if (e.auid || (d = "Bid from response has no auid parameter - " + JSON.stringify(e)), e.adm) {
                                                var u = t[e.auid];
                                                if (u) {
                                                    var l = "".concat(e.w, "x").concat(e.h);
                                                    if (u[l]) {
                                                        var f = u[l][0],
                                                            p = f.bids.shift(),
                                                            g = {
                                                                requestId: p.bidId,
                                                                bidderCode: s.code,
                                                                cpm: e.price,
                                                                width: e.w,
                                                                height: e.h,
                                                                creativeId: e.auid,
                                                                currency: "USD",
                                                                netRevenue: "gross" !== r,
                                                                ttl: 360,
                                                                dealId: e.dealid
                                                            };
                                                        "video" === e.content_type ? (g.vastXml = e.adm, g.mediaType = a.d, g.adResponse = {
                                                            content: g.vastXml
                                                        }, p.renderer || p.mediaTypes && p.mediaTypes.video && "outstream" !== p.mediaTypes.video.context || (g.renderer = function(e, t, r) {
                                                            var i = o.install({
                                                                id: t.id,
                                                                url: t.url,
                                                                loaded: !1
                                                            });
                                                            try {
                                                                i.setRender(c)
                                                            } catch (e) {
                                                                n.logWarn("Prebid Error calling setRender on renderer", e)
                                                            }
                                                            return i
                                                        }(0, {
                                                            id: p.bidId,
                                                            url: "//acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"
                                                        }))) : (g.ad = e.adm, g.mediaType = a.b), i.push(g), f.bids.length || f.parents.forEach(function(e) {
                                                            var r = e.parent,
                                                                i = e.key,
                                                                o = e.uid,
                                                                a = r[i].indexOf(f); - 1 < a && r[i].splice(a, 1), r[i].length || (delete r[i], n.getKeys(r).length || delete t[o])
                                                        })
                                                    }
                                                } else d = "Can't find in requested bids the bid with auid - " + e.auid
                                            } else d = "Bid from response has no adm parameter - " + JSON.stringify(e);
                                            d && n.logError(d)
                                        }
                                    }(function(e) {
                                        return e ? e.bid ? e.bid[0] || n.logError("Array of bid objects is empty") : n.logError("Seatbid from response has no array of bid objects - " + JSON.stringify(e)) : n.logError("Seatbid array from response has empty item"), e && e.bid && e.bid[0]
                                    }(e), l, f, u, i)
                                }), d && n.logError(d), u
                            },
                            getUserSyncs: function(e) {
                                if (e.pixelEnabled) return [{
                                    type: "image",
                                    url: "//sofia.trustx.org/push_sync"
                                }]
                            }
                        };

                    function c(e) {
                        e.renderer.push(function() {
                            window.ANOutstreamVideo.renderAd({
                                targetId: e.adUnitCode,
                                adResponse: e.adResponse
                            })
                        })
                    }
                    Object(i.registerBidder)(s)
                }
            }, [609]), pbjs.processQueue()
        }
    }
]);
//# sourceMappingURL=graun.vendors~Prebid.js.js.map