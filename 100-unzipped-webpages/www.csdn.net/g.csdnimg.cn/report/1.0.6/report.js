! function(n) {
    var i, e, c, a, s, d, p, u;
    s = [], u = {
        pv: (i = {
            DELAY: 500,
            API_VERSION: "0.6.0",
            SERVER_URL: "https://event.csdn.net/"
        }).SERVER_URL + "logstores/csdn-pc-tracking-pageview/track_ua.gif?APIVersion=" + i.API_VERSION,
        click: i.SERVER_URL + "logstores/csdn-pc-tracking-page-click/track_ua.gif?APIVersion=" + i.API_VERSION,
        view: i.SERVER_URL + "logstores/csdn-pc-tracking-page-exposure/track"
    }, a = {
        PV: "pv",
        VIEW: "view",
        CLICK: "click"
    }, p = {
        SKIPPED_AND_VISIBLE: "0",
        VISIBLE: "1"
    }, c = {
        getTimestamp: function() {
            return Math.round(new Date / 1e3)
        },
        getXPath: function(e) {
            if ("" !== e.id) return '//*[@id="' + e.id + '"]';
            if (e == document.body) return "/html/" + e.tagName.toLowerCase();
            if (!e.parentNode) return "";
            for (var t = 1, o = e.parentNode.childNodes, r = 0, n = o.length; r < n; r++) {
                var i = o[r];
                if (i == e) return arguments.callee(e.parentNode) + "/" + e.tagName.toLowerCase() + "[" + t + "]";
                1 == i.nodeType && i.tagName == e.tagName && t++
            }
        },
        getScreen: function() {
            return window.screen.width + "*" + window.screen.height
        },
        getCookie: function(e) {
            var t, o = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(o)) ? unescape(t[2]) : ""
        },
        initData: function() {
            var e, t;
            return d = {
                cid: (null != (e = /(; )?(uuid_tt_dd|_javaeye_cookie_id_)=([^;]+)/.exec(window.document.cookie)) ? e[3] : void 0) || "",
                sid: c.getCookie("dc_session_id") || "",
                pid: window.location.host.split(".csdn.net")[0],
                uid: c.getCookie("UserName"),
                ref: window.document.referrer,
                curl: window.location.href,
                dest: "",
                cfg: {
                    viewStrategy: p.VISIBLE
                }
            }, n("meta[name=report]").attr("content") && (t = JSON.parse(n("meta[name=report]").attr("content"))), t && (d = n.extend({}, d, t)), d
        },
        tos: function() {
            var e, t, o, r;
            e = +new Date / 1e3 | 0, o = null != (t = /\bdc_tos=([^;]*)(?:$|;)/.exec(document.cookie)) ? t[1] : void 0;
            try {
                r = e - parseInt(o, 36)
            } catch (e) {
                console.warn("tos init error", e), r = -1
            }
            return document.cookie = "dc_tos=" + e.toString(36) + " ; expires=" + new Date(1e3 * (e + 14400)).toGMTString() + " ; max-age=14400 ; path=/ ; domain=." + this.topDomain(window.location.host), r
        },
        topDomain: function(e) {
            return /\.?([a-z0-9\-]+\.[a-z0-9\-]+)(:\d+)?$/.exec(e)[1]
        },
        copyArr: function(e) {
            for (var t = [], o = 0; o < e.length; o++) t.push(e[o]);
            return t
        },
        isView: function(e, t) {
            var o = this;
            if (!e) return !1;
            var r = this.getElementBottom(e),
                n = r + e.offsetHeight;
            return p.VISIBLE == t ? o.scrollTop() < r && r < o.scrollTop() + o.windowHeight() || o.scrollTop() < n && n < o.scrollTop() + o.windowHeight() : p.SKIPPED_AND_VISIBLE == t ? r <= o.scrollTop() + o.windowHeight() || (o.scrollTop() < r && r < o.scrollTop() + o.windowHeight() || o.scrollTop() < n && n < o.scrollTop() + o.windowHeight()) : void 0
        },
        scrollTop: function() {
            return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
        },
        windowHeight: function() {
            return "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
        },
        getElementTop: function(e) {
            if ("undefined" != typeof jQuery) return n(e).offset().top;
            var t = e.offsetTop;
            for (e = e.offsetParent; null != e;) t += e.offsetTop, e = e.offsetParent;
            return t
        },
        getElementBottom: function(e) {
            if ("undefined" != typeof jQuery) return n(e).offset().top + n(e).height();
            var t = e.offsetTop;
            for (e = e.offsetParent; null != e;) t += e.offsetTop, e = e.offsetParent;
            return t
        },
        url2Obj: function(e) {
            var t = {},
                o = e.split("&");
            for (var r in o) t[o[r].split("=")[0]] = decodeURIComponent(o[r].split("=")[1]);
            return t
        },
        fixParamConTop: function(e, t) {
            return -1 < e.con.split(",top_") || (e.con = e.con + ",top_" + n(t).offset().top), e
        }
    }, e = {
        timer: 0,
        checkTimer: 0,
        reportServer: function(e, t) {
            void 0 !== e && void 0 !== t && s.push(t);
            var o = c.copyArr(s);
            if (0 != o.length) {
                s = [];
                var r = {
                    __source__: "csdn",
                    __logs__: o
                };
                n.ajax({
                    url: u[a.VIEW],
                    type: "POST",
                    crossDomain: !0,
                    xhrFields: {
                        withCredentials: !1
                    },
                    contentType: "text/plain;charset=UTF-8",
                    headers: {
                        "x-log-apiversion": i.API_VERSION,
                        "x-log-bodyrawsize": "1234"
                    },
                    data: JSON.stringify(r),
                    success: function() {},
                    error: function() {
                        console.error("csdn.report.reportServer()", arguments)
                    }
                })
            }
        },
        reportServerDelay: function(e, t) {
            s.push(t);
            var o = this;
            o.timer && clearTimeout(o.timer), o.timer = setTimeout(function() {
                o.reportServer()
            }, i.DELAY)
        },
        reportView: function(e, t, o) {
            if (e) {
                var r = n.extend(!0, {}, d, e);
                r.t = c.getTimestamp() + "", r.eleTop = t ? t.offset().top + "" : "", delete r.cfg, r.__time__ = c.getTimestamp(), void 0 === o ? this.reportServerDelay(a.VIEW, r) : this.reportServer(a.VIEW, r), "function" == typeof csdn.afterReportView && csdn.afterReportView(t, e)
            } else console.warn("reportView Error:", e)
        },
        reportClick: function(e, t) {
            var o = n.extend(!0, {}, d, e);
            o.t = c.getTimestamp(), o.elePath = t ? c.getXPath(t[0]) + "" : "", o.eleTop = t ? t.offset().top + "" : "", delete o.cfg, n.ajax({
                url: u[a.CLICK],
                type: "get",
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !1
                },
                contentType: "text/plain;charset=UTF-8",
                data: o,
                success: function() {},
                error: function() {
                    console.error("csdn.report.reportServer()", arguments)
                }
            })
        },
        reportPageView: function(e) {
            var t = n.extend(!0, {}, d, e);
            t.tos = c.tos(), t.adb = c.getCookie("c_adb") || 0, t.t = c.getTimestamp(), t.screen = c.getScreen(), t.un = c.getCookie("UN") || "", t.vType = c.getCookie("p_uid") || "", delete t.cfg, delete t.dest, n.ajax({
                url: u[a.PV],
                type: "get",
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !1
                },
                contentType: "text/plain;charset=UTF-8",
                data: t,
                success: function() {},
                error: function() {
                    console.error("csdn.report.reportServer()", arguments)
                }
            })
        },
        viewCheck: function() {
            clearTimeout(this.checkTimer), this.checkTimer = setTimeout(function() {
                n("[data-report-view]").each(function() {
                    var e = n(this),
                        t = n.extend({}, d, e.data("reportView"));
                    c.isView(e.get(0), t.cfg.viewStrategy) && (csdn.report.reportView(t, e), e.removeData("reportView"), e.removeAttr("data-report-view"))
                })
            }, 200)
        },
        isView: function(e) {
            return c.isView(e)
        }
    }, void 0 === window.csdn && (window.csdn = {}), csdn.report ? console.warn("上报脚本重复，请检查") : (window.csdn.report = e, (d = c.initData()).disabled || csdn.report.reportPageView())
}(jQuery), jQuery(function() {
    var t = csdn.report;
    jQuery(document).on("click", "[data-report-click]", function() {
        var e = jQuery(this).data("reportClick");
        t.reportClick(e, jQuery(this))
    }), t.viewCheck(jQuery("[data-report-view]")), jQuery(window).on("scroll", function() {
        t.viewCheck(jQuery("[data-report-view]"))
    })
});