var Artemis = "object" == typeof Artemis ? Artemis : {};
Artemis.home = function(t) {
    function e(e) {
        for (var n, o, i = e[0], a = e[1], s = 0, c = []; s < i.length; s++) o = i[s], r[o] && c.push(r[o][0]), r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (u && u(e); c.length;) c.shift()()
    }
    var n = {},
        r = {
            0: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function(t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var i = new Promise(function(e, o) {
                    n = r[t] = [e, o]
                });
                e.push(n[2] = i);
                var a, s = document.getElementsByTagName("head")[0],
                    u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, o.nc && u.setAttribute("nonce", o.nc), u.src = function(t) {
                    return o.p + "" + ({}[t] || t) + ".js"
                }(t), a = function(e) {
                    u.onerror = u.onload = null, clearTimeout(c);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src,
                                a = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + i + ")");
                            a.type = o, a.request = i, n[1](a)
                        }
                        r[t] = void 0
                    }
                };
                var c = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: u
                    })
                }, 12e4);
                u.onerror = u.onload = a, s.appendChild(u)
            }
        return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "https://secure.skypeassets.com/apollo/2.1.1477/supernova/artemis/", o.oe = function(t) {
        throw console.error(t), t
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        a = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var s = 0; s < i.length; s++) e(i[s]);
    var u = a;
    return o(o.s = 187)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e, n) {
    for (var r = n(8), o = n(46), i = n(23), a = n(3), s = n(21), u = n(54), c = n(4), l = c("iterator"), f = c("toStringTag"), d = u.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, v = o(p), h = 0; h < v.length; h++) {
        var g, y = v[h],
            m = p[y],
            _ = a[y],
            E = _ && _.prototype;
        if (E && (E[l] || s(E, l, d), E[f] || s(E, f, y), u[y] = d, m))
            for (g in r) E[g] || i(E, g, r[g], !0)
    }
}, function(t, e, n) {
    var r;
    void 0 === (r = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = function(t) {
            return void 0 === t || null === t
        };
        t.isNullOrUndefined = e, t.isNullOrUndefinedOrEmpty = function(t) {
            return e(t) || "" === t
        }
    }.apply(e, [e])) || (t.exports = r)
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    var r = n(74)("wks"),
        o = n(44),
        i = n(3).Symbol,
        a = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }).store = r
}, function(t, e, n) {
    var r, o;
    r = [e, n(2), n(38), n(55), n(28), n(29), n(11), n(12), n(1)], void 0 === (o = function(t, e) {
        "use strict";

        function n(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pluck = void 0;
        var r = function t(r) {
            if (!(0, e.isNullOrUndefined)(r)) {
                for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                if (!(i.length <= 0)) return i.length > 1 ? t.apply(void 0, n([r[i[0]]].concat(i.slice(1)))) : r[i[0]]
            }
        };
        t.pluck = r, t.default = r
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(151),
        o = n(9),
        i = n(77),
        a = n(109),
        s = n(20),
        u = n(80),
        c = n(110),
        l = n(19),
        f = Math.min,
        d = [].push,
        p = !l(function() {
            RegExp(4294967295, "y")
        });
    n(82)("split", 2, function(t, e, n, l) {
        var v;
        return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
            var o = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(o, t, e);
            for (var i, a, s, u = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, l + "g");
                (i = c.call(v, o)) && !((a = v.lastIndex) > f && (u.push(o.slice(f, i.index)), i.length > 1 && i.index < o.length && d.apply(u, i.slice(1)), s = i[0].length, f = a, u.length >= p));) v.lastIndex === i.index && v.lastIndex++;
            return f === o.length ? !s && v.test("") || u.push("") : u.push(o.slice(f)), u.length > p ? u.slice(0, p) : u
        } : "0".split(void 0, 0).length ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, r) {
            var o = t(this),
                i = void 0 == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : v.call(String(o), n, r)
        }, function(t, e) {
            var r = l(v, t, this, e, v !== n);
            if (r.done) return r.value;
            var c = o(t),
                d = String(this),
                h = i(c, RegExp),
                g = c.unicode,
                y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
                m = new h(p ? c : "^(?:" + c.source + ")", y),
                _ = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === _) return [];
            if (0 === d.length) return null === u(m, d) ? [d] : [];
            for (var E = 0, S = 0, b = []; S < d.length;) {
                m.lastIndex = p ? S : 0;
                var O, T = u(m, p ? d : d.slice(S));
                if (null === T || (O = f(s(m.lastIndex + (p ? 0 : S)), d.length)) === E) S = a(d, S, g);
                else {
                    if (b.push(d.slice(E, S)), b.length === _) return b;
                    for (var I = 1; I <= T.length - 1; I++)
                        if (b.push(T[I]), b.length === _) return b;
                    S = E = O
                }
            }
            return b.push(d.slice(E)), b
        }]
    })
}, function(t, e, n) {
    var r, o;
    r = [n(11), n(12), n(1), n(63), n(6)], void 0 === (o = function() {
        "use strict";

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        void 0 === (o = function() {
            var t = function(t) {
                    var e = this;
                    this.context.jQElement.on(t, function() {
                        Array.prototype.unshift.call(arguments, t), e.trigger.apply(e, arguments)
                    })
                },
                e = function(t) {
                    this.subscribers = {}, this.context = t
                };
            return e.prototype.on = function(e, n) {
                for (var r = e.split(" "), o = 0; o < r.length; ++o) {
                    var i = r[o];
                    this.context.jQElement && !this.hasEvent(i) && t.call(this, i), this.subscribers[i] = this.subscribers[i] || [], this.subscribers[i].push(n)
                }
                return this.context
            }, e.prototype.off = function(t) {
                for (var e = t.split(" "), n = 0; n < e.length; ++n) {
                    var r = e[n];
                    this.hasEvent(r) && delete this.subscribers[r]
                }
                return this.context.jQElement && this.context.jQElement.off.apply(this.context.jQElement, arguments), this.context
            }, e.prototype.trigger = function(t) {
                var e = t.split(" ");
                Array.prototype.shift.call(arguments);
                for (var n = 0; n < e.length; ++n) {
                    var r = e[n],
                        o = this.subscribers[r];
                    if (o)
                        for (var i = 0; i < o.length; ++i) o[i].apply(this.context, arguments)
                }
                return this.context
            }, e.prototype.hasEvent = function(t) {
                return t in this.subscribers
            }, {
                create: function(t) {
                    if (null !== t && void 0 !== t || (t = {}), "object" !== n(t) && "function" != typeof t) throw new Error("Wrong argument passed. Should be object or empty.");
                    var r = new e(t);
                    return t.on = r.on.bind(r), t.off = r.off.bind(r), t.trigger = r.trigger.bind(r), t
                },
                asReplay: function(t, r) {
                    if ("object" !== n(t)) throw new Error("Wrong argument passed: mediator. Should be object.");
                    (null === r || void 0 === r || r < 1) && (r = 1), null !== t && void 0 !== t || (t = new e({})), t.bufferSize = r, t.events = [];
                    var o = t.on,
                        i = t.trigger;
                    return t.on = function(t, e) {
                        o(t, e), this.events[t] = this.events[t] || [], this.events[t].forEach(function(t) {
                            e(t)
                        })
                    }, t.trigger = function(t) {
                        this.events[t] = this.events[t] || [];
                        var e = Array.prototype.slice.call(arguments, 1);
                        this.events[t] = [].concat(this.events[t]).concat(e), this.events[t].length > this.bufferSize && (this.events[t] = this.events[t].slice(this.events[t].length - this.bufferSize)), this.events[t].forEach(function(e) {
                            i(t, e)
                        })
                    }, t
                }
            }
        }.apply(e, r = [])) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(141),
        o = n(193),
        i = n(54),
        a = n(40);
    t.exports = n(136)(Array, "Array", function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(14),
        o = n(153)(5),
        i = !0;
    "find" in [] && Array(1).find(function() {
        i = !1
    }), r(r.P + r.F * i, "Array", {
        find: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(141)("find")
}, function(t, e, n) {
    n(146)("asyncIterator")
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        o = n(37),
        i = n(13),
        a = n(14),
        s = n(23),
        u = n(148).KEY,
        c = n(19),
        l = n(74),
        f = n(60),
        d = n(44),
        p = n(4),
        v = n(147),
        h = n(146),
        g = n(203),
        y = n(149),
        m = n(9),
        _ = n(18),
        E = n(24),
        S = n(40),
        b = n(71),
        O = n(53),
        T = n(94),
        I = n(204),
        w = n(73),
        A = n(78),
        x = n(17),
        N = n(46),
        R = w.f,
        P = x.f,
        C = I.f,
        D = r.Symbol,
        k = r.JSON,
        L = k && k.stringify,
        M = p("_hidden"),
        j = p("toPrimitive"),
        U = {}.propertyIsEnumerable,
        B = l("symbol-registry"),
        V = l("symbols"),
        W = l("op-symbols"),
        F = Object.prototype,
        G = "function" == typeof D && !!A.f,
        H = r.QObject,
        z = !H || !H.prototype || !H.prototype.findChild,
        K = i && c(function() {
            return 7 != T(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var r = R(F, e);
            r && delete F[e], P(t, e, n), r && t !== F && P(F, e, r)
        } : P,
        Y = function(t) {
            var e = V[t] = T(D.prototype);
            return e._k = t, e
        },
        q = G && "symbol" == typeof D.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof D
        },
        Q = function(t, e, n) {
            return t === F && Q(W, e, n), m(t), e = b(e, !0), m(n), o(V, e) ? (n.enumerable ? (o(t, M) && t[M][e] && (t[M][e] = !1), n = T(n, {
                enumerable: O(0, !1)
            })) : (o(t, M) || P(t, M, O(1, {})), t[M][e] = !0), K(t, e, n)) : P(t, e, n)
        },
        X = function(t, e) {
            m(t);
            for (var n, r = g(e = S(e)), o = 0, i = r.length; i > o;) Q(t, n = r[o++], e[n]);
            return t
        },
        $ = function(t) {
            var e = U.call(this, t = b(t, !0));
            return !(this === F && o(V, t) && !o(W, t)) && (!(e || !o(this, t) || !o(V, t) || o(this, M) && this[M][t]) || e)
        },
        J = function(t, e) {
            if (t = S(t), e = b(e, !0), t !== F || !o(V, e) || o(W, e)) {
                var n = R(t, e);
                return !n || !o(V, e) || o(t, M) && t[M][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = C(S(t)), r = [], i = 0; n.length > i;) o(V, e = n[i++]) || e == M || e == u || r.push(e);
            return r
        },
        tt = function(t) {
            for (var e, n = t === F, r = C(n ? W : S(t)), i = [], a = 0; r.length > a;) !o(V, e = r[a++]) || n && !o(F, e) || i.push(V[e]);
            return i
        };
    G || (s((D = function() {
        if (this instanceof D) throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === F && e.call(W, n), o(this, M) && o(this[M], t) && (this[M][t] = !1), K(this, t, O(1, n))
            };
        return i && z && K(F, t, {
            configurable: !0,
            set: e
        }), Y(t)
    }).prototype, "toString", function() {
        return this._k
    }), w.f = J, x.f = Q, n(51).f = I.f = Z, n(61).f = $, A.f = tt, i && !n(43) && s(F, "propertyIsEnumerable", $, !0), v.f = function(t) {
        return Y(p(t))
    }), a(a.G + a.W + a.F * !G, {
        Symbol: D
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
    for (var rt = N(p.store), ot = 0; rt.length > ot;) h(rt[ot++]);
    a(a.S + a.F * !G, "Symbol", {
        for: function(t) {
            return o(B, t += "") ? B[t] : B[t] = D(t)
        },
        keyFor: function(t) {
            if (!q(t)) throw TypeError(t + " is not a symbol!");
            for (var e in B)
                if (B[e] === t) return e
        },
        useSetter: function() {
            z = !0
        },
        useSimple: function() {
            z = !1
        }
    }), a(a.S + a.F * !G, "Object", {
        create: function(t, e) {
            return void 0 === e ? T(t) : X(T(t), e)
        },
        defineProperty: Q,
        defineProperties: X,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    });
    var it = c(function() {
        A.f(1)
    });
    a(a.S + a.F * it, "Object", {
        getOwnPropertySymbols: function(t) {
            return A.f(E(t))
        }
    }), k && a(a.S + a.F * (!G || c(function() {
        var t = D();
        return "[null]" != L([t]) || "{}" != L({
            a: t
        }) || "{}" != L(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (_(e) || void 0 !== t) && !q(t)) return y(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !q(e)) return e
            }), r[1] = e, L.apply(k, r)
        }
    }), D.prototype[j] || n(21)(D.prototype, j, D.prototype.valueOf), f(D, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, n) {
    t.exports = !n(19)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(3),
        o = n(27),
        i = n(21),
        a = n(23),
        s = n(39),
        u = function(t, e, n) {
            var c, l, f, d, p = t & u.F,
                v = t & u.G,
                h = t & u.S,
                g = t & u.P,
                y = t & u.B,
                m = v ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                _ = v ? o : o[e] || (o[e] = {}),
                E = _.prototype || (_.prototype = {});
            for (c in v && (n = e), n) f = ((l = !p && m && void 0 !== m[c]) ? m : n)[c], d = y && l ? s(f, r) : g && "function" == typeof f ? s(Function.call, f) : f, m && a(m, c, f, t & u.U), _[c] != f && i(_, c, d), g && E[c] != f && (E[c] = f)
        };
    r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e, n) {
    var r;
    void 0 === (r = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {}
    }.apply(e, [e])) || (t.exports = r)
}, function(t, e, n) {
    "use strict";
    var r, o, i, a, s = n(43),
        u = n(3),
        c = n(39),
        l = n(59),
        f = n(14),
        d = n(18),
        p = n(75),
        v = n(101),
        h = n(194),
        g = n(77),
        y = n(143).set,
        m = n(196)(),
        _ = n(104),
        E = n(144),
        S = n(197),
        b = n(145),
        O = u.TypeError,
        T = u.process,
        I = T && T.versions,
        w = I && I.v8 || "",
        A = u.Promise,
        x = "process" == l(T),
        N = function() {},
        R = o = _.f,
        P = !! function() {
            try {
                var t = A.resolve(1),
                    e = (t.constructor = {})[n(4)("species")] = function(t) {
                        t(N, N)
                    };
                return (x || "function" == typeof PromiseRejectionEvent) && t.then(N) instanceof e && 0 !== w.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        C = function(t) {
            var e;
            return !(!d(t) || "function" != typeof(e = t.then)) && e
        },
        D = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m(function() {
                    for (var r = t._v, o = 1 == t._s, i = 0, a = function(e) {
                            var n, i, a, s = o ? e.ok : e.fail,
                                u = e.resolve,
                                c = e.reject,
                                l = e.domain;
                            try {
                                s ? (o || (2 == t._h && M(t), t._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === e.promise ? c(O("Promise-chain cycle")) : (i = C(n)) ? i.call(n, u, c) : u(n)) : c(r)
                            } catch (t) {
                                l && !a && l.exit(), c(t)
                            }
                        }; n.length > i;) a(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && k(t)
                })
            }
        },
        k = function(t) {
            y.call(u, function() {
                var e, n, r, o = t._v,
                    i = L(t);
                if (i && (e = E(function() {
                        x ? T.emit("unhandledRejection", o, t) : (n = u.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), t._h = x || L(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
            })
        },
        L = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        M = function(t) {
            y.call(u, function() {
                var e;
                x ? T.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        j = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), D(e, !0))
        },
        U = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw O("Promise can't be resolved itself");
                    (e = C(t)) ? m(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(U, r, 1), c(j, r, 1))
                        } catch (t) {
                            j.call(r, t)
                        }
                    }): (n._v = t, n._s = 1, D(n, !1))
                } catch (t) {
                    j.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    P || (A = function(t) {
        v(this, A, "Promise", "_h"), p(t), r.call(this);
        try {
            t(c(U, this, 1), c(j, this, 1))
        } catch (t) {
            j.call(this, t)
        }
    }, (r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(105)(A.prototype, {
        then: function(t, e) {
            var n = R(g(this, A));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = x ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new r;
        this.promise = t, this.resolve = c(U, t, 1), this.reject = c(j, t, 1)
    }, _.f = R = function(t) {
        return t === A || t === a ? new i(t) : o(t)
    }), f(f.G + f.W + f.F * !P, {
        Promise: A
    }), n(60)(A, "Promise"), n(106)("Promise"), a = n(27).Promise, f(f.S + f.F * !P, "Promise", {
        reject: function(t) {
            var e = R(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (s || !P), "Promise", {
        resolve: function(t) {
            return b(s && this === a ? A : this, t)
        }
    }), f(f.S + f.F * !(P && n(107)(function(t) {
        A.all(t).catch(N)
    })), "Promise", {
        all: function(t) {
            var e = this,
                n = R(e),
                r = n.resolve,
                o = n.reject,
                i = E(function() {
                    var n = [],
                        i = 0,
                        a = 1;
                    h(t, !1, function(t) {
                        var s = i++,
                            u = !1;
                        n.push(void 0), a++, e.resolve(t).then(function(t) {
                            u || (u = !0, n[s] = t, --a || r(n))
                        }, o)
                    }), --a || r(n)
                });
            return i.e && o(i.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = R(e),
                r = n.reject,
                o = E(function() {
                    h(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
            return o.e && r(o.v), n.promise
        }
    })
}, function(t, e, n) {
    var r = n(9),
        o = n(134),
        i = n(71),
        a = Object.defineProperty;
    e.f = n(13) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(45),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var r = n(17),
        o = n(53);
    t.exports = n(13) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r, o;
    r = [n(41), n(6), n(112)], void 0 === (o = function() {
        "use strict";
        r = [n(0), n(42), n(7)], void 0 === (o = function(t, e, n) {
            var r = {};
            return r.jQElement = t(e), n.create(r), r.getQuery = function() {
                return e.location.search
            }, r.getQueryParameterValue = function(t) {
                var e = r.getQuery();
                if (e && t) {
                    if ("?" === e[0] && (e = e.substr(1)), !e) return;
                    for (var n = e.split("&"), o = 0; o < n.length; o++) {
                        var i = n[o].split("=");
                        if (i[0] === t) return i.length > 1 ? i[1] : ""
                    }
                }
            }, r.hasQueryParameterWithValue = function(t, e) {
                var n = r.getQueryParameterValue(t);
                return void 0 !== n && n === e
            }, r.hasQuery = function(t) {
                return void 0 !== r.getQueryParameterValue(t)
            }, r.getHeight = function() {
                return e.innerHeight || r.jQElement.height()
            }, r.getWidth = function() {
                return e.innerWidth || r.jQElement.width()
            }, r.open = function() {
                return e.open.apply(e, arguments)
            }, r.redirect = function(t) {
                e.location.href = t
            }, r.isLongerThanViewport = function(t) {
                return t > r.jQElement.height()
            }, r.getURL = function() {
                return e.location.href
            }, r.getPath = function() {
                return e.location.pathname
            }, r.getHash = function() {
                return e.location.hash
            }, r.getProtocol = function() {
                return e.location.protocol
            }, r.setHash = function(t) {
                e.location.hash = t
            }, r.getUserAgent = function() {
                return e.navigator.userAgent
            }, r.getSession = function() {
                return e.sessionStorage
            }, r.clearHash = function() {
                this.setHash("")
            }, r.injectQueryParamsToUrl = function(e, n) {
                if (void 0 === n && (n = r.getURL()), "string" == typeof e && e && (e = [e]), !(e instanceof Array) || 0 === e.length) return n;
                var o = "",
                    i = n.indexOf("#"),
                    a = n.indexOf("?");
                return t.each(e, function(t, e) {
                    var n = r.getQueryParameterValue(e);
                    void 0 !== n && (o += (0 === t && -1 === a ? "?" : "&") + e + ("" === n ? "" : "=" + n))
                }), "" === o ? n : -1 === i ? n + o : n.substring(0, i) + o + n.substring(i)
            }, r.onEvent = function(t, n) {
                e[t] = n
            }, r.getScrollWidth = function() {
                var n;
                if (navigator.userAgent.match(/MSIE 8/)) n = 17;
                else {
                    var r = t("html").css("overflow-y"),
                        o = document.body.scroll,
                        i = t("html");
                    i.css("overflow-y", "scroll"), document.body.scroll = "yes", n = (e.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - t(e).width(), r && i.css("overflow-y", r), o && (document.body.scroll = o)
                }
                return n
            }, r.getX = function() {
                return void 0 !== e.pageXOffset ? e.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
            }, r.getY = function() {
                return void 0 !== e.pageYOffset ? e.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            }, r.scrollImmediate = function(t, n) {
                return e.scrollTo(t, n)
            }, r
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(3),
        o = n(21),
        i = n(37),
        a = n(44)("src"),
        s = n(190),
        u = ("" + s).split("toString");
    n(27).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var c = "function" == typeof n;
        c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, a) || o(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[a] || s.call(this)
    })
}, function(t, e, n) {
    var r = n(72);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r, o;
    r = [n(6)], void 0 === (o = function() {
        "use strict";
        r = [n(42), n(83), n(0), n(15)], void 0 === (o = function(t, e, n) {
            return {
                body: e.body,
                PROD_ENVIRONMENT: "prod",
                DEV_ENVIRONMENT: "dev",
                getLocationHref: function() {
                    return t.location.href
                },
                setLocationHref: function(e) {
                    t.location.href = e
                },
                getReferrer: function() {
                    return e.referrer
                },
                getLanguage: function() {
                    return e.documentElement.lang || "en"
                },
                getRegion: function() {
                    return n("html").data("region")
                },
                isSecure: function() {
                    return "https:" === e.location.protocol
                },
                cookieExists: function(t) {
                    return e.cookie.indexOf(t) >= 0
                },
                getCookies: function() {
                    return e.cookie.split(";")
                },
                setCookie: function(t) {
                    e.cookie = t
                },
                getEnvironment: function() {
                    return -1 !== t.location.href.indexOf(".skype.com") ? "prod" : "dev"
                },
                getDomainName: function() {
                    var e = t.location.hostname.split(".");
                    return e.length >= 2 && (e = e.slice(e.length - 2, e.length)), e.join(".")
                },
                injectStyle: function(t, r) {
                    var o = e.getElementsByTagName("head")[0],
                        i = e.createElement("link");
                    i.rel = "stylesheet", i.type = "text/css", i.href = t, i.media = "all", o.appendChild(i), r && n(e.createElement("img")).attr("src", t).on("error", function() {
                        r(), n(this).remove()
                    })
                },
                injectScript: function(t, n) {
                    var r = e.getElementsByTagName("head")[0],
                        o = e.createElement("script");
                    o.type = "text/javascript", n && (o.async = !0, o.onload = n), o.src = t, r.appendChild(o)
                },
                jQElement: n(e)
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(24),
        o = n(46);
    n(150)("keys", function() {
        return function(t) {
            return o(r(t))
        }
    })
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    "use strict";
    n(209);
    var r = n(9),
        o = n(81),
        i = n(13),
        a = /./.toString,
        s = function(t) {
            n(23)(RegExp.prototype, "toString", t, !0)
        };
    n(19)(function() {
        return "/a/b" != a.call({
            source: "a",
            flags: "b"
        })
    }) ? s(function() {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
    }) : "toString" != a.name && s(function() {
        return a.call(this)
    })
}, function(t, e, n) {
    var r = Date.prototype,
        o = r.toString,
        i = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(23)(r, "toString", function() {
        var t = i.call(this);
        return t == t ? o.call(this) : "Invalid Date"
    })
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(2), n(230), n(38), n(55), n(28), n(29), n(11), n(12), n(1), n(6)], void 0 === (o = function(t, e, n, r) {
        "use strict";

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function s(t) {
            return (0, r.isArray)(t) || "string" == typeof t || "number" == typeof t || "boolean" == typeof t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Settings = void 0;
        var u = new(t.Settings = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.store = {}, this.canRegister = !0
            }
            return function(t, e, n) {
                e && a(t.prototype, e), n && a(t, n)
            }(t, [{
                key: "register",
                value: function() {
                    this.store = (0, e.pluck)(window.SKYPE_SETTINGS, "settings") || {}
                }
            }, {
                key: "add",
                value: function(t, e) {
                    if ((0, r.isObject)(e)) throw new Error("Settings allow only the value to be typeof: string, array, number, boolean");
                    this.canRegister = !1;
                    var i = t.split(".");
                    ! function(t, e, r) {
                        var i = e.length - 1;
                        e.forEach(function(e, a) {
                            if (a < i && !(e in t) && (t[e] = {}), a == i)
                                if ((0, n.isNullOrUndefined)(t[e])) t[e] = r;
                                else {
                                    if (!s(r) || !s(t[e]) || o(r) !== o(t[e])) throw new Error("Settings does not allow change structure of already defined setting, please check the list: ".concat(JSON.stringify(t)));
                                    t[e] = r
                                }
                            t = t[e]
                        })
                    }(this.store, i, e)
                }
            }, {
                key: "get",
                value: function(t, n) {
                    var r = t.split("."),
                        o = e.pluck.apply(void 0, [this.store].concat(i(r)));
                    return void 0 !== o ? o : n
                }
            }, {
                key: "update",
                value: function(t, e) {
                    this.add(t, e)
                }
            }]), t
        }());
        t.default = u
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(42), n(2), n(5)], void 0 === (o = function(t, e, n) {
            var r = {
                    defaultKey: "initial"
                },
                o = n.pluck(t, "EXTERNAL_STORAGE", "stopWatches");

            function i(t) {
                if (e.isNullOrUndefined(t)) throw new Error("stopWatcher requires container key");
                return function(i) {
                    return e.isNullOrUndefined(i) ? o : i === r.defaultKey ? n.pluck(o, t, i) : n.pluck(o, t, "stops", i)
                }
            }

            function a(t) {
                if (e.isNullOrUndefined(t)) throw new Error("stopWatcher requires container key");
                return function(n, i) {
                    if (n !== r.defaultKey) {
                        if (e.isNullOrUndefined(o[t][r.defaultKey])) return;
                        return o[t].stops[n] = i, o[t].stops[n] - o[t][r.defaultKey]
                    }
                    o[t][n] = i
                }
            }
            return {
                CONSTS: r,
                create: function(t) {
                    return e.isNullOrUndefined(o[t]) && (o[t] = {}), e.isNullOrUndefined(o[t].stops) && (o[t].stops = {}), {
                        get: i(t),
                        set: a(t),
                        started: function(t) {
                            return function() {
                                return !e.isNullOrUndefined(i(t)(r.defaultKey))
                            }
                        }(t),
                        start: function(t) {
                            if (e.isNullOrUndefined(t)) throw new Error("stopWatcher requires container key");
                            return function() {
                                return a(t)(r.defaultKey, Date.now())
                            }
                        }(t),
                        lap: function(t) {
                            if (e.isNullOrUndefined(t)) throw new Error("stopWatcher requires container key");
                            return function(e) {
                                return a(t)(e, Date.now())
                            }
                        }(t),
                        diff: function(t) {
                            return function(e) {
                                return i(t)(e) - i(t)(r.defaultKey)
                            }
                        }(t)
                    }
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r = n(169),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    var r;
    void 0 === (r = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            if (!e || e.length < 1) throw new Error("compose requires at least 1 function");
            return function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var o = e[e.length - 1].apply(void 0, n);
                return 1 === e.length ? o : e.slice(0, e.length - 1).reduceRight(function(t, e) {
                    return e(t)
                }, o)
            }
        };
        t.compose = e, t.default = e
    }.apply(e, [e])) || (t.exports = r)
}, function(t, e, n) {
    var r, o;
    r = [e, n(84), n(5), n(67), n(16)], void 0 === (o = function(t, e, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.failLogApi = t.successLogApi = t.connectStopWatchStart = t.connectStopWatchLap = t.stopWatchTrack = t.stopWatchStart = t.switchToHappyIf = t.withData = t.connect = t.getData = t.storeData = t.cleanStorage = t.consts = void 0;
        var o = s(e),
            i = s(n),
            a = s(r);

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = function(t) {
                return Promise.reject(t)
            },
            c = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                return function(n) {
                    return n.then(t, e)
                }
            },
            l = function(t) {
                return t.start()
            },
            f = function(t, e) {
                return t.lap(e)
            };
        t.consts = {
            NO_DATA: "No data"
        }, t.cleanStorage = function(t) {
            return o.default.removeSessionData(t)
        }, t.storeData = function(t, e) {
            return o.default.setSessionData(t, e)
        }, t.getData = function(t) {
            return o.default.getSessionData(t)
        }, t.connect = c, t.withData = function(t) {
            return function(e) {
                return t(e).then(function(t) {
                    return Promise.resolve([e, t])
                })
            }
        }, t.switchToHappyIf = function(t, e) {
            return function(n) {
                return n.then(function(t) {
                    return e(Promise.resolve(t))
                }, function(n) {
                    return t(n) ? e(Promise.resolve(n)).then(function(t) {
                        return Promise.reject(t)
                    }) : e(Promise.reject(n))
                })
            }
        }, t.stopWatchStart = l, t.stopWatchTrack = f, t.connectStopWatchLap = function(t) {
            return c(function(e) {
                return f(t, "success"), Promise.resolve(e)
            }, function(e) {
                return f(t, "fail"), Promise.reject(e)
            })
        }, t.connectStopWatchStart = function(t) {
            return c(function(e) {
                return l(t), Promise.resolve(e)
            })
        }, t.successLogApi = function(t, e) {
            return function(n) {
                return e.started() && a.default.logApi({
                    endPoint: t,
                    loadTime: e.diff("success"),
                    status: "success"
                }), Promise.resolve(n)
            }
        }, t.failLogApi = function(t, e) {
            return function(n) {
                return e.started() && a.default.logApi({
                    endPoint: t,
                    loadTime: e.diff("fail"),
                    status: "fail",
                    errorCode: (0, i.default)(n, "code"),
                    errorText: (0, i.default)(n, "text")
                }), Promise.reject(n)
            }
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(7), n(22), n(0)], void 0 === (o = function(t, e, n) {
            var r, o, i, a, s = {
                jQElement: n("body")
            };
            t.create(s);
            var u = function(t, e) {
                    var r = n.extend({
                        name: t
                    }, e);
                    s.trigger(t, r)
                },
                c = function() {
                    a && clearTimeout(a), a = setTimeout(function() {
                        f();
                        var t = s.calculateCurrentState();
                        void 0 !== t && r !== t && (o = r, r = t, l())
                    }, 100)
                },
                l = function() {
                    d(o), p(r), u("responsive.change", {
                        previous: o,
                        current: r,
                        size: {
                            width: i.width(),
                            height: i.height()
                        }
                    })
                },
                f = function() {
                    u("responsive.resize", {
                        size: {
                            width: i.width(),
                            height: i.height()
                        }
                    })
                },
                d = function(t) {
                    switch (t) {
                        case "desktop":
                            u("desktop.off");
                            break;
                        case "tablet":
                            u("tablet.off");
                            break;
                        case "mobile":
                            u("mobile.off")
                    }
                },
                p = function(t) {
                    switch (t) {
                        case "desktop":
                            u("desktop.on");
                            break;
                        case "tablet":
                            u("tablet.on");
                            break;
                        case "mobile":
                            u("mobile.on")
                    }
                },
                v = function(e, n) {
                    var r = n || {};
                    r.on && t.on(e + ".on", r.on), r.off && t.on(e + ".off", r.off)
                };
            return s.isDesktop = function() {
                return "desktop" === s.getCurrentState()
            }, s.isTablet = function() {
                return "tablet" === s.getCurrentState()
            }, s.isMobile = function() {
                return "mobile" === s.getCurrentState()
            }, s.getCurrentState = function() {
                return s.calculateCurrentState()
            }, s.desktop = function(t) {
                v("desktop", t)
            }, s.tablet = function(t) {
                v("tablet", t)
            }, s.mobile = function(t) {
                v("mobile", t)
            }, s.calculateCurrentState = function() {
                var t = e.getWidth();
                return t <= 767 ? "mobile" : t < 1024 ? "tablet" : "desktop"
            }, s.isVisible = function(t) {
                var e = s.getCurrentState(),
                    r = "no" + e.charAt(0).toUpperCase() + e.substring(1);
                return !n(t).hasClass(r)
            }, s.DESKTOP = "desktop", s.MOBILE = "mobile", s.TABLET = "tablet", s.DESKTOP_ON = "desktop.on", s.DESKTOP_OFF = "desktop.off", s.TABLET_ON = "tablet.on", s.TABLET_OFF = "tablet.off", s.MOBILE_ON = "mobile.on", s.MOBILE_OFF = "mobile.off", s.CHANGE = "responsive.change", s.RESIZE = "responsive.resize", i = n(window).on("resize", c), r = s.calculateCurrentState(), s
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(135)(!0);
    n(136)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    var r = n(75);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(98),
        o = n(72);
    t.exports = function(t) {
        return r(o(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(9),
        o = n(20),
        i = n(109),
        a = n(80);
    n(82)("match", 1, function(t, e, n, s) {
        return [function(n) {
            var r = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var u = r(t),
                c = String(this);
            if (!u.global) return a(u, c);
            var l = u.unicode;
            u.lastIndex = 0;
            for (var f, d = [], p = 0; null !== (f = a(u, c));) {
                var v = String(f[0]);
                d[p] = v, "" === v && (u.lastIndex = i(c, o(u.lastIndex), l)), p++
            }
            return 0 === p ? null : d
        }]
    })
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            return window
        }.call(e, n, e, t)) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e) {
    t.exports = !1
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(137),
        o = n(100);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}, function(t, e, n) {
    var r, o;
    r = [n(52), n(6), n(41)], void 0 === (o = function() {
        "use strict";
        r = [n(225), n(25), n(22)], void 0 === (o = function(t, e, n) {
            var r = {
                getBackTarget: function() {
                    var t = e.getReferrer(),
                        n = "../";
                    return /\.skype\.(net|com)/.test(t) && t !== e.getLocationHref() && (n = t), n
                },
                goBack: function(t) {
                    var e = r.getBackTarget();
                    r.goTo(e, t)
                },
                goTo: function(t, n) {
                    n && n(t), e.setLocationHref(t)
                },
                isSafari: function() {
                    return -1 !== t.getUserAgent().indexOf("Safari") && -1 === t.getUserAgent().indexOf("Chrome")
                },
                isChrome: function() {
                    var e = t.getUserAgent().toLowerCase();
                    return !!window.chrome && /chrom(e|ium)/.test(e) && !/opera|opr/i.test(e) && -1 === e.indexOf("edge")
                },
                isFirefox: function() {
                    return -1 !== t.getUserAgent().toLowerCase().indexOf("firefox")
                },
                isInternetExplorer: function() {
                    var e = t.getUserAgent();
                    return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
                },
                isEdge: function() {
                    return -1 !== t.getUserAgent().indexOf("Edge")
                },
                isEdgeDesktop: function() {
                    return -1 !== t.getUserAgent().toLowerCase().indexOf("nt 10")
                },
                getVersionOfOldInternetExplorer: function() {
                    var e = t.getUserAgent();
                    return -1 !== e.indexOf("MSIE") ? parseInt(e.match(/MSIE ([\d.]+)/)[1], 10) : void 0
                },
                isMac: function() {
                    return -1 !== t.getUserAgent().indexOf("Mac")
                },
                isMacOld: function() {
                    if (!r.isMac()) return !1;
                    var e = t.getUserAgent().toLowerCase(),
                        n = 10,
                        o = 5,
                        i = 8,
                        a = e.match(/mac os x ([._0-9]+)/);
                    if (a && a[1]) {
                        var s = a[1].split("_");
                        1 === s.length && (s = a[1].split("."));
                        for (var u = 0; u < s.length; u++) s[u] = parseInt(s[u]);
                        if (1 === s.length && s[0] < n) return !0;
                        if (s[0] < n || s[0] === n && s[1] < o) return !0;
                        if (s[0] > n || s[0] === n && s[1] > o) return !1;
                        if (3 === s.length && s[1] === o && s[2] >= i) return !1
                    } else if (e.match(/(ipad|iphone)/)) return !1;
                    return !1
                },
                isMac10WithMiddleVersion: function(e) {
                    var n = t.getUserAgent().toLowerCase(),
                        r = new RegExp("mac os x 10_" + e, "g"),
                        o = new RegExp("mac os x 10." + e, "g");
                    return !(!r.test(n) && !o.test(n))
                },
                isMac105: function() {
                    return r.isMac10WithMiddleVersion(5)
                },
                isMac106: function() {
                    return r.isMac10WithMiddleVersion(6)
                },
                isMac107: function() {
                    return r.isMac10WithMiddleVersion(7)
                },
                isMac108: function() {
                    return r.isMac10WithMiddleVersion(8)
                },
                isMac109: function() {
                    return r.isMac10WithMiddleVersion(9)
                },
                isWebkit: function() {
                    return -1 !== t.getUserAgent().indexOf("WebKit")
                },
                isTouchEnabledBrowser: function() {
                    var t = n.jQElement[0],
                        r = e.jQElement[0],
                        o = t.DocumentTouch;
                    return void 0 !== t.ontouchend || o && r instanceof o
                },
                browserType: {
                    CHROME: "Chrome",
                    IE: "IE",
                    OPERA: "Opera",
                    EDGE: "Edge"
                },
                getBrowserInfo: function() {
                    var t, e = navigator.userAgent,
                        n = e.match(/(opera|chrome|safari|firefox|msie|trident|edge(?=\/))\/?\s*(\d+)(\.\d+)+/i) || [];
                    return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
                        name: r.browserType.IE,
                        version: t[1] || ""
                    }) : "Chrome" === n[1] && null != (t = e.match(/\bOPR\/(\d+)/)) ? {
                        name: r.browserType.OPERA,
                        version: t[1]
                    } : null != (t = e.match(/\bEdge\/(\d+(.\d+)+)/i)) ? {
                        name: r.browserType.EDGE,
                        version: t[1]
                    } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]), {
                        name: n[0],
                        version: n[1]
                    })
                }
            };
            return r
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(6), n(1)], void 0 === (o = function() {
        "use strict";
        r = [n(0), n(58), n(84), n(7), n(42), n(2), n(5), n(128), n(236), n(129), n(160), n(31), n(67), n(22)], void 0 === (o = function(t, e, n, r, o, i, a, s, u, c, l, f, d) {
            var p = {
                    UHF_LOGOUTS: [u.joinUsMenuItem, u.dropdownLogoutMenuItem]
                },
                v = s.create({
                    skypeToken: void 0,
                    skypeId: void 0,
                    tokenRemoved: !1,
                    fromCache: !1
                }),
                h = r.create(),
                g = f.create("fromStart");

            function y(t, e, n, r, o) {
                switch (v.update({
                    skypeToken: n,
                    tokenRemoved: t === l.EVENTS.REMOVED,
                    skypeId: r,
                    fromCache: e
                }), t) {
                    case l.EVENTS.READY:
                        h.trigger(t, {
                            fromCache: v.get("fromCache"),
                            skypetoken: v.get("skypeToken"),
                            skypeId: v.get("skypeId")
                        });
                        break;
                    case l.EVENTS.ERROR:
                        h.trigger(t, o);
                        break;
                    case l.EVENTS.REMOVED:
                        h.trigger(t);
                        break;
                    default:
                        throw new Error("Triggering event " + t + " is not implemented")
                }
            }
            var m = y.bind(this, l.EVENTS.REMOVED, !1),
                _ = y.bind(this, l.EVENTS.READY);

            function E(t) {
                var r = function(t) {
                    return a.pluck(t, "originalEvent") || t
                }(t);
                if (function(t) {
                        var n = a.pluck(t, "origin");
                        return !i.isNullOrUndefined(n) && (a.pluck(e, "token", "loginUri") || "").indexOf(n) > -1
                    }(r)) {
                    var o = {
                        endPoint: a.pluck(e, "token", "loginUri")
                    };
                    if (function(t) {
                            var e = a.pluck(t, "data");
                            return !i.isNullOrUndefined(e) && "string" == typeof e
                        }(r)) {
                        var s, u, c, f, p, v;
                        g.get(l.CONSTS.SW_STOP_NAME) ? o.loadTime = g.diff(l.CONSTS.SW_STOP_NAME) : o.loadTime = g.lap(l.CONSTS.SW_STOP_NAME);
                        try {
                            u = (s = JSON.parse(r.data)).skypetoken, c = s.skypeid, v = s.signinname, p = s.expires_in, f = s.error
                        } catch (t) {
                            return o.status = "fail", o.errorText = "response contains invalid json string", d.logApi(o), void h.trigger(l.EVENTS.ERROR, {
                                message: "response contains invalid json string"
                            })
                        }
                        if (f === l.CONSTS.USER_NOT_LOGGED_IN) return S(), m(), o.status = "success", void d.logApi(o);
                        if (i.isNullOrUndefinedOrEmpty(u)) return o.status = "fail", o.errorText = "token empty", d.logApi(o), void h.trigger(l.EVENTS.ERROR, s);
                        var y = parseInt(a.pluck(e, "token", "cacheLength") || 5e3);
                        ! function(t, e, r, o, i) {
                            n.setSessionData(l.CONSTS.TOKEN_SESSION_KEY, t), n.setSessionData(l.CONSTS.TOKEN_SESSION_SIGNINNAME_KEY, r), n.setSessionData(l.CONSTS.SKYPE_ID_KEY, o), n.setSessionData(l.CONSTS.TOKEN_SESSION_EXPIRATION_KEY, e), n.setSessionData(l.CONSTS.TOKEN_SESSION_CACHE_EXPIRATION_KEY, i)
                        }(u, function(t) {
                            return Math.round((new Date).getTime() / 1e3) + t
                        }(p), v, c, Date.now() + (isNaN(y) ? 0 : y)), _(!1, u, c), o.status = "success", d.logApi(o)
                    } else h.trigger(l.EVENTS.ERROR, {
                        message: "invalid response returned from login api"
                    })
                }
            }

            function S() {
                n.removeSessionData(l.CONSTS.TOKEN_SESSION_KEY), n.removeSessionData(l.CONSTS.TOKEN_SESSION_SIGNINNAME_KEY), n.removeSessionData(l.CONSTS.SKYPE_ID_KEY), n.removeSessionData(l.CONSTS.TOKEN_SESSION_EXPIRATION_KEY), n.removeSessionData(l.CONSTS.TOKEN_SESSION_CACHE_EXPIRATION_KEY)
            }

            function b() {
                o.swc.destroy(), S(), m()
            }
            return v.update({
                skypeToken: void 0,
                skypeId: void 0,
                tokenRemoved: !1
            }), sessionStorage.getItem(l.CONSTS.TOKEN_SESSION_KEY) ? function() {
                var t = n.getSessionData(l.CONSTS.TOKEN_SESSION_KEY),
                    e = n.getSessionData(l.CONSTS.SKYPE_ID_KEY);
                _(!0, t, e)
            }() : (c.on(l.CONSTS.SILENT_RESPONSE_EVENT, E), p.UHF_LOGOUTS.forEach(function(e) {
                t(e).click(b)
            })), {
                on: function(t, e) {
                    t = t.split(" ");
                    for (var n = 0; n < t.length; ++n) v.get().skypeToken && t[n] === l.EVENTS.READY ? e({
                        skypetoken: v.get("skypeToken"),
                        skypeId: v.get("skypeToken"),
                        fromCache: v.get("fromCache")
                    }) : v.get("tokenRemoved") && t[n] === l.EVENTS.REMOVED ? e() : h.on(t[n], e)
                },
                EVENTS: l.EVENTS
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(9),
        o = n(24),
        i = n(20),
        a = n(45),
        s = n(109),
        u = n(80),
        c = Math.max,
        l = Math.min,
        f = Math.floor,
        d = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g,
        v = function(t) {
            return void 0 === t ? t : String(t)
        };
    n(82)("replace", 2, function(t, e, n, h) {
        return [function(r, o) {
            var i = t(this),
                a = void 0 == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o)
        }, function(t, e) {
            var o = h(n, t, this, e);
            if (o.done) return o.value;
            var f = r(t),
                d = String(this),
                p = "function" == typeof e;
            p || (e = String(e));
            var y = f.global;
            if (y) {
                var m = f.unicode;
                f.lastIndex = 0
            }
            for (var _ = [];;) {
                var E = u(f, d);
                if (null === E) break;
                if (_.push(E), !y) break;
                "" === String(E[0]) && (f.lastIndex = s(d, i(f.lastIndex), m))
            }
            for (var S = "", b = 0, O = 0; O < _.length; O++) {
                E = _[O];
                for (var T = String(E[0]), I = c(l(a(E.index), d.length), 0), w = [], A = 1; A < E.length; A++) w.push(v(E[A]));
                var x = E.groups;
                if (p) {
                    var N = [T].concat(w, I, d);
                    void 0 !== x && N.push(x);
                    var R = String(e.apply(void 0, N))
                } else R = g(T, d, I, w, x, e);
                I >= b && (S += d.slice(b, I) + R, b = I + T.length)
            }
            return S + d.slice(b)
        }];

        function g(t, e, r, i, a, s) {
            var u = r + t.length,
                c = i.length,
                l = p;
            return void 0 !== a && (a = o(a), l = d), n.call(s, l, function(n, o) {
                var s;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(u);
                    case "<":
                        s = a[o.slice(1, -1)];
                        break;
                    default:
                        var l = +o;
                        if (0 === l) return n;
                        if (l > c) {
                            var d = f(l / 10);
                            return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1) : n
                        }
                        s = i[l - 1]
                }
                return void 0 === s ? "" : s
            })
        }
    })
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var r = n(137),
        o = n(100).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, o)
    }
}, function(t, e, n) {
    var r = n(3),
        o = n(186),
        i = n(17).f,
        a = n(51).f,
        s = n(151),
        u = n(81),
        c = r.RegExp,
        l = c,
        f = c.prototype,
        d = /a/g,
        p = /a/g,
        v = new c(d) !== d;
    if (n(13) && (!v || n(19)(function() {
            return p[n(4)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i")
        }))) {
        c = function(t, e) {
            var n = this instanceof c,
                r = s(t),
                i = void 0 === e;
            return !n && r && t.constructor === c && i ? t : o(v ? new l(r && !i ? t.source : t, e) : l((r = t instanceof c) ? t.source : t, r && i ? u.call(t) : e), n ? this : f, c)
        };
        for (var h = function(t) {
                t in c || i(c, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            }, g = a(l), y = 0; g.length > y;) h(g[y++]);
        f.constructor = c, c.prototype = f, n(23)(r, "RegExp", c)
    }
    n(106)("RegExp")
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    "use strict";
    var r = n(39),
        o = n(14),
        i = n(24),
        a = n(142),
        s = n(102),
        u = n(20),
        c = n(152),
        l = n(103);
    o(o.S + o.F * !n(107)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, o, f, d = i(t),
                p = "function" == typeof this ? this : Array,
                v = arguments.length,
                h = v > 1 ? arguments[1] : void 0,
                g = void 0 !== h,
                y = 0,
                m = l(d);
            if (g && (h = r(h, v > 2 ? arguments[2] : void 0, 2)), void 0 == m || p == Array && s(m))
                for (n = new p(e = u(d.length)); e > y; y++) c(n, y, g ? h(d[y], y) : d[y]);
            else
                for (f = m.call(d), n = new p; !(o = f.next()).done; y++) c(n, y, g ? a(f, h, [o.value, y], !0) : o.value);
            return n.length = y, n
        }
    })
}, function(t, e, n) {
    var r = n(268),
        o = n(274);
    t.exports = function(t, e) {
        var n = o(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            var t = {
                LEFT_ARROW: 37,
                RIGHT_ARROW: 39,
                UP_ARROW: 38,
                DOWN_ARROW: 40,
                ENTER: 13,
                SPACEBAR: 32,
                ESCAPE: 27,
                TAB: 9,
                SHIFT_TAB: -9,
                ALT: 18,
                X: 88,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                BACKSPACE: 8,
                isUpOrDownArrow: function(e) {
                    return e === t.DOWN_ARROW || e === t.UP_ARROW
                },
                isLeftOrRightArrow: function(e) {
                    return e === t.LEFT_ARROW || e === t.RIGHT_ARROW
                },
                isArrow: function(e) {
                    return t.isUpOrDownArrow(e) || t.isLeftOrRightArrow(e)
                },
                isPageUpOrPageDown: function(e) {
                    return e === t.PAGE_UP || e === t.PAGE_DOWN
                }
            };
            return t
        }.apply(e, [])) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            return (window.SKYPE_SETTINGS || {}).settings
        }.call(e, n, e, t)) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r = n(50),
        o = n(4)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    var r = n(17).f,
        o = n(37),
        i = n(4)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var r, o;
    r = [e, n(206)], void 0 === (o = function(t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.eitherConditioned = t.conditioned = void 0;
        var n = (0, e.curry)(function(t, e) {
                if (t()) return e()
            }),
            r = (0, e.curry)(function(t, e, n) {
                return t() ? e() : n()
            });
        t.conditioned = n, t.eitherConditioned = r
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(17).f,
        o = Function.prototype,
        i = /^\s*function ([^ (]*)/;
    "name" in o || n(13) && r(o, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(i)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    var r = n(14),
        o = n(154)(!1);
    r(r.S, "Object", {
        values: function(t) {
            return o(t)
        }
    })
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(93), n(36), n(25)], void 0 === (o = function(t, e, n) {
            var r, o, i = {
                    path: "/",
                    domain: "." + n.getDomainName(),
                    expiry: 864e5,
                    secure: !0
                },
                a = function() {
                    r = t.create("SC");
                    var o = (new Date).getTime(),
                        i = e.getCurrentState().charAt(0);
                    r.set("CC"), r.set("CCY"), r.set("ENV"), r.set("TZ"), r.set("VAT"), r.set("VER"), r.set("LC", n.getLanguage()), r.set("RS", i), r.set("TS", o), u()
                },
                s = function() {
                    var o = !1,
                        i = e.getCurrentState().charAt(0);
                    void 0 === (r = t.get("SC")).get("LC") && (r.set("LC", n.getLanguage()), o = !0), r.get("RS") !== i && (r.set("RS", i), o = !0), o && u()
                },
                u = function() {
                    c(), r.store(i)
                },
                c = function() {
                    var t = (new Date).getTime();
                    r.set("TM", t)
                },
                l = function() {
                    e.on(e.CHANGE, function(t) {
                        v("RS", t.current.charAt(0))
                    })
                },
                f = function() {
                    o = {}, d("CountryCode", "CC"), d("CreatedTimestamp", "TS"), d("CurrencyPreference", "CCY"), d("Environment", "ENV"), d("LanguageCode", "LC"), d("ModifiedTimestamp", "TM"), d("ResponsiveState", "RS"), d("TimeZone", "TZ"), d("Vat", "VAT"), d("Version", "VER")
                },
                d = function(t, e) {
                    o["get" + t] = p.bind(this, e), o["set" + t] = v.bind(this, e)
                },
                p = function(t) {
                    return r.get(t)
                },
                v = function(t, e) {
                    r.set(t, e), u()
                };
            return t.exists("SC") ? s() : a(), l(), f(), o
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(0)], void 0 === (o = function(t) {
            return {
                get: function(e) {
                    var n = t.extend({
                        type: "GET",
                        crossDomain: !0
                    }, e);
                    t.support.cors = !0, t.ajax(n)
                },
                post: function(e) {
                    var n = t.extend({
                        type: "POST",
                        crossDomain: !0
                    }, e);
                    t.ajax(n)
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(11), n(12)], void 0 === (o = function() {
        "use strict";

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        r = [n(25), n(65), n(157), n(58), n(36), n(238), n(95), n(5)], void 0 === (o = function(t, e, n, r, o, a, s, u) {
            var c = t.getEnvironment(),
                l = e.getLanguageCode(),
                f = n.isAuthenticated() ? "1" : "0",
                d = $("html").data("pagepath"),
                p = p || new a(r.errorsLogger.token),
                v = function(t, e) {
                    return "object" === i(t) && null !== t ? JSON.stringify(t) : t || e
                };
            return {
                logConsoleError: function(t, e) {
                    var n = {
                        env: c,
                        lang: l,
                        auth: f,
                        pagename: d,
                        responsive: o.getCurrentState(),
                        err: v(t, "error"),
                        requireType: t && t.requireType ? t.requireType : "",
                        modules: t && t.requireModules ? t.requireModules : "",
                        method: e
                    };
                    p.logEvent("consoleError", n)
                },
                logEvent: function(t, e, n) {
                    var r = {
                        env: c,
                        lang: l,
                        auth: f,
                        pagename: d,
                        responsive: o.getCurrentState(),
                        eventName: t,
                        eventSource: n,
                        eventProperties: v(e, "")
                    };
                    p.logEvent("event", r)
                },
                logPerformanceData: function(t) {
                    var e = {
                        env: c,
                        lang: l,
                        pagename: d,
                        responsive: o.getCurrentState(),
                        platform: s.getPlatform(),
                        loadTime: t.loadTime,
                        fallbackServed: t.fallbackServed,
                        fallbackReason: t.fallbackReason,
                        experienceServed: t.experienceServed,
                        userEntitlement: t.userExperienceEntitlement,
                        subscriptionsEntitlement: u.pluck(t, "userEntitlementState", "calling") || !1,
                        creditEntitlement: u.pluck(t, "userEntitlementState", "credit") || !1,
                        skypeNumbersEntitlement: u.pluck(t, "userEntitlementState", "skypeNumber") || !1,
                        callerIdEntitlement: u.pluck(t, "userEntitlementState", "callerId") || !1
                    };
                    p.logEvent("performance_data", e)
                },
                logApiProblem: function(t) {
                    var e = {
                        env: c,
                        lang: l,
                        pagename: d,
                        responsive: o.getCurrentState(),
                        platform: s.getPlatform(),
                        endPoint: u.pluck(t, "endPoint"),
                        errorCode: u.pluck(t, "data", "code"),
                        errorText: u.pluck(t, "data", "text")
                    };
                    p.logEvent("api_log", e)
                },
                logApi: function(e) {
                    var n = {
                        env: c,
                        lang: l,
                        pagename: d,
                        responsive: o.getCurrentState(),
                        platform: s.getPlatform(),
                        endPoint: u.pluck(e, "endPoint"),
                        loadTime: u.pluck(e, "loadTime"),
                        status: u.pluck(e, "status"),
                        errorCode: u.pluck(e, "errorCode"),
                        errorText: u.pluck(e, "errorText")
                    };
                    p.logEvent("api_log", n), c === t.DEV_ENVIRONMENT && console.log("[Aria tracking][api_log]", n)
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(87),
        o = n(270),
        i = n(271),
        a = "[object Null]",
        s = "[object Undefined]",
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? s : a : u && u in Object(t) ? o(t) : i(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    var r, o;
    r = [e, n(6)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(t) {
            return (t || "").split(/[?#]/)[0]
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(61),
        o = n(53),
        i = n(40),
        a = n(71),
        s = n(37),
        u = n(134),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(13) ? c : function(t, e) {
        if (t = i(t), e = a(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (s(t, e)) return o(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(27),
        o = n(3),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(43) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var r = n(45),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    var r = n(9),
        o = n(75),
        i = n(4)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n)
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(14);
    r(r.S + r.F, "Object", {
        assign: n(205)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(59),
        o = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var i = n.call(t, e);
            if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(9);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    n(207);
    var r = n(23),
        o = n(21),
        i = n(19),
        a = n(72),
        s = n(4),
        u = n(110),
        c = s("species"),
        l = !i(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var d = s(t),
            p = !i(function() {
                var e = {};
                return e[d] = function() {
                    return 7
                }, 7 != "" [t](e)
            }),
            v = p ? !i(function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                    return n
                }), n[d](""), !e
            }) : void 0;
        if (!p || !v || "replace" === t && !l || "split" === t && !f) {
            var h = /./ [d],
                g = n(a, d, "" [t], function(t, e, n, r, o) {
                    return e.exec === u ? p && !o ? {
                        done: !0,
                        value: h.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                }),
                y = g[0],
                m = g[1];
            r(String.prototype, t, y), o(RegExp.prototype, d, 2 == e ? function(t, e) {
                return m.call(t, this, e)
            } : function(t) {
                return m.call(t, this)
            })
        }
    }
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            return document
        }.call(e, n, e, t)) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r, o;
    r = [n(11), n(12)], void 0 === (o = function() {
        "use strict";

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        r = [n(42)], void 0 === (o = function(t) {
            var e, n, r = function() {
                    var t = {
                        removeItem: function(e) {
                            this.hasOwnProperty(e) && isNaN(parseInt(e)) && delete t[e]
                        }
                    };
                    return t
                },
                o = function(t) {
                    var e;
                    try {
                        t && (e = JSON.parse(t))
                    } catch (t) {
                        return
                    }
                    return e
                },
                a = function(t) {
                    return t ? JSON.stringify(t) : void 0
                },
                s = {
                    setLocalData: function(t, n) {
                        try {
                            return e[t] = a(n), e[t]
                        } catch (t) {
                            return
                        }
                    },
                    getLocalData: function(t) {
                        return o(e[t])
                    },
                    hasLocalData: function(t) {
                        return void 0 !== e[t]
                    },
                    removeLocalData: function(t) {
                        e.removeItem(t)
                    },
                    setSessionData: function(t, e) {
                        try {
                            return n[t] = a(e), n[t]
                        } catch (t) {
                            return
                        }
                    },
                    getSessionData: function(t) {
                        return o(n[t])
                    },
                    hasSessionData: function(t) {
                        return void 0 !== n[t]
                    },
                    removeSessionData: function(t) {
                        n.removeItem(t)
                    },
                    isNativeStorageAvailable: function() {
                        try {
                            return "object" === i(t.localStorage) && (t.localStorage.setItem("testStorage", 1), t.localStorage.removeItem("testStorage"), !0)
                        } catch (t) {
                            return !1
                        }
                    }
                };
            return s.isNativeStorageAvailable() ? (e = t.localStorage, n = t.sessionStorage) : (e = r(), n = r()), s
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(258),
        o = n(259),
        i = n(260),
        a = n(261),
        s = n(262);

    function u(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, t.exports = u
}, function(t, e, n) {
    var r = n(167);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(32).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(56)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(283);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(125),
        o = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e
    }
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(7), n(22), n(0), n(15)], void 0 === (o = function(t, e, n) {
            var r, o, i, a, s = ["(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"],
                u = ["(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)", "(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 124.8dpi)", "(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)"],
                c = "XS",
                l = "SM",
                f = "UHF",
                d = "MD",
                p = "LG",
                v = "XLG",
                h = "responsiveV2.change",
                g = "responsiveV2.resize",
                y = {
                    jQElement: n("body")
                };
            t.create(y);
            var m = function(t, e) {
                    var r = n.extend({
                        name: t
                    }, e);
                    y.trigger(t, r)
                },
                _ = function() {
                    a && clearTimeout(a), a = setTimeout(function() {
                        S();
                        var t = y.calculateCurrentState();
                        void 0 !== t && r !== t && (o = r, r = t, E())
                    }, 100)
                },
                E = function() {
                    b(o), O(r), m(h, {
                        previous: o,
                        current: r,
                        size: {
                            width: i.width(),
                            height: i.height()
                        }
                    })
                },
                S = function() {
                    m(g, {
                        size: {
                            width: i.width(),
                            height: i.height()
                        }
                    })
                },
                b = function(t) {
                    switch (t) {
                        case c:
                            m("XS.off");
                            break;
                        case l:
                            m("SM.off");
                            break;
                        case f:
                            m("UHF.off");
                            break;
                        case d:
                            m("MD.off");
                            break;
                        case p:
                            m("LG.off");
                            break;
                        case v:
                            m("XLG.off")
                    }
                },
                O = function(t) {
                    switch (t) {
                        case c:
                            m("XS.on");
                            break;
                        case l:
                            m("SM.on");
                            break;
                        case f:
                            m("UHF.on");
                            break;
                        case d:
                            m("MD.on");
                            break;
                        case p:
                            m("LG.on");
                            break;
                        case v:
                            m("XLG.on")
                    }
                };

            function T(t) {
                return t.some(function(t) {
                    return window.matchMedia && "function" == typeof window.matchMedia && window.matchMedia(t).matches
                })
            }
            return y.isExtraSmall = function() {
                return y.getCurrentState() === c
            }, y.isSmall = function() {
                return y.getCurrentState() === l
            }, y.isMedium = function() {
                var t = y.getCurrentState();
                return t === f || t === d
            }, y.isLarge = function() {
                return y.getCurrentState() === p
            }, y.isExtraLarge = function() {
                return y.getCurrentState() === v
            }, y.isDesktop = function() {
                var t = y.getCurrentState();
                return t === p || t === v
            }, y.isTablet = function() {
                return y.isMedium()
            }, y.isMobileUHF = function() {
                var t = y.getCurrentState();
                return t === c || t === l || t === f
            }, y.isMobile = function() {
                var t = y.getCurrentState();
                return t === c || t === l
            }, y.getCurrentState = function() {
                return y.calculateCurrentState()
            }, y.calculateCurrentState = function() {
                var t = e.getWidth();
                return t <= 480 ? c : t <= 767 ? l : t <= 859 ? f : t <= 1024 ? d : t <= 1440 ? p : v
            }, y.isHD = function() {
                return T(u)
            }, y.isRetina = function() {
                return T(s)
            }, y.XS = c, y.SM = l, y.UHF = f, y.MD = d, y.LG = p, y.XLG = v, y.XS_ON = "XS.on", y.XS_OFF = "XS.off", y.SM_ON = "SM.on", y.SM_OFF = "SM.off", y.UHF_ON = "UHF.on", y.UHF_OFF = "UHF.off", y.MD_ON = "MD.on", y.MD_OFF = "MD.off", y.LG_ON = "LG.on", y.LG_OFF = "LG.off", y.XLG_ON = "XLG.on", y.XLG_OFF = "XLG.off", y.CHANGE = h, y.RESIZE = g, i = n(window).on("resize", _), r = y.calculateCurrentState(), y
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(6)], void 0 === (o = function() {
        "use strict";
        r = [n(222)], void 0 === (o = function(t) {
            t.create || (t.create = function() {
                function t() {}
                return function(e) {
                    if (1 !== arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
                    return t.prototype = e, new t
                }
            }());
            return {
                convertObjectToString: function(t, e, n) {
                    var r, o, i = "",
                        a = [];
                    for (r in t) t.hasOwnProperty(r) && a.push(r);
                    for (o = 0; o < a.length; o++) "" !== i && (i += e), i += a[o] + n + escape(t[a[o]]);
                    return i
                },
                convertStringToObject: function(t, e, n) {
                    var r, o, i = t ? t.split(e) : [],
                        a = {};
                    for (r = 0; r < i.length; r++) a[(o = i[r].split(n))[0]] = unescape(o[1]);
                    return a
                },
                refreshPseudoElements: function(t) {
                    if (document.all && !document.addEventListener) {
                        var e = $("<style>:before, :after { content:none !important }</style>");
                        $("head").append(e), setTimeout(function() {
                            e.remove(), t && t()
                        }, 0)
                    }
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(63)], void 0 === (o = function() {
        "use strict";
        r = [n(92), n(25), n(0)], void 0 === (o = function(t, e, n) {
            var r = {},
                o = function(o) {
                    var i = this.name + "=" + function(e) {
                        var o = e in r ? r[e] : "";
                        return "object" === n.type(o) && (o = t.convertObjectToString(o, ":", "=")), o
                    }(this.name);
                    o && (i += function(t) {
                        var e = "";
                        t.expiry && (e += "; expires=" + new Date((new Date).getTime() + t.expiry).toGMTString());
                        return t.path && (e += "; path=" + t.path), t.domain && (e += "; domain=" + t.domain), t.secure && (e += "; secure"), e
                    }(o)), e.setCookie(i)
                },
                i = function(t) {
                    for (var r = "", o = t + "=", i = e.getCookies(), a = 0; a < i.length; a++) {
                        var s = n.trim(i[a]);
                        0 === s.indexOf(o) && (r = s.substring(o.length, s.length))
                    }
                    return r
                },
                a = function(t, e) {
                    this.name = t, r[this.name] = e
                };
            a.prototype.store = function(t) {
                o.call(this, t)
            }, a.prototype.remove = function(t) {
                var e = n.extend({}, t, {
                    expiry: -1
                });
                delete r[this.name], this.store(e)
            };
            var s = function() {
                a.apply(this, arguments), r[this.name] = r[this.name] || {}
            };
            (s.prototype = Object.create(a.prototype)).set = function(t, e) {
                void 0 === e && (e = ""), r[this.name][t] = e
            }, s.prototype.get = function(t) {
                return r[this.name][t]
            }, s.prototype.isEmpty = function() {
                return n.isEmptyObject(r[this.name])
            };
            var u = function() {
                a.apply(this, arguments)
            };
            (u.prototype = Object.create(a.prototype)).isEmpty = function() {
                return 0 === r[this.name].length
            }, u.prototype.set = function(t) {
                r[this.name] = t
            }, u.prototype.get = function() {
                return r[this.name]
            };
            var c = {
                exists: function(t) {
                    return e.cookieExists(t)
                },
                get: function(e) {
                    var n;
                    if (this.exists(e)) {
                        var r = i(e),
                            o = t.convertStringToObject(r, ":", "=");
                        n = c.create(e, o)
                    }
                    return n
                },
                getSingleValue: function(t) {
                    var e;
                    if (this.exists(t)) {
                        var n = i(t);
                        e = this.createSingleValue(t, n)
                    }
                    return e
                },
                create: function(t, e) {
                    return new s(t, e)
                },
                createSingleValue: function(t, e) {
                    return new u(t, e)
                }
            };
            return c
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(9),
        o = n(192),
        i = n(100),
        a = n(99)("IE_PROTO"),
        s = function() {},
        u = function() {
            var t, e = n(97)("iframe"),
                r = i.length;
            for (e.style.display = "none", n(139).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[i[r]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var r, o;
    r = [n(52), n(41)], void 0 === (o = function() {
        "use strict";
        r = [n(0), n(83), n(22), n(47)], void 0 === (o = function(t, e, n, r) {
            var o = "windows_xp",
                i = "windows_vista",
                a = "windows_7",
                s = "windows_8",
                u = "mac_os_x_10_9_lower",
                c = "mac_os_x_10_10_higher",
                l = n.getUserAgent();
            var f = {
                WINDOWS: "windows",
                WINDOWS_AU_UNDETECTED: "windows_au_undetected",
                WINDOWS_AU_NONE: "windows_au_none",
                WINDOWS_AU: "windows_au",
                WINDOWS_XP: o,
                WINDOWS_VISTA: i,
                WINDOWS_7: a,
                WINDOWS_8: s,
                MAC: "mac",
                MAC_OS_X_10_9_LOWER: u,
                MAC_OS_X_10_10_HIGHER: c,
                LINUX: "linux",
                LINUX_DEBIAN: "linux_debian",
                LINUX_RPM: "linux_rpm",
                ANDROID: "android",
                IOS: "ios",
                BLACKBERRY: "blackberry",
                MOBILE: "mobile",
                DESKTOP: "desktop",
                IPOD: "ipod",
                IPAD: "ipad",
                IPHONE: "iphone",
                getPlatform: function() {
                    var t = "unknown";
                    return l.match(/windows/i) ? t = "windows" : l.match(/macintosh/i) ? t = "mac" : l.match(/android/i) ? t = "android" : l.match(/linux/i) ? t = "linux" : l.match(/iphone|ipad|ipod/i) ? t = "ios" : l.match(/blackberry/i) && (t = "blackberry"), t
                },
                getIosPlatform: function() {
                    var t = "unknown";
                    return l.match(/iphone/i) ? t = "iphone" : l.match(/ipad/i) ? t = "ipad" : l.match(/ipod/i) && (t = "ipod"), t
                },
                getBrowser: function() {
                    var t = "unknown";
                    return l.match(/CriOS/i) ? t = "chrome" : l.match(/safari/i) && (t = "safari"), t
                },
                getDevice: function() {
                    return this.isMobilePlatform() ? "mobile" : "desktop"
                },
                isMobilePlatform: function() {
                    var e = this.getPlatform(),
                        n = !1;
                    return (t.inArray(e, ["android", "ios", "blackberry"]) > -1 || "windows" === e && l.match(/phone|iemobile/i)) && (n = !0), n
                },
                isDesktopPlatform: function() {
                    return t.inArray(f.getPlatform(), [f.WINDOWS, f.MAC, f.LINUX]) > -1
                },
                getWindowsSpecificPlatform: function() {
                    var t = function(t) {
                        return t.indexOf("Windows NT 5.1") > -1 || t.indexOf("Windows NT 5.2") > -1 ? o : t.indexOf("Windows NT 6.0") > -1 ? i : t.indexOf("Windows NT 6.1") > -1 ? a : t.indexOf("Windows NT 6.2") > -1 || t.indexOf("Windows NT 6.3") > -1 ? s : void 0
                    }(l);
                    if (void 0 !== t) return t;
                    if (r.isChrome()) {
                        var n = e.createElement("canvas").getContext("2d");
                        n.font = "64px Segoe UI Emoji";
                        n.measureText("🐱‍👤").width, n.measureText("👨‍⚕").width;
                        var u = n.measureText("🧛🏻").width;
                        return -1 === l.indexOf("Windows NT") ? "windows_au_undetected" : u <= 90 ? "windows_au" : "windows_au_none"
                    }
                    if (r.isEdge()) {
                        var c = new RegExp("edge/([0-9]+)", "gi").exec(l);
                        return null === c || 2 !== c.length ? "windows_au_undetected" : parseInt(c[1], 10) >= 17.17 ? "windows_au" : "windows_au_none"
                    }
                    return "windows_au_undetected"
                },
                getLinuxSpecificPlatform: function() {
                    if ("linux" === this.getPlatform()) return -1 != l.indexOf("Debian") || -1 != l.indexOf("Ubuntu") ? "linux_debian" : "linux_rpm"
                },
                getMacOsSpecificPlatform: function() {
                    if ("mac" === this.getPlatform()) return function(t) {
                        return t.match(/(Mac OS X 10[_|\.][0-9]([_|\.]|\D))/) ? u : t.match(/(Mac OS X 10[_|\.]10)/) ? c : void 0
                    }(l)
                }
            };
            return f
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(6)], void 0 === (o = function() {
        "use strict";
        r = [n(58), n(66), n(48), n(7), n(84), n(244), n(2), n(31), n(67), n(127)], void 0 === (o = function(t, e, n, r, o, i, a, s, u) {
            var c, l = {},
                f = !1,
                d = s.create("profile"),
                p = {
                    isProfileCached: !1,
                    isAjaxBeenCalled: !1,
                    cachedProfile: null
                },
                v = "l";
            l = r.create();
            var h = function() {
                    n.on(n.EVENTS.READY, function(t) {
                        var e = t.skypetoken;
                        a.isNullOrUndefined(e) ? S() : (t.fromCache && (c = o.getSessionData("profile"), p.isProfileCached = !0, p.isAjaxBeenCalled = !0), E(e, y))
                    }), n.on(n.EVENTS.REMOVED, S)
                },
                g = function() {
                    return (new Date).getTime()
                },
                y = function(t) {
                    if (!a.isNullOrUndefined(t)) {
                        var e = g() + 36e5;
                        c = t, o.setSessionData("profileValidUntil", e), o.setSessionData("profile", t), l.trigger("PROFILE_READY", t), m(), b("SIGNIN")
                    }
                },
                m = function() {
                    setTimeout(S, 36e5)
                },
                _ = function(n) {
                    p.isAjaxBeenCalled = !0;
                    var r = t.api.skypeProfileApiUrlBase + "users/self/profile/";
                    d.start(), e.get({
                        url: r,
                        headers: {
                            Accept: "application/json; ver=1.0",
                            "X-Skypetoken": n
                        },
                        success: function(t) {
                            d.lap("success"), u.logApi({
                                endPoint: r,
                                loadTime: d.diff("success"),
                                status: "success"
                            }), t && (t.avatarUrl ? t.avatarUrl = i.setQueryParams(t.avatarUrl, {
                                size: v
                            }) : t.avatarUrl = "DEFAULT_AVATAR"), p.isProfileCached = !0, p.profile = t, l.trigger("PROFILE_CACHED", t), l.off("PROFILE_CACHED")
                        },
                        error: function(t) {
                            d.lap("error"), u.logApi({
                                endPoint: r,
                                loadTime: d.diff("fail"),
                                status: "fail",
                                errorCode: pluck(t, "code"),
                                errorText: pluck(t, "text")
                            }), l.trigger("PROFILE_ERROR", t)
                        }
                    })
                },
                E = function(t, e) {
                    return p.isAjaxBeenCalled ? p.isProfileCached ? (e(p.profile), !1) : void l.on("PROFILE_CACHED", e) : (l.on("PROFILE_CACHED", e), _(t), !1)
                },
                S = function() {
                    o.removeSessionData("profileValidUntil"), o.removeSessionData("profile"), c = null, f = !0, l.trigger("PROFILE_REMOVED"), b("SIGNOUT")
                },
                b = function(t) {
                    var e = window.awa;
                    if (e) {
                        var n = "SIGNIN" === t,
                            r = {
                                behavior: e.behavior[t],
                                content: JSON.stringify({})
                            };
                        e.getConfig().isLoggedIn = n, e.ct.captureContentUpdate(r)
                    }
                };
            return {
                initialize: function() {
                    c = null, f = !1, h()
                },
                on: function(t, e) {
                    t = t.split(" ");
                    for (var n = 0; n < t.length; ++n) c && "PROFILE_READY" === t[n] ? e(c) : f && "PROFILE_REMOVED" === t[n] ? e() : l.on(t[n], e)
                },
                PROFILE_READY: "PROFILE_READY",
                PROFILE_ERROR: "PROFILE_ERROR",
                PROFILE_REMOVED: "PROFILE_REMOVED",
                DEFAULT_AVATAR: "DEFAULT_AVATAR",
                getProfile: E,
                getCurrentProfile: function() {
                    var t = o.hasSessionData("profile"),
                        e = o.getSessionData("profileValidUntil") || -1,
                        n = g();
                    return t && e >= n ? o.getSessionData("profile") : null
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(18),
        o = n(3).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(50);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var r = n(74)("keys"),
        o = n(44);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(54),
        o = n(4)("iterator"),
        i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}, function(t, e, n) {
    var r = n(59),
        o = n(4)("iterator"),
        i = n(54);
    t.exports = n(27).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function(t, e, n) {
    "use strict";
    var r = n(75);
    t.exports.f = function(t) {
        return new function(t) {
            var e, n;
            this.promise = new t(function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            }), this.resolve = r(e), this.reject = r(n)
        }(t)
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e, n) {
        for (var o in e) r(t, o, e[o], n);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        o = n(17),
        i = n(13),
        a = n(4)("species");
    t.exports = function(t) {
        var e = r[t];
        i && e && !e[a] && o.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var r = n(4)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, i[r] = function() {
                return a
            }, t(i)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var r, o;
    r = [e, n(2), n(11), n(12), n(1), n(8), n(26), n(79)], void 0 === (o = function(t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.create = a;
        var n = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                    }
            return e.default = t, e
        }(e);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var i = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this._debug = !1, this._internal = Object.assign({}, e)
            }
            return function(t, e, n) {
                e && o(t.prototype, e), n && o(t, n)
            }(t, [{
                key: "_internalUpdate",
                value: function(t, e) {
                    if (n.isNullOrUndefined(e) || "object" !== r(e)) throw new Error("state update expected an object, but got ".concat(JSON.stringify(e)));
                    var o = Object.keys(e).filter(function(e) {
                            return t.hasOwnProperty(e)
                        }),
                        i = new Object(t);
                    return o.forEach(function(t) {
                        "object" !== r(e[t]) || Array.isArray(e[t]) ? i[t] = e[t] : i[t] = this._internalUpdate(i[t], e[t])
                    }), i
                }
            }, {
                key: "get",
                value: function(t) {
                    return n.isNullOrUndefinedOrEmpty(t) ? (this._debug && console.log("State ".concat(this._debugName, " get: ").concat(JSON.stringify(this._internal))), this._internal) : (this._debug && console.log("State ".concat(this._debugName, " get ").concat(t, " value: ").concat(JSON.stringify(this._internal[t]))), this._internal[t])
                }
            }, {
                key: "update",
                value: function(t) {
                    return this._debug && console.log("State ".concat(this._debugName, " update ").concat(JSON.stringify(t))), this._internal = this._internalUpdate(this._internal, t), this
                }
            }, {
                key: "debug",
                value: function(t, e) {
                    return this._debug = e, this._debugName = t, this
                }
            }]), t
        }();

        function a(t) {
            return new i(t)
        }
        t.default = a
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(135)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(81),
        o = RegExp.prototype.exec,
        i = String.prototype.replace,
        a = o,
        s = function() {
            var t = /a/,
                e = /b*/g;
            return o.call(t, "a"), o.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
        }(),
        u = void 0 !== /()??/.exec("")[1];
    (s || u) && (a = function(t) {
        var e, n, a, c, l = this;
        return u && (n = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))), s && (e = l.lastIndex), a = o.call(l, t), s && a && (l.lastIndex = l.global ? a.index + a[0].length : e), u && a && a.length > 1 && i.call(a[0], n, function() {
            for (c = 1; c < arguments.length - 2; c++) void 0 === arguments[c] && (a[c] = void 0)
        }), a
    }), t.exports = a
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(2), n(38), n(55), n(28), n(29), n(11), n(12), n(1)], void 0 === (o = function(t, e, n) {
        "use strict";

        function r(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pathLens = void 0;
        t.pathLens = function() {
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
            return {
                get: function(t) {
                    return e.pluck.apply(void 0, [t].concat(o))
                },
                set: function(t, i) {
                    if (o.length <= 0) return i;
                    if (1 === o.length) return i[o[0]] = t, i;
                    var a = e.pluck.apply(void 0, [i].concat(r(o.slice(0, o.length - 1))));
                    return (0, n.isNullOrUndefined)(a) ? i : (a[o[o.length - 1]] = t, i)
                }
            }
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(9),
        o = n(213),
        i = n(80);
    n(82)("search", 1, function(t, e, n, a) {
        return [function(n) {
            var r = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = r(t),
                u = String(this),
                c = s.lastIndex;
            o(c, 0) || (s.lastIndex = 0);
            var l = i(s, u);
            return o(s.lastIndex, c) || (s.lastIndex = c), null === l ? -1 : l.index
        }]
    })
}, function(t, e, n) {
    var r = n(14),
        o = n(215),
        i = n(40),
        a = n(73),
        s = n(152);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, r = i(t), u = a.f, c = o(r), l = {}, f = 0; c.length > f;) void 0 !== (n = u(r, e = c[f++])) && s(l, e, n);
            return l
        }
    })
}, function(t, e, n) {
    var r, o;
    r = [e, n(62), n(108), n(216), n(217), n(57), n(7), n(5), n(2), n(1), n(6), n(10)], void 0 === (o = function(t, e, n, r, o, i, a, s, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Events = t.create = void 0;
        var c = f(i),
            l = f(a);

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function d(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var p = {
            SelectionChanged: "SelectionChanged",
            ButtonClicked: "ButtonClicked"
        };

        function v(t) {
            return t.hasClass("enable")
        }

        function h(t) {
            var n = o.lenses.list.get(t);
            return (0, e.conditioned)(v.bind(null, n), function() {
                ! function(t) {
                    t.addClass("hidden"), t.removeClass("enable")
                }(n), o.lenses.buttonToggle.get(t).focus()
            })
        }

        function g(t) {
            var n = o.lenses.list.get(t);
            return (0, e.conditioned)(function() {
                return !v(n)
            }, function() {
                ! function(t) {
                    t.addClass("enable"), t.removeClass("hidden")
                }(n), b(t)
            })
        }

        function y(t, e) {
            e.trigger(p.ButtonClicked, _(E(t)))
        }

        function m(t, e) {
            e.stopPropagation(), g(t)
        }
        var _ = function(t) {
                return {
                    text: t.text(),
                    value: t.data("value"),
                    index: t.attr("data-index")
                }
            },
            E = function(t) {
                return o.lenses.listItem.get(t).filter(function(t, e) {
                    return $(e).hasClass("selected")
                })
            },
            S = function(t) {
                var e = o.lenses.buttonContent.get(t).attr("data-item-id");
                return o.lenses.list.get(t).find("#".concat(e))
            },
            b = function(t) {
                return o.lenses.list.get(t).focus()
            },
            O = function(t, e) {
                o.lenses.list.get(t).attr("aria-activedescendant", e.attr("id")), e.addClass("selected").attr("aria-selected", "true")
            };

        function T(t, e) {
            o.lenses.listItem.get(t).removeClass("selected").removeAttr("aria-selected"), O(t, e)
        }

        function I(t, e) {
            O(t, e), T(t, e),
                function(t, e) {
                    e.children().length > 0 ? o.lenses.buttonContent.get(t).html(e.children().clone().attr("tabindex", 0)) : o.lenses.buttonContent.get(t).text(_(e).text), o.lenses.buttonContent.get(t).attr("data-item-id", e.attr("id"))
                }(t, E(t))
        }

        function w(t, e, n, r) {
            I(t, e), r.trigger(p.SelectionChanged, n)
        }
        var A = function(t) {
                return E(t).next()
            },
            x = function(t) {
                return E(t).prev()
            };

        function N(t, n, i) {
            (0, r.$addFilteredHandler)($(document), o.lenses.root.get(t), r.$clickEvents, e.conditioned.bind(null, v.bind(null, o.lenses.list.get(t)), function() {
                T(t, S(t)), h(t)
            })), o.lenses.list.get(t).on("keydown", function(e) {
                [c.default.ESCAPE, c.default.TAB, c.default.SHIFT_TAB].some(function(t) {
                    return e.keyCode === t
                }) && (T(t, S(t)), h(t))
            }), (0, r.$addKeyboardClickEvents)(o.lenses.buttonToggle.get(t), m.bind(this, t)), o.lenses.buttonToggle.get(t).on("keyup", function(e) {
                e.keyCode === c.default.DOWN_ARROW && g(t)
            }), o.lenses.buttonToggle.get(t).on("touchstart", function(t, e, n) {
                e.update({
                    opening: !0
                }), m(t, n)
            }.bind(null, t, n)), o.lenses.buttonToggle.get(t).on("click", m.bind(null, t)), o.lenses.listItem.get(t).on(r.$clickEvents, function(r) {
                return function(t, n, r, o) {
                    (0, e.eitherConditioned)(function() {
                        return r.get("opening")
                    }, function() {
                        n.preventDefault(), r.update({
                            opening: !1
                        })
                    }, function() {
                        var e = $(n.currentTarget);
                        w(t, e, _(e), o), h(t)
                    })
                }(t, r, n, i)
            }), o.lenses.list.get(t).on("keyup", function(n) {
                if (n.keyCode === c.default.UP_ARROW) {
                    var r = x(t);
                    (0, e.conditioned)(function() {
                        return r.length > 0
                    }, T.bind(null, t, r))
                }
                if (n.keyCode === c.default.DOWN_ARROW) {
                    var o = A(t);
                    (0, e.conditioned)(function() {
                        return o.length > 0
                    }, T.bind(null, t, o))
                }
            }), (0, r.$addKeyboardClickEvents)(o.lenses.list.get(t), function() {
                var n = E(t),
                    r = _(n.first());
                (0, e.conditioned)(function() {
                    return n.length > 0
                }, function() {
                    w(t, n, r, i), h(t)
                })
            }), (0, r.$addKeyboardClickEvents)(o.lenses.buttonContent.get(t), y.bind(this, t, i)), o.lenses.buttonContent.get(t).on("touchstart", function(t, e, n) {
                e.update({
                    opening: !0
                }), y(t, n)
            }.bind(this, t, n, i)), o.lenses.buttonContent.get(t).on("click", y.bind(this, t, i))
        }
        var R = function(t, e) {
                return e.filter(function(e, n) {
                    return $(n).data("value") == t
                })
            },
            P = function(t, e) {
                return e.eq(t)
            };

        function C(t, n, r, i) {
            (0, e.conditioned)(function() {
                return r
            }, function() {
                var a = function(t) {
                    var e = (0, s.pluck)(t, "value"),
                        n = (0, s.pluck)(t, "index");
                    return (0, u.isNullOrUndefined)(e) ? (0, u.isNullOrUndefined)(n) ? void 0 : P.bind(null, n) : R.bind(null, e)
                }(r)(o.lenses.listItem.get(t));
                (0, e.conditioned)(function() {
                    return a.length > 0
                }, function() {
                    return i ? I(t, a) : w(t, a, r, n)
                })
            })
        }
        var D = function() {
            function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), !(0, o.isValidInput)(e)) throw new Error("Dropdown button was not initialized properly");
                var i = r.selectedItem,
                    a = (0, o.cacheSelectors)(e),
                    s = l.default.create(),
                    u = (0, n.create)({
                        opening: void 0
                    });
                this.$cachedSelectors = a, this.state = u, this.mediator = s, this.on = this.on.bind(this), this.render = this.render.bind(this, a, this.mediator, i), this.select = this.select.bind(this, a, this.mediator), this.open = this.open.bind(this, a), this.close = this.close.bind(this, a), N(a, u, s), o.lenses.list.get(a).attr("tabindex", -1)
            }
            return function(t, e, n) {
                e && d(t.prototype, e), n && d(t, n)
            }(t, [{
                key: "on",
                value: function(t, e) {
                    var n = this;
                    t.split(" ").forEach(function(t) {
                        return n.mediator.on(t, e)
                    })
                }
            }, {
                key: "select",
                value: function(t, e, n, r) {
                    C(t, e, n, r)
                }
            }, {
                key: "open",
                value: function(t) {
                    g(t)
                }
            }, {
                key: "close",
                value: function(t) {
                    h(t)
                }
            }, {
                key: "render",
                value: function(t, e, n) {
                    C(t, e, n)
                }
            }]), t
        }();
        t.create = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new D(t, e)
        }, t.Events = p
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(7), n(221), n(0), n(15)], void 0 === (o = function(t, e, n) {
            var r = {},
                o = [];
            r[2] = "INVALID_PARAMETER_VALUE", r[5] = "HTML5_PLAYER_ERROR", r[100] = "VIDEO_NOT_FOUND", r[101] = "EMBEDDING_NOT_ALLOWED", r[150] = "EMBEDDING_NOT_ALLOWED";
            var i = {},
                a = function(t) {
                    if (!t.isVideoReady) throw "player object has not yet been instantiated, please call load() first"
                },
                s = function(r) {
                    e.init(), this.player = void 0, this.isVideoReady = !1, this.jQElement = n(r), this.id = this.jQElement.attr("id"), this.firstPlaying = !0, t.create(this);
                    var o = this.trigger;
                    if (this.trigger = function(t, e) {
                            o.call(this, t, function(t, e) {
                                return {
                                    name: t,
                                    event: e,
                                    video: this
                                }
                            }.call(this, t, e))
                        }, !this.id) throw "Video containing element id missing";
                    i[this.id] = i[this.id] || [];
                    var a = this;
                    this.on("video.ready", function() {
                        a.isVideoReady = !0;
                        for (var t = i[this.id], e = 0; e < t.length; e++) t[e].call(a, arguments)
                    })
                };
            return s.prototype.load = function(t, n, r, i) {
                var a = this;
                this.videoId = t, this.height = r, this.width = n;
                var s = a.generateVideoPlayerConfig(i);
                return e.ready(function() {
                    a.player = e.createVideoPlayer(a.id, a.videoId, s), o.push(a)
                }), this
            }, s.prototype.play = function() {
                return a(this), this.player.playVideo(), this
            }, s.prototype.pause = function() {
                return a(this), this.player.pauseVideo(), this
            }, s.prototype.stop = function() {
                return a(this), this.player.stopVideo(), this
            }, s.prototype.seekTo = function(t) {
                return a(this), this.player.getCurrentTime() !== t && this.player.seekTo(t, !0), this
            }, s.prototype.reset = function() {
                return a(this), this.seekTo(0), this
            }, s.prototype.setVolume = function(t) {
                return a(this), this.player.setVolume(t), this
            }, s.prototype.mute = function() {
                return a(this), this.player.mute(), this
            }, s.prototype.unmute = function() {
                return a(this), this.player.unMute(), this
            }, s.prototype.getStatus = function() {
                return this.isVideoReady ? this.player.getPlayerState() : e.PlayerState.UNSTARTED
            }, s.prototype.generateVideoPlayerConfig = function(t) {
                var e = {
                    html5: document.createElement("video").play ? 1 : 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    color: "white",
                    wmode: "opaque",
                    autohide: 1,
                    autoplay: 0
                };
                return {
                    videoId: this.videoId,
                    width: this.width,
                    height: this.height,
                    playerVars: n.extend(e, t),
                    events: {
                        onReady: this.eventHandler.call(this, "video.ready"),
                        onStateChange: this.eventHandler.call(this, "video.statechange"),
                        onPlaybackQualityChange: this.eventHandler.call(this, "video.qualitychange"),
                        onPlaybackRateChange: this.eventHandler.call(this, "video.ratechange"),
                        onError: this.eventHandler.call(this, "video.error"),
                        onApiChange: this.eventHandler.call(this, "video.apichange")
                    }
                }
            }, s.prototype.isReady = function() {
                return -1 !== this.getStatus()
            }, s.prototype.ready = function(t) {
                this.isVideoReady ? t.call(this, arguments) : i[this.id].push(t)
            }, s.prototype.isPlaying = function() {
                return this.getStatus() === e.PlayerState.PLAYING
            }, s.prototype.isPaused = function() {
                return this.getStatus() === e.PlayerState.PAUSED
            }, s.prototype.isStopped = function() {
                return !this.isPlaying() && !this.isPaused()
            }, s.prototype.isMuted = function() {
                return this.player.isMuted()
            }, s.prototype.hasEnded = function() {
                return this.getStatus() === e.PlayerState.ENDED
            }, s.prototype.isInOverlay = function() {
                return !!this.jQElement.parents(".overlayWrapper").length
            }, s.prototype.reload = function() {
                e.reloadVideoPlayer(this.player)
            }, s.prototype.eventHandler = function(t) {
                var n = this;
                return function(r) {
                    var o = t;
                    "video.statechange" === o && (o = function(t) {
                        var n = "";
                        switch (t.data) {
                            case e.PlayerState.UNSTARTED:
                                n = "video.unstarted";
                                break;
                            case e.PlayerState.ENDED:
                                n = "video.ended";
                                break;
                            case e.PlayerState.PLAYING:
                                n = "video.playing";
                                break;
                            case e.PlayerState.PAUSED:
                                n = "video.paused";
                                break;
                            case e.PlayerState.BUFFERING:
                                n = "video.buffering";
                                break;
                            case e.PlayerState.CUED:
                                n = "video.cued";
                                break;
                            default:
                                throw "unhandled player event fired"
                        }
                        return n
                    }(r)), n.trigger(o, r), "video.playing" === o && !0 === n.firstPlaying && (n.firstPlaying = !1, n.trigger("video.firstplaying", r))
                }
            }, s.READY = "video.ready", s.UNSTARTED = "video.unstarted", s.ENDED = "video.ended", s.FIRST_PLAYING = "video.firstplaying", s.PLAYING = "video.playing", s.PAUSED = "video.paused", s.BUFFERING = "video.buffering", s.CUED = "video.cued", s.QUALITY_CHANGE = "video.qualitychange", s.RATE_CHANGE = "video.ratechange", s.ERROR = "video.error", s.API_CHANGE = "video.apichange", s.ERROR_INVALID_PARAMETER_VALUE = "INVALID_PARAMETER_VALUE", s.ERROR_HTML5_PLAYER_ERROR = "HTML5_PLAYER_ERROR", s.ERROR_VIDEO_NOT_FOUND = "VIDEO_NOT_FOUND", s.ERROR_EMBEDDING_NOT_ALLOWED = "EMBEDDING_NOT_ALLOWED", s.ERROR_UNKNOWN = "UNKNOWN_ERROR", s.errorCodes = r, s.allVideos = o, s
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    for (var r, o = n(3), i = n(21), a = n(44), s = a("typed_array"), u = a("view"), c = !(!o.ArrayBuffer || !o.DataView), l = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = o[d[f++]]) ? (i(r.prototype, s, !0), i(r.prototype, u, !0)) : l = !1;
    t.exports = {
        ABV: c,
        CONSTR: l,
        TYPED: s,
        VIEW: u
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    var r = n(56)(n(32), "Map");
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    var r = n(275),
        o = n(282),
        i = n(284),
        a = n(285),
        s = n(286);

    function u(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, t.exports = u
}, function(t, e, n) {
    var r = n(304),
        o = n(311),
        i = n(123);
    t.exports = function(t) {
        return i(t) ? r(t) : o(t)
    }
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function(t, e, n) {
    var r = n(168),
        o = n(122);
    t.exports = function(t) {
        return null != t && o(t.length) && !r(t)
    }
}, function(t, e, n) {
    var r = n(33),
        o = n(125),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || a.test(t) || !i.test(t) || null != e && t in Object(e)
    }
}, function(t, e, n) {
    var r = n(68),
        o = n(69),
        i = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || o(t) && r(t) == i
    }
}, function(t, e, n) {
    var r, o;
    r = [n(6), n(8), n(26), n(1)], void 0 === (o = function() {
        "use strict";
        r = [n(0), n(96), n(7), n(182), n(31), n(128), n(2), n(5), n(62)], void 0 === (o = function(t, e, n, r, o, i, a, s, u) {
            var c = {
                    NOTSET: "NOTSET",
                    NEO: "NEO",
                    OKO: "OKO",
                    GREEN: "GREEN"
                },
                l = {
                    MODE_CHANGED: "MODE_CHANGED",
                    LOG: "LOG"
                },
                f = "NORMAL",
                d = "FALLBACK",
                p = {
                    stopWatchName: "toggledUX",
                    stopWatchFallbackName: "toggledFallbackUX",
                    fallbackMode: c.NEO,
                    externalSlow: "failedToDownloadAppInTime",
                    internalSlow: "internalProblems"
                },
                v = {
                    notSet: void 0,
                    neo: void 0,
                    oko: void 0,
                    green: void 0
                },
                h = s.pluck(window, "EXTERNAL_STORAGE") || {},
                g = n.create(),
                y = o.create("fromStart"),
                m = i.create({
                    activeMode: c.NOTSET,
                    flow: void 0
                });

            function _() {
                return a.isNullOrUndefined(m.get("flow"))
            }

            function E(t) {
                u.conditioned(_, function() {
                    m.update({
                        flow: t
                    })
                })
            }

            function S() {
                return !0 === h.externalHeroRender
            }

            function b() {
                return S() && _()
            }

            function O(t) {
                return function(e) {
                    if (U(e)) return L(t), !0
                }
            }
            var T = function(t) {
                    return U(t)
                },
                I = O(),
                w = {
                    fallbackServed: !0,
                    fallbackReason: p.internalSlow
                },
                A = O(w),
                x = u.conditioned.bind(this, function() {
                    return !0 !== h.externalHeroRender && (_() || m.get("flow") === f)
                }),
                N = u.conditioned.bind(this, function() {
                    return b() || !0 !== h.externalHeroRender && _() || m.get("flow") !== f
                }),
                R = function(t) {
                    x(function() {
                        E(f), M(t)
                    })
                },
                P = function() {
                    x(function() {
                        E(f), M()
                    })
                },
                C = function() {
                    x(function() {
                        E(f), M()
                    })
                },
                D = u.conditioned.bind(this, b).bind(this, function() {
                    E(d);
                    var t = y.get(p.stopWatchFallbackName) - y.get(o.CONSTS.defaultKey);
                    j(p.fallbackMode, T), g.trigger(l.LOG, {
                        loadTime: t,
                        experienceServed: p.fallbackMode,
                        fallbackServed: !0,
                        fallbackReason: p.externalSlow
                    })
                }),
                k = N.bind(this, function() {
                    E(d), S() ? (m.update({
                        activeMode: p.fallbackMode
                    }), L(w)) : j(p.fallbackMode, A)
                });

            function L(t) {
                var e = (new Date).getTime();
                if (a.isNullOrUndefined(y.get(p.stopWatchName))) {
                    var n = y.set(p.stopWatchName, e);
                    g.trigger(l.LOG, {
                        loadTime: n,
                        experienceServed: m.get("activeMode"),
                        fallbackServed: s.pluck(t, "fallbackServed") || !1,
                        fallbackReason: s.pluck(t, "fallbackReason")
                    })
                }
            }

            function M(t) {
                ! function(t) {
                    return null !== t && void 0 !== t && (t.username || "").length > 0
                }(t) ? j(c.NEO, I): j(c.GREEN, I)
            }

            function j(t, e) {
                if (void 0 !== t && null !== t && t !== m.get("activeMode")) switch (t) {
                    case "NOTSET":
                    case "NEO":
                    case "OKO":
                    case "GREEN":
                        m.update({
                            activeMode: function(t) {
                                var e = !1;
                                return !a.isNullOrUndefined(t) && c.hasOwnProperty(t) || (e = !1), m.get("activeMode") === c.NOTSET && (e = !0), e
                            }(t) ? t : m.get("activeMode")
                        }), e(m.get("activeMode")) && g.trigger(l.MODE_CHANGED, m.get("activeMode"));
                        break;
                    default:
                        if (!c.hasOwnProperty(t)) throw new Error("Unknown page mode: " + t);
                        throw new Error("Page mode " + t + " is not implemented")
                }
            }

            function U(e) {
                var n = !1;
                return Object.keys(v).forEach(function(r) {
                    r.toLowerCase() === e.toLowerCase() ? t(v[r]).hasClass("visible") || (t(v[r]).addClass("visible"), n = !0) : t(v[r]).removeClass("visible")
                }), n && (h.heroRender = !0), n
            }
            return {
                init: function(t) {
                    if (null === t || void 0 === t) throw new Error("Wrong toggle initialization. Selectors are required");
                    h.slowLoad = !1, v = t, r.on(r.EVENTS.externalSlowLoad, D), e.on(e.PROFILE_READY, R), e.on(e.PROFILE_REMOVED, P), e.on(e.PROFILE_ERROR, C), r.on(r.EVENTS.slowLoad, k)
                },
                on: function(t, e) {
                    (t || "").split(" ").forEach(function(t) {
                        l.hasOwnProperty(t) && (t === l.MODE_CHANGED && e(m.get("activeMode")), g.on(t, e))
                    })
                },
                EVENTS: l,
                MODES: c
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(185), n(36), n(0), n(132), n(15)], void 0 === (o = function(t, e, n) {
            var r = {},
                o = function(t) {
                    var e = t.filter("a[href], select, button, textarea, input, [tabindex]").add(t.find("a[href], select, button, textarea, input, [tabindex]"));
                    return e = e.not("[tabindex=-1], [disabled], :hidden, .hiddenFocus *")
                };
            return r.getNavigationContainer = function() {
                return n(".siteNavigation")
            }, r.removeHover = function() {
                r.getNavigationContainer().find(".hover > [role='menu']").attr("aria-expanded", !1), r.getNavigationContainer().find(".hover > a.usernameBtn").each(function() {
                    n(this).attr("data-expanded", !1)
                }), r.getNavigationContainer().find(".hover").removeClass("hover")
            }, r.transferFocusToContentBeforeNavigation = function() {
                r.removeHover();
                var t = function t(e) {
                    var n;
                    if (!e.is("body")) {
                        var r = e.prevAll(),
                            i = o(r);
                        n = i.length > 0 ? i.last() : t(e.parent())
                    }
                    return n
                }(r.getNavigationContainer());
                return t && t.focus(), t
            }, r.transferFocusToContentAfterNavigation = function() {
                r.removeHover();
                var t = function t(e) {
                    var n;
                    if (!e.is("body")) {
                        var r = e.nextAll(),
                            i = o(r);
                        n = i.length > 0 ? i.first() : t(e.parent())
                    }
                    return n
                }(r.getNavigationContainer());
                return t && t.focus(), t
            }, r.height = function() {
                return r.getNavigationContainer().height()
            }, r.isSticky = function() {
                var t = r.getNavigationContainer();
                return e.getCurrentState() === e.MOBILE ? t.hasClass("sticky") : t.hasClass("stickyDesktop")
            }, r.isMobileMenuOpen = function() {
                return r.getNavigationContainer().hasClass("open")
            }, r.isNewNavigation = function() {
                var t = r.getNavigationContainer();
                return t.length > 0 && "v3" === t.data("navigation-version")
            }, r.NAV_OPEN_CLASS = "open", r.GLOBAL_NAV_OPEN_CLASS = "navOn", r.jQElement = n(".siteNavigation .uhfNavigationBar"), t.isSticky() && (t.initMarginForFixedNav(r.jQElement), t.watchResponsivity(r.jQElement)), r
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(11), n(12), n(1), n(8), n(26)], void 0 === (o = function() {
        "use strict";

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        r = [n(2)], void 0 === (o = function(t) {
            function e(t) {
                this._internal = new Object(t)
            }
            return e.prototype.get = function(e) {
                return t.isNullOrUndefinedOrEmpty(e) ? this._internal : this._internal[e]
            }, e.prototype.update = function(e) {
                return this._internal = function e(n, r) {
                    if (t.isNullOrUndefined(r) || "object" !== i(r)) throw new Error("state update expected an object, but got " + r);
                    var o = Object.keys(r);
                    o = o.filter(function(t) {
                        return n.hasOwnProperty(t)
                    });
                    var a = new Object(n);
                    return o.forEach(function(t) {
                        "object" !== i(r[t]) || Array.isArray(r[t]) ? a[t] = r[t] : a[t] = e(a[t], r[t])
                    }), a
                }(this._internal, e), this
            }, {
                create: function(t) {
                    return new e(t)
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(7)], void 0 === (o = function(t) {
            var e = t.asReplay(t.create(), 1);
            return {
                on: e.on.bind(e),
                trigger: e.trigger.bind(e)
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(227), n(115), n(131), n(25), n(84), n(0), n(158)], void 0 === (o = function(t, e, n, r, o, i) {
            var a = {},
                s = null,
                u = function(t) {
                    return {
                        siteSection: t.data("tracking-section"),
                        ctaArea: t.data("cta-area"),
                        productCode: t.data("product-code"),
                        position: t.data("position"),
                        campaignId: t.data("campaign-id"),
                        videoName: t.data("video-name"),
                        excludeImpression: t.data("exclude-click-impression")
                    }
                },
                c = function(t, e) {
                    var n = i(this).attr("href");
                    n && !t.isDefaultPrevented() && (t.preventDefault(), function(t) {
                        t.preventDefaultOriginal = t.preventDefault, t.preventDefaultExecuted = !1, t.preventDefault = function() {
                            this.preventDefaultOriginal(), this.preventDefaultExecuted = !0
                        }
                    }(t), setTimeout(function() {
                        t.preventDefaultExecuted || r.setLocationHref(n)
                    }, 300)), e()
                },
                l = function(t, e) {
                    return void 0 === t ? i(e) : i(t).find(e)
                },
                f = function(t) {
                    var e = function(t) {
                            var e = {};
                            return l(t, "[data-mvt-configuration]").each(function() {
                                var t, n = i(this),
                                    r = n.data("mvt-configuration"),
                                    o = n.find("[data-mvt-variant]")[0];
                                o ? (t = i(o).data("mvt-variant"), e[r] = t) : e[r] = void 0
                            }), e
                        }(t),
                        n = function() {
                            var t = {};
                            if (o.hasSessionData("mvt")) {
                                var e = o.getSessionData("mvt");
                                e && (t = e)
                            }
                            return t
                        }();
                    for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                    ! function(t) {
                        o.setSessionData("mvt", t)
                    }(n), s = n
                },
                d = function(e, n) {
                    e.on("click", function(e) {
                        c.call(this, e, function() {
                            e.stopPropagation(), t.trackGenericClick(n.position, n.campaignId, s)
                        })
                    })
                },
                p = function(e, n) {
                    e.on("click", function(e) {
                        c.call(this, e, function() {
                            e.stopPropagation(), t.trackDownloadClick(n.position, n.campaignId, s)
                        })
                    })
                },
                v = function(n, r) {
                    var o;
                    n.on(e.FIRST_PLAYING, o = function() {
                        n.off(e.FIRST_PLAYING, o), t.trackVideoEvent(t.VIDEO_EVENTS.Start, r.videoName, s), n.on(e.PLAYING, function() {
                            t.trackVideoEvent(t.VIDEO_EVENTS.Start, r.videoName, s)
                        })
                    }), n.on(e.ENDED, function() {
                        t.trackVideoEvent(t.VIDEO_EVENTS.Complete, r.videoName, s)
                    })
                },
                h = function(e, n) {
                    t.trackImpression(e, n, s)
                },
                g = function(t) {
                    var e = u(t),
                        n = function(t) {
                            return t.position + "_" + t.campaignId
                        }(e);
                    n in a || (h(e.position, e.campaignId), a[n] = !0)
                };
            return {
                setupTracking: function(t) {
                    var e = l(t, "[data-tracking-type]");
                    f(t);
                    for (var n = 0; n < e.length; ++n) {
                        var r = i(e[n]),
                            o = u(r);
                        switch (r.data("tracking-type")) {
                            case "download":
                                p(r, o);
                                break;
                            case "click":
                                d(r, o);
                                break;
                            case "video":
                                v(r, o)
                        }
                    }
                },
                trackPageImpression: function(e) {
                    t.trackPageImpression(e, s)
                },
                trackCustomImpressionEvent: function(t, e) {
                    h(t, e)
                },
                trackElementImpression: g,
                trackAllElementImpressions: function() {
                    i("[data-tracking-type=impression]").each(function() {
                        var t = i(this);
                        t.visible(!0) && t.is(":visible") && g(t), n(this).on("stage", function() {
                            var t = this.jQElement;
                            t.is(":visible") && g(t)
                        })
                    })
                },
                trackCustomClickEvent: function(e, n) {
                    t.trackGenericClick(e, n, s)
                },
                addDownloadClickEventTracking: p,
                addGenericClickEventTracking: d,
                addVideoEventTracking: v,
                clickDelay: 300
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(7), n(57), n(228), n(0), n(42), n(83), n(15), n(158)], void 0 === (o = function(t, e, n, r, o, i) {
            var a, s, u, c, l, f = n.EVENT_NAMES + " keydown",
                d = 0,
                p = 0,
                v = 0,
                h = function(t) {
                    return f.indexOf(t.type) > -1
                },
                g = function() {
                    clearTimeout(u), clearTimeout(c), clearTimeout(l), v = 0, p = 0, d = 0, [].unshift.call(arguments, O.SCROLL), O.trigger.apply(O, arguments)
                },
                y = function() {
                    var t = O.offsetY();
                    t > a ? O.jQElement.trigger(O.SCROLL_DOWNWARD, [t]) : t < a && O.jQElement.trigger(O.SCROLL_UPWARD, [t]), a = t
                },
                m = function(t) {
                    clearTimeout(l);
                    var e = 0 == v++,
                        n = t.which;
                    e ? l = setTimeout(g, O.config.key.timeout) : s !== n ? v = 0 : v >= O.config.key.cumulativeThreshold ? g() : l = setTimeout(g, O.config.key.timeout), s = n
                },
                _ = function(t) {
                    clearTimeout(c);
                    var e = Math.abs(n.getDelta(t));
                    (p += e) >= O.config.wheel.cumulativeThreshold ? g() : c = setTimeout(g, O.config.wheel.timeout)
                },
                E = function() {
                    0 == d++ && (u = setTimeout(g, O.config.bar.timeout))
                },
                S = function() {
                    var t = "body";
                    if ("CSS1Compat" === i.compatMode) {
                        var e = i.documentElement,
                            n = i.body,
                            r = o.pageYOffset || n.scrollTop || e.scrollTop,
                            a = r + 1;
                        o.scrollTo(0, a), e.scrollTop === a && (t = "html"), o.scrollTo(0, r)
                    }
                    return t
                },
                b = function(t) {
                    var e = this.offsetY();
                    return t && t.offset && (e += t.offset), e
                },
                O = function(t) {
                    return new T(t)
                };
            O.SCROLL_UPWARD = "upward", O.SCROLL_DOWNWARD = "downward", O.SCROLL_ANY_DIRECTION = O.SCROLL_UPWARD + " " + O.SCROLL_DOWNWARD, O.SCROLL = "scroll", O.STAGE = "stage", O.UNSTAGE = "unstage", O.config = {
                wheel: {
                    timeout: 250,
                    cumulativeThreshold: 240
                },
                bar: {
                    timeout: 100
                },
                key: {
                    timeout: 250,
                    cumulativeThreshold: 2
                }
            }, O.offsetX = function() {
                return this.jQElement.scrollLeft()
            }, O.offsetY = function() {
                return this.jQElement.scrollTop()
            };
            var T = function(e) {
                this.jQElement = r(e), this.staged = this.jQElement.visible(!0);
                var n = function() {
                    var t = this.jQElement.visible(!0);
                    !this.staged && t ? this.jQElement.trigger(O.STAGE) : this.staged && !t && this.jQElement.trigger(O.UNSTAGE), this.staged = t
                }.bind(this);
                O.on(O.SCROLL_ANY_DIRECTION, n), O.jQElement.on("resize", n), t.create(this)
            };
            return T.prototype.to = function(t) {
                    o.scrollTo(0, b.call(this, t))
                }, T.prototype.smoothTo = function(t) {
                    var e = !!t,
                        n = b.call(this, t),
                        r = this,
                        i = Math.abs(O.offsetY() - n) / 4;
                    i < 400 && (i = 400), O.scrollTopJQElement.animate({
                        scrollTop: n
                    }, i).promise().then(function() {
                        o.scrollTo(0, n), e && t.complete && t.complete.call(r)
                    })
                }, T.prototype.offsetY = function() {
                    return this.jQElement.offset().top
                },
                function() {
                    var i;
                    O.ScrollTarget = T, t.create(O), O.scrollTopJQElement = r(S()), O.jQElement = r(o), O.on(O.SCROLL, y), O.jQElement.on(O.SCROLL, y), a = O.offsetY(), O.jQElement.on(f, function(t) {
                        "keydown" === t.type && e.isUpOrDownArrow(t.which) ? m(t) : n.EVENT_NAMES.indexOf(t.type) > -1 && _(t), i = t
                    }).on("scroll", function(t) {
                        i && h(i) || E(t), i = t
                    })
                }(), O
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(6)], void 0 === (o = function() {
        "use strict";
        r = [n(0), n(22), n(7)], void 0 === (o = function(t, e, n) {
            var r = {};
            n.create(r);
            var o = function() {
                    return function(t) {
                        var e = t.indexOf("?");
                        return e > 0 && (t = t.substr(0, e - 1)), t
                    }(e.getHash().substr(1))
                },
                i = o();
            return e.on("hashchange", function() {
                var t = o();
                "" !== t && function(t, e) {
                    e.length && r.trigger(t, e)
                }("change", t)
            }), {
                on: function(t, e) {
                    t = t.split(" ");
                    for (var n = 0; n < t.length; ++n) "init" === t[n] && i ? e(i) : r.on(t[n], e)
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    n(189), n(38), n(1), n(16), n(198), n(199), t.exports = n(27).Promise
}, function(t, e, n) {
    t.exports = !n(13) && !n(19)(function() {
        return 7 != Object.defineProperty(n(97)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(45),
        o = n(72);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, s = String(o(e)),
                u = r(n),
                c = s.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(43),
        o = n(14),
        i = n(23),
        a = n(21),
        s = n(54),
        u = n(191),
        c = n(60),
        l = n(140),
        f = n(4)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    t.exports = function(t, e, n, v, h, g, y) {
        u(n, e, v);
        var m, _, E, S = function(t) {
                if (!d && t in I) return I[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            b = e + " Iterator",
            O = "values" == h,
            T = !1,
            I = t.prototype,
            w = I[f] || I["@@iterator"] || h && I[h],
            A = w || S(h),
            x = h ? O ? S("entries") : A : void 0,
            N = "Array" == e && I.entries || w;
        if (N && (E = l(N.call(new t))) !== Object.prototype && E.next && (c(E, b, !0), r || "function" == typeof E[f] || a(E, f, p)), O && w && "values" !== w.name && (T = !0, A = function() {
                return w.call(this)
            }), r && !y || !d && !T && I[f] || a(I, f, A), s[e] = A, s[b] = p, h)
            if (m = {
                    values: O ? A : S("values"),
                    keys: g ? A : S("keys"),
                    entries: x
                }, y)
                for (_ in m) _ in I || i(I, _, m[_]);
            else o(o.P + o.F * (d || T), e, m);
        return m
    }
}, function(t, e, n) {
    var r = n(37),
        o = n(40),
        i = n(138)(!1),
        a = n(99)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t),
            u = 0,
            c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; e.length > u;) r(s, n = e[u++]) && (~i(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var r = n(40),
        o = n(20),
        i = n(76);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, u = r(e),
                c = o(u.length),
                l = i(a, c);
            if (t && n != n) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((t || l in u) && u[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var r = n(3).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    var r = n(37),
        o = n(24),
        i = n(99)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var r = n(4)("unscopables"),
        o = Array.prototype;
    void 0 == o[r] && n(21)(o, r, {}), t.exports = function(t) {
        o[r][t] = !0
    }
}, function(t, e, n) {
    var r = n(9);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), e
        }
    }
}, function(t, e, n) {
    var r, o, i, a = n(39),
        s = n(195),
        u = n(139),
        c = n(97),
        l = n(3),
        f = l.process,
        d = l.setImmediate,
        p = l.clearImmediate,
        v = l.MessageChannel,
        h = l.Dispatch,
        g = 0,
        y = {},
        m = function() {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t], e()
            }
        },
        _ = function(t) {
            m.call(t.data)
        };
    d && p || (d = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return y[++g] = function() {
            s("function" == typeof t ? t : Function(t), e)
        }, r(g), g
    }, p = function(t) {
        delete y[t]
    }, "process" == n(50)(f) ? r = function(t) {
        f.nextTick(a(m, t, 1))
    } : h && h.now ? r = function(t) {
        h.now(a(m, t, 1))
    } : v ? (i = (o = new v).port2, o.port1.onmessage = _, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", _, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this), m.call(t)
        }
    } : function(t) {
        setTimeout(a(m, t, 1), 0)
    }), t.exports = {
        set: d,
        clear: p
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var r = n(9),
        o = n(18),
        i = n(104);
    t.exports = function(t, e) {
        if (r(t), o(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    var r = n(3),
        o = n(27),
        i = n(43),
        a = n(147),
        s = n(17).f;
    t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    e.f = n(4)
}, function(t, e, n) {
    var r = n(44)("meta"),
        o = n(18),
        i = n(37),
        a = n(17).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(19)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    l(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!i(t, r)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    l(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return c && f.NEED && u(t) && !i(t, r) && l(t), t
            }
        }
}, function(t, e, n) {
    var r = n(50);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(14),
        o = n(27),
        i = n(19);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
}, function(t, e, n) {
    var r = n(18),
        o = n(50),
        i = n(4)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(17),
        o = n(53);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(39),
        o = n(98),
        i = n(24),
        a = n(20),
        s = n(210);
    t.exports = function(t, e) {
        var n = 1 == t,
            u = 2 == t,
            c = 3 == t,
            l = 4 == t,
            f = 6 == t,
            d = 5 == t || f,
            p = e || s;
        return function(e, s, v) {
            for (var h, g, y = i(e), m = o(y), _ = r(s, v, 3), E = a(m.length), S = 0, b = n ? p(e, E) : u ? p(e, 0) : void 0; E > S; S++)
                if ((d || S in m) && (g = _(h = m[S], S, y), t))
                    if (n) b[S] = g;
                    else if (g) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return S;
                case 2:
                    b.push(h)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : b
        }
    }
}, function(t, e, n) {
    var r = n(13),
        o = n(46),
        i = n(40),
        a = n(61).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, s = i(e), u = o(s), c = u.length, l = 0, f = []; c > l;) n = u[l++], r && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);
            return f
        }
    }
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(15)], void 0 === (o = function() {
            return window.MscomCustomEvent || function() {}
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(10), n(6)], void 0 === (o = function() {
        "use strict";
        r = [n(66), n(36), n(47), n(184), n(22), n(25), n(57), n(7), n(5), n(0), n(15), n(92)], void 0 === (o = function(t, e, n, r, o, i, a, s, u, c) {
            var l, f, d, p, v, h, g = 0,
                y = "",
                m = function() {
                    d = c("html"), v = c("body"), p = c("nav#scom")
                },
                _ = function() {
                    var t = S().appendTo(v).addClass("fade");
                    b().appendTo(v), O().appendTo(t)
                },
                E = function(t) {
                    var e = c(t);
                    return e.length || (e = c("<div>").addClass(t.substring(1))), e
                },
                S = function() {
                    return E(".overlayWrapper")
                },
                b = function() {
                    var t = E(".overlayBackground"),
                        e = i.jQElement.height();
                    return t.height(e), t
                },
                O = function() {
                    var t = E(".overlay");
                    return T(t).appendTo(t), E(".overlayContainer").appendTo(t), t
                },
                T = function() {
                    var t = c("<button>", {
                        type: "button",
                        class: ".closeButton".substring(1),
                        "aria-label": "Exit overlay",
                        "data-button-type": "overlay-close-button",
                        "data-bi-name": "exit-overlay",
                        "data-bi-id": "",
                        "data-bi-area": "Overlay"
                    });
                    return c("<span>").addClass("closeCircle").appendTo(t), c("<span>").addClass("closeIcon").appendTo(t), t
                },
                I = function(t) {
                    i.jQElement.on("keydown", x), c(".overlayBackground").on("click", N), c(".overlayWrapper").on("click", N), c(".overlay .closeButton").on("keydown", x).on("click touchstart", R), w(), t && t()
                },
                w = function() {
                    e.on(e.MOBILE_ON, function() {
                        A(0)
                    }), e.on(e.MOBILE_OFF, function() {
                        A(o.getScrollWidth())
                    })
                },
                A = function(t) {
                    W() && p.css(ot(), t)
                },
                x = function(t) {
                    if (W()) switch (t.which) {
                        case a.ESCAPE:
                        case a.X:
                            t.preventDefault(), D()
                    }
                },
                N = function(t) {
                    var e = c(t.target);
                    (e.is(".overlayBackground") || e.is(".overlayWrapper")) && (t.preventDefault(), D())
                },
                R = function(t) {
                    t.preventDefault(), t.stopPropagation(), D()
                },
                P = function() {
                    c(".overlayWrapper,.overlayBackground").animate({
                        opacity: "1"
                    })
                },
                C = function(t) {
                    var e = this;
                    e.trigger("overlay.opening"), this.contentFunction(function(n) {
                        $(),
                            function(t) {
                                c(".overlayContainer").html(t);
                                var e = c(".overlayWrapper,.overlayBackground");
                                this.isAnimated() ? (e.css({
                                    opacity: "0",
                                    display: "block"
                                }), rt(), P()) : (rt(), e.show())
                            }.call(e, n), l = e, e.trigger("overlay.on"), q(), G(), t && t.call(l)
                    })
                },
                D = function(t) {
                    F() ? k(t) : L(t)
                },
                k = function(t) {
                    var e = V();
                    return U(e, t), n.goBack(function() {
                        l = void 0, B(e, t)
                    }), !1
                },
                L = function(t) {
                    var e = V();
                    U(e, t), M(e), e && e.emptyOnClose && j(), l = void 0, B(e, t)
                },
                M = function(t) {
                    if (t) {
                        var e = c(".overlayWrapper,.overlayBackground");
                        t.isAnimated() ? e.fadeOut({
                            complete: Z
                        }) : (e.hide(), Z(), Q(0, 0))
                    }
                },
                j = function() {
                    c(".overlayContainer").html(""), c(".overlay").css("visibility", ""), c(".overlayOnePlayer").remove(), window.MsOnePlayer && delete window.MsOnePlayer
                },
                U = function(t) {
                    t && (t.trigger("overlay.closing"), h && h.focus())
                },
                B = function(t, e) {
                    t && (t.trigger("overlay.off"), e && e.call(t))
                },
                V = function() {
                    return l
                },
                W = function() {
                    return !!V()
                },
                F = function() {
                    return "true" === c(".overlayWrapper").prop("data-overlay-standalone")
                },
                G = function() {
                    var t, e;
                    f = Y();
                    var n = !1;
                    c(f).off("keydown").on("keydown", function(r) {
                        if (!n) {
                            n = !0;
                            var o = c(".overlayWrapper").find("iframe"),
                                i = o.length;
                            if (i) {
                                var s = o[i - 1];
                                (t = K()) === s && (c(s).after("<div class='fakeFocusVideoEnd' tabindex='0'></div>"), t = K())
                            } else t = K();
                            e = c(".fakeFocusVideoEnd"), z(t)
                        }
                        if (r.which === a.TAB && r.shiftKey) return t.focus(), r.stopPropagation(), !1
                    }), c(".overlay").off("keydown").on("keydown", function(n) {
                        if (t === e[0] && H(e, t, n), "f-full-screen c-glyph glyph-full-screen" === u.pluck(e, "context", "activeElement", "className")) return f.focus(), n.stopPropagation(), !1
                    })
                },
                H = function(t, e, n) {
                    var r = !n.shiftKey;
                    t.off("focus").on("focus", function(t) {
                        return r ? (f.focus(), t.stopPropagation(), !1) : (c(this).prev("iframe")[0].focus(), t.stopPropagation(), !1)
                    })
                },
                z = function(t) {
                    c(t).off("keydown").on("keydown", function(t) {
                        if (t.which === a.TAB) {
                            if (t.target === f) return f.focus(), !1;
                            if (t.target === c(".fakeFocusVideoEnd")) return f.focus(), t.stopPropagation(), !1;
                            if (!t.shiftKey) return f.focus(), t.stopPropagation(), !1
                        }
                    })
                },
                K = function() {
                    var t = c(".overlayWrapper").find("a[href]:visible, textarea:visible, button:visible, input:visible, [tabindex]:visible, [role=tab]:visible, .videoContainer:visible iframe, select:visible"),
                        e = t.length;
                    return 0 !== e ? t[e - 1] : void 0
                },
                Y = function() {
                    return c("button[data-button-type=overlay-close-button]")[0]
                },
                q = function() {
                    Y().focus()
                },
                Q = function(t, e) {
                    c(".overlay").css({
                        "margin-top": t,
                        "margin-bottom": e
                    })
                },
                X = function() {
                    var t = c(window).height(),
                        e = c(".overlay").outerHeight(!0),
                        n = e > t ? 30 : (t - e) / 2;
                    Q(n, n), c(".overlay").attr("aria-labelledby", "overlayHeader")
                },
                $ = function() {
                    var t = o.getScrollWidth();
                    it(t), J(), d.css("overflow-x", "hidden").css("overflow-y", "hidden"), v.addClass("overlayOn"), tt()
                },
                J = function() {
                    v.addClass("borderBoxSizing").removeClass("contentBoxSizing"), p.addClass("borderBoxSizing").removeClass("contentBoxSizing")
                },
                Z = function() {
                    d.css("overflow-x", "").css("overflow-y", ""), v.removeClass("overlayOn"), it(0), v.addClass("contentBoxSizing").removeClass("borderBoxSizing"), p.addClass("contentBoxSizing").removeClass("borderBoxSizing"), et(), Q(0, 0)
                },
                tt = function() {
                    y = i.body.scroll || "yes", i.body.scroll = "no", o.jQElement.on("orientationchange", nt)
                },
                et = function() {
                    o.jQElement.off("orientationchange", nt), i.body.scroll = y
                },
                nt = function() {
                    rt()
                },
                rt = function() {
                    X()
                },
                ot = function() {
                    return "padding-" + (r.isRtl() ? "left" : "right")
                },
                it = function(t) {
                    var r = ot();
                    n.isInternetExplorer() ? v.css(r, t) : v.css("padding-right", t), e.isMobile() || p.css(r, t)
                };

            function at(t) {
                this.contentFunction = t, this.id = ++g, this.emptyOnClose = !0, s.create(this)
            }
            return at.OVERLAY_ON = "overlay.on", at.OVERLAY_OFF = "overlay.off", at.OVERLAY_OPENING = "overlay.opening", at.OVERLAY_CLOSING = "overlay.closing", at.prototype.open = function(t, e) {
                e && e.target && (h = c(e.target).closest("a")), this.isOpen() ? t && t.call(this) : C.call(this, t)
            }, at.prototype.close = function(t) {
                this.isOpen() ? D.call(this, t) : t && t.call(this)
            }, at.prototype.isOpen = function() {
                var t = V();
                return !!t && t.id === this.id
            }, at.prototype.isAnimated = function() {
                return c(".overlayWrapper").hasClass("fade")
            }, at.prototype.enableFadeAnimation = function() {
                c(".overlayWrapper").addClass("fade")
            }, at.prototype.disableFadeAnimation = function() {
                c(".overlayWrapper").removeClass("fade")
            }, at.isAnyOpen = function() {
                return !!V()
            }, at.prototype.content = function() {
                return c(".overlayContainer").html()
            }, at.prototype.contentJQ = function() {
                return c(".overlayContainer")
            }, at.prototype.getClickedLink = function() {
                return h
            }, at.byAjax = function(e) {
                e = function(t) {
                    var e, n = document.createElement("a");
                    n.href = t;
                    var r = n.pathname.split(".");
                    e = r[0];
                    for (var o = 0; o < r.length; o++) 0 === o ? "/" === e.charAt(e.length - 1) ? e = e.substring(0, e.length - 1) + ".ajaxcontent/" : e += ".ajaxcontent" : e = e + "." + r[o];
                    return "/" !== e.charAt(0) && (e = "/" + e), e
                }(e), at.call(this, function(n) {
                    t.get({
                        url: e,
                        success: n
                    })
                })
            }, at.byAjax.prototype = Object.create(at.prototype), at.byAjax.prototype.constructor = at.byAjax, m(), _(), I(), at
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(93)], void 0 === (o = function(t) {
            return {
                isAuthenticated: function() {
                    var e = t.getSingleValue("skplet"),
                        n = new Date,
                        r = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds());
                    return !!e && r < new Date(1e3 * e.get())
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(0)], void 0 === (o = function(t) {
            var e = window.jQuery || t;
            e.fn.visible = function(t, n, r) {
                var o = e(this).eq(0),
                    i = o.get(0),
                    a = e(window),
                    s = a.scrollTop(),
                    u = s + a.height(),
                    c = a.scrollLeft(),
                    l = c + a.width(),
                    f = o.offset().top,
                    d = f + o.height(),
                    p = o.offset().left,
                    v = p + o.width(),
                    h = !0 === t ? d : f,
                    g = !0 === t ? f : d,
                    y = !0 === t ? v : p,
                    m = !0 === t ? p : v,
                    _ = !0 !== n || i.offsetWidth * i.offsetHeight;
                return "both" === (r = r || "both") ? !!_ && g <= u && h >= s && m <= l && y >= c : "vertical" === r ? !!_ && g <= u && h >= s : "horizontal" === r ? !!_ && m <= l && y >= c : void 0
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(232), n(233), n(0), n(15)], void 0 === (o = function(t, e, n) {
            var r = function() {
                    var r = new t(".languageSelector"),
                        i = new e(r.getSelectDropDown()),
                        a = r.getLabel(),
                        s = n("#pickedLanguage");
                    i.setSelectedOption(s.text()), i.on(e.SUBMISSION, function(t, e, n) {
                        n && (r.getOptions()[e].setAsUserLanguageAndRedirect(), o(this))
                    }).on(e.UPDATE_LABEL, function(t, e) {
                        s.text(e)
                    }).on(e.FOCUS, function() {
                        a.addClass("open")
                    }).on(e.BLUR, function() {
                        a.removeClass("open")
                    })
                },
                o = function() {
                    return !0
                };
            document.querySelectorAll(".languageSelector").length && r()
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(237)], void 0 === (o = function() {
        "use strict";
        void 0 === (o = function() {
            return {
                EVENTS: Object.freeze({
                    READY: "ready",
                    READY_CACHE: "ready_cache",
                    ERROR: "error",
                    REMOVED: "tokenremoved"
                }),
                CONSTS: Object.freeze({
                    SILENT_RESPONSE_EVENT: "message",
                    USER_NOT_LOGGED_IN: "invalid_grant",
                    TOKEN_SESSION_KEY: "skypeToken",
                    SKYPE_ID_KEY: "skypeId",
                    TOKEN_SESSION_SIGNINNAME_KEY: "signinName",
                    TOKEN_SESSION_EXPIRATION_KEY: "skypeTokenTimestamp",
                    SW_STOP_NAME: "silentLogin",
                    TOKEN_SESSION_CACHE_EXPIRATION_KEY: "cacheExpiration"
                })
            }
        }.call(e, n, e, t)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        o = n(13),
        i = n(43),
        a = n(116),
        s = n(21),
        u = n(105),
        c = n(19),
        l = n(101),
        f = n(45),
        d = n(20),
        p = n(162),
        v = n(51).f,
        h = n(17).f,
        g = n(163),
        y = n(60),
        m = "prototype",
        _ = "Wrong index!",
        E = r.ArrayBuffer,
        S = r.DataView,
        b = r.Math,
        O = r.RangeError,
        T = r.Infinity,
        I = E,
        w = b.abs,
        A = b.pow,
        x = b.floor,
        N = b.log,
        R = b.LN2,
        P = o ? "_b" : "buffer",
        C = o ? "_l" : "byteLength",
        D = o ? "_o" : "byteOffset";

    function k(t, e, n) {
        var r, o, i, a = new Array(n),
            s = 8 * n - e - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            l = 23 === e ? A(2, -24) - A(2, -77) : 0,
            f = 0,
            d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = w(t)) != t || t === T ? (o = t != t ? 1 : 0, r = u) : (r = x(N(t) / R), t * (i = A(2, -r)) < 1 && (r--, i *= 2), (t += r + c >= 1 ? l / i : l * A(2, 1 - c)) * i >= 2 && (r++, i /= 2), r + c >= u ? (o = 0, r = u) : r + c >= 1 ? (o = (t * i - 1) * A(2, e), r += c) : (o = t * A(2, c - 1) * A(2, e), r = 0)); e >= 8; a[f++] = 255 & o, o /= 256, e -= 8);
        for (r = r << e | o, s += e; s > 0; a[f++] = 255 & r, r /= 256, s -= 8);
        return a[--f] |= 128 * d, a
    }

    function L(t, e, n) {
        var r, o = 8 * n - e - 1,
            i = (1 << o) - 1,
            a = i >> 1,
            s = o - 7,
            u = n - 1,
            c = t[u--],
            l = 127 & c;
        for (c >>= 7; s > 0; l = 256 * l + t[u], u--, s -= 8);
        for (r = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; r = 256 * r + t[u], u--, s -= 8);
        if (0 === l) l = 1 - a;
        else {
            if (l === i) return r ? NaN : c ? -T : T;
            r += A(2, e), l -= a
        }
        return (c ? -1 : 1) * r * A(2, l - e)
    }

    function M(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function j(t) {
        return [255 & t]
    }

    function U(t) {
        return [255 & t, t >> 8 & 255]
    }

    function B(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function V(t) {
        return k(t, 52, 8)
    }

    function W(t) {
        return k(t, 23, 4)
    }

    function F(t, e, n) {
        h(t[m], e, {
            get: function() {
                return this[n]
            }
        })
    }

    function G(t, e, n, r) {
        var o = p(+n);
        if (o + e > t[C]) throw O(_);
        var i = t[P]._b,
            a = o + t[D],
            s = i.slice(a, a + e);
        return r ? s : s.reverse()
    }

    function H(t, e, n, r, o, i) {
        var a = p(+n);
        if (a + e > t[C]) throw O(_);
        for (var s = t[P]._b, u = a + t[D], c = r(+o), l = 0; l < e; l++) s[u + l] = c[i ? l : e - l - 1]
    }
    if (a.ABV) {
        if (!c(function() {
                E(1)
            }) || !c(function() {
                new E(-1)
            }) || c(function() {
                return new E, new E(1.5), new E(NaN), "ArrayBuffer" != E.name
            })) {
            for (var z, K = (E = function(t) {
                    return l(this, E), new I(p(t))
                })[m] = I[m], Y = v(I), q = 0; Y.length > q;)(z = Y[q++]) in E || s(E, z, I[z]);
            i || (K.constructor = E)
        }
        var Q = new S(new E(2)),
            X = S[m].setInt8;
        Q.setInt8(0, 2147483648), Q.setInt8(1, 2147483649), !Q.getInt8(0) && Q.getInt8(1) || u(S[m], {
            setInt8: function(t, e) {
                X.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                X.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else E = function(t) {
        l(this, E, "ArrayBuffer");
        var e = p(t);
        this._b = g.call(new Array(e), 0), this[C] = e
    }, S = function(t, e, n) {
        l(this, S, "DataView"), l(t, E, "DataView");
        var r = t[C],
            o = f(e);
        if (o < 0 || o > r) throw O("Wrong offset!");
        if (o + (n = void 0 === n ? r - o : d(n)) > r) throw O("Wrong length!");
        this[P] = t, this[D] = o, this[C] = n
    }, o && (F(E, "byteLength", "_l"), F(S, "buffer", "_b"), F(S, "byteLength", "_l"), F(S, "byteOffset", "_o")), u(S[m], {
        getInt8: function(t) {
            return G(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return G(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = G(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = G(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return M(G(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return M(G(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return L(G(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return L(G(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            H(this, 1, t, j, e)
        },
        setUint8: function(t, e) {
            H(this, 1, t, j, e)
        },
        setInt16: function(t, e) {
            H(this, 2, t, U, e, arguments[2])
        },
        setUint16: function(t, e) {
            H(this, 2, t, U, e, arguments[2])
        },
        setInt32: function(t, e) {
            H(this, 4, t, B, e, arguments[2])
        },
        setUint32: function(t, e) {
            H(this, 4, t, B, e, arguments[2])
        },
        setFloat32: function(t, e) {
            H(this, 4, t, W, e, arguments[2])
        },
        setFloat64: function(t, e) {
            H(this, 8, t, V, e, arguments[2])
        }
    });
    y(E, "ArrayBuffer"), y(S, "DataView"), s(S[m], a.VIEW, !0), e.ArrayBuffer = E, e.DataView = S
}, function(t, e, n) {
    var r = n(45),
        o = n(20);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = r(t),
            n = o(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(24),
        o = n(76),
        i = n(20);
    t.exports = function(t) {
        for (var e = r(this), n = i(e.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n : o(u, n); c > s;) e[s++] = t;
        return e
    }
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(250)], void 0 === (o = function(t) {
            return t
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
        return o
    }
}, function(t, e, n) {
    var r = n(85),
        o = n(263),
        i = n(264),
        a = n(265),
        s = n(266),
        u = n(267);

    function c(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    c.prototype.clear = o, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = s, c.prototype.set = u, t.exports = c
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(68),
        o = n(119),
        i = "[object AsyncFunction]",
        a = "[object Function]",
        s = "[object GeneratorFunction]",
        u = "[object Proxy]";
    t.exports = function(t) {
        if (!o(t)) return !1;
        var e = r(t);
        return e == a || e == s || e == i || e == u
    }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(269))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    var r = n(287),
        o = n(69);
    t.exports = function t(e, n, i, a, s) {
        return e === n || (null == e || null == n || !o(e) && !o(n) ? e != e && n != n : r(e, n, i, a, t, s))
    }
}, function(t, e, n) {
    var r = n(288),
        o = n(291),
        i = n(292),
        a = 1,
        s = 2;
    t.exports = function(t, e, n, u, c, l) {
        var f = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(f && p > d)) return !1;
        var v = l.get(t);
        if (v && l.get(e)) return v == e;
        var h = -1,
            g = !0,
            y = n & s ? new r : void 0;
        for (l.set(t, e), l.set(e, t); ++h < d;) {
            var m = t[h],
                _ = e[h];
            if (u) var E = f ? u(_, m, h, e, t, l) : u(m, _, h, t, e, l);
            if (void 0 !== E) {
                if (E) continue;
                g = !1;
                break
            }
            if (y) {
                if (!o(e, function(t, e) {
                        if (!i(y, e) && (m === t || c(m, t, n, u, l))) return y.push(e)
                    })) {
                    g = !1;
                    break
                }
            } else if (m !== _ && !c(m, _, n, u, l)) {
                g = !1;
                break
            }
        }
        return l.delete(t), l.delete(e), g
    }
}, function(t, e, n) {
    var r = n(306),
        o = n(69),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.propertyIsEnumerable,
        u = r(function() {
            return arguments
        }()) ? r : function(t) {
            return o(t) && a.call(t, "callee") && !s.call(t, "callee")
        };
    t.exports = u
}, function(t, e, n) {
    (function(t) {
        var r = n(32),
            o = n(307),
            i = e && !e.nodeType && e,
            a = i && "object" == typeof t && t && !t.nodeType && t,
            s = a && a.exports === i ? r.Buffer : void 0,
            u = (s ? s.isBuffer : void 0) || o;
        t.exports = u
    }).call(this, n(117)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var o = typeof t;
        return !!(e = null == e ? n : e) && ("number" == o || "symbol" != o && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(308),
        o = n(309),
        i = n(310),
        a = i && i.isTypedArray,
        s = a ? o(a) : r;
    t.exports = s
}, function(t, e, n) {
    var r = n(119);
    t.exports = function(t) {
        return t == t && !r(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function(t, e, n) {
    var r = n(180),
        o = n(90);
    t.exports = function(t, e) {
        for (var n = 0, i = (e = r(e, t)).length; null != t && n < i;) t = t[o(e[n++])];
        return n && n == i ? t : void 0
    }
}, function(t, e, n) {
    var r = n(33),
        o = n(124),
        i = n(323),
        a = n(326);
    t.exports = function(t, e) {
        return r(t) ? t : o(t, e) ? [t] : i(a(t))
    }
}, function(t, e, n) {
    var r, o;
    r = [e, n(41)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isIE = t.isEdge = t.isOpera = t.isSafari = t.isFirefox = t.isChrome = void 0;
        var e = {
                Chrome: "Chrome",
                Safari: "Safari",
                Firefox: "Firefox",
                Edge: "Edge",
                IE: "IE",
                Opera: "Opera"
            },
            n = function(t, e) {
                return {
                    browser: t,
                    version: e
                }
            },
            r = function(t) {
                return -1 !== t.indexOf("Chrome") && -1 === t.indexOf("Chromium") && -1 === t.indexOf("Edge") && -1 === t.indexOf("OPR") && -1 === t.indexOf("Opera")
            },
            o = function(t) {
                return -1 !== t.indexOf("Firefox") && -1 === t.indexOf("Seamonkey")
            },
            i = function(t) {
                return -1 !== t.indexOf("Safari") && -1 === t.indexOf("Chrome") && -1 === t.indexOf("Chromium")
            },
            a = function(t) {
                return -1 !== t.indexOf("OPR") || -1 !== t.indexOf("Opera")
            },
            s = function(t) {
                return -1 !== t.indexOf("Edge")
            },
            u = function(t) {
                return document.DOCUMENT_NODE || -1 !== t.indexOf("MSIE")
            },
            c = function(t, e) {
                return (e.match(t) || [])[1]
            };
        t.default = function() {
            var t = navigator.userAgent;
            return r(t) ? n(e.Chrome, c(/Chrome\/(\d+)/, t)) : o(t) ? n(e.Firefox, c(/Firefox\/(\d+)/, t)) : i(t) ? n(e.Safari, c(/Version\/(\d+)/, t)) : a(t) ? n(e.Opera, c(/OPR\/(\d+)/, t)) : s(t) ? n(e.Edge, c(/Edge\/(\d+)/, t)) : u(t) ? n(e.IE, c(/MSIE (\d+)/, t)) : void 0
        };
        t.isChrome = function() {
            return r(navigator.userAgent)
        }, t.isFirefox = function() {
            return o(navigator.userAgent)
        }, t.isSafari = function() {
            return i(navigator.userAgent)
        }, t.isOpera = function() {
            return a(navigator.userAgent)
        }, t.isEdge = function() {
            return s(navigator.userAgent)
        }, t.isIE = function() {
            return u(navigator.userAgent)
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(2), n(5), n(31), n(7)], void 0 === (o = function(t, e, n, r) {
            var o, i = {
                    slowLoad: "slowLoad",
                    externalSlowLoad: "externalSlowLoad"
                },
                a = r.asReplay(r.create()),
                s = n.create("fromStart");
            return {
                init: function(r, u) {
                    t.isNullOrUndefined(e.pluck(r, "slowLoad")) && (r.slowLoad = !1);
                    var c = function(e, r, o) {
                        var i = e;
                        return t.isNullOrUndefined(o) || (i = e - (r - s.get(n.CONSTS.defaultKey))), i -= 1
                    }(u, (new Date).getTime(), r);
                    c <= 0 && !0 === r.externalHeroRender ? a.trigger(i.externalSlowLoad, !0) : null !== o && void 0 !== o || (o = setTimeout(function() {
                        a.trigger(i.slowLoad, !0)
                    }, c))
                },
                clear: function() {
                    clearTimeout(o)
                },
                EVENTS: i,
                on: a.on.bind(a)
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(10)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.uhfMoreRender = t.uhfVersions = t.uiSelectors = t.isV2 = t.isAnyVersion = t.version = t.init = void 0;
        var e = "uhfHeader",
            n = "x-hidden",
            r = ["uhfJoin", "uhfAccount"],
            o = {
                more: "#overflow-menu",
                moreList: "#overflow-menu-list",
                customMore: "#uhfMore"
            },
            i = {
                old: "old",
                v2: "v2"
            };

        function a() {
            return ["#headerArea  header[data-header-footprint] .c-uhfh-gcontainer-st"].every(function(t) {
                return $(t).length > 0
            }) ? i.v2 : i.old
        }

        function s() {
            for (var t = a(), e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return n.some(function(e) {
                return e === t
            })
        }
        t.init = function() {
            ! function(t) {
                $("html").addClass("".concat(e, "-").concat(t))
            }(a())
        }, t.version = a, t.isAnyVersion = s, t.isV2 = function() {
            return s(i.v2)
        }, t.uiSelectors = o, t.uhfVersions = i, t.uhfMoreRender = function() {
            if (s(i.v2)) {
                var t = $(o.more),
                    e = t.find("ul li a");
                e.length >= 0 && e.length <= 2 && e.map(function(t, e) {
                    return e.id
                }).get().every(function(t) {
                    return r.some(function(e) {
                        return e === t
                    })
                }) && function(t) {
                    t.addClass(n)
                }(t)
            }
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(0)], void 0 === (o = function(t) {
            var e = function() {
                return t("html").hasClass("rtl") ? "rtl" : "ltr"
            };
            return {
                textDirection: e,
                isRtl: function() {
                    return "rtl" === e()
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(15), n(36), n(0)], void 0 === (o = function(t, e, n) {
            var r = {};
            return r.getNavigationWrapper = function() {
                return r.jQElement
            }, r.isSticky = function() {
                var t = r.getNavigationWrapper();
                return e.getCurrentState() === e.MOBILE ? t.hasClass("sticky") : t.hasClass("stickyDesktop")
            }, r.responsiveMarginForFixedNav = function() {
                r.isSticky() ? r.HTMLjQElement.css("margin-top", r.getNavBarHeight()) : r.HTMLjQElement.css("margin-top", 0)
            }, r.recalculateMarginForFixedNav = function(t) {
                r.HTMLjQElement.css("margin-top", parseInt(r.HTMLjQElement.css("margin-top")) - t.outerHeight())
            }, r.initMarginForFixedNav = function(t) {
                t.data("height", t.outerHeight()), r.HTMLjQElement.css("margin-top", r.getNavBarHeight())
            }, r.initBannersHeight = function(t) {
                if (void 0 !== t) {
                    var e = t.outerHeight();
                    t.addClass("initialized"), setTimeout(function() {
                        r.isSticky() && t.css("max-height", e), t.addClass("show")
                    }, 0)
                }
            }, r.getNavBarHeight = function() {
                var t = 0,
                    e = "#notificationBanner, #cookiePolicy, #appBanner";
                return n("body").hasClass("v2") && (e += ", nav"), n("#nav-wrapper").find(e).each(function() {
                    var e = n(this);
                    e.hasClass("closed") || (t += e.hasClass("initialized") && e.data("height") ? parseInt(e.data("height")) : e.outerHeight())
                }), t
            }, r.updateBannersMaxHeight = function(t) {
                if (void 0 !== t)
                    if (r.isSticky()) {
                        var e = t.find(".watchHeight").outerHeight();
                        t.data("height", e), t.css("max-height", e)
                    } else t.data("height", 0), t.css("max-height", "")
            }, r.openBanner = function(t) {
                t.removeClass("noexist"), r.isSticky() && r.initMarginForFixedNav(t), r.initBannersHeight(t)
            }, r.closeBanner = function(t) {
                r.isSticky() && r.recalculateMarginForFixedNav(t), t.css("max-height", 0).data("height", 0), t.removeClass("show").addClass("closed")
            }, r.watchResponsivity = function(t) {
                e.on(e.RESIZE, function() {
                    t.hasClass("closed") || r.updateBannersMaxHeight(t), r.responsiveMarginForFixedNav()
                })
            }, r.jQElement = n("#nav-wrapper"), r.HTMLjQElement = n("html"), r
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(18),
        o = n(224).set;
    t.exports = function(t, e, n) {
        var i, a = e.constructor;
        return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(t, i), t
    }
}, function(t, e, n) {
    n(188), t.exports = n(200)
}, function(t, e, n) {
    var r, o;
    r = [n(133)], void 0 === (o = function() {
        "use strict"
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    "use strict";
    var r = n(59),
        o = {};
    o[n(4)("toStringTag")] = "z", o + "" != "[object z]" && n(23)(Object.prototype, "toString", function() {
        return "[object " + r(this) + "]"
    }, !0)
}, function(t, e, n) {
    t.exports = n(74)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    "use strict";
    var r = n(94),
        o = n(53),
        i = n(60),
        a = {};
    n(21)(a, n(4)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }), i(t, e + " Iterator")
    }
}, function(t, e, n) {
    var r = n(17),
        o = n(9),
        i = n(46);
    t.exports = n(13) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, a = i(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var r = n(39),
        o = n(142),
        i = n(102),
        a = n(9),
        s = n(20),
        u = n(103),
        c = {},
        l = {};
    (e = t.exports = function(t, e, n, f, d) {
        var p, v, h, g, y = d ? function() {
                return t
            } : u(t),
            m = r(n, f, e ? 2 : 1),
            _ = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (i(y)) {
            for (p = s(t.length); p > _; _++)
                if ((g = e ? m(a(v = t[_])[0], v[1]) : m(t[_])) === c || g === l) return g
        } else
            for (h = y.call(t); !(v = h.next()).done;)
                if ((g = o(h, m, v.value, e)) === c || g === l) return g
    }).BREAK = c, e.RETURN = l
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var r = n(3),
        o = n(143).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = "process" == n(50)(a);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, o;
            for (u && (r = a.domain) && r.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (u) n = function() {
            a.nextTick(c)
        };
        else if (!i || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                n = function() {
                    l.then(c)
                }
            } else n = function() {
                o.call(r, c)
            };
        else {
            var f = !0,
                d = document.createTextNode("");
            new i(c).observe(d, {
                characterData: !0
            }), n = function() {
                d.data = f = !f
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o
        }
    }
}, function(t, e, n) {
    var r = n(3).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, e, n) {
    "use strict";
    var r = n(14),
        o = n(27),
        i = n(3),
        a = n(77),
        s = n(145);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, o.Promise || i.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return s(e, t()).then(function() {
                    return n
                })
            } : t, n ? function(n) {
                return s(e, t()).then(function() {
                    throw n
                })
            } : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(14),
        o = n(104),
        i = n(144);
    r(r.S, "Promise", {
        try: function(t) {
            var e = o.f(this),
                n = i(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function(t, e, n) {
    var r, o;
    r = [e, n(201), n(229), n(247), n(343), n(349), n(351), n(353), n(357), n(126)], void 0 === (o = function(t, e, n, r, o, i, a, s, u, c) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.homeModule = t.masterModule = t.cmsComponentsModule = t.toggleModule = void 0;
        var l = E(e),
            f = E(n),
            d = E(r),
            p = _(o),
            v = _(i),
            h = _(a),
            g = _(s),
            y = _(u),
            m = _(c);

        function _(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function E(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                    }
            return e.default = t, e
        }[h.default].map(function(t) {
            return t()
        }), (0, y.default)([p.default, v.default, g.default].map(function(t) {
            return t()
        })), t.toggleModule = m.default, t.cmsComponentsModule = l, t.masterModule = f, t.homeModule = d
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(202), n(114), n(218), n(220), n(223)], void 0 === (o = function(t, e, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.collapsibleMenu = t.dropdown = t.device = void 0;
        var o = s(e),
            i = s(n),
            a = s(r);

        function s(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                    }
            return e.default = t, e
        }
        t.device = o, t.dropdown = i, t.collapsibleMenu = a
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(2), n(108), n(62), n(7), n(208), n(212), n(214), n(113), n(8), n(26), n(1), n(6)], void 0 === (o = function(t, e, n, r, o, i, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Modes = t.Events = t.create = void 0;
        var u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o);

        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(n, !0).forEach(function(e) {
                    f(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var d = l({}, a.Events),
            p = l({}, a.Modes, {}, s.Modes),
            v = "",
            h = {
                dataMode: "screen-mode"
            };

        function g(t, e, n, o) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return (0, r.eitherConditioned)(function() {
                return t.get("mode") === p.Video
            }, function() {
                return e.remove(), n.render(i)
            }, function() {
                return n.remove(), e.render(o)
            })
        }

        function y(t, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                c = (0, n.create)({
                    mode: function(t, e) {
                        return t.root.get(e).data(h.dataMode) || p.Image
                    }(t, r)
                }),
                f = u.default.asReplay(u.default.create()),
                y = (0, s.init)(t, r),
                m = (0, a.init)(t, r, o, c);
            return m.on(d.Error, function(t) {
                c.update({
                    mode: p.Image
                }), g(c, y, m, (0, e.isNullOrUndefinedOrEmpty)(i.screen) ? v : i.screen, o.video || {}), f.trigger(d.Error, t)
            }), g(c, y, m, (0, e.isNullOrUndefinedOrEmpty)(i.screen) ? v : i.screen, o.video || {}), l({}, y, {}, m, {
                getDeviceNativeElement: function() {
                    return t.root.get(r).get(0)
                },
                getMode: function() {
                    return c.get("mode")
                },
                switchScreen: function(t, e, n, r) {
                    switch (n.get("mode")) {
                        case p.Video:
                            e.changeScreen(r.index);
                            break;
                        default:
                            t.changeScreen(r.screen)
                    }
                }.bind(null, y, m, c),
                on: function(t, e, n) {
                    e.split(" ").forEach(function(e) {
                        return t.on(e, n)
                    })
                }.bind(null, f)
            })
        }
        t.create = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!(0, i.isValidInput)(t)) throw new Error("Device was not initialized properly");
            var n = (0, i.cacheSelectors)(t);
            return {
                init: y.bind(null, i.lenses, n, e)
            }
        }, t.Events = d, t.Modes = p
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(46),
        o = n(78),
        i = n(61);
    t.exports = function(t) {
        var e = r(t),
            n = o.f;
        if (n)
            for (var a, s = n(t), u = i.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var r = n(40),
        o = n(51).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == i.call(t) ? function(t) {
            try {
                return o(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : o(r(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        o = n(46),
        i = n(78),
        a = n(61),
        s = n(24),
        u = n(98),
        c = Object.assign;
    t.exports = !c || n(19)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach(function(t) {
            e[t] = t
        }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
    }) ? function(t, e) {
        for (var n = s(t), c = arguments.length, l = 1, f = i.f, d = a.f; c > l;)
            for (var p, v = u(arguments[l++]), h = f ? o(v).concat(f(v)) : o(v), g = h.length, y = 0; g > y;) p = h[y++], r && !d.call(v, p) || (n[p] = v[p]);
        return n
    } : c
}, function(t, e, n) {
    var r;
    void 0 === (r = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.curry = function t(e) {
            return function() {
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                return r.length >= e.length ? e.apply(void 0, r) : t(e.bind(null, r))
            }
        }
    }.apply(e, [e])) || (t.exports = r)
}, function(t, e, n) {
    "use strict";
    var r = n(110);
    n(14)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, function(t, e, n) {
    var r, o;
    r = [e, n(111), n(2), n(10), n(1), n(8), n(64)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.cacheSelectors = t.isValidInput = t.lenses = void 0;
        var r = {
            root: (0, e.pathLens)("root"),
            screen: (0, e.pathLens)("screen"),
            video: (0, e.pathLens)("video")
        };
        t.lenses = r, t.isValidInput = function(t) {
            return !(0, n.isNullOrUndefined)(t) && Object.values(r).map(function(e) {
                return (0, n.isNullOrUndefined)(e.get(t))
            }).every(function(t) {
                return !t
            })
        }, t.cacheSelectors = function(t) {
            var e = {
                root: void 0,
                screen: void 0,
                video: void 0
            };
            return r.root.set($(t.root), e), r.screen.set(r.root.get(e).find(r.screen.get(t)), e), r.video.set(r.root.get(e).find(r.video.get(t)), e), e
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    n(13) && "g" != /./g.flags && n(17).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(81)
    })
}, function(t, e, n) {
    var r = n(211);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, n) {
    var r = n(18),
        o = n(149),
        i = n(4)("species");
    t.exports = function(t) {
        var e;
        return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    var r, o;
    r = [e, n(2), n(91), n(7), n(79), n(10), n(1), n(6)], void 0 === (o = function(t, e, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Events = t.Modes = t.init = void 0;
        var o = i(n);

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var a = {
                baseVideoUrlData: "src",
                impVideoUrlData: "imp-src"
            },
            s = {
                Error: "Error"
            },
            u = {
                Video: "Video"
            },
            c = i(r).default.create({});

        function l(t, n, r, o, i) {
            var a = t.video.get(n).find("video")[0];
            (0, e.isNullOrUndefined)(a) || (a.currentTime = r[i], a.play())
        }

        function f(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = t.video.get(e),
                i = document.createElement("video"),
                l = o.default.isDesktop() && (o.default.isRetina() || o.default.isHD()) ? a.impVideoUrlData : a.baseVideoUrlData,
                f = Object.assign({}, {
                    playsinline: !0,
                    muted: !0,
                    loop: !0,
                    controls: !0,
                    poster: "https://secure.skypeassets.com/content/dam/scom/new-skype/video-section/img/transparent.png",
                    autoplay: !0,
                    src: r.data(l)
                }, n);
            return i.muted = f.muted, i.loop = f.loop, i.poster = f.poster, i.autoplay = f.autoplay, i.controls = f.controls, i.playsinline = f.playsinline, f.playsinline && i.setAttribute("webkit-playsinline", ""), f.playsinline && i.setAttribute("playsinline", ""), i.src = f.src, i.tabIndex = 0, r.find("video").remove(), r.append(i), i.onerror = function() {
                ! function(t, e) {
                    t.trigger(s.Error, {
                        code: e.error.code,
                        message: e.error.message
                    })
                }(c, i, event)
            }, u.Video
        }
        t.init = function(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 ? arguments[3] : void 0;
            return {
                render: f.bind(null, t, n),
                remove: function(t, e) {
                    t.video.get(e).find("video").remove()
                }.bind(null, t, n),
                getNativeElement: function() {
                    return t.video.get(n).find("video")[0]
                },
                getTimestamps: function() {
                    return r.timestamps
                },
                changeScreen: function(t, e, n, r, o) {
                    l(t, e, n.timestamps, 0, o)
                }.bind(null, t, n, r, o),
                forwardToTimestamp: l.bind(null, t, n, r.timestamps || [], o),
                forwardToSec: function(t, n, r) {
                    var o = t.video.get(n).find("video")[0];
                    (0, e.isNullOrUndefined)(o) || (o.currentTime = r)
                }.bind(null, t, n),
                on: function(t, e, n) {
                    e.split(" ").forEach(function(e) {
                        return t.on(e, n)
                    })
                }.bind(null, c)
            }
        }, t.Modes = u, t.Events = s
    }.apply(e, r)) || (t.exports = o)
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    var r;
    void 0 === (r = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = {
            Image: "Image"
        };

        function n(t, n, r) {
            return t.screen.get(n).css("background-image", "url(".concat(r, ")")), e.Image
        }
        t.init = function(t, e) {
            return {
                render: n.bind(null, t, e),
                remove: function(t, e) {
                    t.screen.get(e).css("background-image", "none")
                }.bind(null, t, e),
                changeScreen: function(t, e, r) {
                    return n(t, e, r)
                }.bind(null, t, e)
            }
        }, t.Modes = e
    }.apply(e, [e])) || (t.exports = r)
}, function(t, e, n) {
    var r = n(51),
        o = n(78),
        i = n(9),
        a = n(3).Reflect;
    t.exports = a && a.ownKeys || function(t) {
        var e = r.f(i(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r, o;
    r = [e, n(2), n(57)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.$addKeyboardClickEvents = t.$addFilteredHandler = t.$addHandler = t.$clickEvents = t.clickEvents = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
        var o = ["click", "touchstart"],
            i = o.join(" ");
        t.clickEvents = o, t.$clickEvents = i, t.$addHandler = function(t, e, n) {
            var r;
            t.on(e, function() {
                r || (r = !0, n.apply(this, [].slice.call(arguments)), r = !1)
            })
        }, t.$addFilteredHandler = function(t, n, r, o) {
            t.on(r, function(t) {
                var r = t.target;
                !(0, e.isNullOrUndefined)(r) && $(r).closest(n).length > 0 || o.apply(this, [].slice.call(arguments))
            })
        }, t.$addKeyboardClickEvents = function(t, e) {
            t.on("keypress", function(t) {
                t.keyCode !== r.default.SPACEBAR && t.keyCode !== r.default.ENTER || e(t)
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(111), n(2), n(10), n(1), n(8), n(64)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.cacheSelectors = t.isValidInput = t.lenses = void 0;
        var r = {
            root: (0, e.pathLens)("root"),
            buttonWrapper: (0, e.pathLens)("button", "wrapper"),
            buttonContent: (0, e.pathLens)("button", "content"),
            buttonToggle: (0, e.pathLens)("button", "toggle"),
            list: (0, e.pathLens)("list", "root"),
            listItem: (0, e.pathLens)("list", "item"),
            optionsSource: (0, e.pathLens)("source", "root"),
            optionsSourceItem: (0, e.pathLens)("source", "item")
        };
        t.lenses = r, t.isValidInput = function(t) {
            return !(0, n.isNullOrUndefined)(t) && Object.values(r).map(function(e) {
                return (0, n.isNullOrUndefined)(e.get(t))
            }).every(function(t) {
                return !t
            })
        }, t.cacheSelectors = function(t) {
            var e = {
                root: void 0,
                button: {
                    wrapper: void 0,
                    content: void 0,
                    toggle: void 0
                },
                list: {
                    root: void 0,
                    item: void 0
                },
                source: {
                    root: void 0,
                    item: void 0
                }
            };
            return r.root.set($(r.root.get(t)), e), r.optionsSource.set($(r.optionsSource.get(t)), e), r.optionsSourceItem.set(r.optionsSource.get(e).find(r.optionsSourceItem.get(t)), e), r.buttonWrapper.set(r.root.get(e).find(r.buttonWrapper.get(t)), e), r.buttonContent.set(r.buttonWrapper.get(e).find(r.buttonContent.get(t)), e), r.buttonToggle.set(r.buttonWrapper.get(e).find(r.buttonToggle.get(t)), e), r.list.set(r.root.get(e).find(r.list.get(t)), e), r.listItem.set(r.list.get(e).find(r.listItem.get(t)), e), e
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(114), n(62), n(108), n(219), n(91)], void 0 === (o = function(t, e, n, r, o, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.create = void 0;
        var a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
        var s = {
                NotSet: "NotSet",
                Folded: "Folded",
                Unfolded: "Unfolded"
            },
            u = (0, r.create)({
                mode: s.NotSet,
                minRequiredWidth: void 0
            });
        var c = function(t, e) {
                var n = function(t) {
                    var e = 20;
                    return t.each(function(t, n) {
                        return e += $(n).outerWidth(!0)
                    }), e
                }(t);
                return e.update({
                    minRequiredWidth: n
                }), n
            },
            l = function(t, e) {
                return (0, n.eitherConditioned)(function(t) {
                    return t.get("mode") === s.Unfolded
                }.bind(null, e), c.bind(null, t, e), function(t) {
                    return t.get("minRequiredWidth")
                }.bind(null, e))
            };

        function f(t, e, n, r) {
            if (r !== n.get("mode")) {
                switch (r) {
                    case s.Unfolded:
                        o.lenses.foldedState.get(t).addClass("hidden invisible"), o.lenses.unfoldedRoot.get(t).removeClass("hidden invisible"), n.update({
                            mode: s.Unfolded
                        });
                        break;
                    case s.Folded:
                        o.lenses.unfoldedRoot.get(t).addClass("hidden invisible"), o.lenses.foldedState.get(t).removeClass("hidden invisible"), n.update({
                            mode: s.Folded
                        })
                }
                e.close()
            }
        }
        var d = function(t, e) {
            return t <= e + .03 * e || a.default.isMobile()
        };

        function p(t, e, r, i) {
            var a = .85 * o.lenses.rightPart.get(t).width(),
                u = l(o.lenses.unfoldedItem.get(t), r);
            (0, n.eitherConditioned)(d.bind(null, a, u), f.bind(null, t, e, r, s.Folded), f.bind(null, t, e, r, s.Unfolded)), (0, n.conditioned)(function() {
                return i
            }, function() {
                o.lenses.unfoldedItem.get(t).removeClass("selected"), o.lenses.unfoldedItem.get(t).filter(function(t, e) {
                    return $(e).data("value") === i.value
                }).addClass("selected")
            })
        }

        function v(t) {
            window.location.assign(t.value)
        }
        t.create = function(t) {
            if (!(0, o.isValidInput)(t)) throw new Error("Collapsible menu was not initialized properly");
            var n = (0, o.cacheSelectors)(t),
                r = (0, e.create)(o.lenses.dropdown.get(t));
            return {
                init: function(t, n) {
                    var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).selectedItem;
                    t.render(), t.on(e.Events.SelectionChanged, v), p(n, t, u, r), a.default.on(a.default.RESIZE, function() {
                        return p(n, t, u, r)
                    })
                }.bind(null, r, n),
                select: function(t, e, n, r) {
                    p(e, t, u, n), t.select(n, r)
                }.bind(null, r, n)
            }
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(111), n(2), n(10), n(1), n(8), n(64)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.cacheSelectors = t.isValidInput = t.lenses = void 0;
        var r = {
            root: (0, e.pathLens)("root"),
            leftPart: (0, e.pathLens)("parts", "left"),
            rightPart: (0, e.pathLens)("parts", "right"),
            foldedState: (0, e.pathLens)("states", "folded", "root"),
            dropdown: (0, e.pathLens)("states", "folded", "dropdown"),
            unfoldedRoot: (0, e.pathLens)("states", "unfolded", "root"),
            unfoldedItem: (0, e.pathLens)("states", "unfolded", "item")
        };
        t.lenses = r, t.isValidInput = function(t) {
            return !(0, n.isNullOrUndefined)(t) && Object.values(r).map(function(e) {
                return (0, n.isNullOrUndefined)(e.get(t))
            }).every(function(t) {
                return !t
            })
        }, t.cacheSelectors = function(t) {
            var e = {
                root: void 0,
                parts: {
                    left: void 0,
                    right: void 0
                },
                states: {
                    unfolded: {
                        root: void 0,
                        item: void 0
                    },
                    folded: {
                        root: void 0,
                        dropdown: void 0
                    }
                }
            };
            return r.root.set($(t.root), e), r.leftPart.set(r.root.get(e).find(r.leftPart.get(t)), e), r.rightPart.set(r.root.get(e).find(r.rightPart.get(t)), e), r.foldedState.set(r.root.get(e).find(r.foldedState.get(t)), e), r.unfoldedRoot.set(r.root.get(e).find(r.unfoldedRoot.get(t)), e), r.unfoldedItem.set(r.root.get(e).find(r.unfoldedItem.get(t)), e), e
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(115), n(36), n(65), n(25), n(155), n(92)], void 0 === (o = function(t, e, n, r, o) {
            var i = r.getEnvironment(),
                a = n.getLanguageCode(),
                s = $("html").data("pagename"),
                u = "static/" + s,
                c = function() {
                    t.apply(this, arguments), this.trackingName = "unknown video",
                        function() {
                            this.on(t.FIRST_PLAYING, function() {
                                o("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", i, "ms.lang", a, "ms.pagetype", s, "ms.rwd", e.getCurrentState(), "ms.skypepn", u, "ms.ea_offer", s + ":youtube:" + this.trackingName, "ms.ea_action", "Start Video")
                            })
                        }.call(this),
                        function() {
                            this.on(t.ENDED, function() {
                                o("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", i, "ms.lang", a, "ms.pagetype", s, "ms.rwd", e.getCurrentState(), "ms.skypepn", u, "ms.ea_offer", s + ":youtube:" + this.trackingName, "ms.ea_action", "Complete")
                            })
                        }.call(this)
                };
            return (c.prototype = Object.create(t.prototype)).constructor = c, c.WEDCS_STARTED_MILESTONE = "Start Video", c.WEDCS_COMPLETED_MILESTONE = "Complete", c
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(0), n(15)], void 0 === (o = function(t) {
            var e = !1,
                n = [],
                r = {};
            window.onYouTubeIframeAPIReady = function() {
                e = !0,
                    function() {
                        var t = 0;
                        for (t = 0; t < n.length; t++) n[t]();
                        n = []
                    }()
            }, r.init = function() {
                r.injectVideoScript()
            };
            return r.injectVideoScript = function() {
                if (!this.videoScriptExists()) {
                    var t = document.createElement("script");
                    t.id = "youTubeScript", t.src = "https://www.youtube.com/iframe_api";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e)
                }
            }, r.ready = function(t) {
                e ? t() : n.push(t)
            }, r.videoScriptExists = function() {
                return t("#youTubeScript").length
            }, r.createVideoPlayer = function(t, e, n) {
                var o = n || this.generateDefaultVideoPlayerConfig(e);
                return r.PlayerState.UNSTARTED = YT.PlayerState.UNSTARTED, r.PlayerState.ENDED = YT.PlayerState.ENDED, r.PlayerState.PLAYING = YT.PlayerState.PLAYING, r.PlayerState.PAUSED = YT.PlayerState.PAUSED, r.PlayerState.BUFFERING = YT.PlayerState.BUFFERING, r.PlayerState.CUED = YT.PlayerState.CUED, new YT.Player(t, o)
            }, r.reloadVideoPlayer = function(t) {
                var e = t.getIframe();
                e.src = e.src
            }, r.generateDefaultVideoPlayerConfig = function(t) {
                return {
                    videoId: t,
                    playerVars: {
                        html5: 1,
                        showinfo: 0,
                        rel: 0,
                        modestbranding: 1,
                        color: "white",
                        autohide: 1
                    }
                }
            }, r.PlayerState = {
                UNSTARTED: "UNSTARTED",
                ENDED: "ENDED",
                PLAYING: "PLAYING",
                PAUSED: "PAUSED",
                BUFFERING: "BUFFERING",
                CUED: "CUED"
            }, r
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            return Object
        }.call(e, n, e, t)) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r, o;
    r = [n(112), n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(156), n(132), n(115), n(66), n(58), n(36), n(47), n(22), n(130), n(0), n(15)], void 0 === (o = function(t, e, r, o, i, a, s, u, c, l) {
            var f = 10;

            function d(t) {
                var e = "";
                if (i.hasOwnProperty("api") && i.api.contentApiUrl) {
                    e = i.api.contentApiUrl;
                    var n = l("<a>", {
                            href: t
                        })[0],
                        r = l("html").attr("lang"),
                        o = n.pathname.substr(n.pathname.indexOf("/", 1) + 1);
                    e += encodeURIComponent(o) + "?appid=scom&language=" + r
                }
                return e
            }

            function p(e, r, a) {
                switch (e) {
                    case "ajax":
                        return new t.byAjax(r);
                    case "contentapi":
                        return function(e, r) {
                            var a, s = d(e);
                            "" !== s && (a = new t(function(t) {
                                var e = function() {
                                    n.e(8).then(function() {
                                        var e = [n(359)];
                                        (function(e) {
                                            var n = e.getMarkup(e.notificationClass.error, i.message.genericError);
                                            t(n)
                                        }).apply(null, e)
                                    }).catch(n.oe)
                                };
                                o.get({
                                    url: s,
                                    dataType: "json",
                                    success: function(n) {
                                        var o = function(t, e) {
                                            void 0 === t && (t = "content");
                                            if (!e || !e.hasOwnProperty("regions") || !e.regions) return !1;
                                            if (!e.regions.hasOwnProperty(t) || !e.regions[t]) return !1;
                                            return e.regions[t]
                                        }(r, n);
                                        !1 !== o ? t(o) : e()
                                    },
                                    error: e
                                })
                            }));
                            return a
                        }(r, a)
                }
            }

            function v(e) {
                e.on(t.OVERLAY_ON, function() {
                    c.setupTracking(e.contentJQ())
                })
            }

            function h(e, n) {
                ! function(e) {
                    var n = e;
                    e.on(t.OVERLAY_OFF, function() {
                        if (r.allVideos.length)
                            for (var t = function() {
                                    this.stop()
                                }, e = r.allVideos.length; e--;) l(n.content).find("iframe[src*='youtube.com/embed/" + r.allVideos[e].videoId + "']").length && (r.allVideos[e].isPlaying() && r.allVideos[e].ready(t), r.allVideos.splice(e, 1))
                    })
                }(e), e.emptyOnClose = !0, e.open(null, n)
            }

            function g(t) {
                var e = t.attr("href"),
                    n = t.data("overlay-url");
                return n || e
            }
            e.on("change init", function(t) {
                try {
                    var e = l("a[data-hash-id=" + t + "]");
                    if (e.is("[data-overlay-src]")) {
                        var n = g(e),
                            r = p(e.data("overlay-src"), n, e.data("overlay-region"));
                        r && (v(r), h(r))
                    }
                } catch (t) {}
            });
            return l("[data-overlay-src=ajax], [data-overlay-src=contentapi]").on("click", function(e) {
                e.preventDefault();
                var r = function(t) {
                        var e = t.data("overlay-forceopen"),
                            n = !0,
                            r = s.getVersionOfOldInternetExplorer();
                        return r && r < f ? n = !1 : void 0 !== e && !1 !== e || a.getCurrentState() !== a.MOBILE || (n = !1), n
                    }(l(this)),
                    o = g(l(this));
                if (function(t) {
                        var e = l('*[data-button-type="overlay-close-button"]');
                        l.each(e, function(e, n) {
                            l(n)[0].setAttribute("data-bi-id", t)
                        })
                    }(o), !0 === r) {
                    var i = p(l(this).data("overlay-src"), o, l(this).data("overlay-region")),
                        c = l(this).attr("href");
                    i && (c && c.search("download-skype/skype-for-linux") > -1 && i.on(t.OVERLAY_ON, function() {
                        n.e(6).then(function() {
                            var t = [n(360)];
                            (function(t) {
                                t.initializeScom()
                            }).apply(null, t)
                        }).catch(n.oe)
                    }), v(i), h(i, e))
                } else o && u.redirect(o)
            }), {
                buildContentApiEndpoint: d
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(18),
        o = n(9),
        i = function(t, e) {
            if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = n(39)(Function.call, n(73).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(226)], void 0 === (o = function(t) {
            var e = {
                getUserAgent: function() {
                    return t.userAgent
                },
                getAppName: function() {
                    return t.appName
                }
            };
            return e
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            return navigator
        }.call(e, n, e, t)) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(36), n(65), n(157), n(25), n(155)], void 0 === (o = function(t, e, n, r, o) {
            var i = r.getEnvironment(),
                a = e.getLanguageCode(),
                s = n.isAuthenticated() ? "1" : "0",
                u = $("html").data("pagetype"),
                c = "static" + $("html").data("pagepath"),
                l = function(t) {
                    var e = "";
                    if (t)
                        for (var n in t) {
                            if (t.hasOwnProperty(n) && void 0 !== t[n]) e += n + "=" + t[n] + "|"
                        }
                    return e
                };
            return {
                trackImpression: function(e, n, r) {
                    o("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", i, "ms.lang", a, "ms.pagetype", u, "ms.rwd", t.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", l(r), "ms.ea_offer", n, "ms.ea_action", "impression", "ms.cmpgrp", e)
                },
                trackPageImpression: function(e, n) {
                    o("ms.prod", "Skype", "wcs.cot", "0", "ms.env", i, "ms.lang", a, "ms.pagetype", u, "ms.rwd", t.getCurrentState(), "ms.skypepn", e, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", l(n))
                },
                trackDownloadClick: function(e, n, r) {
                    o("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", i, "ms.lang", a, "ms.pagetype", u, "ms.rwd", t.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", l(r), "ms.ea_offer", "Skype:" + n, "ms.ea_action", "dwn", "ms.cmpgrp", e)
                },
                trackGenericClick: function(e, n, r) {
                    o("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", i, "ms.lang", a, "ms.pagetype", u, "ms.rwd", t.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", l(r), "ms.ea_offer", n, "ms.ea_action", "click", "ms.cmpgrp", e)
                },
                trackVideoEvent: function(e, n, r) {
                    o("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", i, "ms.lang", a, "ms.pagetype", u, "ms.rwd", t.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", l(r), "ms.ea_offer", u + ":youtube:" + n, "ms.ea_action", e)
                },
                VIDEO_EVENTS: {
                    Start: "Start Video",
                    Complete: "Complete",
                    Replay: "Replay",
                    Half: "50%"
                }
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            var t = {
                EVENT_NAMES: "wheel mousewheel DOMMouseScroll",
                getDelta: function(t) {
                    return "DOMMouseScroll" === t.type ? -40 * t.originalEvent.detail : t.originalEvent.wheelDelta
                },
                isDownward: function(t) {
                    return this.getDelta(t) < 0
                },
                isUpward: function(t) {
                    return this.getDelta(t) > 0
                }
            };
            return t
        }.apply(e, [])) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r, o;
    r = [e, n(130), n(30), n(183), n(95), n(91), n(231), n(159), n(234), n(235), n(133), n(246)], void 0 === (o = function(t, e, r, o, i, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.uhfHeader = t.settings = t.apolloResponsive = t.apolloDevice = t.trackingModule = void 0;
        var s = d(e),
            u = d(r),
            c = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                        }
                return e.default = t, e
            }(o),
            l = d(i),
            f = d(a);

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        u.default.register();
        var p = u.default.get("errorsLogger");
        p && p.enabled && p.token && Promise.resolve().then(n.t.bind(null, 67, 7)).then(function(t) {
            n.oe = function(e) {
                t.logConsoleError(e, "requireOnError")
            }, window.onerror = function(e) {
                t.logConsoleError(e, "windowOnError")
            }
        }), t.trackingModule = s.default, t.apolloDevice = l.default, t.apolloResponsive = f.default, t.settings = u.default, t.uhfHeader = c
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(2), n(11), n(12)], void 0 === (o = function(t, e) {
        "use strict";

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isObject = t.isArray = void 0;
        t.isArray = function(t) {
            return !(0, e.isNullOrUndefined)(t) && "object" === n(t) && Array.isArray(t)
        }, t.isObject = function(t) {
            var e = n(t);
            return !(null === t || "object" !== e && "function" !== e || t instanceof Array)
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(1)], void 0 === (o = function() {
        "use strict";
        n.e(1).then(function() {
            n(0), n(15), n(131), n(65), n(361), n(362), n(363)
        }).catch(n.oe), n.e(9).then(function() {
            n(364)
        }).catch(n.oe), n.e(4).then(function() {
            var t = [n(0), n(47), n(129), n(358), n(182), n(5), n(160)];
            (function(t, e, r, o, i, a, s) {
                ! function(t) {
                    (t || []).forEach(function(t) {
                        ! function(t) {
                            window.addEventListener(t, function(e) {
                                r.trigger(t, e)
                            });
                            var e = window.GLOBAL_EVENTS_STORAGE[t];
                            null !== e && void 0 !== e && (e.listeners.forEach(function(e) {
                                window.removeEventListener(t, e)
                            }), e.events && e.events.length > 0 && e.events.forEach(function(t) {
                                window.dispatchEvent(t)
                            })), delete window.GLOBAL_EVENTS_STORAGE[t]
                        }(t)
                    })
                }([o.CONSTS.SWC_CORE_READY_EVENT, s.CONSTS.SILENT_RESPONSE_EVENT]), i.init(a.pluck(window, "EXTERNAL_STORAGE"), a.pluck(window, "SKYPE_SETTINGS", "slowLoadTimeout") || 5e3), e.isInternetExplorer() && void 0 !== e.getVersionOfOldInternetExplorer() && t("html").addClass("ie" + e.getVersionOfOldInternetExplorer()), t(".siteNavigation").length > 0 && n.e(2).then(function() {
                    var t = [n(368)];
                    (function(t) {
                        new t
                    }).apply(null, t)
                }).catch(n.oe)
            }).apply(null, t)
        }).catch(n.oe), n.e(7).then(function() {
            var t = [n(365)];
            (function(t) {
                t.setupScrollHandlers()
            }).apply(null, t)
        }).catch(n.oe)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(41), n(112), n(49), n(52), n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(65), n(66), n(47), n(22), n(0)], void 0 === (o = function(t, e, n, r, o) {
            var i = function(t) {
                this.jQElement = o(t)
            };
            return i.prototype.getSelectDropDown = function() {
                return this.jQElement.find("select")
            }, i.prototype.getLabel = function() {
                return this.jQElement.find("label")
            }, i.prototype.getOptions = function() {
                return this.getSelectDropDown().find("option").map(function() {
                    return new i.Option(this)
                })
            }, i.prototype.getUrl = function() {
                var t = this.jQElement.find("form");
                return t.length ? t.attr("action") : this.jQElement.find("[data-action]").data("action")
            }, (i.Option = function(t) {
                this.jQElement = o(t)
            }).prototype.getLanguageSelector = function() {
                var t = this.jQElement.parents(".languageSelector");
                return new i(t)
            }, i.Option.prototype.getText = function() {
                return this.jQElement.text()
            }, i.Option.prototype.getValue = function() {
                return this.jQElement.val()
            }, i.Option.prototype.getLanguageCode = function() {
                return this.jQElement.attr("lang")
            }, i.Option.prototype.getUrl = function() {
                var t = this.getLanguageSelector(),
                    e = t.getUrl(),
                    n = this.getLanguageCode(),
                    o = t.getSelectDropDown().attr("name"),
                    i = new RegExp("([?&])" + o + "=([^&]*)");
                return "/${LC}" === e && (e = r.getPath().replace(/^\/[a-zA-z]+(\-[a-zA-z]+)?\//, "/${LC}/")), -1 !== e.search("\\${LC}") ? e.replace("${LC}", n) : e.match(i) ? e.replace(i, "$1" + o + "=" + n) : e + (e.match(/\?/) ? "&" : "?") + o + "=" + n
            }, i.Option.prototype.setAsUserLanguage = function() {
                var e = this.getLanguageCode();
                return t.setLanguageCode(e), this
            }, i.Option.prototype.setAsUserLanguageAndRedirect = function(t) {
                var e = this.getUrl();
                return this.setAsUserLanguage(), n.goTo(e, t), this
            }, i
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(57), n(47), n(25), n(22), n(7), n(0)], void 0 === (o = function(t, e, n, r, o, i) {
            var a = !1,
                s = !0,
                u = function() {
                    var t = this;
                    setTimeout(function() {
                        var e = t.lastSelectedIndex != t.domElement.selectedIndex;
                        t.lastSelectedIndex = t.domElement.selectedIndex, t.jQElement.trigger(A.SUBMISSION, [t.domElement.selectedIndex, e])
                    }, 0)
                },
                c = function() {
                    this.jQElement.trigger(A.UPDATE_LABEL, this.domElement.options[this.domElement.selectedIndex].innerHTML)
                },
                l = function() {
                    var t = this;
                    this.jQElement.on("mouseup", function(n) {
                        c.call(t), (e.isSafari() || e.isMac() && e.isWebkit() || t.isPopUpOpen()) && u.call(t), b.call(t), n.stopImmediatePropagation()
                    })
                },
                f = function() {
                    d.call(this)
                },
                d = function() {
                    var t = this;
                    this.jQElement.on(A.POPUP_CLOSED, function() {
                        c.call(t)
                    })
                },
                p = function() {
                    v.call(this), h.call(this), g.call(this)
                },
                v = function() {
                    var n = this;
                    this.jQElement.on("keydown", function(r) {
                        c.call(n);
                        var o = r.charCode || r.keyCode || r.which,
                            i = !1;
                        if (r.altKey && t.isUpOrDownArrow(o)) e.isInternetExplorer() || e.isFirefox() ? b.call(n) : n.isPopUpOpen() || O.call(n);
                        else if (t.isUpOrDownArrow(o)) i = !0;
                        else if (o === t.ENTER)
                            if (r.stopImmediatePropagation(), n.isPopUpOpen() || a) {
                                var l = n.isPopUpOpen();
                                T.call(n), u.call(n), l || r.preventDefault()
                            } else O.call(n);
                        else o === t.ESCAPE && n.isPopUpOpen() && T.call(n);
                        s ? (a = i, s = !1) : a = a && i
                    })
                },
                h = function() {
                    var t = this;
                    this.jQElement.on("keypress", function() {
                        c.call(t)
                    })
                },
                g = function() {
                    var e = this;
                    this.jQElement.on("keyup", function(n) {
                        var r = !0,
                            o = n.charCode || n.keyCode || n.which;
                        o === t.ENTER ? (n.stopImmediatePropagation(), e.isPopUpOpen() || a ? (T.call(e), u.call(e)) : O.call(e)) : o === t.ESCAPE && (r = !1, e.isPopUpOpen() && T.call(e)), r && c.call(e)
                    })
                },
                y = function() {
                    var t = this;
                    this.jQElement.on("change", function(n) {
                        e.isMac() && e.isWebkit() ? u.call(t) : (n.stopPropagation(), n.preventDefault())
                    })
                },
                m = function() {
                    _.call(this), E.call(this)
                },
                _ = function() {
                    var e = this;
                    n.jQElement.on("mouseup", function(t) {
                        a = !1, s = !0, t.target !== e.jQElement[0] && T.call(e)
                    }).on("keypress keyup keydown", function(n) {
                        if (n.target !== e.jQElement[0]) {
                            var r = n.charCode || n.keyCode || n.which;
                            t.isUpOrDownArrow(r) || r === t.ALT || (a = !1, s = !0, b.call(e))
                        }
                    })
                },
                E = function() {
                    var t = this;
                    r.jQElement.on("focus blur", function() {
                        T.call(t)
                    })
                },
                S = function(t) {
                    var e = this.isPopUpOpen();
                    e && !t ? w.call(this) : !e && t && I.call(this), this._open = t
                },
                b = function() {
                    S.call(this, !this._open)
                },
                O = function() {
                    S.call(this, !0)
                },
                T = function() {
                    S.call(this, !1)
                },
                I = function() {
                    this.jQElement.trigger(A.POPUP_OPEN)
                },
                w = function() {
                    this.jQElement.trigger(A.POPUP_CLOSED)
                },
                A = function(t) {
                    this.jQElement = i(t), this.domElement = this.jQElement[0], this.lastSelectedIndex = this.domElement.selectedIndex, o.create(this),
                        function() {
                            this._open = !1, l.call(this), f.call(this), p.call(this), y.call(this), m.call(this)
                        }.call(this)
                };
            return A.prototype.isPopUpOpen = function() {
                return !e.isSafari() && this._open
            }, A.prototype.getOptions = function() {
                return this.jQElement.find("option").map(function() {
                    return i(this)
                }).get()
            }, A.prototype.setSelectedOption = function(t) {
                var e = !1;
                this.jQElement.find("option").filter(function() {
                    if (i(this).text() == t) return e = !0, !0
                }).prop("selected", !0), this.lastSelectedIndex = e ? this.domElement.selectedIndex : -1
            }, A.POPUP_OPEN = "popupopen", A.POPUP_CLOSED = "popupclosed", A.UPDATE_LABEL = "updatelabel", A.SUBMISSION = "submission", A.FOCUS = "focus", A.BLUR = "blur", A._updateLabel = c, A._submission = u, A
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(0), n(15), n(159)], void 0 === (o = function(t) {
            var e = "#locale-picker-link",
                n = ".languageSelector";
            ! function() {
                var r = t(e),
                    o = t(n);
                r && o && r.replaceWith(o)
            }()
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(10)], void 0 === (o = function() {
        "use strict";
        r = [n(93), n(48), n(96), n(66), n(127), n(58), n(245), n(47), n(0), n(15)], void 0 === (o = function(t, e, n, r, o, i, a, s, u) {
            var c, l = {},
                f = i.api.sessionApiUrl,
                d = o.getNavigationContainer(),
                p = "",
                v = function() {
                    var t = s.getVersionOfOldInternetExplorer(),
                        r = !!t && t < 10;
                    A("tokenFail", h), o.isNewNavigation() ? r ? h() : (n.initialize(), n.on(n.PROFILE_READY, _), n.on(n.PROFILE_ERROR, E)) : e.on(e.EVENTS.READY, function(t) {
                        var e = t.skypetoken;
                        e && g(e)
                    })
                },
                h = function() {
                    if (t.exists("skype-session-token")) {
                        var e = t.getSingleValue("skype-session-token").get();
                        "" !== e && y(e)
                    }
                },
                g = function(t) {
                    r.get({
                        url: f,
                        headers: {
                            "X-Skypetoken": t
                        },
                        success: m,
                        error: E
                    })
                },
                y = function(t) {
                    r.get({
                        dataType: "jsonp",
                        url: f + "?session_token=" + t,
                        context: document.body,
                        jsonp: "jsoncallback",
                        success: m
                    })
                },
                m = function(t) {
                    void 0 === t.status ? (S(t), c = t, x("ready", t)) : x("error", t)
                },
                _ = function(t) {
                    t && null !== t.username ? (S(t), c = t, x("ready", t)) : x("error", t)
                },
                E = function(t) {
                    x("tokenFail", t)
                },
                S = function(t) {
                    var e;
                    if (o.isNewNavigation()) {
                        var n = d.find(".signInDropdownWrapper");
                        e = T(t), I(e), n.removeClass("notAuthenticated").addClass("authenticated"), w()
                    } else e = b(t), I(e), w()
                },
                b = function(t) {
                    var e = "",
                        n = "",
                        r = "";
                    return t && (void 0 !== t.firstname && (n = a.escapeHtml(u.trim(t.firstname))), void 0 !== t.lastname && (r = a.escapeHtml(u.trim(t.lastname))), n && r && n.length + r.length <= 20 ? e = n + " " + r : n && n.length <= 20 && (e = n)), p = n + " " + r, e
                },
                O = function(t) {
                    return t.length <= 20 ? t : t.substring(0, 17) + "..."
                },
                T = function(t) {
                    var e = "",
                        n = "",
                        r = "",
                        o = "";
                    return t && (void 0 !== t.firstname && (n = a.escapeHtml(u.trim(t.firstname))), void 0 !== t.lastname && (r = a.escapeHtml(u.trim(t.lastname))), n ? e = n.length + r.length <= 20 ? n + " " + r : O(n) : void 0 !== t.username && (o = a.escapeHtml(u.trim(t.username)), e = O(o))), p = n + " " + r, e
                },
                I = function(t) {
                    t.length > 0 && d.find("[data-content-key=skypename]").each(function(e, n) {
                        var r = u(n);
                        if ("logout" === r.parent().attr("data-link-type")) {
                            var o = u("#uhfJoin");
                            r.text("(" + t + ")"), o.text(r.parent().text()), o.attr("ms.title", "logout")
                        } else ! function() {
                            var t = d.find("a.usernameBtn.authenticated");
                            u(t).attr("aria-label", p)
                        }(), r.html(t)
                    })
                },
                w = function() {
                    d.removeClass("isNotAuthenticated").addClass("isAuthenticated")
                },
                A = function(t, e) {
                    l[t] = l[t] || [], l[t].push(e)
                },
                x = function(t, e) {
                    var n = l[t] || [],
                        r = 0;
                    for (r = 0; r < n.length; ++r) n[r](e)
                };
            return v(), {
                READY: "ready",
                ERROR: "error",
                init: v,
                on: function(t, e) {
                    c && "ready" === t ? e(c) : A(t, e)
                },
                updateNavigation: S
            }
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r;
    void 0 === (r = function() {
        "use strict";
        void 0 === (r = function() {
            return {
                joinUsMenuItem: "#uhfJoin",
                dropdownLogoutMenuItem: "nav .signInDropdownWrapper [data-element-type='subMenu'] [data-link-type='logout']"
            }
        }.call(e, n, e, t)) || (t.exports = r)
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r = n(18),
        o = n(148).onFreeze;
    n(150)("freeze", function(t) {
        return function(e) {
            return t && r(e) ? t(o(e)) : e
        }
    })
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(239)], void 0 === (o = function(t) {
            null !== t && void 0 !== t || (t = window.microsoft.applications.telemetry);
            var e = function(e) {
                (function(e) {
                    var n = new t.LogConfiguration;
                    n.disableCookies = !0, t.LogManager.initialize(e, n), this.defaultLogger = new t.Logger
                }).call(this, e)
            };
            return e.prototype.logEvent = function(e, n) {
                var r = new t.EventProperties,
                    o = n || {};
                for (var i in r.name = e, o) n.hasOwnProperty(i) && r.setProperty(i, o[i]);
                this.defaultLogger.logEvent(r)
            }, e
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [t, n(63), n(49), n(52), n(41), n(6), n(28), n(29), n(1), n(8), n(26), n(240), n(243)], void 0 === (o = function(t) {
        "use strict";
        var e, n, r, o;
        (e || (e = {})).version = "2.9.0",
            function(t) {
                ! function(t) {
                    ! function(t) {
                        t[t.BT_STOP = 0] = "BT_STOP", t[t.BT_STOP_BASE = 1] = "BT_STOP_BASE", t[t.BT_BOOL = 2] = "BT_BOOL", t[t.BT_UINT8 = 3] = "BT_UINT8", t[t.BT_UINT16 = 4] = "BT_UINT16", t[t.BT_UINT32 = 5] = "BT_UINT32", t[t.BT_UINT64 = 6] = "BT_UINT64", t[t.BT_FLOAT = 7] = "BT_FLOAT", t[t.BT_DOUBLE = 8] = "BT_DOUBLE", t[t.BT_STRING = 9] = "BT_STRING", t[t.BT_STRUCT = 10] = "BT_STRUCT", t[t.BT_LIST = 11] = "BT_LIST", t[t.BT_SET = 12] = "BT_SET", t[t.BT_MAP = 13] = "BT_MAP", t[t.BT_INT8 = 14] = "BT_INT8", t[t.BT_INT16 = 15] = "BT_INT16", t[t.BT_INT32 = 16] = "BT_INT32", t[t.BT_INT64 = 17] = "BT_INT64", t[t.BT_WSTRING = 18] = "BT_WSTRING", t[t.BT_UNAVAILABLE = 127] = "BT_UNAVAILABLE"
                    }(t.BondDataType || (t.BondDataType = {})),
                    function(t) {
                        t[t.MARSHALED_PROTOCOL = 0] = "MARSHALED_PROTOCOL", t[t.MAFIA_PROTOCOL = 17997] = "MAFIA_PROTOCOL", t[t.COMPACT_PROTOCOL = 16963] = "COMPACT_PROTOCOL", t[t.JSON_PROTOCOL = 21322] = "JSON_PROTOCOL", t[t.PRETTY_JSON_PROTOCOL = 20554] = "PRETTY_JSON_PROTOCOL", t[t.SIMPLE_PROTOCOL = 20563] = "SIMPLE_PROTOCOL"
                    }(t.ProtocolType || (t.ProtocolType = {}))
                }(t.Bond || (t.Bond = {}))
            }(n || (n = {})),
            function(t) {
                ! function(t) {
                    ! function(t) {
                        var e = function() {
                            function t() {
                                this._buffer = []
                            }
                            return t.prototype.Add = function(t) {
                                for (var e = 0; e < this._buffer.length && this._buffer[e] != t; ++e);
                                e == this._buffer.length && this._buffer.push(t)
                            }, t.prototype.Count = function() {
                                return this._buffer.length
                            }, t.prototype.GetBuffer = function() {
                                return this._buffer
                            }, t
                        }();
                        t.Set = e;
                        var n = function() {
                            function t() {
                                this._buffer = []
                            }
                            return t.prototype.Add = function(t, e) {
                                -1 == this._getIndex(t) && this._buffer.push({
                                    Key: t,
                                    Value: e
                                })
                            }, t.prototype.AddOrReplace = function(t, e) {
                                var n = this._getIndex(t);
                                n >= 0 ? this._buffer[n] = {
                                    Key: t,
                                    Value: e
                                } : this._buffer.push({
                                    Key: t,
                                    Value: e
                                })
                            }, t.prototype.Remove = function(t) {
                                var e = this._getIndex(t);
                                e >= 0 && this._buffer.splice(e, 1)
                            }, t.prototype.Count = function() {
                                return this._buffer.length
                            }, t.prototype.GetBuffer = function() {
                                return this._buffer
                            }, t.prototype.ContainsKey = function(t) {
                                return this._getIndex(t) >= 0
                            }, t.prototype.Get = function(t) {
                                var e = this._getIndex(t);
                                return e >= 0 ? this._buffer[e].Value : null
                            }, t.prototype._getIndex = function(t) {
                                for (var e = 0, n = -1; e < this._buffer.length; ++e)
                                    if (this._buffer[e].Key == t) {
                                        n = e;
                                        break
                                    }
                                return n
                            }, t
                        }();
                        t.Map = n
                    }(t.Collections || (t.Collections = {}))
                }(t.Bond || (t.Bond = {}))
            }(n || (n = {})),
            function(t) {
                ! function(e) {
                    ! function(t) {
                        var r = function() {
                            function t() {}
                            return t.GetBytes = function(t) {
                                for (var e = [], n = 0; n < t.length; ++n) {
                                    var r = t.charCodeAt(n);
                                    r < 128 ? e.push(r) : r < 2048 ? e.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || r >= 57344 ? e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++n)), e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                                }
                                return e
                            }, t
                        }();
                        t.Utf8 = r;
                        var o = function() {
                            function t() {}
                            return t.GetString = function(t) {
                                var e, n, r, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                    i = [],
                                    a = t.length % 3,
                                    s = function(t) {
                                        return [o.charAt(t >> 18 & 63), o.charAt(t >> 12 & 63), o.charAt(t >> 6 & 63), o.charAt(63 & t)].join("")
                                    };
                                for (e = 0, r = t.length - a; e < r; e += 3) n = (t[e] << 16) + (t[e + 1] << 8) + t[e + 2], i.push(s(n));
                                switch (a) {
                                    case 1:
                                        n = t[t.length - 1], i.push(o.charAt(n >> 2)), i.push(o.charAt(n << 4 & 63)), i.push("==");
                                        break;
                                    case 2:
                                        n = (t[t.length - 2] << 8) + t[t.length - 1], i.push(o.charAt(n >> 10)), i.push(o.charAt(n >> 4 & 63)), i.push(o.charAt(n << 2 & 63)), i.push("=")
                                }
                                return i.join("")
                            }, t
                        }();
                        t.Base64 = o;
                        var i = function() {
                            function t() {}
                            return t.GetBytes = function(t) {
                                for (var e = []; 4294967168 & t;) e.push(127 & t | 128), t >>>= 7;
                                return e.push(127 & t), e
                            }, t
                        }();
                        t.Varint = i;
                        var a = function() {
                            function t() {}
                            return t.GetBytes = function(t) {
                                for (var e = t.low, n = t.high, r = []; n || 4294967168 & e;) r.push(127 & e | 128), e = (127 & n) << 25 | e >>> 7, n >>>= 7;
                                return r.push(127 & e), r
                            }, t
                        }();
                        t.Varint64 = a;
                        var s = function() {
                            function t() {}
                            return t.GetBytes = function(t) {
                                if (e.BrowserChecker.IsDataViewSupport()) {
                                    var r = new DataView(new ArrayBuffer(4));
                                    r.setFloat32(0, t, !0);
                                    for (var o = [], i = 0; i < 4; ++i) o.push(r.getUint8(i));
                                    return o
                                }
                                return n.ConvertNumberToArray(t, !1)
                            }, t
                        }();
                        t.Float = s;
                        var u = function() {
                            function t() {}
                            return t.GetBytes = function(t) {
                                if (e.BrowserChecker.IsDataViewSupport()) {
                                    var r = new DataView(new ArrayBuffer(8));
                                    r.setFloat64(0, t, !0);
                                    for (var o = [], i = 0; i < 8; ++i) o.push(r.getUint8(i));
                                    return o
                                }
                                return n.ConvertNumberToArray(t, !0)
                            }, t
                        }();
                        t.Double = u;
                        var c = function() {
                            function t() {}
                            return t.EncodeZigzag16 = function(t) {
                                return (t = e.Number.ToInt16(t)) << 1 ^ t >> 15
                            }, t.EncodeZigzag32 = function(t) {
                                return (t = e.Number.ToInt32(t)) << 1 ^ t >> 31
                            }, t.EncodeZigzag64 = function(t) {
                                var n = t.low,
                                    r = t.high,
                                    o = r << 1 | n >>> 31,
                                    i = n << 1;
                                2147483648 & r && (o = ~o, i = ~i);
                                var a = new e.UInt64("0");
                                return a.low = i, a.high = o, a
                            }, t
                        }();
                        t.Zigzag = c
                    }(e.Encoding || (e.Encoding = {})),
                    function(r) {
                        var o = function() {
                            function t() {}
                            return t.GetString = function(t) {
                                for (var e = [], n = 0; n < t.length; ++n) {
                                    var r = t[n];
                                    if (r <= 191) e.push(String.fromCharCode(r));
                                    else if (r <= 223) {
                                        var o = t[++n];
                                        e.push(String.fromCharCode((31 & r) << 6 | 63 & o))
                                    } else if (r <= 239) {
                                        o = t[++n];
                                        var i = t[++n];
                                        e.push(String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i))
                                    } else {
                                        r = (7 & r) << 18 | (63 & (o = t[++n])) << 12 | (63 & (i = t[++n])) << 6 | 63 & t[++n], r -= 65536, e.push(String.fromCharCode(55296 | r >> 10 & 1023)), e.push(String.fromCharCode(56320 | 1023 & r))
                                    }
                                }
                                return e.join("")
                            }, t
                        }();
                        r.Utf8 = o;
                        var i = function() {
                            function t() {}
                            return t.GetBytes = function(t) {
                                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = [], r = 0; r < t.length; ++r) {
                                    var o = e.indexOf(t.charAt(r++)),
                                        i = e.indexOf(t.charAt(r++)),
                                        a = e.indexOf(t.charAt(r++)),
                                        s = e.indexOf(t.charAt(r));
                                    n.push(o << 2 | i >> 4), a >= 0 && (n.push(i << 4 & 240 | a >> 2), s >= 0 && n.push(a << 6 & 192 | s))
                                }
                                return n
                            }, t
                        }();
                        r.Base64 = i;
                        var a = function() {
                            function e() {}
                            return e.GetInt64 = function(e) {
                                var n = new t.Bond.Int64("0"),
                                    r = this._Read(e);
                                return n.low = r[0], r.length > 1 && (n.high = r[1]), n
                            }, e.GetNumber = function(t) {
                                return this._Read(t)[0]
                            }, e._Read = function(t) {
                                for (var e = [], n = 0, r = !0, o = 0; r;) {
                                    if (r = 0 != (128 & (i = t.shift())), i &= 127, !(o < 28)) {
                                        n |= i << o, e.push(n), n = i >> 4, o = 3;
                                        break
                                    }
                                    n |= i << o, o += 7
                                }
                                for (; r;) {
                                    var i;
                                    if (r = 0 != (128 & (i = t.shift())), n |= (i &= 127) << o, (o += 7) >= 32) break
                                }
                                return e.push(n), e
                            }, e
                        }();
                        r.Varint = a;
                        var s = function() {
                            function t() {}
                            return t.GetNumber = function(t) {
                                if (e.BrowserChecker.IsDataViewSupport()) {
                                    for (var r = new DataView(new ArrayBuffer(4)), o = 0; o < 4; ++o) r.setUint8(o, t[o]);
                                    return r.getFloat32(0, !0)
                                }
                                return n.ConvertArrayToNumber(t, !1)
                            }, t
                        }();
                        r.Float = s;
                        var u = function() {
                            function t() {}
                            return t.GetNumber = function(t) {
                                if (e.BrowserChecker.IsDataViewSupport()) {
                                    for (var r = new DataView(new ArrayBuffer(8)), o = 0; o < 8; ++o) r.setUint8(o, t[o]);
                                    return r.getFloat64(0, !0)
                                }
                                return n.ConvertArrayToNumber(t, !0)
                            }, t
                        }();
                        r.Double = u;
                        var c = function() {
                            function e() {}
                            return e.DecodeZigzag16 = function(t) {
                                return ((65535 & t) >>> 1 ^ -(1 & t)) << 16 >> 16
                            }, e.DecodeZigzag32 = function(t) {
                                return t >>> 1 ^ -(1 & t)
                            }, e.DecodeZigzag64 = function(e) {
                                var n = 1 & e.high,
                                    r = e.high >>> 1,
                                    o = 1 & e.low,
                                    i = e.low >>> 1;
                                i |= n << 31, o && (i ^= 4294967295, r ^= 4294967295);
                                var a = new t.Bond.UInt64("0");
                                return a.low = i, a.high = r, a
                            }, e
                        }();
                        r.Zigzag = c
                    }(e.Decoding || (e.Decoding = {}));
                    var n = function() {
                        function t() {}
                        return t.ConvertNumberToArray = function(t, e) {
                            if (!t) return e ? this._doubleZero : this._floatZero;
                            var n = e ? 52 : 23,
                                r = (1 << (e ? 11 : 8) - 1) - 1,
                                o = 1 - r,
                                i = r,
                                a = t < 0 ? 1 : 0;
                            t = Math.abs(t);
                            for (var s = Math.floor(t), u = t - s, c = 2 * (r + 2) + n, l = new Array(c), f = 0; f < c;) l[f++] = 0;
                            for (f = r + 2; f && s;) l[--f] = s % 2, s = Math.floor(s / 2);
                            for (f = r + 1; f < c - 1 && u > 0;)(u *= 2) >= 1 ? (l[++f] = 1, --u) : l[++f] = 0;
                            for (var d = 0; d < c && !l[d]; ++d);
                            var p = r + 1 - d,
                                v = d + n;
                            if (l[v + 1]) {
                                for (f = v; f > d && !(l[f] = 1 - l[f]); --f);
                                f == d && ++p
                            }
                            if (p > i || s) return a ? e ? this._doubleNegInifinity : this._floatNegInifinity : e ? this._doubleInifinity : this._floatInifinity;
                            if (p < o) return e ? this._doubleZero : this._floatZero;
                            if (e) {
                                var h = 0;
                                for (f = 0; f < 20; ++f) h = h << 1 | l[++d];
                                for (var g = 0; f < 52; ++f) g = g << 1 | l[++d];
                                return [255 & g, g >> 8 & 255, g >> 16 & 255, g >>> 24, 255 & (h = a << 31 | 2147483647 & (h |= p + r << 20)), h >> 8 & 255, h >> 16 & 255, h >>> 24]
                            }
                            var y = 0;
                            for (f = 0; f < 23; ++f) y = y << 1 | l[++d];
                            return [255 & (y = a << 31 | 2147483647 & (y |= p + r << 23)), y >> 8 & 255, y >> 16 & 255, y >>> 24]
                        }, t.ConvertArrayToNumber = function(t, n) {
                            var r = (1 << (n ? 11 : 8) - 1) - 1,
                                o = 0 != (128 & t[n ? 7 : 3]),
                                i = n ? (127 & t[7]) << 4 | (240 & t[6]) >> 4 : (127 & t[3]) << 1 | (128 & t[2]) >> 7;
                            if (255 == i) throw new e.Exception("Not a valid float/double buffer.");
                            var a = 1,
                                s = 1;
                            if (n) {
                                var u = (15 & t[6]) << 28 | (255 & t[5]) << 20 | (255 & t[4]) << 12,
                                    c = t[3] << 24 | (255 & t[2]) << 16 | (255 & t[1]) << 8 | 255 & t[0];
                                if (!i && !u && !c) return 0;
                                for (var l = 0; l < 20; ++l) s /= 2, u < 0 && (a += s), u <<= 1;
                                for (l = 0; l < 32; ++l) s /= 2, c < 0 && (a += s), c <<= 1
                            } else {
                                var f = (127 & t[2]) << 25 | (255 & t[1]) << 17 | (255 & t[0]) << 9;
                                if (!i && !f) return 0;
                                for (l = 0; l < 23; ++l) s /= 2, f < 0 && (a += s), f <<= 1
                            }
                            return a *= Math.pow(2, i - r), o ? 0 - a : a
                        }, t
                    }();
                    n._floatZero = [0, 0, 0, 0], n._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0], n._floatInifinity = [0, 0, 128, 127], n._floatNegInifinity = [0, 0, 128, 255], n._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127], n._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255]
                }(t.Bond || (t.Bond = {}))
            }(n || (n = {})),
            function(t) {
                ! function(t) {
                    ! function(e) {
                        var n = function() {
                            function e() {
                                this._buffer = []
                            }
                            return e.prototype.WriteByte = function(e) {
                                this._buffer.push(t.Number.ToByte(e))
                            }, e.prototype.Write = function(t, e, n) {
                                for (; n--;) this.WriteByte(t[e++])
                            }, e.prototype.GetBuffer = function() {
                                return this._buffer
                            }, e
                        }();
                        e.MemoryStream = n
                    }(t.IO || (t.IO = {}))
                }(t.Bond || (t.Bond = {}))
            }(n || (n = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        return function(t, e) {
                            this.Type = t, this.Id = e
                        }
                    }();
                    t.FieldTag = e;
                    var n = function() {
                        return function(t, e) {
                            this.ElementType = t, this.Size = e
                        }
                    }();
                    t.ContainerTag = n;
                    var r = function() {
                        return function(t, e, n) {
                            this.KeyType = t, this.ValueType = e, this.Size = n
                        }
                    }();
                    t.KeyValueContainerTag = r;
                    var o = function() {
                        return function() {}
                    }();
                    t.Bonded = o;
                    var i = function() {
                        function t(t) {
                            this.low = 0, this.high = 0, this.low = parseInt(t), this.low < 0 && (this.high = -1)
                        }
                        return t.prototype.Equals = function(e) {
                            var n = new t(e);
                            return this.low == n.low && this.high == n.high
                        }, t
                    }();
                    t.Int64 = i;
                    var a = function() {
                        function t(t) {
                            this.low = 0, this.high = 0, this.low = parseInt(t)
                        }
                        return t.prototype.Equals = function(e) {
                            var n = new t(e);
                            return this.low == n.low && this.high == n.high
                        }, t
                    }();
                    t.UInt64 = a;
                    var s = function() {
                        function t() {}
                        return t.ToByte = function(t) {
                            return this.ToUInt8(t)
                        }, t.ToInt8 = function(t) {
                            return 127 & t | (128 & t) << 24 >> 24
                        }, t.ToInt16 = function(t) {
                            return 32767 & t | (32768 & t) << 16 >> 16
                        }, t.ToInt32 = function(t) {
                            return 2147483647 & t | 2147483648 & t
                        }, t.ToUInt8 = function(t) {
                            return 255 & t
                        }, t.ToUInt16 = function(t) {
                            return 65535 & t
                        }, t.ToUInt32 = function(t) {
                            return 4294967295 & t
                        }, t
                    }();
                    t.Number = s;
                    var u = function() {
                        return function(t) {
                            this.Message = t
                        }
                    }();
                    t.Exception = u;
                    var c = function() {
                        return function() {}
                    }();
                    t.KeyValuePair = c;
                    var l = function() {
                        function t() {}
                        return t.IsDataViewSupport = function() {
                            return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
                        }, t
                    }();
                    t.BrowserChecker = l
                }(t.Bond || (t.Bond = {}))
            }(n || (n = {})),
            function(t) {
                ! function(t) {
                    var e = function() {
                        function e(t) {
                            this._stream = t
                        }
                        return e.prototype.WriteBlob = function(t) {
                            this._stream.Write(t, 0, t.length)
                        }, e.prototype.WriteBool = function(t) {
                            this._stream.WriteByte(t ? 1 : 0)
                        }, e.prototype.WriteContainerBegin = function(t, e) {
                            this.WriteUInt8(e), this.WriteUInt32(t)
                        }, e.prototype.WriteMapContainerBegin = function(t, e, n) {
                            this.WriteUInt8(e), this.WriteUInt8(n), this.WriteUInt32(t)
                        }, e.prototype.WriteContainerEnd = function() {}, e.prototype.WriteDouble = function(e) {
                            var n = t.Encoding.Double.GetBytes(e);
                            this._stream.Write(n, 0, n.length)
                        }, e.prototype.WriteFloat = function(e) {
                            var n = t.Encoding.Float.GetBytes(e);
                            this._stream.Write(n, 0, n.length)
                        }, e.prototype.WriteFieldBegin = function(t, e, n) {
                            e <= 5 ? this._stream.WriteByte(t | e << 5) : e <= 255 ? (this._stream.WriteByte(192 | t), this._stream.WriteByte(e)) : (this._stream.WriteByte(224 | t), this._stream.WriteByte(e), this._stream.WriteByte(e >> 8))
                        }, e.prototype.WriteFieldEnd = function() {}, e.prototype.WriteFieldOmitted = function(t, e, n) {}, e.prototype.WriteInt16 = function(e) {
                            e = t.Encoding.Zigzag.EncodeZigzag16(e), this.WriteUInt16(e)
                        }, e.prototype.WriteInt32 = function(e) {
                            e = t.Encoding.Zigzag.EncodeZigzag32(e), this.WriteUInt32(e)
                        }, e.prototype.WriteInt64 = function(e) {
                            this.WriteUInt64(t.Encoding.Zigzag.EncodeZigzag64(e))
                        }, e.prototype.WriteInt8 = function(e) {
                            this._stream.WriteByte(t.Number.ToInt8(e))
                        }, e.prototype.WriteString = function(e) {
                            if ("" == e) this.WriteUInt32(0);
                            else {
                                var n = t.Encoding.Utf8.GetBytes(e);
                                this.WriteUInt32(n.length), this._stream.Write(n, 0, n.length)
                            }
                        }, e.prototype.WriteStructBegin = function(t, e) {}, e.prototype.WriteStructEnd = function(e) {
                            this.WriteUInt8(e ? t.BondDataType.BT_STOP_BASE : t.BondDataType.BT_STOP)
                        }, e.prototype.WriteUInt16 = function(e) {
                            var n = t.Encoding.Varint.GetBytes(t.Number.ToUInt16(e));
                            this._stream.Write(n, 0, n.length)
                        }, e.prototype.WriteUInt32 = function(e) {
                            var n = t.Encoding.Varint.GetBytes(t.Number.ToUInt32(e));
                            this._stream.Write(n, 0, n.length)
                        }, e.prototype.WriteUInt64 = function(e) {
                            var n = t.Encoding.Varint64.GetBytes(e);
                            this._stream.Write(n, 0, n.length)
                        }, e.prototype.WriteUInt8 = function(e) {
                            this._stream.WriteByte(t.Number.ToUInt8(e))
                        }, e.prototype.WriteWString = function(t) {
                            this.WriteUInt32(t.length);
                            for (var e = 0; e < t.length; ++e) {
                                var n = t.charCodeAt(e);
                                this._stream.WriteByte(n), this._stream.WriteByte(n >>> 8)
                            }
                        }, e
                    }();
                    t.CompactBinaryProtocolWriter = e;
                    var n = function() {
                        return function() {}
                    }();
                    t.CompactBinaryProtocolReader = n
                }(t.Bond || (t.Bond = {}))
            }(n || (n = {})),
            function(t) {
                var e = function() {
                    function e() {}
                    return e.IsSafari = function() {
                        if (null === e._isSafari)
                            if ("undefined" != typeof navigator && navigator.userAgent) {
                                var t = navigator.userAgent.toLowerCase();
                                t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 ? e._isSafari = !0 : e._isSafari = !1
                            } else e._isSafari = !1;
                        return e._isSafari
                    }, e.IsReactNative = function() {
                        return null === e._isReactNative && ("undefined" != typeof navigator && navigator.product ? e._isReactNative = "ReactNative" === navigator.product : e._isReactNative = !1), e._isReactNative
                    }, e.IsUint8ArrSupported = function() {
                        return !t.Utils.IsSafari() && "undefined" != typeof Uint8Array && !t.Utils.IsReactNative()
                    }, e.ajax = function(t, n) {
                        var r = e._createConnection();
                        if (t.headers) {
                            var o = "qsp=true";
                            for (var i in t.headers) o += "&", o += encodeURIComponent(i), o += "=", o += encodeURIComponent(t.headers[i]);
                            t.url.indexOf("?") < 0 ? t.url += "?" : t.url += "&", t.url += o
                        }
                        r.open(t.type, t.url, !n), t.complete && (r.onload = function() {
                            t.complete(r)
                        }, r.ontimeout = function() {
                            t.complete(r)
                        }, r.onerror = function() {
                            t.complete(r)
                        }, r.onabort = function() {
                            t.complete(r)
                        }), r.send(t.data)
                    }, e.keys = function(t) {
                        if (Object.keys) return Object.keys(t);
                        var e = [];
                        for (var n in t) t.hasOwnProperty(n) && e.push(n);
                        return e
                    }, e.IsUsingXDomainRequest = function() {
                        null == e._usingXDomainRequest && (void 0 === (new XMLHttpRequest).withCredentials && "undefined" != typeof XDomainRequest ? e._usingXDomainRequest = !0 : e._usingXDomainRequest = !1);
                        return e._usingXDomainRequest
                    }, e._createConnection = function() {
                        var t = new XMLHttpRequest;
                        return e.IsUsingXDomainRequest() ? new XDomainRequest : t
                    }, e
                }();
                e._isSafari = null, e._isReactNative = null, e._usingXDomainRequest = null, t.Utils = e
            }(r || (r = {})),
            function(t) {
                ! function(t) {
                    ! function(t) {
                        ! function(e) {
                            var r = function() {
                                function t() {}
                                return t.GetGuid = function() {
                                    var t = function() {
                                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1, 5)
                                    };
                                    return [t(), t(), "-", t(), "-", t(), "-", t(), "-", t(), t(), t()].join("")
                                }, t.GetTimeStamp = function() {
                                    var t = (new Date).getTime(),
                                        e = new n.Bond.Int64("0");
                                    return e.low = 4294967295 & t, e.high = Math.floor(t / 4294967296), e
                                }, t.GetTimeStampWithValue = function(t) {
                                    var e = new n.Bond.Int64("0");
                                    return e.low = 4294967295 & t, e.high = Math.floor(t / 4294967296), e
                                }, t
                            }();
                            e.utils = r,
                                function(t) {
                                    t[t.NotSet = 0] = "NotSet", t[t.Event = 1] = "Event", t[t.PerformanceCounter = 2] = "PerformanceCounter", t[t.Anomaly = 3] = "Anomaly", t[t.Prediction = 4] = "Prediction", t[t.TraceLog = 5] = "TraceLog", t[t.EventSourceLog = 6] = "EventSourceLog", t[t.HttpLog = 7] = "HttpLog", t[t.PerformanceCounterAzure = 8] = "PerformanceCounterAzure", t[t.PerformanceCounterGfs = 9] = "PerformanceCounterGfs"
                                }(e.RecordType || (e.RecordType = {})),
                                function(t) {
                                    t[t.NotSet = 0] = "NotSet", t[t.O365 = 1] = "O365", t[t.SkypeBI = 2] = "SkypeBI", t[t.SkypeData = 3] = "SkypeData"
                                }(e.PIIScrubber || (e.PIIScrubber = {})),
                                function(t) {
                                    t[t.NotSet = 0] = "NotSet", t[t.DistinguishedName = 1] = "DistinguishedName", t[t.GenericData = 2] = "GenericData", t[t.IPV4Address = 3] = "IPV4Address", t[t.IPv6Address = 4] = "IPv6Address", t[t.MailSubject = 5] = "MailSubject", t[t.PhoneNumber = 6] = "PhoneNumber", t[t.QueryString = 7] = "QueryString", t[t.SipAddress = 8] = "SipAddress", t[t.SmtpAddress = 9] = "SmtpAddress", t[t.Identity = 10] = "Identity", t[t.Uri = 11] = "Uri", t[t.Fqdn = 12] = "Fqdn", t[t.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
                                }(e.PIIKind || (e.PIIKind = {})),
                                function(t) {
                                    t[t.Unknown = 0] = "Unknown", t[t.MSACID = 1] = "MSACID", t[t.MSAPUID = 2] = "MSAPUID", t[t.ANID = 3] = "ANID", t[t.OrgIdCID = 4] = "OrgIdCID", t[t.OrgIdPUID = 5] = "OrgIdPUID", t[t.UserObjectId = 6] = "UserObjectId", t[t.Skype = 7] = "Skype", t[t.Yammer = 8] = "Yammer", t[t.EmailAddress = 9] = "EmailAddress", t[t.PhoneNumber = 10] = "PhoneNumber", t[t.SipAddress = 11] = "SipAddress", t[t.MUID = 12] = "MUID"
                                }(e.UserIdType || (e.UserIdType = {}));
                            var o = function() {
                                function e() {
                                    this.ScrubType = t.datamodels.PIIScrubber.NotSet, this.Kind = t.datamodels.PIIKind.NotSet, this.RawContent = ""
                                }
                                return e.prototype.Write = function(t) {
                                    this.WriteImpl(t, !1)
                                }, e.prototype.WriteImpl = function(e, r) {
                                    e.WriteStructBegin(null, r), this.ScrubType != t.datamodels.PIIScrubber.NotSet ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_INT32, 1, null), e.WriteInt32(this.ScrubType), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_INT32, 1, null), this.Kind != t.datamodels.PIIKind.NotSet ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_INT32, 2, null), e.WriteInt32(this.Kind), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_INT32, 2, null), "" != this.RawContent ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_STRING, 3, null), e.WriteString(this.RawContent), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_STRING, 3, null), e.WriteStructEnd(r)
                                }, e.prototype.Read = function(t) {
                                    this.ReadImpl(t, !1)
                                }, e.prototype.ReadImpl = function(t, e) {}, e
                            }();
                            e.PII = o;
                            var i = function() {
                                function e() {
                                    this.Id = r.GetGuid(), this.Timestamp = r.GetTimeStamp(), this.Type = "", this.EventType = "", this.Extension = new n.Bond.Collections.Map, this.RecordType = t.datamodels.RecordType.NotSet, this.PIIExtensions = new n.Bond.Collections.Map
                                }
                                return e.prototype.AddOrReplacePII = function(e, n, r) {
                                    var o = new t.datamodels.PII;
                                    o.RawContent = n, o.Kind = r, o.ScrubType = t.datamodels.PIIScrubber.O365, this.PIIExtensions.AddOrReplace(e, o)
                                }, e.prototype.Write = function(t) {
                                    this.WriteImpl(t, !1)
                                }, e.prototype.WriteImpl = function(e, r) {
                                    if (e.WriteStructBegin(null, r), "" != this.Id ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_STRING, 1, null), e.WriteString(this.Id), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_STRING, 1, null), this.Timestamp.Equals("0") ? e.WriteFieldOmitted(n.Bond.BondDataType.BT_INT64, 3, null) : (e.WriteFieldBegin(n.Bond.BondDataType.BT_INT64, 3, null), e.WriteInt64(this.Timestamp), e.WriteFieldEnd()), "" != this.Type ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_STRING, 5, null), e.WriteString(this.Type), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_STRING, 5, null), "" != this.EventType ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_STRING, 6, null), e.WriteString(this.EventType), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_STRING, 6, null), this.Extension.Count()) {
                                        e.WriteFieldBegin(n.Bond.BondDataType.BT_MAP, 13, null), e.WriteMapContainerBegin(this.Extension.Count(), n.Bond.BondDataType.BT_STRING, n.Bond.BondDataType.BT_STRING);
                                        for (var o = 0; o < this.Extension.GetBuffer().length; ++o) e.WriteString(this.Extension.GetBuffer()[o].Key), e.WriteString(this.Extension.GetBuffer()[o].Value);
                                        e.WriteContainerEnd(), e.WriteFieldEnd()
                                    } else e.WriteFieldOmitted(n.Bond.BondDataType.BT_MAP, 13, null);
                                    if (this.RecordType != t.datamodels.RecordType.NotSet ? (e.WriteFieldBegin(n.Bond.BondDataType.BT_INT32, 24, null), e.WriteInt32(this.RecordType), e.WriteFieldEnd()) : e.WriteFieldOmitted(n.Bond.BondDataType.BT_INT32, 24, null), this.PIIExtensions.Count()) {
                                        e.WriteFieldBegin(n.Bond.BondDataType.BT_MAP, 30, null), e.WriteMapContainerBegin(this.PIIExtensions.Count(), n.Bond.BondDataType.BT_STRING, n.Bond.BondDataType.BT_STRUCT);
                                        for (var i = 0; i < this.PIIExtensions.GetBuffer().length; ++i) e.WriteString(this.PIIExtensions.GetBuffer()[i].Key), this.PIIExtensions.GetBuffer()[i].Value.WriteImpl(e, !1);
                                        e.WriteContainerEnd(), e.WriteFieldEnd()
                                    } else e.WriteFieldOmitted(n.Bond.BondDataType.BT_MAP, 30, null);
                                    e.WriteStructEnd(r)
                                }, e.prototype.Read = function(t) {
                                    this.ReadImpl(t, !1)
                                }, e.prototype.ReadImpl = function(t, e) {}, e
                            }();
                            e.Record = i;
                            var a = function() {
                                function t() {
                                    this.Source = "", this.DataPackageId = "", this.Timestamp = new n.Bond.Int64("0"), this.Records = []
                                }
                                return t.prototype.Write = function(t) {
                                    this.WriteImpl(t, !1)
                                }, t.prototype.WriteImpl = function(t, e) {
                                    if (t.WriteStructBegin(null, e), "" != this.Source ? (t.WriteFieldBegin(n.Bond.BondDataType.BT_STRING, 2, null), t.WriteString(this.Source), t.WriteFieldEnd()) : t.WriteFieldOmitted(n.Bond.BondDataType.BT_STRING, 2, null), "" != this.DataPackageId ? (t.WriteFieldBegin(n.Bond.BondDataType.BT_STRING, 5, null), t.WriteString(this.DataPackageId), t.WriteFieldEnd()) : t.WriteFieldOmitted(n.Bond.BondDataType.BT_STRING, 5, null), this.Timestamp.Equals("0") ? t.WriteFieldOmitted(n.Bond.BondDataType.BT_INT64, 6, null) : (t.WriteFieldBegin(n.Bond.BondDataType.BT_INT64, 6, null), t.WriteInt64(this.Timestamp), t.WriteFieldEnd()), this.Records.length) {
                                        t.WriteFieldBegin(n.Bond.BondDataType.BT_LIST, 8, null), t.WriteContainerBegin(this.Records.length, n.Bond.BondDataType.BT_STRUCT);
                                        for (var r = 0; r < this.Records.length; ++r) this.Records[r].WriteImpl(t, !1);
                                        t.WriteContainerEnd(), t.WriteFieldEnd()
                                    } else t.WriteFieldOmitted(n.Bond.BondDataType.BT_LIST, 8, null);
                                    t.WriteStructEnd(e)
                                }, t.prototype.Read = function(t) {
                                    this.ReadImpl(t, !1)
                                }, t.prototype.ReadImpl = function(t, e) {}, t
                            }();
                            e.DataPackage = a;
                            var s = function() {
                                function t() {
                                    this.DataPackages = [], this.RequestRetryCount = 0
                                }
                                return t.prototype.Write = function(t) {
                                    this.WriteImpl(t, !1)
                                }, t.prototype.WriteImpl = function(t, e) {
                                    if (t.WriteStructBegin(null, e), this.DataPackages.length) {
                                        t.WriteFieldBegin(n.Bond.BondDataType.BT_LIST, 1, null), t.WriteContainerBegin(this.DataPackages.length, n.Bond.BondDataType.BT_STRUCT);
                                        for (var r = 0; r < this.DataPackages.length; ++r) this.DataPackages[r].WriteImpl(t, !1);
                                        t.WriteContainerEnd(), t.WriteFieldEnd()
                                    } else t.WriteFieldOmitted(n.Bond.BondDataType.BT_LIST, 1, null);
                                    0 != this.RequestRetryCount ? (t.WriteFieldBegin(n.Bond.BondDataType.BT_INT32, 2, null), t.WriteInt32(this.RequestRetryCount), t.WriteFieldEnd()) : t.WriteFieldOmitted(n.Bond.BondDataType.BT_INT32, 2, null), t.WriteStructEnd(e)
                                }, t.prototype.Read = function(t) {
                                    this.ReadImpl(t, !1)
                                }, t.prototype.ReadImpl = function(t, e) {}, t
                            }();
                            e.ClientToCollectorRequest = s
                        }(t.datamodels || (t.datamodels = {}))
                    }(t.telemetry || (t.telemetry = {}))
                }(t.applications || (t.applications = {}))
            }(o || (o = {})),
            function(t) {
                ! function(t) {
                    ! function(t) {
                        ! function(o) {
                            var i, a;
                            ! function(t) {
                                t[t.SENT = 0] = "SENT", t[t.SEND_FAILED = 1] = "SEND_FAILED"
                            }(i = o.CallbackEventType || (o.CallbackEventType = {})),
                            function(t) {
                                t[t.DATARV_ERROR_OK = 0] = "DATARV_ERROR_OK", t[t.DATARV_ERROR_INVALID_EVENT = 1] = "DATARV_ERROR_INVALID_EVENT", t[t.DATARV_ERROR_INVALID_CONFIG = 2] = "DATARV_ERROR_INVALID_CONFIG", t[t.DATARV_ERROR_INVALID_DEPENDENCIES = 3] = "DATARV_ERROR_INVALID_DEPENDENCIES", t[t.DATARV_ERROR_INVALID_STATUS = 4] = "DATARV_ERROR_INVALID_STATUS", t[t.DATARV_ERROR_INVALID_ARG = 5] = "DATARV_ERROR_INVALID_ARG"
                            }(a = o.DATARV_ERROR || (o.DATARV_ERROR = {}));
                            var s = function() {
                                function t(t) {
                                    this._errorCode = a.DATARV_ERROR_OK, this._errorCode = t
                                }
                                return t.prototype.ErrorCode = function() {
                                    return this._errorCode
                                }, t.prototype.toString = function() {
                                    switch (this._errorCode) {
                                        case a.DATARV_ERROR_OK:
                                            return "DATARV_ERROR_OK";
                                        case a.DATARV_ERROR_INVALID_EVENT:
                                            return "Event is invalid. Either event.Id is empty, or event.Timestamp is empty, or event.EventType is empty.";
                                        case a.DATARV_ERROR_INVALID_CONFIG:
                                            return "Invalid configuration. CollectorUrl is missing.";
                                        case a.DATARV_ERROR_INVALID_DEPENDENCIES:
                                            return "DATARV_ERROR_INVALID_DEPENDENCIES";
                                        case a.DATARV_ERROR_INVALID_STATUS:
                                            return "Telemetry Manager is not initialized.";
                                        case a.DATARV_ERROR_INVALID_ARG:
                                            return "TenantToken is null or empty, or events is null.";
                                        default:
                                            return "Unknown error"
                                    }
                                }, t
                            }();
                            o.Exception = s;
                            var u = function() {
                                return function() {}
                            }();
                            o.TelemetryConfig = u;
                            var c = function() {
                                function t() {}
                                return t.CreateTelemetryManager = function() {
                                    return new d
                                }, t
                            }();
                            o.TelemetryManagerFactory = c;
                            var l, f = function() {
                                function t() {}
                                return t.MaxPackageSizeInBytes = function() {
                                    return 3e6
                                }, t.TimeIntervalForNextSendInMS = function() {
                                    return 1e3
                                }, t
                            }();
                            ! function(t) {
                                t[t.Created = 0] = "Created", t[t.Initialized = 1] = "Initialized", t[t.Started = 2] = "Started"
                            }(l || (l = {}));
                            var d = function() {
                                function o() {
                                    this._MaxPackageSizeInBytes = f.MaxPackageSizeInBytes(), this._listeners = [], this._status = l.Created, this._etag = null, this._testServerResponseHook = null, this._isPaused = !1
                                }
                                return o.prototype.Initialize = function(t) {
                                    if (this._status != l.Created) throw new s(a.DATARV_ERROR_INVALID_STATUS);
                                    if (!t || !t.collectorUrl) throw new s(a.DATARV_ERROR_INVALID_CONFIG);
                                    this._config = t, this._Reset(), this._status = l.Initialized, this._Verbose("Initialize() done")
                                }, o.prototype.AddListener = function(t) {
                                    if (this._status < l.Initialized) throw new s(a.DATARV_ERROR_INVALID_STATUS);
                                    this._Verbose(["AddListener(), status: ", this._status, " old length: ", this._listeners.length, " func: ", t].join(""));
                                    for (var e = 0; e < this._listeners.length; ++e)
                                        if (this._listeners[e] == t) return void this._Verbose("the listener has been added already, index: " + e);
                                    this._listeners.push(t), this._Verbose("AddListener() done, the new length: " + this._listeners.length)
                                }, o.prototype.RemoveListener = function(t) {
                                    if (this._status < l.Initialized) throw new s(a.DATARV_ERROR_INVALID_STATUS);
                                    this._Verbose(["RemoveListener(), status: ", this._status, " old length: ", this._listeners.length, " func: ", t].join(""));
                                    for (var e = 0; e < this._listeners.length; ++e)
                                        if (this._listeners[e] == t) return 1 == this._listeners.length ? this._listeners = [] : e == this._listeners.length - 1 ? this._listeners.pop() : this._listeners[e] = this._listeners.pop(), void this._Verbose(["this listener has been found, index: ", e, "new length: ", this._listeners.length].join(""));
                                    this._Verbose("listener isn't been found, new length" + this._listeners.length)
                                }, o.prototype.Start = function() {
                                    if (this._status < l.Initialized) throw new s(a.DATARV_ERROR_INVALID_STATUS);
                                    this._Verbose(["Start(), status:", this._status, "tag:", o._tag].join(" ")), this._status >= l.Started && this._Verbose("Start() already, ignore"), ++o._tag, this._status = l.Started, this._Verbose(["Start() done, status: ", this._status, "tag: ", o._tag].join(""))
                                }, o.prototype.Stop = function() {
                                    if (this._status < l.Initialized) throw new s(a.DATARV_ERROR_INVALID_STATUS);
                                    return this._Verbose("Stop(), status: " + this._status), this._status == l.Initialized ? void this._Verbose("Stop() already, ignore") : (this._Reset(), this._status = l.Initialized, void this._Verbose("Stop() done, status: " + this._status))
                                }, o.prototype.Pause = function() {
                                    this._isPaused = !0, this._CleanTimer()
                                }, o.prototype.Resume = function() {
                                    this._isPaused = !1, this._eventsCache.IsEmpty() || this._timer || this._ScheduleTimer(!1)
                                }, o.prototype.Flush = function(t) {
                                    this._eventsCache.IsEmpty() || this._WorkThread(t, !0)
                                }, o.prototype.SendAsync = function(t, e) {
                                    if (this._status < l.Initialized) throw new s(a.DATARV_ERROR_INVALID_STATUS);
                                    if (this._Verbose(["SendAsync(), status:", this._status, "tenantToken:", t, "count:", e.length].join(" ")), this._status < l.Started) return this._Info("SendAsync(), not started, ignore, return false"), !1;
                                    if (!t || !e) throw this._Error("SendAsync(), tenantToken or events is null or empty"), new s(a.DATARV_ERROR_INVALID_ARG);
                                    for (var n = 0; n < e.length; ++n)
                                        if (!e[n].Id || !o._eventTypeRegex.test(e[n].EventType) || e[n].Timestamp.Equals("0")) throw this._Error(["eventId:", e[n].Id, "eventType:", e[n].EventType, "timestamp high:", e[n].Timestamp.high, "timestamp low:", e[n].Timestamp.low].join("")), new s(a.DATARV_ERROR_INVALID_EVENT);
                                    return this._eventsCache.AddEvents(t, e), this._Verbose(["SendAsync(), currentTimer: ", this._timer, "eventsCacheIsEmpty", this._eventsCache.IsEmpty()].join(" ")), this._eventsCache.IsEmpty() || this._timer || this._ScheduleTimer(!1), this._Verbose("SendAsync() done"), !0
                                }, o.prototype._WorkThread = function(t, i) {
                                    var a = this;
                                    try {
                                        if (this._Verbose("_WorkThread, status: " + this._status), this._status < l.Started) return void this._Verbose("_WorkThread, status is not started, return");
                                        var s = this._eventsCache.DequeuEvents();
                                        if (null == s) return this._Verbose("_WorkThread, No events found, return"), void this._CleanTimer();
                                        var u = this._PackEvents(s.tenantToken, s.events);
                                        if (this._eventsCache.AddEvents(s.tenantToken, u.remainedEvents), null == u.buffer || 0 == u.buffer.length) return void(this._eventsCache.IsEmpty() ? (this._Verbose("eventsCache is empty, stop schedule"), this._CleanTimer()) : (this._Verbose("eventsCache is not empty, schedule for next run"), this._ScheduleTimer(!1)));
                                        if (this._testServerResponseHook) {
                                            var c = this._testServerResponseHook();
                                            return void setTimeout(this._SendCallback(d, s.tenantToken, u.sendEvents, c, !1, null), 100)
                                        }
                                        var f = {
                                            type: "POST",
                                            url: this._config.collectorUrl,
                                            processData: !1,
                                            headers: {
                                                "content-type": "application/bond-compact-binary",
                                                "client-id": "NO_AUTH",
                                                "sdk-version": "ACT-Web-JS-" + e.version
                                            },
                                            complete: function(e) {
                                                return a._SendCallback(d, s.tenantToken, u.sendEvents, e, i, t)
                                            }
                                        };
                                        r.Utils.IsUint8ArrSupported() ? (this._Verbose("Uint8Array is defined, send with binary format directly."), f.data = new Uint8Array(u.buffer)) : (this._Verbose("Uint8Array is undefined, send with base64 encode."), f.data = n.Bond.Encoding.Base64.GetString(u.buffer), f.headers["content-encoding"] = "base64"), s.tenantToken && (f.headers["x-apikey"] = s.tenantToken);
                                        var d = o._tag;
                                        this._lastActiveTime = (new Date).getTime(), r.Utils.ajax(f, i), this._Verbose("_Workthread, send via jquery, tag: " + d)
                                    } catch (t) {
                                        this._Error("_WorkThread, exception: " + t)
                                    }
                                }, o.prototype._PackEvents = function(e, n) {
                                    this._Verbose("_PackageEvents, total Count: " + n.length);
                                    var r = new t.datamodels.ClientToCollectorRequest,
                                        o = new t.datamodels.DataPackage;
                                    o.Source = "JS_default_source", o.DataPackageId = t.datamodels.utils.GetGuid(), o.Timestamp = t.datamodels.utils.GetTimeStamp();
                                    var i, a = n;
                                    for (n = []; o.Records = [], o.Records.push.apply(o.Records, a), r.DataPackages = [], r.DataPackages.push(o), i = this._Serialize(r), this._Verbose(["_PackageEvents, sendEvents.length:", a.length, "buffer.length:", i.length, "MaxPackageSize:", this._MaxPackageSizeInBytes].join("")), !(i.length < this._MaxPackageSizeInBytes);) {
                                        if (1 == a.length) {
                                            a = [], i = null;
                                            break
                                        }
                                        var s = a.splice(0, Math.floor(a.length / 2));
                                        this._Verbose("_PackageEvents, too large, package again"), n.push.apply(n, a), a = s
                                    }
                                    return this._Verbose(["_PakcageEvents done, sendEventsCount:", a.length, "buffer.length:", null == i ? 0 : i.length, "remained events:", n.length].join("")), {
                                        buffer: i,
                                        sendEvents: a,
                                        remainedEvents: n
                                    }
                                }, o.prototype._Serialize = function(t) {
                                    var e = new n.Bond.IO.MemoryStream,
                                        r = new n.Bond.CompactBinaryProtocolWriter(e);
                                    return t.Write(r), e.GetBuffer()
                                }, o.prototype._SendCallback = function(t, e, n, r, a, s) {
                                    if (this._Verbose(["_SendCallback", "tag:", t, "current tag:", o._tag, "tenantToken:", e, "events count:", n.length, "jqXHR:", r].join("")), s && s(r ? r.status : 0, e, n), !a) {
                                        var u = r && void 0 !== r.status && 200 === r.status;
                                        if (this._status < l.Started || t < o._tag) return void this._Verbose("_SendCallback, is not started, or tag is not the same, return");
                                        if (!u)
                                            if (r && void 0 !== r.status && 501 !== r.status && 505 !== r.status && (r.status < 300 || r.status >= 500 || 408 === r.status) || !r || void 0 === r.status) return this._Verbose("retry statusCode: " + (r ? r.status : 0)), this._eventsCache.AddEvents(e, n), void this._ScheduleTimer(!0);
                                        for (var c = 0; c < this._listeners.length; ++c) this._listeners[c](u ? i.SENT : i.SEND_FAILED, r ? r.status : 0, e, n);
                                        this._eventsCache.IsEmpty() ? (this._Verbose("eventsCache is empty, stop schedule"), this._CleanTimer()) : (this._Verbose("eventsCache is not empty, schedule for next run"), this._ScheduleTimer(!1))
                                    }
                                }, o.prototype._CleanTimer = function() {
                                    this._Verbose("_CleanTimer(), timer: " + this._timer), this._timer && (clearTimeout(this._timer), this._timer = null)
                                }, o.prototype._ScheduleTimer = function(t) {
                                    var e = this;
                                    if (!this._isPaused)
                                        if (this._Verbose("_ScheduleTimer: isRetry: " + t), this._CleanTimer(), t) {
                                            this._Verbose("_ScheduleTimer, current factor: " + this._rescheduleFactor);
                                            var n = Math.floor(5 * this._rescheduleFactor * (1 + Math.random()));
                                            this._timer = setTimeout(function() {
                                                return e._WorkThread(null, !1)
                                            }, 1e3 * n), this._Verbose("_ScheduleTimer, next try (s): " + n), this._rescheduleFactor <<= 1, this._rescheduleFactor > 64 && (this._rescheduleFactor = 1)
                                        } else {
                                            n = 0;
                                            var r = (new Date).getTime() - this._lastActiveTime;
                                            n = r > f.TimeIntervalForNextSendInMS() ? 0 : f.TimeIntervalForNextSendInMS() - r, this._timer = setTimeout(function() {
                                                return e._WorkThread(null, !1)
                                            }, n), this._Verbose("_ScheduleTimer, next try: " + n), this._rescheduleFactor = 1
                                        }
                                }, o.prototype._Verbose = function(t) {
                                    this._config.log && this._config.log.Verbose("[TelemetryManagerImpl]: " + t)
                                }, o.prototype._Info = function(t) {
                                    this._config.log && this._config.log.Info("[TelemetryManagerImpl]: " + t)
                                }, o.prototype._Error = function(t) {
                                    this._config.log && this._config.log.Error("[TelemetryManagerImpl]: " + t)
                                }, o.prototype._Reset = function() {
                                    this._Verbose("Reset()"), this._CleanTimer(), this._lastActiveTime = 0, this._rescheduleFactor = 1, this._sendingEvents = [], this._eventsCache = new p
                                }, o.prototype.__GetListenerArray = function() {
                                    return this._listeners
                                }, o.prototype.__GetTotalEventsCount = function() {
                                    return this._eventsCache.GetTotalEventsCount()
                                }, o.prototype.__IsScheduled = function() {
                                    return null != this._timer
                                }, o.prototype.__ChageMaxPackageSizeInKB = function(t) {
                                    this._MaxPackageSizeInBytes = 1024 * t
                                }, o.prototype.__SetTestServerResponseHook = function(t) {
                                    this._testServerResponseHook = t
                                }, o
                            }();
                            d._eventTypeRegex = /^[a-zA-Z0-9]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/, d._tag = 0;
                            var p = function() {
                                function t() {
                                    this._events = {}, this._tokens = []
                                }
                                return t.prototype.AddEvents = function(t, e) {
                                    e.length && (this._events[t] || (this._events[t] = [], this._tokens.push(t)), this._events[t].push.apply(this._events[t], e))
                                }, t.prototype.IsEmpty = function() {
                                    return 0 == this._tokens.length
                                }, t.prototype.DequeuEvents = function() {
                                    if (0 == this._tokens.length) return null;
                                    var t = this._tokens.shift(),
                                        e = this._events[t];
                                    return delete this._events[t], {
                                        tenantToken: t,
                                        events: e
                                    }
                                }, t.prototype.GetTotalEventsCount = function() {
                                    var t = 0;
                                    for (var e in this._events) t += this._events[e].length;
                                    return t
                                }, t
                            }()
                        }(t._sender || (t._sender = {}))
                    }(t.telemetry || (t.telemetry = {}))
                }(t.applications || (t.applications = {}))
            }(o || (o = {})),
            function(t) {
                ! function(n) {
                    ! function(n) {
                        var r = n._sender.TelemetryManagerFactory.CreateTelemetryManager(),
                            o = function() {
                                return function() {
                                    this.collectorUrl = null, this.enableAutoUserSession = !1, this.browserOverrides = null, this.disableCookies = !1
                                }
                            }();
                        o.COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/", n.LogConfiguration = o;
                        var i = function() {
                            return function() {
                                this.onSaveData = null, this.onGetData = null
                            }
                        }();
                        n.LogConfigurationBrowserOverrides = i;
                        var a, s = function() {
                                function t() {
                                    this.value = null, this.pii = null
                                }
                                return t._isPii = function(t) {
                                    return null !== t && void 0 !== t && t !== n.datamodels.PIIKind.NotSet && !isNaN(t) && void 0 !== n.datamodels.PIIKind[t]
                                }, t
                            }(),
                            u = function() {
                                function t() {
                                    this.name = null, this.timestamp = null, this.properties = {}, this.eventType = null
                                }
                                return t.prototype.setProperty = function(e, r, o) {
                                    if (!e || !t._propertyNameRegex.test(e)) throw new c(a.INVALID_PROPERTY_NAME);
                                    this.properties[e] = o ? {
                                        value: r,
                                        pii: o != n.datamodels.PIIKind.NotSet ? o : null
                                    } : {
                                        value: r,
                                        pii: null
                                    }
                                }, t
                            }();
                        u._propertyNameRegex = /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/, n.EventProperties = u,
                            function(t) {
                                t[t.INVALID_TENANT_TOKEN = 1] = "INVALID_TENANT_TOKEN", t[t.MISSING_EVENT_PROPERTIES_NAME = 2] = "MISSING_EVENT_PROPERTIES_NAME", t[t.INVALID_PROPERTY_NAME = 3] = "INVALID_PROPERTY_NAME", t[t.MISSING_FAILURE_SIGNATURE = 5] = "MISSING_FAILURE_SIGNATURE", t[t.MISSING_FAILURE_DETAIL = 6] = "MISSING_FAILURE_DETAIL", t[t.MISSING_PAGEVIEW_ID = 7] = "MISSING_PAGEVIEW_ID", t[t.MISSING_PAGEVIEW_NAME = 8] = "MISSING_PAGEVIEW_NAME", t[t.INVALID_SESSION_STATE = 9] = "INVALID_SESSION_STATE", t[t.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET = 10] = "INVALID_CONFIGURATION_USE_CUSTOM_GET_SET"
                            }(a = n.TelemetryError || (n.TelemetryError = {}));
                        var c = function() {
                            function t(t) {
                                this.errorCode = null, this.errorCode = t
                            }
                            return t.prototype.ErrorCode = function() {
                                return this.errorCode
                            }, t.prototype.toString = function() {
                                switch (this.errorCode) {
                                    case a.INVALID_TENANT_TOKEN:
                                        return "Invalid tenant token";
                                    case a.MISSING_EVENT_PROPERTIES_NAME:
                                        return "Eventproperties.name can not be null or empty";
                                    case a.INVALID_PROPERTY_NAME:
                                        return "Invalid Key. Key does not conform to regular expression ^[a-zA-Z0-9](([a-zA-Z0-9|_|.]){0,98}[a-zA-Z0-9])?$";
                                    case a.MISSING_FAILURE_SIGNATURE:
                                        return "Failure signature can't be null or empty.";
                                    case a.MISSING_FAILURE_DETAIL:
                                        return "Failure detail can't be null or empty.";
                                    case a.MISSING_PAGEVIEW_ID:
                                        return "Pageview id can't be null or empty.";
                                    case a.MISSING_PAGEVIEW_NAME:
                                        return "Pageview name can't be null or empty.";
                                    case a.INVALID_SESSION_STATE:
                                        return "Session state has to be a value from the SessionState enum.";
                                    case a.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET:
                                        return "Invalid configuration provided during initialization. Both onGetConfigData and onSaveConfigData must be provided together.  These are manditory when running in a non-brower enviornment";
                                    default:
                                        return "Unknown error"
                                }
                            }, t
                        }();
                        n.Exception = c;
                        var l = function() {
                            function e(t) {
                                this.contextMap = {}, this.piiKind = n.datamodels.PIIKind.NotSet, this._allowDeviceInfoFields = !1, this._allowDeviceInfoFields = t
                            }
                            return e.prototype.setAppId = function(t) {
                                t && (this.contextMap["AppInfo.Id"] = t)
                            }, e.prototype.setAppVersion = function(t) {
                                t && (this.contextMap["AppInfo.Version"] = t)
                            }, e.prototype.setAppLanguage = function(t) {
                                t && (this.contextMap["AppInfo.Language"] = t)
                            }, e.prototype.setDeviceId = function(t) {
                                t && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.Id"] = t, d.checkAndUpdateDeviceId(t))
                            }, e.prototype.setDeviceOsName = function(t) {
                                t && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.OsName"] = t)
                            }, e.prototype.setDeviceOsVersion = function(t) {
                                t && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.OsVersion"] = t)
                            }, e.prototype.setDeviceBrowserName = function(t) {
                                t && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.BrowserName"] = t)
                            }, e.prototype.setDeviceBrowserVersion = function(t) {
                                t && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.BrowserVersion"] = t)
                            }, e.prototype.setUserId = function(e, n, r) {
                                if (e && (this.contextMap["UserInfo.Id"] = e), r) this.contextMap["UserInfo.IdType"] = r;
                                else {
                                    var o;
                                    switch (n) {
                                        case t.applications.telemetry.datamodels.PIIKind.SipAddress:
                                            o = t.applications.telemetry.datamodels.UserIdType.SipAddress;
                                            break;
                                        case t.applications.telemetry.datamodels.PIIKind.PhoneNumber:
                                            o = t.applications.telemetry.datamodels.UserIdType.PhoneNumber;
                                            break;
                                        case t.applications.telemetry.datamodels.PIIKind.SmtpAddress:
                                            o = t.applications.telemetry.datamodels.UserIdType.EmailAddress;
                                            break;
                                        default:
                                            o = t.applications.telemetry.datamodels.UserIdType.Unknown
                                    }
                                    this.contextMap["UserInfo.IdType"] = o
                                }
                                if (n) s._isPii(n) && (this.piiKind = n);
                                else {
                                    var i;
                                    switch (r) {
                                        case t.applications.telemetry.datamodels.UserIdType.Skype:
                                            i = t.applications.telemetry.datamodels.PIIKind.Identity;
                                            break;
                                        case t.applications.telemetry.datamodels.UserIdType.EmailAddress:
                                            i = t.applications.telemetry.datamodels.PIIKind.SmtpAddress;
                                            break;
                                        case t.applications.telemetry.datamodels.UserIdType.PhoneNumber:
                                            i = t.applications.telemetry.datamodels.PIIKind.PhoneNumber;
                                            break;
                                        case t.applications.telemetry.datamodels.UserIdType.SipAddress:
                                            i = t.applications.telemetry.datamodels.PIIKind.SipAddress;
                                            break;
                                        default:
                                            i = t.applications.telemetry.datamodels.PIIKind.NotSet
                                    }
                                    s._isPii(i) && (this.piiKind = i)
                                }
                            }, e.prototype.setUserMsaId = function(t) {
                                t && (this.contextMap["UserInfo.MsaId"] = t)
                            }, e.prototype.setUserANID = function(t) {
                                t && (this.contextMap["UserInfo.ANID"] = t)
                            }, e.prototype.setUserAdvertisingId = function(t) {
                                t && (this.contextMap["UserInfo.AdvertisingId"] = t)
                            }, e.prototype.setUserTimeZone = function(t) {
                                t && (this.contextMap["UserInfo.TimeZone"] = t)
                            }, e.prototype.setUserLanguage = function(t) {
                                t && (this.contextMap["UserInfo.Language"] = t)
                            }, e
                        }();
                        n.SemanticContext = l;
                        var f, d = function() {
                            function t() {}
                            return t.initialize = function(e, r) {
                                this._overrides = e, this._disableCookies = r;
                                var o = t._getAppLanguage();
                                o && t.semanticContext.setAppLanguage(o);
                                var i = t._getUserLanguage();
                                i && t.semanticContext.setUserLanguage(i);
                                var a = (new Date).getTimezoneOffset(),
                                    s = a % 60,
                                    u = (a - s) / 60,
                                    c = "+";
                                if (u > 0 && (c = "-"), t.semanticContext.setUserTimeZone(c + (u < 10 ? "0" + u : u.toString()) + ":" + (s < 10 ? "0" + s : s.toString())), t._getUserAgent() && (t.semanticContext.setDeviceBrowserName(t._getBrowserName()), t.semanticContext.setDeviceBrowserVersion(t._getBrowserVersion()), t.semanticContext.setDeviceOsName(t._getOsName()), t.semanticContext.setDeviceOsVersion(t._getOsVersion())), this._disableCookies && !this._overrides) return t._deleteCookie(t.DEVICE_ID_COOKIE), void t._deleteCookie(t.FIRST_LAUNCH_TIME_COOKIE);
                                var l = t._getData(t.DEVICE_ID_COOKIE);
                                l && "" != l || (l = n.datamodels.utils.GetGuid()), t.semanticContext.setDeviceId(l)
                            }, t.checkAndUpdateDeviceId = function(e) {
                                var n = t._getData(t.DEVICE_ID_COOKIE),
                                    r = t._getData(t.FIRST_LAUNCH_TIME_COOKIE);
                                n !== e && (r = (new Date).getTime().toString()), t.firstLaunchTime = parseInt(r), t._saveData(t.DEVICE_ID_COOKIE, e), t._saveData(t.FIRST_LAUNCH_TIME_COOKIE, r)
                            }, t._saveData = function(e, n) {
                                if (this._overrides) this._overrides.onSaveData(e, n);
                                else if ("undefined" != typeof document && void 0 !== document.cookie && !t._disableCookies) {
                                    var r = new Date;
                                    r.setTime(r.getTime() + 31536e6);
                                    var o = "expires=" + r.toUTCString();
                                    document.cookie = e + "=" + n + "; " + o
                                }
                            }, t._getData = function(e) {
                                if (this._overrides) return this._overrides.onGetData(e) || "";
                                if ("undefined" != typeof document && void 0 !== document.cookie && !t._disableCookies)
                                    for (var n = e + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                                        for (var i = r[o], a = 0;
                                            " " == i.charAt(a);) a++;
                                        if (0 == (i = i.substring(a)).indexOf(n)) return i.substring(n.length, i.length)
                                    }
                                return ""
                            }, t._getUserAgent = function() {
                                return "undefined" != typeof navigator && navigator.userAgent || ""
                            }, t._getAppLanguage = function() {
                                return "undefined" != typeof document && document.documentElement ? document.documentElement.lang : null
                            }, t._getUserLanguage = function() {
                                return "undefined" != typeof navigator ? navigator.userLanguage || navigator.language : null
                            }, t._userAgentContainsString = function(e) {
                                return t._getUserAgent().indexOf(e) > -1
                            }, t._isIe = function() {
                                return t._userAgentContainsString("Trident")
                            }, t._isEdge = function() {
                                return t._userAgentContainsString(t.BROWSERS.EDGE)
                            }, t._isOpera = function() {
                                return t._userAgentContainsString("OPR/")
                            }, t._getBrowserName = function() {
                                return t._isOpera() ? t.BROWSERS.UNKNOWN : t._userAgentContainsString(t.BROWSERS.PHANTOMJS) ? t.BROWSERS.PHANTOMJS : t._isIe() ? t.BROWSERS.MSIE : t._isEdge() ? t.BROWSERS.EDGE : t._userAgentContainsString(t.BROWSERS.ELECTRON) ? t.BROWSERS.ELECTRON : t._userAgentContainsString(t.BROWSERS.CHROME) ? t.BROWSERS.CHROME : t._userAgentContainsString(t.BROWSERS.FIREFOX) ? t.BROWSERS.FIREFOX : t._userAgentContainsString(t.BROWSERS.SAFARI) ? t.BROWSERS.SAFARI : t._userAgentContainsString(t.BROWSERS.SKYPE_SHELL) ? t.BROWSERS.SKYPE_SHELL : t.BROWSERS.UNKNOWN
                            }, t._getBrowserVersion = function() {
                                return t._isIe() ? function() {
                                    var e, n = t._getUserAgent(),
                                        r = n.match(new RegExp(t.BROWSERS.MSIE + " " + t.REGEX_VERSION));
                                    return r ? r[1] : (e = n.match(new RegExp("rv:" + t.REGEX_VERSION))) ? e[1] : void 0
                                }() : function(e) {
                                    var n;
                                    return e === t.BROWSERS.SAFARI && (e = "Version"), (n = t._getUserAgent().match(new RegExp(e + "/" + t.REGEX_VERSION))) ? n[1] : t.UNKNOWN_VERSION
                                }(t._getBrowserName())
                            }, t._getOsName = function() {
                                return t._getUserAgent().match(/windows\sphone\s\d+\.\d+/i) ? t.OPERATING_SYSTEMS.WINDOWS_PHONE : t._getUserAgent().match(/ arm;/i) ? t.OPERATING_SYSTEMS.WINDOWS_RT : t._getUserAgent().match(/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i) ? t.OPERATING_SYSTEMS.IOS : t._getUserAgent().match(/android/i) ? t.OPERATING_SYSTEMS.ANDROID : t._getUserAgent().match(/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i) ? t.OPERATING_SYSTEMS.LINUX : t._getUserAgent().match(/(macintosh|mac os x)/i) ? t.OPERATING_SYSTEMS.MACOSX : t._getUserAgent().match(/(windows|win32)/i) ? t.OPERATING_SYSTEMS.WINDOWS : t.OPERATING_SYSTEMS.UNKNOWN
                            }, t._getOsVersion = function() {
                                return t._getOsName() === t.OPERATING_SYSTEMS.WINDOWS ? function() {
                                    var e = t._getUserAgent().match(new RegExp("Windows NT " + t.REGEX_VERSION));
                                    return e && t.VERSION_MAPPINGS[e[1]] ? t.VERSION_MAPPINGS[e[1]] : t.UNKNOWN_VERSION
                                }() : t._getOsName() === t.OPERATING_SYSTEMS.MACOSX ? function() {
                                    var e = t._getUserAgent().match(new RegExp(t.OPERATING_SYSTEMS.MACOSX + " " + t.REGEX_VERSION_MAC));
                                    if (e) {
                                        var n = e[1].replace(/_/g, ".");
                                        if (n) {
                                            var r = function(t) {
                                                return t.indexOf(".") > -1 ? "." : t.indexOf("_") > -1 ? "_" : null
                                            }(n);
                                            return r ? n.split(r)[0] : n
                                        }
                                    }
                                    return t.UNKNOWN_VERSION
                                }() : t.UNKNOWN_VERSION
                            }, t
                        }();
                        d.semanticContext = new l(!0), d.firstLaunchTime = -1, d.BROWSERS = {
                                MSIE: "MSIE",
                                CHROME: "Chrome",
                                FIREFOX: "Firefox",
                                SAFARI: "Safari",
                                EDGE: "Edge",
                                ELECTRON: "Electron",
                                SKYPE_SHELL: "SkypeShell",
                                PHANTOMJS: "PhantomJS",
                                UNKNOWN: "Unknown"
                            }, d.OPERATING_SYSTEMS = {
                                WINDOWS: "Windows",
                                MACOSX: "Mac OS X",
                                WINDOWS_PHONE: "Windows Phone",
                                WINDOWS_RT: "Windows RT",
                                IOS: "iOS",
                                ANDROID: "Android",
                                LINUX: "Linux",
                                UNKNOWN: "Unknown"
                            }, d.VERSION_MAPPINGS = {
                                5.1: "XP",
                                "6.0": "Vista",
                                6.1: "7",
                                6.2: "8",
                                6.3: "8.1",
                                "10.0": "10"
                            }, d.REGEX_VERSION = "([\\d,.]+)", d.REGEX_VERSION_MAC = "([\\d,_,.]+)", d.UNKNOWN_VERSION = "Unknown", d.DEVICE_ID_COOKIE = "MicrosoftApplicationsTelemetryDeviceId", d.FIRST_LAUNCH_TIME_COOKIE = "MicrosoftApplicationsTelemetryFirstLaunchTime", d._deleteCookie = function(t) {
                                "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                            }, d._disableCookies = !1,
                            function(t) {
                                t[t.STARTED = 0] = "STARTED", t[t.ENDED = 1] = "ENDED"
                            }(f = n.SessionState || (n.SessionState = {}));
                        var p = function() {
                            function t() {}
                            return t.initialize = function(e, n) {
                                if (!t._initialized) {
                                    if (!e) throw new c(a.INVALID_TENANT_TOKEN);
                                    if (t._defaultToken = e, t._tmConfig.collectorUrl = "https://browser.pipe.aria.microsoft.com/Collector/3.0/", t._configuration = n, !("undefined" != typeof window || n && n.browserOverrides && n.browserOverrides.onGetData)) throw new c(a.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);
                                    var o = null;
                                    if (n)
                                        if (n.collectorUrl && (t._tmConfig.collectorUrl = n.collectorUrl), n.browserOverrides) {
                                            if (o = new i, n.browserOverrides.onGetData ? !n.browserOverrides.onSaveData : n.browserOverrides.onSaveData) throw new c(a.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);
                                            o.onGetData = n.browserOverrides.onGetData, o.onSaveData = n.browserOverrides.onSaveData
                                        } else n.disableCookies && (t._sessionEnabled = !1);
                                    r.Initialize(t._tmConfig), r.Start(), d.initialize(o, n.disableCookies), t._initialized = !0, "undefined" != typeof window && window.addEventListener && (n && n.enableAutoUserSession && (t._logger = new v, t._logger.logSession(f.STARTED)), window.addEventListener("beforeunload", t._teardown))
                                }
                            }, t.pauseTransmission = function() {
                                r.Pause()
                            }, t.resumeTransmission = function() {
                                r.Resume()
                            }, t.flush = function(t) {
                                r.Flush(t)
                            }, t.addCallbackListener = function(e) {
                                t._initialized && r.AddListener(e)
                            }, t.setContext = function(e, n, r) {
                                t._contextProperties.setProperty(e, n, r)
                            }, t.isInitialized = function() {
                                return t._initialized
                            }, t.getDefaultToken = function() {
                                return t._defaultToken
                            }, t.getSemanticContext = function() {
                                return t._semanticContext
                            }, t._getInitIdForToken = function(e) {
                                return t._initIdMap[e] || (t._initIdMap[e] = n.datamodels.utils.GetGuid()), t._initIdMap[e]
                            }, t._getSequenceForToken = function(e) {
                                return t._sequenceMap[e] || (t._sequenceMap[e] = 0), t._sequenceMap[e]++, t._sequenceMap[e]
                            }, t._teardown = function() {
                                t._logger && t._logger.logSession(f.ENDED), t.flush()
                            }, t.__backToUninitialized = function() {
                                t._tmConfig = new n._sender.TelemetryConfig, t._semanticContext = new l(!0), t._contextProperties = new u, t._configuration = null, r = n._sender.TelemetryManagerFactory.CreateTelemetryManager(), t._initialized = !1, t._initIdMap = {}, t._sequenceMap = {}
                            }, t
                        }();
                        p._initialized = !1, p._defaultToken = null, p._tmConfig = new n._sender.TelemetryConfig, p._logger = null, p._initIdMap = {}, p._sequenceMap = {}, p._configuration = null, p._contextProperties = new u, p._semanticContext = new l(!0), p._sessionEnabled = !0, n.LogManager = p;
                        var v = function() {
                            function t(t) {
                                this._initId = null, this._tenantToken = null, this._contextProperties = new u, this._semanticContext = new l(!1), this._sessionStartTime = 0, this._sessionId = null, this._tenantToken = t || p.getDefaultToken(), this._initId = p._getInitIdForToken(this._tenantToken)
                            }
                            return t.prototype.logEvent = function(t) {
                                if (!t.name) throw new c(a.MISSING_EVENT_PROPERTIES_NAME);
                                var e = this._createEventRecord(t.name, t.eventType);
                                this._addPropertiesAndSendEvent(e, t)
                            }, t.prototype.logFailure = function(t, e, n, r, o) {
                                if (!t) throw new c(a.MISSING_FAILURE_SIGNATURE);
                                if (!e) throw new c(a.MISSING_FAILURE_DETAIL);
                                var i = this._createEventRecord("failure", "failure");
                                i.Extension.Add("Failure.Signature", t), i.Extension.Add("Failure.Detail", e), n && i.Extension.Add("Failure.Category", n), r && i.Extension.Add("Failure.Id", r), this._addPropertiesAndSendEvent(i, o)
                            }, t.prototype.logPageView = function(t, e, n, r, o, i) {
                                if (!t) throw new c(a.MISSING_PAGEVIEW_ID);
                                if (!e) throw new c(a.MISSING_PAGEVIEW_NAME);
                                var s = this._createEventRecord("pageview", "pageview");
                                s.Extension.Add("PageView.Id", t), s.Extension.Add("PageView.Name", e), n && s.Extension.Add("PageView.Category", n), r && s.Extension.Add("PageView.Uri", r), o && s.Extension.Add("PageView.ReferrerUri", o), this._addPropertiesAndSendEvent(s, i)
                            }, t.prototype.logSession = function(t, e) {
                                if (p._sessionEnabled) {
                                    if (t !== f.STARTED && t !== f.ENDED) throw new c(a.INVALID_SESSION_STATE);
                                    var r = this._createEventRecord("session", "session");
                                    if (t === f.STARTED) {
                                        if (this._sessionStartTime > 0) return;
                                        this._sessionStartTime = (new Date).getTime(), this._sessionId = n.datamodels.utils.GetGuid(), r.Extension.Add("Session.Id", this._sessionId), r.Extension.Add("Session.State", "Started")
                                    } else if (t === f.ENDED) {
                                        if (0 == this._sessionStartTime) return;
                                        var o = Math.floor(((new Date).getTime() - this._sessionStartTime) / 1e3);
                                        r.Extension.Add("Session.Duration", o.toString()), r.Extension.Add("Session.DurationBucket", this._getSessionDurationFromTime(o)), r.Extension.Add("Session.Id", this._sessionId), r.Extension.Add("Session.State", "Ended"), this._sessionId = null, this._sessionStartTime = 0
                                    }
                                    r.Extension.Add("Session.FirstLaunchTime", this._getISOString(new Date(d.firstLaunchTime))), this._addPropertiesAndSendEvent(r, e)
                                }
                            }, t.prototype.getSessionId = function() {
                                return this._sessionId
                            }, t.prototype.setContext = function(t, e, n) {
                                this._contextProperties.setProperty(t, e, n)
                            }, t.prototype.getSemanticContext = function() {
                                return this._semanticContext
                            }, t.prototype._getSessionDurationFromTime = function(t) {
                                return t < 0 ? "Undefined" : t <= 3 ? "UpTo3Sec" : t <= 10 ? "UpTo10Sec" : t <= 30 ? "UpTo30Sec" : t <= 60 ? "UpTo60Sec" : t <= 180 ? "UpTo3Min" : t <= 600 ? "UpTo10Min" : t <= 1800 ? "UpTo30Min" : "Above30Min"
                            }, t.prototype._createEventRecord = function(t, r) {
                                var o = new n.datamodels.Record;
                                r || (r = "custom"), o.EventType = t.toLowerCase(), o.Type = r.toLowerCase(), o.Extension.Add("EventInfo.Source", "JS_default_source"), o.Extension.Add("EventInfo.InitId", this._initId), o.Extension.Add("EventInfo.Sequence", p._getSequenceForToken(this._tenantToken).toString()), o.Extension.Add("EventInfo.Name", t.toLowerCase());
                                var i = new Date;
                                return o.Timestamp = n.datamodels.utils.GetTimeStampWithValue(i.getTime()), o.Extension.Add("EventInfo.Time", this._getISOString(i)), o.Extension.Add("EventInfo.SdkVersion", "ACT-Web-JS-" + e.version), o
                            }, t.prototype._getISOString = function(t) {
                                function e(t) {
                                    return t < 10 ? "0" + t : t.toString()
                                }
                                return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds()) + "." + function(t) {
                                    return t < 10 ? "00" + t : t < 100 ? "0" + t : t.toString()
                                }(t.getUTCMilliseconds()) + "Z"
                            }, t.prototype._addCustomPropertiesToEvent = function(t, e) {
                                this._addSemanticContext(t, d.semanticContext), this._addSemanticContext(t, p._semanticContext), this._addSemanticContext(t, this._semanticContext), this._sessionId && t.Extension.Add("Session.Id", this._sessionId), this._addEventPropertiesToEvent(t, p._contextProperties), this._addEventPropertiesToEvent(t, this._contextProperties), this._addEventPropertiesToEvent(t, e)
                            }, t.prototype._addSemanticContext = function(t, e) {
                                if (e && e.contextMap) {
                                    var r = e.contextMap;
                                    for (var o in e.contextMap) "UserInfo.Id" == o && e.piiKind != n.datamodels.PIIKind.NotSet ? t.AddOrReplacePII(o, r[o], e.piiKind) : t.Extension.AddOrReplace(o, r[o])
                                }
                            }, t.prototype._addEventPropertiesToEvent = function(t, e) {
                                if (e) {
                                    e.timestamp && e.timestamp >= new Date("1/1/2000").getTime() && (t.Timestamp = n.datamodels.utils.GetTimeStampWithValue(e.timestamp), t.Extension.AddOrReplace("EventInfo.Time", this._getISOString(new Date(e.timestamp)))), e.name && (t.EventType = e.name.toLowerCase(), t.Extension.AddOrReplace("EventInfo.Name", e.name.toLowerCase()));
                                    var r = e.properties;
                                    if (r)
                                        for (var o in r) o && (r[o].value || !1 === r[o].value || 0 == r[o].value || "" == r[o].value) && (s._isPii(r[o].pii) ? (t.AddOrReplacePII(o, r[o].value.toString(), r[o].pii), t.Extension.Remove(o)) : (t.Extension.AddOrReplace(o, r[o].value.toString()), t.PIIExtensions.Remove(o)))
                                }
                            }, t.prototype._addPropertiesAndSendEvent = function(t, e) {
                                this._addCustomPropertiesToEvent(t, e), p.isInitialized() && (this._sanitizeName(t), r.SendAsync(this._tenantToken, [t]))
                            }, t.prototype._sanitizeName = function(t) {
                                var e = t.EventType.replace(/\./g, "_");
                                t.EventType = e, t.Extension.AddOrReplace("EventInfo.Name", e)
                            }, t
                        }();
                        n.Logger = v
                    }(n.telemetry || (n.telemetry = {}))
                }(t.applications || (t.applications = {}))
            }(o || (o = {})), t.exports = o.applications.telemetry
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    n(241)("Uint8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    "use strict";
    if (n(13)) {
        var r = n(43),
            o = n(3),
            i = n(19),
            a = n(14),
            s = n(116),
            u = n(161),
            c = n(39),
            l = n(101),
            f = n(53),
            d = n(21),
            p = n(105),
            v = n(45),
            h = n(20),
            g = n(162),
            y = n(76),
            m = n(71),
            _ = n(37),
            E = n(59),
            S = n(18),
            b = n(24),
            O = n(102),
            T = n(94),
            I = n(140),
            w = n(51).f,
            A = n(103),
            x = n(44),
            N = n(4),
            R = n(153),
            P = n(138),
            C = n(77),
            D = n(8),
            k = n(54),
            L = n(107),
            M = n(106),
            j = n(163),
            U = n(242),
            B = n(17),
            V = n(73),
            W = B.f,
            F = V.f,
            G = o.RangeError,
            H = o.TypeError,
            z = o.Uint8Array,
            K = Array.prototype,
            Y = u.ArrayBuffer,
            q = u.DataView,
            Q = R(0),
            X = R(2),
            $ = R(3),
            J = R(4),
            Z = R(5),
            tt = R(6),
            et = P(!0),
            nt = P(!1),
            rt = D.values,
            ot = D.keys,
            it = D.entries,
            at = K.lastIndexOf,
            st = K.reduce,
            ut = K.reduceRight,
            ct = K.join,
            lt = K.sort,
            ft = K.slice,
            dt = K.toString,
            pt = K.toLocaleString,
            vt = N("iterator"),
            ht = N("toStringTag"),
            gt = x("typed_constructor"),
            yt = x("def_constructor"),
            mt = s.CONSTR,
            _t = s.TYPED,
            Et = s.VIEW,
            St = R(1, function(t, e) {
                return wt(C(t, t[yt]), e)
            }),
            bt = i(function() {
                return 1 === new z(new Uint16Array([1]).buffer)[0]
            }),
            Ot = !!z && !!z.prototype.set && i(function() {
                new z(1).set({})
            }),
            Tt = function(t, e) {
                var n = v(t);
                if (n < 0 || n % e) throw G("Wrong offset!");
                return n
            },
            It = function(t) {
                if (S(t) && _t in t) return t;
                throw H(t + " is not a typed array!")
            },
            wt = function(t, e) {
                if (!(S(t) && gt in t)) throw H("It is not a typed array constructor!");
                return new t(e)
            },
            At = function(t, e) {
                return xt(C(t, t[yt]), e)
            },
            xt = function(t, e) {
                for (var n = 0, r = e.length, o = wt(t, r); r > n;) o[n] = e[n++];
                return o
            },
            Nt = function(t, e, n) {
                W(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            Rt = function(t) {
                var e, n, r, o, i, a, s = b(t),
                    u = arguments.length,
                    l = u > 1 ? arguments[1] : void 0,
                    f = void 0 !== l,
                    d = A(s);
                if (void 0 != d && !O(d)) {
                    for (a = d.call(s), r = [], e = 0; !(i = a.next()).done; e++) r.push(i.value);
                    s = r
                }
                for (f && u > 2 && (l = c(l, arguments[2], 2)), e = 0, n = h(s.length), o = wt(this, n); n > e; e++) o[e] = f ? l(s[e], e) : s[e];
                return o
            },
            Pt = function() {
                for (var t = 0, e = arguments.length, n = wt(this, e); e > t;) n[t] = arguments[t++];
                return n
            },
            Ct = !!z && i(function() {
                pt.call(new z(1))
            }),
            Dt = function() {
                return pt.apply(Ct ? ft.call(It(this)) : It(this), arguments)
            },
            kt = {
                copyWithin: function(t, e) {
                    return U.call(It(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return J(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return j.apply(It(this), arguments)
                },
                filter: function(t) {
                    return At(this, X(It(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return Z(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    Q(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return ct.apply(It(this), arguments)
                },
                lastIndexOf: function(t) {
                    return at.apply(It(this), arguments)
                },
                map: function(t) {
                    return St(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return st.apply(It(this), arguments)
                },
                reduceRight: function(t) {
                    return ut.apply(It(this), arguments)
                },
                reverse: function() {
                    for (var t, e = It(this).length, n = Math.floor(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
                    return this
                },
                some: function(t) {
                    return $(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return lt.call(It(this), t)
                },
                subarray: function(t, e) {
                    var n = It(this),
                        r = n.length,
                        o = y(t, r);
                    return new(C(n, n[yt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, h((void 0 === e ? r : y(e, r)) - o))
                }
            },
            Lt = function(t, e) {
                return At(this, ft.call(It(this), t, e))
            },
            Mt = function(t) {
                It(this);
                var e = Tt(arguments[1], 1),
                    n = this.length,
                    r = b(t),
                    o = h(r.length),
                    i = 0;
                if (o + e > n) throw G("Wrong length!");
                for (; i < o;) this[e + i] = r[i++]
            },
            jt = {
                entries: function() {
                    return it.call(It(this))
                },
                keys: function() {
                    return ot.call(It(this))
                },
                values: function() {
                    return rt.call(It(this))
                }
            },
            Ut = function(t, e) {
                return S(t) && t[_t] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            Bt = function(t, e) {
                return Ut(t, e = m(e, !0)) ? f(2, t[e]) : F(t, e)
            },
            Vt = function(t, e, n) {
                return !(Ut(t, e = m(e, !0)) && S(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? W(t, e, n) : (t[e] = n.value, t)
            };
        mt || (V.f = Bt, B.f = Vt), a(a.S + a.F * !mt, "Object", {
            getOwnPropertyDescriptor: Bt,
            defineProperty: Vt
        }), i(function() {
            dt.call({})
        }) && (dt = pt = function() {
            return ct.call(this)
        });
        var Wt = p({}, kt);
        p(Wt, jt), d(Wt, vt, jt.values), p(Wt, {
            slice: Lt,
            set: Mt,
            constructor: function() {},
            toString: dt,
            toLocaleString: Dt
        }), Nt(Wt, "buffer", "b"), Nt(Wt, "byteOffset", "o"), Nt(Wt, "byteLength", "l"), Nt(Wt, "length", "e"), W(Wt, ht, {
            get: function() {
                return this[_t]
            }
        }), t.exports = function(t, e, n, u) {
            var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
                f = "get" + t,
                p = "set" + t,
                v = o[c],
                y = v || {},
                m = v && I(v),
                _ = !v || !s.ABV,
                b = {},
                O = v && v.prototype,
                A = function(t, n) {
                    W(t, n, {
                        get: function() {
                            return function(t, n) {
                                var r = t._d;
                                return r.v[f](n * e + r.o, bt)
                            }(this, n)
                        },
                        set: function(t) {
                            return function(t, n, r) {
                                var o = t._d;
                                u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.v[p](n * e + o.o, r, bt)
                            }(this, n, t)
                        },
                        enumerable: !0
                    })
                };
            _ ? (v = n(function(t, n, r, o) {
                l(t, v, c, "_d");
                var i, a, s, u, f = 0,
                    p = 0;
                if (S(n)) {
                    if (!(n instanceof Y || "ArrayBuffer" == (u = E(n)) || "SharedArrayBuffer" == u)) return _t in n ? xt(v, n) : Rt.call(v, n);
                    i = n, p = Tt(r, e);
                    var y = n.byteLength;
                    if (void 0 === o) {
                        if (y % e) throw G("Wrong length!");
                        if ((a = y - p) < 0) throw G("Wrong length!")
                    } else if ((a = h(o) * e) + p > y) throw G("Wrong length!");
                    s = a / e
                } else s = g(n), i = new Y(a = s * e);
                for (d(t, "_d", {
                        b: i,
                        o: p,
                        l: a,
                        e: s,
                        v: new q(i)
                    }); f < s;) A(t, f++)
            }), O = v.prototype = T(Wt), d(O, "constructor", v)) : i(function() {
                v(1)
            }) && i(function() {
                new v(-1)
            }) && L(function(t) {
                new v, new v(null), new v(1.5), new v(t)
            }, !0) || (v = n(function(t, n, r, o) {
                var i;
                return l(t, v, c), S(n) ? n instanceof Y || "ArrayBuffer" == (i = E(n)) || "SharedArrayBuffer" == i ? void 0 !== o ? new y(n, Tt(r, e), o) : void 0 !== r ? new y(n, Tt(r, e)) : new y(n) : _t in n ? xt(v, n) : Rt.call(v, n) : new y(g(n))
            }), Q(m !== Function.prototype ? w(y).concat(w(m)) : w(y), function(t) {
                t in v || d(v, t, y[t])
            }), v.prototype = O, r || (O.constructor = v));
            var x = O[vt],
                N = !!x && ("values" == x.name || void 0 == x.name),
                R = jt.values;
            d(v, gt, !0), d(O, _t, c), d(O, Et, !0), d(O, yt, v), (u ? new v(1)[ht] == c : ht in O) || W(O, ht, {
                get: function() {
                    return c
                }
            }), b[c] = v, a(a.G + a.W + a.F * (v != y), b), a(a.S, c, {
                BYTES_PER_ELEMENT: e
            }), a(a.S + a.F * i(function() {
                y.of.call(v, 1)
            }), c, {
                from: Rt,
                of: Pt
            }), "BYTES_PER_ELEMENT" in O || d(O, "BYTES_PER_ELEMENT", e), a(a.P, c, kt), M(c), a(a.P + a.F * Ot, c, {
                set: Mt
            }), a(a.P + a.F * !N, c, jt), r || O.toString == dt || (O.toString = dt), a(a.P + a.F * i(function() {
                new v(1).slice()
            }), c, {
                slice: Lt
            }), a(a.P + a.F * (i(function() {
                return [1, 2].toLocaleString() != new v([1, 2]).toLocaleString()
            }) || !i(function() {
                O.toLocaleString.call([1, 2])
            })), c, {
                toLocaleString: Dt
            }), k[c] = N ? x : R, r || N || d(O, vt, R)
        }
    } else t.exports = function() {}
}, function(t, e, n) {
    "use strict";
    var r = n(24),
        o = n(76),
        i = n(20);
    t.exports = [].copyWithin || function(t, e) {
        var n = r(this),
            a = i(n.length),
            s = o(t, a),
            u = o(e, a),
            c = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === c ? a : o(c, a)) - u, a - s),
            f = 1;
        for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0;) u in n ? n[s] = n[u] : delete n[s], s += f, u += f;
        return n
    }
}, function(t, e, n) {
    var r = n(14);
    r(r.G + r.W + r.F * !n(116).ABV, {
        DataView: n(161).DataView
    })
}, function(t, e, n) {
    var r, o;
    r = [n(1), n(8), n(26), n(52), n(49)], void 0 === (o = function() {
        "use strict";
        void 0 === (o = function() {
            function t(t, e, n) {
                return t.replace(new RegExp("([?&]" + e + "(?=[=&#]|$)[^#&]*|(?=#|$))"), "&" + e + "=" + encodeURIComponent(n)).replace(/^([^?&]+)&/, "$1?")
            }
            return {
                setParam: t,
                setQueryParams: function(e, n) {
                    if (null === e || void 0 === e || "" === e) return e;
                    var r = e;
                    return Object.keys(n).forEach(function(e) {
                        r = t(r, e, n[e])
                    }), r
                }
            }
        }.call(e, n, e, t)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [n(49)], void 0 === (o = function() {
        "use strict";
        void 0 === (o = function() {
            return {
                escapeHtml: function(t) {
                    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\//g, "&#x2F;")
                }
            }
        }.call(e, n, e, t)) || (t.exports = o)
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    void 0 === (o = function() {
        "use strict";
        r = [n(42), n(83)], void 0 === (o = function(t, e) {
            var n = function() {
                var e = t.mscc;
                e && !e.hasConsent() && e.setConsent()
            };
            ! function() {
                for (var t = e.querySelectorAll("[data-dropdown-btnwrapper], [role='tab'], .tourBtn"), r = 0; r < t.length; r++) t[r].onclick = n
            }()
        }.apply(e, r)) || (t.exports = o)
    }.apply(e, r = [])) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(248)], void 0 === (o = function(t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0, t.init = e.init
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(30), n(249), n(251), n(2), n(252), n(181), n(341), n(342), n(11), n(12), n(126), n(156)], void 0 === (o = function(t, e, r, o, i, a, s, u, c) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var l = g(e),
            f = g(o),
            d = g(a),
            p = g(s),
            v = g(u),
            h = g(c);

        function g(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function y(t) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var m = "tabPanel",
            _ = "tabPanel",
            E = "skypeCarouselFeatures",
            S = "#skypeCarouselFeatures .colContent",
            b = "blog",
            O = "classRoom",
            T = "#blog",
            I = "".concat(T, " .arrowNext"),
            w = "".concat(T, " .arrowPrev");

        function A() {
            n.e(3).then(n.t.bind(null, 367, 7)).then(function(t) {
                new(0, t.default)(S, {
                    awaTracking: {
                        prev: "features-prev-arrow",
                        next: "features-next-arrow"
                    },
                    margin: 30,
                    overflow: "visible",
                    mainPadding: "0 60px",
                    breakpoints: {
                        1021: {
                            mainPadding: 0,
                            autoWidth: !0,
                            slideToShow: 2,
                            margin: 20
                        },
                        479: {
                            mainPadding: 0,
                            margin: 0,
                            autoWidth: !1,
                            slideToShow: 1,
                            overflow: "hidden",
                            endPadding: 0
                        }
                    }
                })
            })
        }

        function x() {
            var t = document.getElementsByClassName(_),
                e = (0, r.createOneTimeObserver)(function(t) {
                    var e = (0, v.default)() === u.IPAD,
                        r = l.default.get("motions.tabPanelMenu", !0);
                    n.e(5).then(n.t.bind(null, 366, 7)).then(function(n) {
                        for (var o = n.default, i = 0; i < t.length; i++) new o(t[i], e ? 2 : 0, o.TAB_DESKTOP_MODE_SAME_AS_MOBILE, !0, !0, r).registerNextTabButton(".tabPanel .arrowNext");
                        var a = new o(T, 0, o.TAB_DESKTOP_MODE_SAME_AS_MOBILE, !1);
                        a.registerNextTabButton(I), a.registerPreviousTabButton(w)
                    })
                }.bind(null, t)),
                o = document.getElementById(m),
                i = document.getElementById(O),
                a = document.getElementById(b);
            o && e.observe(o), a && e.observe(a), i && e.observe(i)
        }((0, i.isNullOrUndefined)(window.motionElements) || "object" !== y(window.motionElements)) && (window.motionElements = {}), t.init = function() {
            (0, h.default)(),
            function() {
                var t = $(S),
                    e = (0, s.isIE)() && (0, p.default)().version <= 9;
                t.length > 0 && !e && (0, r.createOneTimeObserver)(A).observe(document.getElementById(E))
            }(), x();
            var t = (0, s.isIE)() && (0, p.default)().version <= 9;
            (0, f.default)(l.default.get("fadeOnScroll.home")) && !t && (window.motionElements.fadeElements = new d.default({
                selectors: [".tabPanel", "#skypeCarouselFeatures", ".promo", ".supernova-column", ".heroSection ", "#featuresHome", ".sectionBlog"]
            }), window.motionElements.fadeElements.start())
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(164), n(62), n(1)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createOneTimeObserver = t.create = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(e);

        function o() {
            return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype
        }

        function i(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    hits: -1,
                    threshold: 0
                },
                a = i.hits,
                s = function() {
                    return (0, n.conditioned)(function() {
                        return 0 !== a
                    }, function() {
                        t(), a = (0, n.eitherConditioned)(function() {
                            return a > 0
                        }, function() {
                            return --a
                        }, function() {
                            return a
                        })
                    })
                };
            return (0, n.eitherConditioned)(o, function(t, e, r) {
                return new IntersectionObserver(function(r) {
                    return r.forEach(function(r) {
                        return (0, n.eitherConditioned)(function() {
                            return r.isIntersecting
                        }, function() {
                            return t(r.target)
                        }, function() {
                            return e(r.target)
                        })
                    })
                }, r)
            }.bind(null, s, e, {
                threshold: i.threshold
            }), function(t, e) {
                var n = [],
                    o = !1,
                    i = function() {
                        setTimeout(function() {
                            !1 === o && (o = !0, n.forEach(function(n) {
                                n.getBoundingClientRect().top <= window.innerHeight && n.getBoundingClientRect().bottom >= 0 ? t(n) : e(n)
                            })), o = !1
                        }, 200)
                    };
                i();
                var a = !!r.default.passiveeventlisteners && {
                    passive: !0
                };
                return window.addEventListener("scroll", i, a), window.addEventListener("resize", i, a), window.addEventListener("orientationchange", i), {
                    observe: function(t) {
                        n.push(t)
                    }
                }
            }.bind(null, s, e))
        }
        t.create = i, t.createOneTimeObserver = function(t) {
            return i(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, {
                hits: 1
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    (function(t) {
        var r, o;
        r = [t, n(11), n(12), n(28), n(29), n(49), n(52), n(6), n(63)], void 0 === (o = function(t) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            /*! modernizr 3.6.0 (Custom Build) | MIT *
             * https://modernizr.com/download/?-audio-backgroundsize-borderradius-canvas-cssanimations-csstransforms-csstransforms3d-csstransitions-input-passiveeventlisteners-smil-svg-video-domprefixes-prefixes-setclasses-shiv !*/
            ! function(n, r, o) {
                function i(t, n) {
                    return e(t) === n
                }

                function a(t, e) {
                    return !!~("" + t).indexOf(e)
                }

                function s() {
                    return "function" != typeof r.createElement ? r.createElement(arguments[0]) : b ? r.createElementNS.call(r, "http://www.w3.org/2000/svg", arguments[0]) : r.createElement.apply(r, arguments)
                }

                function u(t, e, n, o) {
                    var i, a, u, c, l = "modernizr",
                        f = s("div"),
                        d = function() {
                            var t = r.body;
                            return t || ((t = s(b ? "svg" : "body")).fake = !0), t
                        }();
                    if (parseInt(n, 10))
                        for (; n--;)(u = s("div")).id = o ? o[n] : l + (n + 1), f.appendChild(u);
                    return (i = s("style")).type = "text/css", i.id = "s" + l, (d.fake ? d : f).appendChild(i), d.appendChild(f), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(r.createTextNode(t)), f.id = l, d.fake && (d.style.background = "", d.style.overflow = "hidden", c = S.style.overflow, S.style.overflow = "hidden", S.appendChild(d)), a = e(f, t), d.fake ? (d.parentNode.removeChild(d), S.style.overflow = c, S.offsetHeight) : f.parentNode.removeChild(f), !!a
                }

                function c(t) {
                    return t.replace(/([A-Z])/g, function(t, e) {
                        return "-" + e.toLowerCase()
                    }).replace(/^ms-/, "-ms-")
                }

                function l(t, e, r) {
                    var o;
                    if ("getComputedStyle" in n) {
                        o = getComputedStyle.call(n, t, e);
                        var i = n.console;
                        if (null !== o) r && (o = o.getPropertyValue(r));
                        else if (i) {
                            i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        }
                    } else o = !e && t.currentStyle && t.currentStyle[r];
                    return o
                }

                function f(t, e) {
                    var r = t.length;
                    if ("CSS" in n && "supports" in n.CSS) {
                        for (; r--;)
                            if (n.CSS.supports(c(t[r]), e)) return !0;
                        return !1
                    }
                    if ("CSSSupportsRule" in n) {
                        for (var i = []; r--;) i.push("(" + c(t[r]) + ":" + e + ")");
                        return u("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function(t) {
                            return "absolute" == l(t, null, "position")
                        })
                    }
                    return o
                }

                function d(t) {
                    return t.replace(/([a-z])-([a-z])/g, function(t, e, n) {
                        return e + n.toUpperCase()
                    }).replace(/^-/, "")
                }

                function p(t, e, n, r) {
                    function u() {
                        l && (delete x.style, delete x.modElem)
                    }
                    if (r = !i(r, "undefined") && r, !i(n, "undefined")) {
                        var c = f(t, n);
                        if (!i(c, "undefined")) return c
                    }
                    for (var l, p, v, h, g, y = ["modernizr", "tspan", "samp"]; !x.style && y.length;) l = !0, x.modElem = s(y.shift()), x.style = x.modElem.style;
                    for (v = t.length, p = 0; v > p; p++)
                        if (h = t[p], g = x.style[h], a(h, "-") && (h = d(h)), x.style[h] !== o) {
                            if (r || i(n, "undefined")) return u(), "pfx" != e || h;
                            try {
                                x.style[h] = n
                            } catch (t) {}
                            if (x.style[h] != g) return u(), "pfx" != e || h
                        }
                    return u(), !1
                }

                function v(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function h(t, e, n, r, o) {
                    var a = t.charAt(0).toUpperCase() + t.slice(1),
                        s = (t + " " + w.join(a + " ") + a).split(" ");
                    return i(e, "string") || i(e, "undefined") ? p(s, e, r, o) : function(t, e, n) {
                        var r;
                        for (var o in t)
                            if (t[o] in e) return !1 === n ? t[o] : i(r = e[t[o]], "function") ? v(r, n || e) : r;
                        return !1
                    }(s = (t + " " + T.join(a + " ") + a).split(" "), e, n)
                }

                function g(t, e, n) {
                    return h(t, o, o, e, n)
                }
                var y = [],
                    m = {
                        _version: "3.6.0",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(t, e) {
                            var n = this;
                            setTimeout(function() {
                                e(n[t])
                            }, 0)
                        },
                        addTest: function(t, e, n) {
                            y.push({
                                name: t,
                                fn: e,
                                options: n
                            })
                        },
                        addAsyncTest: function(t) {
                            y.push({
                                name: null,
                                fn: t
                            })
                        }
                    },
                    _ = function() {};
                _.prototype = m, _ = new _;
                var E = [],
                    S = r.documentElement,
                    b = "svg" === S.nodeName.toLowerCase(),
                    O = "Moz O ms Webkit",
                    T = m._config.usePrefixes ? O.toLowerCase().split(" ") : [];
                m._domPrefixes = T;
                var I = m._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
                m._prefixes = I, b || function(n, r) {
                    function o() {
                        var t = y.elements;
                        return "string" == typeof t ? t.split(" ") : t
                    }

                    function i(t) {
                        var e = g[t[v]];
                        return e || (e = {}, h++, t[v] = h, g[h] = e), e
                    }

                    function a(t, e, n) {
                        return e || (e = r), l ? e.createElement(t) : (n || (n = i(e)), !(o = n.cache[t] ? n.cache[t].cloneNode() : p.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || d.test(t) || o.tagUrn ? o : n.frag.appendChild(o));
                        var o
                    }

                    function s(t, e) {
                        e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                            return y.shivMethods ? a(n, t, e) : e.createElem(n)
                        }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/[\w\-:]+/g, function(t) {
                            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                        }) + ");return n}")(y, e.frag)
                    }

                    function u(t) {
                        t || (t = r);
                        var e = i(t);
                        return !y.shivCSS || c || e.hasCSS || (e.hasCSS = !! function(t, e) {
                            var n = t.createElement("p"),
                                r = t.getElementsByTagName("head")[0] || t.documentElement;
                            return n.innerHTML = "x<style>" + e + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                        }(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || s(t, e), t
                    }
                    var c, l, f = n.html5 || {},
                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        v = "_html5shiv",
                        h = 0,
                        g = {};
                    ! function() {
                        try {
                            var t = r.createElement("a");
                            t.innerHTML = "<xyz></xyz>", c = "hidden" in t, l = 1 == t.childNodes.length || function() {
                                r.createElement("a");
                                var t = r.createDocumentFragment();
                                return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                            }()
                        } catch (t) {
                            c = !0, l = !0
                        }
                    }();
                    var y = {
                        elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                        version: "3.7.3",
                        shivCSS: !1 !== f.shivCSS,
                        supportsUnknownElements: l,
                        shivMethods: !1 !== f.shivMethods,
                        type: "default",
                        shivDocument: u,
                        createElement: a,
                        createDocumentFragment: function(t, e) {
                            if (t || (t = r), l) return t.createDocumentFragment();
                            for (var n = (e = e || i(t)).frag.cloneNode(), a = 0, s = o(), u = s.length; u > a; a++) n.createElement(s[a]);
                            return n
                        },
                        addElements: function(t, e) {
                            var n = y.elements;
                            "string" != typeof n && (n = n.join(" ")), "string" != typeof t && (t = t.join(" ")), y.elements = n + " " + t, u(e)
                        }
                    };
                    n.html5 = y, u(r), "object" == e(t) && t.exports && (t.exports = y)
                }(void 0 !== n ? n : this, r), _.addTest("passiveeventlisteners", function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        n.addEventListener("test", null, e)
                    } catch (t) {}
                    return t
                });
                var w = m._config.usePrefixes ? O.split(" ") : [];
                m._cssomPrefixes = w;
                var A = {
                    elem: s("modernizr")
                };
                _._q.push(function() {
                    delete A.elem
                });
                var x = {
                    style: A.elem.style
                };
                _._q.unshift(function() {
                    delete x.style
                }), m.testAllProps = h, m.testAllProps = g, _.addTest("csstransforms", function() {
                    return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0)
                });
                var N = "CSS" in n && "supports" in n.CSS,
                    R = "supportsCSS" in n;
                _.addTest("supports", N || R), _.addTest("csstransforms3d", function() {
                    return !!g("perspective", "1px", !0)
                }), _.addTest("backgroundsize", g("backgroundSize", "100%", !0)), _.addTest("borderradius", g("borderRadius", "0px", !0)), _.addTest("cssanimations", g("animationName", "a", !0)), _.addTest("csstransitions", g("transition", "all", !0)), _.addTest("canvas", function() {
                    var t = s("canvas");
                    return !(!t.getContext || !t.getContext("2d"))
                }), _.addTest("audio", function() {
                    var t = s("audio"),
                        e = !1;
                    try {
                        (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), e.opus = t.canPlayType('audio/ogg; codecs="opus"') || t.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                    } catch (t) {}
                    return e
                }), _.addTest("video", function() {
                    var t = s("video"),
                        e = !1;
                    try {
                        (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
                    } catch (t) {}
                    return e
                }), _.addTest("svg", !!r.createElementNS && !!r.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
                var P = {}.toString;
                _.addTest("smil", function() {
                    return !!r.createElementNS && /SVGAnimate/.test(P.call(r.createElementNS("http://www.w3.org/2000/svg", "animate")))
                });
                var C = s("input"),
                    D = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
                    k = {};
                _.input = function(t) {
                        for (var e = 0, r = t.length; r > e; e++) k[t[e]] = !!(t[e] in C);
                        return k.list && (k.list = !(!s("datalist") || !n.HTMLDataListElement)), k
                    }(D),
                    function() {
                        var t, e, n, r, o, a;
                        for (var s in y)
                            if (y.hasOwnProperty(s)) {
                                if (t = [], (e = y[s]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                                    for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                                for (r = i(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) 1 === (a = t[o].split(".")).length ? _[a[0]] = r : (!_[a[0]] || _[a[0]] instanceof Boolean || (_[a[0]] = new Boolean(_[a[0]])), _[a[0]][a[1]] = r), E.push((r ? "" : "no-") + a.join("-"))
                            }
                    }(),
                    function(t) {
                        var e = S.className,
                            n = _._config.classPrefix || "";
                        if (b && (e = e.baseVal), _._config.enableJSClass) {
                            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                            e = e.replace(r, "$1" + n + "js$2")
                        }
                        _._config.enableClasses && (e += " " + n + t.join(" " + n), b ? S.className.baseVal = e : S.className = e)
                    }(E), delete m.addTest, delete m.addAsyncTest;
                for (var L = 0; L < _._q.length; L++) _._q[L]();
                n.Modernizr = _
            }(window, document)
        }.apply(e, r)) || (t.exports = o)
    }).call(this, n(117)(t))
}, function(t, e, n) {
    var r, o;
    r = [e, n(28), n(29)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.toBoolean = void 0;
        var e = function(t, e) {
                return e.some(function(e) {
                    return t.toString().toLowerCase() == e
                }) || !1
            },
            n = function(t) {
                if ("boolean" == typeof t) return t;
                return ("string" == typeof t || "number" == typeof t) && (!!e(t, ["true", "1"]) || (e(t, ["false", "0"]), !1))
            };
        t.default = n, t.toBoolean = n
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(164), n(253), n(38), n(55), n(28), n(29), n(11), n(12), n(1)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.create = t.default = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(e);

        function o(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var a = ".jsScrollFade",
            s = .5,
            u = 35,
            c = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.selectors,
                        r = void 0 === n ? [] : n,
                        i = e.minValue,
                        c = void 0 === i ? s : i,
                        l = e.threshold,
                        f = void 0 === l ? u : l;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.selectors = [a].concat(o(r)), this.minValue = c, this.threshold = f, this.enable = !0
                }
                return function(t, e, n) {
                    e && i(t.prototype, e), n && i(t, n)
                }(t, [{
                    key: "addCSS",
                    value: function() {
                        this.selectors.forEach(function(t) {
                            [].slice.call(document.querySelectorAll(t)).forEach(function(t) {
                                t.style.willChange = "opacity", t.style.transition = "opacity 0.3s ease 0s"
                            })
                        })
                    }
                }, {
                    key: "whenWillStartFade",
                    value: function(t) {
                        return this.threshold / 100 * t
                    }
                }, {
                    key: "setMinValue",
                    value: function(t) {
                        return t > this.minValue ? t : this.minValue
                    }
                }, {
                    key: "onScroll",
                    value: function() {
                        var t = this,
                            e = $(window).scrollTop();
                        this.selectors.forEach(function(n) {
                            return $(n).each(function(n, r) {
                                var o = $(r).height(),
                                    i = t.whenWillStartFade(o),
                                    a = $(r).offset().top + i,
                                    s = (o - e + a) / o,
                                    u = t.setMinValue(s);
                                t.enable && ("opacity" !== $(r).css("will-change") && $(r).css({
                                    willChange: "opacity",
                                    transition: "opacity 0.3s ease 0s"
                                }), $(r).css({
                                    opacity: u
                                }))
                            })
                        })
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.enable = !1
                    }
                }, {
                    key: "start",
                    value: function() {
                        var t = this,
                            e = !!r.default.passiveeventlisteners && {
                                passive: !0
                            };
                        this.addCSS(), window.addEventListener("scroll", function() {
                            (0, n.optimizeScrolling)(function() {
                                return requestAnimationFrame(function() {
                                    return t.onScroll()
                                })
                            })
                        }, e)
                    }
                }]), t
            }();
        t.default = c, t.create = c
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(254), n(1)], void 0 === (o = function(t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clonedNodes = t.nodeListMap = t.nodeListIterate = t.optimizeScrolling = void 0;
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(e);
        t.optimizeScrolling = function(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
            window.onscroll = function() {
                e && window.clearTimeout(e), e = window.setTimeout(function() {
                    t()
                }, n)
            }
        }, t.nodeListIterate = function(t, e) {
            if (e && "function" == typeof e.forEach) e.forEach(t);
            else
                for (var n = 0; n < e.length; n++) t(e[n], n)
        }, t.nodeListMap = function(t, e) {
            return (0, n.default)(e, t)
        }, t.clonedNodes = function(t) {
            return (0, n.default)(t, function(t) {
                return t.cloneNode(!0)
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(165),
        o = n(255),
        i = n(335),
        a = n(33);
    t.exports = function(t, e) {
        return (a(t) ? r : i)(t, o(e, 3))
    }
}, function(t, e, n) {
    var r = n(256),
        o = n(321),
        i = n(331),
        a = n(33),
        s = n(332);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : r(t) : s(t)
    }
}, function(t, e, n) {
    var r = n(257),
        o = n(320),
        i = n(178);
    t.exports = function(t) {
        var e = o(t);
        return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
}, function(t, e, n) {
    var r = n(166),
        o = n(171),
        i = 1,
        a = 2;
    t.exports = function(t, e, n, s) {
        var u = n.length,
            c = u,
            l = !s;
        if (null == t) return !c;
        for (t = Object(t); u--;) {
            var f = n[u];
            if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
        }
        for (; ++u < c;) {
            var d = (f = n[u])[0],
                p = t[d],
                v = f[1];
            if (l && f[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (s) var g = s(p, v, d, t, e, h);
                if (!(void 0 === g ? o(v, p, i | a, s, h) : g)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(86),
        o = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(86);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(86);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(86);
    t.exports = function(t, e) {
        var n = this.__data__,
            o = r(n, t);
        return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
    }
}, function(t, e, n) {
    var r = n(85);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(85),
        o = n(118),
        i = n(120),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var s = n.__data__;
            if (!o || s.length < a - 1) return s.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new i(s)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(168),
        o = n(272),
        i = n(119),
        a = n(170),
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        l = u.toString,
        f = c.hasOwnProperty,
        d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!i(t) || o(t)) && (r(t) ? d : s).test(a(t))
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(87),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = i.call(t, s),
            n = t[s];
        try {
            t[s] = void 0;
            var r = !0
        } catch (t) {}
        var o = a.call(t);
        return r && (e ? t[s] = n : delete t[s]), o
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r = n(273),
        o = function() {
            var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = function(t) {
        return !!o && o in t
    }
}, function(t, e, n) {
    var r = n(32)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, n) {
    var r = n(276),
        o = n(85),
        i = n(118);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(i || o),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(277),
        o = n(278),
        i = n(279),
        a = n(280),
        s = n(281);

    function u(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, t.exports = u
}, function(t, e, n) {
    var r = n(88);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(88),
        o = "__lodash_hash_undefined__",
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === o ? void 0 : n
        }
        return i.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(88),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t)
    }
}, function(t, e, n) {
    var r = n(88),
        o = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? o : e, this
    }
}, function(t, e, n) {
    var r = n(89);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(89);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(89);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(89);
    t.exports = function(t, e) {
        var n = r(this, t),
            o = n.size;
        return n.set(t, e), this.size += n.size == o ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(166),
        o = n(172),
        i = n(293),
        a = n(297),
        s = n(315),
        u = n(33),
        c = n(174),
        l = n(176),
        f = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, g, y, m) {
        var _ = u(t),
            E = u(e),
            S = _ ? p : s(t),
            b = E ? p : s(e),
            O = (S = S == d ? v : S) == v,
            T = (b = b == d ? v : b) == v,
            I = S == b;
        if (I && c(t)) {
            if (!c(e)) return !1;
            _ = !0, O = !1
        }
        if (I && !O) return m || (m = new r), _ || l(t) ? o(t, e, n, g, y, m) : i(t, e, S, n, g, y, m);
        if (!(n & f)) {
            var w = O && h.call(t, "__wrapped__"),
                A = T && h.call(e, "__wrapped__");
            if (w || A) {
                var x = w ? t.value() : t,
                    N = A ? e.value() : e;
                return m || (m = new r), y(x, N, n, g, m)
            }
        }
        return !!I && (m || (m = new r), a(t, e, n, g, y, m))
    }
}, function(t, e, n) {
    var r = n(120),
        o = n(289),
        i = n(290);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = o, a.prototype.has = i, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) {
        return this.__data__.set(t, n), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, n) {
    var r = n(87),
        o = n(294),
        i = n(167),
        a = n(172),
        s = n(295),
        u = n(296),
        c = 1,
        l = 2,
        f = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        g = "[object RegExp]",
        y = "[object Set]",
        m = "[object String]",
        _ = "[object Symbol]",
        E = "[object ArrayBuffer]",
        S = "[object DataView]",
        b = r ? r.prototype : void 0,
        O = b ? b.valueOf : void 0;
    t.exports = function(t, e, n, r, b, T, I) {
        switch (n) {
            case S:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case E:
                return !(t.byteLength != e.byteLength || !T(new o(t), new o(e)));
            case f:
            case d:
            case h:
                return i(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case g:
            case m:
                return t == e + "";
            case v:
                var w = s;
            case y:
                var A = r & c;
                if (w || (w = u), t.size != e.size && !A) return !1;
                var x = I.get(t);
                if (x) return x == e;
                r |= l, I.set(t, e);
                var N = a(w(t), w(e), r, b, T, I);
                return I.delete(t), N;
            case _:
                if (O) return O.call(t) == O.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(32).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
}, function(t, e, n) {
    var r = n(298),
        o = 1,
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, s, u) {
        var c = n & o,
            l = r(t),
            f = l.length;
        if (f != r(e).length && !c) return !1;
        for (var d = f; d--;) {
            var p = l[d];
            if (!(c ? p in e : i.call(e, p))) return !1
        }
        var v = u.get(t);
        if (v && u.get(e)) return v == e;
        var h = !0;
        u.set(t, e), u.set(e, t);
        for (var g = c; ++d < f;) {
            var y = t[p = l[d]],
                m = e[p];
            if (a) var _ = c ? a(m, y, p, e, t, u) : a(y, m, p, t, e, u);
            if (!(void 0 === _ ? y === m || s(y, m, n, a, u) : _)) {
                h = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (h && !g) {
            var E = t.constructor,
                S = e.constructor;
            E != S && "constructor" in t && "constructor" in e && !("function" == typeof E && E instanceof E && "function" == typeof S && S instanceof S) && (h = !1)
        }
        return u.delete(t), u.delete(e), h
    }
}, function(t, e, n) {
    var r = n(299),
        o = n(301),
        i = n(121);
    t.exports = function(t) {
        return r(t, i, o)
    }
}, function(t, e, n) {
    var r = n(300),
        o = n(33);
    t.exports = function(t, e, n) {
        var i = e(t);
        return o(t) ? i : r(i, n(t))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
        return t
    }
}, function(t, e, n) {
    var r = n(302),
        o = n(303),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        s = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return i.call(t, e)
            }))
        } : o;
    t.exports = s
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (i[o++] = a)
        }
        return i
    }
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, n) {
    var r = n(305),
        o = n(173),
        i = n(33),
        a = n(174),
        s = n(175),
        u = n(176),
        c = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = i(t),
            l = !n && o(t),
            f = !n && !l && a(t),
            d = !n && !l && !f && u(t),
            p = n || l || f || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var g in t) !e && !c.call(t, g) || p && ("length" == g || f && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, h)) || v.push(g);
        return v
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(68),
        o = n(69),
        i = "[object Arguments]";
    t.exports = function(t) {
        return o(t) && r(t) == i
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, n) {
    var r = n(68),
        o = n(122),
        i = n(69),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return i(t) && o(t.length) && !!a[r(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(169),
            o = e && !e.nodeType && e,
            i = o && "object" == typeof t && t && !t.nodeType && t,
            a = i && i.exports === o && r.process,
            s = function() {
                try {
                    var t = i && i.require && i.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = s
    }).call(this, n(117)(t))
}, function(t, e, n) {
    var r = n(312),
        o = n(313),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = [];
        for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    var r = n(314)(Object.keys, Object);
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(316),
        o = n(118),
        i = n(317),
        a = n(318),
        s = n(319),
        u = n(68),
        c = n(170),
        l = c(r),
        f = c(o),
        d = c(i),
        p = c(a),
        v = c(s),
        h = u;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || o && "[object Map]" != h(new o) || i && "[object Promise]" != h(i.resolve()) || a && "[object Set]" != h(new a) || s && "[object WeakMap]" != h(new s)) && (h = function(t) {
        var e = u(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? c(n) : "";
        if (r) switch (r) {
            case l:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(56)(n(32), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(56)(n(32), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(56)(n(32), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(56)(n(32), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(177),
        o = n(121);
    t.exports = function(t) {
        for (var e = o(t), n = e.length; n--;) {
            var i = e[n],
                a = t[i];
            e[n] = [i, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(171),
        o = n(322),
        i = n(328),
        a = n(124),
        s = n(177),
        u = n(178),
        c = n(90),
        l = 1,
        f = 2;
    t.exports = function(t, e) {
        return a(t) && s(e) ? u(c(t), e) : function(n) {
            var a = o(n, t);
            return void 0 === a && a === e ? i(n, t) : r(e, a, l | f)
        }
    }
}, function(t, e, n) {
    var r = n(179);
    t.exports = function(t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o
    }
}, function(t, e, n) {
    var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        i = n(324)(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, function(t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = i
}, function(t, e, n) {
    var r = n(325),
        o = 500;
    t.exports = function(t) {
        var e = r(t, function(t) {
                return n.size === o && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(120),
        o = "Expected a function";

    function i(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
        var n = function() {
            var r = arguments,
                o = e ? e.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return n.cache = i.set(o, a) || i, a
        };
        return n.cache = new(i.Cache || r), n
    }
    i.Cache = r, t.exports = i
}, function(t, e, n) {
    var r = n(327);
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
}, function(t, e, n) {
    var r = n(87),
        o = n(165),
        i = n(33),
        a = n(125),
        s = 1 / 0,
        u = r ? r.prototype : void 0,
        c = u ? u.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return c ? c.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -s ? "-0" : n
    }
}, function(t, e, n) {
    var r = n(329),
        o = n(330);
    t.exports = function(t, e) {
        return null != t && o(t, e, r)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, n) {
    var r = n(180),
        o = n(173),
        i = n(33),
        a = n(175),
        s = n(122),
        u = n(90);
    t.exports = function(t, e, n) {
        for (var c = -1, l = (e = r(e, t)).length, f = !1; ++c < l;) {
            var d = u(e[c]);
            if (!(f = null != t && n(t, d))) break;
            t = t[d]
        }
        return f || ++c != l ? f : !!(l = null == t ? 0 : t.length) && s(l) && a(d, l) && (i(t) || o(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    var r = n(333),
        o = n(334),
        i = n(124),
        a = n(90);
    t.exports = function(t) {
        return i(t) ? r(a(t)) : o(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(t, e, n) {
    var r = n(179);
    t.exports = function(t) {
        return function(e) {
            return r(e, t)
        }
    }
}, function(t, e, n) {
    var r = n(336),
        o = n(123);
    t.exports = function(t, e) {
        var n = -1,
            i = o(t) ? Array(t.length) : [];
        return r(t, function(t, r, o) {
            i[++n] = e(t, r, o)
        }), i
    }
}, function(t, e, n) {
    var r = n(337),
        o = n(340)(r);
    t.exports = o
}, function(t, e, n) {
    var r = n(338),
        o = n(121);
    t.exports = function(t, e) {
        return t && r(t, e, o)
    }
}, function(t, e, n) {
    var r = n(339)();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var o = -1, i = Object(e), a = r(e), s = a.length; s--;) {
                var u = a[t ? s : ++o];
                if (!1 === n(i[u], u, i)) break
            }
            return e
        }
    }
}, function(t, e, n) {
    var r = n(123);
    t.exports = function(t, e) {
        return function(n, o) {
            if (null == n) return n;
            if (!r(n)) return t(n, o);
            for (var i = n.length, a = e ? i : -1, s = Object(n);
                (e ? a-- : ++a < i) && !1 !== o(s[a], a, s););
            return n
        }
    }
}, function(t, e, n) {
    var r, o;
    r = [e, n(41)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IPOD = t.IPAD = t.IPHONE = void 0;
        var e = "iphone",
            n = "ipad",
            r = "ipod";
        t.default = function() {
            var t = navigator.userAgent;
            return t.match(/iphone/i) ? e : t.match(/ipad/i) ? n : t.match(/ipod/i) ? r : void 0
        }, t.IPHONE = e, t.IPAD = n, t.IPOD = r
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(114), n(181), n(2), n(30), n(95), n(10), n(63), n(6)], void 0 === (o = function(t, e, n, r, o, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                        }
                return e.default = t, e
            }(e),
            s = l(n),
            u = l(o),
            c = l(i);

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = (0, s.default)(),
            d = c.default.getPlatform(),
            p = [c.default.ANDROID, c.default.IOS].some(function(t) {
                return t === d
            }),
            v = c.default.getWindowsSpecificPlatform(),
            h = c.default.getLinuxSpecificPlatform(),
            g = c.default.getIosPlatform(),
            y = "[data-dropdown-start]",
            m = "[data-dropdown-btnwrapper]",
            _ = "[data-dropdown-all-content]",
            E = "[data-dropdown-button]",
            S = "[data-dropdown-icon]",
            b = "[data-dropdown-content]",
            O = "[data-dropdown-all-content]",
            T = "os",
            I = "id",
            w = "order",
            A = "browser",
            x = "downloadOS",
            N = "os",
            R = "loaded";

        function P(t) {
            return !(!(0, r.isNullOrUndefined)(t.browser) && 0 !== t.browser.length) || t.browser.some(function(t) {
                return t.name.toLowerCase() === f.browser.toLowerCase() && function(t, e) {
                    return !(!(0, r.isNullOrUndefined)(t) && !(0, r.isNullOrUndefined)(e)) || t >= e
                }(f.version, t.minVersion) && function(t, e) {
                    return !(!(0, r.isNullOrUndefined)(t) && !(0, r.isNullOrUndefined)(e)) || t <= e
                }(f.version, t.maxVersion)
            })
        }

        function C(t, e) {
            var n = t.order.some(function(t) {
                    return t === d
                }),
                r = e.order.some(function(t) {
                    return t === d
                });
            return n || r ? n ? -1 : 1 : 0
        }

        function D(t, e) {
            if (d === c.default.LINUX || d === c.default.IOS) {
                var n = t.order.some(function(t) {
                        return t === h || t === g
                    }),
                    r = e.order.some(function(t) {
                        return t === h || t === g
                    });
                return n || r ? n && r ? 0 : n ? -1 : 1 : C(t, e)
            }
            return C(t, e)
        }

        function k(t) {
            return t.find(_).children().map(function() {
                var t = $(this);
                return {
                    id: t.data(I),
                    browser: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return (0, r.isNullOrUndefinedOrEmpty)(t) ? [] : t.split(" ").map(function(t) {
                            var e = t.split(":");
                            return {
                                name: e[0],
                                minVersion: e[1],
                                maxVersion: e[2]
                            }
                        })
                    }(t.data(A)),
                    os: function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ")
                    }(t.data(T)),
                    order: function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ")
                    }(t.data(w)),
                    value: t.val(),
                    text: t.text()
                }
            }).get()
        }

        function L(t) {
            var e = k(t) || [],
                n = e.some(function(t) {
                    return t.os.some(function(t) {
                        return t.toLowerCase() === v.toLowerCase()
                    })
                }) && d === c.default.WINDOWS,
                r = e.some(function(t) {
                    return t.os.some(function(t) {
                        return t.toLowerCase() === d.toLowerCase()
                    })
                });
            return e.filter(function(t) {
                return P(t) && function(t, e, n) {
                    var r = !0;
                    return e && (r = t.os.some(function(t) {
                        return t.toLowerCase() === v.toLowerCase()
                    })), n && (r = t.os.some(function(t) {
                        return t.toLowerCase() === d.toLowerCase()
                    })), r
                }(t, n, !n && r)
            }).sort(D)
        }

        function M(t, e) {
            var n = L(t);
            return function(t, e) {
                t.find($(b)).append(e)
            }(t, function(t, e) {
                return e.map(function(e, n) {
                    var r = $('<a data-bi-bhvr="DOWNLOAD"></a>').attr("href", e.value).attr("class", x + " " + e.os.join(" ")).attr("data-bi-id", e.id).attr("data-bi-name", e.id).attr("data-bi-dlnm", e.id).attr("data-bi-dlid", e.id).text(e.text);
                    return $('<li role="option"></li>').attr("id", t + "_" + e.id).attr("class", N).attr("data-value", e.value).attr("data-index", n).append(r)
                })
            }(e, n)), n
        }

        function j() {
            var t = u.default.get("dropdown.promoteUrl");
            (0, r.isNullOrUndefinedOrEmpty)(t) || (window.location = t)
        }
        t.default = function() {
            $(y).each(function(t) {
                var e = $(this),
                    n = "get-skype-".concat(t);
                e.attr("id", n), M(e, n),
                    function(t) {
                        t.addClass(R)
                    }(e);
                var r = {
                        root: "#".concat(n).concat(y),
                        button: {
                            wrapper: m,
                            content: E,
                            toggle: S
                        },
                        list: {
                            root: b,
                            item: "li"
                        },
                        source: {
                            root: O,
                            item: "option"
                        }
                    },
                    o = a.create(r, {
                        selectedItem: {
                            index: 0
                        }
                    });
                o.render(), o.on(a.Events.SelectionChanged, function(t) {
                    p || window.addEventListener("blur", j),
                        function(t) {
                            window.location.href = t.value
                        }(t)
                })
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(34), n(35), n(344), n(346), n(347), n(48), n(5), n(55), n(28), n(29), n(11), n(12), n(64), n(79), n(348), n(16), n(1), n(8), n(38)], void 0 === (o = function(t, e, n, r, o, i, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = v(e),
            c = v(r),
            l = v(o),
            f = v(i),
            d = v(a),
            p = v(s);

        function v(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function h(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function g(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function y(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var m = "userServices",
            _ = function(t, e) {
                return function(n) {
                    return e(n).then(function(e) {
                        return y({}, t, e)
                    }).catch(function(e) {
                        return y({}, t, e)
                    })
                }
            },
            E = function(t) {
                var e = t.calling,
                    n = t.credit;
                return {
                    calling: e && e.length > 0,
                    credit: n && n.length > 0
                }
            },
            S = function(t) {
                return Object.entries(t).filter(function(t) {
                    return function(t) {
                        return Array.isArray(t)
                    }(g(t, 2)[1])
                }).reduce(function(t, e) {
                    var n = g(e, 2),
                        r = n[0],
                        o = n[1];
                    return t[r] = o, t
                }, {})
            },
            b = function(t) {
                return Promise.resolve((t || []).reduce(function(t, e) {
                    return Object.assign({}, t, S(e))
                }, {}))
            },
            O = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function(t) {
                    return function(t) {
                        return Promise.all(t.map(function(t) {
                            return t.catch(function(t) {
                                return t
                            })
                        }))
                    }(function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return function(t) {
                            return e.map(function(e) {
                                return e(t)
                            })
                        }
                    }.apply(void 0, e)(t))
                }
            }(_("calling", l.default), _("credit", f.default)),
            T = function(t) {
                var e = Object.values(t).reduce(function(t, e) {
                    return [].concat(h(t), h(e))
                }, []);
                (0, n.storeData)(m, e)
            };
        t.default = function() {
            return new Promise(function(t) {
                return d.default.on(d.default.EVENTS.READY, function(e) {
                    return (0, p.default)(e, "fromCache") ? function(t) {
                        (0, u.default)((0, n.connect)(b), (0, n.connect)(O))(Promise.resolve((0, n.getData)(m))).then(function(e) {
                            return t(E(e))
                        }, function() {
                            return t(E({}))
                        })
                    }(t) : function(t, e) {
                        return (0, n.cleanStorage)(m), (0, u.default)((0, n.connect)(b), (0, n.connect)(O), (0, c.default)())(Promise.resolve(e)).then(function(e) {
                            T(e), t(E(e))
                        }, function() {
                            T({}), t(E({}))
                        })
                    }(t, e)
                })
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(30), n(345), n(5), n(34), n(70), n(35), n(31), n(16)], void 0 === (o = function(t, e, n, r, o, i, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = v(e),
            c = v(n),
            l = v(r),
            f = v(o),
            d = v(i),
            p = v(s);

        function v(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var h = u.default.get("api.services"),
            g = (0, d.default)(h),
            y = p.default.create("userServices"),
            m = function(t) {
                return !t || t.length < 0 ? [] : t
            };

        function _(t, e, n) {
            var r = [];
            try {
                r = JSON.parse(n.response)
            } catch (t) {
                e({
                    text: "Response parse error"
                })
            }
            if (200 === n.status) {
                var o = function(t) {
                    return t && Array.isArray(t) ? (t || []).filter(function(t) {
                        return t.active
                    }) : []
                }(m(r));
                o.length > 0 ? t(o) : e({
                    text: a.consts.NO_DATA
                })
            } else e((0, l.default)(r, "status") || {})
        }

        function E(t) {
            var e = (0, c.default)(h, t.skypeId);
            return new Promise(function(n, r) {
                var o = new XMLHttpRequest;
                o.addEventListener("load", function() {
                    _(n, r, this)
                }), o.addEventListener("error", function() {
                    ! function(t, e) {
                        t({
                            code: e.status
                        })
                    }(r, this)
                }), o.open("GET", e), o.setRequestHeader("X-Skypetoken", t.skypetoken), o.setRequestHeader("Accept", "application/json; ver=3.0"), o.send()
            })
        }
        t.default = function() {
            return (0, f.default)((0, a.switchToHappyIf)(function(t) {
                return (0, l.default)(t, "text") === a.consts.NO_DATA
            }, (0, f.default)((0, a.connect)((0, a.successLogApi)(g, y), (0, a.failLogApi)(g, y)), (0, a.connectStopWatchLap)(y))), (0, a.connect)(E), (0, a.connectStopWatchStart)(y))
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(49)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatString = void 0;
        var e = function(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return (t || "").replace(/\{([0-9]+)\}/g, function(t, e) {
                return n[e]
            })
        };
        t.formatString = e, t.default = e
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(16)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = function(t) {
            return t && -1 !== ["plan", "package", "minute_plan"].indexOf(t.service)
        };
        t.default = function(t) {
            var n = (t || []).filter(e);
            return n.length > 0 ? Promise.resolve(n) : Promise.reject({
                text: "No subscriptions"
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(16)], void 0 === (o = function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = function(t) {
            return t && "pstn" === t.service
        };
        t.default = function(t) {
            var n = (t || []).filter(e);
            return n.length > 0 ? Promise.resolve(n) : Promise.reject({
                text: "No credit"
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r = n(14),
        o = n(154)(!0);
    r(r.S, "Object", {
        entries: function(t) {
            return o(t)
        }
    })
}, function(t, e, n) {
    var r, o;
    r = [e, n(35), n(350), n(34), n(48), n(5), n(16)], void 0 === (o = function(t, e, n, r, o, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = l(n),
            s = l(r),
            u = l(o),
            c = l(i);

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = "callerId",
            d = function(t) {
                return function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }({}, f, t)
            };
        t.default = function() {
            return new Promise(function(t) {
                u.default.on(u.default.EVENTS.READY, function(r) {
                    (0, c.default)(r, "fromCache") ? function(t) {
                        t(d((0, n.hasData)((0, e.getData)(f))))
                    }(t) : function(t, n) {
                        (0, e.cleanStorage)(f), (0, s.default)((0, a.default)())(Promise.resolve(n)).then(function(n) {
                            (0, e.storeData)(f, n), t(d(!0))
                        }, function() {
                            (0, e.storeData)(f, {}), t(d(!1))
                        })
                    }(t, r)
                })
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(30), n(2), n(34), n(35), n(70), n(31), n(16), n(1), n(8), n(26)], void 0 === (o = function(t, e, n, r, o, i, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasData = void 0;
        var u = p(e),
            c = p(n),
            l = p(o),
            f = p(a),
            d = p(s);

        function p(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var v = c.default.get("api.callerId"),
            h = (0, f.default)(v),
            g = d.default.create("callerId");
        var y = function(t) {
            return function(t) {
                return t && function(t) {
                    return t && "active" === t.status
                }(t) ? t : {}
            }((0, u.default)(function(t) {
                if (t && !(0, r.isNullOrUndefined)(t.pstn)) return (0, r.isNullOrUndefined)(t.sms) ? t : t.sms.number === (0, u.default)(t, "pstn", "number") ? t : void 0
            }(t), "pstn"))
        };
        var m = function(t) {
            return Object.keys(t).length > 0
        };

        function _(t) {
            return new Promise(function(e, n) {
                var r = new XMLHttpRequest;
                r.addEventListener("load", function() {
                    ! function(t, e, n) {
                        var r = [];
                        try {
                            r = JSON.parse(n.response)
                        } catch (t) {
                            e({
                                text: "Response parse error"
                            })
                        }
                        if (200 === n.status) {
                            var o = y(r || {});
                            m(o) ? t(o) : e({
                                text: i.consts.NO_DATA
                            })
                        } else e((0, u.default)(r, "status") || {})
                    }(e, n, this)
                }), r.addEventListener("error", function() {
                    ! function(t, e) {
                        t({
                            code: e.status
                        })
                    }(n, this)
                }), r.open("GET", v), r.setRequestHeader("X-Skypetoken", t.skypetoken), r.setRequestHeader("X-Stratus-Caller", "skype.com"), r.setRequestHeader("X-Skype-Request-Id", "scom.".concat((new Date).getTime())), r.setRequestHeader("Accept", "application/json"), r.send()
            })
        }
        t.default = function() {
            return (0, l.default)((0, i.switchToHappyIf)(function(t) {
                return (0, u.default)(t, "text") === i.consts.NO_DATA
            }, (0, l.default)((0, i.connect)((0, i.successLogApi)(h, g), (0, i.failLogApi)(h, g)), (0, i.connectStopWatchLap)(g))), (0, i.connect)(_), (0, i.connectStopWatchStart)(g))
        }, t.hasData = m
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(35), n(352), n(48), n(34), n(16)], void 0 === (o = function(t, e, n, r, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = u(n),
            a = u(r),
            s = u(o);

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = "managerMembership",
            l = function(t) {
                return function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }({}, c, t)
            };
        t.default = function() {
            return new Promise(function(t) {
                a.default.on(a.default.EVENTS.READY, function(n) {
                    var r = n.skypetoken;
                    n.fromCache ? (0, e.getData)(c) : function(t, n) {
                        (0, e.cleanStorage)(c), (0, s.default)((0, i.default)())(Promise.resolve(n)).then(function(n) {
                            (0, e.storeData)(c, n), t(l(!0))
                        }, function() {
                            (0, e.storeData)(c, []), t(l(!1))
                        })
                    }(t, r)
                })
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(30), n(34), n(35), n(70), n(31), n(16)], void 0 === (o = function(t, e, n, r, o, i, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasData = void 0;
        var s = d(e),
            u = d(n),
            c = d(r),
            l = d(i),
            f = d(a);

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = u.default.get("api.userData"),
            v = (0, l.default)(p),
            h = f.default.create("managerMembership"),
            g = function(t) {
                return (0, s.default)(t, "roles")
            };
        var y = function(t) {
            return (t || []).length > 0
        };

        function m(t) {
            return new Promise(function(e, n) {
                var r = new XMLHttpRequest;
                r.addEventListener("load", function() {
                    ! function(t, e, n) {
                        var r = [];
                        try {
                            r = JSON.parse(n.response)
                        } catch (t) {
                            e({
                                text: "Response parse error"
                            })
                        }
                        if (200 === n.status) {
                            var i = g(r);
                            y(i) ? t(i) : e({
                                text: o.consts.NO_DATA
                            })
                        } else e((0, s.default)(r, "status") || {})
                    }(e, n, this)
                }), r.addEventListener("error", function() {
                    ! function(t, e) {
                        t({
                            code: e.status
                        })
                    }(n, this)
                }), r.open("GET", p), r.setRequestHeader("X-Skypetoken", t), r.setRequestHeader("X-Stratus-Caller", "skype.com"), r.setRequestHeader("X-Skype-Request-Id", "scom.".concat((new Date).getTime())), r.setRequestHeader("Accept", "application/json; ver=1.0"), r.send()
            })
        }
        t.default = function() {
            return (0, c.default)((0, o.switchToHappyIf)(function(t) {
                return (0, s.default)(t, "text") === o.consts.NO_DATA
            }, (0, c.default)((0, o.connect)((0, o.successLogApi)(v, h), (0, o.failLogApi)(v, h)), (0, o.connectStopWatchLap)(h))), (0, o.connect)(m), (0, o.connectStopWatchStart)(h))
        }, t.hasData = y
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(354), n(355), n(34), n(35), n(48), n(113), n(8), n(26), n(11), n(12), n(1), n(16), n(79)], void 0 === (o = function(t, e, n, r, o, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = l(e),
            s = l(n),
            u = l(r),
            c = l(i);

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function d(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function p(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var v = "skypeNumber",
            h = function(t) {
                return p({}, v, t)
            },
            g = function(t) {
                return (t || []).length > 0
            };

        function y(t) {
            var e = d(t, 2),
                n = e[0],
                r = e[1].reduce(function(t, e) {
                    return Object.assign({}, t, e)
                }, {});
            return Promise.resolve(n.map(function(t) {
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(n, !0).forEach(function(e) {
                            p(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(n).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }({}, t, {
                    countryName: r[t.serviceId]
                })
            }))
        }
        t.default = function() {
            return new Promise(function(t) {
                c.default.on(c.default.EVENTS.READY, function(e) {
                    var n = e.skypetoken;
                    e.fromCache ? function(t) {
                        t(h(g((0, o.getData)(v))))
                    }(t) : function(t, e) {
                        (0, o.cleanStorage)(v), (0, u.default)((0, o.connect)(y), (0, s.default)(e), (0, a.default)())(Promise.resolve(e)).then(function(e) {
                            (0, o.storeData)(v, e), t(h(!0))
                        }, function() {
                            (0, o.storeData)(v, []), t(h(!1))
                        })
                    }(t, n)
                })
            })
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(30), n(34), n(35), n(70), n(31), n(16)], void 0 === (o = function(t, e, n, r, o, i, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = d(e),
            u = d(n),
            c = d(r),
            l = d(i),
            f = d(a);

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = ["active", "reserved"],
            v = u.default.get("api.skypeNumber"),
            h = (0, l.default)(v),
            g = f.default.create("skypeNumbers"),
            y = function(t) {
                return t && Array.isArray(t) ? (t || []).filter(function(t) {
                    return m(p, t)
                }) : []
            },
            m = function(t, e) {
                return t.some(function(t) {
                    return t === (0, s.default)(e, "status")
                })
            };

        function _(t) {
            return new Promise(function(e, n) {
                var r = new XMLHttpRequest;
                r.addEventListener("load", function() {
                    ! function(t, e, n) {
                        var r = [];
                        try {
                            r = JSON.parse(n.response)
                        } catch (t) {
                            e({
                                text: "Response parse error"
                            })
                        }
                        if (200 === n.status) {
                            var i = y(r);
                            i.length > 0 ? t(i) : e({
                                text: o.consts.NO_DATA
                            })
                        } else e((0, s.default)(r, "status") || {})
                    }(e, n, this)
                }), r.addEventListener("error", function() {
                    ! function(t, e) {
                        t({
                            code: e.status
                        })
                    }(n, this)
                }), r.open("GET", v), r.setRequestHeader("X-Skypetoken", t), r.setRequestHeader("Accept", "application/json"), r.send()
            })
        }
        t.default = function() {
            return (0, c.default)((0, o.switchToHappyIf)(function(t) {
                return (0, s.default)(t, "text") === o.consts.NO_DATA
            }, (0, c.default)((0, o.connect)((0, o.successLogApi)(h, g), (0, o.failLogApi)(h, g)), (0, o.connectStopWatchLap)(g))), (0, o.connect)(_), (0, o.connectStopWatchStart)(g))
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(30), n(356), n(34), n(70), n(35), n(31), n(16), n(1), n(8), n(38)], void 0 === (o = function(t, e, n, r, o, i, a, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = v(e),
            c = v(n),
            l = v(r),
            f = v(o),
            d = v(i),
            p = v(s);

        function v(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var h = c.default.get("api.skypeNumberByServiceId"),
            g = (0, d.default)(h),
            y = p.default.create("countries");

        function m(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en",
                n = arguments.length > 2 ? arguments[2] : void 0;
            return Promise.all((n || []).map(function(n) {
                return function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en",
                        r = "".concat(h, "/").concat(t, "?language=").concat(n);
                    return new Promise(function(n, o) {
                        var i = new XMLHttpRequest;
                        i.addEventListener("load", function() {
                            ! function(t, e, n, r) {
                                var o = {};
                                try {
                                    o = JSON.parse(r.response)
                                } catch (t) {
                                    e({
                                        text: "Response parse error"
                                    })
                                }
                                200 === r.status ? t(function(t, e, n) {
                                    return e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n, t
                                }({}, n, (0, u.default)(o, "countryName"))) : e((0, u.default)(o, "status") || {})
                            }(n, o, t, this)
                        }), i.addEventListener("error", function() {
                            ! function(t, e) {
                                t({
                                    code: e.status
                                })
                            }(o, this)
                        }), i.open("GET", r), i.setRequestHeader("X-Skypetoken", e), i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("X-Skype-Request-Id", "scom.".concat(Date.now())), i.send()
                    })
                }(n.serviceId, t, e)
            }))
        }
        t.default = function(t) {
            return (0, f.default)((0, a.switchToHappyIf)(function(t) {
                return (0, u.default)(t, "text") === a.consts.NO_DATA
            }, (0, f.default)((0, a.connect)((0, a.successLogApi)(g, y), (0, a.failLogApi)(g, y)), (0, a.connectStopWatchLap)(y))), (0, a.connect)((0, a.withData)(m.bind(null, t, (0, l.default)()))), (0, a.connectStopWatchStart)(y))
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(5), n(30)], void 0 === (o = function(t, e, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(e);

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var i = o(n).default.get("defaultLanguage") || "en";
        t.default = function() {
            return (0, r.default)(document, "documentElement", "lang") || i
        }
    }.apply(e, r)) || (t.exports = o)
}, function(t, e, n) {
    var r, o;
    r = [e, n(67), n(96), n(126), n(113), n(26), n(55), n(28), n(29), n(11), n(12), n(38), n(16), n(1), n(8), n(64)], void 0 === (o = function(t, e, n, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = s(e),
            i = s(n),
            a = s(r);

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function l(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || f(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function f(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }

        function d(t, e) {
            return v(t) || function(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || p()
        }

        function p() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }

        function v(t) {
            if (Array.isArray(t)) return t
        }
        var h = function(t) {
            return Object.values(t).some(function(t) {
                return t
            })
        };
        t.default = function(t) {
            return Promise.all([new Promise(function(t) {
                a.default.on(a.default.EVENTS.LOG, function(e) {
                    t(e)
                })
            }), new Promise(function(t) {
                i.default.on(i.default.PROFILE_READY, function(e) {
                    t(e)
                }), i.default.on(i.default.PROFILE_REMOVED, function(e) {
                    t(e)
                })
            })]).then(function(e) {
                var n = d(e, 2),
                    r = n[0],
                    o = n[1];
                return o ? Promise.all([r, o].concat(l(t))) : Promise.resolve([r, o])
            }).then(function(t) {
                var e = function(t) {
                        return v(t) || f(t) || p()
                    }(t),
                    n = e[0],
                    r = e[1],
                    o = e.slice(2);
                return [function(t) {
                    return t.some(function(t) {
                        return h(t)
                    })
                }(o), function(t) {
                    return t && (t.username || "").length > 0
                }(r), n, o]
            }).then(function(t) {
                var e = d(t, 4),
                    n = e[0],
                    r = e[1],
                    i = e[2],
                    s = e[3],
                    l = {
                        loadTime: i.loadTime,
                        fallbackServed: i.fallbackServed,
                        fallbackReason: i.fallbackReason
                    };
                l.userExperienceEntitlement = function(t, e, n) {
                    var r = n.fallbackServed,
                        o = n.experienceServed;
                    if (r) {
                        if (t) return a.default.MODES.GREEN;
                        if (e) return a.default.MODES.OKO
                    } else if (t) return a.default.MODES.GREEN;
                    return o
                }(n, r, i), l.userEntitlementState = s.reduce(function(t, e) {
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(n, !0).forEach(function(e) {
                                c(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({}, t, {}, e)
                }, {}), l.experienceServed = function(t) {
                    var e = t.fallbackServed,
                        n = t.experienceServed;
                    return e ? n : document.querySelector("#root .sn-exp-green") ? a.default.MODES.GREEN : document.querySelector("#root .sn-exp-oko") ? a.default.MODES.OKO : n
                }(i), o.default.logPerformanceData(l)
            })
        }
    }.apply(e, r)) || (t.exports = o)
}]);