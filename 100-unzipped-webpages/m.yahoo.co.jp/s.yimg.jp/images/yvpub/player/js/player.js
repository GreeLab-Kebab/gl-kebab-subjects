// env.js 1.2.3
/*
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
*/


/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright c 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */


/*!
 * Joseph Myer's md5() algorithm wrapped in a self-invoked function to prevent
 * global namespace polution, modified to hash unicode characters as UTF-8.
 *
 * Copyright 1999-2010, Joseph Myers, Paul Johnston, Greg Holt, Will Bond <will@wbond.net>
 * http://www.myersdaily.org/joseph/javascript/md5-text.html
 * http://pajhome.org.uk/crypt/md5
 *
 * Released under the BSD license
 * http://www.opensource.org/licenses/bsd-license
 */


/*
 Copyright 2011-2013 Abdulla Abdurakhmanov
 Original sources are available at https://code.google.com/p/x2js/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/*! yvpubplayer - v1.7.4_1 - 2019-08-21 */
if (void 0 === YAHOO) var YAHOO = {};
if (YAHOO.namespace = window.YAHOO.namespace || function() {
        "use strict";
        var a, b, c, d = arguments,
            e = null;
        for (a = 0; a < d.length; a += 1)
            for (c = String(d[a]).split("."), e = YAHOO, b = 0; b < c.length; b += 1) e[c[b]] = e[c[b]] || {}, e = e[c[b]];
        return e
    }, YAHOO.namespace("JP.lib.env"), YAHOO.JP.lib.env = window.YAHOO.JP.lib.env = {
        os: {
            name: decodeURI("%E4%B8%8D%E6%98%8E"),
            code: "na"
        },
        browser: {
            name: decodeURI("%E4%B8%8D%E6%98%8E"),
            version: 0,
            code: "na"
        },
        flash: {
            isInstall: !1,
            version: 0
        },
        wmp: {
            isInstall: !1,
            version: 0
        },
        activex: {
            enable: !1
        }
    }, function() {
        var ENV = YAHOO.JP.lib.env,
            xLBua = navigator.userAgent,
            xLBdcap = document.all,
            xLBlcap = document.layers,
            xLBgcap = document.getElementById,
            xLBopr = window.opera;
        if (!(xLBua.indexOf("iPhone") > 0 || xLBua.indexOf("iPad") > 0 || xLBua.indexOf("iPod") > 0 || xLBua.indexOf("Android") > 0)) {
            xLBdcap || !xLBgcap || xLBopr || (-1 !== xLBua.indexOf("Netscape6") || -1 !== xLBua.indexOf("Netscape/7") ? (ENV.browser.name = "Netscape Navigator", xLBtmp = xLBua.split("/"), xLBtmpc = xLBtmp[3].split(" "), ENV.browser.version = parseFloat(xLBtmpc[0]), ENV.browser.code = "ns6") : -1 !== xLBua.indexOf("Edge") ? (ENV.browser.name = "Microsoft Edge", ENV.browser.code = "edge", ENV.browser.version = parseFloat(xLBua.split("Edge/")[1].split(" ")[0])) : -1 !== xLBua.indexOf("Chrome/") ? (ENV.browser.name = "Google Chrome", ENV.browser.code = "chrome", ENV.browser.version = parseFloat(xLBua.split("Chrome/")[1].split(" ")[0])) : -1 !== xLBua.indexOf("KHTML") ? (ENV.browser.name = "Safari", ENV.browser.code = "safari", xLBtmp = xLBua.split("/"), xLBtmpc = xLBtmp[2].split(" "), ENV.browser.version = parseFloat(xLBtmpc[0]), ENV.browser.version >= 525 ? (xLBtmp = xLBua.split("Version/")[1].split(" ")[0], ENV.browser.version = xLBtmp.split(".")[0] + "." + xLBtmp.split(".")[1]) : ENV.browser.version >= 520 ? ENV.browser.version = "3.0" : ENV.browser.version >= 412 ? ENV.browser.version = "2.0" : ENV.browser.version >= 312 ? ENV.browser.version = "1.3" : ENV.browser.version >= 125 ? ENV.browser.version = "1.2" : ENV.browser.version >= 100 ? ENV.browser.version = "1.1" : ENV.browser.version >= 85 ? ENV.browser.version = "1.0" : ENV.browser.version = "") : -1 !== xLBua.indexOf("Firefox") ? (ENV.browser.name = "Firefox", ENV.browser.code = "mozilla", xLBtmp = xLBua.split("Firefox/"), xLBtmpc = xLBtmp[1].split(" "), ENV.browser.version = parseFloat(xLBtmpc[0])) : -1 !== xLBua.indexOf("Trident") ? (ENV.browser.name = "Internet Explorer", ENV.browser.code = "ie5", xLBtmp = xLBua.split("rv:"), xLBtmpc = xLBtmp[1].split(" "), ENV.browser.version = parseFloat(xLBtmpc[0])) : (ENV.browser.name = decodeURI("%E3%81%9D%E3%81%AE%E4%BB%96%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6"), ENV.browser.code = "other", ENV.browser.version = "")), xLBlcap && (ENV.browser.name = "Netscape Navigator", xLBtmp = xLBua.split("/"), xLBtmpc = xLBtmp[1].split(" "), ENV.browser.version = parseFloat(xLBtmpc[0]), ENV.browser.code = "ns4"), xLBdcap && xLBgcap && !xLBopr && (ENV.browser.name = "Internet Explorer", xLBtmp = xLBua.split("MSIE "), xLBtmpc = xLBtmp[1].split(";"), ENV.browser.version = parseFloat(xLBtmpc[0]), ENV.browser.code = "ie5"), xLBdcap && !xLBgcap && (ENV.browser.name = "Internet Explorer", xLBtmp = xLBua.split("MSIE "), xLBtmpc = xLBtmp[1].split(";"), ENV.browser.version = parseFloat(xLBtmpc[0]), ENV.browser.code = "ie4"), xLBopr && (ENV.browser.name = "Opera", ENV.browser.code = "opera", xLBtmp = xLBua.split("/"), xLBtmpc = xLBtmp[1].split(" "), ENV.browser.version = parseFloat(xLBtmpc[0])), -1 !== xLBua.indexOf("Win") && (-1 !== xLBua.indexOf("95") && (ENV.os.code = "win95", ENV.os.name = "Windows 95"), -1 !== xLBua.indexOf("98") && (ENV.os.code = "win98", ENV.os.name = "Windows 98"), -1 !== xLBua.indexOf("4.90") && (ENV.os.code = "win98", ENV.os.name = "Windows ME"), -1 !== xLBua.indexOf("NT 4.0") && (ENV.os.code = "winNT4", ENV.os.name = "Windows NT 4.0"), -1 !== xLBua.indexOf("NT 5.0") && (ENV.os.code = "winNT5", ENV.os.name = "Windows 2000"), -1 !== xLBua.indexOf("NT 5.1") && (ENV.os.code = "winNT5", ENV.os.name = "Windows XP"), -1 !== xLBua.indexOf("SV1") && (ENV.os.code = "winNT5s", ENV.os.name = "Windows XP SP2, SP3"), -1 !== xLBua.indexOf("IEMB3") && (ENV.os.code = "winNT5s", ENV.os.name = "Windows XP SP2, SP3"), -1 !== xLBua.indexOf("NT 5.1") && -1 !== xLBua.indexOf("MSIE 7") && (ENV.os.code = "winNT5s", ENV.os.name = "Windows XP SP2, SP3"), -1 !== xLBua.indexOf("NT 5.1") && -1 !== xLBua.indexOf("MSIE 8") && (ENV.os.code = "winNT5s", ENV.os.name = "Windows XP SP2, SP3"), -1 !== xLBua.indexOf("NT 5.2") && (ENV.os.code = "winNT5.2", ENV.os.name = "Windows Server 2003, Windows XP x64 Edition"), -1 !== xLBua.indexOf("NT 6.0") && (ENV.os.code = "winNT6", ENV.os.name = "Windows Vista"), -1 === xLBua.indexOf("NT 6.0") || -1 === xLBua.indexOf("Win64") && -1 === xLBua.indexOf("IA64") && -1 === xLBua.indexOf("x64") || (ENV.os.code = "winNT6", ENV.os.name = "Windows Vista x64 Edition"), -1 !== xLBua.indexOf("NT 6.1") && (ENV.os.code = "winNT6.1", ENV.os.name = "Windows 7"), -1 !== xLBua.indexOf("NT 6.2") && (ENV.os.code = "winNT6.2", ENV.os.name = "Windows 8"), -1 !== xLBua.indexOf("NT 6.3") && (ENV.os.code = "winNT6.3", ENV.os.name = "Windows 8.1"), -1 !== xLBua.indexOf("NT 6.4") && (ENV.os.code = "winNT6.4", ENV.os.name = "Windows 10"), -1 !== xLBua.indexOf("NT 10") && (ENV.os.code = "winNT10", ENV.os.name = "Windows 10")), -1 !== xLBua.indexOf("Mac OS X") ? (ENV.os.code = "mac", ENV.os.name = "Mac OS X") : -1 !== xLBua.indexOf("Mac") && (ENV.os.code = "mac", ENV.os.name = "Mac OS");
            var control = null;
            if (window.navigator.userAgent.indexOf("MSIE") >= 0 || window.navigator.userAgent.indexOf("Trident") >= 0) {
                try {
                    control = new ActiveXObject("Microsoft.XMLDOM")
                } catch (e) {
                    ENV.activex.enable = !1
                }
                control && (ENV.activex.enable = !0)
            } else window.ActiveXObject ? ENV.activex.enable = !0 : ENV.activex.enable = !1;
            var wmplugin = navigator.mimeTypes && navigator.mimeTypes["video/x-ms-asf"] ? navigator.mimeTypes["video/x-ms-asf"].enabledPlugin : 0,
                wmpObj7 = '<object classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="1" height="1" style="display:none;" id="WMP7" viewastext></object> \n<script language="VBScript"> \non error resume next \nWMP7obj = (WMP7.URL = "") \n<\/script> \n',
                wmpObj6 = '<object classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" width="1" height="1" style="display:none;" id="WMP6" viewastext></object> \n<object classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="1" height="1" style="display:none;" id="WMP7" viewastext></object> \n<script language="VBScript"> \non error resume next \nWMP6obj = (WMP6.FileName = "") \nWMP7obj = (WMP7.URL = "") \n<\/script> \n';
            if (wmplugin) ENV.wmp.isInstall = !0, ENV.wmp.version = -1;
            else if (-1 !== ENV.browser.code.indexOf("ie") && -1 !== ENV.os.code.indexOf("win")) {
                -1 !== ENV.os.name.indexOf("Windows Vista") ? document.write(wmpObj7) : document.write(wmpObj6);
                try {
                    WMP7obj ? (ENV.wmp.isInstall = !0, ENV.wmp.version = parseInt(WMP7.versionInfo, 10)) : WMP6obj && (ENV.wmp.isInstall = !0, ENV.wmp.version = 6)
                } catch (e) {}
            }(isNaN(ENV.wmp.version) || 0 === ENV.wmp.version) && (ENV.wmp.isInstall = !1);
            var plugin = navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0,
                yimg = "http:" === window.location.protocol ? "http://i.yimg.jp" : "https://s.yimg.jp";
            if (plugin) {
                ENV.flash.isInstall = !0;
                var desc = plugin.description;
                ENV.flash.version = eval(desc.substring(desc.indexOf("Flash") + 6, desc.indexOf("Flash") + 9))
            } else if (-1 !== ENV.browser.code.indexOf("ie") && -1 !== ENV.os.code.indexOf("win") && !ENV.flash.isInstall) {
                var delNode = document.getElementById("swf");
                delNode && delNode.parentNode.removeChild(delNode), document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="5" height="5" id="swf" name="swf" viewastext style="display:none;"><param name="movie" value="' + yimg + '/images/help/env/void.swf"></object>');
                try {
                    ENV.flash.version = Math.floor(window.swf.FlashVersion() / 65536)
                } catch (e) {}
                isNaN(ENV.flash.version) || (ENV.flash.isInstall = !0)
            }(isNaN(ENV.flash.version) || 0 === ENV.flash.version) && (ENV.flash.isInstall = !1)
        }
    }(), YAHOO.namespace("JP.gyao.uaparser"), function(a, b) {
        "use strict";
        try {
            var c = "",
                d = "?",
                e = "function",
                f = "undefined",
                g = "object",
                h = "string",
                i = "model",
                j = "name",
                k = "type",
                l = "vendor",
                m = "version",
                n = "architecture",
                o = "console",
                p = "mobile",
                q = "tablet",
                r = "smarttv",
                s = "wearable",
                t = {
                    extend: function(a, b) {
                        var c = {};
                        for (var d in a) b[d] && b[d].length % 2 == 0 ? c[d] = b[d].concat(a[d]) : c[d] = a[d];
                        return c
                    },
                    has: function(a, b) {
                        return "string" == typeof a && -1 !== b.toLowerCase().indexOf(a.toLowerCase())
                    },
                    lowerize: function(a) {
                        return a.toLowerCase()
                    },
                    major: function(a) {
                        return typeof a === h ? a.replace(/[^\d\.]/g, "").split(".")[0] : undefined
                    },
                    trim: function(a) {
                        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                u = {
                    rgx: function(a, b) {
                        for (var c, d, f, h, i, j, k = 0; k < b.length && !i;) {
                            var l = b[k],
                                m = b[k + 1];
                            for (c = d = 0; c < l.length && !i;)
                                if (i = l[c++].exec(a))
                                    for (f = 0; f < m.length; f++) j = i[++d], h = m[f], typeof h === g && h.length > 0 ? 2 == h.length ? typeof h[1] == e ? this[h[0]] = h[1].call(this, j) : this[h[0]] = h[1] : 3 == h.length ? typeof h[1] !== e || h[1].exec && h[1].test ? this[h[0]] = j ? j.replace(h[1], h[2]) : undefined : this[h[0]] = j ? h[1].call(this, j, h[2]) : undefined : 4 == h.length && (this[h[0]] = j ? h[3].call(this, j.replace(h[1], h[2])) : undefined) : this[h] = j || undefined;
                            k += 2
                        }
                    },
                    str: function(a, b) {
                        for (var c in b)
                            if (typeof b[c] === g && b[c].length > 0) {
                                for (var e = 0; e < b[c].length; e++)
                                    if (t.has(b[c][e], a)) return c === d ? undefined : c
                            } else if (t.has(b[c], a)) return c === d ? undefined : c;
                        return a
                    }
                },
                v = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2000: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                w = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [j, m],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [j, "Opera Mini"], m
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [j, "Opera"], m
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                        [j, m],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [j, "IE"], m
                        ],
                        [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                        [
                            [j, "Edge"], m
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [j, "Yandex"], m
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [j, "Puffin"], m
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [j, "UCBrowser"], m
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [j, /_/g, " "], m
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [j, "WeChat"], m
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [j, m],
                        [/(QQ)\/([\d\.]+)/i],
                        [j, m],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [j, m],
                        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                        [j, m],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [j, m],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [j],
                        [/(LBBROWSER)/i],
                        [j],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [m, [j, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [m, [j, "Facebook"]],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [m, [j, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [j, /(.+)/, "$1 WebView"], m
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [j, /(.+(?:g|us))(.+)/, "$1 $2"], m
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [m, [j, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [j, m],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [j, "Dolphin"], m
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [j, "Chrome"], m
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [j, "Opera Coast"], m
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [m, [j, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [m, [j, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [m, j],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [j, "GSA"], m
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [j, [m, u.str, v.browser.oldsafari.version]],
                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                        [j, m],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [j, "Netscape"], m
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [j, m]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [n, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [n, t.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [n, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [n, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [n, /ower/, "", t.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [n, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [n, t.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        [i, l, [k, q]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [i, [l, "Apple"],
                            [k, q]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [i, "Apple TV"],
                            [l, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [l, i, [k, q]],
                        [/(kf[A-z]+)\sbuild\/.+silk\//i],
                        [i, [l, "Amazon"],
                            [k, q]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                        [
                            [i, u.str, v.device.amazon.model],
                            [l, "Amazon"],
                            [k, p]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [i, l, [k, p]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [i, [l, "Apple"],
                            [k, p]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [l, i, [k, p]],
                        [/\(bb10;\s(\w+)/i],
                        [i, [l, "BlackBerry"],
                            [k, p]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                        [i, [l, "Asus"],
                            [k, q]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [l, "Sony"],
                            [i, "Xperia Tablet"],
                            [k, q]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                        [i, [l, "Sony"],
                            [k, p]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [l, i, [k, o]],
                        [/android.+;\s(shield)\sbuild/i],
                        [i, [l, "Nvidia"],
                            [k, o]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [i, [l, "Sony"],
                            [k, o]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [l, u.str, v.device.sprint.vendor],
                            [i, u.str, v.device.sprint.model],
                            [k, p]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        [l, i, [k, q]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [l, [i, /_/g, " "],
                            [k, p]
                        ],
                        [/(nexus\s9)/i],
                        [i, [l, "HTC"],
                            [k, q]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                        [i, [l, "Huawei"],
                            [k, p]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [l, i, [k, p]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [i, [l, "Microsoft"],
                            [k, o]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [i, /\./g, " "],
                            [l, "Microsoft"],
                            [k, p]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [i, [l, "Motorola"],
                            [k, p]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [i, [l, "Motorola"],
                            [k, q]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [l, t.trim],
                            [i, t.trim],
                            [k, r]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [i, /^/, "SmartTV"],
                            [l, "Samsung"],
                            [k, r]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [i, [l, "Sharp"],
                            [k, r]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [l, "Samsung"], i, [k, q]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [l, [k, r], i],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [l, "Samsung"], i, [k, p]
                        ],
                        [/sie-(\w*)/i],
                        [i, [l, "Siemens"],
                            [k, p]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [l, "Nokia"], i, [k, p]
                        ],
                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                        [i, [l, "Acer"],
                            [k, q]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [i, [l, "LG"],
                            [k, q]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [l, "LG"], i, [k, q]
                        ],
                        [/(lg) netcast\.tv/i],
                        [l, i, [k, r]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [i, [l, "LG"],
                            [k, p]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [i, [l, "Lenovo"],
                            [k, q]
                        ],
                        [/linux;.+((jolla));/i],
                        [l, i, [k, p]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [l, i, [k, s]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [l, i, [k, p]],
                        [/crkey/i],
                        [
                            [i, "Chromecast"],
                            [l, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [i, [l, "Google"],
                            [k, s]
                        ],
                        [/android.+;\s(pixel c)\s/i],
                        [i, [l, "Google"],
                            [k, q]
                        ],
                        [/android.+;\s(pixel xl|pixel)\s/i],
                        [i, [l, "Google"],
                            [k, p]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [i, /_/g, " "],
                            [l, "Xiaomi"],
                            [k, p]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [i, /_/g, " "],
                            [l, "Xiaomi"],
                            [k, q]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [i, [l, "Meizu"],
                            [k, q]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                        [i, [l, "OnePlus"],
                            [k, p]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [i, [l, "RCA"],
                            [k, q]
                        ],
                        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                        [i, [l, "Dell"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [i, [l, "Verizon"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [l, "Barnes & Noble"], i, [k, q]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [i, [l, "NuVision"],
                            [k, q]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [i, [l, "ZTE"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [i, [l, "Swiss"],
                            [k, p]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [i, [l, "Swiss"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [i, [l, "Zeki"],
                            [k, q]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [l, "Dragon Touch"], i, [k, q]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [i, [l, "Insignia"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [i, [l, "NextBook"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [l, "Voice"], i, [k, p]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [l, "LvTel"], i, [k, p]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [i, [l, "Envizen"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [l, i, [k, q]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [i, [l, "MachSpeed"],
                            [k, q]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [l, i, [k, q]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [i, [l, "Rotor"],
                            [k, q]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [i, [l, "Amazon"],
                            [k, q]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [l, i, [k, q]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [k, t.lowerize], l, i
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [i, [l, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [m, [j, "EdgeHTML"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [j, m],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [m, j]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [j, m],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [j, [m, u.str, v.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [j, "Windows"],
                            [m, u.str, v.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [j, "BlackBerry"], m
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                        [j, m],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [j, "Symbian"], m
                        ],
                        [/\((series40);/i],
                        [j],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [j, "Firefox OS"], m
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [j, m],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [j, "Chromium OS"], m
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [j, "Solaris"], m
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [j, m],
                        [/(haiku)\s(\w+)/i],
                        [j, m],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [m, /_/g, "."],
                            [j, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [j, "Mac OS"],
                            [m, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                        [j, m]
                    ]
                },
                x = function(a, d) {
                    if ("object" == typeof a && (d = a, a = undefined), !(this instanceof x)) return new x(a, d).getResult();
                    var e = a || (b && b.navigator && b.navigator.userAgent ? b.navigator.userAgent : c),
                        f = d ? t.extend(w, d) : w;
                    return this.getBrowser = function() {
                        var a = {
                            name: undefined,
                            version: undefined
                        };
                        return u.rgx.call(a, e, f.browser), a.major = t.major(a.version), a
                    }, this.getCPU = function() {
                        var a = {
                            architecture: undefined
                        };
                        return u.rgx.call(a, e, f.cpu), a
                    }, this.getDevice = function() {
                        var a = {
                            vendor: undefined,
                            model: undefined,
                            type: undefined
                        };
                        return u.rgx.call(a, e, f.device), a
                    }, this.getEngine = function() {
                        var a = {
                            name: undefined,
                            version: undefined
                        };
                        return u.rgx.call(a, e, f.engine), a
                    }, this.getOS = function() {
                        var a = {
                            name: undefined,
                            version: undefined
                        };
                        return u.rgx.call(a, e, f.os), a
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return e
                    }, this.setUA = function(a) {
                        return e = a, this
                    }, this
                };
            x.VERSION = "0.7.18", x.BROWSER = {
                NAME: j,
                MAJOR: "major",
                VERSION: m
            }, x.CPU = {
                ARCHITECTURE: n
            }, x.DEVICE = {
                MODEL: i,
                VENDOR: l,
                TYPE: k,
                CONSOLE: o,
                MOBILE: p,
                SMARTTV: r,
                TABLET: q,
                WEARABLE: s,
                EMBEDDED: "embedded"
            }, x.ENGINE = {
                NAME: j,
                VERSION: m
            }, x.OS = {
                NAME: j,
                VERSION: m
            }, typeof exports !== f ? (typeof module !== f && module.exports && (exports = module.exports = x), exports.UAParser = x) : typeof define === e && define.amd ? define(function() {
                return x
            }) : a && (a.UAParser = x);
            var y = b && (b.jQuery || b.Zepto);
            if (typeof y !== f) {
                var z = new x;
                y.ua = z.getResult(), y.ua.get = function() {
                    return z.getUA()
                }, y.ua.set = function(a) {
                    z.setUA(a);
                    var b = z.getResult();
                    for (var c in b) y.ua[c] = b[c]
                }
            }
        } catch (e) {}
    }(YAHOO.JP.gyao.uaparser, "object" == typeof window ? window : this), YAHOO.namespace("JP.gyao.hash"), function(a) {
        function b() {}
        b.prototype = {
                hex_chr: "0123456789abcdef".split(""),
                md5cycle: function(a, b) {
                    var c = a[0],
                        d = a[1],
                        e = a[2],
                        f = a[3];
                    c = this.ff(c, d, e, f, b[0], 7, -680876936), f = this.ff(f, c, d, e, b[1], 12, -389564586), e = this.ff(e, f, c, d, b[2], 17, 606105819), d = this.ff(d, e, f, c, b[3], 22, -1044525330), c = this.ff(c, d, e, f, b[4], 7, -176418897), f = this.ff(f, c, d, e, b[5], 12, 1200080426), e = this.ff(e, f, c, d, b[6], 17, -1473231341), d = this.ff(d, e, f, c, b[7], 22, -45705983), c = this.ff(c, d, e, f, b[8], 7, 1770035416), f = this.ff(f, c, d, e, b[9], 12, -1958414417), e = this.ff(e, f, c, d, b[10], 17, -42063), d = this.ff(d, e, f, c, b[11], 22, -1990404162), c = this.ff(c, d, e, f, b[12], 7, 1804603682), f = this.ff(f, c, d, e, b[13], 12, -40341101), e = this.ff(e, f, c, d, b[14], 17, -1502002290), d = this.ff(d, e, f, c, b[15], 22, 1236535329), c = this.gg(c, d, e, f, b[1], 5, -165796510), f = this.gg(f, c, d, e, b[6], 9, -1069501632), e = this.gg(e, f, c, d, b[11], 14, 643717713), d = this.gg(d, e, f, c, b[0], 20, -373897302), c = this.gg(c, d, e, f, b[5], 5, -701558691), f = this.gg(f, c, d, e, b[10], 9, 38016083), e = this.gg(e, f, c, d, b[15], 14, -660478335), d = this.gg(d, e, f, c, b[4], 20, -405537848), c = this.gg(c, d, e, f, b[9], 5, 568446438), f = this.gg(f, c, d, e, b[14], 9, -1019803690), e = this.gg(e, f, c, d, b[3], 14, -187363961), d = this.gg(d, e, f, c, b[8], 20, 1163531501), c = this.gg(c, d, e, f, b[13], 5, -1444681467), f = this.gg(f, c, d, e, b[2], 9, -51403784), e = this.gg(e, f, c, d, b[7], 14, 1735328473), d = this.gg(d, e, f, c, b[12], 20, -1926607734), c = this.hh(c, d, e, f, b[5], 4, -378558), f = this.hh(f, c, d, e, b[8], 11, -2022574463), e = this.hh(e, f, c, d, b[11], 16, 1839030562), d = this.hh(d, e, f, c, b[14], 23, -35309556), c = this.hh(c, d, e, f, b[1], 4, -1530992060), f = this.hh(f, c, d, e, b[4], 11, 1272893353), e = this.hh(e, f, c, d, b[7], 16, -155497632), d = this.hh(d, e, f, c, b[10], 23, -1094730640), c = this.hh(c, d, e, f, b[13], 4, 681279174), f = this.hh(f, c, d, e, b[0], 11, -358537222), e = this.hh(e, f, c, d, b[3], 16, -722521979), d = this.hh(d, e, f, c, b[6], 23, 76029189), c = this.hh(c, d, e, f, b[9], 4, -640364487), f = this.hh(f, c, d, e, b[12], 11, -421815835), e = this.hh(e, f, c, d, b[15], 16, 530742520), d = this.hh(d, e, f, c, b[2], 23, -995338651), c = this.ii(c, d, e, f, b[0], 6, -198630844), f = this.ii(f, c, d, e, b[7], 10, 1126891415), e = this.ii(e, f, c, d, b[14], 15, -1416354905), d = this.ii(d, e, f, c, b[5], 21, -57434055), c = this.ii(c, d, e, f, b[12], 6, 1700485571), f = this.ii(f, c, d, e, b[3], 10, -1894986606), e = this.ii(e, f, c, d, b[10], 15, -1051523), d = this.ii(d, e, f, c, b[1], 21, -2054922799), c = this.ii(c, d, e, f, b[8], 6, 1873313359), f = this.ii(f, c, d, e, b[15], 10, -30611744), e = this.ii(e, f, c, d, b[6], 15, -1560198380), d = this.ii(d, e, f, c, b[13], 21, 1309151649), c = this.ii(c, d, e, f, b[4], 6, -145523070), f = this.ii(f, c, d, e, b[11], 10, -1120210379), e = this.ii(e, f, c, d, b[2], 15, 718787259), d = this.ii(d, e, f, c, b[9], 21, -343485551), a[0] = this.add32(c, a[0]), a[1] = this.add32(d, a[1]), a[2] = this.add32(e, a[2]), a[3] = this.add32(f, a[3])
                },
                cmn: function(a, b, c, d, e, f) {
                    return b = this.add32(this.add32(b, a), this.add32(d, f)), this.add32(b << e | b >>> 32 - e, c)
                },
                ff: function(a, b, c, d, e, f, g) {
                    return this.cmn(b & c | ~b & d, a, b, e, f, g)
                },
                gg: function(a, b, c, d, e, f, g) {
                    return this.cmn(b & d | c & ~d, a, b, e, f, g)
                },
                hh: function(a, b, c, d, e, f, g) {
                    return this.cmn(b ^ c ^ d, a, b, e, f, g)
                },
                ii: function(a, b, c, d, e, f, g) {
                    return this.cmn(c ^ (b | ~d), a, b, e, f, g)
                },
                md51: function(a) {
                    /[\x80-\xFF]/.test(a) && (a = unescape(encodeURI(a)));
                    var b, c = a.length,
                        d = [1732584193, -271733879, -1732584194, 271733878];
                    for (b = 64; b <= a.length; b += 64) this.md5cycle(d, this.md5blk(a.substring(b - 64, b)));
                    a = a.substring(b - 64);
                    var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (b = 0; b < a.length; b++) e[b >> 2] |= a.charCodeAt(b) << (b % 4 << 3);
                    if (e[b >> 2] |= 128 << (b % 4 << 3), b > 55)
                        for (this.md5cycle(d, e), b = 0; b < 16; b++) e[b] = 0;
                    return e[14] = 8 * c, this.md5cycle(d, e), d
                },
                md5blk: function(a) {
                    var b, c = [];
                    for (b = 0; b < 64; b += 4) c[b >> 2] = a.charCodeAt(b) + (a.charCodeAt(b + 1) << 8) + (a.charCodeAt(b + 2) << 16) + (a.charCodeAt(b + 3) << 24);
                    return c
                },
                rhex: function(a) {
                    for (var b = "", c = 0; c < 4; c++) b += this.hex_chr[a >> 8 * c + 4 & 15] + this.hex_chr[a >> 8 * c & 15];
                    return b
                },
                hex: function(a) {
                    for (var b = 0; b < a.length; b++) a[b] = this.rhex(a[b]);
                    return a.join("")
                },
                md5: function(a) {
                    return this.hex(this.md51(a))
                },
                add32: function(a, b) {
                    return a + b & 4294967295
                }
            },
            function() {
                var c = new b;
                a.md5 = function(a) {
                    return c.md5(a)
                }
            }()
    }(YAHOO.JP.gyao.hash), void 0 === YAHOO || !YAHOO) var YAHOO = {};
YAHOO.emdrpd = YAHOO.emdrpd || {}, YAHOO.emdrpd.Beaconer = function(a) {
        function b() {
            for (var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", b = "", c = 0; c < 12; c++) b += a.charAt(Math.floor(62 * Math.random()));
            return b
        }

        function c(a) {
            return "[object Array]" === Object.prototype.toString.apply(a)
        }

        function d(a) {
            return a && "object" == typeof a || !1
        }

        function e(a, b) {
            if (!a || !b) return a;
            var c = a;
            for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
            return c
        }

        function f(a) {
            return a ? a.substr(0, 7) === C ? a.substr(7, a.length) : a.substr(0, 8) === D ? a.substr(8, a.length) : a : ""
        }

        function g(a, b, c) {
            b && null !== c && c !== undefined && (c = c.toString(), a[b] = c)
        }

        function h(a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (a.charCodeAt(b) < 32) return !0;
            return !1
        }

        function i(a) {
            if (!a) return "";
            var b = [];
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var d = c,
                        e = a[c];
                    if (null === d || null === e || e === undefined) continue;
                    if (d = d.toString(), (e = e.toString()) && d.length <= 8 && e.length <= 300 && !h(d) && !h(e)) {
                        var f = "";
                        try {
                            f = B(d + "" + e)
                        } catch (e) {
                            f = "_ERR_ENCODE_"
                        }
                        b[b.length] = f
                    }
                }
            return b.join(u)
        }

        function j() {
            return screen ? screen.width + "," + screen.height : ""
        }

        function k(a) {
            var b = new Image;
            b.onload = b.onerror = b.onabort = T, b.src = a, setTimeout(function() {
                b = null
            }, Q)
        }

        function l() {
            K = {}, q && (K = {
                A_sid: z,
                _w: f(window.location.href)
            }, g(K, "A_pn", a.page_name), g(K, "A_id", a.page_id), g(K, "A_pt", a.page_type))
        }

        function m(a) {
            l(), K = e(K, a)
        }

        function n(a) {
            var b = null;
            b = a && d(a) ? e(a, K) : K;
            var c = i(b);
            return q ? A + v + c : c
        }

        function o(a) {
            return q && (a += "&_R=" + G), a + "&t=" + Math.floor((new Date).valueOf() / 1e3)
        }

        function p(a) {
            c(a) || (a = [a]);
            for (var b = "", e = J.length, f = n().length, g = 0, h = a.length; g < h; g++) {
                var j = a[g],
                    k = j.mod,
                    l = "",
                    m = null,
                    o = !1;
                d(k) ? (o = !0, l = k.name, m = k.params || {}) : l = k, null !== l && l !== undefined && "" !== l || (l = R), b += "m" + w + l + (o ? x + i(m) : "") + s + (r ? "l" : "L") + w;
                for (var p = j.links, q = 0, u = p.length; q < u; q++) {
                    var v = p[q],
                        z = !1,
                        A = "";
                    if (d(v) ? (z = !0, A = v.name, v.params = v.params || {}, r && delete v.params._p) : A = v, null !== A && A !== undefined && "" !== A || (A = R), !(A.length > 300)) {
                        A = B(A);
                        var C = e + F + b.length + A.length + f + 32,
                            D = i(v.params);
                        z && (C += 3 + D.length), C < H ? b += (q > 0 ? t : "") + A + (z ? x + D : "") : (L.push(b), r && (v.params._p = q + 1), D = i(v.params), b = ["m", w, l, o ? x + i(m) : "", s, r ? "l" : "L", w, A, z ? x + D : ""].join(""))
                    }
                }
                g + 1 < h && (b += y)
            }
            L.push(b)
        }
        var q = !0,
            r = !1 !== a.use_auto_pos,
            s = "%01",
            t = "%02",
            u = "%04",
            v = "%05",
            w = "%06",
            x = "%07",
            y = "%08",
            z = a.sid || b(),
            A = "1.5.0",
            B = encodeURIComponent || escape,
            C = "http://",
            D = "https://",
            E = function(a) {
                return 0 !== a.indexOf(C) && 0 !== a.indexOf(D) ? "" : a
            },
            F = 0,
            G = "";
        q && document && document.referrer && (G = document.referrer || "", G = B(E(G)), F = G.length), a = a || {};
        var H = 2e3;
        if (a.max_beacon_size) {
            var I = a.max_beacon_size;
            I > H && I <= 8e3 && (H = I)
        }
        var J = (a.beacon_server || "ybx.yahoo.co.jp") + "/",
            K = {},
            L = [],
            M = [],
            N = a.region || "",
            O = !!a.https,
            P = {
                aa: 1,
                eu: 1,
                la: 1
            },
            Q = 1e4,
            R = "UNDEF",
            S = a.spaceid || "0";
        S = S.toString().replace(/\s+/g, ""), S = S.replace(/^P#/gi, ""), "" !== N && P[N] && (J = N + "." + J), J = (O ? D : C) + J;
        var T = function() {};
        if (l(), a.keys && (K = e(K, a.keys)), a.link_data) {
            var U = a.link_data;
            M = c(U) ? U : [U], p(U)
        }
        return {
            MODULE_NAME: "sec",
            LINK_ATTR: "slk",
            POSITION: "_p",
            beacon: function(a) {
                if (c(a))
                    for (var b = 0, d = a.length; b < d; b++) k(o(a[b]));
                else k(o(a))
            },
            setPageParams: function(a) {
                m(a)
            },
            setLinkData: function(a) {
                L = [], p(a)
            },
            getClickBeacon: function(a, b, c) {
                var e = null,
                    f = !1;
                if (null !== c && c !== undefined || (c = -1), d(a)) e = a, f = !0;
                else if (r && c < 0 && M.length > 0 && a && b)
                    for (var g = 0, h = M.length; g < h; g++) {
                        var k = M[g],
                            l = "";
                        if (l = d(k.mod) ? k.mod.name : k.mod, a === l) {
                            for (var m = k.links, o = 0, p = m.length; o < p; o++) {
                                var q = m[o],
                                    s = "";
                                if (s = d(q) ? q.name : q, b === s) {
                                    c = o + 1;
                                    break
                                }
                            }
                            break
                        }
                    }
                f || (e = {
                    sec: a,
                    slk: b,
                    _p: c,
                    A_sr: j()
                });
                var t = [];
                return t.push("s=" + S), t.push("_K=" + n()), t.push("_C=" + i(e)), J + "c?" + t.join("&")
            },
            doClickBeacon: function(a, b, c) {
                this.beacon(this.getClickBeacon(a, b, c))
            },
            getViewBeacon: function(a, b) {
                b = b || {};
                var c = a ? "b" : "p",
                    d = [];
                if (d.push("s=" + S), d.push("_P=" + n(b)), L.length > 0) {
                    for (var e = [], f = 0, g = L.length; f < g; f++) e.push(J + c + "?" + d.join("&") + "&_L=" + L[f]);
                    return e
                }
                return J + c + "?" + d.join("&")
            },
            doViewBeacon: function(a, b) {
                this.beacon(this.getViewBeacon(a, b))
            },
            getEventBeacon: function(a, b) {
                return b._E = a, this.getViewBeacon(0, b)
            },
            doEventBeacon: function(a, b) {
                this.beacon(this.getEventBeacon(a, b))
            }
        }
    }, YAHOO.namespace("JP.gyao.converter"), YAHOO.JP.gyao.converter = window.YAHOO.JP.gyao.converter = function(a) {
        "use strict";

        function b() {
            a.escapeMode === undefined && (a.escapeMode = !0), a.attributePrefix = a.attributePrefix || "_", a.arrayAccessForm = a.arrayAccessForm || "none", a.emptyNodeForm = a.emptyNodeForm || "text", a.enableToStringFunc === undefined && (a.enableToStringFunc = !0), a.arrayAccessFormPaths = a.arrayAccessFormPaths || [], a.skipEmptyTextNodesForObj === undefined && (a.skipEmptyTextNodesForObj = !0), a.stripWhitespaces === undefined && (a.stripWhitespaces = !0), a.datetimeAccessFormPaths = a.datetimeAccessFormPaths || [], a.useDoubleQuotes === undefined && (a.useDoubleQuotes = !1)
        }

        function c() {
            function a(a) {
                var b = String(a);
                return 1 === b.length && (b = "0" + b), b
            }
            "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
                return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
            }), "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function() {
                return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
            })
        }

        function d(a) {
            var b = a.localName;
            return null == b && (b = a.baseName), null != b && "" != b || (b = a.nodeName), b
        }

        function e(a) {
            return a.prefix
        }

        function f(a) {
            return "string" == typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : a
        }

        function g(b, c, d) {
            switch (a.arrayAccessForm) {
                case "property":
                    b[c] instanceof Array ? b[c + "_asArray"] = b[c] : b[c + "_asArray"] = [b[c]]
            }
            if (!(b[c] instanceof Array) && a.arrayAccessFormPaths.length > 0) {
                for (var e = 0; e < a.arrayAccessFormPaths.length; e++) {
                    var f = a.arrayAccessFormPaths[e];
                    if ("string" == typeof f) {
                        if (f == d) break
                    } else if (f instanceof RegExp) {
                        if (f.test(d)) break
                    } else if ("function" == typeof f && f(b, c, d)) break
                }
                e != a.arrayAccessFormPaths.length && (b[c] = [b[c]])
            }
        }

        function h(a) {
            var b = a.split(/[-T:+Z]/g),
                c = new Date(b[0], b[1] - 1, b[2]),
                d = b[5].split(".");
            if (c.setHours(b[3], b[4], d[0]), d.length > 1 && c.setMilliseconds(d[1]), b[6] && b[7]) {
                var e = 60 * b[6] + Number(b[7]);
                e = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(a) ? "-" : "+") ? -1 * e : e), c.setMinutes(c.getMinutes() - e - c.getTimezoneOffset())
            } else -1 !== a.indexOf("Z", a.length - 1) && (c = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds(), c.getMilliseconds())));
            return c
        }

        function i(b, c, d) {
            if (a.datetimeAccessFormPaths.length > 0) {
                for (var e = d.split(".#")[0], f = 0; f < a.datetimeAccessFormPaths.length; f++) {
                    var g = a.datetimeAccessFormPaths[f];
                    if ("string" == typeof g) {
                        if (g == e) break
                    } else if (g instanceof RegExp) {
                        if (g.test(e)) break
                    } else if ("function" == typeof g && g(obj, c, e)) break
                }
                return f != a.datetimeAccessFormPaths.length ? h(b) : b
            }
            return b
        }

        function j(b, c) {
            if (b.nodeType == v.DOCUMENT_NODE) {
                for (var f = new Object, h = b.childNodes, k = 0; k < h.length; k++) {
                    var l = h.item(k);
                    if (l.nodeType == v.ELEMENT_NODE) {
                        var m = d(l);
                        f[m] = j(l, m)
                    }
                }
                return f
            }
            if (b.nodeType == v.ELEMENT_NODE) {
                var f = new Object;
                f.__cnt = 0;
                for (var h = b.childNodes, k = 0; k < h.length; k++) {
                    var l = h.item(k),
                        m = d(l);
                    l.nodeType != v.COMMENT_NODE && (f.__cnt++, null == f[m] ? (f[m] = j(l, c + "." + m), g(f, m, c + "." + m)) : (null != f[m] && (f[m] instanceof Array || (f[m] = [f[m]], g(f, m, c + "." + m))), f[m][f[m].length] = j(l, c + "." + m)))
                }
                for (var n = 0; n < b.attributes.length; n++) {
                    var o = b.attributes.item(n);
                    f.__cnt++, f[a.attributePrefix + o.name] = o.value
                }
                var p = e(b);
                return null != p && "" != p && (f.__cnt++, f.__prefix = p), null != f["#text"] && (f.__text = f["#text"], f.__text instanceof Array && (f.__text = f.__text.join("\n")), a.stripWhitespaces && (f.__text = f.__text.trim()), delete f["#text"], "property" == a.arrayAccessForm && delete f["#text_asArray"], f.__text = i(f.__text, m, c + "." + m)), null != f["#cdata-section"] && (f.__cdata = f["#cdata-section"], delete f["#cdata-section"], "property" == a.arrayAccessForm && delete f["#cdata-section_asArray"]), 1 == f.__cnt && null != f.__text ? f = f.__text : 0 == f.__cnt && "text" == a.emptyNodeForm ? f = "" : f.__cnt > 1 && null != f.__text && a.skipEmptyTextNodesForObj && (a.stripWhitespaces && "" == f.__text || "" == f.__text.trim()) && delete f.__text, delete f.__cnt, !a.enableToStringFunc || null == f.__text && null == f.__cdata || (f.toString = function() {
                    return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
                }), f
            }
            if (b.nodeType == v.TEXT_NODE || b.nodeType == v.CDATA_SECTION_NODE) return b.nodeValue
        }

        function k(b, c, d, e) {
            var g = "<" + (null != b && null != b.__prefix ? b.__prefix + ":" : "") + c;
            if (null != d)
                for (var h = 0; h < d.length; h++) {
                    var i = d[h],
                        j = b[i];
                    a.escapeMode && (j = f(j)), g += " " + i.substr(a.attributePrefix.length) + "=", a.useDoubleQuotes ? g += '"' + j + '"' : g += "'" + j + "'"
                }
            return g += e ? "/>" : ">"
        }

        function l(a, b) {
            return "</" + (null != a.__prefix ? a.__prefix + ":" : "") + b + ">"
        }

        function m(a, b) {
            return -1 !== a.indexOf(b, a.length - b.length)
        }

        function n(b, c) {
            return !!("property" == a.arrayAccessForm && m(c.toString(), "_asArray") || 0 == c.toString().indexOf(a.attributePrefix) || 0 == c.toString().indexOf("__") || b[c] instanceof Function)
        }

        function o(a) {
            var b = 0;
            if (a instanceof Object)
                for (var c in a) n(a, c) || b++;
            return b
        }

        function p(b) {
            var c = [];
            if (b instanceof Object)
                for (var d in b) - 1 == d.toString().indexOf("__") && 0 == d.toString().indexOf(a.attributePrefix) && c.push(d);
            return c
        }

        function q(b) {
            var c = "";
            return null != b.__cdata && (c += "<![CDATA[" + b.__cdata + "]]>"), null != b.__text && (a.escapeMode ? c += f(b.__text) : c += b.__text), c
        }

        function r(b) {
            var c = "";
            return b instanceof Object ? c += q(b) : null != b && (a.escapeMode ? c += f(b) : c += b), c
        }

        function s(a, b, c) {
            var d = "";
            if (0 == a.length) d += k(a, b, c, !0);
            else
                for (var e = 0; e < a.length; e++) d += k(a[e], b, p(a[e]), !1), d += t(a[e]), d += l(a[e], b);
            return d
        }

        function t(a) {
            var b = "";
            if (o(a) > 0)
                for (var c in a)
                    if (!n(a, c)) {
                        var d = a[c],
                            e = p(d);
                        if (null == d || d == undefined) b += k(d, c, e, !0);
                        else if (d instanceof Object)
                            if (d instanceof Array) b += s(d, c, e);
                            else if (d instanceof Date) b += k(d, c, e, !1), b += d.toISOString(), b += l(d, c);
                        else {
                            var f = o(d);
                            f > 0 || null != d.__text || null != d.__cdata ? (b += k(d, c, e, !1), b += t(d), b += l(d, c)) : b += k(d, c, e, !0)
                        } else b += k(d, c, e, !1), b += r(d), b += l(d, c)
                    }
            return b += r(a)
        }
        var u = "1.1.7";
        a = a || {}, b(), c();
        var v = {
            ELEMENT_NODE: 1,
            TEXT_NODE: 3,
            CDATA_SECTION_NODE: 4,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9
        };
        this.parseXmlString = function(a) {
            var b = window.ActiveXObject || "ActiveXObject" in window;
            if (a === undefined) return null;
            var c;
            if (window.DOMParser) {
                var d = new window.DOMParser,
                    e = null;
                if (!b) try {
                    e = d.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
                } catch (err) {
                    e = null
                }
                try {
                    c = d.parseFromString(a, "text/xml"), null != e && c.getElementsByTagNameNS(e, "parsererror").length > 0 && (c = null)
                } catch (err) {
                    c = null
                }
            } else 0 == a.indexOf("<?") && (a = a.substr(a.indexOf("?>") + 2)), c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a);
            return c
        }, this.asArray = function(a) {
            return a === undefined || null == a ? [] : a instanceof Array ? a : [a]
        }, this.toXmlDateTime = function(a) {
            return a instanceof Date ? a.toISOString() : "number" == typeof a ? new Date(a).toISOString() : null
        }, this.asDateTime = function(a) {
            return "string" == typeof a ? h(a) : a
        }, this.xml2json = function(a) {
            return j(a)
        }, this.xml_str2json = function(a) {
            var b = this.parseXmlString(a);
            return null != b ? this.xml2json(b) : null
        }, this.json2xml_str = function(a) {
            return t(a)
        }, this.json2xml = function(a) {
            var b = this.json2xml_str(a);
            return this.parseXmlString(b)
        }, this.getVersion = function() {
            return u
        }
    },
    function() {
        YAHOO = window.YAHOO || {}, YAHOO.JP = YAHOO.JP || {}, YAHOO.JP.rma = YAHOO.JP.rma || {}, YAHOO.JP.rma.exclude = YAHOO.JP.rma.exclude || {}, YAHOO.JP.rma.exclude.video = YAHOO.JP.rma.exclude.video || {}, YAHOO.JP.rma.exclude.video.mask = function() {
            var a = {
                    video: null,
                    mask: null,
                    isShow: !1,
                    color: "#fff",
                    opacity: .7,
                    duration: 300,
                    interval: 30,
                    incremental: 0,
                    intervalID: null,
                    exclElms: []
                },
                b = function() {
                    window.video_mask_color && (a.color = window.video_mask_color), isNaN(window.video_mask_opacity) || (a.opacity = window.video_mask_opacity), isNaN(window.video_mask_duration) || (a.duration = window.video_mask_duration), a.incremental = e(a.opacity / (a.duration / a.interval), 2);
                    var b = a.mask = document.createElement("div");
                    b.style.display = "none", b.style.position = "fixed", b.style.top = 0, b.style.left = 0, b.style.width = "100%", b.style.height = "100%", b.style.zIndex = 9999998, b.style["ms-filter"] = "alpha(opacity=0)", b.style.filter = "alpha(opacity=0)", b.style.opacity = 0, b.style.backgroundColor = a.color, c(b, "click", function() {
                        l(!0)
                    })
                },
                c = function(a, b, c, d) {
                    a = a || document.body, window.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent("on" + b, c)
                },
                d = function(a, b) {
                    return (a.currentStyle || document.defaultView.getComputedStyle(a, ""))[b] || ""
                },
                e = function(a, b) {
                    b = isNaN(b) ? 0 : +b;
                    var c = Math.pow(10, b);
                    return Math.round(a * c) / c || 0
                },
                f = function(a, b) {
                    if ("function" == typeof b)
                        for (var c = 0; c < a.length; c++) b(a[c], c)
                },
                g = function() {
                    var b = [];
                    return f(document.getElementsByTagName("object"), function(c) {
                        c !== a.video && f(c.childNodes, function(d) {
                            d === a.video || ("PARAM" === d.tagName && "movie" === d.name && h(d.value) ? b.push(c) : "EMBED" === d.tagName && h(d.src) && b.push(c))
                        })
                    }), f(document.getElementsByTagName("img"), function(a) {
                        h(a.src) && i(a) && b.push(a)
                    }), f(["topImpactL", "topImpactR"], function(a) {
                        var c = document.getElementById(a);
                        c && b.push(c)
                    }), f(document.querySelectorAll(".yjads_priority_4"), function(a) {
                        b.push(a)
                    }), b
                },
                h = function(a) {
                    return /ai\.yimg\.jp|ds\.serving-sys\.com/.test(a)
                },
                i = function(a) {
                    var b = a.getBoundingClientRect(),
                        c = Math.round(b.width || b.right - b.left),
                        d = Math.round(b.height || b.bottom - b.top),
                        e = j(c, 300) && j(d, 250) || j(c, 448) && j(d, 252),
                        f = j(c, 300) && j(d, 600);
                    return e || f || c >= 900
                },
                j = function(a, b, c) {
                    c = isNaN(c) ? 3 : Math.abs(c);
                    var d = b - c,
                        e = b + c;
                    return d <= a && a <= e
                },
                k = function() {
                    null != a.video && (clearInterval(a.intervalID), document.body.appendChild(a.mask), a.isShow = !0, a.mask.style.display = "", a.video.style.zIndex = 9999999, f(a.exclElms, function(a) {
                        a.style.visibility = "hidden"
                    }), m("hidden"), n(), a.intervalID = setInterval(function() {
                        var b = Math.min(e(+a.mask.style.opacity + a.incremental, 2), a.opacity);
                        a.mask.style["ms-filter"] = "alpha(opacity=" + e(100 * b) + ")", a.mask.style.filter = "alpha(opacity=" + e(100 * b) + ")", a.mask.style.opacity = b, a.mask.style.opacity >= a.opacity && clearInterval(a.intervalID)
                    }, a.interval))
                },
                l = function(b) {
                    null != a.video && (clearInterval(a.intervalID), a.intervalID = setInterval(function() {
                        var c = Math.max(e(+a.mask.style.opacity - a.incremental, 2), 0);
                        a.mask.style["ms-filter"] = '"alpha(opacity=' + e(100 * c) + ')"', a.mask.style.filter = "alpha(opacity=" + e(100 * c) + ")", a.mask.style.opacity = c, a.mask.style.opacity <= 0 && (clearInterval(a.intervalID), a.isShow = !1, a.video.style.zIndex = "", a.mask.style.display = "none", b || (f(a.exclElms, function(a) {
                            a.style.visibility = ""
                        }), m(), n(!0)))
                    }, a.interval))
                },
                m = function(a) {
                    a = a || "", f(document.getElementsByTagName("embed"), function(b) {
                        /ds\.serving-sys\.com/.test(b.src) && (b.style.visibility = a)
                    }), f(document.getElementsByTagName("param"), function(b) {
                        "movie" === b.name && /ds\.serving-sys\.com/.test(b.value) && "OBJECT" === b.parentNode.tagName && (b.parentNode.style.visibility = a)
                    })
                },
                n = function() {
                    var a = !1,
                        b = (d(document.body, "backgroundImage"), function(a, b) {
                            b ? a.removeAttribute("style") : a.style.background = "transparent"
                        });
                    return function(c) {
                        var e = document.getElementById("main_cnt_wrapper"),
                            g = [document.getElementById("left_jck"), document.getElementById("right_jck"), document.getElementById("yj_wallpaper_left"), document.getElementById("yj_wallpaper_right")];
                        e && b(e, c), c ? a && (b(document.body, c), a = !1) : h(d(document.body, "backgroundImage")) && (b(document.body, c), a = !0), f(g, function(a) {
                            a && (a.style.visibility = c ? "" : "hidden")
                        })
                    }
                }();
            return b(), {
                setVideo: function(b) {
                    return !(!document.querySelector && !document.documentMode || null == b) && (a.video && (a.video.style.zIndex = ""), a.video = b, a.video.style.position = "relative", a.exclElms = g(), this.hide(), !0)
                },
                show: function() {
                    a.exclElms = g(), k()
                },
                hide: function(a) {
                    l(!!a)
                },
                toggle: function() {
                    a.isShow ? this.hide() : this.show()
                },
                isShow: function() {
                    return a.isShow
                },
                addEvent: function(b, d, e) {
                    "function" == typeof d && null != a.mask && c(a.mask, b, d, e)
                }
            }
        }()
    }(), YAHOO.namespace("JP.lib.player"), YAHOO.JP.lib.player = window.YAHOO.JP.lib.player = function(a) {
        "use strict";

        function b(a) {
            this.videoElem = a, this.tasks = [], this.timerId = null
        }
        var c = this,
            d = a || "",
            e = ["libSetContentMedia", "libStartVideo", "libPlay", "libPause", "libTimeupdate", "libEndVideo", "libError", "libLookupAd", "libStartAd", "libEndAd", "libEndAll", "libEnterFullscreen", "libCancelFullscreen"],
            f = {
                URI: {
                    SUSHI: "//smartads.mobile.yahoo.co.jp/MobileAds/V1/partner/lookup"
                }
            },
            g = {
                BLANK_MEDIA: {
                    SRC: "//iwiz-yvpub.c.yimg.jp/d/yvpub-bucket001-west/common/blank.mp4"
                }
            },
            h = {
                LOAD_RETRY: 6,
                PLAY_RETRY: 1,
                RETRY_INTERVAL_MS: 500
            },
            i = {
                YJTOP: ["m.yahoo.co.jp", "m-ym.yahoo.co.jp", "t-ym.yahoo.co.jp"]
            },
            j = null,
            k = null,
            l = null,
            m = null,
            n = 0,
            o = function() {
                var a = 0;
                return n ? function(b) {
                    var c = "gyao",
                        d = "(" + a + ")[" + c + "] " + b,
                        e = new XMLHttpRequest;
                    e.open("GET", "./log.php?msg=" + d), e.send(), a += 1, "undefined" != typeof console && console.log && console.log(b)
                } : function() {}
            }();
        j = function() {
            var a = [];
            return {
                activate: function(c, d) {
                    this.checkActive(c) && this.deactivate(c);
                    var e, f, g = new b(c);
                    for (e = 0, f = d.length; e < f; e += 1) g.addScheduleTask(d[e]);
                    g.start(), a.push(g)
                },
                deactivate: function(b) {
                    var c = this.findActiveIndex(b);
                    null !== c && (a[c].stop(), a.splice(c, 1))
                },
                manualFireScheduler: function(b) {
                    var c = this.findActiveIndex(b);
                    null !== c && a[c].manualHandle()
                },
                checkActive: function(a) {
                    return null !== this.findActiveIndex(a)
                },
                findActiveIndex: function(b) {
                    var c, d;
                    for (c = 0, d = a.length; c < d; c += 1)
                        if (o(a[c].getVideoElem().playerId), o(b.playerId), a[c].getVideoElem().playerId === b.playerId) return c;
                    return null
                }
            }
        }(), k = function(a) {
            this.idPrefix = a || ""
        }, k.prototype = {
            getBeaconElem: function(a, b, c) {
                var d = b ? document.getElementById(b) : null;
                return d || (d = document.createElement("img"), b && (d.id = b), c && (d.onload = c, d.onerror = c), d.style.position = "absolute", d.style.visibility = "hidden", a.appendChild(d)), d
            },
            requestBeacon: function(a, b, d, e, f) {
                b = b || "";
                var g, h, i = this.getBeaconElem(a, this.idPrefix + b, e);
                if (f)
                    for (g = c.Util.objKeys(f), h = 0; h < g.length; h++) i.setAttribute("data-" + g[h], f[g[h]]);
                i.src = d, o("beacon log :" + i.src)
            }
        }, l = function() {
            var a = {
                    ENV: {
                        BROAD: "100",
                        CODE: {
                            FLASH: "1100",
                            ENV: "1200",
                            DOMESTIC: "1300",
                            DEVICE: "1400",
                            STATUS: "1500",
                            PERIOD: "1600",
                            DOMAIN: "1700",
                            DEVCAT_ENV: "2100"
                        },
                        MSG: {
                            FLASH: "この映像を再生するには、最新のFlash Playerのインストールが必要です。",
                            ENV: "ご利用の環境では、映像を快適にご視聴できない可能性があります。",
                            DOMESTIC: "この映像は日本国外からはご視聴いただけません。",
                            DEVICE_PC: "この映像はお使いの環境ではご視聴いただけません。パソコンにてご視聴ください。",
                            DEVICE_SMDV: "この映像はお使いの環境ではご視聴いただけません。スマートフォンやタブレット端末にてご視聴ください。",
                            STATUS: "この映像は非公開のため、現在ご視聴いただけません。",
                            PERIOD: "この映像は公開期間外のため、現在ご視聴いただけません。",
                            DOMAIN: "この映像は現在のページで埋め込みが許可されていないため、映像をご視聴いただけません。",
                            DEVCAT_ENV: "ご利用の環境では、映像を快適にご視聴できない可能性があります。"
                        }
                    },
                    API: {
                        BROAD: "200",
                        CODE: {
                            GENERAL: "1300",
                            PARSE: "1200"
                        }
                    },
                    PLAYER: {
                        BROAD: "400",
                        CODE: {
                            BAD_REQ: "1100",
                            VIDEO_TAG: "1200",
                            SRC_UNSUPPORT: "1300"
                        },
                        MSG: {
                            BAD_REQ: "埋め込みタグで不明なエラーが発生したため、映像をご視聴いただけません。",
                            GENERAL: "エラーが発生したため、映像をご視聴いただけません。"
                        }
                    }
                },
                b = function(a) {},
                c = function(b) {
                    b = b || {};
                    var c = a.ENV.CODE[b.type] || "",
                        d = a.ENV.MSG[b.type] || a.ENV.MSG[b.msgType] || a.PLAYER.MSG.GENERAL;
                    return {
                        code: a.ENV.BROAD + c,
                        msg: d
                    }
                },
                d = {
                    code: a.API.BROAD + a.API.CODE.GENERAL,
                    msg: a.PLAYER.MSG.GENERAL
                },
                e = {
                    code: a.API.BROAD + a.API.CODE.PARSE,
                    msg: a.PLAYER.MSG.GENERAL
                },
                f = {
                    code: a.PLAYER.BROAD + a.PLAYER.CODE.BAD_REQ,
                    msg: a.PLAYER.MSG.BAD_REQ
                },
                g = {
                    code: a.PLAYER.BROAD + a.PLAYER.CODE.VIDEO_TAG,
                    msg: a.PLAYER.MSG.GENERAL
                },
                h = {
                    code: a.PLAYER.BROAD + a.PLAYER.CODE.SRC_UNSUPPORT,
                    msg: a.PLAYER.MSG.GENERAL
                };
            this.setCallback = function(a) {
                b = a
            }, this.getException = function(a, b) {
                var i = {};
                switch (a) {
                    case "env":
                        i = c(b);
                        break;
                    case "apiGeneral":
                        i = d;
                        break;
                    case "apiParse":
                        i = e;
                        break;
                    case "embedBadRequest":
                        i = f;
                        break;
                    case "playerGeneral":
                        i = g;
                        break;
                    case "playerSrcUnsupport":
                        i = h;
                        break;
                    default:
                        i = g
                }
                return i
            }, this.fire = function(a, c, d) {
                var e = this.getException(c, d);
                o("ERROR [" + e.code + "]"), e.elem = a, e.options = d, b(e)
            }
        }, this.AdManager = function(a, b) {
            this.video = a, this.spaceid = b, this._adMap = {
                pre: [],
                post: [],
                mid: []
            }, this._signature = {}, this._adObject = {}, this._current = {
                lct: null,
                level: 0,
                time: 0,
                media: null
            }, this.usingPos = null
        }, this.AdManager.prototype = {
            MAX_REQUEST: 3,
            ERROR_CODE: {
                TIME_OUT: 9e3,
                SECURITY: 9001,
                NO_AJAX: 9002,
                NO_AD: 9003,
                GENERAL: 9004,
                REQUISITES: 9005,
                PARSE: 9006,
                OVER_REAUEST: 9007
            },
            _setAdMap: function(a, b, c) {
                "mid" === a ? this._adMap[a].push({
                    position: b,
                    insert: c
                }) : this._adMap[a] && (this._adMap[a] = b)
            },
            _setSignature: function(a, b) {
                this._signature[a] || (this._signature[a] = b)
            },
            _setAdObject: function(a) {
                var b = "lv_" + this._current.level;
                this._adObject[b] || (this._adObject[b] = []), this._adObject[b].push(a)
            },
            _getSignature: function(a) {
                return c.Util.objGetValue(this._signature, [a], "")
            },
            _getCurrentAdPosition: function() {
                var a = this._current.lct;
                return "mid" === a ? this._adMap[a][0].position[0] : this._adMap[a][0]
            },
            _getCurrentAdObject: function() {
                var a = "lv_" + this._current.level;
                return c.Util.objGetValue(this._adObject, [a, 0], null)
            },
            _sortCurrentAdList: function() {
                var a = "lv_" + this._current.level;
                this._adObject[a].sort(function(a, b) {
                    return a.sequence - b.sequence
                })
            },
            shiftCurrent: function() {
                if (this._current.level > 0) {
                    var a = "lv_" + this._current.level;
                    this._adObject[a].shift()
                } else {
                    var b = this._current.lct;
                    "mid" === b ? (this._adMap[b][0].position.shift(), this._adMap[b][0].position.length || this._adMap[b].shift()) : this._adMap[b].shift()
                }
            },
            _distinguishPosition: function() {
                var a, b, c = this._current.lct;
                for (b = "mid" === c ? this._adMap[c][0].position : this._adMap[c], a = 0; a < b.length; a++) b[a] === this.usingPos && b.splice(a--, 1)
            },
            _pickAdFromLocation: function(a, b) {
                var c, d = [];
                for (c = 0; c < a.length; c++) a[c].Location === b && a[c].Position && d.push(a[c]);
                return d
            },
            _pickSigFromPosition: function(a, b) {
                var c, d = "";
                for (c = 0; c < a.length; c++) a[c].attributes.pos === b && (d = a[c].value);
                return d
            },
            getLocation: function() {
                return this._current.lct
            },
            getCurrentMedia: function() {
                return this._current.media
            },
            setTime: function(a) {
                this._current.time = a
            },
            getTime: function() {
                return this._current.time
            },
            locationInit: function(a) {
                this._current = {
                    lct: a,
                    level: 0
                }
            },
            adInit: function(a, b) {
                var c, d, e, f, g, h = this._pickAdFromLocation(a, "f"),
                    i = this._pickAdFromLocation(a, "b");
                if (h.length) {
                    for (c = h[0].Position.split(","), e = [], g = 0; g < c.length; g++) f = this._pickSigFromPosition(b, c[g]), this._setSignature(c[g], f), e.push(c[g]);
                    this._setAdMap("pre", e)
                } else if (!h.length && i.length) {
                    for (d = i[0].Position.split(","), e = [], g = 0; g < d.length; g++) "SVT" !== d[g] && "SVX" !== d[g] && (f = this._pickSigFromPosition(b, d[g]), this._setSignature(d[g], f), e.push(d[g]));
                    this._setAdMap("pre", e)
                }
            },
            pickCurrentAd: function(a) {
                this._current.media = null, a = a || function() {};
                var b, c = this,
                    d = this._current.lct,
                    e = this._current.level;
                if (!d || 0 === e && !this._adMap[d].length || !this._adMap[d]) return a(), !1;
                if (0 === e) this.usingPos = this._getCurrentAdPosition(), this._adLookup(this._getCurrentAdPosition(), function() {
                    c.pickCurrentAd(a)
                });
                else {
                    if (!(b = this._getCurrentAdObject())) return this._current.level--, void this.pickCurrentAd(a);
                    "error" === b.status ? a(b) : b.media ? (this._current.media = b, a(b)) : b.adTag ? this._fetchVastUrls(b.adTag, function(b) {
                        c.parseVast(b, function() {
                            c.pickCurrentAd(a)
                        })
                    }) : (this._shiftCurrent(), this.pickCurrentAd(a))
                }
            },
            _adLookup: function(a, b) {
                var d = this,
                    e = {
                        f: encodeURIComponent("P#" + this.spaceid),
                        l: a,
                        sig: this._getSignature(a),
                        output: "vast",
                        _r: Math.floor(1e6 * Math.random())
                    };
                this.video.dispatchEvent(this.video.getVideoEvents().libLookupAd), this._fetchVastUrls(c.Util.buildUrl(f.URI.SUSHI, e), function(a) {
                    d.parseVast(a, b)
                })
            },
            _fetchVastUrls: function(a, b) {
                var c, d, e = this,
                    f = this._createHttpRequest(),
                    g = !1;
                f ? (f.open("GET", a), f.timeout = 5e3, f.onreadystatechange = function() {
                    if (4 === this.readyState) switch (this.status) {
                        case 200:
                        case 304:
                            c = new YAHOO.JP.gyao.converter({
                                arrayAccessFormPaths: ["VAST.Ad", "VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile", "VAST.Ad.InLine.Impression", "VAST.Ad.InLine.Error", "VAST.Ad.InLine.Creatives.Creative.Linear.VideoClicks.ClickTracking", "VAST.Ad.InLine.Creatives.Creative.Linear.TrackingEvents.Tracking", "VAST.Ad.Wrapper.Impression", "VAST.Ad.Wrapper.Error", "VAST.Ad.Wrapper.Creatives.Creative.Linear.VideoClicks.ClickTracking", "VAST.Ad.Wrapper.Creatives.Creative.Linear.TrackingEvents.Tracking", "VAST.Error"]
                            }), d = {
                                result: c.xml2json(f.responseXML)
                            }, b(d);
                            break;
                        default:
                            setTimeout(function() {
                                d = {
                                    status: "error",
                                    code: g ? e.ERROR_CODE.TIME_OUT : e.ERROR_CODE.PARSE
                                }, b(d)
                            }, 100)
                    }
                }, f.ontimeout = function() {
                    g = !0
                }, f.send()) : b({
                    status: "error",
                    code: e.ERROR_CODE.NO_AJAX
                })
            },
            _createHttpRequest: function() {
                if (!window.ActiveXObject) {
                    if (window.XMLHttpRequest) {
                        var a = new XMLHttpRequest;
                        return a.withCredentials = !0, a
                    }
                    return null
                }
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (e) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e2) {
                        return null
                    }
                }
            },
            parseVast: function(a, b) {
                var d = this._getCurrentAdObject();
                this.shiftCurrent(), this._current.level++;
                try {
                    if (a.status && "error" === a.status) throw a;
                    var e, f, g, h = c.Util.objGetValue(a, ["result", "VAST"], {}),
                        i = c.Util.objGetValue(a, ["result", "VAST", "Ad"], []),
                        j = c.Util.objGetValue(a, ["result", "VAST", "Error"], []),
                        k = h._version ? 2 : 1;
                    if (c.Util.objKeys(h).length > k || !i && !j) throw {
                        code: this.ERROR_CODE.PARSE
                    };
                    if (j.length) throw {
                        code: this.ERROR_CODE.NO_AD,
                        error: j
                    };
                    for (f = 0; f < i.length; f++) {
                        e = !0;
                        try {
                            if (i[f].Wrapper && this._current.level >= this.MAX_REQUEST) throw {
                                type: "OVER_REAUEST"
                            };
                            g = new m, g.compose(i[f], d), g.status = "success"
                        } catch (e) {
                            g.status = "error", g.code = this.ERROR_CODE[e.type] || this.ERROR_CODE.GENERAL
                        }
                        this._setAdObject(g)
                    }
                    e && this._current.level, this._sortCurrentAdList()
                } catch (e) {
                    e.status = "error", this._setAdObject(e)
                }
                b()
            }
        }, m = function() {
            this.beacon = {}, this._flags = {}, this._requisites = {}, this.adSystem = null, this.title = null, this.media = null, this.duration = null, this.link = null, this.adTag = null, this.firstQuartile = null, this.midpoint = null, this.thirdQuartile = null, this.moveTrackPoint = null, this.sequence = null, this.error = null, this.init()
        }, m.prototype = {
            BEACON_KEY: ["impression", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "fullscreen", "exitFullscreen", "skip", "progress", "click"],
            INLINE_REQUISITES: ["adSystem", "impression", "title", "duration", "media"],
            WRAPPER_REQUISITES: ["adSystem", "impression", "adTag"],
            init: function() {
                var a, b;
                for (a = 0; a < this.BEACON_KEY.length; a++) b = this.BEACON_KEY[a], this.beacon[b] = [], this._flags[b] = !1
            },
            compose: function(a, b) {
                var d, e, f = a.InLine || a.Wrapper,
                    g = c.Util.objGetValue(f, ["Creatives", "Creative", "Linear", "MediaFiles", "MediaFile"], []),
                    h = c.Util.objGetValue(f, ["Creatives", "Creative", "Linear", "Duration"], "00:00:00"),
                    i = c.Util.objGetValue(f, ["Creatives", "Creative", "Linear", "VideoClicks", "ClickTracking"], []),
                    j = c.Util.objGetValue(f, ["Impression"], []),
                    k = c.Util.objGetValue(f, ["Creatives", "Creative", "Linear", "TrackingEvents", "Tracking"], []),
                    l = c.Util.objGetValue(f, ["Error"], []);
                if (!f) throw {
                    type: "PARSE"
                };
                if (b && this.mergeMaterialBeacon(b), a.InLine) {
                    for (d = 0; d < this.INLINE_REQUISITES.length; d++) e = this.INLINE_REQUISITES[d], this._requisites[e] = !1;
                    for ((this.media = this.parseMediaFile(g)) && this.setRequisites("media"), (this.title = c.Util.objGetValue(f, ["AdTitle"], "")) && this.setRequisites("title"), (this.duration = this.parseDurationToSec(h)) && this.setRequisites("duration"), this.link = c.Util.parseCDATA(c.Util.objGetValue(f, ["Creatives", "Creative", "Linear", "VideoClicks", "ClickThrough"], null)), d = 0; d < i.length; d++) this.setBeacon("click", c.Util.parseCDATA(c.Util.objGetValue(i, [d])))
                } else if (a.Wrapper) {
                    for (d = 0; d < this.WRAPPER_REQUISITES.length; d++) e = this.WRAPPER_REQUISITES[d], this._requisites[e] = !1;
                    (this.adTag = c.Util.parseCDATA(c.Util.objGetValue(f, ["VASTAdTagURI"], ""))) && this.setRequisites("adTag"), this.adTag = this.adTag.replace("[CACHEBUSTING]", Math.floor(1e6 * Math.random()))
                }
                for ((this.adSystem = c.Util.objGetValue(f, ["AdSystem"], "")) && this.setRequisites("adSystem"), d = 0; d < j.length; d++) this.setBeacon("impression", c.Util.parseCDATA(c.Util.objGetValue(j, [d])));
                for (d = 0; d < k.length; d++) this.setBeacon(c.Util.objGetValue(k, [d, "_event"]), c.Util.parseCDATA(c.Util.objGetValue(k, [d])));
                if (this.sequence = parseInt(c.Util.objGetValue(a, ["_sequence"], 0), 10), this.error = l, l.length) throw {
                    type: "GENERAL"
                };
                if (!this.checkRequisites()) throw {
                    type: "REQUISITES"
                }
            },
            parseMediaFile: function(a) {
                var b, d = null;
                for (b = 0; b < a.length; b++) "progressive" === c.Util.objGetValue(a, [b, "_delivery"]) && "video/mp4" === c.Util.objGetValue(a, [b, "_type"]) && (d = c.Util.parseCDATA(c.Util.objGetValue(a, [b], null)), d = d.replace("[CACHEBUSTING]", Math.floor(1e6 * Math.random())));
                return d
            },
            parseDurationToSec: function(a) {
                var b = a.split(":");
                return 3 === b.length && 3600 * parseInt(b[0]) + 60 * parseInt(b[1]) + parseInt(b[2])
            },
            setBeacon: function(a, b) {
                a && b && this.beacon[a] && (this.beacon[a].push(b), this.setRequisites(a))
            },
            setRequisites: function(a) {
                a && !1 === this._requisites[a] && (this._requisites[a] = !0)
            },
            mergeMaterialBeacon: function(a) {
                var b, d, e = c.Util.objGetValue(a, ["beacon"], {}),
                    f = c.Util.objKeys(e);
                for (b = 0; b < f.length; b++)
                    if (e[f[b]].length)
                        for (d = 0; d < e[f[b]].length; d++) this.setBeacon(f[b], e[f[b]][d])
            },
            setPoints: function(a) {
                this.firstQuartile = Math.ceil(.25 * a), this.midpoint = Math.ceil(.5 * a), this.thirdQuartile = Math.ceil(.75 * a), this.moveTrackPoint = a - 2 > this.thirdQuartile ? a - 2 : this.thirdQuartile
            },
            getMoveTrackPoint: function() {
                return this.moveTrackPoint
            },
            requestBeacon: function(a, b) {
                if (b && this.beacon[b] && !1 === this._flags[b]) {
                    var d, e;
                    for (e = 0; e < this.beacon[b].length; e++) d = this.beacon[b][e].replace("[CACHEBUSTING]", Math.floor(1e6 * Math.random())), c.BeaconManager.requestBeacon(a.getPlayer(), "AD" + a.playerId + b + e, d);
                    this._flags[b] = !0
                }
            },
            checkRequisites: function() {
                var a, b = c.Util.objKeys(this._requisites);
                for (a = 0; a < b.length; a++)
                    if (!this._requisites[b[a]]) return !1;
                return !0
            }
        }, this.STATE = {
            PREPARING: 0,
            LOADING: 1,
            PLAYING: 2,
            PAUSED: 3,
            ERROR_RETRY: 4
        }, this.SERVVICE_ID = {
            GYAO: "gy",
            STORE: "st"
        }, this.BeaconManager = new k(d), this.ErrorManager = new l, this.Env = function(a) {
            var b = a.toLowerCase(),
                c = /msie/.test(b),
                d = /mobile/.test(b),
                e = /android/.test(b),
                f = /iphone/.test(b),
                g = /ipad/.test(b),
                h = /ipod/.test(b),
                i = h || g || f,
                j = function() {
                    return !(!/Chrome/.test(a) || /Version/.test(a))
                }(),
                k = function() {
                    var b, c, d;
                    return i ? (c = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && c.length >= 4 && (d = [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3] || 0, 10)], b = d.join(".")) : e && (b = parseFloat(a.slice(a.indexOf("Android") + 8))), b
                }(),
                l = function() {
                    var b;
                    if (i) {
                        if (b = /OS (\d?\d)_\d?\d(?:_\d)? like Mac OS X/i.exec(a)) return o("iOS major version :" + b[1]), b[1]
                    } else if (e && (b = /Android (\d?\d)/i.exec(a))) return o("Android major version :" + b[1]), b[1];
                    return o("Unknown os major version"), null
                }();
            return {
                isIE: function() {
                    return c
                },
                isSmartPhone: function() {
                    return !!(f || h || e && d)
                },
                isAndroid: function(a) {
                    return a ? e && 0 === this.compareMobileOsMajorVersion(a) : e
                },
                isIos: function(a) {
                    return a ? i && 0 === this.compareMobileOsMajorVersion(a) : i
                },
                isAndroidChrome: function() {
                    return j
                },
                getOs: function() {
                    return e || i ? (e ? "a_" : "i_") + this.getMobileOsVersion() : YAHOO && YAHOO.JP && YAHOO.JP.lib && YAHOO.JP.lib.env ? YAHOO.JP.lib.env.os.name.replace(/ /g, "_") : "pc"
                },
                getMobileOsVersion: function() {
                    return parseFloat(k) ? parseFloat(k).toFixed(1) : l
                },
                compareMobileOsVersion: function(a) {
                    var b = this.getMobileOsVersion();
                    return null === b ? null : b - a
                },
                compareMobileOsMajorVersion: function(a) {
                    return null === l ? null : parseInt(l, 10) - a
                }
            }
        }(navigator.userAgent), this.UaParser = function() {
            if (!(YAHOO && YAHOO.JP && YAHOO.JP.gyao && YAHOO.JP.gyao.uaparser && YAHOO.JP.gyao.uaparser.UAParser)) return c.Env;
            var a = new YAHOO.JP.gyao.uaparser.UAParser,
                b = a.getResult(),
                d = "iOS" === b.os.name,
                e = "Android" === b.os.name,
                f = "mobile" === b.device.type,
                g = d && f,
                h = g || e && f,
                i = (b.device.type, d || e),
                j = "IE" === b.browser.name,
                k = b.browser.name.indexOf("Chrome") > -1,
                l = b.browser.name.indexOf("Facebook") > -1,
                m = parseFloat(b.browser.version).toFixed(1),
                n = i && parseFloat(b.os.version),
                o = i && Math.floor(n);
            return {
                isIE: function() {
                    return j
                },
                isSmartPhone: function() {
                    return h
                },
                isSmartDevice: function() {
                    return i
                },
                isAndroid: function(a) {
                    return a ? e && 0 === this.compareMobileOsMajorVersion(a) : e
                },
                isIos: function(a) {
                    return a ? d && 0 === this.compareMobileOsMajorVersion(a) : d
                },
                isAndroidChrome: function() {
                    return e && k
                },
                isFacebook: function() {
                    return l
                },
                getOs: function() {
                    return e || d ? (e ? "a_" : "i_") + this.getMobileOsVersion() : b.os.name + "_" + b.os.version
                },
                getMobileOsVersion: function() {
                    return parseFloat(n) ? parseFloat(n).toFixed(1) : o
                },
                getBrowserVersion: function() {
                    return m
                },
                compareMobileOsVersion: function(a) {
                    var b = this.getMobileOsVersion();
                    return null === b ? null : b - a
                },
                compareMobileOsMajorVersion: function(a) {
                    return null === o ? null : parseInt(o, 10) - a
                }
            }
        }(), this.Util = {
            append: function(a, b) {
                var c;
                for (c in b) b.hasOwnProperty(c) && (a[c] = b[c])
            },
            getCookie: function(a) {
                var b, c, d, e = document.cookie.split(";");
                for (b = 0, c = e.length; b < c; b += 1)
                    if (d = e[b].replace(/^[ ]+/, ""), 0 === d.indexOf(a + "=")) return d.substring(a.length + 1, d.length)
            },
            getBucketNumber: function(a) {
                var b, d, e = c.Util.getCookie("B") ? c.Util.getCookie("B").split("&") : null;
                return a = a || "", e ? (b = e[0], a = c.Util.md5(b + a), d = a.slice(-3), parseInt(d, 16) % 100) : 100
            },
            getLocalStorage: function(a) {
                try {
                    return JSON.parse(localStorage[a])
                } catch (e) {
                    return null
                }
            },
            setLocalStorage: function(a, b) {
                try {
                    JSON.stringify && (localStorage[a] = JSON.stringify(b))
                } catch (e) {}
            },
            isYJ: function() {
                return document.domain.indexOf("yahoo.co.jp") >= 0
            },
            isYJTOP: function() {
                return i.YJTOP.indexOf(document.domain) >= 0
            },
            isHttps: function() {
                return "https:" === document.location.protocol
            },
            getProtocol: function() {
                return c.Util.isHttps() ? "https:" : "http:"
            },
            getImageServerBase: function() {
                return c.Util.getProtocol() + "//" + (c.Util.isHttps() ? "s" : "i") + ".yimg.jp"
            },
            buildQuery: function(a) {
                var b, c = [];
                for (b in a) a.hasOwnProperty(b) && null !== a[b] && c.push([b, a[b]].join("="));
                return c.join("&")
            },
            buildUrl: function(a, b) {
                var d = a;
                return /\?/.test(d) ? d += "&" : d += "?", "string" == typeof b ? d + b : b && b.constructor === Object ? d + c.Util.buildQuery(b) : a
            },
            parseCDATA: function(a) {
                return "string" == typeof a ? a : c.Util.objGetValue(a, ["__cdata"]) || c.Util.objGetValue(a, ["__text"], "")
            },
            addIEContentLoadedListener: function(a) {
                var b = function() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (error) {
                        return void setTimeout(b, 0)
                    }
                    a()
                };
                b()
            },
            addEventListener: function(a, b, c, d) {
                a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, function() {
                    c.apply(a, [a.parentWindow.event])
                })
            },
            removeEventListener: function(a, b, c, d) {
                a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
            },
            getElementsByClassName: function(a, b) {
                if ((b || document).getElementsByClassName) return (b || document).getElementsByClassName(a);
                var c, d, e, f, g, h = [],
                    i = (b || document).getElementsByTagName("*");
                for (c = 0, d = i.length; c < d; c += 1)
                    for (g = i[c].className.split(" "), e = 0, f = g.length; e < f; e += 1) g[e] === a && h.push(i[c]);
                return h
            },
            objKeys: function(a) {
                if (Object.keys) return Object.keys(a);
                var b, c = [];
                for (b in a) c.push(b);
                return c
            },
            objMerge: function(a, b) {
                var c;
                b = b || {};
                for (c in b) b.hasOwnProperty(c) && (a[c] = b[c])
            },
            objGetValue: function(a, b, c) {
                var d, e;
                if (!b || b.constructor !== Array || !b.length) return c !== undefined && c;
                for (e = a, d = 0; d < b.length; d++) {
                    if (!e || e.constructor !== Object && e.constructor !== Array || e[b[d]] === undefined) return c !== undefined && c;
                    e = e[b[d]]
                }
                return e
            },
            isSideways: function() {
                return window.innerWidth > window.innerHeight
            },
            isHidden: function() {
                return "undefined" != typeof document.hidden ? document.hidden : "undefined" != typeof document.mozHidden ? document.mozHidden : "undefined" != typeof document.msHidden ? document.msHidden : "undefined" != typeof document.webkitHidden && document.webkitHidden
            },
            getScale: function(a, b, c, d) {
                var e = 1,
                    f = 1;
                return e = a / c, f = b / d, e > f ? f : e
            },
            md5: function(a) {
                return YAHOO && YAHOO.JP && YAHOO.JP.gyao && YAHOO.JP.gyao.hash && YAHOO.JP.gyao.hash.md5 ? YAHOO.JP.gyao.hash.md5(a) : a
            },
            canChainMedia: function() {
                return !!(c.Env.isIos() && c.Env.compareMobileOsVersion(6) >= 0 || c.Env.isAndroid() && c.Env.compareMobileOsVersion(4.2) >= 0 && c.Env.isAndroidChrome())
            },
            adEnable: function() {
                return !!c.Util.canChainMedia()
            },
            isHighRatePlayEnv: function() {
                return c.Env.isAndroid() ? !(!navigator.connection || c.Env.androidnetwork !== navigator.connection.WIFI) || !(!navigator.connection || navigator.connection.type !== navigator.connection.WIFI) : !c.Env.isIos()
            },
            getRioImageFromWidth: function(a, b) {
                b = Number(b);
                var d, e, f, g, h = c.Util.objGetValue(a, ["ImageFileSet", "ImageFile"]),
                    i = "//gyao.c.yimg.jp/" + a.ImagePath;
                if (!h.length || !b) return i;
                for (d = 0; d < h.length; d++) g = Math.abs(h[d].attributes.width - b), f = e ? Math.abs(e.attributes.width - b) : b, (g <= f || !e) && (e = h[d]);
                return e.Url
            },
            setImageWizardSrc: function(a, b, c) {
                if (a.src !== b) {
                    var d = function() {
                            a.onload = "", a.onerror = ""
                        },
                        e = function() {
                            if (a.src === c) return void d();
                            a.src = c
                        };
                    a.style.display = "none", a.src = b, a.onload = function() {
                        if (1 === a.naturalWidth && 1 === a.naturalHeight) return void e();
                        a.style.display = "", d()
                    }, a.onerror = e
                }
            }
        }, this.FullScreenAPI = {
            enter: function(a) {
                try {
                    a.webkitEnterFullScreen ? a.webkitEnterFullScreen() : a.webkitSupportsFullscreen ? a.webkitEnterFullScreen() : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.requestFullScreen && a.requestFullScreen()
                } catch (e) {
                    o("fullscreen enter failed")
                }
            },
            cancel: function(a) {
                o("FullScreenAPI.cancel");
                try {
                    a.webkitSupportsFullscreen ? a.webkitExitFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.exitFullScreen && document.exitFullScreen()
                } catch (e) {
                    o("fullscreen cancel failed")
                }
            },
            isFullScreen: function(a) {
                return "undefined" != typeof a.webkitDisplayingFullscreen ? (o("elem.webkitDisplayingFullscreen: " + a.webkitDisplayingFullscreen), a.webkitDisplayingFullscreen) : "undefined" != typeof document.webkitIsFullScreen ? document.webkitIsFullScreen : "undefined" != typeof document.mozFullScreen ? document.mozFullScreen : "undefined" != typeof document.isFullScreen && document.isFullScreen
            }
        }, this.PlayerAjax = {
            jsonpCounter: 1295322675860,
            fetchContentUrls: function(a, b, c, d, e) {
                this.ajax({
                    url: a,
                    data: b,
                    elem: c,
                    success: d,
                    error: e
                })
            },
            ajax: function(a) {
                var b, d = a.url;
                a.data && "object" == typeof a.data && (b = c.Util.buildQuery(a.data)), d = c.Util.buildUrl(d, "_=" + +new Date), d = c.Util.buildUrl(d, b), this.callJsonp(d, a.elem, a.success, a.error)
            },
            callJsonp: function(a, b, e, f) {
                var g, h, i = null;
                this.jsonpCounter = this.jsonpCounter + 1, i = d + "jsonp" + this.jsonpCounter, window[i] = window[i] || function(a) {
                    try {
                        g = !0, e(a), window[i] = undefined
                    } catch (e) {
                        c.ErrorManager.fire(b, "apiParse")
                    }
                }, h = document.createElement("script"), h.type = "text/javascript", h.src = c.Util.buildUrl(a, "callback=" + i), h.onload = function() {
                    "undefined" == typeof h.onreadystatechange && document.body.removeChild(h)
                }, "undefined" != typeof h.onreadystatechange ? h.onreadystatechange = function() {
                    "loaded" !== h.readyState && "complete" !== h.readyState || (g ? document.body.removeChild(h) : f())
                } : h.onerror = f, document.body.appendChild(h)
            }
        }, this.GyaoPlayerTaskInterface = function() {
            this.onSchedule = function(a) {}, this.onFinish = function(a) {}, this.onManual = function(a) {}
        }, this.StreamLogTask = function() {
            function a() {
                if (!l) return null;
                try {
                    var a = parseInt(new Date / 1e3, 10) + "",
                        b = j || Math.floor(1e6 * Math.random()) + "";
                    return o("unixtime :" + a), o("contentid :" + i), g[".sid"] = c.Util.md5(b + a + i), c.Util.buildUrl(l, g)
                } catch (e) {
                    return o(e.toString()), null
                }
            }

            function b(b, d) {
                if (!e && (null === k && (k = a()), k)) {
                    var g, i = "&.str_sec=" + d + "&.str_pos=" + Math.floor(b.currentTime);
                    h && (g = c.Util.isSideways() ? "l" : "p", i += "&.ori=" + g), c.BeaconManager.requestBeacon(b.getPlayer(), f + b.playerId, k + i, n, {
                        sec: d
                    })
                }
            }
            var d = 6e4,
                e = !1,
                f = "stream_beacon",
                g = {},
                h = !1,
                i = "",
                j = null,
                k = null,
                l = "//ybx.yahoo.co.jp/clear.gif",
                m = 0,
                n = function() {};
            this.setBaseUri = function(a) {
                return l = a, this
            }, this.setIntervalMsec = function(a) {
                return Number(a) && (d = a), this
            }, this.setIdPrefix = function(a) {
                return f = a, this
            }, this.setLogparams = function(a) {
                return a && a.constructor === Object && (g = a), this
            }, this.setContentId = function(a) {
                return i = a, this
            }, this.useBCookie = function() {
                return j = c.Util.getCookie("B"), this
            }, this.validateDirection = function() {
                return h = !0, this
            }, this.setBitrate = function(a) {
                return g[".bw"] = a, this
            }, this.setCallback = function(a) {
                return n = a, this
            }, this.onFinish = function(a) {
                var c = Math.floor(m / 1e3),
                    d = a.getVideoElem();
                "content" === d.getPlayingInfo().type && (0 !== c ? b(d, c) : n()), e = !0
            }, this.onSchedule = function(a) {
                var e, f = a.getVideoElem();
                "content" === f.getPlayingInfo().type && (o("playerid: " + f.playerId + ", state:" + f.state), f.getState() === c.STATE.PLAYING && (m % d == 0 && (e = Math.floor(m / 1e3), b(f, e)), m += a.INTERVAL_MSEC))
            }, this.onManual = function(a) {
                this.onFinish(a)
            }
        }, this.StreamLogTask.prototype = new this.GyaoPlayerTaskInterface, this.AdBeaconTask = function() {
            function a(a) {
                var b = a.getAdManager().getTime(),
                    c = a.getAdManager().getCurrentMedia();
                b >= c.firstQuartile && c.requestBeacon(a, "firstQuartile"), b >= c.midpoint && c.requestBeacon(a, "midpoint"), b >= c.thirdQuartile && c.requestBeacon(a, "thirdQuartile")
            }
            this.onFinish = function(a) {}, this.onSchedule = function(b) {
                var d = b.getVideoElem();
                "pre" !== d.getPlayingInfo().type && "post" !== d.getPlayingInfo().type || (o("playerid: " + d.playerId + ", state:" + d.state), d.getState() === c.STATE.PLAYING && a(d))
            }, this.onManual = function(a) {}
        }, this.AdBeaconTask.prototype = new this.GyaoPlayerTaskInterface, this.FullScreenCheckTask = function() {
            this.onSchedule = function(a) {
                o("FullScreenCheckTask.onSchedule");
                var b = a.getVideoElem(),
                    d = c.FullScreenAPI.isFullScreen(b);
                o(d), o(b.isFull), c.Env.isAndroid() && c.Env.compareMobileOsMajorVersion(4) >= 0 && b.getPlayer().isFullScreenEnabled() && !d && b.getState() === c.STATE.PLAYING && b.pause(), d !== b.isFull && (b.changeFullScreenFlag(d), o("fullscreen " + b.playerId + " :" + d))
            }, this.onFinish = function(a) {
                o("FullScreenCheckTask.onFinish");
                var b = this;
                setTimeout(function() {
                    b.onSchedule(a)
                }, a.INTERVAL_MSEC)
            }
        }, this.FullScreenCheckTask.prototype = new this.GyaoPlayerTaskInterface, b.prototype = {
            INTERVAL_MSEC: 1e3,
            addScheduleTask: function(a) {
                a instanceof c.GyaoPlayerTaskInterface && this.tasks.push(a)
            },
            removeScheduleTask: function(a) {
                var b, d;
                if (a instanceof c.GyaoPlayerTaskInterface)
                    for (b = 0, d = this.tasks.length; b < d; b += 1)
                        if (this.tasks[b] === a) return void this.tasks.splice(b, 1)
            },
            start: function() {
                if (null === this.timerId) {
                    var a = this;
                    this.timerId = setInterval(function() {
                        var b, c;
                        for (b = 0, c = a.tasks.length; b < c; b += 1) a.tasks[b].onSchedule(a)
                    }, this.INTERVAL_MSEC)
                }
            },
            stop: function() {
                if (null !== this.timerId) {
                    clearInterval(this.timerId);
                    var a, b;
                    for (a = 0, b = this.tasks.length; a < b; a += 1) this.tasks[a].onFinish(this)
                }
            },
            manualHandle: function() {
                if (null !== this.timerId) {
                    var a, b;
                    for (a = 0, b = this.tasks.length; a < b; a += 1) this.tasks[a].onManual(this)
                }
            },
            getVideoElem: function() {
                return this.videoElem
            }
        }, this.VideoEventHandler = {
            setup: function(a) {
                var b, d = this,
                    e = function(b) {
                        a.getIsRemoved() || d.handlers[b.type](b)
                    };
                for (b in d.handlers) d.handlers.hasOwnProperty(b) && c.Util.addEventListener(a, b, e)
            },
            handlers: {
                seeking: function(a) {
                    var b = a.target;
                    "pre" !== b.getPlayingInfo().type && "post" !== b.getPlayingInfo().type || b.pause()
                },
                seeked: function(a) {
                    var b = a.target;
                    "pre" !== b.getPlayingInfo().type && "post" !== b.getPlayingInfo().type || b.pause()
                },
                suspend: function(a) {
                    o("suspend");
                    var b = a.target;
                    b.getState() === c.STATE.PREPARING && (o("networkState" + b.networkState), b.retry = 0, b.changeState(c.STATE.PAUSED))
                },
                loadstart: function(a) {
                    o("loadstart");
                    var b = a.target,
                        d = b.getPlayer();
                    c.Env.isAndroid() && !c.Env.isIos(3) && setTimeout(function() {
                        b.getStarted() || b.changeState(c.STATE.PAUSED)
                    }, 1e3), d.onLoadstart()
                },
                canplay: function(a) {
                    o("canplay");
                    var b = a.target;
                    c.Env.isIos() && c.Env.compareMobileOsMajorVersion(8) >= 0 && b.getState() === c.STATE.PREPARING && (o("networkState" + b.networkState), b.retry = 0, b.changeState(c.STATE.PAUSED))
                },
                durationchange: function(a) {
                    try {
                        o("durationchange");
                        var b = a.target;
                        if (b.getState() !== c.STATE.LOADING) return;
                        b.getPlayer() && b.getPlayer().enterAutoFullScreenVideo && b.getPlayer().enterAutoFullScreenVideo(b), c.Env.isAndroid(3) || b.play()
                    } catch (e) {
                        o(e.toString())
                    }
                },
                ended: function(a) {
                    o("ended");
                    var b = a.target;
                    b.clearFireEndTimer(), c.Env.isAndroid(2) ? b.getPlayer().onEnded() : b.ended && b.getStarted() && b.getPlayer().onEnded(!1, !0)
                },
                play: function(a) {
                    o("play");
                    var b = a.target,
                        c = b.getPlayer();
                    b.getStarted() && (b.watchPlayTimeupdate(), c.onPlaying())
                },
                pause: function(a) {
                    o("pause"), a.target.changeState(c.STATE.PAUSED)
                },
                timeupdate: function(a) {
                    var b = a.target;
                    isFinite(b.currentTime) && (0 !== b.currentTime || b.getStarted()) && b.watchPlayTimeupdate()
                },
                error: function(a) {
                    var b = a.target,
                        d = b.parentNode,
                        e = b.error && b.error.code;
                    if (b.dispatchEvent(b.getVideoEvents().libError), 4 === e)
                        if (c.Env.isIos() && b.retry < h.LOAD_RETRY) o("load error"), b.changeState(c.STATE.ERROR_RETRY), setTimeout(function() {
                            b.loadSrcRetry(), b.changeState(c.STATE.PREPARING)
                        }, h.RETRY_INTERVAL_MS);
                        else switch (b.getPlayingInfo().type) {
                                case "pre":
                                case "post":
                                case "mid":
                                    b.getAdManager().shiftCurrent(), b.retry = 0, d.recurrencePickAd();
                                    break;
                                default:
                                    c.ErrorManager.fire(d, "playerSrcUnsupport")
                            } else if (3 === e) c.Env.isIos() && b.retry < h.PLAY_RETRY && b.getState() !== c.STATE.PREPARING && b.getState() !== c.STATE.ERROR_RETRY && (o("(3) error"), b.load(), b.retry += 1);
                            else switch (b.getPlayingInfo().type) {
                                case "pre":
                                case "post":
                                case "mid":
                                    b.getAdManager().shiftCurrent(), b.retry = 0, d.recurrencePickAd();
                                    break;
                                default:
                                    c.ErrorManager.fire(d, "playerGeneral")
                            }
                }
            }
        }, this.VideoExtInterface = {
            WAIT_TIMEUPDATE: 1e3,
            WAIT_END_TIMEUPDATE: 200,
            adManager: null,
            playingInfo: {
                type: ""
            },
            contentSrc: null,
            playerId: null,
            elementId: null,
            state: c.STATE.PREPARING,
            isAutoPauseState: !1,
            isFull: !1,
            isFullEnded: !1,
            started: !1,
            forceSeekBack: !1,
            seekBackCount: 0,
            forceEnded: !1,
            watchPlayingTimerId: null,
            forceFireEndTimerId: null,
            video: {},
            player: {},
            retry: 0,
            eventElem: null,
            isRemoved: !1,
            videoInit: function() {
                this.playingInfo = {
                    type: ""
                }
            },
            resize: function(a, b) {
                this.width = a, this.height = b
            },
            setupAdManager: function(a) {
                a instanceof c.AdManager && (this.adManager = a)
            },
            getAdManager: function() {
                return this.adManager
            },
            setPlayingInfo: function(a) {
                this.playingInfo.type = a
            },
            getPlayingInfo: function() {
                return this.playingInfo
            },
            setContentSrc: function(a) {
                this.contentSrc = a
            },
            getContentSrc: function() {
                return this.contentSrc
            },
            setMedia: function(a) {
                var b = null,
                    c = a || {};
                "start" === c.type ? (this.setPlayingInfo("start"), b = g.BLANK_MEDIA.SRC) : c.adObj ? (this.setPlayingInfo(this.adManager.getLocation()), b = c.adObj.media) : (this.setPlayingInfo("content"), b = this.contentSrc), this.started = !1, this.forceEnded = !1, c.doDeactivate && j.deactivate(this), "content" === this.playingInfo.type && this.dispatchEvent(this.getVideoEvents().libSetContentMedia), this.src = b
            },
            setPlayerId: function(a) {
                this.playerId = a
            },
            getPlayerId: function() {
                return this.playerId
            },
            setElementId: function(a) {
                this.elementId = a
            },
            getElementId: function() {
                return this.elementId
            },
            getState: function() {
                return this.state
            },
            setIsFullEnded: function(a) {
                this.isFullEnded = a
            },
            getIsFullEnded: function() {
                return this.isFullEnded
            },
            setStarted: function(a) {
                this.started = a
            },
            getStarted: function() {
                return this.started
            },
            getForceEnded: function() {
                return this.forceEnded
            },
            setPlayer: function(a) {
                this.player = a
            },
            getPlayer: function() {
                return this.player
            },
            setVideoObject: function(a) {
                this.video = a
            },
            getVideoObject: function() {
                return this.video
            },
            getVideoEvents: function() {
                return this.eventElem ? this.eventElem.getVideoEvents() : {}
            },
            setEventElem: function(a) {
                this.eventElem = a
            },
            getEventElem: function() {
                return this.eventElem
            },
            setIsRemoved: function(a) {
                this.isRemoved = a
            },
            getIsRemoved: function() {
                return this.isRemoved
            },
            loadSrcRetry: function() {
                var a = this.src;
                this.src = "", this.src = a, this.retry += 1
            },
            changeFullScreenFlag: function(a) {
                this.isFull !== a && (this.isFull = a, this.getPlayer().onFullscreenchange())
            },
            watchPlayTimeupdate: function() {
                if (null !== this.watchPlayingTimerId && clearTimeout(this.watchPlayingTimerId), !this.forceEnded && "start" !== this.getPlayingInfo().type) {
                    this.dispatchEvent(this.getVideoEvents().libTimeupdate), this.started ? (this.isAutoPauseState || c.Env.isAndroid() && this.isFull && this.state !== c.STATE.PLAYING) && (this.getPlayer().onPlaying(), this.retry = 0, this.isAutoPauseState = !1) : (this.started = !0, "content" === this.getPlayingInfo().type ? this.dispatchEvent(this.getVideoEvents().libStartVideo) : "pre" !== this.getPlayingInfo().type && "post" !== this.getPlayingInfo().type || (this.getAdManager().shiftCurrent(), this.dispatchEvent(this.getVideoEvents().libStartAd), this.getAdManager().getCurrentMedia().requestBeacon(this, "start"), this.getAdManager().getCurrentMedia().requestBeacon(this, "impression"), this.getAdManager().getCurrentMedia().setPoints(this.duration), this.currentTime > 1 ? this.getAdManager().setTime(0) : this.getAdManager().setTime(this.currentTime)), this.getPlayer().onPlaying(), this.retry = 0);
                    var a = this,
                        b = function() {
                            c.Env.isAndroid() && a.duration - a.currentTime < a.WAIT_END_TIMEUPDATE / 1e3 && (a.clearFireEndTimer(), a.forceFireEndTimerId = setTimeout(function() {
                                a.getStarted() && (a.forceEnded = !0, a.getPlayer().onEnded(!1, !0))
                            }, a.WAIT_END_TIMEUPDATE))
                        };
                    "pre" === this.getPlayingInfo().type || "post" === this.getPlayingInfo().type ? this.forceSeekBack ? (this.forceSeekBack = !1, this.currentTime = this.getAdManager().getTime()) : Math.abs(this.currentTime - this.getAdManager().getTime()) > .7 ? this.ended || (this.forceSeekBack = !0, this.currentTime = 0, ++this.seekBackCount > 2 && (this.pause(), this.seekBackCount = 0)) : (this.currentTime > this.getAdManager().getTime() && (this.paused || (this.getAdManager().setTime(this.currentTime), this.seekBackCount = 0)), b()) : b(), this.watchPlayingTimerId = setTimeout(function() {
                        a.state !== c.STATE.PAUSED && (a.isAutoPauseState = !0), a.changeState(c.STATE.PAUSED)
                    }, this.WAIT_TIMEUPDATE)
                }
            },
            clearFireEndTimer: function() {
                null !== this.forceFireEndTimerId && clearTimeout(this.forceFireEndTimerId)
            },
            changeState: function(a) {
                if (a === c.STATE.PAUSED) {
                    if (this.state === c.STATE.PREPARING || this.state === c.STATE.LOADING || this.state === c.STATE.PLAYING) return this.started && "content" === this.getPlayingInfo().type && this.dispatchEvent(this.getVideoEvents().libPause), this.state = a, !0
                } else if (a === c.STATE.LOADING) {
                    if (this.state === c.STATE.PAUSED) return this.state = a, !0
                } else if (a === c.STATE.PLAYING) {
                    if (this.state === c.STATE.LOADING || this.state === c.STATE.PAUSED) return "content" === this.getPlayingInfo().type && this.dispatchEvent(this.getVideoEvents().libPlay), this.state = a, !0
                } else if (a === c.STATE.ERROR_RETRY) {
                    if (this.state === c.STATE.PREPARING) return this.state = a, !0
                } else if (a === c.STATE.PREPARING && this.state === c.STATE.ERROR_RETRY) return this.state = a, !0;
                return !1
            },
            addEventListener: function(a, b, c) {
                this.eventElem && this.eventElem.addEventListener(a, b, c)
            },
            removeEventListener: function(a, b, c) {
                this.eventElem && this.eventElem.removeEventListener(a, b, c)
            },
            dispatchEvent: function(a) {
                this.eventElem && a && a.constructor === Event && this.eventElem.dispatchEvent(a)
            }
        }, this.DOMExtInterface = {
            video: null,
            contentsList: [],
            contentsIndex: 0,
            repeat: !1,
            listeners: [],
            listenerInstatnce: null,
            taskManager: null,
            extFullScreenEnabled: null,
            extInlineAutoplay: null,
            extCanInlineAutoplayEnv: !0,
            extComposeOnlyCore: null,
            hasMuteCanceled: !1,
            domInit: function() {
                this.contentsList = [], this.contentsIndex = 0, this.repeat = !1, this.listeners = []
            },
            refresh: function() {
                j.checkActive(this.video) && (this.pause(), j.deactivate(this.video), this.fireEventListeners("refresh"), this.fireEventListeners("suspend"), c.Env.isIos(3) ? this.video.controls = !0 : (this.video.controls = !1, this.video.currentTime = 0))
            },
            clearVideo: function() {
                j.checkActive(this.video) && j.deactivate(this.video), this.video.setIsRemoved(!0), this.video.removeAttribute("src"), this.removeChild(this.video), this.video = null, this.fireEventListeners("clear")
            },
            setExtFullScreenEnabled: function(a) {
                this.extFullScreenEnabled = a
            },
            setExtInlineAutoplay: function(a) {
                this.extInlineAutoplay = a
            },
            setExtInlineAutoplayEnv: function(a) {
                function b(a) {
                    var b = a.split("."),
                        c = b.length > 1 ? b[0] + "." + b[1] : b[0];
                    return Number(c, 10)
                }
                var c = !1,
                    d = a.device;
                try {
                    ("Android" === d.OsName && b(d.OsVer) >= 4.4 && /Chrome/.test(d.BrowserName) && b(d.BrowserVer) >= 53 || "iOS" === d.OsName && b(d.OsVer) >= 10.3 && "Mobile Safari" === d.BrowserName) && (c = !0)
                } catch (e) {}
                this.extCanInlineAutoplayEnv = c
            },
            setExtComposeOnlyCore: function(a) {
                this.extComposeOnlyCore = a
            },
            setVideo: function(a) {
                this.video = a
            },
            addContentsList: function(a) {
                this.contentsList.push(a)
            },
            getContentsList: function(a) {
                return a === undefined ? this.contentsList : this.contentsList[a]
            },
            setContentsIndex: function(a) {
                this.contentsIndex = a
            },
            getContentsIndex: function() {
                return this.contentsIndex
            },
            hasNextContent: function() {
                return !(!c.Util.canChainMedia() || !this.getNextContent())
            },
            getNextContent: function() {
                return this.repeat ? this.contentsList[this.contentsIndex] : this.contentsList[this.contentsIndex + 1] ? this.contentsList[this.contentsIndex + 1] : null
            },
            setRepeat: function(a) {
                this.repeat = a
            },
            getRepeat: function() {
                return this.repeat
            },
            play: function() {
                var a = this.video,
                    b = this;
                if (a) {
                    if (a.src) {
                        if (!a.changeState(c.STATE.LOADING)) return
                    } else c.Util.canChainMedia() ? a.setMedia({
                        type: "start"
                    }) : a.setMedia(), a.load();
                    "start" === a.getPlayingInfo().type && setTimeout(function() {
                        "start" === a.getPlayingInfo().type && b.onEnded(!0)
                    }, 2e3);
                    var d = c.Env.isAndroid() && c.Env.compareMobileOsMajorVersion(4) >= 0;
                    if (this.isFullScreenEnabled() && d) return this.enterAutoFullScreenVideo(a), a.play(), void this.activateVideo();
                    a.play(), c.Env.isAndroid() && c.Env.compareMobileOsMajorVersion(4) < 0 && (c.Env.isAndroid(3) && (this.suspendForAndroidFullMode(), c.FullScreenAPI.isFullScreen(a) && c.FullScreenAPI.cancel(a)), j.deactivate(a)), c.Env.isIos() && c.Env.compareMobileOsMajorVersion(8) < 0 && "start" === a.getPlayingInfo().type || this.enterAutoFullScreenVideo(a), this.activateVideo()
                }
            },
            pause: function() {
                this.video && this.video.pause()
            },
            isPlaying: function() {
                if (this.video) return !this.video.paused
            },
            seekFromSec: function(a) {
                this.video && this.video.getStarted() && "content" === this.video.getPlayingInfo().type && (Number(a) || "0" === a) && (this.video.currentTime = Number(a))
            },
            getCurrentTime: function() {
                if (this.video) return this.video.currentTime
            },
            getDuration: function() {
                if (this.video) return this.video.duration
            },
            getProperty: function(a) {
                return this.datas.hasOwnProperty(a) ? this.datas[a] : this.getAttribute("data-" + a)
            },
            addEventListener: function(a, b) {
                var c = {};
                "function" == typeof b && (c.eventName = a, c.callback = b), this.listeners.push(c)
            },
            removeEventListener: function(a, b) {
                var c, d, e;
                for (c = 0, d = this.listeners.length; c < d; c += 1)
                    if (e = this.listeners[c], e.eventName === a && e.callback === b) return void this.listeners.splice(c, 1)
            },
            isFullScreen: function() {
                return !!this.video && this.video.isFull
            },
            isFullScreenEnabled: function() {
                return !this.datas || !(c.Env.isIos() && c.Env.compareMobileOsMajorVersion(5) <= 0 && !c.Env.isSmartPhone()) && (c.Env.isAndroid(2) || c.Env.isIos() && c.Env.isSmartPhone() && c.Env.compareMobileOsMajorVersion(10) < 0 || this.extFullScreenEnabled)
            },
            canInlineAutoplay: function() {
                return !!this.datas && !!this.extInlineAutoplay && this.extCanInlineAutoplayEnv
            },
            isOnlyCore: function() {
                return !!this.datas && !!this.extComposeOnlyCore
            },
            getHasMuteCanceled: function() {
                return this.hasMuteCanceled
            },
            setHasMuteCanceled: function() {
                this.hasMuteCanceled = !0
            },
            displayNativeControls: function() {
                this.isOnlyCore() || this.video.ended || !(!this.canInlineAutoplay() || this.canInlineAutoplay() && this.getHasMuteCanceled()) || (this.video.controls = !0)
            },
            enterAutoFullScreenVideo: function(a) {
                this.isFullScreenEnabled() && c.FullScreenAPI.enter(a)
            },
            canPageRefresh: function() {
                return !(c.Env.isAndroid(3) || c.Env.isAndroid() && this.isFullScreen())
            },
            activateVideo: function() {
                if (!j.checkActive(this.video)) {
                    var a = [];
                    this.taskManager && (a = this.taskManager.makeTasks(this)), j.activate(this.video, a)
                }
            },
            fireEventListeners: function(a) {
                var b, c, d;
                for (b = 0, c = this.listeners.length; b < c; b += 1) d = this.listeners[b], d.eventName === a && this.listeners[b].callback()
            },
            suspendForAndroidFullMode: function() {
                var a = c.Env.isAndroid(3) && this.isFullScreenEnabled(),
                    b = c.Env.isAndroid() && this.isFullScreenEnabled() && c.Env.isSmartPhone();
                return !(!a && !b || (o("android>>>suspend"), this.fireEventListeners("suspend"), 0))
            },
            recurrencePickAd: function(a) {
                a = a || function() {};
                var b, d, e, f = this;
                this.video.getAdManager().pickCurrentAd(function(g) {
                    if ("post" === f.video.getAdManager().getLocation() && !g) return void f._onEndedOfTrack();
                    if (g && "error" === g.status) {
                        if (g.error && g.error.length)
                            for (b = 0; b < g.error.length; b++)(e = c.Util.parseCDATA(g.error[b])) && (e = e.replace("[CACHEBUSTING]", Math.floor(1e6 * Math.random())), d = Math.floor(1e6 * Math.random()) + "", c.BeaconManager.requestBeacon(f.video.getPlayer(), "Err" + f.video.playerId + d, e));
                        return f.video.getAdManager().shiftCurrent(), void f.recurrencePickAd(a)
                    }
                    f.video.setMedia({
                        adObj: g,
                        doDeactivate: !0
                    }), (!c.Util.isHidden() || c.Env.isIos() && c.Env.compareMobileOsMajorVersion(8) < 0) && (f.video.load(), f.video.play()), a()
                })
            },
            onLoadstart: function() {
                o("onLoadstart"), this.listenerInstatnce && this.listenerInstatnce.onLoadstart(this)
            },
            onPlaying: function() {
                o("playing"), this.video.getIsFullEnded() && c.Env.isIos(5) && !c.Env.isSmartPhone() && (c.FullScreenAPI.enter(this.video), this.video.setIsFullEnded(!1)), this.displayNativeControls(), this.fireEventListeners("playing"), this.activateVideo(), this.video.changeState(c.STATE.PLAYING), this.listenerInstatnce && this.listenerInstatnce.onPlaying(this)
            },
            onEnded: function(a, b) {
                if (o("onEnded"), this.video.pause(), this.listenerInstatnce && this.listenerInstatnce.onEnded(this), this.video.ended && "start" === this.video.getPlayingInfo().type || a) return void this._onEndedOfBlank();
                switch (this.video.getPlayingInfo().type) {
                    case "content":
                        this._onEndedOfContent(b);
                        break;
                    case "pre":
                    case "post":
                    case "mid":
                        this._onEndedOfAd(b);
                        break;
                    default:
                        this._onEndedOfAll(b)
                }
            },
            _onEndedOfBlank: function() {
                var a, b = this;
                this.video.setStarted(!1), c.Env.isIos() && c.Env.compareMobileOsMajorVersion(8) < 0 && this.enterAutoFullScreenVideo(this.video), a = c.Env.isIos() && c.Env.compareMobileOsMajorVersion(8) < 0 ? 500 : 1, setTimeout(function() {
                    b.onBlankEnded()
                }, a)
            },
            _onEndedOfContent: function(a) {
                var b = this,
                    d = this.video.ended || a;
                if ((d || c.Env.isAndroid(2)) && (this.video.getStarted() && (this.video.dispatchEvent(this.video.getVideoEvents().libEndVideo), this.video.setStarted(!1)), this.onBeaconLoaded = function() {
                        b.fireEventListeners("ended"), b.onBeaconLoaded = function() {}
                    }), d && c.Util.canChainMedia()) return j.manualFireScheduler(this.video), this.video.getAdManager().locationInit("post"), void this.recurrencePickAd();
                this._onEndedOfAll(a)
            },
            _onEndedOfAd: function(a) {
                var b = this,
                    d = this.video.ended || a,
                    e = this.video.getAdManager();
                return d && (!e.getCurrentMedia().getMoveTrackPoint() || e.getTime() < e.getCurrentMedia().getMoveTrackPoint()) ? (this.video.currentTime = e.getTime(), void this.video.play()) : ((d || c.Env.isAndroid(2)) && (this.video.getStarted() && (this.video.dispatchEvent(this.video.getVideoEvents().libEndAd), e.getCurrentMedia().requestBeacon(this.video, "complete"), this.video.setStarted(!1)), this.onBeaconLoaded = function() {
                    b.fireEventListeners("ended"), b.onBeaconLoaded = function() {}
                }), d ? void this.recurrencePickAd() : void this._onEndedOfAll(a))
            },
            _onEndedOfTrack: function() {
                if (this.onTrackEnded(), this.hasNextContent() || this.getRepeat()) return void j.deactivate(this.video);
                this.video.dispatchEvent(this.video.getVideoEvents().libEndAll), this._onEndedOfAll(!0)
            },
            _onEndedOfAll: function(a) {
                var b = this.video.ended || a;
                (b || this.isFullScreenEnabled()) && j.deactivate(this.video), this.fireEventListeners("suspend"), this.listenerInstatnce && this.listenerInstatnce.onEndedOfAll(this), b && c.Env.isIos(5) && !c.Env.isSmartPhone() && (this.video.isFull ? this.video.setIsFullEnded(!0) : this.video.setIsFullEnded(!1)), c.Env.isIos(3) ? (this.video.controls = !0, this.activateVideo()) : (this.video.controls = !1, (b || c.Env.isAndroid(2)) && (this.video.currentTime = 0)), (c.Env.isAndroid(3) || c.Env.isAndroid() && this.video.isFull) && this.activateVideo(), c.Env.isAndroid(3) || c.FullScreenAPI.cancel(this.video)
            },
            onFullscreenchange: function() {
                this.video.isFull ? this.video.dispatchEvent(this.video.getVideoEvents().libEnterFullscreen) : this.video.dispatchEvent(this.video.getVideoEvents().libCancelFullscreen);
                var a = !c.Env.isAndroid(3),
                    b = this;
                this.video.ended || !this.isFullScreenEnabled() || this.video.isFull ? a && this.fireEventListeners("fullscreenchange") : (a && (this.onBeaconLoaded = function() {
                    b.fireEventListeners("fullscreenchange"), b.onBeaconLoaded = function() {}
                }), this.onEnded()), this.listenerInstatnce && this.listenerInstatnce.onFullscreenchange(this)
            },
            onHalt: function() {
                this.refresh(), this.listenerInstatnce && this.listenerInstatnce.onHalt(this)
            },
            onBeaconLoaded: function() {
                this.listenerInstatnce && this.listenerInstatnce.onBeaconLoaded(this)
            },
            onBlankEnded: function() {
                this.listenerInstatnce ? this.listenerInstatnce.onBlankEnded(this) : (this.video.setMedia(), this.video.load(), this.video.play())
            },
            onTrackEnded: function() {
                this.listenerInstatnce && this.listenerInstatnce.onTrackEnded(this)
            },
            setPlayerListener: function(a) {
                a instanceof c.PlayerListenerInterface && (this.listenerInstatnce = a)
            },
            setSchedulerTask: function(a) {
                a instanceof c.SchedulerTaskManager && (this.taskManager = a)
            }
        }, this.PlayerListenerInterface = function() {
            this.onLoadstart = function(a) {}, this.onPlaying = function(a) {}, this.onEnded = function(a) {}, this.onEndedOfAll = function(a) {}, this.onFullscreenchange = function(a) {}, this.onHalt = function(a) {}, this.onBeaconLoaded = function(a) {}, this.onBlankEnded = function(a) {
                a.video.setMedia(), a.video.load(), a.video.play()
            }, this.onTrackEnded = function(a) {}
        }, this.eventDOMExtInterface = {
            videoEvents: {},
            getVideoEvents: function() {
                return this.videoEvents
            },
            createPlayerEvent: function() {
                if (!(c.Util.objKeys(this.videoEvents).length > 0)) {
                    var a, b;
                    for (a = 0; a < e.length; a++) b = e[a], this.videoEvents[b] = document.createEvent("HTMLEvents"), this.videoEvents[b].initEvent(b, !0, !1)
                }
            }
        }, this.SlideDOMExtInterface = {
            current: 0,
            slideW: 0,
            defaultMSec: 300,
            events: {},
            eventList: ["onSlideStart", "onSlideEnd", "onSetup"],
            getCurrent: function() {
                return parseInt(this.current)
            },
            getChild: function(a) {
                return this.childNodes[a]
            },
            getSlideEvents: function() {
                return this.events
            },
            durationClear: function() {
                this.style.webkitTransitionDuration = "0ms", this.style.MozTransitionDuration = "0ms", this.style.msTransitionDuration = "0ms", this.style.OTransitionDuration = "0ms", this.style.transitionDuration = "0ms"
            },
            setup: function(a, b) {
                var c, d = this.childNodes;
                if (!(d.length < 2)) {
                    for (c = 0; c < d.length; c++) d[c].style.width = a + "px", d[c].style.maxWidth = a + "px", d[c].style.height = b + "px", "current" === d[c].getAttribute("data-key") && (this.current = c);
                    this.slideW = a, this.style.width = d.length * a + "px", this.style.webkitTransitionDuration = "0ms", this.style.MozTransitionDuration = "0ms", this.style.msTransitionDuration = "0ms", this.style.OTransitionDuration = "0ms", this.style.transitionDuration = "0ms", this.style.webkitTransform = "translate3d(" + -this.current * a + "px,0,0)", this.style.msTransform = "translateX(" + -this.current * a + "px)", this.style.MozTransform = "translateX(" + -this.current * a + "px)", this.style.OTransform = "translateX(" + -this.current * a + "px)", this.dispatchSlideEvent("onSetup")
                }
            },
            slide: function(a, b) {
                if (a < this.childNodes.length && a >= 0) {
                    b = parseInt(b) || this.defaultMSec;
                    var c = function() {
                        this.dispatchSlideEvent("onSlideEnd"), this.removeEventListener("webkitTransitionEnd", c, !1), this.removeEventListener("msTransitionEnd", c, !1), this.removeEventListener("MozTransitionEnd", c, !1), this.removeEventListener("OTransitionEnd", c, !1)
                    };
                    this.childNodes[this.current].setAttribute("data-key", ""), this.childNodes[a].setAttribute("data-key", "current"), this.current = a, this.dispatchSlideEvent("onSlideStart"), this.addEventListener("webkitTransitionEnd", c, !1), this.addEventListener("msTransitionEnd", c, !1), this.addEventListener("MozTransitionEnd", c, !1), this.addEventListener("OTransitionEnd", c, !1), this.style.webkitTransform = "translate3d(" + -a * this.slideW + "px,0,0)", this.style.msTransform = "translateX(" + -a * this.slideW + "px)", this.style.MozTransform = "translateX(" + -a * this.slideW + "px)", this.style.OTransform = "translateX(" + -a * this.slideW + "px)", this.style.webkitTransitionDuration = b + "ms", this.style.MozTransitionDuration = b + "ms", this.style.msTransitionDuration = b + "ms", this.style.OTransitionDuration = b + "ms"
                }
            },
            createSlideEvent: function() {
                if (!(c.Util.objKeys(this.events).length > 0)) {
                    var a, b;
                    for (a = 0; a < this.eventList.length; a++) b = this.eventList[a], this.events[b] = document.createEvent("HTMLEvents"), this.events[b].initEvent(b, !0, !1)
                }
            },
            dispatchSlideEvent: function(a) {
                this.events[a] && this.dispatchEvent(this.events[a])
            }
        }, this.SchedulerTaskManager = function() {
            this.makeTasks = function(a) {}
        }, this.LiveTestManager = function(a, b) {
            var d = function() {
                try {
                    var d, e = c.Util.getBucketNumber(b),
                        f = 0;
                    for (d = 0; d < a.length; d++)
                        if ((f += a[d].rate) > e) return a[d].type
                } catch (e) {}
                return null
            }();
            return {
                getBucket: function() {
                    return d
                }
            }
        }
    }, YAHOO.namespace("JP.yvpub.video"),
    function(a) {
        "use strict";

        function b() {
            function a(a, c, d) {
                var e = function() {
                        return !!(i.isSmartPhone() && c.datas.width >= B.SMARTPHONE || !i.isSmartPhone() && c.datas.width >= B.TABLET || c.isFullScreenEnabled())
                    },
                    f = function() {
                        c.video.getAdManager().locationInit(a), c.recurrencePickAd(d)
                    },
                    g = function() {
                        c.recurrencePickAd(d)
                    };
                try {
                    if (c.datas.af) throw !0;
                    if (!e()) throw !1;
                    if (!c.datas.afc) throw !0
                } catch (e) {
                    return void(!0 === e ? f() : g())
                }
                b(c.video, c.getFrequencyCap(), f, g)
            }

            function b(a, b, c, d) {
                var e, f, g, h = Math.floor((new Date).getTime() / 1e3),
                    j = "afc";
                if (b ? (e = "number" == typeof b.set_time && b.set_time, f = "number" == typeof b.str_sec && b.str_sec, g = !1 === e || !1 === f || b.set_time + C.TERM < h || b.str_sec > C.STR_LIMIT) : g = !0, a.addLinkData(j, {
                        mod: {
                            name: j
                        },
                        links: [{
                            params: {
                                sec: j,
                                slk: i.getOs()
                            }
                        }]
                    }), a.doView(j), g) return a.doClick(j, {
                    sec: j,
                    slk: i.getOs()
                }), void c();
                d()
            }
            var c = null;
            this.onLoadstart = function(a) {
                a.playBt || a.appendPlayButton(), a.loading || a.appendLoading(), a.head || a.appendHeader(), a.image || (a.appendThumbnail(), a.setThumbnailSrc(a.datas.poster)), a.gyaoLogoHead || a.appendGyaoLogoHead(), a.gyaoLogoBottom || a.appendGyaoLogoBottom(), a.muteVisual || a.appendMuteVisual(), a.clickScreen || a.appendClickScreen()
            }, this.onPlaying = function(a) {
                a.getEndScreenBuilt() && a.setEndScreenBuilt(!1), a.suspendForAndroidFullMode() || a.datas.fullscreenonly || (a.hideRecommend(), a.hideThumbnail(), a.hidePlayButton(), a.hideHeader(), a.hideGyaoLogoHead(), a.hideGyaoLogoBottom(), a.showMuteVisual(), a.transitionMuteVisual(), a.video.resize(a.datas.width, a.datas.height), a.setDisplayVideo(!0))
            }, this.onEnded = function(a) {
                a.datas.mute = a.video.muted ? 1 : 0
            }, this.onEndedOfAll = function(a) {
                if (a.video.ended || a.video.getForceEnded() || i.isAndroid(2)) {
                    var b = a.video.getPlayerId(),
                        c = a.video.getVideoObject(),
                        d = function() {
                            var b = "playAgain",
                                d = i.isAndroid() ? "again_a" : "again_i";
                            m.setupContent(a, c), a.video.addLinkData(b, {
                                mod: {
                                    name: d
                                },
                                links: [{
                                    params: {
                                        sec: d,
                                        slk: "click"
                                    }
                                }]
                            }), a.video.doView(b), a.hideLoading(), a.showThumbnail(), a.showEndPlayButton(), a.showHeader(), a.showGyaoLogoHead(), a.hideMuteVisual(), a.hideClickScreen()
                        },
                        e = function() {
                            a.getEndScreenBuilt() || (a.video.removeEventListener("yvpubCancelFullscreen", e, !1), a.setEndScreenBuilt(!0), a.clearVideo(), m.appendVideoTag(a, b), m.buildEndScreen(a, c, d))
                        };
                    a.hideThumbnail(), a.hidePlayButton(), a.hideHeader(), a.hideGyaoLogoHead(), a.hideGyaoLogoBottom(), i.isAndroid() && a.video.isFull ? (a.video.resize(1, 1), a.setDisplayVideo(!1), a.video.addEventListener("yvpubCancelFullscreen", e, !1)) : e()
                }
            }, this.onBlankEnded = function(b) {
                c || (c = !0, a("pre", b, function() {
                    c = null
                }))
            }, this.onTrackEnded = function(b) {
                if (b.hasNextContent() || b.getRepeat()) {
                    b.getRepeat() || (b.datas.contentid = b.getNextContent());
                    var c = function() {
                        m.buildContent(b, function() {
                            b.getRepeat() || b.setContentsIndex(b.getContentsIndex() + 1), L.onChangeMedia(b.video.getElementId()), a("pre", b)
                        }, function() {
                            return !(!b.getRepeat() && (b.setContentsIndex(b.getContentsIndex() + 1), b.hasNextContent())) || (b.datas.contentid = b.getNextContent(), c(), !1)
                        })
                    };
                    c()
                }
            }
        }

        function c() {
            this.makeTasks = function(a) {
                var b = [],
                    c = function(b) {
                        try {
                            if ("0" === b.currentTarget.getAttribute("data-sec")) {
                                var c = i.getOs();
                                i.isAndroid() && window.chrome && a.video.addLinkData("st_dev", {
                                    mod: {
                                        name: "chrm_ply"
                                    },
                                    links: [{
                                        params: {
                                            sec: "chrm_ply",
                                            slk: c
                                        }
                                    }]
                                }), i.isAndroid() && i.isAndroidChrome() && (c += "_c"), a.video.addLinkData("st_dev", {
                                    mod: {
                                        name: "web_ply"
                                    },
                                    links: [{
                                        params: {
                                            sec: "web_ply",
                                            slk: c
                                        }
                                    }]
                                }), i.isAndroid() && (c = j && j !== i ? i.isAndroidChrome() && j.isAndroid() ? "both_c" : i.isAndroidChrome() ? "env_c" : j.isAndroid() ? "ua_p_c" : "NA" : "f_ua_p", a.video.addLinkData("st_dev", {
                                    mod: {
                                        name: "aos_ply"
                                    },
                                    links: [{
                                        params: {
                                            sec: "aos_ply",
                                            slk: c
                                        }
                                    }]
                                })), a.video.doView("st_dev")
                            }
                        } catch (err) {}
                        a.onBeaconLoaded()
                    },
                    e = function() {
                        return i.isAndroid() ? "andb" : i.isSmartPhone() && i.isIos() ? "ipnb" : !i.isSmartPhone() && i.isIos() ? "ipdb" : "pc"
                    },
                    f = x.YVPUB;
                k.isYJTOP() && (f = x.YJTOP_NOAD), J.isYnewsNoAd(a.datas.domain, a.datas.spaceid) && (f = x.YNEWS_NOAD);
                var h, l = a.datas.logUris.stlog,
                    m = l.split("?"),
                    n = m[1].split("&");
                for (l = m[0] + "?", h = 0; h < n.length; h++) 0 !== n[h].indexOf(".domain") && (l += "&" + n[h]);
                return b.push((new g.StreamLogTask).setBaseUri(l).setIntervalMsec(D).setIdPrefix("yvpubplayer_stream_beacon").setLogparams({
                    ".sid": null,
                    ".dev": e(),
                    ".prop": f,
                    ".bw": "",
                    ".domain": encodeURIComponent(a.datas.parenturl),
                    ".ssize": "M"
                }).setContentId(a.datas.contentid + "").setBitrate(a.datas.bitrate).setCallback(c)), b.push(new g.AdBeaconTask), b.push(new g.FullScreenCheckTask), k.adEnable() && b.push((new d).setInitFC(a.getFrequencyCap())), b
            }
        }

        function d() {
            function a(a, c) {
                M.set(b, c), a.setFrequencyCap({
                    set_time: b,
                    str_sec: c
                })
            }
            var b, c, d = 2e3,
                e = 0,
                f = function(a) {
                    a ? (b = a.set_time || 0, c = a.str_sec || 0) : (b = 0, c = 0)
                };
            this.setInitFC = function(a) {
                return f(a), this
            }, this.onFinish = function(b) {
                var d = Math.floor(e / 1e3),
                    g = b.getVideoElem(),
                    h = g.getPlayer();
                "content" === g.getPlayingInfo().type && 0 !== d && (f(h.getFrequencyCap()), a(h, c + d))
            }, this.onSchedule = function(b) {
                var h, i = b.getVideoElem(),
                    j = i.getPlayer();
                "content" === i.getPlayingInfo().type && i.getState() === g.STATE.PLAYING && (e % d == 0 && (h = Math.floor(e / 1e3), f(j.getFrequencyCap()), a(j, c + h), e = 0), e += b.INTERVAL_MSEC)
            }
        }

        function e() {
            this.playerIdCounter = 0, (i.isAndroid() || i.isIos()) && k.objMerge(this.DATA_KEY_VALUE, this.SMDV_DATA_KEY_VALUE)
        }

        function f() {
            this.players = []
        }
        var g = new YAHOO.JP.lib.player("yvpub"),
            h = g.ErrorManager,
            i = g.Env,
            j = g.UaParser,
            k = g.Util,
            l = g.FullScreenAPI,
            m = null,
            n = k.getProtocol(),
            o = k.getImageServerBase(),
            p = 0,
            q = {
                PC: "//s.yimg.jp/images/yvpub/player/vamos/pc/latest/player.html",
                SD: "//s.yimg.jp/images/yvpub/player/vamos/sd/latest/player.html"
            },
            r = {
                PC_TAB: "https://www.yahoo-help.jp/app/answers/detail/p/533/a_id/75612",
                SMDV: "https://m.yahoo-help.jp/app/answers/detail/p/642/a_id/75737"
            },
            s = {
                GYAO: "https://gyao.yahoo.co.jp/"
            },
            t = {
                URI: {
                    GET_CONTENT: n + "//feapi-yvpub.yahooapis.jp/v1/content/",
                    GET_RECOMMEND: n + "//feapi-yvpub.yahooapis.jp/v1/recommend/"
                },
                APPID: "dj0zaiZpPUJUUVM2WVJzaGtCSSZzPWNvbnN1bWVyc2VjcmV0Jng9NmE-"
            },
            u = {
                RATIO: {
                    WIDTH: 16,
                    HEIGHT: 9
                },
                EVENT: {}
            },
            v = {
                PRIORITY: {
                    SMARTPHONE: [1500, 500, 200, 3e3, 5e3],
                    TABLET: [3e3, 1500, 500, 5e3, 200]
                },
                CUT_LINE: {
                    TABLET: 200
                },
                MAP: {
                    Q2B: {
                        240: 200,
                        360: 500,
                        480: 1500,
                        720: 3e3,
                        1080: 5e3
                    },
                    B2Q: {
                        200: 240,
                        500: 360,
                        1e3: 480,
                        3e3: 720,
                        5e3: 1080
                    }
                }
            },
            w = {
                PC: 1100,
                SMARTPHONE: 2110,
                TABLET: 2120
            },
            x = {
                YVPUB: "2287",
                YJTOP_NOAD: "4102",
                YNEWS_NOAD: "4202"
            },
            y = {
                GENERAL: "general",
                PACKAGED: "packaged"
            },
            z = {
                DEFAULT: {
                    SMARTPHONE: 2080305041,
                    TABLET: 2080305045,
                    PC: 1183118252
                },
                YNEWS_HEADLINE_NOAD: 2080498544,
                YNEWS_TOPICS_TOP_NOAD: 2080508030,
                YNEWS_TOPICS_NOAD: 2080505649
            },
            A = {
                YNEWS_HEADLINE: "headlines.yahoo.co.jp",
                YNEWS_TOPICS: "news.yahoo.co.jp"
            },
            B = {
                SMARTPHONE: 300,
                TABLET: 400
            },
            C = {
                TERM: 3600,
                STR_LIMIT: 600
            },
            D = 1e4,
            E = {
                PLAY_BUTTON: {
                    SRC: o + "/images/yvpub/player/img/play_bg.png"
                },
                REPLAY_BUTTON: {
                    SRC: o + "/images/yvpub/player/img/replay_bg.png"
                },
                PAGE_OPEN: {
                    SRC: o + "/images/yvpub/player/img/window.png"
                },
                PAGE_LINK: {
                    SRC: o + "/images/yvpub/player/img/link.png?150305"
                },
                MUTE_VISUAL: {
                    FRAME_ICON: {
                        SRC: o + "/images/yvpub/player/img/volume_off.png"
                    },
                    TEXT: {
                        SRC: o + "/images/yvpub/player/img/volume_off_text.png"
                    }
                },
                LOADING: {
                    SRC: o + "/images/yvpub/player/img/loading.gif"
                },
                RECOMMEND: {
                    PREV: {
                        SRC: o + "/images/yvpub/player/img/prev.png"
                    },
                    NEXT: {
                        SRC: o + "/images/yvpub/player/img/next.png"
                    }
                },
                LOGO: {
                    GYAO: o + "/images/yvpub/player/img/gyaologo_sd.png"
                },
                IMAGE: {
                    BLANK_16X9: {
                        SRC: o + "/images/yvpub/player/img/blank_16x9.png"
                    }
                }
            },
            F = {
                TYPE: {
                    OFF: 0,
                    ON: 1,
                    SAME_CHANNEL: 2
                }
            },
            G = function(a) {
                "undefined" != typeof console && console.error && console.error(a)
            },
            H = function() {
                var a = 0;
                return p ? function(b) {
                    var c = "gyao",
                        d = "(" + a + ")[" + c + "] " + b,
                        e = new XMLHttpRequest;
                    e.open("GET", "./log.php?msg=" + d), e.send(), a += 1, "undefined" != typeof console && console.log && console.log(b)
                } : function() {}
            }(),
            I = function() {
                var a = "",
                    b = [],
                    c = function() {
                        try {
                            var c, d = k.getBucketNumber(a),
                                e = 0;
                            for (c = 0; c < b.length; c++)
                                if ((e += b[c].rate) > d) return b[c].type
                        } catch (e) {}
                        return null
                    }();
                return {
                    getBucket: function() {
                        return c
                    }
                }
            }(),
            J = {
                isYnewsNoAd: function(a, b) {
                    return a === A.YNEWS_HEADLINE && b === z.YNEWS_HEADLINE_NOAD || a === A.YNEWS_TOPICS && (b === z.YNEWS_TOPICS_TOP_NOAD || b === z.YNEWS_TOPICS_NOAD)
                }
            },
            K = function(a) {
                return {
                    canEmbed: function() {
                        return i.isIos() || i.isAndroid() ? !(!j || j === i) && (j.isIos() && j.compareMobileOsVersion(10) >= 0 || j.isAndroid() && j.compareMobileOsVersion(4.4) >= 0 && (j.isAndroidChrome() && j.getBrowserVersion() >= 52 || j.isFacebook())) : YAHOO && YAHOO.JP && YAHOO.JP.lib && YAHOO.JP.lib.env && ("mozilla" === YAHOO.JP.lib.env.browser.code && YAHOO.JP.lib.env.browser.version >= 45 && (-1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.1") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.2") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.3") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.4") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT10")) || "mozilla" === YAHOO.JP.lib.env.browser.code && YAHOO.JP.lib.env.browser.version >= 45 && -1 !== YAHOO.JP.lib.env.os.code.indexOf("mac") || "safari" === YAHOO.JP.lib.env.browser.code && YAHOO.JP.lib.env.browser.version >= 8 && -1 !== YAHOO.JP.lib.env.os.code.indexOf("mac") || "chrome" === YAHOO.JP.lib.env.browser.code && YAHOO.JP.lib.env.browser.version >= 31 && (-1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.1") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.2") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.3") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.4") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT10") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("mac")) || "ie5" === YAHOO.JP.lib.env.browser.code && YAHOO.JP.lib.env.browser.version >= 11 && (-1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.1") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.3") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.4") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT10")) || "edge" === YAHOO.JP.lib.env.browser.code && (-1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT6.4") || -1 !== YAHOO.JP.lib.env.os.code.indexOf("winNT10")))
                    }
                }
            }(),
            L = {
                fireEvent: function(a, b) {
                    u.EVENT[b] ? document.getElementById(a).dispatchEvent(u.EVENT[b]) : document.getElementById(a).dispatchEvent(b)
                },
                onStartVideo: function(a) {
                    document.getElementById(a).doView("coke"), this.fireEvent(a, "yvpubStartVideo")
                },
                onPlay: function(a) {
                    this.fireEvent(a, "yvpubPlay")
                },
                onPause: function(a) {
                    this.fireEvent(a, "yvpubPause")
                },
                onTimeupdate: function(a) {
                    this.fireEvent(a, "yvpubTimeupdate")
                },
                onEndVideo: function(a) {
                    this.fireEvent(a, "yvpubEndVideo")
                },
                onError: function(a) {
                    this.fireEvent(a, "yvpubError")
                },
                onStartAD: function(a) {
                    i.isAndroid() || i.isIos() || YAHOO.JP.rma.exclude.video.mask.show(), this.fireEvent(a, "yvpubStartAd")
                },
                onEndAD: function(a) {
                    i.isAndroid() || i.isIos() || YAHOO.JP.rma.exclude.video.mask.hide(), this.fireEvent(a, "yvpubEndAd")
                },
                onEndAll: function(a) {
                    this.fireEvent(a, "yvpubEndAll")
                },
                onEnterFullscreen: function(a) {
                    if (i.isIos() && i.isSmartPhone()) {
                        var b = document.getElementById(a);
                        "content" === b.getPlayingInfo().type && b.getStarted() && document.getElementById(a).doClick("done2Play", {
                            sec: "done_i",
                            slk: "play"
                        })
                    }
                    this.fireEvent(a, "yvpubEnterFullscreen")
                },
                onCancelFullscreen: function(a) {
                    if (i.isIos() && i.isSmartPhone()) {
                        var b = document.getElementById(a);
                        "content" === b.getPlayingInfo().type && b.getStarted() && (b.addLinkData("done2Play", {
                            mod: {
                                name: "done_i"
                            },
                            links: [{
                                params: {
                                    sec: "done_i",
                                    slk: "play"
                                }
                            }]
                        }), b.doView("done2Play"))
                    }
                    this.fireEvent(a, "yvpubCancelFullscreen")
                },
                onChangeMedia: function(a) {
                    this.fireEvent(a, "yvpubChangeMedia")
                },
                init: function(a, b) {
                    var c;
                    c = i.isAndroid() || i.isIos() ? i.isSmartPhone() ? "smp" : "tab" : "pc", document.getElementById(a).addLinkData("coke", {
                        links: [{
                            name: "app",
                            params: {
                                sec: "ai",
                                slk: "app",
                                intl: "jp",
                                ctxid: c,
                                pkg: b.contentid,
                                ccode: "Nat",
                                cpos: 1,
                                pos: 1,
                                pkgv: 1,
                                et: "v",
                                model: "ofv",
                                rccatid: 1
                            }
                        }]
                    })
                }
            },
            M = {
                get: function() {
                    return k.getLocalStorage("yvpubplayer")
                },
                set: function(a, b) {
                    var c = {
                        set_time: a,
                        str_sec: b
                    };
                    k.setLocalStorage("yvpubplayer", c)
                }
            };
        b.prototype = new g.PlayerListenerInterface, c.prototype = new g.SchedulerTaskManager, d.prototype = new g.GyaoPlayerTaskInterface, e.prototype = {
                DATA_KEY_VALUE: {
                    width: 640,
                    height: 360,
                    contentid: undefined,
                    spaceid: i.isSmartPhone() ? z.DEFAULT.SMARTPHONE : z.DEFAULT.TABLET,
                    propertyname: "",
                    vol: .5,
                    mute: 0,
                    autostart: 0,
                    recommend: 1,
                    recommendchannelid: undefined,
                    autostartikm: 0,
                    recommendikm: 0,
                    repeat: 0,
                    quality: undefined,
                    embedmenu: 1,
                    fullscreen: 1,
                    customcolor: undefined,
                    af: 0,
                    afc: 1,
                    seekthumbnail: 1,
                    packagedclass: "",
                    pretitle: 1,
                    precontrol: 1,
                    title: 1,
                    control: 1,
                    officiallogo: 2,
                    callback: undefined,
                    id: ""
                },
                SMDV_DATA_KEY_VALUE: {
                    fullscreenonly: 0,
                    outputelement: 1,
                    onlycore: 0
                },
                PROPERTYNAME: {
                    default_spaceid: "jp_video",
                    use_spaceid: "jp"
                },
                compose: function(a, b, c) {
                    var d, e, f, g = {},
                        j = document.createElement("div"),
                        l = b ? b.replace(/.+\?/, "") : "";
                    if (j.setAttribute("data-key", "yvpubplayer" + c), j.embedParam = l, b)
                        for (l = l.split("&"), d = 0; d < l.length; d++) {
                            var m = l[d].split("=");
                            g[m[0]] = unescape(m[1])
                        } else
                            for (e = k.objKeys(this.DATA_KEY_VALUE), d = 0; d < e.length; d++) a.getAttribute("data-" + e[d]) && (g[e[d]] = a.getAttribute("data-" + e[d]));
                    j.datas = this.parseDataParameters(g), j.datas.width = this.judgeOverSize(a, j.datas.width), (i.isAndroid() || i.isIos()) && (j.datas.outputelement = 1), f = a.className, a.className = f ? f + " yjads_priority_3" : "yjads_priority_3", a.style.width = j.datas.width + "px", a.style.height = j.datas.height + "px", a.style.verticalAlign = "middle", a.style.textAlign = "center", j.style.width = j.datas.width + "px", j.style.height = j.datas.height + "px", j.style.textAlign = "left", j.style.position = "relative", j.style.zIndex = 1, j.style.margin = "auto", j.style.overflow = "hidden", a.appendChild(j);
                    var n = j.datas.id && j.datas.id.charAt();
                    return j.datas.id && n.match(/\d/) || !j.datas.contentid ? h.fire(j, "embedBadRequest") : !K.canEmbed() || (i.isAndroid() || i.isIos()) && j.datas.onlycore ? i.isAndroid() || i.isIos() ? this.appendPlayer(j) : h.fire(j, "env", {
                        type: "ENV"
                    }) : this.appendPlayerIFrame(j), j
                },
                halt: function(a) {
                    a.refresh()
                },
                parseDataParameters: function(a) {
                    var b, c, d, e = {};
                    for (b = 0, c = k.objKeys(this.DATA_KEY_VALUE).length; b < c; b += 1) d = k.objKeys(this.DATA_KEY_VALUE)[b], e[d] = this.getJudgeData(a, d);
                    return e.domain = location.hostname, e.parenturl = location.href.replace(/[?#].*$/, ""), (i.isAndroid() || i.isIos()) && (e.propertyname = this.getPropertyName(e)), e
                },
                getJudgeData: function(a, b) {
                    var c, d;
                    switch (b) {
                        case "width":
                        case "height":
                            c = Number(a[b]) ? Number(a[b]) : this.DATA_KEY_VALUE[b];
                            break;
                        case "mute":
                        case "autostart":
                        case "onlycore":
                        case "fullscreen":
                        case "repeat":
                        case "embedmenu":
                        case "af":
                        case "afc":
                        case "seekthumbnail":
                        case "pretitle":
                        case "precontrol":
                        case "fullscreenonly":
                        case "outputelement":
                        case "autostartikm":
                        case "recommendikm":
                            "1" !== a[b] && "0" !== a[b] || (c = Number(a[b]));
                            break;
                        case "recommend":
                        case "officiallogo":
                        case "title":
                        case "control":
                            (Number(a[b]) || "0" === a[b]) && (c = Number(a[b]));
                            break;
                        case "contentid":
                            a[b] && !a[b].match(/[^,0-9]/) && (d = a[b].split(","), d[0] && (c = i.isAndroid() || i.isIos() ? d : a[b]));
                            break;
                        case "recommendchannelid":
                            a[b] && !a[b].match(/[^,0-9]/) && (d = a[b].split(","), d[0] && (c = a[b]));
                            break;
                        case "spaceid":
                            Number(a[b]) && a[b].length >= 8 && (c = Number(a[b]));
                            break;
                        case "vol":
                            var e = parseFloat(a[b]);
                            (0 === e || e >= 0 && e <= 1) && (c = e);
                            break;
                        case "customcolor":
                            a[b] && null !== a[b].match(/^0x([\da-fA-F]{6}|[\da-fA-F]{3})$/) && (c = a[b]);
                            break;
                        case "id":
                            a[b] && !a[b].match(/[^_0-9a-zA-Z]/) && (c = a[b]);
                            break;
                        case "callback":
                            a[b] && !a[b].match(/[^_0-9a-zA-Z]/) && a[b].charAt(0).match(/[^0-9]/) && (c = a[b]);
                            break;
                        default:
                            a[b] && (c = a[b])
                    }
                    return (!K.canEmbed() || (i.isAndroid() || i.isIos()) && "1" === a.onlycore) && c === undefined && (c = this.DATA_KEY_VALUE[b]), c
                },
                getPropertyName: function(a) {
                    return a.spaceid === this.DATA_KEY_VALUE.spaceid ? this.PROPERTYNAME.default_spaceid : a.propertyname || this.PROPERTYNAME.use_spaceid
                },
                judgeOverSize: function(a, b) {
                    var c = a.parentNode.clientWidth,
                        d = parseInt(a.parentNode.style.paddingLeft, 10),
                        e = parseInt(a.parentNode.style.paddingRight, 10);
                    return c && (d && (c -= d), e && (c -= e), b > c && (b = c)), b
                },
                makeGetContentQuery: function(a) {
                    var b = k.getScale(a.datas.width, a.datas.height, u.RATIO.WIDTH, u.RATIO.HEIGHT),
                        c = a.datas.spaceid || z.DEFAULT.PC,
                        d = {
                            appid: t.APPID,
                            output: "json",
                            space_id: c,
                            domain: a.datas.domain,
                            ak: k.md5(c + "_" + a.datas.domain),
                            thumb_width: 2 * Math.round(u.RATIO.WIDTH * b),
                            thumb_height: 2 * Math.round(u.RATIO.HEIGHT * b),
                            thumb_priority: "b"
                        };
                    return i.isAndroid() || i.isIos() ? d.device_type = i.isSmartPhone() ? w.SMARTPHONE : w.TABLET : d.device_type = w.PC, d
                },
                appendPlayer: function(a) {
                    var d, e, f, j = this,
                        l = function() {
                            return i.isIos() || i.isAndroid() ? a.datas.contentid[0] : a.datas.contentid.split(",")[0]
                        },
                        m = t.URI.GET_CONTENT + l(),
                        n = this.makeGetContentQuery(a),
                        o = 0,
                        p = function() {
                            o++
                        };
                    g.PlayerAjax.fetchContentUrls(m, n, a, function(i) {
                        try {
                            if (p(), j.parseCheckResult(i), p(), f = j.parseContentApiResult(i, a.datas), a.datas.quality = f.quality, a.datas.bitrate = f.bitrate, a.datas.meta = f.meta, a.datas.poster = f.meta.thumbnail, a.datas.logUris = f.logUris, a.datas.inst = f.ad.inst, a.datas.sigs = f.ad.sigs, p(), k.append(a, g.DOMExtInterface), a.domInit(), a.addEventListener("refresh", function() {
                                    a.showThumbnail(), a.showPlayButton(), a.showHeader(), a.showGyaoLogoBottom(), a.hideMuteVisual(), a.hideClickScreen()
                                }), a.setPlayerListener(new b), a.setSchedulerTask(new c), k.append(a, j.YvpubDOMInterface), p(), (a.datas.autostart && a.datas.mute && a.datas.onlycore || a.datas.autostartikm && a.datas.mute && !a.datas.fullscreenonly) && a.setExtInlineAutoplay(!0), a.setExtComposeOnlyCore(a.datas.onlycore), a.setExtInlineAutoplayEnv(f.client), p(), a.setSuitablePlayerSize(a.datas.width, a.datas.height, !0), p(), a.appendEventElem(), p(), j.appendVideoTag(a), p(), a.appendRecommend(), j.setupRecommendSlider(a), p(), a.setFrequencyCap(M.get()), p(), j.setupPlayList(a), j.setupContent(a, f, p), p(), j.setCustomEvent(), j.setLibraryEventListener(a.video.id, a.eventElem), p(), j.doView4PlayerReady(a.video, a), p(), a.datas.callback && "undefined" != typeof window[a.datas.callback]) try {
                                window[a.datas.callback](a.video)
                            } catch (e) {
                                G(e)
                            } else if ("function" == typeof onYvpubPlayerReady) try {
                                window.onYvpubPlayerReady(a.video)
                            } catch (e) {
                                G(e)
                            }
                            p(), YAHOO.JP.rma.exclude.video.mask.setVideo(a), a.canInlineAutoplay() && (p(), a.hidePlayButton(), a.showLoading(), a.onBlankEnded())
                        } catch (e) {
                            d = e && e.type, e = e && e.config, e || (e = {}), e.processLevel = "apnd_" + o, h.fire(a, d || "apiParse", e)
                        }
                    }, function() {
                        h.fire(a, "apiGeneral")
                    })
                },
                appendPlayerIFrame: function(a) {
                    var b, c, d = document.createElement("iframe"),
                        e = a.datas.id && !document.getElementById(a.datas.id) ? a.datas.id : a.getAttribute("data-key");
                    d.id = e, a.datas.id = e, d.width = a.datas.width, d.height = a.datas.height, d.scrolling = "no", d.style.display = "block", d.setAttribute("frameborder", 0), d.setAttribute("marginheight", 0), d.setAttribute("marginwidth", 0), d.setAttribute("allowfullscreen", !0), d.setAttribute("allow", "autoplay"), k.append(d, this.IFrameExtInterface), d.listenersInit(), k.append(d, this.RapidExtInterface), d.rapidInit(a.datas.spaceid), this.setIframeEventLibrary(a, d), this.handleDomFullscreen(a, d), I.getBucket() && (a.datas.bucket = I.getBucket()), i.isAndroid() || i.isIos() ? (b = q.SD, a.datas.autostartikm && (a.datas.autostart = 1), a.datas.fullscreenonly && (a.datas.playsinline = 0)) : b = q.PC, c = k.buildUrl(b, a.datas), d.src = k.buildUrl(c, {
                        _r: Math.floor((new Date).getTime() / 36e5)
                    }), a.appendChild(d), this.playerIdCounter += 1
                },
                appendVideoTag: function(a, b) {
                    var c = document.createElement("source"),
                        d = document.createElement("video");
                    d.id = a.datas.id && !document.getElementById(a.datas.id) ? a.datas.id : a.getAttribute("data-key"), d.innerHTML = "Sorry, your web browser doesn't support the video element", i.isIos(3) && (d.poster = a.datas.poster, d.controls = !0), d.style.position = "absolute", g.VideoEventHandler.setup(d), k.append(d, g.VideoExtInterface), d.videoInit(), k.append(d, this.RapidExtInterface), d.rapidInit(a.datas.spaceid), b !== undefined ? d.setPlayerId(b) : d.setPlayerId(this.playerIdCounter), d.setAttribute("controlslist", "nodownload"), a.canInlineAutoplay() ? (d.setAttribute("webKit-playsinline", "webKit-playsinline"), d.setAttribute("playsinline", "playsinline"), b === undefined && d.setAttribute("autoplay", "true")) : i.isIos() && i.compareMobileOsMajorVersion(10) >= 0 && (d.setAttribute("webKit-playsinline", "webKit-playsinline"), d.setAttribute("playsinline", "playsinline")), a.datas.mute && (d.setAttribute("muted", "true"), d.muted = !0), d.setPlayer(a), d.setPlayerId(this.playerIdCounter), d.setElementId(d.id), d.resize(1, 1), a.setDisplayVideo(!1), a.parentNode.style.display = "table-cell", d.appendChild(c), a.parentNode.style.backgroundColor = "#000", a.firstChild ? a.insertBefore(d, a.firstChild) : a.appendChild(d), d.setEventElem(a.eventElem), a.setVideo(d), a.setExtFullScreenEnabled(a.datas.fullscreenonly), this.playerIdCounter += 1
                },
                doView4PlayerReady: function(a, b) {
                    var c, d, e, f, g = "playerReady";
                    if (!K.canEmbed() || (i.isAndroid() || i.isIos()) && b.datas.onlycore) {
                        if (i.isAndroid() || i.isIos()) {
                            d = i.isAndroid() ? "ready_a" : "ready_i", a.addLinkData(g, {
                                mod: {
                                    name: d
                                },
                                links: [{
                                    params: {
                                        sec: d,
                                        slk: "st"
                                    }
                                }]
                            }), a.addLinkData(g, {
                                mod: {
                                    name: d
                                },
                                links: [{
                                    params: {
                                        sec: d,
                                        slk: "click"
                                    }
                                }]
                            }), f = !0;
                            var h = a.id.charAt();
                            h.match(/\d/) && (c = {
                                yvp_p_id: b.datas.id,
                                yvp_dmn: b.datas.domain.substr(0, 8)
                            }, a.addLinkData(g, {
                                mod: {
                                    name: "id_f_num"
                                },
                                links: [{
                                    params: {
                                        sec: "id_f_num",
                                        slk: "ng"
                                    }
                                }]
                            }));
                            var j = "usedprm";
                            0 === b.datas.outputelement && a.addLinkData(g, {
                                mod: {
                                    name: j
                                },
                                links: [{
                                    params: {
                                        sec: j,
                                        slk: "outelem"
                                    }
                                }]
                            }), 1 === b.datas.fullscreenonly && a.addLinkData(g, {
                                mod: {
                                    name: j
                                },
                                links: [{
                                    params: {
                                        sec: j,
                                        slk: "fullonly"
                                    }
                                }]
                            }), 1 === b.datas.autostartikm && a.addLinkData(g, {
                                mod: {
                                    name: j
                                },
                                links: [{
                                    params: {
                                        sec: j,
                                        slk: "autoikm"
                                    }
                                }]
                            }), 1 === b.datas.onlycore && a.addLinkData(g, {
                                mod: {
                                    name: j
                                },
                                links: [{
                                    params: {
                                        sec: j,
                                        slk: "onlycore"
                                    }
                                }]
                            }), a.addEventListener("yvpubStartVideo", function() {
                                e || (e = !0, a.doClick(g, {
                                    sec: d,
                                    slk: "st"
                                }))
                            }, !1)
                        }
                    } else if (!i.isAndroid() && !i.isIos()) {
                        var k = i.getOs().replace(/_/g, "").replace("Windows", "w"),
                            l = k,
                            m = YAHOO.JP.lib.env.browser.code.slice(0, 2),
                            n = m.charAt(0).toUpperCase() + m.slice(1),
                            o = parseInt(YAHOO.JP.lib.env.browser.version, 10); - 1 !== k.indexOf("XP") && (l = "wXP"), -1 !== k.indexOf("Vista") && (l = "wVista"), -1 !== k.indexOf("Mac") && (l = "mac"), a.addLinkData(g, {
                            mod: {
                                name: "env"
                            },
                            links: [{
                                params: {
                                    sec: "env",
                                    slk: l + "_" + n,
                                    pos: o
                                }
                            }]
                        }), f = !0
                    }
                    f && a.doView(g, c)
                },
                setupPlayList: function(a) {
                    var b;
                    for (a.datas.repeat && a.setRepeat(!0), b = 0; b < a.datas.contentid.length; b++) a.addContentsList(a.datas.contentid[b]);
                    a.datas.contentid = a.datas.contentid[0]
                },
                setupContent: function(a, b, c) {
                    c = c || function() {}, c(), a.video.getVideoObject() !== b && this.setupContentVideo(a, b), c(), L.init(a.video.getElementId(), {
                        contentid: a.datas.contentid,
                        spaceid: a.datas.spaceid
                    }), c(), a.video.setupAdManager(new g.AdManager(a.video, a.datas.spaceid)), a.video.getAdManager().adInit(a.datas.inst, a.datas.sigs), c(), a.appendPlayButton(), a.appendLoading(), a.appendHeader(), a.appendThumbnail(), a.appendGyaoLogoHead(), a.appendGyaoLogoBottom(), a.appendMuteVisual(), a.appendClickScreen(), c(), a.setThumbnailSrc(a.datas.poster), a.setHeaderText(a.datas.meta.title), a.video.title = a.datas.meta.title
                },
                setupContentVideo: function(a, b) {
                    var c = b.url || a.datas.poster;
                    a.video.setContentSrc(c), a.video.setVideoObject(b), a.isFullScreenEnabled() && (k.canChainMedia() ? i.isIos() && i.compareMobileOsMajorVersion(8) < 0 || (a.video.setMedia({
                        type: "start"
                    }), a.video.preload = "metadata") : (a.video.setMedia(), a.video.preload = "metadata"))
                },
                parseCheckResult: function(a) {
                    var b, c, d, e, f, g, h;
                    try {
                        if (!a.ResultSet.Result[0].Check) throw {
                            type: "apiParse"
                        };
                        for (d = a.ResultSet.Result[0].Check, e = k.objKeys(d), f = 0, g = e.length; f < g; f += 1)
                            if (h = e[f], parseInt(d[h], 10)) throw this.getExceptionObj(e[f])
                    } catch (e) {
                        throw b = e && e.type, c = e && e.config, {
                            type: b || "apiParse",
                            config: c
                        }
                    }
                },
                parseContentApiResult: function(a, b) {
                    var c, d, e = b.quality;
                    try {
                        var f, g, h, j, l, m, n, o = k.objGetValue(a, ["ResultSet", "Result", 0]),
                            p = {},
                            q = {},
                            r = {},
                            s = {},
                            t = [];
                        if (!o || !o.VideoUrlSet) throw {
                            type: "apiParse"
                        };
                        if (f = o.VideoUrlSet.asset, g = o.VideoUrlSet.VideoUrl, q.title = o.Title, q.thumbnail = o.Thumbnail ? o.Thumbnail.ThumbnailUrl : undefined, q.channelId = o.ChannelId, q.gyaoContentsFlag = Boolean(Number(o.GyaoContentsFlag)), p.device = o.Client ? o.Client.Device : {}, o.LogUrlSet)
                            for (h = 0, j = o.LogUrlSet.LogUrl.length; h < j; h += 1) l = o.LogUrlSet.LogUrl[h].type, r[l] = o.LogUrlSet.LogUrl[h].Url;
                        switch (f) {
                            case y.PACKAGED:
                                var u;
                                for (k.isHighRatePlayEnv() ? g.sort(function(a, b) {
                                        return a.bitrate > b.bitrate ? -1 : a.bitrate < b.bitrate ? 1 : 0
                                    }) : g.sort(function(a, b) {
                                        return a.bitrate < b.bitrate ? -1 : a.bitrate > b.bitrate ? 1 : 0
                                    }), u = g[0], h = 0, j = g.length; h < j; h++) g[h]["class"] === b.packagedclass && (u = g[h]);
                                t.push(u), s = t[0], m = s.Url, e = 0, n = s.bitrate;
                                break;
                            default:
                                for (h = 0, j = g.length; h < j; h += 1) i.isAndroid() && "progressive" === g[h].delivery ? t.push(g[h]) : i.isAndroid() || "hls" !== g[h].delivery || t.push(g[h]);
                                if (!t.length) throw {
                                    type: "apiParse"
                                };
                                s = this.getVideoItem(t, e), m = s.url, e = s.quality, n = s.bitrate
                        }
                        if (d = this.getAd(k.objGetValue(o, ["AdSet", "Ad"], [])), "" === m) throw {
                            type: "apiParse"
                        };
                        return H("FileURL:" + m), H("quality:" + e), {
                            url: m,
                            meta: q,
                            client: p,
                            logUris: r,
                            quality: e,
                            bitrate: n,
                            ad: d
                        }
                    } catch (e) {
                        throw H(e.toString()), c = e && e.type, {
                            type: c || "apiParse"
                        }
                    }
                    return {
                        url: "",
                        meta: {},
                        client: {},
                        logUris: {},
                        quality: 0,
                        bitrate: undefined,
                        ad: d
                    }
                },
                getAd: function(a) {
                    var b, c = [],
                        d = [];
                    if (k.adEnable())
                        for (b = 0; b < a.length; b++) c.push({
                            Location: a[b].InsertPos.toLowerCase(),
                            Position: a[b].Position
                        }), d.push({
                            attributes: {
                                pos: a[b].Position
                            },
                            value: a[b].Signature
                        });
                    return {
                        inst: c,
                        sigs: d
                    }
                },
                getVideoItem: function(a, b) {
                    var c, d, e, f, g = i.isSmartPhone() ? v.PRIORITY.SMARTPHONE : v.PRIORITY.TABLET;
                    for (b = v.MAP.Q2B[Number(b)], i.isIos() && g.unshift(0), b && (i.isSmartPhone() || !i.isSmartPhone() && b !== v.CUT_LINE.TABLET) && g.unshift(b), f = a.length, c = 0, d = g.length; c < d; c += 1)
                        for (e = 0; e < f; e += 1)
                            if (g[c] === a[e].bitrate) return {
                                url: a[e].Url,
                                quality: v.MAP.B2Q[a[e].bitrate],
                                bitrate: a[e].bitrate
                            }
                },
                getExceptionObj: function(a) {
                    var b = {};
                    switch (a) {
                        case "Domestic":
                            b = {
                                type: "env",
                                config: {
                                    type: "DOMESTIC"
                                }
                            };
                            break;
                        case "Device":
                            b = {
                                type: "env",
                                config: {
                                    type: "DEVICE",
                                    msgType: i.isAndroid() || i.isIos() ? "DEVICE_PC" : "DEVICE_SMDV"
                                }
                            };
                            break;
                        case "Status":
                            b = {
                                type: "env",
                                config: {
                                    type: "STATUS"
                                }
                            };
                            break;
                        case "Period":
                            b = {
                                type: "env",
                                config: {
                                    type: "PERIOD"
                                }
                            };
                            break;
                        case "Domain":
                            b = {
                                type: "env",
                                config: {
                                    type: "DOMAIN"
                                }
                            };
                            break;
                        case "Environment":
                            b = {
                                type: "env",
                                config: {
                                    type: "DEVCAT_ENV"
                                }
                            }
                    }
                    return b
                },
                buildContent: function(a, b, c) {
                    var d, e, f, j = this,
                        k = function() {
                            return i.isIos() || i.isAndroid() ? a.datas.contentid : a.datas.contentid.split(",")[0]
                        },
                        l = t.URI.GET_CONTENT + k(),
                        m = this.makeGetContentQuery(a);
                    g.PlayerAjax.fetchContentUrls(l, m, a, function(g) {
                        try {
                            j.parseCheckResult(g), f = j.parseContentApiResult(g, a.datas), a.datas.quality = f.quality, a.datas.bitrate = f.bitrate, a.datas.meta = f.meta, a.datas.poster = f.meta.thumbnail, a.datas.logUris = f.logUris, a.datas.inst = f.ad.inst, a.datas.sigs = f.ad.sigs, j.setupContent(a, f), b()
                        } catch (e) {
                            c !== undefined && c() && (d = e && e.type, e = e && e.config, h.fire(a, d || "apiParse", e))
                        }
                    }, function() {
                        c !== undefined && c() && h.fire(a, "apiGeneral")
                    })
                },
                setCustomEvent: function() {
                    k.objKeys(u.EVENT).length || (u.EVENT.yvpubStartVideo = document.createEvent("HTMLEvents"), u.EVENT.yvpubStartVideo.initEvent("yvpubStartVideo", !0, !1), u.EVENT.yvpubPlay = document.createEvent("HTMLEvents"), u.EVENT.yvpubPlay.initEvent("yvpubPlay", !0, !1), u.EVENT.yvpubPause = document.createEvent("HTMLEvents"), u.EVENT.yvpubPause.initEvent("yvpubPause", !0, !1), u.EVENT.yvpubTimeupdate = document.createEvent("HTMLEvents"), u.EVENT.yvpubTimeupdate.initEvent("yvpubTimeupdate", !0, !1), u.EVENT.yvpubEndVideo = document.createEvent("HTMLEvents"), u.EVENT.yvpubEndVideo.initEvent("yvpubEndVideo", !0, !1), u.EVENT.yvpubError = document.createEvent("HTMLEvents"), u.EVENT.yvpubError.initEvent("yvpubError", !0, !1), u.EVENT.yvpubStartAd = document.createEvent("HTMLEvents"), u.EVENT.yvpubStartAd.initEvent("yvpubStartAd", !0, !1), u.EVENT.yvpubEndAd = document.createEvent("HTMLEvents"), u.EVENT.yvpubEndAd.initEvent("yvpubEndAd", !0, !1), u.EVENT.yvpubEndAll = document.createEvent("HTMLEvents"), u.EVENT.yvpubEndAll.initEvent("yvpubEndAll", !0, !1), u.EVENT.yvpubEnterFullscreen = document.createEvent("HTMLEvents"), u.EVENT.yvpubEnterFullscreen.initEvent("yvpubEnterFullscreen", !0, !1), u.EVENT.yvpubCancelFullscreen = document.createEvent("HTMLEvents"), u.EVENT.yvpubCancelFullscreen.initEvent("yvpubCancelFullscreen", !0, !1), u.EVENT.yvpubChangeMedia = document.createEvent("HTMLEvents"), u.EVENT.yvpubChangeMedia.initEvent("yvpubChangeMedia", !0, !1))
                },
                setLibraryEventListener: function(a, b) {
                    b.addEventListener("libStartVideo", function() {
                        L.onStartVideo(a)
                    }, !1), b.addEventListener("libPlay", function() {
                        L.onPlay(a)
                    }, !1), b.addEventListener("libPause", function() {
                        L.onPause(a)
                    }, !1), b.addEventListener("libTimeupdate", function() {
                        L.onTimeupdate(a)
                    }, !1), b.addEventListener("libEndVideo", function() {
                        L.onEndVideo(a)
                    }, !1), b.addEventListener("libError", function() {
                        L.onError(a)
                    }, !1), b.addEventListener("libStartAd", function() {
                        L.onStartAD(a)
                    }, !1), b.addEventListener("libEndAd", function() {
                        var b = document.getElementById(a),
                            c = Math.floor((new Date).getTime() / 1e3);
                        M.set(c, 0), b.getPlayer().setFrequencyCap({
                            set_time: c,
                            str_sec: 0
                        }), L.onEndAD(a)
                    }, !1), b.addEventListener("libEndAll", function() {
                        L.onEndAll(a)
                    }, !1), b.addEventListener("libEnterFullscreen", function() {
                        var b = document.getElementById(a).getPlayer();
                        b.datas.fullscreenonly && (b.hideRecommend(), b.hideLoading(), b.showThumbnail(), b.showPlayButton(), b.showHeader(), b.showGyaoLogoBottom(), b.hideMuteVisual(), b.hideClickScreen()), L.onEnterFullscreen(a)
                    }, !1), b.addEventListener("libCancelFullscreen", function() {
                        L.onCancelFullscreen(a)
                    }, !1)
                },
                setIframeEventLibrary: function(a, b) {
                    var c = this,
                        d = b.id,
                        e = function(a) {
                            if (document.getElementById(d) !== b) return window.removeEventListener("mousemove", e, !1), window.removeEventListener("mouseup", e, !1), void window.removeEventListener("mousedown", e, !1);
                            var c = JSON.stringify({
                                id: d,
                                type: a.type,
                                option: {
                                    pageX: a.pageX - b.getBoundingClientRect().left
                                }
                            });
                            b.contentWindow.postMessage(c, b.src)
                        },
                        f = function() {
                            "undefined" != typeof onYvpubPlayerError && window.onYvpubPlayerError({
                                elem: a
                            })
                        };
                    b.addEventListener("yvpubError", f), b.addEventListener("yvpubPlayerReady", function() {
                        if (a.datas.callback && "undefined" != typeof window[a.datas.callback]) try {
                            window[a.datas.callback](b)
                        } catch (e) {
                            G(e)
                        } else if ("function" == typeof onYvpubPlayerReady) try {
                            window.onYvpubPlayerReady(b)
                        } catch (e) {
                            G(e)
                        }
                        a.datas.autostart || i.isAndroid() || i.isIos() || YAHOO.JP.rma.exclude.video.mask.setVideo(a), c.doView4PlayerReady(b, a), i.isAndroid() || i.isIos() || (window.addEventListener("mousemove", e, !1), window.addEventListener("mouseup", e, !1), window.addEventListener("mousedown", e, !1))
                    }), i.isAndroid() || i.isIos() || (b.addEventListener("yvpubStartAd", function() {
                        YAHOO.JP.rma.exclude.video.mask.show()
                    }), b.addEventListener("yvpubEndAd", function() {
                        YAHOO.JP.rma.exclude.video.mask.hide()
                    })), b.addEventListener("yvpubParentEnterFullscreen", function() {
                        l.enter(b)
                    }), b.addEventListener("yvpubParentCancelFullscreen", function() {
                        l.cancel(b)
                    })
                },
                handleDomFullscreen: function(a, b) {
                    var c = null,
                        d = function() {
                            if (document.fullscreenEnabled) {
                                var a = document.webkitFullscreenElement || document.fullscreenElement;
                                a === b ? b.enteredFullscreen() : null === document.webkitFullscreenElement && null === document.fullscreenElement && c === b && b.canceledFullscreen(), c = a
                            }
                        };
                    a.datas.fullscreenonly && !a.datas.onlycore && i.isAndroid() && (document.addEventListener("webkitfullscreenchange", d, !1), document.addEventListener("fullscreenchange", d, !1))
                },
                setupRecommendSlider: function(a) {
                    if (a.recommend) {
                        var b = this,
                            c = function() {
                                var b = a.rcmWrap.childNodes;
                                0 === a.recommend.getCurrent() ? b[1].style.opacity = "0.2" : b[1].style.opacity = "1.0", a.recommend.getCurrent() === a.recommend.childNodes.length - 1 ? b[2].style.opacity = "0.2" : b[2].style.opacity = "1.0"
                            };
                        k.append(a.recommend, g.SlideDOMExtInterface), a.recommend.createSlideEvent(), a.recommend.addEventListener("onSetup", function() {
                            var a, b = this.getElementsByTagName("p");
                            for (c(), a = 0; a < b.length; a++) b[a].style.width = Math.ceil(.96 * this.slideW) + "px"
                        }, !1), a.recommend.addEventListener("onSlideStart", function() {
                            c(), b.buildRecommendItem(a, a.recommend.getChild(this.getCurrent()))
                        }, !1)
                    }
                },
                buildEndScreen: function(a, b, c) {
                    if (a.datas.recommend && a.datas.outputelement && !a.datas.onlycore) {
                        for (a.showLoading(!0); a.recommend.childNodes.length;) a.recommend.removeChild(a.recommend.firstChild);
                        this.buildRecommend(a, b, c)
                    } else c()
                },
                buildRecommend: function(a, b, c) {
                    var d, e, f = this,
                        h = i.isSmartPhone() ? "1" : "2",
                        j = k.getScale(a.datas.width, a.datas.height, u.RATIO.WIDTH, u.RATIO.HEIGHT),
                        l = t.URI.GET_RECOMMEND + a.datas.contentid,
                        m = {
                            appid: t.APPID,
                            output: "json",
                            device: h,
                            domain: a.datas.domain,
                            logic_option: "RC",
                            thumb_width: Math.round(u.RATIO.WIDTH * j),
                            thumb_height: Math.round(u.RATIO.HEIGHT * j),
                            thumb_priority: "b",
                            start: 1,
                            result: 3
                        };
                    switch (a.datas.recommend) {
                        case F.TYPE.SAME_CHANNEL:
                            m.channel_id = a.datas.meta.channelId, a.datas.recommendchannelid && (m.channel_id += "," + a.datas.recommendchannelid);
                            break;
                        default:
                            a.datas.recommendchannelid && (m.channel_id = a.datas.recommendchannelid)
                    }
                    a.datas.recommendikm && (m.page_domain = "videotopics.yahoo.co.jp"), g.PlayerAjax.fetchContentUrls(l, m, a, function(g) {
                        try {
                            if (d = k.objGetValue(g, ["ResultSet", "Result"], []), d.length > 0) {
                                for (f.appendRecommendItem(a, b, 1), e = 0; e < d.length; e++) f.appendRecommendItem(a, d[e], e + 2);
                                a.video.doView("recommend"), a.recommend.setup(.7 * a.datas.width, a.datas.height), a.showRecommend(), a.hideMuteVisual(), a.hideClickScreen(), setTimeout(function() {
                                    a.recommend.slide(1), a.datas.recommendikm && a.hideLoading()
                                }, 700)
                            } else c()
                        } catch (e) {
                            c()
                        }
                    }, function() {
                        c()
                    })
                },
                appendRecommendItem: function(a, b, c) {
                    var d = this,
                        e = i.isAndroid() ? "rec_a" : "rec_i",
                        f = a.datas.recommendikm && c > 1 ? "open" : "link",
                        g = document.createElement("div"),
                        h = document.createElement("div"),
                        j = document.createElement("div"),
                        l = document.createElement("p"),
                        m = document.createElement("img"),
                        n = document.createElement("p");
                    g.style.width = "1px", g.style.height = "1px", g.style.display = "table-cell", g.style.verticalAlign = "top", h.style.margin = "12% 2% 0%", j.style.position = "relative", j.style.width = "100%", l.style.position = "absolute", l.style.width = "100%", l.style.height = "100%", l.style.margin = "0px", l.style.padding = "0px", m.width = "100%", m.height = "auto", m.style.width = "100%", m.style.height = "auto", m.style.margin = "0 auto", m.style.padding = "0", m.style.verticalAlign = "bottom", j.appendChild(l), j.appendChild(m), g.setAttribute("data-idx", c), n.style.color = "#fff", n.style.textOverflow = "ellipsis", n.style.whiteSpace = "nowrap", n.style.overflow = "hidden", n.style.margin = "3% 0px 0px", k.append(g, this.RecommendExtInterface), 1 === c ? (l.style.background = "url(" + E.REPLAY_BUTTON.SRC + ")no-repeat", n.innerText = b.meta.title, g.setAttribute("data-key", "current"), g.setVideoObject(b), g.setContentId(a.datas.contentid), k.setImageWizardSrc(m, b.meta.thumbnail, E.IMAGE.BLANK_16X9.SRC)) : (a.datas.recommendikm ? l.style.background = "url(" + E.PAGE_LINK.SRC + ")no-repeat" : l.style.background = "url(" + E.PLAY_BUTTON.SRC + ")no-repeat", n.innerText = b.Title, g.setContentId(b.contentid), k.setImageWizardSrc(m, b.Thumbnail.ThumbnailUrl, E.IMAGE.BLANK_16X9.SRC)), l.style.backgroundSize = "cover", g.onclick = function() {
                        if (a.datas.recommendikm && !g.getVideoObject()) return a.video.doClick("recommend", {
                            sec: e,
                            slk: f,
                            pos: c
                        }), void(location.href = b.PageUrl);
                        g.getVideoObject() && (a.recommend.durationClear(), l.style.visibility = "hidden", a.video.doClick("recommend", {
                            sec: e,
                            slk: f,
                            pos: c
                        }), c > 1 && L.onChangeMedia(a.video.getElementId()), k.objMerge(a.datas, g.getDatas()), d.setupContent(a, g.getVideoObject()), a.Loading2Play())
                    }, h.appendChild(j), h.appendChild(n), g.appendChild(h), a.recommend.appendChild(g), a.video.addLinkData("recommend", {
                        mod: {
                            name: e
                        },
                        links: [{
                            params: {
                                sec: e,
                                slk: f,
                                pos: c
                            }
                        }]
                    })
                },
                buildRecommendItem: function(a, b) {
                    if (!a.datas.recommendikm || b.getVideoObject()) {
                        if (b.getVideoObject() || b.getError()) return void(a.isFullScreenEnabled() && this.setupContentVideo(a, b.getVideoObject()));
                        var c, d, e, f, i = this,
                            j = t.URI.GET_CONTENT + b.getContentId(),
                            k = this.makeGetContentQuery(a),
                            l = {},
                            m = function(c) {
                                for (var d = null, e = b.getElementsByTagName("p"), f = document.createElement("p"), g = document.createElement("span"); e.length;) e[0].parentNode.removeChild(e[0]);
                                d = b.childNodes[0].childNodes[0], f.style.position = "absolute", f.style.width = "100%", f.style.height = "100%", f.style.margin = "0px", f.style.padding = "0px", f.style.top = 0, f.style.color = "#fff", f.style.backgroundColor = "rgba(0,0,0,0.8)", g.style.padding = "10% 5% 0", g.style.display = "block", g.style.lineHeight = "150%", g.innerHTML = c.msg.replace("。", "。<br>"), f.appendChild(g), d.appendChild(f), b.setError(c), a.hideLoading()
                            };
                        if (a.showLoading(!0), b.getVideoObject()) return a.isFullScreenEnabled() && i.setupContentVideo(a, b.getVideoObject()), void a.hideLoading();
                        g.PlayerAjax.fetchContentUrls(j, k, a, function(g) {
                            try {
                                i.parseCheckResult(g), f = i.parseContentApiResult(g, a.datas), l.contentid = b.getContentId(), l.quality = f.quality, l.bitrate = f.bitrate, l.meta = f.meta, l.poster = f.meta.thumbnail, l.logUris = f.logUris, l.inst = [], l.sigs = f.ad.sigs, b.setVideoObject(f), b.setDatas(l), a.isFullScreenEnabled() && i.setupContentVideo(a, b.getVideoObject()), a.hideLoading()
                            } catch (e) {
                                c = e && e.type, d = e && e.config, e = h.getException(c || "apiParse", d), m(e)
                            }
                        }, function() {
                            e = h.getException("apiGeneral"), m(e)
                        })
                    }
                },
                PlayerEventExtInterface: {
                    handles: {},
                    addEventListener: function(a, b, c) {
                        this.handles[this.id + "_" + a] = b
                    },
                    dispatchEvent: function(a, b) {
                        this.handles[this.id + "_" + a] !== undefined && this.handles[this.id + "_" + a](this)
                    }
                },
                RapidExtInterface: {
                    ins: {},
                    linkData: {},
                    spaceid: null,
                    rapidInit: function(a) {
                        this.ins = {}, this.linkData = {}, a && (this.spaceid = a)
                    },
                    _getDefaultSpaceId: function() {
                        return i.isIos() || i.isAndroid() ? i.isSmartPhone() ? z.DEFAULT.SMARTPHONE : z.DEFAULT.TABLET : z.DEFAULT.PC
                    },
                    addLinkData: function(a, b) {
                        this.linkData[a] ? this.linkData[a].push(b) : this.linkData[a] = [b]
                    },
                    _setupBeaconer: function(a, b) {
                        b = b || {};
                        var c, d, e, f, g = this.linkData[a];
                        if (g) {
                            if ("coke" === a) c = {
                                page01: "yvpub_player",
                                coke: "r10025"
                            };
                            else
                                for (c = {
                                        page01: "yvpub_player",
                                        yvp_bckt: I.getBucket() || "undefined",
                                        yvp_spid: this.spaceid || this._getDefaultSpaceId(),
                                        log_from: "playerjs",
                                        ply_ver: "1.7.4_1"
                                    }, e = k.objKeys(b), d = 0; d < e.length; d++) f = e[d], c[f] = b[f];
                            this.ins[a] = YAHOO.emdrpd.Beaconer({
                                beacon_server: "ybx.yahoo.co.jp",
                                https: k.isHttps(),
                                keys: c,
                                link_data: g,
                                spaceid: this._getDefaultSpaceId()
                            })
                        }
                    },
                    doView: function(a, b) {
                        this._setupBeaconer(a, b), this.ins[a] && this.ins[a].doViewBeacon(0), this.linkData[a] = []
                    },
                    doClick: function(a, b) {
                        this.ins[a] ? this.ins[a].doClickBeacon(b) : this.doStaticClick(b)
                    },
                    doStaticClick: function(a) {
                        var b = [{
                            mod: {
                                name: a.sec
                            },
                            links: [{
                                name: a.slk,
                                params: {
                                    sec: a.sec,
                                    slk: a.slk
                                }
                            }]
                        }];
                        YAHOO.emdrpd.Beaconer({
                            beacon_server: "ybx.yahoo.co.jp",
                            https: k.isHttps(),
                            keys: {},
                            link_data: b,
                            spaceid: this.spaceid || this._getDefaultSpaceId()
                        }).doClickBeacon(a)
                    }
                },
                YvpubDOMInterface: {
                    eventElem: null,
                    image: null,
                    head: null,
                    playBt: null,
                    recommend: null,
                    rcmWrap: null,
                    loading: null,
                    gyaoLogoHead: null,
                    gyaoLogoHeadDmy: null,
                    gyaoLogoBottom: null,
                    muteVisual: null,
                    clickScreen: null,
                    muteVisualTimerId: null,
                    displayVideo: !1,
                    endScreenBuilt: !1,
                    frequencyCap: null,
                    getDisplayVideo: function() {
                        return this.displayVideo
                    },
                    setDisplayVideo: function(a) {
                        this.displayVideo = a
                    },
                    getEndScreenBuilt: function() {
                        return this.endScreenBuilt
                    },
                    setEndScreenBuilt: function(a) {
                        this.endScreenBuilt = a
                    },
                    getFrequencyCap: function() {
                        return this.frequencyCap
                    },
                    setFrequencyCap: function(a) {
                        this.frequencyCap = a
                    },
                    setSuitablePlayerSize: function(a, b, c) {
                        var d, e, f = k.getScale(a, b, u.RATIO.WIDTH, u.RATIO.HEIGHT);
                        d = Math.round(u.RATIO.WIDTH * f), e = Math.round(u.RATIO.HEIGHT * f), this.style.width = d + "px", this.style.height = e + "px", this.video && this.getDisplayVideo() && this.video.resize(d, e), this.datas.width = d, this.datas.height = e, c && (this.datas.wrapWidth = a, this.datas.wrapHeight = b)
                    },
                    resize: function(a, b) {
                        this.parentNode.style.width = a + "px", this.parentNode.style.height = b + "px", this.setSuitablePlayerSize(a, b, !0), this.recommend && this.recommend.setup(.7 * this.datas.width, this.datas.height)
                    },
                    mute: function(a) {
                        a = !!a, this.video.muted = a, this.datas.mute = a ? 1 : 0, !1 === a && this.setHasMuteCanceled()
                    },
                    setThumbnailSrc: function(a) {
                        this.image && k.setImageWizardSrc(this.image, a, E.IMAGE.BLANK_16X9.SRC)
                    },
                    setHeaderText: function(a) {
                        this.head && (this.head.getElementsByTagName("span")[0].textContent = a)
                    },
                    appendEventElem: function() {
                        if (!this.eventElem) {
                            var a = document.createElement("div");
                            a.style.position = "absolute", a.style.visibility = "hidden", k.append(a, g.eventDOMExtInterface), a.createPlayerEvent(), this.appendChild(a), this.eventElem = a
                        }
                    },
                    showThumbnail: function() {
                        this.image && this.video && (this.image.style.visibility = "visible", this.video.resize(1, 1), this.displayVideo = !1)
                    },
                    hideThumbnail: function() {
                        this.hideLoading(), this.image && this.video && (this.image.style.visibility = "hidden")
                    },
                    appendThumbnail: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && !this.image) {
                            var a = document.createElement("img");
                            a.width = "100%", a.height = "100%", a.style.position = "absolute", a.style.width = "100%", a.style.height = "100%", a.style.margin = "0 auto", a.style.padding = "0", this.appendChild(a), this.image = a, this.showThumbnail()
                        }
                    },
                    showPlayButton: function() {
                        this.playBt && this.video && (this.playBt.style.backgroundImage = "url(" + E.PLAY_BUTTON.SRC + ")", this.playBt.style.visibility = "visible")
                    },
                    showEndPlayButton: function() {
                        this.playBt && this.video && (i.isIos() && i.compareMobileOsMajorVersion(5) <= 0 && this.video.removeAttribute("src"), this.playBt.style.backgroundImage = "url(" + E.REPLAY_BUTTON.SRC + ")", this.playBt.style.visibility = "visible")
                    },
                    hidePlayButton: function() {
                        this.playBt && this.video && (this.playBt.style.visibility = "hidden")
                    },
                    appendPlayButton: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && !this.playBt) {
                            var a = this,
                                b = document.createElement("p"),
                                c = i.isAndroid() ? "ready_a" : "ready_i",
                                d = i.isAndroid() ? "again_a" : "again_i",
                                e = "click";
                            b.style.position = "absolute", b.style.width = "100%", b.style.height = "100%", b.style.margin = "0px", b.style.padding = "0px", b.style.zIndex = 3, b.style.backgroundRepeat = "no-repeat", b.style.backgroundSize = "cover", b.onclick = function() {
                                this.getAttribute("data-played") ? a.video.doClick("playAgain", {
                                    sec: d,
                                    slk: e
                                }) : (this.setAttribute("data-played", "1"), a.video.doClick("playerReady", {
                                    sec: c,
                                    slk: e
                                })), a.Loading2Play()
                            }, this.appendChild(b), this.playBt = b, this.showPlayButton()
                        }
                    },
                    showHeader: function() {
                        this.head && this.video && this.datas.meta.title && (this.head.style.visibility = "visible")
                    },
                    hideHeader: function() {
                        this.head && this.video && this.datas.meta.title && (this.head.style.visibility = "hidden")
                    },
                    appendHeader: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && !this.head) {
                            var a = document.createElement("div"),
                                b = document.createElement("span");
                            this.datas.meta.title && this.setHeaderText(this.datas.meta.title), a.style.display = "flex", a.style.width = "100%", a.style.color = "#FFF", a.style.position = "absolute", a.style.padding = "3px 0", a.style.fontSize = "12px", a.style.zIndex = 3, a.style.backgroundColor = "rgba(0,0,0,0.6)", a.style.visibility = "hidden", b.style.paddingLeft = "5px", b.style.textOverflow = "ellipsis", b.style.whiteSpace = "nowrap", b.style.display = "block", b.style.overflow = "hidden", a.appendChild(b), this.appendChild(a), this.head = a, this.showHeader()
                        }
                    },
                    showLoading: function(a) {
                        if (this.loading && this.video) {
                            if (!a) {
                                if (i.isAndroid()) return this.hideRecommend(), this.hideThumbnail(), this.hideGyaoLogoHead(), void this.hideGyaoLogoBottom();
                                if (this.video.src && i.isIos() && i.isSmartPhone()) return void this.showPlayButton()
                            }
                            this.loading.style.visibility = "visible"
                        }
                    },
                    hideLoading: function() {
                        this.loading && this.video && (this.loading.style.visibility = "hidden")
                    },
                    appendLoading: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && !this.loading) {
                            var a = document.createElement("img");
                            a.style.position = "absolute", a.width = "100%", a.height = "100%", a.style.width = "100%", a.style.height = "100%", a.style.zIndex = 9, this.datas.poster && (a.style.opacity = .4), a.src = E.LOADING.SRC, this.appendChild(a), this.loading = a, this.hideLoading()
                        }
                    },
                    showRecommend: function() {
                        this.recommend && (this.rcmWrap.style.visibility = "visible", this.video.resize(1, 1), this.displayVideo = !1, this.showGyaoLogoHead())
                    },
                    hideRecommend: function() {
                        this.recommend && (this.rcmWrap.style.visibility = "hidden")
                    },
                    appendRecommend: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && !this.recommend) {
                            var a = document.createElement("div"),
                                b = document.createElement("div"),
                                c = (document.createElement("div"), document.createElement("div")),
                                d = document.createElement("div");
                            a.style.width = "100%", a.style.height = "100%", a.style.backgroundColor = "#000", a.style.position = "absolute", a.style.fontSize = "12px", b.style.width = "100%", b.style.display = "table", b.style.overflow = "hidden", b.style.position = "absolute", b.style.left = "15%", c.style.width = "20%", c.style.height = "100%", c.style.position = "absolute", c.style.background = "url(" + E.RECOMMEND.PREV.SRC + ") no-repeat 100% 46.5%", c.style.backgroundSize = "54% auto", c.style.zIndex = 4, c.ontouchend = function(a) {
                                var c = b.getCurrent() - 1;
                                b.slide(c), a.preventDefault()
                            }, d.style.width = "20%", d.style.height = "100%", d.style.position = "absolute", d.style.background = "url(" + E.RECOMMEND.NEXT.SRC + ") no-repeat 0 46.5%", d.style.backgroundSize = "54% auto", d.style.right = 0, d.style.zIndex = 4, d.ontouchend = function(a) {
                                var c = b.getCurrent() + 1;
                                b.slide(c), a.preventDefault()
                            }, a.appendChild(b), a.appendChild(c), a.appendChild(d), this.appendChild(a), this.recommend = b, this.rcmWrap = a, this.hideRecommend()
                        }
                    },
                    showGyaoLogoHead: function(a) {
                        this.hideGyaoLogoBottom(), this.gyaoLogoHead && this.video && this.datas.meta.gyaoContentsFlag && (this.gyaoLogoHead.style.visibility = "visible", this.gyaoLogoHeadDmy.style.display = "block", this.video.addLinkData("gyaologo", {
                            mod: {
                                name: "gylogo"
                            },
                            links: [{
                                params: {
                                    sec: "gylogo",
                                    slk: "open"
                                }
                            }]
                        }), this.video.doView("gyaologo"))
                    },
                    hideGyaoLogoHead: function(a) {
                        this.gyaoLogoHead && this.video && (this.gyaoLogoHead.style.visibility = "hidden", this.gyaoLogoHeadDmy.style.display = "none")
                    },
                    appendGyaoLogoHead: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && this.head && !this.gyaoLogoHead) {
                            var a = this,
                                b = document.createElement("span"),
                                c = document.createElement("div"),
                                d = document.createElement("span");
                            b.style.display = "none", b.style.margin = "1px 5px 0px 5px", b.style.width = "58.5px", b.style.minWidth = "58.5px", b.style.height = "16px", this.head.appendChild(b), this.gyaoLogoHeadDmy = b, c.style.width = "58.5px", c.style.height = "16px", c.style.position = "absolute", c.style.top = "4px", c.style.right = "5px", c.style.zIndex = 7, c.style.visibility = "hidden", d.style.display = "block", d.style.width = "58.5px", d.style.minWidth = "58.5px", d.style.height = "16px", d.style.backgroundImage = "url(" + E.LOGO.GYAO + ")", d.style.backgroundRepeat = "no-repeat", d.style.backgroundSize = "contain", d.onclick = function() {
                                a.video.doClick("gyaologo", {
                                    sec: "gylogo",
                                    slk: "open"
                                }), window.open(s.GYAO)
                            }, c.appendChild(d), this.appendChild(c), this.gyaoLogoHead = c
                        }
                    },
                    showGyaoLogoBottom: function(a) {
                        this.hideGyaoLogoHead(), this.gyaoLogoBottom && this.video && this.datas.meta.gyaoContentsFlag && (this.gyaoLogoBottom.style.visibility = "visible")
                    },
                    hideGyaoLogoBottom: function(a) {
                        this.gyaoLogoBottom && this.video && (this.gyaoLogoBottom.style.visibility = "hidden")
                    },
                    appendGyaoLogoBottom: function() {
                        if (this.datas.outputelement && !this.datas.onlycore && !this.gyaoLogoBottom) {
                            var a = document.createElement("div"),
                                b = document.createElement("span");
                            a.style.width = "75px", a.style.height = "20.5px", a.style.position = "absolute", a.style.bottom = "5px", a.style.right = "5px", a.style.zIndex = 7, a.style.visibility = "hidden", b.style.display = "block", b.style.width = "100%", b.style.height = "100%", b.style.backgroundImage = "url(" + E.LOGO.GYAO + ")", b.style.backgroundRepeat = "no-repeat", b.style.backgroundSize = "contain", a.appendChild(b), this.appendChild(a), this.gyaoLogoBottom = a, this.showGyaoLogoBottom()
                        }
                    },
                    showMuteVisual: function() {
                        var a = this;
                        if (a.muteVisual && a.video && a.canInlineAutoplay() && !a.getHasMuteCanceled()) {
                            if ("visible" === a.muteVisual.style.visibility) return;
                            a.video.addLinkData("muteVsl", {
                                mod: {
                                    name: "mute_vsl"
                                },
                                links: [{
                                    params: {
                                        sec: "mute_vsl",
                                        slk: "cancel"
                                    }
                                }]
                            }), a.video.doView("muteVsl"), a.muteVisual.style.visibility = "visible", a.showClickScreen()
                        }
                    },
                    transitionMuteVisual: function() {
                        var a = this;
                        if (a.muteVisual && a.video && a.canInlineAutoplay() && !a.getHasMuteCanceled() && "visible" === a.muteVisual.style.visibility && null === a.muteVisualTimerId) {
                            var b = a.muteVisual.getElementsByTagName("span")[0],
                                c = a.muteVisual.getElementsByTagName("span")[1];
                            a.muteVisualTimerId = setTimeout(function() {
                                a.muteVisual.style.width = "30px", b.style.opacity = "0.5", c.style.opacity = "0"
                            }, 3010)
                        }
                    },
                    cancelMute: function() {
                        var a = this;
                        a.muteVisual && a.video && (null !== a.muteVisualTimerId && clearTimeout(a.muteVisualTimerId), a.mute(!1), a.hideMuteVisual())
                    },
                    hideMuteVisual: function() {
                        this.muteVisual && this.video && (this.muteVisual.style.visibility = "hidden")
                    },
                    appendMuteVisual: function() {
                        var a = this;
                        if (a.datas.outputelement && !a.datas.onlycore && !a.muteVisual) {
                            var b = document.createElement("div"),
                                c = document.createElement("span"),
                                d = document.createElement("span");
                            b.style.width = "114px", b.style.height = "26px", b.style.position = "absolute", b.style.top = "5px", b.style.left = "5px", b.style.zIndex = 8, b.style.overflow = "hidden", b.style.willChange = "width", b.style.pointerEvents = "none", b.style.webkitTransition = "width 420ms 140ms", b.style.MozTransition = "width 420ms 140ms", b.style.msTransition = "width 420ms 140ms", b.style.OTransition = "width 420ms 140ms", b.style.transition = "width 420ms 140ms", b.style.visibility = "hidden", c.style.display = "block", c.style.position = "absolute", c.style.width = "114px", c.style.height = "26px", c.style.backgroundRepeat = "no-repeat", c.style.backgroundSize = "contain", c.style.backgroundImage = "url(" + E.MUTE_VISUAL.FRAME_ICON.SRC + ")", c.style.opacity = "0.8", c.style.webkitTransition = "opacity 320ms", c.style.MozTransition = "opacity 320ms", c.style.msTransition = "opacity 320ms", c.style.OTransition = "opacity 320ms", c.style.transition = "opacity 320ms", d.style.display = "block", d.style.position = "absolute", d.style.width = "114px", d.style.height = "26px", d.style.zIndex = 9, d.style.backgroundRepeat = "no-repeat", d.style.backgroundSize = "contain", d.style.backgroundImage = "url(" + E.MUTE_VISUAL.TEXT.SRC + ")", d.style.opacity = "0.8", d.style.webkitTransition = "opacity 320ms", d.style.MozTransition = "opacity 320ms", d.style.msTransition = "opacity 320ms", d.style.OTransition = "opacity 320ms", d.style.transition = "opacity 320ms", b.appendChild(c), b.appendChild(d), a.appendChild(b), a.muteVisual = b
                        }
                    },
                    showClickScreen: function() {
                        this.clickScreen && (this.clickScreen.style.visibility = "visible")
                    },
                    hideClickScreen: function() {
                        this.clickScreen && (this.clickScreen.style.visibility = "hidden")
                    },
                    appendClickScreen: function() {
                        var a = this;
                        if (a.datas.outputelement && !a.datas.onlycore && !a.clickScreen) {
                            var b = document.createElement("div");
                            b.style.width = "100%", b.style.height = "100%", b.style.position = "absolute", b.style.zIndex = 99, b.onclick = function(b) {
                                a.canInlineAutoplay() && !a.getHasMuteCanceled() && (a.cancelMute(), a.displayNativeControls(), a.video.doClick("muteVsl", {
                                    sec: "mute_vsl",
                                    slk: "cancel"
                                }), a.hideClickScreen(), b.preventDefault())
                            }, a.appendChild(b), a.clickScreen = b, a.hideClickScreen()
                        }
                    },
                    Loading2Play: function() {
                        this.datas.fullscreenonly || (this.hidePlayButton(), this.showLoading()), this.play()
                    }
                },
                IFrameExtInterface: {
                    listeners: [],
                    _vamosDatas: {},
                    listenersInit: function() {
                        this.listeners = []
                    },
                    getPlayer: function() {
                        return this
                    },
                    _postMessage: function(a, b) {
                        var c = JSON.stringify({
                            id: this.id,
                            type: "frameExtIf",
                            name: a,
                            option: b
                        });
                        this.contentWindow.postMessage(c, this.src)
                    },
                    play: function() {
                        this._postMessage("play")
                    },
                    pause: function() {
                        this._postMessage("pause")
                    },
                    resize: function(a, b) {
                        var c = this.parentNode,
                            d = c.parentNode;
                        Number(a) && (this.width = a, c.style.width = a + "px", d.style.width = a + "px"), Number(b) && (this.height = b, c.style.height = b + "px", d.style.height = b + "px")
                    },
                    seekFromSec: function(a) {
                        this._postMessage("seekFromSec", a)
                    },
                    addEventListener: function(a, b, c) {
                        var d = {};
                        "function" == typeof b && (d.eventName = a, d.callback = b), this.listeners.push(d)
                    },
                    fireEventListeners: function(a) {
                        var b, c, d;
                        for (b = 0, c = this.listeners.length; b < c; b += 1) d = this.listeners[b], d.eventName === a && this.listeners[b].callback(this)
                    },
                    enteredFullscreen: function() {
                        this._postMessage("enteredFullscreen")
                    },
                    canceledFullscreen: function() {
                        this._postMessage("canceledFullscreen")
                    },
                    mute: function(a) {
                        this._postMessage("muted", a)
                    },
                    isMute: function() {
                        return !!this._vamosDatas.isMute && this._vamosDatas.isMute
                    },
                    setVolume: function(a) {
                        this._postMessage("setVolume", a)
                    },
                    getVolume: function() {
                        return this._vamosDatas.volume !== undefined ? this._vamosDatas.volume : 1
                    },
                    getDuration: function() {
                        return this._vamosDatas.metaData && this._vamosDatas.metaData.duration
                    },
                    getCurrentTime: function() {
                        return this._vamosDatas.currentTime
                    },
                    isPlaying: function() {
                        return this._vamosDatas.isPlaying
                    },
                    storeData: function(a, b) {
                        switch (a) {
                            case "vamosTimeupdate":
                                this._vamosDatas.currentTime = b.data.currentTime;
                                break;
                            case "vamosLoadedcontentdata":
                                this._vamosDatas.metaData = b.data.metaData;
                                break;
                            case "vamosUpdatePlayerData":
                            case "vamosChangeVolume":
                                b.data.isPlaying !== undefined && (this._vamosDatas.isPlaying = b.data.isPlaying), b.data.volume !== undefined && (this._vamosDatas.isMute = b.data.isMute, this._vamosDatas.volume = b.data.volume)
                        }
                    }
                },
                RecommendExtInterface: {
                    contentId: null,
                    datas: null,
                    video: null,
                    error: null,
                    setContentId: function(a) {
                        this.contentId = a
                    },
                    getContentId: function() {
                        return this.contentId
                    },
                    setDatas: function(a) {
                        this.datas = a
                    },
                    getDatas: function() {
                        return this.datas
                    },
                    setVideoObject: function(a) {
                        this.video = a
                    },
                    getVideoObject: function() {
                        return this.video
                    },
                    setError: function(a) {
                        this.error = a
                    },
                    getError: function() {
                        return this.error
                    }
                }
            }, h.setCallback(function(a) {
                var b = a.elem,
                    c = document.createElement("div");
                if ("undefined" != typeof onYvpubPlayerError && window.onYvpubPlayerError(a), !b) return void window.alert(a.msg);
                if (!i.isAndroid() && !i.isIos() || b.datas.outputelement) {
                    for (b.embedParam && b.embedParam.replace(/=/g, ":").replace(/&/g, ","), b.parentNode.style.backgroundColor = "#000"; b.childNodes.length;) b.removeChild(b.firstChild);
                    b.parentNode.style.overflow = "hidden", b.style.verticalAlign = "middle", b.style.textAlign = "center", b.style.cursor = "pointer", b.onclick = function() {
                        window.open(i.isAndroid() || i.isIos() ? r.SMDV : r.PC_TAB)
                    }, c.style.fontSize = "14px", c.style.zIndex = 3, c.style.color = "#FFF", c.style.position = "relative", a.code && (c.innerHTML = '<span style="font-size:10px;">エラーコード：' + a.code + "</span>"), c.innerHTML += "<div>" + a.msg.replace("。", "。<br>") + "詳しくはヘルプをご確認ください。</div>", b.appendChild(c), c.style.top = (b.clientHeight - c.offsetHeight) / 2 + "px", k.append(b, m.RapidExtInterface), b.rapidInit(b.datas.spaceid), b.addLinkData("error", {
                        mod: {
                            name: "error"
                        },
                        links: [{
                            params: {
                                sec: "error",
                                slk: "errcode",
                                pos: a.code
                            }
                        }]
                    }), b.doView("error", {
                        yvp_cid: b.datas.contentid,
                        yvp_env: i.getOs(),
                        yvp_p_lv: a.options && a.options.processLevel
                    })
                }
            }), m = new e, f.prototype = {
                MAX_STORED_PLAYERS: 50,
                setup: function() {
                    var a, b, c, d = [];
                    for (d = k.getElementsByClassName("yvpub-player"), a = 0, b = d.length; a < b && a < this.MAX_STORED_PLAYERS; a += 1) d[a].getAttribute("data-composed") || ("div" === d[a].tagName.toLowerCase() ? this.players.push(m.compose(d[a], null, a)) : "script" === d[a].tagName.toLowerCase() && (c = document.createElement("div"), d[a].parentNode.insertBefore(c, d[a].nextSibling), this.players.push(m.compose(c, d[a].src, a))), d[a].setAttribute("data-composed", "1"));
                    return this
                },
                halt: function() {
                    var a, b;
                    for (a = 0, b = this.players.length; a < b; a += 1) m.halt(this.players[a]);
                    return this
                }
            },
            function() {
                try {
                    var b = new f;
                    a.init = function() {
                        b.setup()
                    }, a.halt = function() {
                        b.halt()
                    }, K.canEmbed() && window.addEventListener("message", function(a) {
                        if (a.origin === n + "//s.yimg.jp") {
                            var b, c;
                            try {
                                b = JSON.parse(a.data)
                            } catch (err) {
                                return !1
                            }
                            document.getElementById(b.id) && document.getElementById(b.id).fireEventListeners && (c = b.evt, document.getElementById(b.id).storeData(c, b), c = b.evt.replace("vamos", "yvpub"), document.getElementById(b.id).fireEventListeners(c))
                        }
                    }, !1), a.setEnvAndroidNetwork = function(a) {
                        i.androidnetwork = a
                    }, document.addEventListener ? k.addEventListener(document, "DOMContentLoaded", a.init) : i.isIE() ? k.addIEContentLoadedListener(a.init) : window.onload = a.init
                } catch (e) {
                    H(e.toString()), h.fire(null, "playerGeneral")
                }
            }()
    }(YAHOO.JP.yvpub.video);