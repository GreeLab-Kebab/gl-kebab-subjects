! function(e) {
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
    var r = n(1),
        i = n(4);
    r(), e.exports = i
}, function(e, t, n) {
    var r = n(2),
        i = n(4),
        o = n(15);
    e.exports = function() {
        try {
            if (!window) return;
            if (window.JSTracker2 && window.JSTracker2.version) return;
            var e = [];
            window.JSTracker2 && window.JSTracker2.length > 0 && (e = window.JSTracker2);
            var t;
            window.g_config && window.g_config.jstracker2 && (t = window.g_config.jstracker2), window.JSTracker2 = new i(t);
            for (var n = 0; n < e.length; n++) window.JSTracker2.push(e[n]);
            o.call(JSTracker2);
            var a = window.onerror;
            window.onerror = function() {
                try {
                    a && a.apply(window, arguments);
                    var e = r.apply(window, arguments);
                    window.JSTracker2.push(e)
                } catch (t) {}
            }
        } catch (s) {}
    }
}, function(e, t, n) {
    var r = n(3);
    e.exports = function(e, t, n, i, o) {
        var o = r(o).toString(),
            a = {
                msg: e,
                file: t,
                line: n,
                col: i,
                stack: o.substr(0, 1024)
            };
        return a
    }
}, function(e, t) {
    function n(e, t, n, r) {
        this.funcName = e, this.file = t, this.line = n, this.col = r
    }
    n.prototype.toString = function() {
        return [this.funcName, this.file, this.line, this.col].join("|")
    };
    var r = /\S+\:\d+/,
        i = /\s+at /,
        o = {
            parse: function(e) {
                return e ? "undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"] ? this.parseOpera(e) : e.stack && e.stack.match(i) ? this.parseV8OrIE(e) : e.stack && e.stack.match(r) ? this.parseFFOrSafari(e) : "" : ""
            },
            extractLocation: function(e) {
                if (e.indexOf(":") === -1) return [e];
                var t = e.replace(/[\(\)\s]/g, "").split(":"),
                    n = t.pop(),
                    r = t[t.length - 1];
                if (!isNaN(parseFloat(r)) && isFinite(r)) {
                    var i = t.pop();
                    return [t.join(":"), i, n]
                }
                return [t.join(":"), n, void 0]
            },
            parseV8OrIE: function(e) {
                return e.stack.split("\n").slice(1).map(function(e) {
                    var t = e.replace(/^\s+/, "").split(/\s+/).slice(1),
                        r = this.extractLocation(t.pop()),
                        i = t[0] && "Anonymous" !== t[0] ? t[0] : void 0;
                    return new n(i, (void 0), r[0], r[1], r[2])
                }, this)
            },
            parseFFOrSafari: function(e) {
                return e.stack.split("\n").filter(function(e) {
                    return !!e.match(r)
                }, this).map(function(e) {
                    var t = e.split("@"),
                        r = this.extractLocation(t.pop()),
                        i = t.shift() || void 0;
                    return new n(i, (void 0), r[0], r[1], r[2])
                }, this)
            },
            parseOpera: function(e) {
                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
            },
            parseOpera9: function(e) {
                for (var t = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], o = 2, a = r.length; o < a; o += 2) {
                    var s = t.exec(r[o]);
                    s && i.push(new n((void 0), (void 0), s[2], s[1]))
                }
                return i
            },
            parseOpera10: function(e) {
                for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], o = 0, a = r.length; o < a; o += 2) {
                    var s = t.exec(r[o]);
                    s && i.push(new n(s[3] || void 0, (void 0), s[2], s[1]))
                }
                return i
            },
            parseOpera11: function(e) {
                return e.stack.split("\n").filter(function(e) {
                    return !!e.match(r) && !e.match(/^Error created at/)
                }, this).map(function(e) {
                    var t, r = e.split("@"),
                        i = this.extractLocation(r.pop()),
                        o = r.shift() || "",
                        a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                    o.match(/\(([^\)]*)\)/) && (t = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                    var s = void 0 === t || "[arguments not available]" === t ? void 0 : t.split(",");
                    return new n(a, s, i[0], i[1], i[2])
                }, this)
            }
        };
    e.exports = function(e) {
        var t = o.parse(e);
        return t
    }
}, function(e, t, n) {
    function r(e) {
        var t = {
            msg: "",
            file: "",
            line: "",
            col: "",
            stack: "",
            url: "",
            ua: "",
            screen: "",
            nick: "",
            dns: "",
            con: "",
            req: "",
            res: "",
            dcl: "",
            onload: "",
            type: "",
            ki: ""
        };
        this.version = "o4.2.0", t = {
            v: this.version,
            ua: o,
            screen: a,
            sampling: 100,
            nick: s,
            ki: c
        }, this._debug = location.href.indexOf("jt_debug") != -1, this._pushed_num = 0, this._config = u.merge(t, e)
    }
    var i = n(5),
        o = n(11),
        a = n(12),
        s = n(13),
        c = n(14),
        u = n(10);
    r.prototype.push = i, e.exports = r
}, function(e, t, n) {
    var r = n(6),
        i = n(7),
        o = n(9),
        a = n(8),
        s = n(10);
    e.exports = function(e) {
        try {
            if (!e) return;
            e && e.constructor === Object || (e = r(e)), e = s.merge(this._config, e);
            var t = a;
            e.t = t();
            for (var n in e) "" !== e[n] && null !== e[n] && void 0 !== e[n] || delete e[n];
            var c = s.stringify(e),
                u = e.sampling;
            if (u < 1 && (u = 9999999, "undefined" != typeof console && console.warn && console.warn("JSTracker2 sampling is invalid, please set a integer above 1!")), "__PV" !== e.msg && !this._debug && Math.random() * u > 1);
            else if (this._pushed_num < 10) {
                this._pushed_num++, this._debug && window.console && window.console.log(e);
                var p = o.call(this);
                i(p + c)
            }
        } catch (d) {}
    }
}, function(e, t, n) {
    var r = n(3);
    e.exports = function(e) {
        var t = {
            msg: e.message,
            file: "",
            line: "",
            col: "",
            stack: r(e).toString()
        };
        return t
    }
}, function(e, t, n) {
    var r = n(8);
    e.exports = function(e) {
        var t = window,
            n = "jsFeImage_" + r(),
            i = t[n] = new Image;
        i.onload = i.onerror = function() {
            t[n] = null
        }, i.src = e
    }
}, function(e, t) {
    var n = function() {
        return +new Date + ".r" + Math.floor(1e3 * Math.random())
    };
    e.exports = n
}, function(e, t) {
    e.exports = function() {
        var e = "//gm.mmstat.com";
        return this._config.server && (e = this._config.server), e + "/jstracker.3?"
    }
}, function(e, t) {
    e.exports = {
        merge: function(e, t) {
            var n = {};
            for (var r in e) n[r] = e[r];
            for (var r in t) n[r] = t[r];
            return n
        },
        stringify: function(e) {
            var t = [];
            for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        },
        now: function() {
            return window.performance && window.performance.now ? window.performance.now() : Date && "function" == typeof Date.now ? Date.now() : new Date
        }
    }
}, function(e, t) {
    var n = function() {
        try {
            if (/UBrowser/i.test(navigator.userAgent)) return "";
            if ("undefined" != typeof window.scrollMaxX) return "";
            var e = "track" in document.createElement("track"),
                t = window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length : 0;
            return window.clientInformation && window.clientInformation.languages && window.clientInformation.languages.length > 2 ? "" : e ? t > 1 ? " QIHU 360 EE" : " QIHU 360 SE" : ""
        } catch (n) {
            return ""
        }
    }();
    e.exports = navigator.userAgent + n
}, function(e, t) {
    e.exports = screen.width + "x" + screen.height
}, function(e, t) {
    var n = null;
    try {
        var r = /_nk_=([^;]+)/.exec(document.cookie) || /_w_tb_nick=([^;]+)/.exec(document.cookie) || /lgc=([^;]+)/.exec(document.cookie);
        r && (n = decodeURIComponent(r[1]))
    } catch (i) {}
    e.exports = n
}, function(e, t) {
    function n() {
        try {
            return KISSY.version
        } catch (e) {
            return null
        }
    }
    e.exports = n()
}, function(e, t, n) {
    var r = n(16),
        i = n(18);
    e.exports = function() {
        var e = this,
            t = 100;
        if (this._config.p_sampling && (t = this._config.p_sampling), this._debug || !(Math.random() * t > 1)) {
            if (this._cpu = new i, window.performance && window.performance.memory) try {
                var n = parseInt(window.performance.memory.usedJSHeapSize),
                    o = parseInt(window.performance.memory.totalJSHeapSize);
                n && (this._jsHeapSizeData = {
                    jsHeapUsed: n
                }, o && (this._jsHeapSizeData.jsHeapUsedRate = (n / o).toFixed(4)))
            } catch (a) {}
            setTimeout(function() {
                try {
                    var t = r.call(e);
                    window.JSTracker2.push(t)
                } catch (n) {}
            }, 2e4)
        }
    }
}, function(e, t, n) {
    var r = n(17),
        i = n(10);
    e.exports = function() {
        var e = {},
            t = window;
        if (t.performance) {
            var n = t.performance.timing;
            e.dns = n.domainLookupEnd - n.domainLookupStart, e.con = n.connectEnd - n.connectStart, e.req = n.responseStart - n.requestStart, e.res = n.responseEnd - n.responseStart, e.dcl = n.domContentLoadedEventEnd - n.domLoading, e.onload = n.loadEventStart - n.domLoading, e.type = window.performance.navigation.type, e.sampling = 100
        }
        e.msg = "__PV";
        var o = r.call(this);
        return e.stack = i.stringify(o), e
    }
}, function(e, t, n) {
    var r = n(10);
    e.exports = function() {
        var e = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
            t = {};
        if (e) {
            var n = e.timing;
            if (n) {
                if (void 0 === t.firstPaint) {
                    var i = -1;
                    window.chrome && window.chrome.loadTimes ? (i = 1e3 * window.chrome.loadTimes().firstPaintTime, i -= 1e3 * window.chrome.loadTimes().startLoadTime) : "number" == typeof window.performance.timing.msFirstPaint && (i = window.performance.timing.msFirstPaint, t.firstPaint = i - window.performance.timing.navigationStart), t.firstPaint = Math.floor(i)
                }
                t.load = n.loadEventEnd - n.fetchStart, t.domReady = n.domComplete - n.domInteractive, t.readyStart = n.fetchStart - n.navigationStart, t.redirect = n.redirectEnd - n.redirectStart, t.appcache = n.domainLookupStart - n.fetchStart, t.unloadEvent = n.unloadEventEnd - n.unloadEventStart, t.lookupDomain = n.domainLookupEnd - n.domainLookupStart, t.connect = n.connectEnd - n.connectStart, t.request = n.responseEnd - n.requestStart, t.initDomTree = n.domInteractive - n.responseEnd, t.loadEvent = n.loadEventEnd - n.loadEventStart
            }
        }
        if (this._jsHeapSizeData && (t = r.merge(t, this._jsHeapSizeData)), this._cpu) {
            this._cpu.pause(), t.busy = Math.floor(this._cpu.getTotalSize(0, 15e3));
            for (var o = this._cpu.data.dataArray, a = -1, s = 0, c = 0; c < o.length && (o[c] <= .1 ? a++ : (s = c + 1, a = 0), !(a >= 5)); c++);
            t.avail = Math.floor(this._cpu.data.timeArray[s] - this._cpu.data.timeArray[0]), t.busyPer = Math.floor(this._cpu.getOverPerAmount(1, 0, 15e3) / this._cpu.getOverPerAmount(0, 0, 15e3) * 100), this._debug && window.console && window.console.log(t)
        }
        return t
    }
}, function(e, t) {
    ! function(e) {
        function t() {
            this.conf = {
                log: !1,
                consoleUI: !1,
                delay: 100,
                stat: !0,
                ui: !1
            }, this.log("start"), this.run(), this._lastTime = this.now(), this.data = {
                timeArray: [],
                per_line: [],
                time_line: [],
                size_line: [],
                averageTime: this.conf.delay,
                totalSize: 0,
                dataArray: [],
                timeArray: []
            }, this.log("end")
        }
        t.prototype.run = function() {
            var e, t = this;
            t.conf.ui, window.addEventListener && window.addEventListener("touchmove", function() {
                t.resumeFlag = !0
            }, !1), this._timerID = setTimeout(function() {
                if (!t.isPause) {
                    t.currentTime = t.now(), e = (t.currentTime - t._lastTime - t.conf.delay - 0) / t.conf.delay, e < 0 && (e = 0), e > 1 && (e = 1), t._lastTime = t.currentTime;
                    var n = t.getStepPer(t.now(), e),
                        r = Math.floor(n / .5) + 1;
                    if (r = r > 200 ? 200 : r, t.resumeFlag) t.resumeFlag = !1;
                    else
                        for (var i = 0; i < r; i++) t.logPercent(e);
                    t._timerID = setTimeout(arguments.callee, t.conf.delay)
                }
            }, t.conf.delay)
        }, t.prototype.now = function() {
            return window.performance && window.performance.now ? window.performance.now() : Date && "function" == typeof Date.now ? Date.now() : new Date
        }, t.prototype.log = function(t) {
            this.conf.log && e.console && e.console.log && e.console.log("### CPU Log:" + t)
        }, t.prototype.getStepPer = function(e, t) {
            var n = this.data;
            n.time_line.push(e);
            var r;
            n.per_line.push(t);
            var i = n.time_line.length;
            r = 1 == n.time_line.length ? n.averageTime : e - n.time_line[i - 2], r < n.averageTime && (r = n.averageTime);
            var o = (r - n.averageTime) / n.averageTime;
            return i >= 2 ? (n.totalSize += (n.per_line[i - 1] + n.per_line[i - 2]) * (n.time_line[i - 1] - n.time_line[i - 2]) / 2, n.size_line.push(n.totalSize)) : n.size_line.push(0), n.per_line.length > 2 && (n.per_line.shift(), n.time_line.shift()), o
        }, t.prototype.drawUIByConsole = function(e) {
            for (var t = Math.round(10 * e), n = "▆", r = t; r--;) n += "▆";
            n += Math.round(100 * e), this.log(n)
        }, t.prototype.pause = function() {
            clearTimeout(this._timerID), this.isPause = !0, this.log("###########################PAUSE!!!!!!!!!")
        }, t.prototype.resume = function() {
            (null == this.isPause || this.isPause) && (this._lastTime = this.now() + 1e4, this.isPause = !1, this.resumeFlag = !0, this.log("###########################RESUME!!!!!!!!!"), this.run())
        }, t.prototype.logPercent = function(e) {
            this.conf.stat && this.logStat(e), this.conf.ui, this.conf.consoleUI && this.drawUIByConsole(e)
        }, t.prototype.logStat = function(e) {
            var t = this.data;
            t.dataArray.push(e), t.timeArray.push(this.now())
        }, t.prototype.getCurrentCPU = function() {
            for (var e = this.data, t = e.dataArray, n = 0, r = t.length, i = 0, o = r - 1; o >= 0 && (i += t[o], n++, !(n >= 3)); o--);
            return 0 == n ? 0 : i / n
        }, t.prototype.getTimeIndex = function(e, t) {
            for (var n = this.data.timeArray, r = 0; r < n.length; r++)
                if (t) {
                    if (n[r] - n[0] > e) return r - 1
                } else if (n[r] - n[0] >= e) return r;
            return n.length
        }, t.prototype.getOverPerAmount = function(e, t, n) {
            for (var r = this.data, i = this.getTimeIndex(t), o = this.getTimeIndex(n, 1), a = r.dataArray, s = 0, c = i; c < o; c++) "undefined" != typeof a[c] && a[c] >= e && s++;
            return s
        }, t.prototype.getTotalSize = function(e, t) {
            var n = this.data,
                r = this.getTimeIndex(e),
                i = this.getTimeIndex(t, !0),
                o = n.size_line[i];
            o || (o = n.size_line[n.size_line.length - 1]);
            var a = o - n.size_line[r];
            return a
        }, e.cpu = t
    }(window), e.exports = cpu
}]);