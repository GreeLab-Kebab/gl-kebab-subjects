function q(t) {
    throw t
}

function w(t, e, n) {
    4 !== e.length && q(new sjcl.exception.invalid("invalid aes block size"));
    var r = t.b[n],
        o = e[0] ^ r[0],
        s = e[n ? 3 : 1] ^ r[1],
        i = e[2] ^ r[2];
    e = e[n ? 1 : 3] ^ r[3];
    var a, c, l, u, d = r.length / 4 - 2,
        m = 4,
        f = [0, 0, 0, 0];
    a = t.k[n], t = a[0];
    var h = a[1],
        p = a[2],
        g = a[3],
        y = a[4];
    for (u = 0; u < d; u++) a = t[o >>> 24] ^ h[s >> 16 & 255] ^ p[i >> 8 & 255] ^ g[255 & e] ^ r[m], c = t[s >>> 24] ^ h[i >> 16 & 255] ^ p[e >> 8 & 255] ^ g[255 & o] ^ r[m + 1], l = t[i >>> 24] ^ h[e >> 16 & 255] ^ p[o >> 8 & 255] ^ g[255 & s] ^ r[m + 2], e = t[e >>> 24] ^ h[o >> 16 & 255] ^ p[s >> 8 & 255] ^ g[255 & i] ^ r[m + 3], m += 4, o = a, s = c, i = l;
    for (u = 0; 4 > u; u++) f[n ? 3 & -u : u] = y[o >>> 24] << 24 ^ y[s >> 16 & 255] << 16 ^ y[i >> 8 & 255] << 8 ^ y[255 & e] ^ r[m++], a = o, o = s, s = i, i = e, e = a;
    return f
}

function x(t, e) {
    var n, r, o, s = e.slice(0),
        i = t.r,
        a = t.b,
        c = i[0],
        l = i[1],
        u = i[2],
        d = i[3],
        m = i[4],
        f = i[5],
        h = i[6],
        p = i[7];
    for (n = 0; 64 > n; n++) 16 > n ? r = s[n] : (r = s[n + 1 & 15], o = s[n + 14 & 15], r = s[15 & n] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (o >>> 17 ^ o >>> 19 ^ o >>> 10 ^ o << 15 ^ o << 13) + s[15 & n] + s[n + 9 & 15] | 0), r = r + p + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (h ^ m & (f ^ h)) + a[n], p = h, h = f, f = m, m = d + r | 0, d = u, u = l, l = c, c = r + (l & u ^ d & (l ^ u)) + (l >>> 2 ^ l >>> 13 ^ l >>> 22 ^ l << 30 ^ l << 19 ^ l << 10) | 0;
    i[0] = i[0] + c | 0, i[1] = i[1] + l | 0, i[2] = i[2] + u | 0, i[3] = i[3] + d | 0, i[4] = i[4] + m | 0, i[5] = i[5] + f | 0, i[6] = i[6] + h | 0, i[7] = i[7] + p | 0
}

function C(t, e) {
    var n, r = sjcl.random.w[t],
        o = [];
    for (n in r) r.hasOwnProperty(n) && o.push(r[n]);
    for (n = 0; n < o.length; n++) o[n](e)
}

function E(t) {
    "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? sjcl.random.addEntropy(window.performance.now(), t, "loadtime") : sjcl.random.addEntropy((new Date).valueOf(), t, "loadtime")
}

function A(t) {
    t.b = B(t).concat(B(t)), t.A = new sjcl.cipher.aes(t.b)
}

function B(t) {
    for (var e = 0; 4 > e && (t.f[e] = t.f[e] + 1 | 0, !t.f[e]); e++);
    return t.A.encrypt(t.f)
}

function D(t, e) {
    return function() {
        e.apply(t, arguments)
    }
}
define("external/keymaster", [], function() {
    return (function(t) {
        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        }

        function n(t) {
            var n, r, o, i, a, c;
            if (r = t.target || t.srcElement, r.tagName, n = t.keyCode, 93 != n && 224 != n || (n = 91), n in v) {
                v[n] = !0;
                for (i in w) w[i] == n && (s[i] = !0)
            } else if (s.filter.call(this, t) && n in _)
                for (originalScope = b, a = 0; a < _[n].length; a++)
                    if (o = _[n][a], o.scope == originalScope || "all" == o.scope) {
                        c = o.mods.length > 0;
                        for (i in v)(!v[i] && e(o.mods, +i) > -1 || v[i] && e(o.mods, +i) == -1) && (c = !1);
                        (0 != o.mods.length || v[16] || v[18] || v[17] || v[91]) && !c || o.method(t, o) === !1 && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), t.cancelBubble && (t.cancelBubble = !0))
                    }
        }

        function r(t) {
            var e, n = t.keyCode;
            if (93 != n && 224 != n || (n = 91), n in v) {
                v[n] = !1;
                for (e in w) w[e] == n && (s[e] = !1)
            }
        }

        function o() {
            for (y in v) v.hasOwnProperty(y) && (v[y] = !1)
        }

        function s(t, e, n) {
            var r, o, s, i;
            for (void 0 === n && (n = e, e = "all"), t = t.replace(/\s/g, ""), r = t.split(","), "" == r[r.length - 1] && (r[r.length - 2] += ","), s = 0; s < r.length; s++) {
                if (o = [], t = r[s].split("+"), t.length > 1) {
                    for (o = t.slice(0, t.length - 1), i = 0; i < o.length; i++) o[i] = w[o[i]];
                    t = [t[t.length - 1]]
                }
                t = t[0], t = A[t] || t.toUpperCase().charCodeAt(0), t in _ || (_[t] = []), _[t].push({
                    shortcut: r[s],
                    scope: e,
                    method: n,
                    key: r[s],
                    mods: o
                })
            }
        }

        function i(t) {
            b = t || "all"
        }

        function a() {
            return b
        }

        function c(t) {
            for (var e in _)
                if (_.hasOwnProperty(e))
                    for (var n = 0; n < _[e].length; n++) _[e][n].scope === t && (_[e].splice(n, 1), n -= 1)
        }

        function l(t) {
            var e = t.replace(/\s/g, ""),
                n = e.split(",");
            return "" == n[n.length - 1] && (n[n.length - 2] += ","), n
        }

        function u(t) {
            for (var e = t.slice(0, t.length - 1), n = 0; n < e.length; n++) e[n] = w[e[n]];
            return e
        }

        function d(t, e) {
            if (t.length != e.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (t[n] !== e[n]) return !1;
            return !0
        }

        function m(t, e, n) {
            var r, o, s, i, c, m, f = [];
            for (o = l(t), c = 0; c < o.length; c++) {
                if (s = o[c].split("+"), s.length > 1 && (f = u(s)), r = s[s.length - 1], r = L(r), void 0 === e && (e = a()), !_[r]) return;
                for (i = 0; i < _[r].length; i++) m = _[r][i], m.scope === e && d(m.mods, f) && (n && m.method !== n || (_[r][i] = {}))
            }
        }

        function f(t) {
            var e = t.target || t.srcElement,
                n = e.tagName,
                r = t.keyCode,
                o = e.hasAttribute && e.hasAttribute("contenteditable") && "false" != e.getAttribute("contenteditable").toLowerCase() || "undefined" != typeof jest && "true" == e.contentEditable;
            return !(("INPUT" == n || "SELECT" == n || "TEXTAREA" == n || o) && ["submit", "button"].indexOf(e.type) == -1 && r != A.escape && r != A.tab)
        }

        function h() {
            s.filter = f
        }

        function p(t, e, n) {
            t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, function() {
                n(window.event)
            })
        }

        function g() {
            _ = {}, i(), o()
        }
        if (window.key) return t.key = window.key, void("undefined" != typeof module && (module.exports = t.key));
        var y, _ = {},
            v = {
                16: !1,
                18: !1,
                17: !1,
                91: !1
            },
            b = "all",
            w = {
                "⇧": 16,
                shift: 16,
                "⌥": 18,
                alt: 18,
                option: 18,
                "⌃": 17,
                ctrl: 17,
                control: 17,
                "⌘": 91,
                command: 91
            },
            A = {
                backspace: 8,
                tab: 9,
                clear: 12,
                enter: 13,
                return: 13,
                esc: 27,
                escape: 27,
                space: 32,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                del: 46,
                delete: 46,
                home: 36,
                end: 35,
                pageup: 33,
                pagedown: 34,
                ",": 188,
                ".": 190,
                "/": 191,
                "`": 192,
                "-": 189,
                "=": 187,
                ";": 186,
                "'": 222,
                "[": 219,
                "]": 221,
                "\\": 220
            },
            L = function(t) {
                return A[t] || t.toUpperCase().charCodeAt(0)
            };
        for (y = 1; y < 20; y++) A["f" + y] = 111 + y;
        for (y in w) s[y] = !1;
        p(document, "keydown", n), p(document, "keyup", r), p(window, "focus", o), p(document, "contextmenu", o), t.key = s, t.key.setScope = i, t.key.getScope = a, t.key.clear = g, t.key.clearScope = c, t.key.filter = f, t.key.resetFilter = h, t.key.unbind = m, "undefined" != typeof module && (module.exports = t.key), window.key = t.key
    })(this), this.key
}.bind(Object.create(null))), (function(t) {
    function e(t, e, n) {
        var r, o, s, m, f, h, _, v, b, w = 0,
            A = [],
            L = 0,
            S = !1,
            R = [],
            E = [],
            j = !1;
        if (n = n || {}, r = n.encoding || "UTF8", b = n.numRounds || 1, s = d(e, r), b !== parseInt(b, 10) || 1 > b) throw Error("numRounds must a integer >= 1");
        if ("SHA-1" !== t) throw Error("Chosen SHA variant is not supported");
        f = 512, h = g, _ = y, m = 160, v = function(t) {
            return t.slice()
        }, o = p(t), this.setHMACKey = function(e, n, s) {
            var i;
            if (!0 === S) throw Error("HMAC key already set");
            if (!0 === j) throw Error("Cannot set HMAC key after calling update");
            if (r = (s || {}).encoding || "UTF8", n = d(n, r)(e), e = n.binLen, n = n.value, i = f >>> 3, s = i / 4 - 1, i < e / 8) {
                for (n = _(n, e, 0, p(t), m); n.length <= s;) n.push(0);
                n[s] &= 4294967040
            } else if (i > e / 8) {
                for (; n.length <= s;) n.push(0);
                n[s] &= 4294967040
            }
            for (e = 0; e <= s; e += 1) R[e] = 909522486 ^ n[e], E[e] = 1549556828 ^ n[e];
            o = h(R, o), w = f, S = !0
        }, this.update = function(t) {
            var e, n, r, i = 0,
                a = f >>> 5;
            for (e = s(t, A, L), t = e.binLen, n = e.value, e = t >>> 5, r = 0; r < e; r += a) i + f <= t && (o = h(n.slice(r, r + a), o), i += f);
            w += i, A = n.slice(i >>> 5), L = t % f, j = !0
        }, this.getHash = function(e, n) {
            var r, s, d, f;
            if (!0 === S) throw Error("Cannot call getHash after setting HMAC key");
            switch (d = u(n), e) {
                case "HEX":
                    r = function(t) {
                        return i(t, m, d)
                    };
                    break;
                case "B64":
                    r = function(t) {
                        return a(t, m, d)
                    };
                    break;
                case "BYTES":
                    r = function(t) {
                        return c(t, m)
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        s = new ArrayBuffer(0)
                    } catch (t) {
                        throw Error("ARRAYBUFFER not supported by this environment")
                    }
                    r = function(t) {
                        return l(t, m)
                    };
                    break;
                default:
                    throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
            }
            for (f = _(A.slice(), L, w, v(o), m), s = 1; s < b; s += 1) f = _(f, m, 0, p(t), m);
            return r(f)
        }, this.getHMAC = function(e, n) {
            var r, s, d, g;
            if (!1 === S) throw Error("Cannot call getHMAC without first setting HMAC key");
            switch (d = u(n), e) {
                case "HEX":
                    r = function(t) {
                        return i(t, m, d)
                    };
                    break;
                case "B64":
                    r = function(t) {
                        return a(t, m, d)
                    };
                    break;
                case "BYTES":
                    r = function(t) {
                        return c(t, m)
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        r = new ArrayBuffer(0)
                    } catch (t) {
                        throw Error("ARRAYBUFFER not supported by this environment")
                    }
                    r = function(t) {
                        return l(t, m)
                    };
                    break;
                default:
                    throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
            }
            return s = _(A.slice(), L, w, v(o), m), g = h(E, p(t)), g = _(s, m, f, g, m), r(g)
        }
    }

    function n(t, e, n) {
        var r, o, s, i, a, c = t.length;
        if (e = e || [0], n = n || 0, a = n >>> 3, 0 !== c % 2) throw Error("String of HEX type must be in byte increments");
        for (r = 0; r < c; r += 2) {
            if (o = parseInt(t.substr(r, 2), 16), isNaN(o)) throw Error("String of HEX type contains invalid characters");
            for (i = (r >>> 1) + a, s = i >>> 2; e.length <= s;) e.push(0);
            e[s] |= o << 8 * (3 - i % 4)
        }
        return {
            value: e,
            binLen: 4 * c + n
        }
    }

    function r(t, e, n) {
        var r, o, s, i, a = [],
            a = e || [0];
        for (n = n || 0, o = n >>> 3, r = 0; r < t.length; r += 1) e = t.charCodeAt(r), i = r + o, s = i >>> 2, a.length <= s && a.push(0), a[s] |= e << 8 * (3 - i % 4);
        return {
            value: a,
            binLen: 8 * t.length + n
        }
    }

    function o(t, e, n) {
        var r, o, s, i, a, c, l = [],
            u = 0,
            l = e || [0];
        if (n = n || 0, e = n >>> 3, -1 === t.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
        if (o = t.indexOf("="), t = t.replace(/\=/g, ""), -1 !== o && o < t.length) throw Error("Invalid '=' found in base-64 string");
        for (o = 0; o < t.length; o += 4) {
            for (a = t.substr(o, 4), s = i = 0; s < a.length; s += 1) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a[s]), i |= r << 18 - 6 * s;
            for (s = 0; s < a.length - 1; s += 1) {
                for (c = u + e, r = c >>> 2; l.length <= r;) l.push(0);
                l[r] |= (i >>> 16 - 8 * s & 255) << 8 * (3 - c % 4), u += 1
            }
        }
        return {
            value: l,
            binLen: 8 * u + n
        }
    }

    function s(t, e, n) {
        var r, o, s, i = [],
            i = e || [0];
        for (n = n || 0, r = n >>> 3, e = 0; e < t.byteLength; e += 1) s = e + r, o = s >>> 2, i.length <= o && i.push(0), i[o] |= t[e] << 8 * (3 - s % 4);
        return {
            value: i,
            binLen: 8 * t.byteLength + n
        }
    }

    function i(t, e, n) {
        var r = "";
        e /= 8;
        var o, s;
        for (o = 0; o < e; o += 1) s = t[o >>> 2] >>> 8 * (3 - o % 4), r += "0123456789abcdef".charAt(s >>> 4 & 15) + "0123456789abcdef".charAt(15 & s);
        return n.outputUpper ? r.toUpperCase() : r
    }

    function a(t, e, n) {
        var r, o, s, i = "",
            a = e / 8;
        for (r = 0; r < a; r += 3)
            for (o = r + 1 < a ? t[r + 1 >>> 2] : 0, s = r + 2 < a ? t[r + 2 >>> 2] : 0, s = (t[r >>> 2] >>> 8 * (3 - r % 4) & 255) << 16 | (o >>> 8 * (3 - (r + 1) % 4) & 255) << 8 | s >>> 8 * (3 - (r + 2) % 4) & 255, o = 0; 4 > o; o += 1) i += 8 * r + 6 * o <= e ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s >>> 6 * (3 - o) & 63) : n.b64Pad;
        return i
    }

    function c(t, e) {
        var n, r, o = "",
            s = e / 8;
        for (n = 0; n < s; n += 1) r = t[n >>> 2] >>> 8 * (3 - n % 4) & 255, o += String.fromCharCode(r);
        return o
    }

    function l(t, e) {
        var n, r = e / 8,
            o = new ArrayBuffer(r);
        for (n = 0; n < r; n += 1) o[n] = t[n >>> 2] >>> 8 * (3 - n % 4) & 255;
        return o
    }

    function u(t) {
        var e = {
            outputUpper: !1,
            b64Pad: "=",
            shakeLen: -1
        };
        if (t = t || {}, e.outputUpper = t.outputUpper || !1, !0 === t.hasOwnProperty("b64Pad") && (e.b64Pad = t.b64Pad), "boolean" != typeof e.outputUpper) throw Error("Invalid outputUpper formatting option");
        if ("string" != typeof e.b64Pad) throw Error("Invalid b64Pad formatting option");
        return e
    }

    function d(t, e) {
        var i;
        switch (e) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
                break;
            default:
                throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
        }
        switch (t) {
            case "HEX":
                i = n;
                break;
            case "TEXT":
                i = function(t, n, r) {
                    var o, s, i, a, c, l = [],
                        u = [],
                        d = 0,
                        l = n || [0];
                    if (n = r || 0, i = n >>> 3, "UTF8" === e)
                        for (o = 0; o < t.length; o += 1)
                            for (r = t.charCodeAt(o), u = [], 128 > r ? u.push(r) : 2048 > r ? (u.push(192 | r >>> 6), u.push(128 | 63 & r)) : 55296 > r || 57344 <= r ? u.push(224 | r >>> 12, 128 | r >>> 6 & 63, 128 | 63 & r) : (o += 1, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(o)), u.push(240 | r >>> 18, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | 63 & r)), s = 0; s < u.length; s += 1) {
                                for (c = d + i, a = c >>> 2; l.length <= a;) l.push(0);
                                l[a] |= u[s] << 8 * (3 - c % 4), d += 1
                            } else if ("UTF16BE" === e || "UTF16LE" === e)
                                for (o = 0; o < t.length; o += 1) {
                                    for (r = t.charCodeAt(o), "UTF16LE" === e && (s = 255 & r, r = s << 8 | r >>> 8), c = d + i, a = c >>> 2; l.length <= a;) l.push(0);
                                    l[a] |= r << 8 * (2 - c % 4), d += 2
                                }
                    return {
                        value: l,
                        binLen: 8 * d + n
                    }
                };
                break;
            case "B64":
                i = o;
                break;
            case "BYTES":
                i = r;
                break;
            case "ARRAYBUFFER":
                try {
                    i = new ArrayBuffer(0)
                } catch (t) {
                    throw Error("ARRAYBUFFER not supported by this environment")
                }
                i = s;
                break;
            default:
                throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
        }
        return i
    }

    function m(t, e) {
        return t << e | t >>> 32 - e
    }

    function f(t, e) {
        var n = (65535 & t) + (65535 & e);
        return ((t >>> 16) + (e >>> 16) + (n >>> 16) & 65535) << 16 | 65535 & n
    }

    function h(t, e, n, r, o) {
        var s = (65535 & t) + (65535 & e) + (65535 & n) + (65535 & r) + (65535 & o);
        return ((t >>> 16) + (e >>> 16) + (n >>> 16) + (r >>> 16) + (o >>> 16) + (s >>> 16) & 65535) << 16 | 65535 & s
    }

    function p(t) {
        if ("SHA-1" !== t) throw Error("No SHA variants supported");
        return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
    }

    function g(t, e) {
        var n, r, o, s, i, a, c, l = [];
        for (n = e[0], r = e[1], o = e[2], s = e[3], i = e[4], c = 0; 80 > c; c += 1) l[c] = 16 > c ? t[c] : m(l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16], 1), a = 20 > c ? h(m(n, 5), r & o ^ ~r & s, i, 1518500249, l[c]) : 40 > c ? h(m(n, 5), r ^ o ^ s, i, 1859775393, l[c]) : 60 > c ? h(m(n, 5), r & o ^ r & s ^ o & s, i, 2400959708, l[c]) : h(m(n, 5), r ^ o ^ s, i, 3395469782, l[c]), i = s, s = o, o = m(r, 30), r = n, n = a;
        return e[0] = f(n, e[0]), e[1] = f(r, e[1]), e[2] = f(o, e[2]), e[3] = f(s, e[3]), e[4] = f(i, e[4]), e
    }

    function y(t, e, n, r) {
        var o;
        for (o = (e + 65 >>> 9 << 4) + 15; t.length <= o;) t.push(0);
        for (t[e >>> 5] |= 128 << 24 - e % 32, e += n, t[o] = 4294967295 & e, t[o - 1] = e / 4294967296 | 0, e = t.length, o = 0; o < e; o += 16) r = g(t.slice(o, o + 16), r);
        return r
    }
    "function" == typeof define && define.amd ? define("external/sha1", function() {
        return e
    }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = e), exports = e) : t.jsSHA = e
})(this);
var s = void 0,
    u = !1,
    sjcl = {
        cipher: {},
        hash: {},
        keyexchange: {},
        mode: {},
        misc: {},
        codec: {},
        exception: {
            corrupt: function(t) {
                this.toString = function() {
                    return "CORRUPT: " + this.message
                }, this.message = t
            },
            invalid: function(t) {
                this.toString = function() {
                    return "INVALID: " + this.message
                }, this.message = t
            },
            bug: function(t) {
                this.toString = function() {
                    return "BUG: " + this.message
                }, this.message = t
            },
            notReady: function(t) {
                this.toString = function() {
                    return "NOT READY: " + this.message
                }, this.message = t
            }
        }
    };
