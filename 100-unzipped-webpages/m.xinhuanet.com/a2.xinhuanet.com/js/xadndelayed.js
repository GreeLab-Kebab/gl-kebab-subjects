var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
!window.once_ren_slot_done && function(e, t, i, n) {
    window.once_ren_slot_done = !0;
    var r = e.document,
        o = "YCADS",
        a = function() {
            if (r.currentScript) return r.currentScript;
            for (var e = r.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
                var i = e[t];
                if ("interactive" === i.readyState) return i
            }
            return e[e.length - 1]
        }(),
        s = r.getElementsByTagName("head")[0],
        l = r.location,
        h = function(e) {
            try {
                e = top.document.URL
            } catch (e) {}
            return e
        }(r.URL),
        c = function(e) {
            try {
                e = top.document.referrer
            } catch (e) {}
            return e
        }(r.referrer),
        d = function(e) {
            try {
                e = top.document.title
            } catch (e) {}
            return e || ""
        }(r.title),
        g = (l.hostname || h.match(/^https?:\/\/([^\/?#&:]+)/i), l.hash && l.hash.substr(1) || h.split("#")[1], l.search && l.search.substr(1) || h.split("?")[1], navigator.userAgent.toLowerCase(), function() {
            for (var e, t = "", i = function(e) {
                    try {
                        e = top.document.getElementsByTagName("meta")
                    } catch (e) {}
                    return e
                }(r.getElementsByTagName("meta")), n = i.length; n--;)
                if (e = i[n], /keyw/i.test(e.name)) {
                    t = (e.content || d).replace(/[\u03B6]+/g, "!$");
                    break
                }
        }(), (navigator.userAgent.match(/MSIE([^;]+)/i) || [])[1] || 100),
        f = function(e) {
            var t = /^\s+|\s+$|\r\n|\r|\n/g;
            try {
                return new Function("return (" + e.replace(t, "") + ")")()
            } catch (e) {}
            return e
        },
        p = function(e, t) {
            for (var i, n = /<%(.+?)%>/g, r = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g, o = "with(obj) { var r=[];\n", a = 0, s = function e(t, i) {
                    return o += i ? t.match(r) ? t + "\n" : "r.push(" + t + ");\n" : "" != t ? 'r.push("' + t.replace(/"/g, '\\"') + '");\n' : "", e
                }; match = n.exec(e);) s(e.slice(a, match.index))(match[1], !0), a = match.index + match[0].length;
            s(e.substr(a, e.length - a)), o = (o + 'return r.join(""); }').replace(/[\r\t\n]/g, " ");
            try {
                i = new Function("obj", o).apply(t, [t])
            } catch (e) {
                console.error("'" + e.message + "'", " in \n\nCode:\n", o, "\n")
            }
            return i
        },
        m = function(e) {
            e && e.parentNode && "BODY" != e.tagName.toUpperCase() && e.parentNode.removeChild(e)
        },
        u = function(e, t) {
            return e.currentStyle ? e.currentStyle[t] : getComputedStyle(e, !1)[t]
        },
        b = function e(t, i, n) {
            n = n || {}, n.time = n.time || 700, n.fn = n.fn || null, n.type = n.type || "ease-out";
            var r = {},
                o = {},
                a = Math.round(n.time / 30),
                s = 0;
            for (var l in i) r[l] = parseFloat(u(t, l)) || 0, o[l] = i[l] - r[l];
            clearInterval(t.timer), t.timer = setInterval(function() {
                s++;
                for (var l in i) {
                    switch (n.type) {
                        case "linear":
                            var h = s / a,
                                c = r[l] + o[l] * h;
                            break;
                        case "ease-in":
                            var h = s / a,
                                c = r[l] + o[l] * (h * h * h);
                            break;
                        case "ease-out":
                            var h = 1 - s / a,
                                c = r[l] + o[l] * (1 - h * h * h);
                            break;
                        case "ease":
                            if (s / a <= .5) var h = s / a * 1.5,
                                c = r[l] + o[l] * (h * h * h);
                            else e(t, i, {
                                time: n.time / 2,
                                fn: n.fn
                            })
                    }
                    "opacity" == l ? (t.style.opacity = c, t.style.filter = "alpha(opacity=" + 100 * c + ")") : t.style[l] = c + "px"
                }
                s == a && (clearInterval(t.timer), n.fn && n.fn())
            }, 30)
        },
        y = function(e, t, i) {
            var n = r.createElement("script");
            n.onload = n.onreadystatechange = function() {
                /m|ded/i.test(this.readyState || "m") && (n.onload = n.onreadystatechange = null, n.parentNode.removeChild(n), t && t())
            }, n.src = e, i ? i.parentNode.insertBefore(n, i) : s.insertBefore(n, s.firstChild)
        },
        x = function(e) {
            2 == e.length && (2 == e[1] ? (new Image).src = e[0] : y(e[0]))
        },
        w = function(e) {
            if (e) return e;
            setTimeout(arguments.callee, 64)
        }(r.body);
    i.init = function(e, t, i) {
        var n = this,
            i = i;
        rom = "" + (new Date).getTime() + Math.floor(1e3 * Math.random()), i.style.textDecoration = "none", n.croDomain("http://a3.xinhuanet.com/s?", {
            d: "xinhuanetv2",
            url: h,
            ref: c,
            sid: e,
            r: rom,
            bt: window._ycads_bt || ""
        }, function(e, i) {
            e = e || {}, 0 == e.code && n.render(e, t, "", i)
        }, rom, i), getPicTextCodeExposure = function(e, t, i) {
            var n = r.createElement("script");
            n.onload = n.onreadystatechange = function() {
                /m|ded/i.test(this.readyState || "m") && (n.onload = n.onreadystatechange = null, n.parentNode.removeChild(n), t && t())
            }, n.src = e, i ? i.parentNode.insertBefore(n, i) : s.insertBefore(n, s.firstChild)
        }, getPicTextCodeMoni = function(e) {
            2 == e.length && 2 == e[1] && ((new Image).src = e[0])
        }, textOnclick = function(e) {
            e && (e = e.split(",")), 2 == e.length && getPicTextCodeMoni(e)
        }
    }, i.croDomain = function(t, i, n, o, a) {
        var s, l, h = e.postMessage,
            c = "_state",
            d = "YCADS_IFR_" + o,
            g = r.createElement("form"),
            p = r.createDocumentFragment(),
            a = a;
        ia = function() {
                var e = r.createElement("iframe");
                try {
                    e = r.createElement("<iframe name='" + d + "'>")
                } catch (t) {
                    e.name = d
                }
                return p.appendChild(e), e.setAttribute(c, 0), e
            }(), bp = function(t) {
                try {
                    l = f((t || e.event).data || ""), l.r == o && (m(g), ia.setAttribute(c, 2), n(l, a))
                } catch (e) {}
            }, be = function() {
                if (1 == ia.getAttribute(c)) try {
                    l = f(ia.contentWindow.name), l.r == o && (m(g), ia.setAttribute(c, 2), n(l, a))
                } catch (e) {
                    m(g)
                } else 0 == ia.getAttribute(c) && setTimeout(function() {
                    try {
                        ia.contentWindow.location.replace("about:blank")
                    } catch (e) {}
                    ia.setAttribute(c, 1)
                }, e.opera ? 3e3 : 36)
            },
            function() {
                if (g.style.display = "none", g.action = t, g.target = d, g.id = "YCADS_FORM_" + o, g.method = "post", i && "object" == (void 0 === i ? "undefined" : _typeof(i)))
                    for (var n in i)
                        if (i.hasOwnProperty(n)) {
                            try {
                                s = r.createElement('<input type="hidden" name=\'' + n + "'>")
                            } catch (e) {
                                s = r.createElement("input"), s.type = "hidden"
                            }
                            p.appendChild(s), s.name = n, s.id = n, s.value = i[n]
                        }
                e.addEventListener ? (e.addEventListener("message", bp, !1), h || ia.addEventListener("load", be, !1)) : (e.attachEvent("onmessage", bp), h || ia.attachEvent("onload", be)), w.insertBefore(g, w.firstChild), g.appendChild(p), g.submit(), ia.removeAttribute("name")
            }()
    }, i.render = function(t, i, n, s) {
        n = t.r;
        var l = String(t.ct),
            h = t.n,
            c = t.w,
            d = t.h,
            f = t.u,
            m = t.c,
            u = t.e,
            y = t.cw,
            v = t.ch,
            k = t.hl,
            C = t.lp || 0,
            T = t.top,
            E = 1e3 * t.tm,
            I = t.dis && t.dis[0] || 0,
            A = t.dis && t.dis[1] || 0,
            B = t.lic,
            s = s;
        strToDom = function(e, t) {
            return "string" == typeof e ? (t = r.createElement("div"), t.innerHTML = e, t) : e
        }, fixedPosition = function(t, i) {
            var n = e.innerHeight || r.documentElement.clientHeight || r.body.clientHeight,
                o = e.innerWidth || r.documentElement.clientWidth || r.body.clientWidth,
                a = r.documentElement.scrollTop || r.body.scrollTop,
                s = r.documentElement.scrollLeft || r.body.scrollLeft;
            ! function() {
                1 == i ? (b(t, {
                    top: a + n / 2
                }), t.style.left = s + "px") : 2 == i ? (b(t, {
                    top: a + n / 2
                }), t.style.left = s + o - t.offsetWidth + "px") : 3 == i && (t.style.top = a + n - t.offsetHeight + "px", t.style.left = s + o - t.offsetWidth + "px")
            }()
        }, getFlashCode = function(e, t, i) {
            var n = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" align="middle" width="<%width%>" height="<%height%>"><param name="allowScriptAccess" value="always" /><param name="movie" value="<%src%>"/><param name="quality" value="high"/><param name="bgcolor" value="#000"/><param name="height" value="<%height%>" /><param name="width" value="<%width%>" /><param name="FlashVars" value="<%bar%>" /><param name="allowFullScreen" value="<%full%>" /><param name="wmode" value="<%wmode%>" /><embed src="<%src%>" quality="high" bgcolor="#000" width="<%width%>" height="<%height%>" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowscriptaccess="always" loop="true" allowfullscreen="<%full%>" flashvars="<%bar%>" wmode="<%wmode%>"></embed></object>';
            return n = p(n, {
                src: e,
                width: t,
                height: i,
                bar: !1,
                wmode: "transparent",
                full: !1
            })
        }, getTextCode = function(e) {
            var t = (19 == l ? "<style>#YCADS" + _ + "_" + n + " a:hover{color:#fca22c !important;text-decoration:underline;}</style>" : " <style> #YCADS" + _ + "_" + n + " a:hover{ color: #ff9724 !important;}  </style> ") + '<%for(var i=0;i<e.length;i++){;getPicTextCodeExposure(e[i].pvm);%><a onclick="textOnclick(\'<%e[i].ckm%>\')" href="<%e[i].link%>" target="<%target%>" title="<%e[i].text%>" style="<%style%>"><%e[i].text%></a><%}%>';
            return text = p(t, {
                e: e,
                target: "_blank",
                style: "display:" + (19 == l ? "block" : "inline-block") + ";line-height:24px;padding:0 5px;margin-right:5px;font-family:simsun;font-size:14px;color:#000;text-decoration: none;"
            }), text
        }, getPicTextCode = function(e, t, i, r) {
            var a = "<style>#YCADS" + _ + "_" + n + " .picTitle{ text-decoration: none }  .picTitle:hover{ text-decoration: underline !important; }  img{-moz-transition:-moz-transform .3s ease;-ms-transition:-ms-transform .3s ease;transition:transform .3s ease; }#" + o + _ + "_" + n + " img:hover{-webkit-transform:scale(1.1); -moz-transform:scale(1.1); -ms-transform:scale(1.1); transform:scale(1.1);}</style>",
                s = 1 == r ? "" : '<a class="picTitle" href="<%e[i].link%>" title="<%e[i].text%>" target="<%target%>" style="display:block;line-height:30px;font-size:22px;color:#000;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:\'微软雅黑\';"><%e[i].text%></a>',
                h = [17 == l ? a : "<style> #YCADS" + _ + "_" + n + " .picTitle {text-decoration: none;} #" + o + _ + "_" + n + " .picTitle:hover { text-decoration: underline;}  </style>", "<%for(var i=0;i<e.length;i++){;getPicTextCodeExposure(e[i].pvm);%>", 17 == l ? s : "", 1 == r ? '<div onclick="textOnclick(\'<%e[i].ckm%>\')" style="position:relative;margin-bottom:10px;padding-left:30%;"><a href="<%e[i].link%>" target="<%target%>" style="position:absolute;top:0;left:0;overflow:hidden;width:2.8rem;height: 1.92266rem;_margin-left: -<%(width +10)%>px;"><img style="dis; display: block;width: 100%;height: 100%;" title="<%e[i].text%>" src="<%e[i].img%>" border="0" width="<%width%>" height="<%height%>" /></a>' : '<div onclick="textOnclick(\'<%e[i].ckm%>\')" style="position:relative;margin-bottom:10px;padding-left:<%width%>px;"><a href="<%e[i].link%>" target="<%target%>" style="position:absolute;top:0;left:0;overflow:hidden;width:<%width%>;height:<%height%>px;_margin-left: -<%(width +10)%>px;"><img style="dis" title="<%e[i].text%>" src="<%e[i].img%>" border="0" width="<%width%>" height="<%height%>" /></a>', 1 == r ? '<div style="line-height:24px;height:<%height%>px;margin:0px 0px 0px 10px;overflow: hidden;color: #333;font-size:0.4666rem; line-height: 1.3">' : '<div style="line-height:24px;height:<%height%>px;margin:0px 0px 0px 10px;overflow: hidden;color: #666;font-size:14px;">', 17 == l ? "" : s, "<div><%e[i].desc%>", 17 == l ? "" : ' [<a style="color:#454545;text-decoration: none;" href="<%e[i].link%>" target="_blank">详情</a>]', "</div></div></div>", "<%}%>"].join("");
            return text = p(h, {
                e: e,
                width: parseInt(t),
                height: parseInt(i),
                target: "_blank",
                cwh: r
            }), text
        }, getVideoCode = function(e, t, i) {
            return ""
        }, initFrameCode = function(e, t, i, n, r) {
            var o = document,
                a = o.getElementsByTagName("base"),
                s = a[a.length - 1],
                l = o.createElement("iframe");
            try {
                l = o.createElement("<iframe  name='" + r + "'>")
            } catch (e) {}
            if (l.allowTransparency = "true", l.allowScriptsToClose = !0, l.allowsUntrusted = !0, l.frameBorder = l.marginHeight = l.marginWidth = 0, l.scrolling = "no", l.style.cssText = "width:" + i + "px;height:" + n + "px;", e.insertBefore(l, e.firstChild), s && (self._target_x = self._target_x || s.target, s.setAttribute("target", "_self")), l.attachEvent ? l.attachEvent("onload", function() {
                    s && self._target_x && s.setAttribute("target", self._target_x), l.onload = null, l.width = i, l.height = n
                }) : l.onload = function() {
                    s && self._target_x && s.setAttribute("target", self._target_x), l.onload = null, l.width = i, l.height = n
                }, r) l.src = decodeURIComponent(t);
            else {
                r = ['<html><head><base target="_blank"></base><style>*{margin:0;padding:0;border:0}body,html{background-color:transparent;overflow:hidden;width:100%;height:100%}a{cursor:pointer;text-decoration:none;outline:none;hide-focus:expression(this.hideFocus=true);box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:hidden}</style></head><body oncontextmenu="return false">', "</body></html>"].join(decodeURIComponent(t || ""));
                var h = /MSIE 6.0/gi.test(navigator.appVersion);
                l.contentWindow.name = r, h && (window.name = r), l.src = "javascript:void(~function(l){" + (function(e) {
                    try {
                        l.contentWindow.document
                    } catch (t) {
                        e = 1
                    }
                    return e
                }(0) ? 'l.domain="' + o.domain + '";' : "") + "if(/MSIE 6.0/ig.test(navigator.appVersion)){l.write(parent.name)}else{l.write(self.name)}}(document))"
            }
            setTimeout(function() {
                s && self._target_x && s.setAttribute("target", self._target_x)
            }, 3e3)
        }, getInner = function(e, i, o, a) {
            var s = i.src,
                h = i.cw,
                c = i.ch,
                d = i.link,
                g = 0 == t.ren ? i.type : 0,
                f = i.width,
                m = i.height,
                u = "",
                b = i.pos,
                y = "YCADS_MASK_" + n,
                w = '<span style="position:absolute;' + b + 'z-index:2147483647;line-height: 18px;height: 18px;width: 38px;font-size: 14px;top: -18px;text-align: center;background-color: #fff;cursor: pointer;color: #676767;"onclick="(function(b){b=b.parentNode,b&&document.body.removeChild(b)})(this)">关闭</span>',
                v = 1 == a ? '<a href="<%link%>" target="_blank" style="position:absolute;z-index:2147483647;top:<%top%>;right:5px;left:<%left%>;bottom:13px;width:<%width%>px;height: <%height%>px;background:url(<%src%>) center center no-repeat;background-size: 100% 100%;"></a>' : '<a href="<%link%>" target="_blank" style="position:absolute;z-index:2147483647;top:<%top%>;right:<%right%>;left:<%left%>;bottom:<%bottom%>;width:<%width%>px;height: <%height%>px;background:url(<%src%>) center center no-repeat;background-size: 100% 100%;"></a>',
                k = '<a href="<%link%>" target="<%target%>" id="<%id%>" style="position:absolute;top:0;left:0;width:<%width%>px;height:<%height%>px;cursor:pointer;outline:none;background-color:#fff;opacity:0;filter:alpha(opacity=0);"></a>',
                _ = a ? '<img height="<%height%>" width="<%width%>" border="0" src="<%src%>" style="width:<%width%>;height:<%height%>;line-height:<%height%>;display:block;" />' : '<img height="<%height%>" width="<%width%>" border="0" src="<%src%>" style="width:<%width%>px;height:<%height%>px;line-height:<%height%>px;display:block;" />';
            switch (k = 0 == C ? p(k, {
                link: d,
                target: "_blank",
                id: y,
                width: f,
                height: m
            }) : "", _ = p(_, {
                height: m,
                width: f,
                src: s
            }), 3 != l && 11 != l && 13 != l || (k += w), t.fg && t.fg.length > 0 && !o && (v = p(v, {
                width: 20,
                height: 14,
                link: t.fg[2],
                src: t.fg[1],
                top: 1 == t.fg[0] || 3 == t.fg[0] ? "0" : "auto",
                left: 1 == t.fg[0] || 2 == t.fg[0] ? "0" : "auto",
                bottom: 4 == t.fg[0] || 2 == t.fg[0] ? "0" : "auto",
                right: 3 == t.fg[0] || 4 == t.fg[0] ? "0" : "auto"
            }), e.insertAdjacentHTML("beforeend", v)), String(g)) {
                case "0":
                    u += k + _, e.insertAdjacentHTML("beforeend", u);
                    break;
                case "1":
                    u += k + getFlashCode(s, f, m);
                    break;
                case "2":
                    u += k + getVideoCode(s, f, m);
                    break;
                case "3":
                    u += getTextCode(s), e.insertAdjacentHTML("beforeend", u);
                    break;
                case "4":
                    u += getPicTextCode(s, h, c, a), e.insertAdjacentHTML("beforeend", u);
                    break;
                case "5":
                    e.insertAdjacentHTML("beforeend", k), initFrameCode(e, t.hl, i.width, i.height);
                    break;
                case "6":
                    e.insertAdjacentHTML("beforeend", k), initFrameCode(e, '<script type="text/javascript" src="' + t.hl + '"><\/script>', i.width, i.height);
                    break;
                case "7":
                    e.insertAdjacentHTML("beforeend", k), initFrameCode(e, t.hl, i.width, i.height);
                    break;
                case "8":
                    e.insertAdjacentHTML("beforeend", k), initFrameCode(e, t.hl, i.width, i.height, 1)
            }
            3 != g && (x(t.pvm), 0 == C && (r.getElementById(y).onclick = function() {
                x(t.ckm)
            }))
        };
        var z, S = ['<html><head><style>*{margin:0;padding:0;border:0}body,html{background-color:transparent;overflow:hidden;width:100%;height:100%}a{cursor:pointer;text-decoration:none;outline:none;hide-focus:expression(this.hideFocus=true);box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:hidden}</style></head><body oncontextmenu="return false">', "</body></html>"],
            j = '<script type="text/javascript">self._ycads_bt=1;<\/script><ins class="adsbyycad" data-ycad-slot="' + t.sid + '"></ins><script type="text/javascript" src="' + a.src + '" ><\/script>',
            M = "titlebar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no,copyhistory=yes,left=" + (e.screen.width / 2 - c[0] / 2) + ",top=" + (e.screen.height / 2 - d[0] / 2) + ",width=" + c[0] + ",height=" + d[0],
            N = 'position:relative;z-index:100;width:<%width=="auto"?"100%":width+"px"%>;height:<%height=="auto"?"auto":height+"px"%>;overflow:hidden;display:block;background-color:#F2F8FA;margin:' + I + "px auto " + A + "px auto;";
        5 == l && e._ycads_bt && (l = 100), (f.length > 0 || u.length > 0 || k.length > 10) && function() {
            var a;
            if (3 == l) 0 == t.ren ? (a = r.createElement("div"), N += "position:fixed;_position:absolute;overflow:inherit;z-index:2147483647;bottom:0;right:0;", a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, w.insertBefore(a, w.firstChild), g < 8 && function() {
                fixedPosition(a, 3), e.onresize = e.onscroll = function() {
                    fixedPosition(a, 3)
                }
            }(), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0],
                pos: "right:0;"
            })) : (a = r.createElement("div"), N += "position:fixed;_position:absolute;z-index:2147483647;bottom:0;right:0;", a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, s.parentNode && s.parentNode.insertBefore(a, s), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0]
            }));
            else if (5 == l) z = e.open("about:blank", "_blank", M),
                function() {
                    z ? (z.name = S.join(j), z.location.href = "javascript:void(~function(l){l.open();l.write(self.name);l.close()}(document))") : setTimeout(arguments.callee, 100)
                }();
            else if (8 == l) 0 == t.ren ? (x(t.pvm), s.insertAdjacentHTML("beforebegin", decodeURIComponent(t.hl))) : (a = r.createElement("div"), a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0]
            }));
            else if (9 == l)
                if (0 == t.ren) {
                    var k = r.createElement("div"),
                        a = r.createElement("div");
                    a.style.cssText = p(N, {
                        height: d[0],
                        width: c[0]
                    }), a.id = o + _ + "_fix_" + n, s.insertBefore(a, s.firstChild), s.insertBefore(a, s.firstChild), N += "position:absolute;z-index:2147483647;top:0;left:50%;margin-left:<%-width/2%>px;", k.style.cssText = p(N, {
                        height: 0,
                        width: c[1]
                    }), k.id = o + _ + "_top_" + n, w.insertBefore(k, w.firstChild), b(k, {
                        height: d[1]
                    }, {
                        fn: function() {
                            setTimeout(function() {
                                b(k, {
                                    height: 0
                                }, {
                                    fn: function() {
                                        w.removeChild(k)
                                    }
                                })
                            }, 3600)
                        }
                    }), getInner(a, {
                        src: f[0],
                        link: m[0],
                        type: h,
                        width: c[0],
                        height: d[0]
                    }), getInner(k, {
                        src: f[1],
                        link: m[1],
                        type: h,
                        width: c[1],
                        height: d[1]
                    }, 1)
                } else a = r.createElement("div"), a.style.cssText = p(N, {
                    height: d[0],
                    width: c[0]
                }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                    src: f[0],
                    link: m[0],
                    type: h,
                    width: c[0],
                    height: d[0]
                });
            else if (10 == l || 19 == l) N += 1 == B ? "" : "background-color:transparent;", a = r.createElement("div"), 0 == t.ren ? (a.style.cssText = p(N, {
                height: "auto",
                width: "auto"
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: u,
                type: 3
            })) : (a = r.createElement("div"), a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0]
            }));
            else if (17 == l || 20 == l) N += "background-color:transparent;", a = r.createElement("div"), 0 == t.ren ? (a.style.cssText = p(N, {
                height: "auto",
                width: "auto"
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: u,
                type: 4,
                cw: y[0],
                ch: v[0]
            }, "", i)) : (a = r.createElement("div"), a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0]
            }, "", i));
            else if (21 == l) 0 == t.ren ? (a = r.createElement("div"), N += "position: absolute;top: 50%;left: 0; top: 0; right: 0; bottom: 0;margin: auto;", a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), setTimeout(function() {
                b(a, {
                    height: 0
                }, {
                    fn: function() {
                        w.removeChild(a)
                    }
                })
            }, E), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0]
            })) : (a = r.createElement("div"), a.style.cssText = p(N, {
                height: d[0],
                width: c[0]
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: c[0],
                height: d[0]
            }));
            else if (11 == l)
                if (0 == t.ren) {
                    var C = r.createElement("div"),
                        I = r.createElement("div");
                    N += "position:absolute;top:<%top%>;_position:absolute;overflow: inherit;z-index:1000;<%style%>", C.style.cssText = p(N, {
                        height: d[0],
                        width: c[0],
                        style: "left:0;",
                        top: T + "px"
                    }), I.style.cssText = p(N, {
                        height: d[1],
                        width: c[1],
                        style: "right:0;",
                        top: T + "px"
                    }), C.id = o + _ + "_l_" + n, w.insertBefore(C, w.firstChild), I.id = o + _ + "_r_" + n, w.insertBefore(I, w.firstChild), getInner(C, {
                        src: f[0],
                        link: m[0],
                        type: h,
                        width: c[0],
                        height: d[0],
                        pos: "left:0;"
                    }), getInner(I, {
                        src: f[1],
                        link: m[1],
                        type: h,
                        width: c[0],
                        height: d[0],
                        pos: "right:0;"
                    })
                } else a = r.createElement("div"), a.style.cssText = p(N, {
                    height: d[0],
                    width: c[0]
                }), a.id = o + _ + "_" + n, s.parentNode && s.parentNode.insertBefore(a, s), getInner(a, {
                    src: f[0],
                    link: m[0],
                    type: h,
                    width: c[0],
                    height: d[0]
                });
            else if (13 == l) {
                var A, F = 1,
                    L = 1,
                    H = function() {
                        var e = a.offsetHeight,
                            t = a.offsetWidth,
                            i = r.documentElement.clientHeight || r.body.clientHeight,
                            n = r.documentElement.clientWidth || r.body.clientWidth,
                            o = n - t,
                            s = i - e,
                            l = a.offsetLeft + F,
                            h = a.offsetTop + L;
                        (l > o || l < 0) && (F *= -1), (h > s || h < 0) && (L *= -1), a.style.left = l + "px", a.style.top = h + "px"
                    };
                a = r.createElement("div"), N += "position:fixed;_position:absolute;z-index:2147483647;left:0;top:0;", a.insertAdjacentHTML("beforeend", getInner(f[0], m[0], h, c[0], d[0]) + '<div onclick="document.body.removeChild(this.parentNode)" style="position:absolute;top:0;right:0;height:18px;line-height:18px;width:18px;text-align:center;font-size:18px;font-family:simsun;background-color:#ccc;opacity:0.8;cursor: pointer;"> &times; </div>'), a.style.cssText = p(N, {
                    height: d[0],
                    width: c[0]
                }), a.id = o + _ + "_" + n, w.insertBefore(a, w.firstChild), A = setInterval(H, 45), a.onmouseover = function() {
                    clearInterval(A)
                }, a.onmouseout = function() {
                    A = setInterval(H, 50)
                }
            } else 0 == t.ren ? (a = r.createElement("div"), a.style.cssText = p(N, {
                height: i ? "auto" : d[0],
                width: i ? "100%" : c[0]
            }), a.id = o + _ + "_" + n, s.insertBefore(a, s.firstChild), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: i ? "100%" : c[0],
                height: i ? "auto" : d[0]
            }, "", i)) : (a = r.createElement("div"), a.style.cssText = p(N, {
                height: i ? "auto" : d[0],
                width: i ? "100%" : c[0]
            }), a.id = o + _ + "_" + n, s.parentNode && s.parentNode.insertBefore(a, s), getInner(a, {
                src: f[0],
                link: m[0],
                type: h,
                width: i ? "100%" : c[0],
                height: i ? "auto" : d[0]
            }, "", i))
        }()
    };
    for (var v = document.getElementsByTagName("ins"), k = 0; k < v.length; k++) {
        var _ = v[k].getAttribute("data-ycad-slot") || 0,
            C = v[k].getAttribute("data-ycad-nwh") || 0,
            T = v[k];
        _ && i.init(_, C, T)
    }
}(window, 0, {
    v: "20170927.001"
});