/*
 jQuery JavaScript Library v1.6.4
 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Amazon elects to use jQuery and Sizzle under the MIT license.

 Date: Mon Sep 12 18:54:48 2011 -0400
*/
(function(M) {
    var r = window.AmazonUIPageJS || window.P,
        p = r._namespace || r.attributeErrors,
        A = p ? p("AmazonUIjQuery", "AmazonUI") : r;
    A.guardFatal ? A.guardFatal(M)(A, window) : A.execute(function() {
        M(A, window)
    })
})(function(M, r, p) {
    r.navigator && r.navigator.userAgent && M.declare("jQuery", function() {
        function A(a, b, d) {
            if (d === p && 1 === a.nodeType)
                if (d = "data-" + b.replace(jb, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : c.isNaN(d) ? kb.test(d) ? c.parseJSON(d) : d :
                            parseFloat(d)
                    } catch (e) {}
                    c.data(a, b, d)
                } else d = p;
            return d
        }

        function V(a) {
            for (var b in a)
                if ("toJSON" !== b) return !1;
            return !0
        }

        function xa(a, b, d) {
            var e = b + "defer",
                f = b + "queue",
                g = b + "mark",
                h = c.data(a, e, p, !0);
            !h || "queue" !== d && c.data(a, f, p, !0) || "mark" !== d && c.data(a, g, p, !0) || setTimeout(function() {
                c.data(a, f, p, !0) || c.data(a, g, p, !0) || (c.removeData(a, e, !0), h.resolve())
            }, 0)
        }

        function I() {
            return !1
        }

        function Z() {
            return !0
        }

        function ya(a, b, d) {
            var e = c.extend({}, d[0]);
            e.type = a;
            e.originalEvent = {};
            e.liveFired = p;
            c.event.handle.call(b,
                e);
            e.isDefaultPrevented() && d[0].preventDefault()
        }

        function lb(a) {
            var b, d, e, f, g, h, k, l, n, q, p, m = [];
            f = [];
            g = c._data(this, "events");
            if (a.liveFired !== this && g && g.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
                a.namespace && (p = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var r = g.live.slice(0);
                for (k = 0; k < r.length; k++) g = r[k], g.origType.replace(ja, "") === a.type ? f.push(g.selector) : r.splice(k--, 1);
                f = c(a.target).closest(f, a.currentTarget);
                l = 0;
                for (n = f.length; l <
                    n; l++)
                    for (q = f[l], k = 0; k < r.length; k++)
                        if (g = r[k], q.selector === g.selector && (!p || p.test(g.namespace)) && !q.elem.disabled) {
                            h = q.elem;
                            e = null;
                            if ("mouseenter" === g.preType || "mouseleave" === g.preType) a.type = g.preType, (e = c(a.relatedTarget).closest(g.selector)[0]) && c.contains(h, e) && (e = h);
                            e && e === h || m.push({
                                elem: h,
                                handleObj: g,
                                level: q.level
                            })
                        }
                l = 0;
                for (n = m.length; l < n; l++) {
                    f = m[l];
                    if (d && f.level > d) break;
                    a.currentTarget = f.elem;
                    a.data = f.handleObj.data;
                    a.handleObj = f.handleObj;
                    p = f.handleObj.origHandler.apply(f.elem, arguments);
                    if (!1 === p || a.isPropagationStopped())
                        if (d = f.level, !1 === p && (b = !1), a.isImmediatePropagationStopped()) break
                }
                return b
            }
        }

        function aa(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(mb, "`").replace(nb, "\x26")
        }

        function za(a) {
            return !a || !a.parentNode || 11 === a.parentNode.nodeType
        }

        function Aa(a, b, d) {
            b = b || 0;
            if (c.isFunction(b)) return c.grep(a, function(a, c) {
                return !!b.call(a, c, a) === d
            });
            if (b.nodeType) return c.grep(a, function(a, c) {
                return a === b === d
            });
            if ("string" === typeof b) {
                var e = c.grep(a, function(a) {
                    return 1 === a.nodeType
                });
                if (ob.test(b)) return c.filter(b, e, !d);
                b = c.filter(b, e)
            }
            return c.grep(a, function(a, e) {
                return 0 <= c.inArray(a, b) === d
            })
        }

        function pb(a, b) {
            return c.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function Ba(a, b) {
            if (1 === b.nodeType && c.hasData(a)) {
                var d = c.expando,
                    e = c.data(a),
                    f = c.data(b, e);
                if (e = e[d])
                    if (a = e.events, f = f[d] = c.extend({}, e), a) {
                        delete f.handle;
                        f.events = {};
                        for (var g in a)
                            for (d = 0, e = a[g].length; d < e; d++) c.event.add(b, g + (a[g][d].namespace ?
                                "." : "") + a[g][d].namespace, a[g][d], a[g][d].data)
                    }
            }
        }

        function Ca(a, b) {
            var d;
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                d = b.nodeName.toLowerCase();
                if ("object" === d) b.outerHTML = a.outerHTML;
                else if ("input" === d && ("checkbox" === a.type || "radio" === a.type)) a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
                else if ("option" === d) b.selected = a.defaultSelected;
                else if ("input" === d || "textarea" === d) b.defaultValue = a.defaultValue;
                b.removeAttribute(c.expando)
            }
        }

        function ba(a) {
            return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
        }

        function Da(a) {
            if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
        }

        function Ea(a) {
            c.nodeName(a, "input") ? Da(a) : "getElementsByTagName" in a && c.grep(a.getElementsByTagName("input"), Da)
        }

        function qb(a, b) {
            b.src ? c.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(rb, "/*$0*/"));
            b.parentNode &&
                b.parentNode.removeChild(b)
        }

        function Fa(a, b, d) {
            var e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = "width" === b ? sb : tb;
            if (0 < e) return "border" !== d && c.each(f, function() {
                d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
                e = "margin" === d ? e + (parseFloat(c.css(a, d + this)) || 0) : e - (parseFloat(c.css(a, "border" + this + "Width")) || 0)
            }), e + "px";
            e = O(a, b, b);
            if (0 > e || null == e) e = a.style[b] || 0;
            e = parseFloat(e) || 0;
            d && c.each(f, function() {
                e += parseFloat(c.css(a, "padding" + this)) || 0;
                "padding" !== d && (e += parseFloat(c.css(a, "border" + this + "Width")) ||
                    0);
                "margin" === d && (e += parseFloat(c.css(a, d + this)) || 0)
            });
            return e + "px"
        }

        function Ga(a) {
            return function(b, d) {
                "string" !== typeof b && (d = b, b = "*");
                if (c.isFunction(d)) {
                    b = b.toLowerCase().split(Ha);
                    for (var e = 0, f = b.length, g, h; e < f; e++) g = b[e], (h = /^\+/.test(g)) && (g = g.substr(1) || "*"), g = a[g] = a[g] || [], g[h ? "unshift" : "push"](d)
                }
            }
        }

        function ca(a, b, c, e, f, g) {
            f = f || b.dataTypes[0];
            g = g || {};
            g[f] = !0;
            f = a[f];
            for (var h = 0, k = f ? f.length : 0, l = a === ka, n; h < k && (l || !n); h++) n = f[h](b, c, e), "string" === typeof n && (!l || g[n] ? n = p : (b.dataTypes.unshift(n),
                n = ca(a, b, c, e, n, g)));
            !l && n || g["*"] || (n = ca(a, b, c, e, "*", g));
            return n
        }

        function Ia(a, b) {
            var d, e, f = c.ajaxSettings.flatOptions || {};
            for (d in b) b[d] !== p && ((f[d] ? a : e || (e = {}))[d] = b[d]);
            e && c.extend(!0, a, e)
        }

        function la(a, b, d, e) {
            if (c.isArray(b)) c.each(b, function(b, f) {
                d || ub.test(a) ? e(a, f) : la(a + "[" + ("object" === typeof f || c.isArray(f) ? b : "") + "]", f, d, e)
            });
            else if (d || null == b || "object" !== typeof b) e(a, b);
            else
                for (var f in b) la(a + "[" + f + "]", b[f], d, e)
        }

        function Ja() {
            try {
                return new r.XMLHttpRequest
            } catch (a) {}
        }

        function Ka() {
            setTimeout(vb,
                0);
            return da = c.now()
        }

        function vb() {
            da = p
        }

        function K(a, b) {
            var d = {};
            c.each(La.concat.apply([], La.slice(0, b)), function() {
                d[this] = a
            });
            return d
        }

        function Ma(a) {
            if (!ma[a]) {
                var b = m.body,
                    d = c("\x3c" + a + "\x3e").appendTo(b),
                    e = d.css("display");
                d.remove();
                if ("none" === e || "" === e) C || (C = m.createElement("iframe"), C.frameBorder = C.width = C.height = 0), b.appendChild(C), F && C.createElement || (F = (C.contentWindow || C.contentDocument).document, F.write((c.support.boxModel ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"), F.close()),
                    d = F.createElement(a), F.body.appendChild(d), e = c.css(d, "display"), b.removeChild(C);
                ma[a] = e
            }
            return ma[a]
        }

        function na(a) {
            return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var m = r.document,
            wb = r.navigator,
            xb = r.location,
            c = function() {
                function a() {
                    if (!b.isReady) {
                        try {
                            m.documentElement.doScroll("left")
                        } catch (c) {
                            setTimeout(a, 1);
                            return
                        }
                        b.ready()
                    }
                }
                var b = function(a, c) {
                        return new b.fn.init(a, c, f)
                    },
                    c = r.jQuery,
                    e = r.$,
                    f, g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    h = /\S/,
                    k = /^\s+/,
                    l = /\s+$/,
                    n = /\d/,
                    q = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    J = /^[\],:{}\s]*$/,
                    D = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    y = /(?:^|:|,)(?:\s*\[)+/g,
                    w = /(webkit)[ \/]([\w.]+)/,
                    z = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    A = /(msie) ([\w.]+)/,
                    x = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    t = /-([a-z]|[0-9])/ig,
                    yb = /^-ms-/,
                    ea = function(a, b) {
                        return (b + "").toUpperCase()
                    },
                    W = wb.userAgent,
                    fa, T, zb = Object.prototype.toString,
                    oa = Object.prototype.hasOwnProperty,
                    pa = Array.prototype.push,
                    X = Array.prototype.slice,
                    Na = String.prototype.trim,
                    u = Array.prototype.indexOf,
                    Oa = {};
                b.fn = b.prototype = {
                    constructor: b,
                    init: function(a, c, d) {
                        var e;
                        if (!a) return this;
                        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                        if ("body" === a && !c && m.body) return this.context = m, this[0] = m.body, this.selector = a, this.length = 1, this;
                        if ("string" === typeof a) {
                            e = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : g.exec(a);
                            if (!e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                            if (e[1]) return d =
                                (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c : m, (a = q.exec(a)) ? b.isPlainObject(c) ? (a = [m.createElement(a[1])], b.fn.attr.call(a, c, !0)) : a = [d.createElement(a[1])] : (a = b.buildFragment([e[1]], [d]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes), b.merge(this, a);
                            if ((c = m.getElementById(e[2])) && c.parentNode) {
                                if (c.id !== e[2]) return d.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = m;
                            this.selector = a;
                            return this
                        }
                        if (b.isFunction(a)) return d.ready(a);
                        a.selector !== p && (this.selector = a.selector, this.context = a.context);
                        return b.makeArray(a, this)
                    },
                    selector: "",
                    jquery: "1.6.4",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return X.call(this, 0)
                    },
                    get: function(a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                    },
                    pushStack: function(a, c, d) {
                        var e = this.constructor();
                        b.isArray(a) ? pa.apply(e, a) : b.merge(e, a);
                        e.prevObject = this;
                        e.context = this.context;
                        "find" === c ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")");
                        return e
                    },
                    each: function(a, c) {
                        return b.each(this,
                            a, c)
                    },
                    ready: function(a) {
                        b.bindReady();
                        fa.done(a);
                        return this
                    },
                    eq: function(a) {
                        return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
                    },
                    map: function(a) {
                        return this.pushStack(b.map(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: pa,
                    sort: [].sort,
                    splice: [].splice
                };
                b.fn.init.prototype =
                    b.fn;
                b.extend = b.fn.extend = function() {
                    var a, c, d, e, f, g = arguments[0] || {},
                        x = 1,
                        h = arguments.length,
                        t = !1;
                    "boolean" === typeof g && (t = g, g = arguments[1] || {}, x = 2);
                    "object" === typeof g || b.isFunction(g) || (g = {});
                    h === x && (g = this, --x);
                    for (; x < h; x++)
                        if (null != (a = arguments[x]))
                            for (c in a) d = g[c], e = a[c], g !== e && (t && e && (b.isPlainObject(e) || (f = b.isArray(e))) ? (f ? (f = !1, d = d && b.isArray(d) ? d : []) : d = d && b.isPlainObject(d) ? d : {}, g[c] = b.extend(t, d, e)) : e !== p && (g[c] = e));
                    return g
                };
                b.extend({
                    noConflict: function(a) {
                        r.$ === b && (r.$ = e);
                        a && r.jQuery ===
                            b && (r.jQuery = c);
                        return b
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(a) {
                        a ? b.readyWait++ : b.ready(!0)
                    },
                    ready: function(a) {
                        if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                            if (!m.body) return setTimeout(b.ready, 1);
                            b.isReady = !0;
                            !0 !== a && 0 < --b.readyWait || (fa.resolveWith(m, [b]), b.fn.trigger && b(m).trigger("ready").unbind("ready"))
                        }
                    },
                    bindReady: function() {
                        if (!fa) {
                            fa = b._Deferred();
                            if ("complete" === m.readyState) return setTimeout(b.ready, 1);
                            if (m.addEventListener) m.addEventListener("DOMContentLoaded", T, !1), r.addEventListener("load",
                                b.ready, !1);
                            else if (m.attachEvent) {
                                m.attachEvent("onreadystatechange", T);
                                r.attachEvent("onload", b.ready);
                                var c = !1;
                                try {
                                    c = null == r.frameElement
                                } catch (d) {}
                                m.documentElement.doScroll && c && a()
                            }
                        }
                    },
                    isFunction: function(a) {
                        return "function" === b.type(a)
                    },
                    isArray: Array.isArray || function(a) {
                        return "array" === b.type(a)
                    },
                    isWindow: function(a) {
                        return a && "object" === typeof a && "setInterval" in a
                    },
                    isNaN: function(a) {
                        return null == a || !n.test(a) || isNaN(a)
                    },
                    type: function(a) {
                        return null == a ? String(a) : Oa[zb.call(a)] || "object"
                    },
                    isPlainObject: function(a) {
                        if (!a ||
                            "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !oa.call(a, "constructor") && !oa.call(a.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (c) {
                            return !1
                        }
                        for (var d in a);
                        return d === p || oa.call(a, d)
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0
                    },
                    error: function(a) {
                        throw a;
                    },
                    parseJSON: function(a) {
                        if ("string" !== typeof a || !a) return null;
                        a = b.trim(a);
                        if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                        if (J.test(a.replace(D, "@").replace(v, "]").replace(y, ""))) return (new Function("return " +
                            a))();
                        b.error("Invalid JSON: " + a)
                    },
                    parseXML: function(a) {
                        var c, d;
                        try {
                            r.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
                        } catch (e) {
                            c = p
                        }
                        c && c.documentElement && !c.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + a);
                        return c
                    },
                    noop: function() {},
                    globalEval: function(a) {
                        a && h.test(a) && (r.execScript || function(a) {
                            r.eval.call(r, a)
                        })(a)
                    },
                    camelCase: function(a) {
                        return a.replace(yb, "ms-").replace(t, ea)
                    },
                    nodeName: function(a,
                        b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function(a, c, d) {
                        var e, f = 0,
                            g = a.length,
                            x = g === p || b.isFunction(a);
                        if (d)
                            if (x)
                                for (e in a) {
                                    if (!1 === c.apply(a[e], d)) break
                                } else
                                    for (; f < g && !1 !== c.apply(a[f++], d););
                            else if (x)
                            for (e in a) {
                                if (!1 === c.call(a[e], e, a[e])) break
                            } else
                                for (; f < g && !1 !== c.call(a[f], f, a[f++]););
                        return a
                    },
                    trim: Na ? function(a) {
                        return null == a ? "" : Na.call(a)
                    } : function(a) {
                        return null == a ? "" : a.toString().replace(k, "").replace(l, "")
                    },
                    makeArray: function(a, c) {
                        c = c || [];
                        if (null != a) {
                            var d =
                                b.type(a);
                            null == a.length || "string" === d || "function" === d || "regexp" === d || b.isWindow(a) ? pa.call(c, a) : b.merge(c, a)
                        }
                        return c
                    },
                    inArray: function(a, b) {
                        if (!b) return -1;
                        if (u) return u.call(b, a);
                        for (var c = 0, d = b.length; c < d; c++)
                            if (b[c] === a) return c;
                        return -1
                    },
                    merge: function(a, b) {
                        var c = a.length,
                            d = 0;
                        if ("number" === typeof b.length)
                            for (var e = b.length; d < e; d++) a[c++] = b[d];
                        else
                            for (; b[d] !== p;) a[c++] = b[d++];
                        a.length = c;
                        return a
                    },
                    grep: function(a, b, c) {
                        var d = [],
                            e;
                        c = !!c;
                        for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                        return d
                    },
                    map: function(a, c, d) {
                        var e, f, g = [],
                            x = 0,
                            h = a.length;
                        if (a instanceof b || h !== p && "number" === typeof h && (0 < h && a[0] && a[h - 1] || 0 === h || b.isArray(a)))
                            for (; x < h; x++) e = c(a[x], x, d), null != e && (g[g.length] = e);
                        else
                            for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                        return g.concat.apply([], g)
                    },
                    guid: 1,
                    proxy: function(a, c) {
                        if ("string" === typeof c) {
                            var d = a[c];
                            c = a;
                            a = d
                        }
                        if (!b.isFunction(a)) return p;
                        var e = X.call(arguments, 2),
                            d = function() {
                                return a.apply(c, e.concat(X.call(arguments)))
                            };
                        d.guid = a.guid = a.guid || d.guid || b.guid++;
                        return d
                    },
                    access: function(a, c, d, e, f, g) {
                        var x = a.length;
                        if ("object" === typeof c) {
                            for (var h in c) b.access(a, h, c[h], e, f, d);
                            return a
                        }
                        if (d !== p) {
                            e = !g && e && b.isFunction(d);
                            for (h = 0; h < x; h++) f(a[h], c, e ? d.call(a[h], h, f(a[h], c)) : d, g);
                            return a
                        }
                        return x ? f(a[0], c) : p
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(a) {
                        a = a.toLowerCase();
                        a = w.exec(a) || z.exec(a) || A.exec(a) || 0 > a.indexOf("compatible") && x.exec(a) || [];
                        return {
                            browser: a[1] || "",
                            version: a[2] || "0"
                        }
                    },
                    sub: function() {
                        function a(b, c) {
                            return new a.fn.init(b,
                                c)
                        }
                        b.extend(!0, a, this);
                        a.superclass = this;
                        a.fn = a.prototype = this();
                        a.fn.constructor = a;
                        a.sub = this.sub;
                        a.fn.init = function(d, e) {
                            e && e instanceof b && !(e instanceof a) && (e = a(e));
                            return b.fn.init.call(this, d, e, c)
                        };
                        a.fn.init.prototype = a.fn;
                        var c = a(m);
                        return a
                    },
                    browser: {}
                });
                b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                    Oa["[object " + b + "]"] = b.toLowerCase()
                });
                W = b.uaMatch(W);
                W.browser && (b.browser[W.browser] = !0, b.browser.version = W.version);
                b.browser.webkit && (b.browser.safari = !0);
                h.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/);
                f = b(m);
                m.addEventListener ? T = function() {
                    m.removeEventListener("DOMContentLoaded", T, !1);
                    b.ready()
                } : m.attachEvent && (T = function() {
                    "complete" === m.readyState && (m.detachEvent("onreadystatechange", T), b.ready())
                });
                return b
            }(),
            qa = "done fail isResolved isRejected promise then always pipe".split(" "),
            Pa = [].slice;
        c.extend({
            _Deferred: function() {
                var a = [],
                    b, d, e, f = {
                        done: function() {
                            if (!e) {
                                var d = arguments,
                                    h, k, l, n, q;
                                b && (q = b, b = 0);
                                h = 0;
                                for (k = d.length; h < k; h++) l = d[h], n = c.type(l),
                                    "array" === n ? f.done.apply(f, l) : "function" === n && a.push(l);
                                q && f.resolveWith(q[0], q[1])
                            }
                            return this
                        },
                        resolveWith: function(c, f) {
                            if (!e && !b && !d) {
                                f = f || [];
                                d = 1;
                                try {
                                    for (; a[0];) a.shift().apply(c, f)
                                } finally {
                                    b = [c, f], d = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            f.resolveWith(this, arguments);
                            return this
                        },
                        isResolved: function() {
                            return !(!d && !b)
                        },
                        cancel: function() {
                            e = 1;
                            a = [];
                            return this
                        }
                    };
                return f
            },
            Deferred: function(a) {
                var b = c._Deferred(),
                    d = c._Deferred(),
                    e;
                c.extend(b, {
                    then: function(a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function() {
                        return b.done.apply(b,
                            arguments).fail.apply(this, arguments)
                    },
                    fail: d.done,
                    rejectWith: d.resolveWith,
                    reject: d.resolve,
                    isRejected: d.isResolved,
                    pipe: function(a, d) {
                        return c.Deferred(function(e) {
                            c.each({
                                done: [a, "resolve"],
                                fail: [d, "reject"]
                            }, function(a, d) {
                                var f = d[0],
                                    g = d[1],
                                    p;
                                if (c.isFunction(f)) b[a](function() {
                                    if ((p = f.apply(this, arguments)) && c.isFunction(p.promise)) p.promise().then(e.resolve, e.reject);
                                    else e[g + "With"](this === b ? e : this, [p])
                                });
                                else b[a](e[g])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null == a) {
                            if (e) return e;
                            e = a = {}
                        }
                        for (var c =
                                qa.length; c--;) a[qa[c]] = b[qa[c]];
                        return a
                    }
                });
                b.done(d.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        d[a] = 1 < arguments.length ? Pa.call(arguments, 0) : b;
                        --g || h.resolveWith(h, Pa.call(d, 0))
                    }
                }
                var d = arguments,
                    e = 0,
                    f = d.length,
                    g = f,
                    h = 1 >= f && a && c.isFunction(a.promise) ? a : c.Deferred();
                if (1 < f) {
                    for (; e < f; e++) d[e] && c.isFunction(d[e].promise) ? d[e].promise().then(b(e), h.reject) : --g;
                    g || h.resolveWith(h, d)
                } else h !== a && h.resolveWith(h, f ? [a] : []);
                return h.promise()
            }
        });
        c.support = function() {
            var a = m.createElement("div"),
                b = m.documentElement,
                d, e, f, g, h, k;
            a.setAttribute("className", "t");
            a.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
            d = a.getElementsByTagName("*");
            e = a.getElementsByTagName("a")[0];
            if (!d || !d.length || !e) return {};
            f = m.createElement("select");
            g = f.appendChild(m.createElement("option"));
            d = a.getElementsByTagName("input")[0];
            h = {
                leadingWhitespace: 3 ===
                    a.firstChild.nodeType,
                tbody: !a.getElementsByTagName("tbody").length,
                htmlSerialize: !!a.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: "/a" === e.getAttribute("href"),
                opacity: /^0.55$/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: "on" === d.value,
                optSelected: g.selected,
                getSetAttribute: "t" !== a.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            d.checked = !0;
            h.noCloneChecked = d.cloneNode(!0).checked;
            f.disabled = !0;
            h.optDisabled = !g.disabled;
            try {
                delete a.test
            } catch (l) {
                h.deleteExpando = !1
            }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function() {
                h.noCloneEvent = !1
            }), a.cloneNode(!0).fireEvent("onclick"));
            d = m.createElement("input");
            d.value = "t";
            d.setAttribute("type", "radio");
            h.radioValue = "t" === d.value;
            d.setAttribute("checked", "checked");
            a.appendChild(d);
            e = m.createDocumentFragment();
            e.appendChild(a.firstChild);
            h.checkClone =
                e.cloneNode(!0).cloneNode(!0).lastChild.checked;
            a.innerHTML = "";
            a.style.width = a.style.paddingLeft = "1px";
            f = m.getElementsByTagName("body")[0];
            e = m.createElement(f ? "div" : "body");
            g = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            f && c.extend(g, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (k in g) e.style[k] = g[k];
            e.appendChild(a);
            b = f || b;
            b.insertBefore(e, b.firstChild);
            h.appendChecked = d.checked;
            c.boxModel = h.boxModel = "CSS1Compat" === m.compatMode;
            "zoom" in a.style && (a.style.display =
                "inline", a.style.zoom = 1, h.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e", h.shrinkWrapBlocks = 2 !== a.offsetWidth);
            a.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
            f = a.getElementsByTagName("td");
            d = 0 === f[0].offsetHeight;
            f[0].style.display = "";
            f[1].style.display = "none";
            h.reliableHiddenOffsets = d && 0 === f[0].offsetHeight;
            a.innerHTML = "";
            m.defaultView &&
                m.defaultView.getComputedStyle && (d = m.createElement("div"), d.style.width = "0", d.style.marginRight = "0", a.appendChild(d), h.reliableMarginRight = 0 === (parseInt((m.defaultView.getComputedStyle(d, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0));
            e.innerHTML = "";
            b.removeChild(e);
            if (a.attachEvent)
                for (k in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) b = "on" + k, d = b in a, d || (a.setAttribute(b, "return;"), d = "function" === typeof a[b]), h[k + "Bubbles"] = d;
            e = e = f = g = f = d = a = d = null;
            return h
        }();
        var kb = /^(?:\{.*\}|\[.*\])$/,
            jb = /([A-Z])/g;
        c.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
                return !!a && !V(a)
            },
            data: function(a, b, d, e) {
                if (c.acceptData(a)) {
                    var f = c.expando,
                        g = "string" === typeof b,
                        h = a.nodeType,
                        k = h ? c.cache : a,
                        l = h ? a[c.expando] : a[c.expando] && c.expando;
                    if (!(!l || e && l && k[l] && !k[l][f]) || !g || d !== p) {
                        l || (h ? a[c.expando] = l = ++c.uuid : l = c.expando);
                        k[l] || (k[l] = {}, h || (k[l].toJSON =
                            c.noop));
                        if ("object" === typeof b || "function" === typeof b) e ? k[l][f] = c.extend(k[l][f], b) : k[l] = c.extend(k[l], b);
                        a = k[l];
                        e && (a[f] || (a[f] = {}), a = a[f]);
                        d !== p && (a[c.camelCase(b)] = d);
                        if ("events" === b && !a[b]) return a[f] && a[f].events;
                        g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
                        return d
                    }
                }
            },
            removeData: function(a, b, d) {
                if (c.acceptData(a)) {
                    var e, f = c.expando,
                        g = a.nodeType,
                        h = g ? c.cache : a,
                        k = g ? a[c.expando] : c.expando;
                    if (h[k]) {
                        if (b && (e = d ? h[k][f] : h[k]) && (e[b] || (b = c.camelCase(b)), delete e[b], !V(e)) || d && (delete h[k][f], !V(h[k]))) return;
                        b = h[k][f];
                        c.support.deleteExpando || !h.setInterval ? delete h[k] : h[k] = null;
                        b ? (h[k] = {}, g || (h[k].toJSON = c.noop), h[k][f] = b) : g && (c.support.deleteExpando ? delete a[c.expando] : a.removeAttribute ? a.removeAttribute(c.expando) : a[c.expando] = null)
                    }
                }
            },
            _data: function(a, b, d) {
                return c.data(a, b, d, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = c.noData[a.nodeName.toLowerCase()];
                    if (b) return !(!0 === b || a.getAttribute("classid") !== b)
                }
                return !0
            }
        });
        c.fn.extend({
            data: function(a, b) {
                var d = null;
                if ("undefined" === typeof a) {
                    if (this.length &&
                        (d = c.data(this[0]), 1 === this[0].nodeType))
                        for (var e = this[0].attributes, f, g = 0, h = e.length; g < h; g++) f = e[g].name, 0 === f.indexOf("data-") && (f = c.camelCase(f.substring(5)), A(this[0], f, d[f]));
                    return d
                }
                if ("object" === typeof a) return this.each(function() {
                    c.data(this, a)
                });
                var k = a.split(".");
                k[1] = k[1] ? "." + k[1] : "";
                return b === p ? (d = this.triggerHandler("getData" + k[1] + "!", [k[0]]), d === p && this.length && (d = c.data(this[0], a), d = A(this[0], a, d)), d === p && k[1] ? this.data(k[0]) : d) : this.each(function() {
                    var d = c(this),
                        e = [k[0], b];
                    d.triggerHandler("setData" +
                        k[1] + "!", e);
                    c.data(this, a, b);
                    d.triggerHandler("changeData" + k[1] + "!", e)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    c.removeData(this, a)
                })
            }
        });
        c.extend({
            _mark: function(a, b) {
                a && (b = (b || "fx") + "mark", c.data(a, b, (c.data(a, b, p, !0) || 0) + 1, !0))
            },
            _unmark: function(a, b, d) {
                !0 !== a && (d = b, b = a, a = !1);
                if (b) {
                    d = d || "fx";
                    var e = d + "mark";
                    (a = a ? 0 : (c.data(b, e, p, !0) || 1) - 1) ? c.data(b, e, a, !0): (c.removeData(b, e, !0), xa(b, d, "mark"))
                }
            },
            queue: function(a, b, d) {
                if (a) {
                    b = (b || "fx") + "queue";
                    var e = c.data(a, b, p, !0);
                    d && (!e || c.isArray(d) ?
                        e = c.data(a, b, c.makeArray(d), !0) : e.push(d));
                    return e || []
                }
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var d = c.queue(a, b),
                    e = d.shift();
                "inprogress" === e && (e = d.shift());
                e && ("fx" === b && d.unshift("inprogress"), e.call(a, function() {
                    c.dequeue(a, b)
                }));
                d.length || (c.removeData(a, b + "queue", !0), xa(a, b, "queue"))
            }
        });
        c.fn.extend({
            queue: function(a, b) {
                "string" !== typeof a && (b = a, a = "fx");
                return b === p ? c.queue(this[0], a) : this.each(function() {
                    var d = c.queue(this, a, b);
                    "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    c.dequeue(this,
                        a)
                })
            },
            delay: function(a, b) {
                a = c.fx ? c.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function() {
                    var d = this;
                    setTimeout(function() {
                        c.dequeue(d, b)
                    }, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                function d() {
                    --g || e.resolveWith(f, [f])
                }
                "string" !== typeof a && (a = p);
                a = a || "fx";
                var e = c.Deferred(),
                    f = this;
                b = f.length;
                var g = 1,
                    h = a + "defer",
                    k = a + "queue";
                a += "mark";
                for (var l; b--;)
                    if (l = c.data(f[b], h, p, !0) || (c.data(f[b], k, p, !0) || c.data(f[b], a, p, !0)) && c.data(f[b], h, c._Deferred(), !0)) g++,
                        l.done(d);
                d();
                return e.promise()
            }
        });
        var Qa = /[\n\t\r]/g,
            ra = /\s+/,
            Ab = /\r/g,
            Bb = /^(?:button|input)$/i,
            Cb = /^(?:button|input|object|select|textarea)$/i,
            Db = /^a(?:rea)?$/i,
            Ra = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            L, Sa;
        c.fn.extend({
            attr: function(a, b) {
                return c.access(this, a, b, !0, c.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    c.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return c.access(this, a, b, !0, c.prop)
            },
            removeProp: function(a) {
                a =
                    c.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = p, delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, d, e, f, g, h, k;
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).addClass(a.call(this, b, this.className))
                });
                if (a && "string" === typeof a)
                    for (b = a.split(ra), d = 0, e = this.length; d < e; d++)
                        if (f = this[d], 1 === f.nodeType)
                            if (f.className || 1 !== b.length) {
                                g = " " + f.className + " ";
                                h = 0;
                                for (k = b.length; h < k; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                                f.className = c.trim(g)
                            } else f.className = a;
                return this
            },
            removeClass: function(a) {
                var b,
                    d, e, f, g, h, k;
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).removeClass(a.call(this, b, this.className))
                });
                if (a && "string" === typeof a || a === p)
                    for (b = (a || "").split(ra), d = 0, e = this.length; d < e; d++)
                        if (f = this[d], 1 === f.nodeType && f.className)
                            if (a) {
                                g = (" " + f.className + " ").replace(Qa, " ");
                                h = 0;
                                for (k = b.length; h < k; h++) g = g.replace(" " + b[h] + " ", " ");
                                f.className = c.trim(g)
                            } else f.className = "";
                return this
            },
            toggleClass: function(a, b) {
                var d = typeof a,
                    e = "boolean" === typeof b;
                return c.isFunction(a) ? this.each(function(d) {
                    c(this).toggleClass(a.call(this,
                        d, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === d)
                        for (var f, g = 0, h = c(this), k = b, l = a.split(ra); f = l[g++];) k = e ? k : !h.hasClass(f), h[k ? "addClass" : "removeClass"](f);
                    else if ("undefined" === d || "boolean" === d) this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                a = " " + a + " ";
                for (var b = 0, c = this.length; b < c; b++)
                    if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Qa, " ").indexOf(a)) return !0;
                return !1
            },
            val: function(a) {
                var b, d, e = this[0];
                if (!arguments.length) {
                    if (e) {
                        if ((b = c.valHooks[e.nodeName.toLowerCase()] || c.valHooks[e.type]) && "get" in b && (d = b.get(e, "value")) !== p) return d;
                        d = e.value;
                        return "string" === typeof d ? d.replace(Ab, "") : null == d ? "" : d
                    }
                    return p
                }
                var f = c.isFunction(a);
                return this.each(function(d) {
                    var e = c(this);
                    1 === this.nodeType && (d = f ? a.call(this, d, e.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) && (d = c.map(d, function(a) {
                            return null == a ? "" : a + ""
                        })), b = c.valHooks[this.nodeName.toLowerCase()] ||
                        c.valHooks[this.type], b && "set" in b && b.set(this, d, "value") !== p || (this.value = d))
                })
            }
        });
        c.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, d = a.selectedIndex,
                            e = [],
                            f = a.options;
                        a = "select-one" === a.type;
                        if (0 > d) return null;
                        for (var g = a ? d : 0, h = a ? d + 1 : f.length; g < h; g++)
                            if (b = f[g], !(!b.selected || (c.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
                                b = c(b).val();
                                if (a) return b;
                                e.push(b)
                            }
                        return a && !e.length && f.length ? c(f[d]).val() : e
                    },
                    set: function(a, b) {
                        var d = c.makeArray(b);
                        c(a).find("option").each(function() {
                            this.selected = 0 <= c.inArray(c(this).val(), d)
                        });
                        d.length || (a.selectedIndex = -1);
                        return d
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function(a, b, d, e) {
                var f = a.nodeType;
                if (!a || 3 === f || 8 === f || 2 === f) return p;
                if (e && b in c.attrFn) return c(a)[b](d);
                if (!("getAttribute" in a)) return c.prop(a, b, d);
                var g, h;
                if (e = 1 !== f || !c.isXMLDoc(a)) b = c.attrFix[b] || b, (h = c.attrHooks[b]) || (Ra.test(b) ? h = Sa : L && (h = L));
                if (d !== p) {
                    if (null === d) return c.removeAttr(a, b), p;
                    if (h && "set" in h && e && (g = h.set(a, d, b)) !== p) return g;
                    a.setAttribute(b, "" + d);
                    return d
                }
                if (h && "get" in h && e && null !== (g = h.get(a, b))) return g;
                g = a.getAttribute(b);
                return null === g ? p : g
            },
            removeAttr: function(a, b) {
                var d;
                1 === a.nodeType && (b = c.attrFix[b] || b, c.attr(a, b, ""), a.removeAttribute(b), Ra.test(b) && (d = c.propFix[b] || b) in a && (a[d] = !1))
            },
            attrHooks: {
                type: {
                    set: function(a,
                        b) {
                        if (Bb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
                        else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                            var d = a.value;
                            a.setAttribute("type", b);
                            d && (a.value = d);
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return L && c.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, d) {
                        if (L && c.nodeName(a, "button")) return L.set(a, b, d);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, d) {
                var e = a.nodeType;
                if (!a || 3 === e || 8 === e || 2 === e) return p;
                var f, g;
                1 === e && c.isXMLDoc(a) || (b = c.propFix[b] || b, g = c.propHooks[b]);
                return d !== p ? g && "set" in g && (f = g.set(a, d, b)) !== p ? f : a[b] = d : g && "get" in g && null !== (f = g.get(a, b)) ? f : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Cb.test(a.nodeName) ||
                            Db.test(a.nodeName) && a.href ? 0 : p
                    }
                }
            }
        });
        c.attrHooks.tabIndex = c.propHooks.tabIndex;
        Sa = {
            get: function(a, b) {
                var d;
                return !0 === c.prop(a, b) || (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : p
            },
            set: function(a, b, d) {
                !1 === b ? c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
                return d
            }
        };
        c.support.getSetAttribute || (L = c.valHooks.button = {
            get: function(a, b) {
                return (a = a.getAttributeNode(b)) && "" !== a.nodeValue ? a.nodeValue : p
            },
            set: function(a, b, c) {
                var e = a.getAttributeNode(c);
                e || (e = m.createAttribute(c), a.setAttributeNode(e));
                return e.nodeValue = b + ""
            }
        }, c.each(["width", "height"], function(a, b) {
            c.attrHooks[b] = c.extend(c.attrHooks[b], {
                set: function(a, c) {
                    if ("" === c) return a.setAttribute(b, "auto"), c
                }
            })
        }));
        c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
            c.attrHooks[b] = c.extend(c.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return null === a ? p : a
                }
            })
        });
        c.support.style || (c.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || p
            },
            set: function(a,
                b) {
                return a.style.cssText = "" + b
            }
        });
        c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
                return null
            }
        }));
        c.support.checkOn || c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = {
                get: function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            }
        });
        c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = c.extend(c.valHooks[this], {
                set: function(a, b) {
                    if (c.isArray(b)) return a.checked = 0 <=
                        c.inArray(c(a).val(), b)
                }
            })
        });
        var ja = /\.(.*)$/,
            sa = /^(?:textarea|input|select)$/i,
            mb = /\./g,
            nb = / /g,
            Eb = /[^\w\s.|`]/g,
            Fb = function(a) {
                return a.replace(Eb, "\\$\x26")
            };
        c.event = {
            add: function(a, b, d, e) {
                if (3 !== a.nodeType && 8 !== a.nodeType) {
                    if (!1 === d) d = I;
                    else if (!d) return;
                    var f, g;
                    d.handler && (f = d, d = f.handler);
                    d.guid || (d.guid = c.guid++);
                    if (g = c._data(a)) {
                        var h = g.events,
                            k = g.handle;
                        h || (g.events = h = {});
                        k || (g.handle = k = function(a) {
                            return "undefined" === typeof c || a && c.event.triggered === a.type ? p : c.event.handle.apply(k.elem,
                                arguments)
                        });
                        k.elem = a;
                        b = b.split(" ");
                        for (var l, n = 0, q; l = b[n++];) {
                            g = f ? c.extend({}, f) : {
                                handler: d,
                                data: e
                            }; - 1 < l.indexOf(".") ? (q = l.split("."), l = q.shift(), g.namespace = q.slice(0).sort().join(".")) : (q = [], g.namespace = "");
                            g.type = l;
                            g.guid || (g.guid = d.guid);
                            var m = h[l],
                                r = c.event.special[l] || {};
                            m || (m = h[l] = [], r.setup && !1 !== r.setup.call(a, e, q, k) || (a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)));
                            r.add && (r.add.call(a, g), g.handler.guid || (g.handler.guid = d.guid));
                            m.push(g);
                            c.event.global[l] = !0
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function(a, b, d, e) {
                if (3 !== a.nodeType && 8 !== a.nodeType) {
                    !1 === d && (d = I);
                    var f, g, h = 0,
                        k, l, n, q, m, r, v = c.hasData(a) && c._data(a),
                        y = v && v.events;
                    if (v && y)
                        if (b && b.type && (d = b.handler, b = b.type), !b || "string" === typeof b && "." === b.charAt(0))
                            for (f in b = b || "", y) c.event.remove(a, f + b);
                        else {
                            for (b = b.split(" "); f = b[h++];)
                                if (q = f, k = 0 > f.indexOf("."), l = [], k || (l = f.split("."), f = l.shift(), n = new RegExp("(^|\\.)" + c.map(l.slice(0).sort(), Fb).join("\\.(?:.*\\.)?") + "(\\.|$)")), m = y[f])
                                    if (d) {
                                        q = c.event.special[f] || {};
                                        for (g = e || 0; g < m.length; g++)
                                            if (r = m[g], d.guid === r.guid) {
                                                if (k || n.test(r.namespace)) null == e && m.splice(g--, 1), q.remove && q.remove.call(a, r);
                                                if (null != e) break
                                            }
                                        if (0 === m.length || null != e && 1 === m.length) q.teardown && !1 !== q.teardown.call(a, l) || c.removeEvent(a, f, v.handle), delete y[f]
                                    } else
                                        for (g = 0; g < m.length; g++)
                                            if (r = m[g], k || n.test(r.namespace)) c.event.remove(a, q, r.handler, g), m.splice(g--, 1);
                            if (c.isEmptyObject(y)) {
                                if (b = v.handle) b.elem = null;
                                delete v.events;
                                delete v.handle;
                                c.isEmptyObject(v) && c.removeData(a, p, !0)
                            }
                        }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(a, b, d, e) {
                var f = a.type || a,
                    g = [],
                    h;
                0 <= f.indexOf("!") && (f = f.slice(0, -1), h = !0);
                0 <= f.indexOf(".") && (g = f.split("."), f = g.shift(), g.sort());
                if (d && !c.event.customEvent[f] || c.event.global[f]) {
                    a = "object" === typeof a ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f);
                    a.type = f;
                    a.exclusive = h;
                    a.namespace = g.join(".");
                    a.namespace_re = new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (e || !d) a.preventDefault(), a.stopPropagation();
                    if (!d) c.each(c.cache,
                        function() {
                            var d = this[c.expando];
                            d && d.events && d.events[f] && c.event.trigger(a, b, d.handle.elem)
                        });
                    else if (3 !== d.nodeType && 8 !== d.nodeType) {
                        a.result = p;
                        a.target = d;
                        b = null != b ? c.makeArray(b) : [];
                        b.unshift(a);
                        g = d;
                        e = 0 > f.indexOf(":") ? "on" + f : "";
                        do h = c._data(g, "handle"), a.currentTarget = g, h && h.apply(g, b), e && c.acceptData(g) && g[e] && !1 === g[e].apply(g, b) && (a.result = !1, a.preventDefault()), g = g.parentNode || g.ownerDocument || g === a.target.ownerDocument && r; while (g && !a.isPropagationStopped());
                        if (!a.isDefaultPrevented()) {
                            var k,
                                g = c.event.special[f] || {};
                            if (!(g._default && !1 !== g._default.call(d.ownerDocument, a) || "click" === f && c.nodeName(d, "a")) && c.acceptData(d)) {
                                try {
                                    e && d[f] && ((k = d[e]) && (d[e] = null), c.event.triggered = f, d[f]())
                                } catch (l) {}
                                k && (d[e] = k);
                                c.event.triggered = p
                            }
                        }
                        return a.result
                    }
                }
            },
            handle: function(a) {
                a = c.event.fix(a || r.event);
                var b = ((c._data(this, "events") || {})[a.type] || []).slice(0),
                    d = !a.exclusive && !a.namespace,
                    e = Array.prototype.slice.call(arguments, 0);
                e[0] = a;
                a.currentTarget = this;
                for (var f = 0, g = b.length; f < g; f++) {
                    var h = b[f];
                    if (d || a.namespace_re.test(h.namespace))
                        if (a.handler = h.handler, a.data = h.data, a.handleObj = h, h = h.handler.apply(this, e), h !== p && (a.result = h, !1 === h && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped()) break
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(a) {
                if (a[c.expando]) return a;
                var b = a;
                a = c.Event(b);
                for (var d = this.props.length, e; d;) e = this.props[--d], a[e] = b[e];
                a.target || (a.target = a.srcElement || m);
                3 === a.target.nodeType && (a.target = a.target.parentNode);
                !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
                null == a.pageX && null != a.clientX && (d = a.target.ownerDocument || m, b = d.documentElement, d = d.body, a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0), a.pageY =
                    a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0));
                null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode);
                !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
                a.which || a.button === p || (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
                return a
            },
            guid: 1E8,
            proxy: c.proxy,
            special: {
                ready: {
                    setup: c.bindReady,
                    teardown: c.noop
                },
                live: {
                    add: function(a) {
                        c.event.add(this, aa(a.origType, a.selector), c.extend({}, a, {
                            handler: lb,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function(a) {
                        c.event.remove(this,
                            aa(a.origType, a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function(a, b, d) {
                        c.isWindow(this) && (this.onbeforeunload = d)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            }
        };
        c.removeEvent = m.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        c.Event = function(a, b) {
            if (!this.preventDefault) return new c.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
                !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? Z : I) : this.type = a;
            b && c.extend(this, b);
            this.timeStamp = c.now();
            this[c.expando] = !0
        };
        c.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = Z;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = Z;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped =
                    Z;
                this.stopPropagation()
            },
            isDefaultPrevented: I,
            isPropagationStopped: I,
            isImmediatePropagationStopped: I
        };
        var Ta = function(a) {
                var b = a.relatedTarget,
                    d = !1,
                    e = a.type;
                a.type = a.data;
                b !== this && (b && (d = c.contains(this, b)), d || (c.event.handle.apply(this, arguments), a.type = e))
            },
            Ua = function(a) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            };
        c.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            c.event.special[a] = {
                setup: function(d) {
                    c.event.add(this, b, d && d.selector ? Ua : Ta, a)
                },
                teardown: function(a) {
                    c.event.remove(this,
                        b, a && a.selector ? Ua : Ta)
                }
            }
        });
        c.support.submitBubbles || (c.event.special.submit = {
            setup: function(a, b) {
                if (c.nodeName(this, "form")) return !1;
                c.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target,
                        f = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.type : "";
                    "submit" !== f && "image" !== f || !c(b).closest("form").length || ya("submit", this, arguments)
                });
                c.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target,
                        f = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.type : "";
                    "text" !== f && "password" !== f || !c(b).closest("form").length ||
                        13 !== a.keyCode || ya("submit", this, arguments)
                })
            },
            teardown: function(a) {
                c.event.remove(this, ".specialSubmit")
            }
        });
        if (!c.support.changeBubbles) {
            var Y, Va = function(a) {
                    var b = c.nodeName(a, "input") ? a.type : "",
                        d = a.value;
                    "radio" === b || "checkbox" === b ? d = a.checked : "select-multiple" === b ? d = -1 < a.selectedIndex ? c.map(a.options, function(a) {
                        return a.selected
                    }).join("-") : "" : c.nodeName(a, "select") && (d = a.selectedIndex);
                    return d
                },
                ga = function(a, b) {
                    var d = a.target,
                        e, f;
                    sa.test(d.nodeName) && !d.readOnly && (e = c._data(d, "_change_data"),
                        f = Va(d), "focusout" === a.type && "radio" === d.type || c._data(d, "_change_data", f), e === p || f === e || null == e && !f || (a.type = "change", a.liveFired = p, c.event.trigger(a, b, d)))
                };
            c.event.special.change = {
                filters: {
                    focusout: ga,
                    beforedeactivate: ga,
                    click: function(a) {
                        var b = a.target,
                            d = c.nodeName(b, "input") ? b.type : "";
                        ("radio" === d || "checkbox" === d || c.nodeName(b, "select")) && ga.call(this, a)
                    },
                    keydown: function(a) {
                        var b = a.target,
                            d = c.nodeName(b, "input") ? b.type : "";
                        (13 === a.keyCode && !c.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" ===
                            d || "radio" === d) || "select-multiple" === d) && ga.call(this, a)
                    },
                    beforeactivate: function(a) {
                        a = a.target;
                        c._data(a, "_change_data", Va(a))
                    }
                },
                setup: function(a, b) {
                    if ("file" === this.type) return !1;
                    for (var d in Y) c.event.add(this, d + ".specialChange", Y[d]);
                    return sa.test(this.nodeName)
                },
                teardown: function(a) {
                    c.event.remove(this, ".specialChange");
                    return sa.test(this.nodeName)
                }
            };
            Y = c.event.special.change.filters;
            Y.focus = Y.beforeactivate
        }
        c.support.focusinBubbles || c.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            function d(a) {
                var d =
                    c.event.fix(a);
                d.type = b;
                d.originalEvent = {};
                c.event.trigger(d, null, d.target);
                d.isDefaultPrevented() && a.preventDefault()
            }
            var e = 0;
            c.event.special[b] = {
                setup: function() {
                    0 === e++ && m.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --e && m.removeEventListener(a, d, !0)
                }
            }
        });
        c.each(["bind", "one"], function(a, b) {
            c.fn[b] = function(a, e, f) {
                var g;
                if ("object" === typeof a) {
                    for (var h in a) this[b](h, e, a[h], f);
                    return this
                }
                if (2 === arguments.length || !1 === e) f = e, e = p;
                "one" === b ? (g = function(a) {
                    c(this).unbind(a, g);
                    return f.apply(this,
                        arguments)
                }, g.guid = f.guid || c.guid++) : g = f;
                if ("unload" === a && "one" !== b) this.one(a, e, f);
                else {
                    h = 0;
                    for (var k = this.length; h < k; h++) c.event.add(this[h], a, g, e)
                }
                return this
            }
        });
        c.fn.extend({
            unbind: function(a, b) {
                if ("object" !== typeof a || a.preventDefault)
                    for (var d = 0, e = this.length; d < e; d++) c.event.remove(this[d], a, b);
                else
                    for (d in a) this.unbind(d, a[d]);
                return this
            },
            delegate: function(a, b, c, e) {
                return this.live(b, c, e, a)
            },
            undelegate: function(a, b, c) {
                return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    c.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return c.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    d = a.guid || c.guid++,
                    e = 0,
                    f = function(d) {
                        var f = (c.data(this, "lastToggle" + a.guid) || 0) % e;
                        c.data(this, "lastToggle" + a.guid, f + 1);
                        d.preventDefault();
                        return b[f].apply(this, arguments) || !1
                    };
                for (f.guid = d; e < b.length;) b[e++].guid = d;
                return this.click(f)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var ta = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        c.each(["live", "die"], function(a, b) {
            c.fn[b] = function(a, e, f, g) {
                var h = 0,
                    k, l, n = g || this.selector,
                    q = g ? this : c(this.context);
                if ("object" === typeof a && !a.preventDefault) {
                    for (k in a) q[b](k, e, a[k], n);
                    return this
                }
                if ("die" === b && !a && g && "." === g.charAt(0)) return q.unbind(g), this;
                if (!1 === e || c.isFunction(e)) f = e || I, e = p;
                for (a = (a || "").split(" "); null != (g = a[h++]);)
                    if (k = ja.exec(g), l = "", k && (l = k[0], g = g.replace(ja, "")), "hover" === g) a.push("mouseenter" +
                        l, "mouseleave" + l);
                    else if (k = g, ta[g] ? (a.push(ta[g] + l), g += l) : g = (ta[g] || g) + l, "live" === b) {
                    l = 0;
                    for (var m = q.length; l < m; l++) c.event.add(q[l], "live." + aa(g, n), {
                        data: e,
                        selector: n,
                        handler: f,
                        origType: g,
                        origHandler: f,
                        preType: k
                    })
                } else q.unbind("live." + aa(g, n), f);
                return this
            }
        });
        c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
            c.fn[b] = function(a,
                c) {
                null == c && (c = a, a = null);
                return 0 < arguments.length ? this.bind(b, a, c) : this.trigger(b)
            };
            c.attrFn && (c.attrFn[b] = !0)
        });
        (function() {
            function a(a, b, c, d, e, f) {
                e = 0;
                for (var g = d.length; e < g; e++) {
                    var h = d[e];
                    if (h) {
                        for (var k = !1, h = h[a]; h;) {
                            if (h.sizcache === c) {
                                k = d[h.sizset];
                                break
                            }
                            1 !== h.nodeType || f || (h.sizcache = c, h.sizset = e);
                            if (h.nodeName.toLowerCase() === b) {
                                k = h;
                                break
                            }
                            h = h[a]
                        }
                        d[e] = k
                    }
                }
            }

            function b(a, b, c, d, e, f) {
                e = 0;
                for (var g = d.length; e < g; e++) {
                    var h = d[e];
                    if (h) {
                        for (var k = !1, h = h[a]; h;) {
                            if (h.sizcache === c) {
                                k = d[h.sizset];
                                break
                            }
                            if (1 ===
                                h.nodeType)
                                if (f || (h.sizcache = c, h.sizset = e), "string" !== typeof b) {
                                    if (h === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (0 < n.filter(b, [h]).length) {
                                k = h;
                                break
                            }
                            h = h[a]
                        }
                        d[e] = k
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = 0,
                f = Object.prototype.toString,
                g = !1,
                h = !0,
                k = /\\/g,
                l = /\W/;
            [0, 0].sort(function() {
                h = !1;
                return 0
            });
            var n = function(a, b, c, e) {
                c = c || [];
                var g = b = b || m;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" !== typeof a) return c;
                var h, k, l, p, D, v = !0,
                    w = n.isXML(b),
                    u = [],
                    z = a;
                do
                    if (d.exec(""), h = d.exec(z))
                        if (z = h[3], u.push(h[1]), h[2]) {
                            p = h[3];
                            break
                        }
                while (h);
                if (1 < u.length && r.exec(a))
                    if (2 === u.length && q.relative[u[0]]) k = A(u[0] + u[1], b);
                    else
                        for (k = q.relative[u[0]] ? [b] : n(u.shift(), b); u.length;) a = u.shift(), q.relative[a] && (a += u.shift()), k = A(a, k);
                else if (!e && 1 < u.length && 9 === b.nodeType && !w && q.match.ID.test(u[0]) && !q.match.ID.test(u[u.length - 1]) && (h = n.find(u.shift(), b, w), b = h.expr ? n.filter(h.expr, h.set)[0] : h.set[0]), b)
                    for (h = e ? {
                            expr: u.pop(),
                            set: y(e)
                        } :
                        n.find(u.pop(), 1 !== u.length || "~" !== u[0] && "+" !== u[0] || !b.parentNode ? b : b.parentNode, w), k = h.expr ? n.filter(h.expr, h.set) : h.set, 0 < u.length ? l = y(k) : v = !1; u.length;) h = D = u.pop(), q.relative[D] ? h = u.pop() : D = "", null == h && (h = b), q.relative[D](l, h, w);
                else l = [];
                l || (l = k);
                l || n.error(D || a);
                if ("[object Array]" === f.call(l))
                    if (v)
                        if (b && 1 === b.nodeType)
                            for (a = 0; null != l[a]; a++) l[a] && (!0 === l[a] || 1 === l[a].nodeType && n.contains(b, l[a])) && c.push(k[a]);
                        else
                            for (a = 0; null != l[a]; a++) l[a] && 1 === l[a].nodeType && c.push(k[a]);
                else c.push.apply(c,
                    l);
                else y(l, c);
                p && (n(p, g, c, e), n.uniqueSort(c));
                return c
            };
            n.uniqueSort = function(a) {
                if (w && (g = h, a.sort(w), g))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            };
            n.matches = function(a, b) {
                return n(a, null, null, b)
            };
            n.matchesSelector = function(a, b) {
                return 0 < n(b, null, null, [a]).length
            };
            n.find = function(a, b, c) {
                var d;
                if (!a) return [];
                for (var e = 0, f = q.order.length; e < f; e++) {
                    var g, h = q.order[e];
                    if (g = q.leftMatch[h].exec(a)) {
                        var l = g[1];
                        g.splice(1, 1);
                        if ("\\" !== l.substr(l.length - 1) && (g[1] = (g[1] || "").replace(k,
                                ""), d = q.find[h](g, b, c), null != d)) {
                            a = a.replace(q.match[h], "");
                            break
                        }
                    }
                }
                d || (d = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            };
            n.filter = function(a, b, c, d) {
                for (var e, f, g = a, h = [], k = b, l = b && b[0] && n.isXML(b[0]); a && b.length;) {
                    for (var m in q.filter)
                        if (null != (e = q.leftMatch[m].exec(a)) && e[2]) {
                            var r, u, D = q.filter[m];
                            u = e[1];
                            f = !1;
                            e.splice(1, 1);
                            if ("\\" !== u.substr(u.length - 1)) {
                                k === h && (h = []);
                                if (q.preFilter[m])
                                    if (e = q.preFilter[m](e, k, c, h, d, l), !e) f = r = !0;
                                    else if (!0 === e) continue;
                                if (e)
                                    for (var v = 0; null != (u = k[v]); v++)
                                        if (u) {
                                            r = D(u, e, v, k);
                                            var y = d ^ !!r;
                                            c && null != r ? y ? f = !0 : k[v] = !1 : y && (h.push(u), f = !0)
                                        }
                                if (r !== p) {
                                    c || (k = h);
                                    a = a.replace(q.match[m], "");
                                    if (!f) return [];
                                    break
                                }
                            }
                        }
                    if (a === g)
                        if (null == f) n.error(a);
                        else break;
                    g = a
                }
                return k
            };
            n.error = function(a) {
                throw "Syntax error, unrecognized expression: " + a;
            };
            var q = n.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c =
                                "string" === typeof b,
                                d = c && !l.test(b),
                                c = c && !d;
                            d && (b = b.toLowerCase());
                            for (var d = 0, e = a.length, f; d < e; d++)
                                if (f = a[d]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                            c && n.filter(b, a, !0)
                        },
                        "\x3e": function(a, b) {
                            var c, d = "string" === typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b))
                                for (b = b.toLowerCase(); e < f; e++) {
                                    if (c = a[e]) c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1
                                } else {
                                    for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                    d && n.filter(b, a, !0)
                                }
                        },
                        "": function(c,
                            d, f) {
                            var g, h = e++,
                                k = b;
                            "string" !== typeof d || l.test(d) || (g = d = d.toLowerCase(), k = a);
                            k("parentNode", d, h, c, g, f)
                        },
                        "~": function(c, d, f) {
                            var g, h = e++,
                                k = b;
                            "string" !== typeof d || l.test(d) || (g = d = d.toLowerCase(), k = a);
                            k("previousSibling", d, h, c, g, f)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if ("undefined" !== typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                        },
                        NAME: function(a, b) {
                            if ("undefined" !== typeof b.getElementsByName) {
                                var c = [];
                                b = b.getElementsByName(a[1]);
                                for (var d = 0, e = b.length; d < e; d++) b[d].getAttribute("name") ===
                                    a[1] && c.push(b[d]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(k, "") + " ";
                            if (f) return a;
                            f = 0;
                            for (var g; null != (g = b[f]); f++) g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(k, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(k, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if ("nth" ===
                                a[1]) {
                                a[2] || n.error(a[0]);
                                a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0;
                                a[3] = b[3] - 0
                            } else a[2] && n.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            b = a[1] = a[1].replace(k, "");
                            !f && q.attrMap[b] && (a[1] = q.attrMap[b]);
                            a[4] = (a[4] || a[5] || "").replace(k, "");
                            "~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function(a, b, c, e, f) {
                            if ("not" === a[1])
                                if (1 < (d.exec(a[3]) || "").length ||
                                    /^\w/.test(a[3])) a[3] = n(a[3], null, null, b);
                                else return a = n.filter(a[3], b, c, 1 ^ f), c || e.push.apply(e, a), !1;
                            else if (q.match.POS.test(a[0]) || q.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return !1 === a.disabled && "hidden" !== a.type
                        },
                        disabled: function(a) {
                            return !0 === a.disabled
                        },
                        checked: function(a) {
                            return !0 === a.checked
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return !0 === a.selected
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!n(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        radio: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        },
                        file: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        password: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        image: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return 0 === b
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return 0 === b % 2
                        },
                        odd: function(a, b) {
                            return 1 === b % 2
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = q.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return 0 <= (a.textContent || a.innerText ||
                                n.getText([a]) || "").indexOf(b[3]);
                            if ("not" === e) {
                                b = b[3];
                                c = 0;
                                for (d = b.length; c < d; c++)
                                    if (b[c] === a) return !1;
                                return !0
                            }
                            n.error(e)
                        },
                        CHILD: function(a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    for (; d = d.previousSibling;)
                                        if (1 === d.nodeType) return !1;
                                    if ("first" === c) return !0;
                                    d = a;
                                case "last":
                                    for (; d = d.nextSibling;)
                                        if (1 === d.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    var c = b[2],
                                        e = b[3];
                                    if (1 === c && 0 === e) return !0;
                                    b = b[0];
                                    var f = a.parentNode;
                                    if (f && (f.sizcache !== b || !a.nodeIndex)) {
                                        for (var g = 0, d = f.firstChild; d; d = d.nextSibling) 1 ===
                                            d.nodeType && (d.nodeIndex = ++g);
                                        f.sizcache = b
                                    }
                                    a = a.nodeIndex - e;
                                    return 0 === c ? 0 === a : 0 === a % c && 0 <= a / c
                            }
                        },
                        ID: function(a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
                        },
                        ATTR: function(a, b) {
                            var c = b[1];
                            a = q.attrHandle[c] ? q.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c);
                            var c = a + "",
                                d = b[2];
                            b = b[4];
                            return null == a ? "!\x3d" === d : "\x3d" === d ? c === b :
                                "*\x3d" === d ? 0 <= c.indexOf(b) : "~\x3d" === d ? 0 <= (" " + c + " ").indexOf(b) : b ? "!\x3d" === d ? c !== b : "^\x3d" === d ? 0 === c.indexOf(b) : "$\x3d" === d ? c.substr(c.length - b.length) === b : "|\x3d" === d ? c === b || c.substr(0, b.length + 1) === b + "-" : !1 : c && !1 !== a
                        },
                        POS: function(a, b, c, d) {
                            var e = q.setFilters[b[2]];
                            if (e) return e(a, c, b, d)
                        }
                    }
                },
                r = q.match.POS,
                D = function(a, b) {
                    return "\\" + (b - 0 + 1)
                },
                v;
            for (v in q.match) q.match[v] = new RegExp(q.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), q.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + q.match[v].source.replace(/\\(\d+)/g,
                D));
            var y = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                return b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(m.documentElement.childNodes, 0)[0].nodeType
            } catch (x) {
                y = function(a, b) {
                    var c = 0;
                    b = b || [];
                    if ("[object Array]" === f.call(a)) Array.prototype.push.apply(b, a);
                    else if ("number" === typeof a.length)
                        for (var d = a.length; c < d; c++) b.push(a[c]);
                    else
                        for (; a[c]; c++) b.push(a[c]);
                    return b
                }
            }
            var w, z;
            m.documentElement.compareDocumentPosition ? w = function(a, b) {
                return a === b ? (g = !0, 0) : a.compareDocumentPosition &&
                    b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : (w = function(a, b) {
                    if (a === b) return g = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [];
                    c = a.parentNode;
                    d = b.parentNode;
                    var h = c;
                    if (c === d) return z(a, b);
                    if (!c) return -1;
                    if (!d) return 1;
                    for (; h;) e.unshift(h), h = h.parentNode;
                    for (h = d; h;) f.unshift(h), h = h.parentNode;
                    c = e.length;
                    d = f.length;
                    for (h = 0; h < c && h < d; h++)
                        if (e[h] !== f[h]) return z(e[h], f[h]);
                    return h === c ? z(a, f[h], -1) : z(e[h], b, 1)
                },
                z = function(a, b, c) {
                    if (a === b) return c;
                    for (a = a.nextSibling; a;) {
                        if (a === b) return -1;
                        a = a.nextSibling
                    }
                    return 1
                });
            n.getText = function(a) {
                for (var b = "", c, d = 0; a[d]; d++) c = a[d], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += n.getText(c.childNodes));
                return b
            };
            (function() {
                var a = m.createElement("div"),
                    b = "script" + (new Date).getTime(),
                    c = m.documentElement;
                a.innerHTML = "\x3ca name\x3d'" + b + "'/\x3e";
                c.insertBefore(a, c.firstChild);
                m.getElementById(b) && (q.find.ID = function(a, b, c) {
                    if ("undefined" !== typeof b.getElementById &&
                        !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : p : []
                }, q.filter.ID = function(a, b) {
                    var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                    return 1 === a.nodeType && c && c.nodeValue === b
                });
                c.removeChild(a);
                c = a = null
            })();
            (function() {
                var a = m.createElement("div");
                a.appendChild(m.createComment(""));
                0 < a.getElementsByTagName("*").length && (q.find.TAG = function(a, b) {
                    b = b.getElementsByTagName(a[1]);
                    if ("*" === a[1]) {
                        a = [];
                        for (var c = 0; b[c]; c++) 1 === b[c].nodeType && a.push(b[c]);
                        b = a
                    }
                    return b
                });
                a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
                a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (q.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                });
                a = null
            })();
            m.querySelectorAll && function() {
                var a = n,
                    b = m.createElement("div");
                b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
                if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                    n = function(b, c, d, e) {
                        c = c || m;
                        if (!e && !n.isXML(c)) {
                            var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                                if (f[1]) return y(c.getElementsByTagName(b), d);
                                if (f[2] && q.find.CLASS && c.getElementsByClassName) return y(c.getElementsByClassName(f[2]), d)
                            }
                            if (9 === c.nodeType) {
                                if ("body" === b && c.body) return y([c.body], d);
                                if (f && f[3]) {
                                    var g = c.getElementById(f[3]);
                                    if (g && g.parentNode) {
                                        if (g.id === f[3]) return y([g], d)
                                    } else return y([], d)
                                }
                                try {
                                    return y(c.querySelectorAll(b), d)
                                } catch (h) {}
                            } else if (1 === c.nodeType && "object" !==
                                c.nodeName.toLowerCase()) {
                                var f = c,
                                    k = (g = c.getAttribute("id")) || "__sizzle__",
                                    l = c.parentNode,
                                    p = /^\s*[+~]/.test(b);
                                g ? k = k.replace(/'/g, "\\$\x26") : c.setAttribute("id", k);
                                p && l && (c = c.parentNode);
                                try {
                                    if (!p || l) return y(c.querySelectorAll("[id\x3d'" + k + "'] " + b), d)
                                } catch (h) {} finally {
                                    g || f.removeAttribute("id")
                                }
                            }
                        }
                        return a(b, c, d, e)
                    };
                    for (var c in a) n[c] = a[c];
                    b = null
                }
            }();
            (function() {
                var a = m.documentElement,
                    b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if (b) {
                    var c = !b.call(m.createElement("div"),
                            "div"),
                        d = !1;
                    try {
                        b.call(m.documentElement, "[test!\x3d'']:sizzle")
                    } catch (e) {
                        d = !0
                    }
                    n.matchesSelector = function(a, e) {
                        e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                        if (!n.isXML(a)) try {
                            if (d || !q.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                var f = b.call(a, e);
                                if (f || !c || a.document && 11 !== a.document.nodeType) return f
                            }
                        } catch (g) {}
                        return 0 < n(e, null, null, [a]).length
                    }
                }
            })();
            (function() {
                var a = m.createElement("div");
                a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
                a.getElementsByClassName &&
                    0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (q.order.splice(1, 0, "CLASS"), q.find.CLASS = function(a, b, c) {
                        if ("undefined" !== typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
                    }, a = null))
            })();
            n.contains = m.documentElement.contains ? function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
            } : m.documentElement.compareDocumentPosition ? function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : function() {
                return !1
            };
            n.isXML = function(a) {
                return (a =
                    (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
            };
            var A = function(a, b) {
                var c, d = [],
                    e = "";
                for (b = b.nodeType ? [b] : b; c = q.match.PSEUDO.exec(a);) e += c[0], a = a.replace(q.match.PSEUDO, "");
                a = q.relative[a] ? a + "*" : a;
                c = 0;
                for (var f = b.length; c < f; c++) n(a, b[c], d);
                return n.filter(e, d)
            };
            c.find = n;
            c.expr = n.selectors;
            c.expr[":"] = c.expr.filters;
            c.unique = n.uniqueSort;
            c.text = n.getText;
            c.isXMLDoc = n.isXML;
            c.contains = n.contains
        })();
        var Gb = /Until$/,
            Hb = /^(?:parents|prevUntil|prevAll)/,
            Ib = /,/,
            ob = /^.[^:#\[\.,]*$/,
            Jb = Array.prototype.slice,
            Wa = c.expr.match.POS,
            Kb = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        c.fn.extend({
            find: function(a) {
                var b = this,
                    d, e;
                if ("string" !== typeof a) return c(a).filter(function() {
                    d = 0;
                    for (e = b.length; d < e; d++)
                        if (c.contains(b[d], this)) return !0
                });
                var f = this.pushStack("", "find", a),
                    g, h, k;
                d = 0;
                for (e = this.length; d < e; d++)
                    if (g = f.length, c.find(a, this[d], f), 0 < d)
                        for (h = g; h < f.length; h++)
                            for (k = 0; k < g; k++)
                                if (f[k] === f[h]) {
                                    f.splice(h--, 1);
                                    break
                                }
                return f
            },
            has: function(a) {
                var b = c(a);
                return this.filter(function() {
                    for (var a = 0, e = b.length; a <
                        e; a++)
                        if (c.contains(this, b[a])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(Aa(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(Aa(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && ("string" === typeof a ? 0 < c.filter(a, this).length : 0 < this.filter(a).length)
            },
            closest: function(a, b) {
                var d = [],
                    e, f, g = this[0];
                if (c.isArray(a)) {
                    var h, k = {},
                        l = 1;
                    if (g && a.length) {
                        e = 0;
                        for (f = a.length; e < f; e++) h = a[e], k[h] || (k[h] = Wa.test(h) ? c(h, b || this.context) : h);
                        for (; g && g.ownerDocument && g !== b;) {
                            for (h in k) a = k[h], (a.jquery ?
                                -1 < a.index(g) : c(g).is(a)) && d.push({
                                selector: h,
                                elem: g,
                                level: l
                            });
                            g = g.parentNode;
                            l++
                        }
                    }
                    return d
                }
                h = Wa.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0;
                e = 0;
                for (f = this.length; e < f; e++)
                    for (g = this[e]; g;)
                        if (h ? -1 < h.index(g) : c.find.matchesSelector(g, a)) {
                            d.push(g);
                            break
                        } else if (g = g.parentNode, !g || !g.ownerDocument || g === b || 11 === g.nodeType) break;
                d = 1 < d.length ? c.unique(d) : d;
                return this.pushStack(d, "closest", a)
            },
            index: function(a) {
                return a ? "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) :
                    this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(a, b) {
                a = "string" === typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a);
                b = c.merge(this.get(), a);
                return this.pushStack(za(a[0]) || za(b[0]) ? b : c.unique(b))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        });
        c.each({
                parent: function(a) {
                    return (a = a.parentNode) && 11 !== a.nodeType ? a : null
                },
                parents: function(a) {
                    return c.dir(a, "parentNode")
                },
                parentsUntil: function(a, b, d) {
                    return c.dir(a, "parentNode", d)
                },
                next: function(a) {
                    return c.nth(a, 2, "nextSibling")
                },
                prev: function(a) {
                    return c.nth(a, 2, "previousSibling")
                },
                nextAll: function(a) {
                    return c.dir(a, "nextSibling")
                },
                prevAll: function(a) {
                    return c.dir(a, "previousSibling")
                },
                nextUntil: function(a, b, d) {
                    return c.dir(a, "nextSibling", d)
                },
                prevUntil: function(a, b, d) {
                    return c.dir(a, "previousSibling", d)
                },
                siblings: function(a) {
                    return c.sibling(a.parentNode.firstChild, a)
                },
                children: function(a) {
                    return c.sibling(a.firstChild)
                },
                contents: function(a) {
                    return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
                }
            },
            function(a, b) {
                c.fn[a] = function(d, e) {
                    var f = c.map(this, b, d),
                        g = Jb.call(arguments);
                    Gb.test(a) || (e = d);
                    e && "string" === typeof e && (f = c.filter(e, f));
                    f = 1 < this.length && !Kb[a] ? c.unique(f) : f;
                    (1 < this.length || Ib.test(e)) && Hb.test(a) && (f = f.reverse());
                    return this.pushStack(f, a, g.join(","))
                }
            });
        c.extend({
            filter: function(a, b, d) {
                d && (a = ":not(" + a + ")");
                return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
            },
            dir: function(a, b, d) {
                var e = [];
                for (a = a[b]; a && 9 !== a.nodeType && (d === p || 1 !== a.nodeType || !c(a).is(d));) 1 ===
                    a.nodeType && e.push(a), a = a[b];
                return e
            },
            nth: function(a, b, c, e) {
                b = b || 1;
                for (e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Lb = / jQuery\d+="(?:\d+|null)"/g,
            ua = /^\s+/,
            Xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            Ya = /<([\w:]+)/,
            Mb = /<tbody/i,
            Nb = /<|&#?\w+;/,
            Za = /<(?:script|object|embed|option|style)/i,
            $a = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ob = /\/(java|ecma)script/i,
            rb = /^\s*<!(?:\[CDATA\[|\-\-)/,
            w = {
                option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
                legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
                thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
                td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
                area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
                _default: [0, "", ""]
            };
        w.optgroup = w.option;
        w.tbody =
            w.tfoot = w.colgroup = w.caption = w.thead;
        w.th = w.td;
        c.support.htmlSerialize || (w._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
        c.fn.extend({
            text: function(a) {
                return c.isFunction(a) ? this.each(function(b) {
                    var d = c(this);
                    d.text(a.call(this, b, d.text()))
                }) : "object" !== typeof a && a !== p ? this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(a)) : c.text(this)
            },
            wrapAll: function(a) {
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return c.isFunction(a) ? this.each(function(b) {
                    c(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = c(this),
                        d = b.contents();
                    d.length ? d.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                return this.each(function() {
                    c(this).wrapAll(a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    c.nodeName(this, "body") ||
                        c(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = c(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a,
                        "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, c(arguments[0]).toArray());
                    return a
                }
            },
            remove: function(a, b) {
                for (var d = 0, e; null != (e = this[d]); d++)
                    if (!a || c.filter(a, [e]).length) b || 1 !== e.nodeType || (c.cleanData(e.getElementsByTagName("*")), c.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
                return this
            },
            empty: function() {
                for (var a = 0, b; null != (b = this[a]); a++)
                    for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
                return this
            },
            clone: function(a, b) {
                a = null == a ? !1 : a;
                b = null == b ? a : b;
                return this.map(function() {
                    return c.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === p) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Lb, "") : null;
                if ("string" !== typeof a || Za.test(a) || !c.support.leadingWhitespace && ua.test(a) || w[(Ya.exec(a) || ["", ""])[1].toLowerCase()]) c.isFunction(a) ?
                    this.each(function(b) {
                        var d = c(this);
                        d.html(a.call(this, b, d.html()))
                    }) : this.empty().append(a);
                else {
                    a = a.replace(Xa, "\x3c$1\x3e\x3c/$2\x3e");
                    try {
                        for (var b = 0, d = this.length; b < d; b++) 1 === this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
                    } catch (e) {
                        this.empty().append(a)
                    }
                }
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (c.isFunction(a)) return this.each(function(b) {
                        var d = c(this),
                            e = d.html();
                        d.replaceWith(a.call(this, b, e))
                    });
                    "string" !== typeof a && (a = c(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            d = this.parentNode;
                        c(this).remove();
                        b ? c(b).before(a) : c(d).append(a)
                    })
                }
                return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, d) {
                var e, f, g, h = a[0],
                    k = [];
                if (!c.support.checkClone && 3 === arguments.length && "string" === typeof h && $a.test(h)) return this.each(function() {
                    c(this).domManip(a, b, d, !0)
                });
                if (c.isFunction(h)) return this.each(function(e) {
                    var f = c(this);
                    a[0] = h.call(this,
                        e, b ? f.html() : p);
                    f.domManip(a, b, d)
                });
                if (this[0]) {
                    e = h && h.parentNode;
                    e = c.support.parentNode && e && 11 === e.nodeType && e.childNodes.length === this.length ? {
                        fragment: e
                    } : c.buildFragment(a, this, k);
                    g = e.fragment;
                    if (f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild) {
                        b = b && c.nodeName(f, "tr");
                        for (var l = 0, n = this.length, q = n - 1; l < n; l++) d.call(b ? pb(this[l], f) : this[l], e.cacheable || 1 < n && l < q ? c.clone(g, !0, !0) : g)
                    }
                    k.length && c.each(k, qb)
                }
                return this
            }
        });
        c.buildFragment = function(a, b, d) {
            var e, f, g, h;
            b && b[0] && (h = b[0].ownerDocument ||
                b[0]);
            h.createDocumentFragment || (h = m);
            1 === a.length && "string" === typeof a[0] && 512 > a[0].length && h === m && "\x3c" === a[0].charAt(0) && !Za.test(a[0]) && (c.support.checkClone || !$a.test(a[0])) && (f = !0, (g = c.fragments[a[0]]) && 1 !== g && (e = g));
            e || (e = h.createDocumentFragment(), c.clean(a, h, e, d));
            f && (c.fragments[a[0]] = g ? e : 1);
            return {
                fragment: e,
                cacheable: f
            }
        };
        c.fragments = {};
        c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            c.fn[a] = function(d) {
                var e = [];
                d = c(d);
                var f = 1 === this.length && this[0].parentNode;
                if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === d.length) return d[b](this[0]), this;
                for (var f = 0, g = d.length; f < g; f++) {
                    var h = (0 < f ? this.clone(!0) : this).get();
                    c(d[f])[b](h);
                    e = e.concat(h)
                }
                return this.pushStack(e, a, d.selector)
            }
        });
        c.extend({
            clone: function(a, b, d) {
                var e = a.cloneNode(!0),
                    f, g, h;
                if (!(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a)))
                    for (Ca(a, e), f = ba(a), g = ba(e), h = 0; f[h]; ++h) g[h] && Ca(f[h], g[h]);
                if (b && (Ba(a, e), d))
                    for (f = ba(a), g = ba(e), h = 0; f[h]; ++h) Ba(f[h], g[h]);
                return e
            },
            clean: function(a, b, d, e) {
                b = b || m;
                "undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || m);
                for (var f = [], g, h = 0, k; null != (k = a[h]); h++)
                    if ("number" === typeof k && (k += ""), k) {
                        if ("string" === typeof k)
                            if (Nb.test(k)) {
                                k = k.replace(Xa, "\x3c$1\x3e\x3c/$2\x3e");
                                g = (Ya.exec(k) || ["", ""])[1].toLowerCase();
                                var l = w[g] || w._default,
                                    n = l[0],
                                    p = b.createElement("div");
                                for (p.innerHTML = l[1] + k + l[2]; n--;) p = p.lastChild;
                                if (!c.support.tbody)
                                    for (n =
                                        Mb.test(k), l = "table" !== g || n ? "\x3ctable\x3e" !== l[1] || n ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes, g = l.length - 1; 0 <= g; --g) c.nodeName(l[g], "tbody") && !l[g].childNodes.length && l[g].parentNode.removeChild(l[g]);
                                !c.support.leadingWhitespace && ua.test(k) && p.insertBefore(b.createTextNode(ua.exec(k)[0]), p.firstChild);
                                k = p.childNodes
                            } else k = b.createTextNode(k);
                        var r;
                        if (!c.support.appendChecked)
                            if (k[0] && "number" === typeof(r = k.length))
                                for (g = 0; g < r; g++) Ea(k[g]);
                            else Ea(k);
                        k.nodeType ? f.push(k) : f = c.merge(f,
                            k)
                    }
                if (d)
                    for (a = function(a) {
                            return !a.type || Ob.test(a.type)
                        }, h = 0; f[h]; h++) !e || !c.nodeName(f[h], "script") || f[h].type && "text/javascript" !== f[h].type.toLowerCase() ? (1 === f[h].nodeType && (b = c.grep(f[h].getElementsByTagName("script"), a), f.splice.apply(f, [h + 1, 0].concat(b))), d.appendChild(f[h])) : e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                return f
            },
            cleanData: function(a) {
                for (var b, d, e = c.cache, f = c.expando, g = c.event.special, h = c.support.deleteExpando, k = 0, l; null != (l = a[k]); k++)
                    if (!l.nodeName || !c.noData[l.nodeName.toLowerCase()])
                        if (d =
                            l[c.expando]) {
                            if ((b = e[d] && e[d][f]) && b.events) {
                                for (var n in b.events) g[n] ? c.event.remove(l, n) : c.removeEvent(l, n, b.handle);
                                b.handle && (b.handle.elem = null)
                            }
                            h ? delete l[c.expando] : l.removeAttribute && l.removeAttribute(c.expando);
                            delete e[d]
                        }
            }
        });
        var va = /alpha\([^)]*\)/i,
            Pb = /opacity=([^)]*)/,
            Qb = /([A-Z]|^ms)/g,
            ab = /^-?\d+(?:px)?$/i,
            Rb = /^-?\d/,
            Sb = /^([\-+])=([\-+.\de]+)/,
            Tb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            sb = ["Left", "Right"],
            tb = ["Top", "Bottom"],
            O, bb, cb;
        c.fn.css = function(a, b) {
            return 2 ===
                arguments.length && b === p ? this : c.access(this, a, b, !0, function(a, b, f) {
                    return f !== p ? c.style(a, b, f) : c.css(a, b)
                })
        };
        c.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        return b ? (a = O(a, "opacity", "opacity"), "" === a ? "1" : a) : a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g = c.camelCase(b),
                        h = a.style,
                        k = c.cssHooks[g];
                    b = c.cssProps[g] || g;
                    if (d !== p) {
                        if (e = typeof d, "string" === e && (f = Sb.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b)), e = "number"), !(null == d || "number" === e && isNaN(d) || ("number" !== e || c.cssNumber[g] || (d += "px"), k && "set" in k && (d = k.set(a, d)) === p))) try {
                            h[b] = d
                        } catch (l) {}
                    } else return k && "get" in k && (f = k.get(a, !1, e)) !== p ? f : h[b]
                }
            },
            css: function(a, b, d) {
                var e, f;
                b = c.camelCase(b);
                f = c.cssHooks[b];
                b = c.cssProps[b] || b;
                "cssFloat" === b && (b = "float");
                if (f && "get" in f && (e = f.get(a, !0, d)) !== p) return e;
                if (O) return O(a, b)
            },
            swap: function(a,
                b, c) {
                var e = {},
                    f;
                for (f in b) e[f] = a.style[f], a.style[f] = b[f];
                c.call(a);
                for (f in b) a.style[f] = e[f]
            }
        });
        c.curCSS = c.css;
        c.each(["height", "width"], function(a, b) {
            c.cssHooks[b] = {
                get: function(a, e, f) {
                    var g;
                    if (e) {
                        if (0 !== a.offsetWidth) return Fa(a, b, f);
                        c.swap(a, Tb, function() {
                            g = Fa(a, b, f)
                        });
                        return g
                    }
                },
                set: function(a, b) {
                    if (ab.test(b)) {
                        if (b = parseFloat(b), 0 <= b) return b + "px"
                    } else return b
                }
            }
        });
        c.support.opacity || (c.cssHooks.opacity = {
            get: function(a, b) {
                return Pb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var d = a.style;
                a = a.currentStyle;
                var e = c.isNaN(b) ? "" : "alpha(opacity\x3d" + 100 * b + ")",
                    f = a && a.filter || d.filter || "";
                d.zoom = 1;
                if (1 <= b && "" === c.trim(f.replace(va, "")) && (d.removeAttribute("filter"), a && !a.filter)) return;
                d.filter = va.test(f) ? f.replace(va, e) : f + " " + e
            }
        });
        c(function() {
            c.support.reliableMarginRight || (c.cssHooks.marginRight = {
                get: function(a, b) {
                    var d;
                    c.swap(a, {
                        display: "inline-block"
                    }, function() {
                        d = b ? O(a, "margin-right", "marginRight") : a.style.marginRight
                    });
                    return d
                }
            })
        });
        m.defaultView && m.defaultView.getComputedStyle && (bb = function(a, b) {
            var d, e;
            b = b.replace(Qb, "-$1").toLowerCase();
            if (!(e = a.ownerDocument.defaultView)) return p;
            if (e = e.getComputedStyle(a, null)) d = e.getPropertyValue(b), "" !== d || c.contains(a.ownerDocument.documentElement, a) || (d = c.style(a, b));
            return d
        });
        m.documentElement.currentStyle && (cb = function(a, b) {
            var c, e = a.currentStyle && a.currentStyle[b],
                f = a.runtimeStyle && a.runtimeStyle[b],
                g = a.style;
            !ab.test(e) && Rb.test(e) && (c = g.left, f && (a.runtimeStyle.left =
                a.currentStyle.left), g.left = "fontSize" === b ? "1em" : e || 0, e = g.pixelLeft + "px", g.left = c, f && (a.runtimeStyle.left = f));
            return "" === e ? "auto" : e
        });
        O = bb || cb;
        c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style.display || c.css(a, "display"))
        }, c.expr.filters.visible = function(a) {
            return !c.expr.filters.hidden(a)
        });
        var Ub = /%20/g,
            ub = /\[\]$/,
            db = /\r?\n/g,
            Vb = /#.*$/,
            Wb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Xb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Yb = /^(?:GET|HEAD)$/,
            Zb = /^\/\//,
            eb = /\?/,
            $b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ac = /^(?:select|textarea)/i,
            Ha = /\s+/,
            bc = /([?&])_=[^&]*/,
            fb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            gb = c.fn.load,
            ka = {},
            hb = {},
            G, H;
        try {
            G = xb.href
        } catch (a) {
            G = m.createElement("a"), G.href = "", G = G.href
        }
        H = fb.exec(G.toLowerCase()) || [];
        c.fn.extend({
            load: function(a, b, d) {
                if ("string" !== typeof a && gb) return gb.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (0 <= e) {
                    var f = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                e = "GET";
                b && (c.isFunction(b) ? (d = b, b = p) : "object" === typeof b && (b = c.param(b, c.ajaxSettings.traditional), e = "POST"));
                var g = this;
                c.ajax({
                    url: a,
                    type: e,
                    dataType: "html",
                    data: b,
                    complete: function(a, b, e) {
                        e = a.responseText;
                        a.isResolved() && (a.done(function(a) {
                            e = a
                        }), g.html(f ? c("\x3cdiv\x3e").append(e.replace($b, "")).find(f) : e));
                        d && g.each(d, [e, b, a])
                    }
                });
                return this
            },
            serialize: function() {
                return c.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? c.makeArray(this.elements) :
                        this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || ac.test(this.nodeName) || Xb.test(this.type))
                }).map(function(a, b) {
                    a = c(this).val();
                    return null == a ? null : c.isArray(a) ? c.map(a, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(db, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: a.replace(db, "\r\n")
                    }
                }).get()
            }
        });
        c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            c.fn[b] = function(a) {
                return this.bind(b, a)
            }
        });
        c.each(["get", "post"], function(a, b) {
            c[b] = function(a,
                e, f, g) {
                c.isFunction(e) && (g = g || f, f = e, e = p);
                return c.ajax({
                    type: b,
                    url: a,
                    data: e,
                    success: f,
                    dataType: g
                })
            }
        });
        c.extend({
            getScript: function(a, b) {
                return c.get(a, p, b, "script")
            },
            getJSON: function(a, b, d) {
                return c.get(a, b, d, "json")
            },
            ajaxSetup: function(a, b) {
                b ? Ia(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
                Ia(a, b);
                return a
            },
            ajaxSettings: {
                url: G,
                isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(H[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": "*/*"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": r.String,
                    "text html": !0,
                    "text json": c.parseJSON,
                    "text xml": c.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: Ga(ka),
            ajaxTransport: Ga(hb),
            ajax: function(a, b) {
                function d(a, b, d, m) {
                    if (2 !== z) {
                        z = 2;
                        w && clearTimeout(w);
                        y = p;
                        D = m || "";
                        t.readyState = 0 < a ? 4 : 0;
                        var q, r, v;
                        m = b;
                        if (d) {
                            var x = e,
                                C = t,
                                u = x.contents,
                                J = x.dataTypes,
                                M = x.responseFields,
                                E, B, P, I;
                            for (B in M) B in d && (C[M[B]] = d[B]);
                            for (;
                                "*" === J[0];) J.shift(), E === p && (E = x.mimeType || C.getResponseHeader("content-type"));
                            if (E)
                                for (B in u)
                                    if (u[B] && u[B].test(E)) {
                                        J.unshift(B);
                                        break
                                    }
                            if (J[0] in d) P = J[0];
                            else {
                                for (B in d) {
                                    if (!J[0] || x.converters[B + " " + J[0]]) {
                                        P = B;
                                        break
                                    }
                                    I || (I = B)
                                }
                                P = P || I
                            }
                            P ? (P !== J[0] && J.unshift(P), d = d[P]) : d = void 0
                        } else d = p;
                        if (200 <= a && 300 > a || 304 === a) {
                            if (e.ifModified) {
                                if (E = t.getResponseHeader("Last-Modified")) c.lastModified[n] = E;
                                if (E = t.getResponseHeader("Etag")) c.etag[n] =
                                    E
                            }
                            if (304 === a) m = "notmodified", q = !0;
                            else try {
                                E = e;
                                E.dataFilter && (d = E.dataFilter(d, E.dataType));
                                var L = E.dataTypes;
                                B = {};
                                var G, H, O = L.length,
                                    K, Q = L[0],
                                    F, N, R, S, U;
                                for (G = 1; G < O; G++) {
                                    if (1 === G)
                                        for (H in E.converters) "string" === typeof H && (B[H.toLowerCase()] = E.converters[H]);
                                    F = Q;
                                    Q = L[G];
                                    if ("*" === Q) Q = F;
                                    else if ("*" !== F && F !== Q) {
                                        N = F + " " + Q;
                                        R = B[N] || B["* " + Q];
                                        if (!R)
                                            for (S in U = p, B)
                                                if (K = S.split(" "), K[0] === F || "*" === K[0])
                                                    if (U = B[K[1] + " " + Q]) {
                                                        S = B[S];
                                                        !0 === S ? R = U : !0 === U && (R = S);
                                                        break
                                                    }
                                        R || U || c.error("No conversion from " + N.replace(" ",
                                            " to "));
                                        !0 !== R && (d = R ? R(d) : U(S(d)))
                                    }
                                }
                                r = d;
                                m = "success";
                                q = !0
                            } catch (V) {
                                m = "parsererror", v = V
                            }
                        } else if (v = m, !m || a) m = "error", 0 > a && (a = 0);
                        t.status = a;
                        t.statusText = "" + (b || m);
                        q ? h.resolveWith(f, [r, m, t]) : h.rejectWith(f, [t, m, v]);
                        t.statusCode(l);
                        l = p;
                        A && g.trigger("ajax" + (q ? "Success" : "Error"), [t, e, q ? r : v]);
                        k.resolveWith(f, [t, m]);
                        A && (g.trigger("ajaxComplete", [t, e]), --c.active || c.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof a && (b = a, a = p);
                b = b || {};
                var e = c.ajaxSetup({}, b),
                    f = e.context || e,
                    g = f !== e && (f.nodeType || f instanceof c) ?
                    c(f) : c.event,
                    h = c.Deferred(),
                    k = c._Deferred(),
                    l = e.statusCode || {},
                    n, m = {},
                    r = {},
                    D, v, y, w, z = 0,
                    A, x, t = {
                        readyState: 0,
                        setRequestHeader: function(a, b) {
                            if (!z) {
                                var c = a.toLowerCase();
                                a = r[c] = r[c] || a;
                                m[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === z ? D : null
                        },
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === z) {
                                if (!v)
                                    for (v = {}; b = Wb.exec(D);) v[b[1].toLowerCase()] = b[2];
                                b = v[a.toLowerCase()]
                            }
                            return b === p ? null : b
                        },
                        overrideMimeType: function(a) {
                            z || (e.mimeType = a);
                            return this
                        },
                        abort: function(a) {
                            a = a || "abort";
                            y && y.abort(a);
                            d(0, a);
                            return this
                        }
                    };
                h.promise(t);
                t.success = t.done;
                t.error = t.fail;
                t.complete = k.done;
                t.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (2 > z)
                            for (b in a) l[b] = [l[b], a[b]];
                        else b = a[t.status], t.then(b, b)
                    }
                    return this
                };
                e.url = ((a || e.url) + "").replace(Vb, "").replace(Zb, H[1] + "//");
                e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(Ha);
                null == e.crossDomain && (a = fb.exec(e.url.toLowerCase()), e.crossDomain = !(!a || a[1] == H[1] && a[2] == H[2] && (a[3] || ("http:" === a[1] ? 80 : 443)) == (H[3] || ("http:" === H[1] ? 80 : 443))));
                e.data && e.processData &&
                    "string" !== typeof e.data && (e.data = c.param(e.data, e.traditional));
                ca(ka, e, b, t);
                if (2 === z) return !1;
                A = e.global;
                e.type = e.type.toUpperCase();
                e.hasContent = !Yb.test(e.type);
                A && 0 === c.active++ && c.event.trigger("ajaxStart");
                if (!e.hasContent && (e.data && (e.url += (eb.test(e.url) ? "\x26" : "?") + e.data, delete e.data), n = e.url, !1 === e.cache)) {
                    a = c.now();
                    var C = e.url.replace(bc, "$1_\x3d" + a);
                    e.url = C + (C === e.url ? (eb.test(e.url) ? "\x26" : "?") + "_\x3d" + a : "")
                }(e.data && e.hasContent && !1 !== e.contentType || b.contentType) && t.setRequestHeader("Content-Type",
                    e.contentType);
                e.ifModified && (n = n || e.url, c.lastModified[n] && t.setRequestHeader("If-Modified-Since", c.lastModified[n]), c.etag[n] && t.setRequestHeader("If-None-Match", c.etag[n]));
                t.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", */*; q\x3d0.01" : "") : e.accepts["*"]);
                for (x in e.headers) t.setRequestHeader(x, e.headers[x]);
                if (e.beforeSend && (!1 === e.beforeSend.call(f, t, e) || 2 === z)) return t.abort(), !1;
                for (x in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) t[x](e[x]);
                if (y = ca(hb, e, b, t)) {
                    t.readyState = 1;
                    A && g.trigger("ajaxSend", [t, e]);
                    e.async && 0 < e.timeout && (w = setTimeout(function() {
                        t.abort("timeout")
                    }, e.timeout));
                    try {
                        z = 1, y.send(m, d)
                    } catch (ea) {
                        2 > z ? d(-1, ea) : c.error(ea)
                    }
                } else d(-1, "No Transport");
                return t
            },
            param: function(a, b) {
                var d = [],
                    e = function(a, b) {
                        b = c.isFunction(b) ? b() : b;
                        d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
                    };
                b === p && (b = c.ajaxSettings.traditional);
                if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
                    e(this.name, this.value)
                });
                else
                    for (var f in a) la(f,
                        a[f], b, e);
                return d.join("\x26").replace(Ub, "+")
            }
        });
        c.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var cc = c.now(),
            ha = /(\=)\?(&|$)|\?\?/i;
        c.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return c.expando + "_" + cc++
            }
        });
        c.ajaxPrefilter("json jsonp", function(a, b, d) {
            b = "application/x-www-form-urlencoded" === a.contentType && "string" === typeof a.data;
            if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (ha.test(a.url) || b && ha.test(a.data))) {
                var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                    g = r[f],
                    h = a.url,
                    k = a.data,
                    l = "$1" + f + "$2";
                !1 !== a.jsonp && (h = h.replace(ha, l), a.url === h && (b && (k = k.replace(ha, l)), a.data === k && (h += (/\?/.test(h) ? "\x26" : "?") + a.jsonp + "\x3d" + f)));
                a.url = h;
                a.data = k;
                r[f] = function(a) {
                    e = [a]
                };
                d.always(function() {
                    r[f] = g;
                    if (e && c.isFunction(g)) r[f](e[0])
                });
                a.converters["script json"] = function() {
                    e || c.error(f + " was not called");
                    return e[0]
                };
                a.dataTypes[0] = "json";
                return "script"
            }
        });
        c.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    c.globalEval(a);
                    return a
                }
            }
        });
        c.ajaxPrefilter("script", function(a) {
            a.cache === p && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
        c.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = m.head || m.getElementsByTagName("head")[0] || m.documentElement;
                return {
                    send: function(e, f) {
                        b = m.createElement("script");
                        b.async = "async";
                        a.scriptCharset && (b.charset = a.scriptCharset);
                        b.src = a.url;
                        b.onload = b.onreadystatechange = function(a,
                            e) {
                            if (e || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = p, e || f(200, "success")
                        };
                        c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        if (b) b.onload(0, 1)
                    }
                }
            }
        });
        var wa = r.ActiveXObject ? function() {
                for (var a in N) N[a](0, 1)
            } : !1,
            dc = 0,
            N;
        c.ajaxSettings.xhr = r.ActiveXObject ? function() {
            var a;
            if (!(a = !this.isLocal && Ja())) a: {
                try {
                    a = new r.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (b) {}
                a = void 0
            }
            return a
        } : Ja;
        (function(a) {
            c.extend(c.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        })(c.ajaxSettings.xhr());
        c.support.ajax && c.ajaxTransport(function(a) {
            if (!a.crossDomain || c.support.cors) {
                var b;
                return {
                    send: function(d, e) {
                        var f = a.xhr(),
                            g, h;
                        a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
                        if (a.xhrFields)
                            for (h in a.xhrFields) f[h] = a.xhrFields[h];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                        a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in d) f.setRequestHeader(h,
                                d[h])
                        } catch (k) {}
                        f.send(a.hasContent && a.data || null);
                        b = function(d, h) {
                            var n, m, r, w, v;
                            try {
                                if (b && (h || 4 === f.readyState))
                                    if (b = p, g && (f.onreadystatechange = c.noop, wa && delete N[g]), h) 4 !== f.readyState && f.abort();
                                    else {
                                        n = f.status;
                                        r = f.getAllResponseHeaders();
                                        w = {};
                                        (v = f.responseXML) && v.documentElement && (w.xml = v);
                                        w.text = f.responseText;
                                        try {
                                            m = f.statusText
                                        } catch (y) {
                                            m = ""
                                        }
                                        n || !a.isLocal || a.crossDomain ? 1223 === n && (n = 204) : n = w.text ? 200 : 404
                                    }
                            } catch (y) {
                                h || e(-1, y)
                            }
                            w && e(n, m, w, r)
                        };
                        a.async && 4 !== f.readyState ? (g = ++dc, wa && (N || (N = {}, c(r).unload(wa)),
                            N[g] = b), f.onreadystatechange = b) : b()
                    },
                    abort: function() {
                        b && b(0, 1)
                    }
                }
            }
        });
        var ma = {},
            C, F, ec = /^(?:toggle|show|hide)$/,
            fc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            ia, La = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ],
            da;
        c.fn.extend({
            show: function(a, b, d) {
                if (a || 0 === a) return this.animate(K("show", 3), a, b, d);
                d = 0;
                for (var e = this.length; d < e; d++) a = this[d], a.style && (b = a.style.display, c._data(a, "olddisplay") || "none" !== b || (b =
                    a.style.display = ""), "" === b && "none" === c.css(a, "display") && c._data(a, "olddisplay", Ma(a.nodeName)));
                for (d = 0; d < e; d++)
                    if (a = this[d], a.style && (b = a.style.display, "" === b || "none" === b)) a.style.display = c._data(a, "olddisplay") || "";
                return this
            },
            hide: function(a, b, d) {
                if (a || 0 === a) return this.animate(K("hide", 3), a, b, d);
                a = 0;
                for (b = this.length; a < b; a++) this[a].style && (d = c.css(this[a], "display"), "none" === d || c._data(this[a], "olddisplay") || c._data(this[a], "olddisplay", d));
                for (a = 0; a < b; a++) this[a].style && (this[a].style.display =
                    "none");
                return this
            },
            _toggle: c.fn.toggle,
            toggle: function(a, b, d) {
                var e = "boolean" === typeof a;
                c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || e ? this.each(function() {
                    var b = e ? a : c(this).is(":hidden");
                    c(this)[b ? "show" : "hide"]()
                }) : this.animate(K("toggle", 3), a, b, d);
                return this
            },
            fadeTo: function(a, b, c, e) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, e)
            },
            animate: function(a, b, d, e) {
                var f = c.speed(b, d, e);
                if (c.isEmptyObject(a)) return this.each(f.complete, [!1]);
                a = c.extend({}, a);
                return this[!1 === f.queue ? "each" : "queue"](function() {
                    !1 === f.queue && c._mark(this);
                    var b = c.extend({}, f),
                        d = 1 === this.nodeType,
                        e = d && c(this).is(":hidden"),
                        l, n, m, p, r;
                    b.animatedProperties = {};
                    for (m in a) {
                        l = c.camelCase(m);
                        m !== l && (a[l] = a[m], delete a[m]);
                        n = a[l];
                        c.isArray(n) ? (b.animatedProperties[l] = n[1], n = a[l] = n[0]) : b.animatedProperties[l] = b.specialEasing && b.specialEasing[l] || b.easing || "swing";
                        if ("hide" === n && e || "show" === n && !e) return b.complete.call(this);
                        !d || "height" !== l && "width" !== l || (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (c.support.inlineBlockNeedsLayout ? (n = Ma(this.nodeName), "inline" === n ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                    }
                    null != b.overflow && (this.style.overflow = "hidden");
                    for (m in a)
                        if (d = new c.fx(this, b, m), n = a[m], ec.test(n)) d["toggle" === n ? e ? "show" : "hide" : n]();
                        else l = fc.exec(n), p = d.cur(), l ? (n = parseFloat(l[2]),
                            r = l[3] || (c.cssNumber[m] ? "" : "px"), "px" !== r && (c.style(this, m, (n || 1) + r), p *= (n || 1) / d.cur(), c.style(this, m, p + r)), l[1] && (n = ("-\x3d" === l[1] ? -1 : 1) * n + p), d.custom(p, n, r)) : d.custom(p, n, "");
                    return !0
                })
            },
            stop: function(a, b) {
                a && this.queue([]);
                this.each(function() {
                    var a = c.timers,
                        e = a.length;
                    for (b || c._unmark(!0, this); e--;)
                        if (a[e].elem === this) {
                            if (b) a[e](!0);
                            a.splice(e, 1)
                        }
                });
                b || this.dequeue();
                return this
            }
        });
        c.each({
            slideDown: K("show", 1),
            slideUp: K("hide", 1),
            slideToggle: K("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            c.fn[a] = function(a, c, f) {
                return this.animate(b, a, c, f)
            }
        });
        c.extend({
            speed: function(a, b, d) {
                var e = a && "object" === typeof a ? c.extend({}, a) : {
                    complete: d || !d && b || c.isFunction(a) && a,
                    duration: a,
                    easing: d && b || b && !c.isFunction(b) && b
                };
                e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
                e.old = e.complete;
                e.complete = function(a) {
                    c.isFunction(e.old) && e.old.call(this);
                    !1 !== e.queue ? c.dequeue(this) :
                        !1 !== a && c._unmark(this)
                };
                return e
            },
            easing: {
                linear: function(a, b, c, e) {
                    return c + e * a
                },
                swing: function(a, b, c, e) {
                    return (-Math.cos(a * Math.PI) / 2 + .5) * e + c
                }
            },
            timers: [],
            fx: function(a, b, c) {
                this.options = b;
                this.elem = a;
                this.prop = c;
                b.orig = b.orig || {}
            }
        });
        c.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this);
                (c.fx.step[this.prop] || c.fx.step._default)(this)
            },
            cur: function() {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a, b = c.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
            },
            custom: function(a, b, d) {
                function e(a) {
                    return f.step(a)
                }
                var f = this,
                    g = c.fx;
                this.startTime = da || Ka();
                this.start = a;
                this.end = b;
                this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
                this.now = this.start;
                this.pos = this.state = 0;
                e.elem = this.elem;
                e() && c.timers.push(e) && !ia && (ia = setInterval(g.tick, g.interval))
            },
            show: function() {
                this.options.orig[this.prop] = c.style(this.elem, this.prop);
                this.options.show = !0;
                this.custom("width" ===
                    this.prop || "height" === this.prop ? 1 : 0, this.cur());
                c(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = c.style(this.elem, this.prop);
                this.options.hide = !0;
                this.custom(this.cur(), 0)
            },
            step: function(a) {
                var b = da || Ka(),
                    d = !0,
                    e = this.elem,
                    f = this.options,
                    g;
                if (a || b >= f.duration + this.startTime) {
                    this.now = this.end;
                    this.pos = this.state = 1;
                    this.update();
                    f.animatedProperties[this.prop] = !0;
                    for (g in f.animatedProperties) !0 !== f.animatedProperties[g] && (d = !1);
                    if (d) {
                        null == f.overflow || c.support.shrinkWrapBlocks ||
                            c.each(["", "X", "Y"], function(a, b) {
                                e.style["overflow" + b] = f.overflow[a]
                            });
                        f.hide && c(e).hide();
                        if (f.hide || f.show)
                            for (var h in f.animatedProperties) c.style(e, h, f.orig[h]);
                        f.complete.call(e)
                    }
                    return !1
                }
                Infinity == f.duration ? this.now = b : (a = b - this.startTime, this.state = a / f.duration, this.pos = c.easing[f.animatedProperties[this.prop]](this.state, a, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
                this.update();
                return !0
            }
        };
        c.extend(c.fx, {
            tick: function() {
                for (var a = c.timers, b = 0; b < a.length; ++b) a[b]() ||
                    a.splice(b--, 1);
                a.length || c.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(ia);
                ia = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(a) {
                    c.style(a.elem, "opacity", a.now)
                },
                _default: function(a) {
                    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
                }
            }
        });
        c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
            return c.grep(c.timers, function(b) {
                return a === b.elem
            }).length
        });
        var gc =
            /^t(?:able|d|h)$/i,
            ib = /^(?:body|html)$/i;
        c.fn.offset = "getBoundingClientRect" in m.documentElement ? function(a) {
            var b = this[0],
                d;
            if (a) return this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            try {
                d = b.getBoundingClientRect()
            } catch (g) {}
            var e = b.ownerDocument,
                f = e.documentElement;
            if (!d || !c.contains(f, b)) return d ? {
                top: d.top,
                left: d.left
            } : {
                top: 0,
                left: 0
            };
            b = e.body;
            e = na(e);
            return {
                top: d.top + (e.pageYOffset || c.support.boxModel &&
                    f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
                left: d.left + (e.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
            }
        } : function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            c.offset.initialize();
            var d, e = b.offsetParent,
                f = b.ownerDocument,
                g = f.documentElement,
                h = f.body;
            d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
            for (var k = b.offsetTop, l = b.offsetLeft;
                (b = b.parentNode) && b !== h && b !== g && (!c.offset.supportsFixedPosition || "fixed" !== d.position);) d = f ? f.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === e && (k += b.offsetTop, l += b.offsetLeft, !c.offset.doesNotAddBorder || c.offset.doesAddBorderForTableAndCells && gc.test(b.nodeName) || (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), e = b.offsetParent), c.offset.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (k += parseFloat(d.borderTopWidth) ||
                0, l += parseFloat(d.borderLeftWidth) || 0);
            if ("relative" === d.position || "static" === d.position) k += h.offsetTop, l += h.offsetLeft;
            c.offset.supportsFixedPosition && "fixed" === d.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft));
            return {
                top: k,
                left: l
            }
        };
        c.offset = {
            initialize: function() {
                var a = m.body,
                    b = m.createElement("div"),
                    d, e, f, g = parseFloat(c.css(a, "marginTop")) || 0;
                c.extend(b.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: 0,
                    width: "1px",
                    height: "1px",
                    visibility: "hidden"
                });
                b.innerHTML = "\x3cdiv style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
                a.insertBefore(b, a.firstChild);
                d = b.firstChild;
                e = d.firstChild;
                f = d.nextSibling.firstChild.firstChild;
                this.doesNotAddBorder = 5 !==
                    e.offsetTop;
                this.doesAddBorderForTableAndCells = 5 === f.offsetTop;
                e.style.position = "fixed";
                e.style.top = "20px";
                this.supportsFixedPosition = 20 === e.offsetTop || 15 === e.offsetTop;
                e.style.position = e.style.top = "";
                d.style.overflow = "hidden";
                d.style.position = "relative";
                this.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop;
                this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== g;
                a.removeChild(b);
                c.offset.initialize = c.noop
            },
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    d = a.offsetLeft;
                c.offset.initialize();
                c.offset.doesNotIncludeMarginInBodyOffset &&
                    (b += parseFloat(c.css(a, "marginTop")) || 0, d += parseFloat(c.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: d
                }
            },
            setOffset: function(a, b, d) {
                var e = c.css(a, "position");
                "static" === e && (a.style.position = "relative");
                var f = c(a),
                    g = f.offset(),
                    h = c.css(a, "top"),
                    k = c.css(a, "left"),
                    l = {};
                ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, k]) ? (k = f.position(), e = k.top, k = k.left) : (e = parseFloat(h) || 0, k = parseFloat(k) || 0);
                c.isFunction(b) && (b = b.call(a, d, g));
                null != b.top && (l.top = b.top - g.top + e);
                null != b.left && (l.left = b.left - g.left +
                    k);
                "using" in b ? b.using.call(a, l) : f.css(l)
            }
        };
        c.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    d = this.offset(),
                    e = ib.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                d.top -= parseFloat(c.css(a, "marginTop")) || 0;
                d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
                e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
                e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a =
                            this.offsetParent || m.body; a && !ib.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
                    return a
                })
            }
        });
        c.each(["Left", "Top"], function(a, b) {
            var d = "scroll" + b;
            c.fn[d] = function(b) {
                var f, g;
                return b === p ? (f = this[0], f ? (g = na(f)) ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && g.document.documentElement[d] || g.document.body[d] : f[d] : null) : this.each(function() {
                    (g = na(this)) ? g.scrollTo(a ? c(g).scrollLeft() : b, a ? b : c(g).scrollTop()): this[d] = b
                })
            }
        });
        c.each(["Height", "Width"], function(a,
            b) {
            var d = b.toLowerCase();
            c.fn["inner" + b] = function() {
                var a = this[0];
                return a && a.style ? parseFloat(c.css(a, d, "padding")) : null
            };
            c.fn["outer" + b] = function(a) {
                var b = this[0];
                return b && b.style ? parseFloat(c.css(b, d, a ? "margin" : "border")) : null
            };
            c.fn[d] = function(a) {
                var f = this[0];
                if (!f) return null == a ? null : this;
                if (c.isFunction(a)) return this.each(function(b) {
                    var f = c(this);
                    f[d](a.call(this, b, f[d]()))
                });
                if (c.isWindow(f)) {
                    var g = f.document.documentElement["client" + b],
                        f = f.document.body;
                    return c.support.boxModel && g || f &&
                        f["client" + b] || g
                }
                return 9 === f.nodeType ? Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]) : a === p ? (g = c.css(f, d), f = parseFloat(g), c.isNaN(f) ? g : f) : this.css(d, "string" === typeof a ? a : a + "px")
            }
        });
        (function() {
            c.find.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a);
            };
            c.error = function(a) {
                throw "object" === typeof a ? a : Error(a);
            }
        })();
        (function() {
            var a = c._Deferred;
            c._Deferred = function() {
                var b = a(),
                    c = b.done;
                b.done = function() {
                    for (var a = Array(arguments.length), b = 0; b < a.length; b++) {
                        var g = b,
                            h;
                        h = arguments[b];
                        h = "function" === typeof h && "function" === typeof M.guardCurrent ? M.guardCurrent(h) : h;
                        a[g] = h
                    }
                    return c.apply(this, a)
                };
                return b
            }
        })();
        (function() {
            var a;
            c.event.special.beforeunload = {
                setup: function(b, d, e) {
                    a = this.onbeforeunload;
                    c.isWindow(this) && (this.onbeforeunload = function() {
                        var b = !1;
                        try {
                            b = c.isFunction(a)
                        } catch (d) {}
                        b && a.apply(this, arguments);
                        e.apply(this, arguments)
                    })
                },
                teardown: function(b, c) {
                    this.onbeforeunload =
                        a
                }
            }
        })();
        return c
    }());
    M.when("jQuery").execute("rtl-jquery-plugin", function(p) {
        p.withoutRtl = function(p) {
            p.apply(this)
        }
    })
});