function MobilePromo(e) {
    "object" == typeof e && (e.cooloffDays = e.cooloffDays || 7, this.config = e, this.init())
}

function MessageBar(e) {
    this.config = e || {}, this.slideDownTime = this.config.slideDownTime || 500, this.init()
}
var ssClientUtils = function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        a = r(i),
        o = n(3),
        s = r(o),
        u = n(4),
        m = r(u),
        c = n(5),
        d = r(c),
        l = n(2),
        h = r(l),
        p = n(6),
        y = r(p),
        f = n(17),
        g = r(f),
        v = n(19),
        b = r(v),
        _ = n(20),
        w = r(_);
    t["default"] = {
        li: a,
        tracking: s,
        lang: m,
        fn: d,
        string: h,
        svg: y,
        events: g,
        dom: b,
        url: w
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!e) return null;
        var n = o[e];
        return n || (n = "slideShare" + (0, a.capitalize)(e)), [s, n, t].join(":")
    }

    function i() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? document.body : arguments[0],
            t = /^pagekey-(.*)/.exec(e.id);
        if (t && t[1]) return t[1]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getUrn = r, t.getPageKey = i;
    var a = n(2),
        o = {
            clip: "slideShareClip",
            clipboard: "slideShareClipboard",
            guest: "slideShareGuest",
            slideshow: "slideShareSlideshow",
            user: "slideShareUser"
        },
        s = "urn:li"
}, function(e, t) {
    "use strict";

    function n(e) {
        return "string" == typeof e ? e.charAt(0).toUpperCase() + e.substring(1) : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.capitalize = n
}, function(e, t) {
    "use strict";

    function n() {
        var e = document.querySelector('meta[name="' + r + '"]');
        return e ? e.getAttribute("content") : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getGlobalTrackingUrl = n;
    var r = "globalTrackingUrl"
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Boolean(t && e && e.prototype && e.prototype instanceof t)
    }

    function i(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.reduce(function(e, t) {
            return o(t).forEach(function(t) {
                var n = s(t, 2),
                    r = n[0],
                    i = n[1];
                e[r] = i
            }), e
        }, e)
    }

    function a(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.reduce(function(e, t) {
            return o(t).forEach(function(t) {
                var n = s(t, 2),
                    r = n[0],
                    i = n[1];
                m(e, r) || (e[r] = i)
            }), e
        }, e)
    }

    function o(e) {
        return Object.keys(e).map(function(t) {
            return [t, e[t]]
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
            } catch (u) {
                i = !0, a = u
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.isDescendantClass = r, t.assign = i, t.defaults = a, t.entries = o;
    var u = n(5),
        m = (0, u.imperative)(Object.prototype.hasOwnProperty),
        c = (0, u.imperative)(Array.prototype.slice),
        d = function(e) {
            return c(e)
        };
    t.toArray = d
}, function(e, t) {
    "use strict";

    function n(e) {
        return function() {
            return r.apply(e, arguments)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.imperative = n;
    var r = Function.prototype.call
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0],
            t = arguments.length <= 1 || void 0 === arguments[1] ? "ss-svg-icons" : arguments[1],
            n = (0, s.toArray)(e.querySelectorAll('meta[name="' + t + '"]'));
        return n.map(function(e) {
            return e.getAttribute("content")
        })
    }

    function a(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? document.body : arguments[1],
            n = e.firstChild;
        n.style.display = "none", t.insertBefore(n, t.firstChild)
    }

    function o() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0],
            t = arguments.length <= 1 || void 0 === arguments[1] ? document.body : arguments[1],
            n = i(e).map(function(e) {
                return (0, c.requestXml)(e).then(function(e) {
                    return a(e, t)
                })
            });
        return m["default"].all(n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSvgUrls = i, t.injectSvg = a, t.loadSvgs = o;
    var s = n(4),
        u = n(7),
        m = r(u),
        c = n(16)
}, function(e, t, n) {
    "use strict";
    e.exports = n(8), n(13), n(14), n(15)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        function t(e) {
            return null === u ? void c.push(e) : void o(function() {
                var t = u ? e.onFulfilled : e.onRejected;
                if (null === t) return void(u ? e.resolve : e.reject)(m);
                var n;
                try {
                    n = t(m)
                } catch (r) {
                    return void e.reject(r)
                }
                e.resolve(n)
            })
        }

        function n(e) {
            try {
                if (e === d) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var t = e.then;
                    if ("function" == typeof t) return void a(t.bind(e), n, r)
                }
                u = !0, m = e, s()
            } catch (i) {
                r(i)
            }
        }

        function r(e) {
            u = !1, m = e, s()
        }

        function s() {
            for (var e = 0, n = c.length; e < n; e++) t(c[e]);
            c = null
        }
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        var u = null,
            m = null,
            c = [],
            d = this;
        this.then = function(e, n) {
            return new d.constructor(function(r, a) {
                t(new i(e, n, r, a))
            })
        }, a(e, n, r)
    }

    function i(e, t, n, r) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
    }

    function a(e, t, n) {
        var r = !1;
        try {
            e(function(e) {
                r || (r = !0, t(e))
            }, function(e) {
                r || (r = !0, n(e))
            })
        } catch (i) {
            if (r) return;
            r = !0, n(i)
        }
    }
    var o = n(9);
    e.exports = r
}, function(e, t, n) {
    (function(t, n) {
        function r() {
            for (; a.next;) {
                a = a.next;
                var e = a.task;
                a.task = void 0;
                var t = a.domain;
                t && (a.domain = void 0, t.enter());
                try {
                    e()
                } catch (n) {
                    if (m) throw t && t.exit(), setTimeout(r, 0), t && t.enter(), n;
                    setTimeout(function() {
                        throw n
                    }, 0)
                }
                t && t.exit()
            }
            s = !1
        }

        function i(e) {
            o = o.next = {
                task: e,
                domain: m && t.domain,
                next: null
            }, s || (s = !0, u())
        }
        var a = {
                task: void 0,
                next: null
            },
            o = a,
            s = !1,
            u = void 0,
            m = !1;
        if ("undefined" != typeof t && t.nextTick) m = !0, u = function() {
            t.nextTick(r)
        };
        else if ("function" == typeof n) u = "undefined" != typeof window ? n.bind(window, r) : function() {
            n(r)
        };
        else if ("undefined" != typeof MessageChannel) {
            var c = new MessageChannel;
            c.port1.onmessage = r, u = function() {
                c.port2.postMessage(0)
            }
        } else u = function() {
            setTimeout(r, 0)
        };
        e.exports = i
    }).call(t, n(10), n(11).setImmediate)
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function o() {
        y && h && (y = !1, h.length ? p = h.concat(p) : f = -1, p.length && s())
    }

    function s() {
        if (!y) {
            var e = i(o);
            y = !0;
            for (var t = p.length; t;) {
                for (h = p, p = []; ++f < t;) h && h[f].run();
                f = -1, t = p.length
            }
            h = null, y = !1, a(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    var c, d, l = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            d = r
        }
    }();
    var h, p = [],
        y = !1,
        f = -1;
    l.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new u(e, t)), 1 !== p.length || y || i(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = m, l.addListener = m, l.once = m, l.off = m, l.removeListener = m, l.removeAllListeners = m, l.emit = m, l.prependListener = m, l.prependOnceListener = m, l.listeners = function(e) {
        return []
    }, l.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, l.cwd = function() {
        return "/"
    }, l.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, l.umask = function() {
        return 0
    }
}, function(e, t, n) {
    (function(e) {
        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        var i = "undefined" != typeof e && e || "undefined" != typeof self && self || window,
            a = Function.prototype.apply;
        t.setTimeout = function() {
            return new r(a.call(setTimeout, i, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new r(a.call(setInterval, i, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(i, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(12), t.setImmediate = "undefined" != typeof self && self.setImmediate || "undefined" != typeof e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || "undefined" != typeof e && e.clearImmediate || this && this.clearImmediate
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";

            function r(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var r = {
                    callback: e,
                    args: t
                };
                return y[p] = r, h(p), p++
            }

            function i(e) {
                delete y[e]
            }

            function a(e) {
                var t = e.callback,
                    r = e.args;
                switch (r.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(r[0]);
                        break;
                    case 2:
                        t(r[0], r[1]);
                        break;
                    case 3:
                        t(r[0], r[1], r[2]);
                        break;
                    default:
                        t.apply(n, r)
                }
            }

            function o(e) {
                if (f) setTimeout(o, 0, e);
                else {
                    var t = y[e];
                    if (t) {
                        f = !0;
                        try {
                            a(t)
                        } finally {
                            i(e), f = !1
                        }
                    }
                }
            }

            function s() {
                h = function(e) {
                    t.nextTick(function() {
                        o(e)
                    })
                }
            }

            function u() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                        n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    }, e.postMessage("", "*"), e.onmessage = n, t
                }
            }

            function m() {
                var t = "setImmediate$" + Math.random() + "$",
                    n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                    };
                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), h = function(n) {
                    e.postMessage(t + n, "*")
                }
            }

            function c() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    var t = e.data;
                    o(t)
                }, h = function(t) {
                    e.port2.postMessage(t)
                }
            }

            function d() {
                var e = g.documentElement;
                h = function(t) {
                    var n = g.createElement("script");
                    n.onreadystatechange = function() {
                        o(t), n.onreadystatechange = null, e.removeChild(n), n = null
                    }, e.appendChild(n)
                }
            }

            function l() {
                h = function(e) {
                    setTimeout(o, 0, e)
                }
            }
            if (!e.setImmediate) {
                var h, p = 1,
                    y = {},
                    f = !1,
                    g = e.document,
                    v = Object.getPrototypeOf && Object.getPrototypeOf(e);
                v = v && v.setTimeout ? v : e, "[object process]" === {}.toString.call(e.process) ? s() : u() ? m() : e.MessageChannel ? c() : g && "onreadystatechange" in g.createElement("script") ? d() : l(), v.setImmediate = r, v.clearImmediate = i
            }
        }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
    }).call(t, function() {
        return this
    }(), n(10))
}, function(e, t, n) {
    "use strict";
    var r = n(8),
        i = n(9);
    e.exports = r, r.prototype.done = function(e, t) {
        var n = arguments.length ? this.then.apply(this, arguments) : this;
        n.then(null, function(e) {
            i(function() {
                throw e
            })
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.then = function(t) {
            return "function" != typeof t ? this : new i(function(n, r) {
                a(function() {
                    try {
                        n(t(e))
                    } catch (i) {
                        r(i)
                    }
                })
            })
        }
    }
    var i = n(8),
        a = n(9);
    e.exports = i, r.prototype = i.prototype;
    var o = new r((!0)),
        s = new r((!1)),
        u = new r(null),
        m = new r((void 0)),
        c = new r(0),
        d = new r("");
    i.resolve = function(e) {
        if (e instanceof i) return e;
        if (null === e) return u;
        if (void 0 === e) return m;
        if (e === !0) return o;
        if (e === !1) return s;
        if (0 === e) return c;
        if ("" === e) return d;
        if ("object" == typeof e || "function" == typeof e) try {
            var t = e.then;
            if ("function" == typeof t) return new i(t.bind(e))
        } catch (n) {
            return new i(function(e, t) {
                t(n)
            })
        }
        return new r(e)
    }, i.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new i(function(e, n) {
            function r(a, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var s = o.then;
                        if ("function" == typeof s) return void s.call(o, function(e) {
                            r(a, e)
                        }, n)
                    }
                    t[a] = o, 0 === --i && e(t)
                } catch (u) {
                    n(u)
                }
            }
            if (0 === t.length) return e([]);
            for (var i = t.length, a = 0; a < t.length; a++) r(a, t[a])
        })
    }, i.reject = function(e) {
        return new i(function(t, n) {
            n(e)
        })
    }, i.race = function(e) {
        return new i(function(t, n) {
            e.forEach(function(e) {
                i.resolve(e).then(t, n)
            })
        })
    }, i.prototype["catch"] = function(e) {
        return this.then(null, e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(8),
        i = n(9);
    e.exports = r, r.denodeify = function(e, t) {
        return t = t || 1 / 0,
            function() {
                var n = this,
                    i = Array.prototype.slice.call(arguments);
                return new r(function(r, a) {
                    for (; i.length && i.length > t;) i.pop();
                    i.push(function(e, t) {
                        e ? a(e) : r(t)
                    });
                    var o = e.apply(n, i);
                    !o || "object" != typeof o && "function" != typeof o || "function" != typeof o.then || r(o)
                })
            }
    }, r.nodeify = function(e) {
        return function() {
            var t = Array.prototype.slice.call(arguments),
                n = "function" == typeof t[t.length - 1] ? t.pop() : null,
                a = this;
            try {
                return e.apply(this, arguments).nodeify(n, a)
            } catch (o) {
                if (null === n || "undefined" == typeof n) return new r(function(e, t) {
                    t(o)
                });
                i(function() {
                    n.call(a, o)
                })
            }
        }
    }, r.prototype.nodeify = function(e, t) {
        return "function" != typeof e ? this : void this.then(function(n) {
            i(function() {
                e.call(t, null, n)
            })
        }, function(n) {
            i(function() {
                e.call(t, n)
            })
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? "get" : arguments[1],
            n = new XMLHttpRequest;
        n.open(t, e, !0);
        var r = new s["default"](function(e, t) {
            n.addEventListener("readystatechange", function() {
                4 === this.readyState && (this.status >= 200 && this.status < 400 ? e(this) : t(this))
            })
        });
        return n.send(), r
    }

    function a(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? "get" : arguments[1];
        return i(e, t).then(function(e) {
            return e.responseXML
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.request = i, t.requestXml = a;
    var o = n(7),
        s = r(o)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            t = new s["default"];
        return (0, u.entries)(m).filter(function(e) {
            var t = a(e, 2),
                n = t[1];
            return "function" == typeof n
        }).forEach(function(n) {
            var r = a(n, 2),
                i = r[0],
                o = r[1];
            return e[i] = o.bind(t)
        }), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
            } catch (u) {
                i = !0, a = u
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.mixin = i;
    var o = n(18),
        s = r(o),
        u = n(4),
        m = s["default"].prototype
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        this.fn = e, this.context = t, this.once = n || !1
    }

    function i() {}
    var a = Object.prototype.hasOwnProperty,
        o = "function" != typeof Object.create && "~";
    i.prototype._events = void 0, i.prototype.eventNames = function() {
        var e, t = this._events,
            n = [];
        if (!t) return n;
        for (e in t) a.call(t, e) && n.push(o ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
    }, i.prototype.listeners = function(e, t) {
        var n = o ? o + e : e,
            r = this._events && this._events[n];
        if (t) return !!r;
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var i = 0, a = r.length, s = new Array(a); i < a; i++) s[i] = r[i].fn;
        return s
    }, i.prototype.emit = function(e, t, n, r, i, a) {
        var s = o ? o + e : e;
        if (!this._events || !this._events[s]) return !1;
        var u, m, c = this._events[s],
            d = arguments.length;
        if ("function" == typeof c.fn) {
            switch (c.once && this.removeListener(e, c.fn, void 0, !0), d) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, t), !0;
                case 3:
                    return c.fn.call(c.context, t, n), !0;
                case 4:
                    return c.fn.call(c.context, t, n, r), !0;
                case 5:
                    return c.fn.call(c.context, t, n, r, i), !0;
                case 6:
                    return c.fn.call(c.context, t, n, r, i, a), !0
            }
            for (m = 1, u = new Array(d - 1); m < d; m++) u[m - 1] = arguments[m];
            c.fn.apply(c.context, u)
        } else {
            var l, h = c.length;
            for (m = 0; m < h; m++) switch (c[m].once && this.removeListener(e, c[m].fn, void 0, !0), d) {
                case 1:
                    c[m].fn.call(c[m].context);
                    break;
                case 2:
                    c[m].fn.call(c[m].context, t);
                    break;
                case 3:
                    c[m].fn.call(c[m].context, t, n);
                    break;
                default:
                    if (!u)
                        for (l = 1, u = new Array(d - 1); l < d; l++) u[l - 1] = arguments[l];
                    c[m].fn.apply(c[m].context, u)
            }
        }
        return !0
    }, i.prototype.on = function(e, t, n) {
        var i = new r(t, n || this),
            a = o ? o + e : e;
        return this._events || (this._events = o ? {} : Object.create(null)), this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : this._events[a] = i, this
    }, i.prototype.once = function(e, t, n) {
        var i = new r(t, n || this, (!0)),
            a = o ? o + e : e;
        return this._events || (this._events = o ? {} : Object.create(null)), this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : this._events[a] = i, this
    }, i.prototype.removeListener = function(e, t, n, r) {
        var i = o ? o + e : e;
        if (!this._events || !this._events[i]) return this;
        var a = this._events[i],
            s = [];
        if (t)
            if (a.fn)(a.fn !== t || r && !a.once || n && a.context !== n) && s.push(a);
            else
                for (var u = 0, m = a.length; u < m; u++)(a[u].fn !== t || r && !a[u].once || n && a[u].context !== n) && s.push(a[u]);
        return s.length ? this._events[i] = 1 === s.length ? s[0] : s : delete this._events[i], this
    }, i.prototype.removeAllListeners = function(e) {
        return this._events ? (e ? delete this._events[o ? o + e : e] : this._events = o ? {} : Object.create(null), this) : this
    }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
        return this
    }, i.prefixed = o, e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0];
        return new o["default"](function(t) {
            "interactive" === e.readyState || "complete" === e.readyState ? t(e) : e.addEventListener("DOMContentLoaded", function() {
                return t(e)
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createContentLoadedPromise = i;
    var a = n(7),
        o = r(a),
        s = i(document);
    t.onContentLoaded = s
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e) {
        if ("string" != typeof e) throw new TypeError("link argument must be a string; found " + typeof e);
        var t = o["default"].parse(e, !0).query;
        if (t) {
            var n = t.trk;
            if (n) return Array.isArray(n) ? n[n.length - 1] : n
        }
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getTrackingCode = i;
    var a = n(21),
        o = r(a)
}, function(e, t, n) {
    function r() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    function i(e, t, n) {
        if (e && m(e) && e instanceof r) return e;
        var i = new r;
        return i.parse(e, t, n), i
    }

    function a(e) {
        return u(e) && (e = i(e)), e instanceof r ? e.format() : r.prototype.format.call(e)
    }

    function o(e, t) {
        return i(e, !1, !0).resolve(t)
    }

    function s(e, t) {
        return e ? i(e, !1, !0).resolveObject(t) : t
    }

    function u(e) {
        return "string" == typeof e
    }

    function m(e) {
        return "object" == typeof e && null !== e
    }

    function c(e) {
        return null === e
    }

    function d(e) {
        return null == e
    }
    var l = n(22);
    t.parse = i, t.resolve = o, t.resolveObject = s, t.format = a, t.Url = r;
    var h = /^([a-z0-9.+-]+:)/i,
        p = /:[0-9]*$/,
        y = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        f = ["{", "}", "|", "\\", "^", "`"].concat(y),
        g = ["'"].concat(f),
        v = ["%", "/", "?", ";", "#"].concat(g),
        b = ["/", "?", "#"],
        _ = 255,
        w = /^[a-z0-9A-Z_-]{0,63}$/,
        k = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
        x = {
            javascript: !0,
            "javascript:": !0
        },
        C = {
            javascript: !0,
            "javascript:": !0
        },
        S = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        A = n(24);
    r.prototype.parse = function(e, t, n) {
        if (!u(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var r = e;
        r = r.trim();
        var i = h.exec(r);
        if (i) {
            i = i[0];
            var a = i.toLowerCase();
            this.protocol = a, r = r.substr(i.length)
        }
        if (n || i || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var o = "//" === r.substr(0, 2);
            !o || i && C[i] || (r = r.substr(2), this.slashes = !0)
        }
        if (!C[i] && (o || i && !S[i])) {
            for (var s = -1, m = 0; m < b.length; m++) {
                var c = r.indexOf(b[m]);
                c !== -1 && (s === -1 || c < s) && (s = c)
            }
            var d, p;
            p = s === -1 ? r.lastIndexOf("@") : r.lastIndexOf("@", s), p !== -1 && (d = r.slice(0, p), r = r.slice(p + 1), this.auth = decodeURIComponent(d)), s = -1;
            for (var m = 0; m < v.length; m++) {
                var c = r.indexOf(v[m]);
                c !== -1 && (s === -1 || c < s) && (s = c)
            }
            s === -1 && (s = r.length), this.host = r.slice(0, s), r = r.slice(s), this.parseHost(), this.hostname = this.hostname || "";
            var y = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!y)
                for (var f = this.hostname.split(/\./), m = 0, T = f.length; m < T; m++) {
                    var D = f[m];
                    if (D && !D.match(w)) {
                        for (var E = "", P = 0, N = D.length; P < N; P++) E += D.charCodeAt(P) > 127 ? "x" : D[P];
                        if (!E.match(w)) {
                            var F = f.slice(0, m),
                                L = f.slice(m + 1),
                                j = D.match(k);
                            j && (F.push(j[1]), L.unshift(j[2])), L.length && (r = "/" + L.join(".") + r), this.hostname = F.join(".");
                            break
                        }
                    }
                }
            if (this.hostname.length > _ ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !y) {
                for (var M = this.hostname.split("."), $ = [], m = 0; m < M.length; ++m) {
                    var R = M[m];
                    $.push(R.match(/[^A-Za-z0-9_-]/) ? "xn--" + l.encode(R) : R)
                }
                this.hostname = $.join(".")
            }
            var O = this.port ? ":" + this.port : "",
                I = this.hostname || "";
            this.host = I + O, this.href += this.host, y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== r[0] && (r = "/" + r))
        }
        if (!x[a])
            for (var m = 0, T = g.length; m < T; m++) {
                var U = g[m],
                    H = encodeURIComponent(U);
                H === U && (H = escape(U)), r = r.split(U).join(H)
            }
        var z = r.indexOf("#");
        z !== -1 && (this.hash = r.substr(z), r = r.slice(0, z));
        var B = r.indexOf("?");
        if (B !== -1 ? (this.search = r.substr(B), this.query = r.substr(B + 1), t && (this.query = A.parse(this.query)), r = r.slice(0, B)) : t && (this.search = "", this.query = {}), r && (this.pathname = r), S[a] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var O = this.pathname || "",
                R = this.search || "";
            this.path = O + R
        }
        return this.href = this.format(), this
    }, r.prototype.format = function() {
        var e = this.auth || "";
        e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            i = !1,
            a = "";
        this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && m(this.query) && Object.keys(this.query).length && (a = A.stringify(this.query));
        var o = this.search || a && "?" + a || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || S[t]) && i !== !1 ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), n = n.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        }), o = o.replace("#", "%23"), t + i + n + o + r
    }, r.prototype.resolve = function(e) {
        return this.resolveObject(i(e, !1, !0)).format()
    }, r.prototype.resolveObject = function(e) {
        if (u(e)) {
            var t = new r;
            t.parse(e, !1, !0), e = t
        }
        var n = new r;
        if (Object.keys(this).forEach(function(e) {
                n[e] = this[e]
            }, this), n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) return Object.keys(e).forEach(function(t) {
            "protocol" !== t && (n[t] = e[t])
        }), S[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
        if (e.protocol && e.protocol !== n.protocol) {
            if (!S[e.protocol]) return Object.keys(e).forEach(function(t) {
                n[t] = e[t]
            }), n.href = n.format(), n;
            if (n.protocol = e.protocol, e.host || C[e.protocol]) n.pathname = e.pathname;
            else {
                for (var i = (e.pathname || "").split("/"); i.length && !(e.host = i.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== i[0] && i.unshift(""), i.length < 2 && i.unshift(""), n.pathname = i.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var a = n.pathname || "",
                    o = n.search || "";
                n.path = a + o
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var s = n.pathname && "/" === n.pathname.charAt(0),
            m = e.host || e.pathname && "/" === e.pathname.charAt(0),
            l = m || s || n.host && e.pathname,
            h = l,
            p = n.pathname && n.pathname.split("/") || [],
            i = e.pathname && e.pathname.split("/") || [],
            y = n.protocol && !S[n.protocol];
        if (y && (n.hostname = "", n.port = null, n.host && ("" === p[0] ? p[0] = n.host : p.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === i[0] ? i[0] = e.host : i.unshift(e.host)), e.host = null), l = l && ("" === i[0] || "" === p[0])), m) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, p = i;
        else if (i.length) p || (p = []), p.pop(), p = p.concat(i), n.search = e.search, n.query = e.query;
        else if (!d(e.search)) {
            if (y) {
                n.hostname = n.host = p.shift();
                var f = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                f && (n.auth = f.shift(), n.host = n.hostname = f.shift())
            }
            return n.search = e.search, n.query = e.query, c(n.pathname) && c(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!p.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var g = p.slice(-1)[0], v = (n.host || e.host) && ("." === g || ".." === g) || "" === g, b = 0, _ = p.length; _ >= 0; _--) g = p[_], "." == g ? p.splice(_, 1) : ".." === g ? (p.splice(_, 1), b++) : b && (p.splice(_, 1), b--);
        if (!l && !h)
            for (; b--; b) p.unshift("..");
        !l || "" === p[0] || p[0] && "/" === p[0].charAt(0) || p.unshift(""), v && "/" !== p.join("/").substr(-1) && p.push("");
        var w = "" === p[0] || p[0] && "/" === p[0].charAt(0);
        if (y) {
            n.hostname = n.host = w ? "" : p.length ? p.shift() : "";
            var f = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            f && (n.auth = f.shift(), n.host = n.hostname = f.shift())
        }
        return l = l || n.host && p.length, l && !w && p.unshift(""), p.length ? n.pathname = p.join("/") : (n.pathname = null, n.path = null), c(n.pathname) && c(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, r.prototype.parseHost = function() {
        var e = this.host,
            t = p.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t, n) {
    var r;
    (function(e, i) {
        ! function(a) {
            function o(e) {
                throw RangeError(F[e])
            }

            function s(e, t) {
                for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                return r
            }

            function u(e, t) {
                var n = e.split("@"),
                    r = "";
                n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(N, ".");
                var i = e.split("."),
                    a = s(i, t).join(".");
                return r + a
            }

            function m(e) {
                for (var t, n, r = [], i = 0, a = e.length; i < a;) t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < a ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                return r
            }

            function c(e) {
                return s(e, function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += M(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += M(e)
                }).join("")
            }

            function d(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : w
            }

            function l(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function h(e, t, n) {
                var r = 0;
                for (e = n ? j(e / S) : e >> 1, e += j(e / t); e > L * x >> 1; r += w) e = j(e / L);
                return j(r + (L + 1) * e / (e + C))
            }

            function p(e) {
                var t, n, r, i, a, s, u, m, l, p, y = [],
                    f = e.length,
                    g = 0,
                    v = T,
                    b = A;
                for (n = e.lastIndexOf(D), n < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && o("not-basic"), y.push(e.charCodeAt(r));
                for (i = n > 0 ? n + 1 : 0; i < f;) {
                    for (a = g, s = 1, u = w; i >= f && o("invalid-input"), m = d(e.charCodeAt(i++)), (m >= w || m > j((_ - g) / s)) && o("overflow"), g += m * s, l = u <= b ? k : u >= b + x ? x : u - b, !(m < l); u += w) p = w - l, s > j(_ / p) && o("overflow"), s *= p;
                    t = y.length + 1, b = h(g - a, t, 0 == a), j(g / t) > _ - v && o("overflow"), v += j(g / t), g %= t, y.splice(g++, 0, v)
                }
                return c(y)
            }

            function y(e) {
                var t, n, r, i, a, s, u, c, d, p, y, f, g, v, b, C = [];
                for (e = m(e), f = e.length, t = T, n = 0, a = A, s = 0; s < f; ++s) y = e[s], y < 128 && C.push(M(y));
                for (r = i = C.length, i && C.push(D); r < f;) {
                    for (u = _, s = 0; s < f; ++s) y = e[s], y >= t && y < u && (u = y);
                    for (g = r + 1, u - t > j((_ - n) / g) && o("overflow"), n += (u - t) * g, t = u, s = 0; s < f; ++s)
                        if (y = e[s], y < t && ++n > _ && o("overflow"), y == t) {
                            for (c = n, d = w; p = d <= a ? k : d >= a + x ? x : d - a, !(c < p); d += w) b = c - p, v = w - p, C.push(M(l(p + b % v, 0))), c = j(b / v);
                            C.push(M(l(c, 0))), a = h(n, g, r == i), n = 0, ++r
                        }++n, ++t
                }
                return C.join("")
            }

            function f(e) {
                return u(e, function(e) {
                    return E.test(e) ? p(e.slice(4).toLowerCase()) : e
                })
            }

            function g(e) {
                return u(e, function(e) {
                    return P.test(e) ? "xn--" + y(e) : e
                })
            }
            var v = ("object" == typeof t && t && !t.nodeType && t, "object" == typeof e && e && !e.nodeType && e, "object" == typeof i && i);
            v.global !== v && v.window !== v && v.self !== v || (a = v);
            var b, _ = 2147483647,
                w = 36,
                k = 1,
                x = 26,
                C = 38,
                S = 700,
                A = 72,
                T = 128,
                D = "-",
                E = /^xn--/,
                P = /[^\x20-\x7E]/,
                N = /[\x2E\u3002\uFF0E\uFF61]/g,
                F = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                L = w - k,
                j = Math.floor,
                M = String.fromCharCode;
            b = {
                version: "1.3.2",
                ucs2: {
                    decode: m,
                    encode: c
                },
                decode: p,
                encode: y,
                toASCII: g,
                toUnicode: f
            }, r = function() {
                return b
            }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
        }(this)
    }).call(t, n(23)(e), function() {
        return this
    }())
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(25), t.encode = t.stringify = n(26)
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, r, i) {
        t = t || "&", r = r || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var o = /\+/g;
        e = e.split(t);
        var s = 1e3;
        i && "number" == typeof i.maxKeys && (s = i.maxKeys);
        var u = e.length;
        s > 0 && u > s && (u = s);
        for (var m = 0; m < u; ++m) {
            var c, d, l, h, p = e[m].replace(o, "%20"),
                y = p.indexOf(r);
            y >= 0 ? (c = p.substr(0, y), d = p.substr(y + 1)) : (c = p, d = ""), l = decodeURIComponent(c), h = decodeURIComponent(d), n(a, l) ? Array.isArray(a[l]) ? a[l].push(h) : a[l] = [a[l], h] : a[l] = h
        }
        return a
    }
}, function(e, t) {
    "use strict";
    var n = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, r, i) {
        return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function(i) {
            var a = encodeURIComponent(n(i)) + r;
            return Array.isArray(e[i]) ? e[i].map(function(e) {
                return a + encodeURIComponent(n(e))
            }).join(t) : a + encodeURIComponent(n(e[i]))
        }).join(t) : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : ""
    }
}]);
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Q.type(e);
        return "function" !== n && !Q.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (Q.isFunction(t)) return Q.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Q.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Q.filter(t, e, n);
            t = Q.filter(t, e)
        }
        return Q.grep(e, function(e) {
            return K.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = pe[e] = {};
        return Q.each(e.match(he) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        Y.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1), Q.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Q.expando + s.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(_e, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : be.test(n) ? Q.parseJSON(n) : n)
                } catch (i) {}
                ve.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m() {
        return !0
    }

    function c() {
        return !1
    }

    function d() {
        try {
            return Y.activeElement
        } catch (e) {}
    }

    function l(e, t) {
        return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = $e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function y(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }

    function f(e, t) {
        var n, r, i, a, o, s, u, m;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (a = ge.access(e), o = ge.set(t, a), m = a.events)) {
                delete o.handle, o.events = {};
                for (i in m)
                    for (n = 0, r = m[i].length; r > n; n++) Q.event.add(t, i, m[i][n])
            }
            ve.hasData(e) && (s = ve.access(e), u = Q.extend({}, s), ve.set(t, u))
        }
    }

    function g(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
    }

    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var r, i = Q(n.createElement(t)).appendTo(n.body),
            a = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Q.css(i[0], "display");
        return i.detach(), a
    }

    function _(e) {
        var t = Y,
            n = Ue[e];
        return n || (n = b(e, t), "none" !== n && n || (Ie = (Ie || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ie[0].contentDocument, t.write(), t.close(), n = b(e, t), Ie.detach()), Ue[e] = n), n
    }

    function w(e, t, n) {
        var r, i, a, o, s = e.style;
        return n = n || Be(e), n && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || Q.contains(e.ownerDocument, e) || (o = Q.style(e, t)), ze.test(o) && He.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o
    }

    function k(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function x(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ve.length; i--;)
            if (t = Ve[i] + n, t in e) return t;
        return r
    }

    function C(e, t, n) {
        var r = We.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function S(e, t, n, r, i) {
        for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += Q.css(e, n + ke[a], !0, i)), r ? ("content" === n && (o -= Q.css(e, "padding" + ke[a], !0, i)), "margin" !== n && (o -= Q.css(e, "border" + ke[a] + "Width", !0, i))) : (o += Q.css(e, "padding" + ke[a], !0, i), "padding" !== n && (o += Q.css(e, "border" + ke[a] + "Width", !0, i)));
        return o
    }

    function A(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = Be(e),
            o = "border-box" === Q.css(e, "boxSizing", !1, a);
        if (0 >= i || null == i) {
            if (i = w(e, t, a), (0 > i || null == i) && (i = e.style[t]), ze.test(i)) return i;
            r = o && (G.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + S(e, t, n || (o ? "border" : "content"), r, a) + "px"
    }

    function T(e, t) {
        for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++) r = e[o], r.style && (a[o] = ge.get(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && xe(r) && (a[o] = ge.access(r, "olddisplay", _(r.nodeName)))) : (i = xe(r), "none" === n && i || ge.set(r, "olddisplay", i ? n : Q.css(r, "display"))));
        for (o = 0; s > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function D(e, t, n, r, i) {
        return new D.prototype.init(e, t, n, r, i)
    }

    function E() {
        return setTimeout(function() {
            Ge = void 0
        }), Ge = Q.now()
    }

    function P(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = ke[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function N(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), a = 0, o = i.length; o > a; a++)
            if (r = i[a].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, a, o, s, u, m, c, d = this,
            l = {},
            h = e.style,
            p = e.nodeType && xe(e),
            y = ge.get(e, "fxshow");
        n.queue || (s = Q._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, Q.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], m = Q.css(e, "display"), c = "none" === m ? ge.get(e, "olddisplay") || _(e.nodeName) : m, "inline" === c && "none" === Q.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ze.exec(i)) {
                if (delete t[r], a = a || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    p = !0
                }
                l[r] = y && y[r] || Q.style(e, r)
            } else m = void 0;
        if (Q.isEmptyObject(l)) "inline" === ("none" === m ? _(e.nodeName) : m) && (h.display = m);
        else {
            y ? "hidden" in y && (p = y.hidden) : y = ge.access(e, "fxshow", {}), a && (y.hidden = !p), p ? Q(e).show() : d.done(function() {
                Q(e).hide()
            }), d.done(function() {
                var t;
                ge.remove(e, "fxshow");
                for (t in l) Q.style(e, t, l[t])
            });
            for (r in l) o = N(p ? y[r] : 0, r, d), r in y || (y[r] = o.start, p && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function L(e, t) {
        var n, r, i, a, o;
        for (n in e)
            if (r = Q.camelCase(n), i = t[r], a = e[n], Q.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = Q.cssHooks[r], o && "expand" in o) {
                a = o.expand(a), delete e[r];
                for (n in a) n in e || (e[n] = a[n], t[n] = i)
            } else t[r] = i
    }

    function j(e, t, n) {
        var r, i, a = 0,
            o = tt.length,
            s = Q.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Ge || E(), n = Math.max(0, m.startTime + m.duration - t), r = n / m.duration || 0, a = 1 - r, o = 0, u = m.tweens.length; u > o; o++) m.tweens[o].run(a);
                return s.notifyWith(e, [m, a, n]), 1 > a && u ? n : (s.resolveWith(e, [m]), !1)
            },
            m = s.promise({
                elem: e,
                props: Q.extend({}, t),
                opts: Q.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || E(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Q.Tween(e, m.opts, t, n, m.opts.specialEasing[t] || m.opts.easing);
                    return m.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? m.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) m.tweens[n].run(1);
                    return t ? s.resolveWith(e, [m, t]) : s.rejectWith(e, [m, t]), this
                }
            }),
            c = m.props;
        for (L(c, m.opts.specialEasing); o > a; a++)
            if (r = tt[a].call(m, e, c, m.opts)) return r;
        return Q.map(c, N, m), Q.isFunction(m.opts.start) && m.opts.start.call(e, m), Q.fx.timer(Q.extend(u, {
            elem: e,
            anim: m,
            queue: m.opts.queue
        })), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
    }

    function M(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                a = t.toLowerCase().match(he) || [];
            if (Q.isFunction(n))
                for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function $(e, t, n, r) {
        function i(s) {
            var u;
            return a[s] = !0, Q.each(e[s] || [], function(e, s) {
                var m = s(t, n, r);
                return "string" != typeof m || o || a[m] ? o ? !(u = m) : void 0 : (t.dataTypes.unshift(m), i(m), !1)
            }), u
        }
        var a = {},
            o = e === bt;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = Q.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Q.extend(!0, e, r), e
    }

    function O(e, t, n) {
        for (var r, i, a, o, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) a = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    a = i;
                    break
                }
                o || (o = i)
            }
            a = a || o
        }
        return a ? (a !== u[0] && u.unshift(a), n[a]) : void 0
    }

    function I(e, t, n, r) {
        var i, a, o, s, u, m = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) m[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = a, a = c.shift())
                if ("*" === a) a = u;
                else if ("*" !== u && u !== a) {
            if (o = m[u + " " + a] || m["* " + a], !o)
                for (i in m)
                    if (s = i.split(" "), s[1] === a && (o = m[u + " " + s[0]] || m["* " + s[0]])) {
                        o === !0 ? o = m[i] : m[i] !== !0 && (a = s[0], c.unshift(s[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: o ? d : "No conversion from " + u + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, r) {
        var i;
        if (Q.isArray(t)) Q.each(t, function(t, i) {
            n || Ct.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Q.type(t)) r(e, t);
        else
            for (i in t) U(e + "[" + i + "]", t[i], n, r)
    }

    function H(e) {
        return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var z = [],
        B = z.slice,
        q = z.concat,
        W = z.push,
        K = z.indexOf,
        X = {},
        J = X.toString,
        V = X.hasOwnProperty,
        G = {},
        Y = e.document,
        Z = "2.1.4",
        Q = function(e, t) {
            return new Q.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Q.fn = Q.prototype = {
        jquery: Z,
        constructor: Q,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function(e) {
            var t = Q.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Q.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Q.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: z.sort,
        splice: z.splice
    }, Q.extend = Q.fn.extend = function() {
        var e, t, n, r, i, a, o = arguments[0] || {},
            s = 1,
            u = arguments.length,
            m = !1;
        for ("boolean" == typeof o && (m = o, o = arguments[s] || {}, s++), "object" == typeof o || Q.isFunction(o) || (o = {}), s === u && (o = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = o[t], r = e[t], o !== r && (m && r && (Q.isPlainObject(r) || (i = Q.isArray(r))) ? (i ? (i = !1, a = n && Q.isArray(n) ? n : []) : a = n && Q.isPlainObject(n) ? n : {}, o[t] = Q.extend(m, a, r)) : void 0 !== r && (o[t] = r));
        return o
    }, Q.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Q.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return !("object" !== Q.type(e) || e.nodeType || Q.isWindow(e) || e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[J.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Q.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, a = 0,
                o = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; o > a && (i = t.apply(e[a], r), i !== !1); a++);
                else
                    for (a in e)
                        if (i = t.apply(e[a], r), i === !1) break
            } else if (s)
                for (; o > a && (i = t.call(e[a], a, e[a]), i !== !1); a++);
            else
                for (a in e)
                    if (i = t.call(e[a], a, e[a]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Q.merge(r, "string" == typeof e ? [e] : e) : W.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : K.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
            return i
        },
        map: function(e, t, r) {
            var i, a = 0,
                o = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; o > a; a++) i = t(e[a], a, r), null != i && u.push(i);
            else
                for (a in e) i = t(e[a], a, r), null != i && u.push(i);
            return q.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e) ? (r = B.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(B.call(arguments)))
            }, i.guid = e.guid = e.guid || Q.guid++, i) : void 0
        },
        now: Date.now,
        support: G
    }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        X["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, a, o, s, u, m, d, h, p, y;
            if ((t ? t.ownerDocument || t : U) !== F && N(t), t = t || F, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && j) {
                if (11 !== s && (i = ve.exec(e)))
                    if (o = i[1]) {
                        if (9 === s) {
                            if (a = t.getElementById(o), !a || !a.parentNode) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && O(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = i[3]) && w.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                    }
                if (w.qsa && (!M || !M.test(e))) {
                    if (h = d = I, p = t, y = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (m = S(e), (d = t.getAttribute("id")) ? h = d.replace(_e, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = m.length; u--;) m[u] = h + l(m[u]);
                        p = be.test(e) && c(t.parentNode) || t, y = m.join(",")
                    }
                    if (y) try {
                        return Z.apply(n, p.querySelectorAll(y)), n
                    } catch (f) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = F.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
        }

        function o(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function m(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function l(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                a = z++;
            return t.first ? function(t, n, a) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, a)
            } : function(t, n, o) {
                var s, u, m = [H, a];
                if (o) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[I] || (t[I] = {}), (s = u[r]) && s[0] === H && s[1] === a) return m[2] = s[2];
                            if (u[r] = m, m[2] = e(t, n, o)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function y(e, n, r) {
            for (var i = 0, a = n.length; a > i; i++) t(e, n[i], r);
            return r
        }

        function f(e, t, n, r, i) {
            for (var a, o = [], s = 0, u = e.length, m = null != t; u > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), m && t.push(s));
            return o
        }

        function g(e, t, n, i, a, o) {
            return i && !i[I] && (i = g(i)), a && !a[I] && (a = g(a, o)), r(function(r, o, s, u) {
                var m, c, d, l = [],
                    h = [],
                    p = o.length,
                    g = r || y(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? g : f(g, l, e, s, u),
                    b = n ? a || (r ? e : p || i) ? [] : o : v;
                if (n && n(v, b, s, u), i)
                    for (m = f(b, h), i(m, [], s, u), c = m.length; c--;)(d = m[c]) && (b[h[c]] = !(v[h[c]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (m = [], c = b.length; c--;)(d = b[c]) && m.push(v[c] = d);
                            a(null, b = [], m, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (m = a ? ee(r, d) : l[c]) > -1 && (r[m] = !(o[m] = d))
                    }
                } else b = f(b === o ? b.splice(p, b.length) : b), a ? a(null, o, b, u) : Z.apply(o, b)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, a = k.relative[e[0].type], o = a || k.relative[" "], s = a ? 1 : 0, u = h(function(e) {
                    return e === t
                }, o, !0), m = h(function(e) {
                    return ee(t, e) > -1
                }, o, !0), c = [function(e, n, r) {
                    var i = !a && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : m(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = k.relative[e[s].type]) c = [h(p(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                        for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                        return g(s > 1 && p(c), s > 1 && l(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && l(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                a = e.length > 0,
                o = function(r, o, s, u, m) {
                    var c, d, l, h = 0,
                        p = "0",
                        y = r && [],
                        g = [],
                        v = D,
                        b = r || a && k.find.TAG("*", m),
                        _ = H += null == v ? 1 : Math.random() || .1,
                        w = b.length;
                    for (m && (D = o !== F && o); p !== w && null != (c = b[p]); p++) {
                        if (a && c) {
                            for (d = 0; l = e[d++];)
                                if (l(c, o, s)) {
                                    u.push(c);
                                    break
                                }
                            m && (H = _)
                        }
                        i && ((c = !l && c) && h--, r && y.push(c))
                    }
                    if (h += p, i && p !== h) {
                        for (d = 0; l = n[d++];) l(y, g, o, s);
                        if (r) {
                            if (h > 0)
                                for (; p--;) y[p] || g[p] || (g[p] = G.call(u));
                            g = f(g)
                        }
                        Z.apply(u, g), m && !r && g.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return m && (H = _, D = v), y
                };
            return i ? r(o) : o
        }
        var _, w, k, x, C, S, A, T, D, E, P, N, F, L, j, M, $, R, O, I = "sizzle" + 1 * new Date,
            U = e.document,
            H = 0,
            z = 0,
            B = n(),
            q = n(),
            W = n(),
            K = function(e, t) {
                return e === t && (P = !0), 0
            },
            X = 1 << 31,
            J = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            Y = V.push,
            Z = V.push,
            Q = V.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            ae = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            me = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            le = new RegExp(oe),
            he = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ye = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            _e = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            ke = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = function() {
                N()
            };
        try {
            Z.apply(V = Q.call(U.childNodes), U.childNodes), V[U.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: V.length ? function(e, t) {
                    Y.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : U;
            return r !== F && 9 === r.nodeType && r.documentElement ? (F = r, L = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), j = !C(r), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(r.getElementsByClassName), w.getById = i(function(e) {
                return L.appendChild(e).id = I, !r.getElementsByName || !r.getElementsByName(I).length
            }), w.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(we, ke);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(we, ke);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return a
            }, k.find.CLASS = w.getElementsByClassName && function(e, t) {
                return j ? t.getElementsByClassName(e) : void 0
            }, $ = [], M = [], (w.qsa = ge.test(r.querySelectorAll)) && (i(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || M.push(".#.+[+~]")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ge.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), $.push("!=", oe)
            }), M = M.length && new RegExp(M.join("|")), $ = $.length && new RegExp($.join("|")), t = ge.test(L.compareDocumentPosition), O = t || ge.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, K = t ? function(e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === U && O(U, e) ? -1 : t === r || t.ownerDocument === U && O(U, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return P = !0, 0;
                var n, i = 0,
                    a = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    m = [t];
                if (!a || !s) return e === r ? -1 : t === r ? 1 : a ? -1 : s ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (a === s) return o(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) m.unshift(n);
                for (; u[i] === m[i];) i++;
                return i ? o(u[i], m[i]) : u[i] === U ? -1 : m[i] === U ? 1 : 0
            }, r) : F
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== F && N(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !j || $ && $.test(n) || M && M.test(n))) try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, F, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== F && N(e), O(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== F && N(e);
            var n = k.attrHandle[t.toLowerCase()],
                r = n && J.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
            return void 0 !== r ? r : w.attributes || !j ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (P = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(K), P) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return E = null, e
        }, x = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += x(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, ke).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var a = t.attr(i, e);
                        return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var m, c, d, l, h, p, y = a !== o ? "nextSibling" : "previousSibling",
                            f = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                        if (f) {
                            if (a) {
                                for (; y;) {
                                    for (d = t; d = d[y];)
                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                    p = y = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? f.firstChild : f.lastChild], o && v) {
                                for (c = f[I] || (f[I] = {}), m = c[e] || [], h = m[0] === H && m[1], l = m[0] === H && m[2], d = h && f.childNodes[h]; d = ++h && d && d[y] || (l = h = 0) || p.pop();)
                                    if (1 === d.nodeType && ++l && d === t) {
                                        c[e] = [H, h, l];
                                        break
                                    }
                            } else if (v && (m = (t[I] || (t[I] = {}))[e]) && m[0] === H) l = m[1];
                            else
                                for (;
                                    (d = ++h && d && d[y] || (l = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++l || (v && ((d[I] || (d[I] = {}))[e] = [H, l]), d !== t)););
                            return l -= i, l === r || l % r === 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[I] ? a(n) : a.length > 1 ? (i = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = a(e, n), o = i.length; o--;) r = ee(e, i[o]), e[r] = !(t[r] = i[o])
                    }) : function(e) {
                        return a(e, 0, i)
                    }) : a
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = A(e.replace(ue, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, r, a) {
                        return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, ke),
                        function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, ke).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return ye.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: m(function() {
                    return [0]
                }),
                last: m(function(e, t) {
                    return [t - 1]
                }),
                eq: m(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: m(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: m(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: m(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: m(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[_] = s(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) k.pseudos[_] = u(_);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, S = t.tokenize = function(e, n) {
            var r, i, a, o, s, u, m, c = q[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], m = k.preFilter; s;) {
                (!r || (i = me.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(a = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), a.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (o in k.filter) !(i = pe[o].exec(s)) || m[o] && !(i = m[o](i)) || (r = i.shift(), a.push({
                    value: r,
                    type: o,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : q(e, u).slice(0)
        }, A = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                a = W[e + " "];
            if (!a) {
                for (t || (t = S(e)), n = t.length; n--;) a = v(t[n]), a[I] ? r.push(a) : i.push(a);
                a = W(e, b(i, r)), a.selector = e
            }
            return a
        }, T = t.select = function(e, t, n, r) {
            var i, a, o, s, u, m = "function" == typeof e && e,
                d = !r && S(e = m.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && j && k.relative[a[1].type]) {
                    if (t = (k.find.ID(o.matches[0].replace(we, ke), t) || [])[0], !t) return n;
                    m && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !k.relative[s = o.type]);)
                    if ((u = k.find[s]) && (r = u(o.matches[0].replace(we, ke), be.test(a[0].type) && c(t.parentNode) || t))) {
                        if (a.splice(i, 1), e = r.length && l(a), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (m || A(e, d))(r, t, !j, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = I.split("").sort(K).join("") === I, w.detectDuplicates = !!P, N(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(F.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Q.find = ie, Q.expr = ie.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = ie.uniqueSort, Q.text = ie.getText, Q.isXMLDoc = ie.isXML, Q.contains = ie.contains;
    var ae = Q.expr.match.needsContext,
        oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    Q.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Q.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Q.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Q.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Q.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ae.test(e) ? Q(e) : e || [], !1).length
        }
    });
    var ue, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Q.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), oe.test(n[1]) && Q.isPlainObject(t))
                        for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = Y.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
        };
    ce.prototype = Q.fn, ue = Q(Y);
    var de = /^(?:parents|prev(?:Until|All))/,
        le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Q.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Q(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Q.fn.extend({
        has: function(e) {
            var t = Q(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Q.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, a = [], o = ae.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? Q.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.call(Q(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Q.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Q.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Q.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Q.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Q.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Q.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Q.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Q.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return Q.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Q.merge([], e.childNodes)
        }
    }, function(e, t) {
        Q.fn[e] = function(n, r) {
            var i = Q.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Q.filter(r, i)), this.length > 1 && (le[e] || Q.unique(i), de.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var he = /\S+/g,
        pe = {};
    Q.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || a(e) : Q.extend({}, e);
        var t, n, r, i, o, s, u = [],
            m = !e.once && [],
            c = function(a) {
                for (t = e.memory && a, n = !0, s = i || 0, i = 0, o = u.length, r = !0; u && o > s; s++)
                    if (u[s].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (m ? m.length && c(m.shift()) : t ? u = [] : d.disable())
            },
            d = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function a(t) {
                            Q.each(t, function(t, n) {
                                var r = Q.type(n);
                                "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && a(n)
                            })
                        }(arguments), r ? o = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Q.each(arguments, function(e, t) {
                        for (var n;
                            (n = Q.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (o >= n && o--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Q.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], o = 0, this
                },
                disable: function() {
                    return u = m = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return m = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !m
                },
                fireWith: function(e, t) {
                    return !u || n && !m || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? m.push(t) : c(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, Q.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Q.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Q.Deferred(function(n) {
                            Q.each(t, function(t, a) {
                                var o = Q.isFunction(e[t]) && e[t];
                                i[a[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Q.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Q.each(t, function(e, a) {
                var o = a[2],
                    s = a[3];
                r[a[1]] = o.add, s && o.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() {
                    return i[a[0] + "With"](this === i ? r : this, arguments), this
                }, i[a[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                a = B.call(arguments),
                o = a.length,
                s = 1 !== o || e && Q.isFunction(e.promise) ? o : 0,
                u = 1 === s ? e : Q.Deferred(),
                m = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) a[i] && Q.isFunction(a[i].promise) ? a[i].promise().done(m(i, r, a)).fail(u.reject).progress(m(i, n, t)) : --s;
            return s || u.resolveWith(r, a), u.promise()
        }
    });
    var ye;
    Q.fn.ready = function(e) {
        return Q.ready.promise().done(e), this
    }, Q.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Q.readyWait++ : Q.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, e !== !0 && --Q.readyWait > 0 || (ye.resolveWith(Y, [Q]), Q.fn.triggerHandler && (Q(Y).triggerHandler("ready"), Q(Y).off("ready"))))
        }
    }), Q.ready.promise = function(t) {
        return ye || (ye = Q.Deferred(), "complete" === Y.readyState ? setTimeout(Q.ready) : (Y.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1))), ye.promise(t)
    }, Q.ready.promise();
    var fe = Q.access = function(e, t, n, r, i, a, o) {
        var s = 0,
            u = e.length,
            m = null == n;
        if ("object" === Q.type(n)) {
            i = !0;
            for (s in n) Q.access(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== r && (i = !0, Q.isFunction(r) || (o = !0), m && (o ? (t.call(e, r), t = null) : (m = t, t = function(e, t, n) {
                return m.call(Q(e), n)
            })), t))
            for (; u > s; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : m ? t.call(e) : u ? t(e[0], n) : a
    };
    Q.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Q.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Q.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                a = this.cache[i];
            if ("string" == typeof t) a[t] = n;
            else if (Q.isEmptyObject(a)) Q.extend(this.cache[i], t);
            else
                for (r in t) a[r] = t[r];
            return a
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, a = this.key(e),
                o = this.cache[a];
            if (void 0 === t) this.cache[a] = {};
            else {
                Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (i = Q.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(he) || [])), n = r.length;
                for (; n--;) delete o[r[n]]
            }
        },
        hasData: function(e) {
            return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new s,
        ve = new s,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    Q.extend({
        hasData: function(e) {
            return ve.hasData(e) || ge.hasData(e)
        },
        data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        removeData: function(e, t) {
            ve.remove(e, t)
        },
        _data: function(e, t, n) {
            return ge.access(e, t, n)
        },
        _removeData: function(e, t) {
            ge.remove(e, t)
        }
    }), Q.fn.extend({
        data: function(e, t) {
            var n, r, i, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (i = ve.get(a), 1 === a.nodeType && !ge.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = Q.camelCase(r.slice(5)), u(a, r, i[r])));
                    ge.set(a, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ve.set(this, e)
            }) : fe(this, function(t) {
                var n, r = Q.camelCase(e);
                if (a && void 0 === t) {
                    if (n = ve.get(a, e), void 0 !== n) return n;
                    if (n = ve.get(a, r), void 0 !== n) return n;
                    if (n = u(a, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ve.get(this, r);
                    ve.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ve.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ve.remove(this, e)
            })
        }
    }), Q.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || Q.isArray(n) ? r = ge.access(e, t, Q.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Q.queue(e, t),
                r = n.length,
                i = n.shift(),
                a = Q._queueHooks(e, t),
                o = function() {
                    Q.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: Q.Callbacks("once memory").add(function() {
                    ge.remove(e, [t + "queue", n])
                })
            })
        }
    }), Q.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Q.queue(this, e, t);
                Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Q.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Q.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --r || i.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = ge.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        xe = function(e, t) {
            return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = Y.createDocumentFragment(),
            t = e.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    G.focusinBubbles = "onfocusin" in e;
    var Ae = /^key/,
        Te = /^(?:mouse|pointer|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        Ee = /^([^.]*)(?:\.(.+)|)$/;
    Q.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var a, o, s, u, m, c, d, l, h, p, y, f = ge.get(e);
            if (f)
                for (n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = Q.guid++), (u = f.events) || (u = f.events = {}), (o = f.handle) || (o = f.handle = function(t) {
                        return typeof Q !== Se && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(he) || [""], m = t.length; m--;) s = Ee.exec(t[m]) || [], h = y = s[1], p = (s[2] || "").split(".").sort(), h && (d = Q.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = Q.event.special[h] || {}, c = Q.extend({
                    type: h,
                    origType: y,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Q.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, a), (l = u[h]) || (l = u[h] = [], l.delegateCount = 0, d.setup && d.setup.call(e, r, p, o) !== !1 || e.addEventListener && e.addEventListener(h, o, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? l.splice(l.delegateCount++, 0, c) : l.push(c), Q.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var a, o, s, u, m, c, d, l, h, p, y, f = ge.hasData(e) && ge.get(e);
            if (f && (u = f.events)) {
                for (t = (t || "").match(he) || [""], m = t.length; m--;)
                    if (s = Ee.exec(t[m]) || [], h = y = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = Q.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, l = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = l.length; a--;) c = l[a], !i && y !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (l.splice(a, 1), c.selector && l.delegateCount--, d.remove && d.remove.call(e, c));
                        o && !l.length && (d.teardown && d.teardown.call(e, p, f.handle) !== !1 || Q.removeEvent(e, h, f.handle), delete u[h])
                    } else
                        for (h in u) Q.event.remove(e, h + t[m], n, r, !0);
                Q.isEmptyObject(u) && (delete f.handle, ge.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var a, o, s, u, m, c, d, l = [r || Y],
                h = V.call(t, "type") ? t.type : t,
                p = V.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(h + Q.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), m = h.indexOf(":") < 0 && "on" + h, t = t[Q.expando] ? t : new Q.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Q.makeArray(n, [t]), d = Q.event.special[h] || {}, i || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!i && !d.noBubble && !Q.isWindow(r)) {
                    for (u = d.delegateType || h, De.test(u + h) || (o = o.parentNode); o; o = o.parentNode) l.push(o), s = o;
                    s === (r.ownerDocument || Y) && l.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0;
                    (o = l[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? u : d.bindType || h, c = (ge.get(o, "events") || {})[t.type] && ge.get(o, "handle"), c && c.apply(o, n), c = m && o[m], c && c.apply && Q.acceptData(o) && (t.result = c.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || d._default && d._default.apply(l.pop(), n) !== !1 || !Q.acceptData(r) || m && Q.isFunction(r[h]) && !Q.isWindow(r) && (s = r[m], s && (r[m] = null), Q.event.triggered = h, r[h](), Q.event.triggered = void 0, s && (r[m] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Q.event.fix(e);
            var t, n, r, i, a, o = [],
                s = B.call(arguments),
                u = (ge.get(this, "events") || {})[e.type] || [],
                m = Q.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, e) !== !1) {
                for (o = Q.event.handlers.call(this, e, u), t = 0;
                    (i = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, r = ((Q.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return m.postDispatch && m.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, o = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++) a = t[n], i = a.selector + " ", void 0 === r[i] && (r[i] = a.needsContext ? Q(i, this).index(u) >= 0 : Q.find(i, this, null, [u]).length), r[i] && r.push(a);
                        r.length && o.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Q.expando]) return e;
            var t, n, r, i = e.type,
                a = e,
                o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Te.test(i) ? this.mouseHooks : Ae.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new Q.Event(a), t = r.length; t--;) n = r[t], e[n] = a[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Q.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Q.extend(new Q.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Q.event.trigger(i, null, t) : Q.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Q.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Q.Event = function(e, t) {
        return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? m : c) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(e, t)
    }, Q.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = m, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = m, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = m, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Q.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    a = e.handleObj;
                return (!i || i !== r && !Q.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), G.focusinBubbles || Q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Q.event.simulate(t, e.target, Q.event.fix(e), !0)
        };
        Q.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ge.access(r, t);
                i || r.addEventListener(e, n, !0), ge.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ge.access(r, t) - 1;
                i ? ge.access(r, t, i) : (r.removeEventListener(e, n, !0), ge.remove(r, t))
            }
        }
    }), Q.fn.extend({
        on: function(e, t, n, r, i) {
            var a, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return Q().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = Q.guid++)), this.each(function() {
                Q.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Q.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Q.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Q.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ne = /<([\w:]+)/,
        Fe = /<|&#?\w+;/,
        Le = /<(?:script|style|link)/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^$|\/(?:java|ecma)script/i,
        $e = /^true\/(.*)/,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Oe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td, Q.extend({
        clone: function(e, t, n) {
            var r, i, a, o, s = e.cloneNode(!0),
                u = Q.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
                for (o = g(s), a = g(e), r = 0, i = a.length; i > r; r++) v(a[r], o[r]);
            if (t)
                if (n)
                    for (a = a || g(e), o = o || g(s), r = 0, i = a.length; i > r; r++) f(a[r], o[r]);
                else f(e, s);
            return o = g(s, "script"), o.length > 0 && y(o, !u && g(e, "script")), s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, a, o, s, u, m, c = t.createDocumentFragment(), d = [], l = 0, h = e.length; h > l; l++)
                if (i = e[l], i || 0 === i)
                    if ("object" === Q.type(i)) Q.merge(d, i.nodeType ? [i] : i);
                    else if (Fe.test(i)) {
                for (a = a || c.appendChild(t.createElement("div")), o = (Ne.exec(i) || ["", ""])[1].toLowerCase(), s = Oe[o] || Oe._default, a.innerHTML = s[1] + i.replace(Pe, "<$1></$2>") + s[2], m = s[0]; m--;) a = a.lastChild;
                Q.merge(d, a.childNodes), a = c.firstChild, a.textContent = ""
            } else d.push(t.createTextNode(i));
            for (c.textContent = "", l = 0; i = d[l++];)
                if ((!r || -1 === Q.inArray(i, r)) && (u = Q.contains(i.ownerDocument, i), a = g(c.appendChild(i), "script"), u && y(a), n))
                    for (m = 0; i = a[m++];) Me.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, a = Q.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Q.acceptData(n) && (i = n[ge.expando], i && (t = ge.cache[i]))) {
                    if (t.events)
                        for (r in t.events) a[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
                    ge.cache[i] && delete ge.cache[i]
                }
                delete ve.cache[n[ve.expando]]
            }
        }
    }), Q.fn.extend({
        text: function(e) {
            return fe(this, function(e) {
                return void 0 === e ? Q.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = l(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = l(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Q.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Q.cleanData(g(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && y(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Q.clone(this, e, t)
            })
        },
        html: function(e) {
            return fe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !Oe[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Pe, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Q.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = q.apply([], e);
            var n, r, i, a, o, s, u = 0,
                m = this.length,
                c = this,
                d = m - 1,
                l = e[0],
                y = Q.isFunction(l);
            if (y || m > 1 && "string" == typeof l && !G.checkClone && je.test(l)) return this.each(function(n) {
                var r = c.eq(n);
                y && (e[0] = l.call(this, n, r.html())), r.domManip(e, t)
            });
            if (m && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Q.map(g(n, "script"), h), a = i.length; m > u; u++) o = n, u !== d && (o = Q.clone(o, !0, !0), a && Q.merge(i, g(o, "script"))), t.call(this[u], o, u);
                if (a)
                    for (s = i[i.length - 1].ownerDocument, Q.map(i, p), u = 0; a > u; u++) o = i[u], Me.test(o.type || "") && !ge.access(o, "globalEval") && Q.contains(s, o) && (o.src ? Q._evalUrl && Q._evalUrl(o.src) : Q.globalEval(o.textContent.replace(Re, "")))
            }
            return this
        }
    }), Q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Q.fn[e] = function(e) {
            for (var n, r = [], i = Q(e), a = i.length - 1, o = 0; a >= o; o++) n = o === a ? this : this.clone(!0), Q(i[o])[t](n), W.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ie, Ue = {},
        He = /^margin/,
        ze = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        Be = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", i.appendChild(a);
            var t = e.getComputedStyle(o, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(a)
        }
        var n, r, i = Y.documentElement,
            a = Y.createElement("div"),
            o = Y.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === o.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", a.appendChild(o), e.getComputedStyle && Q.extend(G, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = o.appendChild(Y.createElement("div"));
                return n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", o.style.width = "1px", i.appendChild(a), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(a), o.removeChild(n), t
            }
        }))
    }(), Q.swap = function(e, t, n, r) {
        var i, a, o = {};
        for (a in t) o[a] = e.style[a], e.style[a] = t[a];
        i = n.apply(e, r || []);
        for (a in t) e.style[a] = o[a];
        return i
    };
    var qe = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + we + ")(.*)$", "i"),
        Ke = new RegExp("^([+-])=(" + we + ")", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ve = ["Webkit", "O", "Moz", "ms"];
    Q.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = Q.camelCase(t),
                    u = e.style;
                return t = Q.cssProps[s] || (Q.cssProps[s] = x(u, s)), o = Q.cssHooks[t] || Q.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : u[t] : (a = typeof n, "string" === a && (i = Ke.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Q.css(e, t)), a = "number"), void(null != n && n === n && ("number" !== a || Q.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, a, o, s = Q.camelCase(t);
            return t = Q.cssProps[s] || (Q.cssProps[s] = x(e.style, s)), o = Q.cssHooks[t] || Q.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (a = parseFloat(i), n === !0 || Q.isNumeric(a) ? a || 0 : i) : i
        }
    }), Q.each(["height", "width"], function(e, t) {
        Q.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? qe.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Xe, function() {
                    return A(e, t, r)
                }) : A(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Be(e);
                return C(e, n, r ? S(e, t, r, "border-box" === Q.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Q.cssHooks.marginRight = k(G.reliableMarginRight, function(e, t) {
        return t ? Q.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Q.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + ke[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        }, He.test(e) || (Q.cssHooks[e + t].set = C)
    }), Q.fn.extend({
        css: function(e, t) {
            return fe(this, function(e, t, n) {
                var r, i, a = {},
                    o = 0;
                if (Q.isArray(t)) {
                    for (r = Be(e), i = t.length; i > o; o++) a[t[o]] = Q.css(e, t[o], !1, r);
                    return a
                }
                return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                xe(this) ? Q(this).show() : Q(this).hide()
            })
        }
    }), Q.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, r, i, a) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (Q.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Q.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Q.fx = D.prototype.init, Q.fx.step = {};
    var Ge, Ye, Ze = /^(?:toggle|show|hide)$/,
        Qe = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [F],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Qe.exec(t),
                    a = i && i[3] || (Q.cssNumber[e] ? "" : "px"),
                    o = (Q.cssNumber[e] || "px" !== a && +r) && Qe.exec(Q.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (o && o[3] !== a) {
                    a = a || o[3], i = i || [], o = +r || 1;
                    do s = s || ".5", o /= s, Q.style(n.elem, e, o + a); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Q.Animation = Q.extend(j, {
            tweener: function(e, t) {
                Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Q.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Q.extend({}, e) : {
                complete: n || !n && t || Q.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Q.isFunction(t) && t
            };
            return r.duration = Q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Q.isFunction(r.old) && r.old.call(this), r.queue && Q.dequeue(this, r.queue)
            }, r
        }, Q.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(xe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Q.isEmptyObject(e),
                    a = Q.speed(t, n, r),
                    o = function() {
                        var t = j(this, Q.extend({}, e), a);
                        (i || ge.get(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        a = Q.timers,
                        o = ge.get(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && et.test(i) && r(o[i]);
                    for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                    (t || !n) && Q.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ge.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        a = Q.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, Q.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Q.each(["toggle", "show", "hide"], function(e, t) {
            var n = Q.fn[t];
            Q.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
            }
        }), Q.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Q.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Q.timers = [], Q.fx.tick = function() {
            var e, t = 0,
                n = Q.timers;
            for (Ge = Q.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Q.fx.stop(), Ge = void 0
        }, Q.fx.timer = function(e) {
            Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
        }, Q.fx.interval = 13, Q.fx.start = function() {
            Ye || (Ye = setInterval(Q.fx.tick, Q.fx.interval))
        }, Q.fx.stop = function() {
            clearInterval(Ye), Ye = null
        }, Q.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Q.fn.delay = function(e, t) {
            return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = Y.createElement("input"),
                t = Y.createElement("select"),
                n = t.appendChild(Y.createElement("option"));
            e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
        }();
    var rt, it, at = Q.expr.attrHandle;
    Q.fn.extend({
        attr: function(e, t) {
            return fe(this, Q.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Q.removeAttr(this, e)
            })
        }
    }), Q.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Se ? Q.prop(e, t, n) : (1 === a && Q.isXMLDoc(e) || (t = t.toLowerCase(), r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Q.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                a = t && t.match(he);
            if (a && 1 === e.nodeType)
                for (; n = a[i++];) r = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!G.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = at[t] || Q.find.attr;
        at[t] = function(e, t, r) {
            var i, a;
            return r || (a = at[t], at[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, at[t] = a), i
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i;
    Q.fn.extend({
        prop: function(e, t) {
            return fe(this, Q.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Q.propFix[e] || e]
            })
        }
    }), Q.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !Q.isXMLDoc(e),
                a && (t = Q.propFix[t] || t, i = Q.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || ot.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (Q.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Q.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Q.fn.extend({
        addClass: function(e) {
            var t, n, r, i, a, o, s = "string" == typeof e && e,
                u = 0,
                m = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(he) || []; m > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = Q.trim(r), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o, s = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                m = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(he) || []; m > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        o = e ? Q.trim(r) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Q.isFunction(e) ? function(n) {
                Q(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Q(this), a = e.match(he) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Se || "boolean" === n) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ge.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Q.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Q.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Q(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Q.isArray(i) && (i = Q.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Q.valHooks[i.type] || Q.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }), Q.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Q.find.attr(e, "value");
                    return null != t ? t : Q.trim(Q.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, u = 0 > i ? s : a ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Q.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Q(n).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = Q.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = Q.inArray(r.value, a) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), Q.each(["radio", "checkbox"], function() {
        Q.valHooks[this] = {
            set: function(e, t) {
                return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) >= 0 : void 0
            }
        }, G.checkOn || (Q.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Q.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Q.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mt = Q.now(),
        ct = /\?/;
    Q.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Q.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/,
        lt = /([?&])_=[^&]*/,
        ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yt = /^(?:GET|HEAD)$/,
        ft = /^\/\//,
        gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        vt = {},
        bt = {},
        _t = "*/".concat("*"),
        wt = e.location.href,
        kt = gt.exec(wt.toLowerCase()) || [];
    Q.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: pt.test(kt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Q.parseJSON,
                "text xml": Q.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Q.ajaxSettings), t) : R(Q.ajaxSettings, e)
        },
        ajaxPrefilter: M(vt),
        ajaxTransport: M(bt),
        ajax: function(e, t) {
            function n(e, t, n, o) {
                var u, c, g, v, _, k = t;
                2 !== b && (b = 2, s && clearTimeout(s), r = void 0, a = o || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (v = O(d, w, n)), v = I(d, v, w, u), u ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (Q.lastModified[i] = _), _ = w.getResponseHeader("etag"), _ && (Q.etag[i] = _)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = v.state, c = v.data, g = v.error, u = !g)) : (g = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || k) + "", u ? p.resolveWith(l, [c, k, w]) : p.rejectWith(l, [w, k, g]), w.statusCode(f), f = void 0, m && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, d, u ? c : g]), y.fireWith(l, [w, k]), m && (h.trigger("ajaxComplete", [w, d]), --Q.active || Q.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, a, o, s, u, m, c, d = Q.ajaxSetup({}, t),
                l = d.context || d,
                h = d.context && (l.nodeType || l.jquery) ? Q(l) : Q.event,
                p = Q.Deferred(),
                y = Q.Callbacks("once memory"),
                f = d.statusCode || {},
                g = {},
                v = {},
                b = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!o)
                                for (o = {}; t = ht.exec(a);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) f[t] = [f[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (p.promise(w).complete = y.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || wt) + "").replace(dt, "").replace(ft, kt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Q.trim(d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain && (u = gt.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] === kt[1] && u[2] === kt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Q.param(d.data, d.traditional)), $(vt, d, t, w), 2 === b) return w;
            m = Q.event && d.global, m && 0 === Q.active++ && Q.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !yt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (ct.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = lt.test(i) ? i.replace(lt, "$1_=" + mt++) : i + (ct.test(i) ? "&" : "?") + "_=" + mt++)), d.ifModified && (Q.lastModified[i] && w.setRequestHeader("If-Modified-Since", Q.lastModified[i]), Q.etag[i] && w.setRequestHeader("If-None-Match", Q.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : d.accepts["*"]);
            for (c in d.headers) w.setRequestHeader(c, d.headers[c]);
            if (d.beforeSend && (d.beforeSend.call(l, w, d) === !1 || 2 === b)) return w.abort();
            _ = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](d[c]);
            if (r = $(bt, d, t, w)) {
                w.readyState = 1, m && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, r.send(g, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Q.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Q.get(e, void 0, t, "script")
        }
    }), Q.each(["get", "post"], function(e, t) {
        Q[t] = function(e, n, r, i) {
            return Q.isFunction(n) && (i = i || r, r = n, n = void 0), Q.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Q._evalUrl = function(e) {
        return Q.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Q.fn.extend({
        wrapAll: function(e) {
            var t;
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Q.isFunction(e) ? function(t) {
                Q(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Q(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Q.isFunction(e);
            return this.each(function(n) {
                Q(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Q.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Q.expr.filters.visible = function(e) {
        return !Q.expr.filters.hidden(e)
    };
    var xt = /%20/g,
        Ct = /\[\]$/,
        St = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;
    Q.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Q.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(xt, "+")
    }, Q.fn.extend({
        serialize: function() {
            return Q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Q.prop(this, "elements");
                return e ? Q.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Q(this).is(":disabled") && Tt.test(this.nodeName) && !At.test(e) && (this.checked || !Ce.test(e))
            }).map(function(e, t) {
                var n = Q(this).val();
                return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }), Q.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        Et = {},
        Pt = {
            0: 200,
            1223: 204
        },
        Nt = Q.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Et) Et[e]()
    }), G.cors = !!Nt && "withCredentials" in Nt, G.ajax = Nt = !!Nt, Q.ajaxTransport(function(e) {
        var t;
        return G.cors || Nt && !e.crossDomain ? {
            send: function(n, r) {
                var i, a = e.xhr(),
                    o = ++Dt;
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) a[i] = e.xhrFields[i];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) a.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Et[o], t = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? r(a.status, a.statusText) : r(Pt[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : void 0, a.getAllResponseHeaders()))
                    }
                }, a.onload = t(), a.onerror = t("error"), t = Et[o] = t("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Q.globalEval(e), e
            }
        }
    }), Q.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Q.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Q("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), Y.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ft = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    Q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || Q.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), Q.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, a, o, s = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || Q.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, Ft.push(i)), o && Q.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), Q.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Y;
        var r = oe.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, i), i && i.length && Q(i).remove(), Q.merge([], r.childNodes))
    };
    var jt = Q.fn.load;
    Q.fn.load = function(e, t, n) {
        if ("string" != typeof e && jt) return jt.apply(this, arguments);
        var r, i, a, o = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = Q.trim(e.slice(s)), e = e.slice(0, s)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && Q.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, o.html(r ? Q("<div>").append(Q.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, a || [e.responseText, t, e])
        }), this
    }, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Q.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Q.expr.filters.animated = function(e) {
        return Q.grep(Q.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Mt = e.document.documentElement;
    Q.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, o, s, u, m, c = Q.css(e, "position"),
                d = Q(e),
                l = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), a = Q.css(e, "top"), u = Q.css(e, "left"), m = ("absolute" === c || "fixed" === c) && (a + u).indexOf("auto") > -1, m ? (r = d.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(u) || 0), Q.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (l.top = t.top - s.top + o), null != t.left && (l.left = t.left - s.left + i), "using" in t ? t.using.call(e, l) : d.css(l)
        }
    }, Q.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Q.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                a = r && r.ownerDocument;
            return a ? (t = a.documentElement, Q.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = H(a), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (r = e.offset()), r.top += Q.css(e[0], "borderTopWidth", !0), r.left += Q.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Q.css(n, "marginTop", !0),
                    left: t.left - r.left - Q.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Mt; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
                return e || Mt
            })
        }
    }), Q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Q.fn[t] = function(i) {
            return fe(this, function(t, i, a) {
                var o = H(t);
                return void 0 === a ? o ? o[n] : t[i] : void(o ? o.scrollTo(r ? e.pageXOffset : a, r ? a : e.pageYOffset) : t[i] = a)
            }, t, i, arguments.length, null)
        }
    }), Q.each(["top", "left"], function(e, t) {
        Q.cssHooks[t] = k(G.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), ze.test(n) ? Q(e).position()[t] + "px" : n) : void 0
        })
    }), Q.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Q.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Q.fn[r] = function(r, i) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return fe(this, function(t, n, r) {
                    var i;
                    return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Q.css(t, n, o) : Q.style(t, n, r, o)
                }, t, a ? r : void 0, a, null)
            }
        })
    }), Q.fn.size = function() {
        return this.length
    }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Q
    });
    var $t = e.jQuery,
        Rt = e.$;
    return Q.noConflict = function(t) {
        return e.$ === Q && (e.$ = Rt), t && e.jQuery === Q && (e.jQuery = $t), Q
    }, typeof t === Se && (e.jQuery = e.$ = Q), Q
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t) {
        var n = {},
            r = /^jQuery\d+$/;
        return e.each(t.attributes, function(e, t) {
            t.specified && !r.test(t.name) && (n[t.name] = t.value)
        }), n
    }

    function n(t, n) {
        var r = this,
            a = e(r);
        if (r.value == a.attr("placeholder") && a.hasClass("placeholder"))
            if (a.data("placeholder-password")) {
                if (a = a.hide().nextAll('input[type="password"]:first').show().attr("id", a.removeAttr("id").data("placeholder-id")), t === !0) return a[0].value = n;
                a.focus()
            } else r.value = "", a.removeClass("placeholder"), r == i() && r.select()
    }

    function r() {
        var r, i = this,
            a = e(i),
            o = this.id;
        if ("" === i.value) {
            if ("password" === i.type) {
                if (!a.data("placeholder-textinput")) {
                    try {
                        r = a.clone().attr({
                            type: "text"
                        })
                    } catch (s) {
                        r = e("<input>").attr(e.extend(t(this), {
                            type: "text"
                        }))
                    }
                    r.removeAttr("name").data({
                        "placeholder-password": a,
                        "placeholder-id": o
                    }).bind("focus.placeholder", n), a.data({
                        "placeholder-textinput": r,
                        "placeholder-id": o
                    }).before(r)
                }
                a = a.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", o).show()
            }
            a.addClass("placeholder"), a[0].value = a.attr("placeholder")
        } else a.removeClass("placeholder")
    }

    function i() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var a, o, s = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
        u = "placeholder" in document.createElement("input") && !s,
        m = "placeholder" in document.createElement("textarea") && !s,
        c = e.valHooks,
        d = e.propHooks;
    u && m ? (o = e.fn.placeholder = function() {
        return this
    }, o.input = o.textarea = !0) : (o = e.fn.placeholder = function() {
        var e = this;
        return e.filter((u ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": n,
            "blur.placeholder": r
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, o.input = u, o.textarea = m, a = {
        get: function(t) {
            var n = e(t),
                r = n.data("placeholder-password");
            return r ? r[0].value : n.data("placeholder-enabled") && n.hasClass("placeholder") ? "" : t.value
        },
        set: function(t, a) {
            var o = e(t),
                s = o.data("placeholder-password");
            return s ? s[0].value = a : o.data("placeholder-enabled") ? ("" === a ? (t.value = a, t != i() && r.call(t)) : o.hasClass("placeholder") ? n.call(t, !0, a) || (t.value = a) : t.value = a, o) : t.value = a
        }
    }, u || (c.input = a, d.value = a), m || (c.textarea = a, d.value = a), e(function() {
        e(document).delegate("form", "submit.placeholder", function() {
            var t = e(".placeholder", this).each(n);
            setTimeout(function() {
                t.each(r)
            }, 10)
        })
    }), e(window).bind("beforeunload.placeholder", function() {
        e(".placeholder").each(function() {
            this.value = ""
        })
    }))
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return s.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
        return s.raw ? e : decodeURIComponent(e)
    }

    function r(e) {
        return t(s.json ? JSON.stringify(e) : String(e))
    }

    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(o, " ")), s.json ? JSON.parse(e) : e
        } catch (t) {}
    }

    function a(t, n) {
        var r = s.raw ? t : i(t);
        return e.isFunction(n) ? n(r) : r
    }
    var o = /\+/g,
        s = e.cookie = function(i, o, u) {
            if (void 0 !== o && !e.isFunction(o)) {
                if (u = e.extend({}, s.defaults, u), "number" == typeof u.expires) {
                    var m = u.expires,
                        c = u.expires = new Date;
                    c.setTime(+c + 864e5 * m)
                }
                return document.cookie = [t(i), "=", r(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
            }
            for (var d = i ? void 0 : {}, l = document.cookie ? document.cookie.split("; ") : [], h = 0, p = l.length; p > h; h++) {
                var y = l[h].split("="),
                    f = n(y.shift()),
                    g = y.join("=");
                if (i && i === f) {
                    d = a(g, o);
                    break
                }
                i || void 0 === (g = a(g)) || (d[f] = g)
            }
            return d
        };
    s.defaults = {}, e.removeCookie = function(t, n) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })), !e.cookie(t))
    }
}), ! function() {
    "use strict";

    function e(t, r) {
        function i(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        var a;
        if (r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, !e.notNeeded(t)) {
            for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, u = 0, m = o.length; m > u; u++) s[o[u]] = i(s[o[u]], s);
            n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                var i = Node.prototype.removeEventListener;
                "click" === e ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r)
            }, t.addEventListener = function(e, n, r) {
                var i = Node.prototype.addEventListener;
                "click" === e ? i.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }), r) : i.call(t, e, n, r)
            }), "function" == typeof t.onclick && (a = t.onclick, t.addEventListener("click", function(e) {
                a(e)
            }, !1), t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !t,
        r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        a = r && /OS [6-7]_\d/.test(navigator.userAgent),
        o = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (r && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function(e, t) {
        var n, r;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function(e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function(e) {
        var t;
        r && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function(e) {
        var t, n;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function(e) {
        var t, n, a;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], r) {
            if (a = window.getSelection(), a.rangeCount && !a.isCollapsed) return !0;
            if (!i) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, e.prototype.onTouchMove = function(e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function(e) {
        var t, o, s, u, m, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (m = e.changedTouches[0], c = document.elementFromPoint(m.pageX - window.pageXOffset, m.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = c.tagName.toLowerCase(), "label" === s) {
            if (t = this.findControl(c)) {
                if (this.focus(c), n) return !1;
                c = t
            }
        } else if (this.needsFocus(c)) return e.timeStamp - o > 100 || r && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, e), r && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
        return !(!r || i || (u = c.fastClickScrollParent, !u || u.fastClickLastScrollTop === u.scrollTop)) || (this.needsClick(c) || (e.preventDefault(), this.sendClick(c, e)), !1)
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function(e) {
        return !(this.targetElement && !e.forwardedTouchEvent && e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), 1))
    }, e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function() {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function(e) {
        var t, r, i, a;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (o && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (a = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(a >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth))) || "none" === e.style.touchAction || "manipulation" === e.style.touchAction)
    }, e.attach = function(t, n) {
        return new e(t, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}();
var Handlebars = function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(1)["default"]
}, function(e, t, n) {
    "use strict";

    function r() {
        var e = new o.HandlebarsEnvironment;
        return l.extend(e, o), e.SafeString = u["default"], e.Exception = c["default"], e.Utils = l, e.escapeExpression = l.escapeExpression, e.VM = p, e.template = function(t) {
            return p.template(t, e)
        }, e
    }
    var i = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    };
    t.__esModule = !0;
    var a = n(2),
        o = i(a),
        s = n(5),
        u = i(s),
        m = n(4),
        c = i(m),
        d = n(3),
        l = i(d),
        h = n(6),
        p = i(h),
        y = n(7),
        f = i(y),
        g = r();
    g.create = r, f["default"](g), g["default"] = g, t["default"] = g, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        this.helpers = e || {}, this.partials = t || {}, i(this)
    }

    function i(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length) throw new c["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        }), e.registerHelper("blockHelperMissing", function(t, n) {
            var r = n.inverse,
                i = n.fn;
            if (t === !0) return i(this);
            if (t === !1 || null == t) return r(this);
            if (p(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this);
            if (n.data && n.ids) {
                var o = a(n.data);
                o.contextPath = u.appendContextPath(n.data.contextPath, n.name), n = {
                    data: o
                }
            }
            return i(t, n)
        }), e.registerHelper("each", function(e, t) {
            function n(t, n, i) {
                m && (m.key = t, m.index = n, m.first = 0 === n, m.last = !!i, d && (m.contextPath = d + t)), s += r(e[t], {
                    data: m,
                    blockParams: u.blockParams([e[t], t], [d + t, null])
                })
            }
            if (!t) throw new c["default"]("Must pass iterator to #each");
            var r = t.fn,
                i = t.inverse,
                o = 0,
                s = "",
                m = void 0,
                d = void 0;
            if (t.data && t.ids && (d = u.appendContextPath(t.data.contextPath, t.ids[0]) + "."), y(e) && (e = e.call(this)), t.data && (m = a(t.data)), e && "object" == typeof e)
                if (p(e))
                    for (var l = e.length; o < l; o++) n(o, o, o === e.length - 1);
                else {
                    var h = void 0;
                    for (var f in e) e.hasOwnProperty(f) && (h && n(h, o - 1), h = f, o++);
                    h && n(h, o - 1, !0)
                }
            return 0 === o && (s = i(this)), s
        }), e.registerHelper("if", function(e, t) {
            return y(e) && (e = e.call(this)), !t.hash.includeZero && !e || u.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function(t, n) {
            return e.helpers["if"].call(this, t, {
                fn: n.inverse,
                inverse: n.fn,
                hash: n.hash
            })
        }), e.registerHelper("with", function(e, t) {
            y(e) && (e = e.call(this));
            var n = t.fn;
            if (u.isEmpty(e)) return t.inverse(this);
            if (t.data && t.ids) {
                var r = a(t.data);
                r.contextPath = u.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                    data: r
                }
            }
            return n(e, t)
        }), e.registerHelper("log", function(t, n) {
            var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
            e.log(r, t)
        }), e.registerHelper("lookup", function(e, t) {
            return e && e[t]
        })
    }

    function a(e) {
        var t = u.extend({}, e);
        return t._parent = e, t
    }
    var o = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    };
    t.__esModule = !0, t.HandlebarsEnvironment = r, t.createFrame = a;
    var s = n(3),
        u = o(s),
        m = n(4),
        c = o(m),
        d = "3.0.1";
    t.VERSION = d;
    var l = 6;
    t.COMPILER_REVISION = l;
    var h = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1"
    };
    t.REVISION_CHANGES = h;
    var p = u.isArray,
        y = u.isFunction,
        f = u.toString,
        g = "[object Object]";
    r.prototype = {
        constructor: r,
        logger: v,
        log: b,
        registerHelper: function(e, t) {
            if (f.call(e) === g) {
                if (t) throw new c["default"]("Arg not supported with multiple helpers");
                u.extend(this.helpers, e)
            } else this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e];
        },
        registerPartial: function(e, t) {
            if (f.call(e) === g) u.extend(this.partials, e);
            else {
                if ("undefined" == typeof t) throw new c["default"]("Attempting to register a partial as undefined");
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        }
    };
    var v = {
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 1,
        log: function(e, t) {
            if ("undefined" != typeof console && v.level <= e) {
                var n = v.methodMap[e];
                (console[n] || console.log).call(console, t)
            }
        }
    };
    t.logger = v;
    var b = v.log;
    t.log = b
}, function(e, t) {
    "use strict";

    function n(e) {
        return m[e]
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }

    function i(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }

    function a(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return d.test(e) ? e.replace(c, n) : e
    }

    function o(e) {
        return !e && 0 !== e || !(!p(e) || 0 !== e.length)
    }

    function s(e, t) {
        return e.path = t, e
    }

    function u(e, t) {
        return (e ? e + "." : "") + t
    }
    t.__esModule = !0, t.extend = r, t.indexOf = i, t.escapeExpression = a, t.isEmpty = o, t.blockParams = s, t.appendContextPath = u;
    var m = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        c = /[&<>"'`]/g,
        d = /[&<>"'`]/,
        l = Object.prototype.toString;
    t.toString = l;
    var h = function(e) {
        return "function" == typeof e
    };
    h(/x/) && (t.isFunction = h = function(e) {
        return "function" == typeof e && "[object Function]" === l.call(e)
    });
    var h;
    t.isFunction = h;
    var p = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === l.call(e)
    };
    t.isArray = p
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var i = t && t.loc,
            a = void 0,
            o = void 0;
        i && (a = i.start.line, o = i.start.column, e += " - " + a + ":" + o);
        for (var s = Error.prototype.constructor.call(this, e), u = 0; u < r.length; u++) this[r[u]] = s[r[u]];
        Error.captureStackTrace && Error.captureStackTrace(this, n), i && (this.lineNumber = a, this.column = o)
    }
    t.__esModule = !0;
    var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    n.prototype = new Error, t["default"] = n, e.exports = t["default"]
}, function(e, t) {
    "use strict";

    function n(e) {
        this.string = e
    }
    t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
        return "" + this.string
    }, t["default"] = n, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e && e[0] || 1,
            n = y.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var r = y.REVISION_CHANGES[n],
                    i = y.REVISION_CHANGES[t];
                throw new p["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
            }
            throw new p["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }

    function i(e, t) {
        function n(n, r, i) {
            i.hash && (r = l.extend({}, r, i.hash)), n = t.VM.resolvePartial.call(this, n, r, i);
            var a = t.VM.invokePartial.call(this, n, r, i);
            if (null == a && t.compile && (i.partials[i.name] = t.compile(n, e.compilerOptions, t), a = i.partials[i.name](r, i)), null != a) {
                if (i.indent) {
                    for (var o = a.split("\n"), s = 0, u = o.length; s < u && (o[s] || s + 1 !== u); s++) o[s] = i.indent + o[s];
                    a = o.join("\n")
                }
                return a
            }
            throw new p["default"]("The partial " + i.name + " could not be compiled when running in runtime-only mode")
        }

        function r(t) {
            var n = void 0 === arguments[1] ? {} : arguments[1],
                a = n.data;
            r._setup(n), !n.partial && e.useData && (a = m(t, a));
            var o = void 0,
                s = e.useBlockParams ? [] : void 0;
            return e.useDepths && (o = n.depths ? [t].concat(n.depths) : [t]), e.main.call(i, t, i.helpers, i.partials, a, s, o)
        }
        if (!t) throw new p["default"]("No environment passed to template");
        if (!e || !e.main) throw new p["default"]("Unknown template object: " + typeof e);
        t.VM.checkRevision(e.compiler);
        var i = {
            strict: function(e, t) {
                if (!(t in e)) throw new p["default"]('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var n = e.length, r = 0; r < n; r++)
                    if (e[r] && null != e[r][t]) return e[r][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: l.escapeExpression,
            invokePartial: n,
            fn: function(t) {
                return e[t]
            },
            programs: [],
            program: function(e, t, n, r, i) {
                var o = this.programs[e],
                    s = this.fn(e);
                return t || i || r || n ? o = a(this, e, s, t, n, r, i) : o || (o = this.programs[e] = a(this, e, s)), o
            },
            data: function(e, t) {
                for (; e && t--;) e = e._parent;
                return e
            },
            merge: function(e, t) {
                var n = e || t;
                return e && t && e !== t && (n = l.extend({}, t, e)), n
            },
            noop: t.VM.noop,
            compilerInfo: e.compiler
        };
        return r.isTop = !0, r._setup = function(n) {
            n.partial ? (i.helpers = n.helpers, i.partials = n.partials) : (i.helpers = i.merge(n.helpers, t.helpers), e.usePartial && (i.partials = i.merge(n.partials, t.partials)))
        }, r._child = function(t, n, r, o) {
            if (e.useBlockParams && !r) throw new p["default"]("must pass block params");
            if (e.useDepths && !o) throw new p["default"]("must pass parent depths");
            return a(i, t, e[t], n, 0, r, o)
        }, r
    }

    function a(e, t, n, r, i, a, o) {
        function s(t) {
            var i = void 0 === arguments[1] ? {} : arguments[1];
            return n.call(e, t, e.helpers, e.partials, i.data || r, a && [i.blockParams].concat(a), o && [t].concat(o))
        }
        return s.program = t, s.depth = o ? o.length : 0, s.blockParams = i || 0, s
    }

    function o(e, t, n) {
        return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = n.partials[n.name], e
    }

    function s(e, t, n) {
        if (n.partial = !0, void 0 === e) throw new p["default"]("The partial " + n.name + " could not be found");
        if (e instanceof Function) return e(t, n)
    }

    function u() {
        return ""
    }

    function m(e, t) {
        return t && "root" in t || (t = t ? y.createFrame(t) : {}, t.root = e), t
    }
    var c = function(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    };
    t.__esModule = !0, t.checkRevision = r, t.template = i, t.wrapProgram = a, t.resolvePartial = o, t.invokePartial = s, t.noop = u;
    var d = n(3),
        l = c(d),
        h = n(4),
        p = c(h),
        y = n(2)
}, function(e, t) {
    (function(n) {
        "use strict";
        t.__esModule = !0, t["default"] = function(e) {
            var t = "undefined" != typeof n ? n : window,
                r = t.Handlebars;
            e.noConflict = function() {
                t.Handlebars === e && (t.Handlebars = r)
            }
        }, e.exports = t["default"]
    }).call(t, function() {
        return this
    }())
}]);
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("jSecure", t) : e.jSecure = t()
}(this, function() {
    "use strict";

    function e() {}

    function t() {
        return "undefined" == typeof document || "textContent" in document.createElement("div")
    }

    function n(e, t) {
        if (t = t || "log", window && window.jet && "error" === t.toLowerCase()) try {
            throw new Error(e)
        } catch (n) {
            try {
                window.jet.error(n)
            } catch (r) {}
        }
        "undefined" != typeof console && "function" == typeof console[t] && console[t](e)
    }

    function r(e) {
        return $(R(e))
    }

    function i(e) {
        return n("jSecure.text() is deprecated. Please use jSecure.htmlEncode().", "warn"), $(e)
    }

    function a(e) {
        return /[<&]/.test(e)
    }

    function o(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function s(e) {
        return e.reduce(function(e, t) {
            return e.concat(t)
        }, [])
    }

    function u(e) {
        e = O(e) ? e : [e];
        var t, n, r, i = 0,
            a = "<(?!/?";
        return a += "(?:", I(e, function(e, o) {
            t = e.tags || P, n = e.attrs || N, r = e.checkUrlAttrs || !1, 0 !== o && (a += "|"), a += "(?:" + t.join("|") + ")", a += "(?:", a += U, a += "|" + H, a += "(?:(?:", a += "(?:" + n + ")(?:=([\"'])[^'\"<>]*\\" + ++i + ")?", r && (a += "|(?:" + F + ")=([\"'])(?:(?:" + j + ")(?::|&#(?:58|x3a);)|(?:" + L + ")|[/.#?]|&#(?:35|4[67]|63|x(?:2[3ef]|3f));)[^'\"<>]*\\" + ++i), a += ")" + U + ")+", a += ")"
        }), a += ")", a += "/?>)", new RegExp(a, "i")
    }

    function m(e) {
        return e = e || P, u({
            tags: e,
            checkUrlAttrs: !0
        })
    }

    function c() {
        var e = {
            tag: "li-icon",
            attrs: "active|a11y-text|animate|color|size|type"
        };
        return u([{
            tags: P,
            checkUrlAttrs: !0
        }, {
            tags: [e.tag],
            attrs: [S, e.attrs].join("|"),
            checkUrlAttrs: !1
        }])
    }

    function d(e, t) {
        var n;
        t = t || {};
        var r = t.allowTags,
            i = t.hasCustomElementMarkup !== !1;
        return r ? (n = m(r), !n.test(e)) : i ? !d.R_UNSAFE_CUSTOM_ELEMENT.test(e) : !d.R_UNSAFE_HTML.test(e)
    }

    function l(e) {
        return e.replace(/<[^>]*>|[<>'"&\\]/g, "")
    }

    function h(e, t, r) {
        if (null === e || "undefined" == typeof e) return null;
        e = e.toString();
        var i = t ? p(e, t) : e,
            o = e;
        return a(i) && !d(i, r) && (i = l(i), n("Content contains non-whitelisted tags or attributes:\nContent: " + o, "error")), i
    }

    function p(t, n) {
        var r = {};
        return t.replace(/\{([^}]+)\}/g, function(t, i) {
            var a, o, s = t;
            if (r.hasOwnProperty(i)) return r[i];
            if (n.hasOwnProperty(i)) {
                if (s = n[i], a = "string" == typeof s, o = "number" == typeof s, !(a || s instanceof e || o)) throw new Error("Only strings, numbers, and jSecure types are allowed as placeholder replacements.");
                s = a ? $(s) : s.toString()
            }
            return r[i] = s, s
        })
    }

    function y(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return e.length = i, e
    }

    function f(e, t) {
        var n, r, i, a, o, s, u, m, c = t.createDocumentFragment(),
            d = [];
        for (s = 0, m = e.length; s < m; s++)
            if (o = e[s], o || 0 === o)
                if ("string" == typeof o) {
                    for (a = a || c.appendChild(t.createElement("div")), n = (B.exec(o) || ["", ""])[1].toLowerCase(), r = z[n] || z._default, i = r[1] + o + r[2], v(a, i), u = r[0]; u--;) a.lastChild && a.lastChild.nodeType === Node.ELEMENT_NODE && (a = a.lastChild);
                    y(d, a.childNodes), a = c.firstChild, a.textContent = ""
                } else y(d, o.nodeType ? [o] : o);
        for (c.textContent = "", s = 0, o = d[s]; o;) c.appendChild(o), s++, o = d[s];
        return c
    }

    function g(e, t) {
        t = t || document.implementation && document.implementation.createHTMLDocument ? document.implementation.createHTMLDocument("") : document;
        var n;
        if ("string" == typeof e) n = f([e], t);
        else {
            if (!O(e)) return e;
            n = f(e, t)
        }
        return y([], n.childNodes)
    }

    function v(e, t, n) {
        var r = h(t, n);
        return a(r) ? e.innerHTML = r : e[D] = r, r
    }

    function b(e) {
        var t = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
        return "string" == typeof e && t.test(e) ? [] : e
    }

    function _(e) {
        return e
    }

    function w(e, t) {
        return this instanceof w ? (t = t || {}, t.allowTags = t.allowTags ? s(t.allowTags) : null, this._string = e, void(this._options = t)) : new w(e, t)
    }

    function k(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var i = "",
            a = void 0,
            o = n.length;
        return e && e.forEach(function(e, t) {
            i += e, t < o && (a = n[t], i += a instanceof w ? a : $(a))
        }), W(i)
    }

    function x(e) {
        var t = void 0,
            r = "invalid://";
        if ("string" != typeof e) return n("jSecure Warning: url must be a string", "error"), r;
        if (t = e.trim(), t.indexOf(" ") > -1 && (n("jSecure Warning: url should not contain spaces: " + e, "warn"), t = t.replace(V, "+")), !Q.test(t)) return n("jSecure Error: URL should be absolute with allowed schemas, relative, a hash fragment or query string. " + e, "error"), r;
        if (G.test(t)) return n("jSecure Error: not valid url character found in url: " + e, "error"), r;
        var i = t.split("?")[0];
        return Y.test(i) || Z.test(i) || Z.test(decodeURI(i)) ? (n("jSecure Error: malicious data found in url path: " + i, "error"), r) : e
    }

    function C(e) {
        var t = x(e);
        t === e && ee.redirect(t)
    }
    var S = "aria-[a-z0-9_\\-]+|class|data-[a-z0-9_\\-]+|dir|id|role|tabindex",
        A = "alt|checked|colgroup|cols|colspan|disabled|height|hidden|maxlength|method|multiple|name|placeholder|readonly|rel|required|rows|rowspan|spellcheck|target|title|width",
        T = "border|caption|color|controls|coords|hreflang|label|lang|loop|marginheight|marginwidth|preload|reversed|type|usemap|clear|headers|ismap|start|datetime|accept|max|min|size|step|style|cellspacing|cellpadding",
        D = t() ? "textContent" : "innerText",
        E = ["b", "del", "em", "i", "s", "strong", "sub", "sup"],
        P = E.concat(["a", "abbr", "address", "area", "article", "aside", "audio", "bdi", "bdo", "big", "blockquote", "br", "button", "center", "cite", "code", "datalist", "dd", "details", "dfn", "div", "dl", "dt", "fieldset", "figcaption", "figure", "font", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "img", "ins", "kbd", "label", "legend", "li", "map", "mark", "marquee", "nav", "nobr", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "section", "small", "source", "span", "strike", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr"]),
        N = [S, A, T].join("|"),
        F = "href|src",
        L = "data:image/(?:gif|jpg|jpeg|png);base64,",
        j = "https?|ftp|mailto",
        M = "&#?[a-zA-Z0-9]{1,10};",
        $ = (new RegExp(M), function() {
            var e, t = /[&<>"'\u0000\\=]/g;
            return e = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "\0": "�",
                    "\\": "&#92;",
                    "=": "&#61;"
                },
                function(n) {
                    return null === n || "undefined" == typeof n ? null : n.toString().replace(t, function(t) {
                        return e[t]
                    })
                }
        }()),
        R = function() {
            function e(e) {
                var n;
                return i.hasOwnProperty(e) ? i[e] : (t.innerHTML = "&" + e + ";", n = t[D], i[e] = n, n)
            }
            var t, n, r = /&(?:([a-z0-9]+)|#x([\da-f]{1,6})|#(\d{1,8}));/gi;
            if ("undefined" == typeof document) return function() {
                throw new Error("document is undefined (i.e. you are probably in Node.js)")
            };
            t = document.createElement("div");
            var i = {
                nbsp: " ",
                lt: "<",
                gt: ">",
                amp: "&",
                quot: '"'
            };
            return n = "function" == typeof String.fromCodePoint ? function(e) {
                    return String.fromCodePoint(e)
                } : function(e) {
                    return e <= 65535 ? String.fromCharCode(e) : "�"
                },
                function(t) {
                    return null === t || "undefined" == typeof t ? null : (t + "").replace(r, function(t, r, i, a) {
                        return r ? e(r) : i || a ? n(parseInt(i || a, i ? 16 : 10) || 65533) : "�"
                    })
                }
        }(),
        O = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        I = function() {
            return Array.prototype.forEach ? function(e, t) {
                Array.prototype.forEach.call(e, t)
            } : function(e, t) {
                for (var n = 0, r = e.length; n < r; n++) t(e[n], n)
            }
        }(),
        U = "[ \t\r\n]*",
        H = "[ \t\r\n]+";
    d.R_UNSAFE_HTML = m(), d.R_UNSAFE_CUSTOM_ELEMENT = c();
    var z = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    z.optgroup = z.option, z.tbody = z.tfoot = z.colgroup = z.caption = z.thead, z.th = z.td;
    var B = /<([\w:]+)/,
        q = h,
        W = h;
    w.prototype = o(new e, {
        toString: function() {
            var e = this._string,
                t = this._stringVal,
                r = e;
            return void 0 !== t ? t : (d(e, this._options) || (r = e, e = l(e), n("UnsafeString contains non-whitelisted tags or attributes.\nString: " + r, "error")), this._stringVal = e, e)
        }
    });
    var K = "https?|ftp|mailto|tel|sms|blob|voyager|android-app|linkedin|chrome-extension",
        X = "data:(?:(?:image/(?:gif|jpe?g|png))|(?:application/x-font-woff)|(?:font/(?:opentype|ttf)))[;,]",
        J = "[/.#?]",
        V = / /g,
        G = /[\s\u0000<>"]|%00/,
        Y = /\\/,
        Z = /([.]|%2e){2}/i,
        Q = new RegExp("^(?:" + K + "|" + X + "|" + J + ")"),
        ee = {
            redirect: function(e) {
                window && (window.location.href = e)
            }
        },
        te = {
            ALLOWED_TAGS: P,
            FORMATTING_TAGS: E,
            htmlEncode: $,
            htmlUnencode: R,
            log: n,
            mk: k,
            parseHTML: g,
            parseSelector: b,
            processTemplate: q,
            reEncode: r,
            _redirector: ee,
            redirect: C,
            sanitizeHTML: W,
            sanitizeUrl: x,
            setElementContent: v,
            text: i,
            unsafe: _,
            UnsafeString: w
        };
    return te
});
var loadCSS = function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        (function(t) {
            ! function(t) {
                "use strict";
                var n = function(e, n, r) {
                    var i, a = t.document,
                        o = a.createElement("link");
                    if (n) i = n;
                    else {
                        var s = (a.body || a.getElementsByTagName("head")[0]).childNodes;
                        i = s[s.length - 1]
                    }
                    var u = a.styleSheets;
                    o.rel = "stylesheet", o.href = e, o.media = "only x", i.parentNode.insertBefore(o, n ? i : i.nextSibling);
                    var m = function(e) {
                        for (var t = o.href, n = u.length; n--;)
                            if (u[n].href === t) return e();
                        setTimeout(function() {
                            m(e)
                        })
                    };
                    return o.onloadcssdefined = m, m(function() {
                        o.media = r || "all"
                    }), o
                };
                e.exports = n
            }("undefined" != typeof t ? t : this)
        }).call(t, function() {
            return this
        }())
    }]),
    RumTracking = function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        ! function(t, n) {
            e.exports = n()
        }(this, function() {
            "use strict";

            function e(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }

            function t() {
                return window.performance && window.performance.timing && "function" == typeof window.performance.now ? Math.round(window.performance.now()) + window.performance.timing.navigationStart : (new Date).getTime()
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                i = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                },
                a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                o = function() {
                    function e(t) {
                        r(this, e), this._parent = t, this._config = t.getConfig(), this._complete = !1, this.data = {}
                    }
                    return e.prototype.isComplete = function() {
                        return this._complete
                    }, e.prototype.markComplete = function() {
                        this._complete = !0
                    }, e.prototype.done = function() {
                        this._complete = !0, this.isAsync() && this._parent.pluginDone()
                    }, e.prototype.resetState = function() {
                        this._complete = !1, this.data = {}
                    }, e.prototype.getData = function() {
                        return this.data
                    }, e.prototype.collectData = function() {}, e.prototype.isAsync = function() {
                        return !1
                    }, e
                }(),
                s = function(e) {
                    function t(n) {
                        return r(this, t), a(this, e.call(this, n))
                    }
                    return i(t, e), t.prototype.collectData = function() {
                        this._readLinkedinData()
                    }, t.prototype._readLinkedinData = function() {
                        this.data.timeSource = this._config["beacon-source"], this.data.treeId = this._getTreeId(), this._config["commit-id"] && (this.data.sessionID = this._config["commit-id"]), this.data.isFromServiceWorker = this._getFromServiceWorker(), this.done()
                    }, t.prototype._getTreeId = function() {
                        var e = document.querySelector('meta[name="treeID"]');
                        return e && e.getAttribute("content")
                    }, t.prototype._getFromServiceWorker = function() {
                        var e = document.querySelector('meta[name="fromServiceWorker"]');
                        return e && "true" === e.getAttribute("content")
                    }, t
                }(o),
                u = function(e) {
                    function t(n) {
                        r(this, t);
                        var i = a(this, e.call(this, n));
                        return i._navigationTimingRead = !1, i._navigationTimingFields = ["loadEventEnd", "loadEventStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "responseEnd", "responseStart", "requestStart", "secureConnectionStart", "connectEnd", "connectStart", "domainLookupEnd", "domainLookupStart", "fetchStart", "redirectEnd", "redirectStart", "unloadEventEnd", "unloadEventStart", "navigationStart"], i
                    }
                    return i(t, e), t.prototype.collectData = function() {
                        this._readNavigationTiming(), this.done()
                    }, t.prototype._readNavigationTiming = function() {
                        var e, t, n, r;
                        if (!this._navigationTimingRead) {
                            if (window.performance && window.performance.timing && window.performance.navigation) {
                                for (this.data.navigationTimingApi = !0, e = window.performance.timing, t = 0; t < this._navigationTimingFields.length; t++) n = this._navigationTimingFields[t], e[n] && (this.data[n] = e[n]);
                                this.data.redirectCount = window.performance.navigation.redirectCount, this.data.navigationType = window.performance.navigation.type
                            } else this.data.navigationTimingApi = !1;
                            if (window.performance && window.performance.getEntriesByType && (r = window.performance.getEntriesByType("navigation")[0], void 0 !== r && (this.data.workerStart = r.workerStart, "number" == typeof r.fetchStart && "number" == typeof r.responseEnd && "number" == typeof r.decodedBodySize && "number" == typeof r.encodedBodySize && "number" == typeof r.transferSize))) {
                                var i = {};
                                i.htmlFetchStart = r.fetchStart, i.htmlResponseEnd = r.responseEnd, i.htmlDecodedBodySize = r.decodedBodySize, i.htmlEncodedBodySize = r.encodedBodySize, i.htmlTransferSize = r.transferSize, this.data.htmlMetrics = i
                            }
                            this._navigationTimingRead = !0
                        }
                    }, t
                }(o),
                m = function(e) {
                    function t(n) {
                        r(this, t);
                        var i = a(this, e.call(this, n));
                        return i._imgEntries = [], i._resourceTimingFields = {
                            name: !0,
                            entryType: !1,
                            duration: !0,
                            initiatorType: !0,
                            fetchStart: !0,
                            responseEnd: !0,
                            startTime: !0,
                            connectEnd: !0,
                            connectStart: !0,
                            domainLookupEnd: !0,
                            domainLookupStart: !0,
                            redirectEnd: !0,
                            redirectStart: !0,
                            requestStart: !0,
                            responseStart: !0,
                            secureConnectionStart: !0,
                            nextHopProtocol: !0,
                            transferSize: !0,
                            decodedBodySize: !0,
                            encodedBodySize: !0,
                            workerStart: !0
                        }, i._requestSamplingRandVal = Math.random(), i._setupResourceTiming(), i
                    }
                    return i(t, e), t.prototype.resetState = function() {
                        e.prototype.resetState.call(this), this._requestSamplingRandVal = Math.random()
                    }, t.prototype.collectData = function() {
                        this._readResourceTiming(), this.done()
                    }, t.prototype.addTreeId = function(e, t) {
                        var n;
                        if (this._treeIdUrlParser && this._rsTimingUrlParser && (this._treeIdUrlParser.href = t, this._readResourceTiming(), this.data.resourceTimingEntries))
                            for (n = this.data.resourceTimingEntries.length - 1; n >= 0; n--)
                                if (this._rsTimingUrlParser.href = this.data.resourceTimingEntries[n].name, this._treeIdUrlParser.protocol === this._rsTimingUrlParser.protocol && this._treeIdUrlParser.host === this._rsTimingUrlParser.host && this._treeIdUrlParser.pathname === this._rsTimingUrlParser.pathname && (this._treeIdUrlParser.search === this._rsTimingUrlParser.search || "" === this._treeIdUrlParser.search)) {
                                    this.data.resourceTimingEntries[n].resourceTreeId = e;
                                    break
                                }
                    }, t.prototype._isResourceTimingSupported = function() {
                        return window.performance && "function" == typeof window.performance.getEntriesByType
                    }, t.prototype._setupResourceTiming = function() {
                        var e = {
                            "default": .001,
                            xmlhttprequest: 1
                        };
                        if (null !== this._config["rs-sample-rate"] && "object" === n(this._config["rs-sample-rate"]))
                            for (var t in this._config["rs-sample-rate"]) this._config["rs-sample-rate"].hasOwnProperty(t) && (e[t] = this._config["rs-sample-rate"][t]);
                        this._config["rs-sample-rate"] = e, this._isResourceTimingSupported() && (this._readResourceTiming(), this._setBufferSize(100), null === window.performance.onresourcetimingbufferfull ? window.performance.onresourcetimingbufferfull = this._readResourceTiming.bind(this) : null === window.performance.onwebkitresourcetimingbufferfull && (window.performance.onwebkitresourcetimingbufferfull = this._readResourceTiming.bind(this))), this._treeIdUrlParser = document.createElement("a"), this._rsTimingUrlParser = document.createElement("a")
                    }, t.prototype._clearBuffer = function() {
                        this._isResourceTimingSupported() && this._config["enable-rs-timing"] && (window.performance.clearResourceTimings && "function" == typeof window.performance.clearResourceTimings ? window.performance.clearResourceTimings() : window.performance.webkitClearResourceTimings && "function" == typeof window.performance.webkitClearResourceTimings && window.performance.webkitClearResourceTimings())
                    }, t.prototype._setBufferSize = function(e) {
                        this._isResourceTimingSupported() && this._config["enable-rs-timing"] && (window.performance.setResourceTimingBufferSize && "function" == typeof window.performance.setResourceTimingBufferSize ? window.performance.setResourceTimingBufferSize(e) : window.performance.webkitSetResourceTimingBufferSize && "function" == typeof window.performance.webkitSetResourceTimingBufferSize && window.performance.webkitSetResourceTimingBufferSize(e))
                    }, t.prototype._readResourceTiming = function() {
                        var e, t, n, r, i, a, o = "rand",
                            s = !1,
                            u = this.data && this.data.resourceTimingEntries || [];
                        if (this._isResourceTimingSupported() && this._config["enable-rs-timing"]) {
                            for (e = window.performance.getEntriesByType("resource"), t = 0; t < e.length; t++) {
                                r = {};
                                for (n in e[t]) this._resourceTimingFields[n] === !0 && (r[n] = e[t][n]);
                                "img" === r.initiatorType && this._imgEntries.push(r), null === this._parent._config.xcndUrl && "script" === r.initiatorType && (this._parent._config.xcndUrl = r.name), i = Math.random(), a = this._config["rs-sample-rate"][e[t].initiatorType] || this._config["rs-sample-rate"]["default"], s = this._requestSamplingRandVal <= this._config["request-sampling-rate"], (s || i <= a) && (u.push(r), r.sampleMode = "", s && (r.sampleMode = "requestSampled,"), i <= a && (r.sampleMode += o + a.toString()))
                            }
                            this._clearBuffer(), u.length > 0 && (this.data.resourceTimingEntries = u)
                        }
                    }, t
                }(o),
                c = function(e) {
                    function t(n) {
                        return r(this, t), a(this, e.call(this, n))
                    }
                    return i(t, e), t.prototype.collectData = function() {
                        this._readUserTimingEntries(), this.done()
                    }, t.prototype._clearUserTimings = function() {
                        window.performance && (window.performance.clearMarks && window.performance.clearMarks(), window.performance.clearMeasures && window.performance.clearMeasures())
                    }, t.prototype._getUserTimingEntries = function(e, t) {
                        var n, r, i, a = [];
                        for (r = 0; r < e.length; r++) n = e[r], n && (i = {}, i.entryType = t, i.name = n.name, i.startTime = n.startTime, i.duration = n.duration, a.push(i));
                        return a
                    }, t.prototype._readUserTimingEntries = function() {
                        var e, t = [];
                        window.performance && "function" == typeof window.performance.getEntriesByType && (this._config["user-timing-measure-enabled"] && (e = window.performance.getEntriesByType("measure"), t = t.concat(this._getUserTimingEntries(e, "MEASURE"))), this._config["user-timing-mark-enabled"] && (e = window.performance.getEntriesByType("mark"), t = t.concat(this._getUserTimingEntries(e, "MARK")))), this.data.userTimingEntries = t, this._clearUserTimings()
                    }, t
                }(o),
                d = function(e) {
                    function t(n) {
                        r(this, t);
                        var i = a(this, e.call(this, n));
                        return i._started = !1, i
                    }
                    return i(t, e), t.prototype.resetState = function() {}, t.prototype.isAsync = function() {
                        return !0
                    }, t.prototype.collectData = function() {
                        this._started || (this._started = !0, this._getCDNData())
                    }, t.prototype._getCDNData = function() {
                        var e = window.location.protocol,
                            t = this._parent._config.xcndUrl,
                            n = new XMLHttpRequest,
                            r = this,
                            i = "",
                            a = "",
                            o = "";
                        return this.data.usedCDN = {
                            static_domain: i,
                            ip_version: o,
                            http_version: o
                        }, 0 !== e.lastIndexOf("http", 0) || null === t ? void this.done() : (n.onreadystatechange = function() {
                            var e = this.readyState ? this : n;
                            if (4 === e.readyState) {
                                if (200 === e.status) {
                                    try {
                                        i = e.getResponseHeader("X-CDN"), a = e.getResponseHeader("X-CDN-CLIENT-IP-VERSION"), o = e.getResponseHeader("X-CDN-Proto")
                                    } catch (t) {
                                        console.log("Canot read the X-CDN header possibly because of CORS restrictions")
                                    }
                                    r.data.usedCDN.static_domain = null === i ? "" : i, r.data.usedCDN.ip_version = null === a ? "" : a.toLowerCase(), r.data.usedCDN.http_version = null === o ? "" : o.toLowerCase()
                                } else console.log("CDN request did not return a HTTP 200. Status: " + e.status);
                                r.done()
                            }
                        }, n.open("HEAD", t, !0), void n.send())
                    }, t
                }(o),
                l = function(e) {
                    function t(n) {
                        r(this, t);
                        var i = a(this, e.call(this, n));
                        return i._started = !1, i
                    }
                    return i(t, e), t.prototype.resetState = function() {}, t.prototype.isAsync = function() {
                        return !0
                    }, t.prototype.collectData = function() {
                        this._started || (this._started = !0, this._getPoPData())
                    }, t.prototype._getPoPData = function() {
                        var e = "/fizzy/admin",
                            t = window.location,
                            n = t.protocol,
                            r = t.host,
                            i = n + "//" + r + e + "?" + (new Date).getTime(),
                            a = new XMLHttpRequest,
                            o = this;
                        return 0 !== n.lastIndexOf("http", 0) ? void this.done() : (a.onreadystatechange = function() {
                            var e = this.readyState ? this : a;
                            4 === e.readyState && (e.status >= 200 && e.status < 400 ? (o.data.pointOfPresenceId = e.getResponseHeader("X-Li-Pop"), o.data.rawXLiFabricHeader = e.getResponseHeader("X-Li-Fabric"), o.data.httpVersion = e.getResponseHeader("X-Li-proto")) : console.log("PoP request was not successful. Status: " + e.status), o.done())
                        }, a.open("get", i, !0), void a.send())
                    }, t
                }(o),
                h = function(e) {
                    function t(n) {
                        r(this, t);
                        var i = a(this, e.call(this, n));
                        i.data.longTasks = [], i._longTaskFields = ["duration", "name", "startTime"], i._observer = new PerformanceObserver(function(e) {
                            e.getEntries().forEach(function(e) {
                                for (var t = {}, n = 0; n < i._longTaskFields.length; n++) {
                                    var r = i._longTaskFields[n];
                                    void 0 !== e[r] && (t[r] = e[r])
                                }
                                i.data.longTasks.push(t)
                            })
                        });
                        try {
                            i._observer.observe({
                                entryTypes: ["longtask"]
                            })
                        } catch (o) {
                            console.log("Longtask api is not supported")
                        }
                        return i
                    }
                    return i(t, e), t.prototype.resetState = function() {
                        this._complete = !1, this.data = {}, this.data.longTasks = []
                    }, t.prototype.collectData = function() {
                        this.done()
                    }, t
                }(o),
                p = function(e) {
                    function t(n) {
                        return r(this, t), a(this, e.call(this, n))
                    }
                    return i(t, e), t.prototype.collectData = function() {
                        this._readNetworkInformation(), this.done()
                    }, t.prototype._readNetworkInformation = function() {
                        if (navigator && navigator.connection) {
                            var e = {},
                                t = navigator.connection.downlinkMax;
                            e.connectionType = void 0 === navigator.connection.type ? "UNKNOWN" : navigator.connection.type.toUpperCase(), e.effectiveType = this._formatEffectiveType(navigator.connection.effectiveType), e.roundTripTime = void 0 === navigator.connection.rtt ? -1 : navigator.connection.rtt, e.downlinkBandwidth = void 0 === navigator.connection.downlink ? -1 : navigator.connection.downlink, e.downlinkMaxBandwidth = void 0 === t ? -1 : t === 1 / 0 ? 0 : navigator.connection.downlinkMax, this.data.networkInformationMetrics = e
                        }
                    }, t.prototype._formatEffectiveType = function(e) {
                        return "2g" === e ? "TWO_G" : "3g" === e ? "THREE_G" : "4g" === e ? "FOUR_G" : "SLOW_2G"
                    }, t
                }(o),
                y = function() {
                    function n(t) {
                        var i = this;
                        r(this, n), this._resetState(!1), this._defaults = {
                            enabled: !0,
                            "beacon-url": "/li/track",
                            "beacon-service": "tracking",
                            "event-name": "RealUserMonitoringEvent",
                            "topic-name": "RealUserMonitoringEvent",
                            "app-id": "linkedin.rum.tracking",
                            "is-single-page-app": !0,
                            "cross-origin": !1,
                            "beacon-timeout": 3e4,
                            "request-sampling-rate": .01,
                            "user-timing-mark-enabled": !1,
                            "user-timing-measure-enabled": !0,
                            "beacon-source": "apps",
                            "page-key-prefix": "",
                            "navigation-timing-only": !1,
                            "pathname-depth": -1,
                            "lazy-image-class-names": ["lazy-image"],
                            "enable-cdn-tracking": !1,
                            "enable-pop-tracking": !1,
                            "async-plugins-timeout": 5e3,
                            "non-spa-manual-send": !1
                        }, this._config = e(this._defaults, t), this._config.enabled && (this._config.readyState || (this._config.readyState = document.readyState), this._config.xcndUrl = null, this._config["navigation-timing-only"] ? this._config["enable-rs-timing"] = this._config["enable-rs-timing"] || !1 : this._config["enable-rs-timing"] = this._config["enable-rs-timing"] !== !1, this._config.plugins = [new s(this), new u(this), new m(this), new c(this), new p(this)], this._config["enable-cdn-tracking"] && this._config.plugins.push(new d(this)), this._config["enable-pop-tracking"] && this._config.plugins.push(new l(this)), "function" == typeof PerformanceObserver && "function" == typeof PerformanceLongTaskTiming && this._config.plugins.push(new h(this)), this._isInitialLoad = !0, this._initialStartTime = void 0, this._renderCompleteCount = 0, this._isLazyRender = !1, this._allBeaconData = [], this._csrfToken = "", this._isInternalApp = !1, this._config["beacon-source"] && "internal-apps" === this._config["beacon-source"] && (this._isInternalApp = !0, "lite" !== this._config["beacon-service"] && "https://www.linkedin-ei.com/lite/rum-track" !== this._config["beacon-url"] && "/li/track" != this._config["beacon-url"] || (this._config["beacon-service"] = "tracking", this._config["beacon-url"] = "https://lca1-mobile-tracking-frontend-vip-1.corp.linkedin.com/li/track/")), this._onLoad = function() {
                            setTimeout(function() {
                                i._collectPluginData()
                            }, 500)
                        }, this._onUnload = function() {
                            i._collectPluginData()
                        }, this._config["navigation-timing-only"] && !this._config["non-spa-manual-send"] ? "complete" === this._config.readyState ? this._onLoad() : window.addEventListener("load", this._onLoad) : this._config["navigation-timing-only"] || (this._config["non-spa-manual-send"] ? console.error("Manual send mode not supported for SPA apps") : window.addEventListener("unload", this._onUnload)))
                    }
                    return n.prototype.destroy = function() {
                        this._config["navigation-timing-only"] && !this._config["non-spa-manual-send"] ? window.removeEventListener("load", this._onLoad) : this._config["navigation-timing-only"] || (this._config["non-spa-manual-send"] ? console.error("Manual send mode not supported for SPA apps") : (this._collectPluginData(), window.removeEventListener("unload", this._onUnload)))
                    }, n.prototype.setPageKey = function(e) {
                        this._beaconData.pageKey = e
                    }, n.prototype.setCurrentUser = function(e) {
                        this._isInternalApp && "string" == typeof e && (this._beaconData.sessionID = e)
                    }, n.prototype.appTransitionStart = function(e) {
                        (e || this._renderCompleteCount > 0) && (this._collectPluginData(), this._beaconData.navigationStart = t(), this._isInitialLoad = !1)
                    }, n.prototype.appRenderComplete = function() {
                        var e = this;
                        this._renderCompleteCount++, this._beaconData.renderCompleteTime = t(), this._timeOutVal || (this._timeOutVal = setTimeout(function() {
                            e._collectPluginData()
                        }, this._config["beacon-timeout"]))
                    }, n.prototype.addTreeId = function(e, t) {
                        if (this._config.plugins && this._config.plugins.length > 2) {
                            var n = this._config.plugins[2];
                            n && n.addTreeId(e, t)
                        }
                    }, n.prototype.appViewRenderStart = function(e, n) {
                        this._viewTimings[e] = {
                            renderName: n || e,
                            viewName: n,
                            viewId: e,
                            renderStart: t()
                        }
                    }, n.prototype.appViewRenderComplete = function(e, n) {
                        this._viewTimings[e] && (this._viewTimings[e].renderEnd = t())
                    }, n.prototype.setDeepLinkTrackingId = function(e) {
                        this._shouldSendBeacon = !1
                    }, n.prototype.setWindowHiddenState = function(e) {
                        this._beaconData.isImpactedByHiddenWindow = e
                    }, n.prototype.setPageInstance = function(e) {
                        this._beaconData.pageInstance = e
                    }, n.prototype.setIsLazyRender = function(e) {
                        this._isLazyRender = e
                    }, n.prototype.getConfig = function() {
                        return this._config
                    }, n.prototype.pluginDone = function() {
                        for (var e, t = this, n = 0; n < this._config.plugins.length; n++)
                            if (e = this._config.plugins[n], e.isAsync() && !e.isComplete()) return !1;
                        setTimeout(function() {
                            t._sendAllData()
                        }, 500)
                    }, n.prototype.manuallySetNonSpaPLTSendBeacon = function() {
                        var e = t(),
                            n = this._collectPlugin(),
                            r = this._allBeaconData.length;
                        r > 0 && void 0 !== this._allBeaconData[r - 1].loadEventEnd && (this._allBeaconData[r - 1].loadEventEnd = e), this._checkAsyncPlugAndSend(n)
                    }, n.prototype._resetState = function(e) {
                        this._beaconData = {}, this._viewTimings = {}, this._scrollTime = void 0, this._shouldSendBeacon = !0, this._timeOutVal && (clearTimeout(this._timeOutVal), this._timeOutVal = void 0), e && this._config.plugins.map(function(e) {
                            e.resetState()
                        })
                    }, n.prototype._readRenderTimingEntries = function() {
                        if (Object.keys(this._viewTimings).length > 0) {
                            this._beaconData.detailedRenderTimingEntries = [];
                            for (var e in this._viewTimings) this._viewTimings.hasOwnProperty(e) && this._beaconData.detailedRenderTimingEntries.push(this._viewTimings[e])
                        }
                    }, n.prototype._collectPluginData = function() {
                        var e = this._collectPlugin();
                        this._checkAsyncPlugAndSend(e)
                    }, n.prototype._collectPlugin = function() {
                        var e = !0;
                        if (this._config.enabled) return this._config.plugins.map(function(t) {
                            t.collectData(), t.isComplete() || (e = !1)
                        }), this._pushCurrentBeaconData(), e
                    }, n.prototype._checkAsyncPlugAndSend = function(e) {
                        var t = this;
                        e ? this._sendAllData() : setTimeout(function() {
                            t._markAllAsyncPluginComplete()
                        }, this._config["async-plugins-timeout"]), this._resetState(!0)
                    }, n.prototype._markAllAsyncPluginComplete = function() {
                        this._config.plugins.map(function(e) {
                            e.isAsync() && e.markComplete()
                        }), this._sendAllData()
                    }, n.prototype._doesNotHaveLazyImageClass = function(e) {
                        var t, n = !0,
                            r = this._config["lazy-image-class-names"];
                        if (e && e.className && r)
                            for (t = r.length - 1; t >= 0; t--) e.className.indexOf(r[t]) > -1 && (n = !1);
                        return n
                    }, n.prototype._doesElementOverlapWithViewport = function(e) {
                        var t, n = e.getBoundingClientRect();
                        return t = {
                            top: Math.max(n.top, 0),
                            left: Math.max(n.left, 0),
                            bottom: Math.min(n.bottom, window.innerHeight || doc.documentElement.clientHeight),
                            right: Math.min(n.right, window.innerWidth || doc.documentElement.clientWidth)
                        }, !(t.bottom <= t.top || t.right <= t.left)
                    }, n.prototype._getImgResourceEntries = function() {
                        var e, t, n = [],
                            r = this._beaconData.resourceTimingEntries;
                        if (r)
                            for (e = r.length - 1; e >= 0; e--) t = r[e], "img" === t.initiatorType && n.push(t);
                        return n
                    }, n.prototype._cleanUpResourceTimingEntries = function() {
                        var e;
                        if (this._beaconData.resourceTimingEntries)
                            for (e = this._beaconData.resourceTimingEntries.length - 1; e >= 0; e--) this._beaconData.resourceTimingEntries[e].name && (this._beaconData.resourceTimingEntries[e].name = this._beaconData.resourceTimingEntries[e].name.split(/[?#]/)[0])
                    }, n.prototype._readPageKey = function() {
                        this._beaconData && !this._beaconData.pageKey && this._isInitialLoad && (this._beaconData.pageKey = this._getPageKey()), this._isInternalApp && ("EMBER" === this._config["web-ui-framework"] && void 0 !== this._beaconData.pageKey ? this._beaconData.pageKey = this._config["page-key-prefix"] + ":" + this._beaconData.pageKey : document.querySelector('meta[name="pageKey"]') || (this._beaconData.pageKey = this._config["page-key-prefix"] + ":", this._config["pathname-depth"] > -1 ? this._beaconData.pageKey += window.location.pathname.split(/[/#]/).slice(0, this._config["pathname-depth"] + 1).join("/") : this._beaconData.pageKey += window.location.pathname))
                    }, n.prototype._getPageKey = function() {
                        var e = document.querySelector('meta[name="pageKey"]');
                        return e ? e.getAttribute("content") : document.body.id ? document.body.id.substring("pagekey-".length) : ""
                    }, n.prototype._getRenderingMode = function() {
                        var e, t = document.querySelector('meta[name="renderingMode"]');
                        return t && (e = t.getAttribute("data-mode"), "BIGPIPE" === e && (e = "BIG_PIPE")), e
                    }, n.prototype._doesRenderErrorCodeBlockExists = function() {
                        return null != document.querySelector("code#renderError")
                    }, n.prototype._readSinglePageAppData = function() {
                        this._beaconData.isSinglePageApp = this._config["is-single-page-app"], this._beaconData.isSinglePageApp && (this._beaconData.webUIFramework = this._config["web-ui-framework"], this._beaconData.appRenderMode = this._getRenderingMode(), this._isInitialLoad ? (this._beaconData.pageLoadMode = "INITIAL", this._doesRenderErrorCodeBlockExists() && (this._beaconData.isAppRenderFailed = !0)) : this._beaconData.pageLoadMode = "PARTIAL")
                    }, n.prototype._sendAllData = function() {
                        for (var t, n, r, i = {}, t = 0; t < this._config.plugins.length; t++) n = this._config.plugins[t], n.isAsync() && (i = e(i, n.getData()));
                        for (t = 0; t < this._allBeaconData.length; t++) r = e(this._allBeaconData[t], i), this._sendBeacon(r);
                        this._allBeaconData = []
                    }, n.prototype._pushCurrentBeaconData = function() {
                        var t;
                        t = this._getBeaconAndPluginData(), t && this._allBeaconData.push(e({}, t))
                    }, n.prototype._readIsSSL = function() {
                        window && window.location && (this._beaconData.isSSL = "https:" === window.location.protocol ? 1 : 0)
                    }, n.prototype._getBeaconAndPluginData = function() {
                        var t = this;
                        if (this._readPageKey(), this._readSinglePageAppData(), this._readRenderTimingEntries(), this._readIsSSL(), this._config["app-version"] && (this._beaconData.appVersion = this._config["app-version"]), this._config.plugins.map(function(n) {
                                t._beaconData = e(t._beaconData, n.getData())
                            }), "navigationStart" in this._beaconData && this._shouldSendBeacon) {
                            if (this._initialStartTime || (this._initialStartTime = this._beaconData.navigationStart), this._beaconData.boomerangStart = this._initialStartTime, this._cleanUpResourceTimingEntries(), this._beaconData.isSinglePageApp)
                                if ("renderCompleteTime" in this._beaconData) this._beaconData.timeDone = this._beaconData.renderCompleteTime - this._beaconData.navigationStart;
                                else if (!this._config["navigation-timing-only"]) return;
                            return this._beaconData
                        }
                    }, n.prototype._sendBeacon = function(e) {
                        if (this._config.enabled) try {
                            if (this._fireTrackingBeacon(e), "undefined" != typeof CustomEvent) {
                                var t = new CustomEvent("RUMEvent", {
                                    detail: e
                                });
                                document.dispatchEvent(t)
                            }
                        } catch (n) {}
                    }, n.prototype._fireTrackingBeacon = function(e) {
                        var t, n = {
                            eventInfo: {
                                eventName: this._config["event-name"],
                                topicName: this._config["topic-name"],
                                appId: this._config["app-id"]
                            },
                            eventBody: e
                        };
                        e.header = {
                            pageInstance: e.pageInstance
                        }, e.requestHeader = {
                            pageKey: e.pageKey
                        }, n.eventBody.trackingTime = -1, t = new XMLHttpRequest, t.open("POST", this._config["beacon-url"], !0), t.setRequestHeader("content-type", "application/json"), this._csrfToken || (this._csrfToken = this._getCsrfToken()), t.setRequestHeader("Csrf-Token", this._csrfToken), t.send(JSON.stringify([n]))
                    }, n.prototype._getCookieString = function() {
                        return document.cookie
                    }, n.prototype._getCsrfToken = function() {
                        for (var e = "JSESSIONID=", t = this._getCookieString().split(";"), n = 0; n < t.length; n++) {
                            for (var r = t[n];
                                " " === r.charAt(0);) r = r.substring(1);
                            if (r.indexOf(e) !== -1) {
                                var i = r.substring(e.length, r.length);
                                return '"' === i[0] && '"' === i[i.length - 1] && (i = i.substring(1, i.length - 1)), i
                            }
                        }
                        return ""
                    }, n
                }();
            return y
        })
    }]);
! function(e, t, n, r) {
    var i = e(t);
    e.fn.lazyload = function(a) {
        function o() {
            var t = 0;
            u.each(function() {
                var n = e(this);
                if (!m.skip_invisible || n.is(":visible"))
                    if (e.abovethetop(this, m) || e.leftofbegin(this, m));
                    else if (e.belowthefold(this, m) || e.rightoffold(this, m)) {
                    if (++t > m.failure_limit) return !1
                } else n.trigger("appear"), t = 0
            })
        }
        var s, u = this,
            m = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return a && (r !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), r !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), e.extend(m, a)), s = m.container === r || m.container === t ? i : e(m.container), 0 === m.event.indexOf("scroll") && s.bind(m.event, function() {
            return o()
        }), this.each(function() {
            var t = this,
                n = e(t);
            t.loaded = !1, n.attr("src") !== r && n.attr("src") !== !1 || n.is("img") && n.attr("src", m.placeholder), n.one("appear", function() {
                if (!this.loaded) {
                    if (m.appear) {
                        var r = u.length;
                        m.appear.call(t, r, m)
                    }
                    e("<img />").bind("load", function() {
                        var r = n.attr("data-" + m.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[m.effect](m.effect_speed), t.loaded = !0;
                        var i = e.grep(u, function(e) {
                            return !e.loaded
                        });
                        if (u = e(i), m.load) {
                            var a = u.length;
                            m.load.call(t, a, m)
                        }
                    }).attr("src", n.attr("data-" + m.data_attribute))
                }
            }), 0 !== m.event.indexOf("scroll") && n.bind(m.event, function() {
                t.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function() {
            o()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && u.each(function() {
                e(this).trigger("appear")
            })
        }), e(n).ready(function() {
            o()
        }), this
    }, e.belowthefold = function(n, a) {
        var o;
        return o = a.container === r || a.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(a.container).offset().top + e(a.container).height(), o <= e(n).offset().top - a.threshold
    }, e.rightoffold = function(n, a) {
        var o;
        return o = a.container === r || a.container === t ? i.width() + i.scrollLeft() : e(a.container).offset().left + e(a.container).width(), o <= e(n).offset().left - a.threshold
    }, e.abovethetop = function(n, a) {
        var o;
        return o = a.container === r || a.container === t ? i.scrollTop() : e(a.container).offset().top, o >= e(n).offset().top + a.threshold + e(n).height()
    }, e.leftofbegin = function(n, a) {
        var o;
        return o = a.container === r || a.container === t ? i.scrollLeft() : e(a.container).offset().left, o >= e(n).offset().left + a.threshold + e(n).width()
    }, e.inviewport = function(t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document), slideshare_object.SS_LI_FillAd = function(e) {
    var t = function(e) {
            var t, n = e.split("?"),
                r = n[0],
                i = [],
                a = n[1];
            if ("undefined" != typeof a) {
                i = a.split("&");
                for (var o = i.length - 1; o >= 0; o -= 1) t = i[o].split("=")[0], /\S+@\S+\.\S+/.test(i[o]) && i.splice(o, 1);
                r = r + "?" + i.join("&")
            }
            return r
        },
        n = function() {
            var t = "<iframe ";
            return t += ' width="' + (a > 1 ? a : "100%") + '"', t += ' height="' + (i > 1 ? i : "100%") + '"', t += ' marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" frameborder="0" scrolling="no" ', t += e.delayedAd ? 'source="' + v + '"></iframe>' : 'src="' + v + '"></iframe>'
        },
        r = t(location.href),
        i = e.height || 0,
        a = e.width || 0,
        o = e.tile || "",
        s = e.zone || "",
        u = e.dart_code || "",
        m = e.custom_params || "",
        c = escape(";dc_ref=" + r),
        d = a + "x" + i,
        l = document.getElementById(e.appendTo),
        h = "&_x=" + escape(m._x || "") + u + c,
        p = "&_rx=" + escape(";adsense=t") + escape(m._rx || "") + u;
    p += c, slideshare_object.slideshow && "14748437" === slideshare_object.slideshow.id && (p += escape(";adTest=true")), p += escape(";$DCOPT;ord=$ORD");
    var y = r,
        f = e.tscp_enabled ? "https://www.linkedin.com/tscp-serving/dtag?sz=" : "https://www.linkedin.com/csp/dtag?sz=",
        g = e.ad_src || f,
        v = g + d;
    if (v += "&dc_ref=" + encodeURIComponent(y), v += "&ti=" + o, v += "&z=" + s, v += "&p=5", slideshare_object.rum_pagekey) {
        var b = "slideshare_" + slideshare_object.rum_pagekey;
        v += "&pk=" + b
    }
    u && (v += h), v += p, l ? l.innerHTML += n() : document.write(n())
}, slideshare_object.delayedLIAd = function(e) {
    e.delayedAd = !0, slideshare_object.SS_LI_FillAd(e)
}, slideshare_object.loadDelayedLIAd = function(e, t) {
    var n = e.clone(!0);
    e.replaceWith(n), n.attr("src", n.attr("source")), window.setTimeout(function() {
        t && t.removeClass("hide")
    }, 1e3)
}, slideshare_object.processAdQueue = function(e) {
    var t = e || slideshare_object._adQueue,
        n = function(e) {
            window.setTimeout(function() {
                e.removeClass("hide")
            }, 1e3)
        };
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var i = t[r];
            i.lazyLoad ? slideshare_object.delayedLIAd(i) : (slideshare_object.SS_LI_FillAd(i), n($("#" + i.appendTo).next(".j-cta_remove_ad_fancy")))
        }
}, slideshare_object.loadLISponsoredContentInRelated = function(e) {
    if (e.placeholders && e.placeholders.length > 0) {
        var t = $("#related-tab-content");
        if (t.length > 0) {
            for (var n = document.createElement("script"), r = 1e18 * Math.random(), i = "", a = Handlebars.partials["sponsored-item"], o = 0; o < e.placeholders.length; o++) {
                var s = e.placeholders[o].id,
                    u = e.placeholders[o].position;
                i += "&div=" + s;
                var m = a({
                    id: s,
                    position: u
                });
                t.find("li:visible:eq(" + u + ")").before(m), $("#" + s).on("click", function() {
                    slideshare_object.ga("bigfoot_slideview", "sponsored_content_related_click_" + $(this).data("position"))
                })
            }
            var c = "?";
            if (e.tscpEnabled) {
                for (var d in e.queryParams) c += d + "=" + e.queryParams[d] + "&";
                c += "pk=slideshare_" + slideshare_object.rum_pagekey
            } else c += "random=" + r + i + "&style=false";
            n.src = e.url + c, n.async = !0, n.onload = function() {
                if (window && window.liAds) {
                    if (window.liAds.sponsoredContents)
                        for (var t in window.liAds.sponsoredContents) {
                            var n = window.liAds.sponsoredContents[t];
                            n && n.getSponsoredContentHtml && (n.getSponsoredContentHtmlOrig = n.getSponsoredContentHtml, n.getSponsoredContentHtml = function() {
                                return n.getSponsoredContentHtmlOrig().replace(new RegExp("http://", "ig"), "https://")
                            })
                        }
                    window.liAds.display();
                    for (var r = 0; r < e.placeholders.length; r++) {
                        var i = $("#" + s);
                        i.is(":empty") || (slideshare_object.ga("bigfoot_slideview", "sponsored_content_related_impression_" + $(this).data("position")), i.parent(".related-ad").show(), (new(slideshare_object.utils.imports("slideview.LmsNotice"))).show())
                    }
                }
            }, document.body.appendChild(n)
        }
    }
};
var mobile_util = {};
mobile_util.portraitWidth = function() {
        return Math.min(window.innerHeight, window.innerWidth)
    }, mobile_util.portraitHeight = function() {
        return Math.max(window.innerHeight, window.innerWidth)
    }, mobile_util.portraitMode = function() {
        return window.innerWidth < window.innerHeight
    }, mobile_util.landscapeMode = function() {
        return !this.portraitMode()
    }, mobile_util.deviceAspectRatio = function() {
        return this.portraitWidth() / this.portraitHeight()
    }, mobile_util.isIOS = function() {
        return /(iPad|iPhone|iPod)/i.test(navigator.userAgent)
    }, mobile_util.isIOSWebView = function() {
        return this.isIOS() && !/Safari/i.test(navigator.userAgent)
    }, mobile_util.getIOSVersion = function() {
        var e = new RegExp(/OS (\d+)/),
            t = e.exec(navigator.userAgent);
        return this.isIOS() && t && t.length >= 2 && parseInt(t[1], 10)
    }, mobile_util.isSupportedIOS = function() {
        return this.getIOSVersion() >= 8
    }, mobile_util.isIPad = function() {
        return this.isIOS() && .75 == this.deviceAspectRatio()
    }, mobile_util.isSupportedIOSTwitterWebView = function() {
        return this._checkAppWebViewUsingReferer("twitter")
    }, mobile_util.isSupportedIOSLinkedinWebView = function() {
        return this._checkAppWebViewUsingReferer("linkedin")
    }, mobile_util._checkAppWebViewUsingReferer = function(e) {
        var t = {
                linkedin: {
                    regex: /^(https?:\/\/)?lnkd\.in/i,
                    cookie: "linkedinReferred"
                },
                twitter: {
                    regex: /^(https?:\/\/)?t\.co\//i,
                    cookie: "twitterReferred"
                }
            },
            n = t[e];
        if (void 0 === n) return !1;
        if (this.isIOSWebView && this.isSupportedIOS()) {
            if (n.regex.test(document.referrer)) return this.setCookie(n.cookie, "true"), !0;
            if ("true" == this.getCookie(n.cookie)) return !0
        }
        return !1
    }, mobile_util.isSupportedIOSFacebookWebView = function() {
        return this.isSupportedIOS() && /FBIOS/.test(navigator.userAgent)
    }, mobile_util.isAndroid = function() {
        return /Android/.test(navigator.userAgent)
    }, mobile_util.isAndroidWebView = function() {
        return this.isAndroid() && /Version\/(\d+\.)+(\d+)/.test(navigator.userAgent)
    }, mobile_util.isAndroidTablet = function() {
        return !/Mobile/.test(navigator.userAgent) && this.isAndroid() && this.portraitWidth() >= 600
    }, mobile_util.isAndroidPhone = function() {
        return this.isAndroid() && !this.isAndroidTablet()
    }, mobile_util.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, mobile_util.hasCookie = function(e) {
        return document.cookie.indexOf(e) >= 0
    }, mobile_util.onEvenParityPreso = function() {
        return "undefined" != typeof slideshare_mobile_object && slideshare_mobile_object.slideshow && slideshare_mobile_object.slideshow.slideshowId % 2 === 0
    }, mobile_util.onVideo = function() {
        return "undefined" != typeof slideshare_mobile_object && slideshare_mobile_object.slideshow && "video" === slideshare_mobile_object.slideshow.slideshowType
    }, mobile_util.setCookie = function(e, t, n) {
        t = t || 0, n = n || 7;
        var r = new Date;
        r.setDate(r.getDate() + n), document.cookie = e + "=" + t + "; expires=" + r + "; path=/"
    }, mobile_util.getCookie = function(e) {
        var t = new RegExp(e + "=.[^;]*"),
            n = document.cookie.match(t);
        return !!n && n[0].split("=")[1]
    }, mobile_util.lazyloadImages = function(e, t) {
        t = t || 0;
        var n = function() {
            $(e).lazyload({
                threshold: t
            })
        };
        "undefined" != typeof slideshare_mobile_object && slideshare_mobile_object.windowLoaded ? n() : $(window).load(function() {
            n()
        })
    }, mobile_util.lazyloadImagesOnTrigger = function(e, t) {
        $(e).lazyload({
            event: t
        })
    }, mobile_util.lazyloadImagesNow = function(e) {
        this.lazyloadImagesOnTrigger(e, "lazyLoadImagesNow_trigger"), $(e).trigger("lazyLoadImagesNow_trigger")
    }, mobile_util.trackGAEvent = function(e, t, n, r) {
        r = r || !1;
        var i = window._gaq || [];
        i.push(["_trackEvent", e, t, n, void 0, r])
    }, mobile_util.addSpinnerTo = function(e, t, n) {
        if ("undefined" != typeof e) {
            n = n || "#FFFFFF";
            var r = {
                S: "fa-lg",
                M: "fa-2x",
                L: "fa-3x",
                XL: "fa-4x"
            };
            spinnerSize = r[t.toUpperCase()] || r.M;
            var i = $(e),
                a = $('<i class="fa fa-spinner fa-spin"></i>');
            a.prependTo(i).addClass(spinnerSize).css({
                color: n,
                position: "absolute",
                "z-index": 1e3,
                top: "50%",
                transform: "translate(-50%, -50%)",
                left: "50%"
            })
        }
    }, mobile_util.removeSpinnersFrom = function(e) {
        "undefined" != typeof e && $(e).find(".fa-spinner").remove()
    }, mobile_util.IOSAutoDeepLink = function(e) {
        var t = /^(https?:\/\/)?.*\.slideshare\.(net|com)/i;
        t.test(document.referrer) || this.isSupportedIOSFacebookWebView() || this.isSupportedIOSTwitterWebView() || this.isSupportedIOSLinkedinWebView() || setTimeout(function() {
            var t = document.createElement("IFRAME");
            t.setAttribute("style", "display:none;"), t.setAttribute("src", e), document.body.appendChild(t)
        }, 1e3)
    }, MobilePromo.prototype.init = function() {
        this.$promo = $(this.config.promoSelector), this.$promo.length < 1 || mobile_util.onVideo() || (this.setCopyVersion(), this.promoName = this.config.promoName, this.previouslyClosed() || (this.currentPage = this.config.currentPage, this.$show = this.$promo.find(this.config.showSelector), this.$download = this.$promo.find(this.config.downloadSelector), this.config.lazyloadClass && (this.lazyloadImages = this.config.lazyloadClass), this.config.closedSelector && (this.$close = this.$promo.find(this.config.closedSelector)), this.config.openInAppSelector && (this.$openInApp = this.$promo.find(this.config.openInAppSelector)), this.config.moveAfterSelector && (this.$moveAfter = this.config.moveAfterSelector), this.config.variableContent && (this.variableContent = this.config.variableContent), this.initialized = !0, this.config.launchOnInit && this.launchPromo()))
    }, MobilePromo.prototype.setCopyVersion = function() {
        if (mobile_util.onEvenParityPreso()) {
            var e = "_v2";
            this.config["showSelector" + e] && (this.config.showSelector = this.config["showSelector" + e], this.config.promoName = this.config.promoName + e)
        }
    }, MobilePromo.prototype.disableTouchScroll = function() {
        $("body").bind("touchmove", function(e) {
            e.preventDefault()
        })
    }, MobilePromo.prototype.enableTouchScroll = function() {
        $("body").unbind("touchmove")
    }, MobilePromo.prototype.launchPromo = function(e, t) {
        return this.appropriateContent = e, this.afterCloseAction = t, this.previouslyClosed() || !this.initialized ? void(this.afterCloseAction && (window.location.href = this.afterCloseAction)) : (this.$moveAfter && this.relocatePromo(), e && this.variableContent && this.initContent(), this.initActions(), this.$show.show(), this.$promo.show(), this.config.disableScroll && this.disableTouchScroll(), void(this.lazyloadImages && mobile_util.lazyloadImagesNow(this.lazyloadImages)))
    }, MobilePromo.prototype.relocatePromo = function() {
        this.$moveAfter.after(this.$promo)
    }, MobilePromo.prototype.previouslyClosed = function() {
        return mobile_util.hasCookie(this.promoName + "_closed")
    }, MobilePromo.prototype.initContent = function() {
        var e = this.variableContent[this.appropriateContent];
        if ("object" == typeof e)
            for (var t = 0; t < e.length; t++) {
                var n = $(e[t].selector);
                e[t].attr ? n.attr(e[t].attr, n.data(e[t].dataAttr)) : n.text(n.data(e[t].dataAttr))
            }
    }, MobilePromo.prototype.initActions = function() {
        var e = this;
        mobile_util.trackGAEvent(this.currentPage, this.promoName, "loaded", !0), this.$close && this.$close.on("click", function(t) {
            e.closePromo(), mobile_util.trackGAEvent(e.currentPage, e.promoName, "closed"), e.afterCloseAction && (window.location.href = e.afterCloseAction)
        }), this.$openInApp && this.$openInApp.on("click", function() {
            mobile_util.trackGAEvent(e.currentPage, e.promoName, "opened_in_app")
        }), this.$download && this.$download.on("click", function(t) {
            e.closePromo(), mobile_util.trackGAEvent(e.currentPage, e.promoName, "clicked")
        })
    }, MobilePromo.prototype.closePromo = function() {
        this.$show.hide(), this.$promo.hide(), this.config.disableScroll && this.enableTouchScroll(), this.config.cooloffDays >= 0 && mobile_util.setCookie(this.promoName + "_closed", null, this.config.cooloffDays)
    },
    function(e) {
        var t, n, r, i, a = 1,
            o = this,
            s = !1,
            u = "postMessage",
            m = "addEventListener",
            c = o[u] && !window.opera;
        e[u] = function(t, n, r) {
            n && (t = "string" == typeof t ? t : e.param(t), r = r || parent, c ? r[u](t, n.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : n && (r.location = n.replace(/#.*$/, "") + "#" + +new Date + a++ + "&" + t))
        }, e.receiveMessage = i = function(a, u, d) {
            c ? (a && (r && i(), r = function(t) {
                return "string" == typeof u && t.origin !== u || e.isFunction(u) && u(t.origin) === s ? s : void a(t)
            }), o[m] ? o[a ? m : "removeEventListener"]("message", r, s) : o[a ? "attachEvent" : "detachEvent"]("onmessage", r)) : (t && clearInterval(t), t = null, a && (d = "number" == typeof u ? u : "number" == typeof d ? d : 100, t = setInterval(function() {
                var e = document.location.hash,
                    t = /^#?\d+&/;
                e !== n && t.test(e) && (n = e, a({
                    data: e.replace(t, "")
                }))
            }, d)))
        }
    }(jQuery),
    function(e, t) {
        function n(e) {
            return e === "http://" + location.host || e === "https://" + location.host
        }

        function r(e) {
            return (e + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1")
        }
        e.extend = function(n, r, i) {
            for (var a in r) n[a] = r[a];
            return e.dev && (n.__noSuchMethod__ = function(e, t) {
                error(e, " : no such method exists", t)
            }), t.isFunction(i) && i(), n
        }, e.extend(window, {
            log: e.dev && window.console ? function() {
                try {
                    console.log.apply(console, arguments)
                } catch (e) {}
            } : function() {},
            error: e.dev && window.console ? function() {
                try {
                    console.error.apply(console, arguments)
                } catch (e) {}
            } : function() {},
            dir: e.dev && window.console ? function(e) {
                try {
                    console.dir(e)
                } catch (t) {}
            } : function() {},
            info: e.dev && window.console ? function(e) {
                try {
                    console.info(e)
                } catch (t) {}
            } : function() {},
            getUrlVars: function(e) {
                e = e ? e : window.location.href;
                for (var t, n = [], r = e.slice(e.indexOf("?") + 1).split("&"), i = 0; i < r.length; i++) t = r[i].split("="), n.push(t[0]), n[t[0]] = t[1];
                return n
            },
            getUrlVarsAsObject: function(e) {
                e = e ? e : window.location.href;
                for (var t, n = {}, r = e.slice(e.indexOf("?") + 1).split("&"), i = 0; i < r.length; i++) t = r[i].split("="), n[t[0]] = decodeURIComponent(t[1]);
                return n
            },
            getUrlVar: function(e, t) {
                return this.getUrlVars(t)[e]
            },
            addUrlVar: function(e, n, r) {
                var i = e,
                    a = getUrlVarsAsObject(e);
                return a[n] = r, (urlWithoutParamsLength = e.indexOf("?")) > 0 && (i = e.slice(0, urlWithoutParamsLength)), i + "?" + t.param(a)
            },
            location_without_params: function() {
                return document.location.protocol + "//" + document.location.host + document.location.pathname
            },
            isInternalRedirect: function(e) {
                e = decodeURIComponent(e);
                var t = document.createElement("a");
                t.href = jSecure.sanitizeUrl(e);
                var n = /^https?:$/.test(t.protocol),
                    i = new RegExp("^" + r(location.hostname) + "$").test(t.hostname);
                return n && i
            },
            cookie: function(e, t, n) {
                if ("undefined" == typeof t) {
                    var r = null;
                    if (document.cookie && "" !== document.cookie)
                        for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                            var o = jQuery.trim(i[a]);
                            if (o.substring(0, e.length + 1) == e + "=") {
                                r = decodeURIComponent(o.substring(e.length + 1));
                                break
                            }
                        }
                    return r
                }
                n = n || {}, null === t && (t = "", n.expires = -1);
                var s = "";
                if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
                    var u;
                    "number" == typeof n.expires ? (u = new Date, u.setTime(u.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : u = n.expires, s = "; expires=" + u.toUTCString()
                }
                var m = n.path ? "; path=" + n.path : "",
                    c = n.domain ? "; domain=" + n.domain : "",
                    d = n.secure ? "; secure" : "";
                document.cookie = [e, "=", encodeURIComponent(t), s, m, c, d].join("")
            },
            isBrowserMSIE: function() {
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var e = navigator.userAgent,
                        t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                    if (null != t.exec(e)) return !0
                }
                return !1
            },
            location_without_params: function() {
                return document.location.protocol + "//" + document.location.host + document.location.pathname
            },
            isEuLocale: function(e) {
                e = e.map(function(e) {
                    return e.toLowerCase()
                });
                var t = ["en-gb", "pt-pt", "de", "de-de", "fr", "fr-fr", "it", "it-it", "nl", "nl-nl", "es", "es-es"];
                for (i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (t.indexOf(n) != -1) return !0
                }
                return e.indexOf("pt") != -1 && e.indexOf("pt-br") == -1 || e.indexOf("en") != -1 && e.indexOf("en-us") == -1
            },
            updateMainNavPaddingBottom: function() {
                var e = t("#main_navbar"),
                    n = t(".navbar-inner"),
                    r = t(".j-tos-update-banner"),
                    i = e.find(".sub-navbar");
                r.is(":visible") ? e.css("padding-bottom", n.height() + r.height() + i.height()) : e.css("padding-bottom", n.height() + i.height())
            },
            initTOSBanner: function() {
                var e = t(".j-tos-update-banner");
                if (e.length) {
                    var n = t(mobile_util.isMobile() ? ".j-mobile-text" : ".j-desktop-text"),
                        r = parseInt(cookie("tos_update_banner_shows"), 10);
                    r = isNaN(r) ? 0 : r;
                    var i = (mobile_util.isMobile(), 3);
                    e.length && r < i && (e.show(), n.show(), updateMainNavPaddingBottom(), cookie("tos_update_banner_shows", r + 1, {
                        expires: 365,
                        path: "/"
                    }), e.find(".j-tos-close").on("click", function(t) {
                        e.hide(), n.hide(), updateMainNavPaddingBottom()
                    }))
                }
            }
        }), t(document).ready(function() {
            var e;
            e = navigator.languages ? navigator.languages : navigator.language ? [navigator.language] : [], isEuLocale(e) && initTOSBanner()
        }), e.extend(String.prototype, {
            s: function(e) {
                return "" === e || e ? e : "" === this.str || this.str ? this.str : this
            },
            startsWith: function(e, t) {
                return 0 === this.s(t).indexOf(e)
            }
        }), e.extend(e, {
            action_from_email_check: function() {
                var e = getUrlVar("auth_code");
                if (e && !slideshare_object.user.loggedin) {
                    var t = getUrlVar("login_source"),
                        n = getUrlVar("from"),
                        r = "/signup?";
                    r += n ? "from=" + n + "&" : "", r += t ? "login_source=" + t : "", initiate_login_modal(r, "#login_modal")
                }
            },
            ga: function(e, t, n, r, i) {
                i = !!i, window._gaq && window._gaq.push(["_trackEvent", e, t, n, r, i])
            },
            isHomePage: function() {
                return "/" == window.location.pathname
            },
            isSlideViewPage: function() {
                return void 0 !== this.slideshow
            },
            setLanguageSelector: function() {
                try {
                    var e = window.location.href.match(/:\/\/([^.]*)/)[1];
                    t(".j-languages-selector .j-" + e).addClass("active")
                } catch (n) {
                    t(".j-languages-selector .j-www").addClass("active")
                }
            },
            loadGAandComscore: function() {
                var e = document.getElementsByTagName("script")[0],
                    t = "https:" === document.location.protocol;
                this.loadGA();
                var n = document.createElement("script");
                n.async = !0, n.src = (t ? "//sb" : "//b") + ".scorecardresearch.com/beacon.js", e.parentNode.insertBefore(n, e)
            },
            loadGA: function() {
                var e = document.getElementsByTagName("script")[0],
                    t = "https:" === document.location.protocol,
                    n = document.createElement("script");
                n.async = !0, n.src = (t ? "//ssl" : "//www") + ".google-analytics.com/ga.js", e.parentNode.insertBefore(n, e)
            },
            localizeForOtherLanguages: function() {
                3 === (parts = location.hostname.split(".")).length && (first_part = parts.shift(), first_part.match(/fr|es|pt/) && t(".modal-login-header").removeClass("modal-login-header").addClass("modal-login-header-other"), first_part.match(/www/) || (t(".container-box .login-wrapper").removeClass("login-wrapper").addClass("login-wrapper-other"), t(".or").removeClass("or").addClass("or-other"), t("#smt-lang-selector").addClass("lang-selector-other")))
            },
            addAfterLoginEvent: function(e) {
                var t = JSON.stringify(e);
                window.cookie("after_login_action", t, {
                    path: "/"
                })
            },
            add_signin_link: function(e) {
                t(e).each(function() {
                    var e = "/login";
                    if (e += "/" === document.location.pathname ? "?from_source=" + encodeURIComponent(document.location.href) + "&login_source=homepage.popup.like&from=favorite" : "?from_source=" + encodeURIComponent(document.location.href), t(this).hasClass("void_fancybox")) t(this).hasClass("mobile") ? t(this).attr("href", jSecure.sanitizeUrl("/mobile" + e)) : t(this).attr("href", jSecure.sanitizeUrl(e));
                    else {
                        var n = {
                            href: e,
                            "data-target": "#login_modal"
                        };
                        t(this).attr(n)
                    }
                })
            },
            add_login_source: function(e, n) {
                t(e).each(function() {
                    t(this).attr("href", jSecure.sanitizeUrl(addUrlVar(t(this).attr("href"), "login_source", n))), t(this).attr("href", jSecure.sanitizeUrl(addUrlVar(t(this).attr("href"), "layout", "foundation")))
                })
            },
            addSigninFrom: function(e, n) {
                t(e).each(function() {
                    t(this).attr("href", jSecure.sanitizeUrl(addUrlVar(t(this).attr("href"), "from", n)))
                })
            },
            bindToModalLogin: function(e) {
                slideshare_object.user && !slideshare_object.user.loggedin && t(e).each(function() {
                    t(this).hasClass("void_fancybox") || t(this).attr("data-reveal-id", "login_modal")
                })
            },
            bind_favorites: function(e) {
                var n = ".j-favorited, .j-favorite";
                t(e).delegate(n, "click", n, slideshare_object.favorites_handler)
            },
            favorites_handler: function(e) {
                var n = t(this);
                if (slideshare_object.user.loggedin) {
                    e.preventDefault(), e.stopPropagation();
                    var r = !n.hasClass("favorited"),
                        i = n.data("ss-url"),
                        a = r ? slideshare_object.favorites.create_url : slideshare_object.favorites.delete_url,
                        o = {
                            element: t(this),
                            url: a,
                            selectors: e.data,
                            event_category: "",
                            is_favorited: r,
                            ss_url: i,
                            data: {
                                slideshow_id: n.attr("data-ssid"),
                                user_id: slideshare_object.user.id,
                                source: "slideviewer",
                                response_type: "json"
                            }
                        };
                    slideshare_object.favorites_call_handler(o)
                } else {
                    var s = {
                        event: "like",
                        data: {
                            slideshow_id: n.attr("data-ssid")
                        }
                    };
                    slideshare_object.addAfterLoginEvent(s)
                }
            },
            toggleLikeButton: function(e, n) {
                t(n).toggleClass("favorited"), t(n).hasClass("favorited") && (t(n).addClass("animate"), t(n).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e) {
                    t(n).removeClass("animate")
                }))
            },
            favorites_call_handler: function(e) {
                var n = e.is_favorited ? "favorite_click" : "unfavorite_click";
                window._gaq.push(["_trackEvent", e.event_category, n]);
                var r = (e.is_favorited ? "unfavorited" : "favorited", function() {
                    var n = e.element.closest(".iso_slideshow");
                    n && n.length > 0 ? t.each(n.find(e.selectors), slideshare_object.toggleLikeButton) : t.each(e.element.parent().find(e.selectors), slideshare_object.toggleLikeButton)
                });
                r(), t.ajax({
                    url: e.url,
                    data: e.data,
                    dataType: "json",
                    type: "POST",
                    success: function(t) {
                        if (t.success) {
                            e.is_favorited && slideshare_object.isHomePage() && slideshare_object.prompt_connect_li_and_ss();
                            var n = e.is_favorited ? "favorite_click_success" : "unfavorite_click_success";
                            window._gaq.push(["_trackEvent", e.event_category, n])
                        } else r()
                    },
                    error: function(e) {
                        r()
                    }
                })
            },
            favoritesStatusUpdate: function() {
                var e = [];
                favoriteElements = t(".j-favorite"), favoriteElements.each(function() {
                    e.push(t(this).attr("data-ssid"))
                }), t.ajax({
                    type: "GET",
                    url: slideshare_object.favorites && slideshare_object.favorites.user_favorites ? slideshare_object.favorites.user_favorites : "/favorite/get_favorites",
                    data: "slideshow_id=" + e.join(","),
                    dataType: "json",
                    success: function(e) {
                        if (e.favorited.length > 0) {
                            var n = "[data-ssid=" + e.favorited.join("],[data-ssid=") + "]";
                            favoriteElements.filter(n).each(function() {
                                t.each(t(this).parent().children(".favorite-cta, .j-favorite, .j-favorited"), function(e, n) {
                                    t(n).addClass("favorited")
                                })
                            })
                        }
                    }
                })
            },
            prompt_connect_li_and_ss: function() {},
            lazyloadThumbnails: function() {
                var e = function() {
                    var e = t(".j-lazy-thumb");
                    e.length > 0 && e.lazyload({
                        threshold: 100,
                        failure_limit: 100
                    }).removeClass("j-lazy-thumb")
                };
                slideshare_object.windowLoaded && e(), t(window).load(function() {
                    slideshare_object.windowLoaded = !0, e()
                })
            },
            autosuggestTop: function() {
                var e, n = t("#nav-search form"),
                    r = t("#nav-search-query"),
                    i = t("#nav-search .search-suggestions");
                t("body").on("submit", "#nav-search form", function() {
                    r.blur(), i.hide()
                }), t("body").on("focus", "#nav-search-query", function() {
                    i.is(":empty") || i.show()
                }), t("body").on("click", "#nav-search .search-suggestions li", function() {
                    r.val(t(this).text()), i.hide(), n.submit()
                }), t("body").on("focusout", "#nav-search-query", function() {
                    e = setTimeout(function() {
                        i.hide()
                    }, 100)
                }), t("body").on("mousedown", ".search-suggestions", function() {
                    setTimeout(function() {
                        clearTimeout(e)
                    }, 50)
                }), t("body").on("mousemove, mouseover", "#nav-search .search-suggestions li", function() {
                    i.children("li").removeClass("hovered"), t(this).addClass("hovered")
                }).on("mouseout", "#nav-search .search-suggestions", function() {
                    i.children("li").removeClass("hovered")
                });
                var a = function() {
                    var e = 0;
                    return function(t, n) {
                        clearTimeout(e), e = setTimeout(t, n)
                    }
                }();
                t("body").on("keyup", "#nav-search-query", function(e) {
                    a(function() {
                        if (38 === parseInt(e.keyCode, 10) || 40 === parseInt(e.keyCode, 10)) {
                            var n = -1;
                            40 === parseInt(e.keyCode, 10) && (n = 1);
                            var r = i.children("li.suggestion"),
                                a = t(".search-suggestions li.suggestion.hovered"),
                                o = (r.index(a) + n) % r.length,
                                s = i.children("li.suggestion").eq(o);
                            return r.removeClass("hovered"), s.addClass("hovered"), void t("#nav-search-query").val(s.text())
                        }
                        if (37 !== parseInt(e.keyCode, 10) && 39 !== parseInt(e.keyCode, 10)) {
                            var u = encodeURIComponent(t("#nav-search-query").val()),
                                m = u.replace(/[\(\)\[\]\!\#\~'"*&]/gi, "").replace(/\s{2,}/g, " ").trim(m);
                            return 0 === m.length ? void i.empty().hide() : void(t.inArray("site_search", slideshare_object.feature_flag) !== -1)
                        }
                    }, 50)
                })
            },
            isDownloadUrl: function(e) {
                return e = e || window.location.href, getUrlVar("download_id", e) && getUrlVar("download_id", e).length > 0 || "true" === getUrlVar("abbr", e) || "download" === getUrlVar("from", e)
            },
            generateUUID: function() {
                var e = Date.now();
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
                })
            },
            generateTrackingID: function(e) {
                e = e || 16;
                var t, n = "",
                    r = "0000";
                for ("undefined" != typeof slideshare_object && "undefined" != typeof slideshare_object.slideshow && (t = parseInt(slideshare_object.slideshow.id).toString(16).slice(-4), n += (r + t).slice(-r.length)), null !== cookie("_uv_id") && (t = parseInt(cookie("_uv_id")).toString(16).slice(-4), n += (r + t).slice(-r.length)), e -= n.length; e--;) n += Math.floor(16 * Math.random()).toString(16).toUpperCase();
                return n
            },
            getPageKey: function() {
                return /^pagekey-(.+)$/.exec(document.body.id)[1]
            },
            crossDomainMessageReceivers: [],
            initCrossDomainMessaging: function() {
                t.isFunction(t.receiveMessage) && t.receiveMessage(t.proxy(function(e) {
                    t(this.crossDomainMessageReceivers).each(function(t, n) {
                        n(e.data)
                    })
                }, this), n)
            },
            registerMessageReceiver: function(e) {
                this.crossDomainMessageReceivers.push(e)
            }
        }), e.initCrossDomainMessaging()
    }(slideshare_object, jQuery), ! function(e, t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define("liTrackClient", [], t) : e.liTrackClient = t()
    }(this, function() {
        var e = {
            AJAX_METHOD: "POST",
            DEFAULT_PAGE_TYPE: "ajax",
            globalTrackingUrl: null,
            globalTrackingAppId: "no.app.id",
            lastDisplayMetric: null,
            lastActionMetric: null,
            queue: [],
            maxQueueSize: 1,
            queueTimeout: 1e3,
            timeoutId: null,
            csrfToken: "",
            setProperty: function(e, t) {
                if (t) return void(this[e] = t);
                var n = this.getMetaTag(e);
                return n ? void(this[e] = n.content) : void 0
            },
            setTrackingUrl: function(e) {
                this.setProperty("globalTrackingUrl", e)
            },
            setAppId: function(e) {
                this.setProperty("globalTrackingAppId", e)
            },
            setCsrfToken: function(e) {
                this.setProperty("csrfToken", e)
            },
            getCookieString: function() {
                return document.cookie
            },
            getCsrfToken: function() {
                for (var e = "JSESSIONID=", t = this.getCookieString().split(";"), n = 0; n < t.length; n++) {
                    for (var r = t[n];
                        " " === r.charAt(0);) r = r.substring(1);
                    if (-1 !== r.indexOf(e)) {
                        var i = r.substring(e.length, r.length);
                        return '"' === i[0] && '"' === i[i.length - 1] && (i = i.substring(1, i.length - 1)), i
                    }
                }
                return ""
            },
            createXmlHttpObject: function() {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
                return null
            },
            ajax: function(e, t, n) {
                var r;
                return this.globalTrackingUrl ? (r = this.createXmlHttpObject(), void(r && (r.open(this.AJAX_METHOD, this.globalTrackingUrl, !0), r.withCredentials = !0, r.setRequestHeader("Content-type", "application/json"), this.csrfToken ? r.setRequestHeader("Csrf-Token", this.csrfToken) : r.setRequestHeader("Csrf-Token", this.getCsrfToken()), r.onreadystatechange = function() {
                    return 4 === r.readyState ? 200 !== r.status && 304 !== r.status ? void(n && n("Request returned " + r.status)) : void("function" == typeof t && t(r)) : void 0
                }, 4 !== r.readyState && r.send(e)))) : void(n && n("Tracking url is not defined"))
            },
            flush: function() {
                var e = this;
                this.ajax(JSON.stringify(this.queue), null, e.logError), this.queue = [], clearTimeout(this.timeoutId), this.timeoutId = null
            },
            addToQueue: function(e) {
                if (this.queue.push(e), this.queue.length >= this.maxQueueSize) return this.flush();
                if (!this.timeoutId) {
                    var t = this;
                    this.timeoutId = setTimeout(function() {
                        t.flush()
                    }, this.queueTimeout)
                }
            },
            track: function(e) {
                return "object" != typeof e ? void this.logError("Track data must be an object") : (e = this.fillMissingData(e), void this.addToQueue(e))
            },
            trackWithCallback: function(e, t) {
                var n = this;
                if ("object" != typeof e) return void this.logError("Track data must be an object");
                e = this.fillMissingData(e);
                var r = JSON.stringify(e);
                this.ajax(r, function(e) {
                    "function" == typeof t && t(null, e.responseText)
                }, function(e) {
                    n.logError(e), "function" == typeof t && t(e)
                })
            },
            getTimestamp: function() {
                return Math.round((new Date).getTime() / 1e3)
            },
            getTrackingCode: function(e) {
                return e.eventBody.trackingCode ? e.eventBody.trackingCode : "PageViewEvent" === e.eventInfo.eventName ? "full" === e.eventBody.pageType ? (this.lastDisplayMetric = e.eventBody.requestHeader.pageKey, this.lastActionMetric) : (this.lastActionMetric = e.eventBody.requestHeader.pageKey, this.lastDisplayMetric) : null
            },
            fillMissingData: function(e) {
                if (!e.eventInfo) return this.logError("You must specify eventInfo");
                if (e.eventInfo.appId || (e.eventInfo.appId = this.globalTrackingAppId), !e.eventBody) return this.logError("You must specify eventBody");
                e.eventBody.trackingCode = this.getTrackingCode(e);
                var t = e.eventBody.trackingInfo || {};
                t.clientTimestamp || (t.clientTimestamp = this.getTimestamp()), e.eventBody.trackingInfo = t;
                var n = e.eventBody.requestHeader || {};
                return n.pageKey || (n.pageKey = this.lastDisplayMetric), e.eventBody.requestHeader = n, e
            },
            trackPageView: function(e) {
                var t, n, r, i;
                "string" == typeof e ? (t = e, i = this.DEFAULT_PAGE_TYPE) : (t = e.pageKey, i = e.pageType || this.DEFAULT_PAGE_TYPE, n = e.trackingCode, r = e.trackingInfo);
                var a = {
                    eventInfo: {
                        eventName: "PageViewEvent"
                    },
                    eventBody: {
                        requestHeader: {
                            pageKey: t
                        },
                        pageType: i
                    }
                };
                return n && (a.eventBody.trackingCode = n), r && (a.eventBody.trackingInfo = r), t ? void this.track(a) : this.logError("You must provide a pageKey")
            },
            trackUnifiedAction: function(e) {
                if (!e.action) return this.logError("You must provide action");
                if (!e.sponsoredFlag) return this.logError("You must provide sponsoredFlag");
                var t = {
                    eventInfo: {
                        eventName: "UnifiedActionEvent"
                    },
                    eventBody: e
                };
                this.track(t)
            },
            trackArticleView: function(e) {
                if (!e.articleId) return this.logError("You must provide articleId");
                var t = {
                    eventInfo: {
                        eventName: "ArticleViewEvent"
                    },
                    eventBody: e
                };
                this.track(t)
            },
            trackUnifiedImpression: function(e) {
                if (!e.results) return this.logError("You must provide results");
                var t = {
                    eventInfo: {
                        eventName: "UnifiedImpressionEvent"
                    },
                    eventBody: e
                };
                this.track(t)
            },
            logError: function(e) {
                var t = window.console;
                t && t.error && t.error(e)
            },
            getMetaTag: function(e) {
                var t, n, r, i = document.getElementById(e) || document.querySelector && document.querySelector("meta[name=" + e + "]");
                if (i) return i;
                for (t = document.getElementsByTagName("meta"), r = t.length, n = 0; r > n; n++)
                    if (t[n].getAttribute("name") === e) return t[n];
                return null
            },
            init: function() {
                this.setTrackingUrl(), this.setAppId()
            }
        };
        return e.init(), e
    }),
    function(e) {
        function t() {
            var e;
            this.APP_BASE = "slideshare.js.tracking", this._bodyDefaults = {}, r.user && r.user.id && (e = {
                header: {
                    applicationViewerUrn: this.getUrn("User", r.user.id)
                }
            }, this._bodyDefaults = $.extend({}, this._bodyDefaults, e)), "undefined" !== a && (a.setTrackingUrl(), a.setAppId(this.APP_BASE))
        }
        var n, r = e.slideshare_object,
            i = r.utils,
            a = window.liTrackClient;
        i && !i.imports("tracking.TrackingUtils") && (n = {
            Clip: "urn:li:slideShareClip:",
            Clipboard: "urn:li:slideShareClipboard:",
            Guest: "urn:li:slideShareGuest:",
            LyndaCategory: "urn:li:lyndaCategory:",
            LyndaCourse: "urn:li:lyndaCourse:",
            LyndaVideo: "urn:li:lyndaVideo:",
            LeadCampaign: "urn:li:slideShareLeadCampaign:",
            Slideshow: "urn:li:slideShareSlideshow:",
            User: "urn:li:slideShareUser:"
        }, t.prototype = {
            constructor: t,
            getAppId: function(e) {
                return e ? this.APP_BASE + "." + e : this.APP_BASE
            },
            recordTrackingEvent: function(e, t, n, r) {
                var i;
                if (n = $.extend({}, this._bodyDefaults, n), !window.liTrackClient) throw new Error("liTrackClient is not initialized");
                i = {
                    eventInfo: {
                        eventName: t,
                        appId: e
                    },
                    eventBody: n
                }, r ? a.trackWithCallback(i, r) : a.track(i)
            },
            generateTrackingID: function(e) {
                var t, n = "",
                    i = "0000";
                for (e = e || 16, "undefined" != typeof r && "undefined" != typeof r.slideshow && null !== r.slideshow.id && (t = parseInt(r.slideshow.id).toString(16).slice(-4), n += (i + t).slice(-i.length)), null !== cookie("_uv_id") && (t = parseInt(cookie("_uv_id")).toString(16).slice(-4), n += (i + t).slice(-i.length)), e -= n.length; e--;) n += Math.floor(16 * Math.random()).toString(16).toUpperCase();
                return n
            },
            getUrn: function(e, t) {
                return t ? n[e] ? n[e] + t : "urn:li:slideShare" + e + ":" + t : null
            },
            getPageKey: function() {
                var e = /^pagekey-(.+)$/.exec(document.body.id);
                if (e) return e[1]
            },
            getSlideShareGuest: function() {
                return cookie("_uv_id")
            }
        }, i.exports("tracking.TrackingUtils", t))
    }(window),
    function(e) {
        function t(e) {
            var e = e || {};
            this.trackingUtils = new n, this.pageKey = ssClientUtils.li.getPageKey(), this.appId = e.appId || this.trackingUtils.getAppId("sharing"), this.trackingId = e.trackingId || this.trackingUtils.generateTrackingID(), this.bodyDefaults = {
                sharingTrackingId: this.trackingId,
                isOwner: !1,
                isEmbed: !1,
                requestHeader: {
                    pageKey: this.pageKey,
                    path: window.document.location.pathname,
                    userAgent: window.navigator && window.navigator.userAgent
                }
            }
        }
        var n = slideshare_object.utils.imports("tracking.TrackingUtils"),
            r = {
                SlideShareExternalShareEvent: "SlideShareExternalShareEvent"
            },
            i = {
                slideshow: "Slideshow"
            },
            a = {
                directlink: "DIRECT_LINK",
                email: "EMAIL",
                facebook: "FACEBOOK",
                linkedin: "LINKEDIN",
                pinterest: "PINTEREST",
                twitter: "TWITTER"
            };
        t.prototype.track = function(e, t) {
            var t = $.extend({}, this.bodyDefaults, t);
            this.trackingUtils.recordTrackingEvent(this.appId, e, t)
        }, t.prototype.shareSlideShow = function(e) {
            var e = e || {},
                t = e.entityId,
                n = a[e.shareType];
            if (null != t && null != n) return this.track(r.SlideShareExternalShareEvent, {
                entityUrn: ssClientUtils.li.getUrn(i.slideshow, t),
                shareType: n,
                isOwner: e.isOwner,
                isEmbed: e.isEmbed
            })
        }, e.ShareTracker = t
    }(window.slideshare_object),
    function(e) {
        function t(e) {
            var t = slideshare_object.utils.imports("tracking.TrackingUtils");
            this.utils = new t, this.pageKey = this.utils.getPageKey(), this.trackingId = e.trackingId || this.utils.generateTrackingID(), this.referrerParam = e.referrerParam || "rftp", this.userIsOwner = e.userIsOwner, this.appId = e.appId || this.utils.getAppId("clipping"), this.bodyDefaults = {
                clippingSessionId: this.trackingId,
                requestHeader: {
                    pageKey: this.pageKey,
                    path: window.document.location.pathname,
                    userAgent: navigator && navigator.userAgent,
                    referer: document.referrer
                }
            }
        }
        var n = {
                single: "SINGLE",
                bulk: "BATCH"
            },
            r = {
                add: "ADD",
                copy: "COPY",
                reclip: "RECLIP",
                move: "MOVE",
                remove: "REMOVE",
                reorder: "REORDER"
            },
            i = {
                SlideShareClipActionEvent: "SlideShareClipActionEvent",
                SlideShareClipOrganizeActionEvent: "SlideShareClipOrganizeActionEvent",
                SlideShareClipboardActionEvent: "SlideShareClipboardActionEvent",
                SlideShareClippingClickEvent: "SlideShareClippingClickEvent",
                SlideShareClippingShareEvent: "SlideShareClippingShareEvent",
                SlideShareClippingViewEvent: "SlideShareClippingViewEvent"
            },
            a = {
                addSingleClip: {
                    quantityType: n.single,
                    actionType: r.add
                },
                copySingleClip: {
                    quantityType: n.single,
                    actionType: r.copy
                },
                reclipSingleClip: {
                    quantityType: n.single,
                    actionType: r.reclip
                },
                moveSingleClip: {
                    quantityType: n.single,
                    actionType: r.move
                },
                removeSingleClip: {
                    quantityType: n.single,
                    actionType: r.remove
                },
                reorderSingleClip: {
                    quantityType: n.single,
                    actionType: r.reorder
                },
                addMultipleClips: {
                    quantityType: n.bulk,
                    actionType: r.add
                },
                copyMultipleClips: {
                    quantityType: n.bulk,
                    actionType: r.copy
                },
                reclipMultipleClips: {
                    quantityType: n.bulk,
                    actionType: r.reclip
                },
                moveMultipleClips: {
                    quantityType: n.bulk,
                    actionType: r.move
                },
                removeMultipleClips: {
                    quantityType: n.bulk,
                    actionType: r.remove
                },
                reorderMultipleClips: {
                    quantityType: n.bulk,
                    actionType: r.reorder
                }
            },
            o = {
                clickClipButton: "CLIP",
                clickViewToGrid: "CHANGE_VIEW_TO_GRID",
                clickViewToList: "CHANGE_VIEW_TO_LIST",
                clickTopNavMyClipboards: "CLIPBOARDS_NAV",
                clickClipThumbnail: "CLIP_THUMBNAIL",
                clickProfileMyClipboards: "PROFILE_DROPDOWN",
                clickShareClip: "SHARE_CLIP",
                clickShareClipboard: "SHARE_CLIPBOARD",
                clickSharePrompt: "SHARE_PROMPT_CTA",
                clickSlideviewTopClipboardsOpen: "SLIDEVIEW_TOP_CLIPBOARDS_OPEN",
                clickTopClipboardsClipboardOwner: "TOP_CLIPBOARDS_MODAL_CLIPBOARD_OWNER",
                clickTopClipboardsClipboardThumb: "TOP_CLIPBOARDS_MODAL_CLIPBOARD_THUMBNAIL",
                clickTopClipboardsClipboardTitle: "TOP_CLIPBOARDS_MODAL_CLIPBOARD_TITLE"
            },
            s = {
                clip: "Clip",
                clipboard: "Clipboard",
                slideshow: "Slideshow"
            },
            u = {
                directlink: "DIRECT_LINK",
                email: "EMAIL",
                facebook: "FACEBOOK",
                linkedin: "LINKEDIN",
                pinterest: "PINTEREST",
                twitter: "TWITTER"
            };
        t.prototype.track = function(e, t) {
            var t = $.extend({}, this.bodyDefaults, t);
            this.utils.recordTrackingEvent(this.appId, e, t)
        }, t.prototype.clipAction = function(e) {
            var t = e.clip;
            return this.track(i.SlideShareClipActionEvent, {
                actionType: e.actionType,
                clipboardUrn: this.utils.getUrn(s.clipboard, e.clipboardId || e.clipboard_id),
                clipUrn: this.utils.getUrn(s.clip, t.id),
                slideshowUrn: this.utils.getUrn(s.slideshow, t.slideshowId || t.slideshow_id),
                position: t.position
            })
        }, t.prototype.createClip = function(e, t) {
            return this.clipAction({
                actionType: "CREATE",
                clip: e,
                clipboardId: t
            })
        }, t.prototype.deleteClip = function(e) {
            return this.clipAction({
                actionType: "DELETE",
                clip: e
            })
        }, t.prototype.clipboardAction = function(e) {
            var t = e.clipboard;
            return this.track(i.SlideShareClipboardActionEvent, {
                actionType: e.actionType,
                clipboardUrn: this.utils.getUrn(s.clipboard, t.id),
                title: t.title,
                isPrivate: t["private"]
            })
        }, t.prototype.createClipboard = function(e) {
            return this.clipboardAction({
                actionType: "CREATE",
                clipboard: e
            })
        }, t.prototype.deleteClipboard = function(e) {
            return this.clipboardAction({
                actionType: "DELETE",
                clipboard: e
            })
        }, t.prototype.editClipboard = function(e, t) {
            var n = {
                id: e.id
            };
            return Object.keys(e).forEach(function(r) {
                e[r] !== t[r] && (n[r] = e[r])
            }), this.clipboardAction({
                actionType: "EDIT",
                clipboard: n
            })
        }, t.prototype.pageView = function(e) {
            return this.track(i.SlideShareClippingViewEvent, {
                clipboardUrn: this.utils.getUrn(s.clipboard, e),
                isOwner: this.userIsOwner,
                referrerType: (window.getUrlVar(this.referrerParam) || "").toUpperCase()
            })
        }, t.prototype.clipOrganizeAction = function(e) {
            return this.track(i.SlideShareClipOrganizeActionEvent, {
                actionType: e.actionType,
                quantityType: e.quantityType,
                clipUrns: e.clipIds.map(this.utils.getUrn.bind(null, s.clip)),
                sourceClipboardUrn: this.utils.getUrn(s.clipboard, e.sourceClipboardId),
                targetClipboardUrn: this.utils.getUrn(s.clipboard, e.targetClipboardId)
            })
        }, [s.clip, s.clipboard].forEach(function(e) {
            t.prototype["share" + e] = function(t, n) {
                return this.track(i.SlideShareClippingShareEvent, {
                    entityUrn: this.utils.getUrn(e, t),
                    shareType: u[n] || n,
                    isOwner: this.userIsOwner
                })
            }
        }), Object.keys(a).forEach(function(e) {
            var n = a[e];
            t.prototype[e] = function(e, t, r) {
                return this.clipOrganizeAction({
                    actionType: n.actionType,
                    quantityType: n.quantityType,
                    clipIds: $.isArray(e) ? e : [e],
                    sourceClipboardId: t,
                    targetClipboardId: r
                })
            }
        }), Object.keys(o).forEach(function(e) {
            var n = o[e];
            t.prototype[e] = function(e, t) {
                return this.track(i.SlideShareClippingClickEvent, {
                    actionType: n,
                    clipUrn: this.utils.getUrn(s.clip, t),
                    clipboardUrn: this.utils.getUrn(s.clipboard, e),
                    isOwner: this.userIsOwner
                })
            }
        }), e.ClippingTracker = t
    }(window.slideshare_object), MessageBar.prototype.init = function() {
        this.container = $(".global-message-bar-container"), this.messageContainer = this.container.find(".message"), this.config.messageHTML && this.messageContainer.html(this.config.messageHTML), this.bindEvents()
    }, MessageBar.prototype.bindEvents = function() {
        var e = this;
        $(this.container).on("click", ".close", function(t) {
            t.preventDefault(), t.stopPropagation(), e.hide()
        }), $(this.container).on("click", function(t) {
            e.config.contentClickCallback && e.config.contentClickCallback.apply(this, [t, e.config.contentClickCallbackArgs])
        })
    }, MessageBar.prototype.hide = function(e) {
        this.container.slideUp(), this.config.hideCallBack && this.config.hideCallBack.apply(this.container, [this.config.hideCallBackArgs])
    }, MessageBar.prototype.show = function() {
        this.container.removeClass("hide"), this.container.slideDown(this.slideDownTime), this.config.showCallBack && this.config.showCallBack.apply(this.container, [this.config.showCallBackArgs])
    }, $(window).load(function() {
        if ("undefined" != typeof MessageBar) {
            var e = $(".clipping-message-bar");
            e.length > 0 && "true" !== cookie("message-bar-closed") && (messageBar = new MessageBar({
                hideCallBack: function() {
                    cookie("message-bar-closed", !0, {
                        path: "/",
                        expires: 3
                    })
                }
            }), messageBar.show())
        }
    }),
    function(e, t, n) {
        function r(e) {
            var t, n = document.createElement("iframe");
            n.style.display = "none", document.body.appendChild(n), t = n.contentWindow.document, t.open().write("<body onload=\"var iframe = document.createElement('iframe');iframe.src = '" + e + "';document.body.appendChild(iframe);\">"), t.close()
        }
        var i = function() {
                if (!cookie("disable_auto_signin") && !(e.sso_disabled || cookie("sso_redirect") || e.user.is_li_connected || e.is_mobile)) {
                    var n = {},
                        i = t("input[name=authenticity_token]").val();
                    i && (n.authenticity_token = i), t.ajax({
                        url: "/w/sso/set_state_session",
                        type: "POST",
                        dataType: "json",
                        data: n,
                        success: function(e) {
                            e.success && e.sso_uri && (newRedirectUri = e.sso_uri, r(newRedirectUri))
                        }
                    })
                }
            },
            a = function(n) {
                try {
                    n = JSON.parse(n)
                } catch (r) {
                    return
                }
                switch (n.status) {
                    case "email_matched_loggedin":
                        o("sso_email_matched_ss_loggedin_banner"), t(".j-sso-banner-wrapper").removeClass("hide").slideDown();
                        break;
                    case "email_matched_loggedout":
                        o("sso_email_matched_ss_loggedout_banner"), window.location.reload();
                        break;
                    case "auto_spawned":
                        o("sso_auto_spawned"), window.location.reload();
                        break;
                    case "bound":
                        o("bound"), window.location.reload();
                        break;
                    case "li_loggedout":
                        o("sso_li_logged_out"), e && e.slideshow && "video" === e.slideshow.type && window.jwplayer().play()
                }
            },
            o = function(t) {
                e.ga("bigfoot_slideview", t), cookie("sso_redirect", !0, {
                    path: "/"
                })
            };
        t(".j-sso-banner").find(".j-sso-banner-close").on("click", function() {
            t(".j-sso-banner-wrapper").hide()
        }), e.registerMessageReceiver(a), t(document).ready(i)
    }(window.slideshare_object, window.jQuery, window.sso_redirect_uri),
    function() {
        "use strict";

        function e(e) {
            if (!Q.test(e)) return !1;
            if (re.test(e)) return !0;
            for (var t = "", n = {}, r = {}, i = !1, a = e.length - 1, o = e.indexOf("-"), s = 0, u = ""; u = e.charAt(s); s++)
                if (s === a && (t += u), "-" === u || s === a) {
                    if ("x" === t) break;
                    if (te.test(t)) {
                        if ("undefined" != typeof n[t]) {
                            i = !0;
                            break
                        }
                        n[t] = !0, r = {}
                    } else if (ee.test(t) && s !== o) {
                        if ("undefined" != typeof r[t]) {
                            i = !0;
                            break
                        }
                        r[t] = !0
                    }
                    t = ""
                } else t += u;
            return !i
        }

        function t(e) {
            var t, n;
            e = e.toLowerCase(), n = e.split("-");
            for (var r = 1, i = n.length; i > r; r++)
                if (2 === n[r].length) n[r] = n[r].toUpperCase();
                else if (4 === n[r].length) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
            else if (1 === n[r].length && "x" != n[r]) break;
            e = pe.call(n, "-"), (t = e.match(ne)) && t.length > 1 && (t.sort(), e = e.replace(RegExp("(?:" + ne.source + ")+", "i"), pe.call(t, ""))), se.call(Ce.tags, e) && (e = Ce.tags[e]), n = e.split("-");
            for (var r = 1, i = n.length; i > r; r++) se.call(Ce.subtags, n[r]) ? n[r] = Ce.subtags[n[r]] : se.call(Ce.extLang, n[r]) && (n[r] = Ce.extLang[n[r]][0], 1 === r && Ce.extLang[n[1]][1] === n[0] && (n = de.call(n, r++), i -= 1));
            return pe.call(n, "-")
        }

        function n() {
            return U
        }

        function r(e) {
            var t = String(e),
                n = R(t);
            return ke.test(n) !== !1
        }

        function i(n) {
            if (void 0 === n) return new M;
            for (var r = new M, n = "string" == typeof n ? [n] : n, i = O(n), a = i.length, o = 0; a > o;) {
                var s = String(o),
                    u = s in i;
                if (u) {
                    var m = i[s];
                    if (null == m || "string" != typeof m && "object" != typeof m) throw new TypeError("String or Object type expected");
                    var c = String(m);
                    if (!e(c)) throw new RangeError("'" + c + "' is not a structurally valid language tag");
                    c = t(c), -1 === me.call(r, c) && he.call(r, c)
                }
                o++
            }
            return r
        }

        function a(e, t) {
            for (var n = t;;) {
                if (me.call(e, n) > -1) return n;
                var r = n.lastIndexOf("-");
                if (0 > r) return;
                r >= 2 && "-" == n.charAt(r - 2) && (r -= 2), n = n.substring(0, r)
            }
        }

        function o(e, t) {
            for (var r, i = 0, o = t.length; o > i && !r;) {
                var s = t[i],
                    u = String(s).replace(xe, ""),
                    r = a(e, u);
                i++
            }
            var m = new j;
            if (void 0 !== r) {
                if (m["[[locale]]"] = r, String(s) !== String(u)) {
                    var c = s.match(xe)[0],
                        d = s.indexOf("-u-");
                    m["[[extension]]"] = c, m["[[extensionIndex]]"] = d
                }
            } else m["[[locale]]"] = n();
            return m
        }

        function s(e, t) {
            return o(e, t)
        }

        function u(e, t, n, r, i) {
            if (0 === e.length) throw new ReferenceError("No locale data has been provided for this object yet.");
            var a = n["[[localeMatcher]]"];
            if ("lookup" === a) var u = o(e, t);
            else var u = s(e, t);
            var m = u["[[locale]]"];
            if (se.call(u, "[[extension]]")) var c = u["[[extension]]"],
                d = u["[[extensionIndex]]"],
                l = String.prototype.split,
                h = l.call(c, "-"),
                p = h.length;
            var y = new j;
            y["[[dataLocale]]"] = m;
            for (var f = "-u", g = 0, v = r.length; v > g;) {
                var b = r[g],
                    _ = i[m],
                    w = _[b],
                    k = w[0],
                    x = "",
                    C = me;
                if (void 0 !== h) {
                    var S = C.call(h, b);
                    if (-1 !== S)
                        if (p > S + 1 && h[S + 1].length > 2) {
                            var A = h[S + 1],
                                T = C.call(w, A);
                            if (-1 !== T) var k = A,
                                x = "-" + b + "-" + k
                        } else {
                            var T = C(w, "true");
                            if (-1 !== T) var k = "true"
                        }
                }
                if (se.call(n, "[[" + b + "]]")) {
                    var D = n["[[" + b + "]]"]; - 1 !== C.call(w, D) && D !== k && (k = D, x = "")
                }
                y["[[" + b + "]]"] = k, f += x, g++
            }
            if (f.length > 2) var E = m.substring(0, d),
                P = m.substring(d),
                m = E + f + P;
            return y["[[locale]]"] = m, y
        }

        function m(e, t) {
            for (var n = t.length, r = new M, i = 0; n > i;) {
                var o = t[i],
                    s = String(o).replace(xe, ""),
                    u = a(e, s);
                void 0 !== u && he.call(r, o), i++
            }
            var m = de.call(r);
            return m
        }

        function c(e, t) {
            return m(e, t)
        }

        function d(e, t, n) {
            if (void 0 !== n) {
                var n = new j(O(n)),
                    r = n.localeMatcher;
                if (void 0 !== r && (r = String(r), "lookup" !== r && "best fit" !== r)) throw new RangeError('matcher should be "lookup" or "best fit"')
            }
            if (void 0 === r || "best fit" === r) var i = c(e, t);
            else var i = m(e, t);
            for (var a in i) se.call(i, a) && ue(i, a, {
                writable: !1,
                configurable: !1,
                value: i[a]
            });
            return ue(i, "length", {
                writable: !1
            }), i
        }

        function l(e, t, n, r, i) {
            var a = e[t];
            if (void 0 !== a) {
                if (a = "boolean" === n ? Boolean(a) : "string" === n ? String(a) : a, void 0 !== r && -1 === me.call(r, a)) throw new RangeError("'" + a + "' is not an allowed value for `" + t + "`");
                return a
            }
            return i
        }

        function h(e, t, n, r, i) {
            var a = e[t];
            if (void 0 !== a) {
                if (a = Number(a), isNaN(a) || n > a || a > r) throw new RangeError("Value is not a number or outside accepted range");
                return Math.floor(a)
            }
            return i
        }

        function p() {
            var e = arguments[0],
                t = arguments[1];
            return this && this !== ie ? y(O(this), e, t) : new ie.NumberFormat(e, t)
        }

        function y(e, t, n) {
            var a = I(e),
                o = $();
            if (a["[[initializedIntlObject]]"] === !0) throw new TypeError("`this` object has already been initialized as an Intl object");
            ue(e, "__getInternalProperties", {
                value: function() {
                    return arguments[0] === ve ? a : void 0
                }
            }), a["[[initializedIntlObject]]"] = !0;
            var s = i(t);
            n = void 0 === n ? {} : O(n);
            var m = new j,
                c = l(n, "localeMatcher", "string", new M("lookup", "best fit"), "best fit");
            m["[[localeMatcher]]"] = c;
            var d = ge.NumberFormat["[[localeData]]"],
                p = u(ge.NumberFormat["[[availableLocales]]"], s, m, ge.NumberFormat["[[relevantExtensionKeys]]"], d);
            a["[[locale]]"] = p["[[locale]]"], a["[[numberingSystem]]"] = p["[[nu]]"], a["[[dataLocale]]"] = p["[[dataLocale]]"];
            var y = p["[[dataLocale]]"],
                v = l(n, "style", "string", new M("decimal", "percent", "currency"), "decimal");
            a["[[style]]"] = v;
            var b = l(n, "currency", "string");
            if (void 0 !== b && !r(b)) throw new RangeError("'" + b + "' is not a valid currency code");
            if ("currency" === v && void 0 === b) throw new TypeError("Currency code is required when style is currency");
            if ("currency" === v) {
                b = b.toUpperCase(), a["[[currency]]"] = b;
                var _ = f(b)
            }
            var w = l(n, "currencyDisplay", "string", new M("code", "symbol", "name"), "symbol");
            "currency" === v && (a["[[currencyDisplay]]"] = w);
            var k = h(n, "minimumIntegerDigits", 1, 21, 1);
            a["[[minimumIntegerDigits]]"] = k;
            var x = "currency" === v ? _ : 0,
                C = h(n, "minimumFractionDigits", 0, 20, x);
            a["[[minimumFractionDigits]]"] = C;
            var S = "currency" === v ? Math.max(C, _) : "percent" === v ? Math.max(C, 0) : Math.max(C, 3),
                A = h(n, "maximumFractionDigits", C, 20, S);
            a["[[maximumFractionDigits]]"] = A;
            var T = n.minimumSignificantDigits,
                D = n.maximumSignificantDigits;
            (void 0 !== T || void 0 !== D) && (T = h(n, "minimumSignificantDigits", 1, 21, 1), D = h(n, "maximumSignificantDigits", T, 21, 21), a["[[minimumSignificantDigits]]"] = T, a["[[maximumSignificantDigits]]"] = D);
            var E = l(n, "useGrouping", "boolean", void 0, !0);
            a["[[useGrouping]]"] = E;
            var P = d[y],
                N = P.patterns,
                F = N[v];
            return a["[[positivePattern]]"] = F.positivePattern, a["[[negativePattern]]"] = F.negativePattern, a["[[boundFormat]]"] = void 0, a["[[initializedNumberFormat]]"] = !0, oe && (e.format = g.call(e)), o.exp.test(o.input), e
        }

        function f(e) {
            return void 0 !== Se[e] ? Se[e] : 2
        }

        function g() {
            var e = null != this && "object" == typeof this && I(this);
            if (!e || !e["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
            if (void 0 === e["[[boundFormat]]"]) {
                var t = function(e) {
                        return v(this, Number(e))
                    },
                    n = fe.call(t, this);
                e["[[boundFormat]]"] = n
            }
            return e["[[boundFormat]]"]
        }

        function v(e, t) {
            var n, r = $(),
                i = I(e),
                a = i["[[dataLocale]]"],
                o = i["[[numberingSystem]]"],
                s = ge.NumberFormat["[[localeData]]"][a],
                u = s.symbols[o] || s.symbols.latn,
                m = !1;
            if (isFinite(t) === !1) isNaN(t) ? n = u.nan : (n = u.infinity, 0 > t && (m = !0));
            else {
                if (0 > t && (m = !0, t = -t), "percent" === i["[[style]]"] && (t *= 100), n = se.call(i, "[[minimumSignificantDigits]]") && se.call(i, "[[maximumSignificantDigits]]") ? b(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"]) : _(t, i["[[minimumIntegerDigits]]"], i["[[minimumFractionDigits]]"], i["[[maximumFractionDigits]]"]), Ae[o]) {
                    var c = Ae[i["[[numberingSystem]]"]];
                    n = String(n).replace(/\d/g, function(e) {
                        return c[e]
                    })
                } else n = String(n);
                if (n = n.replace(/\./g, u.decimal), i["[[useGrouping]]"] === !0) {
                    var d = n.split(u.decimal),
                        l = d[0],
                        h = s.patterns.primaryGroupSize || 3,
                        p = s.patterns.secondaryGroupSize || h;
                    if (l.length > h) {
                        var y = new M,
                            f = l.length - h,
                            g = f % p,
                            v = l.slice(0, g);
                        for (v.length && he.call(y, v); f > g;) he.call(y, l.slice(g, g + p)), g += p;
                        he.call(y, l.slice(f)), d[0] = pe.call(y, u.group)
                    }
                    n = pe.call(d, u.decimal)
                }
            }
            var w = i[m === !0 ? "[[negativePattern]]" : "[[positivePattern]]"];
            if (w = w.replace("{number}", n), "currency" === i["[[style]]"]) {
                var k, x = i["[[currency]]"],
                    C = "{currency}",
                    S = w.indexOf(C),
                    A = s.currencies[x];
                switch (i["[[currencyDisplay]]"]) {
                    case "symbol":
                        k = A || x;
                        break;
                    default:
                    case "code":
                    case "name":
                        k = x
                }
                S >= 0 && (w = w.substring(0, S) + k + w.substring(S + C.length))
            }
            return r.exp.test(r.input), w
        }

        function b(e, t, n) {
            var r = n;
            if (0 === e) var i = pe.call(Array(r + 1), "0"),
                a = 0;
            else var a = N(Math.abs(e)),
                o = Math.round(Math.exp(Math.abs(a - r + 1) * Math.LN10)),
                i = String(Math.round(0 > a - r + 1 ? e * o : e / o));
            if (a >= r) return i + pe.call(Array(a - r + 1 + 1), "0");
            if (a === r - 1) return i;
            if (a >= 0 ? i = i.slice(0, a + 1) + "." + i.slice(a + 1) : 0 > a && (i = "0." + pe.call(Array(-(a + 1) + 1), "0") + i), i.indexOf(".") >= 0 && n > t) {
                for (var s = n - t; s > 0 && "0" === i.charAt(i.length - 1);) i = i.slice(0, -1), s--;
                "." === i.charAt(i.length - 1) && (i = i.slice(0, -1))
            }
            return i
        }

        function _(e, t, n, r) {
            var i, a = Number.prototype.toFixed.call(e, r),
                o = a.split(".")[0].length,
                s = r - n,
                u = (i = a.indexOf("e")) > -1 ? a.slice(i + 1) : 0;
            for (u && (a = a.slice(0, i).replace(".", ""), a += pe.call(Array(u - (a.length - 1) + 1), "0") + "." + pe.call(Array(r + 1), "0"), o = a.length); s > 0 && "0" === a.slice(-1);) a = a.slice(0, -1), s--;
            if ("." === a.slice(-1) && (a = a.slice(0, -1)), t > o) var m = pe.call(Array(t - o + 1), "0");
            return (m ? m : "") + a
        }

        function w() {
            var e = arguments[0],
                t = arguments[1];
            return this && this !== ie ? k(O(this), e, t) : new ie.DateTimeFormat(e, t)
        }

        function k(e, t, n) {
            var r = I(e),
                a = $();
            if (r["[[initializedIntlObject]]"] === !0) throw new TypeError("`this` object has already been initialized as an Intl object");
            ue(e, "__getInternalProperties", {
                value: function() {
                    return arguments[0] === ve ? r : void 0
                }
            }), r["[[initializedIntlObject]]"] = !0;
            var o = i(t),
                n = x(n, "any", "date"),
                s = new j;
            _ = l(n, "localeMatcher", "string", new M("lookup", "best fit"), "best fit"), s["[[localeMatcher]]"] = _;
            var m = ge.DateTimeFormat,
                c = m["[[localeData]]"],
                d = u(m["[[availableLocales]]"], o, s, m["[[relevantExtensionKeys]]"], c);
            r["[[locale]]"] = d["[[locale]]"], r["[[calendar]]"] = d["[[ca]]"], r["[[numberingSystem]]"] = d["[[nu]]"], r["[[dataLocale]]"] = d["[[dataLocale]]"];
            var h = d["[[dataLocale]]"],
                p = n.timeZone;
            if (void 0 !== p && (p = R(p), "UTC" !== p)) throw new RangeError("timeZone is not supported.");
            r["[[timeZone]]"] = p, s = new j;
            for (var y in Te)
                if (se.call(Te, y)) {
                    var f = l(n, y, "string", Te[y]);
                    s["[[" + y + "]]"] = f
                }
            var g, v = c[h],
                b = v.formats,
                _ = l(n, "formatMatcher", "string", new M("basic", "best fit"), "best fit");
            g = "basic" === _ ? C(s, b) : A(s, b);
            for (var y in Te)
                if (se.call(Te, y) && se.call(g, y)) {
                    var w = g[y];
                    r["[[" + y + "]]"] = w
                }
            var k, S = l(n, "hour12", "boolean");
            if (r["[[hour]]"])
                if (S = void 0 === S ? v.hour12 : S, r["[[hour12]]"] = S, S === !0) {
                    var D = v.hourNo0;
                    r["[[hourNo0]]"] = D, k = g.pattern12
                } else k = g.pattern;
            else k = g.pattern;
            return r["[[pattern]]"] = k, r["[[boundFormat]]"] = void 0, r["[[initializedDateTimeFormat]]"] = !0, oe && (e.format = T.call(e)), a.exp.test(a.input), e
        }

        function x(e, t, n) {
            if (void 0 === e) e = null;
            else {
                var r = O(e);
                e = new j;
                for (var i in r) e[i] = r[i]
            }
            var a = ce,
                e = a(e),
                o = !0;
            return ("date" === t || "any" === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (o = !1), ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (o = !1), !o || "date" !== n && "all" !== n || (e.year = e.month = e.day = "numeric"), !o || "time" !== n && "all" !== n || (e.hour = e.minute = e.second = "numeric"), e
        }

        function C(e, t) {
            return S(e, t)
        }

        function S(e, t, n) {
            for (var r, i = 8, a = 120, o = 20, s = 8, u = 6, m = 6, c = 3, d = -(1 / 0), l = 0, h = t.length; h > l;) {
                var p = t[l],
                    y = 0;
                for (var f in Te)
                    if (se.call(Te, f)) {
                        var g = e["[[" + f + "]]"],
                            v = se.call(p, f) ? p[f] : void 0;
                        if (void 0 === g && void 0 !== v) y -= o;
                        else if (void 0 !== g && void 0 === v) y -= a;
                        else {
                            var b = ["2-digit", "numeric", "narrow", "short", "long"],
                                _ = me.call(b, g),
                                w = me.call(b, v),
                                k = Math.max(Math.min(w - _, 2), -2);
                            !n || ("numeric" !== g && "2-digit" !== g || "numeric" === v || "2-digit" === v) && ("numeric" === g || "2-digit" === g || "2-digit" !== v && "numeric" !== v) || (y -= i), 2 === k ? y -= u : 1 === k ? y -= c : -1 === k ? y -= m : -2 === k && (y -= s)
                        }
                    }
                y > d && (d = y, r = p), l++
            }
            return r
        }

        function A(e, t) {
            return S(e, t, !0)
        }

        function T() {
            var e = null != this && "object" == typeof this && I(this);
            if (!e || !e["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
            if (void 0 === e["[[boundFormat]]"]) {
                var t = function() {
                        var e = Number(0 === arguments.length ? Date.now() : arguments[0]);
                        return D(this, e)
                    },
                    n = fe.call(t, this);
                e["[[boundFormat]]"] = n
            }
            return e["[[boundFormat]]"]
        }

        function D(e, t) {
            if (!isFinite(t)) throw new RangeError("Invalid valid date passed to format");
            var n = e.__getInternalProperties(ve),
                r = $(),
                i = n["[[locale]]"],
                a = new ie.NumberFormat([i], {
                    useGrouping: !1
                }),
                o = new ie.NumberFormat([i], {
                    minimumIntegerDigits: 2,
                    useGrouping: !1
                }),
                s = E(t, n["[[calendar]]"], n["[[timeZone]]"]),
                u = n["[[pattern]]"],
                m = n["[[dataLocale]]"],
                c = ge.DateTimeFormat["[[localeData]]"][m].calendars,
                d = n["[[calendar]]"];
            for (var l in Te)
                if (se.call(n, "[[" + l + "]]")) {
                    var h, p, y = n["[[" + l + "]]"],
                        f = s["[[" + l + "]]"];
                    if ("year" === l && 0 >= f ? f = 1 - f : "month" === l ? f++ : "hour" === l && n["[[hour12]]"] === !0 && (f %= 12, h = f !== s["[[" + l + "]]"], 0 === f && n["[[hourNo0]]"] === !0 && (f = 12)), "numeric" === y) p = v(a, f);
                    else if ("2-digit" === y) p = v(o, f), p.length > 2 && (p = p.slice(-2));
                    else if (y in be) switch (l) {
                        case "month":
                            p = L(c, d, n["[[day]]"] ? "months" : "months-stand-alone", y, s["[[" + l + "]]"]);
                            break;
                        case "weekday":
                            try {
                                p = L(c, d, "days", y, s["[[" + l + "]]"])
                            } catch (g) {
                                throw new Error("Could not find weekday data for locale " + i)
                            }
                            break;
                        case "timeZoneName":
                            p = "";
                            break;
                        default:
                            p = s["[[" + l + "]]"]
                    }
                    u = u.replace("{" + l + "}", p)
                }
            return n["[[hour12]]"] === !0 && (p = L(c, d, "dayPeriods", h ? "pm" : "am"), u = u.replace("{ampm}", p)), r.exp.test(r.input), u
        }

        function E(e, t, n) {
            var r = new Date(e),
                i = "get" + (n || "");
            return new j({
                "[[weekday]]": r[i + "Day"](),
                "[[era]]": +(r[i + "FullYear"]() >= 0),
                "[[year]]": r[i + "FullYear"](),
                "[[month]]": r[i + "Month"](),
                "[[day]]": r[i + "Date"](),
                "[[hour]]": r[i + "Hours"](),
                "[[minute]]": r[i + "Minutes"](),
                "[[second]]": r[i + "Seconds"](),
                "[[inDST]]": !1
            })
        }

        function P(e, t) {
            if (!e.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
            var n, r = [t],
                i = t.split("-");
            for (i.length > 2 && 4 == i[1].length && he.call(r, i[0] + "-" + i[2]); n = ye.call(r);) he.call(ge.NumberFormat["[[availableLocales]]"], n), ge.NumberFormat["[[localeData]]"][n] = e.number, e.date && (e.date.nu = e.number.nu, he.call(ge.DateTimeFormat["[[availableLocales]]"], n), ge.DateTimeFormat["[[localeData]]"][n] = e.date);
            void 0 === U && (U = t), _e || (y(ie.NumberFormat.prototype), _e = !0), e.date && !we && (k(ie.DateTimeFormat.prototype), we = !0)
        }

        function N(e) {
            if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
            var t = Math.round(Math.log(e) * Math.LOG10E);
            return t - (Number("1e" + t) > e)
        }

        function F(e) {
            if (!se.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor");
            var t = $(),
                n = arguments[1],
                r = this["[[availableLocales]]"],
                a = i(e);
            return t.exp.test(t.input), d(r, a, n)
        }

        function L(e, t, n, r, i) {
            var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
                o = {
                    narrow: ["short", "long"],
                    "short": ["long", "narrow"],
                    "long": ["short", "narrow"]
                },
                s = {
                    "months-stand-alone": "months"
                },
                u = s[n] ? e[t] && e[t][s[n]] ? e[t][s[n]] : e.gregory[s[n]] : null,
                m = a && se.call(a, r) ? a[r] : u && se.call(u, r) ? u[r] : void 0;
            return !m && a && (m = se.call(a, o[r][0]) ? a[o[r][0]] : a[o[r][1]]), !m && u && (m = se.call(u, o[r][0]) ? u[o[r][0]] : u[o[r][1]]), null != i ? m[i] : m
        }

        function j(e) {
            for (var t in e)(e instanceof j || se.call(e, t)) && ue(this, t, {
                value: e[t],
                enumerable: !0,
                writable: !0,
                configurable: !0
            })
        }

        function M() {
            ue(this, "length", {
                writable: !0,
                value: 0
            }), arguments.length && he.apply(this, de.call(arguments))
        }

        function $() {
            for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || "", n = RegExp.multiline ? "m" : "", r = {
                    input: RegExp.input
                }, i = new M, a = !1, o = {}, s = 1; 9 >= s; s++) a = (o["$" + s] = RegExp["$" + s]) || a;
            if (t = t.replace(e, "\\$&"), a)
                for (var s = 1; 9 >= s; s++) {
                    var u = o["$" + s];
                    u ? (u = u.replace(e, "\\$&"), t = t.replace(u, "(" + u + ")")) : t = "()" + t, he.call(i, t.slice(0, t.indexOf("(") + 1)), t = t.slice(t.indexOf("(") + 1)
                }
            return r.exp = new RegExp(pe.call(i, "") + t, n), r
        }

        function R(e) {
            for (var t = e.length; t--;) {
                var n = e.charAt(t);
                n >= "a" && "z" >= n && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
            }
            return e
        }

        function O(e) {
            if (null == e) throw new TypeError("Cannot convert null or undefined to object");
            return Object(e)
        }

        function I(e) {
            return se.call(e, "__getInternalProperties") ? e.__getInternalProperties(ve) : ce(null)
        }
        var U, H = "[a-z]{3}(?:-[a-z]{3}){0,2}",
            z = "(?:[a-z]{2,3}(?:-" + H + ")?|[a-z]{4}|[a-z]{5,8})",
            B = "[a-z]{4}",
            q = "(?:[a-z]{2}|\\d{3})",
            W = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",
            K = "[0-9a-wy-z]",
            X = K + "(?:-[a-z0-9]{2,8})+",
            J = "x(?:-[a-z0-9]{1,8})+",
            V = "(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))",
            G = "(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))",
            Y = "(?:" + V + "|" + G + ")",
            Z = z + "(?:-" + B + ")?(?:-" + q + ")?(?:-" + W + ")*(?:-" + X + ")*(?:-" + J + ")?",
            Q = RegExp("^(?:" + Z + "|" + J + "|" + Y + ")$", "i"),
            ee = RegExp("^" + W + "$", "i"),
            te = RegExp("^" + K + "$", "i"),
            ne = RegExp("-" + X, "ig"),
            re = RegExp("^" + J, "i"),
            ie = {},
            ae = function() {
                return !1
            }(),
            oe = !ae && !Object.prototype.__defineGetter__,
            se = Object.prototype.hasOwnProperty,
            ue = ae ? Object.defineProperty : function(e, t, n) {
                "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!se.call(e, t) || "value" in n) && (e[t] = n.value)
            },
            me = Array.prototype.indexOf || function(e) {
                var t = this;
                if (!t.length) return -1;
                for (var n = arguments[1] || 0, r = t.length; r > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ce = Object.create || function(e, t) {
                function n() {}
                var r;
                n.prototype = e, r = new n;
                for (var i in t) se.call(t, i) && ue(r, i, t[i]);
                return r
            },
            de = Array.prototype.slice,
            le = Array.prototype.concat,
            he = Array.prototype.push,
            pe = Array.prototype.join,
            ye = Array.prototype.shift,
            fe = (Array.prototype.unshift, Function.prototype.bind || function(e) {
                var t = this,
                    n = de.call(arguments, 1);
                return 1 === t.length ? function(r) {
                    return t.apply(e, le.call(n, de.call(arguments)))
                } : function() {
                    return t.apply(e, le.call(n, de.call(arguments)))
                }
            }),
            ge = ce(null),
            ve = Math.random(),
            be = ce(null, {
                narrow: {},
                "short": {},
                "long": {}
            }),
            _e = !1,
            we = !1,
            ke = /^[A-Z]{3}$/,
            xe = /-u(?:-[0-9a-z]{2,8})+/gi,
            Ce = {
                tags: {
                    "art-lojban": "jbo",
                    "i-ami": "ami",
                    "i-bnn": "bnn",
                    "i-hak": "hak",
                    "i-klingon": "tlh",
                    "i-lux": "lb",
                    "i-navajo": "nv",
                    "i-pwn": "pwn",
                    "i-tao": "tao",
                    "i-tay": "tay",
                    "i-tsu": "tsu",
                    "no-bok": "nb",
                    "no-nyn": "nn",
                    "sgn-BE-FR": "sfb",
                    "sgn-BE-NL": "vgt",
                    "sgn-CH-DE": "sgg",
                    "zh-guoyu": "cmn",
                    "zh-hakka": "hak",
                    "zh-min-nan": "nan",
                    "zh-xiang": "hsn",
                    "sgn-BR": "bzs",
                    "sgn-CO": "csn",
                    "sgn-DE": "gsg",
                    "sgn-DK": "dsl",
                    "sgn-ES": "ssp",
                    "sgn-FR": "fsl",
                    "sgn-GB": "bfi",
                    "sgn-GR": "gss",
                    "sgn-IE": "isg",
                    "sgn-IT": "ise",
                    "sgn-JP": "jsl",
                    "sgn-MX": "mfs",
                    "sgn-NI": "ncs",
                    "sgn-NL": "dse",
                    "sgn-NO": "nsl",
                    "sgn-PT": "psr",
                    "sgn-SE": "swl",
                    "sgn-US": "ase",
                    "sgn-ZA": "sfs",
                    "zh-cmn": "cmn",
                    "zh-cmn-Hans": "cmn-Hans",
                    "zh-cmn-Hant": "cmn-Hant",
                    "zh-gan": "gan",
                    "zh-wuu": "wuu",
                    "zh-yue": "yue"
                },
                subtags: {
                    BU: "MM",
                    DD: "DE",
                    FX: "FR",
                    TP: "TL",
                    YD: "YE",
                    ZR: "CD",
                    heploc: "alalc97",
                    "in": "id",
                    iw: "he",
                    ji: "yi",
                    jw: "jv",
                    mo: "ro",
                    ayx: "nun",
                    bjd: "drl",
                    ccq: "rki",
                    cjr: "mom",
                    cka: "cmr",
                    cmk: "xch",
                    drh: "khk",
                    drw: "prs",
                    gav: "dev",
                    hrr: "jal",
                    ibi: "opa",
                    kgh: "kml",
                    lcq: "ppr",
                    mst: "mry",
                    myt: "mry",
                    sca: "hle",
                    tie: "ras",
                    tkk: "twm",
                    tlw: "weo",
                    tnf: "prs",
                    ybd: "rki",
                    yma: "lrr"
                },
                extLang: {
                    aao: ["aao", "ar"],
                    abh: ["abh", "ar"],
                    abv: ["abv", "ar"],
                    acm: ["acm", "ar"],
                    acq: ["acq", "ar"],
                    acw: ["acw", "ar"],
                    acx: ["acx", "ar"],
                    acy: ["acy", "ar"],
                    adf: ["adf", "ar"],
                    ads: ["ads", "sgn"],
                    aeb: ["aeb", "ar"],
                    aec: ["aec", "ar"],
                    aed: ["aed", "sgn"],
                    aen: ["aen", "sgn"],
                    afb: ["afb", "ar"],
                    afg: ["afg", "sgn"],
                    ajp: ["ajp", "ar"],
                    apc: ["apc", "ar"],
                    apd: ["apd", "ar"],
                    arb: ["arb", "ar"],
                    arq: ["arq", "ar"],
                    ars: ["ars", "ar"],
                    ary: ["ary", "ar"],
                    arz: ["arz", "ar"],
                    ase: ["ase", "sgn"],
                    asf: ["asf", "sgn"],
                    asp: ["asp", "sgn"],
                    asq: ["asq", "sgn"],
                    asw: ["asw", "sgn"],
                    auz: ["auz", "ar"],
                    avl: ["avl", "ar"],
                    ayh: ["ayh", "ar"],
                    ayl: ["ayl", "ar"],
                    ayn: ["ayn", "ar"],
                    ayp: ["ayp", "ar"],
                    bbz: ["bbz", "ar"],
                    bfi: ["bfi", "sgn"],
                    bfk: ["bfk", "sgn"],
                    bjn: ["bjn", "ms"],
                    bog: ["bog", "sgn"],
                    bqn: ["bqn", "sgn"],
                    bqy: ["bqy", "sgn"],
                    btj: ["btj", "ms"],
                    bve: ["bve", "ms"],
                    bvl: ["bvl", "sgn"],
                    bvu: ["bvu", "ms"],
                    bzs: ["bzs", "sgn"],
                    cdo: ["cdo", "zh"],
                    cds: ["cds", "sgn"],
                    cjy: ["cjy", "zh"],
                    cmn: ["cmn", "zh"],
                    coa: ["coa", "ms"],
                    cpx: ["cpx", "zh"],
                    csc: ["csc", "sgn"],
                    csd: ["csd", "sgn"],
                    cse: ["cse", "sgn"],
                    csf: ["csf", "sgn"],
                    csg: ["csg", "sgn"],
                    csl: ["csl", "sgn"],
                    csn: ["csn", "sgn"],
                    csq: ["csq", "sgn"],
                    csr: ["csr", "sgn"],
                    czh: ["czh", "zh"],
                    czo: ["czo", "zh"],
                    doq: ["doq", "sgn"],
                    dse: ["dse", "sgn"],
                    dsl: ["dsl", "sgn"],
                    dup: ["dup", "ms"],
                    ecs: ["ecs", "sgn"],
                    esl: ["esl", "sgn"],
                    esn: ["esn", "sgn"],
                    eso: ["eso", "sgn"],
                    eth: ["eth", "sgn"],
                    fcs: ["fcs", "sgn"],
                    fse: ["fse", "sgn"],
                    fsl: ["fsl", "sgn"],
                    fss: ["fss", "sgn"],
                    gan: ["gan", "zh"],
                    gds: ["gds", "sgn"],
                    gom: ["gom", "kok"],
                    gse: ["gse", "sgn"],
                    gsg: ["gsg", "sgn"],
                    gsm: ["gsm", "sgn"],
                    gss: ["gss", "sgn"],
                    gus: ["gus", "sgn"],
                    hab: ["hab", "sgn"],
                    haf: ["haf", "sgn"],
                    hak: ["hak", "zh"],
                    hds: ["hds", "sgn"],
                    hji: ["hji", "ms"],
                    hks: ["hks", "sgn"],
                    hos: ["hos", "sgn"],
                    hps: ["hps", "sgn"],
                    hsh: ["hsh", "sgn"],
                    hsl: ["hsl", "sgn"],
                    hsn: ["hsn", "zh"],
                    icl: ["icl", "sgn"],
                    ils: ["ils", "sgn"],
                    inl: ["inl", "sgn"],
                    ins: ["ins", "sgn"],
                    ise: ["ise", "sgn"],
                    isg: ["isg", "sgn"],
                    isr: ["isr", "sgn"],
                    jak: ["jak", "ms"],
                    jax: ["jax", "ms"],
                    jcs: ["jcs", "sgn"],
                    jhs: ["jhs", "sgn"],
                    jls: ["jls", "sgn"],
                    jos: ["jos", "sgn"],
                    jsl: ["jsl", "sgn"],
                    jus: ["jus", "sgn"],
                    kgi: ["kgi", "sgn"],
                    knn: ["knn", "kok"],
                    kvb: ["kvb", "ms"],
                    kvk: ["kvk", "sgn"],
                    kvr: ["kvr", "ms"],
                    kxd: ["kxd", "ms"],
                    lbs: ["lbs", "sgn"],
                    lce: ["lce", "ms"],
                    lcf: ["lcf", "ms"],
                    liw: ["liw", "ms"],
                    lls: ["lls", "sgn"],
                    lsg: ["lsg", "sgn"],
                    lsl: ["lsl", "sgn"],
                    lso: ["lso", "sgn"],
                    lsp: ["lsp", "sgn"],
                    lst: ["lst", "sgn"],
                    lsy: ["lsy", "sgn"],
                    ltg: ["ltg", "lv"],
                    lvs: ["lvs", "lv"],
                    lzh: ["lzh", "zh"],
                    max: ["max", "ms"],
                    mdl: ["mdl", "sgn"],
                    meo: ["meo", "ms"],
                    mfa: ["mfa", "ms"],
                    mfb: ["mfb", "ms"],
                    mfs: ["mfs", "sgn"],
                    min: ["min", "ms"],
                    mnp: ["mnp", "zh"],
                    mqg: ["mqg", "ms"],
                    mre: ["mre", "sgn"],
                    msd: ["msd", "sgn"],
                    msi: ["msi", "ms"],
                    msr: ["msr", "sgn"],
                    mui: ["mui", "ms"],
                    mzc: ["mzc", "sgn"],
                    mzg: ["mzg", "sgn"],
                    mzy: ["mzy", "sgn"],
                    nan: ["nan", "zh"],
                    nbs: ["nbs", "sgn"],
                    ncs: ["ncs", "sgn"],
                    nsi: ["nsi", "sgn"],
                    nsl: ["nsl", "sgn"],
                    nsp: ["nsp", "sgn"],
                    nsr: ["nsr", "sgn"],
                    nzs: ["nzs", "sgn"],
                    okl: ["okl", "sgn"],
                    orn: ["orn", "ms"],
                    ors: ["ors", "ms"],
                    pel: ["pel", "ms"],
                    pga: ["pga", "ar"],
                    pks: ["pks", "sgn"],
                    prl: ["prl", "sgn"],
                    prz: ["prz", "sgn"],
                    psc: ["psc", "sgn"],
                    psd: ["psd", "sgn"],
                    pse: ["pse", "ms"],
                    psg: ["psg", "sgn"],
                    psl: ["psl", "sgn"],
                    pso: ["pso", "sgn"],
                    psp: ["psp", "sgn"],
                    psr: ["psr", "sgn"],
                    pys: ["pys", "sgn"],
                    rms: ["rms", "sgn"],
                    rsi: ["rsi", "sgn"],
                    rsl: ["rsl", "sgn"],
                    sdl: ["sdl", "sgn"],
                    sfb: ["sfb", "sgn"],
                    sfs: ["sfs", "sgn"],
                    sgg: ["sgg", "sgn"],
                    sgx: ["sgx", "sgn"],
                    shu: ["shu", "ar"],
                    slf: ["slf", "sgn"],
                    sls: ["sls", "sgn"],
                    sqk: ["sqk", "sgn"],
                    sqs: ["sqs", "sgn"],
                    ssh: ["ssh", "ar"],
                    ssp: ["ssp", "sgn"],
                    ssr: ["ssr", "sgn"],
                    svk: ["svk", "sgn"],
                    swc: ["swc", "sw"],
                    swh: ["swh", "sw"],
                    swl: ["swl", "sgn"],
                    syy: ["syy", "sgn"],
                    tmw: ["tmw", "ms"],
                    tse: ["tse", "sgn"],
                    tsm: ["tsm", "sgn"],
                    tsq: ["tsq", "sgn"],
                    tss: ["tss", "sgn"],
                    tsy: ["tsy", "sgn"],
                    tza: ["tza", "sgn"],
                    ugn: ["ugn", "sgn"],
                    ugy: ["ugy", "sgn"],
                    ukl: ["ukl", "sgn"],
                    uks: ["uks", "sgn"],
                    urk: ["urk", "ms"],
                    uzn: ["uzn", "uz"],
                    uzs: ["uzs", "uz"],
                    vgt: ["vgt", "sgn"],
                    vkk: ["vkk", "ms"],
                    vkt: ["vkt", "ms"],
                    vsi: ["vsi", "sgn"],
                    vsl: ["vsl", "sgn"],
                    vsv: ["vsv", "sgn"],
                    wuu: ["wuu", "zh"],
                    xki: ["xki", "sgn"],
                    xml: ["xml", "sgn"],
                    xmm: ["xmm", "ms"],
                    xms: ["xms", "sgn"],
                    yds: ["yds", "sgn"],
                    ysl: ["ysl", "sgn"],
                    yue: ["yue", "zh"],
                    zib: ["zib", "sgn"],
                    zlm: ["zlm", "ms"],
                    zmi: ["zmi", "ms"],
                    zsl: ["zsl", "sgn"],
                    zsm: ["zsm", "ms"]
                }
            },
            Se = {
                BHD: 3,
                BYR: 0,
                XOF: 0,
                BIF: 0,
                XAF: 0,
                CLF: 0,
                CLP: 0,
                KMF: 0,
                DJF: 0,
                XPF: 0,
                GNF: 0,
                ISK: 0,
                IQD: 3,
                JPY: 0,
                JOD: 3,
                KRW: 0,
                KWD: 3,
                LYD: 3,
                OMR: 3,
                PYG: 0,
                RWF: 0,
                TND: 3,
                UGX: 0,
                UYI: 0,
                VUV: 0,
                VND: 0
            };
        ue(ie, "NumberFormat", {
            configurable: !0,
            writable: !0,
            value: p
        }), ue(ie.NumberFormat, "prototype", {
            writable: !1
        }), ge.NumberFormat = {
            "[[availableLocales]]": [],
            "[[relevantExtensionKeys]]": ["nu"],
            "[[localeData]]": {}
        }, ue(ie.NumberFormat, "supportedLocalesOf", {
            configurable: !0,
            writable: !0,
            value: fe.call(F, ge.NumberFormat)
        }), ue(ie.NumberFormat.prototype, "format", {
            configurable: !0,
            get: g
        });
        var Ae = {
            arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
            arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
            bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
            beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
            deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
            fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
            gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
            guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
            hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
            khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
            knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
            laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
            latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
            mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
            mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
            mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
            orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
            tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
            telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
            thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
            tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
        };
        ue(ie.NumberFormat.prototype, "resolvedOptions", {
            configurable: !0,
            writable: !0,
            value: function() {
                var e, t = new j,
                    n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
                    r = null != this && "object" == typeof this && I(this);
                if (!r || !r["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
                for (var i = 0, a = n.length; a > i; i++) se.call(r, e = "[[" + n[i] + "]]") && (t[n[i]] = {
                    value: r[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
                return ce({}, t)
            }
        }), ue(ie, "DateTimeFormat", {
            configurable: !0,
            writable: !0,
            value: w
        }), ue(w, "prototype", {
            writable: !1
        });
        var Te = {
            weekday: ["narrow", "short", "long"],
            era: ["narrow", "short", "long"],
            year: ["2-digit", "numeric"],
            month: ["2-digit", "numeric", "narrow", "short", "long"],
            day: ["2-digit", "numeric"],
            hour: ["2-digit", "numeric"],
            minute: ["2-digit", "numeric"],
            second: ["2-digit", "numeric"],
            timeZoneName: ["short", "long"]
        };
        ge.DateTimeFormat = {
            "[[availableLocales]]": [],
            "[[relevantExtensionKeys]]": ["ca", "nu"],
            "[[localeData]]": {}
        }, ue(ie.DateTimeFormat, "supportedLocalesOf", {
            configurable: !0,
            writable: !0,
            value: fe.call(F, ge.DateTimeFormat)
        }), ue(ie.DateTimeFormat.prototype, "format", {
            configurable: !0,
            get: T
        }), ue(ie.DateTimeFormat.prototype, "resolvedOptions", {
            writable: !0,
            configurable: !0,
            value: function() {
                var e, t = new j,
                    n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                    r = null != this && "object" == typeof this && I(this);
                if (!r || !r["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
                for (var i = 0, a = n.length; a > i; i++) se.call(r, e = "[[" + n[i] + "]]") && (t[n[i]] = {
                    value: r[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
                return ce({}, t)
            }
        });
        var De = ie.__localeSensitiveProtos = {
            Number: {},
            Date: {}
        };
        De.Number.toLocaleString = function() {
            if ("[object Number]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
            return v(new p(arguments[0], arguments[1]), this)
        }, De.Date.toLocaleString = function() {
            if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
            var e = +this;
            if (isNaN(e)) return "Invalid Date";
            var t = arguments[0],
                n = arguments[1],
                n = x(n, "any", "all"),
                r = new w(t, n);
            return D(r, e)
        }, De.Date.toLocaleDateString = function() {
            if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
            var e = +this;
            if (isNaN(e)) return "Invalid Date";
            var t = arguments[0],
                n = arguments[1],
                n = x(n, "date", "date"),
                r = new w(t, n);
            return D(r, e)
        }, De.Date.toLocaleTimeString = function() {
            if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
            var e = +this;
            if (isNaN(e)) return "Invalid Date";
            var t = arguments[0],
                n = arguments[1],
                n = x(n, "time", "time"),
                r = new w(t, n);
            return D(r, e)
        }, ue(ie, "__applyLocaleSensitivePrototypes", {
            writable: !0,
            configurable: !0,
            value: function() {
                ue(Number.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: De.Number.toLocaleString
                });
                for (var e in De.Date) se.call(De.Date, e) && ue(Date.prototype, e, {
                    writable: !0,
                    configurable: !0,
                    value: De.Date[e]
                })
            }
        }), ue(ie, "__addLocaleData", {
            value: function(t) {
                if (!e(t.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");
                P(t, t.locale)
            }
        }), j.prototype = ce(null), M.prototype = ce(null);
        var Ee = ie;
        this.Intl || (this.Intl = Ee, Ee.__applyLocaleSensitivePrototypes());
        var Pe = Ee;
        this.IntlPolyfill = Pe
    }.call(this), IntlPolyfill.__addLocaleData({
        locale: "ar",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}، {day} {month}، {year} {hour}:{minute}:{second}",
                pattern12: "{weekday}، {day} {month}، {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}، {day} {month}، {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month}، {year} {hour}:{minute}",
                pattern12: "{day} {month}، {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month}، {year} {hour}:{minute}",
                pattern12: "{day} {month}، {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month}، {year} {hour}:{minute}",
                pattern12: "{day} {month}، {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month}، {year} {hour}:{minute}",
                pattern12: "{day} {month}، {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}‏/{month}‏/{year} {hour}:{minute}",
                pattern12: "{day}‏/{month}‏/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}‏/{month}‏/{year} {hour}:{minute}",
                pattern12: "{day}‏/{month}‏/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}‏/{month}‏/{year} {hour}:{minute}",
                pattern12: "{day}‏/{month}‏/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}‏/{month}‏/{year} {hour}:{minute}",
                pattern12: "{day}‏/{month}‏/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}‏/{month}‏/{year} {hour}:{minute}",
                pattern12: "{day}‏/{month}‏/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}‏/{month}‏/{year} {hour}:{minute}",
                pattern12: "{day}‏/{month}‏/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month}، {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month}، {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}‏/{month}‏/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}‏/{month}‏/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}‏/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/‏{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"],
                        "short": ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                        "long": ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    },
                    days: {
                        narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                        "short": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                        "long": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                    },
                    eras: {
                        "short": ["ق.م", "م", "ب.م"],
                        "long": ["قبل الميلاد", "ميلادي", "بعد الميلاد"]
                    },
                    dayPeriods: {
                        am: "ص",
                        pm: "م"
                    }
                }
            }
        },
        number: {
            nu: ["arab", "latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency} {number}",
                    negativePattern: "-{currency} {number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                arab: {
                    decimal: "٫",
                    group: "٬",
                    nan: "ليس رقم",
                    percent: "٪",
                    infinity: "∞"
                },
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AED: "د.إ.‏",
                AUD: "AU$",
                BHD: "د.ب.‏",
                BRL: "R$",
                CAD: "CA$",
                CNY: "ي.ص",
                DZD: "د.ج.‏",
                EGP: "ج.م.‏",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                IDR: "ر.إن.",
                ILS: "₪",
                INR: "ر.ه.‏",
                IQD: "د.ع.‏",
                IRR: "ر.إ.",
                JOD: "د.أ.‏",
                JPY: "JP¥",
                KMF: "ف.ج.ق.‏",
                KRW: "₩",
                KWD: "د.ك.‏",
                LBP: "ل.ل.‏",
                LYD: "د.ل.‏",
                MAD: "د.م.‏",
                MRO: "أ.م.‏",
                MXN: "MX$",
                NZD: "NZ$",
                OMR: "ر.ع.‏",
                PKR: "ر.ب.",
                QAR: "ر.ق.‏",
                SAR: "ر.س.‏",
                SDD: "د.س.‏",
                SDG: "ج.س.",
                SSP: "ج.ج.س.",
                SYP: "ل.س.‏",
                THB: "฿",
                TND: "د.ت.‏",
                TRY: "ل.ت.",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF",
                XXX: "***",
                YER: "ر.ي.‏"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "cs",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day}. {month}. {year} {hour}:{minute}:{second}",
                pattern12: "{weekday} {day}. {month}. {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day}. {month}. {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year} {hour}:{minute}",
                pattern12: "{day}. {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year} {hour}:{minute}",
                pattern12: "{day}. {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month}. {year} {hour}:{minute}",
                pattern12: "{day}. {month}. {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day}. {month}. {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}. {month}. {year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}. {month}. {year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day}. {month}."
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}. {month}."
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}."
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        "short": ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"],
                        "long": ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
                    },
                    "months-stand-alone": {
                        "long": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"]
                    },
                    days: {
                        narrow: ["N", "P", "Ú", "S", "Č", "P", "S"],
                        "short": ["ne", "po", "út", "st", "čt", "pá", "so"],
                        "long": ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"]
                    },
                    eras: {
                        narrow: ["př.n.l.", "n.l.", "n. l."],
                        "short": ["př. n. l.", "n. l."],
                        "long": ["př. n. l.", "n. l."]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: " ",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                CSK: "Kčs",
                CZK: "Kč",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                TWD: "NT$",
                USD: "US$",
                XAF: "FCFA",
                XBB: "EMU",
                XCD: "EC$",
                XEU: "ECU",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "da",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day}. {month} {year} {hour}.{minute}.{second}",
                pattern12: "{weekday} {day}. {month} {year} {hour}.{minute}.{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day}. {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year} {hour}.{minute}",
                pattern12: "{day}. {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year} {hour}.{minute}",
                pattern12: "{day}. {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year} {hour}.{minute}",
                pattern12: "{day}. {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year} {hour}.{minute}",
                pattern12: "{day}. {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}.{minute}.{second}",
                pattern12: "{hour}.{minute}.{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}.{minute}",
                pattern12: "{hour}.{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}."
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
                        "long": ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
                    },
                    "months-stand-alone": {
                        "short": ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
                    },
                    days: {
                        narrow: ["S", "M", "T", "O", "T", "F", "L"],
                        "short": ["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
                        "long": ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
                    },
                    eras: {
                        narrow: ["fKr", "eKr", "fvt", "vt"],
                        "short": ["f.Kr.", "e.Kr.", "f.v.t.", "v.t."],
                        "long": ["f.Kr.", "e.Kr.", "før vesterlandsk tidsregning", "vesterlandsk tidsregning"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                DKK: "kr.",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "de",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day}. {month} {year}, {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day}. {month} {year}, {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day}. {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}:{minute}",
                pattern12: "{day}. {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}:{minute}",
                pattern12: "{day}. {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}:{minute}",
                pattern12: "{day}. {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}:{minute}",
                pattern12: "{day}. {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}.{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}.{month}."
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                        "long": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                    },
                    "months-stand-alone": {
                        "short": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
                    },
                    days: {
                        narrow: ["S", "M", "D", "M", "D", "F", "S"],
                        "short": ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                        "long": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                    },
                    eras: {
                        narrow: ["v. Chr.", "n. Chr.", "v. u. Z.", "u. Z."],
                        "short": ["v. Chr.", "n. Chr.", "v. u. Z.", "u. Z."],
                        "long": ["v. Chr.", "n. Chr.", "vor unserer Zeitrechnung", "unserer Zeitrechnung"]
                    },
                    dayPeriods: {
                        am: "vorm.",
                        pm: "nachm."
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                ATS: "öS",
                AUD: "AU$",
                BGM: "BGK",
                BGO: "BGJ",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                DEM: "DM",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "en",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second}",
                pattern12: "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                pattern: "{weekday}, {month} {day}, {year}"
            }, {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "long",
                day: "numeric",
                year: "numeric",
                pattern: "{month} {day}, {year}"
            }, {
                month: "short",
                day: "numeric",
                year: "numeric",
                pattern: "{month} {day}, {year}"
            }, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                pattern: "{month}/{day}/{year}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                pattern: "{month}/{day}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                month: "long",
                day: "numeric",
                pattern: "{month} {day}"
            }, {
                month: "short",
                day: "numeric",
                pattern: "{month} {day}"
            }, {
                month: "numeric",
                day: "numeric",
                pattern: "{month}/{day}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        "short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        "long": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    days: {
                        "short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        "long": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    eras: {
                        narrow: ["B", "A"],
                        "short": ["BC", "AD", "BCE", "CE"],
                        "long": ["Before Christ", "Anno Domini", "Before Common Era", "Common Era"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "A$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                TWD: "NT$",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "es",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} de {month} de {year} {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day} de {month} de {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} de {month} de {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} de {month} de {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} de {month} de {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} de {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} de {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} de {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} de {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                        "long": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                    },
                    "months-stand-alone": {
                        "short": ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sept.", "Oct.", "Nov.", "Dic."],
                        "long": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                    },
                    days: {
                        narrow: ["D", "L", "M", "X", "J", "V", "S"],
                        "short": ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                        "long": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                    },
                    eras: {
                        "short": ["a. C.", "d. C.", "a. e. c.", "e. c."],
                        "long": ["antes de Cristo", "anno Dómini", "a. e. c.", "e. c."]
                    },
                    dayPeriods: {
                        am: "a. m.",
                        pm: "p. m."
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                CAD: "CA$",
                ESP: "₧",
                EUR: "€",
                THB: "฿",
                USD: "$",
                VND: "₫",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "fr",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day} {month} {year} {hour}:{minute}:{second}",
                pattern12: "{weekday} {day} {month} {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                        "long": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                    },
                    "months-stand-alone": {
                        "short": ["Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
                        "long": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
                    },
                    days: {
                        narrow: ["D", "L", "M", "M", "J", "V", "S"],
                        "short": ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                        "long": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                    },
                    eras: {
                        narrow: ["av. J.-C.", "ap. J.-C.", "AEC", "EC"],
                        "short": ["av. J.-C.", "ap. J.-C.", "AEC", "EC"],
                        "long": ["avant Jésus-Christ", "après Jésus-Christ", "AEC", "EC"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: " ",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                ARS: "$AR",
                AUD: "$AU",
                BEF: "FB",
                BMD: "$BM",
                BND: "$BN",
                BRL: "R$",
                BSD: "$BS",
                BZD: "$BZ",
                CAD: "$CA",
                CLP: "$CL",
                COP: "$CO",
                CYP: "£CY",
                EUR: "€",
                FJD: "$FJ",
                FKP: "£FK",
                FRF: "F",
                GBP: "£GB",
                GIP: "£GI",
                IEP: "£IE",
                ILP: "£IL",
                ILS: "₪",
                INR: "₹",
                ITL: "₤IT",
                KRW: "₩",
                LBP: "£LB",
                LSL: "lLS",
                MAF: "fMA",
                MGF: "Fmg",
                MTP: "£MT",
                MXN: "$MX",
                NAD: "$NA",
                NZD: "$NZ",
                RHD: "$RH",
                SBD: "$SB",
                SGD: "$SG",
                SRD: "$SR",
                THB: "฿",
                TTD: "$TT",
                USD: "$US",
                UYU: "$UY",
                VND: "₫",
                WST: "WS$",
                XAF: "FCFA",
                XDR: "DTS",
                XOF: "CFA",
                XPF: "FCFP"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "id",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} {month} {year} {hour}.{minute}.{second}",
                pattern12: "{weekday}, {day} {month} {year} {hour}.{minute}.{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}.{minute}",
                pattern12: "{day} {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}.{minute}",
                pattern12: "{day} {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}.{minute}",
                pattern12: "{day} {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}.{minute}",
                pattern12: "{day} {month} {year} {hour}.{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}.{minute}",
                pattern12: "{day}/{month}/{year} {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}.{minute}.{second}",
                pattern12: "{hour}.{minute}.{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}.{minute}",
                pattern12: "{hour}.{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"],
                        "long": ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
                    },
                    days: {
                        narrow: ["M", "S", "S", "R", "K", "J", "S"],
                        "short": ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                        "long": ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                    },
                    eras: {
                        narrow: ["SM", "M"],
                        "short": ["SM", "M", "SEU", "EU"],
                        "long": ["Sebelum Masehi", "M", "Sebelum Era Umum", "Era Umum"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                IDR: "Rp",
                ILS: "₪",
                INR: "Rs",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "US$",
                UYU: "$U",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "it",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day} {month} {year}, {hour}:{minute}:{second}",
                pattern12: "{weekday} {day} {month} {year}, {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year}, {hour}:{minute}",
                pattern12: "{day}/{month}/{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year}, {hour}:{minute}",
                pattern12: "{day}/{month}/{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year}, {hour}:{minute}",
                pattern12: "{day}/{month}/{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year}, {hour}:{minute}",
                pattern12: "{day}/{month}/{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year}, {hour}:{minute}",
                pattern12: "{day}/{month}/{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year}, {hour}:{minute}",
                pattern12: "{day}/{month}/{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
                        "short": ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                        "long": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
                    },
                    "months-stand-alone": {
                        "long": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
                    },
                    days: {
                        narrow: ["D", "L", "M", "M", "G", "V", "S"],
                        "short": ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                        "long": ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                    },
                    eras: {
                        narrow: ["aC", "dC", "BCE", "CE"],
                        "short": ["aC", "dC", "BCE", "CE"],
                        "long": ["a.C.", "d.C.", "BCE", "CE"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "A$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                ILS: "₪",
                INR: "₹",
                NZD: "NZ$",
                THB: "฿",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "ja",
        date: {
            ca: ["gregory"],
            hourNo0: !1,
            hour12: !1,
            formats: [{
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{year}年{month}月{day}日({weekday}) {hour}:{minute}:{second}",
                pattern12: "{year}年{month}月{day}日({weekday}) {ampm}{hour}:{minute}:{second}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                pattern: "{year}年{month}月{day}日({weekday})"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                pattern: "{year}年{month}月{day}日"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                pattern: "{year}年{month}月{day}日"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                pattern: "{year}/{month}/{day}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                pattern: "{year}/{month}/{day}"
            }, {
                year: "numeric",
                month: "long",
                pattern: "{year}年{month}月"
            }, {
                year: "numeric",
                month: "short",
                pattern: "{year}年{month}月"
            }, {
                year: "numeric",
                month: "numeric",
                pattern: "{year}/{month}"
            }, {
                month: "long",
                day: "numeric",
                pattern: "{month}月{day}日"
            }, {
                month: "short",
                day: "numeric",
                pattern: "{month}月{day}日"
            }, {
                month: "numeric",
                day: "numeric",
                pattern: "{month}/{day}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{ampm}{hour}:{minute}:{second}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                pattern: "{year}年"
            }, {
                year: "2-digit",
                pattern: "{year}年"
            }, {
                month: "long",
                pattern: "{month}月"
            }, {
                month: "short",
                pattern: "{month}月"
            }, {
                month: "numeric",
                pattern: "{month}月"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}日"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        "short": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                        "long": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                    },
                    days: {
                        narrow: ["日", "月", "火", "水", "木", "金", "土"],
                        "short": ["日", "月", "火", "水", "木", "金", "土"],
                        "long": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                    },
                    eras: {
                        narrow: ["BC", "AD", "BCE", "CE"],
                        "short": ["紀元前", "西暦", "西暦紀元前", "西暦紀元"],
                        "long": ["紀元前", "西暦", "西暦紀元前", "西暦紀元"]
                    },
                    dayPeriods: {
                        am: "午前",
                        pm: "午後"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "元",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "￥",
                KRW: "￦",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "ko",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{year}년 {month} {day}일 ({weekday})  {hour}:{minute}:{second}",
                pattern12: "{year}년 {month} {day}일 ({weekday}) {ampm} {hour}:{minute}:{second}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                pattern: "{year}년 {month} {day}일 ({weekday})"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}년 {month} {day}일  {hour}:{minute}",
                pattern12: "{year}년 {month} {day}일 {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}년 {month} {day}일  {hour}:{minute}",
                pattern12: "{year}년 {month} {day}일 {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}년 {month} {day}일  {hour}:{minute}",
                pattern12: "{year}년 {month} {day}일 {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}년 {month} {day}일  {hour}:{minute}",
                pattern12: "{year}년 {month} {day}일 {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}. {month}. {day}.  {hour}:{minute}",
                pattern12: "{year}. {month}. {day}. {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}. {month}. {day}.  {hour}:{minute}",
                pattern12: "{year}. {month}. {day}. {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}. {month}. {day}.  {hour}:{minute}",
                pattern12: "{year}. {month}. {day}. {ampm} {hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}. {month}. {day}.  {hour}:{minute}",
                pattern12: "{year}. {month}. {day}. {ampm} {hour}:{minute}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}. {month}. {day}.  {hour}:{minute}",
                pattern12: "{year}. {month}. {day}. {ampm} {hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}. {month}. {day}.  {hour}:{minute}",
                pattern12: "{year}. {month}. {day}. {ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                pattern: "{year}년 {month} {day}일"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                pattern: "{year}년 {month} {day}일"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                pattern: "{year}. {month}. {day}."
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                pattern: "{year}. {month}. {day}."
            }, {
                year: "numeric",
                month: "long",
                pattern: "{year}년 {month}"
            }, {
                year: "numeric",
                month: "short",
                pattern: "{year}년 {month}"
            }, {
                year: "numeric",
                month: "numeric",
                pattern: "{year}. {month}."
            }, {
                month: "long",
                day: "numeric",
                pattern: "{month} {day}일"
            }, {
                month: "short",
                day: "numeric",
                pattern: "{month} {day}일"
            }, {
                month: "numeric",
                day: "numeric",
                pattern: "{month}. {day}."
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{ampm} {hour}:{minute}:{second}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                pattern: "{year}년"
            }, {
                year: "2-digit",
                pattern: "{year}년"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}월"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}일"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                        "short": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                        "long": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                    },
                    days: {
                        narrow: ["일", "월", "화", "수", "목", "금", "토"],
                        "short": ["일", "월", "화", "수", "목", "금", "토"],
                        "long": ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                    },
                    eras: {
                        "short": ["기원전", "서기", "BCE", "CE"],
                        "long": ["기원전", "서기"]
                    },
                    dayPeriods: {
                        am: "오전",
                        pm: "오후"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "ms",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} {month} {year} {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day} {month} {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}-{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}-{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"],
                        "short": ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
                        "long": ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
                    },
                    days: {
                        narrow: ["A", "I", "S", "R", "K", "J", "S"],
                        "short": ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
                        "long": ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
                    },
                    eras: {
                        "short": ["S.M.", "TM"],
                        "long": ["S.M.", "TM"]
                    },
                    dayPeriods: {
                        am: "PG",
                        pm: "PTG"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "A$",
                BRL: "R$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "₩",
                MYR: "RM",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "nl",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day} {month} {year} {hour}:{minute}:{second}",
                pattern12: "{weekday} {day} {month} {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}-{month}-{year} {hour}:{minute}",
                pattern12: "{day}-{month}-{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}-{month}-{year} {hour}:{minute}",
                pattern12: "{day}-{month}-{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}-{month}-{year} {hour}:{minute}",
                pattern12: "{day}-{month}-{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}-{month}-{year} {hour}:{minute}",
                pattern12: "{day}-{month}-{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}-{month}-{year} {hour}:{minute}",
                pattern12: "{day}-{month}-{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}-{month}-{year} {hour}:{minute}",
                pattern12: "{day}-{month}-{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}-{month}-{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}-{month}-{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}-{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}-{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
                        "long": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
                    },
                    "months-stand-alone": {
                        "short": ["Jan.", "Feb.", "Mrt.", "Apr.", "Mei", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Dec."],
                        "long": ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
                    },
                    days: {
                        narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
                        "short": ["zo", "ma", "di", "wo", "do", "vr", "za"],
                        "long": ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                    },
                    eras: {
                        narrow: ["v.C.", "n.C.", "vgj", "gj"],
                        "short": ["v.Chr.", "n.Chr.", "v.g.j.", "g.j."],
                        "long": ["voor Christus", "na Christus", "vóór gewone jaartelling", "gewone jaartelling"]
                    },
                    dayPeriods: {
                        am: "a.m.",
                        pm: "p.m."
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency} {number}",
                    negativePattern: "{currency} {number}-"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "C$",
                CNY: "CN¥",
                EUR: "€",
                FJD: "FJ$",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                SBD: "SI$",
                THB: "฿",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "nb",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day}. {month} {year}, {hour}.{minute}.{second}",
                pattern12: "{weekday} {day}. {month} {year}, {hour}.{minute}.{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day}. {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}.{minute}",
                pattern12: "{day}. {month} {year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}.{minute}",
                pattern12: "{day}. {month} {year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}.{minute}",
                pattern12: "{day}. {month} {year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}. {month} {year}, {hour}.{minute}",
                pattern12: "{day}. {month} {year}, {hour}.{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}.{minute}",
                pattern12: "{day}.{month}.{year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}.{minute}",
                pattern12: "{day}.{month}.{year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}.{minute}",
                pattern12: "{day}.{month}.{year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}.{minute}",
                pattern12: "{day}.{month}.{year}, {hour}.{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}.{minute}",
                pattern12: "{day}.{month}.{year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}.{minute}",
                pattern12: "{day}.{month}.{year}, {hour}.{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day}. {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}.{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day}. {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}.{month}."
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}.{minute}.{second}",
                pattern12: "{hour}.{minute}.{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}.{minute}",
                pattern12: "{hour}.{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}."
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}."
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["jan.", "feb.", "mar.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."],
                        "long": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
                    },
                    "months-stand-alone": {
                        "short": ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"]
                    },
                    days: {
                        narrow: ["S", "M", "T", "O", "T", "F", "L"],
                        "short": ["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
                        "long": ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
                    },
                    eras: {
                        narrow: ["f.Kr.", "e.Kr.", "fvt.", "vt"],
                        "short": ["f.Kr.", "e.Kr.", "fvt.", "vt."],
                        "long": ["f.Kr.", "e.Kr.", "før vår tidsregning", "vår tidsregning"]
                    },
                    dayPeriods: {
                        am: "a.m.",
                        pm: "p.m."
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency} {number}",
                    negativePattern: "-{currency} {number}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: " ",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                EUR: "€",
                GBP: "£",
                NOK: "kr",
                XOF: "CFA"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "pl",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} {month} {year}, {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day} {month} {year}, {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                day: "numeric",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "2-digit",
                year: "numeric",
                pattern: "{month}.{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "2-digit",
                pattern: "{day}.{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                        "short": ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                        "long": ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
                    },
                    "months-stand-alone": {
                        "long": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
                    },
                    days: {
                        narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                        "short": ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                        "long": ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                    },
                    eras: {
                        "short": ["p.n.e.", "n.e.", "BCE", "CE"],
                        "long": ["p.n.e.", "n.e.", "BCE", "CE"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: " ",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                BRL: "R$",
                EUR: "€",
                PLN: "zł",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "pt",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} de {month} de {year} {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day} de {month} de {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} de {month} de {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} de {month} de {year} {hour}:{minute}",
                pattern12: "{day} de {month} de {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} de {month} de {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} de {month} de {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} de {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} de {year}"
            }, {
                month: "2-digit",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} de {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} de {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                        "long": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                    },
                    days: {
                        narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                        "short": ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                        "long": ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                    },
                    eras: {
                        "short": ["a.C.", "d.C.", "AEC", "EC"],
                        "long": ["Antes de Cristo", "Ano do Senhor", "Antes da Era Comum", "Era Comum"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                PTE: "Esc.",
                THB: "฿",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "ro",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} {month} {year}, {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day} {month} {year}, {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}, {hour}:{minute}",
                pattern12: "{day} {month} {year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "2-digit",
                year: "numeric",
                pattern: "{month}.{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "2-digit",
                month: "2-digit",
                pattern: "{day}.{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
                        "short": ["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."],
                        "long": ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]
                    },
                    "months-stand-alone": {
                        "long": ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
                    },
                    days: {
                        narrow: ["D", "L", "M", "M", "J", "V", "S"],
                        "short": ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
                        "long": ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"]
                    },
                    eras: {
                        "short": ["î.Hr.", "d.Hr.", "î.e.n", "e.n."],
                        "long": ["înainte de Hristos", "după Hristos", "înaintea erei noastre", "era noastră"]
                    },
                    dayPeriods: {
                        am: "a.m.",
                        pm: "p.m."
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                XAF: "FCFA",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "ru",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {day} {month} {year} г., {hour}:{minute}:{second}",
                pattern12: "{weekday}, {day} {month} {year} г., {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday}, {day} {month} {year} г."
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} г., {hour}:{minute}",
                pattern12: "{day} {month} {year} г., {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} г., {hour}:{minute}",
                pattern12: "{day} {month} {year} г., {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} г., {hour}:{minute}",
                pattern12: "{day} {month} {year} г., {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} г., {hour}:{minute}",
                pattern12: "{day} {month} {year} г., {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}, {hour}:{minute}",
                pattern12: "{day}.{month}.{year}, {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year} г."
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year} г."
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "2-digit",
                year: "numeric",
                pattern: "{month}.{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "2-digit",
                month: "2-digit",
                pattern: "{day}.{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                        "short": ["янв.", "февр.", "марта", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."],
                        "long": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
                    },
                    "months-stand-alone": {
                        "short": ["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
                        "long": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
                    },
                    days: {
                        narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                        "short": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                        "long": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                    },
                    eras: {
                        narrow: ["до н.э.", "н.э."],
                        "short": ["до н. э.", "н. э."],
                        "long": ["до н. э.", "н. э."]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: " ",
                    nan: "не число",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "A$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                RUB: "руб.",
                RUR: "р.",
                THB: "฿",
                TMT: "ТМТ",
                TWD: "NT$",
                UAH: "₴",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF",
                XXX: "XXXX"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "sv",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day} {month} {year} {hour}:{minute}:{second}",
                pattern12: "{weekday} {day} {month} {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}-{month}-{day} {hour}:{minute}",
                pattern12: "{year}-{month}-{day} {hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}-{month}-{day} {hour}:{minute}",
                pattern12: "{year}-{month}-{day} {hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}-{month}-{day} {hour}:{minute}",
                pattern12: "{year}-{month}-{day} {hour}:{minute} {ampm}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}-{month}-{day} {hour}:{minute}",
                pattern12: "{year}-{month}-{day} {hour}:{minute} {ampm}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}-{month}-{day} {hour}:{minute}",
                pattern12: "{year}-{month}-{day} {hour}:{minute} {ampm}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}-{month}-{day} {hour}:{minute}",
                pattern12: "{year}-{month}-{day} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                pattern: "{year}-{month}-{day}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                pattern: "{year}-{month}-{day}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                year: "numeric",
                month: "2-digit",
                pattern: "{year}-{month}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        "short": ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."],
                        "long": ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
                    },
                    "months-stand-alone": {
                        "short": ["Jan.", "Feb.", "Mars", "Apr.", "Maj", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dec."],
                        "long": ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
                    },
                    days: {
                        narrow: ["S", "M", "T", "O", "T", "F", "L"],
                        "short": ["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
                        "long": ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
                    },
                    eras: {
                        narrow: ["f.Kr.", "e.Kr.", "fvt", "vt"],
                        "short": ["f.Kr.", "e.Kr.", "f.v.t.", "v.t."],
                        "long": ["före Kristus", "efter Kristus", "före västerländsk tideräkning", "västerländsk tideräkning"]
                    },
                    dayPeriods: {
                        am: "fm",
                        pm: "em"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "{number} %",
                    negativePattern: "-{number} %"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: " ",
                    nan: "¤¤¤",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                BBD: "Bds$",
                BMD: "BM$",
                BRL: "BR$",
                BSD: "BS$",
                BZD: "BZ$",
                CAD: "CAN$",
                DKK: "Dkr",
                DOP: "RD$",
                EEK: "Ekr",
                EGP: "EG£",
                EUR: "€",
                ILS: "₪",
                ISK: "Ikr",
                JMD: "JM$",
                MXN: "MX$",
                NOK: "Nkr",
                SEK: "kr",
                USD: "US$",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "th",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday} {day} {month} {year} {hour}:{minute}:{second}",
                pattern12: "{weekday} {day} {month} {year} {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{weekday} {day} {month} {year}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year} {hour}:{minute}",
                pattern12: "{day} {month} {year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}/{month}/{year} {hour}:{minute}",
                pattern12: "{day}/{month}/{year} {hour}:{minute} {ampm}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "numeric",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                pattern: "{day}/{month}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "numeric",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "numeric",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                        "short": ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                        "long": ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                    },
                    days: {
                        narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                        "short": ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                        "long": ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                    },
                    eras: {
                        narrow: ["ก่อน ค.ศ.", "ค.ศ.", "ก.ส.ศ.", "ส.ศ."],
                        "short": ["ปีก่อน ค.ศ.", "ค.ศ.", "ก.ส.ศ.", "ส.ศ."],
                        "long": ["ปีก่อนคริสต์ศักราช", "คริสต์ศักราช", "ก่อนสามัญศักราช", "สามัญศักราช"]
                    },
                    dayPeriods: {
                        am: "ก่อนเที่ยง",
                        pm: "หลังเที่ยง"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "fil",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second}",
                pattern12: "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second} {ampm}"
            }, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                pattern: "{weekday}, {month} {day}, {year}"
            }, {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month} {day}, {year}, {hour}:{minute}",
                pattern12: "{month} {day}, {year}, {hour}:{minute} {ampm}"
            }, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{month}/{day}/{year}, {hour}:{minute}",
                pattern12: "{month}/{day}/{year}, {hour}:{minute} {ampm}"
            }, {
                month: "long",
                day: "numeric",
                year: "numeric",
                pattern: "{month} {day}, {year}"
            }, {
                month: "short",
                day: "numeric",
                year: "numeric",
                pattern: "{month} {day}, {year}"
            }, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                pattern: "{month}/{day}/{year}"
            }, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                pattern: "{month}/{day}/{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "numeric",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                month: "long",
                day: "numeric",
                pattern: "{month} {day}"
            }, {
                month: "short",
                day: "numeric",
                pattern: "{month} {day}"
            }, {
                month: "numeric",
                day: "numeric",
                pattern: "{month}/{day}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{hour}:{minute}:{second} {ampm}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{hour}:{minute} {ampm}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["E", "P", "M", "A", "M", "H", "H", "A", "S", "O", "N", "D"],
                        "short": ["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"],
                        "long": ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"]
                    },
                    days: {
                        narrow: ["L", "L", "M", "M", "H", "B", "S"],
                        "short": ["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"],
                        "long": ["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"]
                    },
                    eras: {
                        "short": ["BC", "AD", "BCE", "CE"],
                        "long": ["BC", "AD", "BCE", "CE"]
                    },
                    dayPeriods: {
                        am: "AM",
                        pm: "PM"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "-{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "A$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                PHP: "₱",
                THB: "฿",
                TWD: "NT$",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "tr",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: [{
                day: "numeric",
                month: "long",
                year: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{day} {month} {year} {weekday}  {hour}:{minute}:{second}",
                pattern12: "{day} {month} {year} {weekday} {ampm} {hour}:{minute}:{second}"
            }, {
                day: "numeric",
                month: "long",
                year: "numeric",
                weekday: "long",
                pattern: "{day} {month} {year} {weekday}"
            }, {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}  {hour}:{minute}",
                pattern12: "{day} {month} {year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}  {hour}:{minute}",
                pattern12: "{day} {month} {year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day} {month} {year}  {hour}:{minute}",
                pattern12: "{day} {month} {year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day} {month} {year}  {hour}:{minute}",
                pattern12: "{day} {month} {year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}  {hour}:{minute}",
                pattern12: "{day}.{month}.{year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}  {hour}:{minute}",
                pattern12: "{day}.{month}.{year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}  {hour}:{minute}",
                pattern12: "{day}.{month}.{year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}  {hour}:{minute}",
                pattern12: "{day}.{month}.{year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}  {hour}:{minute}",
                pattern12: "{day}.{month}.{year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{day}.{month}.{year}  {hour}:{minute}",
                pattern12: "{day}.{month}.{year} {ampm} {hour}:{minute}"
            }, {
                day: "2-digit",
                month: "long",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "short",
                year: "numeric",
                pattern: "{day} {month} {year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                pattern: "{day}.{month}.{year}"
            }, {
                month: "long",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "short",
                year: "numeric",
                pattern: "{month} {year}"
            }, {
                month: "2-digit",
                year: "numeric",
                pattern: "{month}/{year}"
            }, {
                day: "2-digit",
                month: "long",
                pattern: "{day} {month}"
            }, {
                day: "numeric",
                month: "short",
                pattern: "{day} {month}"
            }, {
                day: "2-digit",
                month: "2-digit",
                pattern: "{day}/{month}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{ampm} {hour}:{minute}:{second}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{ampm} {hour}:{minute}"
            }, {
                year: "numeric",
                pattern: "{year}"
            }, {
                year: "2-digit",
                pattern: "{year}"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
                        "short": ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                        "long": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                    },
                    days: {
                        narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                        "short": ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                        "long": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                    },
                    eras: {
                        "short": ["MÖ", "MS", "İÖ", "İS"],
                        "long": ["Milattan Önce", "Milattan Sonra", "İsa’dan Önce", "İsa’dan Sonra"]
                    },
                    dayPeriods: {
                        am: "ÖÖ",
                        pm: "ÖS"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{number} {currency}",
                    negativePattern: "-{number} {currency}"
                },
                percent: {
                    positivePattern: "%{number}",
                    negativePattern: "-%{number}"
                }
            },
            symbols: {
                latn: {
                    decimal: ",",
                    group: ".",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TRY: "₺",
                TWD: "NT$",
                USD: "$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "zh",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{year}年{month}月{day}日{weekday} {hour}:{minute}:{second}",
                pattern12: "{year}年{month}月{day}日{weekday} {ampm}{hour}:{minute}:{second}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                pattern: "{year}年{month}月{day}日{weekday}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                pattern: "{year}年{month}月{day}日"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                pattern: "{year}年{month}月{day}日"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                pattern: "{year}/{month}/{day}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                pattern: "{year}/{month}/{day}"
            }, {
                year: "numeric",
                month: "long",
                pattern: "{year}年{month}月"
            }, {
                year: "numeric",
                month: "short",
                pattern: "{year}年{month}月"
            }, {
                year: "numeric",
                month: "numeric",
                pattern: "{year}年{month}月"
            }, {
                month: "long",
                day: "numeric",
                pattern: "{month}月{day}日"
            }, {
                month: "short",
                day: "numeric",
                pattern: "{month}月{day}日"
            }, {
                month: "numeric",
                day: "numeric",
                pattern: "{month}/{day}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{ampm}{hour}:{minute}:{second}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                pattern: "{year}年"
            }, {
                year: "2-digit",
                pattern: "{year}年"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}月"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}日"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        "short": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                        "long": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                    },
                    days: {
                        narrow: ["日", "一", "二", "三", "四", "五", "六"],
                        "short": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                        "long": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                    },
                    eras: {
                        narrow: ["公元前", "公元"],
                        "short": ["公元前", "公元"],
                        "long": ["公元前", "公元"]
                    },
                    dayPeriods: {
                        am: "上午",
                        pm: "下午"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency} {number}",
                    negativePattern: "-{currency} {number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "￥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILR: "ILS",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "￦",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), IntlPolyfill.__addLocaleData({
        locale: "zh",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !0,
            formats: [{
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{year}年{month}月{day}日{weekday} {hour}:{minute}:{second}",
                pattern12: "{year}年{month}月{day}日{weekday} {ampm}{hour}:{minute}:{second}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                pattern: "{year}年{month}月{day}日{weekday}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}年{month}月{day}日 {hour}:{minute}",
                pattern12: "{year}年{month}月{day}日 {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "2-digit",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                pattern: "{year}/{month}/{day} {hour}:{minute}",
                pattern12: "{year}/{month}/{day} {ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                month: "long",
                day: "numeric",
                pattern: "{year}年{month}月{day}日"
            }, {
                year: "numeric",
                month: "short",
                day: "numeric",
                pattern: "{year}年{month}月{day}日"
            }, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                pattern: "{year}/{month}/{day}"
            }, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                pattern: "{year}/{month}/{day}"
            }, {
                year: "numeric",
                month: "long",
                pattern: "{year}年{month}月"
            }, {
                year: "numeric",
                month: "short",
                pattern: "{year}年{month}月"
            }, {
                year: "numeric",
                month: "numeric",
                pattern: "{year}年{month}月"
            }, {
                month: "long",
                day: "numeric",
                pattern: "{month}月{day}日"
            }, {
                month: "short",
                day: "numeric",
                pattern: "{month}月{day}日"
            }, {
                month: "numeric",
                day: "numeric",
                pattern: "{month}/{day}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                pattern: "{hour}:{minute}:{second}",
                pattern12: "{ampm}{hour}:{minute}:{second}"
            }, {
                hour: "numeric",
                minute: "2-digit",
                pattern: "{hour}:{minute}",
                pattern12: "{ampm}{hour}:{minute}"
            }, {
                year: "numeric",
                pattern: "{year}年"
            }, {
                year: "2-digit",
                pattern: "{year}年"
            }, {
                month: "long",
                pattern: "{month}"
            }, {
                month: "short",
                pattern: "{month}"
            }, {
                month: "numeric",
                pattern: "{month}月"
            }, {
                weekday: "long",
                pattern: "{weekday}"
            }, {
                weekday: "narrow",
                pattern: "{weekday}"
            }, {
                weekday: "short",
                pattern: "{weekday}"
            }, {
                day: "numeric",
                pattern: "{day}日"
            }],
            calendars: {
                gregory: {
                    months: {
                        narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        "short": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                        "long": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                    },
                    days: {
                        narrow: ["日", "一", "二", "三", "四", "五", "六"],
                        "short": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                        "long": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                    },
                    eras: {
                        narrow: ["公元前", "公元"],
                        "short": ["公元前", "公元"],
                        "long": ["公元前", "公元"]
                    },
                    dayPeriods: {
                        am: "上午",
                        pm: "下午"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "-{number}"
                },
                currency: {
                    positivePattern: "{currency} {number}",
                    negativePattern: "-{currency} {number}"
                },
                percent: {
                    positivePattern: "{number}%",
                    negativePattern: "-{number}%"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    percent: "%",
                    infinity: "∞"
                }
            },
            currencies: {
                AUD: "AU$",
                BRL: "R$",
                CAD: "CA$",
                CNY: "￥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILR: "ILS",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "￦",
                MXN: "MX$",
                NZD: "NZ$",
                THB: "฿",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }), ! function(e, t) {
        var n = t();
        e.t8 = n, "undefined" != typeof exports && (module.exports = n)
    }(this, function() {
        "use strict";
        var e = {},
            t = function() {
                function e(e, t, n) {
                    if (null === e || void 0 === e) return -1;
                    var r = Array.prototype.indexOf;
                    if (r && e.indexOf === r) return e.indexOf(t, n);
                    for (var i = 0, a = e.length; a > i; i++)
                        if (e[i] === t) return i;
                    return -1
                }

                function t(e) {
                    return "undefined" != typeof e && null !== e
                }

                function n(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                }

                function i(e, t) {
                    if (!e) throw new Error(t)
                }

                function a(e, t) {
                    var n = e;
                    if (!(e instanceof Date))
                        if (isNaN(e)) {
                            if ("string" != typeof e) throw new Error("Invalid date parameter '" + e + "'. Expected number or string timestamp or ISO date string");
                            n = o(e)
                        } else n = new Date(parseInt(e + "", 10));
                    if (!n) throw new Error("t8 could not parse date string '" + e + "'");
                    return t && (n = s(n)), n
                }

                function o(e) {
                    var t, n, r, i = e.match(m),
                        a = i && "-" === i[11];
                    if (!i) return null;
                    for (t = 0, n = i.length; n > t; t++) i[t] = ~~i[t];
                    return r = 6e4 * (60 * i[12] + i[13]) * (a ? 1 : -1), new Date(Date.UTC(i[1], i[2] - 1, i[3], i[6], i[7], i[8], i[9]) + r)
                }

                function s(e) {
                    var t = new Date(e.getTime());
                    return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t
                }

                function u(e, t, n) {
                    try {
                        return e.apply(t, n)
                    } catch (r) {
                        return d.value = r, d
                    }
                }
                var m = /^(\d{4})-(\d{2})-(\d{2})((T(\d{2}):(\d{2}):(\d{2}))?(?:\.(\d+))?(Z|([+-])(\d{2})(?::(\d{2}))?))?$/,
                    c = /\u200e/g,
                    d = {
                        value: null
                    };
                return {
                    parseDateString: a,
                    assert: i,
                    isString: r,
                    isArray: n,
                    isDefined: t,
                    indexOf: e,
                    tryCatch: u,
                    errorObject: d,
                    RTL_PATTERN: c
                }
            }();
        "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports = t);
        var n = function() {
                var t = function() {};
                return t.prototype.format = function(t, n, r) {
                    var i, a = "",
                        o = e[r],
                        s = {
                            style: "currency",
                            currency: n,
                            currencyDisplay: "code",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        };
                    if (!o) throw new Error("No locale data found for locale " + r);
                    if (!o.intlLocale) throw new Error("IntlLocale is not specified for locale " + r);
                    o.currency && "function" == typeof o.currency.getCurrencyDisplay && (s.currencyDisplay = o.currency.getCurrencyDisplay(n)), ("INR" === n || "JPY" === n) && (s.minimumFractionDigits = 0, s.maximumFractionDigits = 0);
                    try {
                        i = new Intl.NumberFormat(o.intlLocale + "-u-nu-latn-ca-gregory", s), a = i.format(t)
                    } catch (u) {
                        if ("code" === s.currencyDisplay) try {
                            s.currencyDisplay = "symbol", i = new Intl.NumberFormat(o.intlLocale + "-u-nu-latn-ca-gregory", s), a = i.format(t);
                            var m = ["(AU|A|US|BR|R|CAN|CA|C|A|HK|NZ|SG)\\u0024", "\\u0024(AU|A|US|BR|R|CAN|CA|C|A|HK|NZ|SG)|\\u0024", "GB£|£GB|£", "€", "ر.ه.‏", "JP¥|¥JP|¥", "₹|Rs", "Dkr", "NKr", "kr"],
                                c = new RegExp("(" + m.join("|") + ")");
                            a = a.replace(c, n)
                        } catch (d) {
                            a = t + " " + n
                        }
                    }
                    return a = a.replace(/\u0020/g, " "), o.currency && o.currency.postFormatting && (a = o.currency.postFormatting(n, t, a)), a
                }, t
            }(),
            r = function() {
                function n(e) {
                    return 10 > e ? "0" + e : e
                }

                function r(e) {
                    return e.getUTCFullYear() + "-" + n(e.getUTCMonth() + 1) + "-" + n(e.getUTCDate())
                }
                var i = t.RTL_PATTERN,
                    a = function() {
                        this.instanceCache = {}
                    };
                return a.prototype.format = function(n, a, o, s) {
                    var u, m, c, d, l, h = "",
                        p = e[a],
                        y = t.parseDateString(n, s),
                        f = t.tryCatch,
                        g = this.instanceCache;
                    if ("d.narrow" === o && p.date.narrowDayNames) return p.date.narrowDayNames[y.getDay()];
                    if ("iso" === o) return r(y);
                    if (!p) throw new Error("No locale data found for locale " + a);
                    if (!p.intlLocale) throw new Error("IntlLocale is not specified for locale " + a);
                    return m = p.date.intlOptions[o], m.timeZone = "UTC", l = f(function() {
                        c = p.intlLocale, "zh" !== c && (c += "-u-nu-latn-ca-gregory"), d = c + o, u = g[d], u || (u = g[d] = new Intl.DateTimeFormat(c, m)), h = u.format(y)
                    }, void 0), l === t.errorObject && (h = y.toLocaleDateString()), h = h.replace(i, ""), p.date && p.date.postFormatting && (h = p.date.postFormatting(o, n, h)), h
                }, a
            }(),
            i = function() {
                function e(e) {
                    if (!e) return !1;
                    var t = m.charsets.korean,
                        n = e.charCodeAt(0);
                    return n >= t.lowerbound && n <= t.upperbound
                }

                function n(e) {
                    if (!e) return !1;
                    for (var t = e.charCodeAt(0), n = m.charsets.CJ, r = 0, i = n.length; i > r; r++)
                        if (t >= n[r].lowerbound && t >= n[r].upperbound) return !0;
                    return !1
                }

                function r(e, n) {
                    for (var r = e.defaultTemplate, i = e.localeTemplates, a = 0, o = i.length; o > a; a++) t.indexOf(i[a].locales, n) >= 0 && (r = i[a].template);
                    return r
                }

                function a(e) {
                    var n = i.formats,
                        r = i.templates;
                    return e ? (t.isString(e) && (e = [e]), t.isArray(e) ? t.indexOf(e, n.FULL_NAME) >= 0 ? r.FULL_NAME : t.indexOf(e, n.LIST_VIEW) >= 0 ? r.LIST_VIEW : r.FAMILIAR_NAME : r.FAMILIAR_NAME) : r.FAMILIAR_NAME
                }

                function o(e) {
                    if (e) {
                        if (t.isArray(e)) return t.indexOf(e, i.formats.MICROFORMAT) >= 0;
                        if (t.isString(e)) return e === i.formats.MICROFORMAT
                    }
                    return !1
                }

                function s(e, t, n, r, i) {
                    if (!e) return "";
                    var a = e.replace(u, "");
                    return t && (a = r(a)), n && (a = i(a)), a
                }
                var u = /(^\s+|\s+$)/g,
                    m = function() {};
                return m.formats = {
                    FAMILIAR_NAME: "FAMILIAR_NAME",
                    FULL_NAME: "FULL_NAME",
                    MICROFORMAT: "MICROFORMAT",
                    LIST_VIEW: "LIST_VIEW"
                }, m.templates = {
                    MICROFORMAT: {
                        firstName: function(e) {
                            return '<span class="given-name">' + e + "</span>"
                        },
                        lastName: function(e) {
                            return '<span class="family-name">' + e + "</span>"
                        },
                        maidenName: function(e) {
                            return '<span class="additional-name">' + e + "</span>"
                        }
                    },
                    FAMILIAR_NAME: {
                        defaultTemplate: function(e, t, n) {
                            return e
                        },
                        localeTemplates: [{
                            locales: ["de_DE", "pl_PL", "ro_RO", "tr_TR"],
                            template: function(e, t, n) {
                                return e + " " + t
                            }
                        }, {
                            locales: ["CJK"],
                            template: function(e, t, n) {
                                return t + e
                            }
                        }, {
                            locales: ["CJK-ja_JP"],
                            template: function(e, t, n) {
                                return t + " " + e
                            }
                        }]
                    },
                    FULL_NAME: {
                        defaultTemplate: function(e, t, n) {
                            return e + (n ? " (" + n + ")" : "") + " " + t
                        },
                        localeTemplates: [{
                            locales: ["ar_AE", "th_TH"],
                            template: function(e, t, n) {
                                return e + (n ? " " + n : "") + (t ? " " + t : "")
                            }
                        }, {
                            locales: ["cs_CZ"],
                            template: function(e, t, n) {
                                return e + (t ? " " + t : "") + (n ? " (roz. " + n + ")" : "")
                            }
                        }, {
                            locales: ["de_DE"],
                            template: function(e, t, n) {
                                return e + (t ? " " + t : "") + (n ? " geb. " + n : "")
                            }
                        }, {
                            locales: ["CJK-ja_JP"],
                            template: function(e, t, n) {
                                return t + (e ? " " + e : "") + (n ? " (" + n + ")" : "")
                            }
                        }, {
                            locales: ["CJK"],
                            template: function(e, t, n) {
                                return t + e + (n ? " (" + n + ")" : "")
                            }
                        }, {
                            locales: ["ms_MY"],
                            template: function(e, t, n) {
                                return e + (t ? " " + t : "") + (n ? " (" + n + ")" : "")
                            }
                        }, {
                            locales: ["nl_NL"],
                            template: function(e, t, n) {
                                return e + " " + t + (n ? "-" + n : "")
                            }
                        }, {
                            locales: ["pl_PL"],
                            template: function(e, t, n) {
                                return e + (t ? " " + t : "") + (n ? " z d. " + n : "")
                            }
                        }]
                    },
                    LIST_VIEW: {
                        defaultTemplate: function(e, t, n) {
                            return (t ? t + ", " : "") + e
                        },
                        localeTemplates: [{
                            locales: ["CJK"],
                            template: function(e, t, n) {
                                return t + e
                            }
                        }, {
                            locales: ["CJK-ja_JP"],
                            template: function(e, t, n) {
                                return t + " " + e
                            }
                        }, {
                            locales: ["ar_AE", "in_ID", "ms_MY", "th_TH"],
                            template: function(e, t, n) {
                                return e + " " + t
                            }
                        }]
                    }
                }, m.locales = {
                    CJK: "CJK",
                    CJK_ja_JP: "CJK-ja_JP",
                    ja_JP: "ja_JP"
                }, m.charsets = {
                    korean: {
                        lowerbound: 44032,
                        upperbound: 55215
                    },
                    CJ: [{
                        lowerbound: 19968,
                        upperbound: 40895
                    }, {
                        lowerbound: 12448,
                        upperbound: 12543
                    }, {
                        lowerbound: 65377,
                        upperbound: 65439
                    }, {
                        lowerbound: 12352,
                        upperbound: 12447
                    }]
                }, m.prototype.htmlEncode = function(e) {
                    return null === e || void 0 === e ? null : e.toString().replace(/(.)/g, function(e) {
                        return "<" === e ? "&lt;" : ">" === e ? "&gt;" : "&" === e ? "&amp;" : '"' === e ? "&quot;" : "'" === e ? "&#39;" : "\\" === e ? "&#92;" : "=" === e ? "&#61;" : "\0" === e ? "�;" : e
                    })
                }, m.prototype.format = function(t, m, c) {
                    var d = o(m),
                        l = d || t.lastNameWithHighlight,
                        h = i.templates.MICROFORMAT,
                        p = s(t.firstName, l, d, this.htmlEncode, h.firstName),
                        y = s(t.lastName, l, d, this.htmlEncode, h.lastName),
                        f = s(t.maidenName, l, d, this.htmlEncode, h.maidenName),
                        g = s(t.lastNameWithHighlight, !1, d, this.htmlEncode, h.lastName),
                        v = "",
                        b = "";
                    return e(t.lastName) ? c = i.locales.CJK : n(t.lastName) && (c = c === i.locales.ja_JP ? i.locales.CJK_ja_JP : i.locales.CJK), v = r(a(m), c), b = v(p, g ? g : y, f), b = b.replace(u, "")
                }, m
            }(),
            a = function() {
                function t(e, t) {
                    try {
                        return e.format(t)
                    } catch (n) {
                        return t + ""
                    }
                }

                function n(e, t, n) {
                    var r = e[t];
                    return r || (r = e[t] = new Intl.NumberFormat(t, n)), r
                }
                var r = function() {
                    this.instanceCache = {}
                };
                return r.prototype.format = function(r, i) {
                    var a, o = "",
                        s = e[i],
                        u = {
                            maximumFractionDigits: 3
                        };
                    if (!s) throw new Error("No locale data found for locale " + i);
                    if (!s.intlLocale) throw new Error("IntlLocale is not specified for locale " + i);
                    return s.number && s.number.maximumFractionDigits && (u.maximumFractionDigits = s.number.maximumFractionDigits), a = n(this.instanceCache, s.intlLocale + "-u-nu-latn-ca-gregory", u), o = t(a, r), s.number && s.number.postFormatting && (o = s.number.postFormatting(r, o)), o
                }, r
            }(),
            o = function() {
                var n = function() {};
                return n.prototype.format = function(n, r) {
                    var i, a = e[r],
                        o = a.possessive ? a.possessive : {};
                    if (t.isDefined(o)) {
                        i = o.fallback;
                        for (var s in o.rules)
                            if (new RegExp(s).test(n)) {
                                i = o.rules[s];
                                break
                            }
                    }
                    return t.isDefined(i) ? n + i : n
                }, n
            }(),
            s = function() {
                var n = t.RTL_PATTERN,
                    r = function() {
                        this.instanceCache = {}
                    };
                return r.prototype.format = function(r, i, a, o) {
                    var s, u, m, c, d, l = "",
                        h = e[i],
                        p = t.parseDateString(r, o),
                        y = {
                            hm: {
                                hour: "numeric",
                                minute: "numeric"
                            },
                            hms: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            }
                        },
                        f = t.tryCatch,
                        g = this.instanceCache;
                    if (!h) throw new Error("No locale data found for locale " + i);
                    if (!h.intlLocale) throw new Error("IntlLocale is not specified for locale " + i);
                    return u = h.time && h.time.intlOptions ? h.time.intlOptions[a] : y[a], u || (u = y.hms), u.timeZone = "UTC", d = f(function() {
                        m = h.intlLocale, "zh" !== m && (m += "-u-nu-latn-ca-gregory"), c = m + a, s = g[c], s || (s = g[c] = new Intl.DateTimeFormat(m, u)), l = s.format(p)
                    }, void 0), d === t.errorObject && (l = p.toLocaleTimeString()), l = l.replace(n, ""), h.time && h.time.postFormatting && (l = h.time.postFormatting(a, r, l)), l
                }, r
            }(),
            u = function() {
                var e = "...",
                    t = function(t) {
                        e = "undefined" != typeof t ? t : e
                    };
                return t.prototype.format = function(t, n) {
                    if (!t || "string" != typeof t) return "undefined" == typeof t || "" === t ? "" : null;
                    if ("undefined" == typeof n) return "...";
                    if (!n || "number" != typeof n || n >= t.length || 0 > n || 0 === t.replace(/\s/g, "").length) return t;
                    for (var r = t.substr(0, n), i = r.split(""), a = n - 1, o = "", s = /\s|\?|\!|\.|\,|\;|\:/g; a >= 0 && !s.test(i[a]);) a--;
                    return o = a > 0 ? r.substr(0, a) : r, o += e
                }, t
            }(),
            m = function() {
                function n(e) {
                    return "number" == typeof e && e === e ? e : r(e)
                }

                function r(e) {
                    try {
                        if ("undefined" != typeof e) {
                            if (!isNaN(e)) return parseInt(e + "", 10);
                            var t = e.replace(/[^0-9]/g, ""),
                                n = parseInt(t, 10);
                            return isNaN(n) ? 0 : n
                        }
                    } catch (r) {}
                    return 0
                }

                function i(e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length)
                }
                var a, o = function() {},
                    s = t.isDefined,
                    u = 2;
                return o.CATEGORIES = {
                    SINGULAR: 0,
                    PLURAL: 1,
                    DUAL: 2,
                    FEW: 3,
                    MANY: 4,
                    ZERO: 5
                }, a = {
                    equals: {
                        1: o.CATEGORIES.SINGULAR
                    },
                    endsWith: {
                        0: o.CATEGORIES.PLURAL,
                        1: o.CATEGORIES.PLURAL,
                        2: o.CATEGORIES.PLURAL,
                        3: o.CATEGORIES.PLURAL,
                        4: o.CATEGORIES.PLURAL,
                        5: o.CATEGORIES.PLURAL,
                        6: o.CATEGORIES.PLURAL,
                        7: o.CATEGORIES.PLURAL,
                        8: o.CATEGORIES.PLURAL,
                        9: o.CATEGORIES.PLURAL
                    }
                }, o.COMPARISONS = {
                    eq: function(e, t) {
                        return e === t
                    },
                    gt: function(e, t) {
                        return e > t
                    },
                    gte: function(e, t) {
                        return e >= t
                    },
                    endsWith: function(e, t) {
                        return i(e.toString(), t.toString())
                    }
                }, o.prototype.findRule = function(e, t, n) {
                    var r;
                    if (!s(e)) return r;
                    for (var i = 0, a = e.length; a > i; i++) {
                        r = e[i];
                        for (var o = 0, u = r.values.length; u > o; o++)
                            if (n(t, r.values[o])) return r
                    }
                }, o.prototype.pickCategory = function(e, t, n) {
                    if (s(e) && s(t) && s(n)) {
                        var r = t.toString();
                        if (s(e.equals) && s(e.equals[r])) return e.equals[r];
                        if (s(e.endsWith))
                            for (var i = Math.min(n, r.length), a = i; a > 0; a--) {
                                var o = r.slice(-1 * a);
                                if (s(e.endsWith[o])) return e.endsWith[o]
                            }
                    }
                }, o.prototype.findCategoryMatch = function(e, t, n) {
                    e = Math.floor(e);
                    var r = this.findNumberMatchNoRanges(e, t);
                    if (s(r)) return r;
                    var i, a, m = this.pickCategory(n, e, u);
                    if (s(m)) {
                        for (var c in o.CATEGORIES) o.CATEGORIES[c] === m && (i = c.toLowerCase());
                        for (var d = 0, l = t.length; l > d; d++) {
                            if (t[d].category === i) return t[d];
                            "plural" === t[d].category && (a = t[d])
                        }
                        if (a) return a
                    }
                }, o.prototype.findNumberMatchNoRanges = function(e, t) {
                    for (var n, r, i = [], a = 0, o = t.length; o > a; a++)
                        if (n = t[a], r = {}, s(n.arg) && "gte" === n.comparison) {
                            for (var u in n) r[u] = n[u];
                            r.comparison = "eq", i.push(r)
                        } else i.push(n);
                    return this.findNumberMatch(e, i)
                }, o.prototype.findNumberMatch = function(e, t) {
                    for (var n, r = 0; r < t.length; r++) {
                        var i = t[r],
                            a = m.COMPARISONS[i.comparison];
                        a(e, i.arg) && (!s(n) || i.arg > n.arg) && (n = i)
                    }
                    return n
                }, o.prototype.isValidCategory = function(e) {
                    return "undefined" != typeof o.CATEGORIES[e.toUpperCase()]
                }, o.prototype.format = function(t, r, i) {
                    for (var o, u, m = e[i], c = m.chooser ? m.chooser : a, d = n(t), l = !1, h = 0, p = r.length; p > h; h++)
                        if (s(r[h].category)) {
                            l = !0;
                            break
                        }
                    return o = l ? this.findCategoryMatch(d, r, c) : this.findNumberMatch(d, r), o && (u = o.text, "function" == typeof u) ? u() : u
                }, o
            }(),
            c = function() {
                var e = function(e, t) {
                        this.i18nCacheStatic = e, this.i18nCacheDynamic = t
                    },
                    n = "__i18n__";
                return e.prototype.get = function(e, n, r, i) {
                    t.assert(i, "get called with null callback"), t.assert(e, "get called with null or empty key"), t.assert(n, "get called with null or empty namespace");
                    var a = this.getStaticString(e, n);
                    t.isDefined(a) ? i(null, a) : this.renderDynamicString(e, n, r, i)
                }, e.prototype.getStaticString = function(e, n) {
                    return t.assert(e, "getStaticString called with null or empty key"), t.assert(n, "getStaticString called with null or empty namespace"), this.i18nCacheStatic && this.i18nCacheStatic.cache && this.i18nCacheStatic.cache[n] ? this.i18nCacheStatic.cache[n][e] : void 0
                }, e.prototype.renderDynamicString = function(e, n, r, i) {
                    t.assert(i, "renderDynamicString called with null callback"), t.assert(e, "renderDynamicString called with null or empty key"), t.assert(n, "renderDynamicString called with null or empty namespace");
                    var a = this.dynamicKeyName(e, n);
                    this.i18nCacheDynamic && this.i18nCacheDynamic.cache && this.i18nCacheDynamic.cache[a] ? t8.renderDynamicString(a, this.i18nCacheDynamic.cache[a], r, i) : i("Could not find static i18n key " + e + " in static i18n cache nor dynamic i18n template " + a + " in dynamic i18n cache.")
                }, e.prototype.dynamicKeyName = function(e, r) {
                    return t.assert(e, "dynamicKeyName called with null or empty key"), t.assert(r, "dynamicKeyName called with null or empty namespace"), n + r + "__" + e
                }, e
            }(),
            d = function() {
                function e(e) {
                    if (!t.isDefined(e)) return -1;
                    var n = 0,
                        r = "\0",
                        i = e.length;
                    for (n = 0; i > n && (r = e.charAt(n), !(a.indexOf(r) < 0)); n++);
                    return n >= i ? -1 : r >= o && s >= r ? n : -1
                }
                var n = function() {},
                    r = " \n\r\t\f \u2028\u2029".split(""),
                    i = "~!@#$%^&*()_+`1234567890-={}|[]\\:\";'<>?,./".split(""),
                    a = r.concat(i),
                    o = "֐",
                    s = "ۿ",
                    u = function(e) {
                        var t = {
                                nbsp: " ",
                                lt: "<",
                                gt: ">",
                                amp: "&",
                                quot: '"'
                            },
                            n = /&(?:(lt|gt|amp|quot|nbsp)|#x([\da-f]{1,4})|#(\d{1,5}));/gi;
                        return function(r) {
                            return null === r || r === e ? null : (r + "").replace(n, function(e, n, r, i) {
                                return n ? t[n] : r || i ? String.fromCharCode(parseInt(r || i, r ? 16 : 10) || 65533) : "�"
                            })
                        }
                    }();
                return n.prototype.isRtl = function(t) {
                    return -1 !== e(u(t))
                }, n
            }();
        return {
            Chooser: m,
            CurrencyFormatter: n,
            DateFormatter: r,
            NameFormatter: i,
            NumberFormatter: a,
            Possessive: o,
            Resources: c,
            Rtl: d,
            TimeFormatter: s,
            TruncationFormatter: u,
            __addLocaleData: function(t, n) {
                e[t] = n
            }
        }
    }), ! function() {
        var e = {
            intlLocale: "ar",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return n = n.replace(/\u200F0/g, "‏").replace(",", "،").replace("الإثنين", "الاثنين"), n = "mdy.short" === e ? n.replace(/\u200F/g, "").replace(/^0/, "").replace(/\/0/, "/").replace(/\//g, "‏/") : n.replace(/\u200F|\u200E/g, "").replace(" 0", " "), "time.short" === e ? n = n.replace(/\//g, "‏/") : "my" === r && (n = n.replace("،", "")), "d" !== r && "m" !== r && "y" !== r ? 0 !== n.indexOf("‏") && (n = "‏" + n) : n = n.replace(/^\u200F/, ""), n
        }, e.date.narrowDayNames = ["حد", "اث", "ثل", "أر", "خم", "جم", "سب"];
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return n = n.replace(/^0/, "")
        }, e.currency.postFormatting = function(e, t, n) {
            return n = n.replace(/\s/g, " "), 0 > t && (0 !== n.indexOf("‎") && (n = "‎" + n), n = n.replace(/[\u002D\u2212]/g, "").replace(" ", " -")), "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, e.number.postFormatting = function(e, t) {
            return 0 > e && (t = "-" + t.replace("-", "")), t.replace("‎", "")
        };
        var n = t8.Chooser.CATEGORIES;
        e.chooser = {
            equals: {
                0: n.ZERO,
                1: n.SINGULAR,
                2: n.DUAL,
                3: n.FEW,
                4: n.FEW,
                5: n.FEW,
                6: n.FEW,
                7: n.FEW,
                8: n.FEW,
                9: n.FEW,
                10: n.FEW
            },
            endsWith: {
                "00": n.PLURAL,
                "01": n.PLURAL,
                "02": n.PLURAL,
                "03": n.FEW,
                "04": n.FEW,
                "05": n.FEW,
                "06": n.FEW,
                "07": n.FEW,
                "08": n.FEW,
                "09": n.FEW,
                10: n.FEW,
                0: n.MANY,
                1: n.MANY,
                2: n.MANY,
                3: n.MANY,
                4: n.MANY,
                5: n.MANY,
                6: n.MANY,
                7: n.MANY,
                8: n.MANY,
                9: n.MANY
            }
        }, t8.__addLocaleData("ar_AE", e)
    }(),
    function() {
        var e = {
            intlLocale: "cs",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return ("d.short" === e || "m.medium" === e || "m.short" === e) && (n += ".", n = n.replace("..", ".")), n = n.replace(/\./g, ". ").replace(/\u0020\u0020/g, " ").replace(/(\u0020)+$/g, ""), "md" === r ? (n = n.replace(/\./g, "").split(" "), n = n[0].replace(/^0/, "") + ". " + n[1], "md.long" !== e && (n += ".")) : ("my.medium" === e || "my.short" === e) && (n = n.replace(" ", "/")), n
        }, e.date.narrowDayNames = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "numeric"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "numeric",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "numeric"
        }, t["m.short"] = t["m.medium"], t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.currency.postFormatting = function(e, t, n) {
            return "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, e.number = {
            maximumFractionDigits: 2
        };
        var n = t8.Chooser.CATEGORIES;
        e.chooser = {
            equals: {
                0: n.PLURAL,
                1: n.SINGULAR,
                2: n.DUAL,
                3: n.DUAL,
                4: n.DUAL
            },
            endsWith: {
                0: n.PLURAL,
                1: n.PLURAL,
                2: n.PLURAL,
                3: n.PLURAL,
                4: n.PLURAL,
                5: n.PLURAL,
                6: n.PLURAL,
                7: n.PLURAL,
                8: n.PLURAL,
                9: n.PLURAL
            }
        }, t8.__addLocaleData("cs_CZ", e)
    }(),
    function() {
        var e = {
            intlLocale: "da",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return "my.medium" === e || "my.short" === e || "mdy.medium" === e ? n = n.replace(/\./g, "").replace(/\s/g, ". ") : /^(m|md)\.medium|^(d|md)\.short/.test(e) && !/\.$/.test(n) ? n += "." : "d.medium" === e && (n = n.replace(/s\u00F8$/, "søn.").replace(/ma$/, "man.").replace(/ti$/, "tir.").replace(/on$/, "ons.").replace(/to$/, "tor.").replace(/fr$/, "fre.").replace(/l\u00F8$/, "lør."), /\.$/.test(n) || (n += ".")), n = n.replace("maj.", "maj").replace(/-/g, "/").replace(":", ".").replace(/^0/, "").replace(/\/0/, "/")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d\./.test(n) && (n = "0" + n), n.replace(/:/g, ".")
        }, e.currency.postFormatting = function(e, t, n) {
            return "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, e.possessive = {
            fallback: "s",
            rules: {
                ".*[SsXxZz]$": "’",
                ".*[A-RT-WYÅÆØ]$": "S",
                ".*[a-rt-wyåæø]$": "s"
            }
        }, t8.__addLocaleData("da_DK", e)
    }(),
    function() {
        var e = {
            intlLocale: "de",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return "md" !== r || /\.\s/.test(n) ? ("mdy.medium" === e || "my.medium" === e || "my.short" === e) && (n = n.replace(/\./g, "").replace(/\s/g, ". ")) : n = n.replace(/\s/g, ". "), /^(d|m|md)\.medium|^md\.short/.test(e) && !/\.$/.test(n) && (n += "."), n = n.replace(/^0/, "").replace(/\.0/g, ".").replace(/Mrz\.|M\u00E4r(z)?\./g, "März").replace(/Mai\./, "Mai").replace(/Jun(i)?\./, "Juni").replace(/Jul(i)?\./, "Juli").replace(",", "")
        }, e.date.narrowDayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, e.possessive = {
            fallback: "s",
            rules: {
                ".*[SsXxZzß]$": "’",
                ".*[A-RT-WYÄÖÜ]$": "S",
                ".*[a-rt-wyäöü]$": "s"
            }
        }, t8.__addLocaleData("de_DE", e)
    }(),
    function() {
        var e = {
            intlLocale: "en",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return n = n.replace(/\s0/, " "), "my" === r ? n = n.replace(/,/g, "") : "time" === r && (n = n.split(" "), 5 !== n.length || /,$/.test(n[2]) ? 3 !== n.length || /,$/.test(n[0]) || (n[0] = n[0] + ",") : n[2] = n[2] + ",", n = n.join(" ")), n
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.currency.getCurrencyDisplay = function(e) {
            return /^(DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e) ? "code" : "symbol"
        }, e.currency.postFormatting = function(e, t, n) {
            var r = /^(\(|-)?\$/,
                i = {
                    AUD: "A$",
                    CAD: "CA$",
                    HKD: "HK$",
                    NZD: "NZ$"
                };
            return "undefined" != typeof i[e] ? n = n.replace(r, i[e]) : "INR" === e && (n = n.replace(/Rs\./, "₹")), 0 > t && n.indexOf(")") >= 0 && (n = "-" + n.replace(/[\(\)]/g, "")), n.replace(/\s/, "")
        }, e.possessive = {
            fallback: "’s",
            rules: {
                ".*[Ss]$": "’",
                ".*[A-RT-Z]$": "’S",
                ".*[a-rt-z]$": "’s"
            }
        }, t8.__addLocaleData("en_US", e)
    }(),
    function() {
        var e = {
            intlLocale: "es",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return /^(d|m|my)$/.test(r) ? n = n.toLocaleLowerCase() : "md" !== r || /\sde\s/.test(n) ? "mdy.medium" !== e || /\sde\s/.test(n) || (n = n.split(" "), n.splice(1, 0, "de"), n.splice(3, 0, "de"), n = n.join(" ")) : n = n.replace(/\s/, " de "), "my.medium" !== e && "my.short" !== e || /\.\sde/.test(n) || (n = n.replace(/\.\s/, ". de ")), /((d|m|md)\.medium)|md\.short/.test(e) && !/\.$/.test(n) && (n += "."), "y.short" !== e && (n = n.replace(/^0/, "").replace(/\/0/g, "/")), n.replace("sep.", "sept.")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.currency.getCurrencyDisplay = function(e) {
            return "EUR" === e ? "symbol" : "code"
        }, e.currency.postFormatting = function(e, t, n) {
            return n.replace(/\s/g, ".").replace(/\.(?=[^\.]*$)/, " ")
        }, e.number.postFormatting = function(e, t) {
            return t.replace(/\s/g, ".")
        }, t8.__addLocaleData("es_ES", e)
    }(),
    function() {
        var e = {
            intlLocale: "fr",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return ("m" === r || "my" === r) && (n = n.toLocaleLowerCase()), n = n.replace(/^0/, "").replace(/\/0/, "/")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        };
        var n = t8.Chooser.CATEGORIES;
        e.chooser = {
            equals: {
                0: n.SINGULAR,
                1: n.SINGULAR
            },
            endsWith: {
                0: n.PLURAL,
                1: n.PLURAL,
                2: n.PLURAL,
                3: n.PLURAL,
                4: n.PLURAL,
                5: n.PLURAL,
                6: n.PLURAL,
                7: n.PLURAL,
                8: n.PLURAL,
                9: n.PLURAL
            }
        }, t8.__addLocaleData("fr_FR", e)
    }(),
    function() {
        var e = {
            intlLocale: "id",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return "time" === r ? n = n.replace(/\./g, ":") : "d.medium" === e && (n = n.replace("Minggu", "Min").replace("Rabu", "Rab").replace("Kamis", "Kam").replace("Jumat", "Jum").replace("Sabtu", "Sab")), /((m|my|md|mdy)\.medium)|((md|my)\.short)/.test(e) && (n = n.replace("Agust", "Agt")), "time.short" !== e && "mdy.short" !== e && (n = n.replace(/^0/, "")), n.replace("Nop", "Nov")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return n = n.replace(/:/g, "."), /^\d\./.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 > t && n.indexOf(")") >= 0 && (n = "-" + n.replace(/[()]/g, "")), "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n.replace(/\s/, "")
        }, t8.__addLocaleData("in_ID", e)
    }(),
    function() {
        var e = {
            intlLocale: "it",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return "time" === r ? n = n.replace(/,/g, "") : /^(d|m|my)$/.test(r) ? n = n.toLocaleLowerCase() : "mdy.medium" === e && (n = n.replace(/\//g, " ")), /mdy\.medium|md\.(long|medium|short)/.test(e) && (n = n.replace(/^0/, "")), n
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, t8.__addLocaleData("it_IT", e)
    }(),
    function() {
        var e = {
            intlLocale: "ja",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return /^m\.(short|medium)/.test(e) && !/\u6708/.test(n) ? n += "月" : /^(mdy|time)\.short/.test(e) && (n = n.replace(/(\u5E74|\u6708)/g, "/").replace(/\u65E5/, "")), n.replace("月月", "月")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "narrow"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.currency.getCurrencyDisplay = function(e) {
            return /^(INR|DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e) ? "code" : "symbol"
        }, e.currency.postFormatting = function(e, t, n) {
            var r = /^(-)?\$/,
                i = {
                    AUD: "AU$",
                    CAD: "CA$",
                    HKD: "HK$",
                    NZD: "NZ$"
                };
            return "undefined" != typeof i[e] && r.test(n) && (n = n.replace(r, i[e])), 0 > t && !/^-/.test(n) && (n = "-" + n.replace(/(-|(|))/g, "")), n.replace(/\s/g, "").replace(/\u00A5/g, "￥")
        }, t8.__addLocaleData("ja_JP", e)
    }(),
    function() {
        var e = {
            intlLocale: "ko",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return /^m\.(short|medium)/.test(e) && !/\uC6D4/.test(n) ? n += "월" : /^(mdy|time)\.short/.test(e) && (n = n.replace(/(\uB144|\uC6D4|\uC77C)/g, ".")), n.replace("월월", "월")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.currency.getCurrencyDisplay = function(e) {
            return /^(DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e) ? "code" : "symbol"
        }, e.currency.postFormatting = function(e, t, n) {
            var r = /^(\(|-)?\$/,
                i = {
                    AUD: "AU$",
                    CAD: "CA$",
                    HKD: "HK$",
                    NZD: "NZ$",
                    USD: "US$"
                };
            return "undefined" != typeof i[e] ? n = n.replace(r, i[e]) : "INR" === e && (n = n.replace(/Rs\./, "₹")), "JPY" !== e || /JP\u00A5/.test(n) || (n = n.replace(/\u00A5/g, "JP¥")), 0 > t && !/^-/.test(n) && (n = "-" + n.replace(/[-\(\)]/g, "")), n.replace(/\s/, "")
        }, t8.__addLocaleData("ko_KR", e)
    }(),
    function() {
        var e = {
            intlLocale: "ms",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return n.indexOf("Ogos") < 0 && (n = n.replace(/Ogo/, "Ogos")), "d.medium" === e ? n = n.replace(/Ahad/, "Ahd").replace("Isnin", "Isn").replace("Rabu", "Rab").replace("Khamis", "Kha").replace("Jumaat", "Jum").replace("Sabtu", "Sab") : /^(m|md|my|mdy)\.(medium|short)/.test(e) ? n = n.replace("Sept", "Sep") : /^time\./.test(e) && (/\s\.$/.test(n) ? n = n.replace(/\.$/, "PTG") : /\s$/.test(n) && (n += "PG")), n.replace(/^0/, "").replace(/\/0/, "/")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.intlOptions = {
            hm: {
                hour: "numeric",
                minute: "numeric",
                hour12: !0
            },
            hms: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            }
        }, e.time.postFormatting = function(e, t, n) {
            return /\s\.$/.test(n) ? n = n.replace(/\.$/, "PTG") : /\s$/.test(n) && (n += "PG"), n = n.replace("PTG", "PM").replace("PG", "AM")
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 > t && !/^-/.test(n) && (n = "-" + n.replace(/[-\(\)]/g, "")), "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n.replace(/\s/, "")
        }, t8.__addLocaleData("ms_MY", e)
    }(),
    function() {
        var e = {
            intlLocale: "nl",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return /^(m|d|my)$/.test(r) && (n = n.toLocaleLowerCase()), "m.medium" === e ? n = n.replace(".", "") : /^md\.(medium|short)/.test(e) && !/\.$/.test(n) ? n += "." : /^my\.(medium|short)/.test(e) && !/\./.test(n) ? n = n.replace(/\s/, ". ") : "mdy.medium" !== e || /[1-9]\s[a-z]+/.test(n) || (n = n.replace(/\./g, ". ").replace(/\./, "")), n.replace(/^0/, "").replace(/mei\./, "mei")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 !== n.indexOf(e) && (n = e + " " + n.replace(e, "").replace(/\s$/, "")), 0 > t && (n = n.replace(/[\u002D\u2212]/g, "").replace(" ", " -")), "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, t8.__addLocaleData("nl_NL", e)
    }(),
    function() {
        var e = {
            intlLocale: "nb",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return n = n.replace(/^s\u00F8(\.)?$/, "søn").replace(/^ma(\.)?$/, "man").replace(/^ti(\.)?$/, "tir").replace(/^on(\.)?$/, "ons").replace(/^to(\.)?$/, "tor").replace(/^fr(\.)?$/, "fre").replace(/^l\u00F8(\.)?$/, "lør").replace(/:/, "."), /^(d|md|m)\.short|^(d|md)\.medium/.test(e) && !/\.$/.test(n) ? n += "." : "mdy.medium" !== e || /\s/.test(n) ? /my\.(medium|short)/.test(e) && !/\.\s/.test(n) ? n = n.replace(/\s/, ". ") : /^time\./.test(e) && !/,/.test(n) && (n = n.split(" "), n.length >= 2 && (n[n.length - 2] += ","), n = n.join(" ")) : n = n.replace(/\./g, ". "), "y.short" !== e && (n = n.replace(/^0/, ""), /\.0[1-9]\./.test(n) && (n = n.replace(/\.0/, "."))), n.replace("mai.", "mai")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.time.postFormatting = function(e, t, n) {
            return n = n.replace(/:/g, "."), /^\d\./.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 > t && !/^\u2212/.test(n) && (n = "−" + n.replace(/\u002D|-|\(|\)/g, "")), n
        }, e.number.postFormatting = function(e, t) {
            return 0 > e && (t = t.replace("−", "-")), t
        }, e.possessive = {
            fallback: "s",
            rules: {
                ".*[SsXxZz]$": "’",
                ".*[A-RT-WY]$": "S",
                ".*[a-rt-wy]$": "s"
            }
        }, t8.__addLocaleData("no_NO", e)
    }(),
    function() {
        var e = {
            intlLocale: "pl",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            if ("d.medium" === e ? n = n.replace(/^P(n|t)$/, "P").replace(/^Wt$/, "W").replace(/^\u015Ar$/, "Ś").replace(/^Cz$/, "C").replace(/^So$/, "S") : "mdy.short" === e && /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/.test(n) ? (n = n.split("-"), n = n[2] + "." + n[1] + "." + n[0]) : /^time\./.test(e) && !/,/.test(n) && (n = n.split(" "), n.length >= 2 && (n[n.length - 2] += ","), n = n.join(" ")), "time.short" === e && /[0-9]{2}\-[0-9]{2}\-[0-9]{2},\s[0-9:]+$/.test(n)) {
                var r = n.split(",");
                n = r[0].split("-"), n = n[2] + "." + n[1] + "." + n[0] + "," + r[1]
            }
            return n.replace(/^0/, "")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "narrow"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        };
        var n = t8.Chooser.CATEGORIES;
        e.chooser = {
            equals: {
                0: n.PLURAL,
                1: n.SINGULAR,
                12: n.PLURAL,
                13: n.PLURAL,
                14: n.PLURAL
            },
            endsWith: {
                0: n.PLURAL,
                1: n.PLURAL,
                2: n.DUAL,
                3: n.DUAL,
                4: n.DUAL,
                5: n.PLURAL,
                6: n.PLURAL,
                7: n.PLURAL,
                8: n.PLURAL,
                9: n.PLURAL
            }
        }, t8.__addLocaleData("pl_PL", e)
    }(),
    function() {
        var e = {
            intlLocale: "pt",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return /^(mdy|m)\.medium|^md\./.test(e) && (n = n.replace(/^0/, "").replace(/\./g, " de ")), n
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 > t && !/^-/.test(n) && (n = "-" + n.replace(/-/, "")), "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n.replace(/\s/, "")
        }, t8.__addLocaleData("pt_BR", e)
    }(),
    function() {
        var e = {
            intlLocale: "ro",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            return /(^(m|my|(d(\.long)?$)))/.test(e) ? n = n.toLocaleLowerCase() : "d.medium" === e ? n = n.replace(/^D$/, "Dum").replace(/^L$/, "Lun").replace(/^Ma$/, "Mar").replace(/^Mi$/, "Mie").replace(/^J$/, "Joi").replace(/^V$/, "Vin").replace(/^S$/, "Sâm") : "time" !== r || /,/.test(n) || (n = n.split(" "), 4 === n.length ? n[2] = n[2] + "," : 2 === n.length && (n[0] = n[0] + ","), n = n.join(" ")), n.replace(/mar\u0163i/, "marți").replace(/sep\./, "sept.").replace(/mai\./, "mai")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        };
        var n = t8.Chooser.CATEGORIES;
        e.chooser = {
            equals: {
                0: n.DUAL,
                1: n.SINGULAR,
                2: n.DUAL,
                3: n.DUAL,
                4: n.DUAL,
                5: n.DUAL,
                6: n.DUAL,
                7: n.DUAL,
                8: n.DUAL,
                9: n.DUAL,
                10: n.DUAL,
                11: n.DUAL,
                12: n.DUAL,
                13: n.DUAL,
                14: n.DUAL,
                15: n.DUAL,
                16: n.DUAL,
                17: n.DUAL,
                18: n.DUAL,
                19: n.DUAL
            },
            endsWith: {
                0: n.PLURAL,
                1: n.PLURAL,
                2: n.PLURAL,
                3: n.PLURAL,
                4: n.PLURAL,
                5: n.PLURAL,
                6: n.PLURAL,
                7: n.PLURAL,
                8: n.PLURAL,
                9: n.PLURAL
            }
        }, t8.__addLocaleData("ro_RO", e)
    }(),
    function() {
        var e = {
            intlLocale: "ru",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r, i = e.split(".")[0],
                a = {
                    "янв": "янв.",
                    "фев": "февр.",
                    "мар": "март",
                    "апр": "апр.",
                    "июн": "июнь",
                    "июл": "июль",
                    "авг": "авг.",
                    "сен": "сент.",
                    "окт": "окт.",
                    "ноя": "нояб.",
                    "дек": "дек."
                },
                o = {
                    "март": "марта",
                    "май": "мая",
                    "июнь": "июня",
                    "июль": "июля"
                };
            "m" === i || "d" === i || "my" === i ? n = n.toLocaleLowerCase() : "y" === i ? n = n.replace(/\s\u0433\.$/, "") : "md" !== i || /^[0-9]+/.test(n) ? "time.short" !== e || /,/.test(n) ? /time\.(long|medium)/.test(e) && !/,/.test(n) && (n = n.replace("г.", "г.,")) : n = n.replace(" ", ", ") : (n = n.split(" "), n = 2 === n.length ? n[1].replace(/^0/, "") + " " + n[0] : n.join(" "));
            for (r in a)
                if (new RegExp(r + "( |$)").test(n)) {
                    n = n.replace(new RegExp(r), a[r]);
                    break
                }
            if (/^(md|mdy)\./.test(e))
                for (r in o)
                    if (new RegExp(r + "( |$)").test(n)) {
                        n = n.replace(new RegExp(r), o[r]);
                        break
                    }
            return n
        }, e.date.narrowDayNames = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.currency.postFormatting = function(e, t, n) {
            return "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        };
        var n = t8.Chooser.CATEGORIES;
        e.chooser = {
            endsWith: {
                0: n.PLURAL,
                1: n.SINGULAR,
                2: n.DUAL,
                3: n.DUAL,
                4: n.DUAL,
                5: n.PLURAL,
                6: n.PLURAL,
                7: n.PLURAL,
                8: n.PLURAL,
                9: n.PLURAL,
                11: n.PLURAL,
                12: n.PLURAL,
                13: n.PLURAL,
                14: n.PLURAL
            }
        }, t8.__addLocaleData("ru_RU", e)
    }(),
    function() {
        var e = {
            intlLocale: "sv",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0],
                i = e.split(".")[1];
            if (/^(d|m|my|md|mdy)/.test(e) && (n = n.replace(".", "").toLocaleLowerCase()), "d.medium" === e) {
                var a = {
                    "sö": "sön",
                    "må": "mån",
                    ti: "tis",
                    on: "ons",
                    to: "tors",
                    tor: "tors",
                    fr: "fre",
                    "lö": "lör"
                };
                for (var o in a)
                    if (n === o) {
                        n = a[o];
                        break
                    }
            }
            return "short" !== i && "medium" !== i || "time" === r || (n = n.replace("juni", "jun").replace("juli", "jul").replace("mars", "mar")), n = n.replace("den ", ""), "md.long" === e && n.indexOf(":e") >= 0 && (n = n.replace(":e", "")), n
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 > t && (n = n.replace("-", "−")), n = n.replace(":", ","), n.replace(/\./g, " ")
        }, e.number.postFormatting = function(e, t) {
            return 0 > e && (t = t.replace("−", "-")), t
        }, e.possessive = {
            fallback: "s",
            rules: {
                ".*[SsXxZz]$": "",
                ".*[A-RT-WYÅÄÖ]$": "S",
                ".*[a-rt-wyåäö]$": "s"
            }
        }, t8.__addLocaleData("sv_SE", e)
    }(),
    function() {
        var e = {
            intlLocale: "th",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            if ("y" === r) n = n.split(" "), n = n.length > 1 ? n[1] : n[0];
            else if ("d" === r) {
                var i = {
                    "อาทิตย์": "วันอาทิตย์",
                    "จันทร์": "วันจันทร์",
                    "อังคาร": "วันอังคาร",
                    "พุธ": "วันพุธ",
                    "พฤหัสบดี": "วันพฤหัสบดี",
                    "ศุกร์": "วันศุกร์",
                    "เสาร์": "วันเสาร์"
                };
                for (var a in i)
                    if (n === a) {
                        n = i[a];
                        break
                    }
            }
            return n.replace(/^0/, "")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.getCurrencyDisplay = function(e) {
            return /^(DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e) ? "code" : "symbol"
        }, e.currency.postFormatting = function(e, t, n) {
            var r = /^(\(|-)?\$/,
                i = {
                    AUD: "AU$",
                    CAD: "CA$",
                    HKD: "HK$",
                    NZD: "NZ$",
                    USD: "US$"
                };
            return "undefined" != typeof i[e] ? n = n.replace(r, i[e]) : "INR" === e && (n = n.replace(/Rs\./, "₹")), 0 > t && 0 !== n.indexOf("-") && (n = "-" + n.replace(/[\u002D\(\)]/g, "")), n.replace(/\s/, "")
        }, t8.__addLocaleData("th_TH", e)
    }(),
    function() {
        var e = {
            intlLocale: "fil",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = e.split(".")[0];
            if ("d" === r) {
                var i = {
                    Mierkoles: "Miyerkules",
                    Huebes: "Huwebes",
                    Biernes: "Biyernes",
                    Mier: "Miy",
                    Hueb: "Huw",
                    Bier: "Biy",
                    Saba: "Sab"
                };
                for (var a in i)
                    if (n === a) {
                        n = i[a];
                        break
                    }
            } else "my" === r ? n = n.replace(/,/, "") : "time" === r && (n = n.split(" "), 5 !== n.length || /,$/.test(n[2]) ? 3 !== n.length || /,$/.test(n[0]) || (n[0] = n[0] + ",") : n[2] = n[2] + ",", n = n.join(" "));
            if (/^(m|md|my|mdy)\.(medium|short)/.test(e)) {
                var o = {
                    Mayo: "May",
                    Agos: "Ago",
                    En: "Ene",
                    Sept: "Set"
                };
                for (var s in o)
                    if (new RegExp(s + "( |$)").test(n)) {
                        n = n.replace(s, o[s]);
                        break
                    }
            }
            return "y" !== r && (n = n.replace(/^0/, "").replace(/\s0/, " ")), n.replace("Septyembre", "Setyembre")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.currency.postFormatting = function(e, t, n) {
            return 0 > t && 0 !== n.indexOf("-") && (n = "-" + n.replace(/[\u002D\(\)]/g, "")), "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n.replace(/\s/, "")
        }, t8.__addLocaleData("tl_PH", e)
    }(),
    function() {
        var e = {
            intlLocale: "tr",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            return n = n.replace("  ", " "), /^(mdy|time)\.long|(time|md)\.medium|md\.short/.test(e) && (n = n.replace(/^0/, "")), "time.short" === e && n.indexOf(".") < 0 && (n = n.split(" "), n = n[0] + "." + n[1] + "." + n[2] + " " + n[3]), n
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "numeric"
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "numeric"
        }, t.mdy = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "long"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "long",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = {
            month: "long"
        }, t["m.long"] = t.m, t["m.medium"] = {
            month: "short"
        }, t["m.short"] = {
            month: "numeric"
        }, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "2-digit"
        }, e.time.postFormatting = function(e, t, n) {
            return /^\d:/.test(n) && (n = "0" + n), n
        }, e.currency.postFormatting = function(e, t, n) {
            return "CNY" === e && (n = n.replace(/CNY|\uFFE5/, "CN¥")), n
        }, t8.__addLocaleData("tr_TR", e)
    }(),
    function() {
        var e = {
            intlLocale: "zh",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = ["月", "日", "年"],
                i = e.split(".")[0],
                a = e.split(".")[1],
                o = /(^\s+|\s+$)/g;
            if ("d" !== i || "short" === a)
                for (var s = 0; s < r.length; s++) n = n.replace(r[s], " " + r[s] + " ");
            return "m" === i ? n = n.split("月")[0] + "月" : ("time.short" === e || "mdy.short" === e) && (n = n.replace(/\s(\u6708|\u5E74)\s/g, "/").replace(/\s\u65E5\s/g, "")), n.replace("  ", " ").replace("月 月", "月 ").replace(o, "").replace(/\u5348\s/, "午")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "narrow",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }, t.mdy = {
            year: "numeric",
            month: "narrow",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "narrow"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "narrow",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = t["md.short"], t["m.long"] = t.m, t["m.medium"] = t.m, t["m.short"] = t.m, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "short"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.intlOptions = {
            hm: {
                hour: "numeric",
                minute: "numeric",
                hour12: !0
            },
            hms: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            }
        }, e.time.postFormatting = function(e, t, n) {
            return n.indexOf("午 ") < 0 && (n = n.replace("午", "午 ")), n.indexOf("12:") >= 0 && (n = n.replace("上午", "午夜").replace("下午", "中午")), n
        }, e.currency.getCurrencyDisplay = function(e) {
            return /^(DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e) ? "code" : "symbol"
        }, e.currency.postFormatting = function(e, t, n) {
            var r = /[0-9]/,
                i = /^(\(|-)?\$/,
                a = {
                    AUD: "AU$",
                    CAD: "CA$",
                    HKD: "HK$",
                    NZD: "NZ$",
                    USD: "US$"
                };
            "undefined" != typeof a[e] ? n = n.replace(i, a[e] + " ") : "JPY" !== e || /JP\u00A5/.test(n) ? "EUR" !== e || /\u20AC\u00A0/.test(n) ? "INR" === e ? (n = n.replace(/Rs\./, "₹"), /\u20B9\u00A0/.test(n) || (n = n.replace(/\u20B9/, "₹ "))) : "GBP" !== e || /\u00A3\u00A0/.test(n) ? /\$\u00A0/.test(n) || (n = n.replace(/\$/, "$ ")) : n = n.replace(/\u00A3/, "£ ") : n = n.replace(/\u20AC/, "€ ") : n = n.replace(/\u00A5/, "JP¥ ");
            var o = n.search(r);
            return o > 0 && (/\s/.test(n.charAt(o - 1)) || (n = n.slice(0, o) + " " + n.slice(o))), 0 > t && n.indexOf(")") >= 0 && (n = "-" + n.replace(/[\(\)]/g, "")), n
        }, t8.__addLocaleData("zh_CN", e)
    }(),
    function() {
        var e = {
            intlLocale: "zh",
            date: {
                intlOptions: {}
            },
            time: {},
            currency: {},
            number: {}
        };
        e.date.postFormatting = function(e, t, n) {
            var r = ["月", "日", "年"],
                i = e.split(".")[0],
                a = e.split(".")[1],
                o = /(^\s+|\s+$)/g;
            if ("d" !== i || "short" === a)
                for (var s = 0; s < r.length; s++) n = n.replace(r[s], " " + r[s] + " ");
            return "d.medium" === e && -1 === n.indexOf("周") && (n = "周" + n), "m" === i ? n = n.split("月")[0] + "月" : ("time.short" === e || "mdy.short" === e) && (n = n.replace(/\s(\u6708|\u5E74)\s/g, "/").replace(/\s\u65E5\s/g, "")), n.replace("  ", " ").replace("月 月", "月 ").replace(o, "").replace(/\u5348\s/, "午")
        };
        var t = e.date.intlOptions;
        t.time = {
            year: "numeric",
            month: "narrow",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }, t["time.long"] = t.time, t["time.medium"] = t.time, t["time.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }, t.mdy = {
            year: "numeric",
            month: "narrow",
            day: "numeric"
        }, t["mdy.long"] = t.mdy, t["mdy.medium"] = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }, t["mdy.short"] = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }, t.my = {
            year: "numeric",
            month: "narrow"
        }, t["my.long"] = t.my, t["my.medium"] = {
            year: "numeric",
            month: "short"
        }, t["my.short"] = t["my.medium"], t.md = {
            month: "narrow",
            day: "numeric"
        }, t["md.long"] = t.md, t["md.medium"] = {
            month: "short",
            day: "numeric"
        }, t["md.short"] = t["md.medium"], t.m = t["md.short"], t["m.long"] = t.m, t["m.medium"] = t.m, t["m.short"] = t.m, t.d = {
            weekday: "long"
        }, t["d.long"] = t.d, t["d.medium"] = {
            weekday: "narrow"
        }, t["d.short"] = {
            day: "numeric"
        }, t["d.narrow"] = {
            weekday: "narrow"
        }, t.y = {
            year: "numeric"
        }, t["y.long"] = t.y, t["y.medium"] = t.y, t["y.short"] = {
            year: "numeric"
        }, e.time.intlOptions = {
            hm: {
                hour: "numeric",
                minute: "numeric",
                hour12: !0
            },
            hms: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            }
        }, e.time.postFormatting = function(e, t, n) {
            return n.indexOf("午 ") < 0 && (n = n.replace("午", "午 ")), n.indexOf("12:") >= 0 && (n = n.replace("上午", "午夜").replace("下午", "中午")), n
        }, e.currency.getCurrencyDisplay = function(e) {
            return /^(DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e) ? "code" : "symbol"
        }, e.currency.postFormatting = function(e, t, n) {
            var r = /[0-9]/,
                i = /^(\(|-)?\$/,
                a = {
                    AUD: "AU$",
                    CAD: "CA$",
                    HKD: "HK$",
                    NZD: "NZ$",
                    USD: "US$"
                };
            "undefined" != typeof a[e] ? n = n.replace(i, a[e] + " ") : "CNY" === e ? n = n.replace(/CNY|\uFFE5/, "CN¥") : "JPY" !== e || /JP\u00A5/.test(n) ? "EUR" !== e || /\u20AC\u00A0/.test(n) ? "INR" === e ? (n = n.replace(/Rs\./, "₹"), /\u20B9\u00A0/.test(n) || (n = n.replace(/\u20B9/, "₹ "))) : "GBP" !== e || /\u00A3\u00A0/.test(n) ? /\$\u00A0/.test(n) || (n = n.replace(/\$/, "$ ")) : n = n.replace(/\u00A3/, "£ ") : n = n.replace(/\u20AC/, "€ ") : n = n.replace(/\u00A5/, "JP¥ ");
            var o = n.search(r);
            return o > 0 && (/\s/.test(n.charAt(o - 1)) || (n = n.slice(0, o) + " " + n.slice(o))), 0 > t && n.indexOf(")") >= 0 && (n = "-" + n.replace(/[\(\)]/g, "")), n
        }, t8.__addLocaleData("zh_TW", e)
    }(), ! function() {
        function e(e, t) {
            "use strict";

            function n(e) {
                var t = this;
                this._input = e, this._index = 0, this._last = null, this.next = function() {
                    return n.prototype.next.call(t)
                }, this.consume = function() {
                    return n.prototype.consume.call(t)
                }
            }

            function r(e) {
                throw new Error(e)
            }

            function i(e) {
                for (var t = [], n = [], i = !1, a = [], o = new je(e), s = o.next, u = o.consume; s();)
                    if (s() !== ze || o.isEscaped())
                        if (o.isEscaped()) a.push(s()), u();
                        else {
                            if (0 === n.length && s() === He) {
                                if (u(), s() === He) {
                                    a.push(He), u();
                                    continue
                                }
                                i = !i, a.length > 0 && (t.push(a.join(qe)), a.length = 0)
                            }
                            i ? (s() && a.push(s()), u()) : s() !== $e || o.isEscaped() || 0 !== n.length ? s() === Me ? (0 === n.length ? a.length > 0 && (t.push(a.join(qe)), a.length = 0) : a.push(s()), n.push(s()), u()) : s() === $e ? (n.pop(), 0 === n.length ? a.length > 0 ? (t.push({
                                text: a.join(qe)
                            }), a.length = 0) : r("Unexpected end of placeholder (found no content)") : a.push(s()), u()) : (s() && a.push(s()), u()) : r('Unexpected "}"')
                        }
                else u();
                return 0 !== n.length && r('Unexpected end of placeholder (unmatched "{")'), a.length > 0 && (t.push(a.join(qe)), a.length = 0), t
            }

            function a(e, t) {
                var n = [],
                    i = [];
                if (e() === Ue) n.push(e()), t(), e() && e() !== Re && e() !== Oe && r('Could not parse index; expected ":" or end of identifier but found "' + e() + '"');
                else if (e() && Ke.test(e()))
                    for (; e() && Xe.test(e());) n.push(e()), t();
                if (e() === Oe)
                    for (t(), e() && Je.test(e()) ? (i.push(e()), t()) : r('Expected letter (a-zA-Z) or number (0-9) but found "' + e() + '"'); e() && Ve.test(e());) i.push(e()), t();
                else 0 === n.length && e() && r('Unexpected character; expected ":" but found "' + e() + '"');
                return e() !== Re && e() ? r('Unexpected character; expected "," or end of identifier but found "' + e() + '"') : (n = parseInt(n.join(qe), 10), isNaN(n) && (n = Be), i = i.join(qe)), {
                    number: n,
                    keyword: i
                }
            }

            function o(e, t) {
                var n = [];
                if (e())
                    for (; e() && We.test(e());) n.push(e()), t();
                else r('Unable to parse type. Expected letter (a-zA-Z) but found end of identifier after ","');
                return n.join(qe)
            }

            function s(e, t, n) {
                for (var i = Qe[n] || Ge, a = [], o = "", s = null, u = void 0; e();) i.test(e()) && (0 === a.length ? r('Error parsing style key/value. Found delimiter "' + e() + '" but expected key.') : null === s && (s = a.join(qe), a.length = 0, o = e(), t())), a.push(e()), t();
                return "" === o ? (s = a.join(qe), a.length = 0) : (u = a.join(qe), a.length = 0), {
                    key: s,
                    value: u,
                    delimiter: o
                }
            }

            function u(e, t, n, i) {
                var a = [],
                    o = {},
                    u = [],
                    m = [];
                for (i = i || 0; e();) e() === Me ? a.push(e()) : e() === $e && a.pop(), 0 === a.length && e() === Ie ? (0 === m.length && r('Unexpected "' + Ie + '" in style list.'), u.push(m.join(qe)), m.length = 0, t()) : (m.push(e()), t());
                return m.length > 0 && (u.push(m.join(qe)), m.length = 0), u.map(function(e) {
                    var t = new je(e);
                    return s(t.next, t.consume, n)
                }).forEach(function(e, t) {
                    e.order = t + i, o.hasOwnProperty(e.key) ? r('Found duplicate style key "' + e.key + '". Styles must have unique names.') : o[e.key] = e
                }), o
            }

            function m(e, t) {
                for (var n = [], r = void 0, i = {}; e();) n.push(e()), t();
                return r = n.join(qe), i[r] = {
                    key: r,
                    value: null,
                    delimiter: null,
                    order: 0
                }, i
            }

            function c(e, t, n) {
                return Ze[n] ? Ze[n](e, t, n) : u(e, t, n)
            }

            function d(e, t, n) {
                var r = "";
                if ("list" === n) {
                    for (var i = []; e() && e() !== Re;) i.push(e()), t();
                    r = i.join(qe)
                }
                return r
            }

            function l(e, t) {
                var n = null,
                    i = null,
                    s = "",
                    u = {};
                return e() ? (n = a(e, t), e() === Re ? (t(), i = o(e, t), e() === Re && (t(), s = d(e, t, i), e() === Re && t(), e() && (u = c(e, t, i)))) : i = "simple") : r("Error parsing placeholder. Unexpected end of input."), e() && r('Unexpected character "' + e() + '".'), {
                    index: n,
                    type: i,
                    subtype: s,
                    parameters: u
                }
            }

            function h(e) {
                var t = new je(e);
                return l(t.next, t.consume)
            }

            function p(e) {
                return i(e).map(function(e) {
                    return "string" == typeof e ? e : h(e.text)
                }).map(function(e) {
                    return "string" == typeof e ? e : ("object" == typeof e.parameters && Object.keys(e.parameters).forEach(function(t) {
                        var n = e.parameters[t];
                        n.value && (n.value = p(n.value))
                    }), e)
                })
            }

            function y(e) {
                this.value = e instanceof y ? f(e) : e
            }

            function f(e) {
                return e instanceof y ? e.value : e
            }

            function g(e) {
                return e instanceof y ? e : new y(e)
            }

            function v() {
                return tt
            }

            function b(e) {
                tt = function(t) {
                    if (t instanceof y) return t;
                    var n = e(t);
                    return new y(n)
                }
            }

            function _(e) {
                return Ne.htmlEncode(e)
            }

            function w(e) {
                console.warn(e)
            }

            function k(e) {
                for (var t = arguments.length, n = [], r = 1; t > r; ++r) n.push(arguments[r]);
                return e.replace(/{(\d+)}/g, function(e, t) {
                    return "undefined" != typeof n[t] ? n[t] : e
                })
            }

            function x(e, t) {
                var n, r;
                for (r = 0, n = e.length; n > r; ++r) {
                    var i = e[r];
                    if (t.hasOwnProperty(i)) return t[i]
                }
                return null
            }

            function C(e, t) {
                var n;
                if (e && t)
                    for (n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }

            function S(e) {
                rt = e
            }

            function A(e, t) {
                var n = nt[e];
                return t && n ? n[t] : n
            }

            function T(e, t) {
                var n = e.parameters[t];
                return n ? n.value : void 0
            }

            function D(e, t) {
                var n, r = e.parameters;
                if (r)
                    for (n in r)
                        if (r.hasOwnProperty(n) && r[n].order === t) return r[n]
            }

            function E(e, t, n, r) {
                var i = T(e, t),
                    a = v(),
                    o = void 0;
                if ("" === i) return i;
                if (i) {
                    var s = i.map(function(e) {
                        if (e instanceof Object) {
                            var t = rt(e, n, r),
                                i = a(t);
                            return i
                        }
                        return e
                    });
                    o = g(s.reduce(function(e, t) {
                        return e + f(t)
                    }, ""))
                }
                return o
            }

            function P(e, t) {
                var n = null;
                if (e && e.index && t) {
                    var r = e.index,
                        i = r.number,
                        a = r.keyword;
                    n = t[i > -1 ? i : 0], n = void 0 !== n && null !== n ? "string" == typeof a && "" !== a ? n[a] : n : void 0
                }
                return n
            }

            function N(e) {
                var t = f(e);
                return ct.test(t) ? _(t) : t
            }

            function F(e, t, n) {
                var r = v(),
                    i = P(e, t),
                    a = i && "object" == typeof i,
                    o = N(r(a ? i[ot] : i)),
                    s = N(a ? r(i[ut]) : null),
                    u = N(a ? r(i[mt]) : null),
                    m = f(E(e, at, t, n)),
                    c = N(E(e, st, t, n)),
                    d = {};
                a ? Object.keys(i).forEach(function(e) {
                    "href" !== e && "title" !== e && (d[N(r(e))] = N(r(i[e])))
                }) : (u && (d["class"] = u), s && (d.id = s));
                var l = "<a";
                return o && (l += ' href="' + o + '"'), Object.keys(d).forEach(function(e) {
                    l += " " + e + '="' + d[e] + '"'
                }), c && (l += ' title="' + c + '"'), l += ">" + m + "</a>", g(l)
            }

            function L(e, t, n) {
                var r = P(e, t),
                    i = "";
                if (r === !0 || r === lt) i = E(e, lt, t, n);
                else {
                    if (r !== !1 && r !== ht) throw new Error('Invalid argument for BooleanPlaceholder. Expected boolean or "true" or "false" but found "' + r + '"');
                    i = E(e, ht, t, n)
                }
                return i
            }

            function j(e, t, n) {
                var r, i, a, o, s, u, m = P(e, t),
                    c = "",
                    d = e.parameters,
                    l = gt;
                o = [];
                for (u in d) d.hasOwnProperty(u) && (s = d[u], o[s.order] = s);
                var h = typeof m;
                "number" !== h || isNaN(m) ? "string" === h ? yt.test(m) ? l = parseFloat(m) : (w("Invalid value for 'choice' placeholder. \"" + m + '" is not a number. Defaulting to 0.'), l = gt) : "object" === h && (l = Array.isArray(m) ? m.length : Object.keys(m).length) : l = m;
                var p = void 0;
                return r = o.map(function(e, t) {
                    var n = {};
                    if (ft.test(e.key)) n.text = t.toString(), n.comparison = "eq", n.category = e.key;
                    else {
                        switch (n.text = t.toString(), e.delimiter) {
                            case "<":
                                n.comparison = "gt";
                                break;
                            case "+":
                                n.comparison = "gte";
                                break;
                            case "#":
                                n.comparison = "gte";
                                break;
                            default:
                                n.comparison = "eq"
                        }
                        n.arg = parseFloat(e.key), p || (p = n)
                    }
                    return n
                }), vt || (vt = new Fe.Chooser), a = vt.format(l, r, n), void 0 !== a ? (i = o[parseInt(a, 10)], c = E(e, i.key, t, n)) : p && (c = E(e, p.arg, t, n)), c
            }

            function M(e, t, n) {
                var r, i = P(e, t),
                    a = "";
                return void 0 !== i ? (i = i.toString(), r = T(e, i), a = r ? E(e, i, t, n) : E(e, _t, t, n)) : a = E(e, _t, t, n), a
            }

            function $(e, t) {
                var n = "",
                    r = void 0;
                if (void 0 !== e) {
                    var i = A(t, "possessive");
                    if (i) {
                        var a = void 0;
                        if (i.rules)
                            for (r in i.rules)
                                if (i.rules.hasOwnProperty(r)) {
                                    var o = i.rules[r],
                                        s = new RegExp(r);
                                    s.test(e) && (a = o)
                                }
                        void 0 !== a ? n = a : i.fallback && (n = i.fallback)
                    }
                }
                return n
            }

            function R(e, t, n) {
                var r = P(e, t),
                    i = "";
                return void 0 !== r && (i = $(r, n)), i
            }

            function O(e, t) {
                var n, r = P(e, t);
                return n = void 0 === r ? "{" + (-1 !== e.index.number ? e.index.number : "") + ("" !== e.index.keyword ? ":" + e.index.keyword : "") + "}" : r, v()(n)
            }

            function I(e, t) {
                var n = t instanceof y,
                    r = n ? f(t) : t,
                    i = r;
                if (e) {
                    var a = e[Ct],
                        o = e[St];
                    a && (i = a.value + i), o && (i += o.value)
                }
                return i = n ? g(i) : i
            }

            function U(e, t, n) {
                var r = kt(e, t, n);
                return r = xt(e.parameters, r)
            }

            function H(e, t, n) {
                var r = B(parseInt((100 * t).toFixed(1)), n);
                return k(e, r)
            }

            function z(e) {
                return C(C({}, A(e, "number")), A("default", "number"))
            }

            function B(e, t) {
                return Tt || (Tt = new Fe.NumberFormatter), Tt.format(e, t)
            }

            function q(e, t) {
                return Tt || (Tt = new Fe.NumberFormatter), Tt.format(Math.floor(e), t)
            }

            function W(e, t, n) {
                return Dt || (Dt = new Fe.CurrencyFormatter), Dt.format(e, t, n)
            }

            function K(e, t) {
                var n = z(t);
                return H(n.percent, e, t)
            }

            function X(e, t, n) {
                var r, i = P(e, t),
                    a = e.parameters;
                return void 0 !== i && (r = a ? a.integer ? q(i, n) : a.currency ? W(i, "", n) : a.percent ? K(i, n) : B(i, n) : B(i, n)), v()(r)
            }

            function J(e, t, n, r) {
                Nt[t] || (Ft[t] ? (console.log('The date pattern "' + t + '" is deprecated, falling back to "' + Ft[t] + '".'), t = Ft[t]) : (console.log('Unknown date pattern "' + t + '", falling back to "' + Lt + '". Note: custom date patterns are not supported.'), t = Lt));
                var i = Nt[t];
                return Pt || (Pt = new Fe.DateFormatter), Pt.format(e, n, i, r)
            }

            function V(e, t, n) {
                var r = P(e, t),
                    i = D(e, 0),
                    a = Lt;
                return i && (a = i.key), J(r, a, n, !1)
            }

            function G(e, t, n, r) {
                $t[t] || (Rt[t] ? (console.log('The time pattern "' + t + '" is deprecated, falling back to "' + Rt[t] + '".'), t = Rt[t]) : (console.log('Unknown time pattern "' + t + '", falling back to "' + Ot + '". Note: custom time patterns are not supported.'), t = Ot));
                var i = $t[t];
                return Mt || (Mt = new Fe.TimeFormatter), Mt.format(e, n, i, r)
            }

            function Y(e, t, n) {
                var r = P(e, t),
                    i = D(e, 0),
                    a = Ot;
                return i && (a = i.key), G(r, a, n, !1)
            }

            function Z(e, t, n) {
                var r, i, a, o, s, u, m, c, d, l, h = P(e, t),
                    p = "",
                    y = !1,
                    f = e.parameters;
                if (void 0 !== h && (f && (y = !!f[Bt]), r = A(n, "suffix"))) switch (d = (r.hardVowels || "") + (r.softVowels || ""), r.strategy) {
                    case qt:
                        if (h.length > 0) {
                            for (c = h.length - 1, m = c; m >= 0 && u !== Ht && u !== zt; m--)
                                if (u = h.charAt(m), -1 !== d.indexOf(u)) return l = m === c, s = r.hardVowels && r.hardVowels.indexOf(u) > -1 ? r.hardVowelSuffix : r.fallbackSuffix, p = "" + (l ? r.bufferChar : "") + s, y ? r.separator + p : p;
                            for (i in r.nonVowelToSuffix)
                                if (r.nonVowelToSuffix.hasOwnProperty(i) && (a = r.nonVowelToSuffix[i], o = new RegExp(i), o.test(h.charAt(c)))) {
                                    s = a;
                                    break
                                }
                            s || (s = r.defaultBufferChar), p = y ? r.separator + s : s;
                            break
                        }
                }
                return p
            }

            function Q(e, t, n) {
                var r = void 0;
                if (void 0 !== e) {
                    var i = {
                        firstName: e.givenName || e.firstName,
                        lastName: e.familyName || e.lastName,
                        maidenName: e.maidenName
                    };
                    switch (t || (t = Kt), -1 === Xt.indexOf(t) && (console.log('Unrecognized name format "' + t + '", falling back to "' + Kt + '".'), t = Kt), t) {
                        case "given":
                            r = i.firstName || "";
                            break;
                        case "family":
                            r = i.lastName || "";
                            break;
                        case "maiden":
                            r = i.maidenName || "";
                            break;
                        default:
                            var a = "full" === t || "given" === t || "family" === t || "maiden" === t ? "FULL_NAME" : "familiar" === t ? "FAMILIAR_NAME" : "list" === t ? "LIST_VIEW" : Wt;
                            Jt || (Jt = new Fe.NameFormatter), r = Jt.format(i, a, n)
                    }
                }
                return r
            }

            function ee(e, t, n) {
                var r = P(e, t),
                    i = void 0,
                    a = void 0,
                    o = x(Xt, e.parameters);
                return o = o && o.key, i = Q(r, o, n), e.parameters.possessive && (i += $(i, n)), a = v()(i), i = xt(e.parameters, a)
            }

            function te(e, t, n, r) {
                if (Yt === e) {
                    var i = x(Xt, t);
                    i = i && i.key, n = Q(n, i, r)
                }
                return n = v()(n), n = xt(t, n)
            }

            function ne(e, t, n) {
                var r, i, a, o, s, u = P(e, t),
                    m = e.subtype || Zt,
                    c = "",
                    d = A(n, Qt) || A("default", Qt);
                if (u && u instanceof Array && (r = u.length, i = r - 1, r > 0)) switch (r) {
                    case 1:
                        c = te(m, e.parameters, u[0], n);
                        break;
                    case 2:
                        c = k(d[rn], te(m, e.parameters, u[0], n), te(m, e.parameters, u[1], n));
                        break;
                    default:
                        o = 0, s = 1;
                        do a = 0 === o ? en : i > s ? tn : nn, c = a === en ? k(d[a], te(m, e.parameters, u[o], n), te(m, e.parameters, u[s], n)) : k(d[a], c, te(m, e.parameters, u[s], n)), o++, s++; while (a !== nn)
                }
                return c
            }

            function re(e) {
                return e ? e.index ? void 0 : "Placeholder must have an index." : "Placeholder is invalid."
            }

            function ie(e, t) {
                var n, r, i;
                if (e.parameters) {
                    r = e.parameters;
                    for (i in r)
                        if (r.hasOwnProperty(i) && !t.test(i)) {
                            n = 'Invalid style "' + i + '"';
                            break
                        }
                }
                return n
            }

            function ae(e, t) {
                var n, r, i, a, o;
                if (e.parameters)
                    for (r = e.parameters, a = 0, o = t.length; o > a; ++a) i = t[a], r.hasOwnProperty(i) || (n = 'Missing required style key "' + i + '"');
                else n = "Placeholder must have styles";
                return n
            }

            function oe(e, t, n) {
                var r, i, a = "Placeholder must have styles",
                    o = "Placeholder must have exactly " + t + " style(s)",
                    s = "Placeholder must have at least " + t + " style(s)",
                    u = 0;
                if (e.parameters) {
                    for (i in e.parameters) e.parameters.hasOwnProperty(i) && u++;
                    "eq" === n && u !== t ? r = o : "gte" === n && t > u && (r = s)
                } else t > 0 && (r = a);
                return r
            }

            function se(e, t) {
                return oe(e, t, "gte")
            }

            function ue(e, t) {
                return oe(e, t, "eq")
            }

            function me(e, t, n) {
                var r, i, a, o;
                if (e.parameters)
                    for (i = 0, a = t.length; a > i; ++i) r = e.parameters[t[i]], "without" === n ? r && r.value && (o = 'Invalid value for style "' + r.key + '"') : "with" === n && r && (r.value || (o = 'Style "' + r.key + '" must have a value'));
                return o
            }

            function ce(e, t) {
                return me(e, t, "with")
            }

            function de(e, t) {
                return me(e, t, "without")
            }

            function le(e) {
                var t = ae(e, mn);
                return t || (t = ie(cn)), t
            }

            function he(e) {
                var t = se(e, 1);
                return t || (t = ie(e, pn)), t
            }

            function pe(e) {
                var t, n, r, i, a, o, s, u, m = e.parameters,
                    c = !1;
                o = [];
                for (u in m) m.hasOwnProperty(u) && (s = m[u], o[s.order] = s, gn.test(u) && (c = !0));
                for (s = void 0, i = 0, a = o.length; a > i; ++i)
                    if (s = o[i], fn.test(s.key))
                        if (r = parseInt(s.key, 10), void 0 === n) n = r;
                        else {
                            if (!(r > n)) {
                                t = "Invalid number order. Cannot list " + r + " after " + n + ". Numbers must be ascending.";
                                break
                            }
                            n = r
                        }
                else {
                    if (!gn.test(s.key)) {
                        t = 'Invalid category key "' + s.key + '".';
                        break
                    }
                    c = !0
                }
                return c && (m.singular ? m.plural || (t = 'Missing required category "plural"') : t = 'Missing required category "singular"'), t
            }

            function ye(e) {
                var t, n, r, i;
                if (e.parameters) {
                    n = e.parameters;
                    for (r in n)
                        if (n.hasOwnProperty(r) && (i = !0, !n[r].value)) {
                            t = "MapPlaceholder cannot have keys without values.";
                            break
                        }
                    i || (t = "MapPlaceholder must have at least one style argument.")
                } else t = "MapPlaceholder must have parameters.";
                return t
            }

            function fe(e) {
                var t = ie(e, xn);
                return t || (t = ce(e, kn)), t
            }

            function ge(e) {
                var t = !1;
                return "" !== e.subtype && (Dn.test(e.subtype) || (t = 'Invalid list subtype "' + e.subtype + '"')), t || (t = ie(e, En)), t || (t = ce(e, Tn)), t
            }

            function ve(e) {
                return ue(e, 0)
            }

            function be(e) {
                var t = ue(e, 1);
                return t || (t = ie(e, Mn)), t || (t = de(e, jn)), t
            }

            function _e(e) {
                return ie(e, In)
            }

            function we(e) {
                var t, n, r;
                if ("string" != typeof e) {
                    if (r = an(e), r || Hn.hasOwnProperty(e.type) && (r = Hn[e.type](e)), r) throw new Error(r);
                    if (e && e.parameters instanceof Object)
                        for (t in e.parameters) e.parameters.hasOwnProperty(t) && (n = e.parameters[t], n.value && n.value instanceof Array && n.value.forEach(we))
                }
            }

            function ke(e) {
                return Ne.sanitizeHTML(e)
            }

            function xe(e, t, n) {
                var r = "";
                if (e && t && n) {
                    var i = Bn[e.type];
                    i && (r = i(e, t, n))
                }
                return r
            }

            function Ce(e) {
                var t = et(e);
                return t.forEach(Un), t
            }

            function Se(e, t) {
                return e && 1 === e.length && "string" == typeof e[0] ? function() {
                    return qn(e[0])
                } : function(n) {
                    var r = e.map(function(e) {
                        return "string" == typeof e ? e : xe(e, n, t)
                    }).join("");
                    return qn(r)
                }
            }

            function Ae(e, t) {
                return Se(Ce(e), t)
            }

            function Te() {
                return v()
            }

            function De(e) {
                b(e)
            }

            function Ee() {
                return qn
            }

            function Pe(e) {
                qn = e
            }
            var Ne = t("jSecure");
            Ne = "default" in Ne ? Ne["default"] : Ne;
            var Fe = t("t8");
            Fe = "default" in Fe ? Fe["default"] : Fe;
            var Le = "\\";
            n.prototype.next = function() {
                return this._index < this._input.length ? this._input[this._index] : null
            }, n.prototype.consume = function() {
                this._last = this._input[this._index], this._index++
            }, n.prototype.isEscaped = function() {
                return this._last === Le
            }, n.prototype.constructor = n;
            var je = n,
                Me = "{",
                $e = "}",
                Re = ",",
                Oe = ":",
                Ie = "|",
                Ue = "0",
                He = "'",
                ze = "\\",
                Be = -1,
                qe = "",
                We = /[a-zA-Z]/,
                Ke = /[1-9]/,
                Xe = /[0-9]/,
                Je = /[a-zA-Z0-9]/,
                Ve = /[a-zA-Z0-9_\-~.|\[\]\/]/,
                Ge = /[#]/,
                Ye = /[#+<]/,
                Ze = {},
                Qe = {};
            Qe.choice = Ye, Ze.choice = function(e, t, n) {
                return u(e, t, n)
            }, Ze.date = function(e, t, n) {
                return m(e, t, n)
            }, Ze.number = function(e, t, n) {
                return m(e, t, n)
            };
            var et = p;
            y.prototype.constructor = y, y.prototype.toString = function() {
                var e = "";
                switch (typeof this.value) {
                    case "object":
                    case "function":
                        break;
                    default:
                        e = this.value + ""
                }
                return e
            };
            var tt = void 0;
            b(_);
            var nt = {
                    "default": {},
                    ar_AE: {
                        list: {
                            2: "{0} و {1}",
                            start: "{0}، {1}",
                            middle: "{0}، {1}",
                            end: "{0}، و {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    cs_CZ: {
                        list: {
                            2: "{0} a {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} a {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    da_DK: {
                        list: {
                            2: "{0} og {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} og {1}"
                        },
                        number: {
                            percent: "{0}%"
                        },
                        possessive: {
                            fallback: "s",
                            rules: {
                                ".*[SsXxZz]$": "’",
                                ".*[A-RT-WYÅÆØ]$": "S",
                                ".*[a-rt-wyåæø]$": "s"
                            }
                        }
                    },
                    de_DE: {
                        list: {
                            2: "{0} und {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} und {1}"
                        },
                        number: {
                            percent: "{0}%"
                        },
                        possessive: {
                            fallback: "s",
                            rules: {
                                ".*[SsXxZzß]$": "’",
                                ".*[A-RT-WYÄÖÜ]$": "S",
                                ".*[a-rt-wyäöü]$": "s"
                            }
                        }
                    },
                    en_US: {
                        list: {
                            2: "{0} and {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0}, and {1}"
                        },
                        number: {
                            percent: "{0}%"
                        },
                        possessive: {
                            fallback: "’s",
                            rules: {
                                ".*[Ss]$": "’",
                                ".*[A-RT-Z]$": "’S",
                                ".*[a-rt-z]$": "’s"
                            }
                        }
                    },
                    es_ES: {
                        list: {
                            2: "{0} y {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} y {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    fr_FR: {
                        list: {
                            2: "{0} et {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} et {1}"
                        },
                        number: {
                            percent: "{0} %"
                        }
                    },
                    in_ID: {
                        list: {
                            2: "{0}, {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0}, {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    it_IT: {
                        list: {
                            2: "{0} e {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} e {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    ja_JP: {
                        list: {
                            2: "{0}、{1}",
                            start: "{0}、{1}",
                            middle: "{0}、{1}",
                            end: "{0}、{1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    ko_KR: {
                        list: {
                            2: "{0} 및 {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} 및 {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    ms_MY: {
                        list: {
                            2: "{0}, {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0}, {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    nl_NL: {
                        list: {
                            2: "{0} en {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} en {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    no_NO: {
                        list: {
                            2: "{0}, {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0}, {1}"
                        },
                        number: {
                            percent: "{0}%"
                        },
                        possessive: {
                            fallback: "s",
                            rules: {
                                ".*[SsXxZz]$": "’",
                                ".*[A-RT-WY]$": "S",
                                ".*[a-rt-wy]$": "s"
                            }
                        }
                    },
                    pl_PL: {
                        list: {
                            2: "{0} i {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} i {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    pt_BR: {
                        list: {
                            2: "{0} e {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} e {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    ro_RO: {
                        list: {
                            2: "{0} și {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} și {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    ru_RU: {
                        list: {
                            2: "{0} и {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} и {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    sv_SE: {
                        list: {
                            2: "{0} och {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} och {1}"
                        },
                        number: {
                            percent: "{0} %"
                        },
                        possessive: {
                            fallback: "s",
                            rules: {
                                ".*[SsXxZz]$": "",
                                ".*[A-RT-WYÅÄÖ]$": "S",
                                ".*[a-rt-wyåäö]$": "s"
                            }
                        }
                    },
                    th_TH: {
                        list: {
                            2: "{0}และ{1}",
                            start: "{0} {1}",
                            middle: "{0} {1}",
                            end: "{0} และ{1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    tl_PH: {
                        list: {
                            2: "{0}, {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0}, {1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    tr_TR: {
                        list: {
                            2: "{0} ve {1}",
                            start: "{0}, {1}",
                            middle: "{0}, {1}",
                            end: "{0} ve {1}"
                        },
                        number: {
                            percent: "% {0}"
                        },
                        suffix: {
                            strategy: "reverseSearchForVowel",
                            hardVowels: "aAıIoOuU",
                            softVowels: "eEiİÖöÜü",
                            separator: "’",
                            bufferChar: "y",
                            defaultBufferChar: "e",
                            hardVowelSuffix: "a",
                            fallbackSuffix: "e",
                            nonVowelToSuffix: {
                                "/[BbCcÇçDdFfGgĞğHhiJjKkLlMmNnPpRrSsŞşTtVvWwYyZz]/": "ye",
                                "/[IQq]/": "ya",
                                "/[Xx]/": "e"
                            }
                        }
                    },
                    zh_CN: {
                        list: {
                            2: "{0}和{1}",
                            start: "{0}、{1}",
                            middle: "{0}、{1}",
                            end: "{0}和{1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    },
                    zh_TW: {
                        list: {
                            2: "{0}和{1}",
                            start: "{0}、{1}",
                            middle: "{0}、{1}",
                            end: "{0}和{1}"
                        },
                        number: {
                            percent: "{0}%"
                        }
                    }
                },
                rt = function() {},
                it = F,
                at = "text",
                ot = "href",
                st = "title",
                ut = "id",
                mt = "class",
                ct = /['"<>]/,
                dt = L,
                lt = "true",
                ht = "false",
                pt = j,
                yt = /-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,
                ft = /^(zero|singular|dual|few|many|plural|other)$/,
                gt = 0,
                vt = void 0,
                bt = M,
                _t = "DEFAULT_TEXT",
                wt = R,
                kt = O,
                xt = I,
                Ct = "prefix",
                St = "suffix",
                At = U,
                Tt = void 0,
                Dt = void 0,
                Et = X,
                Pt = void 0,
                Nt = {
                    fmt_d: "d",
                    fmt_d_short: "d.short",
                    fmt_d_medium: "d.medium",
                    fmt_d_long: "d.long",
                    fmt_m: "m",
                    fmt_m_short: "m.short",
                    fmt_m_medium: "m.medium",
                    fmt_m_long: "m.long",
                    fmt_y: "y",
                    fmt_y_short: "y.short",
                    fmt_md_medium: "md.medium",
                    fmt_md_long: "md.long",
                    fmt_my_medium: "my.medium",
                    fmt_my_long: "my.long",
                    fmt_mdy_short: "mdy.short",
                    fmt_mdy_medium: "mdy.medium",
                    fmt_mdy_long: "mdy.long",
                    fmt_mdy_hm_short: "time.short",
                    fmt_mdy_hm_long: "time.long",
                    fmt_mdy_iso: "iso",
                    iso: "iso"
                },
                Ft = {
                    "short": "fmt_mdy_short",
                    medium: "fmt_mdy_medium",
                    "long": "fmt_mdy_long",
                    full: "fmt_mdy_long"
                },
                Lt = (Object.keys(Nt), "fmt_mdy_medium"),
                jt = V,
                Mt = void 0,
                $t = {
                    fmt_hm: "hm",
                    fmt_hms: "hms"
                },
                Rt = {
                    "short": "fmt_hm",
                    medium: "fmt_hms",
                    "long": "fmt_hms",
                    full: "fmt_hms"
                },
                Ot = (Object.keys($t), "fmt_hms"),
                It = Y,
                Ut = Z,
                Ht = " ",
                zt = "\t",
                Bt = "sep",
                qt = "reverseSearchForVowel",
                Wt = "FULL_NAME",
                Kt = "familiar",
                Xt = ["familiar", "family", "full", "given", "list", "maiden"],
                Jt = void 0,
                Vt = ee,
                Gt = ne,
                Yt = "name",
                Zt = "text",
                Qt = "list",
                en = "start",
                tn = "middle",
                nn = "end",
                rn = "2",
                an = re,
                on = le,
                sn = "text",
                un = "title",
                mn = [sn],
                cn = new RegExp("^(" + [sn, un].join("|") + ")$"),
                dn = he,
                ln = "true",
                hn = "false",
                pn = new RegExp("^(" + [ln, hn].join("|") + ")$"),
                yn = pe,
                fn = /-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,
                gn = /^(zero|singular|dual|few|many|plural|other)$/,
                vn = ye,
                bn = fe,
                _n = "prefix",
                wn = "suffix",
                kn = [_n, wn],
                xn = /^(familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix)$/,
                Cn = ge,
                Sn = "prefix",
                An = "suffix",
                Tn = [Sn, An],
                Dn = /^(?:name|text)$/,
                En = /^(?:familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix)$/,
                Pn = ve,
                Nn = be,
                Fn = "sep",
                Ln = "nosep",
                jn = [Fn, Ln],
                Mn = new RegExp("^(" + [Fn, Ln].join("|") + ")$"),
                $n = _e,
                Rn = "prefix",
                On = "suffix",
                In = new RegExp([On, Rn].join("|")),
                Un = we,
                Hn = {
                    anchor: on,
                    "boolean": dn,
                    choice: yn,
                    list: Cn,
                    map: vn,
                    name: bn,
                    possessive: Pn,
                    suffix: Nn,
                    text: $n
                },
                zn = {
                    formatDate: J,
                    formatName: Q,
                    formatNumber: B,
                    formatInteger: q,
                    formatCurrency: W,
                    formatPercent: K,
                    formatTime: G
                },
                Bn = {
                    anchor: it,
                    "boolean": dt,
                    choice: pt,
                    date: jt,
                    list: Gt,
                    map: bt,
                    name: Vt,
                    number: Et,
                    possessive: wt,
                    simple: kt,
                    suffix: Ut,
                    text: At,
                    time: It
                },
                qn = ke;
            S(xe), e.toAst = Ce, e.makeInterpolator = Se, e.fromString = Ae, e.getUserDataFilter = Te, e.setUserDataFilter = De, e.getOutputFilter = Ee, e.setOutputFilter = Pe, e.formatters = zn
        }
        var t = function(e) {
            return this[e]
        };
        e(this.xmessage = {}, t)
    }(), ! function(e, t, n, r) {
        "use strict";

        function i(e) {
            return ("string" == typeof e || e instanceof String) && (e = e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), e
        }
        var a = function(t) {
            for (var n = t.length, r = e("head"); n--;) 0 === r.has("." + t[n]).length && r.append('<meta class="' + t[n] + '" />')
        };
        a(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), e(function() {
            "undefined" != typeof FastClick && "undefined" != typeof n.body && FastClick.attach(n.body)
        });
        var o = function(t, r) {
                if ("string" == typeof t) {
                    if (r) {
                        var i;
                        if (r.jquery) {
                            if (i = r[0], !i) return r
                        } else i = r;
                        return e(i.querySelectorAll(t))
                    }
                    return e(n.querySelectorAll(t))
                }
                return e(t, r)
            },
            s = function(e) {
                var t = [];
                return e || t.push("data"), this.namespace.length > 0 && t.push(this.namespace), t.push(this.name), t.join("-")
            },
            u = function(e) {
                for (var t = e.split("-"), n = t.length, r = []; n--;) 0 !== n ? r.push(t[n]) : this.namespace.length > 0 ? r.push(this.namespace, t[n]) : r.push(t[n]);
                return r.reverse().join("-")
            },
            m = function(t, n) {
                var r = this,
                    i = function() {
                        var i = o(this),
                            a = !i.data(r.attr_name(!0) + "-init");
                        i.data(r.attr_name(!0) + "-init", e.extend({}, r.settings, n || t, r.data_options(i))), a && r.events(this)
                    };
                if (o(this.scope).is("[" + this.attr_name() + "]") ? i.call(this.scope) : o("[" + this.attr_name() + "]", this.scope).each(i), "string" == typeof t) return this[t].call(this, n)
            },
            c = function(e, t) {
                function n() {
                    t(e[0])
                }

                function r() {
                    if (this.one("load", n), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var e = this.attr("src"),
                            t = e.match(/\?/) ? "&" : "?";
                        t += "random=" + (new Date).getTime(), this.attr("src", e + t)
                    }
                }
                return e.attr("src") ? void(e[0].complete || 4 === e[0].readyState ? n() : r.call(e)) : void n()
            };
        t.matchMedia || (t.matchMedia = function() {
                var e = t.styleMedia || t.media;
                if (!e) {
                    var r = n.createElement("style"),
                        i = n.getElementsByTagName("script")[0],
                        a = null;
                    r.type = "text/css", r.id = "matchmediajs-test", i.parentNode.insertBefore(r, i), a = "getComputedStyle" in t && t.getComputedStyle(r, null) || r.currentStyle, e = {
                        matchMedium: function(e) {
                            var t = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                            return r.styleSheet ? r.styleSheet.cssText = t : r.textContent = t, "1px" === a.width
                        }
                    }
                }
                return function(t) {
                    return {
                        matches: e.matchMedium(t || "all"),
                        media: t || "all"
                    }
                }
            }()),
            function(e) {
                function n() {
                    r && (o(n), u && e.fx.tick())
                }
                for (var r, i = 0, a = ["webkit", "moz"], o = t.requestAnimationFrame, s = t.cancelAnimationFrame, u = "undefined" != typeof e.fx; i < a.length && !o; i++) o = t[a[i] + "RequestAnimationFrame"], s = s || t[a[i] + "CancelAnimationFrame"] || t[a[i] + "CancelRequestAnimationFrame"];
                o ? (t.requestAnimationFrame = o, t.cancelAnimationFrame = s, u && (e.fx.timer = function(t) {
                    t() && e.timers.push(t) && !r && (r = !0, n())
                }, e.fx.stop = function() {
                    r = !1
                })) : (t.requestAnimationFrame = function(e) {
                    var n = (new Date).getTime(),
                        r = Math.max(0, 16 - (n - i)),
                        a = t.setTimeout(function() {
                            e(n + r)
                        }, r);
                    return i = n + r, a
                }, t.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                })
            }(e), t.Foundation = {
                name: "Foundation",
                version: "5.5.2",
                media_queries: {
                    small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    "small-only": o(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    "medium-only": o(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    "large-only": o(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    "xlarge-only": o(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
                },
                stylesheet: e("<style></style>").appendTo("head")[0].sheet,
                global: {
                    namespace: r
                },
                init: function(e, n, r, i, a) {
                    var s = [e, r, i, a],
                        u = [];
                    if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = e || this.scope, this.set_namespace(), n && "string" == typeof n && !/reflow/i.test(n)) this.libs.hasOwnProperty(n) && u.push(this.init_lib(n, s));
                    else
                        for (var m in this.libs) u.push(this.init_lib(m, n));
                    return o(t).load(function() {
                        o(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                    }), e
                },
                init_lib: function(t, n) {
                    return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), n && n.hasOwnProperty(t) ? ("undefined" != typeof this.libs[t].settings ? e.extend(!0, this.libs[t].settings, n[t]) : "undefined" != typeof this.libs[t].defaults && e.extend(!0, this.libs[t].defaults, n[t]), this.libs[t].init.apply(this.libs[t], [this.scope, n[t]])) : (n = n instanceof Array ? n : new Array(n), this.libs[t].init.apply(this.libs[t], n))) : function() {}
                },
                patch: function(e) {
                    e.scope = this.scope, e.namespace = this.global.namespace, e.rtl = this.rtl, e.data_options = this.utils.data_options, e.attr_name = s, e.add_namespace = u, e.bindings = m, e.S = this.utils.S
                },
                inherit: function(e, t) {
                    for (var n = t.split(" "), r = n.length; r--;) this.utils.hasOwnProperty(n[r]) && (e[n[r]] = this.utils[n[r]])
                },
                set_namespace: function() {
                    var t = this.global.namespace === r ? e(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                    this.global.namespace = t === r || /false/i.test(t) ? "" : t
                },
                libs: {},
                utils: {
                    S: o,
                    throttle: function(e, t) {
                        var n = null;
                        return function() {
                            var r = this,
                                i = arguments;
                            null == n && (n = setTimeout(function() {
                                e.apply(r, i), n = null
                            }, t))
                        }
                    },
                    debounce: function(e, t, n) {
                        var r, i;
                        return function() {
                            var a = this,
                                o = arguments,
                                s = function() {
                                    r = null, n || (i = e.apply(a, o))
                                },
                                u = n && !r;
                            return clearTimeout(r), r = setTimeout(s, t), u && (i = e.apply(a, o)), i
                        }
                    },
                    data_options: function(t, n) {
                        function r(e) {
                            return !isNaN(e - 0) && null !== e && "" !== e && e !== !1 && e !== !0
                        }

                        function i(t) {
                            return "string" == typeof t ? e.trim(t) : t
                        }
                        n = n || "options";
                        var a, o, s, u = {},
                            m = function(e) {
                                var t = Foundation.global.namespace;
                                return t.length > 0 ? e.data(t + "-" + n) : e.data(n)
                            },
                            c = m(t);
                        if ("object" == typeof c) return c;
                        for (s = (c || ":").split(";"), a = s.length; a--;) o = s[a].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), r(o[1]) && (o[1].indexOf(".") === -1 ? o[1] = parseInt(o[1], 10) : o[1] = parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (u[i(o[0])] = i(o[1]));
                        return u
                    },
                    register_media: function(t, n) {
                        Foundation.media_queries[t] === r && (e("head").append('<meta class="' + n + '"/>'), Foundation.media_queries[t] = i(e("." + n).css("font-family")))
                    },
                    add_custom_rule: function(e, t) {
                        if (t === r && Foundation.stylesheet) Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length);
                        else {
                            var n = Foundation.media_queries[t];
                            n !== r && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[t] + "{ " + e + " }", Foundation.stylesheet.cssRules.length)
                        }
                    },
                    image_loaded: function(e, t) {
                        function n(e) {
                            for (var t = e.length, n = t - 1; n >= 0; n--)
                                if (e.attr("height") === r) return !1;
                            return !0
                        }
                        var i = this,
                            a = e.length;
                        (0 === a || n(e)) && t(e), e.each(function() {
                            c(i.S(this), function() {
                                a -= 1, 0 === a && t(e)
                            })
                        })
                    },
                    random_str: function() {
                        return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                    },
                    match: function(e) {
                        return t.matchMedia(e).matches
                    },
                    is_small_up: function() {
                        return this.match(Foundation.media_queries.small)
                    },
                    is_medium_up: function() {
                        return this.match(Foundation.media_queries.medium)
                    },
                    is_large_up: function() {
                        return this.match(Foundation.media_queries.large)
                    },
                    is_xlarge_up: function() {
                        return this.match(Foundation.media_queries.xlarge)
                    },
                    is_xxlarge_up: function() {
                        return this.match(Foundation.media_queries.xxlarge)
                    },
                    is_small_only: function() {
                        return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
                    },
                    is_medium_only: function() {
                        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                    },
                    is_large_only: function() {
                        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                    },
                    is_xlarge_only: function() {
                        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
                    },
                    is_xxlarge_only: function() {
                        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
                    }
                }
            }, e.fn.foundation = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    return Foundation.init.apply(Foundation, [this].concat(e)), this
                })
            }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.5.2",
            settings: {
                live_validate: !0,
                validate_on_blur: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                error_class: "error",
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                    url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function(e, t, r) {
                        var i = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                            a = e.value,
                            o = i === a;
                        return o
                    }
                }
            },
            timer: null,
            init: function(e, t, n) {
                this.bindings(t, n)
            },
            events: function(t) {
                function n(e, t) {
                    clearTimeout(r.timer), r.timer = setTimeout(function() {
                        r.validate([e], t)
                    }.bind(e), a.timeout)
                }
                var r = this,
                    i = r.S(t).attr("novalidate", "novalidate"),
                    a = i.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), i.off(".abide").on("submit.fndtn.abide", function(e) {
                    var t = /ajax/i.test(r.S(this).attr(r.attr_name()));
                    return r.validate(r.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(), e, t)
                }).on("validate.fndtn.abide", function(e) {
                    "manual" === a.validate_on && r.validate([e.target], e)
                }).on("reset", function(t) {
                    return r.reset(e(this), t)
                }).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(e) {
                    a.validate_on_blur && a.validate_on_blur === !0 && n(this, e), "change" === a.validate_on && n(this, e)
                }).on("keydown.fndtn.abide", function(e) {
                    a.live_validate && a.live_validate === !0 && 9 != e.which && n(this, e), "tab" === a.validate_on && 9 === e.which ? n(this, e) : "change" === a.validate_on && n(this, e)
                }).on("focus", function(t) {
                    navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i) && e("html, body").animate({
                        scrollTop: e(t.target).offset().top
                    }, 100)
                })
            },
            reset: function(t, n) {
                var r = this;
                t.removeAttr(r.invalid_attr), e("[" + r.invalid_attr + "]", t).removeAttr(r.invalid_attr), e("." + r.settings.error_class, t).not("small").removeClass(r.settings.error_class), e(":input", t).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(r.invalid_attr)
            },
            validate: function(e, t, n) {
                for (var r = this.parse_patterns(e), i = r.length, a = this.S(e[0]).closest("form"), o = /submit/.test(t.type), s = 0; s < i; s++)
                    if (!r[s] && (o || n)) return this.settings.focus_on_invalid && e[s].focus(), a.trigger("invalid.fndtn.abide"), this.S(e[s]).closest("form").attr(this.invalid_attr, ""), !1;
                return (o || n) && a.trigger("valid.fndtn.abide"), a.removeAttr(this.invalid_attr), !n
            },
            parse_patterns: function(e) {
                for (var t = e.length, n = []; t--;) n.push(this.pattern(e[t]));
                return this.check_validation_and_apply_styles(n)
            },
            pattern: function(e) {
                var t = e.getAttribute("type"),
                    n = "string" == typeof e.getAttribute("required"),
                    r = e.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(r) && r.length > 0 ? [e, this.settings.patterns[r], n] : r.length > 0 ? [e, new RegExp(r), n] : this.settings.patterns.hasOwnProperty(t) ? [e, this.settings.patterns[t], n] : (r = /.*/, [e, r, n])
            },
            check_validation_and_apply_styles: function(t) {
                var n = t.length,
                    r = [],
                    i = this.S(t[0][0]).closest("[data-" + this.attr_name(!0) + "]");
                for (i.data(this.attr_name(!0) + "-init") || {}; n--;) {
                    var a, o, s = t[n][0],
                        u = t[n][2],
                        m = s.value.trim(),
                        c = this.S(s).parent(),
                        d = s.getAttribute(this.add_namespace("data-abide-validator")),
                        l = "radio" === s.type,
                        h = "checkbox" === s.type,
                        p = this.S('label[for="' + s.getAttribute("id") + '"]'),
                        y = !u || s.value.length > 0,
                        f = [];
                    if (s.getAttribute(this.add_namespace("data-equalto")) && (d = "equalTo"), a = c.is("label") ? c.parent() : c, l && u) f.push(this.valid_radio(s, u));
                    else if (h && u) f.push(this.valid_checkbox(s, u));
                    else if (d) {
                        for (var g = d.split(" "), v = !0, b = !0, _ = 0; _ < g.length; _++) o = this.settings.validators[g[_]].apply(this, [s, u, a]), f.push(o), b = o && v, v = o;
                        b ? (this.S(s).removeAttr(this.invalid_attr), a.removeClass("error"), p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"), e(s).triggerHandler("valid")) : (this.S(s).attr(this.invalid_attr, ""), a.addClass("error"), p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"), e(s).triggerHandler("invalid"))
                    } else if (t[n][1].test(m) && y || !u && s.value.length < 1 || e(s).attr("disabled") ? f.push(!0) : f.push(!1), f = [f.every(function(e) {
                            return e
                        })], f[0]) this.S(s).removeAttr(this.invalid_attr), s.setAttribute("aria-invalid", "false"), s.removeAttribute("aria-describedby"), a.removeClass(this.settings.error_class), p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"), e(s).triggerHandler("valid");
                    else {
                        this.S(s).attr(this.invalid_attr, ""), s.setAttribute("aria-invalid", "true");
                        var w = a.find("small." + this.settings.error_class, "span." + this.settings.error_class),
                            k = w.length > 0 ? w[0].id : "";
                        k.length > 0 && s.setAttribute("aria-describedby", k), a.addClass(this.settings.error_class), p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"), e(s).triggerHandler("invalid")
                    }
                    r = r.concat(f)
                }
                return r
            },
            valid_checkbox: function(t, n) {
                var t = this.S(t),
                    r = t.is(":checked") || !n || t.get(0).getAttribute("disabled");
                return r ? (t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), e(t).triggerHandler("valid")) : (t.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), e(t).triggerHandler("invalid")), r
            },
            valid_radio: function(t, n) {
                for (var r = t.getAttribute("name"), i = this.S(t).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + r + "']"), a = i.length, o = !1, s = !1, u = 0; u < a; u++) i[u].getAttribute("disabled") ? (s = !0, o = !0) : i[u].checked ? o = !0 : s && (o = !1);
                for (var u = 0; u < a; u++) o ? (this.S(i[u]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), e(i[u]).triggerHandler("valid")) : (this.S(i[u]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), e(i[u]).triggerHandler("invalid"));
                return o
            },
            valid_equal: function(e, t, r) {
                var i = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                    a = e.value,
                    o = i === a;
                return o ? (this.S(e).removeAttr(this.invalid_attr), r.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(e).attr(this.invalid_attr, ""), r.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), o
            },
            valid_oneof: function(e, t, n, r) {
                var e = this.S(e),
                    i = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    a = i.filter(":checked").length > 0;
                if (a ? e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : e.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !r) {
                    var o = this;
                    i.each(function() {
                        o.valid_oneof.call(o, this, null, null, !0)
                    })
                }
                return a
            },
            reflow: function(e, t) {
                var n = this,
                    r = n.S("[" + this.attr_name() + "]").attr("novalidate", "novalidate");
                n.S(r).each(function(e, t) {
                    n.events(t)
                })
            }
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.alert = {
            name: "alert",
            version: "5.5.2",
            settings: {
                callback: function() {}
            },
            init: function(e, t, n) {
                this.bindings(t, n)
            },
            events: function() {
                var t = this,
                    n = this.S;
                e(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(e) {
                    var r = n(this).closest("[" + t.attr_name() + "]"),
                        i = r.data(t.attr_name(!0) + "-init") || t.settings;
                    e.preventDefault(), Modernizr.csstransitions ? (r.addClass("alert-close"), r.on("transitionend webkitTransitionEnd oTransitionEnd", function(e) {
                        n(this).trigger("close.fndtn.alert").remove(), i.callback()
                    })) : r.fadeOut(300, function() {
                        n(this).trigger("close.fndtn.alert").remove(), i.callback()
                    })
                })
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.5.2",
            settings: {
                active_class: "open",
                disabled_class: "disabled",
                mega_class: "mega",
                align: "bottom",
                is_hover: !1,
                hover_timeout: 150,
                opened: function() {},
                closed: function() {}
            },
            init: function(t, n, r) {
                Foundation.inherit(this, "throttle"), e.extend(!0, this.settings, n, r), this.bindings(n, r)
            },
            events: function(r) {
                var i = this,
                    a = i.S;
                a(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(t) {
                    var n = a(this).data(i.attr_name(!0) + "-init") || i.settings;
                    n.is_hover && !Modernizr.touch || (t.preventDefault(), a(this).parent("[data-reveal-id]").length && t.stopPropagation(), i.toggle(e(this)))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(e) {
                    var t, n, r = a(this);
                    clearTimeout(i.timeout), r.data(i.data_attr()) ? (t = a("#" + r.data(i.data_attr())), n = r) : (t = r, n = a("[" + i.attr_name() + '="' + t.attr("id") + '"]'));
                    var o = n.data(i.attr_name(!0) + "-init") || i.settings;
                    a(e.currentTarget).data(i.data_attr()) && o.is_hover && i.closeall.call(i), o.is_hover && i.open.apply(i, [t, n])
                }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(e) {
                    var t, n = a(this);
                    if (n.data(i.data_attr())) t = n.data(i.data_attr(!0) + "-init") || i.settings;
                    else var r = a("[" + i.attr_name() + '="' + a(this).attr("id") + '"]'),
                        t = r.data(i.attr_name(!0) + "-init") || i.settings;
                    i.timeout = setTimeout(function() {
                        n.data(i.data_attr()) ? t.is_hover && i.close.call(i, a("#" + n.data(i.data_attr()))) : t.is_hover && i.close.call(i, n)
                    }.bind(this), t.hover_timeout)
                }).on("click.fndtn.dropdown", function(t) {
                    var r = a(t.target).closest("[" + i.attr_name() + "-content]"),
                        o = r.find("a");
                    if (o.length > 0 && "false" !== r.attr("aria-autoclose") && i.close.call(i, a("[" + i.attr_name() + "-content]")), (t.target === n || e.contains(n.documentElement, t.target)) && !(a(t.target).closest("[" + i.attr_name() + "]").length > 0)) return !a(t.target).data("revealId") && r.length > 0 && (a(t.target).is("[" + i.attr_name() + "-content]") || e.contains(r.first()[0], t.target)) ? void t.stopPropagation() : void i.close.call(i, a("[" + i.attr_name() + "-content]"))
                }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                    i.settings.opened.call(this)
                }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                    i.settings.closed.call(this)
                }), a(t).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function() {
                    i.resize.call(i)
                }, 50)), this.resize()
            },
            close: function(t) {
                var n = this;
                t.each(function(r) {
                    var i = e("[" + n.attr_name() + "=" + t[r].id + "]") || e("aria-controls=" + t[r].id + "]");
                    i.attr("aria-expanded", "false"), n.S(this).hasClass(n.settings.active_class) && (n.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(n.settings.active_class).prev("[" + n.attr_name() + "]").removeClass(n.settings.active_class).removeData("target"), n.S(this).trigger("closed.fndtn.dropdown", [t]))
                }), t.removeClass("f-open-" + this.attr_name(!0))
            },
            closeall: function() {
                var t = this;
                e.each(t.S(".f-open-" + this.attr_name(!0)), function() {
                    t.close.call(t, t.S(this))
                })
            },
            open: function(e, t) {
                this.css(e.addClass(this.settings.active_class), t), e.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), e.data("target", t.get(0)).trigger("opened.fndtn.dropdown", [e, t]), e.attr("aria-hidden", "false"), t.attr("aria-expanded", "true"), e.focus(), e.addClass("f-open-" + this.attr_name(!0))
            },
            data_attr: function() {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function(e) {
                if (!e.hasClass(this.settings.disabled_class)) {
                    var t = this.S("#" + e.data(this.data_attr()));
                    0 !== t.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(t)), t.hasClass(this.settings.active_class) ? (this.close.call(this, t), t.data("target") !== e.get(0) && this.open.call(this, t, e)) : this.open.call(this, t, e))
                }
            },
            resize: function() {
                var t = this.S("[" + this.attr_name() + "-content].open"),
                    n = e(t.data("target"));
                t.length && n.length && this.css(t, n)
            },
            css: function(e, t) {
                var n = Math.max((t.width() - e.width()) / 2, 8),
                    r = t.data(this.attr_name(!0) + "-init") || this.settings,
                    i = e.parent().css("overflow-y") || e.parent().css("overflow");
                if (this.clear_idx(), this.small()) {
                    var a = this.dirs.bottom.call(e, t, r);
                    e.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: a.top
                    }), e.css(Foundation.rtl ? "right" : "left", n)
                } else if ("visible" !== i) {
                    var o = t[0].offsetTop + t[0].offsetHeight;
                    e.attr("style", "").css({
                        position: "absolute",
                        top: o
                    }), e.css(Foundation.rtl ? "right" : "left", n)
                } else this.style(e, t, r);
                return e
            },
            style: function(t, n, r) {
                var i = e.extend({
                    position: "absolute"
                }, this.dirs[r.align].call(t, n, r));
                t.attr("style", "").css(i)
            },
            dirs: {
                _base: function(e) {
                    var r = this.offsetParent(),
                        i = r.offset(),
                        a = e.offset();
                    a.top -= i.top, a.left -= i.left, a.missRight = !1, a.missTop = !1, a.missLeft = !1, a.leftRightFlag = !1;
                    var o;
                    o = n.getElementsByClassName("row")[0] ? n.getElementsByClassName("row")[0].clientWidth : t.innerWidth;
                    var s = (t.innerWidth - o) / 2,
                        u = o;
                    return this.hasClass("mega") || (e.offset().top <= this.outerHeight() && (a.missTop = !0, u = t.innerWidth - s, a.leftRightFlag = !0), e.offset().left + this.outerWidth() > e.offset().left + s && e.offset().left - s > this.outerWidth() && (a.missRight = !0, a.missLeft = !1), e.offset().left - this.outerWidth() <= 0 && (a.missLeft = !0, a.missRight = !1)), a
                },
                top: function(e, t) {
                    var n = Foundation.libs.dropdown,
                        r = n.dirs._base.call(this, e);
                    return this.addClass("drop-top"), 1 == r.missTop && (r.top = r.top + e.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == r.missRight && (r.left = r.left - this.outerWidth() + e.outerWidth()), (e.outerWidth() < this.outerWidth() || n.small() || this.hasClass(t.mega_menu)) && n.adjust_pip(this, e, t, r), Foundation.rtl ? {
                        left: r.left - this.outerWidth() + e.outerWidth(),
                        top: r.top - this.outerHeight()
                    } : {
                        left: r.left,
                        top: r.top - this.outerHeight()
                    }
                },
                bottom: function(e, t) {
                    var n = Foundation.libs.dropdown,
                        r = n.dirs._base.call(this, e);
                    return 1 == r.missRight && (r.left = r.left - this.outerWidth() + e.outerWidth()), (e.outerWidth() < this.outerWidth() || n.small() || this.hasClass(t.mega_menu)) && n.adjust_pip(this, e, t, r), n.rtl ? {
                        left: r.left - this.outerWidth() + e.outerWidth(),
                        top: r.top + e.outerHeight()
                    } : {
                        left: r.left,
                        top: r.top + e.outerHeight()
                    }
                },
                left: function(e, t) {
                    var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                    return this.addClass("drop-left"), 1 == n.missLeft && (n.left = n.left + this.outerWidth(), n.top = n.top + e.outerHeight(), this.removeClass("drop-left")), {
                        left: n.left - this.outerWidth(),
                        top: n.top
                    }
                },
                right: function(e, t) {
                    var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                    this.addClass("drop-right"), 1 == n.missRight ? (n.left = n.left - this.outerWidth(), n.top = n.top + e.outerHeight(), this.removeClass("drop-right")) : n.triggeredRight = !0;
                    var r = Foundation.libs.dropdown;
                    return (e.outerWidth() < this.outerWidth() || r.small() || this.hasClass(t.mega_menu)) && r.adjust_pip(this, e, t, n), {
                        left: n.left + e.outerWidth(),
                        top: n.top
                    }
                }
            },
            adjust_pip: function(e, t, n, r) {
                var i = Foundation.stylesheet,
                    a = 8;
                e.hasClass(n.mega_class) ? a = r.left + t.outerWidth() / 2 - 8 : this.small() && (a += r.left - 8), this.rule_idx = i.cssRules.length;
                var o = ".f-dropdown.open:before",
                    s = ".f-dropdown.open:after",
                    u = "left: " + a + "px;",
                    m = "left: " + (a - 1) + "px;";
                1 == r.missRight && (a = e.outerWidth() - 23, o = ".f-dropdown.open:before", s = ".f-dropdown.open:after", u = "left: " + a + "px;", m = "left: " + (a - 1) + "px;"), 1 == r.triggeredRight && (o = ".f-dropdown.open:before", s = ".f-dropdown.open:after", u = "left:-12px;", m = "left:-14px;"), i.insertRule ? (i.insertRule([o, "{", u, "}"].join(" "), this.rule_idx), i.insertRule([s, "{", m, "}"].join(" "), this.rule_idx + 1)) : (i.addRule(o, u, this.rule_idx), i.addRule(s, m, this.rule_idx + 1))
            },
            clear_idx: function() {
                var e = Foundation.stylesheet;
                "undefined" != typeof this.rule_idx && (e.deleteRule(this.rule_idx), e.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function() {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(t).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.5.2",
            settings: {
                use_tallest: !0,
                before_height_change: e.noop,
                after_height_change: e.noop,
                equalize_on_stack: !1,
                act_on_hidden_el: !1
            },
            init: function(e, t, n) {
                Foundation.inherit(this, "image_loaded"), this.bindings(t, n), this.reflow()
            },
            events: function() {
                this.S(t).off(".equalizer").on("resize.fndtn.equalizer", function(e) {
                    this.reflow()
                }.bind(this))
            },
            equalize: function(t) {
                var n, r, i = !1,
                    a = t.data("equalizer"),
                    o = t.data(this.attr_name(!0) + "-init") || this.settings;
                if (n = o.act_on_hidden_el ? a ? t.find("[" + this.attr_name() + '-watch="' + a + '"]') : t.find("[" + this.attr_name() + "-watch]") : a ? t.find("[" + this.attr_name() + '-watch="' + a + '"]:visible') : t.find("[" + this.attr_name() + "-watch]:visible"), 0 !== n.length && (o.before_height_change(), t.trigger("before-height-change.fndth.equalizer"), n.height("inherit"), o.equalize_on_stack !== !1 || (r = n.first().offset().top, n.each(function() {
                        if (e(this).offset().top !== r) return i = !0, !1
                    }), !i))) {
                    var s = n.map(function() {
                        return e(this).outerHeight(!1)
                    }).get();
                    if (o.use_tallest) {
                        var u = Math.max.apply(null, s);
                        n.css("height", u)
                    } else {
                        var m = Math.min.apply(null, s);
                        n.css("height", m)
                    }
                    o.after_height_change(), t.trigger("after-height-change.fndtn.equalizer")
                }
            },
            reflow: function() {
                var t = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var n = e(this),
                        r = n.data("equalizer-mq"),
                        i = !0;
                    r && (r = "is_" + r.replace(/-/g, "_"), Foundation.utils.hasOwnProperty(r) && (i = !1)), t.image_loaded(t.S("img", this), function() {
                        if (i || Foundation.utils[r]()) t.equalize(n);
                        else {
                            var e = n.find("[" + t.attr_name() + "-watch]:visible");
                            e.css("height", "auto")
                        }
                    })
                })
            }
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.5.2",
            defaults: {
                expose: !1,
                modal: !0,
                keyboard: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                prev_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                abort_on_close: !0,
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function() {},
                post_step_callback: function() {},
                pre_step_callback: function() {},
                pre_ride_callback: function() {},
                post_expose_callback: function() {},
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function(t, n, r) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || e.extend({}, this.defaults, r || n), this.bindings(n, r)
            },
            go_next: function() {
                this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            },
            go_prev: function() {
                this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
            },
            events: function() {
                var n = this;
                e(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(e) {
                    e.preventDefault(), this.go_next()
                }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(e) {
                    e.preventDefault(), this.go_prev()
                }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(e) {
                    e.preventDefault(), this.end(this.settings.abort_on_close)
                }.bind(this)).on("keyup.fndtn.joyride", function(e) {
                    if (this.settings.keyboard && this.settings.riding) switch (e.which) {
                        case 39:
                            e.preventDefault(), this.go_next();
                            break;
                        case 37:
                            e.preventDefault(), this.go_prev();
                            break;
                        case 27:
                            e.preventDefault(), this.end(this.settings.abort_on_close)
                    }
                }.bind(this)), e(t).off(".joyride").on("resize.fndtn.joyride", n.throttle(function() {
                    if (e("[" + n.attr_name() + "]").length > 0 && n.settings.$next_tip && n.settings.riding) {
                        if (n.settings.exposed.length > 0) {
                            var t = e(n.settings.exposed);
                            t.each(function() {
                                var t = e(this);
                                n.un_expose(t), n.expose(t)
                            })
                        }
                        n.is_phone() ? n.pos_phone() : n.pos_default(!1)
                    }
                }, 100))
            },
            start: function() {
                var t = this,
                    n = e("[" + this.attr_name() + "]", this.scope),
                    r = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    i = r.length;
                !n.length > 0 || (this.settings.init || this.events(), this.settings = n.data(this.attr_name(!0) + "-init"), this.settings.$content_el = n, this.settings.$body = e(this.settings.tip_container), this.settings.body_offset = e(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof e.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !e.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(n) {
                    var a = e(this);
                    this.settings = e.extend({}, t.defaults, t.data_options(a));
                    for (var o = i; o--;) t.settings[r[o]] = parseInt(t.settings[r[o]], 10);
                    t.create({
                        $li: a,
                        index: n
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
            },
            resume: function() {
                this.set_li(), this.show()
            },
            tip_template: function(t) {
                var n, r;
                return t.tip_class = t.tip_class || "", n = e(this.settings.template.tip).addClass(t.tip_class), r = e.trim(e(t.li).html()) + this.prev_button_text(t.prev_button_text, t.index) + this.button_text(t.button_text) + this.settings.template.link + this.timer_instance(t.index), n.append(e(this.settings.template.wrapper)), n.first().attr(this.add_namespace("data-index"), t.index), e(".joyride-content-wrapper", n).append(r), n[0]
            },
            timer_instance: function(t) {
                var n;
                return n = 0 === t && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : e(this.settings.template.timer)[0].outerHTML
            },
            button_text: function(t) {
                return this.settings.tip_settings.next_button ? (t = e.trim(t) || "Next", t = e(this.settings.template.button).append(t)[0].outerHTML) : t = "", t
            },
            prev_button_text: function(t, n) {
                return this.settings.tip_settings.prev_button ? (t = e.trim(t) || "Previous", t = 0 == n ? e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML : e(this.settings.template.prev_button).append(t)[0].outerHTML) : t = "", t
            },
            create: function(t) {
                this.settings.tip_settings = e.extend({}, this.settings, this.data_options(t.$li));
                var n = t.$li.attr(this.add_namespace("data-button")) || t.$li.attr(this.add_namespace("data-text")),
                    r = t.$li.attr(this.add_namespace("data-button-prev")) || t.$li.attr(this.add_namespace("data-prev-text")),
                    i = t.$li.attr("class"),
                    a = e(this.tip_template({
                        tip_class: i,
                        index: t.index,
                        button_text: n,
                        prev_button_text: r,
                        li: t.$li
                    }));
                e(this.settings.tip_container).append(a)
            },
            show: function(t, n) {
                var i = null;
                if (this.settings.$li === r || e.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)
                    if (this.settings.paused ? this.settings.paused = !1 : this.set_li(t, n), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                        if (t && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = e.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
                            var a = e(".joyride-modal-bg");
                            /pop/i.test(this.settings.tipAnimation) ? a.hide() : a.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
                        }
                        this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), i = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                            i.animate({
                                width: i.parent().width()
                            }, this.settings.timer, "linear")
                        }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                            i.animate({
                                width: i.parent().width()
                            }, this.settings.timer, "linear")
                        }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
                    } else this.settings.$li && this.settings.$target.length < 1 ? this.show(t, n) : this.end();
                else this.settings.paused = !0
            },
            is_phone: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function() {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || e(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(e.proxy(function() {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function(e, t) {
                e ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (t ? this.settings.$li = this.settings.$li.prev() : this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function() {
                this.settings.$next_tip = e(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function() {
                var t = this.settings.$li.attr(this.add_namespace("data-class")),
                    r = this.settings.$li.attr(this.add_namespace("data-id")),
                    i = function() {
                        return r ? e(n.getElementById(r)) : t ? e("." + t).first() : e("body")
                    };
                this.settings.$target = i()
            },
            scroll_to: function() {
                var n, r;
                n = e(t).height() / 2, r = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), 0 != r && e("html, body").stop().animate({
                    scrollTop: r
                }, this.settings.scroll_speed, "swing")
            },
            paused: function() {
                return e.inArray(this.settings.$li.index() + 1, this.settings.pause_after) === -1
            },
            restart: function() {
                this.hide(), this.settings.$li = r, this.show("init")
            },
            pos_default: function(e) {
                var t = this.settings.$next_tip.find(".joyride-nub"),
                    n = Math.ceil(t.outerWidth() / 2),
                    r = Math.ceil(t.outerHeight() / 2),
                    i = e || !1;
                if (i && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(t);
                else {
                    var a = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                        o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                    this.bottom() ? (this.rtl ? this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + r + this.settings.$target.outerHeight() + a,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                    }) : this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + r + this.settings.$target.outerHeight() + a,
                        left: this.settings.$target.offset().left + o
                    }), this.nub_position(t, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - r + a,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                    }) : this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - r + a,
                        left: this.settings.$target.offset().left + o
                    }), this.nub_position(t, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + a,
                        left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + n + o
                    }), this.nub_position(t, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + a,
                        left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - n + o
                    }), this.nub_position(t, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
                }
                i && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function(t) {
                var n = this.settings.$next_tip.outerHeight(),
                    r = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                    i = e(".joyride-nub", this.settings.$next_tip),
                    a = Math.ceil(i.outerHeight() / 2),
                    o = t || !1;
                i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(i) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - n - a
                }), i.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + r + a
                }), i.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function(e) {
                this.center(), e.hide(), this.show_modal()
            },
            show_modal: function() {
                if (!this.settings.$next_tip.data("closed")) {
                    var t = e(".joyride-modal-bg");
                    if (t.length < 1) {
                        var t = e(this.settings.template.modal);
                        t.appendTo("body")
                    }
                    /pop/i.test(this.settings.tip_animation) ? t.show() : t.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function() {
                var n, r, i, a, o, s = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof e) i = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    i = this.settings.$target
                }
                return i.length < 1 ? (t.console && console.error("element not valid", i), !1) : (n = e(this.settings.template.expose), this.settings.$body.append(n), n.css({
                    top: i.offset().top,
                    left: i.offset().left,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0)
                }), r = e(this.settings.template.expose_cover), a = {
                    zIndex: i.css("z-index"),
                    position: i.css("position")
                }, o = null == i.attr("class") ? "" : i.attr("class"), i.css("z-index", parseInt(n.css("z-index")) + 1), "static" == a.position && i.css("position", "relative"), i.data("expose-css", a), i.data("orig-class", o), i.attr("class", o + " " + this.settings.expose_add_class), r.css({
                    top: i.offset().top,
                    left: i.offset().left,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(r), n.addClass(s), r.addClass(s), i.data("expose", s), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, i), void this.add_exposed(i))
            },
            un_expose: function() {
                var n, r, i, a, o, s = !1;
                if (arguments.length > 0 && arguments[0] instanceof e) r = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    r = this.settings.$target
                }
                return r.length < 1 ? (t.console && console.error("element not valid", r), !1) : (n = r.data("expose"), i = e("." + n), arguments.length > 1 && (s = arguments[1]), s === !0 ? e(".joyride-expose-wrapper,.joyride-expose-cover").remove() : i.remove(), a = r.data("expose-css"), "auto" == a.zIndex ? r.css("z-index", "") : r.css("z-index", a.zIndex), a.position != r.css("position") && ("static" == a.position ? r.css("position", "") : r.css("position", a.position)), o = r.data("orig-class"), r.attr("class", o), r.removeData("orig-classes"), r.removeData("expose"), r.removeData("expose-z-index"), void this.remove_exposed(r))
            },
            add_exposed: function(t) {
                this.settings.exposed = this.settings.exposed || [], t instanceof e || "object" == typeof t ? this.settings.exposed.push(t[0]) : "string" == typeof t && this.settings.exposed.push(t)
            },
            remove_exposed: function(t) {
                var n, r;
                for (t instanceof e ? n = t[0] : "string" == typeof t && (n = t), this.settings.exposed = this.settings.exposed || [], r = this.settings.exposed.length; r--;)
                    if (this.settings.exposed[r] == n) return void this.settings.exposed.splice(r, 1)
            },
            center: function() {
                var n = e(t);
                return this.settings.$next_tip.css({
                    top: (n.height() - this.settings.$next_tip.outerHeight()) / 2 + n.scrollTop(),
                    left: (n.width() - this.settings.$next_tip.outerWidth()) / 2 + n.scrollLeft()
                }), !0
            },
            bottom: function() {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function() {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function() {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function() {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function(n) {
                var r = e(t),
                    i = r.height() / 2,
                    a = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()),
                    o = r.width() + r.scrollLeft(),
                    s = r.height() + a,
                    u = r.height() + r.scrollTop(),
                    m = r.scrollTop();
                return a < m && (m = a < 0 ? 0 : a), s > u && (u = s), [n.offset().top < m, o < n.offset().left + n.outerWidth(), u < n.offset().top + n.outerHeight(), r.scrollLeft() > n.offset().left]
            },
            visible: function(e) {
                for (var t = e.length; t--;)
                    if (e[t]) return !1;
                return !0
            },
            nub_position: function(e, t, n) {
                "auto" === t ? e.addClass(n) : e.addClass(t)
            },
            startTimer: function() {
                this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function(t) {
                this.settings.cookie_monster && e.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), e(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, e(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), "undefined" != typeof t && t !== !1 || (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), e(".joyride-tip-guide").remove()
            },
            off: function() {
                e(this.scope).off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";

        function i(e) {
            var t = /fade/i.test(e),
                n = /pop/i.test(e);
            return {
                animate: t || n,
                pop: n,
                fade: t
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.5.2",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                multiple_opened: !1,
                bg_class: "reveal-modal-bg",
                root_element: "body",
                open: function() {},
                opened: function() {},
                close: function() {},
                closed: function() {},
                on_ajax_error: e.noop,
                bg: e(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function(t, n, r) {
                e.extend(!0, this.settings, n, r), this.bindings(n, r)
            },
            events: function(e) {
                var t = this,
                    r = t.S;
                return r(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(e) {
                    if (e.preventDefault(), !t.locked) {
                        var n = r(this),
                            i = n.data(t.data_attr("reveal-ajax")),
                            a = n.data(t.data_attr("reveal-replace-content"));
                        if (t.locked = !0, "undefined" == typeof i) t.open.call(t, n);
                        else {
                            var o = i === !0 ? n.attr("href") : i;
                            t.open.call(t, n, {
                                url: o
                            }, {
                                replaceContentSel: a
                            })
                        }
                    }
                }), r(n).on("click.fndtn.reveal", this.close_targets(), function(e) {
                    if (e.preventDefault(), !t.locked) {
                        var n = r("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init") || t.settings,
                            i = r(e.target)[0] === r("." + n.bg_class)[0];
                        if (i) {
                            if (!n.close_on_background_click) return;
                            e.stopPropagation()
                        }
                        t.locked = !0, t.close.call(t, i ? r("[" + t.attr_name() + "].open:not(.toback)") : r(this).closest("[" + t.attr_name() + "]"))
                    }
                }), r("[" + t.attr_name() + "]", this.scope).length > 0 ? r(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : r(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function(e) {
                var t = this;
                return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                    var n = t.S("[" + t.attr_name() + "].open"),
                        r = n.data(t.attr_name(!0) + "-init") || t.settings;
                    r && 27 === e.which && r.close_on_esc && !t.locked && t.close.call(t, n)
                }), !0
            },
            key_up_off: function(e) {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function(n, r) {
                var i, a = this;
                n ? "undefined" != typeof n.selector ? i = a.S("#" + n.data(a.data_attr("reveal-id"))).first() : (i = a.S(this.scope), r = n) : i = a.S(this.scope);
                var o = i.data(a.attr_name(!0) + "-init");
                if (o = o || this.settings, i.hasClass("open") && n.attr("data-reveal-id") == i.attr("id")) return a.close(i);
                if (!i.hasClass("open")) {
                    var s = a.S("[" + a.attr_name() + "].open");
                    if ("undefined" == typeof i.data("css-top") && i.data("css-top", parseInt(i.css("top"), 10)).data("offset", this.cache_offset(i)), i.attr("tabindex", "0").attr("aria-hidden", "false"), this.key_up_on(i), i.on("open.fndtn.reveal", function(e) {
                            "fndtn.reveal" !== e.namespace
                        }), i.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), s.length < 1 && this.toggle_bg(i, !0), "string" == typeof r && (r = {
                            url: r
                        }), "undefined" != typeof r && r.url) {
                        var u = "undefined" != typeof r.success ? r.success : null;
                        e.extend(r, {
                            success: function(t, n, r) {
                                if (e.isFunction(u)) {
                                    var m = u(t, n, r);
                                    "string" == typeof m && (t = m)
                                }
                                "undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? i.find(options.replaceContentSel).html(t) : i.html(t), a.S(i).foundation("section", "reflow"), a.S(i).children().foundation(), s.length > 0 && (o.multiple_opened ? a.to_back(s) : a.hide(s, o.css.close)), a.show(i, o.css.open)
                            }
                        }), o.on_ajax_error !== e.noop && e.extend(r, {
                            error: o.on_ajax_error
                        }), e.ajax(r)
                    } else s.length > 0 && (o.multiple_opened ? a.to_back(s) : a.hide(s, o.css.close)), this.show(i, o.css.open)
                }
                a.S(t).trigger("resize")
            },
            close: function(t) {
                var t = t && t.length ? t : this.S(this.scope),
                    n = this.S("[" + this.attr_name() + "].open"),
                    r = t.data(this.attr_name(!0) + "-init") || this.settings,
                    i = this;
                n.length > 0 && (t.removeAttr("tabindex", "0").attr("aria-hidden", "true"), this.locked = !0, this.key_up_off(t), t.trigger("close.fndtn.reveal"), (r.multiple_opened && 1 === n.length || !r.multiple_opened || t.length > 1) && (i.toggle_bg(t, !1), i.to_front(t)), r.multiple_opened ? (i.hide(t, r.css.close, r), i.to_front(e(e.makeArray(n).reverse()[1]))) : i.hide(n, r.css.close, r))
            },
            close_targets: function() {
                var e = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? e + ", ." + this.settings.bg_class : e
            },
            toggle_bg: function(t, n) {
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = e("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide());
                var i = this.settings.bg.filter(":visible").length > 0;
                n != i && ((n == r ? i : !n) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
            },
            show: function(n, r) {
                if (r) {
                    var a = n.data(this.attr_name(!0) + "-init") || this.settings,
                        o = a.root_element,
                        s = this;
                    if (0 === n.parent(o).length) {
                        var u = n.wrap('<div style="display: none;" />').parent();
                        n.on("closed.fndtn.reveal.wrapped", function() {
                            n.detach().appendTo(u), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), n.detach().appendTo(o)
                    }
                    var m = i(a.animation);
                    if (m.animate || (this.locked = !1), m.pop) {
                        r.top = e(t).scrollTop() - n.data("offset") + "px";
                        var c = {
                            top: e(t).scrollTop() + n.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return n.css(r).animate(c, a.animation_speed, "linear", function() {
                                s.locked = !1, n.trigger("opened.fndtn.reveal")
                            }).addClass("open")
                        }, a.animation_speed / 2)
                    }
                    if (m.fade) {
                        r.top = e(t).scrollTop() + n.data("css-top") + "px";
                        var c = {
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return n.css(r).animate(c, a.animation_speed, "linear", function() {
                                s.locked = !1, n.trigger("opened.fndtn.reveal")
                            }).addClass("open")
                        }, a.animation_speed / 2)
                    }
                    return n.css(r).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened.fndtn.reveal")
                }
                var a = this.settings;
                return i(a.animation).fade ? n.fadeIn(a.animation_speed / 2) : (this.locked = !1, n.show())
            },
            to_back: function(e) {
                e.addClass("toback")
            },
            to_front: function(e) {
                e.removeClass("toback")
            },
            hide: function(n, r) {
                if (r) {
                    var a = n.data(this.attr_name(!0) + "-init"),
                        o = this;
                    a = a || this.settings;
                    var s = i(a.animation);
                    if (s.animate || (this.locked = !1), s.pop) {
                        var u = {
                            top: -e(t).scrollTop() - n.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return n.animate(u, a.animation_speed, "linear", function() {
                                o.locked = !1, n.css(r).trigger("closed.fndtn.reveal")
                            }).removeClass("open")
                        }, a.animation_speed / 2)
                    }
                    if (s.fade) {
                        var u = {
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return n.animate(u, a.animation_speed, "linear", function() {
                                o.locked = !1, n.css(r).trigger("closed.fndtn.reveal")
                            }).removeClass("open")
                        }, a.animation_speed / 2)
                    }
                    return n.hide().css(r).removeClass("open").trigger("closed.fndtn.reveal")
                }
                var a = this.settings;
                return i(a.animation).fade ? n.fadeOut(a.animation_speed / 2) : n.hide()
            },
            close_video: function(t) {
                var n = e(".flex-video", t.target),
                    r = e("iframe", n);
                r.length > 0 && (r.attr("data-src", r[0].src), r.attr("src", r.attr("src")), n.hide())
            },
            open_video: function(t) {
                var n = e(".flex-video", t.target),
                    i = n.find("iframe");
                if (i.length > 0) {
                    var a = i.attr("data-src");
                    if ("string" == typeof a) i[0].src = i.attr("data-src");
                    else {
                        var o = i[0].src;
                        i[0].src = r, i[0].src = o
                    }
                    n.show()
                }
            },
            data_attr: function(e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            cache_offset: function(e) {
                var t = e.show().height() + parseInt(e.css("top"), 10) + e.scrollY;
                return e.hide(), t
            },
            off: function() {
                e(this.scope).off(".fndtn.reveal")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.tab = {
            name: "tab",
            version: "5.5.2",
            settings: {
                active_class: "active",
                callback: function() {},
                deep_linking: !1,
                scroll_to_content: !0,
                is_hover: !1
            },
            default_tab_hashes: [],
            init: function(e, n, r) {
                var i = this,
                    a = this.S;
                a("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                    i.default_tab_hashes.push(this.hash)
                }), i.entry_location = t.location.href, this.bindings(n, r), this.handle_location_hash_change()
            },
            events: function() {
                var e = this,
                    n = this.S,
                    r = function(t, r) {
                        var i = n(r).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                        i.is_hover && !Modernizr.touch || (t.preventDefault(), t.stopPropagation(), e.toggle_active_tab(n(r).parent()))
                    };
                n(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(e) {
                    var t = this,
                        n = e.keyCode || e.which;
                    9 == n && (e.preventDefault(), r(e, t))
                }).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(e) {
                    var t = this;
                    r(e, t)
                }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                    var r = n(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                    r.is_hover && e.toggle_active_tab(n(this).parent())
                }), n(t).on("hashchange.fndtn.tab", function(t) {
                    t.preventDefault(), e.handle_location_hash_change()
                })
            },
            handle_location_hash_change: function() {
                var t = this,
                    n = this.S;
                n("[" + this.attr_name() + "]", this.scope).each(function() {
                    var i = n(this).data(t.attr_name(!0) + "-init");
                    if (i.deep_linking) {
                        var a;
                        if (a = i.scroll_to_content ? t.scope.location.hash : t.scope.location.hash.replace("fndtn-", ""), "" != a) {
                            var o = n(a);
                            if (o.hasClass("content") && o.parent().hasClass("tabs-content")) t.toggle_active_tab(e("[" + t.attr_name() + "] > * > a[href=" + a + "]").parent());
                            else {
                                var s = o.closest(".content").attr("id");
                                s != r && t.toggle_active_tab(e("[" + t.attr_name() + "] > * > a[href=#" + s + "]").parent(), a)
                            }
                        } else
                            for (var u = 0; u < t.default_tab_hashes.length; u++) t.toggle_active_tab(e("[" + t.attr_name() + "] > * > a[href=" + t.default_tab_hashes[u] + "]").parent())
                    }
                })
            },
            toggle_active_tab: function(i, a) {
                var o = this,
                    s = o.S,
                    u = i.closest("[" + this.attr_name() + "]"),
                    m = i.find("a"),
                    c = i.children("a").first(),
                    d = "#" + c.attr("href").split("#")[1],
                    l = s(d),
                    h = i.siblings(),
                    p = u.data(this.attr_name(!0) + "-init"),
                    y = function(t) {
                        var r, i = e(this),
                            a = e(this).parents("li").prev().children('[role="tab"]'),
                            o = e(this).parents("li").next().children('[role="tab"]');
                        switch (t.keyCode) {
                            case 37:
                                r = a;
                                break;
                            case 39:
                                r = o;
                                break;
                            default:
                                r = !1
                        }
                        r.length && (i.attr({
                            tabindex: "-1",
                            "aria-selected": null
                        }), r.attr({
                            tabindex: "0",
                            "aria-selected": !0
                        }).focus()), e('[role="tabpanel"]').attr("aria-hidden", "true"), e("#" + e(n.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                    },
                    f = function(e) {
                        var n = t.location.href === o.entry_location,
                            r = p.scroll_to_content ? o.default_tab_hashes[0] : n ? t.location.hash : "fndtn-" + o.default_tab_hashes[0].replace("#", "");
                        n && e === r || (t.location.hash = e)
                    };
                c.data("tab-content") && (d = "#" + c.data("tab-content").split("#")[1], l = s(d)), p.deep_linking && (p.scroll_to_content ? (f(a || d), a == r || a == d ? i.parent()[0].scrollIntoView() : s(d)[0].scrollIntoView()) : f(a != r ? "fndtn-" + a.replace("#", "") : "fndtn-" + d.replace("#", ""))), i.addClass(p.active_class).triggerHandler("opened"), m.attr({
                    "aria-selected": "true",
                    tabindex: 0
                }), h.removeClass(p.active_class), h.find("a").attr({
                    "aria-selected": "false",
                    tabindex: -1
                }), l.siblings().removeClass(p.active_class).attr({
                    "aria-hidden": "true",
                    tabindex: -1
                }), l.addClass(p.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), p.callback(i), l.triggerHandler("toggled", [l]), u.triggerHandler("toggled", [i]), m.off("keydown").on("keydown", y)
            },
            data_attr: function(e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.5.2",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                show_on: "all",
                tip_template: function(e, t) {
                    return '<span data-selector="' + e + '" id="' + e + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + t + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function(e, t, n) {
                Foundation.inherit(this, "random_str"), this.bindings(t, n)
            },
            should_show: function(t, n) {
                var r = e.extend({}, this.settings, this.data_options(t));
                return "all" === r.show_on || !(!this.small() || "small" !== r.show_on) || !(!this.medium() || "medium" !== r.show_on) || !(!this.large() || "large" !== r.show_on)
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            events: function(t) {
                function n(e, t, n) {
                    e.timer || (n ? (e.timer = null, i.showTip(t)) : e.timer = setTimeout(function() {
                        e.timer = null, i.showTip(t)
                    }.bind(e), i.settings.hover_delay))
                }

                function r(e, t) {
                    e.timer && (clearTimeout(e.timer), e.timer = null), i.hide(t)
                }
                var i = this,
                    a = i.S;
                i.create(this.S(t)), e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(t) {
                    var o = a(this),
                        s = e.extend({}, i.settings, i.data_options(o)),
                        u = !1;
                    if (Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && a(t.target).is("a")) return !1;
                    if (/mouse/i.test(t.type) && i.ie_touch(t)) return !1;
                    if (o.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && t.preventDefault(), i.hide(o);
                    else {
                        if (s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type)) return;
                        if (!s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && (t.preventDefault(), a(s.tooltip_class + ".open").hide(), u = !0, e(".open[" + i.attr_name() + "]").length > 0)) {
                            var m = a(e(".open[" + i.attr_name() + "]")[0]);
                            i.hide(m)
                        }
                        /enter|over/i.test(t.type) ? n(this, o) : "mouseout" === t.type || "mouseleave" === t.type ? r(this, o) : n(this, o, !0)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(t) {
                    return (!/mouse/i.test(t.type) || !i.ie_touch(t)) && void("touch" == e(this).data("tooltip-open-event-type") && "mouseleave" == t.type || ("mouse" == e(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(t.type) ? i.convert_to_touch(e(this)) : r(this, e(this))))
                }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function(e) {
                    r(this, a(this))
                })
            },
            ie_touch: function(e) {
                return !1
            },
            showTip: function(e) {
                var t = this.getTip(e);
                if (this.should_show(e, t)) return this.show(e)
            },
            getTip: function(t) {
                var n = this.selector(t),
                    r = e.extend({}, this.settings, this.data_options(t)),
                    i = null;
                return n && (i = this.S('span[data-selector="' + n + '"]' + r.tooltip_class)), "object" == typeof i && i
            },
            selector: function(e) {
                var t = e.attr(this.attr_name()) || e.attr("data-selector");
                return "string" != typeof t && (t = this.random_str(6), e.attr("data-selector", t).attr("aria-describedby", t)), t
            },
            create: function(n) {
                var r = this,
                    i = e.extend({}, this.settings, this.data_options(n)),
                    a = this.settings.tip_template;
                "string" == typeof i.tip_template && t.hasOwnProperty(i.tip_template) && (a = t[i.tip_template]);
                var o = e(a(this.selector(n), e("<div></div>").html(n.attr("title")).html())),
                    s = this.inheritable_classes(n);
                o.addClass(s).appendTo(i.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + i.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function(e) {
                    r.hide(n)
                })), n.removeAttr("title").attr("title", "")
            },
            reposition: function(t, n, r) {
                var i, a, o, s, u;
                if (n.css("visibility", "hidden").show(), i = t.data("width"), a = n.children(".nub"), o = a.outerHeight(), s = a.outerHeight(), this.small() ? n.css({
                        width: "100%"
                    }) : n.css({
                        width: i ? i : "auto"
                    }), u = function(e, t, n, r, i, a) {
                        return e.css({
                            top: t ? t : "auto",
                            bottom: r ? r : "auto",
                            left: i ? i : "auto",
                            right: n ? n : "auto"
                        }).end()
                    }, u(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left), this.small()) u(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, e(this.scope).width()), n.addClass("tip-override"), u(a, -o, "auto", "auto", t.offset().left);
                else {
                    var m = t.offset().left;
                    Foundation.rtl && (a.addClass("rtl"), m = t.offset().left + t.outerWidth() - n.outerWidth()), u(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", m), a.attr("style") && a.removeAttr("style"), n.removeClass("tip-override"), r && r.indexOf("tip-top") > -1 ? (Foundation.rtl && a.addClass("rtl"), u(n, t.offset().top - n.outerHeight(), "auto", "auto", m).removeClass("tip-override")) : r && r.indexOf("tip-left") > -1 ? (u(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left - n.outerWidth() - o).removeClass("tip-override"), a.removeClass("rtl")) : r && r.indexOf("tip-right") > -1 && (u(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + o).removeClass("tip-override"), a.removeClass("rtl"))
                }
                n.css("visibility", "visible").hide()
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            inheritable_classes: function(t) {
                var n = e.extend({}, this.settings, this.data_options(t)),
                    r = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(n.additional_inheritable_classes),
                    i = t.attr("class"),
                    a = i ? e.map(i.split(" "), function(t, n) {
                        if (e.inArray(t, r) !== -1) return t
                    }).join(" ") : "";
                return e.trim(a)
            },
            convert_to_touch: function(t) {
                var n = this,
                    r = n.getTip(t),
                    i = e.extend({}, n.settings, n.data_options(t));
                0 === r.find(".tap-to-close").length && (r.append('<span class="tap-to-close">' + i.touch_close_text + "</span>"), r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function(e) {
                    n.hide(t)
                })), t.data("tooltip-open-event-type", "touch")
            },
            show: function(e) {
                var t = this.getTip(e);
                "touch" == e.data("tooltip-open-event-type") && this.convert_to_touch(e), this.reposition(e, t, e.attr("class")), e.addClass("open"), t.fadeIn(150)
            },
            hide: function(e) {
                var t = this.getTip(e);
                t.fadeOut(150, function() {
                    t.find(".tap-to-close").remove(), t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), e.removeClass("open")
                })
            },
            off: function() {
                var t = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(n) {
                    e("[" + t.attr_name() + "]").eq(n).attr("title", e(this).text())
                }).remove()
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.5.2",
            settings: {
                index: 0,
                start_offset: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                mobile_show_parent_link: !0,
                is_hover: !0,
                scrolltop: !0,
                sticky_on: "all",
                dropdown_autoclose: !0
            },
            init: function(t, n, r) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var i = this;
                i.register_media("topbar", "foundation-mq-topbar"), this.bindings(n, r), i.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var t = e(this),
                        n = t.data(i.attr_name(!0) + "-init");
                    i.S("section, .top-bar-section", this), t.data("index", 0);
                    var r = t.parent();
                    r.hasClass("fixed") || i.is_sticky(t, r, n) ? (i.settings.sticky_class = n.sticky_class, i.settings.sticky_topbar = t, t.data("height", r.outerHeight()), t.data("stickyoffset", r.offset().top)) : t.data("height", t.outerHeight()), n.assembled || i.assemble(t), n.is_hover ? i.S(".has-dropdown", t).addClass("not-click") : i.S(".has-dropdown", t).removeClass("not-click"), i.add_custom_rule(".f-topbar-fixed { padding-top: " + t.data("height") + "px }"), r.hasClass("fixed") && i.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function(e, t, n) {
                var r = t.hasClass(n.sticky_class),
                    i = matchMedia(Foundation.media_queries.small).matches,
                    a = matchMedia(Foundation.media_queries.medium).matches,
                    o = matchMedia(Foundation.media_queries.large).matches;
                return !((!r || "all" !== n.sticky_on) && (!(r && this.small() && n.sticky_on.indexOf("small") !== -1 && i) || a || o) && (!(r && this.medium() && n.sticky_on.indexOf("medium") !== -1 && i && a) || o) && !(r && this.large() && n.sticky_on.indexOf("large") !== -1 && i && a && o))
            },
            toggle: function(n) {
                var r, i = this;
                r = n ? i.S(n).closest("[" + this.attr_name() + "]") : i.S("[" + this.attr_name() + "]");
                var a = r.data(this.attr_name(!0) + "-init"),
                    o = i.S("section, .top-bar-section", r);
                i.breakpoint() && (i.rtl ? (o.css({
                    right: "0%"
                }), e(">.name", o).css({
                    right: "100%"
                })) : (o.css({
                    left: "0%"
                }), e(">.name", o).css({
                    left: "100%"
                })), i.S("li.moved", o).removeClass("moved"), r.data("index", 0), r.toggleClass("expanded").css("height", "")), a.scrolltop ? r.hasClass("expanded") ? r.parent().hasClass("fixed") && (a.scrolltop ? (r.parent().removeClass("fixed"), r.addClass("fixed"), i.S("body").removeClass("f-topbar-fixed"), t.scrollTo(0, 0)) : r.parent().removeClass("expanded")) : r.hasClass("fixed") && (r.parent().addClass("fixed"), r.removeClass("fixed"), i.S("body").addClass("f-topbar-fixed")) : (i.is_sticky(r, r.parent(), a) && r.parent().addClass("fixed"), r.parent().hasClass("fixed") && (r.hasClass("expanded") ? (r.addClass("fixed"), r.parent().addClass("expanded"), i.S("body").addClass("f-topbar-fixed")) : (r.removeClass("fixed"), r.parent().removeClass("expanded"), i.update_sticky_positioning())))
            },
            timer: null,
            events: function(n) {
                var r = this,
                    i = this.S;
                i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(e) {
                    e.preventDefault(), r.toggle(this)
                }).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function(t) {
                    var n = e(this).closest("li"),
                        i = n.closest("[" + r.attr_name() + "]"),
                        a = i.data(r.attr_name(!0) + "-init");
                    if (a.dropdown_autoclose && a.is_hover) {
                        var o = e(this).closest(".hover");
                        o.removeClass("hover")
                    }!r.breakpoint() || n.hasClass("back") || n.hasClass("has-dropdown") || r.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(t) {
                    var n = i(this),
                        a = i(t.target),
                        o = n.closest("[" + r.attr_name() + "]"),
                        s = o.data(r.attr_name(!0) + "-init");
                    return a.data("revealId") ? void r.toggle() : void(r.breakpoint() || s.is_hover && !Modernizr.touch || (t.stopImmediatePropagation(), n.hasClass("hover") ? (n.removeClass("hover").find("li").removeClass("hover"), n.parents("li.hover").removeClass("hover")) : (n.addClass("hover"), e(n).siblings().removeClass("hover"), "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && t.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(e) {
                    if (r.breakpoint()) {
                        e.preventDefault();
                        var t = i(this),
                            n = t.closest("[" + r.attr_name() + "]"),
                            a = n.find("section, .top-bar-section"),
                            o = (t.next(".dropdown").outerHeight(), t.closest("li"));
                        n.data("index", n.data("index") + 1), o.addClass("moved"), r.rtl ? (a.css({
                            right: -(100 * n.data("index")) + "%"
                        }), a.find(">.name").css({
                            right: 100 * n.data("index") + "%"
                        })) : (a.css({
                            left: -(100 * n.data("index")) + "%"
                        }), a.find(">.name").css({
                            left: 100 * n.data("index") + "%"
                        })), n.css("height", t.siblings("ul").outerHeight(!0) + n.data("height"))
                    }
                }), i(t).off(".topbar").on("resize.fndtn.topbar", r.throttle(function() {
                    r.resize.call(r)
                }, 50)).trigger("resize.fndtn.topbar").load(function() {
                    i(this).trigger("resize.fndtn.topbar")
                }), i("body").off(".topbar").on("click.fndtn.topbar", function(e) {
                    var t = i(e.target).closest("li").closest("li.hover");
                    t.length > 0 || i("[" + r.attr_name() + "] li.hover").removeClass("hover")
                }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(e) {
                    e.preventDefault();
                    var t = i(this),
                        n = t.closest("[" + r.attr_name() + "]"),
                        a = n.find("section, .top-bar-section"),
                        o = (n.data(r.attr_name(!0) + "-init"), t.closest("li.moved")),
                        s = o.parent();
                    n.data("index", n.data("index") - 1), r.rtl ? (a.css({
                        right: -(100 * n.data("index")) + "%"
                    }), a.find(">.name").css({
                        right: 100 * n.data("index") + "%"
                    })) : (a.css({
                        left: -(100 * n.data("index")) + "%"
                    }), a.find(">.name").css({
                        left: 100 * n.data("index") + "%"
                    })), 0 === n.data("index") ? n.css("height", "") : n.css("height", s.outerHeight(!0) + n.data("height")), setTimeout(function() {
                        o.removeClass("moved")
                    }, 300)
                }), i(this.scope).find(".dropdown a").focus(function() {
                    e(this).parents(".has-dropdown").addClass("hover")
                }).blur(function() {
                    e(this).parents(".has-dropdown").removeClass("hover")
                })
            },
            resize: function() {
                var e = this;
                e.S("[" + this.attr_name() + "]").each(function() {
                    var t, r = e.S(this),
                        i = r.data(e.attr_name(!0) + "-init"),
                        a = r.parent("." + e.settings.sticky_class);
                    if (!e.breakpoint()) {
                        var o = r.hasClass("expanded");
                        r.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && e.toggle(r)
                    }
                    e.is_sticky(r, a, i) && (a.hasClass("fixed") ? (a.removeClass("fixed"), t = a.offset().top, e.S(n.body).hasClass("f-topbar-fixed") && (t -= r.data("height")), r.data("stickyoffset", t), a.addClass("fixed")) : (t = a.offset().top, r.data("stickyoffset", t)))
                })
            },
            breakpoint: function() {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function(t) {
                var n = this,
                    r = t.data(this.attr_name(!0) + "-init"),
                    i = n.S("section, .top-bar-section", t);
                i.detach(), n.S(".has-dropdown>a", i).each(function() {
                    var t, i = n.S(this),
                        a = i.siblings(".dropdown"),
                        o = i.attr("href");
                    a.find(".title.back").length || (t = e(1 == r.mobile_show_parent_link && o ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + o + '">' + i.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), 1 == r.custom_back_text ? e("h5>a", t).html(r.back_text) : e("h5>a", t).html("&laquo; " + i.html()), a.prepend(t))
                }), i.appendTo(t), this.sticky(), this.assembled(t)
            },
            assembled: function(t) {
                t.data(this.attr_name(!0), e.extend({}, t.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function(t) {
                var n = 0,
                    r = this;
                return e("> li", t).each(function() {
                    n += r.S(this).outerHeight(!0)
                }), n
            },
            sticky: function() {
                var e = this;
                this.S(t).on("scroll", function() {
                    e.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function() {
                var e = "." + this.settings.sticky_class,
                    n = this.S(t),
                    r = this;
                if (r.settings.sticky_topbar && r.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var i = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
                    r.S(e).hasClass("expanded") || (n.scrollTop() > i ? r.S(e).hasClass("fixed") || (r.S(e).addClass("fixed"), r.S("body").addClass("f-topbar-fixed")) : n.scrollTop() <= i && r.S(e).hasClass("fixed") && (r.S(e).removeClass("fixed"), r.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function() {
                this.S(this.scope).off(".fndtn.topbar"), this.S(t).off(".fndtn.topbar")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, t, n, r) {
        "use strict";
        var i = function() {},
            a = function(i, a) {
                if (i.hasClass(a.slides_container_class)) return this;
                var m, c, d, l, h, p, y = this,
                    f = i,
                    g = 0,
                    v = !1;
                y.slides = function() {
                    return f.children(a.slide_selector)
                }, y.slides().first().addClass(a.active_slide_class), y.update_slide_number = function(t) {
                    a.slide_number && (c.find("span:first").text(parseInt(t) + 1), c.find("span:last").text(y.slides().length)), a.bullets && (d.children().removeClass(a.bullets_active_class), e(d.children().get(t)).addClass(a.bullets_active_class))
                }, y.update_active_link = function(t) {
                    var n = e('[data-orbit-link="' + y.slides().eq(t).attr("data-orbit-slide") + '"]');
                    n.siblings().removeClass(a.bullets_active_class), n.addClass(a.bullets_active_class)
                }, y.build_markup = function() {
                    f.wrap('<div class="' + a.container_class + '"></div>'), m = f.parent(), f.addClass(a.slides_container_class), a.stack_on_small && m.addClass(a.stack_on_small_class), a.navigation_arrows && (m.append(e('<a href="#"><span></span></a>').addClass(a.prev_class)), m.append(e('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (l = e("<div>").addClass(a.timer_container_class), l.append("<span>"), l.append(e("<div>").addClass(a.timer_progress_class)), l.addClass(a.timer_paused_class), m.append(l)), a.slide_number && (c = e("<div>").addClass(a.slide_number_class), c.append("<span></span> " + a.slide_number_text + " <span></span>"), m.append(c)), a.bullets && (d = e("<ol>").addClass(a.bullets_container_class), m.append(d), d.wrap('<div class="orbit-bullets-container"></div>'), y.slides().each(function(t, n) {
                        var r = e("<li>").attr("data-orbit-slide", t).on("click", y.link_bullet);
                        d.append(r)
                    }))
                }, y._goto = function(t, n) {
                    if (t === g) return !1;
                    "object" == typeof p && p.restart();
                    var r = y.slides(),
                        i = "next";
                    if (v = !0, t < g && (i = "prev"), t >= r.length) {
                        if (!a.circular) return !1;
                        t = 0
                    } else if (t < 0) {
                        if (!a.circular) return !1;
                        t = r.length - 1
                    }
                    var o = e(r.get(g)),
                        s = e(r.get(t));
                    o.css("zIndex", 2), o.removeClass(a.active_slide_class), s.css("zIndex", 4).addClass(a.active_slide_class), f.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), y.update_active_link(t);
                    var u = function() {
                        var e = function() {
                            g = t, v = !1, n === !0 && (p = y.create_timer(), p.start()), y.update_slide_number(g), f.trigger("after-slide-change.fndtn.orbit", [{
                                slide_number: g,
                                total_slides: r.length
                            }]), a.after_slide_change(g, r.length)
                        };
                        f.outerHeight() != s.outerHeight() && a.variable_height ? f.animate({
                            height: s.outerHeight()
                        }, 250, "linear", e) : e()
                    };
                    if (1 === r.length) return u(), !1;
                    var m = function() {
                        "next" === i && h.next(o, s, u), "prev" === i && h.prev(o, s, u)
                    };
                    s.outerHeight() > f.outerHeight() && a.variable_height ? f.animate({
                        height: s.outerHeight()
                    }, 250, "linear", m) : m()
                }, y.next = function(e) {
                    e.stopImmediatePropagation(), e.preventDefault(), y._goto(g + 1)
                }, y.prev = function(e) {
                    e.stopImmediatePropagation(), e.preventDefault(), y._goto(g - 1)
                }, y.link_custom = function(t) {
                    t.preventDefault();
                    var n = e(this).attr("data-orbit-link");
                    if ("string" == typeof n && "" != (n = e.trim(n))) {
                        var r = m.find("[data-orbit-slide=" + n + "]");
                        r.index() != -1 && y._goto(r.index())
                    }
                }, y.link_bullet = function(t) {
                    var n = e(this).attr("data-orbit-slide");
                    if ("string" == typeof n && "" != (n = e.trim(n)))
                        if (isNaN(parseInt(n))) {
                            var r = m.find("[data-orbit-slide=" + n + "]");
                            r.index() != -1 && y._goto(r.index() + 1)
                        } else y._goto(parseInt(n))
                }, y.timer_callback = function() {
                    y._goto(g + 1, !0)
                }, y.compute_dimensions = function() {
                    var t = e(y.slides().get(g)),
                        n = t.outerHeight();
                    a.variable_height || y.slides().each(function() {
                        e(this).outerHeight() > n && (n = e(this).outerHeight())
                    }), f.height(n)
                }, y.create_timer = function() {
                    var e = new o(m.find("." + a.timer_container_class), a, y.timer_callback);
                    return e
                }, y.stop_timer = function() {
                    "object" == typeof p && p.stop()
                }, y.toggle_timer = function() {
                    var e = m.find("." + a.timer_container_class);
                    e.hasClass(a.timer_paused_class) ? ("undefined" == typeof p && (p = y.create_timer()), p.start()) : "object" == typeof p && p.stop()
                }, y.init = function() {
                    y.build_markup(), a.timer && (p = y.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), p.start)), h = new u(a, f), "slide" === a.animation && (h = new s(a, f)), m.on("click", "." + a.next_class, y.next), m.on("click", "." + a.prev_class, y.prev), a.next_on_click && m.on("click", "." + a.slides_container_class + " [data-orbit-slide]", y.link_bullet), m.on("click", y.toggle_timer), a.swipe && m.on("touchstart.fndtn.orbit", function(e) {
                        e.touches || (e = e.originalEvent);
                        var t = {
                            start_page_x: e.touches[0].pageX,
                            start_page_y: e.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: r
                        };
                        m.data("swipe-transition", t), e.stopPropagation()
                    }).on("touchmove.fndtn.orbit", function(e) {
                        if (e.touches || (e = e.originalEvent), !(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                            var t = m.data("swipe-transition");
                            if ("undefined" == typeof t && (t = {}), t.delta_x = e.touches[0].pageX - t.start_page_x, "undefined" == typeof t.is_scrolling && (t.is_scrolling = !!(t.is_scrolling || Math.abs(t.delta_x) < Math.abs(e.touches[0].pageY - t.start_page_y))), !t.is_scrolling && !t.active) {
                                e.preventDefault();
                                var n = t.delta_x < 0 ? g + 1 : g - 1;
                                t.active = !0, y._goto(n)
                            }
                        }
                    }).on("touchend.fndtn.orbit", function(e) {
                        m.data("swipe-transition", {}), e.stopPropagation()
                    }), m.on("mouseenter.fndtn.orbit", function(e) {
                        a.timer && a.pause_on_hover && y.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function(e) {
                        a.timer && a.resume_on_mouseout && p.start()
                    }), e(n).on("click", "[data-orbit-link]", y.link_custom), e(t).on("load resize", y.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), y.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                        m.prev("." + a.preloader_class).css("display", "none"), y.update_slide_number(0), y.update_active_link(0), f.trigger("ready.fndtn.orbit")
                    })
                }, y.init()
            },
            o = function(e, t, n) {
                var r, i, a = this,
                    o = t.timer_speed,
                    s = e.find("." + t.timer_progress_class),
                    u = -1;
                this.update_progress = function(e) {
                    var t = s.clone();
                    t.attr("style", ""), t.css("width", e + "%"), s.replaceWith(t), s = t
                }, this.restart = function() {
                    clearTimeout(i), e.addClass(t.timer_paused_class), u = -1, a.update_progress(0)
                }, this.start = function() {
                    return !e.hasClass(t.timer_paused_class) || (u = u === -1 ? o : u, e.removeClass(t.timer_paused_class), r = (new Date).getTime(), s.animate({
                        width: "100%"
                    }, u, "linear"), i = setTimeout(function() {
                        a.restart(), n()
                    }, u), void e.trigger("timer-started.fndtn.orbit"))
                }, this.stop = function() {
                    if (e.hasClass(t.timer_paused_class)) return !0;
                    clearTimeout(i), e.addClass(t.timer_paused_class);
                    var n = (new Date).getTime();
                    u -= n - r;
                    var s = 100 - u / o * 100;
                    a.update_progress(s), e.trigger("timer-stopped.fndtn.orbit")
                }
            },
            s = function(t, n) {
                var r = t.animation_speed,
                    i = 1 === e("html[dir=rtl]").length,
                    a = i ? "marginRight" : "marginLeft",
                    o = {};
                o[a] = "0%", this.next = function(e, t, n) {
                    e.animate({
                        marginLeft: "-100%"
                    }, r), t.animate(o, r, function() {
                        e.css(a, "100%"), n()
                    })
                }, this.prev = function(e, t, n) {
                    e.animate({
                        marginLeft: "100%"
                    }, r), t.css(a, "-100%"), t.animate(o, r, function() {
                        e.css(a, "100%"), n()
                    })
                }
            },
            u = function(t, n) {
                var r = t.animation_speed;
                1 === e("html[dir=rtl]").length, this.next = function(e, t, n) {
                    t.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), t.animate({
                        opacity: "1"
                    }, r, "linear", function() {
                        e.css("margin", "100%"), n()
                    })
                }, this.prev = function(e, t, n) {
                    t.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), t.animate({
                        opacity: "1"
                    }, r, "linear", function() {
                        e.css("margin", "100%"), n()
                    })
                }
            };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.5.2",
            settings: {
                animation: "slide",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                next_on_click: !0,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                preloader_class: "preloader",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: i,
                after_slide_change: i
            },
            init: function(e, t, n) {
                this.bindings(t, n)
            },
            events: function(e) {
                var t = new a(this.S(e), this.S(e).data("orbit-init"));
                this.S(e).data(this.name + "-instance", t)
            },
            reflow: function() {
                var e = this;
                if (e.S(e.scope).is("[data-orbit]")) {
                    var t = e.S(e.scope),
                        n = t.data(e.name + "-instance");
                    n.compute_dimensions()
                } else e.S("[data-orbit]", e.scope).each(function(t, n) {
                    var r = e.S(n),
                        i = (e.data_options(r), r.data(e.name + "-instance"));
                    i.compute_dimensions()
                })
            }
        }
    }(jQuery, window, window.document), $(window).load(function() {
        slideshare_object && slideshare_object.slideshow && slideshare_object.slideshow.is_private || slideshare_object.loadGAandComscore()
    }), $(function() {
        $(document).foundation && $(document).foundation({
            abide: {
                live_validate: !1
            }
        }), $("body").on("click", "[data-ga-cat]", function() {
            var e = $(this).data("ga-cat"),
                t = $(this).data("ga-action"),
                n = $(this).data("ga-label"),
                r = $(this).data("ga-value"),
                i = $(this).data("ga-noninteractive") || !1;
            e && t && slideshare_object.ga(e, t, n, r, i)
        }), slideshare_object.setLanguageSelector(), slideshare_object.autosuggestTop(), slideshare_object.lazyloadThumbnails();
        var e = $('meta[name="csrf-token"]').attr("content");
        $.ajaxSetup({
            beforeSend: function(t, n) {
                function r(e) {
                    var t = document.createElement("a");
                    t.href = e;
                    var n = t.href;
                    return t.href = n, t.hostname
                }
                "GET" !== n.type && r(n.url) === window.location.hostname && t.setRequestHeader("X-CSRF-Token", e)
            }
        });
        var t = function() {
            var e = ($("body"), $("#main-nav-mobile-search"));
            e.is(":visible") ? e.hide().find("input").blur() : e.slideDown().find("input").focus()
        };
        $("body").on("click", ".j-open-mobile-search", function(e) {
            e.stopPropagation(), e.preventDefault(), t()
        }), $("#main-nav-mobile-search form").on("submit", function(e) {
            $("#main-nav-mobile-search").addClass("searching")
        }), $("body").on("click", function(e) {
            $(e.target).closest("#main-nav-mobile-search").length <= 0 && $("#main-nav-mobile-search").is(":visible") && (e.stopPropagation(), e.preventDefault(), t())
        }), $(window).load(function() {
            var e = $("body"),
                t = $("#main-nav"),
                n = function() {
                    e.css("padding-top", t.height())
                };
            $(window).resize(function() {
                n()
            }), $("html,body, body .wrapper").trigger("scroll")
        }), $(document).ready(function() {
            if ("undefined" != typeof mobile_util && (mobile_util.isSupportedIOS() && slideshare_object.slideshow && slideshare_object.slideshow.mobile_app_url && mobile_util.IOSAutoDeepLink(slideshare_object.slideshow.mobile_app_url), mobile_util.isIOSWebView())) {
                var e = window._gaq || [];
                e.push(["_trackEvent", slideshare_object.rum_pagekey, "ios_inapp_webview", navigator.userAgent])
            }
        })
    });