"undefined" != typeof module && module.exports && (module.exports = sjcl), "function" == typeof define && define("external/sjcl-1.0.3", [], function() {
    return sjcl
}), sjcl.cipher.aes = function(t) {
    this.k[0][0][0] || this.D();
    var e, n, r, o, s = this.k[0][4],
        i = this.k[1];
    e = t.length;
    var a = 1;
    for (4 !== e && 6 !== e && 8 !== e && q(new sjcl.exception.invalid("invalid aes key size")), this.b = [r = t.slice(0), o = []], t = e; t < 4 * e + 28; t++) n = r[t - 1], (0 === t % e || 8 === e && 4 === t % e) && (n = s[n >>> 24] << 24 ^ s[n >> 16 & 255] << 16 ^ s[n >> 8 & 255] << 8 ^ s[255 & n], 0 === t % e && (n = n << 8 ^ n >>> 24 ^ a << 24, a = a << 1 ^ 283 * (a >> 7))), r[t] = r[t - e] ^ n;
    for (e = 0; t; e++, t--) n = r[3 & e ? t : t - 4], o[e] = 4 >= t || 4 > e ? n : i[0][s[n >>> 24]] ^ i[1][s[n >> 16 & 255]] ^ i[2][s[n >> 8 & 255]] ^ i[3][s[255 & n]]
}, sjcl.cipher.aes.prototype = {
    encrypt: function(t) {
        return w(this, t, 0)
    },
    decrypt: function(t) {
        return w(this, t, 1)
    },
    k: [
        [
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            []
        ]
    ],
    D: function() {
        var t, e, n, r, o, s, i, a = this.k[0],
            c = this.k[1],
            l = a[4],
            u = c[4],
            d = [],
            m = [];
        for (t = 0; 256 > t; t++) m[(d[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
        for (e = n = 0; !l[e]; e ^= r || 1, n = m[n] || 1)
            for (s = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4, s = s >> 8 ^ 255 & s ^ 99, l[e] = s, u[s] = e, o = d[t = d[r = d[e]]], i = 16843009 * o ^ 65537 * t ^ 257 * r ^ 16843008 * e, o = 257 * d[s] ^ 16843008 * s, t = 0; 4 > t; t++) a[t][e] = o = o << 24 ^ o >>> 8, c[t][s] = i = i << 24 ^ i >>> 8;
        for (t = 0; 5 > t; t++) a[t] = a[t].slice(0), c[t] = c[t].slice(0)
    }
}, sjcl.bitArray = {
    bitSlice: function(t, e, n) {
        return t = sjcl.bitArray.P(t.slice(e / 32), 32 - (31 & e)).slice(1), n === s ? t : sjcl.bitArray.clamp(t, n - e)
    },
    extract: function(t, e, n) {
        var r = Math.floor(-e - n & 31);
        return ((e + n - 1 ^ e) & -32 ? t[e / 32 | 0] << 32 - r ^ t[e / 32 + 1 | 0] >>> r : t[e / 32 | 0] >>> r) & (1 << n) - 1
    },
    concat: function(t, e) {
        if (0 === t.length || 0 === e.length) return t.concat(e);
        var n = t[t.length - 1],
            r = sjcl.bitArray.getPartial(n);
        return 32 === r ? t.concat(e) : sjcl.bitArray.P(e, r, 0 | n, t.slice(0, t.length - 1))
    },
    bitLength: function(t) {
        var e = t.length;
        return 0 === e ? 0 : 32 * (e - 1) + sjcl.bitArray.getPartial(t[e - 1])
    },
    clamp: function(t, e) {
        if (32 * t.length < e) return t;
        t = t.slice(0, Math.ceil(e / 32));
        var n = t.length;
        return e &= 31, 0 < n && e && (t[n - 1] = sjcl.bitArray.partial(e, t[n - 1] & 2147483648 >> e - 1, 1)), t
    },
    partial: function(t, e, n) {
        return 32 === t ? e : (n ? 0 | e : e << 32 - t) + 1099511627776 * t
    },
    getPartial: function(t) {
        return Math.round(t / 1099511627776) || 32
    },
    equal: function(t, e) {
        if (sjcl.bitArray.bitLength(t) !== sjcl.bitArray.bitLength(e)) return u;
        var n, r = 0;
        for (n = 0; n < t.length; n++) r |= t[n] ^ e[n];
        return 0 === r
    },
    P: function(t, e, n, r) {
        var o;
        for (o = 0, r === s && (r = []); 32 <= e; e -= 32) r.push(n), n = 0;
        if (0 === e) return r.concat(t);
        for (o = 0; o < t.length; o++) r.push(n | t[o] >>> e), n = t[o] << 32 - e;
        return o = t.length ? t[t.length - 1] : 0, t = sjcl.bitArray.getPartial(o), r.push(sjcl.bitArray.partial(e + t & 31, 32 < e + t ? n : r.pop(), 1)), r
    },
    l: function(t, e) {
        return [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]]
    },
    byteswapM: function(t) {
        var e, n;
        for (e = 0; e < t.length; ++e) n = t[e], t[e] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
        return t
    }
}, sjcl.codec.utf8String = {
    fromBits: function(t) {
        var e, n, r = "",
            o = sjcl.bitArray.bitLength(t);
        for (e = 0; e < o / 8; e++) 0 === (3 & e) && (n = t[e / 4]), r += String.fromCharCode(n >>> 24), n <<= 8;
        return decodeURIComponent(escape(r))
    },
    toBits: function(t) {
        t = unescape(encodeURIComponent(t));
        var e, n = [],
            r = 0;
        for (e = 0; e < t.length; e++) r = r << 8 | t.charCodeAt(e), 3 === (3 & e) && (n.push(r), r = 0);
        return 3 & e && n.push(sjcl.bitArray.partial(8 * (3 & e), r)), n
    }
}, sjcl.codec.hex = {
    fromBits: function(t) {
        var e, n = "";
        for (e = 0; e < t.length; e++) n += ((0 | t[e]) + 0xf00000000000).toString(16).substr(4);
        return n.substr(0, sjcl.bitArray.bitLength(t) / 4)
    },
    toBits: function(t) {
        var e, n, r = [];
        for (t = t.replace(/\s|0x/g, ""), n = t.length, t += "00000000", e = 0; e < t.length; e += 8) r.push(0 ^ parseInt(t.substr(e, 8), 16));
        return sjcl.bitArray.clamp(r, 4 * n)
    }
}, sjcl.codec.base64 = {
    J: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromBits: function(t, e, n) {
        var r = "",
            o = 0,
            s = sjcl.codec.base64.J,
            i = 0,
            a = sjcl.bitArray.bitLength(t);
        for (n && (s = s.substr(0, 62) + "-_"), n = 0; 6 * r.length < a;) r += s.charAt((i ^ t[n] >>> o) >>> 26), 6 > o ? (i = t[n] << 6 - o, o += 26, n++) : (i <<= 6, o -= 6);
        for (; 3 & r.length && !e;) r += "=";
        return r
    },
    toBits: function(t, e) {
        t = t.replace(/\s|=/g, "");
        var n, r, o = [],
            s = 0,
            i = sjcl.codec.base64.J,
            a = 0;
        for (e && (i = i.substr(0, 62) + "-_"), n = 0; n < t.length; n++) r = i.indexOf(t.charAt(n)), 0 > r && q(new sjcl.exception.invalid("this isn't base64!")), 26 < s ? (s -= 26, o.push(a ^ r >>> s), a = r << 32 - s) : (s += 6, a ^= r << 32 - s);
        return 56 & s && o.push(sjcl.bitArray.partial(56 & s, a, 1)), o
    }
}, sjcl.codec.base64url = {
    fromBits: function(t) {
        return sjcl.codec.base64.fromBits(t, 1, 1)
    },
    toBits: function(t) {
        return sjcl.codec.base64.toBits(t, 1)
    }
}, sjcl.hash.sha256 = function(t) {
    this.b[0] || this.D(), t ? (this.r = t.r.slice(0), this.o = t.o.slice(0), this.h = t.h) : this.reset()
}, sjcl.hash.sha256.hash = function(t) {
    return (new sjcl.hash.sha256).update(t).finalize()
}, sjcl.hash.sha256.prototype = {
    blockSize: 512,
    reset: function() {
        return this.r = this.N.slice(0), this.o = [], this.h = 0, this
    },
    update: function(t) {
        "string" == typeof t && (t = sjcl.codec.utf8String.toBits(t));
        var e, n = this.o = sjcl.bitArray.concat(this.o, t);
        for (e = this.h, t = this.h = e + sjcl.bitArray.bitLength(t), e = 512 + e & -512; e <= t; e += 512) x(this, n.splice(0, 16));
        return this
    },
    finalize: function() {
        var t, e = this.o,
            n = this.r,
            e = sjcl.bitArray.concat(e, [sjcl.bitArray.partial(1, 1)]);
        for (t = e.length + 2; 15 & t; t++) e.push(0);
        for (e.push(Math.floor(this.h / 4294967296)), e.push(0 | this.h); e.length;) x(this, e.splice(0, 16));
        return this.reset(), n
    },
    N: [],
    b: [],
    D: function() {
        function t(t) {
            return 4294967296 * (t - Math.floor(t)) | 0
        }
        var e, n = 0,
            r = 2;
        t: for (; 64 > n; r++) {
            for (e = 2; e * e <= r; e++)
                if (0 === r % e) continue t;
            8 > n && (this.N[n] = t(Math.pow(r, .5))), this.b[n] = t(Math.pow(r, 1 / 3)), n++
        }
    }
}, sjcl.mode.ccm = {
    name: "ccm",
    encrypt: function(t, e, n, r, o) {
        var s, i = e.slice(0),
            a = sjcl.bitArray,
            c = a.bitLength(n) / 8,
            l = a.bitLength(i) / 8;
        for (o = o || 64, r = r || [], 7 > c && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes")), s = 2; 4 > s && l >>> 8 * s; s++);
        return s < 15 - c && (s = 15 - c), n = a.clamp(n, 8 * (15 - s)), e = sjcl.mode.ccm.L(t, e, n, r, o, s), i = sjcl.mode.ccm.p(t, i, n, e, o, s), a.concat(i.data, i.tag)
    },
    decrypt: function(t, e, n, r, o) {
        o = o || 64, r = r || [];
        var s = sjcl.bitArray,
            i = s.bitLength(n) / 8,
            a = s.bitLength(e),
            c = s.clamp(e, a - o),
            l = s.bitSlice(e, a - o),
            a = (a - o) / 8;
        for (7 > i && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes")), e = 2; 4 > e && a >>> 8 * e; e++);
        return e < 15 - i && (e = 15 - i), n = s.clamp(n, 8 * (15 - e)), c = sjcl.mode.ccm.p(t, c, n, l, o, e), t = sjcl.mode.ccm.L(t, c.data, n, r, o, e), s.equal(c.tag, t) || q(new sjcl.exception.corrupt("ccm: tag doesn't match")), c.data
    },
    L: function(t, e, n, r, o, s) {
        var i = [],
            a = sjcl.bitArray,
            c = a.l;
        if (o /= 8, (o % 2 || 4 > o || 16 < o) && q(new sjcl.exception.invalid("ccm: invalid tag length")), (4294967295 < r.length || 4294967295 < e.length) && q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data")), s = [a.partial(8, (r.length ? 64 : 0) | o - 2 << 2 | s - 1)], s = a.concat(s, n), s[3] |= a.bitLength(e) / 8, s = t.encrypt(s), r.length)
            for (n = a.bitLength(r) / 8, 65279 >= n ? i = [a.partial(16, n)] : 4294967295 >= n && (i = a.concat([a.partial(16, 65534)], [n])), i = a.concat(i, r), r = 0; r < i.length; r += 4) s = t.encrypt(c(s, i.slice(r, r + 4).concat([0, 0, 0])));
        for (r = 0; r < e.length; r += 4) s = t.encrypt(c(s, e.slice(r, r + 4).concat([0, 0, 0])));
        return a.clamp(s, 8 * o)
    },
    p: function(t, e, n, r, o, s) {
        var i, a = sjcl.bitArray;
        i = a.l;
        var c = e.length,
            l = a.bitLength(e);
        if (n = a.concat([a.partial(8, s - 1)], n).concat([0, 0, 0]).slice(0, 4), r = a.bitSlice(i(r, t.encrypt(n)), 0, o), !c) return {
            tag: r,
            data: []
        };
        for (i = 0; i < c; i += 4) n[3]++, o = t.encrypt(n), e[i] ^= o[0], e[i + 1] ^= o[1], e[i + 2] ^= o[2], e[i + 3] ^= o[3];
        return {
            tag: r,
            data: a.clamp(e, l)
        }
    }
}, sjcl.mode.ocb2 = {
    name: "ocb2",
    encrypt: function(t, e, n, r, o, s) {
        128 !== sjcl.bitArray.bitLength(n) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        var i, a = sjcl.mode.ocb2.H,
            c = sjcl.bitArray,
            l = c.l,
            u = [0, 0, 0, 0];
        n = a(t.encrypt(n));
        var d, m = [];
        for (r = r || [], o = o || 64, i = 0; i + 4 < e.length; i += 4) d = e.slice(i, i + 4), u = l(u, d), m = m.concat(l(n, t.encrypt(l(n, d)))), n = a(n);
        return d = e.slice(i), e = c.bitLength(d), i = t.encrypt(l(n, [0, 0, 0, e])), d = c.clamp(l(d.concat([0, 0, 0]), i), e), u = l(u, l(d.concat([0, 0, 0]), i)), u = t.encrypt(l(u, l(n, a(n)))), r.length && (u = l(u, s ? r : sjcl.mode.ocb2.pmac(t, r))), m.concat(c.concat(d, c.clamp(u, o)))
    },
    decrypt: function(t, e, n, r, o, s) {
        128 !== sjcl.bitArray.bitLength(n) && q(new sjcl.exception.invalid("ocb iv must be 128 bits")), o = o || 64;
        var i, a, c = sjcl.mode.ocb2.H,
            l = sjcl.bitArray,
            u = l.l,
            d = [0, 0, 0, 0],
            m = c(t.encrypt(n)),
            f = sjcl.bitArray.bitLength(e) - o,
            h = [];
        for (r = r || [], n = 0; n + 4 < f / 32; n += 4) i = u(m, t.decrypt(u(m, e.slice(n, n + 4)))), d = u(d, i), h = h.concat(i), m = c(m);
        return a = f - 32 * n, i = t.encrypt(u(m, [0, 0, 0, a])), i = u(i, l.clamp(e.slice(n), a).concat([0, 0, 0])), d = u(d, i), d = t.encrypt(u(d, u(m, c(m)))), r.length && (d = u(d, s ? r : sjcl.mode.ocb2.pmac(t, r))), l.equal(l.clamp(d, o), l.bitSlice(e, f)) || q(new sjcl.exception.corrupt("ocb: tag doesn't match")), h.concat(l.clamp(i, a))
    },
    pmac: function(t, e) {
        var n, r = sjcl.mode.ocb2.H,
            o = sjcl.bitArray,
            s = o.l,
            i = [0, 0, 0, 0],
            a = t.encrypt([0, 0, 0, 0]),
            a = s(a, r(r(a)));
        for (n = 0; n + 4 < e.length; n += 4) a = r(a), i = s(i, t.encrypt(s(a, e.slice(n, n + 4))));
        return n = e.slice(n), 128 > o.bitLength(n) && (a = s(a, r(a)), n = o.concat(n, [-2147483648, 0, 0, 0])), i = s(i, n), t.encrypt(s(r(s(a, r(a))), i))
    },
    H: function(t) {
        return [t[0] << 1 ^ t[1] >>> 31, t[1] << 1 ^ t[2] >>> 31, t[2] << 1 ^ t[3] >>> 31, t[3] << 1 ^ 135 * (t[0] >>> 31)]
    }
}, sjcl.mode.gcm = {
    name: "gcm",
    encrypt: function(t, e, n, r, o) {
        var s = e.slice(0);
        return e = sjcl.bitArray, r = r || [], t = sjcl.mode.gcm.p(!0, t, s, r, n, o || 128), e.concat(t.data, t.tag)
    },
    decrypt: function(t, e, n, r, o) {
        var s = e.slice(0),
            i = sjcl.bitArray,
            a = i.bitLength(s);
        return o = o || 128, r = r || [], o <= a ? (e = i.bitSlice(s, a - o), s = i.bitSlice(s, 0, a - o)) : (e = s, s = []), t = sjcl.mode.gcm.p(u, t, s, r, n, o), i.equal(t.tag, e) || q(new sjcl.exception.corrupt("gcm: tag doesn't match")), t.data
    },
    Z: function(t, e) {
        var n, r, o, s, i, a = sjcl.bitArray.l;
        for (o = [0, 0, 0, 0], s = e.slice(0), n = 0; 128 > n; n++) {
            for ((r = 0 !== (t[Math.floor(n / 32)] & 1 << 31 - n % 32)) && (o = a(o, s)), i = 0 !== (1 & s[3]), r = 3; 0 < r; r--) s[r] = s[r] >>> 1 | (1 & s[r - 1]) << 31;
            s[0] >>>= 1, i && (s[0] ^= -520093696)
        }
        return o
    },
    g: function(t, e, n) {
        var r, o = n.length;
        for (e = e.slice(0), r = 0; r < o; r += 4) e[0] ^= 4294967295 & n[r], e[1] ^= 4294967295 & n[r + 1], e[2] ^= 4294967295 & n[r + 2], e[3] ^= 4294967295 & n[r + 3], e = sjcl.mode.gcm.Z(e, t);
        return e
    },
    p: function(t, e, n, r, o, s) {
        var i, a, c, l, u, d, m, f, h = sjcl.bitArray;
        for (d = n.length, m = h.bitLength(n), f = h.bitLength(r), a = h.bitLength(o), i = e.encrypt([0, 0, 0, 0]), 96 === a ? (o = o.slice(0), o = h.concat(o, [1])) : (o = sjcl.mode.gcm.g(i, [0, 0, 0, 0], o), o = sjcl.mode.gcm.g(i, o, [0, 0, Math.floor(a / 4294967296), 4294967295 & a])), a = sjcl.mode.gcm.g(i, [0, 0, 0, 0], r), u = o.slice(0), r = a.slice(0), t || (r = sjcl.mode.gcm.g(i, a, n)), l = 0; l < d; l += 4) u[3]++, c = e.encrypt(u), n[l] ^= c[0], n[l + 1] ^= c[1], n[l + 2] ^= c[2], n[l + 3] ^= c[3];
        return n = h.clamp(n, m), t && (r = sjcl.mode.gcm.g(i, a, n)), t = [Math.floor(f / 4294967296), 4294967295 & f, Math.floor(m / 4294967296), 4294967295 & m], r = sjcl.mode.gcm.g(i, r, t), c = e.encrypt(o), r[0] ^= c[0], r[1] ^= c[1], r[2] ^= c[2], r[3] ^= c[3], {
            tag: h.bitSlice(r, 0, s),
            data: n
        }
    }
}, sjcl.misc.hmac = function(t, e) {
    this.M = e = e || sjcl.hash.sha256;
    var n, r = [
            [],
            []
        ],
        o = e.prototype.blockSize / 32;
    for (this.n = [new e, new e], t.length > o && (t = e.hash(t)), n = 0; n < o; n++) r[0][n] = 909522486 ^ t[n], r[1][n] = 1549556828 ^ t[n];
    this.n[0].update(r[0]), this.n[1].update(r[1]), this.G = new e(this.n[0])
}, sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function(t) {
    return this.Q && q(new sjcl.exception.invalid("encrypt on already updated hmac called!")), this.update(t), this.digest(t)
}, sjcl.misc.hmac.prototype.reset = function() {
    this.G = new this.M(this.n[0]), this.Q = u
}, sjcl.misc.hmac.prototype.update = function(t) {
    this.Q = !0, this.G.update(t)
}, sjcl.misc.hmac.prototype.digest = function() {
    var t = this.G.finalize(),
        t = new this.M(this.n[1]).update(t).finalize();
    return this.reset(), t
}, sjcl.misc.pbkdf2 = function(t, e, n, r, o) {
    n = n || 1e3, (0 > r || 0 > n) && q(sjcl.exception.invalid("invalid params to pbkdf2")), "string" == typeof t && (t = sjcl.codec.utf8String.toBits(t)), "string" == typeof e && (e = sjcl.codec.utf8String.toBits(e)), o = o || sjcl.misc.hmac, t = new o(t);
    var s, i, a, c, l = [],
        u = sjcl.bitArray;
    for (c = 1; 32 * l.length < (r || 1); c++) {
        for (o = s = t.encrypt(u.concat(e, [c])), i = 1; i < n; i++)
            for (s = t.encrypt(s), a = 0; a < s.length; a++) o[a] ^= s[a];
        l = l.concat(o)
    }
    return r && (l = u.clamp(l, r)), l
}, sjcl.prng = function(t) {
    this.c = [new sjcl.hash.sha256], this.i = [0], this.F = 0, this.s = {}, this.C = 0, this.K = {}, this.O = this.d = this.j = this.W = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.f = [0, 0, 0, 0], this.A = s, this.B = t, this.q = u, this.w = {
        progress: {},
        seeded: {}
    }, this.m = this.V = 0, this.t = 1, this.u = 2, this.S = 65536, this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.T = 3e4, this.R = 80
}, sjcl.prng.prototype = {
    randomWords: function(t, e) {
        var n, r = [];
        n = this.isReady(e);
        var o;
        if (n === this.m && q(new sjcl.exception.notReady("generator isn't seeded")), n & this.u) {
            n = !(n & this.t), o = [];
            var s, i = 0;
            for (this.O = o[0] = (new Date).valueOf() + this.T, s = 0; 16 > s; s++) o.push(4294967296 * Math.random() | 0);
            for (s = 0; s < this.c.length && (o = o.concat(this.c[s].finalize()), i += this.i[s], this.i[s] = 0, !(!n && this.F & 1 << s)); s++);
            for (this.F >= 1 << this.c.length && (this.c.push(new sjcl.hash.sha256), this.i.push(0)), this.d -= i, i > this.j && (this.j = i), this.F++, this.b = sjcl.hash.sha256.hash(this.b.concat(o)), this.A = new sjcl.cipher.aes(this.b), n = 0; 4 > n && (this.f[n] = this.f[n] + 1 | 0, !this.f[n]); n++);
        }
        for (n = 0; n < t; n += 4) 0 === (n + 1) % this.S && A(this), o = B(this), r.push(o[0], o[1], o[2], o[3]);
        return A(this), r.slice(0, t)
    },
    setDefaultParanoia: function(t, e) {
        0 === t && "Setting paranoia=0 will ruin your security; use it only for testing" !== e && q("Setting paranoia=0 will ruin your security; use it only for testing"), this.B = t
    },
    addEntropy: function(t, e, n) {
        n = n || "user";
        var r, o, i = (new Date).valueOf(),
            a = this.s[n],
            c = this.isReady(),
            l = 0;
        switch (r = this.K[n], r === s && (r = this.K[n] = this.W++), a === s && (a = this.s[n] = 0), this.s[n] = (this.s[n] + 1) % this.c.length, typeof t) {
            case "number":
                e === s && (e = 1), this.c[a].update([r, this.C++, 1, e, i, 1, 0 | t]);
                break;
            case "object":
                if (n = Object.prototype.toString.call(t), "[object Uint32Array]" === n) {
                    for (o = [], n = 0; n < t.length; n++) o.push(t[n]);
                    t = o
                } else
                    for ("[object Array]" !== n && (l = 1), n = 0; n < t.length && !l; n++) "number" != typeof t[n] && (l = 1);
                if (!l) {
                    if (e === s)
                        for (n = e = 0; n < t.length; n++)
                            for (o = t[n]; 0 < o;) e++, o >>>= 1;
                    this.c[a].update([r, this.C++, 2, e, i, t.length].concat(t))
                }
                break;
            case "string":
                e === s && (e = t.length), this.c[a].update([r, this.C++, 3, e, i, t.length]), this.c[a].update(t);
                break;
            default:
                l = 1
        }
        l && q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string")), this.i[a] += e, this.d += e, c === this.m && (this.isReady() !== this.m && C("seeded", Math.max(this.j, this.d)), C("progress", this.getProgress()))
    },
    isReady: function(t) {
        return t = this.I[t !== s ? t : this.B], this.j && this.j >= t ? this.i[0] > this.R && (new Date).valueOf() > this.O ? this.u | this.t : this.t : this.d >= t ? this.u | this.m : this.m
    },
    getProgress: function(t) {
        return t = this.I[t ? t : this.B], this.j >= t ? 1 : this.d > t ? 1 : this.d / t
    },
    startCollectors: function() {
        this.q || (this.a = {
            loadTimeCollector: D(this, this.aa),
            mouseCollector: D(this, this.ba),
            keyboardCollector: D(this, this.$),
            accelerometerCollector: D(this, this.U),
            touchCollector: D(this, this.da)
        }, window.addEventListener ? (window.addEventListener("load", this.a.loadTimeCollector, u), window.addEventListener("mousemove", this.a.mouseCollector, u), window.addEventListener("keypress", this.a.keyboardCollector, u), window.addEventListener("devicemotion", this.a.accelerometerCollector, u), window.addEventListener("touchmove", this.a.touchCollector, u)) : document.attachEvent ? (document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)) : q(new sjcl.exception.bug("can't attach event")), this.q = !0)
    },
    stopCollectors: function() {
        this.q && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, u), window.removeEventListener("mousemove", this.a.mouseCollector, u), window.removeEventListener("keypress", this.a.keyboardCollector, u), window.removeEventListener("devicemotion", this.a.accelerometerCollector, u), window.removeEventListener("touchmove", this.a.touchCollector, u)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.q = u)
    },
    addEventListener: function(t, e) {
        this.w[t][this.V++] = e
    },
    removeEventListener: function(t, e) {
        var n, r, o = this.w[t],
            s = [];
        for (r in o) o.hasOwnProperty(r) && o[r] === e && s.push(r);
        for (n = 0; n < s.length; n++) r = s[n], delete o[r]
    },
    $: function() {
        E(1)
    },
    ba: function(t) {
        var e, n;
        try {
            e = t.x || t.clientX || t.offsetX || 0, n = t.y || t.clientY || t.offsetY || 0
        } catch (t) {
            n = e = 0
        }
        0 != e && 0 != n && sjcl.random.addEntropy([e, n], 2, "mouse"), E(0)
    },
    da: function(t) {
        t = t.touches[0] || t.changedTouches[0], sjcl.random.addEntropy([t.pageX || t.clientX, t.pageY || t.clientY], 1, "touch"), E(0)
    },
    aa: function() {
        E(2)
    },
    U: function(t) {
        if (t = t.accelerationIncludingGravity.x || t.accelerationIncludingGravity.y || t.accelerationIncludingGravity.z, window.orientation) {
            var e = window.orientation;
            "number" == typeof e && sjcl.random.addEntropy(e, 1, "accelerometer")
        }
        t && sjcl.random.addEntropy(t, 2, "accelerometer"), E(0)
    }
}, sjcl.random = new sjcl.prng(6);
t: try {
    var F, G, H, I;
    if (I = "undefined" != typeof module) {
        var J;
        if (J = module.exports) {
            var K;
            try {
                K = require("crypto")
            } catch (t) {
                K = null
            }
            J = (G = K) && G.randomBytes
        }
        I = J
    }
    if (I) F = G.randomBytes(128), F = new Uint32Array(new Uint8Array(F).buffer), sjcl.random.addEntropy(F, 1024, "crypto['randomBytes']");
    else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
        if (H = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(H);
        else {
            if (!window.msCrypto || !window.msCrypto.getRandomValues) break t;
            window.msCrypto.getRandomValues(H)
        }
        sjcl.random.addEntropy(H, 1024, "crypto['getRandomValues']")
    }
} catch (t) {
    "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(t))
}
sjcl.json = {
    defaults: {
        v: 1,
        iter: 1e3,
        ks: 128,
        ts: 64,
        mode: "ccm",
        adata: "",
        cipher: "aes"
    },
    Y: function(t, e, n, r) {
        n = n || {}, r = r || {};
        var o, s = sjcl.json,
            i = s.e({
                iv: sjcl.random.randomWords(4, 0)
            }, s.defaults);
        return s.e(i, n), n = i.adata, "string" == typeof i.salt && (i.salt = sjcl.codec.base64.toBits(i.salt)), "string" == typeof i.iv && (i.iv = sjcl.codec.base64.toBits(i.iv)), (!sjcl.mode[i.mode] || !sjcl.cipher[i.cipher] || "string" == typeof t && 100 >= i.iter || 64 !== i.ts && 96 !== i.ts && 128 !== i.ts || 128 !== i.ks && 192 !== i.ks && 256 !== i.ks || 2 > i.iv.length || 4 < i.iv.length) && q(new sjcl.exception.invalid("json encrypt: invalid parameters")), "string" == typeof t ? (o = sjcl.misc.cachedPbkdf2(t, i), t = o.key.slice(0, i.ks / 32), i.salt = o.salt) : sjcl.ecc && t instanceof sjcl.ecc.elGamal.publicKey && (o = t.kem(), i.kemtag = o.tag, t = o.key.slice(0, i.ks / 32)), "string" == typeof e && (e = sjcl.codec.utf8String.toBits(e)), "string" == typeof n && (i.adata = n = sjcl.codec.utf8String.toBits(n)), o = new sjcl.cipher[i.cipher](t), s.e(r, i), r.key = t, i.ct = sjcl.mode[i.mode].encrypt(o, e, i.iv, n, i.ts), i
    },
    encrypt: function(t, e, n, r) {
        var o = sjcl.json,
            s = o.Y.apply(o, arguments);
        return o.encode(s)
    },
    X: function(t, e, n, r) {
        n = n || {}, r = r || {};
        var o = sjcl.json;
        e = o.e(o.e(o.e({}, o.defaults), e), n, !0);
        var s, i;
        return s = e.adata, "string" == typeof e.salt && (e.salt = sjcl.codec.base64.toBits(e.salt)), "string" == typeof e.iv && (e.iv = sjcl.codec.base64.toBits(e.iv)), (!sjcl.mode[e.mode] || !sjcl.cipher[e.cipher] || "string" == typeof t && 100 >= e.iter || 64 !== e.ts && 96 !== e.ts && 128 !== e.ts || 128 !== e.ks && 192 !== e.ks && 256 !== e.ks || !e.iv || 2 > e.iv.length || 4 < e.iv.length) && q(new sjcl.exception.invalid("json decrypt: invalid parameters")), "string" == typeof t ? (i = sjcl.misc.cachedPbkdf2(t, e), t = i.key.slice(0, e.ks / 32), e.salt = i.salt) : sjcl.ecc && t instanceof sjcl.ecc.elGamal.secretKey && (t = t.unkem(sjcl.codec.base64.toBits(e.kemtag)).slice(0, e.ks / 32)), "string" == typeof s && (s = sjcl.codec.utf8String.toBits(s)), i = new sjcl.cipher[e.cipher](t), s = sjcl.mode[e.mode].decrypt(i, e.ct, e.iv, s, e.ts), o.e(r, e), r.key = t, 1 === n.raw ? s : sjcl.codec.utf8String.fromBits(s)
    },
    decrypt: function(t, e, n, r) {
        var o = sjcl.json;
        return o.X(t, o.decode(e), n, r)
    },
    encode: function(t) {
        var e, n = "{",
            r = "";
        for (e in t)
            if (t.hasOwnProperty(e)) switch (e.match(/^[a-z0-9]+$/i) || q(new sjcl.exception.invalid("json encode: invalid property name")), n += r + '"' + e + '":', r = ",", typeof t[e]) {
                case "number":
                case "boolean":
                    n += t[e];
                    break;
                case "string":
                    n += '"' + escape(t[e]) + '"';
                    break;
                case "object":
                    n += '"' + sjcl.codec.base64.fromBits(t[e], 0) + '"';
                    break;
                default:
                    q(new sjcl.exception.bug("json encode: unsupported type"))
            }
        return n + "}"
    },
    decode: function(t) {
        t = t.replace(/\s/g, ""),
            t.match(/^\{.*\}$/) || q(new sjcl.exception.invalid("json decode: this isn't json!")), t = t.replace(/^\{|\}$/g, "").split(/,/);
        var e, n, r = {};
        for (e = 0; e < t.length; e++)(n = t[e].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)) || q(new sjcl.exception.invalid("json decode: this isn't json!")), n[3] ? r[n[2]] = parseInt(n[3], 10) : n[4] ? r[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? sjcl.codec.base64.toBits(n[4]) : unescape(n[4]) : n[5] && (r[n[2]] = "true" === n[5]);
        return r
    },
    e: function(t, e, n) {
        if (t === s && (t = {}), e === s) return t;
        for (var r in e) e.hasOwnProperty(r) && (n && t[r] !== s && t[r] !== e[r] && q(new sjcl.exception.invalid("required parameter overridden")), t[r] = e[r]);
        return t
    },
    fa: function(t, e) {
        var n, r = {};
        for (n in t) t.hasOwnProperty(n) && t[n] !== e[n] && (r[n] = t[n]);
        return r
    },
    ea: function(t, e) {
        var n, r = {};
        for (n = 0; n < e.length; n++) t[e[n]] !== s && (r[e[n]] = t[e[n]]);
        return r
    }
}, sjcl.encrypt = sjcl.json.encrypt, sjcl.decrypt = sjcl.json.decrypt, sjcl.misc.ca = {}, sjcl.misc.cachedPbkdf2 = function(t, e) {
    var n, r = sjcl.misc.ca;
    return e = e || {}, n = e.iter || 1e3, r = r[t] = r[t] || {}, n = r[n] = r[n] || {
        firstSalt: e.salt && e.salt.length ? e.salt.slice(0) : sjcl.random.randomWords(2, 0)
    }, r = e.salt === s ? n.firstSalt : e.salt, n[r] = n[r] || sjcl.misc.pbkdf2(t, r, e.iter), {
        key: n[r].slice(0),
        salt: r.slice(0)
    }
}, define("modules/clean/datetime", ["require", "exports", "tslib", "modules/constants/time", "modules/core/exception", "modules/core/i18n", "modules/constants/page_load"], function(t, e, n, r, o, s, i) {
    "use strict";

    function a(t, n) {
        return n ? e.abbr_month_names[t] : e.month_names[t]
    }

    function c(t, e) {
        var n = [s._("am"), s._("pm")];
        return e.replace(/'[^']*'|y+|M+|d+|h+|k+|K+|H+|m+|s+|S+|a+/g, function(e) {
            var r;
            switch (e[0]) {
                case "'":
                    return 2 === e.length ? "'" : e.slice(1, -1);
                case "y":
                    if ("yy" === e) return t.getYear() % 100;
                    r = t.getFullYear();
                    break;
                case "M":
                    if (e.length >= 3) return a(t.getMonth(), 3 === e.length);
                    r = t.getMonth() + 1;
                    break;
                case "d":
                    r = t.getDate();
                    break;
                case "h":
                    r = t.getHours() % 12 || 12;
                    break;
                case "k":
                    r = t.getHours() % 12 + 1;
                    break;
                case "K":
                    r = t.getHours() % 12;
                    break;
                case "H":
                    r = t.getHours();
                    break;
                case "m":
                    r = t.getMinutes();
                    break;
                case "s":
                    r = t.getSeconds();
                    break;
                case "S":
                    r = t.getMilliseconds();
                    break;
                case "a":
                    var o = void 0;
                    return o = t.getHours() >= 12 ? 1 : 0, n[o]
            }
            return r = "" + r, r.length < e.length && (r = ("00000000" + r).slice(e.length * -1)), r
        })
    }

    function l(t) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds())
    }

    function u(t, e) {
        return c(l(t), e)
    }

    function d(t) {
        var e = new Date(t.getTime());
        return S(e, r.TIMEZONE_OFFSET), l(e)
    }

    function m(t, e) {
        return c(d(t), e)
    }

    function f(t) {
        var e = i.USER_LOCALE.replace("_", "-");
        return d(t).toLocaleDateString(e, {
            month: "short",
            day: "numeric"
        })
    }

    function h(t) {
        var e = [86400, 3600, 60, 1];
        t = isNaN(t) ? 0 : t;
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (t >= r) {
                return {
                    unit: n,
                    value: Math.floor(t / r)
                }
            }
        }
        return {
            unit: 4,
            value: 0
        }
    }

    function p(t) {
        var e = h(t),
            n = e.unit,
            r = e.value,
            i = {
                comment: "time short form, e.g. 1 sec, 3 secs, 35 min, 5 hours, 1 day"
            },
            a = "";
        return n >= 3 ? a = s.ungettext("%(value)s sec", "%(value)s secs", r, i).format({
            value: r
        }) : 2 === n ? a = s.ungettext("%(value)s min", "%(value)s mins", r, i).format({
            value: r
        }) : 1 === n ? a = s.ungettext("%(value)s hour", "%(value)s hours", r, i).format({
            value: r
        }) : 0 === n ? a = s.ungettext("%(value)s day", "%(value)s days", r, i).format({
            value: r
        }) : o.assert(!1, "Invalid time"), a
    }

    function g(t) {
        var e = h(t),
            n = e.unit,
            r = e.value,
            i = {
                comment: "time remaining short form, e.g. 1 sec left, 3 secs left, 35 min left, 5 hours left, 1 day left"
            },
            a = "";
        return n >= 3 ? a = s.ungettext("%(value)s sec left", "%(value)s secs left", r, i).format({
            value: r
        }) : 2 === n ? a = s.ungettext("%(value)s min left", "%(value)s mins left", r, i).format({
            value: r
        }) : 1 === n ? a = s.ungettext("%(value)s hour left", "%(value)s hours left", r, i).format({
            value: r
        }) : 0 === n ? a = s.ungettext("%(value)s day left", "%(value)s days left", r, i).format({
            value: r
        }) : o.assert(!1, "Invalid time"), a
    }

    function y(t) {
        var e = Math.floor(t);
        e < 0 && (e = 0);
        var n = function(t) {
                return t < 10 ? "0" + t : t.toString()
            },
            r = ":" + n(e % 60);
        return e = Math.floor(e / 60), r = n(e % 60) + r, e = Math.floor(e / 60), e > 0 && (r = e.toString() + ":" + r), r
    }

    function _(t) {
        var e = new Date(t);
        e.setHours(0, 0, 0, 0);
        var n = new Date(e.getFullYear(), 0, 1).getTime(),
            r = e.getTime(),
            o = r - 864e5,
            s = new Date(t);
        0 === e.getDay() ? s.setDate(e.getDate() - 7) : s.setDate(e.getDate() - e.getDay() - 1), s.setHours(0);
        var i = s.getTime(),
            a = i - 6048e5;
        e.setDate(1);
        var c = e.getTime();
        e.setMonth(e.getMonth() - 1);
        var l = e.getTime();
        return e.setMonth(e.getMonth() - 3), {
            today: r,
            yesterday: o,
            thisWeek: i,
            lastWeek: a,
            thisMonth: c,
            lastMonth: l,
            lastThreeMonths: e.getTime(),
            thisYear: n
        }
    }

    function v(t, e, n) {
        return void 0 === n && (n = !0), n ? s._("%(month)s %(year)s", {
            comment: "Like Jun 2012"
        }).format({
            month: a(t, !0),
            year: e
        }) : s._("%(month)s %(year)s", {
            comment: 'Like Jun 2012. If this string begins with a fixed letter, not a placeholder, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
        }).format({
            month: a(t, !0),
            year: e
        })
    }

    function b(t, e, n) {
        return void 0 === n && (n = !0), n ? s._("%(month)s %(year)s", {
            comment: "Month and Year, like December 2012"
        }).format({
            month: a(t, !1),
            year: e
        }) : s._("%(month)s %(year)s", {
            comment: 'Month and Year, like December 2012. If this string begins with a fixed letter, not a placeholder, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
        }).format({
            month: a(t, !1),
            year: e
        })
    }

    function w(t, e, n, r) {
        void 0 === n && (n = !1), void 0 === r && (r = i.USER_LOCALE || "");
        var o = r.replace("_", "-");
        return new Intl.DateTimeFormat(o, {
            year: e ? "numeric" : void 0,
            day: "numeric",
            month: n ? "long" : "short"
        }).format(t)
    }

    function A(t, e, n, r) {
        return void 0 === e && (e = !0), void 0 === n && (n = !1), void 0 === r && (r = !1), L(t, new Date, e, n, r)
    }

    function L(t, e, n, r, o, i) {
        void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === i && (i = !1);
        var a = Number(e) - Number(t);
        if (a < 6e4) {
            if (i) {
                var c = Math.floor(a / 1e3);
                return r ? n ? s.ungettext("%(secs)s sec ago", "%(secs)s secs ago", c).format({
                    secs: c
                }) : s.ungettext("%(secs)s sec ago", "%(secs)s secs ago", c, {
                    comment: 'If this string begins with a letter, it should not be               capitalized so that it may be inserted into the middle of a               sentence. For example, "%(user_name)s viewed %(ago)s", where this               string can be substituted for %(ago).'
                }).format({
                    secs: c
                }) : n ? s.ungettext("%(secs)s second ago", "%(secs)s seconds ago", c).format({
                    secs: c
                }) : s.ungettext("%(secs)s second ago", "%(secs)s seconds ago", c, {
                    comment: 'If this string begins with a letter, it should not be     capitalized so that it may be inserted into the middle of a     sentence. For example, "%(user_name)s viewed %(ago)s", where this     string can be substituted for %(ago).'
                }).format({
                    secs: c
                })
            }
            return o ? n ? s._("A moment ago") : s._("a moment ago") : n ? s._("Just now") : s._("just now")
        }
        if (a < 36e5) {
            var l = Math.floor(a / 6e4);
            return n ? s.ungettext("%(mins)s min ago", "%(mins)s mins ago", l).format({
                mins: l
            }) : s.ungettext("%(mins)s min ago", "%(mins)s mins ago", l, {
                comment: 'If this string begins with a letter, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
            }).format({
                mins: l
            })
        }
        if (a < T) {
            var u = Math.floor(a / 36e5);
            return r ? n ? s.ungettext("%(hours)s hr ago", "%(hours)s hrs ago", u, {
                comment: 'hr is an abbreviation for "hour". If possible, use a similar abbreviation in the target language. If the translation begins with a fixed letter (not a placeholder), and it may allowably be a capital or lowercase letter, capitalize the first letter so it may appear as a standalone message.'
            }).format({
                hours: u
            }) : s.ungettext("%(hours)s hr ago", "%(hours)s hrs ago", u, {
                comment: 'hr is an abbreviation for "hour" If the translation begins with a fixed letter (not a placeholder), and it may allowably be a capital or lowercase letter, start the translation with a lowercase letter so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
            }).format({
                hours: u
            }) : n ? s.ungettext("%(hours)s hour ago", "%(hours)s hours ago", u).format({
                hours: u
            }) : s.ungettext("%(hours)s hour ago", "%(hours)s hours ago", u, {
                comment: 'If this string begins with a letter, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
            }).format({
                hours: u
            })
        }
        if (a < 2592e6) {
            var d = Math.floor(a / T);
            return r && 1 === d ? n ? s._("Yesterday") : s._("yesterday") : n ? s.ungettext("%(days)s day ago", "%(days)s days ago", d).format({
                days: d
            }) : s.ungettext("%(days)s day ago", "%(days)s days ago", d, {
                comment: 'If this string begins with a letter, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
            }).format({
                days: d
            })
        }
        if (!r && a < 56 * T) {
            var m = Math.floor(a / (T * 7));
            return n ? s.ungettext("%(weeks)s week ago", "%(weeks)s weeks ago", m).format({
                weeks: m
            }) : s.ungettext("%(weeks)s week ago", "%(weeks)s weeks ago", m, {
                comment: 'If this string begins with a letter, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
            }).format({
                weeks: m
            })
        }
        if (a < 31536e6) {
            var f = Math.floor(a / 2592e6);
            if (1 === f) {
                if (r) return n ? s._("Last month") : s._("last month");
                f = 2
            }
            return f = Math.min(11, f), n ? s.ungettext("%(months)s month ago", "%(months)s months ago", f).format({
                months: f
            }) : s.ungettext("%(months)s month ago", "%(months)s months ago", f, {
                comment: 'If this string begins with a letter, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
            }).format({
                months: f
            })
        }
        if (r) {
            var h = new Date(t);
            return v(h.getMonth(), h.getFullYear(), n)
        }
        var p = Math.floor(a / 31536e6);
        return n ? s.ungettext("%(years)s year ago", "%(years)s years ago", p).format({
            years: p
        }) : s.ungettext("%(years)s year ago", "%(years)s years ago", p, {
            comment: 'If this string begins with a letter, it should not be capitalized so that it may be inserted into the middle of a sentence. For example, "%(user_name)s viewed %(ago)s", where this string can be substituted for %(ago).'
        }).format({
            years: p
        })
    }

    function S(t, e) {
        var n = 60 * e;
        t.setMinutes(t.getMinutes() + n)
    }

    function R(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
    }

    function E(t, e, n, r, o, s, i) {
        return void 0 === e && (e = !1), void 0 === n && (n = !1), void 0 === r && (r = 0), void 0 === o && (o = !0), void 0 === s && (s = !1), void 0 === i && (i = !1), 0 === r && (r = 28800), C(t, e, n, r, o, s, i)
    }

    function j(t, e) {
        var n = new Date(e.getTime());
        S(n, r.TIMEZONE_OFFSET);
        var o = new Date(n.getTime());
        return o.setUTCDate(o.getUTCDate() - 1), {
            isToday: R(t, n),
            isYesterday: R(t, o)
        }
    }

    function C(t, e, n, o, i, a, c) {
        void 0 === e && (e = !1), void 0 === n && (n = !1), void 0 === o && (o = -1), void 0 === i && (i = !1), void 0 === a && (a = !1), void 0 === c && (c = !1);
        var l = new Date,
            d = new Date(t),
            m = l.getTime() - d.getTime(),
            f = m < 0;
        if (!f && o > 0 && m < 1e3 * o) return L(d, l, a, n, e, i);
        if (f || m < 6e4) return e ? a ? s._("A moment ago", {
            comment: "Like 'A moment ago'"
        }) : s._("a moment ago", {
            comment: "Like 'a moment ago'"
        }) : a ? s._("Just now", {
            comment: "Like 'Just now'"
        }) : s._("just now", {
            comment: "Like 'just now'"
        });
        S(d, r.TIMEZONE_OFFSET);
        var h = j(d, l),
            p = h.isToday,
            g = h.isYesterday,
            y = u(d, r.TIME_FORMAT);
        if (p) return n ? c ? a ? s._("Today %(time)s", {
            comment: "Like 'Today 3:00 PM'"
        }).format({
            time: y
        }) : s._("today %(time)s", {
            comment: "Like 'today 3:00 PM'"
        }).format({
            time: y
        }) : a ? s._("Today, %(time)s", {
            comment: "Like 'Today, 3:00 PM'"
        }).format({
            time: y
        }) : s._("today, %(time)s", {
            comment: "Like 'today, 3:00 PM'"
        }).format({
            time: y
        }) : a ? s._("Today at %(time)s", {
            comment: "Like 'Today at 3:00 PM'"
        }).format({
            time: y
        }) : s._("today at %(time)s", {
            comment: "Like 'today at 3:00 PM'"
        }).format({
            time: y
        });
        if (g) return n ? c ? a ? s._("Yesterday %(time)s", {
            comment: "Like 'Yesterday 3:00 PM'"
        }).format({
            time: y
        }) : s._("yesterday %(time)s", {
            comment: "Like 'yesterday 3:00 PM'"
        }).format({
            time: y
        }) : a ? s._("Yesterday, %(time)s", {
            comment: "Like 'Yesterday, 3:00 PM'"
        }).format({
            time: y
        }) : s._("yesterday, %(time)s", {
            comment: "Like 'yesterday, 3:00 PM'"
        }).format({
            time: y
        }) : a ? s._("Yesterday at %(time)s", {
            comment: "Like 'Yesterday at 3:00 PM'"
        }).format({
            time: y
        }) : s._("yesterday at %(time)s", {
            comment: "Like 'yesterday at 3:00 PM'"
        }).format({
            time: y
        });
        var _ = u(d, r.DATE_FORMAT);
        return n ? c ? s._("%(date)s %(time)s", {
            comment: "Like '08/20/2015 3:00 PM'"
        }).format({
            time: y,
            date: _
        }) : s._("%(date)s, %(time)s", {
            comment: "Like '08/20/2015, 3:00 PM'"
        }).format({
            time: y,
            date: _
        }) : (_ = w(t, d.getUTCFullYear() !== l.getUTCFullYear(), !0), a ? s._("On %(date)s", {
            comment: "Like 'On August 20, 2015'"
        }).format({
            date: _
        }) : s._("on %(date)s", {
            comment: "Like 'on August 20, 2015'"
        }).format({
            date: _
        }))
    }

    function k(t, e, n, r, o, s) {
        return null == e && (e = 0), null == n && (n = 0), null == r && (r = 0), null == o && (o = 0), null == s && (s = 0), t.setFullYear(t.getFullYear() + e), t.setMonth(t.getMonth() + n), t.setDate(t.getDate() + r), t.setHours(t.getHours() + o), t.setMinutes(t.getMinutes() + s), t
    }

    function U() {
        return (new Date).getTime()
    }

    function x(t) {
        var e = new Date;
        return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), k(e, 0, 0, t)
    }

    function O(t) {
        return t.getTime() / 1e3 - Date.now() / 1e3
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r = n.__importStar(r), i = n.__importStar(i), e.localized_date_format = r.DATE_FORMAT, e.localized_datetime_format = r.DATETIME_FORMAT, e.localized_time_format = r.TIME_FORMAT;
    var T = 864e5;
    e.month_names = [s._("January"), s._("February"), s._("March"), s._("April"), s._("May"), s._("June"), s._("July"), s._("August"), s._("September"), s._("October"), s._("November"), s._("December")], e.abbr_month_names = [s._("Jan"), s._("Feb"), s._("Mar"), s._("Apr"), s._("May"), s._("Jun"), s._("Jul"), s._("Aug"), s._("Sep"), s._("Oct"), s._("Nov"), s._("Dec")], e.month_name = a, e.format_date = c, e.format_date_utc = u, e.format_date_timezone_offset = m, e.month_abbr_with_day_with_offset = f, e.format_time = p, e.format_time_remaining = g, e.formatAudioTime = y, e.getTimeBands = _, e.month_abbr_with_year = v, e.month_with_year = b, e.nice_date_with_month_name = w, e.ago = A, e.agoFromDate = L, e.applyTimezoneOffset = S, e.getActingTimeWithAgoEnabled = E, e.getActingTime = C, e.increment_date = k, e.time = U, e.daysAfterToday = x, e.secondsFromToday = O
}), define("modules/clean/display_format", ["require", "exports", "modules/core/i18n"], function(t, e, n) {
    "use strict";

    function r(t, r, o, s, i) {
        void 0 === r && (r = 2), void 0 === o && (o = !0), void 0 === s && (s = !0), void 0 === i && (i = !0), t = i ? parseFloat(t) : Math.max(0, parseFloat(t));
        var a, c, l = Math.abs(t);
        return l < 1024 ? (r = 0, a = t, c = n.ungettext("byte", "bytes", t), o = !0) : l < 1024 * e.SWITCH_UNIT_THRESHOLD ? (a = t / 1024, c = n._("KB")) : l < 1048576 * e.SWITCH_UNIT_THRESHOLD ? (a = t / 1048576, c = n._("MB")) : l < 1073741824 * e.SWITCH_UNIT_THRESHOLD || 0 === r && t < 1099511627776 ? (a = t / 1073741824, c = n._("GB")) : (a = t / 1099511627776, c = n._("TB")), n.format_number(a, r, s) + (o ? " " : "") + c
    }

    function o(t, e, n, o) {
        return void 0 === e && (e = 2), void 0 === n && (n = !0), void 0 === o && (o = !0), t = parseFloat(t), r(1073741824 * t)
    }

    function s(t, e) {
        void 0 === e && (e = 2);
        var n = "" + t,
            r = "";
        return t >= 1e3 && t < 1e6 ? (t /= 1e3, r = "K") : t >= 1e6 && (t /= 1e6, r = "M"), n = t.toFixed(e), n = parseFloat(n).toString(), "" + n + r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SWITCH_UNIT_THRESHOLD = 900, e.format_bytes = r, e.formatGigabytes = o, e.formatFolderFilesCount = s
}), define("modules/clean/react/modal", ["require", "exports", "tslib", "external/classnames", "external/purify", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "modules/clean/css", "modules/core/exception", "modules/core/notify", "jquery", "modules/clean/keycode", "modules/clean/react/button", "modules/clean/static_urls", "modules/core/dom", "modules/core/i18n", "modules/clean/ux_analytics_utils"], function(t, e, n, r, o, s, i, a, c, l, u, d, m, f, h, p, g, y, _) {
    "use strict";

    function v(t, e, n) {
        return void 0 !== t && null !== t && "function" == typeof t[e] ? n(t, e) : void 0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), s = n.__importDefault(s), i = n.__importStar(i), a = n.__importStar(a), c = n.__importStar(c), l = n.__importStar(l), m = n.__importDefault(m), g = n.__importStar(g);
    var b = s.default.createElement;
    e.MODAL_ROOT_TESTID = "react-modal-root";
    var w = function(t) {
            null == t && (t = !0);
            var n = "react-modal-root",
                r = document.getElementById(n);
            return !r && t && (r = document.createElement("div"), r.id = n, r.setAttribute("data-testid", e.MODAL_ROOT_TESTID), document.body.insertBefore(r, document.body.firstChild || null)), r
        },
        A = (function(t) {
            function e(n) {
                var r = t.call(this, n) || this;
                return r.close = function() {
                    return e.close(r.elementToFocusOnClose)
                }, r._invokeCallbackAndClose = function(t, e, n) {
                    if (v(t, "call", function(t) {
                            return t.call(r, e)
                        }), !e.isDefaultPrevented()) return r.props.autoClose || n ? r.close() : void 0
                }, r._dismiss = function(t) {
                    r._invokeCallbackAndClose(r.props.onDismiss, t, !0), v(r.props.onDismissCompleted, "call", function(e) {
                        return e.call(r, t)
                    })
                }, r._accept = function(t) {
                    r._invokeCallbackAndClose(r.props.onAccept, t, !1)
                }, r._onClickOnOverlay = function(t) {
                    r.props.clickOutToClose && r._dismiss(t)
                }, r._focus = function() {
                    r.elementToFocusOnClose = document.activeElement;
                    var t = m.default(i.findDOMNode(r.refs.modal));
                    if (r.props.autoFocusPrimaryInput) {
                        var e = t.find("input:not(:disabled)").first(),
                            n = null != r.refs.primaryButton && m.default(i.findDOMNode(r.refs.primaryButton)),
                            o = null != r.refs.tertiaryButton && m.default(i.findDOMNode(r.refs.tertiaryButton));
                        e.length ? t = e : n.length && !n.is(":disabled") ? t = m.default(i.findDOMNode(r.refs.primaryButton)) : o.length && !o.is(":disabled") && (t = m.default(i.findDOMNode(r.refs.tertiaryButton)))
                    }
                    return t.focus()
                }, r._keyDown = function(t) {
                    if (r.props.stopKeyDownEventPropagation && t.stopPropagation(), t.which === f.KeyCode.ESC && r.props.escapeOrBackspaceToClose && r._dismiss(t), t.which !== f.KeyCode.BACKSPACE || g.focus_in_input() || (t.preventDefault(), r.props.escapeOrBackspaceToClose && r._dismiss(t)), r.props.onKeyDown && r.props.onKeyDown(t), null != r.refs.modal) return g.keepFocusIn(i.findDOMNode(r.refs.modal), t)
                }, r._trackingId = function(t) {
                    return null != r.props.trackingIdPrefix ? r.props.trackingIdPrefix + "-" + t : null
                }, r._renderAcceptButton = function() {
                    return b(h.button, {
                        ref: "primaryButton",
                        key: "primary",
                        className: "dbmodal-button",
                        "data-trackingid": r._trackingId("accept"),
                        importance: r.props.acceptButtonImportance,
                        disabled: r.props.acceptButtonDisabled,
                        onClick: r._accept
                    }, r.props.acceptButtonText)
                }, r._renderDismissButton = function() {
                    return b(h.button, {
                        ref: "tertiaryButton",
                        key: "tertiary-dismiss",
                        className: "dbmodal-button",
                        "data-trackingid": r._trackingId("dismiss"),
                        importance: r.props.dismissButtonImportance,
                        disabled: r.props.dismissButtonDisabled,
                        onClick: r._dismiss
                    }, r.props.dismissButtonText)
                }, r._renderHelpLink = function() {
                    return s.default.createElement("div", {
                        className: "dbmodal-extra-link-button"
                    }, r.props.helpLink)
                }, r._renderButtons = function() {
                    if (r.props.buttonComponent) return r.props.buttonComponent;
                    var t = [];
                    return r.props.submitting && t.push(a.span({
                        className: "dbmodal-loading",
                        key: "loading"
                    }, a.img({
                        src: p.static_url("/static/images/icons/ajax-loading-small-vfl3Wt7C_.gif"),
                        alt: y._("Loading")
                    }))), "default-maestro" === r.props.style ? (r.props.dismissButtonText && t.push(r._renderDismissButton()), r.props.acceptButtonText && t.push(r._renderAcceptButton())) : (r.props.acceptButtonText && t.push(r._renderAcceptButton()), r.props.dismissButtonText && t.push(r._renderDismissButton()), r.props.helpLink && t.push(r._renderHelpLink())), t.length ? a.div({
                        className: "db-modal-buttons"
                    }, r.props.showButtonDivider ? a.hr({}) : void 0, t) : void 0
                }, r._renderAltAction = function() {
                    if (r.props.altAction) return a.div({
                        className: "db-modal__alt-action"
                    }, r.props.altAction)
                }, r._preventEventBubbling = function(t) {
                    return t.stopPropagation()
                }, r.state = {
                    didCssLoad: !1
                }, r
            }
            return n.__extends(e, t), e.showInstance = function(t, e) {
                null == e && (e = !0);
                var n = w();
                return e && (i.unmountComponentAtNode(n), m.default(n).siblings().not("#accessible-announce").attr("aria-hidden", !0)), i.render(t, n)
            }, e.close = function(t) {
                var e = w();
                e && (i.unmountComponentAtNode(e), _.dispatchModalClosed(), m.default(e).siblings().removeAttr("aria-hidden"), null != t && t.focus())
            }, e.unhide = function() {
                var t = w();
                if (t) return m.default(t).show()
            }, e.hide = function() {
                var t = w();
                if (t) return m.default(t).hide()
            }, e.prototype.componentDidMount = function() {
                return _.dispatchModalOpened(), g.scroll_lock_document(), m.default(i.findDOMNode(this.refs.modal)).on("keydown", this._keyDown), m.default(i.findDOMNode(this.refs.modal)).on("keypress", this._preventEventBubbling), this._focus(), "function" == typeof this.props.onShow ? this.props.onShow() : void 0
            }, e.prototype.componentWillMount = function() {
                var t = this;
                this.props.shouldLoadCss && l.require_css("/static/css/modal-vflKK1XSJ.css", function() {
                    t.setState({
                        didCssLoad: !0
                    }), t._focus()
                }, function() {
                    u.reportStack("modal css not properly loaded", {
                        severity: u.SEVERITY.CRITICAL
                    }), d.Notify.error(y._("There was a problem completing this request."))
                })
            }, e.prototype.componentWillUnmount = function() {
                return _.dispatchModalClosed(), g.scroll_unlock_document(), m.default(i.findDOMNode(this.refs.modal)).off("keydown", this._keyDown), m.default(i.findDOMNode(this.refs.modal)).off("keypress", this._preventEventBubbling)
            }, e.prototype.render = function() {
                var t = {
                    "db-modal-wrapper": !0,
                    "uxa-modal": !0,
                    "clean-react-modal": !0,
                    "db-modal--clean-style": "clean" === this.props.style,
                    "db-modal--simple-style": "simple" === this.props.style,
                    "db-modal--lightbox-style": "lightbox" === this.props.style,
                    "db-modal--bare-style": "bare" === this.props.style,
                    "db-modal--default-maestro-style": "default-maestro" === this.props.style,
                    "db-modal--cancel-style": "cancel" === this.props.style,
                    "db-modal--cancel-confirmation-style": "cancel-confirmation" === this.props.style
                };
                this.props.className && (t[this.props.className] = !0);
                var e = r.default(t),
                    o = _.getModalId({
                        id: this.props.id,
                        className: this.props.className
                    }),
                    s = this.props.width ? {
                        width: this.props.width + "px"
                    } : {},
                    i = !this.props.shouldLoadCss || this.props.shouldLoadCss && this.state.didCssLoad ? {} : {
                        style: {
                            display: "none"
                        }
                    };
                return a.div(n.__assign({
                    id: o,
                    className: e
                }, i), a.div({
                    className: "db-modal-overlay",
                    onClick: this._onClickOnOverlay
                }), a.div({
                    ref: "modal",
                    className: "db-modal",
                    tabIndex: -1,
                    style: s,
                    role: "dialog",
                    "aria-labelledby": "lightbox" === this.props.style ? "" : this.props.headerId
                }, a.div({
                    className: "db-modal-box",
                    ref: "modalBox"
                }, ["lightbox", "bare"].includes(this.props.style) ? a.div({
                    className: "db-modal-" + this.props.style
                }, this.props.children) : a.div({}, !this.props.showX || "default-maestro" === this.props.style && "change-email-modal--maestro" !== this.props.className ? void 0 : a.button({
                    className: "db-modal-x",
                    onClick: this._dismiss,
                    "aria-label": y._("Close"),
                    "data-trackingid": this._trackingId("dismiss")
                }), this.props.title ? a.h1({
                    id: "db-modal-title",
                    className: "db-modal-title"
                }, a.div({
                    className: "db-modal-title-text",
                    ref: "title"
                }, this.props.title)) : null, a.div({
                    className: "db-modal-content clearfix",
                    ref: "content"
                }, this.props.children, this._renderButtons(), this._renderAltAction())))))
            }, e.displayName = "Modal", e.propTypes = {
                id: c.string,
                width: c.number,
                submitting: c.bool,
                title: c.oneOfType([c.oneOfType([c.string, c.element]), c.arrayOf(c.oneOfType([c.string, c.element]))]),
                acceptButtonText: c.string,
                dismissButtonText: c.string,
                acceptButtonImportance: c.string,
                dismissButtonImportance: c.string,
                altAction: c.node,
                trackingIdPrefix: c.string,
                headerId: c.string,
                onAccept: c.func,
                onDismiss: c.func,
                onDismissCompleted: c.func,
                onShow: c.func,
                onKeyDown: c.func,
                buttonComponent: c.element,
                autoClose: c.bool,
                clickOutToClose: c.bool,
                showX: c.bool,
                escapeOrBackspaceToClose: c.bool,
                showButtonDivider: c.bool,
                acceptButtonDisabled: c.bool,
                dismissButtonDisabled: c.bool,
                autoFocusPrimaryInput: c.bool,
                style: c.oneOf(["default", "default-maestro", "clean", "simple", "lightbox", "bare", "cancel", "cancel-confirmation"]),
                setMaxHeight: c.bool,
                className: c.string,
                shouldLoadCss: c.bool,
                stopKeyDownEventPropagation: c.bool,
                helpLink: c.oneOfType([c.string, c.element])
            }, e.defaultProps = {
                acceptButtonText: y._("OK"),
                acceptButtonImportance: "primary",
                dismissButtonImportance: "tertiary",
                dismissButtonText: null,
                buttonComponent: null,
                headerId: "db-modal-title",
                onAccept: function() {},
                onDismiss: function() {},
                onShow: function() {},
                autoClose: !0,
                clickOutToClose: !0,
                style: "default",
                showX: !0,
                escapeOrBackspaceToClose: !0,
                acceptButtonDisabled: !1,
                dismissButtonDisabled: !1,
                autoFocusPrimaryInput: !0,
                shouldLoadCss: !0,
                stopKeyDownEventPropagation: !0
            }, e
        })(s.default.Component);
    e.Modal = A, e.ReactModal = A;
    var L = (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n.__extends(e, t), e.prototype.render = function() {
            var t = {};
            for (var e in this.props) {
                var n = this.props[e];
                t[e] = n
            }
            return t.className = r.default(this.props.className, "db-modal-buttons"), a.div(t)
        }, e.displayName = "ModalButtons", e
    })(s.default.Component);
    e.ModalButtons = L;
    var S = (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n.__extends(e, t), e.prototype.render = function() {
            var t = {};
            for (var e in this.props) {
                var n = this.props[e];
                t[e] = n
            }
            return "button-as-link skip-link" === this.props.className ? t.className = this.props.className : t.className = r.default(this.props.className, "dbmodal-button", "button-" + this.props.importance), a.button(t)
        }, e.displayName = "ModalButton", e.propTypes = {
            importance: c.oneOf(["primary", "secondary", "tertiary"])
        }, e.defaultProps = {
            importance: "primary"
        }, e
    })(s.default.Component);
    e.ModalButton = S;
    var R = {
        show: function(t) {
            var e = {
                    acceptButtonText: t.confirm_text,
                    trackingIdPrefix: t.trackingIdPrefix,
                    onAccept: t.confirm_callback,
                    dismissButtonText: t.cancel_text,
                    onDismiss: t.cancel_callback,
                    onDismissCompleted: t.cancel_completed_callback,
                    title: t.title_text,
                    width: t.width,
                    className: "simple-modal",
                    autoClose: t.autoclose,
                    style: t.style,
                    onShow: t.on_show
                },
                n = t.body_react ? s.default.createElement("div", {
                    className: "simple-modal-content"
                }, t.body_react) : s.default.createElement("div", {
                    className: "simple-modal-content",
                    dangerouslySetInnerHTML: {
                        __html: o.sanitize(t.body_html)
                    }
                }),
                r = b(A, e, n);
            return A.showInstance(r)
        }
    };
    e.SimpleModal = R
}), define("modules/clean/validators/validators", ["require", "exports", "tslib", "external/lodash", "jquery", "modules/core/i18n"], function(t, e, n, r, o, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importDefault(o);
    var i = {},
        a = function(t, e) {
            return i[t] = e
        },
        c = function(t) {
            var e, n = t[0],
                r = t.slice(1);
            if (!i[n]) throw new Error("Cannot find validator of type " + n);
            return new((e = i[n]).bind.apply(e, [void 0].concat(r)))
        },
        l = (function() {
            function t(t) {
                this.messages = r.assignIn({}, this.constructor.messages, null != t ? t.messages : void 0)
            }
            return t
        })();
    a("AllValidator", (function(t) {
        function e() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            var o = this,
                s = null;
            return r.isArray(r.last(e)) || (s = r.last(e), e = e.slice(0, -1)), o = t.call(this, s) || this, o.validators = Array.from(e).filter(function(t) {
                return null !== t
            }).map(function(t) {
                return c(t)
            }), o
        }
        return n.__extends(e, t), e.prototype.validate = function(t, e) {
            return Array.from(this.validators).map(function(n) {
                return n.validate(t, e)
            })
        }, e
    })(l));
    var u = /^[\x00-\x7f]*$/,
        d = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.__extends(e, t), e.initClass = function() {
                this.messages = {
                    asciiOnly: s._("Only basic ASCII characters allowed")
                }
            }, e.prototype.validate = function(t) {
                if (!u.test(t)) throw new Error(this.messages.asciiOnly)
            }, e
        })(l);
    d.initClass(), a("AsciiOnlyValidator", d);
    var m = (function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.not_empty = e.not_empty, n.strip = e.strip, n
        }
        return n.__extends(e, t), e.initClass = function() {
            this.messages = {
                empty: s._("Please enter a value for %(field)s")
            }
        }, e.prototype.validate = function(t, e) {
            if (this.strip && (t = o.default.trim(t)), this.not_empty && !t) throw new Error(this.messages.empty.format({
                field: null != e ? e.field : void 0
            }))
        }, e
    })(l);
    m.initClass(), a("StringValidator", m);
    var f = (function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.lastname_goes_first = null != e ? e.lastname_goes_first : void 0, n
        }
        return n.__extends(e, t), e.initClass = function() {
            this.messages = {
                empty: s._("Please enter your name")
            }
        }, e.prototype.validate = function(t, e) {
            if (!e.data.lname && !e.data.fname)
                if (this.lastname_goes_first) {
                    if ("lname" === e.field) throw new Error(this.messages.empty)
                } else if ("fname" === e.field) throw new Error(this.messages.empty);
            if ("fname" === e.field) {
                return c(["StringValidator", {
                    not_empty: !0,
                    strip: !0,
                    messages: {
                        empty: s._("Please enter your first name")
                    }
                }]).validate(t, e)
            }
        }, e
    })(l);
    f.initClass(), a("NameValidator", f);
    var h = (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n.__extends(e, t), e.initClass = function() {
            this.messages = {
                empty: s._("Please enter an email address"),
                noAt: s._("An email address must contain a single @"),
                badUsername: s._("The username portion of the email address is invalid (the portion before the @: %(username)s)"),
                badDomain: s._("The domain portion of the email address is invalid (the portion after the @: %(domain)s)")
            }, this.username_re = /^[\w!#$%&'*+\-\/=?^`{|}~.]+$/, this.domain_re = new RegExp("^([a-z0-9][a-z0-9\\-]*\\.)+([a-z]+|xn--[a-z0-9\\-]+)$", "i")
        }, e.prototype.validate = function(t) {
            if (t = o.default.trim(t), !t) throw new Error(this.messages.empty);
            var n = t.split("@");
            if (2 !== n.length) throw new Error(this.messages.noAt);
            var r = Array.from(n),
                s = r[0],
                i = r[1];
            if (!e.username_re.test(s)) throw new Error(this.messages.badUsername.format({
                username: s
            }));
            if (u.test(i) && !e.domain_re.test(i)) throw new Error(this.messages.badDomain.format({
                domain: i
            }))
        }, e
    })(l);
    h.initClass(), a("EmailValidator", h);
    var p = (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n.__extends(e, t), e.initClass = function() {
            this.messages = {
                nonValidAddress: s._("Please enter a valid website address")
            }
        }, e.prototype.validate = function(t) {
            if (t = o.default.trim(t), !t) throw new Error(this.messages.nonValidAddress);
            var e = t.split(".");
            if (e.length < 2) throw new Error(this.messages.nonValidAddress);
            var n = Array.from(e),
                r = n[0],
                s = n[1];
            if (!r) throw new Error(this.messages.nonValidAddress);
            if (!s) throw new Error(this.messages.nonValidAddress)
        }, e
    })(l);
    p.initClass(), a("UrlValidator", p);
    var g = function(t) {
        return function(e, n) {
            var r = !0;
            try {
                t.validate(e, n)
            } catch (t) {
                r = !1
            }
            return r
        }
    };
    e.validators = {
        create: c,
        register: a,
        check: g
    }
}), define("modules/core/i18n", ["require", "exports", "tslib", "langpack", "modules/core/exception", "modules/constants/page_load", "external/sha1"], function(t, e, n, r, o, s, i) {
    "use strict";

    function a(t, n, r, o) {
        n = n.strip_tags().friendly_format(), r = r.strip_tags(), e.messages[n] = t, e.emessages[n] = r, o && (delete e.messages[o], delete e.emessages[o])
    }

    function c(t, e) {
        return void 0 === e && (e = "web"), n.__assign({
            project: e
        }, t)
    }

    function l(r, o) {
        var i, l = c(o),
            m = l.project,
            f = l.comment;
        if (d(s.USER_LOCALE)) i = u(r, s.USER_LOCALE);
        else {
            var h = j.get_string_key(r, m, f),
                p = e.LANGPACK[h] || e.LANGPACK[r];
            p ? i = p instanceof String || "string" == typeof p ? p : p[0] || r : (0 === C && "en" !== s.USER_LOCALE && (C = Math.floor(20 * Math.random() + 1)), 1 === C && k < 4 && (k += 1, new Promise(function(e, n) {
                t(["jquery"], e, n)
            }).then(n.__importStar).then(function(t) {
                t.ajax({
                    url: "/missed_translation_log",
                    type: "POST",
                    data: {
                        message: r,
                        comment: f,
                        project: m
                    }
                })
            })), i = r)
        }
        return a(r, i, r), i
    }

    function u(t, e) {
        if ("xx_LS" === e) t += "SSSSSSSSSSSSSSSSSSSSSSSSS";
        else if ("xx_AC" !== e || /</.test(t))
            if ("xx_HA" === e) t = "[javascript]" + t;
            else if ("xx_RL" !== e || /</.test(t) || /%/.test(t)) "xx_AE" !== e || /</.test(t) || /%/.test(t) || (t = t.split("").map(function(t) {
            return null != E[t] ? E[t] : t
        }).join(""));
        else {
            var n = "";
            t = t.toLowerCase();
            for (var r = 0; r < t.length; r++) {
                var o = t.charCodeAt(r) - 97;
                n += 0 <= o && o < 26 ? String.fromCharCode(1488 + o) : t[r]
            }
            t = n
        } else t = t.toUpperCase();
        return t
    }

    function d(t) {
        return t.indexOf("xx_") !== -1
    }

    function m(t, n, r, i) {
        var l = c(i),
            m = l.project,
            f = l.comment,
            h = null;
        o.assert(null != r, "missing number parameter for ungettext");
        var p = s.USER_LOCALE;
        if (p)
            if (d(p)) t = u(t, p), n = u(n, p);
            else {
                var g = j.get_string_key(t, m, f),
                    y = e.LANGPACK[g] || e.LANGPACK[t];
                if (y) {
                    if (y instanceof String || "string" == typeof y) return y;
                    var _ = e.PLURAL_RULES_BY_LOCALE[p](r);
                    null != y[_] && (h = y[_])
                }
            }
        var v = 1 === r ? t : n;
        null == h && (h = v);
        var b = h;
        return a(t, b, v), b
    }

    function f(t, e) {
        var n = c(e);
        return new x(t, n.project, n.comment)
    }

    function h(t) {
        return l(t.msg, {
            project: t.project || "web",
            comment: t.comment
        })
    }

    function p(t) {
        var e = t.length;
        switch (e) {
            case 1:
                return t[0];
            case 2:
                return l("%s %s", {
                    comment: "Two sentences"
                }).format(t);
            case 3:
                return l("%s %s %s", {
                    comment: "Three sentences"
                }).format(t);
            case 4:
                return l("%s %s %s %s", {
                    comment: "Four sentences"
                }).format(t);
            default:
                for (var n = "", r = 0, o = 0, s = t; o < s.length; o++) {
                    n += s[o], r !== e - 1 && (n += l(" ", {
                        comment: "Sentence separator character"
                    })), r += 1
                }
                return n
        }
    }

    function g(t) {
        return (t || "en").replace(/_/gi, "-")
    }

    function y(t) {
        return new Intl.NumberFormat(g(s.USER_LOCALE), {
            style: "percent",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(t / 100)
    }

    function _(t) {
        var n = parseFloat(t),
            r = parseInt(t, 10);
        o.assert(n === r, "format_thousands_helper does not work with non-integers"), o.assert(n >= 0, "format_thousands_helper does not work with negative numbers");
        var i = s.USER_LOCALE,
            a = e.NUMBER_FORMAT_BY_LOCALE[i] || U.COMMA_FOR_GROUPS,
            c = r.toFixed(0).toString();
        return c.length <= 3 ? c : _(c.substr(0, c.length - 3)) + a.groupSymbol + c.substr(c.length - 3)
    }

    function v(t, n, r) {
        void 0 === r && (r = !1), n && o.assert(n >= 0, "format_number does not accept negative precision values");
        var i, a = s.USER_LOCALE,
            c = e.NUMBER_FORMAT_BY_LOCALE[a] || U.COMMA_FOR_GROUPS,
            l = t < 0 ? c.minusSign : "";
        if (void 0 !== n) {
            if (i = "", n > 0) {
                var u = t.toFixed(n).split(".");
                t = Number(u[0]);
                var d = u[1];
                r && (d = d.replace(/0+$/, "")), d.length > 0 && (i = c.decimalSymbol + d)
            }
        } else {
            var m = t.toString().split(".");
            i = m.length > 1 ? c.decimalSymbol + m[1] : ""
        }
        return l + _(Math.floor(parseFloat(Math.abs(t).toFixed(10)))) + i
    }

    function b(t) {
        return {
            _: function(e, n) {
                var r = c(n, t);
                return l(e, {
                    project: r.project,
                    comment: r.comment
                })
            },
            ungettext: function(e, n, r, o) {
                var s = c(o, t);
                return m(e, n, r, {
                    project: s.project,
                    comment: s.comment
                })
            },
            N_: function(e, n) {
                var r = c(n, t);
                return f(e, {
                    project: r.project,
                    comment: r.comment
                })
            },
            E_: h
        }
    }

    function w(t) {
        if (window.Intl && window.Intl.Collator) {
            var e = s.USER_LOCALE.replace("_", "-") || "en";
            return new window.Intl.Collator(e, {
                numeric: t
            }).compare
        }
        return function(t, e) {
            var n = t.toLowerCase(),
                r = e.toLowerCase();
            return n < r ? -1 : n > r ? 1 : t < e ? -1 : t > e ? 1 : 0
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s), i = n.__importDefault(i), e.LANGPACK = (function() {
        if (Array.isArray(r)) {
            for (var t = {}, e = r, n = 0; n < e[0].length; n++) t[e[0][n]] = e[1][n];
            return t
        }
        return r
    })();
    var A = "abcdefghijklmnopqrstuvwxyz",
        L = "âḃćḋèḟĝḫíĵǩĺṁńŏṗɋŕśṭůṿẘẋẏẓ",
        S = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        R = "ḀḂḈḊḔḞḠḢḬĴḴĻḾŊÕṔɊŔṠṮŨṼẄẌŸƵ",
        E = (function() {
            for (var t = {}, e = 0; e < 26; e++) t[A.charAt(e)] = L.charAt(e), t[S.charAt(e)] = R.charAt(e);
            return t
        })(),
        j = {
            CONTEXT_DELIMITER: "",
            get_message_context: function(t, e) {
                var n = "";
                if ("web" !== t && (n = "project:" + t), null != e) {
                    var r = new i.default("SHA-1", "TEXT");
                    r.update(e);
                    var o = r.getHash("HEX");
                    n ? n += " " + o : n = o
                }
                return n
            },
            get_string_key: function(t, e, n) {
                var r = j.get_message_context(e, n);
                return null != r ? r + j.CONTEXT_DELIMITER + t : t
            }
        };
    e.messages = {}, e.emessages = {};
    var C = 0,
        k = 0;
    e.add_i18n_message = a, e.PLURAL_RULES = {
        SINGULAR_1: function(t) {
            return 1 === t ? 0 : 1
        },
        SINGULAR_01: function(t) {
            return t <= 1 ? 0 : 1
        },
        SINGULAR_ALL: function(t) {
            return 0
        },
        RUSSIA_UKRAINE: function(t) {
            return t % 10 === 1 && t % 100 !== 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
        },
        POLAND: function(t) {
            return 1 === t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
        }
    }, e.PLURAL_RULES_BY_LOCALE = {
        en: e.PLURAL_RULES.SINGULAR_1,
        en_GB: e.PLURAL_RULES.SINGULAR_1,
        da_DK: e.PLURAL_RULES.SINGULAR_1,
        de: e.PLURAL_RULES.SINGULAR_1,
        es_ES: e.PLURAL_RULES.SINGULAR_1,
        es: e.PLURAL_RULES.SINGULAR_1,
        fr: e.PLURAL_RULES.SINGULAR_01,
        id: e.PLURAL_RULES.SINGULAR_ALL,
        it: e.PLURAL_RULES.SINGULAR_1,
        ja: e.PLURAL_RULES.SINGULAR_ALL,
        ko: e.PLURAL_RULES.SINGULAR_ALL,
        ms: e.PLURAL_RULES.SINGULAR_ALL,
        nb_NO: e.PLURAL_RULES.SINGULAR_1,
        nl_NL: e.PLURAL_RULES.SINGULAR_1,
        pl: e.PLURAL_RULES.POLAND,
        pt_BR: e.PLURAL_RULES.SINGULAR_01,
        ru: e.PLURAL_RULES.RUSSIA_UKRAINE,
        sv_SE: e.PLURAL_RULES.SINGULAR_1,
        th_TH: e.PLURAL_RULES.SINGULAR_ALL,
        tr: e.PLURAL_RULES.SINGULAR_ALL,
        uk_UA: e.PLURAL_RULES.RUSSIA_UKRAINE,
        xx_AC: e.PLURAL_RULES.SINGULAR_1,
        xx_LS: e.PLURAL_RULES.SINGULAR_1,
        xx_HA: e.PLURAL_RULES.SINGULAR_1,
        xx_RL: e.PLURAL_RULES.SINGULAR_1,
        xx_AE: e.PLURAL_RULES.SINGULAR_1,
        xx_SL: e.PLURAL_RULES.SINGULAR_1,
        zh_CN: e.PLURAL_RULES.SINGULAR_ALL,
        zh_TW: e.PLURAL_RULES.SINGULAR_ALL
    };
    var U = {
        COMMA_FOR_GROUPS: {
            decimalSymbol: ".",
            groupSymbol: ",",
            minusSign: "-"
        },
        DOT_FOR_GROUPS: {
            decimalSymbol: ",",
            groupSymbol: ".",
            minusSign: "-"
        },
        SPACE_FOR_GROUPS: {
            decimalSymbol: ",",
            groupSymbol: " ",
            minusSign: "-"
        }
    };
    e.NUMBER_FORMAT_BY_LOCALE = {
        en: U.COMMA_FOR_GROUPS,
        en_GB: U.COMMA_FOR_GROUPS,
        da_DK: U.DOT_FOR_GROUPS,
        de: U.DOT_FOR_GROUPS,
        es_ES: U.SPACE_FOR_GROUPS,
        es: U.SPACE_FOR_GROUPS,
        fr: U.SPACE_FOR_GROUPS,
        id: U.DOT_FOR_GROUPS,
        it: U.DOT_FOR_GROUPS,
        ja: U.COMMA_FOR_GROUPS,
        ko: U.COMMA_FOR_GROUPS,
        ms: U.COMMA_FOR_GROUPS,
        nb_NO: U.SPACE_FOR_GROUPS,
        nl_NL: U.DOT_FOR_GROUPS,
        pl: U.SPACE_FOR_GROUPS,
        pt_BR: U.DOT_FOR_GROUPS,
        ru: U.SPACE_FOR_GROUPS,
        sv_SE: U.SPACE_FOR_GROUPS,
        th_TH: U.COMMA_FOR_GROUPS,
        tr: U.DOT_FOR_GROUPS,
        uk_UA: U.SPACE_FOR_GROUPS,
        xx_AC: U.COMMA_FOR_GROUPS,
        xx_LS: U.COMMA_FOR_GROUPS,
        xx_HA: U.COMMA_FOR_GROUPS,
        xx_RL: U.COMMA_FOR_GROUPS,
        xx_AE: U.COMMA_FOR_GROUPS,
        xx_SL: U.COMMA_FOR_GROUPS,
        zh_CN: U.COMMA_FOR_GROUPS,
        zh_TW: U.COMMA_FOR_GROUPS
    }, e._ = l, e.fake_translate = u, e.locale_is_fake = d, e.ungettext = m, e.N_ = f, e.E_ = h, e.render_sentences = p, e.format_percent = y, e.format_number = v, e.i18n_default_project = b, e.case_insensitive_comparator = w;
    var x = (function() {
        function t(t, e, n) {
            this.msg = t, this.project = e, this.comment = n
        }
        return t
    })();
    e.NoOpTranslated = x, String.prototype.format_sub = function(t) {
        return this.replace(/%(\([a-zA-Z0-9_\-]+\))?(\.\d+)?(.)/g, t.bind(this))
    };
    var O = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        if (void 0 === t) return this.toString();
        var i = function(t, e) {
                t || o.reportStack(e, {
                    tags: ["String.format"],
                    severity: o.SEVERITY.CRITICAL
                })
            },
            c = void 0,
            l = 0;
        c = 0 === n.length && t instanceof Object ? t : [t].concat(n);
        var u, d = function(t, e, n, r) {
                if (e) {
                    e = e.slice(1, -1), i(l <= 0, "Cannot mix named and positional indices in string formatting for string '" + this + "'."), l = -1;
                    var o = "xx_AC" === s.USER_LOCALE;
                    i(e in c || o && e.toLowerCase() in c, "Key '" + e + "' not present during string substitution for string '" + this + "'"), u = c[e], o && (u = c[e.toLowerCase()])
                } else Array.isArray(c) || (c = [c]), i(l > -1, "Cannot mix named and positional indices in string formatting for string '" + this + "'."), i(l < c.length, "Insufficient number of items in format for string '" + this + "'"), u = c[l], l++;
                i(void 0 !== u, "value for key '" + (e || "") + "' is undefined"), null == u && (u = "");
                var a = u.toString();
                if ("s" === r || "S" === r);
                else if ("d" === r || "D" === r) a = parseInt(u, 10).toString();
                else if ("f" === r || "F" === r) a = Number(u).toString();
                else {
                    if ("%" === r) return "%";
                    i(!1, "Unexpected format character '" + r + "' for string '" + this + "'.")
                }
                if (n) {
                    var d = parseInt(n.slice(1), 10);
                    if ("f" === r || "F" === r) {
                        a.indexOf(".") === -1 && (a += ".0");
                        var m = a.split(".");
                        return m[0] + "." + m[1].slice(0, d)
                    }
                    return a.slice(0, d)
                }
                return a
            },
            m = this.format_sub(d);
        if (e.messages && this in e.messages) {
            l = 0;
            var f = e.emessages[this];
            a(f, m, String.prototype.format_sub.call(f, d), this)
        }
        return m
    };
    String.prototype.format = O, String.prototype.friendly_format = function() {
        var t = 1,
            e = 1,
            n = function(n, r, o, s) {
                return r ? "[" + r.slice(1, 1).replace("-", "_") + "]" : "s" === s || "S" === s ? "[word" + e++ + "]" : "[number" + t++ + "]"
            };
        return this.format_sub(n)
    }, String.prototype.blank_format = function() {
        var t = function() {
            return ""
        };
        return this.format_sub(t)
    }, String.prototype.strip_tags = function() {
        return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "")
    }
});
//# sourceMappingURL=pkg-i18n.min.js-vflReZ5xE.map