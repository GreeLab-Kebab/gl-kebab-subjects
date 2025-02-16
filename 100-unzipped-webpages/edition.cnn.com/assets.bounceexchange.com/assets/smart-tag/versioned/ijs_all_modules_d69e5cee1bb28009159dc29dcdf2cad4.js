window.bouncex && bouncex.loaded || function() {
    ! function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var o in e) t.d(i, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return i
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 12)
    }([function(module, exports, __webpack_require__) {
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function incrementPageView() {
            bouncex.cookie.vpv++, setBounceCookie()
        }

        function jQueryIsAvailable() {
            return "undefined" != typeof jQuery && void 0 !== jQuery.fn
        }

        function init_protocol_and_domain() {
            var e = bouncex.website.force_https ? "https:" : window.location.protocol;
            bouncex.sau = "https://" + bouncex.website.bau, bouncex.seu = -1 === bouncex.website.beu.indexOf("127.0.0.1") ? "https://" + bouncex.website.beu : "http://" + bouncex.website.beu, bouncex.au = e + "//" + bouncex.website.bau, bouncex.eu = e + "//" + bouncex.website.beu
        }

        function init_url_and_referrer() {
            bouncex.referrer = bouncex.utils.url.formatReferrer(document.referrer), bouncex.calling_url = encodeURIComponent(window.location.href), bouncex.cookie_domain = !1, ("bind_to_domain" == bouncex.website.ct || "multi_cookie" == bouncex.website.ct || "fp_local_storage" == bouncex.website.ct) && 0 < bouncex.calling_url.indexOf(bouncex.website.domain.toLowerCase()) && (bouncex.cookie_domain = bouncex.website.domain)
        }

        function init_dash() {
            (bouncex.eventLog = [], sessionStorage) && (sessionStorage.getItem("bxDashUrl") && baddjs(window.location.protocol + "//dash-staging.bounceexchange.com/client.js"))
        }

        function init_testmode_before_cookie() {
            bouncex.testmode = {
                bxdev: determineTestModeFromUrl()
            }
        }

        function determineTestModeFromUrl() {
            if (-1 === bouncex.calling_url.indexOf("bxdev")) return !1;
            var e = bouncex.utils.getParam("bxdev").toLowerCase();
            if ("off" === e) return !1;
            var t = ["cvars", "events", "page_types", "campaign_js", "spa", "coupons", "log", "log:error", "log:warn", "log:debug"];
            if ("" === e || "all" === e) return t.reduce(function(e, t) {
                return e[t] = !0, e
            }, {});
            var n = e.split(",").reduce(function(e, n) {
                return -1 < t.indexOf(n) && (e[n] = !0), e
            }, {});
            return 0 !== Object.keys(n).length && n
        }

        function init_testmode_after_cookie() {
            bouncex.testmode.bxtest = bouncex.cookie.hcs_bxtest || -1 !== bouncex.calling_url.indexOf("bxtest"), -1 === bouncex.calling_url.indexOf("bxdev") ? bouncex.testmode.bxdev = bouncex.cookie.bxdev || !1 : (bouncex.testmode.bxdev ? bouncex.cookie.bxdev = bouncex.testmode.bxdev : delete bouncex.cookie.bxdev, setBounceCookie())
        }

        function sanitizeMetadata(e, t, n) {
            var i = {};
            for (k in n = n || [], t)
                if (t.hasOwnProperty(k)) {
                    var o = k.trim().toLowerCase(); - 1 === o.indexOf(":") && -1 === n.indexOf(o) && (o = e + ":" + o);
                    var a = t[k];
                    "string" == typeof a && (a = a.trim()), i[o] = a
                }
            return i
        }

        function pushItemEvent(e, t) {
            var n = sanitizeMetadata(e, t);
            if (1 == bouncex.website.ete) {
                if (!bouncex.et.item.validate(n)) return !1;
                if (bouncex.et.item.requireImageLoad && n["item:imageurl"]) {
                    var i = new Image;
                    i.onload = function() {
                        event_stream_report(e, n)
                    }, i.src = n["item:imageurl"]
                } else event_stream_report(e, n)
            } else event_stream_report(e, n)
        }

        function pushRequestemailEvent(e, t) {
            if (!bouncex.carbTrap) {
                var n = sanitizeMetadata(e, t, ["email", "campaignid", "parentcampaignid"]);
                return !!(n.campaignid && n.email && bouncex.utils.validate.email(n.email)) && (n["user:email"] = n.email, void event_stream_report(e, n))
            }
        }

        function pushRequestpushEvent(e, t) {
            var n = sanitizeMetadata(e, t, ["campaignid", "parentcampaignid"]);
            return !!n.campaignid && void event_stream_report(e, n)
        }

        function pushRequestsendEvent(e, t) {
            var n = sanitizeMetadata(e, t, ["campaignid", "parentcampaignid", "fcmtoken", "channel", "campaign_data", "source"]);
            return !!n.campaignid && void event_stream_report(e, n)
        }

        function pushUserEvent(e, t) {
            return !(!t.email && !t.emailHash) && (!(t.email && !bouncex.utils.validate.email(t.email)) && (t["user:gcr"] = bouncex && bouncex.cookie ? bouncex.cookie.gcr : 99, t.agent = "js", t.eq = 1, event_stream_report(e, sanitizeMetadata(e, t, ["agent", "eq", "campaignid"])), bouncex.cookie.uid = 1, void setBounceCookie()))
        }

        function processPushedData(e, t) {
            t = t || {};
            var n = e.trim().toLowerCase();
            if ("conversion" == n) report_conversion_sync(t, "pushdata");
            else if ("bx-load-hide" == n) bouncex.usd = t;
            else if ("item" === n) pushItemEvent(n, t);
            else if ("view item" === n && bouncex.website.osre) {
                var i = t["item:id"],
                    o = sanitizeMetadata(n, t);
                i && (bouncex.osr.viewItemId = i, Object.keys(bouncex.campaigns || {}).forEach(function(e) {
                    void 0 === bouncex.campaigns[e].osr_params_json && bouncex.campaigns[e].isr_params_json && (bouncex.campaigns[e].osr_params_json = bouncex.campaigns[e].isr_params_json), bouncex.campaigns[e].osr_params_json && bouncex.campaigns[e].osr_params_json.length && bouncex.osr.init(e, i)
                })), event_stream_report(n, o)
            } else if ("requestemail" == e) pushRequestemailEvent(n, t);
            else if ("requestpush" == e) pushRequestpushEvent(n, t);
            else if ("requestsend" == e) pushRequestsendEvent(n, t);
            else if ("user" == e) pushUserEvent(n, t);
            else {
                event_stream_report(n, o = sanitizeMetadata(n, t))
            }
        }

        function initPushedData() {
            for (var e = bouncex.pushedData.length, t = 0; t < e; t++) processPushedData(bouncex.pushedData[t][0], bouncex.pushedData[t][1]);
            bouncex.pushedData = []
        }

        function can_init_post_cookie() {
            return !bouncex.gdpr_opt_out
        }

        function can_init() {
            if (document.visibilityState && "prerender" === document.visibilityState) {
                var e = tryCatch(function() {
                    "prerender" !== document.visibilityState && (removeEvent(document, "visibilitychange", e), bcx_init())
                });
                return addEvent(document, "visibilitychange", e), bouncex.prerendered = !0, !1
            }
            if (bouncex.baddjs) return !1;
            if (!JSON.parse) return !1;
            if (!window.postMessage) return !1;
            if (!bouncex.website.ei && window != window.top) return !1;
            if (!areCookiesEnabled()) return !1;
            if (bouncex.browser.prerenderio) return !1;
            if (bouncex.browser.msie && 11 > bouncex.browser.msie) return !1;
            if (bouncex.website.burls.length)
                for (var t in bouncex.website.burls)
                    if (bouncex.website.burls.hasOwnProperty(t)) {
                        var n = bouncex.website.burls[t];
                        if (-1 != n.prop.indexOf("contains")) {
                            var i = window.location.href.indexOf(n.val);
                            if ("contains" == n.prop && -1 != i || "not_contains" == n.prop && -1 == i) return !1
                        } else if (-1 != n.prop.indexOf("regex_match")) {
                            var o = new RegExp(n.val, "gi").test(window.location.href);
                            if ("regex_match" == n.prop && o || "not_regex_match" == n.prop && !o) return !1
                        }
                    }
            return !("fp_local_storage" === bouncex.website.ct && !fpLocalStorageAvailable())
        }

        function init_visit_cookie() {
            if (!bouncex.gdpr_opt_out) {
                var e = getBounceVisitCookie();
                e && (bouncex.visit_cookie = bouncex.parseJSON(e)), bouncex.visit_cookie ? !bouncex.visit_cookie.ueh && (bouncex.visit_cookie.ueh = getParam("ueh") || void 0, bouncex.visit_cookie.ueh && setBounceVisitCookie()) : (bouncex.visit_cookie = {}, bouncex.visit_cookie.lp = bouncex.calling_url.substring(0, 500).replace(/\+/g, "%2B").replace(/\%[A-F0-9]?[^A-F0-9]/, ""), bouncex.visit_cookie.r = bouncex.referrer, bouncex.visit_cookie.ueh = getParam("ueh") || void 0, setBounceVisitCookie())
            }
        }

        function init_cookie() {
            if (!bouncex.gdpr_opt_out && (bouncex.cookie = getBounceCookie(), bouncex.cookie.vid || (bouncex.cookie = "fp_local_storage" == bouncex.website.ct ? getBounceCookieSingle() : getBounceCookieFPLocalStorage(), bouncex.cookie.vid && setBounceCookie()), "fp_local_storage" == bouncex.website.ct)) {
                var e = tryCatch(function(e) {
                    e.key == bouncex.website.cookie_name && e.newValue && (bouncex.cookie = bouncex.getBounceCookie())
                });
                addEvent(window, "storage", e, !1)
            }
        }

        function init_cookie_functions() {
            bouncex.local_storage_enabled ? (window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieLocalStorage, window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieLocalStorage, init_cookie_localstorage()) : "multi_cookie" == bouncex.website.ct ? (window.MultiCookie = MultiCookie, window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieMulti, window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieMulti) : "fp_local_storage" == bouncex.website.ct ? (window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieFPLocalStorage, window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieFPLocalStorage) : (window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieSingle, window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieSingle), window.setBounceVisitCookie = setBounceVisitCookie, window.getBounceVisitCookie = getBounceVisitCookie, window.clearBounceCookie = clearBounceCookie, bouncex.stringify_cookie = stringify_cookie, bouncex.lz = bouncex.lz || function() {
                var e = Math.pow,
                    t = _StringfromCharCode,
                    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                    i = {},
                    o = {
                        compressToURI: function(e) {
                            return null == e ? "" : o._compress(e, 6, function(e) {
                                return n.charAt(e)
                            })
                        },
                        decompressFromURI: function(e) {
                            if (null == e) return "";
                            if ("" == e) return null;
                            try {
                                return e = e.replace(/ /g, "+"), o._decompress(e.length, 32, function(t) {
                                    return function(e, t) {
                                        if (!i[e]) {
                                            i[e] = {};
                                            for (var n = 0; n < e.length; n++) i[e][e.charAt(n)] = n
                                        }
                                        return i[e][t]
                                    }(n, e.charAt(t))
                                })
                            } catch (e) {
                                return bouncex.err(e, {
                                    source: "decompressFromURI"
                                }), ""
                            }
                        },
                        compress: function(e) {
                            return o._compress(e, 16, function(e) {
                                return t(e)
                            })
                        },
                        _compress: function(t, n, i) {
                            if (null == t) return "";
                            var o, a, r, s = {},
                                c = {},
                                u = "",
                                b = "",
                                l = "",
                                d = 2,
                                p = 3,
                                x = 2,
                                g = [],
                                m = 0,
                                f = 0;
                            for (r = 0; r < t.length; r += 1)
                                if (u = t.charAt(r), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = p++, c[u] = !0), b = l + u, Object.prototype.hasOwnProperty.call(s, b)) l = b;
                                else {
                                    if (Object.prototype.hasOwnProperty.call(c, l)) {
                                        if (256 > l.charCodeAt(0)) {
                                            for (o = 0; o < x; o++) m <<= 1, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++;
                                            for (a = l.charCodeAt(0), o = 0; 8 > o; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1
                                        } else {
                                            for (a = 1, o = 0; o < x; o++) m = m << 1 | a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a = 0;
                                            for (a = l.charCodeAt(0), o = 0; 16 > o; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1
                                        }
                                        0 == --d && (d = e(2, x), x++), delete c[l]
                                    } else
                                        for (a = s[l], o = 0; o < x; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1;
                                    0 == --d && (d = e(2, x), x++), s[b] = p++, l = u + ""
                                }
                            if ("" != l) {
                                if (Object.prototype.hasOwnProperty.call(c, l)) {
                                    if (256 > l.charCodeAt(0)) {
                                        for (o = 0; o < x; o++) m <<= 1, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++;
                                        for (a = l.charCodeAt(0), o = 0; 8 > o; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1
                                    } else {
                                        for (a = 1, o = 0; o < x; o++) m = m << 1 | a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a = 0;
                                        for (a = l.charCodeAt(0), o = 0; 16 > o; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1
                                    }
                                    0 == --d && (d = e(2, x), x++), delete c[l]
                                } else
                                    for (a = s[l], o = 0; o < x; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1;
                                0 == --d && (d = e(2, x), x++)
                            }
                            for (a = 2, o = 0; o < x; o++) m = m << 1 | 1 & a, f == n - 1 ? (f = 0, g.push(i(m)), m = 0) : f++, a >>= 1;
                            for (;;) {
                                if (m <<= 1, f == n - 1) {
                                    g.push(i(m));
                                    break
                                }
                                f++
                            }
                            return g.join("")
                        },
                        decompress: function(e) {
                            return null == e ? "" : "" == e ? null : o._decompress(e.length, 32768, function(t) {
                                return e.charCodeAt(t)
                            })
                        },
                        _decompress: function(n, i, o) {
                            var a, r, s, c, u, b, l, d = [],
                                p = 4,
                                x = 4,
                                g = 3,
                                m = "",
                                f = [],
                                h = {
                                    val: o(0),
                                    position: i,
                                    index: 1
                                };
                            for (a = 0; 3 > a; a += 1) d[a] = a;
                            for (s = 0, u = 4, b = 1; b != u;) c = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = i, h.val = o(h.index++)), s |= (0 < c ? 1 : 0) * b, b <<= 1;
                            switch (s) {
                                case 0:
                                    for (s = 0, u = 256, b = 1; b != u;) c = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = i, h.val = o(h.index++)), s |= (0 < c ? 1 : 0) * b, b <<= 1;
                                    l = t(s);
                                    break;
                                case 1:
                                    for (s = 0, u = 65536, b = 1; b != u;) c = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = i, h.val = o(h.index++)), s |= (0 < c ? 1 : 0) * b, b <<= 1;
                                    l = t(s);
                                    break;
                                case 2:
                                    return ""
                            }
                            for (d[3] = l, r = l, f.push(l);;) {
                                if (h.index > n) return "";
                                for (s = 0, u = e(2, g), b = 1; b != u;) c = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = i, h.val = o(h.index++)), s |= (0 < c ? 1 : 0) * b, b <<= 1;
                                switch (l = s) {
                                    case 0:
                                        for (s = 0, u = 256, b = 1; b != u;) c = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = i, h.val = o(h.index++)), s |= (0 < c ? 1 : 0) * b, b <<= 1;
                                        d[x++] = t(s), l = x - 1, p--;
                                        break;
                                    case 1:
                                        for (s = 0, u = 65536, b = 1; b != u;) c = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = i, h.val = o(h.index++)), s |= (0 < c ? 1 : 0) * b, b <<= 1;
                                        d[x++] = t(s), l = x - 1, p--;
                                        break;
                                    case 2:
                                        return f.join("")
                                }
                                if (0 == p && (p = e(2, g), g++), d[l]) m = d[l];
                                else {
                                    if (l !== x) return null;
                                    m = r + r.charAt(0)
                                }
                                f.push(m), d[x++] = r + m.charAt(0), r = m, 0 == --p && (p = e(2, g), g++)
                            }
                        }
                    };
                return o
            }()
        }

        function setLocalStorageCookie(e) {
            var t = bouncex.parseJSON(decodeURIComponent(e));
            t && t[bouncex.website.id] ? (bouncex.cookies = t, bouncex.cookie = t[bouncex.website.id]) : t && t.vpv ? (bouncex.cookie = t, bouncex.cookies[bouncex.website.id] = bouncex.cookie) : (t[bouncex.website.id] = {}, bouncex.cookies = t)
        }

        function localStorageFrameSuccess() {
            var e = tryCatch(function(e) {
                if (e.origin == "https://" + bouncex.website.biu && "string" == typeof e.data) {
                    var t = e.data;
                    if (-1 < t.indexOf("gdpr_opt_out") && (bouncex.gdpr_opt_out = !0), "third_party_cookies_disabled" == t) localStorageFail();
                    else if (0 > t.indexOf("bcx_message=true")) {
                        var n = e.data;
                        bouncex.local_storage_initialized ? setLocalStorageCookie(n) : (bouncex.local_storage_initialized = !0, bouncex.cookie = {}, bouncex.cookies = {}, n ? setLocalStorageCookie(n) : (bouncex.cookie = "multi_cookie" == bouncex.website.ct ? getBounceCookieMulti() : getBounceCookieSingle(), clearBounceCookie(!0)), InitSequence.preInit1.cookieReady())
                    }
                }
            });
            addEvent(window, "message", e)
        }

        function addLocalStorageFrame() {
            try {
                document.body.appendChild(bouncex.local_storage_frame), localStorageFrameSuccess()
            } catch (e) {
                setTimeout2(localStorageFail, 0)
            }
        }

        function localStorageFail() {
            bouncex.local_storage_enabled = !1, init_cookie_functions(), bouncex.local_storage_initialized || (bouncex.local_storage_initialized = !0, InitSequence.preInit1.cookieReady())
        }

        function init_cookie_localstorage() {
            if (!bouncex.gdpr_opt_out) {
                var e = "https://" + bouncex.website.biu + "/assets/bounce/local_storage_frame10.min.html#" + bouncex.website.id + (bouncex.website.swids ? "&" + bouncex.website.swids : "");
                if (bouncex.local_storage_frame = document.createElement("IFRAME"), bouncex.local_storage_frame.style.display = "none", bouncex.local_storage_frame.setAttribute("id", "bcx_local_storage_frame"), bouncex.local_storage_frame.setAttribute("src", e), document.body) addLocalStorageFrame();
                else var t = setInterval2(function() {
                    document.body && (clearTimeout(t), addLocalStorageFrame())
                }, 100)
            }
        }

        function init_public_functions() {
            var e;
            window.console || (window.console = {
                log: function() {
                    return {}
                }
            }), bouncex.setv = bouncex.setVar = CustomVariables.setVar.bind(CustomVariables), bouncex.setVarAndReload = CustomVariables.setVarAndReload.bind(CustomVariables), bouncex.getVar = CustomVariables.getVar.bind(CustomVariables), bouncex.perf = perf, bouncex.loadBounceCss = loadBounceCss, bouncex.updateQS = updateQS, bouncex.make_include_string = make_include_string, bouncex.baddjs = baddjs, bouncex.wndsize = wndsize, bouncex.init = InitSequence.postInit1.entry, bouncex.bcxReady = bcxReady, bouncex.stringify = stringify, bouncex.parseJSON = parseJSON, bouncex.addCss = addCss, bouncex.createIframe = createIframe, bouncex.unload_campaigns = unload_campaigns, bouncex.unload_campaign = unload_campaign, bouncex.reload_campaigns = window.reload_campaigns = ReloadCampaigns.addRequest.bind(ReloadCampaigns), bouncex.dynamicPageChange = SinglePageApp.dynamicPageChange, bouncex.nextStep = nextStep, bouncex.submitCampaignStep = submitCampaignStep, bouncex.setJumpStep = setJumpStep, bouncex.placeCampaign = placeCampaign, bouncex.alignCampaign = alignCampaign, bouncex.destroyAll = destroyAll, bouncex.passiveEventRegistry = {}, "window" in (e = window) && "document" in e && ("atob" in e && "btoa" in e || (e.atob = function(e) {
                var t = 0,
                    n = [],
                    i = 0,
                    o = 0;
                if (0 == (e = (e += "").replace(/\s/g, "")).length % 4 && (e = e.replace(/=+$/, "")), 1 == e.length % 4) throw Error("InvalidCharacterError");
                if (/[^+\/0-9A-Za-z]/.test(e)) throw Error("InvalidCharacterError");
                for (; t < e.length;) i = i << 6 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(t)), 24 == (o += 6) && (n.push(_StringfromCharCode(255 & i >> 16)), n.push(_StringfromCharCode(255 & i >> 8)), n.push(_StringfromCharCode(255 & i)), i = o = 0), t += 1;
                return 12 == o ? n.push(_StringfromCharCode(255 & i >> 4)) : 18 == o && (i >>= 2, n.push(_StringfromCharCode(255 & i >> 8)), n.push(_StringfromCharCode(255 & i))), n.join("")
            }, e.btoa = function(e) {
                var t, n, i, o, a = 0,
                    r = [];
                if (/[^\x00-\xFF]/.test(e += "")) throw Error("InvalidCharacterError");
                for (; a < e.length;) o = (t = e.charCodeAt(a++)) >> 2, t = (3 & t) << 4 | (n = e.charCodeAt(a++)) >> 4, n = (15 & n) << 2 | (i = e.charCodeAt(a++)) >> 6, i &= 63, a === e.length + 2 ? i = n = 64 : a === e.length + 1 && (i = 64), r.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(o), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i));
                return r.join("")
            })), bouncex.repressCampaigns = repressCampaigns, bouncex.isGbi2Campaign = isGbi2Campaign, bouncex.isBxPlayerCampaign = isBxPlayerCampaign
        }

        function init_browser() {
            var e = navigator.userAgent;
            bouncex.browser = {}, bouncex.browser.webkit = /WebKit/.test(e), bouncex.browser.firefox = /Firefox/.test(e), bouncex.browser.msie = /Trident\/7\.|MSIE/.test(e), bouncex.browser.opera = /Opera|OPR\//.test(e), bouncex.browser.msie && 0 < e.indexOf("MSIE") && (bouncex.browser.msie = parseInt(e.split("MSIE")[1])), bouncex.browser.msie && 0 < e.indexOf("rv:") && (bouncex.browser.msie = parseInt(e.split("rv:")[1])), bouncex.browser.edge = /Edge/.test(e), bouncex.browser.edge && (bouncex.browser.edge = parseInt(e.split("Edge/")[1])), bouncex.browser.prerenderio = -1 < e.indexOf("Prerender"), bouncex.browser.android = -1 < e.indexOf("Android"), bouncex.browser.iphone = -1 < e.indexOf("iPhone"), bouncex.browser.ipad = -1 < e.indexOf("iPad"), bouncex.browser.ios8 = !1, bouncex.browser.ios9 = !1, bouncex.browser.ios = !1, bouncex.browser.iphone || bouncex.browser.ipad ? (bouncex.browser.ios = parseInt(e.split("Version/")[1]), bouncex.browser.ios9 = 9 === bouncex.browser.ios, bouncex.browser.ios8 = 8 === bouncex.browser.ios, bouncex.browser.chrome = /CriOS/.test(e), bouncex.browser.chrome && (bouncex.browser.ios = !!(47 < parseInt(e.split("CriOS/")[1])) && 9)) : bouncex.browser.chrome = /Chrome/.test(e), bouncex.browser.safari = !(-1 == e.indexOf("Safari") || -1 != e.indexOf("Chrome")), bouncex.browser.safari && 0 < e.indexOf("Version/") && (bouncex.browser.safari = parseInt(e.split("Version/")[1].replace(".", ""))), bouncex.browser.chrome && 0 < e.indexOf("Chrome/") && (bouncex.browser.chrome = parseInt(e.split("Chrome/")[1])), bouncex.browser.firefox && 0 < e.indexOf("Firefox/") && (bouncex.browser.firefox = parseInt(e.split("Firefox/")[1])), bouncex.ssl = "https:" == window.location.protocol
        }

        function init_post_campaign_public_function() {
            bouncex.setBounceCookie = function() {
                setBounceCookie()
            }, bouncex.initActivationFuncs = function() {
                init_activation_funcs()
            }, bouncex.contains = !jQuery.contains || -1 != jQuery().jquery.indexOf("1.4.") || -1 < jQuery().jquery.indexOf("1.8.") ? eval("document.contains||document.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true}}}return false};") : jQuery.contains, bouncex.close_ad = function(e, t, n) {
                close_ad(e, t, n)
            }, bouncex.report = function(e, t, n) {
                return bouncex.campaigns[e] ? report(e, t, n) : void 0
            }, bouncex.report_submit = function(e, t, n) {
                return report_submit(e, t, n)
            }, bouncex.report_ga = function(e, t, n) {
                report_ga(e, t, n)
            }, bouncex.report_conversion = function(e, t) {
                report_conversion(e, t)
            }, window.close_bouncex_ad = close_ad, bouncex.fs = fs, bouncex.by_parent_id = function(e) {
                return by_parent_id(e)
            }, bouncex.show_ad = function(e) {
                trigger_ad("manual", e)
            }, bouncex.align_callout = align_callout_public, bouncex.destroy_ad = destroy_ad, bouncex.unload_campaigns = unload_campaigns, bouncex.reload_campaigns = ReloadCampaigns.addRequest.bind(ReloadCampaigns), bouncex.reportGa = reportGa, bouncex.loadBrandStyles = loadBrandStyles, bouncex.loadWebfonts = loadWebfonts, bouncex.activate_campaign = activate_campaign
        }

        function initBa() {
            bouncex.website.ba.enabled && (bouncex.ba = {
                fbel: [],
                fbrc: 0,
                fbto: null,
                lip: {}
            })
        }

        function init_ibx() {
            bouncex.ibx = {
                wsid: bouncex.website.id,
                _event_store: [],
                _item_store: [],
                uid: null,
                crt: null,
                token: null,
                mode: 1,
                cvar: {},
                _init: function() {
                    this.vid = bouncex.cookie.vid, this.token = bouncex.cookie.did, this.uid = this._get("user"), this.mode = this._get("mode"), this.crt = this._get("cart"), this._cart("set"), this._clkthrough(), this._espemailid(), this._emailhash(), this._log("initialized"), this._log("mode: " + this.mode + " | token: " + this.token)
                },
                user: function(e, t) {
                    if (this._validate(e)) {
                        bouncex.cookie.uid = 1, setBounceCookie();
                        var n = this._cart("get");
                        n && ((t = t || {}).__cart = n), this._push("user", {
                            key: e,
                            val: t
                        });
                        var i = {};
                        i["user:email"] = e, i["user:source"] = t.__src, i["user:gcr"] = bouncex && bouncex.cookie ? bouncex.cookie.gcr : 99, i.agent = "js", t.campaign && (i.campaignid = t.campaign), i.eq = 1, event_stream_report("user", i)
                    } else this._log("invalid email")
                },
                track: function(e, t, n, i) {
                    if (e && t) {
                        this["_" + e + "_store"] && this["_" + e + "_store"].push({
                            key: JSON.stringify(n)
                        }), i || (i = "");
                        var o = {
                            key: t,
                            val: n,
                            segment: i
                        };
                        this._push(e, o);
                        var a = {},
                            r = t;
                        for (var s in "item" == e && (r = "item", a["item:segment"] = i, a["item:category"] = i, a["item:id"] = t, a["item:url"] = n.__url, a["item:imageurl"] = n.creative, a["item:imagewidth"] = n.__width, a["item:imageheight"] = n.__height, a.stringvalue = t, a.legacy = 1), "cart" == e && (r = "cart"), n) n.hasOwnProperty(s) && "__" != s.substring(0, 2) && (a[r + ":" + s] = n[s]);
                        n && n.stringvalue && (a.stringvalue = n.stringvalue), a.eq = 1, event_stream_report(r, a)
                    } else this._log("type and key must be set")
                },
                conv_params: function() {
                    var e = this._auto_add({
                        ibx_mode: this._get("mode"),
                        ibx_clicks: this._get("clickstr")
                    });
                    return e.ibx_clicks && (this._cookies.create("__ibxc0", e.ibx_clicks), this._cookies.destroy("__ibxc")), this._log("conv_params: " + (e.ibx_clicks ? e.ibx_clicks : "[none]")), this._qs(e)
                },
                set: function(e, t) {
                    return "user" === e ? this.uid = t : "mode" === e ? (0 == t || 1 == t) && (this.mode = t, this._cookies.create("__ibxm", t)) : "cart" === e && (this.crt = t, this._cookies.create("__ibxcr", t, .5)), t
                },
                dump: function(e) {
                    this._log(e + " = " + this._get(e))
                },
                _get: function(e) {
                    var t;
                    return "events" === e ? t = this._event_store : "items" === e ? t = this._item_store : "token" === e ? t = btoa(bouncex.cookie.did) : "user" === e ? (t = parseInt(bouncex.cookie.uid || this._cookies.read("__ibxu")), isNaN(t) && (t = 0)) : "mode" === e ? t = "0" === this._cookies.read("__ibxm") ? 0 : 1 : "clickstr" === e ? t = this._cookies.read("__ibxc") : "clicks" === e ? t = (t = this._cookies.read("__ibxc")) ? t.split(",") : [] : "cart" === e ? (t = parseInt(this._cookies.read("__ibxcr")), isNaN(t) && (t = 0)) : t = "invalid", t
                },
                _push: function(e, t) {
                    var n, i = "type=" + e + "&wsid=" + this.wsid + "&gcr=" + bouncex.cookie.gcr + "&vid=" + bouncex.cookie.vid + "&mode=1";
                    if (i += "&device_id=" + encodeURIComponent(bouncex.cookie.did), t.val = JSON.stringify(this._auto_add(t.val || {})), i = i + "&" + this._qs(t), n = void 0 === t.key ? "" : ": " + t.key, this._log(e.toUpperCase() + n + " // " + i), "cart" == e || "isr" == e) {
                        var o = bouncex.sau + "/ibx/ping?" + i;
                        document.createElement("img").src = o
                    }
                },
                _auto_add: function(e) {
                    return (e = e || {}).hasOwnProperty("__url") || (e.__url = location.href), e.hasOwnProperty("__referrer") || (e.__referrer = document.referrer), e
                },
                _cart: function(action) {
                    var cart = !1;
                    switch (action) {
                        case "get":
                            try {
                                cart = eval(bouncex.website.ibx.cart_rep.get)
                            } catch (e) {
                                cart = !1, this._log(e)
                            }
                            break;
                        case "set":
                            if (this.crt || -1 == location.href.indexOf("ibx_cart")) return !1;
                            cart = this._getparam("ibx_cart"), cart && (eval(bouncex.website.ibx.cart_rep.set), this.set("cart", 1)), cart = this.crt
                    }
                    return cart
                },
                _clkthrough: function() {
                    var e, t = this._getparam("ibx_source");
                    if (t) try {
                        if (e = this._get("clickstr")) {
                            if (-1 != e.indexOf(t)) return void this._log("click-through: " + t + " (DUPLICATE)");
                            e += "," + t
                        } else e = t;
                        this._cookies.create("__ibxc", e), this._log("click-through: " + t)
                    } catch (e) {
                        this._log(e)
                    }
                },
                _emailhash: function() {
                    var e = bouncex.visit_cookie.ueh;
                    e && event_stream_report("user", {
                        agent: "js",
                        "user:emailhash": e,
                        "user:source": "ibx_clickthrough"
                    })
                },
                _espemailid: function() {
                    if (bouncex.website.ibx.ulpj) {
                        var e = {
                                "user:source": "esp-email-id",
                                agent: "js"
                            },
                            t = !1;
                        for (var n in bouncex.website.ibx.ulpj)
                            if (bouncex.website.ibx.ulpj.hasOwnProperty(n)) {
                                var i = this._getparam(n);
                                i && (t = !0, e["user:" + bouncex.website.ibx.ulpj[n]] = i)
                            }
                        t && event_stream_report("user", e)
                    }
                },
                _log: function(e) {
                    0 == this.mode && bouncex.log("ibx: " + e)
                },
                _validate: function(e) {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
                },
                _quick_validate: function(e) {
                    return null != e && 2 < e.indexOf(".") && 0 < e.indexOf("@")
                },
                _qs: function(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                },
                _cookies: {
                    domain: window.bouncex.cookie_domain,
                    create: function(e, t, n) {
                        n || (n = 365);
                        var i = new Date;
                        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                        var o = "; expires=" + i.toGMTString(),
                            a = this.domain ? "domain=." + this.domain + ";" : "";
                        document.cookie = e + "=" + t + o + "; path=/;" + a
                    },
                    read: function(e) {
                        for (var t, n = e + "=", i = document.cookie.split(";"), o = 0; o < i.length; o++) {
                            for (t = i[o];
                                " " == t.charAt(0);) t = t.substring(1, t.length);
                            if (0 == t.indexOf(n)) return t.substring(n.length, t.length)
                        }
                        return null
                    },
                    destroy: function(e) {
                        this.create(e, "", -1)
                    }
                },
                _getparam: getParam
            }
        }

        function initAds() {
            bouncex.website.gbi_enabled && (bouncex.website.gbi_enabled = canShowGbi())
        }

        function shouldCheckDfp() {
            return gbi2Enabled() && bouncex.website.checkDfp
        }

        function init_website_custom_js() {
            if (bouncex.website.cjs) try {
                eval(bouncex.website.cjs)
            } catch (e) {
                bouncex.err(e, {
                    source: "bouncex.website.cjs"
                })
            }
        }

        function initPreInitCustomJs() {
            if (bouncex.website.preinit_cjs) try {
                eval(bouncex.website.preinit_cjs)
            } catch (e) {
                bouncex.err(e, {
                    source: "bouncex.website.preinit_cjs"
                })
            }
        }

        function init_ibx_tracking() {
            if (bouncex.website.ibx.te && 1 == bouncex.website.ibx.te) {
                try {
                    eval(bouncex.website.ibx.tjs)
                } catch (e) {
                    bouncex.err(e, {
                        source: "bouncex.website.ibx.tjs"
                    })
                }
                if (1 == bouncex.website.ibx.miw) {
                    NativeCapture.init();
                    var selector = "input:not([type=button],[type=submit],[type=reset],[type=hidden],[type=radio],[type=checkbox],[type=image],[type=password], #privy-container input, #dwfrm_giftcert_purchase_recipientEmail, #dwfrm_wishlist_search_email)";
                    bouncex.website.ibx.miw_exclude && (selector += ":not(" + bouncex.website.ibx.miw_exclude + ")"), bouncex.off(bouncex.body, "blur.bx-miw", selector), bouncex.on(bouncex.body, "blur.bx-miw", function() {
                        var e = {
                                email: jQuery(this).val(),
                                source: "input"
                            },
                            t = jQuery(this).attr("id");
                        t && (e.input_id = t), bouncex.push(["user", e])
                    }, selector)
                }
            }
        }

        function init_event_tracking() {
            if (bouncex.website.ete) {
                if (bouncex.website.ettm && !visitorTestMode("events")) return;
                bouncex.et.init()
            }
        }

        function tryCatch(e, t) {
            if ("function" == typeof e) return e._wrapped || (e._wrapped = function() {
                try {
                    return e.apply(this, arguments)
                } catch (n) {
                    (t = t || {}).source = t.source || e.name || "tryCatch wrapper", Debug.report(n, t)
                }
            }), e._wrapped
        }

        function delegate(e, t, n, i) {
            if (null != jQuery.fn.on) e.on(t, i, n);
            else {
                if (null == jQuery.fn.delegate) return bouncex.err("event listener delegation not supported"), !1;
                e.delegate(i, t, n)
            }
        }

        function undelegate(e, t, n) {
            if (null != jQuery.fn.off) e.off(t, n);
            else {
                if (null == jQuery.fn.undelegate) return !1;
                e.undelegate(n, t)
            }
        }

        function bcxReady(f) {
            bouncex.website.fbe || !(-1 < bouncex.website.sd && bouncex.website.vars) ? f() : (!bouncex._bcxReady && eval('bouncex._bcxReady=function(){function i(){if(r.isReady){return}try{document.documentElement.doScroll("left")}catch(e){bouncex.setTimeout2(i,1);return}r.ready()}function s(t){r.bindReady();var n=r.type(t);e.done(t)}var e,t,n={};n["[object Boolean]"]="boolean";n["[object Number]"]="number";n["[object String]"]="string";n["[object Function]"]="function";n["[object Array]"]="array";n["[object Date]"]="date";n["[object RegExp]"]="regexp";n["[object Object]"]="object";var r={isReady:false,readyWait:1,holdReady:function(e){if(e){r.readyWait++}else{r.ready(true)}},ready:function(t){if(t===true&&!--r.readyWait||t!==true&&!r.isReady){if(!document.body){return bouncex.setTimeout2(r.ready,1)}r.isReady=true;if(t!==true&&--r.readyWait>0){return}e.resolveWith(document,[r])}},bindReady:function(){if(e){return}e=r._Deferred();if(document.readyState==="complete"){return bouncex.setTimeout2(r.ready,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false);window.addEventListener("load",r.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",t);window.attachEvent("onload",r.ready);var n=false;try{n=window.frameElement==null}catch(s){}if(document.documentElement.doScroll&&n){i()}}},_Deferred:function(){var e=[],t,n,i,s={done:function(){if(!i){var n=arguments,o,u,a,f,l;if(t){l=t;t=0}for(o=0,u=n.length;o<u;o++){a=n[o];f=r.type(a);if(f==="array"){s.done.apply(s,a)}else if(f==="function"){e.push(a)}}if(l){s.resolveWith(l[0],l[1])}}return this},resolveWith:function(r,s){if(!i&&!t&&!n){s=s||[];n=1;try{while(e[0]){e.shift().apply(r,s)}}finally{t=[r,s];n=0}}return this},resolve:function(){s.resolveWith(this,arguments);return this},isResolved:function(){return!!(n||t)},cancel:function(){i=1;e=[];return this}};return s},type:function(e){return e==null?String(e):n[Object.prototype.toString.call(e)]||"object"}};if(document.addEventListener){t=function(){document.removeEventListener("DOMContentLoaded",t,false);r.ready()}}else if(document.attachEvent){t=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",t);r.ready()}}}return s}()'), bouncex._bcxReady(f))
        }

        function updateQS() {
            for (var e = 1 & arguments.length, t = (e ? arguments[0] : window.top.location.href).split("#"), n = t[0], i = !!(1 < t.length) && t[1], o = [], a = e; a < arguments.length; a += 2) {
                var r = arguments[a],
                    s = encodeURIComponent(arguments[a + 1]),
                    c = new RegExp("([?&])" + r + "=?.*?(&|$)", "gi");
                n.match(c) ? n = n.replace(c, "$1" + r + "=" + s + "$2") : o.push(r + "=" + s)
            }
            return o.length && (n += (-1 == n.indexOf("?") ? "?" : "&" == n.slice(-1) ? "" : "&") + o.join("&")), n + (i ? "#" + i : "")
        }

        function qs(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }

        function getJString(e) {
            var t = _typeof(e);
            if ("object" != t || null === e) return "string" == t && (e = '"' + e + '"'), e + "";
            var n, i, o = [],
                a = e && e.constructor == Array;
            for (n in e) "string" == (t = _typeof(i = e[n])) ? i = '"' + i + '"' : "object" == t && null !== i && (i = getJString(i)), o.push((a ? "" : '"' + n + '":') + i);
            return (a ? "[" : "{") + o + (a ? "]" : "}")
        }

        function stringify(e) {
            return "undefined" == typeof JSON || "function" != typeof JSON.stringify ? getJString(e) : JSON.stringify(e)
        }

        function parseJSON(e, t) {
            t = t || {};
            try {
                var n = JSON.parse(e);
                return n && "object" === _typeof(n) ? n : t
            } catch (e) {
                return t
            }
        }

        function addCss(e, t, n) {
            var i = document.createElement("style");
            return n && (i.id = n + "-style"), i.styleSheet ? i.styleSheet.cssText = e : i.innerHTML = e, t.appendChild(i), i
        }

        function getParam(e, t) {
            var n = t ? "?" + t : window.location.href;
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var i = new RegExp("[\\?&#]" + e + "=([^&#]*)").exec(n);
            return null == i ? "" : decodeURIComponent(i[1])
        }

        function createIframe(e) {
            var t = document.createElement("iframe");
            for (var n in e) e.hasOwnProperty(n) && t.setAttribute(n, e[n]);
            return t
        }

        function MultiCookie(e) {
            for (var t in this.disable_first_party = !1, this.first_party_limit = 999999, this.domain = window.location.host, this.best = function(e, t) {
                    return t.length > e.length ? t : e
                }, this.parse_json = function(e) {
                    return JSON.parse(e)
                }, this.stringify_json = function(e) {
                    return JSON.stringify(e)
                }, this.set_qs = function(e, t, n) {
                    if (-1 == e.indexOf("&" + t + "=")) e += "&" + t + "=" + n;
                    else {
                        var i = new RegExp("&" + t + "=[^&]*");
                        e = e.replace(i, "&" + t + "=" + n)
                    }
                    return e
                }, e) this[t] = e[t];
            var n = window.localStorage,
                i = window.globalStorage;
            this.set = function(e, t) {
                "object" == _typeof(t) && (t = this.stringify_json(t)), this.disable_first_party || this.cookie(e, t), this.local_storage(e, t), this.global_storage(e, t), this.window_name(e, t), this.user_data(e, t)
            }, this.get = function(e) {
                for (var t, n = this.getvs(e), i = ""; t = n.pop();) i = this.best(i, t);
                return this.set(e, i), i
            }, this.getvs = function(e) {
                function t(e) {
                    e && "" !== e && n.push(e)
                }
                var n = [];
                return t(this.cookie(e)), t(this.local_storage(e)), t(this.global_storage(e)), t(this.window_name(e)), t(this.user_data(e)), n
            }, this.cookie = function(e, t) {
                if (void 0 === t) return this.get_qs(e, document.cookie);
                var n = this.domain;
                0 > window.location.host.indexOf(n) && (n = window.location.host.split(".").slice(-2).join(".")), document.cookie = e + "='; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=" + n, document.cookie.length + t.length < this.first_party_limit && (document.cookie = e + "=" + t + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + n)
            }, this.local_storage = function(e, t) {
                try {
                    if (n) {
                        if (void 0 === t) return n.getItem(e);
                        n.setItem(e, t)
                    }
                } catch (e) {}
            }, this.global_storage = function(e, t) {
                if (i) {
                    var n = this.getHost();
                    try {
                        if (void 0 === t) return i[n][e];
                        i[n][e] = t
                    } catch (e) {}
                }
            }, this.window_name = function(e, t) {
                try {
                    if (void 0 === t) return this.get_qs(e, window.name);
                    window.name = this.set_qs(window.name, e, t)
                } catch (e) {}
            }, this.user_data = function(e, t) {
                try {
                    var n = this.createElem("div", "userdata_el", 1);
                    if (n.style.behavior = "url(#default#userData)", void 0 === t) return n.load(e), n.getAttribute(e);
                    n.setAttribute(e, t), n.save(e)
                } catch (e) {}
            }, this.get_qs = function(e, t) {
                if ("string" == typeof t) {
                    var n, i, o = e + "=",
                        a = t.split(/[;&]/);
                    for (n = 0; n < a.length; n++) {
                        for (i = a[n];
                            " " === i.charAt(0);) i = i.substring(1, i.length);
                        if (0 === i.indexOf(o)) return i.substring(o.length, i.length)
                    }
                }
            }
        }

        function getBounceCookieMulti(e) {
            if (bouncex.multicookie || (bouncex.multicookie = new MultiCookie({
                    domain: bouncex.website.domain,
                    disable_first_party: bouncex.website.aco.disable_first_party && bouncex.website.aco.disable_first_party ? 1 : 0,
                    first_party_limit: bouncex.website.aco.first_party_limit && bouncex.website.aco.first_party_limit ? bouncex.website.aco.first_party_limit : 999999,
                    parse_json: bouncex.parseJSON,
                    stringify_json: bouncex.stringify,
                    best: function(e, t) {
                        "" === e && (e = {});
                        var n = {};
                        try {
                            '{"' !== t.substr(0, 2) && (t = bouncex.lz.decompressFromURI(t)), n = this.parse_json(t)
                        } catch (t) {
                            return e
                        }
                        var i = e.fvt ? e.fvt : 0;
                        return (n && n.fvt ? n.fvt : 0) > i ? n : e
                    }
                })), void 0 !== e) return bouncex.multicookie.cookie(e);
            var t = bouncex.multicookie.get(bouncex.website.cookie_name);
            return "" === t && (t = {}), t
        }

        function getBounceCookieLocalStorage(e) {
            return void 0 === e ? bouncex.cookie : getBounceCookieSingle(e)
        }

        function setBounceCookieLocalStorage() {
            var e = encodeURIComponent(bouncex.stringify(bouncex.cookie));
            if (bouncex.local_storage_frame.contentWindow) bouncex.local_storage_frame.contentWindow.postMessage(e, "*");
            else var t = setInterval2(function() {
                bouncex.local_storage_frame.contentWindow && (bouncex.local_storage_frame.contentWindow.postMessage(e, "*"), clearInterval(t))
            }, 100)
        }

        function getBounceCookieFPLocalStorage(e) {
            if (e) return getBounceCookieSingle(e);
            var t = localStorage.getItem(bouncex.website.cookie_name);
            return parseJSON(bouncex.lz.decompressFromURI(t)) || {}
        }

        function setBounceCookieFPLocalStorage() {
            localStorage.setItem(bouncex.website.cookie_name, bouncex.lz.compressToURI(bouncex.stringify(bouncex.cookie)))
        }

        function setBounceCookieSingle() {
            var e = bouncex.website.cookie_name,
                t = new Date;
            t.setDate(t.getDate() + 365);
            var n = bouncex.lz.compressToURI(bouncex.stringify(bouncex.cookie)) + "; expires=" + t.toUTCString();
            document.cookie = bouncex.cookie_domain ? e + "=" + n + ";path=/;domain=." + bouncex.cookie_domain + ";" : e + "=" + n + ";path=/;"
        }

        function getBounceCookieSingle(e) {
            e || (e = bouncex.website.cookie_name);
            var t, n, i, o = document.cookie.split(";");
            for (t = 0; t < o.length; t++)
                if (n = o[t].substr(0, o[t].indexOf("=")), i = o[t].substr(o[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) == e) return bouncex.website.cookie_name == e ? i ? ('{"' !== i.substr(0, 2) && (i = bouncex.lz.decompressFromURI(i)), parseJSON(i)) : {} : i;
            if (bouncex.website.cookie_name == e) return {}
        }

        function setBounceVisitCookie() {
            if (3400 !== bouncex.website.id) {
                var e = bouncex.website.cookie_name + "v",
                    t = new Date;
                t.setTime(t.getTime() + 18e5);
                var n = bouncex.lz.compressToURI(bouncex.stringify(bouncex.visit_cookie)) + "; expires=" + t.toUTCString();
                document.cookie = bouncex.cookie_domain ? e + "=" + n + ";path=/;domain=." + bouncex.cookie_domain + ";" : e + "=" + n + ";path=/;"
            }
        }

        function getBounceVisitCookie(e) {
            if (3400 !== bouncex.website.id) {
                e || (e = bouncex.website.cookie_name + "v");
                var t, n, i, o = document.cookie.split(";");
                for (t = 0; t < o.length; t++)
                    if (n = o[t].substr(0, o[t].indexOf("=")), i = o[t].substr(o[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) == e) return '{"' === i.substr(0, 2) ? i : bouncex.lz.decompressFromURI(i)
            }
        }

        function setBounceCookieMulti() {
            var e = bouncex.website.cookie_name;
            if (bouncex.multicookie.set(e, bouncex.stringify_cookie(bouncex.cookie)), !bouncex.browser || !bouncex.browser.safari) {
                var t = bouncex.au + "/capture/update_cookie?cookie_name=" + e + "&cookie=" + encodeURIComponent(JSON.stringify(bouncex.cookie));
                document.createElement("img").src = t
            }
        }

        function destroyAll(e) {
            document.cookie.split(";").forEach(function(e) {
                var t = e.split("=")[0];
                (-1 < t.indexOf("_ibx") || -1 < t.indexOf("bounceClientVisit")) && (document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;", document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=" + bouncex.cookie_domain + ";")
            }), localStorage.removeItem(bouncex.website.cookie_name), bouncex.gdpr_opt_out || (bouncex.gdpr_opt_out = !0, bouncex.local_storage_frame && bouncex.local_storage_frame.contentWindow && bouncex.local_storage_frame.contentWindow.postMessage("clear_all_data", "*"), bouncex.campaigns && init_post_campaign_public_function(), InitSequence.dynamic.tearDown(), bouncex.website.vars = [], bouncex.website.etjson = [], bouncex.website.cjs = "", bouncex.website.preinit_cjs = "", bouncex.website.etjs = "", bouncex.baddjs = exports.baddjs = baddjs = function() {}, exports.event_stream_report = event_stream_report = function() {}, bouncex.cookie && (bouncex.cookie.vid = bouncex.cookie.did = 0), "client_opt_out" !== e && "gdpr_no_consent_cookie" !== e && report_optout("bx_suppress", {
                reason: e
            }), bouncex.cookie = {})
        }

        function clearBounceCookie(e) {
            var t = bouncex.website.cookie_name,
                n = "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
            e ? (document.cookie = t + "=" + n + ";path=/;", document.cookie = t + "=" + n + ";path=/;domain=." + bouncex.cookie_domain + ";") : bouncex.cookie_domain ? document.cookie = t + "=" + n + ";path=/;" : document.cookie = t + "=" + n + ";path=/;domain=." + bouncex.cookie_domain + ";"
        }

        function stringify_cookie(e) {
            return bouncex.stringify(e).replace(/;/g, "\\u003b").replace(/\+/g, "\\u002b").replace(/\=/g, "\\u003d")
        }

        function areCookiesEnabled() {
            var e = !!navigator.cookieEnabled;
            return void 0 !== navigator.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie")), e
        }

        function fpLocalStorageAvailable() {
            if (window.localStorage) try {
                if (localStorage.setItem("bxtest", !0), localStorage.getItem("bxtest")) return localStorage.removeItem("bxtest"), !0
            } catch (e) {}
            return !1
        }

        function visitorTestMode(e) {
            switch (!0) {
                case -1 < ["office", "bxdev", "bxtest"].indexOf(e):
                    return !(!bouncex.testmode || !bouncex.testmode[e]);
                case !(bouncex.testmode && bouncex.testmode.bxdev):
                    return !1;
                default:
                    return !!(bouncex.testmode && bouncex.testmode.bxdev && bouncex.testmode.bxdev[e])
            }
        }

        function initTestModeParts(e) {
            var t = {
                page_types: bouncex.website.pt,
                cvars: bouncex.website.vars
            }[e];
            if (!visitorTestMode(e))
                if (bouncex.removedItems = bouncex.removedItems || {}, bouncex.removedItems[e] = [], Array.isArray(t)) t = t.filter(function(t) {
                    return t.testmode && bouncex.removedItems[e].push(t.name), !t.testmode
                });
                else
                    for (var n in t) t.hasOwnProperty(n) && t[n].testmode && (bouncex.removedItems[e].push(n), delete t[n]);
            return t
        }

        function init_page_types() {
            if (bouncex.website.pt) {
                bouncex.website.pt = initTestModeParts("page_types");
                var e = findPageTypeMatch(bouncex.website.pt);
                bouncex.website.pts = e
            }
        }

        function getEnabledPageTypes() {
            return bouncex.website.pt ? Object.keys(bouncex.website.pt) : []
        }

        function findPageTypeMatch(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = e[t];
                    if (void 0 === n.val ? new Criteria(t, n, "pagetype").evaluate() : new Criteria(t, n.val, "pagetype").evaluate()) return t
                }
            return !1
        }

        function Criteria(e, t, n) {
            this.name = e, this.conditions = t, this.type = n || "other", this.conditionsPassed = !1, this.evaluate = function() {
                try {
                    for (var e = 0; e < this.conditions.length; e++) {
                        for (var t = this.conditions[e], n = !1, i = 0; i < t.length && !n; i++) {
                            var o = t[i],
                                a = CriteriaHelper.activations[o.activation];
                            n = !("function" != typeof a) && a(o.prop, o.prop2, o.prop3, o.val)
                        }
                        if (!n) return this.fail(t)
                    }
                    return this.pass()
                } catch (e) {
                    bouncex.err(e, {
                        source: "criteria evaluation: " + this.type
                    })
                }
                return this.fail()
            }, this.log = function() {
                if (bouncex.testmode.bxdev || bouncex.testmode.bxtest) {
                    bouncex.criteriaLog = bouncex.criteriaLog || {}, bouncex.criteriaLog[this.type] = bouncex.criteriaLog[this.type] || {};
                    var e = this.name + "-" + JSON.stringify(this.conditions).length;
                    bouncex.criteriaLog[this.type][e] = {
                        conditions: this.conditions,
                        conditionsPassed: this.conditionsPassed,
                        failedCondition: this.failedCondition,
                        name: this.name
                    }
                }
            }, this.pass = function() {
                return this.conditionsPassed = !0, this.log(), !0
            }, this.fail = function(e) {
                return this.conditionsPassed = !1, this.failedCondition = e, this.log(), !1
            }
        }

        function percentageLiveTraffic(e) {
            return bouncex.cookie && bouncex.cookie.did && bouncex.cookie.did.substr(bouncex.cookie.did.length - 2) < e
        }

        function isBxInternalTraffic() {
            return "production" !== bouncex.env || visitorTestMode("office") || visitorTestMode("bxdev")
        }

        function next_sequence_id() {
            return bouncex.cookie = getBounceCookie(), (!bouncex.cookie.hasOwnProperty("sid") || isNaN(bouncex.cookie.sid)) && (bouncex.cookie.sid = -1), bouncex.cookie.sid++, setBounceCookie(), bouncex.cookie.sid
        }

        function preventUserTracking(e) {
            return updatePolicyCompliance({
                email: e["user:email"]
            }), shouldEnforcePolicies({
                gdpr: !0,
                casl: !0
            }) && !policyException(e)
        }

        function updatePolicyCompliance(e) {
            if ((!bouncex.state.casl || !bouncex.state.gdpr) && e.email) {
                var t = e.email.split(".").pop().toLowerCase();
                bouncex.state.casl || (bouncex.state.casl = 1 === bouncex.restrictedTlds.casl[t]), bouncex.state.gdpr || (bouncex.state.gdpr = 1 === bouncex.restrictedTlds.gdpr[t])
            }
        }

        function shouldEnforcePolicies(e) {
            return !(!e.gdpr || !bouncex.state.gdpr) || !(!e.casl || !bouncex.state.casl || bouncex.website.cmp.whitelist_check)
        }

        function policyException(e) {
            var t = "bouncex overlay" === e["user:source"] && e.campaignid && isCompliantCampaign(e.campaignid),
                n = loggedInTrackingAllowed(e),
                i = fromCompliantSource(e);
            return t || n || i
        }

        function isCompliantCampaign(e) {
            return !!(!bouncex.state.gdpr || bouncex.website.cmp.gdpr && bouncex.campaigns[e].compliance.gdpr) && (!bouncex.state.casl || bouncex.campaigns[e].compliance.casl)
        }

        function loggedInTrackingAllowed(e) {
            if (e["user:source"] && "loggedin" === e["user:source"].toLowerCase()) {
                if (bouncex.state.gdpr) return bouncex.website.cmp.gdpr && bouncex.website.cmp.whitelist_check;
                if (bouncex.state.casl) return bouncex.website.cmp.whitelist_check
            }
            return !1
        }

        function fromCompliantSource(e) {
            if (e["user:source"] && bouncex.website.ibx && "string" == typeof bouncex.website.ibx.cus && -1 < bouncex.website.ibx.cus.indexOf(e["user:source"])) return !0
        }

        function report_optout(e, t) {
            var n = bouncex.seu + "/track.gif/" + encodeURIComponent(e) + "?";
            t.websiteid = bouncex.website.id, t.source || (t.source = "web"), t.agent || (t.agent = "user");
            var i = n + qs(t),
                o = document.createElement("img");
            return o.src = i, o.src
        }

        function event_stream_report(e, t) {
            "user" === e && bouncex.ibx._validate(t["user:email"]) && (bouncex.state.redactEmail || preventUserTracking(t)) && (t["user:email"] = "redacted"), "requestemail" === e && bouncex.ibx._validate(t["user:email"]) && (bouncex.state.redactEmail || void 0 === bouncex.state.redactEmail && preventUserTracking(t)) && (t["user:email"] = "redacted", t.email = "redacted");
            var n = bouncex.seu + "/track.gif/" + encodeURIComponent(e) + "?";
            t.mode = bouncex.cookie.m, t.websiteid = bouncex.website.id, t.visitid = bouncex.cookie.vid, t.deviceid = bouncex.cookie.did, t.pageviewid = bouncex.state && void 0 !== bouncex.state.pvid ? bouncex.state.pvid : bouncex.cookie.vpv + 1, t.sequenceid = next_sequence_id(), t.clienttimestamp = getTimeMs(), t.clientapiversion = bouncex.tag, t.device = bouncex.cookie.d, bouncex.website.pts && (t.page_type = bouncex.website.pts), t.source || (t.source = "web"), t.agent || (t.agent = "user"), bouncex.dg && bouncex.dg.softID && (t.soft_id = bouncex.dg.softID), bouncex.dg && bouncex.dg.hardID && (t.hard_id = bouncex.dg.hardID), bouncex.debug && bouncex.eventLog.push({
                name: e,
                params: t
            }), bouncex.cookie.t && (t.testmode = 1);
            var i = n + qs(t),
                o = document.createElement("img");
            return o.onload = function() {
                handleEventStreamReportCompletion(t)
            }, o.src = i, behavioralAudiencesReport(e, t), o.src
        }

        function handleEventStreamReportCompletion(e) {
            e["user:emailhash"] && bouncex.visit_cookie && bouncex.visit_cookie.ueh && (delete bouncex.visit_cookie.ueh, setBounceVisitCookie())
        }

        function report(e, t, n) {
            isGbi2Campaign(e) ? bouncex.gbi2.report(e, t, n) : bouncex.website.gbi_enabled && bouncex.campaigns[e].gbi ? bouncex.gbi.report(e, t, n) : buildReport(e, t, n)
        }

        function buildReport(e, t, n) {
            var i = 0,
                o = "user",
                a = {
                    views: "eligible",
                    pops: "pop",
                    clicks: "click",
                    closes: "close"
                };
            if (a[t] && (t = a[t]), "click" == t) {
                if (bouncex.campaigns[e].impression_click_reported) return !1;
                bouncex.campaigns[e].impression_click_reported = !0, bouncex.cookie.campaigns[e].lclk = getTime2(), setBounceCookie()
            } else if ("close" != t) "eligible" == t ? (o = "js", bouncex.cookie.campaigns[e].vv = bouncex.cookie.campaigns[e].vv ? bouncex.cookie.campaigns[e].vv + 1 : 1, 1 == bouncex.cookie.campaigns[e].vv && (i = 1), setBounceCookie()) : "pop" == t || "trypop" == t ? (o = "js", 1 == bouncex.cookie.campaigns[e].av && (i = 1)) : ("bid_fill" == t || "bid_none" == t || "bid_empty" == t || "bid_error" == t) && (o = "js");
            else if (bouncex.campaigns[e].impression_click_reported || bouncex.campaigns[e].submitted) return !1;
            "object" !== _typeof(n) && (n = {}), i && (n.uq = 1), n.campaignid = e, n.source = n.source || "bouncex", n.agent = o, event_stream_report(t, n), reportGa(e, t), "click" == t && event_js_eval(e, "click")
        }

        function report_submit(e, t, n) {
            return t.m = bouncex.cookie.m, t.d = bouncex.cookie.d, t.visit_id = bouncex.cookie.vid, t.device_id = bouncex.cookie.did, t.campaign_id = e, t.website_id = bouncex.website.id, t.pvid = bouncex.state.pvid, t.cts = getTimeMs(), next_sequence_id(), t.cookie = bouncex.stringify(getBounceCookie()), t.hasOwnProperty("step") || (t.step = 1), n && (t.last_step = 1), bouncex.dg && bouncex.dg.hardID && (t.hard_id = bouncex.dg.hardID), bouncex.dg && bouncex.dg.softID && (t.soft_id = bouncex.dg.softID), jQuery('<img src="' + bouncex.sau + "/capture/submit.gif?" + qs(t) + '"/>')
        }

        function report_conversion_sync(obj, source) {
            perf.times("conversion"), obj = obj || {}, source = source || "sync", bouncex.cookie = getBounceCookie(), void 0 === obj.amount && (obj.amount = 0), void 0 === obj.order_id && (obj.order_id = ""), void 0 === obj.email && (obj.email = ""), void 0 === obj.goal && (obj.goal = "");
            var bamount = obj.amount,
                border_id = obj.order_id,
                bemail = obj.email,
                bgoal = obj.goal,
                sid = next_sequence_id(),
                pvid = bouncex.state ? bouncex.state.pvid : bouncex.cookie.vpv + 1,
                url = bouncex.sau + "/capture/convert.gif?m=" + bouncex.cookie.m + "&d=" + bouncex.cookie.d + "&goal=" + encodeURIComponent(bgoal) + "&email=" + encodeURIComponent(bemail) + "&email_sha256=" + (obj.email_sha256 ? encodeURIComponent(obj.email_sha256) : "") + "&order_id=" + encodeURIComponent(border_id) + "&amount=" + encodeURIComponent(bamount) + "&website_id=" + bouncex.website.id + "&visit_id=" + bouncex.cookie.vid + "&device_id=" + bouncex.cookie.did + "&pvid=" + pvid + "&sid=" + sid + "&cts=" + getTimeMs() + "&source=" + source + "&cookie=" + escape(bouncex.stringify(bouncex.cookie)) + "&" + bouncex.ibx.conv_params();
            bouncex.cookie.t && (url += "&testmode=" + bouncex.cookie.t), bouncex.dg && bouncex.dg.hardID && (url += "&hard_id=" + bouncex.dg.hardID), bouncex.dg && bouncex.dg.softID && (url += "&soft_id=" + bouncex.dg.softID);
            var urlLengthLimit = 32e3,
                newUrl = url + "&extradata=" + escape(bouncex.stringify(obj));
            newUrl.length < urlLengthLimit && (url = newUrl);
            var img = document.createElement("img");
            if (img.alt = "conversion pixel", img.src = url, bouncex.website.tcjs) try {
                eval(bouncex.website.tcjs)
            } catch (e) {
                bouncex.err(e, {
                    source: "bouncex.website.tcjs"
                })
            }
            if (bouncex.website.ibx.te && 1 == bouncex.website.ibx.te) try {
                eval(bouncex.website.ibx.cjs)
            } catch (e) {
                bouncex.err(e, {
                    source: "bouncex.website.ibx.cjs"
                })
            }
            bouncex.cookie.lc = getTime2(), setBounceCookie()
        }

        function report_conversion(obj, source) {
            var border_id = 0,
                bemail = "",
                bgoal = "",
                bamount;
            if (obj ? (bamount = obj.amount, border_id = obj.order_id, bemail = obj.email, obj.goal && (bgoal = obj.goal)) : obj = {}, bouncex.state.oijs && !border_id) try {
                border_id = eval(bouncex.state.oijs)
            } catch (e) {}
            if (bouncex.state.ovjs && !bamount) try {
                bamount = eval(bouncex.state.ovjs)
            } catch (e) {}
            if (bouncex.state.oejs && !bemail) try {
                bemail = eval(bouncex.state.oejs)
            } catch (e) {}
            if (bouncex.state.goal && !bgoal) try {
                bgoal = bouncex.state.goal
            } catch (e) {}
            obj.goal = bgoal, obj.amount = bamount, obj.order_id = border_id, obj.email = bemail, source = source || "async", report_conversion_sync(obj, source)
        }

        function event_js_eval(ca_id, type, data) {
            if (bouncex.campaigns[ca_id].event_js) {
                var campaign_id = ca_id;
                if (bouncex.campaigns[ca_id].event_js[type]) try {
                    eval(bouncex.campaigns[ca_id].event_js[type])
                } catch (e) {
                    bouncex.err(e, {
                        source: "event_js_eval",
                        ca_id: ca_id
                    })
                }
            }
        }

        function post_submit_redirect(e) {
            var t = bouncex.campaigns[e].is_api,
                n = bouncex.campaigns[e].submission_redirect,
                i = bouncex.campaigns[e].submission_redirect_delay;
            if (t && .3 > i) i = .3;
            else if (!t) return !1;
            n && setTimeout2(function() {
                window.top.location.href = n
            }, i ? 1e3 * i : 0)
        }

        function reportGa(e, t) {
            var n = t;
            "pop" == t && (n = "impression"), bouncex.website.gar && bouncex.campaigns[e].ga_i && bouncex.campaigns[e].ga_i[n] && bouncex.report_ga(n, bouncex.campaigns[e].ga_i.label)
        }

        function report_ga(e, t, n) {
            if (n = void 0 !== n && !!n, "string" == typeof e && "string" == typeof t) {
                var i = !1;
                if (n || (i = "Impression" == (e = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()), e = "BounceX " + e), "function" == typeof window.ga) bouncex.website.gai && window.ga("create", bouncex.website.gai), window.ga("send", "event", "BounceX", e, t, {
                    nonInteraction: i
                });
                else if ("object" === _typeof(window._gaq)) {
                    bouncex.website.gai && window._gaq.push(["_setAccount", bouncex.website.gai]);
                    var o = t.replace(/\(|\)/g, "");
                    window._gaq.push(["_trackEvent", "BounceX", e, o, , i])
                }
            }
        }

        function behavioralAudiencesReport(e, t) {
            bouncex.website.ba.enabled && "user" === t.agent && facebookReport(e, t)
        }

        function facebookReport(e, t) {
            if (1 === bouncex.website.ba.fbte && "user" === t.agent) {
                for (var n = createFacebookEvents(e, t), i = 0; i < n.length; i++) bouncex.ba.fbel.push(n[i]);
                sendEventsToFacebook(!1), "item" === e && (bouncex.ba.lip = t)
            }
        }

        function sendEventsToFacebook(t) {
            if ("undefined" != typeof fbq)
                for (; null != (e = bouncex.ba.fbel.pop());) fbq(e.eventType, e.eventName, e.eventParams), bouncex.ba.fbto && clearTimeout(bouncex.ba.fbto);
            else(null == bouncex.ba.fbto || 1 == t) && 5 > bouncex.ba.fbrc && (bouncex.ba.fbto = setTimeout2(sendEventsToFacebook, 500, !0), bouncex.ba.fbrc++)
        }

        function createFacebookEvents(e, t) {
            var n = [],
                i = {
                    "add to cart": "AddToCart",
                    "added to cart": "AddToCart",
                    "view item": "ViewContent",
                    "viewed item": "ViewContent",
                    conversion: "Purchase"
                },
                o = {
                    source: "bx",
                    bx_event_name: e
                };
            if ("conversion" !== e) {
                var a = "item:id" in t ? t["item:id"] : bouncex.ba.lip["item:id"],
                    r = "item:price" in t ? t["item:price"] : bouncex.ba.lip["item:price"],
                    s = "item:category" in t ? t["item:category"] : bouncex.ba.lip["item:category"],
                    c = "item:copy" in t ? t["item:copy"] : bouncex.ba.lip["item:copy"];
                a && (o.content_type = "product", o.content_ids = [a]), r && (o.value = r), s && (o.content_category = s), c && (o.content_name = c)
            }
            var u = void 0 === bouncex.getBounceCookie().lc ? "prospect" : "customer";
            return n.push({
                eventType: "trackCustom",
                eventName: "bx:" + e + " - " + u,
                eventParams: o
            }), e in i && n.push({
                eventType: "track",
                eventName: i[e],
                eventParams: o
            }), n
        }

        function noteCookieAdShown(e) {
            if (bouncex.website.gbi_enabled && bouncex.campaigns[e].gbi.stack_id) {
                if (bouncex.gbi.stacks[bouncex.campaigns[e].gbi.stack_id].failed) return bouncex.gbi.log(e, "NOT saving cookie data"), !1;
                bouncex.gbi.log(e, "saving cookie data")
            }
            bouncex.campaigns[e].ad_shown = !0, bouncex.cookie.campaigns[e].lavid = bouncex.cookie.vid, bouncex.cookie.campaigns[e].la = getTime2(), bouncex.cookie.campaigns[e].av = bouncex.cookie.campaigns[e].av ? bouncex.cookie.campaigns[e].av + 1 : 1, bouncex.cookie.campaigns[e].fsa || (bouncex.cookie.campaigns[e].fsa = bouncex.cookie.campaigns[e].la), bouncex.cookie.campaigns[e].as = bouncex.cookie.campaigns[e].as ? bouncex.cookie.campaigns[e].as + 1 : 1, bouncex.cookie.campaigns[e].ao = bouncex.cookie.campaigns[e].ao ? bouncex.cookie.campaigns[e].ao + 1 : 1, bouncex.campaigns[e].ap = bouncex.campaigns[e].ap ? bouncex.campaigns[e].ap + 1 : 1, "overlay" != bouncex.campaigns[e].type && "none" === bouncex.campaigns[e].coverlay || bouncex.campaigns[e].is_man || (bouncex.cookie.ao++, bouncex.pa++, bouncex.cookie.as++), setBounceCookie()
        }

        function report_endpageview(e) {
            "visibilitychange" === e.type && "hidden" !== document.visibilityState || (event_stream_report("endpageview", {
                "pageview:url": bouncex.calling_url,
                "pageview:customvariables": JSON.stringify(bouncex.vars),
                "pageview:event": e.type,
                "perf:times": JSON.stringify(bouncex.perf.timesArr)
            }), bouncex.off(bouncex.window, ".bx_endpageview"), bouncex.off(bouncex.document, ".bx_endpageview"))
        }

        function init_endpageview_event() {
            bouncex.state.mobile && bouncex.on(bouncex.document, "visibilitychange.bx_endpageview", report_endpageview), bouncex.on(bouncex.window, "beforeunload.bx_endpageview pagehide.bx_endpageview unload.bx_endpageview", report_endpageview)
        }

        function baddjs(e) {
            var t = document.createElement("script");
            t.setAttribute("src", e), t.setAttribute("type", "text/javascript"), document.getElementsByTagName("head")[0].appendChild(t)
        }

        function loadBrandStyles() {
            if (bouncex.brandStyles) {
                bouncex.brandStylesLoaded = bouncex.brandStylesLoaded || {};
                var e = "",
                    t = "";
                for (var n in bouncex.brandStyles) bouncex.brandStyles.hasOwnProperty(n) && !bouncex.brandStylesLoaded[n] && (e += bouncex.brandStyles[n], t += "-" + n, bouncex.brandStylesLoaded[n] = !0);
                e && bouncex.addCss(e, bouncex.head[0], "bx-brand" + t)
            }
        }

        function loadWebfonts() {
            if (bouncex.webfonts) {
                bouncex.fontCSSLoaded = bouncex.fontCSSLoaded || {};
                var e = "";
                for (var t in bouncex.webfonts) bouncex.webfonts.hasOwnProperty(t) && !bouncex.fontCSSLoaded[t] && (e += '<link href="//assets.bounceexchange.com/fonts/' + t + '/stylesheet.css" rel="stylesheet" type="text/css" media="all" />', bouncex.fontCSSLoaded[t] = 1);
                jQuery(e).appendTo(bouncex.head)
            }
        }

        function wndsize() {
            var e = 0,
                t = 0;
            return window.innerWidth ? (e = window.innerWidth, t = window.innerHeight) : 0 == document.documentElement.clientWidth ? (e = document.body.clientWidth, t = document.body.clientHeight) : (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight), {
                width: e,
                height: t
            }
        }

        function wndorientation() {
            return window.orientation
        }

        function make_include_string(e, t, n) {
            var i = "never" === bouncex.website.ljq ? 0 : "undefined" == typeof jQuery ? "undefined" : _typeof(jQuery),
                o = "";
            if (e) {
                var a = bouncex.cookie;
                e = "reloadCampaigns"
            } else if (e = "init1", CustomVariables.varsToExpire && 0 < CustomVariables.varsToExpire.length) {
                a = bouncex.cookie;
                CustomVariables.varsToExpire.forEach(function(e) {
                    o += "&vdef[" + e.name + "]=" + escape(e.default).replace(/\+/g, "%2B")
                })
            } else a = getBounceCookie();
            a = bouncex.stringify(a);
            var r = bouncex.stringify(bouncex.visit_cookie);
            bcx_vars = "";
            var s = {};
            for (var c in bouncex.vars) bcx_vars += "&vars[" + c + "]=" + escape(bouncex.vars[c]), s[c] = bouncex.vars[c] + "";
            bouncex.varsToAPI = JSON.stringify(s), bouncex.cookieToAPI = JSON.stringify(bouncex.cookie);
            var u = (new Date).getTimezoneOffset(),
                b = bouncex.wndsize(),
                l = b.width + "x" + b.height,
                d = getTimeMs(),
                p = bouncex.psh && bouncex.psh.supported ? 1 : 0,
                x = {
                    tojQ: i,
                    cts: d,
                    tzo: u,
                    website_id: bouncex.website.id,
                    resolution: l,
                    referrer: bouncex.referrer,
                    calling_url: bouncex.calling_url,
                    visit_cookie: escape(r),
                    cookie: escape(a) + bcx_vars.replace(/\+/g, "%2B") + o,
                    cookie_too_large: bouncex.cookie_too_large,
                    bp: p,
                    etp: JSON.stringify(getEnabledPageTypes()),
                    pts: bouncex.website.pts || "",
                    compliance_flag: bouncex.complianceFlag || ""
                },
                g = bouncex.au + "/bounce/" + e + ".js" + bouncex.utils.url.generateQuerystring(x, "?");
            if (shouldCheckDfp()) {
                var m = bouncex.gbi2.getDfpLineItemIds();
                0 < m.length && (g += "&dfp[]=".concat(m.join(",")))
            }
            if ("reloadCampaigns" == e) {
                if (g += "&pvid=" + bouncex.state.pvid, bouncex.campaigns)
                    for (var f in bouncex.campaigns) bouncex.campaigns[f].ad_visible && (g += "&vc[]=" + f);
                null != t && (g += "&rltype=" + t), null != n && (g += "&rlname=" + n), bouncex.cookie.t && (g += "&testmode=" + bouncex.cookie.t)
            }
            return bouncex.dg && bouncex.dg.hardID && (g += "&hard_id=" + bouncex.dg.hardID), bouncex.dg && bouncex.dg.softID && (g += "&soft_id=" + bouncex.dg.softID), g
        }

        function unload_campaigns() {
            if (bouncex.events)
                for (var e in bouncex.events) unload_campaign(e)
        }

        function unload_campaign(e) {
            if (bouncex.events && bouncex.events[e])
                for (var t in bouncex.events[e]) "object" == _typeof(bouncex.events[e][t]) ? jQuery(bouncex.events[e][t]).unbind(t) : "function" == typeof bouncex.events[e][t] ? bouncex.events[e][t]() : clearTimeout(bouncex.events[e][t]), delete bouncex.events[e][t]
        }

        function unhideSite() {
            clearTimeout(bouncex.usd.timeout), bouncex.usd.callback(), delete bouncex.usd
        }

        function can_show_ad(e, t) {
            if (!bouncex.campaigns[e]) return !1;
            if (bouncex.campaigns[e].qbxtest && !bouncex.campaigns[e].ad_visible) return !(!t && bouncex.campaigns[e].hasBehavioralCriteria && !behavioralCriteriaComplete(e));
            var n = e,
                i = bouncex.campaigns[e].gbi.stack_id;
            bouncex.website.gbi_enabled && i && e != bouncex.gbi.stacks[i].leader_id && (e = bouncex.gbi.stacks[i].leader_id);
            var o = getTime2();
            if (bouncex.cookie = getBounceCookie(), bouncex.cookie.lvt = bouncex.cookie.campaigns[e].lvt = o, setBounceCookie(), !t) {
                if (("none" != bouncex.campaigns[e].coverlay || "overlay" == bouncex.campaigns[e].type) && bouncex.overlay_visible) return !1;
                if (bouncex.campaigns[n].ad_visible) return !1;
                if (0 < bouncex.campaigns[e].tvao) {
                    var a = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
                    if (bouncex.campaigns[e].tvao > a) return !1
                }
                if (bouncex.campaigns[e].hasBehavioralCriteria && !behavioralCriteriaComplete(e)) return !1
            }
            return !(bouncex.campaigns[n].failed || 0 < bouncex.website.map && bouncex.pa >= bouncex.website.map && ("none" != bouncex.campaigns[e].coverlay || "overlay" == bouncex.campaigns[e].type) && !bouncex.campaigns[e].is_man || 0 < bouncex.campaigns[e].map && bouncex.campaigns[e].ap >= bouncex.campaigns[e].map || 0 < bouncex.campaigns[e].mas && bouncex.cookie.campaigns[e].as >= bouncex.campaigns[e].mas || !bouncex.campaigns[e].is_man && 0 < bouncex.website.mas && ("none" != bouncex.campaigns[e].coverlay || "overlay" == bouncex.campaigns[e].type) && bouncex.website.mas <= bouncex.cookie.as || 0 < bouncex.campaigns[e].mao && bouncex.cookie.campaigns[e].ao >= bouncex.campaigns[e].mao || !bouncex.campaigns[e].is_man && !bouncex.campaigns[e].ipc && (bouncex.cookie.es || bouncex.cookie.campaigns[e].ls || bouncex.cookie.campaigns[e].submitted) && bouncex.campaigns[e].is_ec || (bouncex.campaigns[e].is_pers || bouncex.campaigns[e].closed_no_show) && bouncex.cookie.campaigns[e].wcv || bouncex.campaigns[e].repressed || t && bouncex.campaigns[e].hasBehavioralCriteria && 0 < bouncex.campaigns[e].activation_registry.length && !bouncex.campaigns[e].realtimeArmed && behavioralCriteriaComplete(e) || bouncex.campaigns[e].purchase_no_show && bouncex.cookie.lc > bouncex.cookie.campaigns[e].la)
        }

        function close_ad(e, t, n) {
            if (bouncex.campaigns[e] && bouncex.campaigns[e].ad_visible && (bouncex.campaigns[e].ad_visible = !1, ("none" != bouncex.campaigns[e].coverlay || "overlay" == bouncex.campaigns[e].type) && (bouncex.overlay_visible = !1, bouncex.website.otc && (bouncex.timespaced = !0, bouncex.events[e].timeout_timespace = setTimeout2(function() {
                    bouncex.timespaced = !1
                }, 1e3 * bouncex.website.otc))), bouncex.campaigns[e].ng && close_ad_ng(e), unrepressCampaigns(e), event_js_eval(e, "close"), bouncex.campaigns[e].listeners.stopAll(), !t)) {
                var i = e;
                bouncex.website.gbi_enabled && bouncex.campaigns[e].gbi.stack_id && i != bouncex.gbi.stacks[bouncex.campaigns[e].gbi.stack_id].leader_id && (i = bouncex.gbi.stacks[bouncex.campaigns[e].gbi.stack_id].leader_id), bouncex.cookie.campaigns[i].wc = bouncex.cookie.campaigns[i].wcv = getTime2(), setBounceCookie(), n || report(e, "close"), "reload" === bouncex.campaigns[e].close_redirect_type ? bouncex.reload_campaigns() : bouncex.campaigns[e].close_redirect_type && bouncex.campaigns[e].close_redirect_url && (bouncex.events[e].timeout_close_redirect = teleport(bouncex.campaigns[e].close_redirect_type, bouncex.campaigns[e].close_redirect_url))
            }
        }

        function close_ad_ng(e) {
            if ("tabtitle" !== bouncex.campaigns[e].type || bouncex.campaigns[e].control || (bouncex.campaigns[e].custom_tab_title.favicon_url && TabTalk.changeFavicon(e, !0), TabTalk.cancelTitleUpdate(e)), bouncex.campaigns[e].control || bouncex.campaigns[e].noCreative && !isGbi2Campaign(e)) return !1;
            bouncex.campaigns[e].obj1.unbind("click.bcx_campaign_click_" + e, handleClick), bouncex.browser.ios && 0 < bouncex.campaigns[e].inputs.length && ("conversionbar" === bouncex.campaigns[e].type || "nanobar" === bouncex.campaigns[e].type) && (bouncex.campaigns[e].inputs.unbind(".bcx_ios_input_fix_" + e), removeIosInputFix(e));
            var t = "timeout_auto_submission_close";
            for (var n in bouncex.events[e][t] && (clearTimeout(bouncex.events[e][t]), delete bouncex.events[e][t]), bouncex.events[e]) - 1 !== n.indexOf("campaign_timer") && (clearInterval(bouncex.events[e][n]), delete bouncex.events[e][n]);
            if (close_ad_ng_post_outro(e), "no_effect" !== bouncex.campaigns[e].transitionEffect) {
                bouncex.campaigns[e].obj1.addClass("bx-impress-out");
                var i = jQuery("#bx-creative-" + e);
                bouncex.on(i, "animationend webKitAnimationEnd", function() {
                    bouncex.off(i, "animationend webKitAnimationEnd"), clearInterval(bouncex.campaigns[e].animationTimeout), bouncex.campaigns[e].obj2.removeClass("bx-impress bx-impress-out")
                }), bouncex.campaigns[e].animationTimeout = setTimeout2(function() {
                    bouncex.campaigns[e] && !bouncex.campaigns[e].ad_visible && (bouncex.off(i, "animationend webKitAnimationEnd"), bouncex.campaigns[e].obj2.removeClass("bx-impress bx-impress-out"))
                }, 1e3)
            } else bouncex.campaigns[e].obj2.removeClass("bx-impress");
            hideAlly(e), bouncex.campaigns[e].gbi && bouncex.campaigns[e].gbi.isVideo && bouncex.campaigns[e].gbi.player && bouncex.campaigns[e].gbi.player.remove()
        }

        function close_ad_ng_post_outro(e) {
            "overlay" == bouncex.campaigns[e].type && (hideAllyOverlayPostOutro(e), bouncex.browser.iphone || bouncex.browser.ipad ? (bouncex.html.removeClass("bx-client-overlay-ios"), bouncex.body.removeClass("bx-client-overlay-ios"), bouncex.window.scrollTop(bouncex.preImpressScrollY)) : (bouncex.html.removeClass("bx-client-overlay"), bouncex.body.removeClass("bx-client-overlay"))), bouncex.campaigns[e].blur_gate_enabled && ("agilityzone" == bouncex.campaigns[e].type || "annotation" == bouncex.campaigns[e].type) && blurGateRemove(e)
        }

        function trigger_ad(e, t, n) {
            var i = bouncex.campaigns[t];
            if ("manual" !== e) {
                var o = makeUniqueInstrumentId(e, n);
                if (i.hasBehavioralCriteria && (addTriggerToRegistry(o, t), i.realtimeArmed && !evaluateBehavioralTriggers([o], i.activations))) return behavioralCriteriaComplete(t)
            }
            show_ad(e, t)
        }

        function show_ad(type, ca_id) {
            var ca = bouncex.campaigns[ca_id];
            if (isGbi2Campaign(ca_id) && !ca.dynamic_anchor && bouncex.gbi2.tryPop(ca_id, type), can_show_ad(ca_id) && (!isGbi2Campaign(ca_id) || bouncex.gbi2.canShowPubCampaign(type, ca_id))) {
                if (bouncex.pa || perf.times("showad"), ca.trigger = type, bouncex.website.gbi_enabled) {
                    if (ca.gbi && ("index" == ca.gbi.provider || "tabr" == ca.gbi.provider || "dfphtml" == ca.gbi.provider || "pbm" == ca.gbi.provider || "aqbx" == ca.gbi.provider) && !ca.gbi.contentLoaded && !ca.gbi.isVideo) {
                        bouncex.gbi.clearRequestAssets(ca_id);
                        var call = "tabr" == ca.gbi.provider ? "requestCompleteMultiple" : "requestCompleteSingle";
                        return bouncex.gbi[call](ca_id, ca.gbi.html, function() {
                            ca.gbi.contentLoaded = !0, show_ad(type, ca_id), 1 < ca.gbi.step && (setJumpStep(ca_id, ca.gbi.step, !1), nextStep(ca_id))
                        }), !1
                    }
                    var checkPlayVideo = !isBxPlayerCampaign(ca_id) || void 0 === ca.video.status.isPlayable;
                    if (checkPlayVideo && isPlayableVideoCampaign(ca_id, !0)) return playVideo(ca_id, !0, type), !1
                }
                if (isGbi2Campaign(ca_id) && !ca.gbi.contentLoaded && !ca.gbi.contentLoading && "function" == typeof ca.onImpression) return ca.gbi.contentLoading = !0, ca.onImpression(function() {
                    ca.gbi.contentLoading = !1, ca.gbi.contentLoaded = !0, show_ad(type, ca_id)
                });
                if (bouncex.campaigns[ca_id].ad_visible = !0, bouncex.campaigns[ca_id].impression_click_reported = !1, bouncex.campaigns[ca_id].submitted = !1, noteCookieAdShown(ca_id), isBxPlayerCampaign(ca_id) ? bouncex.video.bxPlayerPop(ca_id, type) : report(ca_id, "pop", {
                        "pop:activation": type
                    }), bouncex.campaigns[ca_id].ng && _prepareAndDisplay(ca_id), "teleport" != bouncex.campaigns[ca_id].overlay && !bouncex.campaigns[ca_id].noCreative && (show_close(ca_id), bouncex.campaigns[ca_id].ad_auto_close)) {
                    var delay = bouncex.campaigns[ca_id].is_pers ? calc_delay_cvt(bouncex.campaigns[ca_id].ad_auto_close) : 1e3 * bouncex.campaigns[ca_id].ad_auto_close;
                    bouncex.events[ca_id].timeout_auto_close = setTimeout2(function() {
                        close_ad(ca_id)
                    }, delay)
                }
                if (bouncex.campaigns[ca_id].supress_overlay || bouncex.campaigns[ca_id].supress_top || bouncex.campaigns[ca_id].supress_bottom)
                    for (var nca_id in bouncex.campaigns) nca_id != ca_id && (bouncex.campaigns[ca_id].supress_overlay && ("none" != bouncex.campaigns[nca_id].coverlay || "overlay" == bouncex.campaigns[nca_id].type) || bouncex.campaigns[ca_id].supress_top && ("none" != bouncex.campaigns[nca_id].ctop || "nanobar" == bouncex.campaigns[nca_id].type) || bouncex.campaigns[ca_id].supress_bottom && ("none" != bouncex.campaigns[nca_id].cbottom || "conversionbar" == bouncex.campaigns[nca_id].type)) && (bouncex.campaigns[nca_id].supressed_by_ca_id = ca_id, close_ad(nca_id, !0));
                if (repressCampaigns(ca_id), bouncex.usd && unhideSite(), event_js_eval(ca_id, "impression"), bouncex.campaigns[ca_id].osfn_website) try {
                    eval(bouncex.campaigns[ca_id].osfn_website)
                } catch (e) {
                    bouncex.err(e, {
                        source: "osfn_website",
                        ca_id: ca_id
                    })
                }
            }
        }

        function repressCampaigns(e) {
            if (bouncex.campaigns[e].repress_overlay || bouncex.campaigns[e].repress_top || bouncex.campaigns[e].repress_bottom)
                for (var t in bouncex.campaigns) t != e && (bouncex.campaigns[e].repress_overlay && ("none" != bouncex.campaigns[t].coverlay || "overlay" == bouncex.campaigns[t].type) || bouncex.campaigns[e].repress_top && ("none" != bouncex.campaigns[t].ctop || "nanobar" == bouncex.campaigns[t].type) || bouncex.campaigns[e].repress_bottom && ("none" != bouncex.campaigns[t].cbottom || "conversionbar" == bouncex.campaigns[t].type)) && (bouncex.campaigns[t].repressed_by_ca_id = e, bouncex.campaigns[t].repressed = !0)
        }

        function unrepressCampaigns(e) {
            for (var t in bouncex.campaigns) bouncex.campaigns.hasOwnProperty(t) && bouncex.campaigns[t].repressed_by_ca_id === e && (delete bouncex.campaigns[t].repressed_by_ca_id, delete bouncex.campaigns[t].repressed)
        }

        function show_ad_ng(e, t) {
            _prepareAndDisplay(t)
        }

        function _prepareAndDisplay(e) {
            if (bouncex.campaigns[e].control || ("tabtitle" == bouncex.campaigns[e].type ? TabTalk.updateTitle(e) : "teleport" == bouncex.campaigns[e].type && teleport("_self", bouncex.campaigns[e].overlay_teleport_html)), bouncex.campaigns[e].control || bouncex.campaigns[e].noCreative && !isGbi2Campaign(e)) return !1;
            if (googleTrustedStoresBadgeFix(e), bouncex.campaigns[e].submittedYet && (bouncex.campaigns[e].submittedYet = !1), bouncex.events[e].edwTimeout && clearTimeout(bouncex.events[e].edwTimeout), bouncex.campaigns[e].forceLastStep = !1, bouncex.campaigns[e].current_step ? (bouncex.campaigns[e].next_step = 1, bouncex.nextStep(e)) : (bouncex.campaigns[e].next_step = 2, bouncex.campaigns[e].current_step = 1, CouponCodes.insertCodesInCurrentStep(e)), bouncex.campaigns[e].obj1.bind("click.bcx_campaign_click_" + e, {
                    ca_id: e
                }, handleClick), !(bouncex.browser.msie || bouncex.browser.ipad || bouncex.browser.iphone)) {
                var t = bouncex.campaigns[e].obj1.find(".bx-click-to-copy");
                0 < t.length && (bouncex.on(t, "click", function() {
                    document.execCommand("copy")
                }), bouncex.on(t, "copy", clickToCopy))
            }
            if (bouncex.campaigns[e].inputs = bouncex.campaigns[e].obj1.find(".bx-input, .bx-textarea"), (!bouncex.browser.msie || 8 < bouncex.browser.msie) && 0 < bouncex.campaigns[e].inputs.length && bxBind(bouncex.campaigns[e].inputs, "keydown.bcx_campaign_input_" + e + " focus.bcx_campaign_input_" + e + " blur.bcx_campaign_input_" + e + " change.bcx_campaign_input_" + e + " paste.bcx_campaign_input_" + e + " keyup.bcx_campaign_input_" + e, handleInputEvents), "overlay" == bouncex.campaigns[e].type)
                if (bouncex.overlay_visible = !0, bouncex.browser.iphone || bouncex.browser.ipad) bouncex.preImpressScrollY = bouncex.window.scrollTop(), bouncex.html.addClass("bx-client-overlay-ios"), bouncex.body.addClass("bx-client-overlay-ios"), bouncex.html[0].scrollTop = 1, bouncex.body[0].scrollTop = 1;
                else {
                    var n = getStyle(bouncex.html[0], "overflow-y");
                    "auto" == n || "scroll" == n ? bouncex.html.addClass("bx-client-overlay") : bouncex.body.addClass("bx-client-overlay")
                }
            else if ("nanobar" == bouncex.campaigns[e].type || "conversionbar" == bouncex.campaigns[e].type || "liquidscreen" == bouncex.campaigns[e].type) {
                var i = jQuery("#bx-campaign-" + e + "-clone");
                "nanobar" == bouncex.campaigns[e].type || "liquidscreen" == bouncex.campaigns[e].type ? bouncex.body.prepend(i) : "conversionbar" == bouncex.campaigns[e].type && bouncex.body.append(i)
            } else "annotation" == bouncex.campaigns[e].type && bxBind(window, "resize.bx_campaign_" + e, function() {
                alignCampaign(e)
            }, e);
            if (bouncex.browser.ios && 0 < bouncex.campaigns[e].inputs.length && ("conversionbar" === bouncex.campaigns[e].type || "nanobar" === bouncex.campaigns[e].type) && bouncex.campaigns[e].inputs.bind("touchstart.bcx_ios_input_fix_" + e, {
                    ca_id: e
                }, handleIosInputTouchStart).bind("blur.bcx_ios_input_fix_" + e, {
                    ca_id: e
                }, handleIosInputBlur), alignCampaign(e), bouncex.campaigns[e].blur_gate_enabled && ("agilityzone" == bouncex.campaigns[e].type || "annotation" == bouncex.campaigns[e].type) && blurGateAdd(e), bouncex.campaigns[e].shroud_on_hover && addShroudOnHover(e), bouncex.campaigns[e].obj2.addClass("bx-impress"), isGbi2Campaign(e) && bouncex.gbi2.handleImpression(e), showAlly(e), "no_effect" !== bouncex.campaigns[e].transitionEffect) {
                var o = jQuery("#bx-creative-" + e);
                bouncex.campaigns[e].obj1.addClass("bx-impress-in"), bouncex.on(o, "animationend webKitAnimationEnd", function() {
                    bouncex.off(o, "animationend webKitAnimationEnd"), bouncex.campaigns[e].obj1.removeClass("bx-impress-in")
                })
            }
            bouncex.events[e].ally_timeout = setTimeout2(function() {
                runCampaignTimers(e), "overlay" == bouncex.campaigns[e].type && focusOnFirstFocusableElement(e, !0)
            }, 0), isPlayableVideoCampaign(e) && playVideo(e), bouncex.website.bpush && bouncex.psh.supported && bouncex.psh.showOptinPromptIfEligible(e)
        }

        function isPlayableVideoCampaign(e, t) {
            var n = bouncex.campaigns[e],
                i = n.gbi && n.gbi.isVideo;
            if (t) {
                if (!n.video && i && n.gbi.playBeforeImpression && !n.gbi.videoResponseLoaded) return !0;
                if (isBxPlayerCampaign(e) && bouncex.video.ready(e)) return n.video.status.isPlayable = !0, !0
            } else {
                if (!isBxPlayerCampaign(e) && i && n.gbi.config.playOnImpression && n.gbi.player && "playing" !== n.gbi.player.getState()) return !0;
                if (isBxPlayerCampaign(e) && i && !n.ad_shown) return n.video.status.isPlayable = !0, !0
            }
            return !1
        }

        function playVideo(e, t, n) {
            var i = bouncex.campaigns[e];
            BrowserUtil.currentTab.isVisible() ? (i.listeners.onTabVisibilityChange(function() {
                bouncex.video.playPauseVisibility(e)
            }), t ? isBxPlayerCampaign(e) ? bouncex.video.playVideoBeforeImpression(n, e) : bouncex.gbi.playVideoBeforeImpression(n, e) : i && i.gbi && i.gbi.player ? i.gbi.player.play() : isBxPlayerCampaign(e) && bouncex.video.play(e)) : i.listeners.onTabVisible(playVideo.bind(this, e, t, n))
        }

        function runCampaignTimers(e) {
            var t = bouncex.campaigns[e].obj2.find(".bx-timer");
            if (0 < t.length) {
                var n = 0;
                t.each(function(t, i) {
                    var o = "campaign_timer_" + ++n;
                    if (!bouncex.events[e][o]) {
                        var a = jQuery(i),
                            r = a.attr("data-count-to"),
                            s = a.attr("data-count-from"),
                            c = a.attr("data-format"),
                            u = a.attr("data-on-complete"),
                            b = parseInt(a.attr("data-reset")),
                            l = /{0?days}/.test(c);
                        run_timer(r, s, c, l, u, b, a, o, e), bouncex.events[e][o] = setInterval2(function() {
                            run_timer(r, s, c, l, u, !1, a, o, e)
                        }, 1e3)
                    }
                })
            }
        }

        function blurGateAdd(e) {
            var t = bouncex.campaigns[e];
            t.blur_gate_targets = jQuery(t.callout_t + " ~ *").add(t.blur_gate_inclusions).not(t.blur_gate_exclusions).not(".bxc"), t.blur_gate_filler_placement = t.calloutTarget.next().is(t.obj1) ? t.obj1 : t.calloutTarget, t.blur_gate_filler = jQuery(), bouncex.browser.msie && 9 >= bouncex.browser.msie ? blurGateAddUsingRedactedContent(e) : 10 === bouncex.browser.msie || 11 === bouncex.browser.msie || bouncex.browser.edge ? blurGateAddUsingTextShadow(e) : blurGateAddUsingCssFilters(e)
        }

        function blurGateAddUsingRedactedContent(e) {
            var t = bouncex.campaigns[e],
                n = 0;
            t.blur_gate_targets.each(function(e, t) {
                n += jQuery(t).height()
            }), blurGateFillWithDummyContent(e, t.blur_gate_redacted_filler, n, 0);
            var i = getStyle(t.calloutTarget[0], "color") || "#000",
                o = bouncex.addCss(".bx-blur-" + e + ".bx-blur-redacted b { color:" + i + "!important; background-color:" + i + "!important; }", t.obj1[0], "bx-campaign-" + e + "-blur-redacted");
            t.blur_gate_filler = t.blur_gate_filler.add(o), t.blur_gate_targets.addClass("bx-blur-" + e + " bx-blur-hide")
        }

        function blurGateAddUsingTextShadow(e) {
            var t = bouncex.campaigns[e];
            blurGateAddFillerIfNeeded(e, t.blur_gate_lorem_filler);
            var n = getStyle(t.calloutTarget[0], "color") || "#000",
                i = bouncex.addCss(".bx-blur-" + e + ".bx-blur-textshadow { text-shadow: 0 0 8px 1px " + n + "!important; }", t.obj1[0], "bx-campaign-" + e + "-blur-shadow");
            t.blur_gate_targets.add(t.blur_gate_filler).addClass("bx-blur-" + e + " bx-blur-textshadow"), t.blur_gate_filler = t.blur_gate_filler.add(i)
        }

        function blurGateAddUsingCssFilters(e) {
            var t = bouncex.campaigns[e];
            blurGateAddFillerIfNeeded(e, t.blur_gate_lorem_filler), t.blur_gate_targets.add(t.blur_gate_filler).addClass("bx-blur-" + e + " bx-blur")
        }

        function blurGateRemove(e) {
            var t = bouncex.campaigns[e];
            t.blur_gate_filler && t.blur_gate_filler.remove(), t.blur_gate_targets && t.blur_gate_targets.removeClass("bx-blur-" + e + " bx-blur bx-blur-hide bx-blur-textshadow")
        }

        function blurGateAddFillerIfNeeded(e, t) {
            var n = bouncex.campaigns[e],
                i = 0;
            n.blur_gate_targets.each(function(e, t) {
                return (i += jQuery(t).height()) < 600
            });
            var o = 600 - i;
            0 < o && blurGateFillWithDummyContent(e, t, o, 0)
        }

        function blurGateFillWithDummyContent(e, t, n, i) {
            var o = bouncex.campaigns[e];
            if (i < n) {
                var a = o.blur_gate_filler.length % t.length,
                    r = jQuery(t[a]);
                o.blur_gate_filler_placement.after(r);
                var s = r.height();
                0 < s && (o.blur_gate_filler = o.blur_gate_filler.add(r), blurGateFillWithDummyContent(e, t, n, i + s))
            }
        }

        function addShroudOnHover(e) {
            var t, n = jQuery("#bx-creative-" + e),
                i = jQuery("#bx-hover-shroud-" + e);
            n.length && i.length && (bxBind(n, "mouseenter.bx-backdrop", function() {
                t = setTimeout2(function() {
                    bouncex.campaigns[e].obj1.addClass("bx-hover-shroud-on")
                }, 150)
            }, e), bxBind(n, "mouseleave.bx-backdrop", function() {
                clearTimeout(t), bouncex.campaigns[e].obj1.removeClass("bx-hover-shroud-on")
            }, e))
        }

        function destroy_ad(e, t) {
            bouncex.campaigns[e].mobile_interval && clearInterval(bouncex.campaigns[e].mobile_interval), unload_campaign(e), close_ad(e, !0), bouncex.campaigns[e].ng && jQuery("#bx-campaign-" + e + ",#bx-campaign-" + e + "-clone").remove(), bouncex.campaigns[e] && !t && (bouncex.campaigns[e].activeTimeCallback && ActiveTime.clearCallback(bouncex.campaigns[e].activeTimeCallback), delete bouncex.campaigns[e])
        }

        function getScript(e, t) {
            jQuery.ajax({
                url: e,
                cache: !0,
                dataType: "script",
                success: t
            })
        }

        function clickToCopy(e) {
            var t = jQuery(e.target),
                n = t.text().trim();
            "Copied!" == n ? t.text(n) : (e.originalEvent.clipboardData.setData("text/plain", n), e.preventDefault(), t.text("Copied!"), setTimeout2(function() {
                t.text(n)
            }, 1e3))
        }

        function showGenieFormErrors(e, t, n) {
            var i = !!n && n.errors;
            if (i) {
                var o = jQuery();
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var r = t.find(".bx-error-" + e + "-" + a).text(i[a]).closest(".bx-row");
                        r.addClass("bx-row-validation"), r.find(":input").attr("aria-invalid", !0).attr("aria-describedby", "bx-error-" + e + "-" + a), o = o.add(r)
                    }
                return o.eq(0).find(":input").focus(), !1
            }
            return !0
        }

        function setSubmittedCookies(e) {
            bouncex.cookie = getBounceCookie(), bouncex.campaigns[e].submitted = !0, bouncex.cookie.campaigns[e].ls = getTime2(), bouncex.campaigns[e].is_ec && (bouncex.cookie.es = !0), setBounceCookie()
        }

        function processSubmittedCampaignForm(e, t) {
            if (bouncex.carbTrap = bouncex.carbTrap || "" !== e["carb-trap"], !bouncex.carbTrap) {
                setSubmittedCookies(t), bouncex.state.redactEmail = !(!e.email || !preventUserTracking({
                    "user:email": e.email,
                    "user:source": "bouncex overlay",
                    campaignid: t
                }, "email")), bouncex.website.ibx.te && 1 == bouncex.website.ibx.te && 1 == bouncex.website.ibx.mibcx && bouncex.push(["user", {
                    email: e.email,
                    source: "bouncex overlay",
                    campaignid: t
                }]), reportGa(t, "submission"), event_js_eval(t, "submission", e), "function" == typeof bouncex.onformsubmit && bouncex.onformsubmit(e.email);
                var n = !!bouncex.campaigns[t].trigger_offsite_json && JSON.parse(bouncex.campaigns[t].trigger_offsite_json);
                n && n.campaignId && bouncex.push(["requestemail", {
                    email: e.email,
                    campaignId: n.campaignId,
                    testmode: visitorTestMode("bxdev") ? 1 : 0
                }]), post_submit_redirect(t)
            }
        }

        function processCampaignSubmitClose(e, t) {
            bouncex.campaigns[e].acas && (bouncex.events[e].timeout_auto_submission_close = setTimeout2(function() {
                bouncex.close_ad(e)
            }, 1e3 * bouncex.campaigns[e].acas)), t && bouncex.close_ad(e, !1, !0)
        }

        function processLastStep(e, t) {
            bouncex.campaigns[e].submittedYet || (bouncex.campaigns[e].submittedYet = !0, processSubmittedCampaignForm(queryStringToObject(bouncex.campaigns[e].obj1.find(".bx-input").serialize()), e), processCampaignSubmitClose(e, t))
        }

        function loadCouponsAndValidateForm(e) {
            CouponCodes.insertCodesInFormAndSubmit(e, function(e) {
                validateForm(bouncex.campaigns[e].jform, e)
            }.bind(this, e))
        }

        function validateForm(e, t) {
            if (bouncex.formSubmitting) return !1;
            bouncex.formSubmitting = !0, next_sequence_id();
            var n = bouncex.campaigns[t].next_step == bouncex.campaigns[t].numSteps && !bouncex.campaigns[t].noPostSubmit || bouncex.campaigns[t].forceLastStep,
                i = bouncex.campaigns[t].current_step == bouncex.campaigns[t].numSteps && (1 === bouncex.campaigns[t].numSteps || bouncex.campaigns[t].noPostSubmit),
                o = n || i ? 1 : 0,
                a = e.serialize();
            for (var r in a += "&step=" + bouncex.campaigns[t].current_step + "&visit_id=" + bouncex.cookie.vid + "&m=" + bouncex.cookie.m + "&d=" + bouncex.cookie.d, a += "&cookie=" + encodeURIComponent(bouncex.stringify(bouncex.cookie)), a += "&pos=overlay&step_name=before", a += "&last_step=" + o, a += "&device_id=" + bouncex.cookie.did, a += "&cts=" + getTimeMs(), a += "&pvid=" + bouncex.state.pvid, a += "&url=" + bouncex.calling_url, a += "&request_token=" + bouncex.state.request_token, bouncex.cookie.t && (a += "&testmode=" + bouncex.cookie.t), bouncex.dg && bouncex.dg.hardID && (a += "&hard_id=" + bouncex.dg.hardID), bouncex.dg && bouncex.dg.softID && (a += "&soft_id=" + bouncex.dg.softID), bouncex.vars) a += "&var[" + r + "]=" + encodeURIComponent(bouncex.vars[r]);
            var s = e.attr("action");
            e.find(".bx-row-validation").removeClass("bx-row-validation"), e.find('[aria-invalid="true"]').removeAttr("aria-invalid");
            var c = {
                url: s,
                data: a,
                dataType: "jsonp",
                contentType: "multipart/form-data",
                crossDomain: !0,
                global: !1,
                success: function(n) {
                    bouncex.formSubmitting = !1, bouncex.events[t].edwTimeout && clearTimeout(bouncex.events[t].edwTimeout), showGenieFormErrors(t, e, n) && (bouncex.nextStep(t), o && processLastStep(t, i)), jQuery.event.trigger({
                        campaign_id: t,
                        isEmptyResponse: !n,
                        response: n,
                        stepNumber: bouncex.campaigns[t].current_step,
                        type: "bxValidateFormComplete"
                    })
                },
                error: function() {
                    bouncex.formSubmitting = !1, bouncex.nextStep(t)
                }
            };
            bouncex.campaigns[t].edw || (bouncex.events[t].edwTimeout = setTimeout2(function() {
                bouncex.nextStep(t), o && processLastStep(t, i)
            }, 2500)), _records2.default.addRecord({
                group: "email_capture",
                campaignId: t,
                data: c.data
            }), jQuery.ajax(c)
        }

        function submitCampaignStep(e, t) {
            return e = t || e, 0 < bouncex.campaigns[e].jform.find(".bx-input").length ? loadCouponsAndValidateForm(e) : nextStep(e), !1
        }

        function setJumpStep(e, t, n) {
            bouncex.campaigns[e].jumpStep = t, bouncex.campaigns[e].forceLastStep = n
        }

        function nextStep(e) {
            bouncex.campaigns[e].jumpStep && (bouncex.campaigns[e].next_step = bouncex.campaigns[e].jumpStep, bouncex.campaigns[e].jumpStep = !1), bouncex.campaigns[e].next_step <= bouncex.campaigns[e].numSteps && (bouncex.campaigns[e].obj2.find(".bx-step-" + e + "-" + bouncex.campaigns[e].current_step).removeClass("bx-active-step"), bouncex.campaigns[e].obj2.find(".bx-step-" + e + "-" + bouncex.campaigns[e].next_step).addClass("bx-active-step"), cacheCreativeForm(e, bouncex.campaigns[e].next_step), bouncex.campaigns[e].obj2.removeClass("bx-active-step-" + bouncex.campaigns[e].current_step).addClass("bx-active-step-" + bouncex.campaigns[e].next_step), bouncex.campaigns[e].current_step = bouncex.campaigns[e].next_step, bouncex.campaigns[e].next_step++, CouponCodes.insertCodesInCurrentStep(e), show_close(e), alignCampaign(e), setFocusableElements(e), focusOnFirstFocusableElement(e, !0)), bouncex.website.bpush && bouncex.psh.supported && bouncex.psh.showOptinPromptIfEligible(e)
        }

        function handleInputEvents(e) {
            var t = jQuery(this),
                n = t.closest(".bx-row");
            switch (e.type) {
                case "focus":
                    n.addClass("bx-has-focus");
                    break;
                case "blur":
                    n.removeClass("bx-has-focus");
                    break;
                case "keydown":
                    t.css("min-height", t.outerHeight()), {
                        Backspace: null,
                        Tab: null,
                        Enter: null,
                        ShiftLeft: null,
                        ShiftRight: null,
                        ControlLeft: null,
                        ControlRight: null,
                        AltLeft: null,
                        AltRight: null,
                        CapsLock: null,
                        ArrowLeft: null,
                        ArrowUp: null,
                        ArrowRight: null,
                        ArrowDown: null,
                        MetaLeft: null,
                        OSLeft: null,
                        MetaRight: null,
                        OSRight: null
                    }.hasOwnProperty(e.code) && {
                        8: null,
                        9: null,
                        13: null,
                        16: null,
                        17: null,
                        18: null,
                        20: null,
                        37: null,
                        38: null,
                        39: null,
                        40: null,
                        91: null,
                        93: null,
                        224: null
                    }.hasOwnProperty(e.keyCode) || n.addClass("bx-has-text");
                    break;
                case "change":
                case "paste":
                case "keyup":
                    0 < t.val().length ? n.addClass("bx-has-text") : n.removeClass("bx-has-text")
            }
        }

        function handleClickReporting(e, t, n) {
            var i = "default" === n,
                o = 0 < bouncex.campaigns[e].jform.find(".bx-input").length;
            if ("nothing" === n || "submit" === t && i && o) return !1;
            "close" === t && i ? n = "close" : i && (n = "click"), bouncex.report(e, n)
        }

        function handleClick(e) {
            var t = e.data.ca_id,
                n = jQuery(e.target),
                i = n.attr("data-click") ? n : n.closest("#bx-campaign-" + t + " [data-click]", "#bx-campaign-" + t),
                o = i.attr("data-click"),
                a = parseInt(i.attr("data-ignore-bubbles")) && !n.is(i),
                r = i.attr("data-click-report") || "default",
                s = parseInt(i.attr("data-fb-login"));
            if (0 === i.length || a) return !0;
            if (e.preventDefault(), e.stopPropagation(), handleClickReporting(t, o, r), "close" === o) 1 == bouncex.utils.getNestedProp("bouncex.campaigns[" + t + "].video.vast.isVPAID") && bouncex.campaigns[t].video.vpaid.ad.stopAd(), bouncex.close_ad(t, !1, !0);
            else if ("nothing" === o) s && bouncex.fb.popCa(t);
            else if ("hyperlink" === o) {
                var c = i.attr("href");
                if ("_blank" === i.attr("target")) {
                    var u = window.open();
                    u.opener = null, u.location = c
                } else setTimeout2(function() {
                    window.location.href = c
                }, 300)
            } else if ("sms-optin" === o) bouncex.sms.optInMobile(t);
            else if ("trigger" === o) {
                bouncex.report(t, "click");
                var b = parseInt(i.attr("data-click-trigger"));
                bouncex.campaigns[b] || (b = by_parent_id(b)), bouncex.campaigns[b] && bouncex.show_ad(b)
            } else if ("submit" === o) {
                var l = parseInt(i.attr("data-submit-jump")),
                    d = parseInt(i.attr("data-submit-force")),
                    p = parseInt(i.attr("data-step-delay"));
                if (p) return setTimeout2(function() {
                    s ? bouncex.fb.nextStep(t, l, d) : (bouncex.setJumpStep(t, l, d), bouncex.submitCampaignStep(t))
                }, p);
                s && !p ? bouncex.fb.nextStep(t, l, d) : (bouncex.setJumpStep(t, l, d), bouncex.submitCampaignStep(t))
            }
        }

        function run_timer(e, t, n, i, o, a, r, s, c) {
            var u = bouncex.cookie.campaigns[c].fsa,
                b = getTime2(),
                l = e - b;
            "first_impression" === t && (a && 0 >= u + l && (u = bouncex.cookie.campaigns[c].fsa = b, setBounceCookie()), l += u), 0 >= l && (clearInterval(bouncex.events[c][s]), l = 0, "close" === o && close_ad(c));
            var d = n.replace(/{(.*?)}/gi, function(e, t, n, o) {
                var a = 0,
                    r = "floor",
                    s = '<span class="bx-ally-label">' + ("0days" === t ? "days" : t) + "</span>";
                return "0days" === t || "days" === t ? (r = 0 == o.split("{").length - 1 ? "ceil" : "floor", a = l / 60 / 60 / 24) : "hours" === t ? a = i ? l / 60 / 60 % 24 : l / 60 / 60 : "minutes" === t ? a = l / 60 % 60 : "seconds" === t && (a = l % 60), '<span class="bx-timer-units bx-timer-' + t + '">' + (10 > (a = Math[r](a)) && "days" != t ? "0" + a : a) + s + "</span>"
            });
            r.html(d)
        }

        function by_parent_id(e) {
            for (var t in bouncex.campaigns)
                if (bouncex.campaigns[t].pid == e) return t;
            return null
        }

        function show_close(e, t) {
            bouncex.campaigns[e].ng && show_close_ng(e, t)
        }

        function show_close_ng(e, t) {
            function n(t) {
                bouncex.campaigns[e].obj2.removeClass("bx-has-close-inside bx-has-close-outside"), t && bouncex.campaigns[e].obj2.addClass("bx-has-close-" + t)
            }
            var i = bouncex.campaigns[e].closePlacement[bouncex.campaigns[e].current_step - 1];
            t ? n(i = i || "outside") : 1 === bouncex.campaigns[e].current_step ? bouncex.campaigns[e].close_button_delay && (n(!1), bouncex.events[e].timeout_close_delay = setTimeout2(function() {
                n(bouncex.campaigns[e].closePlacement[bouncex.campaigns[e].current_step - 1]), delete bouncex.events[e].timeout_close_delay, "overlay" == bouncex.campaigns[e].type && setFocusableElements(e)
            }, 1e3 * bouncex.campaigns[e].close_button_delay)) : (bouncex.campaigns[e].show_close_step || !bouncex.events[e].timeout_close_delay) && (n(i), bouncex.events[e].timeout_close_delay && (clearTimeout(bouncex.events[e].timeout_close_delay), delete bouncex.events[e].timeout_close_delay)), "overlay" == bouncex.campaigns[e].type && setFocusableElements(e)
        }

        function getCampaignTransitionEffect(e) {
            var t = bouncex.campaigns[e].ng ? 0 : 1;
            return bouncex.campaigns[e][bouncex.cookie.campaigns[e].as > t ? "te2" : "te"]
        }

        function placeCampaign(e) {
            !bouncex.campaigns[e].ng || "agilityzone" !== bouncex.campaigns[e].type && "annotation" !== bouncex.campaigns[e].type ? bouncex.body.append(bouncex.campaigns[e].html) : placeCallout(e), bouncex.campaigns[e].placed = !0
        }

        function placeCallout(e) {
            bouncex.campaigns[e].calloutTarget = bouncex.campaigns[e].calloutTarget || jQuery(bouncex.campaigns[e].callout_t).eq(0), bouncex.campaigns[e].calloutPlacementTarget = bouncex.campaigns[e].calloutPlacementTarget || jQuery(bouncex.campaigns[e].callout_pt).eq(0);
            var t = bouncex.campaigns[e].obj1 || jQuery(bouncex.campaigns[e].html);
            "annotation" !== bouncex.campaigns[e].type && t.css({
                marginTop: parseInt(bouncex.campaigns[e].callout_voffset) + "px",
                marginLeft: parseInt(bouncex.campaigns[e].callout_hoffset) + "px"
            }), bouncex.campaigns[e].calloutPlacementTarget.length ? bouncex.campaigns[e].calloutPlacementTarget[bouncex.campaigns[e].dom_placement_method](t) : bouncex.campaigns[e].calloutTarget[bouncex.campaigns[e].dom_placement_method](t)
        }

        function alignCampaign(e) {
            var t = parseInt(bouncex.campaigns[e].callout_hoffset) || 0,
                n = parseInt(bouncex.campaigns[e].callout_voffset) || 0;
            if ("nanotab" == bouncex.campaigns[e].type || "conversioncorner" == bouncex.campaigns[e].type || "dynamicwallpaper" == bouncex.campaigns[e].type || "railbar" == bouncex.campaigns[e].type) {
                if (bouncex.campaigns[e].lastCalloutPos && bouncex.campaigns[e].obj1.removeClass("bx-fixed-" + bouncex.campaigns[e].lastCalloutPos), bouncex.campaigns[e].obj1.addClass("bx-fixed-" + bouncex.campaigns[e].callout_pos), bouncex.campaigns[e].lastCalloutPos = bouncex.campaigns[e].callout_pos, "dynamicwallpaper" == bouncex.campaigns[e].type && bouncex.website.content_width) {
                    var i = jQuery("#bx-creative-" + e).width();
                    "content_right" == bouncex.campaigns[e].header_bottom_alignment ? t += parseInt((+bouncex.website.content_width + +i) / 2) : t -= parseInt((+bouncex.website.content_width + +i) / 2)
                }
                bouncex.campaigns[e].obj1.find(".bx-slab").css("margin-left", t + "px"), -1 === bouncex.campaigns[e].callout_pos.indexOf("b") ? bouncex.campaigns[e].obj1.find(".bx-align").css("margin-top", n + "px") : bouncex.campaigns[e].obj1.find(".bx-align").css("margin-bottom", -n + "px"), "dynamicwallpaper" == bouncex.campaigns[e].type && bouncex.website.content_width && (-1 < bouncex.campaigns[e].header_bottom_alignment.indexOf("right") ? bouncex.campaigns[e].obj1.find(".bx-shroud").css({
                    left: "50%",
                    "margin-left": parseInt(bouncex.website.content_width / 2) + "px"
                }) : -1 < bouncex.campaigns[e].header_bottom_alignment.indexOf("left") && bouncex.campaigns[e].obj1.find(".bx-shroud").css({
                    left: "auto",
                    right: "50%",
                    "margin-right": parseInt(bouncex.website.content_width / 2) + "px"
                }))
            } else if ("annotation" == bouncex.campaigns[e].type && bouncex.campaigns[e].calloutTarget.length) {
                var o = bouncex.campaigns[e].calloutTarget,
                    a = bouncex.campaigns[e].dom_placement_method,
                    r = bouncex.campaigns[e].calloutPlacementTarget,
                    s = bouncex.campaigns[e].callout_anchor_pos.substr(0, 1),
                    c = bouncex.campaigns[e].callout_anchor_pos.substr(1, 2),
                    u = bouncex.campaigns[e].obj1.find(".bx-creative");
                bouncex.campaigns[e].obj1.hasClass("bx-annotation-" + bouncex.campaigns[e].callout_pos) || (bouncex.campaigns[e].lastCalloutPos && bouncex.campaigns[e].obj1.removeClass("bx-annotation-" + bouncex.campaigns[e].lastCalloutPos), bouncex.campaigns[e].obj1.addClass("bx-annotation-" + bouncex.campaigns[e].callout_pos), bouncex.campaigns[e].lastCalloutPos = bouncex.campaigns[e].callout_pos);
                var b = {
                        height: parseInt(o.height()),
                        width: parseInt(o.width()),
                        outerHeight: parseInt(o.outerHeight()),
                        outerWidth: parseInt(o.outerWidth())
                    },
                    l = {
                        x: 0,
                        y: 0
                    },
                    d = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    p = 0,
                    x = 0;
                if (r && 0 < r.length) {
                    var g = parseInt(r.outerHeight()),
                        m = r.outerWidth() / 2 + r.offset().left,
                        f = b.outerWidth / 2 + o.offset().left,
                        h = r.outerHeight() / 2 + r.offset().top,
                        v = b.outerHeight / 2 + o.offset().top;
                    p = {
                        before: o.offset().top - r.offset().top,
                        after: v + b.outerHeight / 2 - (h + g / 2),
                        prepend: o.offset().top - b.outerHeight / 2 - r.offset().top,
                        append: v + b.outerHeight - (h + g)
                    }[a], x = f - m
                }
                if (b.outerHeight - b.height || b.outerWidth - b.width)
                    for (var _ in d) d[_] = parseInt(o.css("padding-" + _)) + parseInt(o.css("border-" + _ + "-width"));
                var y = {
                        l: -d.left - b.width / 2,
                        c: (d.right - d.left) / 2,
                        r: d.right + b.width / 2
                    }[s],
                    w = {
                        t: d.top,
                        m: d.top - b.outerHeight / 2,
                        b: -d.bottom - b.height
                    }[c];
                if ("before" === a || "after" === a) {
                    var k = parseInt(o.css("marginLeft")) - parseInt(o.css("marginRight"));
                    l.x = (d.left - d.right + k) / 2, "before" === a && (l.y = -d.top), "after" === a && (l.y = b.height + d.bottom + parseInt(o.css("marginBottom")))
                }
                u.css("margin", "0 0 " + (w + l.y - p - n) + "px " + (y + l.x + x + t) + "px")
            }
        }

        function align_callout(e, t, n, i) {
            n = void 0 !== n && n;
            var o = bouncex.campaigns[t].c_button,
                a = bouncex.campaigns[t],
                r = o.offset(),
                s = parseInt(r.top),
                c = parseInt(r.left),
                u = parseInt(e.height()),
                b = parseInt(e.width()),
                l = parseInt(o.outerWidth(!1)),
                d = parseInt(o.outerHeight(!1)),
                p = a.callout_pos.substr(0, 1),
                x = a.callout_pos.substr(1, 2),
                g = a.callout_anchor_pos.substr(0, 1),
                m = a.callout_anchor_pos.substr(1, 2);
            "l" == p ? c += 0 : "c" == p ? c -= parseInt(b / 2) : "r" == p && (c -= b), "r" == g ? c += l : "c" == g ? c += parseInt(l / 2) : "l" == g && (c += 0), "t" == x ? s += 0 : "m" == x ? s -= parseInt(u / 2) : "b" == x && (s -= u), "b" == m ? s += d : "m" == m ? s += parseInt(d / 2) : "t" == m && (s += 0), s += parseInt(a.callout_voffset), c += parseInt(a.callout_hoffset), "down" == n && void 0 !== i ? e.animate({
                top: s + i + "px"
            }, 400) : "up" == n ? e.animate({
                top: s - i
            }, 400) : e.css({
                top: s + "px",
                left: c + "px"
            })
        }

        function align_callout_public(e) {
            bouncex.campaigns[e].c_button = jQuery(bouncex.campaigns[e].callout_t).eq(0), align_callout(jQuery("#campaign_" + e + "_container_callout"), e)
        }

        function handleIosInputTouchStart(e) {
            addIosInputFix(e.data.ca_id)
        }

        function addIosInputFix(e) {
            if (!bouncex.campaigns[e].hasIosInputFix) {
                var t = "conversionbar" === bouncex.campaigns[e].type ? document.body.scrollHeight : 0;
                bouncex.head.append('<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1" id="bx-ios-meta-' + e + '"/>'), window.scrollTo(0, t), bouncex.campaigns[e].hasIosInputFix = !0
            }
        }

        function handleIosInputBlur(e) {
            removeIosInputFix(e.data.ca_id)
        }

        function removeIosInputFix(e) {
            bouncex.campaigns[e].hasIosInputFix && (jQuery("#bx-ios-meta-" + e).remove(), bouncex.campaigns[e].hasIosInputFix = !1)
        }

        function showAlly(e) {
            "overlay" == bouncex.campaigns[e].type && showAllyOverlay(e), bouncex.campaigns[e].obj1.attr("aria-hidden", !1)
        }

        function showAllyOverlay(e) {
            bouncex.campaigns[e].tabDecoys.bind("focus.bcx_campaign_ally_" + e, {
                ca_id: e
            }, handleTabDecoyFocus), bouncex.body.bind("keydown.bcx_campaign_ally_" + e, {
                ca_id: e
            }, handleAllyKeyDown), bouncex.campaigns[e].focusedBeforeCampaign = jQuery(document.activeElement), bouncex.campaigns[e].siblings = bouncex.campaigns[e].obj2.siblings(), bouncex.campaigns[e].siblings.each(function() {
                var e = jQuery(this),
                    t = {
                        "aria-hidden": "true",
                        "aria-live": "off"
                    };
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = e.attr(n);
                        i && e.attr("data-bx-" + n, i), e.attr(n, t[n])
                    }
            }), setFocusableElements(e)
        }

        function hideAlly(e) {
            bouncex.campaigns[e].obj1.attr("aria-hidden", !0), "overlay" == bouncex.campaigns[e].type && hideAllyOverlay(e)
        }

        function hideAllyOverlay(e) {
            bouncex.campaigns[e].tabDecoys.unbind("focus.bcx_campaign_ally_" + e, handleTabDecoyFocus), bouncex.body.unbind("keydown.bcx_campaign_ally_" + e, handleAllyKeyDown), bouncex.campaigns[e].focusedBeforeCampaign && bouncex.campaigns[e].focusedBeforeCampaign.focus()
        }

        function hideAllyOverlayPostOutro(e) {
            bouncex.campaigns[e].siblings.each(function() {
                for (var e = jQuery(this), t = ["aria-hidden", "aria-live"], n = 0; n < t.length; n++) {
                    var i = t[n],
                        o = e.attr("data-bx-" + i);
                    o ? e.attr(i, o) : e.removeAttr(i), e.removeAttr("data-bx-" + i)
                }
            })
        }

        function setFocusableElements(e) {
            var t = bouncex.campaigns[e];
            t.focusableEls = t.obj1.find("form, :input, a").not(":hidden, .bx-ally-tab-decoy, .bx-carb-trap, .bx-ally-no-focus")
        }

        function focusOnFirstFocusableElement(e, t) {
            var n = bouncex.campaigns[e],
                i = t ? n.focusableEls.not(".bx-close-outside, .bx-close-inside") : n.focusableEls;
            i.eq(0) && i.eq(0).focus()
        }

        function focusOnLastFocusableElement(e, t) {
            var n = bouncex.campaigns[e],
                i = t ? n.focusableEls.not(".bx-close-outside, .bx-close-inside") : n.focusableEls;
            i.eq(i.length - 1) && i.eq(i.length - 1).focus()
        }

        function handleAllyKeyDown(e) {
            var t = e.data.ca_id;
            ("Escape" === e.code || 27 === e.keyCode) && bouncex.close_ad(t)
        }

        function handleTabDecoyFocus(e) {
            var t = e.data.ca_id,
                n = bouncex.campaigns[t];
            e.stopImmediatePropagation(), e.preventDefault(), this === n.tabDecoys.get(0) ? focusOnLastFocusableElement(t) : this === n.tabDecoys.get(1) && focusOnFirstFocusableElement(t)
        }

        function isGbi2Campaign(e) {
            var t = bouncex.campaigns[e];
            return !!(t && t.gbi && t.gbi.placements)
        }

        function isBxPlayerCampaign(e) {
            var t = bouncex.campaigns[e];
            return !!(t && isGbi2Campaign(e) && t.video)
        }

        function gbi2Enabled() {
            return bouncex.gbi2 && bouncex.website.gbi2Enabled
        }

        function init_activation_funcs() {
            for (var e in bouncex.campaigns) bouncex.campaigns[e].activation_registry = [], bouncex.campaigns[e].failed = !1, bouncex.events[e] = bouncex.events[e] || {}, can_show_ad(e, !0) && !bouncex.campaigns[e].ad_visible && function(e) {
                var t = 0;
                bouncex.campaigns[e].activation_delay && (t = calc_delay_cvt(bouncex.campaigns[e].activation_delay)), bouncex.events[e].timeout_activation = setTimeout2(function() {
                    init_activation(e)
                }, t)
            }(e)
        }

        function cacheCreativeForm(e, t) {
            bouncex.campaigns[e].jform = jQuery("#bx-form-" + e + "-step-" + t)
        }

        function setAccessibilityProperties(e) {
            var t = bouncex.campaigns[e];
            bouncex.browser.msie && "overlay" == t.type && t.obj2.removeAttr("role"), t.tabDecoys = t.obj1.find(".bx-ally-tab-decoy")
        }

        function setTransitionEffect(e) {
            var t = bouncex.campaigns[e];
            t.transitionEffect = getCampaignTransitionEffect(e), t.transitionEffect && "no_effect" !== t.transitionEffect && t.obj2.addClass("bx-fx-" + t.transitionEffect)
        }

        function assignDomReferencesToCampaign(e) {
            bouncex.campaigns[e].obj1 = jQuery("#bx-campaign-" + e), bouncex.campaigns[e].obj2 = jQuery(".bx-campaign-" + e)
        }

        function applyCampaignStyles(e) {
            var t = bouncex.campaigns[e];
            bouncex.addCss(t.styles, t.obj1[0], "bx-campaign-" + e)
        }

        function setCalloutTarget(e) {
            ("annotation" === e.type || "agilityzone" === e.type) && evalCalloutTarget(e)
        }

        function init_activation(e) {
            var t = bouncex.campaigns[e],
                n = bouncex.website.osre && t.osr_params_json && !t.osrItems;
            if (!t) return !1;
            if (isGbi2Campaign(e)) return gbi2Enabled() && !t.gbi.hasBegunAuction && bouncex.gbi2.initCampaign(e), !1;
            if (setCalloutTarget(t), isMissingTarget(t)) return t.failed = !0, !1;
            if (t.failed || t.placed) return !1;
            if (t.html && placeCampaign(e), bouncex.website.gbi_enabled && t.gbi && t.gbi.stack_id) {
                var i = t.gbi.stack_id;
                bouncex.gbi.stacks[i].started || initGbiStack(i)
            }
            t.ng ? (assignDomReferencesToCampaign(e), n || cacheCreativeForm(e, 1), setAccessibilityProperties(e), t.listeners = new EventListeners, event_js_eval(e, "preactivation"), t.styles && applyCampaignStyles(e), t.control || t.noCreative || setTransitionEffect(e), loadImages(t.images || [], function() {
                if (bouncex.website.gbi_enabled && t.gbi && t.gbi.provider) bouncex.gbi.log(e, "requesting v2 ad unit"), bouncex.gbi.request(e);
                else if (n)
                    if ("product" !== bouncex.website.pts) bouncex.osr.init(e, !1);
                    else {
                        if (!bouncex.osr.viewItemId) return !1;
                        bouncex.osr.init(e, bouncex.osr.viewItemId)
                    }
                else activate_campaign(e)
            })) : t.html ? isDeprecatedFunction("ca.html else block") : activate_campaign(e)
        }

        function loadImagesCount(e, t) {
            return 0 === --e && t(), e
        }

        function loadImages(e, t) {
            var n, i = n = e.length;
            if (i)
                for (var o = 0; o < n; o += 1)
                    if (8 === bouncex.browser.msie && -1 !== e[o].indexOf(".svg")) i = loadImagesCount(i, t);
                    else {
                        if ("string" == typeof e[o]) {
                            var a = e[o];
                            0 !== a.indexOf("http") && 0 !== a.indexOf("//") && (a = "//" + a);
                            var r = jQuery('<img src="' + a + '"/>')
                        } else r = jQuery(e[o]);
                        r.one("load", function() {
                            i = loadImagesCount(i, t)
                        }), r.length && r.get(0).complete && (i = loadImagesCount(i, t))
                    }
            else t()
        }

        function activate_campaign(e) {
            return bouncex.campaigns[e] && !bouncex.campaigns[e].activated && void(bouncex.campaigns[e].gbi && !isGbi2Campaign(e) ? bouncex.website.gbi_enabled ? !bouncex.campaigns[e].gbi.provider && activateGbiCampaign(e) : (bouncex.campaigns[e].failed = !0, bouncex.log(e + ": incompatible extension")) : (campaignEligible(e), activateInstruments(e)))
        }

        function activateInstruments(e) {
            bouncex.campaigns[e].hasBehavioralCriteria ? (initBehavioralCriteriaInstruments(e), onlyBehavioralCriteriaNegations(e) && (bouncex.campaigns[e].realtimeArmed = !0, initActivationInstruments(e))) : initActivationInstruments(e)
        }

        function campaignEligible(e) {
            return !bouncex.campaigns[e].activated && (bouncex.campaigns[e].activated = !0, report(e, "eligible"), void event_js_eval(e, "activation"))
        }

        function initBehavioralCriteriaInstruments(e) {
            var t = bouncex.campaigns[e].list_of_rt_activations || [];
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    i.val = parseSiteElementSelector(i.val), bouncex.ca[i.activation](i.prop, i.val, e, i.prop2, i.prop3, i.prop4, i.prop5, i.prop6)
                }
        }

        function initActivationInstruments(e) {
            var t = bouncex.campaigns[e].activations;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    i.val = parseSiteElementSelector(i.val), bouncex.ca[i.activation](i.prop, i.val, e, i.prop2, i.prop3, i.prop4, i.prop5, i.prop6)
                }
        }

        function hasBehavioralCriteria(e) {
            return 0 < bouncex.campaigns[e].list_of_rt_activations
        }

        function onlyBehavioralCriteriaNegations(e) {
            var t = bouncex.campaigns[e].list_of_rt_activations,
                n = bouncex.campaigns[e].activations_rt;
            return !!(0 < t.filter(function(e) {
                return e.shouldBeAbsent
            }).length) && (1 === n.length || 0 === t.filter(function(e) {
                return !e.shouldBeAbsent
            }).length)
        }

        function makeUniqueInstrumentId(e, t) {
            if (!t) return e;
            var n = t.slice(0, 2).concat(t.slice(3));
            return e + "_" + ["prop", "val", "prop2", "prop3", "prop4", "prop5", "prop6"].map(function(e, t) {
                return n[t]
            }).join("_")
        }

        function getUniqueInstrumentId(e) {
            return -1 === ["bounce", "manual", "control", "inter", "back", "pers"].indexOf(e.activation) ? ["activation", "prop", "val", "prop2", "prop3", "prop4", "prop5", "prop6"].map(function(t) {
                return e[t]
            }).join("_") : e.activation
        }

        function addTriggerToRegistry(e, t) {
            var n = bouncex.campaigns[t]; - 1 !== n.activation_registry.indexOf(e) || n.activation_registry.push(e)
        }

        function behavioralCriteriaComplete(e) {
            var t = bouncex.campaigns[e];
            return t.realtimeArmed ? !!BehavioralCriteria.evaluate(t.activation_registry, t.activations_rt, e) && evaluateBehavioralTriggers(t.activation_registry, t.activations) : !!BehavioralCriteria.evaluate(t.activation_registry, t.activations_rt, e) && (t.realtimeArmed = !0, initActivationInstruments(e), !1)
        }

        function evaluateBehavioralTriggers(e, t) {
            for (var n = 0; n < t.length; n++)
                if (-1 !== e.indexOf(getUniqueInstrumentId(t[n]))) return !0;
            return !1
        }

        function activation_funcs() {
            var e = Math.abs,
                t = [];
            return t.manual = function() {}, t.control = function(e, t, n) {
                trigger_ad("control", n)
            }, t.inter = function(e, t, n) {
                bouncex.cookie.vpv >= e && trigger_ad("inter", n)
            }, t.bounce = function(e, t, n) {
                bxBind("html,body", "mouseout.bouncex_show_" + n, function(e) {
                    process_mouse_out(e, n)
                }, n), (bouncex.browser.msie || bouncex.browser.safari && 50 >= bouncex.browser.safari) && bxBind("html,body", "mousemove.bouncex_show_" + n, function(e) {
                    process_mouse_move(e, n)
                }, n)
            }, t.iosbounce = function(e, t, n) {
                if (!bouncex.browser.ios) return !1;
                var i = Array.prototype.slice.call(arguments),
                    o = {
                        previousHeight: wndsize().height,
                        thresholdHeight: wndsize().height,
                        previousOrientation: wndorientation(),
                        previousPosition: bouncex.window.scrollTop(),
                        isScrollingUp: !1,
                        touchLock: !1,
                        touchEnded: !0
                    };
                bxPassiveBind(window, "touchstart.bouncex_iosbounce_" + n, function(e) {
                    o.touchLock = !0, o.touchEnded = !1, o.previousPosition = e.pageY, o.thresholdHeight = wndsize().height
                }, n), bxPassiveBind(window, "touchend.bouncex_iosbounce_" + n, function(e) {
                    o.isScrollingUp = o.previousPosition < e.pageY, o.touchEnded = !0, clearTimeout(bouncex.events[n]["touch_timeout_" + n]), bouncex.events[n]["touch_timeout_" + n] = setIosBounceTouchTimeout(o)
                }, n), bxPassiveBind(window, "resize.bouncex_iosbounce_" + n, function() {
                    o.touchLock ? (clearTimeout(bouncex.events[n]["touch_timeout_" + n]), bouncex.events[n]["touch_timeout_" + n] = setIosBounceTouchTimeout(o)) : (clearTimeout(bouncex.events[n]["orientation_timeout_" + n]), bouncex.events[n]["orientation_timeout_" + n] = setIosBounceTimeout(n, o, "yes" === t, i))
                }, n)
            }, t.mobile_bounce = function(n, i, o) {
                if (bouncex.state.mobile) {
                    if (bouncex.browser.ios) {
                        var a = bouncex.campaigns[o].activations;
                        for (var r in a)
                            if (a.hasOwnProperty(r) && "iosbounce" === a[r].activation) return !1;
                        return t.iosbounce(n, i, o)
                    }
                    var s, c = Array.prototype.slice.call(arguments),
                        u = 0,
                        b = "yes" === i,
                        l = 0;
                    clearInterval(bouncex.campaigns[o].mobile_interval), bouncex.campaigns[o].mobile_interval = setInterval2(function() {
                        var t, n = window.scrollY,
                            i = e(n - u);
                        n > u ? s = "down" : n < u && (s = "up"), t = bouncex.campaigns[o].ad_visible && b && "down" === s, !0 === bouncex.campaigns[o].ad_shown && l++, can_show_ad(o) && "up" === s && 50 < .1 * i ? (trigger_ad("mobile_bounce", o, c), !b && clearInterval(bouncex.campaigns[o].mobile_interval)) : t && 10 < l && (clearInterval(bouncex.campaigns[o].mobile_interval), close_ad(o, !0)), u = n
                    }, 100)
                }
            }, t.timer = function(e, t, n) {
                bouncex.events[n].timeout_timer = setTimeout2(function() {
                    trigger_ad("timer", n, [e, t])
                }, 1e3 * parseInt(t))
            }, t.back = function(e, t, n) {
                if (!window.angular) {
                    var i = !1;
                    if ("landing_page" == e ? bouncex.state.iol && (i = !0) : i = !0, i && history.pushState) {
                        if (!history.state || !history.state.bx_rewind)
                            if (bouncex.browser.chrome && (bouncex.browser.iphone || bouncex.browser.ipad)) {
                                var o = "touchend.bcx_rewind_fix_" + n;
                                bxBind(bouncex.body, o, function() {
                                    bouncex.body.unbind(o), history.pushState({
                                        bx_rewind: "bx_rewind1"
                                    }, "", "")
                                }, n)
                            } else history.pushState({
                                bx_rewind: "bx_rewind1"
                            }, "", decodeURIComponent(bouncex.calling_url));
                        bouncex.original_hash = window.location.hash, bxBind(bouncex.window, "popstate.bcx_popstate_" + n, function(t) {
                            history.state || "landing_page" == e && bouncex.browser.safari && history.state && history.state.bx_rewind || bouncex.original_hash !== window.location.hash || history.state && history.state.bx_rewind || "popstate" != t.type || (can_show_ad(n) ? (trigger_ad("back", n), clearTimeout(bouncex.rewind_control_timeout), bouncex.campaigns[n].control && !bouncex.rewind_variation_timeout ? bouncex.rewind_control_timeout = setTimeout2(function() {
                                history.back()
                            }, 300) : bouncex.rewind_variation_timeout = setTimeout2(function() {
                                delete bouncex.rewind_variation_timeout
                            }, 300)) : (bouncex.window.unbind("popstate.bcx_popstate_" + n), history.back()))
                        }, n)
                    }
                }
            }, t.pers = function(e, t, n) {
                var i = !1;
                bouncex.campaigns[n].is_pers = !0, "landing_page" == e && bouncex.state.iol ? i = !0 : "landing_page" != e && (i = !0), i && trigger_ad("pers", n)
            }, t.worm = function(e, t, n) {
                noteCookieAdShown(n), report(n, "pop", {
                    "pop:activation": "worm"
                }), teleport("_self", t)
            }, t.inactivity = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments),
                    o = "mousemove.bouncex_inactivity_" + n + " keydown.bouncex_inactivity_" + n + " DOMMouseScroll.bouncex_inactivity_" + n + " mousewheel.bouncex_inactivity_" + n + " mousedown.bouncex_inactivity_" + n + " touchstart.bouncex_inactivity_" + n + " touchmove.bouncex_inactivity_" + n + " focus.bouncex_inactivity_" + n;
                bxPassiveBind(window, o, function() {
                    clearTimeout(bouncex.events[n].inactivity), bouncex.events[n].inactivity = setInactivityTimeout(n, t, o, i)
                }, n), bouncex.events[n].inactivity = setInactivityTimeout(n, t, o, i)
            }, t.reactivity = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments),
                    o = "mousemove.bouncex_activity_" + n + " keydown.bouncex_activity_" + n + " DOMMouseScroll.bouncex_activity_" + n + " mousewheel.bouncex_activity_" + n + " mousedown.bouncex_activity_" + n + " touchstart.bouncex_activity_" + n + " touchmove.bouncex_activity_" + n + " focus.bouncex_activity_" + n;
                bxPassiveBind(window, o, function() {
                    clearTimeout(bouncex.events[n].reactivity), bouncex.events[n].reactivity = setReactivityTimeout(n, t, o, i)
                }, n), bouncex.events[n].reactivity = setReactivityTimeout(n, t, o, i)
            }, t.scroll = function(t, n, i, o, a) {
                var r, s, c, u = Array.prototype.slice.call(arguments),
                    b = jQuery(document).height(),
                    l = bouncex.wndsize().height,
                    d = parseInt(n);
                t = 1 === t, o = !!o && parseInt(o), c = t || o, a = !!a, bxBind(window, "scroll.bouncex_" + i, function() {
                    var n, p, x, g, m, f = (new Date).getTime(),
                        h = window.pageYOffset || document.body.scrollTop,
                        v = bouncex.wndsize(),
                        _ = v.height !== l,
                        y = v.height + h + 5 >= b || 0 >= h - 5,
                        w = bouncex.campaigns[i].ad_visible,
                        k = !c,
                        C = !c;
                    if (p = t ? (b - v.height - h) / (b - v.height) * 100 : (h + v.height) / b * 100, n = t ? p >= d : 100 < parseInt(p) + d && p > r, c && (void 0 === s || null == p)) return s = f, void(r = p);
                    c && (x = t ? (b - v.height) * (r - p) / 100 : b * (p - r) / 100, g = 100 * e(x / (f - s)), m = 0 < x, k = t && !m || !t && m, C = !o || g >= o);
                    s = f, r = p, l = v.height, !a || _ || y || (!w || k) && (!w || n) || (close_ad(i, !0), !can_show_ad(i, !0) && jQuery(window).unbind("scroll.bouncex_" + i)), C && n && k && !_ && !y && (trigger_ad("scroll", i, u), !can_show_ad(i, !0) && !a && jQuery(window).unbind("scroll.bouncex_" + i))
                }, i)
            }, t.mclick = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments);
                if ("left" == e && "teleport" == bouncex.campaigns[n].overlay && "_self" !== bouncex.campaigns[n].overlay_teleport_type) {
                    var o = function() {
                        trigger_ad("mclick", n, i)
                    };
                    bxBind(window.document, "click.bouncex_mclick_" + n, o, n)
                } else {
                    o = function(t) {
                        var o = t.keyCode || t.which || t.button;
                        t.button && 2 == t.button && (o = 3), ("left" == e && 1 == o || "any" == e) && trigger_ad("mclick", n, i), ("right" == e && 3 == o || "any" == e) && trigger_ad("mclick", n, i), can_show_ad(n, !0) || bouncex.off(jQuery(window.document), "mousedown.bouncex_mclick_" + n)
                    };
                    bxBind(window.document, "mousedown.bouncex_mclick_" + n, o, n)
                }
            }, t.hover = function(e, t, n, i) {
                var o = Array.prototype.slice.call(arguments);
                e = e ? _Mathround(1e3 * e) : 500, i = 1 === i;
                var a = t.replace(/\W/g, ""),
                    r = jQuery(t),
                    s = showHover.bind(null, n, a, o),
                    c = handleHover.bind(null, n, a, e, t, i, s),
                    u = unhandleHover.bind(null, n, a);
                bxBind(t, "mouseenter.bx" + n + a, c, n), bxBind(t, "mouseleave.bx" + n + a, u, n), bouncex.events[n]["listener_hover" + a] = function() {
                    r.unbind("mouseenter.bx" + n + a, c), r.unbind("mouseleave.bx" + n + a, u), r.unbind("mouseleave.bx" + n + a, s)
                }
            }, t.clickon = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments),
                    o = t.replace(/\W/g, ""),
                    a = function() {
                        jQuery(t).length && (trigger_ad("clickon", n, i), !can_show_ad(n, !0) && bouncex.events[n]["listener_clickon" + o]())
                    };
                void 0 === bouncex.body.on ? (bouncex.body.delegate(t, "click.bx" + n + o, a), bouncex.events[n]["listener_clickon" + o] = function() {
                    bouncex.body.undelegate(t, "click.bx" + n + o, a)
                }) : (bouncex.body.on("click.bx" + n + o, t, a), bouncex.events[n]["listener_clickon" + o] = function() {
                    bouncex.body.off("click.bx" + n + o, t, a)
                })
            }, t.change = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments),
                    o = t.replace(/\W/g, ""),
                    a = function() {
                        jQuery(t).length && (trigger_ad("change", n, i), !can_show_ad(n, !0) && bouncex.events[n]["listener_change" + o]())
                    };
                void 0 === bouncex.body.on ? (bouncex.body.delegate(t, "change.bx" + n + o, a), bouncex.events[n]["listener_change" + o] = function() {
                    bouncex.body.undelegate(t, "change.bx" + n + o, a)
                }) : (bouncex.body.on("change.bx" + n + o, t, a), bouncex.events[n]["listener_change" + o] = function() {
                    bouncex.body.off("change.bx" + n + o, t, a)
                })
            }, t.waypoint = function(e, t, n, i, o, a, r, s) {
                var c = Array.prototype.slice.call(arguments);
                o = !!o, a = !!a, r = !!r, s = !!s, offsetUnitIsPercent = !!i, e = parseInt(e) || 0;
                var u = jQuery(t).eq(0);
                if (u.length) {
                    var b, l, d, p, x = "scroll.bx.waypoint." + n + " resize.bx.waypoint." + n,
                        g = bouncex.window,
                        m = getCurrentScrollPosition(g, a),
                        f = crossedWaypointDown = hasCrossedWaypoint = hasReversedWaypoint = isScrollingDown = isScrollingUp = !1,
                        h = function() {
                            l = u.height(), d = offsetUnitIsPercent ? l * e / 100 : e, p = u.offset().top + d + (r ? 0 : l), b = getCurrentScrollPosition(g, a), isScrollingUp = b < m, isScrollingDown = b > m, f = isScrollingUp && p <= m && p > b, crossedWaypointDown = isScrollingDown && p >= m && p < b, hasCrossedWaypoint = f && o || crossedWaypointDown && !o, hasReversedWaypoint = f && !o || crossedWaypointDown && o, hasCrossedWaypoint && (trigger_ad("waypoint", n, c), !s && !can_show_ad(n, !0) && g.unbind(x)), hasReversedWaypoint && s && (close_ad(n, !0), !can_show_ad(n, !0) && g.unbind(x)), m = getCurrentScrollPosition(g, a)
                        };
                    bxBind(window, x, function() {
                        clearTimeout(bouncex.events[n].waypoint_debounce_timeout), bouncex.events[n].waypoint_debounce_timeout = setTimeout2(h, 30)
                    }, n)
                }
            }, t.highlight_text = function(e, t, n, i) {
                var o = Array.prototype.slice.call(arguments);
                e = parseInt(e) || 5, i = parseInt(i) || 5;
                var a = jQuery(t).eq(0);
                if (a.length) {
                    var r = a.text().toLowerCase().trim(),
                        s = "mouseup.bouncex_highlight_text_" + n;
                    bxBind(bouncex.body, s, function() {
                        var t = "";
                        window.getSelection ? t = window.getSelection().toString().toLowerCase() : document.selection && "Control" != document.selection.type && (t = document.selection.createRange().text.toLowerCase());
                        var a = t.substring(t.length - e, t.length),
                            c = t.substring(0, e);
                        t.length >= e && (-1 < t.indexOf(r) || -1 < r.indexOf(t) || a.length >= e && -1 < r.indexOf(a) || c.length >= e && -1 < r.indexOf(c)) && t.length <= r.length + i && (trigger_ad("highlight_text", n, o), !can_show_ad(n, !0) && bouncex.body.unbind(s))
                    }, n)
                }
            }, t.tab_unfocus = function(e, t, n, i, o) {
                var a = parseInt(e),
                    r = Array.prototype.slice.call(arguments);
                bxBind(window, "blur.bouncex_tabunfocus_" + n, function() {
                    bouncex.events[n].tabunfocus_delay = bouncex.events[n].tabunfocus_delay || setTimeout2(function() {
                        trigger_ad("tab_unfocus", n, r), bxBind(window, "focus.bouncex_tabunfocus_" + n, function() {
                            bouncex.window.unbind("focus.bouncex_tabunfocus_" + n), "yes" === i && report(n, "click"), "yes" === o && (clearTimeout(bouncex.events[n].tabunfocus_delay), delete bouncex.events[n].tabunfocus_delay, close_ad(n))
                        }, n), can_show_ad(n, !0) || bouncex.window.unbind("blur.bouncex_tabunfocus_" + n)
                    }, 1e3 * a)
                }, n)
            }, t.finished_typing = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments),
                    o = jQuery(t).eq(0);
                if (o.length) {
                    var a = t.replace(/\W/g, "");
                    bxBind(t, "keyup.bx" + n + a + ", blur.bx" + n + a, function(e) {
                        var t = jQuery(this).val();
                        handleFinishedTyping(e, n, a, o, i, t)
                    }, n)
                }
            }, t.active_time = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments);
                bouncex.campaigns[n].activityArgs = i, bouncex.campaigns[n].activeTimeCallback = ActiveTime.addCallback(t, function() {
                    trigger_ad("active_time", n, bouncex.campaigns[n].activityArgs)
                })
            }, t
        }

        function setCampaignCalloutTargetToIndex(e, t) {
            var n = bouncex.campaigns[e];
            n.calloutTarget = jQuery(n.callout_t).eq(t)
        }

        function handleHover(e, t, n, i, o, a) {
            bouncex.events[e]["timeout_" + t] = setTimeout2(function() {
                o ? bxBind(i, "mouseleave.bx" + e + t, a, e) : a()
            }, n)
        }

        function unhandleHover(e, t) {
            clearTimeout(bouncex.events[e]["timeout_" + t]), delete bouncex.events[e]["timeout_" + t]
        }

        function showHover(e, t, n) {
            trigger_ad("hover", e, n), can_show_ad(e, !0) || bouncex.events[e]["listener_hover" + t]()
        }

        function getCurrentScrollPosition(e, t) {
            return e.scrollTop() + (t ? e.height() : 0)
        }

        function setInactivityTimeout(e, t, n, i) {
            return setTimeout2(function() {
                trigger_ad("inactivity", e, i), bxPassiveUnbind(window, n)
            }, 1e3 * t)
        }

        function setReactivityTimeout(e, t, n, i) {
            return setTimeout2(function() {
                bxPassiveUnbind(window, n);
                var o = "mousemove.bouncex_reactivity_" + e + " keydown.bouncex_reactivity_" + e + " DOMMouseScroll.bouncex_reactivity_" + e + " mousewheel.bouncex_reactivity_" + e + " mousedown.bouncex_reactivity_" + e + " touchstart.bouncex_reactivity_" + e + " touchmove.bouncex_reactivity_" + e + " focus.bouncex_reactivity_" + e;
                bxPassiveBind(window, o, function() {
                    bxPassiveUnbind(window, o), trigger_ad("reactivity", e, i), can_show_ad(e, !0) && bxPassiveBind(window, n, function() {
                        clearTimeout(bouncex.events[e].reactivity), bouncex.events[e].reactivity = setReactivityTimeout(e, t, n)
                    }, e)
                }, e)
            }, 1e3 * t)
        }

        function handleFinishedTyping(e, t, n, i, o, a) {
            clearTimeout(bouncex.events[t]["typing_timeout_" + n]), "" !== a && ("Tab" !== e.code && "Enter" !== e.code || 9 !== e.keyCode && 13 !== e.keyCode) && (bouncex.events[t]["typing_timeout_" + n] = setTimeout2(function() {
                trigger_ad("finished_typing", t, o), can_show_ad(t, !0) || i.unbind("keyup.bx" + t + n + ", blur.bx" + t + n)
            }, "blur" === e.type ? 0 : 1500))
        }

        function process_mouse_move(e, t) {
            var n = e.layerY ? e.layerY : e.pageY;
            if (bouncex.direction = !!(18 >= n - (document.body.scrollTop || document.documentElement.scrollTop)) && "up", 0 < bouncex.campaigns[t].iao || 0 < bouncex.campaigns[t].rao) {
                var i = e.layerX ? e.layerX : e.pageX;
                bouncex.lastX = 0 < i ? i : 1
            }
        }

        function process_mouse_out(e, t) {
            var n = e || window.event,
                i = n.toElement,
                o = n.relatedTarget,
                a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (!(o && (o === this || bouncex.contains(this, o)) || i && "HTML" != i.nodeName))
                if (bouncex.browser.msie && "up" == bouncex.direction) {
                    if (0 < bouncex.campaigns[t].iao)
                        if (bouncex.lastX < bouncex.campaigns[t].iao) return !1;
                    if (0 < bouncex.campaigns[t].rao)
                        if (a - bouncex.lastX < bouncex.campaigns[t].rao) return !1;
                    trigger_ad("bounce", t), can_show_ad(t, !0) || jQuery("html,body").unbind("mouseout.bouncex_show_" + t)
                } else if (!bouncex.browser.msie && (5 > e.clientY && -50 < e.clientY || bouncex.browser.safari && (-32768 == e.clientY || 671 == e.clientY) && "up" == bouncex.direction)) {
                if (0 < bouncex.campaigns[t].iao)
                    if ((e.layerX ? e.layerX : e.pageX) < bouncex.campaigns[t].iao) return !1;
                if (0 < bouncex.campaigns[t].rao)
                    if (a - (e.layerX ? e.layerX : e.pageX) < bouncex.campaigns[t].rao) return !1;
                40 < bouncex.browser.chrome ? (!bouncex.events[t].bouncex_timeout && (bouncex.events[t].bouncex_timeout = setTimeout2(function() {
                    trigger_ad("bounce", t), bouncex.events[t].bouncex_timeout = !1, jQuery(document).unbind("mouseenter.bx_bouncex_mousenter_" + t), can_show_ad(t, !0) || jQuery("html,body").unbind("mouseout.bouncex_show_" + t)
                }, 0)), bxBind(document, "mouseenter.bx_bouncex_mousenter_" + t, function() {
                    jQuery(document).unbind("mouseenter.bx_bouncex_mousenter_" + t), clearTimeout(bouncex.events[t].bouncex_timeout), bouncex.events[t].bouncex_timeout = !1
                }, t)) : (trigger_ad("bounce", t), !can_show_ad(t, !0) && jQuery("html,body").unbind("mouseout.bouncex_show_" + t))
            }
        }

        function teleport(e, t) {
            return "_blank" == e ? window.open(t, e) : setTimeout2(function() {
                window.open(t, e)
            }, 300)
        }

        function setIosBounceTouchTimeout(e) {
            return setTimeout2(function() {
                e.touchEnded && (wndsize().height > e.thresholdHeight && (e.threshold = wndsize().height - e.thresholdHeight), e.touchLock = !1, e.previousHeight = wndsize().height)
            }, 900)
        }

        function setIosBounceTimeout(e, t, n, i) {
            return setTimeout2(function() {
                var o = wndsize().height;
                return t.touchLock ? void(t.previousHeight = o) : t.previousOrientation === wndorientation() ? t.isScrollingUp ? void(t.isScrollingUp = !1) : (o < t.previousHeight && t.previousHeight - o == t.threshold ? (trigger_ad("iosbounce", e, i), !n && !can_show_ad(e, !0) && (bxPassiveUnbind(window, "resize.bouncex_iosbounce_" + e), bxPassiveUnbind(window, "touchstart.bouncex_iobounce_" + e), bxPassiveUnbind(window, "touchend.bouncex_iosbounce_" + e))) : n && bouncex.campaigns[e].ad_visible && (close_ad(e, !0), !can_show_ad(e, !0) && (bxPassiveUnbind(window, "resize.bouncex_iosbounce_" + e), bxPassiveUnbind(window, "touchstart.bouncex_iobounce_" + e), bxPassiveUnbind(window, "touchend.bouncex_iosbounce_" + e))), void(t.previousHeight = o)) : (t.previousOrientation = wndorientation(), void(t.previousHeight = o))
            }, 100)
        }

        function setTimeout2(e, t) {
            return bouncex.website.fbe && 1 > t ? (tryCatch(e)(), !1) : setTimeout(tryCatch(e), t)
        }

        function evalCalloutTarget(e) {
            e.callout_t = parseSiteElementSelector(e.callout_t)
        }

        function parseSiteElementSelector(e) {
            if (e && 0 < e.length && "{" === e.charAt(0)) {
                var t = e.substr(1, e.length - 2);
                return bouncex.website.els[t]
            }
            return e
        }

        function setInterval2(e, t) {
            return setInterval(tryCatch(e), t)
        }

        function isMissingTarget(e) {
            return !("annotation" !== e.type && "agilityzone" !== e.type || e.callout_t && 0 < e.callout_t.length && 0 < jQuery(e.callout_t).length)
        }

        function loadBounceCss(e) {
            e = "function" == typeof e ? e : function() {}, bouncex.css_added ? e() : (bouncex.addCss('@charset "UTF-8";.bx-client-body,.bxc svg:not(:root){overflow:hidden}.bxc,.bxc button,.bxc select{text-transform:none}.bxc a,.bxc a:active,.bxc a:focus,.bxc a:hover,.bxc.bx-base .bx-close:hover{text-decoration:none}.bxc body{margin:0}.bxc article,.bxc aside,.bxc details,.bxc figcaption,.bxc figure,.bxc footer,.bxc header,.bxc hgroup,.bxc main,.bxc menu,.bxc nav,.bxc section,.bxc summary{display:block}.bxc audio,.bxc canvas,.bxc progress,.bxc video{display:inline-block;vertical-align:baseline}.bxc audio:not([controls]){display:none;height:0}.bxc [hidden],.bxc template{display:none}.bxc a{background-color:transparent}.bxc a:active,.bxc a:hover{outline:0}.bxc abbr[title]{border-bottom:1px dotted}.bxc b,.bxc strong{font-weight:700}.bxc dfn{font-style:italic}.bxc h1{font-size:2em;margin:.67em 0}.bxc mark{background:#ff0;color:#000}.bxc small{font-size:80%}.bxc sub,.bxc sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.bxc sup{top:-.5em}.bxc sub{bottom:-.25em}.bxc img{border:0}.bxc figure{margin:1em 40px}.bxc hr{box-sizing:content-box;height:0}.bxc pre{overflow:auto}.bxc code,.bxc kbd,.bxc pre,.bxc samp{font-family:monospace,monospace;font-size:1em}.bxc button,.bxc input,.bxc optgroup,.bxc select,.bxc textarea{color:inherit;font:inherit;margin:0}.bxc button{overflow:visible}.bxc button,.bxc input[type=button],.bxc input[type=reset],.bxc input[type=submit]{-webkit-appearance:button;cursor:pointer}.bxc button[disabled],.bxc input[disabled]{cursor:default}.bxc button::-moz-focus-inner,.bxc input::-moz-focus-inner{border:0;padding:0}.bxc input{line-height:normal}.bxc input[type=checkbox],.bxc input[type=radio]{box-sizing:border-box;padding:0}.bxc input[type=number]::-webkit-inner-spin-button,.bxc input[type=number]::-webkit-outer-spin-button{height:auto}.bxc input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}.bxc input[type=search]::-webkit-search-cancel-button,.bxc input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.bxc fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.bxc legend{border:0;padding:0}.bxc textarea{overflow:auto}.bx-client-overlay,.bx-client-overlay-ios{overflow:hidden!important}.bxc optgroup{font-weight:700}.bxc table{border-collapse:collapse;border-spacing:0}.bxc td,.bxc th{padding:0}.bxc{/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */-ms-text-size-adjust:auto;-webkit-text-size-adjust:auto;font-family:Helvetica,sans-serif;font-size:0;text-align:center;text-indent:0;text-overflow:clip;text-rendering:optimizeLegibility;text-shadow:none;line-height:1;letter-spacing:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.bx-blur,.bx-blur-redacted,.bx-blur-textshadow{-moz-user-select:none!important;-webkit-user-select:none!important;-ms-user-select:none!important;cursor:default!important;pointer-events:none!important}.bxc *{box-sizing:border-box}.bxc a{color:inherit;display:inline-block}.bxc a:focus{outline:0}.bxc form,.bxc p{margin:0}.bxc img,.bxc svg{display:inline-block;max-width:100%;height:auto}.bxc button,.bxc input,.bxc select,.bxc textarea{display:block;text-rendering:inherit}.bxc iframe{display:none}.bx-client-overlay-ios{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;-webkit-overflow-scrolling:touch!important;margin-top:0!important;margin-bottom:0!important;-webkit-transition:none!important;transition:none!important}.bx-client-body{position:fixed;-webkit-overflow-scrolling:touch;width:100%}.bxc.bx-base.bx-type-conversionbar.bx-impress-in .bx-slab,.bxc.bx-base.bx-type-conversionbar.bx-impress-out .bx-slab,.bxc.bx-base.bx-type-liquidscreen.bx-impress-in .bx-slab,.bxc.bx-base.bx-type-liquidscreen.bx-impress-out .bx-slab{overflow:hidden}.bx-blur-redacted{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)"!important;opacity:.2!important}.bx-blur-hide{display:none!important}.bx-blur-textshadow{color:transparent!important;opacity:.4!important}.bx-blur-textshadow *{color:transparent!important;text-shadow:inherit!important}.bx-blur{-webkit-filter:blur(4px)!important;filter:blur(4px)!important;opacity:.6!important}.bxc.bx-base{display:block!important;visibility:hidden}.bxc.bx-base.bx-impress{visibility:visible!important}.bxc.bx-base .bx-matte,.bxc.bx-base .bx-powered,.bxc.bx-base .bx-shroud{display:none;pointer-events:auto}.bxc.bx-base .bx-hover-shroud,.bxc.bx-base .bx-slab{pointer-events:none}.bxc.bx-base .bx-hover-shroud,.bxc.bx-base .bx-shroud{position:fixed;width:100%;height:100%;top:0;left:0}.bxc.bx-base .bx-powered{position:fixed;bottom:10px;left:10px}.bxc.bx-base .bx-align{max-width:100%;max-height:100%;pointer-events:auto}.bxc.bx-base.bx-type-conversionbar.bx-pusher.bx-impress,.bxc.bx-base.bx-type-liquidscreen.bx-pusher.bx-impress,.bxc.bx-base.bx-type-nanobar.bx-pusher.bx-impress{pointer-events:none;visibility:hidden}.bxc.bx-base .bx-creative{position:relative;display:inline-block;max-width:100%;max-height:none;height:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}.bxc.bx-base .bx-step{display:none}.bxc.bx-base .bx-step.bx-active-step{display:block}.bxc.bx-base.bx-width-full .bx-align,.bxc.bx-base.bx-width-full .bx-creative{width:100%}.bxc.bx-base.bx-width-full .bx-wrap{margin:0 auto}.bxc.bx-base.bx-width-full-content .bx-align,.bxc.bx-base.bx-width-full-content .bx-creative,.bxc.bx-base.bx-width-full-content .bx-wrap{width:100%}.bxc.bx-base.bx-type-agilityzone{display:none!important;clear:both}.bxc.bx-base.bx-type-agilityzone.bx-impress{display:block!important}.bxc.bx-base.bx-type-agilityzone.bx-hover-shroud-on .bx-creative{z-index:2147483643}.bxc.bx-base.bx-type-agilityzone .bx-hover-shroud{z-index:2147483642}.bxc.bx-base.bx-type-agilityzone .bx-close{z-index:auto}.bxc.bx-base.bx-type-annotation .bx-align{position:relative;z-index:2147483643}.bxc.bx-base.bx-type-annotation .bx-hover-shroud{z-index:2147483642}.bxc.bx-base.bx-type-annotation .bx-creative{position:absolute;bottom:0;left:50%;max-width:none}.bxc.bx-base.bx-type-annotation.bx-annotation-cm .bx-creative{-webkit-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);transform:translate(-50%,50%)}.bxc.bx-base.bx-type-annotation.bx-annotation-ct .bx-creative{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0)}.bxc.bx-base.bx-type-annotation.bx-annotation-rt .bx-creative{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.bxc.bx-base.bx-type-annotation.bx-annotation-rm .bx-creative{-webkit-transform:translate(0,50%);-ms-transform:translate(0,50%);transform:translate(0,50%)}.bxc.bx-base.bx-type-annotation.bx-annotation-rb .bx-creative{-webkit-transform:translate(0,100%);-ms-transform:translate(0,100%);transform:translate(0,100%)}.bxc.bx-base.bx-type-annotation.bx-annotation-cb .bx-creative{-webkit-transform:translate(-50%,100%);-ms-transform:translate(-50%,100%);transform:translate(-50%,100%)}.bxc.bx-base.bx-type-annotation.bx-annotation-lb .bx-creative{-webkit-transform:translate(-100%,100%);-ms-transform:translate(-100%,100%);transform:translate(-100%,100%)}.bxc.bx-base.bx-type-annotation.bx-annotation-lm .bx-creative{-webkit-transform:translate(-100%,50%);-ms-transform:translate(-100%,50%);transform:translate(-100%,50%)}.bxc.bx-base.bx-type-annotation.bx-annotation-lt .bx-creative{-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.bxc.bx-base.bx-type-conversionbar.bx-pusher.bx-impress .bx-slab{visibility:hidden;position:relative;height:auto}.bxc.bx-base.bx-type-conversionbar.bx-pusher.bx-impress .bx-align{position:relative}.bxc.bx-base.bx-type-conversionbar .bx-slab{position:fixed;bottom:0;left:0;z-index:2147483643;height:100%;height:100vh;width:100%;text-align:center;overflow-x:hidden}.bxc.bx-base.bx-type-conversionbar .bx-hover-shroud{z-index:2147483642}.bxc.bx-base.bx-type-conversionbar .bx-align{position:absolute;bottom:0;width:100%}.bxc.bx-base.bx-type-nanobar.bx-pusher.bx-impress .bx-slab{visibility:hidden;position:relative}.bxc.bx-base.bx-type-nanobar.bx-pusher.bx-impress .bx-align{position:relative}.bxc.bx-base.bx-type-nanobar .bx-slab{position:fixed;top:0;left:0;z-index:2147483643;height:100%;width:100%;text-align:center;overflow-x:hidden}.bxc.bx-base.bx-type-nanobar .bx-hover-shroud{z-index:2147483642}.bxc.bx-base.bx-type-nanobar .bx-align{position:absolute;top:0;width:100%}.bxc.bx-base.bx-type-liquidscreen{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.bxc.bx-base.bx-type-liquidscreen.bx-pusher.bx-impress .bx-slab{visibility:hidden;position:relative}.bxc.bx-base.bx-type-liquidscreen .bx-slab{position:absolute;top:0;left:0;z-index:2147483637;width:100%;overflow-x:hidden}.bxc.bx-base.bx-type-liquidscreen .bx-creative{width:100%}.bxc.bx-base.bx-type-liquidscreen .bx-creative:before{min-height:100vh}.bxc.bx-base.bx-type-conversioncorner .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper .bx-align,.bxc.bx-base.bx-type-nanotab .bx-align,.bxc.bx-base.bx-type-railbar .bx-align{display:inline-block}.bxc.bx-base.bx-type-conversioncorner .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper .bx-slab,.bxc.bx-base.bx-type-nanotab .bx-slab,.bxc.bx-base.bx-type-railbar .bx-slab{position:fixed;left:0;z-index:2147483642;width:100%;height:100%;text-align:left}.bxc.bx-base.bx-type-conversioncorner .bx-slab:before,.bxc.bx-base.bx-type-dynamicwallpaper .bx-slab:before,.bxc.bx-base.bx-type-nanotab .bx-slab:before,.bxc.bx-base.bx-type-railbar .bx-slab:before{content:"";display:inline-block;width:0;height:100%;vertical-align:middle}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-ct .bx-align,.bxc.bx-base.bx-type-conversioncorner.bx-fixed-lt .bx-align,.bxc.bx-base.bx-type-conversioncorner.bx-fixed-rt .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-ct .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-lt .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-rt .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-ct .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-lt .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-rt .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-ct .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-lt .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-rt .bx-align{vertical-align:top}.bxc.bx-base.bx-type-conversioncorner .bx-hover-shroud,.bxc.bx-base.bx-type-dynamicwallpaper .bx-hover-shroud,.bxc.bx-base.bx-type-nanotab .bx-hover-shroud,.bxc.bx-base.bx-type-railbar .bx-hover-shroud{z-index:2147483641}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-lt .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-lt .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-lt .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-lt .bx-slab{top:0;text-align:left}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-ct .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-ct .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-ct .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-ct .bx-slab{top:0;text-align:center}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-rt .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-rt .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-rt .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-rt .bx-slab{top:0;text-align:right}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-cm .bx-align,.bxc.bx-base.bx-type-conversioncorner.bx-fixed-lm .bx-align,.bxc.bx-base.bx-type-conversioncorner.bx-fixed-rm .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-cm .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-lm .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-rm .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-cm .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-lm .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-rm .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-cm .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-lm .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-rm .bx-align{vertical-align:middle}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-lm .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-lm .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-lm .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-lm .bx-slab{top:0;text-align:left}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-cm .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-cm .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-cm .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-cm .bx-slab{top:0;text-align:center}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-rm .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-rm .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-rm .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-rm .bx-slab{top:0;text-align:right}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-cb .bx-align,.bxc.bx-base.bx-type-conversioncorner.bx-fixed-lb .bx-align,.bxc.bx-base.bx-type-conversioncorner.bx-fixed-rb .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-cb .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-lb .bx-align,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-rb .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-cb .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-lb .bx-align,.bxc.bx-base.bx-type-nanotab.bx-fixed-rb .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-cb .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-lb .bx-align,.bxc.bx-base.bx-type-railbar.bx-fixed-rb .bx-align{vertical-align:bottom}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-lb .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-lb .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-lb .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-lb .bx-slab{bottom:0;height:100vh;text-align:left}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-cb .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-cb .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-cb .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-cb .bx-slab{bottom:0;height:100vh;text-align:center}.bxc.bx-base.bx-type-conversioncorner.bx-fixed-rb .bx-slab,.bxc.bx-base.bx-type-dynamicwallpaper.bx-fixed-rb .bx-slab,.bxc.bx-base.bx-type-nanotab.bx-fixed-rb .bx-slab,.bxc.bx-base.bx-type-railbar.bx-fixed-rb .bx-slab{bottom:0;height:100vh;text-align:right}.bxc.bx-base.bx-type-dynamicwallpaper .bx-align,.bxc.bx-base.bx-type-nanotab .bx-align,.bxc.bx-base.bx-type-railbar .bx-align{vertical-align:middle}.bxc.bx-base.bx-type-conversioncorner .bx-align{vertical-align:bottom}.bxc.bx-base.bx-type-dynamicwallpaper .bx-slab{z-index:2147483643}.bxc.bx-base.bx-type-dynamicwallpaper .bx-shroud{opacity:0;z-index:2147483642}.bxc.bx-base.bx-type-dynamicwallpaper.bx-impress .bx-shroud{display:block}.bxc.bx-base.bx-type-overlay .bx-slab{position:fixed;top:0;right:0;left:0;z-index:2147483645;height:100%;overflow-x:hidden;overflow-y:auto;text-align:center;pointer-events:auto}.bx-client-overlay-ios .bxc.bx-base.bx-type-overlay .bx-slab{position:absolute}.bxc.bx-base.bx-type-overlay .bx-slab:before{content:"";display:inline-block;width:0;height:100%;vertical-align:middle;margin-right:-.25em}.bxc.bx-base.bx-type-overlay.bx-impress-in .bx-slab,.bxc.bx-base.bx-type-overlay.bx-impress-out .bx-slab{overflow:hidden}.bxc.bx-base.bx-type-overlay .bx-shroud{z-index:2147483644}.bx-client-overlay-ios .bxc.bx-base.bx-type-overlay .bx-shroud{position:absolute;bottom:0;height:100vh}.bxc.bx-base.bx-type-overlay .bx-powered{z-index:2147483646}.bxc.bx-base.bx-type-overlay .bx-align{display:inline-block;vertical-align:middle;padding:6px}.bxc.bx-base.bx-type-overlay .bx-creative{z-index:2147483645}.bxc.bx-base.bx-type-overlay .bx-creative:before{min-height:300px}.bxc.bx-base.bx-type-overlay.bx-impress .bx-powered,.bxc.bx-base.bx-type-overlay.bx-impress .bx-shroud{display:block}@-webkit-keyframes bx-fx-checked-bounce{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.8);transform:scale(.8)}}@keyframes bx-fx-checked-bounce{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.8);transform:scale(.8)}}@-webkit-keyframes bx-fx-invalid-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}12.5%{-webkit-transform:translateX(-6px) rotateY(-5deg);transform:translateX(-6px) rotateY(-5deg)}37.5%{-webkit-transform:translateX(5px) rotateY(4deg);transform:translateX(5px) rotateY(4deg)}62.5%{-webkit-transform:translateX(-3px) rotateY(-2deg);transform:translateX(-3px) rotateY(-2deg)}87.5%{-webkit-transform:translateX(2px) rotateY(1deg);transform:translateX(2px) rotateY(1deg)}}@keyframes bx-fx-invalid-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}12.5%{-webkit-transform:translateX(-6px) rotateY(-5deg);transform:translateX(-6px) rotateY(-5deg)}37.5%{-webkit-transform:translateX(5px) rotateY(4deg);transform:translateX(5px) rotateY(4deg)}62.5%{-webkit-transform:translateX(-3px) rotateY(-2deg);transform:translateX(-3px) rotateY(-2deg)}87.5%{-webkit-transform:translateX(2px) rotateY(1deg);transform:translateX(2px) rotateY(1deg)}}.bxc.bx-base.bx-fx-invalid-shake .bx-slab{-webkit-perspective:1800px;perspective:1800px}.bxc.bx-base.bx-fx-invalid-shake .bx-align{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.bxc.bx-base.bx-impress.bx-fx-invalid-shake .bx-align{-webkit-animation:bx-fx-invalid-shake .4s ease-in-out;animation:bx-fx-invalid-shake .4s ease-in-out}@-webkit-keyframes bx-fx-fade{0%{opacity:0}100%{opacity:1}}@keyframes bx-fx-fade{0%{opacity:0}100%{opacity:1}}.bxc.bx-base.bx-fx-fade.bx-impress-in .bx-creative{-webkit-animation:bx-fx-fade 1s ease;animation:bx-fx-fade 1s ease}.bxc.bx-base.bx-fx-fade.bx-impress-out .bx-creative{-webkit-animation:bx-fx-fade 1s ease reverse;animation:bx-fx-fade 1s ease reverse}.bxc.bx-base .bx-shroud{background-color:#000;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";opacity:.75}.bxc.bx-base .bx-hover-shroud{background-color:#000;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;-webkit-transition:.4s opacity ease-in-out;transition:.4s opacity ease-in-out}.bxc.bx-base.bx-hover-shroud-on .bx-hover-shroud{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";opacity:.7}.bxc.bx-base .bx-creative{margin:0 auto;text-align:center;background-color:#fff;background-size:cover;background-repeat:no-repeat;background-position:50% 50%}.bxc.bx-base .bx-creative:before{content:"";display:inline-block;width:0;vertical-align:middle}.bxc.bx-base .bx-step,.bxc.bx-base .bx-wrap,.bxc.bx-base form{text-align:inherit}.bxc.bx-base .bx-wrap{display:inline-block;vertical-align:middle;margin:0 auto;width:650px;padding:10px}@media only screen{.bxc.bx-base .bx-wrap{max-width:100%}}.bxc.bx-base form:focus{outline:0}.bxc.bx-base .bx-group,.bxc.bx-base .bx-row{display:inline-block;width:100%;vertical-align:middle}.bxc.bx-base .bx-row>.bx-el,.bxc.bx-base .bx-row>:first-child{float:none;height:auto;background-position:50% 50%;background-repeat:no-repeat;background-size:cover}.bxc.bx-base .bx-row-html{font-size:16px}.bxc.bx-base .bx-row-html iframe{display:block}.bxc.bx-base .bx-row-image{line-height:0}.bxc.bx-base .bx-row-image img{width:100%}.bxc.bx-base .bx-row-text{color:#a1a1a1;font-size:14px;cursor:default;line-height:0}.bxc.bx-base .bx-row-text>*{line-height:1}.bxc.bx-base .bx-row-text a{color:inherit;display:inline-block}.bxc.bx-base .bx-row-line .bx-lineshape{height:1px;background-color:#a1a1a1}.bxc.bx-base .bx-row-select{position:relative;border:0 transparent;font-size:14px;border-radius:0;box-shadow:none;outline:0}.bxc.bx-base .bx-row-select .bx-select{position:relative;display:inline-block;width:100%;padding:1.5em;border:1px solid #c4c4c4;color:#a0a0a0;background-color:#fff}.bxc.bx-base .bx-row-select .bx-select:before{content:"\\00a0"}.bxc.bx-base .bx-row-select .bx-select:after{content:"◄►";position:absolute;top:53%;right:15px;font-size:8px;letter-spacing:2px;color:#bdbdbd;font-family:Arial;-webkit-transform:translateY(-50%) rotate(90deg);-ms-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg);pointer-events:none}.bxc.bx-base .bx-row-select .bx-select:active,.bxc.bx-base .bx-row-select .bx-select:focus{border:1px solid #91c7ed;color:#464545;background-color:#e6f5ff;outline:0}.bxc.bx-base .bx-row-select .bx-selectelem{position:absolute;top:0;right:0;bottom:0;left:0;outline:0;margin:0;width:100%;border-radius:0;border:0;padding:inherit;background-color:transparent;color:inherit;font-weight:inherit;text-transform:inherit;letter-spacing:inherit;cursor:context-menu;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none}.bxc.bx-base .bx-row-select .bx-selectelem::-ms-expand{display:none}.bxc.bx-base .bx-row-select option{color:initial;font-weight:initial;font-family:initial}.bxc.bx-base .bx-row-timer{color:#a0a0a0;font-size:24px;font-weight:100;cursor:default}.bxc.bx-base .bx-row-timer .bx-row-timer-digits{color:#a1a1a1}.bxc.bx-base .bx-row-coupon{color:#a0a0a0;font-size:24px;font-weight:100;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.bxc.bx-base .bx-row-radio .bx-label{display:inline-block;cursor:pointer;position:relative;padding:0;color:#a1a1a1;font-size:14px}.bxc.bx-base .bx-row-radio .bx-labeltext{vertical-align:middle}.bxc.bx-base .bx-row-radio .bx-radioelem{position:absolute;left:0;width:1px;height:1px;overflow:hidden;opacity:0}.bxc.bx-base .bx-row-radio .bx-radioelem+.bx-radioshape{border-radius:50%;display:inline-block;vertical-align:middle;margin-right:6px;background-color:#dedede;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.2),0 1px 0 0 rgba(255,255,255,.3);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);width:18px;height:18px}.bxc.bx-base .bx-row-radio .bx-radioelem:checked+.bx-radioshape{fill:#f3f3f3;background-color:#3A98FB;text-shadow:0 0 1px rgba(0,0,0,.2);-webkit-animation:bx-fx-checked-bounce .3s;animation:bx-fx-checked-bounce .3s}.bxc.bx-base .bx-row-radio .bx-radioelem:focus+.bx-radioshape{box-shadow:0 0 0 2px #91c7ed}.bxc.bx-base .bx-row-radio .bx-radioelem+.bx-radioshape .bx-radio-svg{display:none}.bxc.bx-base .bx-row-radio .bx-radioelem:checked+.bx-radioshape .bx-radio-svg{display:block}.bxc.bx-base .bx-row-radio.bx-radiosize-lrg .bx-radioelem+.bx-radioshape{width:24px;height:24px}.bxc.bx-base .bx-row-radio.bx-radiosize-lrgr .bx-radioelem+.bx-radioshape{width:36px;height:36px}.bxc.bx-base .bx-row-checkbox .bx-label{display:inline-block;cursor:pointer;position:relative;padding:0;color:#a1a1a1;font-size:14px}.bxc.bx-base .bx-row-checkbox .bx-labeltext{vertical-align:middle}.bxc.bx-base .bx-row-checkbox .bx-checkelem{position:absolute;left:0;width:1px;height:1px;overflow:hidden;opacity:0}.bxc.bx-base .bx-row-checkbox .bx-checkelem+.bx-checkshape{border-radius:3px;display:inline-block;vertical-align:middle;background-color:#dedede;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.2),0 1px 0 0 rgba(255,255,255,.3);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);width:18px;height:18px;margin-right:6px}.bxc.bx-base .bx-close:focus,.bxc.bx-base .bx-row-checkbox .bx-checkelem:focus+.bx-checkshape{box-shadow:0 0 0 2px #91c7ed}.bxc.bx-base .bx-row-checkbox .bx-checkelem:checked+.bx-checkshape{stroke:#f3f3f3;background-color:#3A98FB;text-shadow:0 0 1px rgba(0,0,0,.2);-webkit-animation:bx-fx-checked-bounce .25s;animation:bx-fx-checked-bounce .25s}.bxc.bx-base .bx-row-checkbox .bx-checkelem+.bx-checkshape .bx-check-svg{display:none;fill:none;stroke-width:3}.bxc.bx-base .bx-row-checkbox .bx-checkelem:checked+.bx-checkshape .bx-check-svg{display:block}.bxc.bx-base .bx-row-checkbox.bx-checksize-lrg .bx-checkelem+.bx-checkshape{width:24px;height:24px}.bxc.bx-base .bx-row-checkbox.bx-checksize-lrgr .bx-checkelem+.bx-checkshape{width:36px;height:36px}.bxc.bx-base .bx-row-checkbox.bx-check-round .bx-checkelem+.bx-checkshape .bx-check-svg{stroke-width:3;stroke-linecap:round;stroke-linejoin:round}.bxc.bx-base .bx-row-checkbox.bx-check-sharp .bx-checkelem+.bx-checkshape .bx-check-svg{stroke:none;fill:#fff}.bxc.bx-base .bx-row-submit .bx-button{width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;text-align:center;cursor:pointer;background-color:#666;border:none;font-size:20px;border-radius:0;color:#fff;padding:1em}.bxc.bx-base .bx-row-submit .bx-button:hover{outline:0}.bxc.bx-base .bx-row-submit .bx-button:focus{outline:1px}.bxc.bx-base .bx-row-submit .bx-button:active{outline:0;top:1px}.bxc.bx-base .bx-row-input [type=""],.bxc.bx-base .bx-row-input [type=color],.bxc.bx-base .bx-row-input [type=date],.bxc.bx-base .bx-row-input [type=datetime-local],.bxc.bx-base .bx-row-input [type=datetime],.bxc.bx-base .bx-row-input [type=email],.bxc.bx-base .bx-row-input [type=month],.bxc.bx-base .bx-row-input [type=number],.bxc.bx-base .bx-row-input [type=password],.bxc.bx-base .bx-row-input [type=search],.bxc.bx-base .bx-row-input [type=tel],.bxc.bx-base .bx-row-input [type=text],.bxc.bx-base .bx-row-input [type=time],.bxc.bx-base .bx-row-input [type=url],.bxc.bx-base .bx-row-input [type=week],.bxc.bx-base .bx-row-textarea .bx-textarea{width:100%;height:auto;font-size:14px;text-align:left;border-radius:0;outline:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #c4c4c4;color:#a0a0a0;background-color:#fff;padding:1.5em;background-position:10px 50%;background-repeat:no-repeat;background-size:auto;-ms-transition:none!important;-webkit-transition:padding .07s ease-in-out;transition:padding .07s ease-in-out}.bxc.bx-base .bx-row-input [type=""]::-ms-clear,.bxc.bx-base .bx-row-input [type=color]::-ms-clear,.bxc.bx-base .bx-row-input [type=date]::-ms-clear,.bxc.bx-base .bx-row-input [type=datetime-local]::-ms-clear,.bxc.bx-base .bx-row-input [type=datetime]::-ms-clear,.bxc.bx-base .bx-row-input [type=email]::-ms-clear,.bxc.bx-base .bx-row-input [type=month]::-ms-clear,.bxc.bx-base .bx-row-input [type=number]::-ms-clear,.bxc.bx-base .bx-row-input [type=password]::-ms-clear,.bxc.bx-base .bx-row-input [type=search]::-ms-clear,.bxc.bx-base .bx-row-input [type=tel]::-ms-clear,.bxc.bx-base .bx-row-input [type=text]::-ms-clear,.bxc.bx-base .bx-row-input [type=time]::-ms-clear,.bxc.bx-base .bx-row-input [type=url]::-ms-clear,.bxc.bx-base .bx-row-input [type=week]::-ms-clear,.bxc.bx-base .bx-row-textarea .bx-textarea::-ms-clear{width:0;height:0}.bxc.bx-base .bx-row-input [type=""]:hover,.bxc.bx-base .bx-row-input [type=color]:hover,.bxc.bx-base .bx-row-input [type=date]:hover,.bxc.bx-base .bx-row-input [type=datetime-local]:hover,.bxc.bx-base .bx-row-input [type=datetime]:hover,.bxc.bx-base .bx-row-input [type=email]:hover,.bxc.bx-base .bx-row-input [type=month]:hover,.bxc.bx-base .bx-row-input [type=number]:hover,.bxc.bx-base .bx-row-input [type=password]:hover,.bxc.bx-base .bx-row-input [type=search]:hover,.bxc.bx-base .bx-row-input [type=tel]:hover,.bxc.bx-base .bx-row-input [type=text]:hover,.bxc.bx-base .bx-row-input [type=time]:hover,.bxc.bx-base .bx-row-input [type=url]:hover,.bxc.bx-base .bx-row-input [type=week]:hover,.bxc.bx-base .bx-row-textarea .bx-textarea:hover{cursor:auto}.bxc.bx-base .bx-row-input [type=""]:focus,.bxc.bx-base .bx-row-input [type=color]:focus,.bxc.bx-base .bx-row-input [type=date]:focus,.bxc.bx-base .bx-row-input [type=datetime-local]:focus,.bxc.bx-base .bx-row-input [type=datetime]:focus,.bxc.bx-base .bx-row-input [type=email]:focus,.bxc.bx-base .bx-row-input [type=month]:focus,.bxc.bx-base .bx-row-input [type=number]:focus,.bxc.bx-base .bx-row-input [type=password]:focus,.bxc.bx-base .bx-row-input [type=search]:focus,.bxc.bx-base .bx-row-input [type=tel]:focus,.bxc.bx-base .bx-row-input [type=text]:focus,.bxc.bx-base .bx-row-input [type=time]:focus,.bxc.bx-base .bx-row-input [type=url]:focus,.bxc.bx-base .bx-row-input [type=week]:focus,.bxc.bx-base .bx-row-textarea .bx-textarea:focus{border-color:#91c7ed;background-color:#e6f5ff;color:#464545;outline:0}.bxc.bx-base .bx-inputwrap{position:relative}.bxc.bx-base .bx-inputwrap .bx-placeholder{position:absolute;top:7px;right:22px;left:22px;z-index:1;display:block;line-height:normal;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;pointer-events:none;-ms-transition:none!important;-webkit-transition:opacity .1s ease-out;transition:opacity .1s ease-out}.bxc.bx-base .bx-inputwrap .bx-placeholdertext{display:block;color:#a0a0a0;font-size:10px;line-height:normal;text-align:left}.bxc.bx-base .bx-vbox,.bxc.bx-base .bx-vtext{display:none;font-size:10px;text-align:left;line-height:1.35;position:absolute;z-index:3}.bxc.bx-base .bx-row.bx-has-focus .bx-placeholdertext{color:#91c7ed}.bxc.bx-base .bx-row-placeholder-top.bx-has-text .bx-placeholder{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)";opacity:1}.bxc.bx-base .bx-row-placeholder-top.bx-has-text .bx-input,.bxc.bx-base .bx-row-placeholder-top.bx-has-text .bx-textarea{padding-top:2em;padding-bottom:1em}.bxc.bx-base .bx-vtext{padding:4px;padding-bottom:inherit;bottom:0;pointer-events:none;text-transform:none;font-style:normal;font-weight:400;letter-spacing:normal;font-family:Helvetica,Arial,sans-serif}#bcx_power a,#bcx_power a span,.bxc.bx-base .bx-powered{font-family:\'Segoe UI\',\'Open Sans\',\'Helvetica Neue\',Helvetica,Arial}.bxc.bx-base .bx-vbox{padding:4px;margin-top:-4px;margin-right:-4px;margin-left:-4px;color:#e9a6a6;border:1px solid #e9a6a6;background:#faebeb}.bxc.bx-base .bx-row-validation .bx-vbox,.bxc.bx-base .bx-row-validation .bx-vtext,.bxc.bx-base .bx-row-validation.bx-row-checkbox .bx-vtext,.bxc.bx-base .bx-row-validation.bx-row-radio .bx-vtext{display:block}.bxc.bx-base .bx-row-validation{position:relative}.bxc.bx-base .bx-row-validation .bx-select,.bxc.bx-base .bx-row-validation .bx-textarea,.bxc.bx-base .bx-row-validation [type=""],.bxc.bx-base .bx-row-validation [type=color],.bxc.bx-base .bx-row-validation [type=date],.bxc.bx-base .bx-row-validation [type=datetime-local],.bxc.bx-base .bx-row-validation [type=datetime],.bxc.bx-base .bx-row-validation [type=email],.bxc.bx-base .bx-row-validation [type=month],.bxc.bx-base .bx-row-validation [type=number],.bxc.bx-base .bx-row-validation [type=password],.bxc.bx-base .bx-row-validation [type=search],.bxc.bx-base .bx-row-validation [type=tel],.bxc.bx-base .bx-row-validation [type=text],.bxc.bx-base .bx-row-validation [type=time],.bxc.bx-base .bx-row-validation [type=url],.bxc.bx-base .bx-row-validation [type=week]{border-color:#e9a6a6;background-color:#faebeb;color:#a0a0a0}.bxc.bx-base .bx-row-validation .bx-vtext{color:#E46161}.bxc.bx-base .bx-row-validation.bx-has-focus .bx-vtext{color:#91c7ed}.bxc.bx-base .bx-row-video{width:100%;height:100%}.bxc.bx-base .bx-row-video .bx-video-wrapper{position:relative;width:100%;padding-top:75%;background-color:#666}.bxc.bx-base .bx-row-video .bx-video-wrapper.bx-video-wrapper-has-focus .bx-video-controls,.bxc.bx-base .bx-row-video .bx-video-wrapper:hover .bx-video-controls{opacity:1}.bxc.bx-base .bx-row-video .bx-video-wrapper>video{position:absolute;top:0;left:0;width:100%;height:100%}.bxc.bx-base .bx-row-video .bx-video-controls{position:absolute;bottom:0;left:0;width:100%;height:44px;opacity:0;-webkit-transition:.15s opacity ease-in-out;transition:.15s opacity ease-in-out;background-image:linear-gradient(-180deg,transparent 0,#000 100%)}.bxc.bx-base .bx-row-video .bx-video-progress-wrapper{position:absolute;top:3px;left:43px;line-height:38px;color:#fff;font-size:12px;cursor:default}.bxc.bx-base .bx-row-video .bx-video-btn{position:absolute;top:3px;width:38px;height:38px;padding:5px;border:none;background-color:transparent;fill:#fff}.bxc.bx-base .bx-row-video .bx-video-btn:focus{outline:0}.bxc.bx-base .bx-row-video .bx-video-btn:hover{background-image:radial-gradient(circle at center,rgba(255,255,255,.3) 0,transparent 70%)}.bxc.bx-base .bx-row-video .bx-video-btn-playpause{left:3px}.bxc.bx-base .bx-row-video .bx-video-btn-mute{right:3px}.bxc.bx-base .bx-row-video .bx-video-btn-mute-shape,.bxc.bx-base .bx-row-video .bx-video-btn-pause-shape,.bxc.bx-base .bx-row-video .bx-video-btn-play-shape,.bxc.bx-base .bx-row-video .bx-video-btn-unmute-shape{-webkit-transition:.15s -webkit-transform ease-in-out,.15s opacity ease-in-out;transition:.15s transform ease-in-out,.15s opacity ease-in-out;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center}.bxc.bx-base .bx-row-video .bx-video-btn-play-shape{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.bxc.bx-base .bx-row-video .bx-video-btn-pause-shape,.bxc.bx-base .bx-row-video .bx-video-player-paused .bx-video-btn-play-shape{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.bxc.bx-base .bx-row-video .bx-video-btn-mute-shape,.bxc.bx-base .bx-row-video .bx-video-player-paused .bx-video-btn-pause-shape{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.bxc.bx-base .bx-row-video .bx-video-btn-unmute-shape,.bxc.bx-base .bx-row-video .bx-video-player-unmuted .bx-video-btn-mute-shape{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.bxc.bx-base .bx-row-video .bx-video-player-unmuted .bx-video-btn-unmute-shape{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.bxc.bx-base .bx-carb-trap.bx-input{opacity:0;width:0;height:0;padding:0;border:0;overflow:hidden}.bxc.bx-base .bx-gbi-frame{display:none}.bxc.bx-base.bx-impress .bx-gbi-frame{display:block}.bxc.bx-base .bx-close{z-index:2147483647;text-align:center;vertical-align:middle;display:none;position:absolute;cursor:pointer;top:12px;right:12px;width:26px;height:26px;border-width:0;border-radius:50%;padding:2px;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat;background-size:cover;stroke-width:2px;stroke:#b3b3b3;stroke-linejoin:miter;stroke-miterlimit:10;stroke-linecap:butt}.bxc.bx-base .bx-close.bx-close-outside{position:fixed}.bxc.bx-base.bx-has-close-inside .bx-close.bx-close-inside,.bxc.bx-base.bx-has-close-outside .bx-close.bx-close-outside{display:block}.bxc.bx-base .bx-close .bx-close-xsvg{display:block;stroke:inherit;stroke-width:inherit;stroke-opacity:inherit;stroke-miterlimit:inherit;stroke-linecap:inherit;stroke-linejoin:inherit;stroke-dasharray:inherit;stroke-dashoffset:inherit}.bxc.bx-base .bx-powered{color:#fff;font-size:13px}.bxc.bx-base .bx-powered a{text-decoration:none;text-transform:none}.bxc.bx-base .bx-powered a span{text-decoration:underline}.bxc.bx-base .bx-tail{position:absolute;display:block;width:30px;height:30px;fill:#fff}.bxc.bx-base .bx-tail-placement- .bx-tail,.bxc.bx-base .bx-tail-placement-none .bx-tail,.bxc.bx-base .bx-tail-placement-off .bx-tail{display:none}.bxc.bx-base .bx-tail-placement-top .bx-tail{top:0;left:50%;-webkit-transform:translate(-50%,-100%) rotate(180deg);-ms-transform:translate(-50%,-100%) rotate(180deg);transform:translate(-50%,-100%) rotate(180deg)}.bxc.bx-base .bx-tail-placement-right .bx-tail{top:50%;right:0;-webkit-transform:translate(100%,-50%) rotate(270deg);-ms-transform:translate(100%,-50%) rotate(270deg);transform:translate(100%,-50%) rotate(270deg)}.bxc.bx-base .bx-tail-placement-bottom .bx-tail{bottom:0;left:50%;-webkit-transform:translate(-50%,100%);-ms-transform:translate(-50%,100%);transform:translate(-50%,100%)}.bxc.bx-base .bx-tail-placement-left .bx-tail{top:50%;left:0;-webkit-transform:translate(-100%,-50%) rotate(90deg);-ms-transform:translate(-100%,-50%) rotate(90deg);transform:translate(-100%,-50%) rotate(90deg)}.bxc.bx-base .bx-tail-placement-topright .bx-tail{top:0;right:0;-webkit-transform:translate(50%,-50%) rotate(225deg);-ms-transform:translate(50%,-50%) rotate(225deg);transform:translate(50%,-50%) rotate(225deg)}.bxc.bx-base .bx-tail-placement-bottomright .bx-tail{top:100%;right:0;-webkit-transform:translate(50%,-50%) rotate(315deg);-ms-transform:translate(50%,-50%) rotate(315deg);transform:translate(50%,-50%) rotate(315deg)}.bxc.bx-base .bx-tail-placement-bottomleft .bx-tail{top:100%;left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.bxc.bx-base .bx-tail-placement-topleft .bx-tail{top:0;left:0;-webkit-transform:translate(-50%,-50%) rotate(135deg);-ms-transform:translate(-50%,-50%) rotate(135deg);transform:translate(-50%,-50%) rotate(135deg)}.bxc.bx-base .bx-ally-label,.bxc.bx-base .bx-ally-tab-decoy,.bxc.bx-base .bx-ally-title{width:1px;height:1px;padding:0;border:0;overflow:hidden;opacity:0;position:fixed;z-index:-1}.bcx_middle_fix,.bxc.bx-base .bx-ally-label{position:absolute}.bxc.bx-ally .bx-close:focus,.bxc.bx-ally .bx-row-checkbox .bx-checkelem:focus+.bx-checkshape,.bxc.bx-ally .bx-row-radio .bx-radioelem:focus+.bx-radioshape{box-shadow:none}.bxc.bx-ally .bx-row-checkbox .bx-checkelem:focus+.bx-checkshape,.bxc.bx-ally .bx-row-input [type=""]:focus,.bxc.bx-ally .bx-row-input [type=color]:focus,.bxc.bx-ally .bx-row-input [type=date]:focus,.bxc.bx-ally .bx-row-input [type=datetime-local]:focus,.bxc.bx-ally .bx-row-input [type=datetime]:focus,.bxc.bx-ally .bx-row-input [type=email]:focus,.bxc.bx-ally .bx-row-input [type=month]:focus,.bxc.bx-ally .bx-row-input [type=number]:focus,.bxc.bx-ally .bx-row-input [type=password]:focus,.bxc.bx-ally .bx-row-input [type=search]:focus,.bxc.bx-ally .bx-row-input [type=tel]:focus,.bxc.bx-ally .bx-row-input [type=text]:focus,.bxc.bx-ally .bx-row-input [type=time]:focus,.bxc.bx-ally .bx-row-input [type=url]:focus,.bxc.bx-ally .bx-row-input [type=week]:focus,.bxc.bx-ally .bx-row-radio .bx-radioelem:focus+.bx-radioshape,.bxc.bx-ally .bx-row-select .bx-selectelem:focus,.bxc.bx-ally .bx-row-submit .bx-button:focus,.bxc.bx-ally .bx-row-textarea .bx-textarea:focus,.bxc.bx-ally .bx-row-video .bx-video-btn:focus,.bxc.bx-ally a:focus,.bxc.bx-ally button:focus,.bxc.bx-ally form:focus{outline:#91c7ed solid 3px}.bcx_container.bcx_overlay{top:0;left:0;overflow:hidden;width:100%;height:100%;z-index:2147483645}.bcx_middle_fix{top:0;left:0;width:100%;height:100%}.bouncex_lightbox{width:100%;height:100%;opacity:0;-webkit-transition:all .4s;-moz-transition:all .4s;transition:all .4s}.bcx_container.bcx_overlay,.bouncex_header_bottom,.bouncex_header_top{position:fixed;filter:inherit}.bouncex_header_bottom,.bouncex_header_top{width:100%;z-index:2147483644}#bcx_power{position:absolute;bottom:20px;left:20px;z-index:2147483646;color:#fff!important}#bcx_power a,#bcx_power a span{color:#fff!important;font-size:15px;text-decoration:none}#bcx_power a span{text-decoration:underline}.bouncex_header_top{top:0}.bouncex_header_bottom,.bouncex_header_top{left:0}.bouncex_header_bottom.bcx_middle,.bouncex_header_top.bcx_middle{top:50%}.bouncex_header_bottom.right,.bouncex_header_top.right{right:0;left:auto}.bouncex_header_bottom.bcx_center .bcx_inner,.bouncex_header_bottom.center .bcx_inner,.bouncex_header_top.bcx_center .bcx_inner,.bouncex_header_top.center .bcx_inner{margin:0 auto}.bouncex_header_bottom.left_content,.bouncex_header_bottom.right_content,.bouncex_header_top.left_content,.bouncex_header_top.right_content{left:50%;right:auto}.bouncex_middle{position:absolute;top:50%;left:50%;z-index:2147483645}.bcx_callout{position:absolute;z-index:2147483643}.bouncex_header_bottom{bottom:0}a.bouncex_close{width:34px;height:34px;display:block;position:absolute;right:0;top:0;z-index:2147483647;background:url(https://assets.bounceexchange.com/assets/global/images/close.png) no-repeat}a.bouncex_close span{font-size:0;visibility:hidden;color:transparent}.bouncex_close{margin:-25px}.bcx_close_overlay{margin:-15px}a.bouncex_close.bcx_close_modern{margin:.65em;padding:4px;background-size:50% 50%;background-position:50% 50%;border:1px solid transparent;box-sizing:content-box}a.bouncex_close.bcx_close_modern:after{content:url(https://assets.bounceexchange.com/assets/uploads/users/279/3zsHvZVu.png);display:none}a.bouncex_close.bcx_close_modern:hover{background-color:#e79792;border-radius:50%;background-image:url(https://assets.bounceexchange.com/assets/uploads/users/279/3zsHvZVu.png)}a.bouncex_close.size_50{width:17px;height:17px;background-image:url(https://assets.bounceexchange.com/assets/global/images/close50.png)}a.bouncex_close.size_50.bcx_close_modern{width:8.5px;height:8.5px}a.bouncex_close.size_75{width:26px;height:26px;background-image:url(https://assets.bounceexchange.com/assets/global/images/close75.png)}a.bouncex_close.size_75.bcx_close_modern{width:13px;height:13px}a.bouncex_close.size_100.bcx_close_modern{width:17px;height:17px}a.bouncex_close.size_150{width:51px;height:51px;background-image:url(https://assets.bounceexchange.com/assets/global/images/close150.png)}a.bouncex_close.size_150.bcx_close_modern{width:25.5px;height:25.5px}a.bouncex_close.size_200{width:68px;height:68px;background-image:url(https://assets.bounceexchange.com/assets/global/images/close200.png)}a.bouncex_close.bcx_close_black{background-image:url(//assets.bounceexchange.com/assets/global/images/close-black.png)}a.bouncex_close.bcx_close_fill,a.bouncex_close.bcx_close_gray{background-image:url(//assets.bounceexchange.com/assets/global/images/close-gray.png)}a.bouncex_close.bcx_close_white{background-image:url(//assets.bounceexchange.com/assets/global/images/close-white.png)}a.bouncex_close.bcx_close_fill{background-color:#e4e4e4;border-radius:50%}a.bouncex_close.size_200.bcx_close_modern{width:34px;height:34px}a.bouncex_close.bcx_close_header_bottom,a.bouncex_close.bcx_close_header_top{top:5px;right:5px;margin:0}a.bouncex_close.bcx_close_header_bottom.left,a.bouncex_close.bcx_close_header_bottom.left_content,a.bouncex_close.bcx_close_header_top.left,a.bouncex_close.bcx_close_header_top.left_content,a.bouncex_close.bcx_close_overlay.top_left{left:5px}.bcx_container{display:none}.bcx_container a,.bcx_container img{border:0}.bcx_container .bcx_inner{position:relative;width:100%;height:100%}.bcx_container .bcx_inner .bcx_ie_fix{position:absolute;top:0;left:0;width:100%;height:10px;z-index:5;background-image:url(about:blank);display:block}#bcx_form .wmode.wafter,.bcx_rslide .bcx_inner{display:none}.bcx_container .bcx_inner iframe{overflow:hidden;z-index:1;top:0;left:0;width:100%;height:100%;position:absolute}.bcx_container.bcx_overlay button,.bcx_container.bcx_overlay form,.bcx_container.bcx_overlay input,.bcx_container.bcx_overlay select{margin:0;padding:0;border:none;background:0 0}.bouncex_abs_error{position:absolute;color:#ff1919;z-index:999999;font-size:12px;font-style:normal;font-family:sans-serif;font-weight:500}.bcx_container iframe{width:100%!important;height:100%!important;padding:0!important}.bcx_el select:focus option{color:#000}#bcx_frame_body{margin:0;padding:0;overflow:hidden}#bcx_frame_body a,#bcx_frame_body img{border:none}#bcx_form{position:relative}#bcx_form .wmode{position:absolute}#bcx_form .form_slide{position:relative;width:100%;height:100%}.bcx_el.dd select option:hover{background-color:#eee!important}.bcx_el input:focus{outline:0}.bcx_el select::-webkit-scrollbar{-webkit-appearance:none}.bcx_el select::-webkit-scrollbar:vertical{width:11px}.bcx_el select::-webkit-scrollbar:horizontal{height:11px}.bcx_el select::-webkit-scrollbar-thumb{border-radius:8px;border:2px solid #fff;background-color:rgba(0,0,0,.5)}.bcx_el select::-webkit-scrollbar-track{background-color:#fff;border-radius:8px}.wmode{-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-ms-transform:all .5s ease-out;transition:all .5s ease-out}.bcx_fslide .wmode{left:100%}.bcx_fslide .wmode.wbefore{left:0}.bcx_ffade .wmode{opacity:.25}.bcx_ffade .wmode.wbefore{opacity:1}.bcx_r3dbrotate,.bcx_r3dlrotate,.bcx_r3dsign,.bcx_r3dslit,.bcx_rfall,.bcx_rh3dflip,.bcx_rrotate,.bcx_rslidefall,.bcx_rv3dflip{-webkit-perspective:1300px;-moz-perspective:1300px;perspective:1300px}.bcx_rblur .bcx_outer{-webkit-transform:translateY(-5%);-moz-transform:translateY(-5%);-ms-transform:translateY(-5%);transform:translateY(-5%);opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.bcx_r3dlrotate .bcx_outer,.bcx_rjustme .bcx_outer{-webkit-transition:all .3s;-moz-transition:all .3s}.bcx_rblur.bcx_after .bcx_outer{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1}.bcx_r3dlrotate .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(100px) translateX(-30%) rotateY(90deg);-moz-transform:translateZ(100px) translateX(-30%) rotateY(90deg);-ms-transform:translateZ(100px) translateX(-30%) rotateY(90deg);transform:translateZ(100px) translateX(-30%) rotateY(90deg);-webkit-transform-origin:0 100%;-moz-transform-origin:0 100%;transform-origin:0 100%;opacity:0;transition:all .3s}.bcx_r3dlrotate.bcx_after .bcx_outer{-webkit-transform:translateZ(0) translateX(0) rotateY(0);-moz-transform:translateZ(0) translateX(0) rotateY(0);-ms-transform:translateZ(0) translateX(0) rotateY(0);transform:translateZ(0) translateX(0) rotateY(0);opacity:1}.bcx_r3dbrotate .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateY(100%) rotateX(90deg);-moz-transform:translateY(100%) rotateX(90deg);-ms-transform:translateY(100%) rotateX(90deg);transform:translateY(100%) rotateX(90deg);-webkit-transform-origin:0 100%;-moz-transform-origin:0 100%;transform-origin:0 100%;opacity:0;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;transition:all .3s ease-out}.bcx_r3dbrotate.bcx_after .bcx_outer{-webkit-transform:translateY(0) rotateX(0);-moz-transform:translateY(0) rotateX(0);-ms-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0);opacity:1}.bcx_r3dslit .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(-3000px) rotateY(90deg);-moz-transform:translateZ(-3000px) rotateY(90deg);-ms-transform:translateZ(-3000px) rotateY(90deg);transform:translateZ(-3000px) rotateY(90deg);opacity:0}.bcx_r3dslit.bcx_after .bcx_outer{-webkit-animation:slit .7s forwards ease-out;-moz-animation:slit .7s forwards ease-out;animation:slit .7s forwards ease-out}@-webkit-keyframes slit{50%{-webkit-transform:translateZ(-250px) rotateY(89deg);opacity:.5;-webkit-animation-timing-function:ease-out}100%{-webkit-transform:translateZ(0) rotateY(0);opacity:1}}@-moz-keyframes slit{50%{-moz-transform:translateZ(-250px) rotateY(89deg);opacity:.5;-moz-animation-timing-function:ease-out}100%{-moz-transform:translateZ(0) rotateY(0);opacity:1}}@keyframes slit{50%{transform:translateZ(-250px) rotateY(89deg);opacity:1;animation-timing-function:ease-in}100%{transform:translateZ(0) rotateY(0);opacity:1}}.bcx_rjustme .bcx_outer{-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);opacity:0;transition:all .3s;background:0 0}.bcx_r3dsign .bcx_outer,.bcx_rv3dflip .bcx_outer{-webkit-transition:all .3s;-moz-transition:all .3s}.bcx_rjustme.bcx_after .bcx_outer{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.bcx_r3dsign .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateX(-60deg);-moz-transform:rotateX(-60deg);-ms-transform:rotateX(-60deg);transform:rotateX(-60deg);-webkit-transform-origin:50% 0;-moz-transform-origin:50% 0;transform-origin:50% 0;opacity:0;transition:all .3s}.bcx_r3dsign.bcx_after .bcx_outer{-webkit-transform:rotateX(0);-moz-transform:rotateX(0);-ms-transform:rotateX(0);transform:rotateX(0);opacity:1}.bcx_rv3dflip .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateX(-70deg);-moz-transform:rotateX(-70deg);-ms-transform:rotateX(-70deg);transform:rotateX(-70deg);transition:all .3s;opacity:0}.bcx_rv3dflip.bcx_after .bcx_outer{-webkit-transform:rotateX(0);-moz-transform:rotateX(0);-ms-transform:rotateX(0);transform:rotateX(0);opacity:1}.bcx_rh3dflip .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateY(-70deg);-moz-transform:rotateY(-70deg);-ms-transform:rotateY(-70deg);transform:rotateY(-70deg);-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s;opacity:0}.bcx_rh3dflip.bcx_after .bcx_outer{-webkit-transform:rotateY(0);-moz-transform:rotateY(0);-ms-transform:rotateY(0);transform:rotateY(0);opacity:1}.bcx_rslidefall .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(30%) translateZ(600px) rotate(10deg);-moz-transform:translate(30%) translateZ(600px) rotate(10deg);-ms-transform:translate(30%) translateZ(600px) rotate(10deg);transform:translate(30%) translateZ(600px) rotate(10deg);opacity:0}.bcx_rslidefall.bcx_after .bcx_outer{-webkit-transition:all .3s ease-in;-moz-transition:all .3s ease-in;transition:all .3s ease-in;-webkit-transform:translate(0) translateZ(0) rotate(0);-moz-transform:translate(0) translateZ(0) rotate(0);-ms-transform:translate(0) translateZ(0) rotate(0);transform:translate(0) translateZ(0) rotate(0);opacity:1}.bcx_rfall .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(600px) rotateX(20deg);-moz-transform:translateZ(600px) rotateX(20deg);-ms-transform:translateZ(600px) rotateX(20deg);transform:translateZ(600px) rotateX(20deg);opacity:0}.bcx_rfall.bcx_after .bcx_outer{-webkit-transition:all .3s ease-in;-moz-transition:all .3s ease-in;transition:all .3s ease-in;-webkit-transform:translateZ(0) rotateX(0);-moz-transform:translateZ(0) rotateX(0);-ms-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0);opacity:1}.bcx_rsuperscale .bcx_outer{-webkit-transform:scale(2);-moz-transform:scale(2);-ms-transform:scale(2);transform:scale(2);opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.bcx_rsuperscale.bcx_after .bcx_outer{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.bcx_rfadescale .bcx_outer{-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.bcx_rfadescale.bcx_after .bcx_outer{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.bcx_rrslide .bcx_outer{-webkit-transform:translateX(20%);-moz-transform:translateX(20%);-ms-transform:translateX(20%);transform:translateX(20%);opacity:0;-webkit-transition:all .3s cubic-bezier(.25,.5,.5,.9);-moz-transition:all .3s cubic-bezier(.25,.5,.5,.9);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.bcx_rrslide.bcx_after .bcx_outer{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1}.bcx_rbslide .bcx_outer{-webkit-transform:translateY(20%);-moz-transform:translateY(20%);-ms-transform:translateY(20%);transform:translateY(20%);opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.bcx_rbslide.bcx_after .bcx_outer{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1}.bcx_rnews .bcx_outer{-webkit-transform:scale(0) rotate(720deg);-moz-transform:scale(0) rotate(720deg);-ms-transform:scale(0) rotate(720deg);transform:scale(0) rotate(720deg);opacity:0;-webkit-transition:all .5s;-moz-transition:all .5s;transition:all .5s}.bcx_rgen .bcx_outer,.bcx_rscale .bcx_outer{-webkit-transition:all .3s;-moz-transition:all .3s}.bcx_rnews.bcx_after .bcx_outer{-webkit-transform:scale(1) rotate(0);-moz-transform:scale(1) rotate(0);-ms-transform:scale(1) rotate(0);transform:scale(1) rotate(0);opacity:1}.bcx_rgen .bcx_outer{opacity:0;transition:all .3s}.bcx_rgen.bcx_after .bcx_outer{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.bcx_rscale .bcx_outer{-webkit-transform:scale(4);-moz-transform:scale(2);-ms-transform:scale(2);transform:scale(2);opacity:0;transition:all .3s}.bcx_rscale.bcx_after .bcx_outer{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.bcx_rrotate .bcx_outer{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(100px) translateX(-30%) rotateY(90deg);-moz-transform:translateZ(100px) translateX(-30%) rotateY(90deg);-ms-transform:translateZ(100px) translateX(-30%) rotateY(90deg);transform:translateZ(100px) translateX(-30%) rotateY(90deg);-webkit-transform-origin:0 100%;-moz-transform-origin:0 100%;transform-origin:0 100%;opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.bcx_rrotate.bcx_after .bcx_inner{-webkit-transform:translateZ(0) translateX(0) rotateY(0);-moz-transform:translateZ(0) translateX(0) rotateY(0);-ms-transform:translateZ(0) translateX(0) rotateY(0);transform:translateZ(0) translateX(0) rotateY(0);opacity:1}.bcx_rslide.bcx_after .bcx_inner{display:block;animation:animationFrames ease 1s;animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation:animationFrames ease 1s;-webkit-animation-iteration-count:1;-webkit-animation-fill-mode:forwards;-moz-animation:animationFrames ease 1s;-moz-animation-iteration-count:1;-moz-animation-fill-mode:forwards;-o-animation:animationFrames ease 1s;-o-animation-iteration-count:1;-o-animation-fill-mode:forwards;-ms-animation:animationFrames ease 1s;-ms-animation-iteration-count:1;-ms-animation-fill-mode:forwards}.bcx_rrrslide .bcx_inner{display:none}.bcx_rrrslide.bcx_after .bcx_inner{display:block;animation:animationFramesRight ease 1s;animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation:animationFramesRight ease 1s;-webkit-animation-iteration-count:1;-webkit-animation-fill-mode:forwards;-moz-animation:animationFramesRight ease 1s;-moz-animation-iteration-count:1;-moz-animation-fill-mode:forwards;-o-animation:animationFramesRight ease 1s;-o-animation-iteration-count:1;-o-animation-fill-mode:forwards;-ms-animation:animationFramesRight ease 1s;-ms-animation-iteration-count:1;-ms-animation-fill-mode:forwards}@keyframes animationFrames{0%{left:-1500px;top:0;opacity:0;transform:rotate(0) scaleX(1) scaleY(1)}60%{left:30px;opacity:1}80%{left:-10px}100%{left:0;top:0;opacity:1;transform:rotate(0) scaleX(1) scaleY(1)}}@-moz-keyframes animationFrames{0%{left:-1500px;top:0;opacity:0;-moz-transform:rotate(0) scaleX(1) scaleY(1)}60%{left:30px;opacity:1}80%{left:-10px}100%{left:0;top:0;opacity:1;-moz-transform:rotate(0) scaleX(1) scaleY(1)}}@-webkit-keyframes animationFrames{0%{left:-1500px;top:0;opacity:0;-webkit-transform:rotate(0) scaleX(1) scaleY(1)}60%{left:30px;opacity:1}80%{left:-10px}100%{left:0;top:0;opacity:1;-webkit-transform:rotate(0) scaleX(1) scaleY(1)}}@-o-keyframes animationFrames{0%{left:-1500px;top:0;opacity:0;-o-transform:rotate(0) scaleX(1) scaleY(1)}60%{left:30px;opacity:1}80%{left:-10px}100%{left:0;top:0;opacity:1;-o-transform:rotate(0) scaleX(1) scaleY(1)}}@keyframes animationFramesRight{0%{right:-1500px;top:0;opacity:0;transform:rotate(0) scaleX(1) scaleY(1)}60%{right:30px;opacity:1}80%{right:-10px}100%{right:0;top:0;opacity:1;transform:rotate(0) scaleX(1) scaleY(1)}}@-moz-keyframes animationFramesRight{0%{right:-1500px;top:0;opacity:0;-moz-transform:rotate(0) scaleX(1) scaleY(1)}60%{right:30px;opacity:1}80%{right:-10px}100%{right:0;top:0;opacity:1;-moz-transform:rotate(0) scaleX(1) scaleY(1)}}@-webkit-keyframes animationFramesRight{0%{right:-1500px;top:0;opacity:0;-webkit-transform:rotate(0) scaleX(1) scaleY(1)}60%{right:30px;opacity:1}80%{right:-10px}100%{right:0;top:0;opacity:1;-webkit-transform:rotate(0) scaleX(1) scaleY(1)}}@-o-keyframes animationFramesRight{0%{right:-1500px;top:0;opacity:0;-o-transform:rotate(0) scaleX(1) scaleY(1)}60%{right:30px;opacity:1}80%{right:-10px}100%{right:0;top:0;opacity:1;-o-transform:rotate(0) scaleX(1) scaleY(1)}}', bouncex.head[0]), e(), bouncex.css_added = !0)
        }

        function bxBind(e, t, n, i) {
            e = jQuery(e);
            i && (bouncex.events[i][t] = e), e.bind(t, tryCatch(n, {
                source: "bxBind",
                ca_id: i
            }))
        }

        function bxPassiveBind(e, t, n, i) {
            var o = t.split(" ");
            n = tryCatch(n, {
                source: "bxPassiveBind",
                ca_id: i
            }), bouncex.passiveEventRegistry[t] = n, i && (bouncex.events[i][t] = function() {
                bxPassiveUnbind(e, t)
            });
            for (var a, r = 0, s = o.length; r < s; r++) a = o[r].split(".")[0], addEvent(e, a, n, !0)
        }

        function bxPassiveUnbind(e, t) {
            for (var n = bouncex.passiveEventRegistry[t], i = t.split(" "), o = 0, a = i.length; o < a; o++) removeEvent(e, i[o].split(".")[0], n, !0)
        }

        function addEvent(e, t, n, i) {
            e.addEventListener(t, n, !!i && {
                passive: !0,
                capture: !1
            })
        }

        function removeEvent(e, t, n, i) {
            e.removeEventListener(t, n, !!i && {
                passive: !0,
                capture: !1
            })
        }

        function calc_delay_cvt(e) {
            var t = 1e3 * (bouncex.cookie.cvt - getTime2() + e);
            return 0 > t ? 0 : t
        }

        function fs() {
            if (!bouncex.browser.msie) return !0;
            if (void 0 === bouncex.fixed_supported) try {
                bouncex.fixed_supported = isFixedSupported()
            } catch (e) {
                bouncex.fixed_supported = !0
            }
            return bouncex.fixed_supported
        }

        function isFixedSupported() {
            var e = document.body;
            if (document.createElement && e && e.appendChild && e.removeChild) {
                var t = document.createElement("div");
                if (!t.getBoundingClientRect) return null;
                t.innerHTML = "x", t.style.cssText = "position:fixed;top:100px;", e.appendChild(t);
                var n = e.style.height,
                    i = e.scrollTop;
                e.style.height = "3000px", e.scrollTop = 500;
                var o = t.getBoundingClientRect().top;
                return e.style.height = n, e.removeChild(t), e.scrollTop = i, 100 === o
            }
            return null
        }

        function getTime2() {
            var e = bouncex.server_client_time_diff ? bouncex.server_client_time_diff : 0;
            return parseInt((new Date).getTime() / 1e3) + e
        }

        function getTimeMs() {
            return (new Date).getTime()
        }

        function generateUniqueId() {
            return getTimeMs() + Math.random()
        }

        function zoomDisable() {}

        function zoomEnable() {}

        function getStyle(e, t) {
            if (e.currentStyle) var n = e.currentStyle[t];
            else if (window.getComputedStyle) n = document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
            return n
        }

        function queryStringToObject(e) {
            for (var t, n = [], i = e.split("&"), o = 0; o < i.length; o++) n[(t = i[o].split("="))[0]] = t[1] ? decodeURIComponent(t[1].replace(/\+/g, " ")) : "";
            return n
        }

        function googleTrustedStoresBadgeFix(e) {
            ("conversionbar" == bouncex.campaigns[e].type || "conversioncorner" == bouncex.campaigns[e].type || "liquidscreen" == bouncex.campaigns[e].type || "nanobar" == bouncex.campaigns[e].type || "nanotab" == bouncex.campaigns[e].type || "overlay" == bouncex.campaigns[e].type || "railbar" == bouncex.campaigns[e].type) && bouncex.addCss("body > #___ratingbadge_0 { z-index: 2147483627 !important; }", bouncex.campaigns[e].obj1[0], "bx-campaign-" + e + "-gts")
        }

        function isDeprecatedFunction(e) {
            var t = isDeprecatedFunction.caller && isDeprecatedFunction.caller.name;
            bouncex.err("deprecated function: " + (t || "") + "-" + (e || ""))
        }

        function activateGbiCampaign(e) {
            if (bouncex.campaigns[e].gbi.ready) return !0;
            if (bouncex.gbi.log(e, "activate gbi campaign"), bouncex.campaigns[e].gbi.ready = !0, bouncex.campaigns[e].gbi.stack_id) {
                var t = bouncex.campaigns[e].gbi.stack_id;
                bouncex.gbi.stacks[t].leader_id == e && "control" == bouncex.campaigns[e].ttype || (bouncex.gbi.log(e, "a campaign in the stack is ready, processing stack..."), processGbiStack(t))
            } else bouncex.gbi.log(e, "activating out of stack campaign"), campaignEligible(e), activateInstruments(e)
        }

        function attachClickReportingToIframe(e, t) {
            bouncex.on(e, "mouseenter.gbi_click_events_" + t, function() {
                bouncex.on(bouncex.window, "blur.gbi_click_events_" + t, function() {
                    bouncex.report(t, "click", {
                        value: "ad"
                    })
                })
            }), bouncex.events[t].gbi_click = function() {
                bouncex.off(bouncex.window, "blur.gbi_click_events_" + t)
            }, bouncex.on(e, "mouseleave.gbi_click_events_" + t, bouncex.events[t].gbi_click)
        }

        function canShowGbi() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;", e.className = bouncex.lz.decompressFromURI("IYEwzgRgNg9gxgayA"), document.body.appendChild(e);
            var t = e.offsetHeight;
            return document.body.removeChild(e), 0 !== t
        }

        function clearGbiStackCampaigns(e, t) {
            bouncex.gbi.log(!1, "clearing other campaigns...");
            var n = bouncex.gbi.stacks[e].campaigns;
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var o = n[i];
                    o != t && (bouncex.gbi.cancelRequest(o), bouncex.destroy_ad(o, !0))
                }
        }

        function deactivateGbiCampaign(e) {
            bouncex.events[e].gbiRequest && clearInterval(bouncex.events[e].gbiRequest), bouncex.gbi.log(e, "deactivate gbi campaign"), bouncex.campaigns[e].failed = !0, bouncex.campaigns[e].gbi.ready = !1
        }

        function finishGbiStack(e, t) {
            bouncex.gbi.stacks[e].failed = !1, clearInterval(bouncex.events[bouncex.gbi.stacks[e].leader_id].gbiStack), delete bouncex.events[bouncex.gbi.stacks[e].leader_id].gbiStack;
            var n = "control" == bouncex.campaigns[bouncex.gbi.stacks[e].leader_id].ttype;
            t || (bouncex.gbi.stacks[e].failed = !0, n && selectAdStackCampaign(bouncex.gbi.stacks[e].leader_id)), bouncex.gbi.log(!1, "done looking at stack [" + e + "] " + (bouncex.gbi.stacks[e].failed ? "failed" : "success"))
        }

        function initGbiStack(e, t) {
            bouncex.gbi.log(!1, "Starting stack [" + e + "]");
            var n = bouncex.gbi.stacks[e];
            n.started = !0, bouncex.events[n.leader_id] || (bouncex.events[n.leader_id] = {}), bouncex.events[n.leader_id].gbiStack = setTimeout2(function() {
                processGbiStack(e) || (9 < n.processCount ? (bouncex.gbi.log(!1, "stack [" + e + "]: ran out of tries"), finishGbiStack(e, !1)) : !n.finished && (bouncex.gbi.log(!1, "stack [" + e + "]: no winners yet. Trying again..."), initGbiStack(e, 1e3)))
            }, t)
        }

        function processGbiStack(e) {
            var t;
            if ((t = bouncex.gbi.stacks[e]).finished) return bouncex.gbi.log(!1, "stack [" + e + "] already finished"), !1;
            (t = bouncex.gbi.stacks[e]).processCount = t.processCount || 0, t.processCount++, bouncex.gbi.log(!1, "processing stack [" + e + "] (" + t.processCount + ") ...");
            var n = t.campaigns;
            for (var i in t.failedCount = 0, n)
                if (n.hasOwnProperty(i)) {
                    var o = n[i],
                        a = bouncex.campaigns[o];
                    if (a.failed) t.failedCount++, bouncex.gbi.log(o, "has failed");
                    else if ("control" == a.ttype && o == t.leader_id) t.failedCount++;
                    else {
                        if (!a.gbi.ready && a.gbi.config && a.gbi.config.stackWeight && a.gbi.config.stackWeight > t.processCount) return bouncex.gbi.log(o, "campaign with weight of " + a.gbi.config.stackWeight + " didn't have enough time"), !1;
                        if (a.gbi.ready) return selectAdStackCampaign(o), finishGbiStack(e, !0), !0;
                        bouncex.gbi.log(o, "not ready ")
                    }
                }
            return t.failedCount === n.length && (bouncex.gbi.log(!1, "stack [" + e + "]: all campaigns have failed"), finishGbiStack(e, !1), !1)
        }

        function selectAdStackCampaign(e) {
            var t = bouncex.campaigns[e].gbi.stack_id;
            bouncex.gbi.stacks[t].finished = !0, bouncex.gbi.log(e, "selected"), campaignEligible(e), initActivationInstruments(e), bouncex.gbi.stacks[t].selectedCampaign = e, clearGbiStackCampaigns(t, e)
        }

        function EventListeners() {
            this.listeners = {}, this.register = function(e) {
                var t = generateUniqueId();
                return this.listeners[t] = e, t
            }, this.stop = function(e) {
                this.listeners.hasOwnProperty(e) && (this.listeners[e].stop(), delete this.listeners[e])
            }, this.stopAll = function() {
                for (var e in this.listeners) this.stop(e)
            }, this.on = function(e, t, n, i) {
                var o = this.register({
                    event: t,
                    selector: i,
                    stop: function() {
                        bouncex.off(e, t + "." + o, i)
                    }
                });
                return bouncex.on(e, t + "." + o, n, i), o
            }, this.setInterval = function(e) {
                var t = BxInterval.addTask(e);
                return this.register({
                    event: "bxInterval",
                    stop: function() {
                        BxInterval.stopTask(t)
                    }
                })
            }, this.onTabVisible = function(e) {
                var t = this.register({
                    stop: function() {
                        bouncex.off(bouncex.document, "visibilitychange." + t)
                    }
                });
                bouncex.on(bouncex.document, "visibilitychange." + t, function() {
                    BrowserUtil.currentTab.isVisible() && (e(), this.stop(t))
                }.bind(this))
            }, this.onTabVisibilityChange = function(e) {
                return this.on(bouncex.document, "visibilitychange", e)
            }
        }
        var _Mathround = Math.round,
            _Mathfloor = Math.floor,
            _StringfromCharCode = String.fromCharCode;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.wndsize = exports.wndorientation = void 0, exports.visitorTestMode = exports.updateQS = exports.unload_campaign = exports.tryCatch = exports.trigger_ad = exports.TabTalk = exports.stringify_cookie = exports.SinglePageApp = exports.show_ad = exports.shouldEnforcePolicies = exports.setTransitionEffect = exports.setTimeout2 = exports.setCampaignCalloutTargetToIndex = exports.setCalloutTarget = exports.setBounceVisitCookie = exports.setBounceCookieSingle = exports.setBounceCookieMulti = exports.setBounceCookieLocalStorage = exports.setBounceCookieFPLocalStorage = exports.setAccessibilityProperties = exports.report_submit = exports.report = exports.ReloadCampaigns = exports.Records = exports.qs = exports.placeCampaign = exports.perf = exports.parseSiteElementSelector = exports.parseJSON = exports.noteCookieAdShown = exports.next_sequence_id = exports.NativeCapture = exports.make_include_string = exports.Logger = exports.loadImages = exports.loadCouponsAndValidateForm = exports.isMissingTarget = exports.isBxInternalTraffic = exports.init_website_custom_js = exports.init_visit_cookie = exports.init_url_and_referrer = exports.init_testmode_after_cookie = exports.init_testmode_before_cookie = exports.InitSequence = exports.init_public_functions = exports.init_protocol_and_domain = exports.initPreInitCustomJs = exports.init_page_types = exports.init_ibx_tracking = exports.init_ibx = exports.init_event_tracking = exports.init_endpageview_event = exports.init_cookie_localstorage = exports.init_cookie_functions = exports.init_browser = exports.initBehavioralCriteriaInstruments = exports.initBa = exports.initActivationInstruments = exports.getUniqueInstrumentId = exports.getTimeMs = exports.getTime2 = exports.getScript = exports.getParam = exports.getBounceVisitCookie = exports.getBounceCookieSingle = exports.getBounceCookieMulti = exports.getBounceCookieLocalStorage = exports.getBounceCookieFPLocalStorage = exports.event_stream_report = exports.EventListeners = exports.event_js_eval = exports.evaluateBehavioralTriggers = exports.Debug = exports.CustomVariables = exports.Criteria = exports.createIframe = exports.CouponCodes = exports.ComplianceChecks = exports.close_ad = exports.clearBounceCookie = exports.can_show_ad = exports.can_init_post_cookie = exports.can_init = exports.campaignEligible = exports.cacheCreativeForm = exports.BxInterval = exports.buildReport = exports.BrowserUtil = exports.behavioralCriteriaComplete = exports.BehavioralCriteria = exports.bcxReady = exports.bcx_init = exports.baddjs = exports.assignDomReferencesToCampaign = exports.applyCampaignStyles = exports.addTriggerToRegistry = exports.activation_funcs = exports.ActiveTime = exports.activateInstruments = exports.activate_campaign = void 0;
        var _recirc = __webpack_require__(6),
            _recirc2 = _interopRequireDefault(_recirc),
            _ads = __webpack_require__(7),
            _ads2 = _interopRequireDefault(_ads),
            _logger = __webpack_require__(1),
            _logger2 = _interopRequireDefault(_logger),
            _records = __webpack_require__(3),
            _records2 = _interopRequireDefault(_records),
            _sms = __webpack_require__(10),
            _sms2 = _interopRequireDefault(_sms),
            _trafficControl = __webpack_require__(2),
            _trafficControl2 = _interopRequireDefault(_trafficControl),
            _cookie = __webpack_require__(5);
        bouncex.gbi2 = _ads2.default, bouncex.recirc = _recirc2.default, bouncex.sms = _sms2.default;
        var InitSequence = {
            status: {
                preInit1Ready: !1,
                startedInit1: !1,
                init1Complete: !1
            },
            preInit1: {
                entry: function() {
                    init_browser(), can_init() && (init_public_functions(), Debug.initErrorHandling(), init_protocol_and_domain(), init_url_and_referrer(), init_testmode_before_cookie(), ComplianceChecks.init(), (0, _cookie.init_cookie_check)(), init_cookie_functions(), init_visit_cookie(), !bouncex.local_storage_enabled && !bouncex.local_storage_initialized && InitSequence.preInit1.cookieReady(), init_dash())
                },
                cookieReady: function() {
                    can_init_post_cookie() && (init_cookie(), bouncex.cookieReady = !0, InitSequence.preInit1.postCookieFunctions(), InitSequence.preInit1.integrations(), InitSequence.init1.setStatus("preInitReady"), InitSequence.init1.serviceReady("preInit"))
                },
                postCookieFunctions: function() {
                    init_ibx(), initBa(), initPushedData(), bouncex.website.bpush && bouncex.psh.init_supported(), "object" === _typeof(window.bxconv) && report_conversion_sync(window.bxconv), init_testmode_after_cookie(), initAds()
                },
                integrations: function() {
                    initPreInitCustomJs(), ReloadCampaigns.init(), BxInterval.init(), SinglePageApp.init(), init_page_types(), CustomVariables.init()
                }
            },
            init1: {
                serviceReady: function(e) {
                    this.log("service ready: " + e), !this.isReadyToRequest() || InitSequence.status.startedInit1 || (this.setStatus("requesting"), this._request())
                },
                isReadyToRequest: function() {
                    return ComplianceChecks.compliancePassed ? InitSequence.status.preInit1Ready ? !bouncex.website.bxidLoadFirst || bouncex.dg && bouncex.dg.softID || (this.log("bxid not ready", !0), !1) : (this.log("pre-init not ready", !0), !1) : (this.log("compliance check not ready", !0), !1)
                },
                _request: function() {
                    bcxReady(function() {
                        baddjs(make_include_string()), perf.times("init1request")
                    })
                },
                setStatus: function(e) {
                    "preInitReady" === e ? (this.log("pre-init ready"), InitSequence.status.preInit1Ready = !0) : "requesting" === e ? (this.log("requesting"), InitSequence.status.startedInit1 = !0) : "complete" === e && (this.log("complete"), InitSequence.status.init1Complete = !0)
                },
                log: function(e, t) {
                    InitSequence.log("init1", e, t)
                }
            },
            postInit1: {
                entry: function() {
                    return InitSequence.status.init1Complete || InitSequence.init1.setStatus("complete"), InitSequence.postInit1.pageReady() ? (perf.times("init1"), bouncex.state.no_kinesis && InitSequence.postInit1.report(), InitSequence.postInit1.publicAssignments(), InitSequence.postInit1.editCookie(), InitSequence.postInit1.preCampaignFunctions(), InitSequence.postInit1.integrations(), InitSequence.postInit1.loadCampaigns(), void bouncex.bcxReady(function() {
                        "function" == typeof window.bxAsyncInit ? window.bxAsyncInit() : bouncex.state.rc && bouncex.report_conversion(null, "scraping")
                    })) : (setTimeout2(function() {
                        InitSequence.postInit1.entry()
                    }, 100), !1)
                },
                report: function() {
                    var e;
                    if (bouncex.state.newvid) {
                        var t = bouncex.wndsize();
                        e = {
                            "visit:useragent": navigator.userAgent,
                            "visit:referrer": bouncex.cookie.r,
                            "visit:landingpageurl": bouncex.cookie.lp,
                            "visit:resolutionx": t.width,
                            "visit:resolutiony": t.height,
                            "visit:customvariables": bouncex.varsToAPI,
                            "visit:cookie": bouncex.cookieToAPI,
                            "useragent:browser": bouncex.state.device.browser,
                            "useragent:version": bouncex.state.device.version,
                            "useragent:platform": bouncex.state.device.platform,
                            "useragent:devicetype": bouncex.state.device.device_type,
                            "customer:hasconverted": bouncex.vars.has_converted || bouncex.cookie.lc ? 1 : 0
                        };
                        var n = ["country_code", "country_code3", "country_name", "city", "postal_code", "continent_code", "region", "region_name"];
                        for (var i in bouncex.state.geo)
                            if (bouncex.state.geo.hasOwnProperty(i) && -1 < n.indexOf(i) && bouncex.state.geo[i]) {
                                e["geo:" + i.replace("_", "")] = bouncex.state.geo[i]
                            }
                        event_stream_report("visit", e)
                    }
                    event_stream_report("pageview", e = {
                        "pageview:url": decodeURIComponent(bouncex.calling_url),
                        "pageview:customvariables": bouncex.varsToAPI,
                        "pageview:cookiesize": JSON.stringify(bouncex.cookie).length
                    })
                },
                pageReady: function() {
                    return !(!jQueryIsAvailable() || (InitSequence.postInit1.setupPage(), !bouncex.body || !bouncex.body.length))
                },
                setupPage: function() {
                    bouncex.window = jQuery(window).eq(0), bouncex.document = jQuery(document).eq(0), bouncex.body = jQuery("body").eq(0), bouncex.head = jQuery("head").eq(0), bouncex.html = jQuery("html").eq(0), bouncex.pa = 0
                },
                publicAssignments: function() {
                    bouncex.direction = "up", bouncex.events = {}, bouncex.overlay_visible = !1, bouncex.server_client_time_diff = bouncex.state.tn - parseInt(getTimeMs() / 1e3), 0 < bouncex.cookie.as && 0 == window.document.title.length && (window.document.title = window.location.hostname), init_post_campaign_public_function(), bouncex.timespaced = !1
                },
                editCookie: function() {
                    if (bouncex.cookie.v)
                        for (var e in bouncex.cookie.v) bouncex.vars[e] && bouncex.setv(e, bouncex.cookie.v[e]);
                    clearBounceCookie("multi_cookie" == bouncex.website.ct || "fp_local_storage" == bouncex.website.ct), bouncex.setBounceCookie()
                },
                preCampaignFunctions: function() {
                    bouncex.website.dge && bouncex.dg.init(), shouldCheckDfp() && bouncex.gbi2.initDfp(), bouncex.ca = activation_funcs(), bouncex.ibx._init(), bouncex.website.bpush && bouncex.psh.init(), bouncex.sms.init(), init_endpageview_event()
                },
                integrations: function() {
                    init_ibx_tracking(), init_event_tracking(), init_website_custom_js()
                },
                loadCampaigns: function() {
                    bouncex.campaigns ? (bouncex.loadBounceCss(function() {
                        bouncex.loadBrandStyles(), init_activation_funcs()
                    }), bouncex.loadWebfonts()) : bouncex.usd && unhideSite()
                }
            },
            dynamic: {
                tearDown: function() {
                    if (bouncex.campaigns)
                        for (var e in bouncex.campaigns) bouncex.campaigns.hasOwnProperty(e) && bouncex.destroy_ad(e);
                    CustomVariables.clearAll(), BxInterval.clearTasks()
                },
                startUp: function() {
                    init_url_and_referrer(), incrementPageView(), InitSequence.postInit1.report(), InitSequence.preInit1.integrations(), InitSequence.postInit1.setupPage(), InitSequence.postInit1.integrations()
                }
            },
            log: function(e, t, n) {
                var i = {
                    group: "init",
                    message: e + "-" + t
                };
                n ? _logger2.default.error(i) : _logger2.default.info(i)
            }
        };
        bouncex.push = function(e) {
            bouncex.cookieReady ? processPushedData(e[0], e[1]) : bouncex.pushedData.push(e)
        };
        var SinglePageApp = {
            init: function() {
                if (bouncex.website.spa) {
                    if (bouncex.website.spatm && !visitorTestMode("spa")) return;
                    this._setParams(), this._pageChangeListener()
                }
            },
            setCustomParams: function(e) {
                e.shouldCheckSpa && (this._shouldCheckSpa = e.shouldCheckSpa), e.pageChangeListener && (BxInterval.stopTask("spa default listener"), this._pageChangeListener = e.pageChangeListener), e.currentPageIdentifier && (this._currentPageIdentifier = e.currentPageIdentifier)
            },
            _setParams: function() {
                void 0 === this._shouldCheckSpa && (this._shouldCheckSpa = this._defaults.shouldCheckSpa), void 0 === this._pageChangeListener && (this._pageChangeListener = this._defaults.pageChangeListener), void 0 === this._currentPageIdentifier && (this._currentPageIdentifier = this._defaults.currentPageIdentifier)
            },
            _defaults: {
                shouldCheckSpa: function() {
                    return !0
                },
                pageChangeListener: function() {
                    this._shouldCheckSpa() && BxInterval.addTask(this._detectPageChange.bind(this), 0, "spa default listener")
                },
                currentPageIdentifier: function() {
                    return window.location.pathname
                }
            },
            _detectPageChange: function() {
                this._currentPage = this._currentPageIdentifier(), this._prevPage = this._prevPage || this._currentPage, this._prevPage !== this._currentPage && (this.dynamicPageChange(), this._prevPage = this._currentPage)
            },
            dynamicPageChange: function() {
                bouncex.log("%c ~ spa new page 🤘 ~", "color: #000FFF"), InitSequence.dynamic.tearDown(), InitSequence.dynamic.startUp(), ReloadCampaigns.addRequest("spa new page")
            }
        };
        bouncex.psh = {
            swr: {},
            init: function() {
                this.supported && (this.initialized = !0, this._clickthrough(), "sw" === this.type && "granted" === this.getCurrentPermission() && bouncex.ssl ? this.installServiceWorker().then(function() {
                    bouncex.psh.swr.pushManager.getSubscription().then(function(e) {
                        e && void 0 !== bouncex.cookie.bp && 0 !== bouncex.cookie.bp || bouncex.psh.subscribe()
                    })
                }) : !this.confirmCookieValue() && this.setPermission(this.getCurrentPermission()))
            },
            _clickthrough: function() {
                var e = bouncex.utils.getParam("psh_click");
                if (e) {
                    var t = bouncex.cookie.pcs || {},
                        n = _Mathfloor((new Date).getTime() / 1e3);
                    t[e] = n, bouncex.cookie.pcs = t, setBounceCookie()
                }
            },
            init_supported: function() {
                this.type = this.getType(), this.supported = !!this.type, this.supported && !this.confirmCookieValue() && this.setPermission(this.getCurrentPermission()), this.supported || this.setPermission("denied")
            },
            confirmCookieValue: function() {
                return "denied" === this.getCurrentPermission() && 0 === bouncex.cookie.bp || "default" === this.getCurrentPermission() && void 0 === bouncex.cookie.bp
            },
            getCurrentPermission: function() {
                return Notification.permission
            },
            getCookiePermission: function(e) {
                var t;
                return "granted" == e ? t = 1 : "denied" == e && (t = 0), t
            },
            getType: function() {
                return !(bouncex.browser.edge || bouncex.browser.msie || bouncex.browser.safari) && !!bouncex.ssl && !(navigator.serviceWorker && "denied" === Notification.permission) && !!navigator.serviceWorker && "sw"
            },
            setPermission: function(e, t) {
                "default" === e ? delete bouncex.cookie.bp : (bouncex.cookie.bp = bouncex.psh.getCookiePermission(e), void 0 !== t && ("granted" === e ? bouncex.cookie.campaigns[t].bpg = getTime2() : "denied" == e && (bouncex.cookie.campaigns[t].bpd = getTime2()))), setBounceCookie()
            },
            injectManifest: function() {
                var e = document.createElement("link");
                e.rel = "manifest", e.href = bouncex.website.pushFilepath + "bx-manifest.json", document.head.appendChild(e)
            },
            showOptinPromptIfEligible: function(e) {
                var t = !!bouncex.campaigns[e].push_optin_json && JSON.parse(bouncex.campaigns[e].push_optin_json);
                e && !bouncex.campaigns[e].pushOptinPromptShown && t && t.showPromptStep && t.showPromptStep === bouncex.campaigns[e].current_step && bouncex.psh.requestOptIn(e).then(function(t) {
                    bouncex.campaigns[e].pushOptinPromptShown = !0, bouncex.psh.handleRequestOptinResult(t, e)
                })
            },
            handleRequestOptinResult: function(e, t) {
                var n;
                if ("default" === e) n = "close";
                else if ("denied" === e) n = "optin_denied";
                else {
                    if (!("granted" === e || "object" === _typeof(e) && e.permission && "granted" === e.permission)) return bouncex.err("Push Opt-In Error", e), !1;
                    n = "optin_granted"
                }
                bouncex.psh.handleOptinEvent(n, t)
            },
            handleOptinEvent: function(e, t) {
                var n = JSON.parse(bouncex.campaigns[t].push_optin_json),
                    i = !!bouncex.campaigns[t].trigger_offsite_json && JSON.parse(bouncex.campaigns[t].trigger_offsite_json);
                "optin_granted" === e && i && i.campaignId && bouncex.push(["requestsend", {
                    campaignid: i.campaignId,
                    fcmtoken: bouncex.psh.fcmToken,
                    channel: "push",
                    testmode: visitorTestMode("bxdev") ? 1 : 0
                }]), bouncex.psh.fcmToken = null;
                var o = n.eventHandlers[e];
                if ("next" === o.action) {
                    var a = o.prop ? o.prop : bouncex.campaigns[t].next_step;
                    bouncex.setJumpStep(t, a, !1), bouncex.nextStep(t)
                } else bouncex.close_ad(t), "trigger" === o.action && bouncex.show_ad(o.prop)
            },
            requestOptIn: function(e) {
                return !0 === this.initialized ? this.supported && "sw" === this.type ? this.requestOptInSW(e) : Promise.resolve("denied") : Promise.resolve("Push not initialized, ensure push is enabled in website settings.")
            },
            requestOptInSW: function(e) {
                var t = bouncex.psh.getCurrentPermission();
                if ("default" !== t) return Promise.resolve(t);
                var n = {
                    "notifypush:cookie": JSON.stringify(bouncex.cookie),
                    campaignid: e
                };
                return bouncex.psh.report("prompt", n), Notification.requestPermission().then(function(t) {
                    return "granted" === t ? new Promise(function(t) {
                        return bouncex.psh.installServiceWorker().then(function() {
                            return bouncex.psh.subscribe(e)
                        }).then(t).catch(function(e) {
                            t(e)
                        })
                    }) : ("denied" === t && (bouncex.psh.setPermission(t, e), bouncex.psh.report("optin_denied", {
                        "notifypush:type": "sw",
                        campaignid: e
                    })), Promise.resolve(t))
                })
            },
            installServiceWorker: function() {
                return new Promise(function(e, t) {
                    bouncex.psh.injectManifest(), navigator.serviceWorker.register(bouncex.website.pushFilepath + "bx-sw.js").then(function(t) {
                        bouncex.psh.swr = t, navigator.serviceWorker.oncontrollerchange = function(e) {
                            bouncex.psh.isBxServiceWorker(e.target) && bouncex.psh.subscribe()
                        }, e()
                    }).catch(function(e) {
                        bouncex.err(e, {
                            source: "push"
                        }), t("Error installing service worker")
                    })
                })
            },
            isServiceWorkerReady: function() {
                return new Promise(function(e) {
                    var t = bouncex.psh.swr.active || bouncex.psh.swr.waiting || bouncex.psh.installing;
                    if (t && "activated" === t.state) e();
                    else {
                        var n = bouncex.psh.swr.installing || bouncex.psh.swr.waiting;
                        n && n.addEventListener("statechange", function t(n) {
                            "activated" === n.target.state && (bouncex.psh.swr.active.removeEventListener("statechange", t), e())
                        })
                    }
                })
            },
            isBxServiceWorker: function(e) {
                return e.controller && e.controller.scriptURL && /bx-sw\.js$/.test(e.controller.scriptURL)
            },
            getFcmToken: function(e) {
                var t = e.split(/\/(?:send|v1)\//);
                return t && t[1]
            },
            subscribe: function(e) {
                return bouncex.psh.isServiceWorkerReady().then(function() {
                    return bouncex.psh.swr.pushManager.subscribe({
                        userVisibleOnly: !0
                    }).then(function(t) {
                        var n = bouncex.psh.getCurrentPermission(),
                            i = {
                                "notifypush:type": "sw",
                                "notifypush:subscription": JSON.stringify(t),
                                "notifypush:token": t.endpoint,
                                campaignid: e
                            };
                        return bouncex.psh.fcmToken = bouncex.psh.getFcmToken(t.endpoint), bouncex.psh.setPermission(n, e), bouncex.psh.report("optin_granted", i), {
                            permission: n,
                            result: t
                        }
                    }, function(e) {
                        return bouncex.err(e, {
                            source: "push"
                        }), {
                            permission: bouncex.psh.getCurrentPermission(),
                            result: e
                        }
                    })
                })
            },
            report: function(e, t) {
                event_stream_report(e, jQuery.extend({}, {
                    agent: "user",
                    source: "notifypush",
                    channel: "push"
                }, t))
            }
        };
        var Debug = {
            initErrorHandling: function() {
                bouncex.err = Debug.report.bind(this), bouncex.tryCatch = tryCatch;
                var e = tryCatch(function(e) {
                    if (e.filename && -1 < e.filename.indexOf("bounceexchange") || e.error && e.error.stack && -1 < e.error.stack.indexOf("bounceexchange")) {
                        var t = -1 < bouncex.calling_url.indexOf("bounceexchange.com") ? "core app" : "window listener";
                        e.preventDefault(), e.stopImmediatePropagation(), bouncex.err(e.error, {
                            source: t
                        })
                    }
                });
                addEvent(window, "error", e, !1)
            },
            report: function(e, t) {
                var n = this._getErrorMessage(e);
                this._shouldLog(n) && (this._log(n), this._sendEvent(n, e, t || {}))
            },
            _getErrorMessage: function(e) {
                return e.stack ? e.stack.split("\n").filter(function(e) {
                    return -1 === e.indexOf("init1")
                }).join("\n") : e.message ? e.message : e
            },
            _shouldLog: function(e) {
                return -1 === this._errsArr.indexOf(e) && (-1 < window.location.hostname.indexOf("bounceexchange.com") || void 0 !== bouncex.state || "development" === bouncex.env)
            },
            _log: function(e) {
                this._errsArr.push(e);
                var t = "development" === bouncex.env ? "color: #8B008B;" : "color: #388EFA;",
                    n = "development" === bouncex.env ? "bx log (dev): " : "bx log: ";
                bouncex.log("%c " + n + e, t)
            },
            _errsArr: [],
            _sendEvent: function(e, t, n) {
                var i = n.liveTraffic || 5;
                _trafficControl2.default.apply({
                    internal: !0,
                    liveTraffic: i
                }, function() {
                    event_stream_report("debug", {
                        "debug:code": t.name || "custom",
                        "debug:location": n.source || n.location || "",
                        "debug:message": e,
                        "debug:url": bouncex.calling_url,
                        "debug:custom_variable": n.cvar || n.custom_variable || "",
                        campaignid: n.ca_id || n.campaign_id || n.campaignId || ""
                    })
                })
            }
        };
        bouncex.setTimeout2 = setTimeout2, bouncex.setInterval2 = setInterval2, bouncex.on = function(e, t, n, i) {
            i ? delegate(e, t, tryCatch(n), i) : null == jQuery.fn.on ? e.bind(t, tryCatch(n)) : e.on(t, tryCatch(n))
        }, bouncex.off = function(e, t, n) {
            n ? undelegate(e, t, n) : null == jQuery.fn.off ? e.unbind(t) : e.off(t)
        };
        var CriteriaHelper = {
                activations: {
                    page_type_criteria: function(e, t, n, i) {
                        return CriteriaHelper.compare("exactly", bouncex.website.pts, i)
                    },
                    custom_variable_criteria: function(e, t, n, i) {
                        return CriteriaHelper.compare(e, bouncex.vars[t], i)
                    },
                    device_type_criteria: function(e, t, n, i) {
                        return CriteriaHelper.compare("exactly", bouncex.cookie.d, i)
                    },
                    current_page_url: function(e, t, n, i) {
                        return CriteriaHelper.compare(e, location.href, i)
                    },
                    js: function(e, t, n, i) {
                        return CriteriaHelper.compare("js", null, i)
                    }
                },
                compare: function(compareMethod, compareValue, compareTo) {
                    var compareValue = compareValue || !1 === compareValue || 0 === compareValue ? (compareValue + "").toLowerCase() : "";
                    if (compareTo || !1 === compareTo || 0 === compareTo ? "js" == compareMethod || "regex_match" == compareMethod || "not_regex_match" == compareMethod ? compareTo += "" : "greater" == compareMethod || "less" == compareMethod || "less_equal" == compareMethod || "greater_equal" == compareMethod ? ("" !== compareValue && (compareValue = +compareValue), compareTo = +compareTo) : compareTo = (compareTo + "").toLowerCase() : compareTo = "", "contains" == compareMethod || "not_contains" == compareMethod) return -1 < compareValue.indexOf(compareTo) ? "contains" == compareMethod : "contains" != compareMethod;
                    if ("yes" == compareMethod || "no" == compareMethod) return compareValue ? "yes" == compareMethod : "no" == compareMethod;
                    if ("exactly" == compareMethod || "not_exactly" == compareMethod) return compareValue == compareTo ? "exactly" == compareMethod : "exactly" != compareMethod;
                    if ("contained_in" == compareMethod || "not_contained_in" == compareMethod) return -1 < compareTo.indexOf(compareValue) ? "contained_in" == compareMethod : "contained_in" != compareMethod;
                    if ("regex_match" == compareMethod || "not_regex_match" == compareMethod) {
                        var match = new RegExp(compareTo, "gi").test(window.location.href);
                        return match ? "regex_match" == compareMethod : "regex_match" != compareMethod
                    }
                    if ("js" == compareMethod) try {
                        var v = eval(compareTo);
                        return "boolean" == typeof v && v
                    } catch (e) {
                        bouncex.err(e, {
                            source: "evalCriteria - page_types"
                        })
                    } else {
                        if ("greater" == compareMethod) return compareValue > compareTo;
                        if ("less" == compareMethod && "" !== compareValue) return compareValue < compareTo;
                        if ("equal" == compareMethod) return compareValue == compareTo;
                        if ("less_equal" == compareMethod && "" !== compareValue) return compareValue <= compareTo;
                        if ("greater_equal" == compareMethod) return compareValue >= compareTo;
                        if ("not_equal" == compareMethod) return compareValue != compareTo
                    }
                    return !1
                }
            },
            perf = {
                startTime: "undefined" != typeof performance && performance.timing && performance.timing.navigationStart ? performance.timing.navigationStart : getTimeMs(),
                timesArr: {},
                times: function(e) {
                    this.timesArr.startTime || (this.timesArr.startTime = this.startTime), this.timesArr[e] = getTimeMs() - this.startTime
                },
                manualTiming: function(e, t) {
                    this.timesArr[e] = t - this.startTime
                },
                get: function(e) {
                    var t = "perf:" + e,
                        n = {};
                    return n[t] = bouncex.stringify(this[e + "Arr"]), !(!n[t] || "[]" == n[t] || "{}" == n[t]) && n
                },
                report: function(e) {
                    if (bouncex.cookie && "037" === bouncex.cookie.did.substr(bouncex.cookie.did.length - 3)) {
                        var t = this.get(e);
                        if (t) return t.agent = "js", event_stream_report("perf", t)
                    }
                }
            },
            ReloadCampaigns = {
                _max: 30,
                _taskId: "make_reload_campaigns_request",
                init: function() {
                    this._count = 0
                },
                addRequest: function(e, t) {
                    e = e || this.addRequest.caller && this.addRequest.caller.arguments && this.addRequest.caller.arguments.length && "object" !== _typeof(this.addRequest.caller.arguments[0]) && this.addRequest.caller.arguments[0] || "custom", t = t || "manual", BxInterval.addTask(this._makeRequest.bind(this, e, t), 0, this._taskId), this._log(e + ": " + t)
                },
                _reportEvent: function(e, t) {
                    event_stream_report("reloadcampaigns", {
                        "reloadcampaigns:customvariables": bouncex.varsToAPI,
                        "reloadcampaigns:name": e,
                        "reloadcampaigns:type": t
                    })
                },
                _makeRequest: function(e, t) {
                    return this._count >= this._max ? this._cancelRequest() : void(void 0 !== bouncex.state && (this._reloadCampaigns(e, t), this._completeRequest(), bouncex.state.no_kinesis && this._reportEvent(e, t)))
                },
                _cancelRequest: function() {
                    BxInterval.stopTask(this._taskId), this._log("max reached")
                },
                _completeRequest: function() {
                    BxInterval.stopTask(this._taskId), this._count += 1, this._log(this._count)
                },
                _reloadCampaigns: function(e, t) {
                    bouncex.baddjs(bouncex.make_include_string("reloadCampaigns", t, e))
                },
                _log: function(e) {
                    _logger2.default.info({
                        group: "reload_campaigns",
                        message: e,
                        color: "#BB8FCE"
                    })
                }
            },
            BxInterval = {
                init: function() {
                    clearInterval(this._masterPoll), this._tasks = {}, this._masterPoll = setInterval2(this._runTasks.bind(this), 1e3)
                },
                _runTasks: function() {
                    for (var e in this._tasks)
                        if (this._tasks.hasOwnProperty(e)) {
                            var t = this._tasks[e];
                            t.run(), t.count += 1, 0 < t.max && t.count >= t.max && this._maxedTask(e)
                        }
                },
                addTask: function(e, t, n, i) {
                    var o = n || generateUniqueId();
                    return this._tasks[o] = {
                        run: e,
                        max: t || 0,
                        count: 0,
                        maxedFn: i
                    }, o
                },
                _maxedTask: function(e) {
                    this._tasks[e] && "function" == typeof this._tasks[e].maxedFn && this._tasks[e].maxedFn(), this.stopTask(e)
                },
                stopTask: function(e) {
                    delete this._tasks[e]
                },
                clearTasks: function() {
                    this._tasks = {}
                }
            },
            XD = {
                postMessage: function() {
                    isDeprecatedFunction()
                },
                receiveMessage: function() {
                    isDeprecatedFunction()
                }
            },
            zcCallbacks = [];
        bouncex.caAutofill = function(e, t) {
            for (var n in t = "object" === _typeof(t) ? t : {}) t.hasOwnProperty(n) && bouncex.campaigns[e].inputs.filter("[name=" + n + "]").val(t[n]).trigger("click")
        }, bouncex.fb = {
            login: function(e) {
                e = "function" == typeof e ? e : function() {}, window.FB ? FB.login(function(t) {
                    t.authResponse ? FB.api("/me", {
                        fields: "id,email,first_name,last_name,gender,name"
                    }, function(t) {
                        if (t.error) {
                            var n = t.error && t.error.message;
                            bouncex.fb.warn("FB.api returned an error: " + n)
                        }
                        t.fname = t.first_name, t.lname = t.last_name, e(t)
                    }) : (bouncex.fb.warn("FB.login not authenticated"), e())
                }, {
                    scope: "email, public_profile"
                }) : (bouncex.fb.warn("FB sdk not found"), e())
            },
            nextStep: function(e, t, n) {
                bouncex.fb.login(function(i) {
                    return bouncex.caAutofill(e, i), bouncex.setJumpStep(e, t, n), bouncex.submitCampaignStep(e), !1
                })
            },
            popCa: function(e) {
                bouncex.fb.login(function(t) {
                    var n = 0;
                    t && t.email && (bouncex.campaigns[e].inputs.filter("[name=email]").val("Autofilling from Facebook...").trigger("click"), n = 1500), setTimeout2(function() {
                        bouncex.caAutofill(e, t)
                    }, n)
                })
            },
            warn: function(e) {
                _logger2.default.warn({
                    group: "bouncex.fb",
                    message: e
                })
            }
        };
        var ActiveTime = {
                initialized: !1,
                timeCount: 0,
                events: "mousemove.bouncex_active_time_action keydown.bouncex_active_time_action DOMMouseScroll.bouncex_active_time_action mousewheel.bouncex_active_time_action mousedown.bouncex_active_time_action touchstart.bouncex_active_time_action touchmove.bouncex_active_time_action focus.bouncex_active_time_action",
                callbacks: {},
                inactivityTimeout: null,
                activityInterval: null,
                addCallback: function(e, t) {
                    if (e = parseInt(e), !isNaN(e)) {
                        var n = generateUniqueId();
                        return ActiveTime.callbacks[n] = {
                            seconds: e,
                            callback: t
                        }, ActiveTime.initialized || (ActiveTime.inactivityTimeout = ActiveTime._resetInactivityTimeout(), bxPassiveBind(window, ActiveTime.events, ActiveTime._handleActivity), ActiveTime.initialized = !0), n
                    }
                },
                clearCallback: function(e) {
                    ActiveTime.callbacks && ActiveTime.callbacks[e] && delete ActiveTime.callbacks[e], ActiveTime._shutdownIfNoRemainingCallbacks()
                },
                _increase: function() {
                    for (var e in ActiveTime.timeCount++, ActiveTime.callbacks) {
                        var t = ActiveTime.callbacks[e];
                        t.seconds <= ActiveTime.timeCount && (t.callback(), ActiveTime.clearCallback(e))
                    }
                },
                _shutdownIfNoRemainingCallbacks: function() {
                    (!ActiveTime.callbacks || jQuery.isEmptyObject(ActiveTime.callbacks)) && (ActiveTime._clearActivityInterval(), clearTimeout(ActiveTime.inactivityTimeout), bxPassiveUnbind(window, ActiveTime.events), ActiveTime.initialized = !1)
                },
                _handleActivity: function() {
                    ActiveTime.inactivityTimeout = ActiveTime._resetInactivityTimeout(), ActiveTime.activityInterval || (ActiveTime.activityInterval = setInterval2(ActiveTime._increase, 1e3))
                },
                _resetInactivityTimeout: function() {
                    return clearTimeout(ActiveTime.inactivityTimeout), setTimeout2(ActiveTime._clearActivityInterval, 5e3)
                },
                _clearActivityInterval: function() {
                    clearInterval(ActiveTime.activityInterval), delete ActiveTime.activityInterval
                }
            },
            init_vars = InitSequence.preInit1.integrations,
            bcx_init = InitSequence.preInit1.entry,
            init_post_cookie = InitSequence.preInit1.cookieReady;
        bouncex.log = function() {
            var e = console.log.bind ? console.log.bind(console) : window.console.log;
            isBxInternalTraffic() && e.apply(null, arguments)
        }, bouncex.console = {
            trace: function() {
                isBxInternalTraffic() && console.trace && console.trace()
            },
            group: function() {
                var e = console.group.bind ? console.group.bind(console) : window.console.group;
                (visitorTestMode("office") || visitorTestMode("bxdev")) && e.apply(null, arguments)
            },
            groupCollapsed: function() {
                var e = console.groupCollapsed.bind ? console.groupCollapsed.bind(console) : window.console.groupCollapsed;
                isBxInternalTraffic() && console.groupCollapsed && e.apply(null, arguments)
            },
            groupEnd: function() {
                var e = console.groupEnd.bind ? console.groupEnd.bind(console) : window.console.groupEnd;
                isBxInternalTraffic() && console.groupEnd && e.apply(null, arguments)
            }
        }, bouncex.table = function() {
            var e = console.table.bind ? console.table.bind(console) : window.console.table;
            ("production" !== bouncex.env || visitorTestMode("office") || visitorTestMode("bxdev")) && e.apply(null, arguments)
        }, bouncex.loaded = !0, bouncex.init1Response = tryCatch(function(e) {
            bouncex.state = e.state, "no_consent" === bouncex.complianceFlag || "gdpr_no_consent" === bouncex.complianceFlag && bouncex.state.gdpr || (bouncex.cookie = e.cookie, bouncex.brandStyles = e.brand_styles, bouncex.webfonts = e.webfonts, bouncex.campaigns = e.campaigns, bouncex.creatives = e.creatives, bouncex.debug = e.debug, bouncex.testmode = e.testmode, bouncex.gbi.stacks = e.gbi_stacks, bouncex.website.gbi2Enabled = e.gbi2_enabled, bouncex.website.sspConfig = e.ssp_config, bouncex.website.pushFilepath = e.push_filepath, bouncex.website.smsEnabled = e.sms_enabled, bouncex.website.smsTC = e.sms_terms_conditions_link, bouncex.website.brandName = e.brand_name, bouncex.website.adsConfig = e.ads_config, setBounceCookie(), InitSequence.postInit1.entry())
        });
        var BehavioralCriteria = {
                evaluate: function(e, t, n) {
                    this._debug.init(n);
                    for (var i, o = 0; o < t.length; o++)
                        if (i = t[o], this._debug.initCriteriaSet(i, o), !this._andCriteriaSatisfied(i, e)) return !1;
                    return !0
                },
                _andCriteriaSatisfied: function(e, t) {
                    for (var n, i = 0; i < e.length; i++)
                        if (n = e[i], this._orCriteriaSatisfied(n, t)) return this._debug.setCriteriaStatus(!0), !0;
                    return this._debug.setCriteriaStatus(!1), !1
                },
                _orCriteriaSatisfied: function(e, t) {
                    e.val = parseSiteElementSelector(e.val);
                    var n = -1 !== jQuery.inArray(getUniqueInstrumentId(e), t) ? !e.shouldBeAbsent : !!e.shouldBeAbsent;
                    return this._debug.setActivationStatus(e.activation, n), n
                },
                _debug: {
                    init: function(e) {
                        this.campaignId = e, void 0 === this.shouldDebug && (this.shouldDebug = isBxInternalTraffic())
                    },
                    initCriteriaSet: function(e, t) {
                        this.shouldDebug && (this.failedCriteriaArr = [], this.setInfo = "behavioral criteria - criteria " + t + ": " + e.map(function(e) {
                            return e.activation
                        }).join(","))
                    },
                    setActivationStatus: function(e, t) {
                        this.shouldDebug && (t || this.failedCriteriaArr.push(e), bouncex.campaigns[this.campaignId].list_of_rt_activations.forEach(function(n) {
                            n.activation !== e || (n.status = t)
                        }))
                    },
                    setCriteriaStatus: function(e) {
                        if (this.shouldDebug) {
                            var t = e ? " - passed" : " - failed (" + this.failedCriteriaArr.join(",") + ")";
                            this.log(this.campaignId, this.setInfo + t)
                        }
                    },
                    log: function(e, t) {
                        this.shouldDebug && _logger2.default.info({
                            group: "rtbc",
                            message: t,
                            color: "#ff69b4",
                            campaignId: e
                        })
                    }
                }
            },
            CustomVariables = {
                _hasInit: !1,
                _reloadCampaignVarNames: [],
                _allChangedVars: [],
                init: function() {
                    this._hasInit || (bouncex.cookie = getBounceCookie(), bouncex.vars = {}, this.varsToExpire = [], bouncex.website.vars = initTestModeParts("cvars"), this._index = {}, bouncex.website.vars.forEach(function(e, t) {
                        this._index[e.name] = t
                    }.bind(this))), this.evalVars(), this._initPolling(), setBounceCookie(), this._hasInit = !0
                },
                evalVars: function(e) {
                    e = e || "all";
                    for (var t, n = this._filterVars(e), i = 0; i < n.length; i++)
                        if (t = n[i], void 0 === bouncex.vars[t.name] && this._initVar(t), this._canEvalVar(t)) {
                            var o = this.evalVarAndReload(t.name);
                            "visit" !== t.persist || bouncex.state || o.success || this.varsToExpire.push({
                                name: t.name,
                                default: t.default
                            })
                        }
                },
                _filterVars: function(e) {
                    return this._filter = this._filter || {}, this._filter[e] ? this._filter[e] : "all" === e ? this._filter[e] = bouncex.website.vars : "devicegraph" === e ? this._filter[e] = bouncex.website.vars.filter(function(e) {
                        return "devicegraph" === e.persist
                    }) : "polling" === e ? this._filter[e] = bouncex.website.vars.filter(function(e) {
                        return "none" !== e.polling
                    }) : "persist" === e ? this._filter[e] = bouncex.website.vars.filter(function(e) {
                        return "no" !== e.persist
                    }) : []
                },
                _initVar: function(e) {
                    var t = "no" !== e.persist && bouncex.cookie.v && void 0 !== bouncex.cookie.v[e.name] ? bouncex.cookie.v[e.name] : e.default;
                    this.setVar(e.name, t)
                },
                _canEvalVar: function(e) {
                    if (e.page_types.length && (!bouncex.website.pts || -1 === e.page_types.indexOf(bouncex.website.pts))) return !1;
                    if ("devicegraph" === e.persist) {
                        if (!bouncex.dg || !bouncex.dg.store) return !1;
                        if ("number" != typeof bouncex.vars[e.name]) return !1
                    }
                    return "event" !== e.trigger
                },
                _evalVar: function(e, t) {
                    var n = {};
                    "function" != typeof e.code && (e.code = this._makeFunc(e.code));
                    try {
                        var i = t ? e.code.bind(t) : e.code;
                        n = this.setVar(e.name, i())
                    } catch (t) {
                        bouncex.err(t, {
                            source: "eval cvar",
                            cvar: e.name
                        })
                    }
                    return n
                },
                setVar: function(e, t) {
                    var n = bouncex.website.vars[this._index[e]],
                        i = {
                            success: !1,
                            changed: !1
                        },
                        o = this._formatVar(t);
                    return i.success = this._validVar(o), i.success && bouncex.vars[n.name] !== o && (i.changed = !0, i.oldVal = bouncex.vars[n.name], bouncex.vars[n.name] = o, "no" !== n.persist && (bouncex.cookie.v = bouncex.cookie.v || {}, bouncex.cookie.v[n.name] = o, bouncex.dg && bouncex.dg.store && "devicegraph" === n.persist && (bouncex.dg.store.v = bouncex.dg.store.v || {}, bouncex.dg.store.v[n.name] = o))), i
                },
                getVar: function(e) {
                    return bouncex.website.vars[this._index[e]]
                },
                _reactToChange: function(e, t) {
                    t.changed && ("vars" !== e.polling && this._reloadCampaignVarNames.push(e.name), "no" !== e.persist && bouncex.setBounceCookie(), "devicegraph" === e.persist && bouncex.dg.updateDeviceGraphCookie(), this._allChangedVars.push({
                        name: e.name,
                        oldVal: t.oldVal
                    }))
                },
                evalVarAndReload: function(e, t) {
                    var n = bouncex.website.vars[this._index[e]],
                        i = this._evalVar(n, t);
                    return this._reactToChange(n, i), i
                },
                setVarAndReload: function(e, t) {
                    var n = bouncex.website.vars[this._index[e]],
                        i = this.setVar(n.name, t);
                    this._reactToChange(n, i)
                },
                _makeFunc: function(code) {
                    var f = function() {
                            return null
                        },
                        str = "f = (function(){return " + encodeURI(code.toString().replace("\n", " ")) + "});";
                    try {
                        eval(decodeURI(str))
                    } catch (e) {
                        bouncex.err("bad cvar expression " + code)
                    }
                    return f
                },
                _validVar: function(e) {
                    return "number" == typeof e && !isNaN(e) || "string" == typeof e || "boolean" == typeof e
                },
                _formatVar: function(e) {
                    switch (!0) {
                        case "true" === e:
                            return !0;
                        case "false" === e:
                            return !1;
                        case "string" == typeof e && !!e.match(/^[0-9]+$/):
                            return parseInt(e);
                        case "string" == typeof e && !!e.match(/^[0-9]+\.[0-9]+$/):
                            return parseFloat(e);
                        default:
                            return e
                    }
                },
                _initPolling: function() {
                    this._reloadCampaignVarNames = [], BxInterval.addTask(this._pollingVars.bind(this), 0, "eval_polling_vars"), BxInterval.addTask(this._cvarChangeEvent.bind(this), 0, "emit_change_event")
                },
                _pollingVars: function() {
                    this.evalVars("polling"), this._reloadCampaignVarNames.length && (bouncex.reload_campaigns("variable", this._reloadCampaignVarNames.join(",")), this._reloadCampaignVarNames = []), this._allChangedVars.length && 2 == bouncex.website.ete && bouncex.et.evalAllUIEvents()
                },
                _cvarChangeEvent: function() {
                    this._allChangedVars.length && bouncex.window && (bouncex.window.trigger("bxVarsChange", [this._allChangedVars]), this._allChangedVars = [])
                },
                clearAll: function() {
                    this._hasInit = !1, bouncex.vars = {}
                }
            },
            BrowserUtil = {
                viewport: {
                    getVisibleElements: function(e, t) {
                        return jQuery(e).toArray().reduce(function(e, n, i) {
                            return this.elementEdgeInViewport(n, t) && e.push({
                                element: n,
                                index: i
                            }), e
                        }.bind(this), [])
                    },
                    elementEdgeInViewport: function(e, t) {
                        if ("string" == typeof e && (e = jQuery(e).get(0)), !e) return !1;
                        var n = this._getVerticalPosition(e, t);
                        return this.isInVerticalViewport(n)
                    },
                    isInVerticalViewport: function(e) {
                        return 0 <= e && e <= (window.innerHeight || document.documentElement.clientHeight)
                    },
                    _getVerticalPosition: function(e, t, n) {
                        var i = e.getBoundingClientRect();
                        return n = parseInt(n) || 0, "before" === t || "prepend" === t ? i.top - n : i.bottom + n
                    },
                    distanceToBottom: function(e, t, n) {
                        var i = this._getVerticalPosition(e, t, n);
                        return (window.innerHeight || document.documentElement.clientHeight) - i
                    }
                },
                currentTab: {
                    isVisible: function() {
                        return "visible" === document.visibilityState
                    }
                }
            };
        bouncex.utils = {
            addNamespace: function(e, t) {
                var n = {};
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var o = i; - 1 === i.indexOf(":") && (o = t + ":" + i), n[o] = e[i]
                    }
                return n
            },
            getOrigin: function() {
                return window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
            },
            doAjaxRequest: function(e) {
                e.crossDomain = !0, e.global = !1;
                var t = jQuery.fn.jquery.split(".");
                return e.xhrFields = {
                    withCredentials: !0
                }, 1 >= parseInt(t[0]) && 5 >= parseInt(t[1]) && (e.beforeSend = function(e) {
                    e.withCredentials = !0
                }, e.xhr = function() {
                    var e = jQuery.ajaxSettings.xhr(),
                        t = e.setRequestHeader;
                    return e.setRequestHeader = function(e, n) {
                        "X-Requested-With" == e || t.call(this, e, n)
                    }, e
                }), jQuery.ajax(e)
            },
            gtmLookup: function(e, t) {
                if (!(t = t || this.url.getParam("id", jQuery('script[src*="googletagmanager"]').attr("src")))) return !1;
                try {
                    return google_tag_manager[t].dataLayer.get(e)
                } catch (e) {
                    return bouncex.err(e, {
                        source: "gtmLookup"
                    }), ""
                }
            },
            getNestedProp: function(e, t, n) {
                var i = void 0 === n ? window : n,
                    o = void 0 === t ? void 0 : t,
                    a = e;
                if ("string" == typeof e) {
                    if (/[^A-z0-9\[\].]/.test(e)) return bouncex.log("getNestedProp given bad value: " + e), o;
                    a = e.split(/[.\[]/).map(function(e) {
                        return e.replace(/[\]]/g, "")
                    })
                }
                for (var r, s = 0; s < a.length; s++) {
                    if (void 0 === i[r = a[s]]) return o;
                    i = i[r]
                }
                return i
            },
            cookies: {
                create: function(e) {
                    if (defaults = {
                            name: "",
                            value: "",
                            domain: !1,
                            days: 14
                        }, !(e = jQuery.extend(defaults, e)).name) return !1;
                    var t = new Date;
                    t.setTime(t.getTime() + 24 * e.days * 60 * 60 * 1e3);
                    var n = "; expires=" + t.toGMTString(),
                        i = e.name + "=" + e.value + n + "; path=/;";
                    e.domain && (i += "domain=" + e.domain + ";"), document.cookie = i
                },
                destroy: function(e) {
                    return this.create({
                        name: e,
                        days: -1
                    })
                },
                read: function(e) {
                    for (var t, n = e + "=", i = document.cookie.split(";"), o = 0; o < i.length; o++) {
                        for (t = i[o];
                            " " == t.charAt(0);) t = t.substring(1, t.length);
                        if (0 == t.indexOf(n)) return t.substring(n.length, t.length)
                    }
                    return null
                }
            },
            records: {
                getRecords: function(e) {
                    if (isBxInternalTraffic()) return _records2.default.getRecords(e)
                },
                printRecords: function(e) {
                    if (isBxInternalTraffic()) return _records2.default.printRecords(e)
                }
            },
            url: {
                allowParams: function(e, t) {
                    var n = (t = t || window.location.href).split(/([\?\#])/);
                    if (!e) return n[0];
                    for (var i = 1; i < n.length; i++) "?" !== n[i] && "#" !== n[i] && (n[i] = this.filterParams(n[i], function(t) {
                        return -1 < e.indexOf(t)
                    }));
                    return n.join("").replace(/([\?\#](?=[\?\#])|[\?\#]+$)/g, "")
                },
                generateQuerystring: function(e, t) {
                    var n = t || "";
                    for (var i in e) e.hasOwnProperty(i) && (n += i + "=" + e[i] + "&");
                    return n.substring(0, n.length - 1)
                },
                queryStringToObject: function(e) {
                    return (e = "?" === (e = void 0 === e ? window.location.search : e).charAt(0) ? e.substring(1) : e).split("&").reduce(function(e, t) {
                        var n = t.split("="),
                            i = decodeURIComponent(n[0]),
                            o = decodeURIComponent(n[1]);
                        return e[i] = o, e
                    }, {})
                },
                filterParams: function(e, t) {
                    for (var n = e.replace(/[\?\#]/, "").split("&"), i = "", o = 0; o < n.length; o++) t(n[o].split("=")[0].replace(/[\[]/, "").replace(/[\]]/, "")) && (i += "&" + n[o]);
                    return i.replace("&", "")
                },
                formatReferrer: function(e) {
                    return e ? encodeURIComponent(e.split("/")[2]) : ""
                },
                getParam: function(e, t) {
                    var n = t ? "?" + t : window.location.href;
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var i = new RegExp("[\\?&#]" + e + "=([^&#]*)").exec(n);
                    return null == i ? "" : decodeURIComponent(i[1])
                },
                removeParams: function(e, t) {
                    t = t || window.location.href, e = ["_ke", "bxid", "cid", "email", "et_rid", "gclid", "ibx_source", "mc_cid", "mc_eid", "pid", "RIID", "spUserID", "sfmc_sub", "ueh", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].concat(e);
                    for (var n = t.split(/([\?\#])/), i = 1; i < n.length; i++) "?" !== n[i] && "#" !== n[i] && (n[i] = this.filterParams(n[i], function(t) {
                        return -1 === e.indexOf(t)
                    }));
                    return n.join("").replace(/([\?\#](?=[\?\#])|[\?\#]+$)/g, "")
                }
            },
            validate: {
                email: function(e) {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
                },
                integer: function(e) {
                    return !isNaN(parseInt(e))
                },
                url: function(e) {
                    return /^(https?):\/\/[^\s\/$.?#].[^\s]*$/.test(e)
                }
            },
            isObject: function(e) {
                return null !== e && "object" === _typeof(e) && !Array.isArray(e)
            }
        }, bouncex.utils.getParam = bouncex.utils.url.getParam, bouncex.vst = {
            _init: {
                buildVastEnv: function(e, t) {
                    var n, i;
                    bouncex.vst._internal.groupCollapsed(e, "init vast parser", !1), n = bouncex.campaigns[e], bouncex.vst.campaignId = e, n.video.vast = {
                        handlingWrapper: !1,
                        wrapperLevel: 0,
                        tracking: {}
                    }, i = bouncex.vst._helpers.isVastOrTag(t), bouncex.vst._init.kickoffVastParse(e, i, t)
                },
                kickoffVastParse: function(e, t, n) {
                    return "tag" === t ? this.extractVastData(e, n) : "vastxml" === t ? bouncex.vst._response.vastResponse(n) : void 0
                },
                extractVastData: function(e, t) {
                    bouncex.video.log(e, "extract vast url: " + t, "vast");
                    var n = bouncex.vst._validations.checkVastUrl(t);
                    bouncex.vst._http.call(e, n, "GET", null, bouncex.vst._response.vastResponse)
                }
            },
            _http: {
                call: function(e, t, n, i, o, a) {
                    bouncex.video.log(e, "making HTTP request", "vast"), bouncex.vst._validations.checkHttpRequest(e, t, o);
                    var r = bouncex.vst._http.createXMLRequest();
                    r.onreadystatechange = function() {
                        if (4 == r.readyState)
                            if (200 === r.status) o && o(this, r);
                            else if (a) {
                            if (0 !== r.status) return bouncex.video.fail(e, "XML request to parse vast data failed"), !1
                        } else bouncex.vst && bouncex.vst._http.call(e, t, n, i, o, !0)
                    }, r.open(n, bouncex.vst._validations.checkUrl(t).href, !0), a && (r.withCredentials = !0);
                    try {
                        i ? r.send(i) : r.send()
                    } catch (r) {
                        var s = !0 === a ? " on second try" : ".";
                        bouncex.video.fail(e, "VAST [httpCall]: XHR request failed" + s + r.message), a || bouncex.vst._http.call(e, t, n, i, o, !0, "vast")
                    }
                },
                success: function(e) {
                    return 200 <= e && 300 > e
                },
                createXMLRequest: function() {
                    var e;
                    return window.XMLHttpRequest ? e = new XMLHttpRequest : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e
                }
            },
            _response: {
                vastResponse: function(e) {
                    var t, n, i = bouncex.vst.campaignId,
                        o = bouncex.campaigns[i];
                    if (0 < o.video.vast.wrapperLevel && !o.video.vast.handlingWrapper) {
                        var a = o.video.vast.wrapperLevel;
                        bouncex.vst._internal.groupCollapsed(i, "re-init vast parser, wrapper found - on loop: " + a, !1)
                    } else bouncex.video.log(i, "init vast parser", "vast");
                    t = bouncex.vst._validations.checkXml(e), n = o.video.vast, bouncex.vst._processVastData.getAd(i, t, e), !o.failed && n.vpaidUrl ? (bouncex.video.log(i, " -> Found VPAID", "vast"), bouncex.vst._loadPlayer.vpaidMedia(i, n)) : !o.failed && (bouncex.video.log(i, "vast parse complete", "vast"), !o.video.vast.handlingWrapper && bouncex.vst._loadPlayer.vastMedia(i, n)), o.video.vast.handlingWrapper || bouncex.vst._internal.groupEnd(i, "exit vast parser", !1)
                }
            },
            _xml: {
                convertStringToXML: function(e) {
                    if (!_typeof(window.DOMParser)) {
                        var t = new ActiveXObject("Microsoft.XMLDOM");
                        return t.loadXML(e), t
                    }
                    var n, i = new DOMParser;
                    try {
                        (!(n = i.parseFromString(e, "application/xml")) || "" === n || this.parsingError(n)) && bouncex.log("error parsing XML string")
                    } catch (e) {
                        bouncex.log("error parsing XML string")
                    }
                    return n
                },
                parsingError: function(e) {
                    try {
                        var t = (new DOMParser).parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
                        return 0 < e.getElementsByTagNameNS(t, "parsererror").length
                    } catch (e) {
                        bouncex.log("xml parsing error: ", e)
                    }
                },
                parseXmlText: function(e) {
                    return /^\s*$/.test(e) ? null : /^(?:true|false)$/i.test(e) ? "true" === e.toLowerCase() : e.trim()
                },
                elementParsers: {
                    init: function(e, t, n, i) {
                        var o, a, r, s, c, u, b, l;
                        o = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Impression", 1), a = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Tracking", 1), r = bouncex.vst._xml.nodeParsers.getXmlNode(e, n, "Wrapper", 0), s = null !== bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "InLine", 0) && bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "InLine", 0), c = bouncex.vst._xml.nodeParsers.getXmlNode(e, s, "Linear", 0) || bouncex.vst._xml.nodeParsers.getXmlNode(e, s, "Video", 0), b = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Error", 1), c || s || (l = bouncex.vst._xml.nodeParsers.getXmlNode(e, s, "NonLinear", 0), u = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Companion", 0)), u && bouncex.video.log(e, "SKIP -> [parseVastElements]: companion ads not currently supported", "warning"), l && bouncex.video.log(e, "SKIP -> [parseVastElements]: nonlinear ads not currently supported", "warning"), b && bouncex.vst._tracking.recordErrorPixels(e, i, b), o && bouncex.vst._tracking.recordImpressionPixels(i, o), a && bouncex.vst._tracking.recordEventPixels(i, a), r && (bouncex.vst._xml.elementParsers.handleWrapper(e, r), bouncex.campaigns[e].video.vast.handlingWrapper = !1, bouncex.campaigns[e].video.vast.wrapperLevel += 1), c && this.handleVideo(e, i, c)
                    },
                    handleVideo: function(e, t, n) {
                        bouncex.vst._tracking.recordVideoClickTrackingPixels(e, t, n), this.handleDuration(e, t, n), this.handleMediaFiles(e, t, n)
                    },
                    handleDuration: function(e, t, n) {
                        var i, o, a = bouncex.vst._xml.nodeParsers.getXmlNode(e, n, "Duration", 0);
                        null !== a && (bouncex.vst._xml.nodeParsers.nodeExists(a) && "string" != typeof a && (a = bouncex.vst._xml.nodeParsers.getNodeValue(a)), i = (a = a.split(".")[0]).split(":"), o = parseInt(60 * i[0] * 60) + parseInt(i[2]), t.duration = o, bouncex.video.log(e, "media duration -> " + t.duration + "s", "vast"))
                    },
                    handleMediaFiles: function(e, t, n) {
                        var i, o = bouncex.vst._xml.nodeParsers.getXmlNode(e, n, "MediaFile", 1),
                            a = null,
                            r = !1;
                        if ((null === o || 0 === o.length) && bouncex.video.log(e, "0 media files found", "error"), o && o.length) {
                            for (var s = 0; s < o.length; s++) {
                                if (t.width = o[s].getAttribute("width"), t.height = o[s].getAttribute("height"), t.aspectRatio = t.height / t.width * 100, t.apiFramework = o[s].getAttribute("apiFramework") || !1, t.type = o[s].getAttribute("type"), t.aspectRatio = bouncex.vst._helpers.calculateAspectRatioData(t.width, t.height), t.isVPAID = !(!t.apiFramework || "vpaid" !== t.apiFramework.toLowerCase() || "application/javascript" !== t.type), t.offsetAspectRatio = bouncex.campaigns[e].video.player.offsetHeight / bouncex.campaigns[e].video.player.offsetWidth * 100, i = null === bouncex.vst._xml.nodeParsers.getNodeValue(o[s]) ? this.handleUrlSources(e) : bouncex.vst._xml.nodeParsers.getNodeValue(o[s]), -1 < t.type.toLowerCase().indexOf("mp4")) {
                                    t.src = i, r = !0;
                                    break
                                }
                                if (-1 < t.type.toLowerCase().indexOf("application/javascript")) return bouncex.vst._loadPlayer.handleVPAID(e, t, n, i);
                                a = {
                                    path: i,
                                    type: t.type
                                }, t.src = a.path, t.type = a.type, t.vpaidUrl = !1
                            }
                            0 != r || t.vpaidUrl || null === a || (t.src = a.path, t.type = a.type, t.vpaidUrl = !1)
                        }
                    },
                    handleUrlSources: function(e) {
                        var t, n = bouncex.vst._xml.nodeParsers.getXmlNode(e, video, "URL", 1);
                        if (n)
                            for (var i = 0; i < n.length; i++) t = bouncex.vst._xml.nodeParsers.getNodeValue(n[i]);
                        return t
                    },
                    handleWrapper: function(e, t) {
                        var n, i;
                        bouncex.vst._tracking.processWrapperEventPixels(e, t), (i = (n = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "VASTAdTagURL", 0) || bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "VASTAdTagURI", 0)).firstChild.nodeValue && "" !== n.firstChild.nodeValue.trim() ? n.firstChild.nodeValue.trim() : !(!n.firstChild.constructor || !n.firstChild.constructor.name || "Text" != n.firstChild.constructor.name) && n.firstChild.wholeText.trim()) ? (bouncex.campaigns[e].video.vast.handlingWrapper = !0, bouncex.vst._init.extractVastData(e, i)) : bouncex.video.fail(e, "failed to extract a VAST URL node from the XML Wrapper element")
                    }
                },
                nodeParsers: {
                    getXmlNode: function(e, t, n, i) {
                        var o, a, r, s;
                        return null == t || 1 > t.length ? (bouncex.video.log(e, "Failed to extract node -> " + n + ". XML is null. Searched node: " + n, "warning"), null) : null === (o = "object" === _typeof(t) && t.getElementsByTagName(n)) || 1 > o.length ? ("Companion" !== n && "NonLinear" !== n && bouncex.video.log(e, "Failed to find node -> " + n, "vast"), null) : 0 === i ? (bouncex.video.log(e, "Extracted first occurrence of node -> " + n, "vast"), o[0]) : 1 === i ? (a = 1 < o.length ? "Extracted " + o.length + " occurrences of node -> " + n : "Extracted " + o.length + " occurrence of node -> " + n, bouncex.video.log(e, a, "vast"), o) : (r = o.length - 1, s = _Mathround(Math.random() * r), bouncex.video.log(e, "Extracted random element[" + s + "] out of " + o.length + " " + n + " nodes", "vast"), o[s])
                    },
                    parseNodeText: function(e) {
                        return e && (e.textContent || e.text)
                    },
                    nodeExists: function(e) {
                        return null !== e && null !== e.firstChild
                    },
                    getNodeValue: function(e) {
                        var t = !(!e || !e.firstChild),
                            n = !!t && e.firstChild;
                        if ("MediaFile" === e.nodeName && e && e.childNodes && 1 < e.childNodes.length && "#text" === n.nodeName)
                            for (var i = 0; i < e.childNodes.length; i++) "URL" === e.childNodes[i].nodeName && (n = e.childNodes[i], t = !0);
                        if (t) {
                            if (n.nodeValue && "" !== n.nodeValue.trim()) return n.nodeValue;
                            if (n.nextSibling && n.nextSibling.data && "" !== n.nextSibling.data.trim()) return n.nextSibling.data;
                            if (n.wholeText && "" !== n.wholeText && "" !== n.wholeText.trim()) return n.wholeText.trim()
                        }
                        return null
                    }
                }
            },
            _tracking: {
                recordEventPixels: function(e, t) {
                    for (var n, i, o = 0; o < t.length; o++) i = t[o], bouncex.vst._xml.nodeParsers.nodeExists(i) && (i = bouncex.vst._xml.nodeParsers.getNodeValue(i), n = t[o].getAttribute("event"), e.tracking[n] = e.tracking[n] || [], -1 === e.tracking[n].indexOf(i) && e.tracking[n].push(i))
                },
                recordVideoClickTrackingPixels: function(e, t, n) {
                    var i, o, a, r = bouncex.vst._xml.nodeParsers.getXmlNode(e, n, "VideoClicks", 0);
                    null !== r && (null !== (a = bouncex.vst._xml.nodeParsers.getXmlNode(e, r, "ClickThrough", 0)) && null !== a.firstChild && (t.clickThrough = bouncex.vst._xml.nodeParsers.getNodeValue(a)), o = (i = bouncex.vst._xml.nodeParsers.getXmlNode(e, r, "ClickTracking", 0)) ? bouncex.vst._xml.nodeParsers.getNodeValue(i) : null, t.tracking.clickTracking = t.tracking.clickTracking || [], o && -1 === t.tracking.clickTracking.indexOf(o) && t.tracking.clickTracking.push(o))
                },
                recordErrorPixels: function(e, t) {
                    for (var n, i = 0; i < t.length; i++) n = t[i], bouncex.vst._xml.nodeParsers.nodeExists(n) && (n = bouncex.vst._xml.nodeParsers.getNodeValue(n), e.tracking.error = e.tracking.error || [], null !== n && -1 === e.tracking.error.indexOf(n) && e.tracking.error.push(n))
                },
                recordImpressionPixels: function(e, t) {
                    for (var n, i = 0; i < t.length; i++) n = t[i], bouncex.vst._xml.nodeParsers.nodeExists(n) && (n = bouncex.vst._xml.nodeParsers.getNodeValue(n), e.tracking.impression = e.tracking.impression || [], null !== n && -1 === e.tracking.impression.indexOf(n) && e.tracking.impression.push(n))
                },
                processWrapperEventPixels: function(e, t) {
                    bouncex.video.log(e, "WRAPPER: init extraction", "vast");
                    var n = bouncex.campaigns[e].video.vast,
                        i = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Impression", 1),
                        o = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Tracking", 1),
                        a = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Linear", 0),
                        r = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Error", 1);
                    i && (bouncex.video.log(e, "WRAPPER: handling impressions", "vast"), bouncex.vst._tracking.recordImpressionPixels(n, i)), r && (bouncex.video.log(e, "WRAPPER: handling error pixels", "vast"), bouncex.vst._tracking.recordErrorPixels(e, n, r)), o && (bouncex.video.log(e, "WRAPPER: handling tracking events", "vast"), bouncex.vst._tracking.recordEventPixels(n, o)), a && (bouncex.video.log(e, "WRAPPER: handling inline ad click tracking", "vast"), bouncex.vst._xml.elementParsers.handleVideo(e, n, a))
                }
            },
            _processVastData: {
                getAd: function(e, t, n) {
                    var i = t.getElementsByTagName("MediaFile"),
                        o = this.addMetaData(e, t),
                        a = bouncex.campaigns[e].video.vast;
                    bouncex.vst._validations.checkMediaExists(e, t, i, n), bouncex.vst._xml.elementParsers.init(e, o, t, a)
                },
                addMetaData: function(e, t) {
                    var n = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Ad", 2),
                        i = {};
                    return null !== n && (i.adId = n.getAttribute("id") || null, i.type = n.nodeName || null, i.system = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("AdSystem")[0]) || !1, i.title = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("AdTitle")[0]) || !1, i.description = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("Description")[0]) || !1, i.system = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("AdSystem")[0]) || !1, i.title = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("AdTitle")[0]) || !1, i.description = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("Description")[0]) || !1, i.advertiser = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("Advertiser")[0]) || !1, i.pricing = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("Pricing")[0]) || !1, i.category = bouncex.vst._xml.nodeParsers.parseNodeText(n.getElementsByTagName("Category")[0]) || !1, 0 === bouncex.campaigns[e].video.vast.wrapperLevel && (bouncex.campaigns[e].video.vast.metaData = i), n)
                }
            },
            _validations: {
                checkMediaExists: function(e, t, n) {
                    if (null === n || 1 > n.length) {
                        var i = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "Wrapper", 0),
                            o = bouncex.vst._xml.nodeParsers.getXmlNode(e, t, "status", 0);
                        o && "NO_AD" === o.innerHTML && bouncex.video.fail(e, "vastResponse with no ad - status: " + o.innerHTML + ", campaign failed."), null === i && bouncex.video.fail(e, "vastResponse without video, campaign failed")
                    }
                },
                checkVastUrl: function(e) {
                    var t = bouncex.vst._validations.checkUrl(e),
                        n = t.href || null;
                    return "https:" === window.location.protocol && "https" !== t.protocol && (n = "https:" + n.substring(5)), n
                },
                checkHttpRequest: function(e, t, n) {
                    "function" != typeof n && bouncex.video.fail(e, "VAST [validateHttpCall]: callback is not a function", !0), "string" != typeof t && bouncex.video.fail(e, "VAST [validateHttpCall]: not a valid url", !0)
                },
                checkUrl: function(e) {
                    var t = document.documentMode,
                        n = document.createElement("a");
                    return t && (n.setAttribute("href", e), e = n.href), n.setAttribute("href", e), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        hostname: n.hostname,
                        path: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                },
                checkXml: function(e) {
                    var t;
                    if ("string" == typeof e) {
                        t = bouncex.vst._xml.convertStringToXML(e)
                    } else {
                        if (null === e && null === e.responseXML && null === e.responseText) {
                            var n = e ? {
                                url: encodeURIComponent(e.responseURL)
                            } : {};
                            return bouncex.video.log(campaignId, "vast url returned null response | " + n, "error"), !1
                        }
                        var i = e.responseXML || e.responseText || e.response;
                        if ("string" == typeof i) try {
                            t = bouncex.vst._xml.convertStringToXML(e.responseText)
                        } catch (e) {
                            return bouncex.video.log(campaignId, "vastResponse returned null from url " + n, "error"), !1
                        } else t = i
                    }
                    return t
                }
            },
            _loadPlayer: {
                vastMedia: function(e, t) {
                    if (bouncex.video.canPlayMedia(e)) {
                        var n = t.src && "string" != typeof t.src ? JSON.stringify(t.src) : t.src ? t.src : "";
                        bouncex.video.log(e, "found compatible media file (" + n + ")", "vast"), bouncex.campaigns[e].video.status.vastDataLoaded = !0, bouncex.video.configPlayer(e)
                    }
                },
                vpaidMedia: function(e, t) {
                    bouncex.campaigns[e].video.status.vastDataLoaded = !0;
                    var n = document.createElement("SCRIPT");
                    n.type = "text/javascript", n.src = t.vpaidUrl, n.onload = function() {
                        bouncex.vpd.generateVPAIDManager(e)
                    }, window.top.document.body.appendChild(n)
                },
                handleVPAID: function(e, t, n, i) {
                    var o = bouncex.vst._xml.nodeParsers.getXmlNode(e, n, "AdParameters", 0);
                    t.vpaidWidth = jQuery("#bx-creative-" + e + " .bx-video-wrapper").css("width").replace(/[^0-9.]/g, ""), t.vpaidHeight = jQuery("#bx-creative-" + e + " .bx-video-wrapper").css("height").replace(/[^0-9.]/g, ""), t.vpaidUrl = "https:" === window.location.protocol && 0 === i.indexOf("http:") ? "https:" + i.substring(5) : i, t.isVPAID = !0, bouncex.campaigns[e].video.isVPAID = !0, o && (o = bouncex.vst._xml.nodeParsers.getNodeValue(o), t.vpaidAdParams = o)
                }
            },
            _helpers: {
                isVastOrTag: function(e) {
                    return /^[\s]*<VAST/i.test(e) ? "vastxml" : "tag"
                },
                toCamelCase: function(e) {
                    return e.charAt(0).toLowerCase() + e.slice(1)
                },
                calculateAspectRatioData: function(e, t) {
                    var n = {},
                        i = parseInt(e) / parseInt(t);
                    return i == 4 / 3 ? n.paddingTop = "75%" : 1.5 == i ? n.paddingTop = "66.66666666666667%" : i == 16 / 9 ? n.paddingTop = "56.25%" : 1 == i ? n.paddingTop = !1 : 1.6 == i && (n.paddingTop = "62.5%"), n.ratio = i, n
                }
            },
            _internal: {
                groupCollapsed: function(e, t, n) {
                    var i = e ? "(" + e + ")" : "";
                    bouncex.console.groupCollapsed("%c vast parser " + i + ": " + t, "color: " + (n ? "#FF0000" : "#09AF59"))
                },
                groupEnd: function(e, t, n) {
                    var i = e ? "(" + e + ")" : "";
                    bouncex.console.groupEnd("%c vast parser " + i + ": " + t, "color: " + (n ? "#FF0000" : "#09AF59"))
                }
            }
        }, bouncex.video = {
            init: function(e, t, n, i) {
                bouncex.campaigns[e].video = bouncex.campaigns[e].video || {}, bouncex.video.buildEnv(e, n, i);
                try {
                    bouncex.vst._init.buildVastEnv(e, t)
                } catch (t) {
                    bouncex.video.fail(e, t)
                }
            },
            buildEnv: function(e, t, n) {
                var i = bouncex.campaigns[e].video;
                i.player = document.getElementById("bx-video-player-" + e), i.uniqueEventPixels = [], i.vast = {}, i.vpaid = {}, i.integrations = {}, i.integrations.moatApiReference = {}, i.config = {}, i.config.provider = t, i.creative = {}, i.creative.requestWidth = n.width, i.creative.requestHeight = n.height, i.status = {
                    ready: !1,
                    qOne: !1,
                    midpoint: !1,
                    qThree: !1,
                    vastDataLoaded: !1,
                    stopped: !1
                }
            },
            canPlayMedia: function(e) {
                var t = document.createElement("VIDEO"),
                    n = bouncex.campaigns[e].video.vast.type;
                if ("maybe" === t.canPlayType(n) || "probably" === t.canPlayType(n)) return bouncex.video.log(e, "media file supported", "player"), !0;
                var i = bouncex.campaigns[e].video.vast.wrapperLevel || !1;
                bouncex.vst._internal.groupEnd(e, "vast parser exit", !1), i && !n ? bouncex.video.log(e, "no media found on wrapper level " + i, "warning") : bouncex.video.log(e, "video player does not support " + n, "error")
            },
            bxPlayerPop: function(e, t) {
                var n = bouncex.video.getPlayerSnapshot(e, bouncex.campaigns[e].video.player);
                report(e, "pop", {
                    "pop:activation": t,
                    video_type: n.isVPAID ? "VPAID" : "VAST",
                    media_type: n.type,
                    media_size: n.dimensions.videoWidth + "x" + n.dimensions.videoHeight
                })
            },
            onPlay: function(e) {
                var t = bouncex.campaigns[e],
                    n = t.video.player,
                    i = t.video.config.provider,
                    o = -1 < bouncex.campaigns[e].video.config.src.indexOf("/demo/ads_demo_video.mp4"),
                    a = bouncex.video.getPlayerSnapshot(e, n);
                bouncex.off(jQuery(n), "onplay"), t.video.videoResponseLoaded = !0, "aqbx" === i && o && bouncex.video.aqbxStyleFix(e, n);
                try {
                    n.play()
                } catch (t) {
                    bouncex.video.log(e, "error: " + t, "error")
                }
                bouncex.video.report(e, "video_play"), bouncex.video.fireTrackingEvents(e, "start");
                var r = this._integrations.moat.getDispatchEventParams("AdVideoStart", a.volume);
                t.video.integrations.moatApiReference.dispatchEvent(r, e)
            },
            play: function(e) {
                var t = bouncex.campaigns[e],
                    n = bouncex.video.getPlayerSnapshot(e, t.video.player);
                n.isVPAID && n.ready && t.video.videoResponseLoaded ? t.video.vpaid.ad.startAd() : !n.playing && n.ready && t.video.videoResponseLoaded && t.video.player.play()
            },
            playVideoBeforeImpression: function(e, t) {
                var n = bouncex.campaigns[t];
                this._integrations.moat.init(t, n.video.vast);
                var i = n.video.player,
                    o = bouncex.video.getPlayerSnapshot(t, n.video.player),
                    a = this._integrations.moat.apiReference;
                n.video.integrations.moatApiReference = bouncex.video._integrations.moat.initMoatTracking(a.container, a.ids, a.duration, a.partnerCode, a.url), o.isVPAID ? bouncex.vpd.playVPAIDBeforeImpression(e, t) : (bouncex.on(jQuery(i), "onplay", bouncex.video.onPlay(t)), bouncex.on(jQuery(i), "onerror", function(e) {
                    jQuery(i).off("onerror"), i.pause(), bouncex.campaigns[t].video.status.stopped = !0, bouncex.video.fail(t, e.message ? e.message : "error loading video response")
                }), n.video.videoResponseLoaded && (show_ad(e, t), bouncex.video.report(t, "video_impression"), bouncex.video.fireTrackingEvents(t, "impression")))
            },
            configPlayer: function(e) {
                var t = bouncex.campaigns[e],
                    n = t.video.config || {},
                    i = t.video.vast,
                    o = bouncex.video.getPlayerSnapshot(e, t.video.player);
                if (o.isVPAID || (n.src = i.src || "//" + bouncex.website.biu + "/assets/global/videos/pub/demo/ads_demo_video.mp4", n.clickThroughUrl = i.clickThrough || !1), n.aspectRatio = i.aspectRatio, n.offsetAspectRatio = i.offsetAspectRatio, o.isVPAID ? (n.width = i.vpaidWidth, n.height = i.vpaidHeight) : (n.width = i.width, n.height = i.height), bouncex.video.stylePlayer(e), !o.isVPAID) {
                    var a = document.getElementById("bx-video-player-" + e);
                    jQuery(a).attr("src", bouncex.campaigns[e].video.config.src), bouncex.video.setClickThroughUrl(e, n.clickThroughUrl), bouncex.video.addVideoEventTrackingListeners(e)
                }
                t.video.config = n
            },
            setClickThroughUrl: function(e, t) {
                var n = bouncex.campaigns[e].video.player;
                "" !== t && !1 !== t && jQuery(n).attr("href", t)
            },
            clickThroughHelper: function(e, t) {
                window.open(t, "_blank").focus()
            },
            toggleMute: function(e) {
                var t = bouncex.campaigns[e].video.player;
                jQuery(".bx-video-wrapper").toggleClass("bx-video-player-unmuted"), t.muted = !t.muted || !t.muted
            },
            playPausePlayer: function(e) {
                var t = bouncex.campaigns[e].video,
                    n = t.player;
                n.paused || n.ended ? (n.play(), t.manuallyPaused = !1) : (n.pause(), t.manuallyPaused = !0)
            },
            playPauseVisibility: function(e) {
                var t = bouncex.campaigns[e].video,
                    n = t.player;
                BrowserUtil.currentTab.isVisible() ? !t.manuallyPaused && (n.paused || n.ended) && n.play() : n.pause()
            },
            updateProgressPlayer: function(e) {
                var t = document.getElementById("bx-video-progress-wrapper-" + e).getElementsByClassName("bx-video-progress-time-total"),
                    n = document.getElementById("bx-video-progress-wrapper-" + e).getElementsByClassName("bx-video-progress-time-left"),
                    i = bouncex.video.getPlayerSnapshot(e, bouncex.campaigns[e].video.player),
                    o = !1 === i.time.inSeconds ? 0 : i.time.inSeconds,
                    a = _Mathfloor(i.time.durationRounded),
                    r = bouncex.video.getFormattedTime(o),
                    s = bouncex.video.getFormattedTime(a);
                jQuery(n).text(r), jQuery(t).text(s)
            },
            toMinutes: function(e) {
                return (e / 60).toFixed(2).replace(".", ":")
            },
            toSeconds: function(e) {
                return 10 > e && (e = ("0" + e).slice(-2)), e = "0:" + e
            },
            getFormattedTime: function(e) {
                return 60 > e ? bouncex.video.toSeconds(e) : bouncex.video.toMinutes(e)
            },
            canPlay: function(e) {
                if (!bouncex.campaigns[e].video.isVPAID) {
                    var t = bouncex.campaigns[e].video.status;
                    t.ready = !0, t.canPlayEvent = !0, bouncex.video.playerReady(e), jQuery(bouncex.campaigns[e].video.player).unbind("canplay.bx-" + e)
                }
            },
            ready: function(e) {
                var t = bouncex.campaigns[e];
                return t.video.status && t.video.status.ready && !t.video.videoResponseLoaded
            },
            playerReady: function(e) {
                bouncex.campaigns[e].video.status.ready ? (!bouncex.campaigns[e].video.isVPAID && bouncex.video.updateProgressPlayer(e), bouncex.gbi2._activateCampaign(e)) : bouncex.video.log(e, "player not ready", "player")
            },
            getPlayerSnapshot: function(e, t) {
                var n = bouncex.campaigns[e].video.vast,
                    i = t.duration || n.duration,
                    o = _Mathfloor(.25 * i),
                    a = _Mathfloor(2 * o),
                    r = _Mathfloor(3 * o),
                    s = bouncex.campaigns[e].video.status,
                    c = bouncex.campaigns[e].video.vast,
                    u = bouncex.campaigns[e].video.creative;
                return {
                    ended: t.ended,
                    playing: !t.paused,
                    paused: t.paused,
                    type: t.currentType || n.type,
                    src: t.currentSrc || c.vpaidUrl,
                    clickThroughUrl: n.clickThrough,
                    muted: t.muted,
                    volume: t.volume,
                    ready: s.ready || !1,
                    playbackRate: t.playbackRate,
                    seeking: t.seeking,
                    isVPAID: bouncex.campaigns[e].video.vast.isVPAID,
                    vastDataLoaded: s.vastDataLoaded,
                    dimensions: {
                        offsetWidth: t.offsetWidth,
                        offsetHeight: t.offsetHeight,
                        videoWidth: t.videoWidth || n.vpaidWidth,
                        videoHeight: t.videoHeight || n.vpaidHeight,
                        requestWidth: u.requestWidth,
                        requestHeight: u.requestHeight
                    },
                    time: {
                        duration: i,
                        durationRounded: _Mathfloor(i),
                        currentUnformatted: t.currentTime || !1,
                        inSeconds: parseInt(t.currentTime % 60) || !1,
                        firstQuartile: {
                            value: o,
                            passed: s.qOne || !1
                        },
                        midpoint: {
                            value: a,
                            passed: s.midpoint || !1
                        },
                        thirdQuartile: {
                            value: r,
                            passed: s.qThree || !1
                        }
                    }
                }
            },
            stylePlayer: function(e) {
                var t = bouncex.campaigns[e].video.creative;
                t.dynamicHeight = bouncex.campaigns[e].obj1.find(".bx-creative-" + e + " .bx-row-video").width(), t.dynamicWidth = bouncex.campaigns[e].obj1.find(".bx-creative-" + e + " .bx-row-video").height(), jQuery(".bxc.bx-campaign-" + e).addClass("bx-width-full-content"), jQuery("body").on("focus", "#bx-video-btns-" + e + " .bx-video-btn", function() {
                    jQuery("#bx-video-wrapper-" + e).addClass("bx-video-wrapper-has-focus")
                }).on("blur", "#bx-video-btns-" + e + " .bx-video-btn", function() {
                    jQuery(".bx-video-wrapper-" + e).removeClass("bx-video-wrapper-has-focus")
                }), bouncex.campaigns[e].video.vast.isVPAID || bouncex.video.adjustAspectRatio(e)
            },
            adjustAspectRatio: function(e) {
                var t = bouncex.campaigns[e].video,
                    n = t.vast.aspectRatio.paddingTop,
                    i = t.vast.aspectRatio.ratio,
                    o = t.creative.dynamicWidth,
                    a = t.creative.dynamicHeight,
                    r = -1 < t.config.src.indexOf("/demo/ads_demo_video.mp4") && "aqbx" === bouncex.campaigns[e].video.config.provider,
                    s = "300" === t.config.height && "400" === t.config.width && "75%" === n;
                !n || i === o / a || r || s || (jQuery("#bx-video-wrapper-" + e).addClass("bx-video-aspectRatio-fix-" + e), jQuery(".bx-video-aspectRatio-fix-" + e).css("padding-top", n))
            },
            aqbxStyleFix: function(e, t) {
                var n = jQuery(t)[0].videoHeight,
                    i = jQuery(t)[0].videoWidth,
                    o = (+jQuery(".bx-creative-" + e + " .bx-row-video").css("width").split("px")[0] / (i / n)).toString() + "px";
                jQuery(".bx-creative-" + e + " .bx-video-wrapper").css("height", o)
            },
            detectVideoProgress: function(e, t, n, i) {
                var o, a = bouncex.campaigns[e].video.status,
                    r = bouncex.video.getPlayerSnapshot(e, bouncex.campaigns[e].video.player),
                    s = r.time.inSeconds;
                t !== s || r.time.firstQuartile.passed ? n !== s || r.time.midpoint.passed ? i === s && !r.time.thirdQuartile.passed && (o = this._integrations.moat.getDispatchEventParams("AdVideoThirdQuartile", r.volume), bouncex.video.report(e, "video_play_third_quartile"), bouncex.video.fireTrackingEvents(e, "thirdQuartile"), a.qThree = !0) : (o = this._integrations.moat.getDispatchEventParams("AdVideoMidpoint", r.volume), bouncex.video.report(e, "video_play_midpoint"), bouncex.video.fireTrackingEvents(e, "midpoint"), a.midpoint = !0) : (o = this._integrations.moat.getDispatchEventParams("AdVideoFirstQuartile", r.volume), bouncex.video.report(e, "video_play_first_quartile"), bouncex.video.fireTrackingEvents(e, "firstQuartile"), a.qOne = !0), o && bouncex.campaigns[e].video.integrations.moatApiReference.dispatchEvent(o, e)
            },
            addVideoEventTrackingListeners: function(e) {
                var t = document.getElementById("bx-video-player-" + e);
                bouncex.campaigns[e].video.player = t, bxBind(t, " volumechange.bx-" + e + " canplay.bx-" + e + " durationchange.bx-" + e + " ended.bx-" + e + " pause.bx-" + e + " play.bx-" + e + " playing.bx-" + e + " timeupdate.bx-" + e + " loadeddata.bx-" + e + " error.bx-" + e + " click.bx-" + e + " canplaythrough.bx-" + e + " touchend.bx-" + e + " onplay.bx-" + e + " loadedmetadata.bx-" + e, function(n) {
                    bouncex.video.handleVideoEvents(e, t, n)
                }), this.handleVideoClose(e)
            },
            handleVideoEvents: function(t, n, i) {
                var o = i.type,
                    a = bouncex.campaigns[t].video.status,
                    r = bouncex.video.getPlayerSnapshot(t, n);
                if ("canplaythrough" !== o || a.canPlayEvent)
                    if ("loadedmetadata" === o && bouncex.browser.ios) n.setAttribute("playsinline", ""), bouncex.video.canPlay(t);
                    else if ("loadeddata" === o) bouncex.video.report(t, "video_load");
                else if ("canplay" === o) bouncex.video.canPlay(t);
                else if ("play" === o) this.handlePlayEvent(t, r);
                else if ("volumechange" === o) this.handleVolumechangeEvent(t, r, n);
                else if ("timeupdate" !== o || r.isVPAID)
                    if ("pause" !== o || bouncex.campaigns[t].video.status.stopped || bouncex.campaigns[t].video.player.ended)
                        if ("ended" === o) this.handleEndEvent(t, r);
                        else if ("error" === o) {
                    var s = e.data && e.data.message ? e.data.message : "an error has occurred, campaign failed";
                    bouncex.video.fail(t, s)
                } else("click" === o || "touchend" === o) && this.handleClickEvent(t, r);
                else this.handlePauseEvent(t, r);
                else this.handleTimeUpdateEvent(t, r);
                else bouncex.video.canPlay(t)
            },
            handleVideoClose: function(e) {
                var t = document.getElementById("bx-video-player-" + e),
                    n = document.getElementById("bx-creative-" + e).getElementsByClassName("bx-close-link");
                bouncex.campaigns[e].video.player = t, jQuery(n).on("click.bx-" + e, function() {
                    var n = bouncex.video.getPlayerSnapshot(e, t),
                        i = bouncex.video._integrations.moat.getDispatchEventParams("AdStopped", n.volume);
                    !1 === bouncex.campaigns[e].video.vast.isVPAID && (bouncex.campaigns[e].video.status.stopped = !0, t.pause()), t.ended = !0, bouncex.campaigns[e].video.integrations.moatApiReference.dispatchEvent(i, e)
                })
            },
            handlePlayEvent: function(e, t) {
                var n = this._integrations.moat.getDispatchEventParams("AdPlaying", t.volume);
                jQuery(".bx-creative-" + e + " .bx-video-wrapper").toggleClass("bx-video-player-paused"), bouncex.campaigns[e].video.integrations.moatApiReference.dispatchEvent(n, e)
            },
            handleVolumechangeEvent: function(e, t, n) {
                var i = this._integrations.moat.getDispatchEventParams("AdVolumeChange", t.volume);
                n.muted && bouncex.video.fireTrackingEvents(e, "mute"), bouncex.campaigns[e].video.integrations.moatApiReference.dispatchEvent(i, e)
            },
            handleTimeUpdateEvent: function(e, t) {
                bouncex.video.updateProgressPlayer(e), bouncex.video.detectVideoProgress(e, t.time.firstQuartile.value, t.time.midpoint.value, t.time.thirdQuartile.value)
            },
            handlePauseEvent: function(e, t) {
                var n = bouncex.video._integrations.moat.getDispatchEventParams("AdPaused", t.volume);
                jQuery(".bx-creative-" + e + " .bx-video-wrapper").toggleClass("bx-video-player-paused"), bouncex.video.report(e, "video_pause"), bouncex.campaigns[e].video.integrations.moatApiReference.dispatchEvent(n, e)
            },
            handleClickEvent: function(e, t) {
                t.clickThroughUrl && bouncex.video.clickThroughHelper(e, t.clickThroughUrl), bouncex.video.fireTrackingEvents(e, "click")
            },
            handleEndEvent: function(e, t) {
                var n = this._integrations.moat.getDispatchEventParams("AdVideoComplete", t.volume);
                bouncex.video.report(e, "video_play_complete"), bouncex.video.fireTrackingEvents(e, "complete"), bouncex.campaigns[e].video.integrations.moatApiReference.dispatchEvent(n, e), bouncex.off(bouncex.window, " volumechange.bx-" + e + " canplay.bx-" + e + " durationchange.bx-" + e + " ended.bx-" + e + " pause.bx-" + e + " play.bx-" + e + " playing.bx-" + e + " timeupdate.bx-" + e + " loadeddata.bx-" + e + " error.bx-" + e + " click.bx-" + e + " canplaythrough.bx-" + e + "touchend.bx-" + e + "onplay.bx-" + e)
            },
            getEventUrls: function(e, t) {
                var n;
                return (n = bouncex.campaigns[e].video.vast.vpaidUrl ? bouncex.campaigns[e].video.vpaid.vastConfig.tracking[t] : bouncex.campaigns[e].video.vast.tracking[t]) && 0 !== n.length && ("string" == typeof n && (n = [n]), n)
            },
            fireTrackingEvents: function(e, t) {
                var n = !1,
                    i = bouncex.campaigns[e].video.uniqueEventPixels || [],
                    o = this.getEventUrls(e, t);
                if (o)
                    for (var a, r = 0; r < o.length; r++)
                        if (!(null == (a = o[r]) || 1 > a.length || -1 === a.indexOf("http"))) {
                            if (i.includes(a)) {
                                n = !0;
                                continue
                            }
                            i.push(a), bouncex.video.log(e, n ? "already fired event pixel for " + t : "firing event pixel " + a + " for " + t, "eventpixel"), document.createElement("img").src = a
                        }
            },
            _integrations: {
                moat: {
                    apiReference: {},
                    init: function(e, t) {
                        bouncex.video.log(e, "init moat integration", "moat"), bouncex.video._integrations.moat.apiReference = this.getMoatApiReference(e, t)
                    },
                    initMoatTracking: function(e, t, n, i, o) {
                        var a, r, s = document.createElement("script"),
                            c = [];
                        t = {
                            adData: {
                                ids: t,
                                duration: n,
                                url: o
                            },
                            dispatchEvent: function(e, t) {
                                t && bouncex.video.log(t, e.type, "moat"), this.sendEvent ? (c && (c.push(e), e = c, c = !1), this.sendEvent(e)) : c.push(e)
                            }
                        }, n = "_moatApi" + _Mathfloor(1e8 * Math.random());
                        try {
                            r = (a = e.ownerDocument).defaultView || a.parentWindow
                        } catch (e) {
                            a = document, r = window
                        }
                        return r[n] = t, s.type = "text/javascript", e && e.insertBefore(s, e.childNodes[0] || null), s.src = "https://z.moatads.com/" + i + "/moatvideo.js#" + n, t
                    },
                    getMoatApiReference: function(e, t) {
                        var n = bouncex.campaigns[e];
                        return {
                            partnerCode: "bouncexjsvideo854426616072",
                            container: bouncex.campaigns[e].video.player,
                            url: t.src,
                            duration: t.duration,
                            ids: {
                                level1: window.location.host + "(" + bouncex.website.id + ")",
                                level2: bouncex.gbi2.getDeploymentType(e),
                                level3: t.isVPAID ? "VPAID" : "VAST",
                                level4: "video",
                                slicer1: bouncex.state.mobile ? "mobile" : "desktop",
                                slicer2: n.trigger
                            }
                        }
                    },
                    getDispatchEventParams: function(e, t) {
                        return {
                            type: e,
                            adVolume: t
                        }
                    }
                }
            },
            report: function(e, t, n) {
                bouncex.video.log(e, 'reporting event "' + t + '"', "player");
                var i = bouncex.video.getPlayerSnapshot(e, bouncex.campaigns[e].video.player);
                (n = n || {}).source = "ads", n.agent = "js", n.video_type = i.isVPAID ? "VPAID" : "VAST", n.media_type = i.type, n.media_size = i.dimensions.videoWidth + "x" + i.dimensions.videoHeight, n.video_length = i.time.duration, "video_pause" === t && (n.pause_location = i.time.currentUnformatted), buildReport(e, t, n)
            },
            log: function(e, t, n) {
                var i, o = e ? "[" + e + "]" : "",
                    a = "(" + (bouncex.campaigns[e] ? bouncex.campaigns[e].video.config.provider || "no provider" : "stack") + ")",
                    r = "error" === n ? "#FF0000" : "#00F";
                switch (_records2.default.addRecord({
                    group: "video",
                    campaignId: e,
                    message: t,
                    isError: r
                }), n) {
                    case "vast":
                        i = "#09AF59";
                        break;
                    case "vpaid":
                        i = "#226666";
                        break;
                    case "player":
                        i = "#8E29D4";
                        break;
                    case "moat":
                        i = "#A13647";
                        break;
                    case "error":
                        i = "#FF0000", bouncex.video.report(e, "video_error", t);
                        break;
                    case "warning":
                        i = "#F67917";
                        break;
                    case "eventpixel":
                        i = "#956843";
                        break;
                    default:
                        i = "#8E29D4"
                }
                "vast" === n ? bouncex.log("%c [vast]: " + t, "color: " + i) : bouncex.log("%c video [" + n + "] " + o + a + ": " + t, "color: " + i)
            },
            fail: function(e, t) {
                bouncex.campaigns[e].failed = !0, bouncex.video.log(e, t, "error")
            }
        }, bouncex.vpd = {
            generateVPAIDManager: function(e) {
                bouncex.video.configPlayer(e), bouncex.campaigns[e].video.vpaid = bouncex.campaigns[e].vpaid || {}, bouncex.vpd.campaignId = e;
                try {
                    bouncex.video.log(e, "getVPAIDAd() called", "vpaid"), bouncex.campaigns[e].video.vpaid.ad = getVPAIDAd(), this._versionCheck(e)
                } catch (t) {
                    bouncex.campaigns[e].video.vpaid.ad = document.getVPAIDAd()
                }
                this._init(e)
            },
            _versionCheck: function(e) {
                var t = bouncex.campaigns[e].video.vpaid.ad.handshakeVersion("2.0");
                if (t && "2.0" !== t) return bouncex.video.log(e, "generateVPAIDManager -> Ad VPAID version (" + t + ") is not supported", "error"), !1
            },
            _buildVpaidEnv: function(e, t, n, i) {
                bouncex.video.log(e, "building VPAID environment", "vpaid");
                var o = t;
                return o.ad = bouncex.campaigns[e].video.vpaid.ad, o.vastConfig = bouncex.campaigns[e].video.vast, o.config = {}, o.callbacks = {
                    AdClickThru: this.onAdClickThru,
                    AdDurationChange: this.onAdDurationChange,
                    AdError: this.onAdError,
                    AdImpression: this.onAdImpression,
                    AdLoaded: this.onAdLoaded,
                    AdPaused: this.onAdPaused,
                    AdPlaying: this.onAdPlaying,
                    AdSizeChange: this.onAdSizeChange,
                    AdSkippableStateChange: this.onAdSkippableStateChange,
                    AdSkipped: this.onAdSkipped,
                    AdStarted: this.onAdStarted,
                    AdStopped: this.onAdStopped,
                    AdUserAcceptInvitation: this.onAdUserAcceptInvitation,
                    AdUserClose: this.onAdUserClose,
                    AdUserMinimize: this.onAdUserMinimize,
                    AdVideoComplete: this.onAdVideoComplete,
                    AdVideoFirstQuartile: this.onAdVideoFirstQuartile,
                    AdVideoMidpoint: this.onAdVideoMidpoint,
                    AdVideoStart: this.onAdVideoStart,
                    AdVideoThirdQuartile: this.onAdVideoThirdQuartile,
                    AdVolumeChange: this.onAdVolumeChange
                }, o.adUnit = {
                    lastVolume: ""
                }, o.config.creativeData = {}, o.config.environmentVars = {}, o.config.viewMode = "normal", o.config.desiredBitrate = -1, o.config.environmentVars.slot = i, o.config.environmentVars.videoSlot = n, o.config.environmentVars.autoPlay = !1, o.config.environmentVars.videoSlotCanAutoPlay = !0, o
            },
            _init: function(e) {
                bouncex.video.log(e, "init VPAID", "vpaid");
                var t = bouncex.document[0].getElementById("bx-video-player-" + e),
                    n = bouncex.document[0].getElementById("bx-video-wrapper-" + e),
                    i = this._buildVpaidEnv(e, bouncex.campaigns[e].video.vpaid, t, n),
                    o = i.ad;
                for (var a in n.removeChild(n.childNodes[3]), i.callbacks) o.subscribe(i.callbacks[a], a);
                i.vastConfig.vpaidAdParams && (i.config.creativeData = {
                    AdParameters: i.vastConfig.vpaidAdParams
                }), bouncex.vpd._validateVPAID(o) || bouncex.video.log(e, "_validateVPAID Error: VPAID interface check failed", "error"), bouncex.vpd._adjustCreativeForVpaid(e), o.initAd(i.vastConfig.vpaidWidth, i.vastConfig.vpaidHeight, i.config.viewMode, i.config.desiredBitrate, i.config.creativeData, i.config.environmentVars)
            },
            _validateVPAID: function(e) {
                return !!(e.handshakeVersion && "function" == typeof e.handshakeVersion && e.initAd && "function" == typeof e.initAd && e.startAd && "function" == typeof e.startAd && e.stopAd && "function" == typeof e.stopAd && e.skipAd && "function" == typeof e.skipAd && e.resizeAd && "function" == typeof e.resizeAd && e.pauseAd && "function" == typeof e.pauseAd && e.resumeAd && "function" == typeof e.resumeAd && e.expandAd && "function" == typeof e.expandAd && e.collapseAd && "function" == typeof e.collapseAd && e.subscribe && "function" == typeof e.subscribe && e.unsubscribe && "function" == typeof e.unsubscribe)
            },
            _adjustCreativeForVpaid: function(e) {
                var t = bouncex.campaigns[e].video.vast,
                    n = 2 * jQuery("#bx-creative-" + e + " .bx-wrap").css("padding-left").replace(/[^0-9]/g, "");
                jQuery("#bx-creative-" + e).css("max-width", parseInt(t.vpaidWidth) + n + "px")
            },
            _fireVpaidTrackingEvents: function(e, t) {
                var n = bouncex.campaigns[bouncex.vpd.campaignId].video.uniqueEventPixels || [],
                    i = bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.ad,
                    o = !1;
                if (null != t && 0 != t.length && !bouncex.video.disableTrackingEvents) {
                    "string" == typeof t && (t = [t]);
                    for (var a, r = 0; r < t.length; r++)
                        if (!(null === (a = t[r]) || 1 > a.length || -1 === a.indexOf("http"))) {
                            if (n.includes(a)) {
                                o = !0;
                                continue
                            }
                            n.push(a), ("true" === i.allowCacheBusting || !0 === i.allowCacheBusting) && (-1 < a.indexOf("?") ? a += "&rnd=" + Math.random() : a += "?rnd=" + Math.random()), bouncex.video.log(bouncex.vpd.campaignId, o ? "already fired event pixel for " + e : "firing event pixel " + a + " for " + e, "eventpixel"), document.createElement("img").src = a
                        }
                }
            },
            playVPAIDBeforeImpression: function(e, t) {
                var n = bouncex.campaigns[t].video;
                n.videoResponseLoaded = !0, n.triggerType = e, n.vpaid.ad.startAd()
            },
            _adLoaded: function(e) {
                bouncex.video.report(e, "video_load"), bouncex.campaigns[e].video.status.ready = !0, bouncex.video.playerReady(e)
            },
            _adStarted: function(e) {
                bouncex.campaigns[e].video.videoResponseLoaded && show_ad(bouncex.campaigns[e].video.triggerType, e)
            },
            _currentAdVolume: function() {
                return bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.ad.getAdVolume()
            },
            onAdLoaded: function() {
                var e = bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid;
                bouncex.vpd._adLoaded(bouncex.vpd.campaignId, e), bouncex.vpd._fireVpaidTrackingEvents("AdLoaded", e.vastConfig.tracking.loaded), e.ad.unsubscribe(e.callbacks.onAdLoaded, "AdLoaded")
            },
            onAdStarted: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.vpd._fireVpaidTrackingEvents("AdStarted", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.creativeView), bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.adUnit.lastVolume = e, bouncex.vpd._adStarted(bouncex.vpd.campaignId)
            },
            onAdUserClose: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdUserClose", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.close)
            },
            onAdUserMinimize: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdUserMinimize", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.collapse)
            },
            onAdUserAcceptInvitation: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdUserAcceptInvitation", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.acceptInvitation)
            },
            onAdSkippableStateChange: function() {
                bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.ad.getAdSkippableState()
            },
            onAdStopped: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.campaigns[bouncex.vpd.campaignId].video.status.stopped = !0, bouncex.close_ad(bouncex.vpd.campaignId), bouncex.vpd._moatDispatch("AdStopped", e)
            },
            onAdPaused: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.video.manuallyPaused = !0, bouncex.vpd._fireVpaidTrackingEvents("AdPaused", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.pause), bouncex.video.report(bouncex.vpd.campaignId, "video_pause"), bouncex.vpd._moatDispatch("AdPaused", e)
            },
            onAdPlaying: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.video.manuallyPaused = !1, bouncex.vpd._fireVpaidTrackingEvents("AdPlaying", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.resume), bouncex.vpd._moatDispatch("AdPlaying", e)
            },
            onAdVolumeChange: function() {
                var e = bouncex.vpd._currentAdVolume(),
                    t = bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.adUnit.lastVolume;
                0 === e && 0 < t ? bouncex.vpd._fireVpaidTrackingEvents("AdVolumeChange", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.mute, "volumechange") : 0 < e && 0 === t && bouncex.vpd._fireVpaidTrackingEvents("AdVolumeChange", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.unmute, "volumechange"), bouncex.vpd._moatDispatch("AdVolumeChange", e), bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.adUnit.lastVolume = e
            },
            onAdImpression: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdImpression", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.impression), bouncex.video.report(bouncex.vpd.campaignId, "video_impression")
            },
            onAdVideoStart: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.adUnit.started = !0, bouncex.vpd._fireVpaidTrackingEvents("AdVideoStart", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.start), bouncex.video.report(bouncex.vpd.campaignId, "video_play"), bouncex.vpd._moatDispatch("AdVideoStart", e)
            },
            onAdSkipped: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdSkipped", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.skip), bouncex.close_ad(bouncex.vpd.campaignId)
            },
            onAdVideoFirstQuartile: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.vpd._fireVpaidTrackingEvents("AdVideoFirstQuartile", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.firstQuartile), bouncex.campaigns[bouncex.vpd.campaignId].video.status.qOne = !0, bouncex.vpd._moatDispatch("AdVideoFirstQuartile", e), bouncex.video.report(bouncex.vpd.campaignId, "video_play_first_quartile")
            },
            onAdVideoMidpoint: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.vpd._fireVpaidTrackingEvents("AdVideoMidpoint", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.midpoint), bouncex.campaigns[bouncex.vpd.campaignId].video.status.midpoint = !0, bouncex.vpd._moatDispatch("AdVideoMidpoint", e), bouncex.video.report(bouncex.vpd.campaignId, "video_play_midpoint")
            },
            onAdVideoThirdQuartile: function() {
                var e = bouncex.vpd._currentAdVolume();
                bouncex.vpd._fireVpaidTrackingEvents("AdVideoThirdQuartile", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.thirdQuartile), bouncex.campaigns[bouncex.vpd.campaignId].video.status.qThree = !0, bouncex.vpd._moatDispatch("AdVideoThirdQuartile", e), bouncex.video.report(bouncex.vpd.campaignId, "video_play_third_quartile")
            },
            onAdClickThru: function(e, t, n) {
                bouncex.campaigns[bouncex.vpd.campaignId].video.vast.clickThrough = e, void 0 !== n && 1 == n && (e ? window.open(e) : bouncex.campaigns[bouncex.vpd.campaignId].video.vast.clickThrough && window.open(bouncex.campaigns[bouncex.vpd.campaignId].video.vast.clickThrough)), bouncex.vpd._fireVpaidTrackingEvents("AdClickThru", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.clickTracking)
            },
            onAdDurationChange: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdDurationChange", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.durationchange)
            },
            onAdSizeChange: function() {
                (document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement) && bouncex.vpd._fireVpaidTrackingEvents("AdSizeChange", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.fullscreen)
            },
            onAdVideoComplete: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdVideoComplete", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.complete), bouncex.video.report(bouncex.vpd.campaignId, "video_play_complete"), bouncex.vpd._moatDispatch("AdVideoComplete", bouncex.vpd._currentAdVolume())
            },
            onAdError: function() {
                bouncex.vpd._fireVpaidTrackingEvents("AdError", bouncex.campaigns[bouncex.vpd.campaignId].video.vpaid.vastConfig.tracking.error), bouncex.video.report(bouncex.vpd.campaignId, "video_error")
            },
            _moatDispatch: function(e, t) {
                bouncex.campaigns[bouncex.vpd.campaignId].video.integrations.moatApiReference.dispatchEvent({
                    type: e,
                    adVolume: t
                }, bouncex.vpd.campaignId)
            }
        };
        var ComplianceChecks = {
                init: function() {
                    this.onFailure = bouncex.destroyAll, this.onSuccess = InitSequence.init1.serviceReady.bind(InitSequence.init1, "compliance check"), this._checkComplianceIntegrations()
                },
                _checkComplianceIntegrations: function() {
                    for (var e in this._finished = !1, this._integrations)
                        if (this._integrations.hasOwnProperty(e)) {
                            var t = this._integrations[e];
                            this._setIntegrationActions(t.name), this._initIntegration(t)
                        }
                },
                _hasFailingIntegration: function() {
                    for (var e in this._integrations)
                        if (this._integrations.hasOwnProperty(e)) {
                            if (!this._integrations[e].passed) return !0
                        }
                    return !1
                },
                _initIntegration: function(e) {
                    delete e.passed, e.init()
                },
                _integrationPassed: function() {
                    this._finished || this._hasFailingIntegration() || (this.compliancePassed = !0, this._finished = !0, this.onSuccess())
                },
                _integrationFailed: function(e) {
                    this.compliancePassed = !1, this._finished = !0, this.onFailure(e)
                },
                _setIntegrationActions: function(e) {
                    var t = this._integrations[e];
                    for (var n in this._integrationActions) t[n] = this._integrationActions[n].bind(this, t)
                },
                _integrationActions: {
                    log: function(e, t) {
                        this._log(e.name, t)
                    },
                    failsCheckInEU: function(e, t) {
                        return bouncex.state && bouncex.state.gdpr ? e.failsCheck(t) : (bouncex.complianceFlag = bouncex.complianceFlag || "gdpr_no_consent", void e.passesCheck(t))
                    },
                    passesCheck: function(e, t) {
                        e.passed = !0, this._log(e.name, t, !1), this._integrationPassed()
                    },
                    failsCheck: function(e, t) {
                        bouncex.complianceFlag = "no_consent", e.passed = !1, this._log(e.name, t, !0), this._integrationFailed(e.name)
                    }
                },
                _integrations: {
                    iab_cmp: {
                        name: "iab_cmp",
                        bxVendorId: 256,
                        bxPurposeIds: [1],
                        init: function() {
                            return "function" == typeof window.__cmp ? (this.pingTimeout = setTimeout2(function() {
                                this.failsCheckInEU("ping timed out")
                            }.bind(this), 200), this.getVendorConsents(), void this.pingCMP()) : this.passesCheck("no __cmp")
                        },
                        pingCMP: function() {
                            window.__cmp("ping", null, tryCatch(function(e, t) {
                                if (clearTimeout(this.pingTimeout), !this.getVendorConsentsCalled) return e && e.cmpLoaded ? void 0 : t ? (this.firstTime = this.firstTime || getTimeMs(), this.currentTime = getTimeMs(), 2e3 <= this.currentTime - this.firstTime ? this.passesCheck("cmp not loaded in time") : void setTimeout2(this.pingCMP.bind(this), 200)) : this.failsCheckInEU("ping success false")
                            }.bind(this)))
                        },
                        getVendorConsents: function() {
                            window.__cmp("getVendorConsents", [this.bxVendorId], tryCatch(function(e, t) {
                                if (clearTimeout(this.pingTimeout), this.getVendorConsentsCalled = !0, !t) return this.failsCheckInEU("success false");
                                if (!0 === e.gdprApplies || "true" === e.gdprApplies) {
                                    if (!this.consentPasses(e.vendorConsents[this.bxVendorId])) return;
                                    for (var n, i = 0; i < this.bxPurposeIds.length; i++)
                                        if (n = this.bxPurposeIds[i], !this.consentPasses(e.purposeConsents[n])) return
                                }
                                this.passesCheck("checks passed")
                            }.bind(this)))
                        },
                        consentPasses: function(e) {
                            return !(!0 !== e && (!1 === e ? this.failsCheck("fails consent") : this.failsCheckInEU("unexpected response"), 1))
                        }
                    }
                },
                _log: function(e, t, n) {
                    var i = {
                        group: "compliance",
                        message: e + "-" + t
                    };
                    n ? _logger2.default.error(i) : _logger2.default.info(i)
                }
            },
            CouponCodes = {
                insertCodesInCurrentStep: function(e) {
                    var t = {
                        campaignId: e,
                        getPlaceholders: this._step.getPlaceholders,
                        populateCoupon: this._step.populatePlaceholderWithCode,
                        insertLoadingMsg: this._step.insertLoadingMsg
                    };
                    this.log(t, "init visible coupons"), this._loadCoupons(t)
                },
                insertCodesInFormAndSubmit: function(e, t) {
                    var n = {
                        campaignId: e,
                        getPlaceholders: this._form.getPlaceholders,
                        populateCoupon: this._form.populatePlaceholderWithCode,
                        callback: t
                    };
                    this.log(n, "init hidden coupons"), this._loadCoupons(n)
                },
                _step: {
                    getPlaceholders: function(e) {
                        var t = bouncex.campaigns[e.campaignId],
                            n = ".bx-step-" + t.current_step + ' .bx-cpn-not-loaded[data-cpn-set]:not([data-cpn-set=""])';
                        return Array.prototype.slice.call(t.obj1[0].querySelectorAll(n)).map(function(e, i) {
                            return {
                                campaign: e,
                                clone: t.obj2[1] ? t.obj2[1].querySelectorAll(n)[i] : null
                            }
                        })
                    },
                    populatePlaceholderWithCode: function(e) {
                        [e.placeholder, e.clone].map(function(t) {
                            t && (t.innerText = e.code ? e.code : e.errorMsg, t.classList.remove("bx-cpn-not-loaded"))
                        }), CouponCodes._checkIsFinished(e)
                    },
                    insertLoadingMsg: function(e) {
                        [e.placeholder, e.clone].map(function(e) {
                            e && (e.innerText = "loading...")
                        })
                    }
                },
                _form: {
                    getPlaceholders: function(e) {
                        var t = bouncex.campaigns[e.campaignId];
                        return Array.prototype.slice.call(t.jform[0].querySelectorAll('[value="bx-cpn-not-loaded"][data-cpn-set]:not([data-cpn-set=""])')).map(function(e) {
                            return {
                                campaign: e
                            }
                        })
                    },
                    populatePlaceholderWithCode: function(e) {
                        e.placeholder.value = e.code || "false", CouponCodes._checkIsFinished(e)
                    }
                },
                _loadCoupons: function(e) {
                    var t = e.getPlaceholders(e);
                    return 0 === t.length ? (this.log(e, "no coupons found"), this._finishedLoading(e)) : void t.forEach(function(t) {
                        var n = {
                            campaignId: e.campaignId,
                            populateCoupon: e.populateCoupon,
                            getPlaceholders: e.getPlaceholders,
                            callback: e.callback,
                            setName: t.campaign.getAttribute("data-cpn-set"),
                            placeholder: t.campaign,
                            clone: t.clone,
                            insertLoadingMsg: e.insertLoadingMsg
                        };
                        this._loadCoupon(n)
                    }.bind(this))
                },
                _finishedLoading: function(e) {
                    this.log(e, "finished"), "function" == typeof e.callback && e.callback()
                },
                _loadCoupon: function(e) {
                    var t = this._getCouponStatus(e.setName);
                    return this.log(e, "coupon status: " + t), "cookied" === t ? (e.code = this._getCookiedCode(e.setName), this._populateCoupon(e)) : "untracked" === t ? this._requestCoupon(e) : "requesting" === t ? setTimeout2(this._loadCoupon.bind(this, e), 200) : bouncex.err("unexpected coupon status", {
                        source: "coupon code"
                    })
                },
                _requestCoupon: function(e) {
                    this.log(e, "requesting coupon");
                    var t = {
                        type: "GET",
                        url: "https://" + bouncex.website.bau + "/bounce/fetch_coupon",
                        data: {
                            setName: e.setName,
                            websiteId: bouncex.website.id,
                            visitId: bouncex.cookie.vid,
                            deviceId: bouncex.cookie.did,
                            campaignId: e.campaignId,
                            requestToken: bouncex.state.request_token
                        },
                        success: this._onSuccessHandler.bind(this, e),
                        error: this._onErrorHandler.bind(this, e)
                    };
                    this._pendingCoupons[e.setName] = !0, "function" == typeof e.insertLoadingMsg && e.insertLoadingMsg(e), jQuery.ajax(t)
                },
                _onSuccessHandler: function(e, t) {
                    return t && t.error ? this._onErrorHandler(e, null, t.error) : t && t.code ? (e.code = t.code, this._completeRequest(e, "successful"), void this.report({
                        campaignId: e.campaignId,
                        couponId: t.id,
                        couponCode: t.code
                    })) : this._onErrorHandler(e, null, "unexpected response")
                },
                _onErrorHandler: function(e, t, n) {
                    var i = this._getDefaultCode(e.placeholder);
                    i ? e.code = i : e.errorMsg = this._getErrorMsg(n);
                    var o = [];
                    t && "number" == typeof t.status && o.push("xhr status " + t.status), n && o.push(n);
                    var a = "failed: " + o.join(",");
                    bouncex.err({
                        name: "coupon error",
                        message: a
                    }, {
                        liveTraffic: 100,
                        campaignId: e.campaignId
                    }), this._completeRequest(e, a)
                },
                _getErrorMsg: function(e) {
                    return "no coupon found" === e ? "COUPON ERROR 0" : "COUPON ERROR 1"
                },
                _completeRequest: function(e, t) {
                    this.log(e, "request status: " + t), e.code && this._cookieCoupon(e.setName, e.code), this._populateCoupon(e), delete this._pendingCoupons[e.setName]
                },
                _cookieCoupon: function(e, t) {
                    bouncex.cookie.cpn = bouncex.utils.isObject(bouncex.cookie.cpn) ? bouncex.cookie.cpn : {}, bouncex.cookie.cpn[e] = t, setBounceCookie()
                },
                _populateCoupon: function(e) {
                    this.log(e, "populating code: " + e.code), this._triggerCouponFetchedEvent(e), e.populateCoupon(e)
                },
                _triggerCouponFetchedEvent: function(e) {
                    bouncex.window && bouncex.window.trigger("bxCouponFetched", [{
                        setName: e.setName,
                        code: e.code,
                        campaignId: e.campaignId
                    }])
                },
                _pendingCoupons: {},
                _getCouponStatus: function(e) {
                    return bouncex.cookie.cpn && bouncex.cookie.cpn[e] ? "cookied" : this._pendingCoupons[e] ? "requesting" : "untracked"
                },
                _getCookiedCode: function(e) {
                    return bouncex.cookie.cpn && bouncex.cookie.cpn[e]
                },
                _getDefaultCode: function(e) {
                    return e.getAttribute("data-cpn-default")
                },
                _checkIsFinished: function(e) {
                    this._hasPlaceholders(e) || this._finishedLoading(e)
                },
                _hasPlaceholders: function(e) {
                    return 0 < e.getPlaceholders(e).length
                },
                log: function(e, t) {
                    e = {
                        shouldLog: visitorTestMode("coupons"),
                        group: "coupons",
                        campaignId: e.campaignId || "",
                        message: (e.setName ? e.setName + ": " : "") + t
                    };
                    _logger2.default.info(e)
                },
                report: function(e) {
                    bouncex.report(e.campaignId, "coupon", {
                        "coupon:id": e.couponId,
                        "coupon:code": e.couponCode
                    })
                }
            };
        bouncex.dg = {
            init: function() {
                bouncex.website.dgp && (this.dg_timeout = setTimeout2(function() {
                    CustomVariables.evalVars("devicegraph"), bouncex.err("dg timeout")
                }, 3e3)), this.initPostDeviceGraph(null)
            },
            initPostDeviceGraph: function(e, t) {
                null === e && (void 0 !== t && t.IDs && (this.idTime = getTimeMs(), this.json = t, this.softID = t.IDs.deviceID, this.hardID = t.IDs.cookieID, t.info.firstLoad && this.previousCustomerLookup(), InitSequence.init1.serviceReady("graph callback")), void 0 === bouncex.state || void 0 === this.json || (t = this.json, bouncex.perf.manualTiming("bxid", this.idTime), bouncex.website.dgp && (clearTimeout(this.dg_timeout), this.store = bouncex.parseJSON(t.cookie), this._replenishCookie(), CustomVariables.evalVars("devicegraph"))))
            },
            getAdsOptStatus: function(e, t) {
                if (null === e) {
                    var n = t.deviceID || t.IDs.deviceID;
                    window.bouncex.gbi.deviceOptedStatus = n || ""
                }
            },
            previousCustomerLookup: function() {
                perf.times("pd-start2");
                var e = "https://pd.cdnwidget.com/lookup?deviceID=" + this.softID + "&cookieID=" + this.hardID + "&bxwid=" + bouncex.website.id;
                jQuery.ajax({
                    url: e,
                    type: "GET"
                }).always(function() {
                    perf.times("pd-stop2")
                })
            },
            _replenishCookie: function() {
                var e = [],
                    t = bouncex.stringify(bouncex.cookie.v);
                if (this.store && this.store.v)
                    for (var n in this.store.v)
                        if (this.store.v.hasOwnProperty(n) && bouncex.cookie.v[n] !== this.store.v[n]) {
                            if (void 0 === CustomVariables.getVar(n)) {
                                delete this.store.v[n];
                                continue
                            }
                            e.push(n), bouncex.setv(n, this.store.v[n])
                        }
                e.length && (setBounceCookie(), reload_campaigns("device_graph_hydration", e.join(",")), event_stream_report("device_graph_hydration", {
                    hydrated_deviceid: this.store.did,
                    hydrated_visitid: this.store.vid,
                    hydrated_cookie: bouncex.stringify(this.store),
                    cookie: bouncex.stringify(bouncex.cookie),
                    hydrated_cvar: bouncex.stringify(this.store.v),
                    previous_cvar: t
                }))
            },
            updateDeviceGraphCookie: function() {
                this.store.did = bouncex.cookie.did, this.store.vid = bouncex.cookie.vid;
                var e = {
                    bxwid: bouncex.website.id,
                    deviceID: this.softID,
                    obj: encodeURIComponent(bouncex.stringify(this.store))
                };
                jQuery.ajax({
                    type: "GET",
                    url: "https://ids.cdnwidget.com/u?" + qs(e),
                    error: function() {
                        bouncex.err("device graph update failed")
                    }
                })
            }
        }, bouncex.et = {
            init: function() {
                this.stopAll();
                try {
                    eval(bouncex.website.etjs), this.evalAllUIEvents(!0)
                } catch (e) {
                    bouncex.err(e, {
                        source: "event tracking js"
                    })
                }
            },
            evalAllUIEvents: function(e) {
                if (2 === bouncex.website.ete && bouncex.website.etjson)
                    for (var t = 0; t < bouncex.website.etjson.length; t++)(e || !bouncex.website.etjson[t].criteriaPassed) && (bouncex.website.etjson[t].criteriaPassed = this.evalUIEvent(bouncex.website.etjson[t]))
            },
            evalUIEvent: function(e) {
                var t = new Criteria(e.type.val, e.evaluation, "UI event").evaluate();
                if (t) {
                    var n = e.trigger;
                    switch (n.activation) {
                        case "onActiveTime":
                            var i = n.val;
                            bouncex.et.onActiveTime(i, function() {
                                bouncex.et.makeUIEvent(e)
                            });
                            break;
                        case "onClick":
                            var o = bouncex.website.els[n.val];
                            o && bouncex.et.on(bouncex.body, "click", function() {
                                var t = jQuery(this);
                                bouncex.et.makeUIEvent(e, t)
                            }, o);
                            break;
                        case "onCartEmpty":
                            bouncex.et.onCartEmpty(function() {
                                bouncex.et.makeUIEvent(e)
                            });
                            break;
                        case "onHover":
                        case "onVisible":
                            bouncex.et[n.activation](bouncex.website.els[n.val], function(t) {
                                bouncex.et.makeUIEvent(e, t)
                            });
                            break;
                        case "delay":
                            var a = 1e3 * n.val;
                            bouncex.setTimeout2(function() {
                                bouncex.et.makeUIEvent(e)
                            }, a);
                            break;
                        case "default":
                        default:
                            this.makeUIEvent(e)
                    }
                }
                return t
            },
            makeUIEvent: function(e, t) {
                var n = e.type.val,
                    i = e.data_fields[0].reduce(function(e, n) {
                        if ("default" !== n.activation) {
                            var i = CustomVariables.getVar(n.val);
                            i && "event" === i.trigger && CustomVariables.evalVarAndReload(n.val, t), e["custom" === n.activation ? n.val : n.activation] = bouncex.vars[n.val]
                        }
                        return e
                    }, {});
                bouncex.push([n, i])
            },
            hoverTime: 1e3,
            log: function(e) {
                _logger2.default.info({
                    group: "et log",
                    message: e,
                    color: "#4b0082"
                })
            },
            on: function(e, t, n, i) {
                var o = this.register({
                    event: t,
                    selector: i,
                    stop: function() {
                        bouncex.off(e, t + "." + o, i)
                    }
                });
                return bouncex.on(e, t + "." + o, n, i), o
            },
            onActiveTime: function(e, t) {
                var n = ActiveTime.addCallback(e, t);
                return this.register({
                    event: "active time",
                    stop: function() {
                        ActiveTime.clearCallback(n)
                    }
                })
            },
            onCartEmpty: function(e) {
                var t = bouncex.et.cart.config ? bouncex.et.cart.config.cartCountVariable : "cart_qty";
                this.onVarChange(t, function(t, n) {
                    0 < t && 0 === n && e()
                })
            },
            onAnyVarChange: function(e) {
                return this.on(bouncex.window, "bxVarsChange", function() {
                    var t = arguments[1];
                    e(t)
                })
            },
            onVarChange: function(e, t) {
                return this.onAnyVarChange(function(n) {
                    for (var i = 0; i < n.length; i++)
                        if (n[i].name == e) return t(n[i].oldVal, bouncex.vars[e])
                })
            },
            onHover: function(e, t) {
                var n, i = this.hoverTime,
                    o = this.register({
                        event: "hover",
                        selector: e,
                        stop: function() {
                            bouncex.off(bouncex.body, "mouseenter." + o, e), bouncex.off(bouncex.body, "mouseleave." + o, e), clearTimeout(n)
                        }
                    });
                bouncex.on(bouncex.body, "mouseenter." + o, function() {
                    var e = jQuery(this);
                    clearTimeout(n), e.attr("data-bxhover-" + o) || (n = setTimeout(function() {
                        e.attr("data-bxhover-" + o, !0), bouncex.tryCatch(t)(e)
                    }, i))
                }, e), bouncex.on(bouncex.body, "mouseleave." + o, function() {
                    clearTimeout(n)
                }, e)
            },
            onTrue: function(e, t, n) {
                var i = 0;
                if (n = n || 5, e()) t();
                else var o = bouncex.et.setInterval(function() {
                    e() ? (bouncex.et.stop(o), t()) : i > n && bouncex.et.stop(o), i++
                })
            },
            onVisible: function(e, t) {
                function n() {
                    i = jQuery(e).is(":visible"), !o && i && bouncex.tryCatch(t)(jQuery(e)), o = i
                }
                var i, o = !1;
                return n(), this.setInterval(n)
            },
            register: function(e) {
                var t = generateUniqueId();
                return bouncex.listeners = bouncex.listeners || {}, bouncex.listeners[t] = e, t
            },
            setInterval: function(e) {
                var t = BxInterval.addTask(e);
                return this.register({
                    event: "bxInterval",
                    stop: function() {
                        BxInterval.stopTask(t)
                    }
                })
            },
            stop: function(e) {
                bouncex.listeners.hasOwnProperty(e) && (bouncex.listeners[e].stop(), delete bouncex.listeners[e])
            },
            stopAll: function() {
                for (var e in bouncex.listeners) this.stop(e)
            },
            cart: {
                init: function(e) {
                    var t = {
                        storeCartVariable: "cart",
                        cartCountVariable: "cart_qty",
                        maxVariableSize: bouncex.local_storage_enabled ? 1500 : 400,
                        storeValues: ["count", "items"],
                        maxItems: 10
                    };
                    e = jQuery.extend(t, e), this.config = e, this.replenish = e.replenish || this.replenish, this.validateReplenishment = e.validateReplenishment || this.validateReplenishment, this.reportReplenishment = e.reportReplenishment || this.reportReplenishment, this.replenishmentComplete = e.replenishmentComplete || bouncex.utils.getParam("bx_replen"), this.replenishmentType = e.replenishmentType || "unknown", this.replenishmentSuccessful = e.replenishmentSuccessful || this.replenishmentSuccessful, this.tryReplenishment(), this.reportReplenishment()
                },
                setReplenishmentReportingStatus: function(e) {
                    var t = {
                        BX_CART_VALID: {
                            code: 0
                        },
                        BX_CART_MALFORMED: {
                            code: 1,
                            message: "bx_cart malformed"
                        },
                        BX_CART_ITEMS_ALREADY_IN_CART: {
                            code: 2,
                            message: "Items already in cart"
                        },
                        BX_CART_MISSING_DATA: {
                            code: 3,
                            message: "Missing value, token or items"
                        },
                        BX_CART_REJECTED_UNKNOWN_REASON: {
                            code: 4,
                            message: "Aborted for unknown reason"
                        },
                        BX_REPLEN_FAILURE: {
                            code: 9,
                            message: "Could not replenish cart"
                        },
                        BX_REPLEN_SUCCESS: {
                            code: 10
                        }
                    }[e];
                    t && (this.returnCode = t.code, t.message && (this.failureMessage = t.message))
                },
                getCart: function() {
                    return this.state ? this.state : this.config.storeCartVariable && bouncex.vars[this.config.storeCartVariable] ? (this.state = JSON.parse(bouncex.vars[this.config.storeCartVariable]), this.state) : {}
                },
                getCount: function() {
                    return bouncex.vars[this.config.cartCountVariable]
                },
                inferCount: function(e) {
                    if (bouncex.utils.validate.integer(e.count)) return parseInt(e.count);
                    if (e.items) {
                        for (var t = 0, n = 0; n < e.items.length; n++) t += parseInt(e.items[n].qty) || 1;
                        return t
                    }
                    return bouncex.utils.validate.integer(this.getCount()) ? parseInt(this.getCount()) : 0
                },
                parseCartParam: function(e) {
                    return "{" !== e.charAt(0) && (e = atob(e)), JSON.parse(e)
                },
                tryReplenishment: function() {
                    var e = bouncex.utils.getParam("bx_cart"),
                        t = {};
                    if (this.replenishing = !1, !e) return !1;
                    try {
                        t = this.parseCartParam(e)
                    } catch (e) {
                        return bouncex.err(e), this.setReplenishmentReportingStatus("BX_CART_MALFORMED"), !1
                    }
                    return this.validateReplenishment(t) ? (this.save(t), this.replenishing = !0, this.setReplenishmentReportingStatus("BX_CART_VALID"), this.replenish(t)) : (void 0 === this.returnCode && this.setReplenishmentReportingStatus("BX_CART_REJECTED_UNKNOWN_REASON"), !1)
                },
                replenish: function() {
                    return bouncex.et.log("Replenish function not defined"), null
                },
                replenishmentSuccessful: function() {
                    return 0 < this.getCount()
                },
                save: function(e) {
                    if (!e) return !1;
                    this.state = e;
                    var t = jQuery.extend(!0, {}, e);
                    if (this.config.storeCartVariable) {
                        var n = {};
                        if (0 === t.count) n = {
                            count: 0
                        };
                        else
                            for (var i, o = 0; o < this.config.storeValues.length; o++) i = this.config.storeValues[o], t.hasOwnProperty(i) && (n[i] = t[i]);
                        this.saveToVariable(n)
                    }
                },
                saveToVariable: function(e) {
                    var t = JSON.stringify(e);
                    if (t.length <= this.config.maxVariableSize) bouncex.setv(this.config.storeCartVariable, t), setBounceCookie();
                    else if (e.items && e.items.length) {
                        JSON.stringify(e.items[e.items.length - 1]).length >= this.config.maxVariableSize ? e.items.pop() : e.items.shift(), this.saveToVariable(e)
                    }
                },
                track: function(e) {
                    var t = jQuery.extend({}, e);
                    t.items && (t.items = JSON.stringify(t.items)), t.ids && (t.ids = t.ids.join(",")), t = bouncex.utils.addNamespace(t, "cart"), bouncex.push(["cart", t])
                },
                update: function(e) {
                    if (this.replenishing) return !1;
                    if (e.newItem) {
                        var t = this.getCart().items || [];
                        t.push(e.newItem), e.items = t
                    }
                    if (this.config.maxItems && e.items && e.items.length > this.config.maxItems && (e.items = e.items.slice(e.items.length - this.config.maxItems)), e.count = this.inferCount(e), !e.ids && e.items) {
                        for (var n = [], i = 0; i < e.items.length; i++) e.items[i].id && n.push(e.items[i].id);
                        n.length && (e.ids = n)
                    }(e.newItem || e.addToCart) && bouncex.push(["add to cart", {}]), delete e.newItem, delete e.addToCart, this.save(e), this.track(e)
                },
                validateReplenishment: function(e) {
                    var t = this.getCount();
                    return bouncex.utils.validate.integer(t) && 0 < t ? (this.setReplenishmentReportingStatus("BX_CART_ITEMS_ALREADY_IN_CART"), !1) : e ? !!(e.value || e.token || e.items) || (this.setReplenishmentReportingStatus("BX_CART_MISSING_DATA"), !1) : (this.setReplenishmentReportingStatus("BX_CART_MALFORMED"), !1)
                },
                reportReplenishment: function() {
                    var e = this.getCart(),
                        t = bouncex.utils.getParam("bx_cart");
                    if (t) try {
                        e = this.parseCartParam(t)
                    } catch (e) {
                        bouncex.err(e)
                    }
                    var n = {
                        "cart:replentype": this.replenishmentType
                    };
                    if (e.ids && (n["cart:ids"] = e.ids), e.date && (n["cart:date"] = e.date), e.items && (n["cart:items"] = JSON.stringify(e.items)), e.eid && (n["cart:eventid"] = e.eid), t) n["cart:returncode"] = this.returnCode, n["cart:count"] = this.getCount(), 0 < this.returnCode ? (this.failureMessage && (n["cart:failuremessage"] = this.failureMessage), bouncex.push(["cart replenish abort", n])) : bouncex.push(["cart replenish attempt", n]);
                    else if (this.replenishmentComplete) {
                        setTimeout(function() {
                            n["cart:success"] = this.replenishmentSuccessful(), n["cart:count"] = this.getCount(), n["cart:success"] ? this.setReplenishmentReportingStatus("BX_REPLEN_SUCCESS") : this.setReplenishmentReportingStatus("BX_REPLEN_FAILURE"), this.failureMessage && (n["cart:failuremessage"] = this.failureMessage), n["cart:returncode"] = this.returnCode, bouncex.push(["cart replenish", n])
                        }.bind(this), 1100)
                    }
                }
            },
            item: {
                requirements: [{
                    name: "id"
                }, {
                    name: "copy"
                }, {
                    name: "url",
                    tests: [function(e) {
                        return bouncex.utils.validate.url(e)
                    }]
                }, {
                    name: "imageurl",
                    tests: [function(e) {
                        return bouncex.utils.validate.url(e)
                    }]
                }],
                requireImageLoad: !0,
                validate: function(e) {
                    for (var t, n = 0; n < this.requirements.length; n++) {
                        if (!e["item:" + (t = this.requirements[n]).name]) return bouncex.et.log("Invalid Item. " + t.name + " empty"), !1;
                        if (t.tests)
                            for (var i = 0; i < t.tests.length; i++) {
                                var o = t.tests[i],
                                    a = e["item:" + t.name];
                                if ("function" == typeof o && !o(a)) return bouncex.et.log("Invalid Item. The following " + t.name + " failed " + o.name + " test: " + a), !1
                            }
                    }
                    return !0
                }
            }
        }, bouncex.gbi = {
            wrapContentInIframe: function(e, t, n) {
                var i, o = bouncex.campaigns[n],
                    a = o.gbi && (o.gbi.config.shrinkToFit || o.gbi.config.shrinkToFitWindow),
                    r = "-webkit-transform-origin: 0 0; transform-origin: 0 0; max-width: 100%; max-height: 100%;",
                    s = (o.gbi.provider, 1);
                if (e.find("iframe").remove(), a && ("overlay" === o.type || "agilityzone" === o.type)) {
                    var c = bouncex.gbi.getResizeData(n);
                    1 > (s = c.scaleRatio) && (r += "-webkit-transform: scale(" + s + "); transform: scale(" + s + ");", e.css({
                        width: c.scaledWidth + "px",
                        height: c.scaledHeight + "px"
                    }))
                }
                var u = createIframe({
                    target: "_blank",
                    class: "bx-gbi-frame",
                    frameborder: "0",
                    horizontalscrolling: "no",
                    verticalscrolling: "no",
                    width: "100%",
                    height: "100%",
                    vspace: "0",
                    hspace: "0",
                    marginwidth: "0",
                    marginheight: "0",
                    scrolling: "no",
                    allowTransparency: "true"
                });
                e.append(u);
                try {
                    (i = u.contentWindow.document).open(), i.write('<html><head><base target="_blank"/></head><body marginwidth="0" marginheight="0" style="' + r + '">' + t + "</body>"), i.close()
                } catch (e) {
                    bouncex.gbi.log(n, "error creating gbi frame: " + e)
                }
                return i
            },
            init: function(e) {
                bouncex.campaigns[e].gbi.impressionPixels = [], bouncex.campaigns[e].gbi.clickPixels = []
            },
            fail: function(e, t) {
                bouncex.campaigns[e].failed = !0, this.clearRequestAssets(e), this.log(e, t, !0)
            },
            log: function(e, t, n) {
                var i = e ? "(" + e + ")" : "",
                    o = "(" + (bouncex.campaigns[e] ? bouncex.campaigns[e].gbi.provider || "no provider" : "stack") + ")";
                bouncex.log("%c gbi " + i + o + ": " + t, "color: " + (n ? "#FF0000" : "#00F"))
            },
            request: function(e) {
                bouncex.gbi.init(e);
                var t = bouncex.gbi.providerApi[bouncex.campaigns[e].gbi.provider];
                t || bouncex.gbi.fail(e, "undefined provider " + bouncex.campaigns[e].gbi.provider);
                try {
                    t.initDemoAd ? t.initDemoAd(e) : t.request ? t.request(e) : bouncex.gbi.fetch(e)
                } catch (t) {
                    bouncex.gbi.fail(e, t)
                }
            },
            fetch: function(e) {
                var t = bouncex.gbi.providerApi[bouncex.campaigns[e].gbi.provider];
                return bouncex.gbi.doAjaxRequest(e, t.getFetchOptions(e))
            },
            doAjaxRequest: function(e, t) {
                bouncex.campaigns[e].gbi.ajaxRequest = bouncex.utils.doAjaxRequest(t)
            },
            report: function(e, t, n) {
                bouncex.gbi.log(e, 'reporting event "' + t + '"');
                n = n || {};
                if (bouncex.campaigns[e].gbi.provider) {
                    var i = "";
                    if ("pop" == t ? bouncex.campaigns[e].gbi.impressionPixels && 0 < bouncex.campaigns[e].gbi.impressionPixels.length && (i += bouncex.campaigns[e].gbi.impressionPixels.join("")) : "click" == t && (bouncex.campaigns[e].gbi.clickPixels && 0 < bouncex.campaigns[e].gbi.clickPixels.length && (i += bouncex.campaigns[e].gbi.clickPixels.join("")), !n.value && (n.value = "nonad")), i)
                        if ("oubr" == bouncex.campaigns[e].gbi.provider) {
                            var o = bouncex.campaigns[e].gbi.config,
                                a = {
                                    url: bouncex.campaigns[e].gbi.impressionPixels[0],
                                    method: "GET",
                                    timeout: 15e3,
                                    beforeSend: function(e) {
                                        e.setRequestHeader("Authorization", "API_KEY " + o.API_KEY)
                                    },
                                    success: function() {
                                        bouncex.gbi.log(e, 'reporting provider pixel for "' + t + '"')
                                    },
                                    error: function() {
                                        bouncex.gbi.log(e, 'error for reporting provider pixel for "' + t + '"')
                                    }
                                };
                            bouncex.gbi.doAjaxRequest(e, a)
                        } else jQuery(i).hide().appendTo(bouncex.body), bouncex.gbi.log(e, 'reporting provider pixel for "' + t + '"')
                }
                var r = bouncex.campaigns[e].gbi.stack_id;
                if (!r || "eligible" != t && "pop" != t) buildReport(e, t, n);
                else {
                    var s = bouncex.gbi.stacks[r],
                        c = s.campaigns;
                    bouncex.campaigns[s.leader_id].ttype;
                    for (var u in c) {
                        var b = c[u],
                            l = b == e,
                            d = b == bouncex.gbi.stacks[r].leader_id;
                        if ("pop" == t && !l && d && noteCookieAdShown(b), ("eligible" == t && (l || d) || "pop" == t && l) && buildReport(b, t, n), "pop" == t) {
                            var p = {};
                            p["trypop:provider"] = bouncex.campaigns[b].gbi.provider || "none", n && n["pop:activation"] && (p.activation = n["pop:activation"]), buildReport(b, "trypop", p)
                        }
                        if (l) break
                    }
                }
            },
            requestCompleteMultiple: function(e, t, n) {
                var i = bouncex.campaigns[e];
                bouncex.gbi.log(e, "have a bid with multiple units"), bouncex.gbi.providerApi[i.gbi.provider].buildHTML(e, i.gbi.lastResponse), loadImages(i.images, function() {
                    bouncex.gbi.log(e, "images loaded"), activateGbiCampaign(e), n && n()
                })
            },
            requestCompleteSingle: function(e, t, n) {
                bouncex.gbi.log(e, "have a bid with a single unit");
                var i = bouncex.campaigns[e],
                    o = i.obj1.find(".bx-step-" + (i.gbi.step || 1)).find(".bx-group-placeholder").eq(0),
                    a = i.gbi.provider;
                ("index" == a || "pbm" == a || "dfphtml" == a) && (t += bouncex.gbi.integrations.moat.display.getScriptTag({
                    website: window.location.host + " (" + bouncex.website.id + ")",
                    deviceType: bouncex.state.mobile ? "mobile" : "desktop",
                    trigger: i.trigger,
                    adSize: i.gbi.config.units && i.gbi.config.units[0] || "unknown",
                    placement: "overlay" === i.type ? i.type : i.subtype
                }));
                var r = bouncex.gbi.wrapContentInIframe(o, t, e);
                return r ? (attachClickReportingToIframe(o, e), void loadImages(jQuery(r).find("img").filter(":visible"), function() {
                    bouncex.gbi.log(e, "image loaded"), activateGbiCampaign(e), n && n()
                })) : bouncex.gbi.fail(e, "failed to wrap content in iframe: check for missing placeholder group")
            },
            requestCompleteSingleVideo: function(e, t) {
                bouncex.gbi.log(e, "have a bid with a single vast unit");
                var n = bouncex.campaigns[e],
                    i = bouncex.gbi.getPlayerConfig(e, t),
                    o = n.obj1.find(".bx-step-" + (n.gbi.step || 1)).find(".bx-group-placeholder").eq(0),
                    a = n.gbi.config.shrinkToFit || n.gbi.config.shrinkToFitWindow,
                    r = "overlay" === n.type || "agilityzone" === n.type;
                if (a && r) {
                    var s = bouncex.gbi.getResizeData(e);
                    1 > s.scaleRatio && (i.width = s.scaledWidth, i.height = s.scaledHeight, o.css({
                        width: s.scaledWidth,
                        height: s.scaledHeight
                    }))
                }
                bouncex.gbi.initVideoFrame(e, o, i)
            },
            initVideoFrame: function(e, t, n) {
                var i, o, a, r = bouncex.campaigns[e],
                    s = "//" + bouncex.website.biu + "/assets/global/plugins/jwplayer/8.3.0/jwplayer.js",
                    c = bouncex.gbi.integrations.moat,
                    u = t.width(),
                    b = t.height();
                t.empty(), o = createIframe({
                    class: "bx-gbi-frame",
                    style: "border: 0; width: " + u + "px; height: " + b + "px;"
                }), n.width = u, n.height = b, t.append(o), a = o.contentWindow, bouncex.browser.firefox && (a.oldGetComputedStyle = a.getComputedStyle, a.getComputedStyle = function(e, t) {
                    var n = a.oldGetComputedStyle(e, t);
                    return null === n ? {} : n
                }), a.document.write('<html><body style="margin: 0px; overflow: hidden;"><div id="bx-video"></div></body></html>'), (i = a.document.createElement("script")).setAttribute("src", s), i.onload = function() {
                    bouncex.gbi.log(e, "jwplayer script loaded"), a.jwplayer ? (bouncex.gbi.log(e, "jwplayer executed"), a.jwplayer.key = "o8z/iG2QyTbuWcdH2vCzMM0waC0nOAeJ9/gVcpFiPZ+tv1+5", a.player = r.gbi.player = a.jwplayer("bx-video"), r.gbi.player.setup(n), r.gbi.player.on("adClick", function() {
                        bouncex.report(e, "click", {
                            value: "ad"
                        })
                    }), r.gbi.player.on("adError", function(t) {
                        bouncex.gbi.log(e, t.message ? "ad error: " + t.message : "ad error")
                    }), r.gbi.contentLoaded = !0, c.video.loadPlugin(e)) : bouncex.gbi.fail(e, "jwplayer failed to execute")
                }, i.onerror = function() {
                    !0, bouncex.gbi.fail(e, "jwplayer script failed to load")
                }, a.document.body.appendChild(i)
            },
            getPlayerConfig: function(e, t) {
                var n = bouncex.campaigns[e],
                    i = n.gbi.config.videoPlayerConfig || {},
                    o = /^[\s]*<VAST/i.test(t) ? "vastxml" : "tag",
                    a = n.obj1.find(".bx-group-placeholder").eq(0);
                return i.file = "//" + bouncex.website.biu + "/assets/global/plugins/jwplayer/blank.mp4", i.advertising = i.advertising || {}, i.advertising.client = "vast", i.advertising.vpaidcontrols = !0, i.advertising[o] = t, i.mute = !0, i.width = i.width || a.width(), i.height = i.height || a.height(), n.gbi.config.playOnImpression = !0, n.gbi.config.videoPlayerConfig = i, i
            },
            addFullVideoSupport: function(e) {
                return e.video ? (e.video.mimes = e.video.mimes || [], -1 === e.video.mimes.indexOf("video/mp4") && e.video.mimes.push("video/mp4"), -1 === e.video.mimes.indexOf("application/javascript") && e.video.mimes.push("application/javascript"), e) : e
            },
            cancelRequest: function(e) {
                var t = bouncex.campaigns[e];
                t.gbi.ajaxRequest && (bouncex.gbi.log(e, "cancelling request"), t.gbi.ajaxRequest.abort()), bouncex.gbi.init(e)
            },
            clearRequestAssets: function(e) {
                bouncex.events[e].gbiRequest && (clearInterval(bouncex.events[e].gbiRequest), delete bouncex.events[e].gbiRequest)
            },
            getResizeDataForV2: function(e) {
                return bouncex.gbi.getResizeData(e)
            },
            getResizeData: function(e) {
                var t, n = bouncex.campaigns[e],
                    i = bouncex.campaigns[e].gbi.config,
                    o = 2 * ((parseInt(n.obj1.find(".bx-wrap").css("padding-left"), 10) || 0) + (parseInt(n.obj1.find(".bx-align").css("padding-left"), 10) || 0)),
                    a = 1;
                if (t = n.gbi.isVideo ? {
                        w: i.videoPlayerConfig.width,
                        h: i.videoPlayerConfig.height
                    } : i.imp[0].banner, "agilityzone" === n.type && n.calloutTarget.length) a = (n.calloutTarget.width() - o) / t.w;
                else if ("overlay" === n.type) {
                    var r = (bouncex.wndsize().width - o) / t.w,
                        s = (bouncex.wndsize().height - o) / t.h;
                    a = r > s ? s : r
                }
                return {
                    scaleRatio: a,
                    scaledWidth: t.w * a,
                    scaledHeight: t.h * a
                }
            },
            getCreativeDimensions: function(e) {
                var t = jQuery("#bx-creative-" + e);
                return t.css("max-width", "none"), {
                    width: t.width(),
                    height: t.height()
                }
            },
            shrinkToFitWindow: function(e) {
                var t = bouncex.gbi.getCreativeDimensions(e),
                    n = bouncex.wndsize();
                n.width -= 12, n.height -= 12;
                var i = t.width > n.width ? n.width / t.width : 1,
                    o = t.height > n.height ? n.height / t.height : 1,
                    a = i > o ? o : i;
                1 > a && bouncex.campaigns[e].obj1.find(".bx-slab").css({
                    width: t.width + 12 + "px",
                    height: t.height + 12 + "px",
                    overflow: "visible",
                    top: "50%",
                    left: "50%",
                    transform: "scale(" + a + ") translate(-50%, -50%)",
                    transformOrigin: "0 0"
                })
            },
            shrinkToFitParent: function(e) {
                var t = bouncex.gbi.getCreativeDimensions(e),
                    n = bouncex.campaigns[e].obj1.parent().width(),
                    i = t.width > n ? n / t.width : 1;
                1 > i && bouncex.campaigns[e].obj1.find(".bx-slab").css({
                    width: t.width * i + "px",
                    height: t.height * i + "px",
                    transform: "scale(" + i + ")",
                    transformOrigin: "0 0"
                })
            },
            populateTemplate: function(ca_id, response, unitJsonPath, imageJsonPath) {
                for (var creative = jQuery("#bx-creative-" + ca_id), creativeClone = creative.clone(!0), templateGroups = creativeClone.find(".bx-group-placeholder"), groupLength = templateGroups.length, k = 0; k < groupLength; k += 1) {
                    var unit = eval(unitJsonPath + "[k];"),
                        templateGroup = jQuery(templateGroups[k]);
                    if (templateGroup.length)
                        if (unit) {
                            var image = eval("unit." + imageJsonPath);
                            templateGroup.find(".bx-lineshape").css("background-image", "url(" + image + ")"), bouncex.campaigns[ca_id].images.push(image);
                            var html = templateGroup.html();
                            html = html.replace(/{(.*?)}/gi, function(query, keyword) {
                                var content = eval("unit." + keyword);
                                if (void 0 !== content) return content
                            }), templateGroup.html(html)
                        } else templateGroup.remove()
                }
                var html = creativeClone.html();
                html = html.replace(/{(.*?)}/gi, function(query, keyword) {
                    try {
                        return eval("response." + keyword)
                    } catch (e) {
                        return keyword
                    }
                }), creativeClone.html(html), creative.replaceWith(creativeClone)
            },
            generateDynamicRequestUrlParams: function(ca_id) {
                var config = bouncex.campaigns[ca_id].gbi.config,
                    dynamicQueryStr = "",
                    dynamicParams = config.dynamic_request_params;
                if (dynamicParams)
                    for (var param in dynamicParams) try {
                        dynamicQueryStr += "&" + param + "=" + encodeURIComponent(eval(dynamicParams[param]))
                    } catch (e) {
                        bouncex.gbi.log("invalid dynamic request param " + param + " must have valid javascript as value")
                    }
                return dynamicQueryStr
            },
            requestAndRefreshRequest: function(e) {
                var t = bouncex.campaigns[e],
                    n = bouncex.gbi.providerApi[t.gbi.provider];
                t.gbi.requestNum = 1, n.fetch(e), bouncex.events[e].gbiRequest = setInterval2(function() {
                    return can_show_ad(e) || bouncex.campaigns[e].failed ? (bouncex.gbi.init(e), t.gbi.requestNum++, void n.fetch(e)) : (clearInterval(bouncex.events[e].gbiRequest), void bouncex.gbi.log(e, "clearing interval"))
                }, t.gbi.config.reload || 18e4)
            },
            playVideoBeforeImpression: function(e, t) {
                var n = bouncex.campaigns[t],
                    i = n.gbi.player;
                i.on("adImpression", function() {
                    i.off("adImpression"), i.off("adError"), bouncex.gbi.log(t, "video response detected"), n.gbi.videoResponseLoaded = !0, show_ad(e, t)
                }), i.on("adError", function(e) {
                    i.off("adImpression"), i.off("adError"), i.stop(), bouncex.gbi.fail(t, e.message ? e.message : "error loading response")
                }), i.play()
            }
        }, bouncex.gbi.integrations = {
            moat: {
                display: {
                    scriptSrc: document.location.protocol + "//z.moatads.com/bounceexchangedisplay18031701869/moatad.js",
                    getScriptTag: function(e) {
                        if (shouldEnforcePolicies({
                                gdpr: !0
                            })) return bouncex.log("GDPR: MOAT script blocked"), "";
                        var t = qs({
                            moatClientLevel1: e.website,
                            moatClientLevel2: e.deviceType,
                            moatClientLevel3: e.trigger,
                            moatClientLevel4: e.adSize,
                            zMoatPlacement: e.placement
                        });
                        return '<script src="' + this.scriptSrc + "?" + t + '" type="text/javascript"><\/script>'
                    }
                },
                video: {
                    scriptSrc: document.location.protocol + "//z.moatads.com/jwplayerplugin0938452/moatplugin.js",
                    partnerCode: "bouncexjsvideojwplayer997111196347",
                    loadPlugin: function(e) {
                        if (shouldEnforcePolicies({
                                gdpr: !0
                            })) return bouncex.log("GDPR: MOAT script blocked"), "";
                        var t = this;
                        getScript(t.scriptSrc, function() {
                            t.addImpressionListener(e)
                        })
                    },
                    addImpressionListener: function(e) {
                        var t = bouncex.campaigns[e],
                            n = this;
                        t.gbi.player.on("adImpression", function(e) {
                            moatjw.add({
                                partnerCode: n.partnerCode,
                                player: this,
                                adImpressionEvent: e,
                                ids: {
                                    level1: window.location.host + " (" + bouncex.website.id + ")",
                                    level2: bouncex.state.mobile ? "mobile" : "desktop",
                                    level3: t.trigger,
                                    level4: "video",
                                    slicer1: "overlay" === t.type ? t.type : t.subtype
                                },
                                duration: 30
                            })
                        })
                    }
                }
            },
            tag: {
                intermediaryId: "869cff86d1c453c1",
                generateId: function() {
                    return this.intermediaryId + ":" + bouncex.website.id
                }
            }
        }, bouncex.gbi.providerApi = {
            aqbx: {
                initDemoAd: function(e) {
                    var t;
                    try {
                        t = bouncex.campaigns[e].gbi.config.imp[0]
                    } catch (t) {
                        bouncex.gbi.fail(e, "no creative dimensions have been set for this ad!")
                    }
                    if (void 0 !== t.video) {
                        var n = '<VAST version="2.0"><Ad><InLine><AdSystem>Acudeo Compatible</AdSystem><AdTitle>VAST 2.0 AQBX</AdTitle><Description>VAST 2.0 AQBX</Description><Creatives><Creative><Linear><Duration>00:00:21</Duration><MediaFiles><MediaFile delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300" scalable="true" maintainAspectRatio="true">https://' + bouncex.website.biu + "/assets/global/videos/pub/demo/ads_demo_video.mp4</MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>";
                        bouncex.campaigns[e].gbi.isVideo = !0, bouncex.gbi.requestCompleteSingleVideo(e, n), bouncex.gbi.log(e, "aqbx video ad loaded"), activateGbiCampaign(e)
                    } else {
                        var i = t.banner,
                            o = i.w,
                            a = i.h,
                            r = "https://" + bouncex.website.biu + "/assets/global/images/pub/demo" + o + "x" + a + ".gif";
                        bouncex.campaigns[e].gbi.html = '<a><img height="' + a + '" width="' + o + '" src="' + r + '"/></a>', activateGbiCampaign(e)
                    }
                }
            },
            an: {
                getFetchOptions: function(e) {
                    var t = this,
                        n = bouncex.campaigns[e].gbi.config;
                    return {
                        url: n.request_url,
                        type: "POST",
                        dataType: "json",
                        processData: !1,
                        timeout: n.timeout || 255,
                        success: function(n) {
                            var i = t.processResponse(e, n);
                            return i ? void bouncex.gbi.requestCompleteSingle(e, i) : bouncex.gbi.fail(e, "no bid")
                        },
                        error: function(t, n) {
                            return bouncex.gbi.fail(e, n)
                        }
                    }
                },
                processResponse: function(e, t) {
                    if (t && "ok" == t.status) try {
                        var n = t.native.length;
                        if (0 < n) {
                            for (var i = "", o = 0; o < n; o++) {
                                bouncex.campaigns[e].gbi.clickPixels.push('<img src="' + t.native[o].click_trackers + '"/>');
                                var a = t.native[o].impression_trackers.length;
                                if (0 < a)
                                    for (var r = 0; r < a; r++) bouncex.campaigns[e].gbi.impressionPixels.push('<img src="' + t.native[o].impression_trackers[r] + '"/>');
                                i += '<a href="' + t.native[o].click_url + '"><img height="100%" width="100%" title="', i += t.native[o].title + '" src="' + t.native[o].main_media[0].url + '"/></a>'
                            }
                            return i
                        }
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                    return ""
                }
            },
            dfpi: {
                getFetchOptions: function(e) {
                    var t = bouncex.campaigns[e].gbi.config,
                        n = this;
                    return {
                        url: t.request_url + "&c=" + getTime2() + bouncex.gbi.generateDynamicRequestUrlParams(e),
                        type: "GET",
                        dataType: "json",
                        processData: !1,
                        timeout: t.timeout || 1e3,
                        success: function(t) {
                            var i = n.processResponse(e, t);
                            return i ? void bouncex.gbi.requestCompleteSingle(e, i) : bouncex.gbi.fail(e, "no bid")
                        },
                        error: function() {
                            return bouncex.gbi.fail(e, "timed out")
                        }
                    }
                },
                processResponse: function(e, t) {
                    if (t && t.main_media) try {
                        var n = t.impression_trackers.length;
                        if (0 < n)
                            for (var i = 0; i < n; i++) bouncex.campaigns[e].gbi.impressionPixels.push('<img src="' + t.impression_trackers[i] + '"/>');
                        var o = t.click_trackers.length;
                        if (0 < o)
                            for (i = 0; i < o; i++) bouncex.campaigns[e].gbi.clickPixels.push('<img src="' + t.click_trackers[i] + '"/>');
                        var a = t.main_media.length;
                        if (0 < a) {
                            var r = "";
                            for (i = 0; i < a; i++) r += '<a href="' + t.click_url + '"><img height="100%" width="100%" title="', r += t.title + '" src="' + t.main_media[i].url + '"/></a>';
                            return r
                        }
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                    return ""
                }
            },
            dfps: {
                getFetchOptions: function(e) {
                    var t = bouncex.campaigns[e].gbi.config,
                        n = this;
                    return {
                        url: t.request_url + "&c=" + getTime2() + bouncex.gbi.generateDynamicRequestUrlParams(e),
                        type: "GET",
                        dataType: "json",
                        processData: !1,
                        timeout: t.timeout || 1e3,
                        success: function(t) {
                            var i = n.processResponse(e, t);
                            return i ? void bouncex.gbi.requestCompleteSingle(e, i) : bouncex.gbi.fail(e, "no bid")
                        },
                        error: function() {
                            return bouncex.gbi.fail(e, "timed out")
                        }
                    }
                },
                processResponse: function(e, t) {
                    if (t && t.main_media) try {
                        var n = t.impression_trackers.length;
                        if (0 < n)
                            for (var i = 0; i < n; i++) bouncex.campaigns[e].gbi.impressionPixels.push('<img src="' + t.impression_trackers[i] + '"/>');
                        var o = t.main_media.length;
                        if (0 < o) {
                            var a = "";
                            for (i = 0; i < o; i++) a += t.main_media[i].url;
                            return a
                        }
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                    return ""
                }
            },
            dfphtml: {
                getFetchOptions: function(e) {
                    var t = bouncex.campaigns[e].gbi.config;
                    return {
                        url: t.request_url + "&c=" + getTime2() + bouncex.gbi.generateDynamicRequestUrlParams(e),
                        method: "GET",
                        global: !1,
                        processData: !1,
                        timeout: t.timeout || 1e3,
                        complete: function(t, n) {
                            if ("success" != n) return bouncex.gbi.fail(e, n + " " + t.status);
                            if (200 === t.status) {
                                var i = t.responseText;
                                if (!i) return bouncex.gbi.fail(e, "no bid");
                                bouncex.campaigns[e].gbi.html = i, activateGbiCampaign(e)
                            } else bouncex.gbi.fail(e, "response status " + t.status)
                        }
                    }
                }
            },
            crit: {
                getFetchOptions: function(e) {
                    var t = this,
                        n = bouncex.campaigns[e].gbi.config;
                    return {
                        url: n.endpoint + "/recommendations.get",
                        data: n,
                        dataType: "jsonp",
                        method: "GET",
                        timeout: 15e3,
                        success: function(n) {
                            t.processResponse(e, n) && activateGbiCampaign(e)
                        },
                        error: function() {
                            return bouncex.gbi.fail(e, "timed out")
                        }
                    }
                },
                processResponse: function(e, t) {
                    if (!t || 0 !== t.response_status) return t && t.status_message ? bouncex.gbi.fail(e, "Bad response: " + t.status_message) : bouncex.gbi.fail(e, "No bid"), !1;
                    try {
                        return this.populatePixel(e, t) && this.populateCreative(e, t)
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                },
                populatePixel: function(e, t) {
                    for (var n = t.impression_pixels, i = n.length, o = 0; o < i; o += 1) bouncex.campaigns[e].gbi.impressionPixels.push('<img src="' + n[o].url + '"/>');
                    return !0
                },
                populateCreative: function(e, t) {
                    return bouncex.gbi.populateTemplate(e, t, "response.products", "image.url"), !0
                }
            },
            tabr: {
                getFetchOptions: function(e) {
                    var t = this,
                        n = bouncex.campaigns[e].gbi.config;
                    return n["source.id"] = window.location.pathname, n["source.url"] = window.location.href, n["rec.visible"] = !1, n["user.session"] = "init", n["app.type"] = "desktop", {
                        url: n.endpoint_domain + "/1.1/json/" + n["publisher-name"] + "/recommendations.get",
                        data: n,
                        dataType: "json",
                        method: "GET",
                        timeout: 15e3,
                        success: function(n) {
                            t.processResponse(e, n) && activateGbiCampaign(e)
                        },
                        error: function() {
                            return bouncex.gbi.fail(e, "timed out")
                        }
                    }
                },
                processResponse: function(e, t) {
                    if (!(t && t.id && 0 < t.list.length)) return bouncex.gbi.fail(e, "no bid");
                    try {
                        return t.list ? (bouncex.campaigns[e].gbi.lastResponse = t, this.getPixels(e, t), !0) : bouncex.gbi.fail(e, "no bid")
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                },
                buildHTML: function(e, t) {
                    bouncex.gbi.populateTemplate(e, t, "response.list", "thumbnail[0].url")
                },
                getPixels: function(e, t) {
                    var n = bouncex.campaigns[e].gbi.config,
                        i = n.endpoint_domain + "/1.1/json/" + n["publisher-name"] + "/recommendations.notify-visible?";
                    i += "response.id=" + t.id + "&response.session=" + t.session, i += "&app.type=" + (bouncex.state.mobile ? "mobile" : "desktop") + "&app.apikey=" + n["app.apikey"], bouncex.campaigns[e].gbi.impressionPixels.push('<img src="' + i + '"/>')
                }
            },
            oubr: {
                getFetchOptions: function(e) {
                    var t = this,
                        n = bouncex.campaigns[e].gbi.config;
                    return {
                        url: n[n.environment + "_endpoint"] + "/recommendations/documents",
                        dataType: "json",
                        method: "GET",
                        data: n.data,
                        timeout: 15e3,
                        beforeSend: function(e) {
                            e.setRequestHeader("Authorization", "API_KEY " + n.API_KEY)
                        },
                        success: function(n) {
                            t.processResponse(e, n) && activateGbiCampaign(e)
                        },
                        error: function() {
                            return bouncex.gbi.fail(e, "timed out")
                        }
                    }
                },
                processResponse: function(e, t) {
                    if (!(t && t.requestId && t.items && 0 < t.items.length)) return bouncex.gbi.fail(e, "no bid");
                    try {
                        return bouncex.campaigns[e].gbi.lastResponse = t, this.getPixels(e, t) && this.populateCreative(e, t)
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                },
                populateCreative: function(e, t) {
                    return bouncex.gbi.populateTemplate(e, t, "response.items", "thumbnail"), !0
                },
                getPixels: function(e, t) {
                    bouncex.campaigns[e].gbi.config;
                    var n = t._actions.reportViewed;
                    return bouncex.campaigns[e].gbi.impressionPixels.push(n), !0
                }
            },
            index: {
                request: function(e) {
                    bouncex.gbi.init(e);
                    try {
                        bouncex.gbi.requestAndRefreshRequest(e)
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                },
                isMultiBidRequest: function(e) {
                    var t = bouncex.campaigns[e].gbi.config;
                    return 1 < t.imp.length || t.jsonp
                },
                getRequestData: function(ca_id) {
                    var campaign = bouncex.campaigns[ca_id],
                        config = campaign.gbi.config,
                        pageUrl = document.location.protocol + "//" + document.location.hostname + document.location.pathname,
                        multiBidParams = this.isMultiBidRequest(ca_id) && config.params && config.params.length ? "&" + config.params : "",
                        urlWithParams = updateQS(pageUrl, "deployment", campaign.type, "device", bouncex.state.mobile ? "mobile" : "desktop") + multiBidParams;
                    if (config.imp && config.imp.length)
                        for (var i = 0; i < config.imp.length; i++) config.imp[i].video && (config.imp[i] = bouncex.gbi.addFullVideoSupport(config.imp[i]));
                    var requestData = {
                        id: getTime2(),
                        imp: config.imp,
                        site: {
                            page: urlWithParams,
                            ref: bouncex.referrer,
                            mobile: bouncex.state.mobile ? 1 : 0
                        }
                    };
                    return config.dynamic_site_page && (requestData.site.page = document.location.protocol + "//" + document.location.hostname + "/" + eval(config.dynamic_site_page)), requestData.source = {
                        pchain: bouncex.gbi.integrations.tag.generateId()
                    }, requestData
                },
                getFetchOptions: function(e) {
                    for (var t = this, n = bouncex.campaigns[e], i = n.gbi.config, o = t.getRequestData(e), a = n.subtype || ("overlay" === n.type ? "overlay" : "none"), r = bouncex.ssl ? "https://as-sec" : "http://as", s = !1 === i.production ? "http://astest" : r, c = {
                            partner: n.gbi.provider,
                            partner_site_id: i.s,
                            request_number: n.gbi.requestNum,
                            deployment: a,
                            requested_ad_units: i.units ? i.units.join(", ") : "",
                            request_timestamp: getTimeMs(),
                            deal_id: "NA",
                            price: "NA"
                        }, u = {
                            url: s + ".casalemedia.com/cygnus",
                            data: {
                                v: "7",
                                cb: getTimeMs(),
                                s: i.s,
                                r: bouncex.stringify(o)
                            },
                            dataType: "text",
                            contentType: "application/x-www-form-urlencoded",
                            global: !1,
                            crossDomain: !0,
                            xhrFields: {
                                withCredentials: !0
                            },
                            timeout: i.timeout || 1e3,
                            complete: function(n, i) {
                                t.handleResponse(e, n, i, c)
                            }
                        }, b = 0; b < o.imp.length; b++)
                        if (o.imp[b].video) {
                            n.gbi.isVideo = !0, u.data.v = "8.8", u.data.fn = "jsonp";
                            break
                        }
                    return u
                },
                handleResponse: function(e, t, n, i) {
                    var o = bouncex.campaigns[e],
                        a = "bid_error";
                    if ("success" === n && 200 === t.status && t.responseText) {
                        var r = t.responseText,
                            s = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")),
                            c = this.processResponse(e, s),
                            u = c && c.ext && c.ext.dealid;
                        u && (i.deal_id = u), c && c.ext && c.ext.pricelevel && (i.price = this.convertPrice(c.ext.pricelevel, u)), a = c ? "bid_fill" : "bid_none"
                    } else "success" !== n || t.responseText ? 0 === t.status && (a = "bid_cancel") : a = "bid_empty";
                    if (bouncex.gbi.report(e, a, i), "bid_fill" == a) o.gbi.isVideo ? (o.gbi.vastUrl = c.ext && c.ext.vasturl, bouncex.gbi.requestCompleteSingleVideo(e, o.gbi.vastUrl)) : o.gbi.html = c.adm, o.gbi.step = this.isMultiBidRequest(e) ? +c.impid : 1, bouncex.gbi.log(e, "using step " + o.gbi.step), activateGbiCampaign(e);
                    else {
                        if ("bid_empty" == a) return bouncex.gbi.fail(e, "empty response");
                        if ("bid_none" == a) return bouncex.gbi.fail(e, "no bid");
                        if ("bid_error" == a) return bouncex.gbi.fail(e, n + " " + t.status)
                    }
                },
                fetch: function(e) {
                    bouncex.gbi.doAjaxRequest(e, this.getFetchOptions(e))
                },
                processResponse: function(e, t) {
                    if (t) try {
                        var n = (t = bouncex.parseJSON(t)).seatbid[0].bid[0];
                        if (this.isMultiBidRequest(e))
                            for (var i = 0; i < t.seatbid.length; i++)
                                for (var o = 0; o < t.seatbid[i].bid.length; o++)
                                    if (t.seatbid[i].bid[o].ext.pricelevel) {
                                        +t.seatbid[i].bid[o].ext.pricelevel.substring(1) > +n.ext.pricelevel.substring(1) && (n = t.seatbid[i].bid[o])
                                    }
                        return n
                    } catch (e) {}
                    return !1
                },
                getRatio: function(e) {
                    var t = bouncex.campaigns[e].gbi.config.imp[0].banner,
                        n = bouncex.wndsize(),
                        i = 1,
                        o = 1;
                    return t.w > n.width && (i = n.width / t.w), t.h > n.height && (o = n.height / t.h), i > o ? o : i
                },
                convertPrice: function(e, t) {
                    var n = e.length - 2,
                        i = e.split("");
                    i.splice(n, 0, ".");
                    var o = i.join("").replace(/[^0-9.]/g, "");
                    return (t ? +o : +o / .85).toFixed(5)
                }
            },
            pbm: {
                request: function(e) {
                    bouncex.gbi.init(e);
                    try {
                        this.userSynced() ? bouncex.gbi.requestAndRefreshRequest(e) : this.syncUser(e)
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                },
                syncUser: function(e) {
                    var t = bouncex.campaigns[e].gbi.config,
                        n = createIframe({
                            style: "display: none;",
                            src: "//" + t.user_sync_endpoint + "?p=" + t.publisher_id
                        });
                    n.onload = function() {
                        sessionStorage.setItem("bxpbmsynced", "true"), bouncex.gbi.requestAndRefreshRequest(e)
                    }, document.body.appendChild(n)
                },
                userSynced: function() {
                    return !!sessionStorage.getItem("bxpbmsynced")
                },
                getTagId: function(e, t) {
                    var n = bouncex.campaigns[e];
                    return n.subtype ? {
                        masthead: "Masthead",
                        endcap: "End_Cap",
                        encore: "Encore",
                        middleofarticle: "Middle_of_Article",
                        skyline: "Skyline"
                    }[n.subtype] + "_" + t : "overlay" === n.type ? "Overlay_" + t : ""
                },
                getRequestData: function(e) {
                    var t = bouncex.campaigns[e].gbi.config,
                        n = (bouncex.state.mobile ? t.mobile_id : t.desktop_id).toString(),
                        i = bouncex.cookie.vid + "_" + bouncex.cookie.sid,
                        o = t.isLegacy ? t.requestData : {},
                        a = t.isLegacy ? t.requestData.imp : t.imp,
                        r = this.getTagId(e, n);
                    if (a && a.length)
                        for (var s = 0; s < a.length; s++) a[s].video && (a[s] = bouncex.gbi.addFullVideoSupport(a[s]));
                    jQuery.extend(o, {
                        id: i,
                        site: {
                            id: n,
                            name: window.location.hostname,
                            ref: decodeURIComponent(bouncex.referrer),
                            page: decodeURIComponent(bouncex.calling_url),
                            publisher: {
                                id: t.publisher_id
                            }
                        },
                        device: {
                            ua: navigator.userAgent,
                            ip: bouncex.state.vip
                        },
                        imp: a.map(function(e, t) {
                            return e.id = getTimeMs().toString() + t, e.secure = bouncex.ssl ? 1 : 0, e.tagid = r, e
                        }),
                        at: 1,
                        tmax: 200
                    });
                    var c = this.getExtraIds();
                    return c && (o.user = {
                        eids: c
                    }), o.source = {
                        pchain: bouncex.gbi.integrations.tag.generateId()
                    }, o
                },
                getExtraIds: function() {
                    var e = window.bouncex.gbi.deviceOptedStatus;
                    if (e) return [{
                        source: "bxid",
                        uids: [{
                            id: e,
                            atype: 1
                        }]
                    }]
                },
                getFetchOptions: function(e) {
                    for (var t = this, n = bouncex.campaigns[e], i = n.gbi.config, o = t.getRequestData(e), a = (bouncex.ssl ? "https://" : "http://") + i.endpoint, r = o.imp.length, s = n.subtype || ("overlay" === n.type ? "overlay" : "none"), c = !!(o.user && o.user.eids && o.user.eids[0] && o.user.eids[0].uids && o.user.eids[0].uids[0] && o.user.eids[0].uids[0].id), u = 0; u < r; u++)
                        if (o.imp[u].video) {
                            n.gbi.isVideo = !0;
                            break
                        }
                    var b = {
                        partner: n.gbi.provider,
                        partner_site_id: o.site.id,
                        request_number: n.gbi.requestNum,
                        deployment: s,
                        requested_ad_units: i.units ? i.units.join(", ") : "",
                        request_timestamp: getTimeMs(),
                        device_id_included: c,
                        deal_id: "NA",
                        price: "NA"
                    };
                    return {
                        url: a,
                        data: bouncex.stringify(o),
                        method: "POST",
                        type: "POST",
                        dataType: "json",
                        timeout: i.timeout || 2e3,
                        complete: function(n, i) {
                            t.handleResponse(e, n, i, b)
                        }
                    }
                },
                handleResponse: function(e, t, n, i) {
                    var o = bouncex.campaigns[e],
                        a = "bid_error";
                    if ("success" === n && 200 === t.status) {
                        var r = this.processResponse(e, t.responseText);
                        r && r.dealid && (i.deal_id = r.dealid), r && r.price && (i.price = r.price), a = r ? "bid_fill" : "bid_none"
                    } else "nocontent" === n && 204 === t.status ? a = "bid_empty" : 0 === t.status && (a = "bid_cancel");
                    if (bouncex.gbi.report(e, a, i), "bid_fill" == a) o.gbi.isVideo ? bouncex.gbi.requestCompleteSingleVideo(e, r.adm) : o.gbi.html = r.adm, activateGbiCampaign(e);
                    else {
                        if ("bid_empty" == a) return bouncex.gbi.fail(e, "empty bid response");
                        if ("bid_none" == a) return bouncex.gbi.fail(e, "no bid");
                        if ("bid_error" == a) return bouncex.gbi.fail(e, "status " + t.status + ": " + n)
                    }
                },
                fetch: function(e) {
                    bouncex.gbi.doAjaxRequest(e, this.getFetchOptions(e))
                },
                processResponse: function(e, t) {
                    return !!t && (t = bouncex.parseJSON(t)).seatbid[0].bid[0]
                }
            },
            rcl: {
                request: function(e) {
                    bouncex.gbi.init(e);
                    try {
                        this.init(e)
                    } catch (t) {
                        bouncex.gbi.fail(e, t)
                    }
                },
                init: function(e) {
                    var t = bouncex.campaigns[e];
                    t.gbi.isVideo = !0, t.gbi.playBeforeImpression = !0, bouncex.gbi.requestCompleteSingleVideo(e, this.getVastUrl(e)), activateGbiCampaign(e)
                },
                getVastUrl: function(e) {
                    var t = bouncex.campaigns[e].gbi.config,
                        n = t.requestUrl,
                        i = t.requestData;
                    for (var o in i.PAGE_URL = bouncex.calling_url, i.cb = getTime2(), i) n = updateQS(n, o, i[o]);
                    return n
                }
            }
        };
        var NativeCapture = {
            _captureContexts: [],
            _hasSentEvent: !1,
            _inputExclusionIdentifiers: ["[type=button]", "[type=submit]", "[type=reset]", "[type=hidden]", "[type=radio]", "[type=checkbox]", "[type=image]", "[type=password]"],
            _submitIdentifiers: [
                ["[type=submit]", "[class*=submit]", "[id*=submit]"],
                ["[type=button]", "[class*=button]", "button"],
                ["a"]
            ],
            _addCaptureListeners: function() {
                this._log("adding capture context listeners");
                var e = this;
                this._captureContexts.forEach(function(t) {
                    var n = tryCatch(function() {
                        e._log("submit detected; checking input value");
                        var n = t.input.value;
                        n && bouncex.utils.validate.email(n) ? (e._log("email detected"), e._trackUser(n, t.input.id)) : e._log("no email detected")
                    });
                    t.submit.addEventListener("click", n), t.input.addEventListener("keydown", function(e) {
                        ("Enter" === e.code || 13 === e.keyCode) && n()
                    })
                })
            },
            _addCustomCaptureContexts: function() {
                var e = bouncex.website.els,
                    t = {},
                    n = this._getExclusionIdentifiers(bouncex.website.ibx.miw_exclude);
                if (e && 0 < Object.keys(e).length)
                    for (key in e) {
                        if (-1 < key.indexOf("native_capture_input")) {
                            var i = e[key] + ":not(" + n + ")",
                                o = jQuery(i).get(0);
                            t[a = this._customElemObjKey(key, "native_capture_input")] = t[a] ? t[a] : {}, t[a].input = o
                        }
                        if (-1 < key.indexOf("native_capture_submit")) {
                            var a, r = jQuery(e[key]).get(0);
                            t[a = this._customElemObjKey(key, "native_capture_submit")] = t[a] ? t[a] : {}, t[a].submit = r
                        }
                    }
                for (pair in t) t[pair].input && t[pair].submit && this._captureContexts.push({
                    input: t[pair].input,
                    submit: t[pair].submit
                })
            },
            _customElemObjKey: function(e, t) {
                return e.replace(t, "") + "_"
            },
            _getExclusionIdentifiers: function(e) {
                var t = this._inputExclusionIdentifiers.slice();
                return e ? t.concat(e.split(",").map(function(e) {
                    return e.trim()
                })) : t
            },
            _getInputSelector: function() {
                var e = "input";
                return this._getExclusionIdentifiers(bouncex.website.ibx.miw_exclude).forEach(function(t) {
                    e += ":not(" + t + ")"
                }), e
            },
            _initCaptureContexts: function(e) {
                for (var t = 0; t < e.length; t++) e: for (var n = 0; n < this._submitIdentifiers.length; n++)
                    for (var i, o = this._submitIdentifiers[n].join(","), a = e[t].parentNode, r = 0; r < 10 && a; r++) {
                        if (i = a.querySelector(o)) {
                            this._captureContexts.push({
                                input: e[t],
                                submit: i
                            });
                            break e
                        }
                        a = a.parentNode
                    }
            },
            _log: function(e) {
                _logger2.default.info({
                    group: "capture",
                    message: e
                })
            },
            _trackUser: function(e, t) {
                if (this._hasSentEvent) return !1;
                this._log("sending user event");
                var n = {
                    email: e,
                    source: "input_submission"
                };
                t && (n.input_id = t), bouncex.push(["user", n]), this._hasSentEvent = !0
            },
            init: function() {
                this._log("initializing native capture"), this._addCustomCaptureContexts();
                var e = this._getInputSelector(),
                    t = jQuery(e).get();
                return this._captureContexts.length || t.length ? (this._log("searching for capture contexts"), this._initCaptureContexts(t), void(this._captureContexts.length ? (this._log("found " + this._captureContexts.length + " capture contexts"), this._addCaptureListeners()) : this._log("no capture contexts found"))) : (this._log("no input fields found"), !1)
            }
        };
        bouncex.osr = {
            init: function(e, t) {
                try {
                    bouncex.osr.log(e, t ? "init OSR on product page, excluding item #" + t : "init OSR", !1), this._getOsrParamsJson(e, bouncex.campaigns[e].osr_params_json), this._getItems(e, t)
                } catch (e) {
                    bouncex.err(e, {
                        source: "osr js"
                    })
                }
            },
            _getItems: function(e, t) {
                bouncex.osr.log(e, "getting items", !1);
                var n = bouncex.campaigns[e].osr.config.endpoint;
                t && (n = n + "," + t);
                var i = {
                    url: n,
                    method: "GET",
                    timeout: 4e3,
                    dataType: "json",
                    complete: function(t) {
                        if (bouncex.osr._handleResponse(e, t) && (bouncex.osr.log(e, "tracked items successfully loaded", !1), cacheCreativeForm(e, 1), bouncex.osr.activateCampaign(e)), !bouncex.campaigns[e].osrItems) return bouncex.osr.fail(e, "no items returned, OSR campaign " + e + " is ineligible")
                    }
                };
                bouncex.utils.doAjaxRequest(i)
            },
            _getOsrParamsJson: function(e, t) {
                var n, i = bouncex.parseJSON(t);
                bouncex.campaigns[e].osr = {}, bouncex.campaigns[e].osr.config = {}, n = i.sortBy + "," + i.minProducts + "," + i.maxProducts, i.endpoint = "https://" + bouncex.website.osru + "?website_id=" + bouncex.website.id + "&device_id=" + bouncex.cookie.did + "&visit_id=" + bouncex.cookie.vid + "&osr_params=" + n, bouncex.campaigns[e].osr.config = i
            },
            _handleResponse: function(e, t) {
                if (t && 200 === t.status) try {
                    var n = t.responseText;
                    if (n.trim() && 0 !== n.length) return bouncex.campaigns[e].osrItems = bouncex.parseJSON(n).items, bouncex.osr._populateCreative(e, bouncex.campaigns[e].osrItems);
                    bouncex.osr.fail(e, "empty response")
                } catch (t) {
                    bouncex.osr.fail(e, t)
                } else if (t && 202 === t.status) try {
                    -1 < t.responseText.indexOf("Not enough 'view item' events") && bouncex.osr.fail(e, "OSR campaign's minimum # of products is greater than the user's history of 'view item' events.")
                } catch (t) {
                    bouncex.osr.fail(e, t)
                }
                return !1
            },
            _populateCreative: function(e, t) {
                if (bouncex.campaigns[e].control) return !0;
                var n = document.getElementById("bx-campaign-" + e),
                    i = n.cloneNode(!0);
                return n.innerHTML = this._populateClonedCreativeTemplate(bouncex.campaigns[e].numSteps, i, t, bouncex.campaigns[e].osr.config, e), !0
            },
            _populateClonedCreativeTemplate: function(e, t, n, i, o) {
                var a = 0;
                this._adjustLocalItemsObject(o, n, i), this._populateOsrItemNumberElements(this._getOsrItemNumberElements(t), bouncex.campaigns[o].osrItems.length), ("development" === bouncex.env || "staging" === bouncex.env) && n.length > bouncex.campaigns[o].osrItems.length && (n = bouncex.campaigns[o].osrItems);
                for (var r, s = 1; s <= e; s++) {
                    r = this._getOsrGroups(s, t);
                    for (var c = 0; c < r.length; c++) {
                        var u = n[c],
                            b = r[c];
                        b && u ? b.innerHTML = bouncex.osr._populateClonedCreativeGroups(b, u, i) : b.parentNode.removeChild(b)
                    }
                    r.length && (a = r.length)
                }
                return bouncex.campaigns[o].osr.config.inconsistentMaxParamToCreativeMax && 0 < a && a !== n.length && (bouncex.campaigns[o].osrItems = n.slice(0, a), this._populateOsrItemNumberElements(this._getOsrItemNumberElements(t), a)), t.innerHTML
            },
            _adjustLocalItemsObject: function(e, t, n) {
                var i = [];
                if (t.length > n.maxProducts) {
                    for (var o in bouncex.campaigns[e].osr.config.inconsistentMaxParamToCreativeMax = !0, t)(i.length < n.maxProducts || void 0 === i.length) && i.push(t[o]);
                    bouncex.campaigns[e].osrItems = i
                }
            },
            _populateClonedCreativeGroups: function(e, t, n, i) {
                var o, a, r = bouncex.osr._setLinkBehavior(n.linkBehavior),
                    s = e.querySelectorAll("[data-bx-osr]", i);
                for ("true" === n.disableGroupLinks ? bouncex.osr._setOsrAttributes(e, {
                        style: "cursor:default !important"
                    }) : bouncex.osr._setOsrAttributes(e, {
                        href: t.url,
                        "data-click": "hyperlink",
                        target: r,
                        "data-click-report": "default"
                    }), i = 0; i < s.length; i++) a = (o = s[i]).getAttribute("data-bx-osr"), bouncex.osr._populateItemProperties(o, a, t, n, r);
                return e.innerHTML
            },
            _populateItemProperties: function(e, t, n, i, o) {
                "imageurl" === t ? bouncex.osr._populateImages(e, n[t]) : "price" === t ? bouncex.osr._populatePrice(e, i.currency, n[t]) : "url" === t ? bouncex.osr._populateUrl(e, o, n[t]) : e.firstChild.textContent = n[t]
            },
            _getOsrGroups: function(e, t) {
                return t.querySelectorAll(".bx-step-" + e + ' [data-bx-osr="group"]')
            },
            _getOsrItemNumberElements: function(e) {
                return e.querySelectorAll('[data-bx-osr="numitems"]')
            },
            _populateOsrItemNumberElements: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var i, o = e[n];
                    o && 0 < t && (i = o.textContent.replace(o.textContent, t), o.textContent = i)
                }
            },
            _setOsrAttributes: function(e, t) {
                for (var n in t) e.setAttribute(n, t[n])
            },
            _populateUrl: function(e, t, n) {
                0 < e.getElementsByTagName("button").length && (e = e.getElementsByTagName("button")[0]), this._setOsrAttributes(e, {
                    href: n,
                    "data-click": "hyperlink",
                    target: t,
                    "data-click-report": "default"
                }), e.classList.add("bx-osr-preventclicks")
            },
            _populatePrice: function(e, t, n) {
                var i = this._getFormattedCurrency(t, n);
                e.firstChild.textContent = i
            },
            _populateImages: function(e, t) {
                "DIV" === e.firstChild.tagName ? e.firstChild.setAttribute("style", "background-image:url('" + t + "')") : e.firstChild.setAttribute("src", t)
            },
            _getFormattedCurrency: function(e, t) {
                return "USD" === e ? "$" + t : "EU" === e ? "€" + t : "$" + t
            },
            _setLinkBehavior: function(e) {
                return "newTab" === e ? "_blank" : "currTab" === e ? "_self" : "_blank"
            },
            activateCampaign: function(e) {
                bouncex.osr.log(e, "activating OSR campaign", !1), activate_campaign(e)
            },
            log: function(e, t, n) {
                var i = {
                    group: "osr",
                    campaignId: e,
                    message: t
                };
                n ? _logger2.default.error(i) : _logger2.default.info(i)
            },
            fail: function(e, t) {
                bouncex.campaigns[e].failed = !0, this.log(e, t, !0)
            }
        };
        var TabTalk = {
            _flashTitle: function(e, t) {
                var n = this,
                    i = bouncex.campaigns[e];
                t = t || 5, this.cancelTitleUpdate(e),
                    function o() {
                        i.custom_tab_title.flashOn ? (i.custom_tab_title.flashOn = !1, i.custom_tab_title.formattedTitle && (document.title = bouncex.originalTitle), n.changeFavicon(e, !0)) : (i.custom_tab_title.flashOn = !0, i.custom_tab_title.formattedTitle && (document.title = i.custom_tab_title.formattedTitle), n.changeFavicon(e, !1)), 0 < --t && (bouncex.events[e].effect_timeout = setTimeout2(o, 2e3))
                    }()
            },
            _scrollTitle: function(e, t) {
                var n = bouncex.campaigns[e];
                n.custom_tab_title.formattedTitle && (t = t || 0, this.cancelTitleUpdate(e), function i() {
                    var o = n.custom_tab_title.formattedTitle + "  ";
                    t > o.length && (t = 0), document.title = o.substr(t) + o.substr(0, t), t += 3, bouncex.events[e].effect_timeout = setTimeout2(i, 1e3)
                }())
            },
            cancelTitleUpdate: function(e) {
                clearTimeout(bouncex.events[e].effect_timeout), document.title = bouncex.originalTitle ? bouncex.originalTitle : "", delete bouncex.campaigns[e].custom_tab_title.flashOn
            },
            changeFavicon: function(e, t) {
                var n = bouncex.campaigns[e];
                if (n.custom_tab_title.favicon_url) {
                    jQuery('link[rel~="icon"]').remove();
                    var i = document.createElement("link");
                    i.type = t ? "image/x-icon" : n.linkType, i.rel = "icon", i.href = t ? n.originalFavicon : n.custom_tab_title.favicon_url, document.getElementsByTagName("head")[0].appendChild(i)
                }
            },
            updateTitle: function(e) {
                var t = bouncex.campaigns[e];
                bouncex.originalTitle = bouncex.originalTitle || document.title;
                var n = jQuery('link[rel~="icon"]');
                t.originalFavicon = n && n.attr("href") || "/favicon.ico", t.linkType = t.custom_tab_title.favicon_type || "image/x-icon";
                var i = t.custom_tab_title.effect,
                    o = "flashForever" === i ? 1 / 0 : 1;
                "scroll" === i ? this._scrollTitle(e) : this._flashTitle(e, 2 * o - 1), this.changeFavicon(e, !1)
            }
        };
        exports.activate_campaign = activate_campaign, exports.activateInstruments = activateInstruments, exports.ActiveTime = ActiveTime, exports.activation_funcs = activation_funcs, exports.addTriggerToRegistry = addTriggerToRegistry, exports.applyCampaignStyles = applyCampaignStyles, exports.assignDomReferencesToCampaign = assignDomReferencesToCampaign, exports.baddjs = baddjs, exports.bcx_init = bcx_init, exports.bcxReady = bcxReady, exports.BehavioralCriteria = BehavioralCriteria, exports.behavioralCriteriaComplete = behavioralCriteriaComplete, exports.BrowserUtil = BrowserUtil, exports.buildReport = buildReport, exports.BxInterval = BxInterval, exports.cacheCreativeForm = cacheCreativeForm, exports.campaignEligible = campaignEligible, exports.can_init = can_init, exports.can_init_post_cookie = can_init_post_cookie, exports.can_show_ad = can_show_ad, exports.clearBounceCookie = clearBounceCookie, exports.close_ad = close_ad, exports.ComplianceChecks = ComplianceChecks, exports.CouponCodes = CouponCodes, exports.createIframe = createIframe, exports.Criteria = Criteria, exports.CustomVariables = CustomVariables, exports.Debug = Debug, exports.evaluateBehavioralTriggers = evaluateBehavioralTriggers, exports.event_js_eval = event_js_eval, exports.EventListeners = EventListeners, exports.event_stream_report = event_stream_report, exports.getBounceCookieFPLocalStorage = getBounceCookieFPLocalStorage, exports.getBounceCookieLocalStorage = getBounceCookieLocalStorage, exports.getBounceCookieMulti = getBounceCookieMulti, exports.getBounceCookieSingle = getBounceCookieSingle, exports.getBounceVisitCookie = getBounceVisitCookie, exports.getParam = getParam, exports.getScript = getScript, exports.getTime2 = getTime2, exports.getTimeMs = getTimeMs, exports.getUniqueInstrumentId = getUniqueInstrumentId, exports.initActivationInstruments = initActivationInstruments, exports.initBa = initBa, exports.initBehavioralCriteriaInstruments = initBehavioralCriteriaInstruments, exports.init_browser = init_browser, exports.init_cookie_functions = init_cookie_functions, exports.init_cookie_localstorage = init_cookie_localstorage, exports.init_endpageview_event = init_endpageview_event, exports.init_event_tracking = init_event_tracking, exports.init_ibx = init_ibx, exports.init_ibx_tracking = init_ibx_tracking, exports.init_page_types = init_page_types, exports.initPreInitCustomJs = initPreInitCustomJs, exports.init_protocol_and_domain = init_protocol_and_domain, exports.init_public_functions = init_public_functions, exports.InitSequence = InitSequence, exports.init_testmode_before_cookie = init_testmode_before_cookie, exports.init_testmode_after_cookie = init_testmode_after_cookie, exports.init_url_and_referrer = init_url_and_referrer, exports.init_visit_cookie = init_visit_cookie, exports.init_website_custom_js = init_website_custom_js, exports.isBxInternalTraffic = isBxInternalTraffic, exports.isMissingTarget = isMissingTarget, exports.loadCouponsAndValidateForm = loadCouponsAndValidateForm, exports.loadImages = loadImages, exports.Logger = _logger2.default, exports.make_include_string = make_include_string, exports.NativeCapture = NativeCapture, exports.next_sequence_id = next_sequence_id, exports.noteCookieAdShown = noteCookieAdShown, exports.parseJSON = parseJSON, exports.parseSiteElementSelector = parseSiteElementSelector, exports.perf = perf, exports.placeCampaign = placeCampaign, exports.qs = qs, exports.Records = _records2.default, exports.ReloadCampaigns = ReloadCampaigns, exports.report = report, exports.report_submit = report_submit, exports.setAccessibilityProperties = setAccessibilityProperties, exports.setBounceCookieFPLocalStorage = setBounceCookieFPLocalStorage, exports.setBounceCookieLocalStorage = setBounceCookieLocalStorage, exports.setBounceCookieMulti = setBounceCookieMulti, exports.setBounceCookieSingle = setBounceCookieSingle, exports.setBounceVisitCookie = setBounceVisitCookie, exports.setCalloutTarget = setCalloutTarget, exports.setCampaignCalloutTargetToIndex = setCampaignCalloutTargetToIndex, exports.setTimeout2 = setTimeout2, exports.setTransitionEffect = setTransitionEffect, exports.shouldEnforcePolicies = shouldEnforcePolicies, exports.show_ad = show_ad, exports.SinglePageApp = SinglePageApp, exports.stringify_cookie = stringify_cookie, exports.TabTalk = TabTalk, exports.trigger_ad = trigger_ad, exports.tryCatch = tryCatch, exports.unload_campaign = unload_campaign, exports.updateQS = updateQS, exports.visitorTestMode = visitorTestMode, exports.wndorientation = wndorientation, exports.wndsize = wndsize
    }, function(e, t, n) {
        function i(e) {
            if (e.shouldLog) {
                c.default.addRecord(e);
                var t = "%c ";
                e.type && (t += "[".concat(e.type.toUpperCase(), "] ")), e.group && (t += "(".concat(e.group, ") ")), e.campaignId && (t += "(#".concat(e.campaignId, ") ")), t += e.message, bouncex.log(t, "color: ".concat(e.color))
            }
        }

        function o(e, t) {
            var n = "string" == typeof e ? {
                message: e
            } : e;
            for (var i in void 0 !== n.shouldLog && (n.shouldLog = n.shouldLog || t.shouldLog), t) void 0 === n[i] && (n[i] = t[i]);
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n(0),
            s = n(3),
            c = (a = s) && a.__esModule ? a : {
                default: a
            };
        t.default = {
            info: function(e) {
                i(o(e, {
                    shouldLog: (0, r.visitorTestMode)("log"),
                    type: "info",
                    color: "#5d59e8"
                }))
            },
            warn: function(e) {
                i(o(e, {
                    shouldLog: (0, r.visitorTestMode)("log") || (0, r.visitorTestMode)("log:warn"),
                    type: "warn",
                    color: "#dd7300"
                }))
            },
            debug: function(e) {
                i(o(e, {
                    shouldLog: (0, r.visitorTestMode)("log") || (0, r.visitorTestMode)("log:warn"),
                    type: "debug",
                    color: "#9500dd"
                }))
            },
            error: function(e) {
                i(o(e, {
                    shouldLog: (0, r.visitorTestMode)("log") || (0, r.visitorTestMode)("log:warn") || (0, r.visitorTestMode)("log:error"),
                    type: "error",
                    color: "#dd0000"
                }))
            }
        }
    }, function(e, t, n) {
        function i(e) {
            if (e.internal && (0, a.isBxInternalTraffic)()) return !0;
            if (e.liveTraffic) switch (e.type) {
                case "canary":
                    return t = e.liveTraffic, r < t;
                case "device":
                default:
                    return o(e.liveTraffic)
            }
            var t;
            return !1
        }

        function o(e) {
            var t = bouncex.cookie && bouncex.cookie.did;
            return !!t && +t.substr(t.length - 2) < e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t._setPageId = function(e) {
            r = e
        };
        var a = n(0),
            r = Math.floor(100 * Math.random());
        t.default = {
            apply: function(e, t) {
                i(e) && t()
            }
        }
    }, function(e, t, n) {
        function i(e) {
            return "function" == typeof e ? r.filter(e) : r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            a = 500,
            r = [];
        t.default = {
            addRecord: function(e) {
                if (!(0, o.isBxInternalTraffic)()) return !1;
                r.length >= a && r.shift();
                var t = bouncex.utils.isObject(e) ? e : {};
                "string" == typeof e && (t.message = e), t.group = t.group || !1, t.message = t.message || "", t.isError = !!t.isError, t.timestamp = (0, o.getTimeMs)(), r.push(t)
            },
            clearRecords: function() {
                r = []
            },
            getRecords: i,
            printRecords: function(e) {
                var t, n, o;
                i(e).forEach(function(e) {
                    n = new Date(e.timestamp).toLocaleTimeString(), o = e.isError ? "#FF0000" : "#00F", t = "%c ", e.group && (t += "(".concat(e.group, ") ")), e.campaignId && (t += "(".concat(e.campaignId, ") ")), t += "(".concat(n, ") "), t += e.message, bouncex.log(t, "color: ".concat(o))
                })
            }
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            reload: function() {
                bouncex.reload_campaigns()
            }
        }
    }, function(e, t) {
        function n() {
            return !(bouncex.browser.ios && bouncex.browser.chrome || !+bouncex.website.aco.local_storage)
        }

        function i() {
            return "multi_cookie" == bouncex.website.ct && bouncex.website.aco.disable_first_party || !(6e3 < document.cookie.length)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.can_local_store = n, t.checkCookieEligibility = i, t.init_cookie_check = function() {
            bouncex.local_storage_enabled = n(), bouncex.cookie_too_large = !1, bouncex.local_storage_enabled || "multi_cookie" == bouncex.website.ct || i() || (bouncex.cookie_too_large = !0)
        }
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n(1),
            a = (i = o) && i.__esModule ? i : {
                default: i
            };
        t.default = {
            _articles: [],
            _constants: {
                selectors: {
                    group: ".bx-group-custom",
                    image: ".bx-row-line",
                    headline: ".bx-row-text-subheadline"
                }
            },
            _getArticles: function() {
                return this._articles
            },
            _getRequestOptions: function() {
                var e = this;
                return {
                    url: e._settings.feedUrl,
                    dataType: e._settings.feedFormat,
                    complete: function(t, n) {
                        e._handleResponse(t, n)
                    }
                }
            },
            _getStorageKey: function() {
                return "bx-recirc-" + bouncex.website.id
            },
            _getStoredArticles: function() {
                var e = this._getStorageKey(),
                    t = window.sessionStorage.getItem(e);
                return bouncex.parseJSON(t, [])
            },
            _getValidArticles: function(e) {
                for (var t = [], n = 0; n < e.length; n++) this._isValidArticle(e[n]) && t.push(e[n]);
                return t
            },
            _getValidGroups: function(e) {
                for (var t = e.querySelectorAll(this._constants.selectors.group), n = [], i = 0; i < t.length; i++) this._isValidGroup(t[i]) && n.push(t[i]);
                return n
            },
            _handleResponse: function(e, t) {
                if ("error" === t) return this.error(null, "error response from article feed");
                this.log(null, "parsing feed response");
                var n = this._parseArticles(e);
                if (!n) return this.error(null, "no articles found while parsing feed response");
                var i = this._getValidArticles(n);
                return i.length ? (this.log(null, i.length + "/" + n.length + " articles passed validation"), this._setArticles(i), void this._storeArticles(i)) : this.error(null, "all articles failed validation")
            },
            _isValidGroup: function(e) {
                var t = 1 === e.querySelectorAll(this._constants.selectors.image).length,
                    n = 1 === e.querySelectorAll(this._constants.selectors.headline).length,
                    i = 1 === e.querySelectorAll("a").length;
                return t && n && i
            },
            _requestFeed: function(e) {
                this.log(null, "requesting articles from " + e.url), jQuery.ajax(e)
            },
            _setArticles: function(e) {
                this._articles = e
            },
            _storeArticles: function(e) {
                this.log(null, "storing articles in session storage");
                var t = this._getStorageKey();
                try {
                    window.sessionStorage.setItem(t, JSON.stringify(e))
                } catch (e) {
                    this.error(null, e)
                }
            },
            _isValidArticle: function(e) {
                if (!e) return !1;
                var t = !(!e.link || !bouncex.utils.validate.url(e.link)),
                    n = !(!e.image || !bouncex.utils.validate.url(e.image)),
                    i = !!e.headline;
                return t && n && i
            },
            _parseArticles: function(e) {
                switch (this._settings.feedFormat) {
                    case "xml":
                        return this._settings.responseParser(e.responseXML);
                    case "json":
                        return this._settings.responseParser(e.responseJSON);
                    default:
                        return this.error(null, "unrecognized feed format type"), !1
                }
            },
            _populateGroup: function(e, t, n) {
                try {
                    var i = t.querySelectorAll(this._constants.selectors.image)[0].firstChild,
                        o = t.querySelectorAll(this._constants.selectors.headline)[0].firstChild,
                        a = t.querySelector("a");
                    i.style.backgroundImage = "url(" + n.image + ")", i.style.backgroundSize = "cover", o.textContent = n.headline, a.setAttribute("href", n.link)
                } catch (t) {
                    this.error(e, t)
                }
            },
            _settings: {},
            _validateSettings: function() {
                return !!(this._settings.feedFormat && this._settings.feedUrl && this._settings.responseParser && "function" == typeof this._settings.responseParser)
            },
            addSettings: function(e) {
                for (var t in e) bouncex.recirc._settings[t] = e[t]
            },
            articlesAvailable: function() {
                return 0 < this._articles.length
            },
            error: function(e, t) {
                this.log(e, t, !0)
            },
            init: function() {
                if (this.isEnabled() && !this.articlesAvailable()) {
                    if (!this._validateSettings()) return this.log(null, "settings failed validation");
                    var e = this._getStoredArticles();
                    e && e.length ? (this.log(null, "retrieving articles from session storage"), this._setArticles(e)) : (this.log(null, "no articles found in storage; requesting from feed"), this._requestFeed(this._getRequestOptions()))
                }
            },
            isEnabled: function() {
                return !!this._settings.enabled
            },
            log: function(e, t, n) {
                var i = {
                    group: "recirc",
                    campaignId: e,
                    message: t
                };
                n ? a.default.error(i) : a.default.info(i)
            },
            populateCreative: function(e) {
                if (!this.isEnabled()) return !1;
                if (!this.articlesAvailable()) return !1;
                var t = document.getElementById("bx-campaign-" + e);
                if (!t) return this.error(e, "no creative found");
                var n = this._getValidGroups(t),
                    i = this._getArticles();
                if (n.length && n.length <= i.length) {
                    this.log(e, "populating article groups");
                    for (var o = 0; o < n.length; o++) this._populateGroup(e, n[o], i[o])
                } else n.length && this.log(e, "not enough articles to populate creative")
            }
        }
    }, function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            a = i(n(8)),
            r = (i(n(2)), {
                _activateBehavioralTriggers: function(e) {
                    (0, o.activateInstruments)(e)
                },
                _activateCampaign: function(e) {
                    this.log(e, "activating campaign");
                    var t = bouncex.campaigns[e],
                        n = this;
                    t.gbi.ready = !0, t.gbi.hasActivatedOnce || ((0, o.event_js_eval)(e, "activation"), t.gbi.hasActivatedOnce = !0), (0, o.setTimeout2)(function() {
                        t.ad_shown || t.failed || (n._deactivateCampaign(e), n.initCampaign(e))
                    }, 5e4)
                },
                _activateCreative: function(e, t) {
                    this.log(e, "activating creative");
                    var n = bouncex.campaigns[e],
                        i = bouncex.creatives[t],
                        a = /{bpcid}/g;
                    return n.html = i.html.replace(a, e), n.styles = i.styles.replace(a, e), (0, o.setCalloutTarget)(n), (0, o.isMissingTarget)(n) ? (bouncex.gbi2.error(e, "no anchor found"), this._failCampaign(e)) : ((0, o.placeCampaign)(e), (0, o.assignDomReferencesToCampaign)(e), (0, o.cacheCreativeForm)(e, 1), (0, o.setAccessibilityProperties)(e), (0, o.setTransitionEffect)(e), void(0, o.applyCampaignStyles)(e))
                },
                _activatePlacement: function(e, t) {
                    var n = bouncex.campaigns[e],
                        i = t.placementId,
                        o = n.gbi.placements[i],
                        a = this;
                    if (this.log(e, "activating placement #" + i), n.activePlacementId = i, n.activeAdUnitId = o.adUnitId, this._activateCreative(e, o.creativeId), bouncex.recirc.populateCreative(e), "display" == o.mediaType) n.onImpression = function(i) {
                        a._populateDisplayAd(e, {
                            trigger: n.trigger,
                            content: t.adHtml,
                            width: o.width,
                            height: o.height,
                            deployment: o.deployment,
                            onReady: i
                        })
                    }, this._activateCampaign(e);
                    else if ("video" == o.mediaType) {
                        var r = {
                                vast: t.vastData,
                                width: o.width,
                                height: o.height
                            },
                            s = n.obj1.find('video[id*="bx-video-player"]');
                        s && 0 < s.length ? (n.gbi.isVideo = !0, bouncex.video.init(e, r.vast, t.provider, o)) : this._prepareVideo(e, r, function() {
                            a._activateCampaign(e)
                        })
                    }
                },
                _adjustPosition: function(e) {
                    if ("masthead" === this._getDeploymentType(e)) {
                        var t = bouncex.campaigns[e];
                        bouncex.window.scrollTop(t.obj1.offset().top)
                    }
                },
                _allRequestsAreComplete: function(e) {
                    for (var t = bouncex.campaigns[e].gbi.requests, n = !0, i = 0; i < t.length; i++) t[i].endTime || (n = !1);
                    return n
                },
                _attachClickReporting: function(e, t) {
                    bouncex.on(t, "mouseenter.gbi_click_events_" + e, function() {
                        bouncex.on(bouncex.window, "blur.gbi_click_events_" + e, function() {
                            bouncex.report(e, "click", {
                                value: "ad"
                            })
                        })
                    }), bouncex.events[e].gbi_click = function() {
                        bouncex.off(bouncex.window, "blur.gbi_click_events_" + e)
                    }, bouncex.on(t, "mouseleave.gbi_click_events_" + e, bouncex.events[e].gbi_click)
                },
                _bidFilters: {
                    isPerformanceBid: function(e) {
                        var t = [];
                        return e.forEach(function(e) {
                            "perf" === e.provider && t.push(e)
                        }), t.length ? t : e
                    },
                    hasDealId: function(e) {
                        var t = [];
                        return e.forEach(function(e) {
                            e.dealId && t.push(e)
                        }), t.length ? t : e
                    },
                    hasHighestPrice: function(e) {
                        var t = [],
                            n = 0;
                        return e.forEach(function(e) {
                            e.price > n ? (n = e.price, t = [e]) : e.price == n && t.push(e)
                        }), t.length ? t : e
                    },
                    arrivedFirst: function(e) {
                        var t = [],
                            n = 0;
                        return e.forEach(function(e) {
                            0 === n || e.arrivalTime < n ? (n = e.arrivalTime, t = [e]) : e.arrivalTime == n && t.push(e)
                        }), t.length ? t : e
                    }
                },
                _compose: function() {
                    var e = Array.prototype.slice.call(arguments),
                        t = {};
                    return e.forEach(function(e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    }), t
                },
                _constants: {
                    auctionDelayInMilliseconds: 2e3,
                    bidEvents: {
                        fill: "bid_fill",
                        none: "bid_none",
                        empty: "bid_empty",
                        error: "bid_error",
                        cancelled: "bid_cancel",
                        selected: "bid_selected"
                    },
                    targetSelector: ".bx-group-placeholder:eq(0)"
                },
                _createAndSendRequests: function(e, t) {
                    this.log(e, "sending bid requests");
                    var n = [];
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            var o = t[i];
                            o.providers.forEach(function(t) {
                                var a = this._createBidRequest(t, {
                                    campaignId: e,
                                    placementId: i,
                                    adUnitId: o.adUnitId,
                                    type: o.mediaType,
                                    width: o.width,
                                    height: o.height,
                                    deployment: o.deployment
                                });
                                n.push(a), a.init()
                            }.bind(this))
                        }
                    return n
                },
                _createBid: function(e) {
                    return {
                        provider: e.provider,
                        campaignId: e.campaignId,
                        placementId: e.placementId,
                        adUnitId: e.adUnitId,
                        price: e.price,
                        adHtml: e.adHtml,
                        vastData: e.vastData,
                        dealId: e.dealId,
                        arrivalTime: e.arrivalTime,
                        targeting: e.targeting
                    }
                },
                _createBidRequest: function(e, t) {
                    return this._requestIndex[e](t)
                },
                _createDisplayFrame: function() {
                    return (0, o.createIframe)({
                        target: "_blank",
                        class: "bx-gbi-frame",
                        frameborder: "0",
                        horizontalscrolling: "no",
                        verticalscrolling: "no",
                        width: "100%",
                        height: "100%",
                        vspace: "0",
                        hspace: "0",
                        marginwidth: "0",
                        marginheight: "0",
                        scrolling: "no",
                        allowTransparency: "true"
                    })
                },
                _customizations: {
                    anchor: {
                        updateDynamicAnchor: function(e) {
                            var t = bouncex.campaigns[e];
                            if (t.dynamic_anchor && !t.gbi.contentLoaded) {
                                var n = (0, o.parseSiteElementSelector)(t.callout_t);
                                t.visibleAnchors = o.BrowserUtil.viewport.getVisibleElements(n, t.dom_placement_method), 0 < t.visibleAnchors.length && ((0, o.setCampaignCalloutTargetToIndex)(e, t.visibleAnchors[0].index), (0, o.placeCampaign)(e))
                            }
                        },
                        passesViewabilityTest: function(e) {
                            var t = bouncex.campaigns[e],
                                n = this._getMinimumHeight(t) || 250;
                            return o.BrowserUtil.viewport.distanceToBottom(t.calloutTarget[0], t.dom_placement_method, t.callout_voffset) > n
                        },
                        _getMinimumHeight: function(e) {
                            var t = this._getBidDimensions(e);
                            return ("prepend" === e.dom_placement_method || "append" === e.dom_placement_method ? e.calloutTarget.innerWidth() : e.calloutTarget.parent().innerWidth()) * (t.height / t.width) / 2
                        },
                        _getBidDimensions: function(e) {
                            var t = e.gbi.placements[e.winningBid.placementId];
                            return {
                                height: +t.height,
                                width: +t.width
                            }
                        }
                    }
                },
                _deactivateCampaign: function(e) {
                    this.log(e, "deactivating campaign");
                    var t = bouncex.campaigns[e];
                    t.obj1.remove(), t.gbi.ready = !1
                },
                _endAllRequests: function(e) {
                    bouncex.campaigns[e].gbi.requests.forEach(function(e) {
                        e.end()
                    })
                },
                _exceedsFrequencyCap: function() {
                    var e = bouncex.website.adsConfig;
                    if (!e) return !1;
                    if (!e.freqCapEnabled) return !1;
                    if (!e.freqCapImpressions) return !1;
                    switch (e.freqCapInterval) {
                        case "pageview":
                            return this._pageImpressions >= e.freqCapImpressions;
                        case "visit":
                            return bouncex.cookie.pci >= e.freqCapImpressions
                    }
                    return !1
                },
                _failCampaign: function(e) {
                    this.log(e, "campaign failed");
                    var t = bouncex.campaigns[e],
                        n = this._getDeploymentType(e);
                    this._failedDeployments.push(n), t.failed = !0, t.gbi.ready = !1
                },
                _failedDeployments: [],
                _getAdUnitIds: function(e) {
                    var t = bouncex.campaigns[e],
                        n = t.gbi && t.gbi.placements;
                    return Object.keys(n).map(function(e) {
                        return n[e].adUnitId
                    })
                },
                _getDeploymentType: function(e) {
                    var t = bouncex.campaigns[e],
                        n = t.gbi && t.gbi.placements;
                    if (n)
                        for (var i in n)
                            if (n.hasOwnProperty(i)) return n[i].deployment;
                    return ""
                },
                _getProviderConfig: function(e, t) {
                    var n = bouncex.website.sspConfig;
                    return n && n[e] && n[e][t]
                },
                _getReportablePrice: function(e) {
                    return (+e).toFixed(5)
                },
                _getResizeData: function(e, t) {
                    t.width = +t.width, t.height = +t.height;
                    var n = bouncex.campaigns[e],
                        i = n.obj1,
                        o = 1,
                        a = 2 * ((parseInt(i.find(".bx-wrap").css("padding-left"), 10) || 0) + (parseInt(i.find(".bx-align").css("padding-left"), 10) || 0));
                    if ("agilityzone" === n.type && n.calloutTarget.length) o = (n.calloutTarget.width() - a) / t.width;
                    else if ("overlay" === n.type) {
                        var r = (bouncex.wndsize().width - a) / t.width,
                            s = (bouncex.wndsize().height - a) / t.height;
                        o = r > s ? s : r
                    }
                    return {
                        scaleRatio: o,
                        scaledWidth: t.width * o,
                        scaledHeight: t.height * o
                    }
                },
                _incrementImpressionCounters: function() {
                    "number" == typeof this._pageImpressions ? this._pageImpressions++ : this._pageImpressions = 1, "number" == typeof bouncex.cookie.pci ? bouncex.cookie.pci++ : bouncex.cookie.pci = 1, setBounceCookie()
                },
                _initAuction: function(e) {
                    this.log(e, "initializing auction");
                    var t = bouncex.campaigns[e].gbi.bids,
                        n = [this._bidFilters.isPerformanceBid, this._bidFilters.hasDealId, this._bidFilters.hasHighestPrice, this._bidFilters.arrivedFirst];
                    if (0 == t.length) return this.log(e, "no bids were returned"), this._failCampaign(e);
                    if (1 == t.length) return this._selectWinningBid(e, t[0]);
                    for (var i = 0; i < n.length; i++)
                        if (1 == (t = (0, n[i])(t)).length) return this._selectWinningBid(e, t[0]);
                    return 0 < t.length ? this._selectWinningBid(e, t[0]) : (this.error(e, "there was an error while selecting a bid"), void this._failCampaign(e))
                },
                _initRequests: function(e, t) {
                    var n = bouncex.campaigns[e],
                        i = n.gbi.placements;
                    n.gbi.hasBegunAuction = !0, n.gbi.bids = [], this._isForceTest(e) && !t ? this._prefetchBids(e, "aqbx", i) : bouncex.vars.perf_ads_prefetch && !t ? this._prefetchBids(e, "perf", i) : (n.gbi.requests = this._createAndSendRequests(e, i), this._setAuctionTimeout(e))
                },
                _integrations: {
                    tag: {
                        intermediaryId: "869cff86d1c453c1",
                        generateId: function() {
                            return this.intermediaryId + ":" + bouncex.website.id
                        }
                    },
                    moat: {
                        display: {
                            scriptSrc: document.location.protocol + "//z.moatads.com/bounceexchangedisplay18031701869/moatad.js",
                            getScriptTag: function(e) {
                                if ((0, o.shouldEnforcePolicies)({
                                        gdpr: !0
                                    })) return bouncex.log("GDPR: MOAT script blocked"), "";
                                var t = (0, o.qs)({
                                    moatClientLevel1: e.website,
                                    moatClientLevel2: e.deviceType,
                                    moatClientLevel3: e.trigger,
                                    moatClientLevel4: e.adSize,
                                    zMoatPlacement: e.placement
                                });
                                return '<script src="' + this.scriptSrc + "?" + t + '" type="text/javascript"><\/script>'
                            }
                        },
                        video: {
                            scriptSrc: document.location.protocol + "//z.moatads.com/jwplayerplugin0938452/moatplugin.js",
                            partnerCode: "bouncexjsvideojwplayer997111196347",
                            loadPlugin: function(e) {
                                if ((0, o.shouldEnforcePolicies)({
                                        gdpr: !0
                                    })) return bouncex.log("GDPR: MOAT script blocked"), "";
                                var t = this;
                                (0, o.getScript)(t.scriptSrc, function() {
                                    t.addImpressionListener(e)
                                })
                            },
                            addImpressionListener: function(e) {
                                var t = bouncex.campaigns[e],
                                    n = this;
                                t.gbi.player.on("adImpression", function(e) {
                                    moatjw.add({
                                        partnerCode: n.partnerCode,
                                        player: this,
                                        adImpressionEvent: e,
                                        ids: {
                                            level1: window.location.host + " (" + bouncex.website.id + ")",
                                            level2: bouncex.state.mobile ? "mobile" : "desktop",
                                            level3: t.trigger,
                                            level4: "video",
                                            slicer1: "overlay" === t.type ? t.type : t.subtype
                                        },
                                        duration: 30
                                    })
                                })
                            }
                        }
                    },
                    jwplayer: {
                        key: "o8z/iG2QyTbuWcdH2vCzMM0waC0nOAeJ9/gVcpFiPZ+tv1+5",
                        createPlayerConfig: function(e) {
                            var t = /^[\s]*<VAST/i.test(e.vastData) ? "vastxml" : "tag",
                                n = {};
                            return n.file = "//" + bouncex.website.biu + "/assets/global/plugins/jwplayer/blank.mp4", n.mute = !0, n.width = e.width, n.height = e.height, n.advertising = {}, n.advertising.client = "vast", n.advertising.vpaidcontrols = !0, n.advertising[t] = e.vastData, n
                        },
                        createPlayerInstance: function(e, t, n, i) {
                            bouncex.gbi2.log(e, "creating video player instance");
                            var a = "//" + bouncex.website.biu + "/assets/global/plugins/jwplayer/8.3.0/jwplayer.js",
                                r = (0, o.createIframe)({
                                    class: "bx-gbi-frame",
                                    style: "border: 0; width: " + t.width() + "px; height: " + t.height() + "px;"
                                }),
                                s = this;
                            t.append(r);
                            var c = r.contentWindow;
                            bouncex.browser.firefox && (c.oldGetComputedStyle = c.getComputedStyle, c.getComputedStyle = function(e, t) {
                                var n = c.oldGetComputedStyle(e, t);
                                return null === n ? {} : n
                            }), c.document.write('<html><body style="margin: 0px; overflow: hidden;"><div id="bx-video"></div></body></html>');
                            var u = c.document.createElement("script");
                            u.setAttribute("src", a), u.onload = function() {
                                bouncex.gbi2.log(e, "jwplayer script loaded"), c.jwplayer ? (bouncex.gbi2.log(e, "jwplayer executed"), c.jwplayer.key = s.key, c.player = c.jwplayer("bx-video"), c.player.setup(n), c.player.on("adClick", function() {
                                    bouncex.gbi2.report(e, "click", {
                                        value: "ad"
                                    })
                                }), c.player.on("adError", function(t) {
                                    bouncex.gbi2.error(e, t.message ? "video error: " + t.message : "video error")
                                }), i(c.player)) : (bouncex.gbi2.error(e, "jwplayer failed to execute"), bouncex.gbi2._failCampaign(e))
                            }, u.onerror = function() {
                                bouncex.gbi2.error(e, "jwplayer script failed to load"), bouncex.gbi2._failCampaign(e)
                            }, c.document.body.appendChild(u)
                        }
                    }
                },
                _isForceTest: function(e) {
                    return -1 < bouncex.calling_url.indexOf("aqbxtest" + e)
                },
                _populateDisplayAd: function(e, t) {
                    this.log(e, "populating display ad");
                    var n = bouncex.campaigns[e].obj1.find(bouncex.gbi2._constants.targetSelector),
                        i = bouncex.gbi2._integrations.moat.display,
                        a = this._createDisplayFrame(),
                        r = t.content,
                        s = t.onReady,
                        c = "-webkit-transform-origin: 0 0; transform-origin: 0 0; max-width: 100%; max-height: 100%;";
                    if (0 === n.length) return bouncex.gbi2.error(e, "creative is missing an ad stack placeholder group"), bouncex.gbi2._failCampaign(e), !1;
                    var u = bouncex.gbi2._getResizeData(e, {
                        width: t.width,
                        height: t.height
                    });
                    1 > u.scaleRatio && (c += "-webkit-transform: scale(" + u.scaleRatio + "); transform: scale(" + u.scaleRatio + ");", n.css({
                        width: u.scaledWidth + "px",
                        height: u.scaledHeight + "px"
                    })), n.append(a), r += i.getScriptTag({
                        website: window.location.host + " (" + bouncex.website.id + ")",
                        deviceType: bouncex.state.mobile ? "mobile" : "desktop",
                        trigger: t.trigger,
                        adSize: t.width + "x" + t.height,
                        placement: t.deployment
                    });
                    try {
                        var b = a.contentWindow.document;
                        b.open(), b.write('<html><head><base target="_blank"/></head><body marginwidth="0" marginheight="0" style="' + c + '">' + r + "</body>"), b.close()
                    } catch (t) {
                        return bouncex.gbi2.error(e, "error populating ad: " + t), bouncex.gbi2._failCampaign(e), !1
                    }
                    this._attachClickReporting(e, n), (0, o.loadImages)(jQuery(b).find("img").filter(":visible"), function() {
                        bouncex.gbi2.log(e, "images loaded successfully"), s && s()
                    })
                },
                _prefetchBids: function(e, t, n) {
                    this.log(e, "prefetching " + t);
                    var i = bouncex.campaigns[e],
                        a = {};
                    for (var r in n) n.hasOwnProperty(r) && (a[r] = this._compose(n[r]), a[r].providers = [t]);
                    i.gbi.requests = this._createAndSendRequests(e, a), (0, o.setTimeout2)(function() {
                        this._endAllRequests(e), 0 < i.gbi.bids.length ? this._initAuction(e) : this._initRequests(e, !0)
                    }.bind(this), 1e3)
                },
                _prepareVideo: function(e, t, n) {
                    this.log(e, "preparing video ad");
                    var i = bouncex.campaigns[e],
                        o = i.obj1.find(bouncex.gbi2._constants.targetSelector),
                        a = bouncex.gbi2._integrations.jwplayer,
                        r = o.width(),
                        s = o.height(),
                        c = bouncex.gbi2._getResizeData(e, {
                            width: r,
                            height: s
                        });
                    1 > c.scaleRatio && (r = c.scaledWidth, s = c.scaledHeight, o.css({
                        width: r + "px",
                        height: s + "px"
                    }));
                    var u = a.createPlayerConfig({
                        vastData: t.vast,
                        width: r,
                        height: s
                    });
                    a.createPlayerInstance(e, o, u, function(t) {
                        i.gbi.player = t, i.gbi.isVideo = !0, i.gbi.config = i.gbi.config || {}, i.gbi.config.playOnImpression = !0, bouncex.gbi2._integrations.moat.video.loadPlugin(e), i.gbi.contentLoaded = !0, n()
                    })
                },
                _requestIndex: {
                    sharedBehaviors: {
                        gbi: function() {
                            return {
                                fetch: function(e) {
                                    this.startTime = (0, o.getTimeMs)(), this.request = bouncex.utils.doAjaxRequest(e)
                                },
                                done: function() {
                                    this.endTime = (0, o.getTimeMs)(), this.duration = this.endTime - this.startTime
                                },
                                reportResult: function(e, t) {
                                    bouncex.gbi2.report(this.campaignId, e, t)
                                },
                                end: function() {
                                    this.request && this.request.abort()
                                }
                            }
                        },
                        rtb: function() {
                            return {
                                createDisplayImpression: function(e, t, n) {
                                    var i = {
                                        id: 1,
                                        banner: {
                                            w: e = +e,
                                            h: t = +t
                                        }
                                    };
                                    return bouncex.gbi2._compose(i, n)
                                },
                                createVideoImpression: function(e, t, n) {
                                    var i = {
                                        id: 1,
                                        video: {
                                            mimes: ["video/mp4", "application/javascript"],
                                            minduration: 3,
                                            maxduration: 150,
                                            protocols: [2, 3, 5, 6],
                                            linearity: 1,
                                            ext: {
                                                playertype: 1
                                            }
                                        }
                                    };
                                    return e && (i.video.w = +e), t && (i.video.h = +t), bouncex.gbi2._compose(i, n)
                                },
                                getExtraIds: function() {
                                    var e = window.bouncex.gbi.deviceOptedStatus;
                                    return e ? [{
                                        source: "bxid",
                                        uids: [{
                                            id: e,
                                            atype: 1
                                        }]
                                    }] : []
                                }
                            }
                        }
                    },
                    aqbx: function(e) {
                        var t = bouncex.gbi2._requestIndex.sharedBehaviors.gbi;
                        return bouncex.gbi2._compose(e, t(), {
                            init: function() {
                                this.startTime = (0, o.getTimeMs)(), this.done(), this.handleResponse()
                            },
                            handleResponse: function() {
                                var e = bouncex.campaigns[this.campaignId],
                                    t = bouncex.gbi2._createBid({
                                        provider: "aqbx",
                                        campaignId: this.campaignId,
                                        placementId: this.placementId,
                                        adUnitId: this.adUnitId,
                                        price: 0,
                                        adHtml: this.getDisplayHtml(this.width, this.height),
                                        vastData: this.getVastXml(),
                                        arrivalTime: this.endTime
                                    });
                                e.gbi.bids.push(t), bouncex.gbi2.log(this.campaignId, "bid simulated for force testing")
                            },
                            getDisplayHtml: function(e, t) {
                                return '<a><img src="' + ("https://" + bouncex.website.biu) + "/assets/global/images/pub/demo" + e + "x" + t + '.gif" width="' + e + '" height="' + t + '"/></a>'
                            },
                            getVastXml: function() {
                                return '<VAST version="2.0"><Ad><InLine><AdSystem>Acudeo Compatible</AdSystem><AdTitle>VAST 2.0 AQBX</AdTitle><Description>VAST 2.0 AQBX</Description><Creatives><Creative><Linear><Duration>00:00:21</Duration><MediaFiles><MediaFile delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300" scalable="true" maintainAspectRatio="true">https://' + bouncex.website.biu + "/assets/global/videos/pub/demo/ads_demo_video.mp4</MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>"
                            }
                        })
                    },
                    perf: function(e) {
                        var t = bouncex.gbi2._requestIndex.sharedBehaviors.gbi;
                        return bouncex.gbi2._compose(e, t(), {
                            provider: "perf",
                            fetch: function(e) {
                                this.startTime = (0, o.getTimeMs)(), this.request = jQuery.ajax(e)
                            },
                            init: function() {
                                var e = this,
                                    t = {
                                        url: bouncex.gbi2._getProviderConfig("perf", "endpoint"),
                                        data: e.getRequestData(),
                                        complete: function(t, n) {
                                            e.done(), e.handleResponse(t, n)
                                        }
                                    };
                                this.fetch(t)
                            },
                            getRequestData: function() {
                                return {
                                    bxid: bouncex.dg.softID || "none",
                                    w: this.width,
                                    h: this.height
                                }
                            },
                            handleResponse: function(e) {
                                var t = bouncex.campaigns[this.campaignId],
                                    n = bouncex.gbi2._constants.bidEvents,
                                    i = n.error,
                                    o = {
                                        partner: "perf",
                                        deployment: this.deployment || "unknown",
                                        requested_ad_units: this.width + "x" + this.height,
                                        request_timestamp: this.startTime,
                                        deal_id: "NA",
                                        price: "NA",
                                        auction_number: t.gbi.auctionCount,
                                        ad_unit_id: this.adUnitId
                                    },
                                    a = e.responseJSON;
                                if (200 !== e.status) 0 === e.status && (i = n.cancelled);
                                else if (a && a.adHtml) {
                                    i = n.fill, bouncex.gbi2.log(this.campaignId, "placement #" + this.placementId + " received a bid from performance ads");
                                    var r = bouncex.gbi2._createBid({
                                        provider: "perf",
                                        campaignId: this.campaignId,
                                        placementId: this.placementId,
                                        adUnitId: this.adUnitId,
                                        adHtml: a.adHtml,
                                        arrivalTime: this.endTime,
                                        targeting: a.targeting
                                    });
                                    t.gbi.bids.push(r)
                                } else i = n.none;
                                this.reportResult(i, o)
                            }
                        })
                    },
                    bsw: function(e) {
                        var t = bouncex.gbi2._requestIndex.sharedBehaviors.gbi;
                        return bouncex.gbi2._compose(e, t(), {
                            provider: "bsw",
                            init: function() {
                                var e = this,
                                    t = {
                                        url: bouncex.gbi2._getProviderConfig("bsw", "endpoint"),
                                        data: bouncex.stringify(e.getRequestData()),
                                        dataType: "json",
                                        method: "POST",
                                        timeout: 5e3,
                                        complete: function(t, n) {
                                            e.done(), e.handleResponse(t, n)
                                        }
                                    };
                                this.fetch(t)
                            },
                            getRequestData: function() {
                                var e = {
                                    code: this.deployment
                                };
                                return e["display" === this.type ? "banner" : "video"] = {
                                    sizes: [{
                                        w: +this.width,
                                        h: +this.height
                                    }]
                                }, {
                                    publisher_id: +bouncex.gbi2._getProviderConfig("bsw", "site_id") || 0,
                                    placements: [e]
                                }
                            },
                            handleResponse: function(e) {
                                var t = bouncex.campaigns[this.campaignId],
                                    n = bouncex.gbi2._constants.bidEvents,
                                    i = n.error,
                                    o = {
                                        partner: this.provider,
                                        partner_site_id: bouncex.gbi2._getProviderConfig("bsw", "site_id") || "NA",
                                        deployment: this.deployment || "unknown",
                                        requested_ad_units: this.width + "x" + this.height,
                                        request_timestamp: this.startTime,
                                        deal_id: "NA",
                                        price: "NA",
                                        auction_number: t.gbi.auctionCount,
                                        ad_unit_id: this.adUnitId
                                    },
                                    a = e.responseJSON && e.responseJSON.placement_bid;
                                if (200 !== e.status) 0 === e.status && (i = n.cancelled);
                                else if (a && a.length) {
                                    i = n.fill, bouncex.gbi2.log(this.campaignId, "placement #" + this.placementId + " received a bid from bidswitch");
                                    var r = a[0];
                                    o.deal_id = r.dealid, o.price = bouncex.gbi2._getReportablePrice(r.price);
                                    var s = bouncex.gbi2._createBid({
                                        provider: this.provider,
                                        campaignId: this.campaignId,
                                        placementId: this.placementId,
                                        adUnitId: this.adUnitId,
                                        arrivalTime: this.endTime,
                                        adHtml: r.adm,
                                        vastData: r.adm,
                                        dealId: r.dealid,
                                        price: r.price
                                    });
                                    t.gbi.bids.push(s)
                                } else i = n.none;
                                this.reportResult(i, o)
                            }
                        })
                    },
                    index: function(e) {
                        var t = bouncex.gbi2._requestIndex.sharedBehaviors.gbi,
                            n = bouncex.gbi2._requestIndex.sharedBehaviors.rtb;
                        return bouncex.gbi2._compose(e, t(), n(), {
                            provider: "index",
                            init: function() {
                                var e = this.getRequestData(),
                                    t = this,
                                    n = bouncex.gbi2._getProviderConfig("index", bouncex.campaigns[this.campaignId].qbxtest ? "qa_site_id" : "s"),
                                    i = {
                                        url: bouncex.ssl ? "https://as-sec.casalemedia.com/cygnus" : "http://as.casalemedia.com/cygnus",
                                        data: {
                                            v: "7",
                                            cb: (0, o.getTimeMs)(),
                                            s: n,
                                            r: bouncex.stringify(e)
                                        },
                                        dataType: "text",
                                        contentType: "application/x-www-form-urlencoded",
                                        global: !1,
                                        crossDomain: !0,
                                        xhrFields: {
                                            withCredentials: !0
                                        },
                                        timeout: 5e3,
                                        complete: function(e, n) {
                                            t.done(), t.handleResponse(e, n)
                                        }
                                    };
                                "video" === this.type && (i.data.v = "8.8", i.data.fn = "jsonp"), this.fetch(i)
                            },
                            getRequestData: function() {
                                var e, t = bouncex.campaigns[this.campaignId],
                                    n = document.location.protocol + "//" + document.location.hostname + document.location.pathname,
                                    i = bouncex.state.mobile ? "mobile" : "desktop",
                                    a = bouncex.updateQS(n, "deployment", t.type, "device", i);
                                return "display" == this.type ? e = this.createDisplayImpression(this.width, this.height) : "video" == this.type && (e = this.createVideoImpression()), {
                                    id: (0, o.getTime2)(),
                                    imp: [e],
                                    site: {
                                        page: a,
                                        ref: bouncex.referrer,
                                        mobile: bouncex.state.mobile ? 1 : 0
                                    },
                                    source: {
                                        pchain: bouncex.gbi2._integrations.tag.generateId()
                                    }
                                }
                            },
                            handleResponse: function(e, t) {
                                var n = bouncex.campaigns[this.campaignId],
                                    i = bouncex.gbi2._constants.bidEvents,
                                    o = i.error,
                                    a = {
                                        partner: "index",
                                        partner_site_id: bouncex.gbi2._getProviderConfig("index", "s"),
                                        deployment: this.deployment || "unknown",
                                        requested_ad_units: "display" === this.type ? this.width + "x" + this.height : "video",
                                        request_timestamp: this.startTime,
                                        deal_id: "NA",
                                        price: "NA",
                                        auction_number: n.gbi.auctionCount,
                                        ad_unit_id: this.adUnitId
                                    };
                                if ("success" === t && 200 === e.status) {
                                    var r = this.getBidFromResponse(e.responseText);
                                    if (r) {
                                        o = i.fill, bouncex.gbi2.log(this.campaignId, "placement #" + this.placementId + " received a bid from index exchange");
                                        var s = r.ext && r.ext.dealid,
                                            c = r.ext && r.ext.pricelevel,
                                            u = 0;
                                        s && (a.deal_id = s), c && (u = this.convertPrice(r.ext.pricelevel, s), a.price = bouncex.gbi2._getReportablePrice(u));
                                        var b = bouncex.gbi2._createBid({
                                            provider: "index",
                                            campaignId: this.campaignId,
                                            placementId: this.placementId,
                                            adUnitId: this.adUnitId,
                                            price: +u,
                                            adHtml: r.adm,
                                            vastData: r.ext && r.ext.vasturl,
                                            dealId: s,
                                            arrivalTime: this.endTime
                                        });
                                        n.gbi.bids.push(b)
                                    } else o = i.none
                                } else "success" !== t || e.responseText ? 0 === e.status && (o = i.cancelled) : o = i.empty;
                                this.reportResult(o, a)
                            },
                            getBidFromResponse: function(e) {
                                try {
                                    var t = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")),
                                        n = bouncex.parseJSON(t);
                                    return n.seatbid && n.seatbid[0] && n.seatbid[0].bid && n.seatbid[0].bid[0]
                                } catch (e) {
                                    return !1
                                }
                            },
                            convertPrice: function(e, t) {
                                var n = e.length - 2,
                                    i = e.split("");
                                i.splice(n, 0, ".");
                                var o = i.join("").replace(/[^0-9.]/g, "");
                                return (t ? +o : +o / .85).toFixed(5)
                            }
                        })
                    },
                    pbm: function(e) {
                        var t = bouncex.gbi2._requestIndex.sharedBehaviors.gbi,
                            n = bouncex.gbi2._requestIndex.sharedBehaviors.rtb;
                        return bouncex.gbi2._compose(e, t(), n(), {
                            provider: "pbm",
                            init: function() {
                                if (!this.userSynced()) return this.syncUser();
                                var e = this.getRequestData(),
                                    t = this,
                                    n = {
                                        url: document.location.protocol + "//" + bouncex.gbi2._getProviderConfig("pbm", "endpoint"),
                                        data: bouncex.stringify(e),
                                        method: "POST",
                                        type: "POST",
                                        dataType: "json",
                                        timeout: 5e3,
                                        complete: function(e, n) {
                                            t.done(), t.handleResponse(e, n)
                                        }
                                    };
                                this.fetch(n)
                            },
                            getRequestData: function() {
                                bouncex.campaigns[this.campaignId];
                                var e, t = bouncex.cookie.vid + "_" + bouncex.cookie.sid,
                                    n = bouncex.gbi2._getProviderConfig("pbm", bouncex.state.mobile ? "mobile_id" : "desktop_id"),
                                    i = this.getTagId(n, this.placementId),
                                    a = bouncex.gbi2._integrations;
                                return "display" === this.type ? e = this.createDisplayImpression(this.width, this.height, {
                                    id: (0, o.getTimeMs)().toString(),
                                    secure: bouncex.ssl ? 1 : 0,
                                    tagid: i
                                }) : "video" === this.type && (e = this.createVideoImpression(this.width, this.height)), {
                                    id: t,
                                    site: {
                                        id: n,
                                        name: window.location.hostname,
                                        ref: decodeURIComponent(bouncex.referrer),
                                        page: decodeURIComponent(bouncex.calling_url),
                                        publisher: {
                                            id: bouncex.gbi2._getProviderConfig("pbm", "publisher_id")
                                        }
                                    },
                                    device: {
                                        ua: navigator.userAgent,
                                        ip: bouncex.state.vip
                                    },
                                    imp: [e],
                                    source: {
                                        pchain: a.tag.generateId()
                                    },
                                    user: {
                                        eids: this.getExtraIds()
                                    },
                                    at: 1,
                                    tmax: 200
                                }
                            },
                            handleResponse: function(e, t) {
                                var n = bouncex.campaigns[this.campaignId],
                                    i = bouncex.gbi2._constants.bidEvents,
                                    o = i.error,
                                    a = {
                                        partner: "pbm",
                                        partner_site_id: bouncex.gbi2._getProviderConfig("pbm", bouncex.state.mobile ? "mobile_id" : "desktop_id"),
                                        deployment: this.deployment || "unknown",
                                        requested_ad_units: "display" === this.type ? this.width + "x" + this.height : "video",
                                        request_timestamp: this.startTime,
                                        price: "NA",
                                        deal_id: "NA",
                                        auction_number: n.gbi.auctionCount,
                                        ad_unit_id: this.adUnitId
                                    };
                                if ("success" === t && 200 === e.status) {
                                    var r = this.getBidFromResponse(e.responseText);
                                    if (r) {
                                        o = i.fill, bouncex.gbi2.log(this.campaignId, "placement #" + this.placementId + " received a bid from pubmatic"), r.dealid && (a.deal_id = r.dealid), r.price && (a.price = bouncex.gbi2._getReportablePrice(r.price));
                                        var s = bouncex.gbi2._createBid({
                                            provider: "pbm",
                                            campaignId: this.campaignId,
                                            placementId: this.placementId,
                                            adUnitId: this.adUnitId,
                                            price: r.price,
                                            adHtml: r.adm,
                                            vastData: r.adm,
                                            dealId: r.dealid,
                                            arrivalTime: this.endTime
                                        });
                                        n.gbi.bids.push(s)
                                    } else o = i.none
                                } else "nocontent" === t && 204 === e.status ? o = i.empty : 0 === e.status && (o = i.cancelled);
                                this.reportResult(o, a)
                            },
                            getBidFromResponse: function(e) {
                                try {
                                    var t = bouncex.parseJSON(e);
                                    return t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]
                                } catch (e) {
                                    return !1
                                }
                            },
                            userSynced: function() {
                                return !!sessionStorage.getItem("bxpbmsynced")
                            },
                            syncUser: function() {
                                var e = bouncex.gbi2._getProviderConfig("pbm", "user_sync_endpoint"),
                                    t = bouncex.gbi2._getProviderConfig("pbm", "publisher_id");
                                if (!e) return bouncex.gbi2.error(this.campaignId, "no endpoint found for pubmatic user sync");
                                if (!t) return bouncex.gbi2.error(this.campaignId, "no publisher id found for pubmatic user sync");
                                var n = (0, o.createIframe)({
                                        style: "display: none;",
                                        src: "//" + e + "?p=" + t
                                    }),
                                    i = this;
                                n.onload = function() {
                                    sessionStorage.setItem("bxpbmsynced", "1"), i.init()
                                }, document.body.appendChild(n)
                            },
                            getTagId: function(e, t) {
                                var n = bouncex.campaigns[this.campaignId].gbi.placements[t];
                                return n && n.deployment ? {
                                    overlay: "Overlay",
                                    masthead: "Masthead",
                                    endcap: "End_Cap",
                                    encore: "Encore",
                                    middleofarticle: "Middle_of_Article",
                                    skyline: "Skyline",
                                    infeed: "Infeed"
                                }[n.deployment] + "_" + e : ""
                            }
                        })
                    }
                },
                _selectWinningBid: function(e, t) {
                    this.log(e, "selecting bid from " + t.provider);
                    var n = bouncex.campaigns[e],
                        i = n.gbi.placements[t.placementId],
                        o = bouncex.gbi2._constants.bidEvents,
                        a = {
                            partner: t.provider,
                            deployment: i.deployment,
                            deal_id: t.dealId || "NA",
                            price: bouncex.gbi2._getReportablePrice(t.price),
                            auction_number: n.gbi.auctionCount,
                            ad_unit_id: t.adUnitId
                        };
                    n.winningBid = t, this.report(e, o.selected, a), this._activatePlacement(e, t)
                },
                _setAuctionTimeout: function(e) {
                    var t = this._constants.auctionDelayInMilliseconds,
                        n = this;
                    (0, o.setTimeout2)(function() {
                        0 < bouncex.campaigns[e].gbi.bids.length || n._allRequestsAreComplete(e) ? (n.log(e, "one or more bids received, or all requests have resolved; ending wait period"), n._endAllRequests(e), n._initAuction(e)) : (n.log(e, "no bids after first wait period; some requests still pending; trying again"), (0, o.setTimeout2)(function() {
                            n.log(e, "ending wait period"), n._endAllRequests(e), n._initAuction(e)
                        }, t))
                    }, t)
                },
                canShowPubCampaign: function(e, t) {
                    var n = bouncex.campaigns[t];
                    if (!this._isForceTest(t) && this._exceedsFrequencyCap()) return !1;
                    if (n.dynamic_anchor) {
                        if (this._customizations.anchor.updateDynamicAnchor(t), 0 === n.visibleAnchors.length) return this.log(t, "dynamic anchor - no visible anchors", !0), !1;
                        if (!this._customizations.anchor.passesViewabilityTest(t)) return this.log(t, "dynamic anchor - fails visibility test", !0), !1
                    }
                    return bouncex.gbi2.tryPop(t, e), n.gbi.ready ? (this.log(t, "passes canShow criteria"), !0) : (this.log(t, "gbi.ready is false", !0), !1)
                },
                error: function(e, t) {
                    this.log(e, t, !0)
                },
                getDeploymentType: function(e) {
                    return this._getDeploymentType(e)
                },
                getFailedDeployments: function() {
                    return this._failedDeployments
                },
                initCampaign: function(e) {
                    this.log(e, "initializing campaign");
                    var t = bouncex.campaigns[e];
                    13 < t.gbi.auctionCount && this._failCampaign(e), t.activated || (this.report(e, "eligible"), t.listeners = new o.EventListeners, (0, o.event_js_eval)(e, "preactivation"), this.log(e, "activating behavioral triggers"), this._activateBehavioralTriggers(e), t.activated = !0), t.gbi.auctionCount ? t.gbi.auctionCount++ : t.gbi.auctionCount = 1, this._initRequests(e)
                },
                initDfp: function() {
                    a.default.init()
                },
                getDfpLineItemIds: function() {
                    return a.default.lineItems.getAll()
                },
                handleImpression: function(e) {
                    this._adjustPosition(e), this._incrementImpressionCounters()
                },
                log: function(e, t, n) {
                    var i = {
                        group: "gbi",
                        message: t,
                        campaignId: e
                    };
                    n ? o.Logger.error(i) : o.Logger.info(i)
                },
                report: function(e, t, n) {
                    if (0 === t.indexOf("bid_") && bouncex.vars.block_bid_events) return !1;
                    this.log(e, 'reporting event "' + t + '"');
                    var i = bouncex.campaigns[e];
                    switch (n = n || {}, t) {
                        case "pop":
                            var a = i.winningBid;
                            n.ad_unit_id = i.activeAdUnitId || 0, a ? (n.targeting = "perf" === a.provider ? a.targeting : "NA", n.partner = a.provider, n.deal_id = a.dealId, n.price = this._getReportablePrice(a.price), n.deployment = this._getDeploymentType(e), n.auction_number = i.gbi.auctionCount) : this.error(e, 'unable to find bid data to report on "pop"');
                            break;
                        case "trypop":
                            n.ad_units = this._getAdUnitIds(e).join(",");
                            break;
                        case "click":
                            n.value = n.value || "nonad";
                            break;
                        case "eligible":
                            n.ad_units = this._getAdUnitIds(e).join(",")
                    }
                    n.source = "ads", (0, o.buildReport)(e, t, n)
                },
                tryPop: function(e, t) {
                    var n = bouncex.campaigns[e];
                    if (!n.trypopTriggered) {
                        if ("overlay" !== this._getDeploymentType(e) && !n.dynamic_anchor) {
                            var i = (0, o.parseSiteElementSelector)(n.callout_t);
                            if (!(!!i && !!jQuery(i).length)) return
                        }
                        this.report(e, "trypop", {
                            activation: t
                        }), n.trypopTriggered = !0
                    }
                }
            });
        t.default = r
    }, function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function a() {
            return "https://dfp.bouncex.net/pub/".concat(bouncex.website.id, "?li=").concat(m.formatAll("|"))
        }

        function r() {
            d.default.apply({
                type: "canary",
                liveTraffic: 10,
                internal: !0
            }, function() {
                b.default.get({
                    url: a()
                })
            })
        }

        function s() {
            g || (m.collectFromPage(), 0 < m.count() && (r(), l.default.reload(), u("dfp ids found: ".concat(m.formatAll(", "))), g = !0))
        }

        function c() {
            u("dfp max attempts")
        }

        function u(e) {
            p.default.info({
                group: "dfp",
                message: e,
                color: "#ffa500"
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var b = i(n(9)),
            l = i(n(4)),
            d = i(n(2)),
            p = i(n(1)),
            x = n(0),
            g = !1,
            m = new(function() {
                function e() {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this._lineItems = []
                }
                return t = e, (n = [{
                    key: "clear",
                    value: function() {
                        this._lineItems = []
                    }
                }, {
                    key: "count",
                    value: function() {
                        return this._lineItems.length
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        isNaN(+e) || this._lineItems.push(e)
                    }
                }, {
                    key: "getAll",
                    value: function() {
                        return this._lineItems
                    }
                }, {
                    key: "formatAll",
                    value: function(e) {
                        return e = e || ",", this._lineItems.join(e)
                    }
                }, {
                    key: "collectFromPage",
                    value: function() {
                        var e = this;
                        window.googletag && "function" == typeof window.googletag.pubads && window.googletag.pubads().getSlots().forEach(function(t) {
                            var n = t.getResponseInformation();
                            !n || "number" != typeof n.lineItemId || -1 < e.getAll().indexOf(n.lineItemId) || e.add(n.lineItemId)
                        })
                    }
                }]) && o(t.prototype, n), i && o(t, i), e;
                var t, n, i
            }());
        t.default = {
            lineItems: m,
            getRequestUrl: a,
            report: r,
            initDetection: s,
            init: function() {
                x.BxInterval.addTask(s, 30, "dfp_detection", c)
            },
            onFailure: c
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            get: function(e) {
                return e.type = "GET", jQuery.ajax(e)
            }
        }
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n(0),
            a = n(1),
            r = (i = a) && i.__esModule ? i : {
                default: i
            };
        t.default = {
            _constants: {
                sc: "29143",
                product: "sms",
                optInMessage: "Send for automated, recurring <BrandName> marketing texts to this # per terms. Consent not a condition of purchase.",
                params: {
                    source: "sms_source",
                    click: "sms_click"
                }
            },
            init: function() {
                return this._supported() ? (this.initialized = !0, void this._clickthrough()) : (this.initialized = !1, !1)
            },
            _supported: function() {
                return !!bouncex.website.smsEnabled && (bouncex.website.brandName && bouncex.website.smsTC ? (this.log(null, "sms supported", !1), !0) : (this.log(null, "missing settings: brand name and website t&c link are required", !0), !1))
            },
            _clickthrough: function() {
                var e = bouncex.utils.url.getParam(this._constants.params.click);
                if (e) {
                    var t = bouncex.cookie.sms || {},
                        n = Math.floor((new Date).getTime() / 1e3);
                    t[e] = n, bouncex.cookie.sms = t, setBounceCookie(), this.report("click", {
                        campaignid: e,
                        "sms:slug": bouncex.utils.getParam(this._constants.params.source)
                    })
                }
            },
            _getOptInSlug: function(e) {
                return "YES-" + bouncex.website.id + "-" + e + "-" + bouncex.cookie.did
            },
            _getOptInMessage: function() {
                var e = this._constants.optInMessage.replace("<BrandName>", bouncex.website.brandName);
                return encodeURIComponent(e + "\n")
            },
            _getOptInURI: function(e) {
                return "sms://" + this._constants.sc + "?&body=" + this._getOptInMessage() + this._getOptInSlug(e)
            },
            _triggerOptIn: function(e) {
                bouncex.close_ad(e), window.location.href = this._getOptInURI(e)
            },
            optInMobile: function(e) {
                return this.initialized ? (this.report("prompt", {
                    campaignid: e
                }), void(0, o.setTimeout2)(this._triggerOptIn.call(this, e), 300)) : (this.log(e, "sms not initialized. check that sms is enabled and required website settings are valid.", !0), !1)
            },
            report: function(e, t) {
                var n = {
                    agent: "user",
                    source: this._constants.product
                };
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                (0, o.event_stream_report)(e, n)
            },
            log: function(e, t, n) {
                var i = {
                    group: this._constants.product,
                    campaignId: e,
                    message: t
                };
                n ? r.default.error(i) : r.default.info(i)
            }
        }
    }, function(e, t, n) {
        var i = n(0);
        bouncex.website && (i.perf.times("tag"), 0 < bouncex.website.sd && !bouncex.website.fbe ? (0, i.setTimeout2)(i.InitSequence.preInit1.entry, bouncex.website.sd) : (0, i.tryCatch)(i.InitSequence.preInit1.entry)())
    }, function(e, t, n) {
        n(4), n(5), n(0), n(11), n(7), n(8), n(6), n(10), n(9), n(1), n(3), e.exports = n(2)
    }])
}();