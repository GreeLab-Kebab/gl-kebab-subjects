define("wiseindex/tabs/news/activity/postmessage", function() {
    function a(a, h, v) {
        var g = {},
            w = c();
        return v ? ($.extend(g, h, {
            type: y.TWO_WAY,
            sentinel: S,
            sessionId: w
        }), b[w] = $.Deferred(), g.deferTimer = setTimeout(function() {
            b[w].reject("timeout")
        }, 1e3)) : g = h, a.postMessage(g, "*"), v && b[w].promise()
    }

    function c() {
        return (1e3 * +new Date + Math.ceil(1e3 * Math.random())).toString(36)
    }

    function h(a, c) {
        w[a] = c
    }

    function v(a) {
        delete w[a]
    }

    function g(a, c) {
        return "function" == typeof w[a] ? w[a](c) : void 0
    }
    var b = {},
        w = {},
        y = {
            TWO_WAY: "two-way"
        },
        S = "PM_REQUEST",
        _ = "PM_RESPONSE";
    return window.addEventListener("message", function(e) {
        var c = e.data || {};
        c.type === y.TWO_WAY ? c.sentinel === S ? a(e.source, $.extend({}, c, {
            sentinel: _,
            data: g(c.event, c) || {}
        }), !1) : c.sentinel === _ && (c.deferTimer && window.clearTimeout(c.deferTimer), b[c.sessionId] && b[c.sessionId].resolve(c), delete b[c.sessionId], delete c.deferTimer) : g(c.event, c)
    }, !1), {
        addRequestHandle: h,
        deleteRequestHandle: v,
        sendMessage: a
    }
}), define("wiseindex/tabs/news/activity/aio", function() {
    ! function(n, o) {
        function e(n, o) {
            return d.cleanObj.toString.call(n).slice(8, -1) === o
        }

        function t(n) {
            var o = f[n];
            if (o) return o.exports;
            throw "module " + n + " is undefined"
        }

        function r(n, o) {
            for (var e, r, i = n.split(":"), s = i.pop().split("/"), a = d; e = s.shift();) "bdbox" !== e && (r = e, s.length && (a = a[e] = a[e] || {}));
            var c = f[n] = {
                    exports: {}
                },
                u = d.isFunction(o) ? o.apply(c, [t, c.exports, c, d]) : o;
            u && (c.exports = u), a[r] = c.exports
        }

        function i() {
            p.forEach(function(n) {
                n()
            }), p.length = 0, h = !0
        }

        function s(n) {
            var o;
            return null == n ? o = String(n) : (o = Object.prototype.toString.call(n).toLowerCase(), o = o.substring(8, o.length - 1)), o
        }

        function a(o) {
            var e = o.success || b,
                t = {
                    imageUrl: "",
                    mediaType: "all",
                    title: "",
                    content: "",
                    linkUrl: location.href
                },
                r = o.error || b;
            return d.isFunction(o.success) && (e = "_xSHARE_SUCCESS_" + d.getId(), n[e] = o.success, t.success = e), d.isFunction(o.error) && (r = "_xSHARE_FAIL_" + d.getId(), n[r] = o.error, t.error = r), d.each(o, function(n, e) {
                "success" !== e && "error" !== e && (e in g ? e = g[e] : "content" !== e || o.title || (t.title = n), t[e] = n)
            }), d.isArray(t.mediaType) && (t.mediaType = "all"), n.BoxShareData || (n.BoxShareData = {
                successcallback: e,
                errorcallback: r,
                options: t
            }), t
        }
        var c = +new Date,
            u = (c + "").slice(-3),
            l = navigator.userAgent,
            d = {
                isBox: / baiduboxapp\//i.test(l),
                isIOS: /(iPhone|iPod|iPad)/.test(l),
                isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(l),
                getId: function() {
                    return u++
                },
                emptyArr: [],
                emptyFn: function() {},
                cleanObj: {},
                byId: function(n) {
                    return d.isString(n) ? o.getElementById(n) : n
                },
                toArray: function(n) {
                    return d.emptyArr.slice.call(n)
                },
                $: function(n, e) {
                    return e = e && 1 === e.nodeType ? e : o, d.toArray(e.querySelectorAll(n))
                }
            };
        "Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function(n) {
            d["is" + n] = function(o) {
                return e(o, n)
            }
        }), d.isBoolean = function(n) {
            return n === !0 || n === !1
        }, d.isObject = function(n) {
            return "object" == typeof n
        }, d.isUndefined = function(n) {
            return void 0 === n
        }, d.isWindow = function(n) {
            return null != n && n == n.window
        }, d.isPlainObject = function(n) {
            return d.isObject(n) && !d.isWindow(n) && Object.getPrototypeOf(n) == Object.prototype
        };
        var f = {};
        d.define = r;
        var m = function(n, o, e) {
                for (var t, r, i = n.split("."), s = e || m; t = i.shift();) "Box" !== t && (r = t, i.length && (s = s[t] = s[t] || {}));
                return s[r] = o || {}, s[r]
            },
            p = [],
            h = !1;
        if (m.init = function(n) {
                return "function" != typeof n ? this : (h ? n() : p.push(n), this)
            }, "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? i() : o.addEventListener("DOMContentLoaded", i, !1), r("common:bdbox/utils/getVersion", function(o, e, t) {
                var r = function() {
                    var o = 0;
                    if (n.baiduboxapp_version) o = n.baiduboxapp_version;
                    else {
                        var e, t = navigator.userAgent;
                        (e = /([\d+.]+)_(?:diordna|enohpi)_/.exec(t)) ? (e = e[1].split("."), o = e.reverse().join(".")) : (e = /baiduboxapp\/([\d+.]+)/.exec(t)) && (o = e[1])
                    }
                    return r = function() {
                        return o
                    }, o
                };
                t.exports = r
            }), r("common:bdbox/utils/version_compare", function(n, o, e) {
                var t = function(n, o) {
                    o += "", n += "";
                    for (var e = n.split("."), t = o.split("."), r = 0, i = Math.max(e.length, t.length); i > r; r++) {
                        if (e[r] && !t[r] && parseInt(e[r]) > 0 || parseInt(e[r]) > parseInt(t[r])) return 1;
                        if (t[r] && !e[r] && parseInt(t[r]) > 0 || parseInt(e[r]) < parseInt(t[r])) return -1
                    }
                    return 0
                };
                e.exports = t
            }), r("common:bdbox/ios/invokeApp", function(e, t, r, i) {
                r.exports = function(e, t, r) {
                    if (e && i.isBox) {
                        var s = [];
                        if (i.isFunction(t)) r = t;
                        else
                            for (var a in t) s.push(a + "=" + t[a]);
                        if (i.isFunction(r)) {
                            var c = "_bdbox_js_" + i.getId();
                            n[c] = function() {
                                r.apply(n, [].slice.call(arguments, 0))
                            }, s.push("func=" + c)
                        } else r && s.push("func=" + r);
                        s = "baiduboxapp://" + e + "?" + s.join("&");
                        var u = "_bdbox_ios_jsbridge",
                            l = o.getElementById(u);
                        l ? l.src = s : (l = o.createElement("iframe"), l.style.display = "none", l.id = u, l.src = s, (o.body || o.getElementsByTagName("body")[0]).appendChild(l))
                    }
                }
            }), r("common:bdbox/android/invokeApp", function(o, e, t, r) {
                function i(o, e, t) {
                    if (t && !r.isArray(t) && (t = Array.prototype.slice.call(arguments, 0).slice(2)), n[o] && n[o][e]) {
                        var i = n[o][e].apply(n[o], t);
                        return {
                            error: 0,
                            result: i,
                            __from: "js"
                        }
                    }
                    var u = c();
                    if (a(u, 4.8) >= 0) {
                        var l = s(o, e, t);
                        return l = l ? JSON.parse(l) : {}, l.__from = "app", l
                    }
                    if ("4.7.1" === u || "4.7" == u) {
                        var d = s(o, e, t);
                        return {
                            error: 0,
                            result: d,
                            __from: "app4.7"
                        }
                    }
                    return {
                        error: 200
                    }
                }

                function s(o, e, t) {
                    if (!r.isBox) return {
                        error: 201
                    };
                    if (!r.isAndroid) return {
                        error: 202
                    };
                    var i = {
                        obj: o,
                        func: e,
                        args: t ? t : []
                    };
                    try {
                        return n.prompt("BdboxApp:" + JSON.stringify(i))
                    } catch (s) {
                        return {
                            error: 201
                        }
                    }
                }
                var a = o("common:bdbox/utils/version_compare"),
                    c = o("common:bdbox/utils/getVersion");
                t.exports = i
            }), r("common:bdbox/utils/detect", function(o, e, t, r) {
                function i(o) {
                    var e = {
                        name: "unknown",
                        version: 0
                    };
                    this === n || this.os || (this.os = e), o = o || navigator.userAgent;
                    var t = {
                        Weibo: /weibo/i,
                        Wechat: /micromessenger\//i,
                        QQ: /QQ\//
                    };
                    for (var r in t) t.hasOwnProperty(r) && (e["is" + r] = t[r].test(o));
                    e.isUC = o.match(/UC/) || n.ucweb || n.ucbrowser;
                    var i = o.match(/(Android);?\s+([\d.]+)?/);
                    if (i) return e.android = !0, e.version = i[2], e.name = "android", e;
                    var s = o.match(/(iPad).*OS\s([\d_]+)/),
                        a = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                        c = !s && o.match(/(iPhone\sOS)\s([\d_]+)/);
                    return c && !a ? (e.ios = e.iphone = !0, e.version = c[2].replace(/_/g, "."), e.name = "ios", e) : s ? (e.ios = e.ipad = !0, e.name = "ios", e.version = s[2].replace(/_/g, "."), e) : a ? (e.name = "ios", e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null, e) : e
                }
                i.apply(r), t.exports = i
            }), r("common:bdbox/each", function(n, o, e) {
                function t(n) {
                    var o;
                    return null == n ? o = String(n) : (o = Object.prototype.toString.call(n).toLowerCase(), o = o.substring(8, o.length - 1)), o
                }
                e.exports = function(n, o, e) {
                    if ("object" == typeof n) {
                        var r, i, s = t(n);
                        if (e = e || n, "array" === s || "arguments" === s || "nodelist" === s) {
                            for (r = 0, i = n.length; i > r; r++)
                                if (o.call(e, n[r], r, n) === !1) return
                        } else
                            for (r in n)
                                if (n.hasOwnProperty(r) && o.call(e, n[r], r, n) === !1) return
                    }
                }
            }), r("common:bdbox/client/nativeShare", function(e, t, r, i) {
                function s(o) {
                    var e = {
                        wechatIcon: location.protocol + "//m.baidu.com/static/search/logo300.png",
                        type: "url",
                        mediaType: "all",
                        linkUrl: location.href,
                        title: c.title,
                        success: "console.log",
                        error: "console.log"
                    };
                    each(o || {}, function(n, o) {
                        e[o] = n
                    }), e.image && (e.imageUrl = e.image), e.iconUrl && !e.imageUrl && "url" === e.type && (e.imageUrl = e.iconUrl);
                    var t = {};
                    ["success", "error"].forEach(function(o) {
                        var r = o;
                        i.isFunction(e[o]) && (r = "_xSHARE_SUCCESS_" + i.getId(), n[r] = e[o]), t[o + "callback"] = r, delete e[o]
                    }), t.options = e, t.options.imageUrl && i.isAndroid && a(i.version, "6.5") < 0 && delete t.options.imageUrl, n.BoxShareData = t;
                    var r = e.wechatIcon;
                    if (/micromessenger\//i.test(navigator.userAgent) && r && r.length > 20) {
                        var s = c.createElement("div");
                        s.id = "wa-generalevent-wx-logo", s.style.display = "none", s.innerHTML = '<img src="' + r + '"/>';
                        var u = c.body.firstChild;
                        u ? c.body.insertBefore(s, u) : c.body.appendChild(s)
                    }
                }
                var a = e("common:bdbox/utils/version_compare"),
                    c = o;
                r.exports = s
            }), r("common:bdbox/utils/ready", function(n, e, t) {
                function r() {
                    s.forEach(function(n) {
                        n()
                    }), s.length = 0, a = !0
                }

                function i(n) {
                    "function" == typeof n && (a ? n() : s.push(n))
                }
                var s = [],
                    a = !1;
                "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? r() : o.addEventListener("DOMContentLoaded", r, !1), t.exports = i
            }), d.version = d.utils.getVersion(), d.version_compare = d.utils.version_compare, each = d.each, d.nativeShare = d.client.nativeShare, d.type = s, d.canI = function(n, o, e) {
                return d.version_compare(d.version, n) >= 0 ? d.isFunction(o) && o() : d.isFunction(e) && e(), d
            }, r("common:bdbox/client/o2o", function(n, o, e, t) {
                var r = n("common:bdbox/android/invokeApp"),
                    i = n("common:bdbox/ios/invokeApp"),
                    s = encodeURIComponent,
                    a = n("common:bdbox/each"),
                    c = t.isAndroid ? function(n, o) {
                        t.isObject(n) && (o = n, n = n.url, delete o.url);
                        var e = ["S.bdsb_light_start_url=" + s(n)];
                        if (t.isObject(o)) {
                            var i = {
                                color: "i.extra_actionbar_color_id",
                                appid: "S.bdsb_wallet_appid"
                            };
                            a(o, function(n, o) {
                                "color" === o && (n = 4278190080 | parseInt("0x" + n)), o = i[o] || o, e.push(o + "=" + n)
                            })
                        }
                        e = e.join(";"), r("Bdbox_android_utils", "command", [JSON.stringify({
                            intent: "intent:#Intent;" + e + ";end",
                            "class": "com.baidu.searchbox.wallet.WalletServiceActivity",
                            min_v: "16783629",
                            mode: "0"
                        })])
                    } : function(n, o) {
                        t.isObject(n) && (o = n, n = n.url, delete o.url);
                        var e = {
                            openurl: s(n),
                            minver: "5.3.0.0",
                            isla: 0,
                            opentype: 1,
                            append: 0,
                            rbtnstyle: 2
                        };
                        if (t.isObject(o)) {
                            var r = {
                                color: "barcolor"
                            };
                            a(o, function(n, o) {
                                o = r[o] || o, e[o] = n
                            })
                        }
                        e.appid && (e.isla = 1), i("easybrowse", e)
                    };
                e.exports = c
            }), d.o2o = d.client.o2o, "android" === d.os.name ? m("card", {
                query: function(n, o) {
                    if (m.version_compare(m.version, "5.0") < 0) return this;
                    var e, t;
                    m.isArray(n) ? e = [JSON.stringify(n)] : (t = m.toArray(arguments), o = t.pop(), m.isFunction(o) ? e = t : (e = m.toArray(arguments), o = null), e = [JSON.stringify(e)]);
                    var r = m.android.invokeApp("Bdbox_android_card", "mquery", e);
                    return r = 0 === r.error && r.result ? JSON.parse(r.result) : !1, m.isFunction(o) && o(r), r
                },
                add: function(o, e) {
                    if (m.version_compare(m.version, "5.0") < 0) return this;
                    var t, r;
                    m.isString(o) ? t = [o] : m.isArray(o) ? t = [JSON.stringify(o)] : (r = m.toArray(arguments), e = r.pop(), m.isFunction(e) ? t = r : (t = m.toArray(arguments), e = null), t = [JSON.stringify(t)]);
                    var i = null;
                    if (m.version_compare(m.version, "5.5") >= 0) {
                        var s = "";
                        m.isFunction(e) && (s = "__box_card_" + m.getId(), n[s] = function(n) {
                            var o = JSON.parse(n),
                                t = !1;
                            for (var r in o) {
                                t = o[r].st;
                                break
                            }
                            e(t)
                        }), i = m.android.invokeApp("Bdbox_android_card", "madd", t.concat([s, 0]))
                    } else i = m.android.invokeApp("Bdbox_android_card", "madd", t);
                    return i
                }
            }) : m("card", {
                query: function(n, o) {
                    if (m.version_compare(m.version, "5.0") < 0) return this;
                    var e, t;
                    m.isArray(n) ? e = [JSON.stringify(n)] : (t = m.toArray(arguments), o = t.pop(), m.isFunction(o) ? e = t : (e = m.toArray(arguments), o = null), e = [JSON.stringify(e)]);
                    var r = function(n) {
                        m.isFunction(o) && o(JSON.parse(n)), r = null
                    };
                    m.ios.invokeApp("cardMquery", {
                        params: encodeURIComponent(e)
                    }, r)
                },
                add: function(n, o) {
                    if (m.version_compare(m.version, "5.0") < 0) return this;
                    var e, t;
                    m.isString(n) ? e = [n] : m.isArray(n) ? e = [JSON.stringify(n)] : (t = m.toArray(arguments), o = t.pop(), m.isFunction(o) ? e = t : (e = m.toArray(arguments), o = null), e = [JSON.stringify(e)]);
                    var r = function(n) {
                        var e = JSON.parse(n),
                            t = !1;
                        for (var i in e) {
                            t = e[i].st;
                            break
                        }
                        m.isFunction(o) && o(t), r = null
                    };
                    return m.ios.invokeApp("cardMadd", {
                        params: encodeURIComponent(e),
                        gohome: "0"
                    }, r), !0
                }
            }), r("common:bdbox/utils/jsonToQuery", function(n, o, e, t) {
                e.exports = function(n) {
                    if (t.isString(n)) return n;
                    var o = [];
                    for (var e in n) o.push(e + "=" + n[e]);
                    return o.join("&")
                }
            }), r("common:bdbox/io/loadJS", function(e, t, r, i) {
                function s(e, t, r) {
                    var s, u, l, d = o.createElement("script");
                    i.isString(e) ? (s = e, i.isFunction(t) && (r = t, t = null)) : (s = e.url, t = e.data, r = e.success, u = e.error || i.emptyFn, l = e.timeout), i.isObject(t) && (t = c(t)), t && (s += (-1 === s.indexOf("?") ? "?" : "&") + t), s = s.replace(/[&?]{1,2}/, "?");
                    var f;
                    /=\?/.test(s) && (f = "_box_jsonp" + i.getId(), s = s.replace(/=\?/, "=" + f));
                    var m = a();
                    l = l || 2e4, d.type = "text/javascript", d.src = s;
                    var p, h = !0,
                        v = function() {
                            f && delete n[f], p && clearTimeout(p), d.onload = d.onreadystatechange = d.onerror = null, d = null
                        },
                        g = function() {
                            !d || d.readyState && !/loaded|complete/.test(d.readyState) || (v(), h && i.isFunction(r) && r.apply(null, i.toArray(arguments)), h = !1)
                        },
                        b = function(n) {
                            v(), h && u(n), h = !1
                        };
                    f && (n[f] = g), p = setTimeout(function() {
                        v(), h && u("timeout"), h = !1
                    }, l), d.onload = d.onreadystatechange = d.onerror = g, d.onerror = b, m.appendChild(d)
                }

                function a() {
                    return o.head || o.getElementsByTagName("head")[0] || o.documentElement
                }
                var c = e("common:bdbox/utils/jsonToQuery");
                i.emptyFn, r.exports = s
            }), r("common:bdbox/utils/queryToJson", function(n, o, e) {
                e.exports = function(n) {
                    try {
                        n = n ? decodeURIComponent(n) : ""
                    } catch (o) {
                        n = ""
                    }
                    var e = n.split("?"),
                        t = e[1] ? e[1] : e[0],
                        r = t.split("&"),
                        i = {};
                    return r.forEach(function(n) {
                        n = n.split("="), n[0].length > 0 && (i[n[0]] = n[1] || "")
                    }), i
                }
            }), r("common:bdbox/extend", function(n, o, e, t) {
                function r(n, o, e) {
                    for (var t in o) e && (i(o[t]) || s(o[t])) ? (i(o[t]) && !i(n[t]) && (n[t] = {}), s(o[t]) && !s(n[t]) && (n[t] = []), r(n[t], o[t], e)) : c(o[t]) || (n[t] = o[t])
                }
                var i = t.isPlainObject,
                    s = t.isArray,
                    a = t.isBoolean,
                    c = t.isUndefined;
                e.exports = function(n) {
                    var o, e = t.emptyArr.slice.call(arguments, 1);
                    return a(n) && (o = n, n = e.shift()), e.forEach(function(e) {
                        r(n, e, o)
                    }), n
                }
            }), r("common:bdbox/utils/ready", function(n, e, t) {
                function r() {
                    s.forEach(function(n) {
                        n()
                    }), s.length = 0, a = !0
                }

                function i(n) {
                    "function" == typeof n && (a ? n() : s.push(n))
                }
                var s = [],
                    a = !1;
                "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? r() : o.addEventListener("DOMContentLoaded", r, !1), t.exports = i
            }), r("common:bdbox/utils/detect", function(o, e, t, r) {
                function i(o) {
                    var e = {
                        name: "unknown",
                        version: 0
                    };
                    this === n || this.os || (this.os = e), o = o || navigator.userAgent;
                    var t = {
                        Weibo: /weibo/i,
                        Wechat: /micromessenger\//i,
                        QQ: /QQ\//
                    };
                    for (var r in t) t.hasOwnProperty(r) && (e["is" + r] = t[r].test(o));
                    e.isUC = o.match(/UC/) || n.ucweb || n.ucbrowser;
                    var i = o.match(/(Android);?\s+([\d.]+)?/);
                    if (i) return e.android = !0, e.version = i[2], e.name = "android", e;
                    var s = o.match(/(iPad).*OS\s([\d_]+)/),
                        a = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                        c = !s && o.match(/(iPhone\sOS)\s([\d_]+)/);
                    return c && !a ? (e.ios = e.iphone = !0, e.version = c[2].replace(/_/g, "."), e.name = "ios", e) : s ? (e.ios = e.ipad = !0, e.name = "ios", e.version = s[2].replace(/_/g, "."), e) : a ? (e.name = "ios", e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null, e) : e
                }
                i.apply(r), t.exports = i
            }), r("common:bdbox/schema", function(n, e, t, r) {
                function i(n, e) {
                    if (n) {
                        if (e = e || r.emptyFn, !r.isBox && r.isIOS && c(a.version, "9.0") >= 0) return void u(function() {
                            s(n, e)
                        });
                        var t = Date.now(),
                            i = o.createElement("IFRAME");
                        i.src = n, i.style.position = "absolute", i.style.left = "-2000px", i.style.top = "-1000px", i.style.width = "1px", i.style.height = "1px", i.style.webkitTransition = "all 0.9s", i.style.transition = "all 0.9s", o.body.appendChild(i);
                        var l = function() {
                            o.body.removeChild(i), e(Date.now() - t < 1500 ? !0 : !1)
                        };
                        i.addEventListener("webkitTransitionEnd", l, !1), i.addEventListener("transitionEnd", l, !1), setTimeout(function() {
                            i.style.left = "-1000px"
                        }, 20)
                    }
                }

                function s(n, o) {
                    location.href = n, l && clearTimeout(l), l = setTimeout(function() {
                        o(!0)
                    }, 1200)
                }
                var a = n("common:bdbox/utils/detect")(),
                    c = n("common:bdbox/utils/version_compare"),
                    u = n("common:bdbox/utils/ready"),
                    l = null;
                t.exports = i
            }), r("common:bdbox/monitor", function(o, e, t, r) {
                var i = encodeURIComponent,
                    s = function(n, o) {
                        n += n.indexOf("?") < 0 ? "?" : "&", this.url = n, this.options = o
                    };
                s.prototype.report = function(o) {
                    o = o || "";
                    var e = new Image(1, 1),
                        t = [];
                    if (r.isObject(o)) {
                        for (var s in o) t.push(s + "=" + i(String(o[s])));
                        o = t.join("&")
                    }
                    var a = "_box_mt" + r.getId();
                    n[a] = e, e.onload = e.onerror = e.onabort = function() {
                        e.onload = e.onerror = e.onabort = null, n[a] = e = null
                    };
                    var c = this.url + o;
                    return r.isFunction(this.options.customHandler) && (c = this.options.customHandler(c)), e.src = c + "&_rnd=" + Math.floor(2147483648 * Math.random()), this
                }, s.prototype.main = function(n, o) {
                    return n && r.isFunction(this[n]) && this[n].apply(this, r.toArray(o || [])), this
                }, t.exports = function(n, o) {
                    return new s(n, o)
                }
            }), r("common:bdbox/clone", function(n, o, e) {
                var t = Object.prototype.toString,
                    r = function(n, o, e) {
                        var t = 0;
                        for (var r in n)
                            if (n.hasOwnProperty(r))
                                if (e) o[r] = n[r];
                                else if (o(r, n[r], t++)) break
                    },
                    i = function(n) {
                        var o;
                        switch (t.call(n)) {
                            case "[object Object]":
                                o = {}, r(n, function(n, e) {
                                    o[n] = i(e)
                                });
                                break;
                            case "[object Array]":
                                o = [], n.forEach(function(n) {
                                    o.push(i(n))
                                });
                                break;
                            default:
                                o = n
                        }
                        return o
                    };
                e.exports = i
            }), r("common:bdbox/monitor/pblog", function(n, o, e, t) {
                var r = n("common:bdbox/monitor"),
                    i = n("common:bdbox/extend"),
                    s = n("common:bdbox/utils/queryToJson"),
                    a = n("common:bdbox/utils/getVersion"),
                    c = n("common:bdbox/clone"),
                    u = s(location.search),
                    l = navigator.userAgent,
                    d = "//m.baidu.com/tcbox",
                    f = {
                        service: "bdbox",
                        action: "pblog",
                        ctv: 2,
                        cen: "uid_ua_ut",
                        data: {
                            appid: "1",
                            dataid: "2",
                            actiontype: "1",
                            actionid: "2",
                            actiondata: {
                                ref: u.ref || "",
                                gmv: u.vmgdb || "",
                                source: u.from || u.ref || "",
                                boxVersion: a(),
                                boxPlatform: l.match(/(iPad|iPhone|iPod)/gim) ? "ios" : "android"
                            }
                        }
                    },
                    m = encodeURIComponent;
                u.uid && u.osname && ["osname", "ua", "ut", "from", "cfrom", "uid", "pkgname"].forEach(function(n) {
                    u[n] && (f[n] = u[n])
                });
                var p, h = r(d, {
                    customHandler: function(n) {
                        var o = [];
                        if (p)
                            for (var e in p)
                                if (p.hasOwnProperty(e)) {
                                    var r = p[e];
                                    t.isPlainObject(r) && (r = JSON.stringify(r)), o.push(e + "=" + m(r))
                                }
                        return o.length && (n += o.join("&")), n
                    }
                });
                h.init = function(n, o) {
                    t.isPlainObject(o) && (f = i(f, o)), f.data.cateid = n
                }, h.pv = function(n, o) {
                    p = c(f);
                    var e = p.data;
                    e.actionid = "1";
                    var t = {};
                    return t.url = n || location.href, o && (t.u = o), e.actiondata = i(e.actiondata, t), h.report()
                }, h.event = function(n, o, e) {
                    if (!n) throw "monitor.tc.event need a evtName";
                    if (t.isPlainObject(o) && !e) {
                        var r = {
                            evtName: n
                        };
                        for (var s in o) r[s] = o[s]
                    } else var r = {
                        evtName: n,
                        evtType: o || "",
                        evtTag: e || ""
                    };
                    p = c(f);
                    var a = p.data;
                    return a.actionid = "2", a.actiondata = i(a.actiondata, r), h.report()
                }, e.exports = function() {
                    h.main.apply(h, arguments)
                }
            }), r("common:bdbox/moplus", function(n, o, e, t) {
                var r = n("common:bdbox/utils/jsonToQuery"),
                    i = n("common:bdbox/io/loadJS"),
                    s = n("common:bdbox/utils/version_compare"),
                    a = n("common:bdbox/monitor/pblog"),
                    c = n("common:bdbox/schema"),
                    u = "com.baidu.searchbox",
                    l = "http://127.0.0.1:6259/",
                    d = "http://127.0.0.1:40310/",
                    f = "inapp_boxserver",
                    m = "https:" === location.protocol,
                    p = 500,
                    h = null,
                    v = "__moplus_host__",
                    g = {
                        isSendPv: !1,
                        isHit: !1,
                        parseUA: function() {
                            var n, o, e = navigator.userAgent,
                                t = {
                                    uc: /UCBrowser\/(\S*) \S*/g,
                                    bd: /baidubrowser\/(\S*) \(Baidu/g,
                                    qq: /MQQBrowser\/(\S*) Mobile/g,
                                    chr: /Chrome\/(\S*) Mobile/g,
                                    qh: /360 Aphone Browser \((\S*)\)/g,
                                    sg: /SogouMobileBrowser\/(\S*)/g,
                                    mi: /MiuiBrowser\/(\S*)/g
                                };
                            for (var r in t) {
                                var i = t[r].exec(e);
                                if (i) {
                                    n = r, o = i[1];
                                    break
                                }
                            }
                            return n = n ? n : "other", o = o ? o : "0", {
                                t: n,
                                v: o
                            }
                        },
                        parseHost: function() {
                            return b.curHost === d ? 1 : 0
                        },
                        sendEvt: function(n, o, e, t) {
                            this.isHit && this.send(n, o, e, t)
                        },
                        send: function(n, o, e, t) {
                            var r = this.parseUA(),
                                i = r.t,
                                s = r.v,
                                c = m ? 0 : 1,
                                u = this.parseHost();
                            a("event", [n, {
                                evtType: o || "",
                                brName: i,
                                brVer: s,
                                isHttp: c,
                                isNew: u,
                                source: e || "",
                                intent: t || ""
                            }])
                        },
                        init: function() {
                            this.isHit = Date.now() % 100 === 1, a("init", [2])
                        }
                    },
                    b = function(n, o, e) {
                        this.version = "2.0", this.isHttps = m, this.curHost = e || "", this.newHost = d, this.oldHost = this.isHttps ? d : l, this.MCMDF = o || f, this._infoFuncs = [], this._verFuncs = [], this.minVersion = n ? n : 0, this.pkgName = u, g.init()
                    },
                    w = function(n, o) {
                        try {
                            sessionStorage.setItem(n, o)
                        } catch (e) {}
                    },
                    x = function(n) {
                        var o;
                        try {
                            o = sessionStorage.getItem(n)
                        } catch (e) {}
                        return o
                    };
                b.prototype = {
                    constructor: b,
                    setMcmdf: function(n) {
                        return this.MCMDF = n, this
                    },
                    setHost: function(n) {
                        return this.curHost = n, w(v, n), this
                    },
                    getHost: function() {
                        if (this.isHttps) return this.curHost = this.newHost, this.newHost;
                        var n = x(v);
                        return n ? (this.curHost = n, this.curHost) : void 0
                    },
                    api: function(n, o, e, i) {
                        if (!n) throw "Moplus.api need an action";
                        t.isFunction(o) && (i = e, e = o, o = {});
                        var s = n + (~n.indexOf("?") ? "&" : "?") + r(o);
                        return ~s.indexOf("mcmdf") || (s += "&mcmdf=" + this.MCMDF), g.sendEvt("api", "send:" + n, this.MCMDF, s), this.request(s, function(o) {
                            g.sendEvt("api", (t.isPlainObject(o) && 0 == o.error ? "success:" : "fail:") + n, this.MCMDF, s), e(o)
                        }, i)
                    },
                    getInfo: function(n, o) {
                        if (h) return n(h);
                        if (this._infoFuncs.push(n), !(this._infoFuncs.length > 1)) {
                            var e = this,
                                r = function(n, o) {
                                    !o && t.isPlainObject(n) && (h = n);
                                    var r;
                                    for (o && (n = {
                                            error: 33
                                        }); r = e._infoFuncs.shift();) r(n)
                                },
                                s = "getsearchboxinfo?mcmdf=" + this.MCMDF;
                            if (this.getHost()) {
                                var a = {
                                    url: this.curHost + s + "&callback=?",
                                    success: r,
                                    error: function() {
                                        r(null, !0)
                                    },
                                    timeout: o
                                };
                                i(a)
                            } else this.request(s, function(n) {
                                return 33 === n.error ? r(null, !0) : void r(n)
                            }, o);
                            return this
                        }
                    },
                    getHVersion: function(n, o) {
                        this._verFuncs.push(n);
                        var e = this;
                        if (!(this._verFuncs.length > 1)) {
                            var t = function(n) {
                                var o;
                                for (n = e.parseInfo(n); o = e._verFuncs.shift();) o(n)
                            };
                            return this.getInfo(t, o), this
                        }
                    },
                    parseInfo: function(n, o) {
                        n = n || h, o = o || this.minVersion;
                        var e = n.package_infos;
                        if (!e || 0 === e.length) return !1;
                        var t = u,
                            r = {
                                offic: {
                                    name: u,
                                    version: 0
                                },
                                oem: {
                                    version: 0
                                }
                            };
                        return e.forEach(function(n) {
                            var e = n.version_name,
                                i = n.package_name;
                            s(e, o) >= 0 && (i === t ? 1 === s(e, r.offic.version) && (r.offic = {
                                version: e,
                                name: u
                            }) : 1 === s(e, r.oem.version) && (r.oem = {
                                version: e,
                                name: i
                            }))
                        }), 0 === r.oem.version && 0 === r.offic.version ? !1 : 0 !== r.offic.version ? r.offic : 0 !== r.oem.version ? r.oem : void 0
                    },
                    schema: function(n, o) {
                        if (!n.intent) throw "schema intent is empty";
                        n.mcmdf || (n.mcmdf = this.MCMDF);
                        var e = function() {
                                g.send("schema", "success", n.source, n.intent), t.isFunction(o) && o({
                                    error: 0,
                                    from: "schema"
                                })
                            },
                            r = function() {
                                g.send("schema", "fail", n.source, n.intent), t.isFunction(o) && o({
                                    error: 20,
                                    from: "schema"
                                })
                            },
                            i = n.schema || "";
                        if (n.intent && !n.schema) {
                            var s = n.intent; - 1 == s.indexOf(u) && (g.sendEvt("defaultPKGName", "fail", n.source || "", n.intent), n.minver = n.minver ? n.minver : "6.9.1")
                        }
                        i || (i = "baiduboxapp://utils?action=sendIntent&params=" + encodeURIComponent(JSON.stringify(n)) + "&minver=" + (n.minver ? n.minver : "6.9")), c(i, function(n) {
                            n ? r() : e()
                        })
                    },
                    sendIntent: function(n, o, e) {
                        var r = {};
                        if (n && t.isString(n)) {
                            var i, s = this,
                                a = !0;
                            return t.isPlainObject(e) ? (r = e, i = e.source || "", e.needlog ? g.isHit = e.needlog : r.needlog = g.isHit ? 1 : 0, e = e.timeout) : t.isBoolean(e) && (a = e), r.intent = n, g.send("sendintent", "send", i, n), this.api("sendintent", {
                                intent: encodeURIComponent(n)
                            }, function(e) {
                                !e || e && 33 === e.error || !t.isPlainObject(e) ? (g.send("sendintent", "fail", i, n), a ? s.schema(r, o) : (e = e || {}, e.from = "moplus", o(e))) : (g.send("sendintent", "success", i, n), o(e))
                            }, e)
                        }
                        return this
                    },
                    request: function(n, o, e) {
                        var r, s, a = this,
                            c = {
                                timeout: e
                            };
                        t.isFunction(o) && !~n.indexOf("callback=") && (n += "&callback=?");
                        var u = function(n) {
                                r = "success", t.isFunction(o) && o(n)
                            },
                            l = function() {
                                t.isFunction(o) && o({
                                    error: 33
                                })
                            };
                        if (a.getHost()) c.url = a.curHost + n, c.success = u, c.error = l, i(c);
                        else if (c.url = a.newHost + n, c.success = function(n) {
                                "success" !== r && (s && clearTimeout(s), a.setHost(a.newHost), u(n))
                            }, c.error = function() {
                                a.isHttps ? (r = "error", l()) : "error" === r && l(), r = "error"
                            }, i(c), !a.isHttps) {
                            var d = {
                                timeout: e,
                                url: a.oldHost + n,
                                error: c.error
                            };
                            d.success = function(n) {
                                "success" !== r && ("error" === r ? (a.setHost(a.oldHost), u(n)) : s = setTimeout(function() {
                                    a.setHost(a.oldHost), u(n)
                                }, p))
                            }, i(d)
                        }
                        return this
                    }
                }, e.exports = function(n, o) {
                    return new b(n, o)
                }, e.exports.Moplus = b
            }), d.version_compare(d.version, "5.3.5") >= 0) {
            var v, g = {
                    image: "imageUrl",
                    url: "linkUrl",
                    order: "mediaType"
                },
                b = "";
            n[b] = d.emptyFn, d.isAndroid ? (v = function(n) {
                if (n.id && d.byId(n.id)) {
                    var o = n.eventType || "touchstart";
                    d.byId(n.id).addEventListener(o, function() {
                        e(n)
                    }, !0)
                }
                var e = function(o) {
                    o = a(o || n);
                    var e = o.error,
                        t = o.success;
                    o.iconUrl && o.imageUrl && delete o.imageUrl, d.android.invokeApp("Bdbox_android_utils", "callShare", [JSON.stringify(o), t || "console.log", e || "console.log"])
                };
                return e
            }, m("share", v)) : (v = function(n) {
                if (n.id && d.byId(n.id)) {
                    var o = n.eventType || "touchstart";
                    d.byId(n.id).addEventListener(o, function() {
                        e(n)
                    }, !0)
                }
                var e = function(o) {
                    o = a(o || n);
                    var e = o.error,
                        t = o.success;
                    o.iconUrl && !o.imageUrl && (o.imageUrl = o.iconUrl), o = JSON.stringify(o), d.ios.invokeApp("callShare", {
                        options: encodeURIComponent(o),
                        errorcallback: e || "console.log",
                        successcallback: t || "console.log"
                    })
                };
                return e
            }, m("share", v))
        } else {
            var w = [],
                x = function() {
                    m._socShare && m._socShare.init ? w.forEach(function(n) {
                        m._socShare.init(n)
                    }) : setTimeout(x, 3e3)
                };
            d.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2", x);
            var y = {
                    source: "client_id",
                    id: "dom_id",
                    image: "pic_url",
                    success: "afterRender"
                },
                v = function(n) {
                    var o = {
                        content: "",
                        client_id: "ZVEpDSsmZ0qxa1gmgDAh1Fje",
                        theme: "native",
                        dom_id: "share",
                        animate: !0,
                        pic_url: "",
                        url: encodeURIComponent(location.href)
                    };
                    return d.isObject(n) && d.each(n, function(n, e) {
                            if (e in y && (e = y[e]), "order" === e && d.isArray(n)) {
                                var t = [];
                                n.forEach(function(n) {
                                    "email" === n && (n = "mail"), t.push(n)
                                })
                            }
                            o[e] = n
                        }), delete o.success, delete o.error, delete o.afterRender, "all" === o.order ? o.order = ["qqdenglu", "sinaweibo", "renren", "kaixin", "mail", "sms"] : d.isString(o.order) && (o.order = o.order.split(",")), m._socShare && m._socShare.init ? m._socShare.init(o) : w.push(o),
                        function() {
                            m._socShare.ui._shareBtnClickHandler()
                        }
                };
            m("share", v)
        }
        if (r("common:bdbox/distribute", function(n, o, e, t) {
                var r = n("common:bdbox/schema");
                n("common:bdbox/utils/detect");
                var i = n("common:bdbox/each"),
                    s = n("common:bdbox/moplus"),
                    a = t.emptyFn,
                    c = {
                        qqDownloadUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox",
                        androidDownloadUrl: "",
                        iosDownloadUrl: "",
                        iosFailCallback: a,
                        androidFailCallback: a,
                        iosSchema: "",
                        androidSchema: "",
                        androidIntent: "",
                        inBoxCallback: a
                    },
                    u = function(n) {
                        var o = this;
                        n && i(c, function(o, e) {
                            n[e] = n[e] || o
                        });
                        var e = this.url = n.url;
                        e && "" !== e ? (this.androidIntent = "intent://" + e.replace(/^http[s]?:\/\//, "") + "#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end", this.iosSchema = "baiduboxapp://easybrowse?openurl=" + encodeURIComponent(e) + "&opentype=0&isla=0&append=0&minver=5.3.0.0") : ["androidIntent", "iosSchema", "androidSchema"].forEach(function(e) {
                            o[e] = n[e]
                        }), this.options = n, this.fail = function() {
                            if (console.log(t.os.name + " fail"), t.isFunction(n[t.os.name + "FailCallback"])) {
                                var o = n[t.os.name + "FailCallback"]();
                                if (t.isBoolean(o) && !o) return
                            }
                            var e = n[t.os.name + "DownloadUrl"];
                            e && "" !== e && (location.href = n[t.os.name + "DownloadUrl"])
                        }, this.success = function() {
                            return console.log(t.os.name + " success"), t.isFunction(n[t.os.name + "SuccessCallback"]) ? n[t.os.name + "SuccessCallback"]() : void 0
                        }
                    };
                u.prototype.wechat = function() {
                    var n = this.options;
                    if (t.isFunction(n.wechatCallback)) {
                        var o = n.wechatCallback();
                        if (t.isBoolean(o) && !o) return
                    }
                    n.qqDownloadUrl && "" !== n.qqDownloadUrl && (location.href = n.qqDownloadUrl)
                }, u.prototype.run = function() {
                    var n = this,
                        o = (n.url, n.options);
                    return t.os.isWechat ? n.wechat() : t.isBox && t.isFunction(o.inBoxCallback) ? o.inBoxCallback() : void this.invoke()
                }, u.prototype.invoke = function() {
                    var n = this;
                    if (t.os.android) {
                        var o = s();
                        o.getHVersion(function(e) {
                            e ? o.sendIntent(n.androidIntent, function(o) {
                                0 == o.error ? n.success() : n.fail()
                            }, 1e3) : n.androidSchema ? r(n.androidSchema, function(o) {
                                o ? n.fail() : n.success()
                            }) : n.fail()
                        })
                    } else r(n.iosSchema, function(o) {
                        o ? n.fail() : n.success()
                    })
                }, e.exports = function(n) {
                    return new u(n)
                }
            }), each(d, function(n, o) {
                m[o] = n
            }), n.Box && n.Box.$)
            for (var S in m) n.Box[S] = n.Box[S] || m[S];
        else n.Box = m
    }(window, document)
}), define("wiseindex/tabs/news/activity/popup", function() {
    var a = function(a) {
        var c = this;
        c.options = $.extend({
            title: "",
            content: "",
            fullView: !1,
            duration: 400,
            customClassName: "",
            onOpen: function() {},
            onClose: function() {}
        }, a), c._init()
    };
    return a.prototype = {
        constructor: a,
        version: "0.0.1",
        _init: function() {
            var a = this;
            a._preparePopupWrapper(), a._stopScroll(), a.popup()
        },
        _preparePopupWrapper: function() {
            var a = this,
                c = $(".c-popup-wrapper");
            c.length ? (a.$popupFrame = c, a.$popupFrame.empty()) : (a.$popupFrame = $('<div class="c-popup-wrapper"></div>'), $(document.body).append(a.$popupFrame))
        },
        _stopScroll: function() {
            var a = this;
            a.$popupFrame.on("touchmove", function(e) {
                e.preventDefault()
            })
        },
        _bindEvent: function() {
            var a = this;
            a.$popupFrame.on("click", ".c-popup-mask,.c-popup-remove", function() {
                a.closePopup()
            })
        },
        _randerContent: function() {
            var a = this;
            if (a.$popupMask = $('<div class="c-popup-mask"></div>'), a.$popupModal = $('<div class="c-popup-modal"></div>'), a.$popupContent = $('<div class="c-popup-content"></div>'), a.$popupHead = $('<div class="c-popup-head"></div>'), a.options.title) {
                var c = $('<div class="c-popup-title"></div>');
                c.append(a.options.title), a.$popupHead.append(c)
            }
            var h = $('<div class="c-popup-remove c-icon">&#xe61a</div>');
            a.$popupHead.append(h), a.$popupContent.append(a.options.content), a.$popupModal.append(a.$popupHead).append(a.$popupContent).addClass(a.options.customClassName), a.$popupFrame.append(a.$popupModal).append(a.$popupMask)
        },
        popup: function() {
            var a = this,
                c = $(window).height();
            a._randerContent(), a._bindEvent(), a.$popupMask.show().animate({
                opacity: 1
            }, "fast", "ease"), a.$popupModal.show();
            var h = a.$popupModal.height();
            (a.options.fullView || h > c) && a.$popupModal.height("100%"), a.$popupModal.animate({
                "-webkit-transform": "translate3d(0, 0, 0)",
                transform: "translate3d(0, 0, 0)"
            }, a.options.duration, "ease", function() {
                $(this).css({
                    "-webkit-transform": "none",
                    transform: "none"
                })
            })
        },
        closePopup: function() {
            var a = this;
            a.$popupModal.animate({
                "-webkit-transform": "translate3d(0, 100%, 0)",
                transform: "translate3d(0, 100%, 0)"
            }, a.options.duration, "ease", function() {
                $(this).css({
                    "-webkit-transform": "none",
                    transform: "none"
                }).hide(), a.options.onClose(), a._destroy()
            }), a.$popupMask.animate({
                opacity: 0
            }, "fast", "ease", function() {
                $(this).hide()
            })
        },
        _destroy: function() {
            var a = this;
            a.$popupFrame.off("click", ".c-popup-mask,.c-popup-remove"), a.$popupFrame.empty()
        }
    }, a
}), define("wiseindex/tabs/news/activity/toast", function() {
    var a = $('<style data-for="pmd/toast/toast"></style>');
    a.text(".c-toast-wrapper{z-index:900;position:fixed;left:50%;top:50%;background:rgba(0,0,0,.8);border-radius:22px;color:#fff;padding:8px 18px;line-height:24px;font-size:18px;max-width:40%;text-align:center}"), $("head").append(a);
    var c = function(a) {
        var c = this;
        c.options = $.extend({
            msg: "",
            customClassName: "",
            duration: 2e3,
            autoClose: !0,
            onOpen: function() {},
            onClose: function() {}
        }, a), c._init()
    };
    return c.prototype = {
        constructor: c,
        version: "0.0.1",
        _init: function() {
            var a = this;
            a._prepareWrapper(), a.open()
        },
        _prepareWrapper: function() {
            var a = this,
                c = $(".c-toast-wrapper");
            c.remove(), a.$toastWrapper = $('<div class="c-toast-wrapper"></div>'), a.$toastWrapper.append(a.options.msg).addClass(a.options.customClassName), $(document.body).append(a.$toastWrapper)
        },
        open: function() {
            var a = this;
            a.$toastWrapper.css({
                "margin-top": -(a.$toastWrapper.height() / 2) + "px",
                "margin-left": -(a.$toastWrapper.width() / 2) + "px"
            }), a.$toastWrapper.css({
                "-webkit-transform": "scale3d(1.5, 1.5, 1)",
                transform: "scale3d(1.5, 1.5, 1)",
                opacity: 0
            }).animate({
                "-webkit-transform": "scale3d(1, 1, 1)",
                transform: "scale3d(1, 1, 1)",
                opacity: 1
            }, 100, "ease", function() {
                a.$toastWrapper.css({
                    "-webkit-transform": "none",
                    transform: "none"
                }), a.options.onOpen(), a.options.autoClose && (a.delay = setTimeout($.proxy(a.close, a), a.options.duration))
            })
        },
        close: function() {
            var a = this;
            a.$toastWrapper.animate({
                "-webkit-transform": "scale3d(0.7, 0.7, 1)",
                transform: "scale3d(0.7, 0.7, 1)",
                opacity: 0
            }, 100, "ease", function() {
                a.$toastWrapper.css({
                    "-webkit-transform": "none",
                    transform: "none"
                }), a.options.onClose(), a._destory()
            })
        },
        _destory: function() {
            var a = this;
            a.$toastWrapper.remove(), a.delay && clearTimeout(a.delay)
        }
    }, c
}), define("wiseindex/tabs/news/activity/star", ["wiseindex/tabs/news/activity/toast"], function(a) {
    var c = (B.Index, function(a, c) {
        var h = this;
        h.opt = $.extend({}, a), /^\/\/.+/.test(h.opt.url) && (h.opt.url = "http:" + h.opt.url), h.star = !1, h.login = c
    });
    return c.prototype = {
        version: "1.0.0",
        _dispatch: function() {
            var a = this;
            return a.login ? void(a.star ? a.fav_id ? a._delStar() : a._readStar() : a._addStar()) : void(location.href = "//wappass.baidu.com/passport/?login&u=" + encodeURIComponent(location.href))
        },
        _toast: function(c) {
            var h = a;
            new h({
                msg: '<div class="icon"></div><p>' + c + "</p>",
                customClassName: "star-toast"
            })
        },
        _requestUrl: function() {
            var a = "http://mysearch.pae.baidu.com/api/favorites";
            return "https:" === window.location.protocol && (a = "https://sp0.baidu.com/5LMDcjW6BwF3otqbppnN2DJv/mysearch.pae.baidu.com/api/favorites"), a
        },
        _starNews: function() {
            var a = this;
            a._toast("收藏成功"), $('[data-key="star"]').find("img").attr("src", "//m.baidu.com/static/ala/uiamd/Share/collect-succ.png"), $('[data-key="star"]').find(".c-gap-top").text("已收藏"), $('[data-key="star"]').attr("data-key", "stared"), a.star = !0
        },
        _unstarNews: function() {
            var a = this;
            a._toast("取消收藏"), $('[data-key="stared"]').find("img").attr("src", "//m.baidu.com/static/ala/uiamd/Share/collect.png"), $('[data-key="stared"]').find(".c-gap-top").text("收藏"), $('[data-key="stared"]').attr("data-key", "star"), a.star = !1
        },
        _checkStar: function() {
            var a = this,
                c = $.Deferred(),
                h = a._requestUrl(),
                v = {
                    action: "c",
                    params: JSON.stringify([a.opt.url])
                },
                g = function() {
                    return function(h) {
                        if (3 == h.status && "用户未登录" == h.msg ? (a.login = !1, c.reject()) : a.login = !0, h.data && 1 == h.data.length) {
                            var v = h.data[0],
                                g = a.opt.url;
                            0 == v[g].code && "" == v[g].msg ? (a.fav_id = v[g].fav_id, a.star = !0, c.resolve()) : c.reject()
                        }
                    }
                },
                b = function() {
                    c.reject()
                };
            return a._jsonp(h, v, g, b), c
        },
        _addStar: function() {
            var a = this,
                c = a._requestUrl(),
                h = {
                    action: "w",
                    origin: "news",
                    params: JSON.stringify([{
                        url: a.opt.url,
                        title: a.opt.title,
                        type: "artical",
                        stype: "链接",
                        img: a.opt.iconUrl,
                        act: "收藏",
                        source: a.opt.origin,
                        fav_time: Date.now()
                    }])
                },
                v = function() {
                    return function(c) {
                        if (a._starNews(), c && 1 == c.data.length) {
                            var h = c.data[0],
                                v = a.opt.url;
                            0 == h[v].code && "" == h[v].msg && (a._starNews(), a.fav_id = h[v].data)
                        }
                    }
                },
                g = function() {
                    a._toast("收藏失败")
                };
            a._jsonp(c, h, v, g)
        },
        _readStar: function() {
            var a = this,
                c = a._requestUrl(),
                h = {
                    action: "r",
                    origin: "news",
                    pn: 1,
                    ipp: 20,
                    origin: ""
                },
                v = function() {
                    return function(c) {
                        if (c && c.data)
                            for (var h = c.data, i = 0; i < h.length; i++)
                                if (h[i].url == a.opt.url) {
                                    a.fav_id = h[i].id, a._delStar();
                                    break
                                }
                    }
                },
                g = function() {};
            a._jsonp(c, h, v, g)
        },
        _delStar: function() {
            var a = this,
                c = a._requestUrl(),
                h = {
                    action: "d",
                    origin: "news",
                    params: JSON.stringify([a.fav_id])
                },
                v = function() {
                    return function(c) {
                        if (c && 1 == c.data.length) {
                            var h = c.data[0],
                                v = a.fav_id;
                            0 == h[v].code && "" == h[v].msg && a._unstarNews()
                        }
                    }
                },
                g = function() {
                    a._toast("删除失败")
                };
            a._jsonp(c, h, v, g)
        },
        _jsonp: function(a, c, h, v) {
            $.ajax({
                url: a,
                type: "GET",
                timeout: 5e3,
                dataType: "jsonp",
                jsonp: "cb",
                data: c
            }).done(function(a) {
                return h()(a)
            }).fail(function() {
                return v()
            })
        },
        constructor: c
    }, c
}), define("wiseindex/tabs/news/activity/share", ["wiseindex/tabs/news/activity/detect", "wiseindex/tabs/news/activity/popup"], function(a, c) {
    var h = {
            url: window.location.href,
            title: "百度搜索有惊喜",
            content: "百度搜索有惊喜",
            iconUrl: "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg",
            custom: []
        },
        a = a,
        v = a.os,
        g = a.browser,
        b = "zbios" == g.n ? 1 : 0,
        w = "uc" != g.n || "undefined" == typeof ucweb && "undefined" == typeof ucbrowser ? 0 : 1,
        y = "qq" == g.n && g.v && g.v > "5.4" ? 1 : 0,
        S = "wechat" == g.n ? 1 : 0,
        _ = $.Deferred();
    if (y) {
        var k = document.createElement("script");
        k.type = "text/javascript", k.onload = k.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || _.resolve()
        }, k.src = "//jsapi.qq.com/get?api=app.share", $("head").append(k)
    }
    var T, E, C = function(a, c) {
            c && (a.url = encodeURIComponent(a.url), a.linkUrl = encodeURIComponent(a.url)), require(["wiseindex/tabs/news/activity/aio"], function() {
                Box.os.android ? Box.android.invokeApp("Bdbox_android_utils", "callShare", [JSON.stringify(a), "onSuccess", "onFail"]) : Box.ios.invokeApp("callShare", {
                    options: encodeURIComponent(JSON.stringify(a)),
                    errorcallback: "onFail",
                    successcallback: "onSuccess"
                })
            })
        },
        P = function(a, c) {
            var h = {
                    sinaweibo: ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"],
                    wxfriend: ["kWeixin", "WechatFriends", 1, "微信好友"],
                    pyq: ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"],
                    qqfriend: ["kQQ", "QQ", "4", "QQ好友"],
                    qzone: ["kQZone", "QZone", "3", "QQ空间"]
                },
                g = c.url,
                b = c.title,
                w = "";
            c.content, a = "" == a ? "" : "ios" == v.n ? h[a][0] : h[a][1], "undefined" != typeof ucweb ? ucweb.startRequest("shell.page_share", [b, b, g, a, "", "@" + w, ""]) : "undefined" != typeof ucbrowser && ucbrowser.web_share(b, b, g, a, "", "@" + w, "")
        },
        O = function(a, c) {
            var h = {
                sinaweibo: ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"],
                wxfriend: ["kWeixin", "WechatFriends", 1, "微信好友"],
                pyq: ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"],
                qqfriend: ["kQQ", "QQ", "4", "QQ好友"],
                qzone: ["kQZone", "QZone", "3", "QQ空间"]
            };
            a = "" == a ? "" : h[a][2];
            var v = {
                url: c.url,
                title: c.title,
                description: c.content,
                img_url: "",
                img_title: "",
                to_app: a,
                cus_txt: "请输入此时此刻想要分享的内容"
            };
            v = "" == a ? "" : v, $.when(_).done(function() {
                "undefined" != typeof browser && "undefined" != typeof browser.app && browser.app.share(v)
            })
        },
        I = function() {
            $(".c-share-wechat-tips").length ? $(".c-share-wechat-tips").show() : ($("body").append($('<div class="c-share-wechat-tips"></div>')), $(".c-share-wechat-tips").on("click", function() {
                $(this).hide(), clearTimeout(T)
            })), T = setTimeout(function() {
                $(".c-share-wechat-tips").hide(), clearTimeout(T)
            }, 2e3)
        },
        H = function(a) {
            var c = $.Deferred(),
                h = "http://mysearch.pae.baidu.com/api/s";
            return "https:" === window.location.protocol && (h = "https://sp0.baidu.com/5LMDcjW6BwF3otqbppnN2DJv/mysearch.pae.baidu.com/api/s"), $.ajax({
                url: h,
                type: "GET",
                timeout: 1e3,
                dataType: "jsonp",
                jsonp: "cb",
                data: {
                    params: JSON.stringify([a])
                }
            }).done(function(h) {
                c.resolve(h && "0" == h.status && h[a] ? h[a] : a)
            }).fail(function() {
                c.resolve(a)
            }), c.promise()
        },
        A = function(a) {
            $.when(H(a)).then(function(a) {
                var h = ['<div class="c-share-copytip-content">', '<div class="c-share-copytip-text">长按复制下方链接，去粘贴给好友吧：</div>', '<div class="c-share-copytip-linkwr"><a class="c-share-copytip-link" href="' + a + '" target="_blank">' + a + "</a></div>", "</div>", '<div class="c-share-copytip-cancel-btn">取消</div>'].join(""),
                    v = c;
                E = new v({
                    content: h,
                    customClassName: "c-share-popup-modal"
                }), $(".c-share-copytip-cancel-btn").on("click", function() {
                    E.closePopup()
                }), $(".c-share-copytip-link").on("click", function() {
                    return !1
                })
            })
        },
        D = {
            key: "pyq",
            icon: "//m.baidu.com/se/static/pmd/pmd/share/images/pyq_2.png",
            title: "朋友圈",
            cb: function() {
                var a;
                return a = b ? function(a) {
                    a.mediaType = "weixin_timeline", C(a, !1)
                } : w ? function(a) {
                    P("pyq", a)
                } : y ? function(a) {
                    O("pyq", a)
                } : S ? function() {
                    I()
                } : function(a) {
                    A(a.url)
                }
            }()
        },
        U = {
            key: "wxfriend",
            icon: "//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend_2.png",
            title: "微信好友",
            cb: function() {
                var a;
                return a = b ? function(a) {
                    a.mediaType = "weixin_friend", C(a, !1)
                } : w ? function(a) {
                    P("wxfriend", a)
                } : y ? function(a) {
                    O("wxfriend", a)
                } : S ? function() {
                    I()
                } : function(a) {
                    A(a.url)
                }
            }()
        },
        W = {
            key: "qqfriend",
            icon: "//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend_2.png",
            title: "QQ好友",
            cb: function() {
                var a;
                return a = b ? function(a) {
                    a.mediaType = "qqfriend", C(a, !1)
                } : w ? function(a) {
                    P("qqfriend", a)
                } : y ? function(a) {
                    O("qqfriend", a)
                } : function(a) {
                    A(a.url)
                }
            }()
        },
        M = {
            key: "qzone",
            icon: "//m.baidu.com/se/static/pmd/pmd/share/images/qzone_2.png",
            title: "QQ空间",
            cb: function() {
                var a;
                return a = b ? function(a) {
                    a.mediaType = "qqdenglu", C(a, !1)
                } : w && "ios" == v.n ? function(a) {
                    P("qzone", a)
                } : y ? function(a) {
                    O("qzone", a)
                } : function(a) {
                    var c = "url=" + encodeURIComponent(a.url) + "&successurl=" + encodeURIComponent(window.location.href) + "&summary=" + a.content + "&title=" + a.title + "&pics=" + encodeURIComponent(a.iconUrl);
                    window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + c)
                }
            }()
        },
        X = {
            key: "sinaweibo",
            icon: "//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo_2.png",
            title: "新浪微博",
            cb: function() {
                var a;
                return a = b ? function(a) {
                    a.mediaType = "sinaweibo", C(a, !1)
                } : w ? function(a) {
                    P("sinaweibo", a)
                } : y ? function(a) {
                    O("sinaweibo", a)
                } : function(a) {
                    window.open("http://v.t.sina.com.cn/share/share.php?url=" + encodeURIComponent(a.url) + "&title=" + encodeURIComponent(a.title))
                }
            }()
        },
        F = ({
            key: "more",
            icon: "//m.baidu.com/se/static/pmd/pmd/share/images/more_2.png",
            title: "更多",
            cb: function() {
                var a;
                return b ? a = function(a) {
                    a.mediaType = "all", C(a, !1)
                } : w ? a = function(a) {
                    P("", a)
                } : y && (a = function(a) {
                    O("", a)
                }), a
            }()
        }, function(a, c) {
            this.key = a, this.opt = $.extend({}, h, c), this.opt.content || (this.opt.content = this.opt.title), /^\/\/.+/.test(this.opt.url) && (this.opt.url = "http:" + this.opt.url), this.opt.linkUrl = this.opt.url, this._init()
        });
    return F.prototype = {
        version: "1.0.0",
        _init: function() {
            for (var a = this, c = [U, D, W, M, X], i = 0; i < c.length; i++)
                if (c[i].key === a.key) {
                    c[i].cb(a.opt);
                    break
                }
            a._sendLog(a.key)
        },
        _sendLog: function(a) {
            var c = this,
                h = {
                    sa: "nfrom=share"
                },
                v = {
                    pyq: {
                        ct: 40,
                        cst: 2
                    },
                    wxfriend: {
                        ct: 40,
                        cst: 1
                    },
                    qqfriend: {
                        ct: 40,
                        cst: 5
                    },
                    qzone: {
                        ct: 40,
                        cst: 3
                    },
                    sinaweibo: {
                        ct: 40,
                        cst: 4
                    },
                    more: {
                        ct: 40,
                        cst: 9
                    },
                    close: {
                        ct: 40,
                        cst: 0
                    }
                },
                g = {
                    pyq: {
                        clk_info: "a1_b1"
                    },
                    wxfriend: {
                        clk_info: "a1_b2"
                    },
                    qqfriend: {
                        clk_info: "a1_b3"
                    },
                    qzone: {
                        clk_info: "a1_b4"
                    },
                    sinaweibo: {
                        clk_info: "a1_b5"
                    },
                    more: {
                        clk_info: "a1_b6"
                    },
                    close: {
                        clk_info: "a1_b7"
                    }
                };
            if (a && v[a] && g[a] && "object" == typeof B && B.log && B.log.send) {
                var b = v[a];
                c.opt && "object" == typeof c.opt.loginfo && (b = $.extend(b, h, c.opt.loginfo)), B.log.send(b), B.log.send($.extend(g[a], {
                    ct: 10,
                    cst: 2,
                    clk_from: "share"
                }))
            }
        },
        render: function(a, c) {
            var h = this;
            if (a && $(a).length) {
                var v = $(a);
                c && c.customClassName && h.$dom_shareList.addClass(c.customClassName), v.append(h.$dom_shareList), h.isRender = !0, c && "function" == typeof c.onRender && c.onRender()
            }
        },
        popup: function(a) {
            var h = this,
                a = a || {};
            h.isRender && (h.$dom_shareList = h.$dom_shareList.clone(), h._bindEvent()), a && a.customClassName && h.$dom_shareList.addClass(a.customClassName);
            var v = $('<div class="c-tool-cancel-btn">取消</div>'),
                g = c;
            h.sharePopup = new g({
                content: h.$dom_shareList.add(v),
                customClassName: "c-share-popup-modal",
                onOpen: a.onOpen || function() {},
                onClose: a.onClose || function() {}
            }), v.on("click", function() {
                h.sharePopup.closePopup(), h._sendLog("close")
            })
        },
        close: function() {
            var a = this;
            a.sharePopup && a.sharePopup.closePopup()
        },
        _horizontalHack: function() {
            var a;
            return void 0 != window.orientation ? 0 == window.orientation || 180 == window.orientation ? a = Math.min(window.screen.width, $(window).width()) : (90 == window.orientation || -90 == window.orientation) && (a = Math.min(window.screen.width, window.screen.height), a = a * $(window).width() / Math.max(window.screen.width, window.screen.height)) : a = Math.min(window.screen.width, window.screen.height), a
        },
        constructor: F
    }, F
}), define("wiseindex/tabs/news/activity/font", ["wiseindex/tabs/news/activity/slider", "wiseindex/tabs/news/activity/postmessage"], function(a, c) {
    var h = function() {
        var h = [.875, 1, 1.125, 1.25],
            v = 1,
            g = $(".c-popup-wrapper");
        c.sendMessage($(".sf-frame iframe")[0].contentWindow, {
            event: "getDetailFont"
        }, !0).done(function(b) {
            var w = b.data.font || 1;
            w && (v = h.indexOf(+w)), a.feedSlider({
                length: $(window).width() - 56,
                options: ["小", "标准", "大", "特大"],
                defaultIndex: a.data("index") || v,
                cb: function(a) {
                    c.sendMessage($(".sf-frame iframe")[0].contentWindow, {
                        event: "setDetailFont",
                        font: h[a]
                    }, !1)
                }
            }).show(), g.hide()
        })
    };
    return h.prototype = {
        constructor: h
    }, h
}), define("wiseindex/tabs/news/activity/tool", ["wiseindex/tabs/news/activity/postmessage", "wiseindex/tabs/news/activity/share", "wiseindex/tabs/news/activity/star", "wiseindex/tabs/news/activity/font", "wiseindex/tabs/news/activity/popup", "wiseindex/tabs/news/activity/bdscroll", "wiseindex/lib/thunder/thunder"], function(a, c, h, v, g, b, w) {
    var y = function(a) {
        this.opt = $.extend({}, a), this.opt.content || (this.opt.content = this.opt.title), /^\/\/.+/.test(this.opt.url) && (this.opt.url = "http:" + this.opt.url), this.opt.linkUrl = this.opt.url;
        var c = this.opt.log;
        this.thunderLog = w.create({
            baseParams: {
                logid: c.logid || void 0,
                ssid: c.ssid || void 0,
                sid: c.sid || void 0
            }
        }), this._init()
    };
    return y.prototype = {
        version: "1.0.0",
        _init: function() {
            var a = this,
                c = $("#userinfo").length > 0 ? !0 : !1;
            a.star = new h(a.opt, c), a.star._checkStar().done(function() {
                a.star.star = !0, a._initToolList()
            }).fail(function() {
                a.star.star = !1, a._initToolList()
            })
        },
        _initToolList: function() {
            var a = this,
                c = {
                    key: "wxfriend",
                    icon: "//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend_2.png",
                    title: "微信好友"
                },
                h = {
                    key: "pyq",
                    icon: "//m.baidu.com/se/static/pmd/pmd/share/images/pyq_2.png",
                    title: "微信朋友圈"
                },
                v = {
                    key: "qqfriend",
                    icon: "//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend_2.png",
                    title: "QQ好友"
                },
                g = {
                    key: "qzone",
                    icon: "//m.baidu.com/se/static/pmd/pmd/share/images/qzone_2.png",
                    title: "QQ空间"
                },
                b = {
                    key: "sinaweibo",
                    icon: "//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo_2.png",
                    title: "新浪微博"
                },
                w = {
                    key: "star",
                    icon: "//m.baidu.com/static/ala/uiamd/Share/collect.png",
                    title: "收藏"
                },
                y = {
                    key: "stared",
                    icon: "//m.baidu.com/static/ala/uiamd/Share/collect-succ.png",
                    title: "已收藏"
                },
                S = {
                    key: "font",
                    icon: "//m.baidu.com/static/ala/uiamd/Share/font.png",
                    title: "字号"
                },
                _ = [{
                    share: [c, h, v, g, b]
                }, {
                    other: []
                }],
                k = $(".sf-title").data("bjh");
            if (k) {
                var T = {
                    key: "bjh",
                    icon: $(".sf-title").find("img").attr("src"),
                    url: $(".sf-title").find("a").attr("href"),
                    title: "查看作者"
                };
                _[1].other.push(T)
            }
            var E = a.star.star,
                C = a.opt.isThird;
            E ? C ? _[1].other.push(y) : _[1].other.push(y, S) : C ? _[1].other.push(w) : _[1].other.push(w, S), this.opt.isVideo && _[1].other.pop();
            for (var P = '<div class="c-tool-list wa-image-scroll-wrapper">', i = 0; i < _.length; i++) {
                P += '<div class="c-flexbox c-' + Object.keys(_[i]) + '-list wa-image-scroller">';
                for (var O = _[i][Object.keys(_[i])].length, B = O > 4 ? O : 4, I = 0; B > I; I++) {
                    var H = _[i][Object.keys(_[i])][I];
                    if (H) {
                        var A = i * B + I + 1;
                        P += H.url ? '<div class="c-tool-btn wa-image-entity" data-url = "' + H.url + '" data-key = "' + H.key + '" data-cat = "' + Object.keys(_[i]) + 'data-clklog = "ct:1;cst:2;logFrom:recdetail;logInfo:tools;" data-extralog = "rid:;pos:' + A + ";extra:{};from:" + H.key + ';">' : '<div class="c-tool-btn wa-image-entity" data-key = "' + H.key + '" data-cat = "' + Object.keys(_[i]) + '" data-clklog = "ct:1;cst:2;logFrom:recdetail;logInfo:tools;" data-extralog = "rid:;pos:' + A + ";extra:{};from:" + H.key + ';">', P += '<img class="c-img" src="' + H.icon + '" />', P += '<span class="c-gap-top c-line-clamp1">' + H.title + "</span>"
                    } else P += '<div class="c-tool-btn ">';
                    P += "</div>"
                }
                "share" == Object.keys(_[i]) && (P += '<div class = "coverLeft"></div>', P += '<div class = "coverRight"></div>'), P += "</div>"
            }
            P += "</div>", a.$dom_toolList = $(P), a._bindEvent()
        },
        _bindEvent: function() {
            var a = this;
            a.$dom_toolList.find(".c-tool-btn").each(function() {
                $(this).on("click", function() {
                    var h = a.opt.isThird;
                    if (!h) {
                        var g = a.opt.url.split("#");
                        g[0] += "&type=share", a.opt.url = g.join("#")
                    }
                    "share" === $(this).data("cat") && new c($(this).data("key"), a.opt);
                    var b = $(this).data("key");
                    switch (b) {
                        case "star":
                        case "stared":
                            a.star._dispatch();
                            break;
                        case "font":
                            new v;
                            break;
                        case "bjh":
                            window.location.href = $(this).data("url");
                            break;
                        case "defalut":
                    }
                    a.sendLog($(this).data("clklog"), $(this).data("extralog"))
                })
            }), a.popup()
        },
        sendLog: function(a, c) {
            var h = this,
                v = h.parse(a);
            v.logExtra = JSON.stringify(h.parse(c)), h.thunderLog.send(v)
        },
        parse: function(a) {
            for (var c = {}, h = /(.*?):(.*?);/gi; output = h.exec(a);) c[output[1]] = output[2];
            return c
        },
        render: function(a, c) {
            var h = this;
            if (a && $(a).length) {
                var v = $(a);
                c && c.customClassName && h.$dom_toolList.addClass(c.customClassName), v.append(h.$dom_toolList), h.isRender = !0, c && "function" == typeof c.onRender && c.onRender()
            }
        },
        popup: function(a) {
            var c = this,
                a = a || {};
            c.isRender && (c.$dom_toolList = c.$dom_toolList.clone(), c._bindEvent()), a && a.customClassName && c.$dom_toolList.addClass(a.customClassName);
            var h = $('<div class="c-tool-cancel-btn">取消</div>');
            c.toolPopup = new g({
                content: c.$dom_toolList.add(h),
                customClassName: "c-tool-popup-modal",
                onOpen: a.onOpen || function() {},
                onClose: a.onClose || function() {}
            }), this.thunderLog.send({
                ct: 1,
                cst: 1,
                logFrom: "recdetail",
                logInfo: "tools",
                logExtra: JSON.stringify({
                    rid: "",
                    pos: "",
                    extra: ""
                })
            }), h.on("click", function() {
                c.toolPopup.closePopup()
            }), window.innerWidth < 406 && $(".wa-image-scroll-wrapper").find(".wa-image-scroller").width(406), setTimeout(function() {
                new b(".wa-image-scroll-wrapper", {
                    disableMouse: !1,
                    momentum: !0
                })
            }, 400)
        },
        close: function() {
            var a = this;
            a.toolPopup && a.toolPopup.closePopup()
        },
        _horizontalHack: function() {
            var a;
            return void 0 != window.orientation ? 0 == window.orientation || 180 == window.orientation ? a = Math.min(window.screen.width, $(window).width()) : (90 == window.orientation || -90 == window.orientation) && (a = Math.min(window.screen.width, window.screen.height), a = a * $(window).width() / Math.max(window.screen.width, window.screen.height)) : a = Math.min(window.screen.width, window.screen.height), a
        },
        constructor: y
    }, y
}), ! function(a, c, h) {
    function v(a, h) {
        if (this.wrapper = "string" == typeof a ? c.querySelector(a) : a, this.wrapper && this.wrapper.children) {
            this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            };
            for (var i in h) this.options[i] = h[i];
            this.translateZ = this.options.HWCompositing && y.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = y.hasTransition && this.options.useTransition, this.options.useTransform = y.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? y.ease[this.options.bounceEasing] || y.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }
    }

    function g(a, h, v) {
        var g = c.createElement("div"),
            b = c.createElement("div");
        return v === !0 && (g.style.cssText = "position:absolute;z-index:9999", b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), b.className = "iScrollIndicator", "h" == a ? (v === !0 && (g.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", b.style.height = "100%"), g.className = "iScrollHorizontalScrollbar") : (v === !0 && (g.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", b.style.width = "100%"), g.className = "iScrollVerticalScrollbar"), g.style.cssText += ";overflow:hidden", h || (g.style.pointerEvents = "none"), g.appendChild(b), g
    }

    function b(h, v) {
        this.wrapper = "string" == typeof v.el ? c.querySelector(v.el) : v.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = h, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var i in v) this.options[i] = v[i];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (y.addEvent(this.indicator, "touchstart", this), y.addEvent(a, "touchend", this)), this.options.disablePointer || (y.addEvent(this.indicator, y.prefixPointerEvent("pointerdown"), this), y.addEvent(a, y.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (y.addEvent(this.indicator, "mousedown", this), y.addEvent(a, "mouseup", this))), this.options.fade && (this.wrapperStyle[y.style.transform] = this.scroller.translateZ, this.wrapperStyle[y.style.transitionDuration] = y.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
    }
    var w = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(c) {
            a.setTimeout(c, 1e3 / 60)
        },
        y = function() {
            function v(a) {
                return w === !1 ? !1 : "" === w ? a : w + a.charAt(0).toUpperCase() + a.substr(1)
            }
            var g = {},
                b = c.createElement("div").style,
                w = function() {
                    for (var a, c = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, l = c.length; l > i; i++)
                        if (a = c[i] + "ransform", a in b) return c[i].substr(0, c[i].length - 1);
                    return !1
                }();
            g.getTime = Date.now || function() {
                return (new Date).getTime()
            }, g.extend = function(a, c) {
                for (var i in c) a[i] = c[i]
            }, g.addEvent = function(a, c, h, v) {
                a.addEventListener(c, h, !!v)
            }, g.removeEvent = function(a, c, h, v) {
                a.removeEventListener(c, h, !!v)
            }, g.prefixPointerEvent = function(c) {
                return a.MSPointerEvent ? "MSPointer" + c.charAt(9).toUpperCase() + c.substr(10) : c
            }, g.momentum = function(a, c, v, g, b, w) {
                var y, S, _ = a - c,
                    k = h.abs(_) / v;
                return w = void 0 === w ? 6e-4 : w, y = a + k * k / (2 * w) * (0 > _ ? -1 : 1), S = k / w, g > y ? (y = b ? g - b / 2.5 * (k / 8) : g, _ = h.abs(y - a), S = _ / k) : y > 0 && (y = b ? b / 2.5 * (k / 8) : 0, _ = h.abs(a) + y, S = _ / k), {
                    destination: h.round(y),
                    duration: S
                }
            };
            var y = v("transform");
            return g.extend(g, {
                hasTransform: y !== !1,
                hasPerspective: v("perspective") in b,
                hasTouch: "ontouchstart" in a,
                hasPointer: a.PointerEvent || a.MSPointerEvent,
                hasTransition: v("transition") in b
            }), g.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion), g.extend(g.style = {}, {
                transform: y,
                transitionTimingFunction: v("transitionTimingFunction"),
                transitionDuration: v("transitionDuration"),
                transitionDelay: v("transitionDelay"),
                transformOrigin: v("transformOrigin")
            }), g.hasClass = function(e, a) {
                var re = new RegExp("(^|\\s)" + a + "(\\s|$)");
                return re.test(e.className)
            }, g.addClass = function(e, a) {
                if (!g.hasClass(e, a)) {
                    var c = e.className.split(" ");
                    c.push(a), e.className = c.join(" ")
                }
            }, g.removeClass = function(e, a) {
                if (g.hasClass(e, a)) {
                    var re = new RegExp("(^|\\s)" + a + "(\\s|$)", "g");
                    e.className = e.className.replace(re, " ")
                }
            }, g.offset = function(a) {
                for (var c = -a.offsetLeft, h = -a.offsetTop; a = a.offsetParent;) c -= a.offsetLeft, h -= a.offsetTop;
                return {
                    left: c,
                    top: h
                }
            }, g.preventDefaultException = function(a, c) {
                for (var i in c)
                    if (c[i].test(a[i])) return !0;
                return !1
            }, g.extend(g.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), g.extend(g.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(a) {
                        return a * (2 - a)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(a) {
                        return h.sqrt(1 - --a * a)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(a) {
                        var c = 4;
                        return (a -= 1) * a * ((c + 1) * a + c) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(a) {
                        return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(a) {
                        var f = .22,
                            e = .4;
                        return 0 === a ? 0 : 1 == a ? 1 : e * h.pow(2, -10 * a) * h.sin(2 * (a - f / 4) * h.PI / f) + 1
                    }
                }
            }), g.tap = function(e, a) {
                var h = c.createEvent("Event");
                h.initEvent(a, !0, !0), h.pageX = e.pageX, h.pageY = e.pageY, e.target.dispatchEvent(h)
            }, g.click = function(e) {
                var a, h = e.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(h.tagName) || (a = c.createEvent("MouseEvents"), a.initMouseEvent("click", !0, !0, e.view, 1, h.screenX, h.screenY, h.clientX, h.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), a._constructed = !0, h.dispatchEvent(a))
            }, g
        }();
    v.prototype = {
        version: "5.1.3",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(e) {
            if (!(1 != y.eventType[e.type] && 0 !== e.button || !this.enabled || this.initiated && y.eventType[e.type] !== this.initiated)) {
                !this.options.preventDefault || y.isBadAndroid || y.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                var a, c = e.touches ? e.touches[0] : e;
                this.initiated = y.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = y.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, a = this.getComputedPosition(), this._translate(h.round(a.x), h.round(a.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = c.pageX, this.pointY = c.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(e) {
            if (this.enabled && y.eventType[e.type] === this.initiated) {
                this.options.preventDefault && e.preventDefault();
                var a, c, v, g, b = e.touches ? e.touches[0] : e,
                    w = b.pageX - this.pointX,
                    S = b.pageY - this.pointY,
                    _ = y.getTime();
                if (this.pointX = b.pageX, this.pointY = b.pageY, this.distX += w, this.distY += S, v = h.abs(this.distX), g = h.abs(this.distY), !(_ - this.endTime > 300 && 10 > v && 10 > g)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = v > g + this.options.directionLockThreshold ? "h" : g >= v + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        S = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        w = 0
                    }
                    w = this.hasHorizontalScroll ? w : 0, S = this.hasVerticalScroll ? S : 0, a = this.x + w, c = this.y + S, (a > 0 || a < this.maxScrollX) && (a = this.options.bounce ? this.x + w / 3 : a > 0 ? 0 : this.maxScrollX), (c > 0 || c < this.maxScrollY) && (c = this.options.bounce ? this.y + S / 3 : c > 0 ? 0 : this.maxScrollY), this.directionX = w > 0 ? -1 : 0 > w ? 1 : 0, this.directionY = S > 0 ? -1 : 0 > S ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(a, c), _ - this.startTime > 300 && (this.startTime = _, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll")
                }
            }
        },
        _end: function(e) {
            if (this.enabled && y.eventType[e.type] === this.initiated) {
                this.options.preventDefault && !y.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                var a, c, v = (e.changedTouches ? e.changedTouches[0] : e, y.getTime() - this.startTime),
                    g = h.round(this.x),
                    b = h.round(this.y),
                    w = h.abs(g - this.startX),
                    S = h.abs(b - this.startY),
                    _ = 0,
                    k = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = y.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(g, b), !this.moved) return this.options.tap && y.tap(e, this.options.tap), this.options.click && y.click(e), void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > v && 100 > w && 100 > S) return void this._execEvent("flick");
                    if (this.options.momentum && 300 > v && (a = this.hasHorizontalScroll ? y.momentum(this.x, this.startX, v, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: g,
                            duration: 0
                        }, c = this.hasVerticalScroll ? y.momentum(this.y, this.startY, v, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: b,
                            duration: 0
                        }, g = a.destination, b = c.destination, _ = h.max(a.duration, c.duration), this.isInTransition = 1), this.options.snap) {
                        var T = this._nearestSnap(g, b);
                        this.currentPage = T, _ = this.options.snapSpeed || h.max(h.max(h.min(h.abs(g - T.x), 1e3), h.min(h.abs(b - T.y), 1e3)), 300), g = T.x, b = T.y, this.directionX = 0, this.directionY = 0, k = this.options.bounceEasing
                    }
                    return g != this.x || b != this.y ? ((g > 0 || g < this.maxScrollX || b > 0 || b < this.maxScrollY) && (k = y.ease.quadratic), void this.scrollTo(g, b, _, k)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var a = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                a.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(a) {
            var x = this.x,
                c = this.y;
            return a = a || 0, !this.hasHorizontalScroll || this.x > 0 ? x = 0 : this.x < this.maxScrollX && (x = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY), x == this.x && c == this.y ? !1 : (this.scrollTo(x, c, a, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight, this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = y.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(a, c) {
            this._events && (this._events[a] || (this._events[a] = []), this._events[a].push(c))
        },
        off: function(a, c) {
            if (this._events && this._events[a]) {
                var h = this._events[a].indexOf(c);
                h > -1 && this._events[a].splice(h, 1)
            }
        },
        _execEvent: function(a) {
            if (this._events[a]) {
                var i = 0,
                    l = this._events[a].length;
                if (l)
                    for (; l > i; i++) this._events[a][i].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(x, a, c, h) {
            x = this.x + x, a = this.y + a, c = c || 0, this.scrollTo(x, a, c, h)
        },
        scrollTo: function(x, a, c, h, v) {
            h = h || y.ease.circular, this.customFlag = v || {}, this.isInTransition = this.options.useTransition && c > 0, !c || this.options.useTransition && h.style ? (this._transitionTimingFunction(h.style), this._transitionTime(c), this._translate(x, a)) : this._animate(x, a, c, h.fn)
        },
        scrollToElement: function(a, c, v, g, b, w) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var w = w || {},
                    S = y.offset(a);
                S.left -= this.wrapperOffset.left, S.top -= this.wrapperOffset.top, v === !0 && (v = h.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), g === !0 && (g = h.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), S.left -= v || 0, S.top -= g || 0, S.left = S.left > 0 ? 0 : S.left < this.maxScrollX ? this.maxScrollX : S.left, S.top = S.top > 0 ? 0 : S.top < this.maxScrollY ? this.maxScrollY : S.top, c = void 0 === c || null === c || "auto" === c ? h.max(h.abs(this.x - S.left), h.abs(this.y - S.top)) : c, this.scrollTo(S.left, S.top, c, b, w)
            }
        },
        _transitionTime: function(a) {
            if (a = a || 0, this.scrollerStyle[y.style.transitionDuration] = a + "ms", !a && y.isBadAndroid && (this.scrollerStyle[y.style.transitionDuration] = "0.001s"), this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(a)
        },
        _transitionTimingFunction: function(a) {
            if (this.scrollerStyle[y.style.transitionTimingFunction] = a, this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(a)
        },
        _translate: function(x, a) {
            if (this.options.useTransform ? this.scrollerStyle[y.style.transform] = "translate(" + x + "px," + a + "px)" + this.translateZ : (x = h.round(x), a = h.round(a), this.scrollerStyle.left = x + "px", this.scrollerStyle.top = a + "px"), this.x = x, this.y = a, this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
        },
        _initEvents: function(c) {
            var h = c ? y.removeEvent : y.addEvent,
                v = this.options.bindToWrapper ? this.wrapper : a;
            h(a, "orientationchange", this), h(a, "resize", this), this.options.click && h(this.wrapper, "click", this, !0), this.options.disableMouse || (h(this.wrapper, "mousedown", this), h(v, "mousemove", this), h(v, "mousecancel", this), h(v, "mouseup", this)), y.hasPointer && !this.options.disablePointer && (h(this.wrapper, y.prefixPointerEvent("pointerdown"), this), h(v, y.prefixPointerEvent("pointermove"), this), h(v, y.prefixPointerEvent("pointercancel"), this), h(v, y.prefixPointerEvent("pointerup"), this)), y.hasTouch && !this.options.disableTouch && (h(this.wrapper, "touchstart", this), h(v, "touchmove", this), h(v, "touchcancel", this), h(v, "touchend", this)), h(this.scroller, "transitionend", this), h(this.scroller, "webkitTransitionEnd", this), h(this.scroller, "oTransitionEnd", this), h(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var x, c, h = a.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (h = h[y.style.transform].split(")")[0].split(", "), x = +(h[12] || h[4]), c = +(h[13] || h[5])) : (x = +h.left.replace(/[^-\d.]/g, ""), c = +h.top.replace(/[^-\d.]/g, "")), {
                x: x,
                y: c
            }
        },
        _initIndicators: function() {
            function a(a) {
                for (var i = y.indicators.length; i--;) a.call(y.indicators[i])
            }
            var c, h = this.options.interactiveScrollbars,
                v = "string" != typeof this.options.scrollbars,
                w = [],
                y = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (c = {
                el: g("v", h, this.options.scrollbars),
                interactive: h,
                defaultScrollbars: !0,
                customStyle: v,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(c.el), w.push(c)), this.options.scrollX && (c = {
                el: g("h", h, this.options.scrollbars),
                interactive: h,
                defaultScrollbars: !0,
                customStyle: v,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(c.el), w.push(c))), this.options.indicators && (w = w.concat(this.options.indicators));
            for (var i = w.length; i--;) this.indicators.push(new b(this, w[i]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                a(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                a(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                a(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                a(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                a(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                a(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            y.addEvent(this.wrapper, "wheel", this), y.addEvent(this.wrapper, "mousewheel", this), y.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                y.removeEvent(this.wrapper, "wheel", this), y.removeEvent(this.wrapper, "mousewheel", this), y.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(e) {
            if (this.enabled) {
                e.preventDefault(), e.stopPropagation();
                var a, c, v, g, b = this;
                if (void 0 === this.wheelTimeout && b._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                        b._execEvent("scrollEnd"), b.wheelTimeout = void 0
                    }, 400), "deltaX" in e) 1 === e.deltaMode ? (a = -e.deltaX * this.options.mouseWheelSpeed, c = -e.deltaY * this.options.mouseWheelSpeed) : (a = -e.deltaX, c = -e.deltaY);
                else if ("wheelDeltaX" in e) a = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, c = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in e) a = c = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in e)) return;
                    a = c = -e.detail / 3 * this.options.mouseWheelSpeed
                }
                if (a *= this.options.invertWheelDirection, c *= this.options.invertWheelDirection, this.hasVerticalScroll || (a = c, c = 0), this.options.snap) return v = this.currentPage.pageX, g = this.currentPage.pageY, a > 0 ? v-- : 0 > a && v++, c > 0 ? g-- : 0 > c && g++, void this.goToPage(v, g);
                v = this.x + h.round(this.hasHorizontalScroll ? a : 0), g = this.y + h.round(this.hasVerticalScroll ? c : 0), v > 0 ? v = 0 : v < this.maxScrollX && (v = this.maxScrollX), g > 0 ? g = 0 : g < this.maxScrollY && (g = this.maxScrollY), this.scrollTo(v, g, 0), this.options.probeType > 1 && this._execEvent("scroll")
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var l, n, a, c, v, g, i = 0,
                    m = 0,
                    x = 0,
                    b = this.options.snapStepX || this.wrapperWidth,
                    w = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (a = h.round(b / 2), c = h.round(w / 2); x > -this.scrollerWidth;) {
                            for (this.pages[i] = [], l = 0, v = 0; v > -this.scrollerHeight;) this.pages[i][l] = {
                                x: h.max(x, this.maxScrollX),
                                y: h.max(v, this.maxScrollY),
                                width: b,
                                height: w,
                                cx: x - a,
                                cy: v - c
                            }, v -= w, l++;
                            x -= b, i++
                        } else
                            for (g = this.options.snap, l = g.length, n = -1; l > i; i++)(0 === i || g[i].offsetLeft <= g[i - 1].offsetLeft) && (m = 0, n++), this.pages[m] || (this.pages[m] = []), x = h.max(-g[i].offsetLeft, this.maxScrollX), v = h.max(-g[i].offsetTop, this.maxScrollY), a = x - h.round(g[i].offsetWidth / 2), c = v - h.round(g[i].offsetHeight / 2), this.pages[m][n] = {
                                x: x,
                                y: v,
                                width: g[i].offsetWidth,
                                height: g[i].offsetHeight,
                                cx: a,
                                cy: c
                            }, x > this.maxScrollX && m++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var a = this.options.snapSpeed || h.max(h.max(h.min(h.abs(this.x - this.startX), 1e3), h.min(h.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        },
        _nearestSnap: function(x, a) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var i = 0,
                l = this.pages.length,
                m = 0;
            if (h.abs(x - this.absStartX) < this.snapThresholdX && h.abs(a - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (x > 0 ? x = 0 : x < this.maxScrollX && (x = this.maxScrollX), a > 0 ? a = 0 : a < this.maxScrollY && (a = this.maxScrollY); l > i; i++)
                if (x >= this.pages[i][0].cx) {
                    x = this.pages[i][0].x;
                    break
                }
            for (l = this.pages[i].length; l > m; m++)
                if (a >= this.pages[0][m].cy) {
                    a = this.pages[0][m].y;
                    break
                }
            return i == this.currentPage.pageX && (i += this.directionX, 0 > i ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), x = this.pages[i][0].x), m == this.currentPage.pageY && (m += this.directionY, 0 > m ? m = 0 : m >= this.pages[0].length && (m = this.pages[0].length - 1), a = this.pages[0][m].y), {
                x: x,
                y: a,
                pageX: i,
                pageY: m
            }
        },
        goToPage: function(x, a, c, v) {
            v = v || this.options.bounceEasing, x >= this.pages.length ? x = this.pages.length - 1 : 0 > x && (x = 0), a >= this.pages[x].length ? a = this.pages[x].length - 1 : 0 > a && (a = 0);
            var g = this.pages[x][a].x,
                b = this.pages[x][a].y;
            c = void 0 === c ? this.options.snapSpeed || h.max(h.max(h.min(h.abs(g - this.x), 1e3), h.min(h.abs(b - this.y), 1e3)), 300) : c, this.currentPage = {
                x: g,
                y: b,
                pageX: x,
                pageY: a
            }, this.scrollTo(g, b, c, v)
        },
        next: function(a, c) {
            var x = this.currentPage.pageX,
                h = this.currentPage.pageY;
            x++, x >= this.pages.length && this.hasVerticalScroll && (x = 0, h++), this.goToPage(x, h, a, c)
        },
        prev: function(a, c) {
            var x = this.currentPage.pageX,
                h = this.currentPage.pageY;
            x--, 0 > x && this.hasVerticalScroll && (x = 0, h--), this.goToPage(x, h, a, c)
        },
        _initKeys: function() {
            var i, c = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in c) this.options.keyBindings[i] = this.options.keyBindings[i] || c[i];
            y.addEvent(a, "keydown", this), this.on("destroy", function() {
                y.removeEvent(a, "keydown", this)
            })
        },
        _key: function(e) {
            if (this.enabled) {
                var a, c = this.options.snap,
                    v = c ? this.currentPage.pageX : this.x,
                    g = c ? this.currentPage.pageY : this.y,
                    b = y.getTime(),
                    w = this.keyTime || 0,
                    S = .25;
                switch (this.options.useTransition && this.isInTransition && (a = this.getComputedPosition(), this._translate(h.round(a.x), h.round(a.y)), this.isInTransition = !1), this.keyAcceleration = 200 > b - w ? h.min(this.keyAcceleration + S, 50) : 0, e.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? v += c ? 1 : this.wrapperWidth : g += c ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? v -= c ? 1 : this.wrapperWidth : g -= c ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        v = c ? this.pages.length - 1 : this.maxScrollX, g = c ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        v = 0, g = 0;
                        break;
                    case this.options.keyBindings.left:
                        v += c ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        g += c ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        v -= c ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        g -= c ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (c) return void this.goToPage(v, g);
                v > 0 ? (v = 0, this.keyAcceleration = 0) : v < this.maxScrollX && (v = this.maxScrollX, this.keyAcceleration = 0), g > 0 ? (g = 0, this.keyAcceleration = 0) : g < this.maxScrollY && (g = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(v, g, 0), this.keyTime = b
            }
        },
        _animate: function(a, c, h, v) {
            function g() {
                var $, E, C, P = y.getTime();
                return P >= T ? (b.isAnimating = !1, b._translate(a, c), void(b.resetPosition(b.options.bounceTime) || b._execEvent("scrollEnd"))) : (P = (P - k) / h, C = v(P), $ = (a - S) * C + S, E = (c - _) * C + _, b._translate($, E), b.isAnimating && w(g), void(3 == b.options.probeType && b._execEvent("scroll")))
            }
            var b = this,
                S = this.x,
                _ = this.y,
                k = y.getTime(),
                T = k + h;
            this.isAnimating = !0, g()
        },
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    e._constructed || (e.preventDefault(), e.stopPropagation())
            }
        }
    }, b.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e)
            }
        },
        destroy: function() {
            this.options.interactive && (y.removeEvent(this.indicator, "touchstart", this), y.removeEvent(this.indicator, y.prefixPointerEvent("pointerdown"), this), y.removeEvent(this.indicator, "mousedown", this), y.removeEvent(a, "touchmove", this), y.removeEvent(a, y.prefixPointerEvent("pointermove"), this), y.removeEvent(a, "mousemove", this), y.removeEvent(a, "touchend", this), y.removeEvent(a, y.prefixPointerEvent("pointerup"), this), y.removeEvent(a, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var c = e.touches ? e.touches[0] : e;
            e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = c.pageX, this.lastPointY = c.pageY, this.startTime = y.getTime(), this.options.disableTouch || y.addEvent(a, "touchmove", this), this.options.disablePointer || y.addEvent(a, y.prefixPointerEvent("pointermove"), this), this.options.disableMouse || y.addEvent(a, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            var a, c, h, v, g = e.touches ? e.touches[0] : e,
                b = y.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, a = g.pageX - this.lastPointX, this.lastPointX = g.pageX, c = g.pageY - this.lastPointY, this.lastPointY = g.pageY, h = this.x + a, v = this.y + c, this._pos(h, v), 1 == this.scroller.options.probeType && b - this.startTime > 300 ? (this.startTime = b, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), e.preventDefault(), e.stopPropagation()
        },
        _end: function(e) {
            if (this.initiated) {
                if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), y.removeEvent(a, "touchmove", this), y.removeEvent(a, y.prefixPointerEvent("pointermove"), this), y.removeEvent(a, "mousemove", this), this.scroller.options.snap) {
                    var c = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        v = this.options.snapSpeed || h.max(h.max(h.min(h.abs(this.scroller.x - c.x), 1e3), h.min(h.abs(this.scroller.y - c.y), 1e3)), 300);
                    (this.scroller.x != c.x || this.scroller.y != c.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = c, this.scroller.scrollTo(c.x, c.y, v, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(a) {
            a = a || 0, this.indicatorStyle[y.style.transitionDuration] = a + "ms", !a && y.isBadAndroid && (this.indicatorStyle[y.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(a) {
            this.indicatorStyle[y.style.transitionTimingFunction] = a
        },
        refresh: function() {
            this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (y.addClass(this.wrapper, "iScrollBothScrollbars"), y.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (y.removeClass(this.wrapper, "iScrollBothScrollbars"), y.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.wrapper.offsetHeight, this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = h.max(h.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = h.max(h.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var x = this.options.listenX && h.round(this.sizeRatioX * this.scroller.x) || 0,
                a = this.options.listenY && h.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (x < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = h.max(this.indicatorWidth + x, 8), this.indicatorStyle.width = this.width + "px"), x = this.minBoundaryX) : x > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = h.max(this.indicatorWidth - (x - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", x = this.maxPosX + this.indicatorWidth - this.width) : x = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), a < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = h.max(this.indicatorHeight + 3 * a, 8), this.indicatorStyle.height = this.height + "px"), a = this.minBoundaryY) : a > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = h.max(this.indicatorHeight - 3 * (a - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", a = this.maxPosY + this.indicatorHeight - this.height) : a = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = x, this.y = a, this.scroller.options.useTransform ? this.indicatorStyle[y.style.transform] = "translate(" + x + "px," + a + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = x + "px", this.indicatorStyle.top = a + "px")
        },
        _pos: function(x, a) {
            0 > x ? x = 0 : x > this.maxPosX && (x = this.maxPosX), 0 > a ? a = 0 : a > this.maxPosY && (a = this.maxPosY), x = this.options.listenX ? h.round(x / this.sizeRatioX) : this.scroller.x, a = this.options.listenY ? h.round(a / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(x, a)
        },
        fade: function(a, c) {
            if (!c || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var h = a ? 250 : 500,
                    v = a ? 0 : 300;
                a = a ? "1" : "0", this.wrapperStyle[y.style.transitionDuration] = h + "ms", this.fadeTimeout = setTimeout(function(a) {
                    this.wrapperStyle.opacity = a, this.visible = +a
                }.bind(this, a), v)
            }
        }
    }, v.utils = y, "function" == typeof define && define.amd ? define("wiseindex/tabs/news/activity/iscroll", function() {
        return v
    }) : a.IScroll = v
}(window, document, Math), define("wiseindex/tabs/news/activity/bdscroll", function() {
    var a = require("wiseindex/tabs/news/activity/iscroll"),
        c = function(a, c) {
            if (a) {
                var h = this;
                h.el = a, h.options = $.extend({
                    disableMouse: !0,
                    scrollX: !0,
                    scrollY: !1,
                    momentum: !0,
                    eventPassthrough: !0,
                    scrollbars: !1,
                    snap: !1,
                    snapThreshold: .1,
                    snapSpeed: 400
                }, c), h.preprocess()
            }
        },
        h = function() {};
    return h.prototype = a.prototype, c.prototype = new h, c.prototype.constructor = c, c.prototype.preprocess = function() {
        var c = this,
            h = !1;
        a.call(c, c.el, c.options), $(window).on("orientationchange", function() {
            setTimeout(function() {
                var a = window.innerWidth > 406 ? window.innerWidth : 406;
                $(".wa-image-scroll-wrapper").find(".wa-image-scroller").width(a), c.refresh()
            }, 100)
        }).on("pageshow", function() {
            c.refresh()
        }), $("body").one("onlyshowMore", function() {
            setTimeout(function() {
                c.refresh()
            }, 0)
        }), c.on("scrollStart", function() {
            h && ($(c.el).imageDelayload(), h = !1)
        }), c.options.snap && c.options.$indicator && c.on("scrollEnd", function() {
            var a = this.currentPage.pageX;
            c.options.$indicator.find("span").removeClass("c-scroll-dotty-now").eq(a).addClass("c-scroll-dotty-now")
        })
    }, c
}), define("wiseindex/tabs/news/activity/slider", function() {
    $.fn.feedSlider = function(e) {
        function i() {
            p = $.extend(!0, {}, p, e), r = p.length || o.width(), f = p.options.length, a = parseInt(r / (f - 1), 10), b = p.defaultIndex;
            for (var i = 0; f > i; i++) g.push(a * i);
            g.push(r), c.addClass(p.style.slider), h.addClass(p.style.bar), t(), s(b, g[b])
        }

        function t() {
            for (var e, i = [], a = [], t = 0; f > t; t++) e = 0 === t || 2 === t ? "left: " + (g[t] - 7) + "px; text-align: left;" : "left: " + (g[t] - 14) + "px; text-align: right;", i.push('<div class="feed-slider-option" style="' + e + '">' + p.options[t] + "</div>"), a.push('<div class="feed-slider-btn" style = "left:' + (g[t] - 3) + 'px"></div>'), v.html(i.join("")), c.html(a.join("") + '<div class="feed-slider-select-line"></div>'), x = '<div class="feed-slider-title">字号调整</div>';
            l = c.find(".feed-slider-select-line");
            var d = $('<div class="feed-slider-wrap"></div>');
            c.append(h), d.append(x), d.append(v), d.append(c), o.append(d), o.append('<div class="feed-slider-bg"></div>'), u = v.children(), u.eq(p.defaultIndex).addClass("feed-slider-selected")
        }

        function d() {
            var e, i, a, c;
            $(".feed-slider-bar").on("touchstart", function(i) {
                return e = i.touches[0].pageX, !1
            }).on("touchmove", function(t) {
                i = t.touches[0].pageX - e + g[b], 0 > i ? (c = 0, i = 0) : i > r && (c = 3, i = r), s(c, i)
            }).on("touchmove", function(e) {
                e.preventDefault(), e.stopPropagation()
            }).on("touchend", function() {
                n(i)
            }), v.on("click", ".feed-slider-option", function() {
                var e = $(this).index();
                n(g[e])
            }), o.on("click", ".feed-slider-bg", function() {
                o.hide()
            }), $(".feed-slider-bg").on("touchmove", function(e) {
                e.preventDefault()
            }), $(".feed-slider-wrap").on("touchmove", function(e) {
                e.preventDefault()
            }), $(window).on("hashchange, popstate", function() {
                o.hide()
            }), $(window).on("orientationchange", function() {
                clearTimeout(a), a = setTimeout(function() {
                    if ("block" == $(".feed-slider-box").css("display")) {
                        for (var a = $(".feed-slider").width(), c = parseInt(a / (f - 1), 10), i = 0, h = []; f > i; i++) h.push(c * i);
                        $(".feed-slider-option").each(function(a, c) {
                            $(c).css(0 == a || 2 == a ? {
                                left: h[a] - 7
                            } : {
                                left: h[a] - 14
                            })
                        }), $(".feed-slider-btn").each(function(a, c) {
                            $(c).css({
                                left: h[a] - 3
                            })
                        })
                    }
                }, 50)
            })
        }

        function n(e) {
            h.addClass("feed-slider-bar-active"), b = Math.round(e / a), s(b, g[b]), setTimeout(function() {
                u.removeClass("feed-slider-selected"), h.removeClass("feed-slider-bar-active"), u.eq(b).addClass("feed-slider-selected"), o.data("index", b)
            }, 200), "function" == typeof p.cb && p.cb(b)
        }

        function s(i, e) {
            $(".feed-slider-bar").css({
                left: e - 13 + "px"
            }), l.css({
                width: e
            }), $(".feed-slider-btn").removeClass("active"), $(".feed-slider-btn").each(function(a, c) {
                i > a && $(c).addClass("active")
            })
        }
        var o = $(this);
        if (o.hasClass("feed-slider-inited")) return o;
        var r, a, l, f, p = {
                options: [0, 1, 2],
                defaultIndex: 0,
                length: 100,
                style: {
                    slider: "",
                    bar: ""
                },
                cb: function() {}
            },
            c = $('<div class="feed-slider"></div>'),
            h = $('<div class="feed-slider-bar"></div>'),
            v = $('<div class="feed-slider-select"></div>'),
            x = $("<style></style"),
            u = null,
            g = [],
            b = 0;
        return i(), d(), o.addClass("feed-slider-inited"), o
    };
    var e = $(".feed-slider-box");
    return 0 == e.length && (e = $('<div class="feed-slider-box"></div>'), $("body").append(e)), e
}), define("wiseindex/tabs/news/activity/newsdetail", ["wiseindex/tabs/news/activity/postmessage", "wiseindex/tabs/news/activity/popup", "wiseindex/tabs/news/activity/toast", "wiseindex/lib/thunder/thunder", "wiseindex/lib/backflow", "plugin/monitor"], function(a, c, h, v, g) {
    var b = "1",
        w = "neibu_wise_huati_luodiye_yemianfuceng",
        y = "1019447k",
        S = "recdetail_huati",
        _ = "",
        k = window,
        T = function() {
            function c(c) {
                we = {
                    frameData: c.frameData || {},
                    prefetch: c.prefetch || 0,
                    recommendCall: null,
                    id: c.id
                }, k.onbeforeunload = function() {
                    L()
                }, ce = we.frameData.linkList, fe = se + "_idetail", O(c), U(), C();
                var v = setTimeout(function() {
                        $(".c-loading").hasClass("vhide") && $(".c-loading").removeClass("vhide").addClass("vshow")
                    }, 500),
                    g = setTimeout(function() {
                        $(".c-loading").hasClass("vshow") && $(".c-loading").removeClass("vshow").addClass("vhide"), $(".c-offline").hasClass("hide") && $(".c-offline").removeClass("hide").addClass("show")
                    }, 3e3);
                a.addRequestHandle("newsTitle", function(e) {
                    var a = e.data.title || "百度一下";
                    $("title").text(a)
                }), a.addRequestHandle("scrollIframeTo", function(e) {
                    $("#__SF___idetail").find(".framelist").scrollTop(e.range / 2), setTimeout(function() {
                        $("#__SF___idetail").find(".framelist").scrollTop(e.range)
                    }, 100)
                }), a.addRequestHandle("isMinivideoTopHide", function() {
                    $(".sf-container .sf-header").css("display", "none"), $(".sf-container .sf-frame .framelist").css("padding-top", "0px!important")
                }), a.addRequestHandle("isLargePicPage", function(e) {
                    e.data.isLargePic === !0 && $(".sf-container .sf-frame .framelist").css("padding-top", "0px!important")
                }), a.addRequestHandle("isLastPicPage", function(e) {
                    e.data.isLastPic === !0 && ($(".sf-header").hasClass("largePichide") || $(".sf-header").removeClass("largePicshow").addClass("largePichide"))
                }), a.addRequestHandle("invokeIframe", function(e) {
                    ge && P(e)
                }), a.addRequestHandle("getMpCloseBanner", function(e) {
                    ge && P(e)
                }), a.addRequestHandle("pushActivity", function(e) {
                    B.activity.pushState({
                        activity: "wiseindex/tabs/news/activity/newsdetail",
                        state: {
                            linkData: {
                                name: "iframe/mib-iframe",
                                id: "feed",
                                index: 0,
                                url: e.src
                            }
                        }
                    })
                }), a.addRequestHandle("getMpDomReady", function(e) {
                    if ($(".sf-frame ul li .s-loading-frame").remove(), pe.css({
                            display: "block"
                        }), clearTimeout(v), clearTimeout(g), $(".c-loading").hasClass("vshow") && $(".c-loading").removeClass("vshow").addClass("vhide"), $(".c-offline").hasClass("show") && $(".c-offline").removeClass("show").addClass("hide"), ge && e && e.height && (he.css({
                            height: "initial"
                        }), ue.css({
                            height: "initial"
                        }), pe.css({
                            height: e.height + "px"
                        })), !e || !e.hideFeedBackBanner) try {
                        H()
                    } catch (e) {}
                    a.sendMessage(pe[ae.index].contentWindow, {
                        event: "getParentParams",
                        parentUrl: window.location.href,
                        qudaofrom: $("#commonBase").data("from")
                    }, !1), a.sendMessage(pe[ae.index].contentWindow, {
                        event: "isLogin",
                        isLogin: window.sSession.isLogin
                    }, !1)
                }), a.addRequestHandle("getInitWWidth", function() {
                    a.sendMessage(pe[ae.index].contentWindow, {
                        event: "setInitWWidth",
                        width: $(window).width()
                    }, !1)
                }), a.addRequestHandle("sendDetailPvid", function(e) {
                    xe = e.data.pvid || ""
                }), a.addRequestHandle("isTopic", function(e) {
                    $(".sf-title").empty(), Ce = e.data.log;
                    var a = '<a href = "' + e.data.link + '"><img src = "' + e.data.icon + '"><span>' + e.data.name + "</span></a>";
                    $(a).appendTo(".sf-title"), $(".sf-title").data("topic", "1"), $(".sf-title").removeClass("hide").addClass("show");
                    var c = {
                        cst: 1,
                        logInfo: "head",
                        logExtra: JSON.stringify({
                            rid: "",
                            pos: "head",
                            extra: "",
                            isBaijiahao: "0",
                            isTopic: "1",
                            title: $(".sf-title").find("span").html()
                        })
                    };
                    c = $.extend(c, Ce), Ee.send(c)
                }), a.addRequestHandle("isBaiJiaHao", function(e) {
                    if (1 != $(".sf-title").data("topic")) {
                        $(".sf-title").empty(), Ce = e.data.log;
                        var a = '<a href = "' + e.data.link + '" target = "_blank"><img src = "' + e.data.icon + '"><span>' + e.data.name + "</span></a>";
                        $(a).appendTo(".sf-title"), $(".sf-title").data("bjh", "1"), e.data.isImages && e.data.isImages === !0 && (_e = "image", $(".sf-title").removeClass("hide").addClass("show"))
                    }
                }), a.addRequestHandle("isTopBarShow", function(e) {
                    1 == e.data.isShow ? $(".sf-header").removeClass("largePichide").addClass("largePicshow") : $(".sf-header").removeClass("largePicshow").addClass("largePichide")
                }), a.addRequestHandle("baijiahaoDisplay", function(e) {
                    "show" == e.data.event ? $(".sf-title").addClass("show") : $(".sf-title").removeClass("show")
                }), a.addRequestHandle("baijiahaoLog", function(e) {
                    Ce = e.data.log;
                    var a = {
                        cst: 1,
                        logInfo: "head",
                        logExtra: JSON.stringify({
                            rid: "",
                            pos: "head",
                            extra: "",
                            isBaijiahao: "1",
                            isTopic: "0",
                            title: $(".sf-title").find("span").html()
                        })
                    };
                    a = $.extend(a, Ce), Ee.send(a)
                }), a.addRequestHandle("backLog", function(e) {
                    Ce = e.data.log;
                    var a = {
                        cst: 1,
                        logInfo: "btm_tools",
                        logExtra: JSON.stringify({
                            rid: "",
                            pos: "",
                            extra: "",
                            title: ""
                        })
                    };
                    a = $.extend(a, Ce), Ee.send(a)
                }), a.addRequestHandle("backTop", function(e) {
                    "show" == e.data.event ? $(".c-back").addClass("show") : $(".c-back").removeClass("show")
                }), a.addRequestHandle("hasBackflow", function() {
                    var c = $("#bottom").data("bfshow") || $("#wrapper").data("bfshow");
                    a.sendMessage($("iframe")[0].contentWindow, {
                        event: "backflowShow",
                        flag: c
                    }, !1)
                }), a.addRequestHandle("invokeBaiduApp", function(e) {
                    var a = "",
                        c = "",
                        v = JSON.stringify(e.extLog ? {
                            follow: e.extLog
                        } : {}),
                        g = {
                            tid: e.tid || 745,
                            cst: 2,
                            logInfo: e.logInfo || "invokebaiduapp",
                            logExtra: v
                        };
                    g = $.extend(g, Ce), e.noNeedLog || Ee.send(g);
                    var b = "news_" + e.nid,
                        w = e.thref || "https://mbd.baidu.com/newspage/data/landingreact?pageType=2&sourceFrom=landingWise&nid=" + b,
                        y = e.shareUrlExt || "";
                    w += y;
                    var S = b || "",
                        _ = w,
                        k = e.activityId || null,
                        T = encodeURIComponent(w);
                    if (N() && window.OpenBox) {
                        var E = {
                            opentype: "1",
                            rbtnstyle: "2",
                            newbrowser: "1",
                            type: "Hybrid",
                            tpl_id: "landing_app.html",
                            sfrom: "feed",
                            context: JSON.stringify({
                                nid: b
                            }),
                            slog: null,
                            ch_url: T
                        };
                        e.threadId && (E.commentInfo = JSON.stringify({
                            topic_id: e.threadId,
                            opentype: "2"
                        })), "comments" === e.callbackEvent && (E.context = JSON.stringify({
                            nid: b,
                            anchor: "comment"
                        }));
                        var C = "intent:#Intent;S.toolbaricons=%7B%22toolids%22%3A%5B%224%22%2C%221%22%2C%222%22%2C%223%22%5D%7D;component=com.baidu.searchbox/.home.feed.FeedDetailActivity;S.menumode=2;S.sfrom=feed;S.context=" + encodeURIComponent(E.context) + ";S.tpl_id=landing_app.html;S.ch_url=" + T;
                        switch (e.threadId ? C = C + ";S.commentInfo=" + encodeURIComponent(JSON.stringify({
                            topic_id: e.threadId,
                            opentype: "2"
                        })) + ";end" : C += ";end", e.type) {
                            case "query":
                                a = "baiduboxapp://search?word=" + T, c = {
                                    mode: "0",
                                    intent: "intent:#Intent;package=com.baidu.searchbox;action=com.baidu.searchbox.action.SEARCH;category=android.intent.category.DEFAULT;S.key_value=" + T + ";end;",
                                    min_v: "16787968"
                                };
                                break;
                            case "home":
                                a = "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D", c = {
                                    mode: "0",
                                    intent: "intent:#Intent;action=com.baidu.searchbox.action.HOME;category=android.intent.category.DEFAULT;B.key_switch_to_home=true;end;",
                                    min_v: "16787968"
                                };
                                break;
                            case "url":
                                a = "baiduboxapp://easybrowse?opentype=1&sfrom=feed&newbrowser=1&openurl=" + T + "&rbtnstyle=0&isBdboxShare=1&isla=0&toolbaricons=%7B%22toolids%22%3A%5B%223%22%5D%7D&menumode=2", c = {
                                    mode: "0",
                                    intent: "intent:#Intent;S.toolbaricons=%7B%22toolids%22%3A%5B%223%22%5D%7D;S.menumode=2;S.create_menu_key=false;S.bdsb_light_start_url=" + T + ";end",
                                    "class": "com.baidu.searchbox.xsearch.UserSubscribeCenterActivity",
                                    min_v: "16787968"
                                };
                                break;
                            default:
                                a = "baiduboxapp://common?action=easybrowse&params=" + encodeURIComponent(JSON.stringify(E)) + "&minver=7.2.5.0&toolbaricons=%7b%22toolids%22%3a%5b%224%22%2c%221%22%2c%222%22%2c%223%22%5d%7d&menumode%3d2%22%7d", c = {
                                    minver: "3.3",
                                    mode: "0",
                                    intent: C,
                                    min_v: "16787968"
                                }
                        }
                        var P = {
                            iosScheme: a,
                            androidCommand: c,
                            from: e.from || "",
                            channel: e.channel || "",
                            extLog: e.extLog || ""
                        };
                        setTimeout(function() {
                            if (e.failUrl && e.failbackUrl && (P.failUrl = e.failUrl, P.failCallback = function() {
                                    window.location.href = e.failbackUrl
                                }), "followBtn" === e.callbackEvent) P.failUrl = window.location.href, P.failCallback = function() {};
                            else if ("relateTitle" === e.callbackEvent) {
                                var a = h(e.href);
                                P.failUrl = a, P.failCallback = function() {
                                    window.location.href = a
                                }
                            }
                            S ? P.copyTokenData = {
                                nid: S
                            } : _ && k && (P.copyTokenData = {
                                url: _,
                                activity_id: k
                            }), e.passwordExt && (P.copyTokenData.ext = e.passwordExt), P.failCallback || (P.failCallback = function() {
                                window.location.href = "https://boxer.baidu.com/scheme?from=" + e.channel + "&source=" + e.from + "&tokenData=" + encodeURIComponent(JSON.stringify(P.copyTokenData || {}))
                            });
                            try {
                                window.shareOpenBox = window.OpenBox(P), window.shareOpenBox.ready(function() {
                                    window.shareOpenBox.open()
                                })
                            } catch (c) {}
                        }, 300)
                    }
                }), a.addRequestHandle("invokeBaiduAppGrally", function(e) {
                    var a = e.data,
                        c = a.nid;
                    if (window.OpenBox) {
                        var v = "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D",
                            g = {
                                iosScheme: "baiduboxapp://common?action=imagecollection&params=%7b%22context%22%3a%7b%22nid%22%3a%22news_" + c + "%22%7d%7d&minver=7.2.5.0&toolbaricons=%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D&menumode=2&prev=" + encodeURIComponent(v),
                                androidCommand: {
                                    intent: "intent:#Intent;launchFlags=0x10000000;component=com.baidu.searchbox/.discovery.picture.PictureBrowseActivity;S.context=%7B%22nid%22%3A%22news_" + c + "%22%7D;end",
                                    "class": "com.baidu.searchbox.discovery.picture.PictureBrowseActivity",
                                    mode: "0",
                                    min_v: "16789248"
                                },
                                from: a.from || "",
                                channel: a.channel || "",
                                extLog: a.extLog || ""
                            };
                        if (a.rewriteFailUrl) {
                            var b = h(a.failUrl);
                            g.failUrl = b, g.failCallback = function() {
                                location.href = b
                            }
                        }
                        setTimeout(function() {
                            try {
                                window.shareOpenBox = window.OpenBox(g), window.shareOpenBox.ready(function() {
                                    window.shareOpenBox.open()
                                })
                            } catch (a) {
                                console.log("invokeBaiduAppGrally fail", a)
                            }
                        }, 300)
                    }
                }), a.addRequestHandle("videoInvokeApp", function(e) {
                    if ("BdBox" === e.app) {
                        var c = e.action;
                        if (window.OpenBox) try {
                            var h = window.OpenBox({
                                iosScheme: c.iosScheme,
                                androidCommand: JSON.parse(c.androidCommand || "{}"),
                                from: c.from || "neibu_wise_shipin",
                                channel: c.channel || "1020191d",
                                overwrite: "1" === c.overwrite ? 1 : 0,
                                failUrl: c.failUrl,
                                failCallback: c.failCallback ? function() {
                                    a.sendMessage(pe[ae.index].contentWindow, {
                                        event: "videoInvokeFail"
                                    }, !1)
                                } : ""
                            });
                            h.ready(function() {
                                h.open()
                            })
                        } catch (e) {}
                    } else if ("HaoKan" === e.app || "Minivideo" === e.app) try {
                        var v = e.action,
                            g = v.HkUlink,
                            b = v.HkScheme,
                            w = v.QMAppLink,
                            y = v.HkDownloadurl,
                            S = e.useAppLink;
                        y.hkDownloadTimeout = v.HkDownloadTimeout || 0;
                        var _ = function() {
                                return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? Boolean(parseInt(navigator.userAgent.replace(/^.*OS ([\d_]+) like.*$/, "$1").split("_")[0], 10) > 8) : !1
                            },
                            k = function() {
                                return /iphone|ipad|ipod/i.test(navigator.userAgent)
                            },
                            T = function() {
                                return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
                            },
                            $ = function() {
                                return /^(?!.*Safari).*QQ/.test(navigator.userAgent)
                            },
                            E = "https://m.baidu.com",
                            C = function(a) {
                                function c(a) {
                                    setTimeout(function() {
                                        window.location.href = a.pkgurl || v.errorUrl
                                    }, a.hkDownloadTimeout || 0)
                                }

                                function h(a) {
                                    var c = document.createElement("iframe");
                                    c.src = a, c.style.display = "none", document.body.appendChild(c), window.setTimeout(function() {
                                        document.body.removeChild(c)
                                    }, 300)
                                }
                                var v = this;
                                (!a.pkgName || a.brandList && !a.brandList.length) && c(a);
                                var g = navigator.userAgent,
                                    b = "",
                                    w = !1,
                                    y = a.brandList || ["xiaomi", "samsung", "huawei", "oppo", "vivo"],
                                    S = {
                                        xiaomi: {
                                            reg: /\(.*Android.*(MI|Mi|Redmi|HM NOTE| 201\d{4} Build).*\)|Android.*XiaoMi/,
                                            scheme: "mimarket://details?id=${0}&back=true"
                                        },
                                        samsung: {
                                            reg: /\(.*Android.*(SAMSUNG|SM-|GT-).*\)/,
                                            scheme: "samsungapps://ProductDetail/${0}"
                                        },
                                        huawei: {
                                            reg: /\(.*Android.*(HUAWEI|HONOR|HW-|H60-).*\)|^HONOR|^HUAWEI/i,
                                            scheme: "appmarket://details?id=${0}"
                                        },
                                        oppo: {
                                            reg: /Android.*(OPPO|A31.? Build|R\d+(Plus)? Build)|Android.*OppoBrowser|^OPPO/,
                                            scheme: "oppomarket://details?packagename=${0}",
                                            downloadFirst: !0
                                        },
                                        vivo: {
                                            reg: /\(.*Android.*(vivo|VIVO).*\)/,
                                            scheme: "vivomarket://details?id=${0}"
                                        }
                                    };
                                y.forEach(function(c) {
                                    if (S.hasOwnProperty(c)) {
                                        var h = S[c];
                                        if (h.reg.test(g)) return b = h.scheme.replace("${0}", a.pkgName), w = h.downloadFirst || !1, !1
                                    }
                                });
                                var _ = [/liebaofast/gi];
                                return _.forEach(function(a) {
                                    return a.test(g) ? (b = "", !1) : void 0
                                }), b ? void(w ? (c(a), setTimeout(function() {
                                    h(b)
                                }, 300)) : (h(b), setTimeout(function() {
                                    c(a)
                                }, 300))) : void c(a)
                            };
                        if (_()) window.location.href = g;
                        else if ("Minivideo" === e.app && S && w) window.location.href = w;
                        else {
                            var P;
                            P = document.createElement("iframe"), P.src = b, P.style.display = "none", document.body.appendChild(P), window.setTimeout(function() {
                                try {
                                    if (document.body.removeChild(P), T() || $()) window.location.href = y.yybao || E;
                                    else if (k()) window.location.href = y.ios || E;
                                    else {
                                        if (y.pkgName) return void C(y);
                                        setTimeout(function() {
                                            window.location.href = y.pkgurl || E
                                        }, y.hkDownloadTimeout || 0)
                                    }
                                } catch (e) {}
                            }, 300)
                        }
                    } catch (e) {}
                }), a.addRequestHandle("subscript", function(e) {
                    var a = $("#" + fe).find(".sf-frame ul"),
                        c = "subscript",
                        h = document.createElement("script");
                    a.length && (a.append('<div id="subscript"></div>'), h.onload = function() {
                        console.log("load subscriptJs success"), bdTag($.extend(e.data, {
                            tarDomId: c
                        }))
                    }, h.onerror = function() {
                        console.log("load subscriptJs error")
                    }, h.src = "https://jadyoap.bj.bcebos.com/tag.js?_v=" + Math.floor((new Date).getTime() / 36e5), document.getElementsByTagName("body")[0].appendChild(h))
                }), $(window).on("orientationchange", function() {
                    setTimeout(function() {
                        a.sendMessage(pe[ae.index].contentWindow, {
                            event: "getWWidth",
                            width: $(window).width()
                        }, !1)
                    }, 100)
                }), $(".sf-title").on("click", "a", function(e) {
                    e.preventDefault();
                    var a = {},
                        c = {},
                        h = this.getAttribute("href");
                    1 === $(".sf-title").data("bjh") && (a = function() {
                        location.href = h
                    }, c = {
                        cst: 2,
                        logExtra: JSON.stringify({
                            rid: "",
                            pos: "head",
                            extra: "",
                            isBaijiahao: "1",
                            isTopic: "0",
                            title: $(".sf-title").find("span").html()
                        })
                    }), 1 === $(".sf-title").data("topic") && (a = function() {
                        location.href = h
                    }, c = {
                        cst: 2,
                        logInfo: "head",
                        logExtra: JSON.stringify({
                            rid: "",
                            pos: "head",
                            extra: "",
                            isBaijiahao: "0",
                            isTopic: "1",
                            title: $(".sf-title").find("span").html()
                        })
                    }), c = $.extend(c, Ce), Ee.send(c, a)
                })
            }

            function h(a) {
                var c = {
                        activity: "wiseindex/tabs/news/activity/newsdetail",
                        state: {
                            linkData: {
                                name: "iframe/mib-iframe",
                                id: "feed",
                                index: 0,
                                url: a
                            }
                        }
                    },
                    h = c.activity + "=" + encodeURIComponent(JSON.stringify(c.state)),
                    v = "#iact=" + encodeURIComponent(h),
                    g = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + v;
                return g
            }

            function C() {
                if (!window.OpenBox) {
                    var a = document.createElement("script");
                    a.src = "https://s.bdstatic.com/common/openjs/openBox.js?_v=" + Math.floor((new Date).getTime() / 36e5), $("head").append(a)
                }
            }

            function P(e) {
                var a = e.height;
                a && $(".sf-frame ul li iframe").css({
                    height: a
                }), $(".sf-frame ul li").removeClass("framelist"), setTimeout(function() {
                    $(".sf-frame ul li").addClass("framelist")
                }, 200)
            }

            function O(c) {
                var h = '<div class="sf-container" id="' + fe + '"><div class="sf-header"><span class="sf-back"><i class="head-icon"></i></span><span class="sf-title hide"></span><span class="sf-tools"><i class="head-icon"></i></span></div><div class="sf-frame"><ul class="sf-wrap"></ul></div><div class="sf-pagenum"><span></span></div></div>';
                $("body").append(h), me = $("#" + fe), ie = me.find(".sf-header"), oe = me.find(".sf-frame"), he = me.find(".sf-frame ul");
                var v = "";
                if (we.recommendCall) {
                    var g = '<div class="sf-middle-page"><div class="sf-middle-page-header"><i class="c-icon">&#xe783</i></div><div class="sf-middle-page-content"><p>百度根据您的兴趣</p><p>推荐了更多优质资源</p><p style="font-size:34px">希望您能喜欢</p><img src="//www.baidu.com/nocache/zhixin/speed/sf-middle-bg.png"></div><div class="sf-middle-page-footer"><p>查看感兴趣的新闻</p><p><i class="c-icon">&#xe619</i></p></div></div>';
                    $("body").append(g), $(".sf-middle-page-footer").bind("click", function(e) {
                        e.stopPropagation(), $(".sf-middle-page").css({
                            display: "none!important"
                        }), Pe(), B.activity.pushState({
                            activity: "wise_sf_news/feed"
                        })
                    })
                }
                var b = ce;
                if (v = 'scrolling="yes"', b)
                    for (var i = 0; i < b.length; i++) {
                        var w = b[i].url;
                        he.append('<li class="framelist"><iframe name="' + se + i + '" src="about:blank" data-src="' + w + '" sandbox="allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals" ' + v + " ></li>")
                    } else he.append('<li class="framelist"><iframe name="' + se + i + '" src="about:blank" sandbox="allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals" ' + v + " ></li>");
                he.append('<div class="c-loading vhide"><i class = "c-circles"></i><i class="c-icons"></i><p>加载中…</p></div>'), he.append('<div class="c-offline hide"><div class ="icons"></div><p>网络不给力，请稍后重试</p></div>'), he.append(ke && ke.indexOf("111141") > -1 ? '<div class="c-back"><div class="back-feed"></div><div class="back-top"></div></div>' : '<div class="c-back"><div class="back-top"></div></div>'), pe = me.find(".sf-frame iframe"), ue = me.find(".sf-frame li"), me.find(".sf-back").on("click", function(e) {
                    if (ke && ke.indexOf("111140") > -1) {
                        var a = A,
                            c = {
                                cst: 2,
                                logInfo: "head",
                                logExtra: JSON.stringify({
                                    rid: "",
                                    pos: "head",
                                    extra: "",
                                    title: "backfeed"
                                })
                            };
                        c = $.extend(c, Ce), Ee.send(c, a)
                    } else B.activity ? B.activity.back() : history.back();
                    e.stopPropagation(), e.preventDefault()
                }), me.find(".sf-tools").on("click", function() {
                    if ($(".c-popup-wrapper").length > 0 && "none" === $(".c-popup-wrapper").css("display")) return void $(".c-popup-wrapper").show();
                    var h = ce[ae.index].url,
                        v = {};
                    c.linkData.isThird ? (v = {
                        title: "百度分享",
                        content: "",
                        iconUrl: "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg",
                        origin: "百度分享",
                        isVideo: 0,
                        log: {},
                        url: c.linkData.url,
                        isThird: !0
                    }, I(v)) : a.sendMessage(pe[ae.index].contentWindow, {
                        event: "getShareInfo"
                    }, !0).done(function(a) {
                        var c = a.data || {};
                        if (v.title = c.title || "百度分享", v.content = c.content || "", v.iconUrl = c.iconUrl || "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg", v.origin = c.origin || "百度分享", v.isVideo = c.isVideo || 0, v.log = c.log || {}, c.isVideo) v.url = h;
                        else if ("topicList" === c.pageTag) v.url = c.topicLink;
                        else {
                            var g = h.match(/nid=([\d]*)&/),
                                b = "";
                            b = g ? encodeURIComponent('{"nid":"news_' + g[1] + '"}') : R(h, "context"), v.url = "//po.baidu.com/feed/share?isWiseFrom=1&isBdboxShare=1&context=" + b
                        }
                        I(v)
                    })
                }), me.find(".back-top").on("click", function() {
                    var c = function() {
                            a.sendMessage(pe[ae.index].contentWindow, {
                                event: "backToTop"
                            }, !1)
                        },
                        h = {
                            cst: 2,
                            logInfo: "btm_tools",
                            logExtra: JSON.stringify({
                                rid: "",
                                pos: "2",
                                extra: "",
                                title: "backTop"
                            })
                        };
                    h = $.extend(h, Ce), Ee.send(h, c)
                }), me.find(".back-feed").on("click", function() {
                    var a = A,
                        c = {
                            cst: 2,
                            logInfo: "btm_tools",
                            logExtra: JSON.stringify({
                                rid: "",
                                pos: "1",
                                extra: "",
                                title: "backfeed"
                            })
                        };
                    c = $.extend(c, Ce), Ee.send(c, a)
                })
            }

            function I(a) {
                require(["wiseindex/tabs/news/activity/tool"], function(c) {
                    ee = new c($.extend({}, a, {
                        loginfo: {
                            clk_from: "wise_news"
                        },
                        custom: []
                    }))
                }), L()
            }

            function H() {
                var a = $("iframe").attr("src");
                if (a.indexOf("videoland") > -1) {
                    w = "neibu_wise_shipin_luodiye_yemianfuceng", y = "1019447l", S = "recdetail_video", _ = encodeURIComponent(a);
                    var c = new g({
                        parentDome: ".c-back",
                        content: "有事搜一搜，没事看一看",
                        openType: "url",
                        targetHref: _,
                        bfFrom: w,
                        bfChannel: y,
                        lsName: S,
                        logFrom: "",
                        logInfo: "",
                        logExtra: ""
                    })
                } else if (a.indexOf("imageland") > -1) {
                    _ = encodeURIComponent(a);
                    var h = /nid=(\d+)/i.exec(a)[1],
                        c = new g({
                            parentDome: ".c-back",
                            openType: "scheme",
                            targetHref: _,
                            bfFrom: w,
                            bfChannel: y,
                            lsName: S,
                            tplType: "shareEntry",
                            nid: h,
                            logFrom: "",
                            logInfo: "",
                            logExtra: {
                                from: "landingAlbum"
                            },
                            pagetype: 8
                        })
                } else {
                    var v = a.match(/nid=(\d+)/i),
                        b = "",
                        h = "";
                    v ? (h = v[1], b = '{"nid":"news_' + v[1] + '","sourceFrom":"bjh"}') : (b = decodeURIComponent(R(a, "context")), h = JSON.parse(b).nid, h = h.split("_")[1]), _ = encodeURIComponent("https://po.baidu.com/feed/share?isBdboxShare=1&context=" + b);
                    var c = new g({
                        parentDome: ".c-back",
                        content: "有事搜一搜，没事看一看",
                        openType: "scheme",
                        targetHref: _,
                        bfFrom: w,
                        bfChannel: y,
                        lsName: S,
                        tplType: "shareEntry",
                        nid: h,
                        logFrom: "",
                        logInfo: "",
                        logExtra: {
                            from: "landingWise"
                        }
                    })
                }
                c._updateIsShow() && $("#bottom").data("bfshow", "1")
            }

            function A() {
                B.activity.pushState({
                    activity: "base"
                })
            }

            function D(a) {
                var s = "";
                for (var c in a) {
                    var h = a[c];
                    null !== h && void 0 !== h && (s.length > 0 && (s += "&"), s += encodeURIComponent(c) + "=" + encodeURIComponent(h))
                }
                return s
            }

            function U() {
                ge && setTimeout(function() {
                    ue.css({
                        "overflow-y": "auto"
                    })
                }, 200)
            }

            function W(a, c) {
                var h = pe.eq(a),
                    v = {
                        viewportType: "virtual",
                        paddingTop: "54",
                        from: we.id,
                        pageType: "",
                        pageInfo: ""
                    },
                    g = "",
                    c = c ? c + "#" + D(v) : "about:blank";
                g = 'scrolling="yes"', h.replaceWith('<iframe name="' + se + a + '" src="' + c + '" data-src="' + h.attr("data-src") + '" sandbox="allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals allow-top-navigation" ' + g + " >"), pe = me.find(".sf-frame iframe"), pe.css({
                    height: "100%"
                })
            }

            function M(a, c, h) {
                var v = a.url;
                ce || (ce = [], ce.push(a));
                var g = /^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/,
                    b = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                    w = (v.match(b), pe.eq(c), a.isThird);
                if ((/^https?:\/\/([^\/]+)\.baidu\.com.*/.test(v) || w) && g.test(v)) {
                    var y = Y(v);
                    return Te.join().indexOf(y) > -1 ? void console.log("命中黑名单") : (ae.index = c, X(c, v), h.resolve(), "about:blank" == pe.eq(c).attr("src") && W(c, v), !0)
                }
            }

            function X() {}

            function F(a) {
                var c;
                return c = a.indexOf("://") > -1 ? a.split("/")[2] : a.split("/")[0], c = c.split(":")[0], c = c.split("?")[0]
            }

            function Y(a) {
                var c = F(a),
                    h = c.split("."),
                    v = h.length;
                return v > 2 && (c = h[v - 2] + "." + h[v - 1]), c
            }

            function R(a, c) {
                var h = new RegExp("(^|(&|/?))" + c + "=([^&]*)(&|$)", "i"),
                    r = a.match(h);
                return null !== r ? r[3] : null
            }

            function N() {
                var a = R(window.location.href, "from"),
                    c = ["1001192y", "1021611l", "1001192w", "1021611b", "1021611n", "1021611s", "1022688c", "1021611r"];
                return !~c.indexOf(a)
            }

            function j(a) {
                a.resolve()
            }

            function L() {
                Se && k.B.thunderLog.send({
                    tid: 1383,
                    logFrom: "recdetail",
                    logInfo: "dura",
                    duration: +new Date - ye,
                    cst: 8,
                    logExtra: JSON.stringify({
                        ext: k.sSession.duraext,
                        page: _e,
                        rid: Se,
                        detailLogId: xe
                    })
                })
            }

            function z(a) {
                for (var c in a) return !1;
                return !0
            }

            function J() {}

            function Q(e) {
                var a = e.data,
                    c = a.event,
                    h = (ae.index, this),
                    v = (me.find(".sf-pagenum"), {
                        touchstart: function() {},
                        loadiframe: function() {
                            B.activity.pushState({
                                activity: "wiseindex/tabs/news/activity/newsdetail",
                                state: {
                                    name: "iframe/mib-iframe-sub",
                                    id: "sub",
                                    index: 0,
                                    linkData: {
                                        url: "//mib.bdstatic.com/doc/detail/" + encodeURIComponent(a.data.url) + "/" + b + "/?lid=" + sSession.logid,
                                        title: a.data.title
                                    }
                                }
                            })
                        },
                        urljump: function() {
                            location.href = a.data.url
                        },
                        webbLog: function() {},
                        jqHandle: function() {
                            var c = a.data,
                                h = $(c.selector);
                            h[c.handle].apply(h, c.params)
                        },
                        login: function() {
                            var c = {
                                tpl: "wimn",
                                u: window.location.href
                            };
                            location.href = a.data.url + $.param(c)
                        }
                    });
                "function" == typeof v[c] && v[c].call(h)
            }

            function V() {
                var a = $.Deferred();
                return j(a), window.B.thunderLog.send({
                    sessionTime: +new Date - ye,
                    cst: 8,
                    nid: window.sSession.nid4log,
                    detailLogId: xe
                }), a
            }

            function Z(a) {
                var a = a || {},
                    c = (a.name, a.linkData),
                    h = c.url;
                _e = "text", Se = K(h, "nid", "context");
                var v = 0;
                ye = +new Date, $(window).bind("message", Q), $(window).on("orientationchange", J), $(window).on("resize", J);
                var g = $.Deferred();
                return M(c, v, g), g
            }

            function K(a, c, h) {
                var v = new RegExp("(^|&)" + c + "=([^&]*)(&|$)"),
                    r = decodeURI(a).substr(1).match(v),
                    g = a.split("?"),
                    b = g[1] || g[0],
                    w = b.split("&"),
                    y = {};
                return w.forEach(function(a) {
                    if (a = a.split("="), a[0].length > 0) {
                        var c = "";
                        try {
                            c = decodeURIComponent(a[1]) || ""
                        } catch (e) {}
                        y[a[0]] = c
                    }
                }), null != r ? unescape(r[2]) : y[h] && JSON.parse(y[h])[c]
            }

            function G(a) {
                a = a || {}, "undefined" != typeof a.version && (b = a.version), E.init(a)
            }

            function te(a) {
                Pe(), G(a), Z(a)
            }
            var ee, ie, oe, se = "__SF__",
                ae = {},
                ce = [],
                pe = [],
                he = [],
                ue = [],
                fe = "",
                me = "",
                ve = window.navigator.userAgent,
                ge = /iPhone|iPad|iPod/i.test(ve),
                be = (/UCBrowser/i.test(ve), /Chrome|CriOS/i.test(ve)),
                we = (/Safari/i.test(ve) && !be, B.ls && B.ls.get("wise", "sf", "firstRead") || null, {}),
                ye = ($('<style id="sf_detail_style"></style>'), 0),
                xe = "",
                Se = "",
                _e = "",
                ke = window.sSession.sids,
                Te = ["kfc.ysrmo.cn"],
                $e = {},
                Ee = v.create({
                    baseParams: {
                        ct: 1,
                        logFrom: "recdetail"
                    }
                }),
                Ce = {
                    logid: window.sSession.logid,
                    ssid: window.sSession.ssid,
                    sid: window.sSession.sids
                },
                Pe = function() {
                    $(window).unbind("message", Q), me.remove(), $(".sf-middle-page").remove(), ee && ee.close(), !z($e) && $e.closePopup(), L()
                };
            T.prototype.start = Z, T.prototype.init = c, T.prototype.stop = V, T.prototype.change = te, T.prototype.create = G, T.prototype.destroy = Pe
        },
        E = new T;
    return {
        start: E.start,
        stop: E.stop,
        create: E.create,
        change: E.change,
        destroy: E.destroy
    }
